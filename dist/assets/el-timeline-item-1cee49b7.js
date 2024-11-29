import {
    d as m,
    aE as u,
    b9 as T,
    i as w,
    aI as c,
    aD as S,
    a_ as B,
    e as E,
    o as l,
    c as o,
    t as p,
    z as s,
    a,
    x as $,
    C as y,
    l as x,
    aY as z,
    aQ as I,
    D as n,
    B as f,
    aG as C,
    aL as D,
    aM as G,
    __tla as L
} from "./index-6c08ea4c.js";

let v, _, M = Promise.all([ (() => {
    try {
        return L;
    } catch {}
})() ]).then(async () => {
    const g = m({
        name: "ElTimeline",
        setup(d, {
            slots: i
        }) {
            const e = u("timeline");
            return T("timeline", i), () => w("ul", {
                class: [ e.b() ]
            }, [ c(i, "default") ]);
        }
    }), b = S({
        timestamp: {
            type: String,
            default: ""
        },
        hideTimestamp: {
            type: Boolean,
            default: !1
        },
        center: {
            type: Boolean,
            default: !1
        },
        placement: {
            type: String,
            values: [ "top", "bottom" ],
            default: "bottom"
        },
        type: {
            type: String,
            values: [ "primary", "success", "warning", "danger", "info" ],
            default: ""
        },
        color: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            values: [ "normal", "large" ],
            default: "normal"
        },
        icon: {
            type: B
        },
        hollow: {
            type: Boolean,
            default: !1
        }
    }), h = m({
        name: "ElTimelineItem"
    });
    var r = C(m({
        ...h,
        props: b,
        setup(d) {
            const i = d, e = u("timeline-item"), k = E(() => [ e.e("node"), e.em("node", i.size || ""), e.em("node", i.type || ""), e.is("hollow", i.hollow) ]);
            return (t, P) => (l(), o("li", {
                class: s([ a(e).b(), {
                    [a(e).e("center")]: t.center
                } ])
            }, [ p("div", {
                class: s(a(e).e("tail"))
            }, null, 2), t.$slots.dot ? n("v-if", !0) : (l(), o("div", {
                key: 0,
                class: s(a(k)),
                style: $({
                    backgroundColor: t.color
                })
            }, [ t.icon ? (l(), y(a(I), {
                key: 0,
                class: s(a(e).e("icon"))
            }, {
                default: x(() => [ (l(), y(z(t.icon))) ]),
                _: 1
            }, 8, [ "class" ])) : n("v-if", !0) ], 6)), t.$slots.dot ? (l(), o("div", {
                key: 1,
                class: s(a(e).e("dot"))
            }, [ c(t.$slots, "dot") ], 2)) : n("v-if", !0), p("div", {
                class: s(a(e).e("wrapper"))
            }, [ t.hideTimestamp || t.placement !== "top" ? n("v-if", !0) : (l(), 
            o("div", {
                key: 0,
                class: s([ a(e).e("timestamp"), a(e).is("top") ])
            }, f(t.timestamp), 3)), p("div", {
                class: s(a(e).e("content"))
            }, [ c(t.$slots, "default") ], 2), t.hideTimestamp || t.placement !== "bottom" ? n("v-if", !0) : (l(), 
            o("div", {
                key: 1,
                class: s([ a(e).e("timestamp"), a(e).is("bottom") ])
            }, f(t.timestamp), 3)) ], 2) ], 2));
        }
    }), [ [ "__file", "timeline-item.vue" ] ]);
    _ = D(g, {
        TimelineItem: r
    }), v = G(r);
});

export {
    v as E,
    M as __tla,
    _ as a
};