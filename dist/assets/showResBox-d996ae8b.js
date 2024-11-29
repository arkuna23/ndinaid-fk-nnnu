import {
    a as B,
    __tla as H
} from "./index.es-14d10e28.js";

import L, {
    __tla as S
} from "./audioRes-4990d161.js";

import W, {
    __tla as E
} from "./videoRes-b5d76951.js";

import N, {
    __tla as P
} from "./targetResource-ae17d1d5.js";

import {
    v as U,
    g as O,
    e as q,
    __tla as z
} from "./index-43a52aa3.js";

import {
    r as o,
    h as j,
    u as A,
    T as Z,
    a0 as F,
    f as G,
    n as J,
    E as K,
    g as M,
    o as c,
    c as u,
    a,
    k as d,
    t as Q,
    D as X,
    x as Y,
    __tla as $
} from "./index-6c08ea4c.js";

import {
    g as ee,
    __tla as ae
} from "./file-e038b35d.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as te
} from "./video-1d0dc730.js";

import {
    __tla as re
} from "./index-234b0463.js";

import {
    __tla as se
} from "./project-file-a2b4fd07.js";

let I, le = Promise.all([ (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return S;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return se;
    } catch {}
})() ]).then(async () => {
    let _, m, p, y, h;
    _ = {
        key: 0
    }, m = {
        key: 1
    }, p = {
        key: 2
    }, y = {
        key: 3,
        id: "ImageViewerBox"
    }, h = [ "src" ], I = {
        __name: "showResBox",
        props: {
            excessiveWidth: {
                type: Number,
                default: 0
            },
            excessiveHeight: {
                type: Number,
                default: 0
            },
            ImageViewerBoxHeight: {
                type: String,
                default: "100vh"
            }
        },
        emits: [ "checkOut" ],
        setup(g, {
            emit: w
        }) {
            const n = o(), v = o(), x = o(), T = j();
            A();
            const t = Z(), e = o({}), s = o(""), k = w, C = g, {
                excessiveWidth: R,
                excessiveHeight: b,
                ImageViewerBoxHeight: D
            } = F(C), V = () => {
                B({
                    options: {
                        title: !1,
                        navbar: !1,
                        keyboard: !1,
                        zIndex: 3500
                    },
                    images: [ s.value ]
                });
            };
            G(() => {
                t.params.u != T.getUser.id && window.close();
                var r = document.querySelector(".center-core");
                r && r.parentNode.removeChild(r), U({
                    teachCourseId: t.params.teachCourseId,
                    currentClassId: t.params.classId,
                    resId: t.params.resId
                }).then(l => {
                    l.status == 3 ? O({
                        teachCourseId: t.params.teachCourseId,
                        currentClassId: t.params.classId,
                        resId: t.params.resId
                    }).then(i => {
                        e.value = i, i.resType != 4 && i.resType != 1 || (async ie => {
                            s.value = await ee(e.value.dataId);
                        })(), i.resType == 2 && J(() => n.value.operation(e.value)), 
                        window.addEventListener("beforeunload", f);
                    }) : K.alert("该资源现在不可以学习", "提示", {
                        confirmButtonText: "确认"
                    }).then(i => {
                        t.name == "StudyResources" ? window.close() : k("checkOut", e.value);
                    });
                });
            });
            const f = async r => {
                if ([ 3, 4, 7 ].includes(e.value.resType)) {
                    try {
                        await q({
                            teachCourseId: t.params.teachCourseId,
                            currentClassId: t.params.classId,
                            resId: t.params.resId
                        });
                    } catch {}
                    r.preventDefault(), r.returnValue = "";
                } else if (e.value.resType == 1) {
                    try {
                        await v.value.onPause();
                    } catch {}
                    r.preventDefault(), r.returnValue = "";
                } else if (e.value.resType == 2) {
                    try {
                        await n.value.onPause();
                    } catch {}
                    r.preventDefault(), r.returnValue = "";
                }
            };
            return M(() => {
                window.removeEventListener("beforeunload", f);
            }), (r, l) => (c(), u("div", {
                style: Y({
                    height: a(e).resType == 4 ? a(D) : "auto"
                })
            }, [ [ 3, 7 ].includes(a(e).resType) ? (c(), u("div", _, [ d(N, {
                ref_key: "staticResRef",
                ref: x,
                resData: {
                    resType: String(a(e).resType),
                    eid: a(e).dataId
                }
            }, null, 8, [ "resData" ]) ])) : a(e).resType == 1 && a(s) ? (c(), u("div", m, [ d(W, {
                ref_key: "videoResRef",
                ref: v,
                resourceURL: a(s),
                eid: a(e).dataId,
                resInfo: a(e),
                excessiveWidth: a(R),
                excessiveHeight: a(b)
            }, null, 8, [ "resourceURL", "eid", "resInfo", "excessiveWidth", "excessiveHeight" ]) ])) : a(e).resType == 2 ? (c(), 
            u("div", p, [ d(L, {
                ref_key: "audioResRef",
                ref: n
            }, null, 512) ])) : a(e).resType == 4 && a(s) ? (c(), u("div", y, [ Q("img", {
                src: a(s),
                alt: "",
                style: {
                    cursor: "pointer",
                    "max-width": "100%"
                },
                onClick: V
            }, null, 8, h) ])) : X("", !0) ], 4));
        }
    };
});

export {
    le as __tla,
    I as default
};