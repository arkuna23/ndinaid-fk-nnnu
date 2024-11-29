import {
    r as d,
    o as p,
    C as E,
    l as c,
    k as u,
    v as t,
    t as m,
    c as f,
    F,
    y as I,
    B as R,
    a8 as S,
    J as j,
    aU as q,
    R as A,
    S as B,
    __tla as J
} from "./index-6c08ea4c.js";

import {
    _ as P
} from "./_plugin-vue_export-helper-1b428a4d.js";

let _, Q = Promise.all([ (() => {
    try {
        return J;
    } catch {}
})() ]).then(async () => {
    let r, h, C;
    r = (n => (A("data-v-6b282f5f"), n = n(), B(), n))(() => m("div", {
        class: "tipStyle"
    }, [ m("span", {
        class: "tipIcon"
    }), t("说明：您可根据课程教学方式及内容自定义课程内容的栏目，编辑栏目结果不会影响教学数据，该栏目将同步至学生端显示") ], -1)), h = {
        style: {
            "padding-left": "10px"
        }
    }, C = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, _ = P({
        __name: "quoteResource",
        setup(n, {
            expose: y
        }) {
            const i = d(!1), s = d(!0), o = d([ {
                name: "课程简介",
                isCheck: !0
            }, {
                name: "导学",
                isCheck: !0
            }, {
                name: "教材",
                isCheck: !0
            }, {
                name: "教学目标",
                isCheck: !0
            }, {
                name: "知识技能点",
                isCheck: !0
            }, {
                name: "目录",
                isCheck: !0
            }, {
                name: "FQA",
                isCheck: !0
            }, {
                name: "教学文档",
                isCheck: !0
            }, {
                name: "学习资料",
                isCheck: !0
            }, {
                name: "试题",
                isCheck: !0
            }, {
                name: "测验",
                isCheck: !0
            }, {
                name: "作业",
                isCheck: !0
            }, {
                name: "项目",
                isCheck: !0
            }, {
                name: "考试",
                isCheck: !0
            } ]), g = e => {
                o.value.forEach(a => {
                    a.isCheck = e;
                });
            }, x = () => {
                o.value.filter(e => e.isCheck == 0)[0] ? s.value = !1 : s.value = !0;
            }, V = () => {
                s.value = !0, o.value.forEach(e => {
                    e.isCheck = !0;
                });
            };
            return y({
                open: e => {
                    i.value = !0;
                }
            }), (e, a) => {
                const k = S, v = j, b = q;
                return p(), E(b, {
                    modelValue: i.value,
                    "onUpdate:modelValue": a[2] || (a[2] = l => i.value = l),
                    title: "引用资源包-选择内容",
                    width: "780px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClosed: V
                }, {
                    default: c(() => [ r, u(k, {
                        modelValue: s.value,
                        "onUpdate:modelValue": a[0] || (a[0] = l => s.value = l),
                        onChange: g,
                        style: {
                            "margin-left": "12px"
                        }
                    }, {
                        default: c(() => [ t("全选") ]),
                        _: 1
                    }, 8, [ "modelValue" ]), m("div", h, [ (p(!0), f(F, null, I(o.value, (l, U) => (p(), 
                    f("div", {
                        key: U,
                        style: {
                            width: "145px",
                            display: "inline-block"
                        }
                    }, [ u(k, {
                        modelValue: l.isCheck,
                        "onUpdate:modelValue": w => l.isCheck = w,
                        onChange: x,
                        style: {
                            display: "inline-block",
                            "margin-right": "10px",
                            position: "relative",
                            top: "3px"
                        }
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), t(R(l.name), 1) ]))), 128)) ]), m("div", C, [ u(v, {
                        onClick: a[1] || (a[1] = l => i.value = !1)
                    }, {
                        default: c(() => [ t("取消") ]),
                        _: 1
                    }), u(v, {
                        type: "primary",
                        onClick: e.sub
                    }, {
                        default: c(() => [ t("确定") ]),
                        _: 1
                    }, 8, [ "onClick" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-6b282f5f" ] ]);
});

export {
    Q as __tla,
    _ as default
};