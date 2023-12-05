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

// src/icons/uil-pizza-slice.tsx
var uil_pizza_slice_exports = {};
__export(uil_pizza_slice_exports, {
  default: () => uil_pizza_slice_default
});
module.exports = __toCommonJS(uil_pizza_slice_exports);
var import_react = __toESM(require("react"), 1);
var UilPizzaSlice = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M8.51,12.48a1,1,0,1,0,1,1A1,1,0,0,0,8.51,12.48ZM8.51,8a1,1,0,1,0,1,1A1,1,0,0,0,8.51,8ZM12,10a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm8.5-1.43,0,0a3,3,0,0,0-2.3-.29,2.9,2.9,0,0,0-1.09.56L5.51,2.13a1,1,0,0,0-1,0A1,1,0,0,0,4,3V16.17A2.94,2.94,0,0,0,2,19H2a3,3,0,0,0,2.92,3h.58a18.57,18.57,0,0,0,16.11-9.41A3,3,0,0,0,20.51,8.57ZM6,4.73l9.89,5.71A12.57,12.57,0,0,1,6,16Zm13.87,6.88A16.58,16.58,0,0,1,5,20a1,1,0,0,1-1-1,1,1,0,0,1,.3-.72A1,1,0,0,1,5,18h.51a14.5,14.5,0,0,0,12.62-7.37.9.9,0,0,1,.58-.44,1,1,0,0,1,.75.09h0A1,1,0,0,1,19.88,11.61Z"
  }));
};
var uil_pizza_slice_default = UilPizzaSlice;
