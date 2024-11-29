import h, {
    __tla as f
} from "./projectList-f1dcf047.js";

import {
    d as y,
    u as P,
    e as c,
    a as t,
    o as d,
    C as j,
    __tla as C
} from "./index-6c08ea4c.js";

import {
    __tla as v
} from "./index-71666e05.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as b
} from "./ContentPage-f6bcc98e.js";

import {
    __tla as w
} from "./index-e2094cc0.js";

import {
    __tla as x
} from "./index-c4ca0ced.js";

import {
    __tla as D
} from "./index-993301ca.js";

import {
    __tla as N
} from "./index-8b41572c.js";

import {
    __tla as R
} from "./index-1024512a.js";

import "./tree-05ea8e09.js";

import {
    __tla as U
} from "./DeptTag-1be092ce.js";

import {
    __tla as I
} from "./index-ef4d146e.js";

import {
    __tla as O
} from "./addFolder.vue_vue_type_script_setup_true_lang-2e8ce82a.js";

import "./validate-b72f006c.js";

import {
    __tla as S
} from "./file-e038b35d.js";

import {
    __tla as g
} from "./moveDialog-c54835a6.js";

import {
    __tla as k
} from "./projectList-47ec8076.js";

import {
    __tla as q
} from "./importPkg-5596edbd.js";

import {
    __tla as A
} from "./index-4e6d8569.js";

import {
    __tla as E
} from "./importPkgRes-a476fb54.js";

import {
    __tla as z
} from "./formatTime-de6f1520.js";

import {
    __tla as B
} from "./authInfo-a9796c11.js";

import {
    __tla as F
} from "./dict-c5825220.js";

import {
    __tla as G
} from "./project-51c056b9.js";

import "./formatter-7ecf379a.js";

import {
    __tla as H
} from "./index-5adb716b.js";

let m, J = Promise.all([ (() => {
    try {
        return f;
    } catch {}
})(), (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return v;
    } catch {}
})(), (() => {
    try {
        return b;
    } catch {}
})(), (() => {
    try {
        return w;
    } catch {}
})(), (() => {
    try {
        return x;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})(), (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return S;
    } catch {}
})(), (() => {
    try {
        return g;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})() ]).then(async () => {
    m = y({
        __name: "index",
        setup(K) {
            const a = P(), l = c(() => t(a.currentRoute)), e = c(() => t(l).path.indexOf("/neu/") >= 0), o = c(() => t(l).path.indexOf("/public/") >= 0), n = (r = "") => {
                const _ = t(e) ? "NeuProjectCreate" : t(o) ? "PublicProjectCreate" : "PrivateProjectCreate";
                a.push({
                    name: _,
                    query: {
                        folderId: r
                    }
                });
            }, s = () => {
                const r = t(e) ? "NeuProjectCodeRepository" : t(o) ? "PublicProjectCodeRepository" : "PrivateProjectCodeRepository";
                a.push({
                    name: r
                });
            }, i = () => {
                const r = t(e) ? "NeuProjectDataset" : t(o) ? "PublicProjectDataset" : "PrivateProjectDataset";
                a.push({
                    name: r
                });
            }, p = r => {
                const _ = t(e) ? "NeuProjectUpdate" : t(o) ? "PublicProjectUpdate" : "PrivateProjectUpdate";
                a.push({
                    name: _,
                    params: {
                        id: r.id
                    }
                });
            }, u = r => {
                const _ = a.resolve({
                    name: "ProjectPreview",
                    params: {
                        projectId: r.id,
                        inProject: 0
                    }
                }).href;
                window.open(_, "_blank");
            };
            return (r, _) => (d(), j(h, {
                onAddProject: n,
                onCodeStorage: s,
                onDataSet: i,
                onEditProject: p,
                onPreview: u
            }));
        }
    });
});

export {
    J as __tla,
    m as default
};