import {
    _ as Te,
    __tla as be
} from "./index-71666e05.js";

import {
    r as i,
    a0 as je,
    h as xe,
    e as O,
    T as Le,
    b0 as Pe,
    f as Ee,
    o as _,
    c,
    A as te,
    G as ae,
    a as r,
    t as S,
    k as f,
    l as x,
    v as re,
    D as le,
    F as G,
    y as se,
    C as we,
    B as Je,
    m as Ne,
    J as Oe,
    __tla as Ge
} from "./index-6c08ea4c.js";

import {
    E as Re,
    a as Ae,
    __tla as Ce
} from "./el-collapse-item-c8b76a0a.js";

import {
    _ as De,
    __tla as Me
} from "./index-81dbd56d.js";

import {
    _ as Ve,
    __tla as Xe
} from "./index-1024512a.js";

import oe, {
    __tla as Ke
} from "./taskItem-b5fc5dce.js";

import Ue, {
    __tla as Ye
} from "./taskAllocation-5a545f2c.js";

import {
    j as ne,
    g as ze,
    k as Be,
    f as Fe,
    i as He,
    __tla as qe
} from "./task-be0f4a51.js";

import {
    c as R,
    D as A,
    __tla as Qe
} from "./dict-c5825220.js";

import We, {
    __tla as Ze
} from "./monitor-50ba803e.js";

import {
    g as $e,
    __tla as et
} from "./score-b548b686.js";

import {
    _ as tt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as at
} from "./DeptTag-1be092ce.js";

import {
    __tla as rt
} from "./index-ef4d146e.js";

import {
    __tla as lt
} from "./el-avatar-76960a98.js";

import {
    __tla as st
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import "./color-a8b4eb58.js";

import {
    __tla as ot
} from "./viewDetail-8725097a.js";

import {
    __tla as nt
} from "./el-drawer-fca4d971.js";

import {
    __tla as it
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    __tla as _t
} from "./file-e038b35d.js";

import {
    __tla as ut
} from "./index.es-14d10e28.js";

import {
    __tla as ct
} from "./project-file-a2b4fd07.js";

import {
    __tla as pt
} from "./index-3a269d1c.js";

import {
    __tla as mt
} from "./upload-resource-2f073b5b.js";

import "./file.data-794ea5d0.js";

import "./file_题-23882218.js";

import {
    __tla as ft
} from "./project-51c056b9.js";

import {
    __tla as dt
} from "./member-bed692a1.js";

import {
    __tla as yt
} from "./workItem-20fa3e3c.js";

import {
    __tla as vt
} from "./devops-24948d31.js";

import {
    __tla as ht
} from "./project-user-445059df.js";

import {
    __tla as kt
} from "./formatTime-de6f1520.js";

let ie, St = Promise.all([ (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return Xe;
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
        return Qe;
    } catch {}
})(), (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return et;
    } catch {}
})(), (() => {
    try {
        return at;
    } catch {}
})(), (() => {
    try {
        return rt;
    } catch {}
})(), (() => {
    try {
        return lt;
    } catch {}
})(), (() => {
    try {
        return st;
    } catch {}
})(), (() => {
    try {
        return ot;
    } catch {}
})(), (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return it;
    } catch {}
})(), (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return ct;
    } catch {}
})(), (() => {
    try {
        return pt;
    } catch {}
})(), (() => {
    try {
        return mt;
    } catch {}
})(), (() => {
    try {
        return ft;
    } catch {}
})(), (() => {
    try {
        return dt;
    } catch {}
})(), (() => {
    try {
        return yt;
    } catch {}
})(), (() => {
    try {
        return vt;
    } catch {}
})(), (() => {
    try {
        return ht;
    } catch {}
})(), (() => {
    try {
        return kt;
    } catch {}
})() ]).then(async () => {
    let C, D, M, V, X, K, U, Y, z, B, F, H;
    C = {
        class: "task flex flex-col"
    }, D = {
        class: "top-box"
    }, M = {
        key: 0,
        class: "right btns-box header-btns"
    }, V = {
        class: "main_box"
    }, X = {
        key: 0,
        class: "taskList"
    }, K = {
        key: 0,
        class: "step_title flex"
    }, U = {
        key: 0,
        class: "step_progress mr-20px flex"
    }, Y = {
        key: 1,
        style: {
            width: "100%"
        }
    }, z = {
        key: 0
    }, B = {
        key: 1,
        style: {
            "text-align": "center"
        }
    }, F = {
        key: 1
    }, H = {
        class: "monitor"
    }, ie = tt({
        __name: "index",
        props: {
            environment: {
                type: String,
                default: ""
            },
            completeType: {
                type: String,
                default: ""
            },
            projectStatus: {
                type: String,
                default: ""
            },
            from: {
                type: String,
                default: "teaTask"
            }
        },
        emits: [ "refreshList" ],
        setup(_e, {
            expose: ue,
            emit: ce
        }) {
            const g = i(!1), q = i({}), n = _e, {
                environment: gt,
                completeType: L,
                from: d
            } = je(n), pe = ce, P = xe();
            O(() => P.isStudent);
            const v = i(), Q = i(), W = i(), Z = e => {
                g.value = !0, q.value = e, Q.value.getList(e);
            }, $ = i([ {
                label: P.user.nickname,
                value: P.user.id
            } ]), me = O(() => [ {
                label: "任务类型",
                key: "type",
                type: "list",
                options: R(A.EXP_TASK_TYPE)
            } ]), fe = O(() => [ {
                label: "任务类型",
                key: "type",
                type: "list",
                options: R(A.EXP_TASK_TYPE)
            }, {
                label: "任务状态",
                key: "taskStatus",
                type: "list",
                options: R(A.EXP_MONITOR_STATUS)
            }, {
                label: "负责人",
                key: "leaderId",
                type: "list",
                options: $.value
            } ]), m = i([]), E = i([]), u = i({
                name: "",
                type: "",
                taskStatus: "",
                leaderId: ""
            }), de = e => {
                const {
                    name: l,
                    type: a
                } = e;
                u.value.name = l ?? "", u.value.type = a ?? "", d.value == "stuTask" && (u.value.taskStatus = e.taskStatus, 
                L.value == 2 && (u.value.leaderId = e.leaderId)), k();
            }, w = i([]), ye = (e, l = JSON.parse(JSON.stringify(m.value))) => {
                let a = [];
                if (e.name) {
                    let t = [];
                    l.forEach(o => {
                        if (o.classify == 2) o.name.includes(e.name) && t.push(o); else if (o.name.includes(e.name)) t.push(o); else {
                            let p = (o.children || []).filter(y => y.name.includes(e.name));
                            if (p.length > 0) {
                                let y = [ ...p ];
                                o.children = [ ...y ], t.push(o);
                            }
                        }
                    }), a = t;
                }
                return a;
            }, J = (e, l = JSON.parse(JSON.stringify(m.value)), a) => {
                let t = [];
                if (e[a]) {
                    let o = [];
                    l.forEach((p, y) => {
                        if (p.classify == 2) p[a] == e[a] && o.push(p); else {
                            let j = (p.children || []).filter(s => s[a] == e[a]);
                            if (j.length > 0) {
                                let s = [ ...j ];
                                p.children = [ ...s ], o.push(p);
                            }
                        }
                    }), t = o;
                }
                return t;
            }, h = Le(), ve = Pe("trialType"), I = i(""), k = async () => {
                const {
                    inProject: e
                } = h.params, a = await (n.from == "teaTask" ? ne : n.from == "stuTask" ? ze : e == "1" ? ne : Be)({
                    projectId: h.params.projectId
                });
                d.value !== "stuTask" ? m.value = a : a.completeType == 1 ? m.value = a.taskStudentIndividualList || [] : m.value = a.taskStudentGroupList || [], 
                he(), d.value == "stuTask" && ve.value == 2 && (L.value == 1 ? I.value = N(m.value, t => t.taskStatus === 0) : I.value = N(m.value, t => t.taskStatus === 0 && t.isSelf == 1)), 
                w.value = (() => {
                    let t = JSON.parse(JSON.stringify(m.value));
                    return u.value.name && (t = ye(u.value, t)), u.value.type && (t = J(u.value, t, "type")), 
                    u.value.taskStatus && (t = J(u.value, t, "taskStatus")), u.value.leaderId && (t = J(u.value, t, "leaderId")), 
                    t;
                })();
            }, he = () => {
                let e = 0;
                m.value.forEach(l => {
                    l.classify == 1 ? (l.children || []).forEach((a, t) => {
                        a.order = t + 1;
                    }) : (e++, l.order = e);
                });
            }, N = (e, l) => {
                for (let a of e) {
                    if (l(a)) return a.id;
                    const t = N(a.children || [], l);
                    if (t) return t;
                }
            }, ee = () => {
                k(), pe("refreshList");
            }, T = i(""), ke = () => {
                W.value.openDrawer({
                    groupId: T.value
                });
            }, b = i(!1);
            return ue({
                getTaskList: k
            }), Ee(() => {
                k(), d.value == "stuTask" && L.value == 2 && ((async () => {
                    let e = await Fe({
                        projectId: h.params.projectId
                    });
                    $.value = (e ?? []).map(l => ({
                        value: l.userId,
                        label: l.userName
                    }));
                })(), (async () => {
                    const e = await He({
                        projectId: h.params.projectId
                    });
                    v.value = e.isLeader, T.value = e.groupId;
                })()), d.value === "stuTask" && (async () => {
                    const e = await $e({
                        projectId: h.params.projectId
                    });
                    b.value = e;
                })();
            }), (e, l) => {
                const a = Ve, t = Oe, o = De, p = Re, y = Ae, j = Te;
                return _(), c(G, null, [ te(S("div", C, [ S("div", D, [ f(a, {
                    ref: "ComSearchRef",
                    searchList: r(d) == "stuTask" ? r(fe) : r(me),
                    keywordsInfo: {
                        label: "任务名称",
                        key: "name"
                    },
                    onHandleSearch: de,
                    class: "left"
                }, null, 8, [ "searchList" ]), r(d) == "stuTask" && r(v) && !r(b) ? (_(), 
                c("div", M, [ f(t, {
                    type: "primary",
                    size: "large",
                    onClick: ke
                }, {
                    default: x(() => [ re(" 任务分配 ") ]),
                    _: 1
                }) ])) : le("", !0) ]), S("div", V, [ r(w).length > 0 ? (_(), c("div", X, [ f(y, {
                    modelValue: r(E),
                    "onUpdate:modelValue": l[0] || (l[0] = s => Ne(E) ? E.value = s : null),
                    style: {
                        "border-bottom": "none",
                        "border-top": "none"
                    }
                }, {
                    default: x(() => [ (_(!0), c(G, null, se(r(w), (s, Se) => (_(), 
                    we(p, {
                        title: "Consistency",
                        name: s.id,
                        key: s.id + Se,
                        disabled: s.classify == 2
                    }, {
                        title: x(() => [ s.classify == 1 ? (_(), c("div", K, [ S("div", null, Je(s.name), 1), r(d) == "teaTask" ? (_(), 
                        c("div", U, [ re("阶段完成度： "), f(o, {
                            percentage: 100 * s.completeRate,
                            style: {
                                width: "200px",
                                "margin-left": "20px"
                            },
                            "progress-color": "#34CE72"
                        }, null, 8, [ "percentage" ]) ])) : le("", !0) ])) : (_(), 
                        c("div", Y, [ f(oe, {
                            info: s,
                            environment: n.environment,
                            onMonitor: Z,
                            completeType: n.completeType,
                            from: n.from,
                            groupInfo: {
                                isGroupLead: r(v),
                                groupId: r(T)
                            },
                            onRefresh: ee,
                            activedId: r(I),
                            projectStatus: n.projectStatus,
                            isPublishScore: r(b)
                        }, null, 8, [ "info", "environment", "completeType", "from", "groupInfo", "activedId", "projectStatus", "isPublishScore" ]) ])) ]),
                        default: x(() => [ (s.children || []).length > 0 ? (_(), 
                        c("div", z, [ (_(!0), c(G, null, se(s.children, (ge, Ie) => (_(), 
                        c("div", {
                            class: "info header",
                            key: Ie
                        }, [ f(oe, {
                            info: ge,
                            environment: n.environment,
                            onMonitor: Z,
                            completeType: n.completeType,
                            from: n.from,
                            isGroupLead: r(v),
                            groupInfo: {
                                isGroupLead: r(v),
                                groupId: r(T)
                            },
                            onRefresh: ee,
                            activedId: r(I),
                            projectStatus: n.projectStatus,
                            isPublishScore: r(b)
                        }, null, 8, [ "info", "environment", "completeType", "from", "isGroupLead", "groupInfo", "activedId", "projectStatus", "isPublishScore" ]) ]))), 128)) ])) : (_(), 
                        c("div", B, "当前阶段下暂无任务")) ]),
                        _: 2
                    }, 1032, [ "name", "disabled" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ])) : (_(), c("div", F, [ f(j, {
                    class: "page-empty w-100%",
                    style: {
                        height: "100%"
                    }
                }) ])) ]) ], 512), [ [ ae, !r(g) ] ]), te(S("div", H, [ f(We, {
                    onGoback: l[1] || (l[1] = () => g.value = !1),
                    monitorInfo: r(q),
                    ref_key: "monitorRef",
                    ref: Q,
                    completeType: n.completeType,
                    environment: n.environment
                }, null, 8, [ "monitorInfo", "completeType", "environment" ]) ], 512), [ [ ae, r(g) ] ]), f(Ue, {
                    ref_key: "taskAllocationRef",
                    ref: W,
                    onSuccess: k
                }, null, 512) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-c07bad31" ] ]);
});

export {
    St as __tla,
    ie as default
};