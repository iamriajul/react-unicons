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

// src/icons/uil-phone-slash.tsx
var uil_phone_slash_exports = {};
__export(uil_phone_slash_exports, {
  default: () => uil_phone_slash_default
});
module.exports = __toCommonJS(uil_phone_slash_exports);
var import_react = __toESM(require("react"), 1);
var UilPhoneSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M4.91,13.1a1,1,0,0,0,.85.47A1,1,0,0,0,6.61,12,17,17,0,0,1,4.14,5.15a1,1,0,0,1,.24-.81A1,1,0,0,1,5.13,4h3a1,1,0,0,1,1,.8c0,.23.08.44.13.67l0,.13a10.33,10.33,0,0,0,.47,1.54L8.34,7.8a1,1,0,0,0-.52.57,1,1,0,0,0,0,.77c.1.21.2.42.32.64a1,1,0,0,0,1.37.37,1,1,0,0,0,.5-.94L10.58,9a2,2,0,0,0,1.05-2.48,9.3,9.3,0,0,1-.39-1.3l0-.1c0-.2-.08-.4-.11-.58A3,3,0,0,0,8.16,2h-3A3,3,0,0,0,2.88,3a3,3,0,0,0-.72,2.39A19.05,19.05,0,0,0,4.91,13.1Zm14.61-.21-.6-.11-.08,0a9.31,9.31,0,0,1-1.33-.39,2,2,0,0,0-2.47,1l-.21.46a12.39,12.39,0,0,1-1.92-1.37l8.8-8.79a1,1,0,1,0-1.42-1.42l-18,18a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4.59-4.6a19.09,19.09,0,0,0,10.29,4.73,2.69,2.69,0,0,0,.4,0,3,3,0,0,0,2-.75,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.52,12.89Zm.48,6a1,1,0,0,1-.34.75,1,1,0,0,1-.81.24A17.07,17.07,0,0,1,9.71,15.7l1.77-1.77a14.69,14.69,0,0,0,3.38,2.21,1,1,0,0,0,.77,0,1,1,0,0,0,.57-.52l.62-1.41a12,12,0,0,0,1.6.47l.11,0,.69.13a1,1,0,0,1,.78,1Z"
  }));
};
var uil_phone_slash_default = UilPhoneSlash;
