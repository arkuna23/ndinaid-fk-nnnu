import {
    a7 as e,
    __tla as i
} from "./index-6c08ea4c.js";

let s, a, l, r, d, p, y, m = Promise.all([ (() => {
    try {
        return i;
    } catch {}
})() ]).then(async () => {
    p = () => e.get({
        url: "/system/dict-type/list-all-simple"
    }), a = t => e.get({
        url: "/system/dict-type/page",
        params: t
    }), s = t => e.get({
        url: "/system/dict-type/get?id=" + t
    }), l = t => e.post({
        url: "/system/dict-type/create",
        data: t
    }), y = t => e.put({
        url: "/system/dict-type/update",
        data: t
    }), r = t => e.delete({
        url: "/system/dict-type/delete?id=" + t
    }), d = t => e.download({
        url: "/system/dict-type/export",
        params: t
    });
});

export {
    m as __tla,
    s as a,
    a as b,
    l as c,
    r as d,
    d as e,
    p as g,
    y as u
};