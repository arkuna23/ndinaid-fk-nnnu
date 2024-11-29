import {
    aO as _l,
    r as c,
    h as kl,
    a0 as xl,
    U as bl,
    w as Fl,
    o as a,
    c as s,
    t as e,
    z as al,
    k as r,
    l as _,
    B as o,
    F as C,
    y as S,
    C as j,
    D as F,
    v as $,
    a as L,
    a6 as A,
    A as wl,
    bo as tl,
    _ as Cl,
    K as Sl,
    N as jl,
    ab as Il,
    ac as Yl,
    cn as Nl,
    R as Ol,
    S as Ml,
    __tla as Pl
} from "./index-6c08ea4c.js";

import {
    E as Dl,
    __tla as El
} from "./el-infinite-scroll-9cd61b58.js";

import {
    b as Rl,
    c as Jl,
    d as sl,
    e as ql,
    __tla as zl
} from "./code-a0d24f62.js";

import {
    d as Vl
} from "./base64-a4536364.js";

import Hl, {
    __tla as Bl
} from "./diff-code-ff22ee24.js";

import {
    C as nl,
    __tla as Ul
} from "./clipboard-0a12866f.js";

import $l, {
    __tla as Ll
} from "./VuePrimeEditor-41848cbd.js";

import {
    _ as Al
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Kl
} from "./throttle-1adeb119.js";

import {
    __tla as Tl
} from "./index-234b0463.js";

let il, Gl = Promise.all([ (() => {
    try {
        return Pl;
    } catch {}
})(), (() => {
    try {
        return El;
    } catch {}
})(), (() => {
    try {
        return zl;
    } catch {}
})(), (() => {
    try {
        return Bl;
    } catch {}
})(), (() => {
    try {
        return Ul;
    } catch {}
})(), (() => {
    try {
        return Ll;
    } catch {}
})(), (() => {
    try {
        return Kl;
    } catch {}
})(), (() => {
    try {
        return Tl;
    } catch {}
})() ]).then(async () => {
    let w, K, T, G, Q, W, X, Z, ee, le, ae, te, se, ne, ie, ce, oe, ue, re, ve, de, me, pe, fe, he, ye, ge, _e, ke, xe, be, Fe, we, Ce, Se, je, Ie, Ye, Ne, Oe, Me, Pe, De, Ee, Re, Je, qe, ze, Ve, He, Be, Ue, $e, Le;
    w = I => (Ol("data-v-2a35f1ea"), I = I(), Ml(), I), K = {
        class: "code-file"
    }, T = {
        class: "code-header"
    }, G = {
        class: "header-left"
    }, Q = {
        class: "page-change"
    }, W = {
        class: "change-item"
    }, X = w(() => e("span", null, "Master", -1)), Z = {
        class: "change-item"
    }, ee = w(() => e("span", null, "历史", -1)), le = {
        key: 0,
        class: "file-path"
    }, ae = {
        style: {
            display: "inline-block",
            "max-width": "500px"
        }
    }, te = {
        class: "path-item"
    }, se = {
        key: 1
    }, ne = {
        style: {
            padding: "0 4px"
        }
    }, ie = [ "onClick" ], ce = {
        key: 2
    }, oe = {
        style: {
            padding: "0 4px"
        }
    }, ue = {
        class: "path-item"
    }, re = {
        key: 1
    }, ve = {
        style: {
            padding: "0 4px"
        }
    }, de = [ "onClick" ], me = {
        key: 2
    }, pe = {
        style: {
            padding: "0 4px"
        }
    }, fe = {
        class: "header-right"
    }, he = {
        key: 0,
        class: "preview-toolbox"
    }, ye = [ "data-clipboard-text" ], ge = {
        class: "code-container"
    }, _e = {
        key: 0,
        class: "file-container"
    }, ke = {
        key: 0,
        class: "file-list"
    }, xe = [ "onClick" ], be = [ "title" ], Fe = {
        style: {
            width: "320px",
            display: "flex",
            "justify-content": "flex-start",
            "align-items": "center"
        }
    }, we = [ "title" ], Ce = {
        class: "overSpan"
    }, Se = {
        key: 1,
        class: "file-content"
    }, je = {
        key: 1,
        class: "history-container"
    }, Ie = [ "infinite-scroll-disabled" ], Ye = {
        class: "history-header"
    }, Ne = {
        class: "header-left"
    }, Oe = {
        style: {
            width: "420px",
            display: "flex",
            "align-items": "center",
            background: "#F7F7F7",
            "padding-left": "10px",
            "border-radius": "4px"
        }
    }, Me = w(() => e("div", {
        style: {
            "font-size": "14px",
            width: "70px"
        }
    }, "历史区间:", -1)), Pe = {
        class: "header-right"
    }, De = {
        class: "left-box"
    }, Ee = {
        class: "commit-message"
    }, Re = {
        class: "commit-author"
    }, Je = {
        class: "right-box"
    }, qe = [ "onClick" ], ze = w(() => e("span", null, "修改追溯", -1)), Ve = {
        key: 1,
        class: "commit-diff"
    }, He = {
        class: "diff-header"
    }, Be = w(() => e("span", {
        class: "select-label"
    }, "筛选：", -1)), Ue = {
        style: {
            "margin-left": "25px"
        }
    }, $e = {
        style: {
            color: "#1ed4ac"
        }
    }, Le = {
        style: {
            color: "#ec443c"
        }
    }, il = Al({
        __name: "code-file",
        props: {
            projectId: {
                type: [ String, Number ],
                required: !0
            }
        },
        setup(I) {
            _l(n => ({
                "02ab8e52": n.bodyHeight
            }));
            const m = c(1);
            kl();
            const Ae = c(null), cl = c(null), ol = I, {
                projectId: k
            } = xl(ol), x = c(!1), q = c(!1), i = c([]), Ke = c([]), z = c([]), V = c(!1), M = c(""), H = c({}), Te = c([]), B = c([]), p = c([]), Y = c([]), U = c(0), b = c(0), N = c(""), P = c({
                addFile: 0,
                delFile: 0
            }), f = c([]), v = bl({
                ref: "master",
                page: 1,
                perPage: 10,
                since: "",
                until: ""
            }), ul = () => {
                f.value = [], v.since = "", v.until = "", We();
            }, D = () => {
                ql({
                    projectId: k.value,
                    filePath: i.value.join("/"),
                    ref: "master",
                    recursive: "false"
                }).then(n => {
                    Ke.value = n;
                });
            }, Ge = n => {
                n && (v.page = 1);
                const t = {
                    projectId: k.value,
                    filePath: i.value.join("/")
                };
                Object.assign(t, v), sl(t).then(u => {
                    V.value = !1, z.value = u;
                });
            }, Qe = n => {
                m.value = n, Xe(), m.value == 1 ? D() : (q.value = !1, N.value = "", 
                v.since = "", v.until = "", f.value = [], Ge(!0));
            }, We = () => {
                f.value && f.value.length > 0 ? (v.since = f.value[0], v.until = f.value[1]) : (v.since = "", 
                v.until = ""), Ge(!0);
            }, E = (n, t) => {
                if (t == -1) i.value = []; else {
                    const u = [];
                    for (let h = 0; h <= t; h++) u.push(i.value[h]);
                    i.value = u;
                }
                x.value = !1, Ae.value.onClose(), D();
            }, rl = () => {
                Y.value.push(...p.value.slice(b.value, b.value + 3)), b.value += 3;
            }, vl = () => {
                if (p.value = JSON.parse(JSON.stringify(B.value)), N.value) {
                    const n = p.value.filter(t => t.newPath == N.value);
                    p.value = n;
                } else p.value = JSON.parse(JSON.stringify(B.value));
                U.value = p.value.length, b.value = 5, Y.value = JSON.parse(JSON.stringify(p.value)).slice(0, b.value);
            };
            function Xe() {
                document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
            }
            const dl = () => {
                let n = new nl("#copyStoreIcon");
                n.on("success", function() {
                    n.destroy(), n = new nl("#copyStoreIcon"), tl.success("复制成功");
                }), n.on("error", function() {
                    tl.warning("复制失败，请手动复制");
                });
            }, ml = () => {
                document.fullscreenElement === null ? function(n) {
                    if (document.mozFullScreenEnabled) return Promise.reject(new Error("全屏模式被禁用"));
                    let t = null;
                    n.requestFullscreen ? t = n.requestFullscreen() : n.mozRequestFullScreen ? t = n.mozRequestFullScreen() : n.msRequestFullscreen ? t = n.msRequestFullscreen() : n.webkitRequestFullscreen && (t = n.webkitRequestFullScreen()), 
                    t || Promise.reject(new Error("不支持全屏"));
                }(document.getElementsByClassName("code-file")[0]) : Xe();
            }, Ze = () => {
                k.value && D();
            };
            Fl(k, () => {
                Ze();
            });
            const pl = () => {
                const n = {
                    projectId: k.value,
                    filePath: i.value.join("/")
                };
                v.page += 1, Object.assign(n, v), sl(n).then(t => {
                    t && t.length > 0 ? z.value.push(...t) : V.value = !0;
                });
            };
            return Ze(), (n, t) => {
                const u = Cl, h = Sl, fl = jl, el = Il, hl = Yl, yl = Nl, gl = Dl;
                return a(), s("div", K, [ e("div", T, [ e("div", G, [ e("div", Q, [ e("div", W, [ e("div", {
                    class: al([ "item-col", m.value == 1 ? "selected" : "" ]),
                    onClick: t[0] || (t[0] = l => Qe(1))
                }, [ r(u, {
                    icon: "svg-icon:file-management"
                }), X ], 2) ]), e("div", Z, [ e("div", {
                    class: al([ "item-col", m.value == 2 ? "selected" : "" ]),
                    onClick: t[1] || (t[1] = l => Qe(2))
                }, [ r(u, {
                    icon: "svg-icon:history"
                }), ee ], 2) ]) ]), m.value == 1 ? (a(), s("div", le, [ r(h, {
                    ref_key: "filePathTipRef",
                    ref: Ae,
                    class: "item",
                    effect: "light",
                    placement: "top",
                    "popper-class": "file-path-tip"
                }, {
                    content: _(() => [ e("p", ae, [ e("span", te, [ i.value.length > 0 ? (a(), 
                    s("span", {
                        key: 0,
                        class: "select",
                        onClick: t[2] || (t[2] = l => E(0, -1))
                    }, "Master")) : (a(), s("span", se, "Master")), e("span", ne, o(i.value.length > 0 ? "/" : ""), 1) ]), (a(!0), 
                    s(C, null, S(i.value, (l, d) => (a(), s("span", {
                        key: l,
                        class: "path-item"
                    }, [ d == i.value.length - 1 && x.value ? (a(), j(u, {
                        key: 0,
                        icon: "svg-icon:store-file"
                    })) : F("", !0), d < i.value.length - 1 ? (a(), s("span", {
                        key: 1,
                        class: "select",
                        onClick: y => E(0, d)
                    }, o(l), 9, ie)) : (a(), s("span", ce, o(l), 1)), e("span", oe, o(d < i.value.length - 1 ? "/" : ""), 1) ]))), 128)) ]) ]),
                    default: _(() => [ e("div", {
                        ref_key: "filePathRef",
                        ref: cl,
                        style: {
                            display: "flex",
                            "justify-content": "flex-end"
                        }
                    }, [ e("div", ue, [ i.value.length > 0 ? (a(), s("span", {
                        key: 0,
                        class: "select",
                        onClick: t[3] || (t[3] = l => E(0, -1))
                    }, "Master")) : (a(), s("span", re, "Master")), e("span", ve, o(i.value.length > 0 ? "/" : ""), 1) ]), (a(!0), 
                    s(C, null, S(i.value, (l, d) => (a(), s("div", {
                        key: l,
                        class: "path-item"
                    }, [ d == i.value.length - 1 && x.value ? (a(), j(u, {
                        key: 0,
                        icon: "svg-icon:store-file"
                    })) : F("", !0), d < i.value.length - 1 ? (a(), s("span", {
                        key: 1,
                        class: "select",
                        onClick: y => E(0, d)
                    }, o(l), 9, de)) : (a(), s("span", me, o(l), 1)), e("span", pe, o(d < i.value.length - 1 ? "/" : ""), 1) ]))), 128)) ], 512) ]),
                    _: 1
                }, 512) ])) : F("", !0) ]), e("div", fe, [ m.value == 1 && x.value ? (a(), 
                s("div", he, [ $(o(`${H.value.authorName}\xA0\xA0\u521B\u5EFA\u4E8E${L(A)(H.value.committedDate).format("YYYY-MM-DD HH:mm:ss")}`) + " ", 1), r(h, {
                    class: "item",
                    effect: "dark",
                    content: "复制",
                    placement: "top"
                }, {
                    default: _(() => [ e("div", {
                        class: "btn-icon",
                        style: {
                            "margin-left": "20px"
                        },
                        id: "copyStoreIcon",
                        "data-clipboard-text": M.value,
                        onClick: dl
                    }, [ r(u, {
                        icon: "svg-icon:copy",
                        class: "svg-icon"
                    }) ], 8, ye) ]),
                    _: 1
                }), r(h, {
                    class: "item",
                    effect: "dark",
                    content: "全屏",
                    placement: "top"
                }, {
                    default: _(() => [ e("div", {
                        class: "btn-icon",
                        style: {
                            "margin-left": "16px"
                        },
                        onClick: ml
                    }, [ r(u, {
                        icon: "svg-icon:fullScreen",
                        class: "svg-icon"
                    }) ]) ]),
                    _: 1
                }) ])) : F("", !0) ]) ]), r(yl, {
                    style: {
                        height: "calc(100% - 40px)",
                        "margin-top": "15px"
                    }
                }, {
                    default: _(() => [ e("div", ge, [ m.value == 1 ? (a(), s("div", _e, [ x.value ? (a(), 
                    s("div", Se, [ (a(), j($l, {
                        key: i.value.join("/"),
                        modelValue: M.value,
                        "onUpdate:modelValue": t[4] || (t[4] = l => M.value = l)
                    }, null, 8, [ "modelValue" ])) ])) : (a(), s("div", ke, [ (a(!0), 
                    s(C, null, S(Ke.value, l => (a(), s("div", {
                        key: l.treeItem.id,
                        class: "file-item"
                    }, [ e("div", {
                        style: {
                            width: "0",
                            flex: "1"
                        },
                        class: "file-name",
                        onClick: d => {
                            return y = l.treeItem.path, g = l.treeItem.type, O = l.commit, 
                            i.value = y.split("/"), void (g == "BLOB" ? (x.value = !0, 
                            H.value = O, Rl({
                                projectId: k.value,
                                filePath: y,
                                ref: "master"
                            }).then(R => {
                                M.value = Vl(R.content);
                            })) : (x.value = !1, D()));
                            var y, g, O;
                        }
                    }, [ l.treeItem.type == "BLOB" ? (a(), j(u, {
                        key: 0,
                        icon: "svg-icon:store-file"
                    })) : (a(), j(u, {
                        key: 1,
                        icon: "svg-icon:store-folder"
                    })), e("span", {
                        class: "overSpan ml-1",
                        title: l.treeItem.name
                    }, o(l.treeItem.name), 9, be) ], 8, xe), e("div", Fe, " 更新于" + o(L(A)(l.commit.committedDate).format("YYYY-MM-DD HH:mm:ss")), 1), e("div", {
                        style: {
                            width: "220px",
                            display: "flex",
                            "justify-content": "flex-start",
                            "align-items": "center"
                        },
                        title: l.commit.message
                    }, [ e("span", Ce, o(l.commit.message), 1) ], 8, we) ]))), 128)) ])) ])) : F("", !0), m.value == 2 ? (a(), 
                    s("div", je, [ q.value ? (a(), s("div", Ve, [ e("div", He, [ r(hl, {
                        style: {
                            width: "350px"
                        },
                        modelValue: N.value,
                        "onUpdate:modelValue": t[6] || (t[6] = l => N.value = l),
                        class: "neu",
                        onChange: vl
                    }, {
                        prefix: _(() => [ Be ]),
                        default: _(() => [ r(el, {
                            label: "全部",
                            value: ""
                        }), (a(!0), s(C, null, S(Te.value, l => (a(), j(el, {
                            key: l,
                            label: l,
                            value: l
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), e("span", Ue, [ $("※ 有"), e("span", $e, o(P.value.addFile) + "个添加", 1), $(" 和 "), e("span", Le, o(P.value.delFile) + "个删除", 1) ]) ]), (a(!0), 
                    s(C, null, S(Y.value, l => (a(), s("div", {
                        key: l.newPath,
                        class: "diff-content"
                    }, [ r(Hl, {
                        "file-name": l.newPath,
                        diff: l.diff
                    }, null, 8, [ "file-name", "diff" ]) ]))), 128)), Y.value.length < U.value ? (a(), 
                    s("div", {
                        key: 0,
                        class: "neu-btn btn-cancel",
                        onClick: rl
                    }, "点击加载更多")) : F("", !0) ])) : wl((a(), s("div", {
                        key: 0,
                        "infinite-scroll-disabled": V.value,
                        class: "commit-list"
                    }, [ e("div", Ye, [ e("div", Ne, [ e("div", Oe, [ Me, r(fl, {
                        modelValue: f.value,
                        "onUpdate:modelValue": t[5] || (t[5] = l => f.value = l),
                        type: "daterange",
                        "range-separator": "至",
                        "start-placeholder": "开始日期",
                        "end-placeholder": "结束日期",
                        size: "large",
                        "value-format": "YYYY-MM-DD",
                        style: {
                            width: "350px"
                        },
                        onChange: We
                    }, null, 8, [ "modelValue" ]) ]) ]), e("div", Pe, [ r(h, {
                        class: "item",
                        effect: "dark",
                        content: "重置筛选项",
                        placement: "top"
                    }, {
                        default: _(() => [ e("div", {
                            class: "refresh-box",
                            onClick: ul
                        }, [ r(u, {
                            icon: "svg-icon:refresh",
                            "svg-class": "project refresh sl"
                        }) ]) ]),
                        _: 1
                    }) ]) ]), (a(!0), s(C, null, S(z.value, l => (a(), s("div", {
                        key: l.id,
                        class: "commit-item"
                    }, [ e("div", De, [ e("div", Ee, o(l.message), 1), e("div", Re, o(`${l.authorName}\xA0\xA0\u521B\u5EFA\u4E8E${L(A)(l.committedDate).format("YYYY-MM-DD HH:mm:ss")}`), 1) ]), e("div", Je, [ e("div", {
                        class: "commit-btn",
                        onClick: d => {
                            return y = l.id, void Jl({
                                projectId: k.value,
                                sha: y
                            }).then(g => {
                                q.value = !0;
                                let O = 0, R = 0, ll = [];
                                g.forEach(J => {
                                    J.newFile ? O++ : J.deletedFile && (R++, J.diff = `@@ -1,0 +1,0 @@
- \u6587\u4EF6\u5DF2\u5220\u9664`), ll.push(J.newPath);
                                }), p.value = g, b.value = 5, B.value = JSON.parse(JSON.stringify(g)), 
                                Y.value = JSON.parse(JSON.stringify(g)).slice(0, b.value), 
                                U.value = g.length, Te.value = ll, P.value.addFile = O, 
                                P.value.delFile = R;
                            });
                            var y;
                        }
                    }, [ r(u, {
                        icon: "svg-icon:eye",
                        style: {
                            "margin-right": "5px"
                        }
                    }), ze ], 8, qe) ]) ]))), 128)) ], 8, Ie)), [ [ gl, pl ] ]) ])) : F("", !0) ]) ]),
                    _: 1
                }) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-2a35f1ea" ] ]);
});

export {
    Gl as __tla,
    il as default
};