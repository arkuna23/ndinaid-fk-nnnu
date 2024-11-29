import {
    a7 as a,
    __tla as u
} from "./index-6c08ea4c.js";

let t, l, r, d, n, o, s, g, i, c, f = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})() ]).then(async () => {
    t = e => a.get({
        url: "/infra/codegen/table/list?dataSourceConfigId=" + e
    }), d = e => a.get({
        url: "/infra/codegen/table/page",
        params: e
    }), s = e => a.get({
        url: "/infra/codegen/detail?tableId=" + e
    }), c = e => a.put({
        url: "/infra/codegen/update",
        data: e
    }), i = e => a.put({
        url: "/infra/codegen/sync-from-db?tableId=" + e
    }), g = e => a.get({
        url: "/infra/codegen/preview?tableId=" + e
    }), o = e => a.download({
        url: "/infra/codegen/download?tableId=" + e
    }), l = e => a.get({
        url: "/infra/codegen/db/table/list",
        params: e
    }), r = e => a.post({
        url: "/infra/codegen/create-list",
        data: e
    }), n = e => a.delete({
        url: "/infra/codegen/delete?tableId=" + e
    });
});

export {
    f as __tla,
    t as a,
    l as b,
    r as c,
    d,
    n as e,
    o as f,
    s as g,
    g as p,
    i as s,
    c as u
};