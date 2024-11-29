import {
    p as G,
    e as I,
    w as K,
    r as m,
    o as i,
    C as d,
    l as t,
    k as l,
    v as w,
    t as L,
    A as M,
    a as o,
    c as U,
    B as P,
    H as N,
    D as V,
    n as O,
    _ as Q,
    J as W,
    ad as X,
    P as Y,
    ak as Z,
    ae as aa,
    aU as ea,
    a9 as ta,
    __tla as la
} from "./index-6c08ea4c.js";

import {
    _ as ra,
    __tla as ia
} from "./index-13c88727.js";

import {
    d as sa,
    __tla as oa
} from "./formatTime-de6f1520.js";

import {
    f as na,
    h as ua,
    j as da,
    k as ca,
    l as pa,
    __tla as ma
} from "./index-7c75bd27.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let T, wa = Promise.all([ (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})() ]).then(async () => {
    let g, x, C;
    g = {
        class: "py-3 pl-10px"
    }, x = {
        key: 0
    }, C = {
        key: 0
    }, T = {
        __name: "TypeSetting",
        props: {
            modelValue: {
                default: !1,
                type: Boolean
            }
        },
        emits: [ "update:modelValue", "refresh" ],
        setup(j, {
            emit: B
        }) {
            const r = G(), D = j, b = B, f = I({
                get: () => D.modelValue,
                set: () => {
                    b("update:modelValue");
                }
            });
            K(() => f.value, y => {
                y ? (s.value = !1, c()) : b("refresh");
            });
            const s = m(!1), R = m("组织类别设置"), S = m(!1), _ = m([]), h = m();
            function c() {
                na().then(y => {
                    _.value = y || [];
                });
            }
            function $() {
                o(s) ? r.warning("请先保存处于编辑中的数据！") : (s.value = !0, _.value.push({
                    isEdit: !0,
                    name: "",
                    remark: "",
                    status: 0,
                    type: 2
                }), o(h) && O(() => {
                    o(h).setScrollTop(1e4);
                }));
            }
            return (y, k) => {
                const z = ra, A = Q, p = W, n = X, E = Y, H = Z, J = aa, q = ea, F = ta;
                return i(), d(q, {
                    modelValue: f.value,
                    "onUpdate:modelValue": k[1] || (k[1] = a => f.value = a),
                    title: o(R),
                    width: "1000px"
                }, {
                    footer: t(() => [ l(p, {
                        onClick: k[0] || (k[0] = a => f.value = !1)
                    }, {
                        default: t(() => [ w("返 回") ]),
                        _: 1
                    }) ]),
                    default: t(() => [ l(z, {
                        title: "系统内置组织类别存在上下层级关系（参照列表排序），租户创建组织机构时可自由选用，但不可向上越级使用"
                    }), L("div", g, [ l(p, {
                        link: "",
                        type: "primary",
                        onClick: $
                    }, {
                        default: t(() => [ l(A, {
                            icon: "ep:circle-plus-filled",
                            class: "mr-4px"
                        }), w(" 新增组织类别 ") ]),
                        _: 1
                    }) ]), M((i(), d(J, {
                        data: o(_),
                        height: "400px",
                        ref_key: "tableRef",
                        ref: h
                    }, {
                        default: t(() => [ l(n, {
                            label: "序号",
                            type: "index",
                            width: "60"
                        }), l(n, {
                            label: "类别名称",
                            prop: "name",
                            width: "160"
                        }, {
                            default: t(a => [ a.row.isEdit ? (i(), d(E, {
                                key: 1,
                                modelValue: a.row.name,
                                "onUpdate:modelValue": u => a.row.name = u,
                                maxlength: "5",
                                placeholder: "请输入",
                                "show-word-limit": ""
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : (i(), 
                            U("span", x, P(a.row.name), 1)) ]),
                            _: 1
                        }), l(n, {
                            label: "备注",
                            prop: "remark",
                            width: "260"
                        }, {
                            default: t(a => [ a.row.isEdit && a.row.type !== 1 ? (i(), 
                            d(E, {
                                key: 1,
                                modelValue: a.row.remark,
                                "onUpdate:modelValue": u => a.row.remark = u,
                                maxlength: "20",
                                placeholder: "请输入",
                                "show-word-limit": ""
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : (i(), 
                            U("span", C, P(a.row.remark), 1)) ]),
                            _: 1
                        }), l(n, {
                            label: "状态",
                            prop: "status",
                            "min-width": "56px",
                            align: "center"
                        }, {
                            default: t(a => [ l(H, {
                                size: "small",
                                "model-value": a.row.status,
                                "active-value": 0,
                                "inactive-value": 1,
                                onClick: N(u => async function(e) {
                                    if (e.isEdit) e.status = e.status === 1 ? 0 : 1; else {
                                        if (e.code === "000000") return void r.warning("“学校” 状态不可编辑！");
                                        try {
                                            let v = e.status === 1 ? "启用" : "停用";
                                            await r.confirm("确认要" + v + `\u201C${e.name}\u201D\u5417?`), 
                                            await ca({
                                                id: e.id,
                                                status: e.status === 1 ? 0 : 1
                                            }), r.success("操作成功"), await c();
                                        } catch {}
                                    }
                                }(a.row), [ "stop" ])
                            }, null, 8, [ "model-value", "onClick" ]) ]),
                            _: 1
                        }), l(n, {
                            label: "创建人",
                            prop: "creator",
                            "min-width": "90px"
                        }), l(n, {
                            formatter: o(sa),
                            align: "center",
                            label: "创建时间",
                            prop: "createTime",
                            width: "180"
                        }, null, 8, [ "formatter" ]), l(n, {
                            label: "操作",
                            width: "120px",
                            fixed: "right",
                            align: "center"
                        }, {
                            default: t(a => [ a.row.isEdit ? V("", !0) : (i(), d(p, {
                                key: 0,
                                link: "",
                                type: "primary",
                                onClick: u => {
                                    return e = a.row, void (o(s) ? r.warning("请先保存处于编辑中的数据！") : (s.value = !0, 
                                    e.isEdit = !0));
                                    var e;
                                }
                            }, {
                                default: t(() => [ w(" 编辑 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), a.row.isEdit ? (i(), d(p, {
                                key: 1,
                                link: "",
                                type: "primary",
                                onClick: u => async function(e) {
                                    if (e.name) try {
                                        e.id ? (await ua(e), r.success("操作成功"), 
                                        c()) : (await da(e), r.success("操作成功"), 
                                        c()), e.isEdit = !1, s.value = !1;
                                    } catch {} else r.warning("类别名称必填!");
                                }(a.row)
                            }, {
                                default: t(() => [ w(" 保存 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : V("", !0), a.row.type !== 1 ? (i(), 
                            d(p, {
                                key: 2,
                                link: "",
                                type: "danger",
                                onClick: u => async function(e) {
                                    if (e.id) try {
                                        let v = "删除";
                                        await r.delConfirm("确认要" + v + `\u201C${e.name}\u201D\u5417?`), 
                                        await pa(e.id), r.success("操作成功"), await c(), 
                                        s.value = !1;
                                    } catch {} else _.value.pop(), s.value = !1;
                                }(a.row)
                            }, {
                                default: t(() => [ w(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : V("", !0) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ F, o(S) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    };
});

export {
    wa as __tla,
    T as default
};