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

// src/icons/uil-flip-h.tsx
var uil_flip_h_exports = {};
__export(uil_flip_h_exports, {
  default: () => uil_flip_h_default
});
module.exports = __toCommonJS(uil_flip_h_exports);
var import_react = __toESM(require("react"), 1);
var UilFlipH = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21,11H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM10.93,9h1.5a1,1,0,0,0,0-2h-1.5a1,1,0,0,0,0,2Zm4.5-1a1,1,0,0,0,1,1H17a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09l-.66-.65a1,1,0,0,0-1.41,0,1,1,0,0,0-.19,1.15A1.49,1.49,0,0,0,15.43,8ZM11.65,4.77,12,4.41l.81.81a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L13.16,2.75a.91.91,0,0,0-.26-.19,1,1,0,0,0-1.61-.27L10.23,3.35a1,1,0,0,0,1.42,1.42ZM17,15H7a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09l5,5a1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-1.09A1,1,0,0,0,17,15Zm-5,4.59L9.41,17h5.18ZM7.05,9a1,1,0,0,0,.71-.29L8.82,7.6A1,1,0,0,0,7.4,6.18L6.34,7.24a1,1,0,0,0,0,1.42A1,1,0,0,0,7.05,9Z"
  }));
};
var uil_flip_h_default = UilFlipH;
