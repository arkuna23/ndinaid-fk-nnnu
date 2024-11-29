import {
    a0 as Ne,
    T as je,
    u as Oe,
    p as Pe,
    r as m,
    e as x,
    f as Re,
    o as u,
    c as I,
    t as v,
    k as e,
    a as o,
    C as y,
    l,
    v as i,
    D as h,
    A as te,
    B as E,
    F as Le,
    _ as Ae,
    J as ze,
    ad as Je,
    L as Ue,
    ae as Be,
    a9 as Xe,
    __tla as De
} from "./index-6c08ea4c.js";

import {
    _ as Me,
    __tla as Ge
} from "./index-e2094cc0.js";

import {
    _ as Fe,
    __tla as He
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as $e,
    __tla as qe
} from "./index-71666e05.js";

import {
    _ as Ke,
    __tla as Qe
} from "./index-1024512a.js";

import {
    c as ae,
    D as T,
    __tla as Ve
} from "./dict-c5825220.js";

import {
    f as le,
    a as re,
    __tla as We
} from "./formatTime-de6f1520.js";

import {
    a as Ye,
    e as Ze,
    s as et,
    b as tt,
    __tla as at
} from "./score-b548b686.js";

import lt, {
    __tla as rt
} from "./setting-4a9ecd0e.js";

import ot, {
    __tla as st
} from "./import-a90e1a02.js";

import it, {
    __tla as pt
} from "./supplement-2a2cfc5f.js";

import nt, {
    __tla as ut
} from "./comment-6cb94c26.js";

import {
    B as ct,
    __tla as dt
} from "./file-e038b35d.js";

import {
    _ as mt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

import "./tree-05ea8e09.js";

import {
    __tla as _t
} from "./DeptTag-1be092ce.js";

import {
    __tla as ft
} from "./index-ef4d146e.js";

import {
    __tla as yt
} from "./index-7c75bd27.js";

import "./file.data-794ea5d0.js";

import "./file_题-23882218.js";

let oe, ht = Promise.all([ (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return He;
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
        return Ve;
    } catch {}
})(), (() => {
    try {
        return We;
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
        return st;
    } catch {}
})(), (() => {
    try {
        return pt;
    } catch {}
})(), (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return dt;
    } catch {}
})(), (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return ft;
    } catch {}
})(), (() => {
    try {
        return yt;
    } catch {}
})() ]).then(async () => {
    let U, B, X, D, M, G, F, H, $, q, K, Q;
    U = {
        class: "score"
    }, B = {
        class: "top-box ml-0"
    }, X = {
        class: "right btns-box header-btns"
    }, D = {
        class: "main-box"
    }, M = {
        class: "data-empty"
    }, G = {
        key: 0
    }, F = {
        class: "data-empty"
    }, H = {
        style: {
            width: "100%"
        }
    }, $ = {
        key: 0
    }, q = {
        key: 1
    }, K = {
        key: 0
    }, Q = {
        key: 2,
        class: "data-empty"
    }, oe = mt({
        __name: "index",
        props: {
            scoreInfo: {
                type: Object,
                default: () => ({})
            },
            completeType: {
                type: String,
                default: "1"
            },
            environment: {
                type: String,
                default: ""
            }
        },
        setup(se, {
            expose: ie
        }) {
            const pe = se, {
                scoreInfo: wt,
                environment: bt,
                completeType: k
            } = Ne(pe), f = je(), ne = Oe(), N = Pe(), V = m(), ue = m(), W = m(), L = m(), j = m(), d = m([]), ce = x(() => [ {
                label: "完成状态",
                key: "finalStatus",
                type: "list",
                options: ae(T.EXP_SCORE_COMPLETE_STATUS)
            }, {
                label: "评阅状态",
                key: "scoreStatus",
                type: "list",
                options: ae(T.EXP_SCORE_STATUS)
            } ]), w = m({
                finalStatus: "",
                scoreStatus: "",
                nickName: ""
            }), O = m(!1), P = m([]), C = m([]), de = x(() => d.value.filter(t => t.finalStatus != 1 || t.publishStatus == 1).length > 0), me = x(() => d.value.filter(t => t.finalStatus != 1 || t.publishStatus == 1).length > 0), _e = x(() => d.value.filter(t => t.publishStatus == 1).length > 0), fe = x(() => d.value.filter(t => t.finalStatus == 1 || t.publishStatus == 1).length > 0), b = async t => {
                z.value, O.value = !0;
                try {
                    const p = await Ye({
                        projectId: f.params.projectId
                    });
                    p.completeType == 2 ? C.value = p.groupList ?? [] : p.completeType == 1 && (C.value = p.stuList ?? []), 
                    P.value = he();
                } finally {
                    O.value = !1;
                }
            };
            function ye(t) {
                w.value = t, b();
            }
            const he = () => {
                let t = JSON.parse(JSON.stringify(C.value));
                return w.value.nickName && (t = we(w.value, t)), w.value.finalStatus && (t = Y(w.value, t, "finalStatus")), 
                w.value.scoreStatus && (t = Y(w.value, t, "scoreStatus")), t;
            }, we = (t, p = JSON.parse(JSON.stringify(C.value))) => {
                let c = [];
                if (t.nickName) {
                    let n = [];
                    p.forEach((s, S) => {
                        if (k.value == 1) (s.nickName.includes(t.nickName) || s.number.includes(t.nickName)) && n.push(s); else {
                            let a = (s.groupStuList || []).filter(_ => (_.nickName ?? "").includes(t.nickName) || (_.number ?? "").includes(t.nickName));
                            if (a.length > 0) {
                                let _ = [ ...a ];
                                s.groupStuList = [ ..._ ], n.push(s);
                            }
                        }
                    }), c = n;
                }
                return c;
            }, Y = (t, p = JSON.parse(JSON.stringify(C.value)), c) => {
                let n = [];
                if (t[c]) {
                    let s = [];
                    p.forEach((S, a) => {
                        S[c] == t[c] && s.push(S);
                    }), n = s;
                }
                return n;
            }, Z = t => {
                d.value = t;
            }, be = () => {
                V.value.open();
            }, Se = async () => {
                const t = await Ze({
                    projectId: f.params.projectId,
                    idList: d.value.map(c => c.groupId ?? c.userId)
                }), {
                    address: p
                } = await ct(t.data);
                window.open(`http://${p}`);
            }, ve = async () => {
                await N.confirm("您即将发布项目成绩，请注意成绩发布后将无法进行任何更改。同时，学生的项目报告中将显示其最终成绩。请确认所有信息无误后再进行发布操作。是否确认发布项目成绩？", "提示"), 
                await et({
                    projectId: f.params.projectId
                }), N.success("发布成功"), b();
            }, ke = () => {
                L.value.open(d.value.map(t => t.groupId ?? t.userId), "supplement");
            }, ge = () => {
                L.value.open(d.value.map(t => t.groupId ?? t.userId), "back");
            }, Ie = () => {
                W.value.open(d.value);
            }, Te = async () => {
                await N.confirm("确认催交吗?", "提示"), await tt({
                    projectId: f.params.projectId,
                    idList: d.value.map(t => t.groupId ?? t.userId)
                }), N.success("催交成功"), b();
            }, A = (t, p) => {
                ne.push({
                    name: "ProjectScore",
                    params: {
                        projectId: f.params.projectId,
                        userId: t.userId ?? "false",
                        groupId: p ?? "false",
                        completeType: k.value,
                        classId: f.params.classId,
                        teachArrangementId: f.params.teachArrangementId,
                        teachCourseId: f.params.teachCourseId
                    }
                });
            }, z = m([]), Ce = (t, p) => {
                z.value = p.map(c => c.groupId);
            }, xe = t => {
                t ? j.value.toggleAllSelection() : j.value.clearSelection();
            };
            return Re(() => {
                b();
            }), ie({}), (t, p) => {
                const c = Ke, n = Ae, s = ze, S = $e, a = Je, _ = Fe, R = Ue, J = Be, Ee = Me, ee = Xe;
                return u(), I(Le, null, [ v("div", U, [ v("div", B, [ e(c, {
                    ref: "ComSearchRef",
                    searchList: o(ce),
                    keywordsInfo: {
                        label: "学生姓名/学号",
                        key: "nickName"
                    },
                    onHandleSearch: ye,
                    class: "left"
                }, null, 8, [ "searchList" ]), v("div", X, [ o(k) ? (u(), y(s, {
                    key: 0,
                    type: "primary",
                    size: "large",
                    plain: "",
                    onClick: be
                }, {
                    default: l(() => [ e(n, {
                        class: "icon mr-5px",
                        icon: "svg-icon:icon-type-setting"
                    }), i(" 设置 ") ]),
                    _: 1
                })) : h("", !0), o(k) ? (u(), y(s, {
                    key: 1,
                    type: "primary",
                    size: "large",
                    onClick: ve
                }, {
                    default: l(() => [ e(n, {
                        icon: "svg-icon:project-publish",
                        class: "mr-5px"
                    }), i(" 发布 ") ]),
                    _: 1
                })) : h("", !0) ]) ]), v("div", D, [ o(k) == 1 ? te((u(), y(J, {
                    key: 0,
                    data: o(P),
                    onSelectionChange: Z,
                    ref_key: "scoreTableRef",
                    ref: j
                }, {
                    empty: l(() => [ v("div", M, [ e(S, {
                        msg: "暂无数据",
                        type: "resource",
                        width: "150px"
                    }) ]) ]),
                    default: l(() => [ e(a, {
                        type: "selection",
                        width: "55",
                        fixed: "left"
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "姓名",
                        prop: "nickName",
                        width: "150"
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "学号",
                        prop: "number",
                        "min-width": "150"
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "班级",
                        prop: "deptName",
                        "min-width": "150"
                    }), e(a, {
                        label: "完成状态",
                        prop: "finalStatus",
                        "min-width": "190"
                    }, {
                        default: l(r => [ e(_, {
                            type: o(T).EXP_SCORE_COMPLETE_STATUS,
                            value: r.row.finalStatus
                        }, null, 8, [ "type", "value" ]), r.row.finalStatus == 1 ? (u(), 
                        I("span", G, [ r.row.isBack == 1 ? (u(), y(R, {
                            key: 0,
                            effect: "dark",
                            type: "danger",
                            size: "small",
                            round: !0,
                            class: "submitType submitType_3 ml-1"
                        }, {
                            default: l(() => [ i(" 打回") ]),
                            _: 1
                        })) : h("", !0), r.row.isSupplement == 1 ? (u(), y(R, {
                            key: 1,
                            type: "warning",
                            effect: "dark",
                            size: "small",
                            round: !0,
                            class: "submitType submitType_2 ml-1"
                        }, {
                            default: l(() => [ i(" 补交中") ]),
                            _: 1
                        })) : h("", !0) ])) : h("", !0) ]),
                        _: 1
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "完成时间",
                        prop: "completeTime",
                        "min-width": "180"
                    }, {
                        default: l(r => [ i(E(o(le)(r.row.completeTime) || "--"), 1) ]),
                        _: 1
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "项目耗时",
                        prop: "projectPeriod",
                        "min-width": "180",
                        sortable: ""
                    }, {
                        default: l(r => [ i(E(o(re)(1e3 * (r.row.projectPeriod ?? 0))), 1) ]),
                        _: 1
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "任务完成情况",
                        prop: "taskComplete",
                        "min-width": "180"
                    }), e(a, {
                        label: "评阅状态",
                        prop: "scoreStatus",
                        width: "100"
                    }, {
                        default: l(r => [ e(_, {
                            type: o(T).EXP_SCORE_STATUS,
                            value: r.row.scoreStatus
                        }, null, 8, [ "type", "value" ]) ]),
                        _: 1
                    }), e(a, {
                        label: "最终成绩",
                        prop: "finalScore",
                        "min-width": "180",
                        sortable: ""
                    }), e(a, {
                        label: "操作",
                        width: "160",
                        fixed: "right"
                    }, {
                        default: l(r => [ e(s, {
                            link: "",
                            type: "primary",
                            onClick: g => A(r.row),
                            disabled: r.row.publishStatus == 1
                        }, {
                            default: l(() => [ i(" 评分 ") ]),
                            _: 2
                        }, 1032, [ "onClick", "disabled" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "data" ])), [ [ ee, o(O) ] ]) : o(k) == 2 ? te((u(), y(J, {
                    key: 1,
                    data: o(P),
                    "row-key": "groupId",
                    onExpandChange: Ce,
                    "expand-row-keys": o(z),
                    onSelectionChange: Z,
                    style: {
                        width: "100%"
                    },
                    "min-height": "200",
                    ref_key: "scoreTableRef",
                    ref: j
                }, {
                    empty: l(() => [ v("div", F, [ e(S, {
                        msg: "暂无数据",
                        type: "resource"
                    }) ]) ]),
                    default: l(() => [ e(a, {
                        type: "expand"
                    }, {
                        default: l(({
                            row: r
                        }) => [ v("div", H, [ e(J, {
                            data: r.groupStuList,
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: l(() => [ e(a, {
                                label: "",
                                prop: "",
                                width: "100"
                            }), e(a, {
                                label: "成员姓名",
                                prop: "nickName",
                                width: "155"
                            }), e(a, {
                                label: "学号",
                                prop: "number",
                                width: "200"
                            }), e(a, {
                                label: "班级",
                                prop: "deptName",
                                "min-width": "200"
                            }), e(a, {
                                label: "角色",
                                prop: "userGroupRole",
                                "min-width": "200"
                            }), e(a, {
                                label: "任务完成情况",
                                prop: "taskComplete",
                                "min-width": "200"
                            }), e(a, {
                                label: "项目贡献度",
                                prop: "contribution",
                                "min-width": "180"
                            }, {
                                default: l(g => [ g.row.contribution !== null ? (u(), 
                                I("span", $, E(g.row.contribution) + "% ", 1)) : (u(), 
                                I("span", q, "--")) ]),
                                _: 2
                            }, 1024), e(a, {
                                label: "最终成绩",
                                prop: "finalScore",
                                width: "180"
                            }), e(a, {
                                label: "操作",
                                width: "180",
                                fixed: "right",
                                class: "fixed_col"
                            }, {
                                default: l(g => [ e(s, {
                                    link: "",
                                    type: "primary",
                                    onClick: St => A(g.row, r.groupId),
                                    disabled: r.publishStatus == 1
                                }, {
                                    default: l(() => [ i(" 调分 ") ]),
                                    _: 2
                                }, 1032, [ "onClick", "disabled" ]) ]),
                                _: 2
                            }, 1024) ]),
                            _: 2
                        }, 1032, [ "data" ]) ]) ]),
                        _: 1
                    }), e(a, {
                        type: "selection",
                        width: "55",
                        fixed: "left"
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "项目组",
                        prop: "groupName",
                        width: "150"
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "项目组长",
                        prop: "leaderName",
                        width: "150"
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "成员数",
                        prop: "userCount",
                        width: "100"
                    }), e(a, {
                        label: "完成状态",
                        prop: "finalStatus",
                        "min-width": "190"
                    }, {
                        default: l(r => [ e(_, {
                            type: o(T).EXP_SCORE_COMPLETE_STATUS,
                            value: r.row.finalStatus
                        }, null, 8, [ "type", "value" ]), r.row.finalStatus == 1 ? (u(), 
                        I("span", K, [ r.row.isBack == 1 ? (u(), y(R, {
                            key: 0,
                            effect: "dark",
                            type: "danger",
                            size: "small",
                            round: !0,
                            class: "submitType submitType_3 ml-1"
                        }, {
                            default: l(() => [ i(" 打回") ]),
                            _: 1
                        })) : h("", !0), r.row.isSupplement == 1 ? (u(), y(R, {
                            key: 1,
                            type: "warning",
                            effect: "dark",
                            size: "small",
                            round: !0,
                            class: "submitType submitType_2 ml-1"
                        }, {
                            default: l(() => [ i(" 补交中") ]),
                            _: 1
                        })) : h("", !0) ])) : h("", !0) ]),
                        _: 1
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "完成时间",
                        prop: "completeTime",
                        "min-width": "180"
                    }, {
                        default: l(r => [ i(E(o(le)(r.row.completeTime) || "--"), 1) ]),
                        _: 1
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "项目耗时",
                        prop: "projectPeriod",
                        width: "180",
                        sortable: ""
                    }, {
                        default: l(r => [ i(E(o(re)(1e3 * (r.row.projectPeriod ?? 0))), 1) ]),
                        _: 1
                    }), e(a, {
                        "show-overflow-tooltip": "",
                        label: "任务完成情况",
                        prop: "taskComplete",
                        "min-width": "180"
                    }), e(a, {
                        label: "评阅状态",
                        prop: "scoreStatus",
                        "min-width": "100"
                    }, {
                        default: l(r => [ e(_, {
                            type: o(T).EXP_SCORE_STATUS,
                            value: r.row.scoreStatus
                        }, null, 8, [ "type", "value" ]) ]),
                        _: 1
                    }), e(a, {
                        label: "项目成绩",
                        prop: "finalScore",
                        width: "180",
                        sortable: ""
                    }), e(a, {
                        label: "操作",
                        width: "160",
                        fixed: "right"
                    }, {
                        default: l(r => [ e(s, {
                            link: "",
                            type: "primary",
                            onClick: g => A(r.row, r.row.groupId),
                            disabled: r.row.publishStatus == 1
                        }, {
                            default: l(() => [ i(" 评分 ") ]),
                            _: 2
                        }, 1032, [ "onClick", "disabled" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "data", "expand-row-keys" ])), [ [ ee, o(O) ] ]) : (u(), 
                I("div", Q, [ e(S, {
                    msg: "暂无数据",
                    type: "resource"
                }) ])) ]) ]), e(Ee, {
                    ref: "SelectionButtonGroupRef",
                    "select-list": o(d),
                    "page-list": o(P),
                    subject: "文件/文件夹",
                    onSelectAll: xe
                }, {
                    default: l(() => [ e(s, {
                        type: "warning",
                        onClick: ke,
                        disabled: o(de)
                    }, {
                        default: l(() => [ e(n, {
                            icon: "ep:upload",
                            class: "mr-5px"
                        }), i("补交 ") ]),
                        _: 1
                    }, 8, [ "disabled" ]), e(s, {
                        type: "primary",
                        onClick: Te,
                        disabled: o(me)
                    }, {
                        default: l(() => [ e(n, {
                            icon: "ep:bell",
                            class: "mr-5px"
                        }), i("催交 ") ]),
                        _: 1
                    }, 8, [ "disabled" ]), e(s, {
                        type: "primary",
                        onClick: Ie,
                        disabled: o(_e)
                    }, {
                        default: l(() => [ e(n, {
                            icon: "svg-icon:icon-comment",
                            class: "mr-5px"
                        }), i("评语 ") ]),
                        _: 1
                    }, 8, [ "disabled" ]), e(s, {
                        type: "primary",
                        onClick: Se
                    }, {
                        default: l(() => [ e(n, {
                            icon: "svg-icon:icon-export",
                            class: "mr-5px"
                        }), i("导出成果物 ") ]),
                        _: 1
                    }), e(s, {
                        type: "danger",
                        onClick: ge,
                        disabled: o(fe)
                    }, {
                        default: l(() => [ e(n, {
                            icon: "svg-icon:project-revert",
                            class: "mr-5px"
                        }), i("打回 ") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    _: 1
                }, 8, [ "select-list", "page-list" ]), e(lt, {
                    ref_key: "settingRef",
                    ref: V,
                    onSuccess: b
                }, null, 512), e(ot, {
                    ref_key: "importRef",
                    ref: ue
                }, null, 512), e(it, {
                    ref_key: "supplementRef",
                    ref: L,
                    onSuccess: b
                }, null, 512), e(nt, {
                    ref_key: "commentRef",
                    ref: W,
                    onSuccess: b
                }, null, 512) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-36ce39a3" ] ]);
});

export {
    ht as __tla,
    oe as default
};