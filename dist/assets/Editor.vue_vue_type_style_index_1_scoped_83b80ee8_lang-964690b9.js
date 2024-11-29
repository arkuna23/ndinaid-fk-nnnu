import {
    T as q,
    E as G,
    __tla as H
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    d as Q,
    az as n,
    a5 as W,
    r as m,
    bt as X,
    e as b,
    bu as Y,
    a as l,
    bv as Z,
    w as x,
    aV as P,
    f as ee,
    n as c,
    o as ae,
    c as te,
    k as w,
    m as re,
    x as oe,
    bo as h,
    bw as le,
    aN as ne,
    p as se,
    __tla as ue
} from "./index-6c08ea4c.js";

import {
    a as de,
    p as ie,
    __tla as ce
} from "./file-e038b35d.js";

let N, fe = Promise.all([ (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})() ]).then(async () => {
    N = Q({
        name: "Editor",
        __name: "Editor",
        props: {
            editorId: n.string.def("wangeEditor-1"),
            height: n.oneOfType([ Number, String ]).def("500px"),
            editorConfig: {
                type: Object,
                default: () => {}
            },
            text: n.string.def(""),
            readonly: n.bool.def(!1),
            modelValue: n.string.def(""),
            excludeKeys: n.array.def([ "group-video", "emotion", "insertFormula" ]),
            insertKeys: n.object.def({
                index: 20,
                keys: [ "insertFormula" ]
            }),
            ltm: n.number.def(5),
            placeholder: n.string.def("请输入内容...")
        },
        emits: [ "change", "update:modelValue", "editorBlur", "getPlainText", "onfocus", "update:text", "fullScreenChange" ],
        setup(v, {
            expose: k,
            emit: C
        }) {
            const {
                bucketName: me,
                indexName: ge,
                source: F
            } = JSON.parse('{"source":"NEUNSE","bucketName":"neunsebucket","indexName":"neunseindex"}'), S = W.CancelToken, E = m(0), O = m(), I = X(), g = se(), V = m(), T = b(() => I.getCurrentLocale);
            Y(l(T).lang);
            const r = v, s = C, a = Z(), i = m("");
            x(() => r.modelValue, e => {
                e !== l(i) && (i.value = e, c(() => {
                    r.readonly && a.value.disable();
                }));
            }, {
                immediate: !0
            }), x(() => i.value, e => {
                c(() => {
                    var o;
                    let t = (o = a.value) == null ? void 0 : o.getText();
                    s("update:modelValue", e), s("update:text", t);
                });
            }, {
                immediate: !0,
                deep: !0
            });
            const K = e => {
                a.value = e;
            }, B = {
                excludeKeys: r.excludeKeys,
                insertKeys: {
                    ...r.insertKeys
                }
            }, j = b(() => Object.assign({
                placeholder: r.placeholder,
                readOnly: r.readonly,
                customAlert: (e, t) => {
                    switch (t) {
                      case "success":
                        h.success(e);
                        break;

                      case "info":
                      default:
                        h.info(e);
                        break;

                      case "warning":
                        h.warning(e);
                        break;

                      case "error":
                        h.error(e);
                    }
                },
                autoFocus: !0,
                scroll: !0,
                MENU_CONF: {
                    uploadImage: {
                        customUpload(e) {
                            L(e);
                        }
                    },
                    insertLink: {
                        checkLink(e, t) {
                            if (t) return !!/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(t) || (g.error("请输入正确的网址(例如 http://baidu.com)"), 
                            "error");
                        }
                    }
                },
                uploadImgShowBase64: !0
            }, r.editorConfig || {})), L = e => {
                const t = /\.(jpe?g|gif|png|bmp)$/i.test(e.name), o = e.size / 1024 / 1024 < r.ltm;
                var f = r.ltm;
                t ? o ? U(e).then(u => {
                    u ? z(de(u), e.name) : g.error("上传失败，请重新上传");
                }) : g.error(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${f}MB!`) : g.error("请选择正确的图片格式");
            }, U = e => new Promise((t, o) => {
                const f = new FormData();
                f.append("file", e), f.append("source", F), ie(f, u => {
                    const {
                        loaded: d,
                        total: R
                    } = u;
                    E.value = Number((100 * Number(d / R)).toFixed());
                }, new S(function(u) {
                    O.value = u;
                })).then(async u => {
                    const d = u.data;
                    d.errorFlag === "0" || d.errorFlag === "2" ? t(d == null ? void 0 : d.eid) : o("上传失败，请重新上传");
                }).catch(() => {
                    o("上传失败，请重新上传");
                });
            }), z = (e, t) => {
                if (a.value && e) {
                    const o = [ {
                        type: "image",
                        src: e,
                        alt: t,
                        style: {
                            width: "50%"
                        },
                        children: [ {
                            text: ""
                        } ]
                    } ];
                    le.insertNodes(a.value, o);
                }
            }, $ = b(() => ({
                height: ne(r.height) ? `${r.height}px` : r.height,
                overflow: "hidden"
            })), M = e => {
                s("change", e), s("getPlainText", e.getText());
            }, A = e => {
                s("editorBlur", e);
            };
            P(() => {
                const e = l(a.value);
                J(), e == null || e.destroy();
            });
            const D = () => {
                s("onfocus");
            }, p = m(!1), y = () => {
                p.value = !0, s("fullScreenChange", p.value);
            }, _ = () => {
                p.value = !1, s("fullScreenChange", p.value);
            }, J = () => {
                a.value && (a.value.off("fullScreen", y), a.value.off("unFullScreen", _));
            };
            return ee(() => {
                c(() => {
                    a != null && a.value && (a == null || a.value.on("fullScreen", y), 
                    a == null || a.value.on("unFullScreen", _));
                });
            }), k({
                getEditorRef: async () => (await c(), l(a.value)),
                getFocus: () => {
                    c(() => {
                        a.value && a.value.focus();
                    });
                },
                setLosesFocus: () => {
                    c(() => {
                        a.value && a.value.blur();
                    });
                }
            }), (e, t) => (ae(), te("div", {
                ref_key: "neuEditor",
                ref: V,
                class: "wangEditorSign neuEditor z-99 border-1 border-[var(--el-border-color)] border-solid",
                style: {
                    overflow: "auto"
                }
            }, [ w(l(q), {
                defaultConfig: B,
                editor: l(a),
                editorId: v.editorId,
                class: "border-0 b-b-1 border-[var(--el-border-color)] border-solid"
            }, null, 8, [ "editor", "editorId" ]), w(l(G), {
                modelValue: l(i),
                "onUpdate:modelValue": t[0] || (t[0] = o => re(i) ? i.value = o : null),
                defaultConfig: l(j),
                editorId: v.editorId,
                style: oe(l($)),
                onOnBlur: A,
                onOnFocus: D,
                onOnChange: M,
                onOnCreated: K
            }, null, 8, [ "modelValue", "defaultConfig", "editorId", "style" ]) ], 512));
        }
    });
});

export {
    N as _,
    fe as __tla
};