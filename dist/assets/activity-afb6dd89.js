import {
    a7 as e,
    __tla as d
} from "./index-6c08ea4c.js";

let a, u, n, c, s, i, o, l, p, f = Promise.all([ (() => {
    try {
        return d;
    } catch {}
})() ]).then(async () => {
    n = function(t, r) {
        return e.post({
            url: "/resource/activity/create" + (r ? "?tenantId=" + r.tenantId : ""),
            data: t
        });
    }, s = function(t) {
        return e.delete({
            url: "/resource/activity/delete?release=0",
            data: t
        });
    }, i = function(t) {
        return e.get({
            url: "/resource/activity/page",
            params: t
        });
    }, p = function(t) {
        return e.put({
            url: "/resource/activity/update",
            data: t
        });
    }, l = function(t = 1, r) {
        return e.put({
            url: "/resource/activity/release?release=" + t,
            data: r
        });
    }, o = function(t, r) {
        return e.put({
            url: "/resource/activity/move",
            params: t,
            data: r
        });
    }, a = function(t) {
        return e.get({
            url: "/resource/activity/route",
            params: t
        });
    }, u = function(t) {
        return e.get({
            url: "/resource/activity/tree",
            params: t
        });
    }, c = function(t) {
        return e.get({
            url: "/resource/activity/check-folder-name",
            params: t
        });
    };
});

export {
    f as __tla,
    a,
    u as b,
    n as c,
    c as d,
    s as e,
    i as g,
    o as m,
    l as r,
    p as u
};