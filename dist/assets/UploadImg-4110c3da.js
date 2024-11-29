import {
    d as M,
    az as a,
    e as G,
    r as $,
    a as d,
    o,
    C as K,
    aJ as N,
    D as u,
    dz as Q,
    k as m,
    ce as X,
    aO as Y,
    dA as Z,
    c as n,
    l as ee,
    z as ae,
    t as y,
    aI as q,
    ch as te,
    F as se,
    B as b,
    H as le,
    aa as oe,
    p as ie,
    _ as de,
    __tla as ne
} from "./index-6c08ea4c.js";

import {
    E as re,
    __tla as ce
} from "./el-image-viewer-2c0d56e4.js";

import {
    u as pe,
    __tla as ue
} from "./useUpload-b38510e8.js";

import {
    _ as me
} from "./_plugin-vue_export-helper-1b428a4d.js";

let L, fe = Promise.all([ (() => {
    try {
        return ne;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})() ]).then(async () => {
    const O = M({
        name: "ImageViewer",
        __name: "ImageViewer",
        props: {
            urlList: {
                type: Array,
                default: () => []
            },
            zIndex: a.number.def(200),
            initialIndex: a.number.def(0),
            infinite: a.bool.def(!0),
            hideOnClickModal: a.bool.def(!1),
            appendToBody: a.bool.def(!1),
            show: a.bool.def(!1)
        },
        setup(e) {
            const h = e, f = G(() => {
                const p = {
                    ...h
                };
                return delete p.show, p;
            }), r = $(h.show), c = () => {
                r.value = !1;
            };
            return (p, V) => {
                const _ = re;
                return d(r) ? (o(), K(_, N({
                    key: 0
                }, d(f), {
                    onClose: c
                }), null, 16)) : u("", !0);
            };
        }
    });
    let k = null, w, x, v, I, z, C, T;
    w = {
        class: "upload-box"
    }, x = [ "src" ], v = {
        key: 0
    }, I = {
        key: 0
    }, z = {
        key: 0
    }, C = {
        key: 1,
        class: "upload-empty"
    }, T = {
        class: "el-upload__tip"
    }, L = me(M({
        name: "UploadImg",
        __name: "UploadImg",
        props: {
            modelValue: a.string.def(""),
            drag: a.bool.def(!0),
            disabled: a.bool.def(!1),
            fileSize: a.number.def(5),
            fileType: a.array.def([ "image/jpeg", "image/png", "image/gif" ]),
            height: a.string.def("150px"),
            width: a.string.def("150px"),
            borderradius: a.string.def("8px"),
            showDelete: a.bool.def(!0),
            showBtnText: a.bool.def(!0)
        },
        emits: [ "update:modelValue" ],
        setup(e, {
            emit: h
        }) {
            Y(t => ({
                "598824f8": e.width,
                "7a72c929": e.height,
                "3d82be40": e.borderradius
            }));
            const f = e, {
                t: r
            } = oe(), c = ie(), p = $("id-" + Z()), V = t => {
                (function(s) {
                    if (!Q) return;
                    const {
                        urlList: l,
                        initialIndex: g = 0,
                        infinite: B = !0,
                        hideOnClickModal: H = !1,
                        appendToBody: J = !1,
                        zIndex: R = 2e3,
                        show: P = !0
                    } = s, i = {}, E = document.createElement("div");
                    i.urlList = l, i.initialIndex = g, i.infinite = B, i.hideOnClickModal = H, 
                    i.appendToBody = J, i.zIndex = R, i.show = P, document.body.appendChild(E), 
                    k = m(O, i), X(k, E);
                })({
                    zIndex: 9999999,
                    urlList: [ t ]
                });
            }, _ = h, S = () => {
                _("update:modelValue", "");
            }, {
                uploadUrl: D,
                httpRequest: U
            } = pe(), j = () => {
                const t = document.querySelector(`#${p.value} .el-upload__input`);
                t && t.dispatchEvent(new MouseEvent("click"));
            }, A = t => {
                const s = t.size / 1024 / 1024 < f.fileSize, l = f.fileType;
                return l.includes(t.type) || c.notifyWarning("上传图片不符合所需的格式！"), s || c.notifyWarning(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${f.fileSize}M\uFF01`), 
                l.includes(t.type) && s;
            }, W = t => {
                c.success("上传成功"), _("update:modelValue", t.data);
            }, F = () => {
                c.notifyError("图片上传失败，请您重新上传！");
            };
            return (t, s) => {
                const l = de, g = te;
                return o(), n("div", w, [ m(g, {
                    id: d(p),
                    accept: e.fileType.join(","),
                    action: d(D),
                    "before-upload": A,
                    class: ae([ "upload", e.drag ? "no-border" : "" ]),
                    drag: e.drag,
                    multiple: !1,
                    "on-error": F,
                    "on-success": W,
                    "show-file-list": !1,
                    "http-request": d(U)
                }, {
                    default: ee(() => [ e.modelValue ? (o(), n(se, {
                        key: 0
                    }, [ y("img", {
                        src: e.modelValue,
                        class: "upload-image"
                    }, null, 8, x), y("div", {
                        class: "upload-handle",
                        onClick: s[1] || (s[1] = le(() => {}, [ "stop" ]))
                    }, [ e.disabled ? u("", !0) : (o(), n("div", {
                        key: 0,
                        class: "handle-icon",
                        onClick: j
                    }, [ m(l, {
                        icon: "ep:edit"
                    }), e.showBtnText ? (o(), n("span", v, b(d(r)("action.edit")), 1)) : u("", !0) ])), y("div", {
                        class: "handle-icon",
                        onClick: s[0] || (s[0] = B => V(e.modelValue))
                    }, [ m(l, {
                        icon: "ep:zoom-in"
                    }), e.showBtnText ? (o(), n("span", I, b(d(r)("action.detail")), 1)) : u("", !0) ]), e.showDelete && !e.disabled ? (o(), 
                    n("div", {
                        key: 1,
                        class: "handle-icon",
                        onClick: S
                    }, [ m(l, {
                        icon: "ep:delete"
                    }), e.showBtnText ? (o(), n("span", z, b(d(r)("action.del")), 1)) : u("", !0) ])) : u("", !0) ]) ], 64)) : (o(), 
                    n("div", C, [ q(t.$slots, "empty", {}, () => [ m(l, {
                        icon: "ep:plus"
                    }) ], !0) ])) ]),
                    _: 3
                }, 8, [ "id", "accept", "action", "class", "drag", "http-request" ]), y("div", T, [ q(t.$slots, "tip", {}, void 0, !0) ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-7786dca0" ] ]);
});

export {
    L as _,
    fe as __tla
};