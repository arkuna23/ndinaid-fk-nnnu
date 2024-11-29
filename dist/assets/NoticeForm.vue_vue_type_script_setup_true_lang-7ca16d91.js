import {
    d as Y,
    aa as j,
    p as D,
    r as n,
    U as J,
    o as m,
    C as p,
    l as s,
    k as r,
    v as k,
    a,
    A as z,
    c as U,
    F as w,
    y as C,
    m as Q,
    P as R,
    O as G,
    ab as H,
    ac as K,
    Q as W,
    J as X,
    aU as Z,
    a9 as $,
    __tla as ee
} from "./index-6c08ea4c.js";

import {
    _ as ae,
    __tla as le
} from "./Editor-ef737d2a.js";

import {
    b as E,
    D as N,
    __tla as te
} from "./dict-c5825220.js";

import {
    C as S
} from "./constants-528bd83f.js";

import {
    c as se,
    e as re,
    f as ue,
    __tla as oe
} from "./index-95092119.js";

let I, de = Promise.all([ (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})() ]).then(async () => {
    I = Y({
        name: "SystemNoticeForm",
        __name: "NoticeForm",
        emits: [ "success" ],
        setup(ne, {
            expose: x,
            emit: T
        }) {
            const {
                t: _
            } = j(), v = D(), o = n(!1), f = n(""), d = n(!1), y = n(""), t = n({
                id: void 0,
                title: "",
                type: void 0,
                content: "",
                status: S.ENABLE,
                remark: ""
            }), q = J({
                title: [ {
                    required: !0,
                    message: "公告标题不能为空",
                    trigger: "blur"
                } ],
                type: [ {
                    required: !0,
                    message: "公告类型不能为空",
                    trigger: "change"
                } ],
                status: [ {
                    required: !0,
                    message: "状态不能为空",
                    trigger: "change"
                } ],
                content: [ {
                    required: !0,
                    message: "公告内容不能为空",
                    trigger: "blur"
                } ]
            }), i = n();
            x({
                open: async (u, l) => {
                    if (o.value = !0, f.value = _("action." + u), y.value = u, O(), 
                    l) {
                        d.value = !0;
                        try {
                            t.value = await se(l);
                        } finally {
                            d.value = !1;
                        }
                    }
                }
            });
            const A = T, F = async () => {
                if (i && await i.value.validate()) {
                    d.value = !0;
                    try {
                        const u = t.value;
                        y.value === "create" ? (await re(u), v.success(_("common.createSuccess"))) : (await ue(u), 
                        v.success(_("common.updateSuccess"))), o.value = !1, A("success");
                    } finally {
                        d.value = !1;
                    }
                }
            }, O = () => {
                var u;
                t.value = {
                    id: void 0,
                    title: "",
                    type: void 0,
                    content: "",
                    status: S.ENABLE,
                    remark: ""
                }, (u = i.value) == null || u.resetFields();
            };
            return (u, l) => {
                const b = R, c = G, M = ae, V = H, g = K, P = W, h = X, B = Z, L = $;
                return m(), p(B, {
                    modelValue: a(o),
                    "onUpdate:modelValue": l[6] || (l[6] = e => Q(o) ? o.value = e : null),
                    title: a(f),
                    width: "800"
                }, {
                    footer: s(() => [ r(h, {
                        onClick: l[5] || (l[5] = e => o.value = !1)
                    }, {
                        default: s(() => [ k("取 消") ]),
                        _: 1
                    }), r(h, {
                        disabled: a(d),
                        type: "primary",
                        onClick: F
                    }, {
                        default: s(() => [ k("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: s(() => [ z((m(), p(P, {
                        ref_key: "formRef",
                        ref: i,
                        model: a(t),
                        rules: a(q),
                        "label-width": "80px"
                    }, {
                        default: s(() => [ r(c, {
                            label: "公告标题",
                            prop: "title"
                        }, {
                            default: s(() => [ r(b, {
                                modelValue: a(t).title,
                                "onUpdate:modelValue": l[0] || (l[0] = e => a(t).title = e),
                                placeholder: "请输入公告标题"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(c, {
                            label: "公告内容",
                            prop: "content"
                        }, {
                            default: s(() => [ r(M, {
                                modelValue: a(t).content,
                                "onUpdate:modelValue": l[1] || (l[1] = e => a(t).content = e),
                                height: "150px"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(c, {
                            label: "公告类型",
                            prop: "type"
                        }, {
                            default: s(() => [ r(g, {
                                modelValue: a(t).type,
                                "onUpdate:modelValue": l[2] || (l[2] = e => a(t).type = e),
                                clearable: "",
                                placeholder: "请选择公告类型"
                            }, {
                                default: s(() => [ (m(!0), U(w, null, C(a(E)(a(N).SYSTEM_NOTICE_TYPE), e => (m(), 
                                p(V, {
                                    key: parseInt(e.value),
                                    label: e.label,
                                    value: parseInt(e.value)
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(c, {
                            label: "状态",
                            prop: "status"
                        }, {
                            default: s(() => [ r(g, {
                                modelValue: a(t).status,
                                "onUpdate:modelValue": l[3] || (l[3] = e => a(t).status = e),
                                clearable: "",
                                placeholder: "请选择状态"
                            }, {
                                default: s(() => [ (m(!0), U(w, null, C(a(E)(a(N).COMMON_STATUS), e => (m(), 
                                p(V, {
                                    key: parseInt(e.value),
                                    label: e.label,
                                    value: parseInt(e.value)
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(c, {
                            label: "备注",
                            prop: "remark"
                        }, {
                            default: s(() => [ r(b, {
                                modelValue: a(t).remark,
                                "onUpdate:modelValue": l[4] || (l[4] = e => a(t).remark = e),
                                placeholder: "请输备注",
                                type: "textarea"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ L, a(d) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    });
});

export {
    I as _,
    de as __tla
};