import {
    a7 as t,
    __tla as c
} from "./index-6c08ea4c.js";

let e, r, i, o, s, l = Promise.all([ (() => {
    try {
        return c;
    } catch {}
})() ]).then(async () => {
    r = a => t.post({
        url: "/infra/data-source-config/create",
        data: a
    }), s = a => t.put({
        url: "/infra/data-source-config/update",
        data: a
    }), i = a => t.delete({
        url: "/infra/data-source-config/delete?id=" + a
    }), e = a => t.get({
        url: "/infra/data-source-config/get?id=" + a
    }), o = () => t.get({
        url: "/infra/data-source-config/list"
    });
});

export {
    l as __tla,
    e as a,
    r as c,
    i as d,
    o as g,
    s as u
};