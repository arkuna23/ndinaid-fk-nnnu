import {
    r as h,
    U as F,
    f as te,
    w as de,
    o as V,
    c as y,
    t as i,
    F as ie,
    y as re,
    z as se,
    B as O,
    A as R,
    C as U,
    l as o,
    k as l,
    H as E,
    v as m,
    ad as ne,
    J as pe,
    ae as ce,
    P as me,
    O as ue,
    Q as fe,
    aU as he,
    bp as we,
    bq as ge,
    a9 as be,
    R as Ce,
    S as ve,
    __tla as Ve
} from "./index-6c08ea4c.js";

import {
    _ as _e
} from "./_plugin-vue_export-helper-1b428a4d.js";

let B, ke = Promise.all([ (() => {
    try {
        return Ve;
    } catch {}
})() ]).then(async () => {
    const I = {
        name: "BaseInfo",
        props: {
            pipeConfig: {
                type: Object,
                default: () => ({})
            }
        },
        setup(w) {
            const t = h(0), D = F([ "变量", "缓存" ]), e = h(!1), k = h(!1), x = h(""), s = h(""), u = h(null), T = h(null), C = h(!1), c = F({
                data: []
            }), g = d => {
                d === "var" ? (p.form.name = "", p.form.default = "", p.form.description = "") : d === "cache" && (r.form.name = "", 
                r.form.description = "");
            };
            let n = h(0);
            const b = h(0);
            let f = F({
                data: {}
            }), p = F({
                form: {
                    name: "",
                    type: "string",
                    description: ""
                }
            }), a = F({
                data: {}
            }), r = F({
                form: {
                    name: "",
                    description: "",
                    optional: !0
                }
            });
            return te(() => {
                a.data = w.pipeConfig.spec.workspaces, f.data = w.pipeConfig.spec.params, 
                c.data = f.data;
            }), de(() => w.pipeConfig, d => {
                a.data = d.spec.workspaces, f.data = d.spec.params;
            }, {
                deep: !0
            }), {
                pipelineConfig: D,
                dialogVisibleOne: e,
                dialogVisibleTwo: k,
                dialogTitleOne: x,
                dialogTitleTwo: s,
                editFormRefOne: u,
                editFormRefTwo: T,
                editFormOne: p,
                editFormTwo: r,
                editRulesOne: {
                    name: [ {
                        required: !0,
                        message: "请输入名称",
                        trigger: "blur"
                    } ],
                    default: [ {
                        required: !0,
                        message: "请输入默认值",
                        trigger: "blur"
                    } ]
                },
                editRulesTwo: {
                    name: [ {
                        required: !0,
                        message: "请输入名称",
                        trigger: "blur"
                    } ]
                },
                closeEditVar: () => {
                    e.value = !1, g("var");
                },
                closeEditCache: () => {
                    k.value = !1, g("cache");
                },
                toCreateOne: () => {
                    e.value = !0, n.value = 0, x.value = "新建变量";
                },
                toCreateTwo: () => {
                    k.value = !0, s.value = "新建缓存", n.value = 0;
                },
                clearDialog: g,
                currentRow: b,
                editStatus: n,
                toEditVar: (d, v) => {
                    e.value = !0, x.value = "编辑变量", n.value = 1, b.value = v, p.form.name = d.name, 
                    p.form.default = d.default, p.form.description = d.description;
                },
                submitEditVar: () => {
                    e.value = !1, n.value === 0 ? f.data.push({
                        ...p.form
                    }) : n.value === 1 && (f.data[b.value] = {
                        ...p.form
                    }), g("var");
                },
                handleDeleteVar: (d, v) => {
                    f.data.splice(v, 1);
                },
                toEditCache: (d, v) => {
                    k.value = !0, s.value = "编辑缓存", n.value = 1, b.value = v, r.form.name = d.name, 
                    r.form.description = d.description;
                },
                submitEditCache: () => {
                    k.value = !1, n.value === 0 ? a.data.push({
                        ...r.form
                    }) : n.value === 1 && (a.data[b.value] = {
                        ...r.form
                    }), g("cache");
                },
                handleDeleteCache: d => {
                    a.data.forEach((v, oe) => {
                        v === d && a.data.splice(oe, 1);
                    });
                },
                tableloading: C,
                tableData: c,
                hanldeClick: d => {
                    t.value = d, d === 0 ? c.data = f.data : d === 1 && (c.data = a.data);
                },
                activeIndex: t,
                varDatas: f,
                cacheDatas: a
            };
        }
    }, _ = w => (Ce("data-v-30d04463"), w = w(), ve(), w), q = {
        class: "baseInfo"
    }, $ = {
        id: "tabContentBox"
    }, z = {
        id: "left",
        class: "cardBasic l pa-5"
    }, P = {
        class: "BtnBox"
    }, S = [ "onClick" ], j = {
        id: "rightContent"
    }, A = {
        key: 0
    }, H = _(() => i("p", {
        class: "title"
    }, "变量", -1)), J = _(() => i("p", {
        class: "dec"
    }, " 通过定义环境变量实现流水线过程定制化，可以在执行过程的任何阶段使用这些变量。 ", -1)), Q = {
        class: "search"
    }, G = _(() => i("span", {
        class: "title"
    }, null, -1)), K = {
        class: "right"
    }, L = {
        key: 1
    }, M = _(() => i("p", {
        class: "title"
    }, "缓存", -1)), N = _(() => i("p", {
        class: "dec"
    }, " Flow 会将不同任务工作区缓存目录下的构建依赖分别进行缓存，下次该任务执行时可快速下载缓存，以提高整体构建速度。 ", -1)), W = {
        class: "search"
    }, X = _(() => i("span", {
        class: "title"
    }, null, -1)), Y = {
        class: "right"
    }, Z = {
        class: "el-dialog__title"
    }, ee = {
        class: "dialog-footer"
    }, ae = {
        style: {
            "font-size": "18px",
            color: "#3d3d3d"
        }
    }, le = {
        class: "dialog-footer"
    };
    B = _e(I, [ [ "render", function(w, t, D, e, k, x) {
        const s = ne, u = pe, T = ce, C = me, c = ue, g = fe, n = he, b = we, f = ge, p = be;
        return V(), y("div", q, [ i("section", $, [ i("div", z, [ i("ul", P, [ (V(!0), 
        y(ie, null, re(e.pipelineConfig, (a, r) => (V(), y("li", {
            key: r,
            class: se({
                active: e.activeIndex === r
            }),
            onClick: d => e.hanldeClick(r)
        }, O(a), 11, S))), 128)) ]) ]), i("div", j, [ e.activeIndex === 0 ? (V(), 
        y("div", A, [ H, J, i("div", Q, [ G, i("div", K, [ i("span", {
            class: "action addVar",
            onClick: t[0] || (t[0] = a => e.toCreateOne())
        }, "+ 新建变量") ]) ]), R((V(), U(T, {
            style: {
                "margin-top": "10px"
            },
            data: e.tableData.data,
            "highlight-current-row": "",
            "header-cell-style": {
                background: "#F6F8FD"
            },
            "tooltip-effect": "light"
        }, {
            default: o(() => [ l(s, {
                prop: "name",
                label: "变量名称",
                "min-width": "150",
                "show-overflow-tooltip": !0
            }), l(s, {
                prop: "default",
                label: "默认值",
                "min-width": "150"
            }), l(s, {
                prop: "description",
                label: "描述",
                "min-width": "150"
            }), l(s, {
                label: "操作",
                fixed: "right",
                width: "180",
                align: "center"
            }, {
                default: o(a => [ l(u, {
                    type: "primary",
                    text: "",
                    onClick: E(r => e.toEditVar(a.row, a.$index), [ "stop" ])
                }, {
                    default: o(() => [ m(" 编辑 ") ]),
                    _: 2
                }, 1032, [ "onClick" ]), l(u, {
                    type: "danger",
                    text: "",
                    onClick: E(r => e.handleDeleteVar(a.row, a.$index), [ "stop" ])
                }, {
                    default: o(() => [ m(" 删除 ") ]),
                    _: 2
                }, 1032, [ "onClick" ]) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "data" ])), [ [ p, e.tableloading ] ]) ])) : (V(), y("div", L, [ M, N, i("div", W, [ X, i("div", Y, [ i("span", {
            class: "action addVar",
            onClick: t[1] || (t[1] = a => e.toCreateTwo())
        }, "+ 新建缓存") ]) ]), R((V(), U(T, {
            style: {
                "margin-top": "10px"
            },
            data: e.tableData.data,
            "highlight-current-row": "",
            "header-cell-style": {
                background: "#F6F8FD"
            },
            "tooltip-effect": "light"
        }, {
            default: o(() => [ l(s, {
                prop: "name",
                label: "缓存名称",
                "min-width": "150",
                "show-overflow-tooltip": !0
            }), l(s, {
                prop: "description",
                label: "描述",
                "min-width": "150"
            }), l(s, {
                prop: "optional",
                label: "是否必填",
                "min-width": "150"
            }, {
                default: o(a => [ m(O(a.row.optional ? "是" : "否"), 1) ]),
                _: 1
            }), l(s, {
                label: "操作",
                fixed: "right",
                width: "180",
                align: "center"
            }, {
                default: o(a => [ l(u, {
                    type: "primary",
                    text: "",
                    onClick: E(r => e.toEditCache(a.row, a.$index), [ "stop" ])
                }, {
                    default: o(() => [ m(" 编辑 ") ]),
                    _: 2
                }, 1032, [ "onClick" ]), l(u, {
                    type: "danger",
                    text: "",
                    onClick: E(r => e.handleDeleteCache(a.row), [ "stop" ])
                }, {
                    default: o(() => [ m(" 删除 ") ]),
                    _: 2
                }, 1032, [ "onClick" ]) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "data" ])), [ [ p, e.tableloading ] ]) ])) ]) ]), l(n, {
            title: "变量",
            modelValue: e.dialogVisibleOne,
            "onUpdate:modelValue": t[5] || (t[5] = a => e.dialogVisibleOne = a),
            width: "480px",
            onClose: e.closeEditVar,
            "close-on-click-modal": !1
        }, {
            header: o(() => [ i("span", Z, O(e.dialogTitleOne), 1) ]),
            footer: o(() => [ i("span", ee, [ l(u, {
                onClick: e.closeEditVar
            }, {
                default: o(() => [ m("取消") ]),
                _: 1
            }, 8, [ "onClick" ]), l(u, {
                type: "primary",
                disabled: e.editFormOne.form.name === "" || e.editFormOne.form.default === "",
                onClick: e.submitEditVar
            }, {
                default: o(() => [ m(" 确认 ") ]),
                _: 1
            }, 8, [ "disabled", "onClick" ]) ]) ]),
            default: o(() => [ l(g, {
                ref: "editFormRefOne",
                model: e.editFormOne.form,
                rules: e.editRulesOne,
                "label-width": "120px",
                class: "neu"
            }, {
                default: o(() => [ l(c, {
                    label: "名称",
                    prop: "name"
                }, {
                    default: o(() => [ l(C, {
                        modelValue: e.editFormOne.form.name,
                        "onUpdate:modelValue": t[2] || (t[2] = a => e.editFormOne.form.name = a),
                        style: {
                            width: "500px"
                        }
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }), l(c, {
                    label: "默认值",
                    prop: "default"
                }, {
                    default: o(() => [ l(C, {
                        modelValue: e.editFormOne.form.default,
                        "onUpdate:modelValue": t[3] || (t[3] = a => e.editFormOne.form.default = a),
                        style: {
                            width: "500px"
                        }
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }), l(c, {
                    label: "描述",
                    prop: "description"
                }, {
                    default: o(() => [ l(C, {
                        modelValue: e.editFormOne.form.description,
                        "onUpdate:modelValue": t[4] || (t[4] = a => e.editFormOne.form.description = a),
                        style: {
                            width: "500px"
                        }
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }) ]),
                _: 1
            }, 8, [ "model", "rules" ]) ]),
            _: 1
        }, 8, [ "modelValue", "onClose" ]), l(n, {
            title: "缓存",
            modelValue: e.dialogVisibleTwo,
            "onUpdate:modelValue": t[9] || (t[9] = a => e.dialogVisibleTwo = a),
            width: "480px",
            onClose: e.closeEditCache,
            "close-on-click-modal": !1
        }, {
            header: o(() => [ i("span", ae, O(e.dialogTitleTwo), 1) ]),
            footer: o(() => [ i("span", le, [ l(u, {
                onClick: e.closeEditCache
            }, {
                default: o(() => [ m("取消") ]),
                _: 1
            }, 8, [ "onClick" ]), l(u, {
                type: "primary",
                disabled: e.editFormTwo.form.name === "",
                onClick: e.submitEditCache
            }, {
                default: o(() => [ m(" 确认 ") ]),
                _: 1
            }, 8, [ "disabled", "onClick" ]) ]) ]),
            default: o(() => [ l(g, {
                ref: "editFormRefTwo",
                model: e.editFormTwo.form,
                rules: e.editRulesTwo,
                "label-width": "120px",
                class: "neu"
            }, {
                default: o(() => [ l(c, {
                    label: "名称",
                    prop: "name"
                }, {
                    default: o(() => [ l(C, {
                        modelValue: e.editFormTwo.form.name,
                        "onUpdate:modelValue": t[6] || (t[6] = a => e.editFormTwo.form.name = a),
                        style: {
                            width: "500px"
                        }
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }), l(c, {
                    label: "描述",
                    prop: "description"
                }, {
                    default: o(() => [ l(C, {
                        modelValue: e.editFormTwo.form.description,
                        "onUpdate:modelValue": t[7] || (t[7] = a => e.editFormTwo.form.description = a),
                        style: {
                            width: "500px"
                        }
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }), l(c, {
                    label: "是否必填",
                    prop: "optional"
                }, {
                    default: o(() => [ l(f, {
                        modelValue: e.editFormTwo.form.optional,
                        "onUpdate:modelValue": t[8] || (t[8] = a => e.editFormTwo.form.optional = a),
                        style: {
                            width: "500px"
                        }
                    }, {
                        default: o(() => [ l(b, {
                            label: !0
                        }, {
                            default: o(() => [ m("是") ]),
                            _: 1
                        }), l(b, {
                            label: !1
                        }, {
                            default: o(() => [ m("否") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }) ]),
                _: 1
            }, 8, [ "model", "rules" ]) ]),
            _: 1
        }, 8, [ "modelValue", "onClose" ]) ]);
    } ], [ "__scopeId", "data-v-30d04463" ] ]);
});

export {
    ke as __tla,
    B as default
};