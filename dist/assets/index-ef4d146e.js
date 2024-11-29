import {
    aE as ae,
    w as U,
    n as j,
    dB as D,
    a0 as $,
    ac as q,
    cF as H,
    e as b,
    d as z,
    ab as J,
    b8 as se,
    b4 as de,
    dC as F,
    dh as oe,
    df as ne,
    b0 as ce,
    dD as re,
    r as Q,
    U as G,
    f as ue,
    i as I,
    aG as ie,
    __tla as he
} from "./index-6c08ea4c.js";

let W, pe = Promise.all([ (() => {
    try {
        return he;
    } catch {}
})() ]).then(async () => {
    const X = z({
        extends: J,
        setup(t, o) {
            const c = J.setup(t, o);
            delete c.selectOptionClick;
            const p = se().proxy;
            return j(() => {
                c.select.states.cachedOptions.get(p.value) || c.select.onOptionCreate(p);
            }), c;
        },
        methods: {
            selectOptionClick() {
                this.$el.parentElement.click();
            }
        }
    });
    function L(t) {
        return t || t === 0;
    }
    function B(t) {
        return Array.isArray(t) && t.length;
    }
    function K(t) {
        return Array.isArray(t) ? t : L(t) ? [ t ] : [];
    }
    function O(t, o, c, p, n) {
        for (let r = 0; r < t.length; r++) {
            const f = t[r];
            if (o(f, r, t, n)) return p ? p(f, r, t, n) : f;
            {
                const A = c(f);
                if (B(A)) {
                    const V = O(A, o, c, p, f);
                    if (V) return V;
                }
            }
        }
    }
    function R(t, o, c, p) {
        for (let n = 0; n < t.length; n++) {
            const r = t[n];
            o(r, n, t, p);
            const f = c(r);
            B(f) && R(f, o, c, r);
        }
    }
    var Y = z({
        props: {
            data: {
                type: Array,
                default: () => []
            }
        },
        setup(t) {
            const o = ce(re);
            return U(() => t.data, () => {
                var c;
                t.data.forEach(n => {
                    o.states.cachedOptions.has(n.value) || o.states.cachedOptions.set(n.value, n);
                });
                const p = ((c = o.selectRef) == null ? void 0 : c.querySelectorAll("input")) || [];
                Array.from(p).includes(document.activeElement) || o.setSelected();
            }, {
                flush: "post",
                immediate: !0
            }), () => {};
        }
    });
    const Z = z({
        name: "ElTreeSelect",
        inheritAttrs: !1,
        props: {
            ...q.props,
            ...F.props,
            cacheData: {
                type: Array,
                default: () => []
            }
        },
        setup(t, o) {
            const {
                slots: c,
                expose: p
            } = o, n = Q(), r = Q(), f = b(() => t.nodeKey || t.valueKey || "value"), A = ((e, {
                attrs: C,
                emit: M
            }, {
                select: g,
                tree: m,
                key: v
            }) => {
                const S = ae("tree-select");
                return U(() => e.data, () => {
                    e.filterable && j(() => {
                        var u, a;
                        (a = m.value) == null || a.filter((u = g.value) == null ? void 0 : u.states.inputValue);
                    });
                }, {
                    flush: "post"
                }), {
                    ...D($(e), Object.keys(q.props)),
                    ...C,
                    "onUpdate:modelValue": u => M(H, u),
                    valueKey: v,
                    popperClass: b(() => {
                        const u = [ S.e("popper") ];
                        return e.popperClass && u.push(e.popperClass), u.join(" ");
                    }),
                    filterMethod: (u = "") => {
                        var a;
                        e.filterMethod ? e.filterMethod(u) : e.remoteMethod ? e.remoteMethod(u) : (a = m.value) == null || a.filter(u);
                    }
                };
            })(t, o, {
                select: n,
                tree: r,
                key: f
            }), {
                cacheOptions: V,
                ...ee
            } = ((e, {
                attrs: C,
                slots: M,
                emit: g
            }, {
                select: m,
                tree: v,
                key: S
            }) => {
                U(() => e.modelValue, () => {
                    e.showCheckbox && j(() => {
                        const l = v.value;
                        l && !de(l.getCheckedKeys(), K(e.modelValue)) && l.setCheckedKeys(K(e.modelValue));
                    });
                }, {
                    immediate: !0,
                    deep: !0
                });
                const u = b(() => ({
                    value: S.value,
                    label: "label",
                    children: "children",
                    disabled: "disabled",
                    isLeaf: "isLeaf",
                    ...e.props
                })), a = (l, s) => {
                    var d;
                    const i = u.value[l];
                    return ne(i) ? i(s, (d = v.value) == null ? void 0 : d.getNode(a("value", s))) : s[i];
                }, T = K(e.modelValue).map(l => O(e.data || [], s => a("value", s) === l, s => a("children", s), (s, d, i, y) => y && a("value", y))).filter(l => L(l)), te = b(() => {
                    if (!e.renderAfterExpand && !e.lazy) return [];
                    const l = [];
                    return R(e.data.concat(e.cacheData), s => {
                        const d = a("value", s);
                        l.push({
                            value: d,
                            currentLabel: a("label", s),
                            isDisabled: a("disabled", s)
                        });
                    }, s => a("children", s)), l;
                });
                return {
                    ...D($(e), Object.keys(F.props)),
                    ...C,
                    nodeKey: S,
                    expandOnClickNode: b(() => !e.checkStrictly && e.expandOnClickNode),
                    defaultExpandedKeys: b(() => e.defaultExpandedKeys ? e.defaultExpandedKeys.concat(T) : T),
                    renderContent: (l, {
                        node: s,
                        data: d,
                        store: i
                    }) => l(X, {
                        value: a("value", d),
                        label: a("label", d),
                        disabled: a("disabled", d)
                    }, e.renderContent ? () => e.renderContent(l, {
                        node: s,
                        data: d,
                        store: i
                    }) : M.default ? () => M.default({
                        node: s,
                        data: d,
                        store: i
                    }) : void 0),
                    filterNodeMethod: (l, s, d) => e.filterNodeMethod ? e.filterNodeMethod(l, s, d) : !l || new RegExp(oe(l), "i").test(a("label", s) || ""),
                    onNodeClick: (l, s, d) => {
                        var i, y, N, x;
                        if ((i = C.onNodeClick) == null || i.call(C, l, s, d), !e.showCheckbox || !e.checkOnClickNode) {
                            if (e.showCheckbox || !e.checkStrictly && !s.isLeaf) e.expandOnClickNode && d.proxy.handleExpandIconClick(); else if (!a("disabled", l)) {
                                const _ = (y = m.value) == null ? void 0 : y.states.options.get(a("value", l));
                                (N = m.value) == null || N.handleOptionSelect(_);
                            }
                            (x = m.value) == null || x.focus();
                        }
                    },
                    onCheck: (l, s) => {
                        var d;
                        if (!e.showCheckbox) return;
                        const i = a("value", l), y = {};
                        R([ v.value.store.root ], h => y[h.key] = h, h => h.childNodes);
                        const N = s.checkedKeys, x = e.multiple ? K(e.modelValue).filter(h => !(h in y) && !N.includes(h)) : [], _ = x.concat(N);
                        if (e.checkStrictly) g(H, e.multiple ? _ : _.includes(i) ? i : void 0); else if (e.multiple) g(H, x.concat(v.value.getCheckedKeys(!0))); else {
                            const h = O([ l ], k => !B(a("children", k)) && !a("disabled", k), k => a("children", k)), w = h ? a("value", h) : void 0, le = L(e.modelValue) && !!O([ l ], k => a("value", k) === e.modelValue, k => a("children", k));
                            g(H, w === e.modelValue || le ? void 0 : w);
                        }
                        j(() => {
                            var h;
                            const w = K(e.modelValue);
                            v.value.setCheckedKeys(w), (h = C.onCheck) == null || h.call(C, l, {
                                checkedKeys: v.value.getCheckedKeys(),
                                checkedNodes: v.value.getCheckedNodes(),
                                halfCheckedKeys: v.value.getHalfCheckedKeys(),
                                halfCheckedNodes: v.value.getHalfCheckedNodes()
                            });
                        }), (d = m.value) == null || d.focus();
                    },
                    cacheOptions: te
                };
            })(t, o, {
                select: n,
                tree: r,
                key: f
            }), P = G({});
            return p(P), ue(() => {
                Object.assign(P, {
                    ...D(r.value, [ "filter", "updateKeyChildren", "getCheckedNodes", "setCheckedNodes", "getCheckedKeys", "setCheckedKeys", "setChecked", "getHalfCheckedNodes", "getHalfCheckedKeys", "getCurrentKey", "getCurrentNode", "setCurrentKey", "setCurrentNode", "getNode", "remove", "append", "insertBefore", "insertAfter" ]),
                    ...D(n.value, [ "focus", "blur" ])
                });
            }), () => I(q, G({
                ...A,
                ref: e => n.value = e
            }), {
                ...c,
                default: () => [ I(Y, {
                    data: V.value
                }), I(F, G({
                    ...ee,
                    ref: e => r.value = e
                })) ]
            });
        }
    });
    var E = ie(Z, [ [ "__file", "tree-select.vue" ] ]);
    E.install = t => {
        t.component(E.name, E);
    }, W = E;
});

export {
    W as E,
    pe as __tla
};