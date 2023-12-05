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

// src/icons/uil-football-american.tsx
var uil_football_american_exports = {};
__export(uil_football_american_exports, {
  default: () => uil_football_american_default
});
module.exports = __toCommonJS(uil_football_american_exports);
var import_react = __toESM(require("react"), 1);
var UilFootballAmerican = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.84,5.56A4.08,4.08,0,0,0,20.7,3.31h0a4.08,4.08,0,0,0-2.25-1.14,13.65,13.65,0,0,0-5.29.24,1.17,1.17,0,0,0-.2.06,14.44,14.44,0,0,0-6.69,3.8A14.59,14.59,0,0,0,2.45,13c0,.06,0,.12-.05.19a13.7,13.7,0,0,0-.24,5.3A4.08,4.08,0,0,0,3.3,20.69h0a4.08,4.08,0,0,0,2.25,1.14A13.12,13.12,0,0,0,7.63,22a13.8,13.8,0,0,0,3.26-.41l.14,0a14.54,14.54,0,0,0,10.52-10.5c0-.06,0-.12.05-.19A13.7,13.7,0,0,0,21.84,5.56ZM16.37,4a10.44,10.44,0,0,1,1.76.14,1.68,1.68,0,0,1,.24.07L17,5.59,15.46,4.05C15.76,4,16.07,4,16.37,4ZM7.67,7.67a12.72,12.72,0,0,1,5.4-3.19L15.59,7,13.44,9.15l-.73-.73a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l.73.73L10.56,12l-.73-.73a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l.73.73L7,15.59,4.49,13.08A12.67,12.67,0,0,1,7.67,7.67ZM4.21,18.37a1.68,1.68,0,0,1-.07-.24A11.38,11.38,0,0,1,4,15.46L5.59,17Zm1.66,1.49a1.68,1.68,0,0,1-.24-.07L7,18.41,8.54,20A11.38,11.38,0,0,1,5.87,19.86Zm10.46-3.53a12.67,12.67,0,0,1-5.41,3.18L8.41,17l2.15-2.15.73.73a1,1,0,1,0,1.42-1.41L12,13.44,13.44,12l.73.73a1,1,0,0,0,.71.29,1,1,0,0,0,.7-1.71l-.73-.73L17,8.41l2.51,2.51A12.67,12.67,0,0,1,16.33,16.33ZM20,8.54,18.41,7l1.38-1.37a1.68,1.68,0,0,1,.07.24A11.38,11.38,0,0,1,20,8.54Z"
  }));
};
var uil_football_american_default = UilFootballAmerican;
