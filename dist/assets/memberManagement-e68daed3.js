import {
    u as j,
    T as B,
    r as o,
    U as G,
    o as c,
    C as i,
    l as u,
    k as p,
    a as t,
    m as x,
    t as L,
    B as I,
    c as J,
    F as K,
    y as Q,
    v as y,
    D as T,
    bo as H,
    O as W,
    K as X,
    dt as Y,
    ab as Z,
    ac as $,
    Q as ee,
    J as ae,
    aU as le,
    __tla as te
} from "./index-6c08ea4c.js";

import {
    E as se,
    __tla as re
} from "./el-avatar-76960a98.js";

import {
    a as w,
    __tla as ue
} from "./file-e038b35d.js";

import {
    j as de,
    k as oe,
    __tla as ce
} from "./index-d7ee4e02.js";

import {
    _ as ne
} from "./_plugin-vue_export-helper-1b428a4d.js";

let C, ie = Promise.all([ (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})() ]).then(async () => {
    let k;
    k = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, C = ne({
        __name: "memberManagement",
        emits: [ "tableRefresh" ],
        setup(pe, {
            expose: E,
            emit: U
        }) {
            j();
            const A = B(), m = o(!1), S = U, v = o(!1), h = o(), r = o({
                leader: null
            }), b = o([]), g = o([]), z = G({
                leader: [ {
                    required: !0,
                    message: "组长不能为空",
                    trigger: "change"
                } ]
            }), f = o({}), _ = o([]), P = n => {
                _.value = [], n.forEach(a => {
                    g.value.forEach(l => {
                        l.stuId == a && _.value.push(l);
                    });
                }), r.value.leader && (n.includes(r.value.leader) || (r.value.leader = null));
            }, D = () => {
                h.value.validate(n => {
                    if (n) {
                        var a = [];
                        _.value.forEach(l => {
                            a.push({
                                groupPlanId: f.value.planId,
                                groupId: f.value.groupId,
                                stuId: l.stuId,
                                isLeader: l.stuId == r.value.leader ? "1" : "0",
                                id: l.id
                            });
                        }), oe({
                            groupPlanId: f.value.planId,
                            groupId: f.value.groupId,
                            stuDOList: a
                        }).then(l => {
                            H({
                                message: "操作成功",
                                type: "success"
                            }), S("tableRefresh"), N();
                        });
                    }
                });
            }, N = () => {
                r.value = {
                    leader: null
                }, h.value.resetFields(), m.value = !1;
            };
            return E({
                openDrawer: (n, a, l) => {
                    v.value = n, f.value = {
                        planId: a.id,
                        groupId: l.id
                    }, de({
                        teachClassId: A.params.classId,
                        groupPlanId: a.id,
                        groupId: l.id
                    }).then(s => {
                        b.value = s.groupStuList.map(d => d.stuId), g.value = s.waitGrouStuList.concat(s.groupStuList), 
                        g.value.forEach(d => {
                            d.disabled = v.value;
                        }), _.value = s.groupStuList, s.groupStuList.forEach(d => {
                            d.isLeader == "1" && (r.value.leader = d.stuId);
                        });
                    }), m.value = !0;
                }
            }), (n, a) => {
                const l = W, s = se, d = X, R = Y, q = Z, F = $, M = ee, V = ae, O = le;
                return c(), i(O, {
                    modelValue: t(m),
                    "onUpdate:modelValue": a[2] || (a[2] = e => x(m) ? m.value = e : null),
                    title: "成员管理",
                    width: "900px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: u(() => [ p(M, {
                        ref_key: "formRef",
                        ref: h,
                        id: "formMember",
                        "label-position": "top",
                        "label-width": "90px",
                        model: t(r),
                        rules: t(z)
                    }, {
                        default: u(() => [ p(l, {
                            label: "人员分组",
                            required: "",
                            style: {
                                "font-weight": "700"
                            }
                        }), p(R, {
                            modelValue: t(b),
                            "onUpdate:modelValue": a[0] || (a[0] = e => x(b) ? b.value = e : null),
                            filterable: "",
                            "filter-placeholder": "请输入姓名或学号",
                            data: t(g),
                            titles: [ "未分组", "已分组" ],
                            onChange: P,
                            props: {
                                key: "stuId",
                                label: "stuName",
                                disabled: "disabled"
                            }
                        }, {
                            default: u(({
                                option: e
                            }) => [ e.leaderAvatar ? (c(), i(s, {
                                key: 0,
                                class: "userIcon",
                                fit: "cover",
                                size: 20,
                                src: t(w)(e.leaderAvatar)
                            }, null, 8, [ "src" ])) : (c(), i(s, {
                                key: 1,
                                class: "userIcon",
                                fit: "cover",
                                size: 20,
                                src: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                            })), p(d, {
                                effect: "dark",
                                content: e.stuName + "(" + e.stuNumber + ")",
                                placement: "top",
                                enterable: !1
                            }, {
                                default: u(() => [ L("span", null, I(e.stuName) + " (" + I(e.stuNumber) + ")", 1) ]),
                                _: 2
                            }, 1032, [ "content" ]) ]),
                            _: 1
                        }, 8, [ "modelValue", "data" ]), p(l, {
                            prop: "leader",
                            label: "组长",
                            style: {
                                "margin-top": "20px",
                                width: "350px"
                            }
                        }, {
                            default: u(() => [ p(F, {
                                modelValue: t(r).leader,
                                "onUpdate:modelValue": a[1] || (a[1] = e => t(r).leader = e),
                                filterable: "",
                                clearable: "",
                                placeholder: "请选择组长",
                                disabled: t(v)
                            }, {
                                default: u(() => [ (c(!0), J(K, null, Q(t(_), e => (c(), 
                                i(q, {
                                    key: e.stuId,
                                    label: e.stuName + "(" + e.stuNumber + ")",
                                    value: e.stuId
                                }, {
                                    default: u(() => [ e.leaderAvatar ? (c(), i(s, {
                                        key: 0,
                                        class: "userIcon",
                                        fit: "cover",
                                        size: 20,
                                        src: t(w)(e.leaderAvatar)
                                    }, null, 8, [ "src" ])) : (c(), i(s, {
                                        key: 1,
                                        class: "userIcon",
                                        fit: "cover",
                                        size: 20,
                                        src: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                                    })), y(" " + I(e.stuName + "(" + e.stuNumber + ")"), 1) ]),
                                    _: 2
                                }, 1032, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), L("div", k, [ p(V, {
                        onClick: N
                    }, {
                        default: u(() => [ y(I(t(v) ? "关闭" : "取消"), 1) ]),
                        _: 1
                    }), t(v) ? T("", !0) : (c(), i(V, {
                        key: 0,
                        type: "primary",
                        onClick: D
                    }, {
                        default: u(() => [ y("确定") ]),
                        _: 1
                    })) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-b4d7a516" ] ]);
});

export {
    ie as __tla,
    C as default
};