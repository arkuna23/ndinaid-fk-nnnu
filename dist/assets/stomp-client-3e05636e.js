import {
    __tla as w
} from "./index-6c08ea4c.js";

let p, y, H = Promise.all([ (() => {
    try {
        return w;
    } catch {}
})() ]).then(async () => {
    const b = `
`, k = "\0";
    class m {
        constructor(e) {
            const {
                command: s,
                headers: t,
                body: i,
                binaryBody: o,
                escapeHeaderValues: a,
                skipContentLengthHeader: r
            } = e;
            this.command = s, this.headers = Object.assign({}, t || {}), o ? (this._binaryBody = o, 
            this.isBinaryBody = !0) : (this._body = i || "", this.isBinaryBody = !1), 
            this.escapeHeaderValues = a || !1, this.skipContentLengthHeader = r || !1;
        }
        get body() {
            return !this._body && this.isBinaryBody && (this._body = new TextDecoder().decode(this._binaryBody)), 
            this._body || "";
        }
        get binaryBody() {
            return this._binaryBody || this.isBinaryBody || (this._binaryBody = new TextEncoder().encode(this._body)), 
            this._binaryBody;
        }
        static fromRawFrame(e, s) {
            const t = {}, i = o => o.replace(/^\s+|\s+$/g, "");
            for (const o of e.headers.reverse()) {
                o.indexOf(":");
                const a = i(o[0]);
                let r = i(o[1]);
                s && e.command !== "CONNECT" && e.command !== "CONNECTED" && (r = m.hdrValueUnEscape(r)), 
                t[a] = r;
            }
            return new m({
                command: e.command,
                headers: t,
                binaryBody: e.binaryBody,
                escapeHeaderValues: s
            });
        }
        toString() {
            return this.serializeCmdAndHeaders();
        }
        serialize() {
            const e = this.serializeCmdAndHeaders();
            return this.isBinaryBody ? m.toUnit8Array(e, this._binaryBody).buffer : e + this._body + k;
        }
        serializeCmdAndHeaders() {
            const e = [ this.command ];
            this.skipContentLengthHeader && delete this.headers["content-length"];
            for (const s of Object.keys(this.headers || {})) {
                const t = this.headers[s];
                this.escapeHeaderValues && this.command !== "CONNECT" && this.command !== "CONNECTED" ? e.push(`${s}:${m.hdrValueEscape(`${t}`)}`) : e.push(`${s}:${t}`);
            }
            return (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) && e.push(`content-length:${this.bodyLength()}`), 
            e.join(b) + b + b;
        }
        isBodyEmpty() {
            return this.bodyLength() === 0;
        }
        bodyLength() {
            const e = this.binaryBody;
            return e ? e.length : 0;
        }
        static sizeOfUTF8(e) {
            return e ? new TextEncoder().encode(e).length : 0;
        }
        static toUnit8Array(e, s) {
            const t = new TextEncoder().encode(e), i = new Uint8Array([ 0 ]), o = new Uint8Array(t.length + s.length + i.length);
            return o.set(t), o.set(s, t.length), o.set(i, t.length + s.length), 
            o;
        }
        static marshall(e) {
            return new m(e).serialize();
        }
        static hdrValueEscape(e) {
            return e.replace(/\\/g, "\\\\").replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/:/g, "\\c");
        }
        static hdrValueUnEscape(e) {
            return e.replace(/\\r/g, "\r").replace(/\\n/g, `
`).replace(/\\c/g, ":").replace(/\\\\/g, "\\");
        }
    }
    class C {
        constructor(e, s) {
            this.onFrame = e, this.onIncomingPing = s, this._encoder = new TextEncoder(), 
            this._decoder = new TextDecoder(), this._token = [], this._initState();
        }
        parseChunk(e, s = !1) {
            let t;
            if (t = typeof e == "string" ? this._encoder.encode(e) : new Uint8Array(e), 
            s && t[t.length - 1] !== 0) {
                const i = new Uint8Array(t.length + 1);
                i.set(t, 0), i[t.length] = 0, t = i;
            }
            for (let i = 0; i < t.length; i++) {
                const o = t[i];
                this._onByte(o);
            }
        }
        _collectFrame(e) {
            e !== 0 && e !== 13 && (e !== 10 ? (this._onByte = this._collectCommand, 
            this._reinjectByte(e)) : this.onIncomingPing());
        }
        _collectCommand(e) {
            if (e !== 13) return e === 10 ? (this._results.command = this._consumeTokenAsUTF8(), 
            void (this._onByte = this._collectHeaders)) : void this._consumeByte(e);
        }
        _collectHeaders(e) {
            e !== 13 && (e !== 10 ? (this._onByte = this._collectHeaderKey, this._reinjectByte(e)) : this._setupCollectBody());
        }
        _reinjectByte(e) {
            this._onByte(e);
        }
        _collectHeaderKey(e) {
            if (e === 58) return this._headerKey = this._consumeTokenAsUTF8(), void (this._onByte = this._collectHeaderValue);
            this._consumeByte(e);
        }
        _collectHeaderValue(e) {
            if (e !== 13) return e === 10 ? (this._results.headers.push([ this._headerKey, this._consumeTokenAsUTF8() ]), 
            this._headerKey = void 0, void (this._onByte = this._collectHeaders)) : void this._consumeByte(e);
        }
        _setupCollectBody() {
            const e = this._results.headers.filter(s => s[0] === "content-length")[0];
            e ? (this._bodyBytesRemaining = parseInt(e[1], 10), this._onByte = this._collectBodyFixedSize) : this._onByte = this._collectBodyNullTerminated;
        }
        _collectBodyNullTerminated(e) {
            e !== 0 ? this._consumeByte(e) : this._retrievedBody();
        }
        _collectBodyFixedSize(e) {
            this._bodyBytesRemaining-- != 0 ? this._consumeByte(e) : this._retrievedBody();
        }
        _retrievedBody() {
            this._results.binaryBody = this._consumeTokenAsRaw();
            try {
                this.onFrame(this._results);
            } catch {}
            this._initState();
        }
        _consumeByte(e) {
            this._token.push(e);
        }
        _consumeTokenAsUTF8() {
            return this._decoder.decode(this._consumeTokenAsRaw());
        }
        _consumeTokenAsRaw() {
            const e = new Uint8Array(this._token);
            return this._token = [], e;
        }
        _initState() {
            this._results = {
                command: void 0,
                headers: [],
                binaryBody: void 0
            }, this._token = [], this._headerKey = void 0, this._onByte = this._collectFrame;
        }
    }
    var l, d;
    (function(n) {
        n[n.CONNECTING = 0] = "CONNECTING", n[n.OPEN = 1] = "OPEN", n[n.CLOSING = 2] = "CLOSING", 
        n[n.CLOSED = 3] = "CLOSED";
    })(l = l || (l = {})), function(n) {
        n[n.ACTIVE = 0] = "ACTIVE", n[n.DEACTIVATING = 1] = "DEACTIVATING", n[n.INACTIVE = 2] = "INACTIVE";
    }(d = d || (d = {}));
    class c {
        constructor(e) {
            this.versions = e;
        }
        supportedVersions() {
            return this.versions.join(",");
        }
        protocolVersions() {
            return this.versions.map(e => `v${e.replace(".", "")}.stomp`);
        }
    }
    c.V1_0 = "1.0", c.V1_1 = "1.1", c.V1_2 = "1.2", c.default = new c([ c.V1_2, c.V1_1, c.V1_0 ]);
    class S {
        constructor(e, s, t) {
            this._client = e, this._webSocket = s, this._connected = !1, this._serverFrameHandlers = {
                CONNECTED: i => {
                    this.debug(`connected to server ${i.headers.server}`), this._connected = !0, 
                    this._connectedVersion = i.headers.version, this._connectedVersion === c.V1_2 && (this._escapeHeaderValues = !0), 
                    this._setupHeartbeat(i.headers), this.onConnect(i);
                },
                MESSAGE: i => {
                    const o = i.headers.subscription, a = this._subscriptions[o] || this.onUnhandledMessage, r = i, h = this, _ = this._connectedVersion === c.V1_2 ? r.headers.ack : r.headers["message-id"];
                    r.ack = (u = {}) => h.ack(_, o, u), r.nack = (u = {}) => h.nack(_, o, u), 
                    a(r);
                },
                RECEIPT: i => {
                    const o = this._receiptWatchers[i.headers["receipt-id"]];
                    o ? (o(i), delete this._receiptWatchers[i.headers["receipt-id"]]) : this.onUnhandledReceipt(i);
                },
                ERROR: i => {
                    this.onStompError(i);
                }
            }, this._counter = 0, this._subscriptions = {}, this._receiptWatchers = {}, 
            this._partialData = "", this._escapeHeaderValues = !1, this._lastServerActivityTS = Date.now(), 
            this.debug = t.debug, this.stompVersions = t.stompVersions, this.connectHeaders = t.connectHeaders, 
            this.disconnectHeaders = t.disconnectHeaders, this.heartbeatIncoming = t.heartbeatIncoming, 
            this.heartbeatOutgoing = t.heartbeatOutgoing, this.splitLargeFrames = t.splitLargeFrames, 
            this.maxWebSocketChunkSize = t.maxWebSocketChunkSize, this.forceBinaryWSFrames = t.forceBinaryWSFrames, 
            this.logRawCommunication = t.logRawCommunication, this.appendMissingNULLonIncoming = t.appendMissingNULLonIncoming, 
            this.discardWebsocketOnCommFailure = t.discardWebsocketOnCommFailure, 
            this.onConnect = t.onConnect, this.onDisconnect = t.onDisconnect, this.onStompError = t.onStompError, 
            this.onWebSocketClose = t.onWebSocketClose, this.onWebSocketError = t.onWebSocketError, 
            this.onUnhandledMessage = t.onUnhandledMessage, this.onUnhandledReceipt = t.onUnhandledReceipt, 
            this.onUnhandledFrame = t.onUnhandledFrame;
        }
        get connectedVersion() {
            return this._connectedVersion;
        }
        get connected() {
            return this._connected;
        }
        start() {
            const e = new C(s => {
                const t = m.fromRawFrame(s, this._escapeHeaderValues);
                this.logRawCommunication || this.debug(`<<< ${t}`), (this._serverFrameHandlers[t.command] || this.onUnhandledFrame)(t);
            }, () => {
                this.debug("<<< PONG");
            });
            this._webSocket.onmessage = s => {
                if (this.debug("Received data"), this._lastServerActivityTS = Date.now(), 
                this.logRawCommunication) {
                    const t = s.data instanceof ArrayBuffer ? new TextDecoder().decode(s.data) : s.data;
                    this.debug(`<<< ${t}`);
                }
                e.parseChunk(s.data, this.appendMissingNULLonIncoming);
            }, this._webSocket.onclose = s => {
                this.debug(`Connection closed to ${this._webSocket.url}`), this._cleanUp(), 
                this.onWebSocketClose(s);
            }, this._webSocket.onerror = s => {
                this.onWebSocketError(s);
            }, this._webSocket.onopen = () => {
                const s = Object.assign({}, this.connectHeaders);
                this.debug("Web Socket Opened..."), s["accept-version"] = this.stompVersions.supportedVersions(), 
                s["heart-beat"] = [ this.heartbeatOutgoing, this.heartbeatIncoming ].join(","), 
                this._transmit({
                    command: "CONNECT",
                    headers: s
                });
            };
        }
        _setupHeartbeat(e) {
            if (e.version !== c.V1_1 && e.version !== c.V1_2 || !e["heart-beat"]) return;
            const [ s, t ] = e["heart-beat"].split(",").map(i => parseInt(i, 10));
            if (this.heartbeatOutgoing !== 0 && t !== 0) {
                const i = Math.max(this.heartbeatOutgoing, t);
                this.debug(`send PING every ${i}ms`), this._pinger = setInterval(() => {
                    this._webSocket.readyState === l.OPEN && (this._webSocket.send(b), 
                    this.debug(">>> PING"));
                }, i);
            }
            if (this.heartbeatIncoming !== 0 && s !== 0) {
                const i = Math.max(this.heartbeatIncoming, s);
                this.debug(`check PONG every ${i}ms`), this._ponger = setInterval(() => {
                    const o = Date.now() - this._lastServerActivityTS;
                    o > 2 * i && (this.debug(`did not receive server activity for the last ${o}ms`), 
                    this._closeOrDiscardWebsocket());
                }, i);
            }
        }
        _closeOrDiscardWebsocket() {
            this.discardWebsocketOnCommFailure ? (this.debug("Discarding websocket, the underlying socket may linger for a while"), 
            this.discardWebsocket()) : (this.debug("Issuing close on the websocket"), 
            this._closeWebsocket());
        }
        forceDisconnect() {
            this._webSocket && (this._webSocket.readyState !== l.CONNECTING && this._webSocket.readyState !== l.OPEN || this._closeOrDiscardWebsocket());
        }
        _closeWebsocket() {
            this._webSocket.onmessage = () => {}, this._webSocket.close();
        }
        discardWebsocket() {
            var e, s;
            typeof this._webSocket.terminate != "function" && (e = this._webSocket, 
            s = t => this.debug(t), e.terminate = function() {
                const t = () => {};
                this.onerror = t, this.onmessage = t, this.onopen = t;
                const i = new Date(), o = Math.random().toString().substring(2, 8), a = this.onclose;
                this.onclose = r => {
                    const h = new Date().getTime() - i.getTime();
                    s(`Discarded socket (#${o})  closed after ${h}ms, with code/reason: ${r.code}/${r.reason}`);
                }, this.close(), a == null || a.call(e, {
                    code: 4001,
                    reason: `Quick discarding socket (#${o}) without waiting for the shutdown sequence.`,
                    wasClean: !1
                });
            }), this._webSocket.terminate();
        }
        _transmit(e) {
            const {
                command: s,
                headers: t,
                body: i,
                binaryBody: o,
                skipContentLengthHeader: a
            } = e, r = new m({
                command: s,
                headers: t,
                body: i,
                binaryBody: o,
                escapeHeaderValues: this._escapeHeaderValues,
                skipContentLengthHeader: a
            });
            let h = r.serialize();
            if (this.logRawCommunication ? this.debug(`>>> ${h}`) : this.debug(`>>> ${r}`), 
            this.forceBinaryWSFrames && typeof h == "string" && (h = new TextEncoder().encode(h)), 
            typeof h == "string" && this.splitLargeFrames) {
                let _ = h;
                for (;_.length > 0; ) {
                    const u = _.substring(0, this.maxWebSocketChunkSize);
                    _ = _.substring(this.maxWebSocketChunkSize), this._webSocket.send(u), 
                    this.debug(`chunk sent = ${u.length}, remaining = ${_.length}`);
                }
            } else this._webSocket.send(h);
        }
        dispose() {
            if (this.connected) try {
                const e = Object.assign({}, this.disconnectHeaders);
                e.receipt || (e.receipt = "close-" + this._counter++), this.watchForReceipt(e.receipt, s => {
                    this._closeWebsocket(), this._cleanUp(), this.onDisconnect(s);
                }), this._transmit({
                    command: "DISCONNECT",
                    headers: e
                });
            } catch (e) {
                this.debug(`Ignoring error during disconnect ${e}`);
            } else this._webSocket.readyState !== l.CONNECTING && this._webSocket.readyState !== l.OPEN || this._closeWebsocket();
        }
        _cleanUp() {
            this._connected = !1, this._pinger && (clearInterval(this._pinger), 
            this._pinger = void 0), this._ponger && (clearInterval(this._ponger), 
            this._ponger = void 0);
        }
        publish(e) {
            const {
                destination: s,
                headers: t,
                body: i,
                binaryBody: o,
                skipContentLengthHeader: a
            } = e, r = Object.assign({
                destination: s
            }, t);
            this._transmit({
                command: "SEND",
                headers: r,
                body: i,
                binaryBody: o,
                skipContentLengthHeader: a
            });
        }
        watchForReceipt(e, s) {
            this._receiptWatchers[e] = s;
        }
        subscribe(e, s, t = {}) {
            (t = Object.assign({}, t)).id || (t.id = "sub-" + this._counter++), 
            t.destination = e, this._subscriptions[t.id] = s, this._transmit({
                command: "SUBSCRIBE",
                headers: t
            });
            const i = this;
            return {
                id: t.id,
                unsubscribe: o => i.unsubscribe(t.id, o)
            };
        }
        unsubscribe(e, s = {}) {
            s = Object.assign({}, s), delete this._subscriptions[e], s.id = e, this._transmit({
                command: "UNSUBSCRIBE",
                headers: s
            });
        }
        begin(e) {
            const s = e || "tx-" + this._counter++;
            this._transmit({
                command: "BEGIN",
                headers: {
                    transaction: s
                }
            });
            const t = this;
            return {
                id: s,
                commit() {
                    t.commit(s);
                },
                abort() {
                    t.abort(s);
                }
            };
        }
        commit(e) {
            this._transmit({
                command: "COMMIT",
                headers: {
                    transaction: e
                }
            });
        }
        abort(e) {
            this._transmit({
                command: "ABORT",
                headers: {
                    transaction: e
                }
            });
        }
        ack(e, s, t = {}) {
            t = Object.assign({}, t), this._connectedVersion === c.V1_2 ? t.id = e : t["message-id"] = e, 
            t.subscription = s, this._transmit({
                command: "ACK",
                headers: t
            });
        }
        nack(e, s, t = {}) {
            return t = Object.assign({}, t), this._connectedVersion === c.V1_2 ? t.id = e : t["message-id"] = e, 
            t.subscription = s, this._transmit({
                command: "NACK",
                headers: t
            });
        }
    }
    let g = new class {
        constructor(n = {}) {
            this.stompVersions = c.default, this.connectionTimeout = 0, this.reconnectDelay = 5e3, 
            this.heartbeatIncoming = 1e4, this.heartbeatOutgoing = 1e4, this.splitLargeFrames = !1, 
            this.maxWebSocketChunkSize = 8192, this.forceBinaryWSFrames = !1, this.appendMissingNULLonIncoming = !1, 
            this.discardWebsocketOnCommFailure = !1, this.state = d.INACTIVE;
            const e = () => {};
            this.debug = e, this.beforeConnect = e, this.onConnect = e, this.onDisconnect = e, 
            this.onUnhandledMessage = e, this.onUnhandledReceipt = e, this.onUnhandledFrame = e, 
            this.onStompError = e, this.onWebSocketClose = e, this.onWebSocketError = e, 
            this.logRawCommunication = !1, this.onChangeState = e, this.connectHeaders = {}, 
            this._disconnectHeaders = {}, this.configure(n);
        }
        get webSocket() {
            var n;
            return (n = this._stompHandler) == null ? void 0 : n._webSocket;
        }
        get disconnectHeaders() {
            return this._disconnectHeaders;
        }
        set disconnectHeaders(n) {
            this._disconnectHeaders = n, this._stompHandler && (this._stompHandler.disconnectHeaders = this._disconnectHeaders);
        }
        get connected() {
            return !!this._stompHandler && this._stompHandler.connected;
        }
        get connectedVersion() {
            return this._stompHandler ? this._stompHandler.connectedVersion : void 0;
        }
        get active() {
            return this.state === d.ACTIVE;
        }
        _changeState(n) {
            this.state = n, this.onChangeState(n);
        }
        configure(n) {
            Object.assign(this, n);
        }
        activate() {
            const n = () => {
                this.active ? this.debug("Already ACTIVE, ignoring request to activate") : (this._changeState(d.ACTIVE), 
                this._connect());
            };
            this.state === d.DEACTIVATING ? (this.debug("Waiting for deactivation to finish before activating"), 
            this.deactivate().then(() => {
                n();
            })) : n();
        }
        async _connect() {
            if (await this.beforeConnect(), this._stompHandler) return void this.debug("There is already a stompHandler, skipping the call to connect");
            if (!this.active) return void this.debug("Client has been marked inactive, will not attempt to connect");
            this.connectionTimeout > 0 && (this._connectionWatcher && clearTimeout(this._connectionWatcher), 
            this._connectionWatcher = setTimeout(() => {
                this.connected || (this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`), 
                this.forceDisconnect());
            }, this.connectionTimeout)), this.debug("Opening Web Socket...");
            const n = this._createWebSocket();
            this._stompHandler = new S(this, n, {
                debug: this.debug,
                stompVersions: this.stompVersions,
                connectHeaders: this.connectHeaders,
                disconnectHeaders: this._disconnectHeaders,
                heartbeatIncoming: this.heartbeatIncoming,
                heartbeatOutgoing: this.heartbeatOutgoing,
                splitLargeFrames: this.splitLargeFrames,
                maxWebSocketChunkSize: this.maxWebSocketChunkSize,
                forceBinaryWSFrames: this.forceBinaryWSFrames,
                logRawCommunication: this.logRawCommunication,
                appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
                discardWebsocketOnCommFailure: this.discardWebsocketOnCommFailure,
                onConnect: e => {
                    if (this._connectionWatcher && (clearTimeout(this._connectionWatcher), 
                    this._connectionWatcher = void 0), !this.active) return this.debug("STOMP got connected while deactivate was issued, will disconnect now"), 
                    void this._disposeStompHandler();
                    this.onConnect(e);
                },
                onDisconnect: e => {
                    this.onDisconnect(e);
                },
                onStompError: e => {
                    this.onStompError(e);
                },
                onWebSocketClose: e => {
                    this._stompHandler = void 0, this.state === d.DEACTIVATING && this._changeState(d.INACTIVE), 
                    this.onWebSocketClose(e), this.active && this._schedule_reconnect();
                },
                onWebSocketError: e => {
                    this.onWebSocketError(e);
                },
                onUnhandledMessage: e => {
                    this.onUnhandledMessage(e);
                },
                onUnhandledReceipt: e => {
                    this.onUnhandledReceipt(e);
                },
                onUnhandledFrame: e => {
                    this.onUnhandledFrame(e);
                }
            }), this._stompHandler.start();
        }
        _createWebSocket() {
            let n;
            if (this.webSocketFactory) n = this.webSocketFactory(); else {
                if (!this.brokerURL) throw new Error("Either brokerURL or webSocketFactory must be provided");
                n = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions());
            }
            return n.binaryType = "arraybuffer", n;
        }
        _schedule_reconnect() {
            this.reconnectDelay > 0 && (this.debug(`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`), 
            this._reconnector = setTimeout(() => {
                this._connect();
            }, this.reconnectDelay));
        }
        async deactivate(n = {}) {
            var i;
            const e = n.force || !1, s = this.active;
            let t;
            if (this.state === d.INACTIVE) return this.debug("Already INACTIVE, nothing more to do"), 
            Promise.resolve();
            if (this._changeState(d.DEACTIVATING), this._reconnector && (clearTimeout(this._reconnector), 
            this._reconnector = void 0), !this._stompHandler || this.webSocket.readyState === l.CLOSED) return this._changeState(d.INACTIVE), 
            Promise.resolve();
            {
                const o = this._stompHandler.onWebSocketClose;
                t = new Promise((a, r) => {
                    this._stompHandler.onWebSocketClose = h => {
                        o(h), a();
                    };
                });
            }
            return e ? (i = this._stompHandler) == null || i.discardWebsocket() : s && this._disposeStompHandler(), 
            t;
        }
        forceDisconnect() {
            this._stompHandler && this._stompHandler.forceDisconnect();
        }
        _disposeStompHandler() {
            this._stompHandler && this._stompHandler.dispose();
        }
        publish(n) {
            this._checkConnection(), this._stompHandler.publish(n);
        }
        _checkConnection() {
            if (!this.connected) throw new TypeError("There is no underlying STOMP connection");
        }
        watchForReceipt(n, e) {
            this._checkConnection(), this._stompHandler.watchForReceipt(n, e);
        }
        subscribe(n, e, s = {}) {
            return this._checkConnection(), this._stompHandler.subscribe(n, e, s);
        }
        unsubscribe(n, e = {}) {
            this._checkConnection(), this._stompHandler.unsubscribe(n, e);
        }
        begin(n) {
            return this._checkConnection(), this._stompHandler.begin(n);
        }
        commit(n) {
            this._checkConnection(), this._stompHandler.commit(n);
        }
        abort(n) {
            this._checkConnection(), this._stompHandler.abort(n);
        }
        ack(n, e, s = {}) {
            this._checkConnection(), this._stompHandler.ack(n, e, s);
        }
        nack(n, e, s = {}) {
            this._checkConnection(), this._stompHandler.nack(n, e, s);
        }
    }({
        brokerURL: "wss://neustudy.neumooc.com/smartexam-api/websocket",
        connectHeaders: {},
        debug: n => {},
        reconnectDelay: 5e3
    });
    p = (...n) => {
        const e = n.reduce((s, t, i) => (i % 2 == 0 && (s[t] = n[i + 1]), s), {});
        g.onConnect = s => {
            n.filter((t, i) => i % 2 == 0).forEach(t => {
                g.subscribe(t, e[t], i => {
                    alert(i);
                });
            });
        }, g.activate();
    }, y = () => {
        g.deactivate();
    };
});

export {
    H as __tla,
    p as c,
    y as d
};