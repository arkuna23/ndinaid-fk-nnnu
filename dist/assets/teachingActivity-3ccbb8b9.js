import {
    r as u,
    w as R,
    n as $,
    f as F,
    o as i,
    c as m,
    t as f,
    k as v,
    l as y,
    F as g,
    y as I,
    a as s,
    C as T,
    D as L,
    ab as M,
    ac as P,
    R as Y,
    S as A,
    __tla as q
} from "./index-6c08ea4c.js";

import z, {
    __tla as B
} from "./courseOverview-c1128aee.js";

import G, {
    __tla as H
} from "./projectOverview-d3eed6c6.js";

import {
    b as K,
    D as Q,
    __tla as W
} from "./dict-c5825220.js";

import {
    g as X,
    b as Z,
    c as ee,
    __tla as ae
} from "./system-b59f2a4a.js";

import {
    _ as le
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./index-eb0ca811.js";

import "./install-67fb146c.js";

import "./install-0c30d2d2.js";

let J, te = Promise.all([ (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return ae;
    } catch {}
})() ]).then(async () => {
    let b, w, E, S, V;
    b = {
        class: "teaching-activity"
    }, w = {
        class: "row1"
    }, E = (c => (Y("data-v-ed71ee2e"), c = c(), A(), c))(() => f("span", {
        class: "row1-title"
    }, "教学活动", -1)), S = {
        class: "search-box"
    }, V = {
        key: 0,
        class: "row-content"
    }, J = le({
        __name: "teachingActivity",
        setup(c) {
            const k = u(), p = u(!1), h = u(!1), _ = u([]), x = u([]), D = u([]), a = u({
                levelId: null,
                optionUsedId: null,
                termId: null
            });
            R(() => a.value, l => {
                C();
            }, {
                deep: !0
            });
            const N = () => {
                X().then(l => {
                    if (l && l.length) {
                        l.forEach(t => {
                            t.termStartTime = t.termStartTime.join("."), t.termEndTime = t.termEndTime.join(".");
                        }), D.value = l;
                        var r = l.filter(t => t.isCurrentTerm == 1);
                        if (r.length) a.value.termId = r[0].id; else {
                            var o, n = (t => {
                                const d = new Date(t);
                                return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
                            })(new Date().getTime()), e = l.filter(t => t.termStartTime <= n && t.termEndTime >= n);
                            e.length ? e.length == 1 ? a.value.termId = e[0].id : ((o = JSON.parse(JSON.stringify(e))).sort((t, d) => d.createTime - t.createTime), 
                            a.value.termId = o[0].id) : ((o = JSON.parse(JSON.stringify(l))).sort((t, d) => d.createTime - t.createTime), 
                            a.value.termId = o[0].id);
                        }
                    }
                    p.value = !0;
                });
            }, U = l => {
                ee({
                    level: l
                }).then(r => {
                    x.value = r;
                });
            }, j = l => {
                l && (a.value.optionUsedId = null, U(l));
            }, O = u(null), C = () => {
                h.value && p.value && $(() => {
                    k.value.getDate(), O.value.getData();
                });
            };
            return F(() => {
                N(), Z().then(l => {
                    var r = K(Q.SYSTEM_DEPT_LEVEL);
                    l.forEach(o => {
                        r.forEach(n => {
                            n.value == o && _.value.push(n);
                        });
                    }), _.value.length && (a.value.levelId = _.value[0].value, U(a.value.levelId)), 
                    h.value = !0;
                });
            }), (l, r) => {
                const o = M, n = P;
                return i(), m("div", b, [ f("div", w, [ E, f("div", S, [ v(n, {
                    modelValue: s(a).termId,
                    "onUpdate:modelValue": r[0] || (r[0] = e => s(a).termId = e),
                    placeholder: "请选择学期",
                    style: {
                        width: "180px"
                    }
                }, {
                    default: y(() => [ (i(!0), m(g, null, I(s(D), e => (i(), T(o, {
                        key: e.id,
                        value: e.id,
                        label: e.name
                    }, null, 8, [ "value", "label" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]), v(n, {
                    modelValue: s(a).levelId,
                    "onUpdate:modelValue": r[1] || (r[1] = e => s(a).levelId = e),
                    placeholder: "请选择组织",
                    class: "ml-10px",
                    style: {
                        width: "120px"
                    },
                    onChange: j
                }, {
                    default: y(() => [ (i(!0), m(g, null, I(s(_), e => (i(), T(o, {
                        key: e.value,
                        value: e.value,
                        label: e.label
                    }, null, 8, [ "value", "label" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]), v(n, {
                    modelValue: s(a).optionUsedId,
                    "onUpdate:modelValue": r[2] || (r[2] = e => s(a).optionUsedId = e),
                    placeholder: "请选择组织类别",
                    class: "ml-10px",
                    style: {
                        width: "120px"
                    }
                }, {
                    default: y(() => [ (i(!0), m(g, null, I(s(x), e => (i(), T(o, {
                        key: e.id,
                        value: e.code,
                        label: e.name
                    }, null, 8, [ "value", "label" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]) ]), s(h) && s(p) ? (i(), m("div", V, [ v(z, {
                    options: s(a),
                    ref_key: "courseOverviewRef",
                    ref: O
                }, null, 8, [ "options" ]), v(G, {
                    options: s(a),
                    ref_key: "projectOverviewRef",
                    ref: k
                }, null, 8, [ "options" ]) ])) : L("", !0) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-ed71ee2e" ] ]);
});

export {
    te as __tla,
    J as default
};