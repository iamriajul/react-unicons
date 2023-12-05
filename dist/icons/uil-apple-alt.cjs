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

// src/icons/uil-apple-alt.tsx
var uil_apple_alt_exports = {};
__export(uil_apple_alt_exports, {
  default: () => uil_apple_alt_default
});
module.exports = __toCommonJS(uil_apple_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilAppleAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M20.50439,15.7436a3.38641,3.38641,0,0,1-2.05468-3.127,3.49747,3.49747,0,0,1,1.6875-2.94629.99994.99994,0,0,0,.2998-1.415A5.57386,5.57386,0,0,0,16.4209,5.86958,6.422,6.422,0,0,0,17.38574,1.893a.98411.98411,0,0,0-1.0332-.8916,6.69083,6.69083,0,0,0-4.44336,2.26074,6.84216,6.84216,0,0,0-1.47949,2.89941,5.2637,5.2637,0,0,0-1.62012-.27734A5.92528,5.92528,0,0,0,3.81885,8.892c-1.8877,3.27734-.73291,8.18848,1.312,11.14453.82031,1.18457,2.05127,2.96289,3.9082,2.96289.03662,0,.07373,0,.11084-.002a4.74,4.74,0,0,0,1.79248-.46387,3.274,3.274,0,0,1,1.44532-.35351,3.04472,3.04472,0,0,1,1.35742.33789,4.75244,4.75244,0,0,0,1.96191.45605c1.91309-.03613,3.043-1.68652,3.86817-2.89258a12.04214,12.04214,0,0,0,1.51269-3.1084A1.00325,1.00325,0,0,0,20.50439,15.7436ZM13.42334,4.56782a4.94131,4.94131,0,0,1,1.91943-1.32226,4.85545,4.85545,0,0,1-1.03662,2.15136A4.39075,4.39075,0,0,1,13.042,6.437l-.00293.001c-.02832.01172-.05664.02246-.085.03418-.18652.07324-.417.16406-.59472.22265A4.825,4.825,0,0,1,13.42334,4.56782ZM17.9248,18.95259c-.80371,1.17383-1.436,2.00683-2.25439,2.02148a2.36658,2.36658,0,0,1-1.13135-.292,4.96942,4.96942,0,0,0-2.15136-.502,5.21424,5.21424,0,0,0-2.22852.51269,2.88493,2.88493,0,0,1-1.08594.30664H9.04346c-.813,0-1.6875-1.26269-2.26807-2.10156-1.45264-2.09961-2.79248-6.2832-1.22314-9.00781A3.917,3.917,0,0,1,8.84277,7.88423l.03369-.001a4.75808,4.75808,0,0,1,1.64112.44434c.13135.05175.26074.10351.38916.15136.03271.01368.0664.02637.10058.03711a3.31547,3.31547,0,0,0,1.11719.23731,4.436,4.436,0,0,0,1.564-.4209,4.95643,4.95643,0,0,1,2.22265-.49707,3.787,3.787,0,0,1,2.25049.85352,5.31025,5.31025,0,0,0-1.71191,3.94531v.001a5.30031,5.30031,0,0,0,2.45117,4.50293A10.19829,10.19829,0,0,1,17.9248,18.95259Z"
  }));
};
var uil_apple_alt_default = UilAppleAlt;
