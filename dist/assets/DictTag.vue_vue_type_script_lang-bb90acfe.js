import {
    i as f
} from "./color-a8b4eb58.js";

import {
    d as y,
    r as d,
    k as v,
    L as _,
    __tla as m
} from "./index-6c08ea4c.js";

import {
    c as g,
    __tla as T
} from "./dict-c5825220.js";

let c, h = Promise.all([ (() => {
    try {
        return m;
    } catch {}
})(), (() => {
    try {
        return T;
    } catch {}
})() ]).then(async () => {
    c = y({
        name: "DictTag",
        props: {
            type: {
                type: String,
                required: !0
            },
            value: {
                type: [ String, Number, Boolean, null ],
                required: !0
            },
            size: {
                type: String,
                default: "default"
            },
            round: {
                type: Boolean,
                default: !1
            },
            effect: {
                type: String,
                default: "light"
            }
        },
        setup(e) {
            const t = d(), p = () => {
                var s, o, u, n, i;
                return e.type ? e.value === void 0 || e.value === null ? null : (r = e.type, 
                l = e.value.toString(), g(r).forEach(a => {
                    a.value === l && (a.colorType + "" != "primary" && a.colorType + "" != "default" || (a.colorType = ""), 
                    t.value = a);
                }), v(_, {
                    style: (s = t.value) != null && s.cssClass ? "color: #fff" : "",
                    type: ((o = t.value) == null ? void 0 : o.colorType) || "primary",
                    color: (u = t.value) != null && u.cssClass && f((n = t.value) == null ? void 0 : n.cssClass) ? (i = t.value) == null ? void 0 : i.cssClass : "",
                    disableTransitions: !0,
                    size: e.size,
                    round: e.round,
                    effect: e.effect
                }, {
                    default: () => {
                        var a;
                        return [ (a = t.value) == null ? void 0 : a.label ];
                    }
                })) : null;
                var r, l;
            };
            return () => p();
        }
    });
});

export {
    c as _,
    h as __tla
};