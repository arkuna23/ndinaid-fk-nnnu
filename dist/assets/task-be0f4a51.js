import {
    a7 as s,
    __tla as v
} from "./index-6c08ea4c.js";

let e, r, u, l, i, n, p, c, m, o, g, y, k, w, $, d, h, _, b = Promise.all([ (() => {
    try {
        return v;
    } catch {}
})() ]).then(async () => {
    let t;
    t = "exp", o = async a => await s.get({
        url: `/${t}/user-task/complete-rate-list`,
        params: a
    }), d = async a => await s.get({
        url: `/${t}/user-task/monitor-list`,
        params: a
    }), r = async a => await s.get({
        url: `/${t}/task/get-detail?id=` + a
    }), c = async a => await s.get({
        url: `/${t}/project/teach-class/info/${a}`
    }), p = async a => await s.get({
        url: `/${t}/user-task/student-task-list`,
        params: a
    }), e = async a => await s.get({
        url: `/${t}/user-task-achievement/list`,
        params: a
    }), l = async a => await s.delete({
        url: `/${t}/user-task-achievement/delete`,
        params: a
    }), _ = async a => await s.post({
        url: `/${t}/user-task-achievement/submit-achievement`,
        data: a
    }), n = async a => await s.get({
        url: `/${t}/group/task-leader-option`,
        params: a
    }), m = async a => await s.get({
        url: `/${t}/group/get-simple-group-user`,
        params: a
    }), u = async a => await s.put({
        url: `/${t}/user-task/student-task-complete`,
        data: a
    }), i = async a => await s.post({
        url: `/${t}/group-user-task/change`,
        data: a
    }), $ = async a => await s.post({
        url: `/${t}/group-user-task/get`,
        params: a
    }), k = async a => await s.post({
        url: `/${t}/group-user-task/change`,
        data: a
    }), w = async a => await s.post({
        url: `/${t}/group-user-task/distributeByOne`,
        params: a
    }), g = async a => await s.get({
        url: "/resource/task/get-name-tree",
        params: a
    }), y = async a => await s.get({
        url: `/${t}/user-task/update-start-time`,
        params: a
    }), h = async a => await s.delete({
        url: `/${t}/user-task-evaluation/delete-all`,
        params: a
    });
});

export {
    b as __tla,
    e as a,
    r as b,
    u as c,
    l as d,
    i as e,
    n as f,
    p as g,
    c as h,
    m as i,
    o as j,
    g as k,
    y as l,
    k as m,
    w as n,
    $ as o,
    d as p,
    h as q,
    _ as s
};