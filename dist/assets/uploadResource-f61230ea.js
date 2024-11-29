import {
    d as w,
    r as o,
    h as A,
    p as L,
    e as z,
    o as R,
    c as V,
    k as l,
    l as s,
    a as p,
    v,
    H as j,
    O as D,
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
    c as J,
    __tla as Q
} from "./libraryAdmin-dc76919b.js";

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
            const u = o(), c = A(), g = L(), k = y, i = o({}), r = o(!1), I = o("上传文件"), x = o({}), _ = z(() => {
                var t;
                return (t = u.value) == null ? void 0 : t.uploadPercentage;
            }), U = () => {
                u.value.submitFile();
            }, C = () => {
                u.value.cancelUpload(), k("refresh");
            }, P = t => {
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
                        neuParentId: "",
                        neuAncestorId: "",
                        release: 0,
                        creatorName: c.getUser.nickname,
                        updaterName: c.getUser.nickname,
                        eid: e.eid
                    });
                }), a.length > 0) {
                    const e = {
                        ...i.value.fatherObj
                    };
                    e.children = a, J(e).then(d => {
                        d.code == 200 && (g.success("提交成功"), r.value = !1);
                    });
                }
            };
            return b({
                openDialog: t => {
                    r.value = !0, i.value = t;
                }
            }), (t, a) => {
                const e = q, d = D, S = E, m = F, N = O;
                return R(), V("div", n, [ l(N, {
                    modelValue: r.value,
                    "onUpdate:modelValue": a[2] || (a[2] = f => r.value = f),
                    scroll: !0,
                    "max-height": "290",
                    title: I.value,
                    width: "420",
                    onClose: C
                }, {
                    footer: s(() => [ l(m, {
                        type: "default",
                        onClick: a[1] || (a[1] = f => r.value = !1),
                        disabled: p(_) != 0
                    }, {
                        default: s(() => [ v("取消") ]),
                        _: 1
                    }, 8, [ "disabled" ]), l(m, {
                        type: "primary",
                        onClick: U,
                        disabled: p(_) != 0
                    }, {
                        default: s(() => [ v("确定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: s(() => [ l(S, {
                        ref: "addLinkFormRef",
                        model: x.value,
                        class: "neu",
                        onSubmit: a[0] || (a[0] = j(() => {}, [ "prevent" ]))
                    }, {
                        default: s(() => [ l(d, {
                            label: "上传文件",
                            required: ""
                        }, {
                            default: s(() => [ l(e, {
                                ref_key: "NeuUploadRef",
                                ref: u,
                                onSuccess: P,
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
    }), [ [ "__scopeId", "data-v-850b46fb" ] ]);
});

export {
    K as __tla,
    h as default
};