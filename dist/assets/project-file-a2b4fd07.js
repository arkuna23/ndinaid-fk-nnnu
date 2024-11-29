import {
    b_ as r,
    a7 as t,
    __tla as f
} from "./index-6c08ea4c.js";

let a, l, o, u, s, c, n, p, i, j = Promise.all([ (() => {
    try {
        return f;
    } catch {}
})() ]).then(async () => {
    c = function(e) {
        return t.get({
            url: `/${r().getProjectBaseUrl}/project-file/list`,
            params: e
        });
    }, l = function(e) {
        return t.post({
            url: `/${r().getProjectBaseUrl}/project-file/create`,
            data: e
        });
    }, o = function(e) {
        return t.post({
            url: `/${r().getProjectBaseUrl}/project-file/create/folder`,
            data: e
        });
    }, u = function(e) {
        return t.delete({
            url: `/${r().getProjectBaseUrl}/project-file/delete`,
            params: e
        });
    }, i = function(e) {
        return t.post({
            url: `/${r().getProjectBaseUrl}/project-file/update`,
            data: e
        });
    }, n = function(e) {
        return t.get({
            url: `/${r().getProjectBaseUrl}/project-file/get/route`,
            params: e
        });
    }, s = function(e) {
        return t.put({
            url: `/${r().getProjectBaseUrl}/project-file/publish`,
            data: e
        });
    }, p = function(e) {
        return t.post({
            url: "/exp/user-file-look/create",
            data: e
        });
    }, a = function(e) {
        return t.post({
            url: "/exp/user-file-download/create",
            data: e
        });
    }, r().getProjectBaseUrl;
});

export {
    j as __tla,
    a,
    l as b,
    o as c,
    u as d,
    s as e,
    c as f,
    n as g,
    p,
    i as u
};