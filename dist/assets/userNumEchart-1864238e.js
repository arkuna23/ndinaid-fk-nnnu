import "./index-eb0ca811.js";

import {
    a4 as m,
    r as s,
    w as u,
    f as p,
    g as h,
    o as y,
    c,
    __tla as _
} from "./index-6c08ea4c.js";

import {
    a as d,
    __tla as x
} from "./system-b59f2a4a.js";

import {
    i as b
} from "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let i, f = Promise.all([ (() => {
    try {
        return _;
    } catch {}
})(), (() => {
    try {
        return x;
    } catch {}
})() ]).then(async () => {
    i = {
        __name: "userNumEchart",
        setup(g) {
            const {
                width: n
            } = m(), o = s(null), e = s({});
            let a = null;
            return u(n, () => a.resize()), p(() => {
                d().then(r => {
                    r.forEach(t => {
                        t.hourText = Number(t.hour) + "点";
                    }), e.value = r, a = b(o.value);
                    const l = {
                        tooltip: {
                            trigger: "axis"
                        },
                        legend: {
                            data: [ "近24小时在线学习者", "近24小时在线教学者" ],
                            top: "20"
                        },
                        color: [ "#FEA645", "#245FE6" ],
                        grid: {
                            left: "10px",
                            right: "15px",
                            bottom: "0%",
                            containLabel: !0
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: !1,
                            axisLabel: {
                                show: !0
                            },
                            data: e.value.map(t => t.hourText)
                        },
                        yAxis: {
                            type: "value",
                            minInterval: 1
                        },
                        series: [ {
                            name: "近24小时在线教学者",
                            type: "line",
                            showSymbol: !1,
                            symbolSize: 6,
                            data: e.value.map(t => t.teacherCount)
                        }, {
                            name: "近24小时在线学习者",
                            type: "line",
                            showSymbol: !1,
                            symbolSize: 6,
                            data: e.value.map(t => t.studentCount)
                        } ]
                    };
                    a.setOption(l);
                });
            }), h(() => {
                a && a.dispose();
            }), (r, l) => (y(), c("div", {
                ref_key: "chartContainer",
                ref: o,
                style: {
                    width: "100%",
                    height: "200px"
                }
            }, null, 512));
        }
    };
});

export {
    f as __tla,
    i as default
};