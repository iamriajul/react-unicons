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

// src/icons/uil-trowel.tsx
var uil_trowel_exports = {};
__export(uil_trowel_exports, {
  default: () => uil_trowel_default
});
module.exports = __toCommonJS(uil_trowel_exports);
var import_react = __toESM(require("react"), 1);
var UilTrowel = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.12,2.88a3.08,3.08,0,0,0-4.24,0L14.46,5.29a3,3,0,0,0-.57,3.41l-2.15,2.15-2-2a3,3,0,0,0-5,1.17l-2.66,8a3,3,0,0,0,.72,3.07A3,3,0,0,0,5,22a2.87,2.87,0,0,0,1-.16l8-2.66a3,3,0,0,0,1.17-5l-2-2,2.15-2.15a3,3,0,0,0,3.41-.57l2.41-2.42A3,3,0,0,0,21.12,2.88ZM13.7,15.63a1,1,0,0,1-.4,1.65L5.32,20a1,1,0,0,1-1-.25,1,1,0,0,1-.25-1l2.67-8A1,1,0,0,1,7.44,10a1.07,1.07,0,0,1,.23,0,1,1,0,0,1,.7.29l2,2-.87.86a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.86-.87Zm6-9.92L17.29,8.12a1,1,0,0,1-1.7-.71,1,1,0,0,1,.29-.7l2.41-2.42a1,1,0,0,1,1.42,0A1,1,0,0,1,19.71,5.71Z"
  }));
};
var uil_trowel_default = UilTrowel;