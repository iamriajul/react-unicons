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

// src/icons/uil-filter-slash.tsx
var uil_filter_slash_exports = {};
__export(uil_filter_slash_exports, {
  default: () => uil_filter_slash_default
});
module.exports = __toCommonJS(uil_filter_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilFilterSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M19.22,6H12.66a1,1,0,0,0,0,2h6.56a.78.78,0,0,1,.78.78v.78H16.22a1,1,0,1,0,0,2h2.37l-.7.69a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l1.88-1.88a2.51,2.51,0,0,0,.54-.8h0l0-.1A2.59,2.59,0,0,0,22,9.82v-1A2.79,2.79,0,0,0,19.22,6ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.14,6.55A2.73,2.73,0,0,0,4,8.78v1a2.65,2.65,0,0,0,.24,1.1l0,.06a2.61,2.61,0,0,0,.54.81l5.41,5.4V21a1,1,0,0,0,.47.85,1,1,0,0,0,.53.15,1,1,0,0,0,.45-.11l3.56-1.78a1,1,0,0,0,.55-.89v-2h0l4.51,4.52a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM6,8.78a.76.76,0,0,1,.5-.72L6.59,8,8.15,9.56H6Zm8.07,7.29a1,1,0,0,0-.29.71V18.6l-1.56.78v-2.6a1,1,0,0,0-.29-.71L7.41,11.56h2.74l4.22,4.22Z"
  }));
};
var uil_filter_slash_default = UilFilterSlash;
