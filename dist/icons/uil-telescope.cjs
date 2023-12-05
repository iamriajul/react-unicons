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

// src/icons/uil-telescope.tsx
var uil_telescope_exports = {};
__export(uil_telescope_exports, {
  default: () => uil_telescope_default
});
module.exports = __toCommonJS(uil_telescope_exports);
var import_react = __toESM(require("react"), 1);
var UilTelescope = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.9,7.59l-1-3.87A3,3,0,0,0,17.19,1.6l-1.93.52a1,1,0,0,0-.71,1.23l.26,1L4.19,7.16a1,1,0,0,0-.71,1.22l.26,1-1,.26a1,1,0,0,0,.25,2,1.09,1.09,0,0,0,.26,0l1-.27.26,1a1,1,0,0,0,.46.6,1,1,0,0,0,.5.14.75.75,0,0,0,.26,0L9,12.08v.42a2.9,2.9,0,0,0,.3,1.28l-5,5a1,1,0,0,0,1.41,1.42l5-5,.28.11V21.5a1,1,0,0,0,2,0V15.32a2.52,2.52,0,0,0,.29-.12l5,5a1,1,0,1,0,1.41-1.42l-5-5A3.09,3.09,0,0,0,15,12.5v-2l1.35-.36.25,1a1,1,0,0,0,1,.74l.26,0,1.93-.52A3,3,0,0,0,21.9,7.59ZM13,12.5a1,1,0,0,1-.28.69h0v0a1,1,0,0,1-.69.28,1,1,0,0,1-.7-.29h0a1,1,0,0,1-.29-.7v-1L13,11ZM6.19,10.76,5.67,8.83l9.66-2.59.26,1,.26,1Zm13.68-1.9a1,1,0,0,1-.61.47l-1,.26-.78-2.9L17,4.76h0l-.26-1,1-.26a1,1,0,0,1,1.23.71l1,3.87A1,1,0,0,1,19.87,8.86Z"
  }));
};
var uil_telescope_default = UilTelescope;
