import {
    _ as B,
    __tla as D
} from "./Editor-ef737d2a.js";

import {
    a0 as H,
    r as l,
    e as G,
    w as K,
    o as M,
    c as P,
    A as c,
    G as _,
    t as R,
    k as E,
    n as T,
    P as U,
    __tla as j
} from "./index-6c08ea4c.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

import {
    _ as A
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as I
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as $
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as q
} from "./file-e038b35d.js";

let V, z = Promise.all([ (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return q;
    } catch {}
})() ]).then(async () => {
    let f;
    f = [ "innerHTML" ], V = A({
        __name: "editEditor",
        props: {
            modelValue: {
                type: String,
                default: ""
            },
            longDisplay: {
                type: Boolean,
                default: !1
            },
            text: {
                type: String,
                default: ""
            },
            placeholder: {
                type: String,
                default: "请输入"
            }
        },
        emits: [ "update:modelValue", "update:text", "update:text", "answerChange" ],
        setup(L, {
            expose: k,
            emit: w
        }) {
            const s = w, o = L, {
                modelValue: d,
                placeholder: b,
                longDisplay: J,
                text: N
            } = H(o), t = l(""), r = l(""), u = l(!1), i = l(), p = l(), m = l(!1), C = G(() => d.value ? d.value : `<span style="color:#999;display:block;min-height:34px;">${b.value}</span>`), y = () => {
                t.value = t.value.replace(/<p>(?:<br>|\s*)<\/p>/g, "").replace(/<p>\s*<\/p>/g, ""), 
                d.value !== t.value && s("answerChange", t.value), s("update:modelValue", t.value), 
                s("update:text", r.value);
            };
            K(() => u.value, a => {
                a ? (t.value = o.modelValue, r.value = o.text) : y();
            }, {
                deep: !0
            });
            const h = () => {
                u.value = !0, document.addEventListener("mousedown", g), document.addEventListener("mouseup", x), 
                T(() => {
                    p.value && p.value.getFocus();
                });
            };
            function g(a) {
                m.value = !0;
            }
            function x(a) {
                if (m.value) {
                    let e = a.target, n = !1;
                    for (;e; ) {
                        if (e.classList && e.classList.contains("neuEditor")) {
                            n = !0;
                            break;
                        }
                        e = e.parentElement;
                    }
                    i.value && i.value.contains(a.target) || n || (u.value = !1, 
                    document.removeEventListener("mousedown", g), document.removeEventListener("mouseup", x)), 
                    m.value = !1;
                }
            }
            const F = () => {};
            return k({
                showEditor: h,
                updateEditorFocus: () => {
                    y();
                }
            }), (a, e) => {
                const n = U, S = B;
                return M(), P("div", {
                    ref_key: "blurRef",
                    ref: i,
                    style: {
                        width: "100%"
                    }
                }, [ c(R("div", {
                    class: "pointer displayContainers",
                    onClick: h,
                    innerHTML: C.value
                }, null, 8, f), [ [ _, !u.value ] ]), c(E(n, {
                    "model-value": o.modelValue
                }, null, 8, [ "model-value" ]), [ [ _, !1 ] ]), c(E(S, {
                    ref_key: "ComEditorRef",
                    ref: p,
                    modelValue: t.value,
                    "onUpdate:modelValue": e[0] || (e[0] = v => t.value = v),
                    text: r.value,
                    "onUpdate:text": e[1] || (e[1] = v => r.value = v),
                    excludeKeys: [ "group-video", "emotion" ],
                    height: 300,
                    insertKeys: {
                        index: 20,
                        keys: [ "insertFormula" ]
                    },
                    ltm: 1,
                    onEditorBlur: F
                }, null, 8, [ "modelValue", "text" ]), [ [ _, u.value ] ]) ], 512);
            };
        }
    }, [ [ "__scopeId", "data-v-bf777343" ] ]);
});

export {
    z as __tla,
    V as default
};