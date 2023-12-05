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

// src/icons/uil-snow-flake.tsx
var uil_snow_flake_exports = {};
__export(uil_snow_flake_exports, {
  default: () => uil_snow_flake_default
});
module.exports = __toCommonJS(uil_snow_flake_exports);
var import_react = __toESM(require("react"), 1);
var UilSnowFlake = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21,11H19.41l1.3-1.29a1,1,0,0,0-1.42-1.42L16.59,11H14.41l2.3-2.29a1,1,0,1,0-1.42-1.42L13,9.59V7.41l2.71-2.7a1,1,0,1,0-1.42-1.42L13,4.59V3a1,1,0,0,0-2,0V4.59L9.71,3.29A1,1,0,0,0,8.29,4.71L11,7.41V9.59L8.71,7.29A1,1,0,1,0,7.29,8.71L9.59,11H7.41L4.71,8.29A1,1,0,0,0,3.29,9.71L4.59,11H3a1,1,0,0,0,0,2H4.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L7.41,13H9.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L11,14.41v2.18l-2.71,2.7a1,1,0,0,0,1.42,1.42L11,19.41V21a1,1,0,0,0,2,0V19.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13,16.59V14.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L14.41,13h2.18l2.7,2.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L19.41,13H21a1,1,0,0,0,0-2Z"
  }));
};
var uil_snow_flake_default = UilSnowFlake;
