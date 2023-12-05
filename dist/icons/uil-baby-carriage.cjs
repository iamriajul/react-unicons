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

// src/icons/uil-baby-carriage.tsx
var uil_baby_carriage_exports = {};
__export(uil_baby_carriage_exports, {
  default: () => uil_baby_carriage_default
});
module.exports = __toCommonJS(uil_baby_carriage_exports);
var import_react = __toESM(require("react"), 1);
var UilBabyCarriage = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M19,16a3,3,0,1,0,3,3A3,3,0,0,0,19,16Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,19,20ZM9,16a3,3,0,1,0,3,3A3,3,0,0,0,9,16Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,9,20ZM22,8.5A6.51,6.51,0,0,0,15.5,2H15a1,1,0,0,0-1,1V8H7.52L6.27,4.65A1,1,0,0,0,5.33,4H3A1,1,0,0,0,3,6H4.64L5.89,9.37l0,0,.51,1.37,0,.09A6.44,6.44,0,0,0,12.5,15h3A6.49,6.49,0,0,0,22,8.5Zm-3.32,3.18A4.47,4.47,0,0,1,15.5,13h-3a4.47,4.47,0,0,1-4.16-2.8.14.14,0,0,1,0-.06L8.26,10H19.74A4.32,4.32,0,0,1,18.68,11.68ZM16,8V4A4.49,4.49,0,0,1,20,8Z"
  }));
};
var uil_baby_carriage_default = UilBabyCarriage;
