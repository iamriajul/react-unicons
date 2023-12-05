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

// src/icons/uil-flip-v.tsx
var uil_flip_v_exports = {};
__export(uil_flip_v_exports, {
  default: () => uil_flip_v_default
});
module.exports = __toCommonJS(uil_flip_v_exports);
var import_react = __toESM(require("react"), 1);
var UilFlipV = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M7.6,15.18A1,1,0,0,0,6.18,16.6l1.06,1.06a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM3.81,9.78,2.75,10.84a.91.91,0,0,0-.19.26,1,1,0,0,0-.27,1.61l1.06,1.06a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L4.41,12l.81-.81A1,1,0,0,0,3.81,9.78ZM8,10.57a1,1,0,0,0-1,1v1.5a1,1,0,0,0,2,0v-1.5A1,1,0,0,0,8,10.57Zm13.71.72-5-5a1,1,0,0,0-1.09-.21A1,1,0,0,0,15,7V17a1,1,0,0,0,.62.92A.84.84,0,0,0,16,18a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM17,14.59V9.41L19.59,12ZM12,2a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0V3A1,1,0,0,0,12,2ZM8.38,6.08a1,1,0,0,0-1.09.21L6.64,7a1,1,0,0,0,0,1.41,1,1,0,0,0,.7.3,1,1,0,0,0,.45-.11A1,1,0,0,0,9,7.57V7A1,1,0,0,0,8.38,6.08Z"
  }));
};
var uil_flip_v_default = UilFlipV;
