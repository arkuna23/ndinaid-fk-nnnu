import {
    cf as E,
    a7 as t,
    __tla as G
} from "./index-6c08ea4c.js";

let s, r, c, l, o, i, u, n, p, g, d, j, w, y, k, P, B, $, U, m, h, x, b, v, _, I, f, D, q, z, A, L = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})() ]).then(async () => {
    const e = E();
    let C = e.getProjectBaseUrl;
    n = async a => await t.get({
        showLoading: !1,
        url: `/${C}/project/check-env-enable?projectId=${a}`
    }), B = async a => await t.post({
        url: `/${e.getProjectBaseUrl}/project/edit`,
        data: a
    }), i = async a => await t.get({
        url: `/${e.getProjectBaseUrl}/project/info/` + a
    }), u = async a => await t.get({
        url: "/exp/project-setting/get?id=" + a
    }), o = async a => await t.put({
        url: "/exp/project-setting/update",
        data: a
    }), h = async a => await t.post({
        url: "/exp/project/publish",
        data: a
    }), k = async a => await t.post({
        url: "/exp/project/update/publish-setting",
        data: a
    }), g = async a => await t.get({
        url: "/exp/project-setting/get-publish",
        params: a
    }), w = async a => await t.post({
        url: "/exp/project/add",
        data: a
    }), y = async a => await t.get({
        url: "/teachmanager/teach-dropdown/getGroupPlanDropDown",
        params: a
    }), I = async a => await t.post({
        url: "/exp/project/unpublish",
        data: a
    }), $ = async a => await t.post({
        url: "/resource/project/edit-base",
        data: a
    }), d = async a => await t.get({
        url: `/${e.getProjectBaseUrl}/task/get?id=` + a
    }), A = async a => await t.get({
        url: `/${e.getProjectBaseUrl}/task/get-option`,
        params: a
    }), x = async a => await t.post({
        url: `/${e.getProjectBaseUrl}/task/create`,
        data: a
    }), b = async a => await t.put({
        url: `/${e.getProjectBaseUrl}/task/update`,
        data: a
    }), m = async a => await t.delete({
        url: `/${e.getProjectBaseUrl}/task/delete?id=` + a
    }), p = async a => await t.get({
        url: `/${e.getProjectBaseUrl}/task/get-name-tree?projectId=` + a
    }), v = async a => await t.get({
        url: `/${e.getProjectBaseUrl}/task/get-ids/non-exist-evaluation?projectId=` + a
    }), D = async a => await t.get({
        url: `/${e.getProjectBaseUrl}/task-stage/get?id=` + a
    }), q = async a => await t.post({
        url: `/${e.getProjectBaseUrl}/task-stage/create`,
        data: a
    }), z = async a => await t.put({
        url: `/${e.getProjectBaseUrl}/task-stage/update`,
        data: a
    }), U = async a => await t.delete({
        url: `/${e.getProjectBaseUrl}/task-stage/delete?id=` + a
    }), s = async a => await t.get({
        url: `/${e.getProjectBaseUrl}/task-module/list?projectId=` + a
    }), c = async a => await t.post({
        url: `/${e.getProjectBaseUrl}/task-module/create`,
        data: a
    }), l = async a => await t.put({
        url: `/${e.getProjectBaseUrl}/task-module/update`,
        data: a
    }), r = async a => await t.delete({
        url: `/${e.getProjectBaseUrl}/task-module/delete?id=` + a
    }), j = async a => await t.get({
        url: `/${e.getProjectBaseUrl}/task-evaluation/get/by-task-id?taskId=` + a
    }), f = async a => await t.post({
        url: `/${e.getProjectBaseUrl}/task-evaluation/create`,
        data: a
    }), _ = async a => await t.put({
        url: `/${e.getProjectBaseUrl}/task-evaluation/update`,
        data: a
    }), P = async a => await t.get({
        url: "/resource/task/get-detail?id=" + a
    });
});

export {
    s as A,
    r as B,
    c as C,
    l as D,
    o as E,
    L as __tla,
    i as a,
    u as b,
    n as c,
    p as d,
    g as e,
    d as f,
    j as g,
    w as h,
    y as i,
    k as j,
    P as k,
    B as l,
    $ as m,
    U as n,
    m as o,
    h as p,
    x as q,
    b as r,
    v as s,
    _ as t,
    I as u,
    f as v,
    D as w,
    q as x,
    z as y,
    A as z
};