import {
    p as S,
    h as U,
    T as B,
    a0 as D,
    r as m,
    f as H,
    o as T,
    C as M,
    l as i,
    k as z,
    v as O,
    t as a,
    B as o,
    a as t,
    c as F,
    D as J,
    m as R,
    n as q,
    J as A,
    aU as G,
    R as K,
    S as Q,
    __tla as W
} from "./index-6c08ea4c.js";

import {
    l as X,
    h as Y,
    __tla as Z
} from "./file-e038b35d.js";

import {
    g as $
} from "./file.data-794ea5d0.js";

import {
    _ as aa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./file_题-23882218.js";

let P, ta = Promise.all([ (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})() ]).then(async () => {
    let r, d, f, u, p, _, h, v, y, w, b, g, k, C;
    r = {
        class: "dialog-content"
    }, d = {
        class: "title mt-25px"
    }, f = {
        class: "row2 mt-5"
    }, u = (s => (K("data-v-b175fff8"), s = s(), Q(), s))(() => a("span", {
        class: "label"
    }, "发布时间：", -1)), p = {
        class: "content"
    }, _ = [ "innerHTML" ], h = {
        key: 0,
        class: "file-list"
    }, v = {
        class: "file-list-item"
    }, y = {
        class: "flex items-center justify-left",
        style: {
            width: "55%"
        }
    }, w = {
        class: "file-list-item__icon"
    }, b = [ "src" ], g = {
        class: "file-list-item__name"
    }, k = [ "title" ], C = {
        class: "file-size"
    }, P = aa({
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
        setup(s, {
            expose: V,
            emit: ea
        }) {
            const j = s;
            S(), U(), B();
            const {
                announcementInfo: e,
                classInfo: sa
            } = D(j), l = m(!1), c = () => {
                l.value = !1;
            };
            m(null);
            const x = m("");
            return V({
                handleOpen: ({
                    row: I
                }) => {
                    l.value = !0, q(() => {
                        x.value = e.value.attachmentName.substring(e.value.attachmentName.lastIndexOf(".")).toLowerCase();
                    });
                },
                handleClose: c
            }), H(() => {}), (I, n) => {
                const L = A, E = G;
                return T(), M(E, {
                    modelValue: t(l),
                    "onUpdate:modelValue": n[1] || (n[1] = N => R(l) ? l.value = N : null),
                    width: "1000",
                    "close-on-click-modal": !1,
                    onClose: c,
                    appendToBody: !0,
                    title: "查看公告"
                }, {
                    footer: i(() => [ z(L, {
                        size: "large",
                        onClick: c
                    }, {
                        default: i(() => [ O("关闭") ]),
                        _: 1
                    }), z(L, {
                        size: "large",
                        type: "primary",
                        onClick: I.submitUploadForm
                    }, {
                        default: i(() => [ O("确 定") ]),
                        _: 1
                    }, 8, [ "onClick" ]) ]),
                    default: i(() => [ a("div", r, [ a("div", d, o(t(e).title), 1), a("div", f, [ u, a("span", p, o(t(e).publishTimeString), 1) ]), a("div", {
                        class: "wangEditorLinewrapPreView content-details",
                        innerHTML: t(e).content
                    }, null, 8, _), t(e).isDownload !== 1 && t(e).attachmentEid ? (T(), 
                    F("div", h, [ a("div", v, [ a("div", y, [ a("div", w, [ a("img", {
                        src: t($)(t(x) || ""),
                        alt: "",
                        style: {
                            width: "32px"
                        }
                    }, null, 8, b) ]), a("div", g, [ a("span", {
                        title: t(e).attachmentName,
                        class: "file-name"
                    }, o(t(e).attachmentName), 9, k), a("span", C, o(t(X)(t(e).attachmentSize || 0)), 1) ]), a("div", null, [ a("span", {
                        class: "download-info",
                        onClick: n[0] || (n[0] = N => t(Y)(t(e).attachmentEid, t(e).attachmentName))
                    }, "下载") ]) ]) ]) ])) : J("", !0) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-b175fff8" ] ]);
});

export {
    ta as __tla,
    P as default
};