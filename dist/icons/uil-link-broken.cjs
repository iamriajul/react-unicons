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

// src/icons/uil-link-broken.tsx
var uil_link_broken_exports = {};
__export(uil_link_broken_exports, {
  default: () => uil_link_broken_default
});
module.exports = __toCommonJS(uil_link_broken_exports);
var import_react = __toESM(require("react"), 1);
var UilLinkBroken = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M4.76,10.59a1,1,0,0,0,.26-2L3.26,8.15a1,1,0,1,0-.52,1.93l1.76.47A.78.78,0,0,0,4.76,10.59ZM8.62,5a1,1,0,0,0,1,.74.82.82,0,0,0,.26,0,1,1,0,0,0,.7-1.22l-.47-1.76a1,1,0,1,0-1.93.52Zm4.83,10A1,1,0,0,0,12,15L8.5,18.56a2.21,2.21,0,0,1-3.06,0,2.15,2.15,0,0,1,0-3.06L9,12a1,1,0,1,0-1.41-1.41L4,14.08A4.17,4.17,0,1,0,9.92,20l3.53-3.53A1,1,0,0,0,13.45,15ZM5.18,6.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41L5.3,3.89A1,1,0,0,0,3.89,5.3Zm16.08,7.33-1.76-.47A1,1,0,1,0,19,15.38l1.76.47.26,0a1,1,0,0,0,.26-2ZM15.38,19a1,1,0,0,0-1.23-.7,1,1,0,0,0-.7,1.22l.47,1.76a1,1,0,0,0,1,.74,1.15,1.15,0,0,0,.26,0,1,1,0,0,0,.71-1.23Zm3.44-1.57a1,1,0,0,0-1.41,1.41l1.29,1.29a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM21.2,7A4.16,4.16,0,0,0,14.08,4L10.55,7.56A1,1,0,1,0,12,9L15.5,5.44a2.21,2.21,0,0,1,3.06,0,2.15,2.15,0,0,1,0,3.06L15,12a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L20,9.92A4.19,4.19,0,0,0,21.2,7Z"
  }));
};
var uil_link_broken_default = UilLinkBroken;
