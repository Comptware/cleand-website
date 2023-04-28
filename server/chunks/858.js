exports.id = 858;
exports.ids = [858];
exports.modules = {

/***/ 7634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCircleMark = function SvgCircleMark(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 40,
    height: 40,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0Zm8.634 13.616a1.25 1.25 0 0 0-1.666-.091l-.102.091L16.75 23.732l-3.616-3.616a1.25 1.25 0 0 0-1.859 1.666l.091.102 4.5 4.5a1.25 1.25 0 0 0 1.666.091l.102-.091 11-11a1.25 1.25 0 0 0 0-1.768Z",
    fill: "#0075D6"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCircleMark);

/***/ }),

/***/ 8727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3618);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select_async__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4875);
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__);







const Select = ({ label , options , name , onChange , async , labelControl , address , addressValue , addressPlaceholder , fullWidth , style , ...rest })=>{
    const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
    const classNames = `${fullWidth ? "w-full" : "w-fit"} h-fit mx-[1px] text-lg md:text-[13px] border-slate-300 placeholder-slate-400 !placeholder:text-grey cursor-pointer`;
    const styles = {
        control: (base, state)=>({
                ...base,
                height: address ? "38px" : "40px",
                minHeight: address ? "38px" : "40px",
                borderRadius: 5,
                border: state.isFocused ? `1px solid ${style?.color || "#0081EB"} !important` : `1px solid ${style?.color || "#B0B6C3"} !important`,
                outline: state.isFocused ? "none !important" : "none !important",
                boxShadow: "none",
                cursor: "pointer",
                backgroundColor: `${style?.background || ""}`
            }),
        singleValue: (base)=>({
                ...base,
                color: `${style?.color || "#000000"} !important`
            }),
        indicatorSeparator: ()=>({
                display: "none"
            }),
        placeholder: (base)=>({
                ...base,
                color: addressValue ? "#000000" : "#ADB2B8",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "99%"
            }),
        menu: (base)=>({
                ...base,
                backgroundColor: "white",
                zIndex: 20,
                cursor: "pointer",
                border: "1px solid #E1E1E1",
                top: "40px",
                borderRadius: 8
            }),
        option: (base, state)=>({
                ...base,
                fontSize: "12px",
                backgroundColor: (state.isFocused || state.isSelected) && "#F5F6FA",
                cursor: "pointer",
                color: "#000"
            })
    };
    const DropdownIndicator = (props)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_2__.components.DropdownIndicator, {
            ...props,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsCaretDownFill, {
                size: 11,
                color: style?.color || "#000"
            })
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${fullWidth ? "w-full" : "w-fit"}`,
        children: [
            label && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between mb-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "general-input-label text-grey-dark text-[13px] font-light",
                        children: label
                    }),
                    labelControl && labelControl
                ]
            }),
            async ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select_async__WEBPACK_IMPORTED_MODULE_3___default()), {
                cacheOptions: true,
                options: options,
                onChange: (selected)=>onChange(selected, {
                        name,
                        value: selected
                    }),
                styles: styles,
                className: classNames,
                ...rest
            }) : address ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4___default()), {
                apiKey: GOOGLE_MAP_API_KEY,
                selectProps: {
                    address: addressValue,
                    onChange,
                    styles,
                    options,
                    placeholder: addressPlaceholder,
                    componentRestrictions: {
                        country: "ng"
                    }
                }
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_2___default()), {
                options: options,
                onChange: (selected)=>onChange(selected, {
                        name,
                        value: selected
                    }),
                styles: styles,
                className: classNames,
                components: {
                    DropdownIndicator
                },
                ...rest
            })
        ]
    });
};
Select.propTypes = {
    label: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    options: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
    async: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
    labelControl: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),
    address: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
    addressValue: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),
    addressPlaceholder: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ }),

/***/ 5673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(483);
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_phone_number_input_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var react_phone_number_input_locale_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3445);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_phone_number_input_input__WEBPACK_IMPORTED_MODULE_4__, react_phone_number_input_locale_en_json__WEBPACK_IMPORTED_MODULE_5__]);
([react_phone_number_input_input__WEBPACK_IMPORTED_MODULE_4__, react_phone_number_input_locale_en_json__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useClickOutside = (handler)=>{
    const domNode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target || event.target.childNodes)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
const CountrySelect = ({ value , onChange , labels , ...rest })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
        ...rest,
        value: value,
        onChange: (event)=>onChange(event.target.value || undefined),
        disabled: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "",
                children: labels.ZZ
            }),
            (0,react_phone_number_input_input__WEBPACK_IMPORTED_MODULE_4__.getCountries)().map((country)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                    value: country,
                    children: [
                        labels[country],
                        " +",
                        (0,react_phone_number_input_input__WEBPACK_IMPORTED_MODULE_4__.getCountryCallingCode)(country)
                    ]
                }, country))
        ]
    });
const PhoneNumber = ({ placeholder , name , flag_name , label , value , labelClass , onPhoneChange , onCountryChange , countryClicked , isError  })=>{
    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const domNode = useClickOutside(()=>{
        setActive(false);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setCountry(countryClicked);
    }, [
        countryClicked
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isError) return setError(false);
        setError(true);
    }, [
        isError
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col justify-start items-start gap-[5px]",
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `${labelClass} text-grey-dark general-input-label text-[13px] font-light`,
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `h-[40px] border border-gray-border rounded-[5px] text-grey focus:border flex flex-row w-full text-gray leading-normal shadow-none outline-none focus:outline-none focus:ring-0 focus:text-gray overflow-ellipsis overflow-hidden whitespace-nowrap
        ${error ? "!border-red" : active ? "border-blue" : "hover:bg-grey-whitesmoke border-grey-border"}
        `,
                ref: domNode,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-center items-center h-full relative overflow-hidden space-x-2 c border-gray-xlight ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute h-full top-0 left-0 z-10 opacity-0 w-full cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CountrySelect, {
                                    className: "h-full cursor-pointer",
                                    labels: react_phone_number_input_locale_en_json__WEBPACK_IMPORTED_MODULE_5__["default"],
                                    value: country || "NG",
                                    onChange: (value)=>onCountryChange(value, {
                                            name: flag_name,
                                            value
                                        }),
                                    name: "countrySelect"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-10 ml-4 flex justify-center items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex h-6 w-6 relative overflow-hidden !mx-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        className: "h-full w-6",
                                        alt: country || "NG",
                                        src: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${country || "NG"}.svg`,
                                        fill: true
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ml-2 w-full flex justify-start items-center",
                        onClick: ()=>setActive(true),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_phone_number_input_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            country: country || "NG",
                            value: value,
                            className: `text-lg md:text-[13px] placeholder:text-grey shadow-none outline-none focus:outline-none focus:ring-0 focus:text-black h-full w-full pl-2 
            ${value && value.length > 1 && "text-black"}
            `,
                            onChange: (value)=>onPhoneChange(value, {
                                    name,
                                    value
                                }),
                            placeholder: placeholder,
                            name: name
                        })
                    })
                ]
            })
        ]
    });
};
PhoneNumber.propTypes = {
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    flag_name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    onPhoneChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    onCountryChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    countryClicked: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    isError: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    labelClass: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
CountrySelect.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    labels: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
    rest: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneNumber);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_circle_mark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7634);
/* harmony import */ var components_general_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3655);
/* harmony import */ var components_general_phoneNumber_phoneNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5673);
/* harmony import */ var components_general_input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9343);
/* harmony import */ var components_general_input_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8727);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2957);
/* harmony import */ var utils_cleanPayload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3261);
/* harmony import */ var hooks_useApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4312);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_general_phoneNumber_phoneNumber__WEBPACK_IMPORTED_MODULE_4__, hooks_useApi__WEBPACK_IMPORTED_MODULE_8__]);
([components_general_phoneNumber_phoneNumber__WEBPACK_IMPORTED_MODULE_4__, hooks_useApi__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Form = ()=>{
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        firstName: "",
        lastName: "",
        businessName: "",
        category: "Cleaning Service",
        address: "",
        country: "Nigeria",
        state: "",
        phoneNumber: "",
        email: "",
        state: ""
    });
    const [saveSuccess, setSaveSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(form);
        await registerVendor();
        setSaveSuccess(true);
    };
    const handleChange = (prop, val)=>{
        setForm({
            ...form,
            [prop]: val
        });
    };
    const formDisabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>!Object.values(form).every((x)=>x), [
        form
    ]);
    const vendorData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        let payload = {
            ...form,
            state: form?.state?.value,
            country: ""
        };
        payload = (0,utils_cleanPayload__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(payload);
        return payload;
    }, [
        form
    ]);
    const { registerVendor , vendorLoading  } = (0,hooks_useApi__WEBPACK_IMPORTED_MODULE_8__/* .useApi */ .h)({
        vendorData
    });
    const successPage = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col mt-[-50px] md:mt-2 gap-2 items-center justify-center w-full min-h-[300px] h-screen",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "pb-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_circle_mark_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-grey-dark font-medium text-[14px] md:text-[18px]",
                    children: "Your details has been successfully collected"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-grey-label font-light text-[13px] md:text-[15px] pb-5",
                    children: "Our team will reach out to you soon"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                        text: "Go back to landing page",
                        type: "button",
                        fullWidth: true,
                        onClick: ()=>{}
                    })
                })
            ]
        });
    return saveSuccess ? successPage() : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-start items-start text-left w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col justify-start items-center mb-8 sm:mb-4 mt-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-grey-dark font-medium txt-title mb-1 ",
                        children: "Become a vendor"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-grey-dark font-light text-[13px] md:text-[15px]",
                        children: "Let’s help your business grow and reach more cusomers"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "flex flex-col justify-start items-start w-full h-full relative sm:px-5 gap-[20px] mb-24 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                label: "First name",
                                value: form?.firstName,
                                onChangeFunc: (val)=>handleChange("firstName", val),
                                placeholder: "Enter first name",
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                label: "Last name",
                                value: form?.lastName,
                                onChangeFunc: (val)=>handleChange("lastName", val),
                                placeholder: "Enter last name",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        label: "Business name",
                        value: form?.businessName,
                        onChangeFunc: (val)=>handleChange("businessName", val),
                        placeholder: "Enter business name",
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        label: "Business category",
                        value: form?.category,
                        onChangeFunc: (val)=>handleChange("category", val),
                        placeholder: "Enter business category",
                        required: true,
                        isDisabled: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        label: "Business address",
                        value: form?.address,
                        onChangeFunc: (val)=>handleChange("address", val),
                        placeholder: "Enter business address",
                        required: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                label: "Country",
                                value: form?.country,
                                onChangeFunc: (val)=>handleChange("country", val),
                                placeholder: "Enter country",
                                isDisabled: true,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_input_Select__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                label: "State",
                                placeholder: "Select state",
                                options: utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .STATES */ .PO,
                                onChange: (val)=>handleChange("state", val),
                                value: form.state,
                                fullWidth: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        label: "Business email address",
                        value: form?.email,
                        onChangeFunc: (val)=>handleChange("email", val),
                        placeholder: "Enter business email address",
                        type: "email",
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_phoneNumber_phoneNumber__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        label: "Business phone number",
                        value: form.phoneNumber,
                        onPhoneChange: (val)=>handleChange("phoneNumber", val),
                        placeholder: "Enter business phone number",
                        // labelClass="!text-black regular-font"
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_general_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                        text: "Sign up",
                        isDisabled: formDisabled,
                        onClick: handleSubmit,
                        type: "submit",
                        isLoading: vendorLoading,
                        fullWidth: true
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cleanPayload = (payload)=>{
    Object.keys(payload).forEach((key)=>{
        if (!payload[key] || payload[key] === {}) {
            delete payload[key];
        }
    });
    return payload;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cleanPayload);


/***/ }),

/***/ 483:
/***/ (() => {



/***/ })

};
;