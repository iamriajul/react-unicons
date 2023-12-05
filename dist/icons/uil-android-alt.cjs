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

// src/icons/uil-android-alt.tsx
var uil_android_alt_exports = {};
__export(uil_android_alt_exports, {
  default: () => uil_android_alt_default
});
module.exports = __toCommonJS(uil_android_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilAndroidAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M2.9917,9.00044a.99973.99973,0,0,0-1,1v4a1,1,0,0,0,2,0v-4A.99973.99973,0,0,0,2.9917,9.00044Zm18,0a.99973.99973,0,0,0-1,1v4a1,1,0,0,0,2,0v-4A.99973.99973,0,0,0,20.9917,9.00044Zm-4.13428-5.5a.99974.99974,0,1,0-1.73144-1l-.61414,1.06238a5.92782,5.92782,0,0,0-5.04028,0L8.85742,2.50044a.99974.99974,0,1,0-1.73144,1l.6925,1.19794A5.97889,5.97889,0,0,0,5.9917,9.00044v8a.99974.99974,0,0,0,1,1h2v3a1,1,0,0,0,2,0v-3h2v3a1,1,0,0,0,2,0v-3h2a.99974.99974,0,0,0,1-1v-8a5.97889,5.97889,0,0,0-1.82678-4.30206Zm-.86572,12.5h-8v-5h8Zm-8-7a4,4,0,0,1,8,0Z"
  }));
};
var uil_android_alt_default = UilAndroidAlt;
