import {
    a7 as N,
    d as Z,
    p as $,
    r as _,
    U as aa,
    f as ea,
    j as la,
    o as p,
    c as I,
    k as a,
    l as r,
    a as l,
    I as z,
    F as R,
    y as G,
    C as i,
    v as d,
    A as m,
    D as L,
    P as ta,
    O as ra,
    ab as oa,
    ac as sa,
    N as pa,
    _ as ua,
    J as na,
    Q as ia,
    ad as ca,
    ae as _a,
    a9 as da,
    __tla as ma
} from "./index-6c08ea4c.js";

import {
    _ as fa,
    __tla as ya
} from "./index-c4ca0ced.js";

import {
    _ as ga,
    __tla as ha
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as wa,
    __tla as ba
} from "./ContentWrap-4c50e4c8.js";

import {
    _ as va,
    __tla as xa
} from "./index-51b199d8.js";

import {
    b as M,
    D as v,
    __tla as Sa
} from "./dict-c5825220.js";

import {
    d as ka,
    __tla as Ta
} from "./formatTime-de6f1520.js";

import {
    d as Na
} from "./download-20922b56.js";

import {
    _ as Ia,
    __tla as Ra
} from "./ApiErrorLogDetail.vue_vue_type_script_setup_true_lang-7c11cb5f.js";

import {
    I as f
} from "./constants-528bd83f.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Va
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import {
    __tla as Ua
} from "./el-descriptions-item-b3283002.js";

let H, Ca = Promise.all([ (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return ba;
    } catch {}
})(), (() => {
    try {
        return xa;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return Ra;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})() ]).then(async () => {
    H = Z({
        name: "InfraApiErrorLog",
        __name: "index",
        setup(Ea) {
            const x = $(), S = _(!0), V = _(0), U = _([]), o = aa({
                pageNo: 1,
                pageSize: 10,
                userId: null,
                userType: null,
                applicationName: null,
                requestUrl: null,
                processStatus: null,
                exceptionTime: []
            }), C = _(), k = _(!1), y = async () => {
                S.value = !0;
                try {
                    const t = await (u = o, N.get({
                        url: "/infra/api-error-log/page",
                        params: u
                    }));
                    U.value = t.list, V.value = t.total;
                } finally {
                    S.value = !1;
                }
                var u;
            }, g = () => {
                o.pageNo = 1, y();
            }, K = () => {
                C.value.resetFields(), g();
            }, E = _(), O = async (u, t) => {
                try {
                    const h = t === f.DONE ? "已处理" : "已忽略";
                    await x.confirm("确认标记为" + h + "?"), await ((w, n) => N.put({
                        url: "/infra/api-error-log/update-status?id=" + w + "&processStatus=" + n
                    }))(u, t), await x.success(h), await y();
                } catch {}
            }, j = async () => {
                try {
                    await x.exportConfirm(), k.value = !0;
                    const t = await (u = o, N.download({
                        url: "/infra/api-error-log/export-excel",
                        params: u
                    }));
                    Na.excel(t, "异常日志.xls");
                } catch {} finally {
                    k.value = !1;
                }
                var u;
            };
            return ea(() => {
                y();
            }), (u, t) => {
                const h = va, w = ta, n = ra, P = oa, A = sa, J = pa, T = ua, c = na, Q = ia, D = wa, s = ca, F = ga, B = _a, W = fa, b = la("hasPermi"), X = da;
                return p(), I(R, null, [ a(h, {
                    title: "系统日志",
                    url: "https://doc.iocoder.cn/system-log/"
                }), a(D, null, {
                    default: r(() => [ a(Q, {
                        class: "-mb-15px",
                        model: l(o),
                        ref_key: "queryFormRef",
                        ref: C,
                        inline: !0,
                        "label-width": "68px"
                    }, {
                        default: r(() => [ a(n, {
                            label: "用户编号",
                            prop: "userId"
                        }, {
                            default: r(() => [ a(w, {
                                modelValue: l(o).userId,
                                "onUpdate:modelValue": t[0] || (t[0] = e => l(o).userId = e),
                                placeholder: "请输入用户编号",
                                clearable: "",
                                onKeyup: z(g, [ "enter" ]),
                                class: "!w-240px"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(n, {
                            label: "用户类型",
                            prop: "userType"
                        }, {
                            default: r(() => [ a(A, {
                                modelValue: l(o).userType,
                                "onUpdate:modelValue": t[1] || (t[1] = e => l(o).userType = e),
                                placeholder: "请选择用户类型",
                                clearable: "",
                                class: "!w-240px"
                            }, {
                                default: r(() => [ (p(!0), I(R, null, G(l(M)(l(v).USER_TYPE), e => (p(), 
                                i(P, {
                                    key: e.value,
                                    label: e.label,
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(n, {
                            label: "应用名",
                            prop: "applicationName"
                        }, {
                            default: r(() => [ a(w, {
                                modelValue: l(o).applicationName,
                                "onUpdate:modelValue": t[2] || (t[2] = e => l(o).applicationName = e),
                                placeholder: "请输入应用名",
                                clearable: "",
                                onKeyup: z(g, [ "enter" ]),
                                class: "!w-240px"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(n, {
                            label: "异常时间",
                            prop: "exceptionTime"
                        }, {
                            default: r(() => [ a(J, {
                                modelValue: l(o).exceptionTime,
                                "onUpdate:modelValue": t[3] || (t[3] = e => l(o).exceptionTime = e),
                                "value-format": "YYYY-MM-DD HH:mm:ss",
                                type: "daterange",
                                "start-placeholder": "开始日期",
                                "end-placeholder": "结束日期",
                                "default-time": [ new Date("1 00:00:00"), new Date("1 23:59:59") ],
                                class: "!w-240px"
                            }, null, 8, [ "modelValue", "default-time" ]) ]),
                            _: 1
                        }), a(n, {
                            label: "处理状态",
                            prop: "processStatus"
                        }, {
                            default: r(() => [ a(A, {
                                modelValue: l(o).processStatus,
                                "onUpdate:modelValue": t[4] || (t[4] = e => l(o).processStatus = e),
                                placeholder: "请选择处理状态",
                                clearable: "",
                                class: "!w-240px"
                            }, {
                                default: r(() => [ (p(!0), I(R, null, G(l(M)(l(v).INFRA_API_ERROR_LOG_PROCESS_STATUS), e => (p(), 
                                i(P, {
                                    key: e.value,
                                    label: e.label,
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(n, null, {
                            default: r(() => [ a(c, {
                                onClick: g
                            }, {
                                default: r(() => [ a(T, {
                                    icon: "ep:search",
                                    class: "mr-5px"
                                }), d(" 搜索") ]),
                                _: 1
                            }), a(c, {
                                onClick: K
                            }, {
                                default: r(() => [ a(T, {
                                    icon: "ep:refresh",
                                    class: "mr-5px"
                                }), d(" 重置") ]),
                                _: 1
                            }), m((p(), i(c, {
                                type: "success",
                                plain: "",
                                onClick: j,
                                loading: l(k)
                            }, {
                                default: r(() => [ a(T, {
                                    icon: "ep:download",
                                    class: "mr-5px"
                                }), d(" 导出 ") ]),
                                _: 1
                            }, 8, [ "loading" ])), [ [ b, [ "infra:api-error-log:export" ] ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }), a(D, null, {
                    default: r(() => [ m((p(), i(B, {
                        data: l(U)
                    }, {
                        default: r(() => [ a(s, {
                            label: "日志编号",
                            align: "center",
                            prop: "id"
                        }), a(s, {
                            label: "用户编号",
                            align: "center",
                            prop: "userId"
                        }), a(s, {
                            label: "用户类型",
                            align: "center",
                            prop: "userType"
                        }, {
                            default: r(e => [ a(F, {
                                type: l(v).USER_TYPE,
                                value: e.row.userType
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), a(s, {
                            label: "应用名",
                            align: "center",
                            prop: "applicationName",
                            width: "200"
                        }), a(s, {
                            label: "请求方法",
                            align: "center",
                            prop: "requestMethod",
                            width: "80"
                        }), a(s, {
                            label: "请求地址",
                            align: "center",
                            prop: "requestUrl",
                            width: "180"
                        }), a(s, {
                            label: "异常发生时间",
                            align: "center",
                            prop: "exceptionTime",
                            width: "180",
                            formatter: l(ka)
                        }, null, 8, [ "formatter" ]), a(s, {
                            label: "异常名",
                            align: "center",
                            prop: "exceptionName",
                            width: "180"
                        }), a(s, {
                            label: "处理状态",
                            align: "center",
                            prop: "processStatus"
                        }, {
                            default: r(e => [ a(F, {
                                type: l(v).INFRA_API_ERROR_LOG_PROCESS_STATUS,
                                value: e.row.processStatus
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), a(s, {
                            label: "操作",
                            align: "center",
                            width: "200"
                        }, {
                            default: r(e => [ m((p(), i(c, {
                                link: "",
                                type: "primary",
                                onClick: Y => {
                                    return q = e.row, void E.value.open(q);
                                    var q;
                                }
                            }, {
                                default: r(() => [ d(" 详细 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ b, [ "infra:api-error-log:query" ] ] ]), e.row.processStatus === l(f).INIT ? m((p(), 
                            i(c, {
                                key: 0,
                                link: "",
                                type: "primary",
                                onClick: Y => O(e.row.id, l(f).DONE)
                            }, {
                                default: r(() => [ d(" 已处理 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ b, [ "infra:api-error-log:update-status" ] ] ]) : L("", !0), e.row.processStatus === l(f).INIT ? m((p(), 
                            i(c, {
                                key: 1,
                                link: "",
                                type: "primary",
                                onClick: Y => O(e.row.id, l(f).IGNORE)
                            }, {
                                default: r(() => [ d(" 已忽略 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ b, [ "infra:api-error-log:update-status" ] ] ]) : L("", !0) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ X, l(S) ] ]), a(W, {
                        total: l(V),
                        page: l(o).pageNo,
                        "onUpdate:page": t[5] || (t[5] = e => l(o).pageNo = e),
                        limit: l(o).pageSize,
                        "onUpdate:limit": t[6] || (t[6] = e => l(o).pageSize = e),
                        onPagination: y
                    }, null, 8, [ "total", "page", "limit" ]) ]),
                    _: 1
                }), a(Ia, {
                    ref_key: "detailRef",
                    ref: E
                }, null, 512) ], 64);
            };
        }
    });
});

export {
    Ca as __tla,
    H as default
};