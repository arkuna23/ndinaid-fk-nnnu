import {
    r as n,
    f as H,
    o as c,
    c as u,
    t,
    v as h,
    B as i,
    x,
    F as J,
    y as K,
    z as Q,
    k as m,
    l as g,
    C as W,
    D as B,
    bo as N,
    M as X,
    s as Z,
    R as k,
    S as ee,
    __tla as te
} from "./index-6c08ea4c.js";

import {
    _ as Y,
    __tla as ae
} from "./index-da0e4c45.js";

import {
    C as se,
    __tla as le
} from "./clipboard-0a12866f.js";

import {
    g as ne,
    __tla as oe
} from "./taskInstance-9258951c.js";

import {
    _ as ce
} from "./_plugin-vue_export-helper-1b428a4d.js";

let S, ie = Promise.all([ (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})() ]).then(async () => {
    const A = {
        name: "taskRunDetail",
        components: {
            YamlEditor: Y
        },
        props: {
            detailContent: {
                type: Object,
                default: () => {}
            }
        },
        emits: [ "close" ],
        setup(s, o) {
            const f = n([]), e = n(0), C = n("first"), p = n(s.detailContent), _ = n(s.detailContent.status.steps[0]), v = n(s.detailContent.status.taskSpec.steps[0]), y = n(""), l = n(""), d = (a, r) => a ? Date.parse(a) / 1e3 - Date.parse(r) / 1e3 + "秒" : "--", b = n(!1), D = () => {
                const a = {
                    podName: p.value.status.podName,
                    namespace: p.value.namespace,
                    containerName: p.value.status.steps[0].container
                };
                ne(a).then(r => {
                    if (r.code === 200) {
                        const G = r.data;
                        y.value = G, b.value = !0;
                    }
                });
            };
            return H(() => {
                D(), f.value.push(s.detailContent.status.steps[0].name), l.value = d(s.detailContent.status.completionTime, s.detailContent.status.startTime);
            }), {
                goBack: () => {
                    o.emit("close");
                },
                copy: () => {
                    const a = new se("#copy");
                    a.on("success", () => {
                        N.success("复制成功"), a.destroy();
                    }), a.on("error", () => {
                        N.success("复制失败"), a.destroy();
                    });
                },
                btns: f,
                hanldeClick: (a, r) => {
                    e.value = r;
                },
                activeIndex: e,
                activeName: C,
                detail: p,
                fomatterMes: a => a.length > 50 ? `${a.substring(0, 50)}...` : a,
                time: l,
                formatterDuration: d,
                statusYaml: _,
                detailYaml: v,
                getLog: D,
                logYaml: y,
                logFlag: b
            };
        }
    }, I = {
        class: "detail"
    }, F = {
        class: "header"
    }, M = (s => (k("data-v-87eb02d5"), s = s(), ee(), s))(() => t("i", {
        class: "el-icon-back"
    }, null, -1)), V = {
        class: "title"
    }, R = {
        class: "status"
    }, T = {
        class: "center"
    }, j = [ "data-clipboard-text" ], w = {
        class: "content"
    }, z = {
        class: "l leftNav"
    }, E = [ "onClick" ], L = {
        key: 0,
        class: "el-icon-circle-check name-icon",
        style: {
            color: "#1ad3ab"
        }
    }, O = {
        key: 1,
        class: "el-icon-circle-close name-icon",
        style: {
            color: "red"
        }
    }, P = {
        class: "cardBasic r rightContent"
    }, U = {
        key: 0
    }, $ = {
        class: "headerDes"
    }, q = {
        class: "time"
    };
    S = ce(A, [ [ "render", function(s, o, f, e, C, p) {
        const _ = Y, v = X, y = Z;
        return c(), u("div", I, [ t("div", F, [ t("span", {
            style: {
                cursor: "pointer"
            },
            onClick: o[0] || (o[0] = (...l) => e.goBack && e.goBack(...l))
        }, [ M, h(" 返回 ") ]), t("span", V, i(e.detail.name), 1), t("div", R, [ t("span", {
            style: x({
                color: e.detail.status.conditions[0].reason === "Succeeded" ? "#1AD3AB" : "#da1e28"
            })
        }, i(e.detail.status.conditions[0].reason), 5), t("span", T, i(e.fomatterMes(e.detail.status.conditions[0].message)), 1), t("i", {
            id: "copy",
            class: "el-icon-copy-document",
            "data-clipboard-text": e.detail.status.conditions[0].message,
            onClick: o[1] || (o[1] = l => e.copy())
        }, null, 8, j) ]) ]), t("div", w, [ t("ul", z, [ (c(!0), u(J, null, K(e.btns, (l, d) => (c(), 
        u("li", {
            key: d,
            class: Q([ "btns", {
                "active-btn": e.activeIndex === d
            } ]),
            onClick: b => e.hanldeClick(l, d)
        }, [ e.detail.status.conditions[0].reason === "Succeeded" ? (c(), u("i", L)) : (c(), 
        u("i", O)), h(" " + i(l), 1) ], 10, E))), 128)) ]), t("section", P, [ e.activeIndex === 0 ? (c(), 
        u("div", U, [ t("div", $, [ t("div", null, [ h(i(e.detail.status.steps[0].name), 1), t("span", {
            style: x({
                color: e.detail.status.conditions[0].reason === "Succeeded" ? "#1AD3AB" : "#da1e28"
            })
        }, i(e.detail.status.conditions[0].reason === "Succeeded" ? "已完成" : "失败"), 5) ]), t("div", q, "持续时间：" + i(e.time), 1) ]), m(y, {
            modelValue: e.activeName,
            "onUpdate:modelValue": o[2] || (o[2] = l => e.activeName = l),
            class: "demo-tabs"
        }, {
            default: g(() => [ m(v, {
                label: "日志",
                name: "first"
            }, {
                default: g(() => [ e.logFlag ? (c(), W(_, {
                    key: 0,
                    "read-only": !0,
                    "code-string": e.logYaml,
                    string: !0
                }, null, 8, [ "code-string" ])) : B("", !0) ]),
                _: 1
            }), m(v, {
                label: "状态",
                name: "second"
            }, {
                default: g(() => [ m(_, {
                    "code-string": e.statusYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ]) ]),
                _: 1
            }), m(v, {
                label: "详情",
                name: "third"
            }, {
                default: g(() => [ m(_, {
                    "code-string": e.detailYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ]) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "modelValue" ]) ])) : B("", !0) ]) ]) ]);
    } ], [ "__scopeId", "data-v-87eb02d5" ] ]);
});

export {
    ie as __tla,
    S as default
};