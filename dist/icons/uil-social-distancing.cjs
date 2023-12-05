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

// src/icons/uil-social-distancing.tsx
var uil_social_distancing_exports = {};
__export(uil_social_distancing_exports, {
  default: () => uil_social_distancing_default
});
module.exports = __toCommonJS(uil_social_distancing_exports);
var import_react = __toESM(require("react"), 1);
var UilSocialDistancing = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M8.5 17H5.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1.004 1.004 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L5.914 19H8.5a1 1 0 0 0 0-2Zm12.707.293-2-2a1 1 0 0 0-1.414 1.414l.293.293H15.5a1 1 0 0 0 0 2h2.586l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1.004 1.004 0 0 0 0-1.414Zm-.567-7.521A3.468 3.468 0 0 0 21.5 7.5a3.5 3.5 0 0 0-7 0 3.468 3.468 0 0 0 .86 2.272A4.988 4.988 0 0 0 13 14a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0 4.988 4.988 0 0 0-2.36-4.228ZM18 9a1.5 1.5 0 1 1 1.5-1.5A1.502 1.502 0 0 1 18 9Zm-9.36.772A3.468 3.468 0 0 0 9.5 7.5a3.5 3.5 0 0 0-7 0 3.468 3.468 0 0 0 .86 2.272A4.988 4.988 0 0 0 1 14a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0 4.988 4.988 0 0 0-2.36-4.228ZM6 9a1.5 1.5 0 1 1 1.5-1.5A1.502 1.502 0 0 1 6 9Z"
  }));
};
var uil_social_distancing_default = UilSocialDistancing;
