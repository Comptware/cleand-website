"use strict";
exports.id = 438;
exports.ids = [438];
exports.modules = {

/***/ 5438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2957);
/* harmony import */ var hooks_useTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1300);
/* harmony import */ var _Customers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7037);
/* harmony import */ var _Vendors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2779);






const SectionOne = ()=>{
    const scrollXContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const customersContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const vendorsContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { setActiveTab , tabsComponent  } = (0,hooks_useTabs__WEBPACK_IMPORTED_MODULE_3__/* .useTabs */ .Y)({
        tabs: utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .TABS */ .G7
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setWidth(window?.innerWidth);
        function handleResize() {
            setWidth(window?.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    const handleActiveSlideUpdate = ()=>{
        const xCustomer = Number(String(customersContainerRef?.current?.getBoundingClientRect()?.x).replace("-", ""));
        const xVendor = Number(String(vendorsContainerRef?.current?.getBoundingClientRect()?.x).replace("-", ""));
        if (xCustomer < xVendor) {
            setActiveTab(utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .TABS[0].title */ .G7[0].title);
        } else {
            setActiveTab(utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .TABS[1].title */ .G7[1].title);
        }
    };
    const handleCustomScroll = (i)=>{
        scrollXContainerRef.current.scrollLeft = width * i;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col justify-start items-center h-fit w-full space-y-7 sticky-boundary sm:mb-[0px] relative bg-grey-dark bg-pattern_bg bg-center bg-cover bg-no-repeat px-5 md:px-[8%] lg:px-[12%]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col justify-between items-center w-full h-fit gap-y-12 sm:mb-[0px] pt-14",
            children: [
                tabsComponent(handleCustomScroll),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full mb-[20px] sm:mb-[10px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full gap-8 md:py-3 md:px-0 no-scrollbar overflow-x-auto scroll-smooth snap-mandatory snap-x",
                            ref: scrollXContainerRef,
                            onScroll: (e)=>handleActiveSlideUpdate(),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: customersContainerRef,
                                    className: "w-full min-w-[100%] max-w-[100%] snap-center overflow-hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Customers__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: vendorsContainerRef,
                                    className: "w-full min-w-[100%] max-w-[100%] snap-center overflow-hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vendors__WEBPACK_IMPORTED_MODULE_5__["default"], {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "faqs",
                            className: "mb-[20px] sm:mb-[70px]"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionOne);


/***/ })

};
;