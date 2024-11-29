import {
    a7 as U,
    T as ia,
    u as na,
    p as _a,
    aa as ua,
    r as o,
    U as ma,
    f as pa,
    j as da,
    o as f,
    C as h,
    l as _,
    t as C,
    k as t,
    a as l,
    A as w,
    v as A,
    m as ya,
    E as fa,
    _ as ha,
    J as wa,
    ad as ba,
    ae as va,
    a9 as ga,
    __tla as ka
} from "./index-6c08ea4c.js";

import {
    _ as Sa,
    __tla as xa
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Ia,
    __tla as Ua
} from "./index-33f7224d.js";

import {
    _ as Ca,
    __tla as Ra
} from "./index-e2094cc0.js";

import {
    _ as Ta,
    __tla as Ea
} from "./index-c4ca0ced.js";

import {
    _ as La,
    __tla as Pa
} from "./index-8b41572c.js";

import {
    _ as za,
    __tla as Ba
} from "./index-cd582e93.js";

import {
    _ as Na,
    __tla as Aa
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as Ga,
    __tla as Ha
} from "./index-1024512a.js";

import {
    d as Va,
    __tla as ja
} from "./formatTime-de6f1520.js";

import {
    u as G,
    __tla as Ja
} from "./index-d1db0401.js";

import {
    b as Ma,
    D as H,
    __tla as Xa
} from "./dict-c5825220.js";

import {
    _ as Ya
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Da
} from "./el-infinite-scroll-9cd61b58.js";

import {
    __tla as Oa
} from "./throttle-1adeb119.js";

import {
    __tla as $a
} from "./index-13c88727.js";

import "./tree-05ea8e09.js";

import {
    __tla as qa
} from "./index-7c75bd27.js";

import {
    __tla as Fa
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ka
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import {
    __tla as Qa
} from "./index-ef4d146e.js";

let V, Wa = Promise.all([ (() => {
    try {
        return ka;
    } catch {}
})(), (() => {
    try {
        return xa;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})(), (() => {
    try {
        return Ra;
    } catch {}
})(), (() => {
    try {
        return Ea;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Ba;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Ha;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return Xa;
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
        return $a;
    } catch {}
})(), (() => {
    try {
        return qa;
    } catch {}
})(), (() => {
    try {
        return Fa;
    } catch {}
})(), (() => {
    try {
        return Ka;
    } catch {}
})(), (() => {
    try {
        return Qa;
    } catch {}
})() ]).then(async () => {
    let b, R, T, E;
    b = async L => await U.post({
        url: "/system/permission/unassign-role-user",
        data: L
    }), R = {
        class: "top-box"
    }, T = {
        class: "right btns-box header-btns pt-1"
    }, E = {
        class: "bottom-box"
    }, V = Ya(Object.assign({
        name: "SystemRole"
    }, {
        __name: "roleUser",
        setup(L) {
            const j = ia(), J = na(), c = _a(), {
                t: p
            } = ua(), v = o(!0), P = o(0), g = o([]), u = ma({
                pageNo: 1,
                pageSize: 20
            }), z = o({});
            o(), o(!1);
            const M = o([ {
                label: "账号状态",
                key: "status",
                type: "list",
                options: Ma(H.SYSTEM_USER_STATUS)
            } ]), d = o([]), B = o(), y = o(!1), m = o(""), i = async () => {
                v.value = !0;
                try {
                    const a = await (async e => await U.get({
                        url: "/system/permission/role-user-page",
                        params: e
                    }))({
                        ...u,
                        ...z.value,
                        roleId: m.value
                    });
                    g.value = a.list, P.value = a.total;
                } finally {
                    v.value = !1;
                }
            }, X = a => {
                a ? tableRef.value.toggleAllSelection() : tableRef.value.clearSelection();
            };
            function Y(a) {
                d.value = [ ...a ];
            }
            function D({
                key: a
            }) {
                switch (a) {
                  case "delete":
                  case "delete":
                    O();
                    break;

                  case "enable":
                    k("2");
                    break;

                  case "deactivate":
                    k("1");
                    break;

                  case "lock":
                    k("3");
                }
            }
            const O = async () => {
                let a = d.value.map(e => e.id);
                try {
                    await c.delConfirm(), await b({
                        roleId: m.value,
                        userIds: a
                    }), c.success("操作成功"), await i();
                } catch {}
            }, k = async a => {
                let e = d.value.map(n => n.id);
                try {
                    await c.confirm(`\u662F\u5426\u786E\u8BA4${a === "2" ? "启用" : a === "3" ? "锁定" : "停用"}\u5DF2\u9009\u4E2D\u7684\u6570\u636E\u9879\u72B6\u6001?`), 
                    await G(e, a), c.success("操作成功"), await i();
                } catch {}
            }, $ = a => {
                z.value = a, q();
            }, q = () => {
                u.pageNo = 1, i();
            }, F = async (a, e) => {
                try {
                    const n = e.label;
                    await c.confirm('确认要"' + n + '""' + a.nickname + '"用户吗?'), await G([ a.id ], e.value), 
                    c.success("操作成功"), await i();
                } catch {}
            }, K = async (a, e, n) => {
                try {
                    await (async S => await U.post({
                        url: "/system/permission/assign-role-user",
                        data: S
                    }))({
                        roleId: m.value,
                        userIds: a
                    }), c.success("操作成功"), await i(), n(!0);
                } catch {} finally {
                    n();
                }
            };
            function Q() {
                J.push({
                    name: "SystemRole"
                });
            }
            return pa(() => {
                m.value = j.params.id, i();
            }), (a, e) => {
                const n = Ga, S = ha, N = wa, r = ba, W = Na, Z = za, aa = va, ta = La, ea = Ta, la = Ca, sa = Ia, ra = Sa, x = da("hasPermi"), oa = ga;
                return f(), h(ra, {
                    class: "cont-box",
                    title: "人员管理",
                    onRouterBack: Q
                }, {
                    default: _(() => [ C("div", R, [ t(n, {
                        searchList: l(M),
                        onHandleSearch: $,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "学号/工号/姓名"
                        }
                    }, null, 8, [ "searchList" ]), C("div", T, [ w((f(), h(N, {
                        size: "large",
                        type: "primary",
                        onClick: e[0] || (e[0] = s => {
                            var I;
                            return y.value = !0, void ((I = B.value) == null ? void 0 : I.initCom());
                        })
                    }, {
                        default: _(() => [ t(S, {
                            class: "mr-4px",
                            icon: "ep:plus"
                        }), A(" 新增 ") ]),
                        _: 1
                    })), [ [ x, [ "system:role:create" ] ] ]) ]) ]), t(ta, {
                        class: "center-box",
                        outerHeight: 100
                    }, {
                        default: _(() => [ w((f(), h(aa, {
                            data: l(g),
                            height: "calc(100% )",
                            onSelectionChange: Y,
                            "row-key": "id"
                        }, {
                            default: _(() => [ t(r, {
                                type: "selection",
                                width: "40"
                            }), t(r, {
                                label: "序号",
                                align: "center",
                                type: "index",
                                width: "60"
                            }), t(r, {
                                label: "学号/工号",
                                prop: "number",
                                width: "100",
                                "show-overflow-tooltip": ""
                            }), t(r, {
                                label: "姓名",
                                prop: "nickname",
                                width: "100",
                                "show-overflow-tooltip": ""
                            }), t(r, {
                                label: "性别",
                                align: "center",
                                prop: "sex"
                            }, {
                                default: _(s => [ t(W, {
                                    type: l(H).SYSTEM_USER_SEX,
                                    value: s.row.sex
                                }, null, 8, [ "type", "value" ]) ]),
                                _: 1
                            }), t(r, {
                                label: "手机号",
                                prop: "mobile",
                                width: "120"
                            }), t(r, {
                                label: "所属末级组织",
                                prop: "deptName",
                                width: "140",
                                "show-overflow-tooltip": ""
                            }), t(r, {
                                label: "账号状态",
                                prop: "status",
                                width: "180"
                            }, {
                                default: _(s => [ t(Z, {
                                    row: s.row,
                                    status: s.row.status,
                                    onChangeStatus: F
                                }, null, 8, [ "row", "status" ]) ]),
                                _: 1
                            }), t(r, {
                                label: "创建人",
                                prop: "creator",
                                width: "100",
                                "show-overflow-tooltip": ""
                            }), t(r, {
                                formatter: l(Va),
                                label: "创建时间",
                                prop: "createTime",
                                width: "180"
                            }, null, 8, [ "formatter" ]), t(r, {
                                width: 80,
                                label: "操作",
                                align: "center",
                                fixed: "right"
                            }, {
                                default: _(s => [ w((f(), h(N, {
                                    link: "",
                                    type: "danger",
                                    onClick: I => (async ca => {
                                        try {
                                            await fa.confirm("用户被移除角色后相应功能及数据权限一并移除，已产生数据系统继续保留!", p("common.confirmTitle"), {
                                                confirmButtonText: p("common.ok"),
                                                cancelButtonText: p("common.cancel"),
                                                center: !0,
                                                customClass: "neu-message-box del-confirm"
                                            }), await b({
                                                roleId: m.value,
                                                userIds: [ ca ]
                                            }), c.success(p("common.delSuccess")), 
                                            await i();
                                        } catch {}
                                    })(s.row.id)
                                }, {
                                    default: _(() => [ A(" 移除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ x, [ "system:role:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ oa, l(v) ] ]) ]),
                        _: 1
                    }), C("div", E, [ t(ea, {
                        limit: l(u).pageSize,
                        "onUpdate:limit": e[1] || (e[1] = s => l(u).pageSize = s),
                        page: l(u).pageNo,
                        "onUpdate:page": e[2] || (e[2] = s => l(u).pageNo = s),
                        total: l(P),
                        onPagination: i
                    }, null, 8, [ "limit", "page", "total" ]) ]), w(t(la, {
                        ref: "SelectionButtonGroupRef",
                        selectList: l(d),
                        pageList: l(g),
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
                        }, {
                            key: "delete",
                            label: "移除",
                            type: "danger",
                            icon: "svg-icon:delete"
                        } ],
                        onHandleEvent: D,
                        onSelectAll: X
                    }, null, 8, [ "selectList", "pageList" ]), [ [ x, [ "system:user:delete" ] ] ]), t(sa, {
                        ref_key: "comChooseUserRef",
                        ref: B,
                        modelValue: l(y),
                        "onUpdate:modelValue": e[3] || (e[3] = s => ya(y) ? y.value = s : null),
                        onSubmitIds: K,
                        defaultUserParams: {
                            notInRoleIds: l(m)
                        }
                    }, null, 8, [ "modelValue", "defaultUserParams" ]) ]),
                    _: 1
                });
            };
        }
    }), [ [ "__scopeId", "data-v-587ebf92" ] ]);
});

export {
    Wa as __tla,
    V as default
};