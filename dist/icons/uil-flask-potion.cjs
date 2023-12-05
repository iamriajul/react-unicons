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

// src/icons/uil-flask-potion.tsx
var uil_flask_potion_exports = {};
__export(uil_flask_potion_exports, {
  default: () => uil_flask_potion_default
});
module.exports = __toCommonJS(uil_flask_potion_exports);
var import_react = __toESM(require("react"), 1);
var UilFlaskPotion = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M18.93,11.67a.42.42,0,0,0,0-.1A7.4,7.4,0,0,0,15,7.62V4h1a1,1,0,0,0,0-2H8A1,1,0,0,0,8,4H9V7.62a7.4,7.4,0,0,0-3.89,4,.42.42,0,0,0,0,.1,7.5,7.5,0,1,0,13.86,0ZM10.31,9.26A1,1,0,0,0,11,8.31V4h2V8.31a1,1,0,0,0,.69.95A5.43,5.43,0,0,1,16.23,11H7.77A5.43,5.43,0,0,1,10.31,9.26ZM12,20a5.51,5.51,0,0,1-5.5-5.5A5.34,5.34,0,0,1,6.72,13H17.28a5.34,5.34,0,0,1,.22,1.5A5.51,5.51,0,0,1,12,20Zm2-4a1,1,0,1,0,1,1A1,1,0,0,0,14,16Zm-4-1a1,1,0,1,0,1,1A1,1,0,0,0,10,15Z"
  }));
};
var uil_flask_potion_default = UilFlaskPotion;
