import {
    d as _,
    az as T,
    o as h,
    c as b,
    t,
    B as p,
    k,
    l as w,
    aa as E,
    J as C,
    v as H,
    __tla as L
} from "./index-6c08ea4c.js";

let f, R = Promise.all([ (() => {
    try {
        return L;
    } catch {}
})() ]).then(async () => {
    let a, o, l, n, i, m, c, u;
    a = "" + new URL("404-1759fece.svg", import.meta.url).href, o = "" + new URL("500-8fda557c.svg", import.meta.url).href, 
    l = "" + new URL("403-af24f6bf.svg", import.meta.url).href, n = {
        class: "flex justify-center"
    }, i = {
        class: "text-center"
    }, m = [ "src" ], c = {
        class: "text-14px text-[var(--el-color-info)]"
    }, u = {
        class: "mt-20px"
    }, f = _({
        name: "Error",
        __name: "Error",
        props: {
            type: T.string.validate(r => [ "404", "500", "403" ].includes(r)).def("404")
        },
        emits: [ "errorClick" ],
        setup(r, {
            emit: d
        }) {
            const {
                t: e
            } = E(), s = {
                404: {
                    url: a,
                    message: e("error.pageError"),
                    buttonText: e("error.returnToHome")
                },
                500: {
                    url: o,
                    message: e("error.networkError"),
                    buttonText: e("error.returnToHome")
                },
                403: {
                    url: l,
                    message: e("error.noPermission"),
                    buttonText: e("error.returnToHome")
                }
            }, x = r, g = d, v = () => {
                g("errorClick", x.type);
            };
            return (U, P) => {
                const y = C;
                return h(), b("div", n, [ t("div", i, [ t("img", {
                    src: s[r.type].url,
                    alt: "",
                    width: "350"
                }, null, 8, m), t("div", c, p(s[r.type].message), 1), t("div", u, [ k(y, {
                    type: "primary",
                    onClick: v
                }, {
                    default: w(() => [ H(p(s[r.type].buttonText), 1) ]),
                    _: 1
                }) ]) ]) ]);
            };
        }
    });
});

export {
    f as _,
    R as __tla
};