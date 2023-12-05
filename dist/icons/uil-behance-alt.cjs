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

// src/icons/uil-behance-alt.tsx
var uil_behance_alt_exports = {};
__export(uil_behance_alt_exports, {
  default: () => uil_behance_alt_default
});
module.exports = __toCommonJS(uil_behance_alt_exports);
var import_react = __toESM(require("react"), 1);
var UilBehanceAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M22.1084,15.03169a.99748.99748,0,0,0-1.21582.72265,2.99839,2.99839,0,0,1-5.90088-.7539v-1h7a.99974.99974,0,0,0,1-1,5,5,0,1,0-10,0v2a4.99837,4.99837,0,0,0,9.83935,1.24609A.999.999,0,0,0,22.1084,15.03169Zm-4.1167-5.03125a3.01119,3.01119,0,0,1,2.11816.87207,3.04438,3.04438,0,0,1,.69867,1.12793H15.176A2.99509,2.99509,0,0,1,17.9917,10.00044Zm-2-3h4a1,1,0,0,0,0-2h-4a1,1,0,0,0,0,2Zm-6.082,4.71716a3.98653,3.98653,0,0,0-2.918-6.71716h-5a.99973.99973,0,0,0-1,1v13a.99974.99974,0,0,0,1,1h5.5a4.492,4.492,0,0,0,2.418-8.28284ZM2.9917,7.00044h4a2,2,0,1,1,0,4h-4Zm4.5,11h-4.5v-5h4.5a2.5,2.5,0,0,1,0,5Z"
  }));
};
var uil_behance_alt_default = UilBehanceAlt;
