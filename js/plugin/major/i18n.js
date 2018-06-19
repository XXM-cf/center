!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length, n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (Z.isFunction(t))
            return Z.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return Z.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (se.test(t))
                return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return V.call(t, e) >= 0 !== n
        })
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function i(e) {
        var t = he[e] = {};
        return Z.each(e.match(de) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function a() {
        Y.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
    }
    function s() {
        Object.defineProperty(this.cache = {}, 0, {get: function() {
                return {}
            }}), this.expando = Z.expando + s.uid++
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n
                } catch (o) {
                }
                ye.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function l() {
        return !0
    }
    function c() {
        return !1
    }
    function f() {
        try {
            return Y.activeElement
        } catch (e) {
        }
    }
    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function h(e) {
        var t = He.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
            ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }
    function m(e, t) {
        var n, r, o, i, a, s, u, l;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (i = ve.access(e), a = ve.set(t, i), l = i.events)) {
                delete a.handle, a.events = {};
                for (o in l)
                    for (n = 0, r = l[o].length; r > n; n++)
                        Z.event.add(t, o, l[o][n])
            }
            ye.hasData(e) && (s = ye.access(e), u = Z.extend({}, s), ye.set(t, u))
        }
    }
    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Te.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function x(t, n) {
        var r, o = Z(n.createElement(t)).appendTo(n.body), i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : Z.css(o[0], "display");
        return o.detach(), i
    }
    function b(e) {
        var t = Y, n = $e[e];
        return n || (n = x(e, t), "none" !== n && n || (qe = (qe || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = qe[0].contentDocument, t.write(), t.close(), n = x(e, t), qe.detach()), $e[e] = n), n
    }
    function w(e, t, n) {
        var r, o, i, a, s = e.style;
        return n = n || We(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Be.test(a) && Ie.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
    }
    function k(e, t) {
        return {get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }}
    }
    function C(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, o = Je.length; o--; )
            if (t = Je[o] + n, t in e)
                return t;
        return r
    }
    function T(e, t, n) {
        var r = Xe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function S(e, t, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2)
            "margin" === n && (a += Z.css(e, n + ke[i], !0, o)), r ? ("content" === n && (a -= Z.css(e, "padding" + ke[i], !0, o)), "margin" !== n && (a -= Z.css(e, "border" + ke[i] + "Width", !0, o))) : (a += Z.css(e, "padding" + ke[i], !0, o), "padding" !== n && (a += Z.css(e, "border" + ke[i] + "Width", !0, o)));
        return a
    }
    function N(e, t, n) {
        var r = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, i = We(e), a = "border-box" === Z.css(e, "boxSizing", !1, i);
        if (0 >= o || null == o) {
            if (o = w(e, t, i), (0 > o || null == o) && (o = e.style[t]), Be.test(o))
                return o;
            r = a && (G.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + S(e, t, n || (a ? "border" : "content"), r, i) + "px"
    }
    function E(e, t) {
        for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++)
            r = e[a], r.style && (i[a] = ve.get(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (i[a] = ve.access(r, "olddisplay", b(r.nodeName)))) : (o = Ce(r), "none" === n && o || ve.set(r, "olddisplay", o ? n : Z.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
        return e
    }
    function L(e, t, n, r, o) {
        return new L.prototype.init(e, t, n, r, o)
    }
    function j() {
        return setTimeout(function() {
            Ge = void 0
        }), Ge = Z.now()
    }
    function A(e, t) {
        var n, r = 0, o = {height: e};
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = ke[r], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }
    function O(e, t, n) {
        for (var r, o = (nt[t] || []).concat(nt["*"]), i = 0, a = o.length; a > i; i++)
            if (r = o[i].call(n, t, e))
                return r
    }
    function D(e, t, n) {
        var r, o, i, a, s, u, l, c, f = this, p = {}, d = e.style, h = e.nodeType && Ce(e), g = ve.get(e, "fxshow");
        n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], Qe.exec(o)) {
                if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[r])
                        continue;
                    h = !0
                }
                p[r] = g && g[r] || Z.style(e, r)
            } else
                l = void 0;
        if (Z.isEmptyObject(p))
            "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), i && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }), f.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in p)
                    Z.style(e, t, p[t])
            });
            for (r in p)
                a = O(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function P(e, t) {
        var n, r, o, i, a;
        for (n in e)
            if (r = Z.camelCase(n), o = t[r], i = e[n], Z.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = Z.cssHooks[r], a && "expand" in a) {
                i = a.expand(i), delete e[r];
                for (n in i)
                    n in e || (e[n] = i[n], t[n] = o)
            } else
                t[r] = o
    }
    function F(e, t, n) {
        var r, o, i = 0, a = tt.length, s = Z.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (o)
                return !1;
            for (var t = Ge || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, a = 0, u = l.tweens.length; u > a; a++)
                l.tweens[a].run(i);
            return s.notifyWith(e, [l, i, n]), 1 > i && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({elem: e,props: Z.extend({}, t),opts: Z.extend(!0, {specialEasing: {}}, n),originalProperties: t,originalOptions: n,startTime: Ge || j(),duration: n.duration,tweens: [],createTween: function(t, n) {
                var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; r > n; n++)
                    l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
            }}), c = l.props;
        for (P(c, l.opts.specialEasing); a > i; i++)
            if (r = tt[i].call(l, e, c, l.opts))
                return r;
        return Z.map(c, O, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {elem: e,anim: l,queue: l.opts.queue})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function _(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0, i = t.toLowerCase().match(de) || [];
            if (Z.isFunction(n))
                for (; r = i[o++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function H(e, t, n, r) {
        function o(s) {
            var u;
            return i[s] = !0, Z.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || i[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
            }), u
        }
        var i = {}, a = e === xt;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }
    function M(e, t) {
        var n, r, o = Z.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }
    function R(e, t, n) {
        for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (o in s)
                if (s[o] && s[o].test(r)) {
                    u.unshift(o);
                    break
                }
        if (u[0] in n)
            i = u[0];
        else {
            for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    i = o;
                    break
                }
                a || (a = o)
            }
            i = i || a
        }
        return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0
    }
    function q(e, t, n, r) {
        var o, i, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (i = c.shift(); i; )
            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                if ("*" === i)
                    i = u;
                else if ("*" !== u && u !== i) {
                    if (a = l[u + " " + i] || l["* " + i], !a)
                        for (o in l)
                            if (s = o.split(" "), s[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[o] : l[o] !== !0 && (i = s[0], c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (f) {
                                return {state: "parsererror",error: a ? f : "No conversion from " + u + " to " + i}
                            }
                }
        return {state: "success",data: t}
    }
    function $(e, t, n, r) {
        var o;
        if (Z.isArray(t))
            Z.each(t, function(t, o) {
                n || Tt.test(e) ? r(e, o) : $(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
            });
        else if (n || "object" !== Z.type(t))
            r(e, t);
        else
            for (o in t)
                $(e + "[" + o + "]", t[o], n, r)
    }
    function I(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var B = [], W = B.slice, z = B.concat, X = B.push, V = B.indexOf, U = {}, K = U.toString, J = U.hasOwnProperty, G = {}, Y = e.document, Q = "2.1.3", Z = function(e, t) {
        return new Z.fn.init(e, t)
    }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, re = function(e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {jquery: Q,constructor: Z,selector: "",length: 0,toArray: function() {
            return W.call(this)
        },get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : W.call(this)
        },pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },each: function(e, t) {
            return Z.each(this, e, t)
        },map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },slice: function() {
            return this.pushStack(W.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: X,sort: B.sort,splice: B.splice}, Z.extend = Z.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t], r = e[t], a !== r && (l && r && (Z.isPlainObject(r) || (o = Z.isArray(r))) ? (o ? (o = !1, i = n && Z.isArray(n) ? n : []) : i = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }, Z.extend({expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),isReady: !0,error: function(e) {
            throw new Error(e)
        },noop: function() {
        },isFunction: function(e) {
            return "function" === Z.type(e)
        },isArray: Array.isArray,isWindow: function(e) {
            return null != e && e === e.window
        },isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },isPlainObject: function(e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !J.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[K.call(e)] || "object" : typeof e
        },globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = Y.createElement("script"), t.text = e, Y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },each: function(e, t, r) {
            var o, i = 0, a = e.length, s = n(e);
            if (r) {
                if (s)
                    for (; a > i && (o = t.apply(e[i], r), o !== !1); i++)
                        ;
                else
                    for (i in e)
                        if (o = t.apply(e[i], r), o === !1)
                            break
            } else if (s)
                for (; a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++)
                    ;
            else
                for (i in e)
                    if (o = t.call(e[i], i, e[i]), o === !1)
                        break;
            return e
        },trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
        },inArray: function(e, t, n) {
            return null == t ? -1 : V.call(t, e, n)
        },merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; n > r; r++)
                e[o++] = t[r];
            return e.length = o, e
        },grep: function(e, t, n) {
            for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++)
                r = !t(e[i], i), r !== s && o.push(e[i]);
            return o
        },map: function(e, t, r) {
            var o, i = 0, a = e.length, s = n(e), u = [];
            if (s)
                for (; a > i; i++)
                    o = t(e[i], i, r), null != o && u.push(o);
            else
                for (i in e)
                    o = t(e[i], i, r), null != o && u.push(o);
            return z.apply([], u)
        },guid: 1,proxy: function(e, t) {
            var n, r, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = W.call(arguments, 2), o = function() {
                return e.apply(t || this, r.concat(W.call(arguments)))
            }, o.guid = e.guid = e.guid || Z.guid++, o) : void 0
        },now: Date.now,support: G}), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        U["[object " + t + "]"] = t.toLowerCase()
    });
    var oe = function(e) {
        function t(e, t, n, r) {
            var o, i, a, s, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t : $) !== D && O(t), t = t || D, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)
                return n;
            if (!r && F) {
                if (11 !== s && (o = ye.exec(e)))
                    if (a = o[1]) {
                        if (9 === s) {
                            if (i = t.getElementById(a), !i || !i.parentNode)
                                return n;
                            if (i.id === a)
                                return n.push(i), n
                        } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && R(t, i) && i.id === a)
                            return n.push(i), n
                    } else {
                        if (o[2])
                            return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = o[3]) && w.getElementsByClassName)
                            return Q.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!_ || !_.test(e))) {
                    if (d = f = q, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = S(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--; )
                            l[u] = d + p(l[u]);
                        h = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g)
                        try {
                            return Q.apply(n, h.querySelectorAll(g)), n
                        } catch (m) {
                        }finally {
                            f || t.removeAttribute("id")
                        }
                }
            }
            return E(e.replace(ue, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[q] = !0, e
        }
        function o(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            }finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function i(e, t) {
            for (var n = e.split("|"), r = e.length; r--; )
                k.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                        n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function f() {
        }
        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, i = B++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || o)
                        return e(t, n, i)
            } : function(t, n, a) {
                var s, u, l = [I, i];
                if (a) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || o) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || o) {
                            if (u = t[q] || (t[q] = {}), (s = u[r]) && s[0] === I && s[1] === i)
                                return l[2] = s[2];
                            if (u[r] = l, l[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, r))
                        return !1;
                return !0
            } : e[0]
        }
        function g(e, n, r) {
            for (var o = 0, i = n.length; i > o; o++)
                t(e, n[o], r);
            return r
        }
        function m(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; u > s; s++)
                (i = e[s]) && (!n || n(i, r, o)) && (a.push(i), l && t.push(s));
            return a
        }
        function v(e, t, n, o, i, a) {
            return o && !o[q] && (o = v(o)), i && !i[q] && (i = v(i, a)), r(function(r, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, v = r || g(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : m(v, p, e, s, u), x = n ? i || (r ? e : h || o) ? [] : a : y;
                if (n && n(y, x, s, u), o)
                    for (l = m(x, d), o(l, [], s, u), c = l.length; c--; )
                        (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = x.length; c--; )
                                (f = x[c]) && l.push(y[c] = f);
                            i(null, x = [], l, u)
                        }
                        for (c = x.length; c--; )
                            (f = x[c]) && (l = i ? ee(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else
                    x = m(x === a ? x.splice(h, x.length) : x), i ? i(null, a, x, u) : Q.apply(a, x)
            })
        }
        function y(e) {
            for (var t, n, r, o = e.length, i = k.relative[e[0].type], a = i || k.relative[" "], s = i ? 1 : 0, u = d(function(e) {
                return e === t
            }, a, !0), l = d(function(e) {
                return ee(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                    var o = !i && (r || n !== L) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, o
                }]; o > s; s++)
                if (n = k.relative[e[s].type])
                    c = [d(h(c), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches), n[q]) {
                        for (r = ++s; o > r && !k.relative[e[r].type]; r++)
                            ;
                        return v(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function x(e, n) {
            var o = n.length > 0, i = e.length > 0, a = function(r, a, s, u, l) {
                var c, f, p, d = 0, h = "0", g = r && [], v = [], y = L, x = r || i && k.find.TAG("*", l), b = I += null == y ? 1 : Math.random() || .1, w = x.length;
                for (l && (L = a !== D && a); h !== w && null != (c = x[h]); h++) {
                    if (i && c) {
                        for (f = 0; p = e[f++]; )
                            if (p(c, a, s)) {
                                u.push(c);
                                break
                            }
                        l && (I = b)
                    }
                    o && ((c = !p && c) && d--, r && g.push(c))
                }
                if (d += h, o && h !== d) {
                    for (f = 0; p = n[f++]; )
                        p(g, v, a, s);
                    if (r) {
                        if (d > 0)
                            for (; h--; )
                                g[h] || v[h] || (v[h] = G.call(u));
                        v = m(v)
                    }
                    Q.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (I = b, L = y), g
            };
            return o ? r(a) : a
        }
        var b, w, k, C, T, S, N, E, L, j, A, O, D, P, F, _, H, M, R, q = "sizzle" + 1 * new Date, $ = e.document, I = 0, B = 0, W = n(), z = n(), X = n(), V = function(e, t) {
            return e === t && (A = !0), 0
        }, U = 1 << 31, K = {}.hasOwnProperty, J = [], G = J.pop, Y = J.push, Q = J.push, Z = J.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = re.replace("w", "w#"), ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(ae), de = new RegExp("^" + oe + "$"), he = {ID: new RegExp("^#(" + re + ")"),CLASS: new RegExp("^\\.(" + re + ")"),TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),ATTR: new RegExp("^" + ie),PSEUDO: new RegExp("^" + ae),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),bool: new RegExp("^(?:" + te + ")$", "i"),needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")}, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), ke = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Ce = function() {
            O()
        };
        try {
            Q.apply(J = Z.call($.childNodes), $.childNodes), J[$.childNodes.length].nodeType
        } catch (Te) {
            Q = {apply: J.length ? function(e, t) {
                    Y.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }}
        }
        w = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, O = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, P = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), F = !T(r), w.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = o(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = o(function(e) {
                return P.appendChild(e).id = q, !r.getElementsByName || !r.getElementsByName(q).length
            }), w.getById ? (k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && F) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function(e) {
                var t = e.replace(we, ke);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function(e) {
                var t = e.replace(we, ke);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, k.find.CLASS = w.getElementsByClassName && function(e, t) {
                return F ? t.getElementsByClassName(e) : void 0
            }, H = [], _ = [], (w.qsa = ve.test(r.querySelectorAll)) && (o(function(e) {
                P.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || _.push("~="), e.querySelectorAll(":checked").length || _.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || _.push(".#.+[+~]")
            }), o(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:")
            })), (w.matchesSelector = ve.test(M = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(e) {
                w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), H.push("!=", ae)
            }), _ = _.length && new RegExp(_.join("|")), H = H.length && new RegExp(H.join("|")), t = ve.test(P.compareDocumentPosition), R = t || ve.test(P.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t)
                    return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && R($, e) ? -1 : t === r || t.ownerDocument === $ && R($, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t)
                    return A = !0, 0;
                var n, o = 0, i = e.parentNode, s = t.parentNode, u = [e], l = [t];
                if (!i || !s)
                    return e === r ? -1 : t === r ? 1 : i ? -1 : s ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (i === s)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    u.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; u[o] === l[o]; )
                    o++;
                return o ? a(u[o], l[o]) : u[o] === $ ? -1 : l[o] === $ ? 1 : 0
            }, r) : D
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && O(e), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !F || H && H.test(n) || _ && _.test(n)))
                try {
                    var r = M.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (o) {
                }
            return t(n, D, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && O(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && O(e);
            var n = k.attrHandle[t.toLowerCase()], r = n && K.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
            return void 0 !== r ? r : w.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [], r = 0, o = 0;
            if (A = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(V), A) {
                for (; t = e[o++]; )
                    t === e[o] && (r = n.push(o));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return j = null, e
        }, C = t.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += C(t);
            return n
        }, k = t.selectors = {cacheLength: 50,createPseudo: r,match: he,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(e) {
                    return e[1] = e[1].replace(we, ke), e[3] = (e[3] || e[4] || e[5] || "").replace(we, ke), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }},filter: {TAG: function(e) {
                    var t = e.replace(we, ke).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = i !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s;
                        if (m) {
                            if (i) {
                                for (; g; ) {
                                    for (f = t; f = f[g]; )
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (c = m[q] || (m[q] = {}), l = c[e] || [], d = l[0] === I && l[1], p = l[0] === I && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [I, d, p];
                                        break
                                    }
                            } else if (y && (l = (t[q] || (t[q] = {}))[e]) && l[0] === I)
                                p = l[1];
                            else
                                for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[q] || (f[q] = {}))[e] = [I, p]), f !== t)); )
                                    ;
                            return p -= o, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },PSEUDO: function(e, n) {
                    var o, i = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[q] ? i(n) : i.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), a = o.length; a--; )
                            r = ee(e, o[a]), e[r] = !(t[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, o)
                    }) : i
                }},pseudos: {not: r(function(e) {
                    var t = [], n = [], o = N(e.replace(ue, "$1"));
                    return o[q] ? r(function(e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--; )
                            (i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, r, i) {
                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                    }
                }),has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),contains: r(function(e) {
                    return e = e.replace(we, ke), function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, ke).toLowerCase(), function(t) {
                        var n;
                        do
                            if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },root: function(e) {
                    return e === P
                },focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },enabled: function(e) {
                    return e.disabled === !1
                },disabled: function(e) {
                    return e.disabled === !0
                },checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },parent: function(e) {
                    return !k.pseudos.empty(e)
                },header: function(e) {
                    return me.test(e.nodeName)
                },input: function(e) {
                    return ge.test(e.nodeName)
                },button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },first: l(function() {
                    return [0]
                }),last: l(function(e, t) {
                    return [t - 1]
                }),eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })}}, k.pseudos.nth = k.pseudos.eq;
        for (b in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            k.pseudos[b] = s(b);
        for (b in {submit: !0,reset: !0})
            k.pseudos[b] = u(b);
        return f.prototype = k.filters = k.pseudos, k.setFilters = new f, S = t.tokenize = function(e, n) {
            var r, o, i, a, s, u, l, c = z[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e, u = [], l = k.preFilter; s; ) {
                (!r || (o = le.exec(s))) && (o && (s = s.slice(o[0].length) || s), u.push(i = [])), r = !1, (o = ce.exec(s)) && (r = o.shift(), i.push({value: r,type: o[0].replace(ue, " ")}), s = s.slice(r.length));
                for (a in k.filter)
                    !(o = he[a].exec(s)) || l[a] && !(o = l[a](o)) || (r = o.shift(), i.push({value: r,type: a,matches: o}), s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
        }, N = t.compile = function(e, t) {
            var n, r = [], o = [], i = X[e + " "];
            if (!i) {
                for (t || (t = S(e)), n = t.length; n--; )
                    i = y(t[n]), i[q] ? r.push(i) : o.push(i);
                i = X(e, x(o, r)), i.selector = e
            }
            return i
        }, E = t.select = function(e, t, n, r) {
            var o, i, a, s, u, l = "function" == typeof e && e, f = !r && S(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (i = f[0] = f[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && w.getById && 9 === t.nodeType && F && k.relative[i[1].type]) {
                    if (t = (k.find.ID(a.matches[0].replace(we, ke), t) || [])[0], !t)
                        return n;
                    l && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = he.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !k.relative[s = a.type]); )
                    if ((u = k.find[s]) && (r = u(a.matches[0].replace(we, ke), xe.test(i[0].type) && c(t.parentNode) || t))) {
                        if (i.splice(o, 1), e = r.length && p(i), !e)
                            return Q.apply(n, r), n;
                        break
                    }
            }
            return (l || N(e, f))(r, t, !F, n, xe.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = q.split("").sort(V).join("") === q, w.detectDuplicates = !!A, O(), w.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = oe, Z.expr = oe.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = oe.uniqueSort, Z.text = oe.getText, Z.isXMLDoc = oe.isXML, Z.contains = oe.contains;
    var ie = Z.expr.match.needsContext, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, se = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({find: function(e) {
            var t, n = this.length, r = [], o = this;
            if ("string" != typeof e)
                return this.pushStack(Z(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (Z.contains(o[t], this))
                            return !0
                }));
            for (t = 0; n > t; t++)
                Z.find(e, o[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },is: function(e) {
            return !!r(this, "string" == typeof e && ie.test(e) ? Z(e) : e || [], !1).length
        }});
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = Z.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t)
                return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)), ae.test(n[1]) && Z.isPlainObject(t))
                    for (n in t)
                        Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = Y.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Y, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    };
    ce.prototype = Z.fn, ue = Z(Y);
    var fe = /^(?:parents|prev(?:Until|All))/, pe = {children: !0,contents: !0,next: !0,prev: !0};
    Z.extend({dir: function(e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (o && Z(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }}), Z.fn.extend({has: function(e) {
            var t = Z(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e]))
                        return !0
            })
        },closest: function(e, t) {
            for (var n, r = 0, o = this.length, i = [], a = ie.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; o > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        i.push(n);
                        break
                    }
            return this.pushStack(i.length > 1 ? Z.unique(i) : i)
        },index: function(e) {
            return e ? "string" == typeof e ? V.call(Z(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }}), Z.each({parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },parents: function(e) {
            return Z.dir(e, "parentNode")
        },parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },next: function(e) {
            return o(e, "nextSibling")
        },prev: function(e) {
            return o(e, "previousSibling")
        },nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },children: function(e) {
            return Z.sibling(e.firstChild)
        },contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }}, function(e, t) {
        Z.fn[e] = function(n, r) {
            var o = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = Z.filter(r, o)), this.length > 1 && (pe[e] || Z.unique(o), fe.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var de = /\S+/g, he = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || i(e) : Z.extend({}, e);
        var t, n, r, o, a, s, u = [], l = !e.once && [], c = function(i) {
            for (t = e.memory && i, n = !0, s = o || 0, o = 0, a = u.length, r = !0; u && a > s; s++)
                if (u[s].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                    t = !1;
                    break
                }
            r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
        }, f = {add: function() {
                if (u) {
                    var n = u.length;
                    !function i(t) {
                        Z.each(t, function(t, n) {
                            var r = Z.type(n);
                            "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    }(arguments), r ? a = u.length : t && (o = n, c(t))
                }
                return this
            },remove: function() {
                return u && Z.each(arguments, function(e, t) {
                    for (var n; (n = Z.inArray(t, u, n)) > -1; )
                        u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                }), this
            },has: function(e) {
                return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
            },empty: function() {
                return u = [], a = 0, this
            },disable: function() {
                return u = l = t = void 0, this
            },disabled: function() {
                return !u
            },lock: function() {
                return l = void 0, t || f.disable(), this
            },locked: function() {
                return !l
            },fireWith: function(e, t) {
                return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
            },fire: function() {
                return f.fireWith(this, arguments), this
            },fired: function() {
                return !!n
            }};
        return f
    }, Z.extend({Deferred: function(e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]], n = "pending", r = {state: function() {
                    return n
                },always: function() {
                    return o.done(arguments).fail(arguments), this
                },then: function() {
                    var e = arguments;
                    return Z.Deferred(function(n) {
                        Z.each(t, function(t, i) {
                            var a = Z.isFunction(e[t]) && e[t];
                            o[i[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                },promise: function(e) {
                    return null != e ? Z.extend(e, r) : r
                }}, o = {};
            return r.pipe = r.then, Z.each(t, function(e, i) {
                var a = i[2], s = i[3];
                r[i[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this
                }, o[i[0] + "With"] = a.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },when: function(e) {
            var t, n, r, o = 0, i = W.call(arguments), a = i.length, s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0, u = 1 === s ? e : Z.Deferred(), l = function(e, n, r) {
                return function(o) {
                    n[e] = this, r[e] = arguments.length > 1 ? W.call(arguments) : o, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++)
                    i[o] && Z.isFunction(i[o].promise) ? i[o].promise().done(l(o, r, i)).fail(u.reject).progress(l(o, n, t)) : --s;
            return s || u.resolveWith(r, i), u.promise()
        }});
    var ge;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({isReady: !1,readyWait: 1,holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(Y, [Z]), Z.fn.triggerHandler && (Z(Y).triggerHandler("ready"), Z(Y).off("ready"))))
        }}), Z.ready.promise = function(t) {
        return ge || (ge = Z.Deferred(), "complete" === Y.readyState ? setTimeout(Z.ready) : (Y.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), ge.promise(t)
    }, Z.ready.promise();
    var me = Z.access = function(e, t, n, r, o, i, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === Z.type(n)) {
            o = !0;
            for (s in n)
                Z.access(e, t, s, n[s], !0, i, a)
        } else if (void 0 !== r && (o = !0, Z.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(Z(e), n)
        })), t))
            for (; u > s; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {key: function(e) {
            if (!s.accepts(e))
                return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {value: n}, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },set: function(e, t, n) {
            var r, o = this.key(e), i = this.cache[o];
            if ("string" == typeof t)
                i[t] = n;
            else if (Z.isEmptyObject(i))
                Z.extend(this.cache[o], t);
            else
                for (r in t)
                    i[r] = t[r];
            return i
        },get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },remove: function(e, t) {
            var n, r, o, i = this.key(e), a = this.cache[i];
            if (void 0 === t)
                this.cache[i] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (o = Z.camelCase(t), t in a ? r = [t, o] : (r = o, r = r in a ? [r] : r.match(de) || [])), n = r.length;
                for (; n--; )
                    delete a[r[n]]
            }
        },hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }};
    var ve = new s, ye = new s, xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
    Z.extend({hasData: function(e) {
            return ye.hasData(e) || ve.hasData(e)
        },data: function(e, t, n) {
            return ye.access(e, t, n)
        },removeData: function(e, t) {
            ye.remove(e, t)
        },_data: function(e, t, n) {
            return ve.access(e, t, n)
        },_removeData: function(e, t) {
            ve.remove(e, t)
        }}), Z.fn.extend({data: function(e, t) {
            var n, r, o, i = this[0], a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = ye.get(i), 1 === i.nodeType && !ve.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(i, r, o[r])));
                    ve.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : me(this, function(t) {
                var n, r = Z.camelCase(e);
                if (i && void 0 === t) {
                    if (n = ye.get(i, e), void 0 !== n)
                        return n;
                    if (n = ye.get(i, r), void 0 !== n)
                        return n;
                    if (n = u(i, r, void 0), void 0 !== n)
                        return n
                } else
                    this.each(function() {
                        var n = ye.get(this, r);
                        ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }}), Z.extend({queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t), r = n.length, o = n.shift(), i = Z._queueHooks(e, t), a = function() {
                Z.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
        },_queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {empty: Z.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })})
        }}), Z.fn.extend({queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },promise: function(e, t) {
            var n, r = 1, o = Z.Deferred(), i = this, a = this.length, s = function() {
                --r || o.resolveWith(i, [i])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; )
                n = ve.get(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), o.promise(t)
        }});
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ke = ["Top", "Right", "Bottom", "Left"], Ce = function(e, t) {
        return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    }, Te = /^(?:checkbox|radio)$/i;
    !function() {
        var e = Y.createDocumentFragment(), t = e.appendChild(Y.createElement("div")), n = Y.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Se = "undefined";
    G.focusinBubbles = "onfocusin" in e;
    var Ne = /^key/, Ee = /^(?:mouse|pointer|contextmenu)|click/, Le = /^(?:focusinfocus|focusoutblur)$/, je = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {global: {},add: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, p, d, h, g, m = ve.get(e);
            if (m)
                for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                    return typeof Z !== Se && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(de) || [""], l = t.length; l--; )
                    s = je.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({type: d,origType: g,data: r,handler: n,guid: n.guid,selector: o,needsContext: o && Z.expr.match.needsContext.test(o),namespace: h.join(".")}, i), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
        },remove: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(de) || [""], l = t.length; l--; )
                    if (s = je.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--; )
                            c = p[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u)
                            Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
            }
        },trigger: function(t, n, r, o) {
            var i, a, s, u, l, c, f, p = [r || Y], d = J.call(t, "type") ? t.type : t, h = J.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || Y, 3 !== r.nodeType && 8 !== r.nodeType && !Le.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, o || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!o && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d, Le.test(u + d) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a), s = a;
                    s === (r.ownerDocument || Y) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (i = 0; (a = p[i++]) && !t.isPropagationStopped(); )
                    t.type = i > 1 ? u : f.bindType || d, c = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Z.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = d, o || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (s = r[l], s && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, o, i, a = [], s = W.call(arguments), u = (ve.get(this, "events") || {})[e.type] || [], l = Z.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = Z.event.handlers.call(this, e, u), t = 0; (o = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((Z.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },handlers: function(e, t) {
            var n, r, o, i, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; s > n; n++)
                            i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? Z(o, this).index(u) >= 0 : Z.find(o, this, null, [u]).length), r[o] && r.push(i);
                        r.length && a.push({elem: u,handlers: r})
                    }
            return s < t.length && a.push({elem: this,handlers: t.slice(s)}), a
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }},mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(e, t) {
                var n, r, o, i = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Y, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }},fix: function(e) {
            if (e[Z.expando])
                return e;
            var t, n, r, o = e.type, i = e, a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Ee.test(o) ? this.mouseHooks : Ne.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(i), t = r.length; t--; )
                n = r[t], e[n] = i[n];
            return e.target || (e.target = Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, i) : e
        },special: {load: {noBubble: !0},focus: {trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },delegateType: "focusin"},blur: {trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },delegateType: "focusout"},click: {trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },_default: function(e) {
                    return Z.nodeName(e.target, "a")
                }},beforeunload: {postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }}},simulate: function(e, t, n, r) {
            var o = Z.extend(new Z.Event, n, {type: e,isSimulated: !0,originalEvent: {}});
            r ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }}, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void (this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {isDefaultPrevented: c,isPropagationStopped: c,isImmediatePropagationStopped: c,preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }}, Z.each({mouseenter: "mouseover",mouseleave: "mouseout",pointerenter: "pointerover",pointerleave: "pointerout"}, function(e, t) {
        Z.event.special[e] = {delegateType: t,bindType: t,handle: function(e) {
                var n, r = this, o = e.relatedTarget, i = e.handleObj;
                return (!o || o !== r && !Z.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }}
    }), G.focusinBubbles || Z.each({focus: "focusin",blur: "focusout"}, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {setup: function() {
                var r = this.ownerDocument || this, o = ve.access(r, t);
                o || r.addEventListener(e, n, !0), ve.access(r, t, (o || 0) + 1)
            },teardown: function() {
                var r = this.ownerDocument || this, o = ve.access(r, t) - 1;
                o ? ve.access(r, t, o) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
            }}
    }), Z.fn.extend({on: function(e, t, n, r, o) {
            var i, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e)
                    this.on(a, t, n, e[a], o);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1)
                r = c;
            else if (!r)
                return this;
            return 1 === o && (i = r, r = function(e) {
                return Z().off(e), i.apply(this, arguments)
            }, r.guid = i.guid || (i.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }});
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Oe = /<([\w:]+)/, De = /<|&#?\w+;/, Pe = /<(?:script|style|link)/i, Fe = /checked\s*(?:[^=]|=\s*.checked.)/i, _e = /^$|\/(?:java|ecma)script/i, He = /^true\/(.*)/, Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Re = {option: [1, "<select multiple='multiple'>", "</select>"],thead: [1, "<table>", "</table>"],col: [2, "<table><colgroup>", "</colgroup></table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: [0, "", ""]};
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, Z.extend({clone: function(e, t, n) {
            var r, o, i, a, s = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
            if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (a = v(s), i = v(e), r = 0, o = i.length; o > r; r++)
                    y(i[r], a[r]);
            if (t)
                if (n)
                    for (i = i || v(e), a = a || v(s), r = 0, o = i.length; o > r; r++)
                        m(i[r], a[r]);
                else
                    m(e, s);
            return a = v(s, "script"), a.length > 0 && g(a, !u && v(e, "script")), s
        },buildFragment: function(e, t, n, r) {
            for (var o, i, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                if (o = e[p], o || 0 === o)
                    if ("object" === Z.type(o))
                        Z.merge(f, o.nodeType ? [o] : o);
                    else if (De.test(o)) {
                        for (i = i || c.appendChild(t.createElement("div")), a = (Oe.exec(o) || ["", ""])[1].toLowerCase(), s = Re[a] || Re._default, i.innerHTML = s[1] + o.replace(Ae, "<$1></$2>") + s[2], l = s[0]; l--; )
                            i = i.lastChild;
                        Z.merge(f, i.childNodes), i = c.firstChild, i.textContent = ""
                    } else
                        f.push(t.createTextNode(o));
            for (c.textContent = "", p = 0; o = f[p++]; )
                if ((!r || -1 === Z.inArray(o, r)) && (u = Z.contains(o.ownerDocument, o), i = v(c.appendChild(o), "script"), u && g(i), n))
                    for (l = 0; o = i[l++]; )
                        _e.test(o.type || "") && n.push(o);
            return c
        },cleanData: function(e) {
            for (var t, n, r, o, i = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (Z.acceptData(n) && (o = n[ve.expando], o && (t = ve.cache[o]))) {
                    if (t.events)
                        for (r in t.events)
                            i[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete ye.cache[n[ye.expando]]
            }
        }}), Z.fn.extend({text: function(e) {
            return me(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, o = 0; null != (n = r[o]); o++)
                t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },html: function(e) {
            return me(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !Re[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; r > n; n++)
                            t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },detach: function(e) {
            return this.remove(e, !0)
        },domManip: function(e, t) {
            e = z.apply([], e);
            var n, r, o, i, a, s, u = 0, l = this.length, c = this, f = l - 1, p = e[0], g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !G.checkClone && Fe.test(p))
                return this.each(function(n) {
                    var r = c.eq(n);
                    g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
                });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (o = Z.map(v(n, "script"), d), i = o.length; l > u; u++)
                    a = n, u !== f && (a = Z.clone(a, !0, !0), i && Z.merge(o, v(a, "script"))), t.call(this[u], a, u);
                if (i)
                    for (s = o[o.length - 1].ownerDocument, Z.map(o, h), u = 0; i > u; u++)
                        a = o[u], _e.test(a.type || "") && !ve.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Me, "")))
            }
            return this
        }}), Z.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], o = Z(e), i = o.length - 1, a = 0; i >= a; a++)
                n = a === i ? this : this.clone(!0), Z(o[a])[t](n), X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var qe, $e = {}, Ie = /^margin/, Be = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), We = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", o.appendChild(i);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, r = "4px" === t.width, o.removeChild(i)
        }
        var n, r, o = Y.documentElement, i = Y.createElement("div"), a = Y.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === a.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(a), e.getComputedStyle && Z.extend(G, {pixelPosition: function() {
                return t(), n
            },boxSizingReliable: function() {
                return null == r && t(), r
            },reliableMarginRight: function() {
                var t, n = a.appendChild(Y.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(i), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(i), a.removeChild(n), t
            }}))
    }(), Z.swap = function(e, t, n, r) {
        var o, i, a = {};
        for (i in t)
            a[i] = e.style[i], e.style[i] = t[i];
        o = n.apply(e, r || []);
        for (i in t)
            e.style[i] = a[i];
        return o
    };
    var ze = /^(none|table(?!-c[ea]).+)/, Xe = new RegExp("^(" + we + ")(.*)$", "i"), Ve = new RegExp("^([+-])=(" + we + ")", "i"), Ue = {position: "absolute",visibility: "hidden",display: "block"}, Ke = {letterSpacing: "0",fontWeight: "400"}, Je = ["Webkit", "O", "Moz", "ms"];
    Z.extend({cssHooks: {opacity: {get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,flexGrow: !0,flexShrink: !0,fontWeight: !0,lineHeight: !0,opacity: !0,order: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": "cssFloat"},style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = Z.camelCase(t), u = e.style;
                return t = Z.cssProps[s] || (Z.cssProps[s] = C(u, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t] : (i = typeof n, "string" === i && (o = Ve.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t)), i = "number"), null != n && n === n && ("number" !== i || Z.cssNumber[s] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },css: function(e, t, n, r) {
            var o, i, a, s = Z.camelCase(t);
            return t = Z.cssProps[s] || (Z.cssProps[s] = C(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = w(e, t, r)), "normal" === o && t in Ke && (o = Ke[t]), "" === n || n ? (i = parseFloat(o), n === !0 || Z.isNumeric(i) ? i || 0 : o) : o
        }}), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {get: function(e, n, r) {
                return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ue, function() {
                    return N(e, t, r)
                }) : N(e, t, r) : void 0
            },set: function(e, n, r) {
                var o = r && We(e);
                return T(e, n, r ? S(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, o), o) : 0)
            }}
    }), Z.cssHooks.marginRight = k(G.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
    }), Z.each({margin: "",padding: "",border: "Width"}, function(e, t) {
        Z.cssHooks[e + t] = {expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    o[e + ke[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }}, Ie.test(e) || (Z.cssHooks[e + t].set = T)
    }), Z.fn.extend({css: function(e, t) {
            return me(this, function(e, t, n) {
                var r, o, i = {}, a = 0;
                if (Z.isArray(t)) {
                    for (r = We(e), o = t.length; o > a; a++)
                        i[t[a]] = Z.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },show: function() {
            return E(this, !0)
        },hide: function() {
            return E(this)
        },toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? Z(this).show() : Z(this).hide()
            })
        }}), Z.Tween = L, L.prototype = {constructor: L,init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (Z.cssNumber[n] ? "" : "px")
        },cur: function() {
            var e = L.propHooks[this.prop];
            return e && e.get ? e.get(this) : L.propHooks._default.get(this)
        },run: function(e) {
            var t, n = L.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }}, L.prototype.init.prototype = L.prototype, L.propHooks = {_default: {get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }}}, L.propHooks.scrollTop = L.propHooks.scrollLeft = {set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }}, Z.easing = {linear: function(e) {
            return e
        },swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }}, Z.fx = L.prototype.init, Z.fx.step = {};
    var Ge, Ye, Qe = /^(?:toggle|show|hide)$/, Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), et = /queueHooks$/, tt = [D], nt = {"*": [function(e, t) {
                var n = this.createTween(e, t), r = n.cur(), o = Ze.exec(t), i = o && o[3] || (Z.cssNumber[e] ? "" : "px"), a = (Z.cssNumber[e] || "px" !== i && +r) && Ze.exec(Z.css(n.elem, e)), s = 1, u = 20;
                if (a && a[3] !== i) {
                    i = i || a[3], o = o || [], a = +r || 1;
                    do
                        s = s || ".5", a /= s, Z.style(n.elem, e, a + i);
                    while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]};
    Z.Animation = Z.extend(F, {tweener: function(e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, o = e.length; o > r; r++)
                n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
        },prefilter: function(e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }}), Z.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? Z.extend({}, e) : {complete: n || !n && t || Z.isFunction(e) && e,duration: e,easing: n && t || t && !Z.isFunction(t) && t};
        return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
        }, r
    }, Z.fn.extend({fadeTo: function(e, t, n, r) {
            return this.filter(Ce).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        },animate: function(e, t, n, r) {
            var o = Z.isEmptyObject(e), i = Z.speed(t, n, r), a = function() {
                var t = F(this, Z.extend({}, e), i);
                (o || ve.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
        },stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, o = null != e && e + "queueHooks", i = Z.timers, a = ve.get(this);
                if (o)
                    a[o] && a[o].stop && r(a[o]);
                else
                    for (o in a)
                        a[o] && a[o].stop && et.test(o) && r(a[o]);
                for (o = i.length; o--; )
                    i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                (t || !n) && Z.dequeue(this, e)
            })
        },finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = ve.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = Z.timers, a = r ? r.length : 0;
                for (n.finish = !0, Z.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--; )
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), 
                    i.splice(t, 1));
                for (t = 0; a > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }}), Z.each(["toggle", "show", "hide"], function(e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function(e, r, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, o)
        }
    }), Z.each({slideDown: A("show"),slideUp: A("hide"),slideToggle: A("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(e, t) {
        Z.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), Z.timers = [], Z.fx.tick = function() {
        var e, t = 0, n = Z.timers;
        for (Ge = Z.now(); t < n.length; t++)
            e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), Ge = void 0
    }, Z.fx.timer = function(e) {
        Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function() {
        Ye || (Ye = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function() {
        clearInterval(Ye), Ye = null
    }, Z.fx.speeds = {slow: 600,fast: 200,_default: 400}, Z.fn.delay = function(e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }, function() {
        var e = Y.createElement("input"), t = Y.createElement("select"), n = t.appendChild(Y.createElement("option"));
        e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = Y.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
    }();
    var rt, ot, it = Z.expr.attrHandle;
    Z.fn.extend({attr: function(e, t) {
            return me(this, Z.attr, e, t, arguments.length > 1)
        },removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }}), Z.extend({attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (e && 3 !== i && 8 !== i && 2 !== i)
                return typeof e.getAttribute === Se ? Z.prop(e, t, n) : (1 === i && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? ot : rt)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = Z.find.attr(e, t), null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        },removeAttr: function(e, t) {
            var n, r, o = 0, i = t && t.match(de);
            if (i && 1 === e.nodeType)
                for (; n = i[o++]; )
                    r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },attrHooks: {type: {set: function(e, t) {
                    if (!G.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }}}}), ot = {set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }}, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = it[t] || Z.find.attr;
        it[t] = function(e, t, r) {
            var o, i;
            return r || (i = it[t], it[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, it[t] = i), o
        }
    });
    var at = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({prop: function(e, t) {
            return me(this, Z.prop, e, t, arguments.length > 1)
        },removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }}), Z.extend({propFix: {"for": "htmlFor","class": "className"},prop: function(e, t, n) {
            var r, o, i, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a)
                return i = 1 !== a || !Z.isXMLDoc(e), i && (t = Z.propFix[t] || t, o = Z.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },propHooks: {tabIndex: {get: function(e) {
                    return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                }}}}), G.optSelected || (Z.propHooks.selected = {get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }}), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    Z.fn.extend({addClass: function(e) {
            var t, n, r, o, i, a, s = "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))
                return this.each(function(t) {
                    Z(this).addClass(e.call(this, t, this.className))
                });
            if (s)
                for (t = (e || "").match(de) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                        for (i = 0; o = t[i++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = Z.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },removeClass: function(e) {
            var t, n, r, o, i, a, s = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))
                return this.each(function(t) {
                    Z(this).removeClass(e.call(this, t, this.className))
                });
            if (s)
                for (t = (e || "").match(de) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                        for (i = 0; o = t[i++]; )
                            for (; r.indexOf(" " + o + " ") >= 0; )
                                r = r.replace(" " + o + " ", " ");
                        a = e ? Z.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, o = Z(this), i = e.match(de) || []; t = i[r++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    (n === Se || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }});
    var ut = /\r/g;
    Z.fn.extend({val: function(e) {
            var t, n, r, o = this[0];
            {
                if (arguments.length)
                    return r = Z.isFunction(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = r ? e.call(this, n, Z(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                if (o)
                    return t = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
            }
        }}), Z.extend({valHooks: {option: {get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }},select: {get: function(e) {
                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, u = 0 > o ? s : i ? o : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== o || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), i)
                                return t;
                            a.push(t)
                        }
                    return a
                },set: function(e, t) {
                    for (var n, r, o = e.options, i = Z.makeArray(t), a = o.length; a--; )
                        r = o[a], (r.selected = Z.inArray(r.value, i) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }}}}), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }}, G.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },unbind: function(e, t) {
            return this.off(e, null, t)
        },delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }});
    var lt = Z.now(), ct = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var ft = /#.*$/, pt = /([?&])_=[^&]*/, dt = /^(.*?):[ \t]*([^\r\n]*)$/gm, ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, gt = /^(?:GET|HEAD)$/, mt = /^\/\//, vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yt = {}, xt = {}, bt = "*/".concat("*"), wt = e.location.href, kt = vt.exec(wt.toLowerCase()) || [];
    Z.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: wt,type: "GET",isLocal: ht.test(kt[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": bt,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": Z.parseJSON,"text xml": Z.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(e, t) {
            return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
        },ajaxPrefilter: _(yt),ajaxTransport: _(xt),ajax: function(e, t) {
            function n(e, t, n, a) {
                var u, c, v, y, b, k = t;
                2 !== x && (x = 2, s && clearTimeout(s), r = void 0, i = a || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = R(f, w, n)), y = q(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[o] = b), b = w.getResponseHeader("etag"), b && (Z.etag[o] = b)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, c = y.data, v = y.error, u = !v)) : (v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || k) + "", u ? h.resolveWith(p, [c, k, w]) : h.rejectWith(p, [w, k, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, k]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, o, i, a, s, u, l, c, f = Z.ajaxSetup({}, t), p = f.context || f, d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event, h = Z.Deferred(), g = Z.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {readyState: 0,getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!a)
                            for (a = {}; t = dt.exec(i); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },getAllResponseHeaders: function() {
                    return 2 === x ? i : null
                },setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = y[n] = y[n] || e, v[e] = t), this
                },overrideMimeType: function(e) {
                    return x || (f.mimeType = e), this
                },statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > x)
                            for (t in e)
                                m[t] = [m[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },abort: function(e) {
                    var t = e || b;
                    return r && r.abort(t), n(0, t), this
                }};
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || wt) + "").replace(ft, "").replace(mt, kt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = vt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === kt[1] && u[2] === kt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (kt[3] || ("http:" === kt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), H(yt, f, t, w), 2 === x)
                return w;
            l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (ct.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pt.test(o) ? o.replace(pt, "$1_=" + lt++) : o + (ct.test(o) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[o] && w.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && w.setRequestHeader("If-None-Match", Z.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers)
                w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x))
                return w.abort();
            b = "abort";
            for (c in {success: 1,error: 1,complete: 1})
                w[c](f[c]);
            if (r = H(xt, f, t, w)) {
                w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (k) {
                    if (!(2 > x))
                        throw k;
                    n(-1, k)
                }
            } else
                n(-1, "No Transport");
            return w
        },getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }}), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, r, o) {
            return Z.isFunction(n) && (o = o || r, r = n, n = void 0), Z.ajax({url: e,type: t,dataType: o,data: n,success: r})
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({url: e,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0})
    }, Z.fn.extend({wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)), this)
        },wrapInner: function(e) {
            return this.each(Z.isFunction(e) ? function(t) {
                Z(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Z(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }}), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var Ct = /%20/g, Tt = /\[\]$/, St = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, Et = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [], o = function(e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e))
            Z.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                $(n, e[n], t, o);
        return r.join("&").replace(Ct, "+")
    }, Z.fn.extend({serialize: function() {
            return Z.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Et.test(this.nodeName) && !Nt.test(e) && (this.checked || !Te.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {name: t.name,value: e.replace(St, "\r\n")}
                }) : {name: t.name,value: n.replace(St, "\r\n")}
            }).get()
        }}), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var Lt = 0, jt = {}, At = {0: 200,1223: 204}, Ot = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in jt)
            jt[e]()
    }), G.cors = !!Ot && "withCredentials" in Ot, G.ajax = Ot = !!Ot, Z.ajaxTransport(function(e) {
        var t;
        return G.cors || Ot && !e.crossDomain ? {send: function(n, r) {
                var o, i = e.xhr(), a = ++Lt;
                if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields)
                        i[o] = e.xhrFields[o];
                e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n)
                    i.setRequestHeader(o, n[o]);
                t = function(e) {
                    return function() {
                        t && (delete jt[a], t = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? r(i.status, i.statusText) : r(At[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {text: i.responseText} : void 0, i.getAllResponseHeaders()))
                    }
                }, i.onload = t(), i.onerror = t("error"), t = jt[a] = t("abort");
                try {
                    i.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t)
                        throw s
                }
            },abort: function() {
                t && t()
            }} : void 0
    }), Z.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(e) {
                return Z.globalEval(e), e
            }}}), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {send: function(r, o) {
                    t = Z("<script>").prop({async: !0,charset: e.scriptCharset,src: e.url}).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), Y.head.appendChild(t[0])
                },abort: function() {
                    n && n()
                }}
        }
    });
    var Dt = [], Pt = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var e = Dt.pop() || Z.expando + "_" + lt++;
            return this[e] = !0, e
        }}), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = t.jsonp !== !1 && (Pt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Pt, "$1" + o) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || Z.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            a = arguments
        }, r.always(function() {
            e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Dt.push(o)), a && Z.isFunction(i) && i(a[0]), a = i = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Y;
        var r = ae.exec(e), o = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, o), o && o.length && Z(o).remove(), Z.merge([], r.childNodes))
    };
    var Ft = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ft)
            return Ft.apply(this, arguments);
        var r, o, i, a = this, s = e.indexOf(" ");
        return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && Z.ajax({url: e,type: o,dataType: "html",data: t}).done(function(e) {
            i = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var _t = e.document.documentElement;
    Z.offset = {setOffset: function(e, t, n) {
            var r, o, i, a, s, u, l, c = Z.css(e, "position"), f = Z(e), p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), i = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : f.css(p)
        }}, Z.fn.extend({offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    Z.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], o = {top: 0,left: 0}, i = r && r.ownerDocument;
            if (i)
                return t = i.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== Se && (o = r.getBoundingClientRect()), n = I(i), {top: o.top + n.pageYOffset - t.clientTop,left: o.left + n.pageXOffset - t.clientLeft}) : o
        },position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0,left: 0};
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {top: t.top - r.top - Z.css(n, "marginTop", !0),left: t.left - r.left - Z.css(n, "marginLeft", !0)}
            }
        },offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || _t; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position"); )
                    e = e.offsetParent;
                return e || _t
            })
        }}), Z.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(o) {
            return me(this, function(t, o, i) {
                var a = I(t);
                return void 0 === i ? a ? a[n] : t[o] : void (a ? a.scrollTo(r ? e.pageXOffset : i, r ? i : e.pageYOffset) : t[o] = i)
            }, t, o, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = k(G.pixelPosition, function(e, n) {
            return n ? (n = w(e, t), Be.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({Height: "height",Width: "width"}, function(e, t) {
        Z.each({padding: "inner" + e,content: t,"": "outer" + e}, function(n, r) {
            Z.fn[r] = function(r, o) {
                var i = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || o === !0 ? "margin" : "border");
                return me(this, function(t, n, r) {
                    var o;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? Z.css(t, n, a) : Z.style(t, n, r, a)
                }, t, i ? r : void 0, i, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Ht = e.jQuery, Mt = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Mt), t && e.jQuery === Z && (e.jQuery = Ht), Z
    }, typeof t === Se && (e.jQuery = e.$ = Z), Z
}), function(e) {
    var t = null;
    e.modal = function(n, r) {
        e.modal.close();
        var o, i;
        if (this.$body = e("body"), this.options = e.extend({}, e.modal.defaults, r), this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)), n.is("a"))
            if (i = n.attr("href"), /^#/.test(i)) {
                if (this.$elm = e(i), 1 !== this.$elm.length)
                    return null;
                this.open()
            } else
                this.$elm = e("<div>"), this.$body.append(this.$elm), o = function(e, t) {
                    t.elm.remove()
                }, this.showSpinner(), n.trigger(e.modal.AJAX_SEND), e.get(i).done(function(r) {
                    t && (n.trigger(e.modal.AJAX_SUCCESS), t.$elm.empty().append(r).on(e.modal.CLOSE, o), t.hideSpinner(), t.open(), n.trigger(e.modal.AJAX_COMPLETE))
                }).fail(function() {
                    n.trigger(e.modal.AJAX_FAIL), t.hideSpinner(), n.trigger(e.modal.AJAX_COMPLETE)
                });
        else
            this.$elm = n, this.$body.append(this.$elm), this.open()
    }, e.modal.prototype = {constructor: e.modal,open: function() {
            var t = this;
            this.options.doFade ? (this.block(), setTimeout(function() {
                t.show()
            }, this.options.fadeDuration * this.options.fadeDelay)) : (this.block(), this.show()), this.options.escapeClose && e(document).on("keydown.modal", function(t) {
                27 == t.which && e.modal.close()
            }), this.options.clickClose && this.blocker.click(e.modal.close)
        },close: function() {
            this.unblock(), this.hide(), e(document).off("keydown.modal")
        },block: function() {
            var t = this.options.doFade ? 0 : this.options.opacity;
            this.$elm.trigger(e.modal.BEFORE_BLOCK, [this._ctx()]), this.blocker = e('<div class="jquery-modal blocker"></div>').css({top: 0,right: 0,bottom: 0,left: 0,width: "100%",height: "100%",position: "fixed",zIndex: this.options.zIndex,background: this.options.overlay,opacity: t}), this.$body.append(this.blocker), this.options.doFade && this.blocker.animate({opacity: this.options.opacity}, this.options.fadeDuration), this.$elm.trigger(e.modal.BLOCK, [this._ctx()])
        },unblock: function() {
            this.options.doFade ? this.blocker.fadeOut(this.options.fadeDuration, function() {
                e(this).remove()
            }) : this.blocker.remove()
        },show: function() {
            this.$elm.trigger(e.modal.BEFORE_OPEN, [this._ctx()]), this.options.showClose && (this.closeButton = e('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + "</a>"), this.$elm.append(this.closeButton)), this.$elm.addClass(this.options.modalClass + " current"), this.center(), this.options.doFade ? this.$elm.fadeIn(this.options.fadeDuration) : this.$elm.show(), this.$elm.trigger(e.modal.OPEN, [this._ctx()])
        },hide: function() {
            this.$elm.trigger(e.modal.BEFORE_CLOSE, [this._ctx()]), this.closeButton && this.closeButton.remove(), this.$elm.removeClass("current"), this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration) : this.$elm.hide(), this.$elm.trigger(e.modal.CLOSE, [this._ctx()])
        },showSpinner: function() {
            this.options.showSpinner && (this.spinner = this.spinner || e('<div class="' + this.options.modalClass + '-spinner"></div>').append(this.options.spinnerHtml), this.$body.append(this.spinner), this.spinner.show())
        },hideSpinner: function() {
            this.spinner && this.spinner.remove()
        },center: function() {
            this.$elm.css({position: "fixed",top: "50%",left: "50%",marginTop: -(this.$elm.outerHeight() / 2),marginLeft: -(this.$elm.outerWidth() / 2),zIndex: this.options.zIndex + 1})
        },_ctx: function() {
            return {elm: this.$elm,blocker: this.blocker,options: this.options}
        }}, e.modal.prototype.resize = e.modal.prototype.center, e.modal.close = function(e) {
        if (t) {
            e && e.preventDefault(), t.close();
            var n = t.$elm;
            return t = null, n
        }
    }, e.modal.resize = function() {
        t && t.resize()
    }, e.modal.isActive = function() {
        return t ? !0 : !1
    }, e.modal.defaults = {overlay: "#000",opacity: .6,zIndex: 1,escapeClose: !0,clickClose: !0,closeText: "Close",closeClass: "",modalClass: "modal",spinnerHtml: null,showSpinner: !0,showClose: !0,fadeDuration: null,fadeDelay: 1}, e.modal.BEFORE_BLOCK = "modal:before-block", e.modal.BLOCK = "modal:block", e.modal.BEFORE_OPEN = "modal:before-open", e.modal.OPEN = "modal:open", e.modal.BEFORE_CLOSE = "modal:before-close", e.modal.CLOSE = "modal:close", e.modal.AJAX_SEND = "modal:ajax:send", e.modal.AJAX_SUCCESS = "modal:ajax:success", e.modal.AJAX_FAIL = "modal:ajax:fail", e.modal.AJAX_COMPLETE = "modal:ajax:complete", e.fn.modal = function(n) {
        return 1 === this.length && (t = new e.modal(this, n)), this
    }, e(document).on("click.modal", 'a[rel="modal:close"]', e.modal.close), e(document).on("click.modal", 'a[rel="modal:open"]', function(t) {
        t.preventDefault(), e(this).modal()
    })
}(jQuery), function(e) {
    function t(e, t) {
        if (!t || "function" == typeof t)
            return e;
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function n(e, t) {
        for (var r in t)
            r in e ? n(e[r], t[r]) : e[r] = t[r];
        return e
    }
    function r(e, t, n) {
        var r, o = 0, i = e.length, a = void 0 === i || "[object Array]" !== Object.prototype.toString.apply(e) || "function" == typeof e;
        if (n)
            if (a) {
                for (r in e)
                    if (t.apply(e[r], n) === !1)
                        break
            } else
                for (; i > o && t.apply(e[o++], n) !== !1; )
                    ;
        else if (a) {
            for (r in e)
                if (t.call(e[r], r, e[r]) === !1)
                    break
        } else
            for (; i > o && t.call(e[o], o, e[o++]) !== !1; )
                ;
        return e
    }
    function o(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function(e) {
            return X[e]
        }) : e
    }
    function i(e) {
        var t = function(e) {
            if (window.XMLHttpRequest)
                return e(null, new XMLHttpRequest);
            if (window.ActiveXObject)
                try {
                    return e(null, new ActiveXObject("Msxml2.XMLHTTP"))
                } catch (t) {
                    return e(null, new ActiveXObject("Microsoft.XMLHTTP"))
                }
            return e(new Error)
        }, n = function(e) {
            if ("string" == typeof e)
                return e;
            var t = [];
            for (var n in e)
                e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }, r = function(e) {
            e = e.replace(/\r\n/g, "\n");
            for (var t = "", n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                128 > r ? t += String.fromCharCode(r) : r > 127 && 2048 > r ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
            }
            return t
        }, o = function(e) {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            e = r(e);
            var n, o, i, a, s, u, l, c = "", f = 0;
            do
                n = e.charCodeAt(f++), o = e.charCodeAt(f++), i = e.charCodeAt(f++), a = n >> 2, s = (3 & n) << 4 | o >> 4, u = (15 & o) << 2 | i >> 6, l = 63 & i, isNaN(o) ? u = l = 64 : isNaN(i) && (l = 64), c += t.charAt(a) + t.charAt(s) + t.charAt(u) + t.charAt(l), n = o = i = "", a = s = u = l = "";
            while (f < e.length);
            return c
        }, i = function() {
            for (var e = arguments[0], t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    n.hasOwnProperty(r) && (e[r] = n[r])
            }
            return e
        }, a = function(e, r, o, s) {
            "function" == typeof o && (s = o, o = {}), o.cache = o.cache || !1, o.data = o.data || {}, o.headers = o.headers || {}, o.jsonp = o.jsonp || !1, o.async = void 0 === o.async ? !0 : o.async;
            var u, l = i({accept: "*/*","content-type": "application/x-www-form-urlencoded;charset=UTF-8"}, a.headers, o.headers);
            if (u = "application/json" === l["content-type"] ? JSON.stringify(o.data) : n(o.data), "GET" === e) {
                var c = [];
                if (u && (c.push(u), u = null), o.cache || c.push("_=" + (new Date).getTime()), o.jsonp && (c.push("callback=" + o.jsonp), c.push("jsonp=" + o.jsonp)), c = c.join("&"), c.length > 1 && (r += r.indexOf("?") > -1 ? "&" + c : "?" + c), o.jsonp) {
                    var f = document.getElementsByTagName("head")[0], p = document.createElement("script");
                    return p.type = "text/javascript", p.src = r, void f.appendChild(p)
                }
            }
            t(function(t, n) {
                if (t)
                    return s(t);
                n.open(e, r, o.async);
                for (var i in l)
                    l.hasOwnProperty(i) && n.setRequestHeader(i, l[i]);
                n.onreadystatechange = function() {
                    if (4 === n.readyState) {
                        var e = n.responseText || "";
                        if (!s)
                            return;
                        s(n.status, {text: function() {
                                return e
                            },json: function() {
                                try {
                                    return JSON.parse(e)
                                } catch (t) {
                                    return K.error("Can not parse JSON. URL: " + r), {}
                                }
                            }})
                    }
                }, n.send(u)
            })
        }, s = {authBasic: function(e, t) {
                a.headers.Authorization = "Basic " + o(e + ":" + t)
            },connect: function(e, t, n) {
                return a("CONNECT", e, t, n)
            },del: function(e, t, n) {
                return a("DELETE", e, t, n)
            },get: function(e, t, n) {
                return a("GET", e, t, n)
            },head: function(e, t, n) {
                return a("HEAD", e, t, n)
            },headers: function(e) {
                a.headers = e || {}
            },isAllowed: function(e, t, n) {
                this.options(e, function(e, r) {
                    n(-1 !== r.text().indexOf(t))
                })
            },options: function(e, t, n) {
                return a("OPTIONS", e, t, n)
            },patch: function(e, t, n) {
                return a("PATCH", e, t, n)
            },post: function(e, t, n) {
                return a("POST", e, t, n)
            },put: function(e, t, n) {
                return a("PUT", e, t, n)
            },trace: function(e, t, n) {
                return a("TRACE", e, t, n)
            }}, u = e.type ? e.type.toLowerCase() : "get";
        s[u](e.url, e, function(t, n) {
            200 === t || 0 === t && n.text() ? e.success(n.json(), t, null) : e.error(n.text(), t, null)
        })
    }
    function a(e, t) {
        "function" == typeof e && (t = e, e = {}), e = e || {}, K.extend(z, e), delete z.fixLng, z.functions && (delete z.functions, K.extend(K, e.functions)), "string" == typeof z.ns && (z.ns = {namespaces: [z.ns],defaultNs: z.ns}), "string" == typeof z.fallbackNS && (z.fallbackNS = [z.fallbackNS]), ("string" == typeof z.fallbackLng || "boolean" == typeof z.fallbackLng) && (z.fallbackLng = [z.fallbackLng]), z.interpolationPrefixEscaped = K.regexEscape(z.interpolationPrefix), z.interpolationSuffixEscaped = K.regexEscape(z.interpolationSuffix), z.lng || (z.lng = K.detectLanguage()), $ = K.toLanguages(z.lng), _ = $[0], K.log("currentLng set to: " + _), z.useCookie && K.cookie.read(z.cookieName) !== _ && K.cookie.create(z.cookieName, _, z.cookieExpirationTime, z.cookieDomain), z.detectLngFromLocalStorage && "undefined" != typeof document && window.localStorage && K.localStorage.setItem("i18next_lng", _);
        var n = j;
        e.fixLng && (n = function(e, t) {
            return t = t || {}, t.lng = t.lng || n.lng, j(e, t)
        }, n.lng = _), Y.setCurrentLng(_), H && z.setJqueryExt && k();
        var r;
        if (H && H.Deferred && (r = H.Deferred()), !z.resStore) {
            var o = K.toLanguages(z.lng);
            "string" == typeof z.preload && (z.preload = [z.preload]);
            for (var i = 0, a = z.preload.length; a > i; i++)
                for (var s = K.toLanguages(z.preload[i]), u = 0, l = s.length; l > u; u++)
                    o.indexOf(s[u]) < 0 && o.push(s[u]);
            return M.sync.load(o, z, function(e, o) {
                R = o, I = !0, t && t(n), r && r.resolve(n)
            }), r ? r.promise() : void 0
        }
        return R = z.resStore, I = !0, t && t(n), r && r.resolve(n), r ? r.promise() : void 0
    }
    function s() {
        return I
    }
    function u(e, t) {
        "string" == typeof e && (e = [e]);
        for (var n = 0, r = e.length; r > n; n++)
            z.preload.indexOf(e[n]) < 0 && z.preload.push(e[n]);
        return a(t)
    }
    function l(e, t, n, r) {
        "string" != typeof t ? (n = t, t = z.ns.defaultNs) : z.ns.namespaces.indexOf(t) < 0 && z.ns.namespaces.push(t), R[e] = R[e] || {}, R[e][t] = R[e][t] || {}, r ? K.deepExtend(R[e][t], n) : K.extend(R[e][t], n), z.useLocalStorage && B._storeLocal(R)
    }
    function c(e, t) {
        "string" != typeof t && (t = z.ns.defaultNs), R[e] = R[e] || {};
        var n = R[e][t] || {}, r = !1;
        for (var o in n)
            n.hasOwnProperty(o) && (r = !0);
        return r
    }
    function f(e, t) {
        return "string" != typeof t && (t = z.ns.defaultNs), R[e] = R[e] || {}, K.extend({}, R[e][t])
    }
    function p(e, t) {
        "string" != typeof t && (t = z.ns.defaultNs), R[e] = R[e] || {}, R[e][t] = {}, z.useLocalStorage && B._storeLocal(R)
    }
    function d(e, t, n, r) {
        "string" != typeof t ? (resource = t, t = z.ns.defaultNs) : z.ns.namespaces.indexOf(t) < 0 && z.ns.namespaces.push(t), R[e] = R[e] || {}, R[e][t] = R[e][t] || {};
        for (var o = n.split(z.keyseparator), i = 0, a = R[e][t]; o[i]; )
            i == o.length - 1 ? a[o[i]] = r : (null == a[o[i]] && (a[o[i]] = {}), a = a[o[i]]), i++;
        z.useLocalStorage && B._storeLocal(R)
    }
    function h(e, t, n) {
        "string" != typeof t ? (resource = t, t = z.ns.defaultNs) : z.ns.namespaces.indexOf(t) < 0 && z.ns.namespaces.push(t);
        for (var r in n)
            "string" == typeof n[r] && d(e, t, r, n[r])
    }
    function g(e) {
        z.ns.defaultNs = e
    }
    function m(e, t) {
        v([e], t)
    }
    function v(e, t) {
        var n = {dynamicLoad: z.dynamicLoad,resGetPath: z.resGetPath,getAsync: z.getAsync,customLoad: z.customLoad,ns: {namespaces: e,defaultNs: ""}}, r = K.toLanguages(z.lng);
        "string" == typeof z.preload && (z.preload = [z.preload]);
        for (var o = 0, i = z.preload.length; i > o; o++)
            for (var a = K.toLanguages(z.preload[o]), s = 0, u = a.length; u > s; s++)
                r.indexOf(a[s]) < 0 && r.push(a[s]);
        for (var l = [], c = 0, f = r.length; f > c; c++) {
            var p = !1, d = R[r[c]];
            if (d)
                for (var h = 0, g = e.length; g > h; h++)
                    d[e[h]] || (p = !0);
            else
                p = !0;
            p && l.push(r[c])
        }
        l.length ? M.sync._fetch(l, n, function(n, r) {
            var o = e.length * l.length;
            K.each(e, function(e, n) {
                z.ns.namespaces.indexOf(n) < 0 && z.ns.namespaces.push(n), K.each(l, function(e, i) {
                    R[i] = R[i] || {}, R[i][n] = r[i][n], o--, 0 === o && t && (z.useLocalStorage && M.sync._storeLocal(R), t())
                })
            })
        }) : t && t()
    }
    function y(e, t, n) {
        return "function" == typeof t ? (n = t, t = {}) : t || (t = {}), t.lng = e, a(t, n)
    }
    function x() {
        return _
    }
    function b(e) {
        R = {}, y(_, e)
    }
    function w() {
        window.i18next = window.i18n, W ? window.i18n = W : delete window.i18n
    }
    function k() {
        function e(e, t, n) {
            if (0 !== t.length) {
                var r = "text";
                if (0 === t.indexOf("[")) {
                    var o = t.split("]");
                    t = o[1], r = o[0].substr(1, o[0].length - 1)
                }
                t.indexOf(";") === t.length - 1 && (t = t.substr(0, t.length - 2));
                var i;
                if ("html" === r)
                    i = z.defaultValueFromContent ? H.extend({defaultValue: e.html()}, n) : n, e.html(H.t(t, i));
                else if ("text" === r)
                    i = z.defaultValueFromContent ? H.extend({
                        defaultValue: e.text()}, n) : n, e.text(H.t(t, i));
                else if ("prepend" === r)
                    i = z.defaultValueFromContent ? H.extend({defaultValue: e.html()}, n) : n, e.prepend(H.t(t, i));
                else if ("append" === r)
                    i = z.defaultValueFromContent ? H.extend({defaultValue: e.html()}, n) : n, e.append(H.t(t, i));
                else if (0 === r.indexOf("data-")) {
                    var a = r.substr("data-".length);
                    i = z.defaultValueFromContent ? H.extend({defaultValue: e.data(a)}, n) : n;
                    var s = H.t(t, i);
                    e.data(a, s), e.attr(r, s)
                } else
                    i = z.defaultValueFromContent ? H.extend({defaultValue: e.attr(r)}, n) : n, e.attr(r, H.t(t, i))
            }
        }
        function t(t, n) {
            var r = t.attr(z.selectorAttr);
            if (r || "undefined" == typeof r || r === !1 || (r = t.text() || t.val()), r) {
                var o = t, i = t.data("i18n-target");
                if (i && (o = t.find(i) || t), n || z.useDataAttrOptions !== !0 || (n = t.data("i18n-options")), n = n || {}, r.indexOf(";") >= 0) {
                    var a = r.split(";");
                    H.each(a, function(t, r) {
                        "" !== r && e(o, r, n)
                    })
                } else
                    e(o, r, n);
                z.useDataAttrOptions === !0 && t.data("i18n-options", n)
            }
        }
        H.t = H.t || j, H.fn.i18n = function(e) {
            return this.each(function() {
                t(H(this), e);
                var n = H(this).find("[" + z.selectorAttr + "]");
                n.each(function() {
                    t(H(this), e)
                })
            })
        }
    }
    function C(e, t, n, r) {
        if (!e)
            return e;
        if (r = r || t, e.indexOf(r.interpolationPrefix || z.interpolationPrefix) < 0)
            return e;
        var o = r.interpolationPrefix ? K.regexEscape(r.interpolationPrefix) : z.interpolationPrefixEscaped, i = r.interpolationSuffix ? K.regexEscape(r.interpolationSuffix) : z.interpolationSuffixEscaped, a = "HTML" + i, s = t.replace && "object" == typeof t.replace ? t.replace : t;
        return K.each(s, function(t, s) {
            var u = n ? n + z.keyseparator + t : t;
            "object" == typeof s && null !== s ? e = C(e, s, u, r) : r.escapeInterpolation || z.escapeInterpolation ? (e = e.replace(new RegExp([o, u, a].join(""), "g"), K.regexReplacementEscape(s)), e = e.replace(new RegExp([o, u, i].join(""), "g"), K.regexReplacementEscape(K.escape(s)))) : e = e.replace(new RegExp([o, u, i].join(""), "g"), K.regexReplacementEscape(s))
        }), e
    }
    function T(e, t) {
        var n = ",", r = "{", o = "}", i = K.extend({}, t);
        for (delete i.postProcess; -1 != e.indexOf(z.reusePrefix) && (q++, !(q > z.maxRecursion)); ) {
            var a = e.lastIndexOf(z.reusePrefix), s = e.indexOf(z.reuseSuffix, a) + z.reuseSuffix.length, u = e.substring(a, s), l = u.replace(z.reusePrefix, "").replace(z.reuseSuffix, "");
            if (a >= s)
                return K.error("there is an missing closing in following translation value", e), "";
            if (-1 != l.indexOf(n)) {
                var c = l.indexOf(n);
                if (-1 != l.indexOf(r, c) && -1 != l.indexOf(o, c)) {
                    var f = l.indexOf(r, c), p = l.indexOf(o, f) + o.length;
                    try {
                        i = K.extend(i, JSON.parse(l.substring(f, p))), l = l.substring(0, c)
                    } catch (d) {
                    }
                }
            }
            var h = D(l, i);
            e = e.replace(u, K.regexReplacementEscape(h))
        }
        return e
    }
    function S(e) {
        return e.context && ("string" == typeof e.context || "number" == typeof e.context)
    }
    function N(e, t) {
        return void 0 !== e.count && "string" != typeof e.count
    }
    function E(e) {
        return void 0 !== e.indefinite_article && "string" != typeof e.indefinite_article && e.indefinite_article
    }
    function L(e, t) {
        t = t || {};
        var n = A(e, t), r = P(e, t);
        return void 0 !== r || r === n
    }
    function j(e, t) {
        return t = t || {}, I ? (q = 0, D.apply(null, arguments)) : (K.log("i18next not finished initialization. you might have called t function before loading resources finished."), t.defaultValue || "")
    }
    function A(e, t) {
        return void 0 !== t.defaultValue ? t.defaultValue : e
    }
    function O() {
        for (var e = [], t = 1; t < arguments.length; t++)
            e.push(arguments[t]);
        return {postProcess: "sprintf",sprintf: e}
    }
    function D(e, t) {
        if (t && "object" != typeof t ? "sprintf" === z.shortcutFunction ? t = O.apply(null, arguments) : "defaultValue" === z.shortcutFunction && (t = {defaultValue: t}) : t = t || {}, "object" == typeof z.defaultVariables && (t = K.extend({}, z.defaultVariables, t)), void 0 === e || null === e || "" === e)
            return "";
        "number" == typeof e && (e = String(e)), "string" == typeof e && (e = [e]);
        var n = e[0];
        if (e.length > 1)
            for (var r = 0; r < e.length && (n = e[r], !L(n, t)); r++)
                ;
        var o, i = A(n, t), a = P(n, t), s = t.lng ? K.toLanguages(t.lng, t.fallbackLng) : $, u = t.ns || z.ns.defaultNs;
        n.indexOf(z.nsseparator) > -1 && (o = n.split(z.nsseparator), u = o[0], n = o[1]), void 0 === a && z.sendMissing && "function" == typeof z.missingKeyHandler && (t.lng ? z.missingKeyHandler(s[0], u, n, i, s) : z.missingKeyHandler(z.lng, u, n, i, s));
        var l;
        l = "string" == typeof z.postProcess && "" !== z.postProcess ? [z.postProcess] : "array" == typeof z.postProcess || "object" == typeof z.postProcess ? z.postProcess : [], "string" == typeof t.postProcess && "" !== t.postProcess ? l = l.concat([t.postProcess]) : ("array" == typeof t.postProcess || "object" == typeof t.postProcess) && (l = l.concat(t.postProcess)), void 0 !== a && l.length && l.forEach(function(e) {
            Q[e] && (a = Q[e](a, n, t))
        });
        var c = i;
        if (i.indexOf(z.nsseparator) > -1 && (o = i.split(z.nsseparator), c = o[1]), c === n && z.parseMissingKey && (i = z.parseMissingKey(i)), void 0 === a && (i = C(i, t), i = T(i, t), l.length)) {
            var f = A(n, t);
            l.forEach(function(e) {
                Q[e] && (a = Q[e](f, n, t))
            })
        }
        return void 0 !== a ? a : i
    }
    function P(e, t) {
        t = t || {};
        var n, r, o = A(e, t), i = $;
        if (!R)
            return o;
        if ("cimode" === i[0].toLowerCase())
            return o;
        if (t.lngs && (i = t.lngs), t.lng && (i = K.toLanguages(t.lng, t.fallbackLng), !R[i[0]])) {
            var a = z.getAsync;
            z.getAsync = !1, M.sync.load(i, z, function(e, t) {
                K.extend(R, t), z.getAsync = a
            })
        }
        var s = t.ns || z.ns.defaultNs;
        if (e.indexOf(z.nsseparator) > -1) {
            var u = e.split(z.nsseparator);
            s = u[0], e = u[1]
        }
        if (S(t)) {
            n = K.extend({}, t), delete n.context, n.defaultValue = z.contextNotFound;
            var l = s + z.nsseparator + e + "_" + t.context;
            if (r = j(l, n), r != z.contextNotFound)
                return C(r, {context: t.context})
        }
        if (N(t, i[0])) {
            n = K.extend({lngs: [i[0]]}, t), delete n.count, n._origLng = n._origLng || n.lng || i[0], delete n.lng, n.defaultValue = z.pluralNotFound;
            var c;
            if (Y.needsPlural(i[0], t.count)) {
                c = s + z.nsseparator + e + z.pluralSuffix;
                var f = Y.get(i[0], t.count);
                f >= 0 ? c = c + "_" + f : 1 === f && (c = s + z.nsseparator + e)
            } else
                c = s + z.nsseparator + e;
            if (r = j(c, n), r != z.pluralNotFound)
                return C(r, {count: t.count,interpolationPrefix: t.interpolationPrefix,interpolationSuffix: t.interpolationSuffix});
            if (!(i.length > 1))
                return n.lng = n._origLng, delete n._origLng, r = j(s + z.nsseparator + e, n), C(r, {count: t.count,interpolationPrefix: t.interpolationPrefix,interpolationSuffix: t.interpolationSuffix});
            var p = i.slice();
            if (p.shift(), t = K.extend(t, {lngs: p}), t._origLng = n._origLng, delete t.lng, r = j(s + z.nsseparator + e, t), r != z.pluralNotFound)
                return r
        }
        if (E(t)) {
            var d = K.extend({}, t);
            delete d.indefinite_article, d.defaultValue = z.indefiniteNotFound;
            var h = s + z.nsseparator + e + (t.count && !N(t, i[0]) || !t.count ? z.indefiniteSuffix : "");
            if (r = j(h, d), r != z.indefiniteNotFound)
                return r
        }
        for (var g, m = e.split(z.keyseparator), v = 0, y = i.length; y > v && void 0 === g; v++) {
            for (var x = i[v], b = 0, w = R[x] && R[x][s]; m[b]; )
                w = w && w[m[b]], b++;
            if (void 0 !== w && (!z.showKeyIfEmpty || "" !== w)) {
                var k = Object.prototype.toString.apply(w);
                if ("string" == typeof w)
                    w = C(w, t), w = T(w, t);
                else if ("[object Array]" !== k || z.returnObjectTrees || t.returnObjectTrees) {
                    if (null === w && z.fallbackOnNull === !0)
                        w = void 0;
                    else if (null !== w)
                        if (z.returnObjectTrees || t.returnObjectTrees) {
                            if ("[object Number]" !== k && "[object Function]" !== k && "[object RegExp]" !== k) {
                                var L = "[object Array]" === k ? [] : {};
                                K.each(w, function(n) {
                                    L[n] = D(s + z.nsseparator + e + z.keyseparator + n, t)
                                }), w = L
                            }
                        } else
                            z.objectTreeKeyHandler && "function" == typeof z.objectTreeKeyHandler ? w = z.objectTreeKeyHandler(e, w, x, s, t) : (w = "key '" + s + ":" + e + " (" + x + ")' returned an object instead of string.", K.log(w))
                } else
                    w = w.join("\n"), w = C(w, t), w = T(w, t);
                "string" == typeof w && "" === w.trim() && z.fallbackOnEmpty === !0 && (w = void 0), g = w
            }
        }
        if (void 0 === g && !t.isFallbackLookup && (z.fallbackToDefaultNS === !0 || z.fallbackNS && z.fallbackNS.length > 0)) {
            if (t.isFallbackLookup = !0, z.fallbackNS.length) {
                for (var O = 0, F = z.fallbackNS.length; F > O; O++)
                    if (g = P(z.fallbackNS[O] + z.nsseparator + e, t), g || "" === g && z.fallbackOnEmpty === !1) {
                        var _ = g.indexOf(z.nsseparator) > -1 ? g.split(z.nsseparator)[1] : g, H = o.indexOf(z.nsseparator) > -1 ? o.split(z.nsseparator)[1] : o;
                        if (_ !== H)
                            break
                    }
            } else
                t.ns = z.ns.defaultNs, g = P(e, t);
            t.isFallbackLookup = !1
        }
        return g
    }
    function F() {
        var e, t = z.lngWhitelist || [], n = [];
        if ("undefined" != typeof window && !function() {
            for (var e = window.location.search.substring(1), t = e.split("&"), r = 0; r < t.length; r++) {
                var o = t[r].indexOf("=");
                if (o > 0) {
                    var i = t[r].substring(0, o);
                    i == z.detectLngQS && n.push(t[r].substring(o + 1))
                }
            }
        }(), z.useCookie && "undefined" != typeof document) {
            var r = K.cookie.read(z.cookieName);
            r && n.push(r)
        }
        if (z.detectLngFromLocalStorage && "undefined" != typeof window && window.localStorage) {
            var o = K.localStorage.getItem("i18next_lng");
            o && n.push(o)
        }
        if ("undefined" != typeof navigator) {
            if (navigator.languages)
                for (var i = 0; i < navigator.languages.length; i++)
                    n.push(navigator.languages[i]);
            navigator.userLanguage && n.push(navigator.userLanguage), navigator.language && n.push(navigator.language)
        }
        return function() {
            for (var r = 0; r < n.length; r++) {
                var o = n[r];
                if (o.indexOf("-") > -1) {
                    var i = o.split("-");
                    o = z.lowerCaseLng ? i[0].toLowerCase() + "-" + i[1].toLowerCase() : i[0].toLowerCase() + "-" + i[1].toUpperCase()
                }
                if (0 === t.length || t.indexOf(o) > -1) {
                    e = o;
                    break
                }
            }
        }(), e || (e = z.fallbackLng[0]), e
    }
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        "use strict";
        if (null == this)
            throw new TypeError;
        var t = Object(this), n = t.length >>> 0;
        if (0 === n)
            return -1;
        var r = 0;
        if (arguments.length > 0 && (r = Number(arguments[1]), r != r ? r = 0 : 0 != r && r != 1 / 0 && r != -(1 / 0) && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))), r >= n)
            return -1;
        for (var o = r >= 0 ? r : Math.max(n - Math.abs(r), 0); n > o; o++)
            if (o in t && t[o] === e)
                return o;
        return -1
    }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(e) {
        "use strict";
        if (null == this)
            throw new TypeError;
        var t = Object(this), n = t.length >>> 0;
        if (0 === n)
            return -1;
        var r = n;
        arguments.length > 1 && (r = Number(arguments[1]), r != r ? r = 0 : 0 != r && r != 1 / 0 && r != -(1 / 0) && (r = (r > 0 || -1) * Math.floor(Math.abs(r))));
        for (var o = r >= 0 ? Math.min(r, n - 1) : n - Math.abs(r); o >= 0; o--)
            if (o in t && t[o] === e)
                return o;
        return -1
    }), "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    });
    var _, H = e.jQuery || e.Zepto, M = {}, R = {}, q = 0, $ = [], I = !1, B = {}, W = null;
    "undefined" != typeof module && module.exports ? module.exports = M : (H && (H.i18n = H.i18n || M), e.i18n && (W = e.i18n), e.i18n = M), B = {load: function(e, t, n) {
            t.useLocalStorage ? B._loadLocal(e, t, function(r, o) {
                for (var i = [], a = 0, s = e.length; s > a; a++)
                    o[e[a]] || i.push(e[a]);
                i.length > 0 ? B._fetch(i, t, function(e, t) {
                    K.extend(o, t), B._storeLocal(t), n(null, o)
                }) : n(null, o)
            }) : B._fetch(e, t, function(e, t) {
                n(null, t)
            })
        },_loadLocal: function(e, t, n) {
            var r = {}, o = (new Date).getTime();
            if (window.localStorage) {
                var i = e.length;
                K.each(e, function(e, a) {
                    var s = K.localStorage.getItem("res_" + a);
                    s && (s = JSON.parse(s), s.i18nStamp && s.i18nStamp + t.localStorageExpirationTime > o && (r[a] = s)), i--, 0 === i && n(null, r)
                })
            }
        },_storeLocal: function(e) {
            if (window.localStorage)
                for (var t in e)
                    e[t].i18nStamp = (new Date).getTime(), K.localStorage.setItem("res_" + t, JSON.stringify(e[t]))
        },_fetch: function(e, t, n) {
            var r = t.ns, o = {};
            if (t.dynamicLoad) {
                var i = function(e, t) {
                    n(null, t)
                };
                if ("function" == typeof t.customLoad)
                    t.customLoad(e, r.namespaces, t, i);
                else {
                    var a = C(t.resGetPath, {lng: e.join("+"),ns: r.namespaces.join("+")});
                    K.ajax({url: a,cache: t.cache,success: function(e, t, n) {
                            K.log("loaded: " + a), i(null, e)
                        },error: function(e, t, n) {
                            K.log("failed loading: " + a), i("failed loading resource.json error: " + n)
                        },dataType: "json",async: t.getAsync,timeout: t.ajaxTimeout})
                }
            } else {
                var s, u = r.namespaces.length * e.length;
                K.each(r.namespaces, function(r, i) {
                    K.each(e, function(e, r) {
                        var a = function(e, t) {
                            e && (s = s || [], s.push(e)), o[r] = o[r] || {}, o[r][i] = t, u--, 0 === u && n(s, o)
                        };
                        "function" == typeof t.customLoad ? t.customLoad(r, i, t, a) : B._fetchOne(r, i, t, a)
                    })
                })
            }
        },_fetchOne: function(e, t, n, r) {
            var o = C(n.resGetPath, {lng: e,ns: t});
            K.ajax({url: o,cache: n.cache,success: function(e, t, n) {
                    K.log("loaded: " + o), r(null, e)
                },error: function(e, t, n) {
                    if (t && 200 == t || e && e.status && 200 == e.status)
                        K.error("There is a typo in: " + o);
                    else if (t && 404 == t || e && e.status && 404 == e.status)
                        K.log("Does not exist: " + o);
                    else {
                        var i = t ? t : e && e.status ? e.status : null;
                        K.log(i + " when loading " + o)
                    }
                    r(n, {})
                },dataType: "json",async: n.getAsync,timeout: n.ajaxTimeout})
        },postMissing: function(e, t, n, r, o) {
            var i = {};
            i[n] = r;
            var a = [];
            if ("fallback" === z.sendMissingTo && z.fallbackLng[0] !== !1)
                for (var s = 0; s < z.fallbackLng.length; s++)
                    a.push({lng: z.fallbackLng[s],url: C(z.resPostPath, {lng: z.fallbackLng[s],ns: t})});
            else if ("current" === z.sendMissingTo || "fallback" === z.sendMissingTo && z.fallbackLng[0] === !1)
                a.push({lng: e,url: C(z.resPostPath, {lng: e,ns: t})});
            else if ("all" === z.sendMissingTo)
                for (var s = 0, u = o.length; u > s; s++)
                    a.push({lng: o[s],url: C(z.resPostPath, {lng: o[s],ns: t})});
            for (var l = 0, c = a.length; c > l; l++) {
                var f = a[l];
                K.ajax({url: f.url,type: z.sendType,data: i,success: function(e, o, i) {
                        K.log("posted missing key '" + n + "' to: " + f.url);
                        for (var a = n.split("."), s = 0, u = R[f.lng][t]; a[s]; )
                            u = u[a[s]] = s === a.length - 1 ? r : u[a[s]] || {}, s++
                    },error: function(e, t, r) {
                        K.log("failed posting missing key '" + n + "' to: " + f.url)
                    },dataType: "json",async: z.postAsync,timeout: z.ajaxTimeout})
            }
        },reload: b};
    var z = {lng: void 0,load: "all",preload: [],lowerCaseLng: !1,returnObjectTrees: !1,fallbackLng: ["dev"],fallbackNS: [],detectLngQS: "setLng",detectLngFromLocalStorage: !1,ns: {namespaces: ["translation"],defaultNs: "translation"},fallbackOnNull: !0,fallbackOnEmpty: !1,fallbackToDefaultNS: !1,showKeyIfEmpty: !1,nsseparator: ":",keyseparator: ".",selectorAttr: "data-i18n",debug: !1,resGetPath: "locales/__lng__/__ns__.json",resPostPath: "locales/add/__lng__/__ns__",getAsync: !0,postAsync: !0,resStore: void 0,useLocalStorage: !1,localStorageExpirationTime: 6048e5,dynamicLoad: !1,sendMissing: !1,sendMissingTo: "fallback",sendType: "POST",interpolationPrefix: "__",interpolationSuffix: "__",defaultVariables: !1,reusePrefix: "$t(",reuseSuffix: ")",pluralSuffix: "_plural",pluralNotFound: ["plural_not_found", Math.random()].join(""),contextNotFound: ["context_not_found", Math.random()].join(""),escapeInterpolation: !1,indefiniteSuffix: "_indefinite",indefiniteNotFound: ["indefinite_not_found", Math.random()].join(""),setJqueryExt: !0,defaultValueFromContent: !0,useDataAttrOptions: !1,cookieExpirationTime: void 0,useCookie: !0,cookieName: "i18next",cookieDomain: void 0,objectTreeKeyHandler: void 0,postProcess: void 0,parseMissingKey: void 0,missingKeyHandler: B.postMissing,ajaxTimeout: 0,shortcutFunction: "sprintf"}, X = {"&": "&amp;","<": "&lt;",">": "&gt;",'"': "&quot;","'": "&#39;","/": "&#x2F;"}, V = {create: function(e, t, n, r) {
            var o;
            if (n) {
                var i = new Date;
                i.setTime(i.getTime() + 60 * n * 1e3), o = "; expires=" + i.toGMTString()
            } else
                o = "";
            r = r ? "domain=" + r + ";" : "", document.cookie = e + "=" + t + o + ";" + r + "path=/"
        },read: function(e) {
            for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                for (var o = n[r]; " " == o.charAt(0); )
                    o = o.substring(1, o.length);
                if (0 === o.indexOf(t))
                    return o.substring(t.length, o.length)
            }
            return null
        },remove: function(e) {
            this.create(e, "", -1)
        }}, U = {create: function(e, t, n, r) {
        },read: function(e) {
            return null
        },remove: function(e) {
        }}, K = {extend: H ? H.extend : t,deepExtend: n,each: H ? H.each : r,ajax: H ? H.ajax : "undefined" != typeof document ? i : function() {
        },cookie: "undefined" != typeof document ? V : U,detectLanguage: F,escape: o,log: function(e) {
            z.debug && "undefined" != typeof console && console.log(e)
        },error: function(e) {
            "undefined" != typeof console && console.error(e)
        },getCountyIndexOfLng: function(e) {
            var t = 0;
            return ("nb-NO" === e || "nn-NO" === e || "nb-no" === e || "nn-no" === e) && (t = 1), t
        },toLanguages: function(e) {
            function t(e) {
                var t = e;
                if ("string" == typeof e && e.indexOf("-") > -1) {
                    var n = e.split("-");
                    t = z.lowerCaseLng ? n[0].toLowerCase() + "-" + n[1].toLowerCase() : n[0].toLowerCase() + "-" + n[1].toUpperCase()
                } else
                    t = z.lowerCaseLng ? e.toLowerCase() : e;
                return t
            }
            var n = this.log, r = [], o = z.lngWhitelist || !1, i = function(e) {
                !o || o.indexOf(e) > -1 ? r.push(e) : n("rejecting non-whitelisted language: " + e)
            };
            if ("string" == typeof e && e.indexOf("-") > -1) {
                var a = e.split("-");
                "unspecific" !== z.load && i(t(e)), "current" !== z.load && i(t(a[this.getCountyIndexOfLng(e)]))
            } else
                i(t(e));
            for (var s = 0; s < z.fallbackLng.length; s++)
                -1 === r.indexOf(z.fallbackLng[s]) && z.fallbackLng[s] && r.push(t(z.fallbackLng[s]));
            return r
        },regexEscape: function(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },regexReplacementEscape: function(e) {
            return "string" == typeof e ? e.replace(/\$/g, "$$$$") : e
        },localStorage: {setItem: function(e, t) {
                if (window.localStorage)
                    try {
                        window.localStorage.setItem(e, t)
                    } catch (n) {
                        K.log('failed to set value for key "' + e + '" to localStorage.')
                    }
            },getItem: function(e, t) {
                if (window.localStorage)
                    try {
                        return window.localStorage.getItem(e, t)
                    } catch (n) {
                        return void K.log('failed to get value for key "' + e + '" from localStorage.')
                    }
            }}};
    K.applyReplacement = C;
    var J = [["ach", "Acholi", [1, 2], 1], ["af", "Afrikaans", [1, 2], 2], ["ak", "Akan", [1, 2], 1], ["am", "Amharic", [1, 2], 1], ["an", "Aragonese", [1, 2], 2], ["ar", "Arabic", [0, 1, 2, 3, 11, 100], 5], ["arn", "Mapudungun", [1, 2], 1], ["ast", "Asturian", [1, 2], 2], ["ay", "Aymará", [1], 3], ["az", "Azerbaijani", [1, 2], 2], ["be", "Belarusian", [1, 2, 5], 4], ["bg", "Bulgarian", [1, 2], 2], ["bn", "Bengali", [1, 2], 2], ["bo", "Tibetan", [1], 3], ["br", "Breton", [1, 2], 1], ["bs", "Bosnian", [1, 2, 5], 4], ["ca", "Catalan", [1, 2], 2], ["cgg", "Chiga", [1], 3], ["cs", "Czech", [1, 2, 5], 6], ["csb", "Kashubian", [1, 2, 5], 7], ["cy", "Welsh", [1, 2, 3, 8], 8], ["da", "Danish", [1, 2], 2], ["de", "German", [1, 2], 2], ["dev", "Development Fallback", [1, 2], 2], ["dz", "Dzongkha", [1], 3], ["el", "Greek", [1, 2], 2], ["en", "English", [1, 2], 2], ["eo", "Esperanto", [1, 2], 2], ["es", "Spanish", [1, 2], 2], ["es_ar", "Argentinean Spanish", [1, 2], 2], ["et", "Estonian", [1, 2], 2], ["eu", "Basque", [1, 2], 2], ["fa", "Persian", [1], 3], ["fi", "Finnish", [1, 2], 2], ["fil", "Filipino", [1, 2], 1], ["fo", "Faroese", [1, 2], 2], ["fr", "French", [1, 2], 9], ["fur", "Friulian", [1, 2], 2], ["fy", "Frisian", [1, 2], 2], ["ga", "Irish", [1, 2, 3, 7, 11], 10], ["gd", "Scottish Gaelic", [1, 2, 3, 20], 11], ["gl", "Galician", [1, 2], 2], ["gu", "Gujarati", [1, 2], 2], ["gun", "Gun", [1, 2], 1], ["ha", "Hausa", [1, 2], 2], ["he", "Hebrew", [1, 2], 2], ["hi", "Hindi", [1, 2], 2], ["hr", "Croatian", [1, 2, 5], 4], ["hu", "Hungarian", [1, 2], 2], ["hy", "Armenian", [1, 2], 2], ["ia", "Interlingua", [1, 2], 2], ["id", "Indonesian", [1], 3], ["is", "Icelandic", [1, 2], 12], ["it", "Italian", [1, 2], 2], ["ja", "Japanese", [1], 3], ["jbo", "Lojban", [1], 3], ["jv", "Javanese", [0, 1], 13], ["ka", "Georgian", [1], 3], ["kk", "Kazakh", [1], 3], ["km", "Khmer", [1], 3], ["kn", "Kannada", [1, 2], 2], ["ko", "Korean", [1], 3], ["ku", "Kurdish", [1, 2], 2], ["kw", "Cornish", [1, 2, 3, 4], 14], ["ky", "Kyrgyz", [1], 3], ["lb", "Letzeburgesch", [1, 2], 2], ["ln", "Lingala", [1, 2], 1], ["lo", "Lao", [1], 3], ["lt", "Lithuanian", [1, 2, 10], 15], ["lv", "Latvian", [1, 2, 0], 16], ["mai", "Maithili", [1, 2], 2], ["mfe", "Mauritian Creole", [1, 2], 1], ["mg", "Malagasy", [1, 2], 1], ["mi", "Maori", [1, 2], 1], ["mk", "Macedonian", [1, 2], 17], ["ml", "Malayalam", [1, 2], 2], ["mn", "Mongolian", [1, 2], 2], ["mnk", "Mandinka", [0, 1, 2], 18], ["mr", "Marathi", [1, 2], 2], ["ms", "Malay", [1], 3], ["mt", "Maltese", [1, 2, 11, 20], 19], ["nah", "Nahuatl", [1, 2], 2], ["nap", "Neapolitan", [1, 2], 2], ["nb", "Norwegian Bokmal", [1, 2], 2], ["ne", "Nepali", [1, 2], 2], ["nl", "Dutch", [1, 2], 2], ["nn", "Norwegian Nynorsk", [1, 2], 2], ["no", "Norwegian", [1, 2], 2], ["nso", "Northern Sotho", [1, 2], 2], ["oc", "Occitan", [1, 2], 1], ["or", "Oriya", [2, 1], 2], ["pa", "Punjabi", [1, 2], 2], ["pap", "Papiamento", [1, 2], 2], ["pl", "Polish", [1, 2, 5], 7], ["pms", "Piemontese", [1, 2], 2], ["ps", "Pashto", [1, 2], 2], ["pt", "Portuguese", [1, 2], 2], ["pt_br", "Brazilian Portuguese", [1, 2], 2], ["rm", "Romansh", [1, 2], 2], ["ro", "Romanian", [1, 2, 20], 20], ["ru", "Russian", [1, 2, 5], 4], ["sah", "Yakut", [1], 3], ["sco", "Scots", [1, 2], 2], ["se", "Northern Sami", [1, 2], 2], ["si", "Sinhala", [1, 2], 2], ["sk", "Slovak", [1, 2, 5], 6], ["sl", "Slovenian", [5, 1, 2, 3], 21], ["so", "Somali", [1, 2], 2], ["son", "Songhay", [1, 2], 2], ["sq", "Albanian", [1, 2], 2], ["sr", "Serbian", [1, 2, 5], 4], ["su", "Sundanese", [1], 3], ["sv", "Swedish", [1, 2], 2], ["sw", "Swahili", [1, 2], 2], ["ta", "Tamil", [1, 2], 2], ["te", "Telugu", [1, 2], 2], ["tg", "Tajik", [1, 2], 1], ["th", "Thai", [1], 3], ["ti", "Tigrinya", [1, 2], 1], ["tk", "Turkmen", [1, 2], 2], ["tr", "Turkish", [1, 2], 1], ["tt", "Tatar", [1], 3], ["ug", "Uyghur", [1], 3], ["uk", "Ukrainian", [1, 2, 5], 4], ["ur", "Urdu", [1, 2], 2], ["uz", "Uzbek", [1, 2], 1], ["vi", "Vietnamese", [1], 3], ["wa", "Walloon", [1, 2], 1], ["wo", "Wolof", [1], 3], ["yo", "Yoruba", [1, 2], 2], ["zh", "Chinese", [1], 3]], G = {1: function(e) {
            return Number(e > 1)
        },2: function(e) {
            return Number(1 != e)
        },3: function(e) {
            return 0
        },4: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
        },5: function(e) {
            return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5)
        },6: function(e) {
            return Number(1 == e ? 0 : e >= 2 && 4 >= e ? 1 : 2)
        },7: function(e) {
            return Number(1 == e ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
        },8: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
        },9: function(e) {
            return Number(e >= 2)
        },10: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 7 > e ? 2 : 11 > e ? 3 : 4)
        },11: function(e) {
            return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && 20 > e ? 2 : 3)
        },12: function(e) {
            return Number(e % 10 != 1 || e % 100 == 11)
        },13: function(e) {
            return Number(0 !== e)
        },14: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
        },15: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
        },16: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
        },17: function(e) {
            return Number(1 == e || e % 10 == 1 ? 0 : 1)
        },18: function(e) {
            return Number(1 == e ? 1 : 2)
        },19: function(e) {
            return Number(1 == e ? 0 : 0 === e || e % 100 > 1 && 11 > e % 100 ? 1 : e % 100 > 10 && 20 > e % 100 ? 2 : 3)
        },20: function(e) {
            return Number(1 == e ? 0 : 0 === e || e % 100 > 0 && 20 > e % 100 ? 1 : 2)
        },21: function(e) {
            return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
        }}, Y = {rules: function() {
            var e, t = {};
            for (e = J.length; e--; )
                t[J[e][0]] = {name: J[e][1],numbers: J[e][2],plurals: G[J[e][3]]};
            return t
        }(),addRule: function(e, t) {
            Y.rules[e] = t
        },setCurrentLng: function(e) {
            if (!Y.currentRule || Y.currentRule.lng !== e) {
                var t = e.split("-");
                Y.currentRule = {lng: e,rule: Y.rules[t[0]]}
            }
        },needsPlural: function(e, t) {
            var n, r = e.split("-");
            return n = Y.currentRule && Y.currentRule.lng === e ? Y.currentRule.rule : Y.rules[r[K.getCountyIndexOfLng(e)]], n && n.numbers.length <= 1 ? !1 : 1 !== this.get(e, t)
        },get: function(e, t) {
            function n(t, n) {
                var r;
                if (r = Y.currentRule && Y.currentRule.lng === e ? Y.currentRule.rule : Y.rules[t]) {
                    var o;
                    o = r.plurals(r.noAbs ? n : Math.abs(n));
                    var i = r.numbers[o];
                    return 2 === r.numbers.length && 1 === r.numbers[0] && (2 === i ? i = -1 : 1 === i && (i = 1)), i
                }
                return 1 === n ? "1" : "-1"
            }
            var r = e.split("-");
            return n(r[K.getCountyIndexOfLng(e)], t)
        }}, Q = {}, Z = function(e, t) {
        Q[e] = t
    }, ee = function() {
        function e(e) {
            return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
        }
        function t(e, t) {
            for (var n = []; t > 0; n[--t] = e)
                ;
            return n.join("")
        }
        var n = function() {
            return n.cache.hasOwnProperty(arguments[0]) || (n.cache[arguments[0]] = n.parse(arguments[0])), n.format.call(null, n.cache[arguments[0]], arguments)
        };
        return n.format = function(n, r) {
            var o, i, a, s, u, l, c, f = 1, p = n.length, d = "", h = [];
            for (i = 0; p > i; i++)
                if (d = e(n[i]), "string" === d)
                    h.push(n[i]);
                else if ("array" === d) {
                    if (s = n[i], s[2])
                        for (o = r[f], a = 0; a < s[2].length; a++) {
                            if (!o.hasOwnProperty(s[2][a]))
                                throw ee('[sprintf] property "%s" does not exist', s[2][a]);
                            o = o[s[2][a]]
                        }
                    else
                        o = s[1] ? r[s[1]] : r[f++];
                    if (/[^s]/.test(s[8]) && "number" != e(o))
                        throw ee("[sprintf] expecting number but found %s", e(o));
                    switch (s[8]) {
                        case "b":
                            o = o.toString(2);
                            break;
                        case "c":
                            o = String.fromCharCode(o);
                            break;
                        case "d":
                            o = parseInt(o, 10);
                            break;
                        case "e":
                            o = s[7] ? o.toExponential(s[7]) : o.toExponential();
                            break;
                        case "f":
                            o = s[7] ? parseFloat(o).toFixed(s[7]) : parseFloat(o);
                            break;
                        case "o":
                            o = o.toString(8);
                            break;
                        case "s":
                            o = (o = String(o)) && s[7] ? o.substring(0, s[7]) : o;
                            break;
                        case "u":
                            o = Math.abs(o);
                            break;
                        case "x":
                            o = o.toString(16);
                            break;
                        case "X":
                            o = o.toString(16).toUpperCase()
                    }
                    o = /[def]/.test(s[8]) && s[3] && o >= 0 ? "+" + o : o, l = s[4] ? "0" == s[4] ? "0" : s[4].charAt(1) : " ", c = s[6] - String(o).length, u = s[6] ? t(l, c) : "", h.push(s[5] ? o + u : u + o)
                }
            return h.join("")
        }, n.cache = {}, n.parse = function(e) {
            for (var t = e, n = [], r = [], o = 0; t; ) {
                if (null !== (n = /^[^\x25]+/.exec(t)))
                    r.push(n[0]);
                else if (null !== (n = /^\x25{2}/.exec(t)))
                    r.push("%");
                else {
                    if (null === (n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)))
                        throw "[sprintf] huh?";
                    if (n[2]) {
                        o |= 1;
                        var i = [], a = n[2], s = [];
                        if (null === (s = /^([a-z_][a-z_\d]*)/i.exec(a)))
                            throw "[sprintf] huh?";
                        for (i.push(s[1]); "" !== (a = a.substring(s[0].length)); )
                            if (null !== (s = /^\.([a-z_][a-z_\d]*)/i.exec(a)))
                                i.push(s[1]);
                            else {
                                if (null === (s = /^\[(\d+)\]/.exec(a)))
                                    throw "[sprintf] huh?";
                                i.push(s[1])
                            }
                        n[2] = i
                    } else
                        o |= 2;
                    if (3 === o)
                        throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                    r.push(n)
                }
                t = t.substring(n[0].length)
            }
            return r
        }, n
    }(), te = function(e, t) {
        return t.unshift(e), ee.apply(null, t)
    };
    Z("sprintf", function(e, t, n) {
        return n.sprintf ? "[object Array]" === Object.prototype.toString.apply(n.sprintf) ? te(e, n.sprintf) : "object" == typeof n.sprintf ? ee(e, n.sprintf) : e : e
    }), M.init = a, M.isInitialized = s, M.setLng = y, M.preload = u, M.addResourceBundle = l, M.hasResourceBundle = c, M.getResourceBundle = f, M.addResource = d, M.addResources = h, M.removeResourceBundle = p, M.loadNamespace = m, M.loadNamespaces = v, M.setDefaultNamespace = g, M.t = j, M.translate = j, M.exists = L, M.detectLanguage = K.detectLanguage, M.pluralExtensions = Y, M.sync = B, M.functions = K, M.lng = x, M.addPostProcessor = Z, M.applyReplacement = K.applyReplacement, M.options = z, M.noConflict = w
}("undefined" == typeof exports ? window : exports);