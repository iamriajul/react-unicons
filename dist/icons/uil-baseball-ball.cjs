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

// src/icons/uil-baseball-ball.tsx
var uil_baseball_ball_exports = {};
__export(uil_baseball_ball_exports, {
  default: () => uil_baseball_ball_default
});
module.exports = __toCommonJS(uil_baseball_ball_exports);
var import_react = __toESM(require("react"), 1);
var UilBaseballBall = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M13.92188,6.44043a1.00009,1.00009,0,0,0-1.70313,1.04883q.26514.4292.56543.84375a.99994.99994,0,0,0,1.61914-1.17383Q14.147,6.80616,13.92188,6.44043Zm-2.7295,9.22168A1,1,0,1,0,9.583,16.84961c.16992.22949.32715.4668.47558.709a1.0004,1.0004,0,1,0,1.70508-1.04687C11.58594,16.22266,11.39551,15.93848,11.19238,15.66211Zm-3.707-3.42871a.99989.99989,0,0,0-1.04492,1.70508q.36329.22264.71289.47851A1.00029,1.00029,0,1,0,8.33105,12.7998Q7.91651,12.498,7.48535,12.2334Zm10.06055-2.167q-.36475-.22413-.71582-.4795a1.0003,1.0003,0,0,0-1.17774,1.61719q.41456.30176.84668.56738a1.0004,1.0004,0,1,0,1.04688-1.70507ZM18.99219,5.001a9.90088,9.90088,0,1,0,0,14.001A9.91268,9.91268,0,0,0,18.99219,5.001ZM17.71875,17.72852a8.02918,8.02918,0,0,1-4.51563,2.27374.97071.97071,0,0,0-1.74633.07324,8.0616,8.0616,0,0,1-7.535-7.53155.97507.97507,0,0,0,.07282-1.74714,8.0395,8.0395,0,0,1,6.78479-6.79174.99669.99669,0,0,0,.85632.49786,1.02809,1.02809,0,0,0,.22949-.02637.98194.98194,0,0,0,.65912-.54583,8.05437,8.05437,0,0,1,7.53772,7.53869.97244.97244,0,0,0-.07385,1.74085A8.046,8.046,0,0,1,17.71875,17.72852Z"
  }));
};
var uil_baseball_ball_default = UilBaseballBall;
