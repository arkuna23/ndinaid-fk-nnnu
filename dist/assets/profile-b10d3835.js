import {
    a7 as s,
    __tla as p
} from "./index-6c08ea4c.js";

let t, e, r, l, u, d = Promise.all([ (() => {
    try {
        return p;
    } catch {}
})() ]).then(async () => {
    l = () => s.get({
        url: "/system/user/profile/get"
    }), u = a => s.put({
        url: "/system/user/profile/update",
        data: a
    }), t = (a, o) => s.put({
        url: "/system/user/profile/update-password",
        data: {
            oldPassword: a,
            newPassword: o
        }
    }), e = a => s.upload({
        url: "/system/user/profile/update-avatar",
        data: a
    }), r = a => s.post({
        url: "/system/user/profile/change-identity",
        data: a
    });
});

export {
    d as __tla,
    t as a,
    e as b,
    r as c,
    l as g,
    u
};