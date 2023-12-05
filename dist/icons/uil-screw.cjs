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

// src/icons/uil-screw.tsx
var uil_screw_exports = {};
__export(uil_screw_exports, {
  default: () => uil_screw_default
});
module.exports = __toCommonJS(uil_screw_exports);
var import_react = __toESM(require("react"), 1);
var UilScrew = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.71,10.12,13.88,2.29a1,1,0,0,0-1.7.57L11.45,8l-2,2-.33-.19A1,1,0,0,0,8,11.44L6.85,12.61l-.33-.19a1,1,0,0,0-1.11,1.63L4.24,15.21,3.92,15a1,1,0,0,0-1.37.37,1,1,0,0,0,.25,1.26l-.51.51a.93.93,0,0,0-.21.33,1,1,0,0,0-.08.38V21a1,1,0,0,0,1,1H6.13a1,1,0,0,0,.38-.08.93.93,0,0,0,.33-.21L8.54,20l.33.19a1,1,0,0,0,1.37-.36A1,1,0,0,0,10,18.56l1.17-1.16.33.19a1,1,0,0,0,.49.13A1,1,0,0,0,12.59,16l1.17-1.16.33.19a1,1,0,0,0,.49.13,1,1,0,0,0,.62-1.77l.79-.79,5.15-.73a1,1,0,0,0,.81-.68A1,1,0,0,0,21.71,10.12ZM5.72,20H4V18.28l.57-.57L6.75,19Zm2.49-2.5L6,16.25l1.14-1.14,2.17,1.25Zm2.61-2.6L8.64,13.64,9.79,12.5,12,13.75Zm2.61-2.61L11.25,11l1.14-1.14,1.72,1.72Zm2.45-1.74L13.45,8.12l.43-3,5,5Z"
  }));
};
var uil_screw_default = UilScrew;
