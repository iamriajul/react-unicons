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

// src/icons/uil-wind-sun.tsx
var uil_wind_sun_exports = {};
__export(uil_wind_sun_exports, {
  default: () => uil_wind_sun_default
});
module.exports = __toCommonJS(uil_wind_sun_exports);
var import_react = __toESM(require("react"), 1);
var UilWindSun = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M11,4.5a.99943.99943,0,0,0,1-1v-1a1,1,0,0,0-2,0v1A.99943.99943,0,0,0,11,4.5Zm-7,7a.99943.99943,0,0,0-1-1H2a1,1,0,0,0,0,2H3A.99943.99943,0,0,0,4,11.5Zm.63574,4.9502-.707.707a.99989.99989,0,1,0,1.41406,1.41406l.707-.707A.99989.99989,0,1,0,4.63574,16.4502Zm0-9.9004A.99989.99989,0,0,0,6.0498,5.13574l-.707-.707A.99989.99989,0,0,0,3.92871,5.84277Zm12.02149.293a.99672.99672,0,0,0,.707-.293l.707-.707a.99989.99989,0,1,0-1.41406-1.41406l-.707.707a1,1,0,0,0,.707,1.707ZM13,12a.99943.99943,0,0,0,1,1h5a3.00328,3.00328,0,0,0,3-3,1,1,0,0,0-2,0,1.01348,1.01348,0,0,1-1,1H14A.99943.99943,0,0,0,13,12Zm7,3H15a1,1,0,0,0,0,2h5a1,1,0,0,1,0,2,1,1,0,0,0,0,2,3,3,0,0,0,0-6ZM9,19a1,1,0,1,0,1,1A1,1,0,0,0,9,19Zm6,0H13a1,1,0,0,0,0,2h2a1.01348,1.01348,0,0,1,1,1,1,1,0,0,0,2,0A3.00328,3.00328,0,0,0,15,19Zm-4-4a3.5,3.5,0,0,1,0-7,3.41539,3.41539,0,0,1,2.1875.77441,1.00008,1.00008,0,1,0,1.26562-1.54882A5.39339,5.39339,0,0,0,11,6a5.5,5.5,0,0,0,0,11,1,1,0,0,0,0-2Z"
  }));
};
var uil_wind_sun_default = UilWindSun;
