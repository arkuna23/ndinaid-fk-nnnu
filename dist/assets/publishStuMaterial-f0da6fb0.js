import {
    p as B,
    h as J,
    T as M,
    a0 as P,
    r as c,
    U as Q,
    f as G,
    o as w,
    C as z,
    l as e,
    k as a,
    v as d,
    a as r,
    H as K,
    D as W,
    m as X,
    bo as Y,
    bp as Z,
    bq as $,
    O as ee,
    av as ae,
    N as le,
    aw as te,
    Q as se,
    J as re,
    aU as oe,
    R as ue,
    S as ne,
    t as de,
    n as ce,
    __tla as ie
} from "./index-6c08ea4c.js";

import {
    x as me,
    y as pe,
    z as fe,
    __tla as ge
} from "./index-9567cbf6.js";

import {
    _ as _e
} from "./_plugin-vue_export-helper-1b428a4d.js";

let S, he = Promise.all([ (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return ge;
    } catch {}
})() ]).then(async () => {
    let v;
    v = (m => (ue("data-v-504864fe"), m = m(), ne(), m))(() => de("div", {
        style: {
            height: "22px"
        }
    }, null, -1)), S = _e({
        __name: "publishStuMaterial",
        props: {
            teachInfo: {
                type: Object,
                default: () => ({})
            },
            categoryList: {
                type: Array,
                default: () => []
            },
            courseDeptList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "refreshList" ],
        setup(m, {
            expose: U,
            emit: x
        }) {
            const D = m;
            B();
            const y = J();
            M();
            const {
                teachInfo: b,
                categoryList: ve
            } = P(D), p = c(!1), g = c(""), l = Q({
                id: "",
                name: "",
                code: "",
                ename: "",
                type: "",
                enableStatus: "",
                releaseStatus: "",
                teachingObject: "",
                courseDept: "",
                courseDeptCode: "",
                courseDeptName: "",
                credit: "",
                classHours: "",
                courseDirection: "",
                preCourse: "",
                preCourseCode: "",
                cover: "",
                introduction: "",
                creatorName: y.getUser.nickname,
                time: ""
            }), L = {
                name: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "blur"
                } ],
                course: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                code: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                date: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ]
            }, O = x;
            G(() => {});
            const f = () => {
                p.value = !1, g.value = "", h.value.resetFields(), F();
            }, _ = c(null), q = c(null), h = c(null), j = () => {
                h.value.validate(async s => {
                    if (!s) return !1;
                    await _.value(), Y.success("操作成功"), O("refreshList"), f();
                });
            }, I = async () => {
                await pe({
                    ...l
                });
            }, N = async () => {
                await fe({
                    id: b.id,
                    ...l
                });
            }, A = c([]), E = async () => {
                const s = await me({
                    keywords: ""
                });
                s && (A.value = s);
            };
            c({});
            const F = () => {
                Object.keys(l).forEach(s => {
                    l[s] = "";
                });
            };
            return U({
                handleOpen: ({
                    title: s,
                    type: t
                }) => {
                    p.value = !0, g.value = s, E();
                    const u = {
                        create: () => {
                            l.creatorName = y.getUser.nickname, l.releaseStatus = "0", 
                            _.value = I;
                        },
                        edit: () => {
                            _.value = N, ce(() => {
                                Object.keys(l).forEach(i => {
                                    var n;
                                    l[i] = (n = b.value) == null ? void 0 : n[i];
                                }), l.cover && q.value.getSrc(l.cover);
                            });
                        },
                        default: () => {}
                    };
                    (u[t] || u.default)();
                },
                handleClose: f
            }), (s, t) => {
                const u = Z, i = $, n = ee, C = ae, V = le, H = te, R = se, k = re, T = oe;
                return w(), z(T, {
                    modelValue: r(p),
                    "onUpdate:modelValue": t[6] || (t[6] = o => X(p) ? p.value = o : null),
                    width: "470px",
                    "close-on-click-modal": !1,
                    onClose: f,
                    appendToBody: !0,
                    title: r(g),
                    draggable: !1
                }, {
                    footer: e(() => [ a(k, {
                        size: "large",
                        onClick: t[5] || (t[5] = o => f())
                    }, {
                        default: e(() => [ d("返 回") ]),
                        _: 1
                    }), a(k, {
                        size: "large",
                        type: "primary",
                        onClick: j
                    }, {
                        default: e(() => [ d("确 定") ]),
                        _: 1
                    }) ]),
                    default: e(() => [ a(R, {
                        ref_key: "dialogFormRef",
                        ref: h,
                        model: r(l),
                        onSubmit: t[4] || (t[4] = K(() => {}, [ "prevent" ])),
                        rules: L,
                        class: "dialog-form",
                        "label-position": "top"
                    }, {
                        default: e(() => [ a(H, null, {
                            default: e(() => [ a(C, {
                                span: 12
                            }, {
                                default: e(() => [ a(n, {
                                    label: "发布方式",
                                    prop: "name"
                                }, {
                                    default: e(() => [ a(i, {
                                        modelValue: r(l).name,
                                        "onUpdate:modelValue": t[0] || (t[0] = o => r(l).name = o),
                                        class: "",
                                        onChange: s.handleSourceChange
                                    }, {
                                        default: e(() => [ a(u, {
                                            value: "1",
                                            size: "large"
                                        }, {
                                            default: e(() => [ d("立即发布") ]),
                                            _: 1
                                        }), a(u, {
                                            value: "2",
                                            size: "large"
                                        }, {
                                            default: e(() => [ d("定时发布") ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue", "onChange" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(C, {
                                span: 12
                            }, {
                                default: e(() => [ r(l).name === "2" ? (w(), z(n, {
                                    key: 0,
                                    prop: "date"
                                }, {
                                    label: e(() => [ v ]),
                                    default: e(() => [ a(V, {
                                        modelValue: r(l).date,
                                        "onUpdate:modelValue": t[1] || (t[1] = o => r(l).date = o),
                                        class: "ml-10px",
                                        style: {
                                            width: "180px"
                                        },
                                        type: "datetime"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                })) : W("", !0) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), a(n, {
                            label: "发布范围",
                            prop: "name"
                        }, {
                            default: e(() => [ a(i, {
                                modelValue: r(l).name,
                                "onUpdate:modelValue": t[2] || (t[2] = o => r(l).name = o),
                                class: "",
                                onChange: s.handleSourceChange
                            }, {
                                default: e(() => [ a(u, {
                                    value: "1",
                                    size: "large"
                                }, {
                                    default: e(() => [ d("当前班级") ]),
                                    _: 1
                                }), a(u, {
                                    value: "2",
                                    size: "large"
                                }, {
                                    default: e(() => [ d("全部班级") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue", "onChange" ]) ]),
                            _: 1
                        }), a(n, {
                            label: "首次播放要求",
                            prop: "name"
                        }, {
                            default: e(() => [ a(i, {
                                modelValue: r(l).name,
                                "onUpdate:modelValue": t[3] || (t[3] = o => r(l).name = o),
                                class: "",
                                onChange: s.handleSourceChange
                            }, {
                                default: e(() => [ a(u, {
                                    value: "1",
                                    size: "large"
                                }, {
                                    default: e(() => [ d("允许拖动") ]),
                                    _: 1
                                }), a(u, {
                                    value: "2",
                                    size: "large"
                                }, {
                                    default: e(() => [ d("不允许拖动") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue", "onChange" ]) ]),
                            _: 1
                        }), a(n, {
                            label: "截止时间",
                            prop: "name"
                        }, {
                            default: e(() => [ a(V, {
                                style: {
                                    width: "100%"
                                }
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-504864fe" ] ]);
});

export {
    he as __tla,
    S as default
};