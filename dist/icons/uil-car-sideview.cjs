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

// src/icons/uil-car-sideview.tsx
var uil_car_sideview_exports = {};
__export(uil_car_sideview_exports, {
  default: () => uil_car_sideview_default
});
module.exports = __toCommonJS(uil_car_sideview_exports);
var import_react = __toESM(require("react"), 1);
var UilCarSideview = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M19,9.5h-.32L17.43,6.38A3,3,0,0,0,14.65,4.5h-6A3,3,0,0,0,5.7,6.91L5.18,9.5H5a3,3,0,0,0-3,3v3a1,1,0,0,0,1,1H4a3,3,0,0,0,6,0h4a3,3,0,0,0,6,0h1a1,1,0,0,0,1-1v-3A3,3,0,0,0,19,9.5Zm-6-3h1.65a1,1,0,0,1,.92.63l.95,2.37H13Zm-5.34.8a1,1,0,0,1,1-.8H11v3H7.22ZM7,17.5a1,1,0,1,1,1-1A1,1,0,0,1,7,17.5Zm10,0a1,1,0,1,1,1-1A1,1,0,0,1,17,17.5Zm3-3h-.78a3,3,0,0,0-4.44,0H9.22a3,3,0,0,0-4.44,0H4v-2a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"
  }));
};
var uil_car_sideview_default = UilCarSideview;
