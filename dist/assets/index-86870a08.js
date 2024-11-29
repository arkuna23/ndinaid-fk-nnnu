import {
    d as j,
    r as i,
    U as K,
    f as W,
    o as f,
    c as R,
    k as a,
    l,
    a as t,
    F as V,
    y as X,
    C as Y,
    v as c,
    A as Z,
    B as $,
    p as aa,
    ab as ea,
    ac as ta,
    O as la,
    N as ra,
    _ as oa,
    J as sa,
    Q as na,
    ad as ia,
    ae as _a,
    a9 as ua,
    __tla as ca
} from "./index-6c08ea4c.js";

import {
    _ as pa,
    __tla as da
} from "./index-c4ca0ced.js";

import {
    _ as ma,
    __tla as fa
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as ya,
    __tla as ha
} from "./ContentWrap-4c50e4c8.js";

import {
    _ as va,
    __tla as wa
} from "./index-51b199d8.js";

import {
    a as ga,
    D as w,
    __tla as Sa
} from "./dict-c5825220.js";

import {
    d as A,
    __tla as ba
} from "./formatTime-de6f1520.js";

import {
    g as Ta,
    u as E,
    a as ka,
    __tla as Na
} from "./index-67f95b27.js";

import {
    _ as xa,
    __tla as Ca
} from "./MyNotifyMessageDetail.vue_vue_type_script_setup_true_lang-45fad2d2.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ra
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import {
    __tla as Va
} from "./el-descriptions-item-b3283002.js";

let F, Ya = Promise.all([ (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return ba;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Ra;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})() ]).then(async () => {
    F = j({
        name: "SystemMyNotify",
        __name: "index",
        setup(Aa) {
            const g = aa(), y = i(!0), S = i(0), b = i([]), r = K({
                pageNo: 1,
                pageSize: 10,
                readStatus: void 0,
                createTime: []
            }), T = i(), p = i(), d = i([]), _ = async () => {
                y.value = !0;
                try {
                    const o = await Ta(r);
                    b.value = o.list, S.value = o.total;
                } finally {
                    y.value = !1;
                }
            }, k = () => {
                r.pageNo = 1, _();
            }, O = () => {
                T.value.resetFields(), p.value.clearSelection(), k();
            }, N = i(), D = async o => {
                await E(o), await _();
            }, I = async () => {
                await ka(), g.success("全部已读成功！"), p.value.clearSelection(), await _();
            }, M = async () => {
                d.value.length !== 0 && (await E(d.value), g.success("批量已读成功！"), 
                p.value.clearSelection(), await _());
            }, U = o => !o.readStatus, P = o => {
                d.value = [], o && o.forEach(s => d.value.push(s.id));
            };
            return W(() => {
                _();
            }), (o, s) => {
                const z = va, B = ea, G = ta, h = la, L = ra, m = oa, u = sa, H = na, x = ya, n = ia, C = ma, q = _a, J = pa, Q = ua;
                return f(), R(V, null, [ a(z, {
                    title: "站内信配置",
                    url: "https://doc.iocoder.cn/notify/"
                }), a(x, null, {
                    default: l(() => [ a(H, {
                        class: "-mb-15px",
                        model: t(r),
                        ref_key: "queryFormRef",
                        ref: T,
                        inline: !0,
                        "label-width": "68px"
                    }, {
                        default: l(() => [ a(h, {
                            label: "是否已读",
                            prop: "readStatus"
                        }, {
                            default: l(() => [ a(G, {
                                modelValue: t(r).readStatus,
                                "onUpdate:modelValue": s[0] || (s[0] = e => t(r).readStatus = e),
                                placeholder: "请选择状态",
                                clearable: "",
                                class: "!w-240px"
                            }, {
                                default: l(() => [ (f(!0), R(V, null, X(t(ga)(t(w).INFRA_BOOLEAN_STRING), e => (f(), 
                                Y(B, {
                                    key: e.value,
                                    label: e.label,
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(h, {
                            label: "发送时间",
                            prop: "createTime"
                        }, {
                            default: l(() => [ a(L, {
                                modelValue: t(r).createTime,
                                "onUpdate:modelValue": s[1] || (s[1] = e => t(r).createTime = e),
                                "value-format": "YYYY-MM-DD HH:mm:ss",
                                type: "daterange",
                                "start-placeholder": "开始日期",
                                "end-placeholder": "结束日期",
                                "default-time": [ new Date("1 00:00:00"), new Date("1 23:59:59") ],
                                class: "!w-240px"
                            }, null, 8, [ "modelValue", "default-time" ]) ]),
                            _: 1
                        }), a(h, null, {
                            default: l(() => [ a(u, {
                                onClick: k
                            }, {
                                default: l(() => [ a(m, {
                                    icon: "ep:search",
                                    class: "mr-5px"
                                }), c(" 搜索") ]),
                                _: 1
                            }), a(u, {
                                onClick: O
                            }, {
                                default: l(() => [ a(m, {
                                    icon: "ep:refresh",
                                    class: "mr-5px"
                                }), c(" 重置") ]),
                                _: 1
                            }), a(u, {
                                onClick: M
                            }, {
                                default: l(() => [ a(m, {
                                    icon: "ep:reading",
                                    class: "mr-5px"
                                }), c(" 标记已读 ") ]),
                                _: 1
                            }), a(u, {
                                onClick: I
                            }, {
                                default: l(() => [ a(m, {
                                    icon: "ep:reading",
                                    class: "mr-5px"
                                }), c(" 全部已读 ") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }), a(x, null, {
                    default: l(() => [ Z((f(), Y(q, {
                        data: t(b),
                        ref_key: "tableRef",
                        ref: p,
                        "row-key": "id",
                        onSelectionChange: P
                    }, {
                        default: l(() => [ a(n, {
                            type: "selection",
                            selectable: U,
                            "reserve-selection": !0
                        }), a(n, {
                            label: "发送人",
                            align: "center",
                            prop: "templateNickname",
                            width: "180"
                        }), a(n, {
                            label: "发送时间",
                            align: "center",
                            prop: "createTime",
                            width: "200",
                            formatter: t(A)
                        }, null, 8, [ "formatter" ]), a(n, {
                            label: "类型",
                            align: "center",
                            prop: "templateType",
                            width: "180"
                        }, {
                            default: l(e => [ a(C, {
                                type: t(w).SYSTEM_NOTIFY_TEMPLATE_TYPE,
                                value: e.row.templateType
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), a(n, {
                            label: "消息内容",
                            align: "center",
                            prop: "templateContent",
                            "show-overflow-tooltip": ""
                        }), a(n, {
                            label: "是否已读",
                            align: "center",
                            prop: "readStatus",
                            width: "160"
                        }, {
                            default: l(e => [ a(C, {
                                type: t(w).INFRA_BOOLEAN_STRING,
                                value: e.row.readStatus
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), a(n, {
                            label: "阅读时间",
                            align: "center",
                            prop: "readTime",
                            width: "200",
                            formatter: t(A)
                        }, null, 8, [ "formatter" ]), a(n, {
                            label: "操作",
                            align: "center",
                            width: "160"
                        }, {
                            default: l(e => [ a(u, {
                                link: "",
                                type: e.row.readStatus ? "primary" : "warning",
                                onClick: Ea => {
                                    return (v = e.row).readStatus || D(v.id), void N.value.open(v);
                                    var v;
                                }
                            }, {
                                default: l(() => [ c($(e.row.readStatus ? "详情" : "已读"), 1) ]),
                                _: 2
                            }, 1032, [ "type", "onClick" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ Q, t(y) ] ]), a(J, {
                        total: t(S),
                        page: t(r).pageNo,
                        "onUpdate:page": s[2] || (s[2] = e => t(r).pageNo = e),
                        limit: t(r).pageSize,
                        "onUpdate:limit": s[3] || (s[3] = e => t(r).pageSize = e),
                        onPagination: _
                    }, null, 8, [ "total", "page", "limit" ]) ]),
                    _: 1
                }), a(xa, {
                    ref_key: "detailRef",
                    ref: N
                }, null, 512) ], 64);
            };
        }
    });
});

export {
    Ya as __tla,
    F as default
};