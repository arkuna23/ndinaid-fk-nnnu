import {
    a7 as t,
    __tla as k
} from "./index-6c08ea4c.js";

let r, e, c, o, l, i, n, p, u, m, w, y, d, $, g, b, h, _, x = Promise.all([ (() => {
    try {
        return k;
    } catch {}
})() ]).then(async () => {
    let s;
    s = "exp", r = async a => await t.get({
        url: `/${s}/score/list`,
        params: a
    }), _ = async a => await t.post({
        url: `/${s}/score/setting`,
        data: a
    }), c = async a => await t.post({
        url: `/${s}/score/setting/get`,
        params: a
    }), o = async a => await t.post({
        url: `/${s}/score/setting/check-score`,
        params: a
    }), h = async a => await t.post({
        url: `/${s}/score/publish`,
        params: a
    }), p = async a => await t.post({
        url: `/${s}/score/submit/back`,
        data: a
    }), e = async a => await t.post({
        url: `/${s}/score/submit/urge`,
        data: a
    }), i = async a => await t.post({
        url: `/${s}/score/submit/supplement`,
        data: a
    }), u = async a => await t.post({
        url: `/${s}/score/submit/comment`,
        data: a
    }), m = async a => await t.post({
        url: `/${s}/score-detail/user/list`,
        params: a
    }), d = async a => await t.post({
        url: `/${s}/score-detail/scoring`,
        data: a
    }), w = async a => await t.get({
        url: `/${s}/user-task-evaluation/get-all`,
        params: a
    }), y = async a => await t.get({
        url: `/${s}/user-task-test/get-all`,
        params: a
    }), l = async a => await t.downloadError({
        url: `/${s}/score-detail/export/achievement/batch`,
        data: a
    }), $ = async a => await t.downloadError({
        url: `/${s}/score-detail/export/achievement`,
        params: a
    }), g = async a => await t.post({
        url: `/${s}/score-detail/previous`,
        params: a
    }), b = async a => await t.post({
        url: `/${s}/score-detail/next`,
        params: a
    }), n = async a => await t.get({
        url: `/${s}/score/get-publish`,
        params: a
    });
});

export {
    x as __tla,
    r as a,
    e as b,
    c,
    o as d,
    l as e,
    i as f,
    n as g,
    p as h,
    u as i,
    m as j,
    w as k,
    y as l,
    d as m,
    $ as n,
    g as o,
    b as p,
    h as s,
    _ as u
};