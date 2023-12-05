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

// src/icons/uil-gitlab.tsx
var uil_gitlab_exports = {};
__export(uil_gitlab_exports, {
  default: () => uil_gitlab_default
});
module.exports = __toCommonJS(uil_gitlab_exports);
var import_react = __toESM(require("react"), 1);
var UilGitlab = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "m21.94 12.865-1.066-3.28.001.005v-.005l-2.115-6.51a.833.833 0 0 0-.799-.57.822.822 0 0 0-.788.576l-2.007 6.178H8.834L6.824 3.08a.822.822 0 0 0-.788-.575H6.03a.839.839 0 0 0-.796.575L3.127 9.584l-.002.006.001-.005-1.069 3.28a1.195 1.195 0 0 0 .435 1.34l9.229 6.705.004.003.012.008-.011-.008.002.001.001.001a.466.466 0 0 0 .045.028l.006.004.004.002.003.001h.002l.005.003.025.01.023.01h.001l.004.002.005.002h.002l.006.002h.003c.011.004.022.006.034.009l.013.003h.002l.005.002.007.001h.007a.467.467 0 0 0 .066.006h.001a.469.469 0 0 0 .067-.005h.007l.007-.002.004-.001h.002l.014-.004.034-.008h.002l.006-.003h.002l.005-.002.004-.001h.001l.025-.011.023-.01.005-.002h.002l.003-.002.004-.002.007-.004a.468.468 0 0 0 .044-.027l.004-.003.005-.003 9.23-6.706a1.195 1.195 0 0 0 .434-1.339Zm-3.973-9.18 1.81 5.574h-3.62Zm-11.937 0L7.843 9.26h-3.62Zm-2.984 9.757a.255.255 0 0 1-.092-.285l.794-2.438 5.822 7.464Zm1.494-3.24h3.61l2.573 7.927Zm7.165 10.696-.006-.005-.011-.01-.02-.018.002.001.002.002a.473.473 0 0 0 .043.037l.002.002Zm.293-1.894-1.514-4.665-1.344-4.138h5.72Zm.31 1.88-.01.008-.002.001-.005.005-.012.009.002-.002a.455.455 0 0 0 .043-.036l.001-.002.002-.002ZM15.851 10.2h3.61l-.74.947-5.447 6.98Zm5.1 3.241-6.523 4.74 5.824-7.463.791 2.437a.255.255 0 0 1-.092.286Z"
  }));
};
var uil_gitlab_default = UilGitlab;
