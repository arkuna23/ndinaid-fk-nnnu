import {
    u as T,
    T as j,
    r as o,
    o as R,
    C as V,
    l as e,
    k as a,
    a as l,
    t as d,
    B as n,
    v as _,
    m as U,
    O as B,
    Q as J,
    J as O,
    aU as P,
    __tla as Q
} from "./index-6c08ea4c.js";

import {
    _ as S
} from "./_plugin-vue_export-helper-1b428a4d.js";

let g, q = Promise.all([ (() => {
    try {
        return Q;
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
    }, g = S({
        __name: "jxmbItem",
        emits: [ "tableRefresh" ],
        setup(z, {
            expose: C,
            emit: h
        }) {
            T();
            const v = j(), s = o(!1), x = h, t = o({
                targetId: void 0,
                teachCourseId: v.params.teachCourseId,
                targetCode: "",
                targetClassify: null,
                targetContent: "",
                targetContentTxt: "",
                ktList: []
            }), b = o();
            o([]);
            const y = () => {
                t.value.targetId = null, t.value.targetContentTxt = "", t.value.ktList = [], 
                x("tableRefresh"), s.value = !1;
            };
            return C({
                open: i => {
                    i && (t.value = i), s.value = !0;
                }
            }), (i, f) => {
                const r = B, k = J, w = O, I = P;
                return R(), V(I, {
                    modelValue: l(s),
                    "onUpdate:modelValue": f[0] || (f[0] = L => U(s) ? s.value = L : null),
                    title: "教学目标",
                    width: "750px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: e(() => [ a(k, {
                        ref_key: "formRef",
                        ref: b,
                        class: "jxmbItemTable",
                        "label-width": "130px",
                        model: l(t)
                    }, {
                        default: e(() => [ a(r, {
                            prop: "targetCode",
                            label: "目标编号："
                        }, {
                            default: e(() => [ d("div", u, n(l(t).targetCode), 1) ]),
                            _: 1
                        }), a(r, {
                            prop: "targetClassify",
                            label: "目标类型："
                        }, {
                            default: e(() => [ _(n(l(t).targetClassifyLabel), 1) ]),
                            _: 1
                        }), a(r, {
                            class: "targetContent",
                            label: "目标内容：",
                            prop: "targetContent",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: e(() => [ d("div", p, n(l(t).targetContent), 1) ]),
                            _: 1
                        }), a(r, {
                            label: "关联知识技能点：",
                            prop: "ktList",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: e(() => [ d("div", c, n(l(t).ktStr), 1) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]), d("div", m, [ a(w, {
                        onClick: y
                    }, {
                        default: e(() => [ _("关闭") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a961a7af" ] ]);
});

export {
    q as __tla,
    g as default
};