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

// src/icons/uil-award.tsx
var uil_award_exports = {};
__export(uil_award_exports, {
  default: () => uil_award_default
});
module.exports = __toCommonJS(uil_award_exports);
var import_react = __toESM(require("react"), 1);
var UilAward = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M20.87,17.25l-2.71-4.68A6.9,6.9,0,0,0,19,9.25a7,7,0,0,0-14,0,6.9,6.9,0,0,0,.84,3.32L3.13,17.25A1,1,0,0,0,4,18.75l2.87,0,1.46,2.46a1,1,0,0,0,.18.22,1,1,0,0,0,.69.28h.14a1,1,0,0,0,.73-.49L12,17.9l1.93,3.35a1,1,0,0,0,.73.48h.14a1,1,0,0,0,.7-.28.87.87,0,0,0,.17-.21l1.46-2.46,2.87,0a1,1,0,0,0,.87-.5A1,1,0,0,0,20.87,17.25ZM9.19,18.78,8.3,17.29a1,1,0,0,0-.85-.49l-1.73,0,1.43-2.48a7,7,0,0,0,3.57,1.84ZM12,14.25a5,5,0,1,1,5-5A5,5,0,0,1,12,14.25Zm4.55,2.55a1,1,0,0,0-.85.49l-.89,1.49-1.52-2.65a7.06,7.06,0,0,0,3.56-1.84l1.43,2.48Z"
  }));
};
var uil_award_default = UilAward;
