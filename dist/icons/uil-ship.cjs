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

// src/icons/uil-ship.tsx
var uil_ship_exports = {};
__export(uil_ship_exports, {
  default: () => uil_ship_default
});
module.exports = __toCommonJS(uil_ship_exports);
var import_react = __toESM(require("react"), 1);
var UilShip = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M3.62,17.28a1,1,0,0,0,1.86-.74L4.36,13.72,11,12.25V17a1,1,0,0,0,2,0V12.25l6.64,1.47-1.12,2.82a1,1,0,0,0,.56,1.3,1,1,0,0,0,.37.07,1,1,0,0,0,.93-.63l1.55-3.91a1,1,0,0,0-.05-.84,1,1,0,0,0-.66-.51L18,11.31V7a1,1,0,0,0-1-1H15V3a1,1,0,0,0-1-1H10A1,1,0,0,0,9,3V6H7A1,1,0,0,0,6,7v4.31L2.78,12a1,1,0,0,0-.66.51,1,1,0,0,0-.05.84ZM11,4h2V6H11ZM8,8h8v2.86L12.22,10h-.1L12,10l-.12,0h-.1L8,10.86ZM20.71,19.28a4.38,4.38,0,0,0-1,.45,2.08,2.08,0,0,1-2.1,0,4.62,4.62,0,0,0-4.54,0,2.14,2.14,0,0,1-2.12,0,4.64,4.64,0,0,0-4.54,0,2.08,2.08,0,0,1-2.1,0,4.38,4.38,0,0,0-1-.45A1,1,0,0,0,2,20a1,1,0,0,0,.67,1.24,2.1,2.1,0,0,1,.57.25,4,4,0,0,0,2,.55,4.14,4.14,0,0,0,2.08-.56,2.65,2.65,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.65,2.65,0,0,1,2.56,0,4,4,0,0,0,4.1,0,2.1,2.1,0,0,1,.57-.25A1,1,0,0,0,22,20,1,1,0,0,0,20.71,19.28Z"
  }));
};
var uil_ship_default = UilShip;
