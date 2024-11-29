import {
    a7 as m,
    aO as fe,
    a as e,
    r as p,
    U as be,
    e as Q,
    aT as ye,
    o as _,
    c as C,
    t as l,
    k as o,
    l as r,
    v as M,
    F as X,
    y as Y,
    C as G,
    m as ve,
    B as b,
    z as _e,
    A as Ve,
    fq as we,
    ab as xe,
    ac as he,
    O as ke,
    P as Ue,
    _ as Se,
    Q as Ce,
    J as Me,
    aU as Te,
    R as Pe,
    S as qe,
    __tla as ze
} from "./index-6c08ea4c.js";

import {
    t as H
} from "./formatter-7ecf379a.js";

import {
    i as De
} from "./validate-b72f006c.js";

import {
    _ as Oe
} from "./_plugin-vue_export-helper-1b428a4d.js";

let K, L, W, T, Z, ee, ae, le, je = Promise.all([ (() => {
    try {
        return ze;
    } catch {}
})() ]).then(async () => {
    ae = function(u) {
        return m.get({
            url: "/exp/pip-db-config/list",
            params: u
        });
    }, K = function(u) {
        return m.post({
            url: "/exp/pip-db-config/add",
            data: u
        });
    }, L = function(u) {
        return m.put({
            url: `/exp/pip-db-config/delete/${u}`
        });
    }, W = function(u) {
        return m.get({
            url: "/exp/pip-space-config/get-space-config",
            params: u
        });
    }, ee = function(u) {
        return m.post({
            url: "/exp/pip-space-config/add",
            data: u
        });
    }, Z = function(u) {
        return m.put({
            url: "/exp/pip-space-config/edit",
            data: u
        });
    };
    let c, P, q, z, D, O, j, A, F, I, N;
    c = u => (Pe("data-v-48cfe668"), u = u(), qe(), u), P = {
        class: "content"
    }, q = {
        class: "viewContent"
    }, z = c(() => l("span", null, "数据库类型:", -1)), D = c(() => l("span", null, "版本号:", -1)), 
    O = c(() => l("span", null, "内存上限:", -1)), j = c(() => l("span", null, "硬盘空间:", -1)), 
    A = c(() => l("span", null, "数据库地址:", -1)), F = c(() => l("span", null, "数据库用户名:", -1)), 
    I = c(() => l("span", null, "密码:", -1)), N = [ "type" ], T = Oe({
        __name: "dbConfigDialog",
        emits: [ "createAuth" ],
        setup(u, {
            expose: se,
            emit: ne
        }) {
            fe(n => ({
                "0e68776c": e(re)
            }));
            const d = p(), oe = p(), h = p(), y = p(!1), V = p(!1), g = p({
                ram: "",
                rom: ""
            }), t = be({
                password: "",
                confirmPassword: "",
                dbType: "",
                maxMemory: 0,
                maxMemoryUnit: "",
                diskSpace: 0,
                diskSpaceUnit: "",
                dbVersion: ""
            }), v = p(!1), w = p(!1), k = p(!1), re = Q(() => 7 * Object.toString(d.password).length + "px"), te = ne, $ = () => {
                h.value.resetFields();
            }, E = () => {
                y.value = !1, $();
            }, ue = () => {
                V.value = !1;
            }, de = () => {
                var n;
                (n = h.value) == null || n.validate(a => {
                    a && te("createAuth", {
                        ...t
                    }, E);
                });
            }, ie = p({
                dbType: [ {
                    required: !0,
                    message: "请选择数据库类型",
                    trigger: [ "blur", "change" ]
                } ],
                password: [ {
                    pattern: /^[^\s]+$/,
                    message: "不允许输入空格",
                    trigger: [ "blur", "change" ]
                }, {
                    required: !0,
                    message: "密码不能为空",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 6,
                    max: 20,
                    message: "密码长度应为6～20位",
                    trigger: [ "blur", "change" ]
                }, {
                    validator: (n, a, i) => {
                        De(a) ? i() : i(new Error("密码必须由数字、大小写字母、特殊字符组合"));
                    }
                } ],
                confirmPassword: [ {
                    required: !0,
                    message: "请再次输入密码",
                    trigger: [ "blur", "change" ]
                }, {
                    validator: (n, a, i) => {
                        a !== t.password ? i(new Error("两次输入的密码不一致")) : i();
                    },
                    trigger: [ "blur", "change" ]
                } ],
                dbVersion: [ {
                    required: !0,
                    message: "请选择版本号",
                    trigger: "change"
                } ]
            }), U = p([]), pe = async () => {
                const n = await (a = {
                    type: "database",
                    noType: ""
                }, m.get({
                    url: "/env-api/ci-processor/cim/component/message/obj",
                    params: a
                }));
                var a;
                n && (U.value = n);
            }, ce = Q(() => {
                var a;
                const {
                    list: n
                } = ((a = U.value.filter(i => i.name === t.dbType)) == null ? void 0 : a.pop()) || [];
                return n;
            });
            return se({
                openDbConfigDialog: n => {
                    t.maxMemory = n.maxMemory, t.maxMemoryUnit = n.maxMemoryUnit, 
                    t.diskSpace = n.diskSpace, t.diskSpaceUnit = n.diskSpaceUnit, 
                    t.dbType = n.spaceType, g.value.ram = n.maxMemory + n.maxMemoryUnit, 
                    g.value.rom = n.diskSpace + n.diskSpaceUnit, y.value = !0, pe();
                },
                openViewDialog: n => {
                    var a;
                    (a = n.dbId, m.get({
                        url: `/exp/pip-db-config/${a}`
                    })).then(i => {
                        d.value = i, V.value = !0;
                    });
                }
            }), (n, a) => {
                const i = xe, R = he, f = ke, x = Ue, me = ye("svg-icon"), B = Se, ge = Ce, S = Me, J = Te;
                return _(), C("div", null, [ l("div", null, [ o(J, {
                    title: "数据库创建",
                    modelValue: e(y),
                    "onUpdate:modelValue": a[8] || (a[8] = s => ve(y) ? y.value = s : null),
                    width: "700px",
                    onClose: $
                }, {
                    footer: r(() => [ o(S, {
                        type: "default",
                        onClick: E
                    }, {
                        default: r(() => [ M("取消") ]),
                        _: 1
                    }), o(S, {
                        type: "primary",
                        onClick: de
                    }, {
                        default: r(() => [ M("确认") ]),
                        _: 1
                    }) ]),
                    default: r(() => [ l("div", P, [ o(ge, {
                        model: e(t),
                        ref_key: "addFormRef",
                        ref: h,
                        rules: e(ie),
                        inline: !1,
                        class: "neu"
                    }, {
                        default: r(() => [ o(f, {
                            label: "数据库类型",
                            prop: "dbType"
                        }, {
                            default: r(() => [ o(R, {
                                class: "neu",
                                modelValue: e(t).dbType,
                                "onUpdate:modelValue": a[0] || (a[0] = s => e(t).dbType = s),
                                disabled: !0,
                                placeholder: "请选择",
                                onChange: n.handleSelect,
                                size: "default",
                                clearable: ""
                            }, {
                                default: r(() => [ (_(!0), C(X, null, Y(e(U), s => (_(), 
                                G(i, {
                                    key: s.name,
                                    label: s.name,
                                    value: s.name
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue", "onChange" ]) ]),
                            _: 1
                        }), o(f, {
                            label: "版本号",
                            prop: "dbVersion"
                        }, {
                            default: r(() => [ o(R, {
                                modelValue: e(t).dbVersion,
                                "onUpdate:modelValue": a[1] || (a[1] = s => e(t).dbVersion = s),
                                size: "large",
                                class: "neu"
                            }, {
                                default: r(() => [ (_(!0), C(X, null, Y(e(ce), s => (_(), 
                                G(i, {
                                    key: s.componentVersion,
                                    label: s.componentVersion,
                                    value: s.componentVersion
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), o(f, {
                            label: "内存上限："
                        }, {
                            default: r(() => [ o(x, {
                                modelValue: e(g).ram,
                                "onUpdate:modelValue": a[2] || (a[2] = s => e(g).ram = s),
                                class: "neu",
                                size: "large",
                                disabled: !0
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), o(f, {
                            label: "磁盘空间："
                        }, {
                            default: r(() => [ o(x, {
                                modelValue: e(g).rom,
                                "onUpdate:modelValue": a[3] || (a[3] = s => e(g).rom = s),
                                class: "neu",
                                size: "large",
                                disabled: !0
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), o(f, {
                            label: "密码设置",
                            prop: "password"
                        }, {
                            default: r(() => [ o(x, {
                                modelValue: e(t).password,
                                "onUpdate:modelValue": a[5] || (a[5] = s => e(t).password = s),
                                class: "neu",
                                type: e(w) ? "text" : "password",
                                placeholder: "请设置6～20位密码"
                            }, {
                                suffix: r(() => [ o(me, {
                                    iconName: e(w) ? "eye-open" : "eye-close",
                                    onClick: a[4] || (a[4] = s => w.value = !e(w))
                                }, null, 8, [ "iconName" ]) ]),
                                _: 1
                            }, 8, [ "modelValue", "type" ]) ]),
                            _: 1
                        }), o(f, {
                            label: "确认密码",
                            prop: "confirmPassword"
                        }, {
                            default: r(() => [ o(x, {
                                modelValue: e(t).confirmPassword,
                                "onUpdate:modelValue": a[7] || (a[7] = s => e(t).confirmPassword = s),
                                class: "neu",
                                type: "password",
                                placeholder: "请确认密码"
                            }, {
                                suffix: r(() => [ o(B, {
                                    icon: e(k) ? "svg-icon:eye-open" : "svg-icon:eye-close",
                                    onClick: a[6] || (a[6] = s => k.value = !e(k))
                                }, null, 8, [ "icon" ]) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), l("div", null, [ o(J, {
                    title: "信息查看",
                    "model-value": e(V),
                    width: "550px",
                    onClose: ue
                }, {
                    footer: r(() => [ o(S, {
                        type: "primary",
                        onClick: a[11] || (a[11] = s => V.value = !1)
                    }, {
                        default: r(() => [ M("关闭") ]),
                        _: 1
                    }) ]),
                    default: r(() => [ l("div", q, [ l("ul", null, [ l("li", null, [ z, l("span", null, b(e(H)(e(d).dbType)), 1) ]), l("li", null, [ D, l("span", null, b(e(H)(e(d).dbVersion)), 1) ]), l("li", null, [ O, l("span", null, b(e(d).maxMemory + e(d).maxMemoryUnit), 1) ]), l("li", null, [ j, l("span", null, b(e(d).diskSpace + e(d).diskSpaceUnit), 1) ]), l("li", null, [ A, l("span", null, b(e(d).dbUrl), 1) ]), l("li", null, [ F, l("span", null, b(e(d).userName ?? "root"), 1) ]), l("li", null, [ I, l("span", {
                        class: _e([ "password-input", {
                            "password-visible": e(v)
                        } ])
                    }, [ Ve(l("input", {
                        ref_key: "passwordInput",
                        ref: oe,
                        "onUpdate:modelValue": a[9] || (a[9] = s => e(d).password = s),
                        type: e(v) ? "text" : "password",
                        disabled: !0
                    }, null, 8, N), [ [ we, e(d).password ] ]), l("div", {
                        class: "password-toggle",
                        onClick: a[10] || (a[10] = s => v.value = !e(v))
                    }, [ o(B, {
                        icon: e(v) ? "svg-icon:eye-open" : "svg-icon:eye-close"
                    }, null, 8, [ "icon" ]) ]) ], 2) ]) ]) ]) ]),
                    _: 1
                }, 8, [ "model-value" ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-48cfe668" ] ]), le = Object.defineProperty({
        __proto__: null,
        default: T
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    je as __tla,
    K as a,
    L as b,
    W as c,
    T as d,
    Z as e,
    ee as f,
    ae as g,
    le as h
};