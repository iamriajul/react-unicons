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

// src/icons/uil-user-md.tsx
var uil_user_md_exports = {};
__export(uil_user_md_exports, {
  default: () => uil_user_md_default
});
module.exports = __toCommonJS(uil_user_md_exports);
var import_react = __toESM(require("react"), 1);
var UilUserMd = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "m15.899 13.229-.005-.002c-.063-.027-.124-.058-.188-.083A5.988 5.988 0 0 0 18 8.434a5.29 5.29 0 0 0-.045-.63.946.946 0 0 0 .038-.122l.281-2.397a3.006 3.006 0 0 0-2.442-3.302l-.79-.143a16.931 16.931 0 0 0-6.083 0l-.791.143a3.006 3.006 0 0 0-2.442 3.302l.28 2.397a.946.946 0 0 0 .039.122 5.29 5.29 0 0 0-.045.63 5.988 5.988 0 0 0 2.294 4.71c-.064.025-.125.056-.188.083l-.005.002a9.948 9.948 0 0 0-6.035 8.097 1 1 0 0 0 1.988.217 7.948 7.948 0 0 1 4.216-6.185l3.023 3.023a1 1 0 0 0 1.414 0l3.023-3.023a7.948 7.948 0 0 1 4.216 6.185 1 1 0 0 0 .992.892 1.048 1.048 0 0 0 .11-.006 1 1 0 0 0 .886-1.103 9.948 9.948 0 0 0-6.036-8.097ZM7.712 5.051a1.002 1.002 0 0 1 .814-1.1l.79-.143a14.93 14.93 0 0 1 5.368 0l.79.143a1.002 1.002 0 0 1 .814 1.1l-.178 1.514H7.89ZM12 16.261l-1.65-1.651a7.85 7.85 0 0 1 3.3 0Zm0-3.826a4.005 4.005 0 0 1-3.998-3.87h7.996A4.005 4.005 0 0 1 12 12.435Z"
  }));
};
var uil_user_md_default = UilUserMd;
