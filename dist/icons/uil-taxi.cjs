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

// src/icons/uil-taxi.tsx
var uil_taxi_exports = {};
__export(uil_taxi_exports, {
  default: () => uil_taxi_default
});
module.exports = __toCommonJS(uil_taxi_exports);
var import_react = __toESM(require("react"), 1);
var UilTaxi = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M17.38,14.58a1,1,0,0,0-.58-.06.64.64,0,0,0-.18.06.76.76,0,0,0-.18.09l-.15.12a1.05,1.05,0,0,0-.29.71,1,1,0,0,0,.29.71,1.19,1.19,0,0,0,.33.22,1,1,0,0,0,1.09-.22,1.15,1.15,0,0,0,.21-.33A.84.84,0,0,0,18,15.5a1.05,1.05,0,0,0-.29-.71A.93.93,0,0,0,17.38,14.58ZM20,10.68V7.5a3,3,0,0,0-3-3h-.78l-.77-2.32a1,1,0,0,0-.95-.68h-5a1,1,0,0,0-.95.68L7.78,4.5H7a3,3,0,0,0-3,3v3.18A3,3,0,0,0,2,13.5v6a1,1,0,0,0,1,1H4v1a1,1,0,0,0,2,0v-1H18v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,1-1v-6A3,3,0,0,0,20,10.68ZM10.22,3.5h3.56l.33,1H9.89ZM6,7.5a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v3H6Zm14,11H4v-5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1ZM6.62,14.58a1,1,0,0,0-.33.21A1.05,1.05,0,0,0,6,15.5a1,1,0,0,0,1.38.93,1.19,1.19,0,0,0,.33-.22A1,1,0,0,0,8,15.5a1.05,1.05,0,0,0-.29-.71A1,1,0,0,0,6.62,14.58ZM13,14.5H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
  }));
};
var uil_taxi_default = UilTaxi;
