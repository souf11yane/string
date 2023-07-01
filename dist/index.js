"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  camelCase: () => camelCase,
  generateQueryString: () => generateQueryString,
  kebabCase: () => kebabCase,
  removeAccent: () => removeAccent,
  search: () => search,
  sneakCase: () => sneakCase,
  titleCase: () => titleCase
});
module.exports = __toCommonJS(src_exports);
function sneakCase(str) {
  if (typeof str !== "string")
    throw new Error("the passed param is not of type string");
  if (!str.length)
    return str;
  return str.toLocaleLowerCase().replace(/\s+(\w)/g, (match) => `_${match.trim()}`);
}
function titleCase(str) {
  if (typeof str !== "string")
    throw new Error("the passed param is not of type string");
  if (!str.length)
    return str;
  return str[0].toUpperCase() + str.slice(1).replace(/\s+(\w)/g, (match) => match.trim().toUpperCase());
}
function camelCase(str) {
  if (typeof str !== "string")
    throw new Error("the passed param is not of type string");
  if (!str.length)
    return str;
  return str[0].toLowerCase() + str.slice(1).replace(/\s+(\w)/g, (match) => match.trim().toUpperCase());
}
function kebabCase(str) {
  if (typeof str !== "string")
    throw new Error("the passed param is not of type string");
  if (!str.length)
    return str;
  return str[0].toLowerCase() + str.slice(1).replace(/[A-Z]+/g, (match) => `-${match.toLowerCase()}`).replace(/(\s|-)+/g, "-");
}
function removeAccent(str) {
  if (typeof str !== "string")
    throw new Error("the passed param is not of type string");
  if (!str.length)
    return str;
  let patterns = [
    { pattern: "\xE7", value: "c" },
    { pattern: "\xC7", value: "C" },
    { pattern: "\xF1", value: "n" },
    { pattern: "\xD1", value: "N" },
    { pattern: "\u0153", value: "oe" },
    { pattern: "\u0152", value: "OE" },
    { pattern: "\xE6", value: "ae" },
    { pattern: "\xC6", value: "AE" },
    { pattern: "[\xFD\xFF]", value: "y" },
    { pattern: "[\xDD\u0178]", value: "Y" },
    { pattern: "[\xF9\xFA\xFB\xFC]", value: "u" },
    { pattern: "[\xD9\xDA\xDB\xDC]", value: "U" },
    { pattern: "[\xE8\xE9\xEA\xEB]", value: "e" },
    { pattern: "[\xC8\xC9\xCA\xCB]", value: "E" },
    { pattern: "[\xEC\xED\xEE\xEF]", value: "i" },
    { pattern: "[\xCC\xCD\xCE\xCF]", value: "I" },
    { pattern: "[\xF2\xF3\xF4\xF5\xF6]", value: "o" },
    { pattern: "[\xD2\xD3\xD4\xD5\xD6]", value: "O" },
    { pattern: "[\xE0\xE1\xE2\xE3\xE4\xE5]", value: "a" },
    { pattern: "[\xC0\xC1\xC2\xC3\xC4\xC5]", value: "A" }
  ];
  return patterns.reduce(
    (prev, current) => prev.replace(new RegExp(current.pattern, "g"), current.value),
    str
  );
}
function search(searchIn, searchValue) {
  if (!(searchIn || searchValue))
    return false;
  searchIn = removeAccent(searchIn.toLowerCase());
  searchValue = removeAccent(searchValue.toLowerCase());
  let [first, ...other] = searchValue.split("");
  if (searchIn.includes(first))
    return other.length ? search(searchIn.substring(searchIn.indexOf(first) + 1), other.join("")) : true;
  return false;
}
function generateQueryString(params) {
  if (!params)
    return "";
  return Object.keys(params).map((key) => {
    if (params[key] === void 0)
      return void 0;
    return `${key}=${JSON.stringify(params[key])}`;
  }).filter((key) => key).join("&");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  camelCase,
  generateQueryString,
  kebabCase,
  removeAccent,
  search,
  sneakCase,
  titleCase
});
