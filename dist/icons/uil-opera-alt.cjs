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

// src/icons/uil-opera-alt.tsx
var uil_opera_alt_exports = {};
__export(uil_opera_alt_exports, {
  default: () => uil_opera_alt_default
});
module.exports = __toCommonJS(uil_opera_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilOperaAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M11.9707,5.00044c-3.64355,0-3.64355,5.12207-3.64355,6.85742,0,1.95313,0,7.14258,3.66015,7.14258,3.6543,0,3.6543-5.16211,3.6543-7.10547C15.6416,7.31977,14.40625,5.00044,11.9707,5.00044Zm.0166,12c-1.10156,0-1.66015-1.73047-1.66015-5.19531,0-2.19141.28515-4.80469,1.64355-4.80469,1.4541,0,1.6709,3.0664,1.6709,4.89453C13.6416,15.28267,13.085,17.00044,11.9873,17.00044Zm.001-16C5.93652,1.00044,1.71,5.48188,1.71,11.89888c0,5.457,3.84668,11.10156,10.28516,11.10156,6.43359,0,10.27832-5.64453,10.27832-11.10156C22.27344,5.48188,18.044,1.00044,11.98828,1.00044Zm.00684,20c-5.18653,0-8.28516-4.62793-8.28516-9.10156,0-5.32227,3.32715-8.89844,8.27832-8.89844,4.95606,0,8.28516,3.57617,8.28516,8.89844C20.27344,16.37251,17.17676,21.00044,11.99512,21.00044Z"
  }));
};
var uil_opera_alt_default = UilOperaAlt;
