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

// src/icons/uil-flip-h-alt.tsx
var uil_flip_h_alt_exports = {};
__export(uil_flip_h_alt_exports, {
  default: () => uil_flip_h_alt_default
});
module.exports = __toCommonJS(uil_flip_h_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilFlipHAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M13.21,5.7a1,1,0,0,0,.24,0l1.94-.49A1,1,0,0,0,16.12,4a1,1,0,0,0-1.21-.73L13,3.73a1,1,0,0,0,.24,2ZM9.51,9h-2a1,1,0,1,0,0,2h2a1,1,0,0,0,0-2Zm4,0a1,1,0,1,0,0,2h2a1,1,0,0,0,0-2ZM7.39,7.15l.24,0,1.94-.48A1,1,0,0,0,9.09,4.7l-1.94.48a1,1,0,0,0,.24,2ZM4,10.51a1,1,0,0,0,1-1v-2a1,1,0,0,0-2,0v2A1,1,0,0,0,4,10.51Zm16.62-8.3A1,1,0,0,0,19.76,2l-1,.24a1,1,0,0,0-.73,1.21,1,1,0,0,0,1,.76A1,1,0,0,0,21,4V3A1,1,0,0,0,20.62,2.21ZM20,7a1,1,0,0,0-1,1V9.14A1,1,0,0,0,19.51,11H20a1,1,0,0,0,1-1V8A1,1,0,0,0,20,7Zm0,6H4a1,1,0,0,0-1,1v3a1,1,0,0,0,.76,1l16,4A1,1,0,0,0,20,22a1,1,0,0,0,1-1V14A1,1,0,0,0,20,13Zm-1,6.72L5,16.22V15H19Z"
  }));
};
var uil_flip_h_alt_default = UilFlipHAlt;
