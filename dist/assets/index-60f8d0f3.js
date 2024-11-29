import {
    d as B,
    p as J,
    aa as K,
    r as f,
    U as Q,
    f as W,
    j as X,
    o as n,
    c as A,
    k as a,
    l,
    a as t,
    I as Z,
    F as D,
    y as $,
    C as _,
    v as c,
    A as y,
    P as aa,
    O as ea,
    ab as la,
    ac as ta,
    N as ra,
    _ as oa,
    J as na,
    Q as sa,
    ad as ia,
    ae as ca,
    a9 as pa,
    __tla as ua
} from "./index-6c08ea4c.js";

import {
    _ as _a,
    __tla as da
} from "./index-c4ca0ced.js";

import {
    _ as ma,
    __tla as fa
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as ya,
    __tla as ga
} from "./ContentWrap-4c50e4c8.js";

import {
    _ as ha,
    __tla as wa
} from "./index-51b199d8.js";

import {
    _ as ba,
    g as ka,
    d as va,
    u as Ca,
    t as xa,
    __tla as Na
} from "./FileConfigForm.vue_vue_type_script_setup_true_lang-e42206c4.js";

import {
    b as Fa,
    D as C,
    __tla as Sa
} from "./dict-c5825220.js";

import {
    d as Va,
    __tla as Ia
} from "./formatTime-de6f1520.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ra
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

let U, Ta = Promise.all([ (() => {
    try {
        return ua;
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
        return ga;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return Ra;
    } catch {}
})() ]).then(async () => {
    U = B({
        name: "InfraFileConfig",
        __name: "index",
        setup(Aa) {
            const d = J(), {
                t: x
            } = K(), w = f(!0), N = f(0), F = f([]), o = Q({
                pageNo: 1,
                pageSize: 10,
                name: void 0,
                storage: void 0,
                createTime: []
            }), S = f(), p = async () => {
                w.value = !0;
                try {
                    const m = await ka(o);
                    F.value = m.list, N.value = m.total;
                } finally {
                    w.value = !1;
                }
            }, b = () => {
                o.pageNo = 1, p();
            }, E = () => {
                S.value.resetFields(), b();
            }, V = f(), I = (m, r) => {
                V.value.open(m, r);
            };
            return W(() => {
                p();
            }), (m, r) => {
                const O = ha, G = aa, g = ea, P = la, Y = ta, z = ra, k = oa, s = na, L = sa, R = ya, i = ia, T = ma, H = ca, M = _a, h = X("hasPermi"), j = pa;
                return n(), A(D, null, [ a(O, {
                    title: "上传下载",
                    url: "https://doc.iocoder.cn/file/"
                }), a(R, null, {
                    default: l(() => [ a(L, {
                        class: "-mb-15px",
                        model: t(o),
                        ref_key: "queryFormRef",
                        ref: S,
                        inline: !0,
                        "label-width": "68px"
                    }, {
                        default: l(() => [ a(g, {
                            label: "配置名",
                            prop: "name"
                        }, {
                            default: l(() => [ a(G, {
                                modelValue: t(o).name,
                                "onUpdate:modelValue": r[0] || (r[0] = e => t(o).name = e),
                                placeholder: "请输入配置名",
                                clearable: "",
                                onKeyup: Z(b, [ "enter" ]),
                                class: "!w-240px"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(g, {
                            label: "存储器",
                            prop: "storage"
                        }, {
                            default: l(() => [ a(Y, {
                                modelValue: t(o).storage,
                                "onUpdate:modelValue": r[1] || (r[1] = e => t(o).storage = e),
                                placeholder: "请选择存储器",
                                clearable: "",
                                class: "!w-240px"
                            }, {
                                default: l(() => [ (n(!0), A(D, null, $(t(Fa)(t(C).INFRA_FILE_STORAGE), e => (n(), 
                                _(P, {
                                    key: e.value,
                                    label: e.label,
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(g, {
                            label: "创建时间",
                            prop: "createTime"
                        }, {
                            default: l(() => [ a(z, {
                                modelValue: t(o).createTime,
                                "onUpdate:modelValue": r[2] || (r[2] = e => t(o).createTime = e),
                                "value-format": "YYYY-MM-DD HH:mm:ss",
                                type: "daterange",
                                "start-placeholder": "开始日期",
                                "end-placeholder": "结束日期",
                                "default-time": [ new Date("1 00:00:00"), new Date("1 23:59:59") ],
                                class: "!w-240px"
                            }, null, 8, [ "modelValue", "default-time" ]) ]),
                            _: 1
                        }), a(g, null, {
                            default: l(() => [ a(s, {
                                onClick: b
                            }, {
                                default: l(() => [ a(k, {
                                    icon: "ep:search",
                                    class: "mr-5px"
                                }), c(" 搜索") ]),
                                _: 1
                            }), a(s, {
                                onClick: E
                            }, {
                                default: l(() => [ a(k, {
                                    icon: "ep:refresh",
                                    class: "mr-5px"
                                }), c(" 重置") ]),
                                _: 1
                            }), y((n(), _(s, {
                                type: "primary",
                                plain: "",
                                onClick: r[3] || (r[3] = e => I("create"))
                            }, {
                                default: l(() => [ a(k, {
                                    icon: "ep:plus",
                                    class: "mr-5px"
                                }), c(" 新增 ") ]),
                                _: 1
                            })), [ [ h, [ "infra:file-config:create" ] ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }), a(R, null, {
                    default: l(() => [ y((n(), _(H, {
                        data: t(F)
                    }, {
                        default: l(() => [ a(i, {
                            label: "编号",
                            align: "center",
                            prop: "id"
                        }), a(i, {
                            label: "配置名",
                            align: "center",
                            prop: "name"
                        }), a(i, {
                            label: "存储器",
                            align: "center",
                            prop: "storage"
                        }, {
                            default: l(e => [ a(T, {
                                type: t(C).INFRA_FILE_STORAGE,
                                value: e.row.storage
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), a(i, {
                            label: "备注",
                            align: "center",
                            prop: "remark"
                        }), a(i, {
                            label: "主配置",
                            align: "center",
                            prop: "primary"
                        }, {
                            default: l(e => [ a(T, {
                                type: t(C).INFRA_BOOLEAN_STRING,
                                value: e.row.master
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), a(i, {
                            label: "创建时间",
                            align: "center",
                            prop: "createTime",
                            width: "180",
                            formatter: t(Va)
                        }, null, 8, [ "formatter" ]), a(i, {
                            label: "操作",
                            align: "center",
                            width: "240px"
                        }, {
                            default: l(e => [ y((n(), _(s, {
                                link: "",
                                type: "primary",
                                onClick: v => I("update", e.row.id)
                            }, {
                                default: l(() => [ c(" 编辑 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ h, [ "infra:file-config:update" ] ] ]), y((n(), 
                            _(s, {
                                link: "",
                                type: "primary",
                                disabled: e.row.master,
                                onClick: v => (async u => {
                                    try {
                                        await d.confirm('是否确认修改配置编号为"' + u + '"的数据项为主配置?'), 
                                        await Ca(u), d.success(x("common.updateSuccess")), 
                                        await p();
                                    } catch {}
                                })(e.row.id)
                            }, {
                                default: l(() => [ c(" 主配置 ") ]),
                                _: 2
                            }, 1032, [ "disabled", "onClick" ])), [ [ h, [ "infra:file-config:update" ] ] ]), a(s, {
                                link: "",
                                type: "primary",
                                onClick: v => (async u => {
                                    try {
                                        const q = await xa(u);
                                        d.alert("测试通过，上传文件成功！访问地址：" + q);
                                    } catch {}
                                })(e.row.id)
                            }, {
                                default: l(() => [ c(" 测试 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ]), y((n(), _(s, {
                                link: "",
                                type: "danger",
                                onClick: v => (async u => {
                                    try {
                                        await d.delConfirm(), await va(u), d.success(x("common.delSuccess")), 
                                        await p();
                                    } catch {}
                                })(e.row.id)
                            }, {
                                default: l(() => [ c(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ h, [ "infra:config:delete" ] ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ j, t(w) ] ]), a(M, {
                        total: t(N),
                        page: t(o).pageNo,
                        "onUpdate:page": r[4] || (r[4] = e => t(o).pageNo = e),
                        limit: t(o).pageSize,
                        "onUpdate:limit": r[5] || (r[5] = e => t(o).pageSize = e),
                        onPagination: p
                    }, null, 8, [ "total", "page", "limit" ]) ]),
                    _: 1
                }), a(ba, {
                    ref_key: "formRef",
                    ref: V,
                    onSuccess: p
                }, null, 512) ], 64);
            };
        }
    });
});

export {
    Ta as __tla,
    U as default
};