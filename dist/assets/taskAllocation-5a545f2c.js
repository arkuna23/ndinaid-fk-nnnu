import {
    T as Ia,
    h as ha,
    r as n,
    p as ba,
    f as ga,
    j as wa,
    o as e,
    c as d,
    k as u,
    l as o,
    v as _,
    t as r,
    A as P,
    a as i,
    m as sa,
    F as g,
    y as w,
    C as U,
    B as y,
    J as xa,
    K as Va,
    ab as Ea,
    ac as ja,
    a9 as Pa,
    R as Ua,
    S as Aa,
    __tla as Ca
} from "./index-6c08ea4c.js";

import {
    E as Sa,
    __tla as Ta
} from "./el-drawer-fca4d971.js";

import {
    _ as za,
    __tla as Ka
} from "./index-71666e05.js";

import {
    E as Ba,
    a as Da,
    __tla as La
} from "./el-collapse-item-c8b76a0a.js";

import {
    g as ta,
    D as la,
    __tla as Na
} from "./dict-c5825220.js";

import {
    g as Xa,
    m as Ya,
    f as Fa,
    n as Ga,
    o as Ja,
    __tla as Ma
} from "./task-be0f4a51.js";

import {
    _ as Ra
} from "./_plugin-vue_export-helper-1b428a4d.js";

let da, qa = Promise.all([ (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return Ka;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})() ]).then(async () => {
    let A, C, S, T, z, K, B, D, L, N, X, Y, F, G, J, M, R, q, H, O;
    A = {
        class: "taskAllocation"
    }, C = {
        class: "main-box"
    }, S = {
        class: "task_list"
    }, T = {
        class: "btns-box algin-right mb-10px"
    }, z = (k => (Ua("data-v-7abb2c62"), k = k(), Aa(), k))(() => r("div", {
        class: "task task_header flex"
    }, [ r("div", {
        class: "task_name pl-20px",
        style: {
            width: "220px"
        }
    }, "任务名称"), r("div", {
        class: "task_type"
    }, "任务类型"), _(), r("div", {
        class: "task_user"
    }, "负责人") ], -1)), K = {
        key: 0
    }, B = {
        key: 0,
        class: "task_stage flex"
    }, D = {
        class: "task_row"
    }, L = {
        key: 1,
        class: "task_item"
    }, N = {
        class: "flex"
    }, X = {
        class: "task_name neu-ellipse"
    }, Y = {
        class: "task_type"
    }, F = {
        class: "task_user"
    }, G = {
        key: 0
    }, J = {
        class: "task_item flex"
    }, M = {
        class: "task_name neu-ellipse"
    }, R = {
        class: "task_type"
    }, q = {
        class: "task_user"
    }, H = {
        key: 1,
        style: {
            "text-align": "center"
        },
        class: "pt-5"
    }, O = {
        key: 1
    }, da = Ra({
        __name: "taskAllocation",
        emits: [ "success" ],
        setup(k, {
            expose: ra,
            emit: oa
        }) {
            const Q = oa, I = Ia();
            ha();
            const m = n(!1), x = n(!1), p = n([]), V = n([]), W = n([]), E = n(""), j = () => {
                m.value = !1;
            }, h = n([]), Z = l => {
                let s = new Map();
                l.forEach(a => s.set(a.taskId, a.userId)), p.value.forEach(a => {
                    a.classify == 1 ? (a.children || []).forEach(f => f.userId = s.get(f.id)) : a.userId = s.get(a.id);
                });
            }, ca = async l => {
                const s = await Xa({
                    projectId: I.params.projectId
                });
                p.value = s.taskStudentGroupList || [], h.value = p.value.map(a => {
                    if (a.classify == 1) return a.id;
                }), (async a => {
                    x.value = !0;
                    try {
                        W.value = await Ja({
                            groupId: a
                        }), Z(W.value);
                    } finally {
                        x.value = !1;
                    }
                })(l);
            }, ia = async () => {
                let l = [];
                if (p.value.forEach(s => {
                    s.classify == 2 ? l.push({
                        taskId: s.id,
                        userId: s.userId
                    }) : (s.children || []).forEach(a => l.push({
                        taskId: a.id,
                        userId: a.userId
                    }));
                }), l.findIndex(s => !s.userId) != -1) return b.notifyError("存在没分配负责人的任务");
                await b.confirm("任务分配完成后，项目组长可在任务详情页面对具体任务进行负责人调整，请确保与您的团队成员保持沟通，以便他们了解自己的责任并按时完成任务。期待您定期检查团队的进度，并及时更新任务状态。感谢您在项目管理中的努力和领导！", "提示"), 
                await Ya({
                    headers: l,
                    projectId: I.params.projectId,
                    groupId: E.value
                }), Q("success"), j();
            }, b = ba(), ua = async () => {
                V.value = await Fa({
                    projectId: I.params.projectId
                });
            }, na = async () => {
                await b.confirm("您即将执行一键分配操作，将自动更新项目中各个任务的负责人。完成后，所有任务的负责人将根据系统算法重新分配。", "提示");
                const l = await Ga({
                    projectId: I.params.projectId,
                    groupId: E.value
                });
                Z(l), b.success("修改成功"), Q("success");
            };
            return ga(() => {}), ra({
                openDrawer: ({
                    groupId: l
                }) => {
                    m.value = !0, E.value = l, ua(), ca(l);
                }
            }), (l, s) => {
                const a = xa, f = Va, $ = Ea, aa = ja, pa = Ba, _a = Da, ma = za, fa = Sa, ea = wa("show-tip"), va = Pa;
                return e(), d("div", A, [ u(fa, {
                    modelValue: i(m),
                    "onUpdate:modelValue": s[1] || (s[1] = t => sa(m) ? m.value = t : null),
                    direction: "rtl",
                    "before-close": j,
                    "close-on-click-modal": !1,
                    size: 660,
                    style: {
                        "z-index": "100000"
                    },
                    title: "任务详情"
                }, {
                    footer: o(() => [ u(a, {
                        onClick: j
                    }, {
                        default: o(() => [ _("取 消") ]),
                        _: 1
                    }), u(a, {
                        disabled: l.formLoading,
                        type: "primary",
                        onClick: ia
                    }, {
                        default: o(() => [ _("完成 ") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: o(() => [ r("div", C, [ P((e(), d("div", S, [ r("div", T, [ u(a, {
                        type: "primary",
                        size: "large",
                        onClick: na
                    }, {
                        default: o(() => [ _(" 一键分配 ") ]),
                        _: 1
                    }) ]), z, i(p).length > 0 ? (e(), d("div", K, [ u(_a, {
                        modelValue: i(h),
                        "onUpdate:modelValue": s[0] || (s[0] = t => sa(h) ? h.value = t : null),
                        style: {
                            "border-bottom": "none",
                            "border-top": "none"
                        }
                    }, {
                        default: o(() => [ (e(!0), d(g, null, w(i(p), (t, ya) => (e(), 
                        U(pa, {
                            title: "Consistency",
                            name: t.id,
                            key: t.id + ya,
                            disabled: t.classify == 2
                        }, {
                            title: o(() => [ t.classify == 1 ? (e(), d("div", B, [ r("div", D, y(t.name), 1) ])) : (e(), 
                            d("div", L, [ r("div", N, [ P((e(), d("div", X, [ u(f, {
                                effect: "dark",
                                content: t.name,
                                placement: "top-start"
                            }, {
                                default: o(() => [ _(y(t.name), 1) ]),
                                _: 2
                            }, 1032, [ "content" ]) ])), [ [ ea ] ]), r("div", Y, y(i(ta)(i(la).EXP_TASK_TYPE, t.type)), 1), r("div", F, [ u(aa, {
                                style: {
                                    width: "120px"
                                },
                                modelValue: t.userId,
                                "onUpdate:modelValue": c => t.userId = c
                            }, {
                                default: o(() => [ (e(!0), d(g, null, w(i(V), c => (e(), 
                                U($, {
                                    key: c.userId,
                                    label: c.userName,
                                    value: c.userId
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 2
                            }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]) ]) ])) ]),
                            default: o(() => [ (t.children || []).length > 0 ? (e(), 
                            d("div", G, [ (e(!0), d(g, null, w(t.children, (c, ka) => (e(), 
                            d("div", {
                                class: "info header",
                                key: ka
                            }, [ r("div", J, [ P((e(), d("div", M, [ u(f, {
                                effect: "dark",
                                content: c.name,
                                placement: "top-start"
                            }, {
                                default: o(() => [ _(y(c.name), 1) ]),
                                _: 2
                            }, 1032, [ "content" ]) ])), [ [ ea ] ]), r("div", R, y(i(ta)(i(la).EXP_TASK_TYPE, c.type)), 1), r("div", q, [ u(aa, {
                                style: {
                                    width: "120px"
                                },
                                modelValue: c.userId,
                                "onUpdate:modelValue": v => c.userId = v
                            }, {
                                default: o(() => [ (e(!0), d(g, null, w(i(V), v => (e(), 
                                U($, {
                                    key: v.userId,
                                    label: v.userName,
                                    value: v.userId
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 2
                            }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]) ]) ]))), 128)) ])) : (e(), 
                            d("div", H, "当前阶段下暂无任务")) ]),
                            _: 2
                        }, 1032, [ "name", "disabled" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ])) : (e(), d("div", O, [ u(ma, {
                        type: "resource",
                        class: "page-empty w-100%"
                    }) ])) ])), [ [ va, i(x) ] ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-7abb2c62" ] ]);
});

export {
    qa as __tla,
    da as default
};