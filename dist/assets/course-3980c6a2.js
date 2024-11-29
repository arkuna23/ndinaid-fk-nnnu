import {
    _ as B,
    __tla as E
} from "./index-71666e05.js";

import {
    _ as J,
    __tla as O
} from "./index-c4ca0ced.js";

import {
    _ as D,
    __tla as F
} from "./index-8b41572c.js";

import {
    p as R,
    r as c,
    e as T,
    U as q,
    f as A,
    a as e,
    o as v,
    c as k,
    t as u,
    k as a,
    l as r,
    v as x,
    B as G,
    H as K,
    ad as M,
    L as Q,
    J as V,
    ae as W,
    __tla as X
} from "./index-6c08ea4c.js";

import {
    _ as Y,
    __tla as Z
} from "./index-1024512a.js";

import {
    c as $,
    p as aa,
    __tla as ta
} from "./index-4e6d8569.js";

import {
    _ as ea
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as oa
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as la
} from "./DeptTag-1be092ce.js";

import {
    __tla as ra
} from "./index-ef4d146e.js";

let C, sa = Promise.all([ (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})() ]).then(async () => {
    let d, m, f, h, y;
    d = {
        key: 0,
        class: "cont-box"
    }, m = {
        class: "top-box"
    }, f = {
        class: "bottom-box"
    }, h = {
        key: 1,
        class: "cont-box"
    }, y = {
        class: "page-empty w-100%"
    }, C = ea({
        __name: "course",
        setup(ca) {
            const w = R();
            c([]);
            const N = T(() => [ {
                label: "产品编码",
                key: "productCode",
                type: "input"
            } ]), b = c(0), p = c(0), s = q({
                pageNo: 1,
                pageSize: 20
            }), S = c({
                1: "本科",
                2: "高职",
                3: "个体培训",
                4: "高教产业学院",
                5: "职教产业学院",
                6: "职业本科",
                7: "中职",
                8: "通用",
                9: "技工"
            }), i = c([]), _ = async (g = {}, l = !1) => {
                i.value = [];
                let n = {
                    ...g,
                    ...s
                };
                const t = await $(n);
                b.value = t.total, i.value = t.records, l && (p.value = t.total);
            };
            return A(() => {
                _({}, !0);
            }), (g, l) => {
                const n = Y, t = M, L = Q, z = V, I = W, U = D, H = J, P = B;
                return e(p) && e(p) > 0 ? (v(), k("div", d, [ u("div", m, [ a(n, {
                    ref: "ComSearchRef",
                    searchList: e(N),
                    keywordsInfo: {
                        label: "课程资源名称",
                        key: "courseName"
                    },
                    onHandleSearch: _,
                    class: "left"
                }, null, 8, [ "searchList" ]) ]), a(U, {
                    class: "center-box",
                    "no-pager": !1
                }, {
                    default: r(() => [ a(I, {
                        class: "",
                        data: e(i),
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    }, {
                        default: r(() => [ a(t, {
                            type: "index",
                            label: "序号",
                            width: "60",
                            align: "center"
                        }), a(t, {
                            prop: "courseName",
                            label: "课程资源名称",
                            "min-width": "120",
                            "show-overflow-tooltip": ""
                        }), a(t, {
                            prop: "productCode",
                            label: "产品编码",
                            "show-overflow-tooltip": ""
                        }), a(t, {
                            prop: "courseCode",
                            label: "课程编码",
                            "show-overflow-tooltip": ""
                        }), a(t, {
                            prop: "content",
                            label: "资源简介 ",
                            "show-overflow-tooltip": ""
                        }), a(t, {
                            prop: "introduction",
                            label: "适用层次",
                            "show-overflow-tooltip": ""
                        }, {
                            default: r(o => [ a(L, null, {
                                default: r(() => [ x(G(e(S)[o.row.teachingObject] || ""), 1) ]),
                                _: 2
                            }, 1024) ]),
                            _: 1
                        }), a(t, {
                            width: "80",
                            label: "操作"
                        }, {
                            default: r(o => [ a(z, {
                                type: "primary",
                                size: "small",
                                onClick: K(_a => (async j => {
                                    try {
                                        await w.confirm("确认同步该课程资源到当前系统吗？"), await aa({
                                            pkgId: j.courseId,
                                            appCode: "NSE3",
                                            appName: "智慧教育平台"
                                        }), w.success("操作成功"), _({}, !0), await getList();
                                    } catch {}
                                })(o.row), [ "stop" ]),
                                link: ""
                            }, {
                                default: r(() => [ x(" 同步 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]) ]),
                    _: 1
                }), u("div", f, [ a(H, {
                    total: e(b),
                    page: e(s).pageNo,
                    "onUpdate:page": l[0] || (l[0] = o => e(s).pageNo = o),
                    limit: e(s).pageSize,
                    "onUpdate:limit": l[1] || (l[1] = o => e(s).pageSize = o),
                    onPagination: _
                }, null, 8, [ "total", "page", "limit" ]) ]) ])) : (v(), k("div", h, [ u("div", y, [ a(P, {
                    type: "resource"
                }) ]) ]));
            };
        }
    }, [ [ "__scopeId", "data-v-2c9bee93" ] ]);
});

export {
    sa as __tla,
    C as default
};