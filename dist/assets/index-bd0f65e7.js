import {
    d as a,
    r as l,
    f as r,
    o as n,
    c,
    t as _,
    B as i,
    a as o,
    __tla as m
} from "./index-6c08ea4c.js";

let s, u = Promise.all([ (() => {
    try {
        return m;
    } catch {}
})() ]).then(async () => {
    let e;
    e = {
        class: "flex items-center justify-center h-screen w-screen"
    }, s = a({
        name: "MyTest",
        __name: "index",
        setup(f) {
            const t = l("Hello");
            return r(() => {}), (d, h) => (n(), c("div", e, [ _("h1", null, i(o(t)), 1) ]));
        }
    });
});

export {
    u as __tla,
    s as default
};