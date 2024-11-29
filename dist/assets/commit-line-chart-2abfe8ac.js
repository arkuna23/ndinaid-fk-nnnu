import "./index-eb0ca811.js";

import {
    w as c,
    f as d,
    o as p,
    c as h,
    __tla as f
} from "./index-6c08ea4c.js";

import {
    i as y,
    L as a
} from "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let s, g = Promise.all([ (() => {
    try {
        return f;
    } catch {}
})() ]).then(async () => {
    let l;
    l = {
        id: "commit",
        style: {
            height: "260px",
            width: "100%"
        }
    }, s = {
        __name: "commit-line-chart",
        props: {
            width: {
                type: [ String, Number ],
                default: 0
            }
        },
        setup(i, {
            expose: n
        }) {
            let e = null;
            const m = i;
            return c(() => m.width, () => {
                e && e.resize();
            }), d(() => {
                const t = document.getElementById("commit");
                e = y(t);
            }), n({
                codeChartUpdate: (t, r) => {
                    let o;
                    o = {
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
                        yAxis: {
                            type: "value",
                            splitLine: {
                                show: !0,
                                lineStyle: {
                                    color: "rgba(73, 73, 73, 0.08)"
                                }
                            }
                        },
                        grid: {
                            top: "5%",
                            bottom: "14%",
                            right: "8%",
                            left: "8%"
                        },
                        tooltip: {
                            show: !0,
                            trigger: "axis",
                            backgroundColor: "#000",
                            formatter: '提交<span style="font-weight: 700;margin-left: 20px;margin-right:10px;">{c0}</span>次',
                            textStyle: {
                                color: "#F8F8F8;"
                            }
                        },
                        series: [ {
                            data: r,
                            type: "line",
                            smooth: !0,
                            symbol: "circle",
                            symbolSize: 6,
                            itemStyle: {
                                color: "#FCB847",
                                borderColor: "rgba(255, 255, 255, 1)"
                            },
                            lineStyle: {
                                color: new a(1, 0, 0, 0, [ {
                                    offset: 0,
                                    color: "#354EF5"
                                }, {
                                    offset: 1,
                                    color: "#CDB0FF"
                                } ]),
                                shadowColor: "rgba(53, 78, 244, 0.1)",
                                shadowOffsetX: 4,
                                shadowOffsetY: 3
                            },
                            areaStyle: {
                                color: new a(0, 0, 0, 1, [ {
                                    offset: 0,
                                    color: "rgba(53,78,245,0.07)"
                                }, {
                                    offset: 1,
                                    color: "rgba(216,216,216,0.00)"
                                } ])
                            }
                        } ]
                    }, o && e.setOption(o);
                }
            }), (t, r) => (p(), h("div", l));
        }
    };
});

export {
    g as __tla,
    s as default
};