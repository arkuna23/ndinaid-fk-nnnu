import {
    p as M,
    e as k,
    r as n,
    A as j,
    a as t,
    o as u,
    C as p,
    l as i,
    k as s,
    c as g,
    F as v,
    y as f,
    D as z,
    v as N,
    cg as X,
    n as Y,
    P as B,
    O as J,
    ab as Q,
    ac as R,
    bp as G,
    bq as W,
    cK as Z,
    _ as $,
    J as ee,
    Q as ae,
    a9 as le,
    __tla as te
} from "./index-6c08ea4c.js";

import {
    _ as re,
    __tla as se
} from "./Editor-ef737d2a.js";

import {
    b,
    D as y,
    __tla as ie
} from "./dict-c5825220.js";

import {
    f as ue,
    __tla as oe
} from "./project-51c056b9.js";

import {
    __tla as ne
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as pe
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as de
} from "./file-e038b35d.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let q, me = Promise.all([ (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})(), (() => {
    try {
        return ne;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})() ]).then(async () => {
    q = {
        __name: "EvaluationSettings",
        props: {
            projectId: {
                type: String,
                default: ""
            },
            environment: {
                type: Number,
                default: 0
            }
        },
        setup(O, {
            expose: P
        }) {
            const w = O;
            M();
            const A = k(() => {
                let r = b(y.EXP_TASK_TYPE);
                return w.environment !== 15 ? r.filter(l => [ 1, 2 ].indexOf(l.value) >= 0) : r.filter(l => [ 3, 4, 5, 6 ].indexOf(l.value) >= 0);
            }), _ = n(!1), L = n(""), e = n({
                id: "",
                name: "",
                type: null,
                description: "",
                skillPointList: [],
                isAchievement: "",
                sort: null,
                fileList: []
            }), T = k(() => ({
                name: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请输入任务名称"
                }, {
                    min: 1,
                    max: 50,
                    message: "长度必须介于 1 和 50 之间",
                    trigger: "blur"
                } ],
                precondition: [ {
                    required: !1,
                    trigger: "blur",
                    message: "请输入前置条件"
                }, {
                    min: 0,
                    max: 100,
                    message: "长度必须介于 0 和 100 之间",
                    trigger: "blur"
                } ],
                type: [ {
                    required: !0,
                    message: "请选择任务类型",
                    trigger: "blur"
                } ],
                developType: [ {
                    required: !1,
                    message: "请选择开发任务类型",
                    trigger: "blur"
                } ],
                description: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请输入任务描述"
                } ],
                sort: [ {
                    required: !0,
                    message: "请输入任务顺序",
                    trigger: "blur"
                } ],
                isAchievement: [ {
                    required: !0,
                    message: "请选择是否提交成果物",
                    trigger: "blur"
                } ],
                priority: [ {
                    required: !0,
                    message: "请选择优先级",
                    trigger: "blur"
                } ],
                importance: [ {
                    required: !0,
                    message: "请选择重要程度",
                    trigger: "blur"
                } ],
                workHours: [ {
                    required: !0,
                    message: "请输入预计工时",
                    trigger: "blur"
                } ]
            })), c = n(), d = n(), E = r => {
                [ 3, 4, 5, 6 ].indexOf(r) >= 0 && (e.value.workHours = e.value.workHours || 2), 
                r === 6 && (e.value.testStepList = e.value.id ? e.value.testStepList : [ {
                    id: X(),
                    isCreate: !0,
                    description: "",
                    result: ""
                } ]);
            }, h = () => {
                var r;
                e.value = {
                    id: "",
                    name: "",
                    type: null,
                    description: "",
                    skillPointList: [],
                    isAchievement: "",
                    sort: null,
                    fileList: []
                }, (r = c.value) == null || r.resetFields();
            };
            return P({
                initForm: async (r, l) => {
                    if (L.value = r, h(), l) {
                        _.value = !0;
                        try {
                            e.value = await ue(l), Y(async () => {
                                var m;
                                d.value && await ((m = d.value) == null ? void 0 : m.initForm(e.value));
                            });
                        } finally {
                            _.value = !1;
                        }
                    }
                },
                resetForm: h,
                validate: async () => {
                    var r, l;
                    return d.value && await ((r = d.value) == null ? void 0 : r.getMdIdObj()), 
                    await ((l = c.value) == null ? void 0 : l.validate());
                },
                formData: e
            }), (r, l) => {
                const m = B, o = J, V = Q, x = R, F = re, S = G, U = W, D = Z, C = $, K = ee, H = ae, I = le;
                return j((u(), p(H, {
                    ref_key: "formRef",
                    ref: c,
                    "label-position": "top",
                    model: t(e),
                    size: "large",
                    rules: t(T),
                    "label-width": "80px"
                }, {
                    default: i(() => [ s(o, {
                        label: "任务名称",
                        prop: "name"
                    }, {
                        default: i(() => [ s(m, {
                            modelValue: t(e).name,
                            "onUpdate:modelValue": l[0] || (l[0] = a => t(e).name = a),
                            placeholder: "请输入任务名称"
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(o, {
                        label: "任务类型",
                        prop: "type"
                    }, {
                        default: i(() => [ s(x, {
                            modelValue: t(e).type,
                            "onUpdate:modelValue": l[1] || (l[1] = a => t(e).type = a),
                            clearable: "",
                            placeholder: "请选择任务类型",
                            onChange: E
                        }, {
                            default: i(() => [ (u(!0), g(v, null, f(t(A), a => (u(), 
                            p(V, {
                                key: a.value,
                                label: a.label,
                                value: a.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), t(e).type === 5 ? (u(), p(o, {
                        key: 0,
                        label: "开发任务类型",
                        prop: "developType"
                    }, {
                        default: i(() => [ s(x, {
                            modelValue: t(e).developType,
                            "onUpdate:modelValue": l[2] || (l[2] = a => t(e).developType = a),
                            clearable: "",
                            placeholder: "请选择开发任务类型"
                        }, {
                            default: i(() => [ (u(!0), g(v, null, f(t(b)(t(y).EXP_TASK_DEVELOP_TYPE), a => (u(), 
                            p(V, {
                                key: a.value,
                                label: a.label,
                                value: a.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    })) : z("", !0), s(o, {
                        label: "任务描述",
                        prop: "description"
                    }, {
                        default: i(() => [ s(F, {
                            modelValue: t(e).description,
                            "onUpdate:modelValue": l[3] || (l[3] = a => t(e).description = a),
                            height: "100px"
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(o, {
                        label: "是否提交成果物",
                        prop: "isAchievement"
                    }, {
                        default: i(() => [ s(U, {
                            modelValue: t(e).isAchievement,
                            "onUpdate:modelValue": l[4] || (l[4] = a => t(e).isAchievement = a)
                        }, {
                            default: i(() => [ (u(!0), g(v, null, f(t(b)(t(y).COMMON_BOOL), a => (u(), 
                            p(S, {
                                key: a.value,
                                label: a.label,
                                value: a.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(o, {
                        label: "任务顺序",
                        prop: "sort"
                    }, {
                        default: i(() => [ s(D, {
                            modelValue: t(e).sort,
                            "onUpdate:modelValue": l[5] || (l[5] = a => t(e).sort = a),
                            placeholder: "请输入任务顺序",
                            min: 0,
                            step: 1,
                            "step-strictly": "",
                            max: 1e5,
                            "controls-position": "right",
                            class: "align-left"
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(o, {
                        label: "任务资料",
                        prop: "fileList"
                    }, {
                        default: i(() => [ s(K, {
                            type: "primary",
                            size: "default",
                            plain: "",
                            class: "!px-10px"
                        }, {
                            default: i(() => [ s(C, {
                                icon: "ep:plus",
                                class: "mr-5px"
                            }), N(" 添加资料 ") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ])), [ [ I, t(_) ] ]);
            };
        }
    };
});

export {
    me as __tla,
    q as default
};