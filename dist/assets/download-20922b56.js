const o = (e, t, w) => {
    const i = new Blob([ e ], {
        type: w
    });
    window.URL = window.URL || window.webkitURL;
    const c = URL.createObjectURL(i), n = document.createElement("a");
    n.href = c, n.download = t, n.click(), window.URL.revokeObjectURL(c);
}, a = {
    excel: (e, t) => {
        o(e, t, "application/vnd.ms-excel");
    },
    word: (e, t) => {
        o(e, t, "application/msword");
    },
    zip: (e, t) => {
        o(e, t, "application/zip");
    },
    html: (e, t) => {
        o(e, t, "text/html");
    },
    markdown: (e, t) => {
        o(e, t, "text/markdown");
    }
};

export {
    a as d
};