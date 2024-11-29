import {
    r as b,
    U as h,
    f as U,
    w as k,
    o as n,
    c,
    t as g,
    F as _,
    y as v,
    z as w,
    B as R,
    k as d,
    l as r,
    C,
    P as S,
    O as q,
    ab as E,
    ac as P,
    Q as j,
    __tla as $
} from "./index-6c08ea4c.js";

import {
    g as Q,
    __tla as A
} from "./taskManage-5f71a641.js";

import {
    g as G,
    __tla as H
} from "./templateType-4cbca9bc.js";

import {
    _ as J
} from "./_plugin-vue_export-helper-1b428a4d.js";

let T, K = Promise.all([ (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})() ]).then(async () => {
    const V = {
        name: "BaseInfo",
        props: {
            pipeConfig: {
                type: Object,
                default: () => ({})
            },
            formDisabled: {
                type: Boolean,
                default: !1
            }
        },
        setup(m, t) {
            const i = b(0), a = h([ "流水线信息" ]);
            let o = h({});
            const F = b(null);
            U(() => {
                y(), l.form.name = m.pipeConfig.metadata.name, l.form.namespace = m.pipeConfig.metadata.namespace, 
                l.form.type = m.pipeConfig.metadata.labels["neuedu.com/type"], l.form.syncType = m.pipeConfig.metadata.labels["neuedu.com/syncType"], 
                o = m.pipeConfig;
            });
            let l = h({
                form: {}
            });
            const p = b([]), u = b([]), f = b([ {
                value: 1,
                label: "init"
            }, {
                value: 2,
                label: "timing"
            }, {
                value: 3,
                label: "manual"
            } ]);
            let y = async () => {
                await G({
                    type: 2
                }).then(e => {
                    e.code === 200 && e.data.records.forEach(s => {
                        u.value.push({
                            label: s.name,
                            value: s.code
                        });
                    });
                }), await Q().then(e => {
                    e.data.forEach(s => {
                        p.value.push({
                            value: s.metadata.name,
                            label: s.metadata.name
                        });
                    });
                });
            };
            return k(() => m.pipeConfig, e => {
                l.form.name = e.metadata.name, l.form.namespace = e.metadata.namespace, 
                l.form.type = e.metadata.labels["neuedu.com/type"], l.form.syncType = e.metadata.labels["neuedu.com/syncType"];
            }, {
                deep: !0
            }), k(() => l.form, e => {
                o.metadata.name = e.name, o.metadata.namespace = e.namespace, o.metadata.labels["neuedu.com/type"] = e.type, 
                o.metadata.labels["neuedu.com/syncType"] = e.syncType, t.emit("update:upFileData", o);
            }, {
                deep: !0
            }), {
                pipelineConfig: a,
                editFormRef: F,
                editForm: l,
                initEditForm: () => ({
                    name: m.name || "",
                    namespace: m.namespace || ""
                }),
                editRules: {
                    name: [ {
                        required: !0,
                        message: "名称不能为空",
                        trigger: "blur"
                    }, {
                        pattern: /^[^\s]+$/,
                        message: "不允许输入空格",
                        trigger: "blur"
                    }, {
                        pattern: /^[a-z0-9][a-z0-9-]+[a-z0-9]$/,
                        message: "名称以数字或小写字母开头结尾，且只能包含小写字母、数字，以及 -",
                        trigger: "blur"
                    }, {
                        max: 63,
                        message: "最多 63 个字符",
                        trigger: "blur"
                    } ],
                    type: [ {
                        required: !0,
                        message: "类型不能为空",
                        trigger: "blur"
                    } ],
                    syncType: [ {
                        required: !0,
                        message: "同步类型不能为空",
                        trigger: "blur"
                    } ]
                },
                cheakForm: () => {},
                hanldeClick: e => {
                    i.value = e;
                },
                activeIndex: i,
                nameSpaceOptions: p,
                taskTypeOptions: u,
                taskSyncTypeOptions: f,
                getOptionsData: y,
                receivePipe: o
            };
        }
    }, O = {
        class: "baseInfo"
    }, D = {
        id: "tabContentBox"
    }, x = {
        id: "left",
        class: "cardBasic l pa-5"
    }, B = {
        class: "BtnBox"
    }, z = [ "onClick" ], I = {
        id: "rightContent"
    };
    T = J(V, [ [ "render", function(m, t, i, a, o, F) {
        const l = S, p = q, u = E, f = P, y = j;
        return n(), c("div", O, [ g("section", D, [ g("div", x, [ g("ul", B, [ (n(!0), 
        c(_, null, v(a.pipelineConfig, (e, s) => (n(), c("li", {
            key: s,
            class: w({
                active: a.activeIndex === s
            }),
            onClick: L => a.hanldeClick(s)
        }, R(e), 11, z))), 128)) ]) ]), g("div", I, [ d(y, {
            ref: "editFormRef",
            model: a.editForm.form,
            rules: a.editRules,
            "label-width": "100px",
            "label-position": "top",
            size: "large"
        }, {
            default: r(() => [ d(p, {
                label: "流水线名称",
                prop: "name"
            }, {
                default: r(() => [ d(l, {
                    modelValue: a.editForm.form.name,
                    "onUpdate:modelValue": t[0] || (t[0] = e => a.editForm.form.name = e),
                    placeholder: "请输入",
                    disabled: i.formDisabled
                }, null, 8, [ "modelValue", "disabled" ]) ]),
                _: 1
            }), d(p, {
                label: "类型",
                prop: "type"
            }, {
                default: r(() => [ d(f, {
                    modelValue: a.editForm.form.type,
                    "onUpdate:modelValue": t[1] || (t[1] = e => a.editForm.form.type = e),
                    placeholder: "请选择",
                    disabled: i.formDisabled
                }, {
                    default: r(() => [ (n(!0), c(_, null, v(a.taskTypeOptions, e => (n(), 
                    C(u, {
                        key: e.value,
                        label: e.label,
                        value: e.value
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue", "disabled" ]) ]),
                _: 1
            }), d(p, {
                label: "同步类型",
                prop: "syncType"
            }, {
                default: r(() => [ d(f, {
                    modelValue: a.editForm.form.syncType,
                    "onUpdate:modelValue": t[2] || (t[2] = e => a.editForm.form.syncType = e),
                    placeholder: "请选择",
                    disabled: i.formDisabled
                }, {
                    default: r(() => [ (n(!0), c(_, null, v(a.taskSyncTypeOptions, e => (n(), 
                    C(u, {
                        key: e.value,
                        label: e.label,
                        value: e.label
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue", "disabled" ]) ]),
                _: 1
            }), d(p, {
                label: "命名空间",
                prop: "namespace"
            }, {
                default: r(() => [ d(f, {
                    modelValue: a.editForm.form.namespace,
                    "onUpdate:modelValue": t[3] || (t[3] = e => a.editForm.form.namespace = e),
                    placeholder: "请选择",
                    disabled: i.formDisabled
                }, {
                    default: r(() => [ (n(!0), c(_, null, v(a.nameSpaceOptions, e => (n(), 
                    C(u, {
                        key: e.value,
                        label: e.label,
                        value: e.label
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue", "disabled" ]) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "model", "rules" ]) ]) ]) ]);
    } ], [ "__scopeId", "data-v-804bb45a" ] ]);
});

export {
    K as __tla,
    T as default
};