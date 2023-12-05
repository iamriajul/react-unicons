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

// src/icons/uil-cloud-sun-hail.tsx
var uil_cloud_sun_hail_exports = {};
__export(uil_cloud_sun_hail_exports, {
  default: () => uil_cloud_sun_hail_default
});
module.exports = __toCommonJS(uil_cloud_sun_hail_exports);
var import_react = __toESM(require("react"), 1);
var UilCloudSunHail = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M9.21,20.29a1,1,0,0,0-1.09-.21.93.93,0,0,0-.33.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76.9.9,0,0,0,.54.54.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,9.5,21a.84.84,0,0,0-.08-.38A1.15,1.15,0,0,0,9.21,20.29Zm4-2a.93.93,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,1.3,1.3,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1.15,1.15,0,0,0,13.21,18.29Zm-4-2a1,1,0,0,0-1.09-.21,1,1,0,0,0-.33.21,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,9.5,17a.84.84,0,0,0-.08-.38A1.15,1.15,0,0,0,9.21,16.29Zm2.91-2.21a1,1,0,0,0-.33.21,1.05,1.05,0,0,0-.29.71,1,1,0,0,0,.29.71,1.15,1.15,0,0,0,.33.21.84.84,0,0,0,.38.08,1,1,0,0,0,1-1,1.05,1.05,0,0,0-.29-.71A1,1,0,0,0,12.12,14.08ZM21,7h-.8a4.25,4.25,0,0,0-.52-1.27l.56-.56a1,1,0,0,0-1.41-1.41l-.56.56A4.25,4.25,0,0,0,17,3.8V3a1,1,0,0,0-2,0v.8a4.1,4.1,0,0,0-1.26.52l-.57-.56a1,1,0,0,0-1.41,1.41l.56.57c-.09.15-.16.32-.24.48A5.85,5.85,0,0,0,10.5,6a6,6,0,0,0-5.94,5.13,3.5,3.5,0,0,0-.46,6.58,1.14,1.14,0,0,0,.4.08,1,1,0,0,0,.4-1.92A1.48,1.48,0,0,1,4,14.5,1.5,1.5,0,0,1,5.5,13a1,1,0,0,0,1-1,4,4,0,0,1,7.78-1.29,1,1,0,0,0,.78.67A2.32,2.32,0,0,1,16,15.61a1,1,0,0,0,1.1,1.68A4.34,4.34,0,0,0,19,13.67a4.19,4.19,0,0,0-.3-1.55l.13.12a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.56-.56A4.25,4.25,0,0,0,20.2,9H21a1,1,0,0,0,0-2ZM17.66,9.65h0a2.09,2.09,0,0,1-.6.42A4.17,4.17,0,0,0,16,9.54a6.12,6.12,0,0,0-2.09-2.49,2.42,2.42,0,0,1,.46-.7h0a2.43,2.43,0,0,1,3.3,0h0a2.37,2.37,0,0,1,0,3.3Z"
  }));
};
var uil_cloud_sun_hail_default = UilCloudSunHail;
