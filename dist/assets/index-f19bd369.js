import {
    p as wa,
    aa as va,
    r as o,
    U as ba,
    e as ka,
    f as Sa,
    bE as ga,
    j as xa,
    o as n,
    c as L,
    k as a,
    l as r,
    t as p,
    a as s,
    A as w,
    C as v,
    v as c,
    F as W,
    y as Ia,
    B as M,
    m as Ta,
    _ as Ea,
    J as Ca,
    ad as Na,
    ae as Ra,
    aU as Ua,
    a9 as ja,
    R as La,
    S as Ma,
    __tla as Pa
} from "./index-6c08ea4c.js";

import {
    _ as Ya,
    __tla as za
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Aa,
    __tla as Da
} from "./index-e2094cc0.js";

import {
    _ as Ha,
    __tla as Oa
} from "./index-c4ca0ced.js";

import {
    _ as Va,
    __tla as Ba
} from "./index-8b41572c.js";

import {
    _ as Fa,
    __tla as Ga
} from "./index-cd582e93.js";

import {
    _ as Xa,
    __tla as Ja
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as $a,
    __tla as qa
} from "./index-1024512a.js";

import {
    b as Z,
    D as T,
    __tla as Ka
} from "./dict-c5825220.js";

import {
    __tla as Qa
} from "./permission-6a7fe104.js";

import {
    d as Wa,
    __tla as Za
} from "./formatTime-de6f1520.js";

import {
    f as ae,
    u as aa,
    r as ee,
    __tla as te
} from "./index-d1db0401.js";

import {
    b as le,
    __tla as se
} from "./index-736610b8.js";

import {
    g as re,
    a as oe,
    __tla as ie
} from "./index-7c75bd27.js";

import {
    h as ne
} from "./tree-05ea8e09.js";

import ce, {
    __tla as _e
} from "./UserForm-ccec7755.js";

import pe, {
    __tla as ue
} from "./UserImportForm-22c90d44.js";

import {
    _ as me
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as de
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import {
    __tla as ye
} from "./DeptTag-1be092ce.js";

import {
    __tla as fe
} from "./index-ef4d146e.js";

import "./validate-b72f006c.js";

import {
    __tla as he
} from "./index-13c88727.js";

import {
    __tla as we
} from "./file-e038b35d.js";

import {
    __tla as ve
} from "./ErrorDialog-c4a6df45.js";

let ea, be = Promise.all([ (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return za;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return Ba;
    } catch {}
})(), (() => {
    try {
        return Ga;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return qa;
    } catch {}
})(), (() => {
    try {
        return Ka;
    } catch {}
})(), (() => {
    try {
        return Qa;
    } catch {}
})(), (() => {
    try {
        return Za;
    } catch {}
})(), (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return se;
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
        return ye;
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
        return ve;
    } catch {}
})() ]).then(async () => {
    let P, Y, z, A, D, H, O, V;
    P = {
        class: "top-box"
    }, Y = {
        class: "right btns-box header-btns pt-1"
    }, z = {
        key: 0
    }, A = {
        class: "items-left flex justify-left"
    }, D = {
        class: "bottom-box"
    }, H = {
        class: "desc-box px-10px pb-20px pt-20px"
    }, O = (g => (La("data-v-7ab818e7"), g = g(), Ma(), g))(() => p("br", null, null, -1)), 
    V = {
        class: "password-box"
    }, ea = me(Object.assign({
        name: "SystemUser"
    }, {
        __name: "index",
        setup(g) {
            const _ = wa();
            va();
            const E = o(!0), B = o(0), C = o([]), u = ba({
                pageNo: 1,
                pageSize: 20
            }), m = o({}), N = o([]), F = o([]), R = o(), b = o(!1), d = o({}), x = o([]), ta = ka(() => [ {
                label: "用户身份",
                key: "identities",
                multiple: !0,
                type: "list",
                options: Z(T.SYSTEM_PERMISSION_INDETITY).filter(e => e.value !== 1)
            }, {
                label: "用户角色",
                key: "roleIds",
                multiple: !0,
                type: "list",
                options: q.value
            }, {
                label: "组织机构",
                key: "deptIds",
                filterable: !0,
                multiple: !0,
                type: "deptTree",
                options: N.value,
                tagOptions: F.value
            }, {
                label: "账号状态",
                key: "status",
                type: "list",
                options: Z(T.SYSTEM_USER_STATUS)
            } ]), G = async (e = {}) => {
                const t = await oe(e);
                N.value = [], N.value.push(...ne(t));
            }, y = async () => {
                E.value = !0;
                try {
                    const e = await ae({
                        ...u,
                        keywords: m.value.keywords,
                        identities: (m.value.identities || []).join(","),
                        roleIds: (m.value.roleIds || []).join(","),
                        deptIds: (m.value.deptIds || []).join(","),
                        status: m.value.status
                    });
                    C.value = e.list, B.value = e.total, x.value = [];
                } finally {
                    E.value = !1;
                }
            }, la = e => {
                m.value = e, U();
            }, U = () => {
                u.pageNo = 1, y();
            }, X = o(), J = (e, t) => {
                X.value.open(e, t);
            }, $ = o(), sa = () => {
                $.value.open();
            }, ra = e => {
                e ? R.value.toggleAllSelection() : R.value.clearSelection();
            };
            function oa({
                key: e
            }) {
                switch (e) {
                  case "enable":
                    j("2");
                    break;

                  case "deactivate":
                    j("1");
                    break;

                  case "lock":
                    j("3");
                }
            }
            function ia(e) {
                x.value = [ ...e ];
            }
            const j = async e => {
                let t = x.value.map(k => k.id);
                try {
                    await _.confirm(`\u662F\u5426\u786E\u8BA4${e === "2" ? "启用" : e === "3" ? "锁定" : "停用"}\u5DF2\u9009\u4E2D\u7684\u6570\u636E\u9879\u72B6\u6001?`), 
                    await aa(t, e), _.success("操作成功"), await y();
                } catch {}
            }, na = async (e, t) => {
                try {
                    const k = t.label;
                    await _.confirm('确认要"' + k + '""' + e.nickname + '"用户吗?'), await aa([ e.id ], t.value), 
                    _.success("操作成功"), await y();
                } catch {}
            };
            o(!1);
            const q = o([]);
            return Sa(() => {
                (async () => F.value = await re())(), G(), async function() {
                    let e = await le();
                    q.value = e.map(t => ({
                        label: t.name,
                        value: t.id
                    }));
                }(), y();
            }), ga(() => {
                y();
            }), (e, t) => {
                const k = $a, K = Ea, f = Ca, i = Na, Q = Xa, ca = Fa, _a = Ra, pa = Va, ua = Ha, ma = Aa, da = Ya, ya = Ua, S = xa("hasPermi"), fa = ja;
                return n(), L(W, null, [ a(da, {
                    class: "cont-box"
                }, {
                    default: r(() => [ p("div", P, [ a(k, {
                        searchList: s(ta),
                        onHandleSearch: la,
                        onHandleGetDeptList: G,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "学号/工号/姓名"
                        }
                    }, null, 8, [ "searchList" ]), p("div", Y, [ w((n(), v(f, {
                        type: "primary",
                        size: "large",
                        onClick: t[0] || (t[0] = l => J("create"))
                    }, {
                        default: r(() => [ a(K, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), c(" 新增 ") ]),
                        _: 1
                    })), [ [ S, [ "system:user:create" ] ] ]), w((n(), v(f, {
                        type: "primary",
                        size: "large",
                        plain: "",
                        onClick: sa
                    }, {
                        default: r(() => [ a(K, {
                            icon: "ep:upload",
                            class: "mr-4px"
                        }), c(" 导入 ") ]),
                        _: 1
                    })), [ [ S, [ "system:user:import" ] ] ]) ]) ]), a(pa, {
                        class: "center-box"
                    }, {
                        default: r(() => [ w((n(), v(_a, {
                            ref_key: "tableRef",
                            ref: R,
                            data: s(C),
                            height: "calc(100% )",
                            "header-row-class-name": "system-header",
                            onSelectionChange: ia,
                            "row-key": "id"
                        }, {
                            default: r(() => [ a(i, {
                                type: "selection",
                                width: "50"
                            }), a(i, {
                                label: "序号",
                                type: "index",
                                width: "60"
                            }), a(i, {
                                width: "90",
                                label: "工号/学号",
                                prop: "number",
                                "show-overflow-tooltip": !0
                            }), a(i, {
                                label: "姓名",
                                width: "90",
                                prop: "nickname",
                                "show-overflow-tooltip": !0
                            }), a(i, {
                                label: "性别",
                                prop: "sex",
                                width: "70"
                            }, {
                                default: r(l => [ a(Q, {
                                    type: s(T).SYSTEM_USER_SEX,
                                    value: l.row.sex
                                }, null, 8, [ "type", "value" ]) ]),
                                _: 1
                            }), a(i, {
                                label: "手机号",
                                prop: "mobile",
                                width: "120"
                            }), a(i, {
                                label: "用户身份",
                                "min-width": "120"
                            }, {
                                default: r(l => [ (l.row.identities || []).length === 0 ? (n(), 
                                L("div", z)) : (n(!0), L(W, {
                                    key: 1
                                }, Ia(l.row.identities || [], h => (n(), v(Q, {
                                    key: h,
                                    type: s(T).SYSTEM_PERMISSION_INDETITY,
                                    value: h,
                                    class: "mr-4px"
                                }, null, 8, [ "type", "value" ]))), 128)) ]),
                                _: 1
                            }), a(i, {
                                label: "角色",
                                "min-width": "120",
                                "show-overflow-tooltip": ""
                            }, {
                                default: r(l => [ c(M((l.row.roleNames || []).join("、")), 1) ]),
                                _: 1
                            }), a(i, {
                                label: "所属末级组织",
                                key: "deptName",
                                prop: "deptName",
                                width: "120",
                                "show-overflow-tooltip": !0
                            }), a(i, {
                                label: "状态",
                                key: "status",
                                width: "170"
                            }, {
                                default: r(l => [ a(ca, {
                                    row: l.row,
                                    status: l.row.status,
                                    onChangeStatus: na
                                }, null, 8, [ "row", "status" ]) ]),
                                _: 1
                            }), a(i, {
                                label: "创建人",
                                prop: "creator",
                                width: "120"
                            }), a(i, {
                                label: "创建时间",
                                prop: "createTime",
                                formatter: s(Wa),
                                width: "180"
                            }, null, 8, [ "formatter" ]), a(i, {
                                label: "操作",
                                width: "140",
                                fixed: "right"
                            }, {
                                default: r(l => [ p("div", A, [ w((n(), v(f, {
                                    type: "primary",
                                    link: "",
                                    onClick: h => J("update", l.row.id)
                                }, {
                                    default: r(() => [ c("编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ S, [ "system:user:update" ] ] ]), w((n(), 
                                v(f, {
                                    type: "primary",
                                    link: "",
                                    onClick: h => (async I => {
                                        d.value = {
                                            nickname: I.nickname,
                                            number: I.number,
                                            password: ""
                                        };
                                        try {
                                            await _.confirm('请确认是否重置"' + I.nickname + '"的密码？');
                                            const ha = await ee([ I.id ], "");
                                            d.value.password = ha, b.value = !0;
                                        } catch {}
                                    })(l.row)
                                }, {
                                    default: r(() => [ c("重置密码 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ S, [ "system:user:update-password" ] ] ]) ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ fa, s(E) ] ]) ]),
                        _: 1
                    }), p("div", D, [ a(ua, {
                        total: s(B),
                        page: s(u).pageNo,
                        "onUpdate:page": t[1] || (t[1] = l => s(u).pageNo = l),
                        limit: s(u).pageSize,
                        "onUpdate:limit": t[2] || (t[2] = l => s(u).pageSize = l),
                        onPagination: y
                    }, null, 8, [ "total", "page", "limit" ]) ]), w(a(ma, {
                        ref: "SelectionButtonGroupRef",
                        selectList: s(x),
                        pageList: s(C),
                        btnInfoList: [ {
                            key: "enable",
                            label: "启用",
                            type: "success",
                            icon: "ep:video-play"
                        }, {
                            key: "deactivate",
                            label: "停用",
                            type: "warning",
                            icon: "ep:video-pause"
                        }, {
                            key: "lock",
                            label: "锁定",
                            type: "danger",
                            icon: "ep:lock"
                        } ],
                        onHandleEvent: oa,
                        onSelectAll: ra
                    }, null, 8, [ "selectList", "pageList" ]), [ [ S, [ "system:user:delete" ] ] ]) ]),
                    _: 1
                }), a(ce, {
                    ref_key: "formRef",
                    ref: X,
                    onSuccess: U
                }, null, 512), a(pe, {
                    ref_key: "importFormRef",
                    ref: $,
                    onSuccess: U
                }, null, 512), a(ya, {
                    modelValue: s(b),
                    "onUpdate:modelValue": t[5] || (t[5] = l => Ta(b) ? b.value = l : null),
                    title: "提示",
                    width: "400"
                }, {
                    footer: r(() => [ a(f, {
                        onClick: t[3] || (t[3] = l => b.value = !1)
                    }, {
                        default: r(() => [ c("返回") ]),
                        _: 1
                    }), a(f, {
                        type: "primary",
                        onClick: t[4] || (t[4] = l => async function(h) {
                            try {
                                await navigator.clipboard.writeText(h), _.success("已成功复制到剪切板");
                            } catch {
                                _.warning("无法复制到剪切板，请自行复制");
                            }
                        }(s(d).password))
                    }, {
                        default: r(() => [ c("复制") ]),
                        _: 1
                    }) ]),
                    default: r(() => [ p("div", H, [ c(" 用户“" + M(s(d).nickname + "（" + s(d).number) + "）”，登录密码已重置为：", 1), O, p("div", V, M(s(d).password), 1) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-7ab818e7" ] ]);
});

export {
    be as __tla,
    ea as default
};