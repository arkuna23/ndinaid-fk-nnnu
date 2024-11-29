import {
    aa as o,
    __tla as s
} from "./index-6c08ea4c.js";

let n, c = Promise.all([ (() => {
    try {
        return s;
    } catch {}
})() ]).then(async () => {
    let t;
    ({
        t
    } = o()), n = () => ({
        required: a => ({
            required: !0,
            message: a || t("common.required")
        }),
        lengthRange: a => {
            const {
                min: m,
                max: e,
                message: r
            } = a;
            return {
                min: m,
                max: e,
                message: r || t("common.lengthRange", {
                    min: m,
                    max: e
                })
            };
        },
        notSpace: a => ({
            validator: (m, e, r) => {
                (e == null ? void 0 : e.indexOf(" ")) !== -1 ? r(new Error(a || t("common.notSpace"))) : r();
            }
        }),
        notSpecialCharacters: a => ({
            validator: (m, e, r) => {
                /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/gi.test(e) ? r(new Error(a || t("common.notSpecialCharacters"))) : r();
            }
        })
    });
});

export {
    c as __tla,
    n as u
};