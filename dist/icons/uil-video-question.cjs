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

// src/icons/uil-video-question.tsx
var uil_video_question_exports = {};
__export(uil_video_question_exports, {
  default: () => uil_video_question_default
});
module.exports = __toCommonJS(uil_video_question_exports);
var import_react = __toESM(require("react"), 1);
var UilVideoQuestion = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M10.21,17.29a1.04667,1.04667,0,0,0-1.41992,0,1.02673,1.02673,0,0,0-.21.32959.94223.94223,0,0,0,0,.76025,1.15384,1.15384,0,0,0,.21.33008A1,1,0,0,0,10.5,18a.99993.99993,0,0,0-.08008-.38037A1.1515,1.1515,0,0,0,10.21,17.29ZM9.5,9a3.00933,3.00933,0,0,0-2.59766,1.49951.99956.99956,0,1,0,1.73047,1.001A1.00032,1.00032,0,1,1,9.5,13a.99974.99974,0,0,0-1,1v1a1,1,0,0,0,2,0v-.18427A2.99257,2.99257,0,0,0,9.5,9ZM21.52539,6.14941a.999.999,0,0,0-.97266-.04394l-3.56408,1.782A2.9975,2.9975,0,0,0,14,5H5A3.00328,3.00328,0,0,0,2,8v6a3.00328,3.00328,0,0,0,3,3H6a1,1,0,0,0,0-2H5a1.001,1.001,0,0,1-1-1V8A1.001,1.001,0,0,1,5,7h9a1.001,1.001,0,0,1,1,1v6a1.001,1.001,0,0,1-1,1h-.5a1,1,0,0,0,0,2H14a2.9975,2.9975,0,0,0,2.98865-2.88751l3.56408,1.782A1.00038,1.00038,0,0,0,22,15V7A.99976.99976,0,0,0,21.52539,6.14941ZM20,13.38184l-3-1.5V10.11816l3-1.5Z"
  }));
};
var uil_video_question_default = UilVideoQuestion;
