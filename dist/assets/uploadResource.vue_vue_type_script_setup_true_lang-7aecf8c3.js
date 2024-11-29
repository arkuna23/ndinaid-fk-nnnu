import {
    d as w,
    r as n,
    p as B,
    h as D,
    e as T,
    o as N,
    c as U,
    k as u,
    l as r,
    a as x,
    v as V,
    F as q,
    y as J,
    t as Q,
    n as $,
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
    u as se,
    c as ue,
    __tla as ie
} from "./activityAdmin-9a4ffc20.js";

import {
    o as k,
    __tla as re
} from "./file-e038b35d.js";

let L, de = Promise.all([ (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})() ]).then(async () => {
    let b;
    b = Q("div", {
        style: {
            position: "absolute",
            top: "-30px",
            left: "-7px",
            color: "#E14635"
        }
    }, "*", -1), L = w({
        __name: "uploadResource",
        emits: [ "refresh" ],
        setup(ce, {
            expose: z,
            emit: I
        }) {
            const d = n(), p = n(), c = n(!1), f = n(""), _ = I, h = B(), y = D(), s = n({}), l = n({
                actName: "",
                applicativeLevel: "",
                eid: ""
            }), P = [ {
                label: "校级",
                value: 1
            }, {
                label: "院级",
                value: 2
            }, {
                label: "系级",
                value: 3
            } ], F = {
                "视频": 1,
                "音频": 2,
                "文档": 3,
                "图片": 4,
                "压缩包": 5,
                "链接": 6,
                Markdown: 7
            }, j = T(() => {
                var e;
                return (e = d.value) == null ? void 0 : e.uploadPercentage;
            }), S = () => {
                s.value.type == "edit" && s.value.editObject.eid ? g() : p.value.validate(e => {
                    e && d.value.submitFile();
                });
            }, C = () => {
                s.value.type == "edit" && (s.value.editObject.eid = "");
            }, E = () => {
                p.value.resetFields(), p.value.clearValidate(), d.value.cancelUpload();
            }, g = e => {
                p.value.validate(t => {
                    if (t) {
                        const o = [];
                        e && e.length > 0 && e.forEach(a => {
                            const m = F[k(a.objectKey || a.name).fileType];
                            l.value.eid = a.eid, o.push({
                                ...l.value,
                                resName: a.objectKey || a.name,
                                resExt: `.${k(a.objectKey || a.name).extension}`,
                                resType: m,
                                resSize: a.fileSize || a.size,
                                resDesc: a.objectKey || a.name,
                                pvtParentId: "",
                                pvtAncestorId: "",
                                neuParentId: s.value.fatherObj.id,
                                neuAncestorId: s.value.fatherObj.id,
                                pubParentId: "",
                                pubAncestorId: "",
                                release: 0,
                                creatorName: y.getUser.nickname,
                                updaterName: y.getUser.nickname,
                                eid: a.eid
                            });
                        });
                        const v = {
                            ...s.value.fatherObj
                        };
                        s.value.type == "edit" ? (Object.assign(s.value.editObject, o[0] ? o[0] : {}), 
                        se({
                            ...s.value.editObject,
                            ...l.value
                        }).then(a => {
                            a && (h.success("提交成功"), c.value = !1, _("refresh"));
                        })) : (v.children = o, ue(v).then(a => {
                            a && (h.success("提交成功"), c.value = !1, _("refresh"));
                        }));
                    }
                });
            }, K = () => {
                d.value.cancelUpload();
            };
            return z({
                openDialog: e => {
                    if (f.value = e.title, s.value = e, c.value = !0, e.type == "edit") {
                        l.value.actName = e.editObject.actName, l.value.applicativeLevel = e.editObject.applicativeLevel, 
                        l.value.eid = e.editObject.eid;
                        let t = e.editObject.resName.split(".");
                        $(() => {
                            d.value.fileList = [ {
                                name: e.editObject.resName,
                                size: e.editObject.resSize,
                                status: 1,
                                fileSuffix: t[t.length - 1].toUpperCase()
                            } ];
                        });
                    } else l.value.actName = "", l.value.applicativeLevel = "";
                }
            }), (e, t) => {
                const o = G, v = H, a = W, m = X, R = le, A = Y, O = Z, M = ee;
                return N(), U("div", null, [ u(M, {
                    modelValue: c.value,
                    "onUpdate:modelValue": t[3] || (t[3] = i => c.value = i),
                    scroll: !0,
                    "max-height": "290",
                    title: f.value,
                    width: "420",
                    onClose: E
                }, {
                    footer: r(() => [ u(O, {
                        type: "default",
                        onClick: t[2] || (t[2] = i => c.value = !1),
                        disabled: x(j) != 0
                    }, {
                        default: r(() => [ V("取消") ]),
                        _: 1
                    }, 8, [ "disabled" ]), u(O, {
                        type: "primary",
                        onClick: S,
                        disabled: x(j) != 0
                    }, {
                        default: r(() => [ V("确定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: r(() => [ u(A, {
                        ref_key: "actFormRef",
                        ref: p,
                        model: l.value,
                        class: "neu"
                    }, {
                        default: r(() => [ u(v, {
                            label: "资料名称",
                            prop: "actName",
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
                            default: r(() => [ u(o, {
                                size: "large",
                                modelValue: l.value.actName,
                                "onUpdate:modelValue": t[0] || (t[0] = i => l.value.actName = i),
                                placeholder: "请输入",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(v, {
                            label: "适应等级",
                            prop: "applicativeLevel"
                        }, {
                            default: r(() => [ u(m, {
                                size: "large",
                                modelValue: l.value.applicativeLevel,
                                "onUpdate:modelValue": t[1] || (t[1] = i => l.value.applicativeLevel = i),
                                placeholder: "请选择",
                                clearable: ""
                            }, {
                                default: r(() => [ (N(), U(q, null, J(P, i => u(a, {
                                    key: i.value,
                                    label: i.label,
                                    value: i.value
                                }, null, 8, [ "label", "value" ])), 64)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(v, {
                            label: "上传文件",
                            prop: "eid"
                        }, {
                            default: r(() => [ b, u(R, {
                                ref_key: "NeuUploadRef",
                                ref: d,
                                limit: 1,
                                alert: "仅可上传一个文件，文档类型文件（除pdf类型）大小不得超过50MB；其他类型文件大小不得超过500MB。",
                                onSuccess: g,
                                onError: K,
                                onFileRemove: C
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
    L as _,
    de as __tla
};