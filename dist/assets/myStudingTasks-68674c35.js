import {
    a7 as w,
    u as $,
    h as tt,
    r as f,
    w as at,
    U as rt,
    f as et,
    o as l,
    c as _,
    t as e,
    F as h,
    y as v,
    z as st,
    a as s,
    B as i,
    k as o,
    l as x,
    C as lt,
    v as _t,
    m as ct,
    ab as ot,
    ac as nt,
    L as mt,
    _ as ut,
    R as dt,
    S as it,
    __tla as pt
} from "./index-6c08ea4c.js";

import {
    t as J,
    __tla as yt
} from "./file-e038b35d.js";

import ft, {
    __tla as ht
} from "./answerPaper-86c6929e.js";

import {
    e as vt,
    __tla as gt
} from "./assignmentAndAssessment-58199f67.js";

import {
    _ as bt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as kt
} from "./el-drawer-fca4d971.js";

import {
    __tla as It
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import "./color-a8b4eb58.js";

import {
    __tla as wt
} from "./dict-c5825220.js";

import {
    __tla as xt
} from "./questionItem-783db515.js";

import {
    __tla as Ct
} from "./type1-dcece559.js";

import {
    __tla as zt
} from "./type2-a6a0182d.js";

import {
    __tla as At
} from "./type3-5f949f9d.js";

import {
    __tla as St
} from "./type5-0bd437b5.js";

import {
    __tla as Vt
} from "./editEditor-a03e6696.js";

import {
    __tla as Ft
} from "./Editor-ef737d2a.js";

import {
    __tla as Nt
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Ut
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

import {
    __tla as Et
} from "./type4-7ca4a753.js";

import {
    __tla as Rt
} from "./type6-9e74ce48.js";

import {
    __tla as Dt
} from "./type7-37922e10.js";

import {
    __tla as Pt
} from "./video-1d0dc730.js";

import {
    __tla as Tt
} from "./type20-9799eb41.js";

import {
    __tla as jt
} from "./myQuestionBank-a9dcc9db.js";

import {
    __tla as Bt
} from "./type30-2996afb1.js";

import {
    __tla as Ht
} from "./sqlDetail-47f64ae5.js";

import {
    __tla as Lt
} from "./largeQuestionPreview-1a10d1df.js";

import {
    __tla as qt
} from "./formatTime-de6f1520.js";

let K, Gt = Promise.all([ (() => {
    try {
        return pt;
    } catch {}
})(), (() => {
    try {
        return yt;
    } catch {}
})(), (() => {
    try {
        return ht;
    } catch {}
})(), (() => {
    try {
        return gt;
    } catch {}
})(), (() => {
    try {
        return kt;
    } catch {}
})(), (() => {
    try {
        return It;
    } catch {}
})(), (() => {
    try {
        return wt;
    } catch {}
})(), (() => {
    try {
        return xt;
    } catch {}
})(), (() => {
    try {
        return Ct;
    } catch {}
})(), (() => {
    try {
        return zt;
    } catch {}
})(), (() => {
    try {
        return At;
    } catch {}
})(), (() => {
    try {
        return St;
    } catch {}
})(), (() => {
    try {
        return Vt;
    } catch {}
})(), (() => {
    try {
        return Ft;
    } catch {}
})(), (() => {
    try {
        return Nt;
    } catch {}
})(), (() => {
    try {
        return Ut;
    } catch {}
})(), (() => {
    try {
        return Et;
    } catch {}
})(), (() => {
    try {
        return Rt;
    } catch {}
})(), (() => {
    try {
        return Dt;
    } catch {}
})(), (() => {
    try {
        return Pt;
    } catch {}
})(), (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return jt;
    } catch {}
})(), (() => {
    try {
        return Bt;
    } catch {}
})(), (() => {
    try {
        return Ht;
    } catch {}
})(), (() => {
    try {
        return Lt;
    } catch {}
})(), (() => {
    try {
        return qt;
    } catch {}
})() ]).then(async () => {
    let p, C, z, A, S, V, F, N, U, E, R, D, P, T, j;
    p = n => (dt("data-v-0155f319"), n = n(), it(), n), C = {
        class: "my-teaching-course"
    }, z = {
        class: "title"
    }, A = p(() => e("span", {
        class: "left-title"
    }, "我的学习任务", -1)), S = [ "onClick" ], V = {
        class: "search-box"
    }, F = {
        class: "data-content"
    }, N = {
        key: 0,
        class: "pb-10px"
    }, U = {
        class: "task-name"
    }, E = {
        class: "task-time mt-18px"
    }, R = p(() => e("span", {
        class: "task-item-label"
    }, "截止时间：", -1)), D = p(() => e("span", {
        class: "task-item-label ml-30px"
    }, "所属课程：", -1)), P = {
        class: "enter-class"
    }, T = [ "onClick" ], j = {
        key: 1,
        class: "no-data"
    }, K = bt({
        __name: "myStudingTasks",
        props: {
            termId: {
                type: String,
                default: () => ""
            }
        },
        setup(n) {
            const g = n;
            $();
            const b = tt(), k = f([]);
            at(() => g.termId, r => {
                r && m();
            });
            const m = async () => {
                const r = await (a = {
                    termId: g.termId,
                    ...c
                }, w.post({
                    url: "/teachmanager/teach-course-res-stu/test/stats",
                    data: a
                }));
                var a;
                return k.value = r || [], r;
            }, B = [ {
                value: "3",
                label: "作业",
                bg: "rgba(52, 206, 114, 0.1)",
                type: "success",
                color: "#D178FE"
            }, {
                value: "2",
                label: "测验",
                bg: "rgba(254, 166, 69, 0.1)",
                type: "warning",
                color: "#05C9FD"
            }, {
                value: "1",
                label: "项目",
                bg: "rgba(36, 95, 230, 0.1)",
                type: "primary",
                color: "#245FE6"
            } ], M = [ {
                code: 0,
                name: "未作答"
            }, {
                code: 1,
                name: "作答中"
            } ], O = [ {
                code: 2,
                name: "测试"
            }, {
                code: 3,
                name: "作业"
            } ], c = rt({
                courseId: "",
                type: 2,
                status: 0
            }), H = f([]), Q = async () => {
                const r = await (a = {
                    termId: g.termId,
                    pageNo: 1,
                    pageSize: 10,
                    pageAll: -1
                }, w.get({
                    url: "/teachmanager/teach-arrangement-stu/page",
                    params: a
                }));
                var a;
                H.value = r == null ? void 0 : r.list;
            }, W = async ({
                data: r
            }) => {
                var u;
                var a;
                return await (a = {
                    testId: r.testId,
                    studentId: ((u = b == null ? void 0 : b.user) == null ? void 0 : u.id) || ""
                }, w.get({
                    url: "/smartexam/test/student/access",
                    params: a
                }));
            }, L = f(null), y = f({}), X = async ({
                data: r
            }) => {
                const a = await vt(r.testId);
                return y.value = {
                    ...a,
                    testId: r.testId
                }, a;
            };
            return et(async () => {
                Q();
            }), (r, a) => {
                const u = ot, q = nt, Y = mt, Z = ut;
                return l(), _("div", C, [ e("div", z, [ A, (l(), _(h, null, v(M, t => e("span", {
                    key: t.code,
                    class: st([ "status-common ml-20px", s(c).status === t.code ? "status-active" : "status-default" ]),
                    onClick: I => (d => {
                        c.status = d.code, m();
                    })(t)
                }, i(t.name), 11, S)), 64)) ]), e("div", V, [ o(q, {
                    modelValue: s(c).type,
                    "onUpdate:modelValue": a[0] || (a[0] = t => s(c).type = t),
                    size: "large",
                    style: {
                        width: "100px"
                    },
                    onChange: m
                }, {
                    default: x(() => [ (l(), _(h, null, v(O, t => o(u, {
                        key: t.code,
                        label: t.name,
                        value: t.code
                    }, null, 8, [ "label", "value" ])), 64)) ]),
                    _: 1
                }, 8, [ "modelValue" ]), o(q, {
                    modelValue: s(c).courseId,
                    "onUpdate:modelValue": a[1] || (a[1] = t => s(c).courseId = t),
                    size: "large",
                    placeholder: "请选择所属课程",
                    class: "ml-10px",
                    style: {
                        width: "180px"
                    },
                    onChange: m
                }, {
                    default: x(() => [ (l(!0), _(h, null, v(s(H), t => (l(), lt(u, {
                        key: t.courseId,
                        label: t.courseName,
                        value: t.courseId
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), e("div", F, [ s(k).length ? (l(), _("div", N, [ (l(!0), 
                _(h, null, v(s(k), t => {
                    var I;
                    return l(), _("div", {
                        class: "task-item",
                        key: t.projectId
                    }, [ e("div", U, [ e("span", null, i(t.testName), 1), o(Y, {
                        class: "distribute",
                        round: "",
                        type: (I = s(J)({
                            list: B,
                            listAttrCode: "value",
                            rawAttrCode: t.type
                        })) == null ? void 0 : I.type
                    }, {
                        default: x(() => {
                            var d;
                            return [ _t(i((d = s(J)({
                                list: B,
                                listAttrCode: "value",
                                rawAttrCode: t.type
                            })) == null ? void 0 : d.label), 1) ];
                        }),
                        _: 2
                    }, 1032, [ "type" ]) ]), e("div", E, [ R, e("span", null, i(t.deadline), 1), D, e("span", null, i(t.courseName), 1) ]), e("div", P, [ e("span", {
                        class: "enter-span",
                        onClick: d => (async ({
                            data: G
                        }) => {
                            await W({
                                data: G
                            }), await X({
                                data: G
                            }), L.value.handleStartTheExam();
                        })({
                            data: t
                        })
                    }, "去作答", 8, T) ]) ]);
                }), 128)) ])) : (l(), _("div", j, [ o(Z, {
                    icon: "svg-icon:bg-no-data-task-stu",
                    size: 200,
                    class: ""
                }) ])) ]), o(ft, {
                    ref_key: "answerPaperRef",
                    ref: L,
                    form: s(y),
                    "onUpdate:form": a[2] || (a[2] = t => ct(y) ? y.value = t : null),
                    onRefresh: m
                }, null, 8, [ "form" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-0155f319" ] ]);
});

export {
    Gt as __tla,
    K as default
};