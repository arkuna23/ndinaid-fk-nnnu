import {
    a7 as U,
    d as q,
    p as A,
    aa as J,
    r as c,
    U as L,
    f as O,
    j as Q,
    o as p,
    c as B,
    k as e,
    l as t,
    a as l,
    I as z,
    v as i,
    A as N,
    C as u,
    e4 as G,
    F as W,
    P as X,
    O as Z,
    N as $,
    _ as ee,
    J as ae,
    Q as te,
    ad as le,
    ae as re,
    a9 as oe,
    __tla as ne
} from "./index-6c08ea4c.js";

import {
    _ as pe,
    __tla as ie
} from "./index-c4ca0ced.js";

import {
    E as se,
    __tla as _e
} from "./el-link-8197297a.js";

import {
    E as ce,
    __tla as ue
} from "./el-image-0d184777.js";

import {
    __tla as de
} from "./el-image-viewer-2c0d56e4.js";

import {
    _ as me,
    __tla as fe
} from "./ContentWrap-4c50e4c8.js";

import {
    _ as ye,
    __tla as he
} from "./index-51b199d8.js";

import {
    d as ge,
    __tla as we
} from "./formatTime-de6f1520.js";

import {
    _ as ve,
    __tla as be
} from "./FileForm.vue_vue_type_script_setup_true_lang-f35e5fd3.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ke
} from "./index-993301ca.js";

import {
    __tla as xe
} from "./throttle-1adeb119.js";

import {
    __tla as Ve
} from "./useUpload-b38510e8.js";

import {
    __tla as Ce
} from "./index-e75cf668.js";

let S, Ue = Promise.all([ (() => {
    try {
        return ne;
    } catch {}
})(), (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return fe;
    } catch {}
})(), (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})() ]).then(async () => {
    S = q({
        name: "InfraFile",
        __name: "index",
        setup(ze) {
            const g = A(), {
                t: T
            } = J(), y = c(!0), w = c(0), v = c([]), o = L({
                pageNo: 1,
                pageSize: 10,
                name: void 0,
                type: void 0,
                path: void 0,
                createTime: []
            }), b = c(), s = async () => {
                y.value = !0;
                try {
                    const r = await (_ = o, U.get({
                        url: "/infra/file/page",
                        params: _
                    }));
                    v.value = r.list, w.value = r.total;
                } finally {
                    y.value = !1;
                }
                var _;
            }, d = () => {
                o.pageNo = 1, s();
            }, D = () => {
                b.value.resetFields(), d();
            }, k = c(), F = () => {
                k.value.open();
            }, H = async _ => {
                try {
                    await g.delConfirm(), await (r => U.delete({
                        url: "/infra/file/delete?id=" + r
                    }))(_), g.success(T("common.delSuccess")), await s();
                } catch {}
            };
            return O(() => {
                s();
            }), (_, r) => {
                const P = ye, x = X, m = Z, Y = $, h = ee, f = ae, I = te, V = me, n = le, R = ce, C = se, E = re, K = pe, M = Q("hasPermi"), j = oe;
                return p(), B(W, null, [ e(P, {
                    title: "上传下载",
                    url: "https://doc.iocoder.cn/file/"
                }), e(V, null, {
                    default: t(() => [ e(I, {
                        class: "-mb-15px",
                        model: l(o),
                        ref_key: "queryFormRef",
                        ref: b,
                        inline: !0,
                        "label-width": "68px"
                    }, {
                        default: t(() => [ e(m, {
                            label: "文件路径",
                            prop: "path"
                        }, {
                            default: t(() => [ e(x, {
                                modelValue: l(o).path,
                                "onUpdate:modelValue": r[0] || (r[0] = a => l(o).path = a),
                                placeholder: "请输入文件路径",
                                clearable: "",
                                onKeyup: z(d, [ "enter" ])
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), e(m, {
                            label: "文件类型",
                            prop: "type",
                            width: "80"
                        }, {
                            default: t(() => [ e(x, {
                                modelValue: l(o).type,
                                "onUpdate:modelValue": r[1] || (r[1] = a => l(o).type = a),
                                placeholder: "请输入文件类型",
                                clearable: "",
                                onKeyup: z(d, [ "enter" ])
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), e(m, {
                            label: "创建时间",
                            prop: "createTime"
                        }, {
                            default: t(() => [ e(Y, {
                                modelValue: l(o).createTime,
                                "onUpdate:modelValue": r[2] || (r[2] = a => l(o).createTime = a),
                                "value-format": "YYYY-MM-DD HH:mm:ss",
                                type: "daterange",
                                "start-placeholder": "开始日期",
                                "end-placeholder": "结束日期",
                                "default-time": [ new Date("1 00:00:00"), new Date("1 23:59:59") ]
                            }, null, 8, [ "modelValue", "default-time" ]) ]),
                            _: 1
                        }), e(m, null, {
                            default: t(() => [ e(f, {
                                onClick: d
                            }, {
                                default: t(() => [ e(h, {
                                    icon: "ep:search",
                                    class: "mr-5px"
                                }), i(" 搜索") ]),
                                _: 1
                            }), e(f, {
                                onClick: D
                            }, {
                                default: t(() => [ e(h, {
                                    icon: "ep:refresh",
                                    class: "mr-5px"
                                }), i(" 重置") ]),
                                _: 1
                            }), e(f, {
                                type: "primary",
                                plain: "",
                                onClick: F
                            }, {
                                default: t(() => [ e(h, {
                                    icon: "ep:upload",
                                    class: "mr-5px"
                                }), i(" 上传文件 ") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }), e(V, null, {
                    default: t(() => [ N((p(), u(E, {
                        data: l(v)
                    }, {
                        default: t(() => [ e(n, {
                            label: "文件名",
                            align: "center",
                            prop: "name",
                            "show-overflow-tooltip": !0
                        }), e(n, {
                            label: "文件路径",
                            align: "center",
                            prop: "path",
                            "show-overflow-tooltip": !0
                        }), e(n, {
                            label: "URL",
                            align: "center",
                            prop: "url",
                            "show-overflow-tooltip": !0
                        }), e(n, {
                            label: "文件大小",
                            align: "center",
                            prop: "size",
                            width: "120",
                            formatter: l(G)
                        }, null, 8, [ "formatter" ]), e(n, {
                            label: "文件类型",
                            align: "center",
                            prop: "type",
                            width: "180px"
                        }), e(n, {
                            label: "文件内容",
                            align: "center",
                            prop: "url",
                            width: "110px"
                        }, {
                            default: t(({
                                row: a
                            }) => [ a.type.includes("image") ? (p(), u(R, {
                                key: 0,
                                class: "h-80px w-80px",
                                lazy: "",
                                src: a.url,
                                "preview-src-list": [ a.url ],
                                "preview-teleported": "",
                                fit: "cover"
                            }, null, 8, [ "src", "preview-src-list" ])) : a.type.includes("pdf") ? (p(), 
                            u(C, {
                                key: 1,
                                type: "primary",
                                href: a.url,
                                underline: !1,
                                target: "_blank"
                            }, {
                                default: t(() => [ i("预览") ]),
                                _: 2
                            }, 1032, [ "href" ])) : (p(), u(C, {
                                key: 2,
                                type: "primary",
                                download: "",
                                href: a.url,
                                underline: !1,
                                target: "_blank"
                            }, {
                                default: t(() => [ i("下载") ]),
                                _: 2
                            }, 1032, [ "href" ])) ]),
                            _: 1
                        }), e(n, {
                            label: "上传时间",
                            align: "center",
                            prop: "createTime",
                            width: "180",
                            formatter: l(ge)
                        }, null, 8, [ "formatter" ]), e(n, {
                            label: "操作",
                            align: "center"
                        }, {
                            default: t(a => [ N((p(), u(f, {
                                link: "",
                                type: "danger",
                                onClick: Ne => H(a.row.id)
                            }, {
                                default: t(() => [ i(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ M, [ "infra:config:delete" ] ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ j, l(y) ] ]), e(K, {
                        total: l(w),
                        page: l(o).pageNo,
                        "onUpdate:page": r[3] || (r[3] = a => l(o).pageNo = a),
                        limit: l(o).pageSize,
                        "onUpdate:limit": r[4] || (r[4] = a => l(o).pageSize = a),
                        onPagination: s
                    }, null, 8, [ "total", "page", "limit" ]) ]),
                    _: 1
                }), e(ve, {
                    ref_key: "formRef",
                    ref: k,
                    onSuccess: s
                }, null, 512) ], 64);
            };
        }
    });
});

export {
    Ue as __tla,
    S as default
};