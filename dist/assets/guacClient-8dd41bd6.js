import {
    a7 as B,
    A as ht,
    o as ft,
    c as pt,
    t as gt,
    a9 as mt,
    __tla as vt
} from "./index-6c08ea4c.js";

import {
    _ as yt
} from "./_plugin-vue_export-helper-1b428a4d.js";

let z, X, Y, q, j, $, J, Q, Z, tt, wt = Promise.all([ (() => {
    try {
        return vt;
    } catch {}
})() ]).then(async () => {
    let F = "exp";
    $ = async e => await B.post({
        showLoading: !1,
        url: `/${F}/env/loading`,
        data: e
    }), X = async e => await B.post({
        showLoading: !1,
        url: `/${F}/env/loading-demo`,
        data: e
    }), Y = async e => await B.post({
        showLoading: !1,
        url: "/exp/env/reload-instance",
        data: e
    }), tt = async e => await B.post({
        url: "/exp/env/reloading",
        data: e
    }), j = async e => await B.delete({
        showLoading: !1,
        url: `/${F}/env/delete?id=${e}`
    }), Q = async e => await B.get({
        showLoading: !1,
        url: `/${F}/env/get-ports`,
        params: e
    }), Z = async e => await B.post({
        showLoading: !1,
        url: `/${F}/env/open-port`,
        data: e
    }), q = async e => await B.post({
        showLoading: !1,
        url: `/${F}/env/shell`,
        data: e
    });
    var o;
    (o = o || {}).ArrayBufferReader = function(e) {
        var t = this;
        e.onblob = function(i) {
            for (var a = window.atob(i), r = new ArrayBuffer(a.length), S = new Uint8Array(r), I = 0; I < a.length; I++) S[I] = a.charCodeAt(I);
            t.ondata && t.ondata(r);
        }, e.onend = function() {
            t.onend && t.onend();
        }, this.ondata = null, this.onend = null;
    }, (o = o || {}).ArrayBufferWriter = function(e) {
        var t = this;
        function i(a) {
            for (var r = "", S = 0; S < a.byteLength; S++) r += String.fromCharCode(a[S]);
            e.sendBlob(window.btoa(r));
        }
        e.onack = function(a) {
            t.onack && t.onack(a);
        }, this.blobLength = o.ArrayBufferWriter.DEFAULT_BLOB_LENGTH, this.sendData = function(a) {
            var r = new Uint8Array(a);
            if (r.length <= t.blobLength) i(r); else for (var S = 0; S < r.length; S += t.blobLength) i(r.subarray(S, S + t.blobLength));
        }, this.sendEnd = function() {
            e.sendEnd();
        }, this.onack = null;
    }, o.ArrayBufferWriter.DEFAULT_BLOB_LENGTH = 6048, (o = o || {}).AudioContextFactory = {
        singleton: null,
        getAudioContext: function() {
            var e = window.AudioContext || window.webkitAudioContext;
            if (e) try {
                return o.AudioContextFactory.singleton || (o.AudioContextFactory.singleton = new e()), 
                o.AudioContextFactory.singleton;
            } catch {}
            return null;
        }
    }, (o = o || {}).AudioPlayer = function() {
        this.sync = function() {};
    }, o.AudioPlayer.isSupportedType = function(e) {
        return o.RawAudioPlayer.isSupportedType(e);
    }, o.AudioPlayer.getSupportedTypes = function() {
        return o.RawAudioPlayer.getSupportedTypes();
    }, o.AudioPlayer.getInstance = function(e, t) {
        return o.RawAudioPlayer.isSupportedType(t) ? new o.RawAudioPlayer(e, t) : null;
    }, o.RawAudioPlayer = function(e, t) {
        var i = o.RawAudioFormat.parse(t), a = o.AudioContextFactory.getAudioContext(), r = a.currentTime, S = new o.ArrayBufferReader(e), I = i.bytesPerSample === 1 ? window.Int8Array : window.Int16Array, f = i.bytesPerSample === 1 ? 128 : 32768, u = [], T = function() {
            var C = function(d) {
                if (d.length <= 1) return d[0];
                var y = 0;
                d.forEach(function(h) {
                    y += h.length;
                });
                var v = 0, c = new I(y);
                return d.forEach(function(h) {
                    c.set(h, v), v += h.length;
                }), c;
            }(u);
            return C ? (u = function(d) {
                for (var y = Number.MAX_VALUE, v = d.length, c = Math.floor(d.length / i.channels), h = Math.floor(.02 * i.rate), p = Math.max(i.channels * h, i.channels * (c - h)); p < d.length; p += i.channels) {
                    for (var m = 0, g = 0; g < i.channels; g++) m += Math.abs(d[p + g]);
                    m <= y && (v = p + i.channels, y = m);
                }
                return v === d.length ? [ d ] : [ new I(d.buffer.slice(0, v * i.bytesPerSample)), new I(d.buffer.slice(v * i.bytesPerSample)) ];
            }(C), C = u.shift()) : null;
        };
        S.ondata = function(C) {
            (function(c) {
                u.push(new I(c));
            })(new I(C));
            var d = T();
            if (d) {
                var y = a.currentTime;
                r < y && (r = y);
                var v = a.createBufferSource();
                v.connect(a.destination), v.start || (v.start = v.noteOn), v.buffer = function(c) {
                    var h = c.length / i.channels, p = a.currentTime;
                    r < p && (r = p);
                    for (var m = a.createBuffer(i.channels, h, i.rate), g = 0; g < i.channels; g++) for (var E = m.getChannelData(g), A = g, n = 0; n < h; n++) E[n] = c[A] / f, 
                    A += i.channels;
                    return m;
                }(d), v.start(r), r += d.length / i.channels / i.rate;
            }
        }, this.sync = function() {
            var C = a.currentTime;
            r = Math.min(r, C + .3);
        };
    }, o.RawAudioPlayer.prototype = new o.AudioPlayer(), o.RawAudioPlayer.isSupportedType = function(e) {
        return !!o.AudioContextFactory.getAudioContext() && o.RawAudioFormat.parse(e) !== null;
    }, o.RawAudioPlayer.getSupportedTypes = function() {
        return o.AudioContextFactory.getAudioContext() ? [ "audio/L8", "audio/L16" ] : [];
    }, (o = o || {}).AudioRecorder = function() {
        this.onclose = null, this.onerror = null;
    }, o.AudioRecorder.isSupportedType = function(e) {
        return o.RawAudioRecorder.isSupportedType(e);
    }, o.AudioRecorder.getSupportedTypes = function() {
        return o.RawAudioRecorder.getSupportedTypes();
    }, o.AudioRecorder.getInstance = function(e, t) {
        return o.RawAudioRecorder.isSupportedType(t) ? new o.RawAudioRecorder(e, t) : null;
    }, o.RawAudioRecorder = function(e, t) {
        var i = this, a = o.RawAudioFormat.parse(t), r = o.AudioContextFactory.getAudioContext();
        navigator.mediaDevices || (navigator.mediaDevices = {}), navigator.mediaDevices.getUserMedia || (navigator.mediaDevices.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia).bind(navigator));
        var S = new o.ArrayBufferWriter(e), I = a.bytesPerSample === 1 ? window.Int8Array : window.Int16Array, f = a.bytesPerSample === 1 ? 128 : 32768, u = 0, T = 0, C = null, d = null, y = null, v = function(m) {
            if (m === 0) return 1;
            var g = Math.PI * m;
            return Math.sin(g) / g;
        }, c = function(m, g) {
            for (var E, A, n = (m.length - 1) * g, s = Math.floor(n) - 3 + 1, l = Math.floor(n) + 3, w = 0, k = s; k <= l; k++) w += (m[k] || 0) * (-(A = 3) < (E = n - k) && E < A ? v(E) * v(E / A) : 0);
            return w;
        }, h = function(m) {
            (y = r.createScriptProcessor(2048, a.channels, a.channels)).connect(r.destination), 
            y.onaudioprocess = function(g) {
                S.sendData(function(E) {
                    var A = E.length;
                    u += A;
                    var n = Math.round(u * a.rate / E.sampleRate) - T;
                    T += n;
                    for (var s = new I(n * a.channels), l = 0; l < a.channels; l++) for (var w = E.getChannelData(l), k = l, M = 0; M < n; M++) s[k] = c(w, M / (n - 1)) * f, 
                    k += a.channels;
                    return s;
                }(g.inputBuffer).buffer);
            }, (d = r.createMediaStreamSource(m)).connect(y), r.state === "suspended" && r.resume(), 
            C = m;
        }, p = function() {
            S.sendEnd(), i.onerror && i.onerror();
        };
        S.onack = function(m) {
            var g;
            m.code !== o.Status.Code.SUCCESS || C ? (function() {
                if (d && d.disconnect(), y && y.disconnect(), C) for (var E = C.getTracks(), A = 0; A < E.length; A++) E[A].stop();
                y = null, d = null, C = null, S.sendEnd();
            }(), S.onack = null, m.code === o.Status.Code.RESOURCE_CLOSED ? i.onclose && i.onclose() : i.onerror && i.onerror()) : (g = navigator.mediaDevices.getUserMedia({
                audio: !0
            }, h, p)) && g.then && g.then(h, p);
        };
    }, o.RawAudioRecorder.prototype = new o.AudioRecorder(), o.RawAudioRecorder.isSupportedType = function(e) {
        return !!o.AudioContextFactory.getAudioContext() && o.RawAudioFormat.parse(e) !== null;
    }, o.RawAudioRecorder.getSupportedTypes = function() {
        return o.AudioContextFactory.getAudioContext() ? [ "audio/L8", "audio/L16" ] : [];
    }, (o = o || {}).BlobReader = function(e, t) {
        var i, a = this, r = 0;
        i = window.BlobBuilder ? new BlobBuilder() : window.WebKitBlobBuilder ? new WebKitBlobBuilder() : window.MozBlobBuilder ? new MozBlobBuilder() : new function() {
            var S = [];
            this.append = function(I) {
                S.push(new Blob([ I ], {
                    type: t
                }));
            }, this.getBlob = function() {
                return new Blob(S, {
                    type: t
                });
            };
        }(), e.onblob = function(S) {
            for (var I = window.atob(S), f = new ArrayBuffer(I.length), u = new Uint8Array(f), T = 0; T < I.length; T++) u[T] = I.charCodeAt(T);
            i.append(f), r += f.byteLength, a.onprogress && a.onprogress(f.byteLength), 
            e.sendAck("OK", 0);
        }, e.onend = function() {
            a.onend && a.onend();
        }, this.getLength = function() {
            return r;
        }, this.getBlob = function() {
            return i.getBlob();
        }, this.onprogress = null, this.onend = null;
    }, (o = o || {}).BlobWriter = function(e) {
        var t = this, i = new o.ArrayBufferWriter(e);
        i.onack = function(a) {
            t.onack && t.onack(a);
        }, this.sendBlob = function(a) {
            var r = 0, S = new FileReader(), I = function() {
                if (r >= a.size) t.oncomplete && t.oncomplete(a); else {
                    var f = function(u, T, C) {
                        var d = (u.slice || u.webkitSlice || u.mozSlice).bind(u), y = C - T;
                        if (y !== C) {
                            var v = d(T, y);
                            if (v.size === y) return v;
                        }
                        return d(T, C);
                    }(a, r, r + i.blobLength);
                    r += i.blobLength, S.readAsArrayBuffer(f);
                }
            };
            S.onload = function() {
                i.sendData(S.result), i.onack = function(f) {
                    t.onack && t.onack(f), f.isError() || (t.onprogress && t.onprogress(a, r - i.blobLength), 
                    I());
                };
            }, S.onerror = function() {
                t.onerror && t.onerror(a, r, S.error);
            }, I();
        }, this.sendEnd = function() {
            i.sendEnd();
        }, this.onack = null, this.onerror = null, this.onprogress = null, this.oncomplete = null;
    }, (o = o || {}).Client = function(e) {
        var t = this, i = 0, a = 0, r = null, S = {
            0: "butt",
            1: "round",
            2: "square"
        }, I = {
            0: "bevel",
            1: "miter",
            2: "round"
        }, f = new o.Display(), u = {}, T = {}, C = [], d = [], y = [], v = new o.IntegerPool(), c = [];
        function h(n) {
            n != i && (i = n, t.onstatechange && t.onstatechange(i));
        }
        function p() {
            return i == 3 || i == 2;
        }
        this.exportState = function(n) {
            var s = {
                currentState: i,
                currentTimestamp: a,
                layers: {}
            }, l = {};
            for (var w in u) l[w] = u[w];
            f.flush(function() {
                for (var k in l) {
                    var M = parseInt(k), x = l[k], P = x.toCanvas(), b = {
                        width: x.width,
                        height: x.height
                    };
                    x.width && x.height && (b.url = P.toDataURL("image/png")), M > 0 && (b.x = x.x, 
                    b.y = x.y, b.z = x.z, b.alpha = x.alpha, b.matrix = x.matrix, 
                    b.parent = g(x.parent)), s.layers[k] = b;
                }
                n(s);
            });
        }, this.importState = function(n, s) {
            var l, w;
            for (l in i = n.currentState, a = n.currentTimestamp, u) (w = parseInt(l)) > 0 && f.dispose(u[l]);
            for (l in u = {}, n.layers) {
                w = parseInt(l);
                var k = n.layers[l], M = m(w);
                if (f.resize(M, k.width, k.height), k.url && (f.setChannelMask(M, o.Layer.SRC), 
                f.draw(M, 0, 0, k.url)), w > 0 && k.parent >= 0) {
                    var x = m(k.parent);
                    f.move(M, x, k.x, k.y, k.z), f.shade(M, k.alpha);
                    var P = k.matrix;
                    f.distort(M, P[0], P[1], P[2], P[3], P[4], P[5]);
                }
            }
            f.flush(s);
        }, this.getDisplay = function() {
            return f;
        }, this.sendSize = function(n, s) {
            p() && e.sendMessage("size", n, s);
        }, this.sendKeyEvent = function(n, s) {
            p() && e.sendMessage("key", s, n);
        }, this.sendMouseState = function(n) {
            if (p()) {
                f.moveCursor(Math.floor(n.x), Math.floor(n.y));
                var s = 0;
                n.left && (s |= 1), n.middle && (s |= 2), n.right && (s |= 4), n.up && (s |= 8), 
                n.down && (s |= 16), e.sendMessage("mouse", Math.floor(n.x), Math.floor(n.y), s);
            }
        }, this.createOutputStream = function() {
            var n = v.next();
            return c[n] = new o.OutputStream(t, n);
        }, this.createAudioStream = function(n) {
            var s = t.createOutputStream();
            return e.sendMessage("audio", s.index, n), s;
        }, this.createFileStream = function(n, s) {
            var l = t.createOutputStream();
            return e.sendMessage("file", l.index, n, s), l;
        }, this.createPipeStream = function(n, s) {
            var l = t.createOutputStream();
            return e.sendMessage("pipe", l.index, n, s), l;
        }, this.createClipboardStream = function(n) {
            var s = t.createOutputStream();
            return e.sendMessage("clipboard", s.index, n), s;
        }, this.createArgumentValueStream = function(n, s) {
            var l = t.createOutputStream();
            return e.sendMessage("argv", l.index, n, s), l;
        }, this.createObjectOutputStream = function(n, s, l) {
            var w = t.createOutputStream();
            return e.sendMessage("put", n, w.index, s, l), w;
        }, this.requestObjectInputStream = function(n, s) {
            p() && e.sendMessage("get", n, s);
        }, this.sendAck = function(n, s, l) {
            p() && e.sendMessage("ack", n, s, l);
        }, this.sendBlob = function(n, s) {
            p() && e.sendMessage("blob", n, s);
        }, this.endStream = function(n) {
            p() && (e.sendMessage("end", n), c[n] && (v.free(n), delete c[n]));
        }, this.onstatechange = null, this.onname = null, this.onerror = null, this.onaudio = null, 
        this.onvideo = null, this.onargv = null, this.onclipboard = null, this.onfile = null, 
        this.onfilesystem = null, this.onpipe = null, this.onrequired = null, this.onsync = null;
        var m = function(n) {
            var s = u[n];
            return s || (s = n === 0 ? f.getDefaultLayer() : n > 0 ? f.createLayer() : f.createBuffer(), 
            u[n] = s), s;
        }, g = function(n) {
            if (!n) return null;
            for (var s in u) if (n === u[s]) return parseInt(s);
            return null;
        }, E = {
            "miter-limit": function(n, s) {
                f.setMiterLimit(n, parseFloat(s));
            }
        }, A = {
            ack: function(n) {
                var s = parseInt(n[0]), l = n[1], w = parseInt(n[2]), k = c[s];
                k && (k.onack && k.onack(new o.Status(w, l)), w >= 256 && c[s] === k && (v.free(s), 
                delete c[s]));
            },
            arc: function(n) {
                var s = m(parseInt(n[0])), l = parseInt(n[1]), w = parseInt(n[2]), k = parseInt(n[3]), M = parseFloat(n[4]), x = parseFloat(n[5]), P = parseInt(n[6]);
                f.arc(s, l, w, k, M, x, P != 0);
            },
            argv: function(n) {
                var s = parseInt(n[0]), l = n[1], w = n[2];
                if (t.onargv) {
                    var k = d[s] = new o.InputStream(t, s);
                    t.onargv(k, l, w);
                } else t.sendAck(s, "Receiving argument values unsupported", 256);
            },
            audio: function(n) {
                var s = parseInt(n[0]), l = n[1], w = d[s] = new o.InputStream(t, s), k = null;
                t.onaudio && (k = t.onaudio(w, l)), k || (k = o.AudioPlayer.getInstance(w, l)), 
                k ? (T[s] = k, t.sendAck(s, "OK", 0)) : t.sendAck(s, "BAD TYPE", 783);
            },
            blob: function(n) {
                var s = parseInt(n[0]), l = n[1], w = d[s];
                w && w.onblob && w.onblob(l);
            },
            body: function(n) {
                var s = parseInt(n[0]), l = y[s], w = parseInt(n[1]), k = n[2], M = n[3];
                if (l && l.onbody) {
                    var x = d[w] = new o.InputStream(t, w);
                    l.onbody(x, k, M);
                } else t.sendAck(w, "Receipt of body unsupported", 256);
            },
            cfill: function(n) {
                var s = parseInt(n[0]), l = m(parseInt(n[1])), w = parseInt(n[2]), k = parseInt(n[3]), M = parseInt(n[4]), x = parseInt(n[5]);
                f.setChannelMask(l, s), f.fillColor(l, w, k, M, x);
            },
            clip: function(n) {
                var s = m(parseInt(n[0]));
                f.clip(s);
            },
            clipboard: function(n) {
                var s = parseInt(n[0]), l = n[1];
                if (t.onclipboard) {
                    var w = d[s] = new o.InputStream(t, s);
                    t.onclipboard(w, l);
                } else t.sendAck(s, "Clipboard unsupported", 256);
            },
            close: function(n) {
                var s = m(parseInt(n[0]));
                f.close(s);
            },
            copy: function(n) {
                var s = m(parseInt(n[0])), l = parseInt(n[1]), w = parseInt(n[2]), k = parseInt(n[3]), M = parseInt(n[4]), x = parseInt(n[5]), P = m(parseInt(n[6])), b = parseInt(n[7]), L = parseInt(n[8]);
                f.setChannelMask(P, x), f.copy(s, l, w, k, M, P, b, L);
            },
            cstroke: function(n) {
                var s = parseInt(n[0]), l = m(parseInt(n[1])), w = S[parseInt(n[2])], k = I[parseInt(n[3])], M = parseInt(n[4]), x = parseInt(n[5]), P = parseInt(n[6]), b = parseInt(n[7]), L = parseInt(n[8]);
                f.setChannelMask(l, s), f.strokeColor(l, w, k, M, x, P, b, L);
            },
            cursor: function(n) {
                var s = parseInt(n[0]), l = parseInt(n[1]), w = m(parseInt(n[2])), k = parseInt(n[3]), M = parseInt(n[4]), x = parseInt(n[5]), P = parseInt(n[6]);
                f.setCursor(s, l, w, k, M, x, P);
            },
            curve: function(n) {
                var s = m(parseInt(n[0])), l = parseInt(n[1]), w = parseInt(n[2]), k = parseInt(n[3]), M = parseInt(n[4]), x = parseInt(n[5]), P = parseInt(n[6]);
                f.curveTo(s, l, w, k, M, x, P);
            },
            disconnect: function(n) {
                t.disconnect();
            },
            dispose: function(n) {
                var s = parseInt(n[0]);
                if (s > 0) {
                    var l = m(s);
                    f.dispose(l), delete u[s];
                } else s < 0 && delete u[s];
            },
            distort: function(n) {
                var s = parseInt(n[0]), l = parseFloat(n[1]), w = parseFloat(n[2]), k = parseFloat(n[3]), M = parseFloat(n[4]), x = parseFloat(n[5]), P = parseFloat(n[6]);
                if (s >= 0) {
                    var b = m(s);
                    f.distort(b, l, w, k, M, x, P);
                }
            },
            error: function(n) {
                var s = n[0], l = parseInt(n[1]);
                t.onerror && t.onerror(new o.Status(l, s)), t.disconnect();
            },
            end: function(n) {
                var s = parseInt(n[0]), l = d[s];
                l && (l.onend && l.onend(), delete d[s]);
            },
            file: function(n) {
                var s = parseInt(n[0]), l = n[1], w = n[2];
                if (t.onfile) {
                    var k = d[s] = new o.InputStream(t, s);
                    t.onfile(k, l, w);
                } else t.sendAck(s, "File transfer unsupported", 256);
            },
            filesystem: function(n) {
                var s = parseInt(n[0]), l = n[1];
                if (t.onfilesystem) {
                    var w = y[s] = new o.Object(t, s);
                    t.onfilesystem(w, l);
                }
            },
            identity: function(n) {
                var s = m(parseInt(n[0]));
                f.setTransform(s, 1, 0, 0, 1, 0, 0);
            },
            img: function(n) {
                var s = parseInt(n[0]), l = parseInt(n[1]), w = m(parseInt(n[2])), k = n[3], M = parseInt(n[4]), x = parseInt(n[5]), P = d[s] = new o.InputStream(t, s);
                f.setChannelMask(w, l), f.drawStream(w, M, x, P, k);
            },
            jpeg: function(n) {
                var s = parseInt(n[0]), l = m(parseInt(n[1])), w = parseInt(n[2]), k = parseInt(n[3]), M = n[4];
                f.setChannelMask(l, s), f.draw(l, w, k, "data:image/jpeg;base64," + M);
            },
            lfill: function(n) {
                var s = parseInt(n[0]), l = m(parseInt(n[1])), w = m(parseInt(n[2]));
                f.setChannelMask(l, s), f.fillLayer(l, w);
            },
            line: function(n) {
                var s = m(parseInt(n[0])), l = parseInt(n[1]), w = parseInt(n[2]);
                f.lineTo(s, l, w);
            },
            lstroke: function(n) {
                var s = parseInt(n[0]), l = m(parseInt(n[1])), w = m(parseInt(n[2]));
                f.setChannelMask(l, s), f.strokeLayer(l, w);
            },
            mouse: function(n) {
                var s = parseInt(n[0]), l = parseInt(n[1]);
                f.showCursor(!0), f.moveCursor(s, l);
            },
            move: function(n) {
                var s = parseInt(n[0]), l = parseInt(n[1]), w = parseInt(n[2]), k = parseInt(n[3]), M = parseInt(n[4]);
                if (s > 0 && l >= 0) {
                    var x = m(s), P = m(l);
                    f.move(x, P, w, k, M);
                }
            },
            name: function(n) {
                t.onname && t.onname(n[0]);
            },
            nest: function(n) {
                (function(s) {
                    var l = C[s];
                    return l == null && ((l = C[s] = new o.Parser()).oninstruction = e.oninstruction), 
                    l;
                })(parseInt(n[0])).receive(n[1]);
            },
            pipe: function(n) {
                var s = parseInt(n[0]), l = n[1], w = n[2];
                if (t.onpipe) {
                    var k = d[s] = new o.InputStream(t, s);
                    t.onpipe(k, l, w);
                } else t.sendAck(s, "Named pipes unsupported", 256);
            },
            png: function(n) {
                var s = parseInt(n[0]), l = m(parseInt(n[1])), w = parseInt(n[2]), k = parseInt(n[3]), M = n[4];
                f.setChannelMask(l, s), f.draw(l, w, k, "data:image/png;base64," + M);
            },
            pop: function(n) {
                var s = m(parseInt(n[0]));
                f.pop(s);
            },
            push: function(n) {
                var s = m(parseInt(n[0]));
                f.push(s);
            },
            rect: function(n) {
                var s = m(parseInt(n[0])), l = parseInt(n[1]), w = parseInt(n[2]), k = parseInt(n[3]), M = parseInt(n[4]);
                f.rect(s, l, w, k, M);
            },
            required: function(n) {
                t.onrequired && t.onrequired(n);
            },
            reset: function(n) {
                var s = m(parseInt(n[0]));
                f.reset(s);
            },
            set: function(n) {
                var s = m(parseInt(n[0])), l = n[1], w = n[2], k = E[l];
                k && k(s, w);
            },
            shade: function(n) {
                var s = parseInt(n[0]), l = parseInt(n[1]);
                if (s >= 0) {
                    var w = m(s);
                    f.shade(w, l);
                }
            },
            size: function(n) {
                var s = parseInt(n[0]), l = m(s), w = parseInt(n[1]), k = parseInt(n[2]);
                f.resize(l, w, k);
            },
            start: function(n) {
                var s = m(parseInt(n[0])), l = parseInt(n[1]), w = parseInt(n[2]);
                f.moveTo(s, l, w);
            },
            sync: function(n) {
                var s = parseInt(n[0]);
                f.flush(function() {
                    for (var l in T) {
                        var w = T[l];
                        w && w.sync();
                    }
                    s !== a && (e.sendMessage("sync", s), a = s);
                }), i === 2 && h(3), t.onsync && t.onsync(s);
            },
            transfer: function(n) {
                var s = m(parseInt(n[0])), l = parseInt(n[1]), w = parseInt(n[2]), k = parseInt(n[3]), M = parseInt(n[4]), x = parseInt(n[5]), P = m(parseInt(n[6])), b = parseInt(n[7]), L = parseInt(n[8]);
                x === 3 ? f.put(s, l, w, k, M, P, b, L) : x !== 5 && f.transfer(s, l, w, k, M, P, b, L, o.Client.DefaultTransferFunction[x]);
            },
            transform: function(n) {
                var s = m(parseInt(n[0])), l = parseFloat(n[1]), w = parseFloat(n[2]), k = parseFloat(n[3]), M = parseFloat(n[4]), x = parseFloat(n[5]), P = parseFloat(n[6]);
                f.transform(s, l, w, k, M, x, P);
            },
            undefine: function(n) {
                var s = parseInt(n[0]), l = y[s];
                l && l.onundefine && l.onundefine();
            },
            video: function(n) {
                var s = parseInt(n[0]), l = m(parseInt(n[1])), w = n[2], k = d[s] = new o.InputStream(t, s), M = null;
                t.onvideo && (M = t.onvideo(k, l, w)), M || (M = o.VideoPlayer.getInstance(k, l, w)), 
                M ? t.sendAck(s, "OK", 0) : t.sendAck(s, "BAD TYPE", 783);
            }
        };
        e.oninstruction = function(n, s) {
            var l = A[n];
            l && l(s);
        }, this.disconnect = function() {
            i != 5 && i != 4 && (h(4), r && window.clearInterval(r), e.sendMessage("disconnect"), 
            e.disconnect(), h(5));
        }, this.connect = function(n) {
            h(1);
            try {
                e.connect(n);
            } catch (s) {
                throw h(0), s;
            }
            r = window.setInterval(function() {
                e.sendMessage("nop");
            }, 5e3), h(2);
        };
    }, o.Client.DefaultTransferFunction = {
        0: function(e, t) {
            t.red = t.green = t.blue = 0;
        },
        15: function(e, t) {
            t.red = t.green = t.blue = 255;
        },
        3: function(e, t) {
            t.red = e.red, t.green = e.green, t.blue = e.blue, t.alpha = e.alpha;
        },
        5: function(e, t) {},
        12: function(e, t) {
            t.red = 255 & ~e.red, t.green = 255 & ~e.green, t.blue = 255 & ~e.blue, 
            t.alpha = e.alpha;
        },
        10: function(e, t) {
            t.red = 255 & ~t.red, t.green = 255 & ~t.green, t.blue = 255 & ~t.blue;
        },
        1: function(e, t) {
            t.red = e.red & t.red, t.green = e.green & t.green, t.blue = e.blue & t.blue;
        },
        14: function(e, t) {
            t.red = 255 & ~(e.red & t.red), t.green = 255 & ~(e.green & t.green), 
            t.blue = 255 & ~(e.blue & t.blue);
        },
        7: function(e, t) {
            t.red = e.red | t.red, t.green = e.green | t.green, t.blue = e.blue | t.blue;
        },
        8: function(e, t) {
            t.red = 255 & ~(e.red | t.red), t.green = 255 & ~(e.green | t.green), 
            t.blue = 255 & ~(e.blue | t.blue);
        },
        6: function(e, t) {
            t.red = e.red ^ t.red, t.green = e.green ^ t.green, t.blue = e.blue ^ t.blue;
        },
        9: function(e, t) {
            t.red = 255 & (e.red ^ ~t.red), t.green = 255 & (e.green ^ ~t.green), 
            t.blue = 255 & (e.blue ^ ~t.blue);
        },
        4: function(e, t) {
            t.red = ~e.red & t.red & 255, t.green = ~e.green & t.green & 255, t.blue = ~e.blue & t.blue & 255;
        },
        13: function(e, t) {
            t.red = 255 & (~e.red | t.red), t.green = 255 & (~e.green | t.green), 
            t.blue = 255 & (~e.blue | t.blue);
        },
        2: function(e, t) {
            t.red = e.red & ~t.red & 255, t.green = e.green & ~t.green & 255, t.blue = e.blue & ~t.blue & 255;
        },
        11: function(e, t) {
            t.red = 255 & (e.red | ~t.red), t.green = 255 & (e.green | ~t.green), 
            t.blue = 255 & (e.blue | ~t.blue);
        }
    }, (o = o || {}).DataURIReader = function(e, t) {
        var i = this, a = "data:" + t + ";base64,";
        e.onblob = function(r) {
            a += r;
        }, e.onend = function() {
            i.onend && i.onend();
        }, this.getURI = function() {
            return a;
        }, this.onend = null;
    }, (o = o || {}).Display = function() {
        var e = this, t = 0, i = 0, a = 1, r = document.createElement("div");
        r.style.position = "relative", r.style.width = t + "px", r.style.height = i + "px", 
        r.style.transformOrigin = r.style.webkitTransformOrigin = r.style.MozTransformOrigin = r.style.OTransformOrigin = r.style.msTransformOrigin = "0 0";
        var S = new o.Display.VisibleLayer(t, i), I = new o.Display.VisibleLayer(0, 0);
        I.setChannelMask(o.Layer.SRC), r.appendChild(S.getElement()), r.appendChild(I.getElement());
        var f = document.createElement("div");
        f.style.position = "relative", f.style.width = t * a + "px", f.style.height = i * a + "px", 
        f.appendChild(r), this.cursorHotspotX = 0, this.cursorHotspotY = 0, this.cursorX = 0, 
        this.cursorY = 0, this.onresize = null, this.oncursor = null;
        var u = [], T = [];
        function C() {
            for (var c = 0; c < T.length; ) {
                var h = T[c];
                if (!h.isReady()) break;
                h.flush(), c++;
            }
            T.splice(0, c);
        }
        function d(c, h) {
            this.isReady = function() {
                for (var p = 0; p < h.length; p++) if (h[p].blocked) return !1;
                return !0;
            }, this.flush = function() {
                for (var p = 0; p < h.length; p++) h[p].execute();
                c && c();
            };
        }
        function y(c, h) {
            var p = this;
            this.blocked = h, this.unblock = function() {
                p.blocked && (p.blocked = !1, C());
            }, this.execute = function() {
                c && c();
            };
        }
        function v(c, h) {
            var p = new y(c, h);
            return u.push(p), p;
        }
        this.getElement = function() {
            return f;
        }, this.getWidth = function() {
            return t;
        }, this.getHeight = function() {
            return i;
        }, this.getDefaultLayer = function() {
            return S;
        }, this.getCursorLayer = function() {
            return I;
        }, this.createLayer = function() {
            var c = new o.Display.VisibleLayer(t, i);
            return c.move(S, 0, 0, 0), c;
        }, this.createBuffer = function() {
            var c = new o.Layer(0, 0);
            return c.autosize = 1, c;
        }, this.flush = function(c) {
            T.push(new d(c, u)), u = [], C();
        }, this.setCursor = function(c, h, p, m, g, E, A) {
            v(function() {
                e.cursorHotspotX = c, e.cursorHotspotY = h, I.resize(E, A), I.copy(p, m, g, E, A, 0, 0), 
                e.moveCursor(e.cursorX, e.cursorY), e.oncursor && e.oncursor(I.toCanvas(), c, h);
            });
        }, this.showCursor = function(c) {
            var h = I.getElement(), p = h.parentNode;
            c === !1 ? p && p.removeChild(h) : p !== r && r.appendChild(h);
        }, this.moveCursor = function(c, h) {
            I.translate(c - e.cursorHotspotX, h - e.cursorHotspotY), e.cursorX = c, 
            e.cursorY = h;
        }, this.resize = function(c, h, p) {
            v(function() {
                c.resize(h, p), c === S && (t = h, i = p, r.style.width = t + "px", 
                r.style.height = i + "px", f.style.width = t * a + "px", f.style.height = i * a + "px", 
                e.onresize && e.onresize(h, p));
            });
        }, this.drawImage = function(c, h, p, m) {
            v(function() {
                c.drawImage(h, p, m);
            });
        }, this.drawBlob = function(c, h, p, m) {
            var g;
            if (window.createImageBitmap) {
                var E;
                g = v(function() {
                    c.drawImage(h, p, E);
                }, !0), window.createImageBitmap(m).then(function(s) {
                    E = s, g.unblock();
                });
            } else {
                var A = URL.createObjectURL(m);
                g = v(function() {
                    n.width && n.height && c.drawImage(h, p, n), URL.revokeObjectURL(A);
                }, !0);
                var n = new Image();
                n.onload = g.unblock, n.onerror = g.unblock, n.src = A;
            }
        }, this.drawStream = function(c, h, p, m, g) {
            var E;
            window.createImageBitmap ? (E = new o.BlobReader(m, g)).onend = function() {
                e.drawBlob(c, h, p, E.getBlob());
            } : (E = new o.DataURIReader(m, g)).onend = function() {
                e.draw(c, h, p, E.getURI());
            };
        }, this.draw = function(c, h, p, m) {
            var g = v(function() {
                E.width && E.height && c.drawImage(h, p, E);
            }, !0), E = new Image();
            E.onload = g.unblock, E.onerror = g.unblock, E.src = m;
        }, this.play = function(c, h, p, m) {
            var g = document.createElement("video");
            g.type = h, g.src = m, g.addEventListener("play", function() {
                (function E() {
                    c.drawImage(0, 0, g), g.ended || window.setTimeout(E, 20);
                })();
            }, !1), v(g.play);
        }, this.transfer = function(c, h, p, m, g, E, A, n, s) {
            v(function() {
                E.transfer(c, h, p, m, g, A, n, s);
            });
        }, this.put = function(c, h, p, m, g, E, A, n) {
            v(function() {
                E.put(c, h, p, m, g, A, n);
            });
        }, this.copy = function(c, h, p, m, g, E, A, n) {
            v(function() {
                E.copy(c, h, p, m, g, A, n);
            });
        }, this.moveTo = function(c, h, p) {
            v(function() {
                c.moveTo(h, p);
            });
        }, this.lineTo = function(c, h, p) {
            v(function() {
                c.lineTo(h, p);
            });
        }, this.arc = function(c, h, p, m, g, E, A) {
            v(function() {
                c.arc(h, p, m, g, E, A);
            });
        }, this.curveTo = function(c, h, p, m, g, E, A) {
            v(function() {
                c.curveTo(h, p, m, g, E, A);
            });
        }, this.close = function(c) {
            v(function() {
                c.close();
            });
        }, this.rect = function(c, h, p, m, g) {
            v(function() {
                c.rect(h, p, m, g);
            });
        }, this.clip = function(c) {
            v(function() {
                c.clip();
            });
        }, this.strokeColor = function(c, h, p, m, g, E, A, n) {
            v(function() {
                c.strokeColor(h, p, m, g, E, A, n);
            });
        }, this.fillColor = function(c, h, p, m, g) {
            v(function() {
                c.fillColor(h, p, m, g);
            });
        }, this.strokeLayer = function(c, h, p, m, g) {
            v(function() {
                c.strokeLayer(h, p, m, g);
            });
        }, this.fillLayer = function(c, h) {
            v(function() {
                c.fillLayer(h);
            });
        }, this.push = function(c) {
            v(function() {
                c.push();
            });
        }, this.pop = function(c) {
            v(function() {
                c.pop();
            });
        }, this.reset = function(c) {
            v(function() {
                c.reset();
            });
        }, this.setTransform = function(c, h, p, m, g, E, A) {
            v(function() {
                c.setTransform(h, p, m, g, E, A);
            });
        }, this.transform = function(c, h, p, m, g, E, A) {
            v(function() {
                c.transform(h, p, m, g, E, A);
            });
        }, this.setChannelMask = function(c, h) {
            v(function() {
                c.setChannelMask(h);
            });
        }, this.setMiterLimit = function(c, h) {
            v(function() {
                c.setMiterLimit(h);
            });
        }, this.dispose = function(c) {
            v(function() {
                c.dispose();
            });
        }, this.distort = function(c, h, p, m, g, E, A) {
            v(function() {
                c.distort(h, p, m, g, E, A);
            });
        }, this.move = function(c, h, p, m, g) {
            v(function() {
                c.move(h, p, m, g);
            });
        }, this.shade = function(c, h) {
            v(function() {
                c.shade(h);
            });
        }, this.scale = function(c) {
            r.style.transform = r.style.WebkitTransform = r.style.MozTransform = r.style.OTransform = r.style.msTransform = "scale(" + c + "," + c + ")", 
            a = c, f.style.width = t * a + "px", f.style.height = i * a + "px";
        }, this.getScale = function() {
            return a;
        }, this.flatten = function() {
            var c = document.createElement("canvas");
            c.width = S.width, c.height = S.height;
            var h = c.getContext("2d");
            return function p(m, g, E) {
                if (m.width > 0 && m.height > 0) {
                    var A = h.globalAlpha;
                    h.globalAlpha *= m.alpha / 255, h.drawImage(m.getCanvas(), g, E);
                    for (var n = function(w) {
                        var k = [];
                        for (var M in w.children) k.push(w.children[M]);
                        return k.sort(function(x, P) {
                            var b = x.z - P.z;
                            if (b !== 0) return b;
                            var L = x.getElement(), O = P.getElement().compareDocumentPosition(L);
                            return O & Node.DOCUMENT_POSITION_PRECEDING ? -1 : O & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : 0;
                        }), k;
                    }(m), s = 0; s < n.length; s++) {
                        var l = n[s];
                        p(l, g + l.x, E + l.y);
                    }
                    h.globalAlpha = A;
                }
            }(S, 0, 0), c;
        };
    }, o.Display.VisibleLayer = function(e, t) {
        o.Layer.apply(this, [ e, t ]);
        var i = this;
        this.__unique_id = o.Display.VisibleLayer.__next_id++, this.alpha = 255, 
        this.x = 0, this.y = 0, this.z = 0, this.matrix = [ 1, 0, 0, 1, 0, 0 ], 
        this.parent = null, this.children = {};
        var a = i.getCanvas();
        a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px";
        var r = document.createElement("div");
        r.appendChild(a), r.style.width = e + "px", r.style.height = t + "px", r.style.position = "absolute", 
        r.style.left = "0px", r.style.top = "0px", r.style.overflow = "hidden";
        var S = this.resize;
        this.resize = function(u, T) {
            r.style.width = u + "px", r.style.height = T + "px", S(u, T);
        }, this.getElement = function() {
            return r;
        };
        var I = "translate(0px, 0px)", f = "matrix(1, 0, 0, 1, 0, 0)";
        this.translate = function(u, T) {
            i.x = u, i.y = T, I = "translate(" + u + "px," + T + "px)", r.style.transform = r.style.WebkitTransform = r.style.MozTransform = r.style.OTransform = r.style.msTransform = I + " " + f;
        }, this.move = function(u, T, C, d) {
            i.parent !== u && (i.parent && delete i.parent.children[i.__unique_id], 
            i.parent = u, u.children[i.__unique_id] = i, u.getElement().appendChild(r)), 
            i.translate(T, C), i.z = d, r.style.zIndex = d;
        }, this.shade = function(u) {
            i.alpha = u, r.style.opacity = u / 255;
        }, this.dispose = function() {
            i.parent && (delete i.parent.children[i.__unique_id], i.parent = null), 
            r.parentNode && r.parentNode.removeChild(r);
        }, this.distort = function(u, T, C, d, y, v) {
            i.matrix = [ u, T, C, d, y, v ], f = "matrix(" + u + "," + T + "," + C + "," + d + "," + y + "," + v + ")", 
            r.style.transform = r.style.WebkitTransform = r.style.MozTransform = r.style.OTransform = r.style.msTransform = I + " " + f;
        };
    }, o.Display.VisibleLayer.__next_id = 0, (o = o || {}).InputSink = function() {
        var e = this, t = document.createElement("textarea");
        t.style.position = "fixed", t.style.outline = "none", t.style.border = "none", 
        t.style.margin = "0", t.style.padding = "0", t.style.height = "0", t.style.width = "0", 
        t.style.left = "0", t.style.bottom = "0", t.style.resize = "none", t.style.background = "transparent", 
        t.style.color = "transparent", t.addEventListener("keypress", function(i) {
            t.value = "";
        }, !1), t.addEventListener("compositionend", function(i) {
            i.data && (t.value = "");
        }, !1), t.addEventListener("input", function(i) {
            i.data && !i.isComposing && (t.value = "");
        }, !1), t.addEventListener("focus", function() {
            window.setTimeout(function() {
                t.click(), t.select();
            }, 0);
        }, !0), this.focus = function() {
            window.setTimeout(function() {
                t.focus();
            }, 0);
        }, this.getElement = function() {
            return t;
        }, document.addEventListener("keydown", function(i) {
            var a = document.activeElement;
            if (a && a !== document.body) {
                var r = a.getBoundingClientRect();
                if (r.left + r.width > 0 && r.top + r.height > 0) return;
            }
            e.focus();
        }, !0);
    }, (o = o || {}).InputStream = function(e, t) {
        var i = this;
        this.index = t, this.onblob = null, this.onend = null, this.sendAck = function(a, r) {
            e.sendAck(i.index, a, r);
        };
    }, (o = o || {}).IntegerPool = function() {
        var e = this, t = [];
        this.next_int = 0, this.next = function() {
            return t.length > 0 ? t.shift() : e.next_int++;
        }, this.free = function(i) {
            t.push(i);
        };
    }, (o = o || {}).JSONReader = function(e) {
        var t = this, i = new o.StringReader(e), a = "";
        this.getLength = function() {
            return a.length;
        }, this.getJSON = function() {
            return JSON.parse(a);
        }, i.ontext = function(r) {
            a += r, t.onprogress && t.onprogress(r.length);
        }, i.onend = function() {
            t.onend && t.onend();
        }, this.onprogress = null, this.onend = null;
    }, (o = o || {}).Keyboard = function(e) {
        var t = this, i = "_GUAC_KEYBOARD_HANDLED_BY_" + o.Keyboard._nextID++;
        this.onkeydown = null, this.onkeyup = null;
        var a = {
            keyupUnreliable: !1,
            altIsTypableOnly: !1,
            capsLockKeyupUnreliable: !1
        };
        navigator && navigator.platform && (navigator.platform.match(/ipad|iphone|ipod/i) ? a.keyupUnreliable = !0 : navigator.platform.match(/^mac/i) && (a.altIsTypableOnly = !0, 
        a.capsLockKeyupUnreliable = !0));
        var r = function() {
            var b = this;
            this.timestamp = new Date().getTime(), this.defaultPrevented = !1, this.keysym = null, 
            this.reliable = !1, this.getAge = function() {
                return new Date().getTime() - b.timestamp;
            };
        }, S = function(b, L, O, R) {
            r.apply(this), this.keyCode = b, this.keyIdentifier = L, this.key = O, 
            this.location = R, this.keysym = E(O, R) || n(b, R), this.keyupReliable = !a.keyupUnreliable, 
            this.keysym && !g(this.keysym) && (this.reliable = !0), !this.keysym && s(b, L) && (this.keysym = E(L, R, t.modifiers.shift)), 
            (t.modifiers.meta && this.keysym !== 65511 && this.keysym !== 65512 || this.keysym === 65509 && a.capsLockKeyupUnreliable) && (this.keyupReliable = !1);
            var D = !t.modifiers.ctrl && !a.altIsTypableOnly;
            (!t.modifiers.alt && t.modifiers.ctrl || D && t.modifiers.alt || t.modifiers.meta || t.modifiers.hyper) && (this.reliable = !0), 
            c[b] = this.keysym;
        };
        S.prototype = new r();
        var I = function(b) {
            r.apply(this), this.charCode = b, this.keysym = A(b), this.reliable = !0;
        };
        I.prototype = new r();
        var f = function(b, L, O, R) {
            r.apply(this), this.keyCode = b, this.keyIdentifier = L, this.key = O, 
            this.location = R, this.keysym = n(b, R) || E(O, R), t.pressed[this.keysym] || (this.keysym = c[b] || this.keysym), 
            this.reliable = !0;
        };
        f.prototype = new r();
        var u = [], T = {
            8: [ 65288 ],
            9: [ 65289 ],
            12: [ 65291, 65291, 65291, 65461 ],
            13: [ 65293 ],
            16: [ 65505, 65505, 65506 ],
            17: [ 65507, 65507, 65508 ],
            18: [ 65513, 65513, 65027 ],
            19: [ 65299 ],
            20: [ 65509 ],
            27: [ 65307 ],
            32: [ 32 ],
            33: [ 65365, 65365, 65365, 65465 ],
            34: [ 65366, 65366, 65366, 65459 ],
            35: [ 65367, 65367, 65367, 65457 ],
            36: [ 65360, 65360, 65360, 65463 ],
            37: [ 65361, 65361, 65361, 65460 ],
            38: [ 65362, 65362, 65362, 65464 ],
            39: [ 65363, 65363, 65363, 65462 ],
            40: [ 65364, 65364, 65364, 65458 ],
            45: [ 65379, 65379, 65379, 65456 ],
            46: [ 65535, 65535, 65535, 65454 ],
            91: [ 65515 ],
            92: [ 65383 ],
            93: null,
            96: [ 65456 ],
            97: [ 65457 ],
            98: [ 65458 ],
            99: [ 65459 ],
            100: [ 65460 ],
            101: [ 65461 ],
            102: [ 65462 ],
            103: [ 65463 ],
            104: [ 65464 ],
            105: [ 65465 ],
            106: [ 65450 ],
            107: [ 65451 ],
            109: [ 65453 ],
            110: [ 65454 ],
            111: [ 65455 ],
            112: [ 65470 ],
            113: [ 65471 ],
            114: [ 65472 ],
            115: [ 65473 ],
            116: [ 65474 ],
            117: [ 65475 ],
            118: [ 65476 ],
            119: [ 65477 ],
            120: [ 65478 ],
            121: [ 65479 ],
            122: [ 65480 ],
            123: [ 65481 ],
            144: [ 65407 ],
            145: [ 65300 ],
            225: [ 65027 ]
        }, C = {
            Again: [ 65382 ],
            AllCandidates: [ 65341 ],
            Alphanumeric: [ 65328 ],
            Alt: [ 65513, 65513, 65027 ],
            Attn: [ 64782 ],
            AltGraph: [ 65027 ],
            ArrowDown: [ 65364 ],
            ArrowLeft: [ 65361 ],
            ArrowRight: [ 65363 ],
            ArrowUp: [ 65362 ],
            Backspace: [ 65288 ],
            CapsLock: [ 65509 ],
            Cancel: [ 65385 ],
            Clear: [ 65291 ],
            Convert: [ 65313 ],
            Copy: [ 64789 ],
            Crsel: [ 64796 ],
            CrSel: [ 64796 ],
            CodeInput: [ 65335 ],
            Compose: [ 65312 ],
            Control: [ 65507, 65507, 65508 ],
            ContextMenu: [ 65383 ],
            Delete: [ 65535 ],
            Down: [ 65364 ],
            End: [ 65367 ],
            Enter: [ 65293 ],
            EraseEof: [ 64774 ],
            Escape: [ 65307 ],
            Execute: [ 65378 ],
            Exsel: [ 64797 ],
            ExSel: [ 64797 ],
            F1: [ 65470 ],
            F2: [ 65471 ],
            F3: [ 65472 ],
            F4: [ 65473 ],
            F5: [ 65474 ],
            F6: [ 65475 ],
            F7: [ 65476 ],
            F8: [ 65477 ],
            F9: [ 65478 ],
            F10: [ 65479 ],
            F11: [ 65480 ],
            F12: [ 65481 ],
            F13: [ 65482 ],
            F14: [ 65483 ],
            F15: [ 65484 ],
            F16: [ 65485 ],
            F17: [ 65486 ],
            F18: [ 65487 ],
            F19: [ 65488 ],
            F20: [ 65489 ],
            F21: [ 65490 ],
            F22: [ 65491 ],
            F23: [ 65492 ],
            F24: [ 65493 ],
            Find: [ 65384 ],
            GroupFirst: [ 65036 ],
            GroupLast: [ 65038 ],
            GroupNext: [ 65032 ],
            GroupPrevious: [ 65034 ],
            FullWidth: null,
            HalfWidth: null,
            HangulMode: [ 65329 ],
            Hankaku: [ 65321 ],
            HanjaMode: [ 65332 ],
            Help: [ 65386 ],
            Hiragana: [ 65317 ],
            HiraganaKatakana: [ 65319 ],
            Home: [ 65360 ],
            Hyper: [ 65517, 65517, 65518 ],
            Insert: [ 65379 ],
            JapaneseHiragana: [ 65317 ],
            JapaneseKatakana: [ 65318 ],
            JapaneseRomaji: [ 65316 ],
            JunjaMode: [ 65336 ],
            KanaMode: [ 65325 ],
            KanjiMode: [ 65313 ],
            Katakana: [ 65318 ],
            Left: [ 65361 ],
            Meta: [ 65511, 65511, 65512 ],
            ModeChange: [ 65406 ],
            NumLock: [ 65407 ],
            PageDown: [ 65366 ],
            PageUp: [ 65365 ],
            Pause: [ 65299 ],
            Play: [ 64790 ],
            PreviousCandidate: [ 65342 ],
            PrintScreen: [ 65377 ],
            Redo: [ 65382 ],
            Right: [ 65363 ],
            RomanCharacters: null,
            Scroll: [ 65300 ],
            Select: [ 65376 ],
            Separator: [ 65452 ],
            Shift: [ 65505, 65505, 65506 ],
            SingleCandidate: [ 65340 ],
            Super: [ 65515, 65515, 65516 ],
            Tab: [ 65289 ],
            UIKeyInputDownArrow: [ 65364 ],
            UIKeyInputEscape: [ 65307 ],
            UIKeyInputLeftArrow: [ 65361 ],
            UIKeyInputRightArrow: [ 65363 ],
            UIKeyInputUpArrow: [ 65362 ],
            Up: [ 65362 ],
            Undo: [ 65381 ],
            Win: [ 65515 ],
            Zenkaku: [ 65320 ],
            ZenkakuHankaku: [ 65322 ]
        }, d = {
            65027: !0,
            65505: !0,
            65506: !0,
            65507: !0,
            65508: !0,
            65509: !0,
            65511: !0,
            65512: !0,
            65513: !0,
            65514: !0,
            65515: !0,
            65516: !0
        };
        this.modifiers = new o.Keyboard.ModifierState(), this.pressed = {};
        var y = {}, v = {}, c = {}, h = null, p = null, m = function(b, L) {
            return b ? b[L] || b[0] : null;
        }, g = function(b) {
            return b >= 0 && b <= 255 || (4294901760 & b) == 16777216;
        };
        function E(b, L, O) {
            if (!b) return null;
            var R, D = b.indexOf("U+");
            if (D >= 0) {
                var U = b.substring(D + 2);
                R = String.fromCharCode(parseInt(U, 16));
            } else {
                if (b.length !== 1 || L === 3) return m(C[b], L);
                R = b;
            }
            return O === !0 ? R = R.toUpperCase() : O === !1 && (R = R.toLowerCase()), 
            A(R.charCodeAt(0));
        }
        function A(b) {
            return function(L) {
                return L <= 31 || L >= 127 && L <= 159;
            }(b) ? 65280 | b : b >= 0 && b <= 255 ? b : b >= 256 && b <= 1114111 ? 16777216 | b : null;
        }
        function n(b, L) {
            return m(T[b], L);
        }
        var s = function(b, L) {
            if (!L) return !1;
            var O = L.indexOf("U+");
            return O === -1 || b !== parseInt(L.substring(O + 2), 16) || b >= 65 && b <= 90 || b >= 48 && b <= 57;
        };
        this.press = function(b) {
            if (b !== null) {
                if (!t.pressed[b] && (t.pressed[b] = !0, t.onkeydown)) {
                    var L = t.onkeydown(b);
                    return v[b] = L, window.clearTimeout(h), window.clearInterval(p), 
                    d[b] || (h = window.setTimeout(function() {
                        p = window.setInterval(function() {
                            t.onkeyup(b), t.onkeydown(b);
                        }, 50);
                    }, 500)), L;
                }
                return v[b] || !1;
            }
        }, this.release = function(b) {
            t.pressed[b] && (delete t.pressed[b], delete y[b], window.clearTimeout(h), 
            window.clearInterval(p), b !== null && t.onkeyup && t.onkeyup(b));
        }, this.type = function(b) {
            for (var L = 0; L < b.length; L++) {
                var O = A(b.codePointAt ? b.codePointAt(L) : b.charCodeAt(L));
                t.press(O), t.release(O);
            }
        }, this.reset = function() {
            for (var b in t.pressed) t.release(parseInt(b));
            u = [];
        };
        var l = function(b, L, O, R) {
            var D;
            if (O.indexOf(R.keysym) === -1) {
                if (b && L === !1) for (D = 0; D < O.length; D++) t.release(O[D]); else if (!b && L) {
                    for (D = 0; D < O.length; D++) if (t.pressed[O[D]]) return;
                    var U = O[0];
                    R.keysym && (y[U] = !0), t.press(U);
                }
            }
        }, w = function(b, L) {
            var O = o.Keyboard.ModifierState.fromKeyboardEvent(b);
            l(t.modifiers.alt, O.alt, [ 65513, 65514, 65027 ], L), l(t.modifiers.shift, O.shift, [ 65505, 65506 ], L), 
            l(t.modifiers.ctrl, O.ctrl, [ 65507, 65508 ], L), l(t.modifiers.meta, O.meta, [ 65511, 65512 ], L), 
            l(t.modifiers.hyper, O.hyper, [ 65515, 65516 ], L), t.modifiers = O;
        };
        function k() {
            var b, L = M();
            if (!L) return !1;
            do {
                b = L, L = M();
            } while (L !== null);
            return function() {
                for (var O in t.pressed) if (!y[O]) return !1;
                return !0;
            }() && t.reset(), b.defaultPrevented;
        }
        var M = function() {
            var b = u[0];
            if (!b) return null;
            if (!(b instanceof S)) return b instanceof f && !a.keyupUnreliable ? (L = b.keysym) ? (t.release(L), 
            delete c[b.keyCode], b.defaultPrevented = !0, u.shift()) : (t.reset(), 
            b) : u.shift();
            var L = null, O = [];
            if (b.reliable ? (L = b.keysym, O = u.splice(0, 1)) : u[1] instanceof I ? (L = u[1].keysym, 
            O = u.splice(0, 2)) : u[1] && (L = b.keysym, O = u.splice(0, 1)), O.length > 0) {
                if (L) {
                    (function(U) {
                        t.modifiers.ctrl && t.modifiers.alt && (U >= 65 && U <= 90 || U >= 97 && U <= 122 || (U <= 255 || (4278190080 & U) == 16777216) && (t.release(65507), 
                        t.release(65508), t.release(65513), t.release(65514)));
                    })(L);
                    var R = !t.press(L);
                    c[b.keyCode] = L, b.keyupReliable || t.release(L);
                    for (var D = 0; D < O.length; D++) O[D].defaultPrevented = R;
                }
                return b;
            }
            return null;
        }, x = function(b) {
            return "location" in b ? b.location : "keyLocation" in b ? b.keyLocation : 0;
        }, P = function(b) {
            return !b[i] && (b[i] = !0, !0);
        };
        this.listenTo = function(b) {
            b.addEventListener("keydown", function(R) {
                if (t.onkeydown && P(R)) {
                    var D;
                    window.event ? D = window.event.keyCode : R.which && (D = R.which);
                    var U = new S(D, R.keyIdentifier, R.key, x(R));
                    w(R, U), D !== 229 && (u.push(U), k() && R.preventDefault());
                }
            }, !0), b.addEventListener("keypress", function(R) {
                if ((t.onkeydown || t.onkeyup) && P(R)) {
                    var D;
                    window.event ? D = window.event.keyCode : R.which && (D = R.which);
                    var U = new I(D);
                    w(R, U), u.push(U), k() && R.preventDefault();
                }
            }, !0), b.addEventListener("keyup", function(R) {
                if (t.onkeyup && P(R)) {
                    var D;
                    R.preventDefault(), window.event ? D = window.event.keyCode : R.which && (D = R.which);
                    var U = new f(D, R.keyIdentifier, R.key, x(R));
                    w(R, U), u.push(U), k();
                }
            }, !0);
            var L = function(R) {
                (t.onkeydown || t.onkeyup) && P(R) && R.data && !R.isComposing && (b.removeEventListener("compositionend", O, !1), 
                t.type(R.data));
            }, O = function(R) {
                (t.onkeydown || t.onkeyup) && P(R) && R.data && (b.removeEventListener("input", L, !1), 
                t.type(R.data));
            };
            b.addEventListener("input", L, !1), b.addEventListener("compositionend", O, !1);
        }, e && t.listenTo(e);
    }, o.Keyboard._nextID = 0, o.Keyboard.ModifierState = function() {
        this.shift = !1, this.ctrl = !1, this.alt = !1, this.meta = !1, this.hyper = !1;
    }, o.Keyboard.ModifierState.fromKeyboardEvent = function(e) {
        var t = new o.Keyboard.ModifierState();
        return t.shift = e.shiftKey, t.ctrl = e.ctrlKey, t.alt = e.altKey, t.meta = e.metaKey, 
        e.getModifierState && (t.hyper = e.getModifierState("OS") || e.getModifierState("Super") || e.getModifierState("Hyper") || e.getModifierState("Win")), 
        t;
    }, (o = o || {}).Layer = function(e, t) {
        var i = this, a = document.createElement("canvas"), r = a.getContext("2d");
        r.save();
        var S = !0, I = !0, f = 0, u = {
            1: "destination-in",
            2: "destination-out",
            4: "source-in",
            6: "source-atop",
            8: "source-out",
            9: "destination-atop",
            10: "xor",
            11: "destination-over",
            12: "copy",
            14: "source-over",
            15: "lighter"
        }, T = function(d, y) {
            d = d || 0, y = y || 0;
            var v = 64 * Math.ceil(d / 64), c = 64 * Math.ceil(y / 64);
            if (a.width !== v || a.height !== c) {
                var h = null;
                !S && a.width !== 0 && a.height !== 0 && ((h = document.createElement("canvas")).width = Math.min(i.width, d), 
                h.height = Math.min(i.height, y), h.getContext("2d").drawImage(a, 0, 0, h.width, h.height, 0, 0, h.width, h.height));
                var p = r.globalCompositeOperation;
                a.width = v, a.height = c, h && r.drawImage(h, 0, 0, h.width, h.height, 0, 0, h.width, h.height), 
                r.globalCompositeOperation = p, f = 0, r.save();
            } else i.reset();
            i.width = d, i.height = y;
        };
        function C(d, y, v, c) {
            var h, p, m = v + d, g = c + y;
            h = m > i.width ? m : i.width, p = g > i.height ? g : i.height, i.resize(h, p);
        }
        this.autosize = !1, this.width = e, this.height = t, this.getCanvas = function() {
            return a;
        }, this.toCanvas = function() {
            var d = document.createElement("canvas");
            return d.width = i.width, d.height = i.height, d.getContext("2d").drawImage(i.getCanvas(), 0, 0), 
            d;
        }, this.resize = function(d, y) {
            d === i.width && y === i.height || T(d, y);
        }, this.drawImage = function(d, y, v) {
            i.autosize && C(d, y, v.width, v.height), r.drawImage(v, d, y), S = !1;
        }, this.transfer = function(d, y, v, c, h, p, m, g) {
            var E = d.getCanvas();
            if (!(y >= E.width || v >= E.height) && (y + c > E.width && (c = E.width - y), 
            v + h > E.height && (h = E.height - v), c !== 0 && h !== 0)) {
                i.autosize && C(p, m, c, h);
                for (var A = d.getCanvas().getContext("2d").getImageData(y, v, c, h), n = r.getImageData(p, m, c, h), s = 0; s < c * h * 4; s += 4) {
                    var l = new o.Layer.Pixel(A.data[s], A.data[s + 1], A.data[s + 2], A.data[s + 3]), w = new o.Layer.Pixel(n.data[s], n.data[s + 1], n.data[s + 2], n.data[s + 3]);
                    g(l, w), n.data[s] = w.red, n.data[s + 1] = w.green, n.data[s + 2] = w.blue, 
                    n.data[s + 3] = w.alpha;
                }
                r.putImageData(n, p, m), S = !1;
            }
        }, this.put = function(d, y, v, c, h, p, m) {
            var g = d.getCanvas();
            if (!(y >= g.width || v >= g.height) && (y + c > g.width && (c = g.width - y), 
            v + h > g.height && (h = g.height - v), c !== 0 && h !== 0)) {
                i.autosize && C(p, m, c, h);
                var E = d.getCanvas().getContext("2d").getImageData(y, v, c, h);
                r.putImageData(E, p, m), S = !1;
            }
        }, this.copy = function(d, y, v, c, h, p, m) {
            var g = d.getCanvas();
            y >= g.width || v >= g.height || (y + c > g.width && (c = g.width - y), 
            v + h > g.height && (h = g.height - v), c !== 0 && h !== 0 && (i.autosize && C(p, m, c, h), 
            r.drawImage(g, y, v, c, h, p, m, c, h), S = !1));
        }, this.moveTo = function(d, y) {
            I && (r.beginPath(), I = !1), i.autosize && C(d, y, 0, 0), r.moveTo(d, y);
        }, this.lineTo = function(d, y) {
            I && (r.beginPath(), I = !1), i.autosize && C(d, y, 0, 0), r.lineTo(d, y);
        }, this.arc = function(d, y, v, c, h, p) {
            I && (r.beginPath(), I = !1), i.autosize && C(d, y, 0, 0), r.arc(d, y, v, c, h, p);
        }, this.curveTo = function(d, y, v, c, h, p) {
            I && (r.beginPath(), I = !1), i.autosize && C(h, p, 0, 0), r.bezierCurveTo(d, y, v, c, h, p);
        }, this.close = function() {
            r.closePath(), I = !0;
        }, this.rect = function(d, y, v, c) {
            I && (r.beginPath(), I = !1), i.autosize && C(d, y, v, c), r.rect(d, y, v, c);
        }, this.clip = function() {
            r.clip(), I = !0;
        }, this.strokeColor = function(d, y, v, c, h, p, m) {
            r.lineCap = d, r.lineJoin = y, r.lineWidth = v, r.strokeStyle = "rgba(" + c + "," + h + "," + p + "," + m / 255 + ")", 
            r.stroke(), S = !1, I = !0;
        }, this.fillColor = function(d, y, v, c) {
            r.fillStyle = "rgba(" + d + "," + y + "," + v + "," + c / 255 + ")", 
            r.fill(), S = !1, I = !0;
        }, this.strokeLayer = function(d, y, v, c) {
            r.lineCap = d, r.lineJoin = y, r.lineWidth = v, r.strokeStyle = r.createPattern(c.getCanvas(), "repeat"), 
            r.stroke(), S = !1, I = !0;
        }, this.fillLayer = function(d) {
            r.fillStyle = r.createPattern(d.getCanvas(), "repeat"), r.fill(), S = !1, 
            I = !0;
        }, this.push = function() {
            r.save(), f++;
        }, this.pop = function() {
            f > 0 && (r.restore(), f--);
        }, this.reset = function() {
            for (;f > 0; ) r.restore(), f--;
            r.restore(), r.save(), r.beginPath(), I = !1;
        }, this.setTransform = function(d, y, v, c, h, p) {
            r.setTransform(d, y, v, c, h, p);
        }, this.transform = function(d, y, v, c, h, p) {
            r.transform(d, y, v, c, h, p);
        }, this.setChannelMask = function(d) {
            r.globalCompositeOperation = u[d];
        }, this.setMiterLimit = function(d) {
            r.miterLimit = d;
        }, T(e, t), a.style.zIndex = -1;
    }, o.Layer.ROUT = 2, o.Layer.ATOP = 6, o.Layer.XOR = 10, o.Layer.ROVER = 11, 
    o.Layer.OVER = 14, o.Layer.PLUS = 15, o.Layer.RIN = 1, o.Layer.IN = 4, o.Layer.OUT = 8, 
    o.Layer.RATOP = 9, o.Layer.SRC = 12, o.Layer.Pixel = function(e, t, i, a) {
        this.red = e, this.green = t, this.blue = i, this.alpha = a;
    }, (o = o || {}).Mouse = function(e) {
        var t = this;
        this.touchMouseThreshold = 3, this.scrollThreshold = 53, this.PIXELS_PER_LINE = 18, 
        this.PIXELS_PER_PAGE = 16 * this.PIXELS_PER_LINE, this.currentState = new o.Mouse.State(0, 0, !1, !1, !1, !1, !1), 
        this.onmousedown = null, this.onmouseup = null, this.onmousemove = null, 
        this.onmouseout = null;
        var i = 0, a = 0;
        function r(u) {
            u.stopPropagation(), u.preventDefault && u.preventDefault(), u.returnValue = !1;
        }
        function S() {
            i = t.touchMouseThreshold;
        }
        function I(u) {
            var T = u.deltaY || -u.wheelDeltaY || -u.wheelDelta;
            if (T ? u.deltaMode === 1 ? T = u.deltaY * t.PIXELS_PER_LINE : u.deltaMode === 2 && (T = u.deltaY * t.PIXELS_PER_PAGE) : T = u.detail * t.PIXELS_PER_LINE, 
            (a += T) <= -t.scrollThreshold) {
                do {
                    t.onmousedown && (t.currentState.up = !0, t.onmousedown(t.currentState)), 
                    t.onmouseup && (t.currentState.up = !1, t.onmouseup(t.currentState)), 
                    a += t.scrollThreshold;
                } while (a <= -t.scrollThreshold);
                a = 0;
            }
            if (a >= t.scrollThreshold) {
                do {
                    t.onmousedown && (t.currentState.down = !0, t.onmousedown(t.currentState)), 
                    t.onmouseup && (t.currentState.down = !1, t.onmouseup(t.currentState)), 
                    a -= t.scrollThreshold;
                } while (a >= t.scrollThreshold);
                a = 0;
            }
            r(u);
        }
        e.addEventListener("contextmenu", function(u) {
            r(u);
        }, !1), e.addEventListener("mousemove", function(u) {
            r(u), i ? i-- : (t.currentState.fromClientPosition(e, u.clientX, u.clientY), 
            t.onmousemove && t.onmousemove(t.currentState));
        }, !1), e.addEventListener("mousedown", function(u) {
            if (r(u), !i) {
                switch (u.button) {
                  case 0:
                    t.currentState.left = !0;
                    break;

                  case 1:
                    t.currentState.middle = !0;
                    break;

                  case 2:
                    t.currentState.right = !0;
                }
                t.onmousedown && t.onmousedown(t.currentState);
            }
        }, !1), e.addEventListener("mouseup", function(u) {
            if (r(u), !i) {
                switch (u.button) {
                  case 0:
                    t.currentState.left = !1;
                    break;

                  case 1:
                    t.currentState.middle = !1;
                    break;

                  case 2:
                    t.currentState.right = !1;
                }
                t.onmouseup && t.onmouseup(t.currentState);
            }
        }, !1), e.addEventListener("mouseout", function(u) {
            u || (u = window.event);
            for (var T = u.relatedTarget || u.toElement; T; ) {
                if (T === e) return;
                T = T.parentNode;
            }
            r(u), (t.currentState.left || t.currentState.middle || t.currentState.right) && (t.currentState.left = !1, 
            t.currentState.middle = !1, t.currentState.right = !1, t.onmouseup && t.onmouseup(t.currentState)), 
            t.onmouseout && t.onmouseout();
        }, !1), e.addEventListener("selectstart", function(u) {
            r(u);
        }, !1), e.addEventListener("touchmove", S, !1), e.addEventListener("touchstart", S, !1), 
        e.addEventListener("touchend", S, !1), e.addEventListener("DOMMouseScroll", I, !1), 
        e.addEventListener("mousewheel", I, !1), e.addEventListener("wheel", I, !1);
        var f = function() {
            var u = document.createElement("div");
            if (!("cursor" in u.style)) return !1;
            try {
                u.style.cursor = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==) 0 0, auto";
            } catch {
                return !1;
            }
            return /\burl\([^()]*\)\s+0\s+0\b/.test(u.style.cursor || "");
        }();
        this.setCursor = function(u, T, C) {
            if (f) {
                var d = u.toDataURL("image/png");
                return e.style.cursor = "url(" + d + ") " + T + " " + C + ", auto", 
                !0;
            }
            return !1;
        };
    }, o.Mouse.State = function(e, t, i, a, r, S, I) {
        var f = this;
        this.x = e, this.y = t, this.left = i, this.middle = a, this.right = r, 
        this.up = S, this.down = I, this.fromClientPosition = function(u, T, C) {
            f.x = T - u.offsetLeft, f.y = C - u.offsetTop;
            for (var d = u.offsetParent; d && d !== document.body; ) f.x -= d.offsetLeft - d.scrollLeft, 
            f.y -= d.offsetTop - d.scrollTop, d = d.offsetParent;
            if (d) {
                var y = document.body.scrollLeft || document.documentElement.scrollLeft, v = document.body.scrollTop || document.documentElement.scrollTop;
                f.x -= d.offsetLeft - y, f.y -= d.offsetTop - v;
            }
        };
    }, o.Mouse.Touchpad = function(e) {
        var t = this;
        this.scrollThreshold = 20 * (window.devicePixelRatio || 1), this.clickTimingThreshold = 250, 
        this.clickMoveThreshold = 10 * (window.devicePixelRatio || 1), this.currentState = new o.Mouse.State(0, 0, !1, !1, !1, !1, !1), 
        this.onmousedown = null, this.onmouseup = null, this.onmousemove = null;
        var i = 0, a = 0, r = 0, S = 0, I = 0, f = {
            1: "left",
            2: "right",
            3: "middle"
        }, u = !1, T = null;
        e.addEventListener("touchend", function(C) {
            if (C.preventDefault(), u && C.touches.length === 0) {
                var d = new Date().getTime(), y = f[i];
                t.currentState[y] && (t.currentState[y] = !1, t.onmouseup && t.onmouseup(t.currentState), 
                T && (window.clearTimeout(T), T = null)), d - S <= t.clickTimingThreshold && I < t.clickMoveThreshold && (t.currentState[y] = !0, 
                t.onmousedown && t.onmousedown(t.currentState), T = window.setTimeout(function() {
                    t.currentState[y] = !1, t.onmouseup && t.onmouseup(t.currentState), 
                    u = !1;
                }, t.clickTimingThreshold)), T || (u = !1);
            }
        }, !1), e.addEventListener("touchstart", function(C) {
            if (C.preventDefault(), i = Math.min(C.touches.length, 3), T && (window.clearTimeout(T), 
            T = null), !u) {
                u = !0;
                var d = C.touches[0];
                a = d.clientX, r = d.clientY, S = new Date().getTime(), I = 0;
            }
        }, !1), e.addEventListener("touchmove", function(C) {
            C.preventDefault();
            var d = C.touches[0], y = d.clientX - a, v = d.clientY - r;
            if (I += Math.abs(y) + Math.abs(v), i === 1) {
                var c = 1 + I / (new Date().getTime() - S);
                t.currentState.x += y * c, t.currentState.y += v * c, t.currentState.x < 0 ? t.currentState.x = 0 : t.currentState.x >= e.offsetWidth && (t.currentState.x = e.offsetWidth - 1), 
                t.currentState.y < 0 ? t.currentState.y = 0 : t.currentState.y >= e.offsetHeight && (t.currentState.y = e.offsetHeight - 1), 
                t.onmousemove && t.onmousemove(t.currentState), a = d.clientX, r = d.clientY;
            } else if (i === 2) {
                var h;
                Math.abs(v) >= t.scrollThreshold && (h = v > 0 ? "down" : "up", 
                t.currentState[h] = !0, t.onmousedown && t.onmousedown(t.currentState), 
                t.currentState[h] = !1, t.onmouseup && t.onmouseup(t.currentState), 
                a = d.clientX, r = d.clientY);
            }
        }, !1);
    }, o.Mouse.Touchscreen = function(e) {
        var t = this, i = !1, a = null, r = null, S = null, I = null;
        function f(y) {
            t.currentState[y] || (t.currentState[y] = !0, t.onmousedown && t.onmousedown(t.currentState));
        }
        function u(y) {
            t.currentState[y] && (t.currentState[y] = !1, t.onmouseup && t.onmouseup(t.currentState));
        }
        function T(y, v) {
            t.currentState.fromClientPosition(e, y, v), t.onmousemove && t.onmousemove(t.currentState);
        }
        function C(y) {
            var v = y.touches[0] || y.changedTouches[0], c = v.clientX - a, h = v.clientY - r;
            return Math.sqrt(c * c + h * h) >= t.clickMoveThreshold;
        }
        function d() {
            window.clearTimeout(S), window.clearTimeout(I), i = !1;
        }
        this.scrollThreshold = 20 * (window.devicePixelRatio || 1), this.clickTimingThreshold = 250, 
        this.clickMoveThreshold = 16 * (window.devicePixelRatio || 1), this.longPressThreshold = 500, 
        this.currentState = new o.Mouse.State(0, 0, !1, !1, !1, !1, !1), this.onmousedown = null, 
        this.onmouseup = null, this.onmousemove = null, e.addEventListener("touchend", function(y) {
            if (i) if (y.touches.length === 0 && y.changedTouches.length === 1) {
                if (window.clearTimeout(I), u("left"), !C(y) && (y.preventDefault(), 
                !t.currentState.left)) {
                    var v = y.changedTouches[0];
                    T(v.clientX, v.clientY), f("left"), S = window.setTimeout(function() {
                        u("left"), d();
                    }, t.clickTimingThreshold);
                }
            } else d();
        }, !1), e.addEventListener("touchstart", function(y) {
            y.touches.length === 1 ? (y.preventDefault(), function(v) {
                var c = v.touches[0];
                i = !0, a = c.clientX, r = c.clientY;
            }(y), window.clearTimeout(S), I = window.setTimeout(function() {
                var v, c = y.touches[0];
                T(c.clientX, c.clientY), f(v = "right"), u(v), d();
            }, t.longPressThreshold)) : d();
        }, !1), e.addEventListener("touchmove", function(y) {
            if (i) if (C(y) && window.clearTimeout(I), y.touches.length === 1) {
                if (t.currentState.left) {
                    y.preventDefault();
                    var v = y.touches[0];
                    T(v.clientX, v.clientY);
                }
            } else d();
        }, !1);
    }, (o = (o = o || {}) || {}).Object = function(e, t) {
        var i = this, a = {};
        this.index = t, this.onbody = function(r, S, I) {
            var f = function(u) {
                var T = a[u];
                if (!T) return null;
                var C = T.shift();
                return T.length === 0 && delete a[u], C;
            }(I);
            f && f(r, S);
        }, this.onundefine = null, this.requestInputStream = function(r, S) {
            S && function(I, f) {
                var u = a[I];
                u || (u = [], a[I] = u), u.push(f);
            }(r, S), e.requestObjectInputStream(i.index, r);
        }, this.createOutputStream = function(r, S) {
            return e.createObjectOutputStream(i.index, r, S);
        };
    }, o.Object.ROOT_STREAM = "/", o.Object.STREAM_INDEX_MIMETYPE = "application/vnd.glyptodon.guacamole.stream-index+json", 
    (o = o || {}).OnScreenKeyboard = function(e) {
        var t = this, i = {}, a = {}, r = [], S = function(p, m) {
            p.classList ? p.classList.add(m) : p.className += " " + m;
        }, I = function(p, m) {
            p.classList ? p.classList.remove(m) : p.className = p.className.replace(/([^ ]+)[ ]*/g, function(g, E) {
                return E === m ? "" : g;
            });
        }, f = 0, u = function(p, m, g, E) {
            this.width = m, this.height = g, this.scale = function(A) {
                p.style.width = m * A + "px", p.style.height = g * A + "px", E && (p.style.lineHeight = g * A + "px", 
                p.style.fontSize = A + "px");
            };
        }, T = function(p) {
            for (var m = 0; m < p.length; m++) if (!(p[m] in i)) return !1;
            return !0;
        }, C = function(p) {
            var m = t.keys[p];
            if (!m) return null;
            for (var g = m.length - 1; g >= 0; g--) {
                var E = m[g];
                if (T(E.requires)) return E;
            }
            return null;
        }, d = function(p, m) {
            if (!a[p]) {
                S(m, "guac-keyboard-pressed");
                var g = C(p);
                if (g.modifier) {
                    var E = "guac-keyboard-modifier-" + h(g.modifier), A = i[g.modifier];
                    A ? (I(v, E), delete i[g.modifier], t.onkeyup && t.onkeyup(A)) : (S(v, E), 
                    i[g.modifier] = g.keysym, t.onkeydown && t.onkeydown(g.keysym));
                } else t.onkeydown && t.onkeydown(g.keysym);
                a[p] = !0;
            }
        }, y = function(p, m) {
            if (a[p]) {
                I(m, "guac-keyboard-pressed");
                var g = C(p);
                !g.modifier && t.onkeyup && t.onkeyup(g.keysym), a[p] = !1;
            }
        }, v = document.createElement("div");
        v.className = "guac-keyboard", v.onselectstart = v.onmousemove = v.onmouseup = v.onmousedown = function(p) {
            return f && f--, p.stopPropagation(), !1;
        }, this.touchMouseThreshold = 3, this.onkeydown = null, this.onkeyup = null, 
        this.layout = new o.OnScreenKeyboard.Layout(e), this.getElement = function() {
            return v;
        }, this.resize = function(p) {
            for (var m = Math.floor(10 * p / t.layout.width) / 10, g = 0; g < r.length; g++) r[g].scale(m);
        };
        var c = function(p, m) {
            if (m instanceof Array) {
                for (var g = [], E = 0; E < m.length; E++) g.push(new o.OnScreenKeyboard.Key(m[E], p));
                return g;
            }
            return typeof m == "number" ? [ new o.OnScreenKeyboard.Key({
                name: p,
                keysym: m
            }) ] : typeof m == "string" ? [ new o.OnScreenKeyboard.Key({
                name: p,
                title: m
            }) ] : [ new o.OnScreenKeyboard.Key(m, p) ];
        };
        this.keys = function(p) {
            var m = {};
            for (var g in e.keys) m[g] = c(g, p[g]);
            return m;
        }(e.keys);
        var h = function(p) {
            return p.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[^A-Za-z0-9]+/g, "-").toLowerCase();
        };
        (function p(m, g, E) {
            var A, n = document.createElement("div");
            if (E && S(n, "guac-keyboard-" + h(E)), g instanceof Array) for (S(n, "guac-keyboard-group"), 
            A = 0; A < g.length; A++) p(n, g[A]); else if (g instanceof Object) {
                S(n, "guac-keyboard-group");
                var s = Object.keys(g).sort();
                for (A = 0; A < s.length; A++) E = s[A], p(n, g[E], E);
            } else if (typeof g == "number") S(n, "guac-keyboard-gap"), r.push(new u(n, g, g)); else if (typeof g == "string") {
                var l = g;
                l.length === 1 && (l = "0x" + l.charCodeAt(0).toString(16)), S(n, "guac-keyboard-key-container");
                var w = document.createElement("div");
                w.className = "guac-keyboard-key guac-keyboard-key-" + h(l);
                var k = t.keys[g];
                if (k) for (A = 0; A < k.length; A++) {
                    var M = k[A], x = document.createElement("div");
                    x.className = "guac-keyboard-cap", x.textContent = M.title;
                    for (var P = 0; P < M.requires.length; P++) {
                        var b = M.requires[P];
                        S(x, "guac-keyboard-requires-" + h(b)), S(w, "guac-keyboard-uses-" + h(b));
                    }
                    w.appendChild(x);
                }
                n.appendChild(w), r.push(new u(n, t.layout.keyWidths[g] || 1, 1, !0));
                var L = function(O) {
                    O.preventDefault(), f === 0 && y(g, w);
                };
                w.addEventListener("touchstart", function(O) {
                    O.preventDefault(), f = t.touchMouseThreshold, d(g, w);
                }, !0), w.addEventListener("touchend", function(O) {
                    O.preventDefault(), f = t.touchMouseThreshold, y(g, w);
                }, !0), w.addEventListener("mousedown", function(O) {
                    O.preventDefault(), f === 0 && d(g, w);
                }, !0), w.addEventListener("mouseup", L, !0), w.addEventListener("mouseout", L, !0);
            }
            m.appendChild(n);
        })(v, e.layout);
    }, o.OnScreenKeyboard.Layout = function(e) {
        this.language = e.language, this.type = e.type, this.keys = e.keys, this.layout = e.layout, 
        this.width = e.width, this.keyWidths = e.keyWidths || {};
    }, o.OnScreenKeyboard.Key = function(e, t) {
        this.name = t || e.name, this.title = e.title || this.name, this.keysym = e.keysym || function(i) {
            if (!i || i.length !== 1) return null;
            var a = i.charCodeAt(0);
            return a >= 0 && a <= 255 ? a : a >= 256 && a <= 1114111 ? 16777216 | a : null;
        }(this.title), this.modifier = e.modifier, this.requires = e.requires || [];
    }, (o = o || {}).OutputStream = function(e, t) {
        var i = this;
        this.index = t, this.onack = null, this.sendBlob = function(a) {
            e.sendBlob(i.index, a);
        }, this.sendEnd = function() {
            e.endStream(i.index);
        };
    }, (o = o || {}).Parser = function() {
        var e = this, t = "", i = [], a = -1, r = 0;
        this.receive = function(S) {
            for (r > 4096 && a >= r && (t = t.substring(r), a -= r, r = 0), t += S; a < t.length; ) {
                if (a >= r) {
                    var I = t.substring(r, a), f = t.substring(a, a + 1);
                    if (i.push(I), f == ";") {
                        var u = i.shift();
                        e.oninstruction != null && e.oninstruction(u, i), i.length = 0;
                    } else if (f != ",") throw new Error("Illegal terminator.");
                    r = a + 1;
                }
                var T = t.indexOf(".", r);
                if (T == -1) {
                    r = t.length;
                    break;
                }
                var C = parseInt(t.substring(a + 1, T));
                if (isNaN(C)) throw new Error("Non-numeric character in element length.");
                a = (r = T + 1) + C;
            }
        }, this.oninstruction = null;
    }, (o = o || {}).RawAudioFormat = function(e) {
        this.bytesPerSample = e.bytesPerSample, this.channels = e.channels, this.rate = e.rate;
    }, o.RawAudioFormat.parse = function(e) {
        var t, i = null, a = 1;
        if (e.substring(0, 9) === "audio/L8;") e = e.substring(9), t = 1; else {
            if (e.substring(0, 10) !== "audio/L16;") return null;
            e = e.substring(10), t = 2;
        }
        for (var r = e.split(","), S = 0; S < r.length; S++) {
            var I = r[S], f = I.indexOf("=");
            if (f === -1) return null;
            var u = I.substring(0, f), T = I.substring(f + 1);
            switch (u) {
              case "channels":
                a = parseInt(T);
                break;

              case "rate":
                i = parseInt(T);
                break;

              default:
                return null;
            }
        }
        return i === null ? null : new o.RawAudioFormat({
            bytesPerSample: t,
            channels: a,
            rate: i
        });
    }, (o = o || {}).SessionRecording = function(e) {
        var t = this, i = [], a = [], r = 0, S = 0, I = new o.SessionRecording._PlaybackTunnel(), f = new o.Client(I), u = -1, T = null, C = null, d = null;
        f.connect(), f.getDisplay().showCursor(!1), e.oninstruction = function(g, E) {
            var A = new o.SessionRecording._Frame.Instruction(g, E.slice());
            if (a.push(A), r += A.getSize(), g === "sync") {
                var n = parseInt(E[0]), s = new o.SessionRecording._Frame(n, a);
                i.push(s), (i.length === 1 || r >= 16384 && n - S >= 5e3) && (s.keyframe = !0, 
                S = n, r = 0), a = [], t.onprogress && t.onprogress(t.getDuration());
            }
        };
        var y = function(g) {
            return i.length === 0 ? 0 : g - i[0].timestamp;
        }, v = function g(E, A, n) {
            if (E === A) return E;
            var s = Math.floor((E + A) / 2), l = y(i[s].timestamp);
            return n < l && s > E ? g(E, s - 1, n) : n > l && s < A ? g(s + 1, A, n) : s;
        }, c = function(g) {
            for (var E = i[g], A = 0; A < E.instructions.length; A++) {
                var n = E.instructions[A];
                I.receiveInstruction(n.opcode, n.args);
            }
            E.keyframe && !E.clientState && f.exportState(function(s) {
                E.clientState = s;
            });
        }, h = function g(E, A, n) {
            p(), d = window.setTimeout(function() {
                var s;
                for (s = E; s >= 0; s--) {
                    var l = i[s];
                    if (s === u) break;
                    if (l.clientState) {
                        f.importState(l.clientState);
                        break;
                    }
                }
                s++;
                for (var w = new Date().getTime(); s <= E && !(new Date().getTime() - w >= 5); s++) c(s);
                u = s - 1, t.onseek && t.onseek(t.getPosition()), u !== E ? g(E, A, Math.max(n - (new Date().getTime() - w), 0)) : A();
            }, n || 0);
        }, p = function() {
            window.clearTimeout(d);
        }, m = function g() {
            if (u + 1 < i.length) {
                var E = i[u + 1].timestamp - T + C, A = Math.max(E - new Date().getTime(), 0);
                h(u + 1, function() {
                    g();
                }, A);
            } else t.pause();
        };
        this.onprogress = null, this.onplay = null, this.onpause = null, this.onseek = null, 
        this.connect = function(g) {
            e.connect(g);
        }, this.disconnect = function() {
            e.disconnect();
        }, this.getDisplay = function() {
            return f.getDisplay();
        }, this.isPlaying = function() {
            return !!T;
        }, this.getPosition = function() {
            return u === -1 ? 0 : y(i[u].timestamp);
        }, this.getDuration = function() {
            return i.length === 0 ? 0 : y(i[i.length - 1].timestamp);
        }, this.play = function() {
            if (!t.isPlaying() && u + 1 < i.length) {
                t.onplay && t.onplay();
                var g = i[u + 1];
                T = g.timestamp, C = new Date().getTime(), m();
            }
        }, this.seek = function(g, E) {
            if (i.length !== 0) {
                var A = t.isPlaying();
                t.pause(), h(v(0, i.length - 1, g), function() {
                    A && t.play(), E && E();
                });
            }
        }, this.pause = function() {
            p(), t.isPlaying() && (t.onpause && t.onpause(), T = null, C = null);
        };
    }, o.SessionRecording._Frame = function(e, t) {
        this.keyframe = !1, this.timestamp = e, this.instructions = t, this.clientState = null;
    }, o.SessionRecording._Frame.Instruction = function(e, t) {
        var i = this;
        this.opcode = e, this.args = t, this.getSize = function() {
            for (var a = i.opcode.length, r = 0; r < i.args.length; r++) a += i.args[r].length;
            return a;
        };
    }, o.SessionRecording._PlaybackTunnel = function() {
        var e = this;
        this.connect = function(t) {}, this.sendMessage = function(t) {}, this.disconnect = function() {}, 
        this.receiveInstruction = function(t, i) {
            e.oninstruction && e.oninstruction(t, i);
        };
    }, (o = o || {}).Status = function(e, t) {
        var i = this;
        this.code = e, this.message = t, this.isError = function() {
            return i.code < 0 || i.code > 255;
        };
    }, o.Status.Code = {
        SUCCESS: 0,
        UNSUPPORTED: 256,
        SERVER_ERROR: 512,
        SERVER_BUSY: 513,
        UPSTREAM_TIMEOUT: 514,
        UPSTREAM_ERROR: 515,
        RESOURCE_NOT_FOUND: 516,
        RESOURCE_CONFLICT: 517,
        RESOURCE_CLOSED: 518,
        UPSTREAM_NOT_FOUND: 519,
        UPSTREAM_UNAVAILABLE: 520,
        SESSION_CONFLICT: 521,
        SESSION_TIMEOUT: 522,
        SESSION_CLOSED: 523,
        CLIENT_BAD_REQUEST: 768,
        CLIENT_UNAUTHORIZED: 769,
        CLIENT_FORBIDDEN: 771,
        CLIENT_TIMEOUT: 776,
        CLIENT_OVERRUN: 781,
        CLIENT_BAD_TYPE: 783,
        CLIENT_TOO_MANY: 797
    }, o.Status.Code.fromHTTPCode = function(e) {
        switch (e) {
          case 400:
            return o.Status.Code.CLIENT_BAD_REQUEST;

          case 403:
            return o.Status.Code.CLIENT_FORBIDDEN;

          case 404:
            return o.Status.Code.RESOURCE_NOT_FOUND;

          case 429:
            return o.Status.Code.CLIENT_TOO_MANY;

          case 503:
            return o.Status.Code.SERVER_BUSY;
        }
        return o.Status.Code.SERVER_ERROR;
    }, o.Status.Code.fromWebSocketCode = function(e) {
        switch (e) {
          case 1e3:
            return o.Status.Code.SUCCESS;

          case 1006:
          case 1015:
            return o.Status.Code.UPSTREAM_NOT_FOUND;

          case 1001:
          case 1012:
          case 1013:
          case 1014:
            return o.Status.Code.UPSTREAM_UNAVAILABLE;
        }
        return o.Status.Code.SERVER_ERROR;
    }, (o = o || {}).StringReader = function(e) {
        var t = this, i = new o.ArrayBufferReader(e), a = 0, r = 0;
        i.ondata = function(S) {
            var I = function(f) {
                for (var u = "", T = new Uint8Array(f), C = 0; C < T.length; C++) {
                    var d = T[C];
                    a === 0 ? (127 | d) == 127 ? u += String.fromCharCode(d) : (31 | d) == 223 ? (r = 31 & d, 
                    a = 1) : (15 | d) == 239 ? (r = 15 & d, a = 2) : (7 | d) == 247 ? (r = 7 & d, 
                    a = 3) : u += "�" : (63 | d) == 191 ? (r = r << 6 | 63 & d, 
                    --a == 0 && (u += String.fromCharCode(r))) : (a = 0, u += "�");
                }
                return u;
            }(S);
            t.ontext && t.ontext(I);
        }, i.onend = function() {
            t.onend && t.onend();
        }, this.ontext = null, this.onend = null;
    }, (o = o || {}).StringWriter = function(e) {
        var t = this, i = new o.ArrayBufferWriter(e), a = new Uint8Array(8192), r = 0;
        function S(I) {
            var f, u;
            if (I <= 127) f = 0, u = 1; else if (I <= 2047) f = 192, u = 2; else if (I <= 65535) f = 224, 
            u = 3; else {
                if (!(I <= 2097151)) return void S(65533);
                f = 240, u = 4;
            }
            (function(d) {
                if (r + d >= a.length) {
                    var y = new Uint8Array(2 * (r + d));
                    y.set(a), a = y;
                }
                r += d;
            })(u);
            for (var T = r - 1, C = 1; C < u; C++) a[T--] = 128 | 63 & I, I >>= 6;
            a[T] = f | I;
        }
        i.onack = function(I) {
            t.onack && t.onack(I);
        }, this.sendText = function(I) {
            I.length && i.sendData(function(f) {
                for (var u = 0; u < f.length; u++) S(f.charCodeAt(u));
                if (r > 0) {
                    var T = a.subarray(0, r);
                    return r = 0, T;
                }
            }(I));
        }, this.sendEnd = function() {
            i.sendEnd();
        }, this.onack = null;
    }, (o = o || {}).Tunnel = function() {
        this.connect = function(e) {}, this.disconnect = function() {}, this.sendMessage = function(e) {}, 
        this.setState = function(e) {
            e !== this.state && (this.state = e, this.onstatechange && this.onstatechange(e));
        }, this.setUUID = function(e) {
            this.uuid = e, this.onuuid && this.onuuid(e);
        }, this.isConnected = function() {
            return this.state === o.Tunnel.State.OPEN || this.state === o.Tunnel.State.UNSTABLE;
        }, this.state = o.Tunnel.State.CONNECTING, this.receiveTimeout = 15e3, this.unstableThreshold = 1500, 
        this.uuid = null, this.onuuid = null, this.onerror = null, this.onstatechange = null, 
        this.oninstruction = null;
    }, o.Tunnel.INTERNAL_DATA_OPCODE = "", o.Tunnel.State = {
        CONNECTING: 0,
        OPEN: 1,
        CLOSED: 2,
        UNSTABLE: 3
    }, o.HTTPTunnel = function(e, t, i) {
        var a = this, r = e + "?connect", S = e + "?read:", I = e + "?write:", f = 1, u = !1, T = "", C = !!t, d = null, y = null, v = null, c = i || {};
        function h(l, w) {
            for (var k in w) l.setRequestHeader(k, w[k]);
        }
        function p() {
            window.clearTimeout(d), window.clearTimeout(y), a.state === o.Tunnel.State.UNSTABLE && a.setState(o.Tunnel.State.OPEN), 
            d = window.setTimeout(function() {
                m(new o.Status(o.Status.Code.UPSTREAM_TIMEOUT, "Server timeout."));
            }, a.receiveTimeout), y = window.setTimeout(function() {
                a.setState(o.Tunnel.State.UNSTABLE);
            }, a.unstableThreshold);
        }
        function m(l) {
            window.clearTimeout(d), window.clearTimeout(y), window.clearInterval(v), 
            a.state !== o.Tunnel.State.CLOSED && (l.code !== o.Status.Code.SUCCESS && a.onerror && (a.state !== o.Tunnel.State.CONNECTING && l.code === o.Status.Code.RESOURCE_NOT_FOUND || a.onerror(l)), 
            u = !1, a.setState(o.Tunnel.State.CLOSED));
        }
        function g() {
            if (a.isConnected()) if (T.length > 0) {
                u = !0;
                var l = new XMLHttpRequest();
                l.open("POST", I + a.uuid), l.withCredentials = C, h(l, c), l.setRequestHeader("Content-type", "application/octet-stream"), 
                l.onreadystatechange = function() {
                    l.readyState === 4 && (p(), l.status !== 200 ? E(l) : g());
                }, l.send(T), T = "";
            } else u = !1;
        }
        function E(l) {
            var w = parseInt(l.getResponseHeader("Guacamole-Status-Code"));
            if (w) {
                var k = l.getResponseHeader("Guacamole-Error-Message");
                m(new o.Status(w, k));
            } else l.status ? m(new o.Status(o.Status.Code.fromHTTPCode(l.status), l.statusText)) : m(new o.Status(o.Status.Code.UPSTREAM_NOT_FOUND));
        }
        function A(l) {
            var w = null, k = null, M = 0, x = -1, P = 0, b = new Array();
            function L() {
                if (a.isConnected()) {
                    if (!(l.readyState < 2)) {
                        var O;
                        try {
                            O = l.status;
                        } catch {
                            O = 200;
                        }
                        if (k || O !== 200 || (k = s()), l.readyState === 3 || l.readyState === 4) {
                            if (p(), f === 1 && (l.readyState !== 3 || w ? l.readyState === 4 && w && clearInterval(w) : w = setInterval(L, 30)), 
                            l.status === 0) return void a.disconnect();
                            if (l.status !== 200) return void E(l);
                            var R;
                            try {
                                R = l.responseText;
                            } catch {
                                return;
                            }
                            for (;x < R.length; ) {
                                if (x >= P) {
                                    var D = R.substring(P, x), U = R.substring(x, x + 1);
                                    if (b.push(D), U === ";") {
                                        var ct = b.shift();
                                        a.oninstruction && a.oninstruction(ct, b), 
                                        b.length = 0;
                                    }
                                    P = x + 1;
                                }
                                var H = R.indexOf(".", P);
                                if (H === -1) {
                                    P = R.length;
                                    break;
                                }
                                var V = parseInt(R.substring(x + 1, H));
                                if (V === 0) {
                                    w && clearInterval(w), l.onreadystatechange = null, 
                                    l.abort(), k && A(k);
                                    break;
                                }
                                x = (P = H + 1) + V;
                            }
                        }
                    }
                } else w !== null && clearInterval(w);
            }
            l.onreadystatechange = f === 1 ? function() {
                l.readyState === 3 && ++M >= 2 && (f = 0, l.onreadystatechange = L), 
                L();
            } : L, L();
        }
        this.sendMessage = function() {
            if (a.isConnected() && arguments.length !== 0) {
                for (var l = k(arguments[0]), w = 1; w < arguments.length; w++) l += "," + k(arguments[w]);
                T += l += ";", u || g();
            }
            function k(M) {
                var x = new String(M);
                return x.length + "." + x;
            }
        };
        var n = 0;
        function s() {
            var l = new XMLHttpRequest();
            return l.open("GET", S + a.uuid + ":" + n++), l.withCredentials = C, 
            h(l, c), l.send(null), l;
        }
        this.connect = function(l) {
            p(), a.setState(o.Tunnel.State.CONNECTING);
            var w = new XMLHttpRequest();
            w.onreadystatechange = function() {
                w.readyState === 4 && (w.status === 200 ? (p(), a.setUUID(w.responseText), 
                a.setState(o.Tunnel.State.OPEN), v = setInterval(function() {
                    a.sendMessage("nop");
                }, 500), A(s())) : E(w));
            }, w.open("POST", r, !0), w.withCredentials = C, h(w, c), w.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8"), 
            w.send(l);
        }, this.disconnect = function() {
            m(new o.Status(o.Status.Code.SUCCESS, "Manually closed."));
        };
    }, o.HTTPTunnel.prototype = new o.Tunnel(), o.WebSocketTunnel = function(e) {
        var t = this, i = null, a = null, r = null, S = null;
        if (e.substring(0, 3) !== "ws:" && e.substring(0, 4) !== "wss:") {
            var I = {
                "http:": "ws:",
                "https:": "wss:"
            }[window.location.protocol];
            if (e.substring(0, 1) === "/") e = I + "//" + window.location.host + e; else {
                var f = window.location.pathname.lastIndexOf("/"), u = window.location.pathname.substring(0, f + 1);
                e = I + "//" + window.location.host + u + e;
            }
        }
        function T() {
            window.clearTimeout(a), window.clearTimeout(r), t.state === o.Tunnel.State.UNSTABLE && t.setState(o.Tunnel.State.OPEN), 
            a = window.setTimeout(function() {
                C(new o.Status(o.Status.Code.UPSTREAM_TIMEOUT, "Server timeout."));
            }, t.receiveTimeout), r = window.setTimeout(function() {
                t.setState(o.Tunnel.State.UNSTABLE);
            }, t.unstableThreshold);
        }
        function C(d) {
            window.clearTimeout(a), window.clearTimeout(r), window.clearInterval(S), 
            t.state !== o.Tunnel.State.CLOSED && (d.code !== o.Status.Code.SUCCESS && t.onerror && t.onerror(d), 
            t.setState(o.Tunnel.State.CLOSED), i.close());
        }
        this.sendMessage = function(d) {
            if (t.isConnected() && arguments.length !== 0) {
                for (var y = c(arguments[0]), v = 1; v < arguments.length; v++) y += "," + c(arguments[v]);
                y += ";", i.send(y);
            }
            function c(h) {
                var p = new String(h);
                return p.length + "." + p;
            }
        }, this.connect = function(d) {
            T(), t.setState(o.Tunnel.State.CONNECTING), (i = new WebSocket(e + "?" + d, "guacamole")).onopen = function(y) {
                T(), S = setInterval(function() {
                    t.sendMessage(o.Tunnel.INTERNAL_DATA_OPCODE, "ping", new Date().getTime());
                }, 500);
            }, i.onclose = function(y) {
                y.reason ? C(new o.Status(parseInt(y.reason), y.reason)) : y.code ? C(new o.Status(o.Status.Code.fromWebSocketCode(y.code))) : C(new o.Status(o.Status.Code.UPSTREAM_NOT_FOUND));
            }, i.onmessage = function(y) {
                T();
                var v, c = y.data, h = 0, p = [];
                do {
                    var m = c.indexOf(".", h);
                    m !== -1 ? v = (h = m + 1) + parseInt(c.substring(v + 1, m)) : C(new o.Status(o.Status.Code.SERVER_ERROR, "Incomplete instruction."));
                    var g = c.substring(h, v), E = c.substring(v, v + 1);
                    if (p.push(g), E === ";") {
                        var A = p.shift();
                        t.uuid === null && (A === o.Tunnel.INTERNAL_DATA_OPCODE && t.setUUID(p[0]), 
                        t.setState(o.Tunnel.State.OPEN)), A !== o.Tunnel.INTERNAL_DATA_OPCODE && t.oninstruction && t.oninstruction(A, p), 
                        p.length = 0;
                    }
                    h = v + 1;
                } while (h < c.length);
            };
        }, this.disconnect = function() {
            C(new o.Status(o.Status.Code.SUCCESS, "Manually closed."));
        };
    }, o.WebSocketTunnel.prototype = new o.Tunnel(), o.ChainedTunnel = function(e) {
        for (var t, i = this, a = [], r = null, S = 0; S < arguments.length; S++) a.push(arguments[S]);
        function I(f) {
            i.disconnect = f.disconnect, i.sendMessage = f.sendMessage;
            var u = function(C) {
                if (C && C.code === o.Status.Code.UPSTREAM_TIMEOUT) return a = [], 
                null;
                var d = a.shift();
                return d && (f.onerror = null, f.oninstruction = null, f.onstatechange = null, 
                I(d)), d;
            };
            function T() {
                f.onstatechange = i.onstatechange, f.oninstruction = i.oninstruction, 
                f.onerror = i.onerror, f.onuuid = i.onuuid, f.uuid && i.setUUID(f.uuid), 
                r = f;
            }
            f.onstatechange = function(C) {
                switch (C) {
                  case o.Tunnel.State.OPEN:
                    T(), i.onstatechange && i.onstatechange(C);
                    break;

                  case o.Tunnel.State.CLOSED:
                    !u() && i.onstatechange && i.onstatechange(C);
                }
            }, f.oninstruction = function(C, d) {
                T(), i.oninstruction && i.oninstruction(C, d);
            }, f.onerror = function(C) {
                !u(C) && i.onerror && i.onerror(C);
            }, f.connect(t);
        }
        this.connect = function(f) {
            t = f;
            var u = r || a.shift();
            u ? I(u) : i.onerror && i.onerror(o.Status.Code.SERVER_ERROR, "No tunnels to try.");
        };
    }, o.ChainedTunnel.prototype = new o.Tunnel(), o.StaticHTTPTunnel = function(e, t, i) {
        var a = this, r = null, S = i || {};
        this.sendMessage = function(I) {}, this.connect = function(I) {
            a.disconnect(), a.setState(o.Tunnel.State.CONNECTING), (r = new XMLHttpRequest()).open("GET", e), 
            r.withCredentials = !!t, function(T, C) {
                for (var d in C) T.setRequestHeader(d, C[d]);
            }(r, S), r.responseType = "text", r.send(null);
            var f = 0, u = new o.Parser();
            u.oninstruction = function(T, C) {
                a.oninstruction && a.oninstruction(T, C);
            }, r.onreadystatechange = function() {
                if (r.readyState === 3 || r.readyState === 4) {
                    a.setState(o.Tunnel.State.OPEN);
                    var T = r.responseText, C = T.length;
                    f < C && (u.receive(T.substring(f)), f = C);
                }
                r.readyState === 4 && a.disconnect();
            }, r.onerror = function() {
                a.onerror && a.onerror(new o.Status(o.Status.Code.fromHTTPCode(r.status), r.statusText)), 
                a.disconnect();
            };
        }, this.disconnect = function() {
            r && (r.abort(), r = null), a.setState(o.Tunnel.State.CLOSED);
        };
    }, o.StaticHTTPTunnel.prototype = new o.Tunnel(), (o = o || {}).API_VERSION = "1.3.0", 
    (o = o || {}).VideoPlayer = function() {
        this.sync = function() {};
    }, o.VideoPlayer.isSupportedType = function(e) {
        return !1;
    }, o.VideoPlayer.getSupportedTypes = function() {
        return [];
    }, o.VideoPlayer.getInstance = function(e, t, i) {
        return null;
    };
    const _ = o, N = {
        install: e => {
            N.getLocalClipboard().then(t => N.cache = t), window.addEventListener("load", N.update(e), !0), 
            window.addEventListener("copy", N.update(e)), window.addEventListener("cut", N.update(e)), 
            window.addEventListener("focus", t => {
                t.target === window && N.update(e)();
            }, !0);
        },
        update: e => () => {
            N.getLocalClipboard().then(t => {
                N.cache = t, N.setRemoteClipboard(e);
            });
        },
        newUpdate: e => () => {
            N.getLocalClipboard().then(t => {
                N.cache = t, N.setRemoteClipboard(e);
            });
        },
        setRemoteClipboard: e => {
            if (!N.cache) return;
            let t;
            const i = e.createClipboardStream(N.cache.type);
            typeof N.cache.data == "string" ? (t = new _.StringWriter(i), t.sendText(N.cache.data), 
            t.sendEnd()) : (t = new _.BlobWriter(i), t.oncomplete = function() {
                t.sendEnd();
            }, t.sendBlob(N.cache.data));
        },
        getLocalClipboard: async () => {
            if (navigator.clipboard && navigator.clipboard.readText) return {
                type: "text/plain",
                data: await navigator.clipboard.readText()
            };
        },
        setLocalClipboard: async e => {
            navigator.clipboard && navigator.clipboard.writeText && e.type === "text/plain" && await navigator.clipboard.writeText(e.data);
        },
        onClipboard: (e, t) => {
            let i;
            if (/^text\//.exec(t)) {
                i = new _.StringReader(e);
                let a = "";
                i.ontext = r => {
                    a += r;
                }, i.onend = () => {
                    N.setLocalClipboard({
                        type: t,
                        data: a
                    });
                };
            } else i = new _.BlobReader(e, t), i.onend = () => {
                N.setLocalClipboard({
                    type: t,
                    data: i.getBlob()
                });
            };
        }
    }, K = function(e) {
        var t = this;
        this.touchMouseThreshold = 3, this.scrollThreshold = 53, this.PIXELS_PER_LINE = 18, 
        this.PIXELS_PER_PAGE = 16 * this.PIXELS_PER_LINE, this.currentState = new _.Mouse.State(0, 0, !1, !1, !1, !1, !1), 
        this.onmousedown = null, this.onmouseup = null, this.onmousemove = null, 
        this.onmouseout = null;
        var i = 0, a = 0;
        function r(u) {
            u.stopPropagation(), u.preventDefault && u.preventDefault(), u.returnValue = !1;
        }
        function S() {
            i = t.touchMouseThreshold;
        }
        function I(u) {
            var T = u.deltaY || -u.wheelDeltaY || -u.wheelDelta;
            if (T ? u.deltaMode === 1 ? T = u.deltaY * t.PIXELS_PER_LINE : u.deltaMode === 2 && (T = u.deltaY * t.PIXELS_PER_PAGE) : T = u.detail * t.PIXELS_PER_LINE, 
            (a += T) <= -t.scrollThreshold) {
                do {
                    t.onmousedown && (t.currentState.up = !0, t.onmousedown(t.currentState)), 
                    t.onmouseup && (t.currentState.up = !1, t.onmouseup(t.currentState)), 
                    a += t.scrollThreshold;
                } while (a <= -t.scrollThreshold);
                a = 0;
            }
            if (a >= t.scrollThreshold) {
                do {
                    t.onmousedown && (t.currentState.down = !0, t.onmousedown(t.currentState)), 
                    t.onmouseup && (t.currentState.down = !1, t.onmouseup(t.currentState)), 
                    a -= t.scrollThreshold;
                } while (a >= t.scrollThreshold);
                a = 0;
            }
            r(u);
        }
        e.addEventListener("contextmenu", function(u) {
            r(u);
        }, !1), e.addEventListener("mousemove", function(u) {
            i ? i-- : (t.currentState.fromClientPosition(e, u.clientX, u.clientY), 
            t.onmousemove && t.onmousemove(t.currentState));
        }, !1), e.addEventListener("mousedown", function(u) {
            if (r(u), !i) {
                switch (u.button) {
                  case 0:
                    t.currentState.left = !0;
                    break;

                  case 1:
                    t.currentState.middle = !0;
                    break;

                  case 2:
                    t.currentState.right = !0;
                }
                t.onmousedown && t.onmousedown(t.currentState);
            }
        }, !1), e.addEventListener("mouseup", function(u) {
            if (r(u), !i) {
                switch (u.button) {
                  case 0:
                    t.currentState.left = !1;
                    break;

                  case 1:
                    t.currentState.middle = !1;
                    break;

                  case 2:
                    t.currentState.right = !1;
                }
                t.onmouseup && t.onmouseup(t.currentState);
            }
        }, !1), e.addEventListener("mouseout", function(u) {
            u || (u = window.event);
            for (var T = u.relatedTarget || u.toElement; T; ) {
                if (T === e) return;
                T = T.parentNode;
            }
            r(u), (t.currentState.left || t.currentState.middle || t.currentState.right) && (t.currentState.left = !1, 
            t.currentState.middle = !1, t.currentState.right = !1, t.onmouseup && t.onmouseup(t.currentState)), 
            t.onmouseout && t.onmouseout();
        }, !1), e.addEventListener("selectstart", function(u) {
            r(u);
        }, !1), e.addEventListener("touchmove", S, !1), e.addEventListener("touchstart", S, !1), 
        e.addEventListener("touchend", S, !1), e.addEventListener("DOMMouseScroll", I, !1), 
        e.addEventListener("mousewheel", I, !1), e.addEventListener("wheel", I, !1);
        var f = function() {
            var u = document.createElement("div");
            if (!("cursor" in u.style)) return !1;
            try {
                u.style.cursor = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==) 0 0, auto";
            } catch {
                return !1;
            }
            return /\burl\([^()]*\)\s+0\s+0\b/.test(u.style.cursor || "");
        }();
        this.setCursor = function(u, T, C) {
            if (f) {
                var d = u.toDataURL("image/png");
                return e.style.cursor = "url(" + d + ") " + T + " " + C + ", auto", 
                !0;
            }
            return !1;
        };
    };
    K.State = _.Mouse.State, K.Touchpad = _.Mouse.Touchpad, K.Touchscreen = _.Mouse.Touchscreen;
    const et = K, G = "IDLE", nt = "CONNECTING", rt = "WAITING", W = "CONNECTED", ot = "DISCONNECTED", it = "CLIENT_ERROR", at = "TUNNEL_ERROR";
    _.Mouse = et;
    const st = {
        name: "GuacClient",
        props: {
            guacId: {
                type: String,
                require: !0
            },
            podName: {
                type: String
            },
            resetGuac: {
                type: Boolean,
                default: !1
            },
            outWidth: {
                type: Number,
                default: 800
            },
            outHeight: {
                type: Number,
                default: 800
            },
            namespace: {
                type: String,
                default: ""
            },
            webUrl: {
                type: String,
                default: ""
            }
        },
        emits: [ "finishResetGuac" ],
        data: () => ({
            connected: !1,
            currentAdjustedHeight: null,
            client: null,
            keyboard: null,
            mouse: null,
            lastEvent: null,
            connectionState: G,
            errorMessage: "",
            arguments: {},
            storedClients: {},
            cropSrc: "",
            loadGuac: !1
        }),
        computed: {
            protocol() {
                return window.atob(this.guacId).split("\0")[1];
            },
            display() {
                return this.client == null ? null : this.client.getDisplay();
            }
        },
        watch: {
            connectionState() {},
            guacId: {
                immediate: !0,
                handler: function(e) {
                    e && this.connected && (this.attachGuacamole(), this.loadGuac = !0);
                }
            },
            outWidth: {
                handler() {
                    this.resize();
                },
                immediate: !0
            },
            outHeight: {
                handler(e) {
                    this.resize();
                },
                immediate: !0
            }
        },
        mounted() {
            if (this.guacId && !this.connected) {
                this.connected = !0;
                const e = this.$refs.display;
                e.addEventListener("contextmenu", t => {
                    t.stopPropagation(), t.preventDefault && t.preventDefault(), 
                    e.focus(), t.returnValue = !1;
                }), this.mouse = new _.Mouse(e), this.mouse.onmouseout = () => {
                    this.display && this.display.showCursor(!1);
                }, e.onclick = () => {
                    e.focus();
                }, e.onfocus = () => {
                    e.className = "focus";
                }, e.onblur = () => {
                    e.className = "";
                }, this.mouse.onmousedown = this.mouse.onmouseup = this.mouse.onmousemove = this.handleMouseState, 
                this.keyboard = new _.Keyboard(e), this.attachGuacamole();
            }
            window.onunload = () => {
                for (let e in this.storedClients) this.storedClients[e].disconnect();
            };
        },
        methods: {
            closeLoading() {
                this.loadGuac = !1;
            },
            send(e) {
                if (this.client) for (const t of e.data) this.client.sendKeyEvent(1, t.charCodeAt(0));
            },
            copy(e) {
                this.client && (N.cache = {
                    type: "text/plain",
                    data: e.data
                }, N.setRemoteClipboard(this.client));
            },
            handleMouseState(e) {
                const t = Object.assign({}, e, {
                    x: e.x / this.display.getScale(),
                    y: e.y / this.display.getScale()
                });
                this.client.sendMouseState(t);
            },
            resize(e) {
                let t = this.outWidth, i = this.outHeight;
                setTimeout(() => {
                    if (t === this.outWidth && i === this.outHeight || e === 1) {
                        const a = this.$refs.viewport;
                        if (!a || !a.offsetWidth) return;
                        let r = 1, S = this.outWidth > 960 ? this.outWidth : a.clientWidth * r, I = this.outHeight || a.clientHeight * r;
                        this.display.getWidth() === S && this.display.getHeight() === I || (this.protocol === "1" ? (async (f, u, T, C) => await B.post({
                            showLoading: !1,
                            url: "/exp/env/resize-vnc",
                            data: {
                                serviceInstanceName: f,
                                width: u,
                                height: T,
                                namespace: C
                            }
                        }))(this.podName, Math.floor(a.clientWidth * r) - 4, Math.floor(a.clientHeight * r), this.namespace).then(() => {
                            this.client.sendSize(S, I);
                        }) : this.client.sendSize(S, I)), setTimeout(() => {
                            this.display.scale(1);
                        }, 100);
                    }
                }, 500);
            },
            attachGuacamole() {
                if (this.resetGuac && (delete this.storedClients[this.guacId], this.$emit("finishResetGuac")), 
                this.guacId in this.storedClients) {
                    this.display.scale(0), this.uninstallKeyboard();
                    const e = this.$refs.display;
                    e.innerHTML = "", this.client = this.storedClients[this.guacId], 
                    N.install(this.client), this.installKeyboard(), e.appendChild(this.display.getElement()), 
                    setTimeout(() => {
                        this.resize(), e.focus(), this.closeLoading();
                    }, 500);
                } else this.connectGuacmole(this.guacId), this.storedClients[this.guacId] = this.client;
            },
            connectGuacmole(e) {
                let t;
                window.WebSocket ? t = new _.ChainedTunnel(new _.WebSocketTunnel("ws://" + this.webUrl + "/guac/websocket-tunnel")) : this.mmsg({
                    text: "当前浏览器不被支持",
                    variant: "error",
                    autoHideDelay: 2e3
                }), this.client && (this.display.scale(0), this.uninstallKeyboard()), 
                this.client = new _.Client(t), this.$nextTick(() => {
                    N.install(this.client);
                }), this.installKeyboard(), this.client.onerror = () => {
                    this.guacId && this.guacId in this.storedClients && (this.storedClients[this.guacId].disconnect(), 
                    delete this.storedClients[this.guacId]);
                }, this.client.onargv = (I, f, u) => {
                    if (f !== "text/plain") return;
                    const T = new _.StringReader(I);
                    let C = "";
                    T.ontext = d => {
                        C += d;
                    }, T.onend = () => {
                        this.client.createArgumentValueStream("text/plain", u).onack = d => {
                            d.isError() || (this.arguments[u] = C);
                        };
                    };
                }, this.client.onclipboard = N.onClipboard;
                const i = this.$refs.display;
                i.appendChild(this.display.getElement());
                const a = this.outWidth, r = this.outHeight;
                var S = "GUAC_ID=" + e + "&GUAC_WIDTH=" + Math.floor(a) + "&GUAC_HEIGHT=" + Math.floor(r);
                this.client.connect(S), this.setFocus(), setTimeout(() => {
                    this.resize(1), i.focus(), this.closeLoading();
                }, 1e3);
            },
            setFocus() {
                this.$refs.display.focus();
            },
            getImage() {
                if (this.client) {
                    let e = "";
                    e = this.client.getDisplay().getElement().children[0].children[0].children.length === 1 ? this.client.getDisplay().getElement().children[0].children[0].children[0].toDataURL() : this.client.getDisplay().getElement().children[0].children[0].children[1].children[0].toDataURL(), 
                    this.cropSrc = e;
                }
                return this.cropSrc;
            },
            connect() {
                let e;
                window.WebSocket ? e = new _.ChainedTunnel(new _.WebSocketTunnel("ws://" + this.webUrl + "/guac/websocket-tunnel")) : this.mmsg({
                    text: "当前浏览器不被支持",
                    variant: "error",
                    autoHideDelay: 2e3
                }), this.client && (this.display.scale(0), this.uninstallKeyboard()), 
                this.client = new _.Client(e), this.$nextTick(() => {
                    N.install(this.client);
                }), e.onerror = S => {
                    this.connectionState = at;
                }, e.onstatechange = S => {
                    switch (S) {
                      case _.Tunnel.State.CONNECTING:
                        this.connectionState = nt;
                        break;

                      case _.Tunnel.State.OPEN:
                        this.connectionState = W;
                        break;

                      case _.Tunnel.State.UNSTABLE:
                        break;

                      case _.Tunnel.State.CLOSED:
                        this.connectionState = ot;
                    }
                }, this.client.onstatechange = S => {
                    switch (S) {
                      case 0:
                        this.connectionState = G;
                        break;

                      case 1:
                        break;

                      case 2:
                        this.connectionState = rt;
                        break;

                      case 3:
                        this.connectionState = W, N.setRemoteClipboard(this.client);
                    }
                }, this.client.onerror = S => {
                    this.client.disconnect(), this.errorMessage = S.message, this.connectionState = it;
                }, this.client.onsync = () => {}, this.client.onargv = (S, I, f) => {
                    if (I !== "text/plain") return;
                    const u = new _.StringReader(S);
                    let T = "";
                    u.ontext = C => {
                        T += C;
                    }, u.onend = () => {
                        this.client.createArgumentValueStream("text/plain", f).onack = C => {
                            C.isError() || (this.arguments[f] = T);
                        };
                    };
                }, this.client.onclipboard = N.onClipboard, this.display = this.client.getDisplay();
                const t = this.$refs.display;
                t.appendChild(this.display.getElement()), t.addEventListener("contextmenu", S => {
                    S.stopPropagation(), S.preventDefault && S.preventDefault(), 
                    S.returnValue = !1;
                }), this.$refs.viewport;
                const i = this.outWidth, a = this.outHeight;
                var r = "GUAC_ID=" + this.guacId + "&GUAC_WIDTH=" + Math.floor(i) + "&GUAC_HEIGHT=" + Math.floor(a);
                this.client.connect(r), window.onunload = () => this.client.disconnect(), 
                this.mouse = new _.Mouse(t), this.mouse.onmouseout = () => {
                    this.display && this.display.showCursor(!1);
                }, t.onclick = () => {
                    t.focus();
                }, t.onfocus = () => {
                    t.className = "focus";
                }, t.onblur = () => {
                    t.className = "";
                }, this.keyboard = new _.Keyboard(t), this.installKeyboard(), this.mouse.onmousedown = this.mouse.onmouseup = this.mouse.onmousemove = this.handleMouseState, 
                setTimeout(() => {
                    this.resize(1), t.focus(), this.closeLoading();
                }, 500);
            },
            installKeyboard() {
                this.keyboard.onkeydown = e => {
                    this.client.sendKeyEvent(1, e);
                }, this.keyboard.onkeyup = e => {
                    this.client.sendKeyEvent(0, e);
                };
            },
            uninstallKeyboard() {
                this.keyboard.onkeydown = this.keyboard.onkeyup = () => {};
            },
            uuidGenerator() {
                var e = "0123456789abcdef";
                return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g, function() {
                    return e.charAt(Math.floor(16 * Math.random()));
                });
            }
        }
    }, ut = {
        class: "viewport",
        ref: "viewport"
    }, lt = {
        ref: "display",
        class: "display",
        tabindex: "0"
    };
    z = yt(st, [ [ "render", function(e, t, i, a, r, S) {
        const I = mt;
        return ht((ft(), pt("div", ut, [ gt("div", lt, null, 512) ])), [ [ I, r.loadGuac ] ]);
    } ], [ "__scopeId", "data-v-0bc39818" ] ]), J = Object.defineProperty({
        __proto__: null,
        default: z
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    z as G,
    wt as __tla,
    X as a,
    Y as b,
    q as c,
    j as d,
    $ as e,
    J as f,
    Q as g,
    Z as o,
    tt as r
};