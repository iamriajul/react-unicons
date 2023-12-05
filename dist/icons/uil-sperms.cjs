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

// src/icons/uil-sperms.tsx
var uil_sperms_exports = {};
__export(uil_sperms_exports, {
  default: () => uil_sperms_default
});
module.exports = __toCommonJS(uil_sperms_exports);
var import_react = __toESM(require("react"), 1);
var UilSperms = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M11.06,20.1a2,2,0,0,1-.65-.48,2.47,2.47,0,0,1-.67-1.14,4.19,4.19,0,0,0-1.31-2.06,3.57,3.57,0,0,0-1-3.28,3.28,3.28,0,0,0-4.59-.35,3.29,3.29,0,0,0,.35,4.6A3.87,3.87,0,0,0,5.4,18.51l.36,0a2.85,2.85,0,0,0,1.53-.44A2.05,2.05,0,0,1,7.8,19,4.46,4.46,0,0,0,9,21a4.27,4.27,0,0,0,1.2.88,1,1,0,0,0,.44.1,1,1,0,0,0,.44-1.9ZM6.32,16.33a.86.86,0,0,1-.7.19A1.8,1.8,0,0,1,4.56,16c-.57-.56-.73-1.39-.36-1.77a.82.82,0,0,1,.56-.2A1.8,1.8,0,0,1,6,14.56a1.8,1.8,0,0,1,.55,1.06A.86.86,0,0,1,6.32,16.33Zm15-6.12a2.17,2.17,0,0,1-.91-.59,2.47,2.47,0,0,1-.67-1.14,4.19,4.19,0,0,0-1.31-2.06,3.57,3.57,0,0,0-1.05-3.28,3.28,3.28,0,0,0-4.59-.35,3.29,3.29,0,0,0,.35,4.6A3.87,3.87,0,0,0,15.4,8.51l.36,0a2.85,2.85,0,0,0,1.53-.44A2.05,2.05,0,0,1,17.8,9,4.54,4.54,0,0,0,19,11a4.36,4.36,0,0,0,1.7,1.08,1.25,1.25,0,0,0,.32.05,1,1,0,0,0,.95-.68A1,1,0,0,0,21.32,10.21Zm-5-3.88a.86.86,0,0,1-.7.19A1.8,1.8,0,0,1,14.56,6c-.57-.56-.73-1.39-.36-1.77a.82.82,0,0,1,.56-.2A1.8,1.8,0,0,1,16,4.56a1.8,1.8,0,0,1,.55,1.06A.86.86,0,0,1,16.32,6.33Zm5.39,14.12a4.45,4.45,0,0,0-3.23-3.23,3.18,3.18,0,0,1-1.39-.82,2.93,2.93,0,0,1-.8-1.38A4.65,4.65,0,0,0,13,11.77a2.92,2.92,0,0,1-1.38-.8,3,3,0,0,1-.81-1.39,4.68,4.68,0,0,0-1-1.86A3.94,3.94,0,0,0,10,6.22a4.75,4.75,0,0,0-1.4-2.8A4.78,4.78,0,0,0,5.78,2,3.43,3.43,0,0,0,3,3,3.43,3.43,0,0,0,2,5.78a4.75,4.75,0,0,0,1.4,2.8A4.78,4.78,0,0,0,6.22,10l.43,0a3.39,3.39,0,0,0,2-.6,2.64,2.64,0,0,1,.31.71,5.12,5.12,0,0,0,3.6,3.59,2.61,2.61,0,0,1,1.83,1.84,5.11,5.11,0,0,0,3.6,3.6A2.57,2.57,0,0,1,19.79,21a2.8,2.8,0,0,0,.16.46,1,1,0,0,0,.88.54,1.21,1.21,0,0,0,.44-.1,1,1,0,0,0,.48-1.33S21.72,20.47,21.71,20.45ZM7.64,7.64c-.64.63-1.92.41-2.81-.47A2.78,2.78,0,0,1,4,5.56a1.47,1.47,0,0,1,.35-1.2,1.39,1.39,0,0,1,1-.36,2.71,2.71,0,0,1,1.83.83A2.78,2.78,0,0,1,8,6.44,1.47,1.47,0,0,1,7.64,7.64Z"
  }));
};
var uil_sperms_default = UilSperms;
