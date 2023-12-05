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

// src/icons/uil-umbrella.tsx
var uil_umbrella_exports = {};
__export(uil_umbrella_exports, {
  default: () => uil_umbrella_default
});
module.exports = __toCommonJS(uil_umbrella_exports);
var import_react = __toESM(require("react"), 1);
var UilUmbrella = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21,11.24s0,0,0,0a.22.22,0,0,1,0-.08l0-.19c0-.23-.06-.46-.1-.69a.75.75,0,0,1,0-.16c-.05-.25-.12-.49-.19-.73v0a8.91,8.91,0,0,0-5.86-5.87l-.08,0c-.22-.07-.45-.13-.68-.18l-.18,0a5.21,5.21,0,0,0-.55-.08l-.24,0V3a1,1,0,0,0-2,0v.06a8.7,8.7,0,0,0-1,.18,4.71,4.71,0,0,0-.62.16l-.13,0c-.25.08-.48.17-.72.26l0,0A8.93,8.93,0,0,0,3.42,9.28a.31.31,0,0,0,0,.08,6.38,6.38,0,0,0-.19.72l0,.16q-.08.36-.12.75s0,.07,0,.11,0,.06,0,.09,0,0,0,.05c0,.25,0,.5,0,.76a1,1,0,0,0,1,1h7v6a1,1,0,0,1-2,0,1,1,0,0,0-2,0,3,3,0,0,0,6,0V13h7a1,1,0,0,0,1-1C21,11.74,21,11.49,21,11.24ZM8,11H5.08s0-.07,0-.11,0-.28.08-.41,0-.13,0-.19.08-.32.13-.48l0-.08A7,7,0,0,1,9.1,5.64,16.09,16.09,0,0,0,8,11Zm2,0c.19-3.91,1.44-6,2-6s1.79,2.09,2,6Zm6,0A16.09,16.09,0,0,0,14.9,5.64a7,7,0,0,1,3.73,4.12v0a4.61,4.61,0,0,1,.15.53.83.83,0,0,0,0,.15c0,.14.06.29.08.43s0,.07,0,.11Z"
  }));
};
var uil_umbrella_default = UilUmbrella;
