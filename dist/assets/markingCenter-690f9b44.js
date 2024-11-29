import {
    a7 as e,
    __tla as k
} from "./index-6c08ea4c.js";

let t, r, m, n, u, s, x, i, d, o, p, g, l, c, f = Promise.all([ (() => {
    try {
        return k;
    } catch {}
})() ]).then(async () => {
    p = function(a) {
        return e.post({
            url: "/smartexam/exam-mark/page-list",
            data: a
        });
    }, n = function(a) {
        return e.post({
            url: "/smartexam/exam-mark/getMarkQuestionList",
            data: a
        });
    }, m = function(a) {
        return e.get({
            url: `/smartexam/exam-mark/getQuestionByPaperIdAndQuestionNO/${a.paperId}/${a.questionNO}/${a.examId}`
        });
    }, t = function(a) {
        return e.get({
            url: `/smartexam/exam-candidate-paper/getMakeQuestionStudentList/${a.examId}/${a.questionNO}`
        });
    }, r = function(a) {
        return e.get({
            url: `/smartexam/exam-arrangement/getResExamExamination/${a.examId}`
        });
    }, o = function(a) {
        return e.put({
            url: "/smartexam/exam-mark/markQuestion",
            data: a
        });
    }, i = function(a) {
        return e.put({
            url: "/smartexam/exam-mark/markPaper ",
            data: a
        });
    }, u = function(a) {
        return e.post({
            url: "/smartexam/exam-mark/getMarkPaperList",
            data: a
        });
    }, g = function(a) {
        return e.get({
            url: `/smartexam/exam-mark/getPaperByPaperId/${a.paperId}/${a.volumeFlag}`
        });
    }, x = function(a) {
        return e.get({
            url: `/smartexam/exam-candidate-paper/getResExamCandidatePaperScoreById/${a.id}`
        });
    }, c = function(a) {
        return e.get({
            url: `/smartexam/exam-mark/getNextPaperByExamIdAndCandidateId/${a.examId}/${a.candidateId}`
        });
    }, s = function(a) {
        return e.get({
            url: `/smartexam/exam-mark/getResExamCandidatePaperQuestionById/${a.paperId}`
        });
    }, d = function(a) {
        return e.put({
            url: "/smartexam/exam-mark/changeMarkPaper",
            data: a
        });
    }, l = function(a) {
        return e.get({
            url: `/smartexam/exam-arrangement/getResExamMarkPermission/${a.examId}`
        });
    };
});

export {
    f as __tla,
    t as a,
    r as b,
    m as c,
    n as d,
    u as e,
    s as f,
    x as g,
    i as h,
    d as i,
    o as j,
    p as l,
    g as m,
    l as r,
    c as s
};