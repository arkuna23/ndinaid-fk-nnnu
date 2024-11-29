import {
    e as S,
    h as y,
    a7 as r,
    __tla as B
} from "./index-6c08ea4c.js";

let u, o, n, p, s, c, l, d, i, m, f, x, g, h, P, $, b = Promise.all([ (() => {
    try {
        return B;
    } catch {}
})() ]).then(async () => {
    const t = S(() => y().isSupAdmin);
    l = function(e) {
        const a = t.value ? "/resource/exam-paper/getSuperAdminPaperPage" : "/resource/exam-paper/page";
        return r.post({
            url: a,
            data: e
        });
    }, u = function(e) {
        const a = t.value ? "/resource/exam-paper/getSuperAdminPaperPage" : "/resource/exam-paper/schoolPage";
        return r.post({
            url: a,
            data: e
        });
    }, i = function(e) {
        return r.post({
            url: "/resource/exam-paper/folder",
            data: e
        });
    }, d = function(e) {
        return r.put({
            url: "/resource/exam-paper/folder",
            data: e
        });
    }, p = function(e) {
        return r.get({
            url: `/resource/exam-paper/folder/tree?release=${e}`
        });
    }, h = function(e) {
        return r.delete({
            url: `/resource/exam-paper/paperOrFolder/${e}`
        });
    }, c = function(e) {
        return r.delete({
            url: "/resource/exam-paper/delSchoolBaseBatch",
            data: e
        });
    }, s = function(e) {
        return r.delete({
            url: "/resource/exam-paper/delSchoolBase",
            data: e
        });
    }, P = function(e) {
        return r.delete({
            url: "/resource/exam-paper/paperOrFolder/batch",
            data: e
        });
    }, g = function(e, a, _) {
        return r.put({
            url: `/resource/exam-paper/folder/move?parentId=${e}&release=${a}`,
            data: _
        });
    }, o = function(e) {
        return r.get({
            url: `/resource/exam-paper/route?id=${e.id}&release=${e.release}`
        });
    }, $ = function(e) {
        return r.post({
            url: "/resource/exam-paper/submit",
            data: e
        });
    }, n = function(e) {
        return r.get({
            url: `/resource/exam-paper/paper/${e}`
        });
    }, m = function(e) {
        return r.post({
            url: "/resource/tenant-teach-course-homeworkTest/getPkgPaperPage",
            data: e
        });
    }, f = function(e) {
        return r.post({
            url: `/resource/exam-paper/paper/copy/${e}`
        });
    }, x = function(e) {
        return r.downloadByPut({
            url: "/resource/exam-expert/expert",
            data: e
        });
    };
});

export {
    b as __tla,
    u as a,
    o as b,
    n as c,
    p as d,
    s as e,
    c as f,
    l as g,
    d as h,
    i,
    m as j,
    f as k,
    x as l,
    g as m,
    h as n,
    P as o,
    $ as t
};