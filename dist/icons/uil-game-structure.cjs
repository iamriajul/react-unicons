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

// src/icons/uil-game-structure.tsx
var uil_game_structure_exports = {};
__export(uil_game_structure_exports, {
  default: () => uil_game_structure_default
});
module.exports = __toCommonJS(uil_game_structure_exports);
var import_react = __toESM(require("react"), 1);
var UilGameStructure = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21,18H19V15a1,1,0,0,0-1-1H13V11.29l1.13.59a1,1,0,0,0,1.45-1.05l-.4-2.37L16.9,6.77a1,1,0,0,0,.26-1,1,1,0,0,0-.81-.68L14,4.72,12.9,2.56a1,1,0,0,0-1.8,0L10,4.72l-2.39.35a1,1,0,0,0-.81.68,1,1,0,0,0,.26,1L8.82,8.46l-.4,2.37a1,1,0,0,0,1.45,1.05L11,11.29V14H6a1,1,0,0,0-1,1v3H3a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V20H8v1a1,1,0,0,0,2,0V19a1,1,0,0,0-1-1H7V16H17v2H15a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V20h4v1a1,1,0,0,0,2,0V19A1,1,0,0,0,21,18ZM12,8.63a1,1,0,0,0-.47.12l-.8.42.15-.9a1,1,0,0,0-.29-.88l-.65-.64.9-.13a1,1,0,0,0,.76-.54l.4-.82.4.82a1,1,0,0,0,.76.54l.9.13-.65.64a1,1,0,0,0-.29.88l.15.9-.8-.42A1,1,0,0,0,12,8.63Z"
  }));
};
var uil_game_structure_default = UilGameStructure;
