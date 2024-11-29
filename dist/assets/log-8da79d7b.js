import {
    a7 as c,
    __tla as t
} from "./index-6c08ea4c.js";

let a, i = Promise.all([ (() => {
    try {
        return t;
    } catch {}
})() ]).then(async () => {
    a = function(e) {
        return c.get({
            url: "/env-api/ci-processor/cim/getLog",
            showLoading: !1,
            params: {
                ciType: e.ciType,
                serviceName: "nse-ctp-3",
                ciName: e.ciName,
                ciNamespace: e.ciNamespace,
                envId: e.envId
            }
        });
    };
});

export {
    i as __tla,
    a as g
};