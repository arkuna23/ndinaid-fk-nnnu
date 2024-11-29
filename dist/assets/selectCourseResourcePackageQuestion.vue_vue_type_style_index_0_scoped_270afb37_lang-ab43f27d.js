import {
    e as i,
    h as m,
    a7 as o,
    __tla as T
} from "./index-6c08ea4c.js";

let s, a, u, c, n, h, l, k = Promise.all([ (() => {
    try {
        return T;
    } catch {}
})() ]).then(async () => {
    const r = i(() => m().isSupAdmin);
    u = function(e) {
        const t = r.value ? "/resource/neu-teach-course-homeworkTest/createBatch" : "/resource/tenant-teach-course-homeworkTest/createBatch";
        return o.post({
            url: t,
            data: e
        });
    }, a = function(e) {
        const t = r.value ? "/resource/neu-teach-course-homeworkTest/getNeuList" : "/resource/tenant-teach-course-homeworkTest/getTenantList";
        return o.post({
            url: t,
            data: e
        });
    }, n = function(e) {
        const t = r.value ? "/resource/neu-teach-course-homeworkTest/editNeu" : "/resource/tenant-teach-course-homeworkTest/editTenant";
        return o.post({
            url: t,
            data: e
        });
    }, c = function(e) {
        const t = r.value ? "/resource/neu-teach-course-homeworkTest/deleteNeuBatch" : "/resource/tenant-teach-course-homeworkTest/deleteTenantBatch";
        return o.delete({
            url: t,
            data: e
        });
    }, l = function(e) {
        const t = r.value ? "/resource/neu-teach-course-homeworkTest/neuResSettingBatch" : "/resource/tenant-teach-course-homeworkTest/tenantResSettingBatch";
        return o.post({
            url: t,
            data: e
        });
    }, s = function(e) {
        const t = r.value ? `/resource/neu-teach-course-homeworkTest/${e}` : `/resource/tenant-teach-course-homeworkTest/${e}`;
        return o.get({
            url: t
        });
    }, h = function(e) {
        const t = r.value ? "/resource/tenant-pkg/list" : "/resource/neu-pkg/course-list";
        return o.get({
            url: t,
            params: e
        });
    };
});

export {
    k as __tla,
    s as a,
    a as b,
    u as c,
    c as d,
    n as e,
    h as g,
    l as s
};