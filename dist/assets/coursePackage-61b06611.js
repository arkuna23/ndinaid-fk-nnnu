import {
    T as J,
    p as O,
    r as u,
    U as Q,
    f as B,
    o as f,
    c as q,
    t as o,
    a as r,
    k as e,
    l as t,
    v as i,
    C as D,
    m as E,
    F as G,
    J as H,
    ad as K,
    ae as L,
    P as M,
    O as W,
    Q as X,
    aU as Y,
    R as Z,
    S as $,
    __tla as ee
} from "./index-6c08ea4c.js";

import {
    _ as ae,
    __tla as le
} from "./index-c834085f.js";

import {
    b as re,
    c as te,
    __tla as se
} from "./basicSetting-c1425caa.js";

import {
    c as oe,
    __tla as de
} from "./index-cfc63ccf.js";

import {
    _ as pe
} from "./_plugin-vue_export-helper-1b428a4d.js";

let A, me = Promise.all([ (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})() ]).then(async () => {
    let h, C, b, V, N;
    h = {
        class: "teaching-assistant-setting"
    }, C = {
        key: 0
    }, b = {
        class: "clearFix mb-10px"
    }, V = (n => (Z("data-v-23880217"), n = n(), $(), n))(() => o("div", {
        class: "tipStyle"
    }, [ o("span", {
        class: "tipIcon"
    }), i("说明：资源包生成后教师可在“个人资源库-课程资源”下查看，并可继续编辑修改（不会影响当前课程内容）；每门课程最多支持生成3个资源包，达到上限后需先删除方可再次生成，生成过程耗时较长，请耐心等待！ ") ], -1)), 
    N = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, A = pe({
        __name: "coursePackage",
        setup(n) {
            const c = J(), P = O(), _ = u([]), d = u(!1), w = u(null), l = u({
                pkgName: "",
                pkgCode: "",
                remark: ""
            }), S = Q({
                pkgName: [ {
                    required: !0,
                    message: "资源包名称不能为空",
                    trigger: "blur"
                } ],
                pkgCode: [ {
                    required: !0,
                    message: "资源包代码不能为空",
                    trigger: "blur"
                } ],
                remark: [ {
                    min: 0,
                    max: 200,
                    message: "最多支持200字符",
                    trigger: "blur"
                } ]
            }), x = u(!0), I = async (p = !1) => {
                x.value = p;
                const a = await re({
                    teachCourseId: c.params.id
                });
                _.value = a;
            }, U = async () => {
                const p = await oe({
                    id: c.params.id,
                    teachArrangementId: c.query.teachArrangementId
                });
                l.value.pkgName = p.name, l.value.pkgCode = p.code, d.value = !0;
            }, z = async () => {
                await w.value.validate(), await te({
                    teachCourseId: c.params.id,
                    pkgName: l.value.pkgName,
                    pkgCode: l.value.pkgCode,
                    remark: l.value.remark
                }), P.success("添加成功"), k(), I();
            }, k = () => {
                d.value = !1, l.value = {
                    pkgName: "",
                    pkgCode: "",
                    remark: ""
                };
            };
            return B(() => {
                I(!0);
            }), (p, a) => {
                const g = H, m = K, F = L, R = ae, v = M, y = W, T = X, j = Y;
                return f(), q(G, null, [ o("div", h, [ r(_).length > 0 || !r(x) ? (f(), 
                q("div", C, [ o("div", b, [ e(g, {
                    type: "primary",
                    size: "large",
                    class: "right",
                    onClick: a[0] || (a[0] = s => U())
                }, {
                    default: t(() => [ i(" 生成资源包 ") ]),
                    _: 1
                }) ]), o("div", null, [ e(F, {
                    data: r(_),
                    style: {
                        width: "100%"
                    }
                }, {
                    default: t(() => [ e(m, {
                        type: "index",
                        label: "序号",
                        width: "70"
                    }), e(m, {
                        prop: "pkgName",
                        label: "资源包名称"
                    }), e(m, {
                        prop: "pkgCode",
                        label: "资源包编号"
                    }), e(m, {
                        prop: "remark",
                        label: "备注"
                    }), e(m, {
                        prop: "createTimeStr",
                        label: "生成时间"
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ]) ])) : (f(), D(R, {
                    key: 1
                }, {
                    btn: t(() => [ e(g, {
                        type: "primary",
                        size: "large",
                        class: "btn-group",
                        onClick: a[1] || (a[1] = s => U())
                    }, {
                        default: t(() => [ i(" 生成资源包 ") ]),
                        _: 1
                    }) ]),
                    _: 1
                })) ]), e(j, {
                    modelValue: r(d),
                    "onUpdate:modelValue": a[5] || (a[5] = s => E(d) ? d.value = s : null),
                    title: "生成资源包",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: k
                }, {
                    default: t(() => [ V, e(T, {
                        ref_key: "formRef",
                        ref: w,
                        model: r(l),
                        rules: r(S),
                        "label-position": "top"
                    }, {
                        default: t(() => [ e(y, {
                            label: "资源包名称",
                            prop: "pkgName"
                        }, {
                            default: t(() => [ e(v, {
                                modelValue: r(l).pkgName,
                                "onUpdate:modelValue": a[2] || (a[2] = s => r(l).pkgName = s),
                                placeholder: "请输入资源包名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), e(y, {
                            label: "资源包代码",
                            prop: "pkgCode"
                        }, {
                            default: t(() => [ e(v, {
                                modelValue: r(l).pkgCode,
                                "onUpdate:modelValue": a[3] || (a[3] = s => r(l).pkgCode = s),
                                placeholder: "请输入资源包代码"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), e(y, {
                            label: "备注",
                            prop: "remark"
                        }, {
                            default: t(() => [ e(v, {
                                modelValue: r(l).remark,
                                "onUpdate:modelValue": a[4] || (a[4] = s => r(l).remark = s),
                                placeholder: "请输入"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), o("div", N, [ e(g, {
                        onClick: k
                    }, {
                        default: t(() => [ i("取消") ]),
                        _: 1
                    }), e(g, {
                        type: "primary",
                        onClick: z
                    }, {
                        default: t(() => [ i("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-23880217" ] ]);
});

export {
    me as __tla,
    A as default
};