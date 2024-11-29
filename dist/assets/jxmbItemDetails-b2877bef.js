import {
    u as L,
    T as j,
    r as o,
    o as R,
    C as V,
    l as e,
    k as l,
    a,
    t as d,
    B as n,
    v as _,
    m as U,
    O as B,
    Q as D,
    J,
    aU as O,
    __tla as P
} from "./index-6c08ea4c.js";

import {
    _ as Q
} from "./_plugin-vue_export-helper-1b428a4d.js";

let g, S = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})() ]).then(async () => {
    let u, p, c, m;
    u = {
        style: {
            width: "calc(100% - 40px)"
        }
    }, p = {
        style: {
            width: "calc(100% - 40px)"
        }
    }, c = {
        style: {
            width: "calc(100% - 40px)"
        }
    }, m = {
        style: {
            margin: "30px",
            "text-align": "center"
        }
    }, g = Q({
        __name: "jxmbItemDetails",
        emits: [ "tableRefresh" ],
        setup(q, {
            expose: C,
            emit: h
        }) {
            L();
            const v = j(), s = o(!1), x = h, t = o({
                targetId: void 0,
                teachCourseId: v.params.teachCourseId,
                targetCode: "",
                targetClassify: null,
                targetContent: "",
                targetContentTxt: "",
                ktList: []
            }), y = o();
            o([]);
            const b = () => {
                t.value.targetId = null, t.value.targetContentTxt = "", t.value.ktList = [], 
                x("tableRefresh"), s.value = !1;
            };
            return C({
                open: i => {
                    i && (t.value = i), s.value = !0;
                }
            }), (i, f) => {
                const r = B, k = D, w = J, I = O;
                return R(), V(I, {
                    modelValue: a(s),
                    "onUpdate:modelValue": f[0] || (f[0] = T => U(s) ? s.value = T : null),
                    title: "教学目标详情",
                    width: "750px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: e(() => [ l(k, {
                        ref_key: "formRef",
                        ref: y,
                        class: "jxmbItemTable",
                        "label-width": "130px",
                        model: a(t)
                    }, {
                        default: e(() => [ l(r, {
                            prop: "targetCode",
                            label: "目标编号："
                        }, {
                            default: e(() => [ d("div", u, n(a(t).targetCode), 1) ]),
                            _: 1
                        }), l(r, {
                            prop: "targetClassify",
                            label: "目标类型："
                        }, {
                            default: e(() => [ _(n(a(t).targetClassify == 1 ? "知识目标" : a(t).targetClassify == 2 ? "素质目标" : "能力目标"), 1) ]),
                            _: 1
                        }), l(r, {
                            class: "targetContent",
                            label: "目标内容：",
                            prop: "targetContent",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: e(() => [ d("div", p, n(a(t).targetContent), 1) ]),
                            _: 1
                        }), l(r, {
                            label: "关联知识技能点：",
                            prop: "ktList",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: e(() => [ d("div", c, n(a(t).ktStr), 1) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]), d("div", m, [ l(w, {
                        onClick: b
                    }, {
                        default: e(() => [ _("关闭") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-d30610f5" ] ]);
});

export {
    S as __tla,
    g as default
};