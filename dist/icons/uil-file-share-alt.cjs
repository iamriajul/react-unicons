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

// src/icons/uil-file-share-alt.tsx
var uil_file_share_alt_exports = {};
__export(uil_file_share_alt_exports, {
  default: () => uil_file_share_alt_default
});
module.exports = __toCommonJS(uil_file_share_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilFileShareAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M13.5,12.5a1,1,0,0,0-1-1h-5a1,1,0,0,0,0,2h5A1,1,0,0,0,13.5,12.5Zm5,5a2,2,0,0,0-1.18.39l-1.75-.8,1.91-.88a2,2,0,0,0,1,.29,2,2,0,1,0-2-2l-1.89.87A2,2,0,1,0,13.5,19a1.88,1.88,0,0,0,.92-.24l2.1,1a2,2,0,1,0,2-2.23Zm-8,2h-5a1,1,0,0,1-1-1V4.5a1,1,0,0,1,1-1h5v3a3,3,0,0,0,3,3h3a1,1,0,0,0,2,0v-1s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0,1.1,1.1,0,0,0-.26-.06H5.5a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3h5a1,1,0,0,0,0-2Zm2-14.59L15.09,7.5H13.5a1,1,0,0,1-1-1ZM7.5,15.5a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Z"
  }));
};
var uil_file_share_alt_default = UilFileShareAlt;
