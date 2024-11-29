import {
    p as oe,
    r as u,
    e as ne,
    w as se,
    f as me,
    o as g,
    C as re,
    l as o,
    A as z,
    t as m,
    k as l,
    a as e,
    m as A,
    I as ie,
    c as b,
    F as ue,
    y as de,
    z as pe,
    B as D,
    v as f,
    G as T,
    D as ce,
    _ as _e,
    J as ge,
    P as fe,
    O as ve,
    Q as he,
    R as ye,
    S as xe,
    __tla as Ne
} from "./index-6c08ea4c.js";

import {
    E as Ve,
    __tla as ze
} from "./el-drawer-fca4d971.js";

import {
    _ as be,
    __tla as Te
} from "./Editor-ef737d2a.js";

import {
    _ as ke,
    __tla as Se
} from "./index-c4ca0ced.js";

import {
    T as v,
    __tla as we
} from "./testPlacementManagement-3629800e.js";

import {
    f as Ee,
    __tla as Ce
} from "./formatTime-de6f1520.js";

import {
    _ as Ue
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as Ie,
    b as Ke,
    E as Pe,
    __tla as Be
} from "./index-5adb716b.js";

import {
    __tla as Fe
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Le
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as Me
} from "./file-e038b35d.js";

import {
    __tla as Qe
} from "./index-993301ca.js";

let G, Re = Promise.all([ (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})() ]).then(async () => {
    let k, S, w, E, C, U, I, K, P;
    k = {
        style: {
            width: "100%",
            height: "40px",
            "margin-bottom": "20px"
        }
    }, S = {
        class: "main"
    }, w = {
        class: "title"
    }, E = {
        class: "update-time"
    }, C = {
        class: "el-dropdown-link"
    }, U = {
        key: 0,
        class: "empty-box"
    }, I = [ (d => (ye("data-v-40bb48ff"), d = d(), xe(), d))(() => m("div", {
        class: "empty-image"
    }, null, -1)) ], K = {
        class: "edit"
    }, P = {
        class: "edit-btn"
    }, G = Ue({
        __name: "templateManagement",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:modelValue" ],
        setup(d, {
            emit: J
        }) {
            const O = J, B = oe(), h = u([]), y = u(0), p = u(""), r = u({
                pageNum: 1,
                pageSize: 12
            }), c = u(!1), n = u({
                id: "",
                noticeName: "",
                content: "",
                contentText: ""
            }), j = d, _ = ne({
                get: () => j.modelValue,
                set(s) {
                    O("update:modelValue", s);
                }
            });
            function i() {
                let s = {
                    noticeName: p.value,
                    pageNum: r.value.pageNum - 1,
                    pageSize: r.value.pageSize
                };
                v.getTemplateManageList(s).then(a => {
                    h.value = a.content || [], y.value = a.totalElements || 0;
                });
            }
            se(() => _.value, s => {
                s ? i() : (c.value = !1, r.value = {
                    pageNum: 1,
                    pageSize: 12
                }, p.value = "");
            }), me(() => {});
            const H = s => {
                r.value.pageNum = s.page, r.value.pageSize = s.limit, i();
            };
            function F() {
                n.value = {
                    id: "",
                    noticeName: "",
                    content: "",
                    contentText: ""
                }, c.value = !1;
            }
            function W() {
                v.updateExamNotesTemplate(n.value).then(s => {
                    B.success("操作成功"), i(), F();
                });
            }
            return (s, a) => {
                const L = _e, x = ge, M = fe, Q = Ie, X = Ke, Y = Pe, Z = ke, R = ve, $ = be, ee = he, te = Ve;
                return g(), re(te, {
                    modelValue: e(_),
                    "onUpdate:modelValue": a[6] || (a[6] = t => A(_) ? _.value = t : null),
                    title: "模板管理",
                    direction: "rtl",
                    "z-index": 1e3,
                    size: "1130px"
                }, {
                    default: o(() => [ z(m("div", null, [ m("div", null, [ m("div", k, [ l(M, {
                        modelValue: e(p),
                        "onUpdate:modelValue": a[0] || (a[0] = t => A(p) ? p.value = t : null),
                        style: {
                            width: "240px",
                            float: "right"
                        },
                        size: "large",
                        clearable: "",
                        onKeyup: ie(i, [ "enter" ]),
                        placeholder: "请输入模版名称"
                    }, {
                        append: o(() => [ l(x, {
                            onClick: i
                        }, {
                            default: o(() => [ l(L, {
                                icon: "ep:search"
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]), m("div", S, [ (g(!0), b(ue, null, de(e(h), (t, ae) => (g(), 
                    b("div", {
                        class: pe([ "card", (ae + 1) % 3 == 0 ? "" : "mr-4" ]),
                        key: t.id
                    }, [ m("p", w, D(t.noticeName), 1), m("p", E, "更新时间：" + D(e(Ee)(t.updateTime)), 1), l(Y, {
                        class: "menu",
                        onCommand: le => {
                            return N = le, V = t.id, void (N == "edit" ? v.getExamNotesTemplate(V).then(q => {
                                n.value = q, c.value = !0;
                            }) : N == "delete" && v.deleteExamNotesTemplate(V).then(q => {
                                B.success("操作成功"), i();
                            }));
                            var N, V;
                        }
                    }, {
                        dropdown: o(() => [ l(X, null, {
                            default: o(() => [ l(Q, {
                                command: "edit"
                            }, {
                                default: o(() => [ f("编辑") ]),
                                _: 1
                            }), l(Q, {
                                command: "delete"
                            }, {
                                default: o(() => [ f("删除") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        default: o(() => [ m("span", C, [ l(L, {
                            icon: "ep:more-filled"
                        }) ]) ]),
                        _: 2
                    }, 1032, [ "onCommand" ]) ], 2))), 128)) ]), z(l(Z, {
                        total: e(y),
                        page: e(r).pageNum,
                        "onUpdate:page": a[1] || (a[1] = t => e(r).pageNum = t),
                        limit: e(r).pageSize,
                        "onUpdate:limit": a[2] || (a[2] = t => e(r).pageSize = t),
                        pageSizes: [ 12, 24, 36, 60 ],
                        onPagination: H
                    }, null, 8, [ "total", "page", "limit" ]), [ [ T, e(y) > 0 ] ]) ]), e(h).length === 0 ? (g(), 
                    b("div", U, I)) : ce("", !0) ], 512), [ [ T, !e(c) ] ]), z(m("div", K, [ l(ee, {
                        model: e(n)
                    }, {
                        default: o(() => [ l(R, {
                            label: "模板名称",
                            prop: "noticeName",
                            rules: [ {
                                required: !0,
                                message: "请输入模板名称",
                                trigger: [ "blur", "change" ]
                            } ]
                        }, {
                            default: o(() => [ l(M, {
                                modelValue: e(n).noticeName,
                                "onUpdate:modelValue": a[3] || (a[3] = t => e(n).noticeName = t),
                                maxlength: "15",
                                "show-word-limit": "",
                                placeholder: "请输入模板名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(R, {
                            prop: "content"
                        }, {
                            default: o(() => [ l($, {
                                ref: "ComEditorRef",
                                modelValue: e(n).content,
                                "onUpdate:modelValue": a[4] || (a[4] = t => e(n).content = t),
                                text: e(n).contentText,
                                "onUpdate:text": a[5] || (a[5] = t => e(n).contentText = t),
                                excludeKeys: [ "group-video", "emotion", "insertImage", "insertLink" ],
                                height: 400,
                                insertKeys: {
                                    index: 20,
                                    keys: [ "insertFormula" ]
                                },
                                ltm: 1
                            }, null, 8, [ "modelValue", "text" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]), m("div", P, [ l(x, {
                        type: "primary",
                        onClick: W
                    }, {
                        default: o(() => [ f("保存") ]),
                        _: 1
                    }), l(x, {
                        onClick: F
                    }, {
                        default: o(() => [ f("取消") ]),
                        _: 1
                    }) ]) ], 512), [ [ T, e(c) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-40bb48ff" ] ]);
});

export {
    Re as __tla,
    G as default
};