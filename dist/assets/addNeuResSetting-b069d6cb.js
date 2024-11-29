import {
    e as b,
    r as t,
    p as $,
    aX as C,
    o as n,
    c as L,
    k as _,
    l as u,
    v as h,
    a,
    D as i,
    t as d,
    m as p,
    A as z,
    C as v,
    aY as F,
    G as I,
    n as K,
    M as tt,
    s as at,
    J as rt,
    aU as et,
    __tla as lt
} from "./index-6c08ea4c.js";

import {
    _ as _t,
    __tla as st
} from "./index-acea4f4f.js";

import T, {
    __tla as ot
} from "./selectQuestion-d00a026c.js";

import nt, {
    __tla as ut
} from "./profileSettingModule-cec0e252.js";

import mt, {
    __tla as ct
} from "./selectCourseResourcePackageQuestion-b7f0fe74.js";

import {
    _ as it
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as pt
} from "./index-c4ca0ced.js";

import {
    __tla as ft
} from "./index-993301ca.js";

import {
    __tla as yt
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import "./color-a8b4eb58.js";

import {
    __tla as ht
} from "./dict-c5825220.js";

import {
    __tla as dt
} from "./index-1024512a.js";

import "./tree-05ea8e09.js";

import {
    __tla as vt
} from "./DeptTag-1be092ce.js";

import {
    __tla as kt
} from "./index-ef4d146e.js";

import {
    __tla as gt
} from "./formatTime-de6f1520.js";

import {
    __tla as bt
} from "./questionBank-6fe58de9.js";

import {
    __tla as Ct
} from "./questionPreview-3c0f3206.js";

import {
    __tla as Lt
} from "./type1-bb9ab50e.js";

import {
    __tla as St
} from "./type2-f7593207.js";

import {
    __tla as Ut
} from "./type3-f0157d42.js";

import {
    __tla as Vt
} from "./type4-e194cfc5.js";

import {
    __tla as xt
} from "./type5-5cfc2694.js";

import {
    __tla as Dt
} from "./type6-f24b6333.js";

import {
    __tla as Pt
} from "./type7-6a71ebde.js";

import {
    __tla as qt
} from "./video-1d0dc730.js";

import {
    __tla as zt
} from "./file-e038b35d.js";

import {
    __tla as It
} from "./type20-1bb6de92.js";

import {
    __tla as Tt
} from "./type30-1635403c.js";

import {
    __tla as At
} from "./myQuestionBank-a9dcc9db.js";

import {
    __tla as Nt
} from "./viewDatabase.vue_vue_type_script_setup_true_lang-a51e8548.js";

import {
    __tla as Ot
} from "./sqlDetail-6033fcff.js";

import {
    __tla as Rt
} from "./neuResourceQuestion-36ca89a3.js";

import {
    __tla as wt
} from "./selectCourseResourcePackageQuestion.vue_vue_type_style_index_0_scoped_270afb37_lang-ab43f27d.js";

let A, Mt = Promise.all([ (() => {
    try {
        return lt;
    } catch {}
})(), (() => {
    try {
        return st;
    } catch {}
})(), (() => {
    try {
        return ot;
    } catch {}
})(), (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return ct;
    } catch {}
})(), (() => {
    try {
        return pt;
    } catch {}
})(), (() => {
    try {
        return ft;
    } catch {}
})(), (() => {
    try {
        return yt;
    } catch {}
})(), (() => {
    try {
        return ht;
    } catch {}
})(), (() => {
    try {
        return dt;
    } catch {}
})(), (() => {
    try {
        return vt;
    } catch {}
})(), (() => {
    try {
        return kt;
    } catch {}
})(), (() => {
    try {
        return gt;
    } catch {}
})(), (() => {
    try {
        return bt;
    } catch {}
})(), (() => {
    try {
        return Ct;
    } catch {}
})(), (() => {
    try {
        return Lt;
    } catch {}
})(), (() => {
    try {
        return St;
    } catch {}
})(), (() => {
    try {
        return Ut;
    } catch {}
})(), (() => {
    try {
        return Vt;
    } catch {}
})(), (() => {
    try {
        return xt;
    } catch {}
})(), (() => {
    try {
        return Dt;
    } catch {}
})(), (() => {
    try {
        return Pt;
    } catch {}
})(), (() => {
    try {
        return qt;
    } catch {}
})(), (() => {
    try {
        return zt;
    } catch {}
})(), (() => {
    try {
        return It;
    } catch {}
})(), (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return At;
    } catch {}
})(), (() => {
    try {
        return Nt;
    } catch {}
})(), (() => {
    try {
        return Ot;
    } catch {}
})(), (() => {
    try {
        return Rt;
    } catch {}
})(), (() => {
    try {
        return wt;
    } catch {}
})() ]).then(async () => {
    let S, U, V, x, D;
    S = {
        class: "selectProject"
    }, U = {
        class: "steps-box"
    }, V = {
        class: "info-box"
    }, x = {
        key: 0
    }, D = {
        key: 1
    }, A = it({
        __name: "addNeuResSetting",
        props: {
            questionIdList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "insertQuestion" ],
        setup(N, {
            expose: O,
            emit: R
        }) {
            const k = b(() => useUserStore().isSupAdmin), w = R;
            t([]), t({});
            const M = t(null), m = t(!1), r = t(0), s = t("1");
            t(!0);
            const P = t(null);
            t(""), $();
            const Q = t([ {
                name: "选择试题"
            }, {
                name: "资源设置"
            } ]), c = t({
                ktPointList: [],
                teachTags: []
            }), o = t([]), j = b(() => o.value.length > 0), G = () => {
                o.value = [];
            }, H = g => {
                r.value = 1;
            }, J = () => {
                r.value = 0;
            }, q = () => {
                m.value = !1;
            }, X = () => {
                r.value = 0, s.value = "1", o.value = [], c.value = {
                    ktPointList: [],
                    teachTags: []
                };
            }, Y = b(() => [ "1", "2" ].includes(s.value) ? C(T) : s.value === "3" ? C(mt) : C(T)), B = () => {
                let g = o.value;
                w("insertQuestion", {
                    _arr: g,
                    ...c.value
                }, s.value);
            };
            return O({
                handleOpen: () => {
                    m.value = !0, K(() => {
                        P.value.getTagList();
                    });
                },
                onCancel: q
            }), (g, e) => {
                const E = _t, f = tt, W = at, y = rt, Z = et;
                return n(), L("div", S, [ _(Z, {
                    modelValue: a(m),
                    "onUpdate:modelValue": e[4] || (e[4] = l => p(m) ? m.value = l : null),
                    "max-height": 650,
                    scroll: !0,
                    truthHeight: 650,
                    width: 950,
                    title: "选择试题",
                    onClose: X
                }, {
                    footer: u(() => [ _(y, {
                        class: "mr10",
                        size: "large",
                        onClick: q
                    }, {
                        default: u(() => [ h("取消") ]),
                        _: 1
                    }), a(r) === 0 ? (n(), L("span", x, [ _(y, {
                        disabled: !j.value,
                        size: "large",
                        type: "primary",
                        onClick: H
                    }, {
                        default: u(() => [ h(" 下一步 ") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ])) : i("", !0), a(r) === 1 ? (n(), L("span", D, [ _(y, {
                        size: "large",
                        type: "primary",
                        onClick: J
                    }, {
                        default: u(() => [ h("上一步") ]),
                        _: 1
                    }), _(y, {
                        size: "large",
                        type: "primary",
                        onClick: B
                    }, {
                        default: u(() => [ h("确认") ]),
                        _: 1
                    }) ])) : i("", !0) ]),
                    default: u(() => [ d("div", U, [ _(E, {
                        activeSteps: a(r),
                        "onUpdate:activeSteps": e[0] || (e[0] = l => p(r) ? r.value = l : null),
                        allowClick: !1,
                        stepsOptions: a(Q)
                    }, null, 8, [ "activeSteps", "stepsOptions" ]) ]), d("div", V, [ z(d("div", null, [ _(W, {
                        modelValue: a(s),
                        "onUpdate:modelValue": e[1] || (e[1] = l => p(s) ? s.value = l : null),
                        class: "demo-tabs",
                        onTabChange: G
                    }, {
                        default: u(() => [ k.value ? i("", !0) : (n(), v(f, {
                            key: 0,
                            label: "个人试题库",
                            name: "1"
                        })), k.value ? i("", !0) : (n(), v(f, {
                            key: 1,
                            label: "校本试题库",
                            name: "2"
                        })), k.value ? (n(), v(f, {
                            key: 2,
                            label: "东软试题库",
                            name: "1"
                        })) : i("", !0), _(f, {
                            label: "课程资源包",
                            name: "3"
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), (n(), v(F(Y.value), {
                        ref_key: "componentRef",
                        ref: M,
                        list: a(o),
                        "onUpdate:list": e[2] || (e[2] = l => p(o) ? o.value = l : null),
                        activeName: a(s),
                        questionIdList: N.questionIdList
                    }, null, 40, [ "list", "activeName", "questionIdList" ])) ], 512), [ [ I, a(r) === 0 ] ]) ]), z(d("div", null, [ _(nt, {
                        ref_key: "ProfileSettingModuleRef",
                        ref: P,
                        formData: a(c),
                        "onUpdate:formData": e[3] || (e[3] = l => p(c) ? c.value = l : null)
                    }, null, 8, [ "formData" ]) ], 512), [ [ I, a(r) === 1 ] ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-c43831a2" ] ]);
});

export {
    Mt as __tla,
    A as default
};