import {
    a7 as a,
    __tla as u
} from "./index-6c08ea4c.js";

let e, s, r, d, m, o, l, i = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})() ]).then(async () => {
    e = t => a.get({
        url: "/system/major-dict/page",
        params: t
    }), o = t => a.get({
        url: "/system/major-dict/get?id=" + t
    }), r = t => a.post({
        url: "/system/major-dict/create",
        data: t
    }), l = t => a.put({
        url: "/system/major-dict/update",
        data: t
    }), s = t => a.put({
        url: "/system/major-dict/update/status",
        data: t
    }), d = t => a.delete({
        url: "/system/major-dict/delete?id=" + t
    }), m = () => a.get({
        showLoading: !1,
        url: "/system/major-dict/option"
    });
});

export {
    i as __tla,
    e as a,
    s as b,
    r as c,
    d,
    m as e,
    o as g,
    l as u
};