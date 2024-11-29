import {
    a7 as a,
    __tla as m
} from "./index-6c08ea4c.js";

let r, n = Promise.all([ (() => {
    try {
        return m;
    } catch {}
})() ]).then(async () => {
    let t;
    t = "smartexam", r = {
        createExam: e => a.post({
            url: `/${t}/exam-arrangement`,
            data: e
        }),
        getSemesterList: () => a.get({
            url: "/teachmanager/teach-dropdown/getTeachTermDropDown"
        }),
        getTeachArrangeList: e => a.post({
            url: "/teachmanager/teach-dropdown/getTeachArrangementDropDown",
            data: e
        }),
        getTeachClassList: e => a.get({
            url: "/teachmanager/teach-dropdown/getTeachClassDropDownList",
            params: e
        }),
        examInfo: e => a.get({
            url: `/${t}/exam-arrangement/info/${e}`
        }),
        getList: e => a.post({
            url: `/${t}/exam-arrangement/page`,
            data: e
        }),
        updateExam: e => a.put({
            url: `/${t}/exam-arrangement`,
            data: e
        }),
        deleteExam: e => a.delete({
            url: `/${t}/exam-arrangement/${e}`
        }),
        joinYear: () => a.get({
            url: "/system/user/option-join-year"
        }),
        getExamStudent: e => a.get({
            url: `/${t}/candidate/getExamCandidates/${e}`
        }),
        getUnitTree: () => a.get({
            url: "/user/system/unit/tree"
        }),
        getExamStudentPage: e => a.post({
            url: `/${t}/exam-arrangement/candidate/selected/page`,
            data: e
        }),
        deleteExamStudent: e => a.delete({
            url: `/${t}/exam-arrangement/candidate`,
            data: e
        }),
        getStudentPage: e => a.post({
            url: "/teachmanager/teach-class-student/getClassStuByClassIds",
            data: e
        }),
        getExamedStudentPage: e => a.post({
            url: `/${t}/exam-arrangement/candidate/unselected/from-exam/page`,
            data: e
        }),
        getExamListByStatus: e => a.get({
            url: `/${t}/exam-arrangement/candidate/unselected/from-exam/exam/list${e ? `?status=${e}` : ""}`
        }),
        getExamList: () => a.get({
            url: `/${t}/exam-arrangement/exam/list`
        }),
        addExamStudent: e => a.post({
            url: `/${t}/exam-arrangement/candidate`,
            data: e
        }),
        publishExam: e => a.put({
            url: `/${t}/exam-arrangement/publish/${e}`
        }),
        copyExam: e => a.post({
            url: `/${t}/exam-arrangement/copy/${e}`
        }),
        getExamScoringSetting: e => a.get({
            url: `/${t}/exam-arrangement/mark-setting/${e}`
        }),
        updateExamScoringSetting: e => a.post({
            url: `/${t}/exam-arrangement/mark-setting`,
            data: e
        }),
        getExamPaper: e => a.get({
            url: `/${t}/exam-arrangement/paper/preview/${e.examId}/${e.paperId}`
        }),
        replaceExamPaper: e => a.put({
            url: `/${t}/exam-arrangement/paper/replace`,
            data: e
        }),
        updateExamPaper: e => a.put({
            url: `/${t}/exam-arrangement/paper/update`,
            data: e
        }),
        getExamScore: e => a.post({
            url: `/${t}/exam-arrangement/score/page`,
            data: e,
            showLoading: !1
        }),
        AnnouncementResults: e => a.put({
            url: `/${t}/exam-arrangement/score/publish/${e}`
        }),
        addExamNotesTemplate: e => a.post({
            url: `/${t}/examNotesTemplate/addExamNotesTemplate`,
            data: e
        }),
        getTemplateManageList: e => a.post({
            url: `/${t}/examNotesTemplate/getTemplateManageList`,
            data: e
        }),
        deleteExamNotesTemplate: e => a.delete({
            url: `/${t}/examNotesTemplate/deleteExamNotesTemplate/${e}`
        }),
        updateExamNotesTemplate: e => a.post({
            url: `/${t}/examNotesTemplate/updateExamNotesTemplate`,
            data: e
        }),
        getExamNotesTemplateList: () => a.get({
            url: `/${t}/examNotesTemplate/getExamNotesTemplateList`
        }),
        getExamNotesTemplate: e => a.get({
            url: `/${t}/examNotesTemplate/getExamNotesTemplate/${e}`
        }),
        derivedScoreApi: e => a.downloadError({
            url: `/${t}/exam-arrangement/exportStudentScore`,
            data: e
        }),
        getResourcePackageList: e => a.post({
            url: "/resource/tenant-pkg/list",
            data: e
        }),
        getResourcePaperList: e => a.post({
            url: "/resource/tenant-teach-course-homeworkTest/getPkgPaperPage",
            data: e
        }),
        previewResourcePaper: e => a.get({
            url: `/resource/tenant-teach-course-homeworkTest/${e}`
        })
    };
});

export {
    r as T,
    n as __tla
};