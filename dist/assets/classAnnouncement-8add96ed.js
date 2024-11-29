import {
    aO as Ve,
    p as je,
    r as c,
    T as $e,
    e as Me,
    U as H,
    j as de,
    o as n,
    c as p,
    k as i,
    l as o,
    t as m,
    a as t,
    A as k,
    C as _,
    v as g,
    B as O,
    D as Qe,
    F as q,
    y as F,
    z as Be,
    dX as Je,
    c5 as Ke,
    m as Xe,
    _ as Ge,
    J as We,
    K as Ye,
    L as Ze,
    aQ as ea,
    __tla as aa
} from "./index-6c08ea4c.js";

import {
    E as ta,
    __tla as sa
} from "./el-drawer-fca4d971.js";

import {
    _ as na,
    __tla as la
} from "./index-c4ca0ced.js";

import {
    _ as ra,
    __tla as ca
} from "./index-c834085f.js";

import {
    _ as oa,
    __tla as ia
} from "./index-1024512a.js";

import {
    a as ua,
    g as da,
    b as pa,
    c as ma,
    d as ha,
    e as _a,
    f as ya,
    u as fa,
    p as va,
    r as ga,
    h as ba,
    __tla as Ia
} from "./addAnnouncement-2a82576a.js";

import wa, {
    __tla as Ca
} from "./publishAnnouncement-34b89b97.js";

import ka, {
    __tla as Pa
} from "./scanPublish-c042d284.js";

import {
    a as Na,
    __tla as Sa
} from "./index-9567cbf6.js";

import {
    t as pe,
    __tla as La
} from "./file-e038b35d.js";

import {
    _ as xa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as za,
    b as Oa,
    E as Ra,
    __tla as Aa
} from "./index-5adb716b.js";

import {
    __tla as Ea
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Da
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ha
} from "./index-ef4d146e.js";

import {
    __tla as Ta
} from "./index-a34a73bc.js";

import "./file_题-23882218.js";

import {
    __tla as qa
} from "./Editor-ef737d2a.js";

import {
    __tla as Fa
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Ua
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import "./file.data-794ea5d0.js";

let me, Va = Promise.all([ (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return la;
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
        return Ia;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Ea;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return Ha;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return qa;
    } catch {}
})(), (() => {
    try {
        return Fa;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})() ]).then(async () => {
    let U, V, j, $, M, Q, B, J, K, X, G, W, Y, Z, ee;
    U = {
        class: "drawer-body"
    }, V = {
        key: 0,
        class: "neu-has-data"
    }, j = {
        class: "top-box clearFix"
    }, $ = {
        class: "right btns-box header-btns pt-1"
    }, M = {
        class: "content"
    }, Q = {
        key: 0,
        class: "content-summary"
    }, B = {
        key: 1,
        class: "content-list"
    }, J = {
        class: "item1"
    }, K = {
        class: "title tooltip-content"
    }, X = [ "onClick" ], G = {
        class: "item2"
    }, W = [ "innerHTML" ], Y = {
        class: "right"
    }, Z = {
        class: "pointer mr-10px"
    }, ee = {
        class: "bottom-box"
    }, me = xa({
        __name: "classAnnouncement",
        setup(ja, {
            expose: he
        }) {
            Ve(e => ({
                "3c6c0573": e.progress
            }));
            const b = je(), P = c(!1), u = $e(), _e = Me(() => [ {
                label: "所属目录",
                key: "dirIds",
                type: "tree",
                options: R.value
            }, {
                label: "发布状态",
                key: "isPublish",
                type: "list",
                options: [ {
                    value: "0",
                    label: "未发布"
                }, {
                    value: "1",
                    label: "已发布"
                } ],
                width: "158px"
            } ]), R = c([]), I = H({
                searchReq: "",
                isPublish: "",
                dirIds: ""
            }), y = H({
                pageNo: 1,
                pageSize: 10
            }), ae = () => {
                y.pageNo = 1, y.pageSize = 10;
            }, te = c(0), N = c([]), ye = e => {
                I.searchReq = e.searchReq, I.isPublish = e.isPublish, I.dirIds = e.dirIds, 
                w();
            }, w = async () => {
                const e = await da({
                    pageNo: y.pageNo,
                    pageSize: y.pageSize,
                    teachCourseId: u.params.teachCourseId,
                    teachClassId: u.params.classId,
                    ...I
                });
                return N.value = e == null ? void 0 : e.list, te.value = (e == null ? void 0 : e.total) || 0, 
                e;
            }, se = [ {
                name: "未发布",
                code: 0,
                tag: "info"
            }, {
                name: "已发布",
                code: 1,
                tag: "primary"
            }, {
                name: "未发布",
                code: 2,
                tag: "info"
            } ], fe = ({
                row: e
            }) => {
                const a = {
                    0: [ "announcementSetting", "edit", "delete" ],
                    1: [ "announcementSetting", "revertPublish" ],
                    2: [ "announcementSetting", "revertPublish" ],
                    default: [ "announcementSetting", "edit", "delete", "revertPublish" ]
                }, r = a[e.originalIsPublish] || a.default;
                let h = [];
                return h = [ {
                    key: "announcementSetting",
                    name: "公告设置",
                    permi: "teachmanager:teach-course-notice:update"
                }, {
                    key: "edit",
                    name: "编辑",
                    permi: "teachmanager:teach-course-notice:update"
                }, {
                    key: "delete",
                    name: "删除",
                    permi: "teachmanager:teach-course-notice:delete"
                }, {
                    key: "revertPublish",
                    name: "撤销发布",
                    permi: "teachmanager:teach-course-notice:update"
                } ].filter(v => r.includes(v.key)), h;
            }, ne = c(!1), ve = e => {
                ne.value = e;
            }, ge = ({
                row: e,
                type: a
            }) => {
                const r = {
                    announcementSetting: () => {
                        S({
                            row: e,
                            type: a
                        });
                    },
                    edit: () => {
                        S({
                            row: e,
                            type: a
                        });
                    },
                    revertPublish: () => {
                        S({
                            row: e,
                            type: a
                        });
                    },
                    delete: () => {
                        b.confirm(`\u786E\u8BA4\u8981\u5220\u9664\u201C${e.title}\u201D\u5417\uFF1F`).then(async () => {
                            await be({
                                row: e
                            }), b.success("删除成功"), w(), E();
                        });
                    },
                    material: () => {
                        addResourceDialogRef.value.handleOpen();
                    },
                    default: () => {}
                };
                (r[a] || r.default)();
            }, be = async ({
                row: e
            }) => {
                await ya({
                    id: e.teachCourseNoticeId,
                    teachCourseId: u.params.teachCourseId
                });
            }, le = c(null), l = c(null), T = async ({
                type: e,
                row: a,
                title: r
            }) => {
                const h = {
                    edit: async () => {
                        l.value = await f({
                            id: a.teachCourseNoticeId
                        });
                    },
                    default: () => {}
                };
                await (h[e] || h.default)(), le.value.handleOpen({
                    type: e,
                    row: a,
                    title: r
                });
            }, f = async ({
                id: e
            }) => await pa({
                id: e,
                teachClassId: u.params.classId
            }), C = c(null), S = ({
                row: e,
                type: a
            }) => {
                const r = {
                    publish: async () => {
                        l.value = await f({
                            id: e.teachCourseNoticeId
                        }), C.value.handleOpen({
                            row: e,
                            type: a,
                            title: "发布公告"
                        });
                    },
                    edit: async () => {
                        l.value = await f({
                            id: e.teachCourseNoticeId
                        }), T({
                            type: a,
                            row: e,
                            title: "编辑公告"
                        });
                    },
                    publishSetting: async () => {
                        l.value = await f({
                            id: e.teachCourseNoticeId
                        }), C.value.handleOpen({
                            row: e,
                            type: a,
                            title: "发布设置"
                        });
                    },
                    announcementSetting: async () => {
                        l.value = await f({
                            id: e.teachCourseNoticeId
                        }), C.value.handleOpen({
                            row: e,
                            type: a,
                            title: "公告设置"
                        });
                    },
                    revertPublish: async () => {
                        l.value = await f({
                            id: e.teachCourseNoticeId
                        }), C.value.handleOpen({
                            row: e,
                            type: a,
                            title: "撤销发布"
                        });
                    },
                    default: () => {}
                };
                (r[a] || r.default)();
            }, re = c(null), A = H({
                publishNum: 0,
                allNum: 0
            }), E = async () => {
                const e = await ma({
                    teachCourseId: u.params.teachCourseId,
                    teachClassId: u.params.classId
                });
                Object.keys(A).forEach(a => A[a] = e[a]);
            }, L = H({
                count: 0,
                list: []
            }), Ie = c([]), we = e => {
                let a = e.content;
                return a && (a = a.replace(/<img[^>]*\/?>/g, "[图片]")), e.transferContent = a, 
                a;
            }, Ce = async () => {
                P.value = !1, Object.keys(I).forEach(e => I[e] = ""), Oe();
            }, ke = () => {
                ae(), w(), E();
            }, Pe = e => {
                let a = [];
                return e !== "" && e !== null && (a = e.split(",")), a;
            }, x = c(null), Ne = async ({
                type: e,
                params: a
            }) => {
                const r = {
                    teachCourseId: u.params.teachCourseId,
                    teachClassId: u.params.classId,
                    title: l.value.title,
                    content: l.value.content,
                    attachmentName: l.value.attachmentName,
                    attachmentSize: l.value.attachmentSize,
                    attachmentEid: l.value.attachmentEid,
                    teachLabelId: l.value.teachLabelId,
                    id: l.value.id,
                    isPublish: a.isPublish,
                    publishTime: a.publishTime,
                    scope: a.scope,
                    isDownload: a.isDownload
                }, h = {
                    publish: () => {
                        x.value = ze;
                    },
                    publishEdit: () => {},
                    publishSetting: () => {
                        x.value = Le;
                    },
                    announcementSetting: () => {
                        x.value = Se;
                    },
                    revertPublish: () => {
                        x.value = xe;
                    },
                    default: () => {}
                };
                (h[e] || h.default)(), await x.value({
                    params: a,
                    data: r
                }), w(), E(), C.value.handleClose();
            }, Se = async ({
                params: e
            }) => {
                const a = await fa({
                    ...l.value,
                    dirId: e.dirId,
                    teachLabelId: e.teachLabelId.join(",")
                });
                return b.success("操作成功"), a;
            }, Le = async ({
                params: e,
                data: a
            }) => {
                const r = await va(a);
                return b.success("操作成功"), r;
            }, xe = async ({
                params: e,
                data: a
            }) => {
                const r = await ga(a);
                return b.success("撤销成功"), r;
            }, ze = async ({
                params: e,
                data: a
            }) => {
                await ba(a), b.success("操作成功");
            }, ce = c(!1), oe = c(null), Oe = () => {
                var e;
                (e = oe.value) == null || e.resetParamsFile();
            };
            return he({
                handleOpen: () => {
                    P.value = !0, (async () => {
                        const e = await w();
                        ce.value = (e == null ? void 0 : e.total) > 0;
                    })(), (async () => {
                        const e = await ha({
                            teachCourseId: u.params.teachCourseId
                        });
                        L.count = e.length, L.list = e;
                    })(), (async () => {
                        const e = await _a({
                            teachCourseId: u.params.teachCourseId
                        });
                        Ie.value = e;
                    })(), (async () => Na({
                        teachCourseId: u.params.teachCourseId
                    }).then(e => {
                        R.value = e || [];
                    }))(), E();
                }
            }), (e, a) => {
                const r = oa, h = Ge, v = We, Re = Ye, Ae = Ze, Ee = ea, De = za, He = Oa, Te = Ra, ie = ra, qe = na, Fe = ta, z = de("hasPermi"), Ue = de("show-tip");
                return n(), p("div", null, [ i(Fe, {
                    modelValue: t(P),
                    "onUpdate:modelValue": a[4] || (a[4] = s => Xe(P) ? P.value = s : null),
                    title: "公告",
                    size: "927",
                    "before-close": Ce
                }, {
                    default: o(() => [ m("div", U, [ t(ce) || t(N).length ? (n(), 
                    p("div", V, [ m("div", j, [ i(r, {
                        ref_key: "comSearchRef",
                        ref: oe,
                        searchList: t(_e),
                        onHandleSearch: ye,
                        onHandleReset: ae,
                        class: "left",
                        keywordsInfo: {
                            key: "searchReq",
                            label: "公告关键字/标签"
                        }
                    }, null, 8, [ "searchList" ]), m("div", $, [ k((n(), _(v, {
                        type: "primary",
                        size: "large",
                        class: "btn-group mr-10px",
                        onClick: a[0] || (a[0] = s => T({
                            type: "add",
                            title: "新增公告",
                            row: {}
                        }))
                    }, {
                        default: o(() => [ i(h, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), g(" 新增公告 ") ]),
                        _: 1
                    })), [ [ z, [ "teachmanager:teach-course-notice:create" ] ] ]) ]) ]), m("div", M, [ t(N).length ? (n(), 
                    p("div", Q, [ m("span", null, "已发布" + O(`${t(A).publishNum}/${t(A).allNum}`), 1) ])) : Qe("", !0), t(N).length ? (n(), 
                    p("div", B, [ (n(!0), p(q, null, F(t(N), s => {
                        var ue;
                        return n(), p("div", {
                            key: s.code,
                            class: Be([ "announcement-item", s.isPublish === 1 ? "announcement-has-published" : "announcement-not-published" ])
                        }, [ m("div", J, [ k((n(), p("span", K, [ i(Re, {
                            content: s.title
                        }, {
                            default: o(() => [ m("span", {
                                class: "pointer",
                                onClick: d => (async ({
                                    row: D
                                }) => {
                                    l.value = await f({
                                        id: D.teachCourseNoticeId
                                    }), re.value.handleOpen({
                                        row: D
                                    });
                                })({
                                    row: s
                                })
                            }, O(s.title), 9, X) ]),
                            _: 2
                        }, 1032, [ "content" ]) ])), [ [ Ue ] ]), (n(!0), p(q, null, F(Pe(s.teachLabelName), (d, D) => (n(), 
                        p("span", {
                            class: "course-status ml-10px",
                            key: D
                        }, O(d), 1))), 128)), i(Ae, {
                            class: "right",
                            type: (ue = t(pe)({
                                list: se,
                                listAttrCode: "code",
                                rawAttrCode: s.originalIsPublish
                            })) == null ? void 0 : ue.tag
                        }, {
                            default: o(() => {
                                var d;
                                return [ g(O((d = t(pe)({
                                    list: se,
                                    listAttrCode: "code",
                                    rawAttrCode: s.originalIsPublish
                                })) == null ? void 0 : d.name), 1) ];
                            }),
                            _: 2
                        }, 1032, [ "type" ]) ]), m("div", G, [ m("span", {
                            class: "details line-clamp1",
                            innerHTML: we(s)
                        }, null, 8, W), m("div", Y, [ i(Te, {
                            trigger: "click",
                            onCommand: ge,
                            onVisibleChange: ve
                        }, {
                            dropdown: o(() => [ i(He, {
                                style: {
                                    width: "143px"
                                }
                            }, {
                                default: o(() => [ (n(!0), p(q, null, F(fe({
                                    row: s
                                }), d => (n(), _(De, {
                                    "v-hasPermi": [ s.permi ],
                                    command: {
                                        row: s,
                                        type: d.key
                                    },
                                    key: d.key
                                }, {
                                    default: o(() => [ g(O(d.name), 1) ]),
                                    _: 2
                                }, 1032, [ "v-hasPermi", "command" ]))), 128)) ]),
                                _: 2
                            }, 1024) ]),
                            default: o(() => [ k((n(), p("span", Z, [ g(" 更多 "), i(Ee, null, {
                                default: o(() => [ t(ne) ? (n(), _(t(Je), {
                                    key: 0
                                })) : (n(), _(t(Ke), {
                                    key: 1
                                })) ]),
                                _: 1
                            }) ])), [ [ z, [ "teachmanager:teach-course-notice:delete", "teachmanager:teach-course-notice:update" ] ] ]) ]),
                            _: 2
                        }, 1024), s.originalIsPublish === 0 ? k((n(), _(v, {
                            key: 0,
                            color: "#FEA645",
                            style: {
                                color: "#fff"
                            },
                            onClick: d => S({
                                row: s,
                                type: "publish"
                            })
                        }, {
                            default: o(() => [ g("发布") ]),
                            _: 2
                        }, 1032, [ "onClick" ])), [ [ z, [ "teachmanager:teach-course-notice:update" ] ] ]) : k((n(), 
                        _(v, {
                            key: 1,
                            type: "primary",
                            onClick: d => S({
                                row: s,
                                type: "publishSetting"
                            })
                        }, {
                            default: o(() => [ g("发布设置") ]),
                            _: 2
                        }, 1032, [ "onClick" ])), [ [ z, [ "teachmanager:teach-course-notice:update" ] ] ]) ]) ]) ], 2);
                    }), 128)) ])) : (n(), _(ie, {
                        key: 2,
                        class: "noData"
                    })) ]), m("div", ee, [ i(qe, {
                        limit: t(y).pageSize,
                        "onUpdate:limit": a[1] || (a[1] = s => t(y).pageSize = s),
                        page: t(y).pageNo,
                        "onUpdate:page": a[2] || (a[2] = s => t(y).pageNo = s),
                        total: t(te),
                        onPagination: w
                    }, null, 8, [ "limit", "page", "total" ]) ]) ])) : (n(), _(ie, {
                        key: 1
                    }, {
                        btn: o(() => [ k((n(), _(v, {
                            type: "primary",
                            size: "large",
                            class: "btn-group",
                            onClick: a[3] || (a[3] = s => T({
                                type: "add",
                                title: "新增公告",
                                row: {}
                            }))
                        }, {
                            default: o(() => [ g(" 新增公告 ") ]),
                            _: 1
                        })), [ [ z, [ "teachmanager:teach-course-notice:create" ] ] ]) ]),
                        _: 1
                    })) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), i(ua, {
                    ref_key: "addAnnouncementRef",
                    ref: le,
                    announcementInfo: t(l),
                    classInfo: t(L),
                    treeList: t(R),
                    onRefreshList: ke
                }, null, 8, [ "announcementInfo", "classInfo", "treeList" ]), i(wa, {
                    ref_key: "publishAnnouncementRef",
                    ref: C,
                    announcementInfo: t(l),
                    classInfo: t(L),
                    treeList: t(R),
                    onHandleData: Ne
                }, null, 8, [ "announcementInfo", "classInfo", "treeList" ]), i(ka, {
                    ref_key: "scanPublishRef",
                    ref: re,
                    classInfo: t(L),
                    announcementInfo: t(l)
                }, null, 8, [ "classInfo", "announcementInfo" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-45a07722" ] ]);
});

export {
    Va as __tla,
    me as default
};