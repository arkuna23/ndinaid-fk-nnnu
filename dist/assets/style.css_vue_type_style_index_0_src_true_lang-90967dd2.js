import {
    d as h,
    r as m,
    bv as F,
    f as H,
    w as L,
    o as w,
    c as b,
    aR as M,
    bx as V,
    by as T,
    bz as $,
    bA as z,
    __tla as I
} from "./index-6c08ea4c.js";

let C, v, N = Promise.all([ (() => {
    try {
        return I;
    } catch {}
})() ]).then(async () => {
    var E = Object.defineProperty, O = Object.defineProperties, P = Object.getOwnPropertyDescriptors, p = Object.getOwnPropertySymbols, j = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable, g = (e, t, o) => t in e ? E(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[t] = o, A = (e, t) => {
        for (var o in t || (t = {})) j.call(t, o) && g(e, o, t[o]);
        if (p) for (var o of p(t)) x.call(t, o) && g(e, o, t[o]);
        return e;
    };
    function a(e) {
        let t = `\u8BF7\u4F7F\u7528 '@${e}' \u4E8B\u4EF6\uFF0C\u4E0D\u8981\u653E\u5728 props \u4E2D`;
        return t += `
Please use '@${e}' event instead of props`, t;
    }
    var y = (e, t) => {
        for (const [ o, l ] of t) e[o] = l;
        return e;
    };
    const _ = h({
        props: {
            mode: {
                type: String,
                default: "default"
            },
            defaultContent: {
                type: Array,
                default: []
            },
            defaultHtml: {
                type: String,
                default: ""
            },
            defaultConfig: {
                type: Object,
                default: {}
            },
            modelValue: {
                type: String,
                default: ""
            }
        },
        setup(e, t) {
            const o = m(null), l = F(null), i = m("");
            return H(() => {
                (() => {
                    if (!o.value) return;
                    const u = V(e.defaultContent);
                    var c, f;
                    T({
                        selector: o.value,
                        mode: e.mode,
                        content: u || [],
                        html: e.defaultHtml || e.modelValue || "",
                        config: (c = A({}, e.defaultConfig), f = {
                            onCreated(r) {
                                if (l.value = r, t.emit("onCreated", r), e.defaultConfig.onCreated) {
                                    const n = a("onCreated");
                                    throw new Error(n);
                                }
                            },
                            onChange(r) {
                                const n = r.getHtml();
                                if (i.value = n, t.emit("update:modelValue", n), 
                                t.emit("onChange", r), e.defaultConfig.onChange) {
                                    const s = a("onChange");
                                    throw new Error(s);
                                }
                            },
                            onDestroyed(r) {
                                if (t.emit("onDestroyed", r), e.defaultConfig.onDestroyed) {
                                    const n = a("onDestroyed");
                                    throw new Error(n);
                                }
                            },
                            onMaxLength(r) {
                                if (t.emit("onMaxLength", r), e.defaultConfig.onMaxLength) {
                                    const n = a("onMaxLength");
                                    throw new Error(n);
                                }
                            },
                            onFocus(r) {
                                if (t.emit("onFocus", r), e.defaultConfig.onFocus) {
                                    const n = a("onFocus");
                                    throw new Error(n);
                                }
                            },
                            onBlur(r) {
                                if (t.emit("onBlur", r), e.defaultConfig.onBlur) {
                                    const n = a("onBlur");
                                    throw new Error(n);
                                }
                            },
                            customAlert(r, n) {
                                if (t.emit("customAlert", r, n), e.defaultConfig.customAlert) {
                                    const s = a("customAlert");
                                    throw new Error(s);
                                }
                            },
                            customPaste: (r, n) => {
                                if (e.defaultConfig.customPaste) {
                                    const d = a("customPaste");
                                    throw new Error(d);
                                }
                                let s;
                                return t.emit("customPaste", r, n, d => {
                                    s = d;
                                }), s;
                            }
                        }, O(c, P(f)))
                    });
                })();
            }), L(() => e.modelValue, u => {
                u !== i.value && function(c) {
                    const f = l.value;
                    f != null && f.setHtml(c);
                }(u);
            }), {
                box: o
            };
        }
    }), D = {
        ref: "box",
        style: {
            height: "100%"
        }
    };
    C = y(_, [ [ "render", function(e, t, o, l, i, u) {
        return w(), b("div", D, null, 512);
    } ] ]);
    const S = h({
        props: {
            editor: {
                type: Object
            },
            mode: {
                type: String,
                default: "default"
            },
            defaultConfig: {
                type: Object,
                default: {}
            }
        },
        setup(e) {
            const t = m(null);
            return M(() => {
                const {
                    editor: o
                } = e;
                o != null && (l => {
                    if (t.value) {
                        if (l == null) throw new Error("Not found instance of Editor when create <Toolbar/> component");
                        $.getToolbar(l) || z({
                            editor: l,
                            selector: t.value || "<div></div>",
                            mode: e.mode,
                            config: e.defaultConfig
                        });
                    }
                })(o);
            }), {
                selector: t
            };
        }
    }), B = {
        ref: "selector"
    };
    v = y(S, [ [ "render", function(e, t, o, l, i, u) {
        return w(), b("div", B, null, 512);
    } ] ]);
});

export {
    C as E,
    v as T,
    N as __tla
};