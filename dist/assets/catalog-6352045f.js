import {
    a7 as a,
    __tla as n
} from "./index-6c08ea4c.js";

let r, t, c, o, s, d, l, u, h, i, m, p = Promise.all([ (() => {
    try {
        return n;
    } catch {}
})() ]).then(async () => {
    d = e => a.post({
        url: "/teachmanager/teach-course-directory/create",
        data: e
    }), l = e => a.post({
        url: "/teachmanager/teach-course-directory/listTree",
        data: e
    }), t = e => a.get({
        url: "/teachmanager/teach-course-directory/get",
        params: e
    }), m = e => a.put({
        url: "/teachmanager/teach-course-directory/update",
        data: e
    }), o = e => a.delete({
        url: "/teachmanager/teach-course-directory/delete",
        params: e
    }), u = e => a.delete({
        url: "/teachmanager/teach-course-directory/deleteDirs",
        data: e
    }), c = e => a.post({
        url: "/teachmanager/teach-course-directory/creatByTemplate",
        data: e
    }), i = e => a.post({
        url: "/teachmanager/teach-course-directory/fastcreate",
        data: e
    }), s = () => a.download({
        url: "/teachmanager/teach-course-directory/export-excel",
        timeout: 36e4,
        showLoading: !1
    }), h = e => a.upload({
        url: "/teachmanager/teach-course-directory/import",
        data: e
    }), r = e => a.downloadError({
        url: "/teachmanager/teach-course-directory/export-error",
        responseType: "blob",
        data: e
    });
});

export {
    p as __tla,
    r as a,
    t as b,
    c,
    o as d,
    s as e,
    d as f,
    l as g,
    u as h,
    h as i,
    i as q,
    m as u
};