import {
    a7 as t,
    __tla as b
} from "./index-6c08ea4c.js";

let r, e, s, l, u, i, o, n, d, g = Promise.all([ (() => {
    try {
        return b;
    } catch {}
})() ]).then(async () => {
    e = a => t.get({
        url: "/infra/job/page",
        params: a
    }), o = a => t.get({
        url: "/infra/job/get?id=" + a
    }), s = a => t.post({
        url: "/infra/job/create",
        data: a
    }), d = a => t.put({
        url: "/infra/job/update",
        data: a
    }), i = a => t.delete({
        url: "/infra/job/delete?id=" + a
    }), u = a => t.download({
        url: "/infra/job/export-excel",
        params: a
    }), l = (a, p) => {
        const f = {
            id: a,
            status: p
        };
        return t.put({
            url: "/infra/job/update-status",
            params: f
        });
    }, n = a => t.put({
        url: "/infra/job/trigger?id=" + a
    }), r = a => t.get({
        url: "/infra/job/get_next_times?id=" + a
    });
});

export {
    g as __tla,
    r as a,
    e as b,
    s as c,
    l as d,
    u as e,
    i as f,
    o as g,
    n as r,
    d as u
};