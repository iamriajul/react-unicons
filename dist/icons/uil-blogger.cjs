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

// src/icons/uil-blogger.tsx
var uil_blogger_exports = {};
__export(uil_blogger_exports, {
  default: () => uil_blogger_default
});
module.exports = __toCommonJS(uil_blogger_exports);
var import_react = __toESM(require("react"), 1);
var UilBlogger = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M9.71008,10.46008h2.23883a.77084.77084,0,1,0,0-1.54168H9.71008a.77084.77084,0,1,0,0,1.54168Zm9.71826-8.45837H4.555A2.57277,2.57277,0,0,0,1.9917,4.56506V19.43829A2.57278,2.57278,0,0,0,4.555,22.00171H19.42822a2.57268,2.57268,0,0,0,2.56348-2.56329V4.56506A2.57267,2.57267,0,0,0,19.42834,2.00171ZM18.35577,11.6795l-.01965,2.67542a4.0515,4.0515,0,0,1-4.03857,4.02179h-4.639a4.04922,4.04922,0,0,1-4.04181-4.0249V9.65747A4.05258,4.05258,0,0,1,9.65851,5.62671h2.82373a4.45954,4.45954,0,0,1,3.1203,2.19971,3.15646,3.15646,0,0,1,.36182,1.36767c.06738.50556.10284.88123.33007,1.08942.31934.28949,1.50727.09448,1.74219.27844l.17883.13983.10889.22168.036.17755Zm-4.097,1.8639H9.71008a.75035.75035,0,1,0,0,1.5h4.54871a.75024.75024,0,1,0,0-1.5Z"
  }));
};
var uil_blogger_default = UilBlogger;
