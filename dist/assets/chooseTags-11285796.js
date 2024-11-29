import {
    a7 as V,
    b8 as za,
    u as Aa,
    a0 as Va,
    e as ea,
    r as c,
    w as la,
    f as Ua,
    o as r,
    c as f,
    F as k,
    y as U,
    C as b,
    l as t,
    v as g,
    B as _,
    t as o,
    k as u,
    A as w,
    G as x,
    a as d,
    m as sa,
    D as ta,
    z as $a,
    H as oa,
    L as Oa,
    J as Sa,
    _ as Ta,
    P as Ba,
    K as Pa,
    aQ as Wa,
    q as Za,
    __tla as qa
} from "./index-6c08ea4c.js";

import {
    a as Da,
    b as Ea,
    E as Fa,
    __tla as Ha
} from "./index-5adb716b.js";

let ua, Ia = Promise.all([ (() => {
    try {
        return qa;
    } catch {}
})(), (() => {
    try {
        return Ha;
    } catch {}
})() ]).then(async () => {
    let T, B, P, W, Z, q, D, E, F, H, I, J, K, L, M, Q;
    T = {
        class: "tags-box"
    }, B = {
        class: "tag-cont"
    }, P = {
        class: "search-header"
    }, W = {
        class: "dropdown-btn"
    }, Z = {
        class: "group-name"
    }, q = o("div", {
        class: "neu-color-blue px-3 py-1"
    }, " 全部 ", -1), D = {
        class: "neu-color-blue dropdown-item px-3 py-1"
    }, E = {
        class: "cont-box"
    }, F = {
        class: "scroll-box"
    }, H = {
        class: "tags-group-name"
    }, I = {
        key: 0,
        class: "tags-group-create mt-2"
    }, J = {
        class: "tags-group-items"
    }, K = [ "onClick" ], L = [ "onClick" ], M = {
        class: "empty-box"
    }, Q = {
        class: "bot-box"
    }, ua = {
        __name: "chooseTags",
        props: {
            modelValue: {
                type: Array,
                default: () => []
            },
            tagGroupUsage: {
                type: String,
                default: "0"
            },
            disableSearch: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:modelValue" ],
        setup(ra, {
            expose: ia,
            emit: na
        }) {
            const ca = na, {
                proxy: da
            } = za(), pa = Aa(), C = ra, {
                disableSearch: R
            } = Va(C), m = ea({
                get: () => C.modelValue || [],
                set: e => {
                    ca("update:modelValue", e);
                }
            }), $ = c("标签组"), N = c(""), ga = ea(() => {
                let e = [ ...N.value ? y.value.filter(l => l.id === N.value) : y.value ];
                return h.value && (e = e.map(l => ({
                    ...l,
                    tags: l.tags.filter(s => s.tagName.indexOf(h.value) >= 0)
                }))), e;
            }), h = c(""), y = c([]), G = c(!1), v = c([]), z = c(!1), p = c(""), ma = c(), va = c();
            la(() => p.value, e => {
                /^[a-zA-Z\u4e00-\u9fa5\d]+$/.test(e) || (p.value = e.replace(/[^a-zA-Z\u4e00-\u9fa5\d]/g, ""));
            });
            const fa = () => {
                z.value = !1, p.value = "";
            };
            function ha() {
                v.value = [ ...m.value ], G.value = !0;
            }
            const ya = async () => {
                const e = await (l = {
                    tagGroupUsage: C.tagGroupUsage,
                    keywords: h.value
                }, V.get({
                    url: "/resource/exam-tag-group/list",
                    params: l
                }));
                var l;
                y.value = (e || []).map(s => ({
                    ...s,
                    showAll: !1
                }));
            }, _a = e => {
                $.value = e.name, N.value = e.id;
            }, O = () => {
                G.value = !1, N.value = "", $.value = "标签组", h.value = "";
            };
            function j(e, l = !1) {
                v.value.indexOf(e.tagName) >= 0 ? (v.value = v.value.filter(s => s !== e.tagName), 
                l && (m.value = m.value.filter(s => s !== e.tagName))) : l || (v.value.length === 5 ? da.$modal.msgWarning("最多选择 5 个标签！") : v.value.push(e.tagName));
            }
            function ka(e) {
                let l = {
                    tagGroupId: e.id || "",
                    tagName: p.value,
                    tagGroupUsage: C.tagGroupUsage
                };
                var s;
                (s = l, V.post({
                    headerWwwform: !0,
                    url: "/resource/exam-tag-group/tag",
                    data: s
                })).then(() => {
                    p.value = "", z.value = !1, X(e);
                });
            }
            function ba(e, l) {
                let s = {
                    labels: {
                        tagNames: e.tagName
                    },
                    id: l.id || ""
                };
                var n;
                (n = s, V.delete({
                    url: `/resource/exam-tag-group/${n.id}/tag`,
                    params: n.labels
                })).then(() => {
                    j(e, !0), X(l);
                });
            }
            function X(e) {
                var l;
                (l = e.id, V.get({
                    url: `/resource/exam-tag-group/${l}`
                })).then(s => {
                    y.value[y.value.length - 1] = {
                        ...s
                    };
                });
            }
            return la(() => pa, () => {
                O();
            }, {
                deep: !0
            }), Ua(() => {
                ya();
            }), ia({
                handleBack: O
            }), (e, l) => {
                const s = Oa, n = Sa, A = Ta, Y = Da, wa = Ea, xa = Fa, aa = Ba, Ca = Pa, Na = Wa, Ga = Za;
                return r(), f("div", T, [ (r(!0), f(k, null, U(m.value, a => (r(), 
                b(s, {
                    key: a,
                    class: "mr-2",
                    closable: "",
                    round: "",
                    "disable-transitions": !1,
                    onClose: i => (S => {
                        m.value.splice(m.value.indexOf(S), 1);
                    })(a)
                }, {
                    default: t(() => [ g(_(a), 1) ]),
                    _: 2
                }, 1032, [ "onClose" ]))), 128)), o("div", {
                    ref_key: "wrapper",
                    ref: va,
                    style: {
                        display: "inline-block"
                    }
                }, [ u(Ga, {
                    ref_key: "popoverRef",
                    ref: ma,
                    placement: "bottom",
                    width: 400,
                    trigger: "click",
                    "show-arrow": !1,
                    "popper-class": "com-tags",
                    visible: d(G)
                }, {
                    reference: t(() => [ w(u(n, {
                        class: "create-tag",
                        round: "",
                        onClick: ha,
                        size: "small"
                    }, {
                        default: t(() => [ g("添加标签") ]),
                        _: 1
                    }, 512), [ [ x, m.value.length < 5 ] ]) ]),
                    default: t(() => [ o("div", B, [ o("div", P, [ u(xa, {
                        onCommand: _a
                    }, {
                        dropdown: t(() => [ u(wa, null, {
                            default: t(() => [ u(Y, {
                                command: {
                                    name: "标签组",
                                    id: ""
                                }
                            }, {
                                default: t(() => [ q ]),
                                _: 1
                            }), (r(!0), f(k, null, U(d(y), a => (r(), b(Y, {
                                key: a,
                                command: {
                                    name: a.tagGroupName,
                                    id: a.id
                                }
                            }, {
                                default: t(() => [ o("div", D, _(a.tagGroupName), 1) ]),
                                _: 2
                            }, 1032, [ "command" ]))), 128)) ]),
                            _: 1
                        }) ]),
                        default: t(() => [ o("div", W, [ o("div", Z, _(d($)), 1), u(A, {
                            icon: "ep:arrow-down",
                            class: "el-icon--right"
                        }) ]) ]),
                        _: 1
                    }), u(aa, {
                        modelValue: d(h),
                        "onUpdate:modelValue": l[0] || (l[0] = a => sa(h) ? h.value = a : null),
                        class: "ml-1 search-box",
                        placeholder: "请输入标签名称",
                        "suffix-icon": "Search"
                    }, null, 8, [ "modelValue" ]) ]), o("div", E, [ o("div", F, [ (r(!0), 
                    f(k, null, U(ga.value, a => (r(), f("div", {
                        key: a,
                        class: "tags-group-list"
                    }, [ o("div", H, _(a.tagGroupName), 1), a.tagGroupType !== "0" || d(R) ? ta("", !0) : (r(), 
                    f("div", I, [ d(z) ? (r(), f(k, {
                        key: 0
                    }, [ u(aa, {
                        size: "small",
                        modelValue: d(p),
                        "onUpdate:modelValue": l[1] || (l[1] = i => sa(p) ? p.value = i : null),
                        maxlength: "30",
                        class: "create-input",
                        placeholder: "请输入标签名称"
                    }, null, 8, [ "modelValue" ]), u(n, {
                        type: "primary",
                        disabled: !d(p),
                        onClick: i => ka(a),
                        size: "small"
                    }, {
                        default: t(() => [ g("保存") ]),
                        _: 2
                    }, 1032, [ "disabled", "onClick" ]), u(n, {
                        onClick: fa,
                        size: "small"
                    }, {
                        default: t(() => [ g("取消") ]),
                        _: 1
                    }) ], 64)) : (r(), b(n, {
                        key: 1,
                        class: "create-tag",
                        round: "",
                        onClick: l[2] || (l[2] = i => z.value = !0),
                        size: "small"
                    }, {
                        default: t(() => [ g("添加标签") ]),
                        _: 1
                    })) ])), o("div", J, [ (r(!0), f(k, null, U(a.showAll ? a.tags || [] : (a.tags || []).slice(0, 7), i => (r(), 
                    b(Ca, {
                        class: "box-item",
                        effect: "dark",
                        content: i.tagName,
                        placement: "top-start",
                        "show-after": 300,
                        key: i
                    }, {
                        default: t(() => [ o("div", {
                            class: $a([ "tags-group-item", {
                                "is-active": d(v).indexOf(i.tagName) >= 0,
                                "is-mine": a.tagGroupType === "0"
                            } ]),
                            onClick: oa(S => j(i), [ "stop" ])
                        }, [ g(_(i.tagName) + " ", 1), a.tagGroupType !== "0" || d(R) ? ta("", !0) : (r(), 
                        b(A, {
                            key: 0,
                            icon: "ep:circle-close-filled",
                            class: "close-btn",
                            onClick: oa(S => ba(i, a), [ "stop" ])
                        }, null, 8, [ "onClick" ])) ], 10, K) ]),
                        _: 2
                    }, 1032, [ "content" ]))), 128)), w(o("div", {
                        class: "tags-group-item more-btn",
                        onClick: i => a.showAll = !a.showAll
                    }, [ g(_(a.showAll ? "收起" : "展开") + " ", 1), u(Na, {
                        class: "el-icon--right",
                        size: 14
                    }, {
                        default: t(() => [ w(u(A, {
                            size: 14,
                            icon: "ep:arrow-down",
                            class: "el-icon--right"
                        }, null, 512), [ [ x, !a.showAll ] ]), w(u(A, {
                            size: 14,
                            icon: "ep:arrow-up",
                            class: "el-icon--right"
                        }, null, 512), [ [ x, a.showAll ] ]) ]),
                        _: 2
                    }, 1024) ], 8, L), [ [ x, (a.tags || []).length > 7 ] ]), w(o("div", M, "暂无数据", 512), [ [ x, (a.tags || []).length === 0 ] ]) ]) ]))), 128)) ]) ]), o("div", Q, [ u(n, {
                        type: "primary",
                        onClick: l[3] || (l[3] = a => (m.value = [ ...v.value ], 
                        void (G.value = !1)))
                    }, {
                        default: t(() => [ g("保存") ]),
                        _: 1
                    }), u(n, {
                        onClick: O
                    }, {
                        default: t(() => [ g("返回") ]),
                        _: 1
                    }) ]) ]) ]),
                    _: 1
                }, 8, [ "visible" ]) ], 512) ]);
            };
        }
    };
});

export {
    Ia as __tla,
    ua as default
};