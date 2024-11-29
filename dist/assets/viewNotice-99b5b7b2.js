import {
    d as q,
    r as c,
    a as e,
    o as k,
    c as z,
    k as O,
    l as r,
    v as d,
    t as s,
    B as _,
    A as R,
    G as X,
    D as j,
    m as F,
    n as K,
    J as N,
    aU as Q,
    R as W,
    S as Z,
    __tla as $
} from "./index-6c08ea4c.js";

import {
    _ as Y,
    a as ss,
    b as es,
    c as is,
    d as as,
    e as ls,
    f as ts,
    g as ns,
    h as fs,
    i as os,
    j as _s,
    k as ms,
    l as gs,
    m as cs,
    n as ps,
    o as rs,
    p as ds,
    q as us,
    r as vs,
    s as ws,
    t as ys,
    u as hs,
    v as Ts,
    w as Ps,
    x as xs,
    y as Ds,
    z as Ss
} from "./file_题-23882218.js";

import {
    g as bs,
    __tla as Cs
} from "./index-95092119.js";

import {
    f as Es,
    __tla as Gs
} from "./formatTime-de6f1520.js";

import {
    l as Ls,
    q as Ms,
    h as ks,
    __tla as zs
} from "./file-e038b35d.js";

import {
    _ as Os
} from "./_plugin-vue_export-helper-1b428a4d.js";

let H, Rs = Promise.all([ (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return Cs;
    } catch {}
})(), (() => {
    try {
        return Gs;
    } catch {}
})(), (() => {
    try {
        return zs;
    } catch {}
})() ]).then(async () => {
    let p, u, v, w, y, h, T, P, x, D, S, b, C, E, G, L, M;
    p = f => (W("data-v-9176374b"), f = f(), Z(), f), u = {
        key: 0,
        class: "view_notice"
    }, v = {
        class: "main_box pa-5"
    }, w = {
        class: "notice_title"
    }, y = {
        class: "flex"
    }, h = {
        class: "notice_time"
    }, T = p(() => s("span", null, "发布时间：", -1)), P = {
        class: "notice_creator"
    }, x = p(() => s("span", null, "发布人：", -1)), D = [ "innerHTML" ], S = {
        key: 0,
        class: "notice_files"
    }, b = {
        class: "w-100% flex items-center justify-left"
    }, C = {
        class: "file-list-item__icon"
    }, E = [ "src" ], G = {
        class: "file-list-item__name"
    }, L = {
        class: "flex items-center"
    }, M = [ "title" ], H = Os(q({
        __name: "viewNotice",
        props: {
            isShowDownLoad: {
                type: Boolean,
                default: !0
            }
        },
        setup(f, {
            expose: J
        }) {
            const U = f, t = c(!1), A = c("详情"), l = c({}), i = c({
                title: "",
                creator: "",
                content: "",
                isDownload: 0,
                sendTime: "",
                fileEid: ""
            }), B = async m => {
                const a = await bs({
                    id: m
                });
                if (i.value = a, i.value.sendTime = Es(a.sendTime), a.fileEid) {
                    const n = await Ms(a.fileEid);
                    let g = n.objectKey.split(".");
                    K(() => {
                        l.value = {
                            name: n.objectKey,
                            size: n.fileSize,
                            eid: n.eid,
                            fileSuffix: g[g.length - 1].toUpperCase()
                        };
                    });
                }
            }, I = async () => {
                await ks(i.value.fileEid, l.value.name);
            }, V = () => {
                l.value = {
                    name: ""
                };
            };
            return J({
                openDialog: m => {
                    t.value = !0, B(m);
                }
            }), (m, a) => {
                const n = N, g = Q;
                return e(t) ? (k(), z("div", u, [ O(g, {
                    modelValue: e(t),
                    "onUpdate:modelValue": a[1] || (a[1] = o => F(t) ? t.value = o : null),
                    scroll: !0,
                    "max-height": 550,
                    title: e(A),
                    width: "1000",
                    onClose: V
                }, {
                    footer: r(() => [ O(n, {
                        type: "default",
                        onClick: a[0] || (a[0] = o => t.value = !1)
                    }, {
                        default: r(() => [ d("关闭") ]),
                        _: 1
                    }) ]),
                    default: r(() => {
                        return [ s("div", v, [ s("div", w, _(e(i).title), 1), s("div", y, [ s("div", h, [ T, d(_(e(i).sendTime), 1) ]), s("div", P, [ x, d(_(e(i).creator), 1) ]) ]), s("div", {
                            class: "notice_content discription mb-5 mt-5",
                            innerHTML: e(i).content
                        }, null, 8, D), e(i).fileEid ? (k(), z("div", S, [ s("div", b, [ s("div", C, [ s("img", {
                            src: (o = e(l).fileSuffix, new URL(Object.assign({
                                "../../../assets/imgs/file/file_ACT.png": Y,
                                "../../../assets/imgs/file/file_BMP.png": ss,
                                "../../../assets/imgs/file/file_DOC.png": es,
                                "../../../assets/imgs/file/file_DOCX.png": is,
                                "../../../assets/imgs/file/file_GDS.png": as,
                                "../../../assets/imgs/file/file_GIF.png": ls,
                                "../../../assets/imgs/file/file_HTML.png": ts,
                                "../../../assets/imgs/file/file_JPEG.png": ns,
                                "../../../assets/imgs/file/file_JPG.png": fs,
                                "../../../assets/imgs/file/file_MD.png": os,
                                "../../../assets/imgs/file/file_MP3.png": _s,
                                "../../../assets/imgs/file/file_MP4.png": ms,
                                "../../../assets/imgs/file/file_OGG.png": gs,
                                "../../../assets/imgs/file/file_OTHERS.png": cs,
                                "../../../assets/imgs/file/file_PDF.png": ps,
                                "../../../assets/imgs/file/file_PNG.png": rs,
                                "../../../assets/imgs/file/file_PPT.png": ds,
                                "../../../assets/imgs/file/file_PPTX.png": us,
                                "../../../assets/imgs/file/file_PROJECT.png": vs,
                                "../../../assets/imgs/file/file_RAR.png": ws,
                                "../../../assets/imgs/file/file_TXT.png": ys,
                                "../../../assets/imgs/file/file_XLS.png": hs,
                                "../../../assets/imgs/file/file_XLSX.png": Ts,
                                "../../../assets/imgs/file/file_ZIP.png": Ps,
                                "../../../assets/imgs/file/file_other.png": xs,
                                "../../../assets/imgs/file/file_卷.png": Ds,
                                "../../../assets/imgs/file/file_题.png": Ss
                            })[`../../../assets/imgs/file/file_${o}.png`], self.location)),
                            alt: "",
                            style: {
                                width: "32px"
                            }
                        }, null, 8, E) ]), s("div", G, [ s("div", L, [ s("span", {
                            title: e(l).name,
                            class: "file-name"
                        }, _(e(l).name), 9, M), R(s("span", {
                            class: "file-size ml-2"
                        }, _(e(Ls)(e(l).size ?? 0)), 513), [ [ X, e(l).size >= 0 ] ]) ]), R(s("div", {
                            class: "download neu-pointer",
                            onClick: I
                        }, " 下载", 512), [ [ X, e(i).isDownload == 1 && U.isShowDownLoad == 1 ] ]) ]) ]) ])) : j("", !0) ]) ];
                        var o;
                    }),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ])) : j("", !0);
            };
        }
    }), [ [ "__scopeId", "data-v-9176374b" ] ]);
});

export {
    Rs as __tla,
    H as default
};