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

// src/icons/uil-google-drive-alt.tsx
var uil_google_drive_alt_exports = {};
__export(uil_google_drive_alt_exports, {
  default: () => uil_google_drive_alt_default
});
module.exports = __toCommonJS(uil_google_drive_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilGoogleDriveAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M22,14.44a.62.62,0,0,0,0-.13.61.61,0,0,1,0-.12l-.05-.12h0l-6-10.29A1,1,0,0,0,15,3.29H9a1,1,0,0,0-.5.13l-.11.08a.73.73,0,0,0-.09.08.58.58,0,0,0-.1.12s0,0-.06.08h0l-6,10.33a1,1,0,0,0,0,1l3,5.08h0a.83.83,0,0,0,.11.15l0,.06a1.1,1.1,0,0,0,.44.26h0a.83.83,0,0,0,.22,0H18a1,1,0,0,0,.86-.49l3-5.14h0l.05-.12a.61.61,0,0,1,0-.12.53.53,0,0,0,0-.13.51.51,0,0,0,0-.13A.59.59,0,0,0,22,14.44ZM6,17.73l-1.79-3.1L9,6.27l.87,1.5,1,1.66L7,15.91ZM12,11.41l1.26,2.16H10.72Zm5.43,7.3H7.7l1.84-3.14h9.72Zm-1.86-5.14L10.74,5.29h3.69l4.83,8.28Z"
  }));
};
var uil_google_drive_alt_default = UilGoogleDriveAlt;
