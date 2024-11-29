import {
    _ as de,
    __tla as pe
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    u as fe,
    T as he,
    r as n,
    e as ye,
    f as ge,
    o as f,
    c as g,
    t as c,
    a as o,
    k as e,
    l,
    v as i,
    B as E,
    F as ve,
    y as be,
    C as ke,
    D as we,
    A as xe,
    G as Ce,
    m as Ee,
    E as Ie,
    bo as Te,
    _ as De,
    J as Re,
    ad as Ne,
    K as Le,
    ae as Se,
    a8 as Be,
    R as Ve,
    S as je,
    __tla as Ae
} from "./index-6c08ea4c.js";

import {
    _ as Pe,
    __tla as ze
} from "./index-1024512a.js";

import {
    _ as He
} from "./publishIcon-14d4df28.js";

import {
    _ as Me
} from "./manageIcon-aa116bb2.js";

import {
    _ as Ue
} from "./deleteIcon-ec5a6b2b.js";

import {
    g as Fe
} from "./file.data-7b6aa8ed.js";

import Ge, {
    __tla as Je
} from "./addResourceDialog-cafaf9ca.js";

import Ke, {
    __tla as Ze
} from "./editorResourceNameDialog-75607cd1.js";

import $e, {
    __tla as qe
} from "./resourceSetting-8d4d06ac.js";

import {
    h as Oe,
    __tla as Qe
} from "./file-e038b35d.js";

import {
    Z as We,
    N as Xe,
    __tla as Ye
} from "./index-9567cbf6.js";

import {
    _ as ea
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as aa,
    b as ta,
    E as la,
    __tla as ra
} from "./index-5adb716b.js";

import {
    __tla as oa
} from "./index.es-14d10e28.js";

import {
    __tla as sa
} from "./project-file-a2b4fd07.js";

import "./tree-05ea8e09.js";

import {
    __tla as na
} from "./DeptTag-1be092ce.js";

import {
    __tla as ia
} from "./index-ef4d146e.js";

import "./teachingResourceIcon7-1c1a8557.js";

import {
    __tla as _a
} from "./index-c4ca0ced.js";

import {
    __tla as ca
} from "./index-993301ca.js";

import {
    __tla as ma
} from "./index-8b41572c.js";

import "./step1Banner-550d8194.js";

import "./file_HTML-65451e1b.js";

import "./file.data-794ea5d0.js";

import "./file_题-23882218.js";

import {
    __tla as ua
} from "./formatTime-de6f1520.js";

import {
    __tla as da
} from "./library-c2ecc5ca.js";

import "./step2Banner-4d214de6.js";

let X, pa = Promise.all([ (() => {
    try {
        return pe;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return Ze;
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
        return ra;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return na;
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
        return ca;
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
        return da;
    } catch {}
})() ]).then(async () => {
    let h, R, N, L, S, B, V, j, A, P, z, H, M, U;
    h = v => (Ve("data-v-b6906855"), v = v(), je(), v), R = {
        id: "jxwd",
        style: {
            padding: "20px 0 0"
        }
    }, N = {
        style: {
            padding: "0 30px"
        },
        class: "height_box"
    }, L = {
        key: 0,
        class: "neu-no-data",
        style: {
            height: "500px"
        }
    }, S = h(() => c("p", {
        class: ""
    }, "暂无数据", -1)), B = {
        key: 1,
        class: "contentArea"
    }, V = {
        style: {
            clear: "both",
            color: "#333",
            "font-size": "12px",
            "line-height": "30px"
        }
    }, j = [ "src" ], A = {
        class: "file-name"
    }, P = [ "onClick" ], z = {
        class: "bottomClass"
    }, H = h(() => c("img", {
        src: He,
        alt: ""
    }, null, -1)), M = h(() => c("img", {
        src: Me,
        alt: ""
    }, null, -1)), U = h(() => c("img", {
        src: Ue,
        alt: ""
    }, null, -1)), X = ea({
        __name: "jxwd",
        setup(v) {
            fe();
            const Y = he(), F = n(), G = n(), J = n(), I = n(), T = n(), m = n([]), K = n(!1), ee = n([ {
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
            } ]), ae = ye(() => [ {
                label: "资料类型",
                key: "resType",
                type: "list",
                options: ee.value
            } ]), D = n(""), b = n(!1), Z = n(!1), p = n([]), $ = () => {
                F.value.openStep1(0);
            }, k = n({}), te = a => {
                k.value = a, y(a);
            }, y = (a, t) => {
                K.value = t, W(), We({
                    teachCourseId: Y.params.teachCourseId,
                    name: a ? a.resName : null,
                    resType: a ? a.resType : null
                }).then(u => {
                    m.value = u || [], m.value.forEach(s => {
                        s.resName = s.name, s.eid = s.dataId;
                    });
                });
            }, q = a => {
                D.value = "set", I.value.open(a, a.length == 1);
            }, le = a => {
                m.value.forEach(t => {
                    t.id == a.oldData.id && (t.name = a.name + (a.oldData.resExt ? a.oldData.resExt : ""));
                });
            }, O = a => {
                Ie.confirm(`\u786E\u5B9A\u8981\u5220\u9664${a.length == 1 ? "该" : "这些"}\u8D44\u6E90\u5417\uFF1F`, "提示", {
                    confirmButtonText: "确认",
                    cancelButtonText: "取消"
                }).then(() => {
                    var t = [];
                    a.forEach(u => {
                        t.push(u.id);
                    }), Xe(t).then(u => {
                        y(k.value), Te({
                            type: "success",
                            message: "删除成功"
                        });
                    });
                }).catch(() => {});
            }, Q = a => {
                D.value = "publish", I.value.open(a, !1);
            }, W = () => {
                T.value.clearSelection();
            }, re = a => {
                T.value.toggleAllSelection();
            }, oe = a => {
                p.value = [ ...a ];
                let t = a.length;
                b.value = t === m.value.length, Z.value = t > 0 && t < m.value.length;
            };
            return ge(() => {
                y(null, !0);
            }), (a, t) => {
                const u = De, s = Re, se = Pe, w = Ne, ne = Le, x = aa, ie = ta, _e = la, ce = Se, me = Be, ue = de;
                return f(), g("div", R, [ c("div", N, [ !o(m).length && o(K) ? (f(), 
                g("div", L, [ e(u, {
                    icon: "svg-icon:bg-no-data-stu",
                    size: 200,
                    class: "",
                    style: {
                        height: "160px"
                    }
                }), S, e(s, {
                    type: "primary",
                    onClick: $
                }, {
                    default: l(() => [ i("添加教学资料") ]),
                    _: 1
                }) ])) : (f(), g("div", B, [ e(se, {
                    borderBox: !0,
                    searchList: o(ae),
                    keywordsInfo: {
                        label: "资料名称/标签",
                        key: "resName"
                    },
                    onHandleSearch: te,
                    class: "left"
                }, null, 8, [ "searchList" ]), e(s, {
                    type: "primary",
                    class: "btn-group",
                    onClick: $
                }, {
                    default: l(() => [ e(u, {
                        icon: "ep:plus",
                        class: "mr-4px"
                    }), i(" 添加教学资料 ") ]),
                    _: 1
                }), c("div", V, "共计 " + E(o(m).length), 1), e(ce, {
                    ref_key: "tableListRef",
                    ref: T,
                    data: o(m),
                    "header-row-class-name": "system-header",
                    onSelectionChange: oe,
                    "row-key": "id",
                    "show-header": !1,
                    height: "calc( 100% - 40px)"
                }, {
                    default: l(() => [ e(w, {
                        type: "selection",
                        width: "30"
                    }), e(w, {
                        width: "30"
                    }, {
                        default: l(r => [ c("img", {
                            src: o(Fe)(r.row.resType),
                            alt: "",
                            style: {
                                "margin-right": "10px",
                                "margin-top": "5px"
                            }
                        }, null, 8, j) ]),
                        _: 1
                    }), e(w, {
                        label: "文件名"
                    }, {
                        default: l(r => [ c("div", A, [ e(ne, {
                            effect: "dark",
                            content: r.row.name,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: l(() => [ c("span", {
                                class: "file-name__span",
                                onClick: d => {
                                    var _;
                                    (_ = r.row).resType == 6 ? window.open(_.resLink, "_blank") : G.value.operation(_);
                                }
                            }, E(r.row.name), 9, P) ]),
                            _: 2
                        }, 1032, [ "content" ]), (f(!0), g(ve, null, be(r.row.tagList, d => (f(), 
                        g("div", {
                            class: "resourceLabel",
                            key: d.tagId
                        }, E(d.tagName), 1))), 128)) ]) ]),
                        _: 1
                    }), e(w, {
                        width: "205"
                    }, {
                        default: l(r => [ e(s, {
                            type: "primary",
                            text: "",
                            onClick: d => q([ r.row ])
                        }, {
                            default: l(() => [ i("资源设置") ]),
                            _: 2
                        }, 1032, [ "onClick" ]), e(_e, {
                            style: {
                                "margin-right": "15px"
                            },
                            onCommand: d => ((_, C) => {
                                switch (C) {
                                  case "editor":
                                    J.value.open(_);
                                    break;

                                  case "download":
                                    Oe(_.dataId, _.name);
                                    break;

                                  case "publish":
                                    Q([ _ ]);
                                    break;

                                  case "delete":
                                    O([ _ ]);
                                }
                            })(r.row, d),
                            onVisibleChange: d => {
                                return _ = r.row, C = d, void (_.moreIcon = C);
                                var _, C;
                            }
                        }, {
                            dropdown: l(() => [ e(ie, null, {
                                default: l(() => [ e(x, {
                                    command: "editor"
                                }, {
                                    default: l(() => [ i("编辑") ]),
                                    _: 1
                                }), r.row.resType != 6 ? (f(), ke(x, {
                                    key: 0,
                                    command: "download"
                                }, {
                                    default: l(() => [ i("下载") ]),
                                    _: 1
                                })) : we("", !0), e(x, {
                                    command: "publish"
                                }, {
                                    default: l(() => [ i("发布给学生") ]),
                                    _: 1
                                }), e(x, {
                                    command: "delete",
                                    style: {
                                        color: "#E14635"
                                    }
                                }, {
                                    default: l(() => [ i("删除") ]),
                                    _: 1
                                }) ]),
                                _: 2
                            }, 1024) ]),
                            default: l(() => [ e(s, {
                                type: "primary",
                                text: "",
                                style: {
                                    "margin-left": "3px"
                                }
                            }, {
                                default: l(() => [ i("更多"), e(u, {
                                    icon: r.row.moreIcon ? "ep:arrow-up" : "ep:arrow-down"
                                }, null, 8, [ "icon" ]) ]),
                                _: 2
                            }, 1024) ]),
                            _: 2
                        }, 1032, [ "onCommand", "onVisibleChange" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "data" ]), xe(c("div", z, [ e(me, {
                    style: {
                        "margin-left": "40px"
                    },
                    indeterminate: o(Z),
                    modelValue: o(b),
                    "onUpdate:modelValue": t[0] || (t[0] = r => Ee(b) ? b.value = r : null),
                    onChange: re
                }, {
                    default: l(() => [ i("全选，当前已选中" + E(o(p).length) + "个资料", 1) ]),
                    _: 1
                }, 8, [ "indeterminate", "modelValue" ]), c("div", null, [ e(s, {
                    type: "primary",
                    onClick: t[1] || (t[1] = r => Q(o(p)))
                }, {
                    default: l(() => [ H, i("发布给学生") ]),
                    _: 1
                }), e(s, {
                    type: "primary",
                    onClick: t[2] || (t[2] = r => q(o(p)))
                }, {
                    default: l(() => [ M, i("资源设置") ]),
                    _: 1
                }), e(s, {
                    type: "danger",
                    onClick: t[3] || (t[3] = r => O(o(p)))
                }, {
                    default: l(() => [ U, i("删除") ]),
                    _: 1
                }) ]), e(s, {
                    style: {
                        "margin-right": "40px"
                    },
                    onClick: W
                }, {
                    default: l(() => [ i("取消") ]),
                    _: 1
                }) ], 512), [ [ Ce, !!o(p).length ] ]) ])) ]), e(Ge, {
                    ref_key: "addResourceDialogRef",
                    ref: F,
                    onTableRefresh: t[4] || (t[4] = r => y(o(k)))
                }, null, 512), e(ue, {
                    ref_key: "ResourcePreviewRef",
                    ref: G
                }, null, 512), e(Ke, {
                    ref_key: "editorResourceNameDialogRef",
                    ref: J,
                    onEditorNameDone: le
                }, null, 512), e($e, {
                    ref_key: "resourceSettingDialogRef",
                    ref: I,
                    onDone: t[5] || (t[5] = r => y(o(k))),
                    scene: o(D),
                    isfromTeaching: 0
                }, null, 8, [ "scene" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-b6906855" ] ]);
});

export {
    pa as __tla,
    X as default
};