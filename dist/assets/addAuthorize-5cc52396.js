import {
    a7 as c,
    d as ne,
    T as pe,
    r as d,
    p as se,
    h as ie,
    e as ge,
    U as me,
    o as V,
    c as Y,
    k as l,
    l as o,
    v as q,
    C as z,
    F as ce,
    y as he,
    t as ve,
    B as ye,
    D as I,
    M as ke,
    s as fe,
    P as Ae,
    O as _e,
    N as Te,
    Q as Ce,
    ad as we,
    ae as Ve,
    J as be,
    aU as Fe,
    __tla as qe
} from "./index-6c08ea4c.js";

import {
    _ as De,
    __tla as xe
} from "./index-1024512a.js";

import {
    _ as $e
} from "./_plugin-vue_export-helper-1b428a4d.js";

let N, L, O, H, J, Ue = Promise.all([ (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})() ]).then(async () => {
    J = function(v) {
        return c.get({
            url: "/resource/auth/page",
            params: v
        });
    }, L = function(v) {
        return c.get({
            url: "resource/auth/auth/statistic",
            params: v
        });
    }, H = async v => c.delete({
        url: "/resource/auth/delete",
        data: v
    });
    let S;
    S = {
        key: 2
    }, N = $e(ne({
        __name: "addAuthorize",
        emits: [ "refresh" ],
        setup(v, {
            expose: Q,
            emit: G
        }) {
            const n = pe(), K = d(), y = d(), P = d(), k = d(), f = d(!1), _ = d(!1), T = d("");
            d("");
            const D = G, C = se(), E = ie();
            d({});
            const s = d({
                pkgCodeArray: "",
                pkgAuthTime: ""
            }), p = d({
                pkgCodeArray: [],
                pkgAuthTime: ""
            }), i = d({
                updateAuthArray: "",
                pkgAuthTime: ""
            }), W = [ "快速授权", "检索授权" ], A = d("快速授权"), X = d([]), M = d([]);
            ge(() => {
                var t;
                return (t = K.value) == null ? void 0 : t.uploadPercentage;
            });
            const w = d(""), Z = () => {
                A.value == "快速授权" ? ee() : ae();
            }, ee = () => {
                y.value.validate(async t => {
                    if (t) {
                        let u = await (e = {
                            pkgCodeArray: s.value.pkgCodeArray.split(";"),
                            tenantId: n.query.id || "",
                            tenantCode: n.query.code || "",
                            tenantName: w.value,
                            pkgAuthStart: `${s.value.pkgAuthTime[0]} 00:00:00` || "",
                            pkgAuthEnd: `${s.value.pkgAuthTime[1]} 00:00:00` || ""
                        }, c.post({
                            url: "/resource/auth/create/speedy",
                            data: e
                        }));
                        if (u.unFoundArray && u.unFoundArray.length > 0) {
                            let a = "";
                            u.unFoundArray.forEach(g => {
                                a += `${g};`;
                            }), C.confirm(a, "提未查找到的产品编码示", {
                                confirmButtonText: "确 认",
                                cancelButtonText: "取 消"
                            }).then(async () => {});
                        } else C.success("授权成功"), D("refresh"), f.value = !1;
                    }
                    var e;
                });
            }, ae = () => {
                k.value.validate(async t => {
                    if (t) {
                        let u = await (e = {
                            authReqArray: p.value.pkgCodeArray.map(a => (a.pkgId = a.id, 
                            a.tenantId = n.query.id || "", a.pkgAuthStart = `${p.value.pkgAuthTime[0]} 00:00:00` || "", 
                            a.pkgAuthEnd = `${p.value.pkgAuthTime[1]} 00:00:00` || "", 
                            a.tenantCode = n.query.code || "", a.tenantName = w.value, 
                            a.pkgProductionCode = a.pkgProductionCode || a.productCode, 
                            a.pkgCode = a.pkgCode || a.code, a.pkgType = a.pkgType || 2, 
                            a.pkgLevel = a.pkgLevel || a.level, a)),
                            tenantId: n.query.id || "",
                            tenantCode: n.query.code || "",
                            tenantName: w.value,
                            pkgAuthStart: `${p.value.pkgAuthTime[0]} 00:00:00` || "",
                            pkgAuthEnd: `${p.value.pkgAuthTime[1]} 00:00:00` || ""
                        }, c.post({
                            url: "/resource/auth/create/retrieval",
                            data: e
                        }));
                        if (u.unFoundArray && u.unFoundArray.length > 0) {
                            let a = "";
                            u.unFoundArray.forEach(g => {
                                a += `${g};`;
                            }), C.confirm(a, "提未查找到的产品编码示", {
                                confirmButtonText: "确 认",
                                cancelButtonText: "取 消"
                            }).then(async () => {});
                        }
                        u.authFailArray && u.authFailArray.length > 0 ? C.error("授权失败") : (C.success("授权成功"), 
                        D("refresh"), f.value = !1);
                    }
                    var e;
                });
            }, te = () => {
                P.value.validate(async t => {
                    t && await (e = {
                        updateAuthArray: M.value.map(u => ({
                            id: u.id,
                            pkgAuthStart: `${i.value.pkgAuthTime[0]} 00:00:00`,
                            pkgAuthEnd: `${i.value.pkgAuthTime[1]} 00:00:00`
                        })),
                        tenantId: n.query.id || "",
                        tenantCode: n.query.code || "",
                        tenantName: w.value,
                        pkgAuthStart: `${i.value.pkgAuthTime[0]} 00:00:00`,
                        pkgAuthEnd: `${i.value.pkgAuthTime[1]} 00:00:00`
                    }, c.put({
                        url: "/resource/auth/update",
                        data: e
                    })) && (D("refresh"), _.value = !1);
                    var e;
                });
            }, x = d([]), B = () => {
                var t, e, u, a;
                (t = y.value) == null || t.resetFields(), (e = y.value) == null || e.clearValidate(), 
                (u = k.value) == null || u.resetFields(), (a = k.value) == null || a.clearValidate(), 
                A.value = "快速授权";
            }, le = [ {
                label: "资源类型",
                key: "pkgType",
                type: "list",
                default: 1,
                options: [ {
                    value: 1,
                    label: "课程资源"
                }, {
                    value: 2,
                    label: "项目资源"
                } ]
            } ], h = me({
                keywords: "",
                pkgType: "0"
            }), ue = t => {
                var e, u, a, g;
                Object.keys(h).forEach(m => h[m] = t[m]), (e = y.value) == null || e.resetFields(), 
                (u = y.value) == null || u.clearValidate(), (a = k.value) == null || a.resetFields(), 
                (g = k.value) == null || g.clearValidate(), R();
            }, R = async () => {
                var t;
                h.pkgType == "2" ? (t = {
                    creator: E.getUser.id,
                    keywords: h.keywords,
                    tenantId: n.query.id || "",
                    pkgType: h.pkgType
                }, c.get({
                    url: "/resource/auth/project/page",
                    params: t
                })).then(e => {
                    x.value = e.list.map(u => ({
                        pkgName: u.name,
                        pkgProductionCode: u.productCode,
                        ...u
                    })) || [];
                }) : function(e) {
                    return c.get({
                        url: "/resource/neu-pkg/course-list",
                        params: e
                    });
                }({
                    creator: E.getUser.id,
                    neuPkgName: h.keywords,
                    tenantId: "",
                    pkgType: h.pkgType
                }).then(e => {
                    x.value = e || [];
                });
            }, re = t => {
                X.value = t, p.value.pkgCodeArray = t;
            };
            return Q({
                openDialog: t => {
                    T.value = t.title, i.value.updateAuthArray = t.updateAuthArray ? t.updateAuthArray : [], 
                    w.value = t.tenantName, T.value == "新增授权" ? (f.value = !0, R()) : (M.value = t.chooseSelection, 
                    _.value = !0);
                }
            }), (t, e) => {
                const u = ke, a = fe, g = Ae, m = _e, $ = Te, U = Ce, oe = De, b = we, de = Ve, F = be, j = Fe;
                return V(), Y("div", null, [ l(j, {
                    modelValue: f.value,
                    "onUpdate:modelValue": e[5] || (e[5] = r => f.value = r),
                    scroll: !0,
                    "max-height": "290",
                    title: T.value,
                    width: "820",
                    onClose: B
                }, {
                    footer: o(() => [ l(F, {
                        type: "default",
                        onClick: e[4] || (e[4] = r => f.value = !1)
                    }, {
                        default: o(() => [ q("取消") ]),
                        _: 1
                    }), l(F, {
                        type: "primary",
                        onClick: Z
                    }, {
                        default: o(() => [ q("确定") ]),
                        _: 1
                    }) ]),
                    default: o(() => [ T.value != "更新授权" ? (V(), z(a, {
                        key: 0,
                        modelValue: A.value,
                        "onUpdate:modelValue": e[0] || (e[0] = r => A.value = r),
                        class: "right-tabs"
                    }, {
                        default: o(() => [ (V(), Y(ce, null, he(W, r => l(u, {
                            key: r,
                            name: r
                        }, {
                            label: o(() => [ ve("span", null, ye(r), 1) ]),
                            _: 2
                        }, 1032, [ "name" ])), 64)) ]),
                        _: 1
                    }, 8, [ "modelValue" ])) : I("", !0), A.value === "快速授权" ? (V(), 
                    z(U, {
                        key: 1,
                        ref_key: "speedyFormRef",
                        ref: y,
                        model: s.value
                    }, {
                        default: o(() => [ l(m, {
                            prop: "pkgCodeArray",
                            rules: [ {
                                required: !0,
                                trigger: [ "blur", "change" ],
                                message: "请填写资源产品编码"
                            }, {
                                max: 200,
                                message: "长度在100个字符以内",
                                trigger: "blur"
                            } ]
                        }, {
                            default: o(() => [ l(g, {
                                type: "textarea",
                                maxlength: "100",
                                size: "large",
                                rows: "14",
                                modelValue: s.value.pkgCodeArray,
                                "onUpdate:modelValue": e[1] || (e[1] = r => s.value.pkgCodeArray = r),
                                placeholder: "请输入资源产品编码，多个产品编码请使用英文 ; 隔开",
                                clearable: "",
                                style: {
                                    resize: "none"
                                }
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(m, {
                            label: "授权起止日期",
                            prop: "pkgAuthTime",
                            style: {
                                width: "393px"
                            },
                            rules: [ {
                                required: !0,
                                trigger: [ "blur", "change" ],
                                message: "请填写授权起止日期"
                            } ]
                        }, {
                            default: o(() => [ l($, {
                                modelValue: s.value.pkgAuthTime,
                                "onUpdate:modelValue": e[2] || (e[2] = r => s.value.pkgAuthTime = r),
                                "value-format": "YYYY-MM-DD",
                                type: "daterange",
                                "start-placeholder": "开始日期",
                                "end-placeholder": "结束日期",
                                "default-time": [ new Date("1 00:00:00"), new Date("1 23:59:59") ]
                            }, null, 8, [ "modelValue", "default-time" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ])) : I("", !0), A.value === "检索授权" ? (V(), 
                    Y("div", S, [ l(oe, {
                        searchList: le,
                        onHandleSearch: ue,
                        keywordsInfo: {
                            key: "keywords",
                            label: "资源名称/产品编码"
                        }
                    }), l(U, {
                        ref_key: "retrievalFormRef",
                        ref: k,
                        model: p.value,
                        class: "neu2"
                    }, {
                        default: o(() => [ l(m, {
                            prop: "pkgCodeArray",
                            rules: [ {
                                required: !0,
                                trigger: [ "blur", "change" ],
                                message: "请选择资源"
                            } ]
                        }, {
                            default: o(() => [ l(de, {
                                ref: "tableRef",
                                data: x.value,
                                height: "calc(100%)",
                                onSelectionChange: re
                            }, {
                                default: o(() => [ l(b, {
                                    type: "selection"
                                }), l(b, {
                                    type: "index",
                                    label: "序号",
                                    width: "52"
                                }), l(b, {
                                    label: "资源名称",
                                    prop: "pkgName",
                                    "show-overflow-tooltip": ""
                                }), l(b, {
                                    label: "产品编码",
                                    prop: "pkgProductionCode",
                                    "show-overflow-tooltip": ""
                                }) ]),
                                _: 1
                            }, 8, [ "data" ]) ]),
                            _: 1
                        }), l(m, {
                            label: "授权起止日期",
                            prop: "pkgAuthTime",
                            style: {
                                width: "393px"
                            },
                            rules: [ {
                                required: !0,
                                trigger: [ "blur", "change" ],
                                message: "请填写授权起止日期"
                            } ]
                        }, {
                            default: o(() => [ l($, {
                                modelValue: p.value.pkgAuthTime,
                                "onUpdate:modelValue": e[3] || (e[3] = r => p.value.pkgAuthTime = r),
                                "value-format": "YYYY-MM-DD",
                                type: "daterange",
                                "start-placeholder": "开始日期",
                                "end-placeholder": "结束日期",
                                "default-time": [ new Date("1 00:00:00"), new Date("1 23:59:59") ]
                            }, null, 8, [ "modelValue", "default-time" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ])) : I("", !0) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]), l(j, {
                    modelValue: _.value,
                    "onUpdate:modelValue": e[8] || (e[8] = r => _.value = r),
                    scroll: !0,
                    "max-height": "290",
                    title: T.value,
                    width: "420",
                    onClose: B
                }, {
                    footer: o(() => [ l(F, {
                        type: "default",
                        onClick: e[7] || (e[7] = r => _.value = !1)
                    }, {
                        default: o(() => [ q("取消") ]),
                        _: 1
                    }), l(F, {
                        type: "primary",
                        onClick: te
                    }, {
                        default: o(() => [ q("确定") ]),
                        _: 1
                    }) ]),
                    default: o(() => [ l(U, {
                        ref_key: "updateFormRef",
                        ref: P,
                        model: i.value
                    }, {
                        default: o(() => [ l(m, {
                            label: "授权起止日期",
                            prop: "pkgAuthTime",
                            rules: [ {
                                required: !0,
                                trigger: [ "blur", "change" ],
                                message: "请填写授权起止日期"
                            } ]
                        }, {
                            default: o(() => [ l($, {
                                modelValue: i.value.pkgAuthTime,
                                "onUpdate:modelValue": e[6] || (e[6] = r => i.value.pkgAuthTime = r),
                                "value-format": "YYYY-MM-DD",
                                type: "daterange",
                                "start-placeholder": "开始日期",
                                "end-placeholder": "结束日期",
                                "default-time": [ new Date("1 00:00:00"), new Date("1 23:59:59") ]
                            }, null, 8, [ "modelValue", "default-time" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-7e852acd" ] ]), O = Object.defineProperty({
        __proto__: null,
        default: N
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    Ue as __tla,
    N as a,
    L as b,
    O as c,
    H as d,
    J as g
};