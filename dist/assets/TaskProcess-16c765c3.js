import {
    d as N,
    b0 as W,
    k as d,
    cL as f,
    U as ie,
    r as z,
    w as q,
    f as pe,
    aV as mt,
    eo as Jt,
    bv as el,
    e as me,
    n as Re,
    cM as he,
    bm as Ur,
    i as Gr,
    ep as g,
    cJ as v,
    eq as Je,
    er as Kr,
    es as pt,
    et as Xe,
    eu as ht,
    ev as h,
    ew as Hn,
    ex as Jr,
    ey as ei,
    ez as we,
    eA as Fn,
    eB as ti,
    eC as Te,
    eD as Zn,
    eE as li,
    eF as Pe,
    eG as Un,
    eH as tl,
    eI as ai,
    eJ as ft,
    eK as ni,
    eL as oi,
    eM as ri,
    eN as ii,
    eO as si,
    eP as ci,
    eQ as ll,
    eR as ui,
    eS as di,
    eT as fe,
    eU as ee,
    eV as mi,
    eW as Gn,
    eX as pi,
    eY as Ot,
    eZ as hi,
    e_ as et,
    e$ as fi,
    f0 as Oi,
    f1 as gi,
    f2 as bi,
    f3 as Kn,
    F as tt,
    dy as vi,
    f4 as Jn,
    f5 as eo,
    f6 as _i,
    cR as Si,
    f7 as xi,
    aH as De,
    f8 as ki,
    f9 as yi,
    fa as wi,
    fb as to,
    fc as Ti,
    fd as Pi,
    fe as lo,
    cS as $i,
    ff as Ci,
    fg as Ei,
    fh as Me,
    fi as Vi,
    fj as Qi,
    fk as Li,
    cT as Ai,
    fl as gt,
    fm as Ii,
    o as al,
    c as nl,
    l as _e,
    t as lt,
    a as se,
    _ as Ri,
    m as ol,
    x as Xi,
    v as ao,
    O as Di,
    __tla as Mi
} from "./index-6c08ea4c.js";

import {
    k as no,
    g as oo,
    b as E,
    C as qi,
    P as Bi,
    a as zi,
    e as ji,
    c as Ni,
    u as Wi,
    d as Yi,
    f as Hi,
    h as Fi,
    i as Zi,
    j as Ui,
    l as Gi,
    M as Ki,
    O as rl,
    m as Ji,
    n as es,
    o as ts,
    p as ls,
    R as B,
    U as il,
    q as as,
    r as ro,
    s as io,
    t as so,
    E as qe,
    v as ns,
    w as os,
    __tla as rs
} from "./index-3a269d1c.js";

import {
    _ as sl
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    b as co,
    p as uo,
    a as is,
    c as mo,
    y as po,
    __tla as ss
} from "./file-e038b35d.js";

import ho, {
    __tla as cs
} from "./UploadMdBtns-d6f91a58.js";

let cl, fo, bt, vt, us = Promise.all([ (() => {
    try {
        return Mi;
    } catch {}
})(), (() => {
    try {
        return rs;
    } catch {}
})(), (() => {
    try {
        return ss;
    } catch {}
})(), (() => {
    try {
        return cs;
    } catch {}
})() ]).then(async () => {
    const ne = ({
        instance: e,
        ctx: t,
        props: l = {}
    }, a = "default") => {
        const n = (e == null ? void 0 : e.$slots[a]) || (t == null ? void 0 : t.slots[a]);
        return (n ? n(e) : "") || l[a];
    }, $e = N({
        props: {
            overlay: {
                type: [ String, Object ],
                default: ""
            },
            visible: {
                type: Boolean,
                default: !1
            },
            onChange: {
                type: Function,
                default: () => {}
            },
            relative: {
                type: String,
                default: "html"
            }
        },
        setup(e, t) {
            const l = `${f}-dropdown-hidden`, a = ie({
                overlayClass: [ l ],
                overlayStyle: {},
                triggerHover: !1,
                overlayHover: !1
            }), n = z(), o = z(), r = () => {
                var s, m;
                a.triggerHover = !0;
                const p = n.value, S = o.value;
                if (!p || !S) return;
                const O = p.getBoundingClientRect(), b = p.offsetTop, k = p.offsetLeft, y = O.height, T = O.width, _ = ((s = document.querySelector(e.relative)) == null ? void 0 : s.scrollLeft) || 0, w = ((m = document.querySelector(e.relative)) == null ? void 0 : m.clientWidth) || 0;
                let $ = k - S.offsetWidth / 2 + T / 2 - _;
                $ + S.offsetWidth > _ + w && ($ = _ + w - S.offsetWidth), $ < 0 && ($ = 0), 
                a.overlayStyle = {
                    ...a.overlayStyle,
                    top: b + y + "px",
                    left: $ + "px"
                }, e.onChange(!0);
            }, i = () => {
                a.overlayHover = !0;
            };
            q(() => e.visible, s => {
                s ? a.overlayClass = a.overlayClass.filter(m => m !== l) : a.overlayClass.push(l);
            });
            let c = -1;
            const u = s => {
                n.value === s.target ? a.triggerHover = !1 : a.overlayHover = !1, 
                clearTimeout(c), c = window.setTimeout(() => {
                    a.overlayHover || a.triggerHover || e.onChange(!1);
                }, 10);
            };
            return pe(() => {
                n.value.addEventListener("mouseenter", r), n.value.addEventListener("mouseleave", u), 
                o.value.addEventListener("mouseenter", i), o.value.addEventListener("mouseleave", u);
            }), mt(() => {
                n.value.removeEventListener("mouseenter", r), n.value.removeEventListener("mouseleave", u), 
                o.value.removeEventListener("mouseenter", i), o.value.removeEventListener("mouseleave", u);
            }), () => {
                const s = ne({
                    ctx: t
                }), m = ne({
                    props: e,
                    ctx: t
                }, "overlay");
                return [ Jt(s instanceof Array ? s[0] : s, {
                    ref: n,
                    key: "cloned-dropdown-trigger"
                }), d("div", {
                    class: [ `${f}-dropdown`, a.overlayClass ],
                    style: a.overlayStyle,
                    ref: o
                }, [ d("div", {
                    class: `${f}-dropdown-overlay`
                }, [ m instanceof Array ? m[0] : m ]) ]) ];
            };
        }
    }), at = N({
        name: "DropdownToolbar",
        props: {
            title: {
                type: String,
                default: ""
            },
            visible: {
                type: Boolean
            },
            trigger: {
                type: [ String, Object ]
            },
            onChange: {
                type: Function
            },
            overlay: {
                type: [ String, Object ]
            },
            insert: {
                type: Function
            },
            language: {
                type: String
            },
            theme: {
                type: String
            },
            previewTheme: {
                type: String
            },
            default: {
                type: [ String, Object ]
            }
        },
        emits: [ "onChange" ],
        setup(e, t) {
            const l = W("editorId");
            return () => {
                const a = ne({
                    props: e,
                    ctx: t
                }, "trigger"), n = ne({
                    props: e,
                    ctx: t
                }, "overlay"), o = ne({
                    props: e,
                    ctx: t
                });
                return d($e, {
                    relative: `#${l}-toolbar-wrapper`,
                    visible: e.visible,
                    onChange: r => {
                        e.onChange instanceof Function ? e.onChange(r) : t.emit("onChange", r);
                    },
                    overlay: n
                }, {
                    default: () => [ d("div", {
                        class: `${f}-toolbar-item`,
                        title: e.title || ""
                    }, [ a, o ]) ]
                });
            };
        }
    });
    at.install = e => (e.component(at.name, at), e);
    const Oo = N({
        props: {
            name: {
                type: String,
                default: ""
            }
        },
        setup: e => () => he.iconfontType === "svg" ? d("svg", {
            class: `${f}-icon`,
            "aria-hidden": "true"
        }, [ d("use", {
            "xlink:href": `#${f}-icon-${e.name}`
        }, null) ]) : d("i", {
            class: `${f}-iconfont ${f}-icon-${e.name}`
        }, null)
    }), I = N({
        props: {
            name: {
                type: String,
                default: ""
            }
        },
        setup(e) {
            const t = W("customIcon");
            return () => {
                const l = t.value[e.name];
                return typeof l == "object" ? typeof l.component == "object" ? Gr(l.component, l.props) : d("span", {
                    innerHTML: l.component
                }, null) : d(Oo, {
                    name: e.name
                }, null);
            };
        }
    }), Ce = N({
        name: "MdModal",
        props: {
            title: {
                type: String,
                default: ""
            },
            visible: {
                type: Boolean,
                default: !1
            },
            width: {
                type: String,
                default: "auto"
            },
            height: {
                type: String,
                default: "auto"
            },
            onClose: {
                type: Function
            },
            showAdjust: {
                type: Boolean,
                default: !1
            },
            isFullscreen: {
                type: Boolean,
                default: !1
            },
            onAdjust: {
                type: Function,
                default: () => {}
            },
            class: {
                type: String
            },
            style: {
                type: [ Object, String ],
                default: () => ({})
            },
            showMask: {
                type: Boolean,
                default: !0
            }
        },
        emits: [ "onClose" ],
        setup(e, t) {
            const l = W("theme"), a = z(e.visible), n = z([ `${f}-modal` ]), o = z(), r = z(), i = z(), c = el();
            let u = () => {};
            const s = ie({
                maskStyle: {
                    zIndex: -1
                },
                modalStyle: {
                    zIndex: -1
                },
                initPos: {
                    left: "0px",
                    top: "0px"
                },
                historyPos: {
                    left: "0px",
                    top: "0px"
                }
            }), m = me(() => e.isFullscreen ? {
                width: "100%",
                height: "100%"
            } : {
                width: e.width,
                height: e.height
            });
            q(() => e.isFullscreen, O => {
                O ? u() : Re(() => {
                    u = no(r.value, (b, k) => {
                        s.initPos.left = b + "px", s.initPos.top = k + "px";
                    });
                });
            }), q(() => e.visible, O => {
                O ? (s.maskStyle.zIndex = he.editorConfig.zIndex + oo(), s.modalStyle.zIndex = he.editorConfig.zIndex + oo(), 
                n.value.push("zoom-in"), a.value = O, Re(() => {
                    const b = o.value.offsetWidth / 2, k = o.value.offsetHeight / 2, y = document.documentElement.clientWidth / 2, T = document.documentElement.clientHeight / 2;
                    s.initPos.left = y - b + "px", s.initPos.top = T - k + "px", 
                    e.isFullscreen || (u = no(r.value, (_, w) => {
                        s.initPos.left = _ + "px", s.initPos.top = w + "px";
                    }));
                }), setTimeout(() => {
                    n.value = n.value.filter(b => b !== "zoom-in");
                }, 140)) : (n.value.push("zoom-out"), u(), setTimeout(() => {
                    n.value = n.value.filter(b => b !== "zoom-out"), a.value = O;
                }, 130));
            });
            const p = me(() => ({
                display: a.value ? "block" : "none"
            })), S = me(() => typeof e.style == "string" ? [ e.style, p.value ].join("; ") : e.style instanceof Object ? {
                ...p.value,
                ...e.style
            } : p.value);
            return pe(() => {
                i.value = document.body;
            }), () => {
                const O = ne({
                    ctx: t
                }), b = ne({
                    props: e,
                    ctx: t
                }, "title");
                return i.value ? d(Ur, {
                    to: i.value
                }, {
                    default: () => [ d("div", {
                        ref: c,
                        class: `${f}-modal-container`,
                        "data-theme": l.value
                    }, [ d("div", {
                        class: e.class,
                        style: S.value
                    }, [ e.showMask && d("div", {
                        class: `${f}-modal-mask`,
                        style: s.maskStyle,
                        onClick: () => {
                            e.onClose ? e.onClose() : t.emit("onClose");
                        }
                    }, null), d("div", {
                        class: n.value,
                        style: {
                            ...s.modalStyle,
                            ...s.initPos,
                            ...m.value
                        },
                        ref: o
                    }, [ d("div", {
                        class: `${f}-modal-header`,
                        ref: r
                    }, [ b || "" ]), d("div", {
                        class: `${f}-modal-body`
                    }, [ O ]), d("div", {
                        class: `${f}-modal-func`
                    }, [ e.showAdjust && d("div", {
                        class: `${f}-modal-adjust`,
                        onClick: k => {
                            k.stopPropagation(), e.isFullscreen ? s.initPos = s.historyPos : (s.historyPos = s.initPos, 
                            s.initPos = {
                                left: "0",
                                top: "0"
                            }), e.onAdjust(!e.isFullscreen);
                        }
                    }, [ d(I, {
                        name: e.isFullscreen ? "suoxiao" : "fangda"
                    }, null) ]), d("div", {
                        class: `${f}-modal-close`,
                        onClick: k => {
                            k.stopPropagation(), e.onClose ? e.onClose() : t.emit("onClose");
                        }
                    }, [ d(I, {
                        name: "close"
                    }, null) ]) ]) ]) ]) ]) ]
                }) : "";
            };
        }
    });
    function x(e) {
        return new Je(Kr.define(e));
    }
    function Oe(e) {
        return v(() => import("./index-2666514e.js").then(async t => (await t.__tla, 
        t)), [ "./index-2666514e.js", "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(t => t.sql({
            dialect: t[e]
        }));
    }
    Ce.install = e => (e.component(Ce.name, Ce), e);
    const go = [ g.of({
        name: "C",
        extensions: [ "c", "h", "ino" ],
        load: () => v(() => import("./index-2c0ce74a.js").then(async e => (await e.__tla, 
        e)), [ "./index-2c0ce74a.js", "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.cpp())
    }), g.of({
        name: "C++",
        alias: [ "cpp" ],
        extensions: [ "cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx" ],
        load: () => v(() => import("./index-2c0ce74a.js").then(async e => (await e.__tla, 
        e)), [ "./index-2c0ce74a.js", "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.cpp())
    }), g.of({
        name: "CQL",
        alias: [ "cassandra" ],
        extensions: [ "cql" ],
        load: () => Oe("Cassandra")
    }), g.of({
        name: "CSS",
        extensions: [ "css" ],
        load: () => v(() => Promise.resolve().then(() => xr), void 0, import.meta.url).then(e => e.css())
    }), g.of({
        name: "Go",
        extensions: [ "go" ],
        load: () => v(() => import("./index-78b83ad2.js").then(async e => (await e.__tla, 
        e)), [ "./index-78b83ad2.js", "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.go())
    }), g.of({
        name: "HTML",
        alias: [ "xhtml" ],
        extensions: [ "html", "htm", "handlebars", "hbs" ],
        load: () => v(() => Promise.resolve().then(() => wr), void 0, import.meta.url).then(e => e.html())
    }), g.of({
        name: "Java",
        extensions: [ "java" ],
        load: () => v(() => import("./index-81449c2b.js").then(async e => (await e.__tla, 
        e)), [ "./index-81449c2b.js", "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.java())
    }), g.of({
        name: "JavaScript",
        alias: [ "ecmascript", "js", "node" ],
        extensions: [ "js", "mjs", "cjs" ],
        load: () => v(() => import("./index-6c08ea4c.js").then(async e => (await e.__tla, 
        e)).then(e => e.fN), [ "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.javascript())
    }), g.of({
        name: "JSON",
        alias: [ "json5" ],
        extensions: [ "json", "map" ],
        load: () => v(() => import("./index-394eb593.js").then(async e => (await e.__tla, 
        e)), [ "./index-394eb593.js", "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.json())
    }), g.of({
        name: "JSX",
        extensions: [ "jsx" ],
        load: () => v(() => import("./index-6c08ea4c.js").then(async e => (await e.__tla, 
        e)).then(e => e.fN), [ "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.javascript({
            jsx: !0
        }))
    }), g.of({
        name: "LESS",
        extensions: [ "less" ],
        load: () => v(() => import("./index-7bcaddd2.js").then(async e => (await e.__tla, 
        e)), [ "./index-7bcaddd2.js", "./index-6c08ea4c.js", "./index-42414064.css", "./index-3a269d1c.js", "./_plugin-vue_export-helper-1b428a4d.js", "./file-e038b35d.js", "./UploadMdBtns-d6f91a58.js", "./index-5adb716b.js", "./el-button-group-2d4e2330.css", "./el-dropdown-item-62e02529.css", "./style-ee1d3701.css" ], import.meta.url).then(e => e.less())
    }), g.of({
        name: "Liquid",
        extensions: [ "liquid" ],
        load: () => v(() => import("./index-edfebb3f.js").then(async e => (await e.__tla, 
        e)), [ "./index-edfebb3f.js", "./index-6c08ea4c.js", "./index-42414064.css", "./index-3a269d1c.js", "./_plugin-vue_export-helper-1b428a4d.js", "./file-e038b35d.js", "./UploadMdBtns-d6f91a58.js", "./index-5adb716b.js", "./el-button-group-2d4e2330.css", "./el-dropdown-item-62e02529.css", "./style-ee1d3701.css" ], import.meta.url).then(e => e.liquid())
    }), g.of({
        name: "MariaDB SQL",
        load: () => Oe("MariaSQL")
    }), g.of({
        name: "Markdown",
        extensions: [ "md", "markdown", "mkd" ],
        load: () => v(() => Promise.resolve().then(() => Er), void 0, import.meta.url).then(e => e.markdown())
    }), g.of({
        name: "MS SQL",
        load: () => Oe("MSSQL")
    }), g.of({
        name: "MySQL",
        load: () => Oe("MySQL")
    }), g.of({
        name: "PHP",
        extensions: [ "php", "php3", "php4", "php5", "php7", "phtml" ],
        load: () => v(() => import("./index-c75bc3cb.js").then(async e => (await e.__tla, 
        e)), [ "./index-c75bc3cb.js", "./index-6c08ea4c.js", "./index-42414064.css", "./index-3a269d1c.js", "./_plugin-vue_export-helper-1b428a4d.js", "./file-e038b35d.js", "./UploadMdBtns-d6f91a58.js", "./index-5adb716b.js", "./el-button-group-2d4e2330.css", "./el-dropdown-item-62e02529.css", "./style-ee1d3701.css" ], import.meta.url).then(e => e.php())
    }), g.of({
        name: "PLSQL",
        extensions: [ "pls" ],
        load: () => Oe("PLSQL")
    }), g.of({
        name: "PostgreSQL",
        load: () => Oe("PostgreSQL")
    }), g.of({
        name: "Python",
        extensions: [ "BUILD", "bzl", "py", "pyw" ],
        filename: /^(BUCK|BUILD)$/,
        load: () => v(() => import("./index-5d680203.js").then(async e => (await e.__tla, 
        e)), [ "./index-5d680203.js", "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.python())
    }), g.of({
        name: "Rust",
        extensions: [ "rs" ],
        load: () => v(() => import("./index-9944fa88.js").then(async e => (await e.__tla, 
        e)), [ "./index-9944fa88.js", "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.rust())
    }), g.of({
        name: "Sass",
        extensions: [ "sass" ],
        load: () => v(() => import("./index-6b6fe785.js").then(async e => (await e.__tla, 
        e)), [ "./index-6b6fe785.js", "./index-6c08ea4c.js", "./index-42414064.css", "./index-3a269d1c.js", "./_plugin-vue_export-helper-1b428a4d.js", "./file-e038b35d.js", "./UploadMdBtns-d6f91a58.js", "./index-5adb716b.js", "./el-button-group-2d4e2330.css", "./el-dropdown-item-62e02529.css", "./style-ee1d3701.css" ], import.meta.url).then(e => e.sass({
            indented: !0
        }))
    }), g.of({
        name: "SCSS",
        extensions: [ "scss" ],
        load: () => v(() => import("./index-6b6fe785.js").then(async e => (await e.__tla, 
        e)), [ "./index-6b6fe785.js", "./index-6c08ea4c.js", "./index-42414064.css", "./index-3a269d1c.js", "./_plugin-vue_export-helper-1b428a4d.js", "./file-e038b35d.js", "./UploadMdBtns-d6f91a58.js", "./index-5adb716b.js", "./el-button-group-2d4e2330.css", "./el-dropdown-item-62e02529.css", "./style-ee1d3701.css" ], import.meta.url).then(e => e.sass())
    }), g.of({
        name: "SQL",
        extensions: [ "sql" ],
        load: () => Oe("StandardSQL")
    }), g.of({
        name: "SQLite",
        load: () => Oe("SQLite")
    }), g.of({
        name: "TSX",
        extensions: [ "tsx" ],
        load: () => v(() => import("./index-6c08ea4c.js").then(async e => (await e.__tla, 
        e)).then(e => e.fN), [ "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.javascript({
            jsx: !0,
            typescript: !0
        }))
    }), g.of({
        name: "TypeScript",
        alias: [ "ts" ],
        extensions: [ "ts", "mts", "cts" ],
        load: () => v(() => import("./index-6c08ea4c.js").then(async e => (await e.__tla, 
        e)).then(e => e.fN), [ "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.javascript({
            typescript: !0
        }))
    }), g.of({
        name: "WebAssembly",
        extensions: [ "wat", "wast" ],
        load: () => v(() => import("./index-fc155aa3.js").then(async e => (await e.__tla, 
        e)), [ "./index-fc155aa3.js", "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.wast())
    }), g.of({
        name: "XML",
        alias: [ "rss", "wsdl", "xsd" ],
        extensions: [ "xml", "xsl", "xsd", "svg" ],
        load: () => v(() => import("./index-c80e5c46.js").then(async e => (await e.__tla, 
        e)), [ "./index-c80e5c46.js", "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.xml())
    }), g.of({
        name: "YAML",
        alias: [ "yml" ],
        extensions: [ "yaml", "yml" ],
        load: () => v(() => import("./index-e4c3ce65.js").then(async e => (await e.__tla, 
        e)), [ "./index-e4c3ce65.js", "./index-6c08ea4c.js", "./index-42414064.css" ], import.meta.url).then(e => e.yaml())
    }), g.of({
        name: "APL",
        extensions: [ "dyalog", "apl" ],
        load: () => v(() => import("./apl-41573eac.js"), [], import.meta.url).then(e => x(e.apl))
    }), g.of({
        name: "PGP",
        alias: [ "asciiarmor" ],
        extensions: [ "asc", "pgp", "sig" ],
        load: () => v(() => import("./asciiarmor-60401afd.js"), [], import.meta.url).then(e => x(e.asciiArmor))
    }), g.of({
        name: "ASN.1",
        extensions: [ "asn", "asn1" ],
        load: () => v(() => import("./asn1-fba8122a.js"), [], import.meta.url).then(e => x(e.asn1({})))
    }), g.of({
        name: "Asterisk",
        filename: /^extensions\.conf$/i,
        load: () => v(() => import("./asterisk-430fd486.js"), [], import.meta.url).then(e => x(e.asterisk))
    }), g.of({
        name: "Brainfuck",
        extensions: [ "b", "bf" ],
        load: () => v(() => import("./brainfuck-d00dd753.js"), [], import.meta.url).then(e => x(e.brainfuck))
    }), g.of({
        name: "Cobol",
        extensions: [ "cob", "cpy" ],
        load: () => v(() => import("./cobol-1505fc0b.js"), [], import.meta.url).then(e => x(e.cobol))
    }), g.of({
        name: "C#",
        alias: [ "csharp", "cs" ],
        extensions: [ "cs" ],
        load: () => v(() => import("./clike-63181c88.js"), [], import.meta.url).then(e => x(e.csharp))
    }), g.of({
        name: "Clojure",
        extensions: [ "clj", "cljc", "cljx" ],
        load: () => v(() => import("./clojure-e8ee71d0.js"), [], import.meta.url).then(e => x(e.clojure))
    }), g.of({
        name: "ClojureScript",
        extensions: [ "cljs" ],
        load: () => v(() => import("./clojure-e8ee71d0.js"), [], import.meta.url).then(e => x(e.clojure))
    }), g.of({
        name: "Closure Stylesheets (GSS)",
        extensions: [ "gss" ],
        load: () => v(() => import("./css-a75ffbba.js"), [], import.meta.url).then(e => x(e.gss))
    }), g.of({
        name: "CMake",
        extensions: [ "cmake", "cmake.in" ],
        filename: /^CMakeLists\.txt$/,
        load: () => v(() => import("./cmake-f4be888b.js"), [], import.meta.url).then(e => x(e.cmake))
    }), g.of({
        name: "CoffeeScript",
        alias: [ "coffee", "coffee-script" ],
        extensions: [ "coffee" ],
        load: () => v(() => import("./coffeescript-58c43c47.js"), [], import.meta.url).then(e => x(e.coffeeScript))
    }), g.of({
        name: "Common Lisp",
        alias: [ "lisp" ],
        extensions: [ "cl", "lisp", "el" ],
        load: () => v(() => import("./commonlisp-4ff4283e.js"), [], import.meta.url).then(e => x(e.commonLisp))
    }), g.of({
        name: "Cypher",
        extensions: [ "cyp", "cypher" ],
        load: () => v(() => import("./cypher-9e6b2f02.js"), [], import.meta.url).then(e => x(e.cypher))
    }), g.of({
        name: "Cython",
        extensions: [ "pyx", "pxd", "pxi" ],
        load: () => v(() => import("./python-01de5055.js"), [], import.meta.url).then(e => x(e.cython))
    }), g.of({
        name: "Crystal",
        extensions: [ "cr" ],
        load: () => v(() => import("./crystal-10055ce4.js"), [], import.meta.url).then(e => x(e.crystal))
    }), g.of({
        name: "D",
        extensions: [ "d" ],
        load: () => v(() => import("./d-59878499.js"), [], import.meta.url).then(e => x(e.d))
    }), g.of({
        name: "Dart",
        extensions: [ "dart" ],
        load: () => v(() => import("./clike-63181c88.js"), [], import.meta.url).then(e => x(e.dart))
    }), g.of({
        name: "diff",
        extensions: [ "diff", "patch" ],
        load: () => v(() => import("./diff-a5bc32f0.js"), [], import.meta.url).then(e => x(e.diff))
    }), g.of({
        name: "Dockerfile",
        filename: /^Dockerfile$/,
        load: () => v(() => import("./dockerfile-7e40229f.js"), [ "./dockerfile-7e40229f.js", "./simple-mode-4e947ac2.js" ], import.meta.url).then(e => x(e.dockerFile))
    }), g.of({
        name: "DTD",
        extensions: [ "dtd" ],
        load: () => v(() => import("./dtd-80d2e8b5.js"), [], import.meta.url).then(e => x(e.dtd))
    }), g.of({
        name: "Dylan",
        extensions: [ "dylan", "dyl", "intr" ],
        load: () => v(() => import("./dylan-a0df4d15.js"), [], import.meta.url).then(e => x(e.dylan))
    }), g.of({
        name: "EBNF",
        load: () => v(() => import("./ebnf-ecc71dc8.js"), [], import.meta.url).then(e => x(e.ebnf))
    }), g.of({
        name: "ECL",
        extensions: [ "ecl" ],
        load: () => v(() => import("./ecl-2c875e8e.js"), [], import.meta.url).then(e => x(e.ecl))
    }), g.of({
        name: "edn",
        extensions: [ "edn" ],
        load: () => v(() => import("./clojure-e8ee71d0.js"), [], import.meta.url).then(e => x(e.clojure))
    }), g.of({
        name: "Eiffel",
        extensions: [ "e" ],
        load: () => v(() => import("./eiffel-4981c795.js"), [], import.meta.url).then(e => x(e.eiffel))
    }), g.of({
        name: "Elm",
        extensions: [ "elm" ],
        load: () => v(() => import("./elm-ef978723.js"), [], import.meta.url).then(e => x(e.elm))
    }), g.of({
        name: "Erlang",
        extensions: [ "erl" ],
        load: () => v(() => import("./erlang-6cd7acae.js"), [], import.meta.url).then(e => x(e.erlang))
    }), g.of({
        name: "Esper",
        load: () => v(() => import("./sql-183d5f6f.js"), [], import.meta.url).then(e => x(e.esper))
    }), g.of({
        name: "Factor",
        extensions: [ "factor" ],
        load: () => v(() => import("./factor-3eb382c5.js"), [ "./factor-3eb382c5.js", "./simple-mode-4e947ac2.js" ], import.meta.url).then(e => x(e.factor))
    }), g.of({
        name: "FCL",
        load: () => v(() => import("./fcl-58c85358.js"), [], import.meta.url).then(e => x(e.fcl))
    }), g.of({
        name: "Forth",
        extensions: [ "forth", "fth", "4th" ],
        load: () => v(() => import("./forth-ff6caf66.js"), [], import.meta.url).then(e => x(e.forth))
    }), g.of({
        name: "Fortran",
        extensions: [ "f", "for", "f77", "f90", "f95" ],
        load: () => v(() => import("./fortran-e3719aa7.js"), [], import.meta.url).then(e => x(e.fortran))
    }), g.of({
        name: "F#",
        alias: [ "fsharp" ],
        extensions: [ "fs" ],
        load: () => v(() => import("./mllike-81dcc173.js"), [], import.meta.url).then(e => x(e.fSharp))
    }), g.of({
        name: "Gas",
        extensions: [ "s" ],
        load: () => v(() => import("./gas-41e779e5.js"), [], import.meta.url).then(e => x(e.gas))
    }), g.of({
        name: "Gherkin",
        extensions: [ "feature" ],
        load: () => v(() => import("./gherkin-0cb25370.js"), [], import.meta.url).then(e => x(e.gherkin))
    }), g.of({
        name: "Groovy",
        extensions: [ "groovy", "gradle" ],
        filename: /^Jenkinsfile$/,
        load: () => v(() => import("./groovy-15a677e1.js"), [], import.meta.url).then(e => x(e.groovy))
    }), g.of({
        name: "Haskell",
        extensions: [ "hs" ],
        load: () => v(() => import("./haskell-3925367b.js"), [], import.meta.url).then(e => x(e.haskell))
    }), g.of({
        name: "Haxe",
        extensions: [ "hx" ],
        load: () => v(() => import("./haxe-36988f3b.js"), [], import.meta.url).then(e => x(e.haxe))
    }), g.of({
        name: "HXML",
        extensions: [ "hxml" ],
        load: () => v(() => import("./haxe-36988f3b.js"), [], import.meta.url).then(e => x(e.hxml))
    }), g.of({
        name: "HTTP",
        load: () => v(() => import("./http-bd8a5f01.js"), [], import.meta.url).then(e => x(e.http))
    }), g.of({
        name: "IDL",
        extensions: [ "pro" ],
        load: () => v(() => import("./idl-29977bcf.js"), [], import.meta.url).then(e => x(e.idl))
    }), g.of({
        name: "JSON-LD",
        alias: [ "jsonld" ],
        extensions: [ "jsonld" ],
        load: () => v(() => import("./javascript-5698d30a.js"), [], import.meta.url).then(e => x(e.jsonld))
    }), g.of({
        name: "Jinja2",
        extensions: [ "j2", "jinja", "jinja2" ],
        load: () => v(() => import("./jinja2-65f0b2f8.js"), [], import.meta.url).then(e => x(e.jinja2))
    }), g.of({
        name: "Julia",
        extensions: [ "jl" ],
        load: () => v(() => import("./julia-c7accc8f.js"), [], import.meta.url).then(e => x(e.julia))
    }), g.of({
        name: "Kotlin",
        extensions: [ "kt", "kts" ],
        load: () => v(() => import("./clike-63181c88.js"), [], import.meta.url).then(e => x(e.kotlin))
    }), g.of({
        name: "LiveScript",
        alias: [ "ls" ],
        extensions: [ "ls" ],
        load: () => v(() => import("./livescript-54ef4003.js"), [], import.meta.url).then(e => x(e.liveScript))
    }), g.of({
        name: "Lua",
        extensions: [ "lua" ],
        load: () => v(() => import("./lua-26321d51.js"), [], import.meta.url).then(e => x(e.lua))
    }), g.of({
        name: "mIRC",
        extensions: [ "mrc" ],
        load: () => v(() => import("./mirc-624cd66a.js"), [], import.meta.url).then(e => x(e.mirc))
    }), g.of({
        name: "Mathematica",
        extensions: [ "m", "nb", "wl", "wls" ],
        load: () => v(() => import("./mathematica-8888c88c.js"), [], import.meta.url).then(e => x(e.mathematica))
    }), g.of({
        name: "Modelica",
        extensions: [ "mo" ],
        load: () => v(() => import("./modelica-a28d2420.js"), [], import.meta.url).then(e => x(e.modelica))
    }), g.of({
        name: "MUMPS",
        extensions: [ "mps" ],
        load: () => v(() => import("./mumps-f441c2dc.js"), [], import.meta.url).then(e => x(e.mumps))
    }), g.of({
        name: "Mbox",
        extensions: [ "mbox" ],
        load: () => v(() => import("./mbox-986307aa.js"), [], import.meta.url).then(e => x(e.mbox))
    }), g.of({
        name: "Nginx",
        filename: /nginx.*\.conf$/i,
        load: () => v(() => import("./nginx-cadc3207.js"), [], import.meta.url).then(e => x(e.nginx))
    }), g.of({
        name: "NSIS",
        extensions: [ "nsh", "nsi" ],
        load: () => v(() => import("./nsis-b6648b8f.js"), [ "./nsis-b6648b8f.js", "./simple-mode-4e947ac2.js" ], import.meta.url).then(e => x(e.nsis))
    }), g.of({
        name: "NTriples",
        extensions: [ "nt", "nq" ],
        load: () => v(() => import("./ntriples-cef56f21.js"), [], import.meta.url).then(e => x(e.ntriples))
    }), g.of({
        name: "Objective-C",
        alias: [ "objective-c", "objc" ],
        extensions: [ "m" ],
        load: () => v(() => import("./clike-63181c88.js"), [], import.meta.url).then(e => x(e.objectiveC))
    }), g.of({
        name: "Objective-C++",
        alias: [ "objective-c++", "objc++" ],
        extensions: [ "mm" ],
        load: () => v(() => import("./clike-63181c88.js"), [], import.meta.url).then(e => x(e.objectiveCpp))
    }), g.of({
        name: "OCaml",
        extensions: [ "ml", "mli", "mll", "mly" ],
        load: () => v(() => import("./mllike-81dcc173.js"), [], import.meta.url).then(e => x(e.oCaml))
    }), g.of({
        name: "Octave",
        extensions: [ "m" ],
        load: () => v(() => import("./octave-964ec564.js"), [], import.meta.url).then(e => x(e.octave))
    }), g.of({
        name: "Oz",
        extensions: [ "oz" ],
        load: () => v(() => import("./oz-c1adf0a7.js"), [], import.meta.url).then(e => x(e.oz))
    }), g.of({
        name: "Pascal",
        extensions: [ "p", "pas" ],
        load: () => v(() => import("./pascal-2184346e.js"), [], import.meta.url).then(e => x(e.pascal))
    }), g.of({
        name: "Perl",
        extensions: [ "pl", "pm" ],
        load: () => v(() => import("./perl-9865fb4f.js"), [], import.meta.url).then(e => x(e.perl))
    }), g.of({
        name: "Pig",
        extensions: [ "pig" ],
        load: () => v(() => import("./pig-99332df3.js"), [], import.meta.url).then(e => x(e.pig))
    }), g.of({
        name: "PowerShell",
        extensions: [ "ps1", "psd1", "psm1" ],
        load: () => v(() => import("./powershell-4c1c7598.js"), [], import.meta.url).then(e => x(e.powerShell))
    }), g.of({
        name: "Properties files",
        alias: [ "ini", "properties" ],
        extensions: [ "properties", "ini", "in" ],
        load: () => v(() => import("./properties-fadda4d6.js"), [], import.meta.url).then(e => x(e.properties))
    }), g.of({
        name: "ProtoBuf",
        extensions: [ "proto" ],
        load: () => v(() => import("./protobuf-a4a14d99.js"), [], import.meta.url).then(e => x(e.protobuf))
    }), g.of({
        name: "Pug",
        alias: [ "jade" ],
        extensions: [ "pug", "jade" ],
        load: () => v(() => import("./pug-f63ddaaa.js"), [ "./pug-f63ddaaa.js", "./javascript-5698d30a.js" ], import.meta.url).then(e => x(e.pug))
    }), g.of({
        name: "Puppet",
        extensions: [ "pp" ],
        load: () => v(() => import("./puppet-af8c1613.js"), [], import.meta.url).then(e => x(e.puppet))
    }), g.of({
        name: "Q",
        extensions: [ "q" ],
        load: () => v(() => import("./q-ced0da1e.js"), [], import.meta.url).then(e => x(e.q))
    }), g.of({
        name: "R",
        alias: [ "rscript" ],
        extensions: [ "r", "R" ],
        load: () => v(() => import("./r-261c3b47.js"), [], import.meta.url).then(e => x(e.r))
    }), g.of({
        name: "RPM Changes",
        load: () => v(() => import("./rpm-4b852ff1.js"), [], import.meta.url).then(e => x(e.rpmChanges))
    }), g.of({
        name: "RPM Spec",
        extensions: [ "spec" ],
        load: () => v(() => import("./rpm-4b852ff1.js"), [], import.meta.url).then(e => x(e.rpmSpec))
    }), g.of({
        name: "Ruby",
        alias: [ "jruby", "macruby", "rake", "rb", "rbx" ],
        extensions: [ "rb" ],
        filename: /^(Gemfile|Rakefile)$/,
        load: () => v(() => import("./ruby-6c718521.js"), [], import.meta.url).then(e => x(e.ruby))
    }), g.of({
        name: "SAS",
        extensions: [ "sas" ],
        load: () => v(() => import("./sas-9c0423b1.js"), [], import.meta.url).then(e => x(e.sas))
    }), g.of({
        name: "Scala",
        extensions: [ "scala" ],
        load: () => v(() => import("./clike-63181c88.js"), [], import.meta.url).then(e => x(e.scala))
    }), g.of({
        name: "Scheme",
        extensions: [ "scm", "ss" ],
        load: () => v(() => import("./scheme-d63ed13a.js"), [], import.meta.url).then(e => x(e.scheme))
    }), g.of({
        name: "Shell",
        alias: [ "bash", "sh", "zsh" ],
        extensions: [ "sh", "ksh", "bash" ],
        filename: /^PKGBUILD$/,
        load: () => v(() => import("./shell-49bf208e.js"), [], import.meta.url).then(e => x(e.shell))
    }), g.of({
        name: "Sieve",
        extensions: [ "siv", "sieve" ],
        load: () => v(() => import("./sieve-3f821d4e.js"), [], import.meta.url).then(e => x(e.sieve))
    }), g.of({
        name: "Smalltalk",
        extensions: [ "st" ],
        load: () => v(() => import("./smalltalk-1d583ebe.js"), [], import.meta.url).then(e => x(e.smalltalk))
    }), g.of({
        name: "Solr",
        load: () => v(() => import("./solr-61175cd3.js"), [], import.meta.url).then(e => x(e.solr))
    }), g.of({
        name: "SML",
        extensions: [ "sml", "sig", "fun", "smackspec" ],
        load: () => v(() => import("./mllike-81dcc173.js"), [], import.meta.url).then(e => x(e.sml))
    }), g.of({
        name: "SPARQL",
        alias: [ "sparul" ],
        extensions: [ "rq", "sparql" ],
        load: () => v(() => import("./sparql-9e6e229f.js"), [], import.meta.url).then(e => x(e.sparql))
    }), g.of({
        name: "Spreadsheet",
        alias: [ "excel", "formula" ],
        load: () => v(() => import("./spreadsheet-d3374bbe.js"), [], import.meta.url).then(e => x(e.spreadsheet))
    }), g.of({
        name: "Squirrel",
        extensions: [ "nut" ],
        load: () => v(() => import("./clike-63181c88.js"), [], import.meta.url).then(e => x(e.squirrel))
    }), g.of({
        name: "Stylus",
        extensions: [ "styl" ],
        load: () => v(() => import("./stylus-a1fd3745.js"), [], import.meta.url).then(e => x(e.stylus))
    }), g.of({
        name: "Swift",
        extensions: [ "swift" ],
        load: () => v(() => import("./swift-e0476a29.js"), [], import.meta.url).then(e => x(e.swift))
    }), g.of({
        name: "sTeX",
        load: () => v(() => import("./stex-79207068.js"), [], import.meta.url).then(e => x(e.stex))
    }), g.of({
        name: "LaTeX",
        alias: [ "tex" ],
        extensions: [ "text", "ltx", "tex" ],
        load: () => v(() => import("./stex-79207068.js"), [], import.meta.url).then(e => x(e.stex))
    }), g.of({
        name: "SystemVerilog",
        extensions: [ "v", "sv", "svh" ],
        load: () => v(() => import("./verilog-ad796eb9.js"), [], import.meta.url).then(e => x(e.verilog))
    }), g.of({
        name: "Tcl",
        extensions: [ "tcl" ],
        load: () => v(() => import("./tcl-3cd0d10c.js"), [], import.meta.url).then(e => x(e.tcl))
    }), g.of({
        name: "Textile",
        extensions: [ "textile" ],
        load: () => v(() => import("./textile-88a4bbfc.js"), [], import.meta.url).then(e => x(e.textile))
    }), g.of({
        name: "TiddlyWiki",
        load: () => v(() => import("./tiddlywiki-5d2c38af.js"), [], import.meta.url).then(e => x(e.tiddlyWiki))
    }), g.of({
        name: "Tiki wiki",
        load: () => v(() => import("./tiki-9d296b03.js"), [], import.meta.url).then(e => x(e.tiki))
    }), g.of({
        name: "TOML",
        extensions: [ "toml" ],
        load: () => v(() => import("./toml-f3599878.js"), [], import.meta.url).then(e => x(e.toml))
    }), g.of({
        name: "Troff",
        extensions: [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ],
        load: () => v(() => import("./troff-ff8eb741.js"), [], import.meta.url).then(e => x(e.troff))
    }), g.of({
        name: "TTCN",
        extensions: [ "ttcn", "ttcn3", "ttcnpp" ],
        load: () => v(() => import("./ttcn-336d284c.js"), [], import.meta.url).then(e => x(e.ttcn))
    }), g.of({
        name: "TTCN_CFG",
        extensions: [ "cfg" ],
        load: () => v(() => import("./ttcn-cfg-d7cbb207.js"), [], import.meta.url).then(e => x(e.ttcnCfg))
    }), g.of({
        name: "Turtle",
        extensions: [ "ttl" ],
        load: () => v(() => import("./turtle-a28d2f0e.js"), [], import.meta.url).then(e => x(e.turtle))
    }), g.of({
        name: "Web IDL",
        extensions: [ "webidl" ],
        load: () => v(() => import("./webidl-cb8c07ff.js"), [], import.meta.url).then(e => x(e.webIDL))
    }), g.of({
        name: "VB.NET",
        extensions: [ "vb" ],
        load: () => v(() => import("./vb-64846b18.js"), [], import.meta.url).then(e => x(e.vb))
    }), g.of({
        name: "VBScript",
        extensions: [ "vbs" ],
        load: () => v(() => import("./vbscript-82f1f9cb.js"), [], import.meta.url).then(e => x(e.vbScript))
    }), g.of({
        name: "Velocity",
        extensions: [ "vtl" ],
        load: () => v(() => import("./velocity-b5514b55.js"), [], import.meta.url).then(e => x(e.velocity))
    }), g.of({
        name: "Verilog",
        extensions: [ "v" ],
        load: () => v(() => import("./verilog-ad796eb9.js"), [], import.meta.url).then(e => x(e.verilog))
    }), g.of({
        name: "VHDL",
        extensions: [ "vhd", "vhdl" ],
        load: () => v(() => import("./vhdl-5304ec95.js"), [], import.meta.url).then(e => x(e.vhdl))
    }), g.of({
        name: "XQuery",
        extensions: [ "xy", "xquery" ],
        load: () => v(() => import("./xquery-1c772789.js"), [], import.meta.url).then(e => x(e.xQuery))
    }), g.of({
        name: "Yacas",
        extensions: [ "ys" ],
        load: () => v(() => import("./yacas-05787a70.js"), [], import.meta.url).then(e => x(e.yacas))
    }), g.of({
        name: "Z80",
        extensions: [ "z80" ],
        load: () => v(() => import("./z80-c86f5982.js"), [], import.meta.url).then(e => x(e.z80))
    }), g.of({
        name: "MscGen",
        extensions: [ "mscgen", "mscin", "msc" ],
        load: () => v(() => import("./mscgen-0f359dfc.js"), [], import.meta.url).then(e => x(e.mscgen))
    }), g.of({
        name: "Xù",
        extensions: [ "xu" ],
        load: () => v(() => import("./mscgen-0f359dfc.js"), [], import.meta.url).then(e => x(e.xu))
    }), g.of({
        name: "MsGenny",
        extensions: [ "msgenny" ],
        load: () => v(() => import("./mscgen-0f359dfc.js"), [], import.meta.url).then(e => x(e.msgenny))
    }), g.of({
        name: "Vue",
        extensions: [ "vue" ],
        load: () => v(() => import("./index-186d4e66.js").then(async e => (await e.__tla, 
        e)), [ "./index-186d4e66.js", "./index-6c08ea4c.js", "./index-42414064.css", "./index-3a269d1c.js", "./_plugin-vue_export-helper-1b428a4d.js", "./file-e038b35d.js", "./UploadMdBtns-d6f91a58.js", "./index-5adb716b.js", "./el-button-group-2d4e2330.css", "./el-dropdown-item-62e02529.css", "./style-ee1d3701.css" ], import.meta.url).then(e => e.vue())
    }), g.of({
        name: "Angular Template",
        load: () => v(() => import("./index-e6f66ce1.js").then(async e => (await e.__tla, 
        e)), [ "./index-e6f66ce1.js", "./index-6c08ea4c.js", "./index-42414064.css", "./index-3a269d1c.js", "./_plugin-vue_export-helper-1b428a4d.js", "./file-e038b35d.js", "./UploadMdBtns-d6f91a58.js", "./index-5adb716b.js", "./el-button-group-2d4e2330.css", "./el-dropdown-item-62e02529.css", "./style-ee1d3701.css" ], import.meta.url).then(e => e.angular())
    }) ];
    class nt {
        static create(t, l, a, n, o) {
            return new nt(t, l, a, n + (n << 8) + t + (l << 4) | 0, o, [], []);
        }
        constructor(t, l, a, n, o, r, i) {
            this.type = t, this.value = l, this.from = a, this.hash = n, this.end = o, 
            this.children = r, this.positions = i, this.hashProp = [ [ Xe.contextHash, n ] ];
        }
        addChild(t, l) {
            t.prop(Xe.contextHash) != this.hash && (t = new we(t.type, t.children, t.positions, t.length, this.hashProp)), 
            this.children.push(t), this.positions.push(l);
        }
        toTree(t, l = this.end) {
            let a = this.children.length - 1;
            return a >= 0 && (l = Math.max(l, this.positions[a] + this.children[a].length + this.from)), 
            new we(t.types[this.type], this.children, this.positions, l - this.from).balance({
                makeTree: (n, o, r) => new we(pt.none, n, o, r, this.hashProp)
            });
        }
    }
    var P;
    (function(e) {
        e[e.Document = 1] = "Document", e[e.CodeBlock = 2] = "CodeBlock", e[e.FencedCode = 3] = "FencedCode", 
        e[e.Blockquote = 4] = "Blockquote", e[e.HorizontalRule = 5] = "HorizontalRule", 
        e[e.BulletList = 6] = "BulletList", e[e.OrderedList = 7] = "OrderedList", 
        e[e.ListItem = 8] = "ListItem", e[e.ATXHeading1 = 9] = "ATXHeading1", e[e.ATXHeading2 = 10] = "ATXHeading2", 
        e[e.ATXHeading3 = 11] = "ATXHeading3", e[e.ATXHeading4 = 12] = "ATXHeading4", 
        e[e.ATXHeading5 = 13] = "ATXHeading5", e[e.ATXHeading6 = 14] = "ATXHeading6", 
        e[e.SetextHeading1 = 15] = "SetextHeading1", e[e.SetextHeading2 = 16] = "SetextHeading2", 
        e[e.HTMLBlock = 17] = "HTMLBlock", e[e.LinkReference = 18] = "LinkReference", 
        e[e.Paragraph = 19] = "Paragraph", e[e.CommentBlock = 20] = "CommentBlock", 
        e[e.ProcessingInstructionBlock = 21] = "ProcessingInstructionBlock", e[e.Escape = 22] = "Escape", 
        e[e.Entity = 23] = "Entity", e[e.HardBreak = 24] = "HardBreak", e[e.Emphasis = 25] = "Emphasis", 
        e[e.StrongEmphasis = 26] = "StrongEmphasis", e[e.Link = 27] = "Link", e[e.Image = 28] = "Image", 
        e[e.InlineCode = 29] = "InlineCode", e[e.HTMLTag = 30] = "HTMLTag", e[e.Comment = 31] = "Comment", 
        e[e.ProcessingInstruction = 32] = "ProcessingInstruction", e[e.Autolink = 33] = "Autolink", 
        e[e.HeaderMark = 34] = "HeaderMark", e[e.QuoteMark = 35] = "QuoteMark", 
        e[e.ListMark = 36] = "ListMark", e[e.LinkMark = 37] = "LinkMark", e[e.EmphasisMark = 38] = "EmphasisMark", 
        e[e.CodeMark = 39] = "CodeMark", e[e.CodeText = 40] = "CodeText", e[e.CodeInfo = 41] = "CodeInfo", 
        e[e.LinkTitle = 42] = "LinkTitle", e[e.LinkLabel = 43] = "LinkLabel", e[e.URL = 44] = "URL";
    })(P || (P = {}));
    class bo {
        constructor(t, l) {
            this.start = t, this.content = l, this.marks = [], this.parsers = [];
        }
    }
    class vo {
        constructor() {
            this.text = "", this.baseIndent = 0, this.basePos = 0, this.depth = 0, 
            this.markers = [], this.pos = 0, this.indent = 0, this.next = -1;
        }
        forward() {
            this.basePos > this.pos && this.forwardInner();
        }
        forwardInner() {
            let t = this.skipSpace(this.basePos);
            this.indent = this.countIndent(t, this.pos, this.indent), this.pos = t, 
            this.next = t == this.text.length ? -1 : this.text.charCodeAt(t);
        }
        skipSpace(t) {
            return Be(this.text, t);
        }
        reset(t) {
            for (this.text = t, this.baseIndent = this.basePos = this.pos = this.indent = 0, 
            this.forwardInner(), this.depth = 1; this.markers.length; ) this.markers.pop();
        }
        moveBase(t) {
            this.basePos = t, this.baseIndent = this.countIndent(t, this.pos, this.indent);
        }
        moveBaseColumn(t) {
            this.baseIndent = t, this.basePos = this.findColumn(t);
        }
        addMarker(t) {
            this.markers.push(t);
        }
        countIndent(t, l = 0, a = 0) {
            for (let n = l; n < t; n++) a += this.text.charCodeAt(n) == 9 ? 4 - a % 4 : 1;
            return a;
        }
        findColumn(t) {
            let l = 0;
            for (let a = 0; l < this.text.length && a < t; l++) a += this.text.charCodeAt(l) == 9 ? 4 - a % 4 : 1;
            return l;
        }
        scrub() {
            if (!this.baseIndent) return this.text;
            let t = "";
            for (let l = 0; l < this.basePos; l++) t += " ";
            return t + this.text.slice(this.basePos);
        }
    }
    function ul(e, t, l) {
        if (l.pos == l.text.length || e != t.block && l.indent >= t.stack[l.depth + 1].value + l.baseIndent) return !0;
        if (l.indent >= l.baseIndent + 4) return !1;
        let a = (e.type == P.OrderedList ? xt : St)(l, t, !1);
        return a > 0 && (e.type != P.BulletList || _t(l, t, !1) < 0) && l.text.charCodeAt(l.pos + a - 1) == e.value;
    }
    const dl = {
        [P.Blockquote]: (e, t, l) => l.next == 62 && (l.markers.push(R(P.QuoteMark, t.lineStart + l.pos, t.lineStart + l.pos + 1)), 
        l.moveBase(l.pos + (oe(l.text.charCodeAt(l.pos + 1)) ? 2 : 1)), e.end = t.lineStart + l.text.length, 
        !0),
        [P.ListItem]: (e, t, l) => !(l.indent < l.baseIndent + e.value && l.next > -1) && (l.moveBaseColumn(l.baseIndent + e.value), 
        !0),
        [P.OrderedList]: ul,
        [P.BulletList]: ul,
        [P.Document]: () => !0
    };
    function oe(e) {
        return e == 32 || e == 9 || e == 10 || e == 13;
    }
    function Be(e, t = 0) {
        for (;t < e.length && oe(e.charCodeAt(t)); ) t++;
        return t;
    }
    function ml(e, t, l) {
        for (;t > l && oe(e.charCodeAt(t - 1)); ) t--;
        return t;
    }
    function pl(e) {
        if (e.next != 96 && e.next != 126) return -1;
        let t = e.pos + 1;
        for (;t < e.text.length && e.text.charCodeAt(t) == e.next; ) t++;
        if (t < e.pos + 3) return -1;
        if (e.next == 96) {
            for (let l = t; l < e.text.length; l++) if (e.text.charCodeAt(l) == 96) return -1;
        }
        return t;
    }
    function hl(e) {
        return e.next != 62 ? -1 : e.text.charCodeAt(e.pos + 1) == 32 ? 2 : 1;
    }
    function _t(e, t, l) {
        if (e.next != 42 && e.next != 45 && e.next != 95) return -1;
        let a = 1;
        for (let n = e.pos + 1; n < e.text.length; n++) {
            let o = e.text.charCodeAt(n);
            if (o == e.next) a++; else if (!oe(o)) return -1;
        }
        return l && e.next == 45 && gl(e) > -1 && e.depth == t.stack.length || a < 3 ? -1 : 1;
    }
    function fl(e, t) {
        for (let l = e.stack.length - 1; l >= 0; l--) if (e.stack[l].type == t) return !0;
        return !1;
    }
    function St(e, t, l) {
        return e.next != 45 && e.next != 43 && e.next != 42 || e.pos != e.text.length - 1 && !oe(e.text.charCodeAt(e.pos + 1)) || !(!l || fl(t, P.BulletList) || e.skipSpace(e.pos + 2) < e.text.length) ? -1 : 1;
    }
    function xt(e, t, l) {
        let a = e.pos, n = e.next;
        for (;n >= 48 && n <= 57; ) {
            if (a++, a == e.text.length) return -1;
            n = e.text.charCodeAt(a);
        }
        return a == e.pos || a > e.pos + 9 || n != 46 && n != 41 || a < e.text.length - 1 && !oe(e.text.charCodeAt(a + 1)) || l && !fl(t, P.OrderedList) && (e.skipSpace(a + 1) == e.text.length || a > e.pos + 1 || e.next != 49) ? -1 : a + 1 - e.pos;
    }
    function Ol(e) {
        if (e.next != 35) return -1;
        let t = e.pos + 1;
        for (;t < e.text.length && e.text.charCodeAt(t) == 35; ) t++;
        if (t < e.text.length && e.text.charCodeAt(t) != 32) return -1;
        let l = t - e.pos;
        return l > 6 ? -1 : l;
    }
    function gl(e) {
        if (e.next != 45 && e.next != 61 || e.indent >= e.baseIndent + 4) return -1;
        let t = e.pos + 1;
        for (;t < e.text.length && e.text.charCodeAt(t) == e.next; ) t++;
        let l = t;
        for (;t < e.text.length && oe(e.text.charCodeAt(t)); ) t++;
        return t == e.text.length ? l : -1;
    }
    const kt = /^[ \t]*$/, bl = /-->/, vl = /\?>/, yt = [ [ /^<(?:script|pre|style)(?:\s|>|$)/i, /<\/(?:script|pre|style)>/i ], [ /^\s*<!--/, bl ], [ /^\s*<\?/, vl ], [ /^\s*<![A-Z]/, />/ ], [ /^\s*<!\[CDATA\[/, /\]\]>/ ], [ /^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i, kt ], [ /^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i, kt ] ];
    function _l(e, t, l) {
        if (e.next != 60) return -1;
        let a = e.text.slice(e.pos);
        for (let n = 0, o = yt.length - (l ? 1 : 0); n < o; n++) if (yt[n][0].test(a)) return n;
        return -1;
    }
    function Sl(e, t) {
        let l = e.countIndent(t, e.pos, e.indent), a = e.countIndent(e.skipSpace(t), t, l);
        return a >= l + 5 ? l + 1 : a;
    }
    function Se(e, t, l) {
        let a = e.length - 1;
        a >= 0 && e[a].to == t && e[a].type == P.CodeText ? e[a].to = l : e.push(R(P.CodeText, t, l));
    }
    const ot = {
        LinkReference: void 0,
        IndentedCode(e, t) {
            let l = t.baseIndent + 4;
            if (t.indent < l) return !1;
            let a = t.findColumn(l), n = e.lineStart + a, o = e.lineStart + t.text.length, r = [], i = [];
            for (Se(r, n, o); e.nextLine() && t.depth >= e.stack.length; ) if (t.pos == t.text.length) {
                Se(i, e.lineStart - 1, e.lineStart);
                for (let c of t.markers) i.push(c);
            } else {
                if (t.indent < l) break;
                {
                    if (i.length) {
                        for (let u of i) u.type == P.CodeText ? Se(r, u.from, u.to) : r.push(u);
                        i = [];
                    }
                    Se(r, e.lineStart - 1, e.lineStart);
                    for (let u of t.markers) r.push(u);
                    o = e.lineStart + t.text.length;
                    let c = e.lineStart + t.findColumn(t.baseIndent + 4);
                    c < o && Se(r, c, o);
                }
            }
            return i.length && (i = i.filter(c => c.type != P.CodeText), i.length && (t.markers = i.concat(t.markers))), 
            e.addNode(e.buffer.writeElements(r, -n).finish(P.CodeBlock, o - n), n), 
            !0;
        },
        FencedCode(e, t) {
            let l = pl(t);
            if (l < 0) return !1;
            let a = e.lineStart + t.pos, n = t.next, o = l - t.pos, r = t.skipSpace(l), i = ml(t.text, t.text.length, r), c = [ R(P.CodeMark, a, a + o) ];
            r < i && c.push(R(P.CodeInfo, e.lineStart + r, e.lineStart + i));
            for (let u = !0; e.nextLine() && t.depth >= e.stack.length; u = !1) {
                let s = t.pos;
                if (t.indent - t.baseIndent < 4) for (;s < t.text.length && t.text.charCodeAt(s) == n; ) s++;
                if (s - t.pos >= o && t.skipSpace(s) == t.text.length) {
                    for (let m of t.markers) c.push(m);
                    c.push(R(P.CodeMark, e.lineStart + t.pos, e.lineStart + s)), 
                    e.nextLine();
                    break;
                }
                {
                    u || Se(c, e.lineStart - 1, e.lineStart);
                    for (let S of t.markers) c.push(S);
                    let m = e.lineStart + t.basePos, p = e.lineStart + t.text.length;
                    m < p && Se(c, m, p);
                }
            }
            return e.addNode(e.buffer.writeElements(c, -a).finish(P.FencedCode, e.prevLineEnd() - a), a), 
            !0;
        },
        Blockquote(e, t) {
            let l = hl(t);
            return !(l < 0) && (e.startContext(P.Blockquote, t.pos), e.addNode(P.QuoteMark, e.lineStart + t.pos, e.lineStart + t.pos + 1), 
            t.moveBase(t.pos + l), null);
        },
        HorizontalRule(e, t) {
            if (_t(t, e, !1) < 0) return !1;
            let l = e.lineStart + t.pos;
            return e.nextLine(), e.addNode(P.HorizontalRule, l), !0;
        },
        BulletList(e, t) {
            let l = St(t, e, !1);
            if (l < 0) return !1;
            e.block.type != P.BulletList && e.startContext(P.BulletList, t.basePos, t.next);
            let a = Sl(t, t.pos + 1);
            return e.startContext(P.ListItem, t.basePos, a - t.baseIndent), e.addNode(P.ListMark, e.lineStart + t.pos, e.lineStart + t.pos + l), 
            t.moveBaseColumn(a), null;
        },
        OrderedList(e, t) {
            let l = xt(t, e, !1);
            if (l < 0) return !1;
            e.block.type != P.OrderedList && e.startContext(P.OrderedList, t.basePos, t.text.charCodeAt(t.pos + l - 1));
            let a = Sl(t, t.pos + l);
            return e.startContext(P.ListItem, t.basePos, a - t.baseIndent), e.addNode(P.ListMark, e.lineStart + t.pos, e.lineStart + t.pos + l), 
            t.moveBaseColumn(a), null;
        },
        ATXHeading(e, t) {
            let l = Ol(t);
            if (l < 0) return !1;
            let a = t.pos, n = e.lineStart + a, o = ml(t.text, t.text.length, a), r = o;
            for (;r > a && t.text.charCodeAt(r - 1) == t.next; ) r--;
            r != o && r != a && oe(t.text.charCodeAt(r - 1)) || (r = t.text.length);
            let i = e.buffer.write(P.HeaderMark, 0, l).writeElements(e.parser.parseInline(t.text.slice(a + l + 1, r), n + l + 1), -n);
            r < t.text.length && i.write(P.HeaderMark, r - a, o - a);
            let c = i.finish(P.ATXHeading1 - 1 + l, t.text.length - a);
            return e.nextLine(), e.addNode(c, n), !0;
        },
        HTMLBlock(e, t) {
            let l = _l(t, 0, !1);
            if (l < 0) return !1;
            let a = e.lineStart + t.pos, n = yt[l][1], o = [], r = n != kt;
            for (;!n.test(t.text) && e.nextLine(); ) {
                if (t.depth < e.stack.length) {
                    r = !1;
                    break;
                }
                for (let u of t.markers) o.push(u);
            }
            r && e.nextLine();
            let i = n == bl ? P.CommentBlock : n == vl ? P.ProcessingInstructionBlock : P.HTMLBlock, c = e.prevLineEnd();
            return e.addNode(e.buffer.writeElements(o, -a).finish(i, c - a), a), 
            !0;
        },
        SetextHeading: void 0
    };
    class _o {
        constructor(t) {
            this.stage = 0, this.elts = [], this.pos = 0, this.start = t.start, 
            this.advance(t.content);
        }
        nextLine(t, l, a) {
            if (this.stage == -1) return !1;
            let n = a.content + `
` + l.scrub(), o = this.advance(n);
            return o > -1 && o < n.length && this.complete(t, a, o);
        }
        finish(t, l) {
            return (this.stage == 2 || this.stage == 3) && Be(l.content, this.pos) == l.content.length && this.complete(t, l, l.content.length);
        }
        complete(t, l, a) {
            return t.addLeafElement(l, R(P.LinkReference, this.start, this.start + a, this.elts)), 
            !0;
        }
        nextStage(t) {
            return t ? (this.pos = t.to - this.start, this.elts.push(t), this.stage++, 
            !0) : (t === !1 && (this.stage = -1), !1);
        }
        advance(t) {
            for (;;) {
                if (this.stage == -1) return -1;
                if (this.stage == 0) {
                    if (!this.nextStage(El(t, this.pos, this.start, !0))) return -1;
                    if (t.charCodeAt(this.pos) != 58) return this.stage = -1;
                    this.elts.push(R(P.LinkMark, this.pos + this.start, this.pos + this.start + 1)), 
                    this.pos++;
                } else {
                    if (this.stage != 1) {
                        if (this.stage == 2) {
                            let l = Be(t, this.pos), a = 0;
                            if (l > this.pos) {
                                let n = Cl(t, l, this.start);
                                if (n) {
                                    let o = wt(t, n.to - this.start);
                                    o > 0 && (this.nextStage(n), a = o);
                                }
                            }
                            return a || (a = wt(t, this.pos)), a > 0 && a < t.length ? a : -1;
                        }
                        return wt(t, this.pos);
                    }
                    if (!this.nextStage($l(t, Be(t, this.pos), this.start))) return -1;
                }
            }
        }
    }
    function wt(e, t) {
        for (;t < e.length; t++) {
            let l = e.charCodeAt(t);
            if (l == 10) break;
            if (!oe(l)) return -1;
        }
        return t;
    }
    class So {
        nextLine(t, l, a) {
            let n = l.depth < t.stack.length ? -1 : gl(l), o = l.next;
            if (n < 0) return !1;
            let r = R(P.HeaderMark, t.lineStart + l.pos, t.lineStart + n);
            return t.nextLine(), t.addLeafElement(a, R(o == 61 ? P.SetextHeading1 : P.SetextHeading2, a.start, t.prevLineEnd(), [ ...t.parser.parseInline(a.content, a.start), r ])), 
            !0;
        }
        finish() {
            return !1;
        }
    }
    const xo = {
        LinkReference: (e, t) => t.content.charCodeAt(0) == 91 ? new _o(t) : null,
        SetextHeading: () => new So()
    }, ko = [ (e, t) => Ol(t) >= 0, (e, t) => pl(t) >= 0, (e, t) => hl(t) >= 0, (e, t) => St(t, e, !0) >= 0, (e, t) => xt(t, e, !0) >= 0, (e, t) => _t(t, e, !0) >= 0, (e, t) => _l(t, 0, !0) >= 0 ], yo = {
        text: "",
        end: 0
    };
    class wo {
        constructor(t, l, a, n) {
            this.parser = t, this.input = l, this.ranges = n, this.line = new vo(), 
            this.atEnd = !1, this.reusePlaceholders = new Map(), this.stoppedAt = null, 
            this.rangeI = 0, this.to = n[n.length - 1].to, this.lineStart = this.absoluteLineStart = this.absoluteLineEnd = n[0].from, 
            this.block = nt.create(P.Document, 0, this.lineStart, 0, 0), this.stack = [ this.block ], 
            this.fragments = a.length ? new Eo(a, l) : null, this.readLine();
        }
        get parsedPos() {
            return this.absoluteLineStart;
        }
        advance() {
            if (this.stoppedAt != null && this.absoluteLineStart > this.stoppedAt) return this.finish();
            let {
                line: t
            } = this;
            for (;;) {
                for (let a = 0; ;) {
                    let n = t.depth < this.stack.length ? this.stack[this.stack.length - 1] : null;
                    for (;a < t.markers.length && (!n || t.markers[a].from < n.end); ) {
                        let o = t.markers[a++];
                        this.addNode(o.type, o.from, o.to);
                    }
                    if (!n) break;
                    this.finishContext();
                }
                if (t.pos < t.text.length) break;
                if (!this.nextLine()) return this.finish();
            }
            if (this.fragments && this.reuseFragment(t.basePos)) return null;
            e: for (;;) {
                for (let a of this.parser.blockParsers) if (a) {
                    let n = a(this, t);
                    if (n != 0) {
                        if (n == 1) return null;
                        t.forward();
                        continue e;
                    }
                }
                break;
            }
            let l = new bo(this.lineStart + t.pos, t.text.slice(t.pos));
            for (let a of this.parser.leafBlockParsers) if (a) {
                let n = a(this, l);
                n && l.parsers.push(n);
            }
            e: for (;this.nextLine() && t.pos != t.text.length; ) {
                if (t.indent < t.baseIndent + 4) {
                    for (let a of this.parser.endLeafBlock) if (a(this, t, l)) break e;
                }
                for (let a of l.parsers) if (a.nextLine(this, t, l)) return null;
                l.content += `
` + t.scrub();
                for (let a of t.markers) l.marks.push(a);
            }
            return this.finishLeaf(l), null;
        }
        stopAt(t) {
            if (this.stoppedAt != null && this.stoppedAt < t) throw new RangeError("Can't move stoppedAt forward");
            this.stoppedAt = t;
        }
        reuseFragment(t) {
            if (!this.fragments.moveTo(this.absoluteLineStart + t, this.absoluteLineStart) || !this.fragments.matches(this.block.hash)) return !1;
            let l = this.fragments.takeNodes(this);
            return !!l && (this.absoluteLineStart += l, this.lineStart = Vl(this.absoluteLineStart, this.ranges), 
            this.moveRangeI(), this.absoluteLineStart < this.to ? (this.lineStart++, 
            this.absoluteLineStart++, this.readLine()) : (this.atEnd = !0, this.readLine()), 
            !0);
        }
        get depth() {
            return this.stack.length;
        }
        parentType(t = this.depth - 1) {
            return this.parser.nodeSet.types[this.stack[t].type];
        }
        nextLine() {
            return this.lineStart += this.line.text.length, this.absoluteLineEnd >= this.to ? (this.absoluteLineStart = this.absoluteLineEnd, 
            this.atEnd = !0, this.readLine(), !1) : (this.lineStart++, this.absoluteLineStart = this.absoluteLineEnd + 1, 
            this.moveRangeI(), this.readLine(), !0);
        }
        moveRangeI() {
            for (;this.rangeI < this.ranges.length - 1 && this.absoluteLineStart >= this.ranges[this.rangeI].to; ) this.rangeI++, 
            this.absoluteLineStart = Math.max(this.absoluteLineStart, this.ranges[this.rangeI].from);
        }
        scanLine(t) {
            let l = yo;
            if (l.end = t, t >= this.to) l.text = ""; else if (l.text = this.lineChunkAt(t), 
            l.end += l.text.length, this.ranges.length > 1) {
                let a = this.absoluteLineStart, n = this.rangeI;
                for (;this.ranges[n].to < l.end; ) {
                    n++;
                    let o = this.ranges[n].from, r = this.lineChunkAt(o);
                    l.end = o + r.length, l.text = l.text.slice(0, this.ranges[n - 1].to - a) + r, 
                    a = l.end - l.text.length;
                }
            }
            return l;
        }
        readLine() {
            let {
                line: t
            } = this, {
                text: l,
                end: a
            } = this.scanLine(this.absoluteLineStart);
            for (this.absoluteLineEnd = a, t.reset(l); t.depth < this.stack.length; t.depth++) {
                let n = this.stack[t.depth], o = this.parser.skipContextMarkup[n.type];
                if (!o) throw new Error("Unhandled block context " + P[n.type]);
                if (!o(n, this, t)) break;
                t.forward();
            }
        }
        lineChunkAt(t) {
            let l, a = this.input.chunk(t);
            if (this.input.lineChunks) l = a == `
` ? "" : a; else {
                let n = a.indexOf(`
`);
                l = n < 0 ? a : a.slice(0, n);
            }
            return t + l.length > this.to ? l.slice(0, this.to - t) : l;
        }
        prevLineEnd() {
            return this.atEnd ? this.lineStart : this.lineStart - 1;
        }
        startContext(t, l, a = 0) {
            this.block = nt.create(t, a, this.lineStart + l, this.block.hash, this.lineStart + this.line.text.length), 
            this.stack.push(this.block);
        }
        startComposite(t, l, a = 0) {
            this.startContext(this.parser.getNodeType(t), l, a);
        }
        addNode(t, l, a) {
            typeof t == "number" && (t = new we(this.parser.nodeSet.types[t], Ee, Ee, (a ?? this.prevLineEnd()) - l)), 
            this.block.addChild(t, l - this.block.from);
        }
        addElement(t) {
            this.block.addChild(t.toTree(this.parser.nodeSet), t.from - this.block.from);
        }
        addLeafElement(t, l) {
            this.addNode(this.buffer.writeElements(Ct(l.children, t.marks), -l.from).finish(l.type, l.to - l.from), l.from);
        }
        finishContext() {
            let t = this.stack.pop(), l = this.stack[this.stack.length - 1];
            l.addChild(t.toTree(this.parser.nodeSet), t.from - l.from), this.block = l;
        }
        finish() {
            for (;this.stack.length > 1; ) this.finishContext();
            return this.addGaps(this.block.toTree(this.parser.nodeSet, this.lineStart));
        }
        addGaps(t) {
            return this.ranges.length > 1 ? xl(this.ranges, 0, t.topNode, this.ranges[0].from, this.reusePlaceholders) : t;
        }
        finishLeaf(t) {
            for (let a of t.parsers) if (a.finish(this, t)) return;
            let l = Ct(this.parser.parseInline(t.content, t.start), t.marks);
            this.addNode(this.buffer.writeElements(l, -t.start).finish(P.Paragraph, t.content.length), t.start);
        }
        elt(t, l, a, n) {
            return typeof t == "string" ? R(this.parser.getNodeType(t), l, a, n) : new wl(t, l);
        }
        get buffer() {
            return new yl(this.parser.nodeSet);
        }
    }
    function xl(e, t, l, a, n) {
        let o = e[t].to, r = [], i = [], c = l.from + a;
        function u(s, m) {
            for (;m ? s >= o : s > o; ) {
                let p = e[t + 1].from - o;
                a += p, s += p, t++, o = e[t].to;
            }
        }
        for (let s = l.firstChild; s; s = s.nextSibling) {
            u(s.from + a, !0);
            let m, p = s.from + a, S = n.get(s.tree);
            S ? m = S : s.to + a > o ? (m = xl(e, t, s, a, n), u(s.to + a, !1)) : m = s.toTree(), 
            r.push(m), i.push(p - c);
        }
        return u(l.to + a, !1), new we(l.type, r, i, l.to + a - c, l.tree ? l.tree.propValues : void 0);
    }
    class rt extends Jr {
        constructor(t, l, a, n, o, r, i, c, u) {
            super(), this.nodeSet = t, this.blockParsers = l, this.leafBlockParsers = a, 
            this.blockNames = n, this.endLeafBlock = o, this.skipContextMarkup = r, 
            this.inlineParsers = i, this.inlineNames = c, this.wrappers = u, this.nodeTypes = Object.create(null);
            for (let s of t.types) this.nodeTypes[s.name] = s.id;
        }
        createParse(t, l, a) {
            let n = new wo(this, t, l, a);
            for (let o of this.wrappers) n = o(n, t, l, a);
            return n;
        }
        configure(t) {
            let l = Tt(t);
            if (!l) return this;
            let {
                nodeSet: a,
                skipContextMarkup: n
            } = this, o = this.blockParsers.slice(), r = this.leafBlockParsers.slice(), i = this.blockNames.slice(), c = this.inlineParsers.slice(), u = this.inlineNames.slice(), s = this.endLeafBlock.slice(), m = this.wrappers;
            if (ze(l.defineNodes)) {
                n = Object.assign({}, n);
                let p, S = a.types.slice();
                for (let O of l.defineNodes) {
                    let {
                        name: b,
                        block: k,
                        composite: y,
                        style: T
                    } = typeof O == "string" ? {
                        name: O
                    } : O;
                    if (S.some($ => $.name == b)) continue;
                    y && (n[S.length] = ($, Q, V) => y(Q, V, $.value));
                    let _ = S.length, w = y ? [ "Block", "BlockContext" ] : k ? _ >= P.ATXHeading1 && _ <= P.SetextHeading2 ? [ "Block", "LeafBlock", "Heading" ] : [ "Block", "LeafBlock" ] : void 0;
                    S.push(pt.define({
                        id: _,
                        name: b,
                        props: w && [ [ Xe.group, w ] ]
                    })), T && (p || (p = {}), Array.isArray(T) || T instanceof ei ? p[b] = T : Object.assign(p, T));
                }
                a = new Hn(S), p && (a = a.extend(ht(p)));
            }
            if (ze(l.props) && (a = a.extend(...l.props)), ze(l.remove)) for (let p of l.remove) {
                let S = this.blockNames.indexOf(p), O = this.inlineNames.indexOf(p);
                S > -1 && (o[S] = r[S] = void 0), O > -1 && (c[O] = void 0);
            }
            if (ze(l.parseBlock)) for (let p of l.parseBlock) {
                let S = i.indexOf(p.name);
                if (S > -1) o[S] = p.parse, r[S] = p.leaf; else {
                    let O = p.before ? it(i, p.before) : p.after ? it(i, p.after) + 1 : i.length - 1;
                    o.splice(O, 0, p.parse), r.splice(O, 0, p.leaf), i.splice(O, 0, p.name);
                }
                p.endLeaf && s.push(p.endLeaf);
            }
            if (ze(l.parseInline)) for (let p of l.parseInline) {
                let S = u.indexOf(p.name);
                if (S > -1) c[S] = p.parse; else {
                    let O = p.before ? it(u, p.before) : p.after ? it(u, p.after) + 1 : u.length - 1;
                    c.splice(O, 0, p.parse), u.splice(O, 0, p.name);
                }
            }
            return l.wrap && (m = m.concat(l.wrap)), new rt(a, o, r, i, s, n, c, u, m);
        }
        getNodeType(t) {
            let l = this.nodeTypes[t];
            if (l == null) throw new RangeError(`Unknown node type '${t}'`);
            return l;
        }
        parseInline(t, l) {
            let a = new $o(this, t, l);
            e: for (let n = l; n < a.end; ) {
                let o = a.char(n);
                for (let r of this.inlineParsers) if (r) {
                    let i = r(a, o, n);
                    if (i >= 0) {
                        n = i;
                        continue e;
                    }
                }
                n++;
            }
            return a.resolveMarkers(0);
        }
    }
    function ze(e) {
        return e != null && e.length > 0;
    }
    function Tt(e) {
        if (!Array.isArray(e)) return e;
        if (e.length == 0) return null;
        let t = Tt(e[0]);
        if (e.length == 1) return t;
        let l = Tt(e.slice(1));
        if (!l || !t) return t || l;
        let a = (r, i) => (r || Ee).concat(i || Ee), n = t.wrap, o = l.wrap;
        return {
            props: a(t.props, l.props),
            defineNodes: a(t.defineNodes, l.defineNodes),
            parseBlock: a(t.parseBlock, l.parseBlock),
            parseInline: a(t.parseInline, l.parseInline),
            remove: a(t.remove, l.remove),
            wrap: n ? o ? (r, i, c, u) => n(o(r, i, c, u), i, c, u) : n : o
        };
    }
    function it(e, t) {
        let l = e.indexOf(t);
        if (l < 0) throw new RangeError(`Position specified relative to unknown parser ${t}`);
        return l;
    }
    let kl = [ pt.none ];
    for (let e, t = 1; e = P[t]; t++) kl[t] = pt.define({
        id: t,
        name: e,
        props: t >= P.Escape ? [] : [ [ Xe.group, t in dl ? [ "Block", "BlockContext" ] : [ "Block", "LeafBlock" ] ] ],
        top: e == "Document"
    });
    const Ee = [];
    class yl {
        constructor(t) {
            this.nodeSet = t, this.content = [], this.nodes = [];
        }
        write(t, l, a, n = 0) {
            return this.content.push(t, l, a, 4 + 4 * n), this;
        }
        writeElements(t, l = 0) {
            for (let a of t) a.writeTo(this, l);
            return this;
        }
        finish(t, l) {
            return we.build({
                buffer: this.content,
                nodeSet: this.nodeSet,
                reused: this.nodes,
                topID: t,
                length: l
            });
        }
    }
    let je = class {
        constructor(e, t, l, a = Ee) {
            this.type = e, this.from = t, this.to = l, this.children = a;
        }
        writeTo(e, t) {
            let l = e.content.length;
            e.writeElements(this.children, t), e.content.push(this.type, this.from + t, this.to + t, e.content.length + 4 - l);
        }
        toTree(e) {
            return new yl(e).writeElements(this.children, -this.from).finish(this.type, this.to - this.from);
        }
    };
    class wl {
        constructor(t, l) {
            this.tree = t, this.from = l;
        }
        get to() {
            return this.from + this.tree.length;
        }
        get type() {
            return this.tree.type.id;
        }
        get children() {
            return Ee;
        }
        writeTo(t, l) {
            t.nodes.push(this.tree), t.content.push(t.nodes.length - 1, this.from + l, this.to + l, -1);
        }
        toTree() {
            return this.tree;
        }
    }
    function R(e, t, l, a) {
        return new je(e, t, l, a);
    }
    const Tl = {
        resolve: "Emphasis",
        mark: "EmphasisMark"
    }, Pl = {
        resolve: "Emphasis",
        mark: "EmphasisMark"
    }, Ve = {}, Pt = {};
    class re {
        constructor(t, l, a, n) {
            this.type = t, this.from = l, this.to = a, this.side = n;
        }
    }
    const To = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let Ne = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
    try {
        Ne = new RegExp("[\\p{Pc}|\\p{Pd}|\\p{Pe}|\\p{Pf}|\\p{Pi}|\\p{Po}|\\p{Ps}]", "u");
    } catch {}
    const $t = {
        Escape(e, t, l) {
            if (t != 92 || l == e.end - 1) return -1;
            let a = e.char(l + 1);
            for (let n = 0; n < 32; n++) if (To.charCodeAt(n) == a) return e.append(R(P.Escape, l, l + 2));
            return -1;
        },
        Entity(e, t, l) {
            if (t != 38) return -1;
            let a = /^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(e.slice(l + 1, l + 31));
            return a ? e.append(R(P.Entity, l, l + 1 + a[0].length)) : -1;
        },
        InlineCode(e, t, l) {
            if (t != 96 || l && e.char(l - 1) == 96) return -1;
            let a = l + 1;
            for (;a < e.end && e.char(a) == 96; ) a++;
            let n = a - l, o = 0;
            for (;a < e.end; a++) if (e.char(a) == 96) {
                if (o++, o == n && e.char(a + 1) != 96) return e.append(R(P.InlineCode, l, a + 1, [ R(P.CodeMark, l, l + n), R(P.CodeMark, a + 1 - n, a + 1) ]));
            } else o = 0;
            return -1;
        },
        HTMLTag(e, t, l) {
            if (t != 60 || l == e.end - 1) return -1;
            let a = e.slice(l + 1, e.end), n = /^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(a);
            if (n) return e.append(R(P.Autolink, l, l + 1 + n[0].length, [ R(P.LinkMark, l, l + 1), R(P.URL, l + 1, l + n[0].length), R(P.LinkMark, l + n[0].length, l + 1 + n[0].length) ]));
            let o = /^!--[^>](?:-[^-]|[^-])*?-->/i.exec(a);
            if (o) return e.append(R(P.Comment, l, l + 1 + o[0].length));
            let r = /^\?[^]*?\?>/.exec(a);
            if (r) return e.append(R(P.ProcessingInstruction, l, l + 1 + r[0].length));
            let i = /^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(a);
            return i ? e.append(R(P.HTMLTag, l, l + 1 + i[0].length)) : -1;
        },
        Emphasis(e, t, l) {
            if (t != 95 && t != 42) return -1;
            let a = l + 1;
            for (;e.char(a) == t; ) a++;
            let n = e.slice(l - 1, l), o = e.slice(a, a + 1), r = Ne.test(n), i = Ne.test(o), c = /\s|^$/.test(n), u = /\s|^$/.test(o), s = !u && (!i || c || r), m = !c && (!r || u || i), p = s && (t == 42 || !m || r), S = m && (t == 42 || !s || i);
            return e.append(new re(t == 95 ? Tl : Pl, l, a, (p ? 1 : 0) | (S ? 2 : 0)));
        },
        HardBreak(e, t, l) {
            if (t == 92 && e.char(l + 1) == 10) return e.append(R(P.HardBreak, l, l + 2));
            if (t == 32) {
                let a = l + 1;
                for (;e.char(a) == 32; ) a++;
                if (e.char(a) == 10 && a >= l + 2) return e.append(R(P.HardBreak, l, a + 1));
            }
            return -1;
        },
        Link: (e, t, l) => t == 91 ? e.append(new re(Ve, l, l + 1, 1)) : -1,
        Image: (e, t, l) => t == 33 && e.char(l + 1) == 91 ? e.append(new re(Pt, l, l + 2, 1)) : -1,
        LinkEnd(e, t, l) {
            if (t != 93) return -1;
            for (let a = e.parts.length - 1; a >= 0; a--) {
                let n = e.parts[a];
                if (n instanceof re && (n.type == Ve || n.type == Pt)) {
                    if (!n.side || e.skipSpace(n.to) == l && !/[(\[]/.test(e.slice(l + 1, l + 2))) return e.parts[a] = null, 
                    -1;
                    let o = e.takeContent(a), r = e.parts[a] = Po(e, o, n.type == Ve ? P.Link : P.Image, n.from, l + 1);
                    if (n.type == Ve) for (let i = 0; i < a; i++) {
                        let c = e.parts[i];
                        c instanceof re && c.type == Ve && (c.side = 0);
                    }
                    return r.to;
                }
            }
            return -1;
        }
    };
    function Po(e, t, l, a, n) {
        let {
            text: o
        } = e, r = e.char(n), i = n;
        if (t.unshift(R(P.LinkMark, a, a + (l == P.Image ? 2 : 1))), t.push(R(P.LinkMark, n - 1, n)), 
        r == 40) {
            let c, u = e.skipSpace(n + 1), s = $l(o, u - e.offset, e.offset);
            s && (u = e.skipSpace(s.to), u != s.to && (c = Cl(o, u - e.offset, e.offset), 
            c && (u = e.skipSpace(c.to)))), e.char(u) == 41 && (t.push(R(P.LinkMark, n, n + 1)), 
            i = u + 1, s && t.push(s), c && t.push(c), t.push(R(P.LinkMark, u, i)));
        } else if (r == 91) {
            let c = El(o, n - e.offset, e.offset, !1);
            c && (t.push(c), i = c.to);
        }
        return R(l, a, i, t);
    }
    function $l(e, t, l) {
        if (e.charCodeAt(t) == 60) {
            for (let a = t + 1; a < e.length; a++) {
                let n = e.charCodeAt(a);
                if (n == 62) return R(P.URL, t + l, a + 1 + l);
                if (n == 60 || n == 10) return !1;
            }
            return null;
        }
        {
            let a = 0, n = t;
            for (let o = !1; n < e.length; n++) {
                let r = e.charCodeAt(n);
                if (oe(r)) break;
                if (o) o = !1; else if (r == 40) a++; else if (r == 41) {
                    if (!a) break;
                    a--;
                } else r == 92 && (o = !0);
            }
            return n > t ? R(P.URL, t + l, n + l) : n == e.length && null;
        }
    }
    function Cl(e, t, l) {
        let a = e.charCodeAt(t);
        if (a != 39 && a != 34 && a != 40) return !1;
        let n = a == 40 ? 41 : a;
        for (let o = t + 1, r = !1; o < e.length; o++) {
            let i = e.charCodeAt(o);
            if (r) r = !1; else {
                if (i == n) return R(P.LinkTitle, t + l, o + 1 + l);
                i == 92 && (r = !0);
            }
        }
        return null;
    }
    function El(e, t, l, a) {
        for (let n = !1, o = t + 1, r = Math.min(e.length, o + 999); o < r; o++) {
            let i = e.charCodeAt(o);
            if (n) n = !1; else {
                if (i == 93) return !a && R(P.LinkLabel, t + l, o + 1 + l);
                if (a && !oe(i) && (a = !1), i == 91) return !1;
                i == 92 && (n = !0);
            }
        }
        return null;
    }
    class $o {
        constructor(t, l, a) {
            this.parser = t, this.text = l, this.offset = a, this.parts = [];
        }
        char(t) {
            return t >= this.end ? -1 : this.text.charCodeAt(t - this.offset);
        }
        get end() {
            return this.offset + this.text.length;
        }
        slice(t, l) {
            return this.text.slice(t - this.offset, l - this.offset);
        }
        append(t) {
            return this.parts.push(t), t.to;
        }
        addDelimiter(t, l, a, n, o) {
            return this.append(new re(t, l, a, (n ? 1 : 0) | (o ? 2 : 0)));
        }
        get hasOpenLink() {
            for (let t = this.parts.length - 1; t >= 0; t--) {
                let l = this.parts[t];
                if (l instanceof re && (l.type == Ve || l.type == Pt)) return !0;
            }
            return !1;
        }
        addElement(t) {
            return this.append(t);
        }
        resolveMarkers(t) {
            for (let a = t; a < this.parts.length; a++) {
                let n = this.parts[a];
                if (!(n instanceof re && n.type.resolve && 2 & n.side)) continue;
                let o, r = n.type == Tl || n.type == Pl, i = n.to - n.from, c = a - 1;
                for (;c >= t; c--) {
                    let O = this.parts[c];
                    if (O instanceof re && 1 & O.side && O.type == n.type && !(r && (1 & n.side || 2 & O.side) && (O.to - O.from + i) % 3 == 0 && ((O.to - O.from) % 3 || i % 3))) {
                        o = O;
                        break;
                    }
                }
                if (!o) continue;
                let u = n.type.resolve, s = [], m = o.from, p = n.to;
                if (r) {
                    let O = Math.min(2, o.to - o.from, i);
                    m = o.to - O, p = n.from + O, u = O == 1 ? "Emphasis" : "StrongEmphasis";
                }
                o.type.mark && s.push(this.elt(o.type.mark, m, o.to));
                for (let O = c + 1; O < a; O++) this.parts[O] instanceof je && s.push(this.parts[O]), 
                this.parts[O] = null;
                n.type.mark && s.push(this.elt(n.type.mark, n.from, p));
                let S = this.elt(u, m, p, s);
                this.parts[c] = r && o.from != m ? new re(o.type, o.from, m, o.side) : null, 
                (this.parts[a] = r && n.to != p ? new re(n.type, p, n.to, n.side) : null) ? this.parts.splice(a, 0, S) : this.parts[a] = S;
            }
            let l = [];
            for (let a = t; a < this.parts.length; a++) {
                let n = this.parts[a];
                n instanceof je && l.push(n);
            }
            return l;
        }
        findOpeningDelimiter(t) {
            for (let l = this.parts.length - 1; l >= 0; l--) {
                let a = this.parts[l];
                if (a instanceof re && a.type == t) return l;
            }
            return null;
        }
        takeContent(t) {
            let l = this.resolveMarkers(t);
            return this.parts.length = t, l;
        }
        skipSpace(t) {
            return Be(this.text, t - this.offset) + this.offset;
        }
        elt(t, l, a, n) {
            return typeof t == "string" ? R(this.parser.getNodeType(t), l, a, n) : new wl(t, l);
        }
    }
    function Ct(e, t) {
        if (!t.length) return e;
        if (!e.length) return t;
        let l = e.slice(), a = 0;
        for (let n of t) {
            for (;a < l.length && l[a].to < n.to; ) a++;
            if (a < l.length && l[a].from < n.from) {
                let o = l[a];
                o instanceof je && (l[a] = new je(o.type, o.from, o.to, Ct(o.children, [ n ])));
            } else l.splice(a++, 0, n);
        }
        return l;
    }
    const Co = [ P.CodeBlock, P.ListItem, P.OrderedList, P.BulletList ];
    class Eo {
        constructor(t, l) {
            this.fragments = t, this.input = l, this.i = 0, this.fragment = null, 
            this.fragmentEnd = -1, this.cursor = null, t.length && (this.fragment = t[this.i++]);
        }
        nextFragment() {
            this.fragment = this.i < this.fragments.length ? this.fragments[this.i++] : null, 
            this.cursor = null, this.fragmentEnd = -1;
        }
        moveTo(t, l) {
            for (;this.fragment && this.fragment.to <= t; ) this.nextFragment();
            if (!this.fragment || this.fragment.from > (t ? t - 1 : 0)) return !1;
            if (this.fragmentEnd < 0) {
                let o = this.fragment.to;
                for (;o > 0 && this.input.read(o - 1, o) != `
`; ) o--;
                this.fragmentEnd = o ? o - 1 : 0;
            }
            let a = this.cursor;
            a || (a = this.cursor = this.fragment.tree.cursor(), a.firstChild());
            let n = t + this.fragment.offset;
            for (;a.to <= n; ) if (!a.parent()) return !1;
            for (;;) {
                if (a.from >= n) return this.fragment.from <= l;
                if (!a.childAfter(n)) return !1;
            }
        }
        matches(t) {
            let l = this.cursor.tree;
            return l && l.prop(Xe.contextHash) == t;
        }
        takeNodes(t) {
            let l = this.cursor, a = this.fragment.offset, n = this.fragmentEnd - (this.fragment.openEnd ? 1 : 0), o = t.absoluteLineStart, r = o, i = t.block.children.length, c = r, u = i;
            for (;;) {
                if (l.to - a > n) {
                    if (l.type.isAnonymous && l.firstChild()) continue;
                    break;
                }
                let s = Vl(l.from - a, t.ranges);
                if (l.to - a <= t.ranges[t.rangeI].to) t.addNode(l.tree, s); else {
                    let m = new we(t.parser.nodeSet.types[P.Paragraph], [], [], 0, t.block.hashProp);
                    t.reusePlaceholders.set(m, l.tree), t.addNode(m, s);
                }
                if (l.type.is("Block") && (Co.indexOf(l.type.id) < 0 ? (r = l.to - a, 
                i = t.block.children.length) : (r = c, i = u, c = l.to - a, u = t.block.children.length)), 
                !l.nextSibling()) break;
            }
            for (;t.block.children.length > i; ) t.block.children.pop(), t.block.positions.pop();
            return r - o;
        }
    }
    function Vl(e, t) {
        let l = e;
        for (let a = 1; a < t.length; a++) {
            let n = t[a - 1].to, o = t[a].from;
            n < e && (l -= o - n);
        }
        return l;
    }
    const Vo = ht({
        "Blockquote/...": h.quote,
        HorizontalRule: h.contentSeparator,
        "ATXHeading1/... SetextHeading1/...": h.heading1,
        "ATXHeading2/... SetextHeading2/...": h.heading2,
        "ATXHeading3/...": h.heading3,
        "ATXHeading4/...": h.heading4,
        "ATXHeading5/...": h.heading5,
        "ATXHeading6/...": h.heading6,
        "Comment CommentBlock": h.comment,
        Escape: h.escape,
        Entity: h.character,
        "Emphasis/...": h.emphasis,
        "StrongEmphasis/...": h.strong,
        "Link/... Image/...": h.link,
        "OrderedList/... BulletList/...": h.list,
        "BlockQuote/...": h.quote,
        "InlineCode CodeText": h.monospace,
        "URL Autolink": h.url,
        "HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark": h.processingInstruction,
        "CodeInfo LinkLabel": h.labelName,
        LinkTitle: h.string,
        Paragraph: h.content
    }), Qo = new rt(new Hn(kl).extend(Vo), Object.keys(ot).map(e => ot[e]), Object.keys(ot).map(e => xo[e]), Object.keys(ot), ko, dl, Object.keys($t).map(e => $t[e]), Object.keys($t), []);
    function Lo(e, t, l) {
        let a = [];
        for (let n = e.firstChild, o = t; ;n = n.nextSibling) {
            let r = n ? n.from : l;
            if (r > o && a.push({
                from: o,
                to: r
            }), !n) break;
            o = n.to;
        }
        return a;
    }
    const Ao = {
        resolve: "Strikethrough",
        mark: "StrikethroughMark"
    }, Io = {
        defineNodes: [ {
            name: "Strikethrough",
            style: {
                "Strikethrough/...": h.strikethrough
            }
        }, {
            name: "StrikethroughMark",
            style: h.processingInstruction
        } ],
        parseInline: [ {
            name: "Strikethrough",
            parse(e, t, l) {
                if (t != 126 || e.char(l + 1) != 126 || e.char(l + 2) == 126) return -1;
                let a = e.slice(l - 1, l), n = e.slice(l + 2, l + 3), o = /\s|^$/.test(a), r = /\s|^$/.test(n), i = Ne.test(a), c = Ne.test(n);
                return e.addDelimiter(Ao, l, l + 2, !r && (!c || o || i), !o && (!i || r || c));
            },
            after: "Emphasis"
        } ]
    };
    function We(e, t, l = 0, a, n = 0) {
        let o = 0, r = !0, i = -1, c = -1, u = !1, s = () => {
            a.push(e.elt("TableCell", n + i, n + c, e.parser.parseInline(t.slice(i, c), n + i)));
        };
        for (let m = l; m < t.length; m++) {
            let p = t.charCodeAt(m);
            p != 124 || u ? (u || p != 32 && p != 9) && (i < 0 && (i = m), c = m + 1) : ((!r || i > -1) && o++, 
            r = !1, a && (i > -1 && s(), a.push(e.elt("TableDelimiter", m + n, m + n + 1))), 
            i = c = -1), u = !u && p == 92;
        }
        return i > -1 && (o++, a && s()), o;
    }
    function Ql(e, t) {
        for (let l = t; l < e.length; l++) {
            let a = e.charCodeAt(l);
            if (a == 124) return !0;
            a == 92 && l++;
        }
        return !1;
    }
    const Ll = /^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;
    class Al {
        constructor() {
            this.rows = null;
        }
        nextLine(t, l, a) {
            if (this.rows == null) {
                let n;
                if (this.rows = !1, (l.next == 45 || l.next == 58 || l.next == 124) && Ll.test(n = l.text.slice(l.pos))) {
                    let o = [];
                    We(t, a.content, 0, o, a.start) == We(t, n, l.pos) && (this.rows = [ t.elt("TableHeader", a.start, a.start + a.content.length, o), t.elt("TableDelimiter", t.lineStart + l.pos, t.lineStart + l.text.length) ]);
                }
            } else if (this.rows) {
                let n = [];
                We(t, l.text, l.pos, n, t.lineStart), this.rows.push(t.elt("TableRow", t.lineStart + l.pos, t.lineStart + l.text.length, n));
            }
            return !1;
        }
        finish(t, l) {
            return !!this.rows && (t.addLeafElement(l, t.elt("Table", l.start, l.start + l.content.length, this.rows)), 
            !0);
        }
    }
    const Ro = {
        defineNodes: [ {
            name: "Table",
            block: !0
        }, {
            name: "TableHeader",
            style: {
                "TableHeader/...": h.heading
            }
        }, "TableRow", {
            name: "TableCell",
            style: h.content
        }, {
            name: "TableDelimiter",
            style: h.processingInstruction
        } ],
        parseBlock: [ {
            name: "Table",
            leaf: (e, t) => Ql(t.content, 0) ? new Al() : null,
            endLeaf(e, t, l) {
                if (l.parsers.some(n => n instanceof Al) || !Ql(t.text, t.basePos)) return !1;
                let a = e.scanLine(e.absoluteLineEnd + 1).text;
                return Ll.test(a) && We(e, t.text, t.basePos) == We(e, a, t.basePos);
            },
            before: "SetextHeading"
        } ]
    };
    class Xo {
        nextLine() {
            return !1;
        }
        finish(t, l) {
            return t.addLeafElement(l, t.elt("Task", l.start, l.start + l.content.length, [ t.elt("TaskMarker", l.start, l.start + 3), ...t.parser.parseInline(l.content.slice(3), l.start + 3) ])), 
            !0;
        }
    }
    const Do = {
        defineNodes: [ {
            name: "Task",
            block: !0,
            style: h.list
        }, {
            name: "TaskMarker",
            style: h.atom
        } ],
        parseBlock: [ {
            name: "TaskList",
            leaf: (e, t) => /^\[[ xX]\][ \t]/.test(t.content) && e.parentType().name == "ListItem" ? new Xo() : null,
            after: "SetextHeading"
        } ]
    }, Il = /(www\.)|(https?:\/\/)|([\w.+-]+@)|(mailto:|xmpp:)/gy, Rl = /[\w-]+(\.[\w-]+)+(\/[^\s<]*)?/gy, Mo = /[\w-]+\.[\w-]+($|\/)/, Xl = /[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy, Dl = /\/[a-zA-Z\d@.]+/gy;
    function Ml(e, t, l, a) {
        let n = 0;
        for (let o = t; o < l; o++) e[o] == a && n++;
        return n;
    }
    function ql(e, t) {
        Xl.lastIndex = t;
        let l = Xl.exec(e);
        if (!l) return -1;
        let a = l[0][l[0].length - 1];
        return a == "_" || a == "-" ? -1 : t + l[0].length - (a == "." ? 1 : 0);
    }
    const qo = [ Ro, Do, Io, {
        parseInline: [ {
            name: "Autolink",
            parse(e, t, l) {
                let a = l - e.offset;
                Il.lastIndex = a;
                let n = Il.exec(e.text), o = -1;
                return n ? (n[1] || n[2] ? (o = function(r, i) {
                    Rl.lastIndex = i;
                    let c = Rl.exec(r);
                    if (!c || Mo.exec(c[0])[0].indexOf("_") > -1) return -1;
                    let u = i + c[0].length;
                    for (;;) {
                        let s, m = r[u - 1];
                        if (/[?!.,:*_~]/.test(m) || m == ")" && Ml(r, i, u, ")") > Ml(r, i, u, "(")) u--; else {
                            if (m != ";" || !(s = /&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(r.slice(i, u)))) break;
                            u = i + s.index;
                        }
                    }
                    return u;
                }(e.text, a + n[0].length), o > -1 && e.hasOpenLink && (o = a + /([^\[\]]|\[[^\]]*\])*/.exec(e.text.slice(a, o))[0].length)) : n[3] ? o = ql(e.text, a) : (o = ql(e.text, a + n[0].length), 
                o > -1 && n[0] == "xmpp:" && (Dl.lastIndex = o, n = Dl.exec(e.text), 
                n && (o = n.index + n[0].length))), o < 0 ? -1 : (e.addElement(e.elt("URL", l, o + e.offset)), 
                o + e.offset)) : -1;
            }
        } ]
    } ];
    function Bl(e, t, l) {
        return (a, n, o) => {
            if (n != e || a.char(o + 1) == e) return -1;
            let r = [ a.elt(l, o, o + 1) ];
            for (let i = o + 1; i < a.end; i++) {
                let c = a.char(i);
                if (c == e) return a.addElement(a.elt(t, o, i + 1, r.concat(a.elt(l, i, i + 1))));
                if (c == 92 && r.push(a.elt("Escape", i, 2 + i++)), oe(c)) break;
            }
            return -1;
        };
    }
    const Bo = {
        defineNodes: [ {
            name: "Superscript",
            style: h.special(h.content)
        }, {
            name: "SuperscriptMark",
            style: h.processingInstruction
        } ],
        parseInline: [ {
            name: "Superscript",
            parse: Bl(94, "Superscript", "SuperscriptMark")
        } ]
    }, zo = {
        defineNodes: [ {
            name: "Subscript",
            style: h.special(h.content)
        }, {
            name: "SubscriptMark",
            style: h.processingInstruction
        } ],
        parseInline: [ {
            name: "Subscript",
            parse: Bl(126, "Subscript", "SubscriptMark")
        } ]
    }, jo = {
        defineNodes: [ {
            name: "Emoji",
            style: h.character
        } ],
        parseInline: [ {
            name: "Emoji",
            parse(e, t, l) {
                let a;
                return t == 58 && (a = /^[a-zA-Z_0-9]+:/.exec(e.slice(l + 1, e.end))) ? e.addElement(e.elt("Emoji", l, l + 1 + a[0].length)) : -1;
            }
        } ]
    }, zl = 20, No = 22, jl = 23, Wo = 24, Et = 26, Nl = 27, Yo = 28, Ho = 31, Fo = 34, Zo = 37, Uo = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        frame: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
        menuitem: !0
    }, Go = {
        dd: !0,
        li: !0,
        optgroup: !0,
        option: !0,
        p: !0,
        rp: !0,
        rt: !0,
        tbody: !0,
        td: !0,
        tfoot: !0,
        th: !0,
        tr: !0
    }, Wl = {
        dd: {
            dd: !0,
            dt: !0
        },
        dt: {
            dd: !0,
            dt: !0
        },
        li: {
            li: !0
        },
        option: {
            option: !0,
            optgroup: !0
        },
        optgroup: {
            optgroup: !0
        },
        p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0
        },
        rp: {
            rp: !0,
            rt: !0
        },
        rt: {
            rp: !0,
            rt: !0
        },
        tbody: {
            tbody: !0,
            tfoot: !0
        },
        td: {
            td: !0,
            th: !0
        },
        tfoot: {
            tbody: !0
        },
        th: {
            td: !0,
            th: !0
        },
        thead: {
            tbody: !0,
            tfoot: !0
        },
        tr: {
            tr: !0
        }
    };
    function Yl(e) {
        return e == 9 || e == 10 || e == 13 || e == 32;
    }
    let Hl = null, Fl = null, Zl = 0;
    function Vt(e, t) {
        let l = e.pos + t;
        if (Zl == l && Fl == e) return Hl;
        let a = e.peek(t);
        for (;Yl(a); ) a = e.peek(++t);
        let n = "";
        for (;(o = a) == 45 || o == 46 || o == 58 || o >= 65 && o <= 90 || o == 95 || o >= 97 && o <= 122 || o >= 161; ) n += String.fromCharCode(a), 
        a = e.peek(++t);
        var o;
        return Fl = e, Zl = l, Hl = n ? n.toLowerCase() : a == Ko || a == Jo ? void 0 : null;
    }
    const Ko = 63, Jo = 33;
    function Ul(e, t) {
        this.name = e, this.parent = t;
    }
    const er = [ 6, 10, 7, 8, 9 ], tr = new ti({
        start: null,
        shift: (e, t, l, a) => er.indexOf(t) > -1 ? new Ul(Vt(a, 1) || "", e) : e,
        reduce: (e, t) => t == zl && e ? e.parent : e,
        reuse(e, t, l, a) {
            let n = t.type.id;
            return n == 6 || n == 36 ? new Ul(Vt(a, 1) || "", e) : e;
        },
        strict: !1
    }), lr = new Te((e, t) => {
        if (e.next != 60) return void (e.next < 0 && t.context && e.acceptToken(57));
        e.advance();
        let l = e.next == 47;
        l && e.advance();
        let a = Vt(e, 0);
        if (a === void 0) return;
        if (!a) return e.acceptToken(l ? 14 : 6);
        let n = t.context ? t.context.name : null;
        if (l) {
            if (a == n) return e.acceptToken(11);
            if (n && Go[n]) return e.acceptToken(57, -2);
            if (t.dialectEnabled(0)) return e.acceptToken(12);
            for (let o = t.context; o; o = o.parent) if (o.name == a) return;
            e.acceptToken(13);
        } else {
            if (a == "script") return e.acceptToken(7);
            if (a == "style") return e.acceptToken(8);
            if (a == "textarea") return e.acceptToken(9);
            if (Uo.hasOwnProperty(a)) return e.acceptToken(10);
            n && Wl[n] && Wl[n][a] ? e.acceptToken(57, -1) : e.acceptToken(6);
        }
    }, {
        contextual: !0
    }), ar = new Te(e => {
        for (let t = 0, l = 0; ;l++) {
            if (e.next < 0) {
                l && e.acceptToken(58);
                break;
            }
            if (e.next == 45) t++; else {
                if (e.next == 62 && t >= 2) {
                    l >= 3 && e.acceptToken(58, -2);
                    break;
                }
                t = 0;
            }
            e.advance();
        }
    }), nr = new Te((e, t) => {
        if (e.next == 47 && e.peek(1) == 62) {
            let l = t.dialectEnabled(1) || function(a) {
                for (;a; a = a.parent) if (a.name == "svg" || a.name == "math") return !0;
                return !1;
            }(t.context);
            e.acceptToken(l ? 5 : 4, 2);
        } else e.next == 62 && e.acceptToken(4, 1);
    });
    function Qt(e, t, l) {
        let a = 2 + e.length;
        return new Te(n => {
            for (let o = 0, r = 0, i = 0; ;i++) {
                if (n.next < 0) {
                    i && n.acceptToken(t);
                    break;
                }
                if (o == 0 && n.next == 60 || o == 1 && n.next == 47 || o >= 2 && o < a && n.next == e.charCodeAt(o - 2)) o++, 
                r++; else if (o != 2 && o != a || !Yl(n.next)) {
                    if (o == a && n.next == 62) {
                        i > r ? n.acceptToken(t, -r) : n.acceptToken(l, -(r - 2));
                        break;
                    }
                    if ((n.next == 10 || n.next == 13) && i) {
                        n.acceptToken(t, 1);
                        break;
                    }
                    o = r = 0;
                } else r++;
                n.advance();
            }
        });
    }
    const or = Qt("script", 54, 1), rr = Qt("style", 55, 2), ir = Qt("textarea", 56, 3), sr = ht({
        "Text RawText": h.content,
        "StartTag StartCloseTag SelfClosingEndTag EndTag": h.angleBracket,
        TagName: h.tagName,
        "MismatchedCloseTag/TagName": [ h.tagName, h.invalid ],
        AttributeName: h.attributeName,
        "AttributeValue UnquotedAttributeValue": h.attributeValue,
        Is: h.definitionOperator,
        "EntityReference CharacterReference": h.character,
        Comment: h.blockComment,
        ProcessingInst: h.processingInstruction,
        DoctypeDecl: h.documentMeta
    }), cr = Zn.deserialize({
        version: 14,
        states: ",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%ZQ&rO,59fO%fQ&rO,59iO%qQ&rO,59lO%|Q&rO,59nOOOa'#D^'#D^O&XOaO'#CxO&dOaO,59[OOOb'#D_'#D_O&lObO'#C{O&wObO,59[OOOd'#D`'#D`O'POdO'#DOO'[OdO,59[OOO`'#Da'#DaO'dO!rO,59[O'kQ#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'pO$fO,59oOOO`,59o,59oO'xQ#|O,59qO'}Q#|O,59rOOO`-E7W-E7WO(SQ&rO'#CsOOQW'#DZ'#DZO(bQ&rO1G.wOOOa1G.w1G.wOOO`1G/Y1G/YO(mQ&rO1G/QOOOb1G/Q1G/QO(xQ&rO1G/TOOOd1G/T1G/TO)TQ&rO1G/WOOO`1G/W1G/WO)`Q&rO1G/YOOOa-E7[-E7[O)kQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)pQ#tO'#C|OOOd-E7^-E7^O)uQ#tO'#DPOOO`-E7_-E7_O)zQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O*PQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOO`7+$t7+$tOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rO*[Q#|O,59eO*aQ#|O,59hO*fQ#|O,59kOOO`1G/X1G/XO*kO7[O'#CvO*|OMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O+_O7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+pOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",
        stateData: ",]~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OT}OhyO~OS!POT}OhyO~OS!ROT}OhyO~OS!TOT}OhyO~OS}OT}OhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXTgXhgX~OS!fOT!gOhyO~OS!hOT!gOhyO~OS!iOT!gOhyO~OS!jOT!gOhyO~OS!gOT!gOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",
        goto: "%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
        nodeNames: "⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
        maxTerm: 67,
        context: tr,
        nodeProps: [ [ "closedBy", -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, "EndTag", 6, "EndTag SelfClosingEndTag", -4, 21, 30, 33, 36, "CloseTag" ], [ "openedBy", 4, "StartTag StartCloseTag", 5, "StartTag", -4, 29, 32, 35, 37, "OpenTag" ], [ "group", -9, 14, 17, 18, 19, 20, 39, 40, 41, 42, "Entity", 16, "Entity TextContent", -3, 28, 31, 34, "TextContent Entity" ], [ "isolate", -11, 21, 29, 30, 32, 33, 35, 36, 37, 38, 41, 42, "ltr", -3, 26, 27, 39, "" ] ],
        propSources: [ sr ],
        skippedNodes: [ 0 ],
        repeatNodeCount: 9,
        tokenData: "!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
        tokenizers: [ or, rr, ir, nr, lr, ar, 0, 1, 2, 3, 4, 5 ],
        topRules: {
            Document: [ 0, 15 ]
        },
        dialects: {
            noMatch: 0,
            selfClosing: 509
        },
        tokenPrec: 511
    });
    function Gl(e, t) {
        let l = Object.create(null);
        for (let a of e.getChildren(jl)) {
            let n = a.getChild(Wo), o = a.getChild(Et) || a.getChild(Nl);
            n && (l[t.read(n.from, n.to)] = o ? o.type.id == Et ? t.read(o.from + 1, o.to - 1) : t.read(o.from, o.to) : "");
        }
        return l;
    }
    function Kl(e, t) {
        let l = e.getChild(No);
        return l ? t.read(l.from, l.to) : " ";
    }
    function Lt(e, t, l) {
        let a;
        for (let n of l) if (!n.attrs || n.attrs(a || (a = Gl(e.node.parent.firstChild, t)))) return {
            parser: n.parser
        };
        return null;
    }
    function Jl(e = [], t = []) {
        let l = [], a = [], n = [], o = [];
        for (let i of e) (i.tag == "script" ? l : i.tag == "style" ? a : i.tag == "textarea" ? n : o).push(i);
        let r = t.length ? Object.create(null) : null;
        for (let i of t) (r[i.name] || (r[i.name] = [])).push(i);
        return Fn((i, c) => {
            let u = i.type.id;
            if (u == Yo) return Lt(i, c, l);
            if (u == Ho) return Lt(i, c, a);
            if (u == Fo) return Lt(i, c, n);
            if (u == zl && o.length) {
                let s, m = i.node, p = m.firstChild, S = p && Kl(p, c);
                if (S) {
                    for (let O of o) if (O.tag == S && (!O.attrs || O.attrs(s || (s = Gl(p, c))))) {
                        let b = m.lastChild, k = b.type.id == Zo ? b.from : m.to;
                        if (k > p.to) return {
                            parser: O.parser,
                            overlay: [ {
                                from: p.to,
                                to: k
                            } ]
                        };
                    }
                }
            }
            if (r && u == jl) {
                let s, m = i.node;
                if (s = m.firstChild) {
                    let p = r[c.read(s.from, s.to)];
                    if (p) for (let S of p) {
                        if (S.tagName && S.tagName != Kl(m.parent, c)) continue;
                        let O = m.lastChild;
                        if (O.type.id == Et) {
                            let b = O.from + 1, k = O.lastChild, y = O.to - (k && k.isError ? 0 : 1);
                            if (y > b) return {
                                parser: S.parser,
                                overlay: [ {
                                    from: b,
                                    to: y
                                } ]
                            };
                        } else if (O.type.id == Nl) return {
                            parser: S.parser,
                            overlay: [ {
                                from: O.from,
                                to: O.to
                            } ]
                        };
                    }
                }
            }
            return null;
        });
    }
    const ea = [ 9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288 ];
    function Ye(e) {
        return e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 161;
    }
    function ta(e) {
        return e >= 48 && e <= 57;
    }
    const ur = new Te((e, t) => {
        for (let l = !1, a = 0, n = 0; ;n++) {
            let {
                next: o
            } = e;
            if (Ye(o) || o == 45 || o == 95 || l && ta(o)) !l && (o != 45 || n > 0) && (l = !0), 
            a === n && o == 45 && a++, e.advance(); else {
                if (o != 92 || e.peek(1) == 10) {
                    l && e.acceptToken(o == 40 ? 100 : a == 2 && t.canShift(2) ? 2 : 101);
                    break;
                }
                e.advance(), e.next > -1 && e.advance(), l = !0;
            }
        }
    }), dr = new Te(e => {
        if (ea.includes(e.peek(-1))) {
            let {
                next: t
            } = e;
            (Ye(t) || t == 95 || t == 35 || t == 46 || t == 91 || t == 58 && Ye(e.peek(1)) || t == 45 || t == 38) && e.acceptToken(99);
        }
    }), mr = new Te(e => {
        if (!ea.includes(e.peek(-1))) {
            let {
                next: t
            } = e;
            if (t == 37 && (e.advance(), e.acceptToken(1)), Ye(t)) {
                do {
                    e.advance();
                } while (Ye(e.next) || ta(e.next));
                e.acceptToken(1);
            }
        }
    }), pr = ht({
        "AtKeyword import charset namespace keyframes media supports": h.definitionKeyword,
        "from to selector": h.keyword,
        NamespaceName: h.namespace,
        KeyframeName: h.labelName,
        KeyframeRangeName: h.operatorKeyword,
        TagName: h.tagName,
        ClassName: h.className,
        PseudoClassName: h.constant(h.className),
        IdName: h.labelName,
        "FeatureName PropertyName": h.propertyName,
        AttributeName: h.attributeName,
        NumberLiteral: h.number,
        KeywordQuery: h.keyword,
        UnaryQueryOp: h.operatorKeyword,
        "CallTag ValueName": h.atom,
        VariableName: h.variableName,
        Callee: h.operatorKeyword,
        Unit: h.unit,
        "UniversalSelector NestingSelector": h.definitionOperator,
        MatchOp: h.compareOperator,
        "ChildOp SiblingOp, LogicOp": h.logicOperator,
        BinOp: h.arithmeticOperator,
        Important: h.modifier,
        Comment: h.blockComment,
        ColorLiteral: h.color,
        "ParenthesizedContent StringLiteral": h.string,
        ":": h.punctuation,
        "PseudoOp #": h.derefOperator,
        "; ,": h.separator,
        "( )": h.paren,
        "[ ]": h.squareBracket,
        "{ }": h.brace
    }), hr = {
        __proto__: null,
        lang: 32,
        "nth-child": 32,
        "nth-last-child": 32,
        "nth-of-type": 32,
        "nth-last-of-type": 32,
        dir: 32,
        "host-context": 32,
        url: 60,
        "url-prefix": 60,
        domain: 60,
        regexp: 60,
        selector: 138
    }, fr = {
        __proto__: null,
        "@import": 118,
        "@media": 142,
        "@charset": 146,
        "@namespace": 150,
        "@keyframes": 156,
        "@supports": 168
    }, Or = {
        __proto__: null,
        not: 132,
        only: 132
    }, gr = Zn.deserialize({
        version: 14,
        states: ":^QYQ[OOO#_Q[OOP#fOWOOOOQP'#Cd'#CdOOQP'#Cc'#CcO#kQ[O'#CfO$_QXO'#CaO$fQ[O'#ChO$qQ[O'#DTO$vQ[O'#DWOOQP'#Em'#EmO${QdO'#DgO%jQ[O'#DtO${QdO'#DvO%{Q[O'#DxO&WQ[O'#D{O&`Q[O'#ERO&nQ[O'#ETOOQS'#El'#ElOOQS'#EW'#EWQYQ[OOO&uQXO'#CdO'jQWO'#DcO'oQWO'#EsO'zQ[O'#EsQOQWOOP(UO#tO'#C_POOO)C@[)C@[OOQP'#Cg'#CgOOQP,59Q,59QO#kQ[O,59QO(aQ[O'#E[O({QWO,58{O)TQ[O,59SO$qQ[O,59oO$vQ[O,59rO(aQ[O,59uO(aQ[O,59wO(aQ[O,59xO)`Q[O'#DbOOQS,58{,58{OOQP'#Ck'#CkOOQO'#DR'#DROOQP,59S,59SO)gQWO,59SO)lQWO,59SOOQP'#DV'#DVOOQP,59o,59oOOQO'#DX'#DXO)qQ`O,59rOOQS'#Cp'#CpO${QdO'#CqO)yQvO'#CsO+ZQtO,5:ROOQO'#Cx'#CxO)lQWO'#CwO+oQWO'#CyO+tQ[O'#DOOOQS'#Ep'#EpOOQO'#Dj'#DjO+|Q[O'#DqO,[QWO'#EtO&`Q[O'#DoO,jQWO'#DrOOQO'#Eu'#EuO)OQWO,5:`O,oQpO,5:bOOQS'#Dz'#DzO,wQWO,5:dO,|Q[O,5:dOOQO'#D}'#D}O-UQWO,5:gO-ZQWO,5:mO-cQWO,5:oOOQS-E8U-E8UO${QdO,59}O-kQ[O'#E^O-xQWO,5;_O-xQWO,5;_POOO'#EV'#EVP.TO#tO,58yPOOO,58y,58yOOQP1G.l1G.lO.zQXO,5:vOOQO-E8Y-E8YOOQS1G.g1G.gOOQP1G.n1G.nO)gQWO1G.nO)lQWO1G.nOOQP1G/Z1G/ZO/XQ`O1G/^O/rQXO1G/aO0YQXO1G/cO0pQXO1G/dO1WQWO,59|O1]Q[O'#DSO1dQdO'#CoOOQP1G/^1G/^O${QdO1G/^O1kQpO,59]OOQS,59_,59_O${QdO,59aO1sQWO1G/mOOQS,59c,59cO1xQ!bO,59eOOQS'#DP'#DPOOQS'#EY'#EYO2QQ[O,59jOOQS,59j,59jO2YQWO'#DjO2eQWO,5:VO2jQWO,5:]O&`Q[O,5:XO&`Q[O'#E_O2rQWO,5;`O2}QWO,5:ZO(aQ[O,5:^OOQS1G/z1G/zOOQS1G/|1G/|OOQS1G0O1G0OO3`QWO1G0OO3eQdO'#EOOOQS1G0R1G0ROOQS1G0X1G0XOOQS1G0Z1G0ZO3pQtO1G/iOOQO,5:x,5:xO4WQ[O,5:xOOQO-E8[-E8[O4eQWO1G0yPOOO-E8T-E8TPOOO1G.e1G.eOOQP7+$Y7+$YOOQP7+$x7+$xO${QdO7+$xOOQS1G/h1G/hO4pQXO'#ErO4wQWO,59nO4|QtO'#EXO5tQdO'#EoO6OQWO,59ZO6TQpO7+$xOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%X7+%XO6]QWO1G/POOQS-E8W-E8WOOQS1G/U1G/UO${QdO1G/qOOQO1G/w1G/wOOQO1G/s1G/sO6bQWO,5:yOOQO-E8]-E8]O6pQXO1G/xOOQS7+%j7+%jO6wQYO'#CsOOQO'#EQ'#EQO7SQ`O'#EPOOQO'#EP'#EPO7_QWO'#E`O7gQdO,5:jOOQS,5:j,5:jO7rQtO'#E]O${QdO'#E]O8sQdO7+%TOOQO7+%T7+%TOOQO1G0d1G0dO9WQpO<<HdO9`QWO,5;^OOQP1G/Y1G/YOOQS-E8V-E8VO${QdO'#EZO9hQWO,5;ZOOQT1G.u1G.uOOQP<<Hd<<HdOOQS7+$k7+$kO9pQdO7+%]OOQO7+%d7+%dOOQO,5:k,5:kO3hQdO'#EaO7_QWO,5:zOOQS,5:z,5:zOOQS-E8^-E8^OOQS1G0U1G0UO9wQtO,5:wOOQS-E8Z-E8ZOOQO<<Ho<<HoOOQPAN>OAN>OO:xQdO,5:uOOQO-E8X-E8XOOQO<<Hw<<HwOOQO,5:{,5:{OOQO-E8_-E8_OOQS1G0f1G0f",
        stateData: ";[~O#ZOS#[QQ~OUYOXYO]VO^VOqXOxWO![aO!]ZO!i[O!k]O!m^O!p_O!v`O#XRO#bTO~OQfOUYOXYO]VO^VOqXOxWO![aO!]ZO!i[O!k]O!m^O!p_O!v`O#XeO#bTO~O#U#gP~P!ZO#[jO~O#XlO~O]qO^qOqsOtoOxrO!OtO!RvO#VuO#bnO~O!TwO~P#pO`}O#WzO#XyO~O#X!OO~O#X!QO~OQ![Ob!TOf![Oh![On!YOq!ZO#W!WO#X!SO#e!UO~Ob!^O!d!`O!g!aO#X!]O!T#hP~Oh!fOn!YO#X!eO~Oh!hO#X!hO~Ob!^O!d!`O!g!aO#X!]O~O!Y#hP~P%jO]WX]!WX^WXqWXtWXxWX!OWX!RWX!TWX#VWX#bWX~O]!mO~O!Y!nO#U#gX!S#gX~O#U#gX!S#gX~P!ZO#]!qO#^!qO#_!sO~OUYOXYO]VO^VOqXOxWO#XRO#bTO~OtoO!TwO~O`!zO#WzO#XyO~O!S#gP~P!ZOb#RO~Ob#SO~Op#TO|#UO~OP#WObgXjgX!YgX!dgX!ggX#XgXagXQgXfgXhgXngXqgXtgX!XgX#UgX#WgX#egXpgX!SgX~Ob!^Oj#XO!d!`O!g!aO#X!]O!Y#hP~Ob#[O~Op#`O#X#]O~Ob!^O!d!`O!g!aO#X#aO~Ot#eO!b#dO!T#hX!Y#hX~Ob#hO~Oj#XO!Y#jO~O!Y#kO~Oh#lOn!YO~O!T#mO~O!TwO!b#dO~O!TwO!Y#pO~O!Y#QX#U#QX!S#QX~P!ZO!Y!nO#U#ga!S#ga~O#]!qO#^!qO#_#wO~O]qO^qOqsOxrO!OtO!RvO#VuO#bnO~Ot#Oa!T#Oaa#Oa~P.`Op#yO|#zO~O]qO^qOqsOxrO#bnO~Ot}i!O}i!R}i!T}i#V}ia}i~P/aOt!Pi!O!Pi!R!Pi!T!Pi#V!Pia!Pi~P/aOt!Qi!O!Qi!R!Qi!T!Qi#V!Qia!Qi~P/aO!S#{O~Oa#fP~P(aOa#cP~P${Oa$SOj#XO~O!Y$UO~Oh$VOo$VO~Op$XO#X#]O~O]!`Xa!^X!b!^X~O]$YO~Oa$ZO!b#dO~Ot#eO!T#ha!Y#ha~O!b#dOt!ca!T!ca!Y!caa!ca~O!Y$`O~O!S$gO#X$bO#e$aO~Oj#XOt$iO!X$kO!Y!Vi#U!Vi!S!Vi~P${O!Y#Qa#U#Qa!S#Qa~P!ZO!Y!nO#U#gi!S#gi~Oa#fX~P#pOa$oO~Oj#XOQ!{Xa!{Xb!{Xf!{Xh!{Xn!{Xq!{Xt!{X#W!{X#X!{X#e!{X~Ot$qOa#cX~P${Oa$sO~Oj#XOp$tO~Oa$uO~O!b#dOt#Ra!T#Ra!Y#Ra~Oa$wO~P.`OP#WOtgX!TgX~O#e$aOt!sX!T!sX~Ot$yO!TwO~O!S$}O#X$bO#e$aO~Oj#XOQ#PXb#PXf#PXh#PXn#PXq#PXt#PX!X#PX!Y#PX#U#PX#W#PX#X#PX#e#PX!S#PX~Ot$iO!X%QO!Y!Vq#U!Vq!S!Vq~P${Oj#XOp%RO~OtoOa#fa~Ot$qOa#ca~Oa%UO~P${Oj#XOQ#Pab#Paf#Pah#Pan#Paq#Pat#Pa!X#Pa!Y#Pa#U#Pa#W#Pa#X#Pa#e#Pa!S#Pa~Oa!}at!}a~P${O#Zo#[#ej!R#e~",
        goto: "-g#jPPP#kP#nP#w$WP#w$g#wPP$mPPP$s$|$|P%`P$|P$|%z&^PPPP$|&vP&z'Q#wP'W#w'^P#wP#w#wPPP'd'y(WPP#nPP(_(_(i(_P(_P(_(_P#nP#nP#nP(l#nP(o(r(u(|#nP#nP)R)X)h)v)|*S*^*d*n*t*zPPPPPPPPPP+Q+ZP+v+yP,o,r,x-RRkQ_bOPdhw!n#skYOPdhotuvw!n#R#h#skSOPdhotuvw!n#R#h#sQmTR!tnQ{VR!xqQ!x}Q#Z!XR#x!zq![Z]!T!m#S#U#X#q#z$P$Y$i$j$q$v%Sp![Z]!T!m#S#U#X#q#z$P$Y$i$j$q$v%SU$d#m$f$yR$x$cq!XZ]!T!m#S#U#X#q#z$P$Y$i$j$q$v%Sp![Z]!T!m#S#U#X#q#z$P$Y$i$j$q$v%SQ!f^R#l!gT#^!Z#_Q|VR!yqQ!x|R#x!yQ!PWR!{rQ!RXR!|sQxUQ!wpQ#i!cQ#o!jQ#p!kQ${$eR%X$zSgPwQ!phQ#r!nR$l#sZfPhw!n#sa!b[`a!V!^!`#d#eR#b!^R!g^R!i_R#n!iS$e#m$fR%V$yV$c#m$f$yQ!rjR#v!rQdOShPwU!ldh#sR#s!nQ$P#SU$p$P$v%SQ$v$YR%S$qQ#_!ZR$W#_Q$r$PR%T$rQpUS!vp$nR$n#|Q$j#qR%P$jQ!ogS#t!o#uR#u!pQ#f!_R$^#fQ$f#mR$|$fQ$z$eR%W$z_cOPdhw!n#s^UOPdhw!n#sQ!uoQ!}tQ#OuQ#PvQ#|#RR$_#hR$Q#SQ!VZQ!d]Q#V!TQ#q!m[$O#S$P$Y$q$v%SQ$R#UQ$T#XS$h#q$jQ$m#zR%O$iR#}#RQiPR#QwQ!c[Q!kaR#Y!VU!_[a!VQ!j`Q#c!^Q#g!`Q$[#dR$]#e",
        nodeNames: "⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent ] [ LineNames LineName , PseudoClassName ArgList IdSelector # IdName AttributeSelector AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports AtRule Styles",
        maxTerm: 117,
        nodeProps: [ [ "isolate", -2, 3, 24, "" ], [ "openedBy", 17, "(", 32, "[", 50, "{" ], [ "closedBy", 18, ")", 33, "]", 51, "}" ] ],
        propSources: [ pr ],
        skippedNodes: [ 0, 3, 87 ],
        repeatNodeCount: 11,
        tokenData: "J^~R!^OX$}X^%u^p$}pq%uqr)Xrs.Rst/utu6duv$}vw7^wx7oxy9^yz9oz{9t{|:_|}?Q}!O?c!O!P@Q!P!Q@i!Q![Ab![!]B]!]!^CX!^!_$}!_!`Cj!`!aC{!a!b$}!b!cDw!c!}$}!}#OFa#O#P$}#P#QFr#Q#R6d#R#T$}#T#UGT#U#c$}#c#dHf#d#o$}#o#pH{#p#q6d#q#rI^#r#sIo#s#y$}#y#z%u#z$f$}$f$g%u$g#BY$}#BY#BZ%u#BZ$IS$}$IS$I_%u$I_$I|$}$I|$JO%u$JO$JT$}$JT$JU%u$JU$KV$}$KV$KW%u$KW&FU$}&FU&FV%u&FV;'S$};'S;=`JW<%lO$}`%QSOy%^z;'S%^;'S;=`%o<%lO%^`%cSo`Oy%^z;'S%^;'S;=`%o<%lO%^`%rP;=`<%l%^~%zh#Z~OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^~'mh#Z~o`OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^l)[UOy%^z#]%^#]#^)n#^;'S%^;'S;=`%o<%lO%^l)sUo`Oy%^z#a%^#a#b*V#b;'S%^;'S;=`%o<%lO%^l*[Uo`Oy%^z#d%^#d#e*n#e;'S%^;'S;=`%o<%lO%^l*sUo`Oy%^z#c%^#c#d+V#d;'S%^;'S;=`%o<%lO%^l+[Uo`Oy%^z#f%^#f#g+n#g;'S%^;'S;=`%o<%lO%^l+sUo`Oy%^z#h%^#h#i,V#i;'S%^;'S;=`%o<%lO%^l,[Uo`Oy%^z#T%^#T#U,n#U;'S%^;'S;=`%o<%lO%^l,sUo`Oy%^z#b%^#b#c-V#c;'S%^;'S;=`%o<%lO%^l-[Uo`Oy%^z#h%^#h#i-n#i;'S%^;'S;=`%o<%lO%^l-uS!X[o`Oy%^z;'S%^;'S;=`%o<%lO%^~.UWOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o<%lO.R~.sOh~~.vRO;'S.R;'S;=`/P;=`O.R~/SXOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o;=`<%l.R<%lO.R~/rP;=`<%l.Rn/zYxQOy%^z!Q%^!Q![0j![!c%^!c!i0j!i#T%^#T#Z0j#Z;'S%^;'S;=`%o<%lO%^l0oYo`Oy%^z!Q%^!Q![1_![!c%^!c!i1_!i#T%^#T#Z1_#Z;'S%^;'S;=`%o<%lO%^l1dYo`Oy%^z!Q%^!Q![2S![!c%^!c!i2S!i#T%^#T#Z2S#Z;'S%^;'S;=`%o<%lO%^l2ZYf[o`Oy%^z!Q%^!Q![2y![!c%^!c!i2y!i#T%^#T#Z2y#Z;'S%^;'S;=`%o<%lO%^l3QYf[o`Oy%^z!Q%^!Q![3p![!c%^!c!i3p!i#T%^#T#Z3p#Z;'S%^;'S;=`%o<%lO%^l3uYo`Oy%^z!Q%^!Q![4e![!c%^!c!i4e!i#T%^#T#Z4e#Z;'S%^;'S;=`%o<%lO%^l4lYf[o`Oy%^z!Q%^!Q![5[![!c%^!c!i5[!i#T%^#T#Z5[#Z;'S%^;'S;=`%o<%lO%^l5aYo`Oy%^z!Q%^!Q![6P![!c%^!c!i6P!i#T%^#T#Z6P#Z;'S%^;'S;=`%o<%lO%^l6WSf[o`Oy%^z;'S%^;'S;=`%o<%lO%^d6gUOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^d7QS|So`Oy%^z;'S%^;'S;=`%o<%lO%^b7cSXQOy%^z;'S%^;'S;=`%o<%lO%^~7rWOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W<%lO7o~8_RO;'S7o;'S;=`8h;=`O7o~8kXOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W;=`<%l7o<%lO7o~9ZP;=`<%l7on9cSb^Oy%^z;'S%^;'S;=`%o<%lO%^~9tOa~n9{UUQjWOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^n:fWjW!RQOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^l;TUo`Oy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^l;nYo`#e[Oy%^z!Q%^!Q![;g![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^l<cYo`Oy%^z{%^{|=R|}%^}!O=R!O!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l=WUo`Oy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l=qUo`#e[Oy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l>[[o`#e[Oy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^n?VSt^Oy%^z;'S%^;'S;=`%o<%lO%^l?hWjWOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^n@VU#bQOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^~@nTjWOy%^z{@}{;'S%^;'S;=`%o<%lO%^~AUSo`#[~Oy%^z;'S%^;'S;=`%o<%lO%^lAg[#e[Oy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^bBbU]QOy%^z![%^![!]Bt!];'S%^;'S;=`%o<%lO%^bB{S^Qo`Oy%^z;'S%^;'S;=`%o<%lO%^nC^S!Y^Oy%^z;'S%^;'S;=`%o<%lO%^dCoS|SOy%^z;'S%^;'S;=`%o<%lO%^bDQU!OQOy%^z!`%^!`!aDd!a;'S%^;'S;=`%o<%lO%^bDkS!OQo`Oy%^z;'S%^;'S;=`%o<%lO%^bDzWOy%^z!c%^!c!}Ed!}#T%^#T#oEd#o;'S%^;'S;=`%o<%lO%^bEk[![Qo`Oy%^z}%^}!OEd!O!Q%^!Q![Ed![!c%^!c!}Ed!}#T%^#T#oEd#o;'S%^;'S;=`%o<%lO%^nFfSq^Oy%^z;'S%^;'S;=`%o<%lO%^nFwSp^Oy%^z;'S%^;'S;=`%o<%lO%^bGWUOy%^z#b%^#b#cGj#c;'S%^;'S;=`%o<%lO%^bGoUo`Oy%^z#W%^#W#XHR#X;'S%^;'S;=`%o<%lO%^bHYS!bQo`Oy%^z;'S%^;'S;=`%o<%lO%^bHiUOy%^z#f%^#f#gHR#g;'S%^;'S;=`%o<%lO%^fIQS!TUOy%^z;'S%^;'S;=`%o<%lO%^nIcS!S^Oy%^z;'S%^;'S;=`%o<%lO%^fItU!RQOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^`JZP;=`<%l$}",
        tokenizers: [ dr, mr, ur, 1, 2, 3, 4, new li("m~RRYZ[z{a~~g~aO#^~~dP!P!Qg~lO#_~~", 28, 105) ],
        topRules: {
            StyleSheet: [ 0, 4 ],
            Styles: [ 1, 86 ]
        },
        specialized: [ {
            term: 100,
            get: e => hr[e] || -1
        }, {
            term: 58,
            get: e => fr[e] || -1
        }, {
            term: 101,
            get: e => Or[e] || -1
        } ],
        tokenPrec: 1200
    });
    let At = null;
    function It() {
        if (!At && typeof document == "object" && document.body) {
            let {
                style: e
            } = document.body, t = [], l = new Set();
            for (let a in e) a != "cssText" && a != "cssFloat" && typeof e[a] == "string" && (/[A-Z]/.test(a) && (a = a.replace(/[A-Z]/g, n => "-" + n.toLowerCase())), 
            l.has(a) || (t.push(a), l.add(a)));
            At = t.sort().map(a => ({
                type: "property",
                label: a
            }));
        }
        return At || [];
    }
    const la = [ "active", "after", "any-link", "autofill", "backdrop", "before", "checked", "cue", "default", "defined", "disabled", "empty", "enabled", "file-selector-button", "first", "first-child", "first-letter", "first-line", "first-of-type", "focus", "focus-visible", "focus-within", "fullscreen", "has", "host", "host-context", "hover", "in-range", "indeterminate", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "marker", "modal", "not", "nth-child", "nth-last-child", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "part", "placeholder", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "selection", "slotted", "target", "target-text", "valid", "visited", "where" ].map(e => ({
        type: "class",
        label: e
    })), aa = [ "above", "absolute", "activeborder", "additive", "activecaption", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "antialiased", "appworkspace", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page", "avoid-region", "axis-pan", "background", "backwards", "baseline", "below", "bidi-override", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "contents", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic-abegede-gez", "ethiopic-halehame-aa-er", "ethiopic-halehame-gez", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fill-box", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "graytext", "grid", "groove", "hand", "hard-light", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "justify", "keep-all", "landscape", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lowercase", "ltr", "luminosity", "manipulation", "match", "matrix", "matrix3d", "medium", "menu", "menutext", "message-box", "middle", "min-intrinsic", "mix", "monospace", "move", "multiple", "multiple_mask_images", "multiply", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "opacity", "open-quote", "optimizeLegibility", "optimizeSpeed", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "perspective", "pinch-zoom", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "scroll-position", "se-resize", "self-start", "self-end", "semi-condensed", "semi-expanded", "separate", "serif", "show", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square", "start", "static", "status-bar", "stretch", "stroke", "stroke-box", "sub", "subpixel-antialiased", "svg_masks", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "text", "text-bottom", "text-top", "textarea", "textfield", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "to", "top", "transform", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "unidirectional-pan", "unset", "up", "upper-latin", "uppercase", "url", "var", "vertical", "vertical-text", "view-box", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small" ].map(e => ({
        type: "keyword",
        label: e
    })).concat([ "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen" ].map(e => ({
        type: "constant",
        label: e
    }))), br = [ "a", "abbr", "address", "article", "aside", "b", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "figcaption", "figure", "footer", "form", "header", "hgroup", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "meter", "nav", "ol", "output", "p", "pre", "ruby", "section", "select", "small", "source", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "tr", "u", "ul" ].map(e => ({
        type: "type",
        label: e
    })), ge = /^(\w[\w-]*|-\w[\w-]*|)$/, vr = /^-(-[\w-]*)?$/, na = new ri(), _r = [ "Declaration" ];
    function Sr(e) {
        for (let t = e; ;) {
            if (t.type.isTop) return t;
            if (!(t = t.parent)) return e;
        }
    }
    function oa(e, t, l) {
        if (t.to - t.from > 4096) {
            let a = na.get(t);
            if (a) return a;
            let n = [], o = new Set(), r = t.cursor(oi.IncludeAnonymous);
            if (r.firstChild()) do {
                for (let i of oa(e, r.node, l)) o.has(i.label) || (o.add(i.label), 
                n.push(i));
            } while (r.nextSibling());
            return na.set(t, n), n;
        }
        {
            let a = [], n = new Set();
            return t.cursor().iterate(o => {
                var r;
                if (l(o) && o.matchContext(_r) && ((r = o.node.nextSibling) === null || r === void 0 ? void 0 : r.name) == ":") {
                    let i = e.sliceString(o.from, o.to);
                    n.has(i) || (n.add(i), a.push({
                        label: i,
                        type: "variable"
                    }));
                }
            }), a;
        }
    }
    let Rt, Qe;
    bt = e => t => {
        let {
            state: l,
            pos: a
        } = t, n = Pe(l).resolveInner(a, -1), o = n.type.isError && n.from == n.to - 1 && l.doc.sliceString(n.from, n.to) == "-";
        if (n.name == "PropertyName" || (o || n.name == "TagName") && /^(Block|Styles)$/.test(n.resolve(n.to).name)) return {
            from: n.from,
            options: It(),
            validFor: ge
        };
        if (n.name == "ValueName") return {
            from: n.from,
            options: aa,
            validFor: ge
        };
        if (n.name == "PseudoClassName") return {
            from: n.from,
            options: la,
            validFor: ge
        };
        if (e(n) || (t.explicit || o) && function(c, u) {
            var s;
            if ((c.name == "(" || c.type.isError) && (c = c.parent || c), c.name != "ArgList") return !1;
            let m = (s = c.parent) === null || s === void 0 ? void 0 : s.firstChild;
            return (m == null ? void 0 : m.name) == "Callee" && u.sliceString(m.from, m.to) == "var";
        }(n, l.doc)) return {
            from: e(n) || o ? n.from : a,
            options: oa(l.doc, Sr(n), e),
            validFor: vr
        };
        if (n.name == "TagName") {
            for (let {
                parent: c
            } = n; c; c = c.parent) if (c.name == "Block") return {
                from: n.from,
                options: It(),
                validFor: ge
            };
            return {
                from: n.from,
                options: br,
                validFor: ge
            };
        }
        if (!t.explicit) return null;
        let r = n.resolve(a), i = r.childBefore(a);
        return i && i.name == ":" && r.name == "PseudoClassSelector" ? {
            from: a,
            options: la,
            validFor: ge
        } : i && i.name == ":" && r.name == "Declaration" || r.name == "ArgList" ? {
            from: a,
            options: aa,
            validFor: ge
        } : r.name == "Block" || r.name == "Styles" ? {
            from: a,
            options: It(),
            validFor: ge
        } : null;
    }, Rt = bt(e => e.name == "VariableName"), Qe = Un.define({
        name: "css",
        parser: gr.configure({
            props: [ tl.add({
                Declaration: ai()
            }), ft.add({
                "Block KeyframeList": ni
            }) ]
        }),
        languageData: {
            commentTokens: {
                block: {
                    open: "/*",
                    close: "*/"
                }
            },
            indentOnInput: /^\s*\}$/,
            wordChars: "-"
        }
    });
    function ra() {
        return new Je(Qe, Qe.data.of({
            autocomplete: Rt
        }));
    }
    const xr = Object.defineProperty({
        __proto__: null,
        css: ra,
        cssCompletionSource: Rt,
        cssLanguage: Qe,
        defineCSSCompletionSource: bt
    }, Symbol.toStringTag, {
        value: "Module"
    }), He = [ "_blank", "_self", "_top", "_parent" ], Xt = [ "ascii", "utf-8", "utf-16", "latin1", "latin1" ], Dt = [ "get", "post", "put", "delete" ], Mt = [ "application/x-www-form-urlencoded", "multipart/form-data", "text/plain" ], le = [ "true", "false" ], C = {}, kr = {
        a: {
            attrs: {
                href: null,
                ping: null,
                type: null,
                media: null,
                target: He,
                hreflang: null
            }
        },
        abbr: C,
        address: C,
        area: {
            attrs: {
                alt: null,
                coords: null,
                href: null,
                target: null,
                ping: null,
                media: null,
                hreflang: null,
                type: null,
                shape: [ "default", "rect", "circle", "poly" ]
            }
        },
        article: C,
        aside: C,
        audio: {
            attrs: {
                src: null,
                mediagroup: null,
                crossorigin: [ "anonymous", "use-credentials" ],
                preload: [ "none", "metadata", "auto" ],
                autoplay: [ "autoplay" ],
                loop: [ "loop" ],
                controls: [ "controls" ]
            }
        },
        b: C,
        base: {
            attrs: {
                href: null,
                target: He
            }
        },
        bdi: C,
        bdo: C,
        blockquote: {
            attrs: {
                cite: null
            }
        },
        body: C,
        br: C,
        button: {
            attrs: {
                form: null,
                formaction: null,
                name: null,
                value: null,
                autofocus: [ "autofocus" ],
                disabled: [ "autofocus" ],
                formenctype: Mt,
                formmethod: Dt,
                formnovalidate: [ "novalidate" ],
                formtarget: He,
                type: [ "submit", "reset", "button" ]
            }
        },
        canvas: {
            attrs: {
                width: null,
                height: null
            }
        },
        caption: C,
        center: C,
        cite: C,
        code: C,
        col: {
            attrs: {
                span: null
            }
        },
        colgroup: {
            attrs: {
                span: null
            }
        },
        command: {
            attrs: {
                type: [ "command", "checkbox", "radio" ],
                label: null,
                icon: null,
                radiogroup: null,
                command: null,
                title: null,
                disabled: [ "disabled" ],
                checked: [ "checked" ]
            }
        },
        data: {
            attrs: {
                value: null
            }
        },
        datagrid: {
            attrs: {
                disabled: [ "disabled" ],
                multiple: [ "multiple" ]
            }
        },
        datalist: {
            attrs: {
                data: null
            }
        },
        dd: C,
        del: {
            attrs: {
                cite: null,
                datetime: null
            }
        },
        details: {
            attrs: {
                open: [ "open" ]
            }
        },
        dfn: C,
        div: C,
        dl: C,
        dt: C,
        em: C,
        embed: {
            attrs: {
                src: null,
                type: null,
                width: null,
                height: null
            }
        },
        eventsource: {
            attrs: {
                src: null
            }
        },
        fieldset: {
            attrs: {
                disabled: [ "disabled" ],
                form: null,
                name: null
            }
        },
        figcaption: C,
        figure: C,
        footer: C,
        form: {
            attrs: {
                action: null,
                name: null,
                "accept-charset": Xt,
                autocomplete: [ "on", "off" ],
                enctype: Mt,
                method: Dt,
                novalidate: [ "novalidate" ],
                target: He
            }
        },
        h1: C,
        h2: C,
        h3: C,
        h4: C,
        h5: C,
        h6: C,
        head: {
            children: [ "title", "base", "link", "style", "meta", "script", "noscript", "command" ]
        },
        header: C,
        hgroup: C,
        hr: C,
        html: {
            attrs: {
                manifest: null
            }
        },
        i: C,
        iframe: {
            attrs: {
                src: null,
                srcdoc: null,
                name: null,
                width: null,
                height: null,
                sandbox: [ "allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts" ],
                seamless: [ "seamless" ]
            }
        },
        img: {
            attrs: {
                alt: null,
                src: null,
                ismap: null,
                usemap: null,
                width: null,
                height: null,
                crossorigin: [ "anonymous", "use-credentials" ]
            }
        },
        input: {
            attrs: {
                alt: null,
                dirname: null,
                form: null,
                formaction: null,
                height: null,
                list: null,
                max: null,
                maxlength: null,
                min: null,
                name: null,
                pattern: null,
                placeholder: null,
                size: null,
                src: null,
                step: null,
                value: null,
                width: null,
                accept: [ "audio/*", "video/*", "image/*" ],
                autocomplete: [ "on", "off" ],
                autofocus: [ "autofocus" ],
                checked: [ "checked" ],
                disabled: [ "disabled" ],
                formenctype: Mt,
                formmethod: Dt,
                formnovalidate: [ "novalidate" ],
                formtarget: He,
                multiple: [ "multiple" ],
                readonly: [ "readonly" ],
                required: [ "required" ],
                type: [ "hidden", "text", "search", "tel", "url", "email", "password", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button" ]
            }
        },
        ins: {
            attrs: {
                cite: null,
                datetime: null
            }
        },
        kbd: C,
        keygen: {
            attrs: {
                challenge: null,
                form: null,
                name: null,
                autofocus: [ "autofocus" ],
                disabled: [ "disabled" ],
                keytype: [ "RSA" ]
            }
        },
        label: {
            attrs: {
                for: null,
                form: null
            }
        },
        legend: C,
        li: {
            attrs: {
                value: null
            }
        },
        link: {
            attrs: {
                href: null,
                type: null,
                hreflang: null,
                media: null,
                sizes: [ "all", "16x16", "16x16 32x32", "16x16 32x32 64x64" ]
            }
        },
        map: {
            attrs: {
                name: null
            }
        },
        mark: C,
        menu: {
            attrs: {
                label: null,
                type: [ "list", "context", "toolbar" ]
            }
        },
        meta: {
            attrs: {
                content: null,
                charset: Xt,
                name: [ "viewport", "application-name", "author", "description", "generator", "keywords" ],
                "http-equiv": [ "content-language", "content-type", "default-style", "refresh" ]
            }
        },
        meter: {
            attrs: {
                value: null,
                min: null,
                low: null,
                high: null,
                max: null,
                optimum: null
            }
        },
        nav: C,
        noscript: C,
        object: {
            attrs: {
                data: null,
                type: null,
                name: null,
                usemap: null,
                form: null,
                width: null,
                height: null,
                typemustmatch: [ "typemustmatch" ]
            }
        },
        ol: {
            attrs: {
                reversed: [ "reversed" ],
                start: null,
                type: [ "1", "a", "A", "i", "I" ]
            },
            children: [ "li", "script", "template", "ul", "ol" ]
        },
        optgroup: {
            attrs: {
                disabled: [ "disabled" ],
                label: null
            }
        },
        option: {
            attrs: {
                disabled: [ "disabled" ],
                label: null,
                selected: [ "selected" ],
                value: null
            }
        },
        output: {
            attrs: {
                for: null,
                form: null,
                name: null
            }
        },
        p: C,
        param: {
            attrs: {
                name: null,
                value: null
            }
        },
        pre: C,
        progress: {
            attrs: {
                value: null,
                max: null
            }
        },
        q: {
            attrs: {
                cite: null
            }
        },
        rp: C,
        rt: C,
        ruby: C,
        samp: C,
        script: {
            attrs: {
                type: [ "text/javascript" ],
                src: null,
                async: [ "async" ],
                defer: [ "defer" ],
                charset: Xt
            }
        },
        section: C,
        select: {
            attrs: {
                form: null,
                name: null,
                size: null,
                autofocus: [ "autofocus" ],
                disabled: [ "disabled" ],
                multiple: [ "multiple" ]
            }
        },
        slot: {
            attrs: {
                name: null
            }
        },
        small: C,
        source: {
            attrs: {
                src: null,
                type: null,
                media: null
            }
        },
        span: C,
        strong: C,
        style: {
            attrs: {
                type: [ "text/css" ],
                media: null,
                scoped: null
            }
        },
        sub: C,
        summary: C,
        sup: C,
        table: C,
        tbody: C,
        td: {
            attrs: {
                colspan: null,
                rowspan: null,
                headers: null
            }
        },
        template: C,
        textarea: {
            attrs: {
                dirname: null,
                form: null,
                maxlength: null,
                name: null,
                placeholder: null,
                rows: null,
                cols: null,
                autofocus: [ "autofocus" ],
                disabled: [ "disabled" ],
                readonly: [ "readonly" ],
                required: [ "required" ],
                wrap: [ "soft", "hard" ]
            }
        },
        tfoot: C,
        th: {
            attrs: {
                colspan: null,
                rowspan: null,
                headers: null,
                scope: [ "row", "col", "rowgroup", "colgroup" ]
            }
        },
        thead: C,
        time: {
            attrs: {
                datetime: null
            }
        },
        title: C,
        tr: C,
        track: {
            attrs: {
                src: null,
                label: null,
                default: null,
                kind: [ "subtitles", "captions", "descriptions", "chapters", "metadata" ],
                srclang: null
            }
        },
        ul: {
            children: [ "li", "script", "template", "ul", "ol" ]
        },
        var: C,
        video: {
            attrs: {
                src: null,
                poster: null,
                width: null,
                height: null,
                crossorigin: [ "anonymous", "use-credentials" ],
                preload: [ "auto", "metadata", "none" ],
                autoplay: [ "autoplay" ],
                mediagroup: [ "movie" ],
                muted: [ "muted" ],
                controls: [ "controls" ]
            }
        },
        wbr: C
    }, ia = {
        accesskey: null,
        class: null,
        contenteditable: le,
        contextmenu: null,
        dir: [ "ltr", "rtl", "auto" ],
        draggable: [ "true", "false", "auto" ],
        dropzone: [ "copy", "move", "link", "string:", "file:" ],
        hidden: [ "hidden" ],
        id: null,
        inert: [ "inert" ],
        itemid: null,
        itemprop: null,
        itemref: null,
        itemscope: [ "itemscope" ],
        itemtype: null,
        lang: [ "ar", "bn", "de", "en-GB", "en-US", "es", "fr", "hi", "id", "ja", "pa", "pt", "ru", "tr", "zh" ],
        spellcheck: le,
        autocorrect: le,
        autocapitalize: le,
        style: null,
        tabindex: null,
        title: null,
        translate: [ "yes", "no" ],
        rel: [ "stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag" ],
        role: "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
        "aria-activedescendant": null,
        "aria-atomic": le,
        "aria-autocomplete": [ "inline", "list", "both", "none" ],
        "aria-busy": le,
        "aria-checked": [ "true", "false", "mixed", "undefined" ],
        "aria-controls": null,
        "aria-describedby": null,
        "aria-disabled": le,
        "aria-dropeffect": null,
        "aria-expanded": [ "true", "false", "undefined" ],
        "aria-flowto": null,
        "aria-grabbed": [ "true", "false", "undefined" ],
        "aria-haspopup": le,
        "aria-hidden": le,
        "aria-invalid": [ "true", "false", "grammar", "spelling" ],
        "aria-label": null,
        "aria-labelledby": null,
        "aria-level": null,
        "aria-live": [ "off", "polite", "assertive" ],
        "aria-multiline": le,
        "aria-multiselectable": le,
        "aria-owns": null,
        "aria-posinset": null,
        "aria-pressed": [ "true", "false", "mixed", "undefined" ],
        "aria-readonly": le,
        "aria-relevant": null,
        "aria-required": le,
        "aria-selected": [ "true", "false", "undefined" ],
        "aria-setsize": null,
        "aria-sort": [ "ascending", "descending", "none", "other" ],
        "aria-valuemax": null,
        "aria-valuemin": null,
        "aria-valuenow": null,
        "aria-valuetext": null
    }, sa = "beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map(e => "on" + e);
    for (let e of sa) ia[e] = null;
    class Fe {
        constructor(t, l) {
            this.tags = Object.assign(Object.assign({}, kr), t), this.globalAttrs = Object.assign(Object.assign({}, ia), l), 
            this.allTags = Object.keys(this.tags), this.globalAttrNames = Object.keys(this.globalAttrs);
        }
    }
    function Le(e, t, l = e.length) {
        if (!t) return "";
        let a = t.firstChild, n = a && a.getChild("TagName");
        return n ? e.sliceString(n.from, Math.min(n.to, l)) : "";
    }
    function Ae(e, t = !1) {
        for (;e; e = e.parent) if (e.name == "Element") {
            if (!t) return e;
            t = !1;
        }
        return null;
    }
    function ca(e, t, l) {
        let a = l.tags[Le(e, Ae(t))];
        return (a == null ? void 0 : a.children) || l.allTags;
    }
    function qt(e, t) {
        let l = [];
        for (let a = Ae(t); a && !a.type.isTop; a = Ae(a.parent)) {
            let n = Le(e, a);
            if (n && a.lastChild.name == "CloseTag") break;
            n && l.indexOf(n) < 0 && (t.name == "EndTag" || t.from >= a.firstChild.to) && l.push(n);
        }
        return l;
    }
    Fe.default = new Fe();
    const ua = /^[:\-\.\w\u00b7-\uffff]*$/;
    function da(e, t, l, a, n) {
        let o = /\s*>/.test(e.sliceDoc(n, n + 5)) ? "" : ">", r = Ae(l, !0);
        return {
            from: a,
            to: n,
            options: ca(e.doc, r, t).map(i => ({
                label: i,
                type: "type"
            })).concat(qt(e.doc, l).map((i, c) => ({
                label: "/" + i,
                apply: "/" + i + o,
                type: "type",
                boost: 99 - c
            }))),
            validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
        };
    }
    function ma(e, t, l, a) {
        let n = /\s*>/.test(e.sliceDoc(a, a + 5)) ? "" : ">";
        return {
            from: l,
            to: a,
            options: qt(e.doc, t).map((o, r) => ({
                label: o,
                apply: o + n,
                type: "type",
                boost: 99 - r
            })),
            validFor: ua
        };
    }
    function pa(e, t) {
        let {
            state: l,
            pos: a
        } = t, n = Pe(l).resolveInner(a, -1), o = n.resolve(a);
        for (let r, i = a; o == n && (r = n.childBefore(i)); ) {
            let c = r.lastChild;
            if (!c || !c.type.isError || c.from < c.to) break;
            o = n = r, i = c.from;
        }
        return n.name == "TagName" ? n.parent && /CloseTag$/.test(n.parent.name) ? ma(l, n, n.from, a) : da(l, e, n, n.from, a) : n.name == "StartTag" ? da(l, e, n, a, a) : n.name == "StartCloseTag" || n.name == "IncompleteCloseTag" ? ma(l, n, a, a) : n.name == "OpenTag" || n.name == "SelfClosingTag" || n.name == "AttributeName" ? function(r, i, c, u, s) {
            let m = Ae(c), p = m ? i.tags[Le(r.doc, m)] : null, S = p && p.attrs ? Object.keys(p.attrs) : [];
            return {
                from: u,
                to: s,
                options: (p && p.globalAttrs === !1 ? S : S.length ? S.concat(i.globalAttrNames) : i.globalAttrNames).map(O => ({
                    label: O,
                    type: "property"
                })),
                validFor: ua
            };
        }(l, e, n, n.name == "AttributeName" ? n.from : a, a) : n.name == "Is" || n.name == "AttributeValue" || n.name == "UnquotedAttributeValue" ? function(r, i, c, u, s) {
            var m;
            let p, S = (m = c.parent) === null || m === void 0 ? void 0 : m.getChild("AttributeName"), O = [];
            if (S) {
                let b = r.sliceDoc(S.from, S.to), k = i.globalAttrs[b];
                if (!k) {
                    let y = Ae(c), T = y ? i.tags[Le(r.doc, y)] : null;
                    k = (T == null ? void 0 : T.attrs) && T.attrs[b];
                }
                if (k) {
                    let y = r.sliceDoc(u, s).toLowerCase(), T = '"', _ = '"';
                    /^['"]/.test(y) ? (p = y[0] == '"' ? /^[^"]*$/ : /^[^']*$/, 
                    T = "", _ = r.sliceDoc(s, s + 1) == y[0] ? "" : y[0], y = y.slice(1), 
                    u++) : p = /^[^\s<>='"]*$/;
                    for (let w of k) O.push({
                        label: w,
                        apply: T + w + _,
                        type: "constant"
                    });
                }
            }
            return {
                from: u,
                to: s,
                options: O,
                validFor: p
            };
        }(l, e, n, n.name == "Is" ? a : n.from, a) : !t.explicit || o.name != "Element" && o.name != "Text" && o.name != "Document" ? null : function(r, i, c, u) {
            let s = [], m = 0;
            for (let p of ca(r.doc, c, i)) s.push({
                label: "<" + p,
                type: "type"
            });
            for (let p of qt(r.doc, c)) s.push({
                label: "</" + p + ">",
                type: "type",
                boost: 99 - m++
            });
            return {
                from: u,
                to: u,
                options: s,
                validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
            };
        }(l, e, n, a);
    }
    function ha(e) {
        return pa(Fe.default, e);
    }
    function fa(e) {
        let {
            extraTags: t,
            extraGlobalAttributes: l
        } = e, a = l || t ? new Fe(t, l) : Fe.default;
        return n => pa(a, n);
    }
    const yr = ll.parser.configure({
        top: "SingleExpression"
    }), Oa = [ {
        tag: "script",
        attrs: e => e.type == "text/typescript" || e.lang == "ts",
        parser: ii.parser
    }, {
        tag: "script",
        attrs: e => e.type == "text/babel" || e.type == "text/jsx",
        parser: si.parser
    }, {
        tag: "script",
        attrs: e => e.type == "text/typescript-jsx",
        parser: ci.parser
    }, {
        tag: "script",
        attrs: e => /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(e.type),
        parser: yr
    }, {
        tag: "script",
        attrs: e => !e.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type),
        parser: ll.parser
    }, {
        tag: "style",
        attrs: e => (!e.lang || e.lang == "css") && (!e.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type)),
        parser: Qe.parser
    } ], ga = [ {
        name: "style",
        parser: Qe.parser.configure({
            top: "Styles"
        })
    } ].concat(sa.map(e => ({
        name: e,
        parser: ll.parser
    }))), Bt = Un.define({
        name: "html",
        parser: cr.configure({
            props: [ tl.add({
                Element(e) {
                    let t = /^(\s*)(<\/)?/.exec(e.textAfter);
                    return e.node.to <= e.pos + t[0].length ? e.continue() : e.lineIndent(e.node.from) + (t[2] ? 0 : e.unit);
                },
                "OpenTag CloseTag SelfClosingTag": e => e.column(e.node.from) + e.unit,
                Document(e) {
                    if (e.pos + /\s*/.exec(e.textAfter)[0].length < e.node.to) return e.continue();
                    let t, l = null;
                    for (let a = e.node; ;) {
                        let n = a.lastChild;
                        if (!n || n.name != "Element" || n.to != a.to) break;
                        l = a = n;
                    }
                    return l && (!(t = l.lastChild) || t.name != "CloseTag" && t.name != "SelfClosingTag") ? e.lineIndent(l.from) + e.unit : null;
                }
            }), ft.add({
                Element(e) {
                    let t = e.firstChild, l = e.lastChild;
                    return t && t.name == "OpenTag" ? {
                        from: t.to,
                        to: l.name == "CloseTag" ? l.from : e.to
                    } : null;
                }
            }), ui.add({
                "OpenTag CloseTag": e => e.getChild("TagName")
            }) ]
        }),
        languageData: {
            commentTokens: {
                block: {
                    open: "\x3c!--",
                    close: "--\x3e"
                }
            },
            indentOnInput: /^\s*<\/\w+\W$/,
            wordChars: "-._"
        }
    }), Ze = Bt.configure({
        wrap: Jl(Oa, ga)
    });
    vt = function(e = {}) {
        let t, l = "";
        e.matchClosingTags === !1 && (l = "noMatch"), e.selfClosingTags === !0 && (l = (l ? l + " " : "") + "selfClosing"), 
        (e.nestedLanguages && e.nestedLanguages.length || e.nestedAttributes && e.nestedAttributes.length) && (t = Jl((e.nestedLanguages || []).concat(Oa), (e.nestedAttributes || []).concat(ga)));
        let a = t ? Bt.configure({
            wrap: t,
            dialect: l
        }) : l ? Ze.configure({
            dialect: l
        }) : Ze;
        return new Je(a, [ Ze.data.of({
            autocomplete: fa(e)
        }), e.autoCloseTags !== !1 ? va : [], di().support, ra().support ]);
    };
    const ba = new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")), va = fe.inputHandler.of((e, t, l, a, n) => {
        if (e.composing || e.state.readOnly || t != l || a != ">" && a != "/" || !Ze.isActiveAt(e.state, t, -1)) return !1;
        let o = n(), {
            state: r
        } = o, i = r.changeByRange(c => {
            var u, s, m;
            let p, S = r.doc.sliceString(c.from - 1, c.to) == a, {
                head: O
            } = c, b = Pe(r).resolveInner(O, -1);
            if (S && a == ">" && b.name == "EndTag") {
                let k = b.parent;
                if (((s = (u = k.parent) === null || u === void 0 ? void 0 : u.lastChild) === null || s === void 0 ? void 0 : s.name) != "CloseTag" && (p = Le(r.doc, k.parent, O)) && !ba.has(p)) return {
                    range: c,
                    changes: {
                        from: O,
                        to: O + (r.doc.sliceString(O, O + 1) === ">" ? 1 : 0),
                        insert: `</${p}>`
                    }
                };
            } else if (S && a == "/" && b.name == "IncompleteCloseTag") {
                let k = b.parent;
                if (b.from == O - 2 && ((m = k.lastChild) === null || m === void 0 ? void 0 : m.name) != "CloseTag" && (p = Le(r.doc, k, O)) && !ba.has(p)) {
                    let y = O + (r.doc.sliceString(O, O + 1) === ">" ? 1 : 0), T = `${p}>`;
                    return {
                        range: ee.cursor(O + T.length, -1),
                        changes: {
                            from: O,
                            to: y,
                            insert: T
                        }
                    };
                }
            }
            return {
                range: c
            };
        });
        return !i.changes.empty && (e.dispatch([ o, r.update(i, {
            userEvent: "input.complete",
            scrollIntoView: !0
        }) ]), !0);
    }), wr = Object.defineProperty({
        __proto__: null,
        autoCloseTags: va,
        html: vt,
        htmlCompletionSource: ha,
        htmlCompletionSourceWith: fa,
        htmlLanguage: Ze,
        htmlPlain: Bt
    }, Symbol.toStringTag, {
        value: "Module"
    }), _a = fi({
        commentTokens: {
            block: {
                open: "\x3c!--",
                close: "--\x3e"
            }
        }
    }), Sa = new Xe(), xa = Qo.configure({
        props: [ ft.add(e => !e.is("Block") || e.is("Document") || zt(e) != null || function(t) {
            return t.name == "OrderedList" || t.name == "BulletList";
        }(e) ? void 0 : (t, l) => ({
            from: l.doc.lineAt(t.from).to,
            to: t.to
        })), Sa.add(zt), tl.add({
            Document: () => null
        }), Oi.add({
            Document: _a
        }) ]
    });
    function zt(e) {
        let t = /^(?:ATX|Setext)Heading(\d)$/.exec(e.name);
        return t ? +t[1] : void 0;
    }
    function Tr(e, t) {
        let l = e;
        for (;;) {
            let a, n = l.nextSibling;
            if (!n || (a = zt(n.type)) != null && a <= t) break;
            l = n;
        }
        return l.to;
    }
    const Pr = gi.of((e, t, l) => {
        for (let a = Pe(e).resolveInner(l, -1); a && !(a.from < t); a = a.parent) {
            let n = a.type.prop(Sa);
            if (n == null) continue;
            let o = Tr(a, n);
            if (o > l) return {
                from: l,
                to: o
            };
        }
        return null;
    });
    function jt(e) {
        return new hi(_a, e, [ Pr ], "markdown");
    }
    const ka = jt(xa), Nt = jt(xa.configure([ qo, zo, Bo, jo, {
        props: [ ft.add({
            Table: (e, t) => ({
                from: t.doc.lineAt(e.from).to,
                to: e.to
            })
        }) ]
    } ]));
    class st {
        constructor(t, l, a, n, o, r, i) {
            this.node = t, this.from = l, this.to = a, this.spaceBefore = n, this.spaceAfter = o, 
            this.type = r, this.item = i;
        }
        blank(t, l = !0) {
            let a = this.spaceBefore + (this.node.name == "Blockquote" ? ">" : "");
            if (t != null) {
                for (;a.length < t; ) a += " ";
                return a;
            }
            for (let n = this.to - this.from - a.length - this.spaceAfter.length; n > 0; n--) a += " ";
            return a + (l ? this.spaceAfter : "");
        }
        marker(t, l) {
            let a = this.node.name == "OrderedList" ? String(+wa(this.item, t)[2] + l) : "";
            return this.spaceBefore + a + this.type + this.spaceAfter;
        }
    }
    function ya(e, t) {
        let l = [];
        for (let n = e; n && n.name != "Document"; n = n.parent) n.name != "ListItem" && n.name != "Blockquote" && n.name != "FencedCode" || l.push(n);
        let a = [];
        for (let n = l.length - 1; n >= 0; n--) {
            let o, r = l[n], i = t.lineAt(r.from), c = r.from - i.from;
            if (r.name == "FencedCode") a.push(new st(r, c, c, "", "", "", null)); else if (r.name == "Blockquote" && (o = /^ *>( ?)/.exec(i.text.slice(c)))) a.push(new st(r, c, c + o[0].length, "", o[1], ">", null)); else if (r.name == "ListItem" && r.parent.name == "OrderedList" && (o = /^( *)\d+([.)])( *)/.exec(i.text.slice(c)))) {
                let u = o[3], s = o[0].length;
                u.length >= 4 && (u = u.slice(0, u.length - 4), s -= 4), a.push(new st(r.parent, c, c + s, o[1], u, o[2], r));
            } else if (r.name == "ListItem" && r.parent.name == "BulletList" && (o = /^( *)([-+*])( {1,4}\[[ xX]\])?( +)/.exec(i.text.slice(c)))) {
                let u = o[4], s = o[0].length;
                u.length > 4 && (u = u.slice(0, u.length - 4), s -= 4);
                let m = o[2];
                o[3] && (m += o[3].replace(/[xX]/, " ")), a.push(new st(r.parent, c, c + s, o[1], u, m, r));
            }
        }
        return a;
    }
    function wa(e, t) {
        return /^(\s*)(\d+)(?=[.)])/.exec(t.sliceString(e.from, e.from + 10));
    }
    function Wt(e, t, l, a = 0) {
        for (let n = -1, o = e; ;) {
            if (o.name == "ListItem") {
                let i = wa(o, t), c = +i[2];
                if (n >= 0) {
                    if (c != n + 1) return;
                    l.push({
                        from: o.from + i[1].length,
                        to: o.from + i[0].length,
                        insert: String(n + 2 + a)
                    });
                }
                n = c;
            }
            let r = o.nextSibling;
            if (!r) break;
            o = r;
        }
    }
    function Yt(e, t) {
        let l = /^[ \t]*/.exec(e)[0].length;
        if (!l || t.facet(Kn) != "\t") return e;
        let a = "";
        for (let n = et(e, 4, l); n > 0; ) n >= 4 ? (a += "\t", n -= 4) : (a += " ", 
        n--);
        return a + e.slice(l);
    }
    const Ta = ({
        state: e,
        dispatch: t
    }) => {
        let l = Pe(e), {
            doc: a
        } = e, n = null, o = e.changeByRange(r => {
            if (!r.empty || !Nt.isActiveAt(e, r.from)) return n = {
                range: r
            };
            let i = r.from, c = a.lineAt(i), u = ya(l.resolveInner(i, -1), a);
            for (;u.length && u[u.length - 1].from > i - c.from; ) u.pop();
            if (!u.length) return n = {
                range: r
            };
            let s = u[u.length - 1];
            if (s.to - s.spaceAfter.length > i - c.from) return n = {
                range: r
            };
            let m = i >= s.to - s.spaceAfter.length && !/\S/.test(c.text.slice(s.to));
            if (s.item && m) {
                let k = s.node.firstChild, y = s.node.getChild("ListItem", "ListItem");
                if (k.to >= i || y && y.to < i || c.from > 0 && !/[^\s>]/.test(a.lineAt(c.from - 1).text)) {
                    let T, _ = u.length > 1 ? u[u.length - 2] : null, w = "";
                    _ && _.item ? (T = c.from + _.from, w = _.marker(a, 1)) : T = c.from + (_ ? _.to : 0);
                    let $ = [ {
                        from: T,
                        to: i,
                        insert: w
                    } ];
                    return s.node.name == "OrderedList" && Wt(s.item, a, $, -2), 
                    _ && _.node.name == "OrderedList" && Wt(_.item, a, $), {
                        range: ee.cursor(T + w.length),
                        changes: $
                    };
                }
                {
                    let T = $a(u, e, c);
                    return {
                        range: ee.cursor(i + T.length + 1),
                        changes: {
                            from: c.from,
                            insert: T + e.lineBreak
                        }
                    };
                }
            }
            if (s.node.name == "Blockquote" && m && c.from) {
                let k = a.lineAt(c.from - 1), y = />\s*$/.exec(k.text);
                if (y && y.index == s.from) {
                    let T = e.changes([ {
                        from: k.from + y.index,
                        to: k.to
                    }, {
                        from: c.from + s.from,
                        to: c.to
                    } ]);
                    return {
                        range: r.map(T),
                        changes: T
                    };
                }
            }
            let p = [];
            s.node.name == "OrderedList" && Wt(s.item, a, p);
            let S = s.item && s.item.from < c.from, O = "";
            if (!S || /^[\s\d.)\-+*>]*/.exec(c.text)[0].length >= s.to) for (let k = 0, y = u.length - 1; k <= y; k++) O += k != y || S ? u[k].blank(k < y ? et(c.text, 4, u[k + 1].from) - O.length : null) : u[k].marker(a, 1);
            let b = i;
            for (;b > c.from && /\s/.test(c.text.charAt(b - c.from - 1)); ) b--;
            return O = Yt(O, e), function(k, y) {
                if (k.name != "OrderedList" && k.name != "BulletList") return !1;
                let T = k.firstChild, _ = k.getChild("ListItem", "ListItem");
                if (!_) return !1;
                let w = y.lineAt(T.to), $ = y.lineAt(_.from), Q = /^[\s>]*$/.test(w.text);
                return w.number + (Q ? 0 : 1) < $.number;
            }(s.node, e.doc) && (O = $a(u, e, c) + e.lineBreak + O), p.push({
                from: b,
                to: i,
                insert: e.lineBreak + O
            }), {
                range: ee.cursor(b + O.length + 1),
                changes: p
            };
        });
        return !n && (t(e.update(o, {
            scrollIntoView: !0,
            userEvent: "input"
        })), !0);
    };
    function Pa(e) {
        return e.name == "QuoteMark" || e.name == "ListMark";
    }
    function $a(e, t, l) {
        let a = "";
        for (let n = 0, o = e.length - 2; n <= o; n++) a += e[n].blank(n < o ? et(l.text, 4, e[n + 1].from) - a.length : null, n < o);
        return Yt(a, t);
    }
    const Ca = ({
        state: e,
        dispatch: t
    }) => {
        let l = Pe(e), a = null, n = e.changeByRange(o => {
            let r = o.from, {
                doc: i
            } = e;
            if (o.empty && Nt.isActiveAt(e, o.from)) {
                let c = i.lineAt(r), u = ya(function(s, m) {
                    let p = s.resolveInner(m, -1), S = m;
                    Pa(p) && (S = p.from, p = p.parent);
                    for (let O; O = p.childBefore(S); ) if (Pa(O)) S = O.from; else {
                        if (O.name != "OrderedList" && O.name != "BulletList") break;
                        p = O.lastChild, S = p.to;
                    }
                    return p;
                }(l, r), i);
                if (u.length) {
                    let s = u[u.length - 1], m = s.to - s.spaceAfter.length + (s.spaceAfter ? 1 : 0);
                    if (r - c.from > m && !/\S/.test(c.text.slice(m, r - c.from))) return {
                        range: ee.cursor(c.from + m),
                        changes: {
                            from: c.from + m,
                            to: r
                        }
                    };
                    if (r - c.from == m && (!s.item || c.from <= s.item.from || !/\S/.test(c.text.slice(0, s.to)))) {
                        let p = c.from + s.from;
                        if (s.item && s.node.from < s.item.from && /\S/.test(c.text.slice(s.from, s.to))) {
                            let S = s.blank(et(c.text, 4, s.to) - et(c.text, 4, s.from));
                            return p == c.from && (S = Yt(S, e)), {
                                range: ee.cursor(p + S.length),
                                changes: {
                                    from: p,
                                    to: c.from + s.to,
                                    insert: S
                                }
                            };
                        }
                        if (p < r) return {
                            range: ee.cursor(p),
                            changes: {
                                from: p,
                                to: r
                            }
                        };
                    }
                }
            }
            return a = {
                range: o
            };
        });
        return !a && (t(e.update(n, {
            scrollIntoView: !0,
            userEvent: "delete"
        })), !0);
    }, Ea = [ {
        key: "Enter",
        run: Ta
    }, {
        key: "Backspace",
        run: Ca
    } ], Ht = vt({
        matchClosingTags: !1
    });
    function Va(e = {}) {
        let {
            codeLanguages: t,
            defaultCodeLanguage: l,
            addKeymap: a = !0,
            base: {
                parser: n
            } = ka,
            completeHTMLTags: o = !0
        } = e;
        if (!(n instanceof rt)) throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");
        let r, i = e.extensions ? [ e.extensions ] : [], c = [ Ht.support ];
        l instanceof Je ? (c.push(l.support), r = l.language) : l && (r = l);
        let u = t || r ? function(m, p) {
            return S => {
                if (S && m) {
                    let O = null;
                    if (S = /\S*/.exec(S)[0], O = typeof m == "function" ? m(S) : g.matchLanguageName(m, S, !0), 
                    O instanceof g) return O.support ? O.support.language.parser : bi.getSkippingParser(O.load());
                    if (O) return O.parser;
                }
                return p ? p.parser : null;
            };
        }(t, r) : void 0;
        i.push(function(m) {
            let {
                codeParser: p,
                htmlParser: S
            } = m;
            return {
                wrap: Fn((b, k) => {
                    let y = b.type.id;
                    if (!p || y != P.CodeBlock && y != P.FencedCode) {
                        if (S && (y == P.HTMLBlock || y == P.HTMLTag)) return {
                            parser: S,
                            overlay: Lo(b.node, b.from, b.to)
                        };
                    } else {
                        let T = "";
                        if (y == P.FencedCode) {
                            let w = b.node.getChild(P.CodeInfo);
                            w && (T = k.read(w.from, w.to));
                        }
                        let _ = p(T);
                        if (_) return {
                            parser: _,
                            overlay: w => w.type.id == P.CodeText
                        };
                    }
                    return null;
                })
            };
        }({
            codeParser: u,
            htmlParser: Ht.language.parser
        })), a && c.push(mi.high(Gn.of(Ea)));
        let s = jt(n.configure(i));
        return o && c.push(s.data.of({
            autocomplete: $r
        })), new Je(s, c);
    }
    function $r(e) {
        let {
            state: t,
            pos: l
        } = e, a = /<[:\-\.\w\u00b7-\uffff]*$/.exec(t.sliceDoc(l - 25, l));
        if (!a) return null;
        let n = Pe(t).resolveInner(l, -1);
        for (;n && !n.type.isTop; ) {
            if (n.name == "CodeBlock" || n.name == "FencedCode" || n.name == "ProcessingInstructionBlock" || n.name == "CommentBlock" || n.name == "Link" || n.name == "Image") return null;
            n = n.parent;
        }
        return {
            from: l - a[0].length,
            to: l,
            options: Cr(),
            validFor: /^<[:\-\.\w\u00b7-\uffff]*$/
        };
    }
    let Ft = null;
    function Cr() {
        if (Ft) return Ft;
        let e = ha(new pi(Ot.create({
            extensions: Ht
        }), 0, !0));
        return Ft = e ? e.options : [];
    }
    const Er = Object.defineProperty({
        __proto__: null,
        commonmarkLanguage: ka,
        deleteMarkupBackward: Ca,
        insertNewlineContinueMarkup: Ta,
        markdown: Va,
        markdownKeymap: Ea,
        markdownLanguage: Nt
    }, Symbol.toStringTag, {
        value: "Module"
    }), Qa = N({
        props: {
            tocItem: {
                type: Object,
                default: () => ({})
            },
            mdHeadingId: {
                type: Function,
                default: () => {}
            },
            scrollElement: {
                type: [ String, Object ],
                default: ""
            },
            onClick: {
                type: Function,
                default: () => {}
            },
            scrollElementOffsetTop: {
                type: Number,
                default: 0
            }
        },
        setup: e => () => {
            const {
                tocItem: t,
                mdHeadingId: l,
                scrollElement: a,
                onClick: n,
                scrollElementOffsetTop: o
            } = e;
            return d("div", {
                class: [ `${f}-catalog-link`, t.active && `${f}-catalog-active` ],
                onClick: r => {
                    n(r, t), r.stopPropagation();
                    const i = l(t.text, t.level, t.index), c = document.getElementById(i), u = a instanceof Element ? a : document.querySelector(a);
                    if (c && u) {
                        let s = c.offsetParent, m = c.offsetTop;
                        if (u.contains(s)) for (;s && u != s; ) m += s == null ? void 0 : s.offsetTop, 
                        s = s == null ? void 0 : s.offsetParent;
                        u == null || u.scrollTo({
                            top: m - o,
                            behavior: "smooth"
                        });
                    }
                }
            }, [ d("span", {
                title: t.text
            }, [ t.text ]), d("div", {
                class: `${f}-catalog-wrapper`
            }, [ t.children && t.children.map(r => d(Qa, {
                mdHeadingId: l,
                key: `${t.text}-link-${r.level}-${r.text}`,
                tocItem: r,
                scrollElement: a,
                onClick: n,
                scrollElementOffsetTop: o
            }, null)) ]) ]);
        }
    }), Vr = Qa, Ue = N({
        name: "MdCatalog",
        props: {
            editorId: {
                type: String
            },
            class: {
                type: String,
                default: ""
            },
            mdHeadingId: {
                type: Function,
                default: e => e
            },
            scrollElement: {
                type: [ String, Object ]
            },
            theme: {
                type: String,
                default: "light"
            },
            offsetTop: {
                type: Number,
                default: 20
            },
            scrollElementOffsetTop: {
                type: Number,
                default: 0
            },
            onClick: {
                type: Function
            },
            onActive: {
                type: Function
            }
        },
        emits: [ "onClick", "onActive" ],
        setup(e, t) {
            const l = e.editorId, a = ie({
                list: [],
                show: !1,
                scrollElement: e.scrollElement || `#${l}-preview-wrapper`
            }), n = el(), o = me(() => {
                const u = [];
                return a.list.forEach((s, m) => {
                    const {
                        text: p,
                        level: S
                    } = s, O = {
                        level: S,
                        text: p,
                        index: m + 1,
                        active: n.value === s
                    };
                    if (u.length === 0) u.push(O); else {
                        let b = u[u.length - 1];
                        if (O.level > b.level) for (let k = b.level + 1; k <= 6; k++) {
                            const {
                                children: y
                            } = b;
                            if (!y) {
                                b.children = [ O ];
                                break;
                            }
                            if (b = y[y.length - 1], O.level <= b.level) {
                                y.push(O);
                                break;
                            }
                        } else u.push(O);
                    }
                }), u;
            }), r = () => a.scrollElement instanceof HTMLElement ? a.scrollElement : document.querySelector(a.scrollElement), i = u => {
                if (u.length === 0) return a.list = [], !1;
                const {
                    activeHead: s
                } = u.reduce((m, p, S) => {
                    const O = document.getElementById(e.mdHeadingId(p.text, p.level, S + 1));
                    if (O instanceof HTMLElement) {
                        const b = r(), k = zi(O, b);
                        if (k < e.offsetTop && k > m.minTop) return {
                            activeHead: p,
                            minTop: k
                        };
                    }
                    return m;
                }, {
                    activeHead: u[0],
                    minTop: Number.MIN_SAFE_INTEGER
                });
                n.value = s, a.list = u;
            }, c = () => {
                i(a.list);
            };
            return q(() => n.value, u => {
                const s = u ? {
                    ...u
                } : void 0;
                e.onActive ? e.onActive(s) : t.emit("onActive", s);
            }), pe(() => {
                let u = window;
                const s = () => {
                    const m = r();
                    u = m === document.documentElement ? window : m;
                };
                E.on(l, {
                    name: qi,
                    callback: m => {
                        u == null || u.removeEventListener("scroll", c), i(m), s(), 
                        u == null || u.addEventListener("scroll", c);
                    }
                }), E.emit(l, Bi), s(), u == null || u.addEventListener("scroll", c);
            }), mt(() => {
                var u;
                const s = r();
                (u = s === document.documentElement ? window : s) == null || u.removeEventListener("scroll", c);
            }), () => d("div", {
                class: `${f}-catalog${e.theme === "dark" ? "-dark" : ""} ${e.class}`
            }, [ o.value.map(u => d(Vr, {
                mdHeadingId: e.mdHeadingId,
                tocItem: u,
                key: `link-${u.level}-${u.text}`,
                scrollElement: a.scrollElement,
                onClick: (s, m) => {
                    e.onClick ? e.onClick(s, m) : t.emit("onClick", s, m);
                },
                scrollElementOffsetTop: e.scrollElementOffsetTop
            }, null)) ]);
        }
    });
    Ue.install = e => (e.component(Ue.name, Ue), e);
    const xe = N({
        name: "NormalToolbar",
        props: {
            title: {
                type: String,
                default: ""
            },
            trigger: {
                type: [ String, Object ]
            },
            onClick: {
                type: Function
            },
            insert: {
                type: Function
            },
            language: {
                type: String
            },
            theme: {
                type: String
            }
        },
        emits: [ "onClick" ],
        setup: (e, t) => () => {
            const l = ne({
                props: e,
                ctx: t
            }, "trigger");
            return d("div", {
                class: `${f}-toolbar-item`,
                title: e.title,
                onClick: a => {
                    e.onClick instanceof Function ? e.onClick(a) : t.emit("onClick", a);
                }
            }, [ l ]);
        }
    });
    xe.install = e => (e.component(xe.name, xe), e);
    const ct = N({
        name: "ModalToolbar",
        props: {
            title: {
                type: String,
                default: ""
            },
            modalTitle: {
                type: String,
                default: ""
            },
            visible: {
                type: Boolean
            },
            width: {
                type: String,
                default: "auto"
            },
            height: {
                type: String,
                default: "auto"
            },
            trigger: {
                type: [ String, Object ]
            },
            onClick: {
                type: Function
            },
            onClose: {
                type: Function
            },
            showAdjust: {
                type: Boolean,
                default: !1
            },
            isFullscreen: {
                type: Boolean,
                default: !1
            },
            onAdjust: {
                type: Function
            },
            class: {
                type: String
            },
            style: {
                type: [ Object, String ]
            },
            showMask: {
                type: Boolean,
                default: !0
            },
            insert: {
                type: Function
            },
            language: {
                type: String
            },
            theme: {
                type: String
            },
            previewTheme: {
                type: String
            }
        },
        emits: [ "onClick", "onClose", "onAdjust" ],
        setup: (e, t) => () => {
            const l = ne({
                props: e,
                ctx: t
            }, "trigger"), a = ne({
                props: e,
                ctx: t
            }, "default");
            return d(tt, null, [ d("div", {
                class: `${f}-toolbar-item`,
                title: e.title,
                onClick: () => {
                    e.onClick instanceof Function ? e.onClick() : t.emit("onClick");
                }
            }, [ l ]), d(Ce, {
                style: e.style,
                class: e.class,
                width: e.width,
                height: e.height,
                title: e.modalTitle,
                visible: e.visible,
                showMask: e.showMask,
                onClose: () => {
                    e.onClose instanceof Function ? e.onClose() : t.emit("onClose");
                },
                showAdjust: e.showAdjust,
                isFullscreen: e.isFullscreen,
                onAdjust: o => {
                    e.onAdjust instanceof Function ? e.onAdjust(o) : t.emit("onAdjust", o);
                }
            }, (n = a, typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !vi(n) ? a : {
                default: () => [ a ]
            })) ]);
            var n;
        }
    });
    ct.install = e => (e.component(ct.name, ct), e);
    var Qr = Object.defineProperty, be = (e, t, l) => (((a, n, o) => {
        n in a ? Qr(a, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : a[n] = o;
    })(e, typeof t != "symbol" ? t + "" : t, l), l);
    const Lr = N({
        setup: () => () => d("div", {
            class: `${f}-divider`
        }, null)
    }), Ar = {
        noPrettier: {
            type: Boolean
        },
        toolbars: {
            type: Array,
            default: () => []
        },
        toolbarsExclude: {
            type: Array,
            default: () => []
        },
        setting: {
            type: Object,
            default: () => ({})
        },
        screenfull: {
            type: Object,
            default: null
        },
        screenfullJs: {
            type: String,
            default: ""
        },
        updateSetting: {
            type: Function,
            default: () => {}
        },
        tableShape: {
            type: Array,
            default: () => [ 6, 4 ]
        },
        defToolbars: {
            type: Object
        },
        noUploadImg: {
            type: Boolean
        },
        showToolbarName: {
            type: Boolean
        }
    }, Ir = N({
        name: "TableShape",
        props: {
            tableShape: {
                type: Array,
                default: () => [ 6, 4 ]
            },
            onSelected: {
                type: Function,
                default: () => {}
            }
        },
        setup(e) {
            const t = ie({
                x: -1,
                y: -1
            }), l = () => {
                const n = [ ...e.tableShape ];
                return (!n[2] || n[2] < n[0]) && (n[2] = n[0]), (!n[3] || n[3] < n[3]) && (n[3] = n[1]), 
                n;
            }, a = z(l());
            return q(() => e.tableShape, () => {
                a.value = l();
            }), () => d("div", {
                class: `${f}-table-shape`,
                onMouseleave: () => {
                    a.value = l(), t.x = -1, t.y = -1;
                }
            }, [ new Array(a.value[1]).fill("").map((n, o) => d("div", {
                class: `${f}-table-shape-row`,
                key: `table-shape-row-${o}`
            }, [ new Array(a.value[0]).fill("").map((r, i) => d("div", {
                class: `${f}-table-shape-col`,
                key: `table-shape-col-${i}`,
                onMouseenter: () => {
                    t.x = o, t.y = i, i + 1 === a.value[0] && i + 1 < a.value[2] ? a.value[0]++ : i + 2 < a.value[0] && a.value[0] > e.tableShape[0] && a.value[0]--, 
                    o + 1 === a.value[1] && o + 1 < a.value[3] ? a.value[1]++ : o + 2 < a.value[1] && a.value[1] > e.tableShape[1] && a.value[1]--;
                },
                onClick: () => {
                    e.onSelected(t);
                }
            }, [ d("div", {
                class: [ `${f}-table-shape-col-default`, o <= t.x && i <= t.y && `${f}-table-shape-col-include` ]
            }, null) ])) ])) ]);
        }
    }), Rr = N({
        props: {
            type: {
                type: String,
                default: "link"
            },
            visible: {
                type: Boolean,
                default: !1
            },
            onCancel: {
                type: Function,
                default: () => {}
            },
            onOk: {
                type: Function,
                default: () => {}
            }
        },
        setup(e) {
            const t = W("usedLanguageText"), l = W("editorId"), a = me(() => {
                var o, r;
                switch (e.type) {
                  case "link":
                    return (o = t.value.linkModalTips) == null ? void 0 : o.linkTitle;

                  case "image":
                    return (r = t.value.linkModalTips) == null ? void 0 : r.imageTitle;

                  default:
                    return "";
                }
            }), n = ie({
                desc: "",
                url: ""
            });
            return q(() => e.visible, o => {
                o || setTimeout(() => {
                    n.desc = "", n.url = "";
                }, 200);
            }), () => d(Ce, {
                title: a.value,
                visible: e.visible,
                onClose: e.onCancel
            }, {
                default: () => {
                    var o, r, i, c, u;
                    return [ d("div", {
                        class: `${f}-form-item`
                    }, [ d("label", {
                        class: `${f}-label`,
                        for: `link-desc-${l}`
                    }, [ (o = t.value.linkModalTips) == null ? void 0 : o.descLabel ]), d("input", {
                        placeholder: (r = t.value.linkModalTips) == null ? void 0 : r.descLabelPlaceHolder,
                        class: `${f}-input`,
                        id: `link-desc-${l}`,
                        type: "text",
                        value: n.desc,
                        onChange: s => {
                            n.desc = s.target.value;
                        },
                        autocomplete: "off"
                    }, null) ]), d("div", {
                        class: `${f}-form-item`
                    }, [ d("label", {
                        class: `${f}-label`,
                        for: `link-url-${l}`
                    }, [ (i = t.value.linkModalTips) == null ? void 0 : i.urlLabel ]), d("input", {
                        placeholder: (c = t.value.linkModalTips) == null ? void 0 : c.urlLabelPlaceHolder,
                        class: `${f}-input`,
                        id: `link-url-${l}`,
                        type: "text",
                        value: n.url,
                        onChange: s => {
                            n.url = s.target.value;
                        },
                        autocomplete: "off"
                    }, null) ]), d("div", {
                        class: `${f}-form-item`
                    }, [ d("button", {
                        class: [ `${f}-btn`, `${f}-btn-row` ],
                        type: "button",
                        onClick: () => {
                            e.onOk(n), n.desc = "", n.url = "";
                        }
                    }, [ (u = t.value.linkModalTips) == null ? void 0 : u.buttonOK ]) ]) ];
                }
            });
        }
    }), Xr = N({
        props: {
            visible: {
                type: Boolean,
                default: !1
            },
            onCancel: {
                type: Function,
                default: () => {}
            },
            onOk: {
                type: Function,
                default: () => {}
            }
        },
        setup(e) {
            const t = W("usedLanguageText"), l = W("editorId");
            let a = he.editorExtensions.cropper.instance;
            const n = z(), o = z(), r = z(), i = ie({
                cropperInited: !1,
                imgSelected: !1,
                imgSrc: "",
                isFullscreen: !1
            });
            let c = null;
            q(() => e.visible, () => {
                e.visible && !i.cropperInited && (a = a || window.Cropper, n.value.onchange = () => {
                    if (!a) return void E.emit(l, qe, {
                        name: "Cropper",
                        message: "Cropper is undefined"
                    });
                    const s = n.value.files || [];
                    if (i.imgSelected = !0, (s == null ? void 0 : s.length) > 0) {
                        const m = new FileReader();
                        m.onload = p => {
                            i.imgSrc = p.target.result, Re(() => {
                                c = new a(o.value, {
                                    viewMode: 2,
                                    preview: `.${f}-clip-preview-target`
                                });
                            });
                        }, m.readAsDataURL(s[0]);
                    }
                });
            }), q(() => [ i.imgSelected ], () => {
                r.value.style = "";
            }), q(() => i.isFullscreen, () => {
                Re(() => {
                    c == null || c.destroy(), r.value.style = "", o.value && (c = new a(o.value, {
                        viewMode: 2,
                        preview: `.${f}-clip-preview-target`
                    }));
                });
            });
            const u = () => {
                c.clear(), c.destroy(), c = null, n.value.value = "", i.imgSelected = !1;
            };
            return () => {
                var s;
                return d(Ce, {
                    class: `${f}-modal-clip`,
                    title: (s = t.value.clipModalTips) == null ? void 0 : s.title,
                    visible: e.visible,
                    onClose: e.onCancel,
                    showAdjust: !0,
                    isFullscreen: i.isFullscreen,
                    onAdjust: m => {
                        i.isFullscreen = m;
                    },
                    width: "668px",
                    height: "421px"
                }, {
                    default: () => {
                        var m, p;
                        return [ d("div", {
                            class: `${f}-form-item ${f}-clip`
                        }, [ d("div", {
                            class: `${f}-clip-main`
                        }, [ i.imgSelected ? d("div", {
                            class: `${f}-clip-cropper`
                        }, [ d("img", {
                            src: i.imgSrc,
                            ref: o,
                            style: {
                                display: "none"
                            },
                            alt: ""
                        }, null), d("div", {
                            class: `${f}-clip-delete`,
                            onClick: u
                        }, [ d(I, {
                            name: "delete"
                        }, null) ]) ]) : d("div", {
                            class: `${f}-clip-upload`,
                            onClick: () => {
                                n.value.click();
                            }
                        }, [ d(I, {
                            name: "upload"
                        }, null) ]) ]), d("div", {
                            class: `${f}-clip-preview`
                        }, [ d("div", {
                            class: `${f}-clip-preview-target`,
                            ref: r
                        }, null) ]) ]), d("div", {
                            class: `${f}-form-item`
                        }, [ d("button", {
                            class: `${f}-btn`,
                            type: "button",
                            onClick: () => {
                                if (c) {
                                    const S = c.getCroppedCanvas();
                                    E.emit(l, il, [ os(S.toDataURL("image/png")) ], e.onOk), 
                                    u();
                                }
                            }
                        }, [ ((m = t.value.clipModalTips) == null ? void 0 : m.buttonUpload) || ((p = t.value.linkModalTips) == null ? void 0 : p.buttonOK) ]) ]), d("input", {
                            ref: n,
                            accept: "image/*",
                            type: "file",
                            multiple: !1,
                            style: {
                                display: "none"
                            }
                        }, null) ];
                    }
                });
            };
        }
    }), Dr = N({
        props: {
            type: {
                type: String,
                default: "link"
            },
            linkVisible: {
                type: Boolean,
                default: !1
            },
            clipVisible: {
                type: Boolean,
                default: !1
            },
            onCancel: {
                type: Function,
                default: () => {}
            },
            onOk: {
                type: Function,
                default: () => {}
            }
        },
        setup: e => () => d(tt, null, [ d(Rr, {
            type: e.type,
            visible: e.linkVisible,
            onOk: e.onOk,
            onCancel: e.onCancel
        }, null), d(Xr, {
            visible: e.clipVisible,
            onOk: e.onOk,
            onCancel: e.onCancel
        }, null) ])
    }), Mr = N({
        name: "MDEditorToolbar",
        props: Ar,
        setup(e) {
            const t = W("editorId"), l = W("usedLanguageText"), a = W("theme"), n = W("previewTheme"), o = W("language"), {
                fullscreenHandler: r
            } = (y => {
                const T = W("editorId"), {
                    editorExtensions: _,
                    editorExtensionsAttrs: w
                } = he;
                let $ = _.screenfull.instance;
                const Q = z(!1), V = A => {
                    $ ? $.isEnabled && (Q.value = !0, (A === void 0 ? !$.isFullscreen : A) ? $.request() : $.exit()) : E.emit(T, qe, {
                        name: "fullscreen",
                        message: "fullscreen is undefined"
                    });
                }, M = () => {
                    $ && $.isEnabled && $.on("change", () => {
                        (Q.value || y.setting.fullscreen) && (Q.value = !1, y.updateSetting("fullscreen"));
                    });
                }, j = () => {
                    $ = window.screenfull, M();
                };
                return pe(() => {
                    var A;
                    M(), $ || ts("script", {
                        ...(A = w.screenfull) == null ? void 0 : A.js,
                        src: _.screenfull.js,
                        id: `${f}-screenfull`,
                        onload: j
                    }, "screenfull");
                }), pe(() => {
                    E.on(T, {
                        name: ls,
                        callback: V
                    });
                }), {
                    fullscreenHandler: V
                };
            })(e), i = `${t}-toolbar-wrapper`, c = z(), u = ie({
                title: !1,
                catalog: !1,
                image: !1,
                table: !1,
                mermaid: !1,
                katex: !1
            }), s = (y, T) => {
                E.emit(t, B, y, T);
            }, m = ie({
                type: "link",
                linkVisible: !1,
                clipVisible: !1
            }), p = z();
            pe(() => {
                E.on(t, {
                    name: rl,
                    callback(y) {
                        m.type = y, m.linkVisible = !0;
                    }
                });
            });
            const S = me(() => {
                const y = e.toolbars.filter(_ => !e.toolbarsExclude.includes(_)), T = y.indexOf("=");
                return [ T === -1 ? y : y.slice(0, T + 1), T === -1 ? [] : y.slice(T, Number.MAX_SAFE_INTEGER) ];
            }), O = z(), b = () => {
                E.emit(t, il, Array.from(O.value.files || [])), O.value.value = "";
            };
            pe(() => {
                O.value.addEventListener("change", b);
            });
            const k = y => {
                var T, _, w, $, Q, V, M, j, A, L, U, ae, te, F, Y, D, G, K, ce, ue, ke, ye, ve, de, Z, J, an, nn, on, rn, sn, cn, un, dn, mn, pn, hn, fn, On, gn, bn, vn, _n, Sn, xn, kn, yn, wn, Tn, Pn, $n, Cn, En, Vn, Qn, Ln, An, In, Rn, Xn, Dn, Mn, qn, Bn, zn, jn, Nn, Wn, Yn;
                if (!Si.includes(y)) {
                    if (e.defToolbars instanceof Array) {
                        const X = e.defToolbars[y];
                        return X ? Jt(X, {
                            theme: a.value,
                            previewTheme: n.value,
                            language: o.value,
                            insert(H) {
                                E.emit(t, B, "universal", {
                                    generate: H
                                });
                            }
                        }) : "";
                    }
                    if (e.defToolbars && e.defToolbars.children instanceof Array) {
                        const X = e.defToolbars.children[y];
                        return X ? Jt(X, {
                            theme: a.value,
                            previewTheme: n.value,
                            language: o.value,
                            insert(H) {
                                E.emit(t, B, "universal", {
                                    generate: H
                                });
                            }
                        }) : "";
                    }
                    return "";
                }
                switch (y) {
                  case "-":
                    return d(Lr, null, null);

                  case "bold":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (T = l.value.toolbarTips) == null ? void 0 : T.bold,
                        onClick: () => {
                            s("bold");
                        }
                    }, [ d(I, {
                        name: "bold"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (_ = l.value.toolbarTips) == null ? void 0 : _.bold ]) ]);

                  case "underline":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (w = l.value.toolbarTips) == null ? void 0 : w.underline,
                        onClick: () => {
                            s("underline");
                        }
                    }, [ d(I, {
                        name: "underline"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ ($ = l.value.toolbarTips) == null ? void 0 : $.underline ]) ]);

                  case "italic":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (Q = l.value.toolbarTips) == null ? void 0 : Q.italic,
                        onClick: () => {
                            s("italic");
                        }
                    }, [ d(I, {
                        name: "italic"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (V = l.value.toolbarTips) == null ? void 0 : V.italic ]) ]);

                  case "strikeThrough":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (M = l.value.toolbarTips) == null ? void 0 : M.strikeThrough,
                        onClick: () => {
                            s("strikeThrough");
                        }
                    }, [ d(I, {
                        name: "strike-through"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (j = l.value.toolbarTips) == null ? void 0 : j.strikeThrough ]) ]);

                  case "title":
                    return d($e, {
                        relative: `#${i}`,
                        visible: u.title,
                        onChange: X => {
                            u.title = X;
                        },
                        overlay: d("ul", {
                            class: `${f}-menu`,
                            onClick: () => {
                                u.title = !1;
                            }
                        }, [ d("li", {
                            class: `${f}-menu-item ${f}-menu-item-title`,
                            onClick: () => {
                                s("h1");
                            }
                        }, [ (A = l.value.titleItem) == null ? void 0 : A.h1 ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-title`,
                            onClick: () => {
                                s("h2");
                            }
                        }, [ (L = l.value.titleItem) == null ? void 0 : L.h2 ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-title`,
                            onClick: () => {
                                s("h3");
                            }
                        }, [ (U = l.value.titleItem) == null ? void 0 : U.h3 ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-title`,
                            onClick: () => {
                                s("h4");
                            }
                        }, [ (ae = l.value.titleItem) == null ? void 0 : ae.h4 ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-title`,
                            onClick: () => {
                                s("h5");
                            }
                        }, [ (te = l.value.titleItem) == null ? void 0 : te.h5 ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-title`,
                            onClick: () => {
                                s("h6");
                            }
                        }, [ (F = l.value.titleItem) == null ? void 0 : F.h6 ]) ])
                    }, {
                        default: () => {
                            var X, H;
                            return [ d("div", {
                                class: `${f}-toolbar-item`,
                                title: (X = l.value.toolbarTips) == null ? void 0 : X.title
                            }, [ d(I, {
                                name: "title"
                            }, null), e.showToolbarName && d("div", {
                                class: `${f}-toolbar-item-name`
                            }, [ (H = l.value.toolbarTips) == null ? void 0 : H.title ]) ]) ];
                        }
                    });

                  case "sub":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (Y = l.value.toolbarTips) == null ? void 0 : Y.sub,
                        onClick: () => {
                            s("sub");
                        }
                    }, [ d(I, {
                        name: "sub"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (D = l.value.toolbarTips) == null ? void 0 : D.sub ]) ]);

                  case "sup":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (G = l.value.toolbarTips) == null ? void 0 : G.sup,
                        onClick: () => {
                            s("sup");
                        }
                    }, [ d(I, {
                        name: "sup"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (K = l.value.toolbarTips) == null ? void 0 : K.sup ]) ]);

                  case "quote":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (ce = l.value.toolbarTips) == null ? void 0 : ce.quote,
                        onClick: () => {
                            s("quote");
                        }
                    }, [ d(I, {
                        name: "quote"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (ue = l.value.toolbarTips) == null ? void 0 : ue.quote ]) ]);

                  case "unorderedList":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (ke = l.value.toolbarTips) == null ? void 0 : ke.unorderedList,
                        onClick: () => {
                            s("unorderedList");
                        }
                    }, [ d(I, {
                        name: "unordered-list"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (ye = l.value.toolbarTips) == null ? void 0 : ye.unorderedList ]) ]);

                  case "orderedList":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (ve = l.value.toolbarTips) == null ? void 0 : ve.orderedList,
                        onClick: () => {
                            s("orderedList");
                        }
                    }, [ d(I, {
                        name: "ordered-list"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (de = l.value.toolbarTips) == null ? void 0 : de.orderedList ]) ]);

                  case "task":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (Z = l.value.toolbarTips) == null ? void 0 : Z.task,
                        onClick: () => {
                            s("task");
                        }
                    }, [ d(I, {
                        name: "task"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (J = l.value.toolbarTips) == null ? void 0 : J.task ]) ]);

                  case "codeRow":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (an = l.value.toolbarTips) == null ? void 0 : an.codeRow,
                        onClick: () => {
                            s("codeRow");
                        }
                    }, [ d(I, {
                        name: "code-row"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (nn = l.value.toolbarTips) == null ? void 0 : nn.codeRow ]) ]);

                  case "code":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (on = l.value.toolbarTips) == null ? void 0 : on.code,
                        onClick: () => {
                            s("code");
                        }
                    }, [ d(I, {
                        name: "code"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (rn = l.value.toolbarTips) == null ? void 0 : rn.code ]) ]);

                  case "link":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (sn = l.value.toolbarTips) == null ? void 0 : sn.link,
                        onClick: () => {
                            m.type = "link", m.linkVisible = !0;
                        }
                    }, [ d(I, {
                        name: "link"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (cn = l.value.toolbarTips) == null ? void 0 : cn.link ]) ]);

                  case "image":
                    return e.noUploadImg ? d("div", {
                        class: `${f}-toolbar-item`,
                        title: (un = l.value.toolbarTips) == null ? void 0 : un.image,
                        onClick: () => {
                            m.type = "image", m.linkVisible = !0;
                        }
                    }, [ d(I, {
                        name: "image"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (dn = l.value.toolbarTips) == null ? void 0 : dn.image ]) ]) : d($e, {
                        relative: `#${i}`,
                        visible: u.image,
                        onChange: X => {
                            u.image = X;
                        },
                        overlay: d("ul", {
                            class: `${f}-menu`,
                            onClick: () => {
                                u.title = !1;
                            }
                        }, [ d("li", {
                            class: `${f}-menu-item ${f}-menu-item-image`,
                            onClick: () => {
                                m.type = "image", m.linkVisible = !0;
                            }
                        }, [ (mn = l.value.imgTitleItem) == null ? void 0 : mn.link ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-image`,
                            onClick: () => {
                                O.value.click();
                            }
                        }, [ (pn = l.value.imgTitleItem) == null ? void 0 : pn.upload ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-image`,
                            onClick: () => {
                                m.clipVisible = !0;
                            }
                        }, [ (hn = l.value.imgTitleItem) == null ? void 0 : hn.clip2upload ]) ])
                    }, {
                        default: () => {
                            var X, H;
                            return [ d("div", {
                                class: `${f}-toolbar-item`,
                                title: (X = l.value.toolbarTips) == null ? void 0 : X.image
                            }, [ d(I, {
                                name: "image"
                            }, null), e.showToolbarName && d("div", {
                                class: `${f}-toolbar-item-name`
                            }, [ (H = l.value.toolbarTips) == null ? void 0 : H.image ]) ]) ];
                        }
                    });

                  case "table":
                    return d($e, {
                        relative: `#${i}`,
                        visible: u.table,
                        onChange: X => {
                            u.table = X;
                        },
                        key: "bar-table",
                        overlay: d(Ir, {
                            tableShape: e.tableShape,
                            onSelected: X => {
                                s("table", {
                                    selectedShape: X
                                });
                            }
                        }, null)
                    }, {
                        default: () => {
                            var X, H;
                            return [ d("div", {
                                class: `${f}-toolbar-item`,
                                title: (X = l.value.toolbarTips) == null ? void 0 : X.table
                            }, [ d(I, {
                                name: "table"
                            }, null), e.showToolbarName && d("div", {
                                class: `${f}-toolbar-item-name`
                            }, [ (H = l.value.toolbarTips) == null ? void 0 : H.table ]) ]) ];
                        }
                    });

                  case "revoke":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (fn = l.value.toolbarTips) == null ? void 0 : fn.revoke,
                        onClick: () => {
                            E.emit(t, so);
                        }
                    }, [ d(I, {
                        name: "revoke"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (On = l.value.toolbarTips) == null ? void 0 : On.revoke ]) ]);

                  case "next":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (gn = l.value.toolbarTips) == null ? void 0 : gn.next,
                        onClick: () => {
                            E.emit(t, io);
                        }
                    }, [ d(I, {
                        name: "next"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (bn = l.value.toolbarTips) == null ? void 0 : bn.next ]) ]);

                  case "save":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (vn = l.value.toolbarTips) == null ? void 0 : vn.save,
                        onClick: () => {
                            E.emit(t, ro);
                        }
                    }, [ d(I, {
                        name: "baocun"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (_n = l.value.toolbarTips) == null ? void 0 : _n.save ]) ]);

                  case "prettier":
                    return e.noPrettier ? "" : d("div", {
                        class: `${f}-toolbar-item`,
                        title: (Sn = l.value.toolbarTips) == null ? void 0 : Sn.prettier,
                        onClick: () => {
                            s("prettier");
                        }
                    }, [ d(I, {
                        name: "prettier"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (xn = l.value.toolbarTips) == null ? void 0 : xn.prettier ]) ]);

                  case "pageFullscreen":
                    return !e.setting.fullscreen && d("div", {
                        class: `${f}-toolbar-item`,
                        title: (kn = l.value.toolbarTips) == null ? void 0 : kn.pageFullscreen,
                        onClick: () => {
                            e.updateSetting("pageFullscreen");
                        }
                    }, [ d(I, {
                        name: e.setting.pageFullscreen ? "suoxiao" : "fangda"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (yn = l.value.toolbarTips) == null ? void 0 : yn.pageFullscreen ]) ]);

                  case "fullscreen":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (wn = l.value.toolbarTips) == null ? void 0 : wn.fullscreen,
                        onClick: () => {
                            r();
                        }
                    }, [ d(I, {
                        name: e.setting.fullscreen ? "fullscreen-exit" : "fullscreen"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (Tn = l.value.toolbarTips) == null ? void 0 : Tn.fullscreen ]) ]);

                  case "preview":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (Pn = l.value.toolbarTips) == null ? void 0 : Pn.preview,
                        onClick: () => {
                            e.updateSetting("preview");
                        }
                    }, [ d(I, {
                        name: "preview"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ ($n = l.value.toolbarTips) == null ? void 0 : $n.preview ]) ]);

                  case "previewOnly":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (Cn = l.value.toolbarTips) == null ? void 0 : Cn.previewOnly,
                        onClick: () => {
                            e.updateSetting("previewOnly");
                        }
                    }, [ d(I, {
                        name: "preview-only"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (En = l.value.toolbarTips) == null ? void 0 : En.previewOnly ]) ]);

                  case "htmlPreview":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (Vn = l.value.toolbarTips) == null ? void 0 : Vn.htmlPreview,
                        onClick: () => {
                            e.updateSetting("htmlPreview");
                        }
                    }, [ d(I, {
                        name: "coding"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (Qn = l.value.toolbarTips) == null ? void 0 : Qn.htmlPreview ]) ]);

                  case "catalog":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (Ln = l.value.toolbarTips) == null ? void 0 : Ln.catalog,
                        onClick: () => {
                            E.emit(t, as);
                        },
                        key: "bar-catalog"
                    }, [ d(I, {
                        name: "catalog"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (An = l.value.toolbarTips) == null ? void 0 : An.catalog ]) ]);

                  case "github":
                    return d("div", {
                        class: `${f}-toolbar-item`,
                        title: (In = l.value.toolbarTips) == null ? void 0 : In.github,
                        onClick: () => xi("https://github.com/imzbf/md-editor-v3")
                    }, [ d(I, {
                        name: "github"
                    }, null), e.showToolbarName && d("div", {
                        class: `${f}-toolbar-item-name`
                    }, [ (Rn = l.value.toolbarTips) == null ? void 0 : Rn.github ]) ]);

                  case "mermaid":
                    return d($e, {
                        relative: `#${i}`,
                        visible: u.mermaid,
                        onChange: X => {
                            u.mermaid = X;
                        },
                        overlay: d("ul", {
                            class: `${f}-menu`,
                            onClick: () => {
                                u.mermaid = !1;
                            }
                        }, [ d("li", {
                            class: `${f}-menu-item ${f}-menu-item-mermaid`,
                            onClick: () => {
                                s("flow");
                            }
                        }, [ (Xn = l.value.mermaid) == null ? void 0 : Xn.flow ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-mermaid`,
                            onClick: () => {
                                s("sequence");
                            }
                        }, [ (Dn = l.value.mermaid) == null ? void 0 : Dn.sequence ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-mermaid`,
                            onClick: () => {
                                s("gantt");
                            }
                        }, [ (Mn = l.value.mermaid) == null ? void 0 : Mn.gantt ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-mermaid`,
                            onClick: () => {
                                s("class");
                            }
                        }, [ (qn = l.value.mermaid) == null ? void 0 : qn.class ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-mermaid`,
                            onClick: () => {
                                s("state");
                            }
                        }, [ (Bn = l.value.mermaid) == null ? void 0 : Bn.state ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-mermaid`,
                            onClick: () => {
                                s("pie");
                            }
                        }, [ (zn = l.value.mermaid) == null ? void 0 : zn.pie ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-mermaid`,
                            onClick: () => {
                                s("relationship");
                            }
                        }, [ (jn = l.value.mermaid) == null ? void 0 : jn.relationship ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-mermaid`,
                            onClick: () => {
                                s("journey");
                            }
                        }, [ (Nn = l.value.mermaid) == null ? void 0 : Nn.journey ]) ]),
                        key: "bar-mermaid"
                    }, {
                        default: () => {
                            var X, H;
                            return [ d("div", {
                                class: `${f}-toolbar-item`,
                                title: (X = l.value.toolbarTips) == null ? void 0 : X.mermaid
                            }, [ d(I, {
                                name: "mermaid"
                            }, null), e.showToolbarName && d("div", {
                                class: `${f}-toolbar-item-name`
                            }, [ (H = l.value.toolbarTips) == null ? void 0 : H.mermaid ]) ]) ];
                        }
                    });

                  case "katex":
                    return d($e, {
                        relative: `#${i}`,
                        visible: u.katex,
                        onChange: X => {
                            u.katex = X;
                        },
                        overlay: d("ul", {
                            class: `${f}-menu`,
                            onClick: () => {
                                u.katex = !1;
                            }
                        }, [ d("li", {
                            class: `${f}-menu-item ${f}-menu-item-katex`,
                            onClick: () => {
                                s("katexInline");
                            }
                        }, [ (Wn = l.value.katex) == null ? void 0 : Wn.inline ]), d("li", {
                            class: `${f}-menu-item ${f}-menu-item-katex`,
                            onClick: () => {
                                s("katexBlock");
                            }
                        }, [ (Yn = l.value.katex) == null ? void 0 : Yn.block ]) ]),
                        key: "bar-katex"
                    }, {
                        default: () => {
                            var X, H;
                            return [ d("div", {
                                class: `${f}-toolbar-item`,
                                title: (X = l.value.toolbarTips) == null ? void 0 : X.katex
                            }, [ d(I, {
                                name: "formula"
                            }, null), e.showToolbarName && d("div", {
                                class: `${f}-toolbar-item-name`
                            }, [ (H = l.value.toolbarTips) == null ? void 0 : H.katex ]) ]) ];
                        }
                    });
                }
            };
            return q(() => e.toolbars, () => {
                Re(() => {
                    c.value && _i(c.value);
                });
            }, {
                immediate: !0
            }), () => {
                const y = S.value[0].map(_ => k(_)), T = S.value[1].map(_ => k(_));
                return d(tt, null, [ e.toolbars.length > 0 && d("div", {
                    class: `${f}-toolbar-wrapper`,
                    ref: c,
                    id: i
                }, [ d("div", {
                    class: [ `${f}-toolbar`, e.showToolbarName && `${f}-stn` ]
                }, [ d("div", {
                    class: `${f}-toolbar-left`,
                    ref: p
                }, [ y ]), d("div", {
                    class: `${f}-toolbar-right`
                }, [ T ]) ]) ]), d("input", {
                    ref: O,
                    accept: "image/*",
                    type: "file",
                    multiple: !0,
                    style: {
                        display: "none"
                    }
                }, null), d(Dr, {
                    linkVisible: m.linkVisible,
                    clipVisible: m.clipVisible,
                    type: m.type,
                    onCancel: () => {
                        m.linkVisible = !1, m.clipVisible = !1;
                    },
                    onOk: _ => {
                        _ && s(m.type, {
                            desc: _.desc,
                            url: _.url,
                            transform: m.type === "image"
                        }), m.linkVisible = !1, m.clipVisible = !1;
                    }
                }, null) ]);
            };
        }
    }), qr = `.${f}-preview > [data-line]`, Zt = (e, t) => +getComputedStyle(e).getPropertyValue(t).replace("px", ""), Br = (e, t) => {
        const l = Ai(() => {
            e.removeEventListener("scroll", a), e.addEventListener("scroll", a), 
            t.removeEventListener("scroll", a), t.addEventListener("scroll", a);
        }, 50), a = n => {
            const o = e.clientHeight, r = t.clientHeight, i = (e.scrollHeight - o) / (t.scrollHeight - r);
            n.target === e ? (t.removeEventListener("scroll", a), t.scrollTo({
                top: e.scrollTop / i
            }), l()) : (e.removeEventListener("scroll", a), e.scrollTo({
                top: t.scrollTop * i
            }), l());
        };
        return [ () => {
            l().finally(() => {
                e.dispatchEvent(new Event("scroll"));
            });
        }, () => {
            e.removeEventListener("scroll", a), t.removeEventListener("scroll", a);
        } ];
    }, zr = (e, t, l) => {
        const {
            view: a
        } = l, n = Ii(), o = b => a.lineBlockAt(a.state.doc.line(b + 1).from).top, r = b => a.lineBlockAt(a.state.doc.line(b + 1).from).bottom;
        let i = [], c = [], u = [];
        const s = () => {
            i = [], c = Array.from(t.querySelectorAll(qr)), u = c.map(_ => Number(_.dataset.line));
            const b = [ ...u ], {
                lines: k
            } = a.state.doc;
            let y = b.shift() || 0, T = b.shift() || k;
            for (let _ = 0; _ < k; _++) _ === T && (y = _, T = b.shift() || k), 
            i.push({
                start: y,
                end: T - 1
            });
        }, m = (b, k) => {
            let y = 1;
            for (let T = c.length - 1; T - 1 >= 0; T--) {
                const _ = c[T], w = c[T - 1];
                if (_.offsetTop + _.offsetHeight > k && w.offsetTop < k) {
                    y = Number(w.dataset.line);
                    break;
                }
            }
            for (let T = i.length - 1; T >= 0; T--) {
                const _ = r(i[T].end), w = o(i[T].start);
                if (_ > b && w <= b) {
                    y = y < i[T].start ? y : i[T].start;
                    break;
                }
            }
            return y;
        };
        let p = 0, S = 0;
        const O = lo(b => {
            var k;
            const {
                scrollDOM: y,
                contentHeight: T
            } = a;
            return !(T <= y.clientHeight || t.firstElementChild.clientHeight <= t.clientHeight) && (a.state.doc.lines < ((k = i[i.length - 1]) == null ? void 0 : k.end) ? (s(), 
            !1) : void (b.target === e ? (() => {
                var _, w, $;
                if (S !== 0) return !1;
                p++;
                const {
                    scrollDOM: Q,
                    contentHeight: V
                } = a;
                let M = Zt(t, "padding-top");
                const j = a.lineBlockAtHeight(Q.scrollTop), {
                    number: A
                } = a.state.doc.lineAt(j.from), L = i[A - 1];
                if (!L) return !1;
                let U = 1;
                const ae = t.querySelector(`[data-line="${L.start}"]`) || ((_ = t.firstElementChild) == null ? void 0 : _.firstElementChild), te = t.querySelector(`[data-line="${L.end + 1}"]`) || ((w = t.lastElementChild) == null ? void 0 : w.lastElementChild), F = Q.scrollHeight - Q.clientHeight, Y = t.scrollHeight - t.clientHeight;
                let D = o(L.start), G = r(L.end), K = ae.offsetTop, ce = te.offsetTop - K;
                if (D === 0 && (K = 0, ae === te ? (M = 0, G = V - Q.offsetHeight, 
                ce = Y) : ce = te.offsetTop), U = (Q.scrollTop - D + Zt(a.contentDOM, "padding-bottom")) / (G - D), 
                D > 0 && (G >= F || te.offsetTop + te.clientHeight > Y)) {
                    const ue = m(F, Y);
                    D = o(ue), U = (Q.scrollTop - D) / (F - D), K = (($ = document.querySelector(`[data-line="${ue}"]`)) == null ? void 0 : $.offsetTop) || K, 
                    ce = Y - K + Zt(t, "padding-top");
                }
                n(t, K - M + ce * U, () => {
                    p--;
                });
            })() : (() => {
                var _, w, $, Q, V, M, j;
                if (p !== 0) return;
                S++;
                const {
                    scrollDOM: A
                } = a, L = t.scrollTop, U = t.scrollHeight, ae = A.scrollHeight - A.clientHeight, te = t.scrollHeight - t.clientHeight;
                let F = (_ = t.firstElementChild) == null ? void 0 : _.firstElementChild, Y = (w = t.firstElementChild) == null ? void 0 : w.lastElementChild;
                if (u.length > 0) {
                    let de = Math.ceil(u[u.length - 1] * (L / U)), Z = u.findLastIndex(J => J <= de);
                    Z = Z === -1 ? 0 : Z, de = u[Z];
                    for (let J = Z; J >= 0 && J < u.length; ) {
                        if (c[J].offsetTop > L) {
                            if (J - 1 >= 0) {
                                J--;
                                continue;
                            }
                            de = -1, Z = J;
                            break;
                        }
                        if (!(J + 1 < u.length && c[J + 1].offsetTop < L)) {
                            de = u[J], Z = J;
                            break;
                        }
                        J++;
                    }
                    switch (Z) {
                      case -1:
                        F = ($ = t.firstElementChild) == null ? void 0 : $.firstElementChild, 
                        Y = c[Z];
                        break;

                      case u.length - 1:
                        F = c[Z], Y = (Q = t.firstElementChild) == null ? void 0 : Q.lastElementChild;
                        break;

                      default:
                        F = c[Z], Y = c[Z + 1 === c.length ? Z : Z + 1];
                    }
                }
                let D = F === ((V = t.firstElementChild) == null ? void 0 : V.firstElementChild) ? 0 : F.offsetTop, G = Y.offsetTop, K = 0;
                const {
                    start: ce,
                    end: ue
                } = i[Number(F.dataset.line || 0)];
                let ke = o(ce);
                const ye = o(ue + 1 === a.state.doc.lines ? ue : ue + 1);
                let ve = 0;
                if (ye > ae || Y.offsetTop + Y.offsetHeight > te) {
                    const de = m(ae, te);
                    D = ((M = document.querySelector(`[data-line="${de}"]`)) == null ? void 0 : M.offsetTop) || D, 
                    ke = o(de), K = (L - D) / (te - D), ve = ae - ke;
                } else F === ((j = t.firstElementChild) == null ? void 0 : j.firstElementChild) ? (F === Y && (G = Y.offsetTop + Y.offsetHeight + +getComputedStyle(Y).marginBottom.replace("px", "")), 
                ve = ye, K = Math.max(L / G, 0)) : (K = Math.max((L - D) / (G - D), 0), 
                ve = ye - ke);
                n(e, ke + ve * K, () => {
                    S--;
                });
            })()));
        }, 1);
        return [ () => {
            s(), e.addEventListener("scroll", O), t.addEventListener("scroll", O), 
            e.dispatchEvent(new Event("scroll"));
        }, () => {
            e.removeEventListener("scroll", O), t.removeEventListener("scroll", O);
        } ];
    }, Ut = (e, t, l) => {
        var a;
        let n = "", o = 0, r = 0, i = !0, c = !1;
        const u = t.getSelectedText(), s = he.editorConfig.mermaidTemplate;
        if (/^h[1-6]{1}$/.test(e)) {
            const m = e.replace(/^h(\d)/, (p, S) => new Array(Number(S)).fill("#", 0, S).join(""));
            n = `${m} ${u}`, o = m.length + 1;
        } else if (e === "prettier") {
            const m = window.prettier || he.editorExtensions.prettier.prettierInstance, p = [ ((a = window.prettierPlugins) == null ? void 0 : a.markdown) || he.editorExtensions.prettier.parserMarkdownInstance ];
            m && p[0] !== void 0 ? n = m.format(t.getValue(), {
                parser: "markdown",
                plugins: p
            }) : (E.emit(l.editorId, qe, {
                name: "prettier",
                message: "prettier is undefined"
            }), n = t.getValue()), i = !1, c = !0;
        } else switch (e) {
          case "bold":
            n = `**${u}**`, o = 2, r = -2;
            break;

          case "underline":
            n = `<u>${u}</u>`, o = 3, r = -4;
            break;

          case "italic":
            n = `*${u}*`, o = 1, r = -1;
            break;

          case "strikeThrough":
            n = `~~${u}~~`, o = 2, r = -2;
            break;

          case "sub":
            n = `<sub>${u}</sub>`, o = 5, r = -6;
            break;

          case "sup":
            n = `<sup>${u}</sup>`, o = 5, r = -6;
            break;

          case "codeRow":
            n = "`" + u + "`", o = 1, r = -1;
            break;

          case "quote":
            n = `> ${u}`, o = 2;
            break;

          case "orderedList":
            n = `1. ${u}`, o = 3;
            break;

          case "unorderedList":
            n = `- ${u}`, o = 2;
            break;

          case "task":
            n = `- [ ] ${u}`, o = 6;
            break;

          case "code":
            {
                const m = l.text || u || "", p = l.mode || "language";
                n = `\`\`\`${p}
${m}
\`\`\`
`, o = 3, r = 3 + p.length - n.length;
                break;
            }

          case "table":
            {
                n = "|";
                const {
                    selectedShape: m = {
                        x: 1,
                        y: 1
                    }
                } = l, {
                    x: p,
                    y: S
                } = m;
                for (let O = 0; O <= S; O++) n += " col |";
                n += `
|`;
                for (let O = 0; O <= S; O++) n += " - |";
                for (let O = 0; O <= p; O++) {
                    n += `
|`;
                    for (let b = 0; b <= S; b++) n += " content |";
                }
                o = 2, r = 5 - n.length;
                break;
            }

          case "link":
            {
                const {
                    desc: m,
                    url: p
                } = l;
                n = `[${m}](${p})`, i = !1;
                break;
            }

          case "image":
            {
                const {
                    desc: m,
                    url: p,
                    urls: S
                } = l;
                n = S instanceof Array ? S.reduce((O, b) => {
                    const {
                        url: k = "",
                        alt: y = "",
                        title: T = ""
                    } = typeof b == "object" ? b : {
                        url: b
                    };
                    return O + `![${y}](${k}${T ? " '" + T + "'" : ""})
`;
                }, "") : `![${m}](${p})
`, i = !1;
                break;
            }

          case "flow":
            n = `\`\`\`mermaid
${(s == null ? void 0 : s.flow) || `flowchart TD 
  Start --> Stop`}
\`\`\`
`, o = 3, r = 10 - n.length;
            break;

          case "sequence":
            n = `\`\`\`mermaid
${(s == null ? void 0 : s.sequence) || `sequenceDiagram
  A->>B: hello!
  B-->>A: hi!
  A-)B: bye!`}
\`\`\`
`, o = 3, r = 10 - n.length;
            break;

          case "gantt":
            n = `\`\`\`mermaid
${(s == null ? void 0 : s.gantt) || `gantt
title A Gantt Diagram
dateFormat  YYYY-MM-DD
section Section
A task  :a1, 2014-01-01, 30d
Another task  :after a1, 20d`}
\`\`\`
`, o = 3, r = 10 - n.length;
            break;

          case "class":
            n = `\`\`\`mermaid
${(s == null ? void 0 : s.class) || `classDiagram
  class Animal
  Vehicle <|-- Car`}
\`\`\`
`, o = 3, r = 10 - n.length;
            break;

          case "state":
            n = `\`\`\`mermaid
${(s == null ? void 0 : s.state) || `stateDiagram-v2
  s1 --> s2`}
\`\`\`
`, o = 3, r = 10 - n.length;
            break;

          case "pie":
            n = `\`\`\`mermaid
${(s == null ? void 0 : s.pie) || `pie title Pets adopted by volunteers
  "Dogs" : 386
  "Cats" : 85
  "Rats" : 15`}
\`\`\`
`, o = 3, r = 10 - n.length;
            break;

          case "relationship":
            n = `\`\`\`mermaid
${(s == null ? void 0 : s.relationship) || `erDiagram
  CAR ||--o{ NAMED-DRIVER : allows
  PERSON ||--o{ NAMED-DRIVER : is`}
\`\`\`
`, o = 3, r = 10 - n.length;
            break;

          case "journey":
            n = `\`\`\`mermaid
${(s == null ? void 0 : s.journey) || `journey
  title My working day
  section Go to work
    Make tea: 5: Me
    Go upstairs: 3: Me
    Do work: 1: Me, Cat
  section Go home
    Go downstairs: 5: Me
    Sit down: 5: Me`}
\`\`\`
`, o = 3, r = 10 - n.length;
            break;

          case "katexInline":
            n = "$$", o = 1, r = -1;
            break;

          case "katexBlock":
            n = `$$

$$
`, o = 3, r = -4;
            break;

          case "universal":
            {
                const {
                    generate: m
                } = l, p = m(u);
                n = p.targetValue, i = p.select ?? !0, o = p.deviationStart || 0, 
                r = p.deviationEnd || 0;
            }
        }
        return {
            text: n,
            options: {
                select: i,
                deviationStart: o,
                deviationEnd: r,
                replaceAll: c
            }
        };
    }, La = "var(--md-color)", Ge = "var(--md-color)", Aa = "#e5c07b", Ia = "#d19a66", Ra = "var(--md-bk-color)", Gt = "var(--md-bk-color)", Xa = "#528bff", Da = [ fe.theme({
        "&": {
            color: Ge,
            backgroundColor: Ra
        },
        ".cm-content": {
            caretColor: Xa
        },
        ".cm-cursor, .cm-dropCursor": {
            borderLeftColor: Xa
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
            backgroundColor: "#ceedfa33"
        },
        ".cm-panels": {
            backgroundColor: "#21252b",
            color: Ge
        },
        ".cm-panels.cm-panels-top": {
            borderBottom: "1px solid var(--md-border-color)"
        },
        ".cm-panels.cm-panels-bottom": {
            borderTop: "1px solid var(--md-border-color)"
        },
        ".cm-searchMatch": {
            backgroundColor: "#72a1ff59",
            outline: "1px solid #457dff"
        },
        ".cm-searchMatch.cm-searchMatch-selected": {
            backgroundColor: "#6199ff2f"
        },
        ".cm-activeLine": {
            backgroundColor: "#ceedfa33"
        },
        ".cm-selectionMatch": {
            backgroundColor: "#aafe661a"
        },
        "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
            backgroundColor: "#bad0f847"
        },
        ".cm-gutters": {
            backgroundColor: Ra,
            color: Ge,
            borderRight: "1px solid",
            borderColor: "var(--md-border-color)"
        },
        ".cm-activeLineGutter": {
            backgroundColor: "#2c313a"
        },
        ".cm-foldPlaceholder": {
            backgroundColor: "transparent",
            border: "none",
            color: "#ddd"
        },
        ".cm-tooltip": {
            border: "1px solid var(--md-border-color)",
            backgroundColor: Gt
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
            borderTopColor: "transparent",
            borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
            borderTopColor: Gt,
            borderBottomColor: Gt
        },
        ".cm-tooltip-autocomplete": {
            "& > ul > li[aria-selected]": {
                color: Ge
            }
        }
    }, {
        dark: !0
    }), eo(Jn.define([ {
        tag: h.keyword,
        color: "#c678dd"
    }, {
        tag: [ h.name, h.deleted, h.character, h.propertyName, h.macroName ],
        color: La
    }, {
        tag: [ h.function(h.variableName), h.labelName ],
        color: "#e5c07b"
    }, {
        tag: [ h.color, h.constant(h.name), h.standard(h.name) ],
        color: Ia
    }, {
        tag: [ h.definition(h.name), h.separator ],
        color: Ge
    }, {
        tag: [ h.typeName, h.className, h.number, h.changed, h.annotation, h.modifier, h.self, h.namespace ],
        color: "#e5c07b"
    }, {
        tag: [ h.operator, h.operatorKeyword, h.url, h.escape, h.regexp, h.link, h.special(h.string) ],
        color: "#56b6c2"
    }, {
        tag: [ h.meta, h.comment ],
        color: Aa
    }, {
        tag: h.strong,
        fontWeight: "bold"
    }, {
        tag: h.emphasis,
        fontStyle: "italic"
    }, {
        tag: h.strikethrough,
        textDecoration: "line-through"
    }, {
        tag: h.link,
        color: Aa,
        textDecoration: "underline"
    }, {
        tag: h.heading,
        fontWeight: "bold",
        color: La
    }, {
        tag: [ h.atom, h.bool, h.special(h.variableName) ],
        color: Ia
    }, {
        tag: [ h.processingInstruction, h.string, h.inserted ],
        color: "var(--md-color)"
    }, {
        tag: h.invalid,
        color: "#ffffff"
    } ])) ], Ma = "#3f4a54", Ke = "#3f4a54", qa = "#2d8cf0", Ba = "#d19a66", za = "var(--md-bk-color)", Kt = "var(--md-bk-color)", ja = "#3f4a54", Na = [ fe.theme({
        "&": {
            color: Ke,
            backgroundColor: za
        },
        ".cm-content": {
            caretColor: ja
        },
        ".cm-cursor, .cm-dropCursor": {
            borderLeftColor: ja
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
            backgroundColor: "#bad5fa"
        },
        ".cm-panels": {
            backgroundColor: "#f6f6f6",
            color: Ke
        },
        ".cm-panels.cm-panels-top": {
            borderBottom: "1px solid var(--md-border-color)"
        },
        ".cm-panels.cm-panels-bottom": {
            borderTop: "1px solid var(--md-border-color)"
        },
        ".cm-searchMatch": {
            backgroundColor: "#72a1ff59",
            outline: "1px solid #457dff"
        },
        ".cm-searchMatch.cm-searchMatch-selected": {
            backgroundColor: "#6199ff2f"
        },
        ".cm-activeLine": {
            backgroundColor: "#ceedfa33"
        },
        ".cm-selectionMatch": {
            backgroundColor: "#aafe661a"
        },
        "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
            backgroundColor: "#bad0f847"
        },
        ".cm-gutters": {
            backgroundColor: za,
            color: Ke,
            borderRight: "1px solid",
            borderColor: "var(--md-border-color)"
        },
        ".cm-activeLineGutter": {
            backgroundColor: "#ceedfa33"
        },
        ".cm-foldPlaceholder": {
            backgroundColor: "transparent",
            border: "none",
            color: "#ddd"
        },
        ".cm-tooltip": {
            border: "1px solid var(--md-border-color)",
            backgroundColor: Kt
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
            borderTopColor: "transparent",
            borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
            borderTopColor: Kt,
            borderBottomColor: Kt
        },
        ".cm-tooltip-autocomplete": {
            "& > ul > li[aria-selected]": {
                color: Ke
            }
        }
    }), eo(Jn.define([ {
        tag: h.keyword,
        color: "#c678dd"
    }, {
        tag: [ h.name, h.deleted, h.character, h.propertyName, h.macroName ],
        color: Ma
    }, {
        tag: [ h.function(h.variableName), h.labelName ],
        color: "#2d8cf0"
    }, {
        tag: [ h.color, h.constant(h.name), h.standard(h.name) ],
        color: Ba
    }, {
        tag: [ h.definition(h.name), h.separator ],
        color: Ke
    }, {
        tag: [ h.typeName, h.className, h.number, h.changed, h.annotation, h.modifier, h.self, h.namespace ],
        color: "#e5c07b"
    }, {
        tag: [ h.operator, h.operatorKeyword, h.url, h.escape, h.regexp, h.link, h.special(h.string) ],
        color: "#56b6c2"
    }, {
        tag: [ h.meta, h.comment ],
        color: qa
    }, {
        tag: h.strong,
        fontWeight: "bold"
    }, {
        tag: h.emphasis,
        fontStyle: "italic"
    }, {
        tag: h.strikethrough,
        textDecoration: "line-through"
    }, {
        tag: h.link,
        color: qa,
        textDecoration: "underline"
    }, {
        tag: h.heading,
        fontWeight: "bold",
        color: Ma
    }, {
        tag: [ h.atom, h.bool, h.special(h.variableName) ],
        color: Ba
    }, {
        tag: [ h.processingInstruction, h.string, h.inserted ],
        color: "#3f4a54"
    }, {
        tag: h.invalid,
        color: "#fff"
    } ])) ], ut = (e, t, l, a, n) => (o, r, i, c) => {
        const u = `${e}${t}`.slice(c - i);
        o.dispatch(o.state.replaceSelection(`${u}${l}${a}`));
        const s = i + r.label.length + (n === "title" ? l.length : 0);
        o.dispatch({
            selection: ee.create([ ee.range(i + r.label.length + (n === "title" ? 1 : -t.length), s), ee.cursor(s) ], 1)
        }), o.focus();
    }, Wa = e => (t, l, a, n) => {
        const o = e.slice(n - a);
        t.dispatch(t.state.replaceSelection(`${o} `));
    }, Ya = e => {
        const t = l => {
            const a = l.matchBefore(/^#+|^-\s*\[*\s*\]*|`+|\[|!\[*|^\|\s?\|?|\$\$?|!+\s*\w*/);
            return a === null || a.from == a.to && l.explicit ? null : {
                from: a.from,
                options: [ ...[ "h1", "h2", "h3", "h4", "h5", "h6" ].map((n, o) => {
                    const r = new Array(o + 1).fill("#").join("");
                    return {
                        label: r,
                        type: "text",
                        apply: Wa(r)
                    };
                }), ...[ "unchecked", "checked" ].map(n => {
                    const o = n === "checked" ? "- [x]" : "- [ ]";
                    return {
                        label: o,
                        type: "text",
                        apply: Wa(o)
                    };
                }), ...[ [ "`", "" ], [ "```", "language" ], [ "```mermaid\n", "" ] ].map(n => ({
                    label: `${n[0]}${n[1]}`,
                    type: "text",
                    apply: ut(n[0], n[1], "", n[0] === "`" ? "`" : "\n```", "type")
                })), {
                    label: "[]()",
                    type: "text"
                }, {
                    label: "![]()",
                    type: "text"
                }, {
                    label: "| |",
                    type: "text",
                    detail: "table",
                    apply: `| col | col | col |
| - | - | - |
| content | content | content |
| content | content | content |`
                }, {
                    label: "$",
                    type: "text",
                    apply: ut("$", "", "", "$", "type")
                }, {
                    label: "$$",
                    type: "text",
                    apply: ut("$$", "", `
`, `
$$`, "title")
                }, ...[ "note", "abstract", "info", "tip", "success", "question", "warning", "failure", "danger", "bug", "example", "quote", "hint", "caution", "error", "attention" ].map(n => ({
                    label: `!!! ${n}`,
                    type: "text",
                    apply: ut("!!!", ` ${n}`, " Title", `

!!!`, "title")
                })) ]
            };
        };
        return Ci({
            override: e ? [ t, ...e ] : [ t ]
        });
    }, Ie = e => {
        const t = new Me();
        return l => (t.get(e.state) ? e.dispatch({
            effects: t.reconfigure(l)
        }) : e.dispatch({
            effects: Qi.appendConfig.of(t.of(l))
        }), !0);
    };
    class jr {
        constructor(t) {
            be(this, "view"), be(this, "maxLength", Number.MAX_SAFE_INTEGER), be(this, "toggleTabSize"), 
            be(this, "togglePlaceholder"), be(this, "setExtensions"), be(this, "toggleDisabled"), 
            be(this, "toggleReadOnly"), be(this, "toggleMaxlength"), this.view = t, 
            this.toggleTabSize = Ie(this.view), this.togglePlaceholder = Ie(this.view), 
            this.setExtensions = Ie(this.view), this.toggleDisabled = Ie(this.view), 
            this.toggleReadOnly = Ie(this.view), this.toggleMaxlength = Ie(this.view);
        }
        getValue() {
            return this.view.state.doc.toString();
        }
        setValue(t, l = 0, a = this.view.state.doc.length) {
            this.view.dispatch({
                changes: {
                    from: l,
                    to: a,
                    insert: t
                }
            });
        }
        getSelectedText() {
            const {
                from: t,
                to: l
            } = this.view.state.selection.main;
            return this.view.state.sliceDoc(t, l);
        }
        replaceSelectedText(t, l = {
            select: !0,
            deviationStart: 0,
            deviationEnd: 0,
            replaceAll: !1
        }, a) {
            try {
                if (l.replaceAll) {
                    if (this.setValue(t), t.length > this.maxLength) throw new Error("The input text is too long");
                    return;
                }
                if (this.view.state.doc.length - this.getSelectedText().length + t.length > this.maxLength) throw new Error("The input text is too long");
                const {
                    from: n
                } = this.view.state.selection.main;
                if (this.view.dispatch(this.view.state.replaceSelection(t)), l.select) {
                    const o = n + t.length + l.deviationEnd;
                    this.view.dispatch({
                        selection: ee.create([ ee.range(n + l.deviationStart, o), ee.cursor(o) ], 1)
                    });
                }
                this.view.focus();
            } catch (n) {
                if (n.message !== "The input text is too long") throw n;
                E.emit(a, qe, {
                    name: "overlength",
                    message: n.message,
                    data: t
                });
            }
        }
        setTabSize(t) {
            this.toggleTabSize([ Ot.tabSize.of(t), Kn.of(" ".repeat(t)) ]);
        }
        setPlaceholder(t) {
            this.togglePlaceholder(Ei(t));
        }
        focus(t) {
            if (this.view.focus(), !t) return;
            let l = 0, a = 0, n = 0;
            switch (t) {
              case "start":
                break;

              case "end":
                l = a = n = this.getValue().length;
                break;

              default:
                l = t.rangeAnchor || t.cursorPos, a = t.rangeHead || t.cursorPos, 
                n = t.cursorPos;
            }
            this.view.dispatch({
                scrollIntoView: !0,
                selection: ee.create([ ee.range(l, a), ee.cursor(n) ], 1)
            });
        }
        setDisabled(t) {
            this.toggleDisabled([ fe.editable.of(!t) ]);
        }
        setReadOnly(t) {
            this.toggleReadOnly([ Ot.readOnly.of(t) ]);
        }
        setMaxLength(t) {
            this.maxLength = t, this.toggleMaxlength([ Ot.changeFilter.of(l => l.newDoc.length <= t) ]);
        }
    }
    const Nr = e => {
        const t = W("tabWidth"), l = W("editorId"), a = W("theme"), n = z(), o = el(), r = new Me(), i = new Me(), c = new Me(), u = new Me(), s = new Me(), m = (p = l, 
        S = e, [ {
            key: "Ctrl-b",
            mac: "Cmd-b",
            run: () => (E.emit(p, B, "bold"), !0)
        }, {
            key: "Ctrl-d",
            mac: "Cmd-d",
            run: Li,
            preventDefault: !0
        }, {
            key: "Ctrl-s",
            mac: "Cmd-s",
            run: _ => (E.emit(p, ro, _.state.doc.toString()), !0),
            shift: () => (E.emit(p, B, "strikeThrough"), !0)
        }, {
            key: "Ctrl-u",
            mac: "Cmd-u",
            run: () => (E.emit(p, B, "underline"), !0),
            shift: () => (E.emit(p, B, "unorderedList"), !0)
        }, {
            key: "Ctrl-i",
            mac: "Cmd-i",
            run: () => (E.emit(p, B, "italic"), !0),
            shift: () => (E.emit(p, rl, "image"), !0)
        }, {
            key: "Ctrl-1",
            mac: "Cmd-1",
            run: () => (E.emit(p, B, "h1"), !0)
        }, {
            key: "Ctrl-2",
            mac: "Cmd-2",
            run: () => (E.emit(p, B, "h2"), !0)
        }, {
            key: "Ctrl-3",
            mac: "Cmd-3",
            run: () => (E.emit(p, B, "h3"), !0)
        }, {
            key: "Ctrl-4",
            mac: "Cmd-4",
            run: () => (E.emit(p, B, "h4"), !0)
        }, {
            key: "Ctrl-5",
            mac: "Cmd-5",
            run: () => (E.emit(p, B, "h5"), !0)
        }, {
            key: "Ctrl-6",
            mac: "Cmd-6",
            run: () => (E.emit(p, B, "h6"), !0)
        }, {
            key: "Ctrl-ArrowUp",
            mac: "Cmd-ArrowUp",
            run: () => (E.emit(p, B, "sup"), !0)
        }, {
            key: "Ctrl-ArrowDown",
            mac: "Cmd-ArrowDown",
            run: () => (E.emit(p, B, "sub"), !0)
        }, {
            key: "Ctrl-o",
            mac: "Cmd-o",
            run: () => (E.emit(p, B, "orderedList"), !0)
        }, {
            key: "Ctrl-c",
            mac: "Cmd-c",
            shift: () => (E.emit(p, B, "code"), !0),
            any: (_, w) => !(!w.ctrlKey && !w.metaKey || !w.altKey || w.code !== "KeyC" || (E.emit(p, B, "codeRow"), 
            0))
        }, {
            key: "Ctrl-l",
            mac: "Cmd-l",
            run: () => (E.emit(p, rl, "link"), !0)
        }, {
            key: "Ctrl-f",
            mac: "Cmd-f",
            shift: () => !S.noPrettier && (E.emit(p, B, "prettier"), !0)
        }, {
            any: (_, w) => !(!w.ctrlKey && !w.metaKey || !w.altKey || !w.shiftKey || w.code !== "KeyT" || (E.emit(p, B, "table"), 
            0))
        }, ...Vi ]);
        var p, S;
        const O = z(!1), b = ((_, w) => {
            const $ = W("editorId"), Q = V => {
                V instanceof Promise ? V.then(M => {
                    E.emit($, B, "universal", {
                        generate: () => ({
                            targetValue: M
                        })
                    });
                }).catch(M => {}) : E.emit($, B, "universal", {
                    generate: () => ({
                        targetValue: V
                    })
                });
            };
            return V => {
                var M, j, A;
                if (!V.clipboardData) return;
                if (V.clipboardData.files.length > 0) {
                    const {
                        files: D
                    } = V.clipboardData;
                    return E.emit($, il, Array.from(D).filter(G => /image\/.*/.test(G.type))), 
                    void V.preventDefault();
                }
                const L = V.clipboardData.getData("text/plain"), U = ((M = w.value) == null ? void 0 : M.view.state.selection.main.to) || 0, ae = ((j = w.value) == null ? void 0 : j.view.state.doc.lineAt(U).from) || 0, te = ((A = w.value) == null ? void 0 : A.view.state.doc.sliceString(ae, U)) || "", F = /!\[.*\]\(\s*$/.test(te), Y = /!\[.*\]\((.*)\s?.*\)/.test(L);
                if (F) {
                    const D = _.transformImgUrl(L);
                    return Q(D), void V.preventDefault();
                }
                if (Y) {
                    const D = L.match(new RegExp(`(?<=!\\[.*\\]\\()([^)\\s]+)(?=\\s?["']?.*["']?\\))`, "g"));
                    return D ? Promise.all(D.map(G => _.transformImgUrl(G))).then(G => {
                        Q(G.reduce((K, ce, ue) => K.replace(D[ue], ce), L));
                    }) : Q(L), void V.preventDefault();
                }
                if (_.autoDetectCode && V.clipboardData.types.includes("vscode-editor-data")) {
                    const D = JSON.parse(V.clipboardData.getData("vscode-editor-data"));
                    return E.emit($, B, "code", {
                        mode: D.mode,
                        text: V.clipboardData.getData("text/plain")
                    }), void V.preventDefault();
                }
                _.maxlength && L.length + _.modelValue.length > _.maxlength && E.emit($, qe, {
                    name: "overlength",
                    message: "The input text is too long",
                    data: L
                });
            };
        })(e, o), k = {
            paste: b,
            blur: e.onBlur,
            focus: e.onFocus,
            drop: e.onDrop,
            compositionstart: () => {
                O.value = !0;
            },
            compositionend: (_, w) => {
                O.value = !1, e.updateModelValue(w.state.doc.toString());
            },
            input: _ => {
                e.onInput && e.onInput(_);
                const {
                    data: w
                } = _;
                e.maxlength && e.modelValue.length + w.length > e.maxlength && E.emit(l, qe, {
                    name: "overlength",
                    message: "The input text is too long",
                    data: w
                });
            }
        }, y = [ Gn.of([ ...ki, ...yi, ...m, wi ]), u.of(to()), r.of(Va({
            codeLanguages: go
        })), fe.lineWrapping, fe.updateListener.of(_ => {
            _.docChanged && (e.onChange(_.state.doc.toString()), O.value || e.updateModelValue(_.state.doc.toString()));
        }), s.of(fe.domEventHandlers(k)) ], T = () => {
            const _ = [ ...y, i.of(a.value === "light" ? Na : Da), c.of(Ya(e.completions)) ];
            return he.codeMirrorExtensions(a.value, _, [ ...m ]);
        };
        return pe(() => {
            const _ = new fe({
                doc: e.modelValue,
                parent: n.value,
                extensions: [ T() ]
            }), w = new jr(_);
            o.value = w, setTimeout(() => {
                w.setTabSize(t), w.setDisabled(e.disabled), w.setReadOnly(e.readonly), 
                e.placeholder && w.setPlaceholder(e.placeholder), typeof e.maxlength == "number" && w.setMaxLength(e.maxlength), 
                e.autofocus && _.focus();
            }, 0), E.on(l, {
                name: so,
                callback() {
                    Ti(_);
                }
            }), E.on(l, {
                name: io,
                callback() {
                    Pi(_);
                }
            }), E.on(l, {
                name: B,
                callback($, Q = {}) {
                    var V, M;
                    if ($ === "image" && Q.transform) {
                        const j = e.transformImgUrl(Q.url);
                        if (j instanceof Promise) j.then(A => {
                            var L;
                            const {
                                text: U,
                                options: ae
                            } = Ut($, o.value, {
                                ...Q,
                                url: A
                            });
                            (L = o.value) == null || L.replaceSelectedText(U, ae, l);
                        }).catch(A => {}); else {
                            const {
                                text: A,
                                options: L
                            } = Ut($, o.value, {
                                ...Q,
                                url: j
                            });
                            (V = o.value) == null || V.replaceSelectedText(A, L, l);
                        }
                    } else {
                        const {
                            text: j,
                            options: A
                        } = Ut($, o.value, Q);
                        (M = o.value) == null || M.replaceSelectedText(j, A, l);
                    }
                }
            }), E.on(l, {
                name: ns,
                callback: lo($ => {
                    var Q;
                    const V = {
                        ...k
                    }, M = Object.keys(k);
                    for (const j in $) {
                        const A = j;
                        M.includes(A) ? V[A] = (L, U) => {
                            $[A](L, U), L.defaultPrevented || k[A](L, U);
                        } : V[A] = $[A];
                    }
                    (Q = o.value) == null || Q.view.dispatch({
                        effects: s.reconfigure(fe.domEventHandlers(V))
                    });
                })
            });
        }), q(a, () => {
            var _;
            (_ = o.value) == null || _.view.dispatch({
                effects: i.reconfigure(a.value === "light" ? Na : Da)
            });
        }, {
            deep: !0
        }), q(() => e.completions, () => {
            var _;
            (_ = o.value) == null || _.view.dispatch({
                effects: c.reconfigure(Ya(e.completions))
            });
        }, {
            deep: !0
        }), q(() => e.modelValue, () => {
            var _, w;
            ((_ = o.value) == null ? void 0 : _.getValue()) !== e.modelValue && ((w = o.value) == null || w.setValue(e.modelValue));
        }), q(() => e.placeholder, () => {
            var _;
            (_ = o.value) == null || _.setPlaceholder(e.placeholder);
        }), q(() => e.disabled, () => {
            var _;
            (_ = o.value) == null || _.setDisabled(e.disabled);
        }), q(() => e.readonly, () => {
            var _;
            (_ = o.value) == null || _.setDisabled(e.readonly);
        }), q(() => e.maxlength, () => {
            var _;
            e.maxlength && ((_ = o.value) == null || _.setMaxLength(e.maxlength));
        }), {
            inputWrapperRef: n,
            codeMirrorUt: o,
            resetHistory() {
                var _, w;
                (_ = o.value) == null || _.view.dispatch({
                    effects: u.reconfigure([])
                }), (w = o.value) == null || w.view.dispatch({
                    effects: u.reconfigure(to())
                });
            }
        };
    }, Wr = N({
        name: "MDEditorContent",
        props: Ji,
        setup(e, t) {
            const l = W("editorId"), a = z(""), n = z(), o = z(), {
                inputWrapperRef: r,
                codeMirrorUt: i,
                resetHistory: c
            } = Nr(e), {
                inputWrapperStyle: u,
                resizeOperateStyle: s
            } = ((m, p, S) => {
                const O = ie({
                    resizedWidth: m.inputBoxWitdh
                }), b = ie({
                    width: m.inputBoxWitdh
                }), k = ie({
                    left: m.inputBoxWitdh,
                    display: "initial"
                }), y = w => {
                    var $, Q, V;
                    const M = (($ = p.value) == null ? void 0 : $.offsetWidth) || 0, j = ((Q = p.value) == null ? void 0 : Q.getBoundingClientRect().x) || 0;
                    let A = w.x - j;
                    A < gt ? A = gt : A > M - gt && (A = M - gt);
                    const L = `${A}px`;
                    b.width = L, k.left = L, O.resizedWidth = L, (V = m.onInputBoxWitdhChange) == null || V.call(m, L);
                }, T = () => {
                    document.addEventListener("mousemove", y);
                }, _ = () => {
                    document.removeEventListener("mousemove", y);
                };
                return q([ S ], () => {
                    var w, $;
                    (w = S.value) == null || w.addEventListener("mousedown", T), 
                    ($ = S.value) == null || $.addEventListener("mouseup", _);
                }, {
                    immediate: !0
                }), mt(() => {
                    var w, $;
                    (w = S.value) == null || w.removeEventListener("mousedown", T), 
                    ($ = S.value) == null || $.removeEventListener("mouseup", _);
                }), q(() => m.inputBoxWitdh, w => {
                    w && (O.resizedWidth = w, b.width = w, k.left = w);
                }), q([ De(m.setting, "htmlPreview"), De(m.setting, "preview") ], () => {
                    m.setting.htmlPreview || m.setting.preview ? (b.width = O.resizedWidth, 
                    k.display = "initial") : (b.width = "100%", k.display = "none");
                }, {
                    immediate: !0
                }), q(() => m.setting.previewOnly, w => {
                    w ? (b.width = "0%", k.display = "none") : (b.width = O.resizedWidth, 
                    k.display = "initial");
                }), {
                    inputWrapperStyle: b,
                    resizeOperateStyle: k
                };
            })(e, n, o);
            return ((m, p, S) => {
                const O = W("editorId");
                let b = () => {}, k = () => {};
                const y = () => {
                    b();
                    const T = document.querySelector(`#${O} .cm-scroller`), _ = document.querySelector(`[id="${O}-preview-wrapper"]`), w = document.querySelector(`[id="${O}-html-wrapper"]`);
                    (_ || w) && ([ k, b ] = (_ ? zr : Br)(T, _ || w, S.value), m.scrollAuto && k());
                };
                q([ p, De(m.setting, "preview"), De(m.setting, "htmlPreview"), De(m.setting, "fullscreen"), De(m.setting, "pageFullscreen") ], () => {
                    Re(y);
                }), q(() => m.scrollAuto, T => {
                    T ? k() : b();
                }), q(() => m.setting.previewOnly, T => {
                    T ? b() : k();
                }), pe(y);
            })(e, a, i), t.expose({
                getSelectedText() {
                    var m;
                    return (m = i.value) == null ? void 0 : m.getSelectedText();
                },
                focus(m) {
                    var p;
                    (p = i.value) == null || p.focus(m);
                },
                resetHistory: c
            }), () => d("div", {
                class: `${f}-content${e.setting.htmlPreview || e.setting.preview ? " has-preview" : ""}`,
                ref: n
            }, [ d("div", {
                class: `${f}-input-wrapper`,
                style: u,
                ref: r
            }, null), (e.setting.htmlPreview || e.setting.preview) && d("div", {
                class: `${f}-resize-operate`,
                style: s,
                ref: o
            }, null), d(es, {
                modelValue: e.modelValue,
                setting: e.setting,
                onHtmlChanged: m => {
                    a.value = m, e.onHtmlChanged(m);
                },
                onGetCatalog: e.onGetCatalog,
                mdHeadingId: e.mdHeadingId,
                noMermaid: e.noMermaid,
                sanitize: e.sanitize,
                noKatex: e.noKatex,
                formatCopiedText: e.formatCopiedText,
                noHighlight: e.noHighlight,
                noImgZoomIn: e.noImgZoomIn,
                sanitizeMermaid: e.sanitizeMermaid,
                codeFoldable: e.codeFoldable,
                autoFoldThreshold: e.autoFoldThreshold
            }, null), e.catalogVisible && d(Ue, {
                theme: e.theme,
                class: `${f}-catalog-editor`,
                editorId: l,
                mdHeadingId: e.mdHeadingId,
                key: "internal-catalog"
            }, null) ]);
        }
    }), Yr = N({
        props: {
            modelValue: {
                type: String,
                default: ""
            }
        },
        setup(e) {
            const t = W("usedLanguageText");
            return () => {
                var l, a;
                return d("div", {
                    class: `${f}-footer-item`
                }, [ d("label", {
                    class: `${f}-footer-label`
                }, [ `${(l = t.value.footer) == null ? void 0 : l.markdownTotal}:` ]), d("span", null, [ ((a = e.modelValue) == null ? void 0 : a.length) || 0 ]) ]);
            };
        }
    }), Hr = N({
        props: {
            checked: {
                type: Boolean,
                default: !1
            },
            onChange: {
                type: Function,
                default: () => {}
            }
        },
        setup: e => () => d("div", {
            class: [ `${f}-checkbox`, e.checked && `${f}-checkbox-checked` ],
            onClick: () => {
                e.onChange(!e.checked);
            }
        }, null)
    }), Fr = N({
        props: {
            scrollAuto: {
                type: Boolean
            },
            onScrollAutoChange: {
                type: Function,
                default: () => {}
            }
        },
        setup(e) {
            const t = W("usedLanguageText");
            return () => {
                var l;
                return d("div", {
                    class: `${f}-footer-item`
                }, [ d("label", {
                    class: `${f}-footer-label`,
                    onClick: () => {
                        e.onScrollAutoChange(!e.scrollAuto);
                    }
                }, [ (l = t.value.footer) == null ? void 0 : l.scrollAuto ]), d(Hr, {
                    checked: e.scrollAuto,
                    onChange: e.onScrollAutoChange
                }, null) ]);
            };
        }
    }), Zr = N({
        name: "MDEditorFooter",
        props: {
            modelValue: {
                type: String,
                default: ""
            },
            footers: {
                type: Array,
                default: []
            },
            scrollAuto: {
                type: Boolean
            },
            onScrollAutoChange: {
                type: Function,
                default: () => {}
            },
            defFooters: {
                type: Object
            }
        },
        setup(e) {
            const t = me(() => {
                const a = e.footers.indexOf("=");
                return [ a === -1 ? e.footers : e.footers.slice(0, a), a === -1 ? [] : e.footers.slice(a, Number.MAX_SAFE_INTEGER) ];
            }), l = a => {
                if (!$i.includes(a)) return e.defFooters instanceof Array ? e.defFooters[a] || "" : e.defFooters && e.defFooters.children instanceof Array && e.defFooters.children[a] || "";
                switch (a) {
                  case "markdownTotal":
                    return d(Yr, {
                        modelValue: e.modelValue
                    }, null);

                  case "scrollSwitch":
                    return d(Fr, {
                        scrollAuto: e.scrollAuto,
                        onScrollAutoChange: e.onScrollAutoChange
                    }, null);
                }
            };
            return () => {
                const a = t.value[0].map(o => l(o)), n = t.value[1].map(o => l(o));
                return d("div", {
                    class: `${f}-footer`
                }, [ d("div", {
                    class: `${f}-footer-left`
                }, [ a ]), d("div", {
                    class: `${f}-footer-right`
                }, [ n ]) ]);
            };
        }
    }), dt = N({
        name: "MdEditorV3",
        props: ji,
        emits: Ni,
        setup(e, t) {
            const {
                editorId: l,
                noKatex: a,
                noMermaid: n,
                noPrettier: o,
                noUploadImg: r,
                noHighlight: i
            } = e, c = ie({
                scrollAuto: e.scrollAuto
            }), u = z();
            Wi(e, t), Yi(e), Hi(e), Fi(e, t);
            const [ s, m ] = Zi(e, t), p = Ui(e);
            return mt(() => {
                E.clear(l);
            }), Gi(e, t, p, s, m, u), () => {
                const S = ne({
                    props: e,
                    ctx: t
                }, "defToolbars"), O = ne({
                    props: e,
                    ctx: t
                }, "defFooters");
                return d("div", {
                    id: l,
                    class: [ f, e.class, e.theme === "dark" && `${f}-dark`, s.fullscreen || s.pageFullscreen ? `${f}-fullscreen` : "" ],
                    style: e.style
                }, [ e.toolbars.length > 0 && d(Mr, {
                    noPrettier: o,
                    toolbars: e.toolbars,
                    toolbarsExclude: e.toolbarsExclude,
                    setting: s,
                    updateSetting: m,
                    tableShape: e.tableShape,
                    defToolbars: S,
                    noUploadImg: r,
                    showToolbarName: e.showToolbarName
                }, null), d(Wr, {
                    ref: u,
                    modelValue: e.modelValue,
                    setting: s,
                    mdHeadingId: e.mdHeadingId,
                    noMermaid: n,
                    noPrettier: o,
                    sanitize: e.sanitize,
                    placeholder: e.placeholder,
                    noKatex: a,
                    scrollAuto: c.scrollAuto,
                    formatCopiedText: e.formatCopiedText,
                    autofocus: e.autoFocus,
                    disabled: e.disabled,
                    readonly: e.readOnly,
                    maxlength: e.maxLength,
                    autoDetectCode: e.autoDetectCode,
                    noHighlight: i,
                    updateModelValue: b => {
                        t.emit("update:modelValue", b);
                    },
                    onChange: b => {
                        e.onChange && e.onChange(b), t.emit("onChange", b);
                    },
                    onHtmlChanged: b => {
                        e.onHtmlChanged && e.onHtmlChanged(b), t.emit("onHtmlChanged", b);
                    },
                    onGetCatalog: b => {
                        e.onGetCatalog && e.onGetCatalog(b), t.emit("onGetCatalog", b);
                    },
                    onBlur: b => {
                        e.onBlur && e.onBlur(b), t.emit("onBlur", b);
                    },
                    onFocus: b => {
                        e.onFocus && e.onFocus(b), t.emit("onFocus", b);
                    },
                    onInput: b => {
                        e.onInput && e.onInput(b), t.emit("onInput", b);
                    },
                    completions: e.completions,
                    catalogVisible: p.value,
                    theme: e.theme,
                    noImgZoomIn: e.noImgZoomIn,
                    onDrop: b => {
                        e.onDrop && e.onDrop(b), t.emit("onDrop", b);
                    },
                    inputBoxWitdh: e.inputBoxWitdh,
                    onInputBoxWitdhChange: b => {
                        e.onInputBoxWitdhChange && e.onInputBoxWitdhChange(b), t.emit("onInputBoxWitdhChange", b);
                    },
                    sanitizeMermaid: e.sanitizeMermaid,
                    transformImgUrl: e.transformImgUrl,
                    codeFoldable: e.codeFoldable,
                    autoFoldThreshold: e.autoFoldThreshold
                }, null), e.footers.length > 0 && d(Zr, {
                    modelValue: e.modelValue,
                    footers: e.footers,
                    defFooters: O,
                    scrollAuto: c.scrollAuto,
                    onScrollAutoChange: b => c.scrollAuto = b
                }, null) ]);
            };
        }
    });
    dt.install = e => (e.component(dt.name, dt), e.use(xe).use(at).use(ct).use(Ue).use(Ki), 
    e);
    let Ha, Fa, Za, Ua, Ga, Ka, Ja, en, tn, ln;
    Ha = {
        class: "md-editor-icon"
    }, Fa = {
        class: "md-editor-icon"
    }, Za = {
        class: "md-editor-icon"
    }, Ua = N({
        __name: "MyToolbar",
        props: {
            insert: {
                type: Function,
                default: () => {}
            }
        },
        setup(e) {
            const t = e, l = () => {
                t.insert(o => ({
                    targetValue: `
::: stepCheck
{"type":"stepChecker","scripts":[{"name":"\u4EE3\u7801\u68C0\u6D4B\u540D\u79F0","script":"","error":"\u9519\u8BEF\u4FE1\u606F\uFF01"}]}
:::
`,
                    select: !0,
                    deviationStart: 0,
                    deviationEnd: 0
                }));
            }, a = () => {
                t.insert(o => ({
                    targetValue: `
::: stepCheck
{"type":"cutScreen"}
:::
`,
                    select: !0,
                    deviationStart: 0,
                    deviationEnd: 0
                }));
            }, n = () => {
                t.insert(o => ({
                    targetValue: `
::: stepCheck
{"type":"textarea"}
:::
`,
                    select: !0,
                    deviationStart: 0,
                    deviationEnd: 0
                }));
            };
            return (o, r) => {
                const i = Ri;
                return al(), nl(tt, null, [ d(se(xe), {
                    title: "步骤检测",
                    onOnClick: l
                }, {
                    trigger: _e(() => [ lt("div", Ha, [ d(i, {
                        class: "custom-icon",
                        icon: "svg-icon:stepCheck-check"
                    }) ]) ]),
                    _: 1
                }), d(se(xe), {
                    title: "截图检查",
                    onOnClick: a
                }, {
                    trigger: _e(() => [ lt("div", Fa, [ d(i, {
                        class: "custom-icon",
                        icon: "svg-icon:stepCheck-cutscreen"
                    }) ]) ]),
                    _: 1
                }), d(se(xe), {
                    title: "实验记录",
                    onOnClick: n
                }, {
                    trigger: _e(() => [ lt("div", Za, [ d(i, {
                        class: "custom-icon",
                        icon: "svg-icon:stepCheck-textarea"
                    }) ]) ]),
                    _: 1
                }) ], 64);
            };
        }
    }), Ga = sl(Ua, [ [ "__scopeId", "data-v-c89c6876" ] ]), Ka = {
        __name: "index",
        props: {
            modelValue: {
                type: String,
                default: ""
            },
            placeholder: {
                type: String,
                default: "请输入"
            },
            defaultHeight: {
                type: [ String, Number ],
                default: "200px"
            },
            toolbars: {
                type: Array,
                default: () => [ "bold", "underline", "italic", "-", "title", "strikeThrough", "sub", "sup", "quote", "unorderedList", "orderedList", "task", "-", "codeRow", "code", "link", "image", "table", "mermaid", "katex", "-", "revoke", "next", "=", "pageFullscreen", "fullscreen", "preview", "previewOnly", "htmlPreview", "catalog" ]
            }
        },
        emits: [ "update:modelValue" ],
        setup(e, {
            emit: t
        }) {
            const l = u => c(u), a = t, n = e, o = me({
                get: () => n.modelValue || "",
                set: u => {
                    a("update:modelValue", u);
                }
            }), r = me(() => typeof n.defaultHeight == "number" ? n.defaultHeight + "px" : n.defaultHeight.indexOf("%") > 0 || n.defaultHeight.indexOf("px") > 0 ? n.defaultHeight : n.defaultHeight + "px"), i = async (u, s) => {
                s((await Promise.all(u.map(m => new Promise((p, S) => {
                    const O = new FormData();
                    O.append("file", m), O.append("source", co), uo(O).then(async b => {
                        const k = b.data;
                        k.errorFlag === "0" || k.errorFlag === "2" ? (p(k == null ? void 0 : k.eid), 
                        revokeObjUrl()) : S("上传失败，请重新上传");
                    }).catch(() => {
                        S("上传失败，请重新上传");
                    });
                })))).map(m => is(m)));
            }, c = u => u;
            return (u, s) => (al(), nl("div", {
                style: Xi(`--md-editor-height: ${se(r)}; width: 100%;`)
            }, [ d(se(dt), {
                modelValue: se(o),
                "onUpdate:modelValue": s[0] || (s[0] = m => ol(o) ? o.value = m : null),
                onOnUploadImg: i,
                placeholder: n.placeholder,
                toolbars: n.toolbars,
                class: "neu-md-editor",
                sanitize: l
            }, {
                defToolbars: _e(() => [ d(Ga) ]),
                _: 1
            }, 8, [ "modelValue", "placeholder", "toolbars" ]) ], 4));
        }
    }, Ja = sl(Ka, [ [ "__scopeId", "data-v-17d280e5" ] ]), en = {
        class: "relative"
    }, tn = {
        class: "relative"
    }, ln = {
        __name: "TaskProcess",
        props: {
            formData: {
                type: Object,
                default: () => ({})
            },
            isRequired: {
                type: [ Boolean, String ],
                default: !0
            }
        },
        emits: [ "update:formData" ],
        setup(e, {
            expose: t,
            emit: l
        }) {
            const a = l, n = e, o = me({
                get: () => n.formData,
                set: O => {
                    a("update:formData", O);
                }
            }), r = z([ "bold", "underline", "italic", "-", "title", "strikeThrough", "sub", "sup", "quote", "unorderedList", "orderedList", "task", "-", "codeRow", "code", "link", "image", "table", "mermaid", "katex", "-", "revoke", "next", "-", 0, "=", "pageFullscreen", "fullscreen", "preview", "previewOnly", "htmlPreview", "catalog" ]), i = z(""), c = z(""), u = [ {
                validator: (O, b, k) => {
                    n.isRequired ? c.value ? k() : k(new Error("请输入任务步骤")) : k();
                },
                required: n.isRequired,
                trigger: [ "blur", "change" ]
            } ], s = [ {
                validator: (O, b, k) => {
                    n.isRequired ? i.value ? k() : k(new Error("请输入任务手册")) : k();
                },
                required: n.isRequired,
                trigger: [ "blur", "change" ]
            } ], m = O => {
                i.value = O;
            }, p = O => {
                c.value = O;
            }, S = O => new Promise((b, k) => {
                const y = new FormData();
                y.append("file", O), y.append("source", co), uo(y).then(async T => {
                    const _ = T.data;
                    _.errorFlag === "0" || _.errorFlag === "2" ? (b(_ == null ? void 0 : _.eid), 
                    revokeObjUrl()) : k("上传失败，请重新上传");
                }).catch(() => {
                    k("上传失败，请重新上传");
                });
            });
            return q(() => c.value, O => {
                (function(b) {
                    if (!b) return;
                    let k = "](/content/s3/getObjectIO?eid=";
                    b.split(k).map(y => y.substring(0, 36)).splice(1).join(",");
                })(O);
            }), t({
                initForm: async ({
                    step: O,
                    manual: b
                }) => {
                    i.value = "", c.value = "", b && (i.value = await mo(b)), O && (c.value = await mo(O));
                },
                getMdIdObj: async () => {
                    let O, b;
                    return O = c.value ? await S(po(se(c))) : "", b = i.value ? await S(po(se(i))) : "", 
                    o.value.step = O, o.value.manual = b, {
                        step: O,
                        manual: b
                    };
                }
            }), (O, b) => {
                const k = Ja, y = Di;
                return al(), nl(tt, null, [ d(y, {
                    label: "任务手册（markdown文件）",
                    prop: "manualRules",
                    rules: s
                }, {
                    label: _e(() => [ lt("div", en, [ ao(" 任务手册（markdown文件） "), d(ho, {
                        onSetImportValue: m,
                        class: "import-btn"
                    }) ]) ]),
                    default: _e(() => [ d(k, {
                        modelValue: se(i),
                        "onUpdate:modelValue": b[0] || (b[0] = T => ol(i) ? i.value = T : null),
                        placeholder: "请输入您的文档内容，确保所有内容位于二级标题下。系统将根据二级标题进行内容分页展示，不在二级标题下的内容将不会显示。",
                        toolbars: se(r)
                    }, null, 8, [ "modelValue", "toolbars" ]) ]),
                    _: 1
                }), d(y, {
                    label: "任务步骤（markdown文件）",
                    prop: "manualRules",
                    rules: u
                }, {
                    label: _e(() => [ lt("div", tn, [ ao(" 任务步骤（markdown文件） "), d(ho, {
                        onSetImportValue: p,
                        class: "import-btn"
                    }) ]) ]),
                    default: _e(() => [ d(k, {
                        modelValue: se(c),
                        "onUpdate:modelValue": b[1] || (b[1] = T => ol(c) ? c.value = T : null),
                        placeholder: "请输入您的文档内容，确保所有内容位于二级标题下。系统将根据二级标题进行内容分页展示，不在二级标题下的内容将不会显示。",
                        toolbars: se(r)
                    }, null, 8, [ "modelValue", "toolbars" ]) ]),
                    _: 1
                }) ], 64);
            };
        }
    }, cl = sl(ln, [ [ "__scopeId", "data-v-fae54a0e" ] ]), fo = Object.defineProperty({
        __proto__: null,
        default: cl
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    cl as T,
    us as __tla,
    fo as a,
    bt as d,
    vt as h
};