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

// src/icons/uil-stopwatch-slash.tsx
var uil_stopwatch_slash_exports = {};
__export(uil_stopwatch_slash_exports, {
  default: () => uil_stopwatch_slash_default
});
module.exports = __toCommonJS(uil_stopwatch_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilStopwatchSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M10.6,5.63a1,1,0,0,0,.36,2,6.18,6.18,0,0,1,1-.09,6,6,0,0,1,6,6,6.18,6.18,0,0,1-.09,1,1,1,0,0,0,.8,1.16l.18,0a1,1,0,0,0,1-.82A7.45,7.45,0,0,0,20,13.5a8,8,0,0,0-1.7-4.91l.91-.9a1,1,0,0,0-1.42-1.42l-.9.91A8,8,0,0,0,12,5.5,7.45,7.45,0,0,0,10.6,5.63ZM10,4.5h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Zm3.49,9.08s0-.05,0-.08,0-.05,0-.08l1.34-1.33a1,1,0,1,0-1.42-1.42L12.08,12h-.16L5.71,5.79A1,1,0,0,0,4.29,7.21l.48.48h0l.91.91A8,8,0,0,0,16.9,19.82l1.39,1.39a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,19.5A6,6,0,0,1,7.11,10l3.4,3.39s0,.05,0,.08A1.5,1.5,0,0,0,12,15h.08l3.39,3.4A6,6,0,0,1,12,19.5Z"
  }));
};
var uil_stopwatch_slash_default = UilStopwatchSlash;
