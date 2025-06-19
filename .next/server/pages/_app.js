/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index.css */ \"(pages-dir-node)/./src/index.css\");\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const isAuthPage = router.pathname === '/auth';\n    // Hide navbar on /auth\n    if (isAuthPage) return null;\n    const handleLogout = ()=>{\n        if (false) {}\n    };\n    const handleHome = ()=>{\n        router.push('/');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"p-4 border-b border-white/20 flex justify-end items-center fixed w-full top-0 z-10 bg-black/80 backdrop-blur-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-8 items-center w-full justify-end\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleHome,\n                    className: \"text-white hover:text-white/80 font-medium px-4\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/dashboard\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-white hover:text-white/80 font-medium px-4 block\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/my-goals\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-white hover:text-white/80 font-medium px-4 block\",\n                        children: \"My Goals\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    className: \"bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white/90\",\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navbar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFRztBQUNXO0FBR3hDLFNBQVNFO0lBQ1AsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU1HLGFBQWFELE9BQU9FLFFBQVEsS0FBSztJQUV2Qyx1QkFBdUI7SUFDdkIsSUFBSUQsWUFBWSxPQUFPO0lBRXZCLE1BQU1FLGVBQWU7UUFDbkIsSUFBSSxLQUE2QixFQUFFLEVBS2xDO0lBQ0g7SUFFQSxNQUFNSSxhQUFhO1FBQ2pCUCxPQUFPTSxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQ0NDLFNBQVNMO29CQUNURSxXQUFVOzhCQUNYOzs7Ozs7OEJBR0QsOERBQUNaLGtEQUFJQTtvQkFBQ2dCLE1BQUs7b0JBQWFDLGNBQWM7OEJBQ3BDLDRFQUFDQzt3QkFBRU4sV0FBVTtrQ0FBd0Q7Ozs7Ozs7Ozs7OzhCQUV2RSw4REFBQ1osa0RBQUlBO29CQUFDZ0IsTUFBSztvQkFBWUMsY0FBYzs4QkFDbkMsNEVBQUNDO3dCQUFFTixXQUFVO2tDQUF3RDs7Ozs7Ozs7Ozs7OEJBRXZFLDhEQUFDRTtvQkFDQ0MsU0FBU1Q7b0JBQ1RNLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7QUFFZSxTQUFTTyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzlELHFCQUNFOzswQkFDRSw4REFBQ25COzs7OzswQkFDRCw4REFBQ1c7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNRO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUENcXEhvbGlkYXktcHJvamVjdC1cXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3NyYy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc0F1dGhQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSAnL2F1dGgnO1xyXG5cclxuICAvLyBIaWRlIG5hdmJhciBvbiAvYXV0aFxyXG4gIGlmIChpc0F1dGhQYWdlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkYWJibHlfdXNlcl90b2tlbicpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGFiYmx5X3VzZXJfZW1haWwnKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2RhYmJseV9nb2FscycpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2F1dGgnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVIb21lID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy8nKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzIwIGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGZpeGVkIHctZnVsbCB0b3AtMCB6LTEwIGJnLWJsYWNrLzgwIGJhY2tkcm9wLWJsdXItbGdcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC04IGl0ZW1zLWNlbnRlciB3LWZ1bGwganVzdGlmeS1lbmRcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVIb21lfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXdoaXRlLzgwIGZvbnQtbWVkaXVtIHB4LTRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiIGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXdoaXRlLzgwIGZvbnQtbWVkaXVtIHB4LTQgYmxvY2tcIj5EYXNoYm9hcmQ8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbXktZ29hbHNcIiBsZWdhY3lCZWhhdmlvcj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC13aGl0ZS84MCBmb250LW1lZGl1bSBweC00IGJsb2NrXCI+TXkgR29hbHM8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmxhY2sgcHgtNiBweS0yIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXdoaXRlLzkwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBMb2dvdXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xNlwiPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59ICJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiTmF2YmFyIiwicm91dGVyIiwiaXNBdXRoUGFnZSIsInBhdGhuYW1lIiwiaGFuZGxlTG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJoYW5kbGVIb21lIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();