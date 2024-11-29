import {
    _ as fa,
    __tla as ya
} from "./index-c834085f.js";

import {
    r as p,
    p as ha,
    T as va,
    f as xa,
    j as ga,
    o as l,
    c as k,
    a as n,
    t as s,
    k as c,
    A as sa,
    C as u,
    l as e,
    v as o,
    F as ka,
    y as Ca,
    B as f,
    D as I,
    i as x,
    J as wa,
    L as ba,
    _ as Ia,
    R as Ta,
    S as za,
    z as Ra,
    __tla as Ba
} from "./index-6c08ea4c.js";

import {
    _ as Da,
    __tla as qa
} from "./index-1024512a.js";

import Aa, {
    __tla as Fa
} from "./addAttendanceDialog-546f5dde.js";

import {
    d as Sa,
    g as ea,
    u as Ea,
    __tla as Na
} from "./attendance-a1fdab58.js";

import {
    f as ta,
    __tla as Oa
} from "./formatTime-de6f1520.js";

import {
    _ as Pa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as ja,
    b as Ha,
    E as Ja,
    __tla as La
} from "./index-5adb716b.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ma
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ga
} from "./index-ef4d146e.js";

let la, Ka = Promise.all([ (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return Ba;
    } catch {}
})(), (() => {
    try {
        return qa;
    } catch {}
})(), (() => {
    try {
        return Fa;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Ga;
    } catch {}
})() ]).then(async () => {
    let d, T, z, R, B, D, q, A, F, S, E, N, O, P, j, H, J, L, M, G, K;
    d = g => (Ta("data-v-a349d7f1"), g = g(), za(), g), T = {
        class: "drawer-body"
    }, z = {
        key: 0
    }, R = {
        class: "top-box clearFix"
    }, B = {
        class: "right"
    }, D = {
        class: "content"
    }, q = {
        class: "clearFix"
    }, A = {
        class: "title left"
    }, F = {
        class: "item-bottom mt-12px flex"
    }, S = {
        class: "font-size-12px lh-16px"
    }, E = d(() => s("span", {
        class: "color-#999999"
    }, "开始时间：", -1)), N = {
        class: "color-#666666"
    }, O = {
        class: "font-size-12px lh-16px"
    }, P = d(() => s("span", {
        class: "color-#999999"
    }, "结束时间：", -1)), j = {
        class: "color-#666666"
    }, H = {
        class: "font-size-12px lh-16px"
    }, J = d(() => s("span", {
        class: "color-#999999"
    }, "已签到：", -1)), L = {
        class: "color-#666666"
    }, M = {
        class: "flex"
    }, G = d(() => s("div", {
        class: Ra([ "neu-color-blue", "px-3 py-1" ])
    }, "编辑", -1)), K = d(() => s("div", {
        class: "neu-color-red px-3 py-1"
    }, "删除", -1)), la = Pa({
        __name: "courseTeaAttendance",
        emits: [ "handleDetail" ],
        setup(g, {
            emit: ca
        }) {
            const ia = ca, C = p(null), y = ha(), Q = va(), w = p(""), h = p([]), b = p(!1), U = p({}), ra = async i => {
                if (i.type === "edit") b.value = !0, U.value = i.info, C.value.handleOpen(); else if (i.type === "delete") {
                    await y.delConfirm(x("div", {
                        class: "neuMessageBox"
                    }, [ x("span", {
                        class: {
                            messageBoxTip: !0,
                            messageBoxShow: !y
                        }
                    }, [ x("span", {
                        class: {
                            tipImg: !0
                        }
                    }), x("span", {
                        class: {
                            tipText: !0
                        }
                    }, "说明：删除后，学生端数据也同步删除") ]), x("span", {
                        class: {
                            messageBoxContent: !0
                        }
                    }, "确定删除当前考勤吗？") ]));
                    let t = {
                        id: i.info.id
                    };
                    await Sa(t), y.success("删除成功"), v();
                }
            }, V = p(!1), v = async (i = !1) => {
                V.value = i;
                const t = await ea({
                    searchReq: w.value,
                    teachClassId: Q.params.classId
                });
                h.value = t == null ? void 0 : t.list;
            }, na = i => {
                w.value = i.searchReq, v();
            }, W = () => {
                b.value = !1, C.value.handleOpen();
            };
            return xa(() => {
                v(!0);
            }), (i, t) => {
                const oa = Da, _ = wa, da = ba, X = Ia, Y = ja, _a = Ha, ma = Ja, pa = fa, Z = ga("hasPermi");
                return l(), k("div", T, [ n(h).length > 0 || !n(V) ? (l(), k("div", z, [ s("div", R, [ c(oa, {
                    onHandleSearch: na,
                    inDialog: !0,
                    class: "left",
                    keywordsInfo: {
                        key: "searchReq",
                        label: "考勤名称"
                    }
                }), s("div", B, [ sa((l(), u(_, {
                    type: "primary",
                    size: "large",
                    class: "btn-group",
                    onClick: t[0] || (t[0] = a => W())
                }, {
                    default: e(() => [ o(" 新建考勤 ") ]),
                    _: 1
                })), [ [ Z, [ "teachmanager:teach-course-attendance:create" ] ] ]) ]) ]), s("div", D, [ (l(!0), 
                k(ka, null, Ca(n(h), a => (l(), k("div", {
                    key: a.id,
                    class: "item"
                }, [ s("div", q, [ s("div", A, f(a.title), 1), c(da, {
                    class: "right ml-6px",
                    type: a.status === 1 ? "success" : "info"
                }, {
                    default: e(() => [ o(f(a.status === 1 ? "进行中" : "已结束"), 1) ]),
                    _: 2
                }, 1032, [ "type" ]), a.status === 1 ? (l(), u(_, {
                    key: 0,
                    class: "right",
                    size: "small",
                    text: "",
                    bg: "",
                    onClick: $ => (async m => {
                        const r = await ea({
                            id: m.id,
                            searchReq: w.value,
                            teachClassId: Q.params.classId
                        });
                        let aa = h.value.findIndex(ua => ua.id === (r == null ? void 0 : r.list[0].id));
                        aa !== -1 && (h.value[aa] = r == null ? void 0 : r.list[0]);
                    })(a)
                }, {
                    default: e(() => [ c(X, {
                        icon: "ep:refresh-right"
                    }), o(" 刷新 ") ]),
                    _: 2
                }, 1032, [ "onClick" ])) : I("", !0) ]), s("div", F, [ s("div", S, [ E, s("span", N, f(n(ta)(a.openTime)), 1) ]), s("div", O, [ P, s("span", j, f(n(ta)(a.finishTime)), 1) ]), s("div", H, [ J, s("span", L, f(a.attendanceNum) + "/" + f(a.attendanceAllNum), 1) ]), s("div", M, [ c(ma, {
                    onCommand: ra
                }, {
                    dropdown: e(() => [ c(_a, null, {
                        default: e(() => [ c(Y, {
                            command: {
                                info: a,
                                type: "edit"
                            }
                        }, {
                            default: e(() => [ G ]),
                            _: 2
                        }, 1032, [ "command" ]), a.status === 2 ? (l(), u(Y, {
                            key: 0,
                            command: {
                                info: a,
                                type: "delete"
                            }
                        }, {
                            default: e(() => [ K ]),
                            _: 2
                        }, 1032, [ "command" ])) : I("", !0) ]),
                        _: 2
                    }, 1024) ]),
                    default: e(() => [ c(_, {
                        class: "mr-2 mt6",
                        link: "",
                        type: "primary"
                    }, {
                        default: e(() => [ o("更多 "), c(X, {
                            icon: "ep:arrow-down"
                        }) ]),
                        _: 1
                    }) ]),
                    _: 2
                }, 1024), a.status === 1 ? (l(), u(_, {
                    key: 0,
                    type: "danger",
                    onClick: $ => (async m => {
                        await y.confirm("确定结束当前考勤吗？");
                        let r = {
                            id: m.id,
                            finishTime: m.finishTime,
                            status: 2
                        };
                        await Ea(r), y.success("操作成功"), v();
                    })(a)
                }, {
                    default: e(() => [ o(" 立即结束 ") ]),
                    _: 2
                }, 1032, [ "onClick" ])) : I("", !0), c(_, {
                    type: "primary",
                    onClick: $ => (m => {
                        ia("handleDetail", m);
                    })(a)
                }, {
                    default: e(() => [ o(" 详情 ") ]),
                    _: 2
                }, 1032, [ "onClick" ]) ]) ]) ]))), 128)) ]) ])) : (l(), u(pa, {
                    key: 1
                }, {
                    btn: e(() => [ sa((l(), u(_, {
                        type: "primary",
                        size: "large",
                        class: "btn-group",
                        onClick: t[1] || (t[1] = a => W())
                    }, {
                        default: e(() => [ o(" 新建考勤 ") ]),
                        _: 1
                    })), [ [ Z, [ "teachmanager:teach-course-attendance:create" ] ] ]) ]),
                    _: 1
                })), c(Aa, {
                    ref_key: "addAttendanceDialogRef",
                    ref: C,
                    "is-edit": n(b),
                    form: n(U),
                    onRefresh: t[2] || (t[2] = a => v())
                }, null, 8, [ "is-edit", "form" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a349d7f1" ] ]);
});

export {
    Ka as __tla,
    la as default
};