import {
    aa as re,
    p as ne,
    h as oe,
    r as f,
    U as fe,
    f as ue,
    o as m,
    C as p,
    l as r,
    k as d,
    v as I,
    a as s,
    D as x,
    A as me,
    c as V,
    F as de,
    y as pe,
    z as ce,
    t as c,
    B as H,
    m as _e,
    P as ge,
    O as ve,
    ch as ye,
    _ as he,
    Q as we,
    J as be,
    aU as xe,
    a9 as ke,
    R as Ee,
    S as ze,
    __tla as Ce
} from "./index-6c08ea4c.js";

import {
    _ as Pe,
    a as Oe,
    b as Ie,
    c as Ve,
    d as Te,
    e as Me,
    f as Se,
    g as Ge,
    h as Re,
    i as Ue,
    j as De,
    k as Fe,
    l as Ne,
    m as Xe,
    n as qe,
    o as Je,
    p as Le,
    q as $e,
    r as je,
    s as Ae,
    t as Be,
    u as He,
    v as Ke,
    w as Qe,
    x as Ze,
    y as We,
    z as Ye
} from "./file_题-23882218.js";

import {
    __tla as ea
} from "./dict-c5825220.js";

import {
    z as aa,
    A as sa,
    __tla as la
} from "./file-e038b35d.js";

import {
    b as ia,
    c as ta,
    d as ra,
    u as na,
    __tla as oa
} from "./dataset-a3994d32.js";

import fa, {
    __tla as ua
} from "./UploadCover-f16f2b2c.js";

import ma, {
    __tla as da
} from "./PreviewCover-97c10100.js";

import {
    _ as pa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ca
} from "./el-image-0d184777.js";

import {
    __tla as _a
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as ga
} from "./throttle-1adeb119.js";

let K, va = Promise.all([ (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})() ]).then(async () => {
    let w, T, M, S, G, R, U, D, F, N;
    w = k => (Ee("data-v-113701f7"), k = k(), ze(), k), T = w(() => c("span", null, "数据集文件", -1)), 
    M = w(() => c("span", {
        class: "label-desc"
    }, "（数据集创建成功后，数据集文件不可更改）", -1)), S = {
        key: 0,
        class: "import-input"
    }, G = w(() => c("div", {
        class: "import-icon"
    }, null, -1)), R = w(() => c("div", {
        class: "el-upload__text"
    }, " 请将文件拖至此框内，或点击上传文件 ", -1)), U = {
        class: "file-list-item__icon"
    }, D = [ "src" ], F = {
        class: "file-name"
    }, N = {
        class: "file-size"
    }, K = pa({
        __name: "DialogForm",
        emits: [ "success" ],
        setup(k, {
            expose: Q,
            emit: Z
        }) {
            const {
                t: X
            } = re(), P = ne(), W = oe(), g = f(!1), q = f(""), J = f(), b = f(!1), u = f(""), i = f({
                id: "",
                name: "",
                introduction: "",
                description: "",
                coverEid: "",
                files: [],
                status: 2
            }), Y = fe({
                name: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请输入数据集名称"
                }, {
                    min: 1,
                    max: 20,
                    message: "长度必须介于 1 和 20 之间",
                    trigger: "blur"
                } ],
                description: [ {
                    required: !1,
                    trigger: "blur",
                    message: "请输入数据集描述"
                }, {
                    min: 0,
                    max: 200,
                    message: "长度必须介于 0 和 200 之间",
                    trigger: "blur"
                } ],
                introduction: [ {
                    required: !1,
                    trigger: "blur",
                    message: "请输入数据集简介"
                }, {
                    min: 0,
                    max: 200,
                    message: "长度必须介于 0 和 200 之间",
                    trigger: "blur"
                } ],
                files: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请选择数据集文件"
                } ]
            }), E = f();
            f(), f([]), f([]);
            const n = f([]), z = f(5);
            Q({
                open: async (e, a) => {
                    if (g.value = !0, q.value = e === "update" ? "编辑" : e === "create" ? "新建" : "查看", 
                    u.value = e, le(), e !== "create" && a) {
                        b.value = !0, n.value = [];
                        try {
                            i.value = await ia(a), n.value = i.value.files;
                        } finally {
                            b.value = !1;
                        }
                    }
                }
            });
            const ee = e => {
                let a = "", t = e.name || e.fileName;
                return a = e.fileType !== "6" && t.lastIndexOf(".") > -1 ? t.slice(t.lastIndexOf(".") + 1).toUpperCase() : "PROJECT", 
                new URL(Object.assign({
                    "../../../../assets/imgs/file/file_ACT.png": Pe,
                    "../../../../assets/imgs/file/file_BMP.png": Oe,
                    "../../../../assets/imgs/file/file_DOC.png": Ie,
                    "../../../../assets/imgs/file/file_DOCX.png": Ve,
                    "../../../../assets/imgs/file/file_GDS.png": Te,
                    "../../../../assets/imgs/file/file_GIF.png": Me,
                    "../../../../assets/imgs/file/file_HTML.png": Se,
                    "../../../../assets/imgs/file/file_JPEG.png": Ge,
                    "../../../../assets/imgs/file/file_JPG.png": Re,
                    "../../../../assets/imgs/file/file_MD.png": Ue,
                    "../../../../assets/imgs/file/file_MP3.png": De,
                    "../../../../assets/imgs/file/file_MP4.png": Fe,
                    "../../../../assets/imgs/file/file_OGG.png": Ne,
                    "../../../../assets/imgs/file/file_OTHERS.png": Xe,
                    "../../../../assets/imgs/file/file_PDF.png": qe,
                    "../../../../assets/imgs/file/file_PNG.png": Je,
                    "../../../../assets/imgs/file/file_PPT.png": Le,
                    "../../../../assets/imgs/file/file_PPTX.png": $e,
                    "../../../../assets/imgs/file/file_PROJECT.png": je,
                    "../../../../assets/imgs/file/file_RAR.png": Ae,
                    "../../../../assets/imgs/file/file_TXT.png": Be,
                    "../../../../assets/imgs/file/file_XLS.png": He,
                    "../../../../assets/imgs/file/file_XLSX.png": Ke,
                    "../../../../assets/imgs/file/file_ZIP.png": Qe,
                    "../../../../assets/imgs/file/file_other.png": Ze,
                    "../../../../assets/imgs/file/file_卷.png": We,
                    "../../../../assets/imgs/file/file_题.png": Ye
                })[`../../../../assets/imgs/file/file_${a}.png`], self.location);
            }, ae = Z, L = async e => {
                var a, t, o;
                if (E && await E.value.validate()) {
                    b.value = !0;
                    try {
                        e === 4 && await P.confirm("请确保已经完成数据集内容建设，完成后数据集信息不能更改，确定完成吗？");
                        const C = await s(J).uploadNow();
                        if (u.value === "create") {
                            let _ = 0;
                            if (s(n).forEach(l => {
                                _ += l.size;
                            }), _ / 1024 / 1024 / 1024 >= z.value) return this.$message({
                                type: "warning",
                                message: `\u6587\u4EF6\u603B\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${z.value} GB`
                            }), !1;
                            const v = new FormData();
                            Object.keys(s(n)).forEach(l => {
                                v.append("files", s(n)[l]);
                            });
                            const y = await ta();
                            v.append("datasetId", y), v.append("author", W.getUser.id);
                            const {
                                data: h
                            } = await aa(v);
                            let O = {
                                ...i.value,
                                status: e,
                                id: y,
                                coverEid: C || Math.ceil(4 * Math.random()) + "",
                                path: (a = h == null ? void 0 : h[0]) == null ? void 0 : a.path,
                                files: (h || []).map(l => ({
                                    fileEid: l.id,
                                    fileName: l.name,
                                    fileType: "",
                                    fileSize: l.fileSize
                                }))
                            };
                            await ra(O), P.success(X("common.createSuccess"));
                        } else {
                            let _ = {
                                ...i.value,
                                status: e,
                                coverEid: C || i.value.coverEid || Math.ceil(4 * Math.random()) + "",
                                path: i.value.path || ((o = (t = i.value.files) == null ? void 0 : t[0]) == null ? void 0 : o.path)
                            };
                            await na(_), P.success(X("common.updateSuccess"));
                        }
                        g.value = !1, ae("success");
                    } finally {
                        b.value = !1;
                    }
                }
            };
            function $(e) {
                let a = (e == null ? void 0 : e.name) || (e == null ? void 0 : e.fileName);
                if (a) {
                    let t = (e == null ? void 0 : e.size) || (e == null ? void 0 : e.fileSize), o = "";
                    return o = t / 1024 / 1024 > 1 ? (t / 1024 / 1024).toFixed(1) + "Mb" : t / 1024 > 1 ? (t / 1024).toFixed(1) + "Kb" : t + "B", 
                    {
                        name: a,
                        size: o
                    };
                }
                return {
                    name: "",
                    size: ""
                };
            }
            function se(e) {
                let a = !0;
                return e.name.lastIndexOf(".") > -1 && e.name.slice(e.name.lastIndexOf(".") + 1).toLowerCase(), 
                e.size / 1024 / 1024 / 1024 >= z.value && (proxy.$modal.msgError("文件大小限制 " + z.value + " Gb!"), 
                a = !1), n.value.find(t => t.name === e.name) && (proxy.$modal.msgError("不允许上传多个同名文件！"), 
                a = !1), a && function(t, o) {
                    n.value.push(t), i.value.files = n.value;
                }(e), !1;
            }
            const le = () => {
                var e;
                n.value = [], i.value = {
                    id: "",
                    name: "",
                    introduction: "",
                    description: "",
                    coverEid: "",
                    files: [],
                    status: 2
                }, (e = E.value) == null || e.resetFields();
            };
            return ue(() => {}), (e, a) => {
                const t = ge, o = ve, C = ye, _ = he, v = we, y = be, h = xe, O = ke;
                return m(), p(h, {
                    modelValue: s(g),
                    "onUpdate:modelValue": a[6] || (a[6] = l => _e(g) ? g.value = l : null),
                    title: s(q) + "数据集",
                    scroll: "",
                    width: "440"
                }, {
                    footer: r(() => [ d(y, {
                        onClick: a[3] || (a[3] = l => g.value = !1)
                    }, {
                        default: r(() => [ I("取 消") ]),
                        _: 1
                    }), s(u) !== "preview" ? (m(), p(y, {
                        key: 0,
                        type: "primary",
                        onClick: a[4] || (a[4] = l => L(2))
                    }, {
                        default: r(() => [ I("保 存") ]),
                        _: 1
                    })) : x("", !0), s(u) !== "preview" ? (m(), p(y, {
                        key: 1,
                        type: "primary",
                        onClick: a[5] || (a[5] = l => L(4))
                    }, {
                        default: r(() => [ I("完 成") ]),
                        _: 1
                    })) : x("", !0) ]),
                    default: r(() => [ me((m(), p(v, {
                        ref_key: "formRef",
                        ref: E,
                        model: s(i),
                        rules: s(Y),
                        size: "large",
                        "label-position": "top",
                        "label-width": "80px",
                        style: {
                            "overflow-x": "hidden"
                        }
                    }, {
                        default: r(() => [ d(o, {
                            label: "数据集名称",
                            prop: "name"
                        }, {
                            default: r(() => [ d(t, {
                                modelValue: s(i).name,
                                "onUpdate:modelValue": a[0] || (a[0] = l => s(i).name = l),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入数据集名称",
                                readonly: s(u) === "preview"
                            }, null, 8, [ "modelValue", "readonly" ]) ]),
                            _: 1
                        }), d(o, {
                            label: "数据集文件",
                            prop: "files"
                        }, {
                            label: r(() => [ T, M ]),
                            default: r(() => [ s(u) === "create" ? (m(), V("div", S, [ d(C, {
                                class: "upload-demo",
                                action: "#",
                                multiple: "",
                                drag: "",
                                "before-upload": se
                            }, {
                                default: r(() => [ G, R ]),
                                _: 1
                            }) ])) : x("", !0), (m(!0), V(de, null, pe(s(n), (l, j) => (m(), 
                            V("div", {
                                class: ce([ "choose-file-box", "" ]),
                                key: (l.name || l.fileName) + j
                            }, [ c("div", U, [ c("img", {
                                src: ee(l),
                                alt: "",
                                style: {
                                    width: "32px"
                                }
                            }, null, 8, D) ]), c("div", F, H($(l).name), 1), c("div", N, H($(l).size), 1), s(u) === "create" ? (m(), 
                            p(_, {
                                key: 0,
                                icon: "ep:close",
                                size: 14,
                                class: "close-btn",
                                onClick: ie => function(A, B) {
                                    n.value.splice(B, 1), i.value.files = n.value;
                                }(0, j)
                            }, null, 8, [ "onClick" ])) : x("", !0), s(u) === "preview" ? (m(), 
                            p(_, {
                                key: 1,
                                icon: "ep:download",
                                size: 14,
                                class: "down-btn",
                                onClick: ie => function(A, B) {
                                    let te = sa(i.value.path, A.fileName);
                                    window.open(te);
                                }(l)
                            }, null, 8, [ "onClick" ])) : x("", !0) ]))), 128)) ]),
                            _: 1
                        }), d(o, {
                            label: "数据集简介",
                            prop: "introduction"
                        }, {
                            default: r(() => [ d(t, {
                                modelValue: s(i).introduction,
                                "onUpdate:modelValue": a[1] || (a[1] = l => s(i).introduction = l),
                                type: "textarea",
                                placeholder: "请输入数据集简介",
                                readonly: s(u) === "preview"
                            }, null, 8, [ "modelValue", "readonly" ]) ]),
                            _: 1
                        }), d(o, {
                            label: "数据集描述",
                            prop: "description"
                        }, {
                            default: r(() => [ d(t, {
                                modelValue: s(i).description,
                                "onUpdate:modelValue": a[2] || (a[2] = l => s(i).description = l),
                                type: "textarea",
                                placeholder: "请输入数据集描述",
                                readonly: s(u) === "preview"
                            }, null, 8, [ "modelValue", "readonly" ]) ]),
                            _: 1
                        }), d(o, {
                            label: "数据集封面",
                            prop: "coverEid"
                        }, {
                            default: r(() => [ s(u) !== "preview" ? (m(), p(fa, {
                                key: 0,
                                ref_key: "uploadCoverRef",
                                ref: J,
                                "is-small": !0,
                                defaultId: s(i).coverEid
                            }, null, 8, [ "defaultId" ])) : (m(), p(ma, {
                                key: 1,
                                defaultId: s(i).coverEid,
                                style: {
                                    width: "212px",
                                    height: "118px"
                                }
                            }, null, 8, [ "defaultId" ])) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ O, s(b) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-113701f7" ] ]);
});

export {
    va as __tla,
    K as default
};