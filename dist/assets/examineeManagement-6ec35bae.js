import {
    p as ie,
    r as s,
    e as T,
    w as _e,
    f as pe,
    o as O,
    C as L,
    l as d,
    a,
    D as ce,
    t as z,
    k as l,
    v as x,
    A as M,
    G as fe,
    m as E,
    n as Q,
    _ as ve,
    J as ge,
    ad as he,
    ae as ye,
    a9 as Ie,
    R as xe,
    S as be,
    __tla as we
} from "./index-6c08ea4c.js";

import {
    E as Se,
    __tla as ke
} from "./el-drawer-fca4d971.js";

import {
    _ as Ve,
    __tla as Ue
} from "./index-33f7224d.js";

import {
    _ as ze,
    __tla as Ee
} from "./index-c4ca0ced.js";

import {
    _ as Ne,
    __tla as Ce
} from "./index-1024512a.js";

import {
    T as v,
    __tla as Fe
} from "./testPlacementManagement-3629800e.js";

import Pe, {
    __tla as De
} from "./selectClassStudentCom-d2f33464.js";

import Oe, {
    __tla as Le
} from "./selectExamStudentCom-3e163c7c.js";

import {
    g as He,
    a as Je,
    __tla as Ae
} from "./index-7c75bd27.js";

import {
    h as Be
} from "./tree-05ea8e09.js";

import {
    _ as Ge
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as Re,
    b as Te,
    E as Me,
    __tla as Qe
} from "./index-5adb716b.js";

import {
    __tla as qe
} from "./el-infinite-scroll-9cd61b58.js";

import {
    __tla as Ke
} from "./throttle-1adeb119.js";

import {
    __tla as We
} from "./index-13c88727.js";

import {
    __tla as Xe
} from "./dict-c5825220.js";

import {
    __tla as Ye
} from "./index-d1db0401.js";

import {
    __tla as Ze
} from "./DeptTag-1be092ce.js";

import {
    __tla as $e
} from "./index-993301ca.js";

import {
    __tla as je
} from "./index-ef4d146e.js";

let q, ea = Promise.all([ (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})() ]).then(async () => {
    let H, J, A;
    H = {
        class: "mb8"
    }, J = (u => (xe("data-v-57c9e3af"), u = u(), be(), u))(() => z("div", {
        class: "mb8 title"
    }, [ z("span", null, " 考试发布后，考前1小时内不可以再新增或删除考生 ") ], -1)), A = {
        style: {
            "min-height": "calc(100% - 150px)"
        }
    }, q = Ge({
        __name: "examineeManagement",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            },
            examId: {
                type: String,
                default: ""
            }
        },
        emits: [ "update:modelValue" ],
        setup(u, {
            emit: K
        }) {
            const N = ie(), W = K, m = u, _ = s([]), C = s([]), B = s([]), X = T(() => [ {
                label: "组织机构",
                key: "deptIds",
                filterable: !0,
                multiple: !0,
                type: "deptTree",
                options: C.value,
                tagOptions: B.value
            } ]), b = s(null), p = s(!1), F = s(!0), w = s({
                dateOfJoin: "",
                deptIds: "",
                keywords: ""
            }), S = s([]), k = s(!1), P = s([]), D = s(0), n = s({
                pageNum: 1,
                pageSize: 10
            }), V = T({
                get: () => m.modelValue,
                set: t => {
                    W("update:modelValue", t);
                }
            });
            _e(() => V.value, t => {
                t ? i("first") : b.value && b.value.resetParams && b.value.resetParams();
            });
            const g = s(!1), h = s(!1), c = s(!1);
            function Y(t) {
                switch (t) {
                  case "addFromOrg":
                    v.getExamStudent(m.examId).then(e => {
                        _.value = e.map(r => ({
                            ...r,
                            nickname: r.nickName,
                            id: r.userId
                        })), c.value = !0;
                    });
                    break;

                  case "addFromCla":
                    v.getExamStudent(m.examId).then(e => {
                        _.value = e.map(r => r.userId), Q(() => {
                            g.value = !0;
                        });
                    });
                    break;

                  case "addFromPub":
                    v.getExamStudent(m.examId).then(e => {
                        _.value = e.map(r => r.userId), Q(() => {
                            (void (h.value = !0))();
                        });
                    });
                }
            }
            function Z() {
                g.value = !1, i();
            }
            function $() {
                h.value = !1, i();
            }
            function j(t, e) {
                let r = e.map(f => {
                    let {
                        id: y,
                        ...R
                    } = f;
                    return y;
                }), U = {
                    examId: m.examId,
                    userIds: r
                };
                v.addExamStudent(U).then(f => {
                    N.success("操作成功"), i(), c.value = !1;
                }).catch(f => {
                    c.value = !1;
                });
            }
            const ee = t => {
                n.value.pageNum = t.page, n.value.pageSize = t.limit, i();
            };
            function ae(t) {
                P.value = [ ...t ];
            }
            function i(t) {
                k.value = !0;
                let e = {
                    ...w.value,
                    pageNum: n.value.pageNum - 1,
                    pageSize: n.value.pageSize,
                    examId: m.examId
                };
                v.getExamStudentPage(e).then(r => {
                    S.value = r.page.content || [], p.value = r.disable, t === "first" && S.value.length <= 0 ? F.value = !1 : S.value.length > 0 && (F.value = !0), 
                    D.value = r.page.totalElements || 0, k.value = !1;
                }).catch(r => {
                    k.value = !1;
                });
            }
            function te(t) {
                w.value.keywords = t.keywords, w.value.deptIds = (t.deptIds || []).join(","), 
                w.value.dateOfJoin = t.dateOfJoin, i();
            }
            const G = async (t = {}) => {
                const e = await Je(t);
                C.value = [], C.value.push(...Be(e));
            };
            return pe(() => {
                (async () => B.value = await He())(), G();
            }), (t, e) => {
                const r = Ne, U = ve, f = ge, y = Re, R = Te, le = Me, I = he, re = ye, se = ze, oe = Ve, de = Se, ne = Ie;
                return O(), L(de, {
                    modelValue: a(V),
                    "onUpdate:modelValue": e[6] || (e[6] = o => E(V) ? V.value = o : null),
                    title: "考生管理",
                    size: "70%"
                }, {
                    default: d(() => [ a(F) ? (O(), L(r, {
                        key: 0,
                        ref_key: "searchFormRef",
                        ref: b,
                        inDialog: !0,
                        searchList: a(X),
                        onHandleSearch: te,
                        onHandleGetDeptList: G,
                        keywordsInfo: {
                            key: "keywords",
                            label: "姓名/学号/工号"
                        }
                    }, null, 8, [ "searchList" ])) : ce("", !0), z("div", H, [ l(le, {
                        teleported: !1,
                        class: "empty-dropdown",
                        onCommand: Y
                    }, {
                        dropdown: d(() => [ l(R, null, {
                            default: d(() => [ l(y, {
                                disabled: a(p),
                                command: "addFromOrg"
                            }, {
                                default: d(() => [ x("从组织机构添加") ]),
                                _: 1
                            }, 8, [ "disabled" ]), l(y, {
                                disabled: a(p),
                                command: "addFromCla"
                            }, {
                                default: d(() => [ x("从课程教学班添加") ]),
                                _: 1
                            }, 8, [ "disabled" ]), l(y, {
                                disabled: a(p),
                                command: "addFromPub"
                            }, {
                                default: d(() => [ x("从已发布考试添加") ]),
                                _: 1
                            }, 8, [ "disabled" ]) ]),
                            _: 1
                        }) ]),
                        default: d(() => [ l(f, {
                            type: "primary",
                            plain: "",
                            size: "large",
                            disabled: a(p),
                            class: "mr-12px"
                        }, {
                            default: d(() => [ l(U, {
                                icon: "ep:plus",
                                class: "mr-5px"
                            }), x("添加考生") ]),
                            _: 1
                        }, 8, [ "disabled" ]) ]),
                        _: 1
                    }), l(f, {
                        type: "danger",
                        plain: "",
                        size: "large",
                        onClick: e[0] || (e[0] = o => async function() {
                            await N.delConfirm("是否确认删除选中的考生?", "提示");
                            let ue = {
                                examId: m.examId,
                                ids: P.value.map(me => me.id)
                            };
                            v.deleteExamStudent(ue).then(() => {
                                i(), N.success("操作成功");
                            });
                        }()),
                        disabled: a(P).length === 0 || a(p)
                    }, {
                        default: d(() => [ l(U, {
                            icon: "ep:delete",
                            class: "mr-4px"
                        }), x("删除") ]),
                        _: 1
                    }, 8, [ "disabled" ]), J ]), z("div", A, [ M((O(), L(re, {
                        data: a(S),
                        onSelectionChange: ae
                    }, {
                        default: d(() => [ l(I, {
                            type: "selection",
                            width: "50",
                            align: "center"
                        }), l(I, {
                            type: "index",
                            label: "序号",
                            width: "100",
                            align: "center"
                        }), l(I, {
                            prop: "nickName",
                            label: "姓名",
                            "show-overflow-tooltip": !0
                        }), l(I, {
                            prop: "number",
                            label: "学号/工号",
                            "show-overflow-tooltip": !0
                        }), l(I, {
                            prop: "org.terminalDeptName",
                            label: "所属末级组织",
                            "show-overflow-tooltip": !0
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ ne, a(k) ] ]) ]), M(l(se, {
                        total: a(D),
                        page: a(n).pageNum,
                        "onUpdate:page": e[1] || (e[1] = o => a(n).pageNum = o),
                        limit: a(n).pageSize,
                        "onUpdate:limit": e[2] || (e[2] = o => a(n).pageSize = o),
                        pageSizes: [ 10, 20, 30, 50, 100, 200, 500, 1e3, 2e3, 5e3 ],
                        onPagination: ee
                    }, null, 8, [ "total", "page", "limit" ]), [ [ fe, a(D) > 0 ] ]), l(Pe, {
                        modelValue: a(g),
                        "onUpdate:modelValue": e[3] || (e[3] = o => E(g) ? g.value = o : null),
                        "exam-id": u.examId,
                        onCloseDialog: Z,
                        notInUserIds: a(_)
                    }, null, 8, [ "modelValue", "exam-id", "notInUserIds" ]), l(Oe, {
                        modelValue: a(h),
                        "onUpdate:modelValue": e[4] || (e[4] = o => E(h) ? h.value = o : null),
                        "exam-id": u.examId,
                        notInUserIds: a(_),
                        onCloseDialog: $
                    }, null, 8, [ "modelValue", "exam-id", "notInUserIds" ]), l(oe, {
                        modelValue: a(c),
                        "onUpdate:modelValue": e[5] || (e[5] = o => E(c) ? c.value = o : null),
                        onSubmitIds: j,
                        defaultUserList: a(_),
                        defaultUserParams: {
                            identities: "5"
                        },
                        title: "说明：只显示学习者身份的用户，并自动过滤已添加的用户及账号已停用的用户"
                    }, null, 8, [ "modelValue", "defaultUserList" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-57c9e3af" ] ]);
});

export {
    ea as __tla,
    q as default
};