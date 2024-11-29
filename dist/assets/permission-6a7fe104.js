import {
    aa as c,
    e5 as o,
    e6 as l,
    __tla as i
} from "./index-6c08ea4c.js";

let a, _ = Promise.all([ (() => {
    try {
        return i;
    } catch {}
})() ]).then(async () => {
    const {
        t: m
    } = c();
    a = function(t) {
        if (t && t instanceof Array && t.length > 0) {
            const {
                wsCache: r
            } = o(), n = t, s = "*:*:*";
            return !!r.get(l.USER).permissions.some(e => s === e || n.includes(e));
        }
        return !1;
    };
});

export {
    _ as __tla,
    a as c
};