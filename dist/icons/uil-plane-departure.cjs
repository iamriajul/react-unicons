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

// src/icons/uil-plane-departure.tsx
var uil_plane_departure_exports = {};
__export(uil_plane_departure_exports, {
  default: () => uil_plane_departure_default
});
module.exports = __toCommonJS(uil_plane_departure_exports);
var import_react = __toESM(require("react"), 1);
var UilPlaneDeparture = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M22,5.08A3.08,3.08,0,0,0,16.74,2.9L13.93,5.71,7.44,3.55a1,1,0,0,0-1,.24L4.06,6.15a1,1,0,0,0,.29,1.61l5.18,2.35-2.6,2.6-1.71-.86A1,1,0,0,0,4.06,12L2.29,13.81a1,1,0,0,0,0,1.41l6.49,6.49a1,1,0,0,0,1.41,0L12,19.94a1,1,0,0,0,.19-1.16l-.86-1.71,2.6-2.6,2.35,5.18a1,1,0,0,0,1.61.29l2.36-2.36a1,1,0,0,0,.24-1l-2.16-6.49L21.1,7.26A3.05,3.05,0,0,0,22,5.08Zm-2.32.77L16.44,9.09a1,1,0,0,0-.24,1l2.16,6.48-.9.9-2.35-5.17a1,1,0,0,0-.73-.57,1,1,0,0,0-.89.28L9.37,16.17a1,1,0,0,0-.19,1.15L10,19l-.56.56L4.41,14.52,5,14l1.71.86a1,1,0,0,0,1.15-.19L12,10.51a1,1,0,0,0-.29-1.62L6.5,6.54l.9-.9L13.88,7.8a1,1,0,0,0,1-.24l3.24-3.24a1.07,1.07,0,0,1,1.53,0,1,1,0,0,1,.32.76A1.06,1.06,0,0,1,19.68,5.85Z"
  }));
};
var uil_plane_departure_default = UilPlaneDeparture;
