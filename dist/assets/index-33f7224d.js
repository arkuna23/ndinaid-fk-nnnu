import {
    r as u,
    e as b,
    w as T,
    a,
    f as na,
    o as r,
    C as M,
    l as c,
    k as i,
    v,
    t as s,
    aI as ca,
    m as _,
    z as N,
    c as g,
    F as Y,
    y as $,
    B as V,
    D as ra,
    A as Ye,
    H as va,
    n as pa,
    ak as ma,
    _ as fa,
    P as ha,
    ab as _a,
    ac as xa,
    Z as ya,
    K as ba,
    a8 as ga,
    br as Va,
    J as ka,
    aU as wa,
    R as Ca,
    S as Ua,
    __tla as Ia
} from "./index-6c08ea4c.js";

import {
    E as za,
    __tla as Oa
} from "./el-infinite-scroll-9cd61b58.js";

import {
    _ as Sa,
    __tla as Ea
} from "./index-13c88727.js";

import {
    c as Ta,
    D as La,
    __tla as Pa
} from "./dict-c5825220.js";

import {
    d as Ra,
    h as Da
} from "./tree-05ea8e09.js";

import {
    a as Ba,
    g as Ja,
    __tla as Ma
} from "./index-7c75bd27.js";

import {
    g as Na,
    __tla as Ya
} from "./index-d1db0401.js";

import $a, {
    __tla as Aa
} from "./DeptTag-1be092ce.js";

import {
    _ as Ha
} from "./_plugin-vue_export-helper-1b428a4d.js";

let $e, ja = Promise.all([ (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return Ea;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})() ]).then(async () => {
    let A, X, ee, ae, le, te, se, ue, ie, de, oe, ne, ce, re, ve, pe, me, fe, he, _e, xe, ye, be, ge, Ve, ke, we;
    A = k => (Ca("data-v-45655f40"), k = k(), Ua(), k), X = {
        class: "px-10px"
    }, ee = {
        class: "cont-box"
    }, ae = {
        class: "left-box"
    }, le = {
        class: "identitys-choose-box w-100%"
    }, te = A(() => s("div", {
        class: "identitys-choose-header"
    }, "选择组织机构", -1)), se = {
        class: "switchs"
    }, ue = A(() => s("span", {
        class: "ml-20px mr-10px"
    }, "仅查看启用组织", -1)), ie = {
        class: "env-types-group px-15px py-16px"
    }, de = {
        class: "pb-10px"
    }, oe = {
        class: "mid-box"
    }, ne = {
        class: "identitys-choose-box w-100%"
    }, ce = {
        class: "identitys-choose-header"
    }, re = {
        class: "neu-color-blue"
    }, ve = {
        class: "switchs"
    }, pe = {
        class: "relative ml-20px pr-60px"
    }, me = {
        class: "env-types-group px-15px py-16px"
    }, fe = {
        class: "pb-10px"
    }, he = {
        class: "checkgroup-box px-10px"
    }, _e = {
        class: "right-box"
    }, xe = {
        class: "identitys-choose-box w-100%"
    }, ye = {
        class: "identitys-choose-header"
    }, be = {
        class: "neu-color-blue"
    }, ge = {
        class: "switchs"
    }, Ve = {
        class: "env-types-group py-16px"
    }, ke = {
        class: "pb-10px"
    }, we = {
        class: "choose-user-box"
    }, $e = Ha({
        __name: "index",
        props: {
            modelValue: {
                default: !1,
                type: Boolean
            },
            defaultUserList: {
                type: Array,
                default: () => []
            },
            defaultUserParams: {
                type: Object,
                default: () => ({
                    keywords: "",
                    identities: "",
                    inRoleIds: "",
                    notInRoleIds: "",
                    inStatus: "",
                    notInUserIds: []
                })
            },
            dialogTitle: {
                type: String,
                default: "选择用户"
            },
            alertTitle: {
                type: String,
                default: "系统自动过滤已添加为当前角色及账号状态为停用的用户，如一位用户同时被赋予多种角色，系统将自动归拢其功能菜单权限（全量合并）和管理数据权限（同级合并，不同级）"
            }
        },
        emits: [ "update:modelValue", "submitIds" ],
        setup(k, {
            expose: Ae,
            emit: He
        }) {
            const f = k, Ce = u(!1), Ue = He, L = b({
                get: () => f.modelValue,
                set: t => {
                    Ue("update:modelValue", t);
                }
            }), d = u([]), z = u(!1), P = u(30), R = u(!1), Ie = u(!1), w = u(1), H = u([]), C = u(""), U = u("");
            function ze(t, e) {
                return e ? t.filter(o => {
                    var m, y;
                    return ((m = o.nickname) == null ? void 0 : m.indexOf(e)) >= 0 || ((y = o.number) == null ? void 0 : y.indexOf(e)) >= 0;
                }) : t;
            }
            T(() => C.value, t => {
                w.value = 1, x();
            }), T(() => U.value, t => {
                w.value = 1, x();
            });
            const p = b(() => {
                return t = ze(a(H), a(C)), (e = a(U)) ? t.filter(o => {
                    var m;
                    return ((m = o.identities) == null ? void 0 : m.indexOf(e)) >= 0;
                }) : t;
                var t, e;
            }), je = b(() => a(p).slice(0, a(w) * a(P)));
            function Fe() {
                a(w) * a(P) > a(p).length || (w.value += 1);
            }
            function j() {
                d.value = [], n.value = [], x();
            }
            function Ke(t) {
                t ? p.value.forEach(e => {
                    d.value.indexOf(e.id) < 0 && (d.value.push(e.id), n.value.push(e));
                }) : p.value.forEach(e => {
                    d.value.indexOf(e.id) >= 0 && (d.value = d.value.filter(o => e.id !== o), 
                    n.value = n.value.filter(o => e.id !== o.id));
                }), x();
            }
            function x() {
                let t = 0;
                p.value.forEach(e => {
                    d.value.indexOf(e.id) >= 0 && (t += 1);
                }), z.value = t === p.value.length && p.value.length > 0, Ie.value = t !== 0 && !z.value;
            }
            const D = u(1), n = u([]), O = u(""), Oe = b(() => ze(a(n), a(O))), Ze = b(() => a(Oe).slice(0, a(D) * a(P)));
            function qe() {
                a(D) * a(P) > a(Oe).length || (D.value += 1);
            }
            const B = u(!0), F = u([]), Se = u([]);
            u(!0);
            const Ee = u(), S = u([]);
            u(!1);
            const I = u(""), E = u(""), Ge = u(!1);
            T(() => I.value, t => {
                Te();
            });
            const Te = () => {
                var t;
                (t = Ee.value) == null || t.filter({
                    value: I.value,
                    tagCode: E.value
                });
            }, Qe = ({
                value: t,
                tagCode: e
            }, o) => (!e || e === o.tagCode) && (!t || o.name.includes(t) || (o.code || "").includes(t)), K = u(""), We = (t, e) => {
                K.value = t.id, Pe(t.id);
            }, Le = async () => {
                let t = Da(await Ba({
                    status: B.value ? "0" : ""
                }));
                S.value = [], t.forEach(e => {
                    S.value.push(e.id);
                    let o = e.children || [];
                    S.value = S.value.concat(o.map(m => m.id));
                }), Se.value = t;
            }, Pe = async t => {
                const e = t || K.value || "";
                w.value = 1, D.value = 1;
                const o = await Na({
                    ...f.defaultUserParams,
                    containsSubDept: R.value,
                    deptId: e
                });
                H.value = o, x();
            };
            function Re() {
                Z(), pa(() => {
                    L.value = !1;
                });
            }
            function Z() {
                j(), d.value = [], I.value = "", E.value = "", C.value = "", U.value = "", 
                O.value = "", n.value = [], H.value = [];
            }
            const De = async () => {
                Z(), await Le(), F.value = await Ja();
            }, Xe = () => {
                Ue("submitIds", a(d), a(n), t => {
                    Ce.value = !1, t && Z();
                });
            };
            T(() => f.modelValue, t => {
                t && (j(), d.value = f.defaultUserList.map(e => e.id), n.value = [ ...f.defaultUserList ]), 
                K.value = "", x();
            }), T(() => f.defaultUserList, t => {
                t.length ? (d.value = f.defaultUserList.map(e => e.id), n.value = [ ...f.defaultUserList ]) : (d.value = [], 
                n.value = []);
            });
            const ea = b(() => p.value.filter(t => d.value.includes(t.id)).length), aa = b(() => p.value.length ? p.value.length - ea.value : 0), la = b(() => f.defaultUserParams.identities === "5");
            return Ae({
                initCom: De
            }), na(() => {
                De();
            }), (t, e) => {
                const o = Sa, m = ma, y = fa, q = ha, Be = _a, Je = xa, ta = ya, sa = ba, Me = ga, ua = Va, G = ka, ia = wa, Ne = za;
                return r(), M(ia, {
                    modelValue: a(L),
                    "onUpdate:modelValue": e[9] || (e[9] = l => _(L) ? L.value = l : null),
                    title: k.dialogTitle,
                    width: "1100",
                    onClose: Re
                }, {
                    footer: c(() => [ i(G, {
                        onClick: Re
                    }, {
                        default: c(() => [ v("返 回") ]),
                        _: 1
                    }), i(G, {
                        disabled: a(Ce),
                        type: "primary",
                        onClick: Xe
                    }, {
                        default: c(() => [ v("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: c(() => [ s("div", X, [ i(o, {
                        title: k.alertTitle
                    }, null, 8, [ "title" ]), ca(t.$slots, "append", {}, void 0, !0), s("div", ee, [ s("div", ae, [ s("div", le, [ te, s("div", se, [ ue, i(m, {
                        size: "small",
                        "active-text": "是",
                        "inactive-text": "否",
                        modelValue: a(B),
                        "onUpdate:modelValue": e[0] || (e[0] = l => _(B) ? B.value = l : null),
                        "inline-prompt": "",
                        onChange: Le
                    }, null, 8, [ "modelValue" ]) ]), s("div", ie, [ s("div", de, [ i(q, {
                        size: "default",
                        modelValue: a(I),
                        "onUpdate:modelValue": e[1] || (e[1] = l => _(I) ? I.value = l : null),
                        placeholder: "请输入组织名称/代码",
                        class: N([ "search-keywords !w-250px" ]),
                        clearable: ""
                    }, {
                        append: c(() => [ i(y, {
                            icon: "ep:search",
                            class: "pointer"
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), i(Je, {
                        size: "default",
                        multiple: !1,
                        onChange: Te,
                        modelValue: a(E),
                        "onUpdate:modelValue": e[2] || (e[2] = l => _(E) ? E.value = l : null),
                        placeholder: "组织类别",
                        clearable: "",
                        class: "search-item ml-10px !w-96px"
                    }, {
                        default: c(() => [ (r(!0), g(Y, null, $(a(F), l => (r(), 
                        M(Be, {
                            key: l.id,
                            label: l.name,
                            value: l.code
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]), i(ta, {
                        ref_key: "treeRef",
                        ref: Ee,
                        "check-strictly": !a(Ge),
                        data: a(Se),
                        props: a(Ra),
                        "empty-text": "暂无数据",
                        "node-key": "id",
                        onNodeClick: We,
                        "default-expanded-keys": a(S),
                        "filter-node-method": Qe,
                        class: "dept-tree-select"
                    }, {
                        default: c(({
                            data: l
                        }) => [ s("div", {
                            class: N([ "tree-item", l.status === 0 ? "" : "is-disabled" ])
                        }, [ v(V(l.name) + V(l.code ? `\uFF08${l.code}\uFF09` : "") + " ", 1), i($a, {
                            tagCode: l.tagCode,
                            codeList: a(F),
                            class: "tag-box"
                        }, null, 8, [ "tagCode", "codeList" ]) ], 2) ]),
                        _: 1
                    }, 8, [ "check-strictly", "data", "props", "default-expanded-keys" ]) ]) ]) ]), s("div", oe, [ s("div", ne, [ s("div", ce, [ v("待选择 "), s("span", re, V(a(aa)), 1), v(" 人") ]), s("div", ve, [ s("div", pe, [ v("仅显示选中组织下人员 "), i(sa, {
                        class: "box-item",
                        effect: "dark",
                        content: "不包含子组织下人员",
                        placement: "top"
                    }, {
                        default: c(() => [ i(y, {
                            icon: "ep:info-filled",
                            size: 14,
                            class: "info-icon ml-4px"
                        }) ]),
                        _: 1
                    }), i(m, {
                        class: "switch-box",
                        size: "small",
                        "active-text": "是",
                        "inactive-text": "否",
                        "active-value": !1,
                        "inactive-value": !0,
                        modelValue: a(R),
                        "onUpdate:modelValue": e[3] || (e[3] = l => _(R) ? R.value = l : null),
                        "inline-prompt": "",
                        onChange: e[4] || (e[4] = l => Pe())
                    }, null, 8, [ "modelValue" ]) ]) ]), s("div", me, [ s("div", fe, [ i(q, {
                        size: "default",
                        modelValue: a(C),
                        "onUpdate:modelValue": e[5] || (e[5] = l => _(C) ? C.value = l : null),
                        placeholder: "请输入学号/工号/姓名",
                        class: N([ "search-keywords !w-203px" ]),
                        clearable: ""
                    }, {
                        append: c(() => [ i(y, {
                            icon: "ep:search",
                            class: "pointer"
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), a(la) ? (r(), M(Je, {
                        key: 0,
                        size: "default",
                        multiple: !1,
                        modelValue: a(U),
                        "onUpdate:modelValue": e[6] || (e[6] = l => _(U) ? U.value = l : null),
                        placeholder: "选择身份",
                        clearable: "",
                        class: "search-item ml-10px !w-96px"
                    }, {
                        default: c(() => [ (r(!0), g(Y, null, $(a(Ta)(a(La).SYSTEM_PERMISSION_INDETITY).filter(l => l.value !== "1"), l => (r(), 
                        M(Be, {
                            key: l.value,
                            label: l.label,
                            value: l.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ])) : ra("", !0) ]), Ye((r(), g("div", he, [ s("div", null, [ i(Me, {
                        modelValue: a(z),
                        "onUpdate:modelValue": e[7] || (e[7] = l => _(z) ? z.value = l : null),
                        indeterminate: a(Ie),
                        onChange: Ke
                    }, {
                        default: c(() => [ v(" 全选 ") ]),
                        _: 1
                    }, 8, [ "modelValue", "indeterminate" ]) ]), i(ua, {
                        "model-value": a(d),
                        onChange: x
                    }, {
                        default: c(() => [ (r(!0), g(Y, null, $(a(je), (l, Q) => (r(), 
                        g("div", {
                            key: "item" + Q
                        }, [ i(Me, {
                            value: l.id,
                            onClick: va(da => function(J, oa) {
                                let h = {
                                    ...J
                                };
                                a(d).indexOf(h.id) >= 0 ? (d.value = d.value.filter(W => W !== h.id), 
                                n.value = n.value.filter(W => W.id !== h.id)) : (d.value.push(h.id), 
                                n.value.push(h));
                            }(l), [ "stop" ])
                        }, {
                            default: c(() => [ v(V(l.nickname) + "（" + V(l.number) + "） ", 1) ]),
                            _: 2
                        }, 1032, [ "value", "onClick" ]) ]))), 128)) ]),
                        _: 1
                    }, 8, [ "model-value" ]) ])), [ [ Ne, Fe ] ]) ]) ]) ]), s("div", _e, [ s("div", xe, [ s("div", ye, [ v("已选择 "), s("span", be, V(a(n).length), 1), v(" 人") ]), s("div", ge, [ i(G, {
                        plain: "",
                        type: "danger",
                        size: "small",
                        onClick: j
                    }, {
                        default: c(() => [ v(" 全部移除 ") ]),
                        _: 1
                    }) ]), s("div", Ve, [ s("div", ke, [ i(q, {
                        size: "default",
                        modelValue: a(O),
                        "onUpdate:modelValue": e[8] || (e[8] = l => _(O) ? O.value = l : null),
                        placeholder: "请输入学号/工号/姓名",
                        class: N([ "search-keywords !w-198px" ]),
                        clearable: ""
                    }, {
                        append: c(() => [ i(y, {
                            icon: "ep:search",
                            class: "pointer"
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]), Ye((r(), g("div", we, [ (r(!0), 
                    g(Y, null, $(a(Ze), (l, Q) => (r(), g("div", {
                        key: "item" + Q,
                        class: "choose-user-item relative pl-10px pr-24px"
                    }, [ v(V(l.nickname) + "（" + V(l.number) + "） ", 1), i(y, {
                        icon: "ep:circle-close",
                        class: "close-btn",
                        size: 14,
                        onClick: da => function(J, oa) {
                            d.value = d.value.filter(h => h !== J.id), n.value = n.value.filter(h => h.id !== J.id), 
                            x();
                        }(l)
                    }, null, 8, [ "onClick" ]) ]))), 128)) ])), [ [ Ne, qe ] ]) ]) ]) ]) ]) ]) ]),
                    _: 3
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-45655f40" ] ]);
});

export {
    $e as _,
    ja as __tla
};