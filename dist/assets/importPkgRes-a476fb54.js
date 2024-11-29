import {
    r,
    h as ie,
    p as re,
    e as _,
    bB as oe,
    o as z,
    C as ue,
    l as p,
    k as n,
    a as i,
    v as d,
    H as ne,
    t as s,
    B as f,
    c as J,
    F as de,
    y as ce,
    z as pe,
    A as h,
    G as y,
    m as ve,
    ch as fe,
    _ as me,
    Y as ge,
    O as _e,
    Q as he,
    J as ye,
    aU as ke,
    R as Pe,
    S as ze,
    __tla as xe
} from "./index-6c08ea4c.js";

import {
    g as be,
    o as we,
    a as Ie,
    __tla as Ne
} from "./index-4e6d8569.js";

import {
    l as Ce,
    b as Fe,
    w as Se,
    __tla as je
} from "./file-e038b35d.js";

import {
    _ as Oe
} from "./_plugin-vue_export-helper-1b428a4d.js";

let M, Re = Promise.all([ (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})() ]).then(async () => {
    let x, b, w, I, N, C, F, S, j, O, R, V, B, D;
    x = (m => (Pe("data-v-01c1246b"), m = m(), ze(), m))(() => s("div", null, [ s("div", {
        class: "upload-demo__title"
    }, [ s("span", null, [ d("拖拽或"), s("span", {
        style: {
            "text-decoration": "underline",
            color: "#245fe6"
        }
    }, "点击上传"), d("资源文件") ]) ]) ], -1)), b = {
        class: "res-info-list flex"
    }, w = {
        style: {
            color: "var(--el-color-success)"
        }
    }, I = {
        style: {
            color: "var(--el-color-success)"
        }
    }, N = {
        style: {
            color: "var(--el-color-success)"
        }
    }, C = {
        class: "flex items-center justify-left",
        style: {
            width: "calc(100% - 75px)"
        }
    }, F = {
        class: "file-list-item__name"
    }, S = [ "title" ], j = {
        class: "file-size"
    }, O = {
        class: "flex items-center"
    }, R = {
        class: "file-status status-3"
    }, V = {
        class: "file-status status-0"
    }, B = {
        class: "file-status status-1"
    }, D = {
        class: "file-status status-2"
    }, M = Oe({
        __name: "importPkgRes",
        props: {
            from: {
                type: String,
                default: "project"
            }
        },
        emits: [ "refresh" ],
        setup(m, {
            expose: Q,
            emit: X
        }) {
            const g = r(!1);
            ie();
            const U = r(), Y = m, E = X, v = r(!1), q = r(""), K = r({}), a = r([]), A = r({
                pkg1Name: ""
            }), L = r({}), G = re(), T = r({
                pkg1Name: [ {
                    required: !0,
                    message: "请选择文件",
                    trigger: "blur"
                } ]
            });
            r(0);
            const k = _(() => a.value.filter(e => e.state === 1).length), W = _(() => 100 * (k.value / a.value.length).toFixed(2)), Z = _(() => a.value.length - k.value);
            function $(e, t) {
                let o = !0, c = "";
                if (e.name.lastIndexOf(".") > -1 && (c = e.name.slice(0, e.name.lastIndexOf("."))), 
                e.size / 1024 / 1024 >= 500 && (G.warning("文件大小限制 500 Mb!"), o = !1), 
                o) {
                    let u = a.value.find(P => P.eid === c);
                    u.file = e, u.size = e.size, u.name = e.name, u.uploadPercentage = 0;
                }
                return !1;
            }
            _(() => oe());
            const ee = async () => {
                try {
                    for (let e = 0; e < a.value.length; e++) if (a.value[e].size > 0 && a.value[e].name) {
                        let t = new FormData();
                        t.append("file", a.value[e].file), t.append("eid", a.value[e].eid), 
                        t.append("source", Fe), await Se(t, o => {
                            const {
                                loaded: c,
                                total: u
                            } = o;
                            a.value[e].uploadPercentage = Number((100 * Number(c / u)).toFixed());
                        }), a.value[e].uploadPercentage = 0, await we({
                            id: a.value[e].id,
                            resPkgId: a.value[e].resPkgId,
                            resPkgCode: a.value[e].resPkgCode,
                            eid: a.value[e].eid,
                            size: a.value[e].size,
                            state: 1
                        }), a.value[e].state = 1;
                    }
                    Y.from === "course" && await Ie({
                        resPkgId: a.value[0].resPkgId
                    }), v.value = !1, G.success("导入成功!"), E("refresh");
                } catch {}
            }, ae = () => {
                if (g.value) return !1;
                A.value = {
                    pkg1Name: ""
                }, L.value = {}, U.value.resetFields();
            };
            function se() {
                g.value || (v.value = !1);
            }
            return Q({
                openDialog: e => {
                    v.value = !0, K.value = e, q.value = "导入资源文件", be({
                        resPkgId: e.id,
                        pageNo: 1,
                        pageSize: 100
                    }).then(t => {
                        a.value = (t || []).map(o => ({
                            ...o,
                            size: o.size || 0,
                            uploadPercentage: 0
                        }));
                    });
                }
            }), (e, t) => {
                const o = fe, c = me, u = ge, P = _e, le = he, H = ye, te = ke;
                return z(), ue(te, {
                    modelValue: i(v),
                    "onUpdate:modelValue": t[1] || (t[1] = l => ve(v) ? v.value = l : null),
                    scroll: !0,
                    "max-height": 420,
                    title: i(q),
                    width: "480",
                    onClose: ae
                }, {
                    footer: p(() => [ n(H, {
                        type: "default",
                        onClick: se,
                        loading: i(g)
                    }, {
                        default: p(() => [ d("取消") ]),
                        _: 1
                    }, 8, [ "loading" ]), n(H, {
                        type: "primary",
                        onClick: ee,
                        loading: i(g)
                    }, {
                        default: p(() => [ d("确定") ]),
                        _: 1
                    }, 8, [ "loading" ]) ]),
                    default: p(() => [ n(le, {
                        ref_key: "addFolderFormRef",
                        ref: U,
                        model: i(A),
                        rules: i(T),
                        class: "neu",
                        onSubmit: t[0] || (t[0] = ne(() => {}, [ "prevent" ]))
                    }, {
                        default: p(() => [ n(P, {
                            label: "请选择资源文件",
                            prop: "pkg1Name"
                        }, {
                            default: p(() => [ n(o, {
                                "before-upload": $,
                                "show-file-list": !1,
                                multiple: "",
                                action: "#",
                                class: "import-res",
                                drag: ""
                            }, {
                                default: p(() => [ x ]),
                                _: 1
                            }), s("div", b, [ s("div", null, [ d("该资源包已导入"), s("span", w, f(i(k)) + "/" + f(i(a).length), 1) ]), s("div", null, [ d("完成度"), s("span", I, f(i(W)) + "%", 1) ]), s("div", null, [ d("本次待导入"), s("span", N, f(i(Z)), 1) ]) ]), (z(!0), 
                            J(de, null, ce(i(a), l => (z(), J("div", {
                                class: pe([ "res-list" ]),
                                key: l.id
                            }, [ s("div", C, [ s("div", F, [ s("span", {
                                title: l.eid,
                                class: "file-name"
                            }, f(l.name || l.eid), 9, S), s("span", j, f(i(Ce)(l == null ? void 0 : l.size)), 1) ]) ]), s("div", O, [ h(s("div", R, " 待选择 ", 512), [ [ y, l.state === 0 && l.uploadPercentage == 0 && l.size == 0 ] ]), h(s("div", V, " 待导入 ", 512), [ [ y, l.state === 0 && l.uploadPercentage == 0 && l.size > 0 ] ]), h(s("div", B, [ n(c, {
                                icon: "ep:loading",
                                class: "is-loading"
                            }), d(" 导入中... ") ], 512), [ [ y, l.uploadPercentage != 0 ] ]), h(s("div", D, [ n(c, {
                                icon: "ep:success-filled"
                            }) ], 512), [ [ y, l.state === 1 && l.uploadPercentage == 0 ] ]) ]), n(u, {
                                "stroke-width": 2,
                                class: "progress",
                                percentage: l.uploadPercentage,
                                "show-text": !1
                            }, null, 8, [ "percentage" ]) ]))), 128)) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-01c1246b" ] ]);
});

export {
    Re as __tla,
    M as default
};