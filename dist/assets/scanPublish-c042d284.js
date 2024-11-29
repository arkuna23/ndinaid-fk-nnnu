import {
    e as G,
    p as Q,
    h as W,
    T as X,
    a0 as Z,
    r as p,
    f as $,
    o as e,
    C as H,
    l as m,
    k as aa,
    v as f,
    t as a,
    B as l,
    a as t,
    c as n,
    F as ta,
    y as sa,
    D as h,
    m as ea,
    n as la,
    K as na,
    J as ia,
    aU as ca,
    R as oa,
    S as ma,
    __tla as da
} from "./index-6c08ea4c.js";

import {
    l as ra,
    h as ua,
    __tla as pa
} from "./file-e038b35d.js";

import {
    g as fa
} from "./file.data-794ea5d0.js";

import {
    _ as ha
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./file_题-23882218.js";

let M, _a = Promise.all([ (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})() ]).then(async () => {
    let r, _, v, y, w, k, b, g, C, I, x, N, T, L, O, S, V, j, z, E, P;
    r = i => (oa("data-v-2460b2c2"), i = i(), ma(), i), _ = {
        class: "dialog-content"
    }, v = {
        class: "title mt-25px"
    }, y = {
        class: "row2 mt-5"
    }, w = r(() => a("span", {
        class: "label"
    }, "发布时间：", -1)), k = {
        class: "content"
    }, b = {
        key: 0
    }, g = r(() => a("span", {
        class: "label ml-15"
    }, "发布范围：", -1)), C = {
        key: 0,
        class: "content"
    }, I = {
        class: "class-detail"
    }, x = {
        style: {
            color: "#245fe6"
        }
    }, N = [ "innerHTML" ], T = {
        key: 0,
        class: "file-list"
    }, L = {
        class: "file-list-item"
    }, O = {
        class: "flex items-center justify-left",
        style: {
            width: "55%"
        }
    }, S = {
        class: "file-list-item__icon"
    }, V = [ "src" ], j = {
        class: "file-list-item__name"
    }, z = [ "title" ], E = {
        class: "file-size"
    }, P = {
        key: 0
    }, M = ha({
        __name: "scanPublish",
        props: {
            announcementInfo: {
                type: Object,
                default: () => ({})
            },
            classInfo: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "refreshList" ],
        setup(i, {
            expose: U,
            emit: va
        }) {
            const F = i, J = G(() => K.isStudent);
            Q();
            const K = W();
            X();
            const {
                announcementInfo: s,
                classInfo: B
            } = Z(F), c = p(!1), u = () => {
                c.value = !1;
            };
            p(null);
            const D = p("");
            return U({
                handleOpen: ({
                    row: R
                }) => {
                    c.value = !0, la(() => {
                        D.value = s.value.attachmentName.substring(s.value.attachmentName.lastIndexOf(".")).toLowerCase();
                    });
                },
                handleClose: u
            }), $(() => {}), (R, d) => {
                const Y = na, q = ia, A = ca;
                return e(), H(A, {
                    modelValue: t(c),
                    "onUpdate:modelValue": d[1] || (d[1] = o => ea(c) ? c.value = o : null),
                    width: "1000",
                    "close-on-click-modal": !1,
                    onClose: u,
                    appendToBody: !0,
                    title: "查看公告"
                }, {
                    footer: m(() => [ aa(q, {
                        size: "large",
                        onClick: u
                    }, {
                        default: m(() => [ f("关闭") ]),
                        _: 1
                    }) ]),
                    default: m(() => [ a("div", _, [ a("div", v, l(t(s).title), 1), a("div", y, [ a("div", null, [ w, a("span", k, l(t(s).publishTimeString), 1) ]), t(J) ? h("", !0) : (e(), 
                    n("div", b, [ g, t(s).scope === 0 ? (e(), n("span", C, "当前班级")) : (e(), 
                    H(Y, {
                        key: 1,
                        placement: "top",
                        effect: "light"
                    }, {
                        content: m(() => [ a("ul", I, [ (e(!0), n(ta, null, sa(t(B).list, o => (e(), 
                        n("li", {
                            key: o.teachClassId
                        }, l(o.teachClassName), 1))), 128)) ]) ]),
                        default: m(() => [ a("span", null, [ f("全部班级（ "), a("span", x, l(t(B).count), 1), f(" ） ") ]) ]),
                        _: 1
                    })) ])) ]), a("div", {
                        class: "wangEditorLinewrapPreView content-details",
                        innerHTML: t(s).content
                    }, null, 8, N), t(s).attachmentEid ? (e(), n("div", T, [ a("div", L, [ a("div", O, [ a("div", S, [ a("img", {
                        src: t(fa)(t(D) || ""),
                        alt: "",
                        style: {
                            width: "32px"
                        }
                    }, null, 8, V) ]), a("div", j, [ a("span", {
                        title: t(s).attachmentName,
                        class: "file-name"
                    }, l(t(s).attachmentName), 9, z), a("span", E, l(t(ra)(t(s).attachmentSize || 0)), 1) ]), t(s).isDownload === 1 ? (e(), 
                    n("div", P, [ a("span", {
                        class: "download-info",
                        onClick: d[0] || (d[0] = o => t(ua)(t(s).attachmentEid, t(s).attachmentName))
                    }, "下载") ])) : h("", !0) ]) ]) ])) : h("", !0) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-2460b2c2" ] ]);
});

export {
    _a as __tla,
    M as default
};