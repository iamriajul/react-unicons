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

// src/icons/uil-facebook-messenger-alt.tsx
var uil_facebook_messenger_alt_exports = {};
__export(uil_facebook_messenger_alt_exports, {
  default: () => uil_facebook_messenger_alt_default
});
module.exports = __toCommonJS(uil_facebook_messenger_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilFacebookMessengerAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M11.99121,1.00044a10.61443,10.61443,0,0,0-11,10.70019,10.46132,10.46132,0,0,0,3.41406,7.86524L4.457,21.2563a1.79959,1.79959,0,0,0,1.79883,1.74316,1.81992,1.81992,0,0,0,.72656-.15234l1.9209-.84668a11.89548,11.89548,0,0,0,3.08789.40039,10.61525,10.61525,0,0,0,11.001-10.7002A10.61525,10.61525,0,0,0,11.99121,1.00044Zm0,19.40039a9.86205,9.86205,0,0,1-2.63476-.35059,1.79856,1.79856,0,0,0-1.19629.0918l-1.71387.75586-.04492-1.49316a1.80968,1.80968,0,0,0-.60157-1.27442,8.4876,8.4876,0,0,1-2.80859-6.42969,8.65949,8.65949,0,0,1,9-8.70019,8.70522,8.70522,0,1,1,0,17.40039ZM15.72559,8.5854l-2.3125,2.75488L10.06641,9.28364a.99809.99809,0,0,0-1.28907.21L5.72559,13.13032a.99955.99955,0,1,0,1.53125,1.28516l2.498-2.97559,3.34668,2.05567a.99823.99823,0,0,0,1.28906-.209l2.86622-3.416A.99955.99955,0,1,0,15.72559,8.5854Z"
  }));
};
var uil_facebook_messenger_alt_default = UilFacebookMessengerAlt;
