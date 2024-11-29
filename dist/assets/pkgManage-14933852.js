import {
    a7 as r,
    __tla as R
} from "./index-6c08ea4c.js";

let a, t, u, s, c, o, l, n, p, d, g, h, m, i, y, k, B, _, x, D, P, b, f, w, T, v, j, q = Promise.all([ (() => {
    try {
        return R;
    } catch {}
})() ]).then(async () => {
    m = e => r.get({
        url: "/resource/neu-teach-course-guidance/getByPkg",
        params: e
    }), k = e => r.post({
        url: "/resource/neu-teach-course-guidance/create",
        data: e
    }), i = e => r.put({
        url: "/resource/neu-teach-course-guidance/update",
        data: e
    }), B = e => r.get({
        url: "/resource/neu-teach-course-material/getByPkg",
        params: e
    }), x = e => r.post({
        url: "/resource/neu-teach-course-material/create",
        data: e
    }), _ = e => r.put({
        url: "/resource/neu-teach-course-material/update",
        data: e
    }), P = e => r.get({
        url: "/resource/neu-teach-course-target/getByPkg",
        params: e
    }), T = e => r.post({
        url: "/resource/neu-teach-course-target/saveOrUpdateTarget",
        data: e
    }), v = e => r.upload({
        url: "/resource/neu-teach-course-target/import",
        data: e,
        timeout: 36e5
    }), w = e => r.delete({
        url: "/resource/neu-teach-course-target/delete",
        params: e
    }), f = e => r.download({
        url: "/resource/neu-teach-course-target/export-excel",
        params: e
    }), j = e => r.downloadError({
        url: "/resource/neu-teach-course-target/export-error",
        responseType: "blob",
        data: e
    }), o = function(e) {
        return r.get({
            url: "/resource/data/tree-neu",
            params: e
        });
    }, y = function(e) {
        return r.get({
            url: "/resource/neu-pkg/course-list",
            params: e
        });
    }, a = e => r.get({
        url: "/resource/neu-teach-course-res/search/page",
        params: e
    }), p = e => r.post({
        url: "/resource/neu-teach-course-res/create",
        data: e
    }), s = e => r.post({
        url: "/resource/neu-teach-course-tag/create",
        data: e
    }), b = e => r.put({
        url: "/resource/neu-teach-course-tag/update",
        data: e
    }), c = e => r.delete({
        url: "/resource/neu-teach-course-tag/delete",
        params: e
    }), t = e => r.get({
        url: "/resource/neu-teach-course-tag/getByPkg",
        params: e
    }), n = e => r.get({
        url: "/resource/neu-teach-course-directory/getNeuTeachCourseDirectoryDropDown",
        params: e
    }), h = e => r.put({
        url: "/resource/neu-teach-course-res/update",
        data: e
    }), g = (e, I) => r.delete({
        url: "/resource/neu-teach-course-res/delete/batch",
        params: e,
        data: I
    }), l = e => r.get({
        url: "/resource/neu-teach-course-res/get",
        params: e
    }), d = e => r.post({
        url: "/resource/neu-teach-course-res/setRes",
        data: e
    }), D = e => r.post({
        url: "/resource/neu-teach-course-res/setResByDataIds",
        data: e
    }), u = e => r.get({
        url: "/resource/neu-teach-course-res/getByDataId",
        params: e
    });
});

export {
    a as A,
    q as __tla,
    t as a,
    u as b,
    s as c,
    c as d,
    o as e,
    l as f,
    n as g,
    p as h,
    d as i,
    g as j,
    h as k,
    m as l,
    i as m,
    y as n,
    k as o,
    B as p,
    _ as q,
    x as r,
    D as s,
    P as t,
    b as u,
    f as v,
    w,
    T as x,
    v as y,
    j as z
};