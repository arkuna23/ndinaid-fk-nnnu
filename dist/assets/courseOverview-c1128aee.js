import {
    a4 as j,
    a0 as N,
    U as P,
    r as d,
    w as R,
    e as W,
    g as q,
    o as G,
    c as T,
    t as e,
    B as A,
    a as E,
    k as y,
    l as C,
    av as Z,
    aw as H,
    R as J,
    S as K,
    bG as M,
    __tla as Q
} from "./index-6c08ea4c.js";

import {
    d as X,
    __tla as Y
} from "./system-b59f2a4a.js";

import "./index-eb0ca811.js";

import {
    _ as $
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    i as F
} from "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let I, aa = Promise.all([ (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})() ]).then(async () => {
    let m, _, b, O, w, x;
    m = p => (J("data-v-12761d72"), p = p(), K(), p), _ = {
        class: "left"
    }, b = m(() => e("p", {
        class: "left-title"
    }, "课程概览", -1)), O = {
        class: "left-stastic"
    }, w = m(() => e("span", {
        class: "label pl-30px"
    }, "开课数量", -1)), x = m(() => e("span", {
        class: "label pl-100px"
    }, "开课班级", -1)), I = $({
        __name: "courseOverview",
        props: {
            options: {
                type: Object,
                default: () => {}
            }
        },
        setup(p, {
            expose: k
        }) {
            const {
                width: B
            } = j(), D = p, {
                options: h
            } = N(D), r = P({
                hpArrangmentCountVOS: [],
                hpClassCountVOS: []
            }), v = d([]), g = d([]);
            let s = null, l = null;
            const S = d(null), V = d(null);
            R(B, () => {
                s == null || s.resize(), l == null || l.resize();
            });
            const f = d({
                tooltip: {
                    trigger: "item"
                },
                series: [ {
                    type: "pie",
                    radius: [ "65%", "80%" ],
                    avoidLabelOverlap: !1,
                    center: [ "40%", "50%" ],
                    itemStyle: {
                        borderRadius: 0,
                        borderColor: "#fff",
                        borderWidth: 2
                    },
                    label: {
                        show: !1
                    },
                    labelLine: {
                        show: !1
                    },
                    data: [ {
                        value: 0,
                        name: "1级"
                    }, {
                        value: 0,
                        name: "2级"
                    }, {
                        value: 0,
                        name: "3级"
                    }, {
                        value: 0,
                        name: "4级"
                    }, {
                        value: 0,
                        name: "5级"
                    }, {
                        value: 0,
                        name: "其他"
                    } ]
                }, {
                    name: "",
                    type: "pie",
                    center: [ "40%", "50%" ],
                    color: "transparent",
                    tooltip: {
                        trigger: "item"
                    },
                    label: {
                        show: !0,
                        position: "center",
                        formatter: `{c|{c}}
{b|\u5F00\u8BFE\u6570\u91CF}`,
                        rich: {
                            c: {
                                color: "#333333",
                                fontWeight: "bold",
                                fontSize: 36,
                                align: "center"
                            },
                            b: {
                                color: "#333333",
                                fontSize: 14,
                                align: "center"
                            }
                        }
                    },
                    data: [ {
                        value: 0,
                        name: "开课数量"
                    } ]
                } ],
                color: [ "#245FE6", "#FEA645", "#2BC0CB", "#2DBDFC", "#FFDE5B", "#EE1384", "#AB61FF" ]
            }), L = W(() => ({
                color: [ "#245FE6", "#39CDF6", "#71F3B0" ],
                tooltip: {
                    show: "true",
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                legend: {
                    data: [ "未开课班级", "进行中班级", "已结课班级" ]
                },
                grid: {
                    left: "5%",
                    right: "0%",
                    bottom: "3%",
                    containLabel: !0
                },
                xAxis: [ {
                    type: "category",
                    axisTick: {
                        show: !1
                    },
                    axisLabel: {
                        formatter: (n, o) => n.length > 5 ? n.substring(0, 5) + "..." : n
                    },
                    data: v.value
                } ],
                yAxis: [ {
                    type: "value",
                    minInterval: 1
                } ],
                dataZoom: [ {
                    type: "inside",
                    startValue: 0,
                    endValue: 4
                } ],
                series: g.value,
                animationDurationUpdate: 1500,
                animationEasingUpdate: "quinticInOut"
            }));
            return k({
                getData: async () => {
                    const n = await (async () => await X({
                        termId: h.value.termId,
                        level: h.value.levelId,
                        tagCode: h.value.optionUsedId
                    }))();
                    r.hpArrangmentCountVOS = n.hpArrangmentCountVOS || [], r.hpClassCountVOS = n.hpClassCountVOS || [], 
                    (() => {
                        let o = [];
                        const a = M({
                            rawList: r.hpArrangmentCountVOS,
                            groupAttr: "courseId"
                        });
                        for (const [ c, t ] of Object.entries(a)) {
                            let {
                                courseName: i
                            } = t == null ? void 0 : t[0];
                            o.push({
                                value: t.length,
                                name: i
                            });
                        }
                        f.value.series[0].data = o, f.value.series[1].data[0].value = r.hpArrangmentCountVOS.length;
                    })(), (o => {
                        const a = {}, c = [ {
                            status: "0",
                            name: "未开课班级"
                        }, {
                            status: "1",
                            name: "进行中班级"
                        }, {
                            status: "2",
                            name: "已结课班级"
                        } ];
                        o.forEach(i => {
                            const {
                                courseDeptName: u,
                                teachStatus: z
                            } = i;
                            a[u] || (a[u] = {}, c.forEach(U => {
                                a[u][U.status] = 0;
                            })), a[u][z]++;
                        });
                        const t = Object.keys(a);
                        v.value = t, g.value = [], c.forEach(i => {
                            g.value.push({
                                name: i.name,
                                type: "bar",
                                stack: "总量",
                                data: t.map(u => a[u][i.status])
                            });
                        });
                    })(r.hpClassCountVOS), s = F(S.value), l = F(V.value), s.setOption(f.value), 
                    l.setOption(L.value);
                }
            }), q(() => {
                s && s.dispose(), l && l.dispose();
            }), (n, o) => {
                var t;
                const a = Z, c = H;
                return G(), T("div", _, [ b, e("div", O, [ w, e("em", null, A((t = E(r).hpArrangmentCountVOS) == null ? void 0 : t.length), 1), x, e("em", null, A(E(v).length), 1) ]), y(c, {
                    style: {
                        "margin-top": "10px"
                    }
                }, {
                    default: C(() => [ y(a, {
                        span: 10
                    }, {
                        default: C(() => [ e("div", {
                            ref_key: "chartContainer1",
                            ref: S,
                            style: {
                                width: "100%",
                                height: "244px"
                            }
                        }, null, 512) ]),
                        _: 1
                    }), y(a, {
                        span: 14
                    }, {
                        default: C(() => [ e("div", {
                            ref_key: "chartContainer2",
                            ref: V,
                            style: {
                                width: "100%",
                                height: "244px"
                            }
                        }, null, 512) ]),
                        _: 1
                    }) ]),
                    _: 1
                }) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-12761d72" ] ]);
});

export {
    aa as __tla,
    I as default
};