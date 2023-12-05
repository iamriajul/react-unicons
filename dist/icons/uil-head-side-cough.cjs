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

// src/icons/uil-head-side-cough.tsx
var uil_head_side_cough_exports = {};
__export(uil_head_side_cough_exports, {
  default: () => uil_head_side_cough_default
});
module.exports = __toCommonJS(uil_head_side_cough_exports);
var import_react = __toESM(require("react"), 1);
var UilHeadSideCough = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M4.293 20.293a1 1 0 1 0 1.414 0 1 1 0 0 0-1.414 0Zm-3-3a1 1 0 1 0 1.414 0 1 1 0 0 0-1.414 0Zm4-1a1 1 0 1 0 1.414 0 1 1 0 0 0-1.414 0ZM16.15 2.002a7.067 7.067 0 0 0-7.284 7.063v.016l-1.77 3.758A1 1 0 0 0 8 14.267h.866v1.8A1.935 1.935 0 0 0 10.8 18h.867v1.8a1 1 0 0 0 2 0v-1.814A.994.994 0 0 0 13.6 16l-.833.02a.94.94 0 0 0-.1-.02.94.94 0 0 0-.128.026l-1.673.04v-2.8a1 1 0 0 0-1-1h-.289l1.205-2.558a.99.99 0 0 0 .095-.468l-.01-.174a5.025 5.025 0 0 1 1.537-3.635 5.092 5.092 0 0 1 3.686-1.429A5.239 5.239 0 0 1 21 9.322l-1.833 6.987a1.008 1.008 0 0 0 .006.533l.932 3.235a1 1 0 0 0 .961.723 1.017 1.017 0 0 0 .278-.04 1 1 0 0 0 .683-1.237l-.856-2.97 1.796-6.763A1.031 1.031 0 0 0 23 9.533v-.212a7.252 7.252 0 0 0-6.85-7.318Z"
  }));
};
var uil_head_side_cough_default = UilHeadSideCough;
