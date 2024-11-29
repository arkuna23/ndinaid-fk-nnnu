import {
    d as z,
    r as T,
    U as B,
    w as H,
    f as X,
    a as t,
    o,
    C as f,
    l as e,
    k as l,
    c as v,
    y as C,
    F as I,
    t as p,
    v as s,
    D as P,
    p as Z,
    ab as $,
    ac as ee,
    O as le,
    av as ae,
    _ as te,
    K as ne,
    P as ue,
    J as oe,
    aw as de,
    bp as se,
    bq as me,
    Q as pe,
    __tla as re
} from "./index-6c08ea4c.js";

import {
    b as U,
    D as E,
    __tla as _e
} from "./dict-c5825220.js";

import {
    h as ce
} from "./tree-05ea8e09.js";

import {
    a as fe,
    __tla as ie
} from "./index-7fb09ff8.js";

import {
    g as be,
    __tla as ye
} from "./index-70ef8e51.js";

import {
    r,
    __tla as Ve
} from "./formRules-e114368a.js";

import {
    E as ve,
    __tla as Ce
} from "./index-ef4d146e.js";

import {
    a as Ie,
    b as Ne,
    E as he,
    __tla as Te
} from "./index-5adb716b.js";

let G, ke = Promise.all([ (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})() ]).then(async () => {
    let g, q, J;
    g = p("i", {
        class: "el-icon-arrow-down el-icon--right"
    }, null, -1), q = p("h4", {
        class: "form-header"
    }, "树表信息", -1), J = p("h4", {
        class: "form-header"
    }, "主表信息", -1), G = z({
        name: "InfraCodegenGenerateInfoForm",
        __name: "GenerateInfoForm",
        props: {
            table: {
                type: Object,
                default: () => null
            },
            columns: {
                type: Array,
                default: () => null
            }
        },
        setup(O, {
            expose: S
        }) {
            Z();
            const h = O, M = T(), n = T({
                templateType: null,
                frontType: null,
                scene: null,
                moduleName: "",
                businessName: "",
                className: "",
                classComment: "",
                parentMenuId: null,
                genPath: "",
                genType: "",
                masterTableId: void 0,
                subJoinColumnId: void 0,
                subJoinMany: void 0,
                treeParentColumnId: void 0,
                treeNameColumnId: void 0
            }), A = B({
                templateType: [ r ],
                frontType: [ r ],
                scene: [ r ],
                moduleName: [ r ],
                businessName: [ r ],
                businessPackage: [ r ],
                className: [ r ],
                classComment: [ r ],
                masterTableId: [ r ],
                subJoinColumnId: [ r ],
                subJoinMany: [ r ],
                treeParentColumnId: [ r ],
                treeNameColumnId: [ r ]
            }), w = T([]), D = T([]), R = {
                label: "name"
            };
            return H(() => h.table, async i => {
                i && (n.value = i, i.dataSourceConfigId >= 0 && (w.value = await fe(n.value.dataSourceConfigId)));
            }, {
                deep: !0,
                immediate: !0
            }), X(async () => {
                try {
                    const i = await be();
                    D.value = ce(i);
                } catch {}
            }), S({
                validate: async () => {
                    var i;
                    return (i = t(M)) == null ? void 0 : i.validate();
                }
            }), (i, u) => {
                const b = $, y = ee, m = le, d = ae, _ = te, c = ne, x = ve, N = ue, Y = oe, j = Ie, K = Ne, L = he, k = de, F = se, Q = me, W = pe;
                return o(), f(W, {
                    ref_key: "formRef",
                    ref: M,
                    model: t(n),
                    rules: t(A),
                    "label-width": "150px"
                }, {
                    default: e(() => [ l(k, null, {
                        default: e(() => [ l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                label: "生成模板",
                                prop: "templateType"
                            }, {
                                default: e(() => [ l(y, {
                                    modelValue: t(n).templateType,
                                    "onUpdate:modelValue": u[0] || (u[0] = a => t(n).templateType = a)
                                }, {
                                    default: e(() => [ (o(!0), v(I, null, C(t(U)(t(E).INFRA_CODEGEN_TEMPLATE_TYPE), a => (o(), 
                                    f(b, {
                                        key: a.value,
                                        label: a.label,
                                        value: a.value
                                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                label: "前端类型",
                                prop: "frontType"
                            }, {
                                default: e(() => [ l(y, {
                                    modelValue: t(n).frontType,
                                    "onUpdate:modelValue": u[1] || (u[1] = a => t(n).frontType = a)
                                }, {
                                    default: e(() => [ (o(!0), v(I, null, C(t(U)(t(E).INFRA_CODEGEN_FRONT_TYPE), a => (o(), 
                                    f(b, {
                                        key: a.value,
                                        label: a.label,
                                        value: a.value
                                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                label: "生成场景",
                                prop: "scene"
                            }, {
                                default: e(() => [ l(y, {
                                    modelValue: t(n).scene,
                                    "onUpdate:modelValue": u[2] || (u[2] = a => t(n).scene = a)
                                }, {
                                    default: e(() => [ (o(!0), v(I, null, C(t(U)(t(E).INFRA_CODEGEN_SCENE), a => (o(), 
                                    f(b, {
                                        key: a.value,
                                        label: a.label,
                                        value: a.value
                                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, null, {
                                label: e(() => [ p("span", null, [ s(" 上级菜单 "), l(c, {
                                    content: "分配到指定菜单下，例如 系统管理",
                                    placement: "top"
                                }, {
                                    default: e(() => [ l(_, {
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: e(() => [ l(x, {
                                    modelValue: t(n).parentMenuId,
                                    "onUpdate:modelValue": u[3] || (u[3] = a => t(n).parentMenuId = a),
                                    data: t(D),
                                    props: R,
                                    "check-strictly": "",
                                    "node-key": "id",
                                    placeholder: "请选择系统菜单"
                                }, null, 8, [ "modelValue", "data" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                prop: "moduleName"
                            }, {
                                label: e(() => [ p("span", null, [ s(" 模块名 "), l(c, {
                                    content: "模块名，即一级目录，例如 system、infra、tool 等等",
                                    placement: "top"
                                }, {
                                    default: e(() => [ l(_, {
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: e(() => [ l(N, {
                                    modelValue: t(n).moduleName,
                                    "onUpdate:modelValue": u[4] || (u[4] = a => t(n).moduleName = a)
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                prop: "businessName"
                            }, {
                                label: e(() => [ p("span", null, [ s(" 业务名 "), l(c, {
                                    content: "业务名，即二级目录，例如 user、permission、dict 等等",
                                    placement: "top"
                                }, {
                                    default: e(() => [ l(_, {
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: e(() => [ l(N, {
                                    modelValue: t(n).businessName,
                                    "onUpdate:modelValue": u[5] || (u[5] = a => t(n).businessName = a)
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                prop: "className"
                            }, {
                                label: e(() => [ p("span", null, [ s(" 类名称 "), l(c, {
                                    content: "类名称（首字母大写），例如SysUser、SysMenu、SysDictData 等等",
                                    placement: "top"
                                }, {
                                    default: e(() => [ l(_, {
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: e(() => [ l(N, {
                                    modelValue: t(n).className,
                                    "onUpdate:modelValue": u[6] || (u[6] = a => t(n).className = a)
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                prop: "classComment"
                            }, {
                                label: e(() => [ p("span", null, [ s(" 类描述 "), l(c, {
                                    content: "用作类描述，例如 用户",
                                    placement: "top"
                                }, {
                                    default: e(() => [ l(_, {
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: e(() => [ l(N, {
                                    modelValue: t(n).classComment,
                                    "onUpdate:modelValue": u[7] || (u[7] = a => t(n).classComment = a)
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), t(n).genType === "1" ? (o(), f(d, {
                            key: 0,
                            span: 24
                        }, {
                            default: e(() => [ l(m, {
                                prop: "genPath"
                            }, {
                                label: e(() => [ p("span", null, [ s(" 自定义路径 "), l(c, {
                                    content: "填写磁盘绝对路径，若不填写，则生成到当前Web项目下",
                                    placement: "top"
                                }, {
                                    default: e(() => [ l(_, {
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: e(() => [ l(N, {
                                    modelValue: t(n).genPath,
                                    "onUpdate:modelValue": u[9] || (u[9] = a => t(n).genPath = a)
                                }, {
                                    append: e(() => [ l(L, null, {
                                        dropdown: e(() => [ l(K, null, {
                                            default: e(() => [ l(j, {
                                                onClick: u[8] || (u[8] = a => t(n).genPath = "/")
                                            }, {
                                                default: e(() => [ s(" 恢复默认的生成基础路径 ") ]),
                                                _: 1
                                            }) ]),
                                            _: 1
                                        }) ]),
                                        default: e(() => [ l(Y, {
                                            type: "primary"
                                        }, {
                                            default: e(() => [ s(" 最近路径快速选择 "), g ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        })) : P("", !0) ]),
                        _: 1
                    }), t(n).templateType == 2 ? (o(), f(k, {
                        key: 0
                    }, {
                        default: e(() => [ l(d, {
                            span: 24
                        }, {
                            default: e(() => [ q ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                prop: "treeParentColumnId"
                            }, {
                                label: e(() => [ p("span", null, [ s(" 父编号字段 "), l(c, {
                                    content: "树显示的父编码字段名， 如：parent_Id",
                                    placement: "top"
                                }, {
                                    default: e(() => [ l(_, {
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: e(() => [ l(y, {
                                    modelValue: t(n).treeParentColumnId,
                                    "onUpdate:modelValue": u[10] || (u[10] = a => t(n).treeParentColumnId = a),
                                    placeholder: "请选择"
                                }, {
                                    default: e(() => [ (o(!0), v(I, null, C(h.columns, (a, V) => (o(), 
                                    f(b, {
                                        key: V,
                                        label: a.columnName + "：" + a.columnComment,
                                        value: a.id
                                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                prop: "treeNameColumnId"
                            }, {
                                label: e(() => [ p("span", null, [ s(" 树名称字段 "), l(c, {
                                    content: "树节点的显示名称字段名， 如：dept_name",
                                    placement: "top"
                                }, {
                                    default: e(() => [ l(_, {
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: e(() => [ l(y, {
                                    modelValue: t(n).treeNameColumnId,
                                    "onUpdate:modelValue": u[11] || (u[11] = a => t(n).treeNameColumnId = a),
                                    placeholder: "请选择"
                                }, {
                                    default: e(() => [ (o(!0), v(I, null, C(h.columns, (a, V) => (o(), 
                                    f(b, {
                                        key: V,
                                        label: a.columnName + "：" + a.columnComment,
                                        value: a.id
                                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    })) : P("", !0), t(n).templateType == 15 ? (o(), f(k, {
                        key: 1
                    }, {
                        default: e(() => [ l(d, {
                            span: 24
                        }, {
                            default: e(() => [ J ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                prop: "masterTableId"
                            }, {
                                label: e(() => [ p("span", null, [ s(" 关联的主表 "), l(c, {
                                    content: "关联主表（父表）的表名， 如：system_user",
                                    placement: "top"
                                }, {
                                    default: e(() => [ l(_, {
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: e(() => [ l(y, {
                                    modelValue: t(n).masterTableId,
                                    "onUpdate:modelValue": u[12] || (u[12] = a => t(n).masterTableId = a),
                                    placeholder: "请选择"
                                }, {
                                    default: e(() => [ (o(!0), v(I, null, C(t(w), (a, V) => (o(), 
                                    f(b, {
                                        key: V,
                                        label: a.tableName + "：" + a.tableComment,
                                        value: a.id
                                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                prop: "subJoinColumnId"
                            }, {
                                label: e(() => [ p("span", null, [ s(" 子表关联的字段 "), l(c, {
                                    content: "子表关联的字段， 如：user_id",
                                    placement: "top"
                                }, {
                                    default: e(() => [ l(_, {
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: e(() => [ l(y, {
                                    modelValue: t(n).subJoinColumnId,
                                    "onUpdate:modelValue": u[13] || (u[13] = a => t(n).subJoinColumnId = a),
                                    placeholder: "请选择"
                                }, {
                                    default: e(() => [ (o(!0), v(I, null, C(h.columns, (a, V) => (o(), 
                                    f(b, {
                                        key: V,
                                        label: a.columnName + "：" + a.columnComment,
                                        value: a.id
                                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), l(d, {
                            span: 12
                        }, {
                            default: e(() => [ l(m, {
                                prop: "subJoinMany"
                            }, {
                                label: e(() => [ p("span", null, [ s(" 关联关系 "), l(c, {
                                    content: "主表与子表的关联关系",
                                    placement: "top"
                                }, {
                                    default: e(() => [ l(_, {
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: e(() => [ l(Q, {
                                    modelValue: t(n).subJoinMany,
                                    "onUpdate:modelValue": u[14] || (u[14] = a => t(n).subJoinMany = a),
                                    placeholder: "请选择"
                                }, {
                                    default: e(() => [ l(F, {
                                        label: !0
                                    }, {
                                        default: e(() => [ s("一对多") ]),
                                        _: 1
                                    }), l(F, {
                                        label: !1
                                    }, {
                                        default: e(() => [ s("一对一") ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    })) : P("", !0) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    });
});

export {
    G as _,
    ke as __tla
};