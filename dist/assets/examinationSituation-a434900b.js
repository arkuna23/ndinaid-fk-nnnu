import {
    r as n,
    f as j,
    aV as I,
    o as v,
    c as b,
    t as c,
    k as x,
    l as y,
    F as E,
    y as T,
    a as u,
    C,
    ab as P,
    ac as N,
    R as q,
    S as Z,
    __tla as B
} from "./index-6c08ea4c.js";

import {
    b as G,
    D as H,
    __tla as J
} from "./dict-c5825220.js";

import {
    g as K,
    b as Q,
    c as X,
    __tla as ee
} from "./system-b59f2a4a.js";

import {
    a as ae,
    __tla as te
} from "./managementSideCorrelation-1acb9a2c.js";

import {
    e as $
} from "./index-0d885c8d.js";

import {
    _ as le
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./install-67fb146c.js";

let F, re = Promise.all([ (() => {
    try {
        return B;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})(), (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return te;
    } catch {}
})() ]).then(async () => {
    let w, D, S, V, k;
    w = {
        class: "examinationSituation"
    }, D = {
        class: "titleContainer"
    }, S = (h => (q("data-v-29b4ad2e"), h = h(), Z(), h))(() => c("span", {
        class: "titleContainer-title"
    }, "考试情况", -1)), V = {
        class: "search-box"
    }, k = {
        class: "echartsContainer"
    }, F = le({
        __name: "examinationSituation",
        setup(h) {
            const A = n(null), L = n(null);
            let s = n(null), o = n(null);
            const f = n([]), z = n([]), _ = n([]), i = n({
                level: null,
                tagCode: null,
                termYear: null
            }), M = () => {
                K().then(a => {
                    if (!a || a.length === 0) return;
                    a.forEach(t => {
                        t.termStartTime = new Date(t.termStartTime.join(".")).getTime(), 
                        t.termEndTime = new Date(t.termEndTime.join(".")).getTime();
                    }), _.value = a, _.value.push({
                        id: "other",
                        name: "其它",
                        isCurrentTerm: 0,
                        termStartTime: null,
                        termEndTime: null,
                        createTime: null,
                        updateTime: null
                    });
                    const l = a.find(t => t.isCurrentTerm === 1);
                    if (l) i.value.termYear = l.id; else {
                        const t = (e => {
                            const m = new Date(e);
                            return `${m.getFullYear()}.${m.getMonth() + 1}.${m.getDate()}`;
                        })(new Date().getTime()), r = a.filter(e => e.termStartTime <= t && e.termEndTime >= t);
                        r.length ? i.value.termYear = r.length === 1 ? r[0].id : r.sort((e, m) => m.createTime - e.createTime)[0].id : i.value.termYear = a.sort((e, m) => m.createTime - e.createTime)[0].id;
                    }
                    U();
                }).catch(a => {});
            }, U = () => {
                Q().then(a => {
                    const l = G(H.SYSTEM_DEPT_LEVEL);
                    a.forEach(t => {
                        const r = l.find(e => e.value === t);
                        r && f.value.push(r);
                    }), f.value.length > 0 && (i.value.level = f.value[0].value, 
                    Y(i.value.level)), g();
                }).catch(a => {});
            }, Y = a => {
                X({
                    level: a
                }).then(l => {
                    z.value = l;
                });
            }, W = a => {
                a && (i.value.tagCode = null, Y(a), g());
            }, g = () => {
                ae({
                    ...i.value
                }).then(a => {
                    R(a);
                });
            }, R = a => {
                const {
                    examTotal: l,
                    homeExamDeptDTOList: t
                } = a;
                let r = (l == null ? void 0 : l.toString()) || "0";
                p.value.series[1].label.formatter = r && r.length > 5 ? `{a|${r.slice(0, 5)}...}
{b|\u8003\u8BD5\u603B\u573A\u6B21}` : `{a|${r}}
{b|\u8003\u8BD5\u603B\u573A\u6B21}`, p.value.series[1].data[0].value = r, p.value.series[0].data = t == null ? void 0 : t.map(e => ({
                    name: e.deptName,
                    value: e.deptExamCount || 0
                })), s.value && (s.value.setOption(p.value), s.value.resize()), 
                d.value.series.forEach(e => e.data = []), d.value.xAxis.data = [], 
                t == null || t.map(e => {
                    d.value.series[0].data.push(e.statusCountMap[0] || 0), d.value.series[1].data.push(e.statusCountMap[1] || 0), 
                    d.value.series[2].data.push(e.statusCountMap[2] || 0);
                }), d.value.xAxis[0].data = t == null ? void 0 : t.map(e => `${e.deptName}(${e.deptCode})`), 
                o.value && (o.value.setOption(d.value), o.value.resize());
            }, p = n({
                tooltip: {
                    trigger: "item"
                },
                series: [ {
                    type: "pie",
                    radius: [ "45%", "60%" ],
                    avoidLabelOverlap: !1,
                    center: [ "50%", "50%" ],
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
                    data: []
                }, {
                    type: "pie",
                    center: [ "50%", "50%" ],
                    color: "transparent",
                    tooltip: {
                        trigger: "item"
                    },
                    label: {
                        show: !0,
                        position: "center",
                        formatter: `{a|0}
{b|\u8003\u8BD5\u603B\u573A\u6B21}`,
                        rich: {
                            a: {
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
                        name: "考试总场次"
                    } ]
                } ],
                color: [ "#34CE72", "#17CCD9", "#245FE6", "#FEA645", "#E14635" ]
            }), d = n({
                color: [ "#0DA5AA", "#6DE78E", "#DAF34A" ],
                tooltip: {
                    show: !0,
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                legend: {
                    data: [ "未开始考试", "进行中考试", "已结束考试" ],
                    icon: "circle"
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
                    data: [],
                    axisLabel: {
                        formatter: function(a) {
                            return a.length > 5 ? a.substring(0, 5) + "..." : a;
                        }
                    }
                } ],
                yAxis: [ {
                    type: "value",
                    minInterval: 1
                } ],
                series: [ {
                    name: "未开始考试",
                    type: "bar",
                    stack: "总数",
                    barWidth: "20px",
                    data: []
                }, {
                    name: "进行中考试",
                    type: "bar",
                    stack: "总数",
                    barWidth: "20px",
                    data: []
                }, {
                    name: "已结束考试",
                    type: "bar",
                    stack: "总数",
                    barWidth: "20px",
                    data: []
                } ],
                dataZoom: [ {
                    type: "inside",
                    startValue: 0,
                    endValue: 4
                } ],
                animationDurationUpdate: 500,
                animationEasingUpdate: "quinticInOut"
            }), O = () => {
                s.value && s.value.resize(), o.value && o.value.resize();
            };
            return j(() => {
                M(), s.value = $.init(A.value), s.value.setOption(p.value), o.value = $.init(L.value), 
                o.value.setOption(d.value), window.addEventListener("resize", O);
            }), I(() => {
                s.value && s.value.dispose(), o.value && o.value.dispose(), window.removeEventListener("resize", O);
            }), (a, l) => {
                const t = P, r = N;
                return v(), b("div", w, [ c("div", D, [ S, c("div", V, [ x(r, {
                    modelValue: u(i).termYear,
                    "onUpdate:modelValue": l[0] || (l[0] = e => u(i).termYear = e),
                    placeholder: "请选择学期",
                    style: {
                        width: "180px"
                    },
                    onChange: g
                }, {
                    default: y(() => [ (v(!0), b(E, null, T(u(_), e => (v(), C(t, {
                        key: e.id,
                        value: e.id,
                        label: e.name
                    }, null, 8, [ "value", "label" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]), x(r, {
                    modelValue: u(i).level,
                    "onUpdate:modelValue": l[1] || (l[1] = e => u(i).level = e),
                    placeholder: "请选择组织",
                    class: "ml-10px",
                    style: {
                        width: "120px"
                    },
                    onChange: W
                }, {
                    default: y(() => [ (v(!0), b(E, null, T(u(f), e => (v(), C(t, {
                        key: e.value,
                        value: e.value,
                        label: e.label
                    }, null, 8, [ "value", "label" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]), x(r, {
                    modelValue: u(i).tagCode,
                    "onUpdate:modelValue": l[2] || (l[2] = e => u(i).tagCode = e),
                    placeholder: "请选择组织类别",
                    class: "ml-10px",
                    style: {
                        width: "120px"
                    },
                    onChange: g
                }, {
                    default: y(() => [ (v(!0), b(E, null, T(u(z), e => (v(), C(t, {
                        key: e.id,
                        value: e.code,
                        label: e.name
                    }, null, 8, [ "value", "label" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]) ]), c("div", k, [ c("div", {
                    class: "pieEcharts",
                    ref_key: "pieEchartsRef",
                    ref: A
                }, null, 512), c("div", {
                    class: "columnar",
                    ref_key: "columnarRef",
                    ref: L
                }, null, 512) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-29b4ad2e" ] ]);
});

export {
    re as __tla,
    F as default
};