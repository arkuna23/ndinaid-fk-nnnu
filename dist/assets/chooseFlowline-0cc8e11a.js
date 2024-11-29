import {
    r as c,
    a0 as ia,
    w as K,
    o as i,
    C as Q,
    l as u,
    k as r,
    v as f,
    t as l,
    a as t,
    m as S,
    I as oa,
    d_ as ca,
    c as d,
    F as h,
    y as k,
    z as w,
    B as N,
    x as ua,
    aQ as ra,
    P as da,
    _ as ma,
    L as pa,
    J as va,
    aU as fa,
    __tla as _a
} from "./index-6c08ea4c.js";

import {
    g as q
} from "./configInfo-14ae9782.js";

import {
    _ as ya
} from "./_plugin-vue_export-helper-1b428a4d.js";

let H, ga = Promise.all([ (() => {
    try {
        return _a;
    } catch {}
})() ]).then(async () => {
    let C, b, V, I, D, z, P, A, U, B, F;
    C = {
        class: "tab content"
    }, b = {
        class: "content_left"
    }, V = {
        class: "input"
    }, I = {
        class: "tab_container"
    }, D = [ "onClick" ], z = {
        class: "content_right"
    }, P = {
        class: "content_right_main"
    }, A = [ "onClick" ], U = {
        class: "info"
    }, B = {
        class: "content-text"
    }, F = {
        class: "buttonImg"
    }, H = ya({
        __name: "chooseFlowline",
        props: {
            menuList: {
                type: Array,
                default: () => []
            },
            showTitle: {
                type: Boolean,
                default: !0
            },
            infoList: {
                type: Array,
                default: () => []
            },
            pipelineName: {
                type: String,
                default: ""
            },
            rawInfoList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "changeMenu", "savePipelineData" ],
        setup(O, {
            expose: R,
            emit: W
        }) {
            const m = c(""), M = c([]), p = c(""), T = W, v = O, {
                menuList: X
            } = ia(v), _ = c("全部"), g = c([]), j = () => {
                _.value === "全部" ? g.value = v.rawInfoList.filter(e => e.ciName.includes(m.value)) : g.value = v.rawInfoList.filter(e => e.ciName.includes(m.value) && e.type === _.value);
            }, Y = (e, s) => e === s.length - 1 ? "0px" : (658 - 120 * s.length) / (s.length - 1) + "px", Z = e => {
                switch (e) {
                  case "java8":
                  case "node":
                    return "";

                  default:
                    return "tag-success";
                }
            };
            K(() => X.value, e => {
                M.value = e || "";
            }, {
                immediate: !0
            }), K(() => v.infoList, e => {
                g.value = e;
            });
            const y = c(!1), $ = c("选择流水线"), x = () => {
                y.value = !1, p.value = "", _.value = "全部", m.value = "";
            }, aa = () => {
                T("savePipelineData", p.value);
            }, ea = () => {
                var s;
                const e = (s = v.infoList.filter(L => L.ciName === v.pipelineName)) == null ? void 0 : s.pop();
                p.value = (e == null ? void 0 : e.ciName) || "";
            };
            return R({
                openDialog: () => {
                    y.value = !0, ea();
                },
                closeDialog: x
            }), (e, s) => {
                const L = ra, la = da, E = ma, sa = pa, G = va, ta = fa;
                return i(), Q(ta, {
                    class: "pipelineDialog",
                    modelValue: t(y),
                    "onUpdate:modelValue": s[1] || (s[1] = a => S(y) ? y.value = a : null),
                    title: t($),
                    width: "950px",
                    "close-on-click-modal": !1,
                    onClose: x,
                    "append-to-body": !0
                }, {
                    footer: u(() => [ r(G, {
                        onClick: x
                    }, {
                        default: u(() => [ f("取消") ]),
                        _: 1
                    }), r(G, {
                        type: "primary",
                        onClick: aa
                    }, {
                        default: u(() => [ f("保存") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ l("div", C, [ l("div", b, [ l("div", V, [ r(la, {
                        modelValue: t(m),
                        "onUpdate:modelValue": s[0] || (s[0] = a => S(m) ? m.value = a : null),
                        placeholder: "搜索名称",
                        clearable: "",
                        class: "search-input neu",
                        onKeyup: oa(j, [ "enter" ])
                    }, {
                        suffix: u(() => [ r(L, {
                            style: {
                                cursor: "pointer"
                            },
                            onClick: j
                        }, {
                            default: u(() => [ r(t(ca)) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]), l("ul", I, [ (i(!0), d(h, null, k(t(M), (a, J) => (i(), 
                    d("li", {
                        key: a.name,
                        class: w({
                            active: t(_) == a.code
                        }),
                        onClick: o => ((n, na) => {
                            _.value = n.code, p.value = "", T("changeMenu", {
                                item: n,
                                index: na
                            });
                        })(a, J)
                    }, [ r(E, {
                        icon: t(q)(a.code),
                        className: "mr-3",
                        size: 16
                    }, null, 8, [ "icon" ]), f(" " + N(a.code), 1) ], 10, D))), 128)) ]) ]), l("div", z, [ l("div", P, [ (i(!0), 
                    d(h, null, k(t(g), (a, J) => (i(), d("div", {
                        key: a.ciName
                    }, [ l("div", {
                        class: w([ "box", {
                            selected: t(p) === (a == null ? void 0 : a.ciName)
                        } ]),
                        onClick: o => {
                            return n = a, void (p.value = (n == null ? void 0 : n.ciName) || "");
                            var n;
                        }
                    }, [ l("div", U, [ l("span", B, [ r(E, {
                        icon: t(q)(a.type),
                        className: "mr-3",
                        size: 16
                    }, null, 8, [ "icon" ]), f(" " + N(a.ciName), 1) ]), l("span", null, [ (i(!0), 
                    d(h, null, k(a.labels, o => (i(), Q(sa, {
                        class: w([ Z(o), "tag-info" ]),
                        size: "small",
                        key: o
                    }, {
                        default: u(() => [ f(N(o), 1) ]),
                        _: 2
                    }, 1032, [ "class" ]))), 128)) ]) ]), l("div", F, [ (i(!0), 
                    d(h, null, k(a.storage, (o, n) => (i(), d("div", {
                        class: "buttonVal",
                        key: o[0].name
                    }, [ f(N(o[0].name) + " ", 1), l("span", {
                        class: "line",
                        style: ua({
                            width: Y(n, a.storage)
                        })
                    }, null, 4) ]))), 128)) ]) ], 10, A) ]))), 128)) ]) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-4d5a7203" ] ]);
});

export {
    ga as __tla,
    H as default
};