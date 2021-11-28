"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _api_fetchData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/fetchData */ \"./api/fetchData.js\");\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/icons */ \"./components/icons/index.jsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar busUrl = function(RouteName, City) {\n    return \"https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/City/\".concat(City, \"/\").concat(RouteName, \"?$format=JSON\");\n};\nvar estimatedTimeOfArrivalUrl = function(RouteName, City) {\n    return \"https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/\".concat(City, \"/\").concat(RouteName, \"?$format=JSON\");\n};\nvar stopOfRouteUrl = function(RouteName, City) {\n    return \"https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/\".concat(City, \"/\").concat(RouteName, \"?$format=JSON\");\n};\nvar Detail = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var query = router.query;\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(busUrl(query.name, query.city), _api_fetchData__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), data = ref.data, error = ref.error;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(estimatedTimeOfArrivalUrl(query.name, query.city), _api_fetchData__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), realTimeData = ref1.data, realTimeError = ref1.error;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(stopOfRouteUrl(query.name, query.city), _api_fetchData__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), stopOfRouteData = ref2.data, stopOfRouteError = ref2.error;\n    console.log(query);\n    console.log(data);\n    console.log(realTimeData);\n    console.log(stopOfRouteData);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n        className: \"bg-gray-light\",\n        __source: {\n            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n            lineNumber: 33,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"bg-primary rounded-b-2xl mb-7.5\",\n                __source: {\n                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container mx-auto p-4\",\n                    __source: {\n                        fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex justify-between items-end\",\n                        __source: {\n                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: \"text-primary bg-blue rounded-2xl px-2 mb-2 inline-block\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: query.cityName\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                        className: \"text-white font-bold text-h3\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: query.name\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"flex items-center \",\n                                __source: {\n                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        type: \"button\",\n                                        className: \"px-2 pt-2\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_5__.Stop, {\n                                            className: \"fill-current text-white\",\n                                            __source: {\n                                                fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        type: \"button\",\n                                        className: \"px-2 pt-2\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_5__.Info, {\n                                            className: \"fill-current text-white\",\n                                            __source: {\n                                                fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        type: \"button\",\n                                        className: \"px-2 pt-2\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_5__.Map, {\n                                            className: \"fill-current text-white\",\n                                            __source: {\n                                                fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this\n                                        })\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex justify-between items-center px-4 gap-4 mb-7.5\",\n                        __source: {\n                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"py-2 bg-primary text-white rounded-2xl grid place-content-center w-1/2\",\n                                __source: {\n                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: query.startStop\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_5__.LR, {\n                                className: \"fill-current text-gray-dark\",\n                                __source: {\n                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"py-2 bg-gray-dark rounded-2xl grid place-content-center w-1/2\",\n                                __source: {\n                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: query.endStop\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                        className: \"pl-2\",\n                        __source: {\n                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                            className: \"flex justify-center items-center mb-7.5\",\n                            __source: {\n                                fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    className: \"bg-white flex-1\",\n                                    __source: {\n                                        fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"flex justify-between items-center py-1 gap-4\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                                className: \"flex items-center space-x-2\",\n                                                __source: {\n                                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                        className: \"bg-gray-dark text-white rounded-2xl px-4 py-1\",\n                                                        __source: {\n                                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: \"未發車\"\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                                        className: \"font-bold\",\n                                                        __source: {\n                                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: \"東方社區\"\n                                                    })\n                                                ]\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                className: \"bg-gray-light text-gray-dark rounded-2xl px-2 py-1\",\n                                                __source: {\n                                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"01\"\n                                            })\n                                        ]\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                    className: \"px-3 py-4\",\n                                    __source: {\n                                        fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_5__.Menu2, {\n                                        className: \"fill-current text-gray-dark\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Detail, \"sTUk5a6ZDwy161SlkvfYly5gpRU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXJFOzs7OztxR0FHSEssQ0FBTTtvQ0FBQ0wsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7bUhBQzFCckIsb0RBQUs7d0NBQUNxQixTQUFTLEVBQUMsQ0FBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUQsQ0FBQztHQXZFS2QsTUFBTTs7UUFFS2Qsa0RBQVM7UUFHQUMsMkNBQU07UUFDdUJBLDJDQUFNO1FBQ0FBLDJDQUFNOzs7S0FQN0RhLE1BQU07QUF5RVosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZXRhaWwuanM/YmJjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgZmV0Y2hEYXRhIGZyb20gXCIuLi9hcGkvZmV0Y2hEYXRhXCI7XG5pbXBvcnQgeyBJbmZvLCBNYXAsIFN0b3AsIExSLE1lbnUyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29ucyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnO1xuXG5jb25zdCBidXNVcmwgPSAoUm91dGVOYW1lLCBDaXR5KSA9PlxuICBgaHR0cHM6Ly9wdHgudHJhbnNwb3J0ZGF0YS50dy9NT1RDL3YyL0J1cy9SZWFsVGltZUJ5RnJlcXVlbmN5L0NpdHkvJHtDaXR5fS8ke1JvdXRlTmFtZX0/JGZvcm1hdD1KU09OYDtcblxuY29uc3QgZXN0aW1hdGVkVGltZU9mQXJyaXZhbFVybCA9IChSb3V0ZU5hbWUsIENpdHkpID0+XG4gIGBodHRwczovL3B0eC50cmFuc3BvcnRkYXRhLnR3L01PVEMvdjIvQnVzL0VzdGltYXRlZFRpbWVPZkFycml2YWwvQ2l0eS8ke0NpdHl9LyR7Um91dGVOYW1lfT8kZm9ybWF0PUpTT05gO1xuXG5jb25zdCBzdG9wT2ZSb3V0ZVVybCA9IChSb3V0ZU5hbWUsIENpdHkpID0+XG4gIGBodHRwczovL3B0eC50cmFuc3BvcnRkYXRhLnR3L01PVEMvdjIvQnVzL1N0b3BPZlJvdXRlL0NpdHkvJHtDaXR5fS8ke1JvdXRlTmFtZX0/JGZvcm1hdD1KU09OYDtcblxuXG5cbmNvbnN0IERldGFpbCA9ICgpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gcm91dGVyO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihidXNVcmwocXVlcnkubmFtZSwgcXVlcnkuY2l0eSksIGZldGNoRGF0YSk7XG4gIGNvbnN0IHsgZGF0YTogcmVhbFRpbWVEYXRhLCBlcnJvcjogcmVhbFRpbWVFcnJvciB9ID0gdXNlU1dSKGVzdGltYXRlZFRpbWVPZkFycml2YWxVcmwocXVlcnkubmFtZSwgcXVlcnkuY2l0eSksIGZldGNoRGF0YSk7XG4gIGNvbnN0IHsgZGF0YTogc3RvcE9mUm91dGVEYXRhLCBlcnJvcjogc3RvcE9mUm91dGVFcnJvciB9ID0gdXNlU1dSKHN0b3BPZlJvdXRlVXJsKHF1ZXJ5Lm5hbWUsIHF1ZXJ5LmNpdHkpLCBmZXRjaERhdGEpO1xuXG4gIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnNvbGUubG9nKHJlYWxUaW1lRGF0YSk7XG4gIGNvbnNvbGUubG9nKHN0b3BPZlJvdXRlRGF0YSk7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiYmctZ3JheS1saWdodFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHJvdW5kZWQtYi0yeGwgbWItNy41XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBiZy1ibHVlIHJvdW5kZWQtMnhsIHB4LTIgbWItMiBpbmxpbmUtYmxvY2tcIj57IHF1ZXJ5LmNpdHlOYW1lIH08L3NwYW4+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWgzXCI+eyBxdWVyeS5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInB4LTIgcHQtMlwiPlxuICAgICAgICAgICAgICAgIDxTdG9wIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInB4LTIgcHQtMlwiPlxuICAgICAgICAgICAgICAgIDxJbmZvIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInB4LTIgcHQtMlwiPlxuICAgICAgICAgICAgICAgIDxNYXAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtNCBnYXAtNCBtYi03LjVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHJvdW5kZWQtMnhsIGdyaWQgcGxhY2UtY29udGVudC1jZW50ZXIgdy0xLzJcIj5cbiAgICAgICAgICAgIHtxdWVyeS5zdGFydFN0b3B9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExSIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LWdyYXktZGFya1wiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIGJnLWdyYXktZGFyayByb3VuZGVkLTJ4bCBncmlkIHBsYWNlLWNvbnRlbnQtY2VudGVyIHctMS8yXCI+XG4gICAgICAgICAgICB7cXVlcnkuZW5kU3RvcH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC0yXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1iLTcuNVwiPlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleC0xXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB5LTEgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JheS1kYXJrIHRleHQtd2hpdGUgcm91bmRlZC0yeGwgcHgtNCBweS0xXCI+XG4gICAgICAgICAgICAgICAgICAgIOacqueZvOi7ilxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICDmnbHmlrnnpL7ljYBcbiAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JheS1saWdodCB0ZXh0LWdyYXktZGFyayByb3VuZGVkLTJ4bCBweC0yIHB5LTFcIj5cbiAgICAgICAgICAgICAgICAgIDAxXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtMyBweS00XCI+XG4gICAgICAgICAgICAgIDxNZW51MiBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LWRhcmtcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJmZXRjaERhdGEiLCJJbmZvIiwiTWFwIiwiU3RvcCIsIkxSIiwiTWVudTIiLCJDYXJkIiwiYnVzVXJsIiwiUm91dGVOYW1lIiwiQ2l0eSIsImVzdGltYXRlZFRpbWVPZkFycml2YWxVcmwiLCJzdG9wT2ZSb3V0ZVVybCIsIkRldGFpbCIsInJvdXRlciIsInF1ZXJ5IiwibmFtZSIsImNpdHkiLCJkYXRhIiwiZXJyb3IiLCJyZWFsVGltZURhdGEiLCJyZWFsVGltZUVycm9yIiwic3RvcE9mUm91dGVEYXRhIiwic3RvcE9mUm91dGVFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3BhbiIsImNpdHlOYW1lIiwiaDEiLCJidXR0b24iLCJ0eXBlIiwic3RhcnRTdG9wIiwiZW5kU3RvcCIsInVsIiwibGkiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail.js\n");

/***/ })

});