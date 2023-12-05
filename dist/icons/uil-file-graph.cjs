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

// src/icons/uil-file-graph.tsx
var uil_file_graph_exports = {};
__export(uil_file_graph_exports, {
  default: () => uil_file_graph_default
});
module.exports = __toCommonJS(uil_file_graph_exports);
var import_react = __toESM(require("react"), 1);
var UilFileGraph = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm5.21045,2.38623-1.67334,2.15186-.86816-.78125a.9997.9997,0,0,0-1.44971.11865l-2,2.5a.9998.9998,0,1,0,1.56152,1.249l1.33789-1.67236.87891.791a.99989.99989,0,0,0,1.45849-.12939l2.3335-3a1.00005,1.00005,0,0,0-1.5791-1.22754Zm5.7771-3.44794a1.0088,1.0088,0,0,0-.27936-.64373l-.00146-.0019L13.70734,2.29327l-.00183-.00146a.99022.99022,0,0,0-.28608-.19281c-.0299-.014-.061-.02191-.09246-.033a.98253.98253,0,0,0-.26667-.05383C13.03925,2.01086,13.02136,2,13,2H7A3.00328,3.00328,0,0,0,4,5V19a3.00328,3.00328,0,0,0,3,3H17a3.00328,3.00328,0,0,0,3-3V9C20,8.97809,19.989,8.95984,19.98755,8.93829ZM14,5.41406,16.58594,8H15a1.0013,1.0013,0,0,1-1-1ZM18,19a1.0013,1.0013,0,0,1-1,1H7a1.0013,1.0013,0,0,1-1-1V5A1.0013,1.0013,0,0,1,7,4h5V7a3.00328,3.00328,0,0,0,3,3h3Z"
  }));
};
var uil_file_graph_default = UilFileGraph;
