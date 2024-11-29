function r(u) {
    return u == null || u === "" ? "--" : u;
}

function t(u) {
    return u != null && u !== "" ? u : "--";
}

function l(u, a, n) {
    return n != null && n !== "" ? n : "--";
}

export {
    t as a,
    l as f,
    r as t
};