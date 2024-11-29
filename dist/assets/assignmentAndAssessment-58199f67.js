import {
    a7 as e,
    __tla as A
} from "./index-6c08ea4c.js";

let r, s, u, n, c, o, l, m, i, d, p, h, f, g, x, b, k, $, I, y, R, v, _, C, j, w, T, q, B = Promise.all([ (() => {
    try {
        return A;
    } catch {}
})() ]).then(async () => {
    c = function(t) {
        return e.post({
            url: "/teachmanager/teach-course-res/addRes",
            data: t
        });
    }, g = function(t) {
        return e.post({
            url: "/teachmanager/teach-course-res/listTest",
            data: t
        });
    }, n = function(t) {
        return e.get({
            url: `/teachmanager/teach-course-res/test/paper?resId=${t}`
        });
    }, $ = function(t) {
        return e.post({
            url: "/teachmanager/teach-course-res-class-ctl/publishResCtl",
            data: t
        });
    }, m = function(t) {
        return e.post({
            url: "/teachmanager/teach-course-res-class-ctl/updateResCtl",
            data: t
        });
    }, y = function(t) {
        return e.post({
            url: "/teachmanager/teach-course-res-class-ctl/revokeRes",
            data: t
        });
    }, p = function(t) {
        return e.get({
            url: "/teachmanager/teach-course-res-class-ctl/getResCtl",
            params: t
        });
    }, _ = function(t) {
        return e.put({
            url: "/teachmanager/teach-course-res/test/paper",
            data: t
        });
    }, r = function(t) {
        return e.post({
            url: "/teachmanager/teach-course-res-stu/test/list",
            data: t
        });
    }, l = function(t) {
        return e.get({
            url: `/smartexam/test/student/enter?testId=${t}`
        });
    }, q = function(t) {
        return e.get({
            url: `/smartexam/test/student/paper?testId=${t}`
        });
    }, R = function(t) {
        return e.post({
            url: "/smartexam/test/student/answer/save",
            data: t
        });
    }, x = function(t) {
        return e.put({
            url: "/smartexam/test/student/question/mark",
            data: t
        });
    }, u = function(t) {
        return e.put({
            url: `/smartexam/test/student/submit?historyId=${t}`
        });
    }, v = function(t) {
        return e.post({
            url: "/smartexam/test/mark/candidate/list",
            data: t
        });
    }, d = function(t) {
        return e.downloadError({
            url: "/smartexam/test/mark/candidate/export",
            data: t,
            responseType: "blob"
        });
    }, I = function(t) {
        return e.get({
            url: `/teachmanager/teach-class/get?id=${t}`
        });
    }, h = function(t) {
        return e.put({
            url: `/teachmanager/teach-course-res-class-ctl/test/score/publish?ctlId=${t}`
        });
    }, C = function(t) {
        return e.post({
            url: "/smartexam/test/mark/paper",
            data: t
        });
    }, k = function(t) {
        return e.post({
            url: "/smartexam/test/mark/save",
            data: t
        });
    }, j = function(t) {
        return e.get({
            url: "/smartexam/test/mark/submit/list",
            params: t
        });
    }, w = function(t) {
        return e.post({
            url: "/smartexam/test/mark/paper/detail",
            data: t
        });
    }, i = function(t, a) {
        return e.post({
            url: `/teachmanager/teach-course-res-test/paper/pureObjective/batch?sourceType=${t}`,
            data: a
        });
    }, b = function(t) {
        return e.post({
            url: "/teachmanager/teach-course-res-test/paper/pureObjective",
            data: t
        });
    }, s = function(t) {
        return e.get({
            url: "/smartexam/test/student/submit/list",
            params: t
        });
    }, T = function(t) {
        return e.get({
            url: `/smartexam/test/mark/getNextPaperByExamIdAndCandidateId/${t.testId}/${t.number}`
        });
    }, f = function(t) {
        return e.post({
            url: "/teachmanager/teach-course-res/setRes",
            data: t
        });
    }, o = function(t, a) {
        return e.post({
            url: `/teachmanager/teach-course-res/deleteRes?currenClassId=${a}`,
            data: t
        });
    };
});

export {
    r as A,
    s as B,
    B as __tla,
    u as a,
    n as b,
    c,
    o as d,
    l as e,
    m as f,
    i as g,
    d as h,
    p as i,
    h as j,
    f as k,
    g as l,
    x as m,
    b as n,
    k as o,
    $ as p,
    I as q,
    y as r,
    R as s,
    v as t,
    _ as u,
    C as v,
    j as w,
    w as x,
    T as y,
    q as z
};