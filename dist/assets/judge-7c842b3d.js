import {
    a7 as t,
    __tla as n
} from "./index-6c08ea4c.js";

let s, e, d, i, l, r, u, o = Promise.all([ (() => {
    try {
        return n;
    } catch {}
})() ]).then(async () => {
    s = async a => await t.get({
        url: "/dataset/judge/list?groupId=" + a
    }), d = async a => await t.post({
        url: "/dataset/judge/dir",
        params: a
    }), e = async a => await t.post({
        url: "/dataset/judge/updateFileName",
        params: a
    }), u = async a => await t.post({
        url: "/dataset/judge/fileContent",
        data: a
    }), l = async a => await t.get({
        url: "/dataset/judge/preview?fileId=" + a
    }), i = async a => await t.delete({
        url: "/dataset/judge?fileId=" + a
    }), r = async a => await t.post({
        showLoading: !1,
        url: "/env-api/judge/api/v1/submissions/file",
        data: a
    });
});

export {
    o as __tla,
    s as a,
    e as b,
    d as c,
    i as d,
    l as g,
    r as s,
    u
};