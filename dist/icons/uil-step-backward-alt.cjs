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

// src/icons/uil-step-backward-alt.tsx
var uil_step_backward_alt_exports = {};
__export(uil_step_backward_alt_exports, {
  default: () => uil_step_backward_alt_default
});
module.exports = __toCommonJS(uil_step_backward_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilStepBackwardAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M19,3a3,3,0,0,0-3,3V18a3,3,0,0,0,6,0V6A3,3,0,0,0,19,3Zm1,15a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0ZM12.63,5.63a2.6,2.6,0,0,0-2.64,0l-6.67,4a2.75,2.75,0,0,0,0,4.7l6.67,4a2.57,2.57,0,0,0,2.64,0A2.74,2.74,0,0,0,14,16V8A2.74,2.74,0,0,0,12.63,5.63ZM12,16a.72.72,0,0,1-.36.64.61.61,0,0,1-.63,0l-6.66-4a.76.76,0,0,1,0-1.28l6.66-4a.63.63,0,0,1,.32-.09.64.64,0,0,1,.31.08A.72.72,0,0,1,12,8Z"
  }));
};
var uil_step_backward_alt_default = UilStepBackwardAlt;