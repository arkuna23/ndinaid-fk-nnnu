import {
    a7 as e,
    __tla as k
} from "./index-6c08ea4c.js";

let r, s, c, o, m, u, g, l, d, h, p, i, n, x, _, f, j, v, w, E, L, P, y = Promise.all([ (() => {
    try {
        return k;
    } catch {}
})() ]).then(async () => {
    g = a => e.get({
        url: "/teachmanager/teach-course-grade-composition/listCompositionItem",
        params: a
    }), r = a => e.get({
        url: "/teachmanager/teach-course-grade-composition/list",
        params: a
    }), j = a => e.get({
        url: "/teachmanager/teach-course-grade-item-stu-score/page",
        params: a
    }), P = a => e.get({
        url: "/teachmanager/teach-course-grade-item-stu-score/updateScore",
        params: a
    }), c = a => e.post({
        url: "/teachmanager/teach-course-grade-item/create",
        data: a
    }), L = a => e.put({
        url: "/teachmanager/teach-course-grade-item/update",
        data: a
    }), o = a => e.delete({
        url: "/teachmanager/teach-course-grade-item/delete",
        params: a
    }), s = a => e.get({
        url: "/teachmanager/teach-course-grade-item-role/getAttendanceData",
        params: a
    }), u = a => e.put({
        url: "/teachmanager/teach-course-grade-item-role/update",
        data: a
    }), m = a => e.post({
        url: "/teachmanager/teach-course-grade-composition/save",
        data: a
    }), n = a => e.get({
        url: "/teachmanager/teach-course-grade-item-role/list",
        params: a
    }), l = a => e.post({
        url: "/teachmanager/teach-course-grade-item-role/pageRoleList",
        data: a
    }), d = a => e.post({
        url: "/teachmanager/teach-course-grade-item-role/listSelectedRole",
        data: a
    }), i = a => e.post({
        url: "/teachmanager/teach-course-grade-item-role/save",
        data: a
    }), h = a => e.post({
        url: "/teachmanager/teach-course-grade-item-role/pageProjectList",
        data: a
    }), p = a => e.post({
        url: "/teachmanager/teach-course-grade-item-role/getChooseProjectList",
        data: a
    }), w = a => e.post({
        url: "/smartexam/exam-arrangement/examineTasks",
        data: a
    }), E = a => e.download({
        url: "/teachmanager/teach-course-grade-item-stu-score/export-excel",
        params: a
    }), f = a => e.download({
        url: "/teachmanager/teach-course-grade-item/export-template",
        params: a
    }), x = (a, t) => e.upload({
        url: "/teachmanager/teach-course-grade-item-stu-score/importExcel",
        params: a,
        data: t
    }), _ = (a, t) => e.downloadError({
        url: "/teachmanager/teach-course-grade-item-stu-score/export-error",
        params: a,
        data: t
    }), v = a => e.put({
        url: "/teachmanager/teach-course-set-info/updateExamine",
        data: a
    });
});

export {
    y as __tla,
    r as a,
    s as b,
    c,
    o as d,
    m as e,
    u as f,
    g,
    l as h,
    d as i,
    h as j,
    p as k,
    i as l,
    n as m,
    x as n,
    _ as o,
    f as p,
    j as q,
    v as r,
    w as s,
    E as t,
    L as u,
    P as v
};