"use strict";
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ WaymoDemo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(405);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
;// CONCATENATED MODULE: ./components/PieChartCSS.css.tsx
const _defaultExport = new String('.slice.jsx-8c572a37a8f6c3f8{background-image:-webkit-linear-gradient(var(--start),transparent 50%,white 50%),-webkit-linear-gradient(-webkit-calc(var(--end)),transparent 50%,var(--color)50%);background-image:-moz-linear-gradient(var(--start),transparent 50%,white 50%),-moz-linear-gradient(-moz-calc(var(--end)),transparent 50%,var(--color)50%);background-image:-o-linear-gradient(var(--start),transparent 50%,white 50%),-o-linear-gradient(calc(var(--end)),transparent 50%,var(--color)50%);background-image:linear-gradient(var(--start),transparent 50%,white 50%),linear-gradient(calc(var(--end)),transparent 50%,var(--color)50%)}.slice[style*="--over180"].jsx-8c572a37a8f6c3f8{background-image:-webkit-linear-gradient(var(--start),var(--color)50%,transparent 50%),-webkit-linear-gradient(-webkit-calc(var(--end)),white 50%,var(--color)50%);background-image:-moz-linear-gradient(var(--start),var(--color)50%,transparent 50%),-moz-linear-gradient(-moz-calc(var(--end)),white 50%,var(--color)50%);background-image:-o-linear-gradient(var(--start),var(--color)50%,transparent 50%),-o-linear-gradient(calc(var(--end)),white 50%,var(--color)50%);background-image:linear-gradient(var(--start),var(--color)50%,transparent 50%),linear-gradient(calc(var(--end)),white 50%,var(--color)50%)}.pie.jsx-8c572a37a8f6c3f8,.slice.jsx-8c572a37a8f6c3f8{display:block;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:white;cursor:pointer}.pie.jsx-8c572a37a8f6c3f8{position:relative;width:180px;height:180px;aspect-ratio:1;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg);margin:1rem}.slice.jsx-8c572a37a8f6c3f8{position:absolute;width:100%;height:100%;mix-blend-mode:multiply}.slice.jsx-8c572a37a8f6c3f8:after{content:var(--text);color:#fff;mix-blend-mode:difference;position:relative;left:var(--text-left,50%);top:var(--text-top,-webkit-calc(50% - .5em));top:var(--text-top,-moz-calc(50% - .5em));top:var(--text-top,calc(50% - .5em));--have-left:var(--text-left, 0);--have-top:var(--text-top, 0);--not-manually-set-left:calc(1 - var(--have-left, 0));--not-manually-set-top:calc(1 - var(--have-top, 0));--no-manual-pos:calc(\n      var(--not-manually-set-left, 0) * var(--not-manually-set-top, 0)\n    );--mid:calc(var(--no-manual-pos) * (var(--start) + var(--end)) / 2);-webkit-transform:rotate(var(--mid,0))translate(-webkit-calc(1em*var(--no-manual-pos,1) + var(--text-start-adjust,0px)));-moz-transform:rotate(var(--mid,0))translate(-moz-calc(1em*var(--no-manual-pos,1) + var(--text-start-adjust,0px)));-ms-transform:rotate(var(--mid,0))translate(calc(1em*var(--no-manual-pos,1) + var(--text-start-adjust,0px)));-o-transform:rotate(var(--mid,0))translate(calc(1em*var(--no-manual-pos,1) + var(--text-start-adjust,0px)));transform:rotate(var(--mid,0))translate(-webkit-calc(1em*var(--no-manual-pos,1) + var(--text-start-adjust,0px)));transform:rotate(var(--mid,0))translate(-moz-calc(1em*var(--no-manual-pos,1) + var(--text-start-adjust,0px)));transform:rotate(var(--mid,0))translate(calc(1em*var(--no-manual-pos,1) + var(--text-start-adjust,0px)));-webkit-transform-origin:left;-moz-transform-origin:left;-ms-transform-origin:left;-o-transform-origin:left;transform-origin:left;display:block}.pie.jsx-8c572a37a8f6c3f8,.slice.jsx-8c572a37a8f6c3f8{-webkit-transition:-webkit-transform.2s,outline.2s;-moz-transition:-moz-transform.2s,outline.2s;-o-transition:-o-transform.2s,outline.2s;transition:-webkit-transform.2s,outline.2s;transition:-moz-transform.2s,outline.2s;transition:-o-transform.2s,outline.2s;transition:transform.2s,outline.2s}.pie.jsx-8c572a37a8f6c3f8:hover,.pie.jsx-8c572a37a8f6c3f8:focus,.slice.jsx-8c572a37a8f6c3f8:focus,.highlightedSlice.jsx-8c572a37a8f6c3f8{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.pie.jsx-8c572a37a8f6c3f8:hover,.pie.jsx-8c572a37a8f6c3f8:focus{outline:5px solid rgba(0,0,0,.5);-webkit-transform:scale(1.1)rotate(-90deg);-moz-transform:scale(1.1)rotate(-90deg);-ms-transform:scale(1.1)rotate(-90deg);-o-transform:scale(1.1)rotate(-90deg);transform:scale(1.1)rotate(-90deg)}');
_defaultExport.__hash = "8c572a37a8f6c3f8";
/* harmony default export */ const PieChartCSS_css = (_defaultExport);

;// CONCATENATED MODULE: ./components/PieChartCSS.tsx


// https://codepen.io/hchiam/pen/qBmKbWq

const PieChartCSS = (props)=>{
    const { id , pieChartData , hideTextLabels  } = props;
    let total = 0;
    const data = [];
    for(let i1 = 0; i1 < pieChartData.length; i1++){
        const slice = pieChartData[i1];
        const d = {
            start: total,
            end: total + slice.number,
            ...slice
        };
        total += slice.number;
        data.push(d);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: id,
                tabIndex: 0,
                className: `jsx-${PieChartCSS_css.__hash}` + " " + "pie",
                children: [
                    data.map((slice, i)=>{
                        const startDeg = Math.round(slice.start / total * 360);
                        const endDeg = Math.round(slice.end / total * 360);
                        const style = {
                            "--start": `${startDeg}deg`,
                            "--end": `${endDeg}deg`,
                            "--color": slice.color
                        };
                        if (endDeg - startDeg > 180) style["--over180"] = 1;
                        if (slice.text && !hideTextLabels) style["--text"] = `'${slice.text}'`;
                        if (slice.textLeft) style["--text-left"] = slice.textLeft;
                        if (slice.textTop) style["--text-top"] = slice.textTop;
                        if (slice.textStartAdjust) style["--text-start-adjust"] = slice.textStartAdjust;
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: slice.sliceId || "",
                            style: style,
                            tabIndex: 0,
                            "aria-label": slice.ariaLabel,
                            className: `jsx-${PieChartCSS_css.__hash}` + " " + ("slice " + (slice.sliceClass || " ") + " " + (slice.highlightedSlice ? "highlightedSlice " : " ") || 0)
                        }, `${i}_${new Date().getTime()}`);
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        tabIndex: -1,
                        className: `jsx-${PieChartCSS_css.__hash}` + " " + "slice always-tabindex-1"
                    })
                ]
            }, id),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: PieChartCSS_css.__hash,
                /*#__PURE__*/ children: PieChartCSS_css
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/WaymoDemo/AVsOnline.tsx




function AVsOnline(props) {
    const { data  } = props;
    const Online = data?.AutonomousVehicles?.Online?.AllocatedAVs + data?.AutonomousVehicles?.Online?.ChargingAVs + data?.AutonomousVehicles?.Online?.AvailableAVs - data?.AutonomousVehicles?.Offline?.Repairing - data?.AutonomousVehicles?.Offline?.Unaccounted;
    const AllocatedAVs = data?.AutonomousVehicles?.Online?.AllocatedAVs;
    const ChargingAVs = data?.AutonomousVehicles?.Online?.ChargingAVs;
    const AvailableAVs = data?.AutonomousVehicles?.Online?.AvailableAVs;
    const { 0: highlightSlice1 , 1: setHighlightSlice1  } = (0,external_react_.useState)(false);
    const { 0: highlightSlice2 , 1: setHighlightSlice2  } = (0,external_react_.useState)(false);
    const { 0: highlightSlice3 , 1: setHighlightSlice3  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "waymo-dark-navy-text waymo-white-background my-0 p-0",
                children: [
                    "Online:",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "animated-text waymo-dark-navy-text waymo-white-background px-0",
                        children: Online || 20589
                    }),
                    "/20600"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex wrap justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(PieChartCSS, {
                        id: "avs-online",
                        title: `Online: ${Online || 20589}`,
                        pieChartData: [
                            {
                                sliceId: "Allocated",
                                color: "var(--waymo-blue)",
                                text: "\u29BF",
                                ariaLabel: "\u29BF Allocated: " + (AllocatedAVs || 14986),
                                number: AllocatedAVs || 14986,
                                textStartAdjust: "1em",
                                highlightedSlice: highlightSlice1
                            },
                            {
                                sliceId: "Charging",
                                color: "var(--verily-red)",
                                text: "\u25FC",
                                ariaLabel: "\u25FC Charging: " + (ChargingAVs || 4323),
                                number: ChargingAVs || 4323,
                                textStartAdjust: "2em",
                                highlightedSlice: highlightSlice2
                            },
                            {
                                sliceId: "Available",
                                color: "var(--waymo-green)",
                                text: "\u25B2",
                                ariaLabel: "\u25B2 Available: " + (AvailableAVs || 1280),
                                number: AvailableAVs || 1280,
                                textStartAdjust: "2em",
                                highlightedSlice: highlightSlice3
                            }, 
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            margin: "0 1rem"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "circle-before-chart-label white-text waymo-blue-background",
                                tabIndex: 0,
                                onFocus: ()=>{
                                    setHighlightSlice1(true);
                                },
                                onBlur: ()=>{
                                    setHighlightSlice1(false);
                                },
                                onMouseOver: ()=>{
                                    setHighlightSlice1(true);
                                },
                                onMouseLeave: ()=>{
                                    setHighlightSlice1(false);
                                },
                                children: [
                                    "\xa0Allocated: ",
                                    AllocatedAVs || 14986
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "square-before-chart-label white-text verily-red-background",
                                tabIndex: 0,
                                onFocus: ()=>{
                                    setHighlightSlice2(true);
                                },
                                onBlur: ()=>{
                                    setHighlightSlice2(false);
                                },
                                onMouseOver: ()=>{
                                    setHighlightSlice2(true);
                                },
                                onMouseLeave: ()=>{
                                    setHighlightSlice2(false);
                                },
                                children: [
                                    " ",
                                    "\xa0Charging: ",
                                    ChargingAVs || 4323
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "triangle-before-chart-label white-text waymo-green-background",
                                tabIndex: 0,
                                onFocus: ()=>{
                                    setHighlightSlice3(true);
                                },
                                onBlur: ()=>{
                                    setHighlightSlice3(false);
                                },
                                onMouseOver: ()=>{
                                    setHighlightSlice3(true);
                                },
                                onMouseLeave: ()=>{
                                    setHighlightSlice3(false);
                                },
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "black-text waymo-green-background",
                                        style: {
                                            paddingLeft: 0
                                        },
                                        children: [
                                            "Available: ",
                                            AvailableAVs || 1280
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/WaymoDemo/AVsOffline.tsx




function AVsOffline(props) {
    const { data  } = props;
    const Offline = data?.AutonomousVehicles?.Offline?.Repairing + data?.AutonomousVehicles?.Offline?.Unaccounted;
    const Repairing = data?.AutonomousVehicles?.Offline?.Repairing;
    const Unaccounted = data?.AutonomousVehicles?.Offline?.Unaccounted;
    const { 0: highlightSlice1 , 1: setHighlightSlice1  } = (0,external_react_.useState)(false);
    const { 0: highlightSlice2 , 1: setHighlightSlice2  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "waymo-dark-navy-text waymo-white-background my-0 p-0",
                children: [
                    "Offline:",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "animated-text waymo-dark-navy-text waymo-white-background px-0",
                        children: Offline || 11
                    }),
                    "/20600"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex wrap justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(PieChartCSS, {
                        id: "avs-offline",
                        title: `Offline: ${Offline || 11}`,
                        pieChartData: [
                            {
                                color: "var(--waymo-blue)",
                                text: "\u25FC",
                                ariaLabel: "\u25FC Repairing: " + (Repairing || 10),
                                number: Repairing || 10,
                                textStartAdjust: "1em",
                                highlightedSlice: highlightSlice1
                            },
                            {
                                color: "var(--verily-red)",
                                text: "\u25B2",
                                ariaLabel: "\u25B2 Unaccounted: " + (Unaccounted || 1),
                                number: Unaccounted || 1,
                                textStartAdjust: "2em",
                                highlightedSlice: highlightSlice2
                            }, 
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            margin: "0 1rem"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "square-before-chart-label white-text waymo-blue-background",
                                tabIndex: 0,
                                onFocus: ()=>{
                                    setHighlightSlice1(true);
                                },
                                onBlur: ()=>{
                                    setHighlightSlice1(false);
                                },
                                onMouseOver: ()=>{
                                    setHighlightSlice1(true);
                                },
                                onMouseLeave: ()=>{
                                    setHighlightSlice1(false);
                                },
                                children: [
                                    "\xa0Repairing: ",
                                    Repairing || 10
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "triangle-before-chart-label white-text verily-red-background",
                                tabIndex: 0,
                                onFocus: ()=>{
                                    setHighlightSlice2(true);
                                },
                                onBlur: ()=>{
                                    setHighlightSlice2(false);
                                },
                                onMouseOver: ()=>{
                                    setHighlightSlice2(true);
                                },
                                onMouseLeave: ()=>{
                                    setHighlightSlice2(false);
                                },
                                children: [
                                    "\xa0Unaccounted: ",
                                    Unaccounted || 1
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/WaymoDemo/Passengers.tsx




function Passengers(props) {
    const { data  } = props;
    const Passengers1 = data?.Passengers?.Hailing + data?.Passengers?.Serving + data?.Passengers?.RequestingAssistance;
    const Hailing = data?.Passengers?.Hailing;
    const Serving = data?.Passengers?.Serving;
    const RequestingAssistance = data?.Passengers?.RequestingAssistance;
    const { 0: highlightSlice1 , 1: setHighlightSlice1  } = (0,external_react_.useState)(false);
    const { 0: highlightSlice2 , 1: setHighlightSlice2  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "d-flex wrap justify-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PieChartCSS, {
                id: "passengers",
                title: `Passengers: ${Passengers1 || 14986}`,
                pieChartData: [
                    {
                        color: "var(--waymo-blue)",
                        text: "\u29BF",
                        ariaLabel: "\u29BF Hailing: " + (Hailing || 112),
                        number: Hailing || 112,
                        textStartAdjust: "1em",
                        highlightedSlice: highlightSlice1
                    },
                    {
                        color: "var(--verily-red)",
                        text: "\u25B2",
                        ariaLabel: "\u25B2 Unaccounted: " + (RequestingAssistance || 2),
                        number: RequestingAssistance || 2,
                        textStartAdjust: "3em",
                        highlightedSlice: highlightSlice2
                    }, 
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-0 mx-1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "circle-before-chart-label white-text waymo-blue-background",
                        tabIndex: 0,
                        onFocus: ()=>{
                            setHighlightSlice1(true);
                        },
                        onBlur: ()=>{
                            setHighlightSlice1(false);
                        },
                        onMouseOver: ()=>{
                            setHighlightSlice1(true);
                        },
                        onMouseLeave: ()=>{
                            setHighlightSlice1(false);
                        },
                        children: [
                            "\xa0Hailing: ",
                            Hailing || 112
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "triangle-before-chart-label white-text verily-red-background",
                        tabIndex: 0,
                        onFocus: ()=>{
                            setHighlightSlice2(true);
                        },
                        onBlur: ()=>{
                            setHighlightSlice2(false);
                        },
                        onMouseOver: ()=>{
                            setHighlightSlice2(true);
                        },
                        onMouseLeave: ()=>{
                            setHighlightSlice2(false);
                        },
                        children: [
                            "\xa0Requesting assistance: ",
                            RequestingAssistance || 2
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "square-before-chart-label black-text waymo-white-background",
                        tabIndex: 0,
                        children: [
                            "\xa0(Serving: ",
                            Serving || 14872,
                            ")"
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/WaymoDemo/AVMap.css.tsx
const AVMap_css_defaultExport = new String('.av-map.jsx-aa5c933a437247cd{display:inline-block;position:relative;width:230px;height:230px;background:gold;-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path);-webkit-transition:-webkit-transform.2s;-moz-transition:-moz-transform.2s;-o-transition:-o-transform.2s;transition:-webkit-transform.2s;transition:-moz-transform.2s;transition:-o-transform.2s;transition:transform.2s}.av-map.jsx-aa5c933a437247cd:after{content:"";display:inline-block;width:230px;height:230px;background:var(--waymo-green);-webkit-transform:scale(.9)translate(3px);-moz-transform:scale(.9)translate(3px);-ms-transform:scale(.9)translate(3px);-o-transform:scale(.9)translate(3px);transform:scale(.9)translate(3px);-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path)}.av-map.jsx-aa5c933a437247cd:hover,.av-map.jsx-aa5c933a437247cd:focus{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.av-map.jsx-aa5c933a437247cd .hailing.jsx-aa5c933a437247cd:after{content:"\uD83D\uDD35"}.av-map.jsx-aa5c933a437247cd .requesting-assistance.jsx-aa5c933a437247cd:after{content:"\uD83D\uDED1"}.av-map.jsx-aa5c933a437247cd .av.jsx-aa5c933a437247cd:after{content:"\u2B1C"}.av-map.jsx-aa5c933a437247cd .charging-station.jsx-aa5c933a437247cd:after{content:"\uD83D\uDD0B"}.av-map.jsx-aa5c933a437247cd .roadside-assistance.jsx-aa5c933a437247cd:after{content:"\u26A0\uFE0F"}.av-map.jsx-aa5c933a437247cd>*.jsx-aa5c933a437247cd{position:absolute;z-index:1;background:transparent;width:0;height:0;-webkit-transform:translate(-.5rem,-.5rem);-moz-transform:translate(-.5rem,-.5rem);-ms-transform:translate(-.5rem,-.5rem);-o-transform:translate(-.5rem,-.5rem);transform:translate(-.5rem,-.5rem);top:var(--top);left:var(--left)}.av-map.jsx-aa5c933a437247cd>*.jsx-aa5c933a437247cd:after{position:absolute;top:0;left:0}.av-map.spread-out-map-icons.jsx-aa5c933a437247cd>*.jsx-aa5c933a437247cd{-webkit-animation:spread-out-map-icons.2s forwards;-moz-animation:spread-out-map-icons.2s forwards;-o-animation:spread-out-map-icons.2s forwards;animation:spread-out-map-icons.2s forwards}@-webkit-keyframes spread-out-map-icons{from{left:0;top:100%}}@-moz-keyframes spread-out-map-icons{from{left:0;top:100%}}@-o-keyframes spread-out-map-icons{from{left:0;top:100%}}@keyframes spread-out-map-icons{from{left:0;top:100%}}.av-map-container.jsx-aa5c933a437247cd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}[class*="moving"].jsx-aa5c933a437247cd{-webkit-animation-duration:5s;-moz-animation-duration:5s;-o-animation-duration:5s;animation-duration:5s;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-play-state:paused;-moz-animation-play-state:paused;-o-animation-play-state:paused;animation-play-state:paused}.moving-1.jsx-aa5c933a437247cd{-webkit-animation-name:moving-1;-moz-animation-name:moving-1;-o-animation-name:moving-1;animation-name:moving-1}.moving-1.jsx-aa5c933a437247cd:after{content:"\u2B1CETA: 5m"!important;color:black;width:-webkit-max-content;width:-moz-max-content;width:max-content;font-size:small}@-webkit-keyframes moving-1{to{-webkit-transform:translate(-14px,10px);transform:translate(-14px,10px)}}@-moz-keyframes moving-1{to{-moz-transform:translate(-14px,10px);transform:translate(-14px,10px)}}@-o-keyframes moving-1{to{-o-transform:translate(-14px,10px);transform:translate(-14px,10px)}}@keyframes moving-1{to{-webkit-transform:translate(-14px,10px);-moz-transform:translate(-14px,10px);-o-transform:translate(-14px,10px);transform:translate(-14px,10px)}}.moving-2.jsx-aa5c933a437247cd{-webkit-animation-name:moving-2;-moz-animation-name:moving-2;-o-animation-name:moving-2;animation-name:moving-2}@-webkit-keyframes moving-2{to{-webkit-transform:translate(-15px,-26px);transform:translate(-15px,-26px)}}@-moz-keyframes moving-2{to{-moz-transform:translate(-15px,-26px);transform:translate(-15px,-26px)}}@-o-keyframes moving-2{to{-o-transform:translate(-15px,-26px);transform:translate(-15px,-26px)}}@keyframes moving-2{to{-webkit-transform:translate(-15px,-26px);-moz-transform:translate(-15px,-26px);-o-transform:translate(-15px,-26px);transform:translate(-15px,-26px)}}.moving-3.jsx-aa5c933a437247cd{-webkit-animation-name:moving-3;-moz-animation-name:moving-3;-o-animation-name:moving-3;animation-name:moving-3}@-webkit-keyframes moving-3{to{-webkit-transform:translate(-1px,-25px);transform:translate(-1px,-25px)}}@-moz-keyframes moving-3{to{-moz-transform:translate(-1px,-25px);transform:translate(-1px,-25px)}}@-o-keyframes moving-3{to{-o-transform:translate(-1px,-25px);transform:translate(-1px,-25px)}}@keyframes moving-3{to{-webkit-transform:translate(-1px,-25px);-moz-transform:translate(-1px,-25px);-o-transform:translate(-1px,-25px);transform:translate(-1px,-25px)}}.moving-4.jsx-aa5c933a437247cd{-webkit-animation-name:moving-4;-moz-animation-name:moving-4;-o-animation-name:moving-4;animation-name:moving-4}@-webkit-keyframes moving-4{to{-webkit-transform:translate(5px,-20px);transform:translate(5px,-20px)}}@-moz-keyframes moving-4{to{-moz-transform:translate(5px,-20px);transform:translate(5px,-20px)}}@-o-keyframes moving-4{to{-o-transform:translate(5px,-20px);transform:translate(5px,-20px)}}@keyframes moving-4{to{-webkit-transform:translate(5px,-20px);-moz-transform:translate(5px,-20px);-o-transform:translate(5px,-20px);transform:translate(5px,-20px)}}.moving-5.jsx-aa5c933a437247cd{-webkit-animation-name:moving-5;-moz-animation-name:moving-5;-o-animation-name:moving-5;animation-name:moving-5}@-webkit-keyframes moving-5{to{-webkit-transform:translate(-20px,-20px);transform:translate(-20px,-20px)}}@-moz-keyframes moving-5{to{-moz-transform:translate(-20px,-20px);transform:translate(-20px,-20px)}}@-o-keyframes moving-5{to{-o-transform:translate(-20px,-20px);transform:translate(-20px,-20px)}}@keyframes moving-5{to{-webkit-transform:translate(-20px,-20px);-moz-transform:translate(-20px,-20px);-o-transform:translate(-20px,-20px);transform:translate(-20px,-20px)}}.moving-6.jsx-aa5c933a437247cd{-webkit-animation-name:moving-6;-moz-animation-name:moving-6;-o-animation-name:moving-6;animation-name:moving-6}@-webkit-keyframes moving-6{to{-webkit-transform:translate(5px,-15px);transform:translate(5px,-15px)}}@-moz-keyframes moving-6{to{-moz-transform:translate(5px,-15px);transform:translate(5px,-15px)}}@-o-keyframes moving-6{to{-o-transform:translate(5px,-15px);transform:translate(5px,-15px)}}@keyframes moving-6{to{-webkit-transform:translate(5px,-15px);-moz-transform:translate(5px,-15px);-o-transform:translate(5px,-15px);transform:translate(5px,-15px)}}.moving-7.jsx-aa5c933a437247cd{-webkit-animation-name:moving-7;-moz-animation-name:moving-7;-o-animation-name:moving-7;animation-name:moving-7}@-webkit-keyframes moving-7{to{-webkit-transform:translate(-15px,-30px);transform:translate(-15px,-30px)}}@-moz-keyframes moving-7{to{-moz-transform:translate(-15px,-30px);transform:translate(-15px,-30px)}}@-o-keyframes moving-7{to{-o-transform:translate(-15px,-30px);transform:translate(-15px,-30px)}}@keyframes moving-7{to{-webkit-transform:translate(-15px,-30px);-moz-transform:translate(-15px,-30px);-o-transform:translate(-15px,-30px);transform:translate(-15px,-30px)}}.moving-8.jsx-aa5c933a437247cd{-webkit-animation-name:moving-8;-moz-animation-name:moving-8;-o-animation-name:moving-8;animation-name:moving-8}@-webkit-keyframes moving-8{to{-webkit-transform:translate(5px,-10px);transform:translate(5px,-10px)}}@-moz-keyframes moving-8{to{-moz-transform:translate(5px,-10px);transform:translate(5px,-10px)}}@-o-keyframes moving-8{to{-o-transform:translate(5px,-10px);transform:translate(5px,-10px)}}@keyframes moving-8{to{-webkit-transform:translate(5px,-10px);-moz-transform:translate(5px,-10px);-o-transform:translate(5px,-10px);transform:translate(5px,-10px)}}.moving-9.jsx-aa5c933a437247cd{-webkit-animation-name:moving-9;-moz-animation-name:moving-9;-o-animation-name:moving-9;animation-name:moving-9}@-webkit-keyframes moving-9{to{-webkit-transform:translate(7px,16px);transform:translate(7px,16px)}}@-moz-keyframes moving-9{to{-moz-transform:translate(7px,16px);transform:translate(7px,16px)}}@-o-keyframes moving-9{to{-o-transform:translate(7px,16px);transform:translate(7px,16px)}}@keyframes moving-9{to{-webkit-transform:translate(7px,16px);-moz-transform:translate(7px,16px);-o-transform:translate(7px,16px);transform:translate(7px,16px)}}@media(prefers-reduced-motion){[class*="moving-"].jsx-aa5c933a437247cd{-webkit-animation-name:none;-moz-animation-name:none;-o-animation-name:none;animation-name:none}}');
AVMap_css_defaultExport.__hash = "aa5c933a437247cd";
/* harmony default export */ const AVMap_css = (AVMap_css_defaultExport);

;// CONCATENATED MODULE: ./helpers/AVMapSimulatedItems.tsx
var P;
(function(P) {
    P["h"] = "hailing";
    P["req"] = "requesting-assistance";
    P["av"] = "av";
    P["cs"] = "charging-station";
    P["rds"] = "roadside-assistance";
})(P || (P = {}));
const simulatedMapItems = [
    [
        P.h,
        35,
        72
    ],
    [
        P.h,
        40,
        75
    ],
    [
        P.h,
        30,
        73
    ],
    [
        P.h,
        50,
        50
    ],
    [
        P.h,
        37,
        67
    ],
    [
        P.h,
        59,
        79
    ],
    [
        P.h,
        30,
        32
    ],
    [
        P.h,
        82,
        70
    ],
    [
        P.cs,
        44,
        66
    ],
    [
        P.cs,
        37,
        39
    ],
    [
        P.cs,
        77,
        43
    ],
    [
        P.req,
        60,
        60
    ],
    [
        P.req,
        75,
        87
    ],
    [
        P.rds,
        54,
        65,
        "moving-6"
    ],
    [
        P.rds,
        70,
        76,
        "moving-9"
    ],
    [
        P.av,
        29,
        62
    ],
    [
        P.av,
        47,
        82
    ],
    [
        P.av,
        64,
        86,
        "moving-5"
    ],
    [
        P.av,
        35,
        49
    ],
    [
        P.av,
        25,
        43,
        "moving-3"
    ],
    [
        P.av,
        44,
        18,
        "moving-8"
    ],
    [
        P.av,
        74,
        76,
        "moving-4"
    ],
    [
        P.av,
        79,
        35,
        "moving-7"
    ],
    [
        P.av,
        53,
        39,
        "moving-1"
    ],
    [
        P.av,
        40,
        58
    ],
    [
        P.av,
        33,
        81,
        "moving-2"
    ], 
];

;// CONCATENATED MODULE: ./components/WaymoDemo/AVMap.tsx






function AVMap(props) {
    const { requestsPlusAVs  } = props;
    // just for fun:
    const { /*#__PURE__*/ 0: spreadOutMapIcons , 1: setSpreadOutMapIcons  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "waymo-blue-text waymo-white-background mb-0 px-0",
                children: [
                    "Requests + AVs map:",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "animated-text py-0",
                        children: requestsPlusAVs || 20714
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `jsx-${AVMap_css.__hash}` + " " + "av-map-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>setSpreadOutMapIcons(!spreadOutMapIcons)
                        ,
                        onKeyUp: ()=>setSpreadOutMapIcons(!spreadOutMapIcons)
                        ,
                        tabIndex: -1,
                        "aria-hidden": "true",
                        className: `jsx-${AVMap_css.__hash}` + " " + `av-map ${spreadOutMapIcons && "spread-out-map-icons"} always-tabindex-1`,
                        children: simulatedMapItems.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx(AVMapPoint, {
                                p: item[0],
                                left: `${item[1]}%`,
                                top: `${item[2]}%`,
                                extraClasses: item[3]
                            }, i)
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `jsx-${AVMap_css.__hash}` + " " + "legend",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: `jsx-${AVMap_css.__hash}` + " " + "my-0 py-0 waymo-dark-navy-text",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            width: "1.5rem",
                                            display: "inline-block"
                                        },
                                        className: `jsx-${AVMap_css.__hash}` + " " + "white-background p-0 text-center",
                                        children: "\uD83D\uDD35"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `jsx-${AVMap_css.__hash}` + " " + "waymo-blue-background py-0",
                                        children: "Hailing"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: `jsx-${AVMap_css.__hash}` + " " + "my-0 py-0 waymo-dark-navy-text",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            width: "1.5rem",
                                            display: "inline-block"
                                        },
                                        className: `jsx-${AVMap_css.__hash}` + " " + "white-background p-0 text-center",
                                        children: "\uD83D\uDED1"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `jsx-${AVMap_css.__hash}` + " " + "verily-red-background py-0",
                                        children: "Requesting Assistance"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: `jsx-${AVMap_css.__hash}` + " " + "my-0 py-0 waymo-dark-navy-text",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            width: "1.5rem",
                                            display: "inline-block"
                                        },
                                        className: `jsx-${AVMap_css.__hash}` + " " + "white-background p-0 text-center",
                                        children: "\u2B1C"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `jsx-${AVMap_css.__hash}` + " " + "black-background waymo-white-text py-0",
                                        children: "AV"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: `jsx-${AVMap_css.__hash}` + " " + "my-0 py-0 waymo-dark-navy-text",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            width: "1.5rem",
                                            display: "inline-block"
                                        },
                                        className: `jsx-${AVMap_css.__hash}` + " " + "white-background p-0 text-center",
                                        children: "\uD83D\uDD0B"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `jsx-${AVMap_css.__hash}` + " " + "waymo-green-background black-text py-0",
                                        children: "Charging Station"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: `jsx-${AVMap_css.__hash}` + " " + "my-0 py-0 waymo-dark-navy-text",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            width: "1.5rem",
                                            display: "inline-block"
                                        },
                                        className: `jsx-${AVMap_css.__hash}` + " " + "white-background p-0 text-center",
                                        children: "\u26A0\uFE0F"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `jsx-${AVMap_css.__hash}` + " " + "yellow-background black-text py-0",
                                        children: "Roadside Assistance"
                                    })
                                ]
                            })
                        ]
                    }),
                    jsx_runtime_.jsx((styled_jsx_default()), {
                        id: AVMap_css.__hash,
                        children: AVMap_css
                    })
                ]
            })
        ]
    });
};
function AVMapPoint(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                tabIndex: -1,
                "aria-hidden": "true",
                style: {
                    "--left": props.left,
                    "--top": props.top
                },
                className: `jsx-${AVMap_css.__hash}` + " " + (props.p + " always-tabindex-1 " + props.extraClasses || "")
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: AVMap_css.__hash,
                children: AVMap_css
            })
        ]
    });
}

// EXTERNAL MODULE: ./helpers/getMockData.tsx
var getMockData = __webpack_require__(183);
;// CONCATENATED MODULE: ./components/WaymoDemo.tsx








function WaymoDemo(props) {
    const { showWaymoDemo  } = props;
    const { 0: mockWaymoData , 1: setMockWaymoData  } = (0,external_react_.useState)(null);
    const { 0: passengers , 1: setPassengers  } = (0,external_react_.useState)(14986);
    const { 0: milesOfXP , 1: setMilesOfXP  } = (0,external_react_.useState)(20900913);
    const { 0: incidencesResolved , 1: setIncidencesResolved  } = (0,external_react_.useState)(47);
    async function fetchData() {
        const rawData = await (0,getMockData/* default */.Z)("waymo");
        setMockWaymoData(rawData);
        setPassengers(rawData?.AutonomousVehicles?.Online?.AllocatedAVs);
        setMilesOfXP(rawData?.MilesOfXP);
        setIncidencesResolved(rawData?.IncidencesResolved);
    }
    let timer;
    (0,external_react_.useEffect)(()=>{
        clearInterval(timer);
        timer = setInterval(()=>{
            if (showWaymoDemo) fetchData();
        }, 3000);
        return ()=>clearInterval(timer)
        ; // stop fetching data when hidden
    }, [
        showWaymoDemo
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "waymo-demo",
        className: "p-0 waymo-white-background",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "waymo-white-text waymo-blue-to-green my-0 text-center text-center",
                children: "AV fleet infrastructure panel (MOCK)"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                id: "waymo-demo-main-content",
                className: "waymo-white-background",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "waymo-blue-text waymo-white-background mb-0 px-0",
                        children: [
                            "Autonomous Vehicles: ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "animated-text py-0",
                                children: "20600"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-1 waymo-demo-group",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(AVsOnline, {
                                data: mockWaymoData
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(AVsOffline, {
                                data: mockWaymoData
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-1 waymo-demo-group",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "waymo-blue-text waymo-white-background mb-0 px-0",
                                        children: [
                                            "Passengers:",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "animated-text py-0",
                                                children: passengers
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "d-flex wrap",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Passengers, {
                                            data: mockWaymoData
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-1 d-flex wrap",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(AVMap, {
                                    requestsPlusAVs: mockWaymoData?.RequestsPlusAVs
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "waymo-blue-text waymo-white-background mb-0 px-0",
                        children: [
                            "Miles of XP: ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "animated-text py-0",
                                children: milesOfXP
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "waymo-blue-text waymo-white-background mb-0 px-0",
                        children: [
                            "Incidences resolved:",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "animated-text py-0",
                                children: incidencesResolved
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
                className: "p-0",
                children: "(Note: this is a mock demo with simulated data.)"
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