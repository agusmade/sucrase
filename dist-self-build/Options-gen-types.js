"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }/**
 * This module was automatically generated by `ts-interface-builder`
 */
var _tsinterfacechecker = require('ts-interface-checker'); var t = _interopRequireWildcard(_tsinterfacechecker);
// tslint:disable:object-literal-key-quotes

 const Transform = t.union(
  t.lit("jsx"),
  t.lit("typescript"),
  t.lit("flow"),
  t.lit("imports"),
  t.lit("react-hot-loader"),
  t.lit("jest"),
); exports.Transform = Transform;

 const SourceMapOptions = t.iface([], {
  compiledFilename: "string",
}); exports.SourceMapOptions = SourceMapOptions;

 const CJSImportProcessor = t.iface([], {}); exports.CJSImportProcessor = CJSImportProcessor;

 const ImportInfo = t.iface([], {}); exports.ImportInfo = ImportInfo;

 const ImportReplacementFunction = t.func(
  t.array(t.union("boolean", "string")),
  t.param("path", "string"),
  t.param("importInfo", "ImportInfo"),
  t.param("processor", "CJSImportProcessor"),
); exports.ImportReplacementFunction = ImportReplacementFunction;

 const Options = t.iface([], {
  transforms: t.array("Transform"),
  disableESTransforms: t.opt("boolean"),
  jsxRuntime: t.opt(t.union(t.lit("classic"), t.lit("automatic"), t.lit("preserve"))),
  production: t.opt("boolean"),
  jsxImportSource: t.opt("string"),
  jsxPragma: t.opt("string"),
  jsxFragmentPragma: t.opt("string"),
  keepUnusedImports: t.opt("boolean"),
  preserveDynamicImport: t.opt("boolean"),
  injectCreateRequireForImportRequire: t.opt("boolean"),
  enableLegacyTypeScriptModuleInterop: t.opt("boolean"),
  enableLegacyBabel5ModuleInterop: t.opt("boolean"),
  sourceMapOptions: t.opt("SourceMapOptions"),
  filePath: t.opt("string"),
  importReplacement: t.opt("ImportReplacementFunction"),
}); exports.Options = Options;

const exportedTypeSuite = {
  Transform: exports.Transform,
  SourceMapOptions: exports.SourceMapOptions,
  Options: exports.Options,
  ImportReplacementFunction: exports.ImportReplacementFunction,
  ImportInfo: exports.ImportInfo,
  CJSImportProcessor: exports.CJSImportProcessor,
};
exports. default = exportedTypeSuite;
