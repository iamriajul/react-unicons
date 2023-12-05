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

// src/icons/uil-print-slash.tsx
var uil_print_slash_exports = {};
__export(uil_print_slash_exports, {
  default: () => uil_print_slash_default
});
module.exports = __toCommonJS(uil_print_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilPrintSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M7,10a1,1,0,1,0,1,1A1,1,0,0,0,7,10ZM3.71,2.29A1,1,0,0,0,2.29,3.71L4.62,6A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H6v3a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V19.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM6,15v1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H6.59l6,6H7A1,1,0,0,0,6,15Zm10,5H8V16h6.59L16,17.41ZM19,6H18V3a1,1,0,0,0-1-1H8.66a1,1,0,0,0,0,2H16V6H12.66a1,1,0,0,0,0,2H19a1,1,0,0,1,1,1v6a.37.37,0,0,1,0,.11,1,1,0,0,0,.78,1.18l.2,0a1,1,0,0,0,1-.8A2.84,2.84,0,0,0,22,15V9A3,3,0,0,0,19,6Z"
  }));
};
var uil_print_slash_default = UilPrintSlash;
