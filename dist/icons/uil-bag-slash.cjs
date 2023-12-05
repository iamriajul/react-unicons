"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/icons/uil-bag-slash.tsx
var uil_bag_slash_exports = {};
__export(uil_bag_slash_exports, {
  default: () => uil_bag_slash_default
});
module.exports = __toCommonJS(uil_bag_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilBagSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M19,6H16V5a2,2,0,0,0-2-2H10a1.86,1.86,0,0,0-.61.1,1,1,0,0,0-.64,1.27A1,1,0,0,0,10,5h4V6H12.66a1,1,0,0,0,0,2H19a1,1,0,0,1,1,1v1.28l-2.57.86a1,1,0,0,0-.63,1.27,1,1,0,0,0,.95.68,1.19,1.19,0,0,0,.32-.05L20,12.39v2.95a1,1,0,1,0,2,0V9A3,3,0,0,0,19,6ZM3.71,2.29A1,1,0,0,0,2.29,3.71L4.62,6A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3.07,3.07,0,0,0,.53-.06l.76.77a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM4,9A1,1,0,0,1,5,8H6.59l4,4H9.16L4,10.28ZM5,19a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h3.59l5,5Z"
  }));
};
var uil_bag_slash_default = UilBagSlash;
