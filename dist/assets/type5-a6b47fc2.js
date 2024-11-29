import {
    b8 as W,
    e as X,
    r as m,
    f as Y,
    j as Z,
    o as f,
    C as O,
    l as s,
    k as r,
    t as o,
    v as g,
    a,
    c as P,
    F as ee,
    y as ae,
    A as y,
    B as le,
    G as T,
    m as se,
    I as te,
    H as re,
    L as oe,
    O as ne,
    K as ue,
    P as ie,
    Q as me,
    __tla as de
} from "./index-6c08ea4c.js";

import b, {
    __tla as ce
} from "./editEditor-a03e6696.js";

import {
    _ as pe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as _e
} from "./Editor-ef737d2a.js";

import {
    __tla as fe
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as ge
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as ye
} from "./file-e038b35d.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

let G, be = Promise.all([ (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return fe;
    } catch {}
})(), (() => {
    try {
        return ge;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})() ]).then(async () => {
    let h, v, w, x, V, K, q, k;
    h = {
        class: "label-box pr-5"
    }, v = {
        class: "label-box pr-5"
    }, w = {
        class: "label-box pr-5"
    }, x = {
        class: "answer-cont"
    }, V = {
        class: "tags-list"
    }, K = {
        class: "neu-thumbnailDisplay tagText"
    }, q = {
        class: "input-box"
    }, k = {
        class: "label-box pr-5"
    }, G = pe({
        __name: "type5",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isPreview: {
                type: Boolean,
                default: !1
            },
            isEdit: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:form" ],
        setup(I, {
            expose: $,
            emit: A
        }) {
            const {
                proxy: F
            } = W(), D = A, j = I, l = X({
                get: () => j.form,
                set: u => {
                    D("update:form", u);
                }
            }), H = m(), L = m({
                stem: [ {
                    required: !0,
                    message: "请输入题干",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                analysis: [ {
                    required: !1,
                    message: "请输入解析",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                choiceContent: [ {
                    required: !0,
                    message: "请输入选项内容",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                answer: [ {
                    required: !0,
                    message: "请输入答案",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ]
            }), n = m(""), C = m(), d = m(-1);
            function Q() {
                d.value = 1, C.value.focus();
            }
            function U() {
                let u = {
                    ...l.value
                };
                l.value = u;
            }
            function B(u = {}) {
                l.value = {
                    ...u,
                    answerKeywords: u.answerKeywords || []
                }, F.$refs.questionFormRef.resetFields();
            }
            return $({
                reset: B,
                validateForm: async () => F.$refs.questionFormRef.validate()
            }), Y(() => {
                B(j.form);
            }), (u, e) => {
                const i = oe, c = ne, S = ue, z = ie, J = me, M = Z("show-tip");
                return f(), O(J, {
                    model: a(l),
                    ref_key: "questionFormRef",
                    ref: H,
                    rules: a(L),
                    inline: !1,
                    onSubmit: e[7] || (e[7] = re(() => {}, [ "prevent" ]))
                }, {
                    default: s(() => [ r(c, {
                        prop: "stem"
                    }, {
                        label: s(() => [ o("div", h, [ r(i, null, {
                            default: s(() => [ g("题干") ]),
                            _: 1
                        }) ]) ]),
                        default: s(() => [ r(b, {
                            modelValue: a(l).stem,
                            "onUpdate:modelValue": e[0] || (e[0] = t => a(l).stem = t),
                            text: a(l).stemText,
                            "onUpdate:text": e[1] || (e[1] = t => a(l).stemText = t),
                            placeholder: "请点击此处编辑题干..."
                        }, null, 8, [ "modelValue", "text" ]) ]),
                        _: 1
                    }), r(c, {
                        prop: "answer"
                    }, {
                        label: s(() => [ o("div", v, [ r(i, null, {
                            default: s(() => [ g("答案") ]),
                            _: 1
                        }) ]) ]),
                        default: s(() => [ r(b, {
                            modelValue: a(l).answer,
                            "onUpdate:modelValue": e[2] || (e[2] = t => a(l).answer = t),
                            placeholder: "请点击此处编辑参考答案..."
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), r(c, {
                        prop: "answerKeywords"
                    }, {
                        label: s(() => [ o("div", w, [ r(i, {
                            type: "success"
                        }, {
                            default: s(() => [ g("关键词") ]),
                            _: 1
                        }) ]) ]),
                        default: s(() => [ o("div", x, [ o("div", V, [ (f(!0), P(ee, null, ae(a(l).answerKeywords, (t, p) => (f(), 
                        O(i, {
                            key: p + t.join(" 或 "),
                            class: "mx-1",
                            closable: "",
                            "disable-transitions": !1,
                            onClose: R => function(_, E, N) {
                                _.splice(N, 1), U();
                            }(a(l).answerKeywords, 0, p)
                        }, {
                            default: s(() => [ y((f(), P("span", null, [ r(S, {
                                content: t.join(" 或 "),
                                placement: "top",
                                "show-after": 300
                            }, {
                                default: s(() => [ o("span", K, le(t.join(" 或 ")), 1) ]),
                                _: 2
                            }, 1032, [ "content" ]) ])), [ [ M ] ]) ]),
                            _: 2
                        }, 1032, [ "onClose" ]))), 128)) ]), o("div", q, [ y(o("div", {
                            class: "placeholder pl-3",
                            onClick: Q
                        }, "点击此处编辑关键词，回车保存；支持保存多个关键词，多个关键词用“&&”去分割，并列关键词（或的关系）用“|”去分割。", 512), [ [ T, a(d) !== 1 ] ]), y(r(z, {
                            class: "answer-input",
                            ref_key: "keywordRef",
                            ref: C,
                            modelValue: a(n),
                            "onUpdate:modelValue": e[3] || (e[3] = t => se(n) ? n.value = t : null),
                            onBlur: e[4] || (e[4] = () => {
                                n.value = "", d.value = -1;
                            }),
                            onKeydown: e[5] || (e[5] = te(t => function(p = [], R) {
                                if (!n.value) return;
                                let _;
                                R === 1 && (_ = n.value), _.split("&&").forEach(E => p.push(E.split("|"))), 
                                n.value = "", U();
                            }(a(l).answerKeywords, 1), [ "enter" ])),
                            maxlength: "10000",
                            placeholder: "请输入答案"
                        }, null, 8, [ "modelValue" ]), [ [ T, a(d) === 1 ] ]) ]) ]) ]),
                        _: 1
                    }), r(c, {
                        prop: "analysis"
                    }, {
                        label: s(() => [ o("div", k, [ r(i, null, {
                            default: s(() => [ g("解析") ]),
                            _: 1
                        }) ]) ]),
                        default: s(() => [ r(b, {
                            modelValue: a(l).analysis,
                            "onUpdate:modelValue": e[6] || (e[6] = t => a(l).analysis = t)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-525f146a" ] ]);
});

export {
    be as __tla,
    G as default
};