import {
    h as ae,
    p as re,
    r as i,
    U as le,
    e as te,
    bB as oe,
    o as z,
    C as H,
    l,
    k as r,
    a as t,
    H as ue,
    A as se,
    t as w,
    v as D,
    m as de,
    P as ce,
    O as ie,
    av as ne,
    aw as pe,
    Q as me,
    J as ge,
    aU as _e,
    a9 as fe,
    R as ve,
    S as ke,
    n as M,
    __tla as he
} from "./index-6c08ea4c.js";

import {
    _ as ye,
    __tla as be
} from "./Editor-ef737d2a.js";

import {
    e as Ve,
    f as Ce
} from "./validate-b72f006c.js";

import Ue, {
    __tla as we
} from "./UploadCover-f16f2b2c.js";

import {
    c as xe,
    u as Ne,
    g as Ie,
    __tla as Se
} from "./resApi-8ab67bac.js";

import {
    g as Ee,
    u as je,
    c as Oe,
    __tla as Pe
} from "./list-724ebf74.js";

import {
    _ as qe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ze
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as He
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as De
} from "./file-e038b35d.js";

import {
    __tla as Me
} from "./el-image-0d184777.js";

import {
    __tla as Re
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as Ae
} from "./throttle-1adeb119.js";

let R, Fe = Promise.all([ (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})() ]).then(async () => {
    let x, N, I;
    x = "" + new URL("pkgIcon1-c7c0c277.png", import.meta.url).href, N = (k => (ve("data-v-b12d972f"), 
    k = k(), ke(), k))(() => w("div", {
        style: {
            "text-align": "center",
            margin: "10px"
        }
    }, [ w("img", {
        src: x,
        alt: ""
    }) ], -1)), I = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, R = qe({
        __name: "addStep1",
        emits: [ "refresh" ],
        setup(k, {
            expose: A,
            emit: F
        }) {
            const p = ae(), h = re(), _ = i(!1), S = F, e = le({
                id: "",
                pkgName: "",
                pkgCode: "",
                pkgDirection: "",
                pkgCover: "",
                pkgIntroduction: "",
                pkgStatus: "",
                pkgType: 1,
                pkgCompleteStatus: 0,
                courseScore: "",
                courseEnglishName: "",
                courseCategory: "",
                courseObject: "",
                courseUnit: "",
                courseHour: "",
                coursePrerequisite: ""
            }), T = {
                pkgName: [ {
                    required: !0,
                    message: "请输入资源包名称",
                    trigger: "blur"
                } ],
                pkgCode: [ {
                    required: !0,
                    message: "请输入资源包代码",
                    trigger: "blur"
                }, {
                    validator: Ve,
                    message: "资源包代码只能包含字母、数字",
                    trigger: "blur"
                } ],
                courseEnglishName: [ {
                    validator: Ce,
                    trigger: "blur"
                } ],
                courseScore: [ {
                    validator: (o, a, s) => {
                        a ? /^(?:[0-4]?[0-9](?:\.[0-9])?|50(?:\.0)?)?$/.test(a) ? s() : s(new Error("请输入0-50以内整数/小数，最多可输入一位小数")) : s();
                    },
                    trigger: "blur"
                } ],
                courseHour: [ {
                    required: !1,
                    validator: (o, a, s) => {
                        a ? /^(1000|[1-9]\d{0,2})?$/.test(a) ? s() : s(new Error("请输入1-1000以内整数")) : s();
                    },
                    trigger: "blur"
                } ]
            }, U = i(null), E = i(null), y = i(!1), $ = async () => {
                y.value = !0, e.pkgCover = await E.value.uploadNow(), y.value = !1;
            }, f = i(null), m = i(""), b = i(!1), V = i({}), n = i({}), v = i(""), B = async () => {
                const o = {
                    ...V.value
                };
                o.children = [ {
                    ...e,
                    pvtParentId: "0",
                    pvtAncestorId: "0",
                    pubParentId: "",
                    pubAncestorId: "",
                    pkgRelease: 0,
                    creatorName: p.getUser.nickname,
                    updaterName: p.getUser.nickname,
                    creator: p.getUser.id
                } ];
                const a = await xe(o);
                return m.value = (a == null ? void 0 : a[0]) || "", h.success("新建成功"), 
                a;
            }, J = async () => {
                const o = {
                    pkgName: e.pkgName,
                    pkgCode: e.pkgCode,
                    pkgDirection: e.pkgDirection,
                    pkgCover: e.pkgCover,
                    pkgIntroduction: e.pkgIntroduction,
                    courseScore: e.courseScore,
                    courseEnglishName: e.courseEnglishName,
                    courseCategory: e.courseCategory,
                    courseObject: e.courseObject,
                    courseUnit: e.courseUnit,
                    courseHour: e.courseHour,
                    coursePrerequisite: e.coursePrerequisite
                }, a = await Ne({
                    ...n.value,
                    ...o
                });
                return h.success("编辑成功"), a;
            }, L = async ({
                id: o
            }) => await Ie({
                id: o
            }), Q = async ({
                id: o
            }) => await Ee({
                id: o
            }), G = async () => {
                const o = {
                    pkgName: e.pkgName,
                    pkgCode: e.pkgCode,
                    pkgDirection: e.pkgDirection,
                    pkgCover: e.pkgCover,
                    pkgIntroduction: e.pkgIntroduction,
                    courseScore: e.courseScore,
                    courseEnglishName: e.courseEnglishName,
                    courseCategory: e.courseCategory,
                    courseObject: e.courseObject,
                    courseUnit: e.courseUnit,
                    courseHour: e.courseHour,
                    coursePrerequisite: e.coursePrerequisite
                }, a = await je([ {
                    ...n.value,
                    ...o
                } ]);
                return h.success("编辑成功"), a;
            }, j = te(() => oe()), K = async () => {
                const o = {
                    ...V.value,
                    pkgName: "根目录",
                    tenantId: j.value
                };
                o.children = [ {
                    ...e,
                    pvtAncestorId: "0",
                    pubAncestorId: "",
                    pkgRelease: 0,
                    creatorName: p.getUser.nickname,
                    updaterName: p.getUser.nickname,
                    creator: p.getUser.id,
                    tenantId: j.value,
                    pkgStatus: 1
                } ];
                const a = await Oe(o);
                return m.value = (a == null ? void 0 : a[0]) || "", h.success("新建成功"), 
                a;
            }, W = () => {
                U.value.validate(async o => {
                    if (!o) return !1;
                    await f.value(), S("refresh", {
                        courseResId: m.value,
                        operate: "save"
                    }), O(), _.value = !1;
                });
            }, O = () => {
                Object.keys(e).forEach(o => e[o] = ""), e.pkgType = 1, e.pkgCompleteStatus = 0, 
                U.value.resetFields(), b.value = !1, m.value = "", y.value = !1, 
                V.value = !1, n.value = !1;
            }, P = o => {
                O(), _.value = !1;
            }, X = o => {
                S("refresh", {
                    courseResId: m.value,
                    operate: "cancel"
                }), P();
            };
            return A({
                open: ({
                    type: o,
                    row: a,
                    fatherObj: s
                }) => {
                    V.value = s, _.value = !0;
                    const c = {
                        add: () => {
                            v.value = "新建课程资源", e.creatorName = p.getUser.nickname, 
                            f.value = B;
                        },
                        edit: async () => {
                            v.value = "编辑课程资源", n.value = await L({
                                id: a.id
                            }), Object.keys(e).forEach(d => {
                                var g;
                                return e[d] = (g = n.value) == null ? void 0 : g[d];
                            }), m.value = n.value.id, f.value = J, M(() => {
                                b.value = !0;
                            });
                        },
                        neuAdd: async () => {
                            v.value = "新建课程资源", e.creatorName = p.getUser.nickname, 
                            f.value = K;
                        },
                        neuEdit: async () => {
                            var d;
                            v.value = "编辑课程资源", n.value = await Q({
                                id: a.id
                            }), Object.keys(e).forEach(g => {
                                var C;
                                return e[g] = (C = n.value) == null ? void 0 : C[g];
                            }), m.value = (d = n.value) == null ? void 0 : d.id, 
                            f.value = G, M(() => {
                                b.value = !0;
                            });
                        },
                        default: () => {}
                    };
                    (c[o] || c.default)();
                }
            }), (o, a) => {
                const s = ce, c = ie, d = ne, g = ye, C = pe, Y = me, q = ge, Z = _e, ee = fe;
                return z(), H(Z, {
                    modelValue: t(_),
                    "onUpdate:modelValue": a[12] || (a[12] = u => de(_) ? _.value = u : null),
                    title: t(v),
                    width: "900px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: P
                }, {
                    default: l(() => [ N, r(Y, {
                        ref_key: "dialogFormRef",
                        ref: U,
                        model: t(e),
                        onSubmit: a[11] || (a[11] = ue(() => {}, [ "prevent" ])),
                        rules: T,
                        class: "dialog-form",
                        "label-position": "top",
                        inline: ""
                    }, {
                        default: l(() => [ r(C, null, {
                            default: l(() => [ r(d, {
                                span: 12
                            }, {
                                default: l(() => [ r(c, {
                                    label: "资源包名称",
                                    prop: "pkgName"
                                }, {
                                    default: l(() => [ r(s, {
                                        modelValue: t(e).pkgName,
                                        "onUpdate:modelValue": a[0] || (a[0] = u => t(e).pkgName = u),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入资源包名称",
                                        maxlength: "50",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(d, {
                                span: 12
                            }, {
                                default: l(() => [ r(c, {
                                    label: "资源包英文名称",
                                    prop: "courseEnglishName"
                                }, {
                                    default: l(() => [ r(s, {
                                        modelValue: t(e).courseEnglishName,
                                        "onUpdate:modelValue": a[1] || (a[1] = u => t(e).courseEnglishName = u),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入资源包英文名称",
                                        maxlength: "100",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(d, {
                                span: 12
                            }, {
                                default: l(() => [ r(c, {
                                    label: "资源包代码",
                                    prop: "pkgCode"
                                }, {
                                    default: l(() => [ r(s, {
                                        disabled: t(b),
                                        modelValue: t(e).pkgCode,
                                        "onUpdate:modelValue": a[2] || (a[2] = u => t(e).pkgCode = u),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入资源包代码",
                                        maxlength: "30",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "disabled", "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(d, {
                                span: 12
                            }, {
                                default: l(() => [ r(c, {
                                    label: "资源包类别",
                                    prop: "courseCategory"
                                }, {
                                    default: l(() => [ r(s, {
                                        modelValue: t(e).courseCategory,
                                        "onUpdate:modelValue": a[3] || (a[3] = u => t(e).courseCategory = u),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入资源包类别",
                                        maxlength: "10",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(d, {
                                span: 12
                            }, {
                                default: l(() => [ r(c, {
                                    label: "面向对象",
                                    prop: "courseObject"
                                }, {
                                    default: l(() => [ r(s, {
                                        modelValue: t(e).courseObject,
                                        "onUpdate:modelValue": a[4] || (a[4] = u => t(e).courseObject = u),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入面向对象",
                                        maxlength: "20",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(d, {
                                span: 12
                            }, {
                                default: l(() => [ r(c, {
                                    label: "建设单位",
                                    prop: "courseUnit"
                                }, {
                                    default: l(() => [ r(s, {
                                        modelValue: t(e).courseUnit,
                                        "onUpdate:modelValue": a[5] || (a[5] = u => t(e).courseUnit = u),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入建设单位",
                                        maxlength: "20",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(d, {
                                span: 12
                            }, {
                                default: l(() => [ r(c, {
                                    label: "学分",
                                    prop: "courseScore"
                                }, {
                                    default: l(() => [ r(s, {
                                        modelValue: t(e).courseScore,
                                        "onUpdate:modelValue": a[6] || (a[6] = u => t(e).courseScore = u),
                                        placeholder: "请输入学分",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(d, {
                                span: 12
                            }, {
                                default: l(() => [ r(c, {
                                    label: "学时",
                                    prop: "courseHour"
                                }, {
                                    default: l(() => [ r(s, {
                                        modelValue: t(e).courseHour,
                                        "onUpdate:modelValue": a[7] || (a[7] = u => t(e).courseHour = u),
                                        placeholder: "请输入学时",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(d, {
                                span: 12
                            }, {
                                default: l(() => [ r(c, {
                                    label: "专业方向",
                                    prop: "pkgDirection"
                                }, {
                                    default: l(() => [ r(s, {
                                        modelValue: t(e).pkgDirection,
                                        "onUpdate:modelValue": a[8] || (a[8] = u => t(e).pkgDirection = u),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入专业方向",
                                        maxlength: "20",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(d, {
                                span: 12
                            }, {
                                default: l(() => [ r(c, {
                                    label: "先修课程",
                                    prop: "coursePrerequisite"
                                }, {
                                    default: l(() => [ r(s, {
                                        modelValue: t(e).coursePrerequisite,
                                        "onUpdate:modelValue": a[9] || (a[9] = u => t(e).coursePrerequisite = u),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入先修课程",
                                        maxlength: "50",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(d, {
                                span: 24
                            }, {
                                default: l(() => [ se((z(), H(c, {
                                    label: "资源包封面",
                                    prop: "pkgCover"
                                }, {
                                    default: l(() => [ r(Ue, {
                                        ref_key: "uploadCoverRef",
                                        ref: E,
                                        "is-small": !1,
                                        onChooseCover: $,
                                        defaultId: t(e).pkgCover
                                    }, null, 8, [ "defaultId" ]) ]),
                                    _: 1
                                })), [ [ ee, t(y) ] ]) ]),
                                _: 1
                            }), r(d, {
                                span: 24
                            }, {
                                default: l(() => [ r(c, {
                                    label: "资源包简介"
                                }, {
                                    default: l(() => [ r(g, {
                                        modelValue: t(e).pkgIntroduction,
                                        "onUpdate:modelValue": a[10] || (a[10] = u => t(e).pkgIntroduction = u),
                                        height: "100px"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]), w("div", I, [ r(q, {
                        onClick: X
                    }, {
                        default: l(() => [ D("取消") ]),
                        _: 1
                    }), r(q, {
                        type: "primary",
                        onClick: W
                    }, {
                        default: l(() => [ D("保存并下一步") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-b12d972f" ] ]);
});

export {
    Fe as __tla,
    R as default
};