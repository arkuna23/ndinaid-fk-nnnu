import {
    a7 as m,
    d as N,
    aa as z,
    p as T,
    r as b,
    U as B,
    o as t,
    C as d,
    l as r,
    k as s,
    v as _,
    a as e,
    A as H,
    c as M,
    F as W,
    y as X,
    D as c,
    m as Y,
    P as Z,
    O as $,
    ab as ee,
    ac as le,
    cK as ae,
    bp as oe,
    bq as re,
    Q as se,
    J as te,
    aU as ue,
    a9 as de,
    __tla as ie
} from "./index-6c08ea4c.js";

import {
    c as ce,
    D as ne,
    __tla as ge
} from "./dict-c5825220.js";

let S, w, F, K, P, me = Promise.all([ (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return ge;
    } catch {}
})() ]).then(async () => {
    F = g => m.get({
        url: "/infra/file-config/page",
        params: g
    }), P = g => m.put({
        url: "/infra/file-config/update-master?id=" + g
    }), w = g => m.delete({
        url: "/infra/file-config/delete?id=" + g
    }), K = g => m.get({
        url: "/infra/file-config/test?id=" + g
    }), S = N({
        name: "InfraFileConfigForm",
        __name: "FileConfigForm",
        emits: [ "success" ],
        setup(g, {
            expose: C,
            emit: I
        }) {
            const {
                t: y
            } = z(), k = T(), f = b(!1), v = b(""), p = b(!1), h = b(""), l = b({
                id: void 0,
                name: "",
                storage: 0,
                remark: "",
                config: {}
            }), A = B({
                name: [ {
                    required: !0,
                    message: "配置名不能为空",
                    trigger: "blur"
                } ],
                storage: [ {
                    required: !0,
                    message: "存储器不能为空",
                    trigger: "change"
                } ],
                config: {
                    basePath: [ {
                        required: !0,
                        message: "基础路径不能为空",
                        trigger: "blur"
                    } ],
                    host: [ {
                        required: !0,
                        message: "主机地址不能为空",
                        trigger: "blur"
                    } ],
                    port: [ {
                        required: !0,
                        message: "主机端口不能为空",
                        trigger: "blur"
                    } ],
                    username: [ {
                        required: !0,
                        message: "用户名不能为空",
                        trigger: "blur"
                    } ],
                    password: [ {
                        required: !0,
                        message: "密码不能为空",
                        trigger: "blur"
                    } ],
                    mode: [ {
                        required: !0,
                        message: "连接模式不能为空",
                        trigger: "change"
                    } ],
                    endpoint: [ {
                        required: !0,
                        message: "节点地址不能为空",
                        trigger: "blur"
                    } ],
                    bucket: [ {
                        required: !0,
                        message: "存储 bucket 不能为空",
                        trigger: "blur"
                    } ],
                    accessKey: [ {
                        required: !0,
                        message: "accessKey 不能为空",
                        trigger: "blur"
                    } ],
                    accessSecret: [ {
                        required: !0,
                        message: "accessSecret 不能为空",
                        trigger: "blur"
                    } ],
                    domain: [ {
                        required: !0,
                        message: "自定义域名不能为空",
                        trigger: "blur"
                    } ]
                }
            }), V = b();
            C({
                open: async (n, a) => {
                    if (f.value = !0, v.value = y("action." + n), h.value = n, O(), 
                    a) {
                        p.value = !0;
                        try {
                            l.value = await (i => m.get({
                                url: "/infra/file-config/get?id=" + i
                            }))(a);
                        } finally {
                            p.value = !1;
                        }
                    }
                }
            });
            const R = I, x = async () => {
                if (V && await V.value.validate()) {
                    p.value = !0;
                    try {
                        const n = l.value;
                        h.value === "create" ? (await (a => m.post({
                            url: "/infra/file-config/create",
                            data: a
                        }))(n), k.success(y("common.createSuccess"))) : (await (a => m.put({
                            url: "/infra/file-config/update",
                            data: a
                        }))(n), k.success(y("common.updateSuccess"))), f.value = !1, 
                        R("success");
                    } finally {
                        p.value = !1;
                    }
                }
            }, O = () => {
                var n;
                l.value = {
                    id: void 0,
                    name: "",
                    storage: void 0,
                    remark: "",
                    config: {}
                }, (n = V.value) == null || n.resetFields();
            };
            return (n, a) => {
                const i = Z, u = $, D = ee, E = le, L = ae, U = oe, Q = re, j = se, q = te, G = ue, J = de;
                return t(), d(G, {
                    modelValue: e(f),
                    "onUpdate:modelValue": a[16] || (a[16] = o => Y(f) ? f.value = o : null),
                    title: e(v)
                }, {
                    footer: r(() => [ s(q, {
                        onClick: a[15] || (a[15] = o => f.value = !1)
                    }, {
                        default: r(() => [ _("取 消") ]),
                        _: 1
                    }), s(q, {
                        disabled: e(p),
                        type: "primary",
                        onClick: x
                    }, {
                        default: r(() => [ _("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: r(() => [ H((t(), d(j, {
                        ref_key: "formRef",
                        ref: V,
                        model: e(l),
                        rules: e(A),
                        "label-width": "120px"
                    }, {
                        default: r(() => [ s(u, {
                            label: "配置名",
                            prop: "name"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).name,
                                "onUpdate:modelValue": a[0] || (a[0] = o => e(l).name = o),
                                placeholder: "请输入配置名"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(u, {
                            label: "备注",
                            prop: "remark"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).remark,
                                "onUpdate:modelValue": a[1] || (a[1] = o => e(l).remark = o),
                                placeholder: "请输入备注"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(u, {
                            label: "存储器",
                            prop: "storage"
                        }, {
                            default: r(() => [ s(E, {
                                modelValue: e(l).storage,
                                "onUpdate:modelValue": a[2] || (a[2] = o => e(l).storage = o),
                                disabled: e(l).id !== void 0,
                                placeholder: "请选择存储器"
                            }, {
                                default: r(() => [ (t(!0), M(W, null, X(e(ce)(e(ne).INFRA_FILE_STORAGE), o => (t(), 
                                d(D, {
                                    key: o.value,
                                    label: o.label,
                                    value: parseInt(o.value)
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), e(l).storage >= 10 && e(l).storage <= 12 ? (t(), d(u, {
                            key: 0,
                            label: "基础路径",
                            prop: "config.basePath"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).config.basePath,
                                "onUpdate:modelValue": a[3] || (a[3] = o => e(l).config.basePath = o),
                                placeholder: "请输入基础路径"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : c("", !0), e(l).storage >= 11 && e(l).storage <= 12 ? (t(), 
                        d(u, {
                            key: 1,
                            label: "主机地址",
                            prop: "config.host"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).config.host,
                                "onUpdate:modelValue": a[4] || (a[4] = o => e(l).config.host = o),
                                placeholder: "请输入主机地址"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : c("", !0), e(l).storage >= 11 && e(l).storage <= 12 ? (t(), 
                        d(u, {
                            key: 2,
                            label: "主机端口",
                            prop: "config.port"
                        }, {
                            default: r(() => [ s(L, {
                                modelValue: e(l).config.port,
                                "onUpdate:modelValue": a[5] || (a[5] = o => e(l).config.port = o),
                                min: 0,
                                placeholder: "请输入主机端口"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : c("", !0), e(l).storage >= 11 && e(l).storage <= 12 ? (t(), 
                        d(u, {
                            key: 3,
                            label: "用户名",
                            prop: "config.username"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).config.username,
                                "onUpdate:modelValue": a[6] || (a[6] = o => e(l).config.username = o),
                                placeholder: "请输入密码"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : c("", !0), e(l).storage >= 11 && e(l).storage <= 12 ? (t(), 
                        d(u, {
                            key: 4,
                            label: "密码",
                            prop: "config.password"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).config.password,
                                "onUpdate:modelValue": a[7] || (a[7] = o => e(l).config.password = o),
                                placeholder: "请输入密码"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : c("", !0), e(l).storage === 11 ? (t(), d(u, {
                            key: 5,
                            label: "连接模式",
                            prop: "config.mode"
                        }, {
                            default: r(() => [ s(Q, {
                                modelValue: e(l).config.mode,
                                "onUpdate:modelValue": a[8] || (a[8] = o => e(l).config.mode = o)
                            }, {
                                default: r(() => [ s(U, {
                                    key: "Active",
                                    label: "Active"
                                }, {
                                    default: r(() => [ _("主动模式") ]),
                                    _: 1
                                }), s(U, {
                                    key: "Passive",
                                    label: "Passive"
                                }, {
                                    default: r(() => [ _("被动模式") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : c("", !0), e(l).storage === 20 ? (t(), d(u, {
                            key: 6,
                            label: "节点地址",
                            prop: "config.endpoint"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).config.endpoint,
                                "onUpdate:modelValue": a[9] || (a[9] = o => e(l).config.endpoint = o),
                                placeholder: "请输入节点地址"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : c("", !0), e(l).storage === 20 ? (t(), d(u, {
                            key: 7,
                            label: "存储 bucket",
                            prop: "config.bucket"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).config.bucket,
                                "onUpdate:modelValue": a[10] || (a[10] = o => e(l).config.bucket = o),
                                placeholder: "请输入 bucket"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : c("", !0), e(l).storage === 20 ? (t(), d(u, {
                            key: 8,
                            label: "accessKey",
                            prop: "config.accessKey"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).config.accessKey,
                                "onUpdate:modelValue": a[11] || (a[11] = o => e(l).config.accessKey = o),
                                placeholder: "请输入 accessKey"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : c("", !0), e(l).storage === 20 ? (t(), d(u, {
                            key: 9,
                            label: "accessSecret",
                            prop: "config.accessSecret"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).config.accessSecret,
                                "onUpdate:modelValue": a[12] || (a[12] = o => e(l).config.accessSecret = o),
                                placeholder: "请输入 accessSecret"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : c("", !0), e(l).storage === 20 ? (t(), d(u, {
                            key: 10,
                            label: "自定义域名"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).config.domain,
                                "onUpdate:modelValue": a[13] || (a[13] = o => e(l).config.domain = o),
                                placeholder: "请输入自定义域名"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : e(l).storage ? (t(), d(u, {
                            key: 11,
                            label: "自定义域名",
                            prop: "config.domain"
                        }, {
                            default: r(() => [ s(i, {
                                modelValue: e(l).config.domain,
                                "onUpdate:modelValue": a[14] || (a[14] = o => e(l).config.domain = o),
                                placeholder: "请输入自定义域名"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : c("", !0) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ J, e(p) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    });
});

export {
    S as _,
    me as __tla,
    w as d,
    F as g,
    K as t,
    P as u
};