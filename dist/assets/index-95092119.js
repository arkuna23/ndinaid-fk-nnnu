import {
    a7 as a,
    __tla as d
} from "./index-6c08ea4c.js";

let s, e, r, y, l, i, n, o, m, c, p, u, g = Promise.all([ (() => {
    try {
        return d;
    } catch {}
})() ]).then(async () => {
    o = t => a.get({
        url: "/system/notice/page",
        params: t
    }), r = t => a.get({
        url: "/system/notice/get?id=" + t
    }), l = t => a.post({
        url: "/system/notice/create",
        data: t
    }), i = t => a.put({
        url: "/system/notice/update",
        data: t
    }), m = t => a.delete({
        url: "/system/notice/delete?id=" + t
    }), c = t => a.post({
        url: "/system/notice/push?id=" + t
    }), e = async t => await a.get({
        url: "/system/notify/page",
        params: t
    }), s = async t => await a.post({
        url: "/system/notify/create",
        data: t
    }), u = async t => await a.post({
        url: "/system/notify/update",
        data: t
    }), n = async t => await a.get({
        url: "/system/notify/get",
        params: t
    }), p = async t => await a.post({
        url: "/system/notify/recall",
        params: t
    }), y = async t => await a.delete({
        url: "/system/notify/delete",
        params: t
    });
});

export {
    g as __tla,
    s as a,
    e as b,
    r as c,
    y as d,
    l as e,
    i as f,
    n as g,
    o as h,
    m as i,
    c as p,
    p as r,
    u
};