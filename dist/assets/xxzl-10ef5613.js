import {
    h as de,
    u as ce,
    T as pe,
    r as n,
    e as me,
    f as ye,
    o as t,
    c as o,
    t as s,
    a as i,
    k as m,
    v as y,
    B as p,
    m as he,
    F as q,
    y as G,
    l as h,
    C,
    D as g,
    z as ve,
    E as _e,
    _ as be,
    ak as fe,
    K as xe,
    J as ge,
    Y as ke,
    R as Ie,
    S as Ce,
    __tla as Te
} from "./index-6c08ea4c.js";

import {
    _ as Le,
    __tla as Se
} from "./index-1024512a.js";

import {
    _ as ze
} from "./appraise-c016687f.js";

import {
    g as we
} from "./file.data-7b6aa8ed.js";

import {
    h as Ae,
    __tla as De
} from "./file-e038b35d.js";

import {
    b as Ne,
    v as Be,
    a as Ee,
    d as Fe,
    __tla as je
} from "./index-43a52aa3.js";

import {
    _ as Qe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as Re
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ve
} from "./index-ef4d146e.js";

import "./teachingResourceIcon7-1c1a8557.js";

let O, Pe = Promise.all([ (() => {
    try {
        return Te;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})() ]).then(async () => {
    let d, T, L, S, z, w, A, D, N, B, E, F, j, Q, R, V, P, U, H, J;
    d = b => (Ie("data-v-b37347b0"), b = b(), Ce(), b), T = {
        id: "stuXxzl",
        style: {
            padding: "20px 0 0"
        }
    }, L = {
        style: {
            padding: "0 30px"
        },
        class: "height_box"
    }, S = {
        key: 0,
        class: "neu-no-data",
        style: {
            height: "500px"
        }
    }, z = d(() => s("p", {
        class: ""
    }, "暂无数据", -1)), w = {
        key: 1,
        class: "contentArea"
    }, A = {
        style: {
            color: "#333",
            "font-size": "12px",
            "line-height": "40px"
        }
    }, D = d(() => s("span", {
        style: {
            display: "inline-block",
            "margin-left": "30px"
        }
    }, "仅查看计入考核资料", -1)), N = d(() => s("div", {
        style: {
            clear: "both"
        }
    }, null, -1)), B = {
        key: 0,
        class: "resList"
    }, E = [ "src" ], F = {
        class: "file-name__span"
    }, j = d(() => s("img", {
        src: ze,
        alt: "",
        style: {
            cursor: "pointer",
            position: "relative",
            top: "3px"
        }
    }, null, -1)), Q = d(() => s("br", null, null, -1)), R = {
        key: 0,
        style: {
            float: "right"
        }
    }, V = {
        style: {
            margin: "10px 0 5px"
        }
    }, P = d(() => s("span", {
        style: {
            "font-size": "12px",
            color: "#999"
        }
    }, "状态：  ", -1)), U = {
        style: {
            "font-size": "12px",
            color: "#666"
        }
    }, H = {
        key: 1,
        style: {
            display: "flex",
            height: "100%",
            "align-items": "center",
            "justify-content": "center",
            "flex-direction": "column"
        }
    }, J = d(() => s("p", {
        style: {
            "margin-top": "10px"
        }
    }, "暂无数据", -1)), O = Qe({
        __name: "xxzl",
        setup(b) {
            const W = de(), Z = ce(), r = pe(), f = n();
            n();
            const $ = n([ "未发布", "未开始", "进行中", "已截止" ]), v = n([]), K = n(!1), ee = n([ {
                label: "视频",
                value: 1,
                num: 0
            }, {
                label: "音频",
                value: 2,
                num: 0
            }, {
                label: "文档",
                value: 3,
                num: 0
            }, {
                label: "图片",
                value: 4,
                num: 0
            }, {
                label: "压缩包",
                value: 5,
                num: 0
            }, {
                label: "链接",
                value: 6,
                num: 0
            }, {
                label: "MD",
                value: 7,
                num: 0
            } ]), ae = me(() => [ {
                label: "资料类型",
                key: "resType",
                type: "list",
                options: ee.value
            }, {
                label: "资料状态",
                key: "status",
                type: "list",
                options: [ {
                    label: "未学习",
                    value: 0
                }, {
                    label: "学习中",
                    value: 1
                }, {
                    label: "已完成",
                    value: 2
                } ]
            }, {
                label: "时间排序",
                key: "sortType",
                type: "list",
                default: 1,
                options: [ {
                    label: "发布时间正序",
                    value: 1
                }, {
                    label: "发布时间降序",
                    value: 2
                }, {
                    label: "截止时间正序",
                    value: 3
                }, {
                    label: "截止时间降序",
                    value: 4
                } ]
            } ]), se = e => "", _ = n(!1);
            n(0);
            const te = e => {
                _.value = e, f.value.handleQuery();
            }, k = n([]), le = n({}), re = e => {
                le.value = e, M(e);
            }, M = (e, l) => {
                K.value = l, Ne({
                    teachCourseId: r.params.teachCourseId,
                    currentClassId: r.params.classId,
                    name: e ? e.name : "",
                    resType: e ? e.resType : "",
                    studyStatus: e ? e.status : "",
                    sortType: e ? e.sortType : 1,
                    isAssess: _.value ? 1 : ""
                }).then(u => {
                    v.value = u.resList || [], v.value.forEach(c => {
                        c.state = c.status - 1, c.resName = c.name, c.eid = c.dataId;
                    }), k.value = [ u.finishNum, u.resNum, Number(u.completionProgress.replace(/%/g, "")) ];
                });
            }, X = (e, l) => {
                Be({
                    teachCourseId: r.params.teachCourseId,
                    currentClassId: r.params.classId,
                    resId: l.id
                }).then(u => {
                    u.status == 3 ? e(l) : _e.alert("该资源现在不可以学习或下载", "提示", {
                        confirmButtonText: "确认"
                    });
                });
            }, ne = e => {
                if (Ee({
                    teachCourseId: r.params.teachCourseId,
                    currentClassId: r.params.classId,
                    resId: e.id
                }).then(l => {
                    f.value.handleQuery();
                }), e.resType == 6) window.open(e.resLink, "_blank"); else {
                    const {
                        href: l
                    } = Z.resolve({
                        name: "ResourcesLearningIndex",
                        params: {
                            teachCourseId: r.params.teachCourseId,
                            classId: r.params.classId,
                            resId: e.id,
                            u: W.getUser.id
                        }
                    });
                    window.open(l, "_blank");
                }
            }, oe = e => {
                Fe({
                    teachCourseId: r.params.teachCourseId,
                    currentClassId: r.params.classId,
                    resId: e.id
                }).then(l => {
                    f.value.handleQuery();
                }), Ae(e.dataId, e.name);
            };
            return ye(() => {
                M(null, !0);
            }), (e, l) => {
                const u = be, c = Le, ie = fe, I = xe, Y = ge, ue = ke;
                return t(), o("div", T, [ s("div", L, [ !i(v).length && i(K) ? (t(), 
                o("div", S, [ m(u, {
                    icon: "svg-icon:bg-no-data-stu",
                    size: 200,
                    class: "",
                    style: {
                        height: "160px"
                    }
                }), z ])) : (t(), o("div", w, [ m(c, {
                    ref_key: "comSearchRef",
                    ref: f,
                    borderBox: !0,
                    searchList: i(ae),
                    keywordsInfo: {
                        label: "资料名称/标签",
                        key: "name"
                    },
                    onHandleSearch: re,
                    class: "left"
                }, null, 8, [ "searchList" ]), s("div", A, [ y("    已完成" + p(i(k)[0]) + "/" + p(i(k)[1]), 1), D, y(), m(ie, {
                    modelValue: i(_),
                    "onUpdate:modelValue": l[0] || (l[0] = a => he(_) ? _.value = a : null),
                    class: "ml-2",
                    style: {
                        "--el-switch-on-color": "#63D90A"
                    },
                    onChange: te
                }, null, 8, [ "modelValue" ]) ]), N, i(v).length ? (t(), o("div", B, [ (t(!0), 
                o(q, null, G(i(v), a => (t(), o("div", {
                    key: a.id,
                    style: {
                        "border-bottom": "1px solid #EEF1F7",
                        padding: "10px 15px"
                    }
                }, [ s("div", null, [ s("img", {
                    src: i(we)(a.resType),
                    alt: "",
                    style: {
                        "margin-right": "5px",
                        position: "relative",
                        top: "4px"
                    }
                }, null, 8, E), m(I, {
                    effect: "dark",
                    content: a.name,
                    placement: "top",
                    enterable: !1
                }, {
                    default: h(() => [ s("span", F, p(a.name), 1) ]),
                    _: 2
                }, 1032, [ "content" ]), (t(!0), o(q, null, G(a.tagList, x => (t(), 
                o("div", {
                    class: "resourceLabel",
                    key: x.tagId
                }, p(x.tagName), 1))), 128)), a.isAssess ? (t(), C(I, {
                    key: 0,
                    effect: "dark",
                    content: "计入考核点",
                    placement: "top",
                    enterable: !1
                }, {
                    default: h(() => [ j ]),
                    _: 1
                })) : g("", !0), m(I, {
                    effect: "dark",
                    placement: "top",
                    enterable: !1,
                    disabled: !a.state
                }, {
                    content: h(() => [ y("开始时间：" + p(a.resCtl.openTimeStr), 1), Q, y("截止时间：" + p(a.resCtl.closeTimeStr || "无"), 1) ]),
                    default: h(() => [ s("div", {
                        class: ve([ "stateLabel", {
                            stateLabel1: a.state == 2,
                            stateLabel2: a.state == 3
                        } ])
                    }, p(i($)[a.state]), 3) ]),
                    _: 2
                }, 1032, [ "disabled" ]) ]), a.state == 2 ? (t(), o("div", R, [ [ 3, 4, 7 ].includes(a.resType) && a.resCtl.isDownload || a.resType == 5 ? (t(), 
                C(Y, {
                    key: 0,
                    size: "small",
                    style: {
                        position: "relative",
                        top: "10px"
                    },
                    onClick: x => X(oe, a)
                }, {
                    default: h(() => [ y("下载") ]),
                    _: 2
                }, 1032, [ "onClick" ])) : g("", !0), a.resType != 5 ? (t(), C(Y, {
                    key: 1,
                    type: "primary",
                    size: "small",
                    style: {
                        position: "relative",
                        top: "10px"
                    },
                    onClick: x => X(ne, a)
                }, {
                    default: h(() => [ y("去学习") ]),
                    _: 2
                }, 1032, [ "onClick" ])) : g("", !0) ])) : g("", !0), s("div", V, [ P, m(ue, {
                    style: {
                        display: "inline-block",
                        width: "50px"
                    },
                    percentage: a.studyStatus == 1 ? 50 : a.studyStatus == 2 ? 100 : 0,
                    color: "#63D90A",
                    format: se
                }, null, 8, [ "percentage" ]), s("span", U, "  " + p(a.studyStatus == 1 ? "学习中" : a.studyStatus == 2 ? "已完成" : "未学习"), 1) ]) ]))), 128)) ])) : (t(), 
                o("div", H, [ m(u, {
                    icon: "svg-icon:bg-no-data-stu",
                    size: 200,
                    class: "",
                    style: {
                        height: "160px"
                    }
                }), J ])) ])) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-b37347b0" ] ]);
});

export {
    Pe as __tla,
    O as default
};