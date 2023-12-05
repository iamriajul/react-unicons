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

// src/icons/uil-image-resize-square.tsx
var uil_image_resize_square_exports = {};
__export(uil_image_resize_square_exports, {
  default: () => uil_image_resize_square_default
});
module.exports = __toCommonJS(uil_image_resize_square_exports);
var import_react = __toESM(require("react"), 1);
var UilImageResizeSquare = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M3,8.1a1,1,0,0,0,1-1V6.91a1,1,0,0,0-2,0V7.1A1,1,0,0,0,3,8.1Zm0-4A1,1,0,0,0,3.42,4,1,1,0,0,0,3.1,2H3A1.09,1.09,0,0,0,2,3.1,1,1,0,0,0,3,4.05Zm17.39-.19A1,1,0,0,0,22,3a1,1,0,0,0-1-1h-.1a1,1,0,0,0-.51,1.86ZM11.89,4h.22a1,1,0,0,0,0-2h-.22a1,1,0,0,0,0,2ZM7.39,4H7.6a1,1,0,0,0,0-2H7.39a1,1,0,0,0,0,2ZM21,20a1,1,0,0,0-.42.1A1,1,0,0,0,20.9,22H21a1.09,1.09,0,0,0,1-1.1A1,1,0,0,0,21,20ZM14,11a1,1,0,0,0-1-1H3.27A1.08,1.08,0,0,0,3,10,1,1,0,0,0,2,11V21a1,1,0,0,0,1,1H13.1a1,1,0,0,0,.9-1.42Zm-2,9H5.52l3.91-3.9a.33.33,0,0,1,.47,0L12,18.19Zm0-4.63-.68-.69a2.35,2.35,0,0,0-3.31,0l-4,4V12h8Zm9,0a1,1,0,0,0-1,1v.21a1,1,0,0,0,2,0V16.4A1,1,0,0,0,21,15.4Zm0-9a1,1,0,0,0-1,1V7.6a1,1,0,1,0,2,0V7.39A1,1,0,0,0,21,6.39Zm0,4.5a1,1,0,0,0-1,1v.22a1,1,0,0,0,2,0v-.22A1,1,0,0,0,21,10.89ZM17.1,20h-.2a1,1,0,1,0,0,2h.2a1,1,0,0,0,0-2ZM16.61,4a1,1,0,0,0,0-2H16.4a1,1,0,1,0,0,2Z"
  }));
};
var uil_image_resize_square_default = UilImageResizeSquare;
