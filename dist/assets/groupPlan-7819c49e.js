import {
    u as Ia,
    T as Ta,
    r as v,
    U as Na,
    e as Sa,
    j as wa,
    o as e,
    C as i,
    l as s,
    a as h,
    A as ia,
    v as r,
    c as o,
    k as p,
    F as ma,
    y as ua,
    t,
    D as y,
    B as u,
    z as za,
    m as Ba,
    E as C,
    bo as N,
    J as Ra,
    _ as Da,
    K as Ea,
    R as La,
    S as Pa,
    __tla as Va
} from "./index-6c08ea4c.js";

import {
    E as Aa,
    __tla as Oa
} from "./el-drawer-fca4d971.js";

import {
    E as Ua,
    __tla as ja
} from "./el-avatar-76960a98.js";

import {
    _ as Ka,
    __tla as Ma
} from "./index-1024512a.js";

import {
    _ as Fa,
    __tla as Ga
} from "./index-c834085f.js";

import {
    _ as Ha,
    a as Ja,
    b as qa
} from "./deleteIcon2-388bb348.js";

import {
    a as Qa,
    __tla as Wa
} from "./file-e038b35d.js";

import Xa, {
    __tla as Ya
} from "./planManage-e9a44033.js";

import Za, {
    __tla as $a
} from "./memberManagement-7a5d5a65.js";

import ae, {
    __tla as ee
} from "./addOneGroupDialog-bd58276c.js";

import {
    a as te,
    e as le,
    d as se,
    p as ne,
    __tla as re
} from "./index-d7ee4e02.js";

import {
    _ as oe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as ce,
    b as pe,
    E as ie,
    __tla as me
} from "./index-5adb716b.js";

import "./tree-05ea8e09.js";

import {
    __tla as ue
} from "./DeptTag-1be092ce.js";

import {
    __tla as de
} from "./index-ef4d146e.js";

import "./planTeacher-e2d2fd81.js";

let da, _e = Promise.all([ (() => {
    try {
        return Va;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Ga;
    } catch {}
})(), (() => {
    try {
        return Wa;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})(), (() => {
    try {
        return $a;
    } catch {}
})(), (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})() ]).then(async () => {
    let b, S, w, z, B, R, D, E, L, P, V, A, O, U, j, K, M, F, G, H, J, q, Q, W, X;
    b = I => (La("data-v-ee69bfbe"), I = I(), Pa(), I), S = {
        key: 1
    }, w = b(() => t("div", {
        style: {
            clear: "both"
        }
    }, null, -1)), z = {
        key: 0,
        style: {
            height: "calc(100vh - 200px)",
            "margin-top": "20px",
            "overflow-y": "scroll"
        }
    }, B = {
        class: "right"
    }, R = {
        class: "planItemName"
    }, D = b(() => t("br", null, null, -1)), E = {
        class: "planStatistics"
    }, L = {
        class: "planStatistics1"
    }, P = {
        class: "planStatistics2"
    }, V = {
        class: "planStatistics3"
    }, A = {
        class: "groupList"
    }, O = [ "onClick" ], U = [ b(() => t("img", {
        class: "planIcon",
        src: qa,
        alt: ""
    }, null, -1)), b(() => t("span", {
        style: {
            "font-size": "14px",
            color: "rgba(61, 61, 61, 0.7)"
        }
    }, "新增小组", -1)) ], j = {
        class: "groupItemName ellipsis"
    }, K = [ "onClick" ], M = [ "onClick" ], F = {
        style: {
            "font-size": "12px",
            color: "rgba(61, 61, 61, 0.4)",
            "margin-top": "8px"
        }
    }, G = {
        style: {
            display: "inline-block"
        }
    }, H = {
        key: 0,
        class: "ellipsis",
        style: {
            color: "#666",
            display: "inline-block",
            "max-width": "120px"
        }
    }, J = {
        key: 2
    }, q = {
        style: {
            "padding-top": "6px"
        },
        class: "right"
    }, Q = {
        key: 0,
        style: {
            color: "#666"
        }
    }, W = {
        key: 1
    }, X = {
        style: {
            "text-align": "center",
            "margin-top": "10px"
        }
    }, da = oe({
        __name: "groupPlan",
        setup(I, {
            expose: _a
        }) {
            Ia();
            const Y = Ta(), Z = v(), $ = v(), aa = v(), x = v(!1), ea = v(!1), g = v([]), m = Na({
                planName: "",
                planType: "",
                planState: ""
            }), ya = Sa(() => [ {
                label: "分组方式",
                key: "planType",
                type: "list",
                options: [ {
                    value: 1,
                    label: "教师一键分组"
                }, {
                    value: 2,
                    label: "教师手动分组"
                } ],
                width: "200px"
            }, {
                label: "分组状态",
                key: "planState",
                type: "list",
                options: [ {
                    value: 0,
                    label: "进行中"
                }, {
                    value: 1,
                    label: "已完成"
                } ]
            } ]), fa = c => {
                m.planName = c.planName, m.planType = c.planType, m.planState = c.planState, 
                d();
            }, d = c => {
                ea.value = c, te({
                    pageNo: 1,
                    pageSize: 100,
                    teachClassId: Y.params.classId,
                    name: m.planName,
                    type: m.planType,
                    status: m.planState
                }).then(n => {
                    g.value = n.list;
                });
            }, T = (c, n) => {
                g.value.length < 5 ? aa.value.open(c, n) : C.alert("每个教学班级最多可创建5个分组方案！", "提示", {
                    confirmButtonText: "确认"
                });
            }, ta = (c, n) => {
                $.value.open(c, n);
            }, la = c => {
                C.confirm("确定要删除该分组方案吗？", "提示", {
                    confirmButtonText: "确认",
                    cancelButtonText: "取消"
                }).then(() => {
                    ne({
                        id: c.id
                    }).then(n => {
                        d(), N({
                            type: "success",
                            message: "删除成功"
                        });
                    });
                }).catch(() => {});
            }, ha = async () => {
                g.value = [], m.planName = "", m.planType = "", m.planState = "", 
                x.value = !1;
            };
            return _a({
                handleOpen: () => {
                    x.value = !0, d(!0);
                }
            }), (c, n) => {
                const k = Ra, sa = Fa, ga = Ka, ka = Da, na = ce, va = pe, ba = ie, ra = Ea, oa = Ua, xa = Aa, ca = wa("hasPermi");
                return e(), i(xa, {
                    modelValue: h(x),
                    "onUpdate:modelValue": n[2] || (n[2] = a => Ba(x) ? x.value = a : null),
                    title: "分组",
                    size: "927",
                    "before-close": ha,
                    "append-to-body": !0
                }, {
                    default: s(() => [ !h(g).length && h(ea) ? (e(), i(sa, {
                        key: 0,
                        class: "noData"
                    }, {
                        btn: s(() => [ ia((e(), i(k, {
                            type: "primary",
                            size: "large",
                            class: "btn-group",
                            onClick: n[0] || (n[0] = a => T("add"))
                        }, {
                            default: s(() => [ r("新增分组方案") ]),
                            _: 1
                        })), [ [ ca, [ "teachmanager:teach-class-group-plan:create" ] ] ]) ]),
                        _: 1
                    })) : (e(), o("div", S, [ p(ga, {
                        searchList: h(ya),
                        onHandleSearch: fa,
                        class: "left",
                        keywordsInfo: {
                            key: "planName",
                            label: "分组方案"
                        },
                        borderBox: !0
                    }, null, 8, [ "searchList" ]), ia((e(), i(k, {
                        type: "primary",
                        size: "large",
                        class: "btn-group right",
                        onClick: n[1] || (n[1] = a => T("add"))
                    }, {
                        default: s(() => [ r("新增分组方案") ]),
                        _: 1
                    })), [ [ ca, [ "teachmanager:teach-class-group-plan:create" ] ] ]), w, h(g).length ? (e(), 
                    o("div", z, [ (e(!0), o(ma, null, ua(h(g), a => (e(), o("div", {
                        key: a.id,
                        class: "planItem"
                    }, [ t("div", B, [ a.status == "0" ? (e(), i(ba, {
                        key: 0,
                        style: {
                            "margin-right": "0px"
                        },
                        onCommand: l => ((_, f) => {
                            switch (f) {
                              case "editor":
                                T("editor", _);
                                break;

                              case "delete":
                                la(_);
                            }
                        })(a, l)
                    }, {
                        dropdown: s(() => [ p(va, null, {
                            default: s(() => [ p(na, {
                                command: "editor"
                            }, {
                                default: s(() => [ r("编辑") ]),
                                _: 1
                            }), p(na, {
                                command: "delete",
                                style: {
                                    color: "#E14635"
                                }
                            }, {
                                default: s(() => [ r("删除") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        default: s(() => [ p(k, {
                            type: "primary",
                            text: "",
                            style: {
                                "margin-left": "3px"
                            }
                        }, {
                            default: s(() => [ r("更多"), p(ka, {
                                icon: "ep:arrow-down"
                            }) ]),
                            _: 1
                        }) ]),
                        _: 2
                    }, 1032, [ "onCommand" ])) : y("", !0), a.status == "3" ? (e(), 
                    i(k, {
                        key: 1,
                        text: "",
                        size: "small",
                        style: {
                            color: "#E14635"
                        },
                        onClick: l => la(a)
                    }, {
                        default: s(() => [ r("删除") ]),
                        _: 2
                    }, 1032, [ "onClick" ])) : y("", !0), a.status == "0" ? (e(), 
                    i(k, {
                        key: 2,
                        type: "primary",
                        size: "small",
                        style: {
                            "margin-top": "4px"
                        },
                        onClick: l => {
                            var _;
                            (_ = a).waitStuCount ? C.alert("当前分组方案下存在待分组学生，请检查确认并完成分组！", "提示", {
                                confirmButtonText: "确认"
                            }) : C.confirm("分组完成后不可修改，确定分组完成？", "提示", {
                                confirmButtonText: "确认",
                                cancelButtonText: "取消"
                            }).then(() => {
                                le({
                                    id: _.id,
                                    teachClassId: Y.params.classId
                                }).then(f => {
                                    d(), N({
                                        type: "success",
                                        message: "操作成功"
                                    });
                                });
                            }).catch(() => {});
                        }
                    }, {
                        default: s(() => [ r("分组完成") ]),
                        _: 2
                    }, 1032, [ "onClick" ])) : y("", !0) ]), t("span", R, u(a.name), 1), t("span", {
                        class: za([ "planItemType", "planItemType" + a.type ])
                    }, u(a.type == 1 ? "教师一键分组" : a.type == 2 ? "教师手动分组" : "学生自由组队"), 3), D, t("div", E, [ t("div", L, [ r("学生总数  "), t("span", null, u(a.stuCount), 1) ]), t("div", P, [ r("待组队人数  "), t("span", null, u(a.waitStuCount), 1) ]), t("div", V, [ r("小组数  "), t("span", null, u(a.groupNum), 1) ]) ]), t("div", A, [ a.type == 2 && a.status == "0" ? (e(), 
                    o("div", {
                        key: 0,
                        class: "addOne",
                        onClick: l => ta("add", {
                            planId: a.id
                        })
                    }, U, 8, O)) : y("", !0), (e(!0), o(ma, null, ua(a.groupCardList, l => (e(), 
                    o("div", {
                        class: "groupItem",
                        key: l.id
                    }, [ p(ra, {
                        effect: "dark",
                        content: l.name,
                        placement: "top",
                        enterable: !1
                    }, {
                        default: s(() => [ t("span", j, u(l.name), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]), a.status == "0" ? (e(), o("img", {
                        key: 0,
                        style: {
                            width: "18px",
                            height: "18px",
                            cursor: "pointer"
                        },
                        onClick: _ => ta("editor", {
                            planId: a.id,
                            groupId: l.id
                        }),
                        src: Ha,
                        alt: ""
                    }, null, 8, K)) : y("", !0), a.type != "1" && a.status == "0" ? (e(), 
                    o("img", {
                        key: 1,
                        class: "right",
                        onClick: _ => {
                            return f = l.id, void C.confirm("确定要删除该小组吗？", "提示", {
                                confirmButtonText: "确认",
                                cancelButtonText: "取消"
                            }).then(() => {
                                se({
                                    id: f
                                }).then(pa => {
                                    d(), N({
                                        type: "success",
                                        message: "删除成功"
                                    });
                                });
                            }).catch(() => {});
                            var f;
                        },
                        style: {
                            width: "18px",
                            height: "18px",
                            cursor: "pointer"
                        },
                        src: Ja,
                        alt: ""
                    }, null, 8, M)) : y("", !0), t("div", F, [ t("div", G, [ r("组长： "), a.leaderAvatar ? (e(), 
                    i(oa, {
                        key: 0,
                        class: "userIcon",
                        fit: "cover",
                        size: 20,
                        src: h(Qa)(a.leaderAvatar)
                    }, null, 8, [ "src" ])) : (e(), i(oa, {
                        key: 1,
                        class: "userIcon",
                        fit: "cover",
                        size: 20,
                        src: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                    })), p(ra, {
                        effect: "dark",
                        content: l.leaderName,
                        placement: "top",
                        enterable: !1
                    }, {
                        default: s(() => [ l.leaderName ? (e(), o("span", H, u(l.leaderName), 1)) : y("", !0) ]),
                        _: 2
                    }, 1032, [ "content" ]), l.leaderName ? y("", !0) : (e(), o("span", J, "--")) ]), t("div", q, [ r("成员："), l.mermberNum ? (e(), 
                    o("span", Q, u(l.mermberNum), 1)) : (e(), o("span", W, "--")) ]) ]), t("div", X, [ p(k, {
                        type: "primary",
                        text: "",
                        style: {
                            "font-size": "12px",
                            "padding-bottom": "0"
                        },
                        onClick: _ => ((f, pa, Ca) => {
                            Z.value.openDrawer(f, pa, Ca);
                        })(a.status != "0", a, l)
                    }, {
                        default: s(() => [ r(u(a.status == "0" ? "成员管理" : "成员查看"), 1) ]),
                        _: 2
                    }, 1032, [ "onClick" ]) ]) ]))), 128)) ]) ]))), 128)) ])) : (e(), 
                    i(sa, {
                        key: 1,
                        class: "noData"
                    })) ])), p(Xa, {
                        ref_key: "planManageRef",
                        ref: aa,
                        onTableRefresh: d
                    }, null, 512), p(Za, {
                        ref_key: "memberManagementRef",
                        ref: Z,
                        onTableRefresh: d
                    }, null, 512), p(ae, {
                        ref_key: "addOneGroupDialogRef",
                        ref: $,
                        onTableRefresh: d
                    }, null, 512) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-ee69bfbe" ] ]);
});

export {
    _e as __tla,
    da as default
};