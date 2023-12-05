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

// src/icons/uil-envelope-heart.tsx
var uil_envelope_heart_exports = {};
__export(uil_envelope_heart_exports, {
  default: () => uil_envelope_heart_default
});
module.exports = __toCommonJS(uil_envelope_heart_exports);
var import_react = __toESM(require("react"), 1);
var UilEnvelopeHeart = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M20.5,13a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V8.41L9.38,14.3a3,3,0,0,0,2.11.87,3,3,0,0,0,2.15-.9l.89-.88A1,1,0,0,0,13.13,12l-.93.91a1,1,0,0,1-1.4,0L4.91,7H9.5a1,1,0,0,0,0-2h-5a3,3,0,0,0-3,3V18a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V14A1,1,0,0,0,20.5,13Zm1.05-9a3.33,3.33,0,0,0-3.88-.54,3.25,3.25,0,0,0-3.88,5.13L17,11.71a1.05,1.05,0,0,0,.71.29,1,1,0,0,0,.71-.29l3.17-3.17A3.26,3.26,0,0,0,21.55,4ZM20.14,7.12,17.67,9.59,15.21,7.12A1.24,1.24,0,0,1,17,5.36a1,1,0,0,0,1.42,0,1.28,1.28,0,0,1,1.76,0A1.26,1.26,0,0,1,20.14,7.12Z"
  }));
};
var uil_envelope_heart_default = UilEnvelopeHeart;
