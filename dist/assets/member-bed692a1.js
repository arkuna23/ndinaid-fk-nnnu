import {
    a7 as r,
    __tla as s
} from "./index-6c08ea4c.js";

let e, u, a, n, o, p = Promise.all([ (() => {
    try {
        return s;
    } catch {}
})() ]).then(async () => {
    n = function(t) {
        return r.get({
            url: "/exp/group/get",
            params: t
        });
    }, a = function(t) {
        return r.get({
            url: "/exp/group/task-leader-option",
            params: t
        });
    }, o = function(t) {
        return r.post({
            url: "/exp/group-user/set/contribution",
            data: t
        });
    }, u = function(t) {
        return r.post({
            url: "/exp/group-user/get/contributionByOne",
            params: t
        });
    }, e = function(t) {
        return r.post({
            url: "/exp/group-user/get/contribution",
            params: t
        });
    };
});

export {
    p as __tla,
    e as a,
    u as b,
    a as c,
    n as g,
    o as s
};