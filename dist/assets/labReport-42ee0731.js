import {
    b as M,
    o as h,
    c as f,
    t as c,
    k as l,
    l as s,
    v as N,
    x as d,
    F as $,
    y as U,
    z,
    cK as k,
    O as v,
    J as F,
    Q as Y,
    __tla as j
} from "./index-6c08ea4c.js";

import {
    E,
    __tla as I
} from "./el-image-0d184777.js";

import {
    __tla as T
} from "./el-image-viewer-2c0d56e4.js";

import {
    E as W,
    a as O,
    __tla as X
} from "./el-collapse-item-c8b76a0a.js";

import A from "./html2canvas.esm-ad032b91.js";

import {
    _ as P
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as D
} from "./throttle-1adeb119.js";

let w, J = Promise.all([ (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return T;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})() ]).then(async () => {
    const g = M(), _ = {
        props: {
            imgListCt: {
                type: Object,
                default: () => ({})
            },
            showLeft: {
                type: Boolean,
                default: !0
            }
        },
        data: () => ({
            form: {
                rowsNum: 1,
                colNum: 5,
                total: 1,
                imgScale: 1,
                left: 0,
                top: 0
            },
            flag: !1,
            positionX: 0,
            positionY: 0,
            rules: {},
            dataURL: "",
            activeName: "1"
        }),
        computed: {
            imgLeft() {
                let e = Number(this.imgBoxHeight) > 0 ? this.imgBoxHeight : 0;
                return this.form.left + e / 2;
            },
            imgTop() {
                let e = Number(this.imgBoxHeight) > 0 ? this.imgBoxHeight : 0;
                return this.form.top + e / 2;
            },
            imgMargin() {
                return "calc(-50% - " + (Number(this.imgBoxHeight) > 0 ? this.imgBoxHeight : 0) * (this.imgScale - 1) / 2 + "px)";
            },
            imgScale() {
                return this.form.imgScale || 1;
            },
            imgHeight: () => g.getBodyHeight - 160,
            imgWidth() {
                let e = Number(this.form.colNum || 1), t = Math.ceil(3 * (e - 1) / e);
                return "calc(" + (100 / e).toFixed(2) + "% - " + t + "px)";
            },
            imgBoxHeight() {
                let e = g.getBodyWidth;
                if (e) {
                    const t = e - (this.showLeft ? 692 : 334);
                    let i = Number(this.form.colNum || 1), n = Math.ceil(3 * (i - 1) / i), o = (100 / i).toFixed(2);
                    return parseInt(t) / 100 * Number(o) - n;
                }
                return "auto";
            }
        },
        watch: {
            imgListCt: {
                handler(e) {
                    this.form.total = e.imgList.length || 0, this.form.rowsNum = Math.ceil(this.form.total / this.form.colNum);
                },
                immediate: !0,
                deep: !0
            },
            "form.colNum": {
                handler() {
                    this.changeCol();
                }
            },
            "form.rowsNum": {
                handler() {
                    this.changeRow();
                }
            }
        },
        mounted() {
            this.form.total = this.imgListCt.imgList.length || 0, this.form.rowsNum = Math.ceil(this.form.total / this.form.colNum);
        },
        methods: {
            changeCol() {
                this.form.rowsNum = Math.ceil(this.form.total / this.form.colNum);
            },
            changeRow() {
                this.form.colNum = Math.ceil(this.form.total / this.form.rowsNum);
            },
            exportResult() {
                const e = document.createElement("canvas");
                let t = document.getElementById("imageList");
                const i = t.offsetWidth, n = t.offsetHeight;
                e.width = i, e.height = n, A(t, {
                    backgroundColor: "#000000",
                    canvas: e,
                    useCORS: !0
                }).then(o => {
                    this.dataURL = o.toDataURL("image/png"), this.$emit("saveImg", this.dataURL);
                });
            },
            mousewheelHandler(e) {
                e.stopPropagation(), e.deltaY > 0 ? this.form.imgScale = this.form.imgScale - .1 : e.deltaY < 0 && (this.form.imgScale = this.form.imgScale + .1);
            },
            mousedownHandler(e) {
                let t = e.target, i = e.clientX - t.offsetLeft, n = e.clientY - t.offsetTop;
                document.onmousemove = o => {
                    let a = o.clientX - i, r = o.clientY - n;
                    this.form.left = a, this.form.top = r;
                }, document.onmouseup = o => {
                    document.onmousemove = null, document.onmouseup = null;
                };
            },
            resetFormHandler() {
                this.form.colNum = 5, this.form.imgScale = 1, this.form.left = 0, 
                this.form.top = 0;
            },
            saveResultNow(e, t) {
                this.saveType === "1" ? this.mmsgBox({
                    title: "提示信息",
                    type: "warning",
                    text: "请确认是否提交当前任务结果，提交后将不能再次修改任务结果",
                    showClose: !1
                }).then(i => {
                    i ? this.saveResAjax(e, t) : this.saveBtnLoading = !1;
                }) : this.saveResAjax(e, t);
            }
        }
    }, y = {
        class: "exp-result"
    }, L = {
        class: "left-info"
    }, V = {
        class: "formbody"
    }, b = {
        class: "align-center mt-5 pl-5"
    }, H = {
        class: "right-info"
    };
    w = P(_, [ [ "render", function(e, t, i, n, o, a) {
        const r = k, u = v, p = F, S = Y, B = W, R = O, C = E;
        return h(), f("div", y, [ c("div", L, [ c("div", V, [ l(R, {
            modelValue: o.activeName,
            "onUpdate:modelValue": t[5] || (t[5] = m => o.activeName = m),
            accordion: !1,
            class: "md-collapse"
        }, {
            default: s(() => [ l(B, {
                name: "1",
                title: "工具"
            }, {
                default: s(() => [ l(S, {
                    ref: "formRef",
                    model: o.form,
                    "label-width": "100px",
                    rules: o.rules
                }, {
                    default: s(() => [ l(u, {
                        label: "总数",
                        prop: "total"
                    }, {
                        default: s(() => [ l(r, {
                            class: "icho-num-box",
                            modelValue: o.form.total,
                            size: "small",
                            readonly: "",
                            max: o.form.total,
                            min: o.form.total
                        }, null, 8, [ "modelValue", "max", "min" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "列数",
                        prop: "colNum"
                    }, {
                        default: s(() => [ l(r, {
                            class: "icho-num-box",
                            modelValue: o.form.colNum,
                            "onUpdate:modelValue": t[0] || (t[0] = m => o.form.colNum = m),
                            size: "small",
                            step: 1,
                            max: 10,
                            min: 1
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "行数",
                        prop: "rowsNum"
                    }, {
                        default: s(() => [ l(r, {
                            class: "icho-num-box",
                            modelValue: o.form.rowsNum,
                            "onUpdate:modelValue": t[1] || (t[1] = m => o.form.rowsNum = m),
                            size: "small",
                            step: 1,
                            max: 80,
                            min: 1
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "缩放",
                        prop: "imgScale"
                    }, {
                        default: s(() => [ l(r, {
                            class: "icho-num-box",
                            modelValue: o.form.imgScale,
                            "onUpdate:modelValue": t[2] || (t[2] = m => o.form.imgScale = m),
                            precision: 1,
                            size: "small",
                            step: .1,
                            max: 2,
                            min: .1
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "横向位移",
                        prop: "imgScale"
                    }, {
                        default: s(() => [ l(r, {
                            class: "icho-num-box",
                            modelValue: o.form.left,
                            "onUpdate:modelValue": t[3] || (t[3] = m => o.form.left = m),
                            size: "small",
                            step: 10
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "纵向位移",
                        prop: "imgScale"
                    }, {
                        default: s(() => [ l(r, {
                            class: "icho-num-box",
                            modelValue: o.form.top,
                            "onUpdate:modelValue": t[4] || (t[4] = m => o.form.top = m),
                            size: "small",
                            step: 10
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), c("div", b, [ l(p, {
                        size: "default",
                        class: "dark-btn",
                        onClick: a.resetFormHandler
                    }, {
                        default: s(() => [ N("重置") ]),
                        _: 1
                    }, 8, [ "onClick" ]), l(p, {
                        type: "primary",
                        size: "default",
                        onClick: a.exportResult
                    }, {
                        default: s(() => [ N("导出结果") ]),
                        _: 1
                    }, 8, [ "onClick" ]) ]) ]),
                    _: 1
                }, 8, [ "model", "rules" ]) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "modelValue" ]) ]) ]), c("div", H, [ c("div", {
            class: "right-info-l",
            id: "imageList",
            ref: "imageListRef",
            style: d(`min-height:${a.imgHeight}px;`)
        }, [ (h(!0), f($, null, U(i.imgListCt.imgList, (m, x) => (h(), f("div", {
            class: "img-box",
            key: "img" + x,
            style: d(`width:${a.imgWidth};margin-right:${(x + 1) % o.form.colNum == 0 ? 0 : 3}px;margin-bottom:3px; float:left;height:${a.imgBoxHeight}px;`)
        }, [ l(C, {
            style: d(`width:${100 * a.imgScale}%;height:${100 * a.imgScale}%;position:absolute;left:${a.imgLeft}px;top:${a.imgTop}px;margin-left:${a.imgMargin};margin-top:${a.imgMargin};`),
            src: m,
            ref_for: !0,
            ref: "img",
            class: z([ "center-img" ]),
            draggable: "false",
            onMousewheel: a.mousewheelHandler,
            onMousedown: a.mousedownHandler
        }, null, 8, [ "style", "src", "onMousewheel", "onMousedown" ]) ], 4))), 128)) ], 4) ]) ]);
    } ], [ "__scopeId", "data-v-41a28bed" ] ]);
});

export {
    J as __tla,
    w as default
};