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

// src/icons/uil-layer-group-slash.tsx
var uil_layer_group_slash_exports = {};
__export(uil_layer_group_slash_exports, {
  default: () => uil_layer_group_slash_default
});
module.exports = __toCommonJS(uil_layer_group_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilLayerGroupSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M10.26,5,12,4l7,4L15.85,9.83a1,1,0,0,0-.37,1.36,1,1,0,0,0,1.37.37L21.5,8.87a1,1,0,0,0,0-1.74l-9-5.2a1,1,0,0,0-1,0L9.26,3.23A1,1,0,0,0,8.89,4.6,1,1,0,0,0,10.26,5ZM3.71,2.29A1,1,0,0,0,2.29,3.71L4.54,6l-2,1.17a1,1,0,0,0,0,1.74l9,5.2a1,1,0,0,0,1,0l.1-.06,1.07,1.07-1.67,1L3.5,11.13a1,1,0,1,0-1,1.74l9,5.2a1,1,0,0,0,.5.13,1,1,0,0,0,.5-.13l2.63-1.52,1.07,1.07L12,20,3.5,15.13a1,1,0,0,0-1,1.74l9,5.2a1,1,0,0,0,1,0l5.17-3,2.62,2.63a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM5,8l1-.58,2.75,2.75Zm15.5,3.13-2.12,1.22a1,1,0,0,0,1,1.74l2.12-1.22a1,1,0,1,0-1-1.74Z"
  }));
};
var uil_layer_group_slash_default = UilLayerGroupSlash;
