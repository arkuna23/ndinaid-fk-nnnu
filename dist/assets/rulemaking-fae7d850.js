import {
    a7 as r,
    b8 as Qe,
    r as q,
    a0 as ze,
    w as Ne,
    U as Oe,
    o as $,
    c as k,
    t as n,
    k as p,
    l as b,
    a as o,
    aP as Be,
    B as h,
    F as Ke,
    y as je,
    C as Je,
    m as Ge,
    v,
    D as Ve,
    dW as we,
    _ as We,
    O as Ye,
    ab as He,
    ac as Xe,
    ak as Ze,
    cK as ea,
    Q as aa,
    R as oa,
    S as la,
    __tla as ta
} from "./index-6c08ea4c.js";

import sa, {
    __tla as na
} from "./chooseTags-11285796.js";

import {
    d as ia,
    D as ra,
    __tla as ua
} from "./dict-c5825220.js";

import {
    h as x,
    a as R,
    b as _
} from "./keyboardDisable-3c8e0d58.js";

import {
    _ as da
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as pa,
    __tla as ma
} from "./index-ef4d146e.js";

let w, T, Me, ca = Promise.all([ (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})() ]).then(async () => {
    let u, y, A, E, D, F, L, S, U, Q, z, N, O, B, K, j, J, G, W, Y, H, X, Z, ee, ae, oe, le, te, se, ne, ie, re, ue, de, pe, me, ce;
    u = "resource", w = {
        getList: t => r.post({
            url: `${u}/exam-paper/page`,
            params: t
        }),
        delFolderById: t => r.delete({
            url: `${u}/exam-paper/folder/${t}`
        }),
        delById: t => r.delete({
            url: `${u}/exam-paper/paper/${t}`
        }),
        delList: t => r.delete({
            url: `${u}/exam-paper/paper/batch`,
            data: t
        }),
        createFolder: t => r.post({
            url: `${u}/exam-paper/folder`,
            data: t
        }),
        updateFolder: (t, M) => r.put({
            url: `${u}/exam-paper/folder/${M || t.id}`,
            data: t
        }),
        copyPaper: t => r.post({
            url: `${u}/exam-paper/paper/copy/${t}`
        }),
        getFolderTree: () => r.get({
            url: `${u}/exam-paper/folder/tree`
        }),
        movePapers: (t, M) => r.put({
            url: `${u}/exam-paper/folder/move?parentId=${M}`,
            data: t
        }),
        createPaper: t => r.post({
            url: `${u}/exam-paper/manual/paper`,
            data: t
        }),
        updatePaper: t => r.put({
            url: `${u}/exam-paper/manual/paper`,
            data: t
        }),
        getPaperInfoById: t => r.get({
            url: `${u}/exam-paper/paper/${t}`
        }),
        submitPapers: t => r.post({
            url: `${u}/exam-paper/audit/submit`,
            data: t
        }),
        getCommitList: t => r.post({
            url: `${u}//exam-submit-paper/submit/record/page`,
            data: t
        }),
        delCommit: t => r.delete({
            url: `${u}//exam-submit-paper/${t}`
        }),
        batchDerivedA3: t => r.downloadError({
            url: "/smartexam/exam-expert/batchExportPaperA3",
            data: t,
            isDownLoad: !0
        }),
        batchDerivedA4: t => r.downloadError({
            url: "/smartexam/exam-expert/batchExportPaperA4",
            data: t,
            isDownLoad: !0
        }),
        getQuestionsFromMyPoolCountNotApi: t => r.post({
            url: `${u}/exam-question/notDifficulty/count`,
            data: t
        }),
        getQuestionsFromMyPoolCountApi: t => r.post({
            url: `${u}/exam-question/difficulty/count`,
            data: t
        }),
        getQuestionsFromMyPoolListNotApi: t => r.post({
            url: `${u}/exam-question/notDifficulty/list`,
            data: t
        }),
        getQuestionsFromMyPoolListApi: t => r.post({
            url: `${u}/exam-question/difficulty/list`,
            data: t
        }),
        writeQuestionsAccordingToTheRulesApi: t => r.post({
            url: `${u}/exam-paper/random/paper`,
            data: t
        }),
        checkByRuleApi: t => r.post({
            url: `${u}/exam-paper/check/random`,
            data: t
        })
    }, y = t => (oa("data-v-bb79d954"), t = t(), la(), t), A = {
        class: "ruleMakingStyle"
    }, E = y(() => n("div", {
        class: "tips"
    }, [ n("span", {
        class: "tipImg"
    }), n("span", null, "说明:请您设置选题规则，点击加入试卷后，系统将按照规则自动抽取试题生成试卷") ], -1)), D = {
        class: "formContainer"
    }, F = y(() => n("p", {
        class: "common-p"
    }, "筛选条件：", -1)), L = [ "onClick" ], S = {
        class: "custom-node-label"
    }, U = y(() => n("p", {
        class: "common-p"
    }, "抽题设置：", -1)), Q = {
        class: "degreeOfDifficulty"
    }, z = y(() => n("span", {
        class: "mr5"
    }, "按难易度选题", -1)), N = {
        class: "degreeOfDifficultyValue"
    }, O = {
        key: 0
    }, B = {
        class: "ml5"
    }, K = {
        class: "neu-color-blue mlr5"
    }, j = {
        key: 1
    }, J = {
        class: "mb10"
    }, G = y(() => n("span", {
        class: "number-item-label"
    }, "易", -1)), W = {
        class: "ml5"
    }, Y = {
        class: "neu-color-blue mlr5"
    }, H = {
        class: "mb10"
    }, X = y(() => n("span", {
        class: "number-item-label"
    }, "较易", -1)), Z = {
        class: "ml5"
    }, ee = {
        class: "neu-color-blue mlr5"
    }, ae = {
        class: "mb10"
    }, oe = y(() => n("span", {
        class: "number-item-label"
    }, "中等", -1)), le = {
        class: "ml5"
    }, te = {
        class: "neu-color-blue mlr5"
    }, se = {
        class: "mb10"
    }, ne = y(() => n("span", {
        class: "number-item-label"
    }, "较难", -1)), ie = {
        class: "ml5"
    }, re = {
        class: "neu-color-blue mlr5"
    }, ue = {
        class: "mb10"
    }, de = y(() => n("span", {
        class: "number-item-label"
    }, "难", -1)), pe = {
        class: "ml5"
    }, me = {
        class: "neu-color-blue mlr5"
    }, ce = y(() => n("span", {
        class: "ml5"
    }, "分", -1)), T = da({
        __name: "rulemaking",
        props: {
            activeName: {
                type: String,
                default: () => ""
            },
            questionIdList: {
                type: Array,
                default: () => []
            },
            ruleIsEdit: {
                type: Boolean,
                default: !1
            },
            editData: {
                type: Object,
                default: () => {}
            },
            treeList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "throwData" ],
        setup(t, {
            expose: M,
            emit: Pe
        }) {
            Qe();
            const Ce = Pe, ve = q(null), l = q({
                id: "",
                questionType: "",
                tags: [],
                questionScore: 0,
                questionRandom: 0,
                questionRandomMap: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0
                }
            }), P = q(), m = q({}), V = q(null);
            q([]), q([]);
            const c = q(!1), $e = t, {
                activeName: ye,
                questionIdList: ge,
                ruleIsEdit: qe,
                editData: C,
                treeList: ke
            } = ze($e), be = (s = !0, e = !0) => new Promise((i, d) => {
                if ([ "1" ].includes(ye.value)) (s ? Re("questionType") : Promise.resolve()).then(() => {
                    e ? Te(i, d) : i("Validation passed, but API call skipped");
                }).catch(g => d(g)); else {
                    const g = s ? [ Re("questionType") ] : [];
                    Promise.all(g).then(() => {
                        e ? Ae(i, d) : i("Validation passed, but API call skipped");
                    }).catch(I => d(I));
                }
            }), fe = s => {
                qe.value && (l.value.questionRandomMap = {
                    ...C.value.questionRandomMap
                }, l.value.questionRandom = C.value.questionRandom), he(s) ? Object.keys(l.value.questionRandomMap).forEach(e => {
                    s.hasOwnProperty(e) && l.value.questionRandomMap[e] > s[e] ? l.value.questionRandomMap[e] = s[e] || 0 : l.value.questionRandomMap[e] = 0;
                }) : Ie(s) && l.value.questionRandom > s && (l.value.questionRandom = s || 0);
            }, Ie = s => typeof s == "number", he = s => typeof s == "object" && !Array.isArray(s) && s !== null, xe = (s, e, i) => {
                s.then(d => {
                    he(d) ? (m.value = d, fe(d)) : (P.value = d, fe(d)), e();
                }).catch(d => i(d));
            }, Te = (s, e) => {
                if (l.value.questionType) {
                    const i = {
                        questionType: l.value.questionType,
                        tags: l.value.tags,
                        questionIds: ge.value,
                        release: 0,
                        parentId: we(l.value.id),
                        ktPointIdList: []
                    }, d = c.value ? w.getQuestionsFromMyPoolCountApi(i) : w.getQuestionsFromMyPoolCountNotApi(i);
                    xe(d, s, e);
                } else e(new Error("questionType is required"));
            }, Ae = (s, e) => {
                if (l.value.questionType) {
                    const i = {
                        questionType: l.value.questionType,
                        tags: l.value.tags,
                        questionIds: ge.value,
                        release: 1,
                        parentId: we(l.value.id),
                        ktPointIdList: []
                    }, d = c.value ? w.getQuestionsFromMyPoolCountApi(i) : w.getQuestionsFromMyPoolCountNotApi(i);
                    xe(d, s, e);
                } else e(new Error("Required fields are missing"));
            }, Re = s => new Promise((e, i) => {
                V.value.validateField(s, d => {
                    d ? e() : i(new Error(`Validation failed for ${s}`));
                });
            }), Ee = s => {
                s ? (V.value.clearValidate("questionRandom"), P.value = "") : (V.value.clearValidate("questionRandomMap"), 
                m.value = {});
            }, De = s => new Promise((e, i) => {
                be(!0, !1).then(() => e(!0)).catch(() => i(!1));
            });
            Ne(() => [ l.value.questionType, c.value, l.value.tags, l.value.id ], () => {
                be(!1).catch(s => {});
            }, {
                deep: !0
            });
            const Fe = Oe({
                bankId: [ {
                    required: !0,
                    message: "请选择题库",
                    trigger: "change"
                } ],
                questionType: [ {
                    required: !0,
                    message: "请选择题型",
                    trigger: "change"
                } ],
                questionRandom: [ {
                    type: "number",
                    required: !0,
                    message: "请设置选题数量",
                    trigger: "blur"
                }, {
                    validator: (s, e, i) => {
                        l.value.questionRandom <= 0 ? i(new Error("请设置选题数量")) : i();
                    }
                } ],
                questionScore: [ {
                    required: !0,
                    message: "请设置选题分数",
                    trigger: "change"
                }, {
                    validator: (s, e, i) => {
                        l.value.questionScore <= 0 ? i(new Error("请设置选题分数")) : i();
                    }
                } ],
                questionRandomMap: [ {
                    required: !0,
                    message: "请设置选题数量",
                    trigger: "change"
                }, {
                    validator: (s, e, i) => {
                        l.value.questionRandomMap[1] + l.value.questionRandomMap[2] + l.value.questionRandomMap[3] + l.value.questionRandomMap[4] + l.value.questionRandomMap[5] <= 0 ? i(new Error("请设置选题数量")) : i();
                    },
                    trigger: "blur"
                } ]
            });
            return M({
                clearDataCache: () => {
                    V.value.resetFields(), c.value = !1, P.value = "", l.value.questionRandomMap = {
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0,
                        5: 0
                    }, m.value = {}, ve.value.handleBack();
                },
                handleThrowData: () => new Promise((s, e) => {
                    V.value.validate(i => {
                        i ? (Ce("throwData", {
                            ...l.value,
                            specialVariable: c.value,
                            release: [ "1" ].includes(ye.value) ? "0" : "1",
                            ktPointIdList: []
                        }), s(l)) : e(new Error("表单验证失败"));
                    });
                }),
                copyDataByEdit: () => {
                    qe.value && (l.value = JSON.parse(JSON.stringify(C.value)), 
                    l.value.id = C.value.folderId, c.value = C.value.specialVariable);
                }
            }), (s, e) => {
                const i = We, d = pa, g = Ye, I = He, Le = Xe, Se = Ze, f = ea, Ue = aa;
                return $(), k("div", A, [ E, n("div", D, [ p(Ue, {
                    ref_key: "formRef",
                    ref: V,
                    model: o(l),
                    rules: o(Fe)
                }, {
                    default: b(() => [ F, p(g, {
                        label: "文件夹",
                        "label-width": "60px",
                        prop: "id"
                    }, {
                        default: b(() => [ p(d, {
                            modelValue: o(l).id,
                            "onUpdate:modelValue": e[0] || (e[0] = a => o(l).id = a),
                            data: o(ke),
                            props: {
                                label: "name"
                            },
                            "node-key": "id",
                            indent: 14,
                            "default-expand-all": "",
                            size: "large",
                            style: {
                                width: "351px"
                            },
                            "check-strictly": "",
                            icon: o(Be)
                        }, {
                            default: b(({
                                node: a,
                                data: _e
                            }) => [ n("span", {
                                class: "custom-tree-node",
                                onClick: va => s.handleNodeClick(a, _e)
                            }, [ n("span", S, [ p(i, {
                                icon: "svg-icon:folder",
                                size: 18,
                                svgClass: "mr5"
                            }), n("span", null, h(_e.name), 1) ]) ], 8, L) ]),
                            _: 1
                        }, 8, [ "modelValue", "data", "icon" ]) ]),
                        _: 1
                    }), p(g, {
                        label: "题型",
                        "label-width": "60px",
                        prop: "questionType"
                    }, {
                        default: b(() => [ p(Le, {
                            modelValue: o(l).questionType,
                            "onUpdate:modelValue": e[1] || (e[1] = a => o(l).questionType = a),
                            clearable: "",
                            size: "large",
                            style: {
                                width: "351px"
                            }
                        }, {
                            default: b(() => [ ($(!0), k(Ke, null, je(o(ia)(o(ra).QUESTION_TYPE), a => ($(), 
                            Je(I, {
                                key: a.value,
                                label: a.label,
                                value: a.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), p(g, {
                        label: "标签",
                        "label-width": "60px",
                        prop: "tags"
                    }, {
                        default: b(() => [ p(sa, {
                            ref_key: "chooseTagsRef",
                            ref: ve,
                            modelValue: o(l).tags,
                            "onUpdate:modelValue": e[2] || (e[2] = a => o(l).tags = a),
                            disableSearch: !0,
                            tagGroupUsage: "0"
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), U, n("div", Q, [ z, n("span", null, [ p(Se, {
                        modelValue: o(c),
                        "onUpdate:modelValue": e[3] || (e[3] = a => Ge(c) ? c.value = a : null),
                        "before-change": De,
                        onChange: Ee
                    }, null, 8, [ "modelValue" ]) ]) ]), n("div", N, [ p(g, {
                        prop: o(c) ? "questionRandomMap" : "questionRandom",
                        label: "选题数量"
                    }, {
                        default: b(() => [ o(c) ? Ve("", !0) : ($(), k("div", O, [ p(f, {
                            modelValue: o(l).questionRandom,
                            "onUpdate:modelValue": e[4] || (e[4] = a => o(l).questionRandom = a),
                            max: o(P) || 0,
                            min: 0,
                            "controls-position": "right",
                            size: "large",
                            style: {
                                width: "100px"
                            },
                            onCompositionend: e[5] || (e[5] = a => o(x)(a)),
                            onCompositionstart: e[6] || (e[6] = a => o(R)(a)),
                            onKeydown: e[7] || (e[7] = a => o(_)(a))
                        }, null, 8, [ "modelValue", "max" ]), n("span", B, [ v("题 （可选共"), n("span", K, h(o(P) || 0), 1), v("题）") ]) ])), o(c) ? ($(), 
                        k("div", j, [ n("div", J, [ G, p(f, {
                            modelValue: o(l).questionRandomMap[1],
                            "onUpdate:modelValue": e[8] || (e[8] = a => o(l).questionRandomMap[1] = a),
                            max: o(m)[1] || 0,
                            min: 0,
                            "controls-position": "right",
                            size: "large",
                            style: {
                                width: "100px"
                            },
                            onCompositionend: e[9] || (e[9] = a => o(x)(a)),
                            onCompositionstart: e[10] || (e[10] = a => o(R)(a)),
                            onKeydown: e[11] || (e[11] = a => o(_)(a))
                        }, null, 8, [ "modelValue", "max" ]), n("span", W, [ v("题 （可选共 "), n("span", Y, h(o(m)[1] || 0), 1), v(" 题）") ]) ]), n("div", H, [ X, p(f, {
                            modelValue: o(l).questionRandomMap[2],
                            "onUpdate:modelValue": e[12] || (e[12] = a => o(l).questionRandomMap[2] = a),
                            max: o(m)[2] || 0,
                            min: 0,
                            "controls-position": "right",
                            size: "large",
                            style: {
                                width: "100px"
                            },
                            onCompositionend: e[13] || (e[13] = a => o(x)(a)),
                            onCompositionstart: e[14] || (e[14] = a => o(R)(a)),
                            onKeydown: e[15] || (e[15] = a => o(_)(a))
                        }, null, 8, [ "modelValue", "max" ]), n("span", Z, [ v("题 （可选共 "), n("span", ee, h(o(m)[2] || 0), 1), v(" 题）") ]) ]), n("div", ae, [ oe, p(f, {
                            modelValue: o(l).questionRandomMap[3],
                            "onUpdate:modelValue": e[16] || (e[16] = a => o(l).questionRandomMap[3] = a),
                            max: o(m)[3] || 0,
                            min: 0,
                            "controls-position": "right",
                            size: "large",
                            style: {
                                width: "100px"
                            },
                            onCompositionend: e[17] || (e[17] = a => o(x)(a)),
                            onCompositionstart: e[18] || (e[18] = a => o(R)(a)),
                            onKeydown: e[19] || (e[19] = a => o(_)(a))
                        }, null, 8, [ "modelValue", "max" ]), n("span", le, [ v("题 （可选共 "), n("span", te, h(o(m)[3] || 0), 1), v(" 题）") ]) ]), n("div", se, [ ne, p(f, {
                            modelValue: o(l).questionRandomMap[4],
                            "onUpdate:modelValue": e[20] || (e[20] = a => o(l).questionRandomMap[4] = a),
                            max: o(m)[4] || 0,
                            min: 0,
                            "controls-position": "right",
                            size: "large",
                            style: {
                                width: "100px"
                            },
                            onCompositionend: e[21] || (e[21] = a => o(x)(a)),
                            onCompositionstart: e[22] || (e[22] = a => o(R)(a)),
                            onKeydown: e[23] || (e[23] = a => o(_)(a))
                        }, null, 8, [ "modelValue", "max" ]), n("span", ie, [ v("题 （可选共 "), n("span", re, h(o(m)[4] || 0), 1), v(" 题）") ]) ]), n("div", ue, [ de, p(f, {
                            modelValue: o(l).questionRandomMap[5],
                            "onUpdate:modelValue": e[24] || (e[24] = a => o(l).questionRandomMap[5] = a),
                            max: o(m)[5] || 0,
                            min: 0,
                            "controls-position": "right",
                            size: "large",
                            style: {
                                width: "100px"
                            },
                            onCompositionend: e[25] || (e[25] = a => o(x)(a)),
                            onCompositionstart: e[26] || (e[26] = a => o(R)(a)),
                            onKeydown: e[27] || (e[27] = a => o(_)(a))
                        }, null, 8, [ "modelValue", "max" ]), n("span", pe, [ v("题 （可选共 "), n("span", me, h(o(m)[5] || 0), 1), v(" 题）") ]) ]) ])) : Ve("", !0) ]),
                        _: 1
                    }, 8, [ "prop" ]), p(g, {
                        label: "选题分数",
                        prop: "questionScore"
                    }, {
                        default: b(() => [ p(f, {
                            modelValue: o(l).questionScore,
                            "onUpdate:modelValue": e[28] || (e[28] = a => o(l).questionScore = a),
                            min: 0,
                            max: 999,
                            precision: 1,
                            "controls-position": "right",
                            size: "large",
                            style: {
                                width: "100px"
                            },
                            onCompositionend: e[29] || (e[29] = a => o(x)(a)),
                            onCompositionstart: e[30] || (e[30] = a => o(R)(a)),
                            onKeydown: e[31] || (e[31] = a => o(_)(a))
                        }, null, 8, [ "modelValue" ]), ce ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "model", "rules" ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-bb79d954" ] ]), Me = Object.defineProperty({
        __proto__: null,
        default: T
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    w as M,
    T as R,
    ca as __tla,
    Me as r
};