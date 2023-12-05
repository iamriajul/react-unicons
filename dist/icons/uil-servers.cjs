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

// src/icons/uil-servers.tsx
var uil_servers_exports = {};
__export(uil_servers_exports, {
  default: () => uil_servers_default
});
module.exports = __toCommonJS(uil_servers_exports);
var import_react = __toESM(require("react"), 1);
var UilServers = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M15,17a1,1,0,1,0,1,1A1,1,0,0,0,15,17Zm-4,0H9a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm0-6H9a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,15,11Zm8-3a3,3,0,0,0-3-3H19a3,3,0,0,0-3-3H8A3,3,0,0,0,5,5H4A3,3,0,0,0,1,8v2a3,3,0,0,0,.78,2A3,3,0,0,0,1,14v2a3,3,0,0,0,3,3H5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3h1a3,3,0,0,0,3-3V14a3,3,0,0,0-.78-2A3,3,0,0,0,23,10ZM5,17H4a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H5a3,3,0,0,0,.78,2A3,3,0,0,0,5,17Zm0-6H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H5a3,3,0,0,0,.78,2A3,3,0,0,0,5,11Zm12,8a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H8A1,1,0,0,1,7,7V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Zm4,9a1,1,0,0,1-1,1H19a3,3,0,0,0-.78-2A3,3,0,0,0,19,13h1a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H19a3,3,0,0,0-.78-2A3,3,0,0,0,19,7h1a1,1,0,0,1,1,1ZM15,5a1,1,0,1,0,1,1A1,1,0,0,0,15,5ZM11,5H9A1,1,0,0,0,9,7h2a1,1,0,0,0,0-2Z"
  }));
};
var uil_servers_default = UilServers;
