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

// src/icons/uil-envelope-upload-alt.tsx
var uil_envelope_upload_alt_exports = {};
__export(uil_envelope_upload_alt_exports, {
  default: () => uil_envelope_upload_alt_default
});
module.exports = __toCommonJS(uil_envelope_upload_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilEnvelopeUploadAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M16,11.08H8a3,3,0,0,0-3,3v5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3v-5A3,3,0,0,0,16,11.08Zm-.42,2L12.7,16a1,1,0,0,1-1.4,0L8.42,13.08Zm1.42,6a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V14.49l2.88,2.88a3,3,0,0,0,4.24,0L17,14.49ZM10.71,5.62,11,5.33V8.08a1,1,0,0,0,2,0V5.33l.29.29a1,1,0,1,0,1.42-1.41l-2-2a1,1,0,0,0-1.42,0l-2,2a1,1,0,0,0,0,1.41A1,1,0,0,0,10.71,5.62Z"
  }));
};
var uil_envelope_upload_alt_default = UilEnvelopeUploadAlt;