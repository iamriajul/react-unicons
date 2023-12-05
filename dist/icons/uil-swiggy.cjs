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

// src/icons/uil-swiggy.tsx
var uil_swiggy_exports = {};
__export(uil_swiggy_exports, {
  default: () => uil_swiggy_default
});
module.exports = __toCommonJS(uil_swiggy_exports);
var import_react = __toESM(require("react"), 1);
var UilSwiggy = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12.878,5.92841a.297.297,0,0,1,.31378.335c.002.09192.00348.18384.0036.27575.00061.59241-.00238,1.18488.00208,1.77723.00329.43353.07947.517.49939.56909a14.83182,14.83182,0,0,0,3.14795-.04578,4.94837,4.94837,0,0,0,1.57287-.37384.50722.50722,0,0,0,.34461-.60242,6.83113,6.83113,0,0,0-5.3432-5.71106,6.60826,6.60826,0,0,0-3.64844.243A6.718,6.718,0,0,0,7.07709,4.147,6.27211,6.27211,0,0,0,5.23022,8.43164,11.18781,11.18781,0,0,0,6.7558,13.9494a1.34216,1.34216,0,0,0,1.32989.74726c.65332-.01569,1.30732-.00354,1.96106-.00354v-.00348q1.04187,0,2.08368.00048c.24927.00055.44654.06012.44458.37226-.00458.72522.00067,1.45044-.00335,2.1756-.00129.22015-.06324.432-.32612.43408-.26391.00207-.32641-.20893-.32971-.42951-.00512-.34716.00019-.69452.00061-1.04174.00049-.45105-.07342-.55677-.52319-.639a7.70231,7.70231,0,0,0-2.348-.0199,2.5959,2.5959,0,0,0-.80054.19476c-.21185.09973-.29608.24506-.19318.46729.10706.23126.20691.46728.3332.68786a43.875,43.875,0,0,0,3.42651,4.95569c.15393.19947.27313.20362.43109.0105.34869-.42639.71491-.83856,1.05994-1.26788a34.22649,34.22649,0,0,0,3.57635-5.25989,14.17129,14.17129,0,0,0,1.49451-3.87146A1.20324,1.20324,0,0,0,17.36145,9.824,6.94268,6.94268,0,0,0,15.691,9.66235c-.909-.00677-1.81812-.00348-2.72717-.00268-.24481.00024-.42688-.07007-.42707-.3573-.00048-1.01117-.00183-2.0224.00184-3.03351C12.53943,6.053,12.64349,5.92041,12.878,5.92841Z"
  }));
};
var uil_swiggy_default = UilSwiggy;
