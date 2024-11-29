import {
    a7 as a,
    __tla as l
} from "./index-6c08ea4c.js";

let e, r, s, u, n, p, o, g = Promise.all([ (() => {
    try {
        return l;
    } catch {}
})() ]).then(async () => {
    p = function(t) {
        return a.get({
            url: "/exp/task/get-page/test-task",
            params: t
        });
    }, u = function(t) {
        return a.get({
            url: "/exp/task/get-detail/test-task",
            params: t
        });
    }, n = function(t) {
        return a.get({
            url: "/exp/user-task-devops-bug/get",
            params: t
        });
    }, e = function(t) {
        return a.post({
            url: "/exp/user-task/update-result-status",
            data: t
        });
    }, s = function(t) {
        return a.get({
            url: "/exp/task/get-option",
            params: t
        });
    }, o = function(t) {
        return a.put({
            url: "/exp/user-task-devops-bug/update",
            data: t
        });
    }, r = function(t) {
        return a.post({
            url: "/exp/user-task-devops-bug/create",
            data: t
        });
    };
});

export {
    e as S,
    g as __tla,
    r as a,
    s as b,
    u as c,
    n as d,
    p as g,
    o as u
};