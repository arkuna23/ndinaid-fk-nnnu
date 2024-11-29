import {
    a7 as r,
    __tla as m
} from "./index-6c08ea4c.js";

let t, u, n, s, o, c, l, d, p, f = Promise.all([ (() => {
    try {
        return m;
    } catch {}
})() ]).then(async () => {
    n = function(e) {
        return r.post({
            url: "/resource/data/create-neu",
            data: e
        });
    }, s = function(e) {
        return r.delete({
            url: "/resource/data/delete-neu?release=0",
            data: e
        });
    }, p = function(e) {
        return r.put({
            url: "/resource/data/update",
            data: e
        });
    }, c = function(e) {
        return r.get({
            url: "/resource/data/page-neu",
            params: e
        });
    }, t = function(e, a) {
        return r.put({
            url: "/resource/data/release",
            params: e,
            data: a
        });
    }, d = function(e) {
        return r.get({
            url: "/resource/data/route-neu",
            params: e
        });
    }, o = function(e) {
        return r.get({
            url: "/resource/data/tree-neu",
            params: e
        });
    }, l = function(e, a) {
        return r.put({
            url: "/resource/data/move-neu",
            params: e,
            data: a
        });
    }, u = function(e) {
        return r.get({
            url: "/resource/data/check-neu-folder-name",
            params: e
        });
    };
});

export {
    f as __tla,
    t as a,
    u as b,
    n as c,
    s as d,
    o as e,
    c as g,
    l as m,
    d as r,
    p as u
};