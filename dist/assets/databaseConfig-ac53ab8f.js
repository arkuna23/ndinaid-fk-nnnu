import {
    T as Ge,
    u as He,
    p as I,
    r as M,
    U as Ne,
    f as Je,
    o as c,
    c as k,
    t as s,
    k as l,
    l as i,
    a as e,
    dU as Pe,
    v as o,
    B as _,
    A as d,
    G as p,
    fr as O,
    el as B,
    F,
    dY as Ye,
    C as U,
    H as Te,
    bo as K,
    aQ as We,
    cK as Xe,
    O as Ze,
    J as $e,
    Q as ea,
    ad as aa,
    L as la,
    ae as sa,
    R as ta,
    S as ia,
    __tla as na
} from "./index-6c08ea4c.js";

import {
    a as oa,
    __tla as ra
} from "./index-c31c99eb.js";

import {
    g as da,
    c as pa,
    d as ma,
    e as ca,
    f as ua,
    h as ya,
    i as fa,
    __tla as _a
} from "./databaseConfig-a0b3f7be.js";

import ka, {
    __tla as ga
} from "./addDatabase-399e90dd.js";

import xa, {
    __tla as Ma
} from "./databaseDetails-57e6d016.js";

import {
    t as qe
} from "./formatter-7ecf379a.js";

import {
    f as ba,
    __tla as ha
} from "./formatTime-de6f1520.js";

import {
    _ as wa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./validate-b72f006c.js";

let Re, va = Promise.all([ (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})() ]).then(async () => {
    let m, L, Q, E, G, H, J, P, Y, W, X, Z, $, ee, ae, le, se, te, ie, ne, oe, re, de, pe, me, ce, ue, ye, fe, _e, ke, ge, xe, Me, be, he, we, ve, Se, Fe, Ce;
    m = V => (ta("data-v-16747709"), V = V(), ia(), V), L = {
        class: "neu-resourse-auth"
    }, Q = {
        class: "experiment-info-header"
    }, E = m(() => s("span", {
        class: "icon-box-back"
    }, "返回", -1)), G = {
        class: "schoolInfo"
    }, H = {
        class: "infoBox"
    }, J = {
        class: "mb-4"
    }, P = {
        class: "schoolName pr-5"
    }, Y = {
        class: "schoolId"
    }, W = {
        class: "appNums"
    }, X = {
        class: "total"
    }, Z = {
        class: "neu-resourse-content"
    }, $ = {
        class: "neu-ordianry-resourse"
    }, ee = {
        class: "show-box",
        style: {
            "margin-top": "20px"
        }
    }, ae = {
        class: "show-title"
    }, le = m(() => s("span", {
        style: {
            "margin-left": "9px"
        }
    }, "Mysql配置", -1)), se = m(() => s("span", {
        class: "number-suffix"
    }, "Mi", -1)), te = {
        key: 1
    }, ie = m(() => s("span", {
        style: {
            "margin-left": "5px"
        }
    }, "Mi", -1)), ne = m(() => s("span", {
        class: "number-suffix"
    }, "Mi", -1)), oe = {
        key: 1
    }, re = m(() => s("span", {
        style: {
            "margin-left": "5px"
        }
    }, "Mi", -1)), de = {
        style: {
            "margin-bottom": "10px",
            "margin-top": "15px"
        }
    }, pe = {
        class: "show-box",
        style: {
            "margin-top": "20px"
        }
    }, me = {
        class: "show-title"
    }, ce = m(() => s("span", {
        style: {
            "margin-left": "9px"
        }
    }, "Redis配置", -1)), ue = m(() => s("span", {
        class: "number-suffix"
    }, "Mi", -1)), ye = {
        key: 1
    }, fe = m(() => s("span", {
        style: {
            "margin-left": "5px"
        }
    }, "Mi", -1)), _e = m(() => s("span", {
        class: "number-suffix"
    }, "Mi", -1)), ke = {
        key: 1
    }, ge = m(() => s("span", {
        style: {
            "margin-left": "5px"
        }
    }, "Mi", -1)), xe = {
        class: "show-box",
        style: {
            "margin-top": "20px"
        }
    }, Me = {
        class: "show-title"
    }, be = m(() => s("span", {
        style: {
            "margin-left": "9px"
        }
    }, "Nacos配置", -1)), he = m(() => s("span", {
        class: "number-suffix"
    }, "Mi", -1)), we = {
        key: 1
    }, ve = m(() => s("span", {
        style: {
            "margin-left": "5px"
        }
    }, "Mi", -1)), Se = m(() => s("span", {
        class: "number-suffix"
    }, "Mi", -1)), Fe = {
        key: 1
    }, Ce = m(() => s("span", {
        style: {
            "margin-left": "5px"
        }
    }, "Mi", -1)), Re = wa({
        __name: "databaseConfig",
        setup(V) {
            const h = Ge(), Ae = He(), je = I(), Ve = M(null), ze = M(null), f = Ne({
                mysql: !0,
                redis: !0,
                nacos: !0
            }), r = M({
                editFlag: !1,
                tenantId: h.params.id,
                spaceType: "mysql",
                tmpMaxMemory: 0,
                tmpDiskSpace: 0,
                maxMemoryUnit: "Mi",
                diskSpaceUnit: "Mi",
                maxMemory: 0,
                diskSpace: 0
            }), u = M({
                editFlag: !1,
                tenantId: h.params.id,
                spaceType: "redis",
                tmpMaxMemory: 0,
                tmpDiskSpace: 0,
                maxMemoryUnit: "Mi",
                diskSpaceUnit: "Mi",
                maxMemory: 0,
                diskSpace: 0
            }), y = M({
                editFlag: !1,
                tenantId: h.params.id,
                spaceType: "nacos",
                tmpMaxMemory: 0,
                tmpDiskSpace: 0,
                maxMemoryUnit: "Mi",
                diskSpaceUnit: "Mi",
                maxMemory: 0,
                diskSpace: 0
            }), D = n => {
                n.tmpMaxMemory = n.maxMemory, n.tmpDiskSpace = n.diskSpace, n.editFlag = !0;
            }, N = n => {
                n.tmpMaxMemory > 99999 ? I().warning("内存上限不能超过99999Mi") : n.tmpDiskSpace > 99999 ? I().warning("硬盘空间不能超过99999Mi") : (n.maxMemory = n.tmpMaxMemory, 
                n.diskSpace = n.tmpDiskSpace, (a => {
                    a.spaceId ? ya(a).then(() => {
                        K.success("保存成功"), a.editFlag = !1, A();
                    }) : fa(a).then(() => {
                        K.success("保存成功"), a.editFlag = !1, A();
                    });
                })(n));
            }, T = n => {
                n.tmpMaxMemory = "", n.tmpDiskSpace = "", n.editFlag = !1;
            }, q = Ne({
                tenantId: "",
                dbType: "",
                status: ""
            }), Ie = M([]), Oe = () => {
                Ae.back();
            }, Ue = M(!1), R = (n = {}) => {
                Ue.value = !0, da({
                    ...q,
                    ...n
                }).then(a => {
                    Ie.value = a, Ue.value = !1;
                }), pa({
                    tenantId: q.tenantId
                }).then(a => {
                    w.value.cumulativeAuthorizationResNum = a || 0;
                }), A();
            }, Be = async () => {
                Ve.value.openDialog(r.value);
            }, De = async (n, a) => {
                const x = {
                    password: n.password,
                    dbType: n.dbType,
                    maxMemory: n.maxMemory,
                    maxMemoryUnit: n.maxMemoryUnit,
                    diskSpace: n.diskSpace,
                    diskSpaceUnit: n.diskSpaceUnit,
                    tenantId: h.params.id,
                    dbVersion: n.dbVersion
                };
                ca(x).then(() => {
                    a && a(), R(), je.success("新增成功");
                });
            }, w = M({
                tenantName: "",
                tenantId: "",
                cumulativeAuthorizationResNum: "0",
                expiringResNum: "8",
                expiredResNum: "0"
            }), Ke = M({
                totalName: "已配置数据库"
            }), A = () => {
                ua({
                    tenantId: h.params.id
                }).then(n => {
                    n.forEach(a => {
                        switch (a.spaceType) {
                          case "mysql":
                            Object.assign(r.value, a);
                            break;

                          case "redis":
                            Object.assign(u.value, a);
                            break;

                          case "nacos":
                            Object.assign(y.value, a);
                        }
                    });
                });
            };
            return Je(() => {
                q.tenantId = h.params.id, (async () => {
                    const n = h.params.id, a = await oa(n);
                    a && (w.value.tenantId = a.code, w.value.tenantName = a.name);
                })(), R();
            }), (n, a) => {
                const x = We, v = Xe, S = Ze, g = $e, j = ea, b = aa, z = la, Le = sa;
                return c(), k("div", L, [ s("div", Q, [ s("div", {
                    class: "icon-box",
                    onClick: Oe
                }, [ l(x, {
                    size: 16
                }, {
                    default: i(() => [ l(e(Pe)) ]),
                    _: 1
                }), E ]), o(" 资源配置 ") ]), s("div", G, [ s("section", H, [ s("p", J, [ s("span", P, _(e(w).tenantName), 1), s("span", Y, " 代码：" + _(e(w).tenantId), 1) ]), s("p", W, [ s("span", X, [ o(_(e(Ke).totalName), 1), s("i", null, _(e(w).cumulativeAuthorizationResNum), 1) ]) ]) ]) ]), s("div", Z, [ s("div", $, [ s("div", ee, [ s("div", ae, [ s("div", {
                    style: {
                        display: "flex",
                        cursor: "pointer"
                    },
                    onClick: a[0] || (a[0] = t => e(f).mysql = !e(f).mysql)
                }, [ d(l(x, null, {
                    default: i(() => [ l(e(O)) ]),
                    _: 1
                }, 512), [ [ p, e(f).mysql ] ]), d(l(x, null, {
                    default: i(() => [ l(e(B)) ]),
                    _: 1
                }, 512), [ [ p, !e(f).mysql ] ]), le ]) ]), d(s("div", null, [ l(j, {
                    ref: "form",
                    model: e(r),
                    class: "show-form",
                    inline: "",
                    "label-position": "left",
                    "label-width": "50px"
                }, {
                    default: i(() => [ l(S, {
                        label: "内存:"
                    }, {
                        default: i(() => [ e(r).editFlag ? (c(), k(F, {
                            key: 0
                        }, [ l(v, {
                            modelValue: e(r).tmpMaxMemory,
                            "onUpdate:modelValue": a[1] || (a[1] = t => e(r).tmpMaxMemory = t),
                            controls: !1,
                            min: 0,
                            precision: 0,
                            step: 1,
                            class: "neuedu",
                            size: "large"
                        }, null, 8, [ "modelValue" ]), se ], 64)) : (c(), k("span", te, [ o(_(e(r).maxMemory), 1), ie ])) ]),
                        _: 1
                    }), l(S, {
                        label: "硬盘:"
                    }, {
                        default: i(() => [ e(r).editFlag ? (c(), k(F, {
                            key: 0
                        }, [ l(v, {
                            modelValue: e(r).tmpDiskSpace,
                            "onUpdate:modelValue": a[2] || (a[2] = t => e(r).tmpDiskSpace = t),
                            controls: !1,
                            min: 0,
                            precision: 0,
                            step: 1,
                            class: "neuedu",
                            size: "large"
                        }, null, 8, [ "modelValue" ]), ne ], 64)) : (c(), k("span", oe, [ o(_(e(r).diskSpace), 1), re ])) ]),
                        _: 1
                    }), d(l(g, {
                        size: "large",
                        type: "primary",
                        onClick: a[3] || (a[3] = t => N(e(r)))
                    }, {
                        default: i(() => [ o("保存 ") ]),
                        _: 1
                    }, 512), [ [ p, e(r).editFlag ] ]), d(l(g, {
                        size: "large",
                        onClick: a[4] || (a[4] = t => T(e(r)))
                    }, {
                        default: i(() => [ o("退出编辑 ") ]),
                        _: 1
                    }, 512), [ [ p, e(r).editFlag ] ]), d(l(g, {
                        size: "large",
                        onClick: a[5] || (a[5] = t => D(e(r)))
                    }, {
                        default: i(() => [ o("编辑") ]),
                        _: 1
                    }, 512), [ [ p, !e(r).editFlag ] ]) ]),
                    _: 1
                }, 8, [ "model" ]), s("div", de, [ l(g, {
                    plain: "",
                    size: "large",
                    type: "primary",
                    onClick: Be,
                    disabled: e(r).editFlag
                }, {
                    default: i(() => [ l(x, null, {
                        default: i(() => [ l(e(Ye)) ]),
                        _: 1
                    }), o(" 创建数据库 ") ]),
                    _: 1
                }, 8, [ "disabled" ]) ]), s("div", null, [ l(Le, {
                    ref: "selectTable",
                    data: e(Ie),
                    class: "common-table",
                    "highlight-current-row": "",
                    stripe: ""
                }, {
                    default: i(() => [ l(b, {
                        label: "序号",
                        type: "index",
                        width: "60"
                    }), l(b, {
                        label: "数据库类型",
                        "min-width": "200",
                        "show-overflow-tooltip": ""
                    }, {
                        default: i(t => [ o(_(e(qe)(t.row.dbType)), 1) ]),
                        _: 1
                    }), l(b, {
                        label: "版本号",
                        "min-width": "120",
                        prop: "dbVersion",
                        "show-overflow-tooltip": ""
                    }, {
                        default: i(t => [ s("span", null, _(e(qe)(t.row.dbVersion)), 1) ]),
                        _: 1
                    }), l(b, {
                        label: "内存上限",
                        "min-width": "120",
                        "show-overflow-tooltip": ""
                    }, {
                        default: i(t => [ o(_(t.row.maxMemory + t.row.maxMemoryUnit), 1) ]),
                        _: 1
                    }), l(b, {
                        label: "硬盘空间",
                        "min-width": "120"
                    }, {
                        default: i(t => [ o(_(t.row.diskSpace + t.row.diskSpaceUnit), 1) ]),
                        _: 1
                    }), l(b, {
                        label: "状态",
                        "min-width": "120"
                    }, {
                        default: i(t => [ t.row.status == 1 ? (c(), U(z, {
                            key: 0,
                            type: "success"
                        }, {
                            default: i(() => [ o("创建成功") ]),
                            _: 1
                        })) : t.row.status == 2 ? (c(), U(z, {
                            key: 1,
                            type: "warning"
                        }, {
                            default: i(() => [ o("创建中") ]),
                            _: 1
                        })) : t.row.status == 3 ? (c(), U(z, {
                            key: 2,
                            type: "danger"
                        }, {
                            default: i(() => [ o("创建失败") ]),
                            _: 1
                        })) : (c(), U(z, {
                            key: 3,
                            type: "info"
                        }, {
                            default: i(() => [ o("待创建") ]),
                            _: 1
                        })) ]),
                        _: 1
                    }), l(b, {
                        label: "创建时间",
                        "min-width": "170",
                        prop: "endDate",
                        "show-overflow-tooltip": ""
                    }, {
                        default: i(t => [ s("span", null, _(e(ba)(t.row.createTime)), 1) ]),
                        _: 1
                    }), l(b, {
                        fixed: "right",
                        label: "操作",
                        "min-width": "110"
                    }, {
                        default: i(t => [ l(g, {
                            link: "",
                            type: "primary",
                            onClick: Te(Qe => {
                                return C = t.row, void ze.value.openDialog(C.dbId);
                                var C;
                            }, [ "stop" ])
                        }, {
                            default: i(() => [ o(" 查看 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]), l(g, {
                            link: "",
                            type: "danger",
                            onClick: Te(Qe => {
                                return C = t.row, void I().delConfirm("是否确认删除该数据项？", "提示").then(Ee => {
                                    Ee && ma(C.dbId).then(() => {
                                        R(), K({
                                            type: "success",
                                            message: "删除成功",
                                            duration: 2e3
                                        });
                                    });
                                });
                                var C;
                            }, [ "stop" ])
                        }, {
                            default: i(() => [ o(" 删除 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ]) ], 512), [ [ p, e(f).mysql ] ]) ]), s("div", pe, [ s("div", me, [ s("div", {
                    style: {
                        display: "flex",
                        cursor: "pointer"
                    },
                    onClick: a[6] || (a[6] = t => e(f).redis = !e(f).redis)
                }, [ d(l(x, null, {
                    default: i(() => [ l(e(O)) ]),
                    _: 1
                }, 512), [ [ p, e(f).redis ] ]), d(l(x, null, {
                    default: i(() => [ l(e(B)) ]),
                    _: 1
                }, 512), [ [ p, !e(f).redis ] ]), ce ]) ]), d(s("div", null, [ l(j, {
                    ref: "form",
                    model: e(u),
                    class: "show-form",
                    inline: "",
                    "label-position": "left",
                    "label-width": "50px"
                }, {
                    default: i(() => [ l(S, {
                        label: "内存:"
                    }, {
                        default: i(() => [ e(u).editFlag ? (c(), k(F, {
                            key: 0
                        }, [ l(v, {
                            modelValue: e(u).tmpMaxMemory,
                            "onUpdate:modelValue": a[7] || (a[7] = t => e(u).tmpMaxMemory = t),
                            controls: !1,
                            min: 0,
                            precision: 0,
                            step: 1,
                            class: "neuedu",
                            size: "large"
                        }, null, 8, [ "modelValue" ]), ue ], 64)) : (c(), k("span", ye, [ o(_(e(u).maxMemory), 1), fe ])) ]),
                        _: 1
                    }), l(S, {
                        label: "硬盘:"
                    }, {
                        default: i(() => [ e(u).editFlag ? (c(), k(F, {
                            key: 0
                        }, [ l(v, {
                            modelValue: e(u).tmpDiskSpace,
                            "onUpdate:modelValue": a[8] || (a[8] = t => e(u).tmpDiskSpace = t),
                            controls: !1,
                            min: 0,
                            precision: 0,
                            step: 1,
                            class: "neuedu",
                            size: "large"
                        }, null, 8, [ "modelValue" ]), _e ], 64)) : (c(), k("span", ke, [ o(_(e(u).diskSpace), 1), ge ])) ]),
                        _: 1
                    }), d(l(g, {
                        size: "large",
                        type: "primary",
                        onClick: a[9] || (a[9] = t => N(e(u)))
                    }, {
                        default: i(() => [ o("保存 ") ]),
                        _: 1
                    }, 512), [ [ p, e(u).editFlag ] ]), d(l(g, {
                        size: "large",
                        onClick: a[10] || (a[10] = t => T(e(u)))
                    }, {
                        default: i(() => [ o("退出编辑 ") ]),
                        _: 1
                    }, 512), [ [ p, e(u).editFlag ] ]), d(l(g, {
                        size: "large",
                        onClick: a[11] || (a[11] = t => D(e(u)))
                    }, {
                        default: i(() => [ o("编辑") ]),
                        _: 1
                    }, 512), [ [ p, !e(u).editFlag ] ]) ]),
                    _: 1
                }, 8, [ "model" ]) ], 512), [ [ p, e(f).redis ] ]) ]), s("div", xe, [ s("div", Me, [ s("div", {
                    style: {
                        display: "flex",
                        cursor: "pointer"
                    },
                    onClick: a[12] || (a[12] = t => e(f).nacos = !e(f).nacos)
                }, [ d(l(x, null, {
                    default: i(() => [ l(e(O)) ]),
                    _: 1
                }, 512), [ [ p, e(f).nacos ] ]), d(l(x, null, {
                    default: i(() => [ l(e(B)) ]),
                    _: 1
                }, 512), [ [ p, !e(f).nacos ] ]), be ]) ]), d(s("div", null, [ l(j, {
                    ref: "form",
                    model: e(y),
                    class: "show-form",
                    inline: "",
                    "label-position": "left",
                    "label-width": "50px"
                }, {
                    default: i(() => [ l(S, {
                        label: "内存:"
                    }, {
                        default: i(() => [ e(y).editFlag ? (c(), k(F, {
                            key: 0
                        }, [ l(v, {
                            modelValue: e(y).tmpMaxMemory,
                            "onUpdate:modelValue": a[13] || (a[13] = t => e(y).tmpMaxMemory = t),
                            controls: !1,
                            min: 0,
                            precision: 0,
                            step: 1,
                            class: "neuedu",
                            size: "large"
                        }, null, 8, [ "modelValue" ]), he ], 64)) : (c(), k("span", we, [ o(_(e(y).maxMemory), 1), ve ])) ]),
                        _: 1
                    }), l(S, {
                        label: "硬盘:"
                    }, {
                        default: i(() => [ e(y).editFlag ? (c(), k(F, {
                            key: 0
                        }, [ l(v, {
                            modelValue: e(y).tmpDiskSpace,
                            "onUpdate:modelValue": a[14] || (a[14] = t => e(y).tmpDiskSpace = t),
                            controls: !1,
                            min: 0,
                            precision: 0,
                            step: 1,
                            class: "neuedu",
                            size: "large"
                        }, null, 8, [ "modelValue" ]), Se ], 64)) : (c(), k("span", Fe, [ o(_(e(y).diskSpace), 1), Ce ])) ]),
                        _: 1
                    }), d(l(g, {
                        size: "large",
                        type: "primary",
                        onClick: a[15] || (a[15] = t => N(e(y)))
                    }, {
                        default: i(() => [ o("保存 ") ]),
                        _: 1
                    }, 512), [ [ p, e(y).editFlag ] ]), d(l(g, {
                        size: "large",
                        onClick: a[16] || (a[16] = t => T(e(y)))
                    }, {
                        default: i(() => [ o("退出编辑 ") ]),
                        _: 1
                    }, 512), [ [ p, e(y).editFlag ] ]), d(l(g, {
                        size: "large",
                        onClick: a[17] || (a[17] = t => D(e(y)))
                    }, {
                        default: i(() => [ o("编辑") ]),
                        _: 1
                    }, 512), [ [ p, !e(y).editFlag ] ]) ]),
                    _: 1
                }, 8, [ "model" ]) ], 512), [ [ p, e(f).nacos ] ]) ]), l(ka, {
                    ref_key: "addAuthRef",
                    ref: Ve,
                    onCreateAuth: De
                }, null, 512), l(xa, {
                    ref_key: "databaseDetailsRef",
                    ref: ze,
                    onCreateAuth: De
                }, null, 512) ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-16747709" ] ]);
});

export {
    va as __tla,
    Re as default
};