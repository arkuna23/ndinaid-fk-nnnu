import {
    a7 as r,
    __tla as i
} from "./index-6c08ea4c.js";

let o, p = Promise.all([ (() => {
    try {
        return i;
    } catch {}
})() ]).then(async () => {
    let a, s;
    a = "/exp/code-check/", s = "/env-api/ci-processor/sonar/", o = {
        getList: e => r.get({
            url: `${a}/list`,
            params: e
        }),
        add: e => r.post({
            url: `${a}/add`,
            data: e
        }),
        edit: e => r.put({
            url: `${a}/edit`,
            data: e
        }),
        del: (e, t) => r.put({
            url: `${a}/delete/${e}/${t}`
        }),
        execute: e => r.put({
            url: `${a}/check`,
            data: e
        }),
        overView: (e, t) => r.get({
            url: `${s}measures/component?projectKey=${e}&metricKeys=${t}`
        }),
        overViewOther: e => r.get({
            url: `${s}measures/history`,
            params: e
        }),
        getProjectTree: e => r.get({
            url: "/env-api/ci-processor/gitlab/project/tree",
            params: e
        }),
        getProblems: e => r.get({
            url: "/env-api/ci-processor/sonar/issues",
            params: e
        }),
        getDetails: e => r.get({
            url: "/env-api/ci-processor/sonar/measures/rule",
            params: e
        }),
        getFileData: e => r.get({
            url: "/env-api/ci-processor/sonar/source/lines",
            params: e
        }),
        getSummaryData: e => r.get({
            url: `${a}/detail/${e}`
        }),
        getFileList: e => r.get({
            url: "/env-api/ci-processor/sonar/measures/component_tree",
            params: e
        }),
        getProblemsList: e => r.get({
            url: "/env-api/ci-processor/sonar/issues/search",
            params: e
        }),
        getTaskListApi: e => r.get({
            url: `${a}/pipeline-job`,
            params: e
        })
    };
});

export {
    p as __tla,
    o as c
};