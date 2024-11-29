import {
    d as q,
    r as c,
    p as A,
    h as T,
    e as w,
    o as p,
    c as y,
    k as u,
    l as d,
    v as O,
    a as V,
    F as B,
    y as J,
    C as L,
    n as M,
    bB as Q,
    P as G,
    O as H,
    ab as W,
    ac as X,
    Q as Y,
    J as Z,
    aU as ee,
    __tla as ae
} from "./index-6c08ea4c.js";

import {
    _ as le,
    __tla as te
} from "./index-a34a73bc.js";

import {
    u as re,
    a as ue,
    __tla as se
} from "./gds-4e6665e9.js";

import {
    o as N,
    __tla as de
} from "./file-e038b35d.js";

let U, ie = Promise.all([ (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})() ]).then(async () => {
    U = q({
        __name: "uploadResource",
        emits: [ "refresh" ],
        setup(oe, {
            expose: x,
            emit: z
        }) {
            const o = c(), v = c(), n = c(!1), b = c(""), _ = z, f = A(), g = T(), s = c({}), t = c({
                grdName: "",
                annual: "",
                major: "",
                eid: ""
            }), k = (() => {
                let e, a = [];
                for (e = 2019; e <= 2054; e++) a.push({
                    label: `${e}`,
                    value: `${e}`
                });
                return a;
            })(), C = {
                "视频": 1,
                "音频": 2,
                "文档": 3,
                "图片": 4,
                "压缩包": 5,
                "链接": 6,
                MD: 7
            }, F = w(() => {
                var e;
                return (e = o.value) == null ? void 0 : e.uploadPercentage;
            }), I = () => {
                s.value.type == "edit" && s.value.editObject.eid ? h() : o.value.submitFile();
            }, P = () => {
                s.value.type == "edit" && (s.value.editObject.eid = "");
            }, S = () => {
                v.value.resetFields(), v.value.clearValidate(), o.value.cancelUpload();
            }, h = e => {
                const a = [];
                e && e.length > 0 && e.forEach(l => {
                    const i = C[N(l.objectKey || l.name).fileType];
                    t.value.eid = l.eid, a.push({
                        ...t.value,
                        resName: l.objectKey || l.name,
                        resExt: `.${N(l.objectKey || l.name).extension}`,
                        resType: i,
                        resSize: l.fileSize || l.size,
                        resDesc: l.objectKey || l.name,
                        pvtParentId: s.value.fatherObj.id,
                        pvtAncestorId: s.value.fatherObj.id,
                        pubParentId: "",
                        pubAncestorId: "",
                        release: 1,
                        creatorName: g.getUser.nickname,
                        updaterName: g.getUser.nickname,
                        eid: l.eid
                    });
                });
                const m = {
                    ...s.value.fatherObj
                };
                v.value.validate(l => {
                    l && (s.value.type == "edit" ? (Object.assign(s.value.editObject, a[0] ? a[0] : {}), 
                    re({
                        ...s.value.editObject,
                        ...t.value
                    }).then(i => {
                        i && (f.success("提交成功"), n.value = !1, _("refresh"));
                    })) : (m.children = a, ue(m, {
                        tenantId: Q()
                    }).then(i => {
                        i && (f.success("提交成功"), n.value = !1, _("refresh"));
                    })));
                });
            }, K = () => {
                o.value.cancelUpload();
            };
            return x({
                openDialog: e => {
                    if (b.value = e.title, s.value = e, n.value = !0, e.type == "edit") {
                        t.value.grdName = e.editObject.grdName, t.value.annual = e.editObject.annual, 
                        t.value.major = e.editObject.major, t.value.eid = e.editObject.eid;
                        let a = e.editObject.resName.split(".");
                        M(() => {
                            o.value.fileList = [ {
                                name: e.editObject.resName,
                                size: e.editObject.resSize,
                                status: 1,
                                fileSuffix: a[a.length - 1].toUpperCase()
                            } ];
                        });
                    } else t.value.grdName = "", t.value.annual = "";
                }
            }), (e, a) => {
                const m = G, l = H, i = W, R = X, D = le, E = Y, j = Z, $ = ee;
                return p(), y("div", null, [ u($, {
                    modelValue: n.value,
                    "onUpdate:modelValue": a[4] || (a[4] = r => n.value = r),
                    scroll: !0,
                    "max-height": "290",
                    title: b.value,
                    width: "420",
                    onClose: S
                }, {
                    footer: d(() => [ u(j, {
                        type: "default",
                        onClick: a[3] || (a[3] = r => n.value = !1)
                    }, {
                        default: d(() => [ O("取消") ]),
                        _: 1
                    }), u(j, {
                        type: "primary",
                        onClick: I,
                        disabled: V(F) != 0
                    }, {
                        default: d(() => [ O("确定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: d(() => [ u(E, {
                        ref_key: "actFormRef",
                        ref: v,
                        model: t.value,
                        class: "neu"
                    }, {
                        default: d(() => [ u(l, {
                            label: "资料名称",
                            prop: "grdName",
                            rules: [ {
                                required: !0,
                                trigger: [ "blur", "change" ],
                                message: "请填写资料名称"
                            }, {
                                max: 200,
                                message: "长度在200个字符以内",
                                trigger: "blur"
                            } ]
                        }, {
                            default: d(() => [ u(m, {
                                size: "large",
                                modelValue: t.value.grdName,
                                "onUpdate:modelValue": a[0] || (a[0] = r => t.value.grdName = r),
                                placeholder: "请输入",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(l, {
                            label: "适用专业",
                            prop: "major",
                            rules: [ {
                                max: 200,
                                message: "长度在200个字符以内",
                                trigger: "blur"
                            } ]
                        }, {
                            default: d(() => [ u(m, {
                                size: "large",
                                modelValue: t.value.major,
                                "onUpdate:modelValue": a[1] || (a[1] = r => t.value.major = r),
                                placeholder: "请输入",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(l, {
                            label: "所属年届",
                            prop: "annual"
                        }, {
                            default: d(() => [ u(R, {
                                size: "large",
                                modelValue: t.value.annual,
                                "onUpdate:modelValue": a[2] || (a[2] = r => t.value.annual = r),
                                placeholder: "请选择",
                                clearable: ""
                            }, {
                                default: d(() => [ (p(!0), y(B, null, J(V(k), r => (p(), 
                                L(i, {
                                    key: r.value,
                                    label: r.label,
                                    value: r.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(l, {
                            label: "上传文件",
                            prop: "eid",
                            rules: [ {
                                required: !0,
                                trigger: [ "blur", "change" ],
                                message: "请上传文件"
                            } ]
                        }, {
                            default: d(() => [ u(D, {
                                ref_key: "NeuUploadRef",
                                ref: o,
                                limit: 1,
                                onSuccess: h,
                                onError: K,
                                onFileRemove: P
                            }, null, 512) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    });
});

export {
    U as _,
    ie as __tla
};