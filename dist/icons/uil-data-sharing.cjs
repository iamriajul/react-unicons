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

// src/icons/uil-data-sharing.tsx
var uil_data_sharing_exports = {};
__export(uil_data_sharing_exports, {
  default: () => uil_data_sharing_default
});
module.exports = __toCommonJS(uil_data_sharing_exports);
var import_react = __toESM(require("react"), 1);
var UilDataSharing = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M20.52,3.87A5,5,0,0,0,11.44,4H7A3,3,0,0,0,4,7v4a1,1,0,0,0,2,0V7A1,1,0,0,1,7,6H9.78A3,3,0,0,0,9,8a3,3,0,0,0,3,3h7.33a3.66,3.66,0,0,0,1.19-7.13ZM19.33,9H12a1,1,0,0,1,0-2,1,1,0,0,0,1-1,3,3,0,0,1,5.84-1,1,1,0,0,0,.78.67A1.65,1.65,0,0,1,21,7.33,1.67,1.67,0,0,1,19.33,9ZM19,13a1,1,0,0,0-1,1v3a1,1,0,0,1-1,1H14.74a3.66,3.66,0,0,0-2.22-2.13,5,5,0,0,0-9.45,1.28A3,3,0,0,0,4,23h7.33a3.66,3.66,0,0,0,3.6-3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13Zm-7.67,8H4a1,1,0,0,1,0-2,1,1,0,0,0,1-1,3,3,0,0,1,5.84-1,1,1,0,0,0,.78.67A1.65,1.65,0,0,1,13,19.33,1.67,1.67,0,0,1,11.33,21Z"
  }));
};
var uil_data_sharing_default = UilDataSharing;
