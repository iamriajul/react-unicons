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

// src/icons/uil-basketball.tsx
var uil_basketball_exports = {};
__export(uil_basketball_exports, {
  default: () => uil_basketball_default
});
module.exports = __toCommonJS(uil_basketball_exports);
var import_react = __toESM(require("react"), 1);
var UilBasketball = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12,2A10,10,0,0,0,3.6,6.59l0,0A10,10,0,0,0,18.26,19.79l0,0A10,10,0,0,0,12,2Zm2,2.26A8,8,0,0,1,19.74,10,9.78,9.78,0,0,0,15,11.38a15.7,15.7,0,0,0-2.4-2.21A10.06,10.06,0,0,0,14,4.26ZM12,4a7.9,7.9,0,0,1-1.14,4.07c-.15-.08-.29-.17-.44-.24A15.52,15.52,0,0,0,6.33,6.36,8,8,0,0,1,12,4ZM5,8.16A13.75,13.75,0,0,1,9.49,9.6l.13.08A7.93,7.93,0,0,1,4,12,8,8,0,0,1,5,8.16Zm5,11.58A8,8,0,0,1,4.26,14a9.9,9.9,0,0,0,7.08-3.21,14,14,0,0,1,2,1.8A10,10,0,0,0,10,19.74ZM12,20a8,8,0,0,1,2.56-5.85c.06.08.12.15.17.23a14,14,0,0,1,1.84,4.18A7.93,7.93,0,0,1,12,20Zm6.21-3a16,16,0,0,0-1.8-3.75L16.2,13A7.93,7.93,0,0,1,20,12,8,8,0,0,1,18.21,17Z"
  }));
};
var uil_basketball_default = UilBasketball;
