import {
    r as s,
    h as K,
    p as T,
    e as W,
    bB as X,
    o as Z,
    c as $,
    k as i,
    l as d,
    a,
    v as p,
    H as ee,
    A as x,
    t,
    B as R,
    G as w,
    m as ae,
    z as te,
    ch as le,
    _ as se,
    Y as ie,
    O as ne,
    Q as oe,
    J as re,
    aU as ue,
    R as de,
    S as ce,
    __tla as me
} from "./index-6c08ea4c.js";

import {
    b as fe,
    __tla as pe
} from "./index-4e6d8569.js";

import {
    l as ve,
    __tla as _e
} from "./file-e038b35d.js";

import {
    _ as ge
} from "./_plugin-vue_export-helper-1b428a4d.js";

let U, he = Promise.all([ (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})() ]).then(async () => {
    let N, O, j, F, C, z, I, S, V;
    N = (v => (de("data-v-e1773314"), v = v(), ce(), v))(() => t("div", null, [ t("div", {
        class: "upload-demo__title"
    }, [ t("span", null, [ p("拖拽或"), t("span", {
        style: {
            "text-decoration": "underline",
            color: "#245fe6"
        }
    }, "点击上传"), p("json文件") ]) ]) ], -1)), O = {
        class: te([ "res-list" ])
    }, j = {
        class: "flex items-center justify-left",
        style: {
            width: "55%"
        }
    }, F = {
        class: "file-list-item__name"
    }, C = [ "title" ], z = {
        class: "file-size"
    }, I = {
        class: "flex items-center"
    }, S = {
        class: "file-status status-0"
    }, V = {
        class: "file-status status-1"
    }, U = ge({
        __name: "importPkg",
        emits: [ "refresh" ],
        setup(v, {
            expose: q,
            emit: G
        }) {
            const n = s(!1);
            K();
            const h = s(), H = G, f = s(!1), A = s(""), L = s({}), _ = s({
                pkg1Name: ""
            }), o = s({}), b = T(), M = s({
                pkg1Name: [ {
                    required: !0,
                    message: "请选择文件",
                    trigger: "blur"
                } ]
            }), r = s(0);
            function Q(l) {
                return function(e, c = 1) {
                    let u = !0, m = "";
                    e.name.lastIndexOf(".") > -1 && (m = e.name.slice(e.name.lastIndexOf(".") + 1).toLowerCase());
                    const y = [ "json" ].indexOf(m) >= 0, k = e.size / 1024 / 1024;
                    return y || (b.warning("只允许上传 .json 文件!"), u = !1), k >= 30 && (b.warning("文件大小限制 30 Mb!"), 
                    u = !1), u && (o.value = e, _.value.pkg1Name = e.name), !1;
                }(l, 1);
            }
            W(() => X());
            const Y = () => {
                h.value.validate(l => {
                    if (l) {
                        n.value = !0, r.value = 0;
                        const e = new FormData();
                        e.append("file", o.value), fe(e, c => {
                            const {
                                loaded: u,
                                total: m
                            } = c;
                            r.value = Number((100 * Number(u / m)).toFixed());
                        }).then(c => {
                            r.value = 0, n.value = !1, c.data ? (B(), D(), H("refresh")) : b.error("导入失败!");
                        }).catch(() => {
                            r.value = 0, n.value = !1;
                        });
                    }
                });
            }, B = () => {
                if (n.value) return !1;
                _.value = {
                    pkg1Name: ""
                }, o.value = {}, h.value.resetFields();
            };
            function D() {
                n.value || (f.value = !1);
            }
            return q({
                openDialog: l => {
                    f.value = !0, L.value = l, A.value = l.title, l.type == "edit" && Object.assign(_.value, l.editObject);
                }
            }), (l, e) => {
                const c = le, u = se, m = ie, y = ne, k = oe, J = re, E = ue;
                return Z(), $("div", null, [ i(E, {
                    modelValue: a(f),
                    "onUpdate:modelValue": e[1] || (e[1] = g => ae(f) ? f.value = g : null),
                    scroll: !0,
                    "max-height": "210",
                    title: a(A),
                    width: "420",
                    onClose: B
                }, {
                    footer: d(() => [ i(J, {
                        type: "default",
                        onClick: D,
                        loading: a(n)
                    }, {
                        default: d(() => [ p("取消") ]),
                        _: 1
                    }, 8, [ "loading" ]), i(J, {
                        type: "primary",
                        onClick: Y,
                        loading: a(n)
                    }, {
                        default: d(() => [ p("确定") ]),
                        _: 1
                    }, 8, [ "loading" ]) ]),
                    default: d(() => [ i(k, {
                        ref_key: "addFolderFormRef",
                        ref: h,
                        model: a(_),
                        rules: a(M),
                        class: "neu",
                        onSubmit: e[0] || (e[0] = ee(() => {}, [ "prevent" ]))
                    }, {
                        default: d(() => [ i(y, {
                            label: "请选择JSON文件",
                            prop: "pkg1Name"
                        }, {
                            default: d(() => {
                                var g, P;
                                return [ i(c, {
                                    accept: ".json",
                                    limit: 1,
                                    "before-upload": Q,
                                    "show-file-list": !1,
                                    action: "#",
                                    class: "import-res",
                                    drag: ""
                                }, {
                                    default: d(() => [ N ]),
                                    _: 1
                                }), x(t("div", O, [ t("div", j, [ t("div", F, [ t("span", {
                                    title: a(o).name,
                                    class: "file-name"
                                }, R((g = a(o)) == null ? void 0 : g.name), 9, C), t("span", z, R(a(ve)((P = a(o)) == null ? void 0 : P.size)), 1) ]) ]), t("div", I, [ x(t("div", S, " 待导入 ", 512), [ [ w, a(r) == 0 ] ]), x(t("div", V, [ i(u, {
                                    icon: "ep:loading",
                                    class: "is-loading"
                                }), p(" 导入中... ") ], 512), [ [ w, a(r) != 0 ] ]) ]), i(m, {
                                    class: "progress",
                                    percentage: a(r),
                                    "show-text": !1,
                                    "stroke-width": 2,
                                    style: {
                                        position: "absolute",
                                        bottom: "0",
                                        left: "0"
                                    }
                                }, null, 8, [ "percentage" ]) ], 512), [ [ w, a(o).name ] ]) ];
                            }),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-e1773314" ] ]);
});

export {
    he as __tla,
    U as default
};