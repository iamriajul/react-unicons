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

// src/icons/uil-dropbox.tsx
var uil_dropbox_exports = {};
__export(uil_dropbox_exports, {
  default: () => uil_dropbox_default
});
module.exports = __toCommonJS(uil_dropbox_exports);
var import_react = __toESM(require("react"), 1);
var UilDropbox = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.61,11.81,18.36,9.28l3.26-2.56A1,1,0,0,0,22,5.86a1.06,1.06,0,0,0-.5-.8L16.36,2.13a1,1,0,0,0-1.15.12L12,5.05,8.79,2.25a1,1,0,0,0-1.15-.12L2.5,5.06a1.06,1.06,0,0,0-.5.8,1,1,0,0,0,.38.86L5.64,9.28,2.39,11.77a1,1,0,0,0-.39.86,1,1,0,0,0,.5.8l3.41,2v2.47a1,1,0,0,0,.48.85l5.09,3.13a1,1,0,0,0,1,0l5.09-3.13a1,1,0,0,0,.48-.85V15.42l3.41-1.95a1,1,0,0,0,.5-.8A1,1,0,0,0,21.61,11.81ZM16,4.22l3.23,1.84-2.55,2-3-1.84ZM14.91,9.34l-2.91,2-2.91-2L12,7.55ZM4.79,6.06,8,4.22l2.31,2-3,1.84Zm0,6.39,2.5-1.92,3,2.08L8.07,14.34Zm11.29,4.86L12,19.83,7.91,17.31v-.8a1,1,0,0,0,.85-.18L12,13.83l3.24,2.5a1,1,0,0,0,.61.21,1,1,0,0,0,.24,0Zm-.15-3L13.7,12.61l3-2.08,2.51,1.94Z"
  }));
};
var uil_dropbox_default = UilDropbox;
