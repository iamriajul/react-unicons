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

// src/icons/uil-intercom-alt.tsx
var uil_intercom_alt_exports = {};
__export(uil_intercom_alt_exports, {
  default: () => uil_intercom_alt_default
});
module.exports = __toCommonJS(uil_intercom_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilIntercomAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M9.99121,15.00044a.99942.99942,0,0,0,1-1v-8a1,1,0,1,0-2,0v8A.99943.99943,0,0,0,9.99121,15.00044Zm4,0a.99942.99942,0,0,0,1-1v-8a1,1,0,1,0-2,0v8A.99943.99943,0,0,0,13.99121,15.00044Zm-8-2a.99942.99942,0,0,0,1-1v-4a1,1,0,0,0-2,0v4A.99943.99943,0,0,0,5.99121,13.00044Zm14-12h-16a3.00328,3.00328,0,0,0-3,3v16a3.00328,3.00328,0,0,0,3,3h16a3.00328,3.00328,0,0,0,3-3v-16A3.00328,3.00328,0,0,0,19.99121,1.00044Zm1,19a1.00067,1.00067,0,0,1-1,1h-16a1.00067,1.00067,0,0,1-1-1v-16a1.00067,1.00067,0,0,1,1-1h16a1.00067,1.00067,0,0,1,1,1Zm-3.64355-4.5918a8.82089,8.82089,0,0,1-5.35645,1.5918,8.98692,8.98692,0,0,1-5.35644-1.5918,1.00017,1.00017,0,1,0-1.28711,1.53125,10.79981,10.79981,0,0,0,6.64355,2.06055,10.79989,10.79989,0,0,0,6.64356-2.06055,1.00017,1.00017,0,0,0-1.28711-1.53125Zm.64355-8.4082a.99942.99942,0,0,0-1,1v4a1,1,0,1,0,2,0v-4A.99942.99942,0,0,0,17.99121,7.00044Z"
  }));
};
var uil_intercom_alt_default = UilIntercomAlt;
