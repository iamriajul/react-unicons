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

// src/icons/uil-google-hangouts-alt.tsx
var uil_google_hangouts_alt_exports = {};
__export(uil_google_hangouts_alt_exports, {
  default: () => uil_google_hangouts_alt_default
});
module.exports = __toCommonJS(uil_google_hangouts_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilGoogleHangoutsAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M8.9917,7.69049a2,2,0,0,0,0,4l.01514-.00153v.50147a.501.501,0,0,1-.5.5,1,1,0,0,0,0,2,2.50232,2.50232,0,0,0,2.5-2.5v-2.5A.94144.94144,0,0,0,10.9765,9.54,1.99365,1.99365,0,0,0,8.9917,7.69049Zm2.99951-6.68854a9.78734,9.78734,0,0,0-1,19.52344V22.002a.99911.99911,0,0,0,1.23926.97071A12.53481,12.53481,0,0,0,21.69727,11.998a9.73409,9.73409,0,0,0-9.70606-10.9961ZM19.709,11.78223a10.54778,10.54778,0,0,1-6.71777,8.86035V19.57617a.99942.99942,0,0,0-1-1,7.78711,7.78711,0,1,1,7.78809-7.78711A7.94524,7.94524,0,0,1,19.709,11.78223ZM14.9917,7.69049a2,2,0,1,0,0,4l.01514-.00153v.50147a.501.501,0,0,1-.5.5,1,1,0,0,0,0,2,2.50232,2.50232,0,0,0,2.5-2.5v-2.5A.94144.94144,0,0,0,16.9765,9.54,1.99365,1.99365,0,0,0,14.9917,7.69049Z"
  }));
};
var uil_google_hangouts_alt_default = UilGoogleHangoutsAlt;
