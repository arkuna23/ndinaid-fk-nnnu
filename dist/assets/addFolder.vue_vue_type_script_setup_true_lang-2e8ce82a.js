import {
    d as B,
    a0 as E,
    r as u,
    e as G,
    j as I,
    o as m,
    c as T,
    k as d,
    l as s,
    v as V,
    a,
    H as K,
    C as p,
    A as h,
    D as b,
    F as L,
    y as M,
    m as W,
    P as X,
    O as Y,
    ab as Z,
    ac as $,
    Q as ee,
    J as le,
    aU as ae,
    __tla as re
} from "./index-6c08ea4c.js";

import {
    v as k,
    c as x
} from "./validate-b72f006c.js";

import {
    o as te,
    __tla as ue
} from "./file-e038b35d.js";

let q, se = Promise.all([ (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})() ]).then(async () => {
    q = B({
        __name: "addFolder",
        props: {
            folderType: {
                type: String,
                required: !0
            }
        },
        emits: [ "submit" ],
        setup(U, {
            expose: O,
            emit: C
        }) {
            const D = U, {
                folderType: P
            } = E(D), n = u(), S = C, i = u(!1), _ = u("新建文件夹"), v = u({}), w = u([ {
                label: "项目指导类",
                value: 2
            }, {
                label: "学习参考类",
                value: 1
            }, {
                label: "项目模板类",
                value: 3
            }, {
                label: "其他",
                value: 4
            } ]), o = u("folder"), e = u({
                name: "",
                projectFileType: ""
            }), A = G(() => o.value == "folder" ? {
                name: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: k,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: x,
                    message: '文件夹名称不能包含字符 "\\" 或 "/"',
                    trigger: "blur"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ],
                projectFileType: [ {
                    required: !0,
                    message: "请选择资料类型",
                    trigger: "change"
                } ]
            } : o.value == "res" ? {
                name: [ {
                    required: !0,
                    message: "资料名称不能为空",
                    trigger: "blur"
                }, {
                    validator: k,
                    message: "资料名称不能为空",
                    trigger: "blur"
                }, {
                    validator: x,
                    message: '资料名称不能包含字符 "\\" 或 "/"',
                    trigger: "blur"
                }, {
                    max: 50,
                    message: "长度在50个字符以内",
                    trigger: "blur"
                } ],
                projectFileType: [ {
                    required: !0,
                    message: "请选择资料类型",
                    trigger: "change"
                } ]
            } : void 0), c = u({}), g = u(!1), H = () => {
                n.value.validate(t => {
                    if (t) {
                        let l = e.value.name;
                        v.value.type == "edit" && o.value == "res" && (l = e.value.name + "." + c.value.extension), 
                        S("submit", {
                            type: v.value.type,
                            data: {
                                ...e.value,
                                name: l
                            }
                        });
                    }
                });
            }, J = () => {
                e.value = {
                    name: "",
                    projectFileType: ""
                }, n.value.resetFields();
            };
            return O({
                openDialog: t => {
                    i.value = !0, v.value = t, _.value = t.title, o.value = t.formType, 
                    t.type == "edit" && (Object.assign(e.value, t.editObject), o.value == "res" && (c.value = te(t.editObject.name), 
                    e.value.name = c.value.baseName)), t.projectFileType ? (e.value.projectFileType = t.projectFileType, 
                    g.value = !0) : (e.value.projectFileType = "", g.value = !1);
                },
                closeDialog: () => {
                    i.value = !1;
                }
            }), (t, l) => {
                const f = X, y = Y, N = Z, Q = $, R = ee, j = le, z = ae, F = I("trim");
                return m(), T("div", null, [ d(z, {
                    modelValue: a(i),
                    "onUpdate:modelValue": l[5] || (l[5] = r => W(i) ? i.value = r : null),
                    scroll: !0,
                    "max-height": "210",
                    title: a(_),
                    width: "420",
                    onClose: J
                }, {
                    footer: s(() => [ d(j, {
                        type: "default",
                        onClick: l[4] || (l[4] = r => i.value = !1)
                    }, {
                        default: s(() => [ V("取消") ]),
                        _: 1
                    }), d(j, {
                        type: "primary",
                        onClick: H
                    }, {
                        default: s(() => [ V("确定") ]),
                        _: 1
                    }) ]),
                    default: s(() => [ d(R, {
                        ref_key: "addFolderFormRef",
                        ref: n,
                        model: a(e),
                        rules: a(A),
                        class: "neu",
                        onSubmit: l[3] || (l[3] = K(() => {}, [ "prevent" ]))
                    }, {
                        default: s(() => [ a(o) == "folder" ? (m(), p(y, {
                            key: 0,
                            label: "文件夹名称",
                            prop: "name"
                        }, {
                            default: s(() => [ h(d(f, {
                                modelValue: a(e).name,
                                "onUpdate:modelValue": l[0] || (l[0] = r => a(e).name = r),
                                placeholder: "请输入文件夹名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ F ] ]) ]),
                            _: 1
                        })) : b("", !0), a(o) == "res" ? (m(), p(y, {
                            key: 1,
                            label: "资料名称",
                            prop: "name"
                        }, {
                            default: s(() => [ h(d(f, {
                                modelValue: a(e).name,
                                "onUpdate:modelValue": l[1] || (l[1] = r => a(e).name = r),
                                placeholder: "请输入资料名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ F ] ]) ]),
                            _: 1
                        })) : b("", !0), a(P) == "project" ? (m(), p(y, {
                            key: 2,
                            label: "资料类型",
                            prop: "projectFileType"
                        }, {
                            default: s(() => [ d(Q, {
                                modelValue: a(e).projectFileType,
                                "onUpdate:modelValue": l[2] || (l[2] = r => a(e).projectFileType = r),
                                disabled: a(g),
                                placeholder: "请选择资料类型"
                            }, {
                                default: s(() => [ (m(!0), T(L, null, M(a(w), r => (m(), 
                                p(N, {
                                    key: r.value,
                                    label: r.label,
                                    value: r.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        })) : b("", !0) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    });
});

export {
    q as _,
    se as __tla
};