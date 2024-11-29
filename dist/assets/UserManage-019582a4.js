import {
    p as xe,
    r as d,
    e as de,
    o as U,
    C as O,
    l as i,
    k as o,
    v as V,
    a as l,
    t as r,
    m as z,
    B as x,
    z as ue,
    D as re,
    a8 as Ce,
    _ as Ie,
    P as be,
    Z as we,
    J as Ve,
    aU as Ne,
    __tla as Ke
} from "./index-6c08ea4c.js";

import {
    a as Le,
    b as Ue,
    u as Oe,
    __tla as ze
} from "./group-7c00fc2a.js";

import {
    _ as De
} from "./_plugin-vue_export-helper-1b428a4d.js";

let ne, $e = Promise.all([ (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})() ]).then(async () => {
    let D, $, E, P, R, T, j, B, M, Z, q, A, F, G, H;
    D = {
        class: "dialog-cont mb-20px mt-10px"
    }, $ = {
        class: "cont-left cont-tree-box"
    }, E = {
        class: "cont-title"
    }, P = {
        class: "num-box"
    }, R = {
        class: "cont-search"
    }, T = {
        class: "cont-user-tree"
    }, j = {
        class: "cont-center"
    }, B = {
        class: "cont-right cont-tree-box"
    }, M = {
        class: "cont-title"
    }, Z = {
        class: "num-box"
    }, q = {
        class: "cont-search"
    }, A = {
        class: "cont-user-tree"
    }, F = {
        class: "item-info"
    }, G = {
        class: "info-box"
    }, H = {
        class: "icon-box"
    }, ne = De({
        __name: "UserManage",
        emits: [ "success" ],
        setup(Ee, {
            expose: oe,
            emit: ie
        }) {
            const ce = ie, L = xe(), y = d(!1), C = d(!1), J = d("成员管理"), Q = d(""), S = d(""), v = d([]), u = d([]);
            d({});
            const _ = d({
                leftKeywords: "",
                rightKeywords: ""
            }), h = d(), k = d(), W = d({
                children: "children",
                label: "userName",
                isLeaf: (a, e) => !a.isDept,
                class: (a, e) => (a.isDept ? "dept-item" : "user-item") + (a.isLeader ? " is-leader-node" : "") + ` level-${e.level}`
            }), X = de(() => se(v.value)), Y = de(() => se(u.value)), f = d(0), g = d(0), I = d(!1), ee = d(!1), b = d(!1), ae = d(!1), ve = () => {
                var a;
                (a = h.value) == null || a.setCheckedNodes(I.value ? X.value : []), 
                N();
            }, pe = () => {
                var a;
                (a = k.value) == null || a.setCheckedNodes(b.value ? Y.value : []), 
                K();
            }, N = () => {
                var a, e;
                f.value = ((e = (a = h.value) == null ? void 0 : a.getCheckedKeys(!0)) == null ? void 0 : e.length) || 0, 
                ee.value = f.value > 0 && f.value < v.value.length, I.value = v.value.length > 0 && f.value === v.value.length;
            }, K = () => {
                var a, e;
                g.value = ((e = (a = k.value) == null ? void 0 : a.getCheckedKeys(!0)) == null ? void 0 : e.length) || 0, 
                ae.value = g.value > 0 && g.value < u.value.length, b.value = u.value.length > 0 && g.value === u.value.length;
            }, he = () => {
                var a;
                (a = h.value) == null || a.filter(l(_).leftKeywords);
            }, me = () => {
                var a;
                (a = h.value) == null || a.filter(l(_).rightKeywords);
            }, le = (a, e) => !a || e.userName.includes(a) || e.userId.includes(a), fe = () => {
                var t, s, p;
                let a = (t = h.value) == null ? void 0 : t.getCheckedKeys(!0), e = v.value.filter(c => a.indexOf(c.userId) >= 0);
                u.value = u.value.concat(e.map(c => ({
                    ...c,
                    isLeader: 0
                }))), v.value = v.value.filter(c => a.indexOf(c.userId) < 0), f.value = 0, 
                g.value = 0, (s = h.value) == null || s.setCheckedNodes([]), (p = k.value) == null || p.setCheckedNodes([]), 
                N(), K();
            }, ge = () => {
                var t, s, p;
                let a = (t = k.value) == null ? void 0 : t.getCheckedKeys(!0), e = u.value.filter(c => a.indexOf(c.userId) >= 0);
                v.value = v.value.concat(e), u.value = u.value.filter(c => a.indexOf(c.userId) < 0), 
                f.value = 0, g.value = 0, (s = h.value) == null || s.setCheckedNodes([]), 
                (p = k.value) == null || p.setCheckedNodes([]), N(), K();
            }, se = a => {
                let e = [];
                return a.forEach(t => {
                    e.map(s => s.userId).indexOf(t.deptId) < 0 && e.push({
                        userId: t.deptId,
                        number: t.deptId,
                        userName: t.deptName,
                        isDept: !0,
                        children: []
                    }), e.find(s => s.userId === t.deptId).children.push(t);
                }), e;
            };
            oe({
                open: async (a, e, t = "") => {
                    if (J.value = (t ? `\u3010${t}\u3011` : "") + "成员管理", Q.value = a, 
                    S.value = e, y.value = !0, a && e) {
                        C.value = !0;
                        try {
                            const s = await Le(a), p = await Ue(e);
                            v.value = p, u.value = (s == null ? void 0 : s.groupUserList) || [];
                        } finally {
                            C.value = !1;
                        }
                    }
                }
            });
            const ye = async () => {
                var a;
                if (u.value.length !== 0) if ((a = u.value.find(e => e.isLeader === 1)) != null && a.userId) try {
                    C.value = !0, await Oe({
                        groupId: Q.value,
                        projectId: S.value,
                        groupUserList: u.value.map(e => ({
                            userId: e.userId,
                            isLeader: e.isLeader,
                            userName: e.userName,
                            number: e.number
                        }))
                    }), L.success("操作成功"), ce("success"), y.value = !1;
                } finally {
                    C.value = !1;
                } else L.warning("请选择一个用户作为小组组长！"); else L.warning("请至少选择一个用户作为小组成员！");
            };
            return (a, e) => {
                const t = Ce, s = Ie, p = be, c = we, w = Ve, _e = Ne;
                return U(), O(_e, {
                    modelValue: l(y),
                    "onUpdate:modelValue": e[5] || (e[5] = n => z(y) ? y.value = n : null),
                    title: l(J),
                    width: "890"
                }, {
                    footer: i(() => [ o(w, {
                        onClick: e[4] || (e[4] = n => y.value = !1)
                    }, {
                        default: i(() => [ V("取 消") ]),
                        _: 1
                    }), o(w, {
                        disabled: l(C),
                        type: "primary",
                        onClick: ye
                    }, {
                        default: i(() => [ V("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: i(() => [ r("div", D, [ r("div", $, [ r("div", E, [ o(t, {
                        modelValue: l(I),
                        "onUpdate:modelValue": e[0] || (e[0] = n => z(I) ? I.value = n : null),
                        indeterminate: l(ee),
                        onChange: ve
                    }, {
                        default: i(() => [ V(" 未分组 ") ]),
                        _: 1
                    }, 8, [ "modelValue", "indeterminate" ]), r("span", P, "( " + x(l(f)) + " / " + x(l(v).length) + " )", 1) ]), r("div", R, [ o(p, {
                        size: "large",
                        modelValue: l(_).leftKeywords,
                        "onUpdate:modelValue": e[1] || (e[1] = n => l(_).leftKeywords = n),
                        placeholder: "请输入姓名或学号",
                        onInput: he,
                        class: ue([ "left search-keywords" ]),
                        clearable: ""
                    }, {
                        append: i(() => [ o(s, {
                            icon: "ep:search",
                            class: "pointer"
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]), r("div", T, [ o(c, {
                        class: "user-tree",
                        ref_key: "leftTreeRef",
                        ref: h,
                        data: l(X),
                        props: l(W),
                        indent: 14,
                        "default-expand-all": "",
                        "node-key": "userId",
                        "show-checkbox": "",
                        onCheckChange: N,
                        "filter-node-method": le
                    }, {
                        default: i(({
                            node: n,
                            data: m
                        }) => [ r("span", null, x(m.userName + (n.level === 2 ? `\uFF08${m.number}\uFF09` : "")), 1) ]),
                        _: 1
                    }, 8, [ "data", "props" ]) ]) ]), r("div", j, [ o(w, {
                        type: "primary",
                        class: "right-btn !px-10px",
                        onClick: fe
                    }, {
                        default: i(() => [ o(s, {
                            icon: "ep:arrow-right"
                        }) ]),
                        _: 1
                    }), o(w, {
                        type: "",
                        class: "left-btn !px-10px",
                        onClick: ge
                    }, {
                        default: i(() => [ o(s, {
                            icon: "ep:arrow-left"
                        }) ]),
                        _: 1
                    }) ]), r("div", B, [ r("div", M, [ o(t, {
                        modelValue: l(b),
                        "onUpdate:modelValue": e[2] || (e[2] = n => z(b) ? b.value = n : null),
                        indeterminate: l(ae),
                        onChange: pe
                    }, {
                        default: i(() => [ V(" 已分组 ") ]),
                        _: 1
                    }, 8, [ "modelValue", "indeterminate" ]), r("span", Z, "( " + x(l(g)) + " / " + x(l(u).length) + " )", 1) ]), r("div", q, [ o(p, {
                        size: "large",
                        modelValue: l(_).rightKeywords,
                        "onUpdate:modelValue": e[3] || (e[3] = n => l(_).rightKeywords = n),
                        placeholder: "请输入姓名或学号",
                        onInput: me,
                        class: ue([ "left search-keywords" ]),
                        clearable: ""
                    }, {
                        append: i(() => [ o(s, {
                            icon: "ep:search",
                            class: "pointer"
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]), r("div", A, [ o(c, {
                        class: "user-tree",
                        ref_key: "rightTreeRef",
                        ref: k,
                        data: l(Y),
                        props: l(W),
                        indent: 14,
                        "default-expand-all": "",
                        "node-key": "userId",
                        "show-checkbox": "",
                        onCheckChange: K,
                        "filter-node-method": le
                    }, {
                        default: i(({
                            node: n,
                            data: m
                        }) => [ r("div", F, [ r("div", G, x(m.userName + (n.level === 2 ? `\uFF08${m.number}\uFF09` : "")), 1), r("div", H, [ m.isLeader === 1 ? (U(), 
                        O(s, {
                            key: 0,
                            class: "icon-leader",
                            icon: "svg-icon:group-leader",
                            size: 14
                        })) : re("", !0) ]), n.level === 2 && m.isLeader !== 1 ? (U(), 
                        O(w, {
                            key: 0,
                            link: "",
                            type: "primary",
                            class: "btn-box",
                            onClick: Pe => (ke => {
                                u.value = u.value.map(te => ({
                                    ...te,
                                    isLeader: ke.userId === te.userId ? 1 : 0
                                }));
                            })(m)
                        }, {
                            default: i(() => [ V("设为组长") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) : re("", !0) ]) ]),
                        _: 1
                    }, 8, [ "data", "props" ]) ]) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-1899dae4" ] ]);
});

export {
    $e as __tla,
    ne as default
};