import {
    a7 as a,
    __tla as i
} from "./index-6c08ea4c.js";

let e, s, n, d, r, l, c = Promise.all([ (() => {
    try {
        return i;
    } catch {}
})() ]).then(async () => {
    e = t => a.get({
        url: "/system/tenant-dict/page",
        params: t
    }), r = t => a.get({
        url: "/system/tenant-dict/get?id=" + t
    }), n = t => a.post({
        url: "/system/tenant-dict/create",
        data: t
    }), l = t => a.put({
        url: "/system/tenant-dict/update",
        data: t
    }), d = t => a.delete({
        url: "/system/tenant-dict/delete?id=" + t
    }), s = t => a.get({
        showLoading: !1,
        url: "/system/tenant-dict/option",
        params: t
    });
});

export {
    c as __tla,
    e as a,
    s as b,
    n as c,
    d,
    r as g,
    l as u
};