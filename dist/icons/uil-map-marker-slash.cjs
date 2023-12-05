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

// src/icons/uil-map-marker-slash.tsx
var uil_map_marker_slash_exports = {};
__export(uil_map_marker_slash_exports, {
  default: () => uil_map_marker_slash_default
});
module.exports = __toCommonJS(uil_map_marker_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilMapMarkerSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M10.63,5.49a6,6,0,0,1,7.21,7.2,1,1,0,0,0,.74,1.21.9.9,0,0,0,.23,0,1,1,0,0,0,1-.76,8,8,0,0,0-9.61-9.62,1,1,0,0,0,.46,2ZM21.71,20.07,17.44,15.8h0L3.71,2.07a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L5.5,6.69A8,8,0,0,0,6.34,17l4.95,4.95a1,1,0,0,0,1.42,0l4-4,3.56,3.56a1,1,0,0,0,1.42-1.41Zm-9.59-6.76a2,2,0,0,1-1.53-.57A2,2,0,0,1,10,11.21ZM12,19.81,7.76,15.57a6,6,0,0,1-.82-7.44L8.41,9.6a4,4,0,0,0,.76,4.55A4,4,0,0,0,12,15.33a3.93,3.93,0,0,0,1.73-.41l1.58,1.58Z"
  }));
};
var uil_map_marker_slash_default = UilMapMarkerSlash;
