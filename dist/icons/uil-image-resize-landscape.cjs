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

// src/icons/uil-image-resize-landscape.tsx
var uil_image_resize_landscape_exports = {};
__export(uil_image_resize_landscape_exports, {
  default: () => uil_image_resize_landscape_default
});
module.exports = __toCommonJS(uil_image_resize_landscape_exports);
var import_react = __toESM(require("react"), 1);
var UilImageResizeLandscape = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M13,11H2a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1H12.86c.05,0,.09,0,.14,0a1,1,0,0,0,1-1V12A1,1,0,0,0,13,11ZM7.44,20l1.93-1.93a.3.3,0,0,1,.5,0L11.79,20ZM12,17.38l-.72-.71a2.41,2.41,0,0,0-3.33,0L4.61,20H3V13h9ZM2,4.11a1,1,0,0,0,.86-.49A1.05,1.05,0,0,0,3.05,3,1,1,0,0,0,2,2,1,1,0,0,0,1,3v.1A1,1,0,0,0,2,4.11ZM9.91,4h.19a1,1,0,0,0,0-2H9.91a1,1,0,0,0,0,2ZM2,8.78a1,1,0,0,0,1-1V7.56a1,1,0,1,0-2,0v.22A1,1,0,0,0,2,8.78ZM14.09,2H13.9a1,1,0,0,0,0,2h.19a1,1,0,0,0,0-2ZM5.91,4H6.1a1,1,0,0,0,0-2H5.91a1,1,0,0,0,0,2ZM22,6.4a1,1,0,0,0-1,1v.21a1,1,0,0,0,2,0V7.4A1,1,0,0,0,22,6.4ZM17.12,20h-.24a1,1,0,1,0,0,2h.24a1,1,0,0,0,0-2ZM21.9,2A1,1,0,0,0,21,3a1,1,0,0,0,.1.42A1,1,0,0,0,23,3.11V3A1.09,1.09,0,0,0,21.9,2ZM22,10.9a1,1,0,0,0-1,1v.22a1,1,0,0,0,2,0V11.9A1,1,0,0,0,22,10.9ZM18.09,2H17.9a1,1,0,0,0,0,2h.19a1,1,0,0,0,0-2ZM22,20a.93.93,0,0,0-.44.11A1,1,0,0,0,21,21,1,1,0,0,0,22,22a1.09,1.09,0,0,0,1-1.1A1,1,0,0,0,22,20Zm0-4.56a1,1,0,0,0-1,1v.22a1,1,0,1,0,2,0V16.4A1,1,0,0,0,22,15.4Z"
  }));
};
var uil_image_resize_landscape_default = UilImageResizeLandscape;
