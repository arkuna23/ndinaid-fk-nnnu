import {
    d as de,
    az as ue,
    e as Ae,
    i as me,
    a as t,
    aa as Ee,
    h as De,
    r as Ce,
    U as b,
    o as h,
    c as E,
    t as s,
    k as e,
    l as a,
    B as l,
    v as C,
    F as z,
    y as R,
    C as pe,
    aB as ye,
    av as ze,
    aC as Me,
    aw as Oe,
    _ as Be,
    aA as S,
    __tla as Ve
} from "./index-6c08ea4c.js";

import {
    _ as We,
    __tla as $e
} from "./Echart.vue_vue_type_script_setup_true_lang-c087bb9a.js";

import {
    E as Ie,
    __tla as Re
} from "./el-link-8197297a.js";

import {
    p as Se,
    b as Ue,
    _ as He,
    E as Le,
    __tla as Pe
} from "./echarts-data-23e7de3d.js";

import {
    E as Ge,
    __tla as Fe
} from "./el-avatar-76960a98.js";

import {
    a as xe
} from "./avatar-c3ebaba1.js";

import {
    E as Qe,
    __tla as Te
} from "./index-ee838148.js";

let ge, qe = Promise.all([ (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})() ]).then(async () => {
    const ve = de({
        name: "Highlight",
        props: {
            tag: ue.string.def("span"),
            keys: {
                type: Array,
                default: () => []
            },
            color: ue.string.def("var(--el-color-primary)")
        },
        emits: [ "click" ],
        setup(j, {
            emit: n,
            slots: u
        }) {
            const M = Ae(() => j.keys.map(v => me("span", {
                onClick: () => {
                    n("click", v);
                },
                style: {
                    color: j.color,
                    cursor: "pointer"
                }
            }, v))), x = () => {
                if (!(u != null && u.default)) return null;
                const v = u == null ? void 0 : u.default()[0].children;
                if (!v) return u == null ? void 0 : u.default()[0];
                const O = (f = v, j.keys.forEach((g, V) => {
                    const A = new RegExp(g, "g");
                    f = f.replace(A, `{{${V}}}`);
                }), f.split(/{{|}}/));
                var f;
                const _ = /^[0-9]*$/, B = O.map(g => _.test(g) && t(M)[g] || g);
                return me(j.tag, B);
            };
            return () => x();
        }
    }), fe = Symbol("watermark-dom");
    let U, H, L, P, G, F, Q, T, q, J, K, N, X, Y, Z, ee, ae, te, se, le, ne, ie, oe;
    U = {
        class: "flex items-center"
    }, H = s("img", {
        src: xe,
        alt: ""
    }, null, -1), L = {
        class: "text-20px"
    }, P = {
        class: "mt-10px text-14px text-gray-500"
    }, G = {
        class: "h-70px flex items-center justify-end lt-sm:mt-10px"
    }, F = {
        class: "px-8px text-right"
    }, Q = {
        class: "mb-16px text-14px text-gray-400"
    }, T = {
        class: "px-8px text-right"
    }, q = {
        class: "mb-16px text-14px text-gray-400"
    }, J = {
        class: "px-8px text-right"
    }, K = {
        class: "mb-16px text-14px text-gray-400"
    }, N = {
        class: "h-3 flex justify-between"
    }, X = {
        class: "flex items-center"
    }, Y = {
        class: "text-16px"
    }, Z = {
        class: "mt-16px text-14px text-gray-400"
    }, ee = {
        class: "mt-16px flex justify-between text-12px text-gray-400"
    }, ae = {
        class: "h-3 flex justify-between"
    }, te = {
        class: "flex items-center"
    }, se = {
        class: "h-3 flex justify-between"
    }, le = {
        class: "flex items-center"
    }, ne = s("img", {
        src: xe,
        alt: ""
    }, null, -1), ie = {
        class: "text-14px"
    }, oe = {
        class: "mt-16px text-12px text-gray-400"
    }, ge = de({
        name: "Home",
        __name: "IndexSup",
        setup(j) {
            const {
                t: n
            } = Ee(), u = De(), {
                setWatermark: M
            } = function(c = document.body) {
                let d = () => {};
                const w = fe.toString(), p = () => {
                    const y = document.getElementById(w);
                    y && c && c.removeChild(y), window.removeEventListener("resize", d);
                }, k = y => {
                    p();
                    const m = document.createElement("canvas");
                    m.width = 300, m.height = 240;
                    const o = m.getContext("2d");
                    o && (o.rotate(-20 * Math.PI / 120), o.font = "15px Vedana", 
                    o.fillStyle = "rgba(0, 0, 0, 0.15)", o.textAlign = "left", o.textBaseline = "middle", 
                    o.fillText(y, m.width / 20, m.height));
                    const i = document.createElement("div");
                    return i.id = w, i.style.pointerEvents = "none", i.style.top = "0px", 
                    i.style.left = "0px", i.style.position = "absolute", i.style.zIndex = "100000000", 
                    i.style.width = document.documentElement.clientWidth + "px", 
                    i.style.height = document.documentElement.clientHeight + "px", 
                    i.style.background = "url(" + m.toDataURL("image/png") + ") left top repeat", 
                    c && c.appendChild(i), w;
                };
                return {
                    setWatermark: function(y) {
                        k(y), d = () => {
                            k(y);
                        }, window.addEventListener("resize", d);
                    },
                    clear: p
                };
            }(), x = Ce(!0), v = u.getUser.avatar, O = u.getUser.nickname, f = b(Se);
            let _ = b({
                project: 0,
                access: 0,
                todo: 0
            });
            const B = async () => {
                _ = Object.assign(_, {
                    project: 40,
                    access: 2340,
                    todo: 10
                });
            };
            let g = b([]);
            const V = async () => {
                g = Object.assign(g, [ {
                    name: "Github",
                    icon: "akar-icons:github-fill",
                    message: "workplace.introduction",
                    personal: "Archer",
                    time: new Date()
                }, {
                    name: "Vue",
                    icon: "logos:vue",
                    message: "workplace.introduction",
                    personal: "Archer",
                    time: new Date()
                }, {
                    name: "Angular",
                    icon: "logos:angular-icon",
                    message: "workplace.introduction",
                    personal: "Archer",
                    time: new Date()
                }, {
                    name: "React",
                    icon: "logos:react",
                    message: "workplace.introduction",
                    personal: "Archer",
                    time: new Date()
                }, {
                    name: "Webpack",
                    icon: "logos:webpack",
                    message: "workplace.introduction",
                    personal: "Archer",
                    time: new Date()
                }, {
                    name: "Vite",
                    icon: "vscode-icons:file-type-vite",
                    message: "workplace.introduction",
                    personal: "Archer",
                    time: new Date()
                } ]);
            };
            let A = b([]);
            const _e = async () => {
                A = Object.assign(A, [ {
                    title: "系统升级版本",
                    type: "通知",
                    keys: [ "通知", "升级" ],
                    date: new Date()
                }, {
                    title: "系统凌晨维护",
                    type: "公告",
                    keys: [ "公告", "维护" ],
                    date: new Date()
                }, {
                    title: "系统升级版本",
                    type: "通知",
                    keys: [ "通知", "升级" ],
                    date: new Date()
                }, {
                    title: "系统凌晨维护",
                    type: "公告",
                    keys: [ "公告", "维护" ],
                    date: new Date()
                } ]);
            };
            let W = b([]);
            const he = async () => {
                W = Object.assign(W, [ {
                    name: "Github",
                    icon: "akar-icons:github-fill",
                    url: "github.io"
                }, {
                    name: "Vue",
                    icon: "logos:vue",
                    url: "vuejs.org"
                }, {
                    name: "Vite",
                    icon: "vscode-icons:file-type-vite",
                    url: "https://vitejs.dev/"
                }, {
                    name: "Angular",
                    icon: "logos:angular-icon",
                    url: "github.io"
                }, {
                    name: "React",
                    icon: "logos:react",
                    url: "github.io"
                }, {
                    name: "Webpack",
                    icon: "logos:webpack",
                    url: "github.io"
                } ]);
            }, we = async () => {
                const c = [ {
                    value: 335,
                    name: "analysis.directAccess"
                }, {
                    value: 310,
                    name: "analysis.mailMarketing"
                }, {
                    value: 234,
                    name: "analysis.allianceAdvertising"
                }, {
                    value: 135,
                    name: "analysis.videoAdvertising"
                }, {
                    value: 1548,
                    name: "analysis.searchEngines"
                } ];
                S(f, "legend.data", c.map(d => n(d.name))), f.series[0].data = c.map(d => ({
                    name: n(d.name),
                    value: d.value
                }));
            }, $ = b(Ue), ke = async () => {
                const c = [ {
                    value: 13253,
                    name: "analysis.monday"
                }, {
                    value: 34235,
                    name: "analysis.tuesday"
                }, {
                    value: 26321,
                    name: "analysis.wednesday"
                }, {
                    value: 12340,
                    name: "analysis.thursday"
                }, {
                    value: 24643,
                    name: "analysis.friday"
                }, {
                    value: 1322,
                    name: "analysis.saturday"
                }, {
                    value: 1324,
                    name: "analysis.sunday"
                } ];
                S($, "xAxis.data", c.map(d => n(d.name))), S($, "series", [ {
                    name: n("analysis.activeQuantity"),
                    data: c.map(d => d.value),
                    type: "bar"
                } ]);
            };
            return (async () => (await Promise.all([ B(), V(), _e(), he(), we(), ke() ]), 
            x.value = !1))(), (c, d) => {
                const w = Ge, p = ze, k = He, y = Me, m = Oe, o = Le, i = Qe, I = Ie, re = Be, ce = We, be = ve;
                return h(), E(z, null, [ s("div", null, [ e(i, {
                    shadow: "never"
                }, {
                    default: a(() => [ e(o, {
                        loading: t(x),
                        animated: ""
                    }, {
                        default: a(() => [ e(m, {
                            gutter: 16,
                            justify: "space-between"
                        }, {
                            default: a(() => [ e(p, {
                                xl: 12,
                                lg: 12,
                                md: 12,
                                sm: 24,
                                xs: 24
                            }, {
                                default: a(() => [ s("div", U, [ e(w, {
                                    src: t(v),
                                    size: 70,
                                    class: "mr-16px"
                                }, {
                                    default: a(() => [ H ]),
                                    _: 1
                                }, 8, [ "src" ]), s("div", null, [ s("div", L, l(t(n)("workplace.welcome")) + " " + l(t(O)) + " " + l(t(n)("workplace.happyDay")), 1), s("div", P, l(t(n)("workplace.toady")) + "，20℃ - 32℃！ ", 1) ]) ]) ]),
                                _: 1
                            }), e(p, {
                                xl: 12,
                                lg: 12,
                                md: 12,
                                sm: 24,
                                xs: 24
                            }, {
                                default: a(() => [ s("div", G, [ s("div", F, [ s("div", Q, l(t(n)("workplace.project")), 1), e(k, {
                                    class: "text-20px",
                                    "start-val": 0,
                                    "end-val": t(_).project,
                                    duration: 2600
                                }, null, 8, [ "end-val" ]) ]), e(y, {
                                    direction: "vertical"
                                }), s("div", T, [ s("div", q, l(t(n)("workplace.toDo")), 1), e(k, {
                                    class: "text-20px",
                                    "start-val": 0,
                                    "end-val": t(_).todo,
                                    duration: 2600
                                }, null, 8, [ "end-val" ]) ]), e(y, {
                                    direction: "vertical",
                                    "border-style": "dashed"
                                }), s("div", J, [ s("div", K, l(t(n)("workplace.access")), 1), e(k, {
                                    class: "text-20px",
                                    "start-val": 0,
                                    "end-val": t(_).access,
                                    duration: 2600
                                }, null, 8, [ "end-val" ]) ]) ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "loading" ]) ]),
                    _: 1
                }) ]), e(m, {
                    class: "mt-8px",
                    gutter: 8,
                    justify: "space-between"
                }, {
                    default: a(() => [ e(p, {
                        xl: 16,
                        lg: 16,
                        md: 24,
                        sm: 24,
                        xs: 24,
                        class: "mb-8px"
                    }, {
                        default: a(() => [ e(i, {
                            shadow: "never"
                        }, {
                            header: a(() => [ s("div", N, [ s("span", null, l(t(n)("workplace.project")), 1), e(I, {
                                type: "primary",
                                underline: !1
                            }, {
                                default: a(() => [ C(l(t(n)("action.more")), 1) ]),
                                _: 1
                            }) ]) ]),
                            default: a(() => [ e(o, {
                                loading: t(x),
                                animated: ""
                            }, {
                                default: a(() => [ e(m, null, {
                                    default: a(() => [ (h(!0), E(z, null, R(t(g), (r, D) => (h(), 
                                    pe(p, {
                                        key: `card-${D}`,
                                        xl: 8,
                                        lg: 8,
                                        md: 8,
                                        sm: 24,
                                        xs: 24
                                    }, {
                                        default: a(() => [ e(i, {
                                            shadow: "hover"
                                        }, {
                                            default: a(() => [ s("div", X, [ e(re, {
                                                icon: r.icon,
                                                size: 25,
                                                class: "mr-8px"
                                            }, null, 8, [ "icon" ]), s("span", Y, l(r.name), 1) ]), s("div", Z, l(t(n)(r.message)), 1), s("div", ee, [ s("span", null, l(r.personal), 1), s("span", null, l(t(ye)(r.time, "yyyy-MM-dd")), 1) ]) ]),
                                            _: 2
                                        }, 1024) ]),
                                        _: 2
                                    }, 1024))), 128)) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "loading" ]) ]),
                            _: 1
                        }), e(i, {
                            shadow: "never",
                            class: "mt-8px"
                        }, {
                            default: a(() => [ e(o, {
                                loading: t(x),
                                animated: ""
                            }, {
                                default: a(() => [ e(m, {
                                    gutter: 20,
                                    justify: "space-between"
                                }, {
                                    default: a(() => [ e(p, {
                                        xl: 10,
                                        lg: 10,
                                        md: 24,
                                        sm: 24,
                                        xs: 24
                                    }, {
                                        default: a(() => [ e(i, {
                                            shadow: "hover",
                                            class: "mb-8px"
                                        }, {
                                            default: a(() => [ e(o, {
                                                loading: t(x),
                                                animated: ""
                                            }, {
                                                default: a(() => [ e(ce, {
                                                    options: t(f),
                                                    height: 280
                                                }, null, 8, [ "options" ]) ]),
                                                _: 1
                                            }, 8, [ "loading" ]) ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }), e(p, {
                                        xl: 14,
                                        lg: 14,
                                        md: 24,
                                        sm: 24,
                                        xs: 24
                                    }, {
                                        default: a(() => [ e(i, {
                                            shadow: "hover",
                                            class: "mb-8px"
                                        }, {
                                            default: a(() => [ e(o, {
                                                loading: t(x),
                                                animated: ""
                                            }, {
                                                default: a(() => [ e(ce, {
                                                    options: t($),
                                                    height: 280
                                                }, null, 8, [ "options" ]) ]),
                                                _: 1
                                            }, 8, [ "loading" ]) ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "loading" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), e(p, {
                        xl: 8,
                        lg: 8,
                        md: 24,
                        sm: 24,
                        xs: 24,
                        class: "mb-8px"
                    }, {
                        default: a(() => [ e(i, {
                            shadow: "never"
                        }, {
                            header: a(() => [ s("div", ae, [ s("span", null, l(t(n)("workplace.shortcutOperation")), 1) ]) ]),
                            default: a(() => [ e(o, {
                                loading: t(x),
                                animated: ""
                            }, {
                                default: a(() => [ e(m, null, {
                                    default: a(() => [ (h(!0), E(z, null, R(t(W), r => (h(), 
                                    pe(p, {
                                        key: `team-${r.name}`,
                                        span: 8,
                                        class: "mb-8px"
                                    }, {
                                        default: a(() => [ s("div", te, [ e(re, {
                                            icon: r.icon,
                                            class: "mr-8px"
                                        }, null, 8, [ "icon" ]), e(I, {
                                            type: "default",
                                            underline: !1,
                                            onClick: D => t(M)(r.name)
                                        }, {
                                            default: a(() => [ C(l(r.name), 1) ]),
                                            _: 2
                                        }, 1032, [ "onClick" ]) ]) ]),
                                        _: 2
                                    }, 1024))), 128)) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "loading" ]) ]),
                            _: 1
                        }), e(i, {
                            shadow: "never",
                            class: "mt-8px"
                        }, {
                            header: a(() => [ s("div", se, [ s("span", null, l(t(n)("workplace.notice")), 1), e(I, {
                                type: "primary",
                                underline: !1
                            }, {
                                default: a(() => [ C(l(t(n)("action.more")), 1) ]),
                                _: 1
                            }) ]) ]),
                            default: a(() => [ e(o, {
                                loading: t(x),
                                animated: ""
                            }, {
                                default: a(() => [ (h(!0), E(z, null, R(t(A), (r, D) => (h(), 
                                E("div", {
                                    key: `dynamics-${D}`
                                }, [ s("div", le, [ e(w, {
                                    src: t(v),
                                    size: 35,
                                    class: "mr-16px"
                                }, {
                                    default: a(() => [ ne ]),
                                    _: 1
                                }, 8, [ "src" ]), s("div", null, [ s("div", ie, [ e(be, {
                                    keys: r.keys.map(je => t(n)(je))
                                }, {
                                    default: a(() => [ C(l(r.type) + " : " + l(r.title), 1) ]),
                                    _: 2
                                }, 1032, [ "keys" ]) ]), s("div", oe, l(t(ye)(r.date, "yyyy-MM-dd")), 1) ]) ]), e(y) ]))), 128)) ]),
                                _: 1
                            }, 8, [ "loading" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }) ], 64);
            };
        }
    });
});

export {
    ge as _,
    qe as __tla
};