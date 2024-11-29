import {
    _ as U,
    __tla as q
} from "./Echart.vue_vue_type_script_setup_true_lang-c087bb9a.js";

import {
    d as B,
    aa as C,
    r as F,
    U as y,
    o as H,
    c as M,
    k as a,
    l as s,
    a as e,
    t,
    z as i,
    B as f,
    F as Q,
    aj as G,
    _ as J,
    av as K,
    aw as L,
    aA as _,
    __tla as N
} from "./index-6c08ea4c.js";

import {
    p as R,
    b as T,
    l as V,
    _ as W,
    E as X,
    __tla as Y
} from "./echarts-data-23e7de3d.js";

import {
    E as Z,
    __tla as aa
} from "./index-ee838148.js";

import {
    _ as ea
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./index-0d885c8d.js";

import "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let E, sa = Promise.all([ (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})() ]).then(async () => {
    let w, $, j, A;
    w = {
        class: "flex flex-col justify-between"
    }, $ = {
        class: "flex flex-col justify-between"
    }, j = {
        class: "flex flex-col justify-between"
    }, A = {
        class: "flex flex-col justify-between"
    }, E = ea(B({
        name: "Home2",
        __name: "Index2",
        setup(ta) {
            const {
                t: m
            } = C(), d = F(!0), {
                getPrefixCls: I
            } = G(), l = I("panel"), g = y(R);
            let k = y({
                users: 0,
                messages: 0,
                moneys: 0,
                shoppings: 0
            });
            const O = async () => {
                k = Object.assign(k, {
                    users: 102400,
                    messages: 81212,
                    moneys: 9280,
                    shoppings: 13600
                });
            }, P = async () => {
                const o = [ {
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
                _(g, "legend.data", o.map(n => m(n.name))), _(g, "series.data", o);
            }, v = y(T), D = async () => {
                const o = [ {
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
                _(v, "xAxis.data", o.map(n => m(n.name))), _(v, "series", [ {
                    name: m("analysis.activeQuantity"),
                    data: o.map(n => n.value),
                    type: "bar"
                } ]);
            }, h = y(V), S = async () => {
                const o = [ {
                    estimate: 100,
                    actual: 120,
                    name: "analysis.january"
                }, {
                    estimate: 120,
                    actual: 82,
                    name: "analysis.february"
                }, {
                    estimate: 161,
                    actual: 91,
                    name: "analysis.march"
                }, {
                    estimate: 134,
                    actual: 154,
                    name: "analysis.april"
                }, {
                    estimate: 105,
                    actual: 162,
                    name: "analysis.may"
                }, {
                    estimate: 160,
                    actual: 140,
                    name: "analysis.june"
                }, {
                    estimate: 165,
                    actual: 145,
                    name: "analysis.july"
                }, {
                    estimate: 114,
                    actual: 250,
                    name: "analysis.august"
                }, {
                    estimate: 163,
                    actual: 134,
                    name: "analysis.september"
                }, {
                    estimate: 185,
                    actual: 56,
                    name: "analysis.october"
                }, {
                    estimate: 118,
                    actual: 99,
                    name: "analysis.november"
                }, {
                    estimate: 123,
                    actual: 123,
                    name: "analysis.december"
                } ];
                _(h, "xAxis.data", o.map(n => m(n.name))), _(h, "series", [ {
                    name: m("analysis.estimate"),
                    smooth: !0,
                    type: "line",
                    data: o.map(n => n.estimate),
                    animationDuration: 2800,
                    animationEasing: "cubicInOut"
                }, {
                    name: m("analysis.actual"),
                    smooth: !0,
                    type: "line",
                    itemStyle: {},
                    data: o.map(n => n.actual),
                    animationDuration: 2800,
                    animationEasing: "quadraticOut"
                } ]);
            };
            return (async () => (await Promise.all([ O(), P(), D(), S() ]), d.value = !1))(), 
            (o, n) => {
                const x = J, p = W, u = X, r = Z, c = K, z = L, b = U;
                return H(), M(Q, null, [ a(z, {
                    class: i(e(l)),
                    gutter: 20,
                    justify: "space-between"
                }, {
                    default: s(() => [ a(c, {
                        lg: 6,
                        md: 12,
                        sm: 12,
                        xl: 6,
                        xs: 24
                    }, {
                        default: s(() => [ a(r, {
                            class: "mb-20px",
                            shadow: "hover"
                        }, {
                            default: s(() => [ a(u, {
                                loading: e(d),
                                rows: 2,
                                animated: ""
                            }, {
                                default: s(() => [ t("div", {
                                    class: i(`${e(l)}__item flex justify-between`)
                                }, [ t("div", null, [ t("div", {
                                    class: i(`${e(l)}__item--icon ${e(l)}__item--peoples p-16px inline-block rounded-6px`)
                                }, [ a(x, {
                                    size: 40,
                                    icon: "svg-icon:peoples"
                                }) ], 2) ]), t("div", w, [ t("div", {
                                    class: i(`${e(l)}__item--text text-16px text-gray-500 text-right`)
                                }, f(e(m)("analysis.newUser")), 3), a(p, {
                                    duration: 2600,
                                    "end-val": 102400,
                                    "start-val": 0,
                                    class: "text-right text-20px font-700"
                                }) ]) ], 2) ]),
                                _: 1
                            }, 8, [ "loading" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), a(c, {
                        lg: 6,
                        md: 12,
                        sm: 12,
                        xl: 6,
                        xs: 24
                    }, {
                        default: s(() => [ a(r, {
                            class: "mb-20px",
                            shadow: "hover"
                        }, {
                            default: s(() => [ a(u, {
                                loading: e(d),
                                rows: 2,
                                animated: ""
                            }, {
                                default: s(() => [ t("div", {
                                    class: i(`${e(l)}__item flex justify-between`)
                                }, [ t("div", null, [ t("div", {
                                    class: i(`${e(l)}__item--icon ${e(l)}__item--message p-16px inline-block rounded-6px`)
                                }, [ a(x, {
                                    size: 40,
                                    icon: "svg-icon:message"
                                }) ], 2) ]), t("div", $, [ t("div", {
                                    class: i(`${e(l)}__item--text text-16px text-gray-500 text-right`)
                                }, f(e(m)("analysis.unreadInformation")), 3), a(p, {
                                    duration: 2600,
                                    "end-val": 81212,
                                    "start-val": 0,
                                    class: "text-right text-20px font-700"
                                }) ]) ], 2) ]),
                                _: 1
                            }, 8, [ "loading" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), a(c, {
                        lg: 6,
                        md: 12,
                        sm: 12,
                        xl: 6,
                        xs: 24
                    }, {
                        default: s(() => [ a(r, {
                            class: "mb-20px",
                            shadow: "hover"
                        }, {
                            default: s(() => [ a(u, {
                                loading: e(d),
                                rows: 2,
                                animated: ""
                            }, {
                                default: s(() => [ t("div", {
                                    class: i(`${e(l)}__item flex justify-between`)
                                }, [ t("div", null, [ t("div", {
                                    class: i(`${e(l)}__item--icon ${e(l)}__item--money p-16px inline-block rounded-6px`)
                                }, [ a(x, {
                                    size: 40,
                                    icon: "svg-icon:money"
                                }) ], 2) ]), t("div", j, [ t("div", {
                                    class: i(`${e(l)}__item--text text-16px text-gray-500 text-right`)
                                }, f(e(m)("analysis.transactionAmount")), 3), a(p, {
                                    duration: 2600,
                                    "end-val": 9280,
                                    "start-val": 0,
                                    class: "text-right text-20px font-700"
                                }) ]) ], 2) ]),
                                _: 1
                            }, 8, [ "loading" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), a(c, {
                        lg: 6,
                        md: 12,
                        sm: 12,
                        xl: 6,
                        xs: 24
                    }, {
                        default: s(() => [ a(r, {
                            class: "mb-20px",
                            shadow: "hover"
                        }, {
                            default: s(() => [ a(u, {
                                loading: e(d),
                                rows: 2,
                                animated: ""
                            }, {
                                default: s(() => [ t("div", {
                                    class: i(`${e(l)}__item flex justify-between`)
                                }, [ t("div", null, [ t("div", {
                                    class: i(`${e(l)}__item--icon ${e(l)}__item--shopping p-16px inline-block rounded-6px`)
                                }, [ a(x, {
                                    size: 40,
                                    icon: "svg-icon:shopping"
                                }) ], 2) ]), t("div", A, [ t("div", {
                                    class: i(`${e(l)}__item--text text-16px text-gray-500 text-right`)
                                }, f(e(m)("analysis.totalShopping")), 3), a(p, {
                                    duration: 2600,
                                    "end-val": 13600,
                                    "start-val": 0,
                                    class: "text-right text-20px font-700"
                                }) ]) ], 2) ]),
                                _: 1
                            }, 8, [ "loading" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "class" ]), a(z, {
                    gutter: 20,
                    justify: "space-between"
                }, {
                    default: s(() => [ a(c, {
                        lg: 10,
                        md: 24,
                        sm: 24,
                        xl: 10,
                        xs: 24
                    }, {
                        default: s(() => [ a(r, {
                            class: "mb-20px",
                            shadow: "hover"
                        }, {
                            default: s(() => [ a(u, {
                                loading: e(d),
                                animated: ""
                            }, {
                                default: s(() => [ a(b, {
                                    height: 300,
                                    options: e(g)
                                }, null, 8, [ "options" ]) ]),
                                _: 1
                            }, 8, [ "loading" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), a(c, {
                        lg: 14,
                        md: 24,
                        sm: 24,
                        xl: 14,
                        xs: 24
                    }, {
                        default: s(() => [ a(r, {
                            class: "mb-20px",
                            shadow: "hover"
                        }, {
                            default: s(() => [ a(u, {
                                loading: e(d),
                                animated: ""
                            }, {
                                default: s(() => [ a(b, {
                                    height: 300,
                                    options: e(v)
                                }, null, 8, [ "options" ]) ]),
                                _: 1
                            }, 8, [ "loading" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), a(c, {
                        span: 24
                    }, {
                        default: s(() => [ a(r, {
                            class: "mb-20px",
                            shadow: "hover"
                        }, {
                            default: s(() => [ a(u, {
                                loading: e(d),
                                rows: 4,
                                animated: ""
                            }, {
                                default: s(() => [ a(b, {
                                    height: 350,
                                    options: e(h)
                                }, null, 8, [ "options" ]) ]),
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
    }), [ [ "__scopeId", "data-v-f87e28ea" ] ]);
});

export {
    sa as __tla,
    E as default
};