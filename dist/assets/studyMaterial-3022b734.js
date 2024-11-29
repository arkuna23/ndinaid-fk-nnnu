import {
    T as ea,
    u as sa,
    U,
    r as ra,
    f as la,
    o as l,
    c,
    k as e,
    l as s,
    V as ca,
    t as r,
    B as i,
    a as o,
    v as n,
    D as _,
    z as oa,
    F as na,
    y as da,
    A as ia,
    G as _a,
    J as pa,
    W as ma,
    X as ua,
    Y as ya,
    Z as fa,
    $ as ha,
    R as Ca,
    S as ga,
    __tla as ka
} from "./index-6c08ea4c.js";

import {
    _ as xa,
    __tla as va
} from "./index-81dbd56d.js";

import {
    E as wa,
    a as Aa,
    __tla as Ia
} from "./el-menu-item-ff897266.js";

import {
    g as Na,
    __tla as Pa
} from "./index-9567cbf6.js";

import {
    g as ba,
    __tla as Ta
} from "./index-b22fcdff.js";

import {
    t as g,
    __tla as Da
} from "./file-e038b35d.js";

import {
    g as Ea
} from "./file.data-7b6aa8ed.js";

import Sa, {
    __tla as za
} from "./showResBox-d996ae8b.js";

import {
    _ as $a
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./teachingResourceIcon7-1c1a8557.js";

import {
    __tla as ja
} from "./index.es-14d10e28.js";

import {
    __tla as Fa
} from "./audioRes-4990d161.js";

import {
    __tla as Ha
} from "./index-43a52aa3.js";

import {
    __tla as La
} from "./videoRes-b5d76951.js";

import {
    __tla as Oa
} from "./video-1d0dc730.js";

import {
    __tla as Ra
} from "./targetResource-ae17d1d5.js";

import {
    __tla as Ba
} from "./index-234b0463.js";

import {
    __tla as Ga
} from "./project-file-a2b4fd07.js";

let V, Ja = Promise.all([ (() => {
    try {
        return ka;
    } catch {}
})(), (() => {
    try {
        return va;
    } catch {}
})(), (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return za;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})(), (() => {
    try {
        return Fa;
    } catch {}
})(), (() => {
    try {
        return Ha;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return Ra;
    } catch {}
})(), (() => {
    try {
        return Ba;
    } catch {}
})(), (() => {
    try {
        return Ga;
    } catch {}
})() ]).then(async () => {
    let k, x, v, w, A, I, N, P, b, T, D, E, S, z, $, j, F, H, L, O;
    k = {
        class: "study-material"
    }, x = {
        class: "header-name"
    }, v = {
        class: "inner-catalog"
    }, w = {
        style: {
            display: "flex",
            "font-size": "12px",
            "align-items": "center",
            "margin-top": "8px",
            height: "47px"
        },
        class: "px-12px"
    }, A = {
        class: "content-tree"
    }, I = {
        class: "custom-node"
    }, N = {
        class: "node-label"
    }, P = [ "src" ], b = {
        key: 1,
        class: "em-class"
    }, T = {
        key: 2,
        class: "line"
    }, D = {
        key: 3,
        style: {
            display: "flex"
        },
        class: "ml-10px"
    }, E = {
        class: "node-details"
    }, S = {
        style: {
            display: "flex"
        }
    }, z = (y => (Ca("data-v-40f0af1c"), y = y(), ga(), y))(() => r("span", null, "状态：", -1)), 
    $ = {
        class: "ml-8px",
        style: {
            color: "#666"
        }
    }, j = {
        class: "distribute"
    }, F = {
        key: 0
    }, H = {
        key: 1
    }, L = {
        key: 2
    }, O = {
        class: "resource-box"
    }, V = $a({
        __name: "studyMaterial",
        setup(y) {
            const f = ea();
            sa();
            const h = U({
                cover: "",
                teachCourseName: "",
                teachCourseCode: "",
                name: "",
                termName: "",
                teacherName: ""
            }), R = ra([]), p = U({
                completionProgress: "",
                publishNum: 0,
                resNum: 0
            }), C = [ {
                name: "未开始",
                code: "0",
                color: "#CCCCCC",
                percentage: 100
            }, {
                name: "进行中",
                code: "1",
                color: "#63D90A",
                percentage: 50
            }, {
                name: "已完成",
                code: "2",
                color: "#63D90A",
                percentage: 100
            } ], W = () => {
                window.close();
            };
            return la(() => {
                (async () => {
                    const t = await Na({
                        classId: f.params.classId,
                        teachArrangementId: f.params.teachArrangementId
                    });
                    Object.keys(h).forEach(m => h[m] = t[m]);
                })(), (async () => {
                    const t = await ba({
                        currentClassId: f.params.classId,
                        teachCourseId: f.params.teachCourseId
                    });
                    R.value = (t == null ? void 0 : t.treeList) || [], Object.keys(p).forEach(m => p[m] = t == null ? void 0 : t[m]);
                })();
            }), (t, m) => {
                const u = pa, X = ma, Y = wa, Z = Aa, q = ua, K = xa, Q = ya, aa = fa, ta = ha, B = ca;
                return l(), c("div", k, [ e(B, null, {
                    default: s(() => [ e(X, {
                        class: "header"
                    }, {
                        default: s(() => [ r("span", x, i(o(h).teachCourseName), 1), e(u, {
                            type: "primary",
                            size: "large",
                            onClick: W
                        }, {
                            default: s(() => [ n("退出学习") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), e(B, null, {
                        default: s(() => [ e(q, {
                            class: "aside-inner",
                            width: "64px"
                        }, {
                            default: s(() => [ e(Z, null, {
                                default: s(() => [ e(Y, null, {
                                    default: s(() => [ n("目录") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(ta, {
                            class: "main-inner"
                        }, {
                            default: s(() => [ r("div", v, [ r("div", w, [ n("任务完成进度     "), e(K, {
                                percentage: o(p).completionProgress ? parseFloat(o(p).completionProgress.slice(0, -1)) : 0,
                                style: {
                                    width: "170px"
                                }
                            }, null, 8, [ "percentage" ]), n(i(`${o(p).publishNum || 0}/${o(p).resNum}`), 1) ]), r("div", A, [ e(aa, {
                                ref: "treeRef",
                                data: o(R),
                                "node-key": "id",
                                "expand-on-click-node": !1,
                                onCheckChange: t.nodeChange
                            }, {
                                default: s(({
                                    data: a
                                }) => {
                                    var G, J, M;
                                    return [ r("div", I, [ r("div", N, [ a.dirType === "file" ? (l(), 
                                    c("img", {
                                        key: 0,
                                        src: o(Ea)(a.resType),
                                        alt: ""
                                    }, null, 8, P)) : _("", !0), r("span", {
                                        class: oa([ "pl-6px", a.dirType === "dir" ? "catalog-class" : "material-class" ])
                                    }, i(a.name), 3), a.classHours ? (l(), c("em", b, "（" + i(a.classHours) + "课时）", 1)) : _("", !0), a.studyType ? (l(), 
                                    c("span", T, i(a.studyType), 1)) : _("", !0), a.dirType === "file" ? (l(), 
                                    c("div", D, [ (l(!0), c(na, null, da(a.tag, d => (l(), 
                                    c("div", {
                                        class: "resourceLabel",
                                        key: d.tagId
                                    }, i(d.tagName), 1))), 128)) ])) : _("", !0) ]), ia(r("div", E, [ r("div", S, [ z, e(Q, {
                                        style: {
                                            width: "48px"
                                        },
                                        "show-text": !1,
                                        color: (G = o(g)({
                                            list: C,
                                            listAttrCode: "code",
                                            rawAttrCode: a.studyStatus
                                        })) == null ? void 0 : G.color,
                                        percentage: (J = o(g)({
                                            list: C,
                                            listAttrCode: "code",
                                            rawAttrCode: a.studyStatus
                                        })) == null ? void 0 : J.percentage,
                                        "stroke-width": "6px"
                                    }, null, 8, [ "color", "percentage" ]), r("span", $, i((M = o(g)({
                                        list: C,
                                        listAttrCode: "code",
                                        rawAttrCode: a.studyStatus
                                    })) == null ? void 0 : M.name), 1) ]), r("div", j, [ a.type === 1 ? (l(), 
                                    c("div", F, [ e(u, {
                                        type: "primary",
                                        plain: "",
                                        onClick: d => t.transferPage({
                                            node: t.node,
                                            data: a
                                        })
                                    }, {
                                        default: s(() => [ n("下载 ") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]), e(u, {
                                        type: "primary",
                                        onClick: d => t.transferPage({
                                            node: t.node,
                                            data: a
                                        })
                                    }, {
                                        default: s(() => [ n("去学习 ") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]) ])) : _("", !0), a.type === 4 ? (l(), 
                                    c("div", H, [ e(u, {
                                        type: "primary",
                                        onClick: d => t.transferPage({
                                            node: t.node,
                                            data: a
                                        })
                                    }, {
                                        default: s(() => [ n("去训练 ") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]) ])) : _("", !0), [ 2, 3, 5 ].includes(a.type) ? (l(), 
                                    c("div", L, [ e(u, {
                                        type: "primary",
                                        plain: "",
                                        onClick: d => t.transferPage({
                                            node: t.node,
                                            data: a
                                        })
                                    }, {
                                        default: s(() => [ n("详情 ") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]), e(u, {
                                        type: "primary",
                                        onClick: d => t.transferPage({
                                            node: t.node,
                                            data: a
                                        })
                                    }, {
                                        default: s(() => [ n("去作答 ") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]) ])) : _("", !0) ]) ], 512), [ [ _a, a.showDetails ] ]) ]) ];
                                }),
                                _: 1
                            }, 8, [ "data", "onCheckChange" ]) ]) ]), r("div", O, [ e(Sa) ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-40f0af1c" ] ]);
});

export {
    Ja as __tla,
    V as default
};