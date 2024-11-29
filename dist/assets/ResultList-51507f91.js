import {
    _ as O,
    __tla as R
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    r as G,
    e as L,
    o as t,
    c as f,
    F as N,
    y as b,
    t as a,
    B as w,
    k as _,
    l as u,
    v as y,
    a as E,
    J as X,
    __tla as D
} from "./index-6c08ea4c.js";

import {
    _ as I,
    a as J,
    b as M,
    c as x,
    d as S,
    e as A,
    f as F,
    g as j,
    h as B,
    i as H,
    j as U,
    k as $,
    l as q,
    m as z,
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
    h as _s,
    __tla as ns
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

let d, ps = Promise.all([ (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return ns;
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
    let n, r, g, m, p;
    n = {
        class: "res-list"
    }, r = {
        class: "item-icon"
    }, g = [ "src" ], m = {
        class: "item-name"
    }, p = {
        class: "item-btns"
    }, d = rs({
        __name: "ResultList",
        props: {
            resList: {
                type: Array,
                default: () => []
            }
        },
        setup(P) {
            const T = P, o = G(), k = L(() => T.resList || []), v = e => {
                let l = "";
                return l = e.fileType !== "6" && e.fileName.lastIndexOf(".") > -1 ? e.fileName.slice(e.fileName.lastIndexOf(".") + 1).toUpperCase() : "PROJECT", 
                new URL(Object.assign({
                    "../../../../../assets/imgs/file/file_ACT.png": I,
                    "../../../../../assets/imgs/file/file_BMP.png": J,
                    "../../../../../assets/imgs/file/file_DOC.png": M,
                    "../../../../../assets/imgs/file/file_DOCX.png": x,
                    "../../../../../assets/imgs/file/file_GDS.png": S,
                    "../../../../../assets/imgs/file/file_GIF.png": A,
                    "../../../../../assets/imgs/file/file_HTML.png": F,
                    "../../../../../assets/imgs/file/file_JPEG.png": j,
                    "../../../../../assets/imgs/file/file_JPG.png": B,
                    "../../../../../assets/imgs/file/file_MD.png": H,
                    "../../../../../assets/imgs/file/file_MP3.png": U,
                    "../../../../../assets/imgs/file/file_MP4.png": $,
                    "../../../../../assets/imgs/file/file_OGG.png": q,
                    "../../../../../assets/imgs/file/file_OTHERS.png": z,
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
                const c = X, C = O;
                return t(), f("div", n, [ (t(!0), f(N, null, b(E(k), i => (t(), 
                f("div", {
                    class: "res-item",
                    key: i.id
                }, [ a("div", r, [ a("img", {
                    src: v(i),
                    alt: ""
                }, null, 8, g) ]), a("div", m, w(i.fileName), 1), a("div", p, [ _(c, {
                    link: "",
                    type: "primary",
                    onClick: h => (async s => {
                        await _s(s.fileEid, s.fileName);
                    })(i)
                }, {
                    default: u(() => [ y("下载") ]),
                    _: 2
                }, 1032, [ "onClick" ]), _(c, {
                    link: "",
                    type: "primary",
                    onClick: h => (s => {
                        s.fileType == "6" ? window.open(s.link, "_blank") : o.value.operation({
                            eid: s.fileEid,
                            resType: Number(s.fileType)
                        });
                    })(i)
                }, {
                    default: u(() => [ y("预览") ]),
                    _: 2
                }, 1032, [ "onClick" ]) ]) ]))), 128)), _(C, {
                    ref_key: "ResourcePreviewRef",
                    ref: o
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-9fbe2985" ] ]);
});

export {
    ps as __tla,
    d as default
};