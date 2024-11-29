import {
    a7 as e,
    __tla as n
} from "./index-6c08ea4c.js";

let a, r = Promise.all([ (() => {
    try {
        return n;
    } catch {}
})() ]).then(async () => {
    let i;
    i = "smartexam", a = {
        getList: t => e.post({
            url: `/${i}/invigilation-center/exam-arrangement-page`,
            data: t
        }),
        getDetailById: t => e.get({
            url: `/${i}/invigilation-center/getExamSetInfo/${t}`
        }),
        getInvigilatorList: t => e.post({
            url: `/${i}/invigilation-center/student-status-info-page`,
            data: t
        }),
        getLogApi: t => e.post({
            url: `/${i}/invigilation-center/studentLogRecord`,
            data: t
        }),
        manualAuditApi: t => e.post({
            url: `/${i}/invigilation-center/manualAudit`,
            data: t
        }),
        messageRemindApi: t => e.post({
            url: `/${i}/invigilation-center/messageReminding`,
            data: t
        }),
        forceFinishApi: t => e.post({
            url: `/${i}/invigilation-center/compulsorySubmission`,
            data: t
        }),
        getDynamicLogApi: t => e.post({
            url: `/${i}/invigilation-center/dynamicMonitoring`,
            data: t
        }),
        getAvatarListApi: t => e.get({
            url: `/system/avatarPic/by-id/${t}`
        }),
        getShowPictureApi: t => e.get({
            url: `/${i}/invigilation-center/getStudentShowPictures/${t}`
        }),
        getFaceIdentifyApi: t => e.get({
            url: `/${i}/invigilation-center/getFaceIdentifySwitch/${t}`
        }),
        exportSubmitStuApi: t => e.download({
            url: `/${i}/invigilation-center/exportSubmitStu/${t}`
        }),
        exportNotEnterStuApi: t => e.download({
            url: `/${i}/invigilation-center/exportNotEnterStu/${t}`
        })
    };
});

export {
    a as I,
    r as __tla
};