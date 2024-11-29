import {
    r as u,
    a0 as I,
    o as x,
    c as A,
    k as i,
    l as o,
    H as c,
    v as d,
    a as n,
    m as C,
    n as P,
    J as V,
    aU as j,
    __tla as z
} from "./index-6c08ea4c.js";

import D, {
    __tla as F
} from "./profileSettingModule-a23a44b1.js";

import {
    __tla as H
} from "./index-9567cbf6.js";

import "./tree-05ea8e09.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as L
} from "./index-ef4d146e.js";

let m, O = Promise.all([ (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})() ]).then(async () => {
    m = {
        __name: "profileSettingService",
        props: {
            profileSettingTitle: {
                type: String,
                default: "设置"
            },
            sourceType: {
                type: String,
                default: ""
            }
        },
        emits: [ "setProfile" ],
        setup(p, {
            expose: f,
            emit: g
        }) {
            const l = u(!1), s = u(null), h = g, t = u({
                teachTags: [],
                dirId: "",
                isAssess: "1"
            }), v = p, {
                profileSettingTitle: y
            } = I(v), T = () => {
                t.value = {
                    teachTags: [],
                    dirId: "",
                    isAssess: "1"
                }, s.value && s.value.clearForm();
            }, S = () => {
                s.value.validateForm().then(async e => {
                    h("setProfile", {
                        ...t.value
                    });
                });
            };
            return f({
                handleOpen: e => {
                    var a;
                    e && Object.keys(e).length > 0 && (t.value.id = e.id || "", 
                    t.value.teachTags = ((a = e.tagList) == null ? void 0 : a.map(r => r.tagId)) || [], 
                    t.value.dirId = e.dirId || "", t.value.isAssess = e.isAssess.toString() || "1"), 
                    l.value = !0, P(() => {
                        s.value.getTagList();
                    });
                },
                handleCancel: () => {
                    l.value = !1;
                }
            }), (e, a) => {
                const r = V, k = j;
                return x(), A("div", null, [ i(k, {
                    modelValue: n(l),
                    "onUpdate:modelValue": a[1] || (a[1] = _ => C(l) ? l.value = _ : null),
                    "max-height": 650,
                    scroll: !0,
                    truthHeight: 650,
                    width: 950,
                    title: n(y),
                    onClose: T
                }, {
                    footer: o(() => [ i(r, {
                        size: "large",
                        onClick: a[0] || (a[0] = c(_ => l.value = !1, [ "stop" ]))
                    }, {
                        default: o(() => [ d("取消") ]),
                        _: 1
                    }), i(r, {
                        size: "large",
                        type: "primary",
                        onClick: c(S, [ "stop" ])
                    }, {
                        default: o(() => [ d("确定") ]),
                        _: 1
                    }) ]),
                    default: o(() => [ i(D, {
                        ref_key: "ProfileSettingModuleRef",
                        ref: s,
                        sourceType: p.sourceType,
                        formData: n(t)
                    }, null, 8, [ "sourceType", "formData" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    };
});

export {
    O as __tla,
    m as default
};