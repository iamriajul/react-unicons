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

// src/icons/uil-file-lock-alt.tsx
var uil_file_lock_alt_exports = {};
__export(uil_file_lock_alt_exports, {
  default: () => uil_file_lock_alt_default
});
module.exports = __toCommonJS(uil_file_lock_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilFileLockAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M10,20H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h5V7a3,3,0,0,0,3,3h4a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0L11.06,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3h5a1,1,0,0,0,0-2ZM12,5.41,14.59,8H13a1,1,0,0,1-1-1ZM13,13a1,1,0,0,0-1-1H7a1,1,0,0,0,0,2h5A1,1,0,0,0,13,13ZM7,10H8A1,1,0,0,0,8,8H7a1,1,0,0,0,0,2Zm0,6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm13-.82V15a3,3,0,0,0-6,0v.18A3,3,0,0,0,12,18v1a3,3,0,0,0,3,3h4a3,3,0,0,0,3-3V18A3,3,0,0,0,20,15.18ZM17,14a1,1,0,0,1,1,1H16A1,1,0,0,1,17,14Zm3,5a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Z"
  }));
};
var uil_file_lock_alt_default = UilFileLockAlt;
