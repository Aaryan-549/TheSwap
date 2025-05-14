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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n//SEPOLIA RPC URL\nconst SEPOLIA = \"https://rpc.ankr.com/eth_sepolia\";\n//HOLESKY RPC URL\nconst HOLESKY = \"https://rpc.ankr.com/eth_holesky\";\n//SEPOLIA\n// const { chains, provider } = configureChains(\n//   [\n//     {\n//       id: 11155111,\n//       name: \"Sepolia\",\n//       network: \"sepolia\",\n//       nativeCurrency: {\n//         name: \"Sepolia Ether\",\n//         symbol: \"ETH\",\n//         decimals: 18,\n//       },\n//       rpcUrls: {\n//         default: {\n//           http: [`${SEPOLIA}`],\n//         },\n//         public: {\n//           http: [`${SEPOLIA}`],\n//         },\n//       },\n//       blockExplorers: {\n//         default: {\n//           name: \"Etherscan\",\n//           url: \"https://sepolia.etherscan.io\",\n//         },\n//       },\n//       testnet: true,\n//     },\n//   ],\n//   [\n//     jsonRpcProvider({\n//       rpc: (chain) => {\n//         if (chain.id === 11155111) {\n//           return { http: `${SEPOLIA}` };\n//         }\n//         return null;\n//       },\n//       priority: 1,\n//     }),\n//   ]\n// );\n//HOLESKY\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    {\n        id: 17000,\n        name: \"Holesky\",\n        network: \"holesky\",\n        nativeCurrency: {\n            name: \"Holesky Ether\",\n            symbol: \"ETH\",\n            decimals: 18\n        },\n        rpcUrls: {\n            default: {\n                http: [\n                    `${HOLESKY}`\n                ]\n            },\n            public: {\n                http: [\n                    `${HOLESKY}`\n                ]\n            }\n        },\n        blockExplorers: {\n            default: {\n                name: \"Holescan\",\n                url: \"https://holesky.etherscan.io/\"\n            }\n        },\n        testnet: true\n    }, \n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__.jsonRpcProvider)({\n        rpc: (chain)=>{\n            if (chain.id === 17000) {\n                return {\n                    http: `${HOLESKY}`\n                };\n            }\n            return null;\n        },\n        priority: 1\n    }), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Custom Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/aaryan/Downloads/uniswap-token-marketplace/uniswap-token-marketplace/pages/_app.js\",\n                lineNumber: 128,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/aaryan/Downloads/uniswap-token-marketplace/uniswap-token-marketplace/pages/_app.js\",\n            lineNumber: 127,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aaryan/Downloads/uniswap-token-marketplace/uniswap-token-marketplace/pages/_app.js\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3ZDLHFCQUNFLDhEQUFDbkMsOENBQVc7UUFBQ29DLE1BQU0sRUFBRVQsV0FBVztrQkFDOUIsNEVBQUNqQyxzRUFBa0I7WUFBQ2MsTUFBTSxFQUFFQSxNQUFNO1lBQUU2QixLQUFLLEVBQUVSLE9BQU87c0JBQ2hELDRFQUFDSyxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDVDs7Ozs7WUFDVCxDQUNkO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pc3dhcC10b2tlbi1tYXJrZXRwbGFjZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuaW1wb3J0IG1lcmdlIGZyb20gXCJsb2Rhc2gvbWVyZ2VcIjtcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQge1xuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBkYXJrVGhlbWUsXG4gIG1pZG5pZ2h0VGhlbWUsXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5cbmltcG9ydCB7IGNoYWluLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvanNvblJwY1wiO1xuXG4vL1NFUE9MSUEgUlBDIFVSTFxuY29uc3QgU0VQT0xJQSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUE9MSUFfVVJMO1xuXG4vL0hPTEVTS1kgUlBDIFVSTFxuY29uc3QgSE9MRVNLWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPTEVTS1lfUlBDX1VSTDtcblxuLy9TRVBPTElBXG4vLyBjb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbi8vICAgW1xuLy8gICAgIHtcbi8vICAgICAgIGlkOiAxMTE1NTExMSxcbi8vICAgICAgIG5hbWU6IFwiU2Vwb2xpYVwiLFxuLy8gICAgICAgbmV0d29yazogXCJzZXBvbGlhXCIsXG4vLyAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuLy8gICAgICAgICBuYW1lOiBcIlNlcG9saWEgRXRoZXJcIixcbi8vICAgICAgICAgc3ltYm9sOiBcIkVUSFwiLFxuLy8gICAgICAgICBkZWNpbWFsczogMTgsXG4vLyAgICAgICB9LFxuLy8gICAgICAgcnBjVXJsczoge1xuLy8gICAgICAgICBkZWZhdWx0OiB7XG4vLyAgICAgICAgICAgaHR0cDogW2Ake1NFUE9MSUF9YF0sXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHB1YmxpYzoge1xuLy8gICAgICAgICAgIGh0dHA6IFtgJHtTRVBPTElBfWBdLFxuLy8gICAgICAgICB9LFxuLy8gICAgICAgfSxcbi8vICAgICAgIGJsb2NrRXhwbG9yZXJzOiB7XG4vLyAgICAgICAgIGRlZmF1bHQ6IHtcbi8vICAgICAgICAgICBuYW1lOiBcIkV0aGVyc2NhblwiLFxuLy8gICAgICAgICAgIHVybDogXCJodHRwczovL3NlcG9saWEuZXRoZXJzY2FuLmlvXCIsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgdGVzdG5ldDogdHJ1ZSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gICBbXG4vLyAgICAganNvblJwY1Byb3ZpZGVyKHtcbi8vICAgICAgIHJwYzogKGNoYWluKSA9PiB7XG4vLyAgICAgICAgIGlmIChjaGFpbi5pZCA9PT0gMTExNTUxMTEpIHtcbi8vICAgICAgICAgICByZXR1cm4geyBodHRwOiBgJHtTRVBPTElBfWAgfTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gbnVsbDtcbi8vICAgICAgIH0sXG4vLyAgICAgICBwcmlvcml0eTogMSxcbi8vICAgICB9KSxcbi8vICAgXVxuLy8gKTtcblxuLy9IT0xFU0tZXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgW1xuICAgIHtcbiAgICAgIGlkOiAxNzAwMCxcbiAgICAgIG5hbWU6IFwiSG9sZXNreVwiLFxuICAgICAgbmV0d29yazogXCJob2xlc2t5XCIsXG4gICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICBuYW1lOiBcIkhvbGVza3kgRXRoZXJcIixcbiAgICAgICAgc3ltYm9sOiBcIkVUSFwiLFxuICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICB9LFxuICAgICAgcnBjVXJsczoge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgaHR0cDogW2Ake0hPTEVTS1l9YF0sXG4gICAgICAgIH0sXG4gICAgICAgIHB1YmxpYzoge1xuICAgICAgICAgIGh0dHA6IFtgJHtIT0xFU0tZfWBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJsb2NrRXhwbG9yZXJzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBuYW1lOiBcIkhvbGVzY2FuXCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vaG9sZXNreS5ldGhlcnNjYW4uaW8vXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGVzdG5ldDogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBbXG4gICAganNvblJwY1Byb3ZpZGVyKHtcbiAgICAgIHJwYzogKGNoYWluKSA9PiB7XG4gICAgICAgIGlmIChjaGFpbi5pZCA9PT0gMTcwMDApIHtcbiAgICAgICAgICByZXR1cm4geyBodHRwOiBgJHtIT0xFU0tZfWAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICBwcmlvcml0eTogMSxcbiAgICB9KSxcbiAgXVxuKTtcblxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6IFwiQ3VzdG9tIERleFwiLFxuICBjaGFpbnMsXG59KTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG59KTtcblxuY29uc3QgbXlUaGVtZSA9IG1lcmdlKG1pZG5pZ2h0VGhlbWUoKSwge1xuICBjb2xvcnM6IHtcbiAgICBhY2NlbnRDb2xvcjogXCIjMTgxODFiXCIsXG4gICAgYWNjZW50Q29sb3JGb3JlZ3JvdW5kOiBcIiNmZmZcIixcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfSB0aGVtZT17bXlUaGVtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIm1lcmdlIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJkYXJrVGhlbWUiLCJtaWRuaWdodFRoZW1lIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImpzb25ScGNQcm92aWRlciIsIlNFUE9MSUEiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0VQT0xJQV9VUkwiLCJIT0xFU0tZIiwiTkVYVF9QVUJMSUNfSE9MRVNLWV9SUENfVVJMIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJpZCIsIm5hbWUiLCJuZXR3b3JrIiwibmF0aXZlQ3VycmVuY3kiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJkZWZhdWx0IiwiaHR0cCIsInB1YmxpYyIsImJsb2NrRXhwbG9yZXJzIiwidXJsIiwidGVzdG5ldCIsInJwYyIsInByaW9yaXR5IiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwibXlUaGVtZSIsImNvbG9ycyIsImFjY2VudENvbG9yIiwiYWNjZW50Q29sb3JGb3JlZ3JvdW5kIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();