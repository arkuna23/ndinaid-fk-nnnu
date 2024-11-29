import {
    a7 as t,
    __tla as l
} from "./index-6c08ea4c.js";

let e, r, s, c, n = Promise.all([ (() => {
    try {
        return l;
    } catch {}
})() ]).then(async () => {
    s = a => t.get({
        url: "/teachmanager/teach-class-student/applyJoin",
        params: a
    }), e = a => t.get({
        url: "/teachmanager/teach-arrangement-stu/page",
        params: a
    }), c = a => t.get({
        url: "/teachmanager/teach-class-student/withDraw",
        params: a
    }), r = a => t.post({
        url: "/teachmanager/teach-course-directory-stu/listTree",
        data: a
    });
});

export {
    n as __tla,
    e as a,
    r as g,
    s as j,
    c as q
};