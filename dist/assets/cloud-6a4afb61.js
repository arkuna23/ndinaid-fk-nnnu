import {
    a7 as o,
    __tla as d
} from "./index-6c08ea4c.js";

let t, r = Promise.all([ (() => {
    try {
        return d;
    } catch {}
})() ]).then(async () => {
    t = {
        add: e => o.post({
            url: "/exp/project-demo/add-cloud-service",
            data: e
        }),
        edit: e => o.put({
            url: "/exp/project-demo/edit-cloud-service",
            data: e
        }),
        deploy: e => o.post({
            url: "/exp/project-demo/deploy-cloud-service",
            data: e
        }),
        del: e => o.put({
            url: `/exp/project-demo/delete-cloud-service/${e}`
        }),
        demoInfo: e => o.get({
            url: "/exp/project-demo/demo-cloud-by-project",
            params: e
        }),
        delFile: e => o.put({
            url: `/exp/project-demo/delete-cloud-service/remove-demo/${e}`
        })
    };
});

export {
    r as __tla,
    t as c
};