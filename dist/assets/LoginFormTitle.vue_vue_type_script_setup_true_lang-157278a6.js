import {
    r as E,
    e as r,
    a as s,
    d as O,
    o as R,
    c as _,
    v as f,
    B as u,
    t as T,
    aa as L,
    __tla as I
} from "./index-6c08ea4c.js";

let e, g, S, i, x = Promise.all([ (() => {
    try {
        return I;
    } catch {}
})() ]).then(async () => {
    e = (t => (t[t.LOGIN = 0] = "LOGIN", t[t.REGISTER = 1] = "REGISTER", t[t.RESET_PASSWORD = 2] = "RESET_PASSWORD", 
    t[t.MOBILE = 3] = "MOBILE", t[t.QR_CODE = 4] = "QR_CODE", t[t.SSO = 5] = "SSO", 
    t))(e || {});
    const o = E(0);
    i = function() {
        function t(n) {
            o.value = n;
        }
        return {
            setLoginState: t,
            getLoginState: r(() => o.value),
            handleBackLogin: function() {
                t(0);
            }
        };
    }, S = function(t) {
        return {
            validForm: async function() {
                const n = s(t);
                if (n) return await n.validate();
            }
        };
    };
    let a, l;
    a = {
        class: "enter-x mb-6 text-center font-bold xl:text-left",
        style: {
            "font-size": "42px",
            "margin-top": "0",
            color: "#333",
            "line-height": "59px"
        }
    }, l = T("p", {
        class: "xl:text-left font-100 mb-0",
        style: {
            "font-size": "32px",
            "line-height": "59px",
            margin: "0"
        }
    }, "欢迎使用", -1), g = O({
        name: "LoginFormTitle",
        __name: "LoginFormTitle",
        setup(t) {
            const {
                t: n
            } = L(), {
                getLoginState: m
            } = i(), c = r(() => ({
                [e.RESET_PASSWORD]: n("sys.login.forgetFormTitle"),
                [e.LOGIN]: n("sys.login.signInFormTitle"),
                [e.REGISTER]: n("sys.login.signUpFormTitle"),
                [e.MOBILE]: n("sys.login.mobileSignInFormTitle"),
                [e.QR_CODE]: n("sys.login.qrSignInFormTitle"),
                [e.SSO]: n("sys.login.ssoFormTitle")
            })[s(m)]);
            return (y, p) => (R(), _("h2", a, [ l, f(" " + u(s(c)), 1) ]));
        }
    });
});

export {
    e as L,
    g as _,
    x as __tla,
    S as a,
    i as u
};