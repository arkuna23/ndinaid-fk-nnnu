import "./index-eb0ca811.js";

import {
    v as S,
    __tla as k
} from "./index-9567cbf6.js";

import {
    T as P,
    r as _,
    a0 as I,
    f as A,
    g as w,
    o as i,
    c as p,
    t as l,
    v as u,
    B as c,
    a as C,
    D as x,
    R as D,
    S as L,
    __tla as O
} from "./index-6c08ea4c.js";

import {
    _ as T
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    i as j
} from "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let F, z = Promise.all([ (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return O;
    } catch {}
})() ]).then(async () => {
    let a, f, y, d, v, m, g;
    a = t => (D("data-v-8d6222c1"), t = t(), L(), t), f = {
        style: {
            position: "relative"
        }
    }, y = {
        key: 0,
        class: "pointList"
    }, d = a(() => l("span", {
        class: "colorPoint",
        style: {
            "background-color": "#245FE6"
        }
    }, null, -1)), v = {
        key: 0
    }, m = a(() => l("span", {
        class: "colorPoint",
        style: {
            "background-color": "#35D8E4"
        }
    }, null, -1)), g = a(() => l("span", {
        class: "colorPoint",
        style: {
            "background-color": "#FEA645"
        }
    }, null, -1)), F = T({
        __name: "statisticsEchart",
        props: {
            resInfo: {
                type: Object,
                required: !0,
                default: () => ({})
            }
        },
        setup(t) {
            const b = P(), h = _(null);
            let s = null;
            const N = t, {
                resInfo: n
            } = I(N), e = _({});
            A(() => {
                S({
                    resId: n.value.id,
                    currenClassId: b.params.classId
                }).then(o => {
                    e.value = {
                        finishProgress: o.finishProgress,
                        peopleNum: [ 5, 6 ].includes(n.value.resType) ? [ {
                            value: o.finishNum,
                            name: "已完成学生"
                        }, {
                            value: o.unStartNum,
                            name: "未开始学生"
                        } ] : [ {
                            value: o.finishNum,
                            name: "已完成学生"
                        }, {
                            value: o.goingNum,
                            name: "进行中学生"
                        }, {
                            value: o.unStartNum,
                            name: "未开始学生"
                        } ]
                    }, s = j(h.value);
                    const r = {
                        tooltip: {
                            trigger: "item"
                        },
                        legend: {
                            show: !1
                        },
                        series: [ {
                            type: "pie",
                            radius: [ "55%", "70%" ],
                            avoidLabelOverlap: !1,
                            padAngle: 10,
                            itemStyle: {
                                borderRadius: 20
                            },
                            label: {
                                show: !1,
                                position: "center"
                            },
                            labelLine: {
                                show: !1
                            },
                            data: e.value.peopleNum
                        } ],
                        color: e.value.peopleNum.length == 3 ? [ {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [ {
                                offset: 0,
                                color: "#7371FF"
                            }, {
                                offset: 1,
                                color: "#245FE6"
                            } ],
                            global: !1
                        }, {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [ {
                                offset: 0,
                                color: "#35D8E4"
                            }, {
                                offset: 1,
                                color: "#5EEAF4"
                            } ],
                            global: !1
                        }, {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [ {
                                offset: 0,
                                color: "#FFC368"
                            }, {
                                offset: 1,
                                color: "#FEA645"
                            } ],
                            global: !1
                        } ] : [ {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [ {
                                offset: 0,
                                color: "#7371FF"
                            }, {
                                offset: 1,
                                color: "#245FE6"
                            } ],
                            global: !1
                        }, {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [ {
                                offset: 0,
                                color: "#FFC368"
                            }, {
                                offset: 1,
                                color: "#FEA645"
                            } ],
                            global: !1
                        } ],
                        graphic: [ {
                            type: "text",
                            left: "center",
                            top: "44%",
                            style: {
                                text: E(e.value.finishProgress),
                                fontSize: 60,
                                fontWeight: "bold"
                            }
                        }, {
                            type: "text",
                            left: "center",
                            top: "60%",
                            style: {
                                text: "已完成",
                                fontSize: 20
                            }
                        } ]
                    };
                    s.setOption(r);
                });
            });
            const E = o => {
                const r = parseFloat(o.replace("%", ""));
                return Math.round(10 * r) / 10 + "%";
            };
            return w(() => {
                s && s.dispose();
            }), (o, r) => (i(), p("div", f, [ l("div", {
                ref_key: "chartContainer",
                ref: h,
                style: {
                    width: "500px",
                    height: "400px"
                }
            }, null, 512), e.value.peopleNum ? (i(), p("div", y, [ l("div", null, [ d, u("已完成学生：" + c(e.value.peopleNum[0].value) + "人", 1) ]), [ 5, 6 ].includes(C(n).resType) ? x("", !0) : (i(), 
            p("div", v, [ m, u("进行中学生：" + c(e.value.peopleNum[1].value) + "人", 1) ])), l("div", null, [ g, u("未开始学生：" + c(e.value.peopleNum[e.value.peopleNum.length - 1].value) + "人", 1) ]) ])) : x("", !0) ]));
        }
    }, [ [ "__scopeId", "data-v-8d6222c1" ] ]);
});

export {
    z as __tla,
    F as default
};