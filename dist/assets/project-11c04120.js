import {
    a7 as t,
    __tla as s
} from "./index-6c08ea4c.js";

let e, a, o, u = Promise.all([ (() => {
    try {
        return s;
    } catch {}
})() ]).then(async () => {
    o = function(r) {
        return t.get({
            url: "/resource/project/course-pk-list",
            params: r
        });
    }, a = function(r) {
        return t.delete({
            url: "/resource/project/del-from-pkg",
            data: r
        });
    }, e = function(r) {
        return t.post({
            url: "/resource/project/add-to-pkg",
            data: r
        });
    };
});

export {
    u as __tla,
    e as a,
    a as d,
    o as g
};