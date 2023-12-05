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

// src/icons/uil-fast-mail-alt.tsx
var uil_fast_mail_alt_exports = {};
__export(uil_fast_mail_alt_exports, {
  default: () => uil_fast_mail_alt_default
});
module.exports = __toCommonJS(uil_fast_mail_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilFastMailAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M15.69,9a2.93,2.93,0,0,0-1-1.71v0h0a3,3,0,0,0-2-.74H4.8A3,3,0,0,0,2.5,7.57h0l0,0,0,.06A3,3,0,0,0,1.84,10l.88,5a3,3,0,0,0,3,2.48h7.94a3,3,0,0,0,2.29-1.07A3,3,0,0,0,16.57,14ZM12.28,8.5,9.94,11.14a1,1,0,0,1-1.38.11L5.17,8.5Zm2.1,6.64a1,1,0,0,1-.76.36H5.68a1,1,0,0,1-1-.83L3.87,10,7.3,12.8a3,3,0,0,0,4.14-.34L13.8,9.8l.8,4.53A1,1,0,0,1,14.38,15.14Zm6.83-4.64h-2a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm0-2a1,1,0,0,0,0-2h-3a1,1,0,0,0,0,2Z"
  }));
};
var uil_fast_mail_alt_default = UilFastMailAlt;
