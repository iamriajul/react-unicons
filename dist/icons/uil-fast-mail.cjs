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

// src/icons/uil-fast-mail.tsx
var uil_fast_mail_exports = {};
__export(uil_fast_mail_exports, {
  default: () => uil_fast_mail_default
});
module.exports = __toCommonJS(uil_fast_mail_exports);
var import_react = __toESM(require("react"), 1);
var UilFastMail = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M4.79,10.5h-2a1,1,0,1,0,0,2h2a1,1,0,0,0,0-2ZM21.57,7.66l0-.06,0,0h0A3,3,0,0,0,19.2,6.5H11.27a3,3,0,0,0-2,.74h0v0A2.93,2.93,0,0,0,8.31,9l-.88,5a3,3,0,0,0,.66,2.45,3,3,0,0,0,2.29,1.07h7.94a3,3,0,0,0,3-2.48l.88-5A3,3,0,0,0,21.57,7.66Zm-2.74.84-3.4,2.76a1,1,0,0,1-1.38-.12L11.72,8.5Zm.48,6.17a1,1,0,0,1-1,.83H10.38a1,1,0,0,1-.76-.36,1,1,0,0,1-.22-.81l.8-4.53,2.35,2.66a3,3,0,0,0,4.14.35L20.13,10ZM5.79,6.5h-3a1,1,0,1,0,0,2h3a1,1,0,0,0,0-2Z"
  }));
};
var uil_fast_mail_default = UilFastMail;
