"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Testimonials.tsx":
/*!*****************************************!*\
  !*** ./app/components/Testimonials.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronLeft,FaChevronRight!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst images = [\n    \"https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=V04CGZ3T6Zs4UXuw8XmDSs_whtC8VPtdszOZULeRdK0=\",\n    \"https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?b=1&s=612x612&w=0&k=20&c=pUEEkCssZKxtB-xn2YtkrKwFyR6OToucQyBK9e0ZnVc=\",\n    \"https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=V04CGZ3T6Zs4UXuw8XmDSs_whtC8VPtdszOZULeRdK0=\",\n    \"https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?b=1&s=612x612&w=0&k=20&c=pUEEkCssZKxtB-xn2YtkrKwFyR6OToucQyBK9e0ZnVc=\",\n    \"https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=V04CGZ3T6Zs4UXuw8XmDSs_whtC8VPtdszOZULeRdK0=\",\n    \"https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?b=1&s=612x612&w=0&k=20&c=pUEEkCssZKxtB-xn2YtkrKwFyR6OToucQyBK9e0ZnVc=\",\n    \"https://media.istockphoto.com/id/1200980392/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.webp?b=1&s=612x612&w=0&k=20&c=XO54ySpDSrs35CPXsvuXw05j1e0aCNv9Hl33q1TwNN4=\",\n    \"https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?b=1&s=612x612&w=0&k=20&c=pUEEkCssZKxtB-xn2YtkrKwFyR6OToucQyBK9e0ZnVc=\"\n];\nconst Testimonials = ()=>{\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [itemsPerSlide, setItemsPerSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth >= 1024) {\n                setItemsPerSlide(4);\n            } else if (window.innerWidth >= 768) {\n                setItemsPerSlide(2);\n            } else {\n                setItemsPerSlide(1);\n            }\n        };\n        handleResize(); // Set initial value\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    const handleNext = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex + itemsPerSlide >= images.length ? 0 : prevIndex + itemsPerSlide);\n    };\n    const handlePrev = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex - itemsPerSlide < 0 ? images.length - itemsPerSlide : prevIndex - itemsPerSlide);\n    };\n    const indicators = Math.ceil(images.length / itemsPerSlide);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            handleNext();\n        }, 10000);\n        return ()=>clearInterval(interval);\n    }, [\n        currentIndex,\n        itemsPerSlide\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \" text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center\",\n                children: \"Testimonials\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full max-w-6xl mx-auto mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"overflow-hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex transition-transform duration-700 ease-in-out\",\n                            style: {\n                                transform: \"translateX(-\".concat(currentIndex / itemsPerSlide * 100, \"%)\")\n                            },\n                            children: images.map((src, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-shrink-0 p-2 \".concat(itemsPerSlide === 4 ? \"w-1/4\" : itemsPerSlide === 2 ? \"w-1/2\" : \"w-full\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white rounded-lg shadow-lg overflow-hidden\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: src,\n                                            alt: \"Image \".concat(index + 1),\n                                            width: 300,\n                                            height: 200,\n                                            className: \"object-cover w-full h-full\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors\",\n                        onClick: handlePrev,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronLeft, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors\",\n                        onClick: handleNext,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronRight, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2\",\n                        children: Array.from({\n                            length: indicators\n                        }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-3 h-3 rounded-full \".concat(Math.floor(currentIndex / itemsPerSlide) === index ? \"bg-gray-800\" : \"bg-gray-400\"),\n                                onClick: ()=>setCurrentIndex(index * itemsPerSlide)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Shrath\\\\OneDrive\\\\Desktop\\\\Sanchit-Portfolio\\\\app\\\\components\\\\Testimonials.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Testimonials, \"4Lw0VMaSjRljp/TJ9AWaxfsE74c=\");\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Rlc3RpbW9uaWFscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNnQztBQUcvRCxNQUFNSyxTQUFTO0lBQ2I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsTUFBTUMsZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDUyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFbkRDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsZUFBZTtZQUNuQixJQUFJQyxPQUFPQyxVQUFVLElBQUksTUFBTTtnQkFDN0JILGlCQUFpQjtZQUNuQixPQUFPLElBQUlFLE9BQU9DLFVBQVUsSUFBSSxLQUFLO2dCQUNuQ0gsaUJBQWlCO1lBQ25CLE9BQU87Z0JBQ0xBLGlCQUFpQjtZQUNuQjtRQUNGO1FBRUFDLGdCQUFnQixvQkFBb0I7UUFDcENDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLE9BQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7SUFDcEQsR0FBRyxFQUFFO0lBRUwsTUFBTUssYUFBYTtRQUNqQlIsZ0JBQWdCLENBQUNTLFlBQ2ZBLFlBQVlSLGlCQUFpQkosT0FBT2EsTUFBTSxHQUFHLElBQUlELFlBQVlSO0lBRWpFO0lBRUEsTUFBTVUsYUFBYTtRQUNqQlgsZ0JBQWdCLENBQUNTLFlBQ2ZBLFlBQVlSLGdCQUFnQixJQUFJSixPQUFPYSxNQUFNLEdBQUdULGdCQUFnQlEsWUFBWVI7SUFFaEY7SUFFQSxNQUFNVyxhQUFhQyxLQUFLQyxJQUFJLENBQUNqQixPQUFPYSxNQUFNLEdBQUdUO0lBRTdDUixnREFBU0EsQ0FBQztRQUNSLE1BQU1zQixXQUFXQyxZQUFZO1lBQzNCUjtRQUNGLEdBQUc7UUFDSCxPQUFPLElBQU1TLGNBQWNGO0lBQzdCLEdBQUc7UUFBQ2hCO1FBQWNFO0tBQWM7SUFFaEMscUJBQ0UsOERBQUNpQjtRQUFJQyxXQUFZOzswQkFDZiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQWlFOzs7Ozs7MEJBQy9FLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFDQ0MsV0FBVTs0QkFDVkUsT0FBTztnQ0FBRUMsV0FBVyxlQUFvRCxPQUFyQyxlQUFnQnJCLGdCQUFpQixLQUFJOzRCQUFJO3NDQUUzRUosT0FBTzBCLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDaEIsOERBQUNQO29DQUVDQyxXQUFXLHFCQUE4RixPQUF6RWxCLGtCQUFrQixJQUFJLFVBQVVBLGtCQUFrQixJQUFJLFVBQVU7OENBRWhHLDRFQUFDaUI7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUN6QixrREFBS0E7NENBQ0o4QixLQUFLQTs0Q0FDTEUsS0FBSyxTQUFtQixPQUFWRCxRQUFROzRDQUN0QkUsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUlQsV0FBVTs7Ozs7Ozs7Ozs7bUNBVFRNOzs7Ozs7Ozs7Ozs7Ozs7a0NBZ0JiLDhEQUFDSTt3QkFDQ1YsV0FBVTt3QkFDVlcsU0FBU25CO2tDQUVULDRFQUFDaEIsNkdBQWFBOzs7Ozs7Ozs7O2tDQUVoQiw4REFBQ2tDO3dCQUNDVixXQUFVO3dCQUNWVyxTQUFTdEI7a0NBRVQsNEVBQUNaLDhHQUFjQTs7Ozs7Ozs7OztrQ0FFakIsOERBQUNzQjt3QkFBSUMsV0FBVTtrQ0FDWlksTUFBTUMsSUFBSSxDQUFDOzRCQUFFdEIsUUFBUUU7d0JBQVcsR0FBR1csR0FBRyxDQUFDLENBQUNVLEdBQUdSLHNCQUMxQyw4REFBQ0k7Z0NBRUNWLFdBQVcsd0JBRVYsT0FEQ04sS0FBS3FCLEtBQUssQ0FBQ25DLGVBQWVFLG1CQUFtQndCLFFBQVEsZ0JBQWdCO2dDQUV2RUssU0FBUyxJQUFNOUIsZ0JBQWdCeUIsUUFBUXhCOytCQUpsQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV25CO0dBL0ZNM0I7S0FBQUE7QUFpR04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVGVzdGltb25pYWxzLnRzeD8yYmM0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IEZhQ2hldnJvbkxlZnQsIEZhQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQge3Rlc3RpbW9uaWFsMSwgdGVzdGltb25pYWwyLCB0ZXN0aW1vbmlhbDMgfSBmcm9tICcuLi8uLi9zcmMvJ1xyXG5cclxuY29uc3QgaW1hZ2VzID0gW1xyXG4gICdodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC8xMjkyMDE1MjE0L3Bob3RvL3BvcnRyYWl0LWZlbWFsZS1kb2N0b3Itc3RvY2stcGhvdG8ud2VicD9iPTEmcz02MTJ4NjEyJnc9MCZrPTIwJmM9VjA0Q0daM1Q2WnM0VVh1dzhYbURTc193aHRDOFZQdGRzek9aVUxlUmRLMD0nLFxyXG4gICdodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC8xNDE4OTk5NDczL3Bob3RvL2RvY3RvcnMtY29tZm9ydGluZy1kaXNhYmxlZC1lbGRlcmx5LXBhdGllbnQud2VicD9iPTEmcz02MTJ4NjEyJnc9MCZrPTIwJmM9cFVFRWtDc3NaS3h0Qi14bjJZdGtyS3dGeVI2T1RvdWNReUJLOWUwWm5WYz0nLFxyXG4gICdodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC8xMjkyMDE1MjE0L3Bob3RvL3BvcnRyYWl0LWZlbWFsZS1kb2N0b3Itc3RvY2stcGhvdG8ud2VicD9iPTEmcz02MTJ4NjEyJnc9MCZrPTIwJmM9VjA0Q0daM1Q2WnM0VVh1dzhYbURTc193aHRDOFZQdGRzek9aVUxlUmRLMD0nLFxyXG4gICdodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC8xNDE4OTk5NDczL3Bob3RvL2RvY3RvcnMtY29tZm9ydGluZy1kaXNhYmxlZC1lbGRlcmx5LXBhdGllbnQud2VicD9iPTEmcz02MTJ4NjEyJnc9MCZrPTIwJmM9cFVFRWtDc3NaS3h0Qi14bjJZdGtyS3dGeVI2T1RvdWNReUJLOWUwWm5WYz0nLFxyXG4gICdodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC8xMjkyMDE1MjE0L3Bob3RvL3BvcnRyYWl0LWZlbWFsZS1kb2N0b3Itc3RvY2stcGhvdG8ud2VicD9iPTEmcz02MTJ4NjEyJnc9MCZrPTIwJmM9VjA0Q0daM1Q2WnM0VVh1dzhYbURTc193aHRDOFZQdGRzek9aVUxlUmRLMD0nLFxyXG4gICdodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC8xNDE4OTk5NDczL3Bob3RvL2RvY3RvcnMtY29tZm9ydGluZy1kaXNhYmxlZC1lbGRlcmx5LXBhdGllbnQud2VicD9iPTEmcz02MTJ4NjEyJnc9MCZrPTIwJmM9cFVFRWtDc3NaS3h0Qi14bjJZdGtyS3dGeVI2T1RvdWNReUJLOWUwWm5WYz0nLFxyXG4gICdodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC8xMjAwOTgwMzkyL3Bob3RvL21lZGljYWwtY29uY2VwdC1vZi1hc2lhbi1iZWF1dGlmdWwtZmVtYWxlLWRvY3Rvci1pbi13aGl0ZS1jb2F0LXdpdGgtc3RldGhvc2NvcGUtd2Fpc3QtdXAud2VicD9iPTEmcz02MTJ4NjEyJnc9MCZrPTIwJmM9WE81NHlTcERTcnMzNUNQWHN2dVh3MDVqMWUwYUNOdjlIbDMzcTFUd05OND0nLFxyXG4gICdodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC8xNDE4OTk5NDczL3Bob3RvL2RvY3RvcnMtY29tZm9ydGluZy1kaXNhYmxlZC1lbGRlcmx5LXBhdGllbnQud2VicD9iPTEmcz02MTJ4NjEyJnc9MCZrPTIwJmM9cFVFRWtDc3NaS3h0Qi14bjJZdGtyS3dGeVI2T1RvdWNReUJLOWUwWm5WYz0nLFxyXG5dO1xyXG5cclxuY29uc3QgVGVzdGltb25pYWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXRlbXNQZXJTbGlkZSwgc2V0SXRlbXNQZXJTbGlkZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpIHtcclxuICAgICAgICBzZXRJdGVtc1BlclNsaWRlKDQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCkge1xyXG4gICAgICAgIHNldEl0ZW1zUGVyU2xpZGUoMik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXRlbXNQZXJTbGlkZSgxKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVSZXNpemUoKTsgLy8gU2V0IGluaXRpYWwgdmFsdWVcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT5cclxuICAgICAgcHJldkluZGV4ICsgaXRlbXNQZXJTbGlkZSA+PSBpbWFnZXMubGVuZ3RoID8gMCA6IHByZXZJbmRleCArIGl0ZW1zUGVyU2xpZGVcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PlxyXG4gICAgICBwcmV2SW5kZXggLSBpdGVtc1BlclNsaWRlIDwgMCA/IGltYWdlcy5sZW5ndGggLSBpdGVtc1BlclNsaWRlIDogcHJldkluZGV4IC0gaXRlbXNQZXJTbGlkZVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbmRpY2F0b3JzID0gTWF0aC5jZWlsKGltYWdlcy5sZW5ndGggLyBpdGVtc1BlclNsaWRlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBoYW5kbGVOZXh0KCk7XHJcbiAgICB9LCAxMDAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW2N1cnJlbnRJbmRleCwgaXRlbXNQZXJTbGlkZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSAnYmctZ3JheS0xMDAnPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiIHRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTQgdGV4dC1jZW50ZXJcIj5UZXN0aW1vbmlhbHM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtYXgtdy02eGwgbXgtYXV0byBtdC04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi03MDAgZWFzZS1pbi1vdXRcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0keyhjdXJyZW50SW5kZXggLyBpdGVtc1BlclNsaWRlKSAqIDEwMH0lKWAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKHNyYywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC1zaHJpbmstMCBwLTIgJHtpdGVtc1BlclNsaWRlID09PSA0ID8gJ3ctMS80JyA6IGl0ZW1zUGVyU2xpZGUgPT09IDIgPyAndy0xLzInIDogJ3ctZnVsbCd9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2BJbWFnZSAke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTQgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctZ3JheS04MDAgdGV4dC13aGl0ZSBwLTMgcm91bmRlZC1mdWxsIHNoYWRvdy1sZyBob3ZlcjpiZy1ncmF5LTcwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGYUNoZXZyb25MZWZ0IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiByaWdodC00IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLWdyYXktODAwIHRleHQtd2hpdGUgcC0zIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGcgaG92ZXI6YmctZ3JheS03MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIGZsZXggc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogaW5kaWNhdG9ycyB9KS5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMyBoLTMgcm91bmRlZC1mdWxsICR7XHJcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGN1cnJlbnRJbmRleCAvIGl0ZW1zUGVyU2xpZGUpID09PSBpbmRleCA/ICdiZy1ncmF5LTgwMCcgOiAnYmctZ3JheS00MDAnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEluZGV4KGluZGV4ICogaXRlbXNQZXJTbGlkZSl9XHJcbiAgICAgICAgICAgID48L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiRmFDaGV2cm9uTGVmdCIsIkZhQ2hldnJvblJpZ2h0IiwiaW1hZ2VzIiwiVGVzdGltb25pYWxzIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiaXRlbXNQZXJTbGlkZSIsInNldEl0ZW1zUGVyU2xpZGUiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVOZXh0IiwicHJldkluZGV4IiwibGVuZ3RoIiwiaGFuZGxlUHJldiIsImluZGljYXRvcnMiLCJNYXRoIiwiY2VpbCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzdHlsZSIsInRyYW5zZm9ybSIsIm1hcCIsInNyYyIsImluZGV4IiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b24iLCJvbkNsaWNrIiwiQXJyYXkiLCJmcm9tIiwiXyIsImZsb29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Testimonials.tsx\n"));

/***/ })

});