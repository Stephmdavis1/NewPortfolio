"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _public_images_profile_Steph2bg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/profile/Steph2bg.png */ \"./public/images/profile/Steph2bg.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_HireMe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/HireMe */ \"./src/components/HireMe.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_images_icons_color_picker_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/icons/color-picker.png */ \"./public/images/icons/color-picker.png\");\n/* harmony import */ var _public_images_icons_eraser_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/images/icons/eraser.png */ \"./public/images/icons/eraser.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [isClicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    const colors = [\n        \"#CCF5AC\",\n        \"#F9F5E3\",\n        \"#EF798A\",\n        \"#D14081\",\n        \"#7E2E84\"\n    ];\n    // ['#F2F6D0', '#D0E1D4', '#D9D2B6', '#E4BE9E', '#71697A']\n    const bgColor = [\n        \"#f5f5f5\"\n    ];\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue)(200);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue)(200);\n    const rotateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useTransform)(y, [\n        0,\n        400\n    ], [\n        15,\n        -15\n    ]);\n    const rotateY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useTransform)(x, [\n        0,\n        400\n    ], [\n        -10,\n        10\n    ]);\n    function handleMouse(event) {\n        x.set(event.pageX);\n        y.set(event.pageY);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Stephanie's Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.main, {\n                className: \"flex items-center text-dark w-full lgmin-h-screen dark:!text-light dark:!bg-dark\",\n                animate: {\n                    backgroundColor: isClicked ? colors : bgColor\n                },\n                transition: {\n                    repeat: Infinity,\n                    repeatType: \"mirror\",\n                    ease: \"easeInOut\",\n                    duration: 4\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col ml-4 gap-12 top-[110px] absolute \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {\n                            className: \"flex flex-col text-center text-[7px] md:text-[9px] items-center justify-center w-[1rem] h-[1rem] lg:w-[2.5rem] lg:h-[2.5rem] dark:hidden text-dark cursor-grab\",\n                            // drag\n                            // dragElastic={1}\n                            // dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}\n                            onClick: ()=>setClicked(true),\n                            whileHover: {\n                                cursor: \"grabbing\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: _public_images_icons_color_picker_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                                    alt: \"color picker\",\n                                    className: \"pointer-events-none cursor-none \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                \"Click Me\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-12 ml-4 top-[160px] md:top-[190px] absolute \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {\n                            className: \"flex flex-col text-center items-center text-[7px] md:text-[9px] justify-center w-[1rem] h-[1rem] lg:w-[2.5rem] lg:h-[2.5rem] dark:hidden text-dark cursor-pointer shadow-sm\",\n                            // drag\n                            // dragElastic={1}\n                            // dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}\n                            onClickEnd: ()=>setClicked(false),\n                            whileHover: {\n                                cursor: \"grabbing\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: _public_images_icons_eraser_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                                    alt: \"magic eraser\",\n                                    className: \"pointer-events-none cursor-none\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                \"Click To Reset\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mb-48 lg:mb-[30rem] mt-24 relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {\n                            className: \"flex items-center justify-between h-80 w-full cursor-none  dark:!text-light dark:!bg-dark\",\n                            animate: {\n                                backgroundColor: isClicked ? colors : bgColor\n                            },\n                            transition: {\n                                repeat: Infinity,\n                                repeatType: \"mirror\",\n                                ease: \"easeInOut\",\n                                duration: 4\n                            },\n                            onMouseMove: handleMouse,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {\n                                    className: \"w-1/2 flex items-center justify-center relative cursor-grab\",\n                                    style: {\n                                        rotateX: rotateX,\n                                        rotateY: rotateY\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: _public_images_profile_Steph2bg_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                        alt: \"developer\",\n                                        className: \"lg:w-[85%] lg:h-[85%] pointer-events-none cursor-none mt-24 ml-28  md:mt-72 lg:mt-[40rem]  \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-1/2 flex flex-col items-center self-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            text: \"Hi, I'm Stephanie. A Front End Web Designer\",\n                                            className: \"!text-2xl md:text-3xl xl:!text-5xl !text-left mt-48\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 mx-2 lg:my-4 text-xs md:text-md lg:text-lg font-medium\",\n                                            children: \"As a designer I strive to strongly focus on building solutions that users actually want, and to create beautiful, functional UI's.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center self-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                    href: \"/StephanieDavisResume.pdf\",\n                                                    target: \"_blank\",\n                                                    className: \"flex items-center mb-8 lg:mb-10 bg-dark text-light p-1.5 lg:p-2 px-6 rounded-lg text-xs lg:text-lg font-semibold hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 dark:hover:bg-dark dark:hover:text-light dark:hover:border-light dark:bg-light dark:text-dark\",\n                                                    download: true,\n                                                    children: \"Resume\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 15\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                    href: \"mailto:stephmdavis1@gmail.com\",\n                                                    target: \"_blank\",\n                                                    className: \"ml-4 text-xs lg:text-lg mb-8 lg:mb-10 font-medium capitalize text-dark underline dark:text-light dark:underline\",\n                                                    children: \"Contact Me\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                                                    lineNumber: 119,\n                                                    columnNumber: 15\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                                            lineNumber: 113,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HireMe__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                        lineNumber: 128,\n                        columnNumber: 8\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stephaniedavis/Desktop/Build/portfolio2.0/src/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"RSKnbDneYPYctcKylPrwGe4lUfk=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useTransform\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztvQ0FBSVQsV0FBVTs7c0RBRWIsOERBQUM5QixnRUFBWUE7NENBQUNnRCxNQUFPOzRDQUE4Q2xCLFdBQVU7Ozs7OztzREFDN0UsOERBQUNtQjs0Q0FBRW5CLFdBQVU7c0RBQThEOzs7Ozs7c0RBRzNFLDhEQUFDUzs0Q0FBSVQsV0FBVTs7OERBQ2IsOERBQUM3QixrREFBSUE7b0RBQUNpRCxNQUFLO29EQUE0QkMsUUFBUTtvREFBVXJCLFdBQVU7b0RBQ25Fc0IsVUFBVSxJQUFJOzhEQUNiOzs7Ozs7OERBR0QsOERBQUNuRCxrREFBSUE7b0RBQUNpRCxNQUFLO29EQUFnQ0MsUUFBUTtvREFBVXJCLFdBQVU7OERBQWtIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FTaE0sOERBQUM1QiwwREFBTUE7Ozs7Ozs7Ozs7Ozs7QUFLZCxDQUFDO0dBckh1Qk87O1FBUVpMLDBEQUFjQTtRQUNkQSwwREFBY0E7UUFFUkMsd0RBQVlBO1FBQ1pBLHdEQUFZQTs7O0tBWk5JIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgcHJvZmlsZVBpYyBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL3Byb2ZpbGUvU3RlcGgyYmcucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhpcmVNZSBmcm9tICdAL2NvbXBvbmVudHMvSGlyZU1lJ1xuaW1wb3J0IHsgbW90aW9uLCB1c2VNb3Rpb25WYWx1ZSwgdXNlVHJhbnNmb3JtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9pY29ucy9jb2xvci1waWNrZXIucG5nJ1xuaW1wb3J0IGVyYXNlciBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2ljb25zL2VyYXNlci5wbmcnXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2lzQ2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBjb2xvcnMgPSBbXCIjQ0NGNUFDXCIsIFwiI0Y5RjVFM1wiLCBcIiNFRjc5OEFcIiwgXCIjRDE0MDgxXCIsICcjN0UyRTg0J10gXG4gIC8vIFsnI0YyRjZEMCcsICcjRDBFMUQ0JywgJyNEOUQyQjYnLCAnI0U0QkU5RScsICcjNzE2OTdBJ11cbiAgY29uc3QgYmdDb2xvciA9IFsnI2Y1ZjVmNSddXG4gIFxuICBjb25zdCB4ID0gdXNlTW90aW9uVmFsdWUoMjAwKVxuICBjb25zdCB5ID0gdXNlTW90aW9uVmFsdWUoMjAwKVxuXG4gIGNvbnN0IHJvdGF0ZVggPSB1c2VUcmFuc2Zvcm0oeSwgWzAsIDQwMF0sIFsxNSwgLTE1XSlcbiAgY29uc3Qgcm90YXRlWSA9IHVzZVRyYW5zZm9ybSh4LCBbMCwgNDAwXSwgWy0xMCwgMTBdKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2UoZXZlbnQpIHtcbiAgICAgICAgeC5zZXQoZXZlbnQucGFnZVgpXG4gICAgICAgIHkuc2V0KGV2ZW50LnBhZ2VZKVxuICAgIH1cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3RlcGhhbmllJ3MgUG9ydGZvbGlvPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bW90aW9uLm1haW4gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWRhcmsgdy1mdWxsIGxnbWluLWgtc2NyZWVuIGRhcms6IXRleHQtbGlnaHQgZGFyazohYmctZGFyaydcbiAgICAgICBhbmltYXRlPXt7IGJhY2tncm91bmRDb2xvcjogaXNDbGlja2VkID8gY29sb3JzIDogYmdDb2xvciB9fVxuICAgICAgIHRyYW5zaXRpb249e3sgXG4gICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICAgIHJlcGVhdFR5cGU6IFwibWlycm9yXCIsXG4gICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgIGR1cmF0aW9uOiA0LCBcbiAgICAgIH19XG4gICAgICAgPlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1sLTQgZ2FwLTEyIHRvcC1bMTEwcHhdIGFic29sdXRlICc+XG4gICAgICAgIFxuICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIgdGV4dC1bN3B4XSBtZDp0ZXh0LVs5cHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LVsxcmVtXSBoLVsxcmVtXSBsZzp3LVsyLjVyZW1dIGxnOmgtWzIuNXJlbV0gZGFyazpoaWRkZW4gdGV4dC1kYXJrIGN1cnNvci1ncmFiJ1xuICAgICAgICAgICAgLy8gZHJhZ1xuICAgICAgICAgICAgLy8gZHJhZ0VsYXN0aWM9ezF9XG4gICAgICAgICAgICAvLyBkcmFnQ29uc3RyYWludHM9e3sgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDbGlja2VkKHRydWUpfVxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBjdXJzb3I6IFwiZ3JhYmJpbmdcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17Y29sb3J9IGFsdD0nY29sb3IgcGlja2VyJyBjbGFzc05hbWU9J3BvaW50ZXItZXZlbnRzLW5vbmUgY3Vyc29yLW5vbmUgJyAvPlxuICAgICAgICAgICAgQ2xpY2sgTWU8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTEyIG1sLTQgdG9wLVsxNjBweF0gbWQ6dG9wLVsxOTBweF0gYWJzb2x1dGUgJz5cblxuICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1bN3B4XSBtZDp0ZXh0LVs5cHhdIGp1c3RpZnktY2VudGVyIHctWzFyZW1dIGgtWzFyZW1dIGxnOnctWzIuNXJlbV0gbGc6aC1bMi41cmVtXSBkYXJrOmhpZGRlbiB0ZXh0LWRhcmsgY3Vyc29yLXBvaW50ZXIgc2hhZG93LXNtJ1xuICAgICAgICAgICAgLy8gZHJhZ1xuICAgICAgICAgICAgLy8gZHJhZ0VsYXN0aWM9ezF9XG4gICAgICAgICAgICAvLyBkcmFnQ29uc3RyYWludHM9e3sgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH19XG4gICAgICAgICAgICBvbkNsaWNrRW5kPXsoKSA9PiBzZXRDbGlja2VkKGZhbHNlKX1cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgY3Vyc29yOiBcImdyYWJiaW5nXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2VyYXNlcn0gYWx0PSdtYWdpYyBlcmFzZXInIGNsYXNzTmFtZT0ncG9pbnRlci1ldmVudHMtbm9uZSBjdXJzb3Itbm9uZScvPlxuICAgICAgICAgICAgQ2xpY2sgVG8gUmVzZXRcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgIFxuXG4gICAgICAgICBcblxuICAgICAgICBcbiAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT0nbWItNDggbGc6bWItWzMwcmVtXSBtdC0yNCByZWxhdGl2ZSc+XG4gICAgICBcbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtODAgdy1mdWxsIGN1cnNvci1ub25lICBkYXJrOiF0ZXh0LWxpZ2h0IGRhcms6IWJnLWRhcmtcIlxuICAgICAgICAgYW5pbWF0ZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGlzQ2xpY2tlZCA/IGNvbG9ycyA6IGJnQ29sb3IgfX1cbiAgICAgICAgIHRyYW5zaXRpb249e3sgXG4gICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICByZXBlYXRUeXBlOiBcIm1pcnJvclwiLFxuICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgZHVyYXRpb246IDQsIFxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2V9XG4gICAgICAgID5cbiAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9J3ctMS8yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJlbGF0aXZlIGN1cnNvci1ncmFiJ1xuICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcm90YXRlWDogcm90YXRlWCxcbiAgICAgICAgICAgIHJvdGF0ZVk6IHJvdGF0ZVksXG4gICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICBcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2ZpbGVQaWN9IGFsdD0nZGV2ZWxvcGVyJyBjbGFzc05hbWU9J2xnOnctWzg1JV0gbGc6aC1bODUlXSBwb2ludGVyLWV2ZW50cy1ub25lIGN1cnNvci1ub25lIG10LTI0IG1sLTI4ICBtZDptdC03MiBsZzptdC1bNDByZW1dICAnIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIFxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMS8yIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHNlbGYtY2VudGVyJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PXtgSGksIEknbSBTdGVwaGFuaWUuIEEgRnJvbnQgRW5kIFdlYiBEZXNpZ25lcmB9IGNsYXNzTmFtZT0nIXRleHQtMnhsIG1kOnRleHQtM3hsIHhsOiF0ZXh0LTV4bCAhdGV4dC1sZWZ0IG10LTQ4Jy8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J215LTQgbXgtMiBsZzpteS00IHRleHQteHMgbWQ6dGV4dC1tZCBsZzp0ZXh0LWxnIGZvbnQtbWVkaXVtJz5cbiAgICAgICAgICAgIEFzIGEgZGVzaWduZXIgSSBzdHJpdmUgdG8gc3Ryb25nbHkgZm9jdXMgb24gYnVpbGRpbmcgc29sdXRpb25zIHRoYXQgdXNlcnMgYWN0dWFsbHkgd2FudCwgYW5kIHRvIGNyZWF0ZSBiZWF1dGlmdWwsIGZ1bmN0aW9uYWwgVUkncy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzZWxmLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1N0ZXBoYW5pZURhdmlzUmVzdW1lLnBkZicgdGFyZ2V0PXsnX2JsYW5rJ30gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBtYi04IGxnOm1iLTEwIGJnLWRhcmsgdGV4dC1saWdodCBwLTEuNSBsZzpwLTIgcHgtNiByb3VuZGVkLWxnIHRleHQteHMgbGc6dGV4dC1sZyBmb250LXNlbWlib2xkIGhvdmVyOmJnLWxpZ2h0IGhvdmVyOnRleHQtZGFyayBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1kYXJrIGJvcmRlci0yIGRhcms6aG92ZXI6YmctZGFyayBkYXJrOmhvdmVyOnRleHQtbGlnaHQgZGFyazpob3Zlcjpib3JkZXItbGlnaHQgZGFyazpiZy1saWdodCBkYXJrOnRleHQtZGFyaydcbiAgICAgICAgICAgICAgZG93bmxvYWQ9e3RydWV9XG4gICAgICAgICAgICAgID5SZXN1bWUgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9J21haWx0bzpzdGVwaG1kYXZpczFAZ21haWwuY29tJyB0YXJnZXQ9eydfYmxhbmsnfSBjbGFzc05hbWU9J21sLTQgdGV4dC14cyBsZzp0ZXh0LWxnIG1iLTggbGc6bWItMTAgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsgdW5kZXJsaW5lIGRhcms6dGV4dC1saWdodCBkYXJrOnVuZGVybGluZSc+Q29udGFjdCBNZTwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIFxuXG4gXG4gICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgICA8SGlyZU1lICAvPlxuICAgICAgXG4gICAgICA8L21vdGlvbi5tYWluPlxuICAgICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGF5b3V0IiwicHJvZmlsZVBpYyIsIkltYWdlIiwiQW5pbWF0ZWRUZXh0IiwiTGluayIsIkhpcmVNZSIsIm1vdGlvbiIsInVzZU1vdGlvblZhbHVlIiwidXNlVHJhbnNmb3JtIiwidXNlU3RhdGUiLCJjb2xvciIsImVyYXNlciIsIkhvbWUiLCJpc0NsaWNrZWQiLCJzZXRDbGlja2VkIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImNvbG9ycyIsImJnQ29sb3IiLCJ4IiwieSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiaGFuZGxlTW91c2UiLCJldmVudCIsInNldCIsInBhZ2VYIiwicGFnZVkiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJjbGFzc05hbWUiLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0VHlwZSIsImVhc2UiLCJkdXJhdGlvbiIsImRpdiIsIm9uQ2xpY2siLCJ3aGlsZUhvdmVyIiwiY3Vyc29yIiwic3JjIiwiYWx0Iiwib25DbGlja0VuZCIsIm9uTW91c2VNb3ZlIiwic3R5bGUiLCJ0ZXh0IiwicCIsImhyZWYiLCJ0YXJnZXQiLCJkb3dubG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});