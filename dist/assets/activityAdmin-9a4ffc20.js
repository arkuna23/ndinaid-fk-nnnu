import {
    a7 as t,
    __tla as d
} from "./index-6c08ea4c.js";

let a, u, n, c, s, i, o, l, p, f = Promise.all([ (() => {
    try {
        return d;
    } catch {}
})() ]).then(async () => {
    n = function(e, r) {
        return t.post({
            url: "/resource/activity/create-neu" + (r ? "?tenantId=" + r.tenantId : ""),
            data: e
        });
    }, c = function(e) {
        return t.delete({
            url: "/resource/activity/delete-neu?release=0",
            data: e
        });
    }, i = function(e) {
        return t.get({
            url: "/resource/activity/page-neu",
            params: e
        });
    }, p = function(e) {
        return t.put({
            url: "/resource/activity/update",
            data: e
        });
    }, l = function(e = 1, r) {
        return t.put({
            url: "/resource/activity/release?release=" + e,
            data: r
        });
    }, o = function(e, r) {
        return t.put({
            url: "/resource/activity/move-neu",
            params: e,
            data: r
        });
    }, a = function(e) {
        return t.get({
            url: "/resource/activity/route-neu",
            params: e
        });
    }, u = function(e) {
        return t.get({
            url: "/resource/activity/tree-neu",
            params: e
        });
    }, s = function(e) {
        return t.get({
            url: "/resource/activity/check-neu-folder-name",
            params: e
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