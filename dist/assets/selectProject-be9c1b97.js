import {
    u as bt,
    T as gt,
    e as g,
    r as y,
    U as wt,
    f as xt,
    j as Ct,
    o as c,
    c as m,
    t as o,
    k as a,
    a as l,
    C as w,
    m as Z,
    D as $,
    v as i,
    B as d,
    l as s,
    F as tt,
    y as Et,
    z as at,
    H as et,
    A as k,
    a8 as Nt,
    _ as Pt,
    K as jt,
    L as zt,
    av as Vt,
    aw as St,
    br as It,
    J as Tt,
    __tla as Ut
} from "./index-6c08ea4c.js";

import {
    _ as At,
    __tla as Lt
} from "./index-c4ca0ced.js";

import {
    _ as Jt,
    __tla as Bt
} from "./index-71666e05.js";

import {
    _ as Rt,
    __tla as Ht
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as Kt,
    __tla as Yt
} from "./index-1024512a.js";

import {
    b as Dt,
    D as lt,
    __tla as Ft
} from "./dict-c5825220.js";

import {
    g as Gt,
    __tla as Mt
} from "./projectList-47ec8076.js";

import Ot, {
    __tla as Xt
} from "./PreviewCover-97c10100.js";

import {
    _ as qt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Qt
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import "./tree-05ea8e09.js";

import {
    __tla as Wt
} from "./DeptTag-1be092ce.js";

import {
    __tla as Zt
} from "./index-ef4d146e.js";

import {
    __tla as $t
} from "./el-image-0d184777.js";

import {
    __tla as ta
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as aa
} from "./throttle-1adeb119.js";

import {
    __tla as ea
} from "./file-e038b35d.js";

let st, la = Promise.all([ (() => {
    try {
        return Ut;
    } catch {}
})(), (() => {
    try {
        return Lt;
    } catch {}
})(), (() => {
    try {
        return Bt;
    } catch {}
})(), (() => {
    try {
        return Ht;
    } catch {}
})(), (() => {
    try {
        return Yt;
    } catch {}
})(), (() => {
    try {
        return Ft;
    } catch {}
})(), (() => {
    try {
        return Mt;
    } catch {}
})(), (() => {
    try {
        return Xt;
    } catch {}
})(), (() => {
    try {
        return Qt;
    } catch {}
})(), (() => {
    try {
        return Wt;
    } catch {}
})(), (() => {
    try {
        return Zt;
    } catch {}
})(), (() => {
    try {
        return $t;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})() ]).then(async () => {
    let x, C, E, N, P, j, z, V, S, I, T, U, A, L, J, B, R, H, K, Y;
    x = {
        class: "project flex flex-col"
    }, C = {
        class: "top-box"
    }, E = {
        class: "right btns-box header-btns"
    }, N = {
        class: "ml-1 mr-1"
    }, P = {
        class: "main-box"
    }, j = {
        key: 0
    }, z = [ "onClick" ], V = {
        class: "item_top"
    }, S = {
        class: "item_center"
    }, I = {
        class: "item_name"
    }, T = {
        class: "name tooltip-content"
    }, U = {
        class: "code"
    }, A = {
        class: "bottom_list tooltip-content"
    }, L = {
        class: "bottom_list"
    }, J = {
        class: "bottom_list tooltip-content"
    }, B = {
        class: "bottom_list tooltip-content"
    }, R = [ "onClick" ], H = {
        key: 1,
        class: "page-empty w-100%"
    }, K = {
        class: "bottom-box"
    }, Y = {
        class: "footer"
    }, st = qt({
        __name: "selectProject",
        emits: [ "next" ],
        setup(sa, {
            emit: ot
        }) {
            const D = bt(), F = gt(), rt = ot, nt = g(() => [ {
                label: "项目来源",
                key: "classify",
                type: "list",
                default: "3",
                clearable: 0,
                options: [ {
                    label: "个人资源库",
                    value: "3"
                }, {
                    label: "校本资源库",
                    value: "2"
                } ]
            }, {
                label: "项目等级",
                key: "level",
                type: "list",
                options: Dt(lt.EXP_PROJECT_LEVEL)
            } ]), f = y(2), h = y([]), r = y([]), ct = g(() => r.value.map(e => e.id)), G = y(), _ = wt({
                pageNo: 1,
                pageSize: 10,
                classify: "3",
                keywords: "",
                level: ""
            }), it = g(() => F.params.classId ? "项目名称/代码/项目方向/课程名称" : "项目名称/项目方向/课程名称"), _t = () => {
                rt("next", {
                    ids: r.value.map(e => e.id),
                    addRange: f.value,
                    environments: r.value.map(e => Number(e.environment))
                });
            }, b = async () => {
                const e = await Gt(_);
                h.value = e.list || [], G.value = e.total;
            }, mt = e => {
                _.classify = e.classify || "3", _.keywords = e.keywords || "", _.level = e.level || "", 
                b();
            }, M = e => {
                r.value.includes(e) ? r.value = r.value.filter(n => n.id !== e.id) : r.value.push(e);
            };
            return xt(() => {
                b();
            }), (e, n) => {
                const dt = Kt, O = Nt, X = Pt, p = jt, pt = zt, ut = Rt, u = Vt, q = St, ft = It, vt = Jt, yt = At, Q = Tt, v = Ct("show-tip");
                return c(), m(tt, null, [ o("div", x, [ o("div", C, [ a(dt, {
                    ref: "ComSearchRef",
                    searchList: l(nt),
                    keywordsInfo: {
                        label: l(it),
                        key: "keywords"
                    },
                    onHandleSearch: mt,
                    class: "left"
                }, null, 8, [ "searchList", "keywordsInfo" ]), o("div", E, [ l(F).params.classId ? (c(), 
                w(O, {
                    key: 0,
                    modelValue: l(f),
                    "onUpdate:modelValue": n[0] || (n[0] = t => Z(f) ? f.value = t : null),
                    label: "添加至全部班级",
                    size: "large",
                    "true-label": 2,
                    "false-label": 1,
                    class: "mr-4"
                }, null, 8, [ "modelValue" ])) : $("", !0), i(" 已选"), o("span", N, d(l(r).length), 1), i("个 ") ]) ]), o("div", P, [ l(h).length > 0 ? (c(), 
                m("div", j, [ a(ft, {
                    modelValue: l(r),
                    "onUpdate:modelValue": n[1] || (n[1] = t => Z(r) ? r.value = t : null),
                    style: {
                        width: "100%",
                        display: "block"
                    }
                }, {
                    default: s(() => [ a(q, {
                        gutter: 20,
                        style: {
                            width: "100%"
                        }
                    }, {
                        default: s(() => [ (c(!0), m(tt, null, Et(l(h), t => (c(), 
                        w(u, {
                            md: 8,
                            lg: 6,
                            key: t
                        }, {
                            default: s(() => [ o("div", {
                                class: at([ "project_item neu-pointer", [ {
                                    borderBlur: l(ct).includes(t.id)
                                } ] ]),
                                onClick: et(W => M(t), [ "stop" ])
                            }, [ o("div", V, [ a(Ot, {
                                "default-id": t.coverEid || "1"
                            }, null, 8, [ "default-id" ]), a(O, {
                                value: t,
                                class: "checkBox",
                                onClick: W => M(t)
                            }, null, 8, [ "value", "onClick" ]) ]), o("div", S, [ o("div", I, [ t.level ? (c(), 
                            w(X, {
                                key: 0,
                                icon: "svg-icon:project-lv" + t.level,
                                size: 24,
                                style: {
                                    "margin-right": "5px"
                                }
                            }, null, 8, [ "icon" ])) : $("", !0), k((c(), m("div", T, [ a(p, {
                                effect: "dark",
                                content: t.name,
                                placement: "top-start"
                            }, {
                                default: s(() => [ i(d(t.name), 1) ]),
                                _: 2
                            }, 1032, [ "content" ]) ])), [ [ v ] ]) ]), o("div", U, [ a(p, {
                                effect: "dark",
                                content: t.code,
                                placement: "top-start"
                            }, {
                                default: s(() => [ a(pt, {
                                    type: "warning",
                                    size: "small",
                                    hit: !1
                                }, {
                                    default: s(() => [ i(d(t.code), 1) ]),
                                    _: 2
                                }, 1024) ]),
                                _: 2
                            }, 1032, [ "content" ]), a(ut, {
                                class: at([ "ml-2", "env_" + t.environment ]),
                                type: l(lt).SYSTEM_TENANT_PACKAGE_ENV_TYPE,
                                value: t.environment,
                                size: "small"
                            }, null, 8, [ "type", "value", "class" ]) ]) ]), a(q, {
                                class: "item_bottom",
                                gutter: 20
                            }, {
                                default: s(() => [ a(u, {
                                    span: 12
                                }, {
                                    default: s(() => [ k((c(), m("div", A, [ a(p, {
                                        effect: "dark",
                                        content: t.pkgName,
                                        placement: "top-start"
                                    }, {
                                        default: s(() => [ i("所属课程：" + d(t.pkgName), 1) ]),
                                        _: 2
                                    }, 1032, [ "content" ]) ])), [ [ v ] ]) ]),
                                    _: 2
                                }, 1024), a(u, {
                                    span: 12
                                }, {
                                    default: s(() => [ o("div", L, "引用次数：" + d(t.usedNum), 1) ]),
                                    _: 2
                                }, 1024), a(u, {
                                    span: 12
                                }, {
                                    default: s(() => [ k((c(), m("div", J, [ a(p, {
                                        effect: "dark",
                                        content: t.direction,
                                        placement: "top-start"
                                    }, {
                                        default: s(() => [ i("项目方向：" + d(t.direction ?? "--"), 1) ]),
                                        _: 2
                                    }, 1032, [ "content" ]) ])), [ [ v ] ]) ]),
                                    _: 2
                                }, 1024), a(u, {
                                    span: 12
                                }, {
                                    default: s(() => [ k((c(), m("div", B, [ a(p, {
                                        effect: "dark",
                                        content: t.creator,
                                        placement: "top-start"
                                    }, {
                                        default: s(() => [ i("创建人：" + d(t.creator), 1) ]),
                                        _: 2
                                    }, 1032, [ "content" ]) ])), [ [ v ] ]) ]),
                                    _: 2
                                }, 1024) ]),
                                _: 2
                            }, 1024), o("div", {
                                class: "item_button",
                                onClick: et(W => (kt => {
                                    const ht = D.resolve({
                                        name: "ProjectPreview",
                                        params: {
                                            projectId: kt.id,
                                            inProject: 0
                                        }
                                    }).href;
                                    window.open(ht, "_blank");
                                })(t), [ "stop" ])
                            }, [ a(X, {
                                icon: "svg-icon:eye",
                                size: 14,
                                class: "mr-5px"
                            }), i("预览 ") ], 8, R) ], 10, z) ]),
                            _: 2
                        }, 1024))), 128)) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ])) : (c(), m("div", H, [ a(vt, {
                    msg: "暂无数据",
                    type: "resource"
                }) ])) ]) ]), o("div", K, [ a(yt, {
                    limit: l(_).pageSize,
                    "onUpdate:limit": n[2] || (n[2] = t => l(_).pageSize = t),
                    page: l(_).pageNo,
                    "onUpdate:page": n[3] || (n[3] = t => l(_).pageNo = t),
                    total: l(G),
                    onPagination: b
                }, null, 8, [ "limit", "page", "total" ]), o("div", Y, [ a(Q, {
                    onClick: n[4] || (n[4] = t => l(D).back())
                }, {
                    default: s(() => [ i("取 消") ]),
                    _: 1
                }), a(Q, {
                    disabled: l(r).length === 0,
                    type: "primary",
                    onClick: _t
                }, {
                    default: s(() => [ i("下一步") ]),
                    _: 1
                }, 8, [ "disabled" ]) ]) ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-894e1705" ] ]);
});

export {
    la as __tla,
    st as default
};