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

// src/icons/uil-fidget-spinner.tsx
var uil_fidget_spinner_exports = {};
__export(uil_fidget_spinner_exports, {
  default: () => uil_fidget_spinner_default
});
module.exports = __toCommonJS(uil_fidget_spinner_exports);
var import_react = __toESM(require("react"), 1);
var UilFidgetSpinner = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12 7a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-5.696 9.134a1 1 0 1 0 1.366.366 1 1 0 0 0-1.366-.366Zm11.392 0a1 1 0 1 0 .366 1.366 1 1 0 0 0-.366-1.366Zm2.914-2.791a4.918 4.918 0 0 0-4.526-1.197l-.419-.763a4.989 4.989 0 0 0-2.503-8.251 5.035 5.035 0 0 0-4.279.958A4.978 4.978 0 0 0 7 8a4.929 4.929 0 0 0 1.352 3.392l-.419.75a4.989 4.989 0 0 0-5.926 6.286 5.03 5.03 0 0 0 2.97 3.226 4.97 4.97 0 0 0 6.588-3.19l.867.014a4.981 4.981 0 0 0 4.76 3.524 5.017 5.017 0 0 0 4.8-3.573 4.95 4.95 0 0 0-1.382-5.086Zm-.528 4.495a3.006 3.006 0 0 1-4.386 1.76 2.965 2.965 0 0 1-1.352-1.705 1.994 1.994 0 0 0-1.91-1.43h-.869a1.995 1.995 0 0 0-1.91 1.43 2.98 2.98 0 0 1-3.948 1.899 2.993 2.993 0 0 1 1.767-5.704 1.967 1.967 0 0 0 2.173-.942l.436-.754a1.995 1.995 0 0 0-.281-2.369 2.98 2.98 0 0 1 .329-4.37 2.993 2.993 0 0 1 4.069 4.369 2 2 0 0 0-.283 2.37l.435.753a1.974 1.974 0 0 0 2.174.943 2.988 2.988 0 0 1 3.556 3.75Z"
  }));
};
var uil_fidget_spinner_default = UilFidgetSpinner;
