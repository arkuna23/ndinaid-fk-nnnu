function t(n, a, r) {
    a.trim() === "" ? r(new Error(n.message || "输入值不能为空且不能为空格")) : r();
}

function e(n, a, r) {
    /^(https?:\/\/)(([\w-]+\.)+[a-z0-9]+)(\/[^/?#]*)*(\?[^#]*)?(#.*)?$/i.test(a) ? r() : r(new Error("请输入正确的URL地址"));
}

function s(n, a, r) {
    /^(?:https?:\/\/)?(?:[a-z\d]([-a-z\d]*[a-z\d])*\.)+[a-z]{2,}|(?:\d{1,3}(?:\.\d{1,3}){3})(?::\d+)?(?:[\/?#]\S*)?$/i.test(a) ? r() : r(new Error("请输入正确的URL地址"));
}

function z(n, a, r) {
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a) ? r() : r(new Error("请输入有效的电子邮件地址"));
}

function o(n, a, r) {
    /^[a-zA-Z0-9]*$/.test(a) ? r() : r(new Error("请输入字母和数字的组合"));
}

function $(n, a, r) {
    a ? /^(?![a-zA-z]+$)(?!\d+$)(?![~!@#$%^&*()_+-=.`]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![~!@#$%^&*()_+-=.`]+$)[a-zA-Z~!@#$%^&*()_+-=.`]{8,16}$/.test(a) ? r() : r(new Error("密码必须由8-16位数字、字母、特殊字符组合")) : r();
}

function A(n, a, r) {
    a ? /^(?![a-zA-z]+$)(?!\d+$)(?![~!@#$%^&*()_+-=.`]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![~!@#$%^&*()_+-=.`]+$)[a-zA-Z~!@#$%^&*()_+-=.`]{8,32}$/.test(a) ? r() : r(new Error("密码必须由8-16位数字、字母、特殊字符组合")) : r();
}

function i(n, a, r) {
    a ? /^(?!.*[\\\/]).*$/.test(a) ? r() : r(new Error(n.message || '字符串中不能包含字符 "\\" 或 "/"')) : r();
}

function c(n) {
    return /^(?![a-zA-z]+$)(?!\d+$)(?![~!@#$%^&*()_+-=.`]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![~!@#$%^&*()_+-=.`]+$)[a-zA-Z~!@#$%^&*()_+-=.`]{6,14}$/.test(n);
}

function f(n, a, r) {
    Array.isArray(a) && a.length > 0 ? r() : r(new Error(n.message));
}

function u(n, a, r) {
    a ? /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/.test(a) ? r() : r(new Error("密码必须由8-16位数字、大写字母、小写字母、特殊字符组合")) : r();
}

function d(n, a, r) {
    a ? /^[a-zA-Z0-9\s~!@#$%^&*()_+-=.`]*$/.test(a) ? r() : r(new Error("请输数字、特殊字符、英文字母（区分大小写），中间可以有空格")) : r();
}

function w(n, a, r) {
    a ? /^\S+$/.test(a) ? r() : r(new Error("名称不能有空格")) : r();
}

export {
    z as a,
    A as b,
    i as c,
    e as d,
    o as e,
    d as f,
    f as g,
    s as h,
    c as i,
    w as j,
    u as k,
    $ as l,
    t as v
};