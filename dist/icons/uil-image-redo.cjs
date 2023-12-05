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

// src/icons/uil-image-redo.tsx
var uil_image_redo_exports = {};
__export(uil_image_redo_exports, {
  default: () => uil_image_redo_default
});
module.exports = __toCommonJS(uil_image_redo_exports);
var import_react = __toESM(require("react"), 1);
var UilImageRedo = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.5,1.5a1,1,0,0,0-1,1h0a5,5,0,1,0,.3,7.75,1,1,0,0,0-1.32-1.51,3,3,0,1,1,.25-4.25H18.5a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1v-3A1,1,0,0,0,21.5,1.5Zm-3,12a1,1,0,0,0-1,1v.39L16,13.41a2.77,2.77,0,0,0-3.93,0l-.7.7L8.91,11.62a2.79,2.79,0,0,0-3.93,0L3.5,13.1V7.5a1,1,0,0,1,1-1h5a1,1,0,0,0,0-2h-5a3,3,0,0,0-3,3v12a3,3,0,0,0,3,3h12a3,3,0,0,0,3-3v-5A1,1,0,0,0,18.5,13.5Zm-14,7a1,1,0,0,1-1-1V15.93L6.4,13a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15,20.5Zm13-1a1,1,0,0,1-.18.53l-4.51-4.51.7-.7a.78.78,0,0,1,1.1,0l2.89,2.9Z"
  }));
};
var uil_image_redo_default = UilImageRedo;
