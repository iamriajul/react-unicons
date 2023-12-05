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

// src/icons/uil-image-alt-slash.tsx
var uil_image_alt_slash_exports = {};
__export(uil_image_alt_slash_exports, {
  default: () => uil_image_alt_slash_default
});
module.exports = __toCommonJS(uil_image_alt_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilImageAltSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.71,20.29l-.93-.93-.09-.1-.06-.07-.5-.5L20,18.62l-5.18-5.2-.09-.08-3.2-3.21L11.43,10,3.71,2.29A1,1,0,0,0,2.29,3.71l1,1A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a2.9,2.9,0,0,0,1.27-.31l0,0h0s0,0,.05,0l.95,1a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM5,6.41,8.24,9.65a2.84,2.84,0,0,0-.67.48L5,12.71ZM6,19a1,1,0,0,1-1-1V15.54l4-4a.81.81,0,0,1,1.1,0L17.59,19ZM9.66,5H18a1,1,0,0,1,1,1v5.94l0,0a1,1,0,1,0-1.42,1.42l1.74,1.74a1,1,0,0,0,1.42,0,1,1,0,0,0,.29-.72h0V6a3,3,0,0,0-3-3H9.66a1,1,0,0,0,0,2Z"
  }));
};
var uil_image_alt_slash_default = UilImageAltSlash;
