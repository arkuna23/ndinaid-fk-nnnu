import {
    e as $,
    h as _,
    a7 as t,
    __tla as b
} from "./index-6c08ea4c.js";

let s, a, n, o, c, i, l, m, d, f, p, x, g, q, P = Promise.all([ (() => {
    try {
        return b;
    } catch {}
})() ]).then(async () => {
    const u = $(() => _().isSupAdmin);
    a = function(e) {
        const r = u.value ? "/resource/exam-question/getSuperAdminQuestionsPage" : "/resource/exam-question/page-list";
        return t.get({
            url: r,
            params: e
        });
    }, n = function(e) {
        const r = u.value ? "/resource/exam-question/getSuperAdminQuestionsPage" : "/resource/exam-question/school-page-list";
        return t.get({
            url: r,
            params: e
        });
    }, d = function(e) {
        return t.post({
            url: "/resource/exam-question/folder",
            data: e
        });
    }, m = function(e) {
        return t.put({
            url: "/resource/exam-question/folder",
            data: e
        });
    }, l = function(e) {
        return t.get({
            url: `/resource/exam-question/folder/tree-list?release=${e}`
        });
    }, p = function(e) {
        return t.delete({
            url: `/resource/exam-question/${e}`
        });
    }, x = function(e) {
        return t.delete({
            url: "/resource/exam-question/batch",
            data: e
        });
    }, i = function(e) {
        return t.delete({
            url: "/resource/exam-question/schoolbatch",
            data: e
        });
    }, g = function(e, r, h) {
        return t.put({
            url: `/resource/exam-question/move/batch?parentId=${e}&release=${r}`,
            data: h
        });
    }, s = function(e) {
        return t.get({
            url: `/resource/exam-question/route?id=${e.id}&release=${e.release}`
        });
    }, q = function(e) {
        return t.post({
            url: "/resource/exam-question/submit",
            data: e
        });
    }, c = function(e) {
        return t.get({
            url: `/resource/exam-res-tmpl/by-lang/${e}/excludeContent`
        });
    }, o = function(e) {
        return t.post({
            url: "/resource/tenant-teach-course-question/getPkgQuestionPage",
            data: e
        });
    }, f = function(e) {
        return t.post({
            url: `/resource/exam-question/copy/${e}`
        });
    };
});

export {
    P as __tla,
    s as a,
    a as b,
    n as c,
    o as d,
    c as e,
    i as f,
    l as g,
    m as h,
    d as i,
    f as j,
    p as k,
    x as l,
    g as m,
    q as t
};