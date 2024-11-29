import {
    a7 as t,
    __tla as u
} from "./index-6c08ea4c.js";

let e, s, n, p, r, l, g, m = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})() ]).then(async () => {
    e = a => t.get({
        url: "/system/tenant-package/page",
        params: a
    }), l = a => t.get({
        url: "/system/tenant-package/get?id=" + a
    }), n = a => t.post({
        url: "/system/tenant-package/create",
        data: a
    }), g = a => t.put({
        url: "/system/tenant-package/update",
        data: a
    }), s = a => t.put({
        url: "/system/tenant-package/update/status",
        params: a
    }), p = a => t.delete({
        url: "/system/tenant-package/delete?id=" + a
    }), r = a => t.get({
        showLoading: !1,
        url: "/system/tenant-package/option",
        params: a
    });
});

export {
    m as __tla,
    e as a,
    s as b,
    n as c,
    p as d,
    r as e,
    l as g,
    g as u
};