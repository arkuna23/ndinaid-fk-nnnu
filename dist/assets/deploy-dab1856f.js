import {
    a7 as e,
    __tla as i
} from "./index-6c08ea4c.js";

let a, r, l, n, u, o, p, d, s = Promise.all([ (() => {
    try {
        return i;
    } catch {}
})() ]).then(async () => {
    l = function(t) {
        return e.get({
            url: "/exp/deploy/list",
            params: t
        });
    }, a = function(t) {
        return e.post({
            url: "/exp/deploy/add",
            data: t
        });
    }, u = function(t) {
        return e.put({
            url: "/exp/deploy/edit",
            data: t
        });
    }, n = function(t) {
        return e.put({
            url: "/exp/deploy/delete",
            data: t
        });
    }, r = function(t) {
        return e.post({
            url: "/exp/deploy",
            data: t
        });
    }, d = function(t) {
        return e.get({
            url: `/exp/deploy/detail/${t}`,
            showLoading: !1
        });
    }, p = function(t) {
        return e.get({
            url: `/exp/deploy/getDeployEid?buildFillId=${t}`
        });
    }, o = function(t) {
        return e.get({
            url: "/exp/deploy/getDeployEid",
            params: t
        });
    };
});

export {
    s as __tla,
    a,
    r as b,
    l as c,
    n as d,
    u as e,
    o as f,
    p as g,
    d as h
};