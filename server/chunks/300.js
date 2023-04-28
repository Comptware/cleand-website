"use strict";
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 1300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useTabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useTabs = ({ tabs  })=>{
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tabs?.[0]?.title);
    const [sliderWidth, setSliderWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [sliderPosition, setSliderPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const activeTabIndex = tabs?.findIndex(({ title  })=>title === activeTab);
    const handleSlide = ()=>{
        const width = containerRef?.current?.getBoundingClientRect()?.width;
        const slideContainerWidth = width / tabs.length;
        const slideWidth = slideContainerWidth;
        const slidePosition = slideContainerWidth * activeTabIndex;
        setSliderWidth(slideWidth);
        setSliderPosition(slidePosition);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleSlide();
    }, [
        activeTab,
        handleSlide
    ]);
    const tabsComponent = (onClick)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-fit h-fit px-0.5 bg rounded-[50px] bg-blue-50",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-between items-center w-fit relative",
                ref: containerRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-between items-center w-fit",
                        children: tabs.map(({ title  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `z-[9] w-[165px] px-3 h-[40px] text-center whitespace-nowrap text-[15px] hover:bg-grey-lighter transition-all duration-500 ease-in-out rounded-t-lg cursor-pointer ${title === activeTab ? "text-grey-dark" : "text-grey-blue"}`,
                                onClick: ()=>{
                                    setActiveTab(title);
                                    onClick && onClick(index);
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "",
                                    children: [
                                        title,
                                        " "
                                    ]
                                })
                            }, title + index))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " absolute left-0 top-[4px] h-[32px] bg-white rounded-[50px] transition-all duration-500 ease-in-out shadow-[0px_2px_4px_rgba(0,0,0,0.1)]",
                        style: {
                            width: `${sliderWidth}px`,
                            transform: `translateX(${sliderPosition}px)`
                        }
                    })
                ]
            })
        });
    return {
        activeTabIndex,
        tabsComponent,
        setActiveTab
    };
};


/***/ })

};
;