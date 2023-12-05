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

// src/icons/uil-puzzle-piece.tsx
var uil_puzzle_piece_exports = {};
__export(uil_puzzle_piece_exports, {
  default: () => uil_puzzle_piece_default
});
module.exports = __toCommonJS(uil_puzzle_piece_exports);
var import_react = __toESM(require("react"), 1);
var UilPuzzlePiece = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M17,22H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H6a4,4,0,0,1,7.3-2.18A3.86,3.86,0,0,1,14,6h3a1,1,0,0,1,1,1v3a4,4,0,0,1,2.18,7.3A3.86,3.86,0,0,1,18,18h0v3A1,1,0,0,1,17,22ZM5,8A1,1,0,0,0,4,9V19a1,1,0,0,0,1,1H16V16.82a1,1,0,0,1,.42-.82,1,1,0,0,1,.91-.13,1.77,1.77,0,0,0,1.74-.23A2,2,0,0,0,20,14.27a2,2,0,0,0-.48-1.59,1.89,1.89,0,0,0-2.17-.55,1,1,0,0,1-.91-.13,1,1,0,0,1-.42-.82V8H12.82a1,1,0,0,1-1-1.33,1.77,1.77,0,0,0-.23-1.74,1.94,1.94,0,0,0-3-.43A2,2,0,0,0,8,6a1.89,1.89,0,0,0,.13.67A1,1,0,0,1,7.18,8Z"
  }));
};
var uil_puzzle_piece_default = UilPuzzlePiece;
