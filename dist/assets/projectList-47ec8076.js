import {
    a7 as e,
    __tla as _
} from "./index-6c08ea4c.js";

let u, o, a, n, c, s, l, p, f, i, d, j, g, m, h = Promise.all([ (() => {
    try {
        return _;
    } catch {}
})() ]).then(async () => {
    n = function(r) {
        return e.get({
            url: "/resource/project/folder/page-list-neu",
            params: r
        });
    }, p = function(r) {
        return e.get({
            url: "/resource/project/folder/page-list-person",
            params: r
        });
    }, s = function(r) {
        return e.get({
            url: "/resource/project/folder/page-list-school",
            params: r
        });
    }, f = function(r) {
        return e.get({
            url: "/resource/project/folder/current-tree",
            params: r
        });
    }, d = function(r) {
        return e.delete({
            url: "/resource/project/folder/delete",
            data: r
        });
    }, c = function(r) {
        return e.put({
            url: "/resource/project/folder/edit",
            data: r
        });
    }, g = function(r) {
        return e.put({
            url: "/resource/project/folder/move",
            data: r
        });
    }, a = function(r) {
        return e.post({
            url: "/resource/project/folder/create",
            data: r
        });
    }, o = function(r) {
        return e.get({
            url: "/resource/project/folder/folder-tree",
            params: r
        });
    }, j = function(r, t) {
        return e.put({
            url: `/resource/project/open/${r}`,
            data: t
        });
    }, m = function(r, t) {
        return e.put({
            url: `/resource/project/available/${r}`,
            data: t
        });
    }, i = function(r) {
        return e.post({
            url: "/resource/project/copy",
            params: r
        });
    }, l = function(r) {
        return e.get({
            url: "/resource/auth/project/use/page",
            params: r
        });
    }, u = function(r) {
        return e.get({
            url: "/resource/auth/single-log",
            params: r
        });
    };
});

export {
    h as __tla,
    u as a,
    o as b,
    a as c,
    n as d,
    c as e,
    s as f,
    l as g,
    p as h,
    f as i,
    i as j,
    d as k,
    j as l,
    g as m,
    m as n
};