"use strict";
exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ VerilyDemo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(405);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/VerilyDemo/VerilyDemo.css.tsx
const _defaultExport = new String('#verily-demo-main-content.jsx-a1ea729aefa8e409{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:start;-ms-flex-line-pack:start;align-content:start;font-size:1rem;position:relative;height:100vh;overflow-y:auto;overflow-x:hidden;isolation:isolate}@-webkit-keyframes collapse{from{-webkit-clip-path:polygon(0%0%,100%0%,100%100%,0%100%);clip-path:polygon(0%0%,100%0%,100%100%,0%100%);max-height:100%;height:100%}to{-webkit-clip-path:polygon(0%0%,100%0%,100%0%,0%0%);clip-path:polygon(0%0%,100%0%,100%0%,0%0%);max-height:0;height:0}}@-moz-keyframes collapse{from{clip-path:polygon(0%0%,100%0%,100%100%,0%100%);max-height:100%;height:100%}to{clip-path:polygon(0%0%,100%0%,100%0%,0%0%);max-height:0;height:0}}@-o-keyframes collapse{from{clip-path:polygon(0%0%,100%0%,100%100%,0%100%);max-height:100%;height:100%}to{clip-path:polygon(0%0%,100%0%,100%0%,0%0%);max-height:0;height:0}}@keyframes collapse{from{-webkit-clip-path:polygon(0%0%,100%0%,100%100%,0%100%);clip-path:polygon(0%0%,100%0%,100%100%,0%100%);max-height:100%;height:100%}to{-webkit-clip-path:polygon(0%0%,100%0%,100%0%,0%0%);clip-path:polygon(0%0%,100%0%,100%0%,0%0%);max-height:0;height:0}}@-webkit-keyframes expand{from{-webkit-clip-path:polygon(0%0%,100%0%,100%0%,0%0%);clip-path:polygon(0%0%,100%0%,100%0%,0%0%);max-height:0;height:0}to{-webkit-clip-path:polygon(0%0%,100%0%,100%100%,0%100%);clip-path:polygon(0%0%,100%0%,100%100%,0%100%);max-height:100%;height:100%;overflow-y:auto}}@-moz-keyframes expand{from{clip-path:polygon(0%0%,100%0%,100%0%,0%0%);max-height:0;height:0}to{clip-path:polygon(0%0%,100%0%,100%100%,0%100%);max-height:100%;height:100%;overflow-y:auto}}@-o-keyframes expand{from{clip-path:polygon(0%0%,100%0%,100%0%,0%0%);max-height:0;height:0}to{clip-path:polygon(0%0%,100%0%,100%100%,0%100%);max-height:100%;height:100%;overflow-y:auto}}@keyframes expand{from{-webkit-clip-path:polygon(0%0%,100%0%,100%0%,0%0%);clip-path:polygon(0%0%,100%0%,100%0%,0%0%);max-height:0;height:0}to{-webkit-clip-path:polygon(0%0%,100%0%,100%100%,0%100%);clip-path:polygon(0%0%,100%0%,100%100%,0%100%);max-height:100%;height:100%;overflow-y:auto}}[class*="tab-"].jsx-a1ea729aefa8e409:not([class*="tab-content-"]){text-decoration:none;height:-webkit-max-content;height:-moz-max-content;height:max-content;padding:1rem 5px 5px;margin:1px;-webkit-border-radius:1rem 1rem 0 0;-moz-border-radius:1rem 1rem 0 0;border-radius:1rem 1rem 0 0;border:none;-webkit-transform:scale(1,.9);-moz-transform:scale(1,.9);-ms-transform:scale(1,.9);-o-transform:scale(1,.9);transform:scale(1,.9);-webkit-transform-origin:bottom;-moz-transform-origin:bottom;-ms-transform-origin:bottom;-o-transform-origin:bottom;transform-origin:bottom;-webkit-transition:-webkit-transform.1s;-moz-transition:-moz-transform.1s;-o-transition:-o-transform.1s;transition:-webkit-transform.1s;transition:-moz-transform.1s;transition:-o-transform.1s;transition:transform.1s;background:var(--verily-blue)}[class*="tab-"].jsx-a1ea729aefa8e409:not([class*="tab-content-"]):hover,[class*="tab-"].jsx-a1ea729aefa8e409:not([class*="tab-content-"]):focus{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);background:var(--verily-red);color:var(--verily-white)}.tab-content-container.jsx-a1ea729aefa8e409{width:100%;height:100%;padding:1rem 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.tab-content-container.jsx-a1ea729aefa8e409::after{content:"Click one of the tabs above";position:absolute;width:15ch;height:-webkit-max-content;height:-moz-max-content;height:max-content;padding:.5rem;margin-top:20%;text-align:center;z-index:0;background:-webkit-linear-gradient(left,var(--verily-red),var(--verily-blue));background:-moz-linear-gradient(left,var(--verily-red),var(--verily-blue));background:-o-linear-gradient(left,var(--verily-red),var(--verily-blue));background:linear-gradient(to right,var(--verily-red),var(--verily-blue));-webkit-background-size:200%100%;-moz-background-size:200%100%;-o-background-size:200%100%;background-size:200%100%;background-position:right;-webkit-transition:background-position.5s;-moz-transition:background-position.5s;-o-transition:background-position.5s;transition:background-position.5s}.tab-content-container.jsx-a1ea729aefa8e409:hover::after{background-position:left}[class*="tab-"].jsx-a1ea729aefa8e409:not([class*="tab-content-"]):focus~.tab-content-container.jsx-a1ea729aefa8e409::after{display:none}[class*="tab-"].jsx-a1ea729aefa8e409~div.jsx-a1ea729aefa8e409 [class*="tab-content-"].jsx-a1ea729aefa8e409{background:var(--verily-white-background);padding:1rem 0 0;-webkit-animation:collapse.3s forwards;-moz-animation:collapse.3s forwards;-o-animation:collapse.3s forwards;animation:collapse.3s forwards;position:absolute;height:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-content:start;-ms-flex-line-pack:start;align-content:start;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:2}[class*="tab-"].jsx-a1ea729aefa8e409:not(:focus)~div.jsx-a1ea729aefa8e409 [class*="tab-content-"].jsx-a1ea729aefa8e409>*.jsx-a1ea729aefa8e409{height:auto}.tab-1.jsx-a1ea729aefa8e409:focus~div.jsx-a1ea729aefa8e409 .tab-content-1.jsx-a1ea729aefa8e409{-webkit-animation:expand.3s forwards!important;-moz-animation:expand.3s forwards!important;-o-animation:expand.3s forwards!important;animation:expand.3s forwards!important}.tab-2.jsx-a1ea729aefa8e409:focus~div.jsx-a1ea729aefa8e409 .tab-content-2.jsx-a1ea729aefa8e409{-webkit-animation:expand.3s forwards!important;-moz-animation:expand.3s forwards!important;-o-animation:expand.3s forwards!important;animation:expand.3s forwards!important}.tab-3.jsx-a1ea729aefa8e409:focus~div.jsx-a1ea729aefa8e409 .tab-content-3.jsx-a1ea729aefa8e409{-webkit-animation:expand.3s forwards!important;-moz-animation:expand.3s forwards!important;-o-animation:expand.3s forwards!important;animation:expand.3s forwards!important}.tab-4.jsx-a1ea729aefa8e409:focus~div.jsx-a1ea729aefa8e409 .tab-content-4.jsx-a1ea729aefa8e409{-webkit-animation:expand.3s forwards!important;-moz-animation:expand.3s forwards!important;-o-animation:expand.3s forwards!important;animation:expand.3s forwards!important}.tab-5.jsx-a1ea729aefa8e409:focus~div.jsx-a1ea729aefa8e409 .tab-content-5.jsx-a1ea729aefa8e409{-webkit-animation:expand.3s forwards!important;-moz-animation:expand.3s forwards!important;-o-animation:expand.3s forwards!important;animation:expand.3s forwards!important}.tab-6.jsx-a1ea729aefa8e409:focus~div.jsx-a1ea729aefa8e409 .tab-content-6.jsx-a1ea729aefa8e409{-webkit-animation:expand.3s forwards!important;-moz-animation:expand.3s forwards!important;-o-animation:expand.3s forwards!important;animation:expand.3s forwards!important}.tab-7.jsx-a1ea729aefa8e409:focus~div.jsx-a1ea729aefa8e409 .tab-content-7.jsx-a1ea729aefa8e409{-webkit-animation:expand.3s forwards!important;-moz-animation:expand.3s forwards!important;-o-animation:expand.3s forwards!important;animation:expand.3s forwards!important}.tab-8.jsx-a1ea729aefa8e409:focus~div.jsx-a1ea729aefa8e409 .tab-content-8.jsx-a1ea729aefa8e409{-webkit-animation:expand.3s forwards!important;-moz-animation:expand.3s forwards!important;-o-animation:expand.3s forwards!important;animation:expand.3s forwards!important}.tab-9.jsx-a1ea729aefa8e409:focus~div.jsx-a1ea729aefa8e409 .tab-content-9.jsx-a1ea729aefa8e409{-webkit-animation:expand.3s forwards!important;-moz-animation:expand.3s forwards!important;-o-animation:expand.3s forwards!important;animation:expand.3s forwards!important}.tab-10.jsx-a1ea729aefa8e409:focus~div.jsx-a1ea729aefa8e409 .tab-content-10.jsx-a1ea729aefa8e409{-webkit-animation:expand.3s forwards!important;-moz-animation:expand.3s forwards!important;-o-animation:expand.3s forwards!important;animation:expand.3s forwards!important}.tab-11.jsx-a1ea729aefa8e409:focus~div.jsx-a1ea729aefa8e409 .tab-content-11.jsx-a1ea729aefa8e409{-webkit-animation:expand.3s forwards!important;-moz-animation:expand.3s forwards!important;-o-animation:expand.3s forwards!important;animation:expand.3s forwards!important}.filler.jsx-a1ea729aefa8e409{width:80%;text-align:center}');
_defaultExport.__hash = "a1ea729aefa8e409";
/* harmony default export */ const VerilyDemo_css = (_defaultExport);

;// CONCATENATED MODULE: ./components/VerilyDemo/BaymaxScanResults.css.tsx
const BaymaxScanResults_css_defaultExport = new String('.baymax-scan-results.jsx-b2ce803cc84bc05a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:1rem}fieldset.jsx-b2ce803cc84bc05a{height:-webkit-max-content;height:-moz-max-content;height:max-content;min-width:5ch;border:3px solid var(--verily-pink)!important;-webkit-border-image:-webkit-linear-gradient(var(--verily-blue),var(--verily-red))1!important;-moz-border-image:-moz-linear-gradient(var(--verily-blue),var(--verily-red))1!important;-o-border-image:-o-linear-gradient(var(--verily-blue),var(--verily-red))1!important;border-image:-webkit-linear-gradient(var(--verily-blue),var(--verily-red))1!important;border-image:-moz-linear-gradient(var(--verily-blue),var(--verily-red))1!important;border-image:-o-linear-gradient(var(--verily-blue),var(--verily-red))1!important;border-image:linear-gradient(var(--verily-blue),var(--verily-red))1!important;text-align:center}legend.jsx-b2ce803cc84bc05a{margin:auto}.section-1.jsx-b2ce803cc84bc05a,.section-2.jsx-b2ce803cc84bc05a,.section-3.jsx-b2ce803cc84bc05a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:1rem 0}.section-1.jsx-b2ce803cc84bc05a,.section-2.jsx-b2ce803cc84bc05a{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:var(--verily-light-pink)}.section-3.jsx-b2ce803cc84bc05a{background:var(--verily-light-gray)}.section-1.jsx-b2ce803cc84bc05a{width:25ch}.section-2.jsx-b2ce803cc84bc05a{width:15ch;-webkit-box-pack:start;-webkit-justify-content:start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:start}.section-3.jsx-b2ce803cc84bc05a{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:-webkit-calc(100% - 40ch);width:-moz-calc(100% - 40ch);width:calc(100% - 40ch);-webkit-align-content:start;-ms-flex-line-pack:start;align-content:start;-webkit-box-pack:start;-webkit-justify-content:start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:start;min-width:15ch}.section-1.jsx-b2ce803cc84bc05a legend.jsx-b2ce803cc84bc05a{-webkit-border-radius:1rem;-moz-border-radius:1rem;border-radius:1rem;height:2rem;font-size:1.5rem}.section-2.jsx-b2ce803cc84bc05a legend.jsx-b2ce803cc84bc05a,.section-3.jsx-b2ce803cc84bc05a legend.jsx-b2ce803cc84bc05a{-webkit-border-radius:0 0 0 1rem;-moz-border-radius:0 0 0 1rem;border-radius:0 0 0 1rem;height:1.5rem}.section-2.jsx-b2ce803cc84bc05a legend.jsx-b2ce803cc84bc05a::after,.section-3.jsx-b2ce803cc84bc05a legend.jsx-b2ce803cc84bc05a::after{content:"";width:20px;height:20px;top:-3rem;left:100%;position:relative;display:block;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center}.section-2.jsx-b2ce803cc84bc05a legend.jsx-b2ce803cc84bc05a::after{background:var(--verily-light-pink)}.section-3.jsx-b2ce803cc84bc05a legend.jsx-b2ce803cc84bc05a::after{background:var(--verily-light-gray)}#ecg.jsx-b2ce803cc84bc05a ul.jsx-b2ce803cc84bc05a{list-style:none;display:inline-block;text-align:left}@media only screen and (max-width:480px){.section-1.jsx-b2ce803cc84bc05a,.section-2.jsx-b2ce803cc84bc05a,.section-3.jsx-b2ce803cc84bc05a{display:block!important;width:90%!important;margin:auto!important;padding:0!important;margin:0!important}fieldset.jsx-b2ce803cc84bc05a{margin-top:1.25rem!important}}');
BaymaxScanResults_css_defaultExport.__hash = "b2ce803cc84bc05a";
/* harmony default export */ const BaymaxScanResults_css = (BaymaxScanResults_css_defaultExport);

;// CONCATENATED MODULE: ./components/VerilyDemo/BaymaxScanResults.tsx




function BaymaxScanResults(props) {
    const { data  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "baymax-scan-results",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "section-1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        id: "nbp",
                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background m-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-blue-background",
                                /*#__PURE__*/ children: "NBP"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                children: [
                                    data?.NBP?.mmHg || 19.55,
                                    " mmHg"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: `jsx-${BaymaxScanResults_css.__hash}`,
                                children: [
                                    data?.NBP?.sys || 113,
                                    "/",
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                        children: data?.NBP?.dia || 90
                                    }),
                                    " ",
                                    data?.NBP?.pulse || 80
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        id: "ecg",
                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background m-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-blue-background",
                                children: "ECG"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                style: {
                                    display: "block"
                                },
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                children: data?.ECG?.value || 68
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background p-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                        children: [
                                            "PACE ",
                                            data?.ECG?.PACE || 0.18
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                        children: [
                                            "ST1 ",
                                            data?.ECG?.ST1 || 0.52
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                        children: [
                                            "ST2 ",
                                            data?.ECG?.ST2 || 0.57
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                        children: [
                                            "PVCs ",
                                            data?.ECG?.PVCs || 0.55
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "section-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        id: "rr",
                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background m-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-blue-background",
                                children: "RR"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                children: data?.RR || 21
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        id: "spo2",
                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background m-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-blue-background",
                                children: "SPO2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                children: data?.SPO2 || 97
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        id: "temp",
                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background m-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-blue-background",
                                children: "TEMP"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                children: data?.TEMP || 98
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "section-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        id: "gnrh",
                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background m-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-gray-background",
                                children: "GnRH"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                children: data?.GnRH || 68
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        id: "lh",
                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background m-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-gray-background",
                                children: "LH"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                children: data?.LH || 63
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        id: "fsh",
                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background m-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-gray-background",
                                children: "FSH"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                children: data?.FSH || 58
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        id: "t",
                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background m-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-gray-background",
                                children: "T"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                children: data?.T || 167
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        id: "e2",
                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background m-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-gray-background",
                                children: "E2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                children: data?.E2 || 43
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        id: "f",
                        className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-white-background m-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-gray-background",
                                children: "F"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: `jsx-${BaymaxScanResults_css.__hash}` + " " + "verily-purple-text verily-white-background p-0",
                                children: data?.F || 10
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: BaymaxScanResults_css.__hash,
                children: BaymaxScanResults_css
            })
        ]
    });
};

// EXTERNAL MODULE: ./helpers/getMockData.tsx
var getMockData = __webpack_require__(183);
;// CONCATENATED MODULE: ./components/VerilyDemo.tsx







function VerilyDemo(props) {
    const { showVerilyDemo  } = props;
    const { /*#__PURE__*/ 0: mockVerilyData , 1: setMockVerilyData  } = (0,external_react_.useState)({});
    const defaultTabRef = (0,external_react_.useRef)(null);
    async function fetchData() {
        const rawData = await (0,getMockData/* default */.Z)("verily");
        setMockVerilyData(rawData);
    }
    let timer;
    (0,external_react_.useEffect)(()=>{
        clearInterval(timer);
        timer = setInterval(()=>{
            if (showVerilyDemo) fetchData();
        }, 3000);
        if (showVerilyDemo) {
            defaultTabRef.current.focus();
        }
        return ()=>clearInterval(timer)
        ; // stop fetching data when hidden
    }, [
        showVerilyDemo
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "verily-demo",
        className: `jsx-${VerilyDemo_css.__hash}` + " " + "p-0 verily-white-background",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: `jsx-${VerilyDemo_css.__hash}` + " " + "verily-white-text verily-red-to-blue my-0 text-center",
                children: "Electronic Medical Record dashboard (MOCK)"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                id: "verily-demo-main-content",
                className: `jsx-${VerilyDemo_css.__hash}` + " " + "verily-white-background",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        ref: defaultTabRef,
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-1",
                        children: "Baymax Scan Results"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-2",
                        children: "Admission"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-3",
                        children: "Scheduling"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-4",
                        children: "ICU and ER"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-5",
                        children: "Laboratory"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-6",
                        children: "Pharmacology"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-7",
                        children: "MPI"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-8",
                        children: "Radiology"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-9",
                        children: "Pathology"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-10",
                        children: "Discharge and Transfer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-11",
                        children: "Patient Billing"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "aria-hidden": "true",
                        className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(BaymaxScanResults, {
                                    data: mockVerilyData
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `jsx-${VerilyDemo_css.__hash}` + " " + "filler white-text verily-blue-background m-0",
                                    children: "Admission: N/A (this is just a mock demo)"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `jsx-${VerilyDemo_css.__hash}` + " " + "filler white-text verily-pink-background m-0",
                                    children: "Scheduling: N/A (this is just a mock demo)"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `jsx-${VerilyDemo_css.__hash}` + " " + "filler white-text verily-purple-background m-0",
                                    children: "ICU and ER: N/A (this is just a mock demo)"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `jsx-${VerilyDemo_css.__hash}` + " " + "filler white-text verily-red-background m-0",
                                    children: "Laboratory: N/A (this is just a mock demo)"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `jsx-${VerilyDemo_css.__hash}` + " " + "filler white-text verily-gray-background m-0",
                                    children: "Pharmacology: N/A (this is just a mock demo)"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-7",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `jsx-${VerilyDemo_css.__hash}` + " " + "filler white-text verily-blue-background m-0",
                                    children: "MPI: N/A (this is just a mock demo)"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `jsx-${VerilyDemo_css.__hash}` + " " + "filler white-text verily-pink-background m-0",
                                    children: "Radiology: N/A (this is just a mock demo)"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-9",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `jsx-${VerilyDemo_css.__hash}` + " " + "filler white-text verily-purple-background m-0",
                                    children: "Pathology: N/A (this is just a mock demo)"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `jsx-${VerilyDemo_css.__hash}` + " " + "filler white-text verily-red-background m-0",
                                    children: "Discharge and Transfer: N/A (this is just a mock demo)"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: `jsx-${VerilyDemo_css.__hash}` + " " + "tab-content-11",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `jsx-${VerilyDemo_css.__hash}` + " " + "filler white-text verily-gray-background m-0",
                                    children: "Patient Billing: N/A (this is just a mock demo)"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                style: {
                    textAlign: "right",
                    display: "block"
                },
                className: `jsx-${VerilyDemo_css.__hash}` + " " + "p-0",
                children: "(Note: this is a mock demo with simulated data.)"
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: VerilyDemo_css.__hash,
                children: VerilyDemo_css
            })
        ]
    });
};


/***/ }),

/***/ 183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getMockData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function getMockData(pathName = "") {
    const data = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://mock-hchiam-site-data.hchiam.workers.dev/" + pathName);
    return data.data;
};


/***/ })

};
;