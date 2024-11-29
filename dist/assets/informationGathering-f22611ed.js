import {
    a7 as a,
    __tla as e
} from "./index-6c08ea4c.js";

let s, l = Promise.all([ (() => {
    try {
        return e;
    } catch {}
})() ]).then(async () => {
    s = {
        getListById: t => a.get({
            url: `/system/avatarPic/by-id/${t}`
        }),
        putImgList: t => a.post({
            url: "/system/avatarPic",
            data: t
        }),
        updateStatus: t => a.put({
            url: "/system/avatarPic/collection-status",
            data: t
        }),
        batchUpdateStatus: t => a.put({
            url: "/system/avatarPic/collection-status/batch",
            data: t
        }),
        getPageList: t => a.upload({
            url: "/system/avatarPic/page-list/smartexam",
            data: t
        })
    };
});

export {
    l as __tla,
    s as i
};