import {
    g as l,
    __tla as u
} from "./file-e038b35d.js";

import {
    _ as p
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    aT as m,
    o as c,
    c as h,
    t as y,
    B as f,
    k as g,
    D as v,
    __tla as P
} from "./index-6c08ea4c.js";

let o, T = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})() ]).then(async () => {
    const n = {
        props: {
            dataId: {
                type: String,
                required: !0,
                default: ""
            },
            resourceName: {
                type: String,
                required: !1,
                default: ""
            },
            eventTime: {
                type: Number,
                required: !1,
                default: 10
            },
            canParse: {
                type: Boolean,
                default: !0
            },
            speed: {
                type: Boolean,
                default: !0
            },
            canPlay: {
                type: Boolean,
                default: !0
            },
            defaultWidth: {
                type: String,
                default: "1000px"
            },
            defaultHeight: {
                type: String,
                default: "550px"
            },
            controlBtns: {
                type: Array,
                default: () => [ "audioTrack", "quality", "volume" ]
            }
        },
        emits: [ "changeCurrentTime", "isOver", "play" ],
        data: () => ({
            options: {
                src: "",
                type: ""
            },
            getPreviewUrl: l,
            showBox: !0,
            currentTime: 0,
            duration: 0
        }),
        watch: {
            dataId: {
                immediate: !0,
                handler(e) {
                    if (!e) {
                        let a = document.getElementById("dPlayerVideoMain");
                        a && a.pause && a.pause();
                    }
                    this.getUrl();
                }
            }
        },
        beforeUnmount() {
            let e = document.getElementById("dPlayerVideoMain");
            e && e.pause && e.pause(), e && e.ended && e.ended(), this.showBox = !1;
        },
        mounted() {
            this.getUrl();
        },
        methods: {
            async getUrl() {
                if (!this.dataId) return;
                this.options.type = "video/mp4";
                let e = await this.getPreviewUrl(this.dataId);
                this.options.src = e;
            },
            setVolme() {
                let e = document.getElementById("dPlayerVideoMain");
                e.muted = !1, e.volume = (e.muted ? 5 : 30) / 100, this.$emit("play");
            },
            onTimeupdate(e) {
                let a = e.duration || e.target.duration || 0, t = e.currentTime || e.target.currentTime || 0;
                this.duration = a, Math.floor(t / this.eventTime) === Math.floor(this.currentTime / this.eventTime) && a !== t || (this.currentTime = Math.floor(t), 
                this.$emit("changeCurrentTime", {
                    currentTime: t,
                    duration: a
                }));
            },
            isEnd() {
                this.$emit("isOver");
            },
            pause() {
                this.$refs.videoRef.pause();
            },
            play() {
                this.$refs.videoRef.play();
            }
        }
    }, d = {
        key: 0,
        class: "videocontent"
    };
    o = p(n, [ [ "render", function(e, a, t, _, r, i) {
        const s = m("vue3VideoPlay");
        return r.showBox ? (c(), h("div", d, [ y("p", null, f(t.resourceName), 1), g(s, {
            ref: "videoRef",
            width: t.defaultWidth,
            height: t.defaultHeight,
            src: r.options.src,
            type: r.options.type,
            preload: "auto",
            volume: .3,
            onPlay: i.setVolme,
            onTimeupdate: i.onTimeupdate,
            "auto-play": !1,
            onEnded: i.isEnd,
            canParse: t.canParse,
            speed: t.speed,
            canPlay: t.canPlay,
            controlBtns: t.controlBtns
        }, null, 8, [ "width", "height", "src", "type", "onPlay", "onTimeupdate", "onEnded", "canParse", "speed", "canPlay", "controlBtns" ]) ])) : v("", !0);
    } ], [ "__scopeId", "data-v-7795a1cf" ] ]);
});

export {
    o as _,
    T as __tla
};