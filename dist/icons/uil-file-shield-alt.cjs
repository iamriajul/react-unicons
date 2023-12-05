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

// src/icons/uil-file-shield-alt.tsx
var uil_file_shield_alt_exports = {};
__export(uil_file_shield_alt_exports, {
  default: () => uil_file_shield_alt_default
});
module.exports = __toCommonJS(uil_file_shield_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilFileShieldAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M10.5,20h-5a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0L11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h5a1,1,0,0,0,0-2Zm2-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,8a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm13.63,5.86a1,1,0,0,0-.84-.2,2.77,2.77,0,0,1-2.2-.47,1,1,0,0,0-1.18,0,2.78,2.78,0,0,1-2.2.47,1,1,0,0,0-1.21,1V17a4.6,4.6,0,0,0,1.84,3.69L16.9,21.8a1,1,0,0,0,1.2,0l1.56-1.16A4.6,4.6,0,0,0,21.5,17V14.63A1,1,0,0,0,21.13,13.86ZM19.5,17a2.62,2.62,0,0,1-1,2.09l-1,.72-1-.72a2.62,2.62,0,0,1-1-2.09V15.72a4.68,4.68,0,0,0,2-.55,4.68,4.68,0,0,0,2,.55Zm-9-.95h-3a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm1-4h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z"
  }));
};
var uil_file_shield_alt_default = UilFileShieldAlt;
