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

// src/icons/uil-snapchat-alt.tsx
var uil_snapchat_alt_exports = {};
__export(uil_snapchat_alt_exports, {
  default: () => uil_snapchat_alt_default
});
module.exports = __toCommonJS(uil_snapchat_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilSnapchatAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.95117,15.61426a4.72447,4.72447,0,0,1-2.98144-2.17285,1,1,0,1,0-1.65625,1.12109,7.68775,7.68775,0,0,0,2.40234,2.334c-.13477.0254-.28125.04981-.44141.0752a1.36673,1.36673,0,0,0-1.07617,1.207,6.06237,6.06237,0,0,0-2.01465-.00391,4.64069,4.64069,0,0,0-1.958.95606,3.48426,3.48426,0,0,1-2.10352.87109h-.26074a3.485,3.485,0,0,1-2.10547-.873,4.62737,4.62737,0,0,0-1.92871-.94922,6.39,6.39,0,0,0-2.04.0039,1.3679,1.3679,0,0,0-1.0625-1.21c-.15723-.02441-.30176-.04883-.43457-.07422a6.85691,6.85691,0,0,0,1.79492-1.499,6.7141,6.7141,0,0,0,.63477-.86816.99986.99986,0,0,0-1.69532-1.06055,4.90731,4.90731,0,0,1-.44824.61621,4.252,4.252,0,0,1-2.55273,1.52832A1.22412,1.22412,0,0,0,.99121,16.85156a1.28037,1.28037,0,0,0,.11524.53321c.31543.71582,1.15527,1.168,2.78417,1.47461l.03126.12988c.02832.11816.05761.23828.09179.34765a1.28858,1.28858,0,0,0,1.27832.94532,2.59082,2.59082,0,0,0,.60254-.08692,4.66937,4.66937,0,0,1,1.58887-.0459,3.008,3.008,0,0,1,1.12305.61719A5.41315,5.41315,0,0,0,11.86133,22.002h.26074a5.44479,5.44479,0,0,0,3.27344-1.248,2.915,2.915,0,0,1,1.13183-.60938,3.48494,3.48494,0,0,1,.624-.05273,4.27087,4.27087,0,0,1,.95508.10644,3.78837,3.78837,0,0,0,.61523.06348,1.25616,1.25616,0,0,0,1.24512-.92285c.03808-.12207.06738-.23926.09472-.35449l.03125-.124c1.624-.30566,2.4668-.75488,2.76758-1.44043a1.17069,1.17069,0,0,0,.127-.47949A1.24436,1.24436,0,0,0,21.95117,15.61426ZM3.80176,11.14844a1.00451,1.00451,0,0,0,1.05664-.48438,3.13849,3.13849,0,0,0,1.27441.33789,1.79447,1.79447,0,0,0,1.26563-.499,1.00048,1.00048,0,0,0,.3164-.79l-.03613-.60156A9.90221,9.90221,0,0,1,7.835,5.5498a4.2597,4.2597,0,0,1,3.96582-2.54394l.3877-.00391a4.26391,4.26391,0,0,1,3.96,2.54688,9.9174,9.9174,0,0,1,.15625,3.56445l-.00977.16309-.02734.44336a1.028,1.028,0,0,0,.3125.77832,1.79536,1.79536,0,0,0,1.2539.50293,3.27129,3.27129,0,0,0,1.24122-.36524,1.00091,1.00091,0,0,0,.916.59864h.01758a1.00021,1.00021,0,0,0,.98242-1.01758,1.64158,1.64158,0,0,0-1.18555-1.45118,1.91432,1.91432,0,0,0-1.47656.01075,9.4713,9.4713,0,0,0-.35449-4.042,6.23557,6.23557,0,0,0-5.7959-3.73243l-.39258.00391A6.22235,6.22235,0,0,0,6.00879,4.73535a9.58634,9.58634,0,0,0-.35156,4.09473c-.03418-.01563-.07129-.0332-.11133-.05176A1.90859,1.90859,0,0,0,3.00879,9.97656,1.00153,1.00153,0,0,0,3.80176,11.14844Z"
  }));
};
var uil_snapchat_alt_default = UilSnapchatAlt;
