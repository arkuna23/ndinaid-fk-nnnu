import {
    aT as j,
    o as n,
    c as p,
    t as c,
    k as s,
    l as i,
    F as z,
    y as E,
    H as D,
    C as u,
    B as F,
    v as w,
    A as O,
    _ as H,
    K as J,
    ad as q,
    ae as A,
    J as B,
    aU as M,
    a9 as U,
    __tla as K
} from "./index-6c08ea4c.js";

import {
    _ as Q,
    __tla as G
} from "./index-1024512a.js";

import W, {
    __tla as X
} from "./MountDatasets-93ee84e0.js";

import {
    g as Y,
    __tla as Z
} from "./dataset-a3994d32.js";

import {
    _ as T
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as aa
} from "./DeptTag-1be092ce.js";

import {
    __tla as ea
} from "./index-ef4d146e.js";

import {
    __tla as ta
} from "./index-c4ca0ced.js";

import {
    __tla as sa
} from "./index-993301ca.js";

let v, la = Promise.all([ (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})() ]).then(async () => {
    const y = {
        name: "ChoosePod",
        components: {
            MountDatasets: W
        },
        props: {
            modelValue: {
                type: Array,
                default: () => []
            },
            disabled: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:modelValue" ],
        data: () => ({
            queryParams: {
                envName: ""
            },
            pageInfo: {
                pageNum: 1,
                pageSize: 10,
                total: 0
            },
            dataList: [],
            listVal: [],
            loading: !1,
            showDialog: !1,
            showDialogEnvs: !1,
            searchValue: "",
            selectList: [],
            selectListSave: [],
            dataSetIndex: -1,
            containerData: []
        }),
        computed: {
            selectDefaultIds() {
                return (this.listVal || []).map(a => a.envId);
            },
            showDataList() {
                return this.dataList.filter(a => !this.searchValue || a.envName.indexOf(this.searchValue) >= 0);
            }
        },
        watch: {
            listVal(a) {
                this.$emit("update:modelValue", a);
            },
            modelValue: {
                handler(a) {
                    this.listVal.map(e => e.envId).join(",") === a.map(e => e.envId).join(",") && this.listVal.map(e => (e.containerData || []).join(",")).join(",") === a.map(e => (e.containerData || []).join(",")).join(",") || (this.listVal = JSON.parse(JSON.stringify(a)));
                },
                immediate: !0
            }
        },
        methods: {
            getList(a) {
                this.loading = !0, a && (this.pageInfo = {
                    pageNum: 1,
                    pageSize: 10,
                    total: 0
                }), this.pageInfo, this.queryParams;
            },
            getData() {
                Y().then(a => {
                    this.dataList = a.Templates.map(e => {
                        var r, h, o;
                        return {
                            envId: (r = e.metadata) == null ? void 0 : r.name,
                            envName: (h = e.spec) == null ? void 0 : h.templateName,
                            describe: (o = e.spec) == null ? void 0 : o.describe,
                            containerData: []
                        };
                    }), this.loading = !1;
                });
            },
            handleSearch(a) {
                this.searchValue = a.keywords;
            },
            handleCurrentChange(a, e) {
                this.getList();
            },
            resetQuery(a) {
                this.$refs[a].resetFields(), this.getList();
            },
            handleSelectionChange(a) {
                this.selectList = [ ...a ];
            },
            rowSelect: (a, e) => !0,
            chooseRow(a) {
                this.selectList.indexOf(a) >= 0 ? (this.selectList = this.selectList.filter(e => e.envId !== a.envId), 
                this.$refs.selectTable.toggleRowSelection(a, !1)) : (this.selectList.push(a), 
                this.$refs.selectTable.toggleRowSelection(a, !0));
            },
            changeDataSets(a) {
                this.$nextTick(() => {
                    this.dataSetIndex >= 0 && (this.listVal[this.dataSetIndex].containerData = a.map(e => ({
                        datasetId: e.datasetId,
                        path: e.path
                    })), this.$emit("update:modelValue", this.listVal));
                });
            },
            closeDialog() {
                this.showDialog = !1, this.showDialogEnvs = !1;
            },
            submitForm() {
                this.listVal = this.listVal.concat(this.selectList), this.showDialog = !1;
            },
            changeDatasetsNow(a, e) {
                this.showDialogEnvs = !0, this.containerData = a.containerData, 
                this.dataSetIndex = e;
            },
            addPods() {
                this.showDialog = !0, this.getData(), this.$refs.selectTable && this.$refs.selectTable.clearSelection();
            },
            deletePods(a, e) {
                this.listVal.splice(e, 1);
            }
        }
    }, V = {
        class: "pods-choose"
    }, b = {
        class: "pods-cont"
    }, S = [ "onClick" ], k = [ "onClick" ], C = {
        class: "pods-name"
    }, I = {
        class: "dialog-footer align-center"
    };
    v = T(y, [ [ "render", function(a, e, r, h, o, t) {
        const d = H, g = J, x = Q, m = q, L = A, f = B, P = M, $ = j("MountDatasets"), N = U;
        return n(), p("div", V, [ c("div", b, [ c("div", {
            class: "add-box neu-color-blue mr-3 mt-1",
            onClick: e[0] || (e[0] = (...l) => t.addPods && t.addPods(...l))
        }, [ s(g, {
            class: "box-item",
            effect: "dark",
            content: "添加基础环境",
            placement: "top",
            "show-after": 200,
            "auto-close": 1500
        }, {
            default: i(() => [ s(d, {
                icon: "ep:plus",
                size: 14,
                class: "icon-box"
            }) ]),
            _: 1
        }) ]), (n(!0), p(z, null, E(o.listVal, (l, _) => (n(), p("div", {
            key: l.envId,
            class: "pods-box mb-2"
        }, [ c("div", {
            class: "pods-icon",
            onClick: D(R => t.changeDatasetsNow(l, _), [ "stop" ])
        }, [ s(g, {
            class: "box-item",
            effect: "dark",
            content: "挂载数据集",
            placement: "top",
            "show-after": 200,
            "auto-close": 1500
        }, {
            default: i(() => [ l.containerData && l.containerData.length > 0 ? (n(), 
            u(d, {
                key: 0,
                icon: "ep:folder-checked",
                size: 14,
                class: "icon-box"
            })) : (n(), u(d, {
                key: 1,
                icon: "ep:folder",
                size: 14,
                class: "icon-box"
            })) ]),
            _: 2
        }, 1024) ], 8, S), c("div", {
            class: "pods-icon-close",
            onClick: D(R => t.deletePods(l, _), [ "stop" ])
        }, [ s(d, {
            icon: "ep:delete",
            size: 14,
            class: "icon-box"
        }) ], 8, k), c("div", C, F(l.envName), 1) ]))), 128)) ]), s(P, {
            modelValue: o.showDialog,
            "onUpdate:modelValue": e[1] || (e[1] = l => o.showDialog = l),
            title: "添加基础环境",
            width: "800px"
        }, {
            footer: i(() => [ c("div", I, [ s(f, {
                onClick: t.closeDialog
            }, {
                default: i(() => [ w("取 消") ]),
                _: 1
            }, 8, [ "onClick" ]), s(f, {
                type: "primary",
                onClick: t.submitForm
            }, {
                default: i(() => [ w("确 定") ]),
                _: 1
            }, 8, [ "onClick" ]) ]) ]),
            default: i(() => [ s(x, {
                ref: "ComSearchRef",
                "in-dialog": !0,
                keywordsInfo: {
                    label: "基础环境名称",
                    key: "keywords"
                },
                onHandleSearch: t.handleSearch,
                class: "left"
            }, null, 8, [ "onHandleSearch" ]), O((n(), u(L, {
                ref: "selectTable",
                data: t.showDataList,
                "row-key": "envId",
                onSelectionChange: t.handleSelectionChange,
                onRowClick: t.chooseRow,
                height: "400px"
            }, {
                default: i(() => [ s(m, {
                    type: "selection",
                    width: "55",
                    selectable: t.rowSelect,
                    "reserve-selection": !0
                }, null, 8, [ "selectable" ]), s(m, {
                    prop: "envName",
                    label: "名称",
                    width: "150"
                }), s(m, {
                    prop: "describe",
                    label: "描述"
                }) ]),
                _: 1
            }, 8, [ "data", "onSelectionChange", "onRowClick" ])), [ [ N, o.loading ] ]) ]),
            _: 1
        }, 8, [ "modelValue" ]), s($, {
            "show-dialog": o.showDialogEnvs,
            "default-val": o.containerData,
            onCloseDialog: t.closeDialog,
            onChangeVal: t.changeDataSets
        }, null, 8, [ "show-dialog", "default-val", "onCloseDialog", "onChangeVal" ]) ]);
    } ], [ "__scopeId", "data-v-d96821a5" ] ]);
});

export {
    la as __tla,
    v as default
};