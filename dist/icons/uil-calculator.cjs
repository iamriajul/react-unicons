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

// src/icons/uil-calculator.tsx
var uil_calculator_exports = {};
__export(uil_calculator_exports, {
  default: () => uil_calculator_default
});
module.exports = __toCommonJS(uil_calculator_exports);
var import_react = __toESM(require("react"), 1);
var UilCalculator = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12.71,17.29a1,1,0,0,0-.16-.12.56.56,0,0,0-.17-.09.6.6,0,0,0-.19-.06.93.93,0,0,0-.57.06.9.9,0,0,0-.54.54A.84.84,0,0,0,11,18a1,1,0,0,0,.07.38,1.46,1.46,0,0,0,.22.33A1,1,0,0,0,12,19a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,13,18a1,1,0,0,0-.08-.38A1,1,0,0,0,12.71,17.29ZM8.55,13.17a.56.56,0,0,0-.17-.09A.6.6,0,0,0,8.19,13a.86.86,0,0,0-.39,0l-.18.06-.18.09-.15.12A1.05,1.05,0,0,0,7,14a1,1,0,0,0,.29.71,1.15,1.15,0,0,0,.33.21A1,1,0,0,0,9,14a1.05,1.05,0,0,0-.29-.71Zm.16,4.12a1,1,0,0,0-.33-.21A1,1,0,0,0,7.8,17l-.18.06a.76.76,0,0,0-.18.09,1.58,1.58,0,0,0-.15.12,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33A1,1,0,0,0,8,19a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,8.71,17.29Zm2.91-4.21a1,1,0,0,0-.33.21A1.05,1.05,0,0,0,11,14a1,1,0,0,0,1.38.92,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,13,14a1.05,1.05,0,0,0-.29-.71A1,1,0,0,0,11.62,13.08Zm5.09,4.21a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33A1,1,0,0,0,16,19a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,16.71,17.29ZM16,5H8A1,1,0,0,0,7,6v4a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V6A1,1,0,0,0,16,5ZM15,9H9V7h6Zm3-8H6A3,3,0,0,0,3,4V20a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V4A3,3,0,0,0,18,1Zm1,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1Zm-2.45-6.83a.56.56,0,0,0-.17-.09.6.6,0,0,0-.19-.06.86.86,0,0,0-.39,0l-.18.06-.18.09-.15.12A1.05,1.05,0,0,0,15,14a1,1,0,0,0,1.38.92,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,17,14a1.05,1.05,0,0,0-.29-.71Z"
  }));
};
var uil_calculator_default = UilCalculator;
