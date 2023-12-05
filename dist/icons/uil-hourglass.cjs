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

// src/icons/uil-hourglass.tsx
var uil_hourglass_exports = {};
__export(uil_hourglass_exports, {
  default: () => uil_hourglass_default
});
module.exports = __toCommonJS(uil_hourglass_exports);
var import_react = __toESM(require("react"), 1);
var UilHourglass = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M18.9917,21.002h-1V19.335a5.00057,5.00057,0,0,0-.29956-1.67773c-.01093-.02936-.0224-.05658-.03589-.08454a4.97694,4.97694,0,0,0-.66455-1.23675l-1.3999-1.86719a3.01933,3.01933,0,0,1-.6001-1.80078V11.6582a3.02108,3.02108,0,0,1,.87842-2.12109l.65722-.65723A4.94566,4.94566,0,0,0,17.92365,6.0415c.00054-.01391.008-.02551.008-.03955l-.00281-.01373a5.01836,5.01836,0,0,0,.06287-.64349V3.002h1a1,1,0,0,0,0-2h-14a1,1,0,0,0,0,2h1V5.34473a5.01836,5.01836,0,0,0,.06287.64349L6.05176,6.002c0,.014.00744.02564.008.03955a4.94571,4.94571,0,0,0,1.3963,2.83838l.65723.65723A3.02108,3.02108,0,0,1,8.9917,11.6582V12.668a3.02212,3.02212,0,0,1-.59961,1.80078L6.99121,16.33594a4.98221,4.98221,0,0,0-.66437,1.23718c-.0133.02771-.02472.05463-.03552.08368A5.00309,5.00309,0,0,0,5.9917,19.335v1.667h-1a1,1,0,0,0,0,2h14a1,1,0,0,0,0-2Zm-11-16v-2h8v2Zm.87842,2.46387A2.97036,2.97036,0,0,1,8.49323,7.002h6.99694a2.97094,2.97094,0,0,1-.37689.46387l-.65723.65723a4.9603,4.9603,0,0,0-1.42187,2.8789h-2.085A4.96025,4.96025,0,0,0,9.52734,8.123ZM9.99219,15.668a5.03688,5.03688,0,0,0,.98828-2.666h2.02246a5.03332,5.03332,0,0,0,.98877,2.666l1.00012,1.334H8.99133Zm5.99951,5.334h-8V19.335a2.954,2.954,0,0,1,.02722-.333h7.94556a2.954,2.954,0,0,1,.02722.333Z"
  }));
};
var uil_hourglass_default = UilHourglass;
