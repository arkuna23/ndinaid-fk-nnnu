import {
    o as s,
    c as o,
    k as t,
    l as c,
    ad as d,
    ae as p,
    __tla as m
} from "./index-6c08ea4c.js";

import {
    C as h
} from "./patients-6f7adc6a.js";

import {
    _ as g
} from "./_plugin-vue_export-helper-1b428a4d.js";

let i, w = Promise.all([ (() => {
    try {
        return m;
    } catch {}
})() ]).then(async () => {
    i = g({
        emits: [ "choosePatient" ],
        data: () => ({
            patientsList: []
        }),
        mounted() {
            this.patientsList = [ ...h.patientsList ];
        },
        methods: {
            rowClick(a) {
                this.$emit("choosePatient", a);
            },
            addItem(a) {
                this.patientsList = [ ...this.patientsList, {
                    ...a
                } ];
            }
        }
    }, [ [ "render", function(a, b, u, _, l, n) {
        const e = d, r = p;
        return s(), o("div", null, [ t(r, {
            ref: "selecteManageTable",
            data: l.patientsList,
            "highlight-current-row": "",
            "header-cell-style": {
                background: "#1a1a1a",
                "border-color": "#1a1a1a"
            },
            "row-class-name": "dark-row",
            "cell-class-name": "dark-cell",
            onRowClick: n.rowClick,
            class: "is-selected"
        }, {
            default: c(() => [ t(e, {
                type: "index",
                label: "序号",
                width: "60",
                align: "center"
            }), t(e, {
                prop: "ID",
                label: "患者编号",
                "min-width": "110",
                align: "center"
            }), t(e, {
                prop: "Name",
                label: "姓名",
                "min-width": "80",
                align: "center"
            }), t(e, {
                prop: "Sex",
                label: "性别",
                "min-width": "60",
                align: "center"
            }), t(e, {
                prop: "Age",
                label: "年龄",
                "min-width": "60",
                align: "center"
            }), t(e, {
                prop: "AgeGroup",
                label: "年龄组",
                "min-width": "80",
                align: "center"
            }), t(e, {
                prop: "OutpatientDoctor",
                label: "主治医师",
                "min-width": "80",
                align: "center"
            }), t(e, {
                prop: "Radiologists",
                label: "技师",
                "min-width": "80",
                align: "center"
            }), t(e, {
                prop: "Info",
                label: "医嘱",
                "min-width": "140",
                align: "left"
            }) ]),
            _: 1
        }, 8, [ "data", "onRowClick" ]) ]);
    } ], [ "__scopeId", "data-v-c4baf464" ] ]);
});

export {
    w as __tla,
    i as default
};