import {
    b_ as e,
    a7 as t,
    __tla as q
} from "./index-6c08ea4c.js";

let a, i, n, s, o, u, p, c, l, g, m, b, f, v, d, x, j, h, _, y, B, P, $, k, w, A, L, U, z = Promise.all([ (() => {
    try {
        return q;
    } catch {}
})() ]).then(async () => {
    f = function(r) {
        return t.get({
            url: "/exp/git-lab/group-gitLab",
            params: r
        });
    }, l = function(r) {
        return t.get({
            url: "/exp/git-lab/group-member-gitLab",
            params: r
        });
    }, U = function(r) {
        return t.get({
            url: "/exp/git-lab/project-detail",
            params: r
        });
    }, L = function(r) {
        return t.get({
            url: `/env-api/ci-processor/gitlab/project/${r}`
        });
    }, p = function(r) {
        return t.get({
            url: "/env-api/ci-processor/gitlab/project/info",
            params: r
        });
    }, n = function(r) {
        return t.get({
            url: "/env-api/ci-processor/gitlab/project/tree",
            params: r
        });
    }, s = function(r) {
        return t.get({
            url: "/env-api/ci-processor/gitlab/project/file",
            params: r
        });
    }, u = function(r) {
        return t.get({
            url: "/env-api/ci-processor/gitlab/commit/page",
            params: r
        });
    }, o = function(r) {
        return t.get({
            url: "/env-api/ci-processor/gitlab/commit/diff",
            params: r
        });
    }, P = function(r) {
        return t.get({
            url: "/env-api/ci-processor/gitlab/commit/count/day",
            params: r
        });
    }, k = function(r) {
        return t.get({
            url: "/env-api/ci-processor/gitlab/commit/submissions/left",
            params: r
        });
    }, $ = function(r) {
        return t.get({
            url: "/env-api/ci-processor/gitlab/commit/submissions/right",
            params: r
        });
    }, y = function(r) {
        return t.get({
            url: "/env-api/ci-processor/gitlab/commit/user/commits",
            params: r
        });
    }, B = function(r) {
        return t.get({
            url: "/env-api/ci-processor/gitlab/commit/top",
            params: r
        });
    }, A = function(r) {
        return t.download({
            url: "/env-api/ci-processor/gitlab/project/archive",
            params: r
        });
    }, m = function(r) {
        return t.get({
            url: "/exp/git-lab/create-project",
            params: r
        });
    }, i = function(r) {
        return t.get({
            url: "/exp/git-lab/group-members",
            params: r
        });
    }, a = function(r) {
        return t.put({
            url: "/exp/git-lab/remove-member",
            data: r
        });
    }, c = function(r) {
        return t.get({
            url: "/exp/git-lab/group-unabsorbed-members",
            params: r
        });
    }, d = function(r) {
        return t.post({
            url: "/exp/git-lab/add-members",
            data: r
        });
    }, h = function(r) {
        return t.get({
            url: `/${e().getProjectBaseUrl}/git-lab-template/listFrontAndBackDemo`,
            params: r
        });
    }, w = function(r) {
        return t.get({
            url: `/env-api/ci-processor/gitlab/group/${r}/members`
        });
    }, v = function(r) {
        return t.post({
            url: "/exp/git-lab/init-gitlab",
            data: r
        });
    }, _ = function(r) {
        return t.delete({
            url: "/exp/git-lab/delete-gitlab",
            params: r
        });
    }, g = function() {
        return t.get({
            url: "/exp/pip-git-user/get-info"
        });
    }, j = function(r) {
        return t.post({
            url: "/exp/pip-git-user/open-git",
            data: r
        });
    }, x = function(r) {
        return t.get({
            url: "/exp/git-lab/is-have-permissions",
            params: r
        });
    }, b = function(r) {
        return t.get({
            url: "/exp/git-lab/is-have-enter-permissions",
            params: r
        });
    }, e().getProjectBaseUrl;
});

export {
    a as A,
    i as B,
    z as __tla,
    n as a,
    s as b,
    o as c,
    u as d,
    p as e,
    c as f,
    l as g,
    g as h,
    m as i,
    b as j,
    f as k,
    v as l,
    d as m,
    x as n,
    j as o,
    h as p,
    _ as q,
    y as r,
    B as s,
    P as t,
    $ as u,
    k as v,
    w,
    A as x,
    L as y,
    U as z
};