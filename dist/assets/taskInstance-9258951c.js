import {
    a7 as t,
    __tla as c
} from "./index-6c08ea4c.js";

let r, e, n, o, s, i, u, p = Promise.all([ (() => {
    try {
        return c;
    } catch {}
})() ]).then(async () => {
    s = function(a) {
        return t.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/tekton/taskRun",
            params: a
        });
    }, o = function(a) {
        return t.delete({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/tekton/taskRun",
            params: a
        });
    }, u = function(a) {
        return t.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/tekton/taskRun/log",
            params: a
        });
    }, i = function(a) {
        return t.post({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/tekton/taskRun",
            data: a
        });
    }, n = function(a) {
        return t.get({
            originalData: !0,
            url: `/env-api/ci-processor/v1beta1/pod/${a.namespace}/${a.podName}`
        });
    }, r = function(a) {
        return t.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/tekton/stepStatus",
            params: a
        });
    }, e = function(a) {
        return t.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/tekton/taskRun/status",
            params: a
        });
    };
});

export {
    p as __tla,
    r as a,
    e as b,
    n as c,
    o as d,
    s as e,
    i as f,
    u as g
};