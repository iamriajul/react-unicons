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

// src/icons/uil-utensils-alt.tsx
var uil_utensils_alt_exports = {};
__export(uil_utensils_alt_exports, {
  default: () => uil_utensils_alt_default
});
module.exports = __toCommonJS(uil_utensils_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilUtensilsAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M15.53,14.13a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l6.18,6.18a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41Zm1.23-2.49a3,3,0,0,0,2.12-.88l2.83-2.83a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L17.46,9.35a1,1,0,0,1-1.41,0l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L14.64,7.93h0a1,1,0,0,1,0-1.41l2.82-2.83a1,1,0,1,0-1.41-1.41L13.22,5.11a3,3,0,0,0,0,4.24h0L12,10.59,10.44,9.05a4.16,4.16,0,0,0-.74-5C8.26,2.61,4.53,1,2.77,2.79S2.6,8.27,4,9.72A4.36,4.36,0,0,0,6.94,11h.14A3.88,3.88,0,0,0,9,10.46L10.57,12,2.29,20.28a1,1,0,1,0,1.42,1.41l9-9,0,0,0,0,1.92-1.92A3,3,0,0,0,16.76,11.64ZM8.43,8.44A1.93,1.93,0,0,1,7,9,2.26,2.26,0,0,1,5.46,8.3C4.38,7.22,3.62,4.77,4.19,4.2A1,1,0,0,1,4.85,4,5.87,5.87,0,0,1,8.29,5.47,2.12,2.12,0,0,1,8.43,8.44Z"
  }));
};
var uil_utensils_alt_default = UilUtensilsAlt;
