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

// src/icons/uil-dna.tsx
var uil_dna_exports = {};
__export(uil_dna_exports, {
  default: () => uil_dna_default
});
module.exports = __toCommonJS(uil_dna_exports);
var import_react = __toESM(require("react"), 1);
var UilDna = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M9.2,13.73a1,1,0,0,0-1.41-.05A11.18,11.18,0,0,0,4,22a1,1,0,0,0,2,0,9.15,9.15,0,0,1,3.15-6.86A1,1,0,0,0,9.2,13.73Zm10.17,4.64a10.86,10.86,0,0,0-1.6-3A14.31,14.31,0,0,0,14.06,12C16.3,10.57,20,7.4,20,2a1,1,0,0,0-2,0c0,5.4-4.59,8.17-6,8.89A13.42,13.42,0,0,1,9.31,9H12a1,1,0,0,0,0-2H7.55a9.39,9.39,0,0,1-1-2H15a1,1,0,0,0,0-2H6.06A8.14,8.14,0,0,1,6,2,1,1,0,0,0,4,2c0,7.57,7.3,10.79,7.61,10.92h0A12.93,12.93,0,0,1,14.7,15H12a1,1,0,0,0,0,2h4.43a9.07,9.07,0,0,1,1,2H9a1,1,0,0,0,0,2h8.94A8.26,8.26,0,0,1,18,22a1,1,0,0,0,2,0,10.5,10.5,0,0,0-.22-2.19A9.23,9.23,0,0,0,19.37,18.37Z"
  }));
};
var uil_dna_default = UilDna;
