import {
    d as x,
    r as t,
    p as C,
    j as F,
    o as U,
    c as j,
    k as a,
    l as r,
    v as _,
    a as s,
    A as P,
    m as q,
    P as w,
    O as z,
    Q as A,
    J as D,
    aU as J,
    __tla as O
} from "./index-6c08ea4c.js";

import {
    v as Q
} from "./validate-b72f006c.js";

let p, R = Promise.all([ (() => {
    try {
        return O;
    } catch {}
})() ]).then(async () => {
    p = x({
        __name: "resetName",
        setup(B, {
            expose: c
        }) {
            const m = t(), e = t(!1), i = t("新建文件夹"), o = t({
                folderName: ""
            }), f = C(), v = t({
                folderName: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: Q,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ]
            }), g = () => {
                m.value.validate(u => {
                    u ? (f.success("提交成功"), e.value = !1) : f.error("提交失败");
                });
            }, N = () => {
                o.value.folderName = "", m.value.resetFields();
            };
            return c({
                openDialog: u => {
                    e.value = !0, i.value = u.title;
                }
            }), (u, l) => {
                const h = w, y = z, V = A, n = D, b = J, k = F("trim");
                return U(), j("div", null, [ a(b, {
                    modelValue: s(e),
                    "onUpdate:modelValue": l[2] || (l[2] = d => q(e) ? e.value = d : null),
                    scroll: !0,
                    "max-height": "210",
                    title: s(i),
                    width: "420",
                    onClose: N
                }, {
                    footer: r(() => [ a(n, {
                        type: "default",
                        onClick: l[1] || (l[1] = d => e.value = !1)
                    }, {
                        default: r(() => [ _("取消") ]),
                        _: 1
                    }), a(n, {
                        type: "primary",
                        onClick: g
                    }, {
                        default: r(() => [ _("确定") ]),
                        _: 1
                    }) ]),
                    default: r(() => [ a(V, {
                        ref_key: "addFolderFormRef",
                        ref: m,
                        model: s(o),
                        rules: s(v),
                        class: "neu"
                    }, {
                        default: r(() => [ a(y, {
                            label: "资料名称/文件夹名称",
                            prop: "folderName"
                        }, {
                            default: r(() => [ P(a(h, {
                                size: "large",
                                modelValue: s(o).folderName,
                                "onUpdate:modelValue": l[0] || (l[0] = d => s(o).folderName = d),
                                placeholder: "请输入资料名称/文件夹名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ k ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    });
});

export {
    p as _,
    R as __tla
};