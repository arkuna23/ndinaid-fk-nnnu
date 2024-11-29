import {
    d as Q,
    p as X,
    r as i,
    aZ as Y,
    e as z,
    e7 as ee,
    aR as ae,
    f as le,
    o as m,
    c as f,
    k as s,
    t as e,
    l as r,
    a as t,
    v as y,
    B as h,
    m as w,
    F as b,
    y as F,
    C as te,
    L as se,
    P as re,
    J as ue,
    ab as oe,
    ac as ne,
    __tla as de
} from "./index-6c08ea4c.js";

import {
    _ as ce,
    __tla as ie
} from "./index-51b199d8.js";

import {
    f as me,
    __tla as pe
} from "./formatTime-de6f1520.js";

import {
    a as ve,
    __tla as _e
} from "./index-d1db0401.js";

import {
    E as fe,
    __tla as ye
} from "./index-ee838148.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let L, he = Promise.all([ (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})() ]).then(async () => {
    let g, k, V, U, S, J, N, O, $, I, R, C;
    g = {
        class: "flex"
    }, k = e("div", {
        class: "card-header"
    }, [ e("span", null, "连接") ], -1), V = {
        class: "flex items-center"
    }, U = e("span", {
        class: "mr-4 text-lg font-medium"
    }, " 连接状态: ", -1), S = e("hr", {
        class: "my-4"
    }, null, -1), J = {
        class: "flex"
    }, N = e("p", {
        class: "mt-4 text-lg font-medium"
    }, "消息输入框", -1), O = e("hr", {
        class: "my-4"
    }, null, -1), $ = e("div", {
        class: "card-header"
    }, [ e("span", null, "消息记录") ], -1), I = {
        class: "max-h-80 overflow-auto"
    }, R = {
        class: "flex items-center"
    }, C = e("span", {
        class: "text-primary mr-2 font-medium"
    }, "收到消息:", -1), L = Q({
        name: "InfraWebSocket",
        __name: "index",
        setup(xe) {
            const x = X(), p = i("https://neustudy.neumooc.com/infra/ws".replace("http", "ws") + "?token=" + Y()), o = z(() => D.value === "OPEN"), Z = z(() => o.value ? "success" : "red"), {
                status: D,
                data: n,
                send: j,
                close: q,
                open: A
            } = ee(p.value, {
                autoReconnect: !1,
                heartbeat: !0
            }), v = i([]);
            ae(() => {
                if (n.value) try {
                    if (n.value === "pong") return;
                    const d = JSON.parse(n.value), l = d.type, u = JSON.parse(d.content);
                    if (!l) return void x.error("未知的消息类型：" + n.value);
                    if (l === "demo-message-receive") return void (u.single ? v.value.push({
                        text: `\u3010\u5355\u53D1\u3011\u7528\u6237\u7F16\u53F7(${u.fromUserId})\uFF1A${u.text}`,
                        time: new Date().getTime()
                    }) : v.value.push({
                        text: `\u3010\u7FA4\u53D1\u3011\u7528\u6237\u7F16\u53F7(${u.fromUserId})\uFF1A${u.text}`,
                        time: new Date().getTime()
                    }));
                    if (l === "notice-push") return void v.value.push({
                        text: `\u3010\u7CFB\u7EDF\u901A\u77E5\u3011\uFF1A${u.title}`,
                        time: new Date().getTime()
                    });
                    x.error("未处理消息：" + n.value);
                } catch {
                    x.error("处理消息发生异常：" + n.value);
                }
            });
            const c = i(""), _ = i(""), G = () => {
                const d = JSON.stringify({
                    text: c.value,
                    toUserId: _.value
                }), l = JSON.stringify({
                    type: "demo-message-send",
                    content: d
                });
                j(l), c.value = "";
            }, H = () => {
                o.value ? q() : A();
            }, P = i([]);
            return le(async () => {
                P.value = await ve();
            }), (d, l) => {
                const u = ce, K = se, T = re, B = ue, E = oe, M = ne, W = fe;
                return m(), f(b, null, [ s(u, {
                    title: "WebSocket 实时通信",
                    url: "https://doc.iocoder.cn/websocket/"
                }), e("div", g, [ s(W, {
                    gutter: 12,
                    class: "w-1/2",
                    shadow: "always"
                }, {
                    header: r(() => [ k ]),
                    default: r(() => [ e("div", V, [ U, s(K, {
                        color: t(Z)
                    }, {
                        default: r(() => [ y(h(t(D)), 1) ]),
                        _: 1
                    }, 8, [ "color" ]) ]), S, e("div", J, [ s(T, {
                        modelValue: t(p),
                        "onUpdate:modelValue": l[0] || (l[0] = a => w(p) ? p.value = a : null),
                        disabled: ""
                    }, {
                        prepend: r(() => [ y("服务地址") ]),
                        _: 1
                    }, 8, [ "modelValue" ]), s(B, {
                        type: t(o) ? "danger" : "primary",
                        onClick: H
                    }, {
                        default: r(() => [ y(h(t(o) ? "关闭连接" : "开启连接"), 1) ]),
                        _: 1
                    }, 8, [ "type" ]) ]), N, O, s(T, {
                        modelValue: t(c),
                        "onUpdate:modelValue": l[1] || (l[1] = a => w(c) ? c.value = a : null),
                        autosize: {
                            minRows: 2,
                            maxRows: 4
                        },
                        disabled: !t(o),
                        clearable: "",
                        type: "textarea",
                        placeholder: "请输入你要发送的消息"
                    }, null, 8, [ "modelValue", "disabled" ]), s(M, {
                        modelValue: t(_),
                        "onUpdate:modelValue": l[2] || (l[2] = a => w(_) ? _.value = a : null),
                        class: "mt-4",
                        placeholder: "请选择发送人"
                    }, {
                        default: r(() => [ s(E, {
                            key: "",
                            label: "所有人",
                            value: ""
                        }), (m(!0), f(b, null, F(t(P), a => (m(), te(E, {
                            key: a.id,
                            label: a.nickname,
                            value: a.id
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), s(B, {
                        disabled: !t(o),
                        block: "",
                        class: "ml-2 mt-4",
                        type: "primary",
                        onClick: G
                    }, {
                        default: r(() => [ y(" 发送 ") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    _: 1
                }), s(W, {
                    gutter: 12,
                    class: "w-1/2",
                    shadow: "always"
                }, {
                    header: r(() => [ $ ]),
                    default: r(() => [ e("div", I, [ e("ul", null, [ (m(!0), f(b, null, F(t(v).reverse(), a => (m(), 
                    f("li", {
                        key: a.time,
                        class: "mt-2"
                    }, [ e("div", R, [ C, e("span", null, h(t(me)(a.time)), 1) ]), e("div", null, h(a.text), 1) ]))), 128)) ]) ]) ]),
                    _: 1
                }) ]) ], 64);
            };
        }
    });
});

export {
    he as __tla,
    L as default
};