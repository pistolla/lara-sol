"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/farmers",{

/***/ "./src/views/farmers/RegisteredFarmers.js":
/*!************************************************!*\
  !*** ./src/views/farmers/RegisteredFarmers.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Table */ \"./node_modules/@mui/material/Table/index.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TableContainer */ \"./node_modules/@mui/material/TableContainer/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// ** React Imports\n\n\n\n// ** MUI Imports\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar RegisteredFarmers = function() {\n    _s();\n    (jquery__WEBPACK_IMPORTED_MODULE_3___default().DataTable) = __webpack_require__(/*! datatables.net */ \"./node_modules/datatables.net/js/jquery.dataTables.mjs\");\n    var tableRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), records = ref[0], setRecords = ref[1];\n    var loadFarmersData = function() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('http://localhost/api/farmers').then(function(res) {\n            setRecords(res.data.data);\n            loadTableData();\n        });\n    };\n    var loadTableData = function() {\n        var table = jquery__WEBPACK_IMPORTED_MODULE_3___default()(tableRef.current).on('order.dt', function(type) {\n        }).on('search.dt', function(type) {\n        }).on('page.dt', function(type) {\n        }).DataTable({\n            data: records,\n            columns: [\n                {\n                    title: \"ID\"\n                },\n                {\n                    title: \"National ID\"\n                },\n                {\n                    title: \"First Name\"\n                },\n                {\n                    title: \"Last Name\"\n                },\n                {\n                    title: \"Email\"\n                },\n                {\n                    title: \"Gender\"\n                },\n                {\n                    title: \"DOB\"\n                },\n                {\n                    title: \"Phone\"\n                },\n                {\n                    title: \"County\"\n                },\n                {\n                    title: \"Ward\"\n                },\n                {\n                    title: \"Village\"\n                },\n                {\n                    title: \"Status\"\n                },\n                {\n                    title: \"Farm Type\"\n                }\n            ],\n            destroy: true,\n            pagingType: \"full_numbers\",\n            pageLength: 20,\n            processing: true,\n            dom: \"Bfrtip\",\n            select: {\n                style: \"single\"\n            },\n            \"language\": {\n                // Add loading image <img src=\"loader.gif\" /> tag, or simple text\n                \"processing\": \"Please wait for the response...\"\n            },\n            buttons: [\n                {\n                    extend: \"pageLength\",\n                    className: \"btn btn-secondary bg-secondary\"\n                },\n                {\n                    extend: \"copy\",\n                    className: \"btn btn-secondary bg-secondary\"\n                },\n                {\n                    extend: \"csv\",\n                    className: \"btn btn-secondary bg-secondary\"\n                },\n                {\n                    extend: \"print\",\n                    customize: function customize(win) {\n                        jquery__WEBPACK_IMPORTED_MODULE_3___default()(win.document.body).css(\"font-size\", \"10pt\");\n                        jquery__WEBPACK_IMPORTED_MODULE_3___default()(win.document.body).find(\"table\").addClass(\"compact\").css(\"font-size\", \"inherit\");\n                    },\n                    className: \"btn btn-secondary bg-secondary\"\n                }, \n            ],\n            fnRowCallback: function fnRowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {\n                var index = iDisplayIndexFull + 1;\n                jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"td:first\", nRow).html(index);\n                return nRow;\n            },\n            lengthMenu: [\n                [\n                    10,\n                    20,\n                    30,\n                    50,\n                    -1\n                ],\n                [\n                    10,\n                    20,\n                    30,\n                    50,\n                    \"All\"\n                ], \n            ],\n            columnDefs: [\n                {\n                    targets: 0,\n                    render: function render(data, type, row, meta) {\n                        return type === \"export\" ? meta.row + 1 : data;\n                    }\n                },\n                {\n                    defaultContent: \" \",\n                    targets: \"_all\"\n                }\n            ]\n        });\n        return function loadTableData() {\n            console.log(\"Table destroyed\");\n            table.destroy();\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadFarmersData();\n    }, [\n        records\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\codesafi\\\\source\\\\repos\\\\larasol\\\\spa\\\\src\\\\views\\\\farmers\\\\RegisteredFarmers.js\",\n            lineNumber: 134,\n            columnNumber: 12\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            container: true,\n            spacing: 7,\n            __source: {\n                fileName: \"C:\\\\Users\\\\codesafi\\\\source\\\\repos\\\\larasol\\\\spa\\\\src\\\\views\\\\farmers\\\\RegisteredFarmers.js\",\n                lineNumber: 135,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                item: true,\n                xs: 12,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\codesafi\\\\source\\\\repos\\\\larasol\\\\spa\\\\src\\\\views\\\\farmers\\\\RegisteredFarmers.js\",\n                    lineNumber: 136,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\codesafi\\\\source\\\\repos\\\\larasol\\\\spa\\\\src\\\\views\\\\farmers\\\\RegisteredFarmers.js\",\n                        lineNumber: 137,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        sx: {\n                            minWidth: 650\n                        },\n                        className: \"display\",\n                        width: \"100%\",\n                        ref: tableRef,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\codesafi\\\\source\\\\repos\\\\larasol\\\\spa\\\\src\\\\views\\\\farmers\\\\RegisteredFarmers.js\",\n                            lineNumber: 138,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    })\n                })\n            })\n        })\n    }));\n};\n_s(RegisteredFarmers, \"S4yD2lr+qRlGg98BNZhmPskqLnI=\");\n_c = RegisteredFarmers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisteredFarmers);\nvar _c;\n$RefreshReg$(_c, \"RegisteredFarmers\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvZmFybWVycy9SZWdpc3RlcmVkRmFybWVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEVBQW1CO0FBS0w7QUFFVztBQUNLO0FBRTlCLEVBQWlCO0FBQ29CO0FBQ2M7QUFFN0I7QUFDaUI7QUFDQTtBQUNNO0FBQ0U7QUFDQTtBQUNBO0FBQ1U7OztBQUV6RCxHQUFLLENBQUNlLGlCQUFpQixHQUFHLFFBQVEsR0FBRixDQUFDOztJQUM3QlIseURBQVcsR0FBR1UsbUJBQU8sQ0FBQyw4RUFBZ0I7SUFDdEMsR0FBSyxDQUFDQyxRQUFRLEdBQUdqQiw2Q0FBTTtJQUN2QixHQUFLLENBQXlCQyxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWxDaUIsT0FBTyxHQUFnQmpCLEdBQVksS0FBMUJrQixVQUFVLEdBQUlsQixHQUFZO0lBRTFDLEdBQUssQ0FBQ21CLGVBQWUsR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUMzQmxCLGlEQUFTLENBQUMsQ0FBOEIsK0JBQUVvQixJQUFJLENBQUNDLFFBQVEsQ0FBUkEsR0FBRyxFQUNsRCxDQUFDO1lBQ0NKLFVBQVUsQ0FBQ0ksR0FBRyxDQUFDQyxJQUFJLENBQUNBLElBQUk7WUFDeEJDLGFBQWE7UUFDZixDQUFDO0lBQ0wsQ0FBQztJQUVILEdBQUssQ0FBQ0EsYUFBYSxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQzNCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHcEIsNkNBQUMsQ0FBQ1csUUFBUSxDQUFDVSxPQUFPLEVBQy9CQyxFQUFFLENBQUMsQ0FBVSxXQUFFLFFBQVEsQ0FBRUMsSUFBSSxFQUFFLENBQUM7UUFDakMsQ0FBQyxFQUNBRCxFQUFFLENBQUMsQ0FBVyxZQUFFLFFBQVEsQ0FBRUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsQ0FBQyxFQUNBRCxFQUFFLENBQUMsQ0FBUyxVQUFFLFFBQVEsQ0FBRUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxFQUFFZCxTQUFTLENBQUMs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Q0FBTTt3QkFBQ0MsR0FBRyxFQUFHeEQsUUFBUTs7Ozs7Ozs7Ozs7O0FBUTdGLENBQUM7R0ExSEtILGlCQUFpQjtLQUFqQkEsaUJBQWlCO0FBNEh2QiwrREFBZUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy92aWV3cy9mYXJtZXJzL1JlZ2lzdGVyZWRGYXJtZXJzLmpzPzk1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gKiogUmVhY3QgSW1wb3J0c1xyXG5pbXBvcnQge1xyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VSZWYsXHJcbiAgdXNlU3RhdGVcclxufSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcblxyXG4vLyAqKiBNVUkgSW1wb3J0c1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnXHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50J1xyXG5cclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcidcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGUnXHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlUm93J1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVIZWFkJ1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVCb2R5J1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDZWxsJ1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUNvbnRhaW5lcidcclxuXHJcbmNvbnN0IFJlZ2lzdGVyZWRGYXJtZXJzID0gKCkgPT4ge1xyXG4gICAgJC5EYXRhVGFibGUgPSByZXF1aXJlKCdkYXRhdGFibGVzLm5ldCcpXHJcbiAgICBjb25zdCB0YWJsZVJlZiA9IHVzZVJlZigpXHJcbiAgICBjb25zdCBbcmVjb3Jkcywgc2V0UmVjb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZEZhcm1lcnNEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvZmFybWVycycpLnRoZW4ocmVzID0+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNldFJlY29yZHMocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICBsb2FkVGFibGVEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIGNvbnN0IGxvYWRUYWJsZURhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YWJsZSA9ICQodGFibGVSZWYuY3VycmVudClcclxuICAgIC5vbignb3JkZXIuZHQnLCBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgfSlcclxuICAgIC5vbignc2VhcmNoLmR0JywgZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgIH0pXHJcbiAgICAub24oJ3BhZ2UuZHQnLCBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgfSkuRGF0YVRhYmxlKHtcclxuICAgICAgICBkYXRhOiByZWNvcmRzLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgeyB0aXRsZTogXCJJRFwiIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiTmF0aW9uYWwgSURcIiB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkZpcnN0IE5hbWVcIiB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkxhc3QgTmFtZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiRW1haWxcIiB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkdlbmRlclwiIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiRE9CXCIgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogXCJQaG9uZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiQ291bnR5XCIgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogXCJXYXJkXCIgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogXCJWaWxsYWdlXCIgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogXCJTdGF0dXNcIiB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkZhcm0gVHlwZVwiIH0gXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkZXN0cm95OiB0cnVlLFxyXG4gICAgICAgIHBhZ2luZ1R5cGU6IFwiZnVsbF9udW1iZXJzXCIsXHJcbiAgICAgICAgcGFnZUxlbmd0aDogMjAsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBkb206IFwiQmZydGlwXCIsXHJcbiAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICBzdHlsZTogXCJzaW5nbGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgICAgICAvLyBBZGQgbG9hZGluZyBpbWFnZSA8aW1nIHNyYz1cImxvYWRlci5naWZcIiAvPiB0YWcsIG9yIHNpbXBsZSB0ZXh0XHJcbiAgICAgICAgICAgIFwicHJvY2Vzc2luZ1wiOiBcIlBsZWFzZSB3YWl0IGZvciB0aGUgcmVzcG9uc2UuLi5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uczogW3tcclxuICAgICAgICAgICAgZXh0ZW5kOiBcInBhZ2VMZW5ndGhcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tc2Vjb25kYXJ5IGJnLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZXh0ZW5kOiBcImNvcHlcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tc2Vjb25kYXJ5IGJnLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZXh0ZW5kOiBcImNzdlwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgYmctc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBleHRlbmQ6IFwicHJpbnRcIixcclxuICAgICAgICAgICAgY3VzdG9taXplOiBmdW5jdGlvbiAod2luKSB7XHJcbiAgICAgICAgICAgICAgJCh3aW4uZG9jdW1lbnQuYm9keSkuY3NzKFwiZm9udC1zaXplXCIsIFwiMTBwdFwiKTtcclxuICAgICAgICAgICAgICAkKHdpbi5kb2N1bWVudC5ib2R5KVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJ0YWJsZVwiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiY29tcGFjdFwiKVxyXG4gICAgICAgICAgICAgICAgLmNzcyhcImZvbnQtc2l6ZVwiLCBcImluaGVyaXRcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLXNlY29uZGFyeSBiZy1zZWNvbmRhcnlcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgZm5Sb3dDYWxsYmFjazogZnVuY3Rpb24gKFxyXG4gICAgICAgICAgblJvdyxcclxuICAgICAgICAgIGFEYXRhLFxyXG4gICAgICAgICAgaURpc3BsYXlJbmRleCxcclxuICAgICAgICAgIGlEaXNwbGF5SW5kZXhGdWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB2YXIgaW5kZXggPSBpRGlzcGxheUluZGV4RnVsbCArIDE7XHJcbiAgICAgICAgICAkKFwidGQ6Zmlyc3RcIiwgblJvdykuaHRtbChpbmRleCk7XHJcbiAgICAgICAgICByZXR1cm4gblJvdztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICBbMTAsIDIwLCAzMCwgNTAsIC0xXSxcclxuICAgICAgICAgIFsxMCwgMjAsIDMwLCA1MCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbe1xyXG4gICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIHJvdywgbWV0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJleHBvcnRcIiA/IG1ldGEucm93ICsgMSA6IGRhdGE7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZWZhdWx0Q29udGVudDogXCIgXCIsXHJcbiAgICAgICAgICAgIHRhcmdldHM6IFwiX2FsbFwiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUYWJsZSBkZXN0cm95ZWRcIilcclxuICAgICAgICB0YWJsZS5kZXN0cm95KClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkRmFybWVyc0RhdGEoKTtcclxuICB9LCBbcmVjb3Jkc10pXHJcblxyXG4gIHJldHVybiAoIDxDYXJkQ29udGVudCA+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmcgPSB7IDd9ID5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA9IHsgMTIgfSA+XHJcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSBzeD17eyBtaW5XaWR0aDogNjUwIH19IGNsYXNzTmFtZT1cImRpc3BsYXlcIiB3aWR0aD1cIjEwMCVcIiByZWY9eyB0YWJsZVJlZiB9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gXHJcbiAgICAgICAgPC9HcmlkPiAgICAgXHJcbiAgICA8L0NhcmRDb250ZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJlZEZhcm1lcnNcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiYXhpb3MiLCJTd2FsIiwiR3JpZCIsIkNhcmRDb250ZW50IiwiJCIsIlBhcGVyIiwiVGFibGUiLCJUYWJsZVJvdyIsIlRhYmxlSGVhZCIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlQ29udGFpbmVyIiwiUmVnaXN0ZXJlZEZhcm1lcnMiLCJEYXRhVGFibGUiLCJyZXF1aXJlIiwidGFibGVSZWYiLCJyZWNvcmRzIiwic2V0UmVjb3JkcyIsImxvYWRGYXJtZXJzRGF0YSIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwibG9hZFRhYmxlRGF0YSIsInRhYmxlIiwiY3VycmVudCIsIm9uIiwidHlwZSIsImNvbHVtbnMiLCJ0aXRsZSIsImRlc3Ryb3kiLCJwYWdpbmdUeXBlIiwicGFnZUxlbmd0aCIsInByb2Nlc3NpbmciLCJkb20iLCJzZWxlY3QiLCJzdHlsZSIsImJ1dHRvbnMiLCJleHRlbmQiLCJjbGFzc05hbWUiLCJjdXN0b21pemUiLCJ3aW4iLCJkb2N1bWVudCIsImJvZHkiLCJjc3MiLCJmaW5kIiwiYWRkQ2xhc3MiLCJmblJvd0NhbGxiYWNrIiwiblJvdyIsImFEYXRhIiwiaURpc3BsYXlJbmRleCIsImlEaXNwbGF5SW5kZXhGdWxsIiwiaW5kZXgiLCJodG1sIiwibGVuZ3RoTWVudSIsImNvbHVtbkRlZnMiLCJ0YXJnZXRzIiwicmVuZGVyIiwicm93IiwibWV0YSIsImRlZmF1bHRDb250ZW50IiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsInNwYWNpbmciLCJpdGVtIiwieHMiLCJjb21wb25lbnQiLCJzeCIsIm1pbldpZHRoIiwid2lkdGgiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/farmers/RegisteredFarmers.js\n");

/***/ })

});