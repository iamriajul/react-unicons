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

// src/icons/uil-car-wash.tsx
var uil_car_wash_exports = {};
__export(uil_car_wash_exports, {
  default: () => uil_car_wash_default
});
module.exports = __toCommonJS(uil_car_wash_exports);
var import_react = __toESM(require("react"), 1);
var UilCarWash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M7.5,4a1,1,0,0,0,.71-.29l1-1A1,1,0,0,0,7.79,1.29l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,7.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,11.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,15.5,4Zm2.42,11.62a.76.76,0,0,0-.09-.18l-.12-.15-.15-.12a.76.76,0,0,0-.18-.09.6.6,0,0,0-.19-.06,1,1,0,0,0-.9.27,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,.29.7.91.91,0,0,0,.33.22A1,1,0,0,0,17,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,17.92,15.62Zm1.84-4.51L18.4,7.05a3,3,0,0,0-2.84-2H8.44A3,3,0,0,0,5.6,7.05L4.24,11.11A3,3,0,0,0,2,14v4a3,3,0,0,0,2,2.82V22a1,1,0,0,0,2,0V21H18v1a1,1,0,0,0,2,0V20.82A3,3,0,0,0,22,18V14A3,3,0,0,0,19.76,11.11ZM7.49,7.68A1,1,0,0,1,8.44,7h7.12a1,1,0,0,1,1,.68L17.61,11H6.39ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm-7-3H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm-5.08.62a.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-1.09-.21,1,1,0,0,0-.33.21,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18A.64.64,0,0,0,6,15.8,1.36,1.36,0,0,0,6,16a1,1,0,0,0,1.71.7A1,1,0,0,0,8,16a1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,7.92,15.62Z"
  }));
};
var uil_car_wash_default = UilCarWash;
