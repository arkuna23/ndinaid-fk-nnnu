import {
    r as f,
    U as F,
    e as N,
    j as $,
    o as m,
    C as g,
    l as o,
    t as j,
    k as r,
    v as V,
    A as J,
    c as w,
    F as h,
    y as k,
    a as O,
    ab as Q,
    ac as B,
    O as G,
    av as H,
    P as I,
    aw as K,
    Q as L,
    J as R,
    aU as W,
    __tla as X
} from "./index-6c08ea4c.js";

import {
    b as Y,
    __tla as Z
} from "./databaseConfig-a0b3f7be.js";

import {
    i as ee
} from "./validate-b72f006c.js";

let U, ae = Promise.all([ (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})() ]).then(async () => {
    let _;
    _ = {
        class: "dialog-footer"
    }, U = {
        __name: "addDatabase",
        emits: [ "createAuth" ],
        setup(le, {
            expose: x,
            emit: S
        }) {
            const M = S, t = f(), P = () => {
                t.value && t.value.validate(s => {
                    if (!s) return !1;
                    M("createAuth", {
                        ...a
                    }, p);
                });
            }, a = F({
                visible: !1,
                title: "数据库创建",
                password: "",
                confirmPassword: "",
                dbType: "",
                maxMemory: 0,
                maxMemoryUnit: "",
                diskSpace: 0,
                diskSpaceUnit: "",
                dbVersion: ""
            }), i = f({
                ram: "",
                rom: ""
            }), b = f([]), T = {
                dbType: [ {
                    required: !0,
                    message: "请选择数据库类型",
                    trigger: "change"
                } ],
                maxMemory: [ {
                    required: !0,
                    message: "请选择内存上限",
                    trigger: "change"
                } ],
                diskSpace: [ {
                    required: !0,
                    message: "请选择硬盘空间",
                    trigger: "change"
                } ],
                password: [ {
                    required: !0,
                    validator: (s, e, d) => {
                        if (e === "") d(new Error("请输入密码")); else {
                            if (a.confirmPassword !== "") {
                                if (!t.value) return;
                                t.value.validateField("checkPass", () => null);
                            }
                            d();
                        }
                    },
                    trigger: "blur"
                }, {
                    min: 8,
                    max: 16,
                    message: "长度在 8 到 16 个字符",
                    trigger: "blur"
                }, {
                    pattern: /^[^\s]+$/,
                    message: "不允许输入空格",
                    trigger: "blur"
                }, {
                    validator: (s, e, d) => {
                        ee(e) ? d() : d(new Error("密码必须由数字、大小写字母、特殊字符组合"));
                    },
                    trigger: "blur"
                } ],
                confirmPassword: [ {
                    required: !0,
                    validator: (s, e, d) => {
                        e === "" ? d(new Error("请再次输入密码")) : e !== a.password ? d(new Error("两次密码输入不一致!")) : d();
                    },
                    trigger: "blur"
                } ],
                authorizedNumber: [ {
                    required: !0,
                    message: "请输入最大使用人数",
                    trigger: "change"
                }, {
                    pattern: /^\d+$/,
                    message: "请输入正整数",
                    trigger: "blur"
                } ],
                dbVersion: [ {
                    required: !0,
                    message: "请选择版本号",
                    trigger: "change"
                } ]
            }, p = () => {
                t.value.resetFields(), a.visible = !1;
            }, q = async () => {
                const s = await Y({
                    type: "database",
                    noType: ""
                });
                s && (b.value = s);
            }, z = N(() => {
                var e;
                const {
                    list: s
                } = ((e = b.value.filter(d => d.name === a.dbType)) == null ? void 0 : e.pop()) || [];
                return s;
            });
            return x({
                openDialog: s => {
                    a.maxMemory = s.maxMemory, a.maxMemoryUnit = s.maxMemoryUnit, 
                    a.diskSpace = s.diskSpace, a.diskSpaceUnit = s.diskSpaceUnit, 
                    a.dbType = s.spaceType, i.value.ram = s.maxMemory + s.maxMemoryUnit, 
                    i.value.rom = s.diskSpace + s.diskSpaceUnit, a.visible = !0, 
                    q();
                },
                closeDialog: p
            }), (s, e) => {
                const d = Q, y = B, u = G, n = H, c = I, C = K, D = L, v = R, E = W, A = $("debounce");
                return m(), g(E, {
                    modelValue: a.visible,
                    "onUpdate:modelValue": e[6] || (e[6] = l => a.visible = l),
                    title: a.title,
                    width: "700px",
                    onClosed: p
                }, {
                    footer: o(() => [ j("span", _, [ r(v, {
                        onClick: p
                    }, {
                        default: o(() => [ V("取消") ]),
                        _: 1
                    }), J((m(), g(v, {
                        type: "primary",
                        onClick: P
                    }, {
                        default: o(() => [ V("确认") ]),
                        _: 1
                    })), [ [ A, {
                        eventName: "click",
                        delay: 3e3
                    } ] ]) ]) ]),
                    default: o(() => [ r(D, {
                        ref_key: "formDialog",
                        ref: t,
                        model: a,
                        rules: T,
                        class: "neu"
                    }, {
                        default: o(() => [ r(C, null, {
                            default: o(() => [ r(n, {
                                span: 24
                            }, {
                                default: o(() => [ r(u, {
                                    label: "数据库类型",
                                    prop: "dbType"
                                }, {
                                    default: o(() => [ r(y, {
                                        modelValue: a.dbType,
                                        "onUpdate:modelValue": e[0] || (e[0] = l => a.dbType = l),
                                        size: "large",
                                        disabled: !0
                                    }, {
                                        default: o(() => [ (m(!0), w(h, null, k(b.value, l => (m(), 
                                        g(d, {
                                            key: l.name,
                                            label: l.name,
                                            value: l.name
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(n, {
                                span: 24
                            }, {
                                default: o(() => [ r(u, {
                                    label: "版本号",
                                    prop: "dbVersion"
                                }, {
                                    default: o(() => [ r(y, {
                                        modelValue: a.dbVersion,
                                        "onUpdate:modelValue": e[1] || (e[1] = l => a.dbVersion = l),
                                        size: "large"
                                    }, {
                                        default: o(() => [ (m(!0), w(h, null, k(O(z), l => (m(), 
                                        g(d, {
                                            key: l.componentVersion,
                                            label: l.componentVersion,
                                            value: l.componentVersion
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(n, {
                                span: 24
                            }, {
                                default: o(() => [ r(u, {
                                    label: "内存上限",
                                    prop: "maxMemory"
                                }, {
                                    default: o(() => [ r(c, {
                                        modelValue: i.value.ram,
                                        "onUpdate:modelValue": e[2] || (e[2] = l => i.value.ram = l),
                                        class: "neu",
                                        size: "large",
                                        disabled: !0
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(n, {
                                span: 24
                            }, {
                                default: o(() => [ r(u, {
                                    label: "硬盘空间",
                                    prop: "diskSpace"
                                }, {
                                    default: o(() => [ r(c, {
                                        modelValue: i.value.rom,
                                        "onUpdate:modelValue": e[3] || (e[3] = l => i.value.rom = l),
                                        class: "neu",
                                        size: "large",
                                        disabled: !0
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(n, {
                                span: 24
                            }, {
                                default: o(() => [ r(u, {
                                    label: "密码设置",
                                    prop: "password"
                                }, {
                                    default: o(() => [ r(c, {
                                        modelValue: a.password,
                                        "onUpdate:modelValue": e[4] || (e[4] = l => a.password = l),
                                        size: "large",
                                        type: "password",
                                        "show-password": "",
                                        placeholder: "请输入8-16位密码"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(n, {
                                span: 24
                            }, {
                                default: o(() => [ r(u, {
                                    label: "确认密码",
                                    prop: "confirmPassword"
                                }, {
                                    default: o(() => [ r(c, {
                                        modelValue: a.confirmPassword,
                                        "onUpdate:modelValue": e[5] || (e[5] = l => a.confirmPassword = l),
                                        size: "large",
                                        type: "password",
                                        "show-password": "",
                                        placeholder: "请确认密码"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    };
});

export {
    ae as __tla,
    U as default
};