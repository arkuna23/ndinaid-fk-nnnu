import {
    a7 as a,
    __tla as g
} from "./index-6c08ea4c.js";

let l, o, r, s, c, n = Promise.all([ (() => {
    try {
        return g;
    } catch {}
})() ]).then(async () => {
    let e;
    e = "/exp", l = t => a.get({
        url: `${e}/technology/list`,
        params: t
    }), o = t => a.post({
        url: `${e}/technology/create`,
        data: t
    }), s = t => a.get({
        url: `${e}/technology/getData`,
        params: t
    }), r = t => a.delete({
        url: `${e}/technology/delete?techIds=${t}`
    }), c = () => a.get({
        url: `${e}/technology/sync`
    });
});

export {
    n as __tla,
    l as a,
    o as c,
    r as d,
    s as g,
    c as s
};