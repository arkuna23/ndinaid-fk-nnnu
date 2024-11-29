import p, {
    __tla as u
} from "./userNumText-5d93fc53.js";

import f, {
    __tla as y
} from "./userNumEchart-1864238e.js";

import d, {
    __tla as h
} from "./visitsNumEchart-5775bea4.js";

import v, {
    __tla as x
} from "./resourceManagement-e11f0bfa.js";

import S, {
    __tla as g
} from "./examinationSituation-a434900b.js";

import I, {
    __tla as R
} from "./teachingActivity-3ccbb8b9.js";

import {
    _ as M
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    o as b,
    c as j,
    t,
    k as a,
    R as k,
    S as A,
    __tla as E
} from "./index-6c08ea4c.js";

import {
    __tla as P
} from "./system-b59f2a4a.js";

import "./index-eb0ca811.js";

import "./install-67fb146c.js";

import "./install-0c30d2d2.js";

import "./index-0d885c8d.js";

import {
    __tla as q
} from "./managementSideCorrelation-1acb9a2c.js";

import {
    __tla as w
} from "./dict-c5825220.js";

import {
    __tla as z
} from "./courseOverview-c1128aee.js";

import {
    __tla as B
} from "./projectOverview-d3eed6c6.js";

let n, C = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})(), (() => {
    try {
        return y;
    } catch {}
})(), (() => {
    try {
        return h;
    } catch {}
})(), (() => {
    try {
        return x;
    } catch {}
})(), (() => {
    try {
        return g;
    } catch {}
})(), (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return w;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})() ]).then(async () => {
    let _, e, l, m, s, o, c, i;
    _ = r => (k("data-v-7c854113"), r = r(), A(), r), e = {
        class: "managementSide"
    }, l = {
        class: "line1"
    }, m = {
        class: "line1Item"
    }, s = _(() => t("span", {
        class: "_title"
    }, "用户数据", -1)), o = {
        class: "line1Item"
    }, c = _(() => t("span", {
        class: "_title"
    }, "访问量", -1)), i = {
        class: "resourceManagementAndExaminationSituation mt10"
    }, n = M({
        __name: "systemIndex",
        setup: r => (D, F) => (b(), j("div", e, [ t("div", l, [ t("div", m, [ s, a(p), a(f) ]), t("div", o, [ c, a(d) ]) ]), a(I), t("div", i, [ a(v, {
            ref: "resourceManagementRef"
        }, null, 512), a(S, {
            ref: "examinationSituationRef"
        }, null, 512) ]) ]))
    }, [ [ "__scopeId", "data-v-7c854113" ] ]);
});

export {
    C as __tla,
    n as default
};