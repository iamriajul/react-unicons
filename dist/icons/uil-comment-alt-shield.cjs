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

// src/icons/uil-comment-alt-shield.tsx
var uil_comment_alt_shield_exports = {};
__export(uil_comment_alt_shield_exports, {
  default: () => uil_comment_alt_shield_default
});
module.exports = __toCommonJS(uil_comment_alt_shield_exports);
var import_react = __toESM(require("react"), 1);
var UilCommentAltShield = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M6.57,12a1,1,0,0,0,.58-.19l1.62-1.16A4.56,4.56,0,0,0,10.68,7V3.63a1,1,0,0,0-.37-.77,1,1,0,0,0-.84-.2,3,3,0,0,1-2.33-.48A1,1,0,0,0,6,2.18a3,3,0,0,1-2.33.48,1,1,0,0,0-1.2,1V7a4.55,4.55,0,0,0,1.9,3.7L6,11.81A.94.94,0,0,0,6.57,12ZM4.46,7V4.72a5.16,5.16,0,0,0,2.11-.55,5.12,5.12,0,0,0,2.11.55V7A2.57,2.57,0,0,1,7.61,9l-1,.74L5.53,9A2.57,2.57,0,0,1,4.46,7ZM18.54,6h-5a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1v9.72L18,17.27a.94.94,0,0,0-.68-.27H8.54a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v1a3,3,0,0,0,3,3H16.9l3,2.73a1,1,0,0,0,.67.27,1.15,1.15,0,0,0,.41-.08,1,1,0,0,0,.59-.92V9A3,3,0,0,0,18.54,6Z"
  }));
};
var uil_comment_alt_shield_default = UilCommentAltShield;
