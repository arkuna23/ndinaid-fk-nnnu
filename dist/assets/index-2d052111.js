import {
    a7 as c,
    d as v,
    r as f,
    f as L,
    o as y,
    c as C,
    k as t,
    l as o,
    t as D,
    v as i,
    a as _,
    A as W,
    C as j,
    D as H,
    F as T,
    _ as B,
    J as R,
    a9 as U,
    __tla as A
} from "./index-6c08ea4c.js";

import {
    _ as F,
    __tla as I
} from "./ContentWrap-4c50e4c8.js";

import {
    _ as J,
    __tla as O
} from "./IFrame.vue_vue_type_script_setup_true_lang-425a5eb8.js";

import {
    _ as P,
    __tla as g
} from "./index-51b199d8.js";

import {
    d as p
} from "./download-20922b56.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let h, q = Promise.all([ (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return g;
    } catch {}
})() ]).then(async () => {
    let l, m;
    l = () => c.download({
        url: "/infra/db-doc/export-html"
    }), m = {
        class: "mb-10px"
    }, h = v({
        name: "InfraDBDoc",
        __name: "index",
        setup(z) {
            const n = f(!0), w = f(""), d = async r => {
                if (r === "HTML") {
                    const a = await l();
                    p.html(a, "数据库文档.html");
                }
                if (r === "Word") {
                    const a = await c.download({
                        url: "/infra/db-doc/export-word"
                    });
                    p.word(a, "数据库文档.doc");
                }
                if (r === "Markdown") {
                    const a = await c.download({
                        url: "/infra/db-doc/export-markdown"
                    });
                    p.markdown(a, "数据库文档.md");
                }
            };
            return L(async () => {
                await (async () => {
                    try {
                        const r = await l(), a = new Blob([ r ], {
                            type: "text/html"
                        });
                        w.value = window.URL.createObjectURL(a);
                    } finally {
                        n.value = !1;
                    }
                })();
            }), (r, a) => {
                const k = P, s = B, e = R, b = J, x = F, M = U;
                return y(), C(T, null, [ t(k, {
                    title: "数据库文档",
                    url: "https://doc.iocoder.cn/db-doc/"
                }), t(x, {
                    title: "数据库文档"
                }, {
                    default: o(() => [ D("div", m, [ t(e, {
                        type: "primary",
                        plain: "",
                        onClick: a[0] || (a[0] = u => d("HTML"))
                    }, {
                        default: o(() => [ t(s, {
                            icon: "ep:download"
                        }), i(" 导出 HTML ") ]),
                        _: 1
                    }), t(e, {
                        type: "primary",
                        plain: "",
                        onClick: a[1] || (a[1] = u => d("Word"))
                    }, {
                        default: o(() => [ t(s, {
                            icon: "ep:download"
                        }), i(" 导出 Word ") ]),
                        _: 1
                    }), t(e, {
                        type: "primary",
                        plain: "",
                        onClick: a[2] || (a[2] = u => d("Markdown"))
                    }, {
                        default: o(() => [ t(s, {
                            icon: "ep:download"
                        }), i(" 导出 Markdown ") ]),
                        _: 1
                    }) ]), _(n) ? H("", !0) : W((y(), j(b, {
                        key: 0,
                        src: _(w)
                    }, null, 8, [ "src" ])), [ [ M, _(n) ] ]) ]),
                    _: 1
                }) ], 64);
            };
        }
    });
});

export {
    q as __tla,
    h as default
};