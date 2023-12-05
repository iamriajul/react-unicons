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

// src/icons/uil-club.tsx
var uil_club_exports = {};
__export(uil_club_exports, {
  default: () => uil_club_default
});
module.exports = __toCommonJS(uil_club_exports);
var import_react = __toESM(require("react"), 1);
var UilClub = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21,12.5a5.52,5.52,0,0,0-3.51-5.12,5.49,5.49,0,0,0-11,0A5.5,5.5,0,0,0,8.5,18l.2,0a6.91,6.91,0,0,1-1.24,2.39A1,1,0,0,0,8.24,22h7.52a1,1,0,0,0,.78-1.63A6.91,6.91,0,0,1,15.3,18l.2,0A5.51,5.51,0,0,0,21,12.5ZM10.06,20a8.89,8.89,0,0,0,.81-2.56,5.47,5.47,0,0,0,1.13-.7,5.47,5.47,0,0,0,1.13.7A8.89,8.89,0,0,0,13.94,20Zm2.72-5.3-.08-.08-.08-.08-.07,0-.18-.09-.18-.06h-.38l-.18.06a.56.56,0,0,0-.17.09l-.08,0-.08.08-.08.08A3.5,3.5,0,1,1,7.75,9.08,1.11,1.11,0,0,0,7.91,9a1.42,1.42,0,0,0,.18-.08.83.83,0,0,0,.14-.13.62.62,0,0,0,.21-.31.61.61,0,0,0,.07-.17.69.69,0,0,0,0-.2,1,1,0,0,0,0-.17,3.4,3.4,0,0,1,0-.45,3.5,3.5,0,0,1,7,0,3.4,3.4,0,0,1,0,.45.81.81,0,0,0,0,.16.74.74,0,0,0,0,.21.61.61,0,0,0,.07.17.62.62,0,0,0,.21.31.83.83,0,0,0,.14.13,1.42,1.42,0,0,0,.18.08,1.11,1.11,0,0,0,.16.07,3.5,3.5,0,1,1-3.47,5.62Z"
  }));
};
var uil_club_default = UilClub;
