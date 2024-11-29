import {
    a0 as b,
    o as e,
    c as a,
    F as g,
    y as w,
    t as i,
    a as t,
    z as B,
    B as _,
    k as l,
    l as m,
    e9 as O,
    aP as P,
    D as j,
    aQ as q,
    __tla as A
} from "./index-6c08ea4c.js";

import {
    _ as D
} from "./_plugin-vue_export-helper-1b428a4d.js";

let y, F = Promise.all([ (() => {
    try {
        return A;
    } catch {}
})() ]).then(async () => {
    let c, p, n, r, o;
    c = {
        class: "neu-steps"
    }, p = [ "onClick" ], n = {
        key: 1,
        class: "step-circle-icon success"
    }, r = {
        class: "steps-name ml-2"
    }, o = {
        key: 0,
        class: "steps-divider"
    }, y = D({
        __name: "index",
        props: {
            stepsOptions: {
                type: Array,
                required: !0
            },
            activeSteps: {
                type: Number,
                default: () => 0
            },
            allowClick: {
                type: Boolean,
                default: !0
            }
        },
        emits: [ "update:activeSteps" ],
        setup(k, {
            emit: f
        }) {
            const S = k, {
                stepsOptions: d,
                activeSteps: u,
                allowClick: C
            } = b(S), h = f;
            return (I, N) => {
                const v = q;
                return e(), a("div", c, [ (e(!0), a(g, null, w(t(d), (z, s) => (e(), 
                a("div", {
                    key: s,
                    class: "steps-item"
                }, [ i("div", {
                    class: "steps-content",
                    onClick: Q => (x => {
                        if (!C.value) return !1;
                        h("update:activeSteps", x);
                    })(s)
                }, [ s >= t(u) ? (e(), a("div", {
                    key: 0,
                    class: B([ "step-circle-icon", {
                        active: s == t(u)
                    } ])
                }, _(s + 1), 3)) : (e(), a("div", n, [ l(v, {
                    size: "20"
                }, {
                    default: m(() => [ l(t(O)) ]),
                    _: 1
                }) ])), i("div", r, [ i("span", null, _(z.name), 1) ]) ], 8, p), s + 1 < t(d).length ? (e(), 
                a("div", o, [ l(v, {
                    size: "14"
                }, {
                    default: m(() => [ l(t(P)) ]),
                    _: 1
                }) ])) : j("", !0) ]))), 128)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a7cfc8d4" ] ]);
});

export {
    y as _,
    F as __tla
};