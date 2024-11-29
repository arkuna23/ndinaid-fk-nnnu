import {
    u as q,
    T as J,
    r as v,
    b0 as N,
    U as O,
    o as j,
    C as E,
    l as t,
    k as l,
    a as r,
    t as C,
    v as g,
    m as S,
    bo as y,
    P as A,
    O as B,
    ab as D,
    ac as F,
    _ as M,
    J as Q,
    Q as Z,
    aU as $,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    r as H,
    t as K,
    __tla as W
} from "./pkgManage-4e23f8a8.js";

import {
    _ as X
} from "./_plugin-vue_export-helper-1b428a4d.js";

let x, Y = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})() ]).then(async () => {
    let b, h;
    b = {
        class: "ktIds"
    }, h = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, x = X({
        __name: "jxmbItem",
        emits: [ "tableRefresh" ],
        setup(ee, {
            expose: I,
            emit: k
        }) {
            q();
            const V = J(), u = v(!1), w = k, m = N("basicInformation"), e = v({
                id: void 0,
                resPkgId: V.params.id,
                resRootPkgId: m.value.neuPkgId,
                resIsNeu: m.value && m.value.neuPkgId ? 1 : 0,
                targetCode: "",
                targetClassify: null,
                targetContent: "",
                targetContentTxt: "",
                ktIds: []
            }), c = v(), L = O({
                targetCode: [ {
                    required: !0,
                    message: "目标编号不能为空",
                    trigger: "blur"
                }, {
                    pattern: /^[a-zA-Z0-9]+$/,
                    message: "目标编号只支持数字和字母",
                    trigger: "blur"
                }, {
                    max: 10,
                    message: "目标编号最多10位字符",
                    trigger: "blur"
                } ],
                targetClassify: [ {
                    required: !0,
                    message: "目标类型不能为空",
                    trigger: "change"
                } ],
                targetContent: [ {
                    required: !0,
                    message: "目标内容不能为空",
                    trigger: "blur"
                }, {
                    max: 500,
                    message: "目标内容最多500位字符",
                    trigger: "blur"
                } ]
            }), P = v([]), z = () => {
                c.value.validate(o => {
                    o && (e.value.targetContentTxt = e.value.targetContent, e.value.ktIds = [], 
                    e.value.ktIds.forEach(a => {
                        e.value.ktIds.push(a.ktId);
                    }), e.value.id ? H(e.value).then(a => {
                        y({
                            message: "操作成功",
                            type: "success"
                        }), d(1);
                    }) : K(e.value).then(a => {
                        y({
                            message: "操作成功",
                            type: "success"
                        }), d(1);
                    }));
                });
            }, d = o => {
                e.value.id = void 0, e.value.targetCode = "", e.value.targetClassify = null, 
                e.value.targetContent = "", e.value.targetContentTxt = "", e.value.ktIds = [], 
                c.value.clearValidate(), w("tableRefresh", o), u.value = !1;
            };
            return I({
                open: o => {
                    P.value = [ {
                        value: "1",
                        label: "Level one 1",
                        children: [ {
                            value: "1-1",
                            label: "Level two 1-1",
                            children: [ {
                                value: "1-1-1",
                                label: "Level three 1-1-1"
                            } ]
                        } ]
                    }, {
                        value: "2",
                        label: "Level one 2",
                        children: [ {
                            value: "2-1",
                            label: "Level two 2-1",
                            children: [ {
                                value: "2-1-1",
                                label: "Level three 2-1-1"
                            } ]
                        }, {
                            value: "2-2",
                            label: "Level two 2-2",
                            children: [ {
                                value: "2-2-1",
                                label: "Level three 2-2-1"
                            } ]
                        } ]
                    }, {
                        value: "3",
                        label: "Level one 3",
                        children: [ {
                            value: "3-1",
                            label: "Level two 3-1",
                            children: [ {
                                value: "3-1-1",
                                label: "Level three 3-1-1"
                            } ]
                        }, {
                            value: "3-2",
                            label: "Level two 3-2",
                            children: [ {
                                value: "3-2-1",
                                label: "Level three 3-2-1"
                            } ]
                        } ]
                    } ], o && (e.value = JSON.parse(JSON.stringify(o)), e.value.id = e.value.id), 
                    u.value = !0;
                }
            }), (o, a) => {
                const f = A, i = B, p = D, T = F, _ = M, n = Q, U = Z, R = $;
                return j(), E(R, {
                    modelValue: r(u),
                    "onUpdate:modelValue": a[4] || (a[4] = s => S(u) ? u.value = s : null),
                    title: r(e).id ? "编辑教学目标" : "新建教学目标",
                    width: "750px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: a[5] || (a[5] = s => d(0))
                }, {
                    default: t(() => [ l(U, {
                        ref_key: "formRef",
                        ref: c,
                        class: "jxmbItemTable",
                        "label-position": "top",
                        "label-width": "90px",
                        inline: !0,
                        model: r(e),
                        rules: r(L)
                    }, {
                        default: t(() => [ l(i, {
                            prop: "targetCode",
                            label: "目标编号"
                        }, {
                            default: t(() => [ l(f, {
                                modelValue: r(e).targetCode,
                                "onUpdate:modelValue": a[0] || (a[0] = s => r(e).targetCode = s),
                                modelModifiers: {
                                    trim: !0
                                },
                                clearable: "",
                                placeholder: "请输入教学目标编号"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(i, {
                            prop: "targetClassify",
                            label: "目标类型"
                        }, {
                            default: t(() => [ l(T, {
                                modelValue: r(e).targetClassify,
                                "onUpdate:modelValue": a[1] || (a[1] = s => r(e).targetClassify = s),
                                clearable: "",
                                placeholder: "请选择目标类型"
                            }, {
                                default: t(() => [ l(p, {
                                    label: "知识目标",
                                    value: 1
                                }), l(p, {
                                    label: "素质目标",
                                    value: 2
                                }), l(p, {
                                    label: "能力目标",
                                    value: 3
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(i, {
                            class: "targetContent",
                            label: "目标内容",
                            prop: "targetContent",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: t(() => [ l(f, {
                                modelValue: r(e).targetContent,
                                "onUpdate:modelValue": a[2] || (a[2] = s => r(e).targetContent = s),
                                style: {
                                    width: "100%"
                                },
                                rows: 5,
                                maxlength: 500,
                                "show-word-limit": "",
                                type: "textarea",
                                placeholder: "请输入教学目标内容"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(i, {
                            label: "关联知识技能点",
                            prop: "ktIds",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: t(() => [ C("div", b, [ l(n, {
                                round: "",
                                size: "small",
                                class: "pointsItem"
                            }, {
                                default: t(() => [ g("知识点1  "), l(_, {
                                    icon: "ep:circle-close-filled",
                                    color: "#BED0F8",
                                    size: 14
                                }) ]),
                                _: 1
                            }), l(n, {
                                round: "",
                                size: "small",
                                style: {
                                    color: "#333",
                                    "line-height": "14px"
                                }
                            }, {
                                default: t(() => [ l(_, {
                                    icon: "ep:plus",
                                    color: "#333",
                                    size: 14
                                }), g(" 添加") ]),
                                _: 1
                            }) ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), C("div", h, [ l(n, {
                        onClick: a[3] || (a[3] = s => d(0))
                    }, {
                        default: t(() => [ g("取消") ]),
                        _: 1
                    }), l(n, {
                        type: "primary",
                        onClick: z
                    }, {
                        default: t(() => [ g("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-daa089bc" ] ]);
});

export {
    Y as __tla,
    x as default
};