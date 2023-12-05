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

// src/icons/uil-spinner.tsx
var uil_spinner_exports = {};
__export(uil_spinner_exports, {
  default: () => uil_spinner_default
});
module.exports = __toCommonJS(uil_spinner_exports);
var import_react = __toESM(require("react"), 1);
var UilSpinner = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M5.1 16c-.3-.5-.9-.6-1.4-.4-.5.3-.6.9-.4 1.4.3.5.9.6 1.4.4.5-.3.6-.9.4-1.4zm-.4-9.4c-.5-.2-1.1-.1-1.4.4-.2.5-.1 1.1.4 1.4.5.2 1.1.1 1.4-.4.2-.5.1-1.1-.4-1.4zm15.6 1.8c.5-.3.6-.9.4-1.4-.3-.5-.9-.6-1.4-.4-.5.3-.6.9-.4 1.4.3.5.9.6 1.4.4zM4 12c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1zm3.2 6.8c-.5.1-.9.7-.7 1.2.1.5.7.9 1.2.7.5-.1.9-.7.7-1.2-.1-.5-.6-.8-1.2-.7zM21 11c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm-.7 4.6c-.5-.3-1.1-.1-1.4.4-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4.2-.5.1-1.1-.4-1.4zM17 3.3c-.5-.3-1.1-.1-1.4.4-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4.2-.5.1-1.1-.4-1.4zm-.2 15.5c-.5-.1-1.1.2-1.2.7-.1.5.2 1.1.7 1.2.5.1 1.1-.2 1.2-.7.1-.5-.2-1-.7-1.2zM12 20c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm0-18c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
  }));
};
var uil_spinner_default = UilSpinner;
