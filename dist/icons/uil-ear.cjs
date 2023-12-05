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

// src/icons/uil-ear.tsx
var uil_ear_exports = {};
__export(uil_ear_exports, {
  default: () => uil_ear_default
});
module.exports = __toCommonJS(uil_ear_exports);
var import_react = __toESM(require("react"), 1);
var UilEar = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12,8a1.00067,1.00067,0,0,1,1,1,1,1,0,0,0,2,0,2.9995,2.9995,0,1,0-5.01758,2.2207c.01.0091.16113.16992.19336.21485a.9875.9875,0,0,1,0,1.11914.99952.99952,0,1,0,1.64844,1.13086,2.98332,2.98332,0,0,0-.00488-3.38867,7.12392,7.12392,0,0,0-.49122-.55665,1.05523,1.05523,0,0,1-.1582-.18164A1.00072,1.00072,0,0,1,12,8Zm0-6a7.0006,7.0006,0,0,0-6.76172,8.81152A.99989.99989,0,0,0,7.16992,10.294,5.00018,5.00018,0,1,1,17,9a5.11412,5.11412,0,0,1-.70508,2.56738L12.73145,19A2.00462,2.00462,0,0,1,11,20a2.027,2.027,0,0,1-2-2,1.99224,1.99224,0,0,1,.26855-.999,1.00065,1.00065,0,0,0-1.73242-1.002,3.9988,3.9988,0,1,0,6.96289,3.9336L18.0625,12.5A7.00044,7.00044,0,0,0,12,2Z"
  }));
};
var uil_ear_default = UilEar;
