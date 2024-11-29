import {
    a7 as e,
    __tla as g
} from "./index-6c08ea4c.js";

let t, u, n, o, s, c, d, l, i, p = Promise.all([ (() => {
    try {
        return g;
    } catch {}
})() ]).then(async () => {
    t = function(r, a) {
        return e.post({
            url: "/resource/graduation/create-neu" + (a ? "?tenantId=" + a.tenantId : ""),
            data: r
        });
    }, s = function(r, a) {
        return e.delete({
            url: "/resource/graduation/delete-neu?release=" + a,
            data: r
        });
    }, u = function(r) {
        return e.get({
            url: "/resource/graduation/page-neu",
            params: r
        });
    }, i = function(r) {
        return e.put({
            url: "/resource/graduation/update",
            data: r
        });
    }, l = function(r = 1, a) {
        return e.put({
            url: "/resource/graduation/release?release=" + r,
            data: a
        });
    }, d = function(r, a) {
        return e.put({
            url: "/resource/graduation/move-neu",
            params: r,
            data: a
        });
    }, o = function(r) {
        return e.get({
            url: "/resource/graduation/route-neu",
            params: r
        });
    }, c = function(r) {
        return e.get({
            url: "/resource/graduation/tree-neu",
            params: r
        });
    }, n = function(r) {
        return e.get({
            url: "/resource/graduation/check-neu-folder-name",
            params: r
        });
    };
});

export {
    p as __tla,
    t as a,
    u as b,
    n as c,
    o as d,
    s as e,
    c as g,
    d as m,
    l as r,
    i as u
};