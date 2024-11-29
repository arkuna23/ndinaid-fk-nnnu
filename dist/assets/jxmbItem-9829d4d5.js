import {
    u as R,
    T as q,
    r as n,
    b0 as J,
    U as N,
    o as O,
    C as j,
    l as t,
    k as l,
    a as r,
    t as k,
    v,
    m as E,
    bo as S,
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
    x as H,
    __tla as K
} from "./pkgManage-14933852.js";

import {
    _ as W
} from "./_plugin-vue_export-helper-1b428a4d.js";

let x, X = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    let b, h;
    b = {
        class: "ktIdList"
    }, h = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, x = W({
        __name: "jxmbItem",
        emits: [ "tableRefresh" ],
        setup(Y, {
            expose: y,
            emit: L
        }) {
            R();
            const f = q(), u = n(!1), I = L, g = J("basicInformation"), e = n({
                id: void 0,
                neuPkgId: f.params.id,
                resPkgId: f.params.id,
                resRootPkgId: g.value.neuPkgId,
                resIsNeu: g.value && g.value.neuPkgId ? 1 : 0,
                targetCode: "",
                targetClassify: null,
                targetContent: "",
                targetContentTxt: "",
                ktIdList: []
            }), m = n(), w = N({
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
            }), V = n([]), P = () => {
                m.value.validate(o => {
                    o && (e.value.targetContentTxt = e.value.targetContent, e.value.ktIdList = [], 
                    e.value.ktIdList.forEach(a => {
                        e.value.ktIdList.push(a.ktId);
                    }), H(e.value).then(a => {
                        S({
                            message: "操作成功",
                            type: "success"
                        }), c(1);
                    }));
                });
            }, c = o => {
                e.value.id = void 0, e.value.targetCode = "", e.value.targetClassify = null, 
                e.value.targetContent = "", e.value.targetContentTxt = "", e.value.ktIdList = [], 
                m.value.clearValidate(), I("tableRefresh", o), u.value = !1;
            };
            return y({
                open: o => {
                    V.value = [ {
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
                const _ = A, d = B, p = D, U = F, C = M, i = Q, z = Z, T = $;
                return O(), j(T, {
                    modelValue: r(u),
                    "onUpdate:modelValue": a[4] || (a[4] = s => E(u) ? u.value = s : null),
                    title: r(e).id ? "编辑教学目标" : "新建教学目标",
                    width: "750px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: a[5] || (a[5] = s => c(0))
                }, {
                    default: t(() => [ l(z, {
                        ref_key: "formRef",
                        ref: m,
                        class: "jxmbItemTable",
                        "label-position": "top",
                        "label-width": "90px",
                        inline: !0,
                        model: r(e),
                        rules: r(w)
                    }, {
                        default: t(() => [ l(d, {
                            prop: "targetCode",
                            label: "目标编号"
                        }, {
                            default: t(() => [ l(_, {
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
                        }), l(d, {
                            class: "targetContent",
                            label: "目标内容",
                            prop: "targetContent",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: t(() => [ l(_, {
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
                            prop: "ktIdList",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: t(() => [ k("div", b, [ l(i, {
                                round: "",
                                size: "small",
                                class: "pointsItem"
                            }, {
                                default: t(() => [ v("知识点1  "), l(C, {
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
                                default: t(() => [ l(C, {
                                    icon: "ep:plus",
                                    color: "#333",
                                    size: 14
                                }), v(" 添加") ]),
                                _: 1
                            }) ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), k("div", h, [ l(i, {
                        onClick: a[3] || (a[3] = s => c(0))
                    }, {
                        default: t(() => [ v("取消") ]),
                        _: 1
                    }), l(i, {
                        type: "primary",
                        onClick: P
                    }, {
                        default: t(() => [ v("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-f2e11cbe" ] ]);
});

export {
    X as __tla,
    x as default
};