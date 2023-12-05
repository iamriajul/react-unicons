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

// src/icons/uil-keyboard-alt.tsx
var uil_keyboard_alt_exports = {};
__export(uil_keyboard_alt_exports, {
  default: () => uil_keyboard_alt_default
});
module.exports = __toCommonJS(uil_keyboard_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilKeyboardAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M6.71,9.29a1,1,0,0,0-1.42,0,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21A.84.84,0,0,0,6,11a1,1,0,0,0,.92-1.38A1,1,0,0,0,6.71,9.29ZM10,11a1,1,0,0,0,.92-1.38,1,1,0,0,0-.21-.33A1,1,0,0,0,9.81,9a.6.6,0,0,0-.19.06l-.18.09-.15.12A1.05,1.05,0,0,0,9,10a1,1,0,0,0,1,1ZM6.38,13.08a1,1,0,0,0-.76,0A1,1,0,0,0,5,14a1,1,0,0,0,1.38.92,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,7,14a1,1,0,0,0-.29-.71A.93.93,0,0,0,6.38,13.08ZM14,13H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm.71-3.71a1,1,0,0,0-1.42,0,1,1,0,0,0-.21.33A1,1,0,1,0,15,10a.84.84,0,0,0-.08-.38A1,1,0,0,0,14.71,9.29Zm3.85,3.88a.76.76,0,0,0-.18-.09,1,1,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21A1.05,1.05,0,0,0,17,14a1,1,0,1,0,2,0,1.05,1.05,0,0,0-.29-.71ZM20,5H4A3,3,0,0,0,1,8v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H20a1,1,0,0,1,1,1ZM18.71,9.29A1,1,0,0,0,17,10a1,1,0,1,0,1.92-.38A1,1,0,0,0,18.71,9.29Z"
  }));
};
var uil_keyboard_alt_default = UilKeyboardAlt;
