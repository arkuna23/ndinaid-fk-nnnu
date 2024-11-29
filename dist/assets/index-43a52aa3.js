import {
    a7 as e,
    __tla as l
} from "./index-6c08ea4c.js";

let t, r, s, o, c, u, d, h = Promise.all([ (() => {
    try {
        return l;
    } catch {}
})() ]).then(async () => {
    r = a => e.post({
        url: "/teachmanager/teach-course-res-stu/listResource",
        data: a
    }), d = a => e.post({
        url: "/teachmanager/teach-course-res-stu-record/validateStuResInfo",
        data: a
    }), s = a => e.post({
        url: "/teachmanager/teach-course-res-stu-record/downloadRes",
        data: a
    }), t = a => e.post({
        url: "/teachmanager/teach-course-res-stu-record/startStudy",
        data: a
    }), o = a => e.post({
        url: "/teachmanager/teach-course-res-stu-record/endStudyForDocPicMd",
        data: a
    }), u = a => e.post({
        url: "/teachmanager/teach-course-res-stu-record/studyForAudioOrVideo",
        data: a
    }), c = a => e.post({
        url: "/teachmanager/teach-course-res-stu-record/getRecordInfo",
        data: a
    });
});

export {
    h as __tla,
    t as a,
    r as b,
    s as d,
    o as e,
    c as g,
    u as s,
    d as v
};