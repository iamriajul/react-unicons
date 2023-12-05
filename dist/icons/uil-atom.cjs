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

// src/icons/uil-atom.tsx
var uil_atom_exports = {};
__export(uil_atom_exports, {
  default: () => uil_atom_default
});
module.exports = __toCommonJS(uil_atom_exports);
var import_react = __toESM(require("react"), 1);
var UilAtom = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12,11a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm7.62,1,.11-.14C21.08,10,21.4,8.29,20.66,7S18.26,5.14,16,5.37l-.18,0C14.91,3.3,13.56,2,12,2S9.09,3.3,8.19,5.4L8,5.37C5.74,5.14,4.08,5.71,3.34,7s-.42,3,.93,4.86l.11.14-.11.14C2.92,14,2.6,15.71,3.34,17,4,18.1,5.27,18.68,7,18.68c.31,0,.63,0,1-.05l.18,0C9.09,20.7,10.44,22,12,22s2.91-1.3,3.81-3.4l.18,0c.34,0,.66.05,1,.05,1.77,0,3.07-.58,3.7-1.68.74-1.29.42-3-.93-4.86ZM5.07,8c.25-.44,1-.68,2-.68l.49,0a14.78,14.78,0,0,0-.35,1.87,15,15,0,0,0-1.45,1.25C5,9.44,4.78,8.5,5.07,8Zm0,8c-.29-.5,0-1.44.67-2.47a15,15,0,0,0,1.45,1.25,14.94,14.94,0,0,0,.35,1.88C6.3,16.74,5.36,16.5,5.07,16ZM12,4c.56,0,1.23.66,1.8,1.83a17.6,17.6,0,0,0-1.8.63,17.6,17.6,0,0,0-1.8-.63C10.77,4.66,11.44,4,12,4Zm0,16c-.56,0-1.23-.66-1.8-1.83a17.6,17.6,0,0,0,1.8-.63,17.6,17.6,0,0,0,1.8.63C13.23,19.34,12.56,20,12,20Zm2.93-6.31c-.46.32-.93.62-1.43.91s-1,.55-1.5.78q-.75-.35-1.5-.78c-.5-.29-1-.59-1.43-.91C9,13.15,9,12.59,9,12s0-1.15.07-1.69c.46-.32.93-.62,1.43-.91s1-.55,1.5-.78q.75.35,1.5.78c.5.29,1,.59,1.43.91,0,.54.07,1.1.07,1.69S15,13.15,14.93,13.69Zm4,2.31c-.29.5-1.23.75-2.47.66a14.94,14.94,0,0,0,.35-1.88,15,15,0,0,0,1.45-1.25C19,14.56,19.22,15.5,18.93,16Zm-.67-5.53a15,15,0,0,0-1.45-1.25,14.78,14.78,0,0,0-.35-1.87l.49,0c1,0,1.73.24,2,.68S19,9.44,18.26,10.47Z"
  }));
};
var uil_atom_default = UilAtom;
