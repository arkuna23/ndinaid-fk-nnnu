import {
    d as U,
    r as l,
    p as V,
    o as d,
    c as A,
    a as p,
    k as e,
    l as t,
    t as v,
    v as o,
    C as H,
    D as W,
    bo as X,
    _ as Y,
    J as Z,
    ad as $,
    ae as ee,
    __tla as te
} from "./index-6c08ea4c.js";

import {
    _ as ae,
    __tla as re
} from "./index-71666e05.js";

import {
    _ as le,
    __tla as oe
} from "./ContentPage-f6bcc98e.js";

import {
    _ as se,
    __tla as ce
} from "./index-e2094cc0.js";

import {
    _ as ne,
    __tla as _e
} from "./index-8b41572c.js";

import {
    _ as ie,
    __tla as me
} from "./index-1024512a.js";

import {
    t as pe
} from "./formatter-7ecf379a.js";

import ue, {
    __tla as de
} from "./addTechDirection-ffb5db5c.js";

import fe, {
    __tla as he
} from "./techDetails-6080142a.js";

import {
    d as ye,
    s as we,
    a as ve,
    __tla as ge
} from "./techDirectionManage-e96d2dc4.js";

import {
    d as be,
    __tla as ke
} from "./formatTime-de6f1520.js";

import {
    a as Ce,
    b as De,
    E as xe,
    __tla as Se
} from "./index-5adb716b.js";

import {
    _ as Ie
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ne
} from "./DeptTag-1be092ce.js";

import {
    __tla as Re
} from "./index-ef4d146e.js";

let L, Te = Promise.all([ (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return ge;
    } catch {}
})(), (() => {
    try {
        return ke;
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
        return Re;
    } catch {}
})() ]).then(async () => {
    let g, b, k, C;
    g = {
        key: 0
    }, b = {
        class: "top-box"
    }, k = {
        class: "right btns-box header-btns"
    }, C = {
        class: "page-empty w-100%"
    }, L = Ie(U({
        __name: "index",
        setup(ze) {
            const f = l([ {} ]), D = l(), x = l(), h = l(), B = V(), y = l({
                techName: ""
            }), S = l(0), u = l([]), w = (a, r) => pe(a[r.property]), E = a => {
                u.value = a.map(r => r.techId);
            }, I = () => {
                D.value.openDialog();
            }, N = async ({
                source: a,
                rowData: r
            }) => {
                let _ = "", s = "该操作会删除该技术方向，请确认是否执行？";
                (0, {
                    button: () => {
                        _ = u.value.join(), s = "该操作会删除这些技术方向，请确认是否执行？";
                    },
                    row: () => {
                        _ = r == null ? void 0 : r.techId;
                    },
                    default: () => {}
                }[a])(), await B.delConfirm(s, "提示"), ye(_).then(() => {
                    X({
                        type: "success",
                        message: "删除成功",
                        duration: 2e3
                    }), u.value = [], n({});
                });
            }, R = () => {
                we().then(() => {
                    n({});
                });
            }, n = a => {
                y.value.techName = (a == null ? void 0 : a.techName) ?? "", ve({
                    ...y.value
                }).then(r => {
                    f.value = r || [], y.value.techName || (S.value = r.length);
                });
            }, G = a => {
                a ? h.value.toggleAllSelection() : h.value.clearSelection();
            }, J = a => {
                switch (a) {
                  case "add":
                    I();
                    break;

                  case "sync":
                    R();
                }
            };
            return n({}), (a, r) => {
                const _ = ie, s = Y, i = Z, c = $, M = ee, P = ne, q = se, T = le, F = ae, z = Ce, K = De, O = xe;
                return d(), A("div", null, [ p(S) > 0 ? (d(), A("div", g, [ e(T, {
                    class: "cont-box"
                }, {
                    default: t(() => [ v("div", b, [ e(_, {
                        ref: "ComSearchRef",
                        keywordsInfo: {
                            label: "技术方向名称",
                            key: "techName"
                        },
                        onHandleSearch: n,
                        class: "left"
                    }, null, 512), v("div", k, [ e(i, {
                        type: "primary",
                        plain: "",
                        onClick: I,
                        size: "large"
                    }, {
                        default: t(() => [ e(s, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), o("新增 ") ]),
                        _: 1
                    }), e(i, {
                        type: "success",
                        plain: "",
                        onClick: R,
                        size: "large"
                    }, {
                        default: t(() => [ e(s, {
                            icon: "ep:refresh",
                            class: "mr-5px"
                        }), o("同步 ") ]),
                        _: 1
                    }) ]) ]), e(P, {
                        class: "center-box",
                        "no-pager": !1,
                        "outer-height": 61
                    }, {
                        default: t(() => [ e(M, {
                            ref_key: "DirectionTableRef",
                            ref: h,
                            data: p(f),
                            height: "100%",
                            onSelectionChange: E
                        }, {
                            default: t(() => [ e(c, {
                                type: "selection",
                                width: "55"
                            }), e(c, {
                                prop: "techName",
                                label: "技术方向",
                                "min-width": "200",
                                "show-overflow-tooltip": "",
                                formatter: w
                            }), e(c, {
                                prop: "techCode",
                                label: "代码",
                                formatter: w,
                                "min-width": "140"
                            }), e(c, {
                                prop: "createTime",
                                label: "创建时间",
                                formatter: p(be),
                                "min-width": "140"
                            }, null, 8, [ "formatter" ]), e(c, {
                                prop: "remark",
                                label: "备注",
                                "show-overflow-tooltip": "",
                                "min-width": "100",
                                formatter: w
                            }), e(c, {
                                label: "操作",
                                width: "160",
                                align: "center"
                            }, {
                                default: t(m => [ m.row.resType != 0 && m.row.resType != 6 ? (d(), 
                                H(i, {
                                    key: 0,
                                    type: "primary",
                                    size: "small",
                                    onClick: Q => {
                                        return j = m.row, void x.value.openDialog(j.techId);
                                        var j;
                                    },
                                    link: ""
                                }, {
                                    default: t(() => [ o(" 查看 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])) : W("", !0), e(i, {
                                    type: "danger",
                                    size: "small",
                                    link: "",
                                    onClick: Q => N({
                                        source: "row",
                                        rowData: m.row
                                    })
                                }, {
                                    default: t(() => [ o(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }), e(q, {
                        ref: "SelectionButtonGroupRef",
                        "select-list": p(u),
                        "page-list": p(f),
                        btnList: [ "delete" ],
                        subject: "技术方向",
                        onDelete: r[0] || (r[0] = m => N({
                            source: "button",
                            rowData: {}
                        })),
                        onSelectAll: G
                    }, null, 8, [ "select-list", "page-list" ]) ]),
                    _: 1
                }) ])) : (d(), H(T, {
                    key: 1,
                    class: "cont-box"
                }, {
                    default: t(() => [ v("div", C, [ e(F, {
                        type: "resource",
                        msg: "暂无资源"
                    }), e(O, {
                        teleported: !1,
                        class: "empty-dropdown",
                        onCommand: J
                    }, {
                        dropdown: t(() => [ e(K, null, {
                            default: t(() => [ e(z, {
                                command: "add"
                            }, {
                                default: t(() => [ o("新建") ]),
                                _: 1
                            }), e(z, {
                                command: "sync"
                            }, {
                                default: t(() => [ o("同步") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        default: t(() => [ e(i, {
                            type: "primary",
                            size: "large"
                        }, {
                            default: t(() => [ o(" 操作 "), e(s, {
                                class: "el-icon--right",
                                icon: "ep:arrow-down",
                                style: {
                                    "margin-left": "5px"
                                }
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                })), e(ue, {
                    ref_key: "addTechDirectionRef",
                    ref: D,
                    onRefresh: n
                }, null, 512), e(fe, {
                    ref_key: "techDetailsRef",
                    ref: x
                }, null, 512) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-f60e4954" ] ]);
});

export {
    Te as __tla,
    L as default
};