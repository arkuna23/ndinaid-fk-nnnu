import {
    e as j,
    o as u,
    c as p,
    k as o,
    l as r,
    a as l,
    F as s,
    y as i,
    C as f,
    O as D,
    ab as P,
    ac as T,
    cK as g,
    __tla as M
} from "./index-6c08ea4c.js";

import {
    b,
    D as y,
    __tla as O
} from "./dict-c5825220.js";

import {
    __tla as U
} from "./project-51c056b9.js";

import w, {
    __tla as A
} from "./ModulesChoose-34e6a0e7.js";

import {
    _ as E
} from "./_plugin-vue_export-helper-1b428a4d.js";

let V, H = Promise.all([ (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})() ]).then(async () => {
    V = E({
        __name: "TaskDemand",
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
        setup(I, {
            emit: k
        }) {
            const v = k, m = I, e = j({
                get: () => m.formData,
                set: c => {
                    v("update:formData", c);
                }
            });
            return (c, t) => {
                const d = D, n = P, _ = T, h = g;
                return u(), p(s, null, [ o(d, {
                    label: "模块",
                    prop: "taskModuleId"
                }, {
                    default: r(() => [ o(w, {
                        modelValue: l(e).taskModuleId,
                        "onUpdate:modelValue": t[0] || (t[0] = a => l(e).taskModuleId = a),
                        projectId: m.projectId
                    }, null, 8, [ "modelValue", "projectId" ]) ]),
                    _: 1
                }), o(d, {
                    label: "优先级",
                    prop: "priority"
                }, {
                    default: r(() => [ o(_, {
                        modelValue: l(e).priority,
                        "onUpdate:modelValue": t[1] || (t[1] = a => l(e).priority = a),
                        clearable: "",
                        placeholder: "请选择优先级"
                    }, {
                        default: r(() => [ (u(!0), p(s, null, i(l(b)(l(y).EXP_TASK_PRIORITY), a => (u(), 
                        f(n, {
                            key: a.value,
                            label: a.label,
                            value: a.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), o(d, {
                    label: "重要程度",
                    prop: "importance"
                }, {
                    default: r(() => [ o(_, {
                        modelValue: l(e).importance,
                        "onUpdate:modelValue": t[2] || (t[2] = a => l(e).importance = a),
                        clearable: "",
                        placeholder: "请选择重要程度"
                    }, {
                        default: r(() => [ (u(!0), p(s, null, i(l(b)(l(y).EXP_TASK_IMPORTANCE), a => (u(), 
                        f(n, {
                            key: a.value,
                            label: a.label,
                            value: a.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), o(d, {
                    label: "预计工时",
                    prop: "workHours"
                }, {
                    default: r(() => [ o(h, {
                        modelValue: l(e).workHours,
                        "onUpdate:modelValue": t[3] || (t[3] = a => l(e).workHours = a),
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
    }, [ [ "__scopeId", "data-v-990fd0aa" ] ]);
});

export {
    H as __tla,
    V as default
};