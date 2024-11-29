import {
    d as w,
    r as a,
    u as x,
    f as b,
    o,
    c as n,
    k,
    l as g,
    D as N,
    a6 as p,
    aU as D,
    __tla as O
} from "./index-6c08ea4c.js";

import {
    g as V,
    q,
    h as m,
    __tla as P
} from "./file-e038b35d.js";

import {
    a as R,
    __tla as U
} from "./index.es-14d10e28.js";

import {
    p as _,
    a as z,
    __tla as C
} from "./project-file-a2b4fd07.js";

let v, K = Promise.all([ (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return C;
    } catch {}
})() ]).then(async () => {
    let c, u;
    c = {
        key: 0,
        class: "pre-box"
    }, u = [ "src" ], v = w({
        __name: "index",
        setup($, {
            expose: T
        }) {
            const y = a(), f = x(), i = a({
                resType: "",
                resName: "",
                eid: ""
            }), r = a({
                startTime: 0,
                projectId: "",
                id: ""
            }), I = a([ 1, 3, 7 ]), l = a(!1), s = a("");
            a(!1);
            const h = () => {
                const e = {
                    ...r.value
                };
                e.startTime && _({
                    projectId: e.projectId,
                    fileId: i.value.id,
                    startTime: e.startTime,
                    endTime: p(new Date()).valueOf(),
                    valid: !0
                });
            };
            return b(() => {}), T({
                operation: async e => {
                    if (Object.assign(i.value, e), I.value.includes(e.resType)) {
                        const {
                            href: t
                        } = f.resolve({
                            name: "ResourcesPreviewIndex",
                            query: {
                                eid: e.eid,
                                resType: e.resType,
                                startTime: e.startTime,
                                projectId: e.projectId,
                                id: e.id
                            }
                        });
                        window.open(t, "_blank");
                    } else s.value = await V(e.eid), e.resType == "6" ? window.open(e.eid) : e.resType == "2" ? (l.value = !0, 
                    r.value.startTime = e.startTime, r.value.projectId = e.projectId, 
                    r.value.id = e.id) : e.resType == "4" ? R({
                        options: {
                            title: !1,
                            navbar: !1,
                            zIndex: 3500,
                            hidden: () => {
                                e.startTime && _({
                                    projectId: e.projectId,
                                    fileId: e.id,
                                    startTime: e.startTime,
                                    endTime: p(new Date()).valueOf(),
                                    valid: !0
                                });
                            }
                        },
                        images: [ s.value ]
                    }) : q(e.eid).then(async t => {
                        const d = t.objectKey;
                        e.resName ? await m(e.eid, `${e.resName}`) : await m(e.eid, d), 
                        e.startTime && z({
                            projectId: e.projectId,
                            fileId: e.id,
                            valid: !0
                        });
                    });
                }
            }), (e, t) => {
                const d = D;
                return o(), n("div", null, [ k(d, {
                    modelValue: l.value,
                    "onUpdate:modelValue": t[0] || (t[0] = j => l.value = j),
                    title: i.value.resName || "音频预览",
                    width: "570",
                    onClose: h
                }, {
                    default: g(() => [ s.value ? (o(), n("span", c, [ (o(), n("audio", {
                        key: s.value,
                        ref_key: "audioRef",
                        ref: y,
                        controls: "",
                        style: {
                            width: "100%",
                            height: "45px"
                        },
                        src: s.value,
                        controlslist: "nodownload"
                    }, null, 8, u)) ])) : N("", !0) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    });
});

export {
    v as _,
    K as __tla
};