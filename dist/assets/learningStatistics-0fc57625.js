import {
    _ as i,
    __tla as r
} from "./ContentPage-f6bcc98e.js";

import o, {
    __tla as n
} from "./attendance-a336b1f6.js";

import {
    _
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    o as d,
    C as m,
    l as p,
    k as u,
    R as v,
    S as b,
    t as a,
    v as g,
    __tla as f
} from "./index-6c08ea4c.js";

import "./index-0d885c8d.js";

import "./install-67fb146c.js";

let l, x = Promise.all([ (() => {
    try {
        return r;
    } catch {}
})(), (() => {
    try {
        return n;
    } catch {}
})(), (() => {
    try {
        return f;
    } catch {}
})() ]).then(async () => {
    let s;
    s = (t => (v("data-v-bd68c8ab"), t = t(), b(), t))(() => a("div", {
        class: "attendance w-50%"
    }, [ a("div", {
        class: "pb-30px pl-27px pt-10px"
    }, [ a("div", {
        class: "title mb-27px"
    }, " 课程考勤 "), a("div", {
        class: "message"
    }, [ a("div", {
        class: "message-top"
    }, [ a("div", {
        class: "title"
    }, " 总出勤率 "), a("div", {
        class: "num"
    }, [ g(" 99.5"), a("span", null, "%") ]) ]), a("div", {
        class: "message-bottom"
    }, [ a("div", {
        class: "title"
    }, " 总出勤率 "), a("div", {
        class: "num"
    }, " 3 ") ]) ]) ]) ], -1)), l = _({
        __name: "learningStatistics",
        setup: t => (e, h) => {
            const c = i;
            return d(), m(c, {
                class: "learning-statistics",
                title: "学习统计",
                onRouterBack: e.backRoute,
                noPadding: !1,
                noBgColor: !0
            }, {
                default: p(() => [ s, u(o) ]),
                _: 1
            }, 8, [ "onRouterBack" ]);
        }
    }, [ [ "__scopeId", "data-v-bd68c8ab" ] ]);
});

export {
    x as __tla,
    l as default
};