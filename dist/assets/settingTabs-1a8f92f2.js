import {
    T as Q,
    p as W,
    r as m,
    o as p,
    C as X,
    l as g,
    t,
    k as h,
    a as v,
    m as J,
    v as i,
    c as I,
    F as M,
    y as R,
    B as x,
    bo as j,
    a8 as Y,
    J as Z,
    aU as $,
    R as ee,
    S as ae,
    n as se,
    __tla as le
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
        return le;
    } catch {}
})(), (() => {
    try {
        return ne;
    } catch {}
})() ]).then(async () => {
    let C, U, L, T, w, E, S, N, B, q, F;
    C = _ => (ee("data-v-84e91eb8"), _ = _(), ae(), _), U = {
        style: {
            padding: "0px 40px"
        }
    }, L = C(() => t("div", {
        class: "tipStyle"
    }, [ t("span", {
        class: "tipIcon"
    }), i("说明：您可根据课程教学方式及内容自定义课程内容的栏目，编辑栏目结果不会影响教学数据，该栏目将同步至学生端显示，可拖动模块对栏目进行排序") ], -1)), 
    T = {
        id: "tabsArea"
    }, w = {
        id: "tabs1List"
    }, E = {
        class: "sortNum"
    }, S = C(() => t("span", {
        class: "handleIcon"
    }, null, -1)), N = {
        id: "tabs2List"
    }, B = {
        class: "sortNum"
    }, q = C(() => t("span", {
        class: "handleIcon"
    }, null, -1)), F = {
        style: {
            "margin-bottom": "20px",
            "text-align": "center"
        }
    }, D = ue({
        __name: "settingTabs",
        emits: [ "success" ],
        setup(_, {
            expose: G,
            emit: H
        }) {
            const A = Q();
            W();
            const d = m(!1), r = m(!1), l = m([]), u = m([]), c = m([]), K = H, b = () => {
                const s = l.value.length, a = Math.floor(s / 2);
                u.value = l.value.slice(0, a + s % 2), c.value = l.value.slice(a + s % 2), 
                se(() => {
                    f();
                    const n = document.querySelector("#tabs1List"), y = document.querySelector("#tabs2List");
                    z.create(n, {
                        group: "shared",
                        handle: ".handleIcon",
                        animation: 200,
                        onEnd: o => {
                            const e = u.value.splice(o.oldIndex, 1)[0];
                            o.to.id == "tabs2List" ? c.value.splice(o.newIndex, 0, e) : u.value.splice(o.newIndex, 0, e), 
                            l.value = u.value.concat(c.value), b();
                        }
                    }), z.create(y, {
                        group: "shared",
                        handle: ".handleIcon",
                        animation: 200,
                        onEnd: o => {
                            const e = c.value.splice(o.oldIndex, 1)[0];
                            o.to.id == "tabs1List" ? u.value.splice(o.newIndex, 0, e) : c.value.splice(o.newIndex, 0, e), 
                            l.value = u.value.concat(c.value), b();
                        }
                    });
                });
            }, f = () => {
                l.value.filter(s => s.isChoose == 0)[0] ? r.value = !1 : r.value = !0;
            }, O = s => {
                l.value.forEach(a => {
                    a.isChoose = s;
                });
            }, P = () => {
                l.value.filter(a => a.isChoose == 1).length || j({
                    message: "课程栏目不可设置为空！",
                    type: "error"
                });
                var s = [];
                l.value.forEach((a, n) => {
                    s.push({
                        teachCourseId: A.params.teachCourseId,
                        columType: a.columType,
                        sort: n + 1,
                        isChoose: a.isChoose ? 1 : 0
                    });
                }), oe(s).then(a => {
                    j({
                        message: "操作成功",
                        type: "success"
                    }), K("success"), d.value = !1;
                });
            };
            return G({
                open: () => {
                    var s;
                    d.value = !0, s = b, te({
                        teachCourseId: A.params.teachCourseId
                    }).then(a => {
                        l.value = a, l.value.forEach(n => {
                            n.isChoose = !!n.isChoose;
                        }), s();
                    });
                }
            }), (s, a) => {
                const n = Y, y = Z, o = $;
                return p(), X(o, {
                    modelValue: v(d),
                    "onUpdate:modelValue": a[2] || (a[2] = e => J(d) ? d.value = e : null),
                    title: "栏目设置",
                    width: "780px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: g(() => [ t("div", U, [ L, h(n, {
                        modelValue: v(r),
                        "onUpdate:modelValue": a[0] || (a[0] = e => J(r) ? r.value = e : null),
                        onChange: O,
                        style: {
                            "margin-left": "12px",
                            "margin-bottom": "10px"
                        }
                    }, {
                        default: g(() => [ i("全选") ]),
                        _: 1
                    }, 8, [ "modelValue" ]), t("div", T, [ t("ul", w, [ (p(!0), 
                    I(M, null, R(v(u), (e, V) => (p(), I("li", {
                        class: "tabsItem",
                        key: e.sort
                    }, [ h(n, {
                        modelValue: e.isChoose,
                        "onUpdate:modelValue": k => e.isChoose = k,
                        onChange: f
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), t("span", E, x(V + 1) + ".", 1), i(x(e.columTypeName), 1), S ]))), 128)) ]), t("ul", N, [ (p(!0), 
                    I(M, null, R(v(c), (e, V) => (p(), I("li", {
                        class: "tabsItem",
                        key: e.sort
                    }, [ h(n, {
                        modelValue: e.isChoose,
                        "onUpdate:modelValue": k => e.isChoose = k,
                        onChange: f
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), t("span", B, x(v(u).length + V + 1) + ".", 1), i(x(e.columTypeName), 1), q ]))), 128)) ]) ]), t("div", F, [ h(y, {
                        onClick: a[1] || (a[1] = e => d.value = !1)
                    }, {
                        default: g(() => [ i("取消") ]),
                        _: 1
                    }), h(y, {
                        type: "primary",
                        onClick: P
                    }, {
                        default: g(() => [ i("确定") ]),
                        _: 1
                    }) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-84e91eb8" ] ]);
});

export {
    ce as __tla,
    D as default
};