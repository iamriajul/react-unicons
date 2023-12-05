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

// src/icons/uil-wordpress.tsx
var uil_wordpress_exports = {};
__export(uil_wordpress_exports, {
  default: () => uil_wordpress_default
});
module.exports = __toCommonJS(uil_wordpress_exports);
var import_react = __toESM(require("react"), 1);
var UilWordpress = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M3.66675,11.99976c-0.00055,3.1933,1.82367,6.10608,4.69678,7.49969L4.38818,8.60846C3.91162,9.67548,3.66583,10.83112,3.66675,11.99976z M12.14648,12.7287l-2.50073,7.2652c1.67889,0.49438,3.47076,0.44788,5.1217-0.13293c-0.02319-0.0365-0.04315-0.07489-0.05969-0.11487L12.14648,12.7287z M17.62573,11.57953c-0.01117-0.815-0.24902-1.61078-0.68701-2.29816c-0.44788-0.56354-0.7312-1.23999-0.8186-1.95453c-0.0202-0.79413,0.60535-1.45526,1.39941-1.47894c0.03699,0,0.07202,0.00446,0.10791,0.00671C14.23444,2.74658,8.96436,2.97766,5.85638,6.37061C5.55566,6.69885,5.2818,7.05066,5.03735,7.42267C5.23291,7.42889,5.41724,7.4328,5.57361,7.4328c0.87146,0,2.22107-0.10602,2.22107-0.10602C7.98462,7.3158,8.14752,7.46088,8.15851,7.65082C8.16919,7.83551,8.03204,7.99567,7.8479,8.01355c0,0-0.45166,0.05286-0.95361,0.07916l3.03442,9.02649l1.82397-5.4693l-1.29834-3.55713c-0.44897-0.02631-0.87402-0.07916-0.87402-0.07916c-0.18933-0.01831-0.328-0.18665-0.30975-0.37598c0.01782-0.18427,0.17804-0.32147,0.36279-0.31079c0,0,1.37585,0.10602,2.19458,0.10602c0.87146,0,2.22131-0.10602,2.22131-0.10602c0.18988-0.01111,0.35291,0.13385,0.36401,0.32373c0.0108,0.18494-0.12653,0.34534-0.31091,0.36304c0,0-0.45203,0.05286-0.95361,0.07916l3.01147,8.95776l0.85962-2.72406C17.35553,13.44556,17.55969,12.51996,17.62573,11.57953z M19.36877,8.85889c-0.01447,1.02673-0.2298,2.04077-0.63391,2.98474l-2.54517,7.35889c3.90363-2.27075,5.28845-7.23743,3.12299-11.20044C19.35059,8.28607,19.36932,8.57233,19.36877,8.85889z M12,2.00012c-5.52283,0-10,4.47717-10,10s4.47717,10,10,10s10-4.47717,10-10S17.52283,2.00012,12,2.00012z M15.65869,20.66162c-2.92645,1.23846-6.28082,0.91241-8.91394-0.86652c-1.51147-1.02045-2.69464-2.45721-3.40637-4.13629c-1.23877-2.92645-0.9126-6.28094,0.8667-8.91394c1.02026-1.5116,2.45703-2.69489,4.13623-3.40631c2.92645-1.23846,6.28082-0.91241,8.91394,0.86652c1.51147,1.02045,2.69464,2.45721,3.40637,4.13629c1.23877,2.92645,0.9126,6.28094-0.8667,8.91394C18.77466,18.76691,17.33789,19.9502,15.65869,20.66162z"
  }));
};
var uil_wordpress_default = UilWordpress;
