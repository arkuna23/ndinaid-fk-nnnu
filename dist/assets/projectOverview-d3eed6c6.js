import {
    a4 as C,
    a0 as E,
    r as u,
    w as k,
    g as O,
    o as z,
    c as A,
    t as l,
    B as F,
    a as B,
    k as f,
    l as m,
    av as D,
    aw as T,
    R as U,
    S as W,
    __tla as P
} from "./index-6c08ea4c.js";

import {
    p as R,
    __tla as V
} from "./system-b59f2a4a.js";

import "./index-eb0ca811.js";

import {
    _ as q
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    i as y
} from "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let _, G = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return V;
    } catch {}
})() ]).then(async () => {
    let c, h, j, I, L;
    c = o => (U("data-v-5bf7e377"), o = o(), W(), o), h = {
        class: "right"
    }, j = c(() => l("p", {
        class: "right-title"
    }, "项目概览", -1)), I = {
        class: "right-stastic"
    }, L = c(() => l("span", {
        class: "label pl-30px"
    }, "发布项目数量", -1)), _ = q({
        __name: "projectOverview",
        props: {
            options: {
                type: Object,
                default: () => {}
            }
        },
        setup(o, {
            expose: S
        }) {
            const {
                width: x
            } = C(), w = o, {
                options: v
            } = E(w), e = u({});
            let r = null, i = null;
            const g = u(null), b = u(null);
            k(x, () => {
                r.resize(), i.resize();
            });
            const d = u({
                tooltip: {
                    trigger: "item"
                },
                legend: {
                    top: "10%",
                    orient: "vertical",
                    left: "78%",
                    icon: "circle",
                    itemWidth: 10,
                    itemHeight: 10,
                    itemGap: 20,
                    textStyle: {
                        color: "#333333",
                        fontSize: 14
                    },
                    data: [ "1级", "2级", "3级", "4级", "5级", "其他" ]
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
                        formatter: `{c|0}
{b|\u9879\u76EE\u603B\u6570}`,
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
                        name: "项目总数"
                    } ]
                } ],
                color: [ "#34CE72", "#17CCD9", "#245FE6", "#FEA645", "#E14635", "#6E85BB" ]
            }), n = u({
                color: [ "#8336E8", "#F950C1", "#FFAE89" ],
                tooltip: {
                    show: !0,
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                legend: {
                    data: [ "未开始项目", "进行中项目", "已截止项目" ]
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
                        formatter: (t, p) => t.length > 5 ? t.substring(0, 5) + "..." : t
                    },
                    data: [ 1, 2, 3, 4 ]
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
                series: [ {
                    name: "未开始项目",
                    type: "bar",
                    stack: "总数",
                    data: [ 620, 732, 701, 734, 1090, 1130, 1120 ]
                }, {
                    name: "进行中项目",
                    type: "bar",
                    stack: "总数",
                    data: [ 120, 132, 101, 134, 290, 230, 220 ]
                }, {
                    name: "已截止项目",
                    type: "bar",
                    stack: "总数",
                    data: [ 120, 132, 101, 134, 290, 230, 220 ]
                } ],
                animationDurationUpdate: 1500,
                animationEasingUpdate: "quinticInOut"
            });
            return S({
                getDate: () => {
                    R({
                        termId: v.value.termId,
                        level: v.value.levelId,
                        tagCode: v.value.optionUsedId
                    }).then(t => {
                        e.value.projectCnt = t.projectCnt, e.value.projectLevelInfo = [ {
                            value: t.projectLevelInfo[1],
                            name: "1级"
                        }, {
                            value: t.projectLevelInfo[2],
                            name: "2级"
                        }, {
                            value: t.projectLevelInfo[3],
                            name: "3级"
                        }, {
                            value: t.projectLevelInfo[4],
                            name: "4级"
                        }, {
                            value: t.projectLevelInfo[5],
                            name: "5级"
                        }, {
                            value: t.projectLevelInfo[99],
                            name: "其他"
                        } ];
                        var p = 0;
                        e.value.projectLevelInfo.forEach(a => {
                            p += a.value;
                        }), e.value.projectLevelInfoTotal = p, e.value.projectStatusInfo = {
                            labelList: [],
                            statusList: [ [], [], [] ]
                        }, Object.entries(t.projectStatusInfo).forEach(([ a, s ]) => {
                            e.value.projectStatusInfo.labelList.push(a), s ? (e.value.projectStatusInfo.statusList[0].push(s[2] || 0), 
                            e.value.projectStatusInfo.statusList[1].push(s[3] || 0), 
                            e.value.projectStatusInfo.statusList[2].push(s[4] || 0)) : (e.value.projectStatusInfo.statusList[0].push(0), 
                            e.value.projectStatusInfo.statusList[1].push(0), e.value.projectStatusInfo.statusList[2].push(0));
                        }), d.value.series[0].data = e.value.projectLevelInfo, d.value.series[1].data[0].value = e.value.projectLevelInfoTotal, 
                        n.value.xAxis[0].data = e.value.projectStatusInfo.labelList, 
                        n.value.series[0].data = e.value.projectStatusInfo.statusList[0], 
                        n.value.series[1].data = e.value.projectStatusInfo.statusList[1], 
                        n.value.series[2].data = e.value.projectStatusInfo.statusList[2], 
                        r = y(g.value), i = y(b.value), r.setOption(d.value), i.setOption(n.value);
                    });
                }
            }), O(() => {
                r && r.dispose(), i && i.dispose();
            }), (t, p) => {
                const a = D, s = T;
                return z(), A("div", h, [ j, l("div", I, [ L, l("em", null, F(B(e).projectCnt), 1) ]), f(s, {
                    style: {
                        "margin-top": "10px"
                    }
                }, {
                    default: m(() => [ f(a, {
                        span: 10
                    }, {
                        default: m(() => [ l("div", {
                            ref_key: "chartContainer1",
                            ref: g,
                            style: {
                                width: "100%",
                                height: "244px"
                            }
                        }, null, 512) ]),
                        _: 1
                    }), f(a, {
                        span: 14
                    }, {
                        default: m(() => [ l("div", {
                            ref_key: "chartContainer2",
                            ref: b,
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
    }, [ [ "__scopeId", "data-v-5bf7e377" ] ]);
});

export {
    G as __tla,
    _ as default
};