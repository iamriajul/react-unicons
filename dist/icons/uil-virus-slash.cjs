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

// src/icons/uil-virus-slash.tsx
var uil_virus_slash_exports = {};
__export(uil_virus_slash_exports, {
  default: () => uil_virus_slash_default
});
module.exports = __toCommonJS(uil_virus_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilVirusSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M10.17 5.236a7.514 7.514 0 0 1 .83-.158v1.27a1 1 0 1 0 2 0V5.071a6.946 6.946 0 0 1 3.95 1.98v.001l.001.001a6.987 6.987 0 0 1 1.97 3.949H18a1 1 0 0 0 0 2h.922a7.65 7.65 0 0 1-.16.827 1 1 0 0 0 .718 1.217.983.983 0 0 0 .25.032 1 1 0 0 0 .968-.75 9.594 9.594 0 0 0 .236-1.326H22a1 1 0 0 0 0-2h-1.06a8.933 8.933 0 0 0-1.912-4.614l.75-.75a1 1 0 0 0-1.414-1.414l-.753.753A8.911 8.911 0 0 0 13 3.067V1.999a1 1 0 1 0-2 0v1.066a9.473 9.473 0 0 0-1.33.236 1 1 0 0 0 .5 1.936ZM14 9.002a1 1 0 1 0 1-1 1 1 0 0 0-1 1Zm4.377 7.963-.007-.011-.012-.008L2.707 1.295a1 1 0 0 0-1.414 1.414l3.679 3.679a8.932 8.932 0 0 0-1.913 4.614H2a1 1 0 0 0 0 2h1.06a8.948 8.948 0 0 0 1.911 4.615l-.75.75a1 1 0 1 0 1.415 1.413l.75-.75A8.946 8.946 0 0 0 11 20.94v1.063a1 1 0 0 0 2 0v-1.063a8.946 8.946 0 0 0 4.614-1.909l3.679 3.679a1 1 0 0 0 1.414-1.414ZM13 18.92v-1.917a1 1 0 0 0-2 0v1.917a6.986 6.986 0 0 1-3.945-1.96l-.005-.007-.007-.005a6.994 6.994 0 0 1-1.963-3.945H6a1 1 0 0 0 0-2h-.921a6.943 6.943 0 0 1 1.32-3.187L8.253 9.67a1.5 1.5 0 0 0 2.08 2.08l5.853 5.853A6.957 6.957 0 0 1 13 18.919Zm-4-4.917a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z"
  }));
};
var uil_virus_slash_default = UilVirusSlash;
