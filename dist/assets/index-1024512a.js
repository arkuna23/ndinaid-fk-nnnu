import {
    ag as ce,
    e as pe,
    r as g,
    w as me,
    g as ye,
    o as d,
    c as V,
    C as p,
    l as f,
    k,
    a as t,
    I as D,
    z as _,
    D as Q,
    aI as W,
    F as X,
    y as Z,
    x as U,
    t as L,
    v as ee,
    B as O,
    m as he,
    dP as fe,
    aj as ke,
    _ as ve,
    P as be,
    ab as ge,
    ac as xe,
    ak as Ve,
    N as _e,
    K as we,
    J as Ce,
    R as Ue,
    S as Le,
    __tla as ze
} from "./index-6c08ea4c.js";

import {
    d as le
} from "./tree-05ea8e09.js";

import $e, {
    __tla as Be
} from "./DeptTag-1be092ce.js";

import {
    _ as Ie
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Pe,
    __tla as De
} from "./index-ef4d146e.js";

let ae, Oe = Promise.all([ (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})() ]).then(async () => {
    let j, F, R, S, T, K;
    j = {
        class: "tree-item"
    }, F = (c => (Ue("data-v-11630381"), c = c(), Le(), c))(() => L("span", {
        class: "mr-10px"
    }, "仅查看启用组织", -1)), R = {
        key: 4,
        class: "left search-keywords ml-10px flex items-center"
    }, S = {
        style: {
            height: "38px",
            "background-color": "#f6f6f6",
            "padding-left": "10px",
            "font-size": "14px"
        },
        class: "flex items-center"
    }, T = {
        style: {
            "line-height": "normal"
        }
    }, K = {
        key: 6
    }, ae = Ie({
        __name: "index",
        props: {
            searchList: {
                type: Array,
                default: () => []
            },
            keywordsInfo: {
                type: Object,
                default: () => ({
                    label: "关键词",
                    key: "keywords"
                })
            },
            isShowInput: {
                type: Boolean,
                default: !0
            },
            inDialog: {
                type: Boolean,
                default: !1
            },
            borderBox: {
                type: Boolean,
                default: !1
            },
            treeProps: {
                type: Object,
                default: () => le
            }
        },
        emits: [ "handleSearch", "handleReset", "handleGetDeptList" ],
        setup(c, {
            expose: te,
            emit: se
        }) {
            const oe = ce(), ne = pe(() => oe.getLayout), {
                getPrefixCls: re
            } = ke(), de = re("search-box"), z = se, m = c, ie = g(!1);
            g();
            const a = g({
                keywords: ""
            }), r = g({}), v = g(!1);
            me(() => m.searchList, () => {
                (m.searchList || []).forEach(l => {
                    (l.default || l.default == "") && (a.value[l.key] = l.default, 
                    M(l));
                });
            }, {
                immediate: !0,
                deep: !0
            });
            const Y = (l, n) => {
                var o;
                return n.name.includes(l) || ((o = n.code) == null ? void 0 : o.includes(l));
            };
            function E() {
                z("handleReset"), a.value = {
                    keywords: ""
                }, m.searchList.forEach(l => {
                    l.default && (a.value[l.key] = l.default);
                }), i();
            }
            function i() {
                ie.value = !1, z("handleSearch", t(a));
            }
            function $() {
                v.value = !0;
            }
            function B() {
                v.value = !1;
            }
            function H(l, n) {
                let o = r.value.activeText ? r.value.activeText.split("、") : [];
                if (l.multiple && o.length !== a.value[l.key].length) {
                    let u = a.value[l.key] || [];
                    o = o.filter(b => {
                        var h;
                        let y = ((h = function(I) {
                            const P = /\((.*?)\)/g, x = I.match(P);
                            return (x == null ? void 0 : x.map(e => e.replace(/\(|\)/g, ""))) || "";
                        }(b)) == null ? void 0 : h[0]) || "";
                        return u.indexOf(y) >= 0;
                    }), r.value[l.key] = l.label + "：" + o.join("、");
                } else r.value[l.key] = l.label + "：" + r.value.activeText;
                l.multiple || (r.value.activeText = ""), i();
            }
            function M(l) {
                if (l.multiple) {
                    let n = l.options.filter(o => a.value[l.key].indexOf(o.value) > -1);
                    n.length > 0 && (r.value[l.key] = l.label + "：" + n.map(o => o == null ? void 0 : o.label).join("、"));
                } else {
                    let n = l.options.find(o => o.value == a.value[l.key]);
                    n && (r.value[l.key] = l.label + "：" + (n == null ? void 0 : n.label));
                }
                i();
            }
            function N() {
                r.value.activeText = "";
            }
            function q(l, n, o) {
                let u = r.value.activeText ? r.value.activeText.split("、") : [], b = "";
                l.code && l.code !== null && (b = l.code !== null ? `(${l.code})` : "");
                let y = ((l == null ? void 0 : l.name) || "") + b;
                u.indexOf(y) >= 0 ? u = u.filter(h => h !== y) : u.push(y), r.value.activeText = u.join("、");
            }
            const w = g(!1), ue = () => {
                z("handleGetDeptList", {
                    status: w.value ? "0" : ""
                });
            };
            return ye(() => {}), te({
                resetParams: E,
                resetParamsFile: function() {
                    a.value = {
                        keywords: ""
                    };
                },
                handleQuery: i,
                queryParams: a
            }), (l, n) => {
                const o = ve, u = be, b = ge, y = xe, h = Pe, I = Ve, P = _e, x = we, G = Ce;
                return d(), V("div", {
                    class: _([ t(de), t(ne) + "-search-box", c.inDialog ? "in-dialog" : "", c.borderBox ? "borderBox" : "" ])
                }, [ m.isShowInput ? (d(), p(u, {
                    key: 0,
                    size: "large",
                    modelValue: t(a)[m.keywordsInfo.key],
                    "onUpdate:modelValue": n[0] || (n[0] = e => t(a)[m.keywordsInfo.key] = e),
                    maxlength: "200",
                    placeholder: `\u8BF7\u8F93\u5165${m.keywordsInfo.label}`,
                    onKeyup: D(i, [ "enter" ]),
                    onClear: i,
                    onFocus: $,
                    onBlur: B,
                    class: _([ "left search-keywords !w-350px", t(v) ? "is-focus" : "" ]),
                    clearable: ""
                }, {
                    append: f(() => [ k(o, {
                        icon: "ep:search",
                        class: "pointer",
                        onClick: i
                    }) ]),
                    _: 1
                }, 8, [ "modelValue", "placeholder", "class" ])) : Q("", !0), W(l.$slots, "append", {}, void 0, !0), (d(!0), 
                V(X, null, Z(c.searchList, e => {
                    var A, J;
                    return d(), p(x, {
                        key: e.key,
                        class: "item",
                        effect: "dark",
                        content: (A = t(r)) != null && A[e.key] ? (J = t(r)) == null ? void 0 : J[e.key] : e.label,
                        disabled: !t(a)[e.key] && t(a)[e.key] !== 0 && !(e.label.length > 4) || e.multiple && (t(a)[e.key] || []).length === 0 || e.type === "input" || e.type === "number",
                        placement: "top"
                    }, {
                        default: f(() => [ e.type === "list" ? (d(), p(y, {
                            key: 0,
                            size: "large",
                            multiple: !!e.multiple,
                            onChange: s => M(e),
                            modelValue: t(a)[e.key],
                            "onUpdate:modelValue": s => t(a)[e.key] = s,
                            placeholder: e.label,
                            disabled: e.disabled,
                            clearable: e.clearable !== 0,
                            class: "left search-item ml-10px !w-98px",
                            style: U(`width: ${e.width}`)
                        }, {
                            default: f(() => [ (d(!0), V(X, null, Z(e.options, s => (d(), 
                            p(b, {
                                key: s.value,
                                label: s.label,
                                value: s.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 2
                        }, 1032, [ "multiple", "onChange", "modelValue", "onUpdate:modelValue", "placeholder", "disabled", "clearable", "style" ])) : e.type === "tree" ? (d(), 
                        p(h, {
                            key: 1,
                            onChange: s => H(e),
                            modelValue: t(a)[e.key],
                            "onUpdate:modelValue": s => t(a)[e.key] = s,
                            size: "large",
                            data: e.options,
                            "node-key": "value",
                            props: c.treeProps,
                            placeholder: e.label,
                            multiple: !!e.multiple,
                            "check-strictly": "",
                            "popper-class": "tree-select-popper",
                            "render-after-expand": !0,
                            class: "search-item",
                            clearable: "",
                            filterable: !!e.filterable,
                            "filter-node-method": Y,
                            onClear: N,
                            onNodeClick: q,
                            style: U(`width: ${e.width}`)
                        }, null, 8, [ "onChange", "modelValue", "onUpdate:modelValue", "data", "props", "placeholder", "multiple", "filterable", "style" ])) : e.type === "deptTree" ? (d(), 
                        p(h, {
                            key: 2,
                            onChange: s => H(e),
                            modelValue: t(a)[e.key],
                            "onUpdate:modelValue": s => t(a)[e.key] = s,
                            size: "large",
                            data: e.options,
                            "node-key": "value",
                            props: t(le),
                            placeholder: e.label,
                            multiple: !!e.multiple,
                            "check-strictly": "",
                            "popper-class": "tree-select-popper",
                            "render-after-expand": !0,
                            class: "search-item dept-tree-select",
                            clearable: "",
                            filterable: !!e.filterable,
                            "filter-node-method": Y,
                            onNodeClick: q,
                            onClear: N,
                            style: U(`width: ${e.width}`)
                        }, {
                            default: f(({
                                data: s
                            }) => [ L("div", j, [ ee(O(s.name) + O(s.code ? `\uFF08${s.code}\uFF09` : "") + " ", 1), k($e, {
                                tagCode: s.tagCode,
                                codeList: e.tagOptions,
                                class: "tag-box"
                            }, null, 8, [ "tagCode", "codeList" ]) ]) ]),
                            footer: f(() => [ F, k(I, {
                                size: "small",
                                "active-text": "是",
                                "inactive-text": "否",
                                modelValue: t(w),
                                "onUpdate:modelValue": n[1] || (n[1] = s => he(w) ? w.value = s : null),
                                "inline-prompt": "",
                                onChange: ue
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 2
                        }, 1032, [ "onChange", "modelValue", "onUpdate:modelValue", "data", "props", "placeholder", "multiple", "filterable", "style" ])) : e.type === "input" ? (d(), 
                        p(u, {
                            key: 3,
                            size: "large",
                            modelValue: t(a)[e.key],
                            "onUpdate:modelValue": s => t(a)[e.key] = s,
                            placeholder: `${[ e.label ]}`,
                            onKeyup: D(i, [ "enter" ]),
                            onFocus: $,
                            onBlur: B,
                            class: _([ [ "left search-keywords", t(v) ? "is-focus" : "" ], "search-input" ]),
                            clearable: "",
                            style: U(`width: ${e.width}`),
                            maxlength: e.maxLength ? e.maxLength : 999
                        }, {
                            append: f(() => [ k(o, {
                                icon: "ep:search",
                                class: "pointer",
                                onClick: i
                            }) ]),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue", "placeholder", "class", "style", "maxlength" ])) : e.type === "datetimerange" ? (d(), 
                        V("div", R, [ L("div", S, [ L("span", T, O(e.label) + "：", 1) ]), k(P, {
                            modelValue: t(a)[e.key],
                            "onUpdate:modelValue": s => t(a)[e.key] = s,
                            class: _([ "neu-date-picker", [ t(v) ? "is-focus" : "" ] ]),
                            type: "datetimerange",
                            size: "large",
                            "range-separator": "-",
                            "start-placeholder": "开始时间",
                            "end-placeholder": "结束时间",
                            "prefix-icon": t(fe),
                            style: {
                                width: "190px"
                            },
                            onChange: s => function(C) {
                                r.value[C.key] = C.label + "：" + (a.value[C.key] || [])[0] + "-" + (a.value[C.key] || [])[1], 
                                i();
                            }(e),
                            "value-format": "YYYY-MM-DD HH:mm:ss"
                        }, null, 8, [ "modelValue", "onUpdate:modelValue", "prefix-icon", "class", "onChange" ]) ])) : Q("", !0), e.type === "number" ? (d(), 
                        p(u, {
                            key: 5,
                            modelValue: t(a)[e.key],
                            "onUpdate:modelValue": s => t(a)[e.key] = s,
                            modelModifiers: {
                                trim: !0
                            },
                            maxlength: e.maxlength ?? "",
                            placeholder: `${[ e.label ]}`,
                            type: "number",
                            size: "large",
                            clearable: "",
                            onKeyup: D(i, [ "enter" ]),
                            onFocus: $,
                            onBlur: B,
                            class: _([ [ "left search-keywords", t(v) ? "is-focus" : "" ], "search-input" ])
                        }, null, 8, [ "modelValue", "onUpdate:modelValue", "maxlength", "placeholder", "class" ])) : (d(), 
                        V("span", K)) ]),
                        _: 2
                    }, 1032, [ "content", "disabled" ]);
                }), 128)), W(l.$slots, "default", {}, void 0, !0), k(G, {
                    class: "left super-btn reset-btn ml-10px",
                    size: "large",
                    onClick: E
                }, {
                    default: f(() => [ k(o, {
                        icon: "ep:refresh-right",
                        class: "mr-4px"
                    }), ee(" 重置 ") ]),
                    _: 1
                }) ], 2);
            };
        }
    }, [ [ "__scopeId", "data-v-11630381" ] ]);
});

export {
    ae as _,
    Oe as __tla
};