import {
    a7 as e,
    __tla as f
} from "./index-6c08ea4c.js";

let o, a, s, u, n, p, c, i, l, m = Promise.all([ (() => {
    try {
        return f;
    } catch {}
})() ]).then(async () => {
    s = function(r) {
        return e.get({
            url: "/resource/platform/get-list",
            params: r
        });
    }, l = function(r) {
        return e.post({
            url: `/resource/platform/synchronous/${r.pkgId}/${r.appCode}/${r.appName}`,
            messageAfterLoadingText: "同步中，请稍候...",
            timeout: 6e6
        });
    }, c = function(r, t) {
        return e.upload({
            url: "/resource/platform/import-res-file",
            showLoading: !1,
            data: r,
            onUploadProgress: t,
            timeout: 6e5
        });
    }, u = function(r) {
        return e.post({
            url: "/resource/project/ctp/sync/list",
            data: r,
            params: r
        });
    }, n = function(r) {
        return e.post({
            messageAfterLoadingText: "同步中，请稍候...",
            url: `/resource/project/ctp/sync?projectId=${r.projectId}`,
            timeout: 6e5
        });
    }, a = function(r, t) {
        return e.upload({
            url: "/resource/project/ctp/import",
            showLoading: !1,
            data: r,
            onUploadProgress: t,
            timeout: 6e5
        });
    }, p = function(r) {
        return e.get({
            url: "/resource/pkg-offline-resource/list",
            params: r
        });
    }, i = function(r) {
        return e.put({
            url: "/resource/pkg-offline-resource/update",
            data: r
        });
    }, o = function(r) {
        return e.get({
            url: "/resource/pkg-offline-resource/verifying",
            params: r
        });
    };
});

export {
    m as __tla,
    o as a,
    a as b,
    s as c,
    u as d,
    n as e,
    p as g,
    c as i,
    i as o,
    l as p
};