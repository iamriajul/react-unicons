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

// src/icons/uil-shield-slash.tsx
var uil_shield_slash_exports = {};
__export(uil_shield_slash_exports, {
  default: () => uil_shield_slash_default
});
module.exports = __toCommonJS(uil_shield_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilShieldSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.71,20.29l-16-16h0l-2-2A1,1,0,0,0,2.29,3.71L4,5.41v6.47A9,9,0,0,0,7.77,19.2l3.65,2.61a1,1,0,0,0,1.16,0l3.65-2.61a8.21,8.21,0,0,0,.86-.7l3.2,3.21a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29Zm-6.64-2.71L12,19.77,8.93,17.58A7,7,0,0,1,6,11.88V7.41l9.67,9.68C15.48,17.26,15.28,17.42,15.07,17.58Zm-5-12.51A10.15,10.15,0,0,0,12,4.19a9.82,9.82,0,0,0,6,1.39v6.3a6.88,6.88,0,0,1-.1,1.18,1,1,0,0,0,.83,1.15h.16a1,1,0,0,0,1-.84,9.77,9.77,0,0,0,.12-1.5V4.43a1,1,0,0,0-.37-.77,1,1,0,0,0-.83-.21,7.89,7.89,0,0,1-6.23-1.27,1,1,0,0,0-1.14,0,8,8,0,0,1-2,1,1,1,0,1,0,.64,1.9Z"
  }));
};
var uil_shield_slash_default = UilShieldSlash;
