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

// src/icons/uil-subway.tsx
var uil_subway_exports = {};
__export(uil_subway_exports, {
  default: () => uil_subway_default
});
module.exports = __toCommonJS(uil_subway_exports);
var import_react = __toESM(require("react"), 1);
var UilSubway = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M16,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18l-.12-.15a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21l-.12.15a.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,1,1ZM18,2H6A3,3,0,0,0,3,5V17a3,3,0,0,0,1.2,2.39l-.91.9a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L6.41,20H17.59l1.7,1.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.91-.9A3,3,0,0,0,21,17V5A3,3,0,0,0,18,2ZM5,8h6v4H5Zm14,9a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14H19Zm0-5H13V8h6Zm0-6H5V5A1,1,0,0,1,6,4H18a1,1,0,0,1,1,1ZM8,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18l-.12-.15a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21l-.12.15a.76.76,0,0,0-.09.18A.64.64,0,0,0,7,15.8,1.36,1.36,0,0,0,7,16a1,1,0,0,0,.29.7A1,1,0,0,0,8,17Z"
  }));
};
var uil_subway_default = UilSubway;
