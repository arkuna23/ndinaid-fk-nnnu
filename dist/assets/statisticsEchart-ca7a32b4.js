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
    g as D,
    o as p,
    c as i,
    t as o,
    v as u,
    B as c,
    a as w,
    D as x,
    R as C,
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

let b, z = Promise.all([ (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return O;
    } catch {}
})() ]).then(async () => {
    let a, f, d, y, m, v, g;
    a = t => (C("data-v-605cfb06"), t = t(), L(), t), f = {
        style: {
            position: "relative"
        }
    }, d = {
        key: 0,
        class: "pointList"
    }, y = a(() => o("span", {
        class: "colorPoint",
        style: {
            "background-color": "#245FE6"
        }
    }, null, -1)), m = {
        key: 0
    }, v = a(() => o("span", {
        class: "colorPoint",
        style: {
            "background-color": "#35D8E4"
        }
    }, null, -1)), g = a(() => o("span", {
        class: "colorPoint",
        style: {
            "background-color": "#FEA645"
        }
    }, null, -1)), b = T({
        __name: "statisticsEchart",
        props: {
            resInfo: {
                type: Object,
                required: !0,
                default: () => ({})
            }
        },
        setup(t) {
            const F = P(), h = _(null);
            let s = null;
            const N = t, {
                resInfo: n
            } = I(N), e = _({});
            A(() => {
                S({
                    resId: n.value.id,
                    currenClassId: F.params.classId
                }).then(l => {
                    e.value = {
                        finishProgress: l.finishProgress,
                        peopleNum: [ 5, 6 ].includes(n.value.resType) ? [ {
                            value: l.handleNum,
                            name: "已完成学生"
                        }, {
                            value: l.unDealNum,
                            name: "未开始学生"
                        } ] : [ {
                            value: l.handleNum,
                            name: "已完成学生"
                        }, {
                            value: l.dealNum,
                            name: "进行中学生"
                        }, {
                            value: l.unDealNum,
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
            const E = l => {
                const r = parseFloat(l.replace("%", ""));
                return Math.round(10 * r) / 10 + "%";
            };
            return D(() => {
                s && s.dispose();
            }), (l, r) => (p(), i("div", f, [ o("div", {
                ref_key: "chartContainer",
                ref: h,
                style: {
                    width: "500px",
                    height: "400px"
                }
            }, null, 512), e.value.peopleNum ? (p(), i("div", d, [ o("div", null, [ y, u("已完成学生：" + c(e.value.peopleNum[0].value) + "人", 1) ]), [ 1, 2 ].includes(w(n).resType) ? (p(), 
            i("div", m, [ v, u("进行中学生：" + c(e.value.peopleNum[1].value) + "人", 1) ])) : x("", !0), o("div", null, [ g, u("未开始学生：" + c(e.value.peopleNum[e.value.peopleNum.length - 1].value) + "人", 1) ]) ])) : x("", !0) ]));
        }
    }, [ [ "__scopeId", "data-v-605cfb06" ] ]);
});

export {
    z as __tla,
    b as default
};