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

// src/icons/uil-wind-moon.tsx
var uil_wind_moon_exports = {};
__export(uil_wind_moon_exports, {
  default: () => uil_wind_moon_default
});
module.exports = __toCommonJS(uil_wind_moon_exports);
var import_react = __toESM(require("react"), 1);
var UilWindMoon = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12,19H7a1,1,0,0,0,0,2h5a1.01348,1.01348,0,0,1,1,1,1,1,0,0,0,2,0A3.00328,3.00328,0,0,0,12,19ZM14,9a1,1,0,1,0-1-1A1,1,0,0,0,14,9Zm4,0h2a3.00328,3.00328,0,0,0,3-3,1,1,0,0,0-2,0,1.01348,1.01348,0,0,1-1,1H18a1,1,0,0,0,0,2Zm2,6H17.83868a8.04287,8.04287,0,0,0,1.14667-2.9502,1.00038,1.00038,0,0,0-1.30566-1.11718,5.96932,5.96932,0,0,1-1.91992.31738A6.06179,6.06179,0,0,1,9.7002,5.2002a7.15542,7.15542,0,0,1,.09765-1.04883A.99925.99925,0,0,0,8.49023,3.05273,8.03194,8.03194,0,0,0,4.26587,15H3a1,1,0,0,0,0,2H8a1,1,0,0,0,0-2H6.83051a6.028,6.028,0,0,1,.8814-9.36035A8.06544,8.06544,0,0,0,15.75977,13.25a7.87832,7.87832,0,0,0,.78906-.03906A6.02734,6.02734,0,0,1,15.27728,15H12a1,1,0,0,0,0,2h8a1,1,0,0,1,0,2,1,1,0,0,0,0,2,3,3,0,0,0,0-6ZM2.62012,19.08008a1.14718,1.14718,0,0,0-.33008.21A1.02776,1.02776,0,0,0,2,20a.98979.98979,0,0,0,1.37988.91992A1.16044,1.16044,0,0,0,3.71,20.71.99349.99349,0,0,0,4,20a1.05232,1.05232,0,0,0-.29-.71A1.00157,1.00157,0,0,0,2.62012,19.08008Z"
  }));
};
var uil_wind_moon_default = UilWindMoon;
