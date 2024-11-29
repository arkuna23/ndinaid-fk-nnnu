import {
    a7 as e,
    __tla as u
} from "./index-6c08ea4c.js";

let r, a, n, o, c = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})() ]).then(async () => {
    n = function(t) {
        return e.get({
            url: "/exp/project/list",
            params: t
        });
    }, a = function(t) {
        return e.delete({
            url: "/exp/project/delete",
            data: t
        });
    }, r = function(t) {
        return e.get({
            url: "/exp/project/review-count",
            params: t
        });
    }, o = function(t, p) {
        return e.post({
            url: p ? "/exp/project/info/by-term-teacher" : "/exp/project/info/by-term-stu",
            data: t
        });
    };
});

export {
    c as __tla,
    r as a,
    a as d,
    n as g,
    o as i
};