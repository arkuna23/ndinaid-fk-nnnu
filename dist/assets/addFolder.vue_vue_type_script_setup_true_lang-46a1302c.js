import {
    d as U,
    r,
    p as w,
    h as q,
    j as z,
    o as A,
    c as J,
    k as s,
    l as o,
    v as h,
    a as d,
    A as P,
    m as B,
    dW as D,
    P as I,
    O as Q,
    Q as R,
    J as W,
    aU as E,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    v as H
} from "./validate-b72f006c.js";

import {
    h as K,
    i as L,
    __tla as M
} from "./questionBank-6fe58de9.js";

let y, S = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})() ]).then(async () => {
    y = U({
        __name: "addFolder",
        emits: [ "refresh" ],
        setup(T, {
            expose: b,
            emit: N
        }) {
            const i = r(), f = r(!1), t = r(!1), v = r("新建文件夹"), l = r({
                folderName: ""
            }), j = N, n = w();
            q();
            const _ = r({}), V = r({
                folderName: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: H,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    max: 200,
                    message: "长度在200个字符以内",
                    trigger: "blur"
                } ]
            });
            async function p(a) {
                try {
                    await a, n.success("提交成功"), t.value = !1, j("refresh");
                } catch (e) {
                    n.error(e.msg);
                }
            }
            const k = () => {
                i.value.validate(a => {
                    if (a) {
                        const {
                            id: e,
                            release: c
                        } = _.value.fatherObj;
                        let u = {
                            folderName: l.value.folderName,
                            parentId: D(e),
                            release: c
                        };
                        f.value ? (u.id = l.value.id, p(K(u))) : p(L(u));
                    } else n.error("提交失败");
                });
            }, x = () => {
                l.value = {
                    folderName: ""
                }, f.value = !1, i.value.resetFields();
            };
            return b({
                openDialog: a => {
                    t.value = !0, v.value = a.title, _.value = a, a.type == "edit" ? (f.value = !0, 
                    Object.assign(l.value, a.editObject)) : l.value.folderName = "";
                }
            }), (a, e) => {
                const c = I, u = Q, F = R, g = W, O = E, C = z("trim");
                return A(), J("div", null, [ s(O, {
                    modelValue: d(t),
                    "onUpdate:modelValue": e[2] || (e[2] = m => B(t) ? t.value = m : null),
                    scroll: !0,
                    "max-height": "210",
                    title: d(v),
                    width: "420",
                    onClose: x
                }, {
                    footer: o(() => [ s(g, {
                        type: "default",
                        onClick: e[1] || (e[1] = m => t.value = !1)
                    }, {
                        default: o(() => [ h("取消") ]),
                        _: 1
                    }), s(g, {
                        type: "primary",
                        onClick: k
                    }, {
                        default: o(() => [ h("确定") ]),
                        _: 1
                    }) ]),
                    default: o(() => [ s(F, {
                        ref_key: "addFolderFormRef",
                        ref: i,
                        model: d(l),
                        rules: d(V),
                        class: "neu"
                    }, {
                        default: o(() => [ s(u, {
                            label: "文件夹名称",
                            prop: "folderName"
                        }, {
                            default: o(() => [ P(s(c, {
                                size: "large",
                                modelValue: d(l).folderName,
                                "onUpdate:modelValue": e[0] || (e[0] = m => d(l).folderName = m),
                                placeholder: "请输入文件夹名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ C ] ]) ]),
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
    y as _,
    S as __tla
};