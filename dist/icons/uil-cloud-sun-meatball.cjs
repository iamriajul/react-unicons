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

// src/icons/uil-cloud-sun-meatball.tsx
var uil_cloud_sun_meatball_exports = {};
__export(uil_cloud_sun_meatball_exports, {
  default: () => uil_cloud_sun_meatball_default
});
module.exports = __toCommonJS(uil_cloud_sun_meatball_exports);
var import_react = __toESM(require("react"), 1);
var UilCloudSunMeatball = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12.5,16.92h-.77l.39-.67a1,1,0,0,0-1.74-1l-.38.67-.38-.67a1,1,0,0,0-1.74,1l.39.67H7.5a1,1,0,0,0,0,2h.77l-.39.66a1,1,0,0,0,1.74,1l.38-.66.38.66a1,1,0,1,0,1.74-1l-.39-.66h.77a1,1,0,0,0,0-2Zm8.5-9h-.8a4.25,4.25,0,0,0-.52-1.27l.56-.56a1,1,0,0,0-1.41-1.41l-.56.56A4.25,4.25,0,0,0,17,4.72v-.8a1,1,0,0,0-2,0v.8a4.1,4.1,0,0,0-1.26.52l-.57-.56a1,1,0,0,0-1.41,1.41l.56.56c-.09.16-.16.33-.24.49a5.85,5.85,0,0,0-1.58-.22A6,6,0,0,0,4.56,12,3.52,3.52,0,0,0,2,15.42a3.47,3.47,0,0,0,1.41,2.79A1,1,0,1,0,4.59,16.6,1.46,1.46,0,0,1,4,15.42a1.5,1.5,0,0,1,1.5-1.5,1,1,0,0,0,1-1,4,4,0,0,1,7.78-1.29,1,1,0,0,0,.78.66,2.33,2.33,0,0,1,.54,4.44,1,1,0,0,0-.52,1.32,1,1,0,0,0,.92.6.93.93,0,0,0,.4-.09,4.33,4.33,0,0,0,2.6-4A4.29,4.29,0,0,0,18.7,13l.13.13a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42l-.56-.56a4.2,4.2,0,0,0,.52-1.26H21a1,1,0,0,0,0-2Zm-3.34,2.64h0a1.89,1.89,0,0,1-.6.41A4.15,4.15,0,0,0,16,10.46,6,6,0,0,0,13.88,8a2.18,2.18,0,0,1,.46-.7h0a2.42,2.42,0,0,1,3.3,0h0a2.34,2.34,0,0,1,0,3.29Z"
  }));
};
var uil_cloud_sun_meatball_default = UilCloudSunMeatball;
