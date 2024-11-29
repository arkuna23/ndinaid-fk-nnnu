import "./index-eb0ca811.js";

import {
    a4 as m,
    r as s,
    w as p,
    f as u,
    g as c,
    o as f,
    c as y,
    __tla as h
} from "./index-6c08ea4c.js";

import {
    v as _,
    __tla as d
} from "./system-b59f2a4a.js";

import {
    i as v,
    L as x
} from "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let i, g = Promise.all([ (() => {
    try {
        return h;
    } catch {}
})(), (() => {
    try {
        return d;
    } catch {}
})() ]).then(async () => {
    i = {
        __name: "visitsNumEchart",
        setup(w) {
            const {
                width: n
            } = m(), o = s(null), e = s({});
            let t = null;
            return p(n, () => t.resize()), u(() => {
                _().then(l => {
                    e.value = l, t = v(o.value);
                    const r = {
                        tooltip: {
                            trigger: "axis"
                        },
                        legend: {
                            show: !1
                        },
                        grid: {
                            left: "10px",
                            right: "10px",
                            bottom: "0%",
                            containLabel: !0
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: !1,
                            axisLabel: {
                                show: !0,
                                rotate: 45
                            },
                            data: e.value.map(a => a.date)
                        },
                        yAxis: {
                            type: "value",
                            minInterval: 1
                        },
                        series: [ {
                            name: "访问量",
                            type: "line",
                            showSymbol: !1,
                            symbolSize: 6,
                            smooth: !0,
                            data: e.value.map(a => a.totalCount),
                            itemStyle: {
                                color: "#34CE72"
                            },
                            areaStyle: {
                                color: new x(0, 0, 0, 1, [ {
                                    offset: 0,
                                    color: "#34CE72"
                                }, {
                                    offset: 1,
                                    color: "#fff"
                                } ])
                            }
                        } ]
                    };
                    t.setOption(r);
                });
            }), c(() => {
                t && t.dispose();
            }), (l, r) => (f(), y("div", {
                ref_key: "chartContainer2",
                ref: o,
                style: {
                    width: "100%",
                    height: "310px"
                }
            }, null, 512));
        }
    };
});

export {
    g as __tla,
    i as default
};