import {
    d as W,
    r as n,
    A as X,
    a,
    o as y,
    c as B,
    k as w,
    l as f,
    v as H,
    t as e,
    B as _,
    C as Y,
    D as K,
    m as Z,
    n as $,
    J as ee,
    aU as ae,
    a9 as te,
    R as le,
    S as ie,
    __tla as se
} from "./index-6c08ea4c.js";

import {
    _ as re,
    __tla as ne
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    g as oe
} from "./file.data-794ea5d0.js";

import {
    g as ce,
    __tla as _e
} from "./index-95092119.js";

import {
    c as me,
    __tla as de
} from "./index-67f95b27.js";

import {
    f as pe,
    __tla as ue
} from "./formatTime-de6f1520.js";

import {
    l as fe,
    q as ve,
    h as ye,
    __tla as we
} from "./file-e038b35d.js";

import {
    _ as he
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ke
} from "./index.es-14d10e28.js";

import {
    __tla as Te
} from "./project-file-a2b4fd07.js";

import "./file_题-23882218.js";

let M, be = Promise.all([ (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return ne;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})() ]).then(async () => {
    let v, h, k, T, b, g, x, S, C, D, z, E, L, j, R, U;
    v = o => (le("data-v-0de445fc"), o = o(), ie(), o), h = {
        class: "preview-notice"
    }, k = {
        class: "preview-title"
    }, T = {
        class: "preview-info"
    }, b = {
        class: "preview-info-item"
    }, g = v(() => e("div", {
        class: "item-label"
    }, [ e("span", null, "发布时间：") ], -1)), x = {
        class: "item-value"
    }, S = {
        class: "preview-info-item"
    }, C = v(() => e("div", {
        class: "item-label"
    }, [ e("span", null, "发布人：") ], -1)), D = {
        class: "item-value"
    }, z = [ "innerHTML" ], E = {
        key: 0,
        class: "notice-file mt-5"
    }, L = {
        class: "notice-file__icon"
    }, j = [ "src" ], R = {
        class: "notice-file__name"
    }, U = [ "title" ], M = he(W({
        __name: "previewNotice",
        props: {
            isShowDownLoad: {
                type: Boolean,
                default: !0
            }
        },
        emits: [ "refresh" ],
        setup(o, {
            expose: P,
            emit: q
        }) {
            const A = o, F = q, I = n(), m = n(!1), c = n(!1), J = n("详情"), t = n({
                title: "",
                creator: "",
                content: "",
                isDownload: 0,
                sendTime: "",
                fileEid: ""
            }), l = n({
                fileSuffix: "",
                name: "",
                size: 0,
                eid: "",
                resType: "3"
            }), N = () => {}, G = () => {
                l.value = {}, F("refresh");
            }, O = async (d, i) => {
                let p = i === "private" ? me : ce;
                m.value = !0;
                try {
                    const s = await p({
                        id: d
                    });
                    if (t.value = s, t.value.sendTime = pe(s.sendTime), s.fileEid) {
                        const r = await ve(s.fileEid);
                        let u = r.objectKey.split(".");
                        $(() => {
                            l.value = {
                                name: r.objectKey,
                                size: r.fileSize,
                                eid: r.eid,
                                fileSuffix: u[u.length - 1].toUpperCase(),
                                resType: "3"
                            };
                        });
                    }
                    m.value = !1;
                } catch {
                    m.value = !1;
                }
            }, Q = async () => {
                await ye(t.value.fileEid, l.value.name);
            };
            return P({
                openDialog: ({
                    id: d,
                    from: i
                }) => {
                    c.value = !0, O(d, i);
                }
            }), (d, i) => {
                const p = ee, s = ae, r = re, u = te;
                return X((y(), B("div", h, [ w(s, {
                    modelValue: a(c),
                    "onUpdate:modelValue": i[1] || (i[1] = V => Z(c) ? c.value = V : null),
                    scroll: !0,
                    "max-height": 550,
                    title: a(J),
                    width: "1000",
                    onClose: G
                }, {
                    footer: f(() => [ w(p, {
                        type: "default",
                        onClick: i[0] || (i[0] = V => c.value = !1)
                    }, {
                        default: f(() => [ H("关闭") ]),
                        _: 1
                    }) ]),
                    default: f(() => [ e("div", k, [ e("span", null, _(a(t).title), 1) ]), e("div", T, [ e("div", b, [ g, e("div", x, [ e("span", null, _(a(t).sendTime), 1) ]) ]), e("div", S, [ C, e("div", D, [ e("span", null, _(a(t).creator), 1) ]) ]) ]), e("div", {
                        innerHTML: a(t).content,
                        style: {
                            "word-break": "break-all",
                            "white-space": "pre-wrap"
                        },
                        class: "editor-content-view description"
                    }, null, 8, z), a(l).eid ? (y(), B("div", E, [ e("div", L, [ e("img", {
                        src: a(oe)(a(l).name),
                        alt: "",
                        style: {
                            width: "32px"
                        }
                    }, null, 8, j) ]), e("div", R, [ e("span", {
                        title: a(l).name,
                        class: "file-name",
                        onClick: N
                    }, _(a(l).name) + "(" + _(a(fe)(a(l).size)) + ")", 9, U), a(t).isDownload == 1 && A.isShowDownLoad ? (y(), 
                    Y(p, {
                        key: 0,
                        type: "primary",
                        link: "",
                        style: {
                            "margin-left": "-3px"
                        },
                        onClick: Q
                    }, {
                        default: f(() => [ H("下载") ]),
                        _: 1
                    })) : K("", !0) ]) ])) : K("", !0) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]), w(r, {
                    ref_key: "ResourcePreviewRef",
                    ref: I
                }, null, 512) ])), [ [ u, a(m) ] ]);
            };
        }
    }), [ [ "__scopeId", "data-v-0de445fc" ] ]);
});

export {
    be as __tla,
    M as default
};