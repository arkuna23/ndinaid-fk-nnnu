import {
    u as ke,
    T as we,
    r as k,
    a0 as Ie,
    e as be,
    p as ge,
    al as Ne,
    f as Se,
    o as a,
    c as d,
    t as u,
    k as t,
    B as E,
    a as r,
    A as Ce,
    C as m,
    l as o,
    D as _,
    v as N,
    F as ee,
    y as Te,
    _ as xe,
    aC as Oe,
    ad as je,
    K as Ae,
    L as Je,
    J as Me,
    ae as Ee,
    a9 as Le,
    R as Re,
    S as Pe,
    __tla as qe
} from "./index-6c08ea4c.js";

import {
    _ as De,
    __tla as Ue
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    _ as He,
    __tla as Xe
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as ze,
    __tla as Be
} from "./index-71666e05.js";

import {
    _ as Fe,
    __tla as Ge
} from "./index-1024512a.js";

import {
    c as Ke,
    D as ae,
    __tla as $e
} from "./dict-c5825220.js";

import {
    p as Qe,
    q as Ve,
    __tla as We
} from "./task-be0f4a51.js";

import {
    g as Ye
} from "./file.data-794ea5d0.js";

import {
    r as Ze,
    __tla as ea
} from "./project-user-445059df.js";

import {
    d as aa,
    f as ta,
    __tla as ra
} from "./formatTime-de6f1520.js";

import {
    _ as sa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as la
} from "./file-e038b35d.js";

import {
    __tla as oa
} from "./index.es-14d10e28.js";

import {
    __tla as ia
} from "./project-file-a2b4fd07.js";

import "./color-a8b4eb58.js";

import "./tree-05ea8e09.js";

import {
    __tla as na
} from "./DeptTag-1be092ce.js";

import {
    __tla as ua
} from "./index-ef4d146e.js";

import "./file_题-23882218.js";

let te, ma = Promise.all([ (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})() ]).then(async () => {
    let L, R, P, q, D, U, H, X, z, B, F, G, K, $;
    L = {
        class: "monitor"
    }, R = {
        class: "header mb-5 flex"
    }, P = (b => (Re("data-v-0eef7278"), b = b(), Pe(), b))(() => u("span", {
        class: "back ml-2"
    }, "返回", -1)), q = {
        class: "name"
    }, D = {
        class: "top-box"
    }, U = {
        class: "main-box mt-5"
    }, H = {
        class: "data-empty"
    }, X = {
        key: 0
    }, z = {
        key: 0
    }, B = [ "src" ], F = [ "onClick" ], G = {
        key: 1
    }, K = {
        key: 1
    }, $ = {
        key: 1,
        class: "data-empty"
    }, te = sa({
        __name: "monitor",
        props: {
            monitorInfo: {
                type: Object,
                default: () => ({})
            },
            completeType: {
                type: String,
                default: ""
            },
            environment: {
                type: String,
                default: ""
            }
        },
        emits: [ "goback" ],
        setup(b, {
            expose: re,
            emit: se
        }) {
            const O = ke(), w = we(), f = b, Q = k(), {
                environment: V,
                monitorInfo: S,
                completeType: C
            } = Ie(f), le = se, oe = k([]), ie = be(() => [ {
                label: "任务状态",
                key: "taskStatus",
                type: "list",
                options: Ke(ae.EXP_MONITOR_STATUS)
            } ]), g = k({
                userName: "",
                taskStatus: ""
            }), T = k(!1), j = k([]), I = k([]), ne = () => {
                le("goback");
            }, W = k(1), A = async e => {
                I.value = [], j.value = Y(), T.value = !0;
                try {
                    const i = await Qe({
                        taskId: e.id
                    });
                    W.value = i.isAchievement, i.completeType == 2 ? I.value = i.taskMonitorGroupList : i.completeType == 1 && (I.value = i.taskMonitorIndividualList), 
                    j.value = Y();
                } finally {
                    T.value = !1;
                }
            };
            function ue(e) {
                g.value = e, A(S.value);
            }
            const me = e => {
                oe.value = e;
            }, Y = () => {
                let e = JSON.parse(JSON.stringify(I.value));
                return g.value.userName && (e = pe(g.value, e)), g.value.taskStatus && (e = ce(g.value, e)), 
                e;
            }, pe = (e, i = JSON.parse(JSON.stringify(I.value))) => {
                let y = [];
                if (e.userName) {
                    let v = [];
                    i.forEach((p, x) => {
                        ((p.userName || []).includes(e.userName) || (p.number || []).includes(e.userName)) && v.push(p);
                    }), y = v;
                }
                return y;
            }, ce = (e, i = JSON.parse(JSON.stringify(I.value))) => {
                let y = [];
                if (e.taskStatus) {
                    let v = [];
                    i.forEach((p, x) => {
                        p.taskStatus == e.taskStatus && v.push(p);
                    }), y = v;
                }
                return y;
            }, Z = ge(), J = Ne();
            return Se(() => {}), re({
                getList: A
            }), (e, i) => {
                const y = xe, v = Oe, p = Fe, x = ze, l = je, de = He, _e = Ae, fe = Je, M = Me, ye = Ee, ve = De, he = Le;
                return a(), d(ee, null, [ u("div", L, [ u("div", R, [ u("span", {
                    onClick: ne,
                    class: "neu-pointer"
                }, [ t(y, {
                    icon: "ep:back",
                    size: 14,
                    class: "icon-box",
                    style: {
                        "vertical-align": "middle"
                    }
                }), P ]), t(v, {
                    direction: "vertical"
                }), u("span", q, E(f.monitorInfo.name), 1) ]), u("div", D, [ t(p, {
                    ref: "ComSearchRef",
                    searchList: r(ie),
                    keywordsInfo: {
                        label: "学生姓名/学号",
                        key: "userName"
                    },
                    onHandleSearch: ue,
                    class: "left",
                    style: {
                        width: "100%"
                    }
                }, null, 8, [ "searchList" ]) ]), u("div", U, [ r(C) ? Ce((a(), 
                m(ye, {
                    key: 0,
                    data: r(j),
                    onSelectionChange: me,
                    border: !1,
                    style: {
                        width: "100%"
                    },
                    loading: r(T)
                }, {
                    empty: o(() => [ u("div", H, [ t(x, {
                        msg: "暂无数据",
                        type: "resource"
                    }) ]) ]),
                    default: o(() => [ t(l, {
                        type: "index",
                        label: "序号",
                        width: "60"
                    }), r(C) == 1 ? (a(), m(l, {
                        key: 0,
                        "show-overflow-tooltip": "",
                        label: "姓名",
                        prop: "userName",
                        "min-width": "150"
                    })) : _("", !0), r(C) == 2 ? (a(), m(l, {
                        key: 1,
                        "show-overflow-tooltip": "",
                        label: "项目组",
                        prop: "groupName",
                        width: "120"
                    })) : _("", !0), r(C) == 2 ? (a(), m(l, {
                        key: 2,
                        "show-overflow-tooltip": "",
                        label: "负责人",
                        prop: "userName",
                        width: "120"
                    })) : _("", !0), t(l, {
                        "show-overflow-tooltip": "",
                        label: "学号",
                        prop: "number",
                        "min-width": "130"
                    }), t(l, {
                        "show-overflow-tooltip": "",
                        label: "班级",
                        prop: "deptName",
                        "min-width": "130"
                    }), t(l, {
                        label: "任务状态",
                        prop: "taskStatus",
                        width: "100"
                    }, {
                        default: o(n => [ t(de, {
                            type: r(ae).EXP_MONITOR_STATUS,
                            value: n.row.taskStatus
                        }, null, 8, [ "type", "value" ]) ]),
                        _: 1
                    }), [ "5", "10", "20" ].includes(r(V)) ? (a(), m(l, {
                        key: 3,
                        "show-overflow-tooltip": "",
                        label: "评测次数",
                        prop: "testNum",
                        "min-width": "100"
                    })) : _("", !0), t(l, {
                        "show-overflow-tooltip": "",
                        label: "完成时间",
                        prop: "submitTime",
                        "min-width": "160",
                        formatter: r(aa)
                    }, {
                        default: o(n => [ N(E(r(ta)(n.row.submitTime) || "--"), 1) ]),
                        _: 1
                    }, 8, [ "formatter" ]), t(l, {
                        label: "成果物",
                        prop: "achievements",
                        "min-width": "180px"
                    }, {
                        default: o(n => [ r(W) == 1 ? (a(), d("div", X, [ n.row.achievements.length > 0 ? (a(), 
                        d("div", z, [ (a(!0), d(ee, null, Te(n.row.achievements, c => (a(), 
                        d("div", {
                            class: "file-name",
                            key: c.fileEid
                        }, [ u("img", {
                            src: r(Ye)(c.fileName),
                            alt: "",
                            style: {
                                width: "18px",
                                "flex-shrink": "0",
                                "margin-right": "10px"
                            }
                        }, null, 8, B), t(_e, {
                            effect: "dark",
                            content: c.fileName,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: o(() => [ u("span", {
                                class: "file-name__span",
                                onClick: s => {
                                    return h = c, void Q.value.operation({
                                        eid: h.fileEid,
                                        resType: Number(h.fileType)
                                    });
                                    var h;
                                }
                            }, E(c.fileName), 9, F) ]),
                            _: 2
                        }, 1032, [ "content" ]) ]))), 128)) ])) : (a(), d("div", G, [ t(fe, {
                            type: "warning"
                        }, {
                            default: o(() => [ N("未上传") ]),
                            _: 1
                        }) ])) ])) : (a(), d("div", K, "--")) ]),
                        _: 1
                    }), f.environment != 0 ? (a(), m(l, {
                        key: 4,
                        label: "操作",
                        width: "160",
                        fixed: "right"
                    }, {
                        default: o(n => [ f.environment == "15" ? (a(), m(M, {
                            key: 0,
                            link: "",
                            type: "primary",
                            onClick: c => (s => {
                                if (J.devopsMenus && J.devopsMenus.length > 0) {
                                    let h = O.resolve({
                                        name: J.devopsMenus[0].routeName,
                                        params: {
                                            classId: w.query.classId,
                                            groupId: s.groupId,
                                            projectId: w.params.projectId,
                                            teachArrangementId: w.query.teachArrangementId,
                                            teachCourseId: w.query.teachCourseId
                                        }
                                    });
                                    window.open(h.href, "_blank");
                                } else O.push("/404");
                            })(n.row)
                        }, {
                            default: o(() => [ N(" 进入项目 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) : _("", !0), [ "10", "5" ].includes(f.environment) ? (a(), 
                        m(M, {
                            key: 1,
                            link: "",
                            type: "primary",
                            onClick: c => (async s => {
                                await Z.confirm(`\u91CD\u7F6E\u5C06\u6E05\u7A7A\u201C${s.groupName ?? s.userName}\u201D\u7684\u5B9E\u9A8C\u73AF\u5883\uFF0C \u662F\u5426\u7EE7\u7EED\u64CD\u4F5C\uFF1F`, "提示"), 
                                f.environment == 5 ? await Ve({
                                    taskId: S.value.id,
                                    userId: s.userId
                                }) : await Ze({
                                    module: 2,
                                    businessId: w.params.projectId,
                                    userId: s.userId
                                }), Z.success("操作成功"), A(S.value);
                            })(n.row)
                        }, {
                            default: o(() => [ N(" 重置 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) : _("", !0), [ "10", "20" ].includes(f.environment) ? (a(), 
                        m(M, {
                            key: 2,
                            link: "",
                            type: "primary",
                            onClick: c => (s => {
                                let h = O.resolve({
                                    name: "ProjectActualCombatIndex",
                                    query: {
                                        environment: V.value,
                                        module: "2",
                                        projectId: w.params.projectId,
                                        taskId: S.value.id,
                                        groupId: s.groupId,
                                        studentId: s.userId,
                                        studentName: s.userName,
                                        groupName: s.groupName,
                                        isHelping: "1"
                                    }
                                });
                                window.open(h.href, "_blank");
                            })(n.row)
                        }, {
                            default: o(() => [ N(" 协作 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) : _("", !0) ]),
                        _: 1
                    })) : _("", !0) ]),
                    _: 1
                }, 8, [ "data", "loading" ])), [ [ he, r(T) ] ]) : (a(), d("div", $, [ t(x, {
                    msg: "暂无监控数据",
                    type: "resource"
                }) ])) ]) ]), t(ve, {
                    ref_key: "resPreviewRef",
                    ref: Q
                }, null, 512) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-0eef7278" ] ]);
});

export {
    ma as __tla,
    te as default
};