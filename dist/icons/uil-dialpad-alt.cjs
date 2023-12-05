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

// src/icons/uil-dialpad-alt.tsx
var uil_dialpad_alt_exports = {};
__export(uil_dialpad_alt_exports, {
  default: () => uil_dialpad_alt_default
});
module.exports = __toCommonJS(uil_dialpad_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilDialpadAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M5,9.25A2.75,2.75,0,1,0,7.75,12,2.75,2.75,0,0,0,5,9.25Zm0,4A1.25,1.25,0,1,1,6.25,12,1.25,1.25,0,0,1,5,13.25Zm7-4A2.75,2.75,0,1,0,14.75,12,2.75,2.75,0,0,0,12,9.25Zm0,4A1.25,1.25,0,1,1,13.25,12,1.25,1.25,0,0,1,12,13.25Zm7-5.5A2.75,2.75,0,1,0,16.25,5,2.75,2.75,0,0,0,19,7.75Zm0-4A1.25,1.25,0,1,1,17.75,5,1.25,1.25,0,0,1,19,3.75Zm0,5.5A2.75,2.75,0,1,0,21.75,12,2.75,2.75,0,0,0,19,9.25Zm0,4A1.25,1.25,0,1,1,20.25,12,1.25,1.25,0,0,1,19,13.25ZM5,2.25A2.75,2.75,0,1,0,7.75,5,2.75,2.75,0,0,0,5,2.25Zm0,4A1.25,1.25,0,1,1,6.25,5,1.25,1.25,0,0,1,5,6.25Zm7,10A2.75,2.75,0,1,0,14.75,19,2.75,2.75,0,0,0,12,16.25Zm0,4A1.25,1.25,0,1,1,13.25,19,1.25,1.25,0,0,1,12,20.25Zm0-18A2.75,2.75,0,1,0,14.75,5,2.75,2.75,0,0,0,12,2.25Zm0,4A1.25,1.25,0,1,1,13.25,5,1.25,1.25,0,0,1,12,6.25Z"
  }));
};
var uil_dialpad_alt_default = UilDialpadAlt;