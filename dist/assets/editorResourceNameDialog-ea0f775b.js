import {
    r,
    o as E,
    C as N,
    l as s,
    k as o,
    a as n,
    t as v,
    v as f,
    m as U,
    bo as P,
    P as R,
    O as q,
    Q as z,
    J as F,
    aU as J,
    __tla as O
} from "./index-6c08ea4c.js";

import {
    k as Q,
    __tla as j
} from "./pkgManage-14933852.js";

let x, A = Promise.all([ (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return j;
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
    }, x = {
        __name: "editorResourceNameDialog",
        emits: [ "editorNameDone" ],
        setup(B, {
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
                    validator: (e, a, u) => {
                        /[\\\/]/.test(a) ? u(new Error("文件名不可以包含\\和/字符")) : u();
                    },
                    trigger: "blur"
                } ]
            }), k = y, V = () => {
                i.value.validate(e => {
                    e && Q({
                        id: m.value.id,
                        name: l.value.name + (m.value.resExt || "")
                    }).then(a => {
                        P({
                            message: "操作成功",
                            type: "success"
                        }), k("editorNameDone", {
                            oldData: m.value,
                            name: l.value.name
                        }), _();
                    });
                });
            }, _ = () => {
                i.value.resetFields(), t.value = !1;
            };
            return b({
                open: e => {
                    m.value = e, l.value.name = e.name.replace(e.resExt, ""), t.value = !0;
                }
            }), (e, a) => {
                const u = R, D = q, w = z, g = F, C = J;
                return E(), N(C, {
                    modelValue: n(t),
                    "onUpdate:modelValue": a[1] || (a[1] = d => U(t) ? t.value = d : null),
                    title: "编辑资料",
                    width: "600px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: s(() => [ o(w, {
                        ref_key: "formRef",
                        ref: i,
                        "label-position": "top",
                        "label-width": "90px",
                        model: n(l),
                        rules: n(h)
                    }, {
                        default: s(() => [ o(D, {
                            prop: "name",
                            label: "资料名称"
                        }, {
                            default: s(() => [ o(u, {
                                modelValue: n(l).name,
                                "onUpdate:modelValue": a[0] || (a[0] = d => n(l).name = d),
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
                        default: s(() => [ f("取消") ]),
                        _: 1
                    }), o(g, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: V
                    }, {
                        default: s(() => [ f("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    };
});

export {
    A as __tla,
    x as default
};