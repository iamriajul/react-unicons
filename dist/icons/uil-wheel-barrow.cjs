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

// src/icons/uil-wheel-barrow.tsx
var uil_wheel_barrow_exports = {};
__export(uil_wheel_barrow_exports, {
  default: () => uil_wheel_barrow_default
});
module.exports = __toCommonJS(uil_wheel_barrow_exports);
var import_react = __toESM(require("react"), 1);
var UilWheelBarrow = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21,2H19l-.09,0-.21,0-.16.07-.17.11a.8.8,0,0,0-.13.13.86.86,0,0,0-.1.16.71.71,0,0,0-.08.18l0,.09L17.38,6H16.24L13.12,2.89a3.06,3.06,0,0,0-4.24,0L5.76,6H3a1,1,0,0,0-.87.5,1,1,0,0,0,0,1l4,7h0L5.36,16A2.2,2.2,0,0,0,5,16a3,3,0,1,0,3,3,3,3,0,0,0-.85-2.08l1-2,1.38-.14,3.94,5.91A2.93,2.93,0,0,0,16,22a3.18,3.18,0,0,0,1.13-.21A3,3,0,0,0,19,18.49L18,13l1.79-9H21a1,1,0,0,0,0-2ZM5,20a1,1,0,1,1,1-1A1,1,0,0,1,5,20ZM10.3,4.29a1,1,0,0,1,1.4,0L13.41,6H8.59ZM7.55,12.94,4.72,8H17l-.82,4.08Zm8.81,7a1,1,0,0,1-1.2-.38l-3.34-5,4.37-.43L17,18.82A1,1,0,0,1,16.36,19.93Z"
  }));
};
var uil_wheel_barrow_default = UilWheelBarrow;
