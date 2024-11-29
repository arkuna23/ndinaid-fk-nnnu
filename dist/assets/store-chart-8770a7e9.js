import {
    T as aa,
    r as o,
    e as ta,
    U as g,
    a6 as h,
    eb as x,
    f as la,
    o as m,
    c as _,
    t as e,
    k as y,
    l as D,
    F as V,
    y as R,
    a as p,
    C as T,
    B as b,
    z as Ke,
    v as Qe,
    D as sa,
    ec as ia,
    bo as na,
    ab as da,
    ac as ra,
    _ as ua,
    R as ca,
    S as oa,
    __tla as ha
} from "./index-6c08ea4c.js";

import va, {
    __tla as fa
} from "./commit-line-chart-2abfe8ac.js";

import ma, {
    __tla as ya
} from "./team-bar-chart-e65231a9.js";

import pa, {
    __tla as ba
} from "./code-line-chart-022b0407.js";

import {
    r as Ya,
    s as _a,
    t as wa,
    u as ga,
    v as xa,
    w as Da,
    __tla as Ma
} from "./code-a0d24f62.js";

import {
    _ as Ca
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./index-eb0ca811.js";

import "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let We, ka = Promise.all([ (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return ba;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})() ]).then(async () => {
    let c, A, G, F, O, q, H, J, K, Q, W, X, Z, $, ee, ae, te, le, se, ie, ne, de, re, ue, ce, oe, he, ve, fe, me, ye, pe, be, Ye, _e, we, ge, xe, De, Me, Ce, ke, Ie, je, Ee, Ve, Re, Ue, ze, Se, Ne, Le, Pe;
    c = j => (ca("data-v-db227966"), j = j(), oa(), j), A = {
        class: "store-chart"
    }, G = {
        class: "chart-box-one"
    }, F = {
        class: "left"
    }, O = {
        class: "left-container"
    }, q = {
        class: "box-title"
    }, H = c(() => e("div", {
        style: {
            "font-weight": "700"
        }
    }, "项目组整体趋势", -1)), J = c(() => e("span", {
        class: "select-label"
    }, "筛选：", -1)), K = {
        class: "right"
    }, Q = {
        class: "right-container"
    }, W = {
        class: "box-title"
    }, X = c(() => e("div", {
        style: {
            "font-weight": "700"
        }
    }, "提交量统计", -1)), Z = c(() => e("span", {
        class: "select-label"
    }, "筛选：", -1)), $ = {
        class: "chart-row"
    }, ee = {
        class: "chart-left"
    }, ae = {
        class: "data-item blue"
    }, te = {
        class: "item-left"
    }, le = {
        class: "number"
    }, se = c(() => e("span", null, "提交总数", -1)), ie = {
        class: "item-right"
    }, ne = {
        class: "item-icon"
    }, de = {
        class: "data-item yellow"
    }, re = {
        class: "item-left"
    }, ue = {
        class: "number"
    }, ce = c(() => e("span", null, "提交频率", -1)), oe = {
        class: "item-right"
    }, he = {
        class: "item-icon"
    }, ve = {
        class: "data-item green"
    }, fe = {
        class: "item-left"
    }, me = {
        class: "number"
    }, ye = c(() => e("span", null, "成员数量", -1)), pe = {
        class: "item-right"
    }, be = {
        class: "item-icon"
    }, Ye = {
        class: "chart-box-two"
    }, _e = {
        class: "box-title"
    }, we = c(() => e("div", {
        style: {
            "font-weight": "700"
        }
    }, "成员贡献统计", -1)), ge = c(() => e("span", {
        class: "select-label"
    }, "筛选：", -1)), xe = {
        class: "chart-two-box"
    }, De = {
        class: "student-table"
    }, Me = ia('<div class="table-header" data-v-db227966><div style="width:65px;justify-content:center;" data-v-db227966>排名</div><div style="flex:1;" data-v-db227966>成员名</div><div style="width:100px;" data-v-db227966></div><div style="width:90px;justify-content:center;" data-v-db227966>提交次数</div></div>', 1), 
    Ce = [ "onClick" ], ke = {
        style: {
            width: "65px",
            "justify-content": "center"
        },
        class: "number"
    }, Ie = {
        style: {
            flex: "1"
        }
    }, je = {
        class: "overSpan",
        style: {
            "line-height": "20px"
        }
    }, Ee = {
        style: {
            width: "110px"
        }
    }, Ve = {
        key: 0,
        style: {
            "font-size": "12px",
            "justify-content": "flex-start",
            "align-items": "center"
        }
    }, Re = c(() => e("span", null, "增/删行数", -1)), Ue = {
        style: {
            display: "flex",
            "flex-direction": "column",
            "margin-left": "8px",
            "justify-content": "flex-end"
        }
    }, ze = {
        class: "code-line add"
    }, Se = c(() => e("div", {
        style: {
            width: "10px",
            "align-items": "center",
            "justify-content": "center"
        }
    }, "+", -1)), Ne = {
        class: "code-line remove"
    }, Le = c(() => e("div", {
        style: {
            width: "10px",
            "align-items": "center",
            "justify-content": "center"
        }
    }, "-", -1)), Pe = {
        style: {
            width: "90px",
            "justify-content": "center"
        },
        class: "file-number"
    }, We = Ca({
        __name: "store-chart",
        setup(j) {
            const U = aa(), Be = o(null), Te = o(null), z = o(null), w = ta(() => U.params.gitProId), S = o(null), N = o(null), L = o(null), Y = o({}), E = o({}), Ae = o([]), P = o([]), v = g({
                day: 7,
                until: h().format("YYYY-MM-DD"),
                since: h().subtract(7, "day").format("YYYY-MM-DD")
            }), f = g({
                day: 7,
                until: h().format("YYYY-MM-DD"),
                since: h().subtract(7, "day").format("YYYY-MM-DD")
            }), u = g({
                day: 7,
                until: h().format("YYYY-MM-DD"),
                since: h().subtract(7, "day").format("YYYY-MM-DD")
            }), r = o([ {
                label: "近7日",
                day: 7,
                until: h().format("YYYY-MM-DD"),
                since: h().subtract(7, "day").format("YYYY-MM-DD")
            }, {
                label: "近30日",
                day: 30,
                until: h().format("YYYY-MM-DD"),
                since: h().subtract(30, "day").format("YYYY-MM-DD")
            } ]), M = o([]), C = o([]), Xe = g({
                width: x(S).width,
                height: x(S).height
            }), Ze = g({
                width: x(N).width,
                height: x(N).height
            }), $e = g({
                width: x(L).width,
                height: x(L).height
            }), B = d => {
                switch (d) {
                  case 1:
                    v.day == 7 ? (v.since = r.value[0].since, v.until = r.value[0].until) : v.day == 30 && (v.since = r.value[1].since, 
                    v.until = r.value[1].until), Oe();
                    break;

                  case 2:
                    f.day == 7 ? (f.since = r.value[0].since, f.until = r.value[0].until) : f.day == 30 && (f.since = r.value[1].since, 
                    f.until = r.value[1].until), qe();
                    break;

                  case 3:
                    u.day == 7 ? (u.since = r.value[0].since, u.until = r.value[0].until) : u.day == 30 && (u.since = r.value[1].since, 
                    u.until = r.value[1].until), Fe();
                }
            }, Ge = d => {
                if (Y.value && Y.value.userId) Ya({
                    projectId: w.value,
                    since: u.since,
                    until: u.until,
                    ref: "master",
                    userId: Y.value.userId
                }).then(a => {
                    const s = u.day == 7 ? M.value : C.value;
                    let i = [], t = [];
                    s.forEach(n => {
                        a[n] ? (i.push(Number(a[n][0].addCount)), t.push(Number(a[n][0].deleteCount))) : (i.push(0), 
                        t.push(0));
                    }), z.value.codeChartUpdate(s, i, t);
                }); else {
                    d && na.info("暂无该用户数据");
                    const a = u.day == 7 ? M.value : C.value;
                    z.value.codeChartUpdate(a, [], []);
                }
            }, Fe = () => {
                _a({
                    projectId: w.value,
                    since: u.since,
                    until: u.until,
                    ref: "master",
                    groupId: U.params.gitGroupId
                }).then(d => {
                    P.value = d, Y.value = P.value[0], Ge(!1);
                });
            }, Oe = () => {
                wa({
                    projectId: w.value,
                    since: v.since,
                    until: v.until,
                    ref: "master"
                }).then(d => {
                    const a = {};
                    d.forEach(t => {
                        a[h(t.date).format("YYYY/MM/DD")] = t.count;
                    });
                    const s = v.day == 7 ? M.value : C.value;
                    let i = [];
                    s.forEach(t => {
                        a[t] ? i.push(a[t]) : i.push(0);
                    }), Be.value.codeChartUpdate(s, i);
                });
            }, qe = () => {
                ga({
                    projectId: w.value,
                    since: f.since,
                    until: f.until,
                    ref: "master"
                }).then(d => {
                    let a = {}, s = [];
                    Object.keys(d).forEach(t => {
                        let n = {};
                        d[t].forEach(k => {
                            n[k.authorName] = k.totalCount;
                        }), a[h(t).format("YYYY/MM/DD")] = n;
                    });
                    const i = f.day == 7 ? M.value : C.value;
                    Ae.value.forEach(t => {
                        s.push({
                            name: t.name,
                            username: t.username,
                            count: []
                        });
                    }), i.forEach(t => {
                        a[t] ? s.forEach(n => {
                            a[t][n.username] ? n.count.push(Number(a[t][n.username])) : n.count.push(0);
                        }) : s.forEach(n => {
                            n.count.push(0);
                        });
                    }), Te.value.codeChartUpdate(i, s);
                });
            }, ea = () => {
                w.value && (Oe(), xa({
                    projectId: w.value,
                    ref: "master"
                }).then(d => {
                    E.value = d;
                }), new Promise((d, a) => {
                    Da(U.params.gitGroupId).then(s => {
                        const i = s ? s.filter(t => t.name != "Administrator") : [];
                        Ae.value = i, d();
                    });
                }).then(() => {
                    qe();
                }), Fe());
            };
            return la(() => {
                new Promise((d, a) => {
                    try {
                        let s = [], i = [];
                        for (let t = 0; t < 30; t++) {
                            const n = h().subtract(t, "day").format("YYYY/MM/DD");
                            t < 7 && s.push(n), i.push(n);
                        }
                        M.value = s.sort(), C.value = i.sort(), d();
                    } catch {
                        a();
                    }
                }).then(d => {
                    ea();
                });
            }), (d, a) => {
                var n, k, He;
                const s = da, i = ra, t = ua;
                return m(), _("div", A, [ e("div", G, [ e("div", F, [ e("div", O, [ e("div", q, [ H, y(i, {
                    style: {
                        width: "180px"
                    },
                    size: "large",
                    modelValue: v.day,
                    "onUpdate:modelValue": a[0] || (a[0] = l => v.day = l),
                    class: "neu",
                    onChange: a[1] || (a[1] = l => B(1))
                }, {
                    prefix: D(() => [ J ]),
                    default: D(() => [ (m(!0), _(V, null, R(p(r), l => (m(), T(s, {
                        key: l.day,
                        label: l.label,
                        value: l.day
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), e("div", {
                    style: {
                        width: "100%",
                        height: "260px",
                        "margin-top": "20px",
                        flex: "1"
                    },
                    ref_key: "CommitChartRef",
                    ref: S
                }, [ y(va, {
                    ref_key: "CommitLineChartRef",
                    ref: Be,
                    width: Xe.width
                }, null, 8, [ "width" ]) ], 512) ]) ]), e("div", K, [ e("div", Q, [ e("div", W, [ X, y(i, {
                    style: {
                        width: "180px"
                    },
                    size: "large",
                    modelValue: f.day,
                    "onUpdate:modelValue": a[2] || (a[2] = l => f.day = l),
                    class: "neu",
                    onChange: a[3] || (a[3] = l => B(2))
                }, {
                    prefix: D(() => [ Z ]),
                    default: D(() => [ (m(!0), _(V, null, R(p(r), l => (m(), T(s, {
                        key: l.day,
                        label: l.label,
                        value: l.day
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), e("div", $, [ e("div", ee, [ e("div", ae, [ e("div", te, [ e("span", le, b(((n = p(E)) == null ? void 0 : n.commitAllCount) || 0), 1), se ]), e("div", ie, [ e("div", ne, [ y(t, {
                    icon: "svg-icon:chart-test",
                    style: {
                        fill: "#fff"
                    }
                }) ]) ]) ]), e("div", de, [ e("div", re, [ e("span", ue, b(((k = p(E)) == null ? void 0 : k.commitRate) || 0), 1), ce ]), e("div", oe, [ e("div", he, [ y(t, {
                    icon: "svg-icon:chart-heart",
                    style: {
                        fill: "#fff"
                    }
                }) ]) ]) ]), e("div", ve, [ e("div", fe, [ e("span", me, b(((He = p(E)) == null ? void 0 : He.memberSize) || 0), 1), ye ]), e("div", pe, [ e("div", be, [ y(t, {
                    icon: "svg-icon:chart-student",
                    style: {
                        fill: "#fff"
                    }
                }) ]) ]) ]) ]), e("div", {
                    class: "chart-right",
                    ref_key: "TeamBarRef",
                    ref: N
                }, [ y(ma, {
                    ref_key: "TeamBarChartRef",
                    ref: Te,
                    width: Ze.width
                }, null, 8, [ "width" ]) ], 512) ]) ]) ]) ]), e("div", Ye, [ e("div", _e, [ we, y(i, {
                    style: {
                        width: "180px"
                    },
                    size: "large",
                    modelValue: u.day,
                    "onUpdate:modelValue": a[4] || (a[4] = l => u.day = l),
                    class: "neu",
                    onChange: a[5] || (a[5] = l => B(3))
                }, {
                    prefix: D(() => [ ge ]),
                    default: D(() => [ (m(!0), _(V, null, R(p(r), l => (m(), T(s, {
                        key: l.day,
                        label: l.label,
                        value: l.day
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), e("div", xe, [ e("div", De, [ Me, (m(!0), 
                _(V, null, R(p(P), (l, I) => (m(), _("div", {
                    key: I,
                    class: Ke([ "table-content", {
                        selected: p(Y).userId == l.userId
                    } ]),
                    onClick: Ia => {
                        return Je = l, Y.value = Je, void Ge(!0);
                        var Je;
                    }
                }, [ e("div", ke, [ e("span", {
                    class: Ke({
                        first: I + 1 == 1,
                        second: I + 1 == 2,
                        third: I + 1 == 3
                    })
                }, b(I + 1), 3) ]), e("div", Ie, [ e("span", je, b(l.authorName), 1) ]), e("div", Ee, [ p(Y).userId == l.userId ? (m(), 
                _("div", Ve, [ Re, e("div", Ue, [ e("div", ze, [ Se, Qe(b(l.addCount), 1) ]), e("div", Ne, [ Le, Qe(b(l.deleteCount), 1) ]) ]) ])) : sa("", !0) ]), e("div", Pe, b(l.commitSize ?? ""), 1) ], 10, Ce))), 128)) ]), e("div", {
                    style: {
                        "margin-left": "50px",
                        flex: "1",
                        width: "0"
                    },
                    ref_key: "CodeLineRef",
                    ref: L
                }, [ y(pa, {
                    ref_key: "CodeLineChartRef",
                    ref: z,
                    width: $e.width
                }, null, 8, [ "width" ]) ], 512) ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-db227966" ] ]);
});

export {
    ka as __tla,
    We as default
};