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

// src/icons/uil-bitcoin.tsx
var uil_bitcoin_exports = {};
__export(uil_bitcoin_exports, {
  default: () => uil_bitcoin_default
});
module.exports = __toCommonJS(uil_bitcoin_exports);
var import_react = __toESM(require("react"), 1);
var UilBitcoin = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M11.136,12.11664l-.59577,2.41528c.73542.18469,3.00373.92127,3.33893-.44122C14.22961,12.66974,11.8714,12.30225,11.136,12.11664Zm.81262-3.29621-.5401,2.19056c.61243.15442,2.5003.78405,2.80621-.45526C14.53339,9.26294,12.5611,8.97479,11.94867,8.82043ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.358,8.57538a1.74286,1.74286,0,0,1-1.38525,1.611,1.93285,1.93285,0,0,1,.99682,2.66089c-.58551,1.69214-1.97662,1.835-3.82653,1.48089l-.449,1.81971-1.08484-.27344.44312-1.79529c-.28119-.07062-.56855-.14563-.86457-.22687L9.7431,17.65594l-1.08362-.27343.449-1.82312c-.25342-.06562-.5108-.13532-.77344-.20185l-1.41174-.35595.53857-1.25592s.79932.215.78852.19909a.39446.39446,0,0,0,.49719-.26062L9.965,8.74634a.583.583,0,0,0-.5055-.63812c.017-.01154-.788-.19812-.788-.19812l.28863-1.17188,1.4961.37781L10.455,7.1217c.22491.05652.45666.11029.69275.16468l.44464-1.80188,1.08423.27343L12.241,7.52448c.29107.06719.584.135.8692.2069l.43255-1.755,1.0849.27344-.44433,1.80249C15.553,8.52948,16.55475,9.24481,16.358,10.57538Z"
  }));
};
var uil_bitcoin_default = UilBitcoin;
