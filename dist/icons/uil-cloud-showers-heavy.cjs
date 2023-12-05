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

// src/icons/uil-cloud-showers-heavy.tsx
var uil_cloud_showers_heavy_exports = {};
__export(uil_cloud_showers_heavy_exports, {
  default: () => uil_cloud_showers_heavy_default
});
module.exports = __toCommonJS(uil_cloud_showers_heavy_exports);
var import_react = __toESM(require("react"), 1);
var UilCloudShowersHeavy = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12.89,18.06a1,1,0,0,0-1.28.6l-.73,2a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66l.73-2A1,1,0,0,0,12.89,18.06Zm-4,0a1,1,0,0,0-1.28.6l-.73,2a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66l.73-2A1,1,0,0,0,8.89,18.06Zm0-7a1,1,0,0,0-1.28.6l-1.1,3A1,1,0,0,0,7.45,16a1,1,0,0,0,.94-.66l1.1-3A1,1,0,0,0,8.89,11.06Zm4,0a1,1,0,0,0-1.28.6l-1.1,3A1,1,0,0,0,11.45,16a1,1,0,0,0,.94-.66l1.1-3A1,1,0,0,0,12.89,11.06Zm5.53-4.84A7,7,0,0,0,5.06,8.11,4,4,0,0,0,2,12a4,4,0,0,0,1.34,3,1,1,0,1,0,1.32-1.5A2,2,0,0,1,4,12a2,2,0,0,1,2-2A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a2.91,2.91,0,0,1-.74,2,1,1,0,0,0,1.48,1.34,5,5,0,0,0-2.32-8.08ZM16.89,18.06a1,1,0,0,0-1.28.6l-.73,2a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66l.73-2A1,1,0,0,0,16.89,18.06Zm0-7a1,1,0,0,0-1.28.6l-1.1,3A1,1,0,0,0,15.45,16a1,1,0,0,0,.94-.66l1.1-3A1,1,0,0,0,16.89,11.06Z"
  }));
};
var uil_cloud_showers_heavy_default = UilCloudShowersHeavy;
