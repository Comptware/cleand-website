"use strict";
exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 7037:
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



const Customers = ()=>{
    const itemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .CUSTOMER_DATA[0] */ .kq[0]);
    const activeTabIndex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .CUSTOMER_DATA */ .kq?.findIndex(({ image  })=>image === activeTab?.image), [
        activeTab
    ]);
    const slidePositionSlg = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>202 * activeTabIndex, [
        activeTabIndex
    ]);
    const slidePositionMd = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>230 * activeTabIndex, [
        activeTabIndex
    ]);
    const slidePosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>190 * activeTabIndex, [
        activeTabIndex
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-between items-center w-full h-fit md:gap-y-12",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-between items-start w-full h-fit md:pt-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-white txt-heading mb-2 sm:mb-1 font-poppins font-medium sm:font-semibold",
                        children: [
                            "Busy schedule? No problem!",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-blue-alt",
                                children: "Cleand"
                            }),
                            " got",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                className: "hidden lg:block"
                            }),
                            "you covered"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-blue-50 font-light txt-title mb-5 md:mb-6 ",
                        children: "Your Saturdays are too precious to spent on cleaning chores, you should be outside with the gang."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-10 md:gap-y-0 w-full min-h-[500px] md:gap-x-8 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col justify-center items-center md:items-start md:basis-[50%] slg:basis-[40%] w-full relative pt-5 md:pt-0",
                        children: activeTab?.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `flex flex-col justify-center items-center md:items-start w-full h-full min-h-[350px] rounded-[45px] ${activeTab?.image} bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center md:bg-left z-[8] md:scale-150 md:ml-[125px] transition-all duration-[500ms] ease-in`
                        }) : null
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col justify-center items-start text-left md:basis-[50%] slg:basis-[60%] w-full h-fit relative",
                        children: [
                            utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .CUSTOMER_DATA.map */ .kq.map(({ icon , title , body , image  }, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col justify-center items-start gap-[12px] z-[9] px-6 h-[190px] md:h-[230px] slg:h-[202px] ",
                                    ref: (el)=>itemsRef.current[i] = el,
                                    onMouseEnter: ()=>setActiveTab({
                                            image
                                        }),
                                    onClick: ()=>setActiveTab({
                                            image
                                        }),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "pb-3",
                                            children: icon
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-blue-50 font-medium text-base sm:text-lg",
                                            children: title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-blue-50 font-light text-sm sm:text-[15px]",
                                            children: body
                                        })
                                    ]
                                }, title + i)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden md:block slg:hidden absolute left-0 top-[4px] w-full h-[230px] bg-black-light rounded-[5px] transition-all duration-500 ease-in-out shadow-[0px_2px_4px_rgba(0,0,0,0.1)]",
                                style: {
                                    transform: `translateY(${slidePositionMd}px)`
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden slg:block absolute left-0 top-[4px] w-full h-[202px] bg-black-light rounded-[5px] transition-all duration-500 ease-in-out shadow-[0px_2px_4px_rgba(0,0,0,0.1)]",
                                style: {
                                    transform: `translateY(${slidePositionSlg}px)`
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:hidden absolute left-0 top-[4px] w-full h-[190px] bg-black-light rounded-[5px] transition-all duration-500 ease-in-out shadow-[0px_2px_4px_rgba(0,0,0,0.1)]",
                                style: {
                                    transform: `translateY(${slidePosition}px)`
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customers);


/***/ })

};
;