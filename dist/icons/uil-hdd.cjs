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

// src/icons/uil-hdd.tsx
var uil_hdd_exports = {};
__export(uil_hdd_exports, {
  default: () => uil_hdd_default
});
module.exports = __toCommonJS(uil_hdd_exports);
var import_react = __toESM(require("react"), 1);
var UilHdd = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M22,14.86a0,0,0,0,1,0,0v-.05a2.61,2.61,0,0,0-.1-.57L20.26,4.51a3,3,0,0,0-3-2.51H6.69A3,3,0,0,0,3.74,4.51L2.12,14.22a2.61,2.61,0,0,0-.1.57v.05a0,0,0,0,1,0,0C2,14.91,2,15,2,15v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15C22,15,22,14.91,22,14.86ZM5.71,4.83a1,1,0,0,1,1-.83H17.31a1,1,0,0,1,1,.83l1.2,7.22A2.63,2.63,0,0,0,19,12H5a2.63,2.63,0,0,0-.49.05ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15.08l.08-.46A1,1,0,0,1,5,14H19a1,1,0,0,1,.92.62l.08.46Zm-3-3a1,1,0,1,0,1,1A1,1,0,0,0,17,16Z"
  }));
};
var uil_hdd_default = UilHdd;
