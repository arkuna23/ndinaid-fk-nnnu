import {
    a7 as e,
    __tla as _
} from "./index-6c08ea4c.js";

let t, d, s, r, n, u, o, i, m, l, c, p, f, g, w, y, h = Promise.all([ (() => {
    try {
        return _;
    } catch {}
})() ]).then(async () => {
    f = async a => await e.get({
        url: "/infra/demo03-student/page",
        params: a
    }), o = async a => await e.get({
        url: "/infra/demo03-student/get?id=" + a
    }), s = async a => await e.post({
        url: "/infra/demo03-student/create",
        data: a
    }), y = async a => await e.put({
        url: "/infra/demo03-student/update",
        data: a
    }), g = async a => await e.delete({
        url: "/infra/demo03-student/delete?id=" + a
    }), w = async a => await e.download({
        url: "/infra/demo03-student/export-excel",
        params: a
    }), n = async a => await e.get({
        url: "/infra/demo03-student/demo03-course/page",
        params: a
    }), d = async a => await e.post({
        url: "/infra/demo03-student/demo03-course/create",
        data: a
    }), r = async a => await e.put({
        url: "/infra/demo03-student/demo03-course/update",
        data: a
    }), u = async a => await e.delete({
        url: "/infra/demo03-student/demo03-course/delete?id=" + a
    }), t = async a => await e.get({
        url: "/infra/demo03-student/demo03-course/get?id=" + a
    }), c = async a => await e.get({
        url: "/infra/demo03-student/demo03-grade/page",
        params: a
    }), m = async a => await e.post({
        url: "/infra/demo03-student/demo03-grade/create",
        data: a
    }), l = async a => await e.put({
        url: "/infra/demo03-student/demo03-grade/update",
        data: a
    }), p = async a => await e.delete({
        url: "/infra/demo03-student/demo03-grade/delete?id=" + a
    }), i = async a => await e.get({
        url: "/infra/demo03-student/demo03-grade/get?id=" + a
    });
});

export {
    h as __tla,
    t as a,
    d as b,
    s as c,
    r as d,
    n as e,
    u as f,
    o as g,
    i as h,
    m as i,
    l as j,
    c as k,
    p as l,
    f as m,
    g as n,
    w as o,
    y as u
};