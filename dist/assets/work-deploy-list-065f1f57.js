import {
    _ as K,
    __tla as M
} from "./index-8b41572c.js";

import {
    r as c,
    h as O,
    T as Q,
    u as W,
    e as R,
    o as r,
    c as S,
    t as p,
    k as o,
    a as s,
    F as X,
    C as n,
    l as a,
    v as i,
    D as l,
    p as U,
    bo as z,
    J as Y,
    ad as Z,
    L as $,
    ae as tt,
    __tla as at
} from "./index-6c08ea4c.js";

import {
    _ as et,
    __tla as rt
} from "./index-1024512a.js";

import lt, {
    __tla as ot
} from "./deploy-dialog-1696fbaf.js";

import {
    d as st,
    b as nt,
    c as it,
    __tla as ct
} from "./deploy-dab1856f.js";

import {
    g as dt,
    __tla as _t
} from "./group-7c00fc2a.js";

import {
    d as E,
    __tla as ut
} from "./formatTime-de6f1520.js";

import {
    f as pt
} from "./formatter-7ecf379a.js";

import {
    _ as mt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as yt
} from "./DeptTag-1be092ce.js";

import {
    __tla as ft
} from "./index-ef4d146e.js";

import {
    __tla as kt
} from "./build-0e7c99ca.js";

import {
    __tla as ht
} from "./file-e038b35d.js";

import {
    __tla as gt
} from "./project-enjineering-046a4b77.js";

let G, wt = Promise.all([ (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return at;
    } catch {}
})(), (() => {
    try {
        return rt;
    } catch {}
})(), (() => {
    try {
        return ot;
    } catch {}
})(), (() => {
    try {
        return ct;
    } catch {}
})(), (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return yt;
    } catch {}
})(), (() => {
    try {
        return ft;
    } catch {}
})(), (() => {
    try {
        return kt;
    } catch {}
})(), (() => {
    try {
        return ht;
    } catch {}
})(), (() => {
    try {
        return gt;
    } catch {}
})() ]).then(async () => {
    let v, C, I, b, x, T;
    v = {
        class: "work-deploy-list"
    }, C = {
        class: "page-content"
    }, I = {
        class: "content-header"
    }, b = {
        class: "header-left"
    }, x = {
        class: "header-right"
    }, T = {
        class: "content-container"
    }, G = mt({
        __name: "work-deploy-list",
        emits: [ "goPage" ],
        setup(vt, {
            emit: L
        }) {
            const k = c(null), D = O(), h = Q(), V = L, F = c([]);
            W(), c([]), c(""), R(() => D.isStudent);
            const P = c({
                name: ""
            }), H = () => {
                k.value.openDialog({
                    title: "新建任务",
                    editFlag: !1
                });
            }, j = c(0), m = R(() => !!D.isTeacher || j.value != 0), J = d => {
                P.value.key = d.key ?? "", y();
            }, y = () => {
                it({
                    groupId: h.params.groupId,
                    key: P.value.key
                }).then(d => {
                    F.value = d;
                });
            }, g = () => {
                y();
            };
            g(), dt({
                projectId: h.params.projectId
            }).then(d => {
                j.value = d.isLeader;
            });
            const N = c("");
            return (d, Ct) => {
                const q = et, _ = Y, u = Z, f = $, A = tt, B = K;
                return r(), S("div", v, [ p("div", C, [ p("div", I, [ p("div", b, [ o(q, {
                    ref: "ComSearchRef",
                    keywordsInfo: {
                        label: "任务名称",
                        key: "key"
                    },
                    onHandleSearch: J,
                    class: "left"
                }, null, 512) ]), p("div", x, [ [ "6", "7" ].includes(s(N)) ? l("", !0) : (r(), 
                S(X, {
                    key: 0
                }, [ s(m) ? (r(), n(_, {
                    key: 0,
                    class: "common-add-btn",
                    type: "primary",
                    size: "large",
                    onClick: H
                }, {
                    default: a(() => [ i("新建任务") ]),
                    _: 1
                })) : l("", !0), o(_, {
                    size: "large",
                    onClick: y
                }, {
                    default: a(() => [ i("刷新状态") ]),
                    _: 1
                }) ], 64)) ]) ]), o(B, {
                    "outer-height": 50,
                    "no-pager": !0,
                    class: "center-box"
                }, {
                    default: a(() => [ p("div", T, [ o(A, {
                        class: "neu-table",
                        data: s(F),
                        style: {
                            width: "100%"
                        }
                    }, {
                        default: a(() => [ o(u, {
                            prop: "deploymentTaskName",
                            label: "部署任务",
                            "show-overflow-tooltip": "",
                            "min-width": "230",
                            align: "center"
                        }), o(u, {
                            prop: "createTime",
                            label: "创建时间",
                            formatter: s(E),
                            width: "180"
                        }, null, 8, [ "formatter" ]), o(u, {
                            label: "执行结果",
                            width: "110"
                        }, {
                            default: a(e => [ e.row.status == 1 ? (r(), n(f, {
                                key: 0,
                                type: "success"
                            }, {
                                default: a(() => [ i("部署成功") ]),
                                _: 1
                            })) : l("", !0), e.row.status == 3 ? (r(), n(f, {
                                key: 1,
                                type: "danger"
                            }, {
                                default: a(() => [ i("部署失败") ]),
                                _: 1
                            })) : l("", !0), e.row.status == 0 ? (r(), n(f, {
                                key: 2,
                                type: "info"
                            }, {
                                default: a(() => [ i("待部署") ]),
                                _: 1
                            })) : l("", !0), e.row.status == 2 ? (r(), n(f, {
                                key: 3,
                                type: "warning"
                            }, {
                                default: a(() => [ i("部署中") ]),
                                _: 1
                            })) : l("", !0) ]),
                            _: 1
                        }), o(u, {
                            prop: "executeUserRealName",
                            label: "发起人",
                            "show-overflow-tooltip": "",
                            formatter: s(pt)
                        }, null, 8, [ "formatter" ]), o(u, {
                            prop: "executeTime",
                            label: "启动时间",
                            formatter: s(E),
                            width: "180"
                        }, null, 8, [ "formatter" ]), [ "7" ].includes(s(N)) ? l("", !0) : (r(), 
                        n(u, {
                            key: 0,
                            label: "操作",
                            align: "center",
                            width: "220px",
                            fixed: "right"
                        }, {
                            default: a(e => [ [ "0", "1", "3" ].includes(e.row.status) && s(m) ? (r(), 
                            n(_, {
                                key: 0,
                                type: "primary",
                                link: "",
                                onClick: w => (async t => {
                                    await U().confirm("该操作会执行部署任务，请确认是否执行？", "提示"), 
                                    nt({
                                        structureId: t.structureId,
                                        deployId: t.deployId,
                                        description: t.description,
                                        deploymentTaskName: t.deploymentTaskName,
                                        deploymentUrl: t.deploymentUrl,
                                        deploymentVersion: t.deploymentVersion,
                                        evnGitProId: t.evnGitProId,
                                        nginxConfigEid: t.nginxConfigEid,
                                        groupId: t.groupId,
                                        port: t.port || "",
                                        projectId: h.params.projectId
                                    }).then(() => {
                                        z.success("操作成功"), g();
                                    });
                                })(e.row)
                            }, {
                                default: a(() => [ i(" 执行 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : l("", !0), [ "1", "2", "3" ].includes(e.row.status) ? (r(), 
                            n(_, {
                                key: 1,
                                type: "primary",
                                link: "",
                                onClick: w => {
                                    return t = e.row, void V("goPage", "result", t);
                                    var t;
                                }
                            }, {
                                default: a(() => [ i(" 详情 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : l("", !0), [ "0" ].includes(e.row.status) && s(m) ? (r(), 
                            n(_, {
                                key: 2,
                                type: "primary",
                                link: "",
                                onClick: w => {
                                    return t = e.row, void k.value.openDialog({
                                        title: "编辑任务",
                                        editFlag: !0,
                                        data: t
                                    });
                                    var t;
                                }
                            }, {
                                default: a(() => [ i(" 编辑 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : l("", !0), [ "0", "1", "3" ].includes(e.row.status) && s(m) ? (r(), 
                            n(_, {
                                key: 3,
                                type: "danger",
                                link: "",
                                onClick: w => (async t => {
                                    await U().delConfirm("该操作会删除该任务，请确认是否执行？", "提示"), 
                                    st(t).then(() => {
                                        z.success("删除成功"), g();
                                    });
                                })(e.row)
                            }, {
                                default: a(() => [ i(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : l("", !0) ]),
                            _: 1
                        })) ]),
                        _: 1
                    }, 8, [ "data" ]) ]) ]),
                    _: 1
                }) ]), o(lt, {
                    ref_key: "DeployDialogRef",
                    ref: k,
                    onRefresh: y
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-d5ca5ad1" ] ]);
});

export {
    wt as __tla,
    G as default
};