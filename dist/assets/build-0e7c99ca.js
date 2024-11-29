import {
    a7 as e,
    __tla as f
} from "./index-6c08ea4c.js";

let r, a, n, u, i, p, s, l, o, c, d, b = Promise.all([ (() => {
    try {
        return f;
    } catch {}
})() ]).then(async () => {
    c = function(t) {
        return e.get({
            url: "/exp/build/list",
            params: t
        });
    }, s = function(t) {
        return e.get({
            url: "/env-api/ci-processor/v1beta1/pipeline/list",
            params: t
        });
    }, r = function(t) {
        return e.post({
            url: "/exp/build/add",
            data: t
        });
    }, i = function(t) {
        return e.put({
            url: "/exp/build/edit",
            data: t
        });
    }, o = function(t) {
        return e.post({
            url: "/exp/build",
            data: t
        });
    }, l = function(t) {
        return e.put({
            url: "/exp/build/delete",
            data: t
        });
    }, p = function(t) {
        return e.get({
            url: "/env-api/ci-processor/v1beta1/tekton/pipelineRun/one",
            params: t
        });
    }, d = function(t) {
        return e.get({
            url: `/exp/build/build-out-come/${t}`
        });
    }, a = function(t) {
        return e.get({
            url: "/env-api/ci-processor/v1beta1/pipeline/pipVoList",
            params: t
        });
    }, n = function(t) {
        return e.get({
            url: "/env-api/ci-processor/v1beta1/templatetype",
            params: t
        });
    }, u = function(t) {
        return e.get({
            url: `/exp/project/info/${t}`
        });
    };
});

export {
    b as __tla,
    r as a,
    a as b,
    n as c,
    u as d,
    i as e,
    p as f,
    s as g,
    l as h,
    o as i,
    c as j,
    d as k
};