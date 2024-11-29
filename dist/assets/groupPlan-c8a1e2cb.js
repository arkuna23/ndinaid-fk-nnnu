import {
    u as Ia,
    T as Ta,
    r as g,
    U as Na,
    e as Sa,
    j as wa,
    o as e,
    C as m,
    l as r,
    a as y,
    A as pa,
    v as c,
    c as o,
    k as p,
    F as ia,
    y as ma,
    t,
    D as f,
    B as u,
    z as za,
    m as Ba,
    E as C,
    bo as S,
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
    _ as Ha,
    __tla as Ma
} from "./index-1024512a.js";

import {
    _ as Fa,
    __tla as Ga
} from "./index-c834085f.js";

import {
    _ as Ja,
    a as Ka,
    b as qa
} from "./deleteIcon2-388bb348.js";

import {
    a as Qa,
    __tla as Wa
} from "./file-e038b35d.js";

import Xa, {
    __tla as Ya
} from "./planManage-f219d891.js";

import Za, {
    __tla as $a
} from "./memberManagement-d6bbbe23.js";

import ae, {
    __tla as ee
} from "./addOneGroupDialog-bb871a2b.js";

import {
    a as te,
    e as le,
    d as se,
    p as re,
    __tla as ne
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

import "./planStudent-ede44d3c.js";

let ua, _e = Promise.all([ (() => {
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
        return ne;
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
    let v, w, z, B, R, D, E, L, P, V, A, O, U, j, H, M, F, G, J, K, q, Q, W, X, Y;
    v = I => (La("data-v-ab63ac1b"), I = I(), Pa(), I), w = {
        key: 1
    }, z = v(() => t("div", {
        style: {
            clear: "both"
        }
    }, null, -1)), B = {
        key: 0,
        style: {
            height: "calc(100vh - 200px)",
            "margin-top": "20px",
            "overflow-y": "scroll"
        }
    }, R = {
        class: "right"
    }, D = {
        class: "planItemName"
    }, E = v(() => t("br", null, null, -1)), L = {
        class: "planStatistics"
    }, P = {
        class: "planStatistics1"
    }, V = {
        class: "planStatistics2"
    }, A = {
        class: "planStatistics3"
    }, O = {
        class: "groupList"
    }, U = [ "onClick" ], j = [ v(() => t("img", {
        class: "planIcon",
        src: qa,
        alt: ""
    }, null, -1)), v(() => t("span", {
        style: {
            "font-size": "14px",
            color: "rgba(61, 61, 61, 0.7)"
        }
    }, "新增小组", -1)) ], H = {
        class: "groupItemName ellipsis"
    }, M = [ "onClick" ], F = [ "onClick" ], G = {
        style: {
            "font-size": "12px",
            color: "rgba(61, 61, 61, 0.4)",
            "margin-top": "8px"
        }
    }, J = {
        style: {
            display: "inline-block"
        }
    }, K = {
        key: 0,
        class: "ellipsis",
        style: {
            color: "#666",
            display: "inline-block",
            "max-width": "120px"
        }
    }, q = {
        key: 2
    }, Q = {
        style: {
            "padding-top": "6px"
        },
        class: "right"
    }, W = {
        key: 0,
        style: {
            color: "#666"
        }
    }, X = {
        key: 1
    }, Y = {
        style: {
            "text-align": "center",
            "margin-top": "10px"
        }
    }, ua = oe({
        __name: "groupPlan",
        setup(I, {
            expose: da
        }) {
            Ia();
            const Z = Ta(), $ = g(), aa = g(), ea = g(), k = g(!1), ta = g(!1), h = g([]), i = Na({
                planName: "",
                planType: "",
                planState: ""
            }), _a = Sa(() => [ {
                label: "分组方式",
                key: "planType",
                type: "list",
                options: [ {
                    value: 1,
                    label: "教师一键分组"
                }, {
                    value: 2,
                    label: "教师手动分组"
                }, {
                    value: 3,
                    label: "学生自由组队"
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
            } ]), ya = n => {
                i.planName = n.planName, i.planType = n.planType, i.planState = n.planState, 
                d();
            }, d = n => {
                ta.value = n, te({
                    pageNo: 1,
                    pageSize: 100,
                    teachClassId: Z.params.classId,
                    name: i.planName,
                    type: i.planType,
                    status: i.planState
                }).then(s => {
                    h.value = s.list;
                });
            }, T = (n, s) => {
                h.value.length < 5 ? ea.value.open(n, s) : C.alert("每个教学班级最多可创建5个分组方案！", "提示", {
                    confirmButtonText: "确认"
                });
            }, la = (n, s) => {
                aa.value.open(n, s);
            }, fa = (n, s) => {
                switch (s) {
                  case "editor":
                    T("editor", n);
                    break;

                  case "delete":
                    (_ => {
                        C.confirm("确定要删除该分组方案吗？", "提示", {
                            confirmButtonText: "确认",
                            cancelButtonText: "取消"
                        }).then(() => {
                            re({
                                id: _.id
                            }).then(N => {
                                d(), S({
                                    type: "success",
                                    message: "删除成功"
                                });
                            });
                        }).catch(() => {});
                    })(n);
                }
            }, ha = async () => {
                h.value = [], i.planName = "", i.planType = "", i.planState = "", 
                k.value = !1;
            };
            return da({
                handleOpen: () => {
                    k.value = !0, d(!0);
                }
            }), (n, s) => {
                const _ = Ra, N = Fa, ga = Ha, va = Da, sa = ce, ka = pe, ba = ie, ra = Ea, na = Ua, xa = Aa, oa = wa("hasPermi");
                return e(), m(xa, {
                    modelValue: y(k),
                    "onUpdate:modelValue": s[2] || (s[2] = a => Ba(k) ? k.value = a : null),
                    title: "分组",
                    size: "927",
                    "before-close": ha,
                    "append-to-body": !0
                }, {
                    default: r(() => [ !y(h).length && y(ta) ? (e(), m(N, {
                        key: 0,
                        class: "noData"
                    }, {
                        btn: r(() => [ pa((e(), m(_, {
                            type: "primary",
                            size: "large",
                            class: "btn-group",
                            onClick: s[0] || (s[0] = a => T("add"))
                        }, {
                            default: r(() => [ c("新增分组方案") ]),
                            _: 1
                        })), [ [ oa, [ "teachmanager:teach-class-group-plan:create" ] ] ]) ]),
                        _: 1
                    })) : (e(), o("div", w, [ p(ga, {
                        searchList: y(_a),
                        onHandleSearch: ya,
                        class: "left",
                        keywordsInfo: {
                            key: "planName",
                            label: "分组方案"
                        },
                        borderBox: !0
                    }, null, 8, [ "searchList" ]), pa((e(), m(_, {
                        type: "primary",
                        size: "large",
                        class: "btn-group right",
                        onClick: s[1] || (s[1] = a => T("add"))
                    }, {
                        default: r(() => [ c("新增分组方案") ]),
                        _: 1
                    })), [ [ oa, [ "teachmanager:teach-class-group-plan:create" ] ] ]), z, y(h).length ? (e(), 
                    o("div", B, [ (e(!0), o(ia, null, ma(y(h), a => (e(), o("div", {
                        key: a.id,
                        class: "planItem"
                    }, [ t("div", R, [ a.status == "0" ? (e(), m(ba, {
                        key: 0,
                        style: {
                            "margin-right": "0px"
                        },
                        onCommand: l => fa(a, l)
                    }, {
                        dropdown: r(() => [ p(ka, null, {
                            default: r(() => [ p(sa, {
                                command: "editor"
                            }, {
                                default: r(() => [ c("编辑") ]),
                                _: 1
                            }), p(sa, {
                                command: "delete",
                                style: {
                                    color: "#E14635"
                                }
                            }, {
                                default: r(() => [ c("删除") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        default: r(() => [ p(_, {
                            type: "primary",
                            text: "",
                            style: {
                                "margin-left": "3px"
                            }
                        }, {
                            default: r(() => [ c("更多"), p(va, {
                                icon: "ep:arrow-down"
                            }) ]),
                            _: 1
                        }) ]),
                        _: 2
                    }, 1032, [ "onCommand" ])) : f("", !0), a.status == "0" ? (e(), 
                    m(_, {
                        key: 1,
                        type: "primary",
                        size: "small",
                        style: {
                            "margin-top": "4px"
                        },
                        onClick: l => {
                            var b;
                            (b = a).waitStuCount ? C.alert("当前分组方案下存在待分组学生，请检查确认并完成分组！", "提示", {
                                confirmButtonText: "确认"
                            }) : C.confirm("分组完成后不可修改，确定分组完成？", "提示", {
                                confirmButtonText: "确认",
                                cancelButtonText: "取消"
                            }).then(() => {
                                le({
                                    id: b.id,
                                    teachClassId: Z.params.classId
                                }).then(x => {
                                    d(), S({
                                        type: "success",
                                        message: "操作成功"
                                    });
                                });
                            }).catch(() => {});
                        }
                    }, {
                        default: r(() => [ c("分组完成") ]),
                        _: 2
                    }, 1032, [ "onClick" ])) : f("", !0) ]), t("span", D, u(a.name), 1), t("span", {
                        class: za([ "planItemType", "planItemType" + a.type ])
                    }, u(a.type == 1 ? "教师一键分组" : a.type == 2 ? "教师手动分组" : "学生自由组队"), 3), E, t("div", L, [ t("div", P, [ c("学生总数  "), t("span", null, u(a.stuCount), 1) ]), t("div", V, [ c("待组队人数  "), t("span", null, u(a.waitStuCount), 1) ]), t("div", A, [ c("小组数  "), t("span", null, u(a.groupNum), 1) ]) ]), t("div", O, [ a.type == 2 && a.status == "0" ? (e(), 
                    o("div", {
                        key: 0,
                        class: "addOne",
                        onClick: l => la("add", {
                            planId: a.id
                        })
                    }, j, 8, U)) : f("", !0), (e(!0), o(ia, null, ma(a.groupCardList, l => (e(), 
                    o("div", {
                        class: "groupItem",
                        key: l.id
                    }, [ p(ra, {
                        effect: "dark",
                        content: l.name,
                        placement: "top",
                        enterable: !1
                    }, {
                        default: r(() => [ t("span", H, u(l.name), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]), a.status == "0" ? (e(), o("img", {
                        key: 0,
                        style: {
                            width: "18px",
                            height: "18px",
                            cursor: "pointer"
                        },
                        onClick: b => la("editor", {
                            planId: a.id,
                            groupId: l.id
                        }),
                        src: Ja,
                        alt: ""
                    }, null, 8, M)) : f("", !0), a.type != "1" && a.status == "0" ? (e(), 
                    o("img", {
                        key: 1,
                        class: "right",
                        onClick: b => {
                            return x = l.id, void C.confirm("确定要删除该小组吗？", "提示", {
                                confirmButtonText: "确认",
                                cancelButtonText: "取消"
                            }).then(() => {
                                se({
                                    id: x
                                }).then(ca => {
                                    d(), S({
                                        type: "success",
                                        message: "删除成功"
                                    });
                                });
                            }).catch(() => {});
                            var x;
                        },
                        style: {
                            width: "18px",
                            height: "18px",
                            cursor: "pointer"
                        },
                        src: Ka,
                        alt: ""
                    }, null, 8, F)) : f("", !0), t("div", G, [ t("div", J, [ c("组长： "), a.leaderAvatar ? (e(), 
                    m(na, {
                        key: 0,
                        class: "userIcon",
                        fit: "cover",
                        size: 20,
                        src: y(Qa)(a.leaderAvatar)
                    }, null, 8, [ "src" ])) : (e(), m(na, {
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
                        default: r(() => [ l.leaderName ? (e(), o("span", K, u(l.leaderName), 1)) : f("", !0) ]),
                        _: 2
                    }, 1032, [ "content" ]), l.leaderName ? f("", !0) : (e(), o("span", q, "--")) ]), t("div", Q, [ c("成员："), l.mermberNum ? (e(), 
                    o("span", W, u(l.mermberNum), 1)) : (e(), o("span", X, "--")) ]) ]), t("div", Y, [ p(_, {
                        type: "primary",
                        text: "",
                        style: {
                            "font-size": "12px",
                            "padding-bottom": "0"
                        },
                        onClick: b => ((x, ca, Ca) => {
                            $.value.openDrawer(x, ca, Ca);
                        })(a.status != "0", a, l)
                    }, {
                        default: r(() => [ c(u(a.status == "0" ? "成员管理" : "成员查看"), 1) ]),
                        _: 2
                    }, 1032, [ "onClick" ]) ]) ]))), 128)) ]) ]))), 128)) ])) : (e(), 
                    m(N, {
                        key: 1,
                        class: "noData"
                    })) ])), p(Xa, {
                        ref_key: "planManageRef",
                        ref: ea,
                        onTableRefresh: d
                    }, null, 512), p(Za, {
                        ref_key: "memberManagementRef",
                        ref: $,
                        onTableRefresh: d
                    }, null, 512), p(ae, {
                        ref_key: "addOneGroupDialogRef",
                        ref: aa,
                        onTableRefresh: d
                    }, null, 512) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-ab63ac1b" ] ]);
});

export {
    _e as __tla,
    ua as default
};