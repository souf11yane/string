/**
 * @example
 * sneakCase('test value') // => 'test_value'
 */
declare function sneakCase(str: string): string;
/**
 * @example
 * titleCase('test value') // => 'TestValue'
 */
declare function titleCase(str: string): string;
/**
 * @example
 * camelCase('test value') // => 'testValue'
 */
declare function camelCase(str: string): string;
/**
 * @example
 * kebabCase('test value') // => 'test-value'
 */
declare function kebabCase(str: string): string;
/**
 * removes accent from the given string
 * @example
 *  removeAccent('ýPtNx19yG8') // => 'yPtNx19yG8'
 *  removeAccent('vojh7OuÈtn') // => 'vojh7OuEtn'
 *  removeAccent('ÊD2KtOÝaWK') // => 'ED2KtOYaWK'
 *  removeAccent('9lq0w00bÖq') // => '9lq0w00bOq'
 *  removeAccent('uÿKAqãRbpt') // => 'uyKAqaRbpt'
 */
declare function removeAccent(str: string): string;
/**
 * @example
 * let testValue = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
 * search(testValue, 'text') // => true
 * search(testValue, 'LIma') // => true
 * search(testValue, 'lima') // => true
 * search(testValue, 'sosm') // => false
 */
declare function search(searchIn: string, searchValue: string): boolean;
/**
 * it generate an query string from an given object
 * @example
 * generateQueryString() // => ""
 * generateQueryString({ key1: value1, key2: value2, key3: value3 }) // => "key1=value1&key2=value2&key3=value3"
 */
declare function generateQueryString(params?: Record<string, any>): string;

export { camelCase, generateQueryString, kebabCase, removeAccent, search, sneakCase, titleCase };
