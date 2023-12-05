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

// src/icons/uil-image-broken.tsx
var uil_image_broken_exports = {};
__export(uil_image_broken_exports, {
  default: () => uil_image_broken_default
});
module.exports = __toCommonJS(uil_image_broken_exports);
var import_react = __toESM(require("react"), 1);
var UilImageBroken = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.71,14.54,19.21,12a1,1,0,0,0-1.42,0L15,14.84,12.21,12a1,1,0,0,0-1.42,0L8.5,14.34,6.21,12a1,1,0,0,0-1.42,0l-2.5,2.5a1,1,0,0,0-.21.33,1,1,0,0,0-.08.38V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15.25a1,1,0,0,0-.08-.38A1,1,0,0,0,21.71,14.54ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15.66l1.5-1.5,2.29,2.3a1,1,0,0,0,1.42,0l2.29-2.3L14.29,17a1,1,0,0,0,1.42,0l2.79-2.8,1.5,1.5ZM19,2H5A3,3,0,0,0,2,5v5.26a1.17,1.17,0,0,0,0,.27s0,.07,0,.1a1,1,0,0,0,1.66.31L5.5,9.16l2.29,2.3a1,1,0,0,0,1.42,0l2.29-2.3L14.29,12a1,1,0,0,0,1.42,0l2.79-2.8,1.77,1.78a1,1,0,0,0,1.66-.31.28.28,0,0,0,0-.09.88.88,0,0,0,.06-.28V5A3,3,0,0,0,19,2Zm1,5.84L19.21,7a1,1,0,0,0-1.42,0L15,9.84,12.21,7a1,1,0,0,0-1.42,0L8.5,9.34,6.21,7A1,1,0,0,0,4.79,7L4,7.84V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
  }));
};
var uil_image_broken_default = UilImageBroken;
