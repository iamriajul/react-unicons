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

// src/icons/uil-wifi-router.tsx
var uil_wifi_router_exports = {};
__export(uil_wifi_router_exports, {
  default: () => uil_wifi_router_default
});
module.exports = __toCommonJS(uil_wifi_router_exports);
var import_react = __toESM(require("react"), 1);
var UilWifiRouter = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M8.9,17a1,1,0,1,0,1,1A1,1,0,0,0,8.9,17Zm-3,0a1,1,0,1,0,1,1A1,1,0,0,0,5.9,17Zm6,0a1,1,0,1,0,1,1A1,1,0,0,0,11.9,17ZM15,8.5a1,1,0,0,1,1.73,0,1,1,0,0,0,1.36.37A1,1,0,0,0,18.5,7.5a3,3,0,0,0-5.2,0A1,1,0,0,0,15,8.5ZM22,5.5a7,7,0,0,0-12.12,0,1,1,0,0,0,.37,1.37A1,1,0,0,0,10.7,7a1,1,0,0,0,.87-.5,5,5,0,0,1,8.66,0,1,1,0,0,0,1.37.37A1,1,0,0,0,22,5.5ZM17.9,14h-1V11a1,1,0,1,0-2,0v3H4.9a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3h13a3,3,0,0,0,3-3V17A3,3,0,0,0,17.9,14Zm1,5a1,1,0,0,1-1,1H4.9a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1h13a1,1,0,0,1,1,1Z"
  }));
};
var uil_wifi_router_default = UilWifiRouter;
