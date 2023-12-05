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

// src/icons/uil-traffic-light.tsx
var uil_traffic_light_exports = {};
__export(uil_traffic_light_exports, {
  default: () => uil_traffic_light_default
});
module.exports = __toCommonJS(uil_traffic_light_exports);
var import_react = __toESM(require("react"), 1);
var UilTrafficLight = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12,5.5A1.5,1.5,0,1,0,13.5,7,1.5,1.5,0,0,0,12,5.5Zm10,3h-.54A6,6,0,0,0,23,4.5a1,1,0,0,0-1-1H17.82A3,3,0,0,0,15,1.5H9a3,3,0,0,0-2.82,2H2a1,1,0,0,0-1,1,6,6,0,0,0,1.54,4H2a1,1,0,0,0-1,1,6,6,0,0,0,1.54,4H2a1,1,0,0,0-1,1,6,6,0,0,0,5.16,5.93A3,3,0,0,0,9,22.5h6a3,3,0,0,0,2.84-2.07A6,6,0,0,0,23,14.5a1,1,0,0,0-1-1h-.54A6,6,0,0,0,23,9.5,1,1,0,0,0,22,8.5ZM6,18.37A4,4,0,0,1,3.13,15.5H6Zm0-5A4,4,0,0,1,3.13,10.5H6Zm0-5a4.09,4.09,0,0,1-1.83-1,4.09,4.09,0,0,1-1-1.83H6ZM16,19.5a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V4.5a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Zm3.83-2.17a4.09,4.09,0,0,1-1.83,1V15.5h2.87A4.09,4.09,0,0,1,19.83,17.33Zm0-5a4.09,4.09,0,0,1-1.83,1V10.5h2.87A4.09,4.09,0,0,1,19.83,12.33Zm0-5a4.09,4.09,0,0,1-1.83,1V5.5h2.87A4.09,4.09,0,0,1,19.83,7.33ZM12,15.5A1.5,1.5,0,1,0,13.5,17,1.5,1.5,0,0,0,12,15.5Zm0-5A1.5,1.5,0,1,0,13.5,12,1.5,1.5,0,0,0,12,10.5Z"
  }));
};
var uil_traffic_light_default = UilTrafficLight;
