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

// src/icons/uil-hindi-to-chinese.tsx
var uil_hindi_to_chinese_exports = {};
__export(uil_hindi_to_chinese_exports, {
  default: () => uil_hindi_to_chinese_default
});
module.exports = __toCommonJS(uil_hindi_to_chinese_exports);
var import_react = __toESM(require("react"), 1);
var UilHindiToChinese = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M11.022,2h-2a1,1,0,0,0,0,2V6H7.83771A2.96481,2.96481,0,0,0,8.022,5,3,3,0,0,0,2.42383,3.5a1.00016,1.00016,0,1,0,1.73242,1A1.00171,1.00171,0,0,1,5.022,4a1,1,0,0,1,0,2,1,1,0,0,0,0,2,1,1,0,0,1,0,2,1.00171,1.00171,0,0,1-.86572-.5,1.00016,1.00016,0,1,0-1.73242,1A3,3,0,0,0,8.022,9a2.96481,2.96481,0,0,0-.18426-1H9.022v3a1,1,0,0,0,2,0V4a1,1,0,0,0,0-2Zm3,5h1a1.0013,1.0013,0,0,1,1,1V9a1,1,0,0,0,2,0V8a3.00328,3.00328,0,0,0-3-3h-1a1,1,0,0,0,0,2Zm-4,9h-1a1.0013,1.0013,0,0,1-1-1V14a1,1,0,0,0-2,0v1a3.00328,3.00328,0,0,0,3,3h1a1,1,0,0,0,0-2Zm11-1a1,1,0,0,0,0-2h-3v-.5a1,1,0,0,0-2,0V13h-3a1,1,0,0,0,0,2h5.18427a6.72756,6.72756,0,0,1-1.22553,2.52667,6.66828,6.66828,0,0,1-.62915-.98272.99972.99972,0,1,0-1.77929.9121,8.67791,8.67791,0,0,0,.9591,1.468A6.6182,6.6182,0,0,1,13.10645,20.023a1.00008,1.00008,0,0,0,.42675,1.9541,8.63506,8.63506,0,0,0,3.445-1.62164,8.72368,8.72368,0,0,0,3.46857,1.62115,1,1,0,1,0,.43066-1.95312,6.72477,6.72477,0,0,1-2.4461-1.09009A8.73637,8.73637,0,0,0,20.24371,15Z"
  }));
};
var uil_hindi_to_chinese_default = UilHindiToChinese;
