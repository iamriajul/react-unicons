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

// src/icons/uil-hipchat.tsx
var uil_hipchat_exports = {};
__export(uil_hipchat_exports, {
  default: () => uil_hipchat_default
});
module.exports = __toCommonJS(uil_hipchat_exports);
var import_react = __toESM(require("react"), 1);
var UilHipchat = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M17.5 13.9c0-.2-.2-.4-.4-.4-.1 0-.2 0-.3.1-1.3 1.1-3 1.7-4.8 1.7-1.7 0-3.4-.6-4.8-1.7-.1-.1-.2-.1-.3-.1-.2 0-.4.2-.4.4s.1.3.2.5C8 16 10 16.9 12 16.8c2 .1 3.9-.8 5.2-2.4.2-.2.2-.3.3-.5zm2.7 6.9c-.8-.4-1.4-1.2-1.7-2-.1-.2 0-.3.1-.4 2.1-1.5 3.3-3.9 3.3-6.4 0-4.8-4.5-8.6-10-8.6s-10 3.9-10 8.6c0 4.8 4.5 8.6 10 8.6.7 0 1.4-.1 2.1-.2.1 0 .3 0 .4.1 1.6.9 3.4 1.5 5.2 1.5.4.1.7-.2.8-.6v-.1c.1-.2 0-.4-.2-.5zm-2.7-.8v.1c0 .1-.1.1-.1.1-1.1-.3-2-.8-2.9-1.5-.1-.1-.3-.1-.5-.1-.7.2-1.4.2-2.1.2-4.6 0-8.3-3.1-8.3-6.9C3.6 8.1 7.3 5 11.9 5c4.6 0 8.3 3.1 8.3 6.9-.1 2.3-1.4 4.4-3.4 5.5-.2.1-.3.3-.3.4.3.9.6 1.6 1 2.2z"
  }));
};
var uil_hipchat_default = UilHipchat;