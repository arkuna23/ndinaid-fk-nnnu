import {
    a7 as C,
    aO as Ea,
    h as Pa,
    p as Oa,
    r,
    T as Da,
    e as ja,
    U as N,
    j as sa,
    o as n,
    c as i,
    k as d,
    l as w,
    t as c,
    a as e,
    B as S,
    D as Ha,
    F as la,
    y as ra,
    z as Ua,
    A as na,
    v as ca,
    C as x,
    m as qa,
    K as Ba,
    L as Fa,
    J as Va,
    __tla as Ma
} from "./index-6c08ea4c.js";

import {
    E as $a,
    __tla as Ja
} from "./el-drawer-fca4d971.js";

import {
    _ as Ka,
    __tla as Ya
} from "./index-c4ca0ced.js";

import {
    _ as Ga,
    __tla as Qa
} from "./index-c834085f.js";

import {
    _ as Wa,
    __tla as Xa
} from "./index-1024512a.js";

import {
    a as Za,
    __tla as at
} from "./addAnnouncement-2a82576a.js";

import tt, {
    __tla as et
} from "./publishAnnouncement-34b89b97.js";

import st, {
    __tla as lt
} from "./scanPublish-c042d284.js";

import {
    a as rt,
    __tla as nt
} from "./index-9567cbf6.js";

import {
    f as ct,
    __tla as ot
} from "./formatTime-de6f1520.js";

import {
    t as oa,
    __tla as ut
} from "./file-e038b35d.js";

import {
    _ as it
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as mt
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as pt
} from "./DeptTag-1be092ce.js";

import {
    __tla as dt
} from "./index-ef4d146e.js";

import {
    __tla as _t
} from "./index-a34a73bc.js";

import "./file_题-23882218.js";

import {
    __tla as ht
} from "./Editor-ef737d2a.js";

import {
    __tla as ft
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as yt
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import "./file.data-794ea5d0.js";

let ua, gt = Promise.all([ (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})(), (() => {
    try {
        return Qa;
    } catch {}
})(), (() => {
    try {
        return Xa;
    } catch {}
})(), (() => {
    try {
        return at;
    } catch {}
})(), (() => {
    try {
        return et;
    } catch {}
})(), (() => {
    try {
        return lt;
    } catch {}
})(), (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return ot;
    } catch {}
})(), (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return mt;
    } catch {}
})(), (() => {
    try {
        return pt;
    } catch {}
})(), (() => {
    try {
        return dt;
    } catch {}
})(), (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return ht;
    } catch {}
})(), (() => {
    try {
        return ft;
    } catch {}
})(), (() => {
    try {
        return yt;
    } catch {}
})() ]).then(async () => {
    let T, E, P, O, D, j, H, U, q, B, F, V, M, $;
    T = {
        class: "drawer-body"
    }, E = {
        key: 0,
        class: "neu-has-data"
    }, P = {
        class: "top-box clearFix"
    }, O = {
        class: "content"
    }, D = {
        key: 0,
        class: "content-summary"
    }, j = {
        key: 1,
        class: "content-list"
    }, H = {
        class: "item1"
    }, U = {
        class: "title tooltip-content"
    }, q = [ "onClick" ], B = {
        class: "item2"
    }, F = [ "innerHTML" ], V = {
        class: "right"
    }, M = {
        class: "position-right"
    }, $ = {
        class: "bottom-box"
    }, ua = it({
        __name: "classAnnouncement",
        setup(vt, {
            expose: ia
        }) {
            Ea(a => ({
                "15925f96": a.progress
            }));
            const ma = Pa(), k = Oa(), h = r(!1), u = Da(), pa = ja(() => [ {
                label: "查看状态",
                key: "readStatus",
                type: "list",
                options: R,
                width: "158px"
            } ]), z = r([]), f = N({
                searchReq: "",
                readStatus: ""
            }), m = N({
                pageNo: 1,
                pageSize: 10
            }), J = () => {
                m.pageNo = 1, m.pageSize = 10;
            }, K = r(0), y = r([]), da = a => {
                f.searchReq = a.searchReq, f.readStatus = a.readStatus, g();
            }, g = async () => {
                const a = await (t = {
                    pageNo: m.pageNo,
                    pageSize: m.pageSize,
                    teachClassId: u.params.classId,
                    userId: ma.getUser.id || "",
                    ...f
                }, C.get({
                    url: "/teachmanager/teach-course-notice-target/pageList",
                    params: t
                }));
                var t;
                return y.value = a == null ? void 0 : a.list, K.value = (a == null ? void 0 : a.total) || 0, 
                a;
            }, R = [ {
                label: "未查看",
                value: "0",
                tag: "error"
            }, {
                label: "已查看",
                value: "1",
                tag: "success"
            } ];
            r(!1);
            const Y = r(null), l = r(null), G = async ({
                id: a
            }) => {
                return await (t = {
                    id: a,
                    teachClassId: u.params.classId
                }, C.get({
                    url: "/teachmanager/teach-course-notice/get",
                    params: t
                }));
                var t;
            }, Q = r(null), W = r(null), A = N({
                publishNum: 0,
                allNum: 0
            }), X = async () => {
                const a = await getAnnouncementCountApi({
                    teachCourseId: u.params.teachCourseId,
                    teachClassId: u.params.classId
                });
                Object.keys(A).forEach(t => A[t] = a[t]);
            }, v = N({
                count: 0,
                list: []
            }), _a = async () => {
                const a = await (t = {
                    teachCourseId: u.params.teachCourseId
                }, C.get({
                    url: "/teachmanager/teach-course-notice-class/getAllClass",
                    params: t
                }));
                var t;
                v.count = a.length, v.list = a;
            }, ha = r([]), fa = async () => {
                const a = await (t = {
                    teachCourseId: u.params.teachCourseId
                }, C.get({
                    url: "/teachmanager/teach-course-tag/getTeachCourseTags",
                    params: t
                }));
                var t;
                ha.value = a;
            }, ya = a => {
                let t = a.content;
                return t && (t = t.replace(/<img[^>]*\/?>/g, "[图片]")), a.transferContent = t, 
                t;
            }, ga = async () => {
                h.value = !1, Object.keys(f).forEach(a => f[a] = ""), Aa();
            }, va = () => {
                J(), g(), X();
            }, Ia = a => {
                let t = [];
                return a !== "" && a !== null && (t = a.split(",")), t;
            }, I = r(null), ba = async ({
                type: a,
                params: t
            }) => {
                const o = {
                    teachCourseId: u.params.teachCourseId,
                    teachClassId: u.params.classId,
                    title: l.value.title,
                    content: l.value.content,
                    attachmentName: l.value.attachmentName,
                    attachmentSize: l.value.attachmentSize,
                    attachmentEid: l.value.attachmentEid,
                    teachLabelId: l.value.teachLabelId,
                    id: l.value.id,
                    readStatus: t.readStatus,
                    publishTime: t.publishTime,
                    scope: t.scope,
                    isDownload: t.isDownload
                }, L = {
                    publish: () => {
                        I.value = ka;
                    },
                    publishEdit: () => {},
                    publishSetting: () => {
                        I.value = wa;
                    },
                    announcementSetting: () => {
                        I.value = Ca;
                    },
                    revertPublish: () => {
                        I.value = Sa;
                    },
                    default: () => {}
                };
                (L[a] || L.default)(), await I.value({
                    params: t,
                    data: o
                }), g(), Q.value.handleClose();
            }, Ca = async ({
                params: a
            }) => {
                const t = await (o = {
                    ...l.value,
                    dirId: a.dirId,
                    teachLabelId: a.teachLabelId.join(",")
                }, C.put({
                    url: "/teachmanager/teach-course-notice-target/updateBatchReadStatus",
                    data: o
                }));
                var o;
                return k.success("操作成功"), t;
            }, wa = async ({
                params: a,
                data: t
            }) => {
                const o = await publishSetAnnouncementApi(t);
                return k.success("操作成功"), o;
            }, Sa = async ({
                params: a,
                data: t
            }) => {
                const o = await revertAnnouncementApi(t);
                return k.success("撤销成功"), o;
            }, ka = async ({
                params: a,
                data: t
            }) => {
                await publishAnnouncementApi(t), k.success("操作成功");
            }, Z = r(!1), aa = r(null), Aa = () => {
                var a;
                (a = aa.value) == null || a.resetParamsFile();
            };
            return ia({
                handleOpen: () => {
                    h.value = !0, (async () => {
                        const a = await g();
                        Z.value = (a == null ? void 0 : a.total) > 0;
                    })(), _a(), fa(), (async () => rt({
                        teachCourseId: u.params.teachCourseId
                    }).then(a => {
                        z.value = a || [];
                    }))(), X();
                }
            }), (a, t) => {
                const o = Wa, L = Ba, La = Fa, ta = Ga, Na = Ka, za = Va, Ra = $a, xa = sa("show-tip"), Ta = sa("hasPermi");
                return n(), i("div", null, [ d(Ra, {
                    modelValue: e(h),
                    "onUpdate:modelValue": t[3] || (t[3] = s => qa(h) ? h.value = s : null),
                    title: "公告",
                    size: "927",
                    "before-close": ga
                }, {
                    default: w(() => [ c("div", T, [ e(Z) || e(y).length ? (n(), 
                    i("div", E, [ c("div", P, [ d(o, {
                        ref_key: "comSearchRef",
                        ref: aa,
                        borderBox: !0,
                        searchList: e(pa),
                        onHandleSearch: da,
                        onHandleReset: J,
                        class: "left",
                        keywordsInfo: {
                            key: "searchReq",
                            label: "公告关键字/标签"
                        }
                    }, null, 8, [ "searchList" ]) ]), c("div", O, [ e(y).length ? (n(), 
                    i("div", D, [ c("span", null, "已查看" + S(`${e(A).publishNum}/${e(A).allNum}`), 1) ])) : Ha("", !0), e(y).length ? (n(), 
                    i("div", j, [ (n(!0), i(la, null, ra(e(y), s => {
                        var b;
                        return n(), i("div", {
                            key: s.code,
                            class: Ua([ "announcement-item", s.readStatus === 1 ? "announcement-has-published" : "announcement-not-published" ])
                        }, [ c("div", H, [ na((n(), i("span", U, [ d(L, {
                            content: s.title
                        }, {
                            default: w(() => [ c("span", {
                                class: "pointer",
                                onClick: p => (async ({
                                    row: _
                                }) => {
                                    l.value = await G({
                                        id: _.teachCourseNoticeId
                                    }), W.value.handleOpen({
                                        row: _
                                    });
                                })({
                                    row: s
                                })
                            }, S(s.title), 9, q) ]),
                            _: 2
                        }, 1032, [ "content" ]) ])), [ [ xa ] ]), (n(!0), i(la, null, ra(Ia(s.teachLabelName), (p, _) => (n(), 
                        i("span", {
                            class: "course-status ml-10px",
                            key: _
                        }, S(p), 1))), 128)), d(La, {
                            class: "right",
                            type: (b = e(oa)({
                                list: R,
                                listAttrCode: "value",
                                rawAttrCode: s.readStatus
                            })) == null ? void 0 : b.tag
                        }, {
                            default: w(() => {
                                var p;
                                return [ ca(S((p = e(oa)({
                                    list: R,
                                    listAttrCode: "value",
                                    rawAttrCode: s.readStatus
                                })) == null ? void 0 : p.label), 1) ];
                            }),
                            _: 2
                        }, 1032, [ "type" ]) ]), c("div", B, [ c("span", {
                            class: "details line-clamp1",
                            innerHTML: ya(s)
                        }, null, 8, F), c("div", V, [ c("span", M, S(e(ct)(s.publishTime)), 1) ]) ]) ], 2);
                    }), 128)) ])) : (n(), x(ta, {
                        key: 2,
                        class: "noData"
                    })) ]), c("div", $, [ d(Na, {
                        limit: e(m).pageSize,
                        "onUpdate:limit": t[0] || (t[0] = s => e(m).pageSize = s),
                        page: e(m).pageNo,
                        "onUpdate:page": t[1] || (t[1] = s => e(m).pageNo = s),
                        total: e(K),
                        onPagination: g
                    }, null, 8, [ "limit", "page", "total" ]) ]) ])) : (n(), x(ta, {
                        key: 1
                    }, {
                        btn: w(() => [ na((n(), x(za, {
                            type: "primary",
                            size: "large",
                            class: "btn-group",
                            onClick: t[2] || (t[2] = s => (async ({
                                type: b,
                                row: p,
                                title: _
                            }) => {
                                const ea = {
                                    edit: async () => {
                                        l.value = await G({
                                            id: p.teachCourseNoticeId
                                        });
                                    },
                                    default: () => {}
                                };
                                await (ea[b] || ea.default)(), Y.value.handleOpen({
                                    type: b,
                                    row: p,
                                    title: _
                                });
                            })({
                                type: "add",
                                title: "新增公告",
                                row: {}
                            }))
                        }, {
                            default: w(() => [ ca(" 新增公告 ") ]),
                            _: 1
                        })), [ [ Ta, [ "teachmanager:teach-course-notice:create" ] ] ]) ]),
                        _: 1
                    })) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), d(Za, {
                    ref_key: "addAnnouncementRef",
                    ref: Y,
                    announcementInfo: e(l),
                    classInfo: e(v),
                    treeList: e(z),
                    onRefreshList: va
                }, null, 8, [ "announcementInfo", "classInfo", "treeList" ]), d(tt, {
                    ref_key: "publishAnnouncementRef",
                    ref: Q,
                    announcementInfo: e(l),
                    classInfo: e(v),
                    treeList: e(z),
                    onHandleData: ba
                }, null, 8, [ "announcementInfo", "classInfo", "treeList" ]), d(st, {
                    ref_key: "scanPublishRef",
                    ref: W,
                    classInfo: e(v),
                    announcementInfo: e(l)
                }, null, 8, [ "classInfo", "announcementInfo" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-858c1fb7" ] ]);
});

export {
    gt as __tla,
    ua as default
};