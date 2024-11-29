import {
    u as q,
    T as J,
    r as n,
    U as O,
    o as R,
    C as j,
    l as t,
    k as l,
    a as r,
    t as _,
    v,
    m as E,
    bo as N,
    P,
    O as S,
    ab as A,
    ac as B,
    _ as D,
    J as F,
    Q as M,
    aU as Q,
    __tla as W
} from "./index-6c08ea4c.js";

import {
    W as Z,
    __tla as $
} from "./index-9567cbf6.js";

import {
    _ as G
} from "./_plugin-vue_export-helper-1b428a4d.js";

let C, H = Promise.all([ (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return $;
    } catch {}
})() ]).then(async () => {
    let p, b;
    p = {
        class: "ktList"
    }, b = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, C = G({
        __name: "jxmbItem",
        emits: [ "tableRefresh" ],
        setup(K, {
            expose: x,
            emit: y
        }) {
            q();
            const L = J(), u = n(!1), w = y, e = n({
                targetId: void 0,
                teachCourseId: L.params.teachCourseId,
                targetCode: "",
                targetClassify: null,
                targetContent: "",
                targetContentTxt: "",
                ktList: []
            }), g = n(), k = O({
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
            }), I = n([]), V = () => {
                g.value.validate(o => {
                    o && (e.value.targetContentTxt = e.value.targetContent, e.value.ktIds = [], 
                    e.value.ktList.forEach(a => {
                        e.value.ktIds.push(a.ktId);
                    }), Z(e.value).then(a => {
                        N({
                            message: "操作成功",
                            type: "success"
                        }), m(1);
                    }));
                });
            }, m = o => {
                e.value.targetId = void 0, e.value.targetCode = "", e.value.targetClassify = null, 
                e.value.targetContent = "", e.value.targetContentTxt = "", e.value.ktList = [], 
                g.value.clearValidate(), w("tableRefresh", o), u.value = !1;
            };
            return x({
                open: o => {
                    I.value = [ {
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
                    } ], o && (e.value = JSON.parse(JSON.stringify(o))), u.value = !0;
                }
            }), (o, a) => {
                const h = P, d = S, c = A, U = B, f = D, i = F, z = M, T = Q;
                return R(), j(T, {
                    modelValue: r(u),
                    "onUpdate:modelValue": a[4] || (a[4] = s => E(u) ? u.value = s : null),
                    title: r(e).targetId ? "编辑教学目标" : "新建教学目标",
                    width: "750px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: a[5] || (a[5] = s => m(0))
                }, {
                    default: t(() => [ l(z, {
                        ref_key: "formRef",
                        ref: g,
                        class: "jxmbItemTable",
                        "label-position": "top",
                        "label-width": "90px",
                        inline: !0,
                        model: r(e),
                        rules: r(k)
                    }, {
                        default: t(() => [ l(d, {
                            prop: "targetCode",
                            label: "目标编号"
                        }, {
                            default: t(() => [ l(h, {
                                modelValue: r(e).targetCode,
                                "onUpdate:modelValue": a[0] || (a[0] = s => r(e).targetCode = s),
                                modelModifiers: {
                                    trim: !0
                                },
                                clearable: "",
                                placeholder: "请输入教学目标编号"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(d, {
                            prop: "targetClassify",
                            label: "目标类型"
                        }, {
                            default: t(() => [ l(U, {
                                modelValue: r(e).targetClassify,
                                "onUpdate:modelValue": a[1] || (a[1] = s => r(e).targetClassify = s),
                                clearable: "",
                                placeholder: "请选择目标类型"
                            }, {
                                default: t(() => [ l(c, {
                                    label: "知识目标",
                                    value: 1
                                }), l(c, {
                                    label: "素质目标",
                                    value: 2
                                }), l(c, {
                                    label: "能力目标",
                                    value: 3
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(d, {
                            class: "targetContent",
                            label: "目标内容",
                            prop: "targetContent",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: t(() => [ l(h, {
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
                        }), l(d, {
                            label: "关联知识技能点",
                            prop: "ktList",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: t(() => [ _("div", p, [ l(i, {
                                round: "",
                                size: "small",
                                class: "pointsItem"
                            }, {
                                default: t(() => [ v("知识点1  "), l(f, {
                                    icon: "ep:circle-close-filled",
                                    color: "#BED0F8",
                                    size: 14
                                }) ]),
                                _: 1
                            }), l(i, {
                                round: "",
                                size: "small",
                                style: {
                                    color: "#333",
                                    "line-height": "14px"
                                }
                            }, {
                                default: t(() => [ l(f, {
                                    icon: "ep:plus",
                                    color: "#333",
                                    size: 14
                                }), v(" 添加") ]),
                                _: 1
                            }) ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), _("div", b, [ l(i, {
                        onClick: a[3] || (a[3] = s => m(0))
                    }, {
                        default: t(() => [ v("取消") ]),
                        _: 1
                    }), l(i, {
                        type: "primary",
                        onClick: V
                    }, {
                        default: t(() => [ v("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-8e9ad545" ] ]);
});

export {
    H as __tla,
    C as default
};