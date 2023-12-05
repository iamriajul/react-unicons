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

// src/icons/uil-html3-alt.tsx
var uil_html3_alt_exports = {};
__export(uil_html3_alt_exports, {
  default: () => uil_html3_alt_default
});
module.exports = __toCommonJS(uil_html3_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilHtml3Alt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M7.95215,8.00044h6.98633l-.17719,2H9.99121a1,1,0,0,0,0,2h4.59284L14.32031,14.977l-2.3291.52832L9.66309,14.976l-.09571-1.06445a1,1,0,1,0-1.99218.17774l.16015,1.79a1.00142,1.00142,0,0,0,.77442.88672l3.25976.74024a1.0188,1.0188,0,0,0,.44336,0l3.26074-.74024a1.00139,1.00139,0,0,0,.77442-.88769l.43158-4.86792.002-.01-.00079-.00391.34649-3.9082a1.001,1.001,0,0,0-.99609-1.08789H7.95215a1,1,0,0,0,0,2ZM20.6543,2.32563a1.002,1.002,0,0,0-.73828-.32519H4.06641a.99963.99963,0,0,0-.9961,1.08887L4.51367,19.28364a.999.999,0,0,0,.72754.874l6.47266,1.80566a.99028.99028,0,0,0,.53711,0l6.49023-1.8125a.999.999,0,0,0,.72754-.874l1.44336-16.1875A1.00166,1.00166,0,0,0,20.6543,2.32563Zm-3.11621,16.085-5.55567,1.55176L6.44434,18.41743,5.15918,4.00044H18.82324Z"
  }));
};
var uil_html3_alt_default = UilHtml3Alt;
