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

// src/icons/uil-pagelines.tsx
var uil_pagelines_exports = {};
__export(uil_pagelines_exports, {
  default: () => uil_pagelines_default
});
module.exports = __toCommonJS(uil_pagelines_exports);
var import_react = __toESM(require("react"), 1);
var UilPagelines = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M18.885 13.993c1.75-.901 2.282-3.35 2.282-3.35s-2.305-.99-4.055-.085a4.206 4.206 0 0 0-1.698 1.822 8.965 8.965 0 0 0 .06-.99 6.993 6.993 0 0 0 1.582-4.726C16.712 3.901 13.71 2 13.71 2s-2.442 2.583-2.095 5.35a6.819 6.819 0 0 0 2.518 4.03 9.322 9.322 0 0 1-.076 1.01 4.396 4.396 0 0 0-1.9-2.058c-1.774-.853-4.049.203-4.049.203s.603 2.432 2.376 3.284a4.72 4.72 0 0 0 3.258.076 9.433 9.433 0 0 1-1.458 2.9 4.393 4.393 0 0 0-2.012-1.98c-1.813-.763-4.028.404-4.028.404s.72 2.402 2.536 3.162a3.744 3.744 0 0 0 1.735.243 9.419 9.419 0 0 1-5.845 2.032.672.672 0 0 0 0 1.344 10.786 10.786 0 0 0 7.968-3.527 4.954 4.954 0 0 0 3.336 1.194c1.96-.207 3.34-2.299 3.34-2.299s-1.792-1.753-3.75-1.543a3.54 3.54 0 0 0-1.36.456 10.744 10.744 0 0 0 .895-2.275 5.153 5.153 0 0 0 3.786-.013Z"
  }));
};
var uil_pagelines_default = UilPagelines;
