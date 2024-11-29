import {
    e as P,
    o as S,
    C as j,
    l as d,
    t as e,
    v as a,
    k as b,
    a as I,
    m as K,
    bo as N,
    K as W,
    aU as q,
    R as z,
    S as A,
    __tla as D
} from "./index-6c08ea4c.js";

import {
    E as F,
    __tla as G
} from "./el-link-8197297a.js";

import {
    _ as H
} from "./_plugin-vue_export-helper-1b428a4d.js";

let V, J = Promise.all([ (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})() ]).then(async () => {
    let n, i, m, c, t, u, p, h, f, g, _, v, y;
    n = "" + new URL("1-ec335aef.png", import.meta.url).href, i = "" + new URL("4-823f8803.png", import.meta.url).href, 
    m = "" + new URL("5-b2a0773b.png", import.meta.url).href, c = "" + new URL("6-17c2bedd.png", import.meta.url).href, 
    t = l => (z("data-v-5d1a919d"), l = l(), A(), l), u = {
        class: "main"
    }, p = t(() => e("div", {
        class: "title"
    }, " 如果出现无法调用摄像头时，可能存在的问题及建议的解决方案 ", -1)), h = t(() => e("div", {
        class: "paragraph-1"
    }, " 一、建议使用PC客户端进行信息采集 ", -1)), f = {
        class: "paragraph-1"
    }, g = {
        class: "paragraph-2"
    }, _ = t(() => e("img", {
        style: {
            width: "100%"
        },
        src: n
    }, null, -1)), v = t(() => e("img", {
        style: {
            width: "100%"
        },
        src: i
    }, null, -1)), y = t(() => e("div", {
        class: "paragraph-1"
    }, [ a(" 三、系统禁止应用访问此设备上的摄像头 "), e("div", {
        class: "paragraph-2"
    }, [ a(" 1、Windows系统：进入系统设置-隐私-摄像头页面，确保开启“允许应用访问你的相机” "), e("img", {
        style: {
            width: "100%"
        },
        src: m
    }) ]), e("div", {
        class: "paragraph-2"
    }, [ a(" 2、苹果系统：进入系统设置-隐私与安全性-摄像头，授权浏览器允许调用摄像头 "), e("img", {
        style: {
            width: "100%"
        },
        src: c
    }) ]) ], -1)), V = H({
        __name: "solution",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:modelValue" ],
        setup(l, {
            emit: U
        }) {
            const R = U, L = l, o = P({
                get: () => L.modelValue,
                set: w => {
                    R("update:modelValue", w);
                }
            });
            return (w, s) => {
                const k = F, x = W, B = q;
                return S(), j(B, {
                    modelValue: I(o),
                    "onUpdate:modelValue": s[1] || (s[1] = C => K(o) ? o.value = C : null),
                    showSubmit: !1,
                    closeBtnName: "我知道了",
                    width: "1200px",
                    title: "解决方案"
                }, {
                    default: d(() => [ e("div", u, [ p, h, e("div", f, [ a(" 二、网页端只支持Chrome浏览器 "), e("div", g, [ a(" 1、Chrome浏览器 "), e("div", null, [ a(" 在地址栏中输入“ "), b(x, {
                        effect: "dark",
                        content: "点击复制",
                        placement: "top"
                    }, {
                        default: d(() => [ b(k, {
                            type: "primary",
                            underline: !1,
                            onClick: s[0] || (s[0] = C => function(E) {
                                const r = document.createElement("input");
                                r.value = E, document.body.appendChild(r), r.select(), 
                                document.execCommand("copy"), document.body.removeChild(r), 
                                N.success("复制成功");
                            }("chrome://flags/#unsafely-treat-insecure-origin-as-secure"))
                        }, {
                            default: d(() => [ a("chrome://flags/#unsafely-treat-insecure-origin-as-secure") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), a(" ”，回车后按照下图操作，操作完成后会自动重启浏览器，即可调用摄像头 ") ]), _, a(" 2、当浏览器页面上方出现授权弹窗时，如下图，请务必点击允许，即可调用摄像头 "), v ]) ]), y ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-5d1a919d" ] ]);
});

export {
    J as __tla,
    V as default
};