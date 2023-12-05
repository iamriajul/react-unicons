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

// src/icons/uil-shutter-alt.tsx
var uil_shutter_alt_exports = {};
__export(uil_shutter_alt_exports, {
  default: () => uil_shutter_alt_default
});
module.exports = __toCommonJS(uil_shutter_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilShutterAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M22,11a1,1,0,0,1,0-.16c0-.28-.08-.56-.13-.84v0A9.54,9.54,0,0,0,21,7.62v0A10,10,0,0,0,14,2.21h0l-.84-.13-.16,0-.29,0h-.08L12,2c-.34,0-.68,0-1,0l-.16,0L10,2.2h0A10,10,0,0,0,2.21,10v0c-.05.28-.09.56-.13.84a1,1,0,0,1,0,.16c0,.33,0,.67,0,1s0,.68,0,1a1,1,0,0,1,0,.16c0,.28.08.56.13.84v0A9.54,9.54,0,0,0,3,16.38v0A10,10,0,0,0,10,21.79h0l.84.13L11,22l.34,0h.14c.18,0,.35,0,.53,0,.34,0,.68,0,1-.05l.16,0L14,21.8h0A10,10,0,0,0,21.79,14v0c.05-.28.09-.56.13-.84A1,1,0,0,1,22,13c0-.33.05-.67.05-1S22,11.32,22,11Zm-8.84-6.9.5.07h0A8,8,0,0,1,18.24,7H11.42Zm-2.74.08h0l.4-.06L7.38,10,5.7,7.08A8,8,0,0,1,10.37,4.17ZM4.59,15a8,8,0,0,1-.42-1.37v0c0-.22-.08-.45-.1-.68a.5.5,0,0,1,0-.12,8.22,8.22,0,0,1,0-1.62.5.5,0,0,1,0-.12c0-.23.06-.46.1-.68v0A7.76,7.76,0,0,1,4.55,9.1L8,15Zm6.3,4.91-.5-.07h0A8,8,0,0,1,5.76,17h6.82ZM10.27,15,8.54,12l1.73-3h3.46l1.73,3-1.73,3Zm3.36,4.83h0l-.4.06L16.62,14l1.68,2.92A8,8,0,0,1,13.63,19.83Zm6.33-7a.5.5,0,0,1,0,.12c0,.23-.06.46-.1.68v0a7.76,7.76,0,0,1-.38,1.27L16,9h3.37a8,8,0,0,1,.42,1.37v0c0,.22.08.45.1.68a.5.5,0,0,1,0,.12,8.22,8.22,0,0,1,0,1.62Z"
  }));
};
var uil_shutter_alt_default = UilShutterAlt;
