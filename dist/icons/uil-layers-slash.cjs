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

// src/icons/uil-layers-slash.tsx
var uil_layers_slash_exports = {};
__export(uil_layers_slash_exports, {
  default: () => uil_layers_slash_default
});
module.exports = __toCommonJS(uil_layers_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilLayersSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M20.49,13.94l-.34.2a1,1,0,0,0-.35,1.37,1,1,0,0,0,.86.49,1,1,0,0,0,.51-.14l.34-.2a1,1,0,0,0-1-1.72ZM11.65,6.36,12,6.15l7,4-1.76,1a1,1,0,0,0,.5,1.87,1,1,0,0,0,.5-.13l3.26-1.89a1,1,0,0,0,0-1.74l-9-5.19a1,1,0,0,0-1,0l-.85.49a1,1,0,0,0,1,1.74ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.93,7.34l-3.43,2a1,1,0,0,0,0,1.74l9,5.2a1.09,1.09,0,0,0,.5.13,1.13,1.13,0,0,0,.5-.13L14,15.4l1.45,1.46-3.44,2L3.5,13.93a1,1,0,0,0-1,1.74l9,5.2a1,1,0,0,0,1,0l4.41-2.55,3.38,3.39a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm8.29,12L5,10.19,7.4,8.81l5.12,5.13Z"
  }));
};
var uil_layers_slash_default = UilLayersSlash;
