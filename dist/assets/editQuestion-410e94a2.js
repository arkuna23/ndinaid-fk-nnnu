import {
    d as x,
    r as l,
    a0 as N,
    o as Q,
    c as z,
    k as o,
    l as s,
    t as S,
    a as _,
    v as f,
    m as T,
    n as V,
    J as F,
    __tla as P
} from "./index-6c08ea4c.js";

import {
    E as b,
    __tla as j
} from "./el-drawer-fca4d971.js";

import w, {
    __tla as A
} from "./manualConstruction-e91dda30.js";

import {
    _ as J
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as M
} from "./questionInfo-7ad6a9af.js";

import {
    __tla as O
} from "./type1-81e690fe.js";

import {
    __tla as U
} from "./editEditor-a03e6696.js";

import {
    __tla as D
} from "./Editor-ef737d2a.js";

import {
    __tla as G
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as H
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as K
} from "./file-e038b35d.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

import {
    __tla as L
} from "./type2-cee6fed1.js";

import {
    __tla as W
} from "./type3-da6f6f46.js";

import {
    __tla as X
} from "./type4-0f2e1cd1.js";

import {
    __tla as Y
} from "./type5-a6b47fc2.js";

import {
    __tla as Z
} from "./type6-9fcada99.js";

import {
    __tla as $
} from "./type7-f25f20ee.js";

import {
    __tla as tt
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import "./color-a8b4eb58.js";

import {
    __tla as at
} from "./dict-c5825220.js";

import {
    __tla as rt
} from "./video-1d0dc730.js";

import {
    __tla as _t
} from "./index-5adb716b.js";

import {
    __tla as et
} from "./type30-8bfa018d.js";

import {
    __tla as lt
} from "./sqlInfo-6616efed.js";

import {
    __tla as ot
} from "./sqlDetail-6033fcff.js";

import {
    __tla as st
} from "./myQuestionBank-a9dcc9db.js";

import {
    __tla as nt
} from "./type20-0744bc00.js";

import {
    __tla as it
} from "./questionBank-6fe58de9.js";

import {
    __tla as mt
} from "./chooseTags-11285796.js";

import {
    __tla as ct
} from "./neuResourceQuestion-36ca89a3.js";

let y, ut = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return D;
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
        return L;
    } catch {}
})(), (() => {
    try {
        return W;
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
        return st;
    } catch {}
})(), (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return it;
    } catch {}
})(), (() => {
    try {
        return mt;
    } catch {}
})(), (() => {
    try {
        return ct;
    } catch {}
})() ]).then(async () => {
    let i, m;
    i = {
        class: "editQuestionContainer"
    }, m = {
        class: "algin-center"
    }, y = J(x({
        __name: "editQuestion",
        props: {
            isEdit: {
                type: Boolean,
                default: !0
            },
            parentId: {
                type: String,
                default: ""
            },
            isNeuRes: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "refreshTheFlag" ],
        setup(d, {
            expose: h,
            emit: v
        }) {
            const g = v, r = l(!1), e = l(null), c = l(!1), u = l({}), I = d, {
                isEdit: C,
                parentId: E,
                isNeuRes: B
            } = N(I), R = t => {
                c.value = t, t || (r.value = t, g("refreshTheFlag"));
            }, k = () => {
                e.value.initTagModule();
            };
            return h({
                handleOpen: (t = {}) => {
                    var a;
                    t && (r.value = !0, t.questionBody.langId && (t.questionBody.langId = ((a = t.questionBody.langId) == null ? void 0 : a.toString()) ?? ""), 
                    u.value = t, V(() => {
                        e.value.copyContentByEdit();
                    }));
                }
            }), (t, a) => {
                const p = F, q = b;
                return Q(), z("div", i, [ o(q, {
                    modelValue: _(r),
                    "onUpdate:modelValue": a[2] || (a[2] = n => T(r) ? r.value = n : null),
                    class: "entry-drawer",
                    direction: "rtl",
                    size: "100%",
                    title: "编辑试题",
                    onClose: k
                }, {
                    footer: s(() => [ S("div", m, [ o(p, {
                        loading: _(c),
                        size: "large",
                        type: "primary",
                        onClick: a[0] || (a[0] = n => {
                            e.value.saveExamQuestions();
                        })
                    }, {
                        default: s(() => [ f(" 确定 ") ]),
                        _: 1
                    }, 8, [ "loading" ]), o(p, {
                        size: "large",
                        onClick: a[1] || (a[1] = n => r.value = !1)
                    }, {
                        default: s(() => [ f("返回") ]),
                        _: 1
                    }) ]) ]),
                    default: s(() => [ o(w, {
                        ref_key: "manualConstructionRef",
                        ref: e,
                        isEdit: _(C),
                        isNeuRes: _(B),
                        parentId: _(E),
                        onCallAPIStatus: R,
                        form: _(u)
                    }, null, 8, [ "isEdit", "isNeuRes", "parentId", "form" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-3597afc7" ] ]);
});

export {
    ut as __tla,
    y as default
};