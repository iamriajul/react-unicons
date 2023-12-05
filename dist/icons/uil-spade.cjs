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

// src/icons/uil-spade.tsx
var uil_spade_exports = {};
__export(uil_spade_exports, {
  default: () => uil_spade_default
});
module.exports = __toCommonJS(uil_spade_exports);
var import_react = __toESM(require("react"), 1);
var UilSpade = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.06,12.28a5.69,5.69,0,0,0-1.67-4L14,2.81a2.83,2.83,0,0,0-4,0L4.61,8.23a5.69,5.69,0,0,0-1.67,4A5.7,5.7,0,0,0,8.66,18h0a6.88,6.88,0,0,1-1.23,2.37A1,1,0,0,0,8.24,22h7.52a1,1,0,0,0,.78-1.63A6.84,6.84,0,0,1,15.31,18a5.69,5.69,0,0,0,5.75-5.71ZM18,14.91a3.78,3.78,0,0,1-3.66.95,1,1,0,0,0-.17,0l-.2,0h0a1.41,1.41,0,0,0-.22.06l-.15,0a.69.69,0,0,0-.13.11.75.75,0,0,0-.17.14.6.6,0,0,1-.06.11,2.53,2.53,0,0,0-.12.23v0a1.1,1.1,0,0,0,0,.18c0,.06,0,.12,0,.18v0h0A8.84,8.84,0,0,0,13.94,20H10.06A8.62,8.62,0,0,0,10.94,17h0v0c0-.06,0-.12,0-.19a1.1,1.1,0,0,0,0-.18h0a1.12,1.12,0,0,0-.13-.24.53.53,0,0,0-.06-.1.54.54,0,0,0-.16-.14,1.27,1.27,0,0,0-.13-.11l-.14,0a.88.88,0,0,0-.23-.07h0l-.19,0a1.1,1.1,0,0,0-.18,0A3.81,3.81,0,0,1,6,14.91a3.75,3.75,0,0,1-1.09-2.63A3.69,3.69,0,0,1,6,9.65l5.4-5.42a.81.81,0,0,1,1.13,0L18,9.65a3.69,3.69,0,0,1,1.09,2.63A3.78,3.78,0,0,1,18,14.91Z"
  }));
};
var uil_spade_default = UilSpade;
