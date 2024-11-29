import {
    d as w,
    r as t,
    p as P,
    h as q,
    j as z,
    o as A,
    c as D,
    k as s,
    l as u,
    v as h,
    a as o,
    A as G,
    m as I,
    dW as J,
    P as N,
    O as Q,
    Q as R,
    J as W,
    aU as B,
    __tla as E
} from "./index-6c08ea4c.js";

import {
    v as H
} from "./validate-b72f006c.js";

import {
    h as K,
    i as L,
    __tla as M
} from "./examPaperLibrary-5d47fe72.js";

let y, S = Promise.all([ (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})() ]).then(async () => {
    y = w({
        __name: "addFolder",
        emits: [ "refresh" ],
        setup(T, {
            expose: b,
            emit: j
        }) {
            const i = t(), n = t(!1), r = t(!1), _ = t("新建文件夹"), l = t({
                name: ""
            }), V = j, c = P();
            q();
            const f = t({}), k = t({
                name: [ {
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
                    await a, c.success("提交成功"), r.value = !1, V("refresh");
                } catch (e) {
                    c.error(e.msg);
                }
            }
            const x = () => {
                i.value.validate(a => {
                    if (a) {
                        const {
                            id: e,
                            release: v
                        } = f.value.fatherObj;
                        let d = {
                            folderName: l.value.name,
                            parentId: J(e),
                            release: v
                        };
                        n.value ? (d.id = l.value.id, p(K(d))) : p(L(d));
                    } else c.error("提交失败");
                });
            }, F = () => {
                l.value = {
                    name: ""
                }, n.value = !1, i.value.resetFields();
            };
            return b({
                openDialog: a => {
                    r.value = !0, _.value = a.title, f.value = a, a.type == "edit" ? (n.value = !0, 
                    Object.assign(l.value, a.editObject)) : l.value.name = "";
                }
            }), (a, e) => {
                const v = N, d = Q, O = R, g = W, C = B, U = z("trim");
                return A(), D("div", null, [ s(C, {
                    modelValue: o(r),
                    "onUpdate:modelValue": e[2] || (e[2] = m => I(r) ? r.value = m : null),
                    scroll: !0,
                    "max-height": "210",
                    title: o(_),
                    width: "420",
                    onClose: F
                }, {
                    footer: u(() => [ s(g, {
                        type: "default",
                        onClick: e[1] || (e[1] = m => r.value = !1)
                    }, {
                        default: u(() => [ h("取消") ]),
                        _: 1
                    }), s(g, {
                        type: "primary",
                        onClick: x
                    }, {
                        default: u(() => [ h("确定") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ s(O, {
                        ref_key: "addFolderFormRef",
                        ref: i,
                        model: o(l),
                        rules: o(k),
                        class: "neu"
                    }, {
                        default: u(() => [ s(d, {
                            label: "文件夹名称",
                            prop: "name"
                        }, {
                            default: u(() => [ G(s(v, {
                                size: "large",
                                modelValue: o(l).name,
                                "onUpdate:modelValue": e[0] || (e[0] = m => o(l).name = m),
                                placeholder: "请输入文件夹名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ U ] ]) ]),
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