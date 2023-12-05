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

// src/icons/uil-post-stamp.tsx
var uil_post_stamp_exports = {};
__export(uil_post_stamp_exports, {
  default: () => uil_post_stamp_default
});
module.exports = __toCommonJS(uil_post_stamp_exports);
var import_react = __toESM(require("react"), 1);
var UilPostStamp = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M22.5,5.5a1,1,0,0,0,1-1v-3a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1,.5.5,0,0,1-1,0,1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1,.5.5,0,0,1-1,0,1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1,.5.5,0,0,1-1,0,1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1,.5.5,0,0,1,0,1,1,1,0,0,0-1,1v3a1,1,0,0,0,1,1,.5.5,0,0,1,0,1,1,1,0,0,0-1,1v3a1,1,0,0,0,1,1,.5.5,0,0,1,0,1,1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1,.5.5,0,0,1,1,0,1,1,0,0,0,1,1h3a1,1,0,0,0,1-1,.5.5,0,0,1,1,0,1,1,0,0,0,1,1h3a1,1,0,0,0,1-1,.5.5,0,0,1,1,0,1,1,0,0,0,1,1h3a1,1,0,0,0,1-1v-3a1,1,0,0,0-1-1,.5.5,0,0,1,0-1,1,1,0,0,0,1-1v-3a1,1,0,0,0-1-1,.5.5,0,0,1,0-1,1,1,0,0,0,1-1v-3a1,1,0,0,0-1-1,.5.5,0,0,1,0-1Zm-1-1.79a2.5,2.5,0,0,0,0,4.58V9.71a2.5,2.5,0,0,0,0,4.58v1.42a2.5,2.5,0,0,0,0,4.58V21.5H20.29a2.5,2.5,0,0,0-4.58,0H14.29a2.5,2.5,0,0,0-4.58,0H8.29a2.5,2.5,0,0,0-4.58,0H2.5V20.29a2.5,2.5,0,0,0,0-4.58V14.29a2.5,2.5,0,0,0,0-4.58V8.29a2.5,2.5,0,0,0,0-4.58V2.5H3.71a2.5,2.5,0,0,0,4.58,0H9.71a2.5,2.5,0,0,0,4.58,0h1.42a2.5,2.5,0,0,0,4.58,0H21.5ZM12,5a7,7,0,0,0,0,14,6.93,6.93,0,0,0,3.5-.94,1,1,0,1,0-1-1.73A5,5,0,1,1,17,12v.5a.83.83,0,0,1-.83.83.84.84,0,0,1-.84-.83V9.67a1,1,0,0,0-1.78-.6A3.25,3.25,0,0,0,12,8.67a3.33,3.33,0,0,0,0,6.66,3.28,3.28,0,0,0,2.17-.82,2.84,2.84,0,0,0,4.83-2V12A7,7,0,0,0,12,5Zm0,8.33A1.33,1.33,0,1,1,13.33,12,1.32,1.32,0,0,1,12,13.33Z"
  }));
};
var uil_post_stamp_default = UilPostStamp;
