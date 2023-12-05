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

// src/icons/uil-assistive-listening-systems.tsx
var uil_assistive_listening_systems_exports = {};
__export(uil_assistive_listening_systems_exports, {
  default: () => uil_assistive_listening_systems_default
});
module.exports = __toCommonJS(uil_assistive_listening_systems_exports);
var import_react = __toESM(require("react"), 1);
var UilAssistiveListeningSystems = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M11,3a7,7,0,0,0-7,7,1,1,0,0,0,2,0,5,5,0,0,1,10,0,5.07,5.07,0,0,1-.71,2.57L11.73,20A2,2,0,0,1,10,21a2,2,0,0,1-2-2,1,1,0,0,0-2,0,4,4,0,0,0,4,4,4,4,0,0,0,3.5-2.07l3.56-7.43A6.93,6.93,0,0,0,18,10,7,7,0,0,0,11,3ZM4,15a1,1,0,1,0,1,1A1,1,0,0,0,4,15ZM17.59,1.2a1,1,0,1,0-1.2,1.6A9,9,0,0,1,20,10a1,1,0,0,0,2,0A11.06,11.06,0,0,0,17.59,1.2ZM11,9a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-6,0,3,3,0,0,0,.51,1.68,3.5,3.5,0,0,0,.47.54l.2.22a1,1,0,0,1,0,1.11,1,1,0,0,0,.25,1.39,1,1,0,0,0,.57.18,1,1,0,0,0,.82-.43,3,3,0,0,0,0-3.39,3.39,3.39,0,0,0-.35-.42l-.14-.14a1.37,1.37,0,0,1-.16-.18A1,1,0,0,1,10,10,1,1,0,0,1,11,9ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Z"
  }));
};
var uil_assistive_listening_systems_default = UilAssistiveListeningSystems;
