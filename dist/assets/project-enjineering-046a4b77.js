import {
    bB as n,
    h as W,
    b_ as a,
    a7 as t,
    __tla as v
} from "./index-6c08ea4c.js";

let p, u, l, s, c, i, d, f, j, g, m, x, b, y, $, P, h, w, I, _, B, k, q = Promise.all([ (() => {
    try {
        return v;
    } catch {}
})() ]).then(async () => {
    const T = {
        tenantId: n()
    };
    l = function(e) {
        let r = `/${a().getProjectBaseUrl}/project-work-file/list`;
        return t.get({
            url: r,
            params: e
        });
    }, i = function(e) {
        let r = `/${a().getProjectBaseUrl}/project-work-file/create`;
        return t.post({
            url: r,
            data: {
                ...e,
                tenantId: n()
            }
        });
    }, c = function(e) {
        let r = `${a().getProjectBaseUrl}/project-work-file/del-file`;
        return t.delete({
            url: r,
            params: {
                id: e.id || e.fileId
            }
        });
    }, m = function(e) {
        return t.get({
            showLoading: !1,
            url: "/exp/project-demo/upload-resource-status",
            params: e
        });
    }, x = function(e) {
        return t.post({
            url: "/exp/pip-project-db/deploy",
            data: e
        });
    }, y = function(e) {
        return t.post({
            url: "/exp/project-demo/deploy",
            data: e
        });
    }, _ = function(e, r) {
        return t.put({
            url: `/exp/project-demo/delete-demo/${e}/${r}`
        });
    }, $ = function(e, r, o) {
        const U = `/exp/pip-project-db/by-project?projectId=${e}&classify=${r}&source=${o}`;
        return t.get({
            url: U,
            showLoading: !1
        });
    }, I = function(e) {
        return t.post({
            url: "/exp/db-sql/import",
            data: e
        });
    }, g = function(e) {
        return t.get({
            url: "/exp/project-demo/demo-info-by-project",
            params: e
        });
    }, b = function(e) {
        return t.get({
            url: "/exp/log/log-param",
            params: e
        });
    }, P = function(e) {
        return t.post({
            url: "/exp/git-lab-template/create-git-project",
            data: e
        });
    }, u = function({
        gitProjectType: e,
        projectId: r,
        sourceProjectId: o
    }) {
        return t.get({
            url: `/exp/git-lab-template/list?projectId=${r}&gitProjectType=${e ?? ""}`
        });
    }, B = function(e) {
        return t.put({
            url: "/exp/git-lab-template/init-git-project",
            data: e
        });
    }, d = function(e) {
        return t.get({
            url: "/exp/project-middleWare/redis/by-project",
            params: e
        });
    }, h = function(e) {
        return t.post({
            url: "/exp/project-middleWare/redis/create",
            data: e
        });
    }, p = function(e) {
        return t.get({
            url: "/exp/project-middleWare/nacos/by-project",
            params: e
        });
    }, w = function(e) {
        return t.post({
            url: "/exp/project-middleWare/nacos/create",
            data: e
        });
    }, s = function() {
        return t.default({
            url: "/exp/project-work-file/downloadNginxTemplate",
            method: "POST",
            headers: T,
            responseType: "blob"
        });
    }, k = function(e) {
        return t.put({
            url: "/exp/git-lab-template/remove-init-git",
            data: e
        });
    }, f = function(e) {
        return t.get({
            url: "/exp/technology/getData",
            params: e
        });
    }, j = function(e) {
        let r = `/${a().getProjectBaseUrl}/project/is-edit-devops/${e}`;
        return t.get({
            url: r
        });
    }, W(), a().getProjectBaseUrl;
});

export {
    q as __tla,
    p as a,
    u as b,
    l as c,
    s as d,
    c as e,
    i as f,
    d as g,
    f as h,
    j as i,
    g as j,
    m as k,
    x as l,
    b as m,
    y as n,
    $ as o,
    P as p,
    h as q,
    w as r,
    I as s,
    _ as t,
    B as u,
    k as v
};