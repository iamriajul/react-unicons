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

// src/icons/uil-vk-alt.tsx
var uil_vk_alt_exports = {};
__export(uil_vk_alt_exports, {
  default: () => uil_vk_alt_default
});
module.exports = __toCommonJS(uil_vk_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilVkAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M15.74365,13.5293a5.5186,5.5186,0,0,0-.97741-.83612A7.87286,7.87286,0,0,0,17.625,8.22168a1,1,0,1,0-1.9502-.44336,5.86,5.86,0,0,1-3.0205,3.90228V8.002a.95817.95817,0,0,0-.0437-.21643,1.0238,1.0238,0,0,0-.03449-.17083.991.991,0,0,0-.16681-.24891c-.01788-.02124-.02691-.04925-.04645-.0689a1.00121,1.00121,0,0,0-.24609-.16706c-.02551-.01361-.04449-.03662-.07129-.048a1.01943,1.01943,0,0,0-.23645-.04865.94528.94528,0,0,0-.15179-.03119L11.00293,7H11a.99525.99525,0,0,0-.3501,1.92865v4.89069A11.307,11.307,0,0,1,7.64014,7.835a.99988.99988,0,1,0-1.97168.334,13.33371,13.33371,0,0,0,5.3999,8.64355.986.986,0,0,0,.12781.06445.94.94,0,0,0,.10748.0542.99383.99383,0,0,0,.35065.0708.98307.98307,0,0,0,.42382-.10186c.00995-.0047.02137-.00251.03126-.00751a.99262.99262,0,0,0,.24011-.17529c.01422-.01386.02374-.03089.03717-.04554a.98836.98836,0,0,0,.15991-.23718c.01392-.02869.02661-.05609.03778-.08624a.9878.9878,0,0,0,.06995-.34638l.00049-2.126a3.55144,3.55144,0,0,1,1.61474,1.00488l1.64795,1.79687a.99979.99979,0,1,0,1.47363-1.35156ZM15.07275,1H8.9375C2.78027,1,1,2.77832,1,8.92676V15.0625C1,21.21973,2.77783,23,8.92725,23H15.0625C21.21973,23,23,21.22168,23,15.07324V8.9375C23,2.78027,21.22217,1,15.07275,1ZM21,15.07324C21,20.11328,20.1123,21,15.0625,21H8.92725C3.88623,21,3,20.1123,3,15.0625V8.92676C3,3.88672,3.8877,3,8.9375,3h6.13525C20.11377,3,21,3.8877,21,8.9375Z"
  }));
};
var uil_vk_alt_default = UilVkAlt;
