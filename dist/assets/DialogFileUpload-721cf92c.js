import {
    aa as j,
    p as G,
    r as t,
    U as T,
    e as W,
    f as X,
    o as D,
    C as O,
    l as o,
    k as m,
    v as S,
    A as Y,
    a as i,
    H as Z,
    t as n,
    z as ee,
    B as V,
    m as ae,
    ch as le,
    _ as se,
    O as te,
    Q as ie,
    J as ue,
    aU as oe,
    a9 as re,
    R as ne,
    S as de,
    __tla as me
} from "./index-6c08ea4c.js";

import {
    x as ce,
    __tla as fe
} from "./file-e038b35d.js";

import {
    _ as pe
} from "./_plugin-vue_export-helper-1b428a4d.js";

let B, ve = Promise.all([ (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return fe;
    } catch {}
})() ]).then(async () => {
    let _, y, h, z, k, w;
    _ = c => (ne("data-v-85d908d1"), c = c(), de(), c), y = {
        class: "import-input"
    }, h = _(() => n("div", {
        class: "import-icon"
    }, null, -1)), z = _(() => n("div", {
        class: "el-upload__text"
    }, " 请将文件拖至此框内，或点击上传文件 ", -1)), k = {
        class: "file-name"
    }, w = {
        class: "file-size"
    }, B = pe({
        __name: "DialogFileUpload",
        emits: [ "success" ],
        setup(c, {
            expose: M,
            emit: R
        }) {
            const {
                t: q
            } = j(), A = G(), E = R, r = t(!1), C = t(""), g = t(!1), I = t(""), N = t(""), F = t(""), d = t({
                id: "",
                fileName: ""
            }), H = T({
                fileName: [ {
                    required: !0,
                    trigger: [ "change", "blur" ],
                    message: "请选择一个代码文件"
                }, {
                    min: 1,
                    max: 200,
                    message: "文件名称长度必须介于 1 和 200 之间",
                    trigger: [ "change", "blur" ]
                } ]
            }), f = t(), u = t({}), b = W(() => {
                var a, e, s;
                if ((a = u.value) != null && a.name) {
                    let l = (e = u.value) == null ? void 0 : e.size, p = "";
                    return p = l / 1024 / 1024 > 1 ? (l / 1024 / 1024).toFixed(1) + "Mb" : l / 1024 > 1 ? (l / 1024).toFixed(1) + "Kb" : l + "B", 
                    {
                        name: (s = u.value) == null ? void 0 : s.name,
                        size: p
                    };
                }
                return {
                    name: "",
                    size: ""
                };
            });
            function J(a) {
                let e = !0;
                return a.name.lastIndexOf(".") > -1 && a.name.slice(a.name.lastIndexOf(".") + 1).toLowerCase(), 
                a.size / 1024 / 1024 >= 1 && (proxy.$modal.msgError("文件大小限制 1 Mb!"), 
                e = !1), e && function(s, l) {
                    d.value.fileName = s.name, u.value = s;
                }(a), !1;
            }
            function K() {
                d.value.fileName = "", u.value = {};
            }
            M({
                open: async (a, e, s, l) => {
                    r.value = !0, C.value = "上传文件", I.value = a, L(), u.value = {}, 
                    N.value = e, F.value = s || "", a === "update" && (d.value.name = l || "");
                }
            });
            const L = () => {
                var a;
                d.value = {
                    id: "",
                    fileName: ""
                }, (a = f.value) == null || a.resetFields();
            };
            return X(() => {}), (a, e) => {
                const s = le, l = se, p = te, P = ie, U = ue, Q = oe, $ = re;
                return D(), O(Q, {
                    modelValue: i(r),
                    "onUpdate:modelValue": e[3] || (e[3] = x => ae(r) ? r.value = x : null),
                    title: i(C),
                    width: "440"
                }, {
                    footer: o(() => [ m(U, {
                        onClick: e[1] || (e[1] = x => r.value = !1)
                    }, {
                        default: o(() => [ S("取 消") ]),
                        _: 1
                    }), m(U, {
                        type: "primary",
                        onClick: e[2] || (e[2] = x => (async () => {
                            if (f && await f.value.validate()) {
                                g.value = !0;
                                try {
                                    if (I.value === "create") {
                                        let v = new FormData();
                                        v.append("file", u.value), v.append("groupId", N.value), 
                                        v.append("parentId", F.value), await ce(v), 
                                        A.success(q("common.createSuccess"));
                                    }
                                    r.value = !1, E("success");
                                } finally {
                                    g.value = !1;
                                }
                            }
                        })())
                    }, {
                        default: o(() => [ S("确 定") ]),
                        _: 1
                    }) ]),
                    default: o(() => [ Y((D(), O(P, {
                        ref_key: "formRef",
                        ref: f,
                        model: i(d),
                        rules: i(H),
                        size: "large",
                        "label-position": "top",
                        "label-width": "80px",
                        onSubmit: e[0] || (e[0] = Z(() => {}, [ "prevent" ]))
                    }, {
                        default: o(() => [ m(p, {
                            label: "上传文件",
                            prop: "fileName"
                        }, {
                            default: o(() => [ n("div", y, [ m(s, {
                                class: "upload-demo",
                                action: "#",
                                multiple: "",
                                drag: "",
                                limit: 1,
                                "before-upload": J
                            }, {
                                default: o(() => [ h, z ]),
                                _: 1
                            }) ]), n("div", {
                                class: ee([ "choose-file-box", i(b).name ? "" : "is-hide" ])
                            }, [ n("div", k, V(i(b).name), 1), n("div", w, V(i(b).size), 1), m(l, {
                                icon: "ep:close",
                                size: 14,
                                class: "close-btn",
                                onClick: K
                            }) ], 2) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ $, i(g) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-85d908d1" ] ]);
});

export {
    ve as __tla,
    B as default
};