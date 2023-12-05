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

// src/icons/uil-comment-image.tsx
var uil_comment_image_exports = {};
__export(uil_comment_image_exports, {
  default: () => uil_comment_image_default
});
module.exports = __toCommonJS(uil_comment_image_exports);
var import_react = __toESM(require("react"), 1);
var UilCommentImage = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12,2A10,10,0,0,0,2.44,14.91a.29.29,0,0,0,0,.1,9.83,9.83,0,0,0,1.79,3.32l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9a10,10,0,0,0,9.46-6.78l0-.08A9.89,9.89,0,0,0,22,12,10,10,0,0,0,12,2Zm0,18H5.41l.3-.29,8.41-8.42a1,1,0,0,1,1.4,0l3.62,3.6.23.22A8,8,0,0,1,12,20ZM4.54,14.87l1.58-1.58a1,1,0,0,1,1.41,0l.87.87L5.68,16.9A7.67,7.67,0,0,1,4.54,14.87Zm15.41-2-3-3a3,3,0,0,0-4.24,0L9.82,12.76l-.88-.87a3,3,0,0,0-4.23,0L4,12.56A5.25,5.25,0,0,1,4,12a8,8,0,0,1,16,0A8.27,8.27,0,0,1,20,12.86Z"
  }));
};
var uil_comment_image_default = UilCommentImage;
