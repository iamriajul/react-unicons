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

// src/icons/uil-band-aid.tsx
var uil_band_aid_exports = {};
__export(uil_band_aid_exports, {
  default: () => uil_band_aid_default
});
module.exports = __toCommonJS(uil_band_aid_exports);
var import_react = __toESM(require("react"), 1);
var UilBandAid = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M8.82,11.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.42A1,1,0,0,0,8.82,11.29Zm2.47,2.48a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,11.29,13.77Zm9-10A6,6,0,0,0,12,3.55a6,6,0,0,0-8.24.2h0A6,6,0,0,0,3.57,12,6,6,0,0,0,8,22a5.92,5.92,0,0,0,4-1.55,6,6,0,0,0,8.25-.2A6,6,0,0,0,20.43,12,6,6,0,0,0,20.25,3.75ZM18.83,5.17A4,4,0,0,1,19,10.56L13.44,5A4.07,4.07,0,0,1,18.83,5.17ZM5.17,18.83A4,4,0,0,1,5,13.44l5.6,5.6A4.08,4.08,0,0,1,5.17,18.83Zm13.66,0a4.08,4.08,0,0,1-5.64,0l-8-8a4,4,0,0,1,0-5.64h0a4,4,0,0,1,5.64,0l8,8A4,4,0,0,1,18.83,18.83Zm-5.06-7.54a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.42A1,1,0,0,0,13.77,11.29ZM11.29,8.82a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,11.29,8.82Z"
  }));
};
var uil_band_aid_default = UilBandAid;
