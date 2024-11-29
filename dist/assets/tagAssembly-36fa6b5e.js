import {
    a7 as T,
    b8 as Ie,
    r as d,
    U as he,
    a0 as Ke,
    e as Ze,
    f as Fe,
    g as Je,
    aT as Me,
    j as Qe,
    o as G,
    c as k,
    t,
    k as l,
    l as i,
    v as w,
    a as o,
    dY as Ye,
    m as Ge,
    I as He,
    F as ke,
    y as we,
    z as Xe,
    A as c,
    B as S,
    G as m,
    C as ea,
    E as aa,
    J as ta,
    _ as la,
    P as sa,
    K as oa,
    L as na,
    O as ra,
    cK as ua,
    Q as ia,
    aU as ca,
    R as da,
    S as pa,
    __tla as ga
} from "./index-6c08ea4c.js";

import {
    _ as ma,
    __tla as va
} from "./index-c4ca0ced.js";

import {
    _ as fa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ya
} from "./index-993301ca.js";

let xe, _a = Promise.all([ (() => {
    try {
        return ga;
    } catch {}
})(), (() => {
    try {
        return va;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})() ]).then(async () => {
    let O, P, I, K, Z, F, J, M, Q, Y, H, X, ee, ae, te, le, se, oe, ne, re, ue, ie, ce, de, pe, ge, me, ve, fe;
    O = {
        class: "tagAssemblyContainer"
    }, P = {
        class: "btn"
    }, I = {
        class: "label-cards"
    }, K = {
        class: "card_title-left"
    }, Z = {
        class: "neu-thumbnailDisplay titleText"
    }, F = {
        class: "titleTip"
    }, J = {
        class: "titleSort"
    }, M = (C => (da("data-v-fe6b16f3"), C = C(), pa(), C))(() => t("span", {
        class: "titleSortText"
    }, "排序：", -1)), Q = {
        class: "neu-thumbnailDisplay titleSortValue"
    }, Y = {
        class: "card_title-right"
    }, H = [ "onClick" ], X = [ "onClick" ], ee = [ "onScroll" ], ae = {
        class: "content"
    }, te = {
        class: "contentLeft"
    }, le = {
        class: "nape"
    }, se = {
        class: "nape"
    }, oe = {
        class: "nape"
    }, ne = {
        class: "contentRight"
    }, re = {
        class: "napeValue mb20"
    }, ue = {
        class: "neu-thumbnailDisplay contentRightShowTip"
    }, ie = [ "onClick" ], ce = [ "onClick" ], de = [ "onClick" ], pe = {
        class: "labelPool"
    }, ge = {
        class: "individualLabel"
    }, me = {
        class: "pagination"
    }, ve = {
        class: "form-content"
    }, fe = {
        class: "dialog-footer align-center"
    }, xe = fa({
        __name: "tagAssembly",
        props: {
            subassembly: {
                type: String,
                default: () => "questionLabel"
            }
        },
        setup(C) {
            let {
                proxy: Te
            } = Ie();
            const U = d(0), y = d({
                page: 1,
                size: 10
            }), b = d(!1), x = d(!1), L = d(), E = d(), V = d(""), $ = d(null), r = he({
                key: [],
                value: []
            }), q = d([]), v = d({
                tagGroupName: "",
                tagGroupSort: void 0
            }), N = d(0), A = d(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth), ye = C, {
                subassembly: W
            } = Ke(ye), R = () => {
                switch (ye.subassembly) {
                  case "questionLabel":
                    return "试题标签组";

                  case "paperLabel":
                    return "试卷标签组";
                }
            }, Ce = Ze(() => {
                switch (N.value) {
                  case 0:
                    return `\u65B0\u589E${R()}`;

                  case 1:
                    return `\u7F16\u8F91${R()}`;

                  default:
                    return "";
                }
            }), Se = () => {
                N.value = 0, b.value = !0, v.value.tagGroupUsage = W.value === "questionLabel" ? 0 : 1;
            }, Ve = () => {
                $.value.validate(n => {
                    var e;
                    n && (x.value = !0, N.value ? (e = v.value, T.put({
                        url: "/resource/exam-tag-group",
                        data: e
                    })).then(() => {
                        b.value = !1, _(), x.value = !1;
                    }).catch(() => {
                        x.value = !1;
                    }) : function(s) {
                        return T.post({
                            url: "/resource/exam-tag-group",
                            data: s
                        });
                    }(v.value).then(() => {
                        b.value = !1, _(), x.value = !1;
                    }).catch(() => {
                        x.value = !1;
                    }));
                });
            }, Ne = () => {
                $.value.clearValidate(), Object.assign(v.value, {
                    tagGroupName: "",
                    tagGroupSort: void 0
                });
            }, ze = n => {
                aa.confirm("确认删除标签组及组内所有标签吗？", "提示", {
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    type: "warning",
                    title: "提示"
                }).then(async e => {
                    var s;
                    e && (await (s = n.id, T.delete({
                        url: `/resource/exam-tag-group/${s}`
                    })), await _());
                }).catch(() => {});
            }, Ue = (n, e) => {
                r.value[e] ? (s = {
                    tagGroupId: n.id || "",
                    tagName: r.value[e],
                    tagGroupUsage: W.value === "questionLabel" ? 0 : 1
                }, T.post({
                    url: "/resource/exam-tag-group/tag",
                    data: s,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })).then(h => {
                    r.key[e] = !1, _(e);
                }) : Te.$modal.msgWarning("请先输入");
                var s;
            }, Le = (n, e, s) => {
                let p = {
                    labels: {
                        tagNames: n.tagName
                    },
                    id: e.id || ""
                };
                var h;
                (h = p, T.delete({
                    url: `/resource/exam-tag-group/${h.id}/tag`,
                    params: {
                        tagNames: h.labels.tagNames
                    }
                })).then(z => {
                    _(s);
                });
            }, Ee = n => {
                y.value.page = n.page, y.value.size = n.limit, _();
            }, _ = n => {
                let e = {
                    keywords: V.value,
                    page: y.value.page > 0 ? y.value.page - 1 : 0,
                    size: y.value.size,
                    sort: "tagGroupType, tagGroupSort,createTime",
                    tagGroupUsage: W.value === "questionLabel" ? 0 : 1
                };
                var s;
                (s = e, T.get({
                    url: "/resource/exam-tag-group/page-list",
                    params: s
                })).then(p => {
                    n || n === 0 ? q.value[n] = p.content[n] || [] : q.value = p.content || [], 
                    U.value = p.totalElements || 0;
                });
            }, $e = he({
                tagGroupName: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "blur"
                } ],
                tagGroupSort: [ {
                    required: !0,
                    message: "请输入数字",
                    trigger: "blur"
                }, {
                    validator: (n, e, s) => {
                        e && e.toString().indexOf(".") !== -1 ? s(new Error("请输入正整数")) : e && e.toString().length > 5 ? s(new Error("长度不能超过5")) : s();
                    },
                    trigger: [ "change", "blur" ]
                } ]
            });
            return Fe(() => {
                _(), window.addEventListener("resize", () => {
                    A.value = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                });
            }), Je(() => {
                window.removeEventListener("resize", () => {});
            }), (n, e) => {
                const s = ta, p = la, h = sa, z = oa, B = Me("svg-icon"), qe = na, Ae = ma, _e = ra, We = ua, Re = ia, Be = ca, D = Qe("show-tip");
                return G(), k("div", O, [ t("div", P, [ l(s, {
                    icon: o(Ye),
                    plain: "",
                    size: "large",
                    type: "primary",
                    onClick: Se
                }, {
                    default: i(() => [ w(" 新建标签组 ") ]),
                    _: 1
                }, 8, [ "icon" ]), l(h, {
                    modelValue: o(V),
                    "onUpdate:modelValue": e[1] || (e[1] = a => Ge(V) ? V.value = a : null),
                    class: "neu",
                    placeholder: "请输入标签名称",
                    style: {
                        width: "300px"
                    },
                    onKeyup: e[2] || (e[2] = He(a => _(), [ "enter" ]))
                }, {
                    suffix: i(() => [ l(p, {
                        svgClass: "fz-18",
                        icon: "ep:search",
                        style: {
                            cursor: "pointer"
                        },
                        onClick: e[0] || (e[0] = a => _())
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), t("div", I, [ (G(!0), k(ke, null, we(o(q), (a, u) => {
                    return G(), k("div", {
                        key: a.id,
                        class: Xe([ {
                            "mr-0": o(A) > 1440 && (u + 1) % 3 == 0 || o(A) <= 1439 && (u + 1) % 2 == 0
                        }, "card-table" ])
                    }, [ t("div", {
                        ref_for: !0,
                        ref_key: "cardTitleRef",
                        ref: E,
                        class: "card_title"
                    }, [ t("div", K, [ c((G(), k("span", null, [ l(z, {
                        content: a.tagGroupName,
                        placement: "top-start"
                    }, {
                        default: i(() => [ t("span", Z, S(a.tagGroupName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ D ] ]), c(t("span", F, [ l(p, {
                        icon: "svg-icon:tip"
                    }) ], 512), [ [ m, a.tagGroupType === "0" ] ]), c(t("span", J, [ M, c((G(), 
                    k("span", null, [ l(z, {
                        content: a.tagGroupSort.toString(),
                        placement: "top-start"
                    }, {
                        default: i(() => [ t("span", Q, S(a.tagGroupSort), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ D ] ]) ], 512), [ [ m, a.tagGroupType === "1" ] ]) ]), t("div", Y, [ c(t("span", {
                        class: "edit",
                        onClick: f => (g => {
                            N.value = 1, b.value = !0;
                            const {
                                id: De,
                                tagGroupName: je,
                                tagGroupSort: Oe,
                                tagGroupUsage: Pe
                            } = g;
                            Object.assign(v.value, {
                                id: De,
                                tagGroupName: je,
                                tagGroupSort: Oe,
                                tagGroupUsage: Pe
                            });
                        })(a)
                    }, [ l(p, {
                        icon: "svg-icon:edit"
                    }) ], 8, H), [ [ m, a.tagGroupType === "1" ] ]), c(t("span", {
                        class: "delete ml10",
                        onClick: f => ze(a)
                    }, [ l(p, {
                        icon: "svg-icon:delete"
                    }) ], 8, X), [ [ m, a.tagGroupType === "1" ] ]) ]) ], 512), t("div", {
                        ref_for: !0,
                        ref_key: "contentContainers",
                        ref: L,
                        class: "content_container",
                        onScroll: f => {
                            return g = u, void (L.value[g] && (L.value[g].scrollTop > 0 ? E.value[g].classList.add("styled_fixed") : E.value[g].classList.remove("styled_fixed")));
                            var g;
                        }
                    }, [ t("div", ae, [ t("div", te, [ c(t("div", le, [ l(B, {
                        "icon-class": "user"
                    }), w(" 创建人员 ") ], 512), [ [ m, a.tagGroupType === "1" ] ]), c(t("div", se, [ l(B, {
                        "icon-class": "time"
                    }), w(" 创建时间 ") ], 512), [ [ m, a.tagGroupType === "1" ] ]), t("div", oe, [ l(B, {
                        "icon-class": "tag"
                    }), w(" 标签 ") ]) ]), t("div", ne, [ c((G(), k("div", re, [ l(z, {
                        content: a.createByName,
                        placement: "top-start"
                    }, {
                        default: i(() => [ t("span", ue, S(a.createByName || "--"), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ m, a.tagGroupType === "1" ], [ D ] ]), c(t("div", {
                        class: "napeValue mb16"
                    }, S(a.createTime), 513), [ [ m, a.tagGroupType === "1" ] ]), t("div", null, [ c(t("span", {
                        class: "addTag mt4",
                        onClick: f => {
                            return g = u, r.key = [], r.value = [], void (r.key[g] = !0);
                            var g;
                        }
                    }, "添加标签", 8, ie), [ [ m, !r.key[u] ] ]), c(t("span", null, [ l(h, {
                        "on-change": (j = r.value[u], be = u, void (/^[a-zA-Z\u4e00-\u9fa5\d]+$/.test(j) || (r.value[be] = j.replace(/[^a-zA-Z\u4e00-\u9fa5\d]/g, "")))),
                        modelValue: r.value[u],
                        "onUpdate:modelValue": f => r.value[u] = f,
                        modelModifiers: {
                            trim: !0
                        },
                        maxlength: "30",
                        class: "napeValue-input"
                    }, null, 8, [ "on-change", "modelValue", "onUpdate:modelValue" ]), t("span", {
                        class: "btn-add",
                        onClick: f => Ue(a, u)
                    }, "保存", 8, ce), t("span", {
                        class: "btn-cancel",
                        onClick: () => r.key[u] = !1
                    }, "取消", 8, de) ], 512), [ [ m, r.key[u] ] ]), t("div", pe, [ t("span", ge, [ (G(!0), 
                    k(ke, null, we(a.tags, f => (G(), ea(qe, {
                        key: f.tagName,
                        "disable-transitions": !1,
                        class: "ellipsis-tag",
                        closable: "",
                        round: "",
                        onClose: g => Le(f, a, u)
                    }, {
                        default: i(() => [ w(S(f.tagName), 1) ]),
                        _: 2
                    }, 1032, [ "onClose" ]))), 128)) ]) ]) ]) ]) ]) ], 40, ee) ], 2);
                    var j, be;
                }), 128)) ]), t("div", me, [ c(l(Ae, {
                    limit: o(y).size,
                    "onUpdate:limit": e[3] || (e[3] = a => o(y).size = a),
                    page: o(y).page,
                    "onUpdate:page": e[4] || (e[4] = a => o(y).page = a),
                    total: o(U),
                    onPagination: Ee
                }, null, 8, [ "limit", "page", "total" ]), [ [ m, o(U) > 0 ] ]) ]), l(Be, {
                    modelValue: o(b),
                    "onUpdate:modelValue": e[8] || (e[8] = a => Ge(b) ? b.value = a : null),
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    title: Ce.value,
                    width: "552px",
                    onClose: Ne
                }, {
                    footer: i(() => [ t("div", fe, [ l(s, {
                        loading: o(x),
                        size: "default",
                        type: "primary",
                        onClick: Ve
                    }, {
                        default: i(() => [ w("确 认 ") ]),
                        _: 1
                    }, 8, [ "loading" ]), l(s, {
                        size: "default",
                        onClick: e[7] || (e[7] = () => b.value = !1)
                    }, {
                        default: i(() => [ w("取 消 ") ]),
                        _: 1
                    }) ]) ]),
                    default: i(() => [ t("div", ve, [ l(Re, {
                        ref_key: "newDataRef",
                        ref: $,
                        model: o(v),
                        rules: $e,
                        "label-width": "120px"
                    }, {
                        default: i(() => [ l(_e, {
                            label: `${R()}\u540D\u79F0`,
                            prop: "tagGroupName"
                        }, {
                            default: i(() => [ l(h, {
                                modelValue: o(v).tagGroupName,
                                "onUpdate:modelValue": e[5] || (e[5] = a => o(v).tagGroupName = a),
                                class: "neu",
                                maxlength: "30",
                                placeholder: "请输入1-30字符",
                                size: "large"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }, 8, [ "label" ]), l(_e, {
                            label: "排序",
                            prop: "tagGroupSort"
                        }, {
                            default: i(() => [ l(We, {
                                modelValue: o(v).tagGroupSort,
                                "onUpdate:modelValue": e[6] || (e[6] = a => o(v).tagGroupSort = a),
                                placeholder: "请输入数字",
                                min: 1,
                                max: 9999,
                                size: "large"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-fe6b16f3" ] ]);
});

export {
    _a as __tla,
    xe as default
};