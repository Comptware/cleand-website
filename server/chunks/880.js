"use strict";
exports.id = 880;
exports.ids = [880];
exports.modules = {

/***/ 2880:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);





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
        className: "flex flex-col justify-start items-center h-fit w-full space-y-7 sticky-boundary sm:mb-[0px] relative bg-blue-50 bg-pattern_blue_bg bg-left bg-contain bg-no-repeat px-5 md:px-[8%] lg:px-[12%] pb-14",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col justify-between items-center w-full h-fit gap-y-12 sm:mb-[0px] pt-14",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center w-full mb-[20px] sm:mb-[10px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-grey-dark txt-heading mb-4 sm:mb-6 font-poppins font-medium sm:font-semibold",
                            children: "Our story"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-black text-base md:text-[20px] mb-2 sm:mb-1 font-light text-center",
                            children: [
                                "Cleand was born after experiencing the frustration of trying to find a reliable and affordable cleaning or laundry service provider. They realized that many people were facing similar challenges and decided to create a platform that would help connect customers with vetted cleaning and laundry service providers.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Our app is designed to be user-friendly and easy to navigate, making it simple for you to find the right cleaning or laundry service provider that suits your needs with just a couple clicks.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "So, whether you need a one-time cleaning service or regular laundry service, our app is here to help you find the right provider for your needs. Thank you for choosing our cleaning and laundry service app!"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-center gap-8 md:gap-12 ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col justify-center items-center gap-[7px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hidden sm:flex justify-center items-center w-[250px] h-[250px] rounded-full bg-grey-dark ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: "/preston.png",
                                        alt: "Picture of the author",
                                        width: 250,
                                        height: 250
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sm:hidden justify-center items-center w-[130px] h-[130px] rounded-full bg-grey-dark ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: "/preston.png",
                                        alt: "Picture of the author",
                                        width: 130,
                                        height: 130
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-grey-dark font-semibold text-[20px] pt-2",
                                    children: "Atogwe Preston"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-grey-blue font-light text-[15px]",
                                    children: "Co-founder & CEO"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col justify-center items-center gap-[7px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hidden sm:flex justify-center items-center w-[250px] h-[250px] rounded-full bg-grey-dark ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: "/divine.png",
                                        alt: "Picture of the author",
                                        width: 250,
                                        height: 250
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sm:hidden justify-center items-center w-[130px] h-[130px] rounded-full bg-grey-dark ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: "/divine.png",
                                        alt: "Picture of the author",
                                        width: 130,
                                        height: 130
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-grey-dark font-semibold text-[20px] pt-2",
                                    children: "Divine Akubo"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-grey-blue font-light text-[15px]",
                                    children: "Co-founder & CTO"
                                })
                            ]
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