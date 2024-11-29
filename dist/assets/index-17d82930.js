import {
    h as He,
    u as Le,
    T as $e,
    r,
    U as Je,
    e as A,
    p as We,
    o as d,
    c as C,
    t as c,
    k as a,
    a as v,
    C as m,
    l as e,
    v as n,
    D as _,
    F as ge,
    y as he,
    c5 as Ze,
    z as Ke,
    n as B,
    E as Xe,
    bo as O,
    _ as Ye,
    J as ea,
    aQ as aa,
    ad as ta,
    ae as la,
    bp as ra,
    bq as oa,
    O as sa,
    Q as ua,
    aU as ia,
    ab as da,
    ac as na,
    R as pa,
    S as ca,
    B as ma,
    __tla as _a
} from "./index-6c08ea4c.js";

import {
    _ as va,
    __tla as fa
} from "./index-8b41572c.js";

import {
    _ as ya,
    __tla as ga
} from "./index-71666e05.js";

import {
    _ as ha,
    __tla as Ia
} from "./index-1024512a.js";

import {
    f as ka,
    h as ba,
    i as Pa,
    j as Ca,
    k as ja,
    l as wa,
    m as Ta,
    n as xa,
    p as Ga,
    __tla as Va
} from "./code-a0d24f62.js";

import za, {
    __tla as Ua
} from "./store-upload-aac3c7ad.js";

import {
    _ as Ra,
    __tla as Na
} from "./account-management.vue_vue_type_script_setup_true_lang-5371bf54.js";

import {
    d as Sa,
    __tla as Fa
} from "./formatTime-de6f1520.js";

import {
    g as Da,
    __tla as Ma
} from "./group-7c00fc2a.js";

import qa, {
    __tla as Ea
} from "./code-drawer-d0847fa6.js";

import {
    b as Aa,
    __tla as Ba
} from "./project-51c056b9.js";

import {
    _ as Oa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as Qa,
    b as Ha,
    E as La,
    __tla as $a
} from "./index-5adb716b.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ja
} from "./DeptTag-1be092ce.js";

import {
    __tla as Wa
} from "./index-ef4d146e.js";

import {
    __tla as Za
} from "./file-e038b35d.js";

import "./validate-b72f006c.js";

import {
    __tla as Ka
} from "./el-drawer-fca4d971.js";

import {
    __tla as Xa
} from "./index-da0e4c45.js";

import "./base64-a4536364.js";

let Ie, Ya = Promise.all([ (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})(), (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return Fa;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Ea;
    } catch {}
})(), (() => {
    try {
        return Ba;
    } catch {}
})(), (() => {
    try {
        return $a;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return Wa;
    } catch {}
})(), (() => {
    try {
        return Za;
    } catch {}
})(), (() => {
    try {
        return Ka;
    } catch {}
})(), (() => {
    try {
        return Xa;
    } catch {}
})() ]).then(async () => {
    let f, Q, H, L, $, J, W, Z, K, X, Y, ee, ae, te, le, re;
    f = j => (pa("data-v-fdfd66db"), j = j(), ca(), j), Q = {
        class: "work-code"
    }, H = {
        class: "page-content"
    }, L = {
        class: "content-header"
    }, $ = {
        class: "header-left"
    }, J = {
        class: "header-right"
    }, W = {
        key: 0
    }, Z = {
        key: 1
    }, K = f(() => c("span", null, "暂无完整代码", -1)), X = {
        class: "content-container",
        style: {
            height: "100%"
        }
    }, Y = {
        class: "data-empty"
    }, ee = {
        class: "group-alert"
    }, ae = f(() => c("span", null, ma("说明：系统默认使用项目资源中初始化工程文件初始化这个仓库"), -1)), te = {
        style: {
            display: "flex",
            "justify-content": "center",
            height: "160px",
            "margin-top": "20px"
        }
    }, le = f(() => c("span", null, "成员角色：", -1)), re = f(() => c("span", {
        style: {
            "margin-left": "15px"
        }
    }, "开发者", -1)), Ie = Oa({
        __name: "index",
        setup(j) {
            const oe = He(), ke = Le(), p = $e(), w = r(null), se = r(null), T = r(null), R = r(null), ue = r(null), y = r(!1), g = r(!1), h = r(!1), I = r({
                list: []
            }), N = r([]), be = {
                list: [ {
                    required: !0,
                    message: "请选择要添加的成员",
                    trigger: "change"
                } ]
            }, s = r({});
            r("");
            const k = r({
                techTaskType: ""
            }), ie = Je({
                name: "",
                groupId: p.params.groupId
            }), de = r([]);
            r([]);
            const x = r([]), Pe = A(() => oe.isStudent), Ce = A(() => oe.isTeacher), je = r(!1), we = l => {
                ie.name = l.name ?? "", ne();
            }, Te = () => {
                k.value = {
                    techTaskType: ""
                };
            }, xe = () => {
                I.value = {
                    list: []
                }, B(() => {
                    T.value.clearValidate();
                });
            }, Ge = () => {
                y.value = !0;
            }, Ve = () => {
                ba().then(l => {
                    l && Object.keys(l).length > 0 ? R.value.openDialog({
                        type: "preview",
                        data: l
                    }) : Xe.confirm("我们检测到您尚未创建Git账号，该账号是访问代码仓库的必要条件，请先创建您的Git账号，以便您可以顺利使用代码仓库功能。", "提示", {
                        confirmButtonText: "创建",
                        showCancelButton: !1,
                        center: !0,
                        customClass: "neu-message-box"
                    }).then(() => {
                        R.value.openDialog({
                            tye: "add"
                        });
                    });
                });
            }, ze = () => {
                se.value.validate(l => {
                    l && Pa({
                        projectId: p.params.projectId,
                        groupId: p.params.groupId,
                        arrangementId: p.params.teachArrangementId,
                        techTaskType: k.value.techTaskType
                    }).then(o => {
                        O.success("创建成功"), b(), y.value = !1;
                    });
                });
            }, S = r(""), Ue = We(), ne = () => {
                ja(ie).then(l => {
                    de.value = l;
                });
            }, G = r(!1), pe = l => {
                wa({
                    groupId: s.value.groupId,
                    gitGroupId: s.value.gitGroupId,
                    gitProjectType: s.value.gitProjectType,
                    eid: l.eid,
                    evnGitProId: s.value.evnGitProId,
                    projectId: s.value.projectId,
                    sourceClassify: "2",
                    gitProId: s.value.gitProId,
                    gitProName: s.value.gitProName,
                    gitProjectName: s.value.gitProjectName,
                    gitGroupPath: s.value.gitGroupPath,
                    gitGroupFullPath: s.value.gitGroupFullPath,
                    arrangementId: p.params.teachArrangementId
                }).then(o => {
                    O.success("初始化成功"), G.value = !1, g.value = !1, b();
                });
            }, Re = () => {
                G.value = !1;
            }, Ne = () => {
                s.value.eid ? pe(s.value) : (G.value = !0, w.value.submitUpload());
            }, Se = () => {
                S.value = "", s.value = {}, b(), B(() => {
                    w.value.clearFiles(), w.value.cancelUpload();
                });
            }, Fe = () => {
                T.value.validate(l => {
                    if (l) {
                        const o = [];
                        I.value.list.forEach(V => {
                            const P = N.value.filter(D => D.id == V)[0], i = {
                                userId: P.id,
                                userNickName: P.nickname,
                                gitProjectId: s.value.evnGitProId,
                                gitGroupId: s.value.gitGroupId
                            };
                            o.push(i);
                        }), Ta(o).then(V => {
                            O.success("添加成功"), b(), h.value = !1;
                        });
                    }
                });
            }, ce = r(""), me = r(0), F = A(() => !!Ce.value || me.value != 0), _e = r(0), b = () => {
                ne(), (async () => {
                    const l = await xa({
                        groupId: p.params.groupId,
                        projectId: p.params.projectId
                    });
                    je.value = l;
                })(), Ga({
                    projectId: p.params.projectId
                }).then(l => {
                    x.value = l;
                }), Aa(p.params.projectId).then(l => {
                    _e.value = l.isShowCode;
                }), Da({
                    projectId: p.params.projectId
                }).then(l => {
                    me.value = l.isLeader;
                });
            };
            return b(), (l, o) => {
                const V = ha, P = Ye, i = ea, D = aa, ve = Qa, De = Ha, Me = La, qe = ya, M = ta, Ee = la, Ae = va, fe = ra, Be = oa, q = sa, ye = ua, E = ia, Oe = da, Qe = na;
                return d(), C("div", Q, [ c("div", H, [ c("div", L, [ c("div", $, [ a(V, {
                    ref: "ComSearchRef",
                    keywordsInfo: {
                        label: "代码库名称",
                        key: "name"
                    },
                    onHandleSearch: we,
                    class: "left"
                }, null, 512) ]), c("div", J, [ ce.value != "7" && v(F) ? (d(), 
                m(i, {
                    key: 0,
                    type: "primary",
                    size: "large",
                    onClick: Ge
                }, {
                    default: e(() => [ a(P, {
                        icon: "ep:plus",
                        class: "mr-1"
                    }), n("新建仓库") ]),
                    _: 1
                })) : _("", !0), a(i, {
                    type: "primary",
                    size: "large",
                    plain: "",
                    onClick: Ve
                }, {
                    default: e(() => [ n("账号管理") ]),
                    _: 1
                }), _e.value == 1 && v(Pe) ? (d(), m(Me, {
                    key: 1
                }, {
                    dropdown: e(() => [ a(De, null, {
                        default: e(() => [ x.value && x.value.length > 0 ? (d(!0), 
                        C(ge, {
                            key: 0
                        }, he(x.value, (t, z) => (d(), m(ve, {
                            key: z,
                            onClick: u => {
                                return U = t, void ue.value.openDrawer(U.gitProId);
                                var U;
                            }
                        }, {
                            default: e(() => [ t.gitProjectType == "3" ? (d(), C("span", W, "前端代码")) : _("", !0), t.gitProjectType == "4" ? (d(), 
                            C("span", Z, "后端代码")) : _("", !0) ]),
                            _: 2
                        }, 1032, [ "onClick" ]))), 128)) : (d(), m(ve, {
                            key: 1,
                            disabled: ""
                        }, {
                            default: e(() => [ K ]),
                            _: 1
                        })) ]),
                        _: 1
                    }) ]),
                    default: e(() => [ a(i, {
                        type: "primary",
                        size: "large",
                        plain: "",
                        class: "ml-3"
                    }, {
                        default: e(() => [ n(" 完整代码"), a(D, {
                            class: "el-icon--right",
                            style: {
                                "margin-left": "9px"
                            }
                        }, {
                            default: e(() => [ a(v(Ze)) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                })) : _("", !0) ]) ]), a(Ae, {
                    "outer-height": 0,
                    class: "center-box"
                }, {
                    default: e(() => [ c("div", X, [ a(Ee, {
                        class: "neu-table",
                        data: de.value,
                        height: "100%",
                        style: {
                            width: "100%"
                        }
                    }, {
                        empty: e(() => [ c("div", Y, [ a(qe, {
                            msg: "暂无数据"
                        }) ]) ]),
                        default: e(() => [ a(M, {
                            prop: "gitProName",
                            label: "代码库"
                        }), a(M, {
                            prop: "createTime",
                            formatter: v(Sa),
                            label: "最近更新时间"
                        }, null, 8, [ "formatter" ]), ce.value != "7" ? (d(), m(M, {
                            key: 0,
                            label: "操作"
                        }, {
                            default: e(t => [ !t.row.envId && v(F) ? (d(), m(i, {
                                key: 0,
                                link: "",
                                size: "small",
                                type: "primary",
                                onClick: z => {
                                    return u = t.row, s.value = u, u.status != 2 && (S.value = u.eid), 
                                    void (g.value = !0);
                                    var u;
                                }
                            }, {
                                default: e(() => [ n(" 初始化 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : _("", !0), t.row.envId && v(F) ? (d(), 
                            m(i, {
                                key: 1,
                                link: "",
                                size: "small",
                                type: "primary",
                                onClick: z => {
                                    return u = t.row, h.value = !0, s.value = u, 
                                    ka({
                                        gitProId: u.evnGitProId,
                                        projectType: u.gitProjectType
                                    }).then(U => {
                                        N.value = U;
                                    }), void B(() => {
                                        T.value.clearValidate();
                                    });
                                    var u;
                                }
                            }, {
                                default: e(() => [ n(" 添加成员 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : _("", !0), t.row.envId ? (d(), 
                            m(i, {
                                key: 2,
                                link: "",
                                size: "small",
                                type: "primary",
                                onClick: z => (async u => {
                                    await Ca({
                                        groupId: p.params.groupId,
                                        projectId: p.params.projectId,
                                        gitProjectType: u.gitProjectType
                                    }) ? await ke.push({
                                        name: "DevopsCodeStore",
                                        params: {
                                            evnGitProId: u.evnGitProId,
                                            gitProId: u.gitProId,
                                            gitGroupId: u.gitGroupId,
                                            activeMenu: 1
                                        }
                                    }) : await Ue.tipConfirm("您当前无法访问此仓库，可能是因为您尚未被添加为仓库成员。请联系您的教师或组长，请求将您添加到仓库成员中，以便您可以访问所需的资源。", "提示");
                                })(t.row)
                            }, {
                                default: e(() => [ n(" 进入仓库 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : _("", !0) ]),
                            _: 1
                        })) : _("", !0) ]),
                        _: 1
                    }, 8, [ "data" ]) ]) ]),
                    _: 1
                }) ]), a(E, {
                    title: "新建仓库",
                    "destroy-on-close": "",
                    modelValue: y.value,
                    "onUpdate:modelValue": o[2] || (o[2] = t => y.value = t),
                    width: "540px",
                    onClose: Te
                }, {
                    footer: e(() => [ a(i, {
                        onClick: o[1] || (o[1] = t => y.value = !1)
                    }, {
                        default: e(() => [ n("取消") ]),
                        _: 1
                    }), a(i, {
                        type: "primary",
                        onClick: ze
                    }, {
                        default: e(() => [ n("确定") ]),
                        _: 1
                    }) ]),
                    default: e(() => [ c("div", ee, [ a(P, {
                        class: "blue",
                        icon: "svg-icon:info",
                        size: 14
                    }), ae ]), a(ye, {
                        ref_key: "createFormRef",
                        ref: se,
                        model: k.value,
                        "label-width": "105px",
                        style: {
                            "margin-top": "22px"
                        },
                        class: "neu"
                    }, {
                        default: e(() => [ a(q, {
                            label: "适用方向：",
                            prop: "techTaskType",
                            rules: [ {
                                required: !0,
                                message: "请选择适用方向",
                                trigger: "change"
                            } ]
                        }, {
                            default: e(() => [ a(Be, {
                                modelValue: k.value.techTaskType,
                                "onUpdate:modelValue": o[0] || (o[0] = t => k.value.techTaskType = t)
                            }, {
                                default: e(() => [ a(fe, {
                                    label: 1
                                }, {
                                    default: e(() => [ n("前端") ]),
                                    _: 1
                                }), a(fe, {
                                    label: 2
                                }, {
                                    default: e(() => [ n("后端") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), a(E, {
                    title: "仓库初始化",
                    modelValue: g.value,
                    "onUpdate:modelValue": o[4] || (o[4] = t => g.value = t),
                    width: "700px",
                    onClose: Se
                }, {
                    footer: e(() => [ a(i, {
                        onClick: o[3] || (o[3] = t => g.value = !1)
                    }, {
                        default: e(() => [ n("取消") ]),
                        _: 1
                    }), a(i, {
                        type: "primary",
                        class: Ke({
                            "btn-stop": G.value
                        }),
                        onClick: Ne
                    }, {
                        default: e(() => [ n("确定") ]),
                        _: 1
                    }, 8, [ "class" ]) ]),
                    default: e(() => [ c("div", te, [ a(za, {
                        ref_key: "UploadResourceRef",
                        ref: w,
                        eid: S.value,
                        item: s.value,
                        "auto-upload": !1,
                        size: 500,
                        englishName: !0,
                        tooltip: "请上传项目文件，文件格式为.zip，文件名为英文，文件最大不超过500M",
                        accept: ".zip",
                        onSuccess: pe,
                        onError: Re
                    }, null, 8, [ "eid", "item" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), a(E, {
                    title: "添加成员",
                    "destroy-on-close": "",
                    modelValue: h.value,
                    "onUpdate:modelValue": o[7] || (o[7] = t => h.value = t),
                    width: "540px",
                    onClose: xe
                }, {
                    footer: e(() => [ a(i, {
                        onClick: o[6] || (o[6] = t => h.value = !1)
                    }, {
                        default: e(() => [ n("取消") ]),
                        _: 1
                    }), a(i, {
                        type: "primary",
                        onClick: Fe
                    }, {
                        default: e(() => [ n("确定") ]),
                        _: 1
                    }) ]),
                    default: e(() => [ a(ye, {
                        ref_key: "MemberFormRef",
                        ref: T,
                        rules: be,
                        model: I.value,
                        "label-width": "115px",
                        class: "neu"
                    }, {
                        default: e(() => [ a(q, {
                            "label-width": "100%",
                            required: "",
                            style: {
                                "margin-bottom": "10px"
                            }
                        }, {
                            label: e(() => [ le, re ]),
                            _: 1
                        }), a(q, {
                            label: "添加成员：",
                            prop: "list"
                        }, {
                            default: e(() => [ a(Qe, {
                                class: "neu",
                                modelValue: I.value.list,
                                "onUpdate:modelValue": o[5] || (o[5] = t => I.value.list = t),
                                multiple: "",
                                "collapse-tags": "",
                                "max-collapse-tags": 3,
                                "collapse-tags-tooltip": "",
                                placeholder: "请选择",
                                style: {
                                    width: "360px"
                                }
                            }, {
                                default: e(() => [ (d(!0), C(ge, null, he(N.value, t => (d(), 
                                m(Oe, {
                                    key: t.id,
                                    label: `${t.nickname}`,
                                    value: t.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), a(Ra, {
                    ref_key: "AccountManagementRef",
                    ref: R
                }, null, 512), a(qa, {
                    ref_key: "CodeDrawerRef",
                    ref: ue
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-fdfd66db" ] ]);
});

export {
    Ya as __tla,
    Ie as default
};