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

// src/icons/uil-circle-layer.tsx
var uil_circle_layer_exports = {};
__export(uil_circle_layer_exports, {
  default: () => uil_circle_layer_default
});
module.exports = __toCommonJS(uil_circle_layer_exports);
var import_react = __toESM(require("react"), 1);
var UilCircleLayer = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M15,2A7,7,0,0,0,8.12,7.74,6,6,0,0,0,5,12.41,5,5,0,1,0,11.59,19a6,6,0,0,0,4.67-3.09A7,7,0,0,0,15,2ZM10,17.43c0,.1,0,.2-.07.31h0a3,3,0,1,1-3.64-3.64h0L6.57,14A2.94,2.94,0,0,1,10,17.43Zm5-3.67a1.8,1.8,0,0,1-.05.19,3.74,3.74,0,0,1-.17.54,4,4,0,0,1-2.7,2.4c0-.18,0-.35-.06-.53s0-.27,0-.4-.12-.38-.18-.57-.07-.24-.12-.36a4.21,4.21,0,0,0-.3-.55c0-.09-.09-.19-.15-.28a5.3,5.3,0,0,0-.6-.73l-.2-.17a5.52,5.52,0,0,0-.53-.43,2.9,2.9,0,0,0-.34-.19,4,4,0,0,0-.5-.27,2.34,2.34,0,0,0-.4-.13,3.13,3.13,0,0,0-.52-.16c-.14,0-.29,0-.44-.06L7.13,12A4,4,0,0,1,9.52,9.3a3.27,3.27,0,0,1,.53-.17l.2-.05A3.74,3.74,0,0,1,11,9a4,4,0,0,1,4,4A3.84,3.84,0,0,1,14.92,13.76Zm2-.16q0-.3,0-.6a6,6,0,0,0-6-6q-.3,0-.6,0A5,5,0,1,1,17,13.6Z"
  }));
};
var uil_circle_layer_default = UilCircleLayer;
