import {
    a7 as a,
    __tla as m
} from "./index-6c08ea4c.js";

let t, u, n, s, o, c, l, d, p, i, f = Promise.all([ (() => {
    try {
        return m;
    } catch {}
})() ]).then(async () => {
    u = function(r) {
        return a.post({
            url: "/resource/data/create",
            data: r
        });
    }, o = function(r) {
        return a.delete({
            url: "/resource/data/delete?release=0",
            data: r
        });
    }, i = function(r) {
        return a.put({
            url: "/resource/data/update",
            data: r
        });
    }, c = function(r) {
        return a.get({
            url: "/resource/data/page",
            params: r
        });
    }, t = function(r, e) {
        return a.put({
            url: "/resource/data/release",
            params: r,
            data: e
        });
    }, p = function(r) {
        return a.get({
            url: "/resource/data/route",
            params: r
        });
    }, s = function(r) {
        return a.get({
            url: "/resource/data/tree",
            params: r
        });
    }, d = function(r) {
        return a.get({
            url: "/resource/tenant-pkg/getPkgListbyUserId",
            params: r
        });
    }, l = function(r, e) {
        return a.put({
            url: "/resource/data/move",
            params: r,
            data: e
        });
    }, n = function(r) {
        return a.get({
            url: "/resource/data/check-folder-name",
            params: r
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
    d as p,
    p as r,
    i as u
};