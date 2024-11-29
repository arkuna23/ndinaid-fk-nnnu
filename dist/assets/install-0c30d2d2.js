import {
    eW as D,
    cr as b,
    K as M,
    dL as G,
    aw as S,
    bD as k,
    k as x,
    cd as w,
    f1 as E,
    as as m,
    f2 as z,
    f3 as B,
    f4 as W,
    aq as H,
    dh as q,
    di as K,
    f5 as I,
    f6 as j,
    f7 as F,
    bP as J,
    a6 as C,
    at as A,
    ac as P,
    f8 as N,
    c9 as V,
    f9 as Q,
    fa as R,
    fb as Z,
    aC as $,
    aD as tt
} from "./install-67fb146c.js";

function et(o) {
    if (o) {
        for (var t = [], a = 0; a < o.length; a++) t.push(o[a].slice());
        return t;
    }
}

function at(o, t) {
    var a = o.label, e = t && t.getTextGuideLine();
    return {
        dataIndex: o.dataIndex,
        dataType: o.dataType,
        seriesIndex: o.seriesModel.seriesIndex,
        text: o.label.style.text,
        rect: o.hostRect,
        labelRect: o.rect,
        align: a.style.align,
        verticalAlign: a.style.verticalAlign,
        labelLinePoints: et(e && e.shape.points)
    };
}

var X = [ "align", "verticalAlign", "width", "height", "fontSize" ], p = new D(), _ = b(), it = b();

function L(o, t, a) {
    for (var e = 0; e < a.length; e++) {
        var i = a[e];
        t[i] != null && (o[i] = t[i]);
    }
}

var v = [ "x", "y", "rotation" ];

const ot = function() {
    function o() {
        this._labelList = [], this._chartViewList = [];
    }
    return o.prototype.clearLabels = function() {
        this._labelList = [], this._chartViewList = [];
    }, o.prototype._addLabel = function(t, a, e, i, u) {
        var n = i.style, r = i.__hostTarget.textConfig || {}, l = i.getComputedTransform(), c = i.getBoundingRect().plain();
        M.applyTransform(c, c, l), l ? p.setLocalTransform(l) : (p.x = p.y = p.rotation = p.originX = p.originY = 0, 
        p.scaleX = p.scaleY = 1), p.rotation = G(p.rotation);
        var s, y = i.__hostTarget;
        if (y) {
            s = y.getBoundingRect().plain();
            var f = y.getComputedTransform();
            M.applyTransform(s, s, f);
        }
        var g = s && y.getTextGuideLine();
        this._labelList.push({
            label: i,
            labelLine: g,
            seriesModel: e,
            dataIndex: t,
            dataType: a,
            layoutOption: u,
            computedLayoutOption: null,
            rect: c,
            hostRect: s,
            priority: s ? s.width * s.height : 0,
            defaultAttr: {
                ignore: i.ignore,
                labelGuideIgnore: g && g.ignore,
                x: p.x,
                y: p.y,
                scaleX: p.scaleX,
                scaleY: p.scaleY,
                rotation: p.rotation,
                style: {
                    x: n.x,
                    y: n.y,
                    align: n.align,
                    verticalAlign: n.verticalAlign,
                    width: n.width,
                    height: n.height,
                    fontSize: n.fontSize
                },
                cursor: i.cursor,
                attachedPos: r.position,
                attachedRot: r.rotation
            }
        });
    }, o.prototype.addLabelsOfSeries = function(t) {
        var a = this;
        this._chartViewList.push(t);
        var e = t.__model, i = e.get("labelLayout");
        (S(i) || k(i).length) && t.group.traverse(function(u) {
            if (u.ignore) return !0;
            var n = u.getTextContent(), r = x(u);
            n && !n.disableLabelLayout && a._addLabel(r.dataIndex, r.dataType, e, n, i);
        });
    }, o.prototype.updateLayoutConfig = function(t) {
        var a = t.getWidth(), e = t.getHeight();
        function i(Y, U) {
            return function() {
                I(Y, U);
            };
        }
        for (var u = 0; u < this._labelList.length; u++) {
            var n = this._labelList[u], r = n.label, l = r.__hostTarget, c = n.defaultAttr, s = void 0;
            s = (s = S(n.layoutOption) ? n.layoutOption(at(n, l)) : n.layoutOption) || {}, 
            n.computedLayoutOption = s;
            var y = Math.PI / 180;
            l && l.setTextConfig({
                local: !1,
                position: s.x != null || s.y != null ? null : c.attachedPos,
                rotation: s.rotate != null ? s.rotate * y : c.attachedRot,
                offset: [ s.dx || 0, s.dy || 0 ]
            });
            var f = !1;
            if (s.x != null ? (r.x = w(s.x, a), r.setStyle("x", 0), f = !0) : (r.x = c.x, 
            r.setStyle("x", c.style.x)), s.y != null ? (r.y = w(s.y, e), r.setStyle("y", 0), 
            f = !0) : (r.y = c.y, r.setStyle("y", c.style.y)), s.labelLinePoints) {
                var g = l.getTextGuideLine();
                g && (g.setShape({
                    points: s.labelLinePoints
                }), f = !1);
            }
            _(r).needsUpdateLabelLine = f, r.rotation = s.rotate != null ? s.rotate * y : c.rotation, 
            r.scaleX = c.scaleX, r.scaleY = c.scaleY;
            for (var d = 0; d < X.length; d++) {
                var h = X[d];
                r.setStyle(h, s[h] != null ? s[h] : c.style[h]);
            }
            if (s.draggable) {
                if (r.draggable = !0, r.cursor = "move", l) {
                    var O = n.seriesModel;
                    n.dataIndex != null && (O = n.seriesModel.getData(n.dataType).getItemModel(n.dataIndex)), 
                    r.on("drag", i(l, O.getModel("labelLine")));
                }
            } else r.off("drag"), r.cursor = c.cursor;
        }
    }, o.prototype.layout = function(t) {
        var a = t.getWidth(), e = t.getHeight(), i = E(this._labelList), u = m(i, function(l) {
            return l.layoutOption.moveOverlap === "shiftX";
        }), n = m(i, function(l) {
            return l.layoutOption.moveOverlap === "shiftY";
        });
        z(u, 0, a), B(n, 0, e);
        var r = m(i, function(l) {
            return l.layoutOption.hideOverlap;
        });
        W(r);
    }, o.prototype.processLabelsOverall = function() {
        var t = this;
        H(this._chartViewList, function(a) {
            var e = a.__model, i = a.ignoreLabelLineUpdate, u = e.isAnimationEnabled();
            a.group.traverse(function(n) {
                if (n.ignore && !n.forceLabelAnimation) return !0;
                var r = !i, l = n.getTextContent();
                !r && l && (r = _(l).needsUpdateLabelLine), r && t._updateLabelLine(n, e), 
                u && t._animateLabels(n, e);
            });
        });
    }, o.prototype._updateLabelLine = function(t, a) {
        var e = t.getTextContent(), i = x(t), u = i.dataIndex;
        if (e && u != null) {
            var n = a.getData(i.dataType), r = n.getItemModel(u), l = {}, c = n.getItemVisual(u, "style");
            if (c) {
                var s = n.getVisual("drawType");
                l.stroke = c[s];
            }
            var y = r.getModel("labelLine");
            q(t, K(r), l), I(t, y);
        }
    }, o.prototype._animateLabels = function(t, a) {
        var e = t.getTextContent(), i = t.getTextGuideLine();
        if (e && (t.forceLabelAnimation || !e.ignore && !e.invisible && !t.disableLabelAnimation && !j(t))) {
            var u = (d = _(e)).oldLayout, n = x(t), r = n.dataIndex, l = {
                x: e.x,
                y: e.y,
                rotation: e.rotation
            }, c = a.getData(n.dataType);
            if (u) {
                e.attr(u);
                var s = t.prevStates;
                s && (A(s, "select") >= 0 && e.attr(d.oldLayoutSelect), A(s, "emphasis") >= 0 && e.attr(d.oldLayoutEmphasis)), 
                P(e, l, a, r);
            } else if (e.attr(l), !F(e).valueAnimation) {
                var y = J(e.style.opacity, 1);
                e.style.opacity = 0, C(e, {
                    style: {
                        opacity: y
                    }
                }, a, r);
            }
            if (d.oldLayout = l, e.states.select) {
                var f = d.oldLayoutSelect = {};
                L(f, l, v), L(f, e.states.select, v);
            }
            if (e.states.emphasis) {
                var g = d.oldLayoutEmphasis = {};
                L(g, l, v), L(g, e.states.emphasis, v);
            }
            N(e, r, c, a, a);
        }
        if (i && !i.ignore && !i.invisible) {
            u = (d = it(i)).oldLayout;
            var d, h = {
                points: i.shape.points
            };
            u ? (i.attr({
                shape: u
            }), P(i, {
                shape: h
            }, a)) : (i.setShape(h), i.style.strokePercent = 0, C(i, {
                style: {
                    strokePercent: 1
                }
            }, a)), d.oldLayout = h;
        }
    }, o;
}();

var T = b();

function nt(o) {
    o.registerUpdateLifecycle("series:beforeupdate", function(t, a, e) {
        var i = T(a).labelManager;
        i || (i = T(a).labelManager = new ot()), i.clearLabels();
    }), o.registerUpdateLifecycle("series:layoutlabels", function(t, a, e) {
        var i = T(a).labelManager;
        e.updatedSeries.forEach(function(u) {
            i.addLabelsOfSeries(a.getViewOfSeriesModel(u));
        }), i.updateLayoutConfig(a), i.layout(a), i.processLabelsOverall();
    });
}

var rt = function(o) {
    function t() {
        var a = o !== null && o.apply(this, arguments) || this;
        return a.type = "dataset", a;
    }
    return V(t, o), t.prototype.init = function(a, e, i) {
        o.prototype.init.call(this, a, e, i), this._sourceManager = new Q(this), 
        R(this);
    }, t.prototype.mergeOption = function(a, e) {
        o.prototype.mergeOption.call(this, a, e), R(this);
    }, t.prototype.optionUpdated = function() {
        this._sourceManager.dirty();
    }, t.prototype.getSourceManager = function() {
        return this._sourceManager;
    }, t.type = "dataset", t.defaultOption = {
        seriesLayoutBy: Z
    }, t;
}($), st = function(o) {
    function t() {
        var a = o !== null && o.apply(this, arguments) || this;
        return a.type = "dataset", a;
    }
    return V(t, o), t.type = "dataset", t;
}(tt);

function lt(o) {
    o.registerComponentModel(rt), o.registerComponentView(st);
}

export {
    nt as a,
    lt as i
};