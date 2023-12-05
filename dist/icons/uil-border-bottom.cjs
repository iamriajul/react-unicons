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

// src/icons/uil-border-bottom.tsx
var uil_border_bottom_exports = {};
__export(uil_border_bottom_exports, {
  default: () => uil_border_bottom_default
});
module.exports = __toCommonJS(uil_border_bottom_exports);
var import_react = __toESM(require("react"), 1);
var UilBorderBottom = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12,13.5a1,1,0,1,0-1-1A1,1,0,0,0,12,13.5Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,12,17.5Zm0-8a1,1,0,1,0-1-1A1,1,0,0,0,12,9.5Zm-4-4a1,1,0,1,0-1-1A1,1,0,0,0,8,5.5Zm0,8a1,1,0,1,0-1-1A1,1,0,0,0,8,13.5Zm12-8a1,1,0,1,0-1-1A1,1,0,0,0,20,5.5Zm-4,8a1,1,0,1,0-1-1A1,1,0,0,0,16,13.5Zm-4-8a1,1,0,1,0-1-1A1,1,0,0,0,12,5.5Zm4,0a1,1,0,1,0-1-1A1,1,0,0,0,16,5.5Zm4,10a1,1,0,1,0,1,1A1,1,0,0,0,20,15.5Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,20,11.5Zm0,8H4a1,1,0,0,0,0,2H20a1,1,0,0,0,0-2Zm0-12a1,1,0,1,0,1,1A1,1,0,0,0,20,7.5Zm-16,6a1,1,0,1,0-1-1A1,1,0,0,0,4,13.5Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,4,9.5Zm0,8a1,1,0,1,0-1-1A1,1,0,0,0,4,17.5Zm0-12a1,1,0,1,0-1-1A1,1,0,0,0,4,5.5Z"
  }));
};
var uil_border_bottom_default = UilBorderBottom;