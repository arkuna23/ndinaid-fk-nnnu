import x, {
    __tla as j
} from "./testPaperMarking-b9cba0bc.js";

import {
    g as I,
    m as w,
    __tla as H
} from "./markingCenter-690f9b44.js";

import {
    _ as N
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    r as e,
    a0 as O,
    o as C,
    c as g,
    k as D,
    a as _,
    m as L,
    __tla as V
} from "./index-6c08ea4c.js";

import {
    __tla as P
} from "./el-drawer-fca4d971.js";

import {
    __tla as R
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import "./color-a8b4eb58.js";

import {
    __tla as T
} from "./dict-c5825220.js";

import {
    __tla as B
} from "./largeQuestionPreview-20dd6ad1.js";

import {
    __tla as F
} from "./markCounterByQuestion-78d7029b.js";

import {
    __tla as U
} from "./questionMark-832136d5.js";

import {
    __tla as q
} from "./type1-d2f1fe5f.js";

import {
    __tla as z
} from "./formatTime-de6f1520.js";

import {
    __tla as A
} from "./type2-23e73879.js";

import {
    __tla as E
} from "./type3-99183189.js";

import {
    __tla as G
} from "./type4-8e8aae4d.js";

import {
    __tla as J
} from "./type5-c77ba902.js";

import "./keyboardDisable-3c8e0d58.js";

import {
    __tla as K
} from "./type6-10786b18.js";

import {
    __tla as M
} from "./type7-6d90f77a.js";

import {
    __tla as Q
} from "./index-bbb36ead.js";

import {
    __tla as W
} from "./file-e038b35d.js";

import {
    __tla as X
} from "./type20-1c61a004.js";

import {
    __tla as Y
} from "./myQuestionBank-a9dcc9db.js";

import {
    __tla as Z
} from "./type30-727e9366.js";

import "./el-collapse-transition-4ed993c7.js";

import {
    __tla as $
} from "./sqlDetail-4b79b2e5.js";

let p, tt = Promise.all([ (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return V;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return T;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return Q;
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
})() ]).then(async () => {
    let n;
    n = {
        class: "reviseContainer"
    }, p = N({
        __name: "heavyLoad",
        props: {
            headerObj: {
                type: Object,
                default: () => {}
            }
        },
        emits: [ "handleDrawerClose" ],
        setup(f, {
            expose: h,
            emit: d
        }) {
            const y = d, r = e(!1), o = e({}), m = e("2"), c = e({
                finalScore: 0,
                objectiveScore: 0
            }), a = e({
                examName: "",
                nickName: "",
                number: "",
                examId: "",
                multiSelectionHalfScoreSwitch: ""
            }), v = f, {
                headerObj: l
            } = O(v), S = () => {
                s();
            }, b = () => {
                r.value = !1, y("handleDrawerClose");
            }, u = () => {
                a.value.examId = l.value.examId, a.value.nickName = l.value.nickName, 
                a.value.number = l.value.number;
                let i = {
                    volumeFlag: !0,
                    paperId: l.value.candidatePaperId
                };
                I({
                    id: i.paperId
                }).then(t => {
                    c.value.finalScore = t.finalScore, c.value.objectiveScore = t.objectiveScore;
                }), w(i).then(t => {
                    o.value = {
                        ...t
                    }, a.value.examName = o.value.examName, a.value.multiSelectionHalfScoreSwitch = t == null ? void 0 : t.multiSelectionHalfScoreSwitch, 
                    r.value = !0;
                });
            }, s = () => {
                m.value = "2", u();
            };
            return h({
                makeCorrections: s,
                openDetails: () => {
                    m.value = "3", u();
                }
            }), (i, t) => (C(), g("div", n, [ D(x, {
                modelValue: _(r),
                "onUpdate:modelValue": t[0] || (t[0] = k => L(r) ? r.value = k : null),
                form: _(o),
                informationHeaderObj: _(a),
                markType: _(m),
                scoreList: _(c),
                onReReadSubmit: S,
                onHandleBack: b
            }, null, 8, [ "modelValue", "form", "informationHeaderObj", "markType", "scoreList" ]) ]));
        }
    }, [ [ "__scopeId", "data-v-608c4db7" ] ]);
});

export {
    tt as __tla,
    p as default
};