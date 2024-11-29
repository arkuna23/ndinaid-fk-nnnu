import {
    b8 as Be,
    e as B,
    r as u,
    f as Oe,
    aT as Qe,
    o as r,
    c as f,
    t as n,
    k as a,
    l as d,
    a as o,
    m as C,
    F as re,
    y as me,
    C as D,
    D as z,
    v as F,
    B as ce,
    A as O,
    G as pe,
    z as ve,
    H as Q,
    ab as Re,
    ac as Ae,
    O as Le,
    J as je,
    Q as Ge,
    P as Je,
    bs as Ye,
    bq as Ze,
    ad as Ke,
    ak as We,
    ae as Xe,
    ch as el,
    a9 as ll,
    R as al,
    S as tl,
    __tla as ol
} from "./index-6c08ea4c.js";

import fe, {
    __tla as dl
} from "./sqlDetail-47f64ae5.js";

import {
    M as c,
    __tla as sl
} from "./myQuestionBank-a9dcc9db.js";

import {
    s as be,
    __tla as ul
} from "./file-e038b35d.js";

import {
    d as il,
    D as nl,
    __tla as rl
} from "./dict-c5825220.js";

import {
    _ as ml
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as cl,
    b as pl,
    E as vl,
    __tla as fl
} from "./index-5adb716b.js";

let _e, bl = Promise.all([ (() => {
    try {
        return ol;
    } catch {}
})(), (() => {
    try {
        return dl;
    } catch {}
})(), (() => {
    try {
        return sl;
    } catch {}
})(), (() => {
    try {
        return ul;
    } catch {}
})(), (() => {
    try {
        return rl;
    } catch {}
})(), (() => {
    try {
        return fl;
    } catch {}
})() ]).then(async () => {
    let p, R, A, L, j, G, J, Y, Z, K, W, X, ee, le;
    p = b => (al("data-v-0eecb0e1"), b = b(), tl(), b), R = {
        class: "db-box"
    }, A = {
        class: "top-box"
    }, L = {
        key: 1,
        class: "console-box info-box"
    }, j = p(() => n("div", {
        class: "info-header"
    }, [ n("div", {
        class: "title"
    }, "控制台") ], -1)), G = {
        class: "info-cont"
    }, J = {
        class: "info-footer"
    }, Y = {
        class: "mb-3"
    }, Z = {
        class: "dialog-cont"
    }, K = p(() => n("div", {
        class: "neu-color-blue px-3 py-1"
    }, "下载", -1)), W = p(() => n("div", {
        class: "neu-color-blue px-3 py-1"
    }, "编辑", -1)), X = p(() => n("div", {
        class: "neu-color-red px-3 py-1"
    }, "删除", -1)), ee = {
        key: 0,
        class: "right-box"
    }, le = p(() => n("div", {
        class: "el-upload__tip"
    }, " 请选择 .zip 文件，文件大小限制 1 Mb。 ", -1)), _e = ml({
        __name: "sqlInfo",
        props: {
            modelValue: {
                type: String,
                default: ""
            }
        },
        emits: [ "update:modelValue" ],
        setup(b, {
            emit: he
        }) {
            const {
                proxy: ge
            } = Be(), we = he, ye = b, m = B({
                get: () => ye.modelValue,
                set: e => {
                    we("update:modelValue", e);
                }
            }), Ve = B(() => h.value.find(e => e.id === m.value) || {}), ae = B(() => h.value.find(e => e.id === w.value) || {}), T = u(), i = u({}), xe = u({
                dbName: [ {
                    required: !0,
                    message: "请输入数据库名称",
                    trigger: "blur"
                }, {
                    min: 1,
                    max: 30,
                    message: "长度在 1 到 30 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                fileName: [ {
                    required: !0,
                    message: "请选择数据库文件",
                    trigger: "blur"
                } ]
            }), _ = u(""), te = u(""), $ = u(""), E = u(!1), v = u("输入"), oe = u(500), U = u(!1), h = u([]), g = u("82"), w = u(""), y = u(!1), I = u(!1), M = u("新增数据库");
            function Ne() {
                M.value = "新增数据库", I.value = !1, y.value = !0, i.value = {}, T.value.resetFields();
            }
            function ke(e) {
                let l = !0;
                const s = /\.zip$/.test(e.name) || /\.ZIP$/.test(e.name), S = e.size / 1024 / 1024 / 1024 < 1;
                return s || (message.error("只允许上传 .zip 文件!"), l = !1), S || (message.error("上传文件大小不能超过1MB!"), 
                l = !1), l && (i.value.file = e, i.value.fileName = e.name), !1;
            }
            function Ce(e, l) {
                ge.$refs.dbFormRef.validate().then(() => {
                    if (I.value) c.updateDb({
                        id: i.value.id,
                        dbName: i.value.dbName
                    }).then(() => {
                        V(), e && e();
                    }).catch(() => {
                        l && l();
                    }); else {
                        const s = new FormData();
                        s.append("file", i.value.file), s.append("dbName", i.value.dbName), 
                        s.append("langId", g.value), c.createDb(s).then(() => {
                            V(), e && e();
                        }).catch(() => {
                            l && l();
                        });
                    }
                }).catch(() => {
                    l && l();
                });
            }
            function De(e, l) {
                ae.value.valid ? (m.value = w.value, e && e()) : (message.warning("当前展示数据库的状态为停用，不可选中！"), 
                l && l());
            }
            function V() {
                c.getDbList(g.value).then(e => {
                    const {
                        data: l
                    } = e;
                    h.value = l;
                });
            }
            function ze(e) {
                e.type === "download" && c.downloadDb(e.row.id).then(l => {
                    be(l, `\u3010${e.row.dbName}\u3011\u6570\u636E\u5E93\u6587\u4EF6.zip`);
                }), e.type === "edit" && (M.value = "编辑数据库", I.value = !0, y.value = !0, 
                T.value.resetFields(), i.value = {
                    ...e.row
                }), e.type === "delete" && message.confirm("确认要删除该项数据库吗?").then(() => {
                    c.deleteDb(e.row.id).then(() => {
                        message.success("删除成功"), V();
                    });
                });
            }
            const Ue = () => {
                let e = btoa(_.value);
                E.value = !0, c.submissions(e, m.value).then(l => {
                    const {
                        data: s
                    } = l;
                    $.value = "", de(s);
                });
            };
            function de(e) {
                c.getSubmissions(e).then(l => {
                    const {
                        data: s
                    } = l;
                    s.status_id === "1" || s.status_id === "2" ? setTimeout(() => {
                        de(e);
                    }, 1e3) : (E.value = !1, $.value = s.status_id, te.value = atob(s.stdout), 
                    v.value = "输出");
                });
            }
            const Ie = e => {
                w.value = e.id;
            }, Se = () => {
                c.downloadsqlite3Api().then(e => {
                    e.code && e.code === 500 || be(e, e.fileName);
                });
            };
            return Oe(() => {
                V();
            }), (e, l) => {
                const s = Re, S = Ae, q = Le, x = je, se = Ge, P = Je, ue = Ye, qe = Ze, N = Ke, Fe = We, H = cl, Te = pl, $e = vl, Ee = Xe, ie = Qe("ComDialog"), Me = el, Pe = ll;
                return r(), f("div", R, [ n("div", A, [ a(se, {
                    inline: !0
                }, {
                    default: d(() => [ a(q, {
                        label: "类型"
                    }, {
                        default: d(() => [ a(S, {
                            modelValue: o(g),
                            "onUpdate:modelValue": l[0] || (l[0] = t => C(g) ? g.value = t : null),
                            placeholder: "请选择",
                            clearable: "",
                            style: {
                                width: "200px"
                            },
                            disabled: ""
                        }, {
                            default: d(() => [ (r(!0), f(re, null, me(o(il)(o(nl).QUESTION_SQL_TYPE), t => (r(), 
                            D(s, {
                                key: t.value,
                                label: t.label,
                                value: t.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), m.value ? (r(), D(q, {
                        key: 0,
                        label: "数据库",
                        class: "pa-0 border-0"
                    }, {
                        default: d(() => [ a(S, {
                            "model-value": m.value,
                            placeholder: "请选择",
                            clearable: "",
                            style: {
                                width: "200px"
                            },
                            disabled: ""
                        }, {
                            default: d(() => [ (r(!0), f(re, null, me(o(h), t => (r(), 
                            D(s, {
                                key: t.id,
                                label: t.dbName,
                                value: t.id
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "model-value" ]) ]),
                        _: 1
                    })) : z("", !0), a(x, {
                        type: "primary",
                        class: "ml-5",
                        icon: "Coin",
                        onClick: l[1] || (l[1] = t => U.value = !0)
                    }, {
                        default: d(() => [ F(ce(m.value ? "切换" : "选择") + "数据库", 1) ]),
                        _: 1
                    }) ]),
                    _: 1
                }) ]), m.value ? (r(), D(fe, {
                    key: 0,
                    dbInfo: Ve.value,
                    class: "info-box",
                    showHideBtn: !0
                }, null, 8, [ "dbInfo" ])) : z("", !0), m.value ? (r(), f("div", L, [ j, O((r(), 
                f("div", G, [ O(a(P, {
                    modelValue: o(_),
                    "onUpdate:modelValue": l[2] || (l[2] = t => C(_) ? _.value = t : null),
                    placeholder: `1.\u8FD0\u884C\u524D\u9700\u5148\u9009\u62E9\u4E00\u4E2A\u521D\u59CB\u5316\u6570\u636E\u5E93\r
2.\u8FD0\u884C\u65F6\u5C06\u6267\u884C\u63A7\u5236\u53F0\u547D\u4EE4\u8BED\u53E5`,
                    type: "textarea",
                    maxlength: "1000",
                    "show-word-limit": "",
                    resize: "none"
                }, null, 8, [ "modelValue" ]), [ [ pe, o(v) === "输入" ] ]), O(n("div", {
                    class: ve([ o($) === "3" ? "sucmsg" : "errmsg", "msgbox" ])
                }, ce(o(te)), 3), [ [ pe, o(v) === "输出" ] ]) ])), [ [ Pe, o(E) ] ]), n("div", J, [ a(qe, {
                    modelValue: o(v),
                    "onUpdate:modelValue": l[3] || (l[3] = t => C(v) ? v.value = t : null),
                    class: "radio-btn"
                }, {
                    default: d(() => [ a(ue, {
                        label: "输入",
                        value: "输入"
                    }), a(ue, {
                        label: "输出",
                        value: "输出"
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]), a(x, {
                    type: "primary",
                    disabled: !o(_) || !m.value,
                    class: "submit-btn",
                    onClick: Ue
                }, {
                    default: d(() => [ F("提交运行") ]),
                    _: 1
                }, 8, [ "disabled" ]) ]) ])) : z("", !0), a(ie, {
                    modelValue: o(U),
                    "onUpdate:modelValue": l[5] || (l[5] = t => C(U) ? U.value = t : null),
                    width: "1100px",
                    onSubmitNow: De,
                    title: "选择数据库"
                }, {
                    default: d(() => [ n("div", Y, [ a(x, {
                        type: "primary",
                        plain: "",
                        icon: "Plus",
                        onClick: Ne
                    }, {
                        default: d(() => [ F("新增数据库") ]),
                        _: 1
                    }), a(x, {
                        type: "success",
                        plain: "",
                        icon: "Download",
                        onClick: Se
                    }, {
                        default: d(() => [ F("下载sqlite3模板") ]),
                        _: 1
                    }) ]), n("div", Z, [ n("div", {
                        class: ve([ "left-table", o(w) ? "" : "full" ])
                    }, [ a(Ee, {
                        data: o(h),
                        height: `${o(oe)}px`,
                        "highlight-current-row": "",
                        onCurrentChange: Ie
                    }, {
                        default: d(() => [ a(N, {
                            type: "index",
                            label: "序号",
                            width: "60"
                        }), a(N, {
                            prop: "dbName",
                            label: "名称",
                            "min-width": "120",
                            "show-overflow-tooltip": !0
                        }), a(N, {
                            prop: "valid",
                            label: "状态",
                            "min-width": "80"
                        }, {
                            default: d(t => [ a(Fe, {
                                onClick: Q(ne => function(k) {
                                    k.valid = !k.valid;
                                    let He = k.valid ? "停用" : "启用";
                                    message.confirm('确认要"' + He + '"该项数据库吗?').then(() => {
                                        c.changeDbValid(k.id, !k.valid).then(() => {
                                            message.success("操作成功"), V();
                                        });
                                    }).catch(() => {});
                                }(t.row), [ "stop" ]),
                                modelValue: t.row.valid,
                                "onUpdate:modelValue": ne => t.row.valid = ne,
                                style: {
                                    "--el-switch-on-color": "#13ce66",
                                    "--el-switch-off-color": "#ff4949"
                                }
                            }, null, 8, [ "onClick", "modelValue", "onUpdate:modelValue" ]) ]),
                            _: 1
                        }), a(N, {
                            prop: "createTime",
                            label: "创建时间",
                            "min-width": "160"
                        }), a(N, {
                            label: "操作",
                            width: "70",
                            fixed: "right",
                            align: "center"
                        }, {
                            default: d(t => [ a($e, {
                                onCommand: ze,
                                onClick: l[4] || (l[4] = Q(() => {}, [ "stop" ]))
                            }, {
                                dropdown: d(() => [ a(Te, null, {
                                    default: d(() => [ a(H, {
                                        command: {
                                            row: t.row,
                                            type: "download"
                                        }
                                    }, {
                                        default: d(() => [ K ]),
                                        _: 2
                                    }, 1032, [ "command" ]), a(H, {
                                        command: {
                                            row: t.row,
                                            type: "edit"
                                        }
                                    }, {
                                        default: d(() => [ W ]),
                                        _: 2
                                    }, 1032, [ "command" ]), a(H, {
                                        command: {
                                            row: t.row,
                                            type: "delete"
                                        }
                                    }, {
                                        default: d(() => [ X ]),
                                        _: 2
                                    }, 1032, [ "command" ]) ]),
                                    _: 2
                                }, 1024) ]),
                                default: d(() => [ a(x, {
                                    icon: "More",
                                    style: {
                                        transform: "rotate(180deg)"
                                    },
                                    text: ""
                                }) ]),
                                _: 2
                            }, 1024) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data", "height" ]) ], 2), o(w) ? (r(), f("div", ee, [ a(fe, {
                        dbInfo: ae.value,
                        "no-border": !0,
                        defaultHeight: o(oe)
                    }, null, 8, [ "dbInfo", "defaultHeight" ]) ])) : z("", !0) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), a(ie, {
                    modelValue: o(y),
                    "onUpdate:modelValue": l[9] || (l[9] = t => C(y) ? y.value = t : null),
                    width: "500px",
                    onSubmitNow: Ce,
                    title: o(M)
                }, {
                    default: d(() => [ a(se, {
                        ref_key: "dbFormRef",
                        ref: T,
                        size: "default",
                        class: "pt-5 px-5",
                        model: o(i),
                        rules: o(xe),
                        onSubmit: l[8] || (l[8] = Q(() => {}, [ "prevent" ])),
                        "label-width": "110px"
                    }, {
                        default: d(() => [ a(q, {
                            label: "数据库名称",
                            prop: "dbName"
                        }, {
                            default: d(() => [ a(P, {
                                modelValue: o(i).dbName,
                                "onUpdate:modelValue": l[6] || (l[6] = t => o(i).dbName = t),
                                placeholder: "请输入数据库名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), o(I) ? z("", !0) : (r(), D(q, {
                            key: 0,
                            label: "数据库文件",
                            prop: "fileName"
                        }, {
                            default: d(() => [ a(Me, {
                                limit: 1,
                                class: "upload-demo",
                                action: "#",
                                accept: "application/zip,application/x-zip-compressed",
                                "before-upload": ke
                            }, {
                                tip: d(() => [ le ]),
                                default: d(() => [ a(P, {
                                    modelValue: o(i).fileName,
                                    "onUpdate:modelValue": l[7] || (l[7] = t => o(i).fileName = t),
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
    }, [ [ "__scopeId", "data-v-0eecb0e1" ] ]);
});

export {
    bl as __tla,
    _e as default
};