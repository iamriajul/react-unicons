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

// src/icons/uil-file-question-alt.tsx
var uil_file_question_alt_exports = {};
__export(uil_file_question_alt_exports, {
  default: () => uil_file_question_alt_default
});
module.exports = __toCommonJS(uil_file_question_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilFileQuestionAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M13.07,12h-5a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm1,8h-8a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v1a1,1,0,0,0,2,0V9a.14.14,0,0,0,0-.06A.86.86,0,0,0,19,8.67l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1,1,0,0,0-.29-.19s-.05,0-.08,0A.88.88,0,0,0,12.12,2h-6a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h8a1,1,0,0,0,0-2Zm-1-14.59L15.65,8H14.07a1,1,0,0,1-1-1Zm5.57,14.88a1.58,1.58,0,0,0-.15-.12,1.08,1.08,0,0,0-.36-.15,1,1,0,0,0-.9.27,1,1,0,0,0,0,1.42,1,1,0,0,0,.7.29,1,1,0,0,0,.93-1.38A1.19,1.19,0,0,0,18.64,20.29ZM13.07,16h-5a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm4.86-3a3,3,0,0,0-2.6,1.5,1,1,0,1,0,1.74,1,1,1,0,1,1,.86,1.5,1,1,0,0,0,0,2,3,3,0,0,0,0-6ZM8.07,10h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Z"
  }));
};
var uil_file_question_alt_default = UilFileQuestionAlt;