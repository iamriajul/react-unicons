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

// src/icons/uil-cloud-question.tsx
var uil_cloud_question_exports = {};
__export(uil_cloud_question_exports, {
  default: () => uil_cloud_question_default
});
module.exports = __toCommonJS(uil_cloud_question_exports);
var import_react = __toESM(require("react"), 1);
var UilCloudQuestion = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M18.42,8.22A7,7,0,0,0,5.06,10.11,4,4,0,0,0,6,18H8a1,1,0,0,0,0-2H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,13a3,3,0,0,1-3,3,1,1,0,0,0,0,2,5,5,0,0,0,1.42-9.78Zm-5.5,10.4a.56.56,0,0,0-.09-.17l-.12-.16a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-1.09.21l-.12.16a.56.56,0,0,0-.09.17.64.64,0,0,0-.06.18,1.5,1.5,0,0,0,0,.2,1.23,1.23,0,0,0,0,.19.6.6,0,0,0,.06.19.56.56,0,0,0,.09.17l.12.16A1.05,1.05,0,0,0,12,20a1,1,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21l.12-.16a.56.56,0,0,0,.09-.17.6.6,0,0,0,.06-.19A1.23,1.23,0,0,0,13,19a1.5,1.5,0,0,0,0-.2A.64.64,0,0,0,12.92,18.62ZM12,11a3,3,0,0,0-2.6,1.5,1,1,0,0,0,.37,1.37,1,1,0,0,0,1.36-.37A1,1,0,0,1,12,13a1,1,0,0,1,0,2,1,1,0,0,0,0,2,3,3,0,0,0,0-6Z"
  }));
};
var uil_cloud_question_default = UilCloudQuestion;
