import {
    a7 as e,
    __tla as d
} from "./index-6c08ea4c.js";

let t, r, o, c, s, u, l, h, m = Promise.all([ (() => {
    try {
        return d;
    } catch {}
})() ]).then(async () => {
    o = a => e.post({
        url: "/teachmanager/teach-course-fqa/create",
        data: a
    }), u = a => e.get({
        url: "/teachmanager/teach-course-fqa/page",
        params: a
    }), h = a => e.put({
        url: "/teachmanager/teach-course-fqa/update",
        data: a
    }), l = a => e.upload({
        url: "/teachmanager/teach-course-fqa/importFqa",
        data: a
    }), s = () => e.download({
        url: "/teachmanager/teach-course-fqa/export-excel-model",
        timeout: 36e4,
        showLoading: !1
    }), t = a => e.downloadError({
        url: "/teachmanager/teach-course-fqa/export-error",
        responseType: "blob",
        data: a
    }), r = a => e.download({
        url: "/teachmanager/teach-course-fqa/export-excel",
        timeout: 36e4,
        showLoading: !1,
        params: a
    }), c = a => e.put({
        url: "/teachmanager/teach-course-fqa/updateBatchDelete",
        data: a
    });
});

export {
    m as __tla,
    t as a,
    r as b,
    o as c,
    c as d,
    s as e,
    u as g,
    l as i,
    h as u
};