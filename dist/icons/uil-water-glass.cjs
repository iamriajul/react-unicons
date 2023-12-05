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

// src/icons/uil-water-glass.tsx
var uil_water_glass_exports = {};
__export(uil_water_glass_exports, {
  default: () => uil_water_glass_default
});
module.exports = __toCommonJS(uil_water_glass_exports);
var import_react = __toESM(require("react"), 1);
var UilWaterGlass = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M18.08,7A1,1,0,0,0,17,7.92l-.35,4.55a2.67,2.67,0,0,1-1.2-.77,1,1,0,0,0-1.5,0,2.65,2.65,0,0,1-3.9,0,1,1,0,0,0-1.5,0,2.7,2.7,0,0,1-1.2.77L7,7.92A1,1,0,0,0,5.92,7,1,1,0,0,0,5,8.08l.86,11.15a3,3,0,0,0,3,2.77h6.3a3,3,0,0,0,3-2.77L19,8.08A1,1,0,0,0,18.08,7ZM16.14,19.08a1,1,0,0,1-1,.92H8.85a1,1,0,0,1-1-.92L7.5,14.5a4.77,4.77,0,0,0,1.8-.79,4.66,4.66,0,0,0,5.4,0,4.77,4.77,0,0,0,1.8.79ZM12,10a3.26,3.26,0,0,0,3.25-3.25c0-2.75-2.58-4.51-2.69-4.58a1,1,0,0,0-1.12,0C11.33,2.25,8.75,4,8.75,6.75A3.26,3.26,0,0,0,12,10Zm0-5.7a3.61,3.61,0,0,1,1.25,2.45,1.25,1.25,0,0,1-2.5,0A3.66,3.66,0,0,1,12,4.3Z"
  }));
};
var uil_water_glass_default = UilWaterGlass;
