import {
    a7 as e,
    __tla as q
} from "./index-6c08ea4c.js";

let t, r, s, c, l, h, u, p, g, m, n, o, d, C, w, T, i, y, D, _, v, x, b, B, S, f, A, L, j, k, E, z = Promise.all([ (() => {
    try {
        return q;
    } catch {}
})() ]).then(async () => {
    v = a => e.get({
        url: "/teachmanager/teach-arrangement/get",
        params: a
    }), B = a => e.put({
        url: "/teachmanager/teach-arrangement/update",
        data: a
    }), j = a => e.get({
        url: "/system/dept/option",
        params: a
    }), _ = a => e.get({
        url: "/teachmanager/teach-dropdown/getBaseCourseDropDown",
        params: a
    }), o = a => e.get({
        url: "/teachmanager/teach-dropdown/getTeachTermDropDown",
        params: a
    }), E = a => e.put({
        url: "/system/user/update/password",
        data: a
    }), x = a => e.post({
        url: "/teachmanager/teach-course/create",
        data: a
    }), h = a => e.get({
        url: "/teachmanager/teach-course/page",
        params: a
    }), L = a => e.get({
        url: "/teachmanager/teach-course/get",
        params: a
    }), A = a => e.put({
        url: "/teachmanager/teach-course/update",
        data: a
    }), S = a => e.delete({
        url: "/teachmanager/teach-course/delete",
        params: a
    }), p = a => e.get({
        url: "/teachmanager/teach-course/getTeachCourseTab",
        params: a
    }), b = a => e.put({
        url: "/teachmanager/teach-course/manualTeachCourse",
        params: a
    }), n = a => e.post({
        url: "/teachmanager/teach-class/teacher-create",
        data: a
    }), g = a => e.get({
        url: "/teachmanager/teach-class/page",
        params: a
    }), d = a => e.get({
        url: "/teachmanager/teach-class/teacher-get",
        params: a
    }), w = a => e.put({
        url: "/teachmanager/teach-class/teacher-update",
        data: a
    }), i = a => e.delete({
        url: "/teachmanager/teach-class/teacher-delete",
        params: a
    }), T = a => e.get({
        url: "/teachmanager/teach-class/getCode",
        params: a
    }), r = a => e.post({
        url: "/teachmanager/teach-class-student/create",
        data: a
    }), t = a => e.get({
        url: "/teachmanager/teach-class-student/page",
        params: a
    }), s = a => e.delete({
        url: "/teachmanager/teach-class-student/delete",
        params: a
    }), c = a => e.delete({
        url: "/teachmanager/teach-class-student/deleteClassStus",
        params: a
    }), m = () => e.download({
        url: "/teachmanager/teach-class-student/export-excel-model",
        timeout: 36e4,
        showLoading: !1
    }), C = a => e.upload({
        url: "/teachmanager/teach-class-student/importTeachClassStudent",
        data: a
    }), u = a => e.downloadError({
        url: "/teachmanager/teach-class-student/export-error",
        responseType: "blob",
        data: a
    }), D = a => e.get({
        url: "/teachmanager/teach-class-student-approval/page",
        params: a
    }), y = a => e.put({
        url: "/teachmanager/teach-class-student-approval/updateTeachClassStudentApprovalBatch",
        data: a
    }), l = a => e.get({
        url: "/teachmanager/teach-class/getTeachClassList",
        params: a
    }), f = a => e.put({
        url: "/teachmanager/teach-class/updateCover",
        data: a
    }), k = a => e.get({
        url: "/teachmanager/teach-dropdown/getCourseCategoryDropDown",
        params: a
    });
});

export {
    t as A,
    r as B,
    s as C,
    c as D,
    l as E,
    z as __tla,
    h as a,
    u as b,
    p as c,
    g as d,
    m as e,
    n as f,
    o as g,
    d as h,
    C as i,
    w as j,
    T as k,
    i as l,
    y as m,
    D as n,
    _ as o,
    v as p,
    x as q,
    b as r,
    B as s,
    S as t,
    f as u,
    A as v,
    L as w,
    j as x,
    k as y,
    E as z
};