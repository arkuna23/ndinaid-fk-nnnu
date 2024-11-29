import {
    a7 as e,
    __tla as i
} from "./index-6c08ea4c.js";

let t, s, r, c, l, u, p, g, h, n, o, m, d, _, G = Promise.all([ (() => {
    try {
        return i;
    } catch {}
})() ]).then(async () => {
    g = a => e.post({
        url: "/teachmanager/teach-class-group-plan/create",
        data: a
    }), h = a => e.put({
        url: "/teachmanager/teach-class-group-plan/update",
        data: a
    }), u = a => e.get({
        url: "/teachmanager/teach-class-group-plan/get",
        params: a
    }), s = a => e.get({
        url: "/teachmanager/teach-class-student/getTeachClassStuConut",
        params: a
    }), t = a => e.post({
        url: "/teachmanager/teach-class-group-plan/page",
        data: a
    }), d = a => e.delete({
        url: "/teachmanager/teach-class-group-plan/delete",
        params: a
    }), n = a => e.get({
        url: "/teachmanager/teach-class-group-stu/getGroupMember",
        params: a
    }), o = a => e.post({
        url: "/teachmanager/teach-class-group-stu/editGroupStu",
        data: a
    }), l = a => e.put({
        url: "/teachmanager/teach-class-group-plan/endGroupPlan",
        data: a
    }), r = a => e.post({
        url: "/teachmanager/teach-class-group/create",
        data: a
    }), c = a => e.delete({
        url: "/teachmanager/teach-class-group/delete",
        params: a
    }), p = a => e.get({
        url: "/teachmanager/teach-class-group/get",
        params: a
    }), _ = a => e.put({
        url: "/teachmanager/teach-class-group/update",
        data: a
    }), m = a => e.post({
        url: "/teachmanager/teach-class-group-plan/stu-page",
        data: a
    });
});

export {
    G as __tla,
    t as a,
    s as b,
    r as c,
    c as d,
    l as e,
    u as f,
    p as g,
    g as h,
    h as i,
    n as j,
    o as k,
    m as l,
    d as p,
    _ as u
};