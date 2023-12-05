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

// src/icons/uil-swimmer.tsx
var uil_swimmer_exports = {};
__export(uil_swimmer_exports, {
  default: () => uil_swimmer_default
});
module.exports = __toCommonJS(uil_swimmer_exports);
var import_react = __toESM(require("react"), 1);
var UilSwimmer = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M17,9.28a2,2,0,1,0-2-2A2,2,0,0,0,17,9.28ZM2.71,13.92a3,3,0,0,1,.57.25,4.06,4.06,0,0,0,4.1,0,2.62,2.62,0,0,1,2.56,0l.21.1,0,0a4.14,4.14,0,0,0,3.87-.13,2.62,2.62,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,4,4,0,0,0,2-.56,3,3,0,0,1,.57-.25A1,1,0,1,0,20.71,12a4.82,4.82,0,0,0-1,.44,2.1,2.1,0,0,1-2.1,0,4.62,4.62,0,0,0-4.54,0,2.52,2.52,0,0,1-.29.12L14.34,11a.75.75,0,0,0,.09-.15,1,1,0,0,0,.12-.16,1.29,1.29,0,0,0,0-.19,1.06,1.06,0,0,0,0-.19,1.13,1.13,0,0,0,0-.18,1.06,1.06,0,0,0,0-.19,1.51,1.51,0,0,0-.1-.17.7.7,0,0,0-.1-.16L11.28,6.28s0,0,0,0A1.1,1.1,0,0,0,11,6.06a.8.8,0,0,0-.21,0,.53.53,0,0,0-.17,0A.89.89,0,0,0,10.2,6L6.66,7.32a1,1,0,0,0-.6,1.28,1,1,0,0,0,1.28.6l2.93-1.07,2,2.12-1.9,1.9a4.62,4.62,0,0,0-3.94.28,2.1,2.1,0,0,1-2.1,0,4.82,4.82,0,0,0-1-.44,1,1,0,1,0-.58,1.91Zm18,3.09a4.82,4.82,0,0,0-1,.44,2.1,2.1,0,0,1-2.1,0,4.62,4.62,0,0,0-4.54,0,2.11,2.11,0,0,1-2.12,0,4.62,4.62,0,0,0-4.54,0,2.1,2.1,0,0,1-2.1,0,4.82,4.82,0,0,0-1-.44,1,1,0,1,0-.58,1.91,3,3,0,0,1,.57.25,4.06,4.06,0,0,0,4.1,0,2.62,2.62,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.62,2.62,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,4,4,0,0,0,2-.56,3,3,0,0,1,.57-.25A1,1,0,1,0,20.71,17Z"
  }));
};
var uil_swimmer_default = UilSwimmer;
