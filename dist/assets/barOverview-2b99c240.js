import "./index-eb0ca811.js";

import {
    a4 as s,
    w as n,
    e as o,
    r as l,
    f as p,
    n as c,
    o as d,
    c as m,
    __tla as u
} from "./index-6c08ea4c.js";

import {
    _
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    i as y
} from "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let e, b = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})() ]).then(async () => {
    e = _({
        __name: "barOverview",
        props: {
            chartData: {
                type: Object,
                default: () => ({})
            }
        },
        setup(f) {
            const {
                width: r
            } = s();
            n(r, () => a.value.resize());
            const i = o(() => ({
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                legend: {
                    data: [ "未开课单位", "进行中单位", "已结课单位" ]
                },
                color: [ "#245FE6", "#39CDF6", "#71F3B0" ],
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: !0
                },
                xAxis: [ {
                    type: "category",
                    data: [ "1", "2", "3", "4", "5", "6", "7" ]
                } ],
                yAxis: [ {
                    name: "",
                    type: "value",
                    splitLine: !1
                } ],
                series: [ {
                    name: "未开课单位",
                    type: "bar",
                    stack: "总数",
                    data: [ 620, 732, 701, 734, 1090, 1130, 1120 ]
                }, {
                    name: "进行中单位",
                    type: "bar",
                    stack: "总数",
                    data: [ 120, 132, 101, 134, 290, 230, 220 ]
                }, {
                    name: "已结课单位",
                    type: "bar",
                    stack: "总数",
                    data: [ 120, 132, 101, 134, 290, 230, 220 ]
                } ],
                animationDurationUpdate: 1500,
                animationEasingUpdate: "quinticInOut",
                barWidth: 20
            })), t = l(null);
            let a = null;
            return p(() => {
                c(() => {
                    a = y(t.value), a.setOption(i.value);
                });
            }), (h, v) => (d(), m("div", {
                class: "bar-chart",
                ref_key: "barChartRef",
                ref: t
            }, null, 512));
        }
    }, [ [ "__scopeId", "data-v-0b5f83ee" ] ]);
});

export {
    b as __tla,
    e as default
};