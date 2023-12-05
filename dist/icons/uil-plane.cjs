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

// src/icons/uil-plane.tsx
var uil_plane_exports = {};
__export(uil_plane_exports, {
  default: () => uil_plane_default
});
module.exports = __toCommonJS(uil_plane_exports);
var import_react = __toESM(require("react"), 1);
var UilPlane = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.75,12a1,1,0,0,0-.55-.89L15.08,8.05v-4a3.08,3.08,0,1,0-6.16,0v4L2.8,11.11a1,1,0,0,0-.55.89v3.33a1,1,0,0,0,.43.83,1,1,0,0,0,.92.11l5.32-2V18l-1.82.6a1,1,0,0,0-.68.95V22a1,1,0,0,0,.3.71,1,1,0,0,0,.7.29h9.17a1,1,0,0,0,1-1V19.5a1,1,0,0,0-.68-.95L15.08,18V14.28l5.32,2a1,1,0,0,0,.92-.11,1,1,0,0,0,.43-.83Zm-7.31-.1a1,1,0,0,0-.93.11,1,1,0,0,0-.43.82v5.84a1,1,0,0,0,.69.95l1.81.6V21H8.41v-.78l1.81-.6a1,1,0,0,0,.69-.95V12.83a1,1,0,0,0-.43-.82,1,1,0,0,0-.93-.11l-5.31,2V12.62l6.11-3.06a1,1,0,0,0,.56-.89V4.08a1.08,1.08,0,1,1,2.16,0V8.67a1,1,0,0,0,.56.89l6.11,3.06v1.27Z"
  }));
};
var uil_plane_default = UilPlane;
