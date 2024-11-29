import {
    aa as ue,
    p as se,
    r as m,
    U as me,
    e as ne,
    a,
    f as ie,
    o as s,
    C as i,
    l as r,
    k as d,
    v as p,
    A as ce,
    t as M,
    B as O,
    c as k,
    F as I,
    y as w,
    D as $,
    m as pe,
    O as ge,
    _ as fe,
    K as _e,
    ab as ve,
    ac as be,
    bp as he,
    bq as ye,
    P as Ve,
    av as je,
    cK as Ce,
    aw as ke,
    Q as Ie,
    J as we,
    aU as Fe,
    a9 as xe,
    __tla as Le
} from "./index-6c08ea4c.js";

import {
    b as Ue,
    D as De,
    __tla as Se
} from "./dict-c5825220.js";

import {
    d as qe,
    h as Ee
} from "./tree-05ea8e09.js";

import {
    c as Ae,
    d as Me,
    e as Oe,
    u as $e,
    a as Be,
    __tla as ze
} from "./index-7c75bd27.js";

import {
    e as Je,
    __tla as Ke
} from "./index-d195df69.js";

import {
    C as B
} from "./constants-528bd83f.js";

import Ne, {
    __tla as Qe
} from "./DeptTag-1be092ce.js";

import {
    _ as Re
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Pe,
    __tla as Te
} from "./index-ef4d146e.js";

let z, Ge = Promise.all([ (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})() ]).then(async () => {
    let F, x;
    F = {
        class: "tree-item"
    }, x = {
        class: "relative"
    }, z = Re(Object.assign({
        name: "SystemDeptForm"
    }, {
        __name: "DeptForm",
        emits: [ "success" ],
        setup(Xe, {
            expose: J,
            emit: K
        }) {
            const {
                t: b
            } = ue(), L = se(), c = m(!1), U = m(""), g = m(!1), D = m(""), e = m({
                id: "",
                name: "",
                code: "",
                parentId: "",
                tagCode: null,
                sort: null,
                remark: null,
                majorFrom: null,
                majorLevel: null,
                educationalSystem: null,
                majorDictId: "",
                status: B.ENABLE
            }), N = me({
                parentId: [ {
                    required: !0,
                    message: "请选择父级组织",
                    trigger: [ "blur", "change" ]
                } ],
                tagCode: [ {
                    required: !0,
                    message: "请选择组织类别",
                    trigger: [ "blur", "change" ]
                } ],
                sort: [ {
                    required: !1,
                    message: "请输入排序",
                    trigger: [ "blur", "change" ]
                } ],
                name: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请输入组织名称"
                }, {
                    min: 1,
                    max: 20,
                    message: "长度必须介于 1 和 20 之间",
                    trigger: [ "blur", "change" ]
                } ],
                code: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请输入组织代码"
                }, {
                    validator: (o, t, n) => {
                        t.length > 20 ? n(new Error("长度在 1 到 20 个字符")) : /^[a-zA-Z0-9]*$/.test(t) ? n() : n(new Error("只允许输入大小写英文字母和数字"));
                    },
                    trigger: [ "blur", "change" ]
                } ],
                remark: [ {
                    required: !1,
                    trigger: [ "blur", "change" ],
                    message: "请输入备注"
                }, {
                    min: 0,
                    max: 200,
                    message: "长度必须介于 0 和 200 之间",
                    trigger: [ "blur", "change" ]
                } ],
                majorFrom: [ {
                    required: !0,
                    message: "请选择专业来源",
                    trigger: [ "blur", "change" ]
                } ],
                majorDictId: [ {
                    required: !0,
                    message: "请选择专业",
                    trigger: [ "blur", "change" ]
                } ],
                majorLevel: [ {
                    required: !0,
                    message: "请选择专业层次",
                    trigger: [ "blur", "change" ]
                } ],
                educationalSystem: [ {
                    required: !0,
                    message: "请输入学制",
                    trigger: [ "blur", "change" ]
                } ]
            }), f = m(), h = m(), _ = m([]), v = m(""), Q = ne(() => v.value ? _.value.filter(o => o.name.indexOf(a(v)) >= 0 || (o.code || "").indexOf(a(v)) >= 0) : _.value), y = m([]), R = o => {
                e.value.majorFrom = o === "000004" ? 2 : null;
            };
            J({
                open: async (o, t) => {
                    if (c.value = !0, U.value = b("action." + o), D.value = o, Z(), 
                    await H(), y.value = await Ae({
                        status: "0"
                    }), o === "update" && t) {
                        g.value = !0;
                        try {
                            e.value = await Me(t);
                        } finally {
                            g.value = !1;
                        }
                    } else t && (e.value.parentId = t);
                }
            });
            const P = o => {
                v.value = o;
            }, T = (o, t) => t.name.includes(o) || (t.code || "").includes(o), G = () => {
                e.value.majorDictId = "", e.value.name = "", e.value.code = "", 
                e.value.majorLevel = null, e.value.educationalSystem = null;
            }, X = K, Y = async () => {
                if (f && await f.value.validate()) {
                    g.value = !0;
                    try {
                        const o = e.value;
                        e.tagCode === "000004" && e.majorFrom === 1 || (o.majorDictId = null), 
                        D.value === "create" ? (await Oe(o), L.success(b("common.createSuccess"))) : (await $e(o), 
                        L.success(b("common.updateSuccess"))), c.value = !1, X("success");
                    } finally {
                        g.value = !1;
                    }
                }
            }, Z = () => {
                var o;
                e.value = {
                    id: "",
                    name: "",
                    code: "",
                    parentId: "",
                    tagCode: null,
                    sort: null,
                    remark: null,
                    majorFrom: null,
                    majorLevel: null,
                    educationalSystem: null,
                    majorDictId: "",
                    status: B.ENABLE
                }, (o = f.value) == null || o.resetFields();
            }, H = async () => {
                h.value = [];
                const o = await Be();
                let t = {
                    id: "0",
                    name: "顶级部门",
                    children: []
                };
                t.children = Ee(o), h.value.push(t);
            };
            function W(o, t) {
                const n = _.value.find(u => u.id === o) || {};
                e.value.name = n.name, e.value.code = n.code, e.value.majorLevel = n.level;
            }
            return ie(() => {
                (async () => _.value = await Je())();
            }), (o, t) => {
                const n = Pe, u = ge, ee = fe, ae = _e, V = ve, j = be, S = he, le = ye, C = Ve, q = je, E = Ce, te = ke, re = Ie, A = we, oe = Fe, de = xe;
                return s(), i(oe, {
                    modelValue: a(c),
                    "onUpdate:modelValue": t[11] || (t[11] = l => pe(c) ? c.value = l : null),
                    title: a(U) + "组织机构",
                    scroll: "",
                    width: "440"
                }, {
                    footer: r(() => [ d(A, {
                        onClick: t[10] || (t[10] = l => c.value = !1)
                    }, {
                        default: r(() => [ p("取 消") ]),
                        _: 1
                    }), d(A, {
                        type: "primary",
                        onClick: Y
                    }, {
                        default: r(() => [ p("确 定") ]),
                        _: 1
                    }) ]),
                    default: r(() => [ ce((s(), i(re, {
                        ref_key: "formRef",
                        ref: f,
                        model: a(e),
                        rules: a(N),
                        size: "large",
                        "label-position": "top",
                        "label-width": "80px",
                        style: {
                            "overflow-x": "hidden"
                        }
                    }, {
                        default: r(() => [ d(u, {
                            label: "父级组织",
                            prop: "parentId"
                        }, {
                            default: r(() => [ d(n, {
                                modelValue: a(e).parentId,
                                "onUpdate:modelValue": t[0] || (t[0] = l => a(e).parentId = l),
                                data: a(h),
                                props: a(qe),
                                filterable: "",
                                "filter-node-method": T,
                                "check-strictly": "",
                                placeholder: "请选择父级组织",
                                "value-key": "deptId",
                                class: "dept-tree-select"
                            }, {
                                default: r(({
                                    data: l
                                }) => [ M("div", F, [ p(O(l.name) + O(l.code ? `\uFF08${l.code}\uFF09` : "") + " ", 1), d(Ne, {
                                    tagCode: l.tagCode,
                                    codeList: a(y),
                                    class: "tag-box"
                                }, null, 8, [ "tagCode", "codeList" ]) ]) ]),
                                _: 1
                            }, 8, [ "modelValue", "data", "props" ]) ]),
                            _: 1
                        }), d(u, {
                            label: "组织类别"
                        }, {
                            label: r(() => [ M("div", x, [ p(" 组织类别 "), d(ae, {
                                class: "box-item",
                                effect: "dark",
                                content: "如您为学历教育用户，需新增“专业”，需选择系统内置组织类别”专业“",
                                placement: "top"
                            }, {
                                default: r(() => [ d(ee, {
                                    icon: "ep:info-filled",
                                    size: 14,
                                    class: "info-icon ml-4px"
                                }) ]),
                                _: 1
                            }) ]) ]),
                            default: r(() => [ d(j, {
                                modelValue: a(e).tagCode,
                                "onUpdate:modelValue": t[1] || (t[1] = l => a(e).tagCode = l),
                                clearable: "",
                                filterable: "",
                                placeholder: "请选择组织类别",
                                onChange: R
                            }, {
                                default: r(() => [ (s(!0), k(I, null, w(a(y), l => (s(), 
                                i(V, {
                                    key: l.id,
                                    label: l.name,
                                    value: l.code
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(e).tagCode === "000004" ? (s(), i(u, {
                            key: 0,
                            label: "专业来源",
                            prop: "majorFrom"
                        }, {
                            default: r(() => [ d(le, {
                                modelValue: a(e).majorFrom,
                                "onUpdate:modelValue": t[2] || (t[2] = l => a(e).majorFrom = l),
                                onChange: G
                            }, {
                                default: r(() => [ d(S, {
                                    value: 1
                                }, {
                                    default: r(() => [ p("系统内置国家专业库（推荐）") ]),
                                    _: 1
                                }), d(S, {
                                    value: 2
                                }, {
                                    default: r(() => [ p("租户自定义专业") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : $("", !0), a(e).tagCode === "000004" && a(e).majorFrom === 1 ? (s(), 
                        i(u, {
                            key: 1,
                            label: "组织名称",
                            prop: "majorDictId"
                        }, {
                            default: r(() => [ d(j, {
                                modelValue: a(e).majorDictId,
                                "onUpdate:modelValue": t[3] || (t[3] = l => a(e).majorDictId = l),
                                clearable: "",
                                filterable: "",
                                "filter-method": P,
                                placeholder: "请输入专业名称/代码",
                                onChange: W
                            }, {
                                default: r(() => [ (s(!0), k(I, null, w(a(Q), l => (s(), 
                                i(V, {
                                    key: l.id,
                                    label: `${l.name}\uFF08${l.code}\uFF09`,
                                    value: l.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : (s(), i(u, {
                            key: 2,
                            label: "组织名称",
                            prop: "name"
                        }, {
                            default: r(() => [ d(C, {
                                modelValue: a(e).name,
                                "onUpdate:modelValue": t[4] || (t[4] = l => a(e).name = l),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入组织名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })), d(u, {
                            label: "组织代码",
                            prop: "code"
                        }, {
                            default: r(() => [ d(C, {
                                modelValue: a(e).code,
                                "onUpdate:modelValue": t[5] || (t[5] = l => a(e).code = l),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入组织代码",
                                disabled: a(e).tagCode === "000004" && a(e).majorFrom === 1
                            }, null, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), a(e).tagCode === "000004" ? (s(), i(te, {
                            key: 3,
                            gutter: 10
                        }, {
                            default: r(() => [ d(q, {
                                span: 14
                            }, {
                                default: r(() => [ d(u, {
                                    label: "专业层次",
                                    prop: "majorLevel"
                                }, {
                                    default: r(() => [ d(j, {
                                        modelValue: a(e).majorLevel,
                                        "onUpdate:modelValue": t[6] || (t[6] = l => a(e).majorLevel = l),
                                        clearable: "",
                                        placeholder: "请选择专业层次",
                                        disabled: a(e).tagCode === "000004" && a(e).majorFrom === 1
                                    }, {
                                        default: r(() => [ (s(!0), k(I, null, w(a(Ue)(a(De).SYSTEM_MAJOR_LEVEL), l => (s(), 
                                        i(V, {
                                            key: l.value,
                                            label: l.label,
                                            value: l.value
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue", "disabled" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), d(q, {
                                span: 10
                            }, {
                                default: r(() => [ d(u, {
                                    label: "学制",
                                    prop: "educationalSystem"
                                }, {
                                    default: r(() => [ d(E, {
                                        modelValue: a(e).educationalSystem,
                                        "onUpdate:modelValue": t[7] || (t[7] = l => a(e).educationalSystem = l),
                                        min: 0,
                                        step: 1,
                                        "step-strictly": "",
                                        max: 10,
                                        style: {
                                            width: "100%"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        })) : $("", !0), d(u, {
                            label: "同级排序",
                            prop: "sort"
                        }, {
                            default: r(() => [ d(E, {
                                modelValue: a(e).sort,
                                "onUpdate:modelValue": t[8] || (t[8] = l => a(e).sort = l),
                                placeholder: "请输入同级排序",
                                min: 1,
                                step: 1,
                                "step-strictly": "",
                                max: 1e5,
                                "controls-position": "right",
                                class: "align-left",
                                style: {
                                    width: "100%"
                                }
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), d(u, {
                            label: "备注",
                            prop: "remark"
                        }, {
                            default: r(() => [ d(C, {
                                modelValue: a(e).remark,
                                "onUpdate:modelValue": t[9] || (t[9] = l => a(e).remark = l),
                                type: "textarea",
                                placeholder: "请输入备注"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ de, a(g) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }), [ [ "__scopeId", "data-v-aa2f2b19" ] ]);
});

export {
    Ge as __tla,
    z as default
};