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

// src/icons/uil-jackhammer.tsx
var uil_jackhammer_exports = {};
__export(uil_jackhammer_exports, {
  default: () => uil_jackhammer_default
});
module.exports = __toCommonJS(uil_jackhammer_exports);
var import_react = __toESM(require("react"), 1);
var UilJackhammer = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M18.85,15.69a1,1,0,0,0-1.41,0l-2.06,2.06a1,1,0,0,0,.45,1.67l.26.07-.8.8a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0,.26-1,1,1,0,0,0-.71-.71L18,17.94l.83-.84A1,1,0,0,0,18.85,15.69ZM7.91,19.49l.26-.07a1,1,0,0,0,.45-1.67L6.56,15.69A1,1,0,0,0,5.15,17.1l.83.84L5.72,18a1,1,0,0,0-.71.71,1,1,0,0,0,.26,1l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM21,4a1,1,0,0,0-1,1H17a3,3,0,0,0-3-3H10A3,3,0,0,0,7,5H4A1,1,0,0,0,2,5V7A1,1,0,0,0,4,7H7V9a3,3,0,0,0,2,2.83V13a2,2,0,0,0,2,2v6a1,1,0,0,0,2,0V15a2,2,0,0,0,2-2V11.83A3,3,0,0,0,17,9V7h3a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4ZM15,9a1,1,0,0,1-1,1,1,1,0,0,0-1,1v2H11V11a1,1,0,0,0-1-1A1,1,0,0,1,9,9V5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1ZM12,6a1,1,0,0,0-1,1V8a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Z"
  }));
};
var uil_jackhammer_default = UilJackhammer;
