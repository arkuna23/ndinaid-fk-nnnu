import {
    E as I,
    __tla as B
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    d as K,
    az as l,
    a5 as P,
    r as d,
    bt as j,
    e as g,
    bu as z,
    a as o,
    bv as L,
    w as p,
    aV as N,
    f as U,
    n as u,
    o as A,
    c as J,
    k as R,
    m as $,
    x as q,
    z as D,
    bo as f,
    aN as G,
    p as H,
    __tla as M
} from "./index-6c08ea4c.js";

import {
    __tla as Q
} from "./file-e038b35d.js";

let y, W = Promise.all([ (() => {
    try {
        return B;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return Q;
    } catch {}
})() ]).then(async () => {
    y = K({
        name: "Editor",
        __name: "EditorPreviewNew",
        props: {
            editorId: l.string.def("wangeEditor-1"),
            height: l.oneOfType([ Number, String ]).def("100%"),
            editorConfig: {
                type: Object,
                default: () => {}
            },
            theme: l.string.def("light"),
            text: l.string.def(""),
            readonly: l.bool.def(!0),
            modelValue: l.string.def(""),
            excludeKeys: l.array.def([ "group-video", "emotion", "insertFormula" ]),
            insertKeys: l.object.def({
                index: 20,
                keys: [ "insertFormula" ]
            }),
            ltm: l.number.def(5),
            placeholder: l.string.def("请输入内容...")
        },
        emits: [ "change", "update:modelValue", "editorBlur", "getPlainText", "onfocus", "update:text", "fullScreenChange" ],
        setup(m, {
            expose: b,
            emit: _
        }) {
            JSON.parse('{"source":"NEUNSE","bucketName":"neunsebucket","indexName":"neunseindex"}'), 
            P.CancelToken, d(0), d();
            const x = j();
            H();
            const w = d(), S = g(() => x.getCurrentLocale);
            z(o(S).lang);
            const t = m, r = _, e = L(), n = d("");
            p(() => t.modelValue, a => {
                a !== o(n) && (n.value = a, u(() => {
                    t.readonly && e.value.disable();
                }));
            }, {
                immediate: !0
            }), p(() => n.value, a => {
                u(() => {
                    var c;
                    let s = (c = e.value) == null ? void 0 : c.getText();
                    r("update:modelValue", a), r("update:text", s);
                });
            }, {
                immediate: !0,
                deep: !0
            });
            const k = a => {
                e.value = a;
            };
            t.excludeKeys, t.insertKeys;
            const C = g(() => Object.assign({
                placeholder: t.placeholder,
                customAlert: (a, s) => {
                    switch (s) {
                      case "success":
                        f.success(a);
                        break;

                      case "info":
                      default:
                        f.info(a);
                        break;

                      case "warning":
                        f.warning(a);
                        break;

                      case "error":
                        f.error(a);
                    }
                },
                autoFocus: !0,
                scroll: !0,
                readOnly: !0,
                uploadImgShowBase64: !0
            }, t.editorConfig || {})), E = g(() => ({
                height: G(t.height) ? `${t.height}px` : t.height,
                overflow: "hidden"
            })), O = a => {
                r("change", a), r("getPlainText", a.getText());
            }, F = a => {
                r("editorBlur", a);
            };
            N(() => {
                const a = o(e.value);
                T(), a == null || a.destroy();
            });
            const V = () => {
                r("onfocus");
            }, i = d(!1), h = () => {
                i.value = !0, r("fullScreenChange", i.value);
            }, v = () => {
                i.value = !1, r("fullScreenChange", i.value);
            }, T = () => {
                e.value && (e.value.off("fullScreen", h), e.value.off("unFullScreen", v));
            };
            return U(() => {
                u(() => {
                    e != null && e.value && (e == null || e.value.on("fullScreen", h), 
                    e == null || e.value.on("unFullScreen", v));
                });
            }), b({
                getEditorRef: async () => (await u(), o(e.value)),
                getFocus: () => {
                    u(() => {
                        e.value && e.value.focus();
                    });
                },
                setLosesFocus: () => {
                    u(() => {
                        e.value && e.value.blur();
                    });
                }
            }), (a, s) => (A(), J("div", {
                ref_key: "neuEditor",
                ref: w,
                class: D([ "wangEditorSign neuEditor z-99 border-0 border-[var(--el-border-color)] border-solid", t.theme === "dark" ? "dark-editor" : "" ]),
                style: {
                    overflow: "auto",
                    height: "100%"
                }
            }, [ R(o(I), {
                modelValue: o(n),
                "onUpdate:modelValue": s[0] || (s[0] = c => $(n) ? n.value = c : null),
                defaultConfig: o(C),
                editorId: m.editorId,
                style: q(o(E)),
                readonly: !0,
                onOnBlur: F,
                onOnFocus: V,
                onOnChange: O,
                onOnCreated: k
            }, null, 8, [ "modelValue", "defaultConfig", "editorId", "style" ]) ], 2));
        }
    });
});

export {
    y as _,
    W as __tla
};