import {
    e as X,
    r as o,
    w as Y,
    f as ee,
    o as V,
    c as F,
    t as d,
    k as u,
    a as t,
    m,
    l as g,
    z as ae,
    F as le,
    y as te,
    C as se,
    v as oe,
    B as H,
    n as I,
    ak as de,
    _ as ue,
    P as ne,
    ab as ce,
    ac as re,
    Z as pe,
    R as ie,
    S as me,
    __tla as ve
} from "./index-6c08ea4c.js";

import {
    __tla as _e
} from "./dict-c5825220.js";

import {
    d as he,
    h as xe
} from "./tree-05ea8e09.js";

import {
    a as fe,
    g as ye,
    __tla as Ve
} from "./index-7c75bd27.js";

import ge, {
    __tla as Ce
} from "./DeptTag-1be092ce.js";

import {
    _ as ke
} from "./_plugin-vue_export-helper-1b428a4d.js";

let M, be = Promise.all([ (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})() ]).then(async () => {
    let c, C, k, b, w, z, U, K, R, L;
    c = r => (ie("data-v-4943ab13"), r = r(), me(), r), C = {
        class: "identitys-choose-box w-100%"
    }, k = c(() => d("div", {
        class: "identitys-choose-header"
    }, "选择组织机构", -1)), b = {
        class: "switchs"
    }, w = c(() => d("span", {
        class: "ml-20px mr-10px"
    }, "全选", -1)), z = c(() => d("span", {
        class: "ml-20px mr-10px"
    }, "展开/折叠", -1)), U = c(() => d("span", {
        class: "ml-20px mr-10px"
    }, "仅查看启用组织", -1)), K = {
        class: "env-types-group px-20px py-16px"
    }, R = {
        class: "pb-10px"
    }, L = {
        class: "tree-item"
    }, M = ke({
        __name: "ChooseDept",
        props: {
            modelValue: {
                default: () => [],
                type: Array
            }
        },
        emits: [ "update:modelValue" ],
        setup(r, {
            expose: N,
            emit: Z
        }) {
            const $ = Z, j = r, P = X({
                get: () => j.modelValue,
                set: e => {
                    $("update:modelValue", e);
                }
            }), v = o(!0), f = o([]), y = o([]), p = o(!0), n = o(), _ = o(!1), i = o(""), h = o(""), x = o(!1);
            Y(() => i.value, e => {
                S();
            });
            const S = () => {
                var e;
                (e = n.value) == null || e.filter({
                    value: i.value,
                    tagCode: h.value
                });
            }, q = ({
                value: e,
                tagCode: a
            }, s) => (!a || a === s.tagCode) && (!e || s.name.includes(e)), E = () => {
                x.value = !0, I(() => {
                    var e;
                    (e = n.value) == null || e.setCheckedNodes(_.value ? y.value : []), 
                    x.value = !1, A();
                });
            }, G = () => {
                var a;
                const e = (a = n.value) == null ? void 0 : a.store.nodesMap;
                for (let s in e) e[s].expanded !== p.value && (e[s].expanded = p.value);
            };
            function A() {
                let e = n.value.getCheckedKeys(!1), a = n.value.getHalfCheckedKeys();
                P.value = [ ...e, ...a ];
            }
            const B = async () => {
                y.value = xe(await fe({
                    status: v.value ? "0" : ""
                }));
            }, D = async () => {
                await B(), f.value = await ye(), I(() => {
                    var a;
                    var e;
                    x.value = !1, e = t(P), (a = n.value) == null || a.setCheckedKeys(e);
                });
            };
            return N({
                initCom: D
            }), ee(() => {
                D();
            }), (e, a) => {
                const s = de, J = ue, O = ne, Q = ce, T = re, W = pe;
                return V(), F("div", C, [ k, d("div", b, [ w, u(s, {
                    modelValue: t(_),
                    "onUpdate:modelValue": a[0] || (a[0] = l => m(_) ? _.value = l : null),
                    size: "default",
                    "active-text": "是",
                    "inactive-text": "否",
                    "inline-prompt": "",
                    onChange: E
                }, null, 8, [ "modelValue" ]), z, u(s, {
                    size: "default",
                    modelValue: t(p),
                    "onUpdate:modelValue": a[1] || (a[1] = l => m(p) ? p.value = l : null),
                    "active-text": "展开",
                    "inactive-text": "折叠",
                    "inline-prompt": "",
                    onChange: G
                }, null, 8, [ "modelValue" ]), U, u(s, {
                    size: "default",
                    "active-text": "是",
                    "inactive-text": "否",
                    modelValue: t(v),
                    "onUpdate:modelValue": a[2] || (a[2] = l => m(v) ? v.value = l : null),
                    "inline-prompt": "",
                    onChange: B
                }, null, 8, [ "modelValue" ]) ]), d("div", K, [ d("div", R, [ u(O, {
                    size: "large",
                    modelValue: t(i),
                    "onUpdate:modelValue": a[3] || (a[3] = l => m(i) ? i.value = l : null),
                    placeholder: "请输入组织名称",
                    class: ae([ "search-keywords !w-250px" ]),
                    clearable: ""
                }, {
                    append: g(() => [ u(J, {
                        icon: "ep:search",
                        class: "pointer"
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]), u(T, {
                    size: "large",
                    multiple: !1,
                    onChange: S,
                    modelValue: t(h),
                    "onUpdate:modelValue": a[4] || (a[4] = l => m(h) ? h.value = l : null),
                    placeholder: "组织类别",
                    clearable: "",
                    class: "search-item ml-10px !w-96px"
                }, {
                    default: g(() => [ (V(!0), F(le, null, te(t(f), l => (V(), se(Q, {
                        key: l.id,
                        label: l.name,
                        value: l.code
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), u(W, {
                    ref_key: "treeRef",
                    ref: n,
                    "check-strictly": !t(x),
                    data: t(y),
                    props: t(he),
                    "default-expand-all": "",
                    onCheck: A,
                    "empty-text": "暂无数据",
                    "node-key": "id",
                    "show-checkbox": "",
                    "filter-node-method": q,
                    class: "dept-tree-select"
                }, {
                    default: g(({
                        data: l
                    }) => [ d("div", L, [ oe(H(l.name) + H(l.code ? `\uFF08${l.code}\uFF09` : "") + " ", 1), u(ge, {
                        tagCode: l.tagCode,
                        codeList: t(f),
                        class: "tag-box"
                    }, null, 8, [ "tagCode", "codeList" ]) ]) ]),
                    _: 1
                }, 8, [ "check-strictly", "data", "props" ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-4943ab13" ] ]);
});

export {
    be as __tla,
    M as default
};