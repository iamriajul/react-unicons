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

// src/icons/uil-thunderstorm-sun.tsx
var uil_thunderstorm_sun_exports = {};
__export(uil_thunderstorm_sun_exports, {
  default: () => uil_thunderstorm_sun_default
});
module.exports = __toCommonJS(uil_thunderstorm_sun_exports);
var import_react = __toESM(require("react"), 1);
var UilThunderstormSun = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M11.58,16.5H10.32l.86-1.5a1,1,0,1,0-1.73-1L7.72,17a1,1,0,0,0,.86,1.5H9.85L9,20a1,1,0,0,0,1.74,1l1.73-3a1,1,0,0,0,0-1A1,1,0,0,0,11.58,16.5ZM21,7.5h-.8a4.25,4.25,0,0,0-.52-1.27l.56-.56a1,1,0,0,0-1.41-1.41l-.56.56A4.25,4.25,0,0,0,17,4.3V3.5a1,1,0,0,0-2,0v.8a4.25,4.25,0,0,0-1.27.52l-.56-.56a1,1,0,0,0-1.41,1.41l.56.57c-.09.15-.16.32-.24.48A5.85,5.85,0,0,0,10.5,6.5a6,6,0,0,0-5.94,5.13,3.49,3.49,0,0,0-.34,6.62,1,1,0,1,0,.72-1.86A1.5,1.5,0,0,1,5.5,13.5a1,1,0,0,0,1-1,4,4,0,0,1,7.78-1.29,1,1,0,0,0,.78.67,2.33,2.33,0,0,1,.25,4.53,1,1,0,0,0,.27,2,.84.84,0,0,0,.27,0,4.3,4.3,0,0,0,2.85-5.72l.13.13a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.56-.56A4.25,4.25,0,0,0,20.2,9.5H21a1,1,0,0,0,0-2Zm-3.34,2.65h0a2.28,2.28,0,0,1-.6.41A4.17,4.17,0,0,0,16,10a6.12,6.12,0,0,0-2.09-2.49,2.42,2.42,0,0,1,.46-.7h0a2.43,2.43,0,0,1,3.3,0h0a2.37,2.37,0,0,1,0,3.3Z"
  }));
};
var uil_thunderstorm_sun_default = UilThunderstormSun;
