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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index.css */ \"(pages-dir-node)/./src/index.css\");\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const isAuthPage = router.pathname === '/auth';\n    // Hide navbar on /auth\n    if (isAuthPage) return null;\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Navbar.useEffect\": ()=>{\n            if (false) {}\n        }\n    }[\"Navbar.useEffect\"], []);\n    const handleLogout = ()=>{\n        if (false) {}\n    };\n    const handleHome = ()=>{\n        router.push('/');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"p-4 border-b border-white/20 flex justify-end items-center fixed w-full top-0 z-10 bg-black/80 backdrop-blur-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-8 items-center w-full justify-end\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleHome,\n                    className: \"text-white hover:text-white/80 font-medium px-4\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/dashboard\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-white hover:text-white/80 font-medium px-4 block\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/my-goals\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-white hover:text-white/80 font-medium px-4 block\",\n                        children: \"My Goals\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    className: \"bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white/90\",\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navbar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVHO0FBQ1c7QUFDSTtBQUU1QyxTQUFTSTtJQUNQLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNSyxhQUFhRCxPQUFPRSxRQUFRLEtBQUs7SUFFdkMsdUJBQXVCO0lBQ3ZCLElBQUlELFlBQVksT0FBTztJQUV2QixNQUFNLENBQUNFLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFFN0NELGdEQUFTQTs0QkFBQztZQUNSLElBQUksS0FBNkIsRUFBRSxFQVFsQztRQUNIOzJCQUFHLEVBQUU7SUFFTCxNQUFNYyxlQUFlO1FBQ25CLElBQUksS0FBNkIsRUFBRSxFQU1sQztJQUNIO0lBRUEsTUFBTUcsYUFBYTtRQUNqQmQsT0FBT2EsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUNDQyxTQUFTTDtvQkFDVEUsV0FBVTs4QkFDWDs7Ozs7OzhCQUdELDhEQUFDckIsa0RBQUlBO29CQUFDeUIsTUFBSztvQkFBYUMsY0FBYzs4QkFDcEMsNEVBQUNDO3dCQUFFTixXQUFVO2tDQUF3RDs7Ozs7Ozs7Ozs7OEJBRXZFLDhEQUFDckIsa0RBQUlBO29CQUFDeUIsTUFBSztvQkFBWUMsY0FBYzs4QkFDbkMsNEVBQUNDO3dCQUFFTixXQUFVO2tDQUF3RDs7Ozs7Ozs7Ozs7Z0JBRXRFYiw0QkFDQyw4REFBQ2U7b0JBQ0NDLFNBQVNSO29CQUNUSyxXQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0FBRWUsU0FBU08sTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM5RCxxQkFDRTs7MEJBQ0UsOERBQUMxQjs7Ozs7MEJBQ0QsOERBQUNrQjtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ1E7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxQQ1xcSG9saWRheS1wcm9qZWN0LVxccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3JjL2luZGV4LmNzcyc7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc0F1dGhQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSAnL2F1dGgnO1xyXG5cclxuICAvLyBIaWRlIG5hdmJhciBvbiAvYXV0aFxyXG4gIGlmIChpc0F1dGhQYWdlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHNldElzTG9nZ2VkSW4oISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFiYmx5X3VzZXJfdG9rZW4nKSk7XHJcbiAgICAgIC8vIExpc3RlbiBmb3IgbG9naW4vbG9nb3V0IGV2ZW50cyBmcm9tIG90aGVyIHRhYnNcclxuICAgICAgY29uc3QgaGFuZGxlU3RvcmFnZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvZ2dlZEluKCEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhYmJseV91c2VyX3Rva2VuJykpO1xyXG4gICAgICB9O1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGhhbmRsZVN0b3JhZ2UpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBoYW5kbGVTdG9yYWdlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGFiYmx5X3VzZXJfdG9rZW4nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2RhYmJseV91c2VyX2VtYWlsJyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkYWJibHlfZ29hbHMnKTtcclxuICAgICAgcm91dGVyLnB1c2goJy9hdXRoJyk7XHJcbiAgICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUhvbWUgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cInAtNCBib3JkZXItYiBib3JkZXItd2hpdGUvMjAgZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgZml4ZWQgdy1mdWxsIHRvcC0wIHotMTAgYmctYmxhY2svODAgYmFja2Ryb3AtYmx1ci1sZ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTggaXRlbXMtY2VudGVyIHctZnVsbCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUhvbWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUvODAgZm9udC1tZWRpdW0gcHgtNFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgSG9tZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCIgbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUvODAgZm9udC1tZWRpdW0gcHgtNCBibG9ja1wiPkRhc2hib2FyZDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9teS1nb2Fsc1wiIGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXdoaXRlLzgwIGZvbnQtbWVkaXVtIHB4LTQgYmxvY2tcIj5NeSBHb2FsczwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAge2lzTG9nZ2VkSW4gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmxhY2sgcHgtNiBweS0yIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXdoaXRlLzkwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTE2XCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0gIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsInJvdXRlciIsImlzQXV0aFBhZ2UiLCJwYXRobmFtZSIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZVN0b3JhZ2UiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiaGFuZGxlSG9tZSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

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