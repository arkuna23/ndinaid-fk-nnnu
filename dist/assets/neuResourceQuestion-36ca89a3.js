import {
    e as p,
    h as v,
    a7 as r,
    __tla as f
} from "./index-6c08ea4c.js";

let n, a, s, o, c, i, l, d, h, g, q = Promise.all([ (() => {
    try {
        return f;
    } catch {}
})() ]).then(async () => {
    const u = p(() => v().isSupAdmin);
    s = function(e) {
        const t = u.value ? "/resource/neu-teach-course-question/createBatch" : "/resource/tenant-teach-course-question/createBatch";
        return r.post({
            url: t,
            data: e
        });
    }, l = function(e) {
        const t = u.value ? "/resource/neu-teach-course-question/getNeuQuestionPage" : "/resource/tenant-teach-course-question/getTenantQuestionPage";
        return r.post({
            url: t,
            data: e
        });
    }, d = function(e) {
        const t = u.value ? "/resource/neu-teach-course-question/editNeuQuestion" : "/resource/tenant-teach-course-question/editTenantQuestion";
        return r.post({
            url: t,
            data: e
        });
    }, o = function(e) {
        const t = u.value ? "/resource/neu-teach-course-question/deleteNeuQuestionBatch" : "/resource/tenant-teach-course-question/deleteTenantQuestionBatch";
        return r.delete({
            url: t,
            data: e
        });
    }, h = function(e) {
        const t = u.value ? "/resource/neu-teach-course-question/neuResSetting" : "/resource/tenant-teach-course-question/tenantResSetting";
        return r.post({
            url: t,
            data: e
        });
    }, c = function(e) {
        const t = u.value ? "/resource/neu-teach-course-tag/create" : "/resource/tenant-course-tag/create";
        return r.post({
            url: t,
            data: e
        });
    }, a = function(e) {
        const t = u.value ? "/resource/neu-teach-course-tag/delete" : "/resource/tenant-course-tag/delete";
        return r.delete({
            url: t,
            data: e
        });
    }, g = function(e) {
        const t = u.value ? "/resource/neu-teach-course-tag/update" : "/resource/tenant-course-tag/update";
        return r.put({
            url: t,
            data: e
        });
    }, i = function(e) {
        const t = u.value ? "/resource/neu-teach-course-directory/getNeuTeachCourseDirectoryDropDown" : "/resource/tenant-course-directory/list-tree/" + e;
        return r.get({
            url: t,
            params: u.value ? {
                neuPkgId: e
            } : void 0
        });
    }, n = function(e) {
        const t = u.value ? "/resource/neu-teach-course-tag/getByPkg" : "/resource/tenant-course-tag/list/" + e;
        return r.get({
            url: t,
            params: u.value ? {
                id: e
            } : void 0
        });
    };
});

export {
    q as __tla,
    n as a,
    a as b,
    s as c,
    o as d,
    c as e,
    i as f,
    l as g,
    d as h,
    h as s,
    g as u
};