import {
    e8 as a,
    __tla as e
} from "./index-6c08ea4c.js";

let t, l = Promise.all([ (() => {
    try {
        return e;
    } catch {}
})() ]).then(async () => {
    t = a("Devops", {
        state: () => ({
            taskId: null
        }),
        actions: {
            setTaskId(s) {
                this.taskId = s;
            }
        },
        persist: !0
    });
});

export {
    l as __tla,
    t as u
};