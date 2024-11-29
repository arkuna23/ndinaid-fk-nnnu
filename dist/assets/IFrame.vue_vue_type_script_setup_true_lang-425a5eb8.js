import {
    d as i,
    az as u,
    r as e,
    f,
    A as _,
    a as s,
    o as h,
    c as d,
    t as p,
    x as g,
    a9 as y,
    __tla as v
} from "./index-6c08ea4c.js";

let l, x = Promise.all([ (() => {
    try {
        return v;
    } catch {}
})() ]).then(async () => {
    let a;
    a = [ "src" ], l = i({
        name: "IFrame",
        __name: "IFrame",
        props: {
            src: u.string.def("")
        },
        setup(n) {
            const c = n, t = e(!0), r = e(""), m = e(null);
            return f(() => {
                setTimeout(() => {
                    r.value = document.documentElement.clientHeight - 94.5 + "px", 
                    t.value = !1;
                }, 300);
            }), (F, I) => {
                const o = y;
                return _((h(), d("div", {
                    style: g("height:" + s(r))
                }, [ p("iframe", {
                    ref_key: "frameRef",
                    ref: m,
                    src: c.src,
                    frameborder: "no",
                    scrolling: "auto",
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }, null, 8, a) ], 4)), [ [ o, s(t) ] ]);
            };
        }
    });
});

export {
    l as _,
    x as __tla
};