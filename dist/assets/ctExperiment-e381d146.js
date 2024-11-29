import {
    a5 as le,
    b as se,
    p as re,
    A as k,
    o as m,
    c as g,
    t as p,
    k as s,
    l as r,
    B as I,
    C as c,
    D as f,
    v as u,
    F as S,
    y as V,
    x as T,
    z as w,
    G as x,
    ak as oe,
    O as me,
    P as ne,
    ab as de,
    ac as ge,
    J as he,
    Q as ue,
    Y as pe,
    a9 as ce,
    __tla as fe
} from "./index-6c08ea4c.js";

import {
    E as be,
    __tla as Se
} from "./el-image-0d184777.js";

import {
    __tla as ye
} from "./el-image-viewer-2c0d56e4.js";

import {
    E as Ie,
    a as ve,
    __tla as _e
} from "./el-collapse-item-c8b76a0a.js";

import {
    _ as Le
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ke
} from "./throttle-1adeb119.js";

let E, Fe = Promise.all([ (() => {
    try {
        return fe;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})() ]).then(async () => {
    const y = le.create({
        baseURL: "https://neustudy.neumooc.com",
        timeout: 3e5
    });
    y.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8", 
    y.defaults.headers.common["Cache-Control"] = "no-cache", y.defaults.headers.common.Accept = "*/*";
    const P = async i => await y.post("/ct-py/CT/getCtImage", i), Z = async i => await y.post("/ct-py/CT/getCtImageRaw", i), N = se(), F = re(), D = {
        class: "ct-exp",
        "element-loading-svg-view-box": "-10, -10, 50, 50",
        "element-loading-background": "rgba(255, 255, 255, 0.4)"
    }, C = {
        class: "left-info"
    }, U = {
        class: "info-item pl-4"
    }, q = {
        class: "info-item pl-4"
    }, B = {
        class: "info-item pl-4"
    }, Y = {
        class: "info-item pl-4"
    }, $ = {
        class: "formbody"
    }, W = {
        style: {
            "text-align": "center",
            "margin-top": "20px"
        }
    }, A = {
        class: "right-info"
    }, j = {
        key: 0,
        class: "right-all"
    }, O = {
        class: "right-l"
    }, X = {
        class: "cont-box-r-l"
    }, G = [ "width", "height" ], J = {
        key: 0,
        class: "img-bot-top"
    }, K = {
        key: 1,
        class: "img-box"
    }, Q = {
        key: 2,
        class: "right-all"
    }, z = {
        class: "progress-box"
    };
    E = Le({
        props: {
            patientParams: {
                type: Object,
                default: () => ({})
            },
            patientInfo: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "nextStep" ],
        data() {
            return {
                activeName: [ "1", "2" ],
                form: {
                    FlagRawData: !1,
                    TubeVol: "100",
                    TubeCur: "200",
                    LayerThick: "10",
                    LayerSpace: "10",
                    RotSpeed: "0.5",
                    StartZ: "10",
                    EndZ: "40",
                    FilterMode: "SL",
                    ScanMode: "Parallel",
                    numSlice: "",
                    ImgNum: 3
                },
                rules: {
                    FlagRawData: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    } ],
                    TubeVol: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    }, {
                        validator: (i, e, a) => {
                            if (!e) return a(new Error("此项必填"));
                            parseFloat(e) >= 0 && parseFloat(e) >= 80 && parseFloat(e) <= 120 ? a() : a(new Error("请输入80-120之间的数字"));
                        },
                        trigger: "change"
                    } ],
                    TubeCur: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    }, {
                        validator: (i, e, a) => {
                            if (!e) return a(new Error("此项必填"));
                            parseFloat(e) >= 0 && parseFloat(e) >= 10 && parseFloat(e) <= 500 ? a() : a(new Error("请输入10-500之间的数字"));
                        },
                        trigger: "change"
                    } ],
                    LayerThick: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    }, {
                        validator: (i, e, a) => {
                            if (!e) return a(new Error("此项必填"));
                            parseFloat(e) >= 0 && parseFloat(e) >= 8 && parseFloat(e) <= 20 ? a() : a(new Error("请输入8-20之间的数字"));
                        },
                        trigger: "change"
                    } ],
                    LayerSpace: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    }, {
                        validator: (i, e, a) => {
                            if (!e) return a(new Error("此项必填"));
                            parseFloat(e) >= 0 && parseFloat(e) >= 1 && parseFloat(e) <= 20 ? a() : a(new Error("请输入1-20之间的数字"));
                        },
                        trigger: "change"
                    } ],
                    RotSpeed: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    }, {
                        validator: (i, e, a) => {
                            if (!e) return a(new Error("此项必填"));
                            parseFloat(e) >= 0 && parseFloat(e) >= .2 && parseFloat(e) <= 1 ? a() : a(new Error("请输入0.2-1之间的数字"));
                        },
                        trigger: "change"
                    } ],
                    StartZ: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    }, {
                        validator: this.validatorFnc,
                        trigger: "blur"
                    } ],
                    ImgNum: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    }, {
                        validator: (i, e, a) => {
                            if (!e) return a(new Error("此项必填"));
                            this.form.FlagRawData || parseFloat(e) >= 0 && parseFloat(e) > 1 && parseFloat(e) <= 50 ? a() : a(new Error("图片数量应在2-50之间"));
                        },
                        trigger: "blur"
                    } ],
                    EndZ: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    }, {
                        validator: this.validatorFnc,
                        trigger: "blur"
                    } ],
                    FilterMode: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    } ],
                    ScanMode: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    } ],
                    numSlice: [ {
                        required: !0,
                        message: "此项必填",
                        trigger: "blur"
                    } ]
                },
                sacnningStep: "1",
                urlSrc: "",
                loadingBody: !1,
                loadingStep: !1,
                flag: !1,
                x: 0,
                y: 0,
                canWidth: 0,
                canHeight: 0,
                searchForm: {
                    FlagRawData: !1
                },
                progessNum: 9,
                timer: null,
                imgList: [],
                simImgList: [],
                imgIndex: 0,
                playing: !1,
                imgSize: 720,
                imgSizeList: [],
                sliceList: []
            };
        },
        computed: {
            params() {
                let i = {};
                return i = this.isLumbar ? {
                    organModeId: this.patientParams.bodyType.value,
                    positionModeId: this.patientParams.shape.value,
                    tubeVol: this.form.TubeVol,
                    tubeCur: this.form.TubeCur,
                    layerThick: "1",
                    layerSpace: "1",
                    rotSpeed: this.form.RotSpeed,
                    startZ: "0",
                    endZ: "10",
                    filterMode: this.form.FilterMode,
                    scanMode: this.form.ScanMode,
                    numSlice: this.form.numSlice || "1"
                } : {
                    organModeId: this.patientParams.bodyType.value,
                    positionModeId: this.patientParams.shape.value,
                    tubeVol: this.form.TubeVol,
                    tubeCur: this.form.TubeCur,
                    layerThick: this.form.LayerThick,
                    layerSpace: this.form.LayerSpace,
                    rotSpeed: this.form.RotSpeed,
                    startZ: this.form.StartZ,
                    endZ: this.form.EndZ,
                    filterMode: this.form.FilterMode,
                    scanMode: this.form.ScanMode,
                    numSlice: this.form.numSlice || "0"
                }, i;
            },
            leftImgHeight: () => N.getBodyHeight - 160,
            imgListSrc() {
                return this.imgList.length > this.imgIndex ? this.imgList[this.imgIndex] : "";
            },
            simImgListSrc() {
                return this.simImgList.length > this.imgIndex ? this.simImgList[this.imgIndex] : "";
            },
            isLumbar() {
                return this.patientParams.body.value === "5";
            },
            numberSliceInfo() {
                return this.sliceList.find(i => i.key === this.form.numSlice) || null;
            }
        },
        watch: {
            flag(i) {
                if (!i && this.canWidth && this.canHeight) {
                    let e = parseInt(this.imgSizeList[0]), a = parseInt(this.imgSizeList[1]), o = Math.floor((a - e) / 2 * this.leftImgHeight / a), t = this.y - o;
                    this.form.StartZ = Math.floor(t * this.imgSize / (this.leftImgHeight - 2 * o)) + "", 
                    this.form.EndZ = Math.floor((t + this.canHeight) * this.imgSize / (this.leftImgHeight - 2 * o)) + "";
                }
            },
            form: {
                handler(i) {
                    i.FlagRawData ? this.form.ImgNum = 180 : this.form.ImgNum = Math.floor(((i.EndZ || 0) - (i.StartZ || 0) - 1) / (i.LayerSpace || 1));
                },
                deep: !0
            },
            "form.numSlice": {
                handler(i) {
                    let e = this.numberSliceInfo;
                    e && (this.form.StartZ = e.start[1] + "", this.form.EndZ = e.end[1] + 10 + "", 
                    this.drawLine());
                }
            }
        },
        mounted() {},
        methods: {
            validatorFnc(i, e, a) {
                if (!e) return a(new Error("此项必填"));
                parseFloat(e) >= 0 && parseFloat(e) >= 0 && parseFloat(e) <= this.imgSize ? a() : a(new Error("请输入0-" + this.imgSize + "之间的数字"));
            },
            submitForm(i) {
                this.timer && clearInterval(this.timer), this.playing && this.stopPlayProcess(), 
                this.$refs.formRef.validate(e => {
                    if (e) if (i === "3") {
                        let a;
                        this.sacnningStep = "3", this.progessNum = 9, this.searchForm = {
                            ...this.form
                        }, a = this.searchForm.FlagRawData ? Z : P, this.timer = setInterval(() => {
                            this.progessNum < 96 ? this.progessNum += 9 : clearInterval(this.timer);
                        }, 3e3), this.imgList = [], this.simImgList = [], this.imgIndex = 0, 
                        this.loadingStep = !0, a(this.params).then(o => {
                            this.loadingStep = !1, o.data.code === 0 ? (this.progessNum = 100, 
                            this.imgList = (o.data.image || []).map(t => "data:image/png;base64," + t), 
                            this.simImgList = (o.data.simImage || []).map(t => "data:image/png;base64," + t)) : F.error("扫描失败！");
                        }).catch(() => {
                            F.error("扫描失败！");
                        });
                    } else i === "2" && (this.loadingBody = !0, this.searchForm = {
                        ...this.form
                    }, (async a => await y.post("/ct-py/CT/getDrImage", a))({
                        organModeId: this.patientParams.bodyType.value,
                        tubeVol: this.form.TubeVol,
                        tubeCur: this.form.TubeCur
                    }).then(a => {
                        this.loadingBody = !1, a.data.code === 0 ? (this.sacnningStep = i, 
                        this.imgSize = parseInt(a.data.Z || "720"), this.urlSrc = "data:image/png;base64," + (a.data.image || ""), 
                        this.imgSizeList = a.data.image_shape || [], this.sliceList = this.isLumbar && a.data.line_list || []) : F.error("扫描失败！");
                    }).catch(() => {
                        F.error("扫描失败！");
                    }));
                });
            },
            nextStepHere() {
                this.sacnningStep === "2" ? this.submitForm("3") : this.$emit("nextStep", {
                    imgList: this.imgList,
                    patientParams: this.patientParams,
                    firstImg: this.urlSrc
                });
            },
            mousedown(i) {
                if (this.isLumbar) return;
                let e = parseInt(this.imgSizeList[0]), a = parseInt(this.imgSizeList[1]), o = Math.floor((a - e) / 2 * this.leftImgHeight / a);
                i.offsetY < o || i.offsetY > o + e * this.leftImgHeight / a || (this.flag = !0, 
                this.x = i.offsetX, this.y = i.offsetY);
            },
            mouseup(i) {
                this.isLumbar || (this.flag = !1);
            },
            mousemove(i) {
                if (this.isLumbar) return;
                let e = parseInt(this.imgSizeList[0]), a = parseInt(this.imgSizeList[1]), o = Math.floor((a - e) / 2 * this.leftImgHeight / a);
                i.offsetY < o || i.offsetY > o + e * this.leftImgHeight / a || this.drawRect(i);
            },
            drawRect(i) {
                if (this.flag) {
                    const a = this.$refs.myCanvas;
                    var e = a.getContext("2d");
                    let o = this.x, t = this.y;
                    e.clearRect(0, 0, a.width, a.height), e.beginPath(), e.strokeStyle = "#ff0", 
                    e.lineWidth = 1, e.strokeRect(o, t, i.offsetX - o, i.offsetY - t), 
                    this.canWidth = i.offsetX - o, this.canHeight = i.offsetY - t;
                }
            },
            drawLine() {
                const i = this.$refs.myCanvas;
                var e = i.getContext("2d");
                this.x, this.y, e.clearRect(0, 0, i.width, i.height), e.beginPath(), 
                e.strokeStyle = "#ff0", e.lineWidth = 3;
                let a = parseInt(this.imgSizeList[0]), o = parseInt(this.imgSizeList[1]), t = (o - a) / 2;
                e.moveTo(Math.floor(this.numberSliceInfo.start[0] * this.leftImgHeight / o), Math.floor((t + this.numberSliceInfo.start[1]) * this.leftImgHeight / o)), 
                e.lineTo(Math.floor(this.numberSliceInfo.end[0] * this.leftImgHeight / o), Math.floor((t + this.numberSliceInfo.end[1]) * this.leftImgHeight / o)), 
                e.stroke();
            },
            changeImgIndex(i) {
                (this.playing && i.wheelDelta === -1 || !this.playing) && (i.wheelDelta && i.wheelDelta < 0 ? this.imgList.length > this.imgIndex + 1 ? this.imgIndex += 1 : this.imgIndex = 0 : this.imgIndex === 0 ? this.imgIndex = this.imgList.length - 1 : this.imgIndex -= 1);
            },
            playProcess() {
                this.imgIndex = 0, this.playing = !0;
                let i = this;
                this.timer = setInterval(() => {
                    i.imgList.length === i.imgIndex + 1 || i.imgIndex === -1 ? (clearInterval(i.timer), 
                    this.playing = !1, i.imgIndex = 0) : i.changeImgIndex({
                        wheelDelta: -1
                    });
                }, 100);
            },
            stopPlayProcess() {
                this.playing = !1, this.imgIndex = -1;
            }
        }
    }, [ [ "render", function(i, e, a, o, t, n) {
        const M = Ie, ee = oe, d = me, b = ne, h = de, v = ge, _ = he, te = ue, ae = ve, R = be, ie = pe, H = ce;
        return k((m(), g("div", D, [ p("div", C, [ s(ae, {
            modelValue: t.activeName,
            "onUpdate:modelValue": e[16] || (e[16] = l => t.activeName = l),
            accordion: !1,
            class: "md-collapse"
        }, {
            default: r(() => [ s(M, {
                name: "1",
                title: "患者信息"
            }, {
                default: r(() => [ p("div", U, "姓名：" + I(a.patientInfo.Name), 1), p("div", q, "性别：" + I(a.patientInfo.Sex), 1), p("div", B, "年龄：" + I(a.patientInfo.Age), 1), p("div", Y, "操作：" + I(a.patientParams.bodyType.name) + "，" + I(a.patientParams.shape.name), 1) ]),
                _: 1
            }), s(M, {
                name: "2",
                title: "参数配置"
            }, {
                default: r(() => [ k((m(), g("div", $, [ s(te, {
                    ref: "formRef",
                    model: t.form,
                    "label-width": "100px",
                    rules: t.rules,
                    class: "default-style py-3 pr-4"
                }, {
                    default: r(() => [ t.sacnningStep !== "1" ? (m(), c(d, {
                        key: 0,
                        label: "Raw Data模式",
                        prop: "FlagRawData",
                        "label-width": "150px"
                    }, {
                        default: r(() => [ s(ee, {
                            class: "ml-4",
                            size: "small",
                            modelValue: t.form.FlagRawData,
                            "onUpdate:modelValue": e[0] || (e[0] = l => t.form.FlagRawData = l),
                            "active-color": "#ffffff77",
                            "inactive-color": "#ffffff22",
                            "active-icon": "Check",
                            "inline-prompt": "",
                            "inactive-icon": "Close"
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    })) : f("", !0), s(d, {
                        label: "管电压",
                        prop: "TubeVol"
                    }, {
                        default: r(() => [ s(b, {
                            modelValue: t.form.TubeVol,
                            "onUpdate:modelValue": e[1] || (e[1] = l => t.form.TubeVol = l),
                            size: "small"
                        }, {
                            append: r(() => [ u("kV") ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(d, {
                        label: "管电流",
                        prop: "TubeCur"
                    }, {
                        default: r(() => [ s(b, {
                            modelValue: t.form.TubeCur,
                            "onUpdate:modelValue": e[2] || (e[2] = l => t.form.TubeCur = l),
                            size: "small"
                        }, {
                            append: r(() => [ u("mA") ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), t.sacnningStep !== "1" ? (m(), g(S, {
                        key: 1
                    }, [ n.isLumbar ? (m(), g(S, {
                        key: 1
                    }, [ s(d, {
                        label: "关节位置",
                        prop: "numSlice"
                    }, {
                        default: r(() => [ s(v, {
                            modelValue: t.form.numSlice,
                            "onUpdate:modelValue": e[10] || (e[10] = l => t.form.numSlice = l),
                            effect: "dark",
                            "popper-class": "is-dark icho-dark",
                            size: "small"
                        }, {
                            default: r(() => [ (m(!0), g(S, null, V(t.sliceList, l => (m(), 
                            c(h, {
                                key: l.key,
                                label: "关节" + l.key,
                                value: l.key
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(d, {
                        label: "旋转速度",
                        prop: "RotSpeed"
                    }, {
                        default: r(() => [ s(b, {
                            modelValue: t.form.RotSpeed,
                            "onUpdate:modelValue": e[11] || (e[11] = l => t.form.RotSpeed = l),
                            size: "small"
                        }, {
                            append: r(() => [ u("s") ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(d, {
                        label: "滤波器",
                        prop: "FilterMode"
                    }, {
                        default: r(() => [ s(v, {
                            modelValue: t.form.FilterMode,
                            "onUpdate:modelValue": e[12] || (e[12] = l => t.form.FilterMode = l),
                            effect: "dark",
                            "popper-class": "is-dark icho-dark",
                            size: "small"
                        }, {
                            default: r(() => [ s(h, {
                                value: "None",
                                lable: "None"
                            }), s(h, {
                                value: "SL",
                                lable: "SL"
                            }), s(h, {
                                value: "RL",
                                lable: "RL"
                            }), s(h, {
                                value: "Hamming",
                                lable: "Hamming"
                            }), s(h, {
                                value: "Hann",
                                lable: "Hann"
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(d, {
                        label: "扫描模式",
                        prop: "ScanMode"
                    }, {
                        default: r(() => [ s(v, {
                            modelValue: t.form.ScanMode,
                            "onUpdate:modelValue": e[13] || (e[13] = l => t.form.ScanMode = l),
                            effect: "dark",
                            "popper-class": "is-dark icho-dark",
                            size: "small"
                        }, {
                            default: r(() => [ s(h, {
                                label: "平行束",
                                value: "Parallel"
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ], 64)) : (m(), g(S, {
                        key: 0
                    }, [ s(d, {
                        label: "层距",
                        prop: "LayerSpace"
                    }, {
                        default: r(() => [ s(b, {
                            modelValue: t.form.LayerSpace,
                            "onUpdate:modelValue": e[3] || (e[3] = l => t.form.LayerSpace = l),
                            size: "small"
                        }, {
                            append: r(() => [ u("mm") ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(d, {
                        label: "起始深度",
                        prop: "StartZ"
                    }, {
                        default: r(() => [ s(b, {
                            modelValue: t.form.StartZ,
                            "onUpdate:modelValue": e[4] || (e[4] = l => t.form.StartZ = l),
                            size: "small"
                        }, {
                            append: r(() => [ u("mm") ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), t.form.FlagRawData ? f("", !0) : (m(), c(d, {
                        key: 0,
                        label: "终止深度",
                        prop: "EndZ"
                    }, {
                        default: r(() => [ s(b, {
                            modelValue: t.form.EndZ,
                            "onUpdate:modelValue": e[5] || (e[5] = l => t.form.EndZ = l),
                            size: "small"
                        }, {
                            append: r(() => [ u("mm") ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    })), s(d, {
                        label: "图片数量",
                        prop: "ImgNum"
                    }, {
                        default: r(() => [ s(b, {
                            modelValue: t.form.ImgNum,
                            "onUpdate:modelValue": e[6] || (e[6] = l => t.form.ImgNum = l),
                            size: "small",
                            readonly: ""
                        }, {
                            append: r(() => [ u("张") ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(d, {
                        label: "旋转速度",
                        prop: "RotSpeed"
                    }, {
                        default: r(() => [ s(b, {
                            modelValue: t.form.RotSpeed,
                            "onUpdate:modelValue": e[7] || (e[7] = l => t.form.RotSpeed = l),
                            size: "small"
                        }, {
                            append: r(() => [ u("s") ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(d, {
                        label: "滤波器",
                        prop: "FilterMode"
                    }, {
                        default: r(() => [ s(v, {
                            modelValue: t.form.FilterMode,
                            "onUpdate:modelValue": e[8] || (e[8] = l => t.form.FilterMode = l),
                            effect: "dark",
                            "popper-class": "is-dark icho-dark",
                            size: "small"
                        }, {
                            default: r(() => [ s(h, {
                                value: "None",
                                lable: "None"
                            }), s(h, {
                                value: "SL",
                                lable: "SL"
                            }), s(h, {
                                value: "RL",
                                lable: "RL"
                            }), s(h, {
                                value: "Hamming",
                                lable: "Hamming"
                            }), s(h, {
                                value: "Hann",
                                lable: "Hann"
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(d, {
                        label: "扫描模式",
                        prop: "ScanMode"
                    }, {
                        default: r(() => [ s(v, {
                            modelValue: t.form.ScanMode,
                            "onUpdate:modelValue": e[9] || (e[9] = l => t.form.ScanMode = l),
                            effect: "dark",
                            "popper-class": "is-dark icho-dark",
                            size: "small"
                        }, {
                            default: r(() => [ s(h, {
                                label: "平行束",
                                value: "Parallel"
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ], 64)) ], 64)) : f("", !0), p("div", W, [ t.sacnningStep === "3" ? (m(), 
                    c(_, {
                        key: 0,
                        class: "dark-btn mr-4",
                        size: "default",
                        onClick: e[14] || (e[14] = l => n.submitForm("3")),
                        disabled: t.loadingStep
                    }, {
                        default: r(() => [ u("重新扫描") ]),
                        _: 1
                    }, 8, [ "disabled" ])) : f("", !0), t.sacnningStep === "1" || t.searchForm.FlagRawData ? f("", !0) : (m(), 
                    c(_, {
                        key: 1,
                        type: "primary",
                        size: "default",
                        onClick: n.nextStepHere,
                        disabled: t.loadingStep
                    }, {
                        default: r(() => [ u("下一步") ]),
                        _: 1
                    }, 8, [ "onClick", "disabled" ])), t.sacnningStep !== "1" && t.searchForm.FlagRawData && !t.playing ? (m(), 
                    c(_, {
                        key: 2,
                        type: "primary",
                        size: "default",
                        onClick: n.playProcess,
                        disabled: t.loadingStep
                    }, {
                        default: r(() => [ u("播放过程") ]),
                        _: 1
                    }, 8, [ "onClick", "disabled" ])) : f("", !0), t.sacnningStep !== "1" && t.searchForm.FlagRawData && t.playing ? (m(), 
                    c(_, {
                        key: 3,
                        type: "primary",
                        size: "default",
                        onClick: n.stopPlayProcess,
                        disabled: t.loadingStep
                    }, {
                        default: r(() => [ u("停止播放 ") ]),
                        _: 1
                    }, 8, [ "onClick", "disabled" ])) : f("", !0), t.sacnningStep === "1" ? (m(), 
                    c(_, {
                        key: 4,
                        type: "primary",
                        size: "default",
                        onClick: e[15] || (e[15] = l => n.submitForm("2")),
                        disabled: t.loadingBody
                    }, {
                        default: r(() => [ u("开始扫描") ]),
                        _: 1
                    }, 8, [ "disabled" ])) : f("", !0) ]) ]),
                    _: 1
                }, 8, [ "model", "rules" ]) ])), [ [ H, t.loadingBody || t.loadingStep ] ]) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "modelValue" ]) ]), p("div", A, [ t.sacnningStep === "1" ? (m(), 
        g("div", j, I(t.loadingBody ? "扫描中，请稍候..." : "扫描结果展示区"), 1)) : (m(), g(S, {
            key: 1
        }, [ p("div", O, [ p("div", X, [ p("div", {
            class: "img-box",
            style: T(`height: ${n.leftImgHeight}px;width: ${n.leftImgHeight}px;`)
        }, [ p("canvas", {
            ref: "myCanvas",
            width: n.leftImgHeight,
            height: n.leftImgHeight,
            style: T(`background:url(${t.urlSrc}) no-repeat center;background-size:100% ;`),
            onMousedown: e[17] || (e[17] = (...l) => n.mousedown && n.mousedown(...l)),
            onMouseup: e[18] || (e[18] = (...l) => n.mouseup && n.mouseup(...l)),
            onMousemove: e[19] || (e[19] = (...l) => n.mousemove && n.mousemove(...l))
        }, null, 44, G) ], 4) ]) ]), t.sacnningStep === "3" ? (m(), g("div", {
            key: 0,
            class: w([ "right-r", t.searchForm.FlagRawData ? "href-box" : "" ]),
            onMousewheel: e[20] || (e[20] = (...l) => n.changeImgIndex && n.changeImgIndex(...l))
        }, [ t.simImgList.length > 0 ? (m(), g("div", J, [ (m(!0), g(S, null, V(t.simImgList, (l, L) => k((m(), 
        c(R, {
            src: l,
            fit: "contain",
            class: w([ "center-img" ]),
            key: "simImgList" + L
        }, null, 8, [ "src" ])), [ [ x, t.imgIndex === L ] ])), 128)) ])) : f("", !0), t.imgList.length > 0 ? (m(), 
        g("div", K, [ (m(!0), g(S, null, V(t.imgList, (l, L) => k((m(), c(R, {
            src: l,
            fit: "contain",
            class: w([ "center-img" ]),
            key: "imgList" + L
        }, null, 8, [ "src" ])), [ [ x, t.imgIndex === L ] ])), 128)) ])) : (m(), 
        g("div", Q, "扫描中，请稍候...")), k(p("div", z, [ s(ie, {
            percentage: t.progessNum,
            "stroke-width": 10,
            indeterminate: !0,
            color: "#dd6a24",
            format: l => l + "%"
        }, null, 8, [ "percentage", "format" ]) ], 512), [ [ x, t.progessNum !== 100 ] ]) ], 34)) : f("", !0) ], 64)) ]) ])), [ [ H, t.loadingBody ] ]);
    } ], [ "__scopeId", "data-v-4d66667e" ] ]);
});

export {
    Fe as __tla,
    E as default
};