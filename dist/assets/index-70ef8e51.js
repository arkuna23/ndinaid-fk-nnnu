import {
    a7 as t,
    __tla as n
} from "./index-6c08ea4c.js";

let s, a, m, l, r, u, d = Promise.all([ (() => {
    try {
        return n;
    } catch {}
})() ]).then(async () => {
    r = () => t.get({
        url: "/system/menu/option"
    }), a = e => t.get({
        url: "/system/menu/list",
        params: e
    }), s = e => t.get({
        url: "/system/menu/get?id=" + e
    }), m = e => t.post({
        url: "/system/menu/create",
        data: e
    }), u = e => t.put({
        url: "/system/menu/update",
        data: e
    }), l = e => t.delete({
        url: "/system/menu/delete?id=" + e
    });
});

export {
    d as __tla,
    s as a,
    a as b,
    m as c,
    l as d,
    r as g,
    u
};