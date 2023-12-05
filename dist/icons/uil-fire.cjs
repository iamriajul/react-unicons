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

// src/icons/uil-fire.tsx
var uil_fire_exports = {};
__export(uil_fire_exports, {
  default: () => uil_fire_default
});
module.exports = __toCommonJS(uil_fire_exports);
var import_react = __toESM(require("react"), 1);
var UilFire = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "m8.468 8.395-.002.001-.003.002Zm9.954-.187a1.237 1.237 0 0 0-.23-.175 1 1 0 0 0-1.4.411 5.782 5.782 0 0 1-1.398 1.778 8.664 8.664 0 0 0 .134-1.51 8.714 8.714 0 0 0-4.4-7.582 1 1 0 0 0-1.492.806 7.017 7.017 0 0 1-2.471 4.942l-.23.187a8.513 8.513 0 0 0-1.988 1.863 8.983 8.983 0 0 0 3.656 13.908 1 1 0 0 0 1.377-.926 1.05 1.05 0 0 0-.05-.312 6.977 6.977 0 0 1-.19-2.581 9.004 9.004 0 0 0 4.313 4.016.997.997 0 0 0 .715.038 8.995 8.995 0 0 0 3.654-14.863Zm-3.905 12.831a6.964 6.964 0 0 1-3.577-4.402 8.908 8.908 0 0 1-.18-.964 1 1 0 0 0-.799-.845.982.982 0 0 0-.191-.018 1 1 0 0 0-.867.5 8.959 8.959 0 0 0-1.205 4.718 6.985 6.985 0 0 1-1.176-9.868 6.555 6.555 0 0 1 1.562-1.458.745.745 0 0 0 .075-.055s.296-.245.306-.25a8.968 8.968 0 0 0 2.9-4.633 6.736 6.736 0 0 1 1.385 8.088 1 1 0 0 0 1.184 1.418 7.856 7.856 0 0 0 3.862-2.688 7 7 0 0 1-3.279 10.457Z"
  }));
};
var uil_fire_default = UilFire;
