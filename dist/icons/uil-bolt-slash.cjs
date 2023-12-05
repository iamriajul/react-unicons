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

// src/icons/uil-bolt-slash.tsx
var uil_bolt_slash_exports = {};
__export(uil_bolt_slash_exports, {
  default: () => uil_bolt_slash_default
});
module.exports = __toCommonJS(uil_bolt_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilBoltSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M8.67,4.23A1,1,0,0,0,9.6,4h5.1L13.43,8.74a1,1,0,0,0,.17.87,1,1,0,0,0,.79.39H18l-1.13,1.24a1,1,0,0,0,.07,1.41,1,1,0,0,0,.67.26,1,1,0,0,0,.74-.33L21,9.67A1,1,0,0,0,20.23,8H15.69L17,3.26a1,1,0,0,0-.18-.87A1,1,0,0,0,16,2H9a1,1,0,0,0-1,.74L8,3A1,1,0,0,0,8.67,4.23Zm13,16.06-18-18A1,1,0,0,0,2.29,3.71L6.61,8,5.35,12.74a1,1,0,0,0,.18.87,1,1,0,0,0,.79.39h3.84L8.35,20.74a1,1,0,0,0,.49,1.14,1,1,0,0,0,.48.12,1,1,0,0,0,.74-.33l4.85-5.34,5.38,5.38a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM7.62,12l.63-2.34L10.59,12Zm3.73,5.28,1-3.56,1.2,1.19Z"
  }));
};
var uil_bolt_slash_default = UilBoltSlash;
