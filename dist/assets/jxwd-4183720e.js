import {
    _ as ge,
    __tla as ve
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    u as ke,
    T as we,
    r as c,
    e as te,
    f as be,
    j as xe,
    o,
    c as w,
    t as _,
    a as t,
    k as s,
    A as p,
    C as i,
    l as r,
    v as m,
    D as T,
    B as E,
    F as Ce,
    y as De,
    G as Re,
    m as Te,
    z as Ee,
    E as Se,
    bo as Ie,
    _ as Ne,
    J as Be,
    ad as Le,
    K as je,
    ae as Ve,
    a8 as Ae,
    R as Me,
    S as Pe,
    __tla as ze
} from "./index-6c08ea4c.js";

import {
    _ as Fe,
    __tla as He
} from "./index-1024512a.js";

import {
    _ as Je
} from "./manageIcon-aa116bb2.js";

import {
    _ as $e
} from "./deleteIcon-ec5a6b2b.js";

import {
    g as Ge
} from "./file.data-64a18eaa.js";

import Ke, {
    __tla as Ue
} from "./addResourceDialog-f58c8d8c.js";

import We, {
    __tla as qe
} from "./editorResourceNameDialog-ea0f775b.js";

import Oe, {
    __tla as Qe
} from "./resourceSetting-0225cc93.js";

import {
    h as Xe,
    __tla as Ye
} from "./file-e038b35d.js";

import {
    A as Ze,
    j as ea,
    __tla as aa
} from "./pkgManage-14933852.js";

import {
    _ as ta
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as ra,
    b as la,
    E as sa,
    __tla as oa
} from "./index-5adb716b.js";

import {
    __tla as na
} from "./index.es-14d10e28.js";

import {
    __tla as ca
} from "./project-file-a2b4fd07.js";

import "./tree-05ea8e09.js";

import {
    __tla as ia
} from "./DeptTag-1be092ce.js";

import {
    __tla as ma
} from "./index-ef4d146e.js";

import "./teachingResourceIcon7-1c1a8557.js";

import {
    __tla as ua
} from "./index-c4ca0ced.js";

import {
    __tla as _a
} from "./index-993301ca.js";

import {
    __tla as da
} from "./index-8b41572c.js";

import "./step1Banner-550d8194.js";

import "./file_HTML-65451e1b.js";

import "./file.data-794ea5d0.js";

import "./file_题-23882218.js";

import {
    __tla as pa
} from "./formatTime-de6f1520.js";

import {
    __tla as ha
} from "./index-9567cbf6.js";

import "./step2Banner-4d214de6.js";

let re, fa = Promise.all([ (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return Ue;
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
        return Ye;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return na;
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
})() ]).then(async () => {
    let b, j, V, A, M, P, z, F, H, J, $, G;
    b = x => (Me("data-v-a210fcda"), x = x(), Pe(), x), j = {
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
    }, A = b(() => _("p", {
        style: {
            "margin-bottom": "10px"
        }
    }, "暂无数据", -1)), M = {
        key: 1,
        class: "contentArea"
    }, P = {
        style: {
            clear: "both",
            color: "#333",
            "font-size": "12px",
            "line-height": "30px"
        }
    }, z = [ "src" ], F = {
        class: "file-name"
    }, H = [ "onClick" ], J = {
        class: "bottomClass"
    }, $ = b(() => _("img", {
        src: Je,
        alt: ""
    }, null, -1)), G = b(() => _("img", {
        src: $e,
        alt: ""
    }, null, -1)), re = ta({
        __name: "jxwd",
        setup(x) {
            ke();
            const S = we(), K = c(), U = c(), W = c(), I = c(), N = c(), d = c([]), q = c(!1), y = te(() => S.name.includes("Manage")), le = c([ {
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
            } ]), se = te(() => [ {
                label: "资料类型",
                key: "resType",
                type: "list",
                options: le.value
            } ]), B = c(""), C = c(!1), O = c(!1), g = c([]), Q = () => {
                K.value.openStep1(0);
            }, D = c({}), oe = e => {
                D.value = e, v(e);
            }, v = (e, a) => {
                q.value = a, d.value.length && ee(), Ze({
                    type: 6,
                    name: e ? e.resName : null,
                    resType: e ? e.resType : null,
                    neuPkgId: S.params.id
                }).then(u => {
                    d.value = u, d.value.forEach(n => {
                        n.resName = n.name, n.eid = n.dataId;
                    });
                });
            }, X = e => {
                e.resType == 6 ? window.open(e.resLink, "_blank") : U.value.operation(e);
            }, Y = e => {
                B.value = "set", I.value.open(e, e.length == 1);
            }, ne = e => {
                d.value.forEach(a => {
                    a.id == e.oldData.id && (a.name = e.name + (e.oldData.resExt ? e.oldData.resExt : ""));
                });
            }, Z = e => {
                Se.confirm(`\u786E\u5B9A\u8981\u5220\u9664${e.length == 1 ? "该" : "这些"}\u8D44\u6E90\u5417\uFF1F`, "提示", {
                    confirmButtonText: "确认",
                    cancelButtonText: "取消"
                }).then(() => {
                    var a = [];
                    e.forEach(u => {
                        a.push(u.id);
                    }), ea({
                        id: S.params.id
                    }, a).then(u => {
                        v(D.value), Ie({
                            type: "success",
                            message: "删除成功"
                        });
                    });
                }).catch(() => {});
            }, ce = (e, a) => {
                switch (a) {
                  case "editor":
                    W.value.open(e);
                    break;

                  case "download":
                    Xe(e.dataId, e.name);
                    break;

                  case "publish":
                    (u => {
                        B.value = "publish", I.value.open(u, !1);
                    })([ e ]);
                    break;

                  case "delete":
                    Z([ e ]);
                }
            }, ee = () => {
                N.value.clearSelection();
            }, ie = e => {
                N.value.toggleAllSelection();
            }, me = e => {
                g.value = [ ...e ];
                let a = e.length;
                C.value = a === d.value.length, O.value = a > 0 && a < d.value.length;
            };
            return be(() => {
                v(null, !0);
            }), (e, a) => {
                const u = Ne, n = Be, ue = Fe, k = Le, _e = je, L = ra, de = la, pe = sa, he = Ve, fe = Ae, ye = ge, h = xe("hasPermi-none");
                return o(), w("div", {
                    id: "jxwd",
                    style: {
                        padding: "20px 0 0"
                    },
                    class: Ee("isManage" + t(y))
                }, [ _("div", j, [ !t(d).length && t(q) ? (o(), w("div", V, [ s(u, {
                    icon: "svg-icon:bg-no-data",
                    size: 200,
                    class: "",
                    style: {
                        height: "160px"
                    }
                }), A, t(y) ? p((o(), i(n, {
                    key: 0,
                    type: "primary",
                    onClick: Q
                }, {
                    default: r(() => [ s(u, {
                        icon: "ep:plus",
                        class: "mr-4px"
                    }), m("添加") ]),
                    _: 1
                })), [ [ h, [ "teachmanager:teach-course-res:create" ] ] ]) : T("", !0) ])) : (o(), 
                w("div", M, [ s(ue, {
                    borderBox: !0,
                    searchList: t(se),
                    keywordsInfo: {
                        label: "资料名称/标签",
                        key: "resName"
                    },
                    onHandleSearch: oe,
                    class: "left"
                }, null, 8, [ "searchList" ]), t(y) ? p((o(), i(n, {
                    key: 0,
                    type: "primary",
                    class: "btn-group",
                    onClick: Q
                }, {
                    default: r(() => [ s(u, {
                        icon: "ep:plus",
                        class: "mr-4px"
                    }), m(" 添加 ") ]),
                    _: 1
                })), [ [ h, [ "teachmanager:teach-course-res:create" ] ] ]) : T("", !0), _("div", P, "共计 " + E(t(d).length), 1), s(he, {
                    ref_key: "tableListRef",
                    ref: N,
                    data: t(d),
                    "header-row-class-name": "system-header",
                    onSelectionChange: me,
                    "row-key": "id",
                    "show-header": !1,
                    height: t(y) ? "calc( 100% - 40px)" : "calc( 100% - 20px)"
                }, {
                    default: r(() => [ t(y) ? (o(), i(k, {
                        key: 0,
                        type: "selection",
                        width: "30"
                    })) : T("", !0), s(k, {
                        width: "30"
                    }, {
                        default: r(l => [ _("img", {
                            src: t(Ge)(l.row.resType),
                            alt: "",
                            style: {
                                "margin-right": "10px",
                                "margin-top": "5px"
                            }
                        }, null, 8, z) ]),
                        _: 1
                    }), s(k, {
                        label: "文件名"
                    }, {
                        default: r(l => [ _("div", F, [ s(_e, {
                            effect: "dark",
                            content: l.row.name,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: r(() => [ _("span", {
                                class: "file-name__span",
                                onClick: f => X(l.row)
                            }, E(l.row.name), 9, H) ]),
                            _: 2
                        }, 1032, [ "content" ]), (o(!0), w(Ce, null, De(l.row.tagNameList, (f, R) => (o(), 
                        w("div", {
                            class: "resourceLabel",
                            key: R
                        }, E(f), 1))), 128)) ]) ]),
                        _: 1
                    }), t(y) ? (o(), i(k, {
                        key: 1,
                        width: "205"
                    }, {
                        default: r(l => [ p((o(), i(n, {
                            type: "primary",
                            text: "",
                            onClick: f => Y([ l.row ])
                        }, {
                            default: r(() => [ m("资源设置") ]),
                            _: 2
                        }, 1032, [ "onClick" ])), [ [ h, [ "teachmanager:teach-course-res:update" ] ] ]), s(pe, {
                            style: {
                                "margin-right": "15px"
                            },
                            onCommand: f => ce(l.row, f),
                            onVisibleChange: f => {
                                return R = l.row, ae = f, void (R.moreIcon = ae);
                                var R, ae;
                            }
                        }, {
                            dropdown: r(() => [ p((o(), i(de, null, {
                                default: r(() => [ p((o(), i(L, {
                                    command: "editor"
                                }, {
                                    default: r(() => [ m("编辑") ]),
                                    _: 1
                                })), [ [ h, [ "teachmanager:teach-course-res:update" ] ] ]), l.row.resType != 6 ? (o(), 
                                i(L, {
                                    key: 0,
                                    command: "download"
                                }, {
                                    default: r(() => [ m("下载") ]),
                                    _: 1
                                })) : T("", !0), p((o(), i(L, {
                                    command: "delete",
                                    style: {
                                        color: "#E14635"
                                    }
                                }, {
                                    default: r(() => [ m("删除") ]),
                                    _: 1
                                })), [ [ h, [ "teachmanager:teach-course-res:delete" ] ] ]) ]),
                                _: 2
                            }, 1024)), [ [ h, [ "teachmanager:teach-course-res:update", "teachmanager:teach-course-res:delete", "teachmanager:teach-course-res:update" ] ] ]) ]),
                            default: r(() => [ s(n, {
                                type: "primary",
                                text: "",
                                style: {
                                    "margin-left": "3px"
                                }
                            }, {
                                default: r(() => [ m("更多"), s(u, {
                                    icon: l.row.moreIcon ? "ep:arrow-up" : "ep:arrow-down"
                                }, null, 8, [ "icon" ]) ]),
                                _: 2
                            }, 1024) ]),
                            _: 2
                        }, 1032, [ "onCommand", "onVisibleChange" ]) ]),
                        _: 1
                    })) : (o(), i(k, {
                        key: 2,
                        width: "100"
                    }, {
                        default: r(l => [ s(n, {
                            type: "primary",
                            text: "",
                            onClick: f => X(l.row)
                        }, {
                            default: r(() => [ m("预览") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ]),
                        _: 1
                    })) ]),
                    _: 1
                }, 8, [ "data", "height" ]), p(_("div", J, [ s(fe, {
                    style: {
                        "margin-left": "40px"
                    },
                    indeterminate: t(O),
                    modelValue: t(C),
                    "onUpdate:modelValue": a[0] || (a[0] = l => Te(C) ? C.value = l : null),
                    onChange: ie
                }, {
                    default: r(() => [ m("全选，当前已选中" + E(t(g).length) + "个资料", 1) ]),
                    _: 1
                }, 8, [ "indeterminate", "modelValue" ]), _("div", null, [ p((o(), 
                i(n, {
                    type: "primary",
                    onClick: a[1] || (a[1] = l => Y(t(g)))
                }, {
                    default: r(() => [ $, m("资源设置") ]),
                    _: 1
                })), [ [ h, [ "teachmanager:teach-course-res:update" ] ] ]), p((o(), 
                i(n, {
                    type: "danger",
                    onClick: a[2] || (a[2] = l => Z(t(g)))
                }, {
                    default: r(() => [ G, m("删除") ]),
                    _: 1
                })), [ [ h, [ "teachmanager:teach-course-res:delete" ] ] ]) ]), s(n, {
                    style: {
                        "margin-right": "40px"
                    },
                    onClick: ee
                }, {
                    default: r(() => [ m("取消") ]),
                    _: 1
                }) ], 512), [ [ Re, !!t(g).length ] ]) ])) ]), s(Ke, {
                    ref_key: "addResourceDialogRef",
                    ref: K,
                    onTableRefresh: a[3] || (a[3] = l => v(t(D)))
                }, null, 512), s(ye, {
                    ref_key: "ResourcePreviewRef",
                    ref: U
                }, null, 512), s(We, {
                    ref_key: "editorResourceNameDialogRef",
                    ref: W,
                    onEditorNameDone: ne
                }, null, 512), s(Oe, {
                    ref_key: "resourceSettingDialogRef",
                    ref: I,
                    onDone: a[4] || (a[4] = l => v(t(D))),
                    scene: t(B),
                    isfromTeaching: 0
                }, null, 8, [ "scene" ]) ], 2);
            };
        }
    }, [ [ "__scopeId", "data-v-a210fcda" ] ]);
});

export {
    fa as __tla,
    re as default
};