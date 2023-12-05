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

// src/icons/uil-comment-slash.tsx
var uil_comment_slash_exports = {};
__export(uil_comment_slash_exports, {
  default: () => uil_comment_slash_default
});
module.exports = __toCommonJS(uil_comment_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilCommentSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M10.19,5.23A7.12,7.12,0,0,1,12,5a7,7,0,0,1,7,7,7.12,7.12,0,0,1-.23,1.81,1,1,0,0,0,.7,1.23,1.15,1.15,0,0,0,.26,0,1,1,0,0,0,1-.74A8.91,8.91,0,0,0,21,12a9,9,0,0,0-9-9,8.91,8.91,0,0,0-2.33.3A1,1,0,0,0,9,4.53,1,1,0,0,0,10.19,5.23ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71L5,6.38A9,9,0,0,0,5,17.62L3.29,19.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,4,21h8a9,9,0,0,0,5.62-2l2.67,2.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM12,19H6.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,6.4,7.81l9.79,9.79A7,7,0,0,1,12,19Z"
  }));
};
var uil_comment_slash_default = UilCommentSlash;
