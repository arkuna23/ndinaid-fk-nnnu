import {
    a7 as e,
    __tla as n
} from "./index-6c08ea4c.js";

let s, r, c, u, l, d, i, o, p = Promise.all([ (() => {
    try {
        return n;
    } catch {}
})() ]).then(async () => {
    let t;
    t = "resource", c = async () => await e.get({
        showLoading: !1,
        url: `/${t}/data-source/create-id`
    }), r = async a => await e.get({
        url: `/${t}/data-source/get?id=` + a
    }), u = async a => await e.post({
        url: `/${t}/data-source/create`,
        data: a
    }), o = async a => await e.put({
        url: `/${t}/data-source/update`,
        data: a
    }), l = async a => await e.delete({
        url: `/${t}/data-source/delete?id=` + a
    }), s = async a => await e.get({
        url: `/${t}/data-source/page/private`,
        params: a
    }), d = async a => await e.get({
        url: `/${t}/data-source/page/public`,
        params: a
    }), i = async a => await e.get({
        url: "/env-api/env/envTemplate",
        params: a
    });
});

export {
    p as __tla,
    s as a,
    r as b,
    c,
    u as d,
    l as e,
    d as f,
    i as g,
    o as u
};