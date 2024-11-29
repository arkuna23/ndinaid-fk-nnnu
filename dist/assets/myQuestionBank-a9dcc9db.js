import {
    a7 as t,
    __tla as u
} from "./index-6c08ea4c.js";

let o, i = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})() ]).then(async () => {
    o = {
        getList: e => t.get({
            url: "/resource/exam-question/page-list",
            params: e
        }),
        delById: e => t.delete({
            url: `/resource/exam-question/${e}`
        }),
        delList: e => t.delete({
            url: "/resource/exam-question/batch",
            data: e
        }),
        createFolder: e => t.post({
            url: "/resource/exam-question/folder",
            data: e
        }),
        updateFolder(e, s) {
            const r = s ? `/resource/exam-question/folder/${s}` : `/resource/exam-question/folder/${e.id}`;
            return t.put({
                url: r,
                data: e
            });
        },
        copyQuestion: e => t.post({
            url: `/resource/exam-question/copy/${e}`
        }),
        getFolderTree: () => t.get({
            url: "/resource/exam-question/folder/tree-list"
        }),
        moveQuestions: (e, s) => t.put({
            url: `/resource/exam-question/move/batch?parentId=${s}`,
            data: e
        }),
        createQuestion: (e, s = "", r) => t.post({
            url: `/resource/exam-question/question?parentId=${s}&questionType=${r}`,
            data: e
        }),
        createQuestionBatch: (e, s = "") => t.post({
            url: `/resource/exam-question/questions?parentId=${s}`,
            data: e
        }),
        updateQuestion(e, s = "", r) {
            const a = s || e.id ? `/resource/exam-question/question/${s || e.id}?questionType=${r}` : "";
            return t.put({
                url: a,
                data: e
            });
        },
        getDbList: e => t.get({
            url: `/resource/exam-db/list?langId=${e}`
        }),
        createDb: e => t.upload({
            url: "/resource/exam-db",
            data: e
        }),
        updateDb(e) {
            const s = `/resource/exam-db/${e.id}?dbName=${e.dbName}`;
            return t.put({
                url: s,
                data: e
            });
        },
        deleteDb: e => t.delete({
            url: `/resource/exam-db/${e}`
        }),
        changeDbValid: (e, s) => t.put({
            url: `/resource/exam-db/${e}/valid/${s}`
        }),
        downloadDb: e => t.get({
            url: `/resource/exam-db/${e}/download`,
            responseType: "blob",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }),
        getDbById: e => t.get({
            url: `/resource/exam-db/${e}/excludeDbzip`
        }),
        submissions: (e, s) => t.post({
            url: "/resource/exam-judge0/submissions",
            data: {
                languageId: 82,
                answer: e,
                dbId: s,
                singleFilePrograms: !0
            }
        }),
        submissionsCode: e => t.post({
            url: "/resource/exam-judge0/submissions",
            data: {
                languageId: e.languageId,
                stdin: e.stdin,
                singleFilePrograms: e.singleFilePrograms,
                answer: e.solutionContent,
                mainContent: e.mainContent
            },
            showLoading: !1
        }),
        getSubmissions: e => t.get({
            url: `/resource/exam-judge0/submissions/${e}`,
            showLoading: !1
        }),
        getSubmitQuestions: e => t.get({
            url: "/resource/exam-submit-question/page-list",
            params: e
        }),
        deleteCommit: e => t.delete({
            url: `/resource/exam-submit-question/${e}`
        }),
        submitQuestions: e => t.post({
            url: "/resource/exam-question/submit",
            data: e
        }),
        intelligentEntryApi: e => t.upload({
            url: "/resource/exam-question/excel/content",
            data: e
        }),
        downloadsqlite3Api: () => t.download({
            url: "/resource/exam-res-tmpl/download/lang/82"
        }),
        questionsTemplateApi: e => t.downloadError({
            url: "/resource/exam-question/template",
            data: e
        }),
        aiQuestionsApi: e => t.post({
            url: "/resource/exam-question/AIQuestionSetting",
            data: e,
            timeout: 1e6,
            showLoading: !1
        })
    };
});

export {
    o as M,
    i as __tla
};