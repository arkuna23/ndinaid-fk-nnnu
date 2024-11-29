import {
    h as K,
    p as Q,
    T as W,
    a0 as X,
    r as i,
    f as Y,
    e as N,
    j as Z,
    o as _,
    C as w,
    l,
    k as o,
    v as h,
    t as V,
    A as c,
    a as d,
    G as U,
    B as T,
    m as $,
    _ as aa,
    J as ea,
    ad as ta,
    P as la,
    ak as oa,
    ae as sa,
    aU as ra,
    bo as na,
    E as ia,
    __tla as ca
} from "./index-6c08ea4c.js";

import {
    _ as da,
    __tla as ua
} from "./index-8b41572c.js";

import {
    _ as ma,
    __tla as pa
} from "./index-13c88727.js";

import {
    a8 as _a,
    a9 as wa,
    aa as ha,
    ab as fa,
    __tla as ya
} from "./index-9567cbf6.js";

import {
    f as va,
    __tla as ga
} from "./formatTime-de6f1520.js";

import {
    _ as ka
} from "./_plugin-vue_export-helper-1b428a4d.js";

let B, ba = Promise.all([ (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})() ]).then(async () => {
    let x;
    x = {
        class: "mb-4 mt-4"
    }, B = ka({
        __name: "courseCategory",
        props: {
            teachInfo: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "refreshList" ],
        setup(z, {
            expose: j,
            emit: P
        }) {
            const I = K(), L = z, S = Q();
            W(), X(L);
            const u = i(!1), O = i("课程类别设置"), R = P;
            Y(() => {});
            const k = () => {
                u.value = !1, R("refreshList");
            };
            i(null), i(null);
            const m = i([]), E = N(() => m.value.filter(e => e.showSave).length > 0), G = () => {
                m.value.push({
                    name: "",
                    status: 0,
                    showSave: !0,
                    creatorName: I.getUser.nickname
                });
            }, J = i(null), f = ({
                type: e,
                row: s
            }) => {
                const {
                    name: p
                } = s;
                (0, {
                    edit: () => {
                        s.showSave = e === "edit";
                    },
                    save: async ({
                        row: t
                    }) => {
                        p !== "" ? (t.id ? await q({
                            ...t
                        }) : await (async ({
                            name: r,
                            status: b,
                            creatorName: C
                        }) => {
                            await fa({
                                id: "",
                                name: r,
                                status: b,
                                creatorName: C
                            });
                        })({
                            ...t
                        }), t.showSave = e === "edit", y()) : na.warning("课程类别名称必填！");
                    },
                    del: ({
                        row: t
                    }) => {
                        if (!t.id) return S.success("删除成功"), void y();
                        ia.confirm("确定删除当前课程类别？", "提示", {
                            confirmButtonText: "确 认",
                            cancelButtonText: "取 消"
                        }).then(async () => {
                            await A(t.id), S.success("删除成功"), y();
                        });
                    },
                    default: () => {}
                }[e])({
                    row: s
                });
            }, M = N(() => m.value.filter(e => e.showSave).length > 0), q = async ({
                id: e,
                name: s,
                status: p,
                creatorName: v
            }) => {
                await wa({
                    id: e,
                    name: s,
                    status: p,
                    creatorName: v
                });
            }, A = async e => {
                await ha({
                    id: e
                });
            }, y = async () => {
                const e = await _a({
                    name: "",
                    status: ""
                });
                m.value = e;
            };
            return j({
                handleOpen: () => {
                    u.value = !0, y();
                },
                handleClose: k
            }), (e, s) => {
                const p = ma, v = aa, t = ea, r = ta, b = la, C = oa, D = sa, F = da, H = ra, g = Z("hasPermi");
                return _(), w(H, {
                    modelValue: d(u),
                    "onUpdate:modelValue": s[0] || (s[0] = a => $(u) ? u.value = a : null),
                    width: "1000px",
                    "close-on-click-modal": !1,
                    onClose: k,
                    appendToBody: !0,
                    title: d(O)
                }, {
                    footer: l(() => [ o(t, {
                        size: "large",
                        onClick: k
                    }, {
                        default: l(() => [ h("返 回") ]),
                        _: 1
                    }) ]),
                    default: l(() => [ o(p, {
                        title: "课程类别是为方便租户统一科学的进行课程分类管理，使用后不可删除"
                    }), V("div", x, [ c((_(), w(t, {
                        type: "primary",
                        plain: "",
                        link: "",
                        disabled: d(E),
                        onClick: G
                    }, {
                        default: l(() => [ o(v, {
                            icon: "ep:circle-plus-filled",
                            size: 16,
                            class: "icon-import mr-1"
                        }), h(" 新增课程类别 ") ]),
                        _: 1
                    }, 8, [ "disabled" ])), [ [ g, [ "teachmanager:course-category:create" ] ] ]) ]), o(F, {
                        class: "center-box",
                        "no-pager": !0
                    }, {
                        default: l(() => [ o(D, {
                            ref: "tableRef",
                            data: d(m),
                            height: "calc(100%)"
                        }, {
                            default: l(() => [ o(r, {
                                type: "index",
                                label: "序号",
                                width: "52"
                            }), o(r, {
                                label: "类别名称",
                                prop: "id",
                                "show-overflow-tooltip": ""
                            }, {
                                default: l(a => [ c(o(b, {
                                    modelValue: a.row.name,
                                    "onUpdate:modelValue": n => a.row.name = n,
                                    modelModifiers: {
                                        trim: !0
                                    },
                                    ref_key: "rowRef",
                                    ref: J,
                                    maxlength: "10",
                                    placeholder: "请输入课程类别名称"
                                }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), [ [ U, a.row.showSave ] ]), c(V("p", {
                                    class: "course-category-name"
                                }, T(a.row.name), 513), [ [ U, !a.row.showSave ] ]) ]),
                                _: 1
                            }), o(r, {
                                label: "启用状态",
                                prop: "status"
                            }, {
                                default: l(a => [ o(C, {
                                    modelValue: a.row.status,
                                    "onUpdate:modelValue": n => a.row.status = n,
                                    class: "ml-2",
                                    size: "small",
                                    "active-value": 0,
                                    "inactive-value": 1,
                                    "active-color": "#13ce66",
                                    onChange: n => f({
                                        type: "save",
                                        row: a.row
                                    })
                                }, null, 8, [ "modelValue", "onUpdate:modelValue", "onChange" ]) ]),
                                _: 1
                            }), o(r, {
                                label: "创建人",
                                prop: "creatorName",
                                width: "180"
                            }), o(r, {
                                label: "创建时间",
                                prop: "createTime",
                                width: "180",
                                "show-overflow-tooltip": ""
                            }, {
                                default: l(a => [ V("span", null, T(d(va)(a.row.createTime)), 1) ]),
                                _: 1
                            }), o(r, {
                                label: "操作",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: l(a => [ a.row.showSave ? c((_(), w(t, {
                                    key: 1,
                                    link: "",
                                    type: "primary",
                                    onClick: n => f({
                                        type: "save",
                                        row: a.row
                                    })
                                }, {
                                    default: l(() => [ h(" 保存 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ g, [ "teachmanager:course-category:create" ] ] ]) : c((_(), 
                                w(t, {
                                    key: 0,
                                    link: "",
                                    type: "primary",
                                    onClick: n => f({
                                        type: "edit",
                                        row: a.row
                                    }),
                                    disabled: d(M)
                                }, {
                                    default: l(() => [ h(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick", "disabled" ])), [ [ g, [ "teachmanager:course-category:update" ] ] ]), c((_(), 
                                w(t, {
                                    link: "",
                                    type: "danger",
                                    onClick: n => f({
                                        type: "del",
                                        row: a.row
                                    })
                                }, {
                                    default: l(() => [ h(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ g, [ "teachmanager:course-category:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a0b19a2b" ] ]);
});

export {
    ba as __tla,
    B as default
};