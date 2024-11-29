import {
    a7 as _,
    p as P,
    r,
    e as j,
    o as m,
    C as F,
    l as u,
    k as c,
    a as J,
    v as i,
    t as p,
    c as k,
    F as L,
    y as z,
    B as A,
    a8 as D,
    J as G,
    aU as H,
    R as K,
    S as M,
    __tla as N
} from "./index-6c08ea4c.js";

import {
    _ as O
} from "./_plugin-vue_export-helper-1b428a4d.js";

let C, Q = Promise.all([ (() => {
    try {
        return N;
    } catch {}
})() ]).then(async () => {
    let v, h, f;
    v = (n => (K("data-v-6dd2f715"), n = n(), M(), n))(() => p("div", {
        class: "tipStyle"
    }, [ p("span", {
        class: "tipIcon"
    }), i("说明：选中内容将自动灌入当前课程对应栏目下（课程简介、导学、教材、教学目标、知识图谱引用后将进行覆盖，其他栏目引用后将进行新增），教师可根据实际情况编辑修改。") ], -1)), 
    h = {
        style: {
            "padding-left": "10px",
            "line-height": "32px",
            overflow: "hidden",
            "padding-bottom": "20px"
        }
    }, f = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, C = O({
        __name: "quoteResource",
        emits: [ "success" ],
        setup(n, {
            expose: x,
            emit: V
        }) {
            const w = P(), U = V, y = r({}), s = r(!1), o = r(!0), l = r([]), q = a => {
                l.value.forEach(e => {
                    e.isCheck = a;
                });
            }, b = () => {
                l.value.filter(a => a.isCheck == 0)[0] ? o.value = !1 : o.value = !0;
            }, E = j(() => {
                let a = l.value.filter(e => e.isCheck).length;
                return a > 0 && l.value.length !== a;
            }), I = async () => {
                try {
                    await (a = {
                        ...y.value,
                        quoteTypes: l.value.filter(e => e.isCheck).map(e => e.type)
                    }, _.post({
                        url: "/teachmanager/teach-course-res/quotePkg",
                        data: a
                    })), w.success("操作成功！"), U("success"), s.value = !1;
                } catch {}
                var a;
            }, R = () => {
                o.value = !0, l.value.forEach(a => {
                    a.isCheck = !0;
                });
            };
            return x({
                open: a => {
                    y.value = a, s.value = !0, _.post({
                        showLoading: !1,
                        url: "/teachmanager/teach-course-res/quoteTypes"
                    }).then(e => {
                        l.value = e.map(d => ({
                            ...d,
                            isCheck: !0
                        }));
                    });
                }
            }), (a, e) => {
                const d = D, g = G, S = H;
                return m(), F(S, {
                    modelValue: s.value,
                    "onUpdate:modelValue": e[2] || (e[2] = t => s.value = t),
                    title: "引用资源包-选择内容",
                    width: "780px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClosed: R
                }, {
                    default: u(() => [ v, c(d, {
                        modelValue: o.value,
                        "onUpdate:modelValue": e[0] || (e[0] = t => o.value = t),
                        indeterminate: J(E),
                        onChange: q,
                        style: {
                            "margin-left": "10px"
                        }
                    }, {
                        default: u(() => [ i("全选") ]),
                        _: 1
                    }, 8, [ "modelValue", "indeterminate" ]), p("div", h, [ (m(!0), 
                    k(L, null, z(l.value, (t, T) => (m(), k("div", {
                        key: T,
                        style: {
                            width: "145px",
                            float: "left"
                        }
                    }, [ c(d, {
                        modelValue: t.isCheck,
                        "onUpdate:modelValue": B => t.isCheck = B,
                        onChange: b,
                        style: {
                            float: "left",
                            "margin-right": "10px",
                            position: "relative",
                            top: "3px"
                        }
                    }, {
                        default: u(() => [ i(A(t.name), 1) ]),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]))), 128)) ]), p("div", f, [ c(g, {
                        onClick: e[1] || (e[1] = t => s.value = !1)
                    }, {
                        default: u(() => [ i("取消") ]),
                        _: 1
                    }), c(g, {
                        type: "primary",
                        onClick: I
                    }, {
                        default: u(() => [ i("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-6dd2f715" ] ]);
});

export {
    Q as __tla,
    C as default
};