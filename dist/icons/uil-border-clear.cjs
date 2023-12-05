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

// src/icons/uil-border-clear.tsx
var uil_border_clear_exports = {};
__export(uil_border_clear_exports, {
  default: () => uil_border_clear_default
});
module.exports = __toCommonJS(uil_border_clear_exports);
var import_react = __toESM(require("react"), 1);
var UilBorderClear = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,8,19Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,19ZM4,3A1,1,0,1,0,5,4,1,1,0,0,0,4,3Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,4,11ZM20,5a1,1,0,1,0-1-1A1,1,0,0,0,20,5ZM4,19a1,1,0,1,0,1,1A1,1,0,0,0,4,19Zm8-4a1,1,0,1,0,1,1A1,1,0,0,0,12,15ZM4,15a1,1,0,1,0,1,1A1,1,0,0,0,4,15ZM4,7A1,1,0,1,0,5,8,1,1,0,0,0,4,7ZM8,3A1,1,0,1,0,9,4,1,1,0,0,0,8,3ZM20,15a1,1,0,1,0,1,1A1,1,0,0,0,20,15Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,20,19ZM20,7a1,1,0,1,0,1,1A1,1,0,0,0,20,7Zm-8,4a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm8,0a1,1,0,1,0,1,1A1,1,0,0,0,20,11ZM16,3a1,1,0,1,0,1,1A1,1,0,0,0,16,3ZM12,3a1,1,0,1,0,1,1A1,1,0,0,0,12,3Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,12,7Zm4,12a1,1,0,1,0,1,1A1,1,0,0,0,16,19Zm0-8a1,1,0,1,0,1,1A1,1,0,0,0,16,11Z"
  }));
};
var uil_border_clear_default = UilBorderClear;
