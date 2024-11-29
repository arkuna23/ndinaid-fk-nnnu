import {
    a7 as t,
    __tla as i
} from "./index-6c08ea4c.js";

let e, s, l, r, o, y, c = Promise.all([ (() => {
    try {
        return i;
    } catch {}
})() ]).then(async () => {
    e = async a => await t.get({
        url: "/system/role/page",
        params: a
    }), s = async () => await t.get({
        showLoading: !1,
        url: "/system/role/option"
    }), o = async a => await t.get({
        url: "/system/role/get?id=" + a
    }), l = async a => await t.post({
        url: "/system/role/create",
        data: a
    }), y = async a => await t.put({
        url: "/system/role/update",
        data: a
    }), r = async a => await t.delete({
        url: "/system/role/delete?id=" + a
    });
});

export {
    c as __tla,
    e as a,
    s as b,
    l as c,
    r as d,
    o as g,
    y as u
};