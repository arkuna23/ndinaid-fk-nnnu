import {
    r,
    o as C,
    C as N,
    l as s,
    k as o,
    a as n,
    t as v,
    v as x,
    m as U,
    bo as O,
    P,
    O as R,
    Q as q,
    J as z,
    aU as F,
    __tla as I
} from "./index-6c08ea4c.js";

import {
    O as J,
    __tla as Q
} from "./index-9567cbf6.js";

let f, j = Promise.all([ (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return Q;
    } catch {}
})() ]).then(async () => {
    let p, c;
    p = v("div", {
        style: {
            "font-size": "12px",
            "padding-left": "10px"
        }
    }, "说明：如该资料是从个人/校本资源库或课程资源包中选择，本次修改将不会影响原始文件名称", -1), c = {
        style: {
            "text-align": "center",
            margin: "40px 0 20px 0"
        }
    }, f = {
        __name: "editorResourceNameDialog",
        emits: [ "editorNameDone" ],
        setup(A, {
            expose: b,
            emit: y
        }) {
            const t = r(!1), i = r(), m = r(null), l = r({
                name: ""
            }), h = r({
                name: [ {
                    required: !0,
                    message: "资料名称不能为空",
                    trigger: "blur"
                }, {
                    max: 100,
                    message: "资料名称最多100位字符",
                    trigger: "blur"
                }, {
                    validator: (a, e, u) => {
                        /[\\\/]/.test(e) ? u(new Error("文件名不可以包含\\和/字符")) : u();
                    },
                    trigger: "blur"
                } ]
            }), E = y, V = () => {
                i.value.validate(a => {
                    a && J({
                        resId: m.value.id,
                        name: l.value.name + (m.value.resExt || "")
                    }).then(e => {
                        O({
                            message: "操作成功",
                            type: "success"
                        }), E("editorNameDone", {
                            oldData: m.value,
                            name: l.value.name
                        }), _();
                    });
                });
            }, _ = () => {
                i.value.resetFields(), t.value = !1;
            };
            return b({
                open: a => {
                    m.value = a;
                    let e = "";
                    a.resExt == null || a.resExt == null || (e = a.resExt), l.value.name = a.name.replace(e, ""), 
                    t.value = !0;
                }
            }), (a, e) => {
                const u = P, k = R, D = q, g = z, w = F;
                return C(), N(w, {
                    modelValue: n(t),
                    "onUpdate:modelValue": e[1] || (e[1] = d => U(t) ? t.value = d : null),
                    title: "编辑资料",
                    width: "600px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: s(() => [ o(D, {
                        ref_key: "formRef",
                        ref: i,
                        "label-position": "top",
                        "label-width": "90px",
                        model: n(l),
                        rules: n(h)
                    }, {
                        default: s(() => [ o(k, {
                            prop: "name",
                            label: "资料名称"
                        }, {
                            default: s(() => [ o(u, {
                                modelValue: n(l).name,
                                "onUpdate:modelValue": e[0] || (e[0] = d => n(l).name = d),
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), p, v("div", c, [ o(g, {
                        style: {
                            "margin-right": "20px"
                        },
                        onClick: _
                    }, {
                        default: s(() => [ x("取消") ]),
                        _: 1
                    }), o(g, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: V
                    }, {
                        default: s(() => [ x("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    };
});

export {
    j as __tla,
    f as default
};