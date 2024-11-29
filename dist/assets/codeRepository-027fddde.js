import {
    a7 as e,
    __tla as y
} from "./index-6c08ea4c.js";

let s, r, o, p, i, c, l, u, d, n = Promise.all([ (() => {
    try {
        return y;
    } catch {}
})() ]).then(async () => {
    let t;
    t = "resource", l = async a => await e.get({
        url: `/${t}/code-repository/get?id=` + a
    }), o = async a => await e.post({
        url: `/${t}/code-repository/create`,
        data: a
    }), d = async a => await e.put({
        url: `/${t}/code-repository/update`,
        data: a
    }), r = async a => await e.put({
        url: `/${t}/code-repository/update/status`,
        data: a
    }), p = async a => await e.delete({
        url: `/${t}/code-repository/delete?id=` + a
    }), c = async a => await e.get({
        url: `/${t}/code-repository/page/private`,
        params: a
    }), i = async a => await e.get({
        url: `/${t}/code-repository/page/public`,
        params: a
    }), u = async a => await e.get({
        url: `/${t}/code-repository/page/option`,
        params: a
    }), s = async a => await e.get({
        url: "/env-api/judge/api/v1/sys/languages",
        params: a
    });
});

export {
    n as __tla,
    s as a,
    r as b,
    o as c,
    p as d,
    i as e,
    c as f,
    l as g,
    u as h,
    d as u
};