import {
    a7 as t,
    dG as p,
    __tla as d
} from "./index-6c08ea4c.js";

let s, e, r, y, i, n, g, l, m, u, o = Promise.all([ (() => {
    try {
        return d;
    } catch {}
})() ]).then(async () => {
    l = async a => await t.get({
        url: "/system/notify-message/page",
        params: a
    }), g = async a => await t.get({
        url: "/system/notify-target/page",
        params: a
    }), u = async a => await t.put({
        url: "/system/notify-message/update-read?" + p.stringify({
            ids: a
        }, {
            indices: !1
        })
    }), s = async () => await t.put({
        url: "/system/notify-message/update-all-read"
    }), e = async () => await t.get({
        url: "/system/notify-target/get-unread-count"
    }), y = async a => await t.get({
        url: "/system/notify-target/page",
        params: a,
        showLoading: !1
    }), m = async a => await t.put({
        url: "/system/notify-target/update-read",
        data: a
    }), r = async a => await t.get({
        url: "/system/notify-target/get",
        params: a
    }), n = async a => await t.put({
        url: "/system/notify-target/update-all-read",
        params: a
    }), i = async a => await t.delete({
        url: "/system/notify-target/delete",
        params: a
    });
});

export {
    o as __tla,
    s as a,
    e as b,
    r as c,
    y as d,
    i as e,
    n as f,
    g,
    l as h,
    m as s,
    u
};