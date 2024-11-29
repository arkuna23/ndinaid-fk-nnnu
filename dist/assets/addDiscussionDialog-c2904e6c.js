import {
    a7 as c,
    h as B,
    e as J,
    T as L,
    r as g,
    U as M,
    o as Q,
    C as z,
    l as r,
    k as l,
    a as s,
    v as d,
    t as A,
    m as G,
    bo as H,
    P as N,
    O as W,
    bp as X,
    bq as Y,
    Q as Z,
    J as $,
    aU as ee,
    __tla as ae
} from "./index-6c08ea4c.js";

import {
    _ as te,
    __tla as le
} from "./Editor-ef737d2a.js";

let h, C, V, I, T, w, k, U, se = Promise.all([ (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})() ]).then(async () => {
    let _;
    k = a => c.get({
        url: "/teachmanager/teach-course-discuss/page",
        params: a
    }), T = a => c.delete({
        url: "/teachmanager/teach-course-discuss/delete",
        params: a
    }), V = a => c.delete({
        url: "/teachmanager/teach-course-discuss-comment/delete",
        params: a
    }), U = a => c.post({
        url: "/teachmanager/teach-course-discuss-comment-act/create",
        data: a
    }), C = a => c.get({
        url: "/teachmanager/teach-course-discuss-comment/getByDiscussId",
        params: a
    }), I = a => c.post({
        url: "/teachmanager/teach-course-discuss-comment/create",
        data: a
    }), _ = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, h = {
        __name: "addDiscussionDialog",
        emits: [ "tableRefresh" ],
        setup(a, {
            expose: R,
            emit: q
        }) {
            const D = B(), f = J(() => D.isTeacher), n = L(), u = g(!1), O = q, t = g({
                title: "",
                content: "",
                complexContent: "",
                viewType: "1",
                classify: f.value ? "1" : "2",
                teachCourseId: n.params.teachCourseId,
                teachClassId: n.params.classId
            }), m = g(), F = M({
                title: [ {
                    required: !0,
                    message: "请输入讨论标题",
                    trigger: [ "blur", "change" ]
                }, {
                    max: 50,
                    message: "讨论标题最多50位字符",
                    trigger: [ "blur", "change" ]
                } ],
                content: [ {
                    required: !0,
                    message: "请输入讨论内容",
                    trigger: [ "blur", "change" ]
                } ],
                viewType: [ {
                    required: !0,
                    message: "请输入讨论范围",
                    trigger: [ "blur", "change" ]
                } ]
            }), K = () => {
                m.value.validate(v => {
                    var e;
                    v && (e = {
                        ...t.value
                    }, c.post({
                        url: "/teachmanager/teach-course-discuss/create",
                        data: e
                    })).then(y => {
                        H({
                            message: "操作成功",
                            type: "success"
                        }), O("Refresh"), i();
                    });
                });
            }, i = () => {
                t.value = {
                    title: "",
                    content: "",
                    complexContent: "",
                    viewType: "1",
                    classify: f.value ? "1" : "2",
                    teachCourseId: n.params.teachCourseId,
                    teachClassId: n.params.classId
                }, m.value.resetFields(), u.value = !1;
            };
            return R({
                handleOpen: () => {
                    u.value = !0;
                }
            }), (v, e) => {
                const y = N, p = W, P = te, b = X, j = Y, E = Z, x = $, S = ee;
                return Q(), z(S, {
                    modelValue: s(u),
                    "onUpdate:modelValue": e[4] || (e[4] = o => G(u) ? u.value = o : null),
                    title: "新增讨论",
                    width: "820px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: i
                }, {
                    default: r(() => [ l(E, {
                        ref_key: "formRef",
                        ref: m,
                        "label-position": "top",
                        "label-width": "90px",
                        model: s(t),
                        rules: s(F)
                    }, {
                        default: r(() => [ l(p, {
                            prop: "title",
                            label: "讨论标题"
                        }, {
                            default: r(() => [ l(y, {
                                modelValue: s(t).title,
                                "onUpdate:modelValue": e[0] || (e[0] = o => s(t).title = o),
                                clearable: "",
                                placeholder: "请输入讨论标题"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(p, {
                            prop: "content",
                            label: "讨论内容"
                        }, {
                            default: r(() => [ l(P, {
                                ref: "ComEditorRef",
                                modelValue: s(t).complexContent,
                                "onUpdate:modelValue": e[1] || (e[1] = o => s(t).complexContent = o),
                                text: s(t).content,
                                "onUpdate:text": e[2] || (e[2] = o => s(t).content = o),
                                excludeKeys: [ "group-video", "emotion", "insertImage", "insertLink" ],
                                height: 100,
                                insertKeys: {
                                    index: 20,
                                    keys: [ "insertFormula" ]
                                },
                                ltm: 1
                            }, null, 8, [ "modelValue", "text" ]) ]),
                            _: 1
                        }), l(p, {
                            prop: "viewType",
                            label: "讨论范围"
                        }, {
                            default: r(() => [ l(j, {
                                modelValue: s(t).viewType,
                                "onUpdate:modelValue": e[3] || (e[3] = o => s(t).viewType = o)
                            }, {
                                default: r(() => [ l(b, {
                                    value: "1"
                                }, {
                                    default: r(() => [ d("当前班级") ]),
                                    _: 1
                                }), l(b, {
                                    value: "0"
                                }, {
                                    default: r(() => [ d("全部班级") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), A("div", _, [ l(x, {
                        onClick: i
                    }, {
                        default: r(() => [ d("取消") ]),
                        _: 1
                    }), l(x, {
                        type: "primary",
                        onClick: K
                    }, {
                        default: r(() => [ d("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, w = Object.defineProperty({
        __proto__: null,
        default: h
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    h as _,
    se as __tla,
    C as a,
    V as b,
    I as c,
    T as d,
    w as e,
    k as g,
    U as l
};