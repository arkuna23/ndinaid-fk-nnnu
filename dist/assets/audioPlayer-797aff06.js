import {
    o as l,
    c as n,
    t as o,
    A as m,
    G as c,
    x as h,
    H as u,
    B as p,
    k as P,
    l as g,
    F as y,
    y as T,
    ai as v,
    D as f,
    __tla as U
} from "./index-6c08ea4c.js";

import {
    _ as j
} from "./_plugin-vue_export-helper-1b428a4d.js";

let w, G = Promise.all([ (() => {
    try {
        return U;
    } catch {}
})() ]).then(async () => {
    const _ = {
        name: "AudioPlayer",
        inheritAttrs: !1,
        props: {
            audioList: {
                default: null,
                type: Array
            },
            showPlayButton: {
                default: !0,
                type: Boolean
            },
            showPrevButton: {
                default: !0,
                type: Boolean
            },
            showNextButton: {
                default: !0,
                type: Boolean
            },
            showVolumeButton: {
                default: !0,
                type: Boolean
            },
            showProgressBar: {
                default: !0,
                type: Boolean
            },
            beforePlay: {
                default: null,
                type: Function
            },
            beforePrev: {
                default: null,
                type: Function
            },
            beforeNext: {
                default: null,
                type: Function
            },
            isLoop: {
                type: Boolean,
                default: !1
            },
            isAutoPlayNext: {
                type: Boolean,
                default: !1
            },
            progressInterval: {
                default: 1e3,
                type: Number
            },
            showPlaybackRate: {
                type: Boolean,
                default: !0
            },
            playbackRates: {
                type: Array,
                default: () => [ .5, 1, 1.5, 2 ]
            },
            themeColor: {
                type: String,
                default: "#3875FB"
            },
            historyTime: {
                type: Number,
                default: 0
            },
            disabledProgress: {
                type: Boolean,
                default: function() {
                    return !1;
                }
            }
        },
        data: () => ({
            isPlaying: !1,
            isDragging: !1,
            isDraggingVolume: !1,
            isShowNotice: !1,
            isLoading: !1,
            isShowVolume: !1,
            isShowRates: !1,
            timer: null,
            noticeMessage: "",
            duration: "",
            currentPlayIndex: 0,
            currentTime: "",
            currentVolume: 1,
            playbackRate: 1,
            isFirstPlay: !0,
            playTime: 0,
            playTimer: void 0,
            apiPlayTimer: void 0
        }),
        computed: {
            currentTimeFormatted() {
                return this.currentTime ? this.formatTime(this.currentTime) : "00:00";
            },
            durationFormatted() {
                return this.duration ? this.formatTime(this.duration) : "00:00";
            }
        },
        mounted() {
            this.$refs.canvas, this.$refs.audio.crossOrigin = "anonymous";
        },
        beforeUnmount() {
            this.pause();
        },
        methods: {
            rateFilter: t => t.toFixed(1) + "x",
            handleVolumeIconTouchstart() {
                this.isShowVolume = !this.isShowVolume;
            },
            handleVolumePanmove(t) {
                const e = this.$refs.playVolumeWrap.getBoundingClientRect(), a = t.x;
                let r;
                r = Math.round(a - e.left) / this.$refs.playVolumeWrap.offsetWidth, 
                r = Math.min(r, 1), r = Math.max(r, 0), this.$refs.audio.volume = r, 
                this.currentVolume = r;
            },
            handleVolumePanend() {
                this.isShowVolume = !1;
            },
            handleSetPlaybackRate(t) {
                this.playbackRate = +t, this.$refs.audio.playbackRate = +t, this.isShowRates = !1;
            },
            showNotice(t = {}) {
                this.noticeMessage = t.message, this.isShowNotice = !0, window.setTimeout(() => {
                    this.isShowNotice = !1;
                }, t.duration || 3e3);
            },
            onLoadedmetadata(t) {
                this.duration = this.$refs.audio.duration, this.$emit("loadedmetadata", t);
            },
            onTimeUpdate(t) {
                this.$emit("timeupdate", t);
            },
            formatTime(t) {
                let e;
                return e = Math.floor(t / 60), t = Math.ceil(t % 60), e += "", t += "", 
                e = e.length === 1 ? "0" + e : e, e + ":" + (t = t.length === 1 ? "0" + t : t);
            },
            onEnded(t) {
                window.setTimeout(() => {
                    this.pause(), this.$emit("ended", t), this.isLoop && (this.currentTime = 0, 
                    this.$refs.audio.currentTime = this.currentTime, this.play());
                }, 1e3);
            },
            handleProgressPanstart(t) {
                this.disabledProgress || (this.isDragging = !0);
            },
            handleProgressPanend(t) {
                this.disabledProgress || (this.$refs.audio.currentTime = this.currentTime, 
                this.play(), this.isDragging = !1);
            },
            handleProgressPanmove(t) {
                if (!this.disabledProgress) {
                    const e = t.x, a = t.target.getBoundingClientRect();
                    let r = parseInt(getComputedStyle(t.target).left) + (e - a.left);
                    r = Math.min(r, this.$refs.audioProgressWrap.offsetWidth), r = Math.max(r, 0), 
                    this.setPointPosition(r), this.$refs.audioProgress.style.width = r + "px", 
                    this.currentTime = r / this.$refs.audioProgressWrap.offsetWidth * this.duration;
                }
            },
            handleClickProgressWrap(t) {
                if (!this.disabledProgress) {
                    const e = t.target, a = t.offsetX;
                    if (e === this.$refs.audioProgressPoint) return;
                    this.currentTime = a / this.$refs.audioProgressWrap.offsetWidth * this.duration, 
                    this.$refs.audio.currentTime = this.currentTime, this.setPointPosition(a), 
                    this.$refs.audioProgress.style.width = a + "px", this.play();
                }
            },
            setPointPosition(t) {
                this.$refs.audioProgressPoint.style.left = t - this.$refs.audioProgressPoint.offsetWidth / 2 + "px";
            },
            playing() {
                if (this.isDragging) return;
                const t = this.$refs.audio.currentTime / this.$refs.audio.duration * this.$refs.audioProgressWrap.offsetWidth;
                this.currentTime = this.$refs.audio.currentTime, this.$refs.audioProgress.style.width = t + "px", 
                this.setPointPosition(t), this.$emit("playing", this.currentTime);
            },
            play() {
                this.isLoading = !0;
                const t = () => {
                    this.$refs.audio.play().then(e => {
                        if (this.isFirstPlay && this.historyTime > 0) {
                            this.$refs.audio.currentTime = this.historyTime, this.currentTime = this.$refs.audio.currentTime;
                            const a = this.historyTime / this.$refs.audio.duration * this.$refs.audioProgressWrap.offsetWidth;
                            this.$refs.audioProgress.style.width = a + "px", this.setPointPosition(a), 
                            this.isFirstPlay = !1;
                        }
                        this.$nextTick(() => {
                            this.clearTimer(), this.timer = window.setInterval(this.playing, this.progressInterval), 
                            this.clearPlayTimer(), this.clearApiPlayTimer(), this.playTimer = window.setInterval(this.playTimeChange, 250), 
                            this.apiPlayTimer = window.setInterval(this.apiPlayTimeChange, 5e3), 
                            this.isPlaying = !0, this.isLoading = !1;
                        });
                    }).catch(e => {
                        this.showNotice({
                            message: e.message
                        }), e.code === 9 && this.isAutoPlayNext && window.setTimeout(() => {
                            this.playNext();
                        }, 1e3), this.isLoading = !1;
                    }), this.$emit("play");
                };
                this.beforePlay ? this.beforePlay(e => {
                    e !== !1 && t();
                }) : t();
            },
            pause() {
                this.$refs.audio.pause(), this.$nextTick(() => {
                    this.clearTimer(), this.clearPlayTimer(), this.clearApiPlayTimer(), 
                    this.isPlaying = !1, this.$emit("pause");
                });
            },
            playPrev() {
                this.$refs.audio.currentTime -= 5;
                const t = this.$refs.audio.currentTime / this.$refs.audio.duration * this.$refs.audioProgressWrap.offsetWidth;
                this.currentTime = this.$refs.audio.currentTime, this.$refs.audioProgress.style.width = t + "px", 
                this.setPointPosition(t);
            },
            clearTimer() {
                window.clearInterval(this.timer), this.timer = null;
            },
            playNext() {
                this.$refs.audio.currentTime += 5;
                const t = this.$refs.audio.currentTime / this.$refs.audio.duration * this.$refs.audioProgressWrap.offsetWidth;
                this.currentTime = this.$refs.audio.currentTime, this.$refs.audioProgress.style.width = t + "px", 
                this.setPointPosition(t);
            },
            playTimeChange() {
                this.isLoading || (this.playTime += .25), this.$emit("playtimeChange", this.playTime);
            },
            clearPlayTimer() {
                window.clearInterval(this.playTimer), this.playTimer = void 0;
            },
            apiPlayTimeChange() {
                this.$emit("apiPlayTimeChange");
            },
            clearApiPlayTimer() {
                window.clearInterval(this.apiPlayTimer), this.apiPlayTimer = void 0;
            }
        }
    }, $ = {
        class: "audio-player"
    }, k = {
        style: {
            display: "flex",
            "justify-content": "center",
            "align-items": "center"
        }
    }, x = {
        ref: "canvas",
        width: "600px",
        height: "250px",
        style: {
            "margin-bottom": "20px"
        }
    }, C = {
        class: "audio__time-wrap"
    }, b = {
        class: "audio__current-time"
    }, V = {
        class: "audio__duration"
    }, B = {
        class: "audio__btn-wrap"
    }, W = [ "onClick" ], S = [ o("use", {
        "xlink:href": "#icon-play-prev"
    }, null, -1) ], R = {
        key: 1,
        class: "audio__play-loading"
    }, L = [ o("use", {
        "xlink:href": "#icon-play"
    }, null, -1) ], A = [ o("use", {
        "xlink:href": "#icon-play-pause"
    }, null, -1) ], M = [ o("use", {
        "xlink:href": "#icon-play-next"
    }, null, -1) ], D = {
        key: 3,
        class: "audio__play-volume-icon-wrap"
    }, F = [ "xlink:href" ], E = [ "src" ];
    w = j(_, [ [ "render", function(t, e, a, r, d, s) {
        return l(), n("div", $, [ o("div", k, [ o("canvas", x, null, 512) ]), m(o("div", {
            ref: "audioProgressWrap",
            class: "audio__progress-wrap",
            onClick: e[3] || (e[3] = u((...i) => s.handleClickProgressWrap && s.handleClickProgressWrap(...i), [ "stop" ]))
        }, [ o("div", {
            ref: "audioProgress",
            style: h({
                backgroundColor: a.themeColor
            }),
            class: "audio__progress"
        }, null, 4), o("div", {
            ref: "audioProgressPoint",
            style: h({
                backgroundColor: a.themeColor,
                boxShadow: `0 0 10px 0 ${a.themeColor}`
            }),
            class: "audio__progress-point",
            onPanstart: e[0] || (e[0] = (...i) => s.handleProgressPanstart && s.handleProgressPanstart(...i)),
            onPanend: e[1] || (e[1] = (...i) => s.handleProgressPanend && s.handleProgressPanend(...i)),
            onPanmove: e[2] || (e[2] = (...i) => s.handleProgressPanmove && s.handleProgressPanmove(...i))
        }, null, 36) ], 512), [ [ c, a.showProgressBar ] ]), m(o("div", C, [ o("div", b, p(s.currentTimeFormatted), 1), o("div", V, p(s.durationFormatted), 1) ], 512), [ [ c, a.showProgressBar ] ]), o("div", B, [ m(o("div", {
            class: "audio__notice"
        }, p(d.noticeMessage), 513), [ [ c, d.isShowNotice ] ]), a.showPlaybackRate ? (l(), 
        n("div", {
            key: 0,
            style: h({
                color: a.themeColor
            }),
            class: "audio__play-rate"
        }, [ o("span", {
            onClick: e[4] || (e[4] = u(i => d.isShowRates = !d.isShowRates, [ "stop" ]))
        }, p(s.rateFilter(d.playbackRate)), 1), P(v, {
            name: "fade-rate"
        }, {
            default: g(() => [ m(o("ul", {
                style: h({
                    border: `1px solid ${a.themeColor}`
                }),
                class: "audio__play-rate__dropdown"
            }, [ (l(!0), n(y, null, T(a.playbackRates, i => (l(), n("li", {
                key: "pr_" + i,
                onClick: u(H => s.handleSetPlaybackRate(i), [ "stop" ])
            }, p(s.rateFilter(i)), 9, W))), 128)) ], 4), [ [ c, d.isShowRates ] ]) ]),
            _: 1
        }) ], 4)) : f("", !0), m(o("div", {
            class: "audio__play-prev",
            onClick: e[5] || (e[5] = u((...i) => s.playPrev && s.playPrev(...i), [ "stop" ]))
        }, [ (l(), n("svg", {
            style: h({
                color: a.themeColor
            }),
            class: "audio__play-icon",
            "aria-hidden": "true",
            viewBox: "0 0 200 200"
        }, S, 4)) ], 512), [ [ c, a.showPrevButton ] ]), d.isLoading ? (l(), n("div", R, [ (l(), 
        n(y, null, T(8, i => o("span", {
            key: i,
            style: h({
                backgroundColor: a.themeColor
            })
        }, null, 4)), 64)) ])) : (l(), n(y, {
            key: 2
        }, [ !d.isPlaying && a.showPlayButton ? (l(), n("div", {
            key: 0,
            class: "audio__play-start",
            onClick: e[6] || (e[6] = u((...i) => s.play && s.play(...i), [ "stop" ]))
        }, [ (l(), n("svg", {
            style: h({
                color: a.themeColor
            }),
            class: "audio__play-icon",
            "aria-hidden": "true"
        }, L, 4)) ])) : a.showPlayButton ? (l(), n("div", {
            key: 1,
            class: "audio__play-pause",
            onClick: e[7] || (e[7] = u((...i) => s.pause && s.pause(...i), [ "stop" ]))
        }, [ (l(), n("svg", {
            style: h({
                color: a.themeColor
            }),
            class: "audio__play-icon",
            "aria-hidden": "true"
        }, A, 4)) ])) : f("", !0) ], 64)), m(o("div", {
            class: "audio__play-next",
            onClick: e[8] || (e[8] = u((...i) => s.playNext && s.playNext(...i), [ "stop" ]))
        }, [ (l(), n("svg", {
            style: h({
                color: a.themeColor
            }),
            class: "audio__play-icon",
            "aria-hidden": "true"
        }, M, 4)) ], 512), [ [ c, a.showNextButton ] ]), a.showVolumeButton ? (l(), 
        n("div", D, [ (l(), n("svg", {
            style: h({
                color: a.themeColor
            }),
            class: "audio__play-icon",
            "aria-hidden": "true",
            onClick: e[9] || (e[9] = u((...i) => s.handleVolumeIconTouchstart && s.handleVolumeIconTouchstart(...i), [ "stop" ]))
        }, [ o("use", {
            "xlink:href": d.currentVolume ? "#icon-play-volume" : "#icon-play-volume-no"
        }, null, 8, F) ], 4)), P(v, {
            name: "fade-volume"
        }, {
            default: g(() => [ m(o("div", {
                ref: "playVolumeWrap",
                class: "audio__play-volume-wrap",
                onClick: e[10] || (e[10] = u((...i) => s.handleVolumePanmove && s.handleVolumePanmove(...i), [ "stop" ])),
                onPanmove: e[11] || (e[11] = (...i) => s.handleVolumePanmove && s.handleVolumePanmove(...i)),
                onPanend: e[12] || (e[12] = (...i) => s.handleVolumePanend && s.handleVolumePanend(...i))
            }, [ o("div", {
                ref: "playVolume",
                style: h({
                    height: "100%",
                    width: 100 * d.currentVolume + "%",
                    backgroundColor: a.themeColor
                }),
                class: "audio__play-volume"
            }, null, 4) ], 544), [ [ c, d.isShowVolume ] ]) ]),
            _: 1
        }) ])) : f("", !0) ]), o("audio", {
            ref: "audio",
            src: a.audioList[d.currentPlayIndex],
            controls: "",
            class: "audio-player__audio",
            onEnded: e[13] || (e[13] = (...i) => s.onEnded && s.onEnded(...i)),
            onTimeupdate: e[14] || (e[14] = (...i) => s.onTimeUpdate && s.onTimeUpdate(...i)),
            onLoadedmetadata: e[15] || (e[15] = (...i) => s.onLoadedmetadata && s.onLoadedmetadata(...i))
        }, " 浏览器太老咯，请升级浏览器吧~ ", 40, E) ]);
    } ] ]);
});

export {
    G as __tla,
    w as default
};