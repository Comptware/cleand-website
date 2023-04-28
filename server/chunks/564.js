"use strict";
exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 5564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ features_SectionTwo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/chevron-blue.svg
var _circle, _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChevronBlue = function SvgChevronBlue(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 20,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 10,
    cy: 10,
    r: 9.8,
    fill: "#F2F8FF",
    stroke: "#0081EB",
    strokeWidth: 0.4
  })), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.146 8.646a.5.5 0 0 1 .708 0L10 11.793l3.146-3.147a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 0 1 0-.708Z",
    fill: "#0081EB"
  })));
};
/* harmony default export */ const chevron_blue = (SvgChevronBlue);
;// CONCATENATED MODULE: ./src/components/general/accordion/index.js



const Accordion = ({ data , isCollapsed , onClick  })=>{
    const { question , answer  } = data;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: onClick,
        className: "flex flex-col justify-start items-start w-full transition-all duration-[300ms] ease cursor-pointer ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex justify-between items-start w-full py-[12px] ${isCollapsed ? "border-b-[0.4px] border-grey-border" : "border-b border-blue"} border-solid`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "break-words text-left w-full max-w-[430px] text-grey-dark font-light txt-heading-alt",
                        children: question
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `${!isCollapsed && "-rotate-90"} transition-all duration-[300ms] ease`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(chevron_blue, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${isCollapsed ? "leading-[0] max-h-[0px] opacity-0 hidden" : "leading-normal"} py-2 transition-all duration-[300ms] ease cursor-pointer `,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "break-words text-left max-w-[100%] text-grey-dark font-light text-[13px] sm:text-lg",
                    children: answer
                })
            })
        ]
    });
};
/* harmony default export */ const accordion = (Accordion);

// EXTERNAL MODULE: ./src/utils/constants.js + 5 modules
var constants = __webpack_require__(2957);
;// CONCATENATED MODULE: ./src/pages/home/features/SectionTwo.js




const SectionTwo = ()=>{
    const [activeItem, setActiveItem] = (0,external_react_.useState)(constants/* FAQS.0 */.Ty[0]?.question);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row justify-start md:justify-between items-center bg-pattern_bg_2 bg-top bg-contain bg-no-repeat sm:bg-none md:bg-blue-50 w-full min-h-[500px] md:gap-x-8 px-5 md:pr-[5%] lg:pr-[8%]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col justify-start items-center md:items-start md:basis-[50%] w-full md:h-full relative sm:bg-pattern_bg_2 bg-center bg-cover bg-no-repeat pt-10 md:pl-[5%] lg:pl-[8%]",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "text-grey-dark txt-heading mb-1 font-poppins font-medium sm:font-semibold pb-6 md:pb-0 md:pt-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-blue",
                            children: "Common "
                        }),
                        " Questions"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col justify-center items-start text-left md:basis-[50%] w-full h-fit relative",
                children: constants/* FAQS.map */.Ty.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx(accordion, {
                        data: item,
                        isCollapsed: item.question !== activeItem,
                        onClick: ()=>setActiveItem((prev)=>prev === item.question ? "" : item.question)
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const features_SectionTwo = (SectionTwo);


/***/ })

};
;