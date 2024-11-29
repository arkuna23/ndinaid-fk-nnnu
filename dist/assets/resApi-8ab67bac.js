import {
    a7 as r,
    __tla as u
} from "./index-6c08ea4c.js";

let a, e, n, s = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})() ]).then(async () => {
    a = function(t) {
        return r.post({
            url: "/resource/tenant-pkg/create/pkg",
            data: t
        });
    }, e = function(t) {
        return r.get({
            url: "/resource/tenant-pkg/get",
            params: t
        });
    }, n = function(t) {
        return r.put({
            url: "/resource/tenant-pkg/update",
            data: t
        });
    };
});

export {
    s as __tla,
    a as c,
    e as g,
    n as u
};