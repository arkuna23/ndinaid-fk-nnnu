import {
    T as oe,
    e as te,
    p as ne,
    r as p,
    a0 as ue,
    o as c,
    C as j,
    l as _,
    t,
    a as m,
    c as C,
    D as G,
    k as I,
    m as H,
    v as i,
    F as K,
    y as O,
    B as b,
    bo as Q,
    a8 as de,
    J as ce,
    aU as ie,
    R as re,
    S as pe,
    n as me,
    __tla as ve
} from "./index-6c08ea4c.js";

import {
    h as he,
    i as ge,
    __tla as ye
} from "./list-6e502bc8.js";

import {
    S as W
} from "./sortable.esm-60ca6365.js";

import {
    _ as _e
} from "./_plugin-vue_export-helper-1b428a4d.js";

let X, Ce = Promise.all([ (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})() ]).then(async () => {
    let N, v, S, U, L, R, T, E, P, q, A, B, z, D;
    N = "" + new URL("pkgIcon2-3ce3f1ac.png", import.meta.url).href, v = h => (re("data-v-5d2bddb5"), 
    h = h(), pe(), h), S = {
        style: {
            padding: "0px 40px"
        }
    }, U = {
        key: 0,
        style: {
            "text-align": "center",
            margin: "10px 0 20px 0"
        }
    }, L = [ v(() => t("img", {
        src: N,
        alt: ""
    }, null, -1)) ], R = v(() => t("div", {
        class: "tipStyle"
    }, [ t("span", {
        class: "tipIcon"
    }), i("说明：您可根据课程教学方式及内容自定义课程内容的栏目及其显示排序，编辑结果会影响资源展示") ], -1)), T = {
        id: "tabsArea"
    }, E = {
        id: "tabs1List"
    }, P = {
        class: "sortNum"
    }, q = v(() => t("span", {
        class: "handleIcon"
    }, null, -1)), A = {
        id: "tabs2List"
    }, B = {
        class: "sortNum"
    }, z = v(() => t("span", {
        class: "handleIcon"
    }, null, -1)), D = {
        style: {
            "margin-bottom": "20px",
            "text-align": "center"
        }
    }, X = _e({
        __name: "settingTabs",
        props: {
            showStep2: {
                type: Boolean,
                default: !0
            }
        },
        emits: [ "back", "success" ],
        setup(h, {
            expose: Y,
            emit: Z
        }) {
            const F = oe(), f = te(() => F.name == "neuCourseRes" || F.name == "NeuCourseResManage");
            ne();
            const r = p(!1), g = p(!1), s = p([]), u = p([]), d = p([]), $ = h, {
                showStep2: J
            } = ue($), M = Z, x = () => {
                s.value.length > 7 ? (u.value = s.value.slice(0, 7), d.value = s.value.slice(-6)) : u.value = s.value.slice(0, 7), 
                me(() => {
                    k();
                    const n = document.querySelector("#tabs1List"), e = document.querySelector("#tabs2List");
                    W.create(n, {
                        group: "shared",
                        handle: ".handleIcon",
                        animation: 200,
                        onEnd: a => {
                            const o = u.value.splice(a.oldIndex, 1)[0];
                            a.to.id == "tabs2List" ? d.value.splice(a.newIndex, 0, o) : u.value.splice(a.newIndex, 0, o), 
                            s.value = u.value.concat(d.value), x();
                        }
                    }), W.create(e, {
                        group: "shared",
                        handle: ".handleIcon",
                        animation: 200,
                        onEnd: a => {
                            const o = d.value.splice(a.oldIndex, 1)[0];
                            a.to.id == "tabs1List" ? u.value.splice(a.newIndex, 0, o) : d.value.splice(a.newIndex, 0, o), 
                            s.value = u.value.concat(d.value), x();
                        }
                    });
                });
            }, k = () => {
                s.value.filter(n => n.isChoose == 0)[0] ? g.value = !1 : g.value = !0;
            }, ee = n => {
                s.value.forEach(e => {
                    e.isChoose = n;
                });
            }, ae = () => {
                s.value.filter(e => e.isChoose == 1).length || Q({
                    message: "课程栏目不可设置为空！",
                    type: "error"
                });
                var n = [];
                s.value.forEach((e, a) => {
                    n.push({
                        columType: e.columType,
                        sort: a + 1,
                        isChoose: e.isChoose ? 1 : 0,
                        neuPkgId: y.value,
                        resPkgId: y.value,
                        resRootPkgId: e.resRootPkgId,
                        resIsNeu: e.resIsNeu || 0,
                        id: f.value ? null : e.id
                    });
                }), he({
                    courseColumnArray: n
                }, f.value).then(e => {
                    Q({
                        message: "操作成功",
                        type: "success"
                    }), M("success"), r.value = !1;
                });
            }, y = p(null), le = () => {
                M("back", y.value);
            };
            return Y({
                open: n => {
                    var e;
                    r.value = !0, y.value = n, e = x, ge(y.value, f.value).then(a => {
                        s.value = a, s.value.forEach(o => {
                            o.isChoose = !!o.isChoose;
                        }), e();
                    });
                }
            }), (n, e) => {
                const a = de, o = ce, se = ie;
                return c(), j(se, {
                    modelValue: m(r),
                    "onUpdate:modelValue": e[2] || (e[2] = l => H(r) ? r.value = l : null),
                    title: "栏目设置",
                    width: "900px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: _(() => [ t("div", S, [ m(J) ? (c(), C("div", U, L)) : G("", !0), R, I(a, {
                        modelValue: m(g),
                        "onUpdate:modelValue": e[0] || (e[0] = l => H(g) ? g.value = l : null),
                        onChange: ee,
                        style: {
                            "margin-left": "12px",
                            "margin-bottom": "10px"
                        }
                    }, {
                        default: _(() => [ i("全选") ]),
                        _: 1
                    }, 8, [ "modelValue" ]), t("div", T, [ t("ul", E, [ (c(!0), 
                    C(K, null, O(m(u), (l, V) => (c(), C("li", {
                        class: "tabsItem",
                        key: l.sort
                    }, [ I(a, {
                        modelValue: l.isChoose,
                        "onUpdate:modelValue": w => l.isChoose = w,
                        onChange: k
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), t("span", P, b(V + 1) + ".", 1), i(b(l.columTypeName), 1), q ]))), 128)) ]), t("ul", A, [ (c(!0), 
                    C(K, null, O(m(d), (l, V) => (c(), C("li", {
                        class: "tabsItem",
                        key: l.sort
                    }, [ I(a, {
                        modelValue: l.isChoose,
                        "onUpdate:modelValue": w => l.isChoose = w,
                        onChange: k
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), t("span", B, b(V + 8) + ".", 1), i(b(l.columTypeName), 1), z ]))), 128)) ]) ]), t("div", D, [ I(o, {
                        onClick: e[1] || (e[1] = l => r.value = !1)
                    }, {
                        default: _(() => [ i("取消") ]),
                        _: 1
                    }), m(J) ? (c(), j(o, {
                        key: 0,
                        onClick: le
                    }, {
                        default: _(() => [ i("上一步") ]),
                        _: 1
                    })) : G("", !0), I(o, {
                        type: "primary",
                        onClick: ae
                    }, {
                        default: _(() => [ i("确定") ]),
                        _: 1
                    }) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-5d2bddb5" ] ]);
});

export {
    Ce as __tla,
    X as default
};