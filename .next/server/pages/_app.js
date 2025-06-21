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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index.css */ \"(pages-dir-node)/./src/index.css\");\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/context/AuthContext */ \"(pages-dir-node)/./src/context/AuthContext.tsx\");\n\n\n\n\n\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const isAuthPage = router.pathname === '/auth';\n    const { isLoggedIn, setIsLoggedIn } = (0,_src_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    // Hide navbar on /auth or if not logged in\n    if (isAuthPage || !isLoggedIn) return null;\n    const handleLogout = ()=>{\n        if (false) {}\n    };\n    const handleHome = ()=>{\n        router.push('/');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"p-4 border-b border-white/20 flex justify-end items-center fixed w-full top-0 z-10 bg-black/80 backdrop-blur-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-8 items-center w-full justify-end\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleHome,\n                    className: \"text-white hover:text-white/80 font-medium px-4 md:text-lg\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/dashboard\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-white hover:text-white/80 font-medium px-4 block md:text-lg\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/my-goals\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-white hover:text-white/80 font-medium px-4 block md:text-lg\",\n                        children: \"Goals\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    className: \"bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white/90\",\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\nfunction AppContent({ Component, pageProps, router }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navbar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps,\n                    router: router\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nfunction MyApp({ Component, pageProps, router }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContent, {\n            Component: Component,\n            pageProps: pageProps,\n            router: router\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\pages\\\\_app.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRUc7QUFDVztBQUUyQjtBQUVuRSxTQUFTSTtJQUNQLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNSyxhQUFhRCxPQUFPRSxRQUFRLEtBQUs7SUFDdkMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsRUFBRSxHQUFHTixpRUFBT0E7SUFFN0MsMkNBQTJDO0lBQzNDLElBQUlHLGNBQWMsQ0FBQ0UsWUFBWSxPQUFPO0lBRXRDLE1BQU1FLGVBQWU7UUFDbkIsSUFBSSxLQUE2QixFQUFFLEVBTWxDO0lBQ0g7SUFFQSxNQUFNSSxhQUFhO1FBQ2pCVCxPQUFPUSxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQ0NDLFNBQVNMO29CQUNURSxXQUFVOzhCQUNYOzs7Ozs7OEJBR0QsOERBQUNoQixrREFBSUE7b0JBQUNvQixNQUFLO29CQUFhQyxjQUFjOzhCQUNwQyw0RUFBQ0M7d0JBQUVOLFdBQVU7a0NBQW1FOzs7Ozs7Ozs7Ozs4QkFFbEYsOERBQUNoQixrREFBSUE7b0JBQUNvQixNQUFLO29CQUFZQyxjQUFjOzhCQUNuQyw0RUFBQ0M7d0JBQUVOLFdBQVU7a0NBQW1FOzs7Ozs7Ozs7Ozs4QkFFbEYsOERBQUNFO29CQUNDQyxTQUFTVDtvQkFDVE0sV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtBQUVBLFNBQVNPLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVwQixNQUFNLEVBQThCO0lBQzlFLHFCQUNFOzswQkFDRSw4REFBQ0Q7Ozs7OzBCQUNELDhEQUFDYTtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ1E7b0JBQVcsR0FBR0MsU0FBUztvQkFBRXBCLFFBQVFBOzs7Ozs7Ozs7Ozs7O0FBSTFDO0FBRWUsU0FBU3FCLE1BQU0sRUFBRUYsU0FBUyxFQUFFQyxTQUFTLEVBQUVwQixNQUFNLEVBQThCO0lBQ3hGLHFCQUNFLDhEQUFDSCxrRUFBWUE7a0JBQ1gsNEVBQUNxQjtZQUFXQyxXQUFXQTtZQUFXQyxXQUFXQTtZQUFXcEIsUUFBUUE7Ozs7Ozs7Ozs7O0FBR3RFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFBDXFxIb2xpZGF5LXByb2plY3QtXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zcmMvaW5kZXguY3NzJztcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIsIHVzZUF1dGggfSBmcm9tICcuLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaXNBdXRoUGFnZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gJy9hdXRoJztcclxuICBjb25zdCB7IGlzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW4gfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgLy8gSGlkZSBuYXZiYXIgb24gL2F1dGggb3IgaWYgbm90IGxvZ2dlZCBpblxyXG4gIGlmIChpc0F1dGhQYWdlIHx8ICFpc0xvZ2dlZEluKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkYWJibHlfdXNlcl90b2tlbicpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGFiYmx5X3VzZXJfZW1haWwnKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2RhYmJseV9nb2FscycpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2F1dGgnKTtcclxuICAgICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSG9tZSA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci1iIGJvcmRlci13aGl0ZS8yMCBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBmaXhlZCB3LWZ1bGwgdG9wLTAgei0xMCBiZy1ibGFjay84MCBiYWNrZHJvcC1ibHVyLWxnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtOCBpdGVtcy1jZW50ZXIgdy1mdWxsIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlSG9tZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC13aGl0ZS84MCBmb250LW1lZGl1bSBweC00IG1kOnRleHQtbGdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiIGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXdoaXRlLzgwIGZvbnQtbWVkaXVtIHB4LTQgYmxvY2sgbWQ6dGV4dC1sZ1wiPkRhc2hib2FyZDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9teS1nb2Fsc1wiIGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXdoaXRlLzgwIGZvbnQtbWVkaXVtIHB4LTQgYmxvY2sgbWQ6dGV4dC1sZ1wiPkdvYWxzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHB4LTYgcHktMiByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmb250LW1lZGl1bSBob3ZlcjpiZy13aGl0ZS85MFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQXBwQ29udGVudCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfTogQXBwUHJvcHMgJiB7IHJvdXRlcjogYW55IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTE2XCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSByb3V0ZXI9e3JvdXRlcn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfTogQXBwUHJvcHMgJiB7IHJvdXRlcjogYW55IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgPEFwcENvbnRlbnQgQ29tcG9uZW50PXtDb21wb25lbnR9IHBhZ2VQcm9wcz17cGFnZVByb3BzfSByb3V0ZXI9e3JvdXRlcn0gLz5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICk7XHJcbn0gIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJBdXRoUHJvdmlkZXIiLCJ1c2VBdXRoIiwiTmF2YmFyIiwicm91dGVyIiwiaXNBdXRoUGFnZSIsInBhdGhuYW1lIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCIsImhhbmRsZUhvbWUiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwiYSIsIkFwcENvbnRlbnQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJNeUFwcCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/context/AuthContext.tsx":
/*!*************************************!*\
  !*** ./src/context/AuthContext.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst AuthProvider = ({ children })=>{\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            setIsLoggedIn(!!localStorage.getItem('dabbly_user_token'));\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLoggedIn,\n            setIsLoggedIn\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Holiday-project-\\\\src\\\\context\\\\AuthContext.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!context) throw new Error('useAuth must be used within an AuthProvider');\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThFO0FBTzlFLE1BQU1LLDRCQUFjSixvREFBYUEsQ0FBOEJLO0FBRXhELE1BQU1DLGVBQXdELENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ2hGLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3Q0MsZ0RBQVNBO2tDQUFDO1lBQ1JNLGNBQWMsQ0FBQyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7UUFDdkM7aUNBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUCxZQUFZUSxRQUFRO1FBQUNDLE9BQU87WUFBRUw7WUFBWUM7UUFBYztrQkFDdERGOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTU8sVUFBVTtJQUNyQixNQUFNQyxVQUFVZCxpREFBVUEsQ0FBQ0c7SUFDM0IsSUFBSSxDQUFDVyxTQUFTLE1BQU0sSUFBSUMsTUFBTTtJQUM5QixPQUFPRDtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUENcXEhvbGlkYXktcHJvamVjdC1cXHNyY1xcY29udGV4dFxcQXV0aENvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIEF1dGhDb250ZXh0VHlwZSB7XHJcbiAgaXNMb2dnZWRJbjogYm9vbGVhbjtcclxuICBzZXRJc0xvZ2dlZEluOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoQ29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNMb2dnZWRJbighIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYWJibHlfdXNlcl90b2tlbicpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbiB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJyk7XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07ICJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBdXRoQ29udGV4dCIsInVuZGVmaW5lZCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiLCJjb250ZXh0IiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/context/AuthContext.tsx\n");

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