import {
    a7 as z,
    d as A,
    r as C,
    U as w,
    f as E,
    o as B,
    c as L,
    k as a,
    l,
    v as i,
    B as n,
    a as r,
    F as R,
    av as j,
    aw as O,
    cn as P,
    __tla as T
} from "./index-6c08ea4c.js";

import {
    _ as U,
    __tla as I
} from "./Echart.vue_vue_type_script_setup_true_lang-c087bb9a.js";

import {
    E as K,
    a as N,
    __tla as W
} from "./el-descriptions-item-b3283002.js";

import {
    _ as X,
    __tla as q
} from "./index-51b199d8.js";

import {
    E as G,
    __tla as H
} from "./index-ee838148.js";

import "./index-0d885c8d.js";

import "./install-67fb146c.js";

import "./install-0c30d2d2.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let F, J = Promise.all([ (() => {
    try {
        return T;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})() ]).then(async () => {
    let f;
    f = () => z.get({
        url: "/infra/redis/get-monitor-info"
    }), F = A({
        __name: "index",
        setup(M) {
            const o = C(), _ = w({
                title: {
                    text: "内存使用情况",
                    left: "center",
                    show: !0,
                    offsetCenter: [ 0, "20%" ],
                    color: "yellow",
                    fontSize: 20
                },
                toolbox: {
                    show: !1,
                    feature: {
                        restore: {
                            show: !0
                        },
                        saveAsImage: {
                            show: !0
                        }
                    }
                },
                series: [ {
                    name: "峰值",
                    type: "gauge",
                    min: 0,
                    max: 50,
                    splitNumber: 10,
                    color: "#F5C74E",
                    radius: "85%",
                    center: [ "50%", "50%" ],
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        lineStyle: {
                            color: [ [ .2, "#7FFF00" ], [ .8, "#00FFFF" ], [ 1, "#FF0000" ] ],
                            width: 10
                        }
                    },
                    axisTick: {
                        length: 5,
                        lineStyle: {
                            color: "#76D9D7"
                        }
                    },
                    splitLine: {
                        length: 20,
                        lineStyle: {
                            color: "#76D9D7"
                        }
                    },
                    axisLabel: {
                        color: "#76D9D7",
                        distance: 15,
                        fontSize: 15
                    },
                    pointer: {
                        width: 7,
                        show: !0
                    },
                    detail: {
                        textStyle: {
                            fontWeight: "normal",
                            fontSize: 15,
                            color: "#FFFFFF"
                        },
                        valueAnimation: !0
                    },
                    progress: {
                        show: !0
                    }
                } ]
            }), m = w({
                title: {
                    text: "命令统计",
                    left: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    type: "scroll",
                    orient: "vertical",
                    right: 30,
                    top: 10,
                    bottom: 20,
                    data: [],
                    textStyle: {
                        color: "#a1a1a1"
                    }
                },
                series: [ {
                    name: "命令",
                    type: "pie",
                    radius: [ 20, 120 ],
                    center: [ "40%", "60%" ],
                    data: [],
                    roseType: "radius",
                    label: {
                        show: !0
                    },
                    emphasis: {
                        label: {
                            show: !0
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                } ]
            }), v = async () => {
                _.series[0].data = [];
                try {
                    const u = await f();
                    o.value = u;
                    const h = [], d = [];
                    u.commandStats.forEach(s => {
                        h.push({
                            name: s.command,
                            value: s.calls
                        }), d.push(s.command);
                    }), m.legend.data = d, m.series[0].data = h;
                } catch {}
            }, x = async () => {
                try {
                    const u = await f();
                    o.value = u, _.series[0].detail = {
                        show: !0,
                        offsetCenter: [ 0, "50%" ],
                        color: "auto",
                        fontSize: 30,
                        formatter: o.value.info.used_memory_human
                    }, _.series[0].data[0] = {
                        value: o.value.info.used_memory_human,
                        name: "内存消耗"
                    }, _.tooltip = {
                        formatter: "{b} <br/>{a} : " + o.value.info.used_memory_human
                    };
                } catch {}
            };
            return E(() => {
                (async () => {
                    const u = await f();
                    o.value = u;
                })(), v(), x();
            }), (u, h) => {
                const d = X, s = K, S = N, p = G, b = j, y = U, D = O, k = P;
                return B(), L(R, null, [ a(d, {
                    title: "Redis 缓存",
                    url: "https://doc.iocoder.cn/redis-cache/"
                }), a(d, {
                    title: "本地缓存",
                    url: "https://doc.iocoder.cn/local-cache/"
                }), a(k, {
                    height: "calc(100vh - 88px - 40px - 50px)"
                }, {
                    default: l(() => [ a(D, null, {
                        default: l(() => [ a(b, {
                            span: 24,
                            class: "card-box",
                            shadow: "hover"
                        }, {
                            default: l(() => [ a(p, null, {
                                default: l(() => [ a(S, {
                                    title: "基本信息",
                                    column: 6,
                                    border: ""
                                }, {
                                    default: l(() => [ a(s, {
                                        label: "Redis版本 :"
                                    }, {
                                        default: l(() => {
                                            var e, t;
                                            return [ i(n((t = (e = r(o)) == null ? void 0 : e.info) == null ? void 0 : t.redis_version), 1) ];
                                        }),
                                        _: 1
                                    }), a(s, {
                                        label: "运行模式 :"
                                    }, {
                                        default: l(() => {
                                            var e, t;
                                            return [ i(n(((t = (e = r(o)) == null ? void 0 : e.info) == null ? void 0 : t.redis_mode) == "standalone" ? "单机" : "集群"), 1) ];
                                        }),
                                        _: 1
                                    }), a(s, {
                                        label: "端口 :"
                                    }, {
                                        default: l(() => {
                                            var e, t;
                                            return [ i(n((t = (e = r(o)) == null ? void 0 : e.info) == null ? void 0 : t.tcp_port), 1) ];
                                        }),
                                        _: 1
                                    }), a(s, {
                                        label: "客户端数 :"
                                    }, {
                                        default: l(() => {
                                            var e, t;
                                            return [ i(n((t = (e = r(o)) == null ? void 0 : e.info) == null ? void 0 : t.connected_clients), 1) ];
                                        }),
                                        _: 1
                                    }), a(s, {
                                        label: "运行时间(天) :"
                                    }, {
                                        default: l(() => {
                                            var e, t;
                                            return [ i(n((t = (e = r(o)) == null ? void 0 : e.info) == null ? void 0 : t.uptime_in_days), 1) ];
                                        }),
                                        _: 1
                                    }), a(s, {
                                        label: "使用内存 :"
                                    }, {
                                        default: l(() => {
                                            var e, t;
                                            return [ i(n((t = (e = r(o)) == null ? void 0 : e.info) == null ? void 0 : t.used_memory_human), 1) ];
                                        }),
                                        _: 1
                                    }), a(s, {
                                        label: "使用CPU :"
                                    }, {
                                        default: l(() => {
                                            var e, t, c;
                                            return [ i(n((e = r(o)) != null && e.info ? parseFloat((c = (t = r(o)) == null ? void 0 : t.info) == null ? void 0 : c.used_cpu_user_children).toFixed(2) : ""), 1) ];
                                        }),
                                        _: 1
                                    }), a(s, {
                                        label: "内存配置 :"
                                    }, {
                                        default: l(() => {
                                            var e, t;
                                            return [ i(n((t = (e = r(o)) == null ? void 0 : e.info) == null ? void 0 : t.maxmemory_human), 1) ];
                                        }),
                                        _: 1
                                    }), a(s, {
                                        label: "AOF是否开启 :"
                                    }, {
                                        default: l(() => {
                                            var e, t;
                                            return [ i(n(((t = (e = r(o)) == null ? void 0 : e.info) == null ? void 0 : t.aof_enabled) == "0" ? "否" : "是"), 1) ];
                                        }),
                                        _: 1
                                    }), a(s, {
                                        label: "RDB是否成功 :"
                                    }, {
                                        default: l(() => {
                                            var e, t;
                                            return [ i(n((t = (e = r(o)) == null ? void 0 : e.info) == null ? void 0 : t.rdb_last_bgsave_status), 1) ];
                                        }),
                                        _: 1
                                    }), a(s, {
                                        label: "Key数量 :"
                                    }, {
                                        default: l(() => {
                                            var e;
                                            return [ i(n((e = r(o)) == null ? void 0 : e.dbSize), 1) ];
                                        }),
                                        _: 1
                                    }), a(s, {
                                        label: "网络入口/出口 :"
                                    }, {
                                        default: l(() => {
                                            var e, t, c, g;
                                            return [ i(n((t = (e = r(o)) == null ? void 0 : e.info) == null ? void 0 : t.instantaneous_input_kbps) + "kps/ " + n((g = (c = r(o)) == null ? void 0 : c.info) == null ? void 0 : g.instantaneous_output_kbps) + "kps ", 1) ];
                                        }),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), a(b, {
                            span: 12,
                            class: "mt-3"
                        }, {
                            default: l(() => [ a(p, {
                                gutter: 12,
                                shadow: "hover"
                            }, {
                                default: l(() => [ a(y, {
                                    options: r(m),
                                    height: 420
                                }, null, 8, [ "options" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), a(b, {
                            span: 12,
                            class: "mt-3"
                        }, {
                            default: l(() => [ a(p, {
                                class: "ml-3",
                                gutter: 12,
                                shadow: "hover"
                            }, {
                                default: l(() => [ a(y, {
                                    options: r(_),
                                    height: 420
                                }, null, 8, [ "options" ]) ]),
                                _: 1
                            }) ]),
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
    J as __tla,
    F as default
};