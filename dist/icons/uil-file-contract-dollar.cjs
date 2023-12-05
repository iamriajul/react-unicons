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

// src/icons/uil-file-contract-dollar.tsx
var uil_file_contract_dollar_exports = {};
__export(uil_file_contract_dollar_exports, {
  default: () => uil_file_contract_dollar_default
});
module.exports = __toCommonJS(uil_file_contract_dollar_exports);
var import_react = __toESM(require("react"), 1);
var UilFileContractDollar = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.71,20.29,20,18.56c0-.11,0-.21,0-.31a2.75,2.75,0,0,0-2.75-2.75h-.34l-1.44-1.44a.67.67,0,0,1,.28-.06H19a1,1,0,0,0,0-2H17.5V11a1,1,0,0,0-2,0v1a2.74,2.74,0,0,0-1.47.59l-1.32-1.33a1,1,0,0,0-1.42,1.42L13,14.44c0,.11,0,.21,0,.31a2.75,2.75,0,0,0,2.75,2.75h.34l1.44,1.44a.67.67,0,0,1-.28.06H14a1,1,0,0,0,0,2h1.5v1a1,1,0,0,0,2,0V21A2.74,2.74,0,0,0,19,20.38l1.32,1.33a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM10,19H5a1,1,0,0,1-1-1V4A1,1,0,0,1,5,3h6V7a1,1,0,0,0,1,1h5a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09l-5-5h0a1.07,1.07,0,0,0-.28-.19l-.09,0A1.31,1.31,0,0,0,12.06,1H5A3,3,0,0,0,2,4V18a3,3,0,0,0,3,3h5a1,1,0,0,0,0-2ZM13,4.41,14.59,6H13Z"
  }));
};
var uil_file_contract_dollar_default = UilFileContractDollar;
