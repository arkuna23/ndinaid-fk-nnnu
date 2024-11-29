import {
    bo as v,
    o as g,
    C as p,
    l as n,
    t as c,
    B as f,
    k as l,
    v as m,
    A as D,
    ad as N,
    ae as x,
    J as R,
    aU as $,
    a9 as z,
    R as T,
    S as P,
    __tla as A
} from "./index-6c08ea4c.js";

import {
    _ as q,
    __tla as F
} from "./index-c4ca0ced.js";

import {
    _ as O,
    __tla as U
} from "./index-1024512a.js";

import {
    a as B,
    __tla as E
} from "./dataset-a3994d32.js";

import {
    _ as H
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as j
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as J
} from "./DeptTag-1be092ce.js";

import {
    __tla as M
} from "./index-ef4d146e.js";

let u, Q = Promise.all([ (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})() ]).then(async () => {
    const _ = {
        name: "MountEnvs",
        props: {
            showDialog: {
                type: Boolean,
                default: !1
            },
            defaultVal: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "closeDialog", "changeVal" ],
        data: () => ({
            queryParams: {
                name: ""
            },
            pageInfo: {
                pageNum: 1,
                pageSize: 10,
                total: 0
            },
            dataList: [],
            listVal: [],
            loading: !1,
            selectList: [],
            selectListSave: []
        }),
        computed: {
            selectDefaultIds() {
                return this.listVal.map(t => t.datasetId);
            },
            selectAllIds() {
                return (this.selectList || []).map(t => t.datasetId);
            },
            defaultList() {
                return [ ...this.defaultVal ];
            },
            defaultValNum() {
                return this.selectList.length || 0;
            }
        },
        watch: {
            showDialog: {
                handler(t) {
                    t && (this.queryParams.name = "", this.selectListSave = [], 
                    this.selectList = this.defaultVal || [], this.dataList = [], 
                    this.getList(1));
                },
                immediate: !0
            },
            listVal(t) {
                this.$emit("changeVal", t);
            },
            defaultVal: {
                handler(t) {
                    this.listVal = t;
                },
                immediate: !0
            },
            dataList: {
                handler(t) {
                    let e = t || [], s = [ ...this.selectAllIds ];
                    this.$refs.selectTable && this.$refs.selectTable.clearSelection(), 
                    e.forEach(i => {
                        s.indexOf(i.datasetId) >= 0 && this.$refs.selectTable && this.$refs.selectTable.toggleRowSelection(i, !0);
                    });
                },
                deep: !0
            }
        },
        methods: {
            handleSearch(t) {
                this.queryParams.name = t.keywords, this.getList(1);
            },
            getList(t) {
                this.loading = !0, t && (this.pageInfo = {
                    pageNum: 1,
                    pageSize: 10,
                    total: 0
                }), B({
                    pageNo: this.pageInfo.pageNum,
                    pageSize: this.pageInfo.pageSize,
                    name: this.queryParams.name
                }).then(e => {
                    this.dataList = e.list.map(s => ({
                        ...s,
                        datasetId: s.id
                    })), this.pageInfo.total = e.total || 0, this.loading = !1;
                });
            },
            handleCurrentChange(t, e) {
                this.pageInfo.pageNum = t, this.pageInfo.pageSize = e, this.getList();
            },
            resetQuery(t) {
                this.$refs[t].resetFields(), this.getList();
            },
            handleSelectionChange(t) {
                let e = this.dataList.map(i => i.datasetId), s = this.selectList.filter(i => e.indexOf(i.datasetId) < 0);
                this.selectList = s.concat([ ...t ]);
            },
            rowSelect: (t, e) => !0,
            chooseRow(t) {
                this.selectAllIds.indexOf(t.datasetId) >= 0 ? (this.selectList = this.selectList.filter(e => e.datasetId !== t.datasetId), 
                this.$refs.selectTable.toggleRowSelection(t, !1)) : (this.selectList.push(t), 
                this.$refs.selectTable.toggleRowSelection(t, !0));
            },
            closeDialog() {
                this.$emit("closeDialog");
            },
            submitForm() {
                this.selectList.length > 10 ? v({
                    message: "每个实验环境最多关联10个数据集！",
                    type: "warning"
                }) : (this.listVal = this.selectList, this.closeDialog());
            }
        }
    }, I = {
        class: "el-dialog__title"
    }, w = (t => (T("data-v-f2b70d3b"), t = t(), P(), t))(() => c("span", {
        class: "name-box"
    }, f("挂载数据集"), -1)), y = {
        class: "num-box"
    }, S = {
        class: "dialog-footer align-center"
    };
    u = H(_, [ [ "render", function(t, e, s, i, o, a) {
        const b = O, r = N, L = x, C = q, h = R, V = $, k = z;
        return g(), p(V, {
            "model-value": s.showDialog,
            title: "挂载数据集",
            scroll: "",
            width: "800px",
            onClose: a.closeDialog
        }, {
            title: n(() => [ c("span", I, [ w, c("span", y, f(a.defaultValNum), 1) ]) ]),
            footer: n(() => [ c("div", S, [ l(h, {
                type: "primary",
                onClick: a.submitForm
            }, {
                default: n(() => [ m("确 定") ]),
                _: 1
            }, 8, [ "onClick" ]), l(h, {
                onClick: a.closeDialog
            }, {
                default: n(() => [ m("取 消") ]),
                _: 1
            }, 8, [ "onClick" ]) ]) ]),
            default: n(() => [ l(b, {
                ref: "ComSearchRef",
                "in-dialog": !0,
                keywordsInfo: {
                    label: "数据集名称",
                    key: "keywords"
                },
                onHandleSearch: a.handleSearch,
                class: "left"
            }, null, 8, [ "onHandleSearch" ]), D((g(), p(L, {
                ref: "selectTable",
                data: o.dataList,
                "row-key": "datasetId",
                onSelectionChange: a.handleSelectionChange,
                onRowClick: a.chooseRow
            }, {
                default: n(() => [ l(r, {
                    type: "selection",
                    width: "55",
                    selectable: a.rowSelect,
                    "reserve-selection": !0
                }, null, 8, [ "selectable" ]), l(r, {
                    prop: "name",
                    label: "名称",
                    width: "150"
                }), l(r, {
                    prop: "introduction",
                    label: "简介",
                    "show-overflow-tooltip": ""
                }), l(r, {
                    prop: "description",
                    label: "描述",
                    "show-overflow-tooltip": ""
                }) ]),
                _: 1
            }, 8, [ "data", "onSelectionChange", "onRowClick" ])), [ [ k, o.loading ] ]), l(C, {
                total: o.pageInfo.total,
                page: o.pageInfo.pageNum,
                "onUpdate:page": e[0] || (e[0] = d => o.pageInfo.pageNum = d),
                limit: o.pageInfo.pageSize,
                "onUpdate:limit": e[1] || (e[1] = d => o.pageInfo.pageSize = d),
                onPagination: e[2] || (e[2] = d => a.getList())
            }, null, 8, [ "total", "page", "limit" ]) ]),
            _: 1
        }, 8, [ "model-value", "onClose" ]);
    } ], [ "__scopeId", "data-v-f2b70d3b" ] ]);
});

export {
    Q as __tla,
    u as default
};