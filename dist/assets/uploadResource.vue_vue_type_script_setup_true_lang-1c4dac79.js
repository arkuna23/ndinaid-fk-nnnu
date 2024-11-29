import {
    d as E,
    r as v,
    p as q,
    h as A,
    e as T,
    o as g,
    c as j,
    k as s,
    l as i,
    v as O,
    a as w,
    F as B,
    y as J,
    n as M,
    bB as Q,
    P as $,
    O as G,
    ab as H,
    ac as W,
    Q as X,
    J as Y,
    aU as Z,
    __tla as ee
} from "./index-6c08ea4c.js";

import {
    _ as ae,
    __tla as le
} from "./index-a34a73bc.js";

import {
    u as te,
    c as ue,
    __tla as se
} from "./activity-afb6dd89.js";

import {
    o as N,
    __tla as re
} from "./file-e038b35d.js";

let U, ie = Promise.all([ (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})() ]).then(async () => {
    U = E({
        __name: "uploadResource",
        emits: [ "refresh" ],
        setup(ce, {
            expose: V,
            emit: L
        }) {
            const d = v(), n = v(), o = v(!1), m = v(""), b = L, _ = q(), f = A(), u = v({}), t = v({
                actName: "",
                applicativeLevel: "",
                eid: ""
            }), k = [ {
                label: "校级",
                value: 1
            }, {
                label: "院级",
                value: 2
            }, {
                label: "系级",
                value: 3
            } ], x = {
                "视频": 1,
                "音频": 2,
                "文档": 3,
                "图片": 4,
                "压缩包": 5,
                "链接": 6,
                MD: 7
            }, z = T(() => {
                var a;
                return (a = d.value) == null ? void 0 : a.uploadPercentage;
            }), F = () => {
                u.value.type == "edit" && u.value.editObject.eid ? h() : d.value.submitFile();
            }, I = () => {
                u.value.type == "edit" && (u.value.editObject.eid = "");
            }, P = () => {
                n.value.resetFields(), n.value.clearValidate(), d.value.cancelUpload();
            }, h = a => {
                const l = [];
                a && a.length > 0 && a.forEach(e => {
                    const c = x[N(e.objectKey || e.name).fileType];
                    t.value.eid = e.eid, l.push({
                        ...t.value,
                        resName: e.objectKey || e.name,
                        resExt: `.${N(e.objectKey || e.name).extension}`,
                        resType: c,
                        resSize: e.fileSize || e.size,
                        resDesc: e.objectKey || e.name,
                        pvtParentId: "",
                        pvtAncestorId: "",
                        pubParentId: u.value.fatherObj.id,
                        pubAncestorId: u.value.fatherObj.id,
                        release: 1,
                        creatorName: f.getUser.nickname,
                        updaterName: f.getUser.nickname,
                        eid: e.eid
                    });
                });
                const p = {
                    ...u.value.fatherObj
                };
                n.value.validate(e => {
                    e && (u.value.type == "edit" ? (Object.assign(u.value.editObject, l[0] ? l[0] : {}), 
                    te({
                        ...u.value.editObject,
                        ...t.value
                    }).then(c => {
                        c && (_.success("提交成功"), o.value = !1, b("refresh"));
                    })) : (p.children = l, ue(p, {
                        tenantId: Q()
                    }).then(c => {
                        c && (_.success("提交成功"), o.value = !1, b("refresh"));
                    })));
                });
            }, S = () => {
                d.value.cancelUpload();
            };
            return V({
                openDialog: a => {
                    if (m.value = a.title, u.value = a, o.value = !0, a.type == "edit") {
                        t.value.actName = a.editObject.actName, t.value.applicativeLevel = a.editObject.applicativeLevel, 
                        t.value.eid = a.editObject.eid;
                        let l = a.editObject.resName.split(".");
                        M(() => {
                            d.value.fileList = [ {
                                name: a.editObject.resName,
                                size: a.editObject.resSize,
                                status: 1,
                                fileSuffix: l[l.length - 1].toUpperCase()
                            } ];
                        });
                    } else t.value.actName = "", t.value.applicativeLevel = "";
                }
            }), (a, l) => {
                const p = $, e = G, c = H, C = W, K = ae, R = X, y = Y, D = Z;
                return g(), j("div", null, [ s(D, {
                    modelValue: o.value,
                    "onUpdate:modelValue": l[3] || (l[3] = r => o.value = r),
                    scroll: !0,
                    "max-height": "290",
                    title: m.value,
                    width: "420",
                    onClose: P
                }, {
                    footer: i(() => [ s(y, {
                        type: "default",
                        onClick: l[2] || (l[2] = r => o.value = !1)
                    }, {
                        default: i(() => [ O("取消") ]),
                        _: 1
                    }), s(y, {
                        type: "primary",
                        onClick: F,
                        disabled: w(z) != 0
                    }, {
                        default: i(() => [ O("确定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: i(() => [ s(R, {
                        ref_key: "actFormRef",
                        ref: n,
                        model: t.value,
                        class: "neu"
                    }, {
                        default: i(() => [ s(e, {
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
                            default: i(() => [ s(p, {
                                size: "large",
                                modelValue: t.value.actName,
                                "onUpdate:modelValue": l[0] || (l[0] = r => t.value.actName = r),
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(e, {
                            label: "适应等级",
                            prop: "applicativeLevel"
                        }, {
                            default: i(() => [ s(C, {
                                size: "large",
                                modelValue: t.value.applicativeLevel,
                                "onUpdate:modelValue": l[1] || (l[1] = r => t.value.applicativeLevel = r),
                                placeholder: "请选择适应等级",
                                clearable: ""
                            }, {
                                default: i(() => [ (g(), j(B, null, J(k, r => s(c, {
                                    key: r.value,
                                    label: r.label,
                                    value: r.value
                                }, null, 8, [ "label", "value" ])), 64)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(e, {
                            label: "上传文件",
                            prop: "eid",
                            rules: [ {
                                required: !0,
                                trigger: [ "blur", "change" ],
                                message: "请上传文件"
                            } ]
                        }, {
                            default: i(() => [ s(K, {
                                ref_key: "NeuUploadRef",
                                ref: d,
                                limit: 1,
                                onSuccess: h,
                                onError: S,
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
    U as _,
    ie as __tla
};