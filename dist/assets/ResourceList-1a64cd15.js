import {
    _ as h,
    __tla as O
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    r as R,
    e as D,
    o as t,
    c as f,
    F as G,
    y as L,
    t as a,
    B as N,
    k as n,
    l as u,
    v as d,
    a as b,
    z as w,
    J as E,
    __tla as X
} from "./index-6c08ea4c.js";

import {
    _ as I,
    a as J,
    b as M,
    c as S,
    d as x,
    e as B,
    f as A,
    g as F,
    h as j,
    i as z,
    j as H,
    k as U,
    l as $,
    m as q,
    n as Z,
    o as K,
    p as Q,
    q as V,
    r as W,
    s as Y,
    t as ss,
    u as es,
    v as is,
    w as as,
    x as ls,
    y as ts,
    z as fs
} from "./file_题-23882218.js";

import {
    h as ns,
    __tla as _s
} from "./file-e038b35d.js";

import {
    _ as rs
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as gs
} from "./index.es-14d10e28.js";

import {
    __tla as ms
} from "./project-file-a2b4fd07.js";

let y, ps = Promise.all([ (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return _s;
    } catch {}
})(), (() => {
    try {
        return gs;
    } catch {}
})(), (() => {
    try {
        return ms;
    } catch {}
})() ]).then(async () => {
    let _, r, g, m;
    _ = {
        class: "item-icon"
    }, r = [ "src" ], g = {
        class: "item-name"
    }, m = {
        class: "item-btns"
    }, y = rs({
        __name: "ResourceList",
        props: {
            resList: {
                type: Array,
                default: () => []
            },
            isDark: {
                type: Boolean,
                default: !1
            },
            isStudent: {
                type: Boolean,
                default: !1
            }
        },
        setup(P) {
            const p = P, o = R(), k = D(() => p.resList || []), T = e => {
                let l = "";
                return l = e.fileType !== "6" && e.fileName.lastIndexOf(".") > -1 ? e.fileName.slice(e.fileName.lastIndexOf(".") + 1).toUpperCase() : "PROJECT", 
                new URL(Object.assign({
                    "../../../../../assets/imgs/file/file_ACT.png": I,
                    "../../../../../assets/imgs/file/file_BMP.png": J,
                    "../../../../../assets/imgs/file/file_DOC.png": M,
                    "../../../../../assets/imgs/file/file_DOCX.png": S,
                    "../../../../../assets/imgs/file/file_GDS.png": x,
                    "../../../../../assets/imgs/file/file_GIF.png": B,
                    "../../../../../assets/imgs/file/file_HTML.png": A,
                    "../../../../../assets/imgs/file/file_JPEG.png": F,
                    "../../../../../assets/imgs/file/file_JPG.png": j,
                    "../../../../../assets/imgs/file/file_MD.png": z,
                    "../../../../../assets/imgs/file/file_MP3.png": H,
                    "../../../../../assets/imgs/file/file_MP4.png": U,
                    "../../../../../assets/imgs/file/file_OGG.png": $,
                    "../../../../../assets/imgs/file/file_OTHERS.png": q,
                    "../../../../../assets/imgs/file/file_PDF.png": Z,
                    "../../../../../assets/imgs/file/file_PNG.png": K,
                    "../../../../../assets/imgs/file/file_PPT.png": Q,
                    "../../../../../assets/imgs/file/file_PPTX.png": V,
                    "../../../../../assets/imgs/file/file_PROJECT.png": W,
                    "../../../../../assets/imgs/file/file_RAR.png": Y,
                    "../../../../../assets/imgs/file/file_TXT.png": ss,
                    "../../../../../assets/imgs/file/file_XLS.png": es,
                    "../../../../../assets/imgs/file/file_XLSX.png": is,
                    "../../../../../assets/imgs/file/file_ZIP.png": as,
                    "../../../../../assets/imgs/file/file_other.png": ls,
                    "../../../../../assets/imgs/file/file_卷.png": ts,
                    "../../../../../assets/imgs/file/file_题.png": fs
                })[`../../../../../assets/imgs/file/file_${l}.png`], self.location);
            };
            return (e, l) => {
                const c = E, v = h;
                return t(), f("div", {
                    class: w([ "res-list", p.isDark ? "isDark" : "" ])
                }, [ (t(!0), f(G, null, L(b(k), i => (t(), f("div", {
                    class: "res-item",
                    key: i.id
                }, [ a("div", _, [ a("img", {
                    src: T(i),
                    alt: ""
                }, null, 8, r) ]), a("div", g, N(i.fileName), 1), a("div", m, [ n(c, {
                    link: "",
                    type: "primary",
                    onClick: C => (async s => {
                        await ns(s.fileEid, s.fileName);
                    })(i)
                }, {
                    default: u(() => [ d("下载") ]),
                    _: 2
                }, 1032, [ "onClick" ]), n(c, {
                    link: "",
                    type: "primary",
                    onClick: C => (s => {
                        s.fileType == "6" ? window.open(s.link, "_blank") : o.value.operation({
                            eid: s.fileEid,
                            resType: Number(s.fileType)
                        });
                    })(i)
                }, {
                    default: u(() => [ d("预览") ]),
                    _: 2
                }, 1032, [ "onClick" ]) ]) ]))), 128)), n(v, {
                    ref_key: "ResourcePreviewRef",
                    ref: o
                }, null, 512) ], 2);
            };
        }
    }, [ [ "__scopeId", "data-v-12c5b91e" ] ]);
});

export {
    ps as __tla,
    y as default
};