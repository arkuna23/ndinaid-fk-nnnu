import {
    r as i,
    o as t,
    c as n,
    k as y,
    l as x,
    t as e,
    v as me,
    D as ie,
    F as P,
    y as j,
    z as fe,
    C as M,
    B as c,
    bo as b,
    _ as he,
    K as ge,
    R as _e,
    S as ke,
    __tla as xe
} from "./index-6c08ea4c.js";

import {
    E as be,
    __tla as Ce
} from "./el-drawer-fca4d971.js";

import {
    _ as we,
    __tla as Be
} from "./index-da0e4c45.js";

import {
    a as Ie,
    b as Pe,
    __tla as je
} from "./code-a0d24f62.js";

import {
    d as Me
} from "./base64-a4536364.js";

import {
    _ as Se
} from "./_plugin-vue_export-helper-1b428a4d.js";

let ce, Ee = Promise.all([ (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})() ]).then(async () => {
    let C, S, E, L, O, V, z, D, R, T, A, F, K, U, $, q, G, H, J, N, Q, W, X, Y, Z, ee, ae, le, te;
    C = m => (_e("data-v-e174bd3e"), m = m(), ke(), m), S = {
        class: "code-container"
    }, E = {
        class: "left-menu"
    }, L = {
        class: "file-list"
    }, O = [ "onClick" ], V = [ "title" ], z = C(() => e("div", {
        style: {
            height: "105%",
            width: "26px",
            margin: "-20px 0",
            background: "linear-gradient(90deg, rgba(216,216,216,0.22) 0%, rgba(216,216,216,0.00) 99%)"
        }
    }, null, -1)), D = {
        class: "right-container"
    }, R = {
        class: "code-header"
    }, T = {
        class: "header-left"
    }, A = {
        class: "file-path"
    }, F = {
        style: {
            display: "inline-block",
            "max-width": "500px"
        }
    }, K = {
        class: "path-item"
    }, U = {
        key: 1
    }, $ = {
        style: {
            padding: "0 4px"
        }
    }, q = [ "onClick" ], G = {
        key: 1
    }, H = {
        style: {
            padding: "0 4px"
        }
    }, J = {
        style: {
            display: "flex",
            "justify-content": "flex-end",
            "max-width": "680px"
        }
    }, N = {
        class: "path-item"
    }, Q = {
        key: 1
    }, W = {
        style: {
            padding: "0 4px"
        }
    }, X = [ "onClick" ], Y = {
        key: 1
    }, Z = {
        style: {
            padding: "0 4px"
        }
    }, ee = {
        class: "header-right"
    }, ae = {
        key: 0,
        class: "preview-toolbox"
    }, le = [ "data-clipboard-text" ], te = C(() => e("span", {
        class: "copyspan"
    }, "复制", -1)), ce = Se({
        __name: "code-drawer",
        setup(m, {
            expose: oe
        }) {
            const f = i(!1), w = i(), h = i("请选择文件预览代码"), s = i([]), u = i([]), B = i([]), g = i(null), se = i(null), I = i(!1), re = () => {
                const o = document.getElementById("copyStoreIcon").getAttribute("data-clipboard-text");
                if (!navigator.clipboard || !window.isSecureContext) {
                    let a = document.createElement("textarea");
                    return a.value = o, a.style.position = "absolute", a.style.opacity = 0, 
                    a.style.left = "-999999px", a.style.top = "-999999px", document.body.appendChild(a), 
                    a.focus(), a.select(), new Promise(() => {
                        document.execCommand("copy") ? b.success("复制成功") : b.warning("复制失败，请手动复制"), 
                        a.remove();
                    });
                }
                navigator.clipboard.writeText(o).then(() => {
                    b.success("复制成功");
                }).catch(a => {
                    b.warning("复制失败，请手动复制");
                });
            }, _ = () => {
                Ie({
                    projectId: w.value,
                    filePath: s.value.join("/"),
                    ref: "master",
                    recursive: !1
                }).then(o => {
                    B.value = o;
                });
            }, k = (o, a) => {
                if (a == -1) s.value = [], u.value = []; else {
                    const p = [];
                    for (let v = 0; v <= a; v++) p.push(s.value[v]);
                    s.value = p;
                }
                se.value.onClose(), _();
            }, pe = () => {
                u.value.pop(), s.value = u.value, _();
            }, de = () => {
                f.value = !1, h.value = "请选择文件预览代码", s.value = [], u.value = [], 
                B.value = [], g.value = null;
            };
            return oe({
                openDrawer: o => {
                    w.value = o, f.value = !0, _();
                }
            }), (o, a) => {
                const p = he, v = ge, ue = we, ve = be;
                return t(), n("div", null, [ y(ve, {
                    modelValue: f.value,
                    "onUpdate:modelValue": a[2] || (a[2] = l => f.value = l),
                    "destroy-on-close": "",
                    title: "源代码",
                    size: "1100px",
                    onClose: de
                }, {
                    default: x(() => [ e("div", S, [ e("div", E, [ e("div", L, [ u.value.length > 0 ? (t(), 
                    n("div", {
                        key: 0,
                        class: "file-return",
                        onClick: pe
                    }, [ y(p, {
                        icon: "svg-icon:return",
                        class: "svg-icon"
                    }), me("返回上级") ])) : ie("", !0), (t(!0), n(P, null, j(B.value, l => (t(), 
                    n("div", {
                        key: l.id,
                        class: "file-item"
                    }, [ e("div", {
                        style: {
                            width: "0",
                            flex: "1"
                        },
                        class: fe([ "file-name", {
                            selected: l.path == g.value && l.type == "BLOB"
                        } ]),
                        onClick: r => {
                            return d = l.path, ne = l.type, s.value = d.split("/"), 
                            void (ne == "BLOB" ? Pe({
                                projectId: w.value,
                                filePath: d,
                                ref: "master"
                            }).then(ye => {
                                h.value = Me(ye.content), g.value = d, I.value = !0;
                            }) : (u.value = d.split("/"), I.value = !1, _()));
                            var d, ne;
                        }
                    }, [ l.type == "BLOB" ? (t(), M(p, {
                        key: 0,
                        icon: "svg-icon:store-file",
                        class: "svg-icon"
                    })) : (t(), M(p, {
                        key: 1,
                        icon: "svg-icon:tree-folder",
                        class: "svg-icon"
                    })), e("span", {
                        class: "text-ellipsis",
                        title: l.name
                    }, c(l.name), 9, V) ], 10, O) ]))), 128)) ]), z ]), e("div", D, [ e("div", R, [ e("div", T, [ e("div", A, [ y(v, {
                        ref_key: "filePathTipRef",
                        ref: se,
                        class: "item",
                        effect: "light",
                        placement: "top",
                        "popper-class": "file-path-tip"
                    }, {
                        content: x(() => [ e("p", F, [ e("span", K, [ s.value.length > 0 ? (t(), 
                        n("span", {
                            key: 0,
                            class: "select",
                            onClick: a[0] || (a[0] = l => k(0, -1))
                        }, "Master")) : (t(), n("span", U, "Master")), e("span", $, c(s.value.length > 0 ? "/" : ""), 1) ]), (t(!0), 
                        n(P, null, j(s.value, (l, r) => (t(), n("span", {
                            key: l,
                            class: "path-item"
                        }, [ r < s.value.length - 1 ? (t(), n("span", {
                            key: 0,
                            class: "select",
                            onClick: d => k(0, r)
                        }, c(l), 9, q)) : (t(), n("span", G, c(l), 1)), e("span", H, c(r < s.value.length - 1 ? "/" : ""), 1) ]))), 128)) ]) ]),
                        default: x(() => [ e("div", J, [ e("div", N, [ s.value.length > 0 ? (t(), 
                        n("span", {
                            key: 0,
                            class: "select",
                            onClick: a[1] || (a[1] = l => k(0, -1))
                        }, "Master")) : (t(), n("span", Q, "Master")), e("span", W, c(s.value.length > 0 ? "/" : ""), 1) ]), (t(!0), 
                        n(P, null, j(s.value, (l, r) => (t(), n("div", {
                            key: l,
                            class: "path-item"
                        }, [ r < s.value.length - 1 ? (t(), n("span", {
                            key: 0,
                            class: "select",
                            onClick: d => k(0, r)
                        }, c(l), 9, X)) : (t(), n("span", Y, c(l), 1)), e("span", Z, c(r < s.value.length - 1 ? "/" : ""), 1) ]))), 128)) ]) ]),
                        _: 1
                    }, 512) ]) ]), e("div", ee, [ I.value ? (t(), n("div", ae, [ y(v, {
                        class: "item",
                        effect: "dark",
                        content: "复制全部",
                        placement: "top"
                    }, {
                        default: x(() => [ e("div", {
                            class: "btn-icon",
                            id: "copyStoreIcon",
                            "data-clipboard-text": h.value,
                            onClick: re
                        }, [ y(p, {
                            icon: "svg-icon:copy",
                            class: "svg-icon"
                        }), te ], 8, le) ]),
                        _: 1
                    }) ])) : ie("", !0) ]) ]), (t(), M(ue, {
                        key: g.value,
                        "read-only": !0,
                        string: !0,
                        "code-string": h.value,
                        class: "code-editor"
                    }, null, 8, [ "code-string" ])) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-e174bd3e" ] ]);
});

export {
    Ee as __tla,
    ce as default
};