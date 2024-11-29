import "./index-eb0ca811.js";

import {
    w as h,
    f as y,
    o as c,
    c as u,
    __tla as g
} from "./index-6c08ea4c.js";

import {
    i as x
} from "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let n, f = Promise.all([ (() => {
    try {
        return g;
    } catch {}
})() ]).then(async () => {
    let l;
    l = {
        id: "team",
        style: {
            height: "250px",
            width: "100%"
        }
    }, n = {
        __name: "team-bar-chart",
        props: {
            width: {
                type: [ String, Number ],
                default: 0
            }
        },
        setup(d, {
            expose: p
        }) {
            let a = null;
            const m = d;
            return h(() => m.width, e => {
                a && a.resize();
            }), y(() => {
                const e = document.getElementById("team");
                a = x(e);
            }), p({
                codeChartUpdate: (e, t) => {
                    let i;
                    i = {
                        grid: {
                            top: "5%",
                            bottom: "14%",
                            right: "3%",
                            left: "12%"
                        },
                        dataZoom: [ {
                            type: "slider",
                            show: !0,
                            showDetail: !1,
                            startValue: 0,
                            endValue: t.length <= 5 ? 2 : 1,
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
                            axisLabel: {
                                interval: 0
                            },
                            data: e
                        },
                        yAxis: {
                            type: "value"
                        },
                        tooltip: {
                            show: !0,
                            trigger: "axis",
                            backgroundColor: "#000",
                            formatter: s => {
                                let o = "";
                                return s.forEach(r => {
                                    o += `
        <div style="display: flex;align-items: center;justify-content: space-between;min-width:150px;">
          <div style="display: flex;align-items: center;">
            <div style="width: 14px;height: 10px;border: 1px solid #FFFFFF;background: ${r.color};border-radius: 30px;"></div>
            <span style="margin-left: 8px;">${r.seriesName}</span>
          </div>
          <div style="margin-left: 15px;">
            <span style="margin-right: 8px;">${r.data}</span>
            <span>\u884C</span>
          </div>
        </div>
        `;
                                }), o;
                            },
                            textStyle: {
                                color: "#F8F8F8;"
                            },
                            axisPointer: {
                                type: "shadow"
                            }
                        },
                        series: []
                    }, t.forEach(s => {
                        const o = {
                            name: s.username,
                            data: s.count,
                            type: "bar",
                            barWidth: t.length <= 10 ? 10 : t.length <= 20 ? 5 : 2,
                            itemStyle: {
                                barBorderRadius: [ 40, 40, 0, 0 ]
                            }
                        };
                        i.series.push(o);
                    }), i && a.setOption(i);
                }
            }), (e, t) => (c(), u("div", l));
        }
    };
});

export {
    f as __tla,
    n as default
};