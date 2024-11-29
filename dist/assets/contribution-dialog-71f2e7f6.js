import {
    p as N,
    T as W,
    r as p,
    U as G,
    o as u,
    c as g,
    k as r,
    l,
    v as C,
    t as o,
    a as h,
    F as L,
    y as Y,
    C as M,
    B as z,
    m as $,
    _ as ee,
    K as ae,
    J as te,
    cK as se,
    O as le,
    Q as re,
    cn as ie,
    aU as oe,
    R as ne,
    S as de,
    __tla as ue
} from "./index-6c08ea4c.js";

import {
    a as ce,
    s as pe,
    b as ge,
    __tla as me
} from "./member-bed692a1.js";

import {
    _ as Ae
} from "./_plugin-vue_export-helper-1b428a4d.js";

let U, he = Promise.all([ (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return me;
    } catch {}
})() ]).then(async () => {
    let m, f, b, y, I, x, v, w, k, E;
    m = c => (ne("data-v-18f8a64e"), c = c(), de(), c), f = {
        class: "contribution-dialog"
    }, b = {
        style: {
            display: "flex",
            "justify-content": "space-between",
            "align-items": "center",
            "margin-top": "11px",
            "margin-bottom": "29px"
        }
    }, y = m(() => o("span", {
        style: {
            "margin-left": "20px"
        }
    }, "请设置项目组成员贡献度权重：", -1)), I = {
        class: "contribution-form"
    }, x = {
        style: {
            display: "flex",
            "align-items": "center",
            width: "200px"
        }
    }, v = {
        key: 0,
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAMjSURBVEiJrZaxaxxXEIe/ebsSiePChQqBtGEL/wEKkSDBzYncHrLPIkohcHDjFAE36eIiEEihIgGnNLhIIQwuAiqkIK0sfAe5IgLBXUBdilyxWBJc4ApDFGJyt29S7EqcdLe3G8dT7b73m/lmlzdvRihg71Z23rdWlwVzA1EfmE63OqhEit03RrZfPL/9a14sGbfplcOPEf0e5HqRxEDbqHx5VK/+9J+A06VNf2JicgOYLwYaslav989qp/FJlAucLW+XBLOBMPWasMSUrmJXj+vLjUzgbHm7hJiagPu/YOdM+qgNBqHnQH/pmR/3bbPIlyl8njr/UIDadVyzEO3djADM2Xoc26K/sev2rjx1e1eeAt1ctTAVx3bj7NUAeB9tr1D4gOiTqLH4KmosvgJ9UsyH+ZSRfqFxHhZ0xOn1Ho16zrWUIV4QzgPNIj6qsnNcv7U8uOaVw2cIS0X8LbznqtrbIuby3kuQQ6AD+lLV/gF0cezeUBJO/wtiswRMIWZGkKvANOgccG1QK2pXxKuENZTyxQ2+elGvflck6yzzyuHXCGsXFoW6QRm6tqyw5gXhvdeGBeE9Fb4Z2lDxDehQKaSFv+6Vw7UhpzxY4rM++vKw0+IFu3+CXs0OoT86vXc+S8og2/zSz2/FE3+tg9zJVsmpAc0pXrkTT/797XgNJJpxMAA6BqGdFwxrT96IRjQyCvu5sTC/vAmNwr4RZScnrdOT/tutwZWZIJybCcK5wbVEI6djgcqWOapVWyDZv1X0gMZiH8AvbV7zgvCxQFOg6QXhY7+0mRR3omllxkHaJ7XqYXLFCA8ys0qDzFZ278bu5O/AfQE3Pfb3Y3fyt9nK7l0AFT3I5iWM837oBWGTkR1D2yBd4IPs7AE4SGp65PzTOqpVF2CgHzqOWWVkf5PrBWAkmhEwpZPG5gIw2rsZqdpVhX6B4IVMoa/YT8+6/QUgwHF9uYHagCKdPJ/WuTzPDAHPoI5jFhh74nKt5bjmw8swyBuEK7srKA9BCw7C0kZ4cPT81lamokiYmSCcE2FF4AYqPoOjvmiksK/K1kmtepgX619CTzP//D3gnQAAAABJRU5ErkJggg==",
        style: {
            width: "14px",
            height: "14px",
            "margin-right": "5px"
        },
        alt: ""
    }, w = {
        key: 1,
        style: {
            width: "14px",
            height: "14px",
            "margin-right": "5px"
        }
    }, k = [ "title" ], E = m(() => o("span", {
        style: {
            "margin-left": "5px"
        }
    }, "%", -1)), U = Ae({
        __name: "contribution-dialog",
        emits: [ "refresh" ],
        setup(c, {
            expose: F,
            emit: K
        }) {
            const V = N(), _ = W(), q = p(null), O = K, d = p(!1), i = G({
                data: []
            }), P = p(""), B = p({}), X = () => {
                i.data = [];
            }, R = () => {
                q.value.validate(t => {
                    if (t) {
                        const e = [];
                        let s = 0;
                        if (i.data.forEach(n => {
                            e.push({
                                groupUserId: n.id,
                                contribution: n.contribution
                            }), s += Number(n.contribution);
                        }), s !== 100) return void V.warning("贡献度总和必须为100");
                        pe(e).then(n => {
                            V.success("贡献度保存成功"), O("refresh");
                        });
                    }
                });
            }, j = () => {
                ge({
                    projectId: _.params.projectId,
                    groupId: B.value.groupId
                }).then(t => {
                    if (t && t.length > 0) {
                        const e = {};
                        t.forEach(s => {
                            e[s.userId] = s.contribution;
                        }), i.data && i.data.length > 0 && i.data.forEach(s => {
                            s.contribution = Number(e[s.userId]);
                        });
                    }
                });
            };
            return F({
                openDialog: t => {
                    d.value = !0, P.value = t.groupId ?? "", B.value = t, ce({
                        projectId: _.params.projectId,
                        groupId: t.groupId
                    }).then(e => {
                        i.data = e;
                    });
                }
            }), (t, e) => {
                const s = ee, n = ae, A = te, H = se, J = le, Q = re, S = ie, T = oe;
                return u(), g("div", f, [ r(T, {
                    title: "贡献度设置",
                    modelValue: h(d),
                    "onUpdate:modelValue": e[1] || (e[1] = a => $(d) ? d.value = a : null),
                    width: "520px",
                    showClose: !0,
                    onClose: X
                }, {
                    footer: l(() => [ r(A, {
                        type: "default",
                        onClick: e[0] || (e[0] = a => d.value = !1)
                    }, {
                        default: l(() => [ C("取消") ]),
                        _: 1
                    }), r(A, {
                        type: "primary",
                        onClick: R
                    }, {
                        default: l(() => [ C("确定") ]),
                        _: 1
                    }) ]),
                    default: l(() => [ o("div", b, [ y, r(A, {
                        type: "text"
                    }, {
                        default: l(() => [ o("span", {
                            style: {
                                "margin-right": "5px"
                            },
                            class: "ai-setting",
                            onClick: j
                        }, "智能设置"), r(n, {
                            class: "item",
                            effect: "dark",
                            content: "根据任务分配情况智能设置项目组成员贡献度",
                            placement: "top"
                        }, {
                            default: l(() => [ r(s, {
                                icon: "svg-icon:help-circle"
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]), r(S, {
                        "max-height": "300"
                    }, {
                        default: l(() => [ o("div", I, [ r(Q, {
                            ref_key: "ContributionFormRef",
                            ref: q,
                            model: h(i),
                            "hide-required-asterisk": !0,
                            "label-width": "220px",
                            "label-position": "left"
                        }, {
                            default: l(() => [ (u(!0), g(L, null, Y(h(i).data, (a, Z) => (u(), 
                            M(J, {
                                key: a.arrangementRelStuId,
                                prop: `data.${Z}.contribution`,
                                rules: [ {
                                    required: !0,
                                    message: "请输入贡献度",
                                    trigger: "blur"
                                }, {
                                    type: "number",
                                    min: 1,
                                    message: "最小值不能为0",
                                    trigger: "blur"
                                } ]
                            }, {
                                label: l(() => [ o("div", x, [ a.isLeader == "1" ? (u(), 
                                g("img", v)) : (u(), g("div", w)), o("span", {
                                    class: "overSpan",
                                    title: `${a.nickName}\uFF08${a.number}\uFF09`
                                }, z(a.nickName) + "（" + z(a.number) + "）", 9, k) ]) ]),
                                default: l(() => [ r(H, {
                                    class: "neu",
                                    modelValue: a.contribution,
                                    "onUpdate:modelValue": D => a.contribution = D,
                                    size: "large",
                                    min: 0,
                                    precision: 0,
                                    controls: !1,
                                    max: 100,
                                    style: {
                                        width: "80px"
                                    }
                                }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), E ]),
                                _: 2
                            }, 1032, [ "prop" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "model" ]) ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-18f8a64e" ] ]);
});

export {
    he as __tla,
    U as default
};