import {
    e8 as a,
    __tla as e
} from "./index-6c08ea4c.js";

import {
    b as s,
    __tla as r
} from "./index-67f95b27.js";

let t, n = Promise.all([ (() => {
    try {
        return e;
    } catch {}
})(), (() => {
    try {
        return r;
    } catch {}
})() ]).then(async () => {
    t = a("message", {
        state: () => ({
            unReadNum: 0
        }),
        getters: {
            UserUnReadNum() {
                return this.unReadNum;
            }
        },
        actions: {
            async getUnReadNumn() {
                this.unReadNum = await s();
            }
        }
    });
});

export {
    n as __tla,
    t as u
};