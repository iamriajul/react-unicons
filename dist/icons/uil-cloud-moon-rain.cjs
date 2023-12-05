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

// src/icons/uil-cloud-moon-rain.tsx
var uil_cloud_moon_rain_exports = {};
__export(uil_cloud_moon_rain_exports, {
  default: () => uil_cloud_moon_rain_default
});
module.exports = __toCommonJS(uil_cloud_moon_rain_exports);
var import_react = __toESM(require("react"), 1);
var UilCloudMoonRain = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M8.5,14a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V15A1,1,0,0,0,8.5,14Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,8.5,19ZM21.7,7.07a1,1,0,0,0-.94-.26,3,3,0,0,1-.65.08,3,3,0,0,1-3-3,3.13,3.13,0,0,1,.08-.66,1,1,0,0,0-.26-.93A1,1,0,0,0,16,2a4.93,4.93,0,0,0-3.83,4.21A6.24,6.24,0,0,0,10.5,6a6,6,0,0,0-5.94,5.13,3.5,3.5,0,0,0-.46,6.58,1.14,1.14,0,0,0,.4.08,1,1,0,0,0,.4-1.92A1.48,1.48,0,0,1,4,14.5,1.5,1.5,0,0,1,5.5,13a1,1,0,0,0,1-1,4,4,0,0,1,4-4,3.91,3.91,0,0,1,2.17.66l0,0a3.94,3.94,0,0,1,1.57,2,1,1,0,0,0,.78.67A2.32,2.32,0,0,1,16,15.61a1,1,0,0,0,1.1,1.68A4.32,4.32,0,0,0,19,13.67a4.23,4.23,0,0,0-.49-2A4.94,4.94,0,0,0,22,8,1,1,0,0,0,21.7,7.07ZM17.11,9.89a2.72,2.72,0,0,1-.42,0A4.6,4.6,0,0,0,16,9.54a6.06,6.06,0,0,0-1.82-2.28c0-.12,0-.25,0-.37a3,3,0,0,1,1.05-2.28,5,5,0,0,0,4.23,4.23A3,3,0,0,1,17.11,9.89ZM12.5,13a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V14A1,1,0,0,0,12.5,13Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V19A1,1,0,0,0,12.5,18Z"
  }));
};
var uil_cloud_moon_rain_default = UilCloudMoonRain;
