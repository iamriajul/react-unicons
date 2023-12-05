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

// src/icons/uil-whatsapp-alt.tsx
var uil_whatsapp_alt_exports = {};
__export(uil_whatsapp_alt_exports, {
  default: () => uil_whatsapp_alt_default
});
module.exports = __toCommonJS(uil_whatsapp_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilWhatsappAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M22,6.55a12.61,12.61,0,0,0-.1-1.29,4.29,4.29,0,0,0-.37-1.08,3.66,3.66,0,0,0-.71-1,3.91,3.91,0,0,0-1-.71,4.28,4.28,0,0,0-1.08-.36A10.21,10.21,0,0,0,17.46,2H6.55a12.61,12.61,0,0,0-1.29.1,4.29,4.29,0,0,0-1.08.37,3.66,3.66,0,0,0-1,.71,3.91,3.91,0,0,0-.71,1,4.28,4.28,0,0,0-.36,1.08A10.21,10.21,0,0,0,2,6.54C2,6.73,2,7,2,7.08v9.84c0,.11,0,.35,0,.53a12.61,12.61,0,0,0,.1,1.29,4.29,4.29,0,0,0,.37,1.08,3.66,3.66,0,0,0,.71,1,3.91,3.91,0,0,0,1,.71,4.28,4.28,0,0,0,1.08.36A10.21,10.21,0,0,0,6.54,22H17.45a12.61,12.61,0,0,0,1.29-.1,4.29,4.29,0,0,0,1.08-.37,3.66,3.66,0,0,0,1-.71,3.91,3.91,0,0,0,.71-1,4.28,4.28,0,0,0,.36-1.08A10.21,10.21,0,0,0,22,17.46c0-.19,0-.43,0-.54V7.08C22,7,22,6.73,22,6.55ZM12.23,19h0A7.12,7.12,0,0,1,8.8,18.1L5,19.1l1-3.72a7.11,7.11,0,0,1-1-3.58A7.18,7.18,0,1,1,12.23,19Zm0-13.13A6,6,0,0,0,7.18,15l.14.23-.6,2.19L9,16.8l.22.13a6,6,0,0,0,3,.83h0a6,6,0,0,0,6-6,6,6,0,0,0-6-6Zm3.5,8.52a1.82,1.82,0,0,1-1.21.85,2.33,2.33,0,0,1-1.12-.07,8.9,8.9,0,0,1-1-.38,8,8,0,0,1-3.06-2.7,3.48,3.48,0,0,1-.73-1.85,2,2,0,0,1,.63-1.5.65.65,0,0,1,.48-.22H10c.11,0,.26,0,.4.31s.51,1.24.56,1.33a.34.34,0,0,1,0,.31,1.14,1.14,0,0,1-.18.3c-.09.11-.19.24-.27.32s-.18.18-.08.36a5.56,5.56,0,0,0,1,1.24,5,5,0,0,0,1.44.89c.18.09.29.08.39,0s.45-.52.57-.7.24-.15.4-.09,1.05.49,1.23.58.29.13.34.21A1.56,1.56,0,0,1,15.73,14.36Z"
  }));
};
var uil_whatsapp_alt_default = UilWhatsappAlt;
