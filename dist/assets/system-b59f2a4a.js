import {
    a7 as t,
    __tla as c
} from "./index-6c08ea4c.js";

let a, r, s, o, n, l, g, u, i = Promise.all([ (() => {
    try {
        return c;
    } catch {}
})() ]).then(async () => {
    l = () => t.get({
        url: "/system/user/identify-count"
    }), a = () => t.get({
        url: "/system/user/identify-on-line-count"
    }), u = () => t.get({
        url: "/infra/login-log/visit-count"
    }), r = () => t.get({
        url: "/system/dept/get-level"
    }), s = e => t.get({
        url: "/system/dept-tag/option-used",
        params: e
    }), n = () => t.get({
        url: "/teachmanager/teach-dropdown/getTeachTermDropDown"
    }), g = e => t.get({
        url: "/exp/project/statistics/project-teach",
        params: e
    }), o = e => t.post({
        url: "/teachmanager/teach-arrangement/getHomePageTeachCourseCount",
        data: e
    });
});

export {
    i as __tla,
    a,
    r as b,
    s as c,
    o as d,
    n as g,
    l as i,
    g as p,
    u as v
};