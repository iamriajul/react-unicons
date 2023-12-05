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

// src/icons/uil-silent-squint.tsx
var uil_silent_squint_exports = {};
__export(uil_silent_squint_exports, {
  default: () => uil_silent_squint_default
});
module.exports = __toCommonJS(uil_silent_squint_exports);
var import_react = __toESM(require("react"), 1);
var UilSilentSquint = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M7.66,12.21a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l1.5-1.5a1,1,0,0,0,0-1.42l-1.5-1.5A1,1,0,0,0,7.66,9.21l.8.79-.8.79A1,1,0,0,0,7.66,12.21Zm7.5,0a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L15.79,10l.79-.79a1,1,0,1,0-1.42-1.42l-1.5,1.5a1,1,0,0,0,0,1.42Zm.11,2a1,1,0,0,0-1.2,0l-.74.55-.73-.55a1,1,0,0,0-1.2,0l-.73.55-.74-.55a1,1,0,0,0-1.2,0l-1.33,1a1,1,0,1,0,1.2,1.6l.73-.55.74.55,0,0a.67.67,0,0,0,.12.06.83.83,0,0,0,.22.08l.13,0h.23l.12,0a1.12,1.12,0,0,0,.33-.16l.73-.55.73.55a1,1,0,0,0,1,.11l.1-.05a.39.39,0,0,0,.11-.06l.74-.55.73.55a1,1,0,0,0,.6.2,1,1,0,0,0,.8-.4,1,1,0,0,0-.2-1.4ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
  }));
};
var uil_silent_squint_default = UilSilentSquint;
