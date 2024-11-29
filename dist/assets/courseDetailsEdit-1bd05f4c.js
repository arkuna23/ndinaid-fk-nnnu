import {
    _ as Q,
    __tla as S
} from "./ContentPage-f6bcc98e.js";

import {
    p as T,
    u as A,
    T as G,
    U as K,
    r as n,
    f as M,
    o as p,
    C as v,
    l as r,
    k as e,
    a as o,
    c as C,
    F as W,
    y as X,
    v as w,
    D as Y,
    P as Z,
    O as ee,
    av as ae,
    ab as le,
    ac as te,
    aw as re,
    Q as oe,
    J as se,
    __tla as ue
} from "./index-6c08ea4c.js";

import {
    _ as de,
    __tla as ce
} from "./Editor-ef737d2a.js";

import ne, {
    __tla as pe
} from "./UploadCover-f16f2b2c.js";

import {
    v as ie,
    w as _e,
    x as me,
    y as fe,
    o as he,
    __tla as ye
} from "./index-cfc63ccf.js";

import {
    h as be
} from "./tree-05ea8e09.js";

import {
    _ as ge
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Ve,
    __tla as ve
} from "./index-ef4d146e.js";

import {
    __tla as Ce
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as we
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as ke
} from "./file-e038b35d.js";

import {
    __tla as De
} from "./el-image-0d184777.js";

import {
    __tla as xe
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as Ue
} from "./throttle-1adeb119.js";

let k, Ee = Promise.all([ (() => {
    try {
        return S;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})() ]).then(async () => {
    let i;
    i = {
        key: 0,
        class: "footer center-core"
    }, k = ge({
        __name: "courseDetailsEdit",
        setup(Oe) {
            const _ = T(), D = A(), x = G(), a = K({
                id: "",
                name: "",
                ename: "",
                code: "",
                teachingObject: "",
                courseDeptName: "",
                courseDirection: "",
                preCourse: [],
                credit: 0,
                classHours: 0,
                cover: "",
                introduction: "",
                type: "",
                courseDept: "",
                courseDeptCode: ""
            }), U = {
                name: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "blur"
                } ],
                code: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "blur"
                } ],
                credit: [ {
                    validator: (t, l, u) => {
                        /^(?:[0-4]?[0-9](?:\.[0-9])?|50(?:\.0)?)?$/.test(l) ? u() : u(new Error("请输入0-50以内整数/小数，最多可输入一位小数"));
                    },
                    trigger: "blur"
                } ],
                classHours: [ {
                    validator: (t, l, u) => {
                        /^(1000|[1-9]\d{0,2})?$/.test(l) ? u() : u(new Error("请输入1-1000以内整数"));
                    },
                    trigger: "blur"
                } ],
                introduction: [ {
                    validator: (t, l, u) => {
                        l && l.length > 2e3 ? u(new Error("课程简介不能超过2000字符")) : u();
                    },
                    trigger: "change"
                } ]
            }, m = () => {
                D.back(), E();
            }, E = () => {
                Object.keys(a).forEach(t => {
                    a[t] = "";
                });
            }, f = n(null), h = n(null), O = async () => {
                a.cover = await h.value.uploadNow(), f.value.validate(async t => {
                    if (!t) return !1;
                    await H();
                });
            }, j = async () => {}, H = async () => {
                const t = await ie({
                    ...a,
                    preCourse: a.preCourse.join(",")
                });
                t ? _.success("保存成功") : _.error(t.msg);
            }, y = n([]), P = n([]), b = n([]), g = n(!1), R = t => {
                g.value = t;
            }, I = t => {
                a.courseDeptCode = t.code, a.courseDeptName = t.name;
            }, $ = {
                children: "children",
                label: (t, l) => {
                    let u = "";
                    return u = t.code !== null && t.code !== "" ? `${t.name}(${t.code})` : t.name, 
                    u;
                },
                value: "id",
                isLeaf: "leaf",
                emitPath: !1,
                class: "tree-node-custom"
            };
            return M(() => {
                (async () => {
                    const t = await me({
                        status: 0
                    });
                    y.value = be(t);
                })(), (async () => {
                    const t = await fe({
                        keywords: ""
                    });
                    P.value = t || [];
                })(), (async () => {
                    const t = await he({
                        keywords: ""
                    });
                    b.value = t;
                })(), (async () => {
                    const t = await _e({
                        id: x.params.id
                    });
                    Object.keys(a).forEach(l => {
                        t[l] === null ? a[l] = "" : a[l] = t[l];
                    }), t.preCourse !== "" && t.preCourse !== null ? a.preCourse = t.preCourse.split(",") : a.preCourse = [];
                })();
            }), (t, l) => {
                const u = Z, d = ee, c = ae, N = Ve, q = le, z = te, F = re, B = de, J = oe, V = se, L = Q;
                return p(), v(L, {
                    class: "course-teaching",
                    title: "课程详情",
                    onRouterBack: m,
                    noPadding: !0
                }, {
                    default: r(() => [ e(J, {
                        ref_key: "formRef",
                        ref: f,
                        model: o(a),
                        rules: U,
                        size: "large",
                        class: "cont-form pt-12px",
                        "label-position": "top",
                        "label-width": "80px",
                        style: {
                            "overflow-x": "hidden"
                        }
                    }, {
                        default: r(() => [ e(F, {
                            gutter: 20
                        }, {
                            default: r(() => [ e(c, {
                                span: 12
                            }, {
                                default: r(() => [ e(d, {
                                    label: "课程名称",
                                    prop: "name"
                                }, {
                                    default: r(() => [ e(u, {
                                        modelValue: o(a).name,
                                        "onUpdate:modelValue": l[0] || (l[0] = s => o(a).name = s),
                                        placeholder: "请输入课程名称",
                                        maxlength: "50"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(c, {
                                span: 12
                            }, {
                                default: r(() => [ e(d, {
                                    label: "课程英文名称",
                                    prop: "ename"
                                }, {
                                    default: r(() => [ e(u, {
                                        modelValue: o(a).ename,
                                        "onUpdate:modelValue": l[1] || (l[1] = s => o(a).ename = s),
                                        placeholder: "请输入课程英文名称",
                                        maxlength: "100"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(c, {
                                span: 6
                            }, {
                                default: r(() => [ e(d, {
                                    label: "课程代码",
                                    prop: "code"
                                }, {
                                    default: r(() => [ e(u, {
                                        modelValue: o(a).code,
                                        "onUpdate:modelValue": l[2] || (l[2] = s => o(a).code = s),
                                        disabled: !0
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(c, {
                                span: 6
                            }, {
                                default: r(() => [ e(d, {
                                    label: "课程类别",
                                    prop: "type"
                                }, {
                                    default: r(() => [ e(u, {
                                        modelValue: o(a).type,
                                        "onUpdate:modelValue": l[3] || (l[3] = s => o(a).type = s),
                                        maxlength: "10",
                                        placeholder: "请输入课程类别"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(c, {
                                span: 6
                            }, {
                                default: r(() => [ e(d, {
                                    label: "授课对象",
                                    prop: "teachingObject"
                                }, {
                                    default: r(() => [ e(u, {
                                        modelValue: o(a).teachingObject,
                                        "onUpdate:modelValue": l[4] || (l[4] = s => o(a).teachingObject = s),
                                        maxlength: "20",
                                        placeholder: "请输入授课对象"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(c, {
                                span: 6
                            }, {
                                default: r(() => [ e(d, {
                                    label: "开课单位",
                                    prop: "courseDept"
                                }, {
                                    default: r(() => [ e(N, {
                                        modelValue: o(a).courseDept,
                                        "onUpdate:modelValue": l[5] || (l[5] = s => o(a).courseDept = s),
                                        data: o(y),
                                        "check-strictly": "",
                                        "render-after-expand": !1,
                                        placeholder: "请选择开课单位",
                                        style: {
                                            width: "calc(100%)"
                                        },
                                        filterable: "",
                                        clearable: "",
                                        props: $,
                                        onCurrentChange: I
                                    }, null, 8, [ "modelValue", "data" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(c, {
                                span: 6
                            }, {
                                default: r(() => [ e(d, {
                                    label: "课程方向",
                                    prop: "courseDirection"
                                }, {
                                    default: r(() => [ e(u, {
                                        modelValue: o(a).courseDirection,
                                        "onUpdate:modelValue": l[6] || (l[6] = s => o(a).courseDirection = s),
                                        maxlength: "20",
                                        placeholder: "请输入课程方向"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(c, {
                                span: 6
                            }, {
                                default: r(() => [ e(d, {
                                    label: "学分",
                                    prop: "credit"
                                }, {
                                    default: r(() => [ e(u, {
                                        modelValue: o(a).credit,
                                        "onUpdate:modelValue": l[7] || (l[7] = s => o(a).credit = s),
                                        placeholder: "请输入学分"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(c, {
                                span: 6
                            }, {
                                default: r(() => [ e(d, {
                                    label: "学时",
                                    prop: "classHours"
                                }, {
                                    default: r(() => [ e(u, {
                                        modelValue: o(a).classHours,
                                        "onUpdate:modelValue": l[8] || (l[8] = s => o(a).classHours = s),
                                        placeholder: "请输入学时"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(c, {
                                span: 6
                            }, {
                                default: r(() => [ e(d, {
                                    label: "先修课程",
                                    prop: "preCourse"
                                }, {
                                    default: r(() => [ e(z, {
                                        modelValue: o(a).preCourse,
                                        "onUpdate:modelValue": l[9] || (l[9] = s => o(a).preCourse = s),
                                        filterable: "",
                                        size: "large",
                                        placeholder: "请选择先修课程",
                                        style: {
                                            width: "360px"
                                        },
                                        clearable: "",
                                        multiple: "",
                                        "multiple-limit": 3,
                                        "collapse-tags": "",
                                        "collapse-tags-tooltip": ""
                                    }, {
                                        default: r(() => [ (p(!0), C(W, null, X(o(b), s => (p(), 
                                        v(q, {
                                            key: s.id,
                                            label: s.name,
                                            value: s.id
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(d, {
                            label: "课程封面",
                            prop: "cover"
                        }, {
                            default: r(() => [ e(ne, {
                                ref_key: "uploadCoverRef",
                                ref: h,
                                "is-small": !1,
                                onChooseCover: j,
                                defaultId: o(a).cover
                            }, null, 8, [ "defaultId" ]) ]),
                            _: 1
                        }), e(d, {
                            label: "课程简介",
                            prop: "introduction"
                        }, {
                            default: r(() => [ e(B, {
                                modelValue: o(a).introduction,
                                "onUpdate:modelValue": l[10] || (l[10] = s => o(a).introduction = s),
                                height: "100px",
                                onFullScreenChange: R
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]), o(g) ? Y("", !0) : (p(), C("div", i, [ e(V, {
                        onClick: m
                    }, {
                        default: r(() => [ w("取消") ]),
                        _: 1
                    }), e(V, {
                        type: "primary",
                        onClick: O
                    }, {
                        default: r(() => [ w("保存") ]),
                        _: 1
                    }) ])) ]),
                    _: 1
                });
            };
        }
    }, [ [ "__scopeId", "data-v-0c2f0116" ] ]);
});

export {
    Ee as __tla,
    k as default
};