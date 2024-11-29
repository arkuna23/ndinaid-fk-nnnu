import {
    a7 as e,
    __tla as f
} from "./index-6c08ea4c.js";

let n, p, r, a, i, c, u, o, s, l = Promise.all([ (() => {
    try {
        return f;
    } catch {}
})() ]).then(async () => {
    u = function(t) {
        return e.get({
            url: "/exp/pip-db-config/list",
            params: t
        });
    }, r = function(t) {
        return e.get({
            url: "/exp/pip-db-config/created-count",
            params: t
        });
    }, i = function(t) {
        return e.post({
            url: "/exp/pip-db-config/add",
            data: t
        });
    }, a = function(t) {
        return e.put({
            url: `/exp/pip-db-config/delete/${t}`
        });
    }, n = function(t) {
        return e.get({
            url: `/exp/pip-db-config/${t}`
        });
    }, p = function(t) {
        return e.get({
            url: "/env-api/ci-processor/cim/component/message/obj",
            params: t
        });
    }, c = function(t) {
        return e.get({
            url: "/exp/pip-space-config/get-space-config",
            params: t
        });
    }, s = function(t) {
        return e.post({
            url: "/exp/pip-space-config/add",
            data: t
        });
    }, o = function(t) {
        return e.put({
            url: "/exp/pip-space-config/edit",
            data: t
        });
    };
});

export {
    l as __tla,
    n as a,
    p as b,
    r as c,
    a as d,
    i as e,
    c as f,
    u as g,
    o as h,
    s as i
};