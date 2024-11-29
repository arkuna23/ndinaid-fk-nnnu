import {
    T as Q,
    p as W,
    r as m,
    o as p,
    C as X,
    l as _,
    t,
    k as v,
    a as y,
    m as A,
    v as i,
    c as I,
    F as J,
    y as R,
    B as g,
    bo as j,
    a8 as Y,
    J as Z,
    aU as $,
    R as ee,
    S as ae,
    n as le,
    __tla as se
} from "./index-6c08ea4c.js";

import {
    B as oe,
    C as te,
    __tla as ne
} from "./index-9567cbf6.js";

import {
    S as z
} from "./sortable.esm-60ca6365.js";

import {
    _ as ue
} from "./_plugin-vue_export-helper-1b428a4d.js";

let D, ce = Promise.all([ (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return ne;
    } catch {}
})() ]).then(async () => {
    let h, k, U, L, T, w, E, S, N, B, q;
    h = C => (ee("data-v-766cc33b"), C = C(), ae(), C), k = {
        style: {
            padding: "0px 40px"
        }
    }, U = h(() => t("div", {
        class: "tipStyle"
    }, [ t("span", {
        class: "tipIcon"
    }), i("说明：您可根据课程教学方式及内容自定义课程内容的栏目，编辑栏目结果不会影响教学数据，该栏目将同步至学生端显示，可拖动模块对栏目进行排序") ], -1)), 
    L = {
        id: "tabsArea"
    }, T = {
        id: "tabs1List"
    }, w = {
        class: "sortNum"
    }, E = h(() => t("span", {
        class: "handleIcon"
    }, null, -1)), S = {
        id: "tabs2List"
    }, N = {
        class: "sortNum"
    }, B = h(() => t("span", {
        class: "handleIcon"
    }, null, -1)), q = {
        style: {
            "margin-bottom": "20px",
            "text-align": "center"
        }
    }, D = ue({
        __name: "settingTabs",
        emits: [ "success" ],
        setup(C, {
            expose: G,
            emit: H
        }) {
            const F = Q();
            W();
            const d = m(!1), r = m(!1), s = m([]), n = m([]), c = m([]), K = H, x = () => {
                s.value.length > 7 ? (n.value = s.value.slice(0, 7), c.value = s.value.slice(-7)) : n.value = s.value.slice(0, 7), 
                le(() => {
                    b();
                    const o = document.querySelector("#tabs1List"), e = document.querySelector("#tabs2List");
                    z.create(o, {
                        group: "shared",
                        handle: ".handleIcon",
                        animation: 200,
                        onEnd: a => {
                            const u = n.value.splice(a.oldIndex, 1)[0];
                            a.to.id == "tabs2List" ? c.value.splice(a.newIndex, 0, u) : n.value.splice(a.newIndex, 0, u), 
                            s.value = n.value.concat(c.value), x();
                        }
                    }), z.create(e, {
                        group: "shared",
                        handle: ".handleIcon",
                        animation: 200,
                        onEnd: a => {
                            const u = c.value.splice(a.oldIndex, 1)[0];
                            a.to.id == "tabs1List" ? n.value.splice(a.newIndex, 0, u) : c.value.splice(a.newIndex, 0, u), 
                            s.value = n.value.concat(c.value), x();
                        }
                    });
                });
            }, b = () => {
                s.value.filter(o => o.isChoose == 0)[0] ? r.value = !1 : r.value = !0;
            }, M = o => {
                s.value.forEach(e => {
                    e.isChoose = o;
                });
            }, O = () => {
                s.value.filter(e => e.isChoose == 1).length || j({
                    message: "课程栏目不可设置为空！",
                    type: "error"
                });
                var o = [];
                s.value.forEach((e, a) => {
                    o.push({
                        teachCourseId: F.params.teachCourseId,
                        columType: e.columType,
                        sort: a + 1,
                        isChoose: e.isChoose ? 1 : 0
                    });
                }), oe(o).then(e => {
                    j({
                        message: "操作成功",
                        type: "success"
                    }), K("success"), d.value = !1;
                });
            };
            return G({
                open: () => {
                    var o;
                    d.value = !0, o = x, te({
                        teachCourseId: F.params.teachCourseId
                    }).then(e => {
                        s.value = e, s.value.forEach(a => {
                            a.isChoose = !!a.isChoose;
                        }), o();
                    });
                }
            }), (o, e) => {
                const a = Y, u = Z, P = $;
                return p(), X(P, {
                    modelValue: y(d),
                    "onUpdate:modelValue": e[2] || (e[2] = l => A(d) ? d.value = l : null),
                    title: "栏目设置",
                    width: "780px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: _(() => [ t("div", k, [ U, v(a, {
                        modelValue: y(r),
                        "onUpdate:modelValue": e[0] || (e[0] = l => A(r) ? r.value = l : null),
                        onChange: M,
                        style: {
                            "margin-left": "12px",
                            "margin-bottom": "10px"
                        }
                    }, {
                        default: _(() => [ i("全选") ]),
                        _: 1
                    }, 8, [ "modelValue" ]), t("div", L, [ t("ul", T, [ (p(!0), 
                    I(J, null, R(y(n), (l, f) => (p(), I("li", {
                        class: "tabsItem",
                        key: l.sort
                    }, [ v(a, {
                        modelValue: l.isChoose,
                        "onUpdate:modelValue": V => l.isChoose = V,
                        onChange: b
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), t("span", w, g(f + 1) + ".", 1), i(g(l.columTypeName), 1), E ]))), 128)) ]), t("ul", S, [ (p(!0), 
                    I(J, null, R(y(c), (l, f) => (p(), I("li", {
                        class: "tabsItem",
                        key: l.sort
                    }, [ v(a, {
                        modelValue: l.isChoose,
                        "onUpdate:modelValue": V => l.isChoose = V,
                        onChange: b
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), t("span", N, g(f + 8) + ".", 1), i(g(l.columTypeName), 1), B ]))), 128)) ]) ]), t("div", q, [ v(u, {
                        onClick: e[1] || (e[1] = l => d.value = !1)
                    }, {
                        default: _(() => [ i("取消") ]),
                        _: 1
                    }), v(u, {
                        type: "primary",
                        onClick: O
                    }, {
                        default: _(() => [ i("确定") ]),
                        _: 1
                    }) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-766cc33b" ] ]);
});

export {
    ce as __tla,
    D as default
};