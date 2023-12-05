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

// src/icons/uil-black-berry.tsx
var uil_black_berry_exports = {};
__export(uil_black_berry_exports, {
  default: () => uil_black_berry_default
});
module.exports = __toCommonJS(uil_black_berry_exports);
var import_react = __toESM(require("react"), 1);
var UilBlackBerry = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM7.19,13.35H5.27l.52-2.41H7.63c1.2,0,1.48.58,1.48,1.05C9.11,12.64,8.68,13.35,7.19,13.35Zm.66-3.64H5.94L6.46,7.3H8.3c1.19,0,1.47.59,1.47,1C9.77,9,9.35,9.71,7.85,9.71Zm3.75,7.43H9.68l.53-2.42h1.84c1.19,0,1.47.59,1.47,1.06C13.52,16.43,13.1,17.14,11.6,17.14Zm.71-3.79H10.4l.52-2.41h1.84c1.19,0,1.47.58,1.47,1.05C14.23,12.64,13.81,13.35,12.31,13.35ZM13,9.71H11.06l.52-2.41h1.84c1.2,0,1.48.59,1.48,1C14.9,9,14.47,9.71,13,9.71Zm3.74,5.61H14.81l.52-2.42h1.84c1.19,0,1.48.59,1.48,1.06C18.65,14.61,18.22,15.32,16.72,15.32Zm.72-3.44H15.52L16,9.46h1.84c1.2,0,1.48.59,1.48,1C19.36,11.17,18.93,11.88,17.44,11.88Z"
  }));
};
var uil_black_berry_default = UilBlackBerry;
