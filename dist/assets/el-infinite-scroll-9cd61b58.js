import {
    df as N,
    c4 as L,
    n as _,
    bL as B,
    dT as I,
    __tla as O
} from "./index-6c08ea4c.js";

import {
    t as h,
    __tla as j
} from "./throttle-1adeb119.js";

let g, x = Promise.all([ (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})() ]).then(async () => {
    const o = "ElInfiniteScroll", E = {
        delay: {
            type: Number,
            default: 200
        },
        distance: {
            type: Number,
            default: 0
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        immediate: {
            type: Boolean,
            default: !0
        }
    }, f = (t, l) => Object.entries(E).reduce((n, [ e, c ]) => {
        var d, a;
        const {
            type: u,
            default: r
        } = c, s = t.getAttribute(`infinite-scroll-${e}`);
        let i = (a = (d = l[s]) != null ? d : s) != null ? a : r;
        return i = i !== "false" && i, i = u(i), n[e] = Number.isNaN(i) ? r : i, 
        n;
    }, {}), y = t => {
        const {
            observer: l
        } = t[o];
        l && (l.disconnect(), delete t[o].observer);
    }, H = (t, l) => {
        const {
            container: n,
            containerEl: e,
            instance: c,
            observer: d,
            lastScrollTop: a
        } = t[o], {
            disabled: u,
            distance: r
        } = f(t, c), {
            clientHeight: s,
            scrollHeight: i,
            scrollTop: b
        } = e, S = b - a;
        if (t[o].lastScrollTop = b, d || u || S < 0) return;
        let v = !1;
        if (n === t) v = i - (s + b) <= r; else {
            const {
                clientTop: T,
                scrollHeight: w
            } = t;
            v = b + s >= I(t, e) + T + w - r;
        }
        v && l.call(c);
    };
    function m(t, l) {
        const {
            containerEl: n,
            instance: e
        } = t[o], {
            disabled: c
        } = f(t, e);
        c || n.clientHeight === 0 || (n.scrollHeight <= n.clientHeight ? l.call(e) : y(t));
    }
    let p;
    p = {
        async mounted(t, l) {
            const {
                instance: n,
                value: e
            } = l;
            N(e) || L(o, "'v-infinite-scroll' binding value must be a function"), 
            await _();
            const {
                delay: c,
                immediate: d
            } = f(t, n), a = B(t, !0), u = a === window ? document.documentElement : a, r = h(H.bind(null, t, e), c);
            if (a) {
                if (t[o] = {
                    instance: n,
                    container: a,
                    containerEl: u,
                    delay: c,
                    cb: e,
                    onScroll: r,
                    lastScrollTop: u.scrollTop
                }, d) {
                    const s = new MutationObserver(h(m.bind(null, t, e), 50));
                    t[o].observer = s, s.observe(t, {
                        childList: !0,
                        subtree: !0
                    }), m(t, e);
                }
                a.addEventListener("scroll", r);
            }
        },
        unmounted(t) {
            const {
                container: l,
                onScroll: n
            } = t[o];
            l == null || l.removeEventListener("scroll", n), y(t);
        },
        async updated(t) {
            if (t[o]) {
                const {
                    containerEl: l,
                    cb: n,
                    observer: e
                } = t[o];
                l.clientHeight && e && m(t, n);
            } else await _();
        },
        install: t => {
            t.directive("InfiniteScroll", p);
        }
    }, g = p;
});

export {
    g as E,
    x as __tla
};