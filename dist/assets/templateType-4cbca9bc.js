import {
    a7 as e,
    __tla as r
} from "./index-6c08ea4c.js";

let a, l = Promise.all([ (() => {
    try {
        return r;
    } catch {}
})() ]).then(async () => {
    a = function(t) {
        return e.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/templatetype",
            params: t
        });
    };
});

export {
    l as __tla,
    a as g
};