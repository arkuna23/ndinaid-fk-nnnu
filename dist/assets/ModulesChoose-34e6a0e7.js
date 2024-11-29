import {
    p as N,
    r as y,
    e as O,
    w as Q,
    f as R,
    o as d,
    c as v,
    k as r,
    l,
    v as m,
    F as z,
    y as T,
    a as i,
    C as w,
    m as B,
    B as F,
    D as b,
    t as W,
    cg as X,
    ab as Y,
    J as Z,
    ac as $,
    P as ee,
    ad as ae,
    ae as le,
    _ as te,
    aU as oe,
    __tla as de
} from "./index-6c08ea4c.js";

import {
    A as re,
    B as ie,
    C as ne,
    D as se,
    __tla as ue
} from "./project-51c056b9.js";

import {
    _ as pe
} from "./_plugin-vue_export-helper-1b428a4d.js";

let M, ce = Promise.all([ (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})() ]).then(async () => {
    let j, x;
    j = {
        key: 1
    }, x = {
        key: 1
    }, M = pe({
        __name: "ModulesChoose",
        props: {
            projectId: {
                type: String,
                default: ""
            },
            modelValue: {
                type: String,
                default: ""
            }
        },
        emits: [ "update:modelValue" ],
        setup(P, {
            emit: S
        }) {
            const _ = N(), A = S, n = P, U = y([]), k = y([]), h = y([]), s = y(!1), t = y(""), V = O({
                get: () => n.modelValue,
                set: o => {
                    A("update:modelValue", o);
                }
            }), f = () => {
                t.value = "", n.projectId && re(n.projectId).then(o => {
                    U.value = [ ...o ], k.value = o;
                });
            }, J = () => {
                h.value = [ ...k.value ], s.value = !0;
            };
            Q(() => s.value, o => {
                t.value = "", o && f();
            });
            const q = () => {
                if (t.value) return;
                let o = X();
                h.value.push({
                    id: o,
                    projectId: n.projectId,
                    isCreate: !0,
                    name: "",
                    description: ""
                }), t.value = o;
            };
            return R(() => {
                f();
            }), (o, u) => {
                const E = Y, p = Z, G = $, D = ee, C = ae, H = le, K = te, L = oe;
                return d(), v(z, null, [ r(G, {
                    modelValue: i(V),
                    "onUpdate:modelValue": u[0] || (u[0] = e => B(V) ? V.value = e : null),
                    clearable: "",
                    placeholder: "请选择模块"
                }, {
                    footer: l(() => [ r(p, {
                        type: "primary",
                        link: "",
                        size: "small",
                        onClick: J
                    }, {
                        default: l(() => [ m(" 模块管理 ") ]),
                        _: 1
                    }) ]),
                    default: l(() => [ (d(!0), v(z, null, T(i(U), e => (d(), w(E, {
                        key: e.id,
                        label: e.name,
                        value: e.id
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]), r(L, {
                    modelValue: i(s),
                    "onUpdate:modelValue": u[2] || (u[2] = e => B(s) ? s.value = e : null),
                    title: "模块管理",
                    width: "900"
                }, {
                    footer: l(() => [ r(p, {
                        onClick: u[1] || (u[1] = e => s.value = !1)
                    }, {
                        default: l(() => [ m("取 消") ]),
                        _: 1
                    }) ]),
                    default: l(() => [ r(H, {
                        data: i(h)
                    }, {
                        default: l(() => [ r(C, {
                            label: "模块名称",
                            prop: "name",
                            width: "300px",
                            "show-overflow-tooltip": ""
                        }, {
                            default: l(e => [ i(t) === e.row.id ? (d(), w(D, {
                                key: 0,
                                modelValue: e.row.name,
                                "onUpdate:modelValue": c => e.row.name = c,
                                minlength: "1",
                                maxlength: "30",
                                placeholder: "请输入模块名称",
                                "show-word-limit": "",
                                type: "text"
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : (d(), 
                            v("span", j, F(e.row.name), 1)) ]),
                            _: 1
                        }), r(C, {
                            label: "模块描述",
                            prop: "description",
                            "min-width": "300px",
                            "show-overflow-tooltip": ""
                        }, {
                            default: l(e => [ i(t) === e.row.id ? (d(), w(D, {
                                key: 0,
                                modelValue: e.row.description,
                                "onUpdate:modelValue": c => e.row.description = c,
                                type: "textarea",
                                minlength: "1",
                                maxlength: "500",
                                placeholder: "请输入模块描述",
                                "show-word-limit": ""
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : (d(), 
                            v("span", x, F(e.row.description), 1)) ]),
                            _: 1
                        }), r(C, {
                            label: "操作",
                            width: "120px"
                        }, {
                            default: l(e => [ i(t) ? b("", !0) : (d(), w(p, {
                                key: 0,
                                type: "primary",
                                link: "",
                                onClick: c => {
                                    return a = e.row, void (t.value = a.id);
                                    var a;
                                }
                            }, {
                                default: l(() => [ m("编辑") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), i(t) === e.row.id ? (d(), 
                            w(p, {
                                key: 1,
                                type: "primary",
                                link: "",
                                onClick: c => (async a => {
                                    if (!a.name) return void _.warning("请输入模块名称");
                                    if (!a.description) return void _.warning("请输入模块描述");
                                    let g, I;
                                    a.isCreate ? (g = {
                                        projectId: n.projectId,
                                        name: a.name,
                                        description: a.description
                                    }, I = ne) : (g = {
                                        id: a.id,
                                        projectId: n.projectId,
                                        name: a.name,
                                        description: a.description
                                    }, I = se);
                                    try {
                                        await I(g), _.success("操作成功"), f();
                                    } catch {}
                                })(e.row)
                            }, {
                                default: l(() => [ m("保存") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : b("", !0), i(t) && i(t) !== e.row.id ? b("", !0) : (d(), 
                            w(p, {
                                key: 2,
                                type: "danger",
                                link: "",
                                onClick: c => (async a => {
                                    if (a.isCreate) t.value = "", k.value.pop(); else try {
                                        await _.delConfirm(), await ie(a.id), _.success("操作成功"), 
                                        f();
                                    } catch {}
                                })(e.row)
                            }, {
                                default: l(() => [ m("删除") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]), W("div", {
                        class: "btn-add",
                        onClick: q
                    }, [ r(p, {
                        type: "primary",
                        link: ""
                    }, {
                        default: l(() => [ r(K, {
                            icon: "ep:plus",
                            size: 14,
                            class: "mr-5px"
                        }), m("添加模块") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-1e6d0027" ] ]);
});

export {
    ce as __tla,
    M as default
};