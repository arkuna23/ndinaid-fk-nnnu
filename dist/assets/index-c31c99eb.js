import {
    a7 as a,
    __tla as d
} from "./index-6c08ea4c.js";

let e, s, n, r, l, u, m, p, y = Promise.all([ (() => {
    try {
        return d;
    } catch {}
})() ]).then(async () => {
    r = t => a.get({
        url: "/system/tenant/page",
        params: t
    }), s = () => a.get({
        showLoading: !1,
        url: "/system/tenant/option",
        params: {
            status: 0
        }
    }), e = t => a.get({
        url: "/system/tenant/get?id=" + t
    }), n = t => a.post({
        url: "/system/tenant/create",
        data: t
    }), p = t => a.put({
        url: "/system/tenant/update",
        data: t
    }), u = t => a.put({
        url: "/system/tenant/update/status",
        params: t
    }), l = t => a.delete({
        url: "/system/tenant/delete?id=" + t
    }), m = t => a.get({
        url: "/system/tenant/get-env-types?tenantId=" + t
    });
});

export {
    y as __tla,
    e as a,
    s as b,
    n as c,
    r as d,
    l as e,
    u as f,
    m as g,
    p as u
};