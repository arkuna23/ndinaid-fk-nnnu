import {
    bZ as r,
    bD as o,
    __tla as c
} from "./index-6c08ea4c.js";

let l, _ = Promise.all([ (() => {
    try {
        return c;
    } catch {}
})() ]).then(async () => {
    l = function(a, e, t) {
        var n = !0, i = !0;
        if (typeof a != "function") throw new TypeError("Expected a function");
        return r(t) && (n = "leading" in t ? !!t.leading : n, i = "trailing" in t ? !!t.trailing : i), 
        o(a, e, {
            leading: n,
            maxWait: e,
            trailing: i
        });
    };
});

export {
    _ as __tla,
    l as t
};