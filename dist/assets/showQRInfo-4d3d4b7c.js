import {
    a0 as z,
    p as B,
    r,
    o as j,
    C as E,
    l,
    k as c,
    v as C,
    t as s,
    B as f,
    a as n,
    m as R,
    bo as $,
    q as J,
    J as L,
    aU as N,
    __tla as O
} from "./index-6c08ea4c.js";

import {
    _ as P,
    __tla as Q
} from "./index-13c88727.js";

import {
    b as T
} from "./browser-86b6ed1b.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let y, A = Promise.all([ (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return Q;
    } catch {}
})() ]).then(async () => {
    let p, u, m;
    p = {
        style: {
            padding: "20px",
            "text-align": "center"
        }
    }, u = {
        class: "class-name"
    }, m = {
        class: "invite-code"
    }, y = {
        __name: "showQRInfo",
        props: {
            copyInfo: {
                type: Object,
                default: () => ({})
            }
        },
        setup(g, {
            expose: h
        }) {
            const x = g, {
                copyInfo: a
            } = z(x), k = B(), o = r(!1), b = () => {
                var t = document.createElement("input");
                t.value = a.value.inviteCode, t.id = "creatDom", document.body.appendChild(t), 
                t.select(), document.execCommand("Copy");
                let e = document.getElementById("creatDom");
                e.parentNode.removeChild(e), $({
                    message: "复制成功",
                    type: "success"
                });
            }, w = () => {
                o.value = !1;
            };
            r(null);
            const I = r(null), D = t => {
                T.toDataURL(U.value, {
                    width: 190,
                    margin: 0
                }, (e, i) => {
                    e || (I.value = i);
                });
            }, U = r("来自哪里"), v = t => {
                navigator.clipboard.writeText(`${a.value.inviteCode}\uFF1A${t}`), 
                k.success("已复制");
            };
            return h({
                open: () => {
                    o.value = !0, D();
                }
            }), (t, e) => {
                const i = P, V = J, _ = L, q = N;
                return j(), E(q, {
                    modelValue: n(o),
                    "onUpdate:modelValue": e[2] || (e[2] = d => R(o) ? o.value = d : null),
                    title: "入班码",
                    width: "590px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    footer: l(() => [ c(_, {
                        size: "large",
                        onClick: w
                    }, {
                        default: l(() => [ C("关 闭") ]),
                        _: 1
                    }), c(_, {
                        type: "primary",
                        size: "large",
                        onClick: b
                    }, {
                        default: l(() => [ C("复 制") ]),
                        _: 1
                    }) ]),
                    default: l(() => [ c(i, {
                        title: "点击二维码或邀请码即可复制"
                    }), s("div", p, [ s("p", u, f(n(a).name), 1), s("div", m, [ c(V, {
                        placement: "right",
                        width: 96,
                        trigger: "hover",
                        "popper-class": "popper-class",
                        teleported: !1
                    }, {
                        reference: l(() => [ s("p", {
                            class: "code pointer",
                            onClick: e[1] || (e[1] = d => v(n(a).inviteCode))
                        }, f(n(a).inviteCode), 1) ]),
                        default: l(() => [ s("div", {
                            class: "copy-qrcode",
                            onClick: e[0] || (e[0] = d => v(n(a).inviteCode))
                        }, "复制邀请码") ]),
                        _: 1
                    }) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    };
});

export {
    A as __tla,
    y as default
};