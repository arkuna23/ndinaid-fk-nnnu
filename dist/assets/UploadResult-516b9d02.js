import {
    r as g,
    e as N,
    f as w,
    A as o,
    a as c,
    o as d,
    c as u,
    t as a,
    k as n,
    l as P,
    G as b,
    F as B,
    y as F,
    B as z,
    v as x,
    z as U,
    p as j,
    ch as Z,
    J as $,
    a9 as q,
    R as V,
    S as W,
    __tla as K
} from "./index-6c08ea4c.js";

import {
    _ as Q,
    __tla as Y
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    _ as ss,
    a as es,
    b as as,
    c as is,
    d as ls,
    e as ts,
    f as fs,
    g as ns,
    h as rs,
    i as ms,
    j as _s,
    k as ps,
    l as gs,
    m as os,
    n as cs,
    o as ds,
    p as us,
    q as Ps,
    r as ys,
    s as vs,
    t as Ts,
    u as Rs,
    v as Os,
    w as Gs,
    x as Ss,
    y as ks,
    z as Cs
} from "./file_题-23882218.js";

import {
    u as Ds,
    __tla as Xs
} from "./file-e038b35d.js";

import {
    _ as hs
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ms
} from "./index.es-14d10e28.js";

import {
    __tla as bs
} from "./project-file-a2b4fd07.js";

let L, xs = Promise.all([ (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return Xs;
    } catch {}
})(), (() => {
    try {
        return Ms;
    } catch {}
})(), (() => {
    try {
        return bs;
    } catch {}
})() ]).then(async () => {
    let r, y, v, T, R, O, G, S, k;
    r = l => (V("data-v-2cbbd03f"), l = l(), W(), l), y = {
        class: "px-10px"
    }, v = {
        class: "import-input"
    }, T = r(() => a("div", {
        class: "import-icon"
    }, null, -1)), R = r(() => a("div", {
        class: "el-upload__text"
    }, " 请将文件拖至此框内，或点击上传文件 ", -1)), O = {
        class: "item-icon"
    }, G = [ "src" ], S = {
        class: "item-name"
    }, k = {
        class: "item-btns"
    }, L = hs({
        __name: "UploadResult",
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
        emits: [ "createResult", "deleteResult" ],
        setup(l, {
            emit: E
        }) {
            j();
            const C = E, t = l, m = g(!1), D = g(50), X = g(), h = N(() => t.resList || []), I = s => {
                let e = "";
                if (s.fileType !== "6") if (s.fileName.lastIndexOf(".") > -1) {
                    let i = s.fileName.slice(s.fileName.lastIndexOf(".") + 1).toUpperCase();
                    e = [ "ACT", "BMP", "DOC", "DOCX", "GDS", "GIF", "HTML", "JPEG", "JPG", "MD", "MP3", "MP4", "OGG", "PDF", "PNG", "PPT", "PPTX", "RAR", "TXT", "XLS", "XLSX", "ZIP" ].includes(i) ? i : "OTHERS";
                } else e = "OTHERS"; else e = "OTHERS";
                return new URL(Object.assign({
                    "../../../../../assets/imgs/file/file_ACT.png": ss,
                    "../../../../../assets/imgs/file/file_BMP.png": es,
                    "../../../../../assets/imgs/file/file_DOC.png": as,
                    "../../../../../assets/imgs/file/file_DOCX.png": is,
                    "../../../../../assets/imgs/file/file_GDS.png": ls,
                    "../../../../../assets/imgs/file/file_GIF.png": ts,
                    "../../../../../assets/imgs/file/file_HTML.png": fs,
                    "../../../../../assets/imgs/file/file_JPEG.png": ns,
                    "../../../../../assets/imgs/file/file_JPG.png": rs,
                    "../../../../../assets/imgs/file/file_MD.png": ms,
                    "../../../../../assets/imgs/file/file_MP3.png": _s,
                    "../../../../../assets/imgs/file/file_MP4.png": ps,
                    "../../../../../assets/imgs/file/file_OGG.png": gs,
                    "../../../../../assets/imgs/file/file_OTHERS.png": os,
                    "../../../../../assets/imgs/file/file_PDF.png": cs,
                    "../../../../../assets/imgs/file/file_PNG.png": ds,
                    "../../../../../assets/imgs/file/file_PPT.png": us,
                    "../../../../../assets/imgs/file/file_PPTX.png": Ps,
                    "../../../../../assets/imgs/file/file_PROJECT.png": ys,
                    "../../../../../assets/imgs/file/file_RAR.png": vs,
                    "../../../../../assets/imgs/file/file_TXT.png": Ts,
                    "../../../../../assets/imgs/file/file_XLS.png": Rs,
                    "../../../../../assets/imgs/file/file_XLSX.png": Os,
                    "../../../../../assets/imgs/file/file_ZIP.png": Gs,
                    "../../../../../assets/imgs/file/file_other.png": Ss,
                    "../../../../../assets/imgs/file/file_卷.png": ks,
                    "../../../../../assets/imgs/file/file_题.png": Cs
                })[`../../../../../assets/imgs/file/file_${e}.png`], self.location);
            };
            function A(s) {
                let e = !0;
                return s.name.lastIndexOf(".") > -1 && s.name.slice(s.name.lastIndexOf(".") + 1).toLowerCase(), 
                s.size / 1024 / 1024 >= D.value && (proxy.$modal.msgError("文件大小限制 " + D.value + " Mb!"), 
                e = !1), e && t.isStudent && async function(i, _) {
                    m.value = !0;
                    try {
                        const p = await Ds(i);
                        C("createResult", p, () => {
                            m.value = !1;
                        });
                    } catch {}
                }(s), !1;
            }
            return w(() => {}), (s, e) => {
                const i = Z, _ = $, p = Q, H = q;
                return o((d(), u("div", y, [ o(a("div", v, [ n(i, {
                    class: "upload-demo",
                    action: "#",
                    limit: 1,
                    multiple: "",
                    drag: "",
                    "before-upload": A,
                    disabled: !t.isStudent
                }, {
                    default: P(() => [ T, R ]),
                    _: 1
                }, 8, [ "disabled" ]) ], 512), [ [ b, c(h).length === 0 ] ]), a("div", {
                    class: U([ "res-list", t.isDark ? "isDark" : "" ])
                }, [ (d(!0), u(B, null, F(c(h), f => (d(), u("div", {
                    class: "res-item is-active",
                    key: f.id
                }, [ a("div", O, [ a("img", {
                    src: I(f),
                    alt: ""
                }, null, 8, G) ]), a("div", S, z(f.fileName), 1), a("div", k, [ n(_, {
                    link: "",
                    type: "primary",
                    onClick: J => (M => {
                        X.value.operation({
                            eid: M.fileEid,
                            resType: M.fileType
                        });
                    })(f)
                }, {
                    default: P(() => [ x("预览") ]),
                    _: 2
                }, 1032, [ "onClick" ]), o(n(_, {
                    link: "",
                    type: "danger",
                    onClick: J => {
                        C("deleteResult", f);
                    }
                }, {
                    default: P(() => [ x("删除") ]),
                    _: 2
                }, 1032, [ "onClick" ]), [ [ b, t.isStudent ] ]) ]) ]))), 128)), n(p, {
                    ref_key: "ResourcePreviewRef",
                    ref: X
                }, null, 512) ], 2) ])), [ [ H, c(m) ] ]);
            };
        }
    }, [ [ "__scopeId", "data-v-2cbbd03f" ] ]);
});

export {
    xs as __tla,
    L as default
};