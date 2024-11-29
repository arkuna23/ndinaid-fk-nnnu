import {
    a7 as t,
    __tla as o
} from "./index-6c08ea4c.js";

let r, e, n, i, s, c = Promise.all([ (() => {
    try {
        return o;
    } catch {}
})() ]).then(async () => {
    r = function(a) {
        return t.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/task/list",
            params: a
        });
    }, e = function() {
        return t.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/task/sync"
        });
    }, n = function(a) {
        return t.delete({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/task",
            params: a
        });
    }, s = function(a) {
        return t.post({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/task/input",
            data: a
        });
    }, i = function() {
        return t.get({
            originalData: !0,
            url: "/env-api/ci-processor/namespace/support"
        });
    };
});

export {
    c as __tla,
    r as a,
    e as c,
    n as d,
    i as g,
    s as i
};