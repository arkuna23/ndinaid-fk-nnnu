import {
    a7 as t,
    __tla as u
} from "./index-6c08ea4c.js";

let e, r, s, n, c, l = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})() ]).then(async () => {
    c = function(a) {
        return t.get({
            url: "/teachmanager/teach-course-assistant/list",
            params: a
        });
    }, e = function(a) {
        return t.post({
            url: "/teachmanager/teach-course-assistant/create",
            data: a
        });
    }, n = function(a) {
        return t.delete({
            url: "/teachmanager/teach-course-assistant/delete",
            params: a
        });
    }, r = function(a) {
        return t.get({
            url: "/teachmanager/teach-course-pkg-build/listByTeachCourseId",
            params: a
        });
    }, s = function(a) {
        return t.post({
            url: "/teachmanager/teach-course-pkg-build/generatePkg",
            data: a
        });
    };
});

export {
    l as __tla,
    e as a,
    r as b,
    s as c,
    n as d,
    c as g
};