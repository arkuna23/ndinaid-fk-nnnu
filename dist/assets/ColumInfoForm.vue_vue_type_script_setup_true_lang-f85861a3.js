import {
    d as h,
    r as s,
    w as y,
    f as g,
    o as i,
    C as V,
    l as t,
    k as l,
    c as T,
    y as O,
    a as w,
    F as E,
    ad as C,
    P as I,
    ab as x,
    ac as B,
    a8 as D,
    ae as L,
    __tla as j
} from "./index-6c08ea4c.js";

import {
    g as F,
    __tla as k
} from "./dict.type-16d98778.js";

let f, N = Promise.all([ (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})() ]).then(async () => {
    f = h({
        name: "InfraCodegenColumInfoForm",
        __name: "ColumInfoForm",
        props: {
            columns: {
                type: Array,
                default: () => null
            }
        },
        setup(v) {
            const c = v, p = s([]), _ = document.documentElement.scrollHeight - 350 + "px", b = s();
            return y(() => c.columns, m => {
                m && (p.value = m);
            }, {
                deep: !0,
                immediate: !0
            }), g(async () => {
                await (async () => {
                    b.value = await F();
                })();
            }), (m, K) => {
                const u = C, r = I, o = x, n = B, d = D, U = L;
                return i(), V(U, {
                    ref: "dragTable",
                    data: w(p),
                    "max-height": _,
                    "row-key": "columnId"
                }, {
                    default: t(() => [ l(u, {
                        "show-overflow-tooltip": !0,
                        label: "字段列名",
                        "min-width": "10%",
                        prop: "columnName"
                    }), l(u, {
                        label: "字段描述",
                        "min-width": "10%"
                    }, {
                        default: t(e => [ l(r, {
                            modelValue: e.row.columnComment,
                            "onUpdate:modelValue": a => e.row.columnComment = a
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        "show-overflow-tooltip": !0,
                        label: "物理类型",
                        "min-width": "10%",
                        prop: "dataType"
                    }), l(u, {
                        label: "Java类型",
                        "min-width": "11%"
                    }, {
                        default: t(e => [ l(n, {
                            modelValue: e.row.javaType,
                            "onUpdate:modelValue": a => e.row.javaType = a
                        }, {
                            default: t(() => [ l(o, {
                                label: "Long",
                                value: "Long"
                            }), l(o, {
                                label: "String",
                                value: "String"
                            }), l(o, {
                                label: "Integer",
                                value: "Integer"
                            }), l(o, {
                                label: "Double",
                                value: "Double"
                            }), l(o, {
                                label: "BigDecimal",
                                value: "BigDecimal"
                            }), l(o, {
                                label: "LocalDateTime",
                                value: "LocalDateTime"
                            }), l(o, {
                                label: "Boolean",
                                value: "Boolean"
                            }) ]),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "java属性",
                        "min-width": "10%"
                    }, {
                        default: t(e => [ l(r, {
                            modelValue: e.row.javaField,
                            "onUpdate:modelValue": a => e.row.javaField = a
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "插入",
                        "min-width": "4%"
                    }, {
                        default: t(e => [ l(d, {
                            modelValue: e.row.createOperation,
                            "onUpdate:modelValue": a => e.row.createOperation = a,
                            "false-label": "false",
                            "true-label": "true"
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "编辑",
                        "min-width": "4%"
                    }, {
                        default: t(e => [ l(d, {
                            modelValue: e.row.updateOperation,
                            "onUpdate:modelValue": a => e.row.updateOperation = a,
                            "false-label": "false",
                            "true-label": "true"
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "列表",
                        "min-width": "4%"
                    }, {
                        default: t(e => [ l(d, {
                            modelValue: e.row.listOperationResult,
                            "onUpdate:modelValue": a => e.row.listOperationResult = a,
                            "false-label": "false",
                            "true-label": "true"
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "查询",
                        "min-width": "4%"
                    }, {
                        default: t(e => [ l(d, {
                            modelValue: e.row.listOperation,
                            "onUpdate:modelValue": a => e.row.listOperation = a,
                            "false-label": "false",
                            "true-label": "true"
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "查询方式",
                        "min-width": "10%"
                    }, {
                        default: t(e => [ l(n, {
                            modelValue: e.row.listOperationCondition,
                            "onUpdate:modelValue": a => e.row.listOperationCondition = a
                        }, {
                            default: t(() => [ l(o, {
                                label: "=",
                                value: "="
                            }), l(o, {
                                label: "!=",
                                value: "!="
                            }), l(o, {
                                label: ">",
                                value: ">"
                            }), l(o, {
                                label: ">=",
                                value: ">="
                            }), l(o, {
                                label: "<",
                                value: "<>"
                            }), l(o, {
                                label: "<=",
                                value: "<="
                            }), l(o, {
                                label: "LIKE",
                                value: "LIKE"
                            }), l(o, {
                                label: "BETWEEN",
                                value: "BETWEEN"
                            }) ]),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "允许空",
                        "min-width": "5%"
                    }, {
                        default: t(e => [ l(d, {
                            modelValue: e.row.nullable,
                            "onUpdate:modelValue": a => e.row.nullable = a,
                            "false-label": "false",
                            "true-label": "true"
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "显示类型",
                        "min-width": "12%"
                    }, {
                        default: t(e => [ l(n, {
                            modelValue: e.row.htmlType,
                            "onUpdate:modelValue": a => e.row.htmlType = a
                        }, {
                            default: t(() => [ l(o, {
                                label: "文本框",
                                value: "input"
                            }), l(o, {
                                label: "文本域",
                                value: "textarea"
                            }), l(o, {
                                label: "下拉框",
                                value: "select"
                            }), l(o, {
                                label: "单选框",
                                value: "radio"
                            }), l(o, {
                                label: "复选框",
                                value: "checkbox"
                            }), l(o, {
                                label: "日期控件",
                                value: "datetime"
                            }), l(o, {
                                label: "图片上传",
                                value: "imageUpload"
                            }), l(o, {
                                label: "文件上传",
                                value: "fileUpload"
                            }), l(o, {
                                label: "富文本控件",
                                value: "editor"
                            }) ]),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "字典类型",
                        "min-width": "12%"
                    }, {
                        default: t(e => [ l(n, {
                            modelValue: e.row.dictType,
                            "onUpdate:modelValue": a => e.row.dictType = a,
                            clearable: "",
                            filterable: "",
                            placeholder: "请选择"
                        }, {
                            default: t(() => [ (i(!0), T(E, null, O(w(b), a => (i(), 
                            V(o, {
                                key: a.id,
                                label: a.name,
                                value: a.type
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "示例",
                        "min-width": "10%"
                    }, {
                        default: t(e => [ l(r, {
                            modelValue: e.row.example,
                            "onUpdate:modelValue": a => e.row.example = a
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "data" ]);
            };
        }
    });
});

export {
    f as _,
    N as __tla
};