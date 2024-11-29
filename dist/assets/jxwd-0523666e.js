import {
    _ as ve,
    __tla as be
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    u as ke,
    T as we,
    r as c,
    e as xe,
    f as Ce,
    j as Ee,
    o as s,
    c as b,
    t as i,
    a as o,
    k as l,
    A as _,
    C as d,
    l as t,
    v as u,
    B as D,
    F as Ie,
    y as Te,
    D as le,
    G as De,
    m as Ne,
    E as Re,
    bo as Le,
    _ as Se,
    J as Ve,
    ad as Be,
    K as je,
    ae as Ae,
    a8 as Pe,
    R as Ue,
    S as ze,
    __tla as Je
} from "./index-6c08ea4c.js";

import {
    _ as Me,
    __tla as Fe
} from "./index-1024512a.js";

import {
    _ as Ge
} from "./publishIcon-14d4df28.js";

import {
    _ as He
} from "./manageIcon-aa116bb2.js";

import {
    _ as Ke
} from "./deleteIcon-ec5a6b2b.js";

import {
    g as We
} from "./file.data-a1554fbb.js";

import Ze, {
    __tla as $e
} from "./addResourceDialog-18001587.js";

import qe, {
    __tla as Oe
} from "./editorResourceNameDialog-58d4b282.js";

import Qe, {
    __tla as Xe
} from "./resourceSetting-939e80bf.js";

import {
    h as Ye,
    __tla as ea
} from "./file-e038b35d.js";

import {
    Z as aa,
    N as ta,
    __tla as ra
} from "./index-9567cbf6.js";

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
    __tla as ua
} from "./index.es-14d10e28.js";

import {
    __tla as ma
} from "./project-file-a2b4fd07.js";

import "./tree-05ea8e09.js";

import {
    __tla as ia
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

import "./step2Banner-4d214de6.js";

let se, ga = Promise.all([ (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})(), (() => {
    try {
        return Xe;
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
        return ua;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return ia;
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
})() ]).then(async () => {
    let g, S, V, B, j, A, P, U, z, J, M, F, G, H, K, W;
    g = w => (Ue("data-v-cb723014"), w = w(), ze(), w), S = {
        id: "jxwd",
        style: {
            padding: "20px 0 0"
        }
    }, V = {
        style: {
            padding: "0 30px"
        },
        class: "height_box"
    }, B = {
        key: 0,
        class: "neu-no-data",
        style: {
            height: "500px"
        }
    }, j = g(() => i("p", {
        style: {
            "margin-bottom": "10px"
        }
    }, "暂无数据", -1)), A = {
        key: 1,
        class: "contentArea"
    }, P = {
        style: {
            clear: "both",
            color: "#333",
            "font-size": "12px",
            "line-height": "30px"
        }
    }, U = [ "src" ], z = {
        class: "file-name"
    }, J = [ "onClick" ], M = {
        key: 0,
        class: "file-tag",
        style: {
            "margin-left": "7px"
        }
    }, F = [ g(() => i("span", null, "NEU", -1)) ], G = {
        class: "bottomClass"
    }, H = g(() => i("img", {
        src: Ge,
        alt: ""
    }, null, -1)), K = g(() => i("img", {
        src: He,
        alt: ""
    }, null, -1)), W = g(() => i("img", {
        src: Ke,
        alt: ""
    }, null, -1)), se = la({
        __name: "jxwd",
        setup(w) {
            ke();
            const Z = we(), $ = c(), q = c(), O = c(), N = c(), R = c(), h = c([]), Q = c(!1), oe = c([ {
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
            } ]), ne = xe(() => [ {
                label: "资料类型",
                key: "resType",
                type: "list",
                options: oe.value
            } ]), L = c(""), x = c(!1), X = c(!1), v = c([]), Y = () => {
                $.value.openStep1(0);
            }, C = c({}), ce = e => {
                C.value = e, k(e);
            }, k = (e, a) => {
                Q.value = a, h.value.length && re(), aa({
                    teachCourseId: Z.params.teachCourseId,
                    name: e ? e.resName : null,
                    resType: e ? e.resType : null
                }).then(f => {
                    h.value = f || [], h.value.forEach(n => {
                        n.resName = n.name, n.eid = n.dataId;
                    });
                });
            }, ee = e => {
                L.value = "set", N.value.open(e, e.length == 1);
            }, ue = e => {
                h.value.forEach(a => {
                    a.id == e.oldData.id && (a.name = e.name + (e.oldData.resExt ? e.oldData.resExt : ""));
                });
            }, ae = e => {
                Re.confirm(`\u786E\u5B9A\u8981\u5220\u9664${e.length == 1 ? "该" : "这些"}\u8D44\u6E90\u5417\uFF1F`, "提示", {
                    confirmButtonText: "确认",
                    cancelButtonText: "取消"
                }).then(() => {
                    var a = [];
                    e.forEach(f => {
                        a.push(f.id);
                    }), ta(a, Z.params.classId).then(f => {
                        k(C.value), Le({
                            type: "success",
                            message: "删除成功"
                        });
                    });
                }).catch(() => {});
            }, te = e => {
                L.value = "publish", N.value.open(e, !1);
            }, re = () => {
                R.value.clearSelection();
            }, me = e => {
                R.value.toggleAllSelection();
            }, ie = e => {
                v.value = [ ...e ];
                let a = e.length;
                x.value = a === h.value.length, X.value = a > 0 && a < h.value.length;
            };
            return Ce(() => {
                k(null, !0);
            }), (e, a) => {
                const f = Se, n = Ve, _e = Me, E = Be, de = je, I = sa, pe = oa, he = na, fe = Ae, ye = Pe, ge = ve, p = Ee("hasPermi");
                return s(), b("div", S, [ i("div", V, [ !o(h).length && o(Q) ? (s(), 
                b("div", B, [ l(f, {
                    icon: "svg-icon:bg-no-data",
                    size: 200,
                    class: "",
                    style: {
                        height: "160px"
                    }
                }), j, _((s(), d(n, {
                    type: "primary",
                    onClick: Y
                }, {
                    default: t(() => [ l(f, {
                        icon: "ep:plus",
                        class: "mr-4px"
                    }), u("添加") ]),
                    _: 1
                })), [ [ p, [ "teachmanager:teach-course-res:create" ] ] ]) ])) : (s(), 
                b("div", A, [ l(_e, {
                    borderBox: !0,
                    searchList: o(ne),
                    keywordsInfo: {
                        label: "资料名称/标签",
                        key: "resName"
                    },
                    onHandleSearch: ce,
                    class: "left"
                }, null, 8, [ "searchList" ]), _((s(), d(n, {
                    type: "primary",
                    class: "btn-group",
                    onClick: Y
                }, {
                    default: t(() => [ l(f, {
                        icon: "ep:plus",
                        class: "mr-4px"
                    }), u(" 添加 ") ]),
                    _: 1
                })), [ [ p, [ "teachmanager:teach-course-res:create" ] ] ]), i("div", P, "共计 " + D(o(h).length), 1), l(fe, {
                    ref_key: "tableListRef",
                    ref: R,
                    data: o(h),
                    "header-row-class-name": "system-header",
                    onSelectionChange: ie,
                    "row-key": "id",
                    "show-header": !1,
                    height: "calc( 100% - 40px)"
                }, {
                    default: t(() => [ l(E, {
                        type: "selection",
                        width: "30"
                    }), l(E, {
                        width: "30"
                    }, {
                        default: t(r => [ i("img", {
                            src: o(We)(r.row.resType),
                            alt: "",
                            style: {
                                "margin-right": "10px",
                                "margin-top": "5px"
                            }
                        }, null, 8, U) ]),
                        _: 1
                    }), l(E, {
                        label: "文件名"
                    }, {
                        default: t(r => [ i("div", z, [ l(de, {
                            effect: "dark",
                            content: r.row.name,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: t(() => [ i("span", {
                                class: "file-name__span",
                                onClick: y => {
                                    var m;
                                    (m = r.row).resType == 6 ? window.open(m.resLink, "_blank") : q.value.operation(m);
                                }
                            }, D(r.row.name), 9, J) ]),
                            _: 2
                        }, 1032, [ "content" ]), (s(!0), b(Ie, null, Te(r.row.tagList, y => (s(), 
                        b("div", {
                            class: "resourceLabel",
                            key: y.tagId
                        }, D(y.tagName), 1))), 128)), r.row.resIsNeu ? (s(), b("div", M, F)) : le("", !0) ]) ]),
                        _: 1
                    }), l(E, {
                        width: "205"
                    }, {
                        default: t(r => [ _((s(), d(n, {
                            type: "primary",
                            text: "",
                            onClick: y => ee([ r.row ])
                        }, {
                            default: t(() => [ u("资源设置") ]),
                            _: 2
                        }, 1032, [ "onClick" ])), [ [ p, [ "teachmanager:teach-course-res:update" ] ] ]), l(he, {
                            style: {
                                "margin-right": "15px"
                            },
                            onCommand: y => ((m, T) => {
                                switch (T) {
                                  case "editor":
                                    O.value.open(m);
                                    break;

                                  case "download":
                                    Ye(m.dataId, m.name);
                                    break;

                                  case "publish":
                                    te([ m ]);
                                    break;

                                  case "delete":
                                    ae([ m ]);
                                }
                            })(r.row, y),
                            onVisibleChange: y => {
                                return m = r.row, T = y, void (m.moreIcon = T);
                                var m, T;
                            }
                        }, {
                            dropdown: t(() => [ _((s(), d(pe, null, {
                                default: t(() => [ _((s(), d(I, {
                                    command: "editor"
                                }, {
                                    default: t(() => [ u("编辑") ]),
                                    _: 1
                                })), [ [ p, [ "teachmanager:teach-course-res:update" ] ] ]), r.row.resType != 6 ? (s(), 
                                d(I, {
                                    key: 0,
                                    command: "download"
                                }, {
                                    default: t(() => [ u("下载") ]),
                                    _: 1
                                })) : le("", !0), _((s(), d(I, {
                                    command: "publish"
                                }, {
                                    default: t(() => [ u("发布给学生") ]),
                                    _: 1
                                })), [ [ p, [ "teachmanager:teach-course-res:update" ] ] ]), _((s(), 
                                d(I, {
                                    command: "delete",
                                    style: {
                                        color: "#E14635"
                                    }
                                }, {
                                    default: t(() => [ u("删除") ]),
                                    _: 1
                                })), [ [ p, [ "teachmanager:teach-course-res:delete" ] ] ]) ]),
                                _: 2
                            }, 1024)), [ [ p, [ "teachmanager:teach-course-res:update", "teachmanager:teach-course-res:delete", "teachmanager:teach-course-res:update" ] ] ]) ]),
                            default: t(() => [ l(n, {
                                type: "primary",
                                text: "",
                                style: {
                                    "margin-left": "3px"
                                }
                            }, {
                                default: t(() => [ u("更多"), l(f, {
                                    icon: r.row.moreIcon ? "ep:arrow-up" : "ep:arrow-down"
                                }, null, 8, [ "icon" ]) ]),
                                _: 2
                            }, 1024) ]),
                            _: 2
                        }, 1032, [ "onCommand", "onVisibleChange" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "data" ]), _(i("div", G, [ l(ye, {
                    style: {
                        "margin-left": "40px"
                    },
                    indeterminate: o(X),
                    modelValue: o(x),
                    "onUpdate:modelValue": a[0] || (a[0] = r => Ne(x) ? x.value = r : null),
                    onChange: me
                }, {
                    default: t(() => [ u("全选，当前已选中" + D(o(v).length) + "个资料", 1) ]),
                    _: 1
                }, 8, [ "indeterminate", "modelValue" ]), i("div", null, [ _((s(), 
                d(n, {
                    type: "primary",
                    onClick: a[1] || (a[1] = r => te(o(v)))
                }, {
                    default: t(() => [ H, u("发布给学生") ]),
                    _: 1
                })), [ [ p, [ "teachmanager:teach-course-res:update" ] ] ]), _((s(), 
                d(n, {
                    type: "primary",
                    onClick: a[2] || (a[2] = r => ee(o(v)))
                }, {
                    default: t(() => [ K, u("资源设置") ]),
                    _: 1
                })), [ [ p, [ "teachmanager:teach-course-res:update" ] ] ]), _((s(), 
                d(n, {
                    type: "danger",
                    onClick: a[3] || (a[3] = r => ae(o(v)))
                }, {
                    default: t(() => [ W, u("删除") ]),
                    _: 1
                })), [ [ p, [ "teachmanager:teach-course-res:delete" ] ] ]) ]), l(n, {
                    style: {
                        "margin-right": "40px"
                    },
                    onClick: re
                }, {
                    default: t(() => [ u("取消") ]),
                    _: 1
                }) ], 512), [ [ De, !!o(v).length ] ]) ])) ]), l(Ze, {
                    ref_key: "addResourceDialogRef",
                    ref: $,
                    onTableRefresh: a[4] || (a[4] = r => k(o(C)))
                }, null, 512), l(ge, {
                    ref_key: "ResourcePreviewRef",
                    ref: q
                }, null, 512), l(qe, {
                    ref_key: "editorResourceNameDialogRef",
                    ref: O,
                    onEditorNameDone: ue
                }, null, 512), l(Qe, {
                    ref_key: "resourceSettingDialogRef",
                    ref: N,
                    onDone: a[5] || (a[5] = r => k(o(C))),
                    scene: o(L),
                    isfromTeaching: 0
                }, null, 8, [ "scene" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-cb723014" ] ]);
});

export {
    ga as __tla,
    se as default
};