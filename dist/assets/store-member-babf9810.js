import {
    h as Y,
    T as Z,
    e as q,
    r as i,
    o as m,
    c as w,
    a as z,
    k as e,
    l as a,
    v as f,
    D as A,
    t as h,
    C as B,
    F as ee,
    y as ae,
    p as le,
    bo as E,
    n as F,
    J as te,
    ad as re,
    ae as se,
    O as oe,
    ab as ie,
    ac as de,
    Q as ue,
    aU as pe,
    R as ne,
    S as me,
    __tla as ce
} from "./index-6c08ea4c.js";

import {
    _ as _e,
    __tla as ve
} from "./index-71666e05.js";

import {
    A as fe,
    f as he,
    m as ye,
    B as ge,
    __tla as be
} from "./code-a0d24f62.js";

import {
    t as Ie
} from "./formatter-7ecf379a.js";

import {
    g as ke,
    __tla as we
} from "./group-7c00fc2a.js";

import {
    _ as Ge
} from "./_plugin-vue_export-helper-1b428a4d.js";

let O, je = Promise.all([ (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})() ]).then(async () => {
    let c, G, j, V, x, C, P;
    c = d => (ne("data-v-7869586d"), d = d(), me(), d), G = {
        class: "store-member"
    }, j = {
        key: 0,
        style: {
            "margin-bottom": "20px"
        }
    }, V = {
        class: "data-empty"
    }, x = c(() => h("span", null, "开发者", -1)), C = c(() => h("span", null, "成员角色：", -1)), 
    P = c(() => h("span", {
        style: {
            "margin-left": "15px"
        }
    }, "开发者", -1)), O = Ge({
        __name: "store-member",
        props: {
            projectInfo: {
                type: Object,
                required: !0
            }
        },
        setup(d) {
            const y = d, R = Y(), g = Z(), $ = q(() => R.isTeacher), u = i(!1), _ = i(null), p = i({
                list: []
            }), b = i([]), D = {
                list: [ {
                    required: !0,
                    message: "请选择要添加的成员",
                    trigger: "change"
                } ]
            }, M = i([]), J = () => {
                p.value = {
                    list: []
                }, F(() => {
                    _.value.clearValidate();
                });
            }, L = () => {
                u.value = !0, he({
                    gitProId: g.params.evnGitProId,
                    projectType: y.projectInfo.gitProjectType
                }).then(t => {
                    b.value = t;
                }), F(() => {
                    _.value.clearValidate();
                });
            }, Q = () => {
                _.value.validate(t => {
                    if (t) {
                        const l = [];
                        p.value.list.forEach(s => {
                            const v = b.value.filter(k => k.id == s)[0], o = {
                                userId: v.id,
                                userNickName: v.nickname,
                                gitProjectId: y.projectInfo.evnGitProId,
                                gitGroupId: y.projectInfo.gitGroupId
                            };
                            l.push(o);
                        }), ye(l).then(s => {
                            E.success("添加成功"), I(), u.value = !1;
                        });
                    }
                });
            }, I = () => {
                ge({
                    evnGitProId: g.params.evnGitProId
                }).then(t => {
                    M.value = t;
                });
            }, S = (t, l) => Ie(t[l.property]), N = i(0), T = q(() => !!$.value || N.value != 0);
            return ke({
                projectId: g.params.projectId
            }).then(t => {
                N.value = t.isLeader;
            }), I(), (t, l) => {
                const s = te, v = _e, o = re, k = se, U = oe, H = ie, K = de, W = ue, X = pe;
                return m(), w("div", G, [ z(T) ? (m(), w("div", j, [ e(s, {
                    type: "primary",
                    size: "large",
                    onClick: L
                }, {
                    default: a(() => [ f("添加成员") ]),
                    _: 1
                }) ])) : A("", !0), e(k, {
                    data: M.value,
                    class: "neu-table",
                    height: "100%",
                    style: {
                        width: "100%"
                    }
                }, {
                    empty: a(() => [ h("div", V, [ e(v, {
                        msg: "暂无数据"
                    }) ]) ]),
                    default: a(() => [ e(o, {
                        prop: "sysUserName",
                        label: "用户名",
                        "min-width": "240"
                    }), e(o, {
                        prop: "userName",
                        label: "成员姓名",
                        "min-width": "180"
                    }), e(o, {
                        prop: "userEmail",
                        label: "邮箱",
                        "min-width": "220",
                        "show-overflow-tooltip": "",
                        formatter: S
                    }), e(o, {
                        prop: "address",
                        "min-width": "220",
                        label: "仓库角色"
                    }, {
                        default: a(() => [ x ]),
                        _: 1
                    }), z(T) ? (m(), B(o, {
                        key: 0,
                        label: "操作",
                        align: "center",
                        width: "220"
                    }, {
                        default: a(r => [ e(s, {
                            link: "",
                            size: "small",
                            type: "primary",
                            onClick: Ve => {
                                return n = r.row, void le().delConfirm(`\u786E\u8BA4\u5C06\u7528\u6237\uFF08${n.userName}\uFF09\u79FB\u51FA\u8BE5\u4ED3\u5E93\u5417\uFF1F`, "提示").then(() => {
                                    fe({
                                        evnGitMemberId: n.evnGitMemberId,
                                        gitGroupId: n.gitGroupId,
                                        gitMemberId: n.gitMemberId
                                    }).then(xe => {
                                        I(), E.success("移出成功");
                                    });
                                }).catch(() => {});
                                var n;
                            }
                        }, {
                            default: a(() => [ f(" 移出 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ]),
                        _: 1
                    })) : A("", !0) ]),
                    _: 1
                }, 8, [ "data" ]), e(X, {
                    title: "添加成员",
                    "destroy-on-close": "",
                    modelValue: u.value,
                    "onUpdate:modelValue": l[2] || (l[2] = r => u.value = r),
                    width: "540px",
                    onClose: J
                }, {
                    footer: a(() => [ e(s, {
                        onClick: l[1] || (l[1] = r => u.value = !1)
                    }, {
                        default: a(() => [ f("取消") ]),
                        _: 1
                    }), e(s, {
                        type: "primary",
                        onClick: Q
                    }, {
                        default: a(() => [ f("确定") ]),
                        _: 1
                    }) ]),
                    default: a(() => [ e(W, {
                        ref_key: "MemberFormRef",
                        ref: _,
                        rules: D,
                        model: p.value,
                        "label-width": "115px",
                        class: "neu"
                    }, {
                        default: a(() => [ e(U, {
                            "label-width": "100%",
                            required: "",
                            style: {
                                "margin-bottom": "10px"
                            }
                        }, {
                            label: a(() => [ C, P ]),
                            _: 1
                        }), e(U, {
                            label: "添加成员：",
                            prop: "list"
                        }, {
                            default: a(() => [ e(K, {
                                class: "neu",
                                modelValue: p.value.list,
                                "onUpdate:modelValue": l[0] || (l[0] = r => p.value.list = r),
                                multiple: "",
                                "collapse-tags": "",
                                "max-collapse-tags": 3,
                                "collapse-tags-tooltip": "",
                                placeholder: "请选择",
                                style: {
                                    width: "360px"
                                }
                            }, {
                                default: a(() => [ (m(!0), w(ee, null, ae(b.value, r => (m(), 
                                B(H, {
                                    key: r.id,
                                    label: `${r.nickname}`,
                                    value: r.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-7869586d" ] ]);
});

export {
    je as __tla,
    O as default
};