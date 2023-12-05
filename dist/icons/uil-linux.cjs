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

// src/icons/uil-linux.tsx
var uil_linux_exports = {};
__export(uil_linux_exports, {
  default: () => uil_linux_default
});
module.exports = __toCommonJS(uil_linux_exports);
var import_react = __toESM(require("react"), 1);
var UilLinux = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M19.7 17.6c-.1-.2-.2-.4-.2-.6 0-.4-.2-.7-.5-1-.1-.1-.3-.2-.4-.2.6-1.8-.3-3.6-1.3-4.9-.8-1.2-2-2.1-1.9-3.7 0-1.9.2-5.4-3.3-5.1-3.6.2-2.6 3.9-2.7 5.2 0 1.1-.5 2.2-1.3 3.1-.2.2-.4.5-.5.7-1 1.2-1.5 2.8-1.5 4.3-.2.2-.4.4-.5.6-.1.1-.2.2-.2.3-.1.1-.3.2-.5.3-.4.1-.7.3-.9.7-.1.3-.2.7-.1 1.1.1.2.1.4 0 .7-.2.4-.2.9 0 1.4.3.4.8.5 1.5.6.5 0 1.1.2 1.6.4.5.3 1.1.5 1.7.5.3 0 .7-.1 1-.2.3-.2.5-.4.6-.7.4 0 1-.2 1.7-.2.6 0 1.2.2 2 .1 0 .1 0 .2.1.3.2.5.7.9 1.3 1h.2c.8-.1 1.6-.5 2.1-1.1.4-.4.9-.7 1.4-.9.6-.3 1-.5 1.1-1 .1-.7-.1-1.1-.5-1.7zM12.8 4.8c.6.1 1.1.6 1 1.2 0 .3-.1.6-.3.9h-.1c-.2-.1-.3-.1-.4-.2.1-.1.1-.3.2-.5 0-.4-.2-.7-.4-.7-.3 0-.5.3-.5.7v.1c-.1-.1-.3-.1-.4-.2V6c-.1-.5.3-1.1.9-1.2zm-.3 2c.1.1.3.2.4.2.1 0 .3.1.4.2.2.1.4.2.4.5s-.3.6-.9.8c-.2.1-.3.1-.4.2-.3.2-.6.3-1 .3-.3 0-.6-.2-.8-.4-.1-.1-.2-.2-.4-.3-.1-.1-.3-.3-.4-.6 0-.1.1-.2.2-.3.3-.2.4-.3.5-.4l.1-.1c.2-.3.6-.5 1-.5.3.1.6.2.9.4zM10.4 5c.4 0 .7.4.8 1.1v.2c-.1 0-.3.1-.4.2v-.2c0-.3-.2-.6-.4-.5-.2 0-.3.3-.3.6 0 .2.1.3.2.4 0 0-.1.1-.2.1-.2-.2-.4-.5-.4-.8 0-.6.3-1.1.7-1.1zm-1 16.1c-.7.3-1.6.2-2.2-.2-.6-.3-1.1-.4-1.8-.4-.5-.1-1-.1-1.1-.3-.1-.2-.1-.5.1-1 .1-.3.1-.6 0-.9-.1-.3-.1-.5 0-.8.1-.3.3-.4.6-.5.3-.1.5-.2.7-.4.1-.1.2-.2.3-.4.3-.4.5-.6.8-.6.6.1 1.1 1 1.5 1.9.2.3.4.7.7 1 .4.5.9 1.2.9 1.6 0 .5-.2.8-.5 1zm4.9-2.2c0 .1 0 .1-.1.2-1.2.9-2.8 1-4.1.3l-.6-.9c.9-.1.7-1.3-1.2-2.5-2-1.3-.6-3.7.1-4.8.1-.1.1 0-.3.8-.3.6-.9 2.1-.1 3.2 0-.8.2-1.6.5-2.4.7-1.3 1.2-2.8 1.5-4.3.1.1.1.1.2.1.1.1.2.2.3.2.2.3.6.4.9.4h.1c.4 0 .8-.1 1.1-.4.1-.1.2-.2.4-.2.3-.1.6-.3.9-.6.4 1.3.8 2.5 1.4 3.6.4.8.7 1.6.9 2.5.3 0 .7.1 1 .3.8.4 1.1.7 1 1.2H18c0-.3-.2-.6-.9-.9-.7-.3-1.3-.3-1.5.4-.1 0-.2.1-.3.1-.8.4-.8 1.5-.9 2.6.1.4 0 .7-.1 1.1zm4.6.6c-.6.2-1.1.6-1.5 1.1-.4.6-1.1 1-1.9.9-.4 0-.8-.3-.9-.7-.1-.6-.1-1.2.2-1.8.1-.4.2-.7.3-1.1.1-1.2.1-1.9.6-2.2 0 .5.3.8.7 1 .5 0 1-.1 1.4-.5h.2c.3 0 .5 0 .7.2.2.2.3.5.3.7 0 .3.2.6.3.9.5.5.5.8.5.9-.1.2-.5.4-.9.6zm-9-12c-.1 0-.1 0-.1.1 0 0 0 .1.1.1s.1.1.1.1c.3.4.8.6 1.4.7.5-.1 1-.2 1.5-.6l.6-.3c.1 0 .1-.1.1-.1 0-.1 0-.1-.1-.1-.2.1-.5.2-.7.3-.4.3-.9.5-1.4.5-.5 0-.9-.3-1.2-.6-.1 0-.2-.1-.3-.1z"
  }));
};
var uil_linux_default = UilLinux;
