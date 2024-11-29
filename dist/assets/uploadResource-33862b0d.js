import {
    d as w,
    r as o,
    h as L,
    p as z,
    e as D,
    o as R,
    c as V,
    k as l,
    l as r,
    a as p,
    v,
    H as j,
    O as A,
    Q as E,
    J as F,
    aU as O,
    __tla as $
} from "./index-6c08ea4c.js";

import {
    _ as q,
    __tla as H
} from "./index-a34a73bc.js";

import {
    b as J,
    __tla as Q
} from "./library-c2ecc5ca.js";

import {
    v as T,
    __tla as B
} from "./file-e038b35d.js";

import {
    _ as G
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./file_题-23882218.js";

let h, K = Promise.all([ (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})() ]).then(async () => {
    let n;
    n = {
        class: "upload-resource"
    }, h = G(w({
        __name: "uploadResource",
        emits: [ "refresh" ],
        setup(M, {
            expose: b,
            emit: y
        }) {
            const u = o(), i = L(), g = z(), k = y, c = o({}), s = o(!1), x = o("上传文件"), U = o({}), m = D(() => {
                var t;
                return (t = u.value) == null ? void 0 : t.uploadPercentage;
            }), C = () => {
                u.value.submitFile();
            }, I = () => {
                u.value.cancelUpload(), k("refresh");
            }, S = t => {
                const a = [];
                if (t && t.length > 0 && t.forEach(e => {
                    e.status == "1" && a.push({
                        resName: e.name,
                        resExt: `.${e.fileSuffix.toLowerCase()}`,
                        resType: T(`.${e.fileSuffix.toLowerCase()}`),
                        resSize: e.size,
                        resDesc: e.name,
                        pvtParentId: "",
                        pvtAncestorId: "",
                        pubParentId: "",
                        pubAncestorId: "",
                        release: 0,
                        creatorName: i.getUser.nickname,
                        updaterName: i.getUser.nickname,
                        eid: e.eid
                    });
                }), a.length > 0) {
                    const e = {
                        ...c.value.fatherObj
                    };
                    e.children = a, J(e).then(d => {
                        d.code == 200 && (g.success("提交成功"), s.value = !1);
                    });
                }
            };
            return b({
                openDialog: t => {
                    s.value = !0, c.value = t;
                }
            }), (t, a) => {
                const e = q, d = A, N = E, _ = F, P = O;
                return R(), V("div", n, [ l(P, {
                    modelValue: s.value,
                    "onUpdate:modelValue": a[2] || (a[2] = f => s.value = f),
                    scroll: !0,
                    "max-height": "290",
                    title: x.value,
                    width: "420",
                    onClose: I
                }, {
                    footer: r(() => [ l(_, {
                        type: "default",
                        onClick: a[1] || (a[1] = f => s.value = !1),
                        disabled: p(m) != 0
                    }, {
                        default: r(() => [ v("取消") ]),
                        _: 1
                    }, 8, [ "disabled" ]), l(_, {
                        type: "primary",
                        onClick: C,
                        disabled: p(m) != 0
                    }, {
                        default: r(() => [ v("确定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: r(() => [ l(N, {
                        ref: "addLinkFormRef",
                        model: U.value,
                        class: "neu",
                        onSubmit: a[0] || (a[0] = j(() => {}, [ "prevent" ]))
                    }, {
                        default: r(() => [ l(d, {
                            label: "上传文件",
                            required: ""
                        }, {
                            default: r(() => [ l(e, {
                                ref_key: "NeuUploadRef",
                                ref: u,
                                onSuccess: S,
                                "no-remove": !0
                            }, null, 512) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-2d8e18f6" ] ]);
});

export {
    K as __tla,
    h as default
};