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

// src/icons/uil-envelope-star.tsx
var uil_envelope_star_exports = {};
__export(uil_envelope_star_exports, {
  default: () => uil_envelope_star_default
});
module.exports = __toCommonJS(uil_envelope_star_exports);
var import_react = __toESM(require("react"), 1);
var UilEnvelopeStar = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M13.64,9.74l-.29,1.73A1.55,1.55,0,0,0,14,13a1.46,1.46,0,0,0,1.58.09L17,12.28l1.44.79A1.46,1.46,0,0,0,20,13a1.55,1.55,0,0,0,.63-1.51l-.29-1.73,1.2-1.22a1.54,1.54,0,0,0-.85-2.6l-1.62-.24-.73-1.55a1.5,1.5,0,0,0-2.72,0l-.73,1.55-1.62.24a1.54,1.54,0,0,0-.85,2.6Zm1.83-2.13a1.51,1.51,0,0,0,1.14-.85L17,5.93l.39.83a1.55,1.55,0,0,0,1.14.86l1,.14-.73.74a1.57,1.57,0,0,0-.42,1.34l.16,1-.79-.43a1.48,1.48,0,0,0-1.44,0l-.79.43.16-1a1.54,1.54,0,0,0-.42-1.33l-.73-.75ZM21,15.26a1,1,0,0,0-1,1v3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.67l5.88,5.88a2.94,2.94,0,0,0,2.1.88l.27,0a1,1,0,0,0,.91-1.08,1,1,0,0,0-1.09-.91.94.94,0,0,1-.77-.28L5.41,8.26H9a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-3A1,1,0,0,0,21,15.26Z"
  }));
};
var uil_envelope_star_default = UilEnvelopeStar;
