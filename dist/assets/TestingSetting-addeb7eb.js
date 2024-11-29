import {
    p as le,
    r as c,
    e as te,
    A,
    a as t,
    o as _,
    C as E,
    l as d,
    k as i,
    c as I,
    F as K,
    y as X,
    t as s,
    B as ie,
    G as se,
    v as b,
    cK as re,
    O as de,
    bp as ue,
    bq as oe,
    P as ne,
    a8 as pe,
    _ as me,
    J as ce,
    Q as ve,
    a9 as ge,
    R as _e,
    S as he,
    __tla as ye
} from "./index-6c08ea4c.js";

import B, {
    __tla as be
} from "./ComChooseCodeFile-fe23b12d.js";

import {
    b as fe,
    D as Ie,
    __tla as xe
} from "./dict-c5825220.js";

import {
    g as Fe,
    t as Ve,
    v as Re,
    __tla as we
} from "./project-51c056b9.js";

import {
    a as ke,
    __tla as Pe
} from "./judge-7c842b3d.js";

import {
    _ as Ue
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

let G, qe = Promise.all([ (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})() ]).then(async () => {
    let o, x, F, V, R, w, k, P, U, q, D, O;
    o = n => (_e("data-v-67ce7605"), n = n(), he(), n), x = o(() => s("div", {
        class: "relative"
    }, [ b(" 评测时长 "), s("span", {
        class: "gray-12"
    }, "程序编译、执行所允许的最大时长，单位：秒") ], -1)), F = o(() => s("div", {
        class: "relative"
    }, [ b(" 学生任务文件 "), s("span", {
        class: "gray-12"
    }, "该文件将直接显示给学生，需要学生在其中填写代码") ], -1)), V = o(() => s("div", {
        class: "relative"
    }, [ b(" 评测执行文件 "), s("span", {
        class: "gray-12"
    }, "点击评测按钮时调用的文件，用于检测学员结果是否正确，可以与“学生任务文件”一致") ], -1)), R = o(() => s("div", {
        class: "el-form-item__label icho-lable-required mb-12px !pl-10px"
    }, "测试集 ", -1)), w = {
        class: "step-list"
    }, k = {
        class: "el-form-item__label mb-12px"
    }, P = {
        class: "item-description"
    }, U = {
        class: "item-result"
    }, q = {
        class: "item-checkbox"
    }, D = o(() => s("div", {
        class: "left"
    }, "特殊判定：", -1)), O = o(() => s("div", {
        class: "left gray-12"
    }, "（实际输出与预期输出最后一行相同即可通关）", -1)), G = Ue({
        __name: "TestingSetting",
        props: {
            taskId: {
                default: "",
                type: String
            },
            codeRepositoryId: {
                default: "",
                type: String
            }
        },
        setup(n, {
            expose: H
        }) {
            const J = le(), T = n, f = c(!1), M = c(""), z = c(""), e = c({
                id: "",
                taskId: "",
                evaluateDuration: 10,
                evaluationFileId: "",
                determineFileId: "",
                spaceRule: 1,
                tests: [ {
                    id: "",
                    name: "",
                    expectInput: "",
                    expectOutput: "",
                    determineType: 2
                } ]
            }), Q = te(() => ({
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
                evaluateDuration: [ {
                    required: !0,
                    message: "请输入评测时长",
                    trigger: "blur"
                } ],
                evaluationFileId: [ {
                    required: !0,
                    message: "请选择学生任务文件",
                    trigger: "blur"
                } ],
                determineFileId: [ {
                    required: !0,
                    message: "请选择评测执行文件",
                    trigger: "blur"
                } ],
                spaceRule: [ {
                    required: !0,
                    message: "请选择评测空格处理规则",
                    trigger: "blur"
                } ]
            })), v = c(), g = c([]), j = async () => {
                g.value = await ke(T.codeRepositoryId);
            }, C = () => {
                var r;
                e.value = {
                    id: "",
                    taskId: "",
                    evaluateDuration: 10,
                    evaluationFileId: "",
                    determineFileId: "",
                    spaceRule: 1,
                    tests: [ {
                        id: "",
                        name: "",
                        expectInput: "",
                        expectOutput: "",
                        determineType: 2
                    } ]
                }, (r = v.value) == null || r.resetFields();
            }, h = r => r && g.value.length > 0 && g.value.find(a => a.id === r) || {};
            return H({
                initForm: async (r, a) => {
                    if (M.value = r, z.value = a || "", C(), await j(), a) {
                        f.value = !0;
                        try {
                            let u = await Fe(a);
                            e.value = u || {
                                id: "",
                                taskId: "",
                                evaluateDuration: 10,
                                evaluationFileId: "",
                                determineFileId: "",
                                spaceRule: 1,
                                tests: [ {
                                    id: "",
                                    name: "",
                                    expectInput: "",
                                    expectOutput: "",
                                    determineType: 2
                                } ]
                            };
                        } finally {
                            f.value = !1;
                        }
                    }
                },
                resetForm: C,
                validate: async () => {
                    var r;
                    return await ((r = v.value) == null ? void 0 : r.validate());
                },
                formData: e,
                saveNow: async r => {
                    if (v && await v.value.validate()) try {
                        let a = h(e.value.determineFileId), u = h(e.value.evaluationFileId);
                        if (a.path !== u.path) return void J.warning("学生任务文件路径与评测执行文件路径不一致，请修改！");
                        e.value.id ? await Ve({
                            ...e.value,
                            determineFileName: a.name,
                            determineFilePath: a.path,
                            evaluationFileName: u.name,
                            evaluationFilePath: u.path
                        }) : await Re({
                            ...e.value,
                            taskId: z.value || T.taskId,
                            determineFileName: a.name,
                            determineFilePath: a.path,
                            evaluationFileName: u.name,
                            evaluationFilePath: u.path
                        }), r();
                    } catch {}
                }
            }), (r, a) => {
                const u = re, p = de, W = ue, Y = oe, L = ne, Z = pe, N = me, S = ce, $ = ve, ee = ge;
                return A((_(), E($, {
                    ref_key: "formRef",
                    ref: v,
                    "label-position": "top",
                    model: t(e),
                    size: "large",
                    rules: t(Q),
                    "label-width": "80px"
                }, {
                    default: d(() => [ i(p, {
                        label: "评测时长",
                        prop: "evaluateDuration"
                    }, {
                        label: d(() => [ x ]),
                        default: d(() => [ i(u, {
                            modelValue: t(e).evaluateDuration,
                            "onUpdate:modelValue": a[0] || (a[0] = l => t(e).evaluateDuration = l),
                            placeholder: "请输入",
                            min: 1,
                            step: 1,
                            "step-strictly": "",
                            max: 500,
                            "controls-position": "right",
                            class: "align-left"
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), i(p, {
                        label: "学生任务文件",
                        prop: "evaluationFileId"
                    }, {
                        label: d(() => [ F ]),
                        default: d(() => [ i(B, {
                            modelValue: t(e).evaluationFileId,
                            "onUpdate:modelValue": a[1] || (a[1] = l => t(e).evaluationFileId = l),
                            codeRepositoryId: n.codeRepositoryId,
                            defaultList: t(g),
                            chooseFilePath: h(t(e).determineFileId).path || ""
                        }, null, 8, [ "modelValue", "codeRepositoryId", "defaultList", "chooseFilePath" ]) ]),
                        _: 1
                    }), i(p, {
                        label: "评测执行文件",
                        prop: "determineFileId"
                    }, {
                        label: d(() => [ V ]),
                        default: d(() => [ i(B, {
                            modelValue: t(e).determineFileId,
                            "onUpdate:modelValue": a[2] || (a[2] = l => t(e).determineFileId = l),
                            codeRepositoryId: n.codeRepositoryId,
                            defaultList: t(g),
                            chooseFilePath: h(t(e).evaluationFileId).path || ""
                        }, null, 8, [ "modelValue", "codeRepositoryId", "defaultList", "chooseFilePath" ]) ]),
                        _: 1
                    }), i(p, {
                        label: "评测空格处理规则",
                        prop: "spaceRule"
                    }, {
                        default: d(() => [ i(Y, {
                            modelValue: t(e).spaceRule,
                            "onUpdate:modelValue": a[3] || (a[3] = l => t(e).spaceRule = l)
                        }, {
                            default: d(() => [ (_(!0), I(K, null, X(t(fe)(t(Ie).EXP_TASK_EVALUATION_SPACE_RULE), l => (_(), 
                            E(W, {
                                key: l.value,
                                label: l.label,
                                value: l.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), R, s("div", w, [ (_(!0), I(K, null, X(t(e).tests, (l, y) => (_(), 
                    I("div", {
                        class: "step-item",
                        key: "step-item" + l.index
                    }, [ s("div", k, "测试集" + ie(y + 1), 1), s("div", P, [ i(p, {
                        label: "",
                        "label-width": "80px",
                        prop: "tests." + y + ".expectInput",
                        rules: [ {
                            required: !1,
                            message: "输入",
                            trigger: [ "blur" ]
                        }, {
                            min: 1,
                            max: 200,
                            message: "长度在 1 到 200 个字符",
                            trigger: [ "blur" ]
                        } ],
                        style: {
                            border: "0",
                            "margin-bottom": "20px",
                            padding: "0"
                        }
                    }, {
                        default: d(() => [ i(L, {
                            modelValue: l.expectInput,
                            "onUpdate:modelValue": m => l.expectInput = m,
                            type: "textarea",
                            minlength: "0",
                            maxlength: "200",
                            placeholder: "输入（选填）",
                            "show-word-limit": "",
                            autosize: {
                                minRows: 1,
                                maxRows: 3
                            }
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 2
                    }, 1032, [ "prop" ]) ]), s("div", U, [ i(p, {
                        label: "",
                        prop: "tests." + y + ".expectOutput",
                        rules: [ {
                            required: !0,
                            message: "请输入预期输出",
                            trigger: [ "blur" ]
                        }, {
                            min: 1,
                            max: 200,
                            message: "长度在 1 到 200 个字符",
                            trigger: [ "blur" ]
                        } ],
                        style: {
                            border: "0",
                            "margin-bottom": "20px",
                            padding: "0"
                        }
                    }, {
                        default: d(() => [ i(L, {
                            modelValue: l.expectOutput,
                            "onUpdate:modelValue": m => l.expectOutput = m,
                            type: "textarea",
                            minlength: "0",
                            maxlength: "200",
                            placeholder: "预期输出（必填）",
                            "show-word-limit": "",
                            autosize: {
                                minRows: 1,
                                maxRows: 3
                            }
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 2
                    }, 1032, [ "prop" ]) ]), s("div", q, [ D, i(Z, {
                        class: "left",
                        modelValue: l.determineType,
                        "onUpdate:modelValue": m => l.determineType = m,
                        "true-value": 2,
                        "false-value": 1,
                        size: "small",
                        label: "末尾匹配"
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), O ]), A(i(S, {
                        class: "del-item-btn",
                        type: "danger",
                        circle: "",
                        text: "",
                        onClick: m => ((De, ae) => {
                            e.value.tests.splice(ae, 1);
                        })(0, y)
                    }, {
                        default: d(() => [ i(N, {
                            icon: "ep:delete"
                        }) ]),
                        _: 2
                    }, 1032, [ "onClick" ]), [ [ se, t(e).tests.length !== 1 ] ]) ]))), 128)), i(S, {
                        class: "add-item-btn",
                        onClick: a[4] || (a[4] = l => {
                            e.value.tests.push({
                                id: "",
                                name: "",
                                expectInput: "",
                                expectOutput: "",
                                determineType: 2
                            });
                        })
                    }, {
                        default: d(() => [ i(N, {
                            icon: "ep:plus",
                            class: "mr-5px",
                            size: 20
                        }), b(" 新增测试集 ") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "model", "rules" ])), [ [ ee, t(f) ] ]);
            };
        }
    }, [ [ "__scopeId", "data-v-67ce7605" ] ]);
});

export {
    qe as __tla,
    G as default
};