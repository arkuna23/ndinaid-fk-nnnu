import {
    e as h,
    h as _,
    r,
    aV as j,
    f as H,
    o as c,
    c as g,
    t as p,
    a as d,
    D as F,
    C as I,
    l as B,
    k as o,
    m as D,
    bB as M,
    bs as R,
    bq as U,
    __tla as $
} from "./index-6c08ea4c.js";

import {
    e as q
} from "./index-0d885c8d.js";

import {
    g as G,
    __tla as P
} from "./managementSideCorrelation-1acb9a2c.js";

import {
    _ as T
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./install-67fb146c.js";

let L, J = Promise.all([ (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})() ]).then(async () => {
    let C, y, w, z, E, S;
    C = {
        class: "resourceManagement"
    }, y = {
        class: "titleContainer"
    }, w = {
        class: "title"
    }, z = {
        key: 0
    }, E = {
        key: 1,
        class: "haveHead"
    }, S = {
        class: "tabContainer"
    }, L = T({
        __name: "resourceManagement",
        setup(K) {
            const b = h(() => _().isAdmin), k = h(() => _().isTeacher), O = h(() => _().user.id);
            r(0);
            const v = r("1"), m = r(""), V = r(null);
            let a = r(null);
            const W = {
                "压缩包": "#8948EA",
                "试题": "#FFA500",
                "试卷": "#57F0CA",
                "项目": "#FEA645",
                "课程": "#2DBDFC",
                "活动": "#C1E135",
                "毕设": "#FFDE5B",
                "文档": "#3763EC",
                "图片": "#FF7170",
                "视频": "#FF95C9",
                "音频": "#EE1384",
                "链接": "#AB61FF",
                markdown: "#999BFF"
            }, s = r({
                tooltip: {
                    trigger: "item"
                },
                legend: {
                    top: "5%",
                    orient: "vertical",
                    left: "60%",
                    icon: "circle",
                    itemWidth: 10,
                    itemHeight: 10,
                    itemGap: 20,
                    textStyle: {
                        color: "#333333",
                        fontSize: 14
                    },
                    data: [ "压缩包", "试题", "试卷", "项目", "课程", "活动", "毕设", "文档", "图片", "视频", "音频", "链接", "markdown" ]
                },
                emphasis: {
                    label: {
                        show: !0,
                        fontSize: 40,
                        fontWeight: "bold"
                    }
                },
                series: [ {
                    name: "",
                    type: "pie",
                    radius: [ "65%", "80%" ],
                    avoidLabelOverlap: !1,
                    center: [ "35%", "50%" ],
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
                    }
                }, {
                    name: "",
                    type: "pie",
                    center: [ "35%", "50%" ],
                    color: "transparent",
                    tooltip: {
                        trigger: "item"
                    },
                    label: {
                        show: !0,
                        position: "center",
                        formatter: `{a|0}
{b|\u8D44\u6E90\u603B\u6570}`,
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
                        name: "资源总数"
                    } ]
                } ]
            }), f = () => {
                let n = {
                    tenantId: M()
                };
                b.value && (n.release = v.value), k.value && (n.release = m.value, 
                n.creator = O.value), G(n).then(l => {
                    var t;
                    let e = ((t = l.资源总量) == null ? void 0 : t.toString()) || "";
                    s.value.series[1].data[0].value = e, s.value.series[1].label.formatter = e && e.length > 5 ? `{a|${e.slice(0, 5)}...}
{b|\u8D44\u6E90\u603B\u6570}` : `{a|${e}}
{b|\u8D44\u6E90\u603B\u6570}`;
                    let i = delete l.资源总量;
                    i = Object.entries(l).map(([ u, x ]) => ({
                        name: u,
                        value: x
                    })), s.value.series[0].data = i.map(u => ({
                        value: u.value,
                        name: u.name,
                        itemStyle: {
                            color: W[u.name]
                        }
                    })), a.value && (a.value.setOption(s.value), a.value.resize());
                });
            }, A = () => {
                a.value && a.value.resize();
            };
            return j(() => {
                a.value && a.value.dispose(), window.removeEventListener("resize", A);
            }), H(() => {
                f(), a.value = q.init(V.value), a.value.setOption(s.value), window.addEventListener("resize", A);
            }), (n, l) => {
                const e = R, i = U;
                return c(), g("div", C, [ p("div", y, [ p("div", w, [ d(b) ? (c(), 
                g("span", z, " 资源管理")) : F("", !0), d(k) ? (c(), g("span", E, "我的资源")) : F("", !0) ]), p("div", S, [ d(b) ? (c(), 
                I(i, {
                    key: 0,
                    modelValue: d(v),
                    "onUpdate:modelValue": l[0] || (l[0] = t => D(v) ? v.value = t : null),
                    size: "default",
                    onChange: f
                }, {
                    default: B(() => [ o(e, {
                        label: "个人资源库",
                        value: "1"
                    }), o(e, {
                        label: "校本资源库",
                        value: "0"
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ])) : F("", !0), o(i, {
                    modelValue: d(m),
                    "onUpdate:modelValue": l[1] || (l[1] = t => D(m) ? m.value = t : null),
                    size: "default",
                    onChange: f
                }, {
                    default: B(() => [ o(e, {
                        border: !1,
                        label: "全部资源",
                        value: ""
                    }), o(e, {
                        border: !1,
                        label: "已公开",
                        value: "1"
                    }), o(e, {
                        border: !1,
                        label: "未公开",
                        value: "0"
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]) ]), p("div", {
                    class: "pieContainer",
                    ref_key: "pieContainerRef",
                    ref: V
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-942249fc" ] ]);
});

export {
    J as __tla,
    L as default
};