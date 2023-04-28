"use strict";
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 4726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_general_button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9271);
/* harmony import */ var components_general_input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9343);
/* harmony import */ var hooks_useApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useApi__WEBPACK_IMPORTED_MODULE_4__]);
hooks_useApi__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Banner = ()=>{
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { registerUser , userLoading  } = (0,hooks_useApi__WEBPACK_IMPORTED_MODULE_4__/* .useApi */ .h)({
        userData: {
            email
        }
    });
    const handleRegisterUser = (e)=>{
        e.preventDefault();
        registerUser();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col md:flex-row justify-center md:justify-between items-end space-y-10 md:space-y-0 w-full h-fit min-h-[450px] md:space-x-8 website-banner pt-[95px] md:pt-[14px] px-5 md:px-[8%] lg:px-[12%] relative bg-grey-darker z-20 overflow-y-hidden bg-pattern_bg bg-center bg-cover bg-no-repeat",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center items-start text-left md:basis-[60%] w-full h-fit z-[5] !ml-0 !mt-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-blue-50 txt-heading mb-3 md:mb-4 font-poppins font-semibold ",
                        children: "About Cleand"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-blue-50 font-light txt-title mb-5 md:mb-6 ",
                        children: "At our core, we believe that everyone deserves a clean and comfortable living environment and we are committed to making that a reality"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-blue-50 font-medium txt-heading-alt mb-2 sm:mb-3 ",
                        children: "Be the first to know when we launch."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleRegisterUser,
                        className: "flex flex-col sm:flex-row justify-start items-center w-full gap-4 mb-1.5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_input_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                required: true,
                                type: "email",
                                placeholder: "Enter your email address",
                                value: email,
                                onChangeFunc: (val)=>setEmail(val)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_button_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                text: "Notify me",
                                onClick: ()=>window?.dataLayer?.push({
                                        event: "event",
                                        eventProps: {
                                            category: "Notify me",
                                            action: "Notify me",
                                            label: "Notify me - home hero section",
                                            value: 1
                                        }
                                    }),
                                type: "submit",
                                isLoading: userLoading,
                                height: "h-[42px] sm:h-[44px]",
                                textClass: "text-[15px]",
                                className: "w-full sm:w-fit"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-blue-50 font-light txt-base mb-3 md:mb-9 ",
                        children: [
                            "*Don't worry we will not spam you ",
                            ":)"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col justify-center items-center md:items-end md:basis-[40%] w-full md:max-h-[60vh] relative z-[5]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col justify-center items-center md:items-end w-full h-full min-h-[375px] rounded-[45px] bg-hero bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center z-[8]"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;