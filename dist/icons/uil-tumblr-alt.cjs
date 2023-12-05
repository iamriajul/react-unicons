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

// src/icons/uil-tumblr-alt.tsx
var uil_tumblr_alt_exports = {};
__export(uil_tumblr_alt_exports, {
  default: () => uil_tumblr_alt_default
});
module.exports = __toCommonJS(uil_tumblr_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilTumblrAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M17.43359,20.50825l-.96191-2.85351a1.00073,1.00073,0,0,0-1.37891-.583,3.7631,3.7631,0,0,1-1.209.249.93653.93653,0,0,1-.65918-.165,1.20025,1.20025,0,0,1-.23926-.80762V12.00044H16.002a.99942.99942,0,0,0,1-1V7.09517a.99942.99942,0,0,0-1-1H13V2.00044a.99942.99942,0,0,0-1-1H9.07031a1.14806,1.14806,0,0,0-1.13769,1.04A5.09342,5.09342,0,0,1,4.65234,6.59809a.99923.99923,0,0,0-.66113.94043v3.584a.99943.99943,0,0,0,1,1H6.01562v4.53516a6.41109,6.41109,0,0,0,1.88672,4.47851A6.90463,6.90463,0,0,0,12.877,22.99946c.05371,0,.1084,0,.16309-.001,1.5459-.0254,3.61816-.64747,4.27246-1.60743A.99833.99833,0,0,0,17.43359,20.50825Zm-4.42675.49024A4.87007,4.87007,0,0,1,9.30469,19.7104a4.36971,4.36971,0,0,1-1.28907-3.05273V11.12251a.99942.99942,0,0,0-1-1H5.99121v-1.917A6.95438,6.95438,0,0,0,9.80957,3.00044H11V7.09517a.99943.99943,0,0,0,1,1h3.002v1.90527h-3.0166a.99942.99942,0,0,0-1,1V16.3647a3.07681,3.07681,0,0,0,.85645,2.23535,2.76714,2.76714,0,0,0,2.0957.7207,5.90822,5.90822,0,0,0,.94727-.11328l.4248,1.25879A5.909,5.909,0,0,1,13.00684,20.99849Z"
  }));
};
var uil_tumblr_alt_default = UilTumblrAlt;
