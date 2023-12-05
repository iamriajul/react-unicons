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

// src/icons/uil-mobile-vibrate.tsx
var uil_mobile_vibrate_exports = {};
__export(uil_mobile_vibrate_exports, {
  default: () => uil_mobile_vibrate_default
});
module.exports = __toCommonJS(uil_mobile_vibrate_exports);
var import_react = __toESM(require("react"), 1);
var UilMobileVibrate = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M9.88,14.12,9.73,14l-.18-.1-.18-.05a1,1,0,0,0-.9.27.83.83,0,0,0-.22.33.94.94,0,0,0,0,.76,1.07,1.07,0,0,0,.54.54,1,1,0,0,0,.38.08,1.09,1.09,0,0,0,.39-.08.87.87,0,0,0,.32-.22,1,1,0,0,0,.22-.32,1,1,0,0,0,.07-.38.84.84,0,0,0-.08-.38A.93.93,0,0,0,9.88,14.12ZM3.51,8.76a1,1,0,0,0,.71-.3L8.46,4.22a1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0L2.81,7.05a1,1,0,0,0,0,1.41A1,1,0,0,0,3.51,8.76Zm17.68,6.78a1,1,0,0,0-1.41,0l-4.24,4.24a1,1,0,0,0,.7,1.71,1,1,0,0,0,.71-.3L21.19,17A1,1,0,0,0,21.19,15.54Zm.17-5.66a3,3,0,0,0-.87-2.12L16.24,3.51a3.08,3.08,0,0,0-4.24,0L3.51,12a3,3,0,0,0,0,4.24l4.25,4.25h0a3,3,0,0,0,4.24,0L20.49,12A3,3,0,0,0,21.36,9.88Zm-2.29.71-8.48,8.48a1,1,0,0,1-1.42,0h0L4.93,14.83a1,1,0,0,1,0-1.42l8.48-8.48a1,1,0,0,1,1.42,0l4.24,4.24a1,1,0,0,1,0,1.42Z"
  }));
};
var uil_mobile_vibrate_default = UilMobileVibrate;
