import {
    d as A,
    r as m,
    p as B,
    h as D,
    e as T,
    o as b,
    c as U,
    k as u,
    l as d,
    a as f,
    v as x,
    F as q,
    y as J,
    C as L,
    t as Q,
    n as G,
    P as H,
    O as W,
    ab as X,
    ac as Y,
    Q as Z,
    J as ee,
    aU as ae,
    __tla as le
} from "./index-6c08ea4c.js";

import {
    _ as te,
    __tla as re
} from "./index-a34a73bc.js";

import {
    u as ue,
    a as se,
    __tla as de
} from "./gds-4e6665e9.js";

import {
    o as k,
    __tla as oe
} from "./file-e038b35d.js";

let z, ie = Promise.all([ (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})() ]).then(async () => {
    let _;
    _ = Q("div", {
        style: {
            position: "absolute",
            top: "-30px",
            left: "-7px",
            color: "#E14635"
        }
    }, "*", -1), z = A({
        __name: "uploadResource",
        emits: [ "refresh" ],
        setup(ne, {
            expose: C,
            emit: F
        }) {
            const n = m(), v = m(), c = m(!1), g = m(""), h = F, j = B(), y = D(), s = m({}), t = m({
                grdName: "",
                annual: "",
                major: "",
                eid: ""
            }), P = (() => {
                let e, a = [];
                for (e = 2019; e <= 2054; e++) a.push({
                    label: `${e}`,
                    value: `${e}`
                });
                return a;
            })(), S = {
                "视频": 1,
                "音频": 2,
                "文档": 3,
                "图片": 4,
                "压缩包": 5,
                "链接": 6,
                Markdown: 7
            }, O = T(() => {
                var e;
                return (e = n.value) == null ? void 0 : e.uploadPercentage;
            }), E = () => {
                s.value.type == "edit" && s.value.editObject.eid ? V() : v.value.validate(e => {
                    e && n.value.submitFile();
                });
            }, I = () => {
                s.value.type == "edit" && (s.value.editObject.eid = "");
            }, K = () => {
                v.value.resetFields(), v.value.clearValidate(), n.value.cancelUpload();
            }, V = e => {
                v.value.validate(a => {
                    if (a) {
                        const o = [];
                        e && e.length > 0 && e.forEach(l => {
                            const p = S[k(l.objectKey || l.name).fileType];
                            t.value.eid = l.eid, o.push({
                                ...t.value,
                                resName: l.objectKey || l.name,
                                resExt: `.${k(l.objectKey || l.name).extension}`,
                                resType: p,
                                resSize: l.fileSize || l.size,
                                resDesc: l.objectKey || l.name,
                                pvtParentId: s.value.fatherObj.id,
                                pvtAncestorId: s.value.fatherObj.id,
                                pubParentId: "",
                                pubAncestorId: "",
                                release: 0,
                                creatorName: y.getUser.nickname,
                                updaterName: y.getUser.nickname,
                                eid: l.eid
                            });
                        });
                        const i = {
                            ...s.value.fatherObj
                        };
                        s.value.type == "edit" ? (Object.assign(s.value.editObject, o[0] ? o[0] : {}), 
                        ue({
                            ...s.value.editObject,
                            ...t.value
                        }).then(l => {
                            l && (j.success("提交成功"), c.value = !1, h("refresh"));
                        })) : (i.children = o, se(i).then(l => {
                            l && (j.success("提交成功"), c.value = !1, h("refresh"));
                        }));
                    }
                });
            }, R = () => {
                n.value.cancelUpload();
            };
            return C({
                openDialog: e => {
                    if (g.value = e.title, s.value = e, c.value = !0, e.type == "edit") {
                        t.value.grdName = e.editObject.grdName, t.value.annual = e.editObject.annual, 
                        t.value.major = e.editObject.major, t.value.eid = e.editObject.eid;
                        let a = e.editObject.resName.split(".");
                        G(() => {
                            n.value.fileList = [ {
                                name: e.editObject.resName,
                                size: e.editObject.resSize,
                                status: 1,
                                fileSuffix: a[a.length - 1].toUpperCase()
                            } ];
                        });
                    } else t.value.grdName = "", t.value.annual = "", t.value.major = "";
                }
            }), (e, a) => {
                const o = H, i = W, l = X, p = Y, M = te, $ = Z, N = ee, w = ae;
                return b(), U("div", null, [ u(w, {
                    modelValue: c.value,
                    "onUpdate:modelValue": a[4] || (a[4] = r => c.value = r),
                    scroll: !0,
                    "max-height": "290",
                    title: g.value,
                    width: "420",
                    onClose: K
                }, {
                    footer: d(() => [ u(N, {
                        type: "default",
                        onClick: a[3] || (a[3] = r => c.value = !1),
                        disabled: f(O) != 0
                    }, {
                        default: d(() => [ x("取消") ]),
                        _: 1
                    }, 8, [ "disabled" ]), u(N, {
                        type: "primary",
                        onClick: E,
                        disabled: f(O) != 0
                    }, {
                        default: d(() => [ x("确定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: d(() => [ u($, {
                        ref_key: "actFormRef",
                        ref: v,
                        model: t.value,
                        class: "neu"
                    }, {
                        default: d(() => [ u(i, {
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
                            default: d(() => [ u(o, {
                                size: "large",
                                modelValue: t.value.grdName,
                                "onUpdate:modelValue": a[0] || (a[0] = r => t.value.grdName = r),
                                placeholder: "请输入",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(i, {
                            label: "适用专业",
                            prop: "major",
                            rules: [ {
                                max: 200,
                                message: "长度在200个字符以内",
                                trigger: "blur"
                            } ]
                        }, {
                            default: d(() => [ u(o, {
                                size: "large",
                                modelValue: t.value.major,
                                "onUpdate:modelValue": a[1] || (a[1] = r => t.value.major = r),
                                placeholder: "请输入",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(i, {
                            label: "所属年届",
                            prop: "annual"
                        }, {
                            default: d(() => [ u(p, {
                                size: "large",
                                modelValue: t.value.annual,
                                "onUpdate:modelValue": a[2] || (a[2] = r => t.value.annual = r),
                                placeholder: "请选择",
                                clearable: ""
                            }, {
                                default: d(() => [ (b(!0), U(q, null, J(f(P), r => (b(), 
                                L(l, {
                                    key: r.value,
                                    label: r.label,
                                    value: r.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(i, {
                            label: "上传文件",
                            prop: "eid"
                        }, {
                            default: d(() => [ _, u(M, {
                                ref_key: "NeuUploadRef",
                                ref: n,
                                limit: 1,
                                alert: "仅可上传一个文件，文档类型文件（除pdf类型）大小不得超过50MB；其他类型文件大小不得超过500MB。",
                                onSuccess: V,
                                onError: R,
                                onFileRemove: I
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
    z as _,
    ie as __tla
};