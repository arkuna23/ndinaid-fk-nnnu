import {
    p as Oe,
    b8 as Qe,
    e as P,
    r as i,
    f as Je,
    o as c,
    c as x,
    t as s,
    k as l,
    l as o,
    a as d,
    m as I,
    F as ve,
    y as be,
    C as S,
    D as q,
    e1 as Ke,
    v as b,
    B as _e,
    A as L,
    G as he,
    z as we,
    dY as Me,
    H as O,
    c8 as Ye,
    ab as je,
    ac as Ge,
    O as Ze,
    J as We,
    Q as Xe,
    P as ea,
    bs as aa,
    bq as la,
    _ as ta,
    ad as oa,
    ak as da,
    ae as ia,
    aU as ua,
    ch as sa,
    a9 as na,
    R as ra,
    S as ca,
    __tla as ma
} from "./index-6c08ea4c.js";

import ye, {
    __tla as fa
} from "./sqlDetail-6033fcff.js";

import {
    M as f,
    __tla as pa
} from "./myQuestionBank-a9dcc9db.js";

import {
    d as va,
    D as ba,
    __tla as _a
} from "./dict-c5825220.js";

import {
    s as ha,
    __tla as wa
} from "./file-e038b35d.js";

import {
    _ as ya
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as ga,
    b as Va,
    E as xa,
    __tla as ka
} from "./index-5adb716b.js";

let ge, Na = Promise.all([ (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return ka;
    } catch {}
})() ]).then(async () => {
    let y, Q, J, K, M, Y, j, G, Z, W, X, ee, ae, le, te, oe;
    y = k => (ra("data-v-bfc0f6e8"), k = k(), ca(), k), Q = {
        class: "db-box"
    }, J = {
        class: "top-box"
    }, K = {
        key: 1,
        class: "console-box info-box"
    }, M = y(() => s("div", {
        class: "info-header"
    }, [ s("div", {
        class: "title"
    }, "控制台") ], -1)), Y = {
        class: "info-cont"
    }, j = {
        class: "info-footer"
    }, G = {
        class: "mb-3"
    }, Z = {
        class: "dialog-cont"
    }, W = y(() => s("div", {
        class: "neu-color-blue px-3 py-1"
    }, "下载", -1)), X = y(() => s("div", {
        class: "neu-color-blue px-3 py-1"
    }, "编辑", -1)), ee = y(() => s("div", {
        class: "neu-color-red px-3 py-1"
    }, "删除", -1)), ae = {
        key: 0,
        class: "right-box"
    }, le = {
        class: "dialog-footer align-center"
    }, te = y(() => s("div", {
        class: "el-upload__tip"
    }, " 请选择.zip文件，并确保解压后有效文件名字固定为【db.sqlite】,文件大小不超过 1 Mb。 ", -1)), oe = {
        class: "dialog-footer align-center"
    }, ge = ya({
        __name: "sqlInfo",
        props: {
            modelValue: {
                type: String,
                default: ""
            }
        },
        emits: [ "update:modelValue" ],
        setup(k, {
            emit: Ve
        }) {
            const p = Oe(), {
                proxy: $
            } = Qe(), xe = Ve, ke = k, m = P({
                get: () => ke.modelValue,
                set: a => {
                    xe("update:modelValue", a);
                }
            }), Ne = P(() => C.value.find(a => a.id === m.value) || {}), de = P(() => C.value.find(a => a.id === _.value) || {}), Ce = i(), n = i({}), ze = i({
                dbName: [ {
                    required: !0,
                    message: "请输入数据库名称",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 30,
                    message: "长度在 1 到 30 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                fileName: [ {
                    required: !0,
                    message: "请选择数据库文件",
                    trigger: [ "blur", "change" ]
                } ]
            }), N = i(""), ie = i(""), T = i(""), R = i(!1), g = i("输入"), ue = i(500), V = i(!1), C = i([]), z = i("82"), _ = i(""), h = i(!1), E = i(!1), A = i("新增数据库");
            function Ue() {
                var a;
                A.value = "新增数据库", E.value = !1, h.value = !0, n.value = {}, (a = $.$refs.dbFormRef) == null || a.resetFields();
            }
            function De(a) {
                let e = !0;
                const r = /\.zip$/.test(a.name) || /\.ZIP$/.test(a.name), v = a.size / 1024 / 1024 < 1;
                return r || (p.error("只允许上传 .zip 文件!"), e = !1), v || (p.error("上传文件大小不能超过1MB!"), 
                e = !1), e && (n.value.file = a, n.value.fileName = a.name), !1;
            }
            function se(a, e) {
                $.$refs.dbFormRef.validate().then(() => {
                    if (E.value) f.updateDb({
                        id: n.value.id,
                        dbName: n.value.dbName
                    }).then(() => {
                        U(), a && a();
                    }).catch(() => {
                        e && e();
                    }); else {
                        const r = new FormData();
                        r.append("file", n.value.file), r.append("dbName", n.value.dbName), 
                        r.append("langId", z.value), f.createDb(r).then(() => {
                            U(), a && a();
                        }).catch(() => {
                            e && e();
                        });
                    }
                }).catch(() => {
                    e && e();
                });
            }
            function ne(a, e) {
                if (!_.value) return p.warning("请选择一个数据库！"), void (e && e());
                de.value.valid ? (m.value = _.value, V.value = !1, a && a()) : (p.warning("当前展示数据库的状态为停用，不可选中！"), 
                e && e());
            }
            function U() {
                f.getDbList(z.value).then(a => {
                    C.value = a;
                });
            }
            function Fe(a) {
                a.type === "download" && f.downloadDb(a.row.id).then(e => {
                    $.fileObject.storageFile(e, `\u3010${a.row.dbName}\u3011\u6570\u636E\u5E93\u6587\u4EF6.zip`);
                }), a.type === "edit" && (A.value = "编辑数据库", E.value = !0, h.value = !0, 
                $.$refs.dbFormRef.resetFields(), n.value = {
                    ...a.row
                }), a.type === "delete" && p.confirm("确认要删除该项数据库吗?").then(() => {
                    f.deleteDb(a.row.id).then(() => {
                        p.success("操作成功"), U();
                    });
                });
            }
            const Ie = () => {
                let a = function(e) {
                    let r = new TextEncoder().encode(e);
                    return btoa(String.fromCharCode(...r));
                }(N.value);
                R.value = !0, f.submissions(a, m.value).then(e => {
                    T.value = "", re(e);
                });
            };
            function re(a) {
                f.getSubmissions(a).then(e => {
                    e.status_id === "1" || e.status_id === "2" ? setTimeout(() => {
                        re(a);
                    }, 1e3) : (R.value = !1, T.value = e.status_id, ie.value = function(r) {
                        let v = atob(r), w = new Uint8Array(v.length);
                        for (let u = 0; u < v.length; u++) w[u] = v.charCodeAt(u);
                        return new TextDecoder().decode(w);
                    }(e.stdout), g.value = "输出");
                });
            }
            const Se = a => {
                _.value = a.id;
            }, qe = () => {
                f.downloadsqlite3Api().then(a => {
                    a.code && a.code === 500 || ha(a, a.fileName || "数据库模版.zip");
                });
            };
            return Je(() => {
                U();
            }), (a, e) => {
                const r = je, v = Ge, w = Ze, u = We, ce = Xe, B = ea, me = aa, $e = la, Ee = ta, D = oa, Te = da, H = ga, Re = Va, Ae = xa, Be = ia, fe = ua, He = sa, Pe = na;
                return c(), x("div", Q, [ s("div", J, [ l(ce, {
                    inline: !0
                }, {
                    default: o(() => [ l(w, {
                        label: "类型"
                    }, {
                        default: o(() => [ l(v, {
                            modelValue: d(z),
                            "onUpdate:modelValue": e[0] || (e[0] = t => I(z) ? z.value = t : null),
                            placeholder: "请选择",
                            clearable: "",
                            style: {
                                width: "200px"
                            },
                            disabled: ""
                        }, {
                            default: o(() => [ (c(!0), x(ve, null, be(d(va)(d(ba).QUESTION_SQL_TYPE), t => (c(), 
                            S(r, {
                                key: t.value,
                                label: t.label,
                                value: t.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), m.value ? (c(), S(w, {
                        key: 0,
                        label: "数据库",
                        class: "border-0 pa-0"
                    }, {
                        default: o(() => [ l(v, {
                            "model-value": m.value,
                            placeholder: "请选择",
                            clearable: "",
                            style: {
                                width: "200px"
                            },
                            disabled: ""
                        }, {
                            default: o(() => [ (c(!0), x(ve, null, be(d(C), t => (c(), 
                            S(r, {
                                key: t.id,
                                label: t.dbName,
                                value: t.id
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "model-value" ]) ]),
                        _: 1
                    })) : q("", !0), l(u, {
                        type: "primary",
                        class: "ml-5",
                        icon: d(Ke),
                        onClick: e[1] || (e[1] = () => {
                            V.value = !0, _.value = "";
                        })
                    }, {
                        default: o(() => [ b(_e(m.value ? "切换" : "选择") + "数据库", 1) ]),
                        _: 1
                    }, 8, [ "icon" ]) ]),
                    _: 1
                }) ]), m.value ? (c(), S(ye, {
                    key: 0,
                    dbInfo: Ne.value,
                    class: "info-box",
                    showHideBtn: !0
                }, null, 8, [ "dbInfo" ])) : q("", !0), m.value ? (c(), x("div", K, [ M, L((c(), 
                x("div", Y, [ L(l(B, {
                    modelValue: d(N),
                    "onUpdate:modelValue": e[2] || (e[2] = t => I(N) ? N.value = t : null),
                    placeholder: `1.\u8FD0\u884C\u524D\u9700\u5148\u9009\u62E9\u4E00\u4E2A\u521D\u59CB\u5316\u6570\u636E\u5E93\r
2.\u8FD0\u884C\u65F6\u5C06\u6267\u884C\u63A7\u5236\u53F0\u547D\u4EE4\u8BED\u53E5`,
                    type: "textarea",
                    maxlength: "1000",
                    "show-word-limit": "",
                    resize: "none"
                }, null, 8, [ "modelValue" ]), [ [ he, d(g) === "输入" ] ]), L(s("div", {
                    class: we([ d(T) === "3" ? "sucmsg" : "errmsg", "msgbox" ])
                }, _e(d(ie)), 3), [ [ he, d(g) === "输出" ] ]) ])), [ [ Pe, d(R) ] ]), s("div", j, [ l($e, {
                    modelValue: d(g),
                    "onUpdate:modelValue": e[3] || (e[3] = t => I(g) ? g.value = t : null),
                    class: "radio-btn"
                }, {
                    default: o(() => [ l(me, {
                        label: "输入",
                        value: "输入"
                    }), l(me, {
                        label: "输出",
                        value: "输出"
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]), l(u, {
                    type: "primary",
                    disabled: !d(N) || !m.value,
                    class: "submit-btn",
                    onClick: Ie
                }, {
                    default: o(() => [ b("提交运行") ]),
                    _: 1
                }, 8, [ "disabled" ]) ]) ])) : q("", !0), l(fe, {
                    modelValue: d(V),
                    "onUpdate:modelValue": e[6] || (e[6] = t => I(V) ? V.value = t : null),
                    width: "1100px",
                    onSubmitNow: ne,
                    title: "选择数据库"
                }, {
                    footer: o(() => [ s("div", le, [ l(u, {
                        size: "default",
                        onClick: e[5] || (e[5] = t => V.value = !1)
                    }, {
                        default: o(() => [ b("取 消 ") ]),
                        _: 1
                    }), l(u, {
                        size: "default",
                        type: "primary",
                        onClick: ne
                    }, {
                        default: o(() => [ b("确 定 ") ]),
                        _: 1
                    }) ]) ]),
                    default: o(() => [ s("div", G, [ l(u, {
                        type: "primary",
                        plain: "",
                        icon: d(Me),
                        onClick: Ue
                    }, {
                        default: o(() => [ b("新增数据库") ]),
                        _: 1
                    }, 8, [ "icon" ]), l(u, {
                        type: "success",
                        plain: "",
                        onClick: qe
                    }, {
                        default: o(() => [ l(Ee, {
                            class: "mr5",
                            icon: "ep:download"
                        }), b(" 下载sqlite3模板") ]),
                        _: 1
                    }) ]), s("div", Z, [ s("div", {
                        class: we([ "left-table", d(_) ? "" : "full" ])
                    }, [ l(Be, {
                        data: d(C),
                        height: `${d(ue)}px`,
                        "highlight-current-row": "",
                        onCurrentChange: Se
                    }, {
                        default: o(() => [ l(D, {
                            type: "index",
                            label: "序号",
                            width: "60"
                        }), l(D, {
                            prop: "dbName",
                            label: "名称",
                            "min-width": "120",
                            "show-overflow-tooltip": !0
                        }), l(D, {
                            prop: "valid",
                            label: "状态",
                            "min-width": "80"
                        }, {
                            default: o(t => [ l(Te, {
                                onClick: O(pe => function(F) {
                                    F.valid = !F.valid;
                                    let Le = F.valid ? "停用" : "启用";
                                    p.confirm('确认要"' + Le + '"该项数据库吗?').then(() => {
                                        f.changeDbValid(F.id, !F.valid).then(() => {
                                            p.success("操作成功"), U();
                                        });
                                    }).catch(() => {});
                                }(t.row), [ "stop" ]),
                                modelValue: t.row.valid,
                                "onUpdate:modelValue": pe => t.row.valid = pe,
                                style: {
                                    "--el-switch-on-color": "#13ce66",
                                    "--el-switch-off-color": "#ff4949"
                                }
                            }, null, 8, [ "onClick", "modelValue", "onUpdate:modelValue" ]) ]),
                            _: 1
                        }), l(D, {
                            prop: "createTime",
                            label: "创建时间",
                            "min-width": "160"
                        }), l(D, {
                            label: "操作",
                            width: "70",
                            fixed: "right"
                        }, {
                            default: o(t => [ l(Ae, {
                                onCommand: Fe,
                                onClick: e[4] || (e[4] = O(() => {}, [ "stop" ]))
                            }, {
                                dropdown: o(() => [ l(Re, null, {
                                    default: o(() => [ l(H, {
                                        command: {
                                            row: t.row,
                                            type: "download"
                                        }
                                    }, {
                                        default: o(() => [ W ]),
                                        _: 2
                                    }, 1032, [ "command" ]), l(H, {
                                        command: {
                                            row: t.row,
                                            type: "edit"
                                        }
                                    }, {
                                        default: o(() => [ X ]),
                                        _: 2
                                    }, 1032, [ "command" ]), l(H, {
                                        command: {
                                            row: t.row,
                                            type: "delete"
                                        }
                                    }, {
                                        default: o(() => [ ee ]),
                                        _: 2
                                    }, 1032, [ "command" ]) ]),
                                    _: 2
                                }, 1024) ]),
                                default: o(() => [ l(u, {
                                    icon: d(Ye),
                                    style: {
                                        transform: "rotate(180deg)"
                                    },
                                    text: ""
                                }, null, 8, [ "icon" ]) ]),
                                _: 2
                            }, 1024) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data", "height" ]) ], 2), d(_) ? (c(), x("div", ae, [ l(ye, {
                        dbInfo: de.value,
                        "no-border": !0,
                        defaultHeight: d(ue)
                    }, null, 8, [ "dbInfo", "defaultHeight" ]) ])) : q("", !0) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), l(fe, {
                    modelValue: d(h),
                    "onUpdate:modelValue": e[12] || (e[12] = t => I(h) ? h.value = t : null),
                    width: "500px",
                    onSubmitNow: se,
                    title: d(A)
                }, {
                    footer: o(() => [ s("div", oe, [ l(u, {
                        size: "default",
                        type: "primary",
                        onClick: e[10] || (e[10] = t => se(() => {
                            h.value = !1;
                        }))
                    }, {
                        default: o(() => [ b("确 定 ") ]),
                        _: 1
                    }), l(u, {
                        size: "default",
                        onClick: e[11] || (e[11] = t => h.value = !1)
                    }, {
                        default: o(() => [ b("取 消 ") ]),
                        _: 1
                    }) ]) ]),
                    default: o(() => [ l(ce, {
                        ref_key: "dbFormRef",
                        ref: Ce,
                        size: "default",
                        class: "px-5 pt-5",
                        model: d(n),
                        rules: d(ze),
                        onSubmit: e[9] || (e[9] = O(() => {}, [ "prevent" ])),
                        "label-width": "110px"
                    }, {
                        default: o(() => [ l(w, {
                            label: "数据库名称",
                            prop: "dbName"
                        }, {
                            default: o(() => [ l(B, {
                                modelValue: d(n).dbName,
                                "onUpdate:modelValue": e[7] || (e[7] = t => d(n).dbName = t),
                                placeholder: "请输入数据库名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), d(E) ? q("", !0) : (c(), S(w, {
                            key: 0,
                            label: "数据库文件",
                            prop: "fileName"
                        }, {
                            default: o(() => [ l(He, {
                                limit: 1,
                                class: "upload-demo",
                                action: "#",
                                accept: "application/zip,application/x-zip-compressed",
                                "before-upload": De
                            }, {
                                tip: o(() => [ te ]),
                                default: o(() => [ l(B, {
                                    modelValue: d(n).fileName,
                                    "onUpdate:modelValue": e[8] || (e[8] = t => d(n).fileName = t),
                                    placeholder: "请选择数据库文件"
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        })) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-bfc0f6e8" ] ]);
});

export {
    Na as __tla,
    ge as default
};