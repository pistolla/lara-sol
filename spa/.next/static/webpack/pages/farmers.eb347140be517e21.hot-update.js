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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Table */ \"./node_modules/@mui/material/Table/index.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TableContainer */ \"./node_modules/@mui/material/TableContainer/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// ** React Imports\n\n\n\n// ** MUI Imports\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar RegisteredFarmers = function() {\n    _s();\n    (jquery__WEBPACK_IMPORTED_MODULE_3___default().DataTable) = __webpack_require__(/*! datatables.net */ \"./node_modules/datatables.net/js/jquery.dataTables.mjs\");\n    var tableRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), records = ref[0], setRecords = ref[1];\n    var loadFarmersData = function() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('http://localhost/api/farmers').then(function(res) {\n            setRecords(res.data.data);\n            console.log(records);\n            loadTableData();\n        });\n    };\n    var loadTableData = function() {\n        var table = jquery__WEBPACK_IMPORTED_MODULE_3___default()(tableRef.current).on('order.dt', function(type) {\n            console.log(\"Event fired order\");\n            console.log(type);\n        }).on('search.dt', function(type) {\n            console.log(\"Event fired search\");\n            console.log(type);\n        }).on('page.dt', function(type) {\n            console.log(\"Event fired page\");\n            console.log(type);\n        }).DataTable({\n            data: records,\n            columns: [\n                {\n                    title: \"ID\"\n                },\n                {\n                    title: \"National ID\"\n                },\n                {\n                    title: \"First Name\"\n                },\n                {\n                    title: \"Last Name\"\n                },\n                {\n                    title: \"Email\"\n                },\n                {\n                    title: \"Gender\"\n                },\n                {\n                    title: \"DOB\"\n                },\n                {\n                    title: \"Phone\"\n                },\n                {\n                    title: \"County\"\n                },\n                {\n                    title: \"Ward\"\n                },\n                {\n                    title: \"Village\"\n                },\n                {\n                    title: \"Status\"\n                },\n                {\n                    title: \"Farm Type\"\n                }\n            ],\n            destroy: true,\n            pagingType: \"full_numbers\",\n            pageLength: 20,\n            processing: true,\n            dom: \"Bfrtip\",\n            select: {\n                style: \"single\"\n            },\n            \"language\": {\n                // Add loading image <img src=\"loader.gif\" /> tag, or simple text\n                \"processing\": \"Please wait for the response...\"\n            },\n            buttons: [\n                {\n                    extend: \"pageLength\",\n                    className: \"btn btn-secondary bg-secondary\"\n                },\n                {\n                    extend: \"copy\",\n                    className: \"btn btn-secondary bg-secondary\"\n                },\n                {\n                    extend: \"csv\",\n                    className: \"btn btn-secondary bg-secondary\"\n                },\n                {\n                    extend: \"print\",\n                    customize: function customize(win) {\n                        jquery__WEBPACK_IMPORTED_MODULE_3___default()(win.document.body).css(\"font-size\", \"10pt\");\n                        jquery__WEBPACK_IMPORTED_MODULE_3___default()(win.document.body).find(\"table\").addClass(\"compact\").css(\"font-size\", \"inherit\");\n                    },\n                    className: \"btn btn-secondary bg-secondary\"\n                }, \n            ],\n            fnRowCallback: function fnRowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {\n                var index = iDisplayIndexFull + 1;\n                jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"td:first\", nRow).html(index);\n                return nRow;\n            },\n            lengthMenu: [\n                [\n                    10,\n                    20,\n                    30,\n                    50,\n                    -1\n                ],\n                [\n                    10,\n                    20,\n                    30,\n                    50,\n                    \"All\"\n                ], \n            ],\n            columnDefs: [\n                {\n                    targets: 0,\n                    render: function render(data, type, row, meta) {\n                        return type === \"export\" ? meta.row + 1 : data;\n                    }\n                }, \n            ]\n        });\n        return function loadTableData() {\n            console.log(\"Table destroyed\");\n            table.destroy();\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadFarmersData();\n    }, [\n        records\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\codesafi\\\\source\\\\repos\\\\larasol\\\\spa\\\\src\\\\views\\\\farmers\\\\RegisteredFarmers.js\",\n            lineNumber: 137,\n            columnNumber: 12\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            container: true,\n            spacing: 7,\n            __source: {\n                fileName: \"C:\\\\Users\\\\codesafi\\\\source\\\\repos\\\\larasol\\\\spa\\\\src\\\\views\\\\farmers\\\\RegisteredFarmers.js\",\n                lineNumber: 138,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                item: true,\n                xs: 12,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\codesafi\\\\source\\\\repos\\\\larasol\\\\spa\\\\src\\\\views\\\\farmers\\\\RegisteredFarmers.js\",\n                    lineNumber: 139,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\codesafi\\\\source\\\\repos\\\\larasol\\\\spa\\\\src\\\\views\\\\farmers\\\\RegisteredFarmers.js\",\n                        lineNumber: 140,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        sx: {\n                            minWidth: 650\n                        },\n                        className: \"display\",\n                        width: \"100%\",\n                        ref: tableRef,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\codesafi\\\\source\\\\repos\\\\larasol\\\\spa\\\\src\\\\views\\\\farmers\\\\RegisteredFarmers.js\",\n                            lineNumber: 141,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    })\n                })\n            })\n        })\n    }));\n};\n_s(RegisteredFarmers, \"S4yD2lr+qRlGg98BNZhmPskqLnI=\");\n_c = RegisteredFarmers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisteredFarmers);\nvar _c;\n$RefreshReg$(_c, \"RegisteredFarmers\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvZmFybWVycy9SZWdpc3RlcmVkRmFybWVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEVBQW1CO0FBS0w7QUFFVztBQUNLO0FBRTlCLEVBQWlCO0FBQ29CO0FBQ2M7QUFFN0I7QUFDaUI7QUFDQTtBQUNNO0FBQ0U7QUFDQTtBQUNBO0FBQ1U7OztBQUV6RCxHQUFLLENBQUNlLGlCQUFpQixHQUFHLFFBQVEsR0FBRixDQUFDOztJQUM3QlIseURBQVcsR0FBR1UsbUJBQU8sQ0FBQyw4RUFBZ0I7SUFDdEMsR0FBSyxDQUFDQyxRQUFRLEdBQUdqQiw2Q0FBTTtJQUN2QixHQUFLLENBQXlCQyxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWxDaUIsT0FBTyxHQUFnQmpCLEdBQVksS0FBMUJrQixVQUFVLEdBQUlsQixHQUFZO0lBRTFDLEdBQUssQ0FBQ21CLGVBQWUsR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUMzQmxCLGlEQUFTLENBQUMsQ0FBOEIsK0JBQUVvQixJQUFJLENBQUNDLFFBQVEsQ0FBUkEsR0FBRyxFQUNsRCxDQUFDO1lBQ0NKLFVBQVUsQ0FBQ0ksR0FBRyxDQUFDQyxJQUFJLENBQUNBLElBQUk7WUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixPQUFPO1lBQ25CUyxhQUFhO1FBQ2YsQ0FBQztJQUNMLENBQUM7SUFFSCxHQUFLLENBQUNBLGFBQWEsR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUMzQixHQUFLLENBQUNDLEtBQUssR0FBR3RCLDZDQUFDLENBQUNXLFFBQVEsQ0FBQ1ksT0FBTyxFQUMvQkMsRUFBRSxDQUFDLENBQVUsV0FBRSxRQUFRLENBQUVDLElBQUksRUFBRSxDQUFDO1lBQzdCTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFtQjtZQUMvQkQsT0FBTyxDQUFDQyxHQUFHLENBQUNLLElBQUk7UUFDcEIsQ0FBQyxFQUNBRCxFQUFFLENBQUMsQ0FBVyxZQUFFLFFBQVEsQ0FBRUMsSUFB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QUU7Ozs7Ozs7K0ZBQ25CdEQsb0VBQWM7b0JBQUN1RCxTQUFTLEVBQUU3RCwyREFBSzs7Ozs7OzttR0FDM0JDLDJEQUFLO3dCQUFDNkQsRUFBRSxFQUFFLENBQUM7NEJBQUNDLFFBQVEsRUFBRSxHQUFHO3dCQUFDLENBQUM7d0JBQUUzQixTQUFTLEVBQUMsQ0FBUzt3QkFBQzRCLEtBQUssRUFBQyxDQUFNO3dCQUFDQyxHQUFHLEVBQUd2RCxRQUFROzs7Ozs7Ozs7Ozs7QUFRN0YsQ0FBQztHQTdIS0gsaUJBQWlCO0tBQWpCQSxpQkFBaUI7QUErSHZCLCtEQUFlQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL2Zhcm1lcnMvUmVnaXN0ZXJlZEZhcm1lcnMuanM/OTU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiBSZWFjdCBJbXBvcnRzXHJcbmltcG9ydCB7XHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZVJlZixcclxuICB1c2VTdGF0ZVxyXG59IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuXHJcbi8vICoqIE1VSSBJbXBvcnRzXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCdcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnXHJcblxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJ1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZSdcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVSb3cnXHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUhlYWQnXHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUJvZHknXHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUNlbGwnXHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQ29udGFpbmVyJ1xyXG5cclxuY29uc3QgUmVnaXN0ZXJlZEZhcm1lcnMgPSAoKSA9PiB7XHJcbiAgICAkLkRhdGFUYWJsZSA9IHJlcXVpcmUoJ2RhdGF0YWJsZXMubmV0JylcclxuICAgIGNvbnN0IHRhYmxlUmVmID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtyZWNvcmRzLCBzZXRSZWNvcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkRmFybWVyc0RhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2FwaS9mYXJtZXJzJykudGhlbihyZXMgPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2V0UmVjb3JkcyhyZXMuZGF0YS5kYXRhKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlY29yZHMpO1xyXG4gICAgICAgICAgbG9hZFRhYmxlRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICBjb25zdCBsb2FkVGFibGVEYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFibGUgPSAkKHRhYmxlUmVmLmN1cnJlbnQpXHJcbiAgICAub24oJ29yZGVyLmR0JywgZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50IGZpcmVkIG9yZGVyXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZSlcclxuICAgIH0pXHJcbiAgICAub24oJ3NlYXJjaC5kdCcsIGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmVudCBmaXJlZCBzZWFyY2hcIilcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlKVxyXG4gICAgfSlcclxuICAgIC5vbigncGFnZS5kdCcsIGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmVudCBmaXJlZCBwYWdlXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZSlcclxuICAgIH0pLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgZGF0YTogcmVjb3JkcyxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiSURcIiB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiBcIk5hdGlvbmFsIElEXCIgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogXCJGaXJzdCBOYW1lXCIgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogXCJMYXN0IE5hbWVcIiB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkVtYWlsXCIgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogXCJHZW5kZXJcIiB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkRPQlwiIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiUGhvbmVcIiB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkNvdW50eVwiIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiV2FyZFwiIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiVmlsbGFnZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiU3RhdHVzXCIgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogXCJGYXJtIFR5cGVcIiB9IFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGVzdHJveTogdHJ1ZSxcclxuICAgICAgICBwYWdpbmdUeXBlOiBcImZ1bGxfbnVtYmVyc1wiLFxyXG4gICAgICAgIHBhZ2VMZW5ndGg6IDIwLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgZG9tOiBcIkJmcnRpcFwiLFxyXG4gICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgc3R5bGU6IFwic2luZ2xlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICAgICAgLy8gQWRkIGxvYWRpbmcgaW1hZ2UgPGltZyBzcmM9XCJsb2FkZXIuZ2lmXCIgLz4gdGFnLCBvciBzaW1wbGUgdGV4dFxyXG4gICAgICAgICAgICBcInByb2Nlc3NpbmdcIjogXCJQbGVhc2Ugd2FpdCBmb3IgdGhlIHJlc3BvbnNlLi4uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ1dHRvbnM6IFt7XHJcbiAgICAgICAgICAgIGV4dGVuZDogXCJwYWdlTGVuZ3RoXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLXNlY29uZGFyeSBiZy1zZWNvbmRhcnlcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGV4dGVuZDogXCJjb3B5XCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLXNlY29uZGFyeSBiZy1zZWNvbmRhcnlcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGV4dGVuZDogXCJjc3ZcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tc2Vjb25kYXJ5IGJnLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZXh0ZW5kOiBcInByaW50XCIsXHJcbiAgICAgICAgICAgIGN1c3RvbWl6ZTogZnVuY3Rpb24gKHdpbikge1xyXG4gICAgICAgICAgICAgICQod2luLmRvY3VtZW50LmJvZHkpLmNzcyhcImZvbnQtc2l6ZVwiLCBcIjEwcHRcIik7XHJcbiAgICAgICAgICAgICAgJCh3aW4uZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwidGFibGVcIilcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImNvbXBhY3RcIilcclxuICAgICAgICAgICAgICAgIC5jc3MoXCJmb250LXNpemVcIiwgXCJpbmhlcml0XCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgYmctc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIGZuUm93Q2FsbGJhY2s6IGZ1bmN0aW9uIChcclxuICAgICAgICAgIG5Sb3csXHJcbiAgICAgICAgICBhRGF0YSxcclxuICAgICAgICAgIGlEaXNwbGF5SW5kZXgsXHJcbiAgICAgICAgICBpRGlzcGxheUluZGV4RnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdmFyIGluZGV4ID0gaURpc3BsYXlJbmRleEZ1bGwgKyAxO1xyXG4gICAgICAgICAgJChcInRkOmZpcnN0XCIsIG5Sb3cpLmh0bWwoaW5kZXgpO1xyXG4gICAgICAgICAgcmV0dXJuIG5Sb3c7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgWzEwLCAyMCwgMzAsIDUwLCAtMV0sXHJcbiAgICAgICAgICBbMTAsIDIwLCAzMCwgNTAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW3tcclxuICAgICAgICAgIHRhcmdldHM6IDAsXHJcbiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCByb3csIG1ldGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGUgPT09IFwiZXhwb3J0XCIgPyBtZXRhLnJvdyArIDEgOiBkYXRhO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LCBdLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGFibGUgZGVzdHJveWVkXCIpXHJcbiAgICAgICAgdGFibGUuZGVzdHJveSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEZhcm1lcnNEYXRhKCk7XHJcbiAgfSwgW3JlY29yZHNdKVxyXG5cclxuICByZXR1cm4gKCA8Q2FyZENvbnRlbnQgPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nID0geyA3fSA+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHMgPSB7IDEyIH0gPlxyXG4gICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgc3g9e3sgbWluV2lkdGg6IDY1MCB9fSBjbGFzc05hbWU9XCJkaXNwbGF5XCIgd2lkdGg9XCIxMDAlXCIgcmVmPXsgdGFibGVSZWYgfT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+IFxyXG4gICAgICAgIDwvR3JpZD4gICAgIFxyXG4gICAgPC9DYXJkQ29udGVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyZWRGYXJtZXJzXHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiU3dhbCIsIkdyaWQiLCJDYXJkQ29udGVudCIsIiQiLCJQYXBlciIsIlRhYmxlIiwiVGFibGVSb3ciLCJUYWJsZUhlYWQiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlJlZ2lzdGVyZWRGYXJtZXJzIiwiRGF0YVRhYmxlIiwicmVxdWlyZSIsInRhYmxlUmVmIiwicmVjb3JkcyIsInNldFJlY29yZHMiLCJsb2FkRmFybWVyc0RhdGEiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsb2FkVGFibGVEYXRhIiwidGFibGUiLCJjdXJyZW50Iiwib24iLCJ0eXBlIiwiY29sdW1ucyIsInRpdGxlIiwiZGVzdHJveSIsInBhZ2luZ1R5cGUiLCJwYWdlTGVuZ3RoIiwicHJvY2Vzc2luZyIsImRvbSIsInNlbGVjdCIsInN0eWxlIiwiYnV0dG9ucyIsImV4dGVuZCIsImNsYXNzTmFtZSIsImN1c3RvbWl6ZSIsIndpbiIsImRvY3VtZW50IiwiYm9keSIsImNzcyIsImZpbmQiLCJhZGRDbGFzcyIsImZuUm93Q2FsbGJhY2siLCJuUm93IiwiYURhdGEiLCJpRGlzcGxheUluZGV4IiwiaURpc3BsYXlJbmRleEZ1bGwiLCJpbmRleCIsImh0bWwiLCJsZW5ndGhNZW51IiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJyZW5kZXIiLCJyb3ciLCJtZXRhIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsImNvbXBvbmVudCIsInN4IiwibWluV2lkdGgiLCJ3aWR0aCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/views/farmers/RegisteredFarmers.js\n");

/***/ })

});