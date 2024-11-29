import {
    a7 as t,
    __tla as s
} from "./index-6c08ea4c.js";

let r, e, m = Promise.all([ (() => {
    try {
        return s;
    } catch {}
})() ]).then(async () => {
    e = a => t.get({
        url: "/resource/data/personal-main-statistic",
        params: a
    }), r = a => t.get({
        url: "/smartexam/exam-arrangement/homeCountExam",
        params: a
    });
});

export {
    m as __tla,
    r as a,
    e as g
};