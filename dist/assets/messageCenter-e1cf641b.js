import {
    _ as la,
    __tla as sa
} from "./ContentPage-f6bcc98e.js";

import {
    _ as ra,
    __tla as _a
} from "./index-e2094cc0.js";

import {
    _ as na,
    __tla as oa
} from "./index-c4ca0ced.js";

import {
    _ as ia,
    __tla as ua
} from "./index-8b41572c.js";

import {
    d as ca,
    T as ma,
    p as da,
    r as c,
    e as T,
    U as pa,
    o as _,
    c as p,
    t as r,
    k as l,
    l as m,
    a as t,
    m as A,
    F as v,
    y as D,
    C as g,
    v as ya,
    z as F,
    A as fa,
    G as ga,
    B as I,
    a8 as va,
    ab as ha,
    ac as ba,
    J as Sa,
    br as ka,
    cn as Na,
    __tla as wa
} from "./index-6c08ea4c.js";

import {
    _ as xa,
    __tla as Ca
} from "./index-71666e05.js";

import {
    _ as Ua,
    __tla as Va
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    u as za,
    __tla as Pa
} from "./message-dd00d81b.js";

import {
    f as Ra,
    __tla as Ma
} from "./formatTime-de6f1520.js";

import {
    d as Ta,
    e as Aa,
    s as j,
    f as Da,
    __tla as Fa
} from "./index-67f95b27.js";

import {
    D as Ia,
    __tla as ja
} from "./dict-c5825220.js";

import La, {
    __tla as Ya
} from "./previewNotice-b88ecf5b.js";

import {
    _ as Ba
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ea
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import {
    __tla as Ga
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    __tla as Qa
} from "./file-e038b35d.js";

import {
    __tla as Ja
} from "./index.es-14d10e28.js";

import {
    __tla as Oa
} from "./project-file-a2b4fd07.js";

import "./file.data-794ea5d0.js";

import "./file_题-23882218.js";

import {
    __tla as Wa
} from "./index-95092119.js";

let L, $a = Promise.all([ (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Fa;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})(), (() => {
    try {
        return Ea;
    } catch {}
})(), (() => {
    try {
        return Ga;
    } catch {}
})(), (() => {
    try {
        return Qa;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return Wa;
    } catch {}
})() ]).then(async () => {
    let h, b, S, k, N, w, x, C;
    h = {
        class: "top-box"
    }, b = [ "onClick" ], S = {
        class: "item-content__title"
    }, k = {
        class: "item-content__name"
    }, N = {
        class: "item-content__title"
    }, w = {
        class: "item-content__time"
    }, x = {
        key: 1,
        class: "data-empty",
        style: {
            height: "100%"
        }
    }, C = {
        class: "bottom-box"
    }, L = Ba(ca({
        __name: "messageCenter",
        setup(qa) {
            const y = za(), Y = ma(), B = da(), U = c(), E = c([ {
                label: "全部",
                value: " "
            }, {
                label: "未读",
                value: "0"
            }, {
                label: "已读",
                value: "1"
            } ]), o = c([]), s = c([]), d = c(!1), V = c(0), f = T(() => Y.name), n = pa({
                readStatus: "",
                pageNo: 1,
                pageSize: 10,
                type: T(() => f.value == "PlatformMessages" ? 2 : 1)
            }), i = async () => {
                const u = await Ta(n);
                o.value = u.list, V.value = u.total;
            }, G = async () => {
                await B.delConfirm(` \u8BE5\u64CD\u4F5C\u4F1A\u5220\u9664\u9009\u4E2D${f.value == "PlatformMessages" ? "平台消息" : "通知公告"}\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u6B64\u64CD\u4F5C\uFF1F`, "提示"), 
                await Aa({
                    ids: s.value.join(",")
                }), i(), y.getUnReadNumn();
            }, Q = async () => {
                await j(s.value), i(), y.getUnReadNumn();
            }, J = () => {
                d.value = s.value.length === o.value.length;
            }, z = u => {
                s.value = u ? o.value.map(e => e.id) : [], d.value = u;
            }, O = async () => {
                await Da({
                    type: n.type
                }), i(), y.getUnReadNumn();
            };
            return i(), (u, e) => {
                const P = va, W = ha, $ = ba, q = Sa, H = Ua, K = ka, R = xa, X = Na, Z = ia, aa = na, ta = ra, ea = la;
                return _(), p(v, null, [ r("div", null, [ r("div", null, [ l(ea, {
                    class: "cont-box"
                }, {
                    default: m(() => [ r("div", h, [ l(P, {
                        modelValue: t(d),
                        "onUpdate:modelValue": e[0] || (e[0] = a => A(d) ? d.value = a : null),
                        indeterminate: t(s).length > 0 && t(s).length < t(o).length,
                        onChange: z
                    }, null, 8, [ "modelValue", "indeterminate" ]), l($, {
                        modelValue: t(n).readStatus,
                        "onUpdate:modelValue": e[1] || (e[1] = a => t(n).readStatus = a),
                        clearable: "",
                        placeholder: "状态",
                        size: "large",
                        style: {
                            width: "120px",
                            "margin-left": "10px"
                        },
                        onChange: i
                    }, {
                        default: m(() => [ (_(!0), p(v, null, D(t(E), a => (_(), 
                        g(W, {
                            key: a.value,
                            label: a.label,
                            value: a.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), l(q, {
                        size: "large",
                        style: {
                            "margin-left": "10px"
                        },
                        onClick: O
                    }, {
                        default: m(() => [ ya(" 全部已读") ]),
                        _: 1
                    }) ]), l(Z, {
                        class: "center-box",
                        "no-pager": !1,
                        "outer-height": 61
                    }, {
                        default: m(() => [ l(X, null, {
                            default: m(() => [ t(o).length > 0 ? (_(), g(K, {
                                key: 0,
                                modelValue: t(s),
                                "onUpdate:modelValue": e[2] || (e[2] = a => A(s) ? s.value = a : null),
                                onChange: J
                            }, {
                                default: m(() => [ (_(!0), p(v, null, D(t(o), a => (_(), 
                                p("div", {
                                    class: "notice-item",
                                    key: a.id
                                }, [ l(P, {
                                    value: a.id,
                                    style: {
                                        padding: "20px 0"
                                    }
                                }, null, 8, [ "value" ]), r("div", {
                                    class: "item-content",
                                    onClick: Ha => (async M => {
                                        U.value.openDialog({
                                            id: M,
                                            from: "private"
                                        }), await j([ M ]), i(), y.getUnReadNumn();
                                    })(a.id)
                                }, [ r("div", {
                                    class: F({
                                        "red-point": a.readStatus == "0"
                                    })
                                }, null, 2), r("div", S, [ r("div", k, [ fa(l(H, {
                                    type: t(Ia).SYSTEM_NOTIFY_CLASSIFY_TENANT,
                                    value: a.classify,
                                    class: F([ "classify" + a.classify, "mr-10px" ])
                                }, null, 8, [ "type", "value", "class" ]), [ [ ga, a.classify ] ]), r("span", N, I(a.title), 1) ]), r("div", w, I(t(Ra)(a.sendTime)), 1) ]) ], 8, b) ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ])) : (_(), p("div", x, [ t(f) == "PlatformMessages" ? (_(), 
                            g(R, {
                                key: 0,
                                msg: "暂无消息",
                                style: {
                                    height: "100%"
                                }
                            })) : (_(), g(R, {
                                key: 1,
                                msg: "暂无公告",
                                style: {
                                    height: "100%"
                                }
                            })) ])) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), r("div", C, [ l(aa, {
                        total: t(V),
                        page: t(n).pageNo,
                        "onUpdate:page": e[3] || (e[3] = a => t(n).pageNo = a),
                        limit: t(n).pageSize,
                        "onUpdate:limit": e[4] || (e[4] = a => t(n).pageSize = a),
                        onPagination: i
                    }, null, 8, [ "total", "page", "limit" ]) ]), l(ta, {
                        ref: "SelectionButtonGroupRef",
                        "select-list": t(s),
                        "page-list": t(o),
                        btnList: [ "read", "delete" ],
                        subject: t(f) == "PlatformMessages" ? "消息" : "公告",
                        onDelete: G,
                        onRead: Q,
                        onSelectAll: z
                    }, null, 8, [ "select-list", "page-list", "subject" ]) ]),
                    _: 1
                }) ]) ]), l(La, {
                    ref_key: "PreviewNoticeRef",
                    ref: U,
                    isShowDownLoad: !1
                }, null, 512) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-975d8d10" ] ]);
});

export {
    $a as __tla,
    L as default
};