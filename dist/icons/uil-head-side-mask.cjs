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

// src/icons/uil-head-side-mask.tsx
var uil_head_side_mask_exports = {};
__export(uil_head_side_mask_exports, {
  default: () => uil_head_side_mask_default
});
module.exports = __toCommonJS(uil_head_side_mask_exports);
var import_react = __toESM(require("react"), 1);
var UilHeadSideMask = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M13.23 2.003a7.367 7.367 0 0 0-5.453 2.114A7.441 7.441 0 0 0 5.5 9.465l-1.844 2.998a.995.995 0 0 0-.156.52v.04a1 1 0 0 0 .07.347l1.44 3.873c.012.034.027.067.043.099A2.984 2.984 0 0 0 7.736 19H8.5v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 .321-.053l3.7-1.256a.999.999 0 0 0 .018.12l1 3.466A1.001 1.001 0 0 0 18.5 22a1.018 1.018 0 0 0 .277-.04 1 1 0 0 0 .684-1.237l-.924-3.2 1.93-7.267A1.031 1.031 0 0 0 20.5 10v-.228a7.698 7.698 0 0 0-7.27-7.769ZM11.5 17H7.736a.995.995 0 0 1-.874-.513L5.938 14H11.5Zm5.523-1.591L13.5 16.605V13.72l4.345-1.448Zm1.412-5.389a.973.973 0 0 0-.251.031L12.337 12H6.29l1.074-1.747a1 1 0 0 0 .148-.562L7.5 9.5a5.455 5.455 0 0 1 1.67-3.947 5.522 5.522 0 0 1 4-1.55 5.685 5.685 0 0 1 5.33 5.77Z"
  }));
};
var uil_head_side_mask_default = UilHeadSideMask;
