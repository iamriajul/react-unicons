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

// src/icons/uil-cloud-wifi.tsx
var uil_cloud_wifi_exports = {};
__export(uil_cloud_wifi_exports, {
  default: () => uil_cloud_wifi_default
});
module.exports = __toCommonJS(uil_cloud_wifi_exports);
var import_react = __toESM(require("react"), 1);
var UilCloudWifi = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M8.5,5.94a7.1,7.1,0,0,1,7,0,1,1,0,0,0,1.37-.37,1,1,0,0,0-.37-1.36,9.14,9.14,0,0,0-9,0,1,1,0,0,0-.37,1.36A1,1,0,0,0,8.5,5.94Zm9.92,5.27a5.91,5.91,0,0,0-.36-.71,1,1,0,0,0-1.38-.33,1,1,0,0,0-.33,1.37,4.58,4.58,0,0,1,.38.84,1,1,0,0,0,.78.67A3,3,0,0,1,20,16a3,3,0,0,1-3,3L5.66,19A2,2,0,0,1,4,17.4,2,2,0,0,1,6,15a1,1,0,0,0,1-1,4.92,4.92,0,0,1,.67-2.49,1,1,0,0,0-.37-1.37,1,1,0,0,0-1.36.37,6.75,6.75,0,0,0-.88,2.6,4,4,0,0,0-2.13,1.33A4,4,0,0,0,5.46,21h.13L17,21a5,5,0,0,0,1.42-9.79ZM14.87,9s0,0,0-.06A.92.92,0,0,0,15,8.74a1,1,0,0,0-.57-1.29,6.36,6.36,0,0,0-1.74-.38c-.1,0-.2,0-.3,0a5.47,5.47,0,0,0-.81,0,3,3,0,0,0-.31,0,6.36,6.36,0,0,0-1.74.38A1,1,0,0,0,9,8.74a1.22,1.22,0,0,0,.12.19.61.61,0,0,0,0,.11,1,1,0,0,0,1.37.36,3.08,3.08,0,0,1,3,0A1,1,0,0,0,14.87,9ZM11,12a1,1,0,1,0,1-1A1,1,0,0,0,11,12Z"
  }));
};
var uil_cloud_wifi_default = UilCloudWifi;
