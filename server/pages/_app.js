(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,881,369,425,569];
exports.modules = {

/***/ 6319:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Nunito_Sans_6f3a8f', '__Nunito_Sans_Fallback_6f3a8f'","fontStyle":"normal"},
	"className": "__className_6f3a8f",
	"variable": "__variable_6f3a8f"
};


/***/ }),

/***/ 6364:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Poppins_b4d702', '__Poppins_Fallback_b4d702'","fontStyle":"normal"},
	"className": "__className_b4d702",
	"variable": "__variable_b4d702"
};


/***/ }),

/***/ 6691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/pages/_app.js","import":"Poppins","arguments":[{"subsets":["latin"],"display":"swap","variable":"--font-poppins","weight":["100","200","300","400","500","600","700","800","900"]}],"variableName":"poppins"}
var _app_js_import_Poppins_arguments_subsets_latin_display_swap_variable_font_poppins_weight_100_200_300_400_500_600_700_800_900_variableName_poppins_ = __webpack_require__(6364);
var _app_js_import_Poppins_arguments_subsets_latin_display_swap_variable_font_poppins_weight_100_200_300_400_500_600_700_800_900_variableName_poppins_default = /*#__PURE__*/__webpack_require__.n(_app_js_import_Poppins_arguments_subsets_latin_display_swap_variable_font_poppins_weight_100_200_300_400_500_600_700_800_900_variableName_poppins_);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/pages/_app.js","import":"Nunito_Sans","arguments":[{"subsets":["latin"],"display":"swap","variable":"--font-nunito_sans","weight":["200","300","400","600","700","800","900"]}],"variableName":"nunito_sans"}
var _app_js_import_Nunito_Sans_arguments_subsets_latin_display_swap_variable_font_nunito_sans_weight_200_300_400_600_700_800_900_variableName_nunito_sans_ = __webpack_require__(6319);
var _app_js_import_Nunito_Sans_arguments_subsets_latin_display_swap_variable_font_nunito_sans_weight_200_300_400_600_700_800_900_variableName_nunito_sans_default = /*#__PURE__*/__webpack_require__.n(_app_js_import_Nunito_Sans_arguments_subsets_latin_display_swap_variable_font_nunito_sans_weight_200_300_400_600_700_800_900_variableName_nunito_sans_);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/utils/gtag.js
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID;
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const gtag_event = ({ action , category , label , value  })=>{
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};

;// CONCATENATED MODULE: ./src/pages/_app.js








function App({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "gtm-script",
                strategy: "afterInteractive",
                src: `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "gtm-tag-script",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${GA_TRACKING_ID}', {
         page_path: window.location.pathname,
       });
     `
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: `${(_app_js_import_Nunito_Sans_arguments_subsets_latin_display_swap_variable_font_nunito_sans_weight_200_300_400_600_700_800_900_variableName_nunito_sans_default()).variable} ${(_app_js_import_Poppins_arguments_subsets_latin_display_swap_variable_font_poppins_weight_100_200_300_400_500_600_700_800_900_variableName_poppins_default()).variable}  font-nunito_sans`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3573)


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,573], () => (__webpack_exec__(6691)));
module.exports = __webpack_exports__;

})();