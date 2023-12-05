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

// src/icons/uil-coronavirus.tsx
var uil_coronavirus_exports = {};
__export(uil_coronavirus_exports, {
  default: () => uil_coronavirus_default
});
module.exports = __toCommonJS(uil_coronavirus_exports);
var import_react = __toESM(require("react"), 1);
var UilCoronavirus = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M9.5 9a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 9.5 9ZM9 14a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm6-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-.5 4a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5Zm7.5-1h-1.059a8.952 8.952 0 0 0-1.916-4.61l.753-.754a1 1 0 0 0-1.414-1.414l-.753.753A8.952 8.952 0 0 0 13 3.059V2a1 1 0 0 0-2 0v1.059a8.952 8.952 0 0 0-4.61 1.916l-.754-.753a1 1 0 0 0-1.414 1.414l.753.753A8.952 8.952 0 0 0 3.059 11H2a1 1 0 0 0 0 2h1.059a8.952 8.952 0 0 0 1.916 4.61l-.753.754a1 1 0 1 0 1.414 1.414l.753-.753A8.952 8.952 0 0 0 11 20.941V22a1 1 0 0 0 2 0v-1.059a8.952 8.952 0 0 0 4.61-1.916l.754.753a1 1 0 0 0 1.414-1.414l-.753-.753A8.952 8.952 0 0 0 20.941 13H22a1 1 0 0 0 0-2Zm-4 2h.92A7.004 7.004 0 0 1 13 18.92V17a1 1 0 0 0-2 0v1.92A7.004 7.004 0 0 1 5.08 13H6a1 1 0 0 0 0-2h-.92A7.004 7.004 0 0 1 11 5.08V7a1 1 0 0 0 2 0V5.08A7.004 7.004 0 0 1 18.92 11H18a1 1 0 0 0 0 2Z"
  }));
};
var uil_coronavirus_default = UilCoronavirus;
