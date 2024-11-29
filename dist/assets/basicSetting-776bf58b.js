import d, {
    __tla as h
} from "./teachingAssistantSetting-56962d3c.js";

import u, {
    __tla as f
} from "./coursePackage-61b06611.js";

import {
    _ as b
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    r as v,
    o as l,
    c as C,
    t as r,
    z as p,
    a as _,
    C as m,
    D as n,
    __tla as g
} from "./index-6c08ea4c.js";

import {
    __tla as k
} from "./index-c834085f.js";

import {
    __tla as j
} from "./el-link-8197297a.js";

import {
    __tla as z
} from "./basicSetting-c1425caa.js";

import {
    __tla as D
} from "./formatTime-de6f1520.js";

import {
    __tla as I
} from "./index-cfc63ccf.js";

let x, P = Promise.all([ (() => {
    try {
        return h;
    } catch {}
})(), (() => {
    try {
        return f;
    } catch {}
})(), (() => {
    try {
        return g;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})() ]).then(async () => {
    let s, e, c;
    s = {
        style: {
            height: "calc(100% - 48px)"
        }
    }, e = {
        class: "mt-8px flex pb8px",
        style: {
            "justify-content": "center",
            "border-bottom": "1px solid #CCCCCC"
        }
    }, c = {
        class: "pb-10px pl-20px pr-20px pt-10px",
        style: {
            height: "calc(100% - 49px)",
            "box-sizing": "border-box"
        }
    }, x = b({
        __name: "basicSetting",
        setup(S) {
            const t = v(1), i = o => {
                t.value = o;
            };
            return (o, a) => (l(), C("div", s, [ r("div", e, [ r("div", {
                class: p([ "title mr-8px", _(t) === 1 ? "title-active" : "" ]),
                onClick: a[0] || (a[0] = y => i(1))
            }, "助教设置", 2), r("div", {
                class: p([ "title mr-8px", _(t) === 2 ? "title-active" : "" ]),
                onClick: a[1] || (a[1] = y => i(2))
            }, "生成资源包", 2) ]), r("div", c, [ _(t) === 1 ? (l(), m(d, {
                key: 0
            })) : n("", !0), _(t) === 2 ? (l(), m(u, {
                key: 1
            })) : n("", !0) ]) ]));
        }
    }, [ [ "__scopeId", "data-v-95d942b2" ] ]);
});

export {
    P as __tla,
    x as default
};