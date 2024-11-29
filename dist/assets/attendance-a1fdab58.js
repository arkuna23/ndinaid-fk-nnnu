import {
    a7 as e,
    __tla as m
} from "./index-6c08ea4c.js";

let t, c, r, n, s, u, g, d, l, h, o = Promise.all([ (() => {
    try {
        return m;
    } catch {}
})() ]).then(async () => {
    g = a => e.get({
        url: "/teachmanager/teach-course-attendance/page",
        params: a
    }), d = a => e.post({
        url: "/teachmanager/teach-course-attendance/create",
        data: a
    }), h = a => e.put({
        url: "/teachmanager/teach-course-attendance/update",
        data: a
    }), c = a => e.put({
        url: "/teachmanager/teach-course-attendance-detail/update",
        data: a
    }), n = a => e.delete({
        url: "/teachmanager/teach-course-attendance/delete",
        params: a
    }), r = a => e.get({
        url: "/teachmanager/teach-course-attendance-detail/getTeachCourseAttendanceDetailStuPage",
        params: a
    }), s = a => e.get({
        url: "/teachmanager/teach-course-attendance-detail/getSignNum",
        params: a
    }), u = a => e.get({
        url: "/teachmanager/teach-course-attendance-detail/getSignRecord",
        params: a
    }), t = a => e.get({
        url: "/teachmanager/teach-course-attendance-detail/getTeachCourseAttendanceDetailTeaPage",
        params: a
    }), l = a => e.get({
        url: "/teachmanager/teach-course-attendance-detail/getInProgressSignNumTea",
        params: a
    });
});

export {
    o as __tla,
    t as a,
    c as b,
    r as c,
    n as d,
    s as e,
    u as f,
    g,
    d as h,
    l as i,
    h as u
};