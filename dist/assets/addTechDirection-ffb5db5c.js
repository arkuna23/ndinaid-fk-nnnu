import {
    r as d,
    U as A,
    aT as E,
    j as G,
    o as p,
    c as y,
    k as a,
    l as t,
    v as i,
    a as o,
    A as J,
    t as O,
    F as R,
    y as z,
    C as M,
    m as B,
    n as g,
    bo as H,
    P as K,
    O as L,
    q as S,
    ab as W,
    ac as X,
    Q as Y,
    J as Z,
    aU as $,
    __tla as ee
} from "./index-6c08ea4c.js";

import {
    c as ae,
    __tla as le
} from "./techDirectionManage-e96d2dc4.js";

import {
    _ as te
} from "./_plugin-vue_export-helper-1b428a4d.js";

let v, oe = Promise.all([ (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})() ]).then(async () => {
    let h, _;
    h = {
        class: "deploy-dialog"
    }, _ = {
        class: "help-box"
    }, v = te({
        __name: "addTechDirection",
        emits: [ "refresh" ],
        setup(se, {
            expose: V,
            emit: x
        }) {
            const b = x, w = d("新增技术方向"), r = d(!1), u = d(null), s = d({
                techName: "",
                techCode: "",
                type: "",
                remark: ""
            }), C = A({
                techName: [ {
                    required: !0,
                    message: "请输入技术方向名称",
                    trigger: "blur"
                } ],
                techCode: [ {
                    required: !0,
                    message: "请输入代码",
                    trigger: "change"
                } ],
                type: [ {
                    required: !0,
                    message: "请选择工程类型",
                    trigger: "change"
                } ]
            }), k = d([ {
                code: "1",
                name: "前端工程"
            }, {
                code: "2",
                name: "后端工程"
            }, {
                code: "3",
                name: "前端工程、后端工程"
            } ]), N = () => {
                s.value = {
                    techName: "",
                    type: "",
                    remark: "",
                    evnGitProId: "",
                    nginxConfigEid: ""
                }, g(() => {
                    u.value.clearValidate();
                });
            }, U = () => {
                u.value.validate(c => {
                    c && q();
                });
            }, q = () => {
                ae(s.value).then(c => {
                    c && (b("refresh"), H.success("新增成功"), r.value = !1);
                });
            };
            return V({
                openDialog: () => {
                    r.value = !0, g(() => {
                        u.value.clearValidate();
                    });
                }
            }), (c, l) => {
                const n = K, m = L, D = E("svg-icon"), I = S, P = W, F = X, Q = Y, f = Z, T = $, j = G("trim");
                return p(), y("div", h, [ a(T, {
                    modelValue: o(r),
                    "onUpdate:modelValue": l[5] || (l[5] = e => B(r) ? r.value = e : null),
                    title: o(w),
                    width: "420px",
                    onClose: N
                }, {
                    footer: t(() => [ a(f, {
                        type: "default",
                        onClick: l[4] || (l[4] = e => r.value = !1)
                    }, {
                        default: t(() => [ i("取消") ]),
                        _: 1
                    }), a(f, {
                        type: "primary",
                        onClick: U
                    }, {
                        default: t(() => [ i("确定") ]),
                        _: 1
                    }) ]),
                    default: t(() => [ a(Q, {
                        ref_key: "DeployFormRef",
                        ref: u,
                        model: o(s),
                        rules: C,
                        class: "neu"
                    }, {
                        default: t(() => [ a(m, {
                            label: "技术方向名称",
                            prop: "techName"
                        }, {
                            default: t(() => [ J(a(n, {
                                modelValue: o(s).techName,
                                "onUpdate:modelValue": l[0] || (l[0] = e => o(s).techName = e),
                                class: "neu",
                                placeholder: "请输入技术方向名称",
                                style: {
                                    width: "360px"
                                },
                                maxlength: "50"
                            }, null, 8, [ "modelValue" ]), [ [ j ] ]) ]),
                            _: 1
                        }), a(m, {
                            label: "代码",
                            prop: "techCode"
                        }, {
                            default: t(() => [ a(n, {
                                modelValue: o(s).techCode,
                                "onUpdate:modelValue": l[1] || (l[1] = e => o(s).techCode = e),
                                "^rows": 5,
                                class: "neu",
                                placeholder: "请输入代码",
                                style: {
                                    width: "360px"
                                },
                                maxlength: "10"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(m, {
                            prop: "type"
                        }, {
                            label: t(() => [ a(I, {
                                placement: "top",
                                trigger: "hover",
                                content: "根据项目需求进行选择，确保项目资源配置正确",
                                "show-after": "200"
                            }, {
                                reference: t(() => [ O("div", _, [ i(" 工程类型 "), a(D, {
                                    iconName: "icon-help",
                                    className: "icon-help"
                                }) ]) ]),
                                _: 1
                            }) ]),
                            default: t(() => [ a(F, {
                                modelValue: o(s).type,
                                "onUpdate:modelValue": l[2] || (l[2] = e => o(s).type = e),
                                class: "neu",
                                placeholder: "请选择",
                                style: {
                                    width: "360px"
                                }
                            }, {
                                default: t(() => [ (p(!0), y(R, null, z(o(k), e => (p(), 
                                M(P, {
                                    key: e.code,
                                    label: e.name,
                                    value: e.code
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(m, {
                            label: "备注"
                        }, {
                            default: t(() => [ a(n, {
                                modelValue: o(s).remark,
                                "onUpdate:modelValue": l[3] || (l[3] = e => o(s).remark = e),
                                "^rows": 5,
                                class: "neu",
                                placeholder: "请输入备注",
                                style: {
                                    width: "360px"
                                },
                                maxlength: "100",
                                type: "textarea",
                                "show-word-limit": ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-5b284452" ] ]);
});

export {
    oe as __tla,
    v as default
};