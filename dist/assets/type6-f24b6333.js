import {
    o as t,
    c as a,
    __tla as l
} from "./index-6c08ea4c.js";

let e, o = Promise.all([ (() => {
    try {
        return l;
    } catch {}
})() ]).then(async () => {
    e = {
        __name: "type6",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isPreview: {
                type: Boolean,
                default: !1
            },
            showType: {
                type: Boolean,
                default: !1
            }
        },
        setup: p => (r, s) => (t(), a("div", null, " 完形填空 "))
    };
});

export {
    o as __tla,
    e as default
};