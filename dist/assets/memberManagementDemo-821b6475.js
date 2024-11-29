import {
    r as m,
    T as Ue,
    U as $,
    w as be,
    aT as Ke,
    o,
    c as v,
    k as p,
    l as y,
    a as f,
    t as c,
    C as O,
    v as L,
    B as k,
    D as x,
    aP as $e,
    bc as Be,
    F as Re,
    m as De,
    n as ze,
    E as Fe,
    bo as B,
    O as Me,
    a8 as je,
    P as qe,
    Z as Ge,
    J as Qe,
    Q as Ze,
    aU as Ae,
    R as He,
    S as We,
    __tla as Xe
} from "./index-6c08ea4c.js";

import {
    _ as Ye
} from "./leader-70dc2dcd.js";

import {
    _ as el
} from "./_plugin-vue_export-helper-1b428a4d.js";

let ve, ll = Promise.all([ (() => {
    try {
        return Xe;
    } catch {}
})() ]).then(async () => {
    let R, D, z, F, M, j, q, G, Q, Z, A, H, W, X, Y, ee, le, ae, te, de, se, ne, ie, re;
    R = {
        class: "member-allocation"
    }, D = {
        class: "member-transform"
    }, z = {
        class: "transform-content member-left"
    }, F = {
        class: "transform-title"
    }, M = {
        key: 1
    }, j = {
        class: "transform-total"
    }, q = {
        class: "custom-tree-node"
    }, G = {
        class: "left-box"
    }, Q = [ "title" ], Z = {
        key: 0
    }, A = {
        class: "transform-center"
    }, H = (V => (He("data-v-a7fe7af4"), V = V(), We(), V))(() => c("div", {
        style: {
            margin: "5px 0"
        }
    }, null, -1)), W = {
        class: "transform-content member-left"
    }, X = {
        class: "transform-title"
    }, Y = {
        key: 1
    }, ee = {
        class: "transform-total"
    }, le = {
        class: "custom-tree-node"
    }, ae = {
        class: "left-box"
    }, te = [ "title" ], de = {
        key: 0
    }, se = {
        key: 1,
        src: Ye,
        style: {
            width: "14px",
            height: "14px",
            "margin-left": "8px"
        },
        alt: ""
    }, ne = [ "onClick" ], ie = {
        key: 0,
        class: "set-leader"
    }, re = {
        key: 0,
        style: {
            "margin-bottom": "20px",
            "text-align": "center"
        }
    }, ve = el({
        __name: "memberManagementDemo",
        props: {
            isPreview: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "refresh" ],
        setup(V, {
            expose: ge,
            emit: ye
        }) {
            const _ = m(null), w = m(null), C = V, ke = m("成员管理"), E = m(!1), xe = m({}), g = m(""), ce = m(""), Ie = Ue(), _e = ye, J = [], t = $({
                dataList: [],
                selected: [],
                search: "",
                all: !1,
                indeterminate: !1,
                level2Total: 0
            }), a = $({
                dataList: [],
                selected: [],
                all: !1,
                search: "",
                indeterminate: !1,
                level2Total: 0
            }), T = m([]), P = () => {
                const l = [];
                t.dataList.forEach(e => {
                    l.push(e.id), e.children && e.children.forEach(d => {
                        l.push(d.id);
                    });
                }), T.value = l;
            }, ue = m([]), N = () => {
                const l = [];
                let e = 0;
                t.dataList.forEach(d => {
                    d.children && d.children.forEach(n => {
                        e++, t.selected.includes(n.id) && l.push(n.id);
                    });
                }), t.level2Total = e, ue.value = l;
            }, oe = m([]), U = () => {
                const l = [];
                let e = 0;
                a.dataList.forEach(d => {
                    d.children && d.children.forEach(n => {
                        e++, a.selected.includes(n.id) && l.push(n.id);
                    });
                }), a.level2Total = e, oe.value = l;
            }, S = m([]), K = () => {
                const l = [];
                a.dataList.forEach(e => {
                    l.push(e.id), e.children && e.children.forEach(d => l.push(d.id));
                }), S.value = l;
            };
            be(() => t.search, l => {
                _.value.filter(l);
            }), be(() => a.search, l => {
                w.value.filter(l);
            });
            const we = (l, e) => {
                var d;
                return !l || !!e.number && (e.label.includes(l) || ((d = e.number) == null ? void 0 : d.includes(l)));
            }, he = () => {
                t.selected = _.value.getCheckedKeys(), t.all = t.selected.length > 0 && t.selected.length == T.value.length, 
                t.indeterminate = t.selected.length > 0 && t.selected.length < T.value.length, 
                N(), P();
            }, Ce = (l, e) => {
                var d;
                return !l || e.label.includes(l) || ((d = e.number) == null ? void 0 : d.includes(l));
            }, me = () => {
                a.selected = w.value.getCheckedKeys(), a.all = a.selected.length > 0 && a.selected.length == S.value.length, 
                a.indeterminate = a.selected.length > 0 && a.selected.length < S.value.length, 
                U(), K();
            }, pe = (l, e, d, n) => {
                let h = [];
                J.value.forEach(r => {
                    let i = !1, u = [];
                    if (r.children && r.children.forEach(b => {
                        (l.selected.includes(b.id) || d.includes(b.id)) && (i = !0, 
                        u.push(b), g.value == b.id && n && (g.value = ""));
                    }), i) {
                        const b = JSON.parse(JSON.stringify(r));
                        b.children = u, h.push(b);
                    }
                }), e.dataList = h, Ee(l, d);
            }, Ee = (l, e) => {
                let d = [];
                J.value.forEach(n => {
                    let h = !1, r = [];
                    if (n.children && n.children.forEach(i => {
                        l.selected.includes(i.id) || e.includes(i.id) || (h = !0, 
                        r.push(i));
                    }), h) {
                        const i = JSON.parse(JSON.stringify(n));
                        i.children = r, d.push(i);
                    }
                }), l.dataList = d, l.selected = [], ze(() => {
                    me(), he(), _.value.filter(t.search), w.value.filter(a.search);
                });
            }, Le = () => {
                t.all ? _.value.setCheckedKeys(T.value, !1) : _.value.setCheckedKeys([], !1), 
                N(), P();
            }, Ve = () => {
                a.all ? w.value.setCheckedKeys(S.value, !1) : w.value.setCheckedKeys([], !1), 
                U(), K();
            }, fe = () => {
                Fe.confirm(`\u60A8\u786E\u5B9A\u8981\u5173\u95ED${ke.value}\u5417\uFF1F`, {
                    title: "提示",
                    confirmButtonText: "确定",
                    cancelButtonText: "取消"
                }).then(() => {
                    E.value = !1;
                }).catch(() => {});
            }, Te = () => {
                t.dataList = [], t.selected = [], t.search = "", t.all = !1, t.indeterminate = !1, 
                t.level2Total = 0, a.dataList = [], a.selected = [], a.search = "", 
                a.all = !1, a.indeterminate = !1, a.level2Total = 0;
            }, Se = () => {
                if (a.level2Total <= 0) return B.warning("请选择小组成员"), !1;
                if (!g.value) return B.warning("请选择小组组长"), !1;
                let l = [];
                a.dataList.forEach(e => {
                    e.children && e.children.forEach(d => {
                        const n = {
                            arrangementId: Ie.params.arrangementId,
                            groupId: ce.value,
                            userId: d.id,
                            isLeader: d.id == g.value ? 1 : 0
                        };
                        l.push(n);
                    });
                }), setGroupStuMember(l).then(e => {
                    B.success("操作成功"), _e("refresh"), E.value = !1;
                });
            }, Oe = $({
                msg: "操作成功",
                code: 200,
                data: {
                    left: [ {
                        id: "0012000200010001",
                        label: "日语1班",
                        deptId: null,
                        eid: null,
                        number: null,
                        children: [ {
                            id: "1650746253411139585",
                            label: "学生1",
                            deptId: "0012000200010001",
                            eid: null,
                            number: "stu001"
                        }, {
                            id: "1650751592202289153",
                            label: "修改一下学生名字123",
                            deptId: "0012000200010001",
                            eid: null,
                            number: "stu004"
                        } ]
                    }, {
                        id: "0012000100010001",
                        label: "软件1班",
                        deptId: null,
                        eid: null,
                        number: null,
                        children: [ {
                            id: "1650746440682618882",
                            label: "学生02",
                            deptId: "0012000100010001",
                            eid: "fa783c0049e740bea9a8ec2ade5dd02f",
                            number: "stu002"
                        }, {
                            id: "1650746616855969793",
                            label: "学生666",
                            deptId: "0012000100010001",
                            eid: "a7a83cfa43ff41e5819c22442337d58d",
                            number: "stu003"
                        }, {
                            id: "1654289551708180482",
                            label: "学生导入测试001",
                            deptId: "0012000100010001",
                            eid: null,
                            number: "2320001"
                        }, {
                            id: "1654289552094056450",
                            label: "学生导入测试002",
                            deptId: "0012000100010001",
                            eid: null,
                            number: "2320002"
                        }, {
                            id: "1654289552484126721",
                            label: "学生导入测试003",
                            deptId: "0012000100010001",
                            eid: null,
                            number: "2320003"
                        }, {
                            id: "1654289552886779906",
                            label: "学生导入测试004",
                            deptId: "0012000100010001",
                            eid: null,
                            number: "2320004"
                        } ]
                    }, {
                        id: "0012000100010002",
                        label: "软件2班",
                        deptId: null,
                        eid: null,
                        number: null,
                        children: [ {
                            id: "1650751806883545089",
                            label: "小明",
                            deptId: "0012000100010002",
                            eid: "bd8d3a4f7f5e41cdb8b4e0c0df7c472c",
                            number: "230001"
                        }, {
                            id: "1650751899195981826",
                            label: "小红",
                            deptId: "0012000100010002",
                            eid: "4ec1f3d30144402eb3f6816c5f14d3e4",
                            number: "230002"
                        }, {
                            id: "1651396294454345730",
                            label: "小刚",
                            deptId: "0012000100010002",
                            eid: null,
                            number: "230003"
                        }, {
                            id: "1651396403367837698",
                            label: "小雷",
                            deptId: "0012000100010002",
                            eid: "2a0bb74f33694afbb931b318638eabc4",
                            number: "230004"
                        }, {
                            id: "1657988822549446658",
                            label: "学生导入测试005",
                            deptId: "0012000100010002",
                            eid: null,
                            number: "2320005"
                        }, {
                            id: "1657988823040180225",
                            label: "学生导入测试006",
                            deptId: "0012000100010002",
                            eid: null,
                            number: "2320006"
                        }, {
                            id: "1657988823467999233",
                            label: "学生导入测试007",
                            deptId: "0012000100010002",
                            eid: null,
                            number: "2320007"
                        }, {
                            id: "1657988823887429633",
                            label: "学生导入测试008",
                            deptId: "0012000100010002",
                            eid: null,
                            number: "2320008"
                        } ]
                    } ],
                    right: []
                }
            }), Je = () => {
                const l = Oe.data;
                t.dataList = l.left, a.dataList = l.right;
                const e = JSON.parse(JSON.stringify(l.left)), d = JSON.parse(JSON.stringify(l.right));
                let n = [], h = new Set();
                e.forEach(r => {
                    h.add(r.id);
                }), d.forEach(r => {
                    h.add(r.id);
                }), h.forEach(r => {
                    let i = {};
                    e.forEach(u => {
                        u.id == r && (i = u);
                    }), d.forEach(u => {
                        u.id == r && (Object.keys(i).length > 0 ? i.children.push(...u.children) : i = u);
                    }), n.push(i);
                }), J.value = n, N(), P(), U(), K();
            };
            return ge({
                openDrawer: l => {
                    E.value = !0, ce.value = l.groupId, g.value = l.groupLeaderUserId, 
                    Je();
                }
            }), (l, e) => {
                const d = Me, n = je, h = qe, r = Ke("avatarImg"), i = Ge, u = Qe, b = Ze, Pe = Ae;
                return o(), v("div", R, [ p(Pe, {
                    modelValue: f(E),
                    "onUpdate:modelValue": e[6] || (e[6] = s => De(E) ? E.value = s : null),
                    title: "成员管理'",
                    width: "900px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    "before-close": fe,
                    onClose: Te
                }, {
                    default: y(() => [ p(b, {
                        ref: "memberFormRef",
                        model: f(xe),
                        "label-width": "100px",
                        "label-position": "left",
                        style: {
                            "margin-bottom": "30px"
                        }
                    }, {
                        default: y(() => [ p(d, {
                            label: "人员分组",
                            required: "",
                            style: {
                                "font-weight": "700"
                            }
                        }), c("div", D, [ c("div", z, [ c("div", F, [ C.isPreview ? (o(), 
                        v("span", M, "未分组")) : (o(), O(n, {
                            key: 0,
                            modelValue: t.all,
                            "onUpdate:modelValue": e[0] || (e[0] = s => t.all = s),
                            indeterminate: t.indeterminate,
                            onChange: Le
                        }, {
                            default: y(() => [ L("未分组") ]),
                            _: 1
                        }, 8, [ "modelValue", "indeterminate" ])), c("span", j, "(" + k(f(ue).length) + "/" + k(t.level2Total) + ")", 1) ]), p(h, {
                            modelValue: t.search,
                            "onUpdate:modelValue": e[1] || (e[1] = s => t.search = s),
                            clearable: "",
                            placeholder: "请输入姓名或学号",
                            style: {
                                padding: "10px"
                            }
                        }, null, 8, [ "modelValue" ]), p(i, {
                            ref_key: "leftTreeRef",
                            ref: _,
                            data: t.dataList,
                            props: {
                                children: "children",
                                label: "label"
                            },
                            "default-checked-keys": t.selected,
                            "show-checkbox": !C.isPreview,
                            "default-expand-all": "",
                            "node-key": "id",
                            "filter-node-method": we,
                            onCheckChange: he
                        }, {
                            default: y(({
                                node: s,
                                data: I
                            }) => [ c("div", q, [ c("span", G, [ s.level == 2 ? (o(), 
                            O(r, {
                                key: 0,
                                size: 24,
                                name: s.label,
                                eid: I.eid
                            }, null, 8, [ "name", "eid" ])) : x("", !0), c("span", {
                                style: {
                                    "margin-left": "10px",
                                    "max-width": "200px"
                                },
                                class: "overSpan",
                                title: `${s.label}(${I.number})`
                            }, [ L(k(s.label), 1), s.level == 2 ? (o(), v("span", Z, "（" + k(I.number) + "）", 1)) : x("", !0) ], 8, Q) ]) ]) ]),
                            _: 1
                        }, 8, [ "data", "default-checked-keys", "show-checkbox" ]) ]), c("div", A, [ p(u, {
                            onClick: e[2] || (e[2] = s => pe(t, a, f(S), !1)),
                            type: t.selected.length > 0 ? "primary" : "default",
                            disabled: t.selected.length <= 0,
                            icon: f($e)
                        }, null, 8, [ "type", "disabled", "icon" ]), H, p(u, {
                            onClick: e[3] || (e[3] = s => pe(a, t, f(T), !0)),
                            type: a.selected.length > 0 ? "primary" : "default",
                            disabled: a.selected.length <= 0,
                            icon: f(Be)
                        }, null, 8, [ "type", "disabled", "icon" ]) ]), c("div", W, [ c("div", X, [ C.isPreview ? (o(), 
                        v("span", Y, "已分组")) : (o(), O(n, {
                            key: 0,
                            modelValue: a.all,
                            "onUpdate:modelValue": e[4] || (e[4] = s => a.all = s),
                            indeterminate: a.indeterminate,
                            onChange: Ve
                        }, {
                            default: y(() => [ L("已分组") ]),
                            _: 1
                        }, 8, [ "modelValue", "indeterminate" ])), c("span", ee, "(" + k(f(oe).length) + "/" + k(a.level2Total) + ")", 1) ]), p(h, {
                            modelValue: a.search,
                            "onUpdate:modelValue": e[5] || (e[5] = s => a.search = s),
                            clearable: "",
                            placeholder: "请输入姓名或学号",
                            style: {
                                padding: "10px"
                            }
                        }, null, 8, [ "modelValue" ]), p(i, {
                            ref_key: "rightTreeRef",
                            ref: w,
                            data: a.dataList,
                            props: {
                                children: "children",
                                label: "label"
                            },
                            "default-checked-keys": a.selected,
                            "show-checkbox": !C.isPreview,
                            "default-expand-all": "",
                            "node-key": "id",
                            "filter-node-method": Ce,
                            onCheckChange: me
                        }, {
                            default: y(({
                                node: s,
                                data: I
                            }) => [ c("div", le, [ c("span", ae, [ s.level == 2 ? (o(), 
                            O(r, {
                                key: 0,
                                size: 24,
                                name: s.label,
                                eid: I.eid
                            }, null, 8, [ "name", "eid" ])) : x("", !0), c("span", {
                                style: {
                                    "margin-left": "10px",
                                    "max-width": "200px"
                                },
                                class: "overSpan",
                                title: `${s.label}(${I.number})`
                            }, [ L(k(s.label), 1), s.level == 2 ? (o(), v("span", de, "（" + k(I.number) + "）", 1)) : x("", !0) ], 8, te), s.data.id == f(g) ? (o(), 
                            v("img", se)) : x("", !0) ]), c("span", {
                                class: "right-box",
                                onClick: al => (Ne => {
                                    g.value = Ne.id;
                                })(s.data)
                            }, [ C.isPreview ? x("", !0) : (o(), v(Re, {
                                key: 0
                            }, [ s.level == 2 && s.data.id != f(g) ? (o(), v("span", ie, "设为组长")) : x("", !0) ], 64)) ], 8, ne) ]) ]),
                            _: 1
                        }, 8, [ "data", "default-checked-keys", "show-checkbox" ]) ]) ]) ]),
                        _: 1
                    }, 8, [ "model" ]), C.isPreview ? x("", !0) : (o(), v("div", re, [ p(u, {
                        onClick: fe
                    }, {
                        default: y(() => [ L("取消") ]),
                        _: 1
                    }), p(u, {
                        type: "primary",
                        onClick: Se
                    }, {
                        default: y(() => [ L("确定") ]),
                        _: 1
                    }) ])) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a7fe7af4" ] ]);
});

export {
    ll as __tla,
    ve as default
};