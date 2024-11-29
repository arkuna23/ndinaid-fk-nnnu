import {
    _ as Ce,
    __tla as De
} from "./ContentPage-f6bcc98e.js";

import {
    b8 as ze,
    p as I,
    T as Te,
    r as w,
    U as _e,
    f as qe,
    o as y,
    C as v,
    l,
    t as o,
    a as e,
    A as c,
    k as s,
    fr as O,
    G as u,
    el as R,
    c as k,
    F as h,
    B as p,
    v as n,
    dY as je,
    H as ke,
    E as Ie,
    bo as B,
    aQ as Oe,
    cK as Re,
    O as Be,
    J as Ae,
    Q as Ee,
    ad as Ke,
    L as Le,
    ae as Qe,
    R as Ge,
    S as He,
    __tla as Je
} from "./index-6c08ea4c.js";

import {
    d as Ne,
    a as Pe,
    g as Ye,
    b as We,
    c as Xe,
    e as Ze,
    f as $e,
    __tla as ea
} from "./dbConfigDialog-bc4e4493.js";

import {
    t as xe
} from "./formatter-7ecf379a.js";

import {
    d as aa,
    __tla as sa
} from "./formatTime-de6f1520.js";

import ta, {
    __tla as la
} from "./databaseDetails-57e6d016.js";

import {
    _ as ia
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./validate-b72f006c.js";

import {
    __tla as oa
} from "./databaseConfig-a0b3f7be.js";

let ge, na = Promise.all([ (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})() ]).then(async () => {
    let U, A, E, K, L, Q, G, H, J, N, P, Y, W, X, Z, $, ee, ae, se, te, le, ie, oe, ne, re, pe, de, me, ce;
    U = F => (Ge("data-v-80c97e6c"), F = F(), He(), F), A = {
        class: "show-box"
    }, E = {
        class: "show-title"
    }, K = U(() => o("span", {
        style: {
            "margin-left": "9px"
        }
    }, "Mysql配置", -1)), L = {
        class: "number-suffix"
    }, Q = {
        key: 1
    }, G = {
        style: {
            "margin-left": "5px"
        }
    }, H = {
        class: "number-suffix"
    }, J = {
        key: 1
    }, N = {
        style: {
            "margin-left": "5px"
        }
    }, P = {
        style: {
            "margin-bottom": "10px",
            "margin-top": "15px"
        }
    }, Y = {
        class: "show-box",
        style: {
            "margin-top": "20px"
        }
    }, W = {
        class: "show-title"
    }, X = U(() => o("span", {
        style: {
            "margin-left": "9px"
        }
    }, "Redis配置", -1)), Z = {
        class: "number-suffix"
    }, $ = {
        key: 1
    }, ee = {
        style: {
            "margin-left": "5px"
        }
    }, ae = {
        class: "number-suffix"
    }, se = {
        key: 1
    }, te = {
        style: {
            "margin-left": "5px"
        }
    }, le = {
        class: "show-box",
        style: {
            "margin-top": "20px"
        }
    }, ie = {
        class: "show-title"
    }, oe = U(() => o("span", {
        style: {
            "margin-left": "9px"
        }
    }, "Nacos配置", -1)), ne = {
        class: "number-suffix"
    }, re = {
        key: 1
    }, pe = {
        style: {
            "margin-left": "5px"
        }
    }, de = {
        class: "number-suffix"
    }, me = {
        key: 1
    }, ce = {
        style: {
            "margin-left": "5px"
        }
    }, ge = ia({
        __name: "index",
        setup(F) {
            ze();
            const be = I(), Me = Te(), ue = w(), ye = w(), f = _e({
                mysql: !0,
                redis: !0,
                nacos: !0
            }), r = w({
                editFlag: !1,
                spaceType: "mysql",
                tmpMaxMemory: 0,
                tmpDiskSpace: 0,
                maxMemoryUnit: "Mi",
                diskSpaceUnit: "Mi",
                maxMemory: 0,
                diskSpace: 0
            }), d = w({
                editFlag: !1,
                spaceType: "redis",
                tmpMaxMemory: 0,
                tmpDiskSpace: 0,
                maxMemoryUnit: "Mi",
                diskSpaceUnit: "Mi",
                maxMemory: 0,
                diskSpace: 0
            }), m = w({
                editFlag: !1,
                spaceType: "nacos",
                tmpMaxMemory: 0,
                tmpDiskSpace: 0,
                maxMemoryUnit: "Mi",
                diskSpaceUnit: "Mi",
                maxMemory: 0,
                diskSpace: 0
            }), C = i => {
                i.tmpMaxMemory = i.maxMemory, i.tmpDiskSpace = i.diskSpace, i.editFlag = !0;
            }, D = i => {
                i.tmpMaxMemory > 99999 ? I().warning("内存上限不能超过99999Mi") : i.tmpDiskSpace > 99999 ? I().warning("硬盘空间不能超过99999Mi") : (i.maxMemory = i.tmpMaxMemory, 
                i.diskSpace = i.tmpDiskSpace, (a => {
                    a.spaceId ? Ze(a).then(() => {
                        B.success("保存成功"), a.editFlag = !1, q();
                    }) : $e(a).then(() => {
                        B.success("保存成功"), a.editFlag = !1, q();
                    });
                })(i));
            }, z = i => {
                i.tmpMaxMemory = "", i.tmpDiskSpace = "", i.editFlag = !1;
            }, we = async (i, a) => {
                const x = {
                    password: i.password,
                    dbType: i.dbType,
                    maxMemory: i.maxMemory,
                    maxMemoryUnit: i.maxMemoryUnit,
                    diskSpace: i.diskSpace,
                    diskSpaceUnit: i.diskSpaceUnit,
                    tenantId: Me.query.tenantId,
                    dbVersion: i.dbVersion
                };
                Pe(x).then(() => {
                    a && a(), T(), be.success("新增成功");
                });
            }, he = _e({
                dbType: "",
                status: "",
                dbVersion: ""
            }), fe = w([]), T = async (i = {}) => {
                await Ye({
                    ...he,
                    ...i
                }).then(a => {
                    fe.value = a;
                });
            }, Se = () => {
                ue.value.openDbConfigDialog(r.value);
            }, q = () => {
                Xe({}).then(i => {
                    i.forEach(a => {
                        switch (a.spaceType) {
                          case "mysql":
                            Object.assign(r.value, a);
                            break;

                          case "redis":
                            Object.assign(d.value, a);
                            break;

                          case "nacos":
                            Object.assign(m.value, a);
                        }
                    });
                });
            };
            return qe(() => {
                q(), T();
            }), (i, a) => {
                const x = Oe, b = Re, M = Be, _ = Ae, j = Ee, g = Ke, V = Le, ve = Qe, Ue = Ce;
                return y(), v(Ue, {
                    class: "cont-box"
                }, {
                    default: l(() => [ o("div", A, [ o("div", E, [ o("div", {
                        style: {
                            display: "flex",
                            cursor: "pointer"
                        },
                        onClick: a[0] || (a[0] = t => e(f).mysql = !e(f).mysql)
                    }, [ c(s(x, null, {
                        default: l(() => [ s(e(O)) ]),
                        _: 1
                    }, 512), [ [ u, e(f).mysql ] ]), c(s(x, null, {
                        default: l(() => [ s(e(R)) ]),
                        _: 1
                    }, 512), [ [ u, !e(f).mysql ] ]), K ]) ]), c(o("div", null, [ s(j, {
                        ref: "form",
                        model: e(r),
                        class: "show-form",
                        inline: "",
                        "label-position": "left",
                        "label-width": "50px"
                    }, {
                        default: l(() => [ s(M, {
                            label: "内存:"
                        }, {
                            default: l(() => [ e(r).editFlag ? (y(), k(h, {
                                key: 0
                            }, [ s(b, {
                                modelValue: e(r).tmpMaxMemory,
                                "onUpdate:modelValue": a[1] || (a[1] = t => e(r).tmpMaxMemory = t),
                                controls: !1,
                                min: 0,
                                precision: 0,
                                step: 1,
                                class: "neuedu",
                                size: "large"
                            }, null, 8, [ "modelValue" ]), o("span", L, p(e(r).maxMemoryUnit), 1) ], 64)) : (y(), 
                            k("span", Q, [ n(p(e(r).maxMemory), 1), o("span", G, p(e(r).maxMemoryUnit), 1) ])) ]),
                            _: 1
                        }), s(M, {
                            label: "硬盘:"
                        }, {
                            default: l(() => [ e(r).editFlag ? (y(), k(h, {
                                key: 0
                            }, [ s(b, {
                                modelValue: e(r).tmpDiskSpace,
                                "onUpdate:modelValue": a[2] || (a[2] = t => e(r).tmpDiskSpace = t),
                                controls: !1,
                                min: 0,
                                precision: 0,
                                step: 1,
                                class: "neuedu",
                                size: "large"
                            }, null, 8, [ "modelValue" ]), o("span", H, p(e(r).diskSpaceUnit), 1) ], 64)) : (y(), 
                            k("span", J, [ n(p(e(r).diskSpace), 1), o("span", N, p(e(r).diskSpaceUnit), 1) ])) ]),
                            _: 1
                        }), c(s(_, {
                            size: "large",
                            type: "primary",
                            onClick: a[3] || (a[3] = t => D(e(r)))
                        }, {
                            default: l(() => [ n("保存 ") ]),
                            _: 1
                        }, 512), [ [ u, e(r).editFlag ] ]), c(s(_, {
                            size: "large",
                            onClick: a[4] || (a[4] = t => z(e(r)))
                        }, {
                            default: l(() => [ n(" 退出编辑 ") ]),
                            _: 1
                        }, 512), [ [ u, e(r).editFlag ] ]), c(s(_, {
                            size: "large",
                            onClick: a[5] || (a[5] = t => C(e(r)))
                        }, {
                            default: l(() => [ n("编辑 ") ]),
                            _: 1
                        }, 512), [ [ u, !e(r).editFlag ] ]) ]),
                        _: 1
                    }, 8, [ "model" ]), o("div", P, [ s(_, {
                        disabled: e(r).editFlag,
                        plain: "",
                        size: "large",
                        type: "primary",
                        onClick: Se
                    }, {
                        default: l(() => [ s(x, null, {
                            default: l(() => [ s(e(je)) ]),
                            _: 1
                        }), n(" 创建数据库 ") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]), s(ve, {
                        data: e(fe),
                        "max-height": "350px"
                    }, {
                        default: l(() => [ s(g, {
                            label: "序号",
                            type: "index",
                            width: "100"
                        }), s(g, {
                            label: "数据库类型",
                            "show-overflow-tooltip": "",
                            type: "dbType"
                        }, {
                            default: l(t => [ n(p(e(xe)(t.row.dbType)), 1) ]),
                            _: 1
                        }), s(g, {
                            label: "版本号",
                            "min-width": "120",
                            prop: "dbVersion",
                            "show-overflow-tooltip": ""
                        }, {
                            default: l(t => [ o("span", null, p(e(xe)(t.row.dbVersion)), 1) ]),
                            _: 1
                        }), s(g, {
                            label: "内存上限",
                            "show-overflow-tooltip": "",
                            type: "dbType"
                        }, {
                            default: l(t => [ n(p(t.row.maxMemory + t.row.maxMemoryUnit), 1) ]),
                            _: 1
                        }), s(g, {
                            label: "硬盘空间",
                            "show-overflow-tooltip": "",
                            type: "dbType"
                        }, {
                            default: l(t => [ n(p(t.row.diskSpace + t.row.diskSpaceUnit), 1) ]),
                            _: 1
                        }), s(g, {
                            label: "状态",
                            type: "status"
                        }, {
                            default: l(t => [ t.row.status == 1 ? (y(), v(V, {
                                key: 0,
                                type: "success"
                            }, {
                                default: l(() => [ n("创建成功") ]),
                                _: 1
                            })) : t.row.status == 2 ? (y(), v(V, {
                                key: 1,
                                type: "warning"
                            }, {
                                default: l(() => [ n("创建中") ]),
                                _: 1
                            })) : t.row.status == 3 ? (y(), v(V, {
                                key: 2,
                                type: "danger"
                            }, {
                                default: l(() => [ n("创建失败") ]),
                                _: 1
                            })) : (y(), v(V, {
                                key: 3,
                                type: "info"
                            }, {
                                default: l(() => [ n("待创建") ]),
                                _: 1
                            })) ]),
                            _: 1
                        }), s(g, {
                            label: "创建时间",
                            prop: "createTime",
                            "min-width": "150",
                            "show-overflow-tooltip": "",
                            formatter: e(aa),
                            type: "createTime"
                        }, null, 8, [ "formatter" ]), s(g, {
                            align: "center",
                            label: "操作"
                        }, {
                            default: l(t => [ s(_, {
                                link: "",
                                type: "primary",
                                onClick: ke(Fe => {
                                    return S = t.row, void ye.value.openDialog(S.dbId);
                                    var S;
                                }, [ "stop" ])
                            }, {
                                default: l(() => [ n("查看 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ]), s(_, {
                                link: "",
                                style: {
                                    "margin-left": "5px"
                                },
                                type: "danger",
                                onClick: ke(Fe => {
                                    return S = t.row, void Ie.confirm("是否确认删除该数据项？", "提示", {
                                        confirmButtonText: "确认",
                                        cancelButtonText: "取消"
                                    }).then(Ve => {
                                        Ve && We(S.dbId).then(() => {
                                            T(), B({
                                                type: "success",
                                                message: "删除成功",
                                                duration: 2e3
                                            });
                                        });
                                    });
                                    var S;
                                }, [ "stop" ])
                            }, {
                                default: l(() => [ n(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]) ], 512), [ [ u, e(f).mysql ] ]) ]), o("div", Y, [ o("div", W, [ o("div", {
                        style: {
                            display: "flex",
                            cursor: "pointer"
                        },
                        onClick: a[6] || (a[6] = t => e(f).redis = !e(f).redis)
                    }, [ c(s(x, null, {
                        default: l(() => [ s(e(O)) ]),
                        _: 1
                    }, 512), [ [ u, e(f).redis ] ]), c(s(x, null, {
                        default: l(() => [ s(e(R)) ]),
                        _: 1
                    }, 512), [ [ u, !e(f).redis ] ]), X ]) ]), c(o("div", null, [ s(j, {
                        ref: "form",
                        model: e(d),
                        class: "show-form",
                        inline: "",
                        "label-position": "left",
                        "label-width": "50px"
                    }, {
                        default: l(() => [ s(M, {
                            label: "内存:"
                        }, {
                            default: l(() => [ e(d).editFlag ? (y(), k(h, {
                                key: 0
                            }, [ s(b, {
                                modelValue: e(d).tmpMaxMemory,
                                "onUpdate:modelValue": a[7] || (a[7] = t => e(d).tmpMaxMemory = t),
                                controls: !1,
                                min: 0,
                                precision: 0,
                                step: 1,
                                class: "neuedu",
                                size: "large"
                            }, null, 8, [ "modelValue" ]), o("span", Z, p(e(d).maxMemoryUnit), 1) ], 64)) : (y(), 
                            k("span", $, [ n(p(e(d).maxMemory), 1), o("span", ee, p(e(d).maxMemoryUnit), 1) ])) ]),
                            _: 1
                        }), s(M, {
                            label: "硬盘:"
                        }, {
                            default: l(() => [ e(d).editFlag ? (y(), k(h, {
                                key: 0
                            }, [ s(b, {
                                modelValue: e(d).tmpDiskSpace,
                                "onUpdate:modelValue": a[8] || (a[8] = t => e(d).tmpDiskSpace = t),
                                controls: !1,
                                min: 0,
                                precision: 0,
                                step: 1,
                                class: "neuedu",
                                size: "large"
                            }, null, 8, [ "modelValue" ]), o("span", ae, p(e(d).diskSpaceUnit), 1) ], 64)) : (y(), 
                            k("span", se, [ n(p(e(d).diskSpace), 1), o("span", te, p(e(d).diskSpaceUnit), 1) ])) ]),
                            _: 1
                        }), c(s(_, {
                            size: "large",
                            type: "primary",
                            onClick: a[9] || (a[9] = t => D(e(d)))
                        }, {
                            default: l(() => [ n("保存 ") ]),
                            _: 1
                        }, 512), [ [ u, e(d).editFlag ] ]), c(s(_, {
                            size: "large",
                            onClick: a[10] || (a[10] = t => z(e(d)))
                        }, {
                            default: l(() => [ n(" 退出编辑 ") ]),
                            _: 1
                        }, 512), [ [ u, e(d).editFlag ] ]), c(s(_, {
                            size: "large",
                            onClick: a[11] || (a[11] = t => C(e(d)))
                        }, {
                            default: l(() => [ n("编辑 ") ]),
                            _: 1
                        }, 512), [ [ u, !e(d).editFlag ] ]) ]),
                        _: 1
                    }, 8, [ "model" ]) ], 512), [ [ u, e(f).redis ] ]) ]), o("div", le, [ o("div", ie, [ o("div", {
                        style: {
                            display: "flex",
                            cursor: "pointer"
                        },
                        onClick: a[12] || (a[12] = t => e(f).nacos = !e(f).nacos)
                    }, [ c(s(x, null, {
                        default: l(() => [ s(e(O)) ]),
                        _: 1
                    }, 512), [ [ u, e(f).nacos ] ]), c(s(x, null, {
                        default: l(() => [ s(e(R)) ]),
                        _: 1
                    }, 512), [ [ u, !e(f).nacos ] ]), oe ]) ]), c(o("div", null, [ s(j, {
                        ref: "form",
                        model: e(m),
                        class: "show-form",
                        inline: "",
                        "label-position": "left",
                        "label-width": "50px"
                    }, {
                        default: l(() => [ s(M, {
                            label: "内存:"
                        }, {
                            default: l(() => [ e(m).editFlag ? (y(), k(h, {
                                key: 0
                            }, [ s(b, {
                                modelValue: e(m).tmpMaxMemory,
                                "onUpdate:modelValue": a[13] || (a[13] = t => e(m).tmpMaxMemory = t),
                                controls: !1,
                                min: 0,
                                precision: 0,
                                step: 1,
                                class: "neuedu",
                                size: "large"
                            }, null, 8, [ "modelValue" ]), o("span", ne, p(e(m).maxMemoryUnit), 1) ], 64)) : (y(), 
                            k("span", re, [ n(p(e(m).maxMemory), 1), o("span", pe, p(e(m).maxMemoryUnit), 1) ])) ]),
                            _: 1
                        }), s(M, {
                            label: "硬盘:"
                        }, {
                            default: l(() => [ e(m).editFlag ? (y(), k(h, {
                                key: 0
                            }, [ s(b, {
                                modelValue: e(m).tmpDiskSpace,
                                "onUpdate:modelValue": a[14] || (a[14] = t => e(m).tmpDiskSpace = t),
                                controls: !1,
                                min: 0,
                                precision: 0,
                                step: 1,
                                class: "neuedu",
                                size: "large"
                            }, null, 8, [ "modelValue" ]), o("span", de, p(e(m).diskSpaceUnit), 1) ], 64)) : (y(), 
                            k("span", me, [ n(p(e(m).diskSpace), 1), o("span", ce, p(e(m).diskSpaceUnit), 1) ])) ]),
                            _: 1
                        }), c(s(_, {
                            size: "large",
                            type: "primary",
                            onClick: a[15] || (a[15] = t => D(e(m)))
                        }, {
                            default: l(() => [ n("保存 ") ]),
                            _: 1
                        }, 512), [ [ u, e(m).editFlag ] ]), c(s(_, {
                            size: "large",
                            onClick: a[16] || (a[16] = t => z(e(m)))
                        }, {
                            default: l(() => [ n(" 退出编辑 ") ]),
                            _: 1
                        }, 512), [ [ u, e(m).editFlag ] ]), c(s(_, {
                            size: "large",
                            onClick: a[17] || (a[17] = t => C(e(m)))
                        }, {
                            default: l(() => [ n("编辑 ") ]),
                            _: 1
                        }, 512), [ [ u, !e(m).editFlag ] ]) ]),
                        _: 1
                    }, 8, [ "model" ]) ], 512), [ [ u, e(f).nacos ] ]) ]), s(ta, {
                        ref_key: "databaseDetailsRef",
                        ref: ye
                    }, null, 512), s(Ne, {
                        ref_key: "addDbConfigRef",
                        ref: ue,
                        onCreateAuth: we
                    }, null, 512) ]),
                    _: 1
                });
            };
        }
    }, [ [ "__scopeId", "data-v-80c97e6c" ] ]);
});

export {
    na as __tla,
    ge as default
};