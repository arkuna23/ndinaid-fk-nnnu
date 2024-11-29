import {
    a7 as r,
    __tla as _
} from "./index-6c08ea4c.js";

let u, a, n, c, s, o, p, l, g, m, i, f, k, d, h, y = Promise.all([ (() => {
    try {
        return _;
    } catch {}
})() ]).then(async () => {
    s = function(e) {
        return r.post({
            url: "/resource/tenant-pkg/create/pkg",
            data: e
        });
    }, h = function(e) {
        return r.put({
            url: "/resource/tenant-pkg/update",
            data: e
        });
    }, m = function(e) {
        return r.get({
            url: "/resource/project/check-course-pk-status",
            params: e
        });
    }, o = function(e) {
        return r.get({
            url: "/resource/tenant-pkg/tree",
            params: e
        });
    }, f = function(e, t) {
        return r.put({
            url: "/resource/tenant-pkg/move",
            params: e,
            data: t
        });
    }, i = function(e) {
        return r.delete({
            url: "/resource/tenant-pkg/delete?release=0",
            data: e
        });
    }, p = function(e) {
        return r.get({
            url: "/resource/tenant-pkg/page",
            params: e
        });
    }, a = function(e, t) {
        return r.put({
            url: "/resource/tenant-pkg/release",
            params: e,
            data: t
        });
    }, d = function(e) {
        return r.get({
            url: "/resource/tenant-pkg/route",
            params: e
        });
    }, c = function(e) {
        return r.get({
            url: "/resource/tenant-pkg/check-folder-name",
            params: e
        });
    }, l = function(e, t) {
        return r.put({
            url: t ? "/resource/neu-teach-course-column/updateBatch" : "/resource/tenant-course-column/create-update",
            data: t ? e.courseColumnArray : e
        });
    }, g = function(e, t) {
        return r.get({
            url: t ? "/resource/neu-teach-course-column/getByPkg?id=" + e : "/resource/tenant-course-column/get/" + e
        });
    }, k = e => r.put({
        url: "/resource/tenant-pkg/copy",
        params: e
    }), n = function(e) {
        return r.get({
            url: "/resource/auth/checkAuth",
            params: e
        });
    }, u = function(e) {
        return r.get({
            url: "/resource/auth/single-log",
            params: e
        });
    };
});

export {
    y as __tla,
    u as a,
    a as b,
    n as c,
    c as d,
    s as e,
    o as f,
    p as g,
    l as h,
    g as i,
    m as j,
    i as k,
    f as m,
    k as p,
    d as r,
    h as u
};