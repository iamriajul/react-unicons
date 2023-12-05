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

// src/icons/uil-table-tennis.tsx
var uil_table_tennis_exports = {};
__export(uil_table_tennis_exports, {
  default: () => uil_table_tennis_default
});
module.exports = __toCommonJS(uil_table_tennis_exports);
var import_react = __toESM(require("react"), 1);
var UilTableTennis = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M20.71,16.1l-1.64-1.64a.94.94,0,0,1-.22-1.07A5.78,5.78,0,0,0,19.39,11a.36.36,0,0,0,0-.1,5.74,5.74,0,0,0-1.06-3.34,14.17,14.17,0,0,0-5.17-4.42,7,7,0,0,0-8,1.31l-.67.67a7,7,0,0,0-1.31,8.05l.1.17a3,3,0,0,0-.84,2.06A3,3,0,0,0,7,17.94c.18.14.34.29.52.42A5.55,5.55,0,0,0,8.74,19l.09,0c.18.07.37.13.57.19l.15,0a5.08,5.08,0,0,0,.95.15l.28,0h.12l.22,0c.21,0,.41,0,.62-.06h.17l0,0a5.46,5.46,0,0,0,1.42-.45,1,1,0,0,1,1.07.21l1.46,1.46a3.4,3.4,0,0,0,2.39,1,2.85,2.85,0,0,0,2-.85l.38-.38A3,3,0,0,0,20.71,16.1Zm-15.3.32a1,1,0,1,1,1-1A1,1,0,0,1,5.41,16.42Zm3.1.14-.26-.2a2.94,2.94,0,0,0,.16-.94,3,3,0,0,0-3-3c-.13,0-.25,0-.38,0l-.09-.16a5,5,0,0,1,.93-5.75l.67-.67A5,5,0,0,1,12.28,5a12,12,0,0,1,4.26,3.57Zm10.78,2.37-.37.38c-.42.42-1.07.34-1.61-.2l-1.46-1.45a3,3,0,0,0-3.34-.61,3.39,3.39,0,0,1-1,.31,2.84,2.84,0,0,1-.58.05l-.34,0h-.1l6.87-6.87a3.8,3.8,0,0,1-.34,2h0a3,3,0,0,0,.61,3.34l1.64,1.65A1,1,0,0,1,19.29,18.93Z"
  }));
};
var uil_table_tennis_default = UilTableTennis;
