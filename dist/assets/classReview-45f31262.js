import {
    _ as la,
    __tla as ra
} from "./ContentPage-f6bcc98e.js";

import {
    _ as oa,
    __tla as sa
} from "./index-e2094cc0.js";

import {
    _ as pa,
    __tla as ia
} from "./index-c4ca0ced.js";

import {
    _ as ca,
    __tla as na
} from "./index-8b41572c.js";

import {
    T as _a,
    u as ua,
    p as da,
    U as x,
    r as i,
    e as z,
    f as ma,
    j as ha,
    o as E,
    c as fa,
    k as t,
    l as c,
    t as b,
    a as r,
    v as H,
    B as va,
    A as ya,
    C as wa,
    D as ga,
    F as ba,
    ad as Sa,
    L as ka,
    J as Ca,
    ae as Na,
    __tla as Ra
} from "./index-6c08ea4c.js";

import {
    _ as Ia,
    __tla as Aa
} from "./index-1024512a.js";

import La, {
    __tla as xa
} from "./addTeach-52c31c64.js";

import {
    m as za,
    n as Ea,
    __tla as Ha
} from "./index-cfc63ccf.js";

import {
    d as T,
    __tla as Ta
} from "./formatTime-de6f1520.js";

import {
    t as O,
    __tla as Oa
} from "./file-e038b35d.js";

import {
    _ as Ba
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ja
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Pa
} from "./DeptTag-1be092ce.js";

import {
    __tla as ja
} from "./index-ef4d146e.js";

import {
    __tla as Da
} from "./index-13c88727.js";

import {
    __tla as Ua
} from "./index-9567cbf6.js";

let B, qa = Promise.all([ (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return Ra;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return xa;
    } catch {}
})(), (() => {
    try {
        return Ha;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})() ]).then(async () => {
    let S, k, C;
    S = {
        class: "top-box"
    }, k = {
        class: "content"
    }, C = {
        class: "bottom-box"
    }, B = Ba({
        __name: "classReview",
        setup(Fa) {
            const N = _a(), J = ua(), P = da(), j = () => {
                J.back(), R();
            }, R = () => {
                Object.keys(_).forEach(a => _[a] = ""), p.pageNo = 1, p.pageSize = 10;
            }, f = [ {
                value: 1,
                label: "待审核",
                type: "warning"
            }, {
                value: 2,
                label: "审核通过",
                type: "primary"
            }, {
                value: 3,
                label: "审核未通过",
                type: "danger"
            } ], D = [ {
                label: "审核状态",
                key: "approvalStatus",
                type: "list",
                options: f
            } ], p = x({
                pageNo: 1,
                pageSize: 10
            }), U = i(!1);
            z(() => u.value.length > 0);
            const u = i([]), q = a => {
                u.value = a, U.value = a.length === n.value.length;
            }, d = i(null), F = a => {
                var e;
                a !== !1 ? a.value ? d.value.clearSelection() : (e = n.value) == null || e.forEach(o => {
                    d.value.toggleAllSelection();
                }) : d.value.clearSelection();
            }, G = z(() => u.value.map(a => a.id)), v = i({}), y = i(""), w = i(null), I = ({
                type: a,
                source: e,
                title: o,
                row: l
            }) => {
                v.value = JSON.parse(JSON.stringify(l)), y.value = e, w.value.handleOpen({
                    type: a,
                    title: o
                });
            }, K = async ({
                params: a
            }) => {
                let e = [];
                const o = {
                    operate: () => {
                        var h;
                        e = [ (h = v.value) == null ? void 0 : h.id ];
                    },
                    selected: () => {
                        e = G.value;
                    },
                    default: () => {}
                };
                await (o[y.value] || o.default)(), await M({
                    params: a,
                    ids: e
                }), P.success("操作成功"), w.value.handleClose(), y.value = "", m();
            }, M = async ({
                params: a,
                ids: e
            }) => {
                const {
                    approvalStatus: o,
                    approvalRemark: l
                } = a;
                return await za({
                    idSet: e,
                    approvalStatus: o,
                    approvalRemark: l,
                    teachClassId: N.params.teachClassId
                });
            }, n = i([]), Q = ({
                key: a,
                id: e,
                row: o
            }) => {
                I({
                    type: a,
                    source: "selected",
                    title: "入班审核",
                    row: {}
                });
            }, A = i(0), m = async () => {
                const a = await Ea({
                    pageNo: p.pageNo,
                    pageSize: p.pageSize,
                    teachClassId: N.params.teachClassId,
                    ..._
                });
                n.value = a == null ? void 0 : a.list, A.value = (a == null ? void 0 : a.total) || 0;
            }, _ = x({
                searchReq: "",
                approvalStatus: ""
            }), V = a => {
                Object.keys(_).forEach(e => _[e] = a[e]), m();
            }, W = [ {
                key: "review",
                label: "审核",
                type: "primary",
                icon: "ep:promotion"
            } ];
            return ma(() => {
                m();
            }), (a, e) => {
                const o = Ia, l = Sa, h = ka, X = Ca, Y = Na, Z = ca, $ = pa, aa = oa, ta = la, ea = ha("hasPermi");
                return E(), fa(ba, null, [ t(ta, {
                    class: "course-teaching",
                    title: "入班审核",
                    onRouterBack: j,
                    noPadding: !0,
                    noBgColor: !0
                }, {
                    default: c(() => [ b("div", S, [ t(o, {
                        searchList: D,
                        onHandleSearch: V,
                        onHandleReset: R,
                        class: "left",
                        keywordsInfo: {
                            key: "searchReq",
                            label: "学生姓名/学号/工号"
                        }
                    }) ]), b("div", k, [ t(Z, {
                        class: "center-box",
                        "no-pager": !1
                    }, {
                        default: c(() => [ t(Y, {
                            ref_key: "tableRef",
                            ref: d,
                            data: r(n),
                            height: "calc(100%)",
                            onSelectionChange: q
                        }, {
                            default: c(() => [ t(l, {
                                type: "selection"
                            }), t(l, {
                                type: "index",
                                label: "序号",
                                width: "52"
                            }), t(l, {
                                label: "姓名",
                                prop: "stuName",
                                "show-overflow-tooltip": ""
                            }), t(l, {
                                label: "学号/工号",
                                prop: "stuNumber",
                                width: "100",
                                "show-overflow-tooltip": ""
                            }), t(l, {
                                label: "所属末级组织",
                                prop: "stuDeptName",
                                width: "180",
                                "show-overflow-tooltip": ""
                            }), t(l, {
                                label: "申请加入教学班级",
                                prop: "teachClassName",
                                width: "180",
                                "show-overflow-tooltip": ""
                            }), t(l, {
                                label: "入班方式",
                                prop: "addType",
                                "show-overflow-tooltip": ""
                            }), t(l, {
                                label: "申请时间",
                                prop: "createTime",
                                formatter: r(T),
                                "show-overflow-tooltip": "",
                                width: "180"
                            }, null, 8, [ "formatter" ]), t(l, {
                                label: "审核状态",
                                width: "110",
                                "show-overflow-tooltip": ""
                            }, {
                                default: c(s => {
                                    var g;
                                    return [ t(h, {
                                        class: "distribute",
                                        type: (g = r(O)({
                                            list: f,
                                            listAttrCode: "value",
                                            rawAttrCode: s.row.approvalStatus
                                        })) == null ? void 0 : g.type
                                    }, {
                                        default: c(() => {
                                            var L;
                                            return [ H(va((L = r(O)({
                                                list: f,
                                                listAttrCode: "value",
                                                rawAttrCode: s.row.approvalStatus
                                            })) == null ? void 0 : L.label), 1) ];
                                        }),
                                        _: 2
                                    }, 1032, [ "type" ]) ];
                                }),
                                _: 1
                            }), t(l, {
                                label: "审核意见",
                                prop: "approvalRemark",
                                "show-overflow-tooltip": ""
                            }), t(l, {
                                label: "审核时间",
                                prop: "approvalTime",
                                formatter: r(T),
                                "show-overflow-tooltip": "",
                                width: "180"
                            }, null, 8, [ "formatter" ]), t(l, {
                                label: "操作",
                                width: "100",
                                fixed: "right"
                            }, {
                                default: c(s => [ s.row.approvalStatus === 1 ? ya((E(), 
                                wa(X, {
                                    key: 0,
                                    link: "",
                                    type: "primary",
                                    onClick: g => I({
                                        type: "review",
                                        source: "operate",
                                        title: "入班审核",
                                        row: s.row
                                    })
                                }, {
                                    default: c(() => [ H(" 审核 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ ea, [ "teachmanager:teach-class-student-approval:update" ] ] ]) : ga("", !0) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }), b("div", C, [ t($, {
                        limit: r(p).pageSize,
                        "onUpdate:limit": e[0] || (e[0] = s => r(p).pageSize = s),
                        page: r(p).pageNo,
                        "onUpdate:page": e[1] || (e[1] = s => r(p).pageNo = s),
                        total: r(A),
                        onPagination: m
                    }, null, 8, [ "limit", "page", "total" ]) ]) ]), t(aa, {
                        ref: "SelectionButtonGroupRef",
                        selectList: r(u),
                        pageList: r(n),
                        btnInfoList: W,
                        onSelectAll: F,
                        onHandleEvent: Q
                    }, null, 8, [ "selectList", "pageList" ]) ]),
                    _: 1
                }), t(La, {
                    ref_key: "addTeachRef",
                    ref: w,
                    teachInfo: r(v),
                    onHandleData: K
                }, null, 8, [ "teachInfo" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-556d2b79" ] ]);
});

export {
    qa as __tla,
    B as default
};