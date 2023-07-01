/**
 * @example
 * sneakCase('test value') // => 'test_value'
 */
export function sneakCase(str: string) {
  if (typeof str !== "string")
    throw new Error("the passed param is not of type string");

  if (!str.length) return str;

  return str
    .toLocaleLowerCase()
    .replace(/\s+(\w)/g, (match) => `_${match.trim()}`);
}

/**
 * @example
 * titleCase('test value') // => 'TestValue'
 */
export function titleCase(str: string) {
  if (typeof str !== "string")
    throw new Error("the passed param is not of type string");

  if (!str.length) return str;

  return (
    str[0].toUpperCase() +
    str.slice(1).replace(/\s+(\w)/g, (match) => match.trim().toUpperCase())
  );
}

/**
 * @example
 * camelCase('test value') // => 'testValue'
 */
export function camelCase(str: string) {
  if (typeof str !== "string")
    throw new Error("the passed param is not of type string");

  if (!str.length) return str;

  return (
    str[0].toLowerCase() +
    str.slice(1).replace(/\s+(\w)/g, (match) => match.trim().toUpperCase())
  );
}

/**
 * @example
 * kebabCase('test value') // => 'test-value'
 */
export function kebabCase(str: string) {
  if (typeof str !== "string")
    throw new Error("the passed param is not of type string");

  if (!str.length) return str;

  return (
    str[0].toLowerCase() +
    str
      .slice(1)
      .replace(/[A-Z]+/g, (match) => `-${match.toLowerCase()}`)
      .replace(/(\s|-)+/g, "-")
  );
}

/**
 * removes accent from the given string
 * @example
 *  removeAccent('ýPtNx19yG8') // => 'yPtNx19yG8'
 *  removeAccent('vojh7OuÈtn') // => 'vojh7OuEtn'
 *  removeAccent('ÊD2KtOÝaWK') // => 'ED2KtOYaWK'
 *  removeAccent('9lq0w00bÖq') // => '9lq0w00bOq'
 *  removeAccent('uÿKAqãRbpt') // => 'uyKAqaRbpt'
 */
export function removeAccent(str: string) {
  if (typeof str !== "string")
    throw new Error("the passed param is not of type string");

  if (!str.length) return str;

  /**
   * variable that stores the patterns to replace
   */
  let patterns: {
    /**
     * the pattern to replace
     */
    pattern: string;
    /**
     * the value to replace the pattern with
     */
    value: string;
  }[] = [
    { pattern: "ç", value: "c" },
    { pattern: "Ç", value: "C" },
    { pattern: "ñ", value: "n" },
    { pattern: "Ñ", value: "N" },
    { pattern: "œ", value: "oe" },
    { pattern: "Œ", value: "OE" },
    { pattern: "æ", value: "ae" },
    { pattern: "Æ", value: "AE" },
    { pattern: "[ýÿ]", value: "y" },
    { pattern: "[ÝŸ]", value: "Y" },
    { pattern: "[ùúûü]", value: "u" },
    { pattern: "[ÙÚÛÜ]", value: "U" },
    { pattern: "[èéêë]", value: "e" },
    { pattern: "[ÈÉÊË]", value: "E" },
    { pattern: "[ìíîï]", value: "i" },
    { pattern: "[ÌÍÎÏ]", value: "I" },
    { pattern: "[òóôõö]", value: "o" },
    { pattern: "[ÒÓÔÕÖ]", value: "O" },
    { pattern: "[àáâãäå]", value: "a" },
    { pattern: "[ÀÁÂÃÄÅ]", value: "A" },
  ];

  return patterns.reduce(
    (prev, current) =>
      prev.replace(new RegExp(current.pattern, "g"), current.value),
    str
  );
}

/**
 * @example
 * let testValue = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
 * search(testValue, 'text') // => true
 * search(testValue, 'LIma') // => true
 * search(testValue, 'lima') // => true
 * search(testValue, 'sosm') // => false
 */
export function search(searchIn: string, searchValue: string): boolean {
  if (!(searchIn || searchValue)) return false;

  searchIn = removeAccent(searchIn.toLowerCase());
  searchValue = removeAccent(searchValue.toLowerCase());

  let [first, ...other] = searchValue.split("");

  if (searchIn.includes(first))
    return other.length
      ? search(searchIn.substring(searchIn.indexOf(first) + 1), other.join(""))
      : true;

  return false;
}

/**
 * it generate an query string from an given object
 * @example
 * generateQueryString() // => ""
 * generateQueryString({ key1: value1, key2: value2, key3: value3 }) // => "key1=value1&key2=value2&key3=value3"
 */
export function generateQueryString(params?: Record<string, any>) {
  if (!params) return "";

  return Object.keys(params)
    .map((key) => {
      if (params[key] === undefined) return undefined;

      return `${key}=${JSON.stringify(params[key])}`;
    })
    .filter((key) => key)
    .join("&");
}
