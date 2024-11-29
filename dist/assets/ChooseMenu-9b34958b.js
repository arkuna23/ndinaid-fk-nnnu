import {
    e as I,
    r as o,
    w as y,
    f as X,
    o as h,
    c as C,
    A as $,
    G as ee,
    a as t,
    t as i,
    k as c,
    l as E,
    F as K,
    y as ae,
    C as le,
    m as f,
    z as te,
    D as se,
    n as b,
    M as ne,
    s as de,
    ak as oe,
    _ as ue,
    P as ie,
    Z as ce,
    R as re,
    S as pe,
    __tla as me
} from "./index-6c08ea4c.js";

import {
    c as ve,
    D as ye,
    __tla as he
} from "./dict-c5825220.js";

import {
    d as fe,
    h as _e
} from "./tree-05ea8e09.js";

import {
    g as xe,
    __tla as we
} from "./index-70ef8e51.js";

import {
    _ as ke
} from "./_plugin-vue_export-helper-1b428a4d.js";

let T, Ve = Promise.all([ (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})() ]).then(async () => {
    let _, S, M, N, O, R, z, P;
    _ = r => (re("data-v-66022239"), r = r(), pe(), r), S = {
        class: "identitys-choose-box w-100%"
    }, M = {
        class: "switchs"
    }, N = _(() => i("span", {
        class: "ml-20px mr-10px"
    }, "全选", -1)), O = _(() => i("span", {
        class: "ml-20px mr-10px"
    }, "展开/折叠", -1)), R = {
        class: "env-types-group px-20px py-16px"
    }, z = {
        class: "pb-10px"
    }, P = {
        key: 0,
        class: "identitys-choose-box empty-box w-100% pl-16px"
    }, T = ke(Object.assign({
        name: "SystemRoleForm"
    }, {
        __name: "ChooseMenu",
        props: {
            modelValue: {
                default: () => [],
                type: Array
            },
            showIdentitys: {
                default: () => [],
                type: Array
            }
        },
        emits: [ "update:modelValue" ],
        setup(r, {
            expose: F,
            emit: Y
        }) {
            const j = Y, s = r, U = I(() => s.showIdentitys.length > 0), G = o({
                ...fe,
                disabled: (e, a) => (e.identityScope || []).indexOf(d.value) < 0
            }), x = I({
                get: () => s.modelValue,
                set: e => {
                    j("update:modelValue", e);
                }
            }), H = I(() => ve(ye.SYSTEM_PERMISSION_INDETITY).filter(e => e.value !== "1").filter(e => s.showIdentitys.indexOf(e.value) >= 0)), w = o([]), p = o(!0), n = o(), m = o(!1), v = o(""), k = o(!1), d = o("");
            y(() => s.showIdentitys, () => {
                d.value = s.showIdentitys.length > 0 ? s.showIdentitys[0] : "";
            }, {
                deep: !0,
                immediate: !0
            }), y(() => v.value, () => {
                V();
            }), y(() => d.value, () => {
                m.value = !1, V();
            });
            const Z = ({
                value: e,
                identity: a
            }, u) => (u.identityScope || []).indexOf(a) >= 0 && (!e || u.name.includes(e));
            function V() {
                var e;
                (e = n.value) == null || e.filter({
                    value: v.value,
                    identity: d.value
                });
            }
            const g = e => {
                var a;
                (a = n.value) == null || a.setCheckedKeys(e);
            }, q = () => {
                var e;
                (e = n.value) == null || e.setCheckedNodes(m.value ? w.value : []), 
                b(() => {
                    A();
                });
            }, B = () => {
                var a;
                const e = (a = n.value) == null ? void 0 : a.store.nodesMap;
                for (let u in e) e[u].expanded !== p.value && (e[u].expanded = p.value);
            };
            function A() {
                let e = n.value.getCheckedKeys(!1), a = n.value.getHalfCheckedKeys();
                x.value = [ ...e, ...a ];
            }
            return y(() => s.showIdentitys, () => {
                x.value = [], g([]);
            }, {
                deep: !0,
                immediate: !0
            }), F({
                initCom: async () => {
                    await (async () => {
                        w.value = _e(await xe());
                    })(), d.value = s.showIdentitys.length > 0 ? s.showIdentitys[0] : "", 
                    b(() => {
                        k.value = !1, g(t(x)), k.value = !0;
                        let e = n.value.getCheckedNodes();
                        e = e.filter(a => !a.children || a.children.length <= 0), 
                        g([]), b(() => {
                            var a;
                            (a = n.value) == null || a.setCheckedNodes(e), V();
                        });
                    });
                }
            }), X(() => {}), (e, a) => {
                const u = ne, J = de, D = oe, L = ue, Q = ie, W = ce;
                return h(), C(K, null, [ $(i("div", S, [ c(J, {
                    modelValue: t(d),
                    "onUpdate:modelValue": a[0] || (a[0] = l => f(d) ? d.value = l : null),
                    class: "identitys-tabs"
                }, {
                    default: E(() => [ (h(!0), C(K, null, ae(t(H), l => (h(), le(u, {
                        key: l.value,
                        label: l.label,
                        name: l.value
                    }, null, 8, [ "label", "name" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]), i("div", M, [ N, c(D, {
                    modelValue: t(m),
                    "onUpdate:modelValue": a[1] || (a[1] = l => f(m) ? m.value = l : null),
                    size: "default",
                    "active-text": "是",
                    "inactive-text": "否",
                    "inline-prompt": "",
                    onChange: q
                }, null, 8, [ "modelValue" ]), O, c(D, {
                    size: "default",
                    modelValue: t(p),
                    "onUpdate:modelValue": a[2] || (a[2] = l => f(p) ? p.value = l : null),
                    "active-text": "展开",
                    "inactive-text": "折叠",
                    "inline-prompt": "",
                    onChange: B
                }, null, 8, [ "modelValue" ]) ]), i("div", R, [ i("div", z, [ c(Q, {
                    size: "large",
                    modelValue: t(v),
                    "onUpdate:modelValue": a[3] || (a[3] = l => f(v) ? v.value = l : null),
                    placeholder: "请输入菜单名称",
                    class: te([ "search-keywords !w-250px" ]),
                    clearable: ""
                }, {
                    append: E(() => [ c(L, {
                        icon: "ep:search",
                        class: "pointer"
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), c(W, {
                    ref_key: "treeRef",
                    ref: n,
                    "check-strictly": !t(k),
                    data: t(w),
                    props: t(G),
                    "default-expand-all": "",
                    onCheck: A,
                    "empty-text": "暂无数据",
                    "node-key": "id",
                    "show-checkbox": "",
                    "filter-node-method": Z
                }, null, 8, [ "check-strictly", "data", "props" ]) ]) ], 512), [ [ ee, t(U) ] ]), t(U) ? se("", !0) : (h(), 
                C("div", P, " 请先选择角色身份 ")) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-66022239" ] ]);
});

export {
    Ve as __tla,
    T as default
};