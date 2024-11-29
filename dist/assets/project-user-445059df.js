import {
    a7 as e,
    __tla as n
} from "./index-6c08ea4c.js";

let r, s, l, o = Promise.all([ (() => {
    try {
        return n;
    } catch {}
})() ]).then(async () => {
    let t = "exp";
    r = async a => await e.get({
        showLoading: !1,
        url: `/${t}/env/list-preheat-user`,
        params: a
    }), s = async a => await e.post({
        url: `/${t}/env/preheat`,
        data: a
    }), l = async a => await e.post({
        url: `/${t}/env/reloading`,
        data: a
    });
});

export {
    o as __tla,
    r as g,
    s as p,
    l as r
};