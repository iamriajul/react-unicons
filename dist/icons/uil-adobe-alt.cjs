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

// src/icons/uil-adobe-alt.tsx
var uil_adobe_alt_exports = {};
__export(uil_adobe_alt_exports, {
  default: () => uil_adobe_alt_default
});
module.exports = __toCommonJS(uil_adobe_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilAdobeAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M10.24707,2.40278a.99893.99893,0,0,0-.83057-.44336H1.9917a.99974.99974,0,0,0-1,1v18.082a1.00015,1.00015,0,0,0,1.92529.37989l7.42481-18.082A1.00042,1.00042,0,0,0,10.24707,2.40278ZM2.9917,15.97309V3.95942H7.9248Zm19-14.01367H14.47412a1,1,0,0,0-.92139,1.3877l7.51758,17.84961a.99894.99894,0,0,0,.9209.6123,1.04879,1.04879,0,0,0,.19824-.01953,1.001,1.001,0,0,0,.80225-.98047V2.95942A.99974.99974,0,0,0,21.9917,1.95942Zm-1,13.89844L15.98047,3.95942H20.9917ZM12.94922,9.52a.99993.99993,0,0,0-.92578-.64648h-.00977a.99988.99988,0,0,0-.92822.62793L8.02637,17.13227a1,1,0,0,0,.92822,1.37207H11.209l1.52247,2.99024a.999.999,0,0,0,.89111.54687h2.61279a1.00015,1.00015,0,0,0,.93555-1.35351Zm1.28662,10.52148-1.52246-2.99023a.99905.99905,0,0,0-.89111-.54688H10.43262l1.55371-3.875,2.80176,7.41211Z"
  }));
};
var uil_adobe_alt_default = UilAdobeAlt;
