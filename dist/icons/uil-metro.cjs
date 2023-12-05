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

// src/icons/uil-metro.tsx
var uil_metro_exports = {};
__export(uil_metro_exports, {
  default: () => uil_metro_default
});
module.exports = __toCommonJS(uil_metro_exports);
var import_react = __toESM(require("react"), 1);
var UilMetro = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M8.71,14.29a1.00157,1.00157,0,0,0-1.08984-.21.90087.90087,0,0,0-.54.54,1.00008,1.00008,0,1,0,1.83984,0A1.14718,1.14718,0,0,0,8.71,14.29Zm8,0a1.04669,1.04669,0,0,0-1.41992,0,1.14718,1.14718,0,0,0-.21.33008A.98919.98919,0,0,0,15.29,15.71a1.14718,1.14718,0,0,0,.33008.21.94107.94107,0,0,0,.75976,0,1.16044,1.16044,0,0,0,.33008-.21.98919.98919,0,0,0,.21-1.08984A1.14718,1.14718,0,0,0,16.71,14.29Zm2.59943,4.60528a4.97014,4.97014,0,0,0,1.78436-4.8172l-1.5-8A5.00038,5.00038,0,0,0,14.68066,2H9.31934A5.00038,5.00038,0,0,0,4.40625,6.07812l-1.5,8a4.97014,4.97014,0,0,0,1.78436,4.8172L3.293,20.293A.99989.99989,0,1,0,4.707,21.707l1.86914-1.86914A5.00576,5.00576,0,0,0,7.81934,20h8.36132a5.00576,5.00576,0,0,0,1.24317-.16211L19.293,21.707A.99989.99989,0,0,0,20.707,20.293ZM6.37109,6.44727A3.0021,3.0021,0,0,1,9.31934,4h5.36132a3.0021,3.0021,0,0,1,2.94825,2.44727l.34668,1.84893a7.95514,7.95514,0,0,1-11.95118,0ZM18.48828,16.916A2.9899,2.9899,0,0,1,16.18066,18H7.81934a3.00057,3.00057,0,0,1-2.94825-3.55273l.71106-3.79236a9.95447,9.95447,0,0,0,12.8357,0l.71106,3.79236A2.99028,2.99028,0,0,1,18.48828,16.916Z"
  }));
};
var uil_metro_default = UilMetro;
