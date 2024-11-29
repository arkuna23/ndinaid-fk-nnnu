let a = "";

function n(e, t) {
    return !!(t = t || [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "Delete", "Backspace" ]).includes(e.key) || (e.preventDefault(), 
    !1);
}

function u(e) {
    a = e.target.value;
}

function c(e) {
    e.target.value = a;
}

export {
    u as a,
    n as b,
    c as h
};