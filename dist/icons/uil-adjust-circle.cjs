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

// src/icons/uil-adjust-circle.tsx
var uil_adjust_circle_exports = {};
__export(uil_adjust_circle_exports, {
  default: () => uil_adjust_circle_default
});
module.exports = __toCommonJS(uil_adjust_circle_exports);
var import_react = __toESM(require("react"), 1);
var UilAdjustCircle = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M17,7A7.74,7.74,0,1,0,7,17,7.74,7.74,0,1,0,17,7Zm-1.6,1.6a6.12,6.12,0,0,1,.11,1.14,5.92,5.92,0,0,1-.16,1.34L12.91,8.66a5.92,5.92,0,0,1,1.34-.16A6.12,6.12,0,0,1,15.39,8.61ZM14.46,13A6,6,0,0,1,13,14.46L9.54,11A6,6,0,0,1,11,9.54Zm-8,1.46a5.75,5.75,0,1,1,8-8h-.25A7.76,7.76,0,0,0,6.5,14.25C6.5,14.33,6.51,14.42,6.51,14.5Zm2.1.89a6.12,6.12,0,0,1-.11-1.14,5.92,5.92,0,0,1,.16-1.34l2.43,2.43a5.92,5.92,0,0,1-1.34.16A6.12,6.12,0,0,1,8.61,15.39ZM14.25,20A5.77,5.77,0,0,1,9.5,17.49h.25A7.76,7.76,0,0,0,17.5,9.75c0-.08,0-.17,0-.25A5.75,5.75,0,0,1,14.25,20Z"
  }));
};
var uil_adjust_circle_default = UilAdjustCircle;
