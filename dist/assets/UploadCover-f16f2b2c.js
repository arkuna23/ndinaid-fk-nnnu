import {
    p as $,
    a5 as B,
    r as d,
    w as E,
    f as T,
    o as f,
    c as v,
    t as c,
    k as V,
    l as q,
    a as o,
    z as g,
    D as A,
    C as G,
    F,
    y as H,
    ch as J,
    R as K,
    S as Q,
    __tla as W
} from "./index-6c08ea4c.js";

import {
    E as X,
    __tla as Y
} from "./el-image-0d184777.js";

import {
    __tla as Z
} from "./el-image-viewer-2c0d56e4.js";

import {
    b as aa,
    p as ea,
    a as la,
    __tla as ta
} from "./file-e038b35d.js";

import {
    _ as oa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as sa
} from "./throttle-1adeb119.js";

let L, na = Promise.all([ (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})() ]).then(async () => {
    let p, h, y, x, b, j, O, k;
    p = u => (K("data-v-0fbccbd7"), u = u(), Q(), u), h = {
        class: "left-upload"
    }, y = p(() => c("div", {
        class: "import-icon"
    }, null, -1)), x = p(() => c("div", {
        class: "el-upload__text px-10px"
    }, " 请将文件拖至此框内，或点击上传文件 ", -1)), b = {
        class: "right-choose"
    }, j = p(() => c("div", {
        class: "choose-desc"
    }, " 作为封面图片，支持.jpg、.jpeg、.png、.gif图片格式，像素大小建议640*360，可以在以下图片中选择，也可以自行上传。如不上传，默认使用系统图片。 ", -1)), 
    O = {
        class: "choose-imgs"
    }, k = [ "onClick" ], L = oa({
        __name: "UploadCover",
        props: {
            defaultId: {
                type: String,
                default: ""
            },
            isSmall: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "chooseCover" ],
        setup(u, {
            expose: R,
            emit: M
        }) {
            const I = $(), N = B.CancelToken, n = u, C = M, e = d(""), w = d(null), z = d(null), D = d(null), _ = d(!1);
            function P(l) {
                let r = !0, s = "";
                l.name.lastIndexOf(".") > -1 && (s = l.name.slice(l.name.lastIndexOf(".") + 1).toLowerCase());
                const t = [ "jpg", "jpeg", "png", "gif" ].indexOf(s) >= 0, a = l.size / 1024 / 1024;
                return t || (I.warning("只允许上传 .jpg/.jpeg/.png/.gif 文件!"), r = !1), 
                a >= 10 && (I.warning("文件大小限制 10 Mb!"), r = !1), r && function(i, U) {
                    e.value = URL.createObjectURL(i), w.value = i, _.value = !0, 
                    C("chooseCover", {
                        type: "file",
                        file: i,
                        revoke: m
                    });
                }(l), !1;
            }
            function m() {
                o(e) && (e + "").length !== 1 && (URL.revokeObjectURL(o(e)), e.value = "");
            }
            function S() {
                [ "1", "2", "3", "4" ].indexOf(n.defaultId + "") >= 0 ? e.value = n.defaultId : n.defaultId && [ "1", "2", "3", "4" ].indexOf(n.defaultId + "") < 0 && async function(l) {
                    e.value = l;
                }(n.defaultId);
            }
            return E(() => n.defaultId, l => {
                S();
            }), R({
                revokeObjUrl: m,
                uploadNow: async function() {
                    return new Promise((l, r) => {
                        if (o(_)) {
                            const s = new FormData();
                            s.append("file", o(w)), s.append("source", aa), ea(s, t => {
                                const {
                                    loaded: a,
                                    total: i
                                } = t;
                                z.value = Number((100 * Number(a / i)).toFixed());
                            }, new N(function(t) {
                                D.value = t;
                            })).then(async t => {
                                const a = t.data;
                                a.errorFlag === "0" || a.errorFlag === "2" ? (l(a == null ? void 0 : a.eid), 
                                m()) : r("上传失败，请重新上传");
                            }).catch(() => {
                                r("上传失败，请重新上传");
                            });
                        } else l(e.value || Math.ceil(4 * Math.random()));
                    });
                }
            }), T(() => {
                S();
            }), (l, r) => {
                const s = X, t = J;
                return f(), v("div", {
                    class: g([ "upload-cont", n.isSmall ? "isSmall" : "" ])
                }, [ c("div", h, [ V(t, {
                    class: "upload-demo",
                    action: "#",
                    multiple: "",
                    drag: "",
                    limit: 1,
                    accept: ".jpg,.jpeg,.png,.gif",
                    "before-upload": P
                }, {
                    default: q(() => {
                        return [ [ "1", "2", "3", "4" ].indexOf(o(e)) >= 0 ? (f(), 
                        v("div", {
                            key: 0,
                            class: g([ "upload-img", `project-default-cover-${o(e)}` ])
                        }, null, 2)) : A("", !0), o(e) && [ "1", "2", "3", "4" ].indexOf(o(e)) < 0 ? (f(), 
                        G(s, {
                            key: 1,
                            src: (a = o(e), [ "1", "2", "3", "4" ].indexOf(a) >= 0 || a.indexOf("blob") >= 0 ? a : la(a)),
                            class: "upload-img",
                            fit: "cover"
                        }, null, 8, [ "src" ])) : (f(), v(F, {
                            key: 2
                        }, [ y, x ], 64)) ];
                        var a;
                    }),
                    _: 1
                }) ]), c("div", b, [ j, c("div", O, [ (f(), v(F, null, H(4, a => c("div", {
                    key: "cover" + a,
                    onClick: i => function(U) {
                        m(), _.value = !1, e.value = U + "", C("chooseCover", {
                            type: "default",
                            url: e.value
                        });
                    }(a),
                    class: g(`choose-img project-default-cover-${a}`)
                }, null, 10, k)), 64)) ]) ]) ], 2);
            };
        }
    }, [ [ "__scopeId", "data-v-0fbccbd7" ] ]);
});

export {
    na as __tla,
    L as default
};