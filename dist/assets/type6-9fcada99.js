import {
    o as e,
    c as a,
    __tla as l
} from "./index-6c08ea4c.js";

let t, o = Promise.all([ (() => {
    try {
        return l;
    } catch {}
})() ]).then(async () => {
    t = {
        __name: "type6",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isPreview: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:form" ],
        setup: (r, {
            emit: s
        }) => (p, _) => (e(), a("div", null, " 完形填空 "))
    };
});

export {
    o as __tla,
    t as default
};