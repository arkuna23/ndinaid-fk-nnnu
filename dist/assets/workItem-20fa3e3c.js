import {
    h as f,
    bB as T,
    a7 as a,
    __tla as I
} from "./index-6c08ea4c.js";

let n, i, u, g, l, o, p, d, c, k, m, h, y, L = Promise.all([ (() => {
    try {
        return I;
    } catch {}
})() ]).then(async () => {
    let s, r;
    s = f().isStudent, r = {
        tenantId: T()
    }, y = {
        getUserList: t => a.post({
            url: "/training/teaTask/selectChargeUserList",
            data: t
        }),
        getStatusList: t => {
            let e = s ? "/training/task/getStuStatusKanBanList" : "/training/teaTask/getStatusKanBanList";
            return a.post({
                url: e,
                data: t,
                headers: r
            });
        },
        getTypeList: t => {
            let e = s ? "/training/task/getStuTypeKanBanList" : "/training/teaTask/getTypeKanBanList";
            return a.post({
                url: e,
                data: t,
                headers: r
            });
        },
        getMemberList: t => {
            let e = s ? "/training/task/getStuMemberKanBanList" : "/training/teaTask/getMemberKanBanList";
            return a.post({
                url: e,
                data: t,
                headers: r
            });
        },
        getTableList: t => {
            let e = s ? "/training/task/getStuKanBanList" : "/training/teaTask/getList";
            return a.post({
                url: e,
                data: t,
                headers: r
            });
        },
        getCardDetailInfo: t => a.post({
            url: "/training/task/getKanBanTaskInfo",
            data: t,
            headers: r
        }),
        getCardDetailInfoAttach: t => a.get({
            url: `/training/taskAttachment/selectTaskAttachmentList/${t}`
        }),
        addCardDetailAttach: t => a.post({
            url: "/training/taskAttachment/createTaskAttachment",
            data: t
        }),
        delCardDetailAttach: t => a.delete({
            url: `/training/taskAttachment/delTaskAttachment/${t}`
        }),
        addCardAttach: t => a.post({
            url: "/training/taskAttachment/createTaskAttachment",
            data: t
        }),
        getCardAttach: t => a.get({
            url: `/training/taskAttachment/selectTaskAttachmentList/${t}`
        }),
        editCardDetailInfo: t => a.post({
            url: "/training/group/allocation/updateTaskAllocation",
            data: t,
            headers: r
        }),
        moveCardChangeStatus: t => a.post({
            url: "/training/task/editKanBanTaskStatus",
            data: t
        }),
        addBug: t => a.post({
            url: "/training/teaTask/createBug",
            data: t,
            headers: r
        }),
        getArrNameById: t => a.get({
            url: `/training/arrangement/arrangementNav?arangementId=${t}`
        }),
        getGroupListByarrId: t => a.get({
            url: `/training/task/getTeaGroupList/${t}`
        }),
        editStarStatus: (t, e) => a.put({
            url: `/training/task/editTaskAsteriskStatus/${t}/${e}`
        }),
        getStudentProjectList: t => a.get({
            url: `/training/task/getStuProjectList/${t}`
        }),
        showUrl: t => a.get({
            url: `/exp/project-demo/demo-info-by-project?projectId=${t.projectId}&demoType=${t.demoType}`
        }),
        getGroupInfo: t => a.get({
            url: `/training/group/selectGroupInfo?groupId=${t}`
        }),
        getArrDate: t => a.post({
            url: "/training/teaTask/getProjectPlanTime",
            data: t
        }),
        saveWorkItem: t => a.post({
            url: "/training/workItemLogs/saveWorkItem",
            data: t
        }),
        delWorkItem: t => a.delete({
            url: `/training/workItemLogs/remove/${t}`
        }),
        getGroupInfoByGroupId: t => a.get({
            url: `/training/group/groupInfo?groupId=${t}`
        })
    }, u = function(t) {
        return a.get({
            url: "/exp/task/get-list/all/group-by-status",
            params: t
        });
    }, n = function(t) {
        return a.get({
            url: "/exp/task/get-list/classify-by-type/group-by-status",
            params: t
        });
    }, i = function(t) {
        return a.get({
            url: "/exp/user-task-devops-bug/list/group-by-status",
            params: t
        });
    }, m = function(t) {
        return a.get({
            url: "/exp/task/get-list/all",
            params: t
        });
    }, c = function(t) {
        return a.get({
            url: "/exp/task/get-list/classify-by-type",
            params: t
        });
    }, d = function(t) {
        return a.get({
            url: "/exp/user-task-devops-bug/list",
            params: t
        });
    }, h = function(t) {
        return a.post({
            url: "/exp/user-task/update-status",
            data: t
        });
    }, g = function(t) {
        return a.get({
            url: "/exp/task/get-list/all/group-by-type",
            params: t
        });
    }, p = function(t) {
        return a.get({
            url: "/exp/task/get-list/all/group-by-leader",
            params: t
        });
    }, o = function(t) {
        return a.get({
            url: "/exp/task/get-list/classify-by-type/group-by-leader",
            params: t
        });
    }, l = function(t) {
        return a.get({
            url: "/exp/user-task-devops-bug/list/group-by-solver",
            params: t
        });
    }, k = function(t) {
        return a.get({
            url: "/exp/user-task-devops-bug/get-detail",
            params: t
        });
    };
});

export {
    L as __tla,
    n as a,
    i as b,
    u as c,
    g as d,
    l as e,
    o as f,
    p as g,
    d as h,
    c as i,
    k as j,
    m as t,
    h as u,
    y as w
};