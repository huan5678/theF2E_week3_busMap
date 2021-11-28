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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _api_fetchData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/fetchData */ \"./api/fetchData.js\");\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icons */ \"./components/icons/index.jsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.jsx\");\n/* harmony import */ var _components_StateCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/StateCard */ \"./components/StateCard.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar estimatedTimeOfArrivalUrl = function(RouteName, City) {\n    return \"https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/\".concat(City, \"/\").concat(RouteName, \"?$format=JSON\");\n};\nvar displayStopOfRoute = function(RouteName, City) {\n    return \"https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/\".concat(City, \"/\").concat(RouteName, \"?$format=JSON\");\n};\nvar RealTimeByFrequency = function(RouteName, City) {\n    return \"https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/City/\".concat(City, \"/\").concat(RouteName, \"?$format=JSON\");\n};\n_c = RealTimeByFrequency;\nvar RealTimeNearStop = function(RouteName, City) {\n    return \"https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeNearStop/City/\".concat(City, \"/\").concat(RouteName, \"?$format=JSON\");\n};\n_c1 = RealTimeNearStop;\nvar Detail = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var query = router.query;\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(RealTimeByFrequency(query.name, query.city), _api_fetchData__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), realTimeFrequencyData = ref.data, realTimeFrequencyError = ref.error;\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(estimatedTimeOfArrivalUrl(query.name, query.city), _api_fetchData__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), estimatedTimeOfArrivalData = ref1.data, EstimatedTimeOfArrivalError = ref1.error;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(displayStopOfRoute(query.name, query.city), _api_fetchData__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), displayStopOfRouteData = ref2.data, displayStopOfRouteError = ref2.error;\n    var ref3 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(RealTimeNearStop(query.name, query.city), _api_fetchData__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), realTimeNearStopData = ref3.data, realTimeNearStopError = ref3.error;\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"to\"), roundTrip = ref4[0], setRoundTrip = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), result = ref5[0], setResult = ref5[1];\n    var calcResult = function() {\n        var resultArr = [];\n        realTimeNearStopData !== undefined ? realTimeNearStopData !== undefined ? resultArr = realTimeFrequencyData.map(function(item, idx) {\n            return Object.assign({\n            }, item, realTimeNearStopData[idx]);\n        }) : null : null;\n        setResult(resultArr);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(query);\n        console.log(realTimeFrequencyData);\n        console.log(realTimeNearStopData);\n        console.log(estimatedTimeOfArrivalData);\n        console.log(displayStopOfRouteData);\n        calcResult();\n        console.log(result);\n    }, [\n        realTimeNearStopData\n    ]);\n    var handleRoundTrip = function(e) {\n        setRoundTrip(e);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n        className: \"bg-gray-light min-h-screen pb-7.5\",\n        __source: {\n            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n            lineNumber: 76,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"bg-primary rounded-b-2xl mb-7.5\",\n                __source: {\n                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container mx-auto py-4 px-7.5\",\n                    __source: {\n                        fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex justify-between items-end\",\n                        __source: {\n                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: \"text-primary bg-blue rounded-2xl px-2 mb-2 inline-block\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: query.cityName\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                        className: \"text-white font-bold text-h3\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: query.name\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"flex items-center \",\n                                __source: {\n                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        type: \"button\",\n                                        className: \"px-2 pt-2\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_6__.Stop, {\n                                            className: \"fill-current text-white\",\n                                            __source: {\n                                                fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        type: \"button\",\n                                        className: \"px-2 pt-2\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_6__.Info, {\n                                            className: \"fill-current text-white\",\n                                            __source: {\n                                                fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        type: \"button\",\n                                        className: \"px-2 pt-2\",\n                                        __source: {\n                                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_6__.Map, {\n                                            className: \"fill-current text-white\",\n                                            __source: {\n                                                fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this\n                                        })\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                    lineNumber: 100,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex justify-between items-center px-4 gap-4 mb-7.5\",\n                        __source: {\n                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                            lineNumber: 101,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                type: \"button\",\n                                className: \"py-2 \".concat(roundTrip === \"to\" ? \"bg-primary text-white\" : \"bg-gray-dark text-black\", \" rounded-2xl grid place-content-center w-1/2\"),\n                                onClick: function() {\n                                    return handleRoundTrip(\"to\");\n                                },\n                                __source: {\n                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: query.startStop\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_6__.LR, {\n                                className: \"fill-current text-gray-dark\",\n                                __source: {\n                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                type: \"button\",\n                                className: \"py-2 \".concat(roundTrip === \"for\" ? \"bg-primary text-white\" : \"bg-gray-dark text-black\", \" rounded-2xl grid place-content-center w-1/2\"),\n                                onClick: function(e) {\n                                    return handleRoundTrip(\"for\");\n                                },\n                                __source: {\n                                    fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: query.endStop\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                        className: \"pl-4\",\n                        __source: {\n                            fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                            lineNumber: 126,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: displayStopOfRouteData !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StateCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            displayStopOfRouteData: displayStopOfRouteData,\n                            roundTrip: roundTrip,\n                            result: result,\n                            __source: {\n                                fileName: \"/Volumes/DATA/Design_Craft/Web/3rd TheF2E/week3_busMap/pages/detail.js\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        }) : null\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Detail, \"od5JB6GHvKzo5jipw+Trq73EO1Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c2 = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"RealTimeByFrequency\");\n$RefreshReg$(_c1, \"RealTimeNearStop\");\n$RefreshReg$(_c2, \"Detail\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZCOzs7Ozs7OztpR0FDMUNLLENBQU07Z0NBQ0xDLElBQUksRUFBQyxDQUFRO2dDQUNiTixTQUFTLEVBQUcsQ0FBSyxPQUloQixNQUE0QyxDQUgzQ2pCLFNBQVMsS0FBSyxDQUFLLE9BQ2YsQ0FBdUIseUJBQ3ZCLENBQXlCLDBCQUM5QixDQUE0QztnQ0FDN0N3QixPQUFPLEVBQUUsUUFBUSxDQUFQVCxDQUFDO29DQUFLRCxNQUFNLENBQU5BLGVBQWUsQ0FBQyxDQUFLOzs7Ozs7OzswQ0FFcEMzQixLQUFLLENBQUN1QyxPQUFPOzs7O3lGQUdqQkMsQ0FBRTt3QkFBQ1YsU0FBUyxFQUFDLENBQU07Ozs7Ozs7a0NBRWhCckIsc0JBQXNCLEtBQUtVLFNBQVMsd0VBQ25DNUIsNkRBQVM7NEJBQ1JrQixzQkFBc0IsRUFBRUEsc0JBQXNCOzRCQUM5Q0ksU0FBUyxFQUFFQSxTQUFTOzRCQUNwQkUsTUFBTSxFQUFFQSxNQUFNOzs7Ozs7OzZCQUVaLElBQUk7Ozs7OztBQU1wQixDQUFDO0dBckhLakIsTUFBTTs7UUFFS2pCLGtEQUFTO1FBRytDQywyQ0FBTTtRQU96RUEsMkNBQU07UUFFUkEsMkNBQU07UUFDNkRBLDJDQUFNOzs7TUFmdkVnQixNQUFNO0FBdUhaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsLmpzP2JiYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IGZldGNoRGF0YSBmcm9tIFwiLi4vYXBpL2ZldGNoRGF0YVwiO1xuaW1wb3J0IHsgSW5mbywgTWFwLCBTdG9wLCBMUiwgTWVudTIsIEJ1cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbnMnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCBTdGF0ZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9TdGF0ZUNhcmQnXG5cblxuY29uc3QgZXN0aW1hdGVkVGltZU9mQXJyaXZhbFVybCA9IChSb3V0ZU5hbWUsIENpdHkpID0+XG4gIGBodHRwczovL3B0eC50cmFuc3BvcnRkYXRhLnR3L01PVEMvdjIvQnVzL0VzdGltYXRlZFRpbWVPZkFycml2YWwvQ2l0eS8ke0NpdHl9LyR7Um91dGVOYW1lfT8kZm9ybWF0PUpTT05gO1xuXG5jb25zdCBkaXNwbGF5U3RvcE9mUm91dGUgPSAoUm91dGVOYW1lLCBDaXR5KSA9PlxuICBgaHR0cHM6Ly9wdHgudHJhbnNwb3J0ZGF0YS50dy9NT1RDL3YyL0J1cy9EaXNwbGF5U3RvcE9mUm91dGUvQ2l0eS8ke0NpdHl9LyR7Um91dGVOYW1lfT8kZm9ybWF0PUpTT05gO1xuXG5jb25zdCBSZWFsVGltZUJ5RnJlcXVlbmN5ID0gKCBSb3V0ZU5hbWUsIENpdHkgKSA9PlxuICBgaHR0cHM6Ly9wdHgudHJhbnNwb3J0ZGF0YS50dy9NT1RDL3YyL0J1cy9SZWFsVGltZUJ5RnJlcXVlbmN5L0NpdHkvJHtDaXR5fS8ke1JvdXRlTmFtZX0/JGZvcm1hdD1KU09OYDtcblxuY29uc3QgUmVhbFRpbWVOZWFyU3RvcCA9ICggUm91dGVOYW1lLCBDaXR5ICkgPT5cbiAgYGh0dHBzOi8vcHR4LnRyYW5zcG9ydGRhdGEudHcvTU9UQy92Mi9CdXMvUmVhbFRpbWVOZWFyU3RvcC9DaXR5LyR7Q2l0eX0vJHtSb3V0ZU5hbWV9PyRmb3JtYXQ9SlNPTmA7XG5cbmNvbnN0IERldGFpbCA9ICgpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gcm91dGVyO1xuXG4gIGNvbnN0IHsgZGF0YTogcmVhbFRpbWVGcmVxdWVuY3lEYXRhLCBlcnJvcjogcmVhbFRpbWVGcmVxdWVuY3lFcnJvciB9ID0gdXNlU1dSKFxuICAgIFJlYWxUaW1lQnlGcmVxdWVuY3kocXVlcnkubmFtZSwgcXVlcnkuY2l0eSksXG4gICAgZmV0Y2hEYXRhXG4gICk7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiBlc3RpbWF0ZWRUaW1lT2ZBcnJpdmFsRGF0YSxcbiAgICBlcnJvcjogRXN0aW1hdGVkVGltZU9mQXJyaXZhbEVycm9yLFxuICB9ID0gdXNlU1dSKGVzdGltYXRlZFRpbWVPZkFycml2YWxVcmwocXVlcnkubmFtZSwgcXVlcnkuY2l0eSksIGZldGNoRGF0YSk7XG4gIGNvbnN0IHsgZGF0YTogZGlzcGxheVN0b3BPZlJvdXRlRGF0YSwgZXJyb3I6IGRpc3BsYXlTdG9wT2ZSb3V0ZUVycm9yIH0gPVxuICAgIHVzZVNXUihkaXNwbGF5U3RvcE9mUm91dGUocXVlcnkubmFtZSwgcXVlcnkuY2l0eSksIGZldGNoRGF0YSk7XG4gIGNvbnN0IHsgZGF0YTogcmVhbFRpbWVOZWFyU3RvcERhdGEsIGVycm9yOiByZWFsVGltZU5lYXJTdG9wRXJyb3IgfSA9IHVzZVNXUihcbiAgICBSZWFsVGltZU5lYXJTdG9wKHF1ZXJ5Lm5hbWUsIHF1ZXJ5LmNpdHkpLFxuICAgIGZldGNoRGF0YVxuICApO1xuXG4gIGNvbnN0IFtyb3VuZFRyaXAsIHNldFJvdW5kVHJpcF0gPSB1c2VTdGF0ZShcInRvXCIpO1xuICBcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gIGNvbnN0IGNhbGNSZXN1bHQgPSAoKSA9PiB7XG4gICAgbGV0IHJlc3VsdEFyciA9IFtdO1xuICAgIChyZWFsVGltZU5lYXJTdG9wRGF0YSkgIT09IHVuZGVmaW5lZFxuICAgICAgPyByZWFsVGltZU5lYXJTdG9wRGF0YSAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgIChyZXN1bHRBcnIgPSByZWFsVGltZUZyZXF1ZW5jeURhdGEubWFwKChpdGVtLCBpZHgpID0+XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCByZWFsVGltZU5lYXJTdG9wRGF0YVtpZHhdKVxuICAgICAgICAgICkpXG4gICAgICAgIClcbiAgICAgIDogbnVsbCA6IG51bGw7XG4gICAgc2V0UmVzdWx0KHJlc3VsdEFycik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgY29uc29sZS5sb2cocmVhbFRpbWVGcmVxdWVuY3lEYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZWFsVGltZU5lYXJTdG9wRGF0YSk7XG4gICAgY29uc29sZS5sb2coZXN0aW1hdGVkVGltZU9mQXJyaXZhbERhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRpc3BsYXlTdG9wT2ZSb3V0ZURhdGEpO1xuICAgIGNhbGNSZXN1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9LCBbcmVhbFRpbWVOZWFyU3RvcERhdGFdKTtcblxuICBjb25zdCBoYW5kbGVSb3VuZFRyaXAgPSAoZSkgPT4ge1xuICAgIHNldFJvdW5kVHJpcChlKTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LWxpZ2h0IG1pbi1oLXNjcmVlbiBwYi03LjVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSByb3VuZGVkLWItMnhsIG1iLTcuNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LTQgcHgtNy41XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBiZy1ibHVlIHJvdW5kZWQtMnhsIHB4LTIgbWItMiBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICB7cXVlcnkuY2l0eU5hbWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtaDNcIj57cXVlcnkubmFtZX08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJweC0yIHB0LTJcIj5cbiAgICAgICAgICAgICAgICA8U3RvcCBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJweC0yIHB0LTJcIj5cbiAgICAgICAgICAgICAgICA8SW5mbyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJweC0yIHB0LTJcIj5cbiAgICAgICAgICAgICAgICA8TWFwIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB4LTQgZ2FwLTQgbWItNy41XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweS0yICR7XG4gICAgICAgICAgICAgIHJvdW5kVHJpcCA9PT0gXCJ0b1wiXG4gICAgICAgICAgICAgICAgPyBcImJnLXByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgOiBcImJnLWdyYXktZGFyayB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgIH0gcm91bmRlZC0yeGwgZ3JpZCBwbGFjZS1jb250ZW50LWNlbnRlciB3LTEvMmB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSb3VuZFRyaXAoXCJ0b1wiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cXVlcnkuc3RhcnRTdG9wfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxMUiBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LWRhcmtcIiAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMiAke1xuICAgICAgICAgICAgICByb3VuZFRyaXAgPT09IFwiZm9yXCJcbiAgICAgICAgICAgICAgICA/IFwiYmctcHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS1kYXJrIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgfSByb3VuZGVkLTJ4bCBncmlkIHBsYWNlLWNvbnRlbnQtY2VudGVyIHctMS8yYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVSb3VuZFRyaXAoXCJmb3JcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3F1ZXJ5LmVuZFN0b3B9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGwtNFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpc3BsYXlTdG9wT2ZSb3V0ZURhdGEgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgIDxTdGF0ZUNhcmRcbiAgICAgICAgICAgICAgZGlzcGxheVN0b3BPZlJvdXRlRGF0YT17ZGlzcGxheVN0b3BPZlJvdXRlRGF0YX1cbiAgICAgICAgICAgICAgcm91bmRUcmlwPXtyb3VuZFRyaXB9XG4gICAgICAgICAgICAgIHJlc3VsdD17cmVzdWx0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZVNXUiIsImZldGNoRGF0YSIsIkluZm8iLCJNYXAiLCJTdG9wIiwiTFIiLCJNZW51MiIsIkJ1cyIsIkNhcmQiLCJTdGF0ZUNhcmQiLCJlc3RpbWF0ZWRUaW1lT2ZBcnJpdmFsVXJsIiwiUm91dGVOYW1lIiwiQ2l0eSIsImRpc3BsYXlTdG9wT2ZSb3V0ZSIsIlJlYWxUaW1lQnlGcmVxdWVuY3kiLCJSZWFsVGltZU5lYXJTdG9wIiwiRGV0YWlsIiwicm91dGVyIiwicXVlcnkiLCJuYW1lIiwiY2l0eSIsInJlYWxUaW1lRnJlcXVlbmN5RGF0YSIsImRhdGEiLCJyZWFsVGltZUZyZXF1ZW5jeUVycm9yIiwiZXJyb3IiLCJlc3RpbWF0ZWRUaW1lT2ZBcnJpdmFsRGF0YSIsIkVzdGltYXRlZFRpbWVPZkFycml2YWxFcnJvciIsImRpc3BsYXlTdG9wT2ZSb3V0ZURhdGEiLCJkaXNwbGF5U3RvcE9mUm91dGVFcnJvciIsInJlYWxUaW1lTmVhclN0b3BEYXRhIiwicmVhbFRpbWVOZWFyU3RvcEVycm9yIiwicm91bmRUcmlwIiwic2V0Um91bmRUcmlwIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY2FsY1Jlc3VsdCIsInJlc3VsdEFyciIsInVuZGVmaW5lZCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJPYmplY3QiLCJhc3NpZ24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUm91bmRUcmlwIiwiZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIiwiY2l0eU5hbWUiLCJoMSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwic3RhcnRTdG9wIiwiZW5kU3RvcCIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/detail.js\n");

/***/ })

});