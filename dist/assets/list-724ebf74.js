import {
    a7 as r,
    __tla as i
} from "./index-6c08ea4c.js";

let u, t, a, n, s, c, o, p, l, g, f, k = Promise.all([ (() => {
    try {
        return i;
    } catch {}
})() ]).then(async () => {
    s = function(e) {
        return r.get({
            url: "/resource/neu-pkg/search/page",
            params: e
        });
    }, a = function(e) {
        return r.post({
            url: "/resource/neu-pkg/create/user",
            data: e
        });
    }, t = function(e) {
        return r.get({
            url: "/resource/neu-pkg/check-folder-name",
            params: e
        });
    }, f = function(e) {
        return r.put({
            url: "/resource/neu-pkg/update",
            data: e
        });
    }, u = function(e) {
        return r.get({
            url: "/resource/project/check-course-pk-status",
            params: e
        });
    }, o = function(e) {
        return r.get({
            url: "/resource/neu-pkg/get",
            params: e
        });
    }, g = function(e) {
        return r.get({
            url: "/resource/neu-pkg/route",
            params: e
        });
    }, c = function(e) {
        return r.delete({
            url: "/resource/neu-pkg/delete",
            data: e
        });
    }, p = function(e) {
        return r.put({
            url: "/resource/neu-pkg/copy",
            params: e
        });
    }, l = function(e, m) {
        return r.put({
            url: "/resource/neu-pkg/move-neu",
            params: e,
            data: m
        });
    }, n = function(e) {
        return r.get({
            url: "/resource/neu-pkg/tree",
            params: e
        });
    };
});

export {
    k as __tla,
    u as a,
    t as b,
    a as c,
    n as d,
    s as e,
    c as f,
    o as g,
    p as h,
    l as m,
    g as r,
    f as u
};