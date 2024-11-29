import {
    a7 as t,
    __tla as h
} from "./index-6c08ea4c.js";

let s, e, d, p, y, l, i, r, u, n, m, c, o, w, g, _, f = Promise.all([ (() => {
    try {
        return h;
    } catch {}
})() ]).then(async () => {
    s = async a => await t.get({
        showLoading: !1,
        url: "/system/dept/option",
        params: a
    }), g = async a => await t.get({
        url: "/system/dept/list",
        params: a
    }), p = async a => await t.get({
        url: "/system/dept/get?id=" + a
    }), y = async a => await t.post({
        url: "/system/dept/create",
        data: a
    }), _ = async a => await t.put({
        url: "/system/dept/update",
        data: a
    }), w = async a => await t.put({
        url: "system/dept/update/status",
        data: a
    }), o = async a => await t.delete({
        url: "/system/dept/delete?id=" + a
    }), e = async a => await t.download({
        url: "/system/dept/sync/import-template",
        params: a
    }), u = async a => await t.upload({
        url: "/system/dept/sync/import",
        data: a
    }), l = async () => await t.get({
        url: "/system/dept-tag/list"
    }), d = async a => await t.get({
        showLoading: !1,
        url: "/system/dept-tag/option",
        params: a
    }), i = async () => await t.get({
        url: "/system/dept-tag/option-used"
    }), n = async a => await t.post({
        url: "/system/dept-tag/create",
        data: a
    }), r = async a => await t.put({
        url: "/system/dept-tag/update",
        data: a
    }), m = async a => await t.put({
        url: "system/dept-tag/update/status",
        data: a
    }), c = async a => await t.delete({
        url: "/system/dept-tag/delete?id=" + a
    });
});

export {
    f as __tla,
    s as a,
    e as b,
    d as c,
    p as d,
    y as e,
    l as f,
    i as g,
    r as h,
    u as i,
    n as j,
    m as k,
    c as l,
    o as m,
    w as n,
    g as o,
    _ as u
};