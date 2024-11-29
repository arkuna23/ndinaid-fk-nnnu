import {
    _ as ke,
    __tla as we
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    u as xe,
    T as be,
    r as c,
    e as le,
    f as Ce,
    j as Te,
    o as s,
    c as g,
    t as _,
    a as r,
    k as o,
    A as h,
    C as i,
    l,
    v as m,
    D as b,
    B as R,
    F as De,
    y as Re,
    G as Ee,
    m as Ie,
    z as Ne,
    E as Se,
    bo as Le,
    _ as Pe,
    J as Ve,
    ad as je,
    K as Ae,
    ae as Be,
    a8 as Me,
    R as ze,
    S as Ue,
    __tla as Fe
} from "./index-6c08ea4c.js";

import {
    _ as He,
    __tla as Je
} from "./index-1024512a.js";

import {
    _ as Ke
} from "./manageIcon-aa116bb2.js";

import {
    _ as qe
} from "./deleteIcon-ec5a6b2b.js";

import {
    g as Ge
} from "./file.data-f713c362.js";

import $e, {
    __tla as Oe
} from "./addResourceDialog-fa013ed3.js";

import Qe, {
    __tla as We
} from "./editorResourceNameDialog-7b1fcbbd.js";

import Xe, {
    __tla as Ye
} from "./resourceSetting-cb64e7a4.js";

import {
    h as Ze,
    __tla as ea
} from "./file-e038b35d.js";

import {
    x as aa,
    f as ta,
    __tla as ra
} from "./pkgManage-4e23f8a8.js";

import {
    _ as la
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as sa,
    b as oa,
    E as na,
    __tla as ca
} from "./index-5adb716b.js";

import {
    __tla as ia
} from "./index.es-14d10e28.js";

import {
    __tla as ma
} from "./project-file-a2b4fd07.js";

import "./tree-05ea8e09.js";

import {
    __tla as ua
} from "./DeptTag-1be092ce.js";

import {
    __tla as _a
} from "./index-ef4d146e.js";

import "./teachingResourceIcon7-1c1a8557.js";

import {
    __tla as da
} from "./index-c4ca0ced.js";

import {
    __tla as pa
} from "./index-993301ca.js";

import {
    __tla as ha
} from "./index-8b41572c.js";

import "./step1Banner-550d8194.js";

import "./file_HTML-65451e1b.js";

import "./file.data-794ea5d0.js";

import "./file_题-23882218.js";

import {
    __tla as fa
} from "./formatTime-de6f1520.js";

import {
    __tla as ya
} from "./library-c2ecc5ca.js";

import {
    __tla as ga
} from "./index-9567cbf6.js";

import "./step2Banner-4d214de6.js";

let se, va = Promise.all([ (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})() ]).then(async () => {
    let v, P, V, j, A, B, M, z, U, F, H, J, K, q;
    v = C => (ze("data-v-c7195e5e"), C = C(), Ue(), C), P = {
        style: {
            padding: "0 30px"
        },
        class: "height_box"
    }, V = {
        key: 0,
        class: "neu-no-data",
        style: {
            height: "500px"
        }
    }, j = v(() => _("p", {
        style: {
            "margin-bottom": "10px"
        }
    }, "暂无数据", -1)), A = {
        key: 1,
        class: "contentArea"
    }, B = {
        style: {
            clear: "both",
            color: "#333",
            "font-size": "12px",
            "line-height": "30px"
        }
    }, M = [ "src" ], z = {
        class: "file-name"
    }, U = [ "onClick" ], F = {
        key: 0,
        class: "file-tag",
        style: {
            "margin-left": "7px"
        }
    }, H = [ v(() => _("span", null, "NEU", -1)) ], J = {
        class: "bottomClass"
    }, K = v(() => _("img", {
        src: Ke,
        alt: ""
    }, null, -1)), q = v(() => _("img", {
        src: qe,
        alt: ""
    }, null, -1)), se = la({
        __name: "jxwd",
        setup(C) {
            xe();
            const E = be(), G = c(), $ = c(), O = c(), I = c(), N = c(), d = c([]), Q = c(!1), y = le(() => E.name.includes("Manage")), oe = c([ {
                label: "视频",
                value: 1,
                num: 0
            }, {
                label: "音频",
                value: 2,
                num: 0
            }, {
                label: "文档",
                value: 3,
                num: 0
            }, {
                label: "图片",
                value: 4,
                num: 0
            }, {
                label: "压缩包",
                value: 5,
                num: 0
            }, {
                label: "链接",
                value: 6,
                num: 0
            }, {
                label: "MD",
                value: 7,
                num: 0
            } ]), ne = le(() => [ {
                label: "资料类型",
                key: "resType",
                type: "list",
                options: oe.value
            } ]), S = c(""), T = c(!1), W = c(!1), k = c([]), X = () => {
                G.value.openStep1(0);
            }, D = c({}), ce = e => {
                D.value = e, w(e);
            }, w = (e, a) => {
                Q.value = a, d.value.length && ae(), aa({
                    type: 6,
                    query: e ? e.resName : null,
                    resType: e ? e.resType : null,
                    resPkgId: E.params.id
                }).then(u => {
                    d.value = u || [], d.value.forEach(n => {
                        n.resName = n.name, n.eid = n.dataId;
                    });
                });
            }, Y = e => {
                e.resType == 6 ? window.open(e.resLink, "_blank") : $.value.operation(e);
            }, Z = e => {
                S.value = "set", I.value.open(e, e.length == 1);
            }, ie = e => {
                d.value.forEach(a => {
                    a.id == e.oldData.id && (a.name = e.name + (e.oldData.resExt ? e.oldData.resExt : ""));
                });
            }, ee = e => {
                Se.confirm(`\u786E\u5B9A\u8981\u5220\u9664${e.length == 1 ? "该" : "这些"}\u8D44\u6E90\u5417\uFF1F`, "提示", {
                    confirmButtonText: "确认",
                    cancelButtonText: "取消"
                }).then(() => {
                    var a = [];
                    e.forEach(u => {
                        a.push(u.id);
                    }), ta({
                        resPkgId: E.params.id,
                        idArray: a
                    }).then(u => {
                        w(D.value), Le({
                            type: "success",
                            message: "删除成功"
                        });
                    });
                }).catch(() => {});
            }, me = (e, a) => {
                switch (a) {
                  case "editor":
                    O.value.open(e);
                    break;

                  case "download":
                    Ze(e.dataId, e.name);
                    break;

                  case "publish":
                    (u => {
                        S.value = "publish", I.value.open(u, !1);
                    })([ e ]);
                    break;

                  case "delete":
                    ee([ e ]);
                }
            }, ae = () => {
                N.value.clearSelection();
            }, ue = e => {
                N.value.toggleAllSelection();
            }, _e = e => {
                k.value = [ ...e ];
                let a = e.length;
                T.value = a === d.value.length, W.value = a > 0 && a < d.value.length;
            };
            return Ce(() => {
                w(null, !0);
            }), (e, a) => {
                const u = Pe, n = Ve, de = He, x = je, pe = Ae, L = sa, he = oa, fe = na, ye = Be, ge = Me, ve = ke, f = Te("hasPermi-none");
                return s(), g("div", {
                    id: "jxwd",
                    style: {
                        padding: "20px 0 0"
                    },
                    class: Ne("isManage" + r(y))
                }, [ _("div", P, [ !r(d).length && r(Q) ? (s(), g("div", V, [ o(u, {
                    icon: "svg-icon:bg-no-data",
                    size: 200,
                    class: "",
                    style: {
                        height: "160px"
                    }
                }), j, r(y) ? h((s(), i(n, {
                    key: 0,
                    type: "primary",
                    onClick: X
                }, {
                    default: l(() => [ o(u, {
                        icon: "ep:plus",
                        class: "mr-4px"
                    }), m("添加") ]),
                    _: 1
                })), [ [ f, [ "teachmanager:teach-course-res:create" ] ] ]) : b("", !0) ])) : (s(), 
                g("div", A, [ o(de, {
                    borderBox: !0,
                    searchList: r(ne),
                    keywordsInfo: {
                        label: "资料名称/标签",
                        key: "resName"
                    },
                    onHandleSearch: ce,
                    class: "left"
                }, null, 8, [ "searchList" ]), r(y) ? h((s(), i(n, {
                    key: 0,
                    type: "primary",
                    class: "btn-group",
                    onClick: X
                }, {
                    default: l(() => [ o(u, {
                        icon: "ep:plus",
                        class: "mr-4px"
                    }), m(" 添加 ") ]),
                    _: 1
                })), [ [ f, [ "teachmanager:teach-course-res:create" ] ] ]) : b("", !0), _("div", B, "共计 " + R(r(d).length), 1), o(ye, {
                    ref_key: "tableListRef",
                    ref: N,
                    data: r(d),
                    "header-row-class-name": "system-header",
                    onSelectionChange: _e,
                    "row-key": "id",
                    "show-header": !1,
                    height: r(y) ? "calc( 100% - 40px)" : "calc( 100% - 20px)"
                }, {
                    default: l(() => [ r(y) ? (s(), i(x, {
                        key: 0,
                        type: "selection",
                        width: "30"
                    })) : b("", !0), o(x, {
                        width: "30"
                    }, {
                        default: l(t => [ _("img", {
                            src: r(Ge)(t.row.resType),
                            alt: "",
                            style: {
                                "margin-right": "10px",
                                "margin-top": "5px"
                            }
                        }, null, 8, M) ]),
                        _: 1
                    }), o(x, {
                        label: "文件名"
                    }, {
                        default: l(t => [ _("div", z, [ o(pe, {
                            effect: "dark",
                            content: t.row.name,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: l(() => [ _("span", {
                                class: "file-name__span",
                                onClick: p => Y(t.row)
                            }, R(t.row.name), 9, U) ]),
                            _: 2
                        }, 1032, [ "content" ]), (s(!0), g(De, null, Re(t.row.tags, p => (s(), 
                        g("div", {
                            class: "resourceLabel",
                            key: p.id
                        }, R(p.tagName), 1))), 128)), t.row.resIsNeu ? (s(), g("div", F, H)) : b("", !0) ]) ]),
                        _: 1
                    }), r(y) ? (s(), i(x, {
                        key: 1,
                        width: "205"
                    }, {
                        default: l(t => [ h((s(), i(n, {
                            type: "primary",
                            text: "",
                            onClick: p => Z([ t.row ])
                        }, {
                            default: l(() => [ m("资源设置") ]),
                            _: 2
                        }, 1032, [ "onClick" ])), [ [ f, [ "teachmanager:teach-course-res:update" ] ] ]), o(fe, {
                            style: {
                                "margin-right": "15px"
                            },
                            onCommand: p => me(t.row, p),
                            onVisibleChange: p => {
                                return te = t.row, re = p, void (te.moreIcon = re);
                                var te, re;
                            }
                        }, {
                            dropdown: l(() => [ h((s(), i(he, null, {
                                default: l(() => [ h((s(), i(L, {
                                    command: "editor"
                                }, {
                                    default: l(() => [ m("编辑") ]),
                                    _: 1
                                })), [ [ f, [ "teachmanager:teach-course-res:update" ] ] ]), t.row.resType != 6 ? (s(), 
                                i(L, {
                                    key: 0,
                                    command: "download"
                                }, {
                                    default: l(() => [ m("下载") ]),
                                    _: 1
                                })) : b("", !0), h((s(), i(L, {
                                    command: "delete",
                                    style: {
                                        color: "#E14635"
                                    }
                                }, {
                                    default: l(() => [ m("删除") ]),
                                    _: 1
                                })), [ [ f, [ "teachmanager:teach-course-res:delete" ] ] ]) ]),
                                _: 2
                            }, 1024)), [ [ f, [ "teachmanager:teach-course-res:update", "teachmanager:teach-course-res:delete", "teachmanager:teach-course-res:update" ] ] ]) ]),
                            default: l(() => [ o(n, {
                                type: "primary",
                                text: "",
                                style: {
                                    "margin-left": "3px"
                                }
                            }, {
                                default: l(() => [ m("更多"), o(u, {
                                    icon: t.row.moreIcon ? "ep:arrow-up" : "ep:arrow-down"
                                }, null, 8, [ "icon" ]) ]),
                                _: 2
                            }, 1024) ]),
                            _: 2
                        }, 1032, [ "onCommand", "onVisibleChange" ]) ]),
                        _: 1
                    })) : (s(), i(x, {
                        key: 2,
                        width: "100"
                    }, {
                        default: l(t => [ o(n, {
                            type: "primary",
                            text: "",
                            onClick: p => Y(t.row)
                        }, {
                            default: l(() => [ m("预览") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ]),
                        _: 1
                    })) ]),
                    _: 1
                }, 8, [ "data", "height" ]), h(_("div", J, [ o(ge, {
                    style: {
                        "margin-left": "40px"
                    },
                    indeterminate: r(W),
                    modelValue: r(T),
                    "onUpdate:modelValue": a[0] || (a[0] = t => Ie(T) ? T.value = t : null),
                    onChange: ue
                }, {
                    default: l(() => [ m("全选，当前已选中" + R(r(k).length) + "个资料", 1) ]),
                    _: 1
                }, 8, [ "indeterminate", "modelValue" ]), _("div", null, [ h((s(), 
                i(n, {
                    type: "primary",
                    onClick: a[1] || (a[1] = t => Z(r(k)))
                }, {
                    default: l(() => [ K, m("资源设置") ]),
                    _: 1
                })), [ [ f, [ "teachmanager:teach-course-res:update" ] ] ]), h((s(), 
                i(n, {
                    type: "danger",
                    onClick: a[2] || (a[2] = t => ee(r(k)))
                }, {
                    default: l(() => [ q, m("删除") ]),
                    _: 1
                })), [ [ f, [ "teachmanager:teach-course-res:delete" ] ] ]) ]), o(n, {
                    style: {
                        "margin-right": "40px"
                    },
                    onClick: ae
                }, {
                    default: l(() => [ m("取消") ]),
                    _: 1
                }) ], 512), [ [ Ee, !!r(k).length ] ]) ])) ]), o($e, {
                    ref_key: "addResourceDialogRef",
                    ref: G,
                    onTableRefresh: a[3] || (a[3] = t => w(r(D)))
                }, null, 512), o(ve, {
                    ref_key: "ResourcePreviewRef",
                    ref: $
                }, null, 512), o(Qe, {
                    ref_key: "editorResourceNameDialogRef",
                    ref: O,
                    onEditorNameDone: ie
                }, null, 512), o(Xe, {
                    ref_key: "resourceSettingDialogRef",
                    ref: I,
                    onDone: a[4] || (a[4] = t => w(r(D))),
                    scene: r(S),
                    isfromTeaching: 0
                }, null, 8, [ "scene" ]) ], 2);
            };
        }
    }, [ [ "__scopeId", "data-v-c7195e5e" ] ]);
});

export {
    va as __tla,
    se as default
};