import {
    _ as H,
    __tla as D
} from "./index-71666e05.js";

import {
    _ as J,
    __tla as P
} from "./index-c4ca0ced.js";

import {
    _ as B,
    __tla as R
} from "./index-8b41572c.js";

import {
    p as T,
    r as i,
    e as q,
    U as A,
    f as E,
    a as e,
    o as k,
    c as x,
    t as d,
    k as t,
    l as p,
    H as F,
    v as G,
    ad as K,
    J as M,
    ae as O,
    __tla as Q
} from "./index-6c08ea4c.js";

import {
    _ as V,
    __tla as W
} from "./index-1024512a.js";

import {
    d as X,
    e as Y,
    __tla as Z
} from "./index-4e6d8569.js";

import {
    a as $,
    __tla as tt
} from "./techDirectionManage-e96d2dc4.js";

import {
    _ as at
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as et
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as ot
} from "./DeptTag-1be092ce.js";

import {
    __tla as lt
} from "./index-ef4d146e.js";

let I, rt = Promise.all([ (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return tt;
    } catch {}
})(), (() => {
    try {
        return et;
    } catch {}
})(), (() => {
    try {
        return ot;
    } catch {}
})(), (() => {
    try {
        return lt;
    } catch {}
})() ]).then(async () => {
    let u, h, y, f, w;
    u = {
        key: 0,
        class: "cont-box"
    }, h = {
        class: "top-box"
    }, y = {
        class: "bottom-box"
    }, f = {
        key: 1,
        class: "cont-box"
    }, w = {
        class: "page-empty w-100%"
    }, I = at({
        __name: "project",
        setup(st) {
            const v = T(), b = i([]), N = q(() => [ {
                label: "产品编码",
                key: "productCode",
                type: "input"
            }, {
                label: "技术方向",
                key: "techId",
                type: "list",
                options: b.value
            } ]), g = i(0), n = i(0), r = A({
                pageNo: 1,
                pageSize: 20
            }), m = i([]), _ = async (c = {}, o = !1) => {
                m.value = [];
                let l = {
                    ...c,
                    ...r
                };
                const a = await X(l);
                g.value = a.total, m.value = a.records, o && (n.value = a.total);
            };
            return E(() => {
                $({
                    techName: ""
                }).then(c => {
                    let o = c || [];
                    b.value = o.map(l => ({
                        label: l.techName,
                        value: l.techId
                    }));
                }), _({}, !0);
            }), (c, o) => {
                const l = V, a = K, j = M, z = O, C = B, S = J, L = H;
                return e(n) && e(n) > 0 ? (k(), x("div", u, [ d("div", h, [ t(l, {
                    ref: "ComSearchRef",
                    searchList: e(N),
                    keywordsInfo: {
                        label: "项目名称",
                        key: "name"
                    },
                    onHandleSearch: _,
                    class: "left"
                }, null, 8, [ "searchList" ]) ]), t(C, {
                    class: "center-box",
                    "no-pager": !1
                }, {
                    default: p(() => [ t(z, {
                        class: "",
                        data: e(m),
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    }, {
                        default: p(() => [ t(a, {
                            type: "index",
                            label: "序号",
                            width: "60",
                            align: "center"
                        }), t(a, {
                            prop: "name",
                            label: "项目名称",
                            "min-width": "120",
                            "show-overflow-tooltip": ""
                        }), t(a, {
                            prop: "productCode",
                            label: "产品编码",
                            "show-overflow-tooltip": ""
                        }), t(a, {
                            prop: "techName",
                            label: "技术方向",
                            "show-overflow-tooltip": ""
                        }), t(a, {
                            prop: "introduction",
                            label: "项目简介 ",
                            "show-overflow-tooltip": ""
                        }), t(a, {
                            width: "80",
                            label: "操作"
                        }, {
                            default: p(s => [ t(j, {
                                type: "primary",
                                size: "small",
                                onClick: F(_t => (async U => {
                                    try {
                                        await v.confirm("确认同步该项目资源到当前系统吗？"), await Y({
                                            projectId: U.projectId
                                        }), v.success("操作成功"), _({}, !0), await getList();
                                    } catch {}
                                })(s.row), [ "stop" ]),
                                link: ""
                            }, {
                                default: p(() => [ G(" 同步 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]) ]),
                    _: 1
                }), d("div", y, [ t(S, {
                    total: e(g),
                    page: e(r).pageNo,
                    "onUpdate:page": o[0] || (o[0] = s => e(r).pageNo = s),
                    limit: e(r).pageSize,
                    "onUpdate:limit": o[1] || (o[1] = s => e(r).pageSize = s),
                    onPagination: _
                }, null, 8, [ "total", "page", "limit" ]) ]) ])) : (k(), x("div", f, [ d("div", w, [ t(L, {
                    type: "resource"
                }) ]) ]));
            };
        }
    }, [ [ "__scopeId", "data-v-289d803b" ] ]);
});

export {
    rt as __tla,
    I as default
};