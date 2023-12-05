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

// src/icons/uil-slack-alt.tsx
var uil_slack_alt_exports = {};
__export(uil_slack_alt_exports, {
  default: () => uil_slack_alt_default
});
module.exports = __toCommonJS(uil_slack_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilSlackAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M23,9.5A3.50424,3.50424,0,0,0,19.5,6a3.45946,3.45946,0,0,0-1.5.35107V4.5a3.49466,3.49466,0,0,0-6-2.44171A3.48676,3.48676,0,0,0,6.35107,6H4.5a3.49466,3.49466,0,0,0-2.44171,6A3.48676,3.48676,0,0,0,6,17.64893V19.5a3.49466,3.49466,0,0,0,6,2.44171A3.48676,3.48676,0,0,0,17.64893,18H19.5a3.49466,3.49466,0,0,0,2.44171-6A3.48559,3.48559,0,0,0,23,9.5Zm-10-5a1.5,1.5,0,0,1,3,0v5a1.5,1.5,0,0,1-3,0Zm-7,10A1.5,1.5,0,1,1,4.5,13H6Zm5,5a1.5,1.5,0,0,1-3,0v-5a1.5,1.5,0,0,1,3,0ZM9.5,11h-5a1.5,1.5,0,0,1,0-3h5a1.5,1.5,0,0,1,0,3ZM11,6H9.5A1.5,1.5,0,1,1,11,4.5Zm1,6.05829c-.01935-.01978-.03851-.03894-.05829-.05829.01978-.01935.03894-.03851.05829-.05829.01935.01978.03851.03894.05829.05829C12.03851,12.01935,12.01935,12.03851,12,12.05829ZM14.5,21A1.50164,1.50164,0,0,1,13,19.5V18h1.5a1.5,1.5,0,0,1,0,3Zm5-5h-5a1.5,1.5,0,0,1,0-3h5a1.5,1.5,0,0,1,0,3Zm0-5H18V9.5A1.5,1.5,0,1,1,19.5,11Z"
  }));
};
var uil_slack_alt_default = UilSlackAlt;
