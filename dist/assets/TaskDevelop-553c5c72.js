import {
    e as P,
    r as g,
    f as O,
    o,
    c as s,
    k as r,
    l as u,
    a as e,
    F as d,
    y as c,
    C as i,
    ab as U,
    ac as w,
    O as x,
    cK as A,
    __tla as E
} from "./index-6c08ea4c.js";

import {
    b as y,
    D as V,
    __tla as H
} from "./dict-c5825220.js";

import {
    z as K,
    __tla as R
} from "./project-51c056b9.js";

import {
    _ as S
} from "./_plugin-vue_export-helper-1b428a4d.js";

let k, C = Promise.all([ (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return R;
    } catch {}
})() ]).then(async () => {
    k = S({
        __name: "TaskDevelop",
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
        setup(h, {
            expose: I,
            emit: T
        }) {
            const D = T, f = h, t = P({
                get: () => f.formData,
                set: m => {
                    D("update:formData", m);
                }
            }), b = g([]), v = m => {
                K({
                    projectId: f.projectId,
                    type: 3
                }).then(l => {
                    b.value = l;
                });
            };
            return I({
                initForm: v
            }), O(() => {
                v();
            }), (m, l) => {
                const n = U, _ = w, p = x, j = A;
                return o(), s(d, null, [ r(p, {
                    label: "关联需求",
                    prop: "relTaskId"
                }, {
                    default: u(() => [ r(_, {
                        modelValue: e(t).relTaskId,
                        "onUpdate:modelValue": l[0] || (l[0] = a => e(t).relTaskId = a),
                        clearable: "",
                        placeholder: "请选择关联需求"
                    }, {
                        default: u(() => [ (o(!0), s(d, null, c(e(b), a => (o(), 
                        i(n, {
                            key: a.id,
                            label: a.name,
                            value: a.id
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), r(p, {
                    label: "优先级",
                    prop: "priority"
                }, {
                    default: u(() => [ r(_, {
                        modelValue: e(t).priority,
                        "onUpdate:modelValue": l[1] || (l[1] = a => e(t).priority = a),
                        clearable: "",
                        placeholder: "请选择优先级"
                    }, {
                        default: u(() => [ (o(!0), s(d, null, c(e(y)(e(V).EXP_TASK_PRIORITY), a => (o(), 
                        i(n, {
                            key: a.value,
                            label: a.label,
                            value: a.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), r(p, {
                    label: "重要程度",
                    prop: "importance"
                }, {
                    default: u(() => [ r(_, {
                        modelValue: e(t).importance,
                        "onUpdate:modelValue": l[2] || (l[2] = a => e(t).importance = a),
                        clearable: "",
                        placeholder: "请选择重要程度"
                    }, {
                        default: u(() => [ (o(!0), s(d, null, c(e(y)(e(V).EXP_TASK_IMPORTANCE), a => (o(), 
                        i(n, {
                            key: a.value,
                            label: a.label,
                            value: a.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), r(p, {
                    label: "预计工时",
                    prop: "workHours"
                }, {
                    default: u(() => [ r(j, {
                        modelValue: e(t).workHours,
                        "onUpdate:modelValue": l[3] || (l[3] = a => e(t).workHours = a),
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
    }, [ [ "__scopeId", "data-v-6fffe263" ] ]);
});

export {
    C as __tla,
    k as default
};