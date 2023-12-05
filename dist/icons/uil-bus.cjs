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

// src/icons/uil-bus.tsx
var uil_bus_exports = {};
__export(uil_bus_exports, {
  default: () => uil_bus_default
});
module.exports = __toCommonJS(uil_bus_exports);
var import_react = __toESM(require("react"), 1);
var UilBus = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M8.5,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-.33-.21A1,1,0,0,0,8.3,15l-.18.06-.18.09a1.58,1.58,0,0,0-.15.12l-.12.15a.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,1,1Zm8,0a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18l-.12-.15a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21l-.12.15a.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,.29.7A1,1,0,0,0,16.5,17Zm-3-12h-2a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm5-3H6.5a3,3,0,0,0-3,3V17a3,3,0,0,0,2,2.82V21a1,1,0,0,0,2,0V20h10v1a1,1,0,0,0,2,0V19.82a3,3,0,0,0,2-2.82V5A3,3,0,0,0,18.5,2Zm1,15a1,1,0,0,1-1,1H6.5a1,1,0,0,1-1-1V14h14Zm0-5H5.5V5a1,1,0,0,1,1-1h12a1,1,0,0,1,1,1Z"
  }));
};
var uil_bus_default = UilBus;
