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

// src/icons/uil-microscope.tsx
var uil_microscope_exports = {};
__export(uil_microscope_exports, {
  default: () => uil_microscope_default
});
module.exports = __toCommonJS(uil_microscope_exports);
var import_react = __toESM(require("react"), 1);
var UilMicroscope = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M20 21.005h-5.184a2.964 2.964 0 0 0 .143-.591A8.044 8.044 0 0 0 20 13.005a7.945 7.945 0 0 0-2.127-5.422l.637-.638a.991.991 0 0 0 .241-.39l.708-2.122a1 1 0 0 0-.241-1.024l-2.122-2.121a.999.999 0 0 0-1.024-.242l-2.12.707a.997.997 0 0 0-.391.242L7.198 8.358a1 1 0 0 0 0 1.414l-1.416 1.415a1 1 0 0 0 0 1.415l2.122 2.12a1 1 0 0 0 1.414 0l1.414-1.413.002.002a1 1 0 0 0 1.414 0l4.31-4.312A5.955 5.955 0 0 1 18 13.005a6.048 6.048 0 0 1-3.455 5.431 2.976 2.976 0 0 0-5.124.063 6.822 6.822 0 0 1-1.12-.554.989.989 0 0 0 .699-.94 1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h1.331a8.814 8.814 0 0 0 3.717 2.473 2.955 2.955 0 0 0 .136.527H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM8.611 12.602l-.708-.707.708-.708.707.708Zm8.318-6.904L11.44 11.19 9.32 9.065l5.489-5.489 1.311-.437 1.247 1.247ZM12 21.005a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1Z"
  }));
};
var uil_microscope_default = UilMicroscope;
