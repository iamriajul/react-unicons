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

// src/icons/uil-flip-v-alt.tsx
var uil_flip_v_alt_exports = {};
__export(uil_flip_v_alt_exports, {
  default: () => uil_flip_v_alt_default
});
module.exports = __toCommonJS(uil_flip_v_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilFlipVAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M4.94,12.24A1,1,0,0,0,3.73,13l-.49,1.94A1,1,0,0,0,4,16.12a1,1,0,0,0,1.21-.73l.49-1.94A1,1,0,0,0,4.94,12.24Zm17,7.52-4-16A1,1,0,0,0,17,3H14a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1h7a1,1,0,0,0,.79-.38A1,1,0,0,0,22,19.76ZM15,19V5h1.22l3.5,14ZM6.4,6.42a1,1,0,0,0-1.22.73L4.7,9.09a1,1,0,0,0,.73,1.21l.24,0a1,1,0,0,0,1-.76l.48-1.94A1,1,0,0,0,6.4,6.42ZM7.51,5h2a1,1,0,0,0,0-2h-2a1,1,0,0,0,0,2ZM4.24,19a1,1,0,0,0-2-.24l-.24,1a1,1,0,0,0,.18.86A1,1,0,0,0,3,21H4a1,1,0,0,0,.24-2ZM10,6.51a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0v-2A1,1,0,0,0,10,6.51Zm0,6a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0v-2A1,1,0,0,0,10,12.51Zm0,6a1,1,0,0,0-.86.49H8a1,1,0,0,0,0,2h2a1,1,0,0,0,1-1v-.49A1,1,0,0,0,10,18.51Z"
  }));
};
var uil_flip_v_alt_default = UilFlipVAlt;
