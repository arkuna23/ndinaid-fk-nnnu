import {
    u as se,
    T as le,
    b0 as oe,
    h as _e,
    e as ie,
    a0 as pe,
    r as F,
    al as ne,
    j as me,
    o as a,
    c as s,
    t as I,
    x as ue,
    a as e,
    C as m,
    z as G,
    B as S,
    A as ce,
    k as _,
    l as i,
    v as o,
    D as u,
    F as de,
    K as ye,
    J as fe,
    R as ke,
    S as ve,
    __tla as Ie
} from "./index-6c08ea4c.js";

import {
    E as he,
    __tla as Te
} from "./el-avatar-76960a98.js";

import {
    _ as Se,
    __tla as ge
} from "./index-81dbd56d.js";

import {
    _ as we,
    __tla as je
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as g,
    __tla as Pe
} from "./dict-c5825220.js";

import {
    l as be,
    __tla as Ce
} from "./task-be0f4a51.js";

import Ee, {
    __tla as Ae
} from "./viewDetail-8725097a.js";

import {
    a as De,
    __tla as Ne
} from "./file-e038b35d.js";

import {
    u as Oe,
    __tla as Re
} from "./devops-24948d31.js";

import {
    _ as xe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

import {
    __tla as Xe
} from "./el-drawer-fca4d971.js";

import {
    __tla as ze
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    __tla as Be
} from "./index.es-14d10e28.js";

import {
    __tla as Ke
} from "./project-file-a2b4fd07.js";

import {
    __tla as Ye
} from "./el-collapse-item-c8b76a0a.js";

import {
    __tla as qe
} from "./index-71666e05.js";

import {
    __tla as Le
} from "./index-3a269d1c.js";

import {
    __tla as Me
} from "./upload-resource-2f073b5b.js";

import "./file.data-794ea5d0.js";

import "./file_题-23882218.js";

import {
    __tla as Ue
} from "./project-51c056b9.js";

import {
    __tla as Fe
} from "./member-bed692a1.js";

import {
    __tla as Ge
} from "./workItem-20fa3e3c.js";

let J, Je = Promise.all([ (() => {
    try {
        return Ie;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})(), (() => {
    try {
        return ge;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})() ]).then(async () => {
    let b, C, E, A, D, N, O, R, x, X, z, B, K, Y, q;
    b = {
        class: "taskItem"
    }, C = {
        class: "name neu-ellipse tooltip-content ml-2"
    }, E = {
        class: "tooltip-content neu-ellipse des"
    }, A = {
        key: 0
    }, D = {
        key: 0,
        class: "item_center"
    }, N = {
        class: "mr-5"
    }, O = {
        key: 1,
        class: "item_center"
    }, R = {
        key: 0,
        class: "flex",
        style: {
            "align-items": "center"
        }
    }, x = (f => (ke("data-v-4a079d59"), f = f(), ve(), f))(() => I("span", {
        class: "mr-1"
    }, "负责人：", -1)), X = {
        key: 1
    }, z = {
        key: 2,
        class: "item_right"
    }, B = {
        key: 3,
        class: "item_right"
    }, K = {
        key: 0
    }, Y = {
        key: 1
    }, q = {
        key: 4,
        class: "item_right"
    }, J = xe({
        __name: "taskItem",
        props: {
            info: {
                type: Object,
                default: () => ({})
            },
            environment: {
                type: String,
                default: ""
            },
            completeType: {
                type: String,
                default: ""
            },
            activedId: {
                type: String,
                default: ""
            },
            from: {
                type: String,
                default: "teaTask"
            },
            projectStatus: {
                type: String,
                default: ""
            },
            groupInfo: {
                type: Object,
                default: () => ({
                    isGroupLead: 0,
                    groupId: ""
                })
            },
            isPublishScore: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "monitor", "refresh" ],
        setup(f, {
            emit: Q
        }) {
            const w = se(), c = le(), L = Q, d = f, V = oe("trialType"), W = _e();
            ie(() => W.isStudent);
            const {
                info: t,
                environment: y,
                completeType: M,
                from: l,
                groupInfo: h
            } = pe(d);
            F();
            const k = F(), j = p => {
                k.value.openDrawer({
                    id: p.id,
                    formType: "view"
                });
            };
            ne();
            const H = Oe(), U = p => {
                if (be({
                    taskId: p.id
                }), y.value == "0") k.value.openDrawer({
                    id: p.id,
                    formType: "start"
                }); else if (y.value == "15") {
                    H.setTaskId(p.id);
                    let r = w.resolve({
                        name: "DevopsWorkItem",
                        params: {
                            classId: c.params.classId,
                            groupId: h.value.groupId,
                            projectId: c.params.projectId,
                            teachArrangementId: c.params.teachArrangementId,
                            teachCourseId: c.params.teachCourseId
                        }
                    });
                    window.open(r.href, "_blank");
                } else {
                    let r = w.resolve({
                        name: "ProjectActualCombatIndex",
                        query: {
                            environment: y.value,
                            module: "2",
                            projectId: c.params.projectId,
                            taskId: p.id,
                            groupId: h.value.groupId,
                            groupName: h.value.groupName,
                            studentId: ""
                        }
                    });
                    window.open(r.href, "_blank");
                }
            }, Z = () => {
                L("monitor", {
                    id: t.value.id,
                    name: t.value.name
                });
            };
            return (p, r) => {
                const T = we, $ = ye, ee = Se, te = he, n = fe, ae = me("show-tip");
                return a(), s(de, null, [ I("div", b, [ I("div", {
                    class: "item_left",
                    style: ue({
                        width: e(l) == "stuTask" ? "60%" : e(l) == "projectPreview" ? "80%" : "45%"
                    })
                }, [ e(t).type == 5 && e(t).developType ? (a(), m(T, {
                    key: 0,
                    type: e(g).EXP_TASK_DEVELOP_TYPE,
                    value: e(t).developType
                }, null, 8, [ "type", "value" ])) : (a(), m(T, {
                    key: 1,
                    type: e(g).EXP_TASK_TYPE,
                    value: e(t).type,
                    class: G("taskType_" + e(t).type)
                }, null, 8, [ "type", "value", "class" ])), I("div", C, " 任务" + S(e(t).order), 1), ce((a(), 
                s("div", E, [ _($, {
                    content: e(t).name
                }, {
                    default: i(() => [ o(S(e(t).name), 1) ]),
                    _: 1
                }, 8, [ "content" ]), e(l) == "stuTask" ? (a(), s("span", A, [ _(T, {
                    type: e(g).EXP_MONITOR_STATUS,
                    value: e(t).taskStatus,
                    class: "ml-1 mr-1"
                }, null, 8, [ "type", "value" ]), e(t).taskStatus == "0" ? (a(), 
                m(T, {
                    key: 0,
                    class: G([ "submitType ml-1", "submitType_" + e(t).submitType ]),
                    type: e(g).EXP_SCORE_SUBMIT_TYPE,
                    value: e(t).submitType,
                    round: !0,
                    effect: "dark",
                    size: "small"
                }, null, 8, [ "class", "type", "value" ])) : u("", !0) ])) : u("", !0) ])), [ [ ae ] ]) ], 4), e(l) == "teaTask" ? (a(), 
                s("div", D, [ I("span", N, S(e(t).completeRate > 0 ? "完成度：" : "未开始："), 1), _(ee, {
                    percentage: 100 * e(t).completeRate
                }, null, 8, [ "percentage" ]) ])) : u("", !0), e(l) == "stuTask" && e(M) == "2" ? (a(), 
                s("div", O, [ e(t).leaderName ? (a(), s("div", R, [ x, _(te, {
                    src: e(De)(e(t).leaderAvatar),
                    size: 24,
                    class: "mr-1"
                }, null, 8, [ "src" ]), o(" " + S(e(t).leaderName), 1) ])) : (a(), 
                s("div", X, "无负责人")) ])) : u("", !0), e(l) == "teaTask" ? (a(), 
                s("div", z, [ _(n, {
                    type: "primary",
                    link: "",
                    onClick: r[0] || (r[0] = v => (P => {
                        if (y.value == 15) k.value.openDrawer({
                            id: P.id,
                            formType: "view"
                        }); else if (y.value == 0) k.value.openDrawer({
                            id: P.id,
                            formType: "view"
                        }); else {
                            let re = w.resolve({
                                name: "ProjectActualCombatIndex",
                                query: {
                                    environment: y.value,
                                    module: "2",
                                    projectId: c.params.projectId,
                                    taskId: P.id,
                                    studentId: ""
                                }
                            });
                            window.open(re.href, "_blank");
                        }
                    })(e(t)))
                }, {
                    default: i(() => [ o("讲解") ]),
                    _: 1
                }), _(n, {
                    type: "primary",
                    link: "",
                    onClick: Z
                }, {
                    default: i(() => [ o("监控") ]),
                    _: 1
                }) ])) : u("", !0), e(l) == "stuTask" ? (a(), s("div", B, [ e(V) == 1 ? (a(), 
                s("span", K, [ d.projectStatus != 3 || e(t).taskStatus != "0" || e(t).isSelf == 0 || d.isPublishScore ? (a(), 
                m(n, {
                    key: 1,
                    type: "primary",
                    link: "",
                    onClick: r[2] || (r[2] = v => j(e(t)))
                }, {
                    default: i(() => [ o("详情") ]),
                    _: 1
                })) : (a(), m(n, {
                    key: 0,
                    type: "primary",
                    link: "",
                    onClick: r[1] || (r[1] = v => U(e(t)))
                }, {
                    default: i(() => [ o("开始任务") ]),
                    _: 1
                })) ])) : (a(), s("span", Y, [ d.projectStatus != 3 || e(t).taskStatus != "0" || e(t).isSelf == 0 || e(t).id !== d.activedId || d.isPublishScore ? (a(), 
                m(n, {
                    key: 1,
                    type: "primary",
                    link: "",
                    onClick: r[4] || (r[4] = v => j(e(t)))
                }, {
                    default: i(() => [ o("详情") ]),
                    _: 1
                })) : (a(), m(n, {
                    key: 0,
                    type: "primary",
                    link: "",
                    onClick: r[3] || (r[3] = v => U(e(t)))
                }, {
                    default: i(() => [ o("开始任务") ]),
                    _: 1
                })) ])) ])) : u("", !0), e(l) == "projectPreview" ? (a(), s("div", q, [ _(n, {
                    type: "primary",
                    link: "",
                    onClick: r[5] || (r[5] = v => j(e(t)))
                }, {
                    default: i(() => [ o("详情") ]),
                    _: 1
                }) ])) : u("", !0) ]), _(Ee, {
                    ref_key: "viewRef",
                    ref: k,
                    completeType: e(M),
                    from: e(l),
                    userTaskId: e(t).userTaskId,
                    groupInfo: e(h),
                    onSuccess: r[6] || (r[6] = () => L("refresh"))
                }, null, 8, [ "completeType", "from", "userTaskId", "groupInfo" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-4a079d59" ] ]);
});

export {
    Je as __tla,
    J as default
};