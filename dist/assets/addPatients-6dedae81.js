import {
    o as v,
    c as D,
    k as e,
    l as a,
    t as q,
    v as n,
    P as x,
    O as U,
    av as y,
    N as A,
    ab as R,
    ac as N,
    aw as O,
    J as $,
    Q as w,
    __tla as B
} from "./index-6c08ea4c.js";

import {
    _ as C
} from "./_plugin-vue_export-helper-1b428a4d.js";

let c, G = Promise.all([ (() => {
    try {
        return B;
    } catch {}
})() ]).then(async () => {
    const b = {
        class: "formbody"
    }, _ = {
        style: {
            "text-align": "center",
            "margin-top": "20px"
        }
    };
    c = C({
        emits: [ "backToList", "addPatient" ],
        data: () => ({
            form: {
                ID: "",
                Name: "",
                BirthDate: "",
                Sex: "",
                Age: "",
                AgeGroup: "",
                OutpatientDoctor: "",
                Radiologists: "",
                Info: ""
            },
            requiredItem: [ {
                required: !0,
                message: "此项必填",
                trigger: "blur"
            } ]
        }),
        methods: {
            submitNow() {
                this.$refs.formRef.validate(s => {
                    s && this.$emit("addPatient", this.form);
                });
            },
            backList() {
                this.$emit("backToList"), this.resetForm("formRef");
            },
            resetForm(s = "formRef") {
                this.$refs[s] && this.$refs[s].resetFields();
            }
        }
    }, [ [ "render", function(s, r, L, P, l, f) {
        const d = x, o = U, u = y, V = A, m = R, i = N, k = O, p = $, I = w;
        return v(), D("div", b, [ e(I, {
            ref: "formRef",
            model: l.form,
            "label-width": "100px"
        }, {
            default: a(() => [ e(k, {
                gutter: 20
            }, {
                default: a(() => [ e(u, {
                    span: 12
                }, {
                    default: a(() => [ e(o, {
                        label: "患者编号",
                        rules: l.requiredItem,
                        prop: "ID"
                    }, {
                        default: a(() => [ e(d, {
                            clearable: "",
                            modelValue: l.form.ID,
                            "onUpdate:modelValue": r[0] || (r[0] = t => l.form.ID = t)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "rules" ]) ]),
                    _: 1
                }), e(u, {
                    span: 12
                }, {
                    default: a(() => [ e(o, {
                        label: "姓名",
                        rules: l.requiredItem,
                        prop: "Name"
                    }, {
                        default: a(() => [ e(d, {
                            clearable: "",
                            modelValue: l.form.Name,
                            "onUpdate:modelValue": r[1] || (r[1] = t => l.form.Name = t)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "rules" ]) ]),
                    _: 1
                }), e(u, {
                    span: 12
                }, {
                    default: a(() => [ e(o, {
                        label: "出生日期",
                        rules: l.requiredItem,
                        prop: "BirthDate"
                    }, {
                        default: a(() => [ e(V, {
                            "popper-class": "is-dark icho-dark",
                            modelValue: l.form.BirthDate,
                            "onUpdate:modelValue": r[2] || (r[2] = t => l.form.BirthDate = t),
                            "value-format": "YYYY-MM-DD",
                            class: "mr-2",
                            type: "date",
                            clearable: ""
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "rules" ]) ]),
                    _: 1
                }), e(u, {
                    span: 12
                }, {
                    default: a(() => [ e(o, {
                        label: "性别",
                        rules: l.requiredItem,
                        prop: "Sex"
                    }, {
                        default: a(() => [ e(i, {
                            modelValue: l.form.Sex,
                            "onUpdate:modelValue": r[3] || (r[3] = t => l.form.Sex = t),
                            effect: "dark",
                            "popper-class": "is-dark icho-dark"
                        }, {
                            default: a(() => [ e(m, {
                                value: "男",
                                lable: "男"
                            }), e(m, {
                                value: "女",
                                lable: "女"
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "rules" ]) ]),
                    _: 1
                }), e(u, {
                    span: 12
                }, {
                    default: a(() => [ e(o, {
                        label: "年龄",
                        rules: l.requiredItem,
                        prop: "Age"
                    }, {
                        default: a(() => [ e(d, {
                            clearable: "",
                            modelValue: l.form.Age,
                            "onUpdate:modelValue": r[4] || (r[4] = t => l.form.Age = t)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "rules" ]) ]),
                    _: 1
                }), e(u, {
                    span: 12
                }, {
                    default: a(() => [ e(o, {
                        label: "年龄组",
                        rules: l.requiredItem,
                        prop: "AgeGroup"
                    }, {
                        default: a(() => [ e(i, {
                            modelValue: l.form.AgeGroup,
                            "onUpdate:modelValue": r[5] || (r[5] = t => l.form.AgeGroup = t),
                            effect: "dark",
                            "popper-class": "is-dark icho-dark"
                        }, {
                            default: a(() => [ e(m, {
                                value: "儿童",
                                lable: "儿童"
                            }), e(m, {
                                value: "成人",
                                lable: "成人"
                            }), e(m, {
                                value: "老人",
                                lable: "老人"
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "rules" ]) ]),
                    _: 1
                }), e(u, {
                    span: 12
                }, {
                    default: a(() => [ e(o, {
                        label: "主治医师",
                        rules: l.requiredItem,
                        prop: "OutpatientDoctor"
                    }, {
                        default: a(() => [ e(d, {
                            clearable: "",
                            modelValue: l.form.OutpatientDoctor,
                            "onUpdate:modelValue": r[6] || (r[6] = t => l.form.OutpatientDoctor = t)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "rules" ]) ]),
                    _: 1
                }), e(u, {
                    span: 12
                }, {
                    default: a(() => [ e(o, {
                        label: "技师",
                        rules: l.requiredItem,
                        prop: "Radiologists"
                    }, {
                        default: a(() => [ e(d, {
                            clearable: "",
                            modelValue: l.form.Radiologists,
                            "onUpdate:modelValue": r[7] || (r[7] = t => l.form.Radiologists = t)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "rules" ]) ]),
                    _: 1
                }), e(u, {
                    span: 24
                }, {
                    default: a(() => [ e(o, {
                        label: "医嘱",
                        rules: l.requiredItem,
                        prop: "Info"
                    }, {
                        default: a(() => [ e(d, {
                            clearable: "",
                            modelValue: l.form.Info,
                            "onUpdate:modelValue": r[8] || (r[8] = t => l.form.Info = t),
                            type: "textarea"
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "rules" ]) ]),
                    _: 1
                }) ]),
                _: 1
            }), q("div", _, [ e(p, {
                type: "primary",
                size: "default",
                class: "dark-btn mr-4",
                onClick: f.submitNow
            }, {
                default: a(() => [ n("确定") ]),
                _: 1
            }, 8, [ "onClick" ]), e(p, {
                size: "default",
                class: "dark-btn",
                onClick: f.backList
            }, {
                default: a(() => [ n("取消") ]),
                _: 1
            }, 8, [ "onClick" ]) ]) ]),
            _: 1
        }, 8, [ "model" ]) ]);
    } ], [ "__scopeId", "data-v-40bcbd1d" ] ]);
});

export {
    G as __tla,
    c as default
};