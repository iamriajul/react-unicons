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

// src/icons/uil-lock-slash.tsx
var uil_lock_slash_exports = {};
__export(uil_lock_slash_exports, {
  default: () => uil_lock_slash_default
});
module.exports = __toCommonJS(uil_lock_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilLockSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M10.84,5.38a2,2,0,0,1,2.57.21A2,2,0,0,1,14,7v3a1,1,0,0,0,1,1h1a1,1,0,0,1,1,1v.34a1,1,0,0,0,2,0V12a3,3,0,0,0-3-3V7a4,4,0,0,0-1.17-2.83,4.06,4.06,0,0,0-5.19-.39,1,1,0,1,0,1.2,1.6ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71L7.62,9A3,3,0,0,0,5,12v6a3,3,0,0,0,3,3h8a3,3,0,0,0,2.39-1.2l1.9,1.91a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM16,19H8a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H9.59l2.07,2.07A1,1,0,0,0,11,14v2a1,1,0,0,0,2,0V14.41l3.93,3.93A1,1,0,0,1,16,19Z"
  }));
};
var uil_lock_slash_default = UilLockSlash;
