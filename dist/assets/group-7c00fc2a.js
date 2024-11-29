import {
    a7 as r,
    __tla as n
} from "./index-6c08ea4c.js";

let e, g, s, o, u, p, i = Promise.all([ (() => {
    try {
        return n;
    } catch {}
})() ]).then(async () => {
    let t;
    t = "exp", s = async a => await r.get({
        url: `/${t}/group/get-grouping-info?projectId=${a}`
    }), e = async a => await r.get({
        showLoading: !1,
        url: `/${t}/group/get?id=${a}`
    }), g = async a => await r.get({
        showLoading: !1,
        url: `/${t}/group/get-ungrouped?projectId=${a}`
    }), p = async a => await r.put({
        showLoading: !1,
        url: `/${t}/group/update`,
        data: a
    }), o = async a => await r.get({
        url: `/${t}/group/get-simple-group-user`,
        params: a
    }), u = async a => await r.get({
        url: `/${t}/group/student-get-group`,
        params: a
    });
});

export {
    i as __tla,
    e as a,
    g as b,
    s as c,
    o as g,
    u as s,
    p as u
};