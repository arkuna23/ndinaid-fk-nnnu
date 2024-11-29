import {
    p as ne,
    h as ce,
    a0 as me,
    r as _,
    U as _e,
    f as pe,
    w as fe,
    aT as H,
    o as b,
    C as ve,
    l as o,
    t as a,
    B as y,
    k as r,
    v as k,
    a as p,
    c as Y,
    F as he,
    y as ge,
    A as ye,
    z as w,
    G as Ie,
    H as be,
    n as ke,
    aQ as we,
    P as Pe,
    O as xe,
    Q as Le,
    J as Ce,
    aU as Se,
    R as Ae,
    S as Ve,
    __tla as Ne
} from "./index-6c08ea4c.js";

import {
    E as Ue,
    __tla as Oe
} from "./el-image-0d184777.js";

import {
    __tla as Re
} from "./el-image-viewer-2c0d56e4.js";

import {
    I as ze,
    __tla as Ee
} from "./invigilator-0cbdfb50.js";

import {
    a as Fe,
    __tla as Je
} from "./file-e038b35d.js";

import {
    _ as Be
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as De
} from "./throttle-1adeb119.js";

let q, Qe = Promise.all([ (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})() ]).then(async () => {
    let i, P, x, L, C, S, A, V, N, U, O, R, z, E, F;
    i = u => (Ae("data-v-20e035fa"), u = u(), Ve(), u), P = {
        class: "el-dialog__title"
    }, x = {
        class: "dialog-content pl-5 pr-5"
    }, L = {
        class: "content-info"
    }, C = i(() => a("p", {
        class: "mb-7 prompt-message"
    }, " 考生已申请人脸识别人工审核，是否同意考生验证通过？ ", -1)), S = {
        class: "mb-4 info"
    }, A = i(() => a("label", null, "姓名：", -1)), V = i(() => a("label", null, "学号/工号：", -1)), 
    N = {
        class: "info-img"
    }, U = {
        class: "img-left"
    }, O = i(() => a("div", {
        class: "image-slot"
    }, " 暂无照片 ", -1)), R = i(() => a("p", {
        class: "img-illustrate"
    }, "进入考场时照片", -1)), z = {
        class: "img-right"
    }, E = {
        class: "carousel-exchange"
    }, F = {
        class: "img-illustrate"
    }, q = Be({
        __name: "manualReview",
        props: {
            candidateDetails: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "refreshList" ],
        setup(u, {
            expose: K,
            emit: M
        }) {
            const W = ne(), X = u, f = ce(), {
                candidateDetails: t
            } = me(X), v = _(!1), Z = _("人工审核"), J = _("70px"), d = _e({
                desc: ""
            }), $ = M;
            pe(() => {});
            const h = () => {
                v.value = !1, J.value = "", B.value.resetFields();
            }, B = _(null), D = async ({
                auditStatus: s
            }) => {
                s !== "2" || d.desc !== "" ? (await ee({
                    auditStatus: s
                }), $("refreshList"), h()) : W.warning("请输入拒绝理由");
            }, ee = async ({
                auditStatus: s
            }) => await ze.manualAuditApi({
                examId: t.value.examId,
                operatorId: f.user.id,
                operatorName: f.user.nickname,
                number: f.user.number,
                operatorAvatar: f.user.avatar,
                auditStatus: s,
                desc: d.desc,
                anomalousPhotoId: t.value.anomalousPhotoId,
                remindUserIdList: [ {
                    userId: t.value.userId,
                    userName: t.value.nickName,
                    number: t.value.number,
                    avatarEId: t.value.avatarEId
                } ]
            });
            function Q(s) {
                return s ? Fe(s) : "";
            }
            const n = _("");
            fe(() => t.value.referencePhotoIdList, s => {
                s && s.length && T();
            });
            const T = () => {
                var e;
                const {
                    eid: s
                } = (e = JSON.parse(JSON.stringify(t.value.referencePhotoIdList))) == null ? void 0 : e.shift();
                n.value = s || "";
            }, ae = s => {
                const e = {
                    0: "正脸",
                    1: "上脸",
                    2: "下脸",
                    3: "左脸",
                    4: "右脸",
                    default: ""
                };
                return e[s] || e.default;
            };
            return K({
                handleOpen: () => {
                    v.value = !0, ke(() => {
                        T();
                    });
                },
                handleClose: h
            }), (s, e) => {
                const j = Ue, te = H("ArrowLeft"), G = we, le = H("ArrowRight"), se = Pe, re = xe, oe = Le, I = Ce, ie = Se;
                return b(), ve(ie, {
                    modelValue: v.value,
                    "onUpdate:modelValue": e[5] || (e[5] = l => v.value = l),
                    title: "",
                    width: "790px",
                    "close-on-click-modal": !1,
                    onClose: h,
                    appendToBody: !0
                }, {
                    header: o(() => [ a("span", P, y(Z.value), 1) ]),
                    footer: o(() => [ r(I, {
                        size: "large",
                        type: "danger",
                        onClick: e[2] || (e[2] = l => D({
                            auditStatus: "2"
                        }))
                    }, {
                        default: o(() => [ k("拒 绝 ") ]),
                        _: 1
                    }), r(I, {
                        size: "large",
                        type: "primary",
                        onClick: e[3] || (e[3] = l => D({
                            auditStatus: "1"
                        }))
                    }, {
                        default: o(() => [ k("同 意 ") ]),
                        _: 1
                    }), r(I, {
                        size: "large",
                        onClick: e[4] || (e[4] = l => h())
                    }, {
                        default: o(() => [ k("取 消 ") ]),
                        _: 1
                    }) ]),
                    default: o(() => [ a("div", x, [ a("div", L, [ C, a("div", S, [ A, a("span", null, y(p(t).nickName), 1) ]), a("div", null, [ V, a("span", null, y(p(t).number), 1) ]), a("div", N, [ a("div", U, [ r(j, {
                        src: Q(p(t).anomalousPhotoId)
                    }, {
                        error: o(() => [ O ]),
                        _: 1
                    }, 8, [ "src" ]), R ]), a("div", z, [ (b(!0), Y(he, null, ge(p(t).referencePhotoIdList, (l, g) => ye((b(), 
                    Y("div", {
                        class: w([ "img-right-carousel", l.eid === n.value ? "carousel-show" : "carousel-hide" ]),
                        key: l == null ? void 0 : l.eid
                    }, [ r(j, {
                        src: Q(l.eid)
                    }, null, 8, [ "src" ]), a("div", E, [ r(G, {
                        class: w([ "neu-pointer", {
                            "exchange-disabled": g < 1
                        } ]),
                        onClick: ue => ((de, c) => {
                            var m;
                            c > 0 && (n.value = (m = t.value.referencePhotoIdList) == null ? void 0 : m[c - 1].eid);
                        })(0, g)
                    }, {
                        default: o(() => [ r(te) ]),
                        _: 2
                    }, 1032, [ "class", "onClick" ]), a("p", F, "人脸识别基准照片" + y(ae(l.tpye)), 1), r(G, {
                        class: w([ "neu-pointer", {
                            "exchange-disabled": g === p(t).referencePhotoIdList.length - 1
                        } ]),
                        onClick: ue => ((de, c) => {
                            var m;
                            c < t.value.referencePhotoIdList.length - 1 && (n.value = (m = t.value.referencePhotoIdList) == null ? void 0 : m[c + 1].eid);
                        })(0, g)
                    }, {
                        default: o(() => [ r(le) ]),
                        _: 2
                    }, 1032, [ "class", "onClick" ]) ]) ], 2)), [ [ Ie, (l == null ? void 0 : l.eid) === n.value ] ])), 128)) ]) ]) ]), r(oe, {
                        ref_key: "dialogFormRef",
                        ref: B,
                        model: d,
                        onSubmit: e[1] || (e[1] = be(() => {}, [ "prevent" ])),
                        "label-width": J.value
                    }, {
                        default: o(() => [ r(re, {
                            label: "拒绝理由",
                            prop: "desc"
                        }, {
                            default: o(() => [ r(se, {
                                type: "textarea",
                                modelValue: d.desc,
                                "onUpdate:modelValue": e[0] || (e[0] = l => d.desc = l),
                                maxlength: "50",
                                "show-word-limit": ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "label-width" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-20e035fa" ] ]);
});

export {
    Qe as __tla,
    q as default
};