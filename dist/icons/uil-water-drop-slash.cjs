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

// src/icons/uil-water-drop-slash.tsx
var uil_water_drop_slash_exports = {};
__export(uil_water_drop_slash_exports, {
  default: () => uil_water_drop_slash_default
});
module.exports = __toCommonJS(uil_water_drop_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilWaterDropSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71l4,4a12.46,12.46,0,0,0-2,6.57A7.76,7.76,0,0,0,12,22a7.64,7.64,0,0,0,5.87-2.71l2.42,2.42a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM12,20a5.76,5.76,0,0,1-5.75-5.75A10.3,10.3,0,0,1,7.72,9.14l8.74,8.73A5.67,5.67,0,0,1,12,20ZM10.85,5.24c.45-.42.85-.75,1.15-1,1.43,1.12,5.13,4.43,5.68,8.88a1,1,0,0,0,1,.88h.12a1,1,0,0,0,.87-1.11c-.78-6.43-6.85-10.55-7.1-10.72a1,1,0,0,0-1.12,0A18.73,18.73,0,0,0,9.49,3.78a1,1,0,0,0,1.36,1.46Z"
  }));
};
var uil_water_drop_slash_default = UilWaterDropSlash;
