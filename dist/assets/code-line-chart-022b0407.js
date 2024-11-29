import "./index-eb0ca811.js";

import {
    w as f,
    f as y,
    o as g,
    c as w,
    __tla as b
} from "./index-6c08ea4c.js";

import {
    i as u,
    L as i
} from "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let n, x = Promise.all([ (() => {
    try {
        return b;
    } catch {}
})() ]).then(async () => {
    let l;
    l = {
        id: "code",
        style: {
            height: "300px",
            width: "100%"
        }
    }, n = {
        __name: "code-line-chart",
        props: {
            width: {
                type: [ String, Number ],
                default: 0
            }
        },
        setup(d, {
            expose: p
        }) {
            let e = null;
            const h = d;
            return f(() => h.width, () => {
                e && e.resize();
            }), y(() => {
                const t = document.getElementById("code");
                e = u(t);
            }), p({
                codeChartUpdate: (t, r, c) => {
                    let o;
                    o = {
                        tooltip: {
                            show: !0,
                            trigger: "axis",
                            backgroundColor: "#000",
                            textStyle: {
                                color: "#F8F8F8;"
                            },
                            formatter: m => {
                                let a = "";
                                return m.forEach(s => {
                                    a += `
        <span style="line-height:25px;">${s.seriesName}: <span style="float:right;"><span style="font-weight:700;margin-left: 30px;margin-right:10px;">${s.data}</span>\u884C</span></span><br />
        `;
                                }), a;
                            }
                        },
                        grid: {
                            left: "8%",
                            right: "7%",
                            bottom: "12%",
                            top: "3%"
                        },
                        dataZoom: [ {
                            type: "slider",
                            show: !0,
                            showDetail: !1,
                            startValue: 0,
                            endValue: 7,
                            filterMode: "empty",
                            width: "50%",
                            height: 8,
                            left: "center",
                            zoomLoxk: !0,
                            handleSize: 0,
                            bottom: 0
                        }, {
                            type: "inside",
                            zoomOnMouseWheel: !1,
                            moveOnMouseMove: !0,
                            moveOnMouseWheel: !0
                        } ],
                        xAxis: {
                            type: "category",
                            boundaryGap: !1,
                            data: t,
                            splitLine: {
                                show: !0,
                                lineStyle: {
                                    color: "rgba(73, 73, 73, 0.08)"
                                }
                            }
                        },
                        yAxis: {
                            type: "value",
                            splitLine: {
                                show: !0,
                                lineStyle: {
                                    color: "rgba(73, 73, 73, 0.08)"
                                }
                            }
                        },
                        series: [ {
                            name: "增加代码行数",
                            type: "line",
                            symbol: "circle",
                            symbolSize: 6,
                            itemStyle: {
                                color: "#FC7A47",
                                borderColor: "rgba(255, 255, 255, 1)"
                            },
                            lineStyle: {
                                color: new i(1, 0, 0, 0, [ {
                                    offset: 0,
                                    color: "#F43571"
                                }, {
                                    offset: 1,
                                    color: "#FC7A47"
                                } ]),
                                shadowColor: "rgba(253, 81, 75, 0.17)",
                                shadowOffsetX: 4,
                                shadowOffsetY: 3
                            },
                            data: r
                        }, {
                            name: "减少代码行数",
                            type: "line",
                            symbol: "circle",
                            symbolSize: 6,
                            itemStyle: {
                                color: "#9FEBDB",
                                borderColor: "rgba(255, 255, 255, 1)"
                            },
                            lineStyle: {
                                color: new i(0, 0, 0, 1, [ {
                                    offset: 0,
                                    color: "#38C1A3"
                                }, {
                                    offset: 1,
                                    color: "#9FEBDB"
                                } ]),
                                shadowColor: "rgba(56, 193, 163, 0.15)",
                                shadowOffsetX: 4,
                                shadowOffsetY: 3
                            },
                            data: c
                        } ]
                    }, o && e.setOption(o);
                }
            }), (t, r) => (g(), w("div", l));
        }
    };
});

export {
    x as __tla,
    n as default
};