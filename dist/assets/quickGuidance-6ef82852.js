import {
    u as V,
    T as k,
    r as d,
    o as b,
    C as A,
    l as o,
    t as a,
    k as n,
    a as p,
    m as c,
    v as g,
    a8 as z,
    J as U,
    aU as w,
    __tla as R
} from "./index-6c08ea4c.js";

import {
    _ as q
} from "./quickGuidance-147e09c6.js";

import {
    A as F,
    __tla as G
} from "./index-9567cbf6.js";

let _, J = Promise.all([ (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})() ]).then(async () => {
    let u, i;
    u = a("div", {
        style: {
            padding: "20px"
        }
    }, [ a("div", {
        style: {
            "text-align": "center",
            "margin-bottom": "30px"
        }
    }, [ a("img", {
        src: q,
        alt: ""
    }) ]), a("div", {
        style: {
            "font-size": "18px",
            "font-weight": "bold",
            color: "#333",
            margin: "10px 0"
        }
    }, "欢迎进入课程教学！快来试试引用资源包高效备课吧！"), a("div", {
        style: {
            "font-size": "14px",
            color: "#666"
        }
    }, "通过引用资源模块中的课程资源包，可一键完成课程内容建设，资源包中包含导学、教材、教学目标、知识图谱、目录、FAQ、教学资料、学习资料、测验、作业、项目等资源，支持一键引用，快去试试吧!") ], -1), 
    i = {
        style: {
            margin: "20px 0"
        }
    }, _ = {
        __name: "quickGuidance",
        setup(P, {
            expose: h
        }) {
            const x = V(), r = k(), t = d(!1), l = d(!1), f = () => {
                x.push({
                    name: "CourseReferenceResource",
                    params: {
                        teachCourseId: r.params.teachCourseId,
                        teachArrangementId: r.params.teachArrangementId
                    }
                });
            }, v = () => {
                t.value = !1, l.value && F({
                    teachCourseId: r.params.teachCourseId
                }).then(y => {});
            };
            return h({
                open: () => {
                    t.value = !0;
                }
            }), (y, e) => {
                const C = z, m = U, I = w;
                return b(), A(I, {
                    modelValue: p(t),
                    "onUpdate:modelValue": e[1] || (e[1] = s => c(t) ? t.value = s : null),
                    title: "快速指引",
                    width: "590px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClosed: e[2] || (e[2] = s => l.value = !1)
                }, {
                    default: o(() => [ u, a("div", i, [ n(C, {
                        modelValue: p(l),
                        "onUpdate:modelValue": e[0] || (e[0] = s => c(l) ? l.value = s : null),
                        label: "不再提醒",
                        size: "large"
                    }, null, 8, [ "modelValue" ]), n(m, {
                        type: "primary",
                        onClick: f,
                        style: {
                            float: "right",
                            "margin-top": "5px"
                        }
                    }, {
                        default: o(() => [ g("去引用") ]),
                        _: 1
                    }), n(m, {
                        onClick: v,
                        style: {
                            float: "right",
                            "margin-right": "20px",
                            "margin-top": "5px"
                        }
                    }, {
                        default: o(() => [ g("知道了") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    };
});

export {
    J as __tla,
    _ as default
};