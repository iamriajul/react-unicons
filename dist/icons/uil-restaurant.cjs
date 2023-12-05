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

// src/icons/uil-restaurant.tsx
var uil_restaurant_exports = {};
__export(uil_restaurant_exports, {
  default: () => uil_restaurant_default
});
module.exports = __toCommonJS(uil_restaurant_exports);
var import_react = __toESM(require("react"), 1);
var UilRestaurant = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M16.84,11.63A3,3,0,0,0,19,10.75l2.83-2.83a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L17.55,9.33a1,1,0,0,1-1.42,0h0L19.67,5.8a1,1,0,1,0-1.42-1.42L14.72,7.92a1,1,0,0,1,0-1.41l2.83-2.83a1,1,0,1,0-1.42-1.42L13.3,5.09a3,3,0,0,0,0,4.24h0L12,10.62,3.73,2.32l-.1-.06a.71.71,0,0,0-.17-.11l-.18-.07L3.16,2H3.09l-.2,0a.57.57,0,0,0-.18,0,.7.7,0,0,0-.17.09l-.16.1-.07,0-.06.1a1,1,0,0,0-.11.17,1.07,1.07,0,0,0-.07.19s0,.07,0,.11a11,11,0,0,0,3.11,9.34l2.64,2.63-5.41,5.4a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29L9.9,15.57h0l2.83-2.83h0l2-2A3,3,0,0,0,16.84,11.63ZM9.19,13.45,6.56,10.81A9.06,9.06,0,0,1,4,5.4L10.61,12Zm6.24.57A1,1,0,0,0,14,15.44l6.3,6.3A1,1,0,0,0,21,22a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"
  }));
};
var uil_restaurant_default = UilRestaurant;
