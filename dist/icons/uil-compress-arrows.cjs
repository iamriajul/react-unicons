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

// src/icons/uil-compress-arrows.tsx
var uil_compress_arrows_exports = {};
__export(uil_compress_arrows_exports, {
  default: () => uil_compress_arrows_default
});
module.exports = __toCommonJS(uil_compress_arrows_exports);
var import_react = __toESM(require("react"), 1);
var UilCompressArrows = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M10.38,13.08A1,1,0,0,0,10,13H6a1,1,0,0,0,0,2H7.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,16.41V18a1,1,0,0,0,2,0V14a1,1,0,0,0-.08-.38A1,1,0,0,0,10.38,13.08ZM10,5A1,1,0,0,0,9,6V7.59L3.71,2.29A1,1,0,0,0,2.29,3.71L7.59,9H6a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,11,10V6A1,1,0,0,0,10,5Zm3.62,5.92A1,1,0,0,0,14,11h4a1,1,0,0,0,0-2H16.41l5.3-5.29a1,1,0,1,0-1.42-1.42L15,7.59V6a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38A1,1,0,0,0,13.62,10.92ZM16.41,15H18a1,1,0,0,0,0-2H14a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,13,14v4a1,1,0,0,0,2,0V16.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
  }));
};
var uil_compress_arrows_default = UilCompressArrows;
