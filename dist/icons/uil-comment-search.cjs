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

// src/icons/uil-comment-search.tsx
var uil_comment_search_exports = {};
__export(uil_comment_search_exports, {
  default: () => uil_comment_search_default
});
module.exports = __toCommonJS(uil_comment_search_exports);
var import_react = __toESM(require("react"), 1);
var UilCommentSearch = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.21,10.29,19.48,8.57a4.37,4.37,0,0,0,.65-2.26,4.31,4.31,0,1,0-4.32,4.32A4.35,4.35,0,0,0,18.07,10l1.72,1.73a1,1,0,0,0,1.42,0A1,1,0,0,0,21.21,10.29ZM17.45,8A2.32,2.32,0,0,1,13.5,6.31a2.29,2.29,0,0,1,.68-1.63,2.32,2.32,0,0,1,3.27,0,2.31,2.31,0,0,1,0,3.27ZM19.5,14a1,1,0,0,0-1.22.72A7,7,0,0,1,11.5,20H5.91l.64-.63a1,1,0,0,0,0-1.41,7,7,0,0,1-2-5A7,7,0,0,1,8.87,6.52a1,1,0,1,0-.74-1.86,9,9,0,0,0-3.66,14L2.79,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3.5,22h8a9,9,0,0,0,8.72-6.75A1,1,0,0,0,19.5,14Z"
  }));
};
var uil_comment_search_default = UilCommentSearch;
