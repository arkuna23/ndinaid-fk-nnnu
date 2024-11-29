import {
    a7 as e,
    __tla as qa
} from "./index-6c08ea4c.js";

let r, s, c, u, o, g, h, l, m, n, p, d, i, y, C, T, b, w, R, I, x, f, B, D, _, k, E, v, A, M, P, S, z, L, N, j, Q, q, G, O, U, F, J, K, V, W, X, Y, Z, $, H, aa, ea, ta, ra, sa, ca, ua, oa, ga, ha, la, ma, na, pa, da, ia, ya, Ca, Ta, ba, wa, Ra, Ia, xa, fa, Ba, Da, _a, ka, Ea, va, Aa, Ma, Pa, Sa, za, La, Na, ja, Qa, Ga = Promise.all([ (() => {
    try {
        return qa;
    } catch {}
})() ]).then(async () => {
    la = a => e.post({
        url: "/teachmanager/teach-arrangement/create",
        data: a
    }), ua = a => e.post({
        url: "/teachmanager/teach-arrangement/page",
        data: a
    }), ha = a => e.get({
        url: "/teachmanager/teach-arrangement/get",
        params: a
    }), ma = a => e.put({
        url: "/teachmanager/teach-arrangement/update",
        data: a
    }), na = a => e.put({
        url: "/teachmanager/teach-arrangement/release",
        params: a
    }), pa = a => e.delete({
        url: "/teachmanager/teach-arrangement/delete",
        params: a
    }), Ia = a => e.upload({
        url: "/teachmanager/teach-arrangement/import",
        data: a
    }), ba = () => e.download({
        url: "/teachmanager/teach-arrangement/export-excel",
        timeout: 36e4,
        showLoading: !1
    }), oa = a => e.put({
        url: "/teachmanager/teach-arrangement/releaseArrangements",
        params: a
    }), ga = a => e.delete({
        url: "/teachmanager/teach-arrangement/deleteArrangements",
        params: a
    }), Ba = a => e.downloadError({
        url: "/teachmanager/teach-arrangement/export-error",
        responseType: "blob",
        params: a
    }), xa = a => e.get({
        url: "/teachmanager/teach-arrangement/getImportStatus",
        params: a
    }), j = a => e.post({
        url: "/teachmanager/teach-class/create",
        data: a
    }), ea = a => e.get({
        url: "/teachmanager/teach-class/page",
        params: a
    }), ca = a => e.get({
        url: "/teachmanager/teach-class/get",
        params: a
    }), Q = a => e.put({
        url: "/teachmanager/teach-class/update",
        data: a
    }), sa = a => e.delete({
        url: "/teachmanager/teach-class/delete",
        params: a
    }), ra = a => e.put({
        url: "/teachmanager/teach-class/transfer",
        data: a
    }), wa = a => e.get({
        url: "/teachmanager/teach-class/getClassInfo",
        params: a
    }), aa = a => e.post({
        url: "/teachmanager/teach-term/create",
        data: a
    }), Z = a => e.get({
        url: "/teachmanager/teach-term/page",
        params: a
    }), $ = a => e.put({
        url: "/teachmanager/teach-term/update",
        data: a
    }), H = a => e.delete({
        url: "/teachmanager/teach-term/delete",
        params: a
    }), o = a => e.get({
        url: "/teachmanager/teach-dropdown/getTeachTermDropDown",
        params: a
    }), ja = a => e.post({
        url: "/teachmanager/base-course/create",
        data: a
    }), J = a => e.post({
        url: "/teachmanager/base-course/page",
        data: a
    }), Aa = a => e.get({
        url: "/teachmanager/base-course/get",
        params: a
    }), Qa = a => e.put({
        url: "/teachmanager/base-course/update",
        data: a
    }), Y = a => e.delete({
        url: "/teachmanager/base-course/delete",
        params: a
    }), Na = a => e.get({
        url: "/teachmanager/teach-dropdown/getBaseCourseDropDown",
        params: a
    }), fa = a => e.upload({
        url: "/teachmanager/base-course/import",
        data: a
    }), Ra = () => e.download({
        url: "/teachmanager/base-course/export-excel"
    }), Da = a => e.downloadError({
        url: "/teachmanager/base-course/export-error",
        responseType: "blob",
        data: a
    }), W = a => e.put({
        url: "/teachmanager/base-course/updateCourses",
        data: a
    }), X = a => e.delete({
        url: "/teachmanager/base-course/deleteCourses",
        params: a
    }), F = a => e.post({
        url: "/teachmanager/course-category/create",
        data: a
    }), q = a => e.get({
        url: "/teachmanager/course-category/list",
        params: a
    }), G = a => e.put({
        url: "/teachmanager/course-category/update",
        data: a
    }), U = a => e.delete({
        url: "/teachmanager/course-category/delete",
        params: a
    }), V = a => e.get({
        url: "/system/dept/option",
        params: a
    }), ta = a => e.get({
        url: "/system/user/option",
        params: a
    }), N = a => e.get({
        url: "/teachmanager/teach-class-student/getTeacherStuList",
        params: a
    }), K = a => e.get({
        url: "/teachmanager/teach-dropdown/getCourseCategoryDropDown",
        params: a
    }), m = a => e.post({
        url: "/teachmanager/teach-course-notice-tag/create",
        data: a
    }), g = a => e.get({
        url: "/teachmanager/teach-course-notice-tag/getTeachCourseNoticeTags",
        params: a
    }), l = a => e.put({
        url: "/teachmanager/teach-course-notice-tag/update",
        data: a
    }), h = a => e.delete({
        url: "/teachmanager/teach-course-notice-tag/delete",
        params: a
    }), M = a => e.get({
        url: "/teachmanager/teach-course-set-info/getResPkgByTeachCourseId",
        params: a
    }), s = a => e.get({
        url: "/teachmanager/teach-course-set-info/createResPkgQuote",
        params: a
    }), u = a => e.get({
        url: "/teachmanager/teach-course-column/listByTeachCourseId",
        params: a
    }), c = a => e.post({
        url: "/teachmanager/teach-course-column/updateTeachCourseColumn",
        data: a
    }), w = a => e.post({
        url: "/teachmanager/teach-course-guidance/updateGuidance",
        data: a
    }), b = a => e.get({
        url: "/teachmanager/teach-course-guidance/getByTeachCourseId",
        params: a
    }), I = a => e.post({
        url: "/teachmanager/teach-course-material/updateMaterial",
        data: a
    }), R = a => e.get({
        url: "/teachmanager/teach-course-material/getByTeachCourseId",
        params: a
    }), x = a => e.post({
        url: "/teachmanager/teach-course-target/listQuery",
        data: a
    }), D = a => e.post({
        url: "/teachmanager/teach-course-target/saveOrUpdateTarget",
        data: a
    }), B = (a, t) => e.post({
        url: "/teachmanager/teach-course-target/delelteByTargetIds?teachCourseId=" + t,
        data: a
    }), _ = (a, t) => e.upload({
        url: "/teachmanager/teach-course-target/import?teachCourseId=" + t,
        data: a,
        timeout: 36e5
    }), f = a => e.download({
        url: "/teachmanager/teach-course-target/exportExcel",
        params: a
    }), k = a => e.downloadError({
        url: "/teachmanager/teach-course-target/export-error",
        responseType: "blob",
        data: a
    }), _a = a => e.post({
        url: "/resource/data/res-for-biz",
        data: a
    }), A = a => e.get({
        url: "/teachmanager/teach-dropdown/getTeachCourseDirectoryDropDown",
        params: a
    }), ya = a => e.post({
        url: "/teachmanager/teach-course-tag/create",
        data: a
    }), Sa = a => e.put({
        url: "/teachmanager/teach-course-tag/update",
        data: a
    }), Ca = a => e.delete({
        url: "/teachmanager/teach-course-tag/delete",
        params: a
    }), ia = a => e.get({
        url: "/teachmanager/teach-course-tag/getTeachCourseTags",
        params: a
    }), i = a => e.post({
        url: "/teachmanager/teach-course-res/addRes",
        data: a
    }), E = a => e.post({
        url: "/teachmanager/teach-course-res/listTeachingMaterial",
        data: a
    }), v = a => e.post({
        url: "/teachmanager/teach-course-res/listResource",
        data: a
    }), C = (a, t) => e.post({
        url: "/teachmanager/teach-course-res/deleteRes?currenClassId=" + t,
        data: a
    }), T = a => e.get({
        url: "/teachmanager/teach-course-res/changeResName",
        params: a
    }), n = a => e.get({
        url: "/teachmanager/teach-course-res/getRes",
        params: a
    }), Ea = a => e.post({
        url: "/teachmanager/teach-course-res/publishTeachingMaterial",
        data: a
    }), va = a => e.post({
        url: "/teachmanager/teach-course-res-class-ctl/publishResCtl",
        data: a
    }), ka = a => e.post({
        url: "/teachmanager/teach-course-res-class-ctl/updateResCtl",
        data: a
    }), y = a => e.post({
        url: "/teachmanager/teach-course-res/setRes",
        data: a
    }), r = a => e.post({
        url: "/teachmanager/teach-course-res-class-ctl/revokeRes",
        data: a
    }), za = a => e.get({
        url: "/teachmanager/teach-course-res-stu-stat/getStatByResId",
        params: a
    }), La = a => e.get({
        url: "/teachmanager/teach-course-res-stu-record/page",
        params: a
    }), Pa = a => e.download({
        url: "/teachmanager/teach-course-res-stu-record/export",
        params: a
    }), p = a => e.get({
        url: "/teachmanager/teach-course-res-class-ctl/getResCtl",
        params: a
    }), d = a => e.get({
        url: "/teachmanager/teach-course-res-class-ctl/listTeachingClass",
        params: a
    }), Ma = a => e.post({
        url: "/teachmanager/teach-course-res/setRes",
        data: a
    }), Ta = a => e.get({
        url: "/teachmanager/teach-course-res/getByDataId",
        params: a
    }), O = a => e.get({
        url: "/teachmanager/teach-course-self-create-set/getByTenantId",
        params: a
    }), da = a => e.put({
        url: "/teachmanager/teach-course-self-create-set/update",
        data: a
    }), P = () => {}, z = () => {}, L = () => {}, S = () => {};
});

export {
    r as $,
    s as A,
    c as B,
    u as C,
    o as D,
    g as E,
    h as F,
    l as G,
    m as H,
    n as I,
    p as J,
    d as K,
    i as L,
    y as M,
    C as N,
    T as O,
    b as P,
    w as Q,
    R,
    I as S,
    x as T,
    f as U,
    B as V,
    D as W,
    _ as X,
    k as Y,
    E as Z,
    v as _,
    Ga as __tla,
    A as a,
    M as a0,
    P as a1,
    S as a2,
    z as a3,
    L as a4,
    N as a5,
    j as a6,
    Q as a7,
    q as a8,
    G as a9,
    O as aA,
    U as aa,
    F as ab,
    J as ac,
    K as ad,
    V as ae,
    W as af,
    X as ag,
    Y as ah,
    Z as ai,
    $ as aj,
    H as ak,
    aa as al,
    ea as am,
    ta as an,
    ra as ao,
    sa as ap,
    ca as aq,
    ua as ar,
    oa as as,
    ga as at,
    ha as au,
    la as av,
    ma as aw,
    na as ax,
    pa as ay,
    da as az,
    ia as b,
    ya as c,
    Ca as d,
    Ta as e,
    ba as f,
    wa as g,
    Ra as h,
    Ia as i,
    xa as j,
    fa as k,
    Ba as l,
    Da as m,
    _a as n,
    ka as o,
    Ea as p,
    va as q,
    Aa as r,
    Ma as s,
    Pa as t,
    Sa as u,
    za as v,
    La as w,
    Na as x,
    ja as y,
    Qa as z
};