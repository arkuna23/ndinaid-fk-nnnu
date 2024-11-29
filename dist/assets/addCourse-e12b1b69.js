import {
    d as fe,
    p as oe,
    a5 as _e,
    r as c,
    a0 as se,
    o as _,
    c as D,
    k as l,
    l as r,
    t as g,
    a as o,
    bo as H,
    _ as ge,
    ch as he,
    R as ve,
    S as ye,
    v as q,
    h as be,
    T as Ce,
    U as Ve,
    f as xe,
    C as J,
    H as we,
    F as de,
    y as ue,
    m as Ue,
    P as ke,
    O as ze,
    av as je,
    ab as Se,
    ac as De,
    aw as Ee,
    Q as $e,
    J as Me,
    aU as Le,
    n as Oe,
    __tla as Fe
} from "./index-6c08ea4c.js";

import {
    E as Ne,
    __tla as Pe
} from "./el-image-0d184777.js";

import {
    __tla as He
} from "./el-image-viewer-2c0d56e4.js";

import {
    b as Ie,
    p as Re,
    g as Te,
    __tla as Be
} from "./file-e038b35d.js";

import {
    _ as ie
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    _ as Ge,
    __tla as qe
} from "./index-13c88727.js";

import {
    x as Je,
    y as We,
    z as Ae,
    __tla as Qe
} from "./index-9567cbf6.js";

import {
    e as Ke,
    f as Xe
} from "./validate-b72f006c.js";

import {
    E as Ye,
    __tla as Ze
} from "./index-ef4d146e.js";

import {
    __tla as ea
} from "./throttle-1adeb119.js";

let ne, aa = Promise.all([ (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})() ]).then(async () => {
    let I, W, A, Q, K, X, Y, Z, ee, ae;
    I = f => (ve("data-v-62e79b86"), f = f(), ye(), f), W = {
        class: "neu-upload"
    }, A = {
        key: 0,
        class: "imageWrap"
    }, Q = I(() => g("div", {
        class: "btnWrap"
    }, " 重新上传 ", -1)), K = {
        key: 1,
        class: "upload-img"
    }, X = {
        class: "upload-demo__icon"
    }, Y = I(() => g("div", {
        class: "upload-demo__title"
    }, [ g("span", null, [ q("请将文件拖至此框内，或点击"), g("span", {
        style: {
            "text-decoration": "underline",
            color: "#245fe6"
        }
    }, "上传文件") ]) ], -1)), Z = {
        class: "upload-demo__tip"
    }, ee = [ "innerHTML" ], ae = ie(fe({
        __name: "index",
        props: {
            accept: {
                type: String,
                default: ".jpg,.jpeg,.png,.bmp,.gif,.BMP"
            },
            tooltip: {
                type: String,
                default: "<p>支持上传5M以内的.jpg/.jpeg/.png/.bmp格式图片</p>"
            },
            size: {
                type: Number,
                default: 500
            },
            limit: {
                type: Number,
                default: -1
            },
            imgEid: {
                type: String,
                default: ""
            }
        },
        emits: [ "success", "response", "fileChange", "fileRemove", "error", "uploadSuccess" ],
        setup(f, {
            expose: R,
            emit: T
        }) {
            const B = oe(), E = _e.CancelToken, m = f, C = c(), {
                accept: h,
                tooltip: V,
                size: a,
                alert: le,
                limit: te,
                height: x,
                autoUpload: $,
                imgEid: M
            } = se(m), w = c({}), b = c(0), U = c(), G = T, k = c(""), L = u => {
                const F = u.name.slice(0, u.name.lastIndexOf(".")).length > 200, z = /\.jpeg$/.test(u.name) || /\.png$/.test(u.name) || /\.JPEG$/.test(u.name) || /\.PNG$/.test(u.name) || /\.JPG$/.test(u.name) || /\.jpg$/.test(u.name) || /\.GIF$/.test(u.name) || /\.gif$/.test(u.name) || /\.bmp$/.test(u.name) || /\.BMP$/.test(u.name), j = u.size / 1024 / 1024 < 5;
                if (z) {
                    if (j) {
                        if (F) return void H.error("上传图片名称不能超过200个字符!");
                        {
                            const v = new FormData();
                            return v.append("file", u.raw), v.append("source", Ie), 
                            void Re(v, t => {
                                const {
                                    loaded: e,
                                    total: d
                                } = t;
                                b.value = Number((100 * Number(e / d)).toFixed());
                            }, new E(function(t) {
                                U.value = t;
                            })).then(async t => {
                                const e = t.data;
                                if (e.errorFlag === "0" || e.errorFlag === "2") {
                                    const d = e.eid, i = {
                                        name: u.name,
                                        eid: d
                                    };
                                    await O(i.eid), G("uploadSuccess", i.eid);
                                } else B.error("上传失败，请重新上传");
                            });
                        }
                    }
                    H.error("上传图片大小不能超过5MB!");
                } else H.error("请选择正确的图片格式");
            }, O = async u => {
                k.value = await Te(u);
            };
            return R({
                cancelUpload: () => {
                    typeof U.value == "function" && U.value(), C.value && C.value.clearFiles(), 
                    w.value = [];
                },
                fileList: w,
                uploadPercentage: b,
                getSrc: O
            }), (u, F) => {
                const z = Ne, j = ge, v = he;
                return _(), D("div", W, [ l(v, {
                    ref_key: "uploadRef",
                    ref: C,
                    accept: o(h),
                    "auto-upload": !1,
                    "on-change": L,
                    "show-file-list": !1,
                    action: "#",
                    class: "upload-demo avatar-uploader",
                    drag: ""
                }, {
                    default: r(() => [ g("div", null, [ o(k) ? (_(), D("div", A, [ l(z, {
                        src: o(k),
                        class: "avatar",
                        fit: "cover"
                    }, null, 8, [ "src" ]), Q ])) : (_(), D("div", K, [ g("div", X, [ l(j, {
                        size: 50,
                        icon: "svg-icon:upload_file"
                    }) ]), Y, g("div", Z, [ g("p", {
                        style: {
                            width: "275px"
                        },
                        innerHTML: o(V)
                    }, null, 8, ee) ]) ])) ]) ]),
                    _: 1
                }, 8, [ "accept" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-62e79b86" ] ]), ne = ie({
        __name: "addCourse",
        props: {
            teachInfo: {
                type: Object,
                default: () => ({})
            },
            categoryList: {
                type: Array,
                default: () => []
            },
            courseDeptList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "refreshList" ],
        setup(f, {
            expose: R,
            emit: T
        }) {
            const B = f;
            oe();
            const E = be();
            Ce();
            const {
                teachInfo: m,
                categoryList: C
            } = se(B), h = c(!1), V = c(""), a = Ve({
                id: "",
                name: "",
                code: "",
                ename: "",
                type: "",
                enableStatus: 1,
                releaseStatus: "",
                teachingObject: "",
                courseDept: "",
                courseDeptCode: "",
                courseDeptName: "",
                credit: "",
                classHours: "",
                courseDirection: "",
                preCourse: "",
                preCourseCode: [],
                cover: "",
                introduction: "",
                creatorName: E.getUser.nickname
            }), le = {
                name: [ {
                    required: !0,
                    message: "请输入课程名称",
                    trigger: "blur"
                } ],
                code: [ {
                    required: !0,
                    message: "请输入课程代码",
                    trigger: "blur"
                }, {
                    validator: Ke,
                    message: "课程代码只能包含字母、数字",
                    trigger: "blur"
                } ],
                ename: [ {
                    validator: Xe,
                    trigger: "blur"
                } ],
                credit: [ {
                    validator: (t, e, d) => {
                        /^(?:[0-4]?[0-9](?:\.[0-9])?|50(?:\.0)?)?$/.test(e) ? d() : d(new Error("请输入0-50以内整数/小数，最多可输入一位小数"));
                    },
                    trigger: "blur"
                } ],
                classHours: [ {
                    required: !1,
                    validator: (t, e, d) => {
                        /^(1000|[1-9]\d{0,2})?$/.test(e) ? d() : d(new Error("请输入1-1000以内整数"));
                    },
                    trigger: "blur"
                } ]
            }, te = T;
            xe(() => {});
            const x = () => {
                V.value = "", z(), b.value.resetFields(), $.value = !1, h.value = !1;
            }, $ = c(!1), M = c(null), w = c(null), b = c(null), U = () => {
                b.value.validate(async t => {
                    if (!t) return !1;
                    await M.value(), H.success("操作成功"), te("refreshList"), x();
                });
            }, G = async () => {
                var t;
                await We({
                    ...a,
                    preCourseCode: (t = a.preCourseCode) == null ? void 0 : t.join()
                });
            }, k = async () => {
                var t;
                await Ae({
                    id: m.id,
                    ...a,
                    preCourseCode: (t = a.preCourseCode) == null ? void 0 : t.join()
                });
            }, L = c([]), O = async () => {
                const t = await Je({
                    keywords: ""
                });
                L.value = t || [];
            };
            function u(t) {
                const {
                    id: e,
                    name: d,
                    code: i
                } = t;
                a.courseDeptName = d, a.courseDeptCode = i;
            }
            const F = (t, e) => {
                var d;
                return e.name.includes(t) || ((d = e.code) == null ? void 0 : d.includes(t));
            }, z = () => {
                Object.keys(a).forEach(t => {
                    a[t] = "";
                }), a.enableStatus = 1;
            }, j = t => {
                a.cover = t;
            }, v = {
                children: "children",
                label: (t, e) => {
                    let d = "";
                    return d = t.code !== null && t.code !== "" ? `${t.name}(${t.code})` : t.name, 
                    d;
                },
                value: "id",
                isLeaf: "leaf",
                emitPath: !1,
                class: "tree-node-custom"
            };
            return R({
                handleOpen: ({
                    title: t,
                    type: e
                }) => {
                    h.value = !0, V.value = t, O();
                    const d = {
                        create: () => {
                            a.creatorName = E.getUser.nickname, a.releaseStatus = "0", 
                            M.value = G;
                        },
                        edit: () => {
                            M.value = k, Oe(() => {
                                var i, n, p, S;
                                Object.keys(a).forEach(y => {
                                    var N, P;
                                    ((N = m.value) == null ? void 0 : N[y]) === null ? a[y] = "" : a[y] = (P = m.value) == null ? void 0 : P[y];
                                }), ((i = m.value) == null ? void 0 : i.preCourseCode) !== "" && ((n = m.value) == null ? void 0 : n.preCourseCode) !== null ? a.preCourseCode = (S = (p = m.value) == null ? void 0 : p.preCourseCode) == null ? void 0 : S.split(",") : a.preCourseCode = [], 
                                $.value = m.value.releaseStatus !== "0", a.cover && w.value.getSrc(a.cover);
                            });
                        },
                        default: () => {}
                    };
                    (d[e] || d.default)();
                },
                handleClose: x
            }), (t, e) => {
                const d = Ge, i = ke, n = ze, p = je, S = Se, y = De, N = Ye, P = ae, pe = Ee, ce = $e, re = Me, me = Le;
                return _(), J(me, {
                    modelValue: o(h),
                    "onUpdate:modelValue": e[13] || (e[13] = s => Ue(h) ? h.value = s : null),
                    width: "872px",
                    "close-on-click-modal": !1,
                    onClose: x,
                    appendToBody: !0,
                    title: o(V)
                }, {
                    footer: r(() => [ l(re, {
                        size: "large",
                        onClick: e[12] || (e[12] = s => x())
                    }, {
                        default: r(() => [ q("取消") ]),
                        _: 1
                    }), l(re, {
                        size: "large",
                        type: "primary",
                        onClick: U
                    }, {
                        default: r(() => [ q("确定") ]),
                        _: 1
                    }) ]),
                    default: r(() => [ l(d, {
                        title: "说明：课程主要用于每学期教学安排创建及专业人才培养方案制定，创建成功并发布后（且状态为启用）可以使用，发布成功课程代码不可修改"
                    }), l(ce, {
                        ref_key: "dialogFormRef",
                        ref: b,
                        model: o(a),
                        onSubmit: e[11] || (e[11] = we(() => {}, [ "prevent" ])),
                        rules: le,
                        class: "dialog-form",
                        "label-position": "top",
                        inline: ""
                    }, {
                        default: r(() => [ l(pe, null, {
                            default: r(() => [ l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "课程名称",
                                    prop: "name"
                                }, {
                                    default: r(() => [ l(i, {
                                        modelValue: o(a).name,
                                        "onUpdate:modelValue": e[0] || (e[0] = s => o(a).name = s),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入课程名称",
                                        maxlength: "50",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "课程代码",
                                    prop: "code"
                                }, {
                                    default: r(() => [ l(i, {
                                        disabled: o($),
                                        modelValue: o(a).code,
                                        "onUpdate:modelValue": e[1] || (e[1] = s => o(a).code = s),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入课程代码",
                                        maxlength: "30",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "disabled", "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "课程英文名称",
                                    prop: "ename"
                                }, {
                                    default: r(() => [ l(i, {
                                        modelValue: o(a).ename,
                                        "onUpdate:modelValue": e[2] || (e[2] = s => o(a).ename = s),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入课程英文名称",
                                        maxlength: "100",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "课程类别",
                                    prop: "type"
                                }, {
                                    default: r(() => [ l(y, {
                                        modelValue: o(a).type,
                                        "onUpdate:modelValue": e[3] || (e[3] = s => o(a).type = s),
                                        filterable: "",
                                        size: "large",
                                        placeholder: "请选择",
                                        style: {
                                            width: "360px"
                                        },
                                        clearable: ""
                                    }, {
                                        default: r(() => [ (_(!0), D(de, null, ue(o(C), s => (_(), 
                                        J(S, {
                                            key: s.value,
                                            label: s.label,
                                            value: s.value
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "授课对象",
                                    prop: "teachingObject"
                                }, {
                                    default: r(() => [ l(i, {
                                        modelValue: o(a).teachingObject,
                                        "onUpdate:modelValue": e[4] || (e[4] = s => o(a).teachingObject = s),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入授课对象",
                                        maxlength: "20",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "开课单位",
                                    prop: "courseDept"
                                }, {
                                    default: r(() => [ l(N, {
                                        modelValue: o(a).courseDept,
                                        "onUpdate:modelValue": e[5] || (e[5] = s => o(a).courseDept = s),
                                        size: "large",
                                        data: f.courseDeptList,
                                        "node-key": "value",
                                        props: v,
                                        placeholder: t.请输入开课单位,
                                        "check-strictly": "",
                                        "popper-class": "tree-select-popper",
                                        "render-after-expand": !0,
                                        class: "search-item",
                                        clearable: "",
                                        filterable: "",
                                        "filter-node-method": F,
                                        onCurrentChange: u
                                    }, null, 8, [ "modelValue", "data", "placeholder" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "学分",
                                    prop: "credit"
                                }, {
                                    default: r(() => [ l(i, {
                                        modelValue: o(a).credit,
                                        "onUpdate:modelValue": e[6] || (e[6] = s => o(a).credit = s),
                                        placeholder: "请输入课程学分",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "学时",
                                    prop: "classHours"
                                }, {
                                    default: r(() => [ l(i, {
                                        modelValue: o(a).classHours,
                                        "onUpdate:modelValue": e[7] || (e[7] = s => o(a).classHours = s),
                                        placeholder: "请输入课程学时",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "课程方向"
                                }, {
                                    default: r(() => [ l(i, {
                                        modelValue: o(a).courseDirection,
                                        "onUpdate:modelValue": e[8] || (e[8] = s => o(a).courseDirection = s),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入课程方向",
                                        maxlength: "20",
                                        size: "large",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "先修课程"
                                }, {
                                    default: r(() => [ l(y, {
                                        modelValue: o(a).preCourseCode,
                                        "onUpdate:modelValue": e[9] || (e[9] = s => o(a).preCourseCode = s),
                                        filterable: "",
                                        multiple: "",
                                        size: "large",
                                        placeholder: "请选择",
                                        style: {
                                            width: "360px"
                                        },
                                        clearable: "",
                                        "multiple-limit": "3",
                                        "collapse-tags": "true",
                                        "collapse-tags-tooltip": "true"
                                    }, {
                                        default: r(() => [ (_(!0), D(de, null, ue(o(L), s => (_(), 
                                        J(S, {
                                            key: s.id,
                                            label: s.name,
                                            value: s.id
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "课程封面"
                                }, {
                                    default: r(() => [ l(P, {
                                        ref_key: "imgUploadRef",
                                        ref: w,
                                        imgEid: o(a).cover,
                                        onUploadSuccess: j,
                                        onError: t.uploadError
                                    }, null, 8, [ "imgEid", "onError" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(p, {
                                span: 12
                            }, {
                                default: r(() => [ l(n, {
                                    label: "课程简介"
                                }, {
                                    default: r(() => [ l(i, {
                                        modelValue: o(a).introduction,
                                        "onUpdate:modelValue": e[10] || (e[10] = s => o(a).introduction = s),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入课程简介",
                                        type: "textarea",
                                        maxlength: "500",
                                        size: "large",
                                        rows: "7",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-6775316d" ] ]);
});

export {
    aa as __tla,
    ne as default
};