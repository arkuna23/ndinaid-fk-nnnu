import {
    e as K,
    r as q,
    f as F,
    o as r,
    c as d,
    k as l,
    l as s,
    a,
    t as p,
    F as c,
    y as _,
    B as X,
    A as B,
    G,
    C as v,
    P as J,
    O as M,
    _ as N,
    J as Y,
    ab as Q,
    ac as W,
    cK as Z,
    R as $,
    S as ee,
    __tla as le
} from "./index-6c08ea4c.js";

import {
    b as P,
    D as C,
    __tla as ae
} from "./dict-c5825220.js";

import {
    z as te,
    __tla as oe
} from "./project-51c056b9.js";

import {
    _ as se
} from "./_plugin-vue_export-helper-1b428a4d.js";

let L, re = Promise.all([ (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})() ]).then(async () => {
    let y, h, x, k, w, I;
    y = (u => ($("data-v-f74ce42c"), u = u(), ee(), u))(() => p("div", {
        class: "el-form-item__label mb-12px !pl-10px"
    }, "测试步骤 ", -1)), h = {
        class: "step-list"
    }, x = {
        class: "item-description"
    }, k = {
        class: "item-result pb-4px"
    }, w = {
        class: "item-sort"
    }, I = {
        class: "add-item-btn"
    }, L = se({
        __name: "TaskTesting",
        props: {
            projectId: {
                type: String,
                default: ""
            },
            formData: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "update:formData" ],
        setup(u, {
            expose: j,
            emit: z
        }) {
            const A = z, S = u, t = K({
                get: () => S.formData,
                set: b => {
                    A("update:formData", b);
                }
            }), T = q([]), U = b => {
                te({
                    projectId: S.projectId,
                    type: 3
                }).then(o => {
                    T.value = o;
                });
            };
            return j({
                initForm: U
            }), F(() => {
                U();
            }), (b, o) => {
                const f = J, i = M, R = N, O = Y, g = Q, V = W, E = Z;
                return r(), d(c, null, [ l(i, {
                    label: "前置条件",
                    prop: "precondition"
                }, {
                    default: s(() => [ l(f, {
                        modelValue: a(t).precondition,
                        "onUpdate:modelValue": o[0] || (o[0] = e => a(t).precondition = e),
                        placeholder: "请输入前置条件"
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }), y, p("div", h, [ (r(!0), d(c, null, _(a(t).testStepList, (e, n) => (r(), 
                d("div", {
                    class: "step-item",
                    key: "step-item" + e.index
                }, [ p("div", x, [ l(i, {
                    label: "描述",
                    "label-width": "80px",
                    prop: "testStepList." + n + ".description",
                    rules: [ {
                        required: !0,
                        message: "请输入描述",
                        trigger: [ "blur" ]
                    }, {
                        min: 1,
                        max: 100,
                        message: "长度在 1 到 100 个字符",
                        trigger: [ "blur" ]
                    } ],
                    style: {
                        border: "0",
                        "margin-bottom": "20px",
                        padding: "0"
                    }
                }, {
                    default: s(() => [ l(f, {
                        modelValue: e.description,
                        "onUpdate:modelValue": m => e.description = m,
                        type: "textarea",
                        minlength: "0",
                        maxlength: "100",
                        placeholder: "请输入描述",
                        "show-word-limit": "",
                        autosize: {
                            minRows: 1,
                            maxRows: 3
                        }
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                    _: 2
                }, 1032, [ "prop" ]) ]), p("div", k, [ l(i, {
                    label: "预期结果",
                    prop: "testStepList." + n + ".result",
                    rules: [ {
                        required: !0,
                        message: "请输入预期结果",
                        trigger: [ "blur" ]
                    }, {
                        min: 1,
                        max: 500,
                        message: "长度在 1 到 500 个字符",
                        trigger: [ "blur" ]
                    } ],
                    style: {
                        border: "0",
                        "margin-bottom": "20px",
                        padding: "0"
                    }
                }, {
                    default: s(() => [ l(f, {
                        modelValue: e.result,
                        "onUpdate:modelValue": m => e.result = m,
                        type: "textarea",
                        minlength: "0",
                        maxlength: "500",
                        placeholder: "请输入描述",
                        "show-word-limit": "",
                        autosize: {
                            minRows: 1,
                            maxRows: 3
                        }
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                    _: 2
                }, 1032, [ "prop" ]) ]), p("div", w, X(n + 1), 1), p("div", I, [ l(R, {
                    icon: "ep:circle-plus-filled",
                    class: "add-icon",
                    size: 20,
                    onClick: m => (D => {
                        t.value.testStepList.splice(D + 1, 0, {
                            description: "",
                            result: ""
                        });
                    })(n)
                }, null, 8, [ "onClick" ]) ]), B(l(O, {
                    class: "del-item-btn",
                    type: "danger",
                    circle: "",
                    onClick: m => ((D, H) => {
                        t.value.testStepList.splice(H, 1);
                    })(0, n)
                }, {
                    default: s(() => [ l(R, {
                        icon: "ep:delete"
                    }) ]),
                    _: 2
                }, 1032, [ "onClick" ]), [ [ G, a(t).testStepList.length !== 1 ] ]) ]))), 128)) ]), l(i, {
                    label: "关联需求",
                    prop: "relTaskId"
                }, {
                    default: s(() => [ l(V, {
                        modelValue: a(t).relTaskId,
                        "onUpdate:modelValue": o[1] || (o[1] = e => a(t).relTaskId = e),
                        clearable: "",
                        placeholder: "请选择关联需求"
                    }, {
                        default: s(() => [ (r(!0), d(c, null, _(a(T), e => (r(), 
                        v(g, {
                            key: e.id,
                            label: e.name,
                            value: e.id
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), l(i, {
                    label: "优先级",
                    prop: "priority"
                }, {
                    default: s(() => [ l(V, {
                        modelValue: a(t).priority,
                        "onUpdate:modelValue": o[2] || (o[2] = e => a(t).priority = e),
                        clearable: "",
                        placeholder: "请选择优先级"
                    }, {
                        default: s(() => [ (r(!0), d(c, null, _(a(P)(a(C).EXP_TASK_PRIORITY), e => (r(), 
                        v(g, {
                            key: e.value,
                            label: e.label,
                            value: e.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), l(i, {
                    label: "重要程度",
                    prop: "importance"
                }, {
                    default: s(() => [ l(V, {
                        modelValue: a(t).importance,
                        "onUpdate:modelValue": o[3] || (o[3] = e => a(t).importance = e),
                        clearable: "",
                        placeholder: "请选择重要程度"
                    }, {
                        default: s(() => [ (r(!0), d(c, null, _(a(P)(a(C).EXP_TASK_IMPORTANCE), e => (r(), 
                        v(g, {
                            key: e.value,
                            label: e.label,
                            value: e.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), l(i, {
                    label: "预计工时",
                    prop: "workHours"
                }, {
                    default: s(() => [ l(E, {
                        modelValue: a(t).workHours,
                        "onUpdate:modelValue": o[4] || (o[4] = e => a(t).workHours = e),
                        placeholder: "请输入预计工时",
                        min: 1,
                        step: 1,
                        "step-strictly": "",
                        max: 1e4,
                        "controls-position": "right",
                        class: "align-left"
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-f74ce42c" ] ]);
});

export {
    re as __tla,
    L as default
};