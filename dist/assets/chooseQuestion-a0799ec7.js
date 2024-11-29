import {
    e as f,
    h as N,
    r as y,
    w as I,
    aX as h,
    o as m,
    C as u,
    l as s,
    k as n,
    a as c,
    v as L,
    m as C,
    D as v,
    aY as T,
    M as j,
    s as B,
    J,
    aU as M,
    __tla as P
} from "./index-6c08ea4c.js";

import Q, {
    __tla as R
} from "./selectQuestion-d00a026c.js";

import S, {
    __tla as X
} from "./selectCourseResourcePackageQuestion-b7f0fe74.js";

import {
    __tla as Y
} from "./index-c4ca0ced.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as z
} from "./index-993301ca.js";

import {
    __tla as E
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import "./color-a8b4eb58.js";

import {
    __tla as F
} from "./dict-c5825220.js";

import {
    __tla as G
} from "./index-1024512a.js";

import "./tree-05ea8e09.js";

import {
    __tla as H
} from "./DeptTag-1be092ce.js";

import {
    __tla as K
} from "./index-ef4d146e.js";

import {
    __tla as O
} from "./formatTime-de6f1520.js";

import {
    __tla as W
} from "./questionBank-6fe58de9.js";

import {
    __tla as Z
} from "./questionPreview-3c0f3206.js";

import {
    __tla as $
} from "./type1-bb9ab50e.js";

import {
    __tla as tt
} from "./type2-f7593207.js";

import {
    __tla as at
} from "./type3-f0157d42.js";

import {
    __tla as rt
} from "./type4-e194cfc5.js";

import {
    __tla as _t
} from "./type5-5cfc2694.js";

import {
    __tla as et
} from "./type6-f24b6333.js";

import {
    __tla as lt
} from "./type7-6a71ebde.js";

import {
    __tla as ot
} from "./video-1d0dc730.js";

import {
    __tla as mt
} from "./file-e038b35d.js";

import {
    __tla as ut
} from "./type20-1bb6de92.js";

import {
    __tla as st
} from "./type30-1635403c.js";

import {
    __tla as it
} from "./myQuestionBank-a9dcc9db.js";

import {
    __tla as nt
} from "./viewDatabase.vue_vue_type_script_setup_true_lang-a51e8548.js";

import {
    __tla as ct
} from "./sqlDetail-6033fcff.js";

import {
    __tla as pt
} from "./selectCourseResourcePackageQuestion.vue_vue_type_style_index_0_scoped_270afb37_lang-ab43f27d.js";

let U, dt = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return tt;
    } catch {}
})(), (() => {
    try {
        return at;
    } catch {}
})(), (() => {
    try {
        return rt;
    } catch {}
})(), (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return et;
    } catch {}
})(), (() => {
    try {
        return lt;
    } catch {}
})(), (() => {
    try {
        return ot;
    } catch {}
})(), (() => {
    try {
        return mt;
    } catch {}
})(), (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return st;
    } catch {}
})(), (() => {
    try {
        return it;
    } catch {}
})(), (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return ct;
    } catch {}
})(), (() => {
    try {
        return pt;
    } catch {}
})() ]).then(async () => {
    U = {
        __name: "chooseQuestion",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            },
            questionIdList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "update:modelValue", "insertQuestion" ],
        setup(V, {
            emit: g
        }) {
            const p = f(() => N().isSupAdmin), d = g, b = V, a = y("1"), i = f({
                get: () => b.modelValue,
                set: e => {
                    d("update:modelValue", e);
                }
            });
            I(() => b.questionIdList, () => {}, {
                deep: !0,
                immediate: !0
            }), I(() => i.value, e => {
                e && (a.value = "1", k(), r.value && r.value.init && r.value.init());
            });
            const r = y(), _ = y([]), k = () => {
                r.value && r.value.init && r.value.init(), _.value = [];
            }, w = (e, t) => {
                let l = _.value;
                d("insertQuestion", l, a.value, e, t), d("update:modelValue", !1);
            }, x = f(() => [ "1", "2" ].includes(a.value) ? h(Q) : a.value === "3" ? h(S) : h(Q));
            return (e, t) => {
                const l = j, A = B, q = J, D = M;
                return m(), u(D, {
                    modelValue: i.value,
                    "onUpdate:modelValue": t[3] || (t[3] = o => i.value = o),
                    width: "900px",
                    title: "选择试题"
                }, {
                    footer: s(() => [ n(q, {
                        type: "primary",
                        onClick: w,
                        disabled: c(_).length === 0
                    }, {
                        default: s(() => [ L(" 确认 ") ]),
                        _: 1
                    }, 8, [ "disabled" ]), n(q, {
                        onClick: t[2] || (t[2] = o => i.value = !1)
                    }, {
                        default: s(() => [ L("取消") ]),
                        _: 1
                    }) ]),
                    default: s(() => [ n(A, {
                        modelValue: c(a),
                        "onUpdate:modelValue": t[0] || (t[0] = o => C(a) ? a.value = o : null),
                        class: "demo-tabs",
                        onTabChange: k
                    }, {
                        default: s(() => [ p.value ? v("", !0) : (m(), u(l, {
                            key: 0,
                            label: "个人试题库",
                            name: "1"
                        })), p.value ? v("", !0) : (m(), u(l, {
                            key: 1,
                            label: "校本试题库",
                            name: "2"
                        })), p.value ? (m(), u(l, {
                            key: 2,
                            label: "东软试题库",
                            name: "1"
                        })) : v("", !0), n(l, {
                            label: "课程资源包",
                            name: "3"
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), (m(), u(T(x.value), {
                        list: c(_),
                        "onUpdate:list": t[1] || (t[1] = o => C(_) ? _.value = o : null),
                        questionIdList: V.questionIdList,
                        ref_key: "componentRef",
                        ref: r,
                        activeName: c(a)
                    }, null, 40, [ "list", "questionIdList", "activeName" ])) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    };
});

export {
    dt as __tla,
    U as default
};