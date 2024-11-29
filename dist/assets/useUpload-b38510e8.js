import {
    aZ as e,
    bB as r,
    dE as s,
    __tla as o
} from "./index-6c08ea4c.js";

import {
    __tla as _
} from "./index-e75cf668.js";

let a, l = Promise.all([ (() => {
    try {
        return o;
    } catch {}
})(), (() => {
    try {
        return _;
    } catch {}
})() ]).then(async () => {
    a = () => ({
        uploadUrl: "https://neustudy.neumooc.com",
        httpRequest: async t => (t.headers.Authorization = "Bearer " + e(), t.headers["tenant-id"] = r(), 
        s(t))
    });
});

export {
    l as __tla,
    a as u
};