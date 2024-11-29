import {
    _ as we,
    __tla as xe
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Pe,
    __tla as Se
} from "./index-e2094cc0.js";

import {
    _ as Ie,
    __tla as Ne
} from "./index-8b41572c.js";

import {
    _ as Ae,
    __tla as Ee
} from "./index-71666e05.js";

import {
    d as Re,
    u as Ve,
    T as Ue,
    a0 as We,
    r as I,
    h as Te,
    e as ae,
    U as Be,
    bE as Je,
    f as Le,
    o as n,
    c as d,
    k as e,
    l as t,
    t as s,
    a as l,
    v as i,
    D as p,
    B as w,
    m as te,
    C as m,
    F as se,
    y as Me,
    H as y,
    p as N,
    _ as ze,
    J as De,
    ak as He,
    a8 as Ye,
    L as Ge,
    av as Ke,
    aw as Oe,
    br as Fe,
    cn as qe,
    R as Qe,
    S as Xe,
    __tla as Ze
} from "./index-6c08ea4c.js";

import {
    _ as $e,
    __tla as ea
} from "./index-1024512a.js";

import {
    _ as aa
} from "./manageIcon-aa116bb2.js";

import ta, {
    __tla as sa
} from "./projectResourceSetting-0c35200b.js";

import {
    d as le,
    g as la,
    __tla as ra
} from "./project-11c04120.js";

import {
    e as na,
    D as ca,
    __tla as oa
} from "./dict-c5825220.js";

import {
    _ as ia
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as pa
} from "./DeptTag-1be092ce.js";

import {
    __tla as ua
} from "./index-ef4d146e.js";

import {
    __tla as _a
} from "./pkgManage-4e23f8a8.js";

import {
    __tla as da
} from "./pkgManage-14933852.js";

let re, ma = Promise.all([ (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return Ze;
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
        return ra;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})() ]).then(async () => {
    let v, U, W, T, B, J, L, M, z, D, H, Y, G, K, O, F, q, Q, X, Z;
    v = k => (Qe("data-v-a28cfbac"), k = k(), Xe(), k), U = {
        class: "top-box"
    }, W = {
        key: 0,
        class: "right btns-box header-btns"
    }, T = {
        class: "top-title"
    }, B = {
        class: "top-switch"
    }, J = v(() => s("span", {
        style: {
            "margin-right": "5px"
        }
    }, "仅查看计入考核项目", -1)), L = [ "onClick" ], M = {
        class: "item-line-first"
    }, z = {
        class: "line-first-left"
    }, D = {
        class: "project-title",
        style: {
            "margin-right": "5px"
        }
    }, H = {
        key: 0,
        class: "project-tag blue"
    }, Y = {
        class: "line-first-right"
    }, G = {
        class: "item-line-second"
    }, K = v(() => s("span", {
        class: "line-second-label"
    }, "任务数：", -1)), O = {
        class: "line-second-value"
    }, F = v(() => s("span", {
        class: "line-second-label"
    }, "环境：", -1)), q = {
        class: "line-second-value"
    }, Q = {
        key: 0,
        style: {
            height: "60px"
        }
    }, X = {
        key: 1,
        class: "page-empty w-100%"
    }, Z = v(() => s("img", {
        src: aa,
        alt: "",
        class: "mr-5px"
    }, null, -1)), re = ia(Re({
        __name: "project",
        props: {
            from: {
                type: String,
                default: ""
            }
        },
        emits: [ "refresh" ],
        setup(k, {
            emit: ne
        }) {
            const x = Ve(), g = Ue(), ce = k, {
                from: $
            } = We(ce), h = I();
            Te();
            const oe = ne, A = ae(() => g.name.includes("Manage")), ie = ae(() => [ {
                label: "项目状态",
                key: "status",
                type: "list",
                options: [ {
                    label: "未完成",
                    value: 1
                }, {
                    label: "已完成",
                    value: 2
                } ]
            } ]), o = I([]), u = I([]), ee = r => {
                o.value = r ? JSON.parse(JSON.stringify(u.value)) : [];
            }, pe = async () => {
                await N().delConfirm("是否删除这些项目？", "提示"), await le({
                    pkgId: g.params.id,
                    ids: o.value.map(r => r.projectId)
                }), _(), N().success("删除成功");
            }, ue = () => {
                h.value.open(o.value);
            }, P = async (r, c) => {
                switch (r) {
                  case "preview":
                    const E = x.resolve({
                        name: "ProjectPreview",
                        params: {
                            projectId: c.projectId,
                            inProject: 0
                        }
                    }).href;
                    window.open(E, "_blank");
                    break;

                  case "editProject":
                    let j = $.value === "courseResManage" ? "PrivateProjectUpdate" : "NeuProjectUpdate";
                    x.push({
                        name: j,
                        params: {
                            id: c.projectId
                        }
                    });
                    break;

                  case "resSetting":
                    h == null || h.value.open([ c ]);
                    break;

                  case "delete":
                    await N().delConfirm("是否删除该项目？", "提示"), await le({
                        pkgId: g.params.id,
                        ids: [ c.projectId ]
                    }), _(), N().success("删除成功");
                }
            }, _e = () => {
                const {
                    id: r
                } = g.params;
                $.value === "courseResManage" ? x.push({
                    name: "AddProject",
                    params: {
                        id: r
                    }
                }) : x.push({
                    name: "NeuAddProject",
                    params: {
                        id: r
                    }
                });
            }, b = I(0), S = Be({
                status: "",
                keyWord: "",
                isAssess: ""
            }), de = () => {
                S.isAssess = b.value == 0 ? "" : b.value, _();
            }, me = r => {
                S.status = r.status ?? "", S.keyWord = r.keyWord ?? "", _();
            }, _ = () => {
                la({
                    packageId: g.params.id,
                    ...S
                }).then(r => {
                    u.value = r || [], ee(!1), oe("refresh");
                });
            };
            return Je(() => {
                _();
            }), Le(() => {
                _();
            }), (r, c) => {
                const E = $e, j = ze, f = De, fe = He, ye = Ye, R = Ge, C = Ke, ve = Oe, ke = Fe, ge = qe, he = Ae, be = Ie, je = Pe, Ce = we;
                return n(), d(se, null, [ e(Ce, {
                    class: "project flex flex-col"
                }, {
                    default: t(() => [ s("div", U, [ e(E, {
                        ref: "ComSearchRef",
                        searchList: l(ie),
                        keywordsInfo: {
                            label: "项目名称/代码",
                            key: "keyWord"
                        },
                        onHandleSearch: me,
                        class: "left"
                    }, null, 8, [ "searchList" ]), l(A) ? (n(), d("div", W, [ e(f, {
                        type: "primary",
                        size: "large",
                        onClick: _e
                    }, {
                        default: t(() => [ e(j, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), i(" 添加项目 ") ]),
                        _: 1
                    }) ])) : p("", !0) ]), s("div", T, [ s("span", null, "共计" + w(l(u).length || 0) + "个", 1), s("div", B, [ J, e(fe, {
                        modelValue: l(b),
                        "onUpdate:modelValue": c[0] || (c[0] = a => te(b) ? b.value = a : null),
                        "active-value": 1,
                        size: "small",
                        "inactive-value": 0,
                        onChange: de
                    }, null, 8, [ "modelValue" ]) ]) ]), e(be, {
                        class: "center-box",
                        "no-pager": !0,
                        "outer-height": 93
                    }, {
                        default: t(() => [ l(u) && l(u).length > 0 ? (n(), m(ge, {
                            key: 0
                        }, {
                            default: t(() => [ e(ke, {
                                modelValue: l(o),
                                "onUpdate:modelValue": c[3] || (c[3] = a => te(o) ? o.value = a : null),
                                style: {
                                    width: "100%",
                                    "margin-top": "-20px"
                                }
                            }, {
                                default: t(() => [ (n(!0), d(se, null, Me(l(u), a => (n(), 
                                d("div", {
                                    class: "project-item",
                                    key: a.projectId,
                                    onClick: y(V => P("preview", a), [ "stop" ])
                                }, [ s("div", M, [ s("div", z, [ l(A) ? (n(), m(ye, {
                                    key: 0,
                                    value: a,
                                    onClick: c[1] || (c[1] = y(() => {}, [ "stop" ]))
                                }, null, 8, [ "value" ])) : p("", !0), a.level ? (n(), 
                                m(j, {
                                    key: 1,
                                    icon: "svg-icon:project-lv" + a.level,
                                    size: 24,
                                    style: {
                                        "margin-right": "5px"
                                    }
                                }, null, 8, [ "icon" ])) : p("", !0), s("span", D, w(a.name), 1), a.code ? (n(), 
                                m(R, {
                                    key: 2,
                                    type: "info",
                                    style: {
                                        "margin-right": "10px"
                                    }
                                }, {
                                    default: t(() => [ i(w(a.code), 1) ]),
                                    _: 2
                                }, 1024)) : p("", !0), s("template", null, [ a.isNeuResource == 1 ? (n(), 
                                d("div", H, "NEU")) : p("", !0) ]) ]), s("div", Y, [ a.status == 1 ? (n(), 
                                m(R, {
                                    key: 0,
                                    type: "warning"
                                }, {
                                    default: t(() => [ i("未完成") ]),
                                    _: 1
                                })) : p("", !0), a.status == 2 ? (n(), m(R, {
                                    key: 1,
                                    type: "success"
                                }, {
                                    default: t(() => [ i("已完成") ]),
                                    _: 1
                                })) : p("", !0) ]) ]), s("div", G, [ e(ve, {
                                    gutter: 10
                                }, {
                                    default: t(() => [ e(C, {
                                        span: 4
                                    }, {
                                        default: t(() => [ K, s("span", O, w(a.taskCnt), 1) ]),
                                        _: 2
                                    }, 1024), e(C, {
                                        span: 4
                                    }, {
                                        default: t(() => [ F, s("span", q, w(l(na)(l(ca).SYSTEM_TENANT_PACKAGE_ENV_TYPE, a.environment).label), 1) ]),
                                        _: 2
                                    }, 1024), e(C, {
                                        span: 6
                                    }), e(C, {
                                        span: 6,
                                        style: {
                                            display: "flex",
                                            "align-items": "center"
                                        }
                                    }), l(A) ? (n(), m(C, {
                                        key: 0,
                                        span: 4,
                                        class: "item-btns",
                                        onClick: c[2] || (c[2] = y(() => {}, [ "stop" ]))
                                    }, {
                                        default: t(() => [ e(f, {
                                            type: "primary",
                                            onClick: y(V => P("editProject", a), [ "stop" ]),
                                            link: ""
                                        }, {
                                            default: t(() => [ i("编辑") ]),
                                            _: 2
                                        }, 1032, [ "onClick" ]), e(f, {
                                            type: "primary",
                                            onClick: y(V => P("resSetting", a), [ "stop" ]),
                                            link: ""
                                        }, {
                                            default: t(() => [ i("资源设置") ]),
                                            _: 2
                                        }, 1032, [ "onClick" ]), e(f, {
                                            type: "danger",
                                            onClick: y(V => P("delete", a), [ "stop" ]),
                                            link: ""
                                        }, {
                                            default: t(() => [ i("删除") ]),
                                            _: 2
                                        }, 1032, [ "onClick" ]) ]),
                                        _: 2
                                    }, 1024)) : p("", !0) ]),
                                    _: 2
                                }, 1024) ]) ], 8, L))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]), l(o) && l(o).length > 0 ? (n(), 
                            d("div", Q)) : p("", !0) ]),
                            _: 1
                        })) : (n(), d("div", X, [ e(he) ])) ]),
                        _: 1
                    }), e(je, {
                        ref: "SelectionButtonGroupRef",
                        "select-list": l(o),
                        "page-list": l(u),
                        subject: "项目",
                        onSelectAll: ee
                    }, {
                        default: t(() => [ e(f, {
                            type: "primary",
                            onClick: ue
                        }, {
                            default: t(() => [ Z, i("资源设置 ") ]),
                            _: 1
                        }), e(f, {
                            type: "danger",
                            onClick: pe
                        }, {
                            default: t(() => [ e(j, {
                                icon: "svg-icon:delete",
                                class: "mr-5px"
                            }), i("删除 ") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "select-list", "page-list" ]) ]),
                    _: 1
                }), e(ta, {
                    ref_key: "resourceSettingDialogRef",
                    ref: h,
                    onSuccess: _
                }, null, 512) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-a28cfbac" ] ]);
});

export {
    ma as __tla,
    re as default
};