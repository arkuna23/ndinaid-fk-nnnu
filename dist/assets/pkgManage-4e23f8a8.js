import {
    a7 as r,
    __tla as E
} from "./index-6c08ea4c.js";

let t, a, s, u, o, c, n, l, d, p, g, i, m, _, k, y, w, x, b, h, f, I, j, q, v, P = Promise.all([ (() => {
    try {
        return E;
    } catch {}
})() ]).then(async () => {
    d = e => r.get({
        url: "/resource/tenant-course-guidance/get/pkg/" + e
    }), g = e => r.post({
        url: "/resource/tenant-course-guidance/create",
        data: e
    }), p = e => r.put({
        url: "/resource/tenant-course-guidance/update",
        data: e
    }), i = e => r.get({
        url: "/resource/tenant-course-material/get/pkg/" + e
    }), _ = e => r.post({
        url: "/resource/tenant-course-material/create",
        data: e
    }), m = e => r.put({
        url: "/resource/tenant-course-material/update",
        data: e
    }), k = e => r.get({
        url: "/resource/tenant-course-target/list",
        params: e
    }), h = e => r.post({
        url: "/resource/tenant-course-target/create",
        data: e
    }), x = e => r.put({
        url: "/resource/tenant-course-target/update",
        data: e
    }), I = e => r.upload({
        url: "/resource/tenant-course-target/import",
        data: e,
        timeout: 36e5
    }), w = e => r.delete({
        url: "/resource/tenant-course-target/delete",
        data: e
    }), y = e => r.download({
        url: "/resource/tenant-course-target/export-excel",
        params: e
    }), j = e => r.downloadError({
        url: "/resource/tenant-course-target/error-download",
        responseType: "blob",
        data: e
    }), q = e => r.get({
        url: "/resource/tenant-course-resource/list",
        params: e
    }), o = e => r.post({
        url: "/resource/tenant-course-resource/create-set-up",
        data: e
    }), s = e => r.post({
        url: "/resource/tenant-course-tag/create",
        data: e
    }), f = e => r.put({
        url: "/resource/tenant-course-tag/update",
        data: e
    }), u = e => r.delete({
        url: "/resource/tenant-course-tag/delete",
        data: e
    }), t = e => r.get({
        url: "/resource/tenant-course-tag/list/" + e
    }), n = e => r.get({
        url: "/resource/tenant-course-directory/list-tree/" + e
    }), l = e => r.put({
        url: "/resource/tenant-course-resource/update/res-name",
        data: e
    }), c = e => r.delete({
        url: "/resource/tenant-course-resource/delete",
        data: e
    }), a = e => r.get({
        url: "/resource/tenant-course-resource/get/" + e
    }), v = e => r.get({
        url: "/resource/tenant-course-resource/get/res-pkg/" + e.pkgId + "/data-id/" + e.dataId
    }), b = e => r.put({
        url: "/resource/tenant-course-resource/set-up",
        data: e
    });
});

export {
    P as __tla,
    t as a,
    a as b,
    s as c,
    u as d,
    o as e,
    c as f,
    n as g,
    l as h,
    d as i,
    p as j,
    g as k,
    i as l,
    m,
    _ as n,
    k as o,
    y as p,
    w as q,
    x as r,
    b as s,
    h as t,
    f as u,
    I as v,
    j as w,
    q as x,
    v as y
};