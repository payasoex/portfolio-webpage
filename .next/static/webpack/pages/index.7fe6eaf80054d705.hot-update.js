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

/***/ "./components/layout/article.js":
/*!**************************************!*\
  !*** ./components/layout/article.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid-item */ \"./components/grid-item.js\");\n\n\n\n\nconst variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    },\n    visible: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    }\n};\nconst Layout = (param)=>/*#__PURE__*/ {\n    let { children, title } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.article, {\n        initial: variants.hidden,\n        animate: \"visible\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.4,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            title,\n                            \" | Javier Retamal\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/retamal_f/Dev/portfolio/portfolio-webpage/components/layout/article.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/retamal_f/Dev/portfolio/portfolio-webpage/components/layout/article.js\",\n                    lineNumber: 21,\n                    columnNumber: 24\n                }, undefined),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_item__WEBPACK_IMPORTED_MODULE_2__.GridItemStyle, {}, void 0, false, {\n                    fileName: \"/Users/retamal_f/Dev/portfolio/portfolio-webpage/components/layout/article.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/retamal_f/Dev/portfolio/portfolio-webpage/components/layout/article.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9hcnRpY2xlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ1Y7QUFDaUI7QUFFOUMsTUFBTUcsV0FBVztJQUNiQyxRQUFRO1FBQUVDLFNBQVM7UUFBR0MsR0FBRztRQUFHQyxHQUFHO0lBQUc7SUFDbENDLFNBQVM7UUFBRUgsU0FBUztRQUFHQyxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNsQ0UsTUFBTTtRQUFFSixTQUFTO1FBQUdDLEdBQUc7UUFBR0MsR0FBRztJQUFHO0FBQ3BDO0FBRUEsTUFBTUcsU0FBUztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO1dBQy9CLDhEQUFDWixpREFBTUEsQ0FBQ2EsT0FBTztRQUNYQyxTQUFTWCxTQUFTQyxNQUFNO1FBQ3hCVyxTQUFRO1FBQ1JOLE1BQUs7UUFDTE4sVUFBVUE7UUFDVmEsWUFBWTtZQUFFQyxVQUFVO1lBQUtDLE1BQU07UUFBWTtRQUMvQ0MsT0FBTztZQUFDQyxVQUFVO1FBQVU7a0JBRTVCOztnQkFDS1IsdUJBQVUsOERBQUNYLGtEQUFJQTs4QkFDWiw0RUFBQ1c7OzRCQUFPQTs0QkFBTTs7Ozs7Ozs7Ozs7O2dCQUVqQkQ7OEJBQ0QsOERBQUNULHFEQUFhQTs7Ozs7Ozs7Ozs7O0FBRU47S0FoQmRRO0FBbUJOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L2FydGljbGUuanM/YTc1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0ICB7IEdyaWRJdGVtU3R5bGUgfSBmcm9tIFwiLi4vZ3JpZC1pdGVtXCI7XG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAyMCB9LFxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeDogMCwgeTogMCB9LFxuICAgIGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogMCwgeTogMjAgfVxufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgfSkgPT4gKFxuICAgIDxtb3Rpb24uYXJ0aWNsZVxuICAgICAgICBpbml0aWFsPXt2YXJpYW50cy5oaWRkZW59XG4gICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCwgdHlwZTogJ2Vhc2VJbk91dCcgfX1cbiAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319XG4gICAgPlxuICAgICAgICA8PlxuICAgICAgICAgICAge3RpdGxlICYmICg8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfSB8IEphdmllciBSZXRhbWFsPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD4pfVxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPEdyaWRJdGVtU3R5bGUvPlxuICAgICAgICA8Lz5cbiAgICA8L21vdGlvbi5hcnRpY2xlPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXSwibmFtZXMiOlsibW90aW9uIiwiSGVhZCIsIkdyaWRJdGVtU3R5bGUiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwieSIsInZpc2libGUiLCJleGl0IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImFydGljbGUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInR5cGUiLCJzdHlsZSIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/article.js\n"));

/***/ })

});