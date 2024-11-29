import {
    a7 as t,
    __tla as o
} from "./index-6c08ea4c.js";

let e, d, s, n, r, u, i, l, c = Promise.all([ (() => {
    try {
        return o;
    } catch {}
})() ]).then(async () => {
    n = async a => await t.get({
        url: "/infra/demo03-student/page",
        params: a
    }), i = async a => await t.get({
        url: "/infra/demo03-student/get?id=" + a
    }), s = async a => await t.post({
        url: "/infra/demo03-student/create",
        data: a
    }), l = async a => await t.put({
        url: "/infra/demo03-student/update",
        data: a
    }), r = async a => await t.delete({
        url: "/infra/demo03-student/delete?id=" + a
    }), u = async a => await t.download({
        url: "/infra/demo03-student/export-excel",
        params: a
    }), e = async a => await t.get({
        url: "/infra/demo03-student/demo03-course/list-by-student-id?studentId=" + a
    }), d = async a => await t.get({
        url: "/infra/demo03-student/demo03-grade/get-by-student-id?studentId=" + a
    });
});

export {
    c as __tla,
    e as a,
    d as b,
    s as c,
    n as d,
    r as e,
    u as f,
    i as g,
    l as u
};