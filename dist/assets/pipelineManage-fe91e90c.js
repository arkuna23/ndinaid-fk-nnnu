import {
    a7 as e,
    __tla as c
} from "./index-6c08ea4c.js";

let r, i, t, n, p, o, s, l, u = Promise.all([ (() => {
    try {
        return c;
    } catch {}
})() ]).then(async () => {
    s = function(a) {
        return e.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/pipeline/list",
            params: a
        });
    }, n = function(a) {
        return e.delete({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/pipeline",
            params: a
        });
    }, t = function(a) {
        return e.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/pipeline/sync",
            params: a
        });
    }, l = function(a) {
        return e.download({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/pipeline/output",
            params: a
        });
    }, p = function(a) {
        return e.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/pipeline/pipelineVo",
            params: a
        });
    }, i = function(a) {
        return e.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/templatetype",
            params: a
        });
    }, r = function(a) {
        return e.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/pipeline/pipVoList",
            params: a
        });
    }, o = function(a) {
        return e.get({
            originalData: !0,
            url: "/env-api/ci-processor/cim/component/message",
            params: a
        });
    };
});

export {
    u as __tla,
    r as a,
    i as b,
    t as c,
    n as d,
    p as e,
    o as f,
    s as g,
    l as o
};