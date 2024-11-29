import { computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, ref, onUnmounted, createElementVNode, toDisplayString, unref, defineComponent, withDirectives, createVNode, createTextVNode, vShow, useCssVars, nextTick, pushScopeId, popScopeId, getCurrentInstance, createCommentVNode, reactive, withModifiers, watch, onMounted, Transition, withCtx, Fragment, renderList, useAttrs, mergeProps, createBlock, withKeys } from "vue";
function throttle(delay, noTrailing, callback, debounceMode) {
  var timeoutID;
  var cancelled = false;
  var lastExec = 0;
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }
  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  }
  if (typeof noTrailing !== "boolean") {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = void 0;
  }
  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }
    var self2 = this;
    var elapsed = Date.now() - lastExec;
    if (cancelled) {
      return;
    }
    function exec() {
      lastExec = Date.now();
      callback.apply(self2, arguments_);
    }
    function clear() {
      timeoutID = void 0;
    }
    if (debounceMode && !timeoutID) {
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === void 0 && elapsed > delay) {
      exec();
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay - elapsed : delay);
    }
  }
  wrapper.cancel = cancel;
  return wrapper;
}
function debounce(delay, atBegin, callback) {
  return callback === void 0 ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var hls_min = { exports: {} };
(function(module, exports) {
  !function t(e) {
    var i;
    i = function() {
      function r(t2, e2) {
        var r2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var i3 = Object.getOwnPropertySymbols(t2);
          e2 && (i3 = i3.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
          })), r2.push.apply(r2, i3);
        }
        return r2;
      }
      function i2(t2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var i3 = null != arguments[e2] ? arguments[e2] : {};
          e2 % 2 ? r(Object(i3), true).forEach(function(e3) {
            s(t2, e3, i3[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(i3)) : r(Object(i3)).forEach(function(e3) {
            Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(i3, e3));
          });
        }
        return t2;
      }
      function n(t2, e2) {
        for (var r2 = 0; r2 < e2.length; r2++) {
          var i3 = e2[r2];
          i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t2, m(i3.key), i3);
        }
      }
      function a(t2, e2, r2) {
        return e2 && n(t2.prototype, e2), r2 && n(t2, r2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
      }
      function s(t2, e2, r2) {
        return (e2 = m(e2)) in t2 ? Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[e2] = r2, t2;
      }
      function o() {
        return o = Object.assign ? Object.assign.bind() : function(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var r2 = arguments[e2];
            for (var i3 in r2)
              Object.prototype.hasOwnProperty.call(r2, i3) && (t2[i3] = r2[i3]);
          }
          return t2;
        }, o.apply(this, arguments);
      }
      function l(t2, e2) {
        t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, h(t2, e2);
      }
      function u(t2) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        }, u(t2);
      }
      function h(t2, e2) {
        return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
          return t3.__proto__ = e3, t3;
        }, h(t2, e2);
      }
      function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" == typeof Proxy)
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t2) {
          return false;
        }
      }
      function c(t2, e2, r2) {
        return c = d() ? Reflect.construct.bind() : function(t3, e3, r3) {
          var i3 = [null];
          i3.push.apply(i3, e3);
          var n2 = new (Function.bind.apply(t3, i3))();
          return r3 && h(n2, r3.prototype), n2;
        }, c.apply(null, arguments);
      }
      function f(t2) {
        var e2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
        return f = function(t3) {
          if (null === t3 || (r2 = t3, -1 === Function.toString.call(r2).indexOf("[native code]")))
            return t3;
          var r2;
          if ("function" != typeof t3)
            throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== e2) {
            if (e2.has(t3))
              return e2.get(t3);
            e2.set(t3, i3);
          }
          function i3() {
            return c(t3, arguments, u(this).constructor);
          }
          return i3.prototype = Object.create(t3.prototype, { constructor: { value: i3, enumerable: false, writable: true, configurable: true } }), h(i3, t3);
        }, f(t2);
      }
      function g(t2, e2) {
        (null == e2 || e2 > t2.length) && (e2 = t2.length);
        for (var r2 = 0, i3 = new Array(e2); r2 < e2; r2++)
          i3[r2] = t2[r2];
        return i3;
      }
      function v(t2, e2) {
        var r2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
        if (r2)
          return (r2 = r2.call(t2)).next.bind(r2);
        if (Array.isArray(t2) || (r2 = function(t3, e3) {
          if (t3) {
            if ("string" == typeof t3)
              return g(t3, e3);
            var r3 = Object.prototype.toString.call(t3).slice(8, -1);
            return "Object" === r3 && t3.constructor && (r3 = t3.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(t3) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? g(t3, e3) : void 0;
          }
        }(t2)) || e2 && t2 && "number" == typeof t2.length) {
          r2 && (t2 = r2);
          var i3 = 0;
          return function() {
            return i3 >= t2.length ? { done: true } : { done: false, value: t2[i3++] };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function m(t2) {
        var e2 = function(t3, e3) {
          if ("object" != typeof t3 || null === t3)
            return t3;
          var r2 = t3[Symbol.toPrimitive];
          if (void 0 !== r2) {
            var i3 = r2.call(t3, e3 || "default");
            if ("object" != typeof i3)
              return i3;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e3 ? String : Number)(t3);
        }(t2, "string");
        return "symbol" == typeof e2 ? e2 : String(e2);
      }
      function p(t2) {
        return t2 && t2.__esModule && Object.prototype.hasOwnProperty.call(t2, "default") ? t2.default : t2;
      }
      var y = { exports: {} };
      !function(t2, e2) {
        var r2, i3, n2, a2, s2;
        r2 = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, i3 = /^(?=([^\/?#]*))\1([^]*)$/, n2 = /(?:\/|^)\.(?=\/)/g, a2 = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, s2 = { buildAbsoluteURL: function(t3, e3, r3) {
          if (r3 = r3 || {}, t3 = t3.trim(), !(e3 = e3.trim())) {
            if (!r3.alwaysNormalize)
              return t3;
            var n3 = s2.parseURL(t3);
            if (!n3)
              throw new Error("Error trying to parse base URL.");
            return n3.path = s2.normalizePath(n3.path), s2.buildURLFromParts(n3);
          }
          var a3 = s2.parseURL(e3);
          if (!a3)
            throw new Error("Error trying to parse relative URL.");
          if (a3.scheme)
            return r3.alwaysNormalize ? (a3.path = s2.normalizePath(a3.path), s2.buildURLFromParts(a3)) : e3;
          var o2 = s2.parseURL(t3);
          if (!o2)
            throw new Error("Error trying to parse base URL.");
          if (!o2.netLoc && o2.path && "/" !== o2.path[0]) {
            var l2 = i3.exec(o2.path);
            o2.netLoc = l2[1], o2.path = l2[2];
          }
          o2.netLoc && !o2.path && (o2.path = "/");
          var u2 = { scheme: o2.scheme, netLoc: a3.netLoc, path: null, params: a3.params, query: a3.query, fragment: a3.fragment };
          if (!a3.netLoc && (u2.netLoc = o2.netLoc, "/" !== a3.path[0]))
            if (a3.path) {
              var h2 = o2.path, d2 = h2.substring(0, h2.lastIndexOf("/") + 1) + a3.path;
              u2.path = s2.normalizePath(d2);
            } else
              u2.path = o2.path, a3.params || (u2.params = o2.params, a3.query || (u2.query = o2.query));
          return null === u2.path && (u2.path = r3.alwaysNormalize ? s2.normalizePath(a3.path) : a3.path), s2.buildURLFromParts(u2);
        }, parseURL: function(t3) {
          var e3 = r2.exec(t3);
          return e3 ? { scheme: e3[1] || "", netLoc: e3[2] || "", path: e3[3] || "", params: e3[4] || "", query: e3[5] || "", fragment: e3[6] || "" } : null;
        }, normalizePath: function(t3) {
          for (t3 = t3.split("").reverse().join("").replace(n2, ""); t3.length !== (t3 = t3.replace(a2, "")).length; )
            ;
          return t3.split("").reverse().join("");
        }, buildURLFromParts: function(t3) {
          return t3.scheme + t3.netLoc + t3.path + t3.params + t3.query + t3.fragment;
        } }, t2.exports = s2;
      }(y);
      var T = y.exports, E = Number.isFinite || function(t2) {
        return "number" == typeof t2 && isFinite(t2);
      }, S = function(t2) {
        return t2.MEDIA_ATTACHING = "hlsMediaAttaching", t2.MEDIA_ATTACHED = "hlsMediaAttached", t2.MEDIA_DETACHING = "hlsMediaDetaching", t2.MEDIA_DETACHED = "hlsMediaDetached", t2.BUFFER_RESET = "hlsBufferReset", t2.BUFFER_CODECS = "hlsBufferCodecs", t2.BUFFER_CREATED = "hlsBufferCreated", t2.BUFFER_APPENDING = "hlsBufferAppending", t2.BUFFER_APPENDED = "hlsBufferAppended", t2.BUFFER_EOS = "hlsBufferEos", t2.BUFFER_FLUSHING = "hlsBufferFlushing", t2.BUFFER_FLUSHED = "hlsBufferFlushed", t2.MANIFEST_LOADING = "hlsManifestLoading", t2.MANIFEST_LOADED = "hlsManifestLoaded", t2.MANIFEST_PARSED = "hlsManifestParsed", t2.LEVEL_SWITCHING = "hlsLevelSwitching", t2.LEVEL_SWITCHED = "hlsLevelSwitched", t2.LEVEL_LOADING = "hlsLevelLoading", t2.LEVEL_LOADED = "hlsLevelLoaded", t2.LEVEL_UPDATED = "hlsLevelUpdated", t2.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", t2.LEVELS_UPDATED = "hlsLevelsUpdated", t2.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", t2.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", t2.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", t2.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", t2.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", t2.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", t2.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", t2.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", t2.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", t2.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", t2.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", t2.CUES_PARSED = "hlsCuesParsed", t2.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", t2.INIT_PTS_FOUND = "hlsInitPtsFound", t2.FRAG_LOADING = "hlsFragLoading", t2.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", t2.FRAG_LOADED = "hlsFragLoaded", t2.FRAG_DECRYPTED = "hlsFragDecrypted", t2.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", t2.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", t2.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", t2.FRAG_PARSED = "hlsFragParsed", t2.FRAG_BUFFERED = "hlsFragBuffered", t2.FRAG_CHANGED = "hlsFragChanged", t2.FPS_DROP = "hlsFpsDrop", t2.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", t2.ERROR = "hlsError", t2.DESTROYING = "hlsDestroying", t2.KEY_LOADING = "hlsKeyLoading", t2.KEY_LOADED = "hlsKeyLoaded", t2.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", t2.BACK_BUFFER_REACHED = "hlsBackBufferReached", t2;
      }({}), L = function(t2) {
        return t2.NETWORK_ERROR = "networkError", t2.MEDIA_ERROR = "mediaError", t2.KEY_SYSTEM_ERROR = "keySystemError", t2.MUX_ERROR = "muxError", t2.OTHER_ERROR = "otherError", t2;
      }({}), R = function(t2) {
        return t2.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", t2.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", t2.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", t2.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", t2.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", t2.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", t2.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", t2.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", t2.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", t2.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", t2.MANIFEST_LOAD_ERROR = "manifestLoadError", t2.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", t2.MANIFEST_PARSING_ERROR = "manifestParsingError", t2.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", t2.LEVEL_EMPTY_ERROR = "levelEmptyError", t2.LEVEL_LOAD_ERROR = "levelLoadError", t2.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", t2.LEVEL_PARSING_ERROR = "levelParsingError", t2.LEVEL_SWITCH_ERROR = "levelSwitchError", t2.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", t2.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", t2.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", t2.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", t2.FRAG_LOAD_ERROR = "fragLoadError", t2.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", t2.FRAG_DECRYPT_ERROR = "fragDecryptError", t2.FRAG_PARSING_ERROR = "fragParsingError", t2.FRAG_GAP = "fragGap", t2.REMUX_ALLOC_ERROR = "remuxAllocError", t2.KEY_LOAD_ERROR = "keyLoadError", t2.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", t2.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", t2.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", t2.BUFFER_APPEND_ERROR = "bufferAppendError", t2.BUFFER_APPENDING_ERROR = "bufferAppendingError", t2.BUFFER_STALLED_ERROR = "bufferStalledError", t2.BUFFER_FULL_ERROR = "bufferFullError", t2.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", t2.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", t2.INTERNAL_EXCEPTION = "internalException", t2.INTERNAL_ABORTED = "aborted", t2.UNKNOWN = "unknown", t2;
      }({}), A = function() {
      }, k = { trace: A, debug: A, log: A, warn: A, info: A, error: A }, b = k;
      function D(t2) {
        var e2 = self.console[t2];
        return e2 ? e2.bind(self.console, "[" + t2 + "] >") : A;
      }
      function I(t2, e2) {
        if (self.console && true === t2 || "object" == typeof t2) {
          !function(t3) {
            for (var e3 = arguments.length, r2 = new Array(e3 > 1 ? e3 - 1 : 0), i3 = 1; i3 < e3; i3++)
              r2[i3 - 1] = arguments[i3];
            r2.forEach(function(e4) {
              b[e4] = t3[e4] ? t3[e4].bind(t3) : D(e4);
            });
          }(t2, "debug", "log", "info", "warn", "error");
          try {
            b.log('Debug logs enabled for "' + e2 + '" in hls.js version 1.4.10');
          } catch (t3) {
            b = k;
          }
        } else
          b = k;
      }
      var w = b, C = /^(\d+)x(\d+)$/, _ = /(.+?)=(".*?"|.*?)(?:,|$)/g, P = function() {
        function t2(e3) {
          for (var r2 in "string" == typeof e3 && (e3 = t2.parseAttrList(e3)), e3)
            e3.hasOwnProperty(r2) && ("X-" === r2.substring(0, 2) && (this.clientAttrs = this.clientAttrs || [], this.clientAttrs.push(r2)), this[r2] = e3[r2]);
        }
        var e2 = t2.prototype;
        return e2.decimalInteger = function(t3) {
          var e3 = parseInt(this[t3], 10);
          return e3 > Number.MAX_SAFE_INTEGER ? 1 / 0 : e3;
        }, e2.hexadecimalInteger = function(t3) {
          if (this[t3]) {
            var e3 = (this[t3] || "0x").slice(2);
            e3 = (1 & e3.length ? "0" : "") + e3;
            for (var r2 = new Uint8Array(e3.length / 2), i3 = 0; i3 < e3.length / 2; i3++)
              r2[i3] = parseInt(e3.slice(2 * i3, 2 * i3 + 2), 16);
            return r2;
          }
          return null;
        }, e2.hexadecimalIntegerAsNumber = function(t3) {
          var e3 = parseInt(this[t3], 16);
          return e3 > Number.MAX_SAFE_INTEGER ? 1 / 0 : e3;
        }, e2.decimalFloatingPoint = function(t3) {
          return parseFloat(this[t3]);
        }, e2.optionalFloat = function(t3, e3) {
          var r2 = this[t3];
          return r2 ? parseFloat(r2) : e3;
        }, e2.enumeratedString = function(t3) {
          return this[t3];
        }, e2.bool = function(t3) {
          return "YES" === this[t3];
        }, e2.decimalResolution = function(t3) {
          var e3 = C.exec(this[t3]);
          if (null !== e3)
            return { width: parseInt(e3[1], 10), height: parseInt(e3[2], 10) };
        }, t2.parseAttrList = function(t3) {
          var e3, r2 = {};
          for (_.lastIndex = 0; null !== (e3 = _.exec(t3)); ) {
            var i3 = e3[2];
            0 === i3.indexOf('"') && i3.lastIndexOf('"') === i3.length - 1 && (i3 = i3.slice(1, -1)), r2[e3[1].trim()] = i3;
          }
          return r2;
        }, t2;
      }();
      function x(t2) {
        return "SCTE35-OUT" === t2 || "SCTE35-IN" === t2;
      }
      var F = function() {
        function t2(t3, e2) {
          if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, e2) {
            var r2 = e2.attr;
            for (var i3 in r2)
              if (Object.prototype.hasOwnProperty.call(t3, i3) && t3[i3] !== r2[i3]) {
                w.warn('DATERANGE tag attribute: "' + i3 + '" does not match for tags with ID: "' + t3.ID + '"'), this._badValueForSameId = i3;
                break;
              }
            t3 = o(new P({}), r2, t3);
          }
          if (this.attr = t3, this._startDate = new Date(t3["START-DATE"]), "END-DATE" in this.attr) {
            var n2 = new Date(this.attr["END-DATE"]);
            E(n2.getTime()) && (this._endDate = n2);
          }
        }
        return a(t2, [{ key: "id", get: function() {
          return this.attr.ID;
        } }, { key: "class", get: function() {
          return this.attr.CLASS;
        } }, { key: "startDate", get: function() {
          return this._startDate;
        } }, { key: "endDate", get: function() {
          if (this._endDate)
            return this._endDate;
          var t3 = this.duration;
          return null !== t3 ? new Date(this._startDate.getTime() + 1e3 * t3) : null;
        } }, { key: "duration", get: function() {
          if ("DURATION" in this.attr) {
            var t3 = this.attr.decimalFloatingPoint("DURATION");
            if (E(t3))
              return t3;
          } else if (this._endDate)
            return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
          return null;
        } }, { key: "plannedDuration", get: function() {
          return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
        } }, { key: "endOnNext", get: function() {
          return this.attr.bool("END-ON-NEXT");
        } }, { key: "isValid", get: function() {
          return !!this.id && !this._badValueForSameId && E(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class);
        } }]), t2;
      }(), M = function() {
        this.aborted = false, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = { start: 0, first: 0, end: 0 }, this.parsing = { start: 0, end: 0 }, this.buffering = { start: 0, first: 0, end: 0 };
      }, O = "audio", N = "video", U = "audiovideo", B = function() {
        function t2(t3) {
          var e2;
          this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((e2 = {})[O] = null, e2[N] = null, e2[U] = null, e2), this.baseurl = t3;
        }
        return t2.prototype.setByteRange = function(t3, e2) {
          var r2 = t3.split("@", 2), i3 = [];
          1 === r2.length ? i3[0] = e2 ? e2.byteRangeEndOffset : 0 : i3[0] = parseInt(r2[1]), i3[1] = parseInt(r2[0]) + i3[0], this._byteRange = i3;
        }, a(t2, [{ key: "byteRange", get: function() {
          return this._byteRange ? this._byteRange : [];
        } }, { key: "byteRangeStartOffset", get: function() {
          return this.byteRange[0];
        } }, { key: "byteRangeEndOffset", get: function() {
          return this.byteRange[1];
        } }, { key: "url", get: function() {
          return !this._url && this.baseurl && this.relurl && (this._url = T.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: true })), this._url || "";
        }, set: function(t3) {
          this._url = t3;
        } }]), t2;
      }(), G = function(t2) {
        function e2(e3, r3) {
          var i3;
          return (i3 = t2.call(this, r3) || this)._decryptdata = null, i3.rawProgramDateTime = null, i3.programDateTime = null, i3.tagList = [], i3.duration = 0, i3.sn = 0, i3.levelkeys = void 0, i3.type = void 0, i3.loader = null, i3.keyLoader = null, i3.level = -1, i3.cc = 0, i3.startPTS = void 0, i3.endPTS = void 0, i3.startDTS = void 0, i3.endDTS = void 0, i3.start = 0, i3.deltaPTS = void 0, i3.maxStartPTS = void 0, i3.minEndPTS = void 0, i3.stats = new M(), i3.urlId = 0, i3.data = void 0, i3.bitrateTest = false, i3.title = null, i3.initSegment = null, i3.endList = void 0, i3.gap = void 0, i3.type = e3, i3;
        }
        l(e2, t2);
        var r2 = e2.prototype;
        return r2.setKeyFormat = function(t3) {
          if (this.levelkeys) {
            var e3 = this.levelkeys[t3];
            e3 && !this._decryptdata && (this._decryptdata = e3.getDecryptData(this.sn));
          }
        }, r2.abortRequests = function() {
          var t3, e3;
          null == (t3 = this.loader) || t3.abort(), null == (e3 = this.keyLoader) || e3.abort();
        }, r2.setElementaryStreamInfo = function(t3, e3, r3, i3, n2, a2) {
          void 0 === a2 && (a2 = false);
          var s2 = this.elementaryStreams, o2 = s2[t3];
          o2 ? (o2.startPTS = Math.min(o2.startPTS, e3), o2.endPTS = Math.max(o2.endPTS, r3), o2.startDTS = Math.min(o2.startDTS, i3), o2.endDTS = Math.max(o2.endDTS, n2)) : s2[t3] = { startPTS: e3, endPTS: r3, startDTS: i3, endDTS: n2, partial: a2 };
        }, r2.clearElementaryStreamInfo = function() {
          var t3 = this.elementaryStreams;
          t3[O] = null, t3[N] = null, t3[U] = null;
        }, a(e2, [{ key: "decryptdata", get: function() {
          if (!this.levelkeys && !this._decryptdata)
            return null;
          if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
            var t3 = this.levelkeys.identity;
            if (t3)
              this._decryptdata = t3.getDecryptData(this.sn);
            else {
              var e3 = Object.keys(this.levelkeys);
              if (1 === e3.length)
                return this._decryptdata = this.levelkeys[e3[0]].getDecryptData(this.sn);
            }
          }
          return this._decryptdata;
        } }, { key: "end", get: function() {
          return this.start + this.duration;
        } }, { key: "endProgramDateTime", get: function() {
          if (null === this.programDateTime)
            return null;
          if (!E(this.programDateTime))
            return null;
          var t3 = E(this.duration) ? this.duration : 0;
          return this.programDateTime + 1e3 * t3;
        } }, { key: "encrypted", get: function() {
          var t3;
          if (null != (t3 = this._decryptdata) && t3.encrypted)
            return true;
          if (this.levelkeys) {
            var e3 = Object.keys(this.levelkeys), r3 = e3.length;
            if (r3 > 1 || 1 === r3 && this.levelkeys[e3[0]].encrypted)
              return true;
          }
          return false;
        } }]), e2;
      }(B), K = function(t2) {
        function e2(e3, r2, i3, n2, a2) {
          var s2;
          (s2 = t2.call(this, i3) || this).fragOffset = 0, s2.duration = 0, s2.gap = false, s2.independent = false, s2.relurl = void 0, s2.fragment = void 0, s2.index = void 0, s2.stats = new M(), s2.duration = e3.decimalFloatingPoint("DURATION"), s2.gap = e3.bool("GAP"), s2.independent = e3.bool("INDEPENDENT"), s2.relurl = e3.enumeratedString("URI"), s2.fragment = r2, s2.index = n2;
          var o2 = e3.enumeratedString("BYTERANGE");
          return o2 && s2.setByteRange(o2, a2), a2 && (s2.fragOffset = a2.fragOffset + a2.duration), s2;
        }
        return l(e2, t2), a(e2, [{ key: "start", get: function() {
          return this.fragment.start + this.fragOffset;
        } }, { key: "end", get: function() {
          return this.start + this.duration;
        } }, { key: "loaded", get: function() {
          var t3 = this.elementaryStreams;
          return !!(t3.audio || t3.video || t3.audiovideo);
        } }]), e2;
      }(B), H = function() {
        function t2(t3) {
          this.PTSKnown = false, this.alignedSliding = false, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = true, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = true, this.advanced = true, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = false, this.canSkipUntil = 0, this.canSkipDateRanges = false, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = false, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = t3;
        }
        return t2.prototype.reloaded = function(t3) {
          if (!t3)
            return this.advanced = true, void (this.updated = true);
          var e2 = this.lastPartSn - t3.lastPartSn, r2 = this.lastPartIndex - t3.lastPartIndex;
          this.updated = this.endSN !== t3.endSN || !!r2 || !!e2, this.advanced = this.endSN > t3.endSN || e2 > 0 || 0 === e2 && r2 > 0, this.updated || this.advanced ? this.misses = Math.floor(0.6 * t3.misses) : this.misses = t3.misses + 1, this.availabilityDelay = t3.availabilityDelay;
        }, a(t2, [{ key: "hasProgramDateTime", get: function() {
          return !!this.fragments.length && E(this.fragments[this.fragments.length - 1].programDateTime);
        } }, { key: "levelTargetDuration", get: function() {
          return this.averagetargetduration || this.targetduration || 10;
        } }, { key: "drift", get: function() {
          var t3 = this.driftEndTime - this.driftStartTime;
          return t3 > 0 ? 1e3 * (this.driftEnd - this.driftStart) / t3 : 1;
        } }, { key: "edge", get: function() {
          return this.partEnd || this.fragmentEnd;
        } }, { key: "partEnd", get: function() {
          var t3;
          return null != (t3 = this.partList) && t3.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
        } }, { key: "fragmentEnd", get: function() {
          var t3;
          return null != (t3 = this.fragments) && t3.length ? this.fragments[this.fragments.length - 1].end : 0;
        } }, { key: "age", get: function() {
          return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
        } }, { key: "lastPartIndex", get: function() {
          var t3;
          return null != (t3 = this.partList) && t3.length ? this.partList[this.partList.length - 1].index : -1;
        } }, { key: "lastPartSn", get: function() {
          var t3;
          return null != (t3 = this.partList) && t3.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
        } }]), t2;
      }();
      function V(t2) {
        return Uint8Array.from(atob(t2), function(t3) {
          return t3.charCodeAt(0);
        });
      }
      function Y(t2) {
        var e2, r2, i3 = t2.split(":"), n2 = null;
        if ("data" === i3[0] && 2 === i3.length) {
          var a2 = i3[1].split(";"), s2 = a2[a2.length - 1].split(",");
          if (2 === s2.length) {
            var o2 = "base64" === s2[0], l2 = s2[1];
            o2 ? (a2.splice(-1, 1), n2 = V(l2)) : (e2 = W(l2).subarray(0, 16), (r2 = new Uint8Array(16)).set(e2, 16 - e2.length), n2 = r2);
          }
        }
        return n2;
      }
      function W(t2) {
        return Uint8Array.from(unescape(encodeURIComponent(t2)), function(t3) {
          return t3.charCodeAt(0);
        });
      }
      var j = { CLEARKEY: "org.w3.clearkey", FAIRPLAY: "com.apple.fps", PLAYREADY: "com.microsoft.playready", WIDEVINE: "com.widevine.alpha" }, q = "org.w3.clearkey", X = "com.apple.streamingkeydelivery", z = "com.microsoft.playready", Q = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
      function $(t2) {
        switch (t2) {
          case X:
            return j.FAIRPLAY;
          case z:
            return j.PLAYREADY;
          case Q:
            return j.WIDEVINE;
          case q:
            return j.CLEARKEY;
        }
      }
      var J = "edef8ba979d64acea3c827dcd51d21ed";
      function Z(t2) {
        switch (t2) {
          case j.FAIRPLAY:
            return X;
          case j.PLAYREADY:
            return z;
          case j.WIDEVINE:
            return Q;
          case j.CLEARKEY:
            return q;
        }
      }
      function tt(t2) {
        var e2 = t2.drmSystems, r2 = t2.widevineLicenseUrl, i3 = e2 ? [j.FAIRPLAY, j.WIDEVINE, j.PLAYREADY, j.CLEARKEY].filter(function(t3) {
          return !!e2[t3];
        }) : [];
        return !i3[j.WIDEVINE] && r2 && i3.push(j.WIDEVINE), i3;
      }
      var et = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
      function rt(t2, e2, r2) {
        return Uint8Array.prototype.slice ? t2.slice(e2, r2) : new Uint8Array(Array.prototype.slice.call(t2, e2, r2));
      }
      var it, nt = function(t2, e2) {
        return e2 + 10 <= t2.length && 73 === t2[e2] && 68 === t2[e2 + 1] && 51 === t2[e2 + 2] && t2[e2 + 3] < 255 && t2[e2 + 4] < 255 && t2[e2 + 6] < 128 && t2[e2 + 7] < 128 && t2[e2 + 8] < 128 && t2[e2 + 9] < 128;
      }, at = function(t2, e2) {
        return e2 + 10 <= t2.length && 51 === t2[e2] && 68 === t2[e2 + 1] && 73 === t2[e2 + 2] && t2[e2 + 3] < 255 && t2[e2 + 4] < 255 && t2[e2 + 6] < 128 && t2[e2 + 7] < 128 && t2[e2 + 8] < 128 && t2[e2 + 9] < 128;
      }, st = function(t2, e2) {
        for (var r2 = e2, i3 = 0; nt(t2, e2); )
          i3 += 10, i3 += ot(t2, e2 + 6), at(t2, e2 + 10) && (i3 += 10), e2 += i3;
        if (i3 > 0)
          return t2.subarray(r2, r2 + i3);
      }, ot = function(t2, e2) {
        var r2 = 0;
        return r2 = (127 & t2[e2]) << 21, r2 |= (127 & t2[e2 + 1]) << 14, r2 |= (127 & t2[e2 + 2]) << 7, r2 |= 127 & t2[e2 + 3];
      }, lt = function(t2, e2) {
        return nt(t2, e2) && ot(t2, e2 + 6) + 10 <= t2.length - e2;
      }, ut = function(t2) {
        return t2 && "PRIV" === t2.key && "com.apple.streaming.transportStreamTimestamp" === t2.info;
      }, ht = function(t2) {
        var e2 = String.fromCharCode(t2[0], t2[1], t2[2], t2[3]), r2 = ot(t2, 4);
        return { type: e2, size: r2, data: t2.subarray(10, 10 + r2) };
      }, dt = function(t2) {
        for (var e2 = 0, r2 = []; nt(t2, e2); ) {
          for (var i3 = ot(t2, e2 + 6), n2 = (e2 += 10) + i3; e2 + 8 < n2; ) {
            var a2 = ht(t2.subarray(e2)), s2 = ct(a2);
            s2 && r2.push(s2), e2 += a2.size + 10;
          }
          at(t2, e2) && (e2 += 10);
        }
        return r2;
      }, ct = function(t2) {
        return "PRIV" === t2.type ? ft(t2) : "W" === t2.type[0] ? vt(t2) : gt(t2);
      }, ft = function(t2) {
        if (!(t2.size < 2)) {
          var e2 = pt(t2.data, true), r2 = new Uint8Array(t2.data.subarray(e2.length + 1));
          return { key: t2.type, info: e2, data: r2.buffer };
        }
      }, gt = function(t2) {
        if (!(t2.size < 2)) {
          if ("TXXX" === t2.type) {
            var e2 = 1, r2 = pt(t2.data.subarray(e2), true);
            e2 += r2.length + 1;
            var i3 = pt(t2.data.subarray(e2));
            return { key: t2.type, info: r2, data: i3 };
          }
          var n2 = pt(t2.data.subarray(1));
          return { key: t2.type, data: n2 };
        }
      }, vt = function(t2) {
        if ("WXXX" === t2.type) {
          if (t2.size < 2)
            return;
          var e2 = 1, r2 = pt(t2.data.subarray(e2), true);
          e2 += r2.length + 1;
          var i3 = pt(t2.data.subarray(e2));
          return { key: t2.type, info: r2, data: i3 };
        }
        var n2 = pt(t2.data);
        return { key: t2.type, data: n2 };
      }, mt = function(t2) {
        if (8 === t2.data.byteLength) {
          var e2 = new Uint8Array(t2.data), r2 = 1 & e2[3], i3 = (e2[4] << 23) + (e2[5] << 15) + (e2[6] << 7) + e2[7];
          return i3 /= 45, r2 && (i3 += 4772185884e-2), Math.round(i3);
        }
      }, pt = function(t2, e2) {
        void 0 === e2 && (e2 = false);
        var r2 = yt();
        if (r2) {
          var i3 = r2.decode(t2);
          if (e2) {
            var n2 = i3.indexOf("\0");
            return -1 !== n2 ? i3.substring(0, n2) : i3;
          }
          return i3.replace(/\0/g, "");
        }
        for (var a2, s2, o2, l2 = t2.length, u2 = "", h2 = 0; h2 < l2; ) {
          if (0 === (a2 = t2[h2++]) && e2)
            return u2;
          if (0 !== a2 && 3 !== a2)
            switch (a2 >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                u2 += String.fromCharCode(a2);
                break;
              case 12:
              case 13:
                s2 = t2[h2++], u2 += String.fromCharCode((31 & a2) << 6 | 63 & s2);
                break;
              case 14:
                s2 = t2[h2++], o2 = t2[h2++], u2 += String.fromCharCode((15 & a2) << 12 | (63 & s2) << 6 | (63 & o2) << 0);
            }
        }
        return u2;
      };
      function yt() {
        return it || void 0 === self.TextDecoder || (it = new self.TextDecoder("utf-8")), it;
      }
      var Tt = function(t2) {
        for (var e2 = "", r2 = 0; r2 < t2.length; r2++) {
          var i3 = t2[r2].toString(16);
          i3.length < 2 && (i3 = "0" + i3), e2 += i3;
        }
        return e2;
      }, Et = Math.pow(2, 32) - 1, St = [].push, Lt = { video: 1, audio: 2, id3: 3, text: 4 };
      function Rt(t2) {
        return String.fromCharCode.apply(null, t2);
      }
      function At(t2, e2) {
        var r2 = t2[e2] << 8 | t2[e2 + 1];
        return r2 < 0 ? 65536 + r2 : r2;
      }
      function kt(t2, e2) {
        var r2 = bt(t2, e2);
        return r2 < 0 ? 4294967296 + r2 : r2;
      }
      function bt(t2, e2) {
        return t2[e2] << 24 | t2[e2 + 1] << 16 | t2[e2 + 2] << 8 | t2[e2 + 3];
      }
      function Dt(t2, e2, r2) {
        t2[e2] = r2 >> 24, t2[e2 + 1] = r2 >> 16 & 255, t2[e2 + 2] = r2 >> 8 & 255, t2[e2 + 3] = 255 & r2;
      }
      function It(t2, e2) {
        var r2 = [];
        if (!e2.length)
          return r2;
        for (var i3 = t2.byteLength, n2 = 0; n2 < i3; ) {
          var a2 = kt(t2, n2), s2 = a2 > 1 ? n2 + a2 : i3;
          if (Rt(t2.subarray(n2 + 4, n2 + 8)) === e2[0])
            if (1 === e2.length)
              r2.push(t2.subarray(n2 + 8, s2));
            else {
              var o2 = It(t2.subarray(n2 + 8, s2), e2.slice(1));
              o2.length && St.apply(r2, o2);
            }
          n2 = s2;
        }
        return r2;
      }
      function wt(t2) {
        var e2 = [], r2 = t2[0], i3 = 8, n2 = kt(t2, i3);
        i3 += 4, i3 += 0 === r2 ? 8 : 16, i3 += 2;
        var a2 = t2.length + 0, s2 = At(t2, i3);
        i3 += 2;
        for (var o2 = 0; o2 < s2; o2++) {
          var l2 = i3, u2 = kt(t2, l2);
          l2 += 4;
          var h2 = 2147483647 & u2;
          if (1 == (2147483648 & u2) >>> 31)
            return w.warn("SIDX has hierarchical references (not supported)"), null;
          var d2 = kt(t2, l2);
          l2 += 4, e2.push({ referenceSize: h2, subsegmentDuration: d2, info: { duration: d2 / n2, start: a2, end: a2 + h2 - 1 } }), a2 += h2, i3 = l2 += 4;
        }
        return { earliestPresentationTime: 0, timescale: n2, version: r2, referencesCount: s2, references: e2 };
      }
      function Ct(t2) {
        for (var e2 = [], r2 = It(t2, ["moov", "trak"]), i3 = 0; i3 < r2.length; i3++) {
          var n2 = r2[i3], a2 = It(n2, ["tkhd"])[0];
          if (a2) {
            var s2 = a2[0], o2 = 0 === s2 ? 12 : 20, l2 = kt(a2, o2), u2 = It(n2, ["mdia", "mdhd"])[0];
            if (u2) {
              var h2 = kt(u2, o2 = 0 === (s2 = u2[0]) ? 12 : 20), d2 = It(n2, ["mdia", "hdlr"])[0];
              if (d2) {
                var c2 = Rt(d2.subarray(8, 12)), f2 = { soun: O, vide: N }[c2];
                if (f2) {
                  var g2 = It(n2, ["mdia", "minf", "stbl", "stsd"])[0], v2 = void 0;
                  g2 && (v2 = Rt(g2.subarray(12, 16))), e2[l2] = { timescale: h2, type: f2 }, e2[f2] = { timescale: h2, id: l2, codec: v2 };
                }
              }
            }
          }
        }
        return It(t2, ["moov", "mvex", "trex"]).forEach(function(t3) {
          var r3 = kt(t3, 4), i4 = e2[r3];
          i4 && (i4.default = { duration: kt(t3, 12), flags: kt(t3, 20) });
        }), e2;
      }
      function _t(t2) {
        var e2 = It(t2, ["schm"])[0];
        if (e2) {
          var r2 = Rt(e2.subarray(4, 8));
          if ("cbcs" === r2 || "cenc" === r2)
            return It(t2, ["schi", "tenc"])[0];
        }
        return w.error("[eme] missing 'schm' box"), null;
      }
      function Pt(t2) {
        var e2 = kt(t2, 0), r2 = 8;
        1 & e2 && (r2 += 4), 4 & e2 && (r2 += 4);
        for (var i3 = 0, n2 = kt(t2, 4), a2 = 0; a2 < n2; a2++)
          256 & e2 && (i3 += kt(t2, r2), r2 += 4), 512 & e2 && (r2 += 4), 1024 & e2 && (r2 += 4), 2048 & e2 && (r2 += 4);
        return i3;
      }
      function xt(t2, e2) {
        var r2 = new Uint8Array(t2.length + e2.length);
        return r2.set(t2), r2.set(e2, t2.length), r2;
      }
      function Ft(t2, e2) {
        var r2 = [], i3 = e2.samples, n2 = e2.timescale, a2 = e2.id, s2 = false;
        return It(i3, ["moof"]).map(function(o2) {
          var l2 = o2.byteOffset - 8;
          It(o2, ["traf"]).map(function(o3) {
            var u2 = It(o3, ["tfdt"]).map(function(t3) {
              var e3 = t3[0], r3 = kt(t3, 4);
              return 1 === e3 && (r3 *= Math.pow(2, 32), r3 += kt(t3, 8)), r3 / n2;
            })[0];
            return void 0 !== u2 && (t2 = u2), It(o3, ["tfhd"]).map(function(u3) {
              var h2 = kt(u3, 4), d2 = 16777215 & kt(u3, 0), c2 = 0, f2 = 0 != (16 & d2), g2 = 0, v2 = 0 != (32 & d2), m2 = 8;
              h2 === a2 && (0 != (1 & d2) && (m2 += 8), 0 != (2 & d2) && (m2 += 4), 0 != (8 & d2) && (c2 = kt(u3, m2), m2 += 4), f2 && (g2 = kt(u3, m2), m2 += 4), v2 && (m2 += 4), "video" === e2.type && (s2 = function(t3) {
                if (!t3)
                  return false;
                var e3 = t3.indexOf("."), r3 = e3 < 0 ? t3 : t3.substring(0, e3);
                return "hvc1" === r3 || "hev1" === r3 || "dvh1" === r3 || "dvhe" === r3;
              }(e2.codec)), It(o3, ["trun"]).map(function(a3) {
                var o4 = a3[0], u4 = 16777215 & kt(a3, 0), h3 = 0 != (1 & u4), d3 = 0, f3 = 0 != (4 & u4), v3 = 0 != (256 & u4), m3 = 0, p2 = 0 != (512 & u4), y2 = 0, T2 = 0 != (1024 & u4), E2 = 0 != (2048 & u4), S2 = 0, L2 = kt(a3, 4), R2 = 8;
                h3 && (d3 = kt(a3, R2), R2 += 4), f3 && (R2 += 4);
                for (var A2 = d3 + l2, k2 = 0; k2 < L2; k2++) {
                  if (v3 ? (m3 = kt(a3, R2), R2 += 4) : m3 = c2, p2 ? (y2 = kt(a3, R2), R2 += 4) : y2 = g2, T2 && (R2 += 4), E2 && (S2 = 0 === o4 ? kt(a3, R2) : bt(a3, R2), R2 += 4), e2.type === N)
                    for (var b2 = 0; b2 < y2; ) {
                      var D2 = kt(i3, A2);
                      Mt(s2, i3[A2 += 4]) && Ot(i3.subarray(A2, A2 + D2), s2 ? 2 : 1, t2 + S2 / n2, r2), A2 += D2, b2 += D2 + 4;
                    }
                  t2 += m3 / n2;
                }
              }));
            });
          });
        }), r2;
      }
      function Mt(t2, e2) {
        if (t2) {
          var r2 = e2 >> 1 & 63;
          return 39 === r2 || 40 === r2;
        }
        return 6 == (31 & e2);
      }
      function Ot(t2, e2, r2, i3) {
        var n2 = Nt(t2), a2 = 0;
        a2 += e2;
        for (var s2 = 0, o2 = 0, l2 = false, u2 = 0; a2 < n2.length; ) {
          s2 = 0;
          do {
            if (a2 >= n2.length)
              break;
            s2 += u2 = n2[a2++];
          } while (255 === u2);
          o2 = 0;
          do {
            if (a2 >= n2.length)
              break;
            o2 += u2 = n2[a2++];
          } while (255 === u2);
          var h2 = n2.length - a2;
          if (!l2 && 4 === s2 && a2 < n2.length) {
            if (l2 = true, 181 === n2[a2++]) {
              var d2 = At(n2, a2);
              if (a2 += 2, 49 === d2) {
                var c2 = kt(n2, a2);
                if (a2 += 4, 1195456820 === c2) {
                  var f2 = n2[a2++];
                  if (3 === f2) {
                    var g2 = n2[a2++], v2 = 64 & g2, m2 = v2 ? 2 + 3 * (31 & g2) : 0, p2 = new Uint8Array(m2);
                    if (v2) {
                      p2[0] = g2;
                      for (var y2 = 1; y2 < m2; y2++)
                        p2[y2] = n2[a2++];
                    }
                    i3.push({ type: f2, payloadType: s2, pts: r2, bytes: p2 });
                  }
                }
              }
            }
          } else if (5 === s2 && o2 < h2) {
            if (l2 = true, o2 > 16) {
              for (var T2 = [], E2 = 0; E2 < 16; E2++) {
                var S2 = n2[a2++].toString(16);
                T2.push(1 == S2.length ? "0" + S2 : S2), 3 !== E2 && 5 !== E2 && 7 !== E2 && 9 !== E2 || T2.push("-");
              }
              for (var L2 = o2 - 16, R2 = new Uint8Array(L2), A2 = 0; A2 < L2; A2++)
                R2[A2] = n2[a2++];
              i3.push({ payloadType: s2, pts: r2, uuid: T2.join(""), userData: pt(R2), userDataBytes: R2 });
            }
          } else if (o2 < h2)
            a2 += o2;
          else if (o2 > h2)
            break;
        }
      }
      function Nt(t2) {
        for (var e2 = t2.byteLength, r2 = [], i3 = 1; i3 < e2 - 2; )
          0 === t2[i3] && 0 === t2[i3 + 1] && 3 === t2[i3 + 2] ? (r2.push(i3 + 2), i3 += 2) : i3++;
        if (0 === r2.length)
          return t2;
        var n2 = e2 - r2.length, a2 = new Uint8Array(n2), s2 = 0;
        for (i3 = 0; i3 < n2; s2++, i3++)
          s2 === r2[0] && (s2++, r2.shift()), a2[i3] = t2[s2];
        return a2;
      }
      function Ut(t2, e2, r2) {
        if (16 !== t2.byteLength)
          throw new RangeError("Invalid system id");
        var i3, n2, a2;
        if (e2) {
          i3 = 1, n2 = new Uint8Array(16 * e2.length);
          for (var s2 = 0; s2 < e2.length; s2++) {
            var o2 = e2[s2];
            if (16 !== o2.byteLength)
              throw new RangeError("Invalid key");
            n2.set(o2, 16 * s2);
          }
        } else
          i3 = 0, n2 = new Uint8Array();
        i3 > 0 ? (a2 = new Uint8Array(4), e2.length > 0 && new DataView(a2.buffer).setUint32(0, e2.length, false)) : a2 = new Uint8Array();
        var l2 = new Uint8Array(4);
        return r2 && r2.byteLength > 0 && new DataView(l2.buffer).setUint32(0, r2.byteLength, false), function(t3) {
          for (var e3 = arguments.length, r3 = new Array(e3 > 1 ? e3 - 1 : 0), i4 = 1; i4 < e3; i4++)
            r3[i4 - 1] = arguments[i4];
          for (var n3 = r3.length, a3 = 8, s3 = n3; s3--; )
            a3 += r3[s3].byteLength;
          var o3 = new Uint8Array(a3);
          for (o3[0] = a3 >> 24 & 255, o3[1] = a3 >> 16 & 255, o3[2] = a3 >> 8 & 255, o3[3] = 255 & a3, o3.set(t3, 4), s3 = 0, a3 = 8; s3 < n3; s3++)
            o3.set(r3[s3], a3), a3 += r3[s3].byteLength;
          return o3;
        }([112, 115, 115, 104], new Uint8Array([i3, 0, 0, 0]), t2, a2, n2, l2, r2 || new Uint8Array());
      }
      var Bt = {}, Gt = function() {
        function t2(t3, e3, r2, i3, n2) {
          void 0 === i3 && (i3 = [1]), void 0 === n2 && (n2 = null), this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = t3, this.uri = e3, this.keyFormat = r2, this.keyFormatVersions = i3, this.iv = n2, this.encrypted = !!t3 && "NONE" !== t3, this.isCommonEncryption = this.encrypted && "AES-128" !== t3;
        }
        t2.clearKeyUriToKeyIdMap = function() {
          Bt = {};
        };
        var e2 = t2.prototype;
        return e2.isSupported = function() {
          if (this.method) {
            if ("AES-128" === this.method || "NONE" === this.method)
              return true;
            if ("identity" === this.keyFormat)
              return "SAMPLE-AES" === this.method;
            switch (this.keyFormat) {
              case X:
              case Q:
              case z:
              case q:
                return -1 !== ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method);
            }
          }
          return false;
        }, e2.getDecryptData = function(e3) {
          if (!this.encrypted || !this.uri)
            return null;
          if ("AES-128" === this.method && this.uri && !this.iv) {
            "number" != typeof e3 && ("AES-128" !== this.method || this.iv || w.warn('missing IV for initialization segment with method="' + this.method + '" - compliance issue'), e3 = 0);
            var r2 = function(t3) {
              for (var e4 = new Uint8Array(16), r3 = 12; r3 < 16; r3++)
                e4[r3] = t3 >> 8 * (15 - r3) & 255;
              return e4;
            }(e3);
            return new t2(this.method, this.uri, "identity", this.keyFormatVersions, r2);
          }
          var i3 = Y(this.uri);
          if (i3)
            switch (this.keyFormat) {
              case Q:
                this.pssh = i3, i3.length >= 22 && (this.keyId = i3.subarray(i3.length - 22, i3.length - 6));
                break;
              case z:
                var n2 = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                this.pssh = Ut(n2, null, i3);
                var a2 = new Uint16Array(i3.buffer, i3.byteOffset, i3.byteLength / 2), s2 = String.fromCharCode.apply(null, Array.from(a2)), o2 = s2.substring(s2.indexOf("<"), s2.length), l2 = new DOMParser().parseFromString(o2, "text/xml").getElementsByTagName("KID")[0];
                if (l2) {
                  var u2 = l2.childNodes[0] ? l2.childNodes[0].nodeValue : l2.getAttribute("VALUE");
                  if (u2) {
                    var h2 = V(u2).subarray(0, 16);
                    !function(t3) {
                      var e4 = function(t4, e5, r3) {
                        var i4 = t4[e5];
                        t4[e5] = t4[r3], t4[r3] = i4;
                      };
                      e4(t3, 0, 3), e4(t3, 1, 2), e4(t3, 4, 5), e4(t3, 6, 7);
                    }(h2), this.keyId = h2;
                  }
                }
                break;
              default:
                var d2 = i3.subarray(0, 16);
                if (16 !== d2.length) {
                  var c2 = new Uint8Array(16);
                  c2.set(d2, 16 - d2.length), d2 = c2;
                }
                this.keyId = d2;
            }
          if (!this.keyId || 16 !== this.keyId.byteLength) {
            var f2 = Bt[this.uri];
            if (!f2) {
              var g2 = Object.keys(Bt).length % Number.MAX_SAFE_INTEGER;
              f2 = new Uint8Array(16), new DataView(f2.buffer, 12, 4).setUint32(0, g2), Bt[this.uri] = f2;
            }
            this.keyId = f2;
          }
          return this;
        }, t2;
      }(), Kt = /\{\$([a-zA-Z0-9-_]+)\}/g;
      function Ht(t2) {
        return Kt.test(t2);
      }
      function Vt(t2, e2, r2) {
        if (null !== t2.variableList || t2.hasVariableRefs)
          for (var i3 = r2.length; i3--; ) {
            var n2 = r2[i3], a2 = e2[n2];
            a2 && (e2[n2] = Yt(t2, a2));
          }
      }
      function Yt(t2, e2) {
        if (null !== t2.variableList || t2.hasVariableRefs) {
          var r2 = t2.variableList;
          return e2.replace(Kt, function(e3) {
            var i3 = e3.substring(2, e3.length - 1), n2 = null == r2 ? void 0 : r2[i3];
            return void 0 === n2 ? (t2.playlistParsingError || (t2.playlistParsingError = new Error('Missing preceding EXT-X-DEFINE tag for Variable Reference: "' + i3 + '"')), e3) : n2;
          });
        }
        return e2;
      }
      function Wt(t2, e2, r2) {
        var i3, n2, a2 = t2.variableList;
        if (a2 || (t2.variableList = a2 = {}), "QUERYPARAM" in e2) {
          i3 = e2.QUERYPARAM;
          try {
            var s2 = new self.URL(r2).searchParams;
            if (!s2.has(i3))
              throw new Error('"' + i3 + '" does not match any query parameter in URI: "' + r2 + '"');
            n2 = s2.get(i3);
          } catch (e3) {
            t2.playlistParsingError || (t2.playlistParsingError = new Error("EXT-X-DEFINE QUERYPARAM: " + e3.message));
          }
        } else
          i3 = e2.NAME, n2 = e2.VALUE;
        i3 in a2 ? t2.playlistParsingError || (t2.playlistParsingError = new Error('EXT-X-DEFINE duplicate Variable Name declarations: "' + i3 + '"')) : a2[i3] = n2 || "";
      }
      function jt(t2, e2, r2) {
        var i3 = e2.IMPORT;
        if (r2 && i3 in r2) {
          var n2 = t2.variableList;
          n2 || (t2.variableList = n2 = {}), n2[i3] = r2[i3];
        } else
          t2.playlistParsingError || (t2.playlistParsingError = new Error('EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "' + i3 + '"'));
      }
      function qt() {
        if ("undefined" != typeof self)
          return self.MediaSource || self.WebKitMediaSource;
      }
      var Xt = { audio: { a3ds: true, "ac-3": true, "ac-4": true, alac: true, alaw: true, dra1: true, "dts+": true, "dts-": true, dtsc: true, dtse: true, dtsh: true, "ec-3": true, enca: true, g719: true, g726: true, m4ae: true, mha1: true, mha2: true, mhm1: true, mhm2: true, mlpa: true, mp4a: true, "raw ": true, Opus: true, opus: true, samr: true, sawb: true, sawp: true, sevc: true, sqcp: true, ssmv: true, twos: true, ulaw: true }, video: { avc1: true, avc2: true, avc3: true, avc4: true, avcp: true, av01: true, drac: true, dva1: true, dvav: true, dvh1: true, dvhe: true, encv: true, hev1: true, hvc1: true, mjp2: true, mp4v: true, mvc1: true, mvc2: true, mvc3: true, mvc4: true, resv: true, rv60: true, s263: true, svc1: true, svc2: true, "vc-1": true, vp08: true, vp09: true }, text: { stpp: true, wvtt: true } }, zt = qt();
      function Qt(t2, e2) {
        var r2;
        return null != (r2 = null == zt ? void 0 : zt.isTypeSupported((e2 || "video") + '/mp4;codecs="' + t2 + '"')) && r2;
      }
      var $t = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, Jt = /#EXT-X-MEDIA:(.*)/g, Zt = /^#EXT(?:INF|-X-TARGETDURATION):/m, te = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"), ee = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")), re = function() {
        function t2() {
        }
        return t2.findGroup = function(t3, e2) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var i3 = t3[r2];
            if (i3.id === e2)
              return i3;
          }
        }, t2.convertAVC1ToAVCOTI = function(t3) {
          var e2 = t3.split(".");
          if (e2.length > 2) {
            var r2 = e2.shift() + ".";
            return r2 += parseInt(e2.shift()).toString(16), r2 += ("000" + parseInt(e2.shift()).toString(16)).slice(-4);
          }
          return t3;
        }, t2.resolve = function(t3, e2) {
          return T.buildAbsoluteURL(e2, t3, { alwaysNormalize: true });
        }, t2.isMediaPlaylist = function(t3) {
          return Zt.test(t3);
        }, t2.parseMasterPlaylist = function(e2, r2) {
          var i3, n2 = { contentSteering: null, levels: [], playlistParsingError: null, sessionData: null, sessionKeys: null, startTimeOffset: null, variableList: null, hasVariableRefs: Ht(e2) }, a2 = [];
          for ($t.lastIndex = 0; null != (i3 = $t.exec(e2)); )
            if (i3[1]) {
              var s2, o2 = new P(i3[1]);
              Vt(n2, o2, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
              var l2 = Yt(n2, i3[2]), u2 = { attrs: o2, bitrate: o2.decimalInteger("AVERAGE-BANDWIDTH") || o2.decimalInteger("BANDWIDTH"), name: o2.NAME, url: t2.resolve(l2, r2) }, h2 = o2.decimalResolution("RESOLUTION");
              h2 && (u2.width = h2.width, u2.height = h2.height), ae((o2.CODECS || "").split(/[ ,]+/).filter(function(t3) {
                return t3;
              }), u2), u2.videoCodec && -1 !== u2.videoCodec.indexOf("avc1") && (u2.videoCodec = t2.convertAVC1ToAVCOTI(u2.videoCodec)), null != (s2 = u2.unknownCodecs) && s2.length || a2.push(u2), n2.levels.push(u2);
            } else if (i3[3]) {
              var d2 = i3[3], c2 = i3[4];
              switch (d2) {
                case "SESSION-DATA":
                  var f2 = new P(c2);
                  Vt(n2, f2, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
                  var g2 = f2["DATA-ID"];
                  g2 && (null === n2.sessionData && (n2.sessionData = {}), n2.sessionData[g2] = f2);
                  break;
                case "SESSION-KEY":
                  var v2 = ie(c2, r2, n2);
                  v2.encrypted && v2.isSupported() ? (null === n2.sessionKeys && (n2.sessionKeys = []), n2.sessionKeys.push(v2)) : w.warn('[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "' + c2 + '"');
                  break;
                case "DEFINE":
                  var m2 = new P(c2);
                  Vt(n2, m2, ["NAME", "VALUE", "QUERYPARAM"]), Wt(n2, m2, r2);
                  break;
                case "CONTENT-STEERING":
                  var p2 = new P(c2);
                  Vt(n2, p2, ["SERVER-URI", "PATHWAY-ID"]), n2.contentSteering = { uri: t2.resolve(p2["SERVER-URI"], r2), pathwayId: p2["PATHWAY-ID"] || "." };
                  break;
                case "START":
                  n2.startTimeOffset = ne(c2);
              }
            }
          var y2 = a2.length > 0 && a2.length < n2.levels.length;
          return n2.levels = y2 ? a2 : n2.levels, 0 === n2.levels.length && (n2.playlistParsingError = new Error("no levels found in manifest")), n2;
        }, t2.parseMasterPlaylistMedia = function(e2, r2, i3) {
          var n2, a2 = {}, s2 = i3.levels, o2 = { AUDIO: s2.map(function(t3) {
            return { id: t3.attrs.AUDIO, audioCodec: t3.audioCodec };
          }), SUBTITLES: s2.map(function(t3) {
            return { id: t3.attrs.SUBTITLES, textCodec: t3.textCodec };
          }), "CLOSED-CAPTIONS": [] }, l2 = 0;
          for (Jt.lastIndex = 0; null !== (n2 = Jt.exec(e2)); ) {
            var u2 = new P(n2[1]), h2 = u2.TYPE;
            if (h2) {
              var d2 = o2[h2], c2 = a2[h2] || [];
              a2[h2] = c2, Vt(i3, u2, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
              var f2 = { attrs: u2, bitrate: 0, id: l2++, groupId: u2["GROUP-ID"] || "", instreamId: u2["INSTREAM-ID"], name: u2.NAME || u2.LANGUAGE || "", type: h2, default: u2.bool("DEFAULT"), autoselect: u2.bool("AUTOSELECT"), forced: u2.bool("FORCED"), lang: u2.LANGUAGE, url: u2.URI ? t2.resolve(u2.URI, r2) : "" };
              if (null != d2 && d2.length) {
                var g2 = t2.findGroup(d2, f2.groupId) || d2[0];
                se(f2, g2, "audioCodec"), se(f2, g2, "textCodec");
              }
              c2.push(f2);
            }
          }
          return a2;
        }, t2.parseLevelPlaylist = function(t3, e2, r2, i3, n2, a2) {
          var s2, l2, u2, h2 = new H(e2), d2 = h2.fragments, c2 = null, f2 = 0, g2 = 0, v2 = 0, m2 = 0, p2 = null, y2 = new G(i3, e2), T2 = -1, S2 = false;
          for (te.lastIndex = 0, h2.m3u8 = t3, h2.hasVariableRefs = Ht(t3); null !== (s2 = te.exec(t3)); ) {
            S2 && (S2 = false, (y2 = new G(i3, e2)).start = v2, y2.sn = f2, y2.cc = m2, y2.level = r2, c2 && (y2.initSegment = c2, y2.rawProgramDateTime = c2.rawProgramDateTime, c2.rawProgramDateTime = null));
            var L2 = s2[1];
            if (L2) {
              y2.duration = parseFloat(L2);
              var R2 = (" " + s2[2]).slice(1);
              y2.title = R2 || null, y2.tagList.push(R2 ? ["INF", L2, R2] : ["INF", L2]);
            } else if (s2[3]) {
              if (E(y2.duration)) {
                y2.start = v2, u2 && ue(y2, u2, h2), y2.sn = f2, y2.level = r2, y2.cc = m2, y2.urlId = n2, d2.push(y2);
                var A2 = (" " + s2[3]).slice(1);
                y2.relurl = Yt(h2, A2), oe(y2, p2), p2 = y2, v2 += y2.duration, f2++, g2 = 0, S2 = true;
              }
            } else if (s2[4]) {
              var k2 = (" " + s2[4]).slice(1);
              p2 ? y2.setByteRange(k2, p2) : y2.setByteRange(k2);
            } else if (s2[5])
              y2.rawProgramDateTime = (" " + s2[5]).slice(1), y2.tagList.push(["PROGRAM-DATE-TIME", y2.rawProgramDateTime]), -1 === T2 && (T2 = d2.length);
            else {
              if (!(s2 = s2[0].match(ee))) {
                w.warn("No matches on slow regex match for level playlist!");
                continue;
              }
              for (l2 = 1; l2 < s2.length && void 0 === s2[l2]; l2++)
                ;
              var b2 = (" " + s2[l2]).slice(1), D2 = (" " + s2[l2 + 1]).slice(1), I2 = s2[l2 + 2] ? (" " + s2[l2 + 2]).slice(1) : "";
              switch (b2) {
                case "PLAYLIST-TYPE":
                  h2.type = D2.toUpperCase();
                  break;
                case "MEDIA-SEQUENCE":
                  f2 = h2.startSN = parseInt(D2);
                  break;
                case "SKIP":
                  var C2 = new P(D2);
                  Vt(h2, C2, ["RECENTLY-REMOVED-DATERANGES"]);
                  var _2 = C2.decimalInteger("SKIPPED-SEGMENTS");
                  if (E(_2)) {
                    h2.skippedSegments = _2;
                    for (var x2 = _2; x2--; )
                      d2.unshift(null);
                    f2 += _2;
                  }
                  var M2 = C2.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                  M2 && (h2.recentlyRemovedDateranges = M2.split("	"));
                  break;
                case "TARGETDURATION":
                  h2.targetduration = Math.max(parseInt(D2), 1);
                  break;
                case "VERSION":
                  h2.version = parseInt(D2);
                  break;
                case "EXTM3U":
                  break;
                case "ENDLIST":
                  h2.live = false;
                  break;
                case "#":
                  (D2 || I2) && y2.tagList.push(I2 ? [D2, I2] : [D2]);
                  break;
                case "DISCONTINUITY":
                  m2++, y2.tagList.push(["DIS"]);
                  break;
                case "GAP":
                  y2.gap = true, y2.tagList.push([b2]);
                  break;
                case "BITRATE":
                  y2.tagList.push([b2, D2]);
                  break;
                case "DATERANGE":
                  var O2 = new P(D2);
                  Vt(h2, O2, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]), Vt(h2, O2, O2.clientAttrs);
                  var N2 = new F(O2, h2.dateRanges[O2.ID]);
                  N2.isValid || h2.skippedSegments ? h2.dateRanges[N2.id] = N2 : w.warn('Ignoring invalid DATERANGE tag: "' + D2 + '"'), y2.tagList.push(["EXT-X-DATERANGE", D2]);
                  break;
                case "DEFINE":
                  var U2 = new P(D2);
                  Vt(h2, U2, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]), "IMPORT" in U2 ? jt(h2, U2, a2) : Wt(h2, U2, e2);
                  break;
                case "DISCONTINUITY-SEQUENCE":
                  m2 = parseInt(D2);
                  break;
                case "KEY":
                  var B2 = ie(D2, e2, h2);
                  if (B2.isSupported()) {
                    if ("NONE" === B2.method) {
                      u2 = void 0;
                      break;
                    }
                    u2 || (u2 = {}), u2[B2.keyFormat] && (u2 = o({}, u2)), u2[B2.keyFormat] = B2;
                  } else
                    w.warn('[Keys] Ignoring invalid EXT-X-KEY tag: "' + D2 + '"');
                  break;
                case "START":
                  h2.startTimeOffset = ne(D2);
                  break;
                case "MAP":
                  var V2 = new P(D2);
                  if (Vt(h2, V2, ["BYTERANGE", "URI"]), y2.duration) {
                    var Y2 = new G(i3, e2);
                    le(Y2, V2, r2, u2), c2 = Y2, y2.initSegment = c2, c2.rawProgramDateTime && !y2.rawProgramDateTime && (y2.rawProgramDateTime = c2.rawProgramDateTime);
                  } else
                    le(y2, V2, r2, u2), c2 = y2, S2 = true;
                  break;
                case "SERVER-CONTROL":
                  var W2 = new P(D2);
                  h2.canBlockReload = W2.bool("CAN-BLOCK-RELOAD"), h2.canSkipUntil = W2.optionalFloat("CAN-SKIP-UNTIL", 0), h2.canSkipDateRanges = h2.canSkipUntil > 0 && W2.bool("CAN-SKIP-DATERANGES"), h2.partHoldBack = W2.optionalFloat("PART-HOLD-BACK", 0), h2.holdBack = W2.optionalFloat("HOLD-BACK", 0);
                  break;
                case "PART-INF":
                  var j2 = new P(D2);
                  h2.partTarget = j2.decimalFloatingPoint("PART-TARGET");
                  break;
                case "PART":
                  var q2 = h2.partList;
                  q2 || (q2 = h2.partList = []);
                  var X2 = g2 > 0 ? q2[q2.length - 1] : void 0, z2 = g2++, Q2 = new P(D2);
                  Vt(h2, Q2, ["BYTERANGE", "URI"]);
                  var $2 = new K(Q2, y2, e2, z2, X2);
                  q2.push($2), y2.duration += $2.duration;
                  break;
                case "PRELOAD-HINT":
                  var J2 = new P(D2);
                  Vt(h2, J2, ["URI"]), h2.preloadHint = J2;
                  break;
                case "RENDITION-REPORT":
                  var Z2 = new P(D2);
                  Vt(h2, Z2, ["URI"]), h2.renditionReports = h2.renditionReports || [], h2.renditionReports.push(Z2);
                  break;
                default:
                  w.warn("line parsed but not handled: " + s2);
              }
            }
          }
          p2 && !p2.relurl ? (d2.pop(), v2 -= p2.duration, h2.partList && (h2.fragmentHint = p2)) : h2.partList && (oe(y2, p2), y2.cc = m2, h2.fragmentHint = y2, u2 && ue(y2, u2, h2));
          var tt2 = d2.length, et2 = d2[0], rt2 = d2[tt2 - 1];
          if ((v2 += h2.skippedSegments * h2.targetduration) > 0 && tt2 && rt2) {
            h2.averagetargetduration = v2 / tt2;
            var it2 = rt2.sn;
            h2.endSN = "initSegment" !== it2 ? it2 : 0, h2.live || (rt2.endList = true), et2 && (h2.startCC = et2.cc);
          } else
            h2.endSN = 0, h2.startCC = 0;
          return h2.fragmentHint && (v2 += h2.fragmentHint.duration), h2.totalduration = v2, h2.endCC = m2, T2 > 0 && function(t4, e3) {
            for (var r3 = t4[e3], i4 = e3; i4--; ) {
              var n3 = t4[i4];
              if (!n3)
                return;
              n3.programDateTime = r3.programDateTime - 1e3 * n3.duration, r3 = n3;
            }
          }(d2, T2), h2;
        }, t2;
      }();
      function ie(t2, e2, r2) {
        var i3, n2, a2 = new P(t2);
        Vt(r2, a2, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
        var s2 = null != (i3 = a2.METHOD) ? i3 : "", o2 = a2.URI, l2 = a2.hexadecimalInteger("IV"), u2 = a2.KEYFORMATVERSIONS, h2 = null != (n2 = a2.KEYFORMAT) ? n2 : "identity";
        o2 && a2.IV && !l2 && w.error("Invalid IV: " + a2.IV);
        var d2 = o2 ? re.resolve(o2, e2) : "", c2 = (u2 || "1").split("/").map(Number).filter(Number.isFinite);
        return new Gt(s2, d2, h2, c2, l2);
      }
      function ne(t2) {
        var e2 = new P(t2).decimalFloatingPoint("TIME-OFFSET");
        return E(e2) ? e2 : null;
      }
      function ae(t2, e2) {
        ["video", "audio", "text"].forEach(function(r2) {
          var i3 = t2.filter(function(t3) {
            return function(t4, e3) {
              var r3 = Xt[e3];
              return !!r3 && true === r3[t4.slice(0, 4)];
            }(t3, r2);
          });
          if (i3.length) {
            var n2 = i3.filter(function(t3) {
              return 0 === t3.lastIndexOf("avc1", 0) || 0 === t3.lastIndexOf("mp4a", 0);
            });
            e2[r2 + "Codec"] = n2.length > 0 ? n2[0] : i3[0], t2 = t2.filter(function(t3) {
              return -1 === i3.indexOf(t3);
            });
          }
        }), e2.unknownCodecs = t2;
      }
      function se(t2, e2, r2) {
        var i3 = e2[r2];
        i3 && (t2[r2] = i3);
      }
      function oe(t2, e2) {
        t2.rawProgramDateTime ? t2.programDateTime = Date.parse(t2.rawProgramDateTime) : null != e2 && e2.programDateTime && (t2.programDateTime = e2.endProgramDateTime), E(t2.programDateTime) || (t2.programDateTime = null, t2.rawProgramDateTime = null);
      }
      function le(t2, e2, r2, i3) {
        t2.relurl = e2.URI, e2.BYTERANGE && t2.setByteRange(e2.BYTERANGE), t2.level = r2, t2.sn = "initSegment", i3 && (t2.levelkeys = i3), t2.initSegment = null;
      }
      function ue(t2, e2, r2) {
        t2.levelkeys = e2;
        var i3 = r2.encryptedFragments;
        i3.length && i3[i3.length - 1].levelkeys === e2 || !Object.keys(e2).some(function(t3) {
          return e2[t3].isCommonEncryption;
        }) || i3.push(t2);
      }
      var he = "manifest", de = "level", ce = "audioTrack", fe = "subtitleTrack", ge = "main", ve = "audio", me = "subtitle";
      function pe(t2) {
        switch (t2.type) {
          case ce:
            return ve;
          case fe:
            return me;
          default:
            return ge;
        }
      }
      function ye(t2, e2) {
        var r2 = t2.url;
        return void 0 !== r2 && 0 !== r2.indexOf("data:") || (r2 = e2.url), r2;
      }
      var Te = function() {
        function t2(t3) {
          this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.hls = t3, this.registerListeners();
        }
        var e2 = t2.prototype;
        return e2.startLoad = function(t3) {
        }, e2.stopLoad = function() {
          this.destroyInternalLoaders();
        }, e2.registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.LEVEL_LOADING, this.onLevelLoading, this), t3.on(S.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t3.on(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
        }, e2.unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.LEVEL_LOADING, this.onLevelLoading, this), t3.off(S.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t3.off(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
        }, e2.createInternalLoader = function(t3) {
          var e3 = this.hls.config, r2 = e3.pLoader, i3 = e3.loader, n2 = new (r2 || i3)(e3);
          return this.loaders[t3.type] = n2, n2;
        }, e2.getInternalLoader = function(t3) {
          return this.loaders[t3.type];
        }, e2.resetInternalLoader = function(t3) {
          this.loaders[t3] && delete this.loaders[t3];
        }, e2.destroyInternalLoaders = function() {
          for (var t3 in this.loaders) {
            var e3 = this.loaders[t3];
            e3 && e3.destroy(), this.resetInternalLoader(t3);
          }
        }, e2.destroy = function() {
          this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
        }, e2.onManifestLoading = function(t3, e3) {
          var r2 = e3.url;
          this.variableList = null, this.load({ id: null, level: 0, responseType: "text", type: he, url: r2, deliveryDirectives: null });
        }, e2.onLevelLoading = function(t3, e3) {
          var r2 = e3.id, i3 = e3.level, n2 = e3.url, a2 = e3.deliveryDirectives;
          this.load({ id: r2, level: i3, responseType: "text", type: de, url: n2, deliveryDirectives: a2 });
        }, e2.onAudioTrackLoading = function(t3, e3) {
          var r2 = e3.id, i3 = e3.groupId, n2 = e3.url, a2 = e3.deliveryDirectives;
          this.load({ id: r2, groupId: i3, level: null, responseType: "text", type: ce, url: n2, deliveryDirectives: a2 });
        }, e2.onSubtitleTrackLoading = function(t3, e3) {
          var r2 = e3.id, i3 = e3.groupId, n2 = e3.url, a2 = e3.deliveryDirectives;
          this.load({ id: r2, groupId: i3, level: null, responseType: "text", type: fe, url: n2, deliveryDirectives: a2 });
        }, e2.load = function(t3) {
          var e3, r2, i3, n2 = this, a2 = this.hls.config, s2 = this.getInternalLoader(t3);
          if (s2) {
            var l2 = s2.context;
            if (l2 && l2.url === t3.url)
              return void w.trace("[playlist-loader]: playlist request ongoing");
            w.log("[playlist-loader]: aborting previous loader for type: " + t3.type), s2.abort();
          }
          if (r2 = t3.type === he ? a2.manifestLoadPolicy.default : o({}, a2.playlistLoadPolicy.default, { timeoutRetry: null, errorRetry: null }), s2 = this.createInternalLoader(t3), null != (e3 = t3.deliveryDirectives) && e3.part && (t3.type === de && null !== t3.level ? i3 = this.hls.levels[t3.level].details : t3.type === ce && null !== t3.id ? i3 = this.hls.audioTracks[t3.id].details : t3.type === fe && null !== t3.id && (i3 = this.hls.subtitleTracks[t3.id].details), i3)) {
            var u2 = i3.partTarget, h2 = i3.targetduration;
            if (u2 && h2) {
              var d2 = 1e3 * Math.max(3 * u2, 0.8 * h2);
              r2 = o({}, r2, { maxTimeToFirstByteMs: Math.min(d2, r2.maxTimeToFirstByteMs), maxLoadTimeMs: Math.min(d2, r2.maxTimeToFirstByteMs) });
            }
          }
          var c2 = r2.errorRetry || r2.timeoutRetry || {}, f2 = { loadPolicy: r2, timeout: r2.maxLoadTimeMs, maxRetry: c2.maxNumRetry || 0, retryDelay: c2.retryDelayMs || 0, maxRetryDelay: c2.maxRetryDelayMs || 0 }, g2 = { onSuccess: function(t4, e4, r3, i4) {
            var a3 = n2.getInternalLoader(r3);
            n2.resetInternalLoader(r3.type);
            var s3 = t4.data;
            0 === s3.indexOf("#EXTM3U") ? (e4.parsing.start = performance.now(), re.isMediaPlaylist(s3) ? n2.handleTrackOrLevelPlaylist(t4, e4, r3, i4 || null, a3) : n2.handleMasterPlaylist(t4, e4, r3, i4)) : n2.handleManifestParsingError(t4, r3, new Error("no EXTM3U delimiter"), i4 || null, e4);
          }, onError: function(t4, e4, r3, i4) {
            n2.handleNetworkError(e4, r3, false, t4, i4);
          }, onTimeout: function(t4, e4, r3) {
            n2.handleNetworkError(e4, r3, true, void 0, t4);
          } };
          s2.load(t3, f2, g2);
        }, e2.handleMasterPlaylist = function(t3, e3, r2, i3) {
          var n2 = this.hls, a2 = t3.data, s2 = ye(t3, r2), o2 = re.parseMasterPlaylist(a2, s2);
          if (o2.playlistParsingError)
            this.handleManifestParsingError(t3, r2, o2.playlistParsingError, i3, e3);
          else {
            var l2 = o2.contentSteering, u2 = o2.levels, h2 = o2.sessionData, d2 = o2.sessionKeys, c2 = o2.startTimeOffset, f2 = o2.variableList;
            this.variableList = f2;
            var g2 = re.parseMasterPlaylistMedia(a2, s2, o2), v2 = g2.AUDIO, m2 = void 0 === v2 ? [] : v2, p2 = g2.SUBTITLES, y2 = g2["CLOSED-CAPTIONS"];
            m2.length && (m2.some(function(t4) {
              return !t4.url;
            }) || !u2[0].audioCodec || u2[0].attrs.AUDIO || (w.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m2.unshift({ type: "main", name: "main", groupId: "main", default: false, autoselect: false, forced: false, id: -1, attrs: new P({}), bitrate: 0, url: "" }))), n2.trigger(S.MANIFEST_LOADED, { levels: u2, audioTracks: m2, subtitles: p2, captions: y2, contentSteering: l2, url: s2, stats: e3, networkDetails: i3, sessionData: h2, sessionKeys: d2, startTimeOffset: c2, variableList: f2 });
          }
        }, e2.handleTrackOrLevelPlaylist = function(t3, e3, r2, i3, n2) {
          var a2 = this.hls, s2 = r2.id, o2 = r2.level, l2 = r2.type, u2 = ye(t3, r2), h2 = E(s2) ? s2 : 0, d2 = E(o2) ? o2 : h2, c2 = pe(r2), f2 = re.parseLevelPlaylist(t3.data, u2, d2, c2, h2, this.variableList);
          if (l2 === he) {
            var g2 = { attrs: new P({}), bitrate: 0, details: f2, name: "", url: u2 };
            a2.trigger(S.MANIFEST_LOADED, { levels: [g2], audioTracks: [], url: u2, stats: e3, networkDetails: i3, sessionData: null, sessionKeys: null, contentSteering: null, startTimeOffset: null, variableList: null });
          }
          e3.parsing.end = performance.now(), r2.levelDetails = f2, this.handlePlaylistLoaded(f2, t3, e3, r2, i3, n2);
        }, e2.handleManifestParsingError = function(t3, e3, r2, i3, n2) {
          this.hls.trigger(S.ERROR, { type: L.NETWORK_ERROR, details: R.MANIFEST_PARSING_ERROR, fatal: e3.type === he, url: t3.url, err: r2, error: r2, reason: r2.message, response: t3, context: e3, networkDetails: i3, stats: n2 });
        }, e2.handleNetworkError = function(t3, e3, r2, n2, a2) {
          void 0 === r2 && (r2 = false);
          var s2 = "A network " + (r2 ? "timeout" : "error" + (n2 ? " (status " + n2.code + ")" : "")) + " occurred while loading " + t3.type;
          t3.type === de ? s2 += ": " + t3.level + " id: " + t3.id : t3.type !== ce && t3.type !== fe || (s2 += " id: " + t3.id + ' group-id: "' + t3.groupId + '"');
          var o2 = new Error(s2);
          w.warn("[playlist-loader]: " + s2);
          var l2 = R.UNKNOWN, u2 = false, h2 = this.getInternalLoader(t3);
          switch (t3.type) {
            case he:
              l2 = r2 ? R.MANIFEST_LOAD_TIMEOUT : R.MANIFEST_LOAD_ERROR, u2 = true;
              break;
            case de:
              l2 = r2 ? R.LEVEL_LOAD_TIMEOUT : R.LEVEL_LOAD_ERROR, u2 = false;
              break;
            case ce:
              l2 = r2 ? R.AUDIO_TRACK_LOAD_TIMEOUT : R.AUDIO_TRACK_LOAD_ERROR, u2 = false;
              break;
            case fe:
              l2 = r2 ? R.SUBTITLE_TRACK_LOAD_TIMEOUT : R.SUBTITLE_LOAD_ERROR, u2 = false;
          }
          h2 && this.resetInternalLoader(t3.type);
          var d2 = { type: L.NETWORK_ERROR, details: l2, fatal: u2, url: t3.url, loader: h2, context: t3, error: o2, networkDetails: e3, stats: a2 };
          if (n2) {
            var c2 = (null == e3 ? void 0 : e3.url) || t3.url;
            d2.response = i2({ url: c2, data: void 0 }, n2);
          }
          this.hls.trigger(S.ERROR, d2);
        }, e2.handlePlaylistLoaded = function(t3, e3, r2, i3, n2, a2) {
          var s2 = this.hls, o2 = i3.type, l2 = i3.level, u2 = i3.id, h2 = i3.groupId, d2 = i3.deliveryDirectives, c2 = ye(e3, i3), f2 = pe(i3), g2 = "number" == typeof i3.level && f2 === ge ? l2 : void 0;
          if (t3.fragments.length) {
            t3.targetduration || (t3.playlistParsingError = new Error("Missing Target Duration"));
            var v2 = t3.playlistParsingError;
            if (v2)
              s2.trigger(S.ERROR, { type: L.NETWORK_ERROR, details: R.LEVEL_PARSING_ERROR, fatal: false, url: c2, error: v2, reason: v2.message, response: e3, context: i3, level: g2, parent: f2, networkDetails: n2, stats: r2 });
            else
              switch (t3.live && a2 && (a2.getCacheAge && (t3.ageHeader = a2.getCacheAge() || 0), a2.getCacheAge && !isNaN(t3.ageHeader) || (t3.ageHeader = 0)), o2) {
                case he:
                case de:
                  s2.trigger(S.LEVEL_LOADED, { details: t3, level: g2 || 0, id: u2 || 0, stats: r2, networkDetails: n2, deliveryDirectives: d2 });
                  break;
                case ce:
                  s2.trigger(S.AUDIO_TRACK_LOADED, { details: t3, id: u2 || 0, groupId: h2 || "", stats: r2, networkDetails: n2, deliveryDirectives: d2 });
                  break;
                case fe:
                  s2.trigger(S.SUBTITLE_TRACK_LOADED, { details: t3, id: u2 || 0, groupId: h2 || "", stats: r2, networkDetails: n2, deliveryDirectives: d2 });
              }
          } else {
            var m2 = new Error("No Segments found in Playlist");
            s2.trigger(S.ERROR, { type: L.NETWORK_ERROR, details: R.LEVEL_EMPTY_ERROR, fatal: false, url: c2, error: m2, reason: m2.message, response: e3, context: i3, level: g2, parent: f2, networkDetails: n2, stats: r2 });
          }
        }, t2;
      }();
      function Ee(t2, e2) {
        var r2;
        try {
          r2 = new Event("addtrack");
        } catch (t3) {
          (r2 = document.createEvent("Event")).initEvent("addtrack", false, false);
        }
        r2.track = t2, e2.dispatchEvent(r2);
      }
      function Se(t2, e2) {
        var r2 = t2.mode;
        if ("disabled" === r2 && (t2.mode = "hidden"), t2.cues && !t2.cues.getCueById(e2.id))
          try {
            if (t2.addCue(e2), !t2.cues.getCueById(e2.id))
              throw new Error("addCue is failed for: " + e2);
          } catch (r3) {
            w.debug("[texttrack-utils]: " + r3);
            try {
              var i3 = new self.TextTrackCue(e2.startTime, e2.endTime, e2.text);
              i3.id = e2.id, t2.addCue(i3);
            } catch (t3) {
              w.debug("[texttrack-utils]: Legacy TextTrackCue fallback failed: " + t3);
            }
          }
        "disabled" === r2 && (t2.mode = r2);
      }
      function Le(t2) {
        var e2 = t2.mode;
        if ("disabled" === e2 && (t2.mode = "hidden"), t2.cues)
          for (var r2 = t2.cues.length; r2--; )
            t2.removeCue(t2.cues[r2]);
        "disabled" === e2 && (t2.mode = e2);
      }
      function Re(t2, e2, r2, i3) {
        var n2 = t2.mode;
        if ("disabled" === n2 && (t2.mode = "hidden"), t2.cues && t2.cues.length > 0)
          for (var a2 = function(t3, e3, r3) {
            var i4 = [], n3 = function(t4, e4) {
              if (e4 < t4[0].startTime)
                return 0;
              var r4 = t4.length - 1;
              if (e4 > t4[r4].endTime)
                return -1;
              for (var i5 = 0, n4 = r4; i5 <= n4; ) {
                var a4 = Math.floor((n4 + i5) / 2);
                if (e4 < t4[a4].startTime)
                  n4 = a4 - 1;
                else {
                  if (!(e4 > t4[a4].startTime && i5 < r4))
                    return a4;
                  i5 = a4 + 1;
                }
              }
              return t4[i5].startTime - e4 < e4 - t4[n4].startTime ? i5 : n4;
            }(t3, e3);
            if (n3 > -1)
              for (var a3 = n3, s3 = t3.length; a3 < s3; a3++) {
                var o2 = t3[a3];
                if (o2.startTime >= e3 && o2.endTime <= r3)
                  i4.push(o2);
                else if (o2.startTime > r3)
                  return i4;
              }
            return i4;
          }(t2.cues, e2, r2), s2 = 0; s2 < a2.length; s2++)
            i3 && !i3(a2[s2]) || t2.removeCue(a2[s2]);
        "disabled" === n2 && (t2.mode = n2);
      }
      var Ae = "org.id3", ke = "com.apple.quicktime.HLS", be = "https://aomedia.org/emsg/ID3";
      function De() {
        if ("undefined" != typeof self)
          return self.WebKitDataCue || self.VTTCue || self.TextTrackCue;
      }
      var Ie = function() {
        var t2 = De();
        try {
          new t2(0, Number.POSITIVE_INFINITY, "");
        } catch (t3) {
          return Number.MAX_VALUE;
        }
        return Number.POSITIVE_INFINITY;
      }();
      function we(t2, e2) {
        return t2.getTime() / 1e3 - e2;
      }
      var Ce = function() {
        function t2(t3) {
          this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = t3, this._registerListeners();
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
          this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null;
        }, e2._registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t3.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.on(S.LEVEL_UPDATED, this.onLevelUpdated, this);
        }, e2._unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t3.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.off(S.LEVEL_UPDATED, this.onLevelUpdated, this);
        }, e2.onMediaAttached = function(t3, e3) {
          this.media = e3.media;
        }, e2.onMediaDetaching = function() {
          this.id3Track && (Le(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {});
        }, e2.onManifestLoading = function() {
          this.dateRangeCuesAppended = {};
        }, e2.createTrack = function(t3) {
          var e3 = this.getID3Track(t3.textTracks);
          return e3.mode = "hidden", e3;
        }, e2.getID3Track = function(t3) {
          if (this.media) {
            for (var e3 = 0; e3 < t3.length; e3++) {
              var r2 = t3[e3];
              if ("metadata" === r2.kind && "id3" === r2.label)
                return Ee(r2, this.media), r2;
            }
            return this.media.addTextTrack("metadata", "id3");
          }
        }, e2.onFragParsingMetadata = function(t3, e3) {
          if (this.media) {
            var r2 = this.hls.config, i3 = r2.enableEmsgMetadataCues, n2 = r2.enableID3MetadataCues;
            if (i3 || n2) {
              var a2 = e3.samples;
              this.id3Track || (this.id3Track = this.createTrack(this.media));
              for (var s2 = De(), o2 = 0; o2 < a2.length; o2++) {
                var l2 = a2[o2].type;
                if ((l2 !== be || i3) && n2) {
                  var u2 = dt(a2[o2].data);
                  if (u2) {
                    var h2 = a2[o2].pts, d2 = h2 + a2[o2].duration;
                    d2 > Ie && (d2 = Ie), d2 - h2 <= 0 && (d2 = h2 + 0.25);
                    for (var c2 = 0; c2 < u2.length; c2++) {
                      var f2 = u2[c2];
                      if (!ut(f2)) {
                        this.updateId3CueEnds(h2, l2);
                        var g2 = new s2(h2, d2, "");
                        g2.value = f2, l2 && (g2.type = l2), this.id3Track.addCue(g2);
                      }
                    }
                  }
                }
              }
            }
          }
        }, e2.updateId3CueEnds = function(t3, e3) {
          var r2, i3 = null == (r2 = this.id3Track) ? void 0 : r2.cues;
          if (i3)
            for (var n2 = i3.length; n2--; ) {
              var a2 = i3[n2];
              a2.type === e3 && a2.startTime < t3 && a2.endTime === Ie && (a2.endTime = t3);
            }
        }, e2.onBufferFlushing = function(t3, e3) {
          var r2 = e3.startOffset, i3 = e3.endOffset, n2 = e3.type, a2 = this.id3Track, s2 = this.hls;
          if (s2) {
            var o2 = s2.config, l2 = o2.enableEmsgMetadataCues, u2 = o2.enableID3MetadataCues;
            a2 && (l2 || u2) && Re(a2, r2, i3, "audio" === n2 ? function(t4) {
              return t4.type === Ae && u2;
            } : "video" === n2 ? function(t4) {
              return t4.type === be && l2;
            } : function(t4) {
              return t4.type === Ae && u2 || t4.type === be && l2;
            });
          }
        }, e2.onLevelUpdated = function(t3, e3) {
          var r2 = this, i3 = e3.details;
          if (this.media && i3.hasProgramDateTime && this.hls.config.enableDateRangeMetadataCues) {
            var n2 = this.dateRangeCuesAppended, a2 = this.id3Track, s2 = i3.dateRanges, o2 = Object.keys(s2);
            if (a2)
              for (var l2 = Object.keys(n2).filter(function(t4) {
                return !o2.includes(t4);
              }), u2 = function() {
                var t4 = l2[h2];
                Object.keys(n2[t4].cues).forEach(function(e4) {
                  a2.removeCue(n2[t4].cues[e4]);
                }), delete n2[t4];
              }, h2 = l2.length; h2--; )
                u2();
            var d2 = i3.fragments[i3.fragments.length - 1];
            if (0 !== o2.length && E(null == d2 ? void 0 : d2.programDateTime)) {
              this.id3Track || (this.id3Track = this.createTrack(this.media));
              for (var c2 = d2.programDateTime / 1e3 - d2.start, f2 = De(), g2 = function() {
                var t4 = o2[v2], e4 = s2[t4], i4 = n2[t4], a3 = (null == i4 ? void 0 : i4.cues) || {}, l3 = (null == i4 ? void 0 : i4.durationKnown) || false, u3 = we(e4.startDate, c2), h3 = Ie, d3 = e4.endDate;
                if (d3)
                  h3 = we(d3, c2), l3 = true;
                else if (e4.endOnNext && !l3) {
                  var g3 = o2.reduce(function(t5, r3) {
                    var i5 = s2[r3];
                    return i5.class === e4.class && i5.id !== r3 && i5.startDate > e4.startDate && t5.push(i5), t5;
                  }, []).sort(function(t5, e5) {
                    return t5.startDate.getTime() - e5.startDate.getTime();
                  })[0];
                  g3 && (h3 = we(g3.startDate, c2), l3 = true);
                }
                for (var m2, p2, y2 = Object.keys(e4.attr), T2 = 0; T2 < y2.length; T2++) {
                  var E2 = y2[T2];
                  if ("ID" !== (p2 = E2) && "CLASS" !== p2 && "START-DATE" !== p2 && "DURATION" !== p2 && "END-DATE" !== p2 && "END-ON-NEXT" !== p2) {
                    var S2 = a3[E2];
                    if (S2)
                      l3 && !i4.durationKnown && (S2.endTime = h3);
                    else {
                      var L2 = e4.attr[E2];
                      S2 = new f2(u3, h3, ""), x(E2) && (m2 = L2, L2 = Uint8Array.from(m2.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer), S2.value = { key: E2, data: L2 }, S2.type = ke, S2.id = t4, r2.id3Track.addCue(S2), a3[E2] = S2;
                    }
                  }
                }
                n2[t4] = { cues: a3, dateRange: e4, durationKnown: l3 };
              }, v2 = 0; v2 < o2.length; v2++)
                g2();
            }
          }
        }, t2;
      }(), _e = function() {
        function t2(t3) {
          var e3 = this;
          this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
            return e3.timeupdate();
          }, this.hls = t3, this.config = t3.config, this.registerListeners();
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
          this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
        }, e2.registerListeners = function() {
          this.hls.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(S.ERROR, this.onError, this);
        }, e2.unregisterListeners = function() {
          this.hls.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(S.ERROR, this.onError, this);
        }, e2.onMediaAttached = function(t3, e3) {
          this.media = e3.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
        }, e2.onMediaDetaching = function() {
          this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
        }, e2.onManifestLoading = function() {
          this.levelDetails = null, this._latency = null, this.stallCount = 0;
        }, e2.onLevelUpdated = function(t3, e3) {
          var r2 = e3.details;
          this.levelDetails = r2, r2.advanced && this.timeupdate(), !r2.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
        }, e2.onError = function(t3, e3) {
          var r2;
          e3.details === R.BUFFER_STALLED_ERROR && (this.stallCount++, null != (r2 = this.levelDetails) && r2.live && w.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
        }, e2.timeupdate = function() {
          var t3 = this.media, e3 = this.levelDetails;
          if (t3 && e3) {
            this.currentTime = t3.currentTime;
            var r2 = this.computeLatency();
            if (null !== r2) {
              this._latency = r2;
              var i3 = this.config, n2 = i3.lowLatencyMode, a2 = i3.maxLiveSyncPlaybackRate;
              if (n2 && 1 !== a2) {
                var s2 = this.targetLatency;
                if (null !== s2) {
                  var o2 = r2 - s2, l2 = o2 < Math.min(this.maxLatency, s2 + e3.targetduration);
                  if (e3.live && l2 && o2 > 0.05 && this.forwardBufferLength > 1) {
                    var u2 = Math.min(2, Math.max(1, a2)), h2 = Math.round(2 / (1 + Math.exp(-0.75 * o2 - this.edgeStalled)) * 20) / 20;
                    t3.playbackRate = Math.min(u2, Math.max(1, h2));
                  } else
                    1 !== t3.playbackRate && 0 !== t3.playbackRate && (t3.playbackRate = 1);
                }
              }
            }
          }
        }, e2.estimateLiveEdge = function() {
          var t3 = this.levelDetails;
          return null === t3 ? null : t3.edge + t3.age;
        }, e2.computeLatency = function() {
          var t3 = this.estimateLiveEdge();
          return null === t3 ? null : t3 - this.currentTime;
        }, a(t2, [{ key: "latency", get: function() {
          return this._latency || 0;
        } }, { key: "maxLatency", get: function() {
          var t3 = this.config, e3 = this.levelDetails;
          return void 0 !== t3.liveMaxLatencyDuration ? t3.liveMaxLatencyDuration : e3 ? t3.liveMaxLatencyDurationCount * e3.targetduration : 0;
        } }, { key: "targetLatency", get: function() {
          var t3 = this.levelDetails;
          if (null === t3)
            return null;
          var e3 = t3.holdBack, r2 = t3.partHoldBack, i3 = t3.targetduration, n2 = this.config, a2 = n2.liveSyncDuration, s2 = n2.liveSyncDurationCount, o2 = n2.lowLatencyMode, l2 = this.hls.userConfig, u2 = o2 && r2 || e3;
          (l2.liveSyncDuration || l2.liveSyncDurationCount || 0 === u2) && (u2 = void 0 !== a2 ? a2 : s2 * i3);
          var h2 = i3;
          return u2 + Math.min(1 * this.stallCount, h2);
        } }, { key: "liveSyncPosition", get: function() {
          var t3 = this.estimateLiveEdge(), e3 = this.targetLatency, r2 = this.levelDetails;
          if (null === t3 || null === e3 || null === r2)
            return null;
          var i3 = r2.edge, n2 = t3 - e3 - this.edgeStalled, a2 = i3 - r2.totalduration, s2 = i3 - (this.config.lowLatencyMode && r2.partTarget || r2.targetduration);
          return Math.min(Math.max(a2, n2), s2);
        } }, { key: "drift", get: function() {
          var t3 = this.levelDetails;
          return null === t3 ? 1 : t3.drift;
        } }, { key: "edgeStalled", get: function() {
          var t3 = this.levelDetails;
          if (null === t3)
            return 0;
          var e3 = 3 * (this.config.lowLatencyMode && t3.partTarget || t3.targetduration);
          return Math.max(t3.age - e3, 0);
        } }, { key: "forwardBufferLength", get: function() {
          var t3 = this.media, e3 = this.levelDetails;
          if (!t3 || !e3)
            return 0;
          var r2 = t3.buffered.length;
          return (r2 ? t3.buffered.end(r2 - 1) : e3.edge) - this.currentTime;
        } }]), t2;
      }(), Pe = ["NONE", "TYPE-0", "TYPE-1", null], xe = "", Fe = "YES", Me = "v2", Oe = function() {
        function t2(t3, e2, r2) {
          this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t3, this.part = e2, this.skip = r2;
        }
        return t2.prototype.addDirectives = function(t3) {
          var e2 = new self.URL(t3);
          return void 0 !== this.msn && e2.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && e2.searchParams.set("_HLS_part", this.part.toString()), this.skip && e2.searchParams.set("_HLS_skip", this.skip), e2.href;
        }, t2;
      }(), Ne = function() {
        function t2(t3) {
          this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [t3.url], this._attrs = [t3.attrs], this.bitrate = t3.bitrate, t3.details && (this.details = t3.details), this.id = t3.id || 0, this.name = t3.name, this.width = t3.width || 0, this.height = t3.height || 0, this.audioCodec = t3.audioCodec, this.videoCodec = t3.videoCodec, this.unknownCodecs = t3.unknownCodecs, this.codecSet = [t3.videoCodec, t3.audioCodec].filter(function(t4) {
            return t4;
          }).join(",").replace(/\.[^.,]+/g, "");
        }
        return t2.prototype.addFallback = function(t3) {
          this.url.push(t3.url), this._attrs.push(t3.attrs);
        }, a(t2, [{ key: "maxBitrate", get: function() {
          return Math.max(this.realBitrate, this.bitrate);
        } }, { key: "attrs", get: function() {
          return this._attrs[this._urlId];
        } }, { key: "pathwayId", get: function() {
          return this.attrs["PATHWAY-ID"] || ".";
        } }, { key: "uri", get: function() {
          return this.url[this._urlId] || "";
        } }, { key: "urlId", get: function() {
          return this._urlId;
        }, set: function(t3) {
          var e2 = t3 % this.url.length;
          this._urlId !== e2 && (this.fragmentError = 0, this.loadError = 0, this.details = void 0, this._urlId = e2);
        } }, { key: "audioGroupId", get: function() {
          var t3;
          return null == (t3 = this.audioGroupIds) ? void 0 : t3[this.urlId];
        } }, { key: "textGroupId", get: function() {
          var t3;
          return null == (t3 = this.textGroupIds) ? void 0 : t3[this.urlId];
        } }]), t2;
      }();
      function Ue(t2, e2) {
        var r2 = e2.startPTS;
        if (E(r2)) {
          var i3, n2 = 0;
          e2.sn > t2.sn ? (n2 = r2 - t2.start, i3 = t2) : (n2 = t2.start - r2, i3 = e2), i3.duration !== n2 && (i3.duration = n2);
        } else
          e2.sn > t2.sn ? t2.cc === e2.cc && t2.minEndPTS ? e2.start = t2.start + (t2.minEndPTS - t2.start) : e2.start = t2.start + t2.duration : e2.start = Math.max(t2.start - e2.duration, 0);
      }
      function Be(t2, e2, r2, i3, n2, a2) {
        i3 - r2 <= 0 && (w.warn("Fragment should have a positive duration", e2), i3 = r2 + e2.duration, a2 = n2 + e2.duration);
        var s2 = r2, o2 = i3, l2 = e2.startPTS, u2 = e2.endPTS;
        if (E(l2)) {
          var h2 = Math.abs(l2 - r2);
          E(e2.deltaPTS) ? e2.deltaPTS = Math.max(h2, e2.deltaPTS) : e2.deltaPTS = h2, s2 = Math.max(r2, l2), r2 = Math.min(r2, l2), n2 = Math.min(n2, e2.startDTS), o2 = Math.min(i3, u2), i3 = Math.max(i3, u2), a2 = Math.max(a2, e2.endDTS);
        }
        var d2 = r2 - e2.start;
        0 !== e2.start && (e2.start = r2), e2.duration = i3 - e2.start, e2.startPTS = r2, e2.maxStartPTS = s2, e2.startDTS = n2, e2.endPTS = i3, e2.minEndPTS = o2, e2.endDTS = a2;
        var c2, f2 = e2.sn;
        if (!t2 || f2 < t2.startSN || f2 > t2.endSN)
          return 0;
        var g2 = f2 - t2.startSN, v2 = t2.fragments;
        for (v2[g2] = e2, c2 = g2; c2 > 0; c2--)
          Ue(v2[c2], v2[c2 - 1]);
        for (c2 = g2; c2 < v2.length - 1; c2++)
          Ue(v2[c2], v2[c2 + 1]);
        return t2.fragmentHint && Ue(v2[v2.length - 1], t2.fragmentHint), t2.PTSKnown = t2.alignedSliding = true, d2;
      }
      function Ge(t2, e2) {
        for (var r2 = null, i3 = t2.fragments, n2 = i3.length - 1; n2 >= 0; n2--) {
          var a2 = i3[n2].initSegment;
          if (a2) {
            r2 = a2;
            break;
          }
        }
        t2.fragmentHint && delete t2.fragmentHint.endPTS;
        var s2, l2, u2, h2, d2, c2 = 0;
        if (function(t3, e3, r3) {
          for (var i4 = e3.skippedSegments, n3 = Math.max(t3.startSN, e3.startSN) - e3.startSN, a3 = (t3.fragmentHint ? 1 : 0) + (i4 ? e3.endSN : Math.min(t3.endSN, e3.endSN)) - e3.startSN, s3 = e3.startSN - t3.startSN, o2 = e3.fragmentHint ? e3.fragments.concat(e3.fragmentHint) : e3.fragments, l3 = t3.fragmentHint ? t3.fragments.concat(t3.fragmentHint) : t3.fragments, u3 = n3; u3 <= a3; u3++) {
            var h3 = l3[s3 + u3], d3 = o2[u3];
            i4 && !d3 && u3 < i4 && (d3 = e3.fragments[u3] = h3), h3 && d3 && r3(h3, d3);
          }
        }(t2, e2, function(t3, i4) {
          t3.relurl && (c2 = t3.cc - i4.cc), E(t3.startPTS) && E(t3.endPTS) && (i4.start = i4.startPTS = t3.startPTS, i4.startDTS = t3.startDTS, i4.maxStartPTS = t3.maxStartPTS, i4.endPTS = t3.endPTS, i4.endDTS = t3.endDTS, i4.minEndPTS = t3.minEndPTS, i4.duration = t3.endPTS - t3.startPTS, i4.duration && (s2 = i4), e2.PTSKnown = e2.alignedSliding = true), i4.elementaryStreams = t3.elementaryStreams, i4.loader = t3.loader, i4.stats = t3.stats, i4.urlId = t3.urlId, t3.initSegment && (i4.initSegment = t3.initSegment, r2 = t3.initSegment);
        }), r2 && (e2.fragmentHint ? e2.fragments.concat(e2.fragmentHint) : e2.fragments).forEach(function(t3) {
          var e3;
          t3.initSegment && t3.initSegment.relurl !== (null == (e3 = r2) ? void 0 : e3.relurl) || (t3.initSegment = r2);
        }), e2.skippedSegments)
          if (e2.deltaUpdateFailed = e2.fragments.some(function(t3) {
            return !t3;
          }), e2.deltaUpdateFailed) {
            w.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
            for (var f2 = e2.skippedSegments; f2--; )
              e2.fragments.shift();
            e2.startSN = e2.fragments[0].sn, e2.startCC = e2.fragments[0].cc;
          } else
            e2.canSkipDateRanges && (e2.dateRanges = (l2 = t2.dateRanges, u2 = e2.dateRanges, h2 = e2.recentlyRemovedDateranges, d2 = o({}, l2), h2 && h2.forEach(function(t3) {
              delete d2[t3];
            }), Object.keys(u2).forEach(function(t3) {
              var e3 = new F(u2[t3].attr, d2[t3]);
              e3.isValid ? d2[t3] = e3 : w.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "' + JSON.stringify(u2[t3].attr) + '"');
            }), d2));
        var g2 = e2.fragments;
        if (c2) {
          w.warn("discontinuity sliding from playlist, take drift into account");
          for (var v2 = 0; v2 < g2.length; v2++)
            g2[v2].cc += c2;
        }
        e2.skippedSegments && (e2.startCC = e2.fragments[0].cc), function(t3, e3, r3) {
          if (t3 && e3)
            for (var i4 = 0, n3 = 0, a3 = t3.length; n3 <= a3; n3++) {
              var s3 = t3[n3], o2 = e3[n3 + i4];
              s3 && o2 && s3.index === o2.index && s3.fragment.sn === o2.fragment.sn ? r3(s3, o2) : i4--;
            }
        }(t2.partList, e2.partList, function(t3, e3) {
          e3.elementaryStreams = t3.elementaryStreams, e3.stats = t3.stats;
        }), s2 ? Be(e2, s2, s2.startPTS, s2.endPTS, s2.startDTS, s2.endDTS) : Ke(t2, e2), g2.length && (e2.totalduration = e2.edge - g2[0].start), e2.driftStartTime = t2.driftStartTime, e2.driftStart = t2.driftStart;
        var m2 = e2.advancedDateTime;
        if (e2.advanced && m2) {
          var p2 = e2.edge;
          e2.driftStart || (e2.driftStartTime = m2, e2.driftStart = p2), e2.driftEndTime = m2, e2.driftEnd = p2;
        } else
          e2.driftEndTime = t2.driftEndTime, e2.driftEnd = t2.driftEnd, e2.advancedDateTime = t2.advancedDateTime;
      }
      function Ke(t2, e2) {
        var r2 = e2.startSN + e2.skippedSegments - t2.startSN, i3 = t2.fragments;
        r2 < 0 || r2 >= i3.length || He(e2, i3[r2].start);
      }
      function He(t2, e2) {
        if (e2) {
          for (var r2 = t2.fragments, i3 = t2.skippedSegments; i3 < r2.length; i3++)
            r2[i3].start += e2;
          t2.fragmentHint && (t2.fragmentHint.start += e2);
        }
      }
      function Ve(t2, e2, r2) {
        var i3;
        return null != t2 && t2.details ? Ye(null == (i3 = t2.details) ? void 0 : i3.partList, e2, r2) : null;
      }
      function Ye(t2, e2, r2) {
        if (t2)
          for (var i3 = t2.length; i3--; ) {
            var n2 = t2[i3];
            if (n2.index === r2 && n2.fragment.sn === e2)
              return n2;
          }
        return null;
      }
      function We(t2) {
        switch (t2.details) {
          case R.FRAG_LOAD_TIMEOUT:
          case R.KEY_LOAD_TIMEOUT:
          case R.LEVEL_LOAD_TIMEOUT:
          case R.MANIFEST_LOAD_TIMEOUT:
            return true;
        }
        return false;
      }
      function je(t2, e2) {
        var r2 = We(e2);
        return t2.default[(r2 ? "timeout" : "error") + "Retry"];
      }
      function qe(t2, e2) {
        var r2 = "linear" === t2.backoff ? 1 : Math.pow(2, e2);
        return Math.min(r2 * t2.retryDelayMs, t2.maxRetryDelayMs);
      }
      function Xe(t2) {
        return i2(i2({}, t2), { errorRetry: null, timeoutRetry: null });
      }
      function ze(t2, e2, r2, i3) {
        return !!t2 && e2 < t2.maxNumRetry && (function(t3) {
          return 0 === t3 && false === navigator.onLine || !!t3 && (t3 < 400 || t3 > 499);
        }(i3) || !!r2);
      }
      var Qe = function(t2, e2) {
        for (var r2 = 0, i3 = t2.length - 1, n2 = null, a2 = null; r2 <= i3; ) {
          var s2 = e2(a2 = t2[n2 = (r2 + i3) / 2 | 0]);
          if (s2 > 0)
            r2 = n2 + 1;
          else {
            if (!(s2 < 0))
              return a2;
            i3 = n2 - 1;
          }
        }
        return null;
      };
      function $e(t2, e2, r2, i3) {
        void 0 === r2 && (r2 = 0), void 0 === i3 && (i3 = 0);
        var n2 = null;
        if (t2 ? n2 = e2[t2.sn - e2[0].sn + 1] || null : 0 === r2 && 0 === e2[0].start && (n2 = e2[0]), n2 && 0 === Je(r2, i3, n2))
          return n2;
        var a2 = Qe(e2, Je.bind(null, r2, i3));
        return !a2 || a2 === t2 && n2 ? n2 : a2;
      }
      function Je(t2, e2, r2) {
        if (void 0 === t2 && (t2 = 0), void 0 === e2 && (e2 = 0), r2.start <= t2 && r2.start + r2.duration > t2)
          return 0;
        var i3 = Math.min(e2, r2.duration + (r2.deltaPTS ? r2.deltaPTS : 0));
        return r2.start + r2.duration - i3 <= t2 ? 1 : r2.start - i3 > t2 && r2.start ? -1 : 0;
      }
      function Ze(t2, e2, r2) {
        var i3 = 1e3 * Math.min(e2, r2.duration + (r2.deltaPTS ? r2.deltaPTS : 0));
        return (r2.endProgramDateTime || 0) - i3 > t2;
      }
      var tr, er = 3e5, rr = 0, ir = 2, nr = 5, ar = 0, sr = 1, or = 2, lr = function() {
        function t2(t3) {
          this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = t3, this.log = w.log.bind(w, "[info]:"), this.warn = w.warn.bind(w, "[warning]:"), this.error = w.error.bind(w, "[error]:"), this.registerListeners();
        }
        var e2 = t2.prototype;
        return e2.registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.ERROR, this.onError, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.LEVEL_UPDATED, this.onLevelUpdated, this);
        }, e2.unregisterListeners = function() {
          var t3 = this.hls;
          t3 && (t3.off(S.ERROR, this.onError, this), t3.off(S.ERROR, this.onErrorOut, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.LEVEL_UPDATED, this.onLevelUpdated, this));
        }, e2.destroy = function() {
          this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {};
        }, e2.startLoad = function(t3) {
          this.playlistError = 0;
        }, e2.stopLoad = function() {
        }, e2.getVariantLevelIndex = function(t3) {
          return (null == t3 ? void 0 : t3.type) === ge ? t3.level : this.hls.loadLevel;
        }, e2.onManifestLoading = function() {
          this.playlistError = 0, this.penalizedRenditions = {};
        }, e2.onLevelUpdated = function() {
          this.playlistError = 0;
        }, e2.onError = function(t3, e3) {
          var r2, i3;
          if (!e3.fatal) {
            var n2 = this.hls, a2 = e3.context;
            switch (e3.details) {
              case R.FRAG_LOAD_ERROR:
              case R.FRAG_LOAD_TIMEOUT:
              case R.KEY_LOAD_ERROR:
              case R.KEY_LOAD_TIMEOUT:
                return void (e3.errorAction = this.getFragRetryOrSwitchAction(e3));
              case R.FRAG_PARSING_ERROR:
                if (null != (r2 = e3.frag) && r2.gap)
                  return void (e3.errorAction = { action: rr, flags: ar });
              case R.FRAG_GAP:
              case R.FRAG_DECRYPT_ERROR:
                return e3.errorAction = this.getFragRetryOrSwitchAction(e3), void (e3.errorAction.action = ir);
              case R.LEVEL_EMPTY_ERROR:
              case R.LEVEL_PARSING_ERROR:
                var s2, o2, l2 = e3.parent === ge ? e3.level : n2.loadLevel;
                return void (e3.details === R.LEVEL_EMPTY_ERROR && null != (s2 = e3.context) && null != (o2 = s2.levelDetails) && o2.live ? e3.errorAction = this.getPlaylistRetryOrSwitchAction(e3, l2) : (e3.levelRetry = false, e3.errorAction = this.getLevelSwitchAction(e3, l2)));
              case R.LEVEL_LOAD_ERROR:
              case R.LEVEL_LOAD_TIMEOUT:
                return void ("number" == typeof (null == a2 ? void 0 : a2.level) && (e3.errorAction = this.getPlaylistRetryOrSwitchAction(e3, a2.level)));
              case R.AUDIO_TRACK_LOAD_ERROR:
              case R.AUDIO_TRACK_LOAD_TIMEOUT:
              case R.SUBTITLE_LOAD_ERROR:
              case R.SUBTITLE_TRACK_LOAD_TIMEOUT:
                if (a2) {
                  var u2 = n2.levels[n2.loadLevel];
                  if (u2 && (a2.type === ce && a2.groupId === u2.audioGroupId || a2.type === fe && a2.groupId === u2.textGroupId))
                    return e3.errorAction = this.getPlaylistRetryOrSwitchAction(e3, n2.loadLevel), e3.errorAction.action = ir, void (e3.errorAction.flags = sr);
                }
                return;
              case R.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                var h2 = n2.levels[n2.loadLevel], d2 = null == h2 ? void 0 : h2.attrs["HDCP-LEVEL"];
                return void (d2 && (e3.errorAction = { action: ir, flags: or, hdcpLevel: d2 }));
              case R.BUFFER_ADD_CODEC_ERROR:
              case R.REMUX_ALLOC_ERROR:
                return void (e3.errorAction = this.getLevelSwitchAction(e3, null != (i3 = e3.level) ? i3 : n2.loadLevel));
              case R.INTERNAL_EXCEPTION:
              case R.BUFFER_APPENDING_ERROR:
              case R.BUFFER_APPEND_ERROR:
              case R.BUFFER_FULL_ERROR:
              case R.LEVEL_SWITCH_ERROR:
              case R.BUFFER_STALLED_ERROR:
              case R.BUFFER_SEEK_OVER_HOLE:
              case R.BUFFER_NUDGE_ON_STALL:
                return void (e3.errorAction = { action: rr, flags: ar });
            }
            if (e3.type === L.KEY_SYSTEM_ERROR) {
              var c2 = this.getVariantLevelIndex(e3.frag);
              return e3.levelRetry = false, void (e3.errorAction = this.getLevelSwitchAction(e3, c2));
            }
          }
        }, e2.getPlaylistRetryOrSwitchAction = function(t3, e3) {
          var r2, i3 = je(this.hls.config.playlistLoadPolicy, t3), n2 = this.playlistError++, a2 = null == (r2 = t3.response) ? void 0 : r2.code;
          if (ze(i3, n2, We(t3), a2))
            return { action: nr, flags: ar, retryConfig: i3, retryCount: n2 };
          var s2 = this.getLevelSwitchAction(t3, e3);
          return i3 && (s2.retryConfig = i3, s2.retryCount = n2), s2;
        }, e2.getFragRetryOrSwitchAction = function(t3) {
          var e3 = this.hls, r2 = this.getVariantLevelIndex(t3.frag), i3 = e3.levels[r2], n2 = e3.config, a2 = n2.fragLoadPolicy, s2 = n2.keyLoadPolicy, o2 = je(t3.details.startsWith("key") ? s2 : a2, t3), l2 = e3.levels.reduce(function(t4, e4) {
            return t4 + e4.fragmentError;
          }, 0);
          if (i3) {
            var u2;
            t3.details !== R.FRAG_GAP && i3.fragmentError++;
            var h2 = null == (u2 = t3.response) ? void 0 : u2.code;
            if (ze(o2, l2, We(t3), h2))
              return { action: nr, flags: ar, retryConfig: o2, retryCount: l2 };
          }
          var d2 = this.getLevelSwitchAction(t3, r2);
          return o2 && (d2.retryConfig = o2, d2.retryCount = l2), d2;
        }, e2.getLevelSwitchAction = function(t3, e3) {
          var r2 = this.hls;
          null == e3 && (e3 = r2.loadLevel);
          var i3 = this.hls.levels[e3];
          if (i3 && (i3.loadError++, r2.autoLevelEnabled)) {
            for (var n2, a2, s2 = -1, o2 = r2.levels, l2 = r2.loadLevel, u2 = r2.minAutoLevel, h2 = r2.maxAutoLevel, d2 = null == (n2 = t3.frag) ? void 0 : n2.type, c2 = null != (a2 = t3.context) ? a2 : {}, f2 = c2.type, g2 = c2.groupId, v2 = o2.length; v2--; ) {
              var m2 = (v2 + l2) % o2.length;
              if (m2 !== l2 && m2 >= u2 && m2 <= h2 && 0 === o2[m2].loadError) {
                var p2 = o2[m2];
                if (t3.details === R.FRAG_GAP && t3.frag) {
                  var y2 = o2[m2].details;
                  if (y2) {
                    var T2 = $e(t3.frag, y2.fragments, t3.frag.start);
                    if (null != T2 && T2.gap)
                      continue;
                  }
                } else {
                  if (f2 === ce && g2 === p2.audioGroupId || f2 === fe && g2 === p2.textGroupId)
                    continue;
                  if (d2 === ve && i3.audioGroupId === p2.audioGroupId || d2 === me && i3.textGroupId === p2.textGroupId)
                    continue;
                }
                s2 = m2;
                break;
              }
            }
            if (s2 > -1 && r2.loadLevel !== s2)
              return t3.levelRetry = true, this.playlistError = 0, { action: ir, flags: ar, nextAutoLevel: s2 };
          }
          return { action: ir, flags: sr };
        }, e2.onErrorOut = function(t3, e3) {
          var r2;
          switch (null == (r2 = e3.errorAction) ? void 0 : r2.action) {
            case rr:
              break;
            case ir:
              this.sendAlternateToPenaltyBox(e3), e3.errorAction.resolved || e3.details === R.FRAG_GAP || (e3.fatal = true);
          }
          e3.fatal && this.hls.stopLoad();
        }, e2.sendAlternateToPenaltyBox = function(t3) {
          var e3 = this.hls, r2 = t3.errorAction;
          if (r2) {
            var i3 = r2.flags, n2 = r2.hdcpLevel, a2 = r2.nextAutoLevel;
            switch (i3) {
              case ar:
                this.switchLevel(t3, a2);
                break;
              case sr:
                r2.resolved || (r2.resolved = this.redundantFailover(t3));
                break;
              case or:
                n2 && (e3.maxHdcpLevel = Pe[Pe.indexOf(n2) - 1], r2.resolved = true), this.warn('Restricting playback to HDCP-LEVEL of "' + e3.maxHdcpLevel + '" or lower');
            }
            r2.resolved || this.switchLevel(t3, a2);
          }
        }, e2.switchLevel = function(t3, e3) {
          void 0 !== e3 && t3.errorAction && (this.warn("switching to level " + e3 + " after " + t3.details), this.hls.nextAutoLevel = e3, t3.errorAction.resolved = true, this.hls.nextLoadLevel = this.hls.nextAutoLevel);
        }, e2.redundantFailover = function(t3) {
          var e3 = this, r2 = this.hls, i3 = this.penalizedRenditions, n2 = t3.parent === ge ? t3.level : r2.loadLevel, a2 = r2.levels[n2], s2 = a2.url.length, o2 = t3.frag ? t3.frag.urlId : a2.urlId;
          a2.urlId !== o2 || t3.frag && !a2.details || this.penalizeRendition(a2, t3);
          for (var l2 = function() {
            var l3 = (o2 + u2) % s2, h3 = i3[l3];
            if (!h3 || function(t4, e4, r3) {
              if (performance.now() - t4.lastErrorPerfMs > er)
                return true;
              var i4 = t4.details;
              if (e4.details === R.FRAG_GAP && i4 && e4.frag) {
                var n3 = e4.frag.start, a3 = $e(null, i4.fragments, n3);
                if (a3 && !a3.gap)
                  return true;
              }
              if (r3 && t4.errors.length < r3.errors.length) {
                var s3 = t4.errors[t4.errors.length - 1];
                if (i4 && s3.frag && e4.frag && Math.abs(s3.frag.start - e4.frag.start) > 3 * i4.targetduration)
                  return true;
              }
              return false;
            }(h3, t3, i3[o2]))
              return e3.warn("Switching to Redundant Stream " + (l3 + 1) + "/" + s2 + ': "' + a2.url[l3] + '" after ' + t3.details), e3.playlistError = 0, r2.levels.forEach(function(t4) {
                t4.urlId = l3;
              }), r2.nextLoadLevel = n2, { v: true };
          }, u2 = 1; u2 < s2; u2++) {
            var h2 = l2();
            if ("object" == typeof h2)
              return h2.v;
          }
          return false;
        }, e2.penalizeRendition = function(t3, e3) {
          var r2 = this.penalizedRenditions, i3 = r2[t3.urlId] || { lastErrorPerfMs: 0, errors: [], details: void 0 };
          i3.lastErrorPerfMs = performance.now(), i3.errors.push(e3), i3.details = t3.details, r2[t3.urlId] = i3;
        }, t2;
      }(), ur = function() {
        function t2(t3, e3) {
          this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = false, this.log = void 0, this.warn = void 0, this.log = w.log.bind(w, e3 + ":"), this.warn = w.warn.bind(w, e3 + ":"), this.hls = t3;
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
          this.clearTimer(), this.hls = this.log = this.warn = null;
        }, e2.clearTimer = function() {
          clearTimeout(this.timer), this.timer = -1;
        }, e2.startLoad = function() {
          this.canLoad = true, this.requestScheduled = -1, this.loadPlaylist();
        }, e2.stopLoad = function() {
          this.canLoad = false, this.clearTimer();
        }, e2.switchParams = function(t3, e3) {
          var r2 = null == e3 ? void 0 : e3.renditionReports;
          if (r2) {
            for (var i3 = -1, n2 = 0; n2 < r2.length; n2++) {
              var a2 = r2[n2], s2 = void 0;
              try {
                s2 = new self.URL(a2.URI, e3.url).href;
              } catch (t4) {
                w.warn("Could not construct new URL for Rendition Report: " + t4), s2 = a2.URI || "";
              }
              if (s2 === t3) {
                i3 = n2;
                break;
              }
              s2 === t3.substring(0, s2.length) && (i3 = n2);
            }
            if (-1 !== i3) {
              var o2 = r2[i3], l2 = parseInt(o2["LAST-MSN"]) || (null == e3 ? void 0 : e3.lastPartSn), u2 = parseInt(o2["LAST-PART"]) || (null == e3 ? void 0 : e3.lastPartIndex);
              if (this.hls.config.lowLatencyMode) {
                var h2 = Math.min(e3.age - e3.partTarget, e3.targetduration);
                u2 >= 0 && h2 > e3.partTarget && (u2 += 1);
              }
              return new Oe(l2, u2 >= 0 ? u2 : void 0, xe);
            }
          }
        }, e2.loadPlaylist = function(t3) {
          -1 === this.requestScheduled && (this.requestScheduled = self.performance.now());
        }, e2.shouldLoadPlaylist = function(t3) {
          return this.canLoad && !!t3 && !!t3.url && (!t3.details || t3.details.live);
        }, e2.shouldReloadPlaylist = function(t3) {
          return -1 === this.timer && -1 === this.requestScheduled && this.shouldLoadPlaylist(t3);
        }, e2.playlistLoaded = function(t3, e3, r2) {
          var i3 = this, n2 = e3.details, a2 = e3.stats, s2 = self.performance.now(), o2 = a2.loading.first ? Math.max(0, s2 - a2.loading.first) : 0;
          if (n2.advancedDateTime = Date.now() - o2, n2.live || null != r2 && r2.live) {
            if (n2.reloaded(r2), r2 && this.log("live playlist " + t3 + " " + (n2.advanced ? "REFRESHED " + n2.lastPartSn + "-" + n2.lastPartIndex : "MISSED")), r2 && n2.fragments.length > 0 && Ge(r2, n2), !this.canLoad || !n2.live)
              return;
            var l2, u2 = void 0, h2 = void 0;
            if (n2.canBlockReload && n2.endSN && n2.advanced) {
              var d2 = this.hls.config.lowLatencyMode, c2 = n2.lastPartSn, f2 = n2.endSN, g2 = n2.lastPartIndex, v2 = c2 === f2;
              -1 !== g2 ? (u2 = v2 ? f2 + 1 : c2, h2 = v2 ? d2 ? 0 : g2 : g2 + 1) : u2 = f2 + 1;
              var m2 = n2.age, p2 = m2 + n2.ageHeader, y2 = Math.min(p2 - n2.partTarget, 1.5 * n2.targetduration);
              if (y2 > 0) {
                if (r2 && y2 > r2.tuneInGoal)
                  this.warn("CDN Tune-in goal increased from: " + r2.tuneInGoal + " to: " + y2 + " with playlist age: " + n2.age), y2 = 0;
                else {
                  var T2 = Math.floor(y2 / n2.targetduration);
                  u2 += T2, void 0 !== h2 && (h2 += Math.round(y2 % n2.targetduration / n2.partTarget)), this.log("CDN Tune-in age: " + n2.ageHeader + "s last advanced " + m2.toFixed(2) + "s goal: " + y2 + " skip sn " + T2 + " to part " + h2);
                }
                n2.tuneInGoal = y2;
              }
              if (l2 = this.getDeliveryDirectives(n2, e3.deliveryDirectives, u2, h2), d2 || !v2)
                return void this.loadPlaylist(l2);
            } else
              n2.canBlockReload && (l2 = this.getDeliveryDirectives(n2, e3.deliveryDirectives, u2, h2));
            var E2 = this.hls.mainForwardBufferInfo, S2 = E2 ? E2.end - E2.len : 0, L2 = function(t4, e4) {
              void 0 === e4 && (e4 = 1 / 0);
              var r3 = 1e3 * t4.targetduration;
              if (t4.updated) {
                var i4 = t4.fragments;
                if (i4.length && 4 * r3 > e4) {
                  var n3 = 1e3 * i4[i4.length - 1].duration;
                  n3 < r3 && (r3 = n3);
                }
              } else
                r3 /= 2;
              return Math.round(r3);
            }(n2, 1e3 * (n2.edge - S2));
            n2.updated && s2 > this.requestScheduled + L2 && (this.requestScheduled = a2.loading.start), void 0 !== u2 && n2.canBlockReload ? this.requestScheduled = a2.loading.first + L2 - (1e3 * n2.partTarget || 1e3) : -1 === this.requestScheduled || this.requestScheduled + L2 < s2 ? this.requestScheduled = s2 : this.requestScheduled - s2 <= 0 && (this.requestScheduled += L2);
            var R2 = this.requestScheduled - s2;
            R2 = Math.max(0, R2), this.log("reload live playlist " + t3 + " in " + Math.round(R2) + " ms"), this.timer = self.setTimeout(function() {
              return i3.loadPlaylist(l2);
            }, R2);
          } else
            this.clearTimer();
        }, e2.getDeliveryDirectives = function(t3, e3, r2, i3) {
          var n2 = function(t4, e4) {
            var r3 = t4.canSkipUntil, i4 = t4.canSkipDateRanges, n3 = t4.endSN;
            return r3 && (void 0 !== e4 ? e4 - n3 : 0) < r3 ? i4 ? Me : Fe : xe;
          }(t3, r2);
          return null != e3 && e3.skip && t3.deltaUpdateFailed && (r2 = e3.msn, i3 = e3.part, n2 = xe), new Oe(r2, i3, n2);
        }, e2.checkRetry = function(t3) {
          var e3 = this, r2 = t3.details, i3 = We(t3), n2 = t3.errorAction, a2 = n2 || {}, s2 = a2.action, o2 = a2.retryCount, l2 = void 0 === o2 ? 0 : o2, u2 = a2.retryConfig, h2 = !!n2 && !!u2 && (s2 === nr || !n2.resolved && s2 === ir);
          if (h2) {
            var d2;
            if (this.requestScheduled = -1, l2 >= u2.maxNumRetry)
              return false;
            if (i3 && null != (d2 = t3.context) && d2.deliveryDirectives)
              this.warn("Retrying playlist loading " + (l2 + 1) + "/" + u2.maxNumRetry + ' after "' + r2 + '" without delivery-directives'), this.loadPlaylist();
            else {
              var c2 = qe(u2, l2);
              this.timer = self.setTimeout(function() {
                return e3.loadPlaylist();
              }, c2), this.warn("Retrying playlist loading " + (l2 + 1) + "/" + u2.maxNumRetry + ' after "' + r2 + '" in ' + c2 + "ms");
            }
            t3.levelRetry = true, n2.resolved = true;
          }
          return h2;
        }, t2;
      }(), hr = function(t2) {
        function e2(e3, r3) {
          var i3;
          return (i3 = t2.call(this, e3, "[level-controller]") || this)._levels = [], i3._firstLevel = -1, i3._startLevel = void 0, i3.currentLevel = null, i3.currentLevelIndex = -1, i3.manualLevelIndex = -1, i3.steering = void 0, i3.onParsedComplete = void 0, i3.steering = r3, i3._registerListeners(), i3;
        }
        l(e2, t2);
        var r2 = e2.prototype;
        return r2._registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.on(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t3.on(S.FRAG_LOADED, this.onFragLoaded, this), t3.on(S.ERROR, this.onError, this);
        }, r2._unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.off(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t3.off(S.FRAG_LOADED, this.onFragLoaded, this), t3.off(S.ERROR, this.onError, this);
        }, r2.destroy = function() {
          this._unregisterListeners(), this.steering = null, this.resetLevels(), t2.prototype.destroy.call(this);
        }, r2.startLoad = function() {
          this._levels.forEach(function(t3) {
            t3.loadError = 0, t3.fragmentError = 0;
          }), t2.prototype.startLoad.call(this);
        }, r2.resetLevels = function() {
          this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [];
        }, r2.onManifestLoading = function(t3, e3) {
          this.resetLevels();
        }, r2.onManifestLoaded = function(t3, e3) {
          var r3, i3 = [], n2 = {};
          e3.levels.forEach(function(t4) {
            var e4, a2 = t4.attrs;
            -1 !== (null == (e4 = t4.audioCodec) ? void 0 : e4.indexOf("mp4a.40.34")) && (tr || (tr = /chrome|firefox/i.test(navigator.userAgent)), tr && (t4.audioCodec = void 0));
            var s2 = a2.AUDIO, o2 = a2.CODECS, l2 = a2["FRAME-RATE"], u2 = a2["PATHWAY-ID"], h2 = a2.RESOLUTION, d2 = a2.SUBTITLES, c2 = (u2 || ".") + "-" + t4.bitrate + "-" + h2 + "-" + l2 + "-" + o2;
            (r3 = n2[c2]) ? r3.addFallback(t4) : (r3 = new Ne(t4), n2[c2] = r3, i3.push(r3)), dr(r3, "audio", s2), dr(r3, "text", d2);
          }), this.filterAndSortMediaOptions(i3, e3);
        }, r2.filterAndSortMediaOptions = function(t3, e3) {
          var r3 = this, i3 = [], n2 = [], a2 = false, s2 = false, o2 = false, l2 = t3.filter(function(t4) {
            var e4 = t4.audioCodec, r4 = t4.videoCodec, i4 = t4.width, n3 = t4.height, l3 = t4.unknownCodecs;
            return a2 || (a2 = !(!i4 || !n3)), s2 || (s2 = !!r4), o2 || (o2 = !!e4), !(null != l3 && l3.length) && (!e4 || Qt(e4, "audio")) && (!r4 || Qt(r4, "video"));
          });
          if ((a2 || s2) && o2 && (l2 = l2.filter(function(t4) {
            var e4 = t4.videoCodec, r4 = t4.width, i4 = t4.height;
            return !!e4 || !(!r4 || !i4);
          })), 0 !== l2.length) {
            e3.audioTracks && cr(i3 = e3.audioTracks.filter(function(t4) {
              return !t4.audioCodec || Qt(t4.audioCodec, "audio");
            })), e3.subtitles && cr(n2 = e3.subtitles);
            var u2 = l2.slice(0);
            l2.sort(function(t4, e4) {
              return t4.attrs["HDCP-LEVEL"] !== e4.attrs["HDCP-LEVEL"] ? (t4.attrs["HDCP-LEVEL"] || "") > (e4.attrs["HDCP-LEVEL"] || "") ? 1 : -1 : t4.bitrate !== e4.bitrate ? t4.bitrate - e4.bitrate : t4.attrs["FRAME-RATE"] !== e4.attrs["FRAME-RATE"] ? t4.attrs.decimalFloatingPoint("FRAME-RATE") - e4.attrs.decimalFloatingPoint("FRAME-RATE") : t4.attrs.SCORE !== e4.attrs.SCORE ? t4.attrs.decimalFloatingPoint("SCORE") - e4.attrs.decimalFloatingPoint("SCORE") : a2 && t4.height !== e4.height ? t4.height - e4.height : 0;
            });
            var h2 = u2[0];
            if (this.steering && (l2 = this.steering.filterParsedLevels(l2)).length !== u2.length) {
              for (var d2 = 0; d2 < u2.length; d2++)
                if (u2[d2].pathwayId === l2[0].pathwayId) {
                  h2 = u2[d2];
                  break;
                }
            }
            this._levels = l2;
            for (var c2 = 0; c2 < l2.length; c2++)
              if (l2[c2] === h2) {
                this._firstLevel = c2, this.log("manifest loaded, " + l2.length + " level(s) found, first bitrate: " + h2.bitrate);
                break;
              }
            var f2 = o2 && !s2, g2 = { levels: l2, audioTracks: i3, subtitleTracks: n2, sessionData: e3.sessionData, sessionKeys: e3.sessionKeys, firstLevel: this._firstLevel, stats: e3.stats, audio: o2, video: s2, altAudio: !f2 && i3.some(function(t4) {
              return !!t4.url;
            }) };
            this.hls.trigger(S.MANIFEST_PARSED, g2), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
          } else
            Promise.resolve().then(function() {
              if (r3.hls) {
                var t4 = new Error("no level with compatible codecs found in manifest");
                r3.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: true, url: e3.url, error: t4, reason: t4.message });
              }
            });
        }, r2.onError = function(t3, e3) {
          !e3.fatal && e3.context && e3.context.type === de && e3.context.level === this.level && this.checkRetry(e3);
        }, r2.onFragLoaded = function(t3, e3) {
          var r3 = e3.frag;
          if (void 0 !== r3 && r3.type === ge) {
            var i3 = this._levels[r3.level];
            void 0 !== i3 && (i3.loadError = 0);
          }
        }, r2.onLevelLoaded = function(t3, e3) {
          var r3, i3, n2 = e3.level, a2 = e3.details, s2 = this._levels[n2];
          if (!s2)
            return this.warn("Invalid level index " + n2), void (null != (i3 = e3.deliveryDirectives) && i3.skip && (a2.deltaUpdateFailed = true));
          n2 === this.currentLevelIndex ? (0 === s2.fragmentError && (s2.loadError = 0), this.playlistLoaded(n2, e3, s2.details)) : null != (r3 = e3.deliveryDirectives) && r3.skip && (a2.deltaUpdateFailed = true);
        }, r2.onAudioTrackSwitched = function(t3, e3) {
          var r3 = this.currentLevel;
          if (r3) {
            var i3 = this.hls.audioTracks[e3.id].groupId;
            if (r3.audioGroupIds && r3.audioGroupId !== i3) {
              for (var n2 = -1, a2 = 0; a2 < r3.audioGroupIds.length; a2++)
                if (r3.audioGroupIds[a2] === i3) {
                  n2 = a2;
                  break;
                }
              -1 !== n2 && n2 !== r3.urlId && (r3.urlId = n2, this.canLoad && this.startLoad());
            }
          }
        }, r2.loadPlaylist = function(e3) {
          t2.prototype.loadPlaylist.call(this);
          var r3 = this.currentLevelIndex, i3 = this.currentLevel;
          if (i3 && this.shouldLoadPlaylist(i3)) {
            var n2 = i3.urlId, a2 = i3.uri;
            if (e3)
              try {
                a2 = e3.addDirectives(a2);
              } catch (t3) {
                this.warn("Could not construct new URL with HLS Delivery Directives: " + t3);
              }
            var s2 = i3.attrs["PATHWAY-ID"];
            this.log("Loading level index " + r3 + (void 0 !== (null == e3 ? void 0 : e3.msn) ? " at sn " + e3.msn + " part " + e3.part : "") + " with" + (s2 ? " Pathway " + s2 : "") + " URI " + (n2 + 1) + "/" + i3.url.length + " " + a2), this.clearTimer(), this.hls.trigger(S.LEVEL_LOADING, { url: a2, level: r3, id: n2, deliveryDirectives: e3 || null });
          }
        }, r2.removeLevel = function(t3, e3) {
          var r3 = this, i3 = function(t4, r4) {
            return r4 !== e3;
          }, n2 = this._levels.filter(function(n3, a2) {
            return a2 !== t3 || (n3.url.length > 1 && void 0 !== e3 ? (n3.url = n3.url.filter(i3), n3.audioGroupIds && (n3.audioGroupIds = n3.audioGroupIds.filter(i3)), n3.textGroupIds && (n3.textGroupIds = n3.textGroupIds.filter(i3)), n3.urlId = 0, true) : (r3.steering && r3.steering.removeLevel(n3), false));
          });
          this.hls.trigger(S.LEVELS_UPDATED, { levels: n2 });
        }, r2.onLevelsUpdated = function(t3, e3) {
          var r3 = e3.levels;
          r3.forEach(function(t4, e4) {
            var r4 = t4.details;
            null != r4 && r4.fragments && r4.fragments.forEach(function(t5) {
              t5.level = e4;
            });
          }), this._levels = r3;
        }, a(e2, [{ key: "levels", get: function() {
          return 0 === this._levels.length ? null : this._levels;
        } }, { key: "level", get: function() {
          return this.currentLevelIndex;
        }, set: function(t3) {
          var e3 = this._levels;
          if (0 !== e3.length) {
            if (t3 < 0 || t3 >= e3.length) {
              var r3 = new Error("invalid level idx"), i3 = t3 < 0;
              if (this.hls.trigger(S.ERROR, { type: L.OTHER_ERROR, details: R.LEVEL_SWITCH_ERROR, level: t3, fatal: i3, error: r3, reason: r3.message }), i3)
                return;
              t3 = Math.min(t3, e3.length - 1);
            }
            var n2 = this.currentLevelIndex, a2 = this.currentLevel, s2 = a2 ? a2.attrs["PATHWAY-ID"] : void 0, l2 = e3[t3], u2 = l2.attrs["PATHWAY-ID"];
            if (this.currentLevelIndex = t3, this.currentLevel = l2, n2 !== t3 || !l2.details || !a2 || s2 !== u2) {
              this.log("Switching to level " + t3 + (u2 ? " with Pathway " + u2 : "") + " from level " + n2 + (s2 ? " with Pathway " + s2 : ""));
              var h2 = o({}, l2, { level: t3, maxBitrate: l2.maxBitrate, attrs: l2.attrs, uri: l2.uri, urlId: l2.urlId });
              delete h2._attrs, delete h2._urlId, this.hls.trigger(S.LEVEL_SWITCHING, h2);
              var d2 = l2.details;
              if (!d2 || d2.live) {
                var c2 = this.switchParams(l2.uri, null == a2 ? void 0 : a2.details);
                this.loadPlaylist(c2);
              }
            }
          }
        } }, { key: "manualLevel", get: function() {
          return this.manualLevelIndex;
        }, set: function(t3) {
          this.manualLevelIndex = t3, void 0 === this._startLevel && (this._startLevel = t3), -1 !== t3 && (this.level = t3);
        } }, { key: "firstLevel", get: function() {
          return this._firstLevel;
        }, set: function(t3) {
          this._firstLevel = t3;
        } }, { key: "startLevel", get: function() {
          if (void 0 === this._startLevel) {
            var t3 = this.hls.config.startLevel;
            return void 0 !== t3 ? t3 : this._firstLevel;
          }
          return this._startLevel;
        }, set: function(t3) {
          this._startLevel = t3;
        } }, { key: "nextLoadLevel", get: function() {
          return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel;
        }, set: function(t3) {
          this.level = t3, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t3);
        } }]), e2;
      }(ur);
      function dr(t2, e2, r2) {
        r2 && ("audio" === e2 ? (t2.audioGroupIds || (t2.audioGroupIds = []), t2.audioGroupIds[t2.url.length - 1] = r2) : "text" === e2 && (t2.textGroupIds || (t2.textGroupIds = []), t2.textGroupIds[t2.url.length - 1] = r2));
      }
      function cr(t2) {
        var e2 = {};
        t2.forEach(function(t3) {
          var r2 = t3.groupId || "";
          t3.id = e2[r2] = e2[r2] || 0, e2[r2]++;
        });
      }
      var fr = "NOT_LOADED", gr = "APPENDING", vr = "PARTIAL", mr = "OK", pr = function() {
        function t2(t3) {
          this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = false, this.hls = t3, this._registerListeners();
        }
        var e2 = t2.prototype;
        return e2._registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.BUFFER_APPENDED, this.onBufferAppended, this), t3.on(S.FRAG_BUFFERED, this.onFragBuffered, this), t3.on(S.FRAG_LOADED, this.onFragLoaded, this);
        }, e2._unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.BUFFER_APPENDED, this.onBufferAppended, this), t3.off(S.FRAG_BUFFERED, this.onFragBuffered, this), t3.off(S.FRAG_LOADED, this.onFragLoaded, this);
        }, e2.destroy = function() {
          this._unregisterListeners(), this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null;
        }, e2.getAppendedFrag = function(t3, e3) {
          var r2 = this.activePartLists[e3];
          if (r2)
            for (var i3 = r2.length; i3--; ) {
              var n2 = r2[i3];
              if (!n2)
                break;
              var a2 = n2.end;
              if (n2.start <= t3 && null !== a2 && t3 <= a2)
                return n2;
            }
          return this.getBufferedFrag(t3, e3);
        }, e2.getBufferedFrag = function(t3, e3) {
          for (var r2 = this.fragments, i3 = Object.keys(r2), n2 = i3.length; n2--; ) {
            var a2 = r2[i3[n2]];
            if ((null == a2 ? void 0 : a2.body.type) === e3 && a2.buffered) {
              var s2 = a2.body;
              if (s2.start <= t3 && t3 <= s2.end)
                return s2;
            }
          }
          return null;
        }, e2.detectEvictedFragments = function(t3, e3, r2, i3) {
          var n2 = this;
          this.timeRanges && (this.timeRanges[t3] = e3);
          var a2 = (null == i3 ? void 0 : i3.fragment.sn) || -1;
          Object.keys(this.fragments).forEach(function(i4) {
            var s2 = n2.fragments[i4];
            if (s2 && !(a2 >= s2.body.sn))
              if (s2.buffered || s2.loaded) {
                var o2 = s2.range[t3];
                o2 && o2.time.some(function(t4) {
                  var r3 = !n2.isTimeBuffered(t4.startPTS, t4.endPTS, e3);
                  return r3 && n2.removeFragment(s2.body), r3;
                });
              } else
                s2.body.type === r2 && n2.removeFragment(s2.body);
          });
        }, e2.detectPartialFragments = function(t3) {
          var e3 = this, r2 = this.timeRanges, i3 = t3.frag, n2 = t3.part;
          if (r2 && "initSegment" !== i3.sn) {
            var a2 = Tr(i3), s2 = this.fragments[a2];
            if (!(!s2 || s2.buffered && i3.gap)) {
              var o2 = !i3.relurl;
              Object.keys(r2).forEach(function(t4) {
                var a3 = i3.elementaryStreams[t4];
                if (a3) {
                  var l2 = r2[t4], u2 = o2 || true === a3.partial;
                  s2.range[t4] = e3.getBufferedTimes(i3, n2, u2, l2);
                }
              }), s2.loaded = null, Object.keys(s2.range).length ? (s2.buffered = true, s2.body.endList && (this.endListFragments[s2.body.type] = s2), yr(s2) || this.removeParts(i3.sn - 1, i3.type)) : this.removeFragment(s2.body);
            }
          }
        }, e2.removeParts = function(t3, e3) {
          var r2 = this.activePartLists[e3];
          r2 && (this.activePartLists[e3] = r2.filter(function(e4) {
            return e4.fragment.sn >= t3;
          }));
        }, e2.fragBuffered = function(t3, e3) {
          var r2 = Tr(t3), i3 = this.fragments[r2];
          !i3 && e3 && (i3 = this.fragments[r2] = { body: t3, appendedPTS: null, loaded: null, buffered: false, range: /* @__PURE__ */ Object.create(null) }, t3.gap && (this.hasGaps = true)), i3 && (i3.loaded = null, i3.buffered = true);
        }, e2.getBufferedTimes = function(t3, e3, r2, i3) {
          for (var n2 = { time: [], partial: r2 }, a2 = t3.start, s2 = t3.end, o2 = t3.minEndPTS || s2, l2 = t3.maxStartPTS || a2, u2 = 0; u2 < i3.length; u2++) {
            var h2 = i3.start(u2) - this.bufferPadding, d2 = i3.end(u2) + this.bufferPadding;
            if (l2 >= h2 && o2 <= d2) {
              n2.time.push({ startPTS: Math.max(a2, i3.start(u2)), endPTS: Math.min(s2, i3.end(u2)) });
              break;
            }
            if (a2 < d2 && s2 > h2)
              n2.partial = true, n2.time.push({ startPTS: Math.max(a2, i3.start(u2)), endPTS: Math.min(s2, i3.end(u2)) });
            else if (s2 <= h2)
              break;
          }
          return n2;
        }, e2.getPartialFragment = function(t3) {
          var e3, r2, i3, n2 = null, a2 = 0, s2 = this.bufferPadding, o2 = this.fragments;
          return Object.keys(o2).forEach(function(l2) {
            var u2 = o2[l2];
            u2 && yr(u2) && (r2 = u2.body.start - s2, i3 = u2.body.end + s2, t3 >= r2 && t3 <= i3 && (e3 = Math.min(t3 - r2, i3 - t3), a2 <= e3 && (n2 = u2.body, a2 = e3)));
          }), n2;
        }, e2.isEndListAppended = function(t3) {
          var e3 = this.endListFragments[t3];
          return void 0 !== e3 && (e3.buffered || yr(e3));
        }, e2.getState = function(t3) {
          var e3 = Tr(t3), r2 = this.fragments[e3];
          return r2 ? r2.buffered ? yr(r2) ? vr : mr : gr : fr;
        }, e2.isTimeBuffered = function(t3, e3, r2) {
          for (var i3, n2, a2 = 0; a2 < r2.length; a2++) {
            if (i3 = r2.start(a2) - this.bufferPadding, n2 = r2.end(a2) + this.bufferPadding, t3 >= i3 && e3 <= n2)
              return true;
            if (e3 <= i3)
              return false;
          }
          return false;
        }, e2.onFragLoaded = function(t3, e3) {
          var r2 = e3.frag, i3 = e3.part;
          if ("initSegment" !== r2.sn && !r2.bitrateTest) {
            var n2 = i3 ? null : e3, a2 = Tr(r2);
            this.fragments[a2] = { body: r2, appendedPTS: null, loaded: n2, buffered: false, range: /* @__PURE__ */ Object.create(null) };
          }
        }, e2.onBufferAppended = function(t3, e3) {
          var r2 = this, i3 = e3.frag, n2 = e3.part, a2 = e3.timeRanges;
          if ("initSegment" !== i3.sn) {
            var s2 = i3.type;
            if (n2) {
              var o2 = this.activePartLists[s2];
              o2 || (this.activePartLists[s2] = o2 = []), o2.push(n2);
            }
            this.timeRanges = a2, Object.keys(a2).forEach(function(t4) {
              var e4 = a2[t4];
              r2.detectEvictedFragments(t4, e4, s2, n2);
            });
          }
        }, e2.onFragBuffered = function(t3, e3) {
          this.detectPartialFragments(e3);
        }, e2.hasFragment = function(t3) {
          var e3 = Tr(t3);
          return !!this.fragments[e3];
        }, e2.hasParts = function(t3) {
          var e3;
          return !(null == (e3 = this.activePartLists[t3]) || !e3.length);
        }, e2.removeFragmentsInRange = function(t3, e3, r2, i3, n2) {
          var a2 = this;
          i3 && !this.hasGaps || Object.keys(this.fragments).forEach(function(s2) {
            var o2 = a2.fragments[s2];
            if (o2) {
              var l2 = o2.body;
              l2.type !== r2 || i3 && !l2.gap || l2.start < e3 && l2.end > t3 && (o2.buffered || n2) && a2.removeFragment(l2);
            }
          });
        }, e2.removeFragment = function(t3) {
          var e3 = Tr(t3);
          t3.stats.loaded = 0, t3.clearElementaryStreamInfo();
          var r2 = this.activePartLists[t3.type];
          if (r2) {
            var i3 = t3.sn;
            this.activePartLists[t3.type] = r2.filter(function(t4) {
              return t4.fragment.sn !== i3;
            });
          }
          delete this.fragments[e3], t3.endList && delete this.endListFragments[t3.type];
        }, e2.removeAllFragments = function() {
          this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = false;
        }, t2;
      }();
      function yr(t2) {
        var e2, r2, i3;
        return t2.buffered && (t2.body.gap || (null == (e2 = t2.range.video) ? void 0 : e2.partial) || (null == (r2 = t2.range.audio) ? void 0 : r2.partial) || (null == (i3 = t2.range.audiovideo) ? void 0 : i3.partial));
      }
      function Tr(t2) {
        return t2.type + "_" + t2.level + "_" + t2.urlId + "_" + t2.sn;
      }
      var Er = Math.pow(2, 17), Sr = function() {
        function t2(t3) {
          this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t3;
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
          this.loader && (this.loader.destroy(), this.loader = null);
        }, e2.abort = function() {
          this.loader && this.loader.abort();
        }, e2.load = function(t3, e3) {
          var r2 = this, n2 = t3.url;
          if (!n2)
            return Promise.reject(new Ar({ type: L.NETWORK_ERROR, details: R.FRAG_LOAD_ERROR, fatal: false, frag: t3, error: new Error("Fragment does not have a " + (n2 ? "part list" : "url")), networkDetails: null }));
          this.abort();
          var a2 = this.config, s2 = a2.fLoader, o2 = a2.loader;
          return new Promise(function(l2, u2) {
            if (r2.loader && r2.loader.destroy(), t3.gap) {
              if (t3.tagList.some(function(t4) {
                return "GAP" === t4[0];
              }))
                return void u2(Rr(t3));
              t3.gap = false;
            }
            var h2 = r2.loader = t3.loader = s2 ? new s2(a2) : new o2(a2), d2 = Lr(t3), c2 = Xe(a2.fragLoadPolicy.default), f2 = { loadPolicy: c2, timeout: c2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0, highWaterMark: "initSegment" === t3.sn ? 1 / 0 : Er };
            t3.stats = h2.stats, h2.load(d2, f2, { onSuccess: function(e4, i3, n3, a3) {
              r2.resetLoader(t3, h2);
              var s3 = e4.data;
              n3.resetIV && t3.decryptdata && (t3.decryptdata.iv = new Uint8Array(s3.slice(0, 16)), s3 = s3.slice(16)), l2({ frag: t3, part: null, payload: s3, networkDetails: a3 });
            }, onError: function(e4, a3, s3, o3) {
              r2.resetLoader(t3, h2), u2(new Ar({ type: L.NETWORK_ERROR, details: R.FRAG_LOAD_ERROR, fatal: false, frag: t3, response: i2({ url: n2, data: void 0 }, e4), error: new Error("HTTP Error " + e4.code + " " + e4.text), networkDetails: s3, stats: o3 }));
            }, onAbort: function(e4, i3, n3) {
              r2.resetLoader(t3, h2), u2(new Ar({ type: L.NETWORK_ERROR, details: R.INTERNAL_ABORTED, fatal: false, frag: t3, error: new Error("Aborted"), networkDetails: n3, stats: e4 }));
            }, onTimeout: function(e4, i3, n3) {
              r2.resetLoader(t3, h2), u2(new Ar({ type: L.NETWORK_ERROR, details: R.FRAG_LOAD_TIMEOUT, fatal: false, frag: t3, error: new Error("Timeout after " + f2.timeout + "ms"), networkDetails: n3, stats: e4 }));
            }, onProgress: function(r3, i3, n3, a3) {
              e3 && e3({ frag: t3, part: null, payload: n3, networkDetails: a3 });
            } });
          });
        }, e2.loadPart = function(t3, e3, r2) {
          var n2 = this;
          this.abort();
          var a2 = this.config, s2 = a2.fLoader, o2 = a2.loader;
          return new Promise(function(l2, u2) {
            if (n2.loader && n2.loader.destroy(), t3.gap || e3.gap)
              u2(Rr(t3, e3));
            else {
              var h2 = n2.loader = t3.loader = s2 ? new s2(a2) : new o2(a2), d2 = Lr(t3, e3), c2 = Xe(a2.fragLoadPolicy.default), f2 = { loadPolicy: c2, timeout: c2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0, highWaterMark: Er };
              e3.stats = h2.stats, h2.load(d2, f2, { onSuccess: function(i3, a3, s3, o3) {
                n2.resetLoader(t3, h2), n2.updateStatsFromPart(t3, e3);
                var u3 = { frag: t3, part: e3, payload: i3.data, networkDetails: o3 };
                r2(u3), l2(u3);
              }, onError: function(r3, a3, s3, o3) {
                n2.resetLoader(t3, h2), u2(new Ar({ type: L.NETWORK_ERROR, details: R.FRAG_LOAD_ERROR, fatal: false, frag: t3, part: e3, response: i2({ url: d2.url, data: void 0 }, r3), error: new Error("HTTP Error " + r3.code + " " + r3.text), networkDetails: s3, stats: o3 }));
              }, onAbort: function(r3, i3, a3) {
                t3.stats.aborted = e3.stats.aborted, n2.resetLoader(t3, h2), u2(new Ar({ type: L.NETWORK_ERROR, details: R.INTERNAL_ABORTED, fatal: false, frag: t3, part: e3, error: new Error("Aborted"), networkDetails: a3, stats: r3 }));
              }, onTimeout: function(r3, i3, a3) {
                n2.resetLoader(t3, h2), u2(new Ar({ type: L.NETWORK_ERROR, details: R.FRAG_LOAD_TIMEOUT, fatal: false, frag: t3, part: e3, error: new Error("Timeout after " + f2.timeout + "ms"), networkDetails: a3, stats: r3 }));
              } });
            }
          });
        }, e2.updateStatsFromPart = function(t3, e3) {
          var r2 = t3.stats, i3 = e3.stats, n2 = i3.total;
          if (r2.loaded += i3.loaded, n2) {
            var a2 = Math.round(t3.duration / e3.duration), s2 = Math.min(Math.round(r2.loaded / n2), a2), o2 = (a2 - s2) * Math.round(r2.loaded / s2);
            r2.total = r2.loaded + o2;
          } else
            r2.total = Math.max(r2.loaded, r2.total);
          var l2 = r2.loading, u2 = i3.loading;
          l2.start ? l2.first += u2.first - u2.start : (l2.start = u2.start, l2.first = u2.first), l2.end = u2.end;
        }, e2.resetLoader = function(t3, e3) {
          t3.loader = null, this.loader === e3 && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e3.destroy();
        }, t2;
      }();
      function Lr(t2, e2) {
        void 0 === e2 && (e2 = null);
        var r2 = e2 || t2, i3 = { frag: t2, part: e2, responseType: "arraybuffer", url: r2.url, headers: {}, rangeStart: 0, rangeEnd: 0 }, n2 = r2.byteRangeStartOffset, a2 = r2.byteRangeEndOffset;
        if (E(n2) && E(a2)) {
          var s2, o2 = n2, l2 = a2;
          if ("initSegment" === t2.sn && "AES-128" === (null == (s2 = t2.decryptdata) ? void 0 : s2.method)) {
            var u2 = a2 - n2;
            u2 % 16 && (l2 = a2 + (16 - u2 % 16)), 0 !== n2 && (i3.resetIV = true, o2 = n2 - 16);
          }
          i3.rangeStart = o2, i3.rangeEnd = l2;
        }
        return i3;
      }
      function Rr(t2, e2) {
        var r2 = new Error("GAP " + (t2.gap ? "tag" : "attribute") + " found"), i3 = { type: L.MEDIA_ERROR, details: R.FRAG_GAP, fatal: false, frag: t2, error: r2, networkDetails: null };
        return e2 && (i3.part = e2), (e2 || t2).stats.aborted = true, new Ar(i3);
      }
      var Ar = function(t2) {
        function e2(e3) {
          var r2;
          return (r2 = t2.call(this, e3.error.message) || this).data = void 0, r2.data = e3, r2;
        }
        return l(e2, t2), e2;
      }(f(Error)), kr = function() {
        function t2(t3) {
          this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = t3;
        }
        var e2 = t2.prototype;
        return e2.abort = function(t3) {
          for (var e3 in this.keyUriToKeyInfo) {
            var r2 = this.keyUriToKeyInfo[e3].loader;
            if (r2) {
              if (t3 && t3 !== r2.context.frag.type)
                return;
              r2.abort();
            }
          }
        }, e2.detach = function() {
          for (var t3 in this.keyUriToKeyInfo) {
            var e3 = this.keyUriToKeyInfo[t3];
            (e3.mediaKeySessionContext || e3.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[t3];
          }
        }, e2.destroy = function() {
          for (var t3 in this.detach(), this.keyUriToKeyInfo) {
            var e3 = this.keyUriToKeyInfo[t3].loader;
            e3 && e3.destroy();
          }
          this.keyUriToKeyInfo = {};
        }, e2.createKeyLoadError = function(t3, e3, r2, i3, n2) {
          return void 0 === e3 && (e3 = R.KEY_LOAD_ERROR), new Ar({ type: L.NETWORK_ERROR, details: e3, fatal: false, frag: t3, response: n2, error: r2, networkDetails: i3 });
        }, e2.loadClear = function(t3, e3) {
          var r2 = this;
          if (this.emeController && this.config.emeEnabled)
            for (var i3 = t3.sn, n2 = t3.cc, a2 = function() {
              var t4 = e3[s2];
              if (n2 <= t4.cc && ("initSegment" === i3 || "initSegment" === t4.sn || i3 < t4.sn))
                return r2.emeController.selectKeySystemFormat(t4).then(function(e4) {
                  t4.setKeyFormat(e4);
                }), "break";
            }, s2 = 0; s2 < e3.length && "break" !== a2(); s2++)
              ;
        }, e2.load = function(t3) {
          var e3 = this;
          return !t3.decryptdata && t3.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(t3).then(function(r2) {
            return e3.loadInternal(t3, r2);
          }) : this.loadInternal(t3);
        }, e2.loadInternal = function(t3, e3) {
          var r2, i3;
          e3 && t3.setKeyFormat(e3);
          var n2 = t3.decryptdata;
          if (!n2) {
            var a2 = new Error(e3 ? "Expected frag.decryptdata to be defined after setting format " + e3 : "Missing decryption data on fragment in onKeyLoading");
            return Promise.reject(this.createKeyLoadError(t3, R.KEY_LOAD_ERROR, a2));
          }
          var s2 = n2.uri;
          if (!s2)
            return Promise.reject(this.createKeyLoadError(t3, R.KEY_LOAD_ERROR, new Error('Invalid key URI: "' + s2 + '"')));
          var o2, l2 = this.keyUriToKeyInfo[s2];
          if (null != (r2 = l2) && r2.decryptdata.key)
            return n2.key = l2.decryptdata.key, Promise.resolve({ frag: t3, keyInfo: l2 });
          if (null != (i3 = l2) && i3.keyLoadPromise)
            switch (null == (o2 = l2.mediaKeySessionContext) ? void 0 : o2.keyStatus) {
              case void 0:
              case "status-pending":
              case "usable":
              case "usable-in-future":
                return l2.keyLoadPromise.then(function(e4) {
                  return n2.key = e4.keyInfo.decryptdata.key, { frag: t3, keyInfo: l2 };
                });
            }
          switch (l2 = this.keyUriToKeyInfo[s2] = { decryptdata: n2, keyLoadPromise: null, loader: null, mediaKeySessionContext: null }, n2.method) {
            case "ISO-23001-7":
            case "SAMPLE-AES":
            case "SAMPLE-AES-CENC":
            case "SAMPLE-AES-CTR":
              return "identity" === n2.keyFormat ? this.loadKeyHTTP(l2, t3) : this.loadKeyEME(l2, t3);
            case "AES-128":
              return this.loadKeyHTTP(l2, t3);
            default:
              return Promise.reject(this.createKeyLoadError(t3, R.KEY_LOAD_ERROR, new Error('Key supplied with unsupported METHOD: "' + n2.method + '"')));
          }
        }, e2.loadKeyEME = function(t3, e3) {
          var r2 = { frag: e3, keyInfo: t3 };
          if (this.emeController && this.config.emeEnabled) {
            var i3 = this.emeController.loadKey(r2);
            if (i3)
              return (t3.keyLoadPromise = i3.then(function(e4) {
                return t3.mediaKeySessionContext = e4, r2;
              })).catch(function(e4) {
                throw t3.keyLoadPromise = null, e4;
              });
          }
          return Promise.resolve(r2);
        }, e2.loadKeyHTTP = function(t3, e3) {
          var r2 = this, n2 = this.config, a2 = new n2.loader(n2);
          return e3.keyLoader = t3.loader = a2, t3.keyLoadPromise = new Promise(function(s2, o2) {
            var l2 = { keyInfo: t3, frag: e3, responseType: "arraybuffer", url: t3.decryptdata.uri }, u2 = n2.keyLoadPolicy.default, h2 = { loadPolicy: u2, timeout: u2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 }, d2 = { onSuccess: function(t4, e4, i3, n3) {
              var a3 = i3.frag, l3 = i3.keyInfo, u3 = i3.url;
              if (!a3.decryptdata || l3 !== r2.keyUriToKeyInfo[u3])
                return o2(r2.createKeyLoadError(a3, R.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), n3));
              l3.decryptdata.key = a3.decryptdata.key = new Uint8Array(t4.data), a3.keyLoader = null, l3.loader = null, s2({ frag: a3, keyInfo: l3 });
            }, onError: function(t4, n3, a3, s3) {
              r2.resetLoader(n3), o2(r2.createKeyLoadError(e3, R.KEY_LOAD_ERROR, new Error("HTTP Error " + t4.code + " loading key " + t4.text), a3, i2({ url: l2.url, data: void 0 }, t4)));
            }, onTimeout: function(t4, i3, n3) {
              r2.resetLoader(i3), o2(r2.createKeyLoadError(e3, R.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), n3));
            }, onAbort: function(t4, i3, n3) {
              r2.resetLoader(i3), o2(r2.createKeyLoadError(e3, R.INTERNAL_ABORTED, new Error("key loading aborted"), n3));
            } };
            a2.load(l2, h2, d2);
          });
        }, e2.resetLoader = function(t3) {
          var e3 = t3.frag, r2 = t3.keyInfo, i3 = t3.url, n2 = r2.loader;
          e3.keyLoader === n2 && (e3.keyLoader = null, r2.loader = null), delete this.keyUriToKeyInfo[i3], n2 && n2.destroy();
        }, t2;
      }(), br = function() {
        function t2() {
          this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
          this.onHandlerDestroying(), this.onHandlerDestroyed();
        }, e2.onHandlerDestroying = function() {
          this.clearNextTick(), this.clearInterval();
        }, e2.onHandlerDestroyed = function() {
        }, e2.hasInterval = function() {
          return !!this._tickInterval;
        }, e2.hasNextTick = function() {
          return !!this._tickTimer;
        }, e2.setInterval = function(t3) {
          return !this._tickInterval && (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, t3), true);
        }, e2.clearInterval = function() {
          return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, true);
        }, e2.clearNextTick = function() {
          return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, true);
        }, e2.tick = function() {
          this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
        }, e2.tickImmediate = function() {
          this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
        }, e2.doTick = function() {
        }, t2;
      }(), Dr = { length: 0, start: function() {
        return 0;
      }, end: function() {
        return 0;
      } }, Ir = function() {
        function t2() {
        }
        return t2.isBuffered = function(e2, r2) {
          try {
            if (e2) {
              for (var i3 = t2.getBuffered(e2), n2 = 0; n2 < i3.length; n2++)
                if (r2 >= i3.start(n2) && r2 <= i3.end(n2))
                  return true;
            }
          } catch (t3) {
          }
          return false;
        }, t2.bufferInfo = function(e2, r2, i3) {
          try {
            if (e2) {
              var n2, a2 = t2.getBuffered(e2), s2 = [];
              for (n2 = 0; n2 < a2.length; n2++)
                s2.push({ start: a2.start(n2), end: a2.end(n2) });
              return this.bufferedInfo(s2, r2, i3);
            }
          } catch (t3) {
          }
          return { len: 0, start: r2, end: r2, nextStart: void 0 };
        }, t2.bufferedInfo = function(t3, e2, r2) {
          e2 = Math.max(0, e2), t3.sort(function(t4, e3) {
            var r3 = t4.start - e3.start;
            return r3 || e3.end - t4.end;
          });
          var i3 = [];
          if (r2)
            for (var n2 = 0; n2 < t3.length; n2++) {
              var a2 = i3.length;
              if (a2) {
                var s2 = i3[a2 - 1].end;
                t3[n2].start - s2 < r2 ? t3[n2].end > s2 && (i3[a2 - 1].end = t3[n2].end) : i3.push(t3[n2]);
              } else
                i3.push(t3[n2]);
            }
          else
            i3 = t3;
          for (var o2, l2 = 0, u2 = e2, h2 = e2, d2 = 0; d2 < i3.length; d2++) {
            var c2 = i3[d2].start, f2 = i3[d2].end;
            if (e2 + r2 >= c2 && e2 < f2)
              u2 = c2, l2 = (h2 = f2) - e2;
            else if (e2 + r2 < c2) {
              o2 = c2;
              break;
            }
          }
          return { len: l2, start: u2 || 0, end: h2 || 0, nextStart: o2 };
        }, t2.getBuffered = function(t3) {
          try {
            return t3.buffered;
          } catch (t4) {
            return w.log("failed to get media.buffered", t4), Dr;
          }
        }, t2;
      }(), wr = function(t2, e2, r2, i3, n2, a2) {
        void 0 === i3 && (i3 = 0), void 0 === n2 && (n2 = -1), void 0 === a2 && (a2 = false), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, this.buffering = { audio: { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, video: { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, audiovideo: { start: 0, executeStart: 0, executeEnd: 0, end: 0 } }, this.level = t2, this.sn = e2, this.id = r2, this.size = i3, this.part = n2, this.partial = a2;
      };
      function Cr(t2, e2) {
        for (var r2 = null, i3 = 0, n2 = t2.length; i3 < n2; i3++) {
          var a2 = t2[i3];
          if (a2 && a2.cc === e2) {
            r2 = a2;
            break;
          }
        }
        return r2;
      }
      function _r(t2, e2) {
        if (t2) {
          var r2 = t2.start + e2;
          t2.start = t2.startPTS = r2, t2.endPTS = r2 + t2.duration;
        }
      }
      function Pr(t2, e2) {
        for (var r2 = e2.fragments, i3 = 0, n2 = r2.length; i3 < n2; i3++)
          _r(r2[i3], t2);
        e2.fragmentHint && _r(e2.fragmentHint, t2), e2.alignedSliding = true;
      }
      function xr(t2, e2, r2) {
        e2 && (function(t3, e3, r3) {
          if (function(t4, e4, r4) {
            return !(!e4.details || !(r4.endCC > r4.startCC || t4 && t4.cc < r4.startCC));
          }(t3, r3, e3)) {
            var i3 = function(t4, e4, r4) {
              var i4 = t4.fragments, n2 = e4.fragments;
              if (n2.length && i4.length) {
                var a2 = Cr(i4, n2[0].cc);
                if (a2 && (!a2 || a2.startPTS))
                  return a2;
                w.log("No frag in previous level to align on");
              } else
                w.log("No fragments to align");
            }(r3.details, e3);
            i3 && E(i3.start) && (w.log("Adjusting PTS using last level due to CC increase within current level " + e3.url), Pr(i3.start, e3));
          }
        }(t2, r2, e2), !r2.alignedSliding && e2.details && function(t3, e3) {
          if (e3.fragments.length && t3.hasProgramDateTime && e3.hasProgramDateTime) {
            var r3 = e3.fragments[0].programDateTime, i3 = t3.fragments[0].programDateTime, n2 = (i3 - r3) / 1e3 + e3.fragments[0].start;
            n2 && E(n2) && (w.log("Adjusting PTS using programDateTime delta " + (i3 - r3) + "ms, sliding:" + n2.toFixed(3) + " " + t3.url + " "), Pr(n2, t3));
          }
        }(r2, e2.details), r2.alignedSliding || !e2.details || r2.skippedSegments || Ke(e2.details, r2));
      }
      function Fr(t2, e2) {
        if (t2.hasProgramDateTime && e2.hasProgramDateTime) {
          var r2 = t2.fragments, i3 = e2.fragments;
          if (r2.length && i3.length) {
            var n2 = i3[Math.round(i3.length / 2) - 1], a2 = Cr(r2, n2.cc) || r2[Math.round(r2.length / 2) - 1], s2 = n2.programDateTime, o2 = a2.programDateTime;
            null !== s2 && null !== o2 && Pr((o2 - s2) / 1e3 - (a2.start - n2.start), t2);
          }
        }
      }
      var Mr = function() {
        function t2(t3, e2) {
          this.subtle = void 0, this.aesIV = void 0, this.subtle = t3, this.aesIV = e2;
        }
        return t2.prototype.decrypt = function(t3, e2) {
          return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, e2, t3);
        }, t2;
      }(), Or = function() {
        function t2(t3, e2) {
          this.subtle = void 0, this.key = void 0, this.subtle = t3, this.key = e2;
        }
        return t2.prototype.expandKey = function() {
          return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, false, ["encrypt", "decrypt"]);
        }, t2;
      }(), Nr = function() {
        function t2() {
          this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
        }
        var e2 = t2.prototype;
        return e2.uint8ArrayToUint32Array_ = function(t3) {
          for (var e3 = new DataView(t3), r2 = new Uint32Array(4), i3 = 0; i3 < 4; i3++)
            r2[i3] = e3.getUint32(4 * i3);
          return r2;
        }, e2.initTable = function() {
          var t3 = this.sBox, e3 = this.invSBox, r2 = this.subMix, i3 = r2[0], n2 = r2[1], a2 = r2[2], s2 = r2[3], o2 = this.invSubMix, l2 = o2[0], u2 = o2[1], h2 = o2[2], d2 = o2[3], c2 = new Uint32Array(256), f2 = 0, g2 = 0, v2 = 0;
          for (v2 = 0; v2 < 256; v2++)
            c2[v2] = v2 < 128 ? v2 << 1 : v2 << 1 ^ 283;
          for (v2 = 0; v2 < 256; v2++) {
            var m2 = g2 ^ g2 << 1 ^ g2 << 2 ^ g2 << 3 ^ g2 << 4;
            m2 = m2 >>> 8 ^ 255 & m2 ^ 99, t3[f2] = m2, e3[m2] = f2;
            var p2 = c2[f2], y2 = c2[p2], T2 = c2[y2], E2 = 257 * c2[m2] ^ 16843008 * m2;
            i3[f2] = E2 << 24 | E2 >>> 8, n2[f2] = E2 << 16 | E2 >>> 16, a2[f2] = E2 << 8 | E2 >>> 24, s2[f2] = E2, E2 = 16843009 * T2 ^ 65537 * y2 ^ 257 * p2 ^ 16843008 * f2, l2[m2] = E2 << 24 | E2 >>> 8, u2[m2] = E2 << 16 | E2 >>> 16, h2[m2] = E2 << 8 | E2 >>> 24, d2[m2] = E2, f2 ? (f2 = p2 ^ c2[c2[c2[T2 ^ p2]]], g2 ^= c2[c2[g2]]) : f2 = g2 = 1;
          }
        }, e2.expandKey = function(t3) {
          for (var e3 = this.uint8ArrayToUint32Array_(t3), r2 = true, i3 = 0; i3 < e3.length && r2; )
            r2 = e3[i3] === this.key[i3], i3++;
          if (!r2) {
            this.key = e3;
            var n2 = this.keySize = e3.length;
            if (4 !== n2 && 6 !== n2 && 8 !== n2)
              throw new Error("Invalid aes key size=" + n2);
            var a2, s2, o2, l2, u2 = this.ksRows = 4 * (n2 + 6 + 1), h2 = this.keySchedule = new Uint32Array(u2), d2 = this.invKeySchedule = new Uint32Array(u2), c2 = this.sBox, f2 = this.rcon, g2 = this.invSubMix, v2 = g2[0], m2 = g2[1], p2 = g2[2], y2 = g2[3];
            for (a2 = 0; a2 < u2; a2++)
              a2 < n2 ? o2 = h2[a2] = e3[a2] : (l2 = o2, a2 % n2 == 0 ? (l2 = c2[(l2 = l2 << 8 | l2 >>> 24) >>> 24] << 24 | c2[l2 >>> 16 & 255] << 16 | c2[l2 >>> 8 & 255] << 8 | c2[255 & l2], l2 ^= f2[a2 / n2 | 0] << 24) : n2 > 6 && a2 % n2 == 4 && (l2 = c2[l2 >>> 24] << 24 | c2[l2 >>> 16 & 255] << 16 | c2[l2 >>> 8 & 255] << 8 | c2[255 & l2]), h2[a2] = o2 = (h2[a2 - n2] ^ l2) >>> 0);
            for (s2 = 0; s2 < u2; s2++)
              a2 = u2 - s2, l2 = 3 & s2 ? h2[a2] : h2[a2 - 4], d2[s2] = s2 < 4 || a2 <= 4 ? l2 : v2[c2[l2 >>> 24]] ^ m2[c2[l2 >>> 16 & 255]] ^ p2[c2[l2 >>> 8 & 255]] ^ y2[c2[255 & l2]], d2[s2] = d2[s2] >>> 0;
          }
        }, e2.networkToHostOrderSwap = function(t3) {
          return t3 << 24 | (65280 & t3) << 8 | (16711680 & t3) >> 8 | t3 >>> 24;
        }, e2.decrypt = function(t3, e3, r2) {
          for (var i3, n2, a2, s2, o2, l2, u2, h2, d2, c2, f2, g2, v2, m2, p2 = this.keySize + 6, y2 = this.invKeySchedule, T2 = this.invSBox, E2 = this.invSubMix, S2 = E2[0], L2 = E2[1], R2 = E2[2], A2 = E2[3], k2 = this.uint8ArrayToUint32Array_(r2), b2 = k2[0], D2 = k2[1], I2 = k2[2], w2 = k2[3], C2 = new Int32Array(t3), _2 = new Int32Array(C2.length), P2 = this.networkToHostOrderSwap; e3 < C2.length; ) {
            for (d2 = P2(C2[e3]), c2 = P2(C2[e3 + 1]), f2 = P2(C2[e3 + 2]), g2 = P2(C2[e3 + 3]), o2 = d2 ^ y2[0], l2 = g2 ^ y2[1], u2 = f2 ^ y2[2], h2 = c2 ^ y2[3], v2 = 4, m2 = 1; m2 < p2; m2++)
              i3 = S2[o2 >>> 24] ^ L2[l2 >> 16 & 255] ^ R2[u2 >> 8 & 255] ^ A2[255 & h2] ^ y2[v2], n2 = S2[l2 >>> 24] ^ L2[u2 >> 16 & 255] ^ R2[h2 >> 8 & 255] ^ A2[255 & o2] ^ y2[v2 + 1], a2 = S2[u2 >>> 24] ^ L2[h2 >> 16 & 255] ^ R2[o2 >> 8 & 255] ^ A2[255 & l2] ^ y2[v2 + 2], s2 = S2[h2 >>> 24] ^ L2[o2 >> 16 & 255] ^ R2[l2 >> 8 & 255] ^ A2[255 & u2] ^ y2[v2 + 3], o2 = i3, l2 = n2, u2 = a2, h2 = s2, v2 += 4;
            i3 = T2[o2 >>> 24] << 24 ^ T2[l2 >> 16 & 255] << 16 ^ T2[u2 >> 8 & 255] << 8 ^ T2[255 & h2] ^ y2[v2], n2 = T2[l2 >>> 24] << 24 ^ T2[u2 >> 16 & 255] << 16 ^ T2[h2 >> 8 & 255] << 8 ^ T2[255 & o2] ^ y2[v2 + 1], a2 = T2[u2 >>> 24] << 24 ^ T2[h2 >> 16 & 255] << 16 ^ T2[o2 >> 8 & 255] << 8 ^ T2[255 & l2] ^ y2[v2 + 2], s2 = T2[h2 >>> 24] << 24 ^ T2[o2 >> 16 & 255] << 16 ^ T2[l2 >> 8 & 255] << 8 ^ T2[255 & u2] ^ y2[v2 + 3], _2[e3] = P2(i3 ^ b2), _2[e3 + 1] = P2(s2 ^ D2), _2[e3 + 2] = P2(a2 ^ I2), _2[e3 + 3] = P2(n2 ^ w2), b2 = d2, D2 = c2, I2 = f2, w2 = g2, e3 += 4;
          }
          return _2.buffer;
        }, t2;
      }(), Ur = function() {
        function t2(t3, e3) {
          var r2 = (void 0 === e3 ? {} : e3).removePKCS7Padding, i3 = void 0 === r2 || r2;
          if (this.logEnabled = true, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = t3.enableSoftwareAES, this.removePKCS7Padding = i3, i3)
            try {
              var n2 = self.crypto;
              n2 && (this.subtle = n2.subtle || n2.webkitSubtle);
            } catch (t4) {
            }
          null === this.subtle && (this.useSoftware = true);
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
          this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
        }, e2.isSync = function() {
          return this.useSoftware;
        }, e2.flush = function() {
          var t3 = this.currentResult, e3 = this.remainderData;
          if (!t3 || e3)
            return this.reset(), null;
          var r2, i3, n2, a2 = new Uint8Array(t3);
          return this.reset(), this.removePKCS7Padding ? (i3 = (r2 = a2).byteLength, (n2 = i3 && new DataView(r2.buffer).getUint8(i3 - 1)) ? rt(r2, 0, i3 - n2) : r2) : a2;
        }, e2.reset = function() {
          this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
        }, e2.decrypt = function(t3, e3, r2) {
          var i3 = this;
          return this.useSoftware ? new Promise(function(n2, a2) {
            i3.softwareDecrypt(new Uint8Array(t3), e3, r2);
            var s2 = i3.flush();
            s2 ? n2(s2.buffer) : a2(new Error("[softwareDecrypt] Failed to decrypt data"));
          }) : this.webCryptoDecrypt(new Uint8Array(t3), e3, r2);
        }, e2.softwareDecrypt = function(t3, e3, r2) {
          var i3 = this.currentIV, n2 = this.currentResult, a2 = this.remainderData;
          this.logOnce("JS AES decrypt"), a2 && (t3 = xt(a2, t3), this.remainderData = null);
          var s2 = this.getValidChunk(t3);
          if (!s2.length)
            return null;
          i3 && (r2 = i3);
          var o2 = this.softwareDecrypter;
          o2 || (o2 = this.softwareDecrypter = new Nr()), o2.expandKey(e3);
          var l2 = n2;
          return this.currentResult = o2.decrypt(s2.buffer, 0, r2), this.currentIV = rt(s2, -16).buffer, l2 || null;
        }, e2.webCryptoDecrypt = function(t3, e3, r2) {
          var i3 = this, n2 = this.subtle;
          return this.key === e3 && this.fastAesKey || (this.key = e3, this.fastAesKey = new Or(n2, e3)), this.fastAesKey.expandKey().then(function(e4) {
            return n2 ? (i3.logOnce("WebCrypto AES decrypt"), new Mr(n2, new Uint8Array(r2)).decrypt(t3.buffer, e4)) : Promise.reject(new Error("web crypto not initialized"));
          }).catch(function(n3) {
            return w.warn("[decrypter]: WebCrypto Error, disable WebCrypto API, " + n3.name + ": " + n3.message), i3.onWebCryptoError(t3, e3, r2);
          });
        }, e2.onWebCryptoError = function(t3, e3, r2) {
          this.useSoftware = true, this.logEnabled = true, this.softwareDecrypt(t3, e3, r2);
          var i3 = this.flush();
          if (i3)
            return i3.buffer;
          throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data");
        }, e2.getValidChunk = function(t3) {
          var e3 = t3, r2 = t3.length - t3.length % 16;
          return r2 !== t3.length && (e3 = rt(t3, 0, r2), this.remainderData = rt(t3, r2)), e3;
        }, e2.logOnce = function(t3) {
          this.logEnabled && (w.log("[decrypter]: " + t3), this.logEnabled = false);
        }, t2;
      }(), Br = function(t2) {
        for (var e2 = "", r2 = t2.length, i3 = 0; i3 < r2; i3++)
          e2 += "[" + t2.start(i3).toFixed(3) + "-" + t2.end(i3).toFixed(3) + "]";
        return e2;
      }, Gr = "STOPPED", Kr = "IDLE", Hr = "KEY_LOADING", Vr = "FRAG_LOADING", Yr = "FRAG_LOADING_WAITING_RETRY", Wr = "WAITING_TRACK", jr = "PARSING", qr = "PARSED", Xr = "ENDED", zr = "ERROR", Qr = "WAITING_INIT_PTS", $r = "WAITING_LEVEL", Jr = function(t2) {
        function e2(e3, r3, i3, n2, a2) {
          var s2;
          return (s2 = t2.call(this) || this).hls = void 0, s2.fragPrevious = null, s2.fragCurrent = null, s2.fragmentTracker = void 0, s2.transmuxer = null, s2._state = Gr, s2.playlistType = void 0, s2.media = null, s2.mediaBuffer = null, s2.config = void 0, s2.bitrateTest = false, s2.lastCurrentTime = 0, s2.nextLoadPosition = 0, s2.startPosition = 0, s2.startTimeOffset = null, s2.loadedmetadata = false, s2.retryDate = 0, s2.levels = null, s2.fragmentLoader = void 0, s2.keyLoader = void 0, s2.levelLastLoaded = null, s2.startFragRequested = false, s2.decrypter = void 0, s2.initPTS = [], s2.onvseeking = null, s2.onvended = null, s2.logPrefix = "", s2.log = void 0, s2.warn = void 0, s2.playlistType = a2, s2.logPrefix = n2, s2.log = w.log.bind(w, n2 + ":"), s2.warn = w.warn.bind(w, n2 + ":"), s2.hls = e3, s2.fragmentLoader = new Sr(e3.config), s2.keyLoader = i3, s2.fragmentTracker = r3, s2.config = e3.config, s2.decrypter = new Ur(e3.config), e3.on(S.MANIFEST_LOADED, s2.onManifestLoaded, function(t3) {
            if (void 0 === t3)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t3;
          }(s2)), s2;
        }
        l(e2, t2);
        var r2 = e2.prototype;
        return r2.doTick = function() {
          this.onTickEnd();
        }, r2.onTickEnd = function() {
        }, r2.startLoad = function(t3) {
        }, r2.stopLoad = function() {
          this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
          var t3 = this.fragCurrent;
          null != t3 && t3.loader && (t3.abortRequests(), this.fragmentTracker.removeFragment(t3)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = Gr;
        }, r2._streamEnded = function(t3, e3) {
          if (e3.live || t3.nextStart || !t3.end || !this.media)
            return false;
          var r3 = e3.partList;
          if (null != r3 && r3.length) {
            var i3 = r3[r3.length - 1];
            return Ir.isBuffered(this.media, i3.start + i3.duration / 2);
          }
          var n2 = e3.fragments[e3.fragments.length - 1].type;
          return this.fragmentTracker.isEndListAppended(n2);
        }, r2.getLevelDetails = function() {
          var t3;
          if (this.levels && null !== this.levelLastLoaded)
            return null == (t3 = this.levels[this.levelLastLoaded]) ? void 0 : t3.details;
        }, r2.onMediaAttached = function(t3, e3) {
          var r3 = this.media = this.mediaBuffer = e3.media;
          this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), r3.addEventListener("seeking", this.onvseeking), r3.addEventListener("ended", this.onvended);
          var i3 = this.config;
          this.levels && i3.autoStartLoad && this.state === Gr && this.startLoad(i3.startPosition);
        }, r2.onMediaDetaching = function() {
          var t3 = this.media;
          null != t3 && t3.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t3 && this.onvseeking && this.onvended && (t3.removeEventListener("seeking", this.onvseeking), t3.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = false, this.fragmentTracker.removeAllFragments(), this.stopLoad();
        }, r2.onMediaSeeking = function() {
          var t3 = this.config, e3 = this.fragCurrent, r3 = this.media, i3 = this.mediaBuffer, n2 = this.state, a2 = r3 ? r3.currentTime : 0, s2 = Ir.bufferInfo(i3 || r3, a2, t3.maxBufferHole);
          if (this.log("media seeking to " + (E(a2) ? a2.toFixed(3) : a2) + ", state: " + n2), this.state === Xr)
            this.resetLoadingState();
          else if (e3) {
            var o2 = t3.maxFragLookUpTolerance, l2 = e3.start - o2, u2 = e3.start + e3.duration + o2;
            if (!s2.len || u2 < s2.start || l2 > s2.end) {
              var h2 = a2 > u2;
              (a2 < l2 || h2) && (h2 && e3.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e3.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
            }
          }
          r3 && (this.fragmentTracker.removeFragmentsInRange(a2, 1 / 0, this.playlistType, true), this.lastCurrentTime = a2), this.loadedmetadata || s2.len || (this.nextLoadPosition = this.startPosition = a2), this.tickImmediate();
        }, r2.onMediaEnded = function() {
          this.startPosition = this.lastCurrentTime = 0;
        }, r2.onManifestLoaded = function(t3, e3) {
          this.startTimeOffset = e3.startTimeOffset, this.initPTS = [];
        }, r2.onHandlerDestroying = function() {
          this.stopLoad(), t2.prototype.onHandlerDestroying.call(this);
        }, r2.onHandlerDestroyed = function() {
          this.state = Gr, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, t2.prototype.onHandlerDestroyed.call(this);
        }, r2.loadFragment = function(t3, e3, r3) {
          this._loadFragForPlayback(t3, e3, r3);
        }, r2._loadFragForPlayback = function(t3, e3, r3) {
          var i3 = this;
          this._doFragLoad(t3, e3, r3, function(e4) {
            if (i3.fragContextChanged(t3))
              return i3.warn("Fragment " + t3.sn + (e4.part ? " p: " + e4.part.index : "") + " of level " + t3.level + " was dropped during download."), void i3.fragmentTracker.removeFragment(t3);
            t3.stats.chunkCount++, i3._handleFragmentLoadProgress(e4);
          }).then(function(e4) {
            if (e4) {
              var r4 = i3.state;
              i3.fragContextChanged(t3) ? (r4 === Vr || !i3.fragCurrent && r4 === jr) && (i3.fragmentTracker.removeFragment(t3), i3.state = Kr) : ("payload" in e4 && (i3.log("Loaded fragment " + t3.sn + " of level " + t3.level), i3.hls.trigger(S.FRAG_LOADED, e4)), i3._handleFragmentLoadComplete(e4));
            }
          }).catch(function(e4) {
            i3.state !== Gr && i3.state !== zr && (i3.warn(e4), i3.resetFragmentLoading(t3));
          });
        }, r2.clearTrackerIfNeeded = function(t3) {
          var e3, r3 = this.fragmentTracker;
          if (r3.getState(t3) === gr) {
            var i3 = t3.type, n2 = this.getFwdBufferInfo(this.mediaBuffer, i3), a2 = Math.max(t3.duration, n2 ? n2.len : this.config.maxBufferLength);
            this.reduceMaxBufferLength(a2) && r3.removeFragment(t3);
          } else
            0 === (null == (e3 = this.mediaBuffer) ? void 0 : e3.buffered.length) ? r3.removeAllFragments() : r3.hasParts(t3.type) && (r3.detectPartialFragments({ frag: t3, part: null, stats: t3.stats, id: t3.type }), r3.getState(t3) === vr && r3.removeFragment(t3));
        }, r2.flushMainBuffer = function(t3, e3, r3) {
          if (void 0 === r3 && (r3 = null), t3 - e3) {
            var i3 = { startOffset: t3, endOffset: e3, type: r3 };
            this.hls.trigger(S.BUFFER_FLUSHING, i3);
          }
        }, r2._loadInitSegment = function(t3, e3) {
          var r3 = this;
          this._doFragLoad(t3, e3).then(function(e4) {
            if (!e4 || r3.fragContextChanged(t3) || !r3.levels)
              throw new Error("init load aborted");
            return e4;
          }).then(function(e4) {
            var i3 = r3.hls, n2 = e4.payload, a2 = t3.decryptdata;
            if (n2 && n2.byteLength > 0 && a2 && a2.key && a2.iv && "AES-128" === a2.method) {
              var s2 = self.performance.now();
              return r3.decrypter.decrypt(new Uint8Array(n2), a2.key.buffer, a2.iv.buffer).catch(function(e5) {
                throw i3.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.FRAG_DECRYPT_ERROR, fatal: false, error: e5, reason: e5.message, frag: t3 }), e5;
              }).then(function(r4) {
                var n3 = self.performance.now();
                return i3.trigger(S.FRAG_DECRYPTED, { frag: t3, payload: r4, stats: { tstart: s2, tdecrypt: n3 } }), e4.payload = r4, e4;
              });
            }
            return e4;
          }).then(function(i3) {
            var n2 = r3.fragCurrent, a2 = r3.hls;
            if (!r3.levels)
              throw new Error("init load aborted, missing levels");
            var s2 = t3.stats;
            r3.state = Kr, e3.fragmentError = 0, t3.data = new Uint8Array(i3.payload), s2.parsing.start = s2.buffering.start = self.performance.now(), s2.parsing.end = s2.buffering.end = self.performance.now(), i3.frag === n2 && a2.trigger(S.FRAG_BUFFERED, { stats: s2, frag: n2, part: null, id: t3.type }), r3.tick();
          }).catch(function(e4) {
            r3.state !== Gr && r3.state !== zr && (r3.warn(e4), r3.resetFragmentLoading(t3));
          });
        }, r2.fragContextChanged = function(t3) {
          var e3 = this.fragCurrent;
          return !t3 || !e3 || t3.level !== e3.level || t3.sn !== e3.sn || t3.urlId !== e3.urlId;
        }, r2.fragBufferedComplete = function(t3, e3) {
          var r3, i3, n2, a2, s2 = this.mediaBuffer ? this.mediaBuffer : this.media;
          this.log("Buffered " + t3.type + " sn: " + t3.sn + (e3 ? " part: " + e3.index : "") + " of " + (this.playlistType === ge ? "level" : "track") + " " + t3.level + " (frag:[" + (null != (r3 = t3.startPTS) ? r3 : NaN).toFixed(3) + "-" + (null != (i3 = t3.endPTS) ? i3 : NaN).toFixed(3) + "] > buffer:" + (s2 ? Br(Ir.getBuffered(s2)) : "(detached)") + ")"), this.state = Kr, s2 && (!this.loadedmetadata && t3.type == ge && s2.buffered.length && (null == (n2 = this.fragCurrent) ? void 0 : n2.sn) === (null == (a2 = this.fragPrevious) ? void 0 : a2.sn) && (this.loadedmetadata = true, this.seekToStartPos()), this.tick());
        }, r2.seekToStartPos = function() {
        }, r2._handleFragmentLoadComplete = function(t3) {
          var e3 = this.transmuxer;
          if (e3) {
            var r3 = t3.frag, i3 = t3.part, n2 = t3.partsLoaded, a2 = !n2 || 0 === n2.length || n2.some(function(t4) {
              return !t4;
            }), s2 = new wr(r3.level, r3.sn, r3.stats.chunkCount + 1, 0, i3 ? i3.index : -1, !a2);
            e3.flush(s2);
          }
        }, r2._handleFragmentLoadProgress = function(t3) {
        }, r2._doFragLoad = function(t3, e3, r3, i3) {
          var n2, a2 = this;
          void 0 === r3 && (r3 = null);
          var s2 = null == e3 ? void 0 : e3.details;
          if (!this.levels || !s2)
            throw new Error("frag load aborted, missing level" + (s2 ? "" : " detail") + "s");
          var o2 = null;
          if (!t3.encrypted || null != (n2 = t3.decryptdata) && n2.key ? !t3.encrypted && s2.encryptedFragments.length && this.keyLoader.loadClear(t3, s2.encryptedFragments) : (this.log("Loading key for " + t3.sn + " of [" + s2.startSN + "-" + s2.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t3.level), this.state = Hr, this.fragCurrent = t3, o2 = this.keyLoader.load(t3).then(function(t4) {
            if (!a2.fragContextChanged(t4.frag))
              return a2.hls.trigger(S.KEY_LOADED, t4), a2.state === Hr && (a2.state = Kr), t4;
          }), this.hls.trigger(S.KEY_LOADING, { frag: t3 }), null === this.fragCurrent && (o2 = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))), r3 = Math.max(t3.start, r3 || 0), this.config.lowLatencyMode && "initSegment" !== t3.sn) {
            var l2 = s2.partList;
            if (l2 && i3) {
              r3 > t3.end && s2.fragmentHint && (t3 = s2.fragmentHint);
              var u2 = this.getNextPart(l2, t3, r3);
              if (u2 > -1) {
                var h2, d2 = l2[u2];
                return this.log("Loading part sn: " + t3.sn + " p: " + d2.index + " cc: " + t3.cc + " of playlist [" + s2.startSN + "-" + s2.endSN + "] parts [0-" + u2 + "-" + (l2.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t3.level + ", target: " + parseFloat(r3.toFixed(3))), this.nextLoadPosition = d2.start + d2.duration, this.state = Vr, h2 = o2 ? o2.then(function(r4) {
                  return !r4 || a2.fragContextChanged(r4.frag) ? null : a2.doFragPartsLoad(t3, d2, e3, i3);
                }).catch(function(t4) {
                  return a2.handleFragLoadError(t4);
                }) : this.doFragPartsLoad(t3, d2, e3, i3).catch(function(t4) {
                  return a2.handleFragLoadError(t4);
                }), this.hls.trigger(S.FRAG_LOADING, { frag: t3, part: d2, targetBufferTime: r3 }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : h2;
              }
              if (!t3.url || this.loadedEndOfParts(l2, r3))
                return Promise.resolve(null);
            }
          }
          this.log("Loading fragment " + t3.sn + " cc: " + t3.cc + " " + (s2 ? "of [" + s2.startSN + "-" + s2.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t3.level + ", target: " + parseFloat(r3.toFixed(3))), E(t3.sn) && !this.bitrateTest && (this.nextLoadPosition = t3.start + t3.duration), this.state = Vr;
          var c2, f2 = this.config.progressive;
          return c2 = f2 && o2 ? o2.then(function(e4) {
            return !e4 || a2.fragContextChanged(null == e4 ? void 0 : e4.frag) ? null : a2.fragmentLoader.load(t3, i3);
          }).catch(function(t4) {
            return a2.handleFragLoadError(t4);
          }) : Promise.all([this.fragmentLoader.load(t3, f2 ? i3 : void 0), o2]).then(function(t4) {
            var e4 = t4[0];
            return !f2 && e4 && i3 && i3(e4), e4;
          }).catch(function(t4) {
            return a2.handleFragLoadError(t4);
          }), this.hls.trigger(S.FRAG_LOADING, { frag: t3, targetBufferTime: r3 }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : c2;
        }, r2.doFragPartsLoad = function(t3, e3, r3, i3) {
          var n2 = this;
          return new Promise(function(a2, s2) {
            var o2, l2 = [], u2 = null == (o2 = r3.details) ? void 0 : o2.partList;
            !function e4(o3) {
              n2.fragmentLoader.loadPart(t3, o3, i3).then(function(i4) {
                l2[o3.index] = i4;
                var s3 = i4.part;
                n2.hls.trigger(S.FRAG_LOADED, i4);
                var h2 = Ve(r3, t3.sn, o3.index + 1) || Ye(u2, t3.sn, o3.index + 1);
                if (!h2)
                  return a2({ frag: t3, part: s3, partsLoaded: l2 });
                e4(h2);
              }).catch(s2);
            }(e3);
          });
        }, r2.handleFragLoadError = function(t3) {
          if ("data" in t3) {
            var e3 = t3.data;
            t3.data && e3.details === R.INTERNAL_ABORTED ? this.handleFragLoadAborted(e3.frag, e3.part) : this.hls.trigger(S.ERROR, e3);
          } else
            this.hls.trigger(S.ERROR, { type: L.OTHER_ERROR, details: R.INTERNAL_EXCEPTION, err: t3, error: t3, fatal: true });
          return null;
        }, r2._handleTransmuxerFlush = function(t3) {
          var e3 = this.getCurrentContext(t3);
          if (e3 && this.state === jr) {
            var r3 = e3.frag, i3 = e3.part, n2 = e3.level, a2 = self.performance.now();
            r3.stats.parsing.end = a2, i3 && (i3.stats.parsing.end = a2), this.updateLevelTiming(r3, i3, n2, t3.partial);
          } else
            this.fragCurrent || this.state === Gr || this.state === zr || (this.state = Kr);
        }, r2.getCurrentContext = function(t3) {
          var e3 = this.levels, r3 = this.fragCurrent, i3 = t3.level, n2 = t3.sn, a2 = t3.part;
          if (null == e3 || !e3[i3])
            return this.warn("Levels object was unset while buffering fragment " + n2 + " of level " + i3 + ". The current chunk will not be buffered."), null;
          var s2 = e3[i3], o2 = a2 > -1 ? Ve(s2, n2, a2) : null, l2 = o2 ? o2.fragment : function(t4, e4, r4) {
            if (null == t4 || !t4.details)
              return null;
            var i4 = t4.details, n3 = i4.fragments[e4 - i4.startSN];
            return n3 || ((n3 = i4.fragmentHint) && n3.sn === e4 ? n3 : e4 < i4.startSN && r4 && r4.sn === e4 ? r4 : null);
          }(s2, n2, r3);
          return l2 ? (r3 && r3 !== l2 && (l2.stats = r3.stats), { frag: l2, part: o2, level: s2 }) : null;
        }, r2.bufferFragmentData = function(t3, e3, r3, i3, n2) {
          var a2;
          if (t3 && this.state === jr) {
            var s2 = t3.data1, o2 = t3.data2, l2 = s2;
            if (s2 && o2 && (l2 = xt(s2, o2)), null != (a2 = l2) && a2.length) {
              var u2 = { type: t3.type, frag: e3, part: r3, chunkMeta: i3, parent: e3.type, data: l2 };
              if (this.hls.trigger(S.BUFFER_APPENDING, u2), t3.dropped && t3.independent && !r3) {
                if (n2)
                  return;
                this.flushBufferGap(e3);
              }
            }
          }
        }, r2.flushBufferGap = function(t3) {
          var e3 = this.media;
          if (e3)
            if (Ir.isBuffered(e3, e3.currentTime)) {
              var r3 = e3.currentTime, i3 = Ir.bufferInfo(e3, r3, 0), n2 = t3.duration, a2 = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * n2), s2 = Math.max(Math.min(t3.start - a2, i3.end - a2), r3 + a2);
              t3.start - s2 > a2 && this.flushMainBuffer(s2, t3.start);
            } else
              this.flushMainBuffer(0, t3.start);
        }, r2.getFwdBufferInfo = function(t3, e3) {
          var r3 = this.getLoadPosition();
          return E(r3) ? this.getFwdBufferInfoAtPos(t3, r3, e3) : null;
        }, r2.getFwdBufferInfoAtPos = function(t3, e3, r3) {
          var i3 = this.config.maxBufferHole, n2 = Ir.bufferInfo(t3, e3, i3);
          if (0 === n2.len && void 0 !== n2.nextStart) {
            var a2 = this.fragmentTracker.getBufferedFrag(e3, r3);
            if (a2 && n2.nextStart < a2.end)
              return Ir.bufferInfo(t3, e3, Math.max(n2.nextStart, i3));
          }
          return n2;
        }, r2.getMaxBufferLength = function(t3) {
          var e3, r3 = this.config;
          return e3 = t3 ? Math.max(8 * r3.maxBufferSize / t3, r3.maxBufferLength) : r3.maxBufferLength, Math.min(e3, r3.maxMaxBufferLength);
        }, r2.reduceMaxBufferLength = function(t3) {
          var e3 = this.config, r3 = t3 || e3.maxBufferLength;
          return e3.maxMaxBufferLength >= r3 && (e3.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + e3.maxMaxBufferLength + "s"), true);
        }, r2.getAppendedFrag = function(t3, e3) {
          var r3 = this.fragmentTracker.getAppendedFrag(t3, ge);
          return r3 && "fragment" in r3 ? r3.fragment : r3;
        }, r2.getNextFragment = function(t3, e3) {
          var r3 = e3.fragments, i3 = r3.length;
          if (!i3)
            return null;
          var n2, a2 = this.config, s2 = r3[0].start;
          if (e3.live) {
            var o2 = a2.initialLiveManifestSize;
            if (i3 < o2)
              return this.warn("Not enough fragments to start playback (have: " + i3 + ", need: " + o2 + ")"), null;
            e3.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (n2 = this.getInitialLiveFragment(e3, r3), this.startPosition = n2 ? this.hls.liveSyncPosition || n2.start : t3);
          } else
            t3 <= s2 && (n2 = r3[0]);
          if (!n2) {
            var l2 = a2.lowLatencyMode ? e3.partEnd : e3.fragmentEnd;
            n2 = this.getFragmentAtPosition(t3, l2, e3);
          }
          return this.mapToInitFragWhenRequired(n2);
        }, r2.isLoopLoading = function(t3, e3) {
          var r3 = this.fragmentTracker.getState(t3);
          return (r3 === mr || r3 === vr && !!t3.gap) && this.nextLoadPosition > e3;
        }, r2.getNextFragmentLoopLoading = function(t3, e3, r3, i3, n2) {
          var a2 = t3.gap, s2 = this.getNextFragment(this.nextLoadPosition, e3);
          if (null === s2)
            return s2;
          if (t3 = s2, a2 && t3 && !t3.gap && r3.nextStart) {
            var o2 = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, r3.nextStart, i3);
            if (null !== o2 && r3.len + o2.len >= n2)
              return this.log('buffer full after gaps in "' + i3 + '" playlist starting at sn: ' + t3.sn), null;
          }
          return t3;
        }, r2.mapToInitFragWhenRequired = function(t3) {
          return null == t3 || !t3.initSegment || null != t3 && t3.initSegment.data || this.bitrateTest ? t3 : t3.initSegment;
        }, r2.getNextPart = function(t3, e3, r3) {
          for (var i3 = -1, n2 = false, a2 = true, s2 = 0, o2 = t3.length; s2 < o2; s2++) {
            var l2 = t3[s2];
            if (a2 = a2 && !l2.independent, i3 > -1 && r3 < l2.start)
              break;
            var u2 = l2.loaded;
            u2 ? i3 = -1 : (n2 || l2.independent || a2) && l2.fragment === e3 && (i3 = s2), n2 = u2;
          }
          return i3;
        }, r2.loadedEndOfParts = function(t3, e3) {
          var r3 = t3[t3.length - 1];
          return r3 && e3 > r3.start && r3.loaded;
        }, r2.getInitialLiveFragment = function(t3, e3) {
          var r3 = this.fragPrevious, i3 = null;
          if (r3) {
            if (t3.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + r3.programDateTime), i3 = function(t4, e4, r4) {
              if (null === e4 || !Array.isArray(t4) || !t4.length || !E(e4))
                return null;
              if (e4 < (t4[0].programDateTime || 0))
                return null;
              if (e4 >= (t4[t4.length - 1].endProgramDateTime || 0))
                return null;
              r4 = r4 || 0;
              for (var i4 = 0; i4 < t4.length; ++i4) {
                var n3 = t4[i4];
                if (Ze(e4, r4, n3))
                  return n3;
              }
              return null;
            }(e3, r3.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i3) {
              var n2 = r3.sn + 1;
              if (n2 >= t3.startSN && n2 <= t3.endSN) {
                var a2 = e3[n2 - t3.startSN];
                r3.cc === a2.cc && (i3 = a2, this.log("Live playlist, switching playlist, load frag with next SN: " + i3.sn));
              }
              i3 || (i3 = function(t4, e4) {
                return Qe(t4, function(t5) {
                  return t5.cc < e4 ? 1 : t5.cc > e4 ? -1 : 0;
                });
              }(e3, r3.cc), i3 && this.log("Live playlist, switching playlist, load frag with same CC: " + i3.sn));
            }
          } else {
            var s2 = this.hls.liveSyncPosition;
            null !== s2 && (i3 = this.getFragmentAtPosition(s2, this.bitrateTest ? t3.fragmentEnd : t3.edge, t3));
          }
          return i3;
        }, r2.getFragmentAtPosition = function(t3, e3, r3) {
          var i3, n2 = this.config, a2 = this.fragPrevious, s2 = r3.fragments, o2 = r3.endSN, l2 = r3.fragmentHint, u2 = n2.maxFragLookUpTolerance, h2 = r3.partList, d2 = !!(n2.lowLatencyMode && null != h2 && h2.length && l2);
          if (d2 && l2 && !this.bitrateTest && (s2 = s2.concat(l2), o2 = l2.sn), i3 = t3 < e3 ? $e(a2, s2, t3, t3 > e3 - u2 ? 0 : u2) : s2[s2.length - 1]) {
            var c2 = i3.sn - r3.startSN, f2 = this.fragmentTracker.getState(i3);
            if ((f2 === mr || f2 === vr && i3.gap) && (a2 = i3), a2 && i3.sn === a2.sn && (!d2 || h2[0].fragment.sn > i3.sn) && a2 && i3.level === a2.level) {
              var g2 = s2[c2 + 1];
              i3 = i3.sn < o2 && this.fragmentTracker.getState(g2) !== mr ? g2 : null;
            }
          }
          return i3;
        }, r2.synchronizeToLiveEdge = function(t3) {
          var e3 = this.config, r3 = this.media;
          if (r3) {
            var i3 = this.hls.liveSyncPosition, n2 = r3.currentTime, a2 = t3.fragments[0].start, s2 = t3.edge, o2 = n2 >= a2 - e3.maxFragLookUpTolerance && n2 <= s2;
            if (null !== i3 && r3.duration > i3 && (n2 < i3 || !o2)) {
              var l2 = void 0 !== e3.liveMaxLatencyDuration ? e3.liveMaxLatencyDuration : e3.liveMaxLatencyDurationCount * t3.targetduration;
              (!o2 && r3.readyState < 4 || n2 < s2 - l2) && (this.loadedmetadata || (this.nextLoadPosition = i3), r3.readyState && (this.warn("Playback: " + n2.toFixed(3) + " is located too far from the end of live sliding playlist: " + s2 + ", reset currentTime to : " + i3.toFixed(3)), r3.currentTime = i3));
            }
          }
        }, r2.alignPlaylists = function(t3, e3) {
          var r3 = this.levels, i3 = this.levelLastLoaded, n2 = this.fragPrevious, a2 = null !== i3 ? r3[i3] : null, s2 = t3.fragments.length;
          if (!s2)
            return this.warn("No fragments in live playlist"), 0;
          var o2 = t3.fragments[0].start, l2 = !e3, u2 = t3.alignedSliding && E(o2);
          if (l2 || !u2 && !o2) {
            xr(n2, a2, t3);
            var h2 = t3.fragments[0].start;
            return this.log("Live playlist sliding: " + h2.toFixed(2) + " start-sn: " + (e3 ? e3.startSN : "na") + "->" + t3.startSN + " prev-sn: " + (n2 ? n2.sn : "na") + " fragments: " + s2), h2;
          }
          return o2;
        }, r2.waitForCdnTuneIn = function(t3) {
          return t3.live && t3.canBlockReload && t3.partTarget && t3.tuneInGoal > Math.max(t3.partHoldBack, 3 * t3.partTarget);
        }, r2.setStartPosition = function(t3, e3) {
          var r3 = this.startPosition;
          if (r3 < e3 && (r3 = -1), -1 === r3 || -1 === this.lastCurrentTime) {
            var i3 = null !== this.startTimeOffset, n2 = i3 ? this.startTimeOffset : t3.startTimeOffset;
            null !== n2 && E(n2) ? (r3 = e3 + n2, n2 < 0 && (r3 += t3.totalduration), r3 = Math.min(Math.max(e3, r3), e3 + t3.totalduration), this.log("Start time offset " + n2 + " found in " + (i3 ? "multivariant" : "media") + " playlist, adjust startPosition to " + r3), this.startPosition = r3) : t3.live ? r3 = this.hls.liveSyncPosition || e3 : this.startPosition = r3 = 0, this.lastCurrentTime = r3;
          }
          this.nextLoadPosition = r3;
        }, r2.getLoadPosition = function() {
          var t3 = this.media, e3 = 0;
          return this.loadedmetadata && t3 ? e3 = t3.currentTime : this.nextLoadPosition && (e3 = this.nextLoadPosition), e3;
        }, r2.handleFragLoadAborted = function(t3, e3) {
          this.transmuxer && "initSegment" !== t3.sn && t3.stats.aborted && (this.warn("Fragment " + t3.sn + (e3 ? " part " + e3.index : "") + " of level " + t3.level + " was aborted"), this.resetFragmentLoading(t3));
        }, r2.resetFragmentLoading = function(t3) {
          this.fragCurrent && (this.fragContextChanged(t3) || this.state === Yr) || (this.state = Kr);
        }, r2.onFragmentOrKeyLoadError = function(t3, e3) {
          if (e3.chunkMeta && !e3.frag) {
            var r3 = this.getCurrentContext(e3.chunkMeta);
            r3 && (e3.frag = r3.frag);
          }
          var i3 = e3.frag;
          if (i3 && i3.type === t3 && this.levels)
            if (this.fragContextChanged(i3)) {
              var n2;
              this.warn("Frag load error must match current frag to retry " + i3.url + " > " + (null == (n2 = this.fragCurrent) ? void 0 : n2.url));
            } else {
              var a2 = e3.details === R.FRAG_GAP;
              a2 && this.fragmentTracker.fragBuffered(i3, true);
              var s2 = e3.errorAction, o2 = s2 || {}, l2 = o2.action, u2 = o2.retryCount, h2 = void 0 === u2 ? 0 : u2, d2 = o2.retryConfig;
              if (s2 && l2 === nr && d2) {
                var c2;
                this.resetStartWhenNotLoaded(null != (c2 = this.levelLastLoaded) ? c2 : i3.level);
                var f2 = qe(d2, h2);
                this.warn("Fragment " + i3.sn + " of " + t3 + " " + i3.level + " errored with " + e3.details + ", retrying loading " + (h2 + 1) + "/" + d2.maxNumRetry + " in " + f2 + "ms"), s2.resolved = true, this.retryDate = self.performance.now() + f2, this.state = Yr;
              } else
                d2 && s2 ? (this.resetFragmentErrors(t3), h2 < d2.maxNumRetry ? a2 || (s2.resolved = true) : w.warn(e3.details + " reached or exceeded max retry (" + h2 + ")")) : (null == s2 ? void 0 : s2.action) === ir ? this.state = $r : this.state = zr;
              this.tickImmediate();
            }
        }, r2.reduceLengthAndFlushBuffer = function(t3) {
          if (this.state === jr || this.state === qr) {
            var e3 = t3.parent, r3 = this.getFwdBufferInfo(this.mediaBuffer, e3), i3 = r3 && r3.len > 0.5;
            i3 && this.reduceMaxBufferLength(r3.len);
            var n2 = !i3;
            return n2 && this.warn("Buffer full error while media.currentTime is not buffered, flush " + e3 + " buffer"), t3.frag && (this.fragmentTracker.removeFragment(t3.frag), this.nextLoadPosition = t3.frag.start), this.resetLoadingState(), n2;
          }
          return false;
        }, r2.resetFragmentErrors = function(t3) {
          t3 === ve && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = false), this.state !== Gr && (this.state = Kr);
        }, r2.afterBufferFlushed = function(t3, e3, r3) {
          if (t3) {
            var i3 = Ir.getBuffered(t3);
            this.fragmentTracker.detectEvictedFragments(e3, i3, r3), this.state === Xr && this.resetLoadingState();
          }
        }, r2.resetLoadingState = function() {
          this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = Kr;
        }, r2.resetStartWhenNotLoaded = function(t3) {
          if (!this.loadedmetadata) {
            this.startFragRequested = false;
            var e3 = this.levels ? this.levels[t3].details : null;
            null != e3 && e3.live ? (this.startPosition = -1, this.setStartPosition(e3, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
          }
        }, r2.resetWhenMissingContext = function(t3) {
          var e3;
          this.warn("The loading context changed while buffering fragment " + t3.sn + " of level " + t3.level + ". This chunk will not be buffered."), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(null != (e3 = this.levelLastLoaded) ? e3 : t3.level), this.resetLoadingState();
        }, r2.removeUnbufferedFrags = function(t3) {
          void 0 === t3 && (t3 = 0), this.fragmentTracker.removeFragmentsInRange(t3, 1 / 0, this.playlistType, false, true);
        }, r2.updateLevelTiming = function(t3, e3, r3, i3) {
          var n2, a2 = this, s2 = r3.details;
          if (s2) {
            if (Object.keys(t3.elementaryStreams).reduce(function(e4, n3) {
              var o3 = t3.elementaryStreams[n3];
              if (o3) {
                var l2 = o3.endPTS - o3.startPTS;
                if (l2 <= 0)
                  return a2.warn("Could not parse fragment " + t3.sn + " " + n3 + " duration reliably (" + l2 + ")"), e4 || false;
                var u2 = i3 ? 0 : Be(s2, t3, o3.startPTS, o3.endPTS, o3.startDTS, o3.endDTS);
                return a2.hls.trigger(S.LEVEL_PTS_UPDATED, { details: s2, level: r3, drift: u2, type: n3, frag: t3, start: o3.startPTS, end: o3.endPTS }), true;
              }
              return e4;
            }, false))
              r3.fragmentError = 0;
            else if (null === (null == (n2 = this.transmuxer) ? void 0 : n2.error)) {
              var o2 = new Error("Found no media in fragment " + t3.sn + " of level " + t3.level + " resetting transmuxer to fallback to playlist timing");
              if (0 === r3.fragmentError && (r3.fragmentError++, t3.gap = true, this.fragmentTracker.removeFragment(t3), this.fragmentTracker.fragBuffered(t3, true)), this.warn(o2.message), this.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.FRAG_PARSING_ERROR, fatal: false, error: o2, frag: t3, reason: "Found no media in msn " + t3.sn + ' of level "' + r3.url + '"' }), !this.hls)
                return;
              this.resetTransmuxer();
            }
            this.state = qr, this.hls.trigger(S.FRAG_PARSED, { frag: t3, part: e3 });
          } else
            this.warn("level.details undefined");
        }, r2.resetTransmuxer = function() {
          this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
        }, r2.recoverWorkerError = function(t3) {
          var e3, r3, i3;
          "demuxerWorker" === t3.event && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(null != (e3 = null != (r3 = this.levelLastLoaded) ? r3 : null == (i3 = this.fragCurrent) ? void 0 : i3.level) ? e3 : 0), this.resetLoadingState());
        }, a(e2, [{ key: "state", get: function() {
          return this._state;
        }, set: function(t3) {
          var e3 = this._state;
          e3 !== t3 && (this._state = t3, this.log(e3 + "->" + t3));
        } }]), e2;
      }(br);
      function Zr() {
        return self.SourceBuffer || self.WebKitSourceBuffer;
      }
      function ti(t2, e2) {
        return void 0 === t2 && (t2 = ""), void 0 === e2 && (e2 = 9e4), { type: t2, id: -1, pid: -1, inputTimeScale: e2, sequenceNumber: -1, samples: [], dropped: 0 };
      }
      var ei = function() {
        function t2() {
          this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
        }
        var e2 = t2.prototype;
        return e2.resetInitSegment = function(t3, e3, r2, i3) {
          this._id3Track = { type: "id3", id: 3, pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0 };
        }, e2.resetTimeStamp = function(t3) {
          this.initPTS = t3, this.resetContiguity();
        }, e2.resetContiguity = function() {
          this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
        }, e2.canParse = function(t3, e3) {
          return false;
        }, e2.appendFrame = function(t3, e3, r2) {
        }, e2.demux = function(t3, e3) {
          this.cachedData && (t3 = xt(this.cachedData, t3), this.cachedData = null);
          var r2, i3 = st(t3, 0), n2 = i3 ? i3.length : 0, a2 = this._audioTrack, s2 = this._id3Track, o2 = i3 ? function(t4) {
            for (var e4 = dt(t4), r3 = 0; r3 < e4.length; r3++) {
              var i4 = e4[r3];
              if (ut(i4))
                return mt(i4);
            }
          }(i3) : void 0, l2 = t3.length;
          for ((null === this.basePTS || 0 === this.frameIndex && E(o2)) && (this.basePTS = ri(o2, e3, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), i3 && i3.length > 0 && s2.samples.push({ pts: this.lastPTS, dts: this.lastPTS, data: i3, type: Ae, duration: Number.POSITIVE_INFINITY }); n2 < l2; ) {
            if (this.canParse(t3, n2)) {
              var u2 = this.appendFrame(a2, t3, n2);
              u2 ? (this.frameIndex++, this.lastPTS = u2.sample.pts, r2 = n2 += u2.length) : n2 = l2;
            } else
              lt(t3, n2) ? (i3 = st(t3, n2), s2.samples.push({ pts: this.lastPTS, dts: this.lastPTS, data: i3, type: Ae, duration: Number.POSITIVE_INFINITY }), r2 = n2 += i3.length) : n2++;
            if (n2 === l2 && r2 !== l2) {
              var h2 = rt(t3, r2);
              this.cachedData ? this.cachedData = xt(this.cachedData, h2) : this.cachedData = h2;
            }
          }
          return { audioTrack: a2, videoTrack: ti(), id3Track: s2, textTrack: ti() };
        }, e2.demuxSampleAes = function(t3, e3, r2) {
          return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"));
        }, e2.flush = function(t3) {
          var e3 = this.cachedData;
          return e3 && (this.cachedData = null, this.demux(e3, 0)), { audioTrack: this._audioTrack, videoTrack: ti(), id3Track: this._id3Track, textTrack: ti() };
        }, e2.destroy = function() {
        }, t2;
      }(), ri = function(t2, e2, r2) {
        return E(t2) ? 90 * t2 : 9e4 * e2 + (r2 ? 9e4 * r2.baseTime / r2.timescale : 0);
      };
      function ii(t2, e2) {
        return 255 === t2[e2] && 240 == (246 & t2[e2 + 1]);
      }
      function ni(t2, e2) {
        return 1 & t2[e2 + 1] ? 7 : 9;
      }
      function ai(t2, e2) {
        return (3 & t2[e2 + 3]) << 11 | t2[e2 + 4] << 3 | (224 & t2[e2 + 5]) >>> 5;
      }
      function si(t2, e2) {
        return e2 + 1 < t2.length && ii(t2, e2);
      }
      function oi(t2, e2) {
        if (si(t2, e2)) {
          var r2 = ni(t2, e2);
          if (e2 + r2 >= t2.length)
            return false;
          var i3 = ai(t2, e2);
          if (i3 <= r2)
            return false;
          var n2 = e2 + i3;
          return n2 === t2.length || si(t2, n2);
        }
        return false;
      }
      function li(t2, e2, r2, i3, n2) {
        if (!t2.samplerate) {
          var a2 = function(t3, e3, r3, i4) {
            var n3, a3, s2, o2, l2 = navigator.userAgent.toLowerCase(), u2 = i4, h2 = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
            n3 = 1 + ((192 & e3[r3 + 2]) >>> 6);
            var d2 = (60 & e3[r3 + 2]) >>> 2;
            if (!(d2 > h2.length - 1))
              return s2 = (1 & e3[r3 + 2]) << 2, s2 |= (192 & e3[r3 + 3]) >>> 6, w.log("manifest codec:" + i4 + ", ADTS type:" + n3 + ", samplingIndex:" + d2), /firefox/i.test(l2) ? d2 >= 6 ? (n3 = 5, o2 = new Array(4), a3 = d2 - 3) : (n3 = 2, o2 = new Array(2), a3 = d2) : -1 !== l2.indexOf("android") ? (n3 = 2, o2 = new Array(2), a3 = d2) : (n3 = 5, o2 = new Array(4), i4 && (-1 !== i4.indexOf("mp4a.40.29") || -1 !== i4.indexOf("mp4a.40.5")) || !i4 && d2 >= 6 ? a3 = d2 - 3 : ((i4 && -1 !== i4.indexOf("mp4a.40.2") && (d2 >= 6 && 1 === s2 || /vivaldi/i.test(l2)) || !i4 && 1 === s2) && (n3 = 2, o2 = new Array(2)), a3 = d2)), o2[0] = n3 << 3, o2[0] |= (14 & d2) >> 1, o2[1] |= (1 & d2) << 7, o2[1] |= s2 << 3, 5 === n3 && (o2[1] |= (14 & a3) >> 1, o2[2] = (1 & a3) << 7, o2[2] |= 8, o2[3] = 0), { config: o2, samplerate: h2[d2], channelCount: s2, codec: "mp4a.40." + n3, manifestCodec: u2 };
            t3.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.FRAG_PARSING_ERROR, fatal: true, reason: "invalid ADTS sampling index:" + d2 });
          }(e2, r2, i3, n2);
          if (!a2)
            return;
          t2.config = a2.config, t2.samplerate = a2.samplerate, t2.channelCount = a2.channelCount, t2.codec = a2.codec, t2.manifestCodec = a2.manifestCodec, w.log("parsed codec:" + t2.codec + ", rate:" + a2.samplerate + ", channels:" + a2.channelCount);
        }
      }
      function ui(t2) {
        return 9216e4 / t2;
      }
      function hi(t2, e2, r2, i3, n2) {
        var a2, s2 = i3 + n2 * ui(t2.samplerate), o2 = function(t3, e3) {
          var r3 = ni(t3, e3);
          if (e3 + r3 <= t3.length) {
            var i4 = ai(t3, e3) - r3;
            if (i4 > 0)
              return { headerLength: r3, frameLength: i4 };
          }
        }(e2, r2);
        if (o2) {
          var l2 = o2.frameLength, u2 = o2.headerLength, h2 = u2 + l2, d2 = Math.max(0, r2 + h2 - e2.length);
          d2 ? (a2 = new Uint8Array(h2 - u2)).set(e2.subarray(r2 + u2, e2.length), 0) : a2 = e2.subarray(r2 + u2, r2 + h2);
          var c2 = { unit: a2, pts: s2 };
          return d2 || t2.samples.push(c2), { sample: c2, length: h2, missing: d2 };
        }
        var f2 = e2.length - r2;
        return (a2 = new Uint8Array(f2)).set(e2.subarray(r2, e2.length), 0), { sample: { unit: a2, pts: s2 }, length: f2, missing: -1 };
      }
      var di = function(t2) {
        function e2(e3, r3) {
          var i3;
          return (i3 = t2.call(this) || this).observer = void 0, i3.config = void 0, i3.observer = e3, i3.config = r3, i3;
        }
        l(e2, t2);
        var r2 = e2.prototype;
        return r2.resetInitSegment = function(e3, r3, i3, n2) {
          t2.prototype.resetInitSegment.call(this, e3, r3, i3, n2), this._audioTrack = { container: "audio/adts", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "aac", samples: [], manifestCodec: r3, duration: n2, inputTimeScale: 9e4, dropped: 0 };
        }, e2.probe = function(t3) {
          if (!t3)
            return false;
          for (var e3 = (st(t3, 0) || []).length, r3 = t3.length; e3 < r3; e3++)
            if (oi(t3, e3))
              return w.log("ADTS sync word found !"), true;
          return false;
        }, r2.canParse = function(t3, e3) {
          return function(t4, e4) {
            return function(t5, e5) {
              return e5 + 5 < t5.length;
            }(t4, e4) && ii(t4, e4) && ai(t4, e4) <= t4.length - e4;
          }(t3, e3);
        }, r2.appendFrame = function(t3, e3, r3) {
          li(t3, this.observer, e3, r3, t3.manifestCodec);
          var i3 = hi(t3, e3, r3, this.basePTS, this.frameIndex);
          if (i3 && 0 === i3.missing)
            return i3;
        }, e2;
      }(ei), ci = /\/emsg[-/]ID3/i, fi = function() {
        function t2(t3, e3) {
          this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = e3;
        }
        var e2 = t2.prototype;
        return e2.resetTimeStamp = function() {
        }, e2.resetInitSegment = function(t3, e3, r2, i3) {
          var n2 = this.videoTrack = ti("video", 1), a2 = this.audioTrack = ti("audio", 1), s2 = this.txtTrack = ti("text", 1);
          if (this.id3Track = ti("id3", 1), this.timeOffset = 0, null != t3 && t3.byteLength) {
            var o2 = Ct(t3);
            if (o2.video) {
              var l2 = o2.video, u2 = l2.id, h2 = l2.timescale, d2 = l2.codec;
              n2.id = u2, n2.timescale = s2.timescale = h2, n2.codec = d2;
            }
            if (o2.audio) {
              var c2 = o2.audio, f2 = c2.id, g2 = c2.timescale, v2 = c2.codec;
              a2.id = f2, a2.timescale = g2, a2.codec = v2;
            }
            s2.id = Lt.text, n2.sampleDuration = 0, n2.duration = a2.duration = i3;
          }
        }, e2.resetContiguity = function() {
          this.remainderData = null;
        }, t2.probe = function(t3) {
          return It(t3 = t3.length > 16384 ? t3.subarray(0, 16384) : t3, ["moof"]).length > 0;
        }, e2.demux = function(t3, e3) {
          this.timeOffset = e3;
          var r2 = t3, i3 = this.videoTrack, n2 = this.txtTrack;
          if (this.config.progressive) {
            this.remainderData && (r2 = xt(this.remainderData, t3));
            var a2 = function(t4) {
              var e4 = { valid: null, remainder: null }, r3 = It(t4, ["moof"]);
              if (!r3)
                return e4;
              if (r3.length < 2)
                return e4.remainder = t4, e4;
              var i4 = r3[r3.length - 1];
              return e4.valid = rt(t4, 0, i4.byteOffset - 8), e4.remainder = rt(t4, i4.byteOffset - 8), e4;
            }(r2);
            this.remainderData = a2.remainder, i3.samples = a2.valid || new Uint8Array();
          } else
            i3.samples = r2;
          var s2 = this.extractID3Track(i3, e3);
          return n2.samples = Ft(e3, i3), { videoTrack: i3, audioTrack: this.audioTrack, id3Track: s2, textTrack: this.txtTrack };
        }, e2.flush = function() {
          var t3 = this.timeOffset, e3 = this.videoTrack, r2 = this.txtTrack;
          e3.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
          var i3 = this.extractID3Track(e3, this.timeOffset);
          return r2.samples = Ft(t3, e3), { videoTrack: e3, audioTrack: ti(), id3Track: i3, textTrack: ti() };
        }, e2.extractID3Track = function(t3, e3) {
          var r2 = this.id3Track;
          if (t3.samples.length) {
            var i3 = It(t3.samples, ["emsg"]);
            i3 && i3.forEach(function(t4) {
              var i4 = function(t5) {
                var e4 = t5[0], r3 = "", i5 = "", n3 = 0, a3 = 0, s3 = 0, o2 = 0, l2 = 0, u2 = 0;
                if (0 === e4) {
                  for (; "\0" !== Rt(t5.subarray(u2, u2 + 1)); )
                    r3 += Rt(t5.subarray(u2, u2 + 1)), u2 += 1;
                  for (r3 += Rt(t5.subarray(u2, u2 + 1)), u2 += 1; "\0" !== Rt(t5.subarray(u2, u2 + 1)); )
                    i5 += Rt(t5.subarray(u2, u2 + 1)), u2 += 1;
                  i5 += Rt(t5.subarray(u2, u2 + 1)), u2 += 1, n3 = kt(t5, 12), a3 = kt(t5, 16), o2 = kt(t5, 20), l2 = kt(t5, 24), u2 = 28;
                } else if (1 === e4) {
                  n3 = kt(t5, u2 += 4);
                  var h2 = kt(t5, u2 += 4), d2 = kt(t5, u2 += 4);
                  for (u2 += 4, s3 = Math.pow(2, 32) * h2 + d2, Number.isSafeInteger(s3) || (s3 = Number.MAX_SAFE_INTEGER, w.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o2 = kt(t5, u2), l2 = kt(t5, u2 += 4), u2 += 4; "\0" !== Rt(t5.subarray(u2, u2 + 1)); )
                    r3 += Rt(t5.subarray(u2, u2 + 1)), u2 += 1;
                  for (r3 += Rt(t5.subarray(u2, u2 + 1)), u2 += 1; "\0" !== Rt(t5.subarray(u2, u2 + 1)); )
                    i5 += Rt(t5.subarray(u2, u2 + 1)), u2 += 1;
                  i5 += Rt(t5.subarray(u2, u2 + 1)), u2 += 1;
                }
                return { schemeIdUri: r3, value: i5, timeScale: n3, presentationTime: s3, presentationTimeDelta: a3, eventDuration: o2, id: l2, payload: t5.subarray(u2, t5.byteLength) };
              }(t4);
              if (ci.test(i4.schemeIdUri)) {
                var n2 = E(i4.presentationTime) ? i4.presentationTime / i4.timeScale : e3 + i4.presentationTimeDelta / i4.timeScale, a2 = 4294967295 === i4.eventDuration ? Number.POSITIVE_INFINITY : i4.eventDuration / i4.timeScale;
                a2 <= 1e-3 && (a2 = Number.POSITIVE_INFINITY);
                var s2 = i4.payload;
                r2.samples.push({ data: s2, len: s2.byteLength, dts: n2, pts: n2, type: be, duration: a2 });
              }
            });
          }
          return r2;
        }, e2.demuxSampleAes = function(t3, e3, r2) {
          return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
        }, e2.destroy = function() {
        }, t2;
      }(), gi = null, vi = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], mi = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], pi = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], yi = [0, 1, 1, 4];
      function Ti(t2, e2, r2, i3, n2) {
        if (!(r2 + 24 > e2.length)) {
          var a2 = Ei(e2, r2);
          if (a2 && r2 + a2.frameLength <= e2.length) {
            var s2 = i3 + n2 * (9e4 * a2.samplesPerFrame / a2.sampleRate), o2 = { unit: e2.subarray(r2, r2 + a2.frameLength), pts: s2, dts: s2 };
            return t2.config = [], t2.channelCount = a2.channelCount, t2.samplerate = a2.sampleRate, t2.samples.push(o2), { sample: o2, length: a2.frameLength, missing: 0 };
          }
        }
      }
      function Ei(t2, e2) {
        var r2 = t2[e2 + 1] >> 3 & 3, i3 = t2[e2 + 1] >> 1 & 3, n2 = t2[e2 + 2] >> 4 & 15, a2 = t2[e2 + 2] >> 2 & 3;
        if (1 !== r2 && 0 !== n2 && 15 !== n2 && 3 !== a2) {
          var s2 = t2[e2 + 2] >> 1 & 1, o2 = t2[e2 + 3] >> 6, l2 = 1e3 * vi[14 * (3 === r2 ? 3 - i3 : 3 === i3 ? 3 : 4) + n2 - 1], u2 = mi[3 * (3 === r2 ? 0 : 2 === r2 ? 1 : 2) + a2], h2 = 3 === o2 ? 1 : 2, d2 = pi[r2][i3], c2 = yi[i3], f2 = 8 * d2 * c2, g2 = Math.floor(d2 * l2 / u2 + s2) * c2;
          if (null === gi) {
            var v2 = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
            gi = v2 ? parseInt(v2[1]) : 0;
          }
          return !!gi && gi <= 87 && 2 === i3 && l2 >= 224e3 && 0 === o2 && (t2[e2 + 3] = 128 | t2[e2 + 3]), { sampleRate: u2, channelCount: h2, frameLength: g2, samplesPerFrame: f2 };
        }
      }
      function Si(t2, e2) {
        return 255 === t2[e2] && 224 == (224 & t2[e2 + 1]) && 0 != (6 & t2[e2 + 1]);
      }
      function Li(t2, e2) {
        return e2 + 1 < t2.length && Si(t2, e2);
      }
      function Ri(t2, e2) {
        if (e2 + 1 < t2.length && Si(t2, e2)) {
          var r2 = Ei(t2, e2), i3 = 4;
          null != r2 && r2.frameLength && (i3 = r2.frameLength);
          var n2 = e2 + i3;
          return n2 === t2.length || Li(t2, n2);
        }
        return false;
      }
      var Ai = function() {
        function t2(t3) {
          this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t3, this.bytesAvailable = t3.byteLength, this.word = 0, this.bitsAvailable = 0;
        }
        var e2 = t2.prototype;
        return e2.loadWord = function() {
          var t3 = this.data, e3 = this.bytesAvailable, r2 = t3.byteLength - e3, i3 = new Uint8Array(4), n2 = Math.min(4, e3);
          if (0 === n2)
            throw new Error("no bytes available");
          i3.set(t3.subarray(r2, r2 + n2)), this.word = new DataView(i3.buffer).getUint32(0), this.bitsAvailable = 8 * n2, this.bytesAvailable -= n2;
        }, e2.skipBits = function(t3) {
          var e3;
          t3 = Math.min(t3, 8 * this.bytesAvailable + this.bitsAvailable), this.bitsAvailable > t3 ? (this.word <<= t3, this.bitsAvailable -= t3) : (t3 -= this.bitsAvailable, t3 -= (e3 = t3 >> 3) << 3, this.bytesAvailable -= e3, this.loadWord(), this.word <<= t3, this.bitsAvailable -= t3);
        }, e2.readBits = function(t3) {
          var e3 = Math.min(this.bitsAvailable, t3), r2 = this.word >>> 32 - e3;
          if (t3 > 32 && w.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e3, this.bitsAvailable > 0)
            this.word <<= e3;
          else {
            if (!(this.bytesAvailable > 0))
              throw new Error("no bits available");
            this.loadWord();
          }
          return (e3 = t3 - e3) > 0 && this.bitsAvailable ? r2 << e3 | this.readBits(e3) : r2;
        }, e2.skipLZ = function() {
          var t3;
          for (t3 = 0; t3 < this.bitsAvailable; ++t3)
            if (0 != (this.word & 2147483648 >>> t3))
              return this.word <<= t3, this.bitsAvailable -= t3, t3;
          return this.loadWord(), t3 + this.skipLZ();
        }, e2.skipUEG = function() {
          this.skipBits(1 + this.skipLZ());
        }, e2.skipEG = function() {
          this.skipBits(1 + this.skipLZ());
        }, e2.readUEG = function() {
          var t3 = this.skipLZ();
          return this.readBits(t3 + 1) - 1;
        }, e2.readEG = function() {
          var t3 = this.readUEG();
          return 1 & t3 ? 1 + t3 >>> 1 : -1 * (t3 >>> 1);
        }, e2.readBoolean = function() {
          return 1 === this.readBits(1);
        }, e2.readUByte = function() {
          return this.readBits(8);
        }, e2.readUShort = function() {
          return this.readBits(16);
        }, e2.readUInt = function() {
          return this.readBits(32);
        }, e2.skipScalingList = function(t3) {
          for (var e3 = 8, r2 = 8, i3 = 0; i3 < t3; i3++)
            0 !== r2 && (r2 = (e3 + this.readEG() + 256) % 256), e3 = 0 === r2 ? e3 : r2;
        }, e2.readSPS = function() {
          var t3, e3, r2, i3 = 0, n2 = 0, a2 = 0, s2 = 0, o2 = this.readUByte.bind(this), l2 = this.readBits.bind(this), u2 = this.readUEG.bind(this), h2 = this.readBoolean.bind(this), d2 = this.skipBits.bind(this), c2 = this.skipEG.bind(this), f2 = this.skipUEG.bind(this), g2 = this.skipScalingList.bind(this);
          o2();
          var v2 = o2();
          if (l2(5), d2(3), o2(), f2(), 100 === v2 || 110 === v2 || 122 === v2 || 244 === v2 || 44 === v2 || 83 === v2 || 86 === v2 || 118 === v2 || 128 === v2) {
            var m2 = u2();
            if (3 === m2 && d2(1), f2(), f2(), d2(1), h2())
              for (e3 = 3 !== m2 ? 8 : 12, r2 = 0; r2 < e3; r2++)
                h2() && g2(r2 < 6 ? 16 : 64);
          }
          f2();
          var p2 = u2();
          if (0 === p2)
            u2();
          else if (1 === p2)
            for (d2(1), c2(), c2(), t3 = u2(), r2 = 0; r2 < t3; r2++)
              c2();
          f2(), d2(1);
          var y2 = u2(), T2 = u2(), E2 = l2(1);
          0 === E2 && d2(1), d2(1), h2() && (i3 = u2(), n2 = u2(), a2 = u2(), s2 = u2());
          var S2 = [1, 1];
          if (h2() && h2())
            switch (o2()) {
              case 1:
                S2 = [1, 1];
                break;
              case 2:
                S2 = [12, 11];
                break;
              case 3:
                S2 = [10, 11];
                break;
              case 4:
                S2 = [16, 11];
                break;
              case 5:
                S2 = [40, 33];
                break;
              case 6:
                S2 = [24, 11];
                break;
              case 7:
                S2 = [20, 11];
                break;
              case 8:
                S2 = [32, 11];
                break;
              case 9:
                S2 = [80, 33];
                break;
              case 10:
                S2 = [18, 11];
                break;
              case 11:
                S2 = [15, 11];
                break;
              case 12:
                S2 = [64, 33];
                break;
              case 13:
                S2 = [160, 99];
                break;
              case 14:
                S2 = [4, 3];
                break;
              case 15:
                S2 = [3, 2];
                break;
              case 16:
                S2 = [2, 1];
                break;
              case 255:
                S2 = [o2() << 8 | o2(), o2() << 8 | o2()];
            }
          return { width: Math.ceil(16 * (y2 + 1) - 2 * i3 - 2 * n2), height: (2 - E2) * (T2 + 1) * 16 - (E2 ? 2 : 4) * (a2 + s2), pixelRatio: S2 };
        }, e2.readSliceType = function() {
          return this.readUByte(), this.readUEG(), this.readUEG();
        }, t2;
      }(), ki = function() {
        function t2(t3, e3, r2) {
          this.keyData = void 0, this.decrypter = void 0, this.keyData = r2, this.decrypter = new Ur(e3, { removePKCS7Padding: false });
        }
        var e2 = t2.prototype;
        return e2.decryptBuffer = function(t3) {
          return this.decrypter.decrypt(t3, this.keyData.key.buffer, this.keyData.iv.buffer);
        }, e2.decryptAacSample = function(t3, e3, r2) {
          var i3 = this, n2 = t3[e3].unit;
          if (!(n2.length <= 16)) {
            var a2 = n2.subarray(16, n2.length - n2.length % 16), s2 = a2.buffer.slice(a2.byteOffset, a2.byteOffset + a2.length);
            this.decryptBuffer(s2).then(function(a3) {
              var s3 = new Uint8Array(a3);
              n2.set(s3, 16), i3.decrypter.isSync() || i3.decryptAacSamples(t3, e3 + 1, r2);
            });
          }
        }, e2.decryptAacSamples = function(t3, e3, r2) {
          for (; ; e3++) {
            if (e3 >= t3.length)
              return void r2();
            if (!(t3[e3].unit.length < 32 || (this.decryptAacSample(t3, e3, r2), this.decrypter.isSync())))
              return;
          }
        }, e2.getAvcEncryptedData = function(t3) {
          for (var e3 = 16 * Math.floor((t3.length - 48) / 160) + 16, r2 = new Int8Array(e3), i3 = 0, n2 = 32; n2 < t3.length - 16; n2 += 160, i3 += 16)
            r2.set(t3.subarray(n2, n2 + 16), i3);
          return r2;
        }, e2.getAvcDecryptedUnit = function(t3, e3) {
          for (var r2 = new Uint8Array(e3), i3 = 0, n2 = 32; n2 < t3.length - 16; n2 += 160, i3 += 16)
            t3.set(r2.subarray(i3, i3 + 16), n2);
          return t3;
        }, e2.decryptAvcSample = function(t3, e3, r2, i3, n2) {
          var a2 = this, s2 = Nt(n2.data), o2 = this.getAvcEncryptedData(s2);
          this.decryptBuffer(o2.buffer).then(function(o3) {
            n2.data = a2.getAvcDecryptedUnit(s2, o3), a2.decrypter.isSync() || a2.decryptAvcSamples(t3, e3, r2 + 1, i3);
          });
        }, e2.decryptAvcSamples = function(t3, e3, r2, i3) {
          if (t3 instanceof Uint8Array)
            throw new Error("Cannot decrypt samples of type Uint8Array");
          for (; ; e3++, r2 = 0) {
            if (e3 >= t3.length)
              return void i3();
            for (var n2 = t3[e3].units; !(r2 >= n2.length); r2++) {
              var a2 = n2[r2];
              if (!(a2.data.length <= 48 || 1 !== a2.type && 5 !== a2.type || (this.decryptAvcSample(t3, e3, r2, i3, a2), this.decrypter.isSync())))
                return;
            }
          }
        }, t2;
      }(), bi = 188, Di = function() {
        function t2(t3, e3, r2) {
          this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = false, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = t3, this.config = e3, this.typeSupported = r2;
        }
        t2.probe = function(e3) {
          var r2 = t2.syncOffset(e3);
          return r2 > 0 && w.warn("MPEG2-TS detected but first sync word found @ offset " + r2), -1 !== r2;
        }, t2.syncOffset = function(t3) {
          for (var e3 = t3.length, r2 = Math.min(940, t3.length - bi) + 1, i3 = 0; i3 < r2; ) {
            for (var n2 = false, a2 = -1, s2 = 0, o2 = i3; o2 < e3; o2 += bi) {
              if (71 !== t3[o2]) {
                if (s2)
                  return -1;
                break;
              }
              if (s2++, -1 === a2 && 0 !== (a2 = o2) && (r2 = Math.min(a2 + 18612, t3.length - bi) + 1), n2 || (n2 = 0 === wi(t3, o2)), n2 && s2 > 1 && (0 === a2 && s2 > 2 || o2 + bi > r2))
                return a2;
            }
            i3++;
          }
          return -1;
        }, t2.createTrack = function(t3, e3) {
          return { container: "video" === t3 || "audio" === t3 ? "video/mp2t" : void 0, type: t3, id: Lt[t3], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0, duration: "audio" === t3 ? e3 : void 0 };
        };
        var e2 = t2.prototype;
        return e2.resetInitSegment = function(e3, r2, i3, n2) {
          this.pmtParsed = false, this._pmtId = -1, this._avcTrack = t2.createTrack("video"), this._audioTrack = t2.createTrack("audio", n2), this._id3Track = t2.createTrack("id3"), this._txtTrack = t2.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.audioCodec = r2, this.videoCodec = i3, this._duration = n2;
        }, e2.resetTimeStamp = function() {
        }, e2.resetContiguity = function() {
          var t3 = this._audioTrack, e3 = this._avcTrack, r2 = this._id3Track;
          t3 && (t3.pesData = null), e3 && (e3.pesData = null), r2 && (r2.pesData = null), this.aacOverFlow = null, this.avcSample = null, this.remainderData = null;
        }, e2.demux = function(e3, r2, i3, n2) {
          var a2;
          void 0 === i3 && (i3 = false), void 0 === n2 && (n2 = false), i3 || (this.sampleAes = null);
          var s2 = this._avcTrack, o2 = this._audioTrack, l2 = this._id3Track, u2 = this._txtTrack, h2 = s2.pid, d2 = s2.pesData, c2 = o2.pid, f2 = l2.pid, g2 = o2.pesData, v2 = l2.pesData, m2 = null, p2 = this.pmtParsed, y2 = this._pmtId, T2 = e3.length;
          if (this.remainderData && (T2 = (e3 = xt(this.remainderData, e3)).length, this.remainderData = null), T2 < bi && !n2)
            return this.remainderData = e3, { audioTrack: o2, videoTrack: s2, id3Track: l2, textTrack: u2 };
          var E2 = Math.max(0, t2.syncOffset(e3));
          (T2 -= (T2 - E2) % bi) < e3.byteLength && !n2 && (this.remainderData = new Uint8Array(e3.buffer, T2, e3.buffer.byteLength - T2));
          for (var A2 = 0, k2 = E2; k2 < T2; k2 += bi)
            if (71 === e3[k2]) {
              var b2 = !!(64 & e3[k2 + 1]), D2 = wi(e3, k2), I2 = void 0;
              if ((48 & e3[k2 + 3]) >> 4 > 1) {
                if ((I2 = k2 + 5 + e3[k2 + 4]) === k2 + bi)
                  continue;
              } else
                I2 = k2 + 4;
              switch (D2) {
                case h2:
                  b2 && (d2 && (a2 = Pi(d2)) && this.parseAVCPES(s2, u2, a2, false), d2 = { data: [], size: 0 }), d2 && (d2.data.push(e3.subarray(I2, k2 + bi)), d2.size += k2 + bi - I2);
                  break;
                case c2:
                  if (b2) {
                    if (g2 && (a2 = Pi(g2)))
                      switch (o2.segmentCodec) {
                        case "aac":
                          this.parseAACPES(o2, a2);
                          break;
                        case "mp3":
                          this.parseMPEGPES(o2, a2);
                      }
                    g2 = { data: [], size: 0 };
                  }
                  g2 && (g2.data.push(e3.subarray(I2, k2 + bi)), g2.size += k2 + bi - I2);
                  break;
                case f2:
                  b2 && (v2 && (a2 = Pi(v2)) && this.parseID3PES(l2, a2), v2 = { data: [], size: 0 }), v2 && (v2.data.push(e3.subarray(I2, k2 + bi)), v2.size += k2 + bi - I2);
                  break;
                case 0:
                  b2 && (I2 += e3[I2] + 1), y2 = this._pmtId = Ci(e3, I2);
                  break;
                case y2:
                  b2 && (I2 += e3[I2] + 1);
                  var C2 = _i(e3, I2, this.typeSupported, i3);
                  (h2 = C2.avc) > 0 && (s2.pid = h2), (c2 = C2.audio) > 0 && (o2.pid = c2, o2.segmentCodec = C2.segmentCodec), (f2 = C2.id3) > 0 && (l2.pid = f2), null === m2 || p2 || (w.warn("MPEG-TS PMT found at " + k2 + " after unknown PID '" + m2 + "'. Backtracking to sync byte @" + E2 + " to parse all TS packets."), m2 = null, k2 = E2 - 188), p2 = this.pmtParsed = true;
                  break;
                case 17:
                case 8191:
                  break;
                default:
                  m2 = D2;
              }
            } else
              A2++;
          if (A2 > 0) {
            var _2 = new Error("Found " + A2 + " TS packet/s that do not start with 0x47");
            this.observer.emit(S.ERROR, S.ERROR, { type: L.MEDIA_ERROR, details: R.FRAG_PARSING_ERROR, fatal: false, error: _2, reason: _2.message });
          }
          s2.pesData = d2, o2.pesData = g2, l2.pesData = v2;
          var P2 = { audioTrack: o2, videoTrack: s2, id3Track: l2, textTrack: u2 };
          return n2 && this.extractRemainingSamples(P2), P2;
        }, e2.flush = function() {
          var t3, e3 = this.remainderData;
          return this.remainderData = null, t3 = e3 ? this.demux(e3, -1, false, true) : { videoTrack: this._avcTrack, audioTrack: this._audioTrack, id3Track: this._id3Track, textTrack: this._txtTrack }, this.extractRemainingSamples(t3), this.sampleAes ? this.decrypt(t3, this.sampleAes) : t3;
        }, e2.extractRemainingSamples = function(t3) {
          var e3, r2 = t3.audioTrack, i3 = t3.videoTrack, n2 = t3.id3Track, a2 = t3.textTrack, s2 = i3.pesData, o2 = r2.pesData, l2 = n2.pesData;
          if (s2 && (e3 = Pi(s2)) ? (this.parseAVCPES(i3, a2, e3, true), i3.pesData = null) : i3.pesData = s2, o2 && (e3 = Pi(o2))) {
            switch (r2.segmentCodec) {
              case "aac":
                this.parseAACPES(r2, e3);
                break;
              case "mp3":
                this.parseMPEGPES(r2, e3);
            }
            r2.pesData = null;
          } else
            null != o2 && o2.size && w.log("last AAC PES packet truncated,might overlap between fragments"), r2.pesData = o2;
          l2 && (e3 = Pi(l2)) ? (this.parseID3PES(n2, e3), n2.pesData = null) : n2.pesData = l2;
        }, e2.demuxSampleAes = function(t3, e3, r2) {
          var i3 = this.demux(t3, r2, true, !this.config.progressive), n2 = this.sampleAes = new ki(this.observer, this.config, e3);
          return this.decrypt(i3, n2);
        }, e2.decrypt = function(t3, e3) {
          return new Promise(function(r2) {
            var i3 = t3.audioTrack, n2 = t3.videoTrack;
            i3.samples && "aac" === i3.segmentCodec ? e3.decryptAacSamples(i3.samples, 0, function() {
              n2.samples ? e3.decryptAvcSamples(n2.samples, 0, 0, function() {
                r2(t3);
              }) : r2(t3);
            }) : n2.samples && e3.decryptAvcSamples(n2.samples, 0, 0, function() {
              r2(t3);
            });
          });
        }, e2.destroy = function() {
          this._duration = 0;
        }, e2.parseAVCPES = function(t3, e3, r2, i3) {
          var n2, a2 = this, s2 = this.parseAVCNALu(t3, r2.data), o2 = this.avcSample, l2 = false;
          r2.data = null, o2 && s2.length && !t3.audFound && (xi(o2, t3), o2 = this.avcSample = Ii(false, r2.pts, r2.dts, "")), s2.forEach(function(i4) {
            var s3;
            switch (i4.type) {
              case 1:
                var u2 = false;
                n2 = true;
                var h2, d2 = i4.data;
                if (l2 && d2.length > 4) {
                  var c2 = new Ai(d2).readSliceType();
                  2 !== c2 && 4 !== c2 && 7 !== c2 && 9 !== c2 || (u2 = true);
                }
                u2 && null != (h2 = o2) && h2.frame && !o2.key && (xi(o2, t3), o2 = a2.avcSample = null), o2 || (o2 = a2.avcSample = Ii(true, r2.pts, r2.dts, "")), o2.frame = true, o2.key = u2;
                break;
              case 5:
                n2 = true, null != (s3 = o2) && s3.frame && !o2.key && (xi(o2, t3), o2 = a2.avcSample = null), o2 || (o2 = a2.avcSample = Ii(true, r2.pts, r2.dts, "")), o2.key = true, o2.frame = true;
                break;
              case 6:
                n2 = true, Ot(i4.data, 1, r2.pts, e3.samples);
                break;
              case 7:
                if (n2 = true, l2 = true, !t3.sps) {
                  var f2 = i4.data, g2 = new Ai(f2).readSPS();
                  t3.width = g2.width, t3.height = g2.height, t3.pixelRatio = g2.pixelRatio, t3.sps = [f2], t3.duration = a2._duration;
                  for (var v2 = f2.subarray(1, 4), m2 = "avc1.", p2 = 0; p2 < 3; p2++) {
                    var y2 = v2[p2].toString(16);
                    y2.length < 2 && (y2 = "0" + y2), m2 += y2;
                  }
                  t3.codec = m2;
                }
                break;
              case 8:
                n2 = true, t3.pps || (t3.pps = [i4.data]);
                break;
              case 9:
                n2 = false, t3.audFound = true, o2 && xi(o2, t3), o2 = a2.avcSample = Ii(false, r2.pts, r2.dts, "");
                break;
              case 12:
                n2 = true;
                break;
              default:
                n2 = false, o2 && (o2.debug += "unknown NAL " + i4.type + " ");
            }
            o2 && n2 && o2.units.push(i4);
          }), i3 && o2 && (xi(o2, t3), this.avcSample = null);
        }, e2.getLastNalUnit = function(t3) {
          var e3, r2, i3 = this.avcSample;
          if (i3 && 0 !== i3.units.length || (i3 = t3[t3.length - 1]), null != (e3 = i3) && e3.units) {
            var n2 = i3.units;
            r2 = n2[n2.length - 1];
          }
          return r2;
        }, e2.parseAVCNALu = function(t3, e3) {
          var r2, i3, n2 = e3.byteLength, a2 = t3.naluState || 0, s2 = a2, o2 = [], l2 = 0, u2 = -1, h2 = 0;
          for (-1 === a2 && (u2 = 0, h2 = 31 & e3[0], a2 = 0, l2 = 1); l2 < n2; )
            if (r2 = e3[l2++], a2)
              if (1 !== a2)
                if (r2)
                  if (1 === r2) {
                    if (u2 >= 0) {
                      var d2 = { data: e3.subarray(u2, l2 - a2 - 1), type: h2 };
                      o2.push(d2);
                    } else {
                      var c2 = this.getLastNalUnit(t3.samples);
                      if (c2 && (s2 && l2 <= 4 - s2 && c2.state && (c2.data = c2.data.subarray(0, c2.data.byteLength - s2)), (i3 = l2 - a2 - 1) > 0)) {
                        var f2 = new Uint8Array(c2.data.byteLength + i3);
                        f2.set(c2.data, 0), f2.set(e3.subarray(0, i3), c2.data.byteLength), c2.data = f2, c2.state = 0;
                      }
                    }
                    l2 < n2 ? (u2 = l2, h2 = 31 & e3[l2], a2 = 0) : a2 = -1;
                  } else
                    a2 = 0;
                else
                  a2 = 3;
              else
                a2 = r2 ? 0 : 2;
            else
              a2 = r2 ? 0 : 1;
          if (u2 >= 0 && a2 >= 0) {
            var g2 = { data: e3.subarray(u2, n2), type: h2, state: a2 };
            o2.push(g2);
          }
          if (0 === o2.length) {
            var v2 = this.getLastNalUnit(t3.samples);
            if (v2) {
              var m2 = new Uint8Array(v2.data.byteLength + e3.byteLength);
              m2.set(v2.data, 0), m2.set(e3, v2.data.byteLength), v2.data = m2;
            }
          }
          return t3.naluState = a2, o2;
        }, e2.parseAACPES = function(t3, e3) {
          var r2, i3, n2, a2 = 0, s2 = this.aacOverFlow, o2 = e3.data;
          if (s2) {
            this.aacOverFlow = null;
            var l2 = s2.missing, u2 = s2.sample.unit.byteLength;
            if (-1 === l2) {
              var h2 = new Uint8Array(u2 + o2.byteLength);
              h2.set(s2.sample.unit, 0), h2.set(o2, u2), o2 = h2;
            } else {
              var d2 = u2 - l2;
              s2.sample.unit.set(o2.subarray(0, l2), d2), t3.samples.push(s2.sample), a2 = s2.missing;
            }
          }
          for (r2 = a2, i3 = o2.length; r2 < i3 - 1 && !si(o2, r2); r2++)
            ;
          if (r2 !== a2) {
            var c2, f2 = r2 < i3 - 1;
            c2 = f2 ? "AAC PES did not start with ADTS header,offset:" + r2 : "No ADTS header found in AAC PES";
            var g2 = new Error(c2);
            if (w.warn("parsing error: " + c2), this.observer.emit(S.ERROR, S.ERROR, { type: L.MEDIA_ERROR, details: R.FRAG_PARSING_ERROR, fatal: false, levelRetry: f2, error: g2, reason: c2 }), !f2)
              return;
          }
          if (li(t3, this.observer, o2, r2, this.audioCodec), void 0 !== e3.pts)
            n2 = e3.pts;
          else {
            if (!s2)
              return void w.warn("[tsdemuxer]: AAC PES unknown PTS");
            var v2 = ui(t3.samplerate);
            n2 = s2.sample.pts + v2;
          }
          for (var m2, p2 = 0; r2 < i3; ) {
            if (r2 += (m2 = hi(t3, o2, r2, n2, p2)).length, m2.missing) {
              this.aacOverFlow = m2;
              break;
            }
            for (p2++; r2 < i3 - 1 && !si(o2, r2); r2++)
              ;
          }
        }, e2.parseMPEGPES = function(t3, e3) {
          var r2 = e3.data, i3 = r2.length, n2 = 0, a2 = 0, s2 = e3.pts;
          if (void 0 !== s2)
            for (; a2 < i3; )
              if (Li(r2, a2)) {
                var o2 = Ti(t3, r2, a2, s2, n2);
                if (!o2)
                  break;
                a2 += o2.length, n2++;
              } else
                a2++;
          else
            w.warn("[tsdemuxer]: MPEG PES unknown PTS");
        }, e2.parseID3PES = function(t3, e3) {
          if (void 0 !== e3.pts) {
            var r2 = o({}, e3, { type: this._avcTrack ? be : Ae, duration: Number.POSITIVE_INFINITY });
            t3.samples.push(r2);
          } else
            w.warn("[tsdemuxer]: ID3 PES unknown PTS");
        }, t2;
      }();
      function Ii(t2, e2, r2, i3) {
        return { key: t2, frame: false, pts: e2, dts: r2, units: [], debug: i3, length: 0 };
      }
      function wi(t2, e2) {
        return ((31 & t2[e2 + 1]) << 8) + t2[e2 + 2];
      }
      function Ci(t2, e2) {
        return (31 & t2[e2 + 10]) << 8 | t2[e2 + 11];
      }
      function _i(t2, e2, r2, i3) {
        var n2 = { audio: -1, avc: -1, id3: -1, segmentCodec: "aac" }, a2 = e2 + 3 + ((15 & t2[e2 + 1]) << 8 | t2[e2 + 2]) - 4;
        for (e2 += 12 + ((15 & t2[e2 + 10]) << 8 | t2[e2 + 11]); e2 < a2; ) {
          var s2 = wi(t2, e2);
          switch (t2[e2]) {
            case 207:
              if (!i3) {
                w.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                break;
              }
            case 15:
              -1 === n2.audio && (n2.audio = s2);
              break;
            case 21:
              -1 === n2.id3 && (n2.id3 = s2);
              break;
            case 219:
              if (!i3) {
                w.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                break;
              }
            case 27:
              -1 === n2.avc && (n2.avc = s2);
              break;
            case 3:
            case 4:
              true !== r2.mpeg && true !== r2.mp3 ? w.log("MPEG audio found, not supported in this browser") : -1 === n2.audio && (n2.audio = s2, n2.segmentCodec = "mp3");
              break;
            case 36:
              w.warn("Unsupported HEVC stream type found");
          }
          e2 += 5 + ((15 & t2[e2 + 3]) << 8 | t2[e2 + 4]);
        }
        return n2;
      }
      function Pi(t2) {
        var e2, r2, i3, n2, a2, s2 = 0, o2 = t2.data;
        if (!t2 || 0 === t2.size)
          return null;
        for (; o2[0].length < 19 && o2.length > 1; ) {
          var l2 = new Uint8Array(o2[0].length + o2[1].length);
          l2.set(o2[0]), l2.set(o2[1], o2[0].length), o2[0] = l2, o2.splice(1, 1);
        }
        if (1 === ((e2 = o2[0])[0] << 16) + (e2[1] << 8) + e2[2]) {
          if ((r2 = (e2[4] << 8) + e2[5]) && r2 > t2.size - 6)
            return null;
          var u2 = e2[7];
          192 & u2 && (n2 = 536870912 * (14 & e2[9]) + 4194304 * (255 & e2[10]) + 16384 * (254 & e2[11]) + 128 * (255 & e2[12]) + (254 & e2[13]) / 2, 64 & u2 ? n2 - (a2 = 536870912 * (14 & e2[14]) + 4194304 * (255 & e2[15]) + 16384 * (254 & e2[16]) + 128 * (255 & e2[17]) + (254 & e2[18]) / 2) > 54e5 && (w.warn(Math.round((n2 - a2) / 9e4) + "s delta between PTS and DTS, align them"), n2 = a2) : a2 = n2);
          var h2 = (i3 = e2[8]) + 9;
          if (t2.size <= h2)
            return null;
          t2.size -= h2;
          for (var d2 = new Uint8Array(t2.size), c2 = 0, f2 = o2.length; c2 < f2; c2++) {
            var g2 = (e2 = o2[c2]).byteLength;
            if (h2) {
              if (h2 > g2) {
                h2 -= g2;
                continue;
              }
              e2 = e2.subarray(h2), g2 -= h2, h2 = 0;
            }
            d2.set(e2, s2), s2 += g2;
          }
          return r2 && (r2 -= i3 + 3), { data: d2, pts: n2, dts: a2, len: r2 };
        }
        return null;
      }
      function xi(t2, e2) {
        if (t2.units.length && t2.frame) {
          if (void 0 === t2.pts) {
            var r2 = e2.samples, i3 = r2.length;
            if (!i3)
              return void e2.dropped++;
            var n2 = r2[i3 - 1];
            t2.pts = n2.pts, t2.dts = n2.dts;
          }
          e2.samples.push(t2);
        }
        t2.debug.length && w.log(t2.pts + "/" + t2.dts + ":" + t2.debug);
      }
      var Fi = function(t2) {
        function e2() {
          return t2.apply(this, arguments) || this;
        }
        l(e2, t2);
        var r2 = e2.prototype;
        return r2.resetInitSegment = function(e3, r3, i3, n2) {
          t2.prototype.resetInitSegment.call(this, e3, r3, i3, n2), this._audioTrack = { container: "audio/mpeg", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "mp3", samples: [], manifestCodec: r3, duration: n2, inputTimeScale: 9e4, dropped: 0 };
        }, e2.probe = function(t3) {
          if (!t3)
            return false;
          for (var e3 = (st(t3, 0) || []).length, r3 = t3.length; e3 < r3; e3++)
            if (Ri(t3, e3))
              return w.log("MPEG Audio sync word found !"), true;
          return false;
        }, r2.canParse = function(t3, e3) {
          return function(t4, e4) {
            return Si(t4, e4) && 4 <= t4.length - e4;
          }(t3, e3);
        }, r2.appendFrame = function(t3, e3, r3) {
          if (null !== this.basePTS)
            return Ti(t3, e3, r3, this.basePTS, this.frameIndex);
        }, e2;
      }(ei), Mi = function() {
        function t2() {
        }
        return t2.getSilentFrame = function(t3, e2) {
          if ("mp4a.40.2" === t3) {
            if (1 === e2)
              return new Uint8Array([0, 200, 0, 128, 35, 128]);
            if (2 === e2)
              return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
            if (3 === e2)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
            if (4 === e2)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
            if (5 === e2)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
            if (6 === e2)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
          } else {
            if (1 === e2)
              return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            if (2 === e2)
              return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            if (3 === e2)
              return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          }
        }, t2;
      }(), Oi = Math.pow(2, 32) - 1, Ni = function() {
        function t2() {
        }
        return t2.init = function() {
          var e2;
          for (e2 in t2.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] }, t2.types)
            t2.types.hasOwnProperty(e2) && (t2.types[e2] = [e2.charCodeAt(0), e2.charCodeAt(1), e2.charCodeAt(2), e2.charCodeAt(3)]);
          var r2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), i3 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
          t2.HDLR_TYPES = { video: r2, audio: i3 };
          var n2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), a2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
          t2.STTS = t2.STSC = t2.STCO = a2, t2.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t2.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t2.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t2.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
          var s2 = new Uint8Array([105, 115, 111, 109]), o2 = new Uint8Array([97, 118, 99, 49]), l2 = new Uint8Array([0, 0, 0, 1]);
          t2.FTYP = t2.box(t2.types.ftyp, s2, l2, s2, o2), t2.DINF = t2.box(t2.types.dinf, t2.box(t2.types.dref, n2));
        }, t2.box = function(t3) {
          for (var e2 = 8, r2 = arguments.length, i3 = new Array(r2 > 1 ? r2 - 1 : 0), n2 = 1; n2 < r2; n2++)
            i3[n2 - 1] = arguments[n2];
          for (var a2 = i3.length, s2 = a2; a2--; )
            e2 += i3[a2].byteLength;
          var o2 = new Uint8Array(e2);
          for (o2[0] = e2 >> 24 & 255, o2[1] = e2 >> 16 & 255, o2[2] = e2 >> 8 & 255, o2[3] = 255 & e2, o2.set(t3, 4), a2 = 0, e2 = 8; a2 < s2; a2++)
            o2.set(i3[a2], e2), e2 += i3[a2].byteLength;
          return o2;
        }, t2.hdlr = function(e2) {
          return t2.box(t2.types.hdlr, t2.HDLR_TYPES[e2]);
        }, t2.mdat = function(e2) {
          return t2.box(t2.types.mdat, e2);
        }, t2.mdhd = function(e2, r2) {
          r2 *= e2;
          var i3 = Math.floor(r2 / (Oi + 1)), n2 = Math.floor(r2 % (Oi + 1));
          return t2.box(t2.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e2 >> 24 & 255, e2 >> 16 & 255, e2 >> 8 & 255, 255 & e2, i3 >> 24, i3 >> 16 & 255, i3 >> 8 & 255, 255 & i3, n2 >> 24, n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2, 85, 196, 0, 0]));
        }, t2.mdia = function(e2) {
          return t2.box(t2.types.mdia, t2.mdhd(e2.timescale, e2.duration), t2.hdlr(e2.type), t2.minf(e2));
        }, t2.mfhd = function(e2) {
          return t2.box(t2.types.mfhd, new Uint8Array([0, 0, 0, 0, e2 >> 24, e2 >> 16 & 255, e2 >> 8 & 255, 255 & e2]));
        }, t2.minf = function(e2) {
          return "audio" === e2.type ? t2.box(t2.types.minf, t2.box(t2.types.smhd, t2.SMHD), t2.DINF, t2.stbl(e2)) : t2.box(t2.types.minf, t2.box(t2.types.vmhd, t2.VMHD), t2.DINF, t2.stbl(e2));
        }, t2.moof = function(e2, r2, i3) {
          return t2.box(t2.types.moof, t2.mfhd(e2), t2.traf(i3, r2));
        }, t2.moov = function(e2) {
          for (var r2 = e2.length, i3 = []; r2--; )
            i3[r2] = t2.trak(e2[r2]);
          return t2.box.apply(null, [t2.types.moov, t2.mvhd(e2[0].timescale, e2[0].duration)].concat(i3).concat(t2.mvex(e2)));
        }, t2.mvex = function(e2) {
          for (var r2 = e2.length, i3 = []; r2--; )
            i3[r2] = t2.trex(e2[r2]);
          return t2.box.apply(null, [t2.types.mvex].concat(i3));
        }, t2.mvhd = function(e2, r2) {
          r2 *= e2;
          var i3 = Math.floor(r2 / (Oi + 1)), n2 = Math.floor(r2 % (Oi + 1)), a2 = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e2 >> 24 & 255, e2 >> 16 & 255, e2 >> 8 & 255, 255 & e2, i3 >> 24, i3 >> 16 & 255, i3 >> 8 & 255, 255 & i3, n2 >> 24, n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
          return t2.box(t2.types.mvhd, a2);
        }, t2.sdtp = function(e2) {
          var r2, i3, n2 = e2.samples || [], a2 = new Uint8Array(4 + n2.length);
          for (r2 = 0; r2 < n2.length; r2++)
            i3 = n2[r2].flags, a2[r2 + 4] = i3.dependsOn << 4 | i3.isDependedOn << 2 | i3.hasRedundancy;
          return t2.box(t2.types.sdtp, a2);
        }, t2.stbl = function(e2) {
          return t2.box(t2.types.stbl, t2.stsd(e2), t2.box(t2.types.stts, t2.STTS), t2.box(t2.types.stsc, t2.STSC), t2.box(t2.types.stsz, t2.STSZ), t2.box(t2.types.stco, t2.STCO));
        }, t2.avc1 = function(e2) {
          var r2, i3, n2, a2 = [], s2 = [];
          for (r2 = 0; r2 < e2.sps.length; r2++)
            n2 = (i3 = e2.sps[r2]).byteLength, a2.push(n2 >>> 8 & 255), a2.push(255 & n2), a2 = a2.concat(Array.prototype.slice.call(i3));
          for (r2 = 0; r2 < e2.pps.length; r2++)
            n2 = (i3 = e2.pps[r2]).byteLength, s2.push(n2 >>> 8 & 255), s2.push(255 & n2), s2 = s2.concat(Array.prototype.slice.call(i3));
          var o2 = t2.box(t2.types.avcC, new Uint8Array([1, a2[3], a2[4], a2[5], 255, 224 | e2.sps.length].concat(a2).concat([e2.pps.length]).concat(s2))), l2 = e2.width, u2 = e2.height, h2 = e2.pixelRatio[0], d2 = e2.pixelRatio[1];
          return t2.box(t2.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l2 >> 8 & 255, 255 & l2, u2 >> 8 & 255, 255 & u2, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o2, t2.box(t2.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t2.box(t2.types.pasp, new Uint8Array([h2 >> 24, h2 >> 16 & 255, h2 >> 8 & 255, 255 & h2, d2 >> 24, d2 >> 16 & 255, d2 >> 8 & 255, 255 & d2])));
        }, t2.esds = function(t3) {
          var e2 = t3.config.length;
          return new Uint8Array([0, 0, 0, 0, 3, 23 + e2, 0, 1, 0, 4, 15 + e2, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e2]).concat(t3.config).concat([6, 1, 2]));
        }, t2.mp4a = function(e2) {
          var r2 = e2.samplerate;
          return t2.box(t2.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e2.channelCount, 0, 16, 0, 0, 0, 0, r2 >> 8 & 255, 255 & r2, 0, 0]), t2.box(t2.types.esds, t2.esds(e2)));
        }, t2.mp3 = function(e2) {
          var r2 = e2.samplerate;
          return t2.box(t2.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e2.channelCount, 0, 16, 0, 0, 0, 0, r2 >> 8 & 255, 255 & r2, 0, 0]));
        }, t2.stsd = function(e2) {
          return "audio" === e2.type ? "mp3" === e2.segmentCodec && "mp3" === e2.codec ? t2.box(t2.types.stsd, t2.STSD, t2.mp3(e2)) : t2.box(t2.types.stsd, t2.STSD, t2.mp4a(e2)) : t2.box(t2.types.stsd, t2.STSD, t2.avc1(e2));
        }, t2.tkhd = function(e2) {
          var r2 = e2.id, i3 = e2.duration * e2.timescale, n2 = e2.width, a2 = e2.height, s2 = Math.floor(i3 / (Oi + 1)), o2 = Math.floor(i3 % (Oi + 1));
          return t2.box(t2.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r2 >> 24 & 255, r2 >> 16 & 255, r2 >> 8 & 255, 255 & r2, 0, 0, 0, 0, s2 >> 24, s2 >> 16 & 255, s2 >> 8 & 255, 255 & s2, o2 >> 24, o2 >> 16 & 255, o2 >> 8 & 255, 255 & o2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n2 >> 8 & 255, 255 & n2, 0, 0, a2 >> 8 & 255, 255 & a2, 0, 0]));
        }, t2.traf = function(e2, r2) {
          var i3 = t2.sdtp(e2), n2 = e2.id, a2 = Math.floor(r2 / (Oi + 1)), s2 = Math.floor(r2 % (Oi + 1));
          return t2.box(t2.types.traf, t2.box(t2.types.tfhd, new Uint8Array([0, 0, 0, 0, n2 >> 24, n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2])), t2.box(t2.types.tfdt, new Uint8Array([1, 0, 0, 0, a2 >> 24, a2 >> 16 & 255, a2 >> 8 & 255, 255 & a2, s2 >> 24, s2 >> 16 & 255, s2 >> 8 & 255, 255 & s2])), t2.trun(e2, i3.length + 16 + 20 + 8 + 16 + 8 + 8), i3);
        }, t2.trak = function(e2) {
          return e2.duration = e2.duration || 4294967295, t2.box(t2.types.trak, t2.tkhd(e2), t2.mdia(e2));
        }, t2.trex = function(e2) {
          var r2 = e2.id;
          return t2.box(t2.types.trex, new Uint8Array([0, 0, 0, 0, r2 >> 24, r2 >> 16 & 255, r2 >> 8 & 255, 255 & r2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
        }, t2.trun = function(e2, r2) {
          var i3, n2, a2, s2, o2, l2, u2 = e2.samples || [], h2 = u2.length, d2 = 12 + 16 * h2, c2 = new Uint8Array(d2);
          for (r2 += 8 + d2, c2.set(["video" === e2.type ? 1 : 0, 0, 15, 1, h2 >>> 24 & 255, h2 >>> 16 & 255, h2 >>> 8 & 255, 255 & h2, r2 >>> 24 & 255, r2 >>> 16 & 255, r2 >>> 8 & 255, 255 & r2], 0), i3 = 0; i3 < h2; i3++)
            a2 = (n2 = u2[i3]).duration, s2 = n2.size, o2 = n2.flags, l2 = n2.cts, c2.set([a2 >>> 24 & 255, a2 >>> 16 & 255, a2 >>> 8 & 255, 255 & a2, s2 >>> 24 & 255, s2 >>> 16 & 255, s2 >>> 8 & 255, 255 & s2, o2.isLeading << 2 | o2.dependsOn, o2.isDependedOn << 6 | o2.hasRedundancy << 4 | o2.paddingValue << 1 | o2.isNonSync, 61440 & o2.degradPrio, 15 & o2.degradPrio, l2 >>> 24 & 255, l2 >>> 16 & 255, l2 >>> 8 & 255, 255 & l2], 12 + 16 * i3);
          return t2.box(t2.types.trun, c2);
        }, t2.initSegment = function(e2) {
          t2.types || t2.init();
          var r2 = t2.moov(e2), i3 = new Uint8Array(t2.FTYP.byteLength + r2.byteLength);
          return i3.set(t2.FTYP), i3.set(r2, t2.FTYP.byteLength), i3;
        }, t2;
      }();
      function Ui(t2, e2, r2, i3) {
        void 0 === r2 && (r2 = 1), void 0 === i3 && (i3 = false);
        var n2 = t2 * e2 * r2;
        return i3 ? Math.round(n2) : n2;
      }
      function Bi(t2, e2) {
        return void 0 === e2 && (e2 = false), Ui(t2, 1e3, 1 / 9e4, e2);
      }
      Ni.types = void 0, Ni.HDLR_TYPES = void 0, Ni.STTS = void 0, Ni.STSC = void 0, Ni.STCO = void 0, Ni.STSZ = void 0, Ni.VMHD = void 0, Ni.SMHD = void 0, Ni.STSD = void 0, Ni.FTYP = void 0, Ni.DINF = void 0;
      var Gi = null, Ki = null, Hi = function() {
        function t2(t3, e3, r2, i3) {
          if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = false, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = false, this.isVideoContiguous = false, this.observer = t3, this.config = e3, this.typeSupported = r2, this.ISGenerated = false, null === Gi) {
            var n2 = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
            Gi = n2 ? parseInt(n2[1]) : 0;
          }
          if (null === Ki) {
            var a2 = navigator.userAgent.match(/Safari\/(\d+)/i);
            Ki = a2 ? parseInt(a2[1]) : 0;
          }
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
        }, e2.resetTimeStamp = function(t3) {
          w.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t3;
        }, e2.resetNextTimestamp = function() {
          w.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = false, this.isAudioContiguous = false;
        }, e2.resetInitSegment = function() {
          w.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = false;
        }, e2.getVideoStartPts = function(t3) {
          var e3 = false, r2 = t3.reduce(function(t4, r3) {
            var i3 = r3.pts - t4;
            return i3 < -4294967296 ? (e3 = true, Vi(t4, r3.pts)) : i3 > 0 ? t4 : r3.pts;
          }, t3[0].pts);
          return e3 && w.debug("PTS rollover detected"), r2;
        }, e2.remux = function(t3, e3, r2, i3, n2, a2, s2, o2) {
          var l2, u2, h2, d2, c2, f2, g2 = n2, v2 = n2, m2 = t3.pid > -1, p2 = e3.pid > -1, y2 = e3.samples.length, T2 = t3.samples.length > 0, E2 = s2 && y2 > 0 || y2 > 1;
          if ((!m2 || T2) && (!p2 || E2) || this.ISGenerated || s2) {
            this.ISGenerated || (h2 = this.generateIS(t3, e3, n2, a2));
            var S2, L2 = this.isVideoContiguous, R2 = -1;
            if (E2 && (R2 = function(t4) {
              for (var e4 = 0; e4 < t4.length; e4++)
                if (t4[e4].key)
                  return e4;
              return -1;
            }(e3.samples), !L2 && this.config.forceKeyFrameOnDiscontinuity))
              if (f2 = true, R2 > 0) {
                w.warn("[mp4-remuxer]: Dropped " + R2 + " out of " + y2 + " video samples due to a missing keyframe");
                var A2 = this.getVideoStartPts(e3.samples);
                e3.samples = e3.samples.slice(R2), e3.dropped += R2, S2 = v2 += (e3.samples[0].pts - A2) / e3.inputTimeScale;
              } else
                -1 === R2 && (w.warn("[mp4-remuxer]: No keyframe found out of " + y2 + " video samples"), f2 = false);
            if (this.ISGenerated) {
              if (T2 && E2) {
                var k2 = this.getVideoStartPts(e3.samples), b2 = (Vi(t3.samples[0].pts, k2) - k2) / e3.inputTimeScale;
                g2 += Math.max(0, b2), v2 += Math.max(0, -b2);
              }
              if (T2) {
                if (t3.samplerate || (w.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), h2 = this.generateIS(t3, e3, n2, a2)), u2 = this.remuxAudio(t3, g2, this.isAudioContiguous, a2, p2 || E2 || o2 === ve ? v2 : void 0), E2) {
                  var D2 = u2 ? u2.endPTS - u2.startPTS : 0;
                  e3.inputTimeScale || (w.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), h2 = this.generateIS(t3, e3, n2, a2)), l2 = this.remuxVideo(e3, v2, L2, D2);
                }
              } else
                E2 && (l2 = this.remuxVideo(e3, v2, L2, 0));
              l2 && (l2.firstKeyFrame = R2, l2.independent = -1 !== R2, l2.firstKeyFramePTS = S2);
            }
          }
          return this.ISGenerated && this._initPTS && this._initDTS && (r2.samples.length && (c2 = Yi(r2, n2, this._initPTS, this._initDTS)), i3.samples.length && (d2 = Wi(i3, n2, this._initPTS))), { audio: u2, video: l2, initSegment: h2, independent: f2, text: d2, id3: c2 };
        }, e2.generateIS = function(t3, e3, r2, i3) {
          var n2, a2, s2, o2 = t3.samples, l2 = e3.samples, u2 = this.typeSupported, h2 = {}, d2 = this._initPTS, c2 = !d2 || i3, f2 = "audio/mp4";
          if (c2 && (n2 = a2 = 1 / 0), t3.config && o2.length && (t3.timescale = t3.samplerate, "mp3" === t3.segmentCodec && (u2.mpeg ? (f2 = "audio/mpeg", t3.codec = "") : u2.mp3 && (t3.codec = "mp3")), h2.audio = { id: "audio", container: f2, codec: t3.codec, initSegment: "mp3" === t3.segmentCodec && u2.mpeg ? new Uint8Array(0) : Ni.initSegment([t3]), metadata: { channelCount: t3.channelCount } }, c2 && (s2 = t3.inputTimeScale, d2 && s2 === d2.timescale ? c2 = false : n2 = a2 = o2[0].pts - Math.round(s2 * r2))), e3.sps && e3.pps && l2.length && (e3.timescale = e3.inputTimeScale, h2.video = { id: "main", container: "video/mp4", codec: e3.codec, initSegment: Ni.initSegment([e3]), metadata: { width: e3.width, height: e3.height } }, c2))
            if (s2 = e3.inputTimeScale, d2 && s2 === d2.timescale)
              c2 = false;
            else {
              var g2 = this.getVideoStartPts(l2), v2 = Math.round(s2 * r2);
              a2 = Math.min(a2, Vi(l2[0].dts, g2) - v2), n2 = Math.min(n2, g2 - v2);
            }
          if (Object.keys(h2).length)
            return this.ISGenerated = true, c2 ? (this._initPTS = { baseTime: n2, timescale: s2 }, this._initDTS = { baseTime: a2, timescale: s2 }) : n2 = s2 = void 0, { tracks: h2, initPTS: n2, timescale: s2 };
        }, e2.remuxVideo = function(t3, e3, r2, i3) {
          var n2, a2, s2 = t3.inputTimeScale, l2 = t3.samples, u2 = [], h2 = l2.length, d2 = this._initPTS, c2 = this.nextAvcDts, f2 = 8, g2 = this.videoSampleDuration, v2 = Number.POSITIVE_INFINITY, m2 = Number.NEGATIVE_INFINITY, p2 = false;
          r2 && null !== c2 || (c2 = e3 * s2 - (l2[0].pts - Vi(l2[0].dts, l2[0].pts)));
          for (var y2 = d2.baseTime * s2 / d2.timescale, T2 = 0; T2 < h2; T2++) {
            var E2 = l2[T2];
            E2.pts = Vi(E2.pts - y2, c2), E2.dts = Vi(E2.dts - y2, c2), E2.dts < l2[T2 > 0 ? T2 - 1 : T2].dts && (p2 = true);
          }
          p2 && l2.sort(function(t4, e4) {
            var r3 = t4.dts - e4.dts, i4 = t4.pts - e4.pts;
            return r3 || i4;
          }), n2 = l2[0].dts;
          var A2 = (a2 = l2[l2.length - 1].dts) - n2, k2 = A2 ? Math.round(A2 / (h2 - 1)) : g2 || t3.inputTimeScale / 30;
          if (r2) {
            var b2 = n2 - c2, D2 = b2 > k2, I2 = b2 < -1;
            if ((D2 || I2) && (D2 ? w.warn("AVC: " + Bi(b2, true) + " ms (" + b2 + "dts) hole between fragments detected, filling it") : w.warn("AVC: " + Bi(-b2, true) + " ms (" + b2 + "dts) overlapping between fragments detected"), !I2 || c2 >= l2[0].pts)) {
              n2 = c2;
              var C2 = l2[0].pts - b2;
              l2[0].dts = n2, l2[0].pts = C2, w.log("Video: First PTS/DTS adjusted: " + Bi(C2, true) + "/" + Bi(n2, true) + ", delta: " + Bi(b2, true) + " ms");
            }
          }
          n2 = Math.max(0, n2);
          for (var _2 = 0, P2 = 0, x2 = 0; x2 < h2; x2++) {
            for (var F2 = l2[x2], M2 = F2.units, O2 = M2.length, N2 = 0, U2 = 0; U2 < O2; U2++)
              N2 += M2[U2].data.length;
            P2 += N2, _2 += O2, F2.length = N2, F2.dts = Math.max(F2.dts, n2), v2 = Math.min(F2.pts, v2), m2 = Math.max(F2.pts, m2);
          }
          a2 = l2[h2 - 1].dts;
          var B2, G2 = P2 + 4 * _2 + 8;
          try {
            B2 = new Uint8Array(G2);
          } catch (t4) {
            return void this.observer.emit(S.ERROR, S.ERROR, { type: L.MUX_ERROR, details: R.REMUX_ALLOC_ERROR, fatal: false, error: t4, bytes: G2, reason: "fail allocating video mdat " + G2 });
          }
          var K2 = new DataView(B2.buffer);
          K2.setUint32(0, G2), B2.set(Ni.types.mdat, 4);
          for (var H2 = false, V2 = Number.POSITIVE_INFINITY, Y2 = Number.POSITIVE_INFINITY, W2 = Number.NEGATIVE_INFINITY, j2 = Number.NEGATIVE_INFINITY, q2 = 0; q2 < h2; q2++) {
            for (var X2 = l2[q2], z2 = X2.units, Q2 = 0, $2 = 0, J2 = z2.length; $2 < J2; $2++) {
              var Z2 = z2[$2], tt2 = Z2.data, et2 = Z2.data.byteLength;
              K2.setUint32(f2, et2), f2 += 4, B2.set(tt2, f2), f2 += et2, Q2 += 4 + et2;
            }
            var rt2 = void 0;
            if (q2 < h2 - 1)
              g2 = l2[q2 + 1].dts - X2.dts, rt2 = l2[q2 + 1].pts - X2.pts;
            else {
              var it2 = this.config, nt2 = q2 > 0 ? X2.dts - l2[q2 - 1].dts : k2;
              if (rt2 = q2 > 0 ? X2.pts - l2[q2 - 1].pts : k2, it2.stretchShortVideoTrack && null !== this.nextAudioPts) {
                var at2 = Math.floor(it2.maxBufferHole * s2), st2 = (i3 ? v2 + i3 * s2 : this.nextAudioPts) - X2.pts;
                st2 > at2 ? ((g2 = st2 - nt2) < 0 ? g2 = nt2 : H2 = true, w.log("[mp4-remuxer]: It is approximately " + st2 / 90 + " ms to the next segment; using duration " + g2 / 90 + " ms for the last video frame.")) : g2 = nt2;
              } else
                g2 = nt2;
            }
            var ot2 = Math.round(X2.pts - X2.dts);
            V2 = Math.min(V2, g2), W2 = Math.max(W2, g2), Y2 = Math.min(Y2, rt2), j2 = Math.max(j2, rt2), u2.push(new qi(X2.key, g2, Q2, ot2));
          }
          if (u2.length) {
            if (Gi) {
              if (Gi < 70) {
                var lt2 = u2[0].flags;
                lt2.dependsOn = 2, lt2.isNonSync = 0;
              }
            } else if (Ki && j2 - Y2 < W2 - V2 && k2 / W2 < 0.025 && 0 === u2[0].cts) {
              w.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
              for (var ut2 = n2, ht2 = 0, dt2 = u2.length; ht2 < dt2; ht2++) {
                var ct2 = ut2 + u2[ht2].duration, ft2 = ut2 + u2[ht2].cts;
                if (ht2 < dt2 - 1) {
                  var gt2 = ct2 + u2[ht2 + 1].cts;
                  u2[ht2].duration = gt2 - ft2;
                } else
                  u2[ht2].duration = ht2 ? u2[ht2 - 1].duration : k2;
                u2[ht2].cts = 0, ut2 = ct2;
              }
            }
          }
          g2 = H2 || !g2 ? k2 : g2, this.nextAvcDts = c2 = a2 + g2, this.videoSampleDuration = g2, this.isVideoContiguous = true;
          var vt2 = { data1: Ni.moof(t3.sequenceNumber++, n2, o({}, t3, { samples: u2 })), data2: B2, startPTS: v2 / s2, endPTS: (m2 + g2) / s2, startDTS: n2 / s2, endDTS: c2 / s2, type: "video", hasAudio: false, hasVideo: true, nb: u2.length, dropped: t3.dropped };
          return t3.samples = [], t3.dropped = 0, vt2;
        }, e2.remuxAudio = function(t3, e3, r2, i3, n2) {
          var a2 = t3.inputTimeScale, s2 = a2 / (t3.samplerate ? t3.samplerate : a2), l2 = "aac" === t3.segmentCodec ? 1024 : 1152, u2 = l2 * s2, h2 = this._initPTS, d2 = "mp3" === t3.segmentCodec && this.typeSupported.mpeg, c2 = [], f2 = void 0 !== n2, g2 = t3.samples, v2 = d2 ? 0 : 8, m2 = this.nextAudioPts || -1, p2 = e3 * a2, y2 = h2.baseTime * a2 / h2.timescale;
          if (this.isAudioContiguous = r2 = r2 || g2.length && m2 > 0 && (i3 && Math.abs(p2 - m2) < 9e3 || Math.abs(Vi(g2[0].pts - y2, p2) - m2) < 20 * u2), g2.forEach(function(t4) {
            t4.pts = Vi(t4.pts - y2, p2);
          }), !r2 || m2 < 0) {
            if (g2 = g2.filter(function(t4) {
              return t4.pts >= 0;
            }), !g2.length)
              return;
            m2 = 0 === n2 ? 0 : i3 && !f2 ? Math.max(0, p2) : g2[0].pts;
          }
          if ("aac" === t3.segmentCodec)
            for (var T2 = this.config.maxAudioFramesDrift, E2 = 0, A2 = m2; E2 < g2.length; E2++) {
              var k2 = g2[E2], b2 = k2.pts, D2 = b2 - A2, I2 = Math.abs(1e3 * D2 / a2);
              if (D2 <= -T2 * u2 && f2)
                0 === E2 && (w.warn("Audio frame @ " + (b2 / a2).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * D2 / a2) + " ms."), this.nextAudioPts = m2 = A2 = b2);
              else if (D2 >= T2 * u2 && I2 < 1e4 && f2) {
                var C2 = Math.round(D2 / u2);
                (A2 = b2 - C2 * u2) < 0 && (C2--, A2 += u2), 0 === E2 && (this.nextAudioPts = m2 = A2), w.warn("[mp4-remuxer]: Injecting " + C2 + " audio frame @ " + (A2 / a2).toFixed(3) + "s due to " + Math.round(1e3 * D2 / a2) + " ms gap.");
                for (var _2 = 0; _2 < C2; _2++) {
                  var P2 = Math.max(A2, 0), x2 = Mi.getSilentFrame(t3.manifestCodec || t3.codec, t3.channelCount);
                  x2 || (w.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), x2 = k2.unit.subarray()), g2.splice(E2, 0, { unit: x2, pts: P2 }), A2 += u2, E2++;
                }
              }
              k2.pts = A2, A2 += u2;
            }
          for (var F2, M2 = null, O2 = null, N2 = 0, U2 = g2.length; U2--; )
            N2 += g2[U2].unit.byteLength;
          for (var B2 = 0, G2 = g2.length; B2 < G2; B2++) {
            var K2 = g2[B2], H2 = K2.unit, V2 = K2.pts;
            if (null !== O2)
              c2[B2 - 1].duration = Math.round((V2 - O2) / s2);
            else {
              if (r2 && "aac" === t3.segmentCodec && (V2 = m2), M2 = V2, !(N2 > 0))
                return;
              N2 += v2;
              try {
                F2 = new Uint8Array(N2);
              } catch (t4) {
                return void this.observer.emit(S.ERROR, S.ERROR, { type: L.MUX_ERROR, details: R.REMUX_ALLOC_ERROR, fatal: false, error: t4, bytes: N2, reason: "fail allocating audio mdat " + N2 });
              }
              d2 || (new DataView(F2.buffer).setUint32(0, N2), F2.set(Ni.types.mdat, 4));
            }
            F2.set(H2, v2);
            var Y2 = H2.byteLength;
            v2 += Y2, c2.push(new qi(true, l2, Y2, 0)), O2 = V2;
          }
          var W2 = c2.length;
          if (W2) {
            var j2 = c2[c2.length - 1];
            this.nextAudioPts = m2 = O2 + s2 * j2.duration;
            var q2 = d2 ? new Uint8Array(0) : Ni.moof(t3.sequenceNumber++, M2 / s2, o({}, t3, { samples: c2 }));
            t3.samples = [];
            var X2 = M2 / a2, z2 = m2 / a2, Q2 = { data1: q2, data2: F2, startPTS: X2, endPTS: z2, startDTS: X2, endDTS: z2, type: "audio", hasAudio: true, hasVideo: false, nb: W2 };
            return this.isAudioContiguous = true, Q2;
          }
        }, e2.remuxEmptyAudio = function(t3, e3, r2, i3) {
          var n2 = t3.inputTimeScale, a2 = n2 / (t3.samplerate ? t3.samplerate : n2), s2 = this.nextAudioPts, o2 = this._initDTS, l2 = 9e4 * o2.baseTime / o2.timescale, u2 = (null !== s2 ? s2 : i3.startDTS * n2) + l2, h2 = i3.endDTS * n2 + l2, d2 = 1024 * a2, c2 = Math.ceil((h2 - u2) / d2), f2 = Mi.getSilentFrame(t3.manifestCodec || t3.codec, t3.channelCount);
          if (w.warn("[mp4-remuxer]: remux empty Audio"), f2) {
            for (var g2 = [], v2 = 0; v2 < c2; v2++) {
              var m2 = u2 + v2 * d2;
              g2.push({ unit: f2, pts: m2, dts: m2 });
            }
            return t3.samples = g2, this.remuxAudio(t3, e3, r2, false);
          }
          w.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
        }, t2;
      }();
      function Vi(t2, e2) {
        var r2;
        if (null === e2)
          return t2;
        for (r2 = e2 < t2 ? -8589934592 : 8589934592; Math.abs(t2 - e2) > 4294967296; )
          t2 += r2;
        return t2;
      }
      function Yi(t2, e2, r2, i3) {
        var n2 = t2.samples.length;
        if (n2) {
          for (var a2 = t2.inputTimeScale, s2 = 0; s2 < n2; s2++) {
            var o2 = t2.samples[s2];
            o2.pts = Vi(o2.pts - r2.baseTime * a2 / r2.timescale, e2 * a2) / a2, o2.dts = Vi(o2.dts - i3.baseTime * a2 / i3.timescale, e2 * a2) / a2;
          }
          var l2 = t2.samples;
          return t2.samples = [], { samples: l2 };
        }
      }
      function Wi(t2, e2, r2) {
        var i3 = t2.samples.length;
        if (i3) {
          for (var n2 = t2.inputTimeScale, a2 = 0; a2 < i3; a2++) {
            var s2 = t2.samples[a2];
            s2.pts = Vi(s2.pts - r2.baseTime * n2 / r2.timescale, e2 * n2) / n2;
          }
          t2.samples.sort(function(t3, e3) {
            return t3.pts - e3.pts;
          });
          var o2 = t2.samples;
          return t2.samples = [], { samples: o2 };
        }
      }
      var ji, qi = function(t2, e2, r2, i3) {
        this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e2, this.size = r2, this.cts = i3, this.flags = new Xi(t2);
      }, Xi = function(t2) {
        this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = t2 ? 2 : 1, this.isNonSync = t2 ? 0 : 1;
      }, zi = function() {
        function t2() {
          this.emitInitSegment = false, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null;
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
        }, e2.resetTimeStamp = function(t3) {
          this.initPTS = t3, this.lastEndTime = null;
        }, e2.resetNextTimestamp = function() {
          this.lastEndTime = null;
        }, e2.resetInitSegment = function(t3, e3, r2, i3) {
          this.audioCodec = e3, this.videoCodec = r2, this.generateInitSegment(function(t4, e4) {
            if (!t4 || !e4)
              return t4;
            var r3 = e4.keyId;
            return r3 && e4.isCommonEncryption && It(t4, ["moov", "trak"]).forEach(function(t5) {
              var e5 = It(t5, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8), i4 = It(e5, ["enca"]), n2 = i4.length > 0;
              n2 || (i4 = It(e5, ["encv"])), i4.forEach(function(t6) {
                It(n2 ? t6.subarray(28) : t6.subarray(78), ["sinf"]).forEach(function(t7) {
                  var e6 = _t(t7);
                  if (e6) {
                    var i5 = e6.subarray(8, 24);
                    i5.some(function(t8) {
                      return 0 !== t8;
                    }) || (w.log("[eme] Patching keyId in 'enc" + (n2 ? "a" : "v") + ">sinf>>tenc' box: " + Tt(i5) + " -> " + Tt(r3)), e6.set(r3, 8));
                  }
                });
              });
            }), t4;
          }(t3, i3)), this.emitInitSegment = true;
        }, e2.generateInitSegment = function(t3) {
          var e3 = this.audioCodec, r2 = this.videoCodec;
          if (null == t3 || !t3.byteLength)
            return this.initTracks = void 0, void (this.initData = void 0);
          var i3 = this.initData = Ct(t3);
          e3 || (e3 = Qi(i3.audio, O)), r2 || (r2 = Qi(i3.video, N));
          var n2 = {};
          i3.audio && i3.video ? n2.audiovideo = { container: "video/mp4", codec: e3 + "," + r2, initSegment: t3, id: "main" } : i3.audio ? n2.audio = { container: "audio/mp4", codec: e3, initSegment: t3, id: "audio" } : i3.video ? n2.video = { container: "video/mp4", codec: r2, initSegment: t3, id: "main" } : w.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = n2;
        }, e2.remux = function(t3, e3, r2, i3, n2, a2) {
          var s2, o2, l2 = this.initPTS, u2 = this.lastEndTime, h2 = { audio: void 0, video: void 0, text: i3, id3: r2, initSegment: void 0 };
          E(u2) || (u2 = this.lastEndTime = n2 || 0);
          var d2 = e3.samples;
          if (null == d2 || !d2.length)
            return h2;
          var c2 = { initPTS: void 0, timescale: 1 }, f2 = this.initData;
          if (null != (s2 = f2) && s2.length || (this.generateInitSegment(d2), f2 = this.initData), null == (o2 = f2) || !o2.length)
            return w.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), h2;
          this.emitInitSegment && (c2.tracks = this.initTracks, this.emitInitSegment = false);
          var g2 = function(t4, e4) {
            for (var r3 = 0, i4 = 0, n3 = 0, a3 = It(t4, ["moof", "traf"]), s3 = 0; s3 < a3.length; s3++) {
              var o3 = a3[s3], l3 = It(o3, ["tfhd"])[0], u3 = e4[kt(l3, 4)];
              if (u3) {
                var h3 = u3.default, d3 = kt(l3, 0) | (null == h3 ? void 0 : h3.flags), c3 = null == h3 ? void 0 : h3.duration;
                8 & d3 && (c3 = kt(l3, 2 & d3 ? 12 : 8));
                for (var f3 = u3.timescale || 9e4, g3 = It(o3, ["trun"]), v3 = 0; v3 < g3.length; v3++)
                  !(r3 = Pt(g3[v3])) && c3 && (r3 = c3 * kt(g3[v3], 4)), u3.type === N ? i4 += r3 / f3 : u3.type === O && (n3 += r3 / f3);
              }
            }
            if (0 === i4 && 0 === n3) {
              for (var m3 = 0, p3 = It(t4, ["sidx"]), y3 = 0; y3 < p3.length; y3++) {
                var T3 = wt(p3[y3]);
                null != T3 && T3.references && (m3 += T3.references.reduce(function(t5, e5) {
                  return t5 + e5.info.duration || 0;
                }, 0));
              }
              return m3;
            }
            return i4 || n3;
          }(d2, f2), v2 = function(t4, e4) {
            return It(e4, ["moof", "traf"]).reduce(function(e5, r3) {
              var i4 = It(r3, ["tfdt"])[0], n3 = i4[0], a3 = It(r3, ["tfhd"]).reduce(function(e6, r4) {
                var a4 = kt(r4, 4), s3 = t4[a4];
                if (s3) {
                  var o3 = kt(i4, 4);
                  if (1 === n3) {
                    if (o3 === Et)
                      return w.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), e6;
                    o3 *= Et + 1, o3 += kt(i4, 8);
                  }
                  var l3 = o3 / (s3.timescale || 9e4);
                  if (isFinite(l3) && (null === e6 || l3 < e6))
                    return l3;
                }
                return e6;
              }, null);
              return null !== a3 && isFinite(a3) && (null === e5 || a3 < e5) ? a3 : e5;
            }, null);
          }(f2, d2), m2 = null === v2 ? n2 : v2;
          (function(t4, e4, r3, i4) {
            if (null === t4)
              return true;
            var n3 = Math.max(i4, 1), a3 = e4 - t4.baseTime / t4.timescale;
            return Math.abs(a3 - r3) > n3;
          }(l2, m2, n2, g2) || c2.timescale !== l2.timescale && a2) && (c2.initPTS = m2 - n2, l2 && 1 === l2.timescale && w.warn("Adjusting initPTS by " + (c2.initPTS - l2.baseTime)), this.initPTS = l2 = { baseTime: c2.initPTS, timescale: 1 });
          var p2 = t3 ? m2 - l2.baseTime / l2.timescale : u2, y2 = p2 + g2;
          !function(t4, e4, r3) {
            It(e4, ["moof", "traf"]).forEach(function(e5) {
              It(e5, ["tfhd"]).forEach(function(i4) {
                var n3 = kt(i4, 4), a3 = t4[n3];
                if (a3) {
                  var s3 = a3.timescale || 9e4;
                  It(e5, ["tfdt"]).forEach(function(t5) {
                    var e6 = t5[0], i5 = kt(t5, 4);
                    if (0 === e6)
                      i5 -= r3 * s3, Dt(t5, 4, i5 = Math.max(i5, 0));
                    else {
                      i5 *= Math.pow(2, 32), i5 += kt(t5, 8), i5 -= r3 * s3, i5 = Math.max(i5, 0);
                      var n4 = Math.floor(i5 / (Et + 1)), a4 = Math.floor(i5 % (Et + 1));
                      Dt(t5, 4, n4), Dt(t5, 8, a4);
                    }
                  });
                }
              });
            });
          }(f2, d2, l2.baseTime / l2.timescale), g2 > 0 ? this.lastEndTime = y2 : (w.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
          var T2 = !!f2.audio, S2 = !!f2.video, L2 = "";
          T2 && (L2 += "audio"), S2 && (L2 += "video");
          var R2 = { data1: d2, startPTS: p2, startDTS: p2, endPTS: y2, endDTS: y2, type: L2, hasAudio: T2, hasVideo: S2, nb: 1, dropped: 0 };
          return h2.audio = "audio" === R2.type ? R2 : void 0, h2.video = "audio" !== R2.type ? R2 : void 0, h2.initSegment = c2, h2.id3 = Yi(r2, n2, l2, l2), i3.samples.length && (h2.text = Wi(i3, n2, l2)), h2;
        }, t2;
      }();
      function Qi(t2, e2) {
        var r2 = null == t2 ? void 0 : t2.codec;
        return r2 && r2.length > 4 ? r2 : "hvc1" === r2 || "hev1" === r2 ? "hvc1.1.6.L120.90" : "av01" === r2 ? "av01.0.04M.08" : "avc1" === r2 || e2 === N ? "avc1.42e01e" : "mp4a.40.5";
      }
      try {
        ji = self.performance.now.bind(self.performance);
      } catch (t2) {
        w.debug("Unable to use Performance API on this environment"), ji = "undefined" != typeof self && self.Date.now;
      }
      var $i = [{ demux: fi, remux: zi }, { demux: Di, remux: Hi }, { demux: di, remux: Hi }, { demux: Fi, remux: Hi }], Ji = function() {
        function t2(t3, e3, r2, i3, n2) {
          this.async = false, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = t3, this.typeSupported = e3, this.config = r2, this.vendor = i3, this.id = n2;
        }
        var e2 = t2.prototype;
        return e2.configure = function(t3) {
          this.transmuxConfig = t3, this.decrypter && this.decrypter.reset();
        }, e2.push = function(t3, e3, r2, i3) {
          var n2 = this, a2 = r2.transmuxing;
          a2.executeStart = ji();
          var s2 = new Uint8Array(t3), o2 = this.currentTransmuxState, l2 = this.transmuxConfig;
          i3 && (this.currentTransmuxState = i3);
          var u2 = i3 || o2, h2 = u2.contiguous, d2 = u2.discontinuity, c2 = u2.trackSwitch, f2 = u2.accurateTimeOffset, g2 = u2.timeOffset, v2 = u2.initSegmentChange, m2 = l2.audioCodec, p2 = l2.videoCodec, y2 = l2.defaultInitPts, T2 = l2.duration, E2 = l2.initSegmentData, A2 = function(t4, e4) {
            var r3 = null;
            return t4.byteLength > 0 && null != e4 && null != e4.key && null !== e4.iv && null != e4.method && (r3 = e4), r3;
          }(s2, e3);
          if (A2 && "AES-128" === A2.method) {
            var k2 = this.getDecrypter();
            if (!k2.isSync())
              return this.decryptionPromise = k2.webCryptoDecrypt(s2, A2.key.buffer, A2.iv.buffer).then(function(t4) {
                var e4 = n2.push(t4, null, r2);
                return n2.decryptionPromise = null, e4;
              }), this.decryptionPromise;
            var b2 = k2.softwareDecrypt(s2, A2.key.buffer, A2.iv.buffer);
            if (r2.part > -1 && (b2 = k2.flush()), !b2)
              return a2.executeEnd = ji(), Zi(r2);
            s2 = new Uint8Array(b2);
          }
          var D2 = this.needsProbing(d2, c2);
          if (D2) {
            var I2 = this.configureTransmuxer(s2);
            if (I2)
              return w.warn("[transmuxer] " + I2.message), this.observer.emit(S.ERROR, S.ERROR, { type: L.MEDIA_ERROR, details: R.FRAG_PARSING_ERROR, fatal: false, error: I2, reason: I2.message }), a2.executeEnd = ji(), Zi(r2);
          }
          (d2 || c2 || v2 || D2) && this.resetInitSegment(E2, m2, p2, T2, e3), (d2 || v2 || D2) && this.resetInitialTimestamp(y2), h2 || this.resetContiguity();
          var C2 = this.transmux(s2, A2, g2, f2, r2), _2 = this.currentTransmuxState;
          return _2.contiguous = true, _2.discontinuity = false, _2.trackSwitch = false, a2.executeEnd = ji(), C2;
        }, e2.flush = function(t3) {
          var e3 = this, r2 = t3.transmuxing;
          r2.executeStart = ji();
          var i3 = this.decrypter, n2 = this.currentTransmuxState, a2 = this.decryptionPromise;
          if (a2)
            return a2.then(function() {
              return e3.flush(t3);
            });
          var s2 = [], o2 = n2.timeOffset;
          if (i3) {
            var l2 = i3.flush();
            l2 && s2.push(this.push(l2, null, t3));
          }
          var u2 = this.demuxer, h2 = this.remuxer;
          if (!u2 || !h2)
            return r2.executeEnd = ji(), [Zi(t3)];
          var d2 = u2.flush(o2);
          return tn(d2) ? d2.then(function(r3) {
            return e3.flushRemux(s2, r3, t3), s2;
          }) : (this.flushRemux(s2, d2, t3), s2);
        }, e2.flushRemux = function(t3, e3, r2) {
          var i3 = e3.audioTrack, n2 = e3.videoTrack, a2 = e3.id3Track, s2 = e3.textTrack, o2 = this.currentTransmuxState, l2 = o2.accurateTimeOffset, u2 = o2.timeOffset;
          w.log("[transmuxer.ts]: Flushed fragment " + r2.sn + (r2.part > -1 ? " p: " + r2.part : "") + " of level " + r2.level);
          var h2 = this.remuxer.remux(i3, n2, a2, s2, u2, l2, true, this.id);
          t3.push({ remuxResult: h2, chunkMeta: r2 }), r2.transmuxing.executeEnd = ji();
        }, e2.resetInitialTimestamp = function(t3) {
          var e3 = this.demuxer, r2 = this.remuxer;
          e3 && r2 && (e3.resetTimeStamp(t3), r2.resetTimeStamp(t3));
        }, e2.resetContiguity = function() {
          var t3 = this.demuxer, e3 = this.remuxer;
          t3 && e3 && (t3.resetContiguity(), e3.resetNextTimestamp());
        }, e2.resetInitSegment = function(t3, e3, r2, i3, n2) {
          var a2 = this.demuxer, s2 = this.remuxer;
          a2 && s2 && (a2.resetInitSegment(t3, e3, r2, i3), s2.resetInitSegment(t3, e3, r2, n2));
        }, e2.destroy = function() {
          this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
        }, e2.transmux = function(t3, e3, r2, i3, n2) {
          return e3 && "SAMPLE-AES" === e3.method ? this.transmuxSampleAes(t3, e3, r2, i3, n2) : this.transmuxUnencrypted(t3, r2, i3, n2);
        }, e2.transmuxUnencrypted = function(t3, e3, r2, i3) {
          var n2 = this.demuxer.demux(t3, e3, false, !this.config.progressive), a2 = n2.audioTrack, s2 = n2.videoTrack, o2 = n2.id3Track, l2 = n2.textTrack;
          return { remuxResult: this.remuxer.remux(a2, s2, o2, l2, e3, r2, false, this.id), chunkMeta: i3 };
        }, e2.transmuxSampleAes = function(t3, e3, r2, i3, n2) {
          var a2 = this;
          return this.demuxer.demuxSampleAes(t3, e3, r2).then(function(t4) {
            return { remuxResult: a2.remuxer.remux(t4.audioTrack, t4.videoTrack, t4.id3Track, t4.textTrack, r2, i3, false, a2.id), chunkMeta: n2 };
          });
        }, e2.configureTransmuxer = function(t3) {
          for (var e3, r2 = this.config, i3 = this.observer, n2 = this.typeSupported, a2 = this.vendor, s2 = 0, o2 = $i.length; s2 < o2; s2++)
            if ($i[s2].demux.probe(t3)) {
              e3 = $i[s2];
              break;
            }
          if (!e3)
            return new Error("Failed to find demuxer by probing fragment data");
          var l2 = this.demuxer, u2 = this.remuxer, h2 = e3.remux, d2 = e3.demux;
          u2 && u2 instanceof h2 || (this.remuxer = new h2(i3, r2, n2, a2)), l2 && l2 instanceof d2 || (this.demuxer = new d2(i3, r2, n2), this.probe = d2.probe);
        }, e2.needsProbing = function(t3, e3) {
          return !this.demuxer || !this.remuxer || t3 || e3;
        }, e2.getDecrypter = function() {
          var t3 = this.decrypter;
          return t3 || (t3 = this.decrypter = new Ur(this.config)), t3;
        }, t2;
      }(), Zi = function(t2) {
        return { remuxResult: {}, chunkMeta: t2 };
      };
      function tn(t2) {
        return "then" in t2 && t2.then instanceof Function;
      }
      var en = function(t2, e2, r2, i3, n2) {
        this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t2, this.videoCodec = e2, this.initSegmentData = r2, this.duration = i3, this.defaultInitPts = n2 || null;
      }, rn = function(t2, e2, r2, i3, n2, a2) {
        this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = t2, this.contiguous = e2, this.accurateTimeOffset = r2, this.trackSwitch = i3, this.timeOffset = n2, this.initSegmentChange = a2;
      }, nn = { exports: {} };
      !function(t2) {
        var e2 = Object.prototype.hasOwnProperty, r2 = "~";
        function i3() {
        }
        function n2(t3, e3, r3) {
          this.fn = t3, this.context = e3, this.once = r3 || false;
        }
        function a2(t3, e3, i4, a3, s3) {
          if ("function" != typeof i4)
            throw new TypeError("The listener must be a function");
          var o3 = new n2(i4, a3 || t3, s3), l2 = r2 ? r2 + e3 : e3;
          return t3._events[l2] ? t3._events[l2].fn ? t3._events[l2] = [t3._events[l2], o3] : t3._events[l2].push(o3) : (t3._events[l2] = o3, t3._eventsCount++), t3;
        }
        function s2(t3, e3) {
          0 == --t3._eventsCount ? t3._events = new i3() : delete t3._events[e3];
        }
        function o2() {
          this._events = new i3(), this._eventsCount = 0;
        }
        Object.create && (i3.prototype = /* @__PURE__ */ Object.create(null), new i3().__proto__ || (r2 = false)), o2.prototype.eventNames = function() {
          var t3, i4, n3 = [];
          if (0 === this._eventsCount)
            return n3;
          for (i4 in t3 = this._events)
            e2.call(t3, i4) && n3.push(r2 ? i4.slice(1) : i4);
          return Object.getOwnPropertySymbols ? n3.concat(Object.getOwnPropertySymbols(t3)) : n3;
        }, o2.prototype.listeners = function(t3) {
          var e3 = r2 ? r2 + t3 : t3, i4 = this._events[e3];
          if (!i4)
            return [];
          if (i4.fn)
            return [i4.fn];
          for (var n3 = 0, a3 = i4.length, s3 = new Array(a3); n3 < a3; n3++)
            s3[n3] = i4[n3].fn;
          return s3;
        }, o2.prototype.listenerCount = function(t3) {
          var e3 = r2 ? r2 + t3 : t3, i4 = this._events[e3];
          return i4 ? i4.fn ? 1 : i4.length : 0;
        }, o2.prototype.emit = function(t3, e3, i4, n3, a3, s3) {
          var o3 = r2 ? r2 + t3 : t3;
          if (!this._events[o3])
            return false;
          var l2, u2, h2 = this._events[o3], d2 = arguments.length;
          if (h2.fn) {
            switch (h2.once && this.removeListener(t3, h2.fn, void 0, true), d2) {
              case 1:
                return h2.fn.call(h2.context), true;
              case 2:
                return h2.fn.call(h2.context, e3), true;
              case 3:
                return h2.fn.call(h2.context, e3, i4), true;
              case 4:
                return h2.fn.call(h2.context, e3, i4, n3), true;
              case 5:
                return h2.fn.call(h2.context, e3, i4, n3, a3), true;
              case 6:
                return h2.fn.call(h2.context, e3, i4, n3, a3, s3), true;
            }
            for (u2 = 1, l2 = new Array(d2 - 1); u2 < d2; u2++)
              l2[u2 - 1] = arguments[u2];
            h2.fn.apply(h2.context, l2);
          } else {
            var c2, f2 = h2.length;
            for (u2 = 0; u2 < f2; u2++)
              switch (h2[u2].once && this.removeListener(t3, h2[u2].fn, void 0, true), d2) {
                case 1:
                  h2[u2].fn.call(h2[u2].context);
                  break;
                case 2:
                  h2[u2].fn.call(h2[u2].context, e3);
                  break;
                case 3:
                  h2[u2].fn.call(h2[u2].context, e3, i4);
                  break;
                case 4:
                  h2[u2].fn.call(h2[u2].context, e3, i4, n3);
                  break;
                default:
                  if (!l2)
                    for (c2 = 1, l2 = new Array(d2 - 1); c2 < d2; c2++)
                      l2[c2 - 1] = arguments[c2];
                  h2[u2].fn.apply(h2[u2].context, l2);
              }
          }
          return true;
        }, o2.prototype.on = function(t3, e3, r3) {
          return a2(this, t3, e3, r3, false);
        }, o2.prototype.once = function(t3, e3, r3) {
          return a2(this, t3, e3, r3, true);
        }, o2.prototype.removeListener = function(t3, e3, i4, n3) {
          var a3 = r2 ? r2 + t3 : t3;
          if (!this._events[a3])
            return this;
          if (!e3)
            return s2(this, a3), this;
          var o3 = this._events[a3];
          if (o3.fn)
            o3.fn !== e3 || n3 && !o3.once || i4 && o3.context !== i4 || s2(this, a3);
          else {
            for (var l2 = 0, u2 = [], h2 = o3.length; l2 < h2; l2++)
              (o3[l2].fn !== e3 || n3 && !o3[l2].once || i4 && o3[l2].context !== i4) && u2.push(o3[l2]);
            u2.length ? this._events[a3] = 1 === u2.length ? u2[0] : u2 : s2(this, a3);
          }
          return this;
        }, o2.prototype.removeAllListeners = function(t3) {
          var e3;
          return t3 ? (e3 = r2 ? r2 + t3 : t3, this._events[e3] && s2(this, e3)) : (this._events = new i3(), this._eventsCount = 0), this;
        }, o2.prototype.off = o2.prototype.removeListener, o2.prototype.addListener = o2.prototype.on, o2.prefixed = r2, o2.EventEmitter = o2, t2.exports = o2;
      }(nn);
      var an = p(nn.exports);
      function sn(t2, e2) {
        if (!((r2 = e2.remuxResult).audio || r2.video || r2.text || r2.id3 || r2.initSegment))
          return false;
        var r2, i3 = [], n2 = e2.remuxResult, a2 = n2.audio, s2 = n2.video;
        return a2 && on2(i3, a2), s2 && on2(i3, s2), t2.postMessage({ event: "transmuxComplete", data: e2 }, i3), true;
      }
      function on2(t2, e2) {
        e2.data1 && t2.push(e2.data1.buffer), e2.data2 && t2.push(e2.data2.buffer);
      }
      function ln(t2, e2, r2) {
        e2.reduce(function(e3, r3) {
          return sn(t2, r3) || e3;
        }, false) || t2.postMessage({ event: "transmuxComplete", data: e2[0] }), t2.postMessage({ event: "flush", data: r2 });
      }
      void 0 !== e && e && function(t2) {
        var e2 = new an(), r2 = function(e3, r3) {
          t2.postMessage({ event: e3, data: r3 });
        };
        e2.on(S.FRAG_DECRYPTED, r2), e2.on(S.ERROR, r2);
        var i3 = function() {
          var t3 = function(t4) {
            var e4 = function(e5) {
              r2("workerLog", { logType: t4, message: e5 });
            };
            w[t4] = e4;
          };
          for (var e3 in w)
            t3(e3);
        };
        t2.addEventListener("message", function(n2) {
          var a2 = n2.data;
          switch (a2.cmd) {
            case "init":
              var s2 = JSON.parse(a2.config);
              t2.transmuxer = new Ji(e2, a2.typeSupported, s2, a2.vendor, a2.id), I(s2.debug, a2.id), i3(), r2("init", null);
              break;
            case "configure":
              t2.transmuxer.configure(a2.config);
              break;
            case "demux":
              var o2 = t2.transmuxer.push(a2.data, a2.decryptdata, a2.chunkMeta, a2.state);
              tn(o2) ? (t2.transmuxer.async = true, o2.then(function(e3) {
                sn(t2, e3);
              }).catch(function(t3) {
                r2(S.ERROR, { type: L.MEDIA_ERROR, details: R.FRAG_PARSING_ERROR, chunkMeta: a2.chunkMeta, fatal: false, error: t3, err: t3, reason: "transmuxer-worker push error" });
              })) : (t2.transmuxer.async = false, sn(t2, o2));
              break;
            case "flush":
              var l2 = a2.chunkMeta, u2 = t2.transmuxer.flush(l2);
              tn(u2) || t2.transmuxer.async ? (tn(u2) || (u2 = Promise.resolve(u2)), u2.then(function(e3) {
                ln(t2, e3, l2);
              }).catch(function(t3) {
                r2(S.ERROR, { type: L.MEDIA_ERROR, details: R.FRAG_PARSING_ERROR, chunkMeta: a2.chunkMeta, fatal: false, error: t3, err: t3, reason: "transmuxer-worker flush error" });
              })) : ln(t2, u2, l2);
          }
        });
      }(self);
      var un = qt() || { isTypeSupported: function() {
        return false;
      } }, hn = function() {
        function e2(e3, r3, i3, n2) {
          var a2 = this;
          this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
          var s2 = e3.config;
          this.hls = e3, this.id = r3, this.useWorker = !!s2.enableWorker, this.onTransmuxComplete = i3, this.onFlush = n2;
          var o2 = function(t2, e4) {
            (e4 = e4 || {}).frag = a2.frag, e4.id = a2.id, t2 === S.ERROR && (a2.error = e4.error), a2.hls.trigger(t2, e4);
          };
          this.observer = new an(), this.observer.on(S.FRAG_DECRYPTED, o2), this.observer.on(S.ERROR, o2);
          var l2, u2, h2, d2, c2 = { mp4: un.isTypeSupported("video/mp4"), mpeg: un.isTypeSupported("audio/mpeg"), mp3: un.isTypeSupported('audio/mp4; codecs="mp3"') }, f2 = navigator.vendor;
          if (!this.useWorker || "undefined" == typeof Worker || (s2.workerPath, 0))
            this.transmuxer = new Ji(this.observer, c2, s2, f2, r3);
          else
            try {
              s2.workerPath ? (w.log("loading Web Worker " + s2.workerPath + ' for "' + r3 + '"'), this.workerContext = (h2 = s2.workerPath, d2 = new self.URL(h2, self.location.href).href, { worker: new self.Worker(d2), scriptURL: d2 })) : (w.log('injecting Web Worker for "' + r3 + '"'), this.workerContext = (l2 = new self.Blob(["var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(" + t.toString() + ")(true);"], { type: "text/javascript" }), u2 = self.URL.createObjectURL(l2), { worker: new self.Worker(u2), objectURL: u2 })), this.onwmsg = function(t2) {
                return a2.onWorkerMessage(t2);
              };
              var g2 = this.workerContext.worker;
              g2.addEventListener("message", this.onwmsg), g2.onerror = function(t2) {
                var e4 = new Error(t2.message + "  (" + t2.filename + ":" + t2.lineno + ")");
                s2.enableWorker = false, w.warn('Error in "' + r3 + '" Web Worker, fallback to inline'), a2.hls.trigger(S.ERROR, { type: L.OTHER_ERROR, details: R.INTERNAL_EXCEPTION, fatal: false, event: "demuxerWorker", error: e4 });
              }, g2.postMessage({ cmd: "init", typeSupported: c2, vendor: f2, id: r3, config: JSON.stringify(s2) });
            } catch (t2) {
              w.warn('Error setting up "' + r3 + '" Web Worker, fallback to inline', t2), this.resetWorker(), this.error = null, this.transmuxer = new Ji(this.observer, c2, s2, f2, r3);
            }
        }
        var r2 = e2.prototype;
        return r2.resetWorker = function() {
          if (this.workerContext) {
            var t2 = this.workerContext, e3 = t2.worker, r3 = t2.objectURL;
            r3 && self.URL.revokeObjectURL(r3), e3.removeEventListener("message", this.onwmsg), e3.onerror = null, e3.terminate(), this.workerContext = null;
          }
        }, r2.destroy = function() {
          if (this.workerContext)
            this.resetWorker(), this.onwmsg = void 0;
          else {
            var t2 = this.transmuxer;
            t2 && (t2.destroy(), this.transmuxer = null);
          }
          var e3 = this.observer;
          e3 && e3.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null;
        }, r2.push = function(t2, e3, r3, i3, n2, a2, s2, o2, l2, u2) {
          var h2, d2, c2 = this;
          l2.transmuxing.start = self.performance.now();
          var f2 = this.transmuxer, g2 = a2 ? a2.start : n2.start, v2 = n2.decryptdata, m2 = this.frag, p2 = !(m2 && n2.cc === m2.cc), y2 = !(m2 && l2.level === m2.level), T2 = m2 ? l2.sn - m2.sn : -1, E2 = this.part ? l2.part - this.part.index : -1, S2 = 0 === T2 && l2.id > 1 && l2.id === (null == m2 ? void 0 : m2.stats.chunkCount), L2 = !y2 && (1 === T2 || 0 === T2 && (1 === E2 || S2 && E2 <= 0)), R2 = self.performance.now();
          (y2 || T2 || 0 === n2.stats.parsing.start) && (n2.stats.parsing.start = R2), !a2 || !E2 && L2 || (a2.stats.parsing.start = R2);
          var A2 = !(m2 && (null == (h2 = n2.initSegment) ? void 0 : h2.url) === (null == (d2 = m2.initSegment) ? void 0 : d2.url)), k2 = new rn(p2, L2, o2, y2, g2, A2);
          if (!L2 || p2 || A2) {
            w.log("[transmuxer-interface, " + n2.type + "]: Starting new transmux session for sn: " + l2.sn + " p: " + l2.part + " level: " + l2.level + " id: " + l2.id + "\n        discontinuity: " + p2 + "\n        trackSwitch: " + y2 + "\n        contiguous: " + L2 + "\n        accurateTimeOffset: " + o2 + "\n        timeOffset: " + g2 + "\n        initSegmentChange: " + A2);
            var b2 = new en(r3, i3, e3, s2, u2);
            this.configureTransmuxer(b2);
          }
          if (this.frag = n2, this.part = a2, this.workerContext)
            this.workerContext.worker.postMessage({ cmd: "demux", data: t2, decryptdata: v2, chunkMeta: l2, state: k2 }, t2 instanceof ArrayBuffer ? [t2] : []);
          else if (f2) {
            var D2 = f2.push(t2, v2, l2, k2);
            tn(D2) ? (f2.async = true, D2.then(function(t3) {
              c2.handleTransmuxComplete(t3);
            }).catch(function(t3) {
              c2.transmuxerError(t3, l2, "transmuxer-interface push error");
            })) : (f2.async = false, this.handleTransmuxComplete(D2));
          }
        }, r2.flush = function(t2) {
          var e3 = this;
          t2.transmuxing.start = self.performance.now();
          var r3 = this.transmuxer;
          if (this.workerContext)
            this.workerContext.worker.postMessage({ cmd: "flush", chunkMeta: t2 });
          else if (r3) {
            var i3 = r3.flush(t2);
            tn(i3) || r3.async ? (tn(i3) || (i3 = Promise.resolve(i3)), i3.then(function(r4) {
              e3.handleFlushResult(r4, t2);
            }).catch(function(r4) {
              e3.transmuxerError(r4, t2, "transmuxer-interface flush error");
            })) : this.handleFlushResult(i3, t2);
          }
        }, r2.transmuxerError = function(t2, e3, r3) {
          this.hls && (this.error = t2, this.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.FRAG_PARSING_ERROR, chunkMeta: e3, fatal: false, error: t2, err: t2, reason: r3 }));
        }, r2.handleFlushResult = function(t2, e3) {
          var r3 = this;
          t2.forEach(function(t3) {
            r3.handleTransmuxComplete(t3);
          }), this.onFlush(e3);
        }, r2.onWorkerMessage = function(t2) {
          var e3 = t2.data, r3 = this.hls;
          switch (e3.event) {
            case "init":
              var i3, n2 = null == (i3 = this.workerContext) ? void 0 : i3.objectURL;
              n2 && self.URL.revokeObjectURL(n2);
              break;
            case "transmuxComplete":
              this.handleTransmuxComplete(e3.data);
              break;
            case "flush":
              this.onFlush(e3.data);
              break;
            case "workerLog":
              w[e3.data.logType] && w[e3.data.logType](e3.data.message);
              break;
            default:
              e3.data = e3.data || {}, e3.data.frag = this.frag, e3.data.id = this.id, r3.trigger(e3.event, e3.data);
          }
        }, r2.configureTransmuxer = function(t2) {
          var e3 = this.transmuxer;
          this.workerContext ? this.workerContext.worker.postMessage({ cmd: "configure", config: t2 }) : e3 && e3.configure(t2);
        }, r2.handleTransmuxComplete = function(t2) {
          t2.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t2);
        }, e2;
      }(), dn = function() {
        function t2(t3, e3, r2, i3) {
          this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = false, this.stalled = null, this.moved = false, this.seeking = false, this.config = t3, this.media = e3, this.fragmentTracker = r2, this.hls = i3;
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
          this.media = null, this.hls = this.fragmentTracker = null;
        }, e2.poll = function(t3, e3) {
          var r2 = this.config, i3 = this.media, n2 = this.stalled;
          if (null !== i3) {
            var a2 = i3.currentTime, s2 = i3.seeking, o2 = this.seeking && !s2, l2 = !this.seeking && s2;
            if (this.seeking = s2, a2 === t3) {
              if (l2 || o2)
                this.stalled = null;
              else if (!(i3.paused && !s2 || i3.ended || 0 === i3.playbackRate) && Ir.getBuffered(i3).length) {
                var u2 = Ir.bufferInfo(i3, a2, 0), h2 = u2.len > 0, d2 = u2.nextStart || 0;
                if (h2 || d2) {
                  if (s2) {
                    var c2 = u2.len > 2, f2 = !d2 || e3 && e3.start <= a2 || d2 - a2 > 2 && !this.fragmentTracker.getPartialFragment(a2);
                    if (c2 || f2)
                      return;
                    this.moved = false;
                  }
                  if (!this.moved && null !== this.stalled) {
                    var g2, v2 = Math.max(d2, u2.start || 0) - a2, m2 = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, p2 = (null == m2 || null == (g2 = m2.details) ? void 0 : g2.live) ? 2 * m2.details.targetduration : 2, y2 = this.fragmentTracker.getPartialFragment(a2);
                    if (v2 > 0 && (v2 <= p2 || y2))
                      return void this._trySkipBufferHole(y2);
                  }
                  var T2 = self.performance.now();
                  if (null !== n2) {
                    var E2 = T2 - n2;
                    if (s2 || !(E2 >= 250) || (this._reportStall(u2), this.media)) {
                      var S2 = Ir.bufferInfo(i3, a2, r2.maxBufferHole);
                      this._tryFixBufferStall(S2, E2);
                    }
                  } else
                    this.stalled = T2;
                }
              }
            } else if (this.moved = true, null !== n2) {
              if (this.stallReported) {
                var L2 = self.performance.now() - n2;
                w.warn("playback not stuck anymore @" + a2 + ", after " + Math.round(L2) + "ms"), this.stallReported = false;
              }
              this.stalled = null, this.nudgeRetry = 0;
            }
          }
        }, e2._tryFixBufferStall = function(t3, e3) {
          var r2 = this.config, i3 = this.fragmentTracker, n2 = this.media;
          if (null !== n2) {
            var a2 = n2.currentTime, s2 = i3.getPartialFragment(a2);
            if (s2 && (this._trySkipBufferHole(s2) || !this.media))
              return;
            (t3.len > r2.maxBufferHole || t3.nextStart && t3.nextStart - a2 < r2.maxBufferHole) && e3 > 1e3 * r2.highBufferWatchdogPeriod && (w.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
          }
        }, e2._reportStall = function(t3) {
          var e3 = this.hls, r2 = this.media;
          if (!this.stallReported && r2) {
            this.stallReported = true;
            var i3 = new Error("Playback stalling at @" + r2.currentTime + " due to low buffer (" + JSON.stringify(t3) + ")");
            w.warn(i3.message), e3.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.BUFFER_STALLED_ERROR, fatal: false, error: i3, buffer: t3.len });
          }
        }, e2._trySkipBufferHole = function(t3) {
          var e3 = this.config, r2 = this.hls, i3 = this.media;
          if (null === i3)
            return 0;
          var n2 = i3.currentTime, a2 = Ir.bufferInfo(i3, n2, 0), s2 = n2 < a2.start ? a2.start : a2.nextStart;
          if (s2) {
            var o2 = a2.len <= e3.maxBufferHole, l2 = a2.len > 0 && a2.len < 1 && i3.readyState < 3, u2 = s2 - n2;
            if (u2 > 0 && (o2 || l2)) {
              if (u2 > e3.maxBufferHole) {
                var h2 = this.fragmentTracker, d2 = false;
                if (0 === n2) {
                  var c2 = h2.getAppendedFrag(0, ge);
                  c2 && s2 < c2.end && (d2 = true);
                }
                if (!d2) {
                  var f2 = t3 || h2.getAppendedFrag(n2, ge);
                  if (f2) {
                    for (var g2 = false, v2 = f2.end; v2 < s2; ) {
                      var m2 = h2.getPartialFragment(v2);
                      if (!m2) {
                        g2 = true;
                        break;
                      }
                      v2 += m2.duration;
                    }
                    if (g2)
                      return 0;
                  }
                }
              }
              var p2 = Math.max(s2 + 0.05, n2 + 0.1);
              if (w.warn("skipping hole, adjusting currentTime from " + n2 + " to " + p2), this.moved = true, this.stalled = null, i3.currentTime = p2, t3 && !t3.gap) {
                var y2 = new Error("fragment loaded with buffer holes, seeking from " + n2 + " to " + p2);
                r2.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.BUFFER_SEEK_OVER_HOLE, fatal: false, error: y2, reason: y2.message, frag: t3 });
              }
              return p2;
            }
          }
          return 0;
        }, e2._tryNudgeBuffer = function() {
          var t3 = this.config, e3 = this.hls, r2 = this.media, i3 = this.nudgeRetry;
          if (null !== r2) {
            var n2 = r2.currentTime;
            if (this.nudgeRetry++, i3 < t3.nudgeMaxRetry) {
              var a2 = n2 + (i3 + 1) * t3.nudgeOffset, s2 = new Error("Nudging 'currentTime' from " + n2 + " to " + a2);
              w.warn(s2.message), r2.currentTime = a2, e3.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.BUFFER_NUDGE_ON_STALL, error: s2, fatal: false });
            } else {
              var o2 = new Error("Playhead still not moving while enough data buffered @" + n2 + " after " + t3.nudgeMaxRetry + " nudges");
              w.error(o2.message), e3.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.BUFFER_STALLED_ERROR, error: o2, fatal: true });
            }
          }
        }, t2;
      }(), cn = function(t2) {
        function e2(e3, r3, i3) {
          var n2;
          return (n2 = t2.call(this, e3, r3, i3, "[stream-controller]", ge) || this).audioCodecSwap = false, n2.gapController = null, n2.level = -1, n2._forceStartLoad = false, n2.altAudio = false, n2.audioOnly = false, n2.fragPlaying = null, n2.onvplaying = null, n2.onvseeked = null, n2.fragLastKbps = 0, n2.couldBacktrack = false, n2.backtrackFragment = null, n2.audioCodecSwitch = false, n2.videoBuffer = null, n2._registerListeners(), n2;
        }
        l(e2, t2);
        var r2 = e2.prototype;
        return r2._registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.LEVEL_LOADING, this.onLevelLoading, this), t3.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.on(S.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t3.on(S.ERROR, this.onError, this), t3.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t3.on(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t3.on(S.BUFFER_CREATED, this.onBufferCreated, this), t3.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t3.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.on(S.FRAG_BUFFERED, this.onFragBuffered, this);
        }, r2._unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.off(S.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t3.off(S.ERROR, this.onError, this), t3.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t3.off(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t3.off(S.BUFFER_CREATED, this.onBufferCreated, this), t3.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t3.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.off(S.FRAG_BUFFERED, this.onFragBuffered, this);
        }, r2.onHandlerDestroying = function() {
          this._unregisterListeners(), this.onMediaDetaching();
        }, r2.startLoad = function(t3) {
          if (this.levels) {
            var e3 = this.lastCurrentTime, r3 = this.hls;
            if (this.stopLoad(), this.setInterval(100), this.level = -1, !this.startFragRequested) {
              var i3 = r3.startLevel;
              -1 === i3 && (r3.config.testBandwidth && this.levels.length > 1 ? (i3 = 0, this.bitrateTest = true) : i3 = r3.nextAutoLevel), this.level = r3.nextLoadLevel = i3, this.loadedmetadata = false;
            }
            e3 > 0 && -1 === t3 && (this.log("Override startPosition with lastCurrentTime @" + e3.toFixed(3)), t3 = e3), this.state = Kr, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t3, this.tick();
          } else
            this._forceStartLoad = true, this.state = Gr;
        }, r2.stopLoad = function() {
          this._forceStartLoad = false, t2.prototype.stopLoad.call(this);
        }, r2.doTick = function() {
          switch (this.state) {
            case $r:
              var t3, e3 = this.levels, r3 = this.level, i3 = null == e3 || null == (t3 = e3[r3]) ? void 0 : t3.details;
              if (i3 && (!i3.live || this.levelLastLoaded === this.level)) {
                if (this.waitForCdnTuneIn(i3))
                  break;
                this.state = Kr;
                break;
              }
              if (this.hls.nextLoadLevel !== this.level) {
                this.state = Kr;
                break;
              }
              break;
            case Yr:
              var n2, a2 = self.performance.now(), s2 = this.retryDate;
              (!s2 || a2 >= s2 || null != (n2 = this.media) && n2.seeking) && (this.resetStartWhenNotLoaded(this.level), this.state = Kr);
          }
          this.state === Kr && this.doTickIdle(), this.onTickEnd();
        }, r2.onTickEnd = function() {
          t2.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
        }, r2.doTickIdle = function() {
          var t3 = this.hls, e3 = this.levelLastLoaded, r3 = this.levels, i3 = this.media, n2 = t3.config, a2 = t3.nextLoadLevel;
          if (null !== e3 && (i3 || !this.startFragRequested && n2.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && null != r3 && r3[a2]) {
            var s2 = r3[a2], o2 = this.getMainFwdBufferInfo();
            if (null !== o2) {
              var l2 = this.getLevelDetails();
              if (l2 && this._streamEnded(o2, l2)) {
                var u2 = {};
                return this.altAudio && (u2.type = "video"), this.hls.trigger(S.BUFFER_EOS, u2), void (this.state = Xr);
              }
              t3.loadLevel !== a2 && -1 === t3.manualLevel && this.log("Adapting to level " + a2 + " from level " + this.level), this.level = t3.nextLoadLevel = a2;
              var h2 = s2.details;
              if (!h2 || this.state === $r || h2.live && this.levelLastLoaded !== a2)
                return this.level = a2, void (this.state = $r);
              var d2 = o2.len, c2 = this.getMaxBufferLength(s2.maxBitrate);
              if (!(d2 >= c2)) {
                this.backtrackFragment && this.backtrackFragment.start > o2.end && (this.backtrackFragment = null);
                var f2 = this.backtrackFragment ? this.backtrackFragment.start : o2.end, g2 = this.getNextFragment(f2, h2);
                if (this.couldBacktrack && !this.fragPrevious && g2 && "initSegment" !== g2.sn && this.fragmentTracker.getState(g2) !== mr) {
                  var v2, m2 = (null != (v2 = this.backtrackFragment) ? v2 : g2).sn - h2.startSN, p2 = h2.fragments[m2 - 1];
                  p2 && g2.cc === p2.cc && (g2 = p2, this.fragmentTracker.removeFragment(p2));
                } else
                  this.backtrackFragment && o2.len && (this.backtrackFragment = null);
                if (g2 && this.isLoopLoading(g2, f2)) {
                  if (!g2.gap) {
                    var y2 = this.audioOnly && !this.altAudio ? O : N, T2 = (y2 === N ? this.videoBuffer : this.mediaBuffer) || this.media;
                    T2 && this.afterBufferFlushed(T2, y2, ge);
                  }
                  g2 = this.getNextFragmentLoopLoading(g2, h2, o2, ge, c2);
                }
                g2 && (!g2.initSegment || g2.initSegment.data || this.bitrateTest || (g2 = g2.initSegment), this.loadFragment(g2, s2, f2));
              }
            }
          }
        }, r2.loadFragment = function(e3, r3, i3) {
          var n2 = this.fragmentTracker.getState(e3);
          this.fragCurrent = e3, n2 === fr || n2 === vr ? "initSegment" === e3.sn ? this._loadInitSegment(e3, r3) : this.bitrateTest ? (this.log("Fragment " + e3.sn + " of level " + e3.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e3, r3)) : (this.startFragRequested = true, t2.prototype.loadFragment.call(this, e3, r3, i3)) : this.clearTrackerIfNeeded(e3);
        }, r2.getBufferedFrag = function(t3) {
          return this.fragmentTracker.getBufferedFrag(t3, ge);
        }, r2.followingBufferedFrag = function(t3) {
          return t3 ? this.getBufferedFrag(t3.end + 0.5) : null;
        }, r2.immediateLevelSwitch = function() {
          this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
        }, r2.nextLevelSwitch = function() {
          var t3 = this.levels, e3 = this.media;
          if (null != e3 && e3.readyState) {
            var r3, i3 = this.getAppendedFrag(e3.currentTime);
            i3 && i3.start > 1 && this.flushMainBuffer(0, i3.start - 1);
            var n2 = this.getLevelDetails();
            if (null != n2 && n2.live) {
              var a2 = this.getMainFwdBufferInfo();
              if (!a2 || a2.len < 2 * n2.targetduration)
                return;
            }
            if (!e3.paused && t3) {
              var s2 = t3[this.hls.nextLoadLevel], o2 = this.fragLastKbps;
              r3 = o2 && this.fragCurrent ? this.fragCurrent.duration * s2.maxBitrate / (1e3 * o2) + 1 : 0;
            } else
              r3 = 0;
            var l2 = this.getBufferedFrag(e3.currentTime + r3);
            if (l2) {
              var u2 = this.followingBufferedFrag(l2);
              if (u2) {
                this.abortCurrentFrag();
                var h2 = u2.maxStartPTS ? u2.maxStartPTS : u2.start, d2 = u2.duration, c2 = Math.max(l2.end, h2 + Math.min(Math.max(d2 - this.config.maxFragLookUpTolerance, 0.5 * d2), 0.75 * d2));
                this.flushMainBuffer(c2, Number.POSITIVE_INFINITY);
              }
            }
          }
        }, r2.abortCurrentFrag = function() {
          var t3 = this.fragCurrent;
          switch (this.fragCurrent = null, this.backtrackFragment = null, t3 && (t3.abortRequests(), this.fragmentTracker.removeFragment(t3)), this.state) {
            case Hr:
            case Vr:
            case Yr:
            case jr:
            case qr:
              this.state = Kr;
          }
          this.nextLoadPosition = this.getLoadPosition();
        }, r2.flushMainBuffer = function(e3, r3) {
          t2.prototype.flushMainBuffer.call(this, e3, r3, this.altAudio ? "video" : null);
        }, r2.onMediaAttached = function(e3, r3) {
          t2.prototype.onMediaAttached.call(this, e3, r3);
          var i3 = r3.media;
          this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i3.addEventListener("playing", this.onvplaying), i3.addEventListener("seeked", this.onvseeked), this.gapController = new dn(this.config, i3, this.fragmentTracker, this.hls);
        }, r2.onMediaDetaching = function() {
          var e3 = this.media;
          e3 && this.onvplaying && this.onvseeked && (e3.removeEventListener("playing", this.onvplaying), e3.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), t2.prototype.onMediaDetaching.call(this);
        }, r2.onMediaPlaying = function() {
          this.tick();
        }, r2.onMediaSeeked = function() {
          var t3 = this.media, e3 = t3 ? t3.currentTime : null;
          E(e3) && this.log("Media seeked to " + e3.toFixed(3));
          var r3 = this.getMainFwdBufferInfo();
          null !== r3 && 0 !== r3.len ? this.tick() : this.warn('Main forward buffer length on "seeked" event ' + (r3 ? r3.len : "empty") + ")");
        }, r2.onManifestLoading = function() {
          this.log("Trigger BUFFER_RESET"), this.hls.trigger(S.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = false, this.startPosition = this.lastCurrentTime = 0, this.levels = this.fragPlaying = this.backtrackFragment = null, this.altAudio = this.audioOnly = false;
        }, r2.onManifestParsed = function(t3, e3) {
          var r3, i3, n2, a2 = false, s2 = false;
          e3.levels.forEach(function(t4) {
            (r3 = t4.audioCodec) && (-1 !== r3.indexOf("mp4a.40.2") && (a2 = true), -1 !== r3.indexOf("mp4a.40.5") && (s2 = true));
          }), this.audioCodecSwitch = a2 && s2 && !("function" == typeof (null == (n2 = Zr()) || null == (i3 = n2.prototype) ? void 0 : i3.changeType)), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e3.levels, this.startFragRequested = false;
        }, r2.onLevelLoading = function(t3, e3) {
          var r3 = this.levels;
          if (r3 && this.state === Kr) {
            var i3 = r3[e3.level];
            (!i3.details || i3.details.live && this.levelLastLoaded !== e3.level || this.waitForCdnTuneIn(i3.details)) && (this.state = $r);
          }
        }, r2.onLevelLoaded = function(t3, e3) {
          var r3, i3 = this.levels, n2 = e3.level, a2 = e3.details, s2 = a2.totalduration;
          if (i3) {
            this.log("Level " + n2 + " loaded [" + a2.startSN + "," + a2.endSN + "]" + (a2.lastPartSn ? "[part-" + a2.lastPartSn + "-" + a2.lastPartIndex + "]" : "") + ", cc [" + a2.startCC + ", " + a2.endCC + "] duration:" + s2);
            var o2 = i3[n2], l2 = this.fragCurrent;
            !l2 || this.state !== Vr && this.state !== Yr || l2.level === e3.level && l2.urlId === o2.urlId || !l2.loader || this.abortCurrentFrag();
            var u2 = 0;
            if (a2.live || null != (r3 = o2.details) && r3.live) {
              if (a2.fragments[0] || (a2.deltaUpdateFailed = true), a2.deltaUpdateFailed)
                return;
              u2 = this.alignPlaylists(a2, o2.details);
            }
            if (o2.details = a2, this.levelLastLoaded = n2, this.hls.trigger(S.LEVEL_UPDATED, { details: a2, level: n2 }), this.state === $r) {
              if (this.waitForCdnTuneIn(a2))
                return;
              this.state = Kr;
            }
            this.startFragRequested ? a2.live && this.synchronizeToLiveEdge(a2) : this.setStartPosition(a2, u2), this.tick();
          } else
            this.warn("Levels were reset while loading level " + n2);
        }, r2._handleFragmentLoadProgress = function(t3) {
          var e3, r3 = t3.frag, i3 = t3.part, n2 = t3.payload, a2 = this.levels;
          if (a2) {
            var s2 = a2[r3.level], o2 = s2.details;
            if (!o2)
              return this.warn("Dropping fragment " + r3.sn + " of level " + r3.level + " after level details were reset"), void this.fragmentTracker.removeFragment(r3);
            var l2 = s2.videoCodec, u2 = o2.PTSKnown || !o2.live, h2 = null == (e3 = r3.initSegment) ? void 0 : e3.data, d2 = this._getAudioCodec(s2), c2 = this.transmuxer = this.transmuxer || new hn(this.hls, ge, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), f2 = i3 ? i3.index : -1, g2 = -1 !== f2, v2 = new wr(r3.level, r3.sn, r3.stats.chunkCount, n2.byteLength, f2, g2), m2 = this.initPTS[r3.cc];
            c2.push(n2, h2, d2, l2, r3, i3, o2.totalduration, u2, v2, m2);
          } else
            this.warn("Levels were reset while fragment load was in progress. Fragment " + r3.sn + " of level " + r3.level + " will not be buffered");
        }, r2.onAudioTrackSwitching = function(t3, e3) {
          var r3 = this.altAudio;
          if (!e3.url) {
            if (this.mediaBuffer !== this.media) {
              this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
              var i3 = this.fragCurrent;
              i3 && (this.log("Switching to main audio track, cancel main fragment load"), i3.abortRequests(), this.fragmentTracker.removeFragment(i3)), this.resetTransmuxer(), this.resetLoadingState();
            } else
              this.audioOnly && this.resetTransmuxer();
            var n2 = this.hls;
            r3 && (n2.trigger(S.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: null }), this.fragmentTracker.removeAllFragments()), n2.trigger(S.AUDIO_TRACK_SWITCHED, e3);
          }
        }, r2.onAudioTrackSwitched = function(t3, e3) {
          var r3 = e3.id, i3 = !!this.hls.audioTracks[r3].url;
          if (i3) {
            var n2 = this.videoBuffer;
            n2 && this.mediaBuffer !== n2 && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n2);
          }
          this.altAudio = i3, this.tick();
        }, r2.onBufferCreated = function(t3, e3) {
          var r3, i3, n2 = e3.tracks, a2 = false;
          for (var s2 in n2) {
            var o2 = n2[s2];
            if ("main" === o2.id) {
              if (i3 = s2, r3 = o2, "video" === s2) {
                var l2 = n2[s2];
                l2 && (this.videoBuffer = l2.buffer);
              }
            } else
              a2 = true;
          }
          a2 && r3 ? (this.log("Alternate track found, use " + i3 + ".buffered to schedule main fragment loading"), this.mediaBuffer = r3.buffer) : this.mediaBuffer = this.media;
        }, r2.onFragBuffered = function(t3, e3) {
          var r3 = e3.frag, i3 = e3.part;
          if (!r3 || r3.type === ge) {
            if (this.fragContextChanged(r3))
              return this.warn("Fragment " + r3.sn + (i3 ? " p: " + i3.index : "") + " of level " + r3.level + " finished buffering, but was aborted. state: " + this.state), void (this.state === qr && (this.state = Kr));
            var n2 = i3 ? i3.stats : r3.stats;
            this.fragLastKbps = Math.round(8 * n2.total / (n2.buffering.end - n2.loading.first)), "initSegment" !== r3.sn && (this.fragPrevious = r3), this.fragBufferedComplete(r3, i3);
          }
        }, r2.onError = function(t3, e3) {
          var r3;
          if (e3.fatal)
            this.state = zr;
          else
            switch (e3.details) {
              case R.FRAG_GAP:
              case R.FRAG_PARSING_ERROR:
              case R.FRAG_DECRYPT_ERROR:
              case R.FRAG_LOAD_ERROR:
              case R.FRAG_LOAD_TIMEOUT:
              case R.KEY_LOAD_ERROR:
              case R.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(ge, e3);
                break;
              case R.LEVEL_LOAD_ERROR:
              case R.LEVEL_LOAD_TIMEOUT:
              case R.LEVEL_PARSING_ERROR:
                e3.levelRetry || this.state !== $r || (null == (r3 = e3.context) ? void 0 : r3.type) !== de || (this.state = Kr);
                break;
              case R.BUFFER_FULL_ERROR:
                if (!e3.parent || "main" !== e3.parent)
                  return;
                this.reduceLengthAndFlushBuffer(e3) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                break;
              case R.INTERNAL_EXCEPTION:
                this.recoverWorkerError(e3);
            }
        }, r2.checkBuffer = function() {
          var t3 = this.media, e3 = this.gapController;
          if (t3 && e3 && t3.readyState) {
            if (this.loadedmetadata || !Ir.getBuffered(t3).length) {
              var r3 = this.state !== Kr ? this.fragCurrent : null;
              e3.poll(this.lastCurrentTime, r3);
            }
            this.lastCurrentTime = t3.currentTime;
          }
        }, r2.onFragLoadEmergencyAborted = function() {
          this.state = Kr, this.loadedmetadata || (this.startFragRequested = false, this.nextLoadPosition = this.startPosition), this.tickImmediate();
        }, r2.onBufferFlushed = function(t3, e3) {
          var r3 = e3.type;
          if (r3 !== O || this.audioOnly && !this.altAudio) {
            var i3 = (r3 === N ? this.videoBuffer : this.mediaBuffer) || this.media;
            this.afterBufferFlushed(i3, r3, ge);
          }
        }, r2.onLevelsUpdated = function(t3, e3) {
          this.levels = e3.levels;
        }, r2.swapAudioCodec = function() {
          this.audioCodecSwap = !this.audioCodecSwap;
        }, r2.seekToStartPos = function() {
          var t3 = this.media;
          if (t3) {
            var e3 = t3.currentTime, r3 = this.startPosition;
            if (r3 >= 0 && e3 < r3) {
              if (t3.seeking)
                return void this.log("could not seek to " + r3 + ", already seeking at " + e3);
              var i3 = Ir.getBuffered(t3), n2 = (i3.length ? i3.start(0) : 0) - r3;
              n2 > 0 && (n2 < this.config.maxBufferHole || n2 < this.config.maxFragLookUpTolerance) && (this.log("adjusting start position by " + n2 + " to match buffer start"), r3 += n2, this.startPosition = r3), this.log("seek to target start position " + r3 + " from current time " + e3), t3.currentTime = r3;
            }
          }
        }, r2._getAudioCodec = function(t3) {
          var e3 = this.config.defaultAudioCodec || t3.audioCodec;
          return this.audioCodecSwap && e3 && (this.log("Swapping audio codec"), e3 = -1 !== e3.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), e3;
        }, r2._loadBitrateTestFrag = function(t3, e3) {
          var r3 = this;
          t3.bitrateTest = true, this._doFragLoad(t3, e3).then(function(i3) {
            var n2 = r3.hls;
            if (i3 && !r3.fragContextChanged(t3)) {
              e3.fragmentError = 0, r3.state = Kr, r3.startFragRequested = false, r3.bitrateTest = false;
              var a2 = t3.stats;
              a2.parsing.start = a2.parsing.end = a2.buffering.start = a2.buffering.end = self.performance.now(), n2.trigger(S.FRAG_LOADED, i3), t3.bitrateTest = false;
            }
          });
        }, r2._handleTransmuxComplete = function(t3) {
          var e3, r3 = "main", i3 = this.hls, n2 = t3.remuxResult, a2 = t3.chunkMeta, s2 = this.getCurrentContext(a2);
          if (s2) {
            var o2 = s2.frag, l2 = s2.part, u2 = s2.level, h2 = n2.video, d2 = n2.text, c2 = n2.id3, f2 = n2.initSegment, g2 = u2.details, v2 = this.altAudio ? void 0 : n2.audio;
            if (this.fragContextChanged(o2))
              this.fragmentTracker.removeFragment(o2);
            else {
              if (this.state = jr, f2) {
                if (null != f2 && f2.tracks) {
                  var m2 = o2.initSegment || o2;
                  this._bufferInitSegment(u2, f2.tracks, m2, a2), i3.trigger(S.FRAG_PARSING_INIT_SEGMENT, { frag: m2, id: r3, tracks: f2.tracks });
                }
                var p2 = f2.initPTS, y2 = f2.timescale;
                E(p2) && (this.initPTS[o2.cc] = { baseTime: p2, timescale: y2 }, i3.trigger(S.INIT_PTS_FOUND, { frag: o2, id: r3, initPTS: p2, timescale: y2 }));
              }
              if (h2 && g2 && "initSegment" !== o2.sn) {
                var T2 = g2.fragments[o2.sn - 1 - g2.startSN], L2 = o2.sn === g2.startSN, R2 = !T2 || o2.cc > T2.cc;
                if (false !== n2.independent) {
                  var A2 = h2.startPTS, k2 = h2.endPTS, b2 = h2.startDTS, D2 = h2.endDTS;
                  if (l2)
                    l2.elementaryStreams[h2.type] = { startPTS: A2, endPTS: k2, startDTS: b2, endDTS: D2 };
                  else if (h2.firstKeyFrame && h2.independent && 1 === a2.id && !R2 && (this.couldBacktrack = true), h2.dropped && h2.independent) {
                    var I2 = this.getMainFwdBufferInfo(), w2 = (I2 ? I2.end : this.getLoadPosition()) + this.config.maxBufferHole, C2 = h2.firstKeyFramePTS ? h2.firstKeyFramePTS : A2;
                    if (!L2 && w2 < C2 - this.config.maxBufferHole && !R2)
                      return void this.backtrack(o2);
                    R2 && (o2.gap = true), o2.setElementaryStreamInfo(h2.type, o2.start, k2, o2.start, D2, true);
                  }
                  o2.setElementaryStreamInfo(h2.type, A2, k2, b2, D2), this.backtrackFragment && (this.backtrackFragment = o2), this.bufferFragmentData(h2, o2, l2, a2, L2 || R2);
                } else {
                  if (!L2 && !R2)
                    return void this.backtrack(o2);
                  o2.gap = true;
                }
              }
              if (v2) {
                var _2 = v2.startPTS, P2 = v2.endPTS, x2 = v2.startDTS, F2 = v2.endDTS;
                l2 && (l2.elementaryStreams[O] = { startPTS: _2, endPTS: P2, startDTS: x2, endDTS: F2 }), o2.setElementaryStreamInfo(O, _2, P2, x2, F2), this.bufferFragmentData(v2, o2, l2, a2);
              }
              if (g2 && null != c2 && null != (e3 = c2.samples) && e3.length) {
                var M2 = { id: r3, frag: o2, details: g2, samples: c2.samples };
                i3.trigger(S.FRAG_PARSING_METADATA, M2);
              }
              if (g2 && d2) {
                var N2 = { id: r3, frag: o2, details: g2, samples: d2.samples };
                i3.trigger(S.FRAG_PARSING_USERDATA, N2);
              }
            }
          } else
            this.resetWhenMissingContext(a2);
        }, r2._bufferInitSegment = function(t3, e3, r3, i3) {
          var n2 = this;
          if (this.state === jr) {
            this.audioOnly = !!e3.audio && !e3.video, this.altAudio && !this.audioOnly && delete e3.audio;
            var a2 = e3.audio, s2 = e3.video, o2 = e3.audiovideo;
            if (a2) {
              var l2 = t3.audioCodec, u2 = navigator.userAgent.toLowerCase();
              this.audioCodecSwitch && (l2 && (l2 = -1 !== l2.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== a2.metadata.channelCount && -1 === u2.indexOf("firefox") && (l2 = "mp4a.40.5")), -1 !== u2.indexOf("android") && "audio/mpeg" !== a2.container && (l2 = "mp4a.40.2", this.log("Android: force audio codec to " + l2)), t3.audioCodec && t3.audioCodec !== l2 && this.log('Swapping manifest audio codec "' + t3.audioCodec + '" for "' + l2 + '"'), a2.levelCodec = l2, a2.id = "main", this.log("Init audio buffer, container:" + a2.container + ", codecs[selected/level/parsed]=[" + (l2 || "") + "/" + (t3.audioCodec || "") + "/" + a2.codec + "]");
            }
            s2 && (s2.levelCodec = t3.videoCodec, s2.id = "main", this.log("Init video buffer, container:" + s2.container + ", codecs[level/parsed]=[" + (t3.videoCodec || "") + "/" + s2.codec + "]")), o2 && this.log("Init audiovideo buffer, container:" + o2.container + ", codecs[level/parsed]=[" + (t3.attrs.CODECS || "") + "/" + o2.codec + "]"), this.hls.trigger(S.BUFFER_CODECS, e3), Object.keys(e3).forEach(function(t4) {
              var a3 = e3[t4].initSegment;
              null != a3 && a3.byteLength && n2.hls.trigger(S.BUFFER_APPENDING, { type: t4, data: a3, frag: r3, part: null, chunkMeta: i3, parent: r3.type });
            }), this.tick();
          }
        }, r2.getMainFwdBufferInfo = function() {
          return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, ge);
        }, r2.backtrack = function(t3) {
          this.couldBacktrack = true, this.backtrackFragment = t3, this.resetTransmuxer(), this.flushBufferGap(t3), this.fragmentTracker.removeFragment(t3), this.fragPrevious = null, this.nextLoadPosition = t3.start, this.state = Kr;
        }, r2.checkFragmentChanged = function() {
          var t3 = this.media, e3 = null;
          if (t3 && t3.readyState > 1 && false === t3.seeking) {
            var r3 = t3.currentTime;
            if (Ir.isBuffered(t3, r3) ? e3 = this.getAppendedFrag(r3) : Ir.isBuffered(t3, r3 + 0.1) && (e3 = this.getAppendedFrag(r3 + 0.1)), e3) {
              this.backtrackFragment = null;
              var i3 = this.fragPlaying, n2 = e3.level;
              i3 && e3.sn === i3.sn && i3.level === n2 && e3.urlId === i3.urlId || (this.fragPlaying = e3, this.hls.trigger(S.FRAG_CHANGED, { frag: e3 }), i3 && i3.level === n2 || this.hls.trigger(S.LEVEL_SWITCHED, { level: n2 }));
            }
          }
        }, a(e2, [{ key: "nextLevel", get: function() {
          var t3 = this.nextBufferedFrag;
          return t3 ? t3.level : -1;
        } }, { key: "currentFrag", get: function() {
          var t3 = this.media;
          return t3 ? this.fragPlaying || this.getAppendedFrag(t3.currentTime) : null;
        } }, { key: "currentProgramDateTime", get: function() {
          var t3 = this.media;
          if (t3) {
            var e3 = t3.currentTime, r3 = this.currentFrag;
            if (r3 && E(e3) && E(r3.programDateTime)) {
              var i3 = r3.programDateTime + 1e3 * (e3 - r3.start);
              return new Date(i3);
            }
          }
          return null;
        } }, { key: "currentLevel", get: function() {
          var t3 = this.currentFrag;
          return t3 ? t3.level : -1;
        } }, { key: "nextBufferedFrag", get: function() {
          var t3 = this.currentFrag;
          return t3 ? this.followingBufferedFrag(t3) : null;
        } }, { key: "forceStartLoad", get: function() {
          return this._forceStartLoad;
        } }]), e2;
      }(Jr), fn = function() {
        function t2(t3, e3, r2) {
          void 0 === e3 && (e3 = 0), void 0 === r2 && (r2 = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t3, this.alpha_ = t3 ? Math.exp(Math.log(0.5) / t3) : 0, this.estimate_ = e3, this.totalWeight_ = r2;
        }
        var e2 = t2.prototype;
        return e2.sample = function(t3, e3) {
          var r2 = Math.pow(this.alpha_, t3);
          this.estimate_ = e3 * (1 - r2) + r2 * this.estimate_, this.totalWeight_ += t3;
        }, e2.getTotalWeight = function() {
          return this.totalWeight_;
        }, e2.getEstimate = function() {
          if (this.alpha_) {
            var t3 = 1 - Math.pow(this.alpha_, this.totalWeight_);
            if (t3)
              return this.estimate_ / t3;
          }
          return this.estimate_;
        }, t2;
      }(), gn = function() {
        function t2(t3, e3, r2, i3) {
          void 0 === i3 && (i3 = 100), this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = r2, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new fn(t3), this.fast_ = new fn(e3), this.defaultTTFB_ = i3, this.ttfb_ = new fn(t3);
        }
        var e2 = t2.prototype;
        return e2.update = function(t3, e3) {
          var r2 = this.slow_, i3 = this.fast_, n2 = this.ttfb_;
          r2.halfLife !== t3 && (this.slow_ = new fn(t3, r2.getEstimate(), r2.getTotalWeight())), i3.halfLife !== e3 && (this.fast_ = new fn(e3, i3.getEstimate(), i3.getTotalWeight())), n2.halfLife !== t3 && (this.ttfb_ = new fn(t3, n2.getEstimate(), n2.getTotalWeight()));
        }, e2.sample = function(t3, e3) {
          var r2 = (t3 = Math.max(t3, this.minDelayMs_)) / 1e3, i3 = 8 * e3 / r2;
          this.fast_.sample(r2, i3), this.slow_.sample(r2, i3);
        }, e2.sampleTTFB = function(t3) {
          var e3 = t3 / 1e3, r2 = Math.sqrt(2) * Math.exp(-Math.pow(e3, 2) / 2);
          this.ttfb_.sample(r2, Math.max(t3, 5));
        }, e2.canEstimate = function() {
          return this.fast_.getTotalWeight() >= this.minWeight_;
        }, e2.getEstimate = function() {
          return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
        }, e2.getEstimateTTFB = function() {
          return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
        }, e2.destroy = function() {
        }, t2;
      }(), vn = function() {
        function t2(t3) {
          this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = -1, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = t3;
          var e3 = t3.config;
          this.bwEstimator = new gn(e3.abrEwmaSlowVoD, e3.abrEwmaFastVoD, e3.abrEwmaDefaultEstimate), this.registerListeners();
        }
        var e2 = t2.prototype;
        return e2.registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.FRAG_LOADING, this.onFragLoading, this), t3.on(S.FRAG_LOADED, this.onFragLoaded, this), t3.on(S.FRAG_BUFFERED, this.onFragBuffered, this), t3.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.on(S.LEVEL_LOADED, this.onLevelLoaded, this);
        }, e2.unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.FRAG_LOADING, this.onFragLoading, this), t3.off(S.FRAG_LOADED, this.onFragLoaded, this), t3.off(S.FRAG_BUFFERED, this.onFragBuffered, this), t3.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.off(S.LEVEL_LOADED, this.onLevelLoaded, this);
        }, e2.destroy = function() {
          this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null;
        }, e2.onFragLoading = function(t3, e3) {
          var r2, i3 = e3.frag;
          this.ignoreFragment(i3) || (this.fragCurrent = i3, this.partCurrent = null != (r2 = e3.part) ? r2 : null, this.clearTimer(), this.timer = self.setInterval(this.onCheck, 100));
        }, e2.onLevelSwitching = function(t3, e3) {
          this.clearTimer();
        }, e2.getTimeToLoadFrag = function(t3, e3, r2, i3) {
          return t3 + r2 / e3 + (i3 ? this.lastLevelLoadSec : 0);
        }, e2.onLevelLoaded = function(t3, e3) {
          var r2 = this.hls.config, i3 = e3.stats, n2 = i3.total, a2 = i3.bwEstimate;
          E(n2) && E(a2) && (this.lastLevelLoadSec = 8 * n2 / a2), e3.details.live ? this.bwEstimator.update(r2.abrEwmaSlowLive, r2.abrEwmaFastLive) : this.bwEstimator.update(r2.abrEwmaSlowVoD, r2.abrEwmaFastVoD);
        }, e2._abandonRulesCheck = function() {
          var t3 = this.fragCurrent, e3 = this.partCurrent, r2 = this.hls, i3 = r2.autoLevelEnabled, n2 = r2.media;
          if (t3 && n2) {
            var a2 = performance.now(), s2 = e3 ? e3.stats : t3.stats, o2 = e3 ? e3.duration : t3.duration, l2 = a2 - s2.loading.start;
            if (s2.aborted || s2.loaded && s2.loaded === s2.total || 0 === t3.level)
              return this.clearTimer(), void (this._nextAutoLevel = -1);
            if (i3 && !n2.paused && n2.playbackRate && n2.readyState) {
              var u2 = r2.mainForwardBufferInfo;
              if (null !== u2) {
                var h2 = this.bwEstimator.getEstimateTTFB(), d2 = Math.abs(n2.playbackRate);
                if (!(l2 <= Math.max(h2, o2 / (2 * d2) * 1e3))) {
                  var c2 = u2.len / d2;
                  if (!(c2 >= 2 * o2 / d2)) {
                    var f2 = s2.loading.first ? s2.loading.first - s2.loading.start : -1, g2 = s2.loaded && f2 > -1, v2 = this.bwEstimator.getEstimate(), m2 = r2.levels, p2 = r2.minAutoLevel, y2 = m2[t3.level], T2 = s2.total || Math.max(s2.loaded, Math.round(o2 * y2.maxBitrate / 8)), L2 = l2 - f2;
                    L2 < 1 && g2 && (L2 = Math.min(l2, 8 * s2.loaded / v2));
                    var R2 = g2 ? 1e3 * s2.loaded / L2 : 0, A2 = R2 ? (T2 - s2.loaded) / R2 : 8 * T2 / v2 + h2 / 1e3;
                    if (!(A2 <= c2)) {
                      var k2, b2 = R2 ? 8 * R2 : v2, D2 = Number.POSITIVE_INFINITY;
                      for (k2 = t3.level - 1; k2 > p2; k2--) {
                        var I2 = m2[k2].maxBitrate;
                        if ((D2 = this.getTimeToLoadFrag(h2 / 1e3, b2, o2 * I2, !m2[k2].details)) < c2)
                          break;
                      }
                      D2 >= A2 || D2 > 10 * o2 || (r2.nextLoadLevel = k2, g2 ? this.bwEstimator.sample(l2 - Math.min(h2, f2), s2.loaded) : this.bwEstimator.sampleTTFB(l2), this.clearTimer(), w.warn("[abr] Fragment " + t3.sn + (e3 ? " part " + e3.index : "") + " of level " + t3.level + " is loading too slowly;\n      Time to underbuffer: " + c2.toFixed(3) + " s\n      Estimated load time for current fragment: " + A2.toFixed(3) + " s\n      Estimated load time for down switch fragment: " + D2.toFixed(3) + " s\n      TTFB estimate: " + f2 + "\n      Current BW estimate: " + (E(v2) ? (v2 / 1024).toFixed(3) : "Unknown") + " Kb/s\n      New BW estimate: " + (this.bwEstimator.getEstimate() / 1024).toFixed(3) + " Kb/s\n      Aborting and switching to level " + k2), t3.loader && (this.fragCurrent = this.partCurrent = null, t3.abortRequests()), r2.trigger(S.FRAG_LOAD_EMERGENCY_ABORTED, { frag: t3, part: e3, stats: s2 }));
                    }
                  }
                }
              }
            }
          }
        }, e2.onFragLoaded = function(t3, e3) {
          var r2 = e3.frag, i3 = e3.part, n2 = i3 ? i3.stats : r2.stats;
          if (r2.type === ge && this.bwEstimator.sampleTTFB(n2.loading.first - n2.loading.start), !this.ignoreFragment(r2)) {
            if (this.clearTimer(), this.lastLoadedFragLevel = r2.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
              var a2 = i3 ? i3.duration : r2.duration, s2 = this.hls.levels[r2.level], o2 = (s2.loaded ? s2.loaded.bytes : 0) + n2.loaded, l2 = (s2.loaded ? s2.loaded.duration : 0) + a2;
              s2.loaded = { bytes: o2, duration: l2 }, s2.realBitrate = Math.round(8 * o2 / l2);
            }
            if (r2.bitrateTest) {
              var u2 = { stats: n2, frag: r2, part: i3, id: r2.type };
              this.onFragBuffered(S.FRAG_BUFFERED, u2), r2.bitrateTest = false;
            }
          }
        }, e2.onFragBuffered = function(t3, e3) {
          var r2 = e3.frag, i3 = e3.part, n2 = null != i3 && i3.stats.loaded ? i3.stats : r2.stats;
          if (!n2.aborted && !this.ignoreFragment(r2)) {
            var a2 = n2.parsing.end - n2.loading.start - Math.min(n2.loading.first - n2.loading.start, this.bwEstimator.getEstimateTTFB());
            this.bwEstimator.sample(a2, n2.loaded), n2.bwEstimate = this.bwEstimator.getEstimate(), r2.bitrateTest ? this.bitrateTestDelay = a2 / 1e3 : this.bitrateTestDelay = 0;
          }
        }, e2.ignoreFragment = function(t3) {
          return t3.type !== ge || "initSegment" === t3.sn;
        }, e2.clearTimer = function() {
          self.clearInterval(this.timer);
        }, e2.getNextABRAutoLevel = function() {
          var t3 = this.fragCurrent, e3 = this.partCurrent, r2 = this.hls, i3 = r2.maxAutoLevel, n2 = r2.config, a2 = r2.minAutoLevel, s2 = r2.media, o2 = e3 ? e3.duration : t3 ? t3.duration : 0, l2 = s2 && 0 !== s2.playbackRate ? Math.abs(s2.playbackRate) : 1, u2 = this.bwEstimator ? this.bwEstimator.getEstimate() : n2.abrEwmaDefaultEstimate, h2 = r2.mainForwardBufferInfo, d2 = (h2 ? h2.len : 0) / l2, c2 = this.findBestLevel(u2, a2, i3, d2, n2.abrBandWidthFactor, n2.abrBandWidthUpFactor);
          if (c2 >= 0)
            return c2;
          w.trace("[abr] " + (d2 ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
          var f2 = o2 ? Math.min(o2, n2.maxStarvationDelay) : n2.maxStarvationDelay, g2 = n2.abrBandWidthFactor, v2 = n2.abrBandWidthUpFactor;
          if (!d2) {
            var m2 = this.bitrateTestDelay;
            m2 && (f2 = (o2 ? Math.min(o2, n2.maxLoadingDelay) : n2.maxLoadingDelay) - m2, w.trace("[abr] bitrate test took " + Math.round(1e3 * m2) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * f2) + " ms"), g2 = v2 = 1);
          }
          return c2 = this.findBestLevel(u2, a2, i3, d2 + f2, g2, v2), Math.max(c2, 0);
        }, e2.findBestLevel = function(t3, e3, r2, i3, n2, a2) {
          for (var s2, o2 = this.fragCurrent, l2 = this.partCurrent, u2 = this.lastLoadedFragLevel, h2 = this.hls.levels, d2 = h2[u2], c2 = !(null == d2 || null == (s2 = d2.details) || !s2.live), f2 = null == d2 ? void 0 : d2.codecSet, g2 = l2 ? l2.duration : o2 ? o2.duration : 0, v2 = this.bwEstimator.getEstimateTTFB() / 1e3, m2 = e3, p2 = -1, y2 = r2; y2 >= e3; y2--) {
            var T2 = h2[y2];
            if (!T2 || f2 && T2.codecSet !== f2)
              T2 && (m2 = Math.min(y2, m2), p2 = Math.max(y2, p2));
            else {
              -1 !== p2 && w.trace("[abr] Skipped level(s) " + m2 + "-" + p2 + ' with CODECS:"' + h2[p2].attrs.CODECS + '"; not compatible with "' + d2.attrs.CODECS + '"');
              var S2 = T2.details, L2 = (l2 ? null == S2 ? void 0 : S2.partTarget : null == S2 ? void 0 : S2.averagetargetduration) || g2, R2 = void 0;
              R2 = y2 <= u2 ? n2 * t3 : a2 * t3;
              var A2 = h2[y2].maxBitrate, k2 = this.getTimeToLoadFrag(v2, R2, A2 * L2, void 0 === S2);
              if (w.trace("[abr] level:" + y2 + " adjustedbw-bitrate:" + Math.round(R2 - A2) + " avgDuration:" + L2.toFixed(1) + " maxFetchDuration:" + i3.toFixed(1) + " fetchDuration:" + k2.toFixed(1)), R2 > A2 && (0 === k2 || !E(k2) || c2 && !this.bitrateTestDelay || k2 < i3))
                return y2;
            }
          }
          return -1;
        }, a(t2, [{ key: "nextAutoLevel", get: function() {
          var t3 = this._nextAutoLevel, e3 = this.bwEstimator;
          if (-1 !== t3 && !e3.canEstimate())
            return t3;
          var r2 = this.getNextABRAutoLevel();
          if (-1 !== t3) {
            var i3 = this.hls.levels;
            if (i3.length > Math.max(t3, r2) && i3[t3].loadError <= i3[r2].loadError)
              return t3;
          }
          return -1 !== t3 && (r2 = Math.min(t3, r2)), r2;
        }, set: function(t3) {
          this._nextAutoLevel = t3;
        } }]), t2;
      }(), mn = function() {
        function t2() {
          this.chunks = [], this.dataLength = 0;
        }
        var e2 = t2.prototype;
        return e2.push = function(t3) {
          this.chunks.push(t3), this.dataLength += t3.length;
        }, e2.flush = function() {
          var t3, e3 = this.chunks, r2 = this.dataLength;
          return e3.length ? (t3 = 1 === e3.length ? e3[0] : function(t4, e4) {
            for (var r3 = new Uint8Array(e4), i3 = 0, n2 = 0; n2 < t4.length; n2++) {
              var a2 = t4[n2];
              r3.set(a2, i3), i3 += a2.length;
            }
            return r3;
          }(e3, r2), this.reset(), t3) : new Uint8Array(0);
        }, e2.reset = function() {
          this.chunks.length = 0, this.dataLength = 0;
        }, t2;
      }(), pn = function(t2) {
        function e2(e3, r3, i3) {
          var n2;
          return (n2 = t2.call(this, e3, r3, i3, "[audio-stream-controller]", ve) || this).videoBuffer = null, n2.videoTrackCC = -1, n2.waitingVideoCC = -1, n2.bufferedTrack = null, n2.switchingTrack = null, n2.trackId = -1, n2.waitingData = null, n2.mainDetails = null, n2.bufferFlushed = false, n2.cachedTrackLoadedData = null, n2._registerListeners(), n2;
        }
        l(e2, t2);
        var r2 = e2.prototype;
        return r2.onHandlerDestroying = function() {
          this._unregisterListeners(), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null;
        }, r2._registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.on(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t3.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t3.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t3.on(S.ERROR, this.onError, this), t3.on(S.BUFFER_RESET, this.onBufferReset, this), t3.on(S.BUFFER_CREATED, this.onBufferCreated, this), t3.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t3.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t3.on(S.FRAG_BUFFERED, this.onFragBuffered, this);
        }, r2._unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.off(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t3.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t3.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t3.off(S.ERROR, this.onError, this), t3.off(S.BUFFER_RESET, this.onBufferReset, this), t3.off(S.BUFFER_CREATED, this.onBufferCreated, this), t3.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t3.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t3.off(S.FRAG_BUFFERED, this.onFragBuffered, this);
        }, r2.onInitPtsFound = function(t3, e3) {
          var r3 = e3.frag, i3 = e3.id, n2 = e3.initPTS, a2 = e3.timescale;
          if ("main" === i3) {
            var s2 = r3.cc;
            this.initPTS[r3.cc] = { baseTime: n2, timescale: a2 }, this.log("InitPTS for cc: " + s2 + " found from main: " + n2), this.videoTrackCC = s2, this.state === Qr && this.tick();
          }
        }, r2.startLoad = function(t3) {
          if (!this.levels)
            return this.startPosition = t3, void (this.state = Gr);
          var e3 = this.lastCurrentTime;
          this.stopLoad(), this.setInterval(100), e3 > 0 && -1 === t3 ? (this.log("Override startPosition with lastCurrentTime @" + e3.toFixed(3)), t3 = e3, this.state = Kr) : (this.loadedmetadata = false, this.state = Wr), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t3, this.tick();
        }, r2.doTick = function() {
          switch (this.state) {
            case Kr:
              this.doTickIdle();
              break;
            case Wr:
              var e3, r3 = this.levels, i3 = this.trackId, n2 = null == r3 || null == (e3 = r3[i3]) ? void 0 : e3.details;
              if (n2) {
                if (this.waitForCdnTuneIn(n2))
                  break;
                this.state = Qr;
              }
              break;
            case Yr:
              var a2, s2 = performance.now(), o2 = this.retryDate;
              (!o2 || s2 >= o2 || null != (a2 = this.media) && a2.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded(this.trackId), this.state = Kr);
              break;
            case Qr:
              var l2 = this.waitingData;
              if (l2) {
                var u2 = l2.frag, h2 = l2.part, d2 = l2.cache, c2 = l2.complete;
                if (void 0 !== this.initPTS[u2.cc]) {
                  this.waitingData = null, this.waitingVideoCC = -1, this.state = Vr;
                  var f2 = { frag: u2, part: h2, payload: d2.flush(), networkDetails: null };
                  this._handleFragmentLoadProgress(f2), c2 && t2.prototype._handleFragmentLoadComplete.call(this, f2);
                } else if (this.videoTrackCC !== this.waitingVideoCC)
                  this.log("Waiting fragment cc (" + u2.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
                else {
                  var g2 = this.getLoadPosition(), v2 = Ir.bufferInfo(this.mediaBuffer, g2, this.config.maxBufferHole);
                  Je(v2.end, this.config.maxFragLookUpTolerance, u2) < 0 && (this.log("Waiting fragment cc (" + u2.cc + ") @ " + u2.start + " cancelled because another fragment at " + v2.end + " is needed"), this.clearWaitingFragment());
                }
              } else
                this.state = Kr;
          }
          this.onTickEnd();
        }, r2.clearWaitingFragment = function() {
          var t3 = this.waitingData;
          t3 && (this.fragmentTracker.removeFragment(t3.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = Kr);
        }, r2.resetLoadingState = function() {
          this.clearWaitingFragment(), t2.prototype.resetLoadingState.call(this);
        }, r2.onTickEnd = function() {
          var t3 = this.media;
          null != t3 && t3.readyState && (this.lastCurrentTime = t3.currentTime);
        }, r2.doTickIdle = function() {
          var t3 = this.hls, e3 = this.levels, r3 = this.media, i3 = this.trackId, n2 = t3.config;
          if (null != e3 && e3[i3] && (r3 || !this.startFragRequested && n2.startFragPrefetch)) {
            var a2 = e3[i3], s2 = a2.details;
            if (!s2 || s2.live && this.levelLastLoaded !== i3 || this.waitForCdnTuneIn(s2))
              this.state = Wr;
            else {
              var o2 = this.mediaBuffer ? this.mediaBuffer : this.media;
              this.bufferFlushed && o2 && (this.bufferFlushed = false, this.afterBufferFlushed(o2, O, ve));
              var l2 = this.getFwdBufferInfo(o2, ve);
              if (null !== l2) {
                var u2 = this.bufferedTrack, h2 = this.switchingTrack;
                if (!h2 && this._streamEnded(l2, s2))
                  return t3.trigger(S.BUFFER_EOS, { type: "audio" }), void (this.state = Xr);
                var d2 = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, ge), c2 = l2.len, f2 = this.getMaxBufferLength(null == d2 ? void 0 : d2.len);
                if (!(c2 >= f2) || h2) {
                  var g2 = s2.fragments[0].start, v2 = l2.end;
                  if (h2 && r3) {
                    var m2 = this.getLoadPosition();
                    u2 && h2.attrs !== u2.attrs && (v2 = m2), s2.PTSKnown && m2 < g2 && (l2.end > g2 || l2.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), r3.currentTime = g2 + 0.05);
                  }
                  var p2 = this.getNextFragment(v2, s2), y2 = false;
                  if (p2 && this.isLoopLoading(p2, v2) && (y2 = !!p2.gap, p2 = this.getNextFragmentLoopLoading(p2, s2, l2, ge, f2)), p2) {
                    var T2 = d2 && p2.start > d2.end + s2.targetduration;
                    if (T2 || (null == d2 || !d2.len) && l2.len) {
                      var E2 = this.getAppendedFrag(p2.start, ge);
                      if (null === E2)
                        return;
                      if (y2 || (y2 = !!E2.gap || !!T2 && 0 === d2.len), T2 && !y2 || y2 && l2.nextStart && l2.nextStart < E2.end)
                        return;
                    }
                    this.loadFragment(p2, a2, v2);
                  } else
                    this.bufferFlushed = true;
                }
              }
            }
          }
        }, r2.getMaxBufferLength = function(e3) {
          var r3 = t2.prototype.getMaxBufferLength.call(this);
          return e3 ? Math.min(Math.max(r3, e3), this.config.maxMaxBufferLength) : r3;
        }, r2.onMediaDetaching = function() {
          this.videoBuffer = null, t2.prototype.onMediaDetaching.call(this);
        }, r2.onAudioTracksUpdated = function(t3, e3) {
          var r3 = e3.audioTracks;
          this.resetTransmuxer(), this.levels = r3.map(function(t4) {
            return new Ne(t4);
          });
        }, r2.onAudioTrackSwitching = function(t3, e3) {
          var r3 = !!e3.url;
          this.trackId = e3.id;
          var i3 = this.fragCurrent;
          i3 && (i3.abortRequests(), this.removeUnbufferedFrags(i3.start)), this.resetLoadingState(), r3 ? this.setInterval(100) : this.resetTransmuxer(), r3 ? (this.switchingTrack = e3, this.state = Kr) : (this.switchingTrack = null, this.bufferedTrack = e3, this.state = Gr), this.tick();
        }, r2.onManifestLoading = function() {
          this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = false, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = false, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1;
        }, r2.onLevelLoaded = function(t3, e3) {
          this.mainDetails = e3.details, null !== this.cachedTrackLoadedData && (this.hls.trigger(S.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null);
        }, r2.onAudioTrackLoaded = function(t3, e3) {
          var r3;
          if (null != this.mainDetails) {
            var i3 = this.levels, n2 = e3.details, a2 = e3.id;
            if (i3) {
              this.log("Track " + a2 + " loaded [" + n2.startSN + "," + n2.endSN + "]" + (n2.lastPartSn ? "[part-" + n2.lastPartSn + "-" + n2.lastPartIndex + "]" : "") + ",duration:" + n2.totalduration);
              var s2 = i3[a2], o2 = 0;
              if (n2.live || null != (r3 = s2.details) && r3.live) {
                var l2 = this.mainDetails;
                if (n2.fragments[0] || (n2.deltaUpdateFailed = true), n2.deltaUpdateFailed || !l2)
                  return;
                !s2.details && n2.hasProgramDateTime && l2.hasProgramDateTime ? (Fr(n2, l2), o2 = n2.fragments[0].start) : o2 = this.alignPlaylists(n2, s2.details);
              }
              s2.details = n2, this.levelLastLoaded = a2, this.startFragRequested || !this.mainDetails && n2.live || this.setStartPosition(s2.details, o2), this.state !== Wr || this.waitForCdnTuneIn(n2) || (this.state = Kr), this.tick();
            } else
              this.warn("Audio tracks were reset while loading level " + a2);
          } else
            this.cachedTrackLoadedData = e3;
        }, r2._handleFragmentLoadProgress = function(t3) {
          var e3, r3 = t3.frag, i3 = t3.part, n2 = t3.payload, a2 = this.config, s2 = this.trackId, o2 = this.levels;
          if (o2) {
            var l2 = o2[s2];
            if (l2) {
              var u2 = l2.details;
              if (!u2)
                return this.warn("Audio track details undefined on fragment load progress"), void this.removeUnbufferedFrags(r3.start);
              var h2 = a2.defaultAudioCodec || l2.audioCodec || "mp4a.40.2", d2 = this.transmuxer;
              d2 || (d2 = this.transmuxer = new hn(this.hls, ve, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
              var c2 = this.initPTS[r3.cc], f2 = null == (e3 = r3.initSegment) ? void 0 : e3.data;
              if (void 0 !== c2) {
                var g2 = i3 ? i3.index : -1, v2 = -1 !== g2, m2 = new wr(r3.level, r3.sn, r3.stats.chunkCount, n2.byteLength, g2, v2);
                d2.push(n2, f2, h2, "", r3, i3, u2.totalduration, false, m2, c2);
              } else
                this.log("Unknown video PTS for cc " + r3.cc + ", waiting for video PTS before demuxing audio frag " + r3.sn + " of [" + u2.startSN + " ," + u2.endSN + "],track " + s2), (this.waitingData = this.waitingData || { frag: r3, part: i3, cache: new mn(), complete: false }).cache.push(new Uint8Array(n2)), this.waitingVideoCC = this.videoTrackCC, this.state = Qr;
            } else
              this.warn("Audio track is undefined on fragment load progress");
          } else
            this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + r3.sn + " of level " + r3.level + " will not be buffered");
        }, r2._handleFragmentLoadComplete = function(e3) {
          this.waitingData ? this.waitingData.complete = true : t2.prototype._handleFragmentLoadComplete.call(this, e3);
        }, r2.onBufferReset = function() {
          this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = false;
        }, r2.onBufferCreated = function(t3, e3) {
          var r3 = e3.tracks.audio;
          r3 && (this.mediaBuffer = r3.buffer || null), e3.tracks.video && (this.videoBuffer = e3.tracks.video.buffer || null);
        }, r2.onFragBuffered = function(t3, e3) {
          var r3 = e3.frag, n2 = e3.part;
          if (r3.type === ve)
            if (this.fragContextChanged(r3))
              this.warn("Fragment " + r3.sn + (n2 ? " p: " + n2.index : "") + " of level " + r3.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + (this.switchingTrack ? this.switchingTrack.name : "false"));
            else {
              if ("initSegment" !== r3.sn) {
                this.fragPrevious = r3;
                var a2 = this.switchingTrack;
                a2 && (this.bufferedTrack = a2, this.switchingTrack = null, this.hls.trigger(S.AUDIO_TRACK_SWITCHED, i2({}, a2)));
              }
              this.fragBufferedComplete(r3, n2);
            }
          else if (!this.loadedmetadata && r3.type === ge) {
            var s2 = this.videoBuffer || this.media;
            s2 && Ir.getBuffered(s2).length && (this.loadedmetadata = true);
          }
        }, r2.onError = function(e3, r3) {
          var i3;
          if (r3.fatal)
            this.state = zr;
          else
            switch (r3.details) {
              case R.FRAG_GAP:
              case R.FRAG_PARSING_ERROR:
              case R.FRAG_DECRYPT_ERROR:
              case R.FRAG_LOAD_ERROR:
              case R.FRAG_LOAD_TIMEOUT:
              case R.KEY_LOAD_ERROR:
              case R.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(ve, r3);
                break;
              case R.AUDIO_TRACK_LOAD_ERROR:
              case R.AUDIO_TRACK_LOAD_TIMEOUT:
              case R.LEVEL_PARSING_ERROR:
                r3.levelRetry || this.state !== Wr || (null == (i3 = r3.context) ? void 0 : i3.type) !== ce || (this.state = Kr);
                break;
              case R.BUFFER_FULL_ERROR:
                if (!r3.parent || "audio" !== r3.parent)
                  return;
                this.reduceLengthAndFlushBuffer(r3) && (this.bufferedTrack = null, t2.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio"));
                break;
              case R.INTERNAL_EXCEPTION:
                this.recoverWorkerError(r3);
            }
        }, r2.onBufferFlushed = function(t3, e3) {
          e3.type === O && (this.bufferFlushed = true, this.state === Xr && (this.state = Kr));
        }, r2._handleTransmuxComplete = function(t3) {
          var e3, r3 = "audio", i3 = this.hls, n2 = t3.remuxResult, a2 = t3.chunkMeta, s2 = this.getCurrentContext(a2);
          if (s2) {
            var l2 = s2.frag, u2 = s2.part, h2 = s2.level.details, d2 = n2.audio, c2 = n2.text, f2 = n2.id3, g2 = n2.initSegment;
            if (!this.fragContextChanged(l2) && h2) {
              if (this.state = jr, this.switchingTrack && d2 && this.completeAudioSwitch(this.switchingTrack), null != g2 && g2.tracks) {
                var v2 = l2.initSegment || l2;
                this._bufferInitSegment(g2.tracks, v2, a2), i3.trigger(S.FRAG_PARSING_INIT_SEGMENT, { frag: v2, id: r3, tracks: g2.tracks });
              }
              if (d2) {
                var m2 = d2.startPTS, p2 = d2.endPTS, y2 = d2.startDTS, T2 = d2.endDTS;
                u2 && (u2.elementaryStreams[O] = { startPTS: m2, endPTS: p2, startDTS: y2, endDTS: T2 }), l2.setElementaryStreamInfo(O, m2, p2, y2, T2), this.bufferFragmentData(d2, l2, u2, a2);
              }
              if (null != f2 && null != (e3 = f2.samples) && e3.length) {
                var E2 = o({ id: r3, frag: l2, details: h2 }, f2);
                i3.trigger(S.FRAG_PARSING_METADATA, E2);
              }
              if (c2) {
                var L2 = o({ id: r3, frag: l2, details: h2 }, c2);
                i3.trigger(S.FRAG_PARSING_USERDATA, L2);
              }
            } else
              this.fragmentTracker.removeFragment(l2);
          } else
            this.resetWhenMissingContext(a2);
        }, r2._bufferInitSegment = function(t3, e3, r3) {
          if (this.state === jr) {
            t3.video && delete t3.video;
            var i3 = t3.audio;
            if (i3) {
              i3.levelCodec = i3.codec, i3.id = "audio", this.log("Init audio buffer, container:" + i3.container + ", codecs[parsed]=[" + i3.codec + "]"), this.hls.trigger(S.BUFFER_CODECS, t3);
              var n2 = i3.initSegment;
              if (null != n2 && n2.byteLength) {
                var a2 = { type: "audio", frag: e3, part: null, chunkMeta: r3, parent: e3.type, data: n2 };
                this.hls.trigger(S.BUFFER_APPENDING, a2);
              }
              this.tick();
            }
          }
        }, r2.loadFragment = function(e3, r3, i3) {
          var n2, a2 = this.fragmentTracker.getState(e3);
          this.fragCurrent = e3, this.switchingTrack || a2 === fr || a2 === vr ? "initSegment" === e3.sn ? this._loadInitSegment(e3, r3) : null != (n2 = r3.details) && n2.live && !this.initPTS[e3.cc] ? (this.log("Waiting for video PTS in continuity counter " + e3.cc + " of live stream before loading audio fragment " + e3.sn + " of level " + this.trackId), this.state = Qr) : (this.startFragRequested = true, t2.prototype.loadFragment.call(this, e3, r3, i3)) : this.clearTrackerIfNeeded(e3);
        }, r2.completeAudioSwitch = function(e3) {
          var r3 = this.hls, n2 = this.media, a2 = this.bufferedTrack, s2 = null == a2 ? void 0 : a2.attrs, o2 = e3.attrs;
          n2 && s2 && (s2.CHANNELS !== o2.CHANNELS || s2.NAME !== o2.NAME || s2.LANGUAGE !== o2.LANGUAGE) && (this.log("Switching audio track : flushing all audio"), t2.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.bufferedTrack = e3, this.switchingTrack = null, r3.trigger(S.AUDIO_TRACK_SWITCHED, i2({}, e3));
        }, e2;
      }(Jr), yn = function(t2) {
        function e2(e3) {
          var r3;
          return (r3 = t2.call(this, e3, "[audio-track-controller]") || this).tracks = [], r3.groupId = null, r3.tracksInGroup = [], r3.trackId = -1, r3.currentTrack = null, r3.selectDefaultTrack = true, r3.registerListeners(), r3;
        }
        l(e2, t2);
        var r2 = e2.prototype;
        return r2.registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.LEVEL_LOADING, this.onLevelLoading, this), t3.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t3.on(S.ERROR, this.onError, this);
        }, r2.unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.LEVEL_LOADING, this.onLevelLoading, this), t3.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t3.off(S.ERROR, this.onError, this);
        }, r2.destroy = function() {
          this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, t2.prototype.destroy.call(this);
        }, r2.onManifestLoading = function() {
          this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = true;
        }, r2.onManifestParsed = function(t3, e3) {
          this.tracks = e3.audioTracks || [];
        }, r2.onAudioTrackLoaded = function(t3, e3) {
          var r3 = e3.id, i3 = e3.groupId, n2 = e3.details, a2 = this.tracksInGroup[r3];
          if (a2 && a2.groupId === i3) {
            var s2 = a2.details;
            a2.details = e3.details, this.log("audio-track " + r3 + ' "' + a2.name + '" lang:' + a2.lang + " group:" + i3 + " loaded [" + n2.startSN + "-" + n2.endSN + "]"), r3 === this.trackId && this.playlistLoaded(r3, e3, s2);
          } else
            this.warn("Track with id:" + r3 + " and group:" + i3 + " not found in active group " + a2.groupId);
        }, r2.onLevelLoading = function(t3, e3) {
          this.switchLevel(e3.level);
        }, r2.onLevelSwitching = function(t3, e3) {
          this.switchLevel(e3.level);
        }, r2.switchLevel = function(t3) {
          var e3 = this.hls.levels[t3];
          if (null != e3 && e3.audioGroupIds) {
            var r3 = e3.audioGroupIds[e3.urlId];
            if (this.groupId !== r3) {
              this.groupId = r3 || null;
              var i3 = this.tracks.filter(function(t4) {
                return !r3 || t4.groupId === r3;
              });
              this.selectDefaultTrack && !i3.some(function(t4) {
                return t4.default;
              }) && (this.selectDefaultTrack = false), this.tracksInGroup = i3;
              var n2 = { audioTracks: i3 };
              this.log("Updating audio tracks, " + i3.length + " track(s) found in group:" + r3), this.hls.trigger(S.AUDIO_TRACKS_UPDATED, n2), this.selectInitialTrack();
            } else
              this.shouldReloadPlaylist(this.currentTrack) && this.setAudioTrack(this.trackId);
          }
        }, r2.onError = function(t3, e3) {
          !e3.fatal && e3.context && e3.context.type === ce && e3.context.id === this.trackId && e3.context.groupId === this.groupId && (this.requestScheduled = -1, this.checkRetry(e3));
        }, r2.setAudioTrack = function(t3) {
          var e3 = this.tracksInGroup;
          if (t3 < 0 || t3 >= e3.length)
            this.warn("Invalid id passed to audio-track controller");
          else {
            this.clearTimer();
            var r3 = this.currentTrack;
            e3[this.trackId];
            var n2 = e3[t3], a2 = n2.groupId, s2 = n2.name;
            if (this.log("Switching to audio-track " + t3 + ' "' + s2 + '" lang:' + n2.lang + " group:" + a2), this.trackId = t3, this.currentTrack = n2, this.selectDefaultTrack = false, this.hls.trigger(S.AUDIO_TRACK_SWITCHING, i2({}, n2)), !n2.details || n2.details.live) {
              var o2 = this.switchParams(n2.url, null == r3 ? void 0 : r3.details);
              this.loadPlaylist(o2);
            }
          }
        }, r2.selectInitialTrack = function() {
          var t3 = this.tracksInGroup, e3 = this.findTrackId(this.currentTrack) | this.findTrackId(null);
          if (-1 !== e3)
            this.setAudioTrack(e3);
          else {
            var r3 = new Error("No track found for running audio group-ID: " + this.groupId + " track count: " + t3.length);
            this.warn(r3.message), this.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.AUDIO_TRACK_LOAD_ERROR, fatal: true, error: r3 });
          }
        }, r2.findTrackId = function(t3) {
          for (var e3 = this.tracksInGroup, r3 = 0; r3 < e3.length; r3++) {
            var i3 = e3[r3];
            if (!this.selectDefaultTrack || i3.default) {
              if (!t3 || void 0 !== t3.attrs["STABLE-RENDITION-ID"] && t3.attrs["STABLE-RENDITION-ID"] === i3.attrs["STABLE-RENDITION-ID"])
                return i3.id;
              if (t3.name === i3.name && t3.lang === i3.lang)
                return i3.id;
            }
          }
          return -1;
        }, r2.loadPlaylist = function(e3) {
          t2.prototype.loadPlaylist.call(this);
          var r3 = this.tracksInGroup[this.trackId];
          if (this.shouldLoadPlaylist(r3)) {
            var i3 = r3.id, n2 = r3.groupId, a2 = r3.url;
            if (e3)
              try {
                a2 = e3.addDirectives(a2);
              } catch (t3) {
                this.warn("Could not construct new URL with HLS Delivery Directives: " + t3);
              }
            this.log("loading audio-track playlist " + i3 + ' "' + r3.name + '" lang:' + r3.lang + " group:" + n2), this.clearTimer(), this.hls.trigger(S.AUDIO_TRACK_LOADING, { url: a2, id: i3, groupId: n2, deliveryDirectives: e3 || null });
          }
        }, a(e2, [{ key: "audioTracks", get: function() {
          return this.tracksInGroup;
        } }, { key: "audioTrack", get: function() {
          return this.trackId;
        }, set: function(t3) {
          this.selectDefaultTrack = false, this.setAudioTrack(t3);
        } }]), e2;
      }(ur);
      function Tn(t2, e2) {
        if (t2.length !== e2.length)
          return false;
        for (var r2 = 0; r2 < t2.length; r2++)
          if (!En(t2[r2].attrs, e2[r2].attrs))
            return false;
        return true;
      }
      function En(t2, e2) {
        var r2 = t2["STABLE-RENDITION-ID"];
        return r2 ? r2 === e2["STABLE-RENDITION-ID"] : !["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED"].some(function(r3) {
          return t2[r3] !== e2[r3];
        });
      }
      var Sn = function(t2) {
        function e2(e3, r3, i3) {
          var n2;
          return (n2 = t2.call(this, e3, r3, i3, "[subtitle-stream-controller]", me) || this).levels = [], n2.currentTrackId = -1, n2.tracksBuffered = [], n2.mainDetails = null, n2._registerListeners(), n2;
        }
        l(e2, t2);
        var r2 = e2.prototype;
        return r2.onHandlerDestroying = function() {
          this._unregisterListeners(), this.mainDetails = null;
        }, r2._registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.on(S.ERROR, this.onError, this), t3.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t3.on(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t3.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t3.on(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t3.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.on(S.FRAG_BUFFERED, this.onFragBuffered, this);
        }, r2._unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.off(S.ERROR, this.onError, this), t3.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t3.off(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t3.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t3.off(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t3.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.off(S.FRAG_BUFFERED, this.onFragBuffered, this);
        }, r2.startLoad = function(t3) {
          this.stopLoad(), this.state = Kr, this.setInterval(500), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t3, this.tick();
        }, r2.onManifestLoading = function() {
          this.mainDetails = null, this.fragmentTracker.removeAllFragments();
        }, r2.onMediaDetaching = function() {
          this.tracksBuffered = [], t2.prototype.onMediaDetaching.call(this);
        }, r2.onLevelLoaded = function(t3, e3) {
          this.mainDetails = e3.details;
        }, r2.onSubtitleFragProcessed = function(t3, e3) {
          var r3 = e3.frag, i3 = e3.success;
          if (this.fragPrevious = r3, this.state = Kr, i3) {
            var n2 = this.tracksBuffered[this.currentTrackId];
            if (n2) {
              for (var a2, s2 = r3.start, o2 = 0; o2 < n2.length; o2++)
                if (s2 >= n2[o2].start && s2 <= n2[o2].end) {
                  a2 = n2[o2];
                  break;
                }
              var l2 = r3.start + r3.duration;
              a2 ? a2.end = l2 : (a2 = { start: s2, end: l2 }, n2.push(a2)), this.fragmentTracker.fragBuffered(r3);
            }
          }
        }, r2.onBufferFlushing = function(t3, e3) {
          var r3 = e3.startOffset, i3 = e3.endOffset;
          if (0 === r3 && i3 !== Number.POSITIVE_INFINITY) {
            var n2 = i3 - 1;
            if (n2 <= 0)
              return;
            e3.endOffsetSubtitles = Math.max(0, n2), this.tracksBuffered.forEach(function(t4) {
              for (var e4 = 0; e4 < t4.length; )
                if (t4[e4].end <= n2)
                  t4.shift();
                else {
                  if (!(t4[e4].start < n2))
                    break;
                  t4[e4].start = n2, e4++;
                }
            }), this.fragmentTracker.removeFragmentsInRange(r3, n2, me);
          }
        }, r2.onFragBuffered = function(t3, e3) {
          var r3;
          this.loadedmetadata || e3.frag.type !== ge || null != (r3 = this.media) && r3.buffered.length && (this.loadedmetadata = true);
        }, r2.onError = function(t3, e3) {
          var r3 = e3.frag;
          (null == r3 ? void 0 : r3.type) === me && (this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== Gr && (this.state = Kr));
        }, r2.onSubtitleTracksUpdated = function(t3, e3) {
          var r3 = this, i3 = e3.subtitleTracks;
          Tn(this.levels, i3) ? this.levels = i3.map(function(t4) {
            return new Ne(t4);
          }) : (this.tracksBuffered = [], this.levels = i3.map(function(t4) {
            var e4 = new Ne(t4);
            return r3.tracksBuffered[e4.id] = [], e4;
          }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, me), this.fragPrevious = null, this.mediaBuffer = null);
        }, r2.onSubtitleTrackSwitch = function(t3, e3) {
          if (this.currentTrackId = e3.id, this.levels.length && -1 !== this.currentTrackId) {
            var r3 = this.levels[this.currentTrackId];
            null != r3 && r3.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, r3 && this.setInterval(500);
          } else
            this.clearInterval();
        }, r2.onSubtitleTrackLoaded = function(t3, e3) {
          var r3, i3 = e3.details, n2 = e3.id, a2 = this.currentTrackId, s2 = this.levels;
          if (s2.length) {
            var o2 = s2[a2];
            if (!(n2 >= s2.length || n2 !== a2) && o2) {
              this.mediaBuffer = this.mediaBufferTimeRanges;
              var l2 = 0;
              if (i3.live || null != (r3 = o2.details) && r3.live) {
                var u2 = this.mainDetails;
                if (i3.deltaUpdateFailed || !u2)
                  return;
                var h2 = u2.fragments[0];
                o2.details ? 0 === (l2 = this.alignPlaylists(i3, o2.details)) && h2 && He(i3, l2 = h2.start) : i3.hasProgramDateTime && u2.hasProgramDateTime ? (Fr(i3, u2), l2 = i3.fragments[0].start) : h2 && He(i3, l2 = h2.start);
              }
              o2.details = i3, this.levelLastLoaded = n2, this.startFragRequested || !this.mainDetails && i3.live || this.setStartPosition(o2.details, l2), this.tick(), i3.live && !this.fragCurrent && this.media && this.state === Kr && ($e(null, i3.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o2.details = void 0));
            }
          }
        }, r2._handleFragmentLoadComplete = function(t3) {
          var e3 = this, r3 = t3.frag, i3 = t3.payload, n2 = r3.decryptdata, a2 = this.hls;
          if (!this.fragContextChanged(r3) && i3 && i3.byteLength > 0 && n2 && n2.key && n2.iv && "AES-128" === n2.method) {
            var s2 = performance.now();
            this.decrypter.decrypt(new Uint8Array(i3), n2.key.buffer, n2.iv.buffer).catch(function(t4) {
              throw a2.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.FRAG_DECRYPT_ERROR, fatal: false, error: t4, reason: t4.message, frag: r3 }), t4;
            }).then(function(t4) {
              var e4 = performance.now();
              a2.trigger(S.FRAG_DECRYPTED, { frag: r3, payload: t4, stats: { tstart: s2, tdecrypt: e4 } });
            }).catch(function(t4) {
              e3.warn(t4.name + ": " + t4.message), e3.state = Kr;
            });
          }
        }, r2.doTick = function() {
          if (this.media) {
            if (this.state === Kr) {
              var t3 = this.currentTrackId, e3 = this.levels, r3 = e3[t3];
              if (!e3.length || !r3 || !r3.details)
                return;
              var i3 = this.config, n2 = this.getLoadPosition(), a2 = Ir.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], n2, i3.maxBufferHole), s2 = a2.end, o2 = a2.len, l2 = this.getFwdBufferInfo(this.media, ge), u2 = r3.details;
              if (o2 > this.getMaxBufferLength(null == l2 ? void 0 : l2.len) + u2.levelTargetDuration)
                return;
              var h2 = u2.fragments, d2 = h2.length, c2 = u2.edge, f2 = null, g2 = this.fragPrevious;
              if (s2 < c2) {
                var v2 = i3.maxFragLookUpTolerance, m2 = s2 > c2 - v2 ? 0 : v2;
                !(f2 = $e(g2, h2, Math.max(h2[0].start, s2), m2)) && g2 && g2.start < h2[0].start && (f2 = h2[0]);
              } else
                f2 = h2[d2 - 1];
              if (!f2)
                return;
              if ("initSegment" !== (f2 = this.mapToInitFragWhenRequired(f2)).sn) {
                var p2 = h2[f2.sn - u2.startSN - 1];
                p2 && p2.cc === f2.cc && this.fragmentTracker.getState(p2) === fr && (f2 = p2);
              }
              this.fragmentTracker.getState(f2) === fr && this.loadFragment(f2, r3, s2);
            }
          } else
            this.state = Kr;
        }, r2.getMaxBufferLength = function(e3) {
          var r3 = t2.prototype.getMaxBufferLength.call(this);
          return e3 ? Math.max(r3, e3) : r3;
        }, r2.loadFragment = function(e3, r3, i3) {
          this.fragCurrent = e3, "initSegment" === e3.sn ? this._loadInitSegment(e3, r3) : (this.startFragRequested = true, t2.prototype.loadFragment.call(this, e3, r3, i3));
        }, a(e2, [{ key: "mediaBufferTimeRanges", get: function() {
          return new Ln(this.tracksBuffered[this.currentTrackId] || []);
        } }]), e2;
      }(Jr), Ln = function(t2) {
        this.buffered = void 0;
        var e2 = function(e3, r2, i3) {
          if ((r2 >>>= 0) > i3 - 1)
            throw new DOMException("Failed to execute '" + e3 + "' on 'TimeRanges': The index provided (" + r2 + ") is greater than the maximum bound (" + i3 + ")");
          return t2[r2][e3];
        };
        this.buffered = { get length() {
          return t2.length;
        }, end: function(r2) {
          return e2("end", r2, t2.length);
        }, start: function(r2) {
          return e2("start", r2, t2.length);
        } };
      }, Rn = function(t2) {
        function e2(e3) {
          var r3;
          return (r3 = t2.call(this, e3, "[subtitle-track-controller]") || this).media = null, r3.tracks = [], r3.groupId = null, r3.tracksInGroup = [], r3.trackId = -1, r3.selectDefaultTrack = true, r3.queuedDefaultTrack = -1, r3.trackChangeListener = function() {
            return r3.onTextTracksChanged();
          }, r3.asyncPollTrackChange = function() {
            return r3.pollTrackChange(0);
          }, r3.useTextTrackPolling = false, r3.subtitlePollingInterval = -1, r3._subtitleDisplay = true, r3.registerListeners(), r3;
        }
        l(e2, t2);
        var r2 = e2.prototype;
        return r2.destroy = function() {
          this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, t2.prototype.destroy.call(this);
        }, r2.registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.LEVEL_LOADING, this.onLevelLoading, this), t3.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t3.on(S.ERROR, this.onError, this);
        }, r2.unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.LEVEL_LOADING, this.onLevelLoading, this), t3.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t3.off(S.ERROR, this.onError, this);
        }, r2.onMediaAttached = function(t3, e3) {
          this.media = e3.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
        }, r2.pollTrackChange = function(t3) {
          self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t3);
        }, r2.onMediaDetaching = function() {
          this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), An(this.media.textTracks).forEach(function(t3) {
            Le(t3);
          }), this.subtitleTrack = -1, this.media = null);
        }, r2.onManifestLoading = function() {
          this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = true;
        }, r2.onManifestParsed = function(t3, e3) {
          this.tracks = e3.subtitleTracks;
        }, r2.onSubtitleTrackLoaded = function(t3, e3) {
          var r3 = e3.id, i3 = e3.details, n2 = this.trackId, a2 = this.tracksInGroup[n2];
          if (a2) {
            var s2 = a2.details;
            a2.details = e3.details, this.log("subtitle track " + r3 + " loaded [" + i3.startSN + "-" + i3.endSN + "]"), r3 === this.trackId && this.playlistLoaded(r3, e3, s2);
          } else
            this.warn("Invalid subtitle track id " + r3);
        }, r2.onLevelLoading = function(t3, e3) {
          this.switchLevel(e3.level);
        }, r2.onLevelSwitching = function(t3, e3) {
          this.switchLevel(e3.level);
        }, r2.switchLevel = function(t3) {
          var e3 = this.hls.levels[t3];
          if (null != e3 && e3.textGroupIds) {
            var r3 = e3.textGroupIds[e3.urlId], i3 = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
            if (this.groupId !== r3) {
              var n2 = this.tracks.filter(function(t4) {
                return !r3 || t4.groupId === r3;
              });
              this.tracksInGroup = n2;
              var a2 = this.findTrackId(null == i3 ? void 0 : i3.name) || this.findTrackId();
              this.groupId = r3 || null;
              var s2 = { subtitleTracks: n2 };
              this.log("Updating subtitle tracks, " + n2.length + ' track(s) found in "' + r3 + '" group-id'), this.hls.trigger(S.SUBTITLE_TRACKS_UPDATED, s2), -1 !== a2 && this.setSubtitleTrack(a2, i3);
            } else
              this.shouldReloadPlaylist(i3) && this.setSubtitleTrack(this.trackId, i3);
          }
        }, r2.findTrackId = function(t3) {
          for (var e3 = this.tracksInGroup, r3 = 0; r3 < e3.length; r3++) {
            var i3 = e3[r3];
            if ((!this.selectDefaultTrack || i3.default) && (!t3 || t3 === i3.name))
              return i3.id;
          }
          return -1;
        }, r2.onError = function(t3, e3) {
          !e3.fatal && e3.context && e3.context.type === fe && e3.context.id === this.trackId && e3.context.groupId === this.groupId && this.checkRetry(e3);
        }, r2.loadPlaylist = function(e3) {
          t2.prototype.loadPlaylist.call(this);
          var r3 = this.tracksInGroup[this.trackId];
          if (this.shouldLoadPlaylist(r3)) {
            var i3 = r3.id, n2 = r3.groupId, a2 = r3.url;
            if (e3)
              try {
                a2 = e3.addDirectives(a2);
              } catch (t3) {
                this.warn("Could not construct new URL with HLS Delivery Directives: " + t3);
              }
            this.log("Loading subtitle playlist for id " + i3), this.hls.trigger(S.SUBTITLE_TRACK_LOADING, { url: a2, id: i3, groupId: n2, deliveryDirectives: e3 || null });
          }
        }, r2.toggleTrackModes = function(t3) {
          var e3 = this, r3 = this.media, i3 = this.trackId;
          if (r3) {
            var n2 = An(r3.textTracks), a2 = n2.filter(function(t4) {
              return t4.groupId === e3.groupId;
            });
            if (-1 === t3)
              [].slice.call(n2).forEach(function(t4) {
                t4.mode = "disabled";
              });
            else {
              var s2 = a2[i3];
              s2 && (s2.mode = "disabled");
            }
            var o2 = a2[t3];
            o2 && (o2.mode = this.subtitleDisplay ? "showing" : "hidden");
          }
        }, r2.setSubtitleTrack = function(t3, e3) {
          var r3, i3 = this.tracksInGroup;
          if (this.media) {
            if (this.trackId !== t3 && this.toggleTrackModes(t3), !(this.trackId === t3 && (-1 === t3 || null != (r3 = i3[t3]) && r3.details) || t3 < -1 || t3 >= i3.length)) {
              this.clearTimer();
              var n2 = i3[t3];
              if (this.log("Switching to subtitle-track " + t3 + (n2 ? ' "' + n2.name + '" lang:' + n2.lang + " group:" + n2.groupId : "")), this.trackId = t3, n2) {
                var a2 = n2.id, s2 = n2.groupId, o2 = void 0 === s2 ? "" : s2, l2 = n2.name, u2 = n2.type, h2 = n2.url;
                this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, { id: a2, groupId: o2, name: l2, type: u2, url: h2 });
                var d2 = this.switchParams(n2.url, null == e3 ? void 0 : e3.details);
                this.loadPlaylist(d2);
              } else
                this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, { id: t3 });
            }
          } else
            this.queuedDefaultTrack = t3;
        }, r2.onTextTracksChanged = function() {
          if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), this.media && this.hls.config.renderTextTracksNatively) {
            for (var t3 = -1, e3 = An(this.media.textTracks), r3 = 0; r3 < e3.length; r3++)
              if ("hidden" === e3[r3].mode)
                t3 = r3;
              else if ("showing" === e3[r3].mode) {
                t3 = r3;
                break;
              }
            this.subtitleTrack !== t3 && (this.subtitleTrack = t3);
          }
        }, a(e2, [{ key: "subtitleDisplay", get: function() {
          return this._subtitleDisplay;
        }, set: function(t3) {
          this._subtitleDisplay = t3, this.trackId > -1 && this.toggleTrackModes(this.trackId);
        } }, { key: "subtitleTracks", get: function() {
          return this.tracksInGroup;
        } }, { key: "subtitleTrack", get: function() {
          return this.trackId;
        }, set: function(t3) {
          this.selectDefaultTrack = false;
          var e3 = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
          this.setSubtitleTrack(t3, e3);
        } }]), e2;
      }(ur);
      function An(t2) {
        for (var e2 = [], r2 = 0; r2 < t2.length; r2++) {
          var i3 = t2[r2];
          "subtitles" !== i3.kind && "captions" !== i3.kind || !i3.label || e2.push(t2[r2]);
        }
        return e2;
      }
      var kn = function() {
        function t2(t3) {
          this.buffers = void 0, this.queues = { video: [], audio: [], audiovideo: [] }, this.buffers = t3;
        }
        var e2 = t2.prototype;
        return e2.append = function(t3, e3) {
          var r2 = this.queues[e3];
          r2.push(t3), 1 === r2.length && this.buffers[e3] && this.executeNext(e3);
        }, e2.insertAbort = function(t3, e3) {
          this.queues[e3].unshift(t3), this.executeNext(e3);
        }, e2.appendBlocker = function(t3) {
          var e3, r2 = new Promise(function(t4) {
            e3 = t4;
          }), i3 = { execute: e3, onStart: function() {
          }, onComplete: function() {
          }, onError: function() {
          } };
          return this.append(i3, t3), r2;
        }, e2.executeNext = function(t3) {
          var e3 = this.buffers, r2 = this.queues, i3 = e3[t3], n2 = r2[t3];
          if (n2.length) {
            var a2 = n2[0];
            try {
              a2.execute();
            } catch (e4) {
              w.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), a2.onError(e4), null != i3 && i3.updating || (n2.shift(), this.executeNext(t3));
            }
          }
        }, e2.shiftAndExecuteNext = function(t3) {
          this.queues[t3].shift(), this.executeNext(t3);
        }, e2.current = function(t3) {
          return this.queues[t3][0];
        }, t2;
      }(), bn = qt(), Dn = /([ha]vc.)(?:\.[^.,]+)+/, In = function() {
        function t2(t3) {
          var e3 = this;
          this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
            var t4 = e3.media, r2 = e3.mediaSource;
            w.log("[buffer-controller]: Media source opened"), t4 && (t4.removeEventListener("emptied", e3._onMediaEmptied), e3.updateMediaElementDuration(), e3.hls.trigger(S.MEDIA_ATTACHED, { media: t4 })), r2 && r2.removeEventListener("sourceopen", e3._onMediaSourceOpen), e3.checkPendingTracks();
          }, this._onMediaSourceClose = function() {
            w.log("[buffer-controller]: Media source closed");
          }, this._onMediaSourceEnded = function() {
            w.log("[buffer-controller]: Media source ended");
          }, this._onMediaEmptied = function() {
            var t4 = e3.media, r2 = e3._objectUrl;
            t4 && t4.src !== r2 && w.error("Media element src was set while attaching MediaSource (" + r2 + " > " + t4.src + ")");
          }, this.hls = t3, this._initSourceBuffer(), this.registerListeners();
        }
        var e2 = t2.prototype;
        return e2.hasSourceTypes = function() {
          return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
        }, e2.destroy = function() {
          this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null;
        }, e2.registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.BUFFER_RESET, this.onBufferReset, this), t3.on(S.BUFFER_APPENDING, this.onBufferAppending, this), t3.on(S.BUFFER_CODECS, this.onBufferCodecs, this), t3.on(S.BUFFER_EOS, this.onBufferEos, this), t3.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), t3.on(S.FRAG_PARSED, this.onFragParsed, this), t3.on(S.FRAG_CHANGED, this.onFragChanged, this);
        }, e2.unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.BUFFER_RESET, this.onBufferReset, this), t3.off(S.BUFFER_APPENDING, this.onBufferAppending, this), t3.off(S.BUFFER_CODECS, this.onBufferCodecs, this), t3.off(S.BUFFER_EOS, this.onBufferEos, this), t3.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), t3.off(S.FRAG_PARSED, this.onFragParsed, this), t3.off(S.FRAG_CHANGED, this.onFragChanged, this);
        }, e2._initSourceBuffer = function() {
          this.sourceBuffer = {}, this.operationQueue = new kn(this.sourceBuffer), this.listeners = { audio: [], video: [], audiovideo: [] }, this.lastMpegAudioChunk = null;
        }, e2.onManifestLoading = function() {
          this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null;
        }, e2.onManifestParsed = function(t3, e3) {
          var r2 = 2;
          (e3.audio && !e3.video || !e3.altAudio) && (r2 = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r2, w.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
        }, e2.onMediaAttaching = function(t3, e3) {
          var r2 = this.media = e3.media;
          if (r2 && bn) {
            var i3 = this.mediaSource = new bn();
            i3.addEventListener("sourceopen", this._onMediaSourceOpen), i3.addEventListener("sourceended", this._onMediaSourceEnded), i3.addEventListener("sourceclose", this._onMediaSourceClose), r2.src = self.URL.createObjectURL(i3), this._objectUrl = r2.src, r2.addEventListener("emptied", this._onMediaEmptied);
          }
        }, e2.onMediaDetaching = function() {
          var t3 = this.media, e3 = this.mediaSource, r2 = this._objectUrl;
          if (e3) {
            if (w.log("[buffer-controller]: media source detaching"), "open" === e3.readyState)
              try {
                e3.endOfStream();
              } catch (t4) {
                w.warn("[buffer-controller]: onMediaDetaching: " + t4.message + " while calling endOfStream");
              }
            this.onBufferReset(), e3.removeEventListener("sourceopen", this._onMediaSourceOpen), e3.removeEventListener("sourceended", this._onMediaSourceEnded), e3.removeEventListener("sourceclose", this._onMediaSourceClose), t3 && (t3.removeEventListener("emptied", this._onMediaEmptied), r2 && self.URL.revokeObjectURL(r2), t3.src === r2 ? (t3.removeAttribute("src"), t3.load()) : w.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
          }
          this.hls.trigger(S.MEDIA_DETACHED, void 0);
        }, e2.onBufferReset = function() {
          var t3 = this;
          this.getSourceBufferTypes().forEach(function(e3) {
            var r2 = t3.sourceBuffer[e3];
            try {
              r2 && (t3.removeBufferListeners(e3), t3.mediaSource && t3.mediaSource.removeSourceBuffer(r2), t3.sourceBuffer[e3] = void 0);
            } catch (t4) {
              w.warn("[buffer-controller]: Failed to reset the " + e3 + " buffer", t4);
            }
          }), this._initSourceBuffer();
        }, e2.onBufferCodecs = function(t3, e3) {
          var r2 = this, i3 = this.getSourceBufferTypes().length;
          Object.keys(e3).forEach(function(t4) {
            if (i3) {
              var n2 = r2.tracks[t4];
              if (n2 && "function" == typeof n2.buffer.changeType) {
                var a2 = e3[t4], s2 = a2.id, o2 = a2.codec, l2 = a2.levelCodec, u2 = a2.container, h2 = a2.metadata, d2 = (n2.levelCodec || n2.codec).replace(Dn, "$1"), c2 = (l2 || o2).replace(Dn, "$1");
                if (d2 !== c2) {
                  var f2 = u2 + ";codecs=" + (l2 || o2);
                  r2.appendChangeType(t4, f2), w.log("[buffer-controller]: switching codec " + d2 + " to " + c2), r2.tracks[t4] = { buffer: n2.buffer, codec: o2, container: u2, levelCodec: l2, metadata: h2, id: s2 };
                }
              }
            } else
              r2.pendingTracks[t4] = e3[t4];
          }), i3 || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks());
        }, e2.appendChangeType = function(t3, e3) {
          var r2 = this, i3 = this.operationQueue, n2 = { execute: function() {
            var n3 = r2.sourceBuffer[t3];
            n3 && (w.log("[buffer-controller]: changing " + t3 + " sourceBuffer type to " + e3), n3.changeType(e3)), i3.shiftAndExecuteNext(t3);
          }, onStart: function() {
          }, onComplete: function() {
          }, onError: function(e4) {
            w.warn("[buffer-controller]: Failed to change " + t3 + " SourceBuffer type", e4);
          } };
          i3.append(n2, t3);
        }, e2.onBufferAppending = function(t3, e3) {
          var r2 = this, i3 = this.hls, n2 = this.operationQueue, a2 = this.tracks, s2 = e3.data, o2 = e3.type, l2 = e3.frag, u2 = e3.part, h2 = e3.chunkMeta, d2 = h2.buffering[o2], c2 = self.performance.now();
          d2.start = c2;
          var f2 = l2.stats.buffering, g2 = u2 ? u2.stats.buffering : null;
          0 === f2.start && (f2.start = c2), g2 && 0 === g2.start && (g2.start = c2);
          var v2 = a2.audio, m2 = false;
          "audio" === o2 && "audio/mpeg" === (null == v2 ? void 0 : v2.container) && (m2 = !this.lastMpegAudioChunk || 1 === h2.id || this.lastMpegAudioChunk.sn !== h2.sn, this.lastMpegAudioChunk = h2);
          var p2 = l2.start, y2 = { execute: function() {
            if (d2.executeStart = self.performance.now(), m2) {
              var t4 = r2.sourceBuffer[o2];
              if (t4) {
                var e4 = p2 - t4.timestampOffset;
                Math.abs(e4) >= 0.1 && (w.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + p2 + " (delta: " + e4 + ") sn: " + l2.sn + ")"), t4.timestampOffset = p2);
              }
            }
            r2.appendExecutor(s2, o2);
          }, onStart: function() {
          }, onComplete: function() {
            var t4 = self.performance.now();
            d2.executeEnd = d2.end = t4, 0 === f2.first && (f2.first = t4), g2 && 0 === g2.first && (g2.first = t4);
            var e4 = r2.sourceBuffer, i4 = {};
            for (var n3 in e4)
              i4[n3] = Ir.getBuffered(e4[n3]);
            r2.appendError = 0, r2.hls.trigger(S.BUFFER_APPENDED, { type: o2, frag: l2, part: u2, chunkMeta: h2, parent: l2.type, timeRanges: i4 });
          }, onError: function(t4) {
            w.error("[buffer-controller]: Error encountered while trying to append to the " + o2 + " SourceBuffer", t4);
            var e4 = { type: L.MEDIA_ERROR, parent: l2.type, details: R.BUFFER_APPEND_ERROR, frag: l2, part: u2, chunkMeta: h2, error: t4, err: t4, fatal: false };
            t4.code === DOMException.QUOTA_EXCEEDED_ERR ? e4.details = R.BUFFER_FULL_ERROR : (r2.appendError++, e4.details = R.BUFFER_APPEND_ERROR, r2.appendError > i3.config.appendErrorMaxRetry && (w.error("[buffer-controller]: Failed " + i3.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), e4.fatal = true)), i3.trigger(S.ERROR, e4);
          } };
          n2.append(y2, o2);
        }, e2.onBufferFlushing = function(t3, e3) {
          var r2 = this, i3 = this.operationQueue, n2 = function(t4) {
            return { execute: r2.removeExecutor.bind(r2, t4, e3.startOffset, e3.endOffset), onStart: function() {
            }, onComplete: function() {
              r2.hls.trigger(S.BUFFER_FLUSHED, { type: t4 });
            }, onError: function(e4) {
              w.warn("[buffer-controller]: Failed to remove from " + t4 + " SourceBuffer", e4);
            } };
          };
          e3.type ? i3.append(n2(e3.type), e3.type) : this.getSourceBufferTypes().forEach(function(t4) {
            i3.append(n2(t4), t4);
          });
        }, e2.onFragParsed = function(t3, e3) {
          var r2 = this, i3 = e3.frag, n2 = e3.part, a2 = [], s2 = n2 ? n2.elementaryStreams : i3.elementaryStreams;
          s2[U] ? a2.push("audiovideo") : (s2[O] && a2.push("audio"), s2[N] && a2.push("video")), 0 === a2.length && w.warn("Fragments must have at least one ElementaryStreamType set. type: " + i3.type + " level: " + i3.level + " sn: " + i3.sn), this.blockBuffers(function() {
            var t4 = self.performance.now();
            i3.stats.buffering.end = t4, n2 && (n2.stats.buffering.end = t4);
            var e4 = n2 ? n2.stats : i3.stats;
            r2.hls.trigger(S.FRAG_BUFFERED, { frag: i3, part: n2, stats: e4, id: i3.type });
          }, a2);
        }, e2.onFragChanged = function(t3, e3) {
          this.flushBackBuffer();
        }, e2.onBufferEos = function(t3, e3) {
          var r2 = this;
          this.getSourceBufferTypes().reduce(function(t4, i3) {
            var n2 = r2.sourceBuffer[i3];
            return !n2 || e3.type && e3.type !== i3 || (n2.ending = true, n2.ended || (n2.ended = true, w.log("[buffer-controller]: " + i3 + " sourceBuffer now EOS"))), t4 && !(n2 && !n2.ended);
          }, true) && (w.log("[buffer-controller]: Queueing mediaSource.endOfStream()"), this.blockBuffers(function() {
            r2.getSourceBufferTypes().forEach(function(t5) {
              var e4 = r2.sourceBuffer[t5];
              e4 && (e4.ending = false);
            });
            var t4 = r2.mediaSource;
            t4 && "open" === t4.readyState ? (w.log("[buffer-controller]: Calling mediaSource.endOfStream()"), t4.endOfStream()) : t4 && w.info("[buffer-controller]: Could not call mediaSource.endOfStream(). mediaSource.readyState: " + t4.readyState);
          }));
        }, e2.onLevelUpdated = function(t3, e3) {
          var r2 = e3.details;
          r2.fragments.length && (this.details = r2, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
        }, e2.flushBackBuffer = function() {
          var t3 = this.hls, e3 = this.details, r2 = this.media, i3 = this.sourceBuffer;
          if (r2 && null !== e3) {
            var n2 = this.getSourceBufferTypes();
            if (n2.length) {
              var a2 = e3.live && null !== t3.config.liveBackBufferLength ? t3.config.liveBackBufferLength : t3.config.backBufferLength;
              if (E(a2) && !(a2 < 0)) {
                var s2 = r2.currentTime, o2 = e3.levelTargetDuration, l2 = Math.max(a2, o2), u2 = Math.floor(s2 / o2) * o2 - l2;
                n2.forEach(function(r3) {
                  var n3 = i3[r3];
                  if (n3) {
                    var a3 = Ir.getBuffered(n3);
                    if (a3.length > 0 && u2 > a3.start(0)) {
                      if (t3.trigger(S.BACK_BUFFER_REACHED, { bufferEnd: u2 }), e3.live)
                        t3.trigger(S.LIVE_BACK_BUFFER_REACHED, { bufferEnd: u2 });
                      else if (n3.ended && a3.end(a3.length - 1) - s2 < 2 * o2)
                        return void w.info("[buffer-controller]: Cannot flush " + r3 + " back buffer while SourceBuffer is in ended state");
                      t3.trigger(S.BUFFER_FLUSHING, { startOffset: 0, endOffset: u2, type: r3 });
                    }
                  }
                });
              }
            }
          }
        }, e2.updateMediaElementDuration = function() {
          if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
            var t3 = this.details, e3 = this.hls, r2 = this.media, i3 = this.mediaSource, n2 = t3.fragments[0].start + t3.totalduration, a2 = r2.duration, s2 = E(i3.duration) ? i3.duration : 0;
            t3.live && e3.config.liveDurationInfinity ? (w.log("[buffer-controller]: Media Source duration is set to Infinity"), i3.duration = 1 / 0, this.updateSeekableRange(t3)) : (n2 > s2 && n2 > a2 || !E(a2)) && (w.log("[buffer-controller]: Updating Media Source duration to " + n2.toFixed(3)), i3.duration = n2);
          }
        }, e2.updateSeekableRange = function(t3) {
          var e3 = this.mediaSource, r2 = t3.fragments;
          if (r2.length && t3.live && null != e3 && e3.setLiveSeekableRange) {
            var i3 = Math.max(0, r2[0].start), n2 = Math.max(i3, i3 + t3.totalduration);
            e3.setLiveSeekableRange(i3, n2);
          }
        }, e2.checkPendingTracks = function() {
          var t3 = this.bufferCodecEventsExpected, e3 = this.operationQueue, r2 = this.pendingTracks, i3 = Object.keys(r2).length;
          if (i3 && !t3 || 2 === i3) {
            this.createSourceBuffers(r2), this.pendingTracks = {};
            var n2 = this.getSourceBufferTypes();
            if (n2.length)
              this.hls.trigger(S.BUFFER_CREATED, { tracks: this.tracks }), n2.forEach(function(t4) {
                e3.executeNext(t4);
              });
            else {
              var a2 = new Error("could not create source buffer for media codec(s)");
              this.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.BUFFER_INCOMPATIBLE_CODECS_ERROR, fatal: true, error: a2, reason: a2.message });
            }
          }
        }, e2.createSourceBuffers = function(t3) {
          var e3 = this.sourceBuffer, r2 = this.mediaSource;
          if (!r2)
            throw Error("createSourceBuffers called when mediaSource was null");
          for (var i3 in t3)
            if (!e3[i3]) {
              var n2 = t3[i3];
              if (!n2)
                throw Error("source buffer exists for track " + i3 + ", however track does not");
              var a2 = n2.levelCodec || n2.codec, s2 = n2.container + ";codecs=" + a2;
              w.log("[buffer-controller]: creating sourceBuffer(" + s2 + ")");
              try {
                var o2 = e3[i3] = r2.addSourceBuffer(s2), l2 = i3;
                this.addBufferListener(l2, "updatestart", this._onSBUpdateStart), this.addBufferListener(l2, "updateend", this._onSBUpdateEnd), this.addBufferListener(l2, "error", this._onSBUpdateError), this.tracks[i3] = { buffer: o2, codec: a2, container: n2.container, levelCodec: n2.levelCodec, metadata: n2.metadata, id: n2.id };
              } catch (t4) {
                w.error("[buffer-controller]: error while trying to add sourceBuffer: " + t4.message), this.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.BUFFER_ADD_CODEC_ERROR, fatal: false, error: t4, mimeType: s2 });
              }
            }
        }, e2._onSBUpdateStart = function(t3) {
          this.operationQueue.current(t3).onStart();
        }, e2._onSBUpdateEnd = function(t3) {
          var e3 = this.operationQueue;
          e3.current(t3).onComplete(), e3.shiftAndExecuteNext(t3);
        }, e2._onSBUpdateError = function(t3, e3) {
          var r2 = new Error(t3 + " SourceBuffer error");
          w.error("[buffer-controller]: " + r2, e3), this.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: R.BUFFER_APPENDING_ERROR, error: r2, fatal: false });
          var i3 = this.operationQueue.current(t3);
          i3 && i3.onError(e3);
        }, e2.removeExecutor = function(t3, e3, r2) {
          var i3 = this.media, n2 = this.mediaSource, a2 = this.operationQueue, s2 = this.sourceBuffer[t3];
          if (!i3 || !n2 || !s2)
            return w.warn("[buffer-controller]: Attempting to remove from the " + t3 + " SourceBuffer, but it does not exist"), void a2.shiftAndExecuteNext(t3);
          var o2 = E(i3.duration) ? i3.duration : 1 / 0, l2 = E(n2.duration) ? n2.duration : 1 / 0, u2 = Math.max(0, e3), h2 = Math.min(r2, o2, l2);
          h2 > u2 && !s2.ending ? (s2.ended = false, w.log("[buffer-controller]: Removing [" + u2 + "," + h2 + "] from the " + t3 + " SourceBuffer"), s2.remove(u2, h2)) : a2.shiftAndExecuteNext(t3);
        }, e2.appendExecutor = function(t3, e3) {
          var r2 = this.operationQueue, i3 = this.sourceBuffer[e3];
          if (!i3)
            return w.warn("[buffer-controller]: Attempting to append to the " + e3 + " SourceBuffer, but it does not exist"), void r2.shiftAndExecuteNext(e3);
          i3.ended = false, i3.appendBuffer(t3);
        }, e2.blockBuffers = function(t3, e3) {
          var r2 = this;
          if (void 0 === e3 && (e3 = this.getSourceBufferTypes()), !e3.length)
            return w.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve().then(t3);
          var i3 = this.operationQueue, n2 = e3.map(function(t4) {
            return i3.appendBlocker(t4);
          });
          Promise.all(n2).then(function() {
            t3(), e3.forEach(function(t4) {
              var e4 = r2.sourceBuffer[t4];
              null != e4 && e4.updating || i3.shiftAndExecuteNext(t4);
            });
          });
        }, e2.getSourceBufferTypes = function() {
          return Object.keys(this.sourceBuffer);
        }, e2.addBufferListener = function(t3, e3, r2) {
          var i3 = this.sourceBuffer[t3];
          if (i3) {
            var n2 = r2.bind(this, t3);
            this.listeners[t3].push({ event: e3, listener: n2 }), i3.addEventListener(e3, n2);
          }
        }, e2.removeBufferListeners = function(t3) {
          var e3 = this.sourceBuffer[t3];
          e3 && this.listeners[t3].forEach(function(t4) {
            e3.removeEventListener(t4.event, t4.listener);
          });
        }, t2;
      }(), wn = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 }, Cn = function(t2) {
        var e2 = t2;
        return wn.hasOwnProperty(t2) && (e2 = wn[t2]), String.fromCharCode(e2);
      }, _n = 15, Pn = 100, xn = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 }, Fn = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 }, Mn = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 }, On = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 }, Nn = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], Un = function() {
        function t2() {
          this.time = null, this.verboseLevel = 0;
        }
        return t2.prototype.log = function(t3, e2) {
          if (this.verboseLevel >= t3) {
            var r2 = "function" == typeof e2 ? e2() : e2;
            w.log(this.time + " [" + t3 + "] " + r2);
          }
        }, t2;
      }(), Bn = function(t2) {
        for (var e2 = [], r2 = 0; r2 < t2.length; r2++)
          e2.push(t2[r2].toString(16));
        return e2;
      }, Gn = function() {
        function t2(t3, e3, r2, i3, n2) {
          this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = t3 || "white", this.underline = e3 || false, this.italics = r2 || false, this.background = i3 || "black", this.flash = n2 || false;
        }
        var e2 = t2.prototype;
        return e2.reset = function() {
          this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false;
        }, e2.setStyles = function(t3) {
          for (var e3 = ["foreground", "underline", "italics", "background", "flash"], r2 = 0; r2 < e3.length; r2++) {
            var i3 = e3[r2];
            t3.hasOwnProperty(i3) && (this[i3] = t3[i3]);
          }
        }, e2.isDefault = function() {
          return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash;
        }, e2.equals = function(t3) {
          return this.foreground === t3.foreground && this.underline === t3.underline && this.italics === t3.italics && this.background === t3.background && this.flash === t3.flash;
        }, e2.copy = function(t3) {
          this.foreground = t3.foreground, this.underline = t3.underline, this.italics = t3.italics, this.background = t3.background, this.flash = t3.flash;
        }, e2.toString = function() {
          return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
        }, t2;
      }(), Kn = function() {
        function t2(t3, e3, r2, i3, n2, a2) {
          this.uchar = void 0, this.penState = void 0, this.uchar = t3 || " ", this.penState = new Gn(e3, r2, i3, n2, a2);
        }
        var e2 = t2.prototype;
        return e2.reset = function() {
          this.uchar = " ", this.penState.reset();
        }, e2.setChar = function(t3, e3) {
          this.uchar = t3, this.penState.copy(e3);
        }, e2.setPenState = function(t3) {
          this.penState.copy(t3);
        }, e2.equals = function(t3) {
          return this.uchar === t3.uchar && this.penState.equals(t3.penState);
        }, e2.copy = function(t3) {
          this.uchar = t3.uchar, this.penState.copy(t3.penState);
        }, e2.isEmpty = function() {
          return " " === this.uchar && this.penState.isDefault();
        }, t2;
      }(), Hn = function() {
        function t2(t3) {
          this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
          for (var e3 = 0; e3 < Pn; e3++)
            this.chars.push(new Kn());
          this.logger = t3, this.pos = 0, this.currPenState = new Gn();
        }
        var e2 = t2.prototype;
        return e2.equals = function(t3) {
          for (var e3 = true, r2 = 0; r2 < Pn; r2++)
            if (!this.chars[r2].equals(t3.chars[r2])) {
              e3 = false;
              break;
            }
          return e3;
        }, e2.copy = function(t3) {
          for (var e3 = 0; e3 < Pn; e3++)
            this.chars[e3].copy(t3.chars[e3]);
        }, e2.isEmpty = function() {
          for (var t3 = true, e3 = 0; e3 < Pn; e3++)
            if (!this.chars[e3].isEmpty()) {
              t3 = false;
              break;
            }
          return t3;
        }, e2.setCursor = function(t3) {
          this.pos !== t3 && (this.pos = t3), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > Pn && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = Pn);
        }, e2.moveCursor = function(t3) {
          var e3 = this.pos + t3;
          if (t3 > 1)
            for (var r2 = this.pos + 1; r2 < e3 + 1; r2++)
              this.chars[r2].setPenState(this.currPenState);
          this.setCursor(e3);
        }, e2.backSpace = function() {
          this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
        }, e2.insertChar = function(t3) {
          var e3 = this;
          t3 >= 144 && this.backSpace();
          var r2 = Cn(t3);
          this.pos >= Pn ? this.logger.log(0, function() {
            return "Cannot insert " + t3.toString(16) + " (" + r2 + ") at position " + e3.pos + ". Skipping it!";
          }) : (this.chars[this.pos].setChar(r2, this.currPenState), this.moveCursor(1));
        }, e2.clearFromPos = function(t3) {
          var e3;
          for (e3 = t3; e3 < Pn; e3++)
            this.chars[e3].reset();
        }, e2.clear = function() {
          this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
        }, e2.clearToEndOfRow = function() {
          this.clearFromPos(this.pos);
        }, e2.getTextString = function() {
          for (var t3 = [], e3 = true, r2 = 0; r2 < Pn; r2++) {
            var i3 = this.chars[r2].uchar;
            " " !== i3 && (e3 = false), t3.push(i3);
          }
          return e3 ? "" : t3.join("");
        }, e2.setPenStyles = function(t3) {
          this.currPenState.setStyles(t3), this.chars[this.pos].setPenState(this.currPenState);
        }, t2;
      }(), Vn = function() {
        function t2(t3) {
          this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
          for (var e3 = 0; e3 < _n; e3++)
            this.rows.push(new Hn(t3));
          this.logger = t3, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset();
        }
        var e2 = t2.prototype;
        return e2.reset = function() {
          for (var t3 = 0; t3 < _n; t3++)
            this.rows[t3].clear();
          this.currRow = 14;
        }, e2.equals = function(t3) {
          for (var e3 = true, r2 = 0; r2 < _n; r2++)
            if (!this.rows[r2].equals(t3.rows[r2])) {
              e3 = false;
              break;
            }
          return e3;
        }, e2.copy = function(t3) {
          for (var e3 = 0; e3 < _n; e3++)
            this.rows[e3].copy(t3.rows[e3]);
        }, e2.isEmpty = function() {
          for (var t3 = true, e3 = 0; e3 < _n; e3++)
            if (!this.rows[e3].isEmpty()) {
              t3 = false;
              break;
            }
          return t3;
        }, e2.backSpace = function() {
          this.rows[this.currRow].backSpace();
        }, e2.clearToEndOfRow = function() {
          this.rows[this.currRow].clearToEndOfRow();
        }, e2.insertChar = function(t3) {
          this.rows[this.currRow].insertChar(t3);
        }, e2.setPen = function(t3) {
          this.rows[this.currRow].setPenStyles(t3);
        }, e2.moveCursor = function(t3) {
          this.rows[this.currRow].moveCursor(t3);
        }, e2.setCursor = function(t3) {
          this.logger.log(2, "setCursor: " + t3), this.rows[this.currRow].setCursor(t3);
        }, e2.setPAC = function(t3) {
          this.logger.log(2, function() {
            return "pacData = " + JSON.stringify(t3);
          });
          var e3 = t3.row - 1;
          if (this.nrRollUpRows && e3 < this.nrRollUpRows - 1 && (e3 = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e3) {
            for (var r2 = 0; r2 < _n; r2++)
              this.rows[r2].clear();
            var i3 = this.currRow + 1 - this.nrRollUpRows, n2 = this.lastOutputScreen;
            if (n2) {
              var a2 = n2.rows[i3].cueStartTime, s2 = this.logger.time;
              if (a2 && null !== s2 && a2 < s2)
                for (var o2 = 0; o2 < this.nrRollUpRows; o2++)
                  this.rows[e3 - this.nrRollUpRows + o2 + 1].copy(n2.rows[i3 + o2]);
            }
          }
          this.currRow = e3;
          var l2 = this.rows[this.currRow];
          if (null !== t3.indent) {
            var u2 = t3.indent, h2 = Math.max(u2 - 1, 0);
            l2.setCursor(t3.indent), t3.color = l2.chars[h2].penState.foreground;
          }
          var d2 = { foreground: t3.color, underline: t3.underline, italics: t3.italics, background: "black", flash: false };
          this.setPen(d2);
        }, e2.setBkgData = function(t3) {
          this.logger.log(2, function() {
            return "bkgData = " + JSON.stringify(t3);
          }), this.backSpace(), this.setPen(t3), this.insertChar(32);
        }, e2.setRollUpRows = function(t3) {
          this.nrRollUpRows = t3;
        }, e2.rollUp = function() {
          var t3 = this;
          if (null !== this.nrRollUpRows) {
            this.logger.log(1, function() {
              return t3.getDisplayText();
            });
            var e3 = this.currRow + 1 - this.nrRollUpRows, r2 = this.rows.splice(e3, 1)[0];
            r2.clear(), this.rows.splice(this.currRow, 0, r2), this.logger.log(2, "Rolling up");
          } else
            this.logger.log(3, "roll_up but nrRollUpRows not set yet");
        }, e2.getDisplayText = function(t3) {
          t3 = t3 || false;
          for (var e3 = [], r2 = "", i3 = -1, n2 = 0; n2 < _n; n2++) {
            var a2 = this.rows[n2].getTextString();
            a2 && (i3 = n2 + 1, t3 ? e3.push("Row " + i3 + ": '" + a2 + "'") : e3.push(a2.trim()));
          }
          return e3.length > 0 && (r2 = t3 ? "[" + e3.join(" | ") + "]" : e3.join("\n")), r2;
        }, e2.getTextAndFormat = function() {
          return this.rows;
        }, t2;
      }(), Yn = function() {
        function t2(t3, e3, r2) {
          this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t3, this.outputFilter = e3, this.mode = null, this.verbose = 0, this.displayedMemory = new Vn(r2), this.nonDisplayedMemory = new Vn(r2), this.lastOutputScreen = new Vn(r2), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r2;
        }
        var e2 = t2.prototype;
        return e2.reset = function() {
          this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
        }, e2.getHandler = function() {
          return this.outputFilter;
        }, e2.setHandler = function(t3) {
          this.outputFilter = t3;
        }, e2.setPAC = function(t3) {
          this.writeScreen.setPAC(t3);
        }, e2.setBkgData = function(t3) {
          this.writeScreen.setBkgData(t3);
        }, e2.setMode = function(t3) {
          t3 !== this.mode && (this.mode = t3, this.logger.log(2, function() {
            return "MODE=" + t3;
          }), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t3);
        }, e2.insertChars = function(t3) {
          for (var e3 = this, r2 = 0; r2 < t3.length; r2++)
            this.writeScreen.insertChar(t3[r2]);
          var i3 = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
          this.logger.log(2, function() {
            return i3 + ": " + e3.writeScreen.getDisplayText(true);
          }), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(1, function() {
            return "DISPLAYED: " + e3.displayedMemory.getDisplayText(true);
          }), this.outputDataUpdate());
        }, e2.ccRCL = function() {
          this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
        }, e2.ccBS = function() {
          this.logger.log(2, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
        }, e2.ccAOF = function() {
        }, e2.ccAON = function() {
        }, e2.ccDER = function() {
          this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
        }, e2.ccRU = function(t3) {
          this.logger.log(2, "RU(" + t3 + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t3);
        }, e2.ccFON = function() {
          this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({ flash: true });
        }, e2.ccRDC = function() {
          this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
        }, e2.ccTR = function() {
          this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
        }, e2.ccRTD = function() {
          this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
        }, e2.ccEDM = function() {
          this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(true);
        }, e2.ccCR = function() {
          this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(true);
        }, e2.ccENM = function() {
          this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
        }, e2.ccEOC = function() {
          var t3 = this;
          if (this.logger.log(2, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
            var e3 = this.displayedMemory;
            this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e3, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, function() {
              return "DISP: " + t3.displayedMemory.getDisplayText();
            });
          }
          this.outputDataUpdate(true);
        }, e2.ccTO = function(t3) {
          this.logger.log(2, "TO(" + t3 + ") - Tab Offset"), this.writeScreen.moveCursor(t3);
        }, e2.ccMIDROW = function(t3) {
          var e3 = { flash: false };
          if (e3.underline = t3 % 2 == 1, e3.italics = t3 >= 46, e3.italics)
            e3.foreground = "white";
          else {
            var r2 = Math.floor(t3 / 2) - 16;
            e3.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r2];
          }
          this.logger.log(2, "MIDROW: " + JSON.stringify(e3)), this.writeScreen.setPen(e3);
        }, e2.outputDataUpdate = function(t3) {
          void 0 === t3 && (t3 = false);
          var e3 = this.logger.time;
          null !== e3 && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e3, this.lastOutputScreen), t3 && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e3) : this.cueStartTime = e3, this.lastOutputScreen.copy(this.displayedMemory));
        }, e2.cueSplitAtTime = function(t3) {
          this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t3, this.displayedMemory), this.cueStartTime = t3));
        }, t2;
      }(), Wn = function() {
        function t2(t3, e3, r2) {
          this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
          var i3 = new Un();
          this.channels = [null, new Yn(t3, e3, i3), new Yn(t3 + 1, r2, i3)], this.cmdHistory = { a: null, b: null }, this.logger = i3;
        }
        var e2 = t2.prototype;
        return e2.getHandler = function(t3) {
          return this.channels[t3].getHandler();
        }, e2.setHandler = function(t3, e3) {
          this.channels[t3].setHandler(e3);
        }, e2.addData = function(t3, e3) {
          var r2, i3, n2, a2 = false;
          this.logger.time = t3;
          for (var s2 = 0; s2 < e3.length; s2 += 2)
            if (i3 = 127 & e3[s2], n2 = 127 & e3[s2 + 1], 0 !== i3 || 0 !== n2) {
              if (this.logger.log(3, "[" + Bn([e3[s2], e3[s2 + 1]]) + "] -> (" + Bn([i3, n2]) + ")"), (r2 = this.parseCmd(i3, n2)) || (r2 = this.parseMidrow(i3, n2)), r2 || (r2 = this.parsePAC(i3, n2)), r2 || (r2 = this.parseBackgroundAttributes(i3, n2)), !r2 && (a2 = this.parseChars(i3, n2))) {
                var o2 = this.currentChannel;
                o2 && o2 > 0 ? this.channels[o2].insertChars(a2) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
              }
              r2 || a2 || this.logger.log(2, "Couldn't parse cleaned data " + Bn([i3, n2]) + " orig: " + Bn([e3[s2], e3[s2 + 1]]));
            }
        }, e2.parseCmd = function(t3, e3) {
          var r2 = this.cmdHistory;
          if (!((20 === t3 || 28 === t3 || 21 === t3 || 29 === t3) && e3 >= 32 && e3 <= 47 || (23 === t3 || 31 === t3) && e3 >= 33 && e3 <= 35))
            return false;
          if (qn(t3, e3, r2))
            return jn(null, null, r2), this.logger.log(3, "Repeated command (" + Bn([t3, e3]) + ") is dropped"), true;
          var i3 = 20 === t3 || 21 === t3 || 23 === t3 ? 1 : 2, n2 = this.channels[i3];
          return 20 === t3 || 21 === t3 || 28 === t3 || 29 === t3 ? 32 === e3 ? n2.ccRCL() : 33 === e3 ? n2.ccBS() : 34 === e3 ? n2.ccAOF() : 35 === e3 ? n2.ccAON() : 36 === e3 ? n2.ccDER() : 37 === e3 ? n2.ccRU(2) : 38 === e3 ? n2.ccRU(3) : 39 === e3 ? n2.ccRU(4) : 40 === e3 ? n2.ccFON() : 41 === e3 ? n2.ccRDC() : 42 === e3 ? n2.ccTR() : 43 === e3 ? n2.ccRTD() : 44 === e3 ? n2.ccEDM() : 45 === e3 ? n2.ccCR() : 46 === e3 ? n2.ccENM() : 47 === e3 && n2.ccEOC() : n2.ccTO(e3 - 32), jn(t3, e3, r2), this.currentChannel = i3, true;
        }, e2.parseMidrow = function(t3, e3) {
          var r2 = 0;
          if ((17 === t3 || 25 === t3) && e3 >= 32 && e3 <= 47) {
            if ((r2 = 17 === t3 ? 1 : 2) !== this.currentChannel)
              return this.logger.log(0, "Mismatch channel in midrow parsing"), false;
            var i3 = this.channels[r2];
            return !!i3 && (i3.ccMIDROW(e3), this.logger.log(3, "MIDROW (" + Bn([t3, e3]) + ")"), true);
          }
          return false;
        }, e2.parsePAC = function(t3, e3) {
          var r2, i3 = this.cmdHistory;
          if (!((t3 >= 17 && t3 <= 23 || t3 >= 25 && t3 <= 31) && e3 >= 64 && e3 <= 127 || (16 === t3 || 24 === t3) && e3 >= 64 && e3 <= 95))
            return false;
          if (qn(t3, e3, i3))
            return jn(null, null, i3), true;
          var n2 = t3 <= 23 ? 1 : 2;
          r2 = e3 >= 64 && e3 <= 95 ? 1 === n2 ? xn[t3] : Mn[t3] : 1 === n2 ? Fn[t3] : On[t3];
          var a2 = this.channels[n2];
          return !!a2 && (a2.setPAC(this.interpretPAC(r2, e3)), jn(t3, e3, i3), this.currentChannel = n2, true);
        }, e2.interpretPAC = function(t3, e3) {
          var r2, i3 = { color: null, italics: false, indent: null, underline: false, row: t3 };
          return r2 = e3 > 95 ? e3 - 96 : e3 - 64, i3.underline = 1 == (1 & r2), r2 <= 13 ? i3.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r2 / 2)] : r2 <= 15 ? (i3.italics = true, i3.color = "white") : i3.indent = 4 * Math.floor((r2 - 16) / 2), i3;
        }, e2.parseChars = function(t3, e3) {
          var r2, i3, n2 = null, a2 = null;
          if (t3 >= 25 ? (r2 = 2, a2 = t3 - 8) : (r2 = 1, a2 = t3), a2 >= 17 && a2 <= 19 ? (i3 = 17 === a2 ? e3 + 80 : 18 === a2 ? e3 + 112 : e3 + 144, this.logger.log(2, "Special char '" + Cn(i3) + "' in channel " + r2), n2 = [i3]) : t3 >= 32 && t3 <= 127 && (n2 = 0 === e3 ? [t3] : [t3, e3]), n2) {
            var s2 = Bn(n2);
            this.logger.log(3, "Char codes =  " + s2.join(",")), jn(t3, e3, this.cmdHistory);
          }
          return n2;
        }, e2.parseBackgroundAttributes = function(t3, e3) {
          var r2;
          if (!((16 === t3 || 24 === t3) && e3 >= 32 && e3 <= 47 || (23 === t3 || 31 === t3) && e3 >= 45 && e3 <= 47))
            return false;
          var i3 = {};
          16 === t3 || 24 === t3 ? (r2 = Math.floor((e3 - 32) / 2), i3.background = Nn[r2], e3 % 2 == 1 && (i3.background = i3.background + "_semi")) : 45 === e3 ? i3.background = "transparent" : (i3.foreground = "black", 47 === e3 && (i3.underline = true));
          var n2 = t3 <= 23 ? 1 : 2;
          return this.channels[n2].setBkgData(i3), jn(t3, e3, this.cmdHistory), true;
        }, e2.reset = function() {
          for (var t3 = 0; t3 < Object.keys(this.channels).length; t3++) {
            var e3 = this.channels[t3];
            e3 && e3.reset();
          }
          this.cmdHistory = { a: null, b: null };
        }, e2.cueSplitAtTime = function(t3) {
          for (var e3 = 0; e3 < this.channels.length; e3++) {
            var r2 = this.channels[e3];
            r2 && r2.cueSplitAtTime(t3);
          }
        }, t2;
      }();
      function jn(t2, e2, r2) {
        r2.a = t2, r2.b = e2;
      }
      function qn(t2, e2, r2) {
        return r2.a === t2 && r2.b === e2;
      }
      var Xn = function() {
        function t2(t3, e3) {
          this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t3, this.trackName = e3;
        }
        var e2 = t2.prototype;
        return e2.dispatchCue = function() {
          null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
        }, e2.newCue = function(t3, e3, r2) {
          (null === this.startTime || this.startTime > t3) && (this.startTime = t3), this.endTime = e3, this.screen = r2, this.timelineController.createCaptionsTrack(this.trackName);
        }, e2.reset = function() {
          this.cueRanges = [], this.startTime = null;
        }, t2;
      }(), zn = function() {
        if ("undefined" != typeof self && self.VTTCue)
          return self.VTTCue;
        var t2 = ["", "lr", "rl"], e2 = ["start", "middle", "end", "left", "right"];
        function r2(t3, e3) {
          if ("string" != typeof e3)
            return false;
          if (!Array.isArray(t3))
            return false;
          var r3 = e3.toLowerCase();
          return !!~t3.indexOf(r3) && r3;
        }
        function i3(t3) {
          return r2(e2, t3);
        }
        function n2(t3) {
          for (var e3 = arguments.length, r3 = new Array(e3 > 1 ? e3 - 1 : 0), i4 = 1; i4 < e3; i4++)
            r3[i4 - 1] = arguments[i4];
          for (var n3 = 1; n3 < arguments.length; n3++) {
            var a3 = arguments[n3];
            for (var s2 in a3)
              t3[s2] = a3[s2];
          }
          return t3;
        }
        function a2(e3, a3, s2) {
          var o2 = this, l2 = { enumerable: true };
          o2.hasBeenReset = false;
          var u2 = "", h2 = false, d2 = e3, c2 = a3, f2 = s2, g2 = null, v2 = "", m2 = true, p2 = "auto", y2 = "start", T2 = 50, E2 = "middle", S2 = 50, L2 = "middle";
          Object.defineProperty(o2, "id", n2({}, l2, { get: function() {
            return u2;
          }, set: function(t3) {
            u2 = "" + t3;
          } })), Object.defineProperty(o2, "pauseOnExit", n2({}, l2, { get: function() {
            return h2;
          }, set: function(t3) {
            h2 = !!t3;
          } })), Object.defineProperty(o2, "startTime", n2({}, l2, { get: function() {
            return d2;
          }, set: function(t3) {
            if ("number" != typeof t3)
              throw new TypeError("Start time must be set to a number.");
            d2 = t3, this.hasBeenReset = true;
          } })), Object.defineProperty(o2, "endTime", n2({}, l2, { get: function() {
            return c2;
          }, set: function(t3) {
            if ("number" != typeof t3)
              throw new TypeError("End time must be set to a number.");
            c2 = t3, this.hasBeenReset = true;
          } })), Object.defineProperty(o2, "text", n2({}, l2, { get: function() {
            return f2;
          }, set: function(t3) {
            f2 = "" + t3, this.hasBeenReset = true;
          } })), Object.defineProperty(o2, "region", n2({}, l2, { get: function() {
            return g2;
          }, set: function(t3) {
            g2 = t3, this.hasBeenReset = true;
          } })), Object.defineProperty(o2, "vertical", n2({}, l2, { get: function() {
            return v2;
          }, set: function(e4) {
            var i4 = function(e5) {
              return r2(t2, e5);
            }(e4);
            if (false === i4)
              throw new SyntaxError("An invalid or illegal string was specified.");
            v2 = i4, this.hasBeenReset = true;
          } })), Object.defineProperty(o2, "snapToLines", n2({}, l2, { get: function() {
            return m2;
          }, set: function(t3) {
            m2 = !!t3, this.hasBeenReset = true;
          } })), Object.defineProperty(o2, "line", n2({}, l2, { get: function() {
            return p2;
          }, set: function(t3) {
            if ("number" != typeof t3 && "auto" !== t3)
              throw new SyntaxError("An invalid number or illegal string was specified.");
            p2 = t3, this.hasBeenReset = true;
          } })), Object.defineProperty(o2, "lineAlign", n2({}, l2, { get: function() {
            return y2;
          }, set: function(t3) {
            var e4 = i3(t3);
            if (!e4)
              throw new SyntaxError("An invalid or illegal string was specified.");
            y2 = e4, this.hasBeenReset = true;
          } })), Object.defineProperty(o2, "position", n2({}, l2, { get: function() {
            return T2;
          }, set: function(t3) {
            if (t3 < 0 || t3 > 100)
              throw new Error("Position must be between 0 and 100.");
            T2 = t3, this.hasBeenReset = true;
          } })), Object.defineProperty(o2, "positionAlign", n2({}, l2, { get: function() {
            return E2;
          }, set: function(t3) {
            var e4 = i3(t3);
            if (!e4)
              throw new SyntaxError("An invalid or illegal string was specified.");
            E2 = e4, this.hasBeenReset = true;
          } })), Object.defineProperty(o2, "size", n2({}, l2, { get: function() {
            return S2;
          }, set: function(t3) {
            if (t3 < 0 || t3 > 100)
              throw new Error("Size must be between 0 and 100.");
            S2 = t3, this.hasBeenReset = true;
          } })), Object.defineProperty(o2, "align", n2({}, l2, { get: function() {
            return L2;
          }, set: function(t3) {
            var e4 = i3(t3);
            if (!e4)
              throw new SyntaxError("An invalid or illegal string was specified.");
            L2 = e4, this.hasBeenReset = true;
          } })), o2.displayState = void 0;
        }
        return a2.prototype.getCueAsHTML = function() {
          return self.WebVTT.convertCueToDOMTree(self, this.text);
        }, a2;
      }(), Qn = function() {
        function t2() {
        }
        return t2.prototype.decode = function(t3, e2) {
          if (!t3)
            return "";
          if ("string" != typeof t3)
            throw new Error("Error - expected string data.");
          return decodeURIComponent(encodeURIComponent(t3));
        }, t2;
      }();
      function $n(t2) {
        function e2(t3, e3, r3, i3) {
          return 3600 * (0 | t3) + 60 * (0 | e3) + (0 | r3) + parseFloat(i3 || 0);
        }
        var r2 = t2.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
        return r2 ? parseFloat(r2[2]) > 59 ? e2(r2[2], r2[3], 0, r2[4]) : e2(r2[1], r2[2], r2[3], r2[4]) : null;
      }
      var Jn = function() {
        function t2() {
          this.values = /* @__PURE__ */ Object.create(null);
        }
        var e2 = t2.prototype;
        return e2.set = function(t3, e3) {
          this.get(t3) || "" === e3 || (this.values[t3] = e3);
        }, e2.get = function(t3, e3, r2) {
          return r2 ? this.has(t3) ? this.values[t3] : e3[r2] : this.has(t3) ? this.values[t3] : e3;
        }, e2.has = function(t3) {
          return t3 in this.values;
        }, e2.alt = function(t3, e3, r2) {
          for (var i3 = 0; i3 < r2.length; ++i3)
            if (e3 === r2[i3]) {
              this.set(t3, e3);
              break;
            }
        }, e2.integer = function(t3, e3) {
          /^-?\d+$/.test(e3) && this.set(t3, parseInt(e3, 10));
        }, e2.percent = function(t3, e3) {
          if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e3)) {
            var r2 = parseFloat(e3);
            if (r2 >= 0 && r2 <= 100)
              return this.set(t3, r2), true;
          }
          return false;
        }, t2;
      }();
      function Zn(t2, e2, r2, i3) {
        var n2 = i3 ? t2.split(i3) : [t2];
        for (var a2 in n2)
          if ("string" == typeof n2[a2]) {
            var s2 = n2[a2].split(r2);
            2 === s2.length && e2(s2[0], s2[1]);
          }
      }
      var ta = new zn(0, 0, ""), ea = "middle" === ta.align ? "middle" : "center";
      function ra(t2, e2, r2) {
        var i3 = t2;
        function n2() {
          var e3 = $n(t2);
          if (null === e3)
            throw new Error("Malformed timestamp: " + i3);
          return t2 = t2.replace(/^[^\sa-zA-Z-]+/, ""), e3;
        }
        function a2() {
          t2 = t2.replace(/^\s+/, "");
        }
        if (a2(), e2.startTime = n2(), a2(), "-->" !== t2.slice(0, 3))
          throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + i3);
        t2 = t2.slice(3), a2(), e2.endTime = n2(), a2(), function(t3, e3) {
          var i4 = new Jn();
          Zn(t3, function(t4, e4) {
            var n4;
            switch (t4) {
              case "region":
                for (var a4 = r2.length - 1; a4 >= 0; a4--)
                  if (r2[a4].id === e4) {
                    i4.set(t4, r2[a4].region);
                    break;
                  }
                break;
              case "vertical":
                i4.alt(t4, e4, ["rl", "lr"]);
                break;
              case "line":
                n4 = e4.split(","), i4.integer(t4, n4[0]), i4.percent(t4, n4[0]) && i4.set("snapToLines", false), i4.alt(t4, n4[0], ["auto"]), 2 === n4.length && i4.alt("lineAlign", n4[1], ["start", ea, "end"]);
                break;
              case "position":
                n4 = e4.split(","), i4.percent(t4, n4[0]), 2 === n4.length && i4.alt("positionAlign", n4[1], ["start", ea, "end", "line-left", "line-right", "auto"]);
                break;
              case "size":
                i4.percent(t4, e4);
                break;
              case "align":
                i4.alt(t4, e4, ["start", ea, "end", "left", "right"]);
            }
          }, /:/, /\s/), e3.region = i4.get("region", null), e3.vertical = i4.get("vertical", "");
          var n3 = i4.get("line", "auto");
          "auto" === n3 && -1 === ta.line && (n3 = -1), e3.line = n3, e3.lineAlign = i4.get("lineAlign", "start"), e3.snapToLines = i4.get("snapToLines", true), e3.size = i4.get("size", 100), e3.align = i4.get("align", ea);
          var a3 = i4.get("position", "auto");
          "auto" === a3 && 50 === ta.position && (a3 = "start" === e3.align || "left" === e3.align ? 0 : "end" === e3.align || "right" === e3.align ? 100 : 50), e3.position = a3;
        }(t2, e2);
      }
      function ia(t2) {
        return t2.replace(/<br(?: \/)?>/gi, "\n");
      }
      var na = function() {
        function t2() {
          this.state = "INITIAL", this.buffer = "", this.decoder = new Qn(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
        }
        var e2 = t2.prototype;
        return e2.parse = function(t3) {
          var e3 = this;
          function r2() {
            var t4 = e3.buffer, r3 = 0;
            for (t4 = ia(t4); r3 < t4.length && "\r" !== t4[r3] && "\n" !== t4[r3]; )
              ++r3;
            var i4 = t4.slice(0, r3);
            return "\r" === t4[r3] && ++r3, "\n" === t4[r3] && ++r3, e3.buffer = t4.slice(r3), i4;
          }
          t3 && (e3.buffer += e3.decoder.decode(t3, { stream: true }));
          try {
            var i3 = "";
            if ("INITIAL" === e3.state) {
              if (!/\r\n|\n/.test(e3.buffer))
                return this;
              var n2 = (i3 = r2()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
              if (null == n2 || !n2[0])
                throw new Error("Malformed WebVTT signature.");
              e3.state = "HEADER";
            }
            for (var a2 = false; e3.buffer; ) {
              if (!/\r\n|\n/.test(e3.buffer))
                return this;
              switch (a2 ? a2 = false : i3 = r2(), e3.state) {
                case "HEADER":
                  /:/.test(i3) ? Zn(i3, function(t4, e4) {
                  }, /:/) : i3 || (e3.state = "ID");
                  continue;
                case "NOTE":
                  i3 || (e3.state = "ID");
                  continue;
                case "ID":
                  if (/^NOTE($|[ \t])/.test(i3)) {
                    e3.state = "NOTE";
                    break;
                  }
                  if (!i3)
                    continue;
                  if (e3.cue = new zn(0, 0, ""), e3.state = "CUE", -1 === i3.indexOf("-->")) {
                    e3.cue.id = i3;
                    continue;
                  }
                case "CUE":
                  if (!e3.cue) {
                    e3.state = "BADCUE";
                    continue;
                  }
                  try {
                    ra(i3, e3.cue, e3.regionList);
                  } catch (t4) {
                    e3.cue = null, e3.state = "BADCUE";
                    continue;
                  }
                  e3.state = "CUETEXT";
                  continue;
                case "CUETEXT":
                  var s2 = -1 !== i3.indexOf("-->");
                  if (!i3 || s2 && (a2 = true)) {
                    e3.oncue && e3.cue && e3.oncue(e3.cue), e3.cue = null, e3.state = "ID";
                    continue;
                  }
                  if (null === e3.cue)
                    continue;
                  e3.cue.text && (e3.cue.text += "\n"), e3.cue.text += i3;
                  continue;
                case "BADCUE":
                  i3 || (e3.state = "ID");
              }
            }
          } catch (t4) {
            "CUETEXT" === e3.state && e3.cue && e3.oncue && e3.oncue(e3.cue), e3.cue = null, e3.state = "INITIAL" === e3.state ? "BADWEBVTT" : "BADCUE";
          }
          return this;
        }, e2.flush = function() {
          var t3 = this;
          try {
            if ((t3.cue || "HEADER" === t3.state) && (t3.buffer += "\n\n", t3.parse()), "INITIAL" === t3.state || "BADWEBVTT" === t3.state)
              throw new Error("Malformed WebVTT signature.");
          } catch (e3) {
            t3.onparsingerror && t3.onparsingerror(e3);
          }
          return t3.onflush && t3.onflush(), this;
        }, t2;
      }(), aa = /\r\n|\n\r|\n|\r/g, sa = function(t2, e2, r2) {
        return void 0 === r2 && (r2 = 0), t2.slice(r2, r2 + e2.length) === e2;
      }, oa = function(t2) {
        for (var e2 = 5381, r2 = t2.length; r2; )
          e2 = 33 * e2 ^ t2.charCodeAt(--r2);
        return (e2 >>> 0).toString();
      };
      function la(t2, e2, r2) {
        return oa(t2.toString()) + oa(e2.toString()) + oa(r2);
      }
      function ua(t2, e2, r2, i3, n2, a2, s2) {
        var o2, l2, u2, h2 = new na(), d2 = pt(new Uint8Array(t2)).trim().replace(aa, "\n").split("\n"), c2 = [], f2 = e2 ? (o2 = e2.baseTime, void 0 === (l2 = e2.timescale) && (l2 = 1), Ui(o2, 9e4, 1 / l2)) : 0, g2 = "00:00.000", v2 = 0, m2 = 0, p2 = true;
        h2.oncue = function(t3) {
          var a3 = r2[i3], s3 = r2.ccOffset, o3 = (v2 - f2) / 9e4;
          if (null != a3 && a3.new && (void 0 !== m2 ? s3 = r2.ccOffset = a3.start : function(t4, e3, r3) {
            var i4 = t4[e3], n3 = t4[i4.prevCC];
            if (!n3 || !n3.new && i4.new)
              return t4.ccOffset = t4.presentationOffset = i4.start, void (i4.new = false);
            for (; null != (a4 = n3) && a4.new; ) {
              var a4;
              t4.ccOffset += i4.start - n3.start, i4.new = false, n3 = t4[(i4 = n3).prevCC];
            }
            t4.presentationOffset = r3;
          }(r2, i3, o3)), o3) {
            if (!e2)
              return void (u2 = new Error("Missing initPTS for VTT MPEGTS"));
            s3 = o3 - r2.presentationOffset;
          }
          var l3 = t3.endTime - t3.startTime, h3 = Vi(9e4 * (t3.startTime + s3 - m2), 9e4 * n2) / 9e4;
          t3.startTime = Math.max(h3, 0), t3.endTime = Math.max(h3 + l3, 0);
          var d3 = t3.text.trim();
          t3.text = decodeURIComponent(encodeURIComponent(d3)), t3.id || (t3.id = la(t3.startTime, t3.endTime, d3)), t3.endTime > 0 && c2.push(t3);
        }, h2.onparsingerror = function(t3) {
          u2 = t3;
        }, h2.onflush = function() {
          u2 ? s2(u2) : a2(c2);
        }, d2.forEach(function(t3) {
          if (p2) {
            if (sa(t3, "X-TIMESTAMP-MAP=")) {
              p2 = false, t3.slice(16).split(",").forEach(function(t4) {
                sa(t4, "LOCAL:") ? g2 = t4.slice(6) : sa(t4, "MPEGTS:") && (v2 = parseInt(t4.slice(7)));
              });
              try {
                m2 = function(t4) {
                  var e3 = parseInt(t4.slice(-3)), r3 = parseInt(t4.slice(-6, -4)), i4 = parseInt(t4.slice(-9, -7)), n3 = t4.length > 9 ? parseInt(t4.substring(0, t4.indexOf(":"))) : 0;
                  if (!(E(e3) && E(r3) && E(i4) && E(n3)))
                    throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t4);
                  return e3 += 1e3 * r3, (e3 += 6e4 * i4) + 36e5 * n3;
                }(g2) / 1e3;
              } catch (t4) {
                u2 = t4;
              }
              return;
            }
            "" === t3 && (p2 = false);
          }
          h2.parse(t3 + "\n");
        }), h2.flush();
      }
      var ha = "stpp.ttml.im1t", da = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, ca = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, fa = { left: "start", center: "center", right: "end", start: "start", end: "end" };
      function ga(t2, e2, r2, i3) {
        var n2 = It(new Uint8Array(t2), ["mdat"]);
        if (0 !== n2.length) {
          var a2, s2, l2, u2, h2 = n2.map(function(t3) {
            return pt(t3);
          }), d2 = (a2 = e2.baseTime, s2 = 1, void 0 === (l2 = e2.timescale) && (l2 = 1), void 0 === u2 && (u2 = false), Ui(a2, s2, 1 / l2, u2));
          try {
            h2.forEach(function(t3) {
              return r2(function(t4, e3) {
                var r3 = new DOMParser().parseFromString(t4, "text/xml").getElementsByTagName("tt")[0];
                if (!r3)
                  throw new Error("Invalid ttml");
                var i4 = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 }, n3 = Object.keys(i4).reduce(function(t5, e4) {
                  return t5[e4] = r3.getAttribute("ttp:" + e4) || i4[e4], t5;
                }, {}), a3 = "preserve" !== r3.getAttribute("xml:space"), s3 = ma(va(r3, "styling", "style")), l3 = ma(va(r3, "layout", "region")), u3 = va(r3, "body", "[begin]");
                return [].map.call(u3, function(t5) {
                  var r4 = pa(t5, a3);
                  if (!r4 || !t5.hasAttribute("begin"))
                    return null;
                  var i5 = Ea(t5.getAttribute("begin"), n3), u4 = Ea(t5.getAttribute("dur"), n3), h3 = Ea(t5.getAttribute("end"), n3);
                  if (null === i5)
                    throw Ta(t5);
                  if (null === h3) {
                    if (null === u4)
                      throw Ta(t5);
                    h3 = i5 + u4;
                  }
                  var d3 = new zn(i5 - e3, h3 - e3, r4);
                  d3.id = la(d3.startTime, d3.endTime, d3.text);
                  var c2 = function(t6, e4, r5) {
                    var i6 = "http://www.w3.org/ns/ttml#styling", n4 = null, a4 = ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"], s4 = null != t6 && t6.hasAttribute("style") ? t6.getAttribute("style") : null;
                    return s4 && r5.hasOwnProperty(s4) && (n4 = r5[s4]), a4.reduce(function(r6, a5) {
                      var s5 = ya(e4, i6, a5) || ya(t6, i6, a5) || ya(n4, i6, a5);
                      return s5 && (r6[a5] = s5), r6;
                    }, {});
                  }(l3[t5.getAttribute("region")], s3[t5.getAttribute("style")], s3), f2 = c2.textAlign;
                  if (f2) {
                    var g2 = fa[f2];
                    g2 && (d3.lineAlign = g2), d3.align = f2;
                  }
                  return o(d3, c2), d3;
                }).filter(function(t5) {
                  return null !== t5;
                });
              }(t3, d2));
            });
          } catch (t3) {
            i3(t3);
          }
        } else
          i3(new Error("Could not parse IMSC1 mdat"));
      }
      function va(t2, e2, r2) {
        var i3 = t2.getElementsByTagName(e2)[0];
        return i3 ? [].slice.call(i3.querySelectorAll(r2)) : [];
      }
      function ma(t2) {
        return t2.reduce(function(t3, e2) {
          var r2 = e2.getAttribute("xml:id");
          return r2 && (t3[r2] = e2), t3;
        }, {});
      }
      function pa(t2, e2) {
        return [].slice.call(t2.childNodes).reduce(function(t3, r2, i3) {
          var n2;
          return "br" === r2.nodeName && i3 ? t3 + "\n" : null != (n2 = r2.childNodes) && n2.length ? pa(r2, e2) : e2 ? t3 + r2.textContent.trim().replace(/\s+/g, " ") : t3 + r2.textContent;
        }, "");
      }
      function ya(t2, e2, r2) {
        return t2 && t2.hasAttributeNS(e2, r2) ? t2.getAttributeNS(e2, r2) : null;
      }
      function Ta(t2) {
        return new Error("Could not parse ttml timestamp " + t2);
      }
      function Ea(t2, e2) {
        if (!t2)
          return null;
        var r2 = $n(t2);
        return null === r2 && (da.test(t2) ? r2 = function(t3, e3) {
          var r3 = da.exec(t3), i3 = (0 | r3[4]) + (0 | r3[5]) / e3.subFrameRate;
          return 3600 * (0 | r3[1]) + 60 * (0 | r3[2]) + (0 | r3[3]) + i3 / e3.frameRate;
        }(t2, e2) : ca.test(t2) && (r2 = function(t3, e3) {
          var r3 = ca.exec(t3), i3 = Number(r3[1]);
          switch (r3[2]) {
            case "h":
              return 3600 * i3;
            case "m":
              return 60 * i3;
            case "ms":
              return 1e3 * i3;
            case "f":
              return i3 / e3.frameRate;
            case "t":
              return i3 / e3.tickRate;
          }
          return i3;
        }(t2, e2))), r2;
      }
      var Sa = function() {
        function t2(t3) {
          if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = true, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: true } }, this.captionsProperties = void 0, this.hls = t3, this.config = t3.config, this.Cues = t3.config.cueHandler, this.captionsProperties = { textTrack1: { label: this.config.captionsTextTrack1Label, languageCode: this.config.captionsTextTrack1LanguageCode }, textTrack2: { label: this.config.captionsTextTrack2Label, languageCode: this.config.captionsTextTrack2LanguageCode }, textTrack3: { label: this.config.captionsTextTrack3Label, languageCode: this.config.captionsTextTrack3LanguageCode }, textTrack4: { label: this.config.captionsTextTrack4Label, languageCode: this.config.captionsTextTrack4LanguageCode } }, this.config.enableCEA708Captions) {
            var e3 = new Xn(this, "textTrack1"), r2 = new Xn(this, "textTrack2"), i3 = new Xn(this, "textTrack3"), n2 = new Xn(this, "textTrack4");
            this.cea608Parser1 = new Wn(1, e3, r2), this.cea608Parser2 = new Wn(3, i3, n2);
          }
          t3.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t3.on(S.FRAG_LOADING, this.onFragLoading, this), t3.on(S.FRAG_LOADED, this.onFragLoaded, this), t3.on(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t3.on(S.FRAG_DECRYPTED, this.onFragDecrypted, this), t3.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t3.on(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t3.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this);
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
          var t3 = this.hls;
          t3.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t3.off(S.FRAG_LOADING, this.onFragLoading, this), t3.off(S.FRAG_LOADED, this.onFragLoaded, this), t3.off(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t3.off(S.FRAG_DECRYPTED, this.onFragDecrypted, this), t3.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t3.off(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t3.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null;
        }, e2.addCues = function(t3, e3, r2, i3, n2) {
          for (var a2, s2, o2, l2, u2 = false, h2 = n2.length; h2--; ) {
            var d2 = n2[h2], c2 = (a2 = d2[0], s2 = d2[1], o2 = e3, l2 = r2, Math.min(s2, l2) - Math.max(a2, o2));
            if (c2 >= 0 && (d2[0] = Math.min(d2[0], e3), d2[1] = Math.max(d2[1], r2), u2 = true, c2 / (r2 - e3) > 0.5))
              return;
          }
          if (u2 || n2.push([e3, r2]), this.config.renderTextTracksNatively) {
            var f2 = this.captionsTracks[t3];
            this.Cues.newCue(f2, e3, r2, i3);
          } else {
            var g2 = this.Cues.newCue(null, e3, r2, i3);
            this.hls.trigger(S.CUES_PARSED, { type: "captions", cues: g2, track: t3 });
          }
        }, e2.onInitPtsFound = function(t3, e3) {
          var r2 = this, i3 = e3.frag, n2 = e3.id, a2 = e3.initPTS, s2 = e3.timescale, o2 = this.unparsedVttFrags;
          "main" === n2 && (this.initPTS[i3.cc] = { baseTime: a2, timescale: s2 }), o2.length && (this.unparsedVttFrags = [], o2.forEach(function(t4) {
            r2.onFragLoaded(S.FRAG_LOADED, t4);
          }));
        }, e2.getExistingTrack = function(t3) {
          var e3 = this.media;
          if (e3)
            for (var r2 = 0; r2 < e3.textTracks.length; r2++) {
              var i3 = e3.textTracks[r2];
              if (i3[t3])
                return i3;
            }
          return null;
        }, e2.createCaptionsTrack = function(t3) {
          this.config.renderTextTracksNatively ? this.createNativeTrack(t3) : this.createNonNativeTrack(t3);
        }, e2.createNativeTrack = function(t3) {
          if (!this.captionsTracks[t3]) {
            var e3 = this.captionsProperties, r2 = this.captionsTracks, i3 = this.media, n2 = e3[t3], a2 = n2.label, s2 = n2.languageCode, o2 = this.getExistingTrack(t3);
            if (o2)
              r2[t3] = o2, Le(r2[t3]), Ee(r2[t3], i3);
            else {
              var l2 = this.createTextTrack("captions", a2, s2);
              l2 && (l2[t3] = true, r2[t3] = l2);
            }
          }
        }, e2.createNonNativeTrack = function(t3) {
          if (!this.nonNativeCaptionsTracks[t3]) {
            var e3 = this.captionsProperties[t3];
            if (e3) {
              var r2 = { _id: t3, label: e3.label, kind: "captions", default: !!e3.media && !!e3.media.default, closedCaptions: e3.media };
              this.nonNativeCaptionsTracks[t3] = r2, this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [r2] });
            }
          }
        }, e2.createTextTrack = function(t3, e3, r2) {
          var i3 = this.media;
          if (i3)
            return i3.addTextTrack(t3, e3, r2);
        }, e2.onMediaAttaching = function(t3, e3) {
          this.media = e3.media, this._cleanTracks();
        }, e2.onMediaDetaching = function() {
          var t3 = this.captionsTracks;
          Object.keys(t3).forEach(function(e3) {
            Le(t3[e3]), delete t3[e3];
          }), this.nonNativeCaptionsTracks = {};
        }, e2.onManifestLoading = function() {
          this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: true } }, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
        }, e2._cleanTracks = function() {
          var t3 = this.media;
          if (t3) {
            var e3 = t3.textTracks;
            if (e3)
              for (var r2 = 0; r2 < e3.length; r2++)
                Le(e3[r2]);
          }
        }, e2.onSubtitleTracksUpdated = function(t3, e3) {
          var r2 = this, i3 = e3.subtitleTracks || [], n2 = i3.some(function(t4) {
            return t4.textCodec === ha;
          });
          if (this.config.enableWebVTT || n2 && this.config.enableIMSC1) {
            if (Tn(this.tracks, i3))
              return void (this.tracks = i3);
            if (this.textTracks = [], this.tracks = i3, this.config.renderTextTracksNatively) {
              var a2 = this.media ? this.media.textTracks : null;
              this.tracks.forEach(function(t4, e4) {
                var i4;
                if (a2 && e4 < a2.length) {
                  for (var n3 = null, s3 = 0; s3 < a2.length; s3++)
                    if (La(a2[s3], t4)) {
                      n3 = a2[s3];
                      break;
                    }
                  n3 && (i4 = n3);
                }
                if (i4)
                  Le(i4);
                else {
                  var o2 = r2._captionsOrSubtitlesFromCharacteristics(t4);
                  (i4 = r2.createTextTrack(o2, t4.name, t4.lang)) && (i4.mode = "disabled");
                }
                i4 && (i4.groupId = t4.groupId, r2.textTracks.push(i4));
              });
            } else if (this.tracks.length) {
              var s2 = this.tracks.map(function(t4) {
                return { label: t4.name, kind: t4.type.toLowerCase(), default: t4.default, subtitleTrack: t4 };
              });
              this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: s2 });
            }
          }
        }, e2._captionsOrSubtitlesFromCharacteristics = function(t3) {
          if (t3.attrs.CHARACTERISTICS) {
            var e3 = /transcribes-spoken-dialog/gi.test(t3.attrs.CHARACTERISTICS), r2 = /describes-music-and-sound/gi.test(t3.attrs.CHARACTERISTICS);
            if (e3 && r2)
              return "captions";
          }
          return "subtitles";
        }, e2.onManifestLoaded = function(t3, e3) {
          var r2 = this;
          this.config.enableCEA708Captions && e3.captions && e3.captions.forEach(function(t4) {
            var e4 = /(?:CC|SERVICE)([1-4])/.exec(t4.instreamId);
            if (e4) {
              var i3 = "textTrack" + e4[1], n2 = r2.captionsProperties[i3];
              n2 && (n2.label = t4.name, t4.lang && (n2.languageCode = t4.lang), n2.media = t4);
            }
          });
        }, e2.closedCaptionsForLevel = function(t3) {
          var e3 = this.hls.levels[t3.level];
          return null == e3 ? void 0 : e3.attrs["CLOSED-CAPTIONS"];
        }, e2.onFragLoading = function(t3, e3) {
          var r2 = this.cea608Parser1, i3 = this.cea608Parser2, n2 = this.lastSn, a2 = this.lastPartIndex;
          if (this.enabled && r2 && i3 && e3.frag.type === ge) {
            var s2, o2, l2 = e3.frag.sn, u2 = null != (s2 = null == e3 || null == (o2 = e3.part) ? void 0 : o2.index) ? s2 : -1;
            l2 === n2 + 1 || l2 === n2 && u2 === a2 + 1 || (r2.reset(), i3.reset()), this.lastSn = l2, this.lastPartIndex = u2;
          }
        }, e2.onFragLoaded = function(t3, e3) {
          var r2 = e3.frag, i3 = e3.payload;
          if (r2.type === me)
            if (i3.byteLength) {
              var n2 = r2.decryptdata, a2 = "stats" in e3;
              if (null == n2 || !n2.encrypted || a2) {
                var s2 = this.tracks[r2.level], o2 = this.vttCCs;
                o2[r2.cc] || (o2[r2.cc] = { start: r2.start, prevCC: this.prevCC, new: true }, this.prevCC = r2.cc), s2 && s2.textCodec === ha ? this._parseIMSC1(r2, i3) : this._parseVTTs(e3);
              }
            } else
              this.hls.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: false, frag: r2, error: new Error("Empty subtitle payload") });
        }, e2._parseIMSC1 = function(t3, e3) {
          var r2 = this, i3 = this.hls;
          ga(e3, this.initPTS[t3.cc], function(e4) {
            r2._appendCues(e4, t3.level), i3.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: true, frag: t3 });
          }, function(e4) {
            w.log("Failed to parse IMSC1: " + e4), i3.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: false, frag: t3, error: e4 });
          });
        }, e2._parseVTTs = function(t3) {
          var e3, r2 = this, i3 = t3.frag, n2 = t3.payload, a2 = this.initPTS, s2 = this.unparsedVttFrags, o2 = a2.length - 1;
          if (a2[i3.cc] || -1 !== o2) {
            var l2 = this.hls;
            ua(null != (e3 = i3.initSegment) && e3.data ? xt(i3.initSegment.data, new Uint8Array(n2)) : n2, this.initPTS[i3.cc], this.vttCCs, i3.cc, i3.start, function(t4) {
              r2._appendCues(t4, i3.level), l2.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: true, frag: i3 });
            }, function(e4) {
              var a3 = "Missing initPTS for VTT MPEGTS" === e4.message;
              a3 ? s2.push(t3) : r2._fallbackToIMSC1(i3, n2), w.log("Failed to parse VTT cue: " + e4), a3 && o2 > i3.cc || l2.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: false, frag: i3, error: e4 });
            });
          } else
            s2.push(t3);
        }, e2._fallbackToIMSC1 = function(t3, e3) {
          var r2 = this, i3 = this.tracks[t3.level];
          i3.textCodec || ga(e3, this.initPTS[t3.cc], function() {
            i3.textCodec = ha, r2._parseIMSC1(t3, e3);
          }, function() {
            i3.textCodec = "wvtt";
          });
        }, e2._appendCues = function(t3, e3) {
          var r2 = this.hls;
          if (this.config.renderTextTracksNatively) {
            var i3 = this.textTracks[e3];
            if (!i3 || "disabled" === i3.mode)
              return;
            t3.forEach(function(t4) {
              return Se(i3, t4);
            });
          } else {
            var n2 = this.tracks[e3];
            if (!n2)
              return;
            var a2 = n2.default ? "default" : "subtitles" + e3;
            r2.trigger(S.CUES_PARSED, { type: "subtitles", cues: t3, track: a2 });
          }
        }, e2.onFragDecrypted = function(t3, e3) {
          e3.frag.type === me && this.onFragLoaded(S.FRAG_LOADED, e3);
        }, e2.onSubtitleTracksCleared = function() {
          this.tracks = [], this.captionsTracks = {};
        }, e2.onFragParsingUserdata = function(t3, e3) {
          var r2 = this.cea608Parser1, i3 = this.cea608Parser2;
          if (this.enabled && r2 && i3) {
            var n2 = e3.frag, a2 = e3.samples;
            if (n2.type !== ge || "NONE" !== this.closedCaptionsForLevel(n2))
              for (var s2 = 0; s2 < a2.length; s2++) {
                var o2 = a2[s2].bytes;
                if (o2) {
                  var l2 = this.extractCea608Data(o2);
                  r2.addData(a2[s2].pts, l2[0]), i3.addData(a2[s2].pts, l2[1]);
                }
              }
          }
        }, e2.onBufferFlushing = function(t3, e3) {
          var r2 = e3.startOffset, i3 = e3.endOffset, n2 = e3.endOffsetSubtitles, a2 = e3.type, s2 = this.media;
          if (s2 && !(s2.currentTime < i3)) {
            if (!a2 || "video" === a2) {
              var o2 = this.captionsTracks;
              Object.keys(o2).forEach(function(t4) {
                return Re(o2[t4], r2, i3);
              });
            }
            if (this.config.renderTextTracksNatively && 0 === r2 && void 0 !== n2) {
              var l2 = this.textTracks;
              Object.keys(l2).forEach(function(t4) {
                return Re(l2[t4], r2, n2);
              });
            }
          }
        }, e2.extractCea608Data = function(t3) {
          for (var e3 = [[], []], r2 = 31 & t3[0], i3 = 2, n2 = 0; n2 < r2; n2++) {
            var a2 = t3[i3++], s2 = 127 & t3[i3++], o2 = 127 & t3[i3++];
            if ((0 !== s2 || 0 !== o2) && 0 != (4 & a2)) {
              var l2 = 3 & a2;
              0 !== l2 && 1 !== l2 || (e3[l2].push(s2), e3[l2].push(o2));
            }
          }
          return e3;
        }, t2;
      }();
      function La(t2, e2) {
        return !!t2 && t2.label === e2.name && !(t2.textTrack1 || t2.textTrack2);
      }
      var Ra = function() {
        function t2(t3) {
          this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = t3, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
        }
        var e2 = t2.prototype;
        return e2.setStreamController = function(t3) {
          this.streamController = t3;
        }, e2.destroy = function() {
          this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
        }, e2.registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t3.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.BUFFER_CODECS, this.onBufferCodecs, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this);
        }, e2.unregisterListener = function() {
          var t3 = this.hls;
          t3.off(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t3.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.BUFFER_CODECS, this.onBufferCodecs, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this);
        }, e2.onFpsDropLevelCapping = function(t3, e3) {
          var r2 = this.hls.levels[e3.droppedLevel];
          this.isLevelAllowed(r2) && this.restrictedLevels.push({ bitrate: r2.bitrate, height: r2.height, width: r2.width });
        }, e2.onMediaAttaching = function(t3, e3) {
          this.media = e3.media instanceof HTMLVideoElement ? e3.media : null, this.clientRect = null;
        }, e2.onManifestParsed = function(t3, e3) {
          var r2 = this.hls;
          this.restrictedLevels = [], this.firstLevel = e3.firstLevel, r2.config.capLevelToPlayerSize && e3.video && this.startCapping();
        }, e2.onBufferCodecs = function(t3, e3) {
          this.hls.config.capLevelToPlayerSize && e3.video && this.startCapping();
        }, e2.onMediaDetaching = function() {
          this.stopCapping();
        }, e2.detectPlayerSize = function() {
          if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
            var t3 = this.hls.levels;
            if (t3.length) {
              var e3 = this.hls;
              e3.autoLevelCapping = this.getMaxLevel(t3.length - 1), e3.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e3.autoLevelCapping;
            }
          }
        }, e2.getMaxLevel = function(e3) {
          var r2 = this, i3 = this.hls.levels;
          if (!i3.length)
            return -1;
          var n2 = i3.filter(function(t3, i4) {
            return r2.isLevelAllowed(t3) && i4 <= e3;
          });
          return this.clientRect = null, t2.getMaxLevelByMediaSize(n2, this.mediaWidth, this.mediaHeight);
        }, e2.startCapping = function() {
          this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
        }, e2.stopCapping = function() {
          this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
        }, e2.getDimensions = function() {
          if (this.clientRect)
            return this.clientRect;
          var t3 = this.media, e3 = { width: 0, height: 0 };
          if (t3) {
            var r2 = t3.getBoundingClientRect();
            e3.width = r2.width, e3.height = r2.height, e3.width || e3.height || (e3.width = r2.right - r2.left || t3.width || 0, e3.height = r2.bottom - r2.top || t3.height || 0);
          }
          return this.clientRect = e3, e3;
        }, e2.isLevelAllowed = function(t3) {
          return !this.restrictedLevels.some(function(e3) {
            return t3.bitrate === e3.bitrate && t3.width === e3.width && t3.height === e3.height;
          });
        }, t2.getMaxLevelByMediaSize = function(t3, e3, r2) {
          if (null == t3 || !t3.length)
            return -1;
          for (var i3, n2, a2 = t3.length - 1, s2 = 0; s2 < t3.length; s2 += 1) {
            var o2 = t3[s2];
            if ((o2.width >= e3 || o2.height >= r2) && (i3 = o2, !(n2 = t3[s2 + 1]) || i3.width !== n2.width || i3.height !== n2.height)) {
              a2 = s2;
              break;
            }
          }
          return a2;
        }, a(t2, [{ key: "mediaWidth", get: function() {
          return this.getDimensions().width * this.contentScaleFactor;
        } }, { key: "mediaHeight", get: function() {
          return this.getDimensions().height * this.contentScaleFactor;
        } }, { key: "contentScaleFactor", get: function() {
          var t3 = 1;
          if (!this.hls.config.ignoreDevicePixelRatio)
            try {
              t3 = self.devicePixelRatio;
            } catch (t4) {
            }
          return t3;
        } }]), t2;
      }(), Aa = function() {
        function t2(t3) {
          this.hls = void 0, this.isVideoPlaybackQualityAvailable = false, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t3, this.registerListeners();
        }
        var e2 = t2.prototype;
        return e2.setStreamController = function(t3) {
          this.streamController = t3;
        }, e2.registerListeners = function() {
          this.hls.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this);
        }, e2.unregisterListeners = function() {
          this.hls.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this);
        }, e2.destroy = function() {
          this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = false, this.media = null;
        }, e2.onMediaAttaching = function(t3, e3) {
          var r2 = this.hls.config;
          if (r2.capLevelOnFPSDrop) {
            var i3 = e3.media instanceof self.HTMLVideoElement ? e3.media : null;
            this.media = i3, i3 && "function" == typeof i3.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = true), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), r2.fpsDroppedMonitoringPeriod);
          }
        }, e2.checkFPS = function(t3, e3, r2) {
          var i3 = performance.now();
          if (e3) {
            if (this.lastTime) {
              var n2 = i3 - this.lastTime, a2 = r2 - this.lastDroppedFrames, s2 = e3 - this.lastDecodedFrames, o2 = 1e3 * a2 / n2, l2 = this.hls;
              if (l2.trigger(S.FPS_DROP, { currentDropped: a2, currentDecoded: s2, totalDroppedFrames: r2 }), o2 > 0 && a2 > l2.config.fpsDroppedMonitoringThreshold * s2) {
                var u2 = l2.currentLevel;
                w.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u2), u2 > 0 && (-1 === l2.autoLevelCapping || l2.autoLevelCapping >= u2) && (u2 -= 1, l2.trigger(S.FPS_DROP_LEVEL_CAPPING, { level: u2, droppedLevel: l2.currentLevel }), l2.autoLevelCapping = u2, this.streamController.nextLevelSwitch());
              }
            }
            this.lastTime = i3, this.lastDroppedFrames = r2, this.lastDecodedFrames = e3;
          }
        }, e2.checkFPSInterval = function() {
          var t3 = this.media;
          if (t3)
            if (this.isVideoPlaybackQualityAvailable) {
              var e3 = t3.getVideoPlaybackQuality();
              this.checkFPS(t3, e3.totalVideoFrames, e3.droppedVideoFrames);
            } else
              this.checkFPS(t3, t3.webkitDecodedFrameCount, t3.webkitDroppedFrameCount);
        }, t2;
      }(), ka = "[eme]", ba = function() {
        function t2(e3) {
          this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = t2.CDMCleanupPromise ? [t2.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = w.debug.bind(w, ka), this.log = w.log.bind(w, ka), this.warn = w.warn.bind(w, ka), this.error = w.error.bind(w, ka), this.hls = e3, this.config = e3.config, this.registerListeners();
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
          this.unregisterListeners(), this.onMediaDetached();
          var t3 = this.config;
          t3.requestMediaKeySystemAccessFunc = null, t3.licenseXhrSetup = t3.licenseResponseCallback = void 0, t3.drmSystems = t3.drmSystemOptions = {}, this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null, this.config = null;
        }, e2.registerListeners = function() {
          this.hls.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(S.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(S.MANIFEST_LOADED, this.onManifestLoaded, this);
        }, e2.unregisterListeners = function() {
          this.hls.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(S.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(S.MANIFEST_LOADED, this.onManifestLoaded, this);
        }, e2.getLicenseServerUrl = function(t3) {
          var e3 = this.config, r2 = e3.drmSystems, i3 = e3.widevineLicenseUrl, n2 = r2[t3];
          if (n2)
            return n2.licenseUrl;
          if (t3 === j.WIDEVINE && i3)
            return i3;
          throw new Error('no license server URL configured for key-system "' + t3 + '"');
        }, e2.getServerCertificateUrl = function(t3) {
          var e3 = this.config.drmSystems[t3];
          if (e3)
            return e3.serverCertificateUrl;
          this.log('No Server Certificate in config.drmSystems["' + t3 + '"]');
        }, e2.attemptKeySystemAccess = function(t3) {
          var e3 = this, r2 = this.hls.levels, i3 = function(t4, e4, r3) {
            return !!t4 && r3.indexOf(t4) === e4;
          }, n2 = r2.map(function(t4) {
            return t4.audioCodec;
          }).filter(i3), a2 = r2.map(function(t4) {
            return t4.videoCodec;
          }).filter(i3);
          return n2.length + a2.length === 0 && a2.push("avc1.42e01e"), new Promise(function(r3, i4) {
            !function t4(s2) {
              var o2 = s2.shift();
              e3.getMediaKeysPromise(o2, n2, a2).then(function(t5) {
                return r3({ keySystem: o2, mediaKeys: t5 });
              }).catch(function(e4) {
                s2.length ? t4(s2) : i4(e4 instanceof Da ? e4 : new Da({ type: L.KEY_SYSTEM_ERROR, details: R.KEY_SYSTEM_NO_ACCESS, error: e4, fatal: true }, e4.message));
              });
            }(t3);
          });
        }, e2.requestMediaKeySystemAccess = function(t3, e3) {
          var r2 = this.config.requestMediaKeySystemAccessFunc;
          if ("function" != typeof r2) {
            var i3 = "Configured requestMediaKeySystemAccess is not a function " + r2;
            return null === et && "http:" === self.location.protocol && (i3 = "navigator.requestMediaKeySystemAccess is not available over insecure protocol " + location.protocol), Promise.reject(new Error(i3));
          }
          return r2(t3, e3);
        }, e2.getMediaKeysPromise = function(t3, e3, r2) {
          var i3 = this, n2 = function(t4, e4, r3, i4) {
            var n3;
            switch (t4) {
              case j.FAIRPLAY:
                n3 = ["cenc", "sinf"];
                break;
              case j.WIDEVINE:
              case j.PLAYREADY:
                n3 = ["cenc"];
                break;
              case j.CLEARKEY:
                n3 = ["cenc", "keyids"];
                break;
              default:
                throw new Error("Unknown key-system: " + t4);
            }
            return function(t5, e5, r4, i5) {
              return [{ initDataTypes: t5, persistentState: i5.persistentState || "not-allowed", distinctiveIdentifier: i5.distinctiveIdentifier || "not-allowed", sessionTypes: i5.sessionTypes || [i5.sessionType || "temporary"], audioCapabilities: e5.map(function(t6) {
                return { contentType: 'audio/mp4; codecs="' + t6 + '"', robustness: i5.audioRobustness || "", encryptionScheme: i5.audioEncryptionScheme || null };
              }), videoCapabilities: r4.map(function(t6) {
                return { contentType: 'video/mp4; codecs="' + t6 + '"', robustness: i5.videoRobustness || "", encryptionScheme: i5.videoEncryptionScheme || null };
              }) }];
            }(n3, e4, r3, i4);
          }(t3, e3, r2, this.config.drmSystemOptions), a2 = this.keySystemAccessPromises[t3], s2 = null == a2 ? void 0 : a2.keySystemAccess;
          if (!s2) {
            this.log('Requesting encrypted media "' + t3 + '" key-system access with config: ' + JSON.stringify(n2)), s2 = this.requestMediaKeySystemAccess(t3, n2);
            var o2 = this.keySystemAccessPromises[t3] = { keySystemAccess: s2 };
            return s2.catch(function(e4) {
              i3.log('Failed to obtain access to key-system "' + t3 + '": ' + e4);
            }), s2.then(function(e4) {
              i3.log('Access for key-system "' + e4.keySystem + '" obtained');
              var r3 = i3.fetchServerCertificate(t3);
              return i3.log('Create media-keys for "' + t3 + '"'), o2.mediaKeys = e4.createMediaKeys().then(function(e5) {
                return i3.log('Media-keys created for "' + t3 + '"'), r3.then(function(r4) {
                  return r4 ? i3.setMediaKeysServerCertificate(e5, t3, r4) : e5;
                });
              }), o2.mediaKeys.catch(function(e5) {
                i3.error('Failed to create media-keys for "' + t3 + '"}: ' + e5);
              }), o2.mediaKeys;
            });
          }
          return s2.then(function() {
            return a2.mediaKeys;
          });
        }, e2.createMediaKeySessionContext = function(t3) {
          var e3 = t3.decryptdata, r2 = t3.keySystem, i3 = t3.mediaKeys;
          this.log('Creating key-system session "' + r2 + '" keyId: ' + Tt(e3.keyId || []));
          var n2 = i3.createSession(), a2 = { decryptdata: e3, keySystem: r2, mediaKeys: i3, mediaKeysSession: n2, keyStatus: "status-pending" };
          return this.mediaKeySessions.push(a2), a2;
        }, e2.renewKeySession = function(t3) {
          var e3 = t3.decryptdata;
          if (e3.pssh) {
            var r2 = this.createMediaKeySessionContext(t3), i3 = this.getKeyIdString(e3);
            this.keyIdToKeySessionPromise[i3] = this.generateRequestWithPreferredKeySession(r2, "cenc", e3.pssh, "expired");
          } else
            this.warn("Could not renew expired session. Missing pssh initData.");
          this.removeSession(t3);
        }, e2.getKeyIdString = function(t3) {
          if (!t3)
            throw new Error("Could not read keyId of undefined decryptdata");
          if (null === t3.keyId)
            throw new Error("keyId is null");
          return Tt(t3.keyId);
        }, e2.updateKeySession = function(t3, e3) {
          var r2, i3 = t3.mediaKeysSession;
          return this.log('Updating key-session "' + i3.sessionId + '" for keyID ' + Tt((null == (r2 = t3.decryptdata) ? void 0 : r2.keyId) || []) + "\n      } (data length: " + (e3 ? e3.byteLength : e3) + ")"), i3.update(e3);
        }, e2.selectKeySystemFormat = function(t3) {
          var e3 = Object.keys(t3.levelkeys || {});
          return this.keyFormatPromise || (this.log("Selecting key-system from fragment (sn: " + t3.sn + " " + t3.type + ": " + t3.level + ") key formats " + e3.join(", ")), this.keyFormatPromise = this.getKeyFormatPromise(e3)), this.keyFormatPromise;
        }, e2.getKeyFormatPromise = function(t3) {
          var e3 = this;
          return new Promise(function(r2, i3) {
            var n2 = tt(e3.config), a2 = t3.map($).filter(function(t4) {
              return !!t4 && -1 !== n2.indexOf(t4);
            });
            return e3.getKeySystemSelectionPromise(a2).then(function(t4) {
              var e4 = t4.keySystem, n3 = Z(e4);
              n3 ? r2(n3) : i3(new Error('Unable to find format for key-system "' + e4 + '"'));
            }).catch(i3);
          });
        }, e2.loadKey = function(t3) {
          var e3 = this, r2 = t3.keyInfo.decryptdata, i3 = this.getKeyIdString(r2), n2 = "(keyId: " + i3 + ' format: "' + r2.keyFormat + '" method: ' + r2.method + " uri: " + r2.uri + ")";
          this.log("Starting session for key " + n2);
          var a2 = this.keyIdToKeySessionPromise[i3];
          return a2 || (a2 = this.keyIdToKeySessionPromise[i3] = this.getKeySystemForKeyPromise(r2).then(function(i4) {
            var a3 = i4.keySystem, s2 = i4.mediaKeys;
            return e3.throwIfDestroyed(), e3.log("Handle encrypted media sn: " + t3.frag.sn + " " + t3.frag.type + ": " + t3.frag.level + " using key " + n2), e3.attemptSetMediaKeys(a3, s2).then(function() {
              e3.throwIfDestroyed();
              var t4 = e3.createMediaKeySessionContext({ keySystem: a3, mediaKeys: s2, decryptdata: r2 });
              return e3.generateRequestWithPreferredKeySession(t4, "cenc", r2.pssh, "playlist-key");
            });
          })).catch(function(t4) {
            return e3.handleError(t4);
          }), a2;
        }, e2.throwIfDestroyed = function(t3) {
          if (!this.hls)
            throw new Error("invalid state");
        }, e2.handleError = function(t3) {
          this.hls && (this.error(t3.message), t3 instanceof Da ? this.hls.trigger(S.ERROR, t3.data) : this.hls.trigger(S.ERROR, { type: L.KEY_SYSTEM_ERROR, details: R.KEY_SYSTEM_NO_KEYS, error: t3, fatal: true }));
        }, e2.getKeySystemForKeyPromise = function(t3) {
          var e3 = this.getKeyIdString(t3), r2 = this.keyIdToKeySessionPromise[e3];
          if (!r2) {
            var i3 = $(t3.keyFormat), n2 = i3 ? [i3] : tt(this.config);
            return this.attemptKeySystemAccess(n2);
          }
          return r2;
        }, e2.getKeySystemSelectionPromise = function(t3) {
          if (t3.length || (t3 = tt(this.config)), 0 === t3.length)
            throw new Da({ type: L.KEY_SYSTEM_ERROR, details: R.KEY_SYSTEM_NO_CONFIGURED_LICENSE, fatal: true }, "Missing key-system license configuration options " + JSON.stringify({ drmSystems: this.config.drmSystems }));
          return this.attemptKeySystemAccess(t3);
        }, e2._onMediaEncrypted = function(t3) {
          var e3 = this, r2 = t3.initDataType, i3 = t3.initData;
          if (this.debug('"' + t3.type + '" event: init data type: "' + r2 + '"'), null !== i3) {
            var n2, a2;
            if ("sinf" === r2 && this.config.drmSystems[j.FAIRPLAY]) {
              var s2 = Rt(new Uint8Array(i3));
              try {
                var o2 = V(JSON.parse(s2).sinf), l2 = _t(new Uint8Array(o2));
                if (!l2)
                  return;
                n2 = l2.subarray(8, 24), a2 = j.FAIRPLAY;
              } catch (t4) {
                return void this.warn('Failed to parse sinf "encrypted" event message initData');
              }
            } else {
              var u2 = function(t4) {
                if (!(t4 instanceof ArrayBuffer) || t4.byteLength < 32)
                  return null;
                var e4 = { version: 0, systemId: "", kids: null, data: null }, r3 = new DataView(t4), i4 = r3.getUint32(0);
                if (t4.byteLength !== i4 && i4 > 44)
                  return null;
                if (1886614376 !== r3.getUint32(4))
                  return null;
                if (e4.version = r3.getUint32(8) >>> 24, e4.version > 1)
                  return null;
                e4.systemId = Tt(new Uint8Array(t4, 12, 16));
                var n3 = r3.getUint32(28);
                if (0 === e4.version) {
                  if (i4 - 32 < n3)
                    return null;
                  e4.data = new Uint8Array(t4, 32, n3);
                } else if (1 === e4.version) {
                  e4.kids = [];
                  for (var a3 = 0; a3 < n3; a3++)
                    e4.kids.push(new Uint8Array(t4, 32 + 16 * a3, 16));
                }
                return e4;
              }(i3);
              if (null === u2)
                return;
              0 === u2.version && u2.systemId === J && u2.data && (n2 = u2.data.subarray(8, 24)), a2 = function(t4) {
                if (t4 === J)
                  return j.WIDEVINE;
              }(u2.systemId);
            }
            if (a2 && n2) {
              for (var h2 = Tt(n2), d2 = this.keyIdToKeySessionPromise, c2 = this.mediaKeySessions, f2 = d2[h2], g2 = function() {
                var t4 = c2[v2], a3 = t4.decryptdata;
                if (a3.pssh || !a3.keyId)
                  return "continue";
                var s3 = Tt(a3.keyId);
                return h2 === s3 || -1 !== a3.uri.replace(/-/g, "").indexOf(h2) ? (f2 = d2[s3], delete d2[s3], a3.pssh = new Uint8Array(i3), a3.keyId = n2, f2 = d2[h2] = f2.then(function() {
                  return e3.generateRequestWithPreferredKeySession(t4, r2, i3, "encrypted-event-key-match");
                }), "break") : void 0;
              }, v2 = 0; v2 < c2.length; v2++) {
                var m2 = g2();
                if ("continue" !== m2 && "break" === m2)
                  break;
              }
              f2 || (f2 = d2[h2] = this.getKeySystemSelectionPromise([a2]).then(function(t4) {
                var a3, s3 = t4.keySystem, o3 = t4.mediaKeys;
                e3.throwIfDestroyed();
                var l3 = new Gt("ISO-23001-7", h2, null != (a3 = Z(s3)) ? a3 : "");
                return l3.pssh = new Uint8Array(i3), l3.keyId = n2, e3.attemptSetMediaKeys(s3, o3).then(function() {
                  e3.throwIfDestroyed();
                  var t5 = e3.createMediaKeySessionContext({ decryptdata: l3, keySystem: s3, mediaKeys: o3 });
                  return e3.generateRequestWithPreferredKeySession(t5, r2, i3, "encrypted-event-no-match");
                });
              })), f2.catch(function(t4) {
                return e3.handleError(t4);
              });
            }
          }
        }, e2._onWaitingForKey = function(t3) {
          this.log('"' + t3.type + '" event');
        }, e2.attemptSetMediaKeys = function(t3, e3) {
          var r2 = this, i3 = this.setMediaKeysQueue.slice();
          this.log('Setting media-keys for "' + t3 + '"');
          var n2 = Promise.all(i3).then(function() {
            if (!r2.media)
              throw new Error("Attempted to set mediaKeys without media element attached");
            return r2.media.setMediaKeys(e3);
          });
          return this.setMediaKeysQueue.push(n2), n2.then(function() {
            r2.log('Media-keys set for "' + t3 + '"'), i3.push(n2), r2.setMediaKeysQueue = r2.setMediaKeysQueue.filter(function(t4) {
              return -1 === i3.indexOf(t4);
            });
          });
        }, e2.generateRequestWithPreferredKeySession = function(t3, e3, r2, i3) {
          var n2, a2, s2 = this, o2 = null == (n2 = this.config.drmSystems) || null == (a2 = n2[t3.keySystem]) ? void 0 : a2.generateRequest;
          if (o2)
            try {
              var l2 = o2.call(this.hls, e3, r2, t3);
              if (!l2)
                throw new Error("Invalid response from configured generateRequest filter");
              e3 = l2.initDataType, r2 = t3.decryptdata.pssh = l2.initData ? new Uint8Array(l2.initData) : null;
            } catch (t4) {
              var u2;
              if (this.warn(t4.message), null != (u2 = this.hls) && u2.config.debug)
                throw t4;
            }
          if (null === r2)
            return this.log('Skipping key-session request for "' + i3 + '" (no initData)'), Promise.resolve(t3);
          var h2 = this.getKeyIdString(t3.decryptdata);
          this.log('Generating key-session request for "' + i3 + '": ' + h2 + " (init data type: " + e3 + " length: " + (r2 ? r2.byteLength : null) + ")");
          var d2 = new an();
          t3.mediaKeysSession.onmessage = function(e4) {
            var r3 = t3.mediaKeysSession;
            if (r3) {
              var i4 = e4.messageType, n3 = e4.message;
              s2.log('"' + i4 + '" message event for session "' + r3.sessionId + '" message size: ' + n3.byteLength), "license-request" === i4 || "license-renewal" === i4 ? s2.renewLicense(t3, n3).catch(function(t4) {
                s2.handleError(t4), d2.emit("error", t4);
              }) : "license-release" === i4 ? t3.keySystem === j.FAIRPLAY && (s2.updateKeySession(t3, W("acknowledged")), s2.removeSession(t3)) : s2.warn('unhandled media key message type "' + i4 + '"');
            } else
              d2.emit("error", new Error("invalid state"));
          }, t3.mediaKeysSession.onkeystatuseschange = function(e4) {
            if (t3.mediaKeysSession) {
              s2.onKeyStatusChange(t3);
              var r3 = t3.keyStatus;
              d2.emit("keyStatus", r3), "expired" === r3 && (s2.warn(t3.keySystem + " expired for key " + h2), s2.renewKeySession(t3));
            } else
              d2.emit("error", new Error("invalid state"));
          };
          var c2 = new Promise(function(t4, e4) {
            d2.on("error", e4), d2.on("keyStatus", function(r3) {
              r3.startsWith("usable") ? t4() : "output-restricted" === r3 ? e4(new Da({ type: L.KEY_SYSTEM_ERROR, details: R.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED, fatal: false }, "HDCP level output restricted")) : "internal-error" === r3 ? e4(new Da({ type: L.KEY_SYSTEM_ERROR, details: R.KEY_SYSTEM_STATUS_INTERNAL_ERROR, fatal: true }, 'key status changed to "' + r3 + '"')) : "expired" === r3 ? e4(new Error("key expired while generating request")) : s2.warn('unhandled key status change "' + r3 + '"');
            });
          });
          return t3.mediaKeysSession.generateRequest(e3, r2).then(function() {
            var e4;
            s2.log('Request generated for key-session "' + (null == (e4 = t3.mediaKeysSession) ? void 0 : e4.sessionId) + '" keyId: ' + h2);
          }).catch(function(t4) {
            throw new Da({ type: L.KEY_SYSTEM_ERROR, details: R.KEY_SYSTEM_NO_SESSION, error: t4, fatal: false }, "Error generating key-session request: " + t4);
          }).then(function() {
            return c2;
          }).catch(function(e4) {
            throw d2.removeAllListeners(), s2.removeSession(t3), e4;
          }).then(function() {
            return d2.removeAllListeners(), t3;
          });
        }, e2.onKeyStatusChange = function(t3) {
          var e3 = this;
          t3.mediaKeysSession.keyStatuses.forEach(function(r2, i3) {
            e3.log('key status change "' + r2 + '" for keyStatuses keyId: ' + Tt("buffer" in i3 ? new Uint8Array(i3.buffer, i3.byteOffset, i3.byteLength) : new Uint8Array(i3)) + " session keyId: " + Tt(new Uint8Array(t3.decryptdata.keyId || [])) + " uri: " + t3.decryptdata.uri), t3.keyStatus = r2;
          });
        }, e2.fetchServerCertificate = function(t3) {
          var e3 = this.config, r2 = new e3.loader(e3), n2 = this.getServerCertificateUrl(t3);
          return n2 ? (this.log('Fetching serverCertificate for "' + t3 + '"'), new Promise(function(a2, s2) {
            var o2 = { responseType: "arraybuffer", url: n2 }, l2 = e3.certLoadPolicy.default, u2 = { loadPolicy: l2, timeout: l2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 }, h2 = { onSuccess: function(t4, e4, r3, i3) {
              a2(t4.data);
            }, onError: function(e4, r3, a3, l3) {
              s2(new Da({ type: L.KEY_SYSTEM_ERROR, details: R.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal: true, networkDetails: a3, response: i2({ url: o2.url, data: void 0 }, e4) }, '"' + t3 + '" certificate request failed (' + n2 + "). Status: " + e4.code + " (" + e4.text + ")"));
            }, onTimeout: function(e4, r3, i3) {
              s2(new Da({ type: L.KEY_SYSTEM_ERROR, details: R.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal: true, networkDetails: i3, response: { url: o2.url, data: void 0 } }, '"' + t3 + '" certificate request timed out (' + n2 + ")"));
            }, onAbort: function(t4, e4, r3) {
              s2(new Error("aborted"));
            } };
            r2.load(o2, u2, h2);
          })) : Promise.resolve();
        }, e2.setMediaKeysServerCertificate = function(t3, e3, r2) {
          var i3 = this;
          return new Promise(function(n2, a2) {
            t3.setServerCertificate(r2).then(function(a3) {
              i3.log("setServerCertificate " + (a3 ? "success" : "not supported by CDM") + " (" + (null == r2 ? void 0 : r2.byteLength) + ') on "' + e3 + '"'), n2(t3);
            }).catch(function(t4) {
              a2(new Da({ type: L.KEY_SYSTEM_ERROR, details: R.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED, error: t4, fatal: true }, t4.message));
            });
          });
        }, e2.renewLicense = function(t3, e3) {
          var r2 = this;
          return this.requestLicense(t3, new Uint8Array(e3)).then(function(e4) {
            return r2.updateKeySession(t3, new Uint8Array(e4)).catch(function(t4) {
              throw new Da({ type: L.KEY_SYSTEM_ERROR, details: R.KEY_SYSTEM_SESSION_UPDATE_FAILED, error: t4, fatal: true }, t4.message);
            });
          });
        }, e2.setupLicenseXHR = function(t3, e3, r2, i3) {
          var n2 = this, a2 = this.config.licenseXhrSetup;
          return a2 ? Promise.resolve().then(function() {
            if (!r2.decryptdata)
              throw new Error("Key removed");
            return a2.call(n2.hls, t3, e3, r2, i3);
          }).catch(function(s2) {
            if (!r2.decryptdata)
              throw s2;
            return t3.open("POST", e3, true), a2.call(n2.hls, t3, e3, r2, i3);
          }).then(function(r3) {
            return t3.readyState || t3.open("POST", e3, true), { xhr: t3, licenseChallenge: r3 || i3 };
          }) : (t3.open("POST", e3, true), Promise.resolve({ xhr: t3, licenseChallenge: i3 }));
        }, e2.requestLicense = function(t3, e3) {
          var r2 = this, i3 = this.config.keyLoadPolicy.default;
          return new Promise(function(n2, a2) {
            var s2 = r2.getLicenseServerUrl(t3.keySystem);
            r2.log("Sending license request to URL: " + s2);
            var o2 = new XMLHttpRequest();
            o2.responseType = "arraybuffer", o2.onreadystatechange = function() {
              if (!r2.hls || !t3.mediaKeysSession)
                return a2(new Error("invalid state"));
              if (4 === o2.readyState)
                if (200 === o2.status) {
                  r2._requestLicenseFailureCount = 0;
                  var l2 = o2.response;
                  r2.log("License received " + (l2 instanceof ArrayBuffer ? l2.byteLength : l2));
                  var u2 = r2.config.licenseResponseCallback;
                  if (u2)
                    try {
                      l2 = u2.call(r2.hls, o2, s2, t3);
                    } catch (t4) {
                      r2.error(t4);
                    }
                  n2(l2);
                } else {
                  var h2 = i3.errorRetry, d2 = h2 ? h2.maxNumRetry : 0;
                  if (r2._requestLicenseFailureCount++, r2._requestLicenseFailureCount > d2 || o2.status >= 400 && o2.status < 500)
                    a2(new Da({ type: L.KEY_SYSTEM_ERROR, details: R.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: true, networkDetails: o2, response: { url: s2, data: void 0, code: o2.status, text: o2.statusText } }, "License Request XHR failed (" + s2 + "). Status: " + o2.status + " (" + o2.statusText + ")"));
                  else {
                    var c2 = d2 - r2._requestLicenseFailureCount + 1;
                    r2.warn("Retrying license request, " + c2 + " attempts left"), r2.requestLicense(t3, e3).then(n2, a2);
                  }
                }
            }, t3.licenseXhr && t3.licenseXhr.readyState !== XMLHttpRequest.DONE && t3.licenseXhr.abort(), t3.licenseXhr = o2, r2.setupLicenseXHR(o2, s2, t3, e3).then(function(t4) {
              var e4 = t4.xhr, r3 = t4.licenseChallenge;
              e4.send(r3);
            });
          });
        }, e2.onMediaAttached = function(t3, e3) {
          if (this.config.emeEnabled) {
            var r2 = e3.media;
            this.media = r2, r2.addEventListener("encrypted", this.onMediaEncrypted), r2.addEventListener("waitingforkey", this.onWaitingForKey);
          }
        }, e2.onMediaDetached = function() {
          var e3 = this, r2 = this.media, i3 = this.mediaKeySessions;
          r2 && (r2.removeEventListener("encrypted", this.onMediaEncrypted), r2.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, Gt.clearKeyUriToKeyIdMap();
          var n2 = i3.length;
          t2.CDMCleanupPromise = Promise.all(i3.map(function(t3) {
            return e3.removeSession(t3);
          }).concat(null == r2 ? void 0 : r2.setMediaKeys(null).catch(function(t3) {
            e3.log("Could not clear media keys: " + t3 + ". media.src: " + (null == r2 ? void 0 : r2.src));
          }))).then(function() {
            n2 && (e3.log("finished closing key sessions and clearing media keys"), i3.length = 0);
          }).catch(function(t3) {
            e3.log("Could not close sessions and clear media keys: " + t3 + ". media.src: " + (null == r2 ? void 0 : r2.src));
          });
        }, e2.onManifestLoading = function() {
          this.keyFormatPromise = null;
        }, e2.onManifestLoaded = function(t3, e3) {
          var r2 = e3.sessionKeys;
          if (r2 && this.config.emeEnabled && !this.keyFormatPromise) {
            var i3 = r2.reduce(function(t4, e4) {
              return -1 === t4.indexOf(e4.keyFormat) && t4.push(e4.keyFormat), t4;
            }, []);
            this.log("Selecting key-system from session-keys " + i3.join(", ")), this.keyFormatPromise = this.getKeyFormatPromise(i3);
          }
        }, e2.removeSession = function(t3) {
          var e3 = this, r2 = t3.mediaKeysSession, i3 = t3.licenseXhr;
          if (r2) {
            this.log("Remove licenses and keys and close session " + r2.sessionId), r2.onmessage = null, r2.onkeystatuseschange = null, i3 && i3.readyState !== XMLHttpRequest.DONE && i3.abort(), t3.mediaKeysSession = t3.decryptdata = t3.licenseXhr = void 0;
            var n2 = this.mediaKeySessions.indexOf(t3);
            return n2 > -1 && this.mediaKeySessions.splice(n2, 1), r2.remove().catch(function(t4) {
              e3.log("Could not remove session: " + t4);
            }).then(function() {
              return r2.close();
            }).catch(function(t4) {
              e3.log("Could not close session: " + t4);
            });
          }
        }, t2;
      }();
      ba.CDMCleanupPromise = void 0;
      var Da = function(t2) {
        function e2(e3, r2) {
          var i3;
          return (i3 = t2.call(this, r2) || this).data = void 0, e3.error || (e3.error = new Error(r2)), i3.data = e3, e3.err = e3.error, i3;
        }
        return l(e2, t2), e2;
      }(f(Error)), Ia = "m", wa = "a", Ca = "v", _a = "av", Pa = "i", xa = "tt", Fa = function() {
        function t2(e3) {
          var r2 = this;
          this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = false, this.initialized = false, this.starved = false, this.buffering = true, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function() {
            r2.initialized && (r2.starved = true), r2.buffering = true;
          }, this.onPlaying = function() {
            r2.initialized || (r2.initialized = true), r2.buffering = false;
          }, this.applyPlaylistData = function(t3) {
            try {
              r2.apply(t3, { ot: Ia, su: !r2.initialized });
            } catch (t4) {
              w.warn("Could not generate manifest CMCD data.", t4);
            }
          }, this.applyFragmentData = function(t3) {
            try {
              var e4 = t3.frag, i4 = r2.hls.levels[e4.level], n3 = r2.getObjectType(e4), a2 = { d: 1e3 * e4.duration, ot: n3 };
              n3 !== Ca && n3 !== wa && n3 != _a || (a2.br = i4.bitrate / 1e3, a2.tb = r2.getTopBandwidth(n3) / 1e3, a2.bl = r2.getBufferLength(n3)), r2.apply(t3, a2);
            } catch (t4) {
              w.warn("Could not generate segment CMCD data.", t4);
            }
          }, this.hls = e3;
          var i3 = this.config = e3.config, n2 = i3.cmcd;
          null != n2 && (i3.pLoader = this.createPlaylistLoader(), i3.fLoader = this.createFragmentLoader(), this.sid = n2.sessionId || t2.uuid(), this.cid = n2.contentId, this.useHeaders = true === n2.useHeaders, this.registerListeners());
        }
        var e2 = t2.prototype;
        return e2.registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHED, this.onMediaDetached, this), t3.on(S.BUFFER_CREATED, this.onBufferCreated, this);
        }, e2.unregisterListeners = function() {
          var t3 = this.hls;
          t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHED, this.onMediaDetached, this), t3.off(S.BUFFER_CREATED, this.onBufferCreated, this);
        }, e2.destroy = function() {
          this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null;
        }, e2.onMediaAttached = function(t3, e3) {
          this.media = e3.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
        }, e2.onMediaDetached = function() {
          this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
        }, e2.onBufferCreated = function(t3, e3) {
          var r2, i3;
          this.audioBuffer = null == (r2 = e3.tracks.audio) ? void 0 : r2.buffer, this.videoBuffer = null == (i3 = e3.tracks.video) ? void 0 : i3.buffer;
        }, e2.createData = function() {
          var t3;
          return { v: 1, sf: "h", sid: this.sid, cid: this.cid, pr: null == (t3 = this.media) ? void 0 : t3.playbackRate, mtp: this.hls.bandwidthEstimate / 1e3 };
        }, e2.apply = function(e3, r2) {
          void 0 === r2 && (r2 = {}), o(r2, this.createData());
          var i3 = r2.ot === Pa || r2.ot === Ca || r2.ot === _a;
          if (this.starved && i3 && (r2.bs = true, r2.su = true, this.starved = false), null == r2.su && (r2.su = this.buffering), this.useHeaders) {
            var n2 = t2.toHeaders(r2);
            if (!Object.keys(n2).length)
              return;
            e3.headers || (e3.headers = {}), o(e3.headers, n2);
          } else {
            var a2 = t2.toQuery(r2);
            if (!a2)
              return;
            e3.url = t2.appendQueryToUri(e3.url, a2);
          }
        }, e2.getObjectType = function(t3) {
          var e3 = t3.type;
          return "subtitle" === e3 ? xa : "initSegment" === t3.sn ? Pa : "audio" === e3 ? wa : "main" === e3 ? this.hls.audioTracks.length ? Ca : _a : void 0;
        }, e2.getTopBandwidth = function(t3) {
          var e3, r2 = 0, i3 = this.hls;
          if (t3 === wa)
            e3 = i3.audioTracks;
          else {
            var n2 = i3.maxAutoLevel, a2 = n2 > -1 ? n2 + 1 : i3.levels.length;
            e3 = i3.levels.slice(0, a2);
          }
          for (var s2, o2 = v(e3); !(s2 = o2()).done; ) {
            var l2 = s2.value;
            l2.bitrate > r2 && (r2 = l2.bitrate);
          }
          return r2 > 0 ? r2 : NaN;
        }, e2.getBufferLength = function(t3) {
          var e3 = this.hls.media, r2 = t3 === wa ? this.audioBuffer : this.videoBuffer;
          return r2 && e3 ? 1e3 * Ir.bufferInfo(r2, e3.currentTime, this.config.maxBufferHole).len : NaN;
        }, e2.createPlaylistLoader = function() {
          var t3 = this.config.pLoader, e3 = this.applyPlaylistData, r2 = t3 || this.config.loader;
          return function() {
            function t4(t5) {
              this.loader = void 0, this.loader = new r2(t5);
            }
            var i3 = t4.prototype;
            return i3.destroy = function() {
              this.loader.destroy();
            }, i3.abort = function() {
              this.loader.abort();
            }, i3.load = function(t5, r3, i4) {
              e3(t5), this.loader.load(t5, r3, i4);
            }, a(t4, [{ key: "stats", get: function() {
              return this.loader.stats;
            } }, { key: "context", get: function() {
              return this.loader.context;
            } }]), t4;
          }();
        }, e2.createFragmentLoader = function() {
          var t3 = this.config.fLoader, e3 = this.applyFragmentData, r2 = t3 || this.config.loader;
          return function() {
            function t4(t5) {
              this.loader = void 0, this.loader = new r2(t5);
            }
            var i3 = t4.prototype;
            return i3.destroy = function() {
              this.loader.destroy();
            }, i3.abort = function() {
              this.loader.abort();
            }, i3.load = function(t5, r3, i4) {
              e3(t5), this.loader.load(t5, r3, i4);
            }, a(t4, [{ key: "stats", get: function() {
              return this.loader.stats;
            } }, { key: "context", get: function() {
              return this.loader.context;
            } }]), t4;
          }();
        }, t2.uuid = function() {
          var t3 = URL.createObjectURL(new Blob()), e3 = t3.toString();
          return URL.revokeObjectURL(t3), e3.slice(e3.lastIndexOf("/") + 1);
        }, t2.serialize = function(t3) {
          for (var e3, r2 = [], i3 = function(t4) {
            return !Number.isNaN(t4) && null != t4 && "" !== t4 && false !== t4;
          }, n2 = function(t4) {
            return Math.round(t4);
          }, a2 = function(t4) {
            return 100 * n2(t4 / 100);
          }, s2 = { br: n2, d: n2, bl: a2, dl: a2, mtp: a2, nor: function(t4) {
            return encodeURIComponent(t4);
          }, rtp: a2, tb: n2 }, o2 = v(Object.keys(t3 || {}).sort()); !(e3 = o2()).done; ) {
            var l2 = e3.value, u2 = t3[l2];
            if (i3(u2) && !("v" === l2 && 1 === u2 || "pr" == l2 && 1 === u2)) {
              var h2 = s2[l2];
              h2 && (u2 = h2(u2));
              var d2 = typeof u2, c2 = void 0;
              c2 = "ot" === l2 || "sf" === l2 || "st" === l2 ? l2 + "=" + u2 : "boolean" === d2 ? l2 : "number" === d2 ? l2 + "=" + u2 : l2 + "=" + JSON.stringify(u2), r2.push(c2);
            }
          }
          return r2.join(",");
        }, t2.toHeaders = function(e3) {
          for (var r2 = {}, i3 = ["Object", "Request", "Session", "Status"], n2 = [{}, {}, {}, {}], a2 = { br: 0, d: 0, ot: 0, tb: 0, bl: 1, dl: 1, mtp: 1, nor: 1, nrr: 1, su: 1, cid: 2, pr: 2, sf: 2, sid: 2, st: 2, v: 2, bs: 3, rtp: 3 }, s2 = 0, o2 = Object.keys(e3); s2 < o2.length; s2++) {
            var l2 = o2[s2];
            n2[null != a2[l2] ? a2[l2] : 1][l2] = e3[l2];
          }
          for (var u2 = 0; u2 < n2.length; u2++) {
            var h2 = t2.serialize(n2[u2]);
            h2 && (r2["CMCD-" + i3[u2]] = h2);
          }
          return r2;
        }, t2.toQuery = function(e3) {
          return "CMCD=" + encodeURIComponent(t2.serialize(e3));
        }, t2.appendQueryToUri = function(t3, e3) {
          if (!e3)
            return t3;
          var r2 = t3.includes("?") ? "&" : "?";
          return "" + t3 + r2 + e3;
        }, t2;
      }(), Ma = function() {
        function t2(t3) {
          this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = false, this.enabled = true, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = t3, this.log = w.log.bind(w, "[content-steering]:"), this.registerListeners();
        }
        var e2 = t2.prototype;
        return e2.registerListeners = function() {
          var t3 = this.hls;
          t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.ERROR, this.onError, this);
        }, e2.unregisterListeners = function() {
          var t3 = this.hls;
          t3 && (t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.ERROR, this.onError, this));
        }, e2.startLoad = function() {
          if (this.started = true, self.clearTimeout(this.reloadTimer), this.enabled && this.uri)
            if (this.updated) {
              var t3 = Math.max(1e3 * this.timeToLoad - (performance.now() - this.updated), 0);
              this.scheduleRefresh(this.uri, t3);
            } else
              this.loadSteeringManifest(this.uri);
        }, e2.stopLoad = function() {
          this.started = false, this.loader && (this.loader.destroy(), this.loader = null), self.clearTimeout(this.reloadTimer);
        }, e2.destroy = function() {
          this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
        }, e2.removeLevel = function(t3) {
          var e3 = this.levels;
          e3 && (this.levels = e3.filter(function(e4) {
            return e4 !== t3;
          }));
        }, e2.onManifestLoading = function() {
          this.stopLoad(), this.enabled = true, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
        }, e2.onManifestLoaded = function(t3, e3) {
          var r2 = e3.contentSteering;
          null !== r2 && (this.pathwayId = r2.pathwayId, this.uri = r2.uri, this.started && this.startLoad());
        }, e2.onManifestParsed = function(t3, e3) {
          this.audioTracks = e3.audioTracks, this.subtitleTracks = e3.subtitleTracks;
        }, e2.onError = function(t3, e3) {
          var r2 = e3.errorAction;
          if ((null == r2 ? void 0 : r2.action) === ir && r2.flags === sr) {
            var i3 = this.pathwayPriority, n2 = this.pathwayId;
            this.penalizedPathways[n2] || (this.penalizedPathways[n2] = performance.now()), !i3 && this.levels && (i3 = this.levels.reduce(function(t4, e4) {
              return -1 === t4.indexOf(e4.pathwayId) && t4.push(e4.pathwayId), t4;
            }, [])), i3 && i3.length > 1 && (this.updatePathwayPriority(i3), r2.resolved = this.pathwayId !== n2);
          }
        }, e2.filterParsedLevels = function(t3) {
          this.levels = t3;
          var e3 = this.getLevelsForPathway(this.pathwayId);
          if (0 === e3.length) {
            var r2 = t3[0].pathwayId;
            this.log("No levels found in Pathway " + this.pathwayId + '. Setting initial Pathway to "' + r2 + '"'), e3 = this.getLevelsForPathway(r2), this.pathwayId = r2;
          }
          return e3.length !== t3.length ? (this.log("Found " + e3.length + "/" + t3.length + ' levels in Pathway "' + this.pathwayId + '"'), e3) : t3;
        }, e2.getLevelsForPathway = function(t3) {
          return null === this.levels ? [] : this.levels.filter(function(e3) {
            return t3 === e3.pathwayId;
          });
        }, e2.updatePathwayPriority = function(t3) {
          var e3;
          this.pathwayPriority = t3;
          var r2 = this.penalizedPathways, i3 = performance.now();
          Object.keys(r2).forEach(function(t4) {
            i3 - r2[t4] > 3e5 && delete r2[t4];
          });
          for (var n2 = 0; n2 < t3.length; n2++) {
            var a2 = t3[n2];
            if (!r2[a2]) {
              if (a2 === this.pathwayId)
                return;
              var s2 = this.hls.nextLoadLevel, o2 = this.hls.levels[s2];
              if ((e3 = this.getLevelsForPathway(a2)).length > 0) {
                this.log('Setting Pathway to "' + a2 + '"'), this.pathwayId = a2, this.hls.trigger(S.LEVELS_UPDATED, { levels: e3 });
                var l2 = this.hls.levels[s2];
                o2 && l2 && this.levels && (l2.attrs["STABLE-VARIANT-ID"] !== o2.attrs["STABLE-VARIANT-ID"] && l2.bitrate !== o2.bitrate && this.log("Unstable Pathways change from bitrate " + o2.bitrate + " to " + l2.bitrate), this.hls.nextLoadLevel = s2);
                break;
              }
            }
          }
        }, e2.clonePathways = function(t3) {
          var e3 = this, r2 = this.levels;
          if (r2) {
            var i3 = {}, n2 = {};
            t3.forEach(function(t4) {
              var a2 = t4.ID, s2 = t4["BASE-ID"], l2 = t4["URI-REPLACEMENT"];
              if (!r2.some(function(t5) {
                return t5.pathwayId === a2;
              })) {
                var u2 = e3.getLevelsForPathway(s2).map(function(t5) {
                  var e4 = o({}, t5);
                  e4.details = void 0, e4.url = Na(t5.uri, t5.attrs["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l2);
                  var r3 = new P(t5.attrs);
                  r3["PATHWAY-ID"] = a2;
                  var s3 = r3.AUDIO && r3.AUDIO + "_clone_" + a2, u3 = r3.SUBTITLES && r3.SUBTITLES + "_clone_" + a2;
                  s3 && (i3[r3.AUDIO] = s3, r3.AUDIO = s3), u3 && (n2[r3.SUBTITLES] = u3, r3.SUBTITLES = u3), e4.attrs = r3;
                  var h2 = new Ne(e4);
                  return dr(h2, "audio", s3), dr(h2, "text", u3), h2;
                });
                r2.push.apply(r2, u2), Oa(e3.audioTracks, i3, l2, a2), Oa(e3.subtitleTracks, n2, l2, a2);
              }
            });
          }
        }, e2.loadSteeringManifest = function(t3) {
          var e3, r2 = this, i3 = this.hls.config, n2 = i3.loader;
          this.loader && this.loader.destroy(), this.loader = new n2(i3);
          try {
            e3 = new self.URL(t3);
          } catch (e4) {
            return this.enabled = false, void this.log("Failed to parse Steering Manifest URI: " + t3);
          }
          if ("data:" !== e3.protocol) {
            var a2 = 0 | (this.hls.bandwidthEstimate || i3.abrEwmaDefaultEstimate);
            e3.searchParams.set("_HLS_pathway", this.pathwayId), e3.searchParams.set("_HLS_throughput", "" + a2);
          }
          var s2 = { responseType: "json", url: e3.href }, o2 = i3.steeringManifestLoadPolicy.default, l2 = o2.errorRetry || o2.timeoutRetry || {}, u2 = { loadPolicy: o2, timeout: o2.maxLoadTimeMs, maxRetry: l2.maxNumRetry || 0, retryDelay: l2.retryDelayMs || 0, maxRetryDelay: l2.maxRetryDelayMs || 0 }, h2 = { onSuccess: function(t4, i4, n3, a3) {
            r2.log('Loaded steering manifest: "' + e3 + '"');
            var s3 = t4.data;
            if (1 === s3.VERSION) {
              r2.updated = performance.now(), r2.timeToLoad = s3.TTL;
              var o3 = s3["RELOAD-URI"], l3 = s3["PATHWAY-CLONES"], u3 = s3["PATHWAY-PRIORITY"];
              if (o3)
                try {
                  r2.uri = new self.URL(o3, e3).href;
                } catch (t5) {
                  return r2.enabled = false, void r2.log("Failed to parse Steering Manifest RELOAD-URI: " + o3);
                }
              r2.scheduleRefresh(r2.uri || n3.url), l3 && r2.clonePathways(l3), u3 && r2.updatePathwayPriority(u3);
            } else
              r2.log("Steering VERSION " + s3.VERSION + " not supported!");
          }, onError: function(t4, e4, i4, n3) {
            if (r2.log("Error loading steering manifest: " + t4.code + " " + t4.text + " (" + e4.url + ")"), r2.stopLoad(), 410 === t4.code)
              return r2.enabled = false, void r2.log("Steering manifest " + e4.url + " no longer available");
            var a3 = 1e3 * r2.timeToLoad;
            if (429 !== t4.code)
              r2.scheduleRefresh(r2.uri || e4.url, a3);
            else {
              var s3 = r2.loader;
              if ("function" == typeof (null == s3 ? void 0 : s3.getResponseHeader)) {
                var o3 = s3.getResponseHeader("Retry-After");
                o3 && (a3 = 1e3 * parseFloat(o3));
              }
              r2.log("Steering manifest " + e4.url + " rate limited");
            }
          }, onTimeout: function(t4, e4, i4) {
            r2.log("Timeout loading steering manifest (" + e4.url + ")"), r2.scheduleRefresh(r2.uri || e4.url);
          } };
          this.log("Requesting steering manifest: " + e3), this.loader.load(s2, u2, h2);
        }, e2.scheduleRefresh = function(t3, e3) {
          var r2 = this;
          void 0 === e3 && (e3 = 1e3 * this.timeToLoad), self.clearTimeout(this.reloadTimer), this.reloadTimer = self.setTimeout(function() {
            r2.loadSteeringManifest(t3);
          }, e3);
        }, t2;
      }();
      function Oa(t2, e2, r2, i3) {
        t2 && Object.keys(e2).forEach(function(n2) {
          var a2 = t2.filter(function(t3) {
            return t3.groupId === n2;
          }).map(function(t3) {
            var a3 = o({}, t3);
            return a3.details = void 0, a3.attrs = new P(a3.attrs), a3.url = a3.attrs.URI = Na(t3.url, t3.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", r2), a3.groupId = a3.attrs["GROUP-ID"] = e2[n2], a3.attrs["PATHWAY-ID"] = i3, a3;
          });
          t2.push.apply(t2, a2);
        });
      }
      function Na(t2, e2, r2, i3) {
        var n2, a2 = i3.HOST, s2 = i3.PARAMS, o2 = i3[r2];
        e2 && (n2 = null == o2 ? void 0 : o2[e2]) && (t2 = n2);
        var l2 = new self.URL(t2);
        return a2 && !n2 && (l2.host = a2), s2 && Object.keys(s2).sort().forEach(function(t3) {
          t3 && l2.searchParams.set(t3, s2[t3]);
        }), l2.href;
      }
      var Ua = /^age:\s*[\d.]+\s*$/im, Ba = function() {
        function t2(t3) {
          this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = t3 && t3.xhrSetup || null, this.stats = new M(), this.retryDelay = 0;
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
          this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null;
        }, e2.abortInternal = function() {
          var t3 = this.loader;
          self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t3 && (t3.onreadystatechange = null, t3.onprogress = null, 4 !== t3.readyState && (this.stats.aborted = true, t3.abort()));
        }, e2.abort = function() {
          var t3;
          this.abortInternal(), null != (t3 = this.callbacks) && t3.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
        }, e2.load = function(t3, e3, r2) {
          if (this.stats.loading.start)
            throw new Error("Loader can only be used once.");
          this.stats.loading.start = self.performance.now(), this.context = t3, this.config = e3, this.callbacks = r2, this.loadInternal();
        }, e2.loadInternal = function() {
          var t3 = this, e3 = this.config, r2 = this.context;
          if (e3) {
            var i3 = this.loader = new self.XMLHttpRequest(), n2 = this.stats;
            n2.loading.first = 0, n2.loaded = 0, n2.aborted = false;
            var a2 = this.xhrSetup;
            a2 ? Promise.resolve().then(function() {
              if (!t3.stats.aborted)
                return a2(i3, r2.url);
            }).catch(function(t4) {
              return i3.open("GET", r2.url, true), a2(i3, r2.url);
            }).then(function() {
              t3.stats.aborted || t3.openAndSendXhr(i3, r2, e3);
            }).catch(function(e4) {
              t3.callbacks.onError({ code: i3.status, text: e4.message }, r2, i3, n2);
            }) : this.openAndSendXhr(i3, r2, e3);
          }
        }, e2.openAndSendXhr = function(t3, e3, r2) {
          t3.readyState || t3.open("GET", e3.url, true);
          var i3 = this.context.headers, n2 = r2.loadPolicy, a2 = n2.maxTimeToFirstByteMs, s2 = n2.maxLoadTimeMs;
          if (i3)
            for (var o2 in i3)
              t3.setRequestHeader(o2, i3[o2]);
          e3.rangeEnd && t3.setRequestHeader("Range", "bytes=" + e3.rangeStart + "-" + (e3.rangeEnd - 1)), t3.onreadystatechange = this.readystatechange.bind(this), t3.onprogress = this.loadprogress.bind(this), t3.responseType = e3.responseType, self.clearTimeout(this.requestTimeout), r2.timeout = a2 && E(a2) ? a2 : s2, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r2.timeout), t3.send();
        }, e2.readystatechange = function() {
          var t3 = this.context, e3 = this.loader, r2 = this.stats;
          if (t3 && e3) {
            var i3 = e3.readyState, n2 = this.config;
            if (!r2.aborted && i3 >= 2 && (0 === r2.loading.first && (r2.loading.first = Math.max(self.performance.now(), r2.loading.start), n2.timeout !== n2.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), n2.timeout = n2.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n2.loadPolicy.maxLoadTimeMs - (r2.loading.first - r2.loading.start)))), 4 === i3)) {
              self.clearTimeout(this.requestTimeout), e3.onreadystatechange = null, e3.onprogress = null;
              var a2 = e3.status, s2 = "text" !== e3.responseType;
              if (a2 >= 200 && a2 < 300 && (s2 && e3.response || null !== e3.responseText)) {
                r2.loading.end = Math.max(self.performance.now(), r2.loading.first);
                var o2 = s2 ? e3.response : e3.responseText, l2 = "arraybuffer" === e3.responseType ? o2.byteLength : o2.length;
                if (r2.loaded = r2.total = l2, r2.bwEstimate = 8e3 * r2.total / (r2.loading.end - r2.loading.first), !this.callbacks)
                  return;
                var u2 = this.callbacks.onProgress;
                if (u2 && u2(r2, t3, o2, e3), !this.callbacks)
                  return;
                var h2 = { url: e3.responseURL, data: o2, code: a2 };
                this.callbacks.onSuccess(h2, r2, t3, e3);
              } else {
                var d2 = n2.loadPolicy.errorRetry;
                ze(d2, r2.retry, false, a2) ? this.retry(d2) : (w.error(a2 + " while loading " + t3.url), this.callbacks.onError({ code: a2, text: e3.statusText }, t3, e3, r2));
              }
            }
          }
        }, e2.loadtimeout = function() {
          var t3, e3 = null == (t3 = this.config) ? void 0 : t3.loadPolicy.timeoutRetry;
          if (ze(e3, this.stats.retry, true))
            this.retry(e3);
          else {
            w.warn("timeout while loading " + this.context.url);
            var r2 = this.callbacks;
            r2 && (this.abortInternal(), r2.onTimeout(this.stats, this.context, this.loader));
          }
        }, e2.retry = function(t3) {
          var e3 = this.context, r2 = this.stats;
          this.retryDelay = qe(t3, r2.retry), r2.retry++, w.warn((status ? "HTTP Status " + status : "Timeout") + " while loading " + e3.url + ", retrying " + r2.retry + "/" + t3.maxNumRetry + " in " + this.retryDelay + "ms"), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
        }, e2.loadprogress = function(t3) {
          var e3 = this.stats;
          e3.loaded = t3.loaded, t3.lengthComputable && (e3.total = t3.total);
        }, e2.getCacheAge = function() {
          var t3 = null;
          if (this.loader && Ua.test(this.loader.getAllResponseHeaders())) {
            var e3 = this.loader.getResponseHeader("age");
            t3 = e3 ? parseFloat(e3) : null;
          }
          return t3;
        }, e2.getResponseHeader = function(t3) {
          return this.loader && new RegExp("^" + t3 + ":\\s*[\\d.]+\\s*$", "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(t3) : null;
        }, t2;
      }(), Ga = /(\d+)-(\d+)\/(\d+)/, Ka = function() {
        function t2(t3) {
          this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t3.fetchSetup || Ha, this.controller = new self.AbortController(), this.stats = new M();
        }
        var e2 = t2.prototype;
        return e2.destroy = function() {
          this.loader = this.callbacks = null, this.abortInternal();
        }, e2.abortInternal = function() {
          var t3 = this.response;
          null != t3 && t3.ok || (this.stats.aborted = true, this.controller.abort());
        }, e2.abort = function() {
          var t3;
          this.abortInternal(), null != (t3 = this.callbacks) && t3.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
        }, e2.load = function(t3, e3, r2) {
          var i3 = this, n2 = this.stats;
          if (n2.loading.start)
            throw new Error("Loader can only be used once.");
          n2.loading.start = self.performance.now();
          var a2 = function(t4, e4) {
            var r3 = { method: "GET", mode: "cors", credentials: "same-origin", signal: e4, headers: new self.Headers(o({}, t4.headers)) };
            return t4.rangeEnd && r3.headers.set("Range", "bytes=" + t4.rangeStart + "-" + String(t4.rangeEnd - 1)), r3;
          }(t3, this.controller.signal), s2 = r2.onProgress, l2 = "arraybuffer" === t3.responseType, u2 = l2 ? "byteLength" : "length", h2 = e3.loadPolicy, d2 = h2.maxTimeToFirstByteMs, c2 = h2.maxLoadTimeMs;
          this.context = t3, this.config = e3, this.callbacks = r2, this.request = this.fetchSetup(t3, a2), self.clearTimeout(this.requestTimeout), e3.timeout = d2 && E(d2) ? d2 : c2, this.requestTimeout = self.setTimeout(function() {
            i3.abortInternal(), r2.onTimeout(n2, t3, i3.response);
          }, e3.timeout), self.fetch(this.request).then(function(a3) {
            i3.response = i3.loader = a3;
            var o2 = Math.max(self.performance.now(), n2.loading.start);
            if (self.clearTimeout(i3.requestTimeout), e3.timeout = c2, i3.requestTimeout = self.setTimeout(function() {
              i3.abortInternal(), r2.onTimeout(n2, t3, i3.response);
            }, c2 - (o2 - n2.loading.start)), !a3.ok) {
              var u3 = a3.status, h3 = a3.statusText;
              throw new Va(h3 || "fetch, bad network response", u3, a3);
            }
            return n2.loading.first = o2, n2.total = function(t4) {
              var e4 = t4.get("Content-Range");
              if (e4) {
                var r3 = function(t5) {
                  var e5 = Ga.exec(t5);
                  if (e5)
                    return parseInt(e5[2]) - parseInt(e5[1]) + 1;
                }(e4);
                if (E(r3))
                  return r3;
              }
              var i4 = t4.get("Content-Length");
              if (i4)
                return parseInt(i4);
            }(a3.headers) || n2.total, s2 && E(e3.highWaterMark) ? i3.loadProgressively(a3, n2, t3, e3.highWaterMark, s2) : l2 ? a3.arrayBuffer() : "json" === t3.responseType ? a3.json() : a3.text();
          }).then(function(a3) {
            var o2 = i3.response;
            self.clearTimeout(i3.requestTimeout), n2.loading.end = Math.max(self.performance.now(), n2.loading.first);
            var l3 = a3[u2];
            l3 && (n2.loaded = n2.total = l3);
            var h3 = { url: o2.url, data: a3, code: o2.status };
            s2 && !E(e3.highWaterMark) && s2(n2, t3, a3, o2), r2.onSuccess(h3, n2, t3, o2);
          }).catch(function(e4) {
            if (self.clearTimeout(i3.requestTimeout), !n2.aborted) {
              var a3 = e4 && e4.code || 0, s3 = e4 ? e4.message : null;
              r2.onError({ code: a3, text: s3 }, t3, e4 ? e4.details : null, n2);
            }
          });
        }, e2.getCacheAge = function() {
          var t3 = null;
          if (this.response) {
            var e3 = this.response.headers.get("age");
            t3 = e3 ? parseFloat(e3) : null;
          }
          return t3;
        }, e2.getResponseHeader = function(t3) {
          return this.response ? this.response.headers.get(t3) : null;
        }, e2.loadProgressively = function(t3, e3, r2, i3, n2) {
          void 0 === i3 && (i3 = 0);
          var a2 = new mn(), s2 = t3.body.getReader();
          return function o2() {
            return s2.read().then(function(s3) {
              if (s3.done)
                return a2.dataLength && n2(e3, r2, a2.flush(), t3), Promise.resolve(new ArrayBuffer(0));
              var l2 = s3.value, u2 = l2.length;
              return e3.loaded += u2, u2 < i3 || a2.dataLength ? (a2.push(l2), a2.dataLength >= i3 && n2(e3, r2, a2.flush(), t3)) : n2(e3, r2, l2, t3), o2();
            }).catch(function() {
              return Promise.reject();
            });
          }();
        }, t2;
      }();
      function Ha(t2, e2) {
        return new self.Request(t2.url, e2);
      }
      var Va = function(t2) {
        function e2(e3, r2, i3) {
          var n2;
          return (n2 = t2.call(this, e3) || this).code = void 0, n2.details = void 0, n2.code = r2, n2.details = i3, n2;
        }
        return l(e2, t2), e2;
      }(f(Error)), Ya = /\s/, Wa = i2(i2({ autoStartLoad: true, startPosition: -1, defaultAudioCodec: void 0, debug: false, capLevelOnFPSDrop: false, capLevelToPlayerSize: false, ignoreDevicePixelRatio: false, initialLiveManifestSize: 1, maxBufferLength: 30, backBufferLength: 1 / 0, maxBufferSize: 6e7, maxBufferHole: 0.1, highBufferWatchdogPeriod: 2, nudgeOffset: 0.1, nudgeMaxRetry: 3, maxFragLookUpTolerance: 0.25, liveSyncDurationCount: 3, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, maxLiveSyncPlaybackRate: 1, liveDurationInfinity: false, liveBackBufferLength: null, maxMaxBufferLength: 600, enableWorker: true, workerPath: null, enableSoftwareAES: true, startLevel: void 0, startFragPrefetch: false, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: 0.2, appendErrorMaxRetry: 3, loader: Ba, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, licenseXhrSetup: void 0, licenseResponseCallback: void 0, abrController: vn, bufferController: In, capLevelController: Ra, errorController: lr, fpsController: Aa, stretchShortVideoTrack: false, maxAudioFramesDrift: 1, forceKeyFrameOnDiscontinuity: true, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrBandWidthFactor: 0.95, abrBandWidthUpFactor: 0.7, abrMaxWithRealBitrate: false, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0, emeEnabled: false, widevineLicenseUrl: void 0, drmSystems: {}, drmSystemOptions: {}, requestMediaKeySystemAccessFunc: et, testBandwidth: true, progressive: false, lowLatencyMode: true, cmcd: void 0, enableDateRangeMetadataCues: true, enableEmsgMetadataCues: true, enableID3MetadataCues: true, certLoadPolicy: { default: { maxTimeToFirstByteMs: 8e3, maxLoadTimeMs: 2e4, timeoutRetry: null, errorRetry: null } }, keyLoadPolicy: { default: { maxTimeToFirstByteMs: 8e3, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" }, errorRetry: { maxNumRetry: 8, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" } } }, manifestLoadPolicy: { default: { maxTimeToFirstByteMs: 1 / 0, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, playlistLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 2, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, fragLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 12e4, timeoutRetry: { maxNumRetry: 4, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 6, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, steeringManifestLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3 }, { cueHandler: { newCue: function(t2, e2, r2, i3) {
        for (var n2, a2, s2, o2, l2, u2 = [], h2 = self.VTTCue || self.TextTrackCue, d2 = 0; d2 < i3.rows.length; d2++)
          if (s2 = true, o2 = 0, l2 = "", !(n2 = i3.rows[d2]).isEmpty()) {
            for (var c2, f2 = 0; f2 < n2.chars.length; f2++)
              Ya.test(n2.chars[f2].uchar) && s2 ? o2++ : (l2 += n2.chars[f2].uchar, s2 = false);
            n2.cueStartTime = e2, e2 === r2 && (r2 += 1e-4), o2 >= 16 ? o2-- : o2++;
            var g2 = ia(l2.trim()), v2 = la(e2, r2, g2);
            null != t2 && null != (c2 = t2.cues) && c2.getCueById(v2) || ((a2 = new h2(e2, r2, g2)).id = v2, a2.line = d2 + 1, a2.align = "left", a2.position = 10 + Math.min(80, 10 * Math.floor(8 * o2 / 32)), u2.push(a2));
          }
        return t2 && u2.length && (u2.sort(function(t3, e3) {
          return "auto" === t3.line || "auto" === e3.line ? 0 : t3.line > 8 && e3.line > 8 ? e3.line - t3.line : t3.line - e3.line;
        }), u2.forEach(function(e3) {
          return Se(t2, e3);
        })), u2;
      } }, enableWebVTT: true, enableIMSC1: true, enableCEA708Captions: true, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es", captionsTextTrack3Label: "Unknown CC", captionsTextTrack3LanguageCode: "", captionsTextTrack4Label: "Unknown CC", captionsTextTrack4LanguageCode: "", renderTextTracksNatively: true }), {}, { subtitleStreamController: Sn, subtitleTrackController: Rn, timelineController: Sa, audioStreamController: pn, audioTrackController: yn, emeController: ba, cmcdController: Fa, contentSteeringController: Ma });
      function ja(t2) {
        return t2 && "object" == typeof t2 ? Array.isArray(t2) ? t2.map(ja) : Object.keys(t2).reduce(function(e2, r2) {
          return e2[r2] = ja(t2[r2]), e2;
        }, {}) : t2;
      }
      function qa(t2) {
        var e2 = t2.loader;
        e2 !== Ka && e2 !== Ba ? (w.log("[config]: Custom loader detected, cannot enable progressive streaming"), t2.progressive = false) : function() {
          if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
            try {
              return new self.ReadableStream({}), true;
            } catch (t3) {
            }
          return false;
        }() && (t2.loader = Ka, t2.progressive = true, t2.enableSoftwareAES = true, w.log("[config]: Progressive streaming enabled, using FetchLoader"));
      }
      var Xa = function() {
        function t2(e3) {
          void 0 === e3 && (e3 = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new an(), this._autoLevelCapping = void 0, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, I(e3.debug || false, "Hls instance");
          var r2 = this.config = function(t3, e4) {
            if ((e4.liveSyncDurationCount || e4.liveMaxLatencyDurationCount) && (e4.liveSyncDuration || e4.liveMaxLatencyDuration))
              throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
            if (void 0 !== e4.liveMaxLatencyDurationCount && (void 0 === e4.liveSyncDurationCount || e4.liveMaxLatencyDurationCount <= e4.liveSyncDurationCount))
              throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
            if (void 0 !== e4.liveMaxLatencyDuration && (void 0 === e4.liveSyncDuration || e4.liveMaxLatencyDuration <= e4.liveSyncDuration))
              throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
            var r3 = ja(t3), n3 = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
            return ["manifest", "level", "frag"].forEach(function(t4) {
              var i3 = ("level" === t4 ? "playlist" : t4) + "LoadPolicy", a3 = void 0 === e4[i3], s3 = [];
              n3.forEach(function(n4) {
                var o3 = t4 + "Loading" + n4, l3 = e4[o3];
                if (void 0 !== l3 && a3) {
                  s3.push(o3);
                  var u3 = r3[i3].default;
                  switch (e4[i3] = { default: u3 }, n4) {
                    case "TimeOut":
                      u3.maxLoadTimeMs = l3, u3.maxTimeToFirstByteMs = l3;
                      break;
                    case "MaxRetry":
                      u3.errorRetry.maxNumRetry = l3, u3.timeoutRetry.maxNumRetry = l3;
                      break;
                    case "RetryDelay":
                      u3.errorRetry.retryDelayMs = l3, u3.timeoutRetry.retryDelayMs = l3;
                      break;
                    case "MaxRetryTimeout":
                      u3.errorRetry.maxRetryDelayMs = l3, u3.timeoutRetry.maxRetryDelayMs = l3;
                  }
                }
              }), s3.length && w.warn('hls.js config: "' + s3.join('", "') + '" setting(s) are deprecated, use "' + i3 + '": ' + JSON.stringify(e4[i3]));
            }), i2(i2({}, r3), e4);
          }(t2.DefaultConfig, e3);
          this.userConfig = e3, this._autoLevelCapping = -1, r2.progressive && qa(r2);
          var n2 = r2.abrController, a2 = r2.bufferController, s2 = r2.capLevelController, o2 = r2.errorController, l2 = r2.fpsController, u2 = new o2(this), h2 = this.abrController = new n2(this), d2 = this.bufferController = new a2(this), c2 = this.capLevelController = new s2(this), f2 = new l2(this), g2 = new Te(this), v2 = new Ce(this), m2 = r2.contentSteeringController, p2 = m2 ? new m2(this) : null, y2 = this.levelController = new hr(this, p2), T2 = new pr(this), E2 = new kr(this.config), L2 = this.streamController = new cn(this, T2, E2);
          c2.setStreamController(L2), f2.setStreamController(L2);
          var R2 = [g2, y2, L2];
          p2 && R2.splice(1, 0, p2), this.networkControllers = R2;
          var A2 = [h2, d2, c2, f2, v2, T2];
          this.audioTrackController = this.createController(r2.audioTrackController, R2);
          var k2 = r2.audioStreamController;
          k2 && R2.push(new k2(this, T2, E2)), this.subtitleTrackController = this.createController(r2.subtitleTrackController, R2);
          var b2 = r2.subtitleStreamController;
          b2 && R2.push(new b2(this, T2, E2)), this.createController(r2.timelineController, A2), E2.emeController = this.emeController = this.createController(r2.emeController, A2), this.cmcdController = this.createController(r2.cmcdController, A2), this.latencyController = this.createController(_e, A2), this.coreComponents = A2, R2.push(u2);
          var D2 = u2.onErrorOut;
          "function" == typeof D2 && this.on(S.ERROR, D2, u2);
        }
        t2.isSupported = function() {
          return function() {
            var t3 = qt();
            if (!t3)
              return false;
            var e3 = Zr(), r2 = t3 && "function" == typeof t3.isTypeSupported && t3.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), i3 = !e3 || e3.prototype && "function" == typeof e3.prototype.appendBuffer && "function" == typeof e3.prototype.remove;
            return !!r2 && !!i3;
          }();
        };
        var e2 = t2.prototype;
        return e2.createController = function(t3, e3) {
          if (t3) {
            var r2 = new t3(this);
            return e3 && e3.push(r2), r2;
          }
          return null;
        }, e2.on = function(t3, e3, r2) {
          void 0 === r2 && (r2 = this), this._emitter.on(t3, e3, r2);
        }, e2.once = function(t3, e3, r2) {
          void 0 === r2 && (r2 = this), this._emitter.once(t3, e3, r2);
        }, e2.removeAllListeners = function(t3) {
          this._emitter.removeAllListeners(t3);
        }, e2.off = function(t3, e3, r2, i3) {
          void 0 === r2 && (r2 = this), this._emitter.off(t3, e3, r2, i3);
        }, e2.listeners = function(t3) {
          return this._emitter.listeners(t3);
        }, e2.emit = function(t3, e3, r2) {
          return this._emitter.emit(t3, e3, r2);
        }, e2.trigger = function(t3, e3) {
          if (this.config.debug)
            return this.emit(t3, t3, e3);
          try {
            return this.emit(t3, t3, e3);
          } catch (e4) {
            w.error("An internal error happened while handling event " + t3 + '. Error message: "' + e4.message + '". Here is a stacktrace:', e4), this.trigger(S.ERROR, { type: L.OTHER_ERROR, details: R.INTERNAL_EXCEPTION, fatal: false, event: t3, error: e4 });
          }
          return false;
        }, e2.listenerCount = function(t3) {
          return this._emitter.listenerCount(t3);
        }, e2.destroy = function() {
          w.log("destroy"), this.trigger(S.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(function(t4) {
            return t4.destroy();
          }), this.networkControllers.length = 0, this.coreComponents.forEach(function(t4) {
            return t4.destroy();
          }), this.coreComponents.length = 0;
          var t3 = this.config;
          t3.xhrSetup = t3.fetchSetup = void 0, this.userConfig = null;
        }, e2.attachMedia = function(t3) {
          w.log("attachMedia"), this._media = t3, this.trigger(S.MEDIA_ATTACHING, { media: t3 });
        }, e2.detachMedia = function() {
          w.log("detachMedia"), this.trigger(S.MEDIA_DETACHING, void 0), this._media = null;
        }, e2.loadSource = function(t3) {
          this.stopLoad();
          var e3 = this.media, r2 = this.url, i3 = this.url = T.buildAbsoluteURL(self.location.href, t3, { alwaysNormalize: true });
          w.log("loadSource:" + i3), e3 && r2 && (r2 !== i3 || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(e3)), this.trigger(S.MANIFEST_LOADING, { url: t3 });
        }, e2.startLoad = function(t3) {
          void 0 === t3 && (t3 = -1), w.log("startLoad(" + t3 + ")"), this.networkControllers.forEach(function(e3) {
            e3.startLoad(t3);
          });
        }, e2.stopLoad = function() {
          w.log("stopLoad"), this.networkControllers.forEach(function(t3) {
            t3.stopLoad();
          });
        }, e2.swapAudioCodec = function() {
          w.log("swapAudioCodec"), this.streamController.swapAudioCodec();
        }, e2.recoverMediaError = function() {
          w.log("recoverMediaError");
          var t3 = this._media;
          this.detachMedia(), t3 && this.attachMedia(t3);
        }, e2.removeLevel = function(t3, e3) {
          void 0 === e3 && (e3 = 0), this.levelController.removeLevel(t3, e3);
        }, a(t2, [{ key: "levels", get: function() {
          var t3 = this.levelController.levels;
          return t3 || [];
        } }, { key: "currentLevel", get: function() {
          return this.streamController.currentLevel;
        }, set: function(t3) {
          w.log("set currentLevel:" + t3), this.loadLevel = t3, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch();
        } }, { key: "nextLevel", get: function() {
          return this.streamController.nextLevel;
        }, set: function(t3) {
          w.log("set nextLevel:" + t3), this.levelController.manualLevel = t3, this.streamController.nextLevelSwitch();
        } }, { key: "loadLevel", get: function() {
          return this.levelController.level;
        }, set: function(t3) {
          w.log("set loadLevel:" + t3), this.levelController.manualLevel = t3;
        } }, { key: "nextLoadLevel", get: function() {
          return this.levelController.nextLoadLevel;
        }, set: function(t3) {
          this.levelController.nextLoadLevel = t3;
        } }, { key: "firstLevel", get: function() {
          return Math.max(this.levelController.firstLevel, this.minAutoLevel);
        }, set: function(t3) {
          w.log("set firstLevel:" + t3), this.levelController.firstLevel = t3;
        } }, { key: "startLevel", get: function() {
          return this.levelController.startLevel;
        }, set: function(t3) {
          w.log("set startLevel:" + t3), -1 !== t3 && (t3 = Math.max(t3, this.minAutoLevel)), this.levelController.startLevel = t3;
        } }, { key: "capLevelToPlayerSize", get: function() {
          return this.config.capLevelToPlayerSize;
        }, set: function(t3) {
          var e3 = !!t3;
          e3 !== this.config.capLevelToPlayerSize && (e3 ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e3);
        } }, { key: "autoLevelCapping", get: function() {
          return this._autoLevelCapping;
        }, set: function(t3) {
          this._autoLevelCapping !== t3 && (w.log("set autoLevelCapping:" + t3), this._autoLevelCapping = t3);
        } }, { key: "bandwidthEstimate", get: function() {
          var t3 = this.abrController.bwEstimator;
          return t3 ? t3.getEstimate() : NaN;
        } }, { key: "ttfbEstimate", get: function() {
          var t3 = this.abrController.bwEstimator;
          return t3 ? t3.getEstimateTTFB() : NaN;
        } }, { key: "maxHdcpLevel", get: function() {
          return this._maxHdcpLevel;
        }, set: function(t3) {
          Pe.indexOf(t3) > -1 && (this._maxHdcpLevel = t3);
        } }, { key: "autoLevelEnabled", get: function() {
          return -1 === this.levelController.manualLevel;
        } }, { key: "manualLevel", get: function() {
          return this.levelController.manualLevel;
        } }, { key: "minAutoLevel", get: function() {
          var t3 = this.levels, e3 = this.config.minAutoBitrate;
          if (!t3)
            return 0;
          for (var r2 = t3.length, i3 = 0; i3 < r2; i3++)
            if (t3[i3].maxBitrate >= e3)
              return i3;
          return 0;
        } }, { key: "maxAutoLevel", get: function() {
          var t3, e3 = this.levels, r2 = this.autoLevelCapping, i3 = this.maxHdcpLevel;
          if (t3 = -1 === r2 && e3 && e3.length ? e3.length - 1 : r2, i3)
            for (var n2 = t3; n2--; ) {
              var a2 = e3[n2].attrs["HDCP-LEVEL"];
              if (a2 && a2 <= i3)
                return n2;
            }
          return t3;
        } }, { key: "nextAutoLevel", get: function() {
          return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel);
        }, set: function(t3) {
          this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t3);
        } }, { key: "playingDate", get: function() {
          return this.streamController.currentProgramDateTime;
        } }, { key: "mainForwardBufferInfo", get: function() {
          return this.streamController.getMainFwdBufferInfo();
        } }, { key: "audioTracks", get: function() {
          var t3 = this.audioTrackController;
          return t3 ? t3.audioTracks : [];
        } }, { key: "audioTrack", get: function() {
          var t3 = this.audioTrackController;
          return t3 ? t3.audioTrack : -1;
        }, set: function(t3) {
          var e3 = this.audioTrackController;
          e3 && (e3.audioTrack = t3);
        } }, { key: "subtitleTracks", get: function() {
          var t3 = this.subtitleTrackController;
          return t3 ? t3.subtitleTracks : [];
        } }, { key: "subtitleTrack", get: function() {
          var t3 = this.subtitleTrackController;
          return t3 ? t3.subtitleTrack : -1;
        }, set: function(t3) {
          var e3 = this.subtitleTrackController;
          e3 && (e3.subtitleTrack = t3);
        } }, { key: "media", get: function() {
          return this._media;
        } }, { key: "subtitleDisplay", get: function() {
          var t3 = this.subtitleTrackController;
          return !!t3 && t3.subtitleDisplay;
        }, set: function(t3) {
          var e3 = this.subtitleTrackController;
          e3 && (e3.subtitleDisplay = t3);
        } }, { key: "lowLatencyMode", get: function() {
          return this.config.lowLatencyMode;
        }, set: function(t3) {
          this.config.lowLatencyMode = t3;
        } }, { key: "liveSyncPosition", get: function() {
          return this.latencyController.liveSyncPosition;
        } }, { key: "latency", get: function() {
          return this.latencyController.latency;
        } }, { key: "maxLatency", get: function() {
          return this.latencyController.maxLatency;
        } }, { key: "targetLatency", get: function() {
          return this.latencyController.targetLatency;
        } }, { key: "drift", get: function() {
          return this.latencyController.drift;
        } }, { key: "forceStartLoad", get: function() {
          return this.streamController.forceStartLoad;
        } }], [{ key: "version", get: function() {
          return "1.4.10";
        } }, { key: "Events", get: function() {
          return S;
        } }, { key: "ErrorTypes", get: function() {
          return L;
        } }, { key: "ErrorDetails", get: function() {
          return R;
        } }, { key: "DefaultConfig", get: function() {
          return t2.defaultConfig ? t2.defaultConfig : Wa;
        }, set: function(e3) {
          t2.defaultConfig = e3;
        } }]), t2;
      }();
      return Xa.defaultConfig = void 0, Xa;
    }, module.exports = i();
  }(false);
})(hls_min);
var Hls2 = /* @__PURE__ */ getDefaultExportFromCjs(hls_min.exports);
var dIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__$2 = {
  name: "d-icon"
};
const _sfc_main$7 = Object.assign(__default__$2, {
  props: {
    icon: String,
    size: [Number, String]
  },
  setup(__props) {
    const props = __props;
    const iconSize = computed(() => {
      let size = /^\d+$/.test(props.size) ? props.size + "px" : props.size;
      return { fontSize: size };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: normalizeClass(["d-icon iconfont", __props.icon]),
        style: normalizeStyle(iconSize.value)
      }, null, 6);
    };
  }
});
var DIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-0f81404c"]]);
var dPlayerTop_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$6 = { class: "d-player-top" };
const _hoisted_2$5 = { class: "top-title" };
const _hoisted_3$4 = { class: "top-title" };
const _sfc_main$6 = {
  __name: "d-player-top",
  props: {
    title: {
      default: ""
    }
  },
  setup(__props) {
    Date.prototype.format = function(fmt) {
      let o = {
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds()
      };
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
      }
      return fmt;
    };
    let currTime = ref("00:00:00");
    currTime.value = new Date().format("hh:mm:ss");
    let timeout = null;
    timeout = setInterval(() => {
      currTime.value = new Date().format("hh:mm:ss");
    }, 1e3);
    onUnmounted(() => {
      clearInterval(timeout);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createElementVNode("p", _hoisted_2$5, toDisplayString(__props.title || ""), 1),
        createElementVNode("p", _hoisted_3$4, toDisplayString(unref(currTime)), 1)
      ]);
    };
  }
};
var DPlayerTop = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-4cb76d59"]]);
var dStatus_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$5 = { class: "d-status" };
const _hoisted_2$4 = { class: "d-flex-center" };
const _hoisted_3$3 = { class: "d-flex-center" };
const _sfc_main$5 = defineComponent({
  __name: "d-status",
  props: ["state"],
  setup(__props) {
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$5, [
        withDirectives(createElementVNode("li", _hoisted_2$4, [
          createVNode(DIcon, {
            size: "18",
            class: "d-status-icon",
            icon: `icon-volume-${__props.state.volume == 0 ? "mute" : __props.state.volume > 0.5 ? "up" : "down"}`
          }, null, 8, ["icon"]),
          createTextVNode(" " + toDisplayString(~~(__props.state.volume * 100)) + "% ", 1)
        ], 512), [
          [vShow, __props.state.handleType == "volume"]
        ]),
        withDirectives(createElementVNode("li", _hoisted_3$3, [
          createVNode(DIcon, {
            size: "12",
            icon: "icon-play"
          }),
          createVNode(DIcon, {
            size: "12",
            icon: "icon-play",
            style: { "margin-right": "5px" }
          }),
          createTextVNode("5X\u901F\u64AD\u653E\u4E2D ")
        ], 512), [
          [vShow, __props.state.handleType == "playbackRate" || __props.state.isMultiplesPlay]
        ])
      ], 512)), [
        [vShow, __props.state.handleType || __props.state.isMultiplesPlay]
      ]);
    };
  }
});
var DStatus = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-ac2469ec"]]);
var dSwitch_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$3 = (n) => (pushScopeId("data-v-385f7870"), n = n(), popScopeId(), n);
const _hoisted_1$4 = ["checked", "true-value", "false-value"];
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("span", { class: "d-switch_action" }, null, -1));
const _sfc_main$4 = defineComponent({
  __name: "d-switch",
  props: {
    modelValue: {
      type: [Number, String, Boolean]
    },
    width: {
      type: String,
      default: "40px"
    },
    trueValue: {
      type: [Number, String, Boolean],
      default: true
    },
    falseValue: {
      type: [Number, String, Boolean],
      default: true
    },
    activeColor: {
      type: [String],
      default: "#409EFF"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "014e5dc0": __props.width,
      "e4e32852": __props.activeColor
    }));
    const input = ref(null);
    const checked = computed(() => {
      return props.modelValue === props.trueValue;
    });
    const handleInput = () => {
      nextTick(() => {
        const val = input.value.checked;
        emits("update:modelValue", val);
        emits("change", val);
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["d-switch", { "is-checked": checked.value }])
      }, [
        createElementVNode("input", {
          class: "d-switch__input",
          ref_key: "input",
          ref: input,
          type: "checkbox",
          checked: checked.value,
          onChange: handleInput,
          "true-value": __props.trueValue,
          "false-value": __props.falseValue
        }, null, 40, _hoisted_1$4),
        _hoisted_2$3
      ], 2);
    };
  }
});
var DSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-385f7870"]]);
var dLoading_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-f1d91c88"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("i", { class: "rotating iconfont icon-loading f50" }, null, -1));
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("i", { class: "rotating iconfont icon-loading f50" }, null, -1));
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("p", null, "\u6B63\u5728\u7F13\u51B2...", -1));
const _hoisted_5$2 = [
  _hoisted_3$2,
  _hoisted_4$2
];
const _hoisted_6$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("i", { class: "iconfont icon-replay f24 mr5" }, null, -1));
const _hoisted_7$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("i", { class: "iconfont icon-replay f24 mr5" }, null, -1));
const _sfc_main$3 = defineComponent({
  __name: "d-loading",
  props: {
    loadType: String,
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const { proxy } = getCurrentInstance();
    const LOAD_TYPE = ["loadstart", "waiting", "ended", "error", "stalled"];
    const replayHandle = () => {
      proxy.$parent.play();
    };
    const loadingStyle = computed(() => {
      let style = "background: rgba(0, 0, 0, .1);z-index:0";
      if (props.loadType == "loadstart") {
        style = "background: rgba(0, 0, 0, 1);z-index:3";
      }
      return style;
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "d-loading",
        style: normalizeStyle(loadingStyle.value)
      }, [
        createElementVNode("div", null, [
          __props.loadType == "loadstart" ? (openBlock(), createElementBlock("span", _hoisted_1$3, [
            _hoisted_2$2,
            createElementVNode("p", null, toDisplayString(__props.text), 1)
          ])) : createCommentVNode("", true),
          withDirectives(createElementVNode("span", null, _hoisted_5$2, 512), [
            [vShow, __props.loadType == "waiting"]
          ]),
          withDirectives(createElementVNode("span", null, [
            createElementVNode("p", {
              onClick: replayHandle,
              class: "d-flex-x d-pointer"
            }, [
              _hoisted_6$2,
              createTextVNode("\u91CD\u65B0\u64AD\u653E ")
            ])
          ], 512), [
            [vShow, __props.loadType == "ended"]
          ]),
          withDirectives(createElementVNode("span", null, [
            createElementVNode("p", {
              onClick: replayHandle,
              class: "d-flex-x d-pointer"
            }, [
              _hoisted_7$2,
              createTextVNode("\u8BF7\u6C42\u9519\u8BEF ")
            ])
          ], 512), [
            [vShow, __props.loadType == "error" || __props.loadType == "stalled"]
          ])
        ])
      ], 4)), [
        [vShow, LOAD_TYPE.includes(__props.loadType)]
      ]);
    };
  }
});
var DLoading = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f1d91c88"]]);
const on = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};
const off = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};
var dSlider_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = ["onMousedown"];
const __default__$1 = {
  name: "DSlider"
};
const _sfc_main$2 = defineComponent({
  ...__default__$1,
  props: {
    modelValue: {
      required: true,
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    hover: { type: Boolean, default: true },
    hoverText: { type: String, default: "" },
    preload: { type: Number, default: 0 },
    size: {
      type: String,
      default: "10px"
    }
  },
  emits: ["update:modelValue", "change", "onMousemove", "dragEnd"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "5cc9b0f4": __props.size
    }));
    const refSlider = ref(null);
    const refTips = ref(null);
    const state = reactive({
      dragging: false,
      hoverPosition: 0,
      hoverTipsLeft: "50%"
    });
    const sliderBarStyle = computed(() => {
      let value = props.modelValue < 0 ? 0 : props.modelValue > 1 ? 1 : props.modelValue;
      return props.vertical ? `height:${value * 100}%` : `width:${value * 100}%`;
    });
    const preloadStyle = computed(() => {
      let value = props.preload < 0 ? 0 : props.preload > 1 ? 1 : props.preload;
      return props.vertical ? `height:${value * 100}%` : `width:${value * 100}%`;
    });
    const hoverStyle = computed(() => {
      let value = state.hoverPosition < 0 ? 0 : state.hoverPosition > 1 ? 1 : state.hoverPosition;
      return props.vertical ? `bottom:${value * 100}%` : `left:${value * 100}%`;
    });
    const contextmenuHandle = (ev) => {
      ev.preventDefault();
    };
    const mouseDownHandle = (ev) => {
      if (props.disabled)
        return;
      ev.preventDefault();
      state.dragging = true;
      setPosition(ev);
      on(window, "mousemove", onDragging);
      on(window, "touchmove", onDragging);
      on(window, "mouseup", onDragEnd);
      on(window, "touchend", onDragEnd);
    };
    const mousemoveHandle = (ev) => {
      if (!props.hover)
        return;
      let val = getPosition(ev);
      emits("onMousemove", ev, val);
      state.hoverPosition = val;
      if (props.vertical)
        return;
      let refSliderEl = refSlider.value;
      let refTipsWidth = refTips.value.clientWidth / 2;
      let movePositon = ev.clientX - refSliderEl.getBoundingClientRect().left;
      if (movePositon < refTipsWidth) {
        state.hoverTipsLeft = refTipsWidth - movePositon + "px";
      } else if (refSliderEl.clientWidth - movePositon < refTipsWidth) {
        state.hoverTipsLeft = refSliderEl.clientWidth - movePositon - refTipsWidth + "px";
      } else {
        state.hoverTipsLeft = "50%";
      }
    };
    const setPosition = (ev) => {
      let value = getPosition(ev);
      emits("update:modelValue", value);
      emits("change", ev, value);
    };
    const getPosition = (ev) => {
      let refSliderEl = refSlider.value;
      let value = 0;
      if (props.vertical) {
        let clientHeight = refSliderEl.clientHeight;
        value = (refSliderEl.getBoundingClientRect().bottom - ev.clientY) / clientHeight;
      } else {
        value = (ev.clientX - refSliderEl.getBoundingClientRect().left) / refSliderEl.clientWidth;
      }
      return value < 0 ? 0 : value > 1 ? 1 : value;
    };
    const onDragging = (ev) => {
      setPosition(ev);
    };
    const onDragEnd = (ev) => {
      emits("dragEnd", getPosition(ev));
      if (state.dragging) {
        off(window, "mousemove", onDragging);
        off(window, "touchmove", onDragging);
        off(window, "mouseup", onDragEnd);
        off(window, "touchend", onDragEnd);
        off(window, "contextmenu", onDragEnd);
        setTimeout(() => {
          state.dragging = false;
        }, 0);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "refSlider",
        ref: refSlider,
        class: normalizeClass(["d-slider", { "is-vertical": props.vertical }]),
        onMousedown: withModifiers(mouseDownHandle, ["stop"]),
        onContextmenu: contextmenuHandle
      }, [
        createElementVNode("div", {
          class: "d-slider__runway",
          onMousemove: mousemoveHandle
        }, [
          withDirectives(createElementVNode("div", {
            class: "d-slider__cursor",
            style: normalizeStyle(hoverStyle.value)
          }, [
            withDirectives(createElementVNode("div", {
              class: "d-slider__tips",
              ref_key: "refTips",
              ref: refTips,
              style: normalizeStyle({ left: state.hoverTipsLeft })
            }, toDisplayString(props.hoverText), 5), [
              [vShow, props.hoverText]
            ])
          ], 4), [
            [vShow, props.hover]
          ]),
          createElementVNode("div", {
            class: "d-slider__preload",
            style: normalizeStyle(preloadStyle.value)
          }, null, 4),
          createElementVNode("div", {
            class: "d-slider__bar",
            style: normalizeStyle(sliderBarStyle.value)
          }, null, 4)
        ], 32)
      ], 42, _hoisted_1$2);
    };
  }
});
var DSlider = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9c4d58aa"]]);
const version = "1.3.1-beta.6";
var dContextmenu_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-2d5d90b0"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  key: 0,
  class: "d-player-dialog"
};
const _hoisted_2$1 = { class: "d-player-dialog-body" };
const _hoisted_3$1 = { class: "d-player-dialog-title" };
const _hoisted_4$1 = { class: "d-player-hotkey-panel" };
const _hoisted_5$1 = { class: "d-player-filter-panel" };
const _hoisted_6$1 = { class: "d-player-filter-panel-item" };
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", null, "\u9971\u548C\u5EA6", -1));
const _hoisted_8$1 = { class: "d-player-filter-panel-item" };
const _hoisted_9$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", null, "\u4EAE\u5EA6", -1));
const _hoisted_10$1 = { class: "d-player-filter-panel-item" };
const _hoisted_11$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", null, "\u5BF9\u6BD4\u5EA6", -1));
const _sfc_main$1 = defineComponent({
  __name: "d-contextmenu",
  props: {
    refId: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const state = reactive({
      show: false,
      dialogType: "",
      dialogTitle: "",
      version,
      mouseX: 0,
      mouseY: 0
    });
    const menuList = [
      { label: "\u89C6\u9891\u8272\u5F69\u8C03\u6574", key: "filter" },
      { label: "\u5FEB\u6377\u952E\u8BF4\u660E", key: "hotkey" },
      { label: "\u590D\u5236\u89C6\u9891\u7F51\u5740", key: "copy" }
    ];
    const hotkeyList = [
      { key: "Space", label: "\u64AD\u653E/\u6682\u505C" },
      { key: "\u2192", label: "\u5355\u6B21\u5FEB\u8FDB10s\uFF0C\u957F\u63095\u500D\u901F\u64AD\u653E" },
      { key: "\u2190", label: "\u5FEB\u90005s" },
      { key: "\u2191", label: "\u97F3\u91CF\u589E\u52A010%" },
      { key: "\u2193", label: "\u97F3\u91CF\u589E\u52A0\u964D\u4F4E10%" },
      { key: "Esc", label: "\u9000\u51FA\u5168\u5C4F/\u9000\u51FA\u7F51\u9875\u5168\u5C4F" },
      { key: "F", label: "\u5168\u5C4F/\u9000\u51FA\u5168\u5C4F" }
    ];
    const filter = reactive({
      saturate: 0.392,
      brightness: 0.392,
      contrast: 0.392
    });
    computed(() => ({
      left: state.mouseX + "px",
      top: state.mouseY + "px"
    }));
    watch(filter, (val) => {
      let dPlayerVideoMain = document.querySelector(`#${props.refId || "refPlayerWrap"}`);
      let saturate = (val.saturate * 2.55).toFixed(2);
      let brightness = (val.brightness * 2.55).toFixed(2);
      let contrast = (val.contrast * 2.55).toFixed(2);
      dPlayerVideoMain.style.filter = `saturate(${saturate}) brightness(${brightness}) contrast(${contrast})`;
    });
    const filterReset = () => {
      filter.saturate = 0.392;
      filter.brightness = 0.392;
      filter.contrast = 0.392;
    };
    const keydownHandle = (ev) => {
      if (ev.key == "Escape") {
        contextmenuHide(0);
      }
    };
    const contextmenuShow = (ev) => {
      ev.preventDefault();
      on(window, "keydown", keydownHandle);
      on(window, "click", contextmenuHide);
      let refPlayerWrap = document.querySelector(`#${props.refId || "refPlayerWrap"}`);
      let clientWidth = refPlayerWrap.clientWidth;
      refPlayerWrap.clientHeight;
      state.mouseX = ev.clientX - refPlayerWrap.getBoundingClientRect().left;
      if (clientWidth - state.mouseX < 130) {
        state.mouseX = state.mouseX + (clientWidth - state.mouseX - 130);
      }
      state.mouseY = ev.clientY - refPlayerWrap.getBoundingClientRect().top;
      state.show = true;
    };
    const contextmenuHide = (ev) => {
      let tagName = ev.path[0].tagName == "LI";
      let keycode = ev.path[0].attributes.dplayerKeyCode && ev.path[0].attributes.dplayerKeyCode.value;
      let hotKeyArr = menuList.map((item) => item.key);
      if (tagName && hotKeyArr.includes(keycode)) {
        state.dialogTitle = ev.path[0].innerText;
        state.dialogType = keycode;
        if (keycode == "copy") {
          let copyText = document.querySelector(".d-player-copyText");
          copyText.value = window.location.href;
          copyText.select();
          document.execCommand("copy");
          state.dialogType = "";
        } else if (keycode == "version") {
          state.dialogType = "";
        }
      }
      state.show = false;
      off(window, "keydown", keydownHandle);
      off(window, "click", contextmenuHide);
    };
    onMounted(() => {
      let refPlayerWrap = document.querySelector(`#${props.refId || "refPlayerWrap"}`);
      off(window, "keydown", keydownHandle);
      off(window, "click", contextmenuHide);
      off(refPlayerWrap, "contextmenu", contextmenuShow);
      on(refPlayerWrap, "contextmenu", contextmenuShow);
    });
    onUnmounted(() => {
      let refPlayerWrap = document.querySelector(`#${props.refId || "refPlayerWrap"}`);
      off(window, "keydown", keydownHandle);
      off(window, "click", contextmenuHide);
      off(refPlayerWrap, "contextmenu", contextmenuShow);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Transition, { name: "d-fade-in" }, {
          default: withCtx(() => [
            state.dialogType ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
              createElementVNode("div", _hoisted_2$1, [
                createElementVNode("h5", _hoisted_3$1, [
                  createTextVNode(toDisplayString(state.dialogTitle) + " ", 1),
                  createElementVNode("i", {
                    onClick: _cache[0] || (_cache[0] = ($event) => state.dialogType = false),
                    class: "icon icon-close"
                  }, "X")
                ]),
                withDirectives(createElementVNode("ul", _hoisted_4$1, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(hotkeyList, (item) => {
                    return createElementVNode("li", {
                      class: "d-player-hotkey-panel-item",
                      key: item.key
                    }, [
                      createElementVNode("span", null, toDisplayString(item.key), 1),
                      createElementVNode("span", null, toDisplayString(item.label), 1)
                    ]);
                  }), 64))
                ], 512), [
                  [vShow, state.dialogType == "hotkey"]
                ]),
                withDirectives(createElementVNode("ul", _hoisted_5$1, [
                  createElementVNode("li", _hoisted_6$1, [
                    _hoisted_7$1,
                    createVNode(DSlider, {
                      class: "filter-panel-slider",
                      size: "5px",
                      modelValue: filter.saturate,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filter.saturate = $event)
                    }, null, 8, ["modelValue"]),
                    createElementVNode("span", null, toDisplayString(Math.round(filter.saturate * 255)), 1)
                  ]),
                  createElementVNode("li", _hoisted_8$1, [
                    _hoisted_9$1,
                    createVNode(DSlider, {
                      class: "filter-panel-slider",
                      size: "5px",
                      modelValue: filter.brightness,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filter.brightness = $event)
                    }, null, 8, ["modelValue"]),
                    createElementVNode("span", null, toDisplayString(Math.round(filter.brightness * 255)), 1)
                  ]),
                  createElementVNode("li", _hoisted_10$1, [
                    _hoisted_11$1,
                    createVNode(DSlider, {
                      class: "filter-panel-slider",
                      size: "5px",
                      modelValue: filter.contrast,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filter.contrast = $event)
                    }, null, 8, ["modelValue"]),
                    createElementVNode("span", null, toDisplayString(Math.round(filter.contrast * 255)), 1)
                  ]),
                  createElementVNode("span", {
                    onClick: filterReset,
                    title: "\u91CD\u7F6E",
                    "aria-label": "\u91CD\u7F6E",
                    class: "d-player-filter-reset"
                  }, "\u91CD\u7F6E")
                ], 512), [
                  [vShow, state.dialogType == "filter"]
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var DContextmenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2d5d90b0"]]);
const hexToRgba = (hex) => {
  return `${parseInt("0x" + hex.slice(1, 3))},${parseInt(
    "0x" + hex.slice(3, 5)
  )},${parseInt("0x" + hex.slice(5, 7))}`;
};
const firstUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const timeFormat = (time) => {
  let hh = ~~(time / 3600);
  let mm = ~~(time % 3600 / 60);
  let ss = ~~(time % 60);
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  return `${hh}:${mm}:${ss}`;
};
const isMobile = !!("ontouchstart" in window);
const toggleFullScreen = (el) => {
  let documentEL = document;
  let isFullscreen = documentEL.webkitIsFullScreen || documentEL.fullscreen;
  if (!isFullscreen) {
    const inFun = el.requestFullscreen || el.webkitRequestFullScreen;
    inFun.call(el);
  } else {
    const exitFun = document.exitFullscreen || documentEL.webkitExitFullScreen;
    exitFun.call(documentEL);
  }
  return !isFullscreen;
};
const requestPictureInPicture = (el) => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture().catch((error) => {
      console.log(error, "Video failed to leave Picture-in-Picture mode.");
    });
  } else {
    el.requestPictureInPicture().catch((error) => {
      console.log(error, "Video failed to enter Picture-in-Picture mode.");
    });
  }
};
const videoEmits = [
  "loadstart",
  "play",
  "pause",
  "playing",
  "seeking",
  "seeked",
  "waiting",
  "durationchange",
  "progress",
  "canplay",
  "timeupdate",
  "ended",
  "error",
  "stalled"
];
const defineProps = {
  width: { type: String, default: "800px" },
  height: { type: String, default: "350px" },
  color: { type: String, default: "#409eff" },
  src: { required: true, type: String, default: "" },
  title: { type: String, default: "" },
  type: { type: String, default: "video/mp4" },
  poster: { type: String, default: "" },
  webFullScreen: { type: Boolean, default: false },
  speed: { type: Boolean, default: true },
  canPause: { type: Boolean, default: true },
  currentTime: { type: Number, default: 0 },
  playsinline: { type: Boolean, default: false },
  muted: { type: Boolean, default: false },
  speedRate: {
    type: Array,
    default: () => ["2.0", "1.5", "1.25", "1.0", "0.75"]
  },
  autoPlay: { type: Boolean, default: false },
  loop: { type: Boolean, default: false },
  mirror: { type: Boolean, default: false },
  ligthOff: { type: Boolean, default: false },
  volume: { type: [String, Number], default: 0.3 },
  control: { type: Boolean, default: true },
  controlBtns: {
    type: Array,
    default: [
      "audioTrack",
      "quality",
      "speedRate",
      "volume",
      "setting",
      "pip",
      "pageFullScreen",
      "fullScreen"
    ]
  },
  preload: { type: String, default: "auto" }
};
var main_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-170fd8ba"), n = n(), popScopeId(), n);
const _hoisted_1 = ["id"];
const _hoisted_2 = ["id"];
const _hoisted_3 = ["id", "controls", "webkit-playsinline", "playsinline", "volume", "muted", "loop", "preload", "src", "poster"];
const _hoisted_4 = { class: "d-player-lightoff" };
const _hoisted_5 = {
  key: 1,
  class: "d-player-state"
};
const _hoisted_6 = { class: "d-play-btn" };
const _hoisted_7 = ["onKeydown"];
const _hoisted_8 = { class: "d-control-progress" };
const _hoisted_9 = { class: "d-tool-bar" };
const _hoisted_10 = {
  key: 0,
  class: "d-tool-item d-tool-time audioTrack-btn"
};
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { style: { "margin": "0 3px" } }, "/", -1));
const _hoisted_12 = { class: "total-time" };
const _hoisted_13 = { class: "d-tool-bar py-10" };
const _hoisted_14 = {
  key: 0,
  class: "d-tool-item quality-btn"
};
const _hoisted_15 = { class: "d-tool-item-main" };
const _hoisted_16 = {
  class: "speed-main",
  style: { "text-align": "center" }
};
const _hoisted_17 = ["onClick"];
const _hoisted_18 = {
  key: 1,
  class: "d-tool-item speedRate-btn"
};
const _hoisted_19 = { class: "d-tool-item-main" };
const _hoisted_20 = { class: "speed-main" };
const _hoisted_21 = ["onClick"];
const _hoisted_22 = {
  key: 2,
  class: "d-tool-item volume-btn"
};
const _hoisted_23 = {
  class: "d-tool-item-main volume-box",
  style: { "width": "52px" }
};
const _hoisted_24 = { class: "volume-text-size" };
const _hoisted_25 = {
  key: 3,
  class: "d-tool-item setting-btn"
};
const _hoisted_26 = { class: "d-tool-item-main" };
const _hoisted_27 = { class: "speed-main" };
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "d-tool-item-main" }, "\u753B\u4E2D\u753B", -1));
const _hoisted_29 = { class: "d-tool-item-main" };
const _hoisted_30 = { class: "d-tool-item-main" };
const __default__ = {
  name: "vue3VideoPlay",
  inheritAttrs: false
};
const _sfc_main = defineComponent({
  ...__default__,
  props: defineProps,
  emits: [
    ...videoEmits,
    "mirrorChange",
    "loopChange",
    "lightOffChange",
    "dragEndVal"
  ],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "2eda91de": unref(hexToRgbaColor),
      "787a8e81": _ctx.width,
      "7d0847cc": _ctx.height
    }));
    const Hls = new Hls2({ fragLoadingTimeOut: 2e3 });
    const isFireFox = ref(navigator.userAgent.indexOf("Firefox") >= 0);
    const refPlayerWrap = ref(null);
    const refdVideo = ref(null);
    const refPlayerControl = ref(null);
    const refInput = ref(null);
    const state = reactive({
      dVideo: null,
      ...props,
      muted: props.muted,
      playBtnState: props.autoPlay ? "pause" : "play",
      loadStateType: "loadstart",
      fullScreen: false,
      handleType: "",
      currentTime: "00:00:00",
      preloadBar: 0,
      totalTime: "00:00:00",
      isVideoHovering: true,
      speedActive: "1.0",
      playProgress: 0,
      isMultiplesPlay: false,
      longPressTimeout: null,
      progressCursorTime: "00:00:00",
      qualityLevels: [],
      currentLevel: 0,
      initTimes: 0
    });
    const compose = (...args) => (value) => args.reverse().reduce((acc, fn) => fn(acc), value);
    const videoEvents = videoEmits.reduce((events, emit) => {
      let name = `on${firstUpperCase(emit)}`;
      events[name] = (ev) => {
        state.loadStateType = emit;
        emits(emit, ev);
      };
      return events;
    }, {});
    videoEvents["onCanplay"] = compose(videoEvents["onCanplay"], () => {
      if (state.playBtnState != "play") {
        state.dVideo.play();
      }
      if (state.autoPlay) {
        state.dVideo.play();
        state.playBtnState = "pause";
      }
    });
    videoEvents["onEnded"] = compose(videoEvents["onEnded"], () => {
      state.playBtnState = "replay";
    });
    videoEvents["onDurationchange"] = (ev) => {
      emits("durationchange", ev);
      if (props.currentTime != 0) {
        state.dVideo.currentTime = props.currentTime;
      }
      videoEvents.onTimeupdate(ev);
    };
    videoEvents["onProgress"] = (ev) => {
      emits("progress", ev);
      let duration = ev.target.duration;
      let length = ev.target.buffered;
      let end = ev.target.buffered.length && ev.target.buffered.end(length - 1);
      state.preloadBar = end / duration;
    };
    videoEvents["onTimeupdate"] = (ev) => {
      emits("timeupdate", ev);
      let duration = ev.duration || ev.target.duration || 0;
      let currentTime = ev.currentTime || ev.target.currentTime;
      state.playProgress = currentTime / duration;
      state.currentTime = timeFormat(currentTime);
      state.totalTime = timeFormat(duration);
    };
    videoEvents["onError"] = compose(videoEvents["onError"], () => {
      state.playBtnState = "replay";
    });
    let attrs = useAttrs();
    for (let emit in attrs) {
      videoEvents[emit] = attrs[emit];
    }
    const hexToRgbaColor = hexToRgba(state.color);
    const clearHandleType = debounce(500, () => {
      state.handleType = "";
    });
    const volumeKeydown = (ev) => {
      ev.preventDefault();
      if (ev.code == "ArrowUp") {
        state.volume = state.volume + 0.1 > 1 ? 1 : state.volume + 0.1;
      } else {
        state.volume = state.volume - 0.1 < 0 ? 0 : state.volume - 0.1;
      }
      state.muted = false;
      state.handleType = "volume";
      clearHandleType();
    };
    const keydownLeft = (ev) => {
      if (!props.speed)
        return;
      state.dVideo.currentTime = state.dVideo.currentTime < 10 ? 0.1 : state.dVideo.currentTime - 10;
      videoEvents.onTimeupdate(state.dVideo);
      playHandle();
    };
    const keypress = (ev) => {
      ev.preventDefault();
      let pressType = ev.type;
      if (ev.key == "ArrowRight") {
        playHandle();
        if (pressType == "keyup") {
          clearTimeout(state.longPressTimeout);
          if (!props.speed && !state.longPressTimeout)
            return;
          if (state.isMultiplesPlay) {
            state.dVideo.playbackRate = state.speedActive;
            state.isMultiplesPlay = false;
          } else {
            state.dVideo.currentTime = state.dVideo.currentTime + 10;
            videoEvents.onTimeupdate(state.dVideo);
          }
        } else if (pressType == "keydown") {
          if (!props.speed)
            return;
          if (state.isMultiplesPlay) {
            clearTimeout(state.longPressTimeout);
          }
          state.longPressTimeout = setTimeout(() => {
            state.isMultiplesPlay = true;
            state.dVideo.playbackRate = 5;
            state.handleType = "playbackRate";
            clearHandleType();
          }, 500);
        }
      }
    };
    const inputFocusHandle = () => {
      if (isMobile)
        return;
      refInput.value.focus();
    };
    const playHandle = () => {
      state.loadStateType = "play";
      state.dVideo.play().catch(() => {
        setTimeout(() => {
          state.playBtnState = "replay";
          state.loadStateType = "error";
        }, 500);
      });
      state.playBtnState = state.canPause ? "pause" : "";
    };
    const pauseHandle = () => {
      if (state.canPause) {
        state.dVideo.pause();
        state.playBtnState = "play";
      }
    };
    const togglePlay = (ev) => {
      if (ev)
        ev.preventDefault();
      if (state.playBtnState == "play" || state.playBtnState == "replay") {
        playHandle();
      } else if (state.playBtnState == "pause") {
        pauseHandle();
      }
    };
    const mutedHandler = () => {
      state.muted = !state.muted;
      if (state.volume == 0) {
        state.volume = 0.05;
      }
    };
    const progressBarChange = (ev, val) => {
      let duration = state.dVideo.duration || state.dVideo.target.duration;
      state.dVideo.currentTime = duration * val;
      if (state.playBtnState == "play") {
        state.dVideo.play();
        state.playBtnState = "pause";
      }
    };
    const onProgressMove = (ev, val) => {
      state.progressCursorTime = timeFormat(state.dVideo.duration * val);
    };
    const dragEnd = (val) => {
      emits("dragEndVal", (state.dVideo.duration || state.dVideo.target.duration) * val);
    };
    const hideControl = debounce(2500, () => {
      state.isVideoHovering = false;
    });
    const mouseMovewWarp = (ev) => {
      state.isVideoHovering = true;
      hideControl();
    };
    const qualityLevelsHandle = (row, index) => {
      Hls.currentLevel = index;
      state.currentLevel = index;
    };
    const playbackRate = (row) => {
      state.speedActive = row;
      state.dVideo.playbackRate = row;
    };
    const mirrorChange = (val) => {
      emits("mirrorChange", val, state.dVideo);
    };
    const loopChange = (val) => {
      emits("loopChange", val, state.dVideo);
    };
    const lightOffChange = (val) => {
      emits("lightOffChange", val, state.dVideo);
    };
    const requestPictureInPictureHandle = () => {
      requestPictureInPicture(state.dVideo);
    };
    const toggleFullScreenHandle = () => {
      state.fullScreen = toggleFullScreen(refPlayerWrap.value);
    };
    const upDateTimeNow = (ev = state.dVideo) => {
      let duration = ev.duration || ev.target.duration || 0;
      let currentTime = ev.currentTime || ev.target.currentTime;
      state.playProgress = currentTime / duration;
      state.currentTime = timeFormat(currentTime);
      state.totalTime = timeFormat(duration);
    };
    const init = (type = 0) => {
      if (state.dVideo.canPlayType(props.type) || state.dVideo.canPlayType("application/vnd.apple.mpegurl")) {
        state.muted = false;
        //!props.autoPlay
      } else if (Hls2.isSupported()) {
        Hls.detachMedia();
        Hls.attachMedia(state.dVideo);
        Hls.on(Hls2.Events.MEDIA_ATTACHED, () => {
          Hls.loadSource(props.src);
          Hls.on("hlsManifestParsed", (ev, data) => {
            state.currentLevel = data.level;
            state.qualityLevels = data.levels || [];
          });
          Hls.on("hlsError", (ev, data) => {
            if (state.initTimes < 10) {
              state.initTimes += 1;
              if (data.type === "networkError") {
                init();
              }
            }
          });
        });
        Hls.on("hlsLevelSwitching", (ev, data) => {
        });
        Hls.on("hlsLevelSwitched", (ev, data) => {
          state.currentLevel = data.level;
        });
      }
    };
    watch(() => props.src, () => {
      nextTick(() => {
        init();
      });
    }, { immediate: true });
    onMounted(() => {
      state.dVideo = refdVideo;
      state.dVideo.addEventListener("play", function() {
        state.playBtnState = "pause";
      });
      state.dVideo.addEventListener("pause", function() {
        state.playBtnState = "play";
      });
    });
    __expose({
      state,
      upDateTimeNow,
      progressBarChange,
      play: playHandle,
      pause: pauseHandle,
      togglePlay
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "refPlayerWrap",
        ref: refPlayerWrap,
        class: normalizeClass(["d-player-wrap", {
          "web-full-screen": state.webFullScreen,
          "is-lightoff": state.lightOff,
          "d-player-wrap-hover": state.playBtnState == "play" || state.isVideoHovering
        }]),
        id: props.refId || "refPlayerWrap",
        onMousemove: mouseMovewWarp
      }, [
        createElementVNode("div", {
          class: "d-player-video",
          id: props.refId ? props.refId + "Video" : "dPlayerVideo"
        }, [
          createElementVNode("video", mergeProps({
            ref_key: "refdVideo",
            ref: refdVideo,
            class: ["d-player-video-main", { "video-mirror": state.mirror }],
            id: props.refId ? props.refId + "VideoMain" : "dPlayerVideoMain",
            controls: unref(isMobile) && state.speed ? true : false,
            "webkit-playsinline": props.playsinline,
            playsinline: props.playsinline
          }, unref(videoEvents), {
            volume: state.volume,
            muted: state.muted,
            loop: state.loop,
            preload: _ctx.preload,
            width: "100%",
            height: "100%",
            src: props.src,
            poster: props.poster
          }), " \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301Video\u6807\u7B7E\u3002 ", 16, _hoisted_3)
        ], 8, _hoisted_2),
        createVNode(Transition, { name: "d-fade-in" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", _hoisted_4, null, 512), [
              [vShow, state.lightOff]
            ])
          ]),
          _: 1
        }),
        state.fullScreen ? (openBlock(), createBlock(DPlayerTop, {
          key: 0,
          title: props.title
        }, null, 8, ["title"])) : createCommentVNode("", true),
        !unref(isMobile) ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createVNode(Transition, { name: "d-scale-out" }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", _hoisted_6, [
                createVNode(DIcon, {
                  icon: "icon-play",
                  size: 40
                })
              ], 512), [
                [vShow, state.playBtnState == "play"]
              ])
            ]),
            _: 1
          }),
          createVNode(DStatus, { state }, null, 8, ["state"])
        ])) : createCommentVNode("", true),
        !unref(isMobile) ? (openBlock(), createElementBlock("input", {
          key: 2,
          type: "input",
          readonly: "readonly",
          ref_key: "refInput",
          ref: refInput,
          onKeyup: [
            _cache[0] || (_cache[0] = withKeys(($event) => state.webFullScreen = false, ["esc"])),
            keypress
          ],
          onClick: togglePlay,
          onKeydown: [
            withKeys(togglePlay, ["space"]),
            withKeys(keydownLeft, ["arrow-left"]),
            withKeys(volumeKeydown, ["arrow-up", "arrow-down"]),
            keypress
          ],
          class: "d-player-input",
          maxlength: "0"
        }, null, 40, _hoisted_7)) : createCommentVNode("", true),
        withDirectives(createVNode(DLoading, {
          loadType: state.loadStateType
        }, null, 8, ["loadType"]), [
          [vShow, state.playBtnState != "pause"]
        ]),
        createVNode(DContextmenu, {
          refId: props.refId
        }, null, 8, ["refId"]),
        !unref(isMobile) && state.control ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: "d-player-control",
          ref_key: "refPlayerControl",
          ref: refPlayerControl
        }, [
          createElementVNode("div", _hoisted_8, [
            createVNode(DSlider, {
              class: "d-progress-bar",
              onOnMousemove: onProgressMove,
              onChange: progressBarChange,
              onDragEnd: dragEnd,
              disabled: !state.speed,
              canPause: state.canPause,
              hoverText: state.progressCursorTime,
              modelValue: state.playProgress,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.playProgress = $event),
              preload: state.preloadBar
            }, null, 8, ["disabled", "canPause", "hoverText", "modelValue", "preload"])
          ]),
          createElementVNode("div", {
            class: "d-control-tool",
            onClick: inputFocusHandle
          }, [
            createElementVNode("div", _hoisted_9, [
              createElementVNode("div", {
                class: "d-tool-item",
                onClick: togglePlay
              }, [
                createVNode(DIcon, {
                  size: "24",
                  icon: `icon-${state.playBtnState}`
                }, null, 8, ["icon"])
              ]),
              props.controlBtns.includes("audioTrack") ? (openBlock(), createElementBlock("div", _hoisted_10, [
                createElementVNode("span", null, toDisplayString(state.currentTime), 1),
                _hoisted_11,
                createElementVNode("span", _hoisted_12, toDisplayString(state.totalTime), 1)
              ])) : createCommentVNode("", true)
            ]),
            createElementVNode("div", _hoisted_13, [
              state.qualityLevels.length && props.controlBtns.includes("quality") ? (openBlock(), createElementBlock("div", _hoisted_14, [
                createTextVNode(toDisplayString(state.qualityLevels.length && (state.qualityLevels[state.currentLevel] || {}).name) + " ", 1),
                createElementVNode("div", _hoisted_15, [
                  createElementVNode("ul", _hoisted_16, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(state.qualityLevels, (row, index) => {
                      return openBlock(), createElementBlock("li", {
                        class: normalizeClass({ "speed-active": state.currentLevel == index }),
                        onClick: ($event) => qualityLevelsHandle(row, index),
                        key: row
                      }, toDisplayString(row.name), 11, _hoisted_17);
                    }), 128))
                  ])
                ])
              ])) : createCommentVNode("", true),
              props.controlBtns.includes("speedRate") ? (openBlock(), createElementBlock("div", _hoisted_18, [
                createTextVNode(toDisplayString(state.speedActive == "1.0" ? "\u500D\u901F" : state.speedActive + "x") + " ", 1),
                createElementVNode("div", _hoisted_19, [
                  createElementVNode("ul", _hoisted_20, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(state.speedRate, (row) => {
                      return openBlock(), createElementBlock("li", {
                        class: normalizeClass({ "speed-active": state.speedActive == row }),
                        onClick: ($event) => playbackRate(row),
                        key: row
                      }, toDisplayString(row) + "x", 11, _hoisted_21);
                    }), 128))
                  ])
                ])
              ])) : createCommentVNode("", true),
              props.controlBtns.includes("volume") ? (openBlock(), createElementBlock("div", _hoisted_22, [
                createElementVNode("div", _hoisted_23, [
                  createElementVNode("div", {
                    class: normalizeClass(["volume-main", { "is-muted": state.muted }])
                  }, [
                    createElementVNode("span", _hoisted_24, toDisplayString(state.muted ? 0 : ~~(state.volume * 100)) + "%", 1),
                    createVNode(DSlider, {
                      onChange: _cache[2] || (_cache[2] = ($event) => state.muted = false),
                      hover: false,
                      size: "5px",
                      vertical: true,
                      modelValue: state.volume,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.volume = $event)
                    }, null, 8, ["modelValue"])
                  ], 2)
                ]),
                createElementVNode("span", {
                  onClick: mutedHandler,
                  style: { "display": "flex" }
                }, [
                  createVNode(DIcon, {
                    size: "20",
                    icon: `icon-volume-${state.volume == 0 || state.muted ? "mute" : state.volume > 0.5 ? "up" : "down"}`
                  }, null, 8, ["icon"])
                ])
              ])) : createCommentVNode("", true),
              props.controlBtns.includes("setting") ? (openBlock(), createElementBlock("div", _hoisted_25, [
                createVNode(DIcon, {
                  size: "20",
                  class: "rotateHover",
                  icon: "icon-settings"
                }),
                createElementVNode("div", _hoisted_26, [
                  createElementVNode("ul", _hoisted_27, [
                    createElementVNode("li", null, [
                      createTextVNode(" \u955C\u50CF\u753B\u9762 "),
                      createVNode(DSwitch, {
                        onChange: mirrorChange,
                        modelValue: state.mirror,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.mirror = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    createElementVNode("li", null, [
                      createTextVNode(" \u5FAA\u73AF\u64AD\u653E "),
                      createVNode(DSwitch, {
                        onChange: loopChange,
                        modelValue: state.loop,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => state.loop = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    createElementVNode("li", null, [
                      createTextVNode(" \u5173\u706F\u6A21\u5F0F "),
                      createVNode(DSwitch, {
                        onChange: lightOffChange,
                        modelValue: state.lightOff,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => state.lightOff = $event)
                      }, null, 8, ["modelValue"])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true),
              props.controlBtns.includes("pip") && !isFireFox.value ? (openBlock(), createElementBlock("div", {
                key: 4,
                class: "d-tool-item pip-btn",
                onClick: requestPictureInPictureHandle
              }, [
                createVNode(DIcon, {
                  size: "20",
                  icon: "icon-pip"
                }),
                _hoisted_28
              ])) : createCommentVNode("", true),
              props.controlBtns.includes("pageFullScreen") ? (openBlock(), createElementBlock("div", {
                key: 5,
                class: "d-tool-item pip-btn",
                onClick: _cache[7] || (_cache[7] = ($event) => state.webFullScreen = !state.webFullScreen)
              }, [
                !state.webFullScreen ? (openBlock(), createBlock(DIcon, {
                  key: 0,
                  size: "20",
                  icon: "icon-fullscreen-fill"
                })) : (openBlock(), createBlock(DIcon, {
                  key: 1,
                  size: "20",
                  icon: "icon-fullscreen-exit-fill"
                })),
                createElementVNode("div", _hoisted_29, toDisplayString(state.webFullScreen ? "\u9000\u51FA\u5168\u5C4F" : "\u7F51\u9875\u5168\u5C4F"), 1)
              ])) : createCommentVNode("", true),
              props.controlBtns.includes("fullScreen") ? (openBlock(), createElementBlock("div", {
                key: 6,
                class: "d-tool-item fullScreen-btn",
                onClick: toggleFullScreenHandle
              }, [
                createElementVNode("div", _hoisted_30, toDisplayString(state.fullScreen ? "\u9000\u51FA\u5168\u5C4F" : "\u5168\u5C4F"), 1),
                !state.fullScreen ? (openBlock(), createBlock(DIcon, {
                  key: 0,
                  size: "20",
                  icon: "icon-fullscreen"
                })) : (openBlock(), createBlock(DIcon, {
                  key: 1,
                  size: "20",
                  icon: "icon-FullscreenExit"
                }))
              ])) : createCommentVNode("", true)
            ])
          ])
        ], 512)) : createCommentVNode("", true)
      ], 42, _hoisted_1);
    };
  }
});
var videoPlay = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-170fd8ba"]]);
function install(app) {
  app.component(videoPlay.name, videoPlay);
}
videoPlay.install = install;
export { videoPlay as default, install, videoPlay };
