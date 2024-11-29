import {
    a7 as t,
    __tla as c
} from "./index-6c08ea4c.js";

let r, u, l, p, m, d, o, y, i, n, g = Promise.all([ (() => {
    try {
        return c;
    } catch {}
})() ]).then(async () => {
    d = s => t.get({
        url: "/system/user/page",
        params: s
    }), o = s => t.get({
        url: "/system/user/option",
        params: s
    }), u = s => t.get({
        url: "/system/user/get?id=" + s
    }), l = s => t.post({
        url: "/system/user/create",
        data: s
    }), p = s => t.put({
        url: "/system/user/update",
        data: s
    }), m = () => t.download({
        url: "/system/user/sync/import-template"
    }), y = async s => await t.upload({
        url: "/system/user/sync/import",
        data: s
    }), i = (s, a) => {
        const e = {
            ids: s,
            password: a
        };
        return t.put({
            url: "/system/user/update/password",
            data: e
        });
    }, n = (s, a) => {
        const e = {
            ids: s,
            status: a
        };
        return t.put({
            url: "/system/user/update/status",
            data: e
        });
    }, r = () => t.get({
        url: "/system/user/simple-list"
    });
});

export {
    g as __tla,
    r as a,
    u as b,
    l as c,
    p as d,
    m as e,
    d as f,
    o as g,
    y as i,
    i as r,
    n as u
};