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

// src/icons/uil-google-hangouts.tsx
var uil_google_hangouts_exports = {};
__export(uil_google_hangouts_exports, {
  default: () => uil_google_hangouts_default
});
module.exports = __toCommonJS(uil_google_hangouts_exports);
var import_react = __toESM(require("react"), 1);
var UilGoogleHangouts = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M20.44411,9.05505a8.50456,8.50456,0,0,0-2.17292-4.334,8.40344,8.40344,0,0,0-1.62213-1.35748,8.48891,8.48891,0,0,0-3.6405-1.30927A4.15272,4.15272,0,0,1,12.52766,2H11.3932c-.01226.02863-.03857.01819-.05944.02014-.29212.02576-.58283.059-.87116.11365A8.45336,8.45336,0,0,0,5.28615,5.2384a8.35853,8.35853,0,0,0-1.8393,4.7085,8.58926,8.58926,0,0,0,.18476,2.52869,8.1479,8.1479,0,0,0,.62426,1.79c.02448.04871.04859.09742.07349.14606A8.601,8.601,0,0,0,6.1125,16.80835a8.5306,8.5306,0,0,0,5.76313,2.33246c.10015.0014.12744.02606.12683.12848-.00458.87353-.00263,1.74719-.00238,2.62085.00006.03393.00268.06775.00464.10986.02825-.01147.04595-.018.063-.02606A17.98894,17.98894,0,0,0,16.558,19.008q.40055-.36466.76892-.76246c.10529-.11334.20972-.22869.31525-.34191.163-.17432.30407-.36908.45776-.55262.17749-.21173.33679-.43676.494-.66327a11.03342,11.03342,0,0,0,.91852-1.5744c.13195-.27887.25756-.55993.36877-.84759a.09617.09617,0,0,0,.01105-.01612,10.277,10.277,0,0,0,.60058-2.439c.03607-.29126.05945-.58435.07422-.87726A8.14067,8.14067,0,0,0,20.44411,9.05505Zm-9.18994,2.81934a2.5047,2.5047,0,0,1-.84,1.87732c-.02844.02637-.056.05389-.08374.08087a2.68427,2.68427,0,0,1-.93378.48065,3.80048,3.80048,0,0,1-.44757.0849.2109.2109,0,0,1-.23492-.15216l.00116-.96814c.00567-.095-.0326-.19678.04352-.28058A.26578.26578,0,0,1,8.897,12.9129a1.77446,1.77446,0,0,0,.49414-.16845,1.13159,1.13159,0,0,0,.53808-.73169c.01215-.05011.02381-.10053.0354-.15088Q8.9438,11.86,7.92323,11.85852a.65268.65268,0,0,1-.17431-.018.413.413,0,0,1-.30652-.38532q-.00192-1.54339.00152-3.087a.46722.46722,0,0,1,.13837-.436.387.387,0,0,1,.25629-.10205q1.50083-.00027,3.00177-.00055a.41616.41616,0,0,1,.39929.52765.38789.38789,0,0,1,.0166.153C11.25649,9.63147,11.26277,10.75317,11.25417,11.87439Zm5.3031.005a2.55694,2.55694,0,0,1-1.55652,2.32789c-.02338.01-.04566.02294-.06848.03442l-.03815.01068-.02161.01227a4.5917,4.5917,0,0,1-.5888.12933.2158.2158,0,0,1-.26941-.21692c-.00153-.10736-.00232-.215-.00318-.32245l.00556-.57727c-.00086-.04254-.00238-.08471-.00226-.127.00018-.14783.057-.2102.24078-.25214a1.31856,1.31856,0,0,0,.63361-.29693,1.26351,1.26351,0,0,0,.37756-.73963l-1.8858-.0036c-.06836-.00012-.13678.00086-.20526-.0003a.419.419,0,0,1-.43244-.43982q.00047-1.52445.00238-3.04877l-.0017-.02936a.43441.43441,0,0,1,.20385-.45166A.38972.38972,0,0,1,13.16,7.83q1.49094-.00082,2.98187-.00086a.41625.41625,0,0,1,.39917.52771.39178.39178,0,0,1,.01654.15289Q16.55757,10.19455,16.55727,11.87939Z"
  }));
};
var uil_google_hangouts_default = UilGoogleHangouts;
