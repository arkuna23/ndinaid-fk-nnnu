import {
    p as se,
    aa as oe,
    r as l,
    U as ce,
    e as ie,
    f as ne,
    j as _e,
    o as _,
    c as pe,
    k as t,
    l as r,
    t as D,
    a as o,
    A as p,
    C as m,
    v as y,
    D as ue,
    m as me,
    F as de,
    _ as fe,
    J as ye,
    ad as he,
    ak as ve,
    ae as we,
    a9 as ke,
    __tla as be
} from "./index-6c08ea4c.js";

import {
    _ as ge,
    __tla as xe
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Ce,
    __tla as Se
} from "./index-e2094cc0.js";

import {
    _ as Le,
    __tla as Ae
} from "./index-8b41572c.js";

import {
    _ as Re,
    __tla as Te
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as ze,
    __tla as Me
} from "./index-1024512a.js";

import {
    b as Oe,
    D as G,
    __tla as je
} from "./dict-c5825220.js";

import {
    d as Ee,
    __tla as Ve
} from "./formatTime-de6f1520.js";

import {
    h as De
} from "./tree-05ea8e09.js";

import {
    m as I,
    n as U,
    o as Ge,
    c as Ie,
    __tla as Ue
} from "./index-7c75bd27.js";

import $e, {
    __tla as Be
} from "./DeptForm-85ebf81f.js";

import Fe, {
    __tla as He
} from "./ImportDept-0c153aa0.js";

import Je, {
    __tla as Pe
} from "./TypeSetting-f2cb8c64.js";

import Ne, {
    __tla as Ye
} from "./DeptTag-1be092ce.js";

import {
    _ as qe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

import {
    __tla as Ke
} from "./index-ef4d146e.js";

import {
    __tla as Qe
} from "./index-d195df69.js";

import "./constants-528bd83f.js";

import {
    __tla as We
} from "./index-13c88727.js";

import {
    __tla as Xe
} from "./file-e038b35d.js";

import {
    __tla as Ze
} from "./ErrorDialog-c4a6df45.js";

import {
    __tla as et
} from "./index-c4ca0ced.js";

import {
    __tla as tt
} from "./index-993301ca.js";

let $, at = Promise.all([ (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return et;
    } catch {}
})(), (() => {
    try {
        return tt;
    } catch {}
})() ]).then(async () => {
    let A, R;
    A = {
        class: "top-box"
    }, R = {
        class: "right btns-box header-btns pt-1"
    }, $ = qe(Object.assign({
        name: "SystemDept"
    }, {
        __name: "index",
        setup(lt) {
            const i = se(), {
                t: T
            } = oe(), b = l(!0), v = l([]);
            ce({}), l();
            const B = l(!1), z = l([]), F = l(!0), g = l([]), w = l(!1), x = l(), h = l([]), M = l({
                name: void 0,
                status: void 0
            }), H = ie(() => [ {
                label: "组织类别",
                key: "tagCode",
                type: "list",
                options: g.value.filter(e => e.code !== "000000").map(e => ({
                    label: e.name,
                    value: e.code
                }))
            }, {
                label: "组织状态",
                key: "status",
                type: "list",
                options: Oe(G.COMMON_START_STATUS)
            } ]);
            function J(e) {
                M.value = e, K();
            }
            function P(e) {
                h.value = [ ...e ];
            }
            const N = e => {
                e ? x.value.toggleAllSelection() : x.value.clearSelection();
            };
            function Y(e) {
                switch (e.key) {
                  case "delete":
                    q();
                    break;

                  case "enable":
                    O("1");
                    break;

                  case "deactivate":
                    O("0");
                }
            }
            const q = async () => {
                try {
                    await i.delConfirm(), await I(h.value.map(e => e.id)), i.success(T("common.delSuccess")), 
                    await n();
                } catch {}
            };
            function O(e) {
                let s = e === "0" ? "停用" : "启用";
                i.confirm(`\u786E\u8BA4\u8981${s}\u9009\u4E2D\u6570\u636E\u5417\uFF1F`).then(() => {
                    U({
                        ids: h.value.map(k => k.id),
                        status: e === "0" ? 1 : 0
                    }).then(k => {
                        i.success("操作成功"), n();
                    });
                });
            }
            const n = async () => {
                b.value = !0;
                try {
                    const e = await Ge(M.value);
                    v.value = De(e), z.value = v.value.map(s => s.id), h.value = [];
                } finally {
                    b.value = !1;
                }
            }, K = () => {
                n();
            }, j = l(), E = l(), C = (e, s) => {
                j.value.open(e, s);
            };
            function Q() {
                E.value.open();
            }
            async function V() {
                let e = await Ie();
                g.value = e;
            }
            return ne(async () => {
                await n(), await V();
            }), (e, s) => {
                const k = ze, S = fe, d = ye, c = he, W = Re, X = ve, Z = we, ee = Le, te = Ce, ae = ge, u = _e("hasPermi"), le = ke;
                return _(), pe(de, null, [ t(ae, {
                    class: "cont-box"
                }, {
                    default: r(() => [ D("div", A, [ t(k, {
                        searchList: o(H),
                        onHandleSearch: J,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "组织名称/代码"
                        }
                    }, null, 8, [ "searchList" ]), D("div", R, [ p((_(), m(d, {
                        type: "primary",
                        size: "large",
                        onClick: s[0] || (s[0] = a => C("create"))
                    }, {
                        default: r(() => [ t(S, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), y(" 新增 ") ]),
                        _: 1
                    })), [ [ u, [ "system:dept:create" ] ] ]), p((_(), m(d, {
                        type: "primary",
                        plain: "",
                        onClick: Q,
                        size: "large"
                    }, {
                        default: r(() => [ t(S, {
                            icon: "ep:upload",
                            class: "mr-4px"
                        }), y(" 导入 ") ]),
                        _: 1
                    })), [ [ u, [ "system:dept:create" ] ] ]), p((_(), m(d, {
                        type: "primary",
                        plain: "",
                        onClick: s[1] || (s[1] = a => w.value = !0),
                        size: "large"
                    }, {
                        default: r(() => [ t(S, {
                            icon: "ep:setting",
                            class: "mr-4px"
                        }), y(" 类别设置 ") ]),
                        _: 1
                    })), [ [ u, [ "system:dept-tag:all" ] ] ]) ]) ]), t(ee, {
                        class: "center-box",
                        "no-pager": !0
                    }, {
                        default: r(() => [ o(F) ? p((_(), m(Z, {
                            key: 0,
                            data: o(v),
                            onSelectionChange: P,
                            height: "calc(100% )",
                            "row-key": "id",
                            ref_key: "tableRef",
                            ref: x,
                            class: "tree-table",
                            "default-expand-all": o(B),
                            "expand-row-keys": o(z)
                        }, {
                            default: r(() => [ t(c, {
                                type: "selection",
                                width: "50",
                                fixed: "left"
                            }), t(c, {
                                prop: "name",
                                label: "组织名称",
                                "min-width": "200px",
                                fixed: "left",
                                "show-overflow-tooltip": ""
                            }), t(c, {
                                prop: "code",
                                label: "组织代码",
                                fixed: "left",
                                "min-width": "100px",
                                "show-overflow-tooltip": ""
                            }), t(c, {
                                prop: "sort",
                                label: "排序"
                            }), t(c, {
                                prop: "tagCode",
                                label: "组织类别",
                                width: "110"
                            }, {
                                default: r(a => [ t(Ne, {
                                    tagCode: a.row.tagCode,
                                    codeList: o(g),
                                    class: "tag-box"
                                }, null, 8, [ "tagCode", "codeList" ]) ]),
                                _: 1
                            }), t(c, {
                                prop: "majorLevel",
                                label: "培养层次",
                                width: "120"
                            }, {
                                default: r(a => [ t(W, {
                                    type: o(G).SYSTEM_MAJOR_LEVEL,
                                    value: a.row.majorLevel
                                }, null, 8, [ "type", "value" ]) ]),
                                _: 1
                            }), t(c, {
                                prop: "remark",
                                label: "备注",
                                "show-overflow-tooltip": "",
                                width: "120px"
                            }), t(c, {
                                prop: "status",
                                label: "组织状态"
                            }, {
                                default: r(a => [ t(X, {
                                    size: "small",
                                    "model-value": a.row.status,
                                    "active-value": 0,
                                    "inactive-value": 1,
                                    onClick: L => function(f) {
                                        let re = f.status + "" == "0" ? "停用" : "启用";
                                        i.confirm(`\u786E\u8BA4\u8981${re}\u201C${f.name}\u201D\u5417\uFF1F`).then(() => {
                                            U({
                                                ids: [ f.id ],
                                                status: f.status + "" == "0" ? 1 : 0
                                            }).then(rt => {
                                                i.success("操作成功"), n();
                                            });
                                        });
                                    }(a.row)
                                }, null, 8, [ "model-value", "onClick" ]) ]),
                                _: 1
                            }), t(c, {
                                prop: "creator",
                                label: "创建人",
                                "min-width": "100",
                                "show-overflow-tooltip": ""
                            }), t(c, {
                                label: "创建时间",
                                prop: "createTime",
                                width: "180",
                                formatter: o(Ee)
                            }, null, 8, [ "formatter" ]), t(c, {
                                label: "操作",
                                width: "160px",
                                fixed: "right"
                            }, {
                                default: r(a => [ p((_(), m(d, {
                                    link: "",
                                    type: "primary",
                                    onClick: L => C("create", a.row.id)
                                }, {
                                    default: r(() => [ y(" 新增 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ u, [ "system:dept:create" ] ] ]), p((_(), 
                                m(d, {
                                    link: "",
                                    type: "primary",
                                    onClick: L => C("update", a.row.id)
                                }, {
                                    default: r(() => [ y(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ u, [ "system:dept:update" ] ] ]), p((_(), 
                                m(d, {
                                    link: "",
                                    type: "danger",
                                    onClick: L => (async f => {
                                        try {
                                            await i.delConfirm(), await I([ f ]), 
                                            i.success(T("common.delSuccess")), await n();
                                        } catch {}
                                    })(a.row.id)
                                }, {
                                    default: r(() => [ y(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ u, [ "system:dept:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data", "default-expand-all", "expand-row-keys" ])), [ [ le, o(b) ] ]) : ue("", !0) ]),
                        _: 1
                    }), p(t(te, {
                        ref: "SelectionButtonGroupRef",
                        selectList: o(h),
                        pageList: o(v),
                        btnInfoList: [ {
                            key: "enable",
                            label: "启用",
                            type: "primary",
                            icon: "ep:video-play"
                        }, {
                            key: "deactivate",
                            label: "停用",
                            type: "warning",
                            icon: "ep:video-pause"
                        }, {
                            key: "delete",
                            label: "删除",
                            type: "danger",
                            icon: "svg-icon:delete"
                        } ],
                        onHandleEvent: Y,
                        onSelectAll: N
                    }, null, 8, [ "selectList", "pageList" ]), [ [ u, [ "system:user:delete" ] ] ]) ]),
                    _: 1
                }), t($e, {
                    ref_key: "formRef",
                    ref: j,
                    onSuccess: n
                }, null, 512), t(Fe, {
                    ref_key: "importFormRef",
                    ref: E,
                    onSuccess: n
                }, null, 512), t(Je, {
                    modelValue: o(w),
                    "onUpdate:modelValue": s[2] || (s[2] = a => me(w) ? w.value = a : null),
                    onRefresh: V
                }, null, 8, [ "modelValue" ]) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-a322b957" ] ]);
});

export {
    at as __tla,
    $ as default
};