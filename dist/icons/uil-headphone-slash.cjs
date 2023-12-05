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

// src/icons/uil-headphone-slash.tsx
var uil_headphone_slash_exports = {};
__export(uil_headphone_slash_exports, {
  default: () => uil_headphone_slash_default
});
module.exports = __toCommonJS(uil_headphone_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilHeadphoneSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M19.06934,5.93555a9.94468,9.94468,0,0,0-9.38868-2.6709.99992.99992,0,0,0,.43848,1.95117A8.0193,8.0193,0,0,1,20,13h-.33984a1,1,0,0,0,0,2H20v.33984a1,1,0,1,0,2,0V13A9.88842,9.88842,0,0,0,19.06934,5.93555ZM3.707,2.293A.99989.99989,0,0,0,2.293,3.707L4.72833,6.1424A9.96176,9.96176,0,0,0,2,13v7a1,1,0,0,0,1,1H6a3.00328,3.00328,0,0,0,3-3V16a3.00328,3.00328,0,0,0-3-3H4A7.96344,7.96344,0,0,1,6.14453,7.55859L15,16.41406V18a3.00328,3.00328,0,0,0,3,3h1.58594l.707.707A.99989.99989,0,0,0,21.707,20.293ZM6,15a1.0013,1.0013,0,0,1,1,1v2a1.0013,1.0013,0,0,1-1,1H4V15Z"
  }));
};
var uil_headphone_slash_default = UilHeadphoneSlash;
