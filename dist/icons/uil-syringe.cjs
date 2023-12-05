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

// src/icons/uil-syringe.tsx
var uil_syringe_exports = {};
__export(uil_syringe_exports, {
  default: () => uil_syringe_default
});
module.exports = __toCommonJS(uil_syringe_exports);
var import_react = __toESM(require("react"), 1);
var UilSyringe = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.71,2.29a1,1,0,0,0-1.42,0L18.17,4.41l-.71-.7a1,1,0,0,0-1.41,0L14.64,5.12l-.71-.71a1,1,0,0,0-1.42,0L4.74,12.19,4,11.49A1,1,0,0,0,2.62,12.9l3.53,3.54L4.42,18.18l-.71-.72a1,1,0,0,0-1.42,1.42l2.83,2.83a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42l-.71-.7,1.74-1.74,3.53,3.53a1,1,0,0,0,.71.3,1,1,0,0,0,.7-1.71l-.7-.71,7.78-7.77a1,1,0,0,0,0-1.42l-.71-.71L20.29,8a1,1,0,0,0,0-1.41l-.7-.71,2.12-2.12A1,1,0,0,0,21.71,2.29ZM7.57,15,6.15,13.61l1.41-1.42L9,13.61Zm2.82,2.83L9,16.44,10.39,15l1.42,1.42ZM13.22,15,9,10.78l4.24-4.24.71.7h0l3.53,3.54ZM17.46,8,16.05,6.54l.71-.71.7.7h0l.7.7Z"
  }));
};
var uil_syringe_default = UilSyringe;
