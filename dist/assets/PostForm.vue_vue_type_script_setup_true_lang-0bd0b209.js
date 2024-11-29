import {
    a7 as n,
    d as D,
    aa as j,
    p as z,
    r as i,
    U as J,
    o as _,
    C as f,
    l as r,
    k as s,
    v as h,
    a,
    A as Q,
    c as R,
    F as G,
    y as H,
    m as I,
    P as K,
    O as W,
    ab as X,
    ac as Y,
    Q as Z,
    J as $,
    aU as ee,
    a9 as ae,
    __tla as le
} from "./index-6c08ea4c.js";

import {
    b as te,
    D as se,
    __tla as re
} from "./dict-c5825220.js";

import {
    C as k
} from "./constants-528bd83f.js";

let U, E, S, q, oe = Promise.all([ (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})() ]).then(async () => {
    q = async u => await n.get({
        url: "/system/post/page",
        params: u
    }), E = async u => await n.delete({
        url: "/system/post/delete?id=" + u
    }), S = async u => await n.download({
        url: "/system/post/export",
        params: u
    }), U = D({
        name: "SystemPostForm",
        __name: "PostForm",
        emits: [ "success" ],
        setup(u, {
            expose: x,
            emit: A
        }) {
            const {
                t: v
            } = j(), g = z(), d = i(!1), V = i(""), m = i(!1), b = i(""), t = i({
                id: void 0,
                name: "",
                code: "",
                sort: 0,
                status: k.ENABLE,
                remark: ""
            }), C = J({
                name: [ {
                    required: !0,
                    message: "岗位标题不能为空",
                    trigger: "blur"
                } ],
                code: [ {
                    required: !0,
                    message: "岗位编码不能为空",
                    trigger: "change"
                } ],
                status: [ {
                    required: !0,
                    message: "岗位状态不能为空",
                    trigger: "change"
                } ],
                remark: [ {
                    required: !1,
                    message: "岗位内容不能为空",
                    trigger: "blur"
                } ]
            }), y = i();
            x({
                open: async (o, e) => {
                    if (d.value = !0, V.value = v("action." + o), b.value = o, N(), 
                    e) {
                        m.value = !0;
                        try {
                            t.value = await (async c => await n.get({
                                url: "/system/post/get?id=" + c
                            }))(e);
                        } finally {
                            m.value = !1;
                        }
                    }
                }
            });
            const F = A, P = async () => {
                if (y && await y.value.validate()) {
                    m.value = !0;
                    try {
                        const o = t.value;
                        b.value === "create" ? (await (async e => await n.post({
                            url: "/system/post/create",
                            data: e
                        }))(o), g.success(v("common.createSuccess"))) : (await (async e => await n.put({
                            url: "/system/post/update",
                            data: e
                        }))(o), g.success(v("common.updateSuccess"))), d.value = !1, 
                        F("success");
                    } finally {
                        m.value = !1;
                    }
                }
            }, N = () => {
                var o;
                t.value = {
                    id: void 0,
                    name: "",
                    code: "",
                    sort: void 0,
                    status: k.ENABLE,
                    remark: ""
                }, (o = y.value) == null || o.resetFields();
            };
            return (o, e) => {
                const c = K, p = W, O = X, B = Y, L = Z, w = $, M = ee, T = ae;
                return _(), f(M, {
                    modelValue: a(d),
                    "onUpdate:modelValue": e[6] || (e[6] = l => I(d) ? d.value = l : null),
                    title: a(V),
                    width: "800"
                }, {
                    footer: r(() => [ s(w, {
                        onClick: e[5] || (e[5] = l => d.value = !1)
                    }, {
                        default: r(() => [ h("取 消") ]),
                        _: 1
                    }), s(w, {
                        disabled: a(m),
                        type: "primary",
                        onClick: P
                    }, {
                        default: r(() => [ h("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: r(() => [ Q((_(), f(L, {
                        ref_key: "formRef",
                        ref: y,
                        model: a(t),
                        rules: a(C),
                        "label-width": "80px"
                    }, {
                        default: r(() => [ s(p, {
                            label: "岗位标题",
                            prop: "name"
                        }, {
                            default: r(() => [ s(c, {
                                modelValue: a(t).name,
                                "onUpdate:modelValue": e[0] || (e[0] = l => a(t).name = l),
                                placeholder: "请输入岗位标题"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(p, {
                            label: "岗位编码",
                            prop: "code"
                        }, {
                            default: r(() => [ s(c, {
                                modelValue: a(t).code,
                                "onUpdate:modelValue": e[1] || (e[1] = l => a(t).code = l),
                                placeholder: "请输入岗位编码"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(p, {
                            label: "岗位顺序",
                            prop: "sort"
                        }, {
                            default: r(() => [ s(c, {
                                modelValue: a(t).sort,
                                "onUpdate:modelValue": e[2] || (e[2] = l => a(t).sort = l),
                                placeholder: "请输入岗位顺序"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(p, {
                            label: "状态",
                            prop: "status"
                        }, {
                            default: r(() => [ s(B, {
                                modelValue: a(t).status,
                                "onUpdate:modelValue": e[3] || (e[3] = l => a(t).status = l),
                                clearable: "",
                                placeholder: "请选择状态"
                            }, {
                                default: r(() => [ (_(!0), R(G, null, H(a(te)(a(se).COMMON_STATUS), l => (_(), 
                                f(O, {
                                    key: l.value,
                                    label: l.label,
                                    value: l.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(p, {
                            label: "备注",
                            prop: "remark"
                        }, {
                            default: r(() => [ s(c, {
                                modelValue: a(t).remark,
                                "onUpdate:modelValue": e[4] || (e[4] = l => a(t).remark = l),
                                placeholder: "请输备注",
                                type: "textarea"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ T, a(m) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    });
});

export {
    U as _,
    oe as __tla,
    E as d,
    S as e,
    q as g
};