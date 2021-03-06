!
    function(e, t) {
        function n() {
            var e = m.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function i(e) {
            var t = h[e[f]];
            return t || (t = {},
                p++, e[f] = p, h[p] = t),
                t
        }
        function r(e, n, r) {
            return n || (n = t),
                l ? n.createElement(e) : (r || (r = i(n)), n = r.cache[e] ? r.cache[e].cloneNode() : d.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), n.canHaveChildren && !u.test(e) ? r.frag.appendChild(n) : n)
        }
        function o(e, t) {
            t.cache || (t.cache = {},
                t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()),
                e.createElement = function(n) {
                    return m.shivMethods ? r(n, e, t) : t.createElem(n)
                },
                e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g,
                        function(e) {
                            return t.createElem(e),
                                t.frag.createElement(e),
                            'c("' + e + '")'
                        }) + ");return n}")(m, t.frag)
        }
        function a(e) {
            e || (e = t);
            var n = i(e);
            if (m.shivCSS && !s && !n.hasCSS) {
                var r, a = e;
                r = a.createElement("p"),
                    a = a.getElementsByTagName("head")[0] || a.documentElement,
                    r.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>",
                    r = a.insertBefore(r.lastChild, a.firstChild),
                    n.hasCSS = !!r
            }
            return l || o(e, n),
                e
        }
        var s, l, c = e.html5 || {},
            u = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            f = "_html5shiv",
            p = 0,
            h = {}; !
            function() {
                try {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>",
                        s = "hidden" in e;
                    var n;
                    if (! (n = 1 == e.childNodes.length)) {
                        t.createElement("a");
                        var i = t.createDocumentFragment();
                        n = "undefined" == typeof i.cloneNode || "undefined" == typeof i.createDocumentFragment || "undefined" == typeof i.createElement
                    }
                    l = n
                } catch(r) {
                    l = s = !0
                }
            } ();
        var m = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== c.shivCSS,
            supportsUnknownElements: l,
            shivMethods: !1 !== c.shivMethods,
            type: "default",
            shivDocument: a,
            createElement: r,
            createDocumentFragment: function(e, r) {
                if (e || (e = t), l) return e.createDocumentFragment();
                for (var r = r || i(e), o = r.frag.cloneNode(), a = 0, s = n(), c = s.length; a < c; a++) o.createElement(s[a]);
                return o
            }
        };
        e.html5 = m,
            a(t)
    } (this, document),
"function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(e) {
    for (var t = 0; t < this.length; t++) e.apply(this, [this[t], t, this])
}),
Array.prototype.map || (Array.prototype.map = function(e, t) {
    var n, i, r;
    if (null == this) throw new TypeError(" this is null or not defined");
    var o = Object(this),
        a = o.length >>> 0;
    if ("function" != typeof e) throw new TypeError(e + " is not a function");
    for (arguments.length > 1 && (n = t), i = new Array(a), r = 0; r < a;) {
        var s, l;
        r in o && (s = o[r], l = e.call(n, s, r, o), i[r] = l),
            r++
    }
    return i
}),
Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    for (var n = t || 0,
             i = this.length; n < i; n++) if (this[n] === e) return n;
    return - 1
}),
document.querySelectorAll || (document.querySelectorAll = function(e) {
    var t, n = document.createElement("style"),
        i = [];
    for (document.documentElement.firstChild.appendChild(n), document._qsa = [], n.styleSheet.cssText = e + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", window.scrollBy(0, 0), n.parentNode.removeChild(n); document._qsa.length;) t = document._qsa.shift(),
        t.style.removeAttribute("x-qsa"),
        i.push(t);
    return document._qsa = null,
        i
}),
document.querySelector || (document.querySelector = function(e) {
    var t = document.querySelectorAll(e);
    return t.length ? t[0] : null
}),
"undefined" == typeof Element.prototype.addEventListener && (Element.prototype.addEventListener = function(e, t) {
    return e = "on" + e,
        this.attachEvent(e, t)
}),
    !
        function(e, t) {
            function n(e) {
                var t = e.length,
                    n = le.type(e);
                return ! le.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e))
            }
            function i(e) {
                var t = Ce[e] = {};
                return le.each(e.match(ue) || [],
                    function(e, n) {
                        t[n] = !0
                    }),
                    t
            }
            function r(e, n, i, r) {
                if (le.acceptData(e)) {
                    var o, a, s = le.expando,
                        l = "string" == typeof n,
                        c = e.nodeType,
                        u = c ? le.cache: e,
                        d = c ? e[s] : e[s] && s;
                    if (d && u[d] && (r || u[d].data) || !l || i !== t) return d || (c ? e[s] = d = Z.pop() || le.guid++:d = s),
                    u[d] || (u[d] = {},
                    c || (u[d].toJSON = le.noop)),
                    "object" != typeof n && "function" != typeof n || (r ? u[d] = le.extend(u[d], n) : u[d].data = le.extend(u[d].data, n)),
                        o = u[d],
                    r || (o.data || (o.data = {}), o = o.data),
                    i !== t && (o[le.camelCase(n)] = i),
                        l ? (a = o[n], null == a && (a = o[le.camelCase(n)])) : a = o,
                        a
                }
            }
            function o(e, t, n) {
                if (le.acceptData(e)) {
                    var i, r, o, a = e.nodeType,
                        l = a ? le.cache: e,
                        c = a ? e[le.expando] : le.expando;
                    if (l[c]) {
                        if (t && (o = n ? l[c] : l[c].data)) {
                            le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in o ? t = [t] : (t = le.camelCase(t), t = t in o ? [t] : t.split(" "));
                            for (i = 0, r = t.length; i < r; i++) delete o[t[i]];
                            if (! (n ? s: le.isEmptyObject)(o)) return
                        } (n || (delete l[c].data, s(l[c]))) && (a ? le.cleanData([e], !0) : le.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
                    }
                }
            }
            function a(e, n, i) {
                if (i === t && 1 === e.nodeType) {
                    var r = "data-" + n.replace(Se, "-$1").toLowerCase();
                    if (i = e.getAttribute(r), "string" == typeof i) {
                        try {
                            i = "true" === i || "false" !== i && ("null" === i ? null: +i + "" === i ? +i: _e.test(i) ? le.parseJSON(i) : i)
                        } catch(o) {}
                        le.data(e, n, i)
                    } else i = t
                }
                return i
            }
            function s(e) {
                var t;
                for (t in e) if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
                return ! 0
            }
            function l() {
                return ! 0
            }
            function c() {
                return ! 1
            }
            function u(e, t) {
                do e = e[t];
                while (e && 1 !== e.nodeType);
                return e
            }
            function d(e, t, n) {
                if (t = t || 0, le.isFunction(t)) return le.grep(e,
                    function(e, i) {
                        var r = !!t.call(e, i, e);
                        return r === n
                    });
                if (t.nodeType) return le.grep(e,
                    function(e) {
                        return e === t === n
                    });
                if ("string" == typeof t) {
                    var i = le.grep(e,
                        function(e) {
                            return 1 === e.nodeType
                        });
                    if ($e.test(t)) return le.filter(t, i, !n);
                    t = le.filter(t, i)
                }
                return le.grep(e,
                    function(e) {
                        return le.inArray(e, t) >= 0 === n
                    })
            }
            function f(e) {
                var t = Ue.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement) for (; t.length;) n.createElement(t.pop());
                return n
            }
            function p(e, t) {
                return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
            }
            function h(e) {
                var t = e.getAttributeNode("type");
                return e.type = (t && t.specified) + "/" + e.type,
                    e
            }
            function m(e) {
                var t = rt.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                    e
            }
            function g(e, t) {
                for (var n, i = 0; null != (n = e[i]); i++) le._data(n, "globalEval", !t || le._data(t[i], "globalEval"))
            }
            function v(e, t) {
                if (1 === t.nodeType && le.hasData(e)) {
                    var n, i, r, o = le._data(e),
                        a = le._data(t, o),
                        s = o.events;
                    if (s) {
                        delete a.handle,
                            a.events = {};
                        for (n in s) for (i = 0, r = s[n].length; i < r; i++) le.event.add(t, n, s[n][i])
                    }
                    a.data && (a.data = le.extend({},
                        a.data))
                }
            }
            function y(e, t) {
                var n, i, r;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !le.support.noCloneEvent && t[le.expando]) {
                        r = le._data(t);
                        for (i in r.events) le.removeEvent(t, i, r.handle);
                        t.removeAttribute(le.expando)
                    }
                    "script" === n && t.text !== e.text ? (h(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), le.support.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
            }
            function x(e, n) {
                var i, r, o = 0,
                    a = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== X ? e.querySelectorAll(n || "*") : t;
                if (!a) for (a = [], i = e.childNodes || e; null != (r = i[o]); o++) ! n || le.nodeName(r, n) ? a.push(r) : le.merge(a, x(r, n));
                return n === t || n && le.nodeName(e, n) ? le.merge([e], a) : a
            }
            function b(e) {
                tt.test(e.type) && (e.defaultChecked = e.checked)
            }
            function k(e, t) {
                if (t in e) return t;
                for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = _t.length; r--;) if (t = _t[r] + n, t in e) return t;
                return i
            }
            function w(e, t) {
                return e = t || e,
                "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
            }
            function C(e, t) {
                for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++) i = e[a],
                i.style && (o[a] = le._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && w(i) && (o[a] = le._data(i, "olddisplay", j(i.nodeName)))) : o[a] || (r = w(i), (n && "none" !== n || !r) && le._data(i, "olddisplay", r ? n: le.css(i, "display"))));
                for (a = 0; a < s; a++) i = e[a],
                i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "": "none"));
                return e
            }
            function _(e, t, n) {
                var i = vt.exec(t);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
            }
            function S(e, t, n, i, r) {
                for (var o = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)"margin" === n && (a += le.css(e, n + Ct[o], !0, r)),
                    i ? ("content" === n && (a -= le.css(e, "padding" + Ct[o], !0, r)), "margin" !== n && (a -= le.css(e, "border" + Ct[o] + "Width", !0, r))) : (a += le.css(e, "padding" + Ct[o], !0, r), "padding" !== n && (a += le.css(e, "border" + Ct[o] + "Width", !0, r)));
                return a
            }
            function T(e, t, n) {
                var i = !0,
                    r = "width" === t ? e.offsetWidth: e.offsetHeight,
                    o = ut(e),
                    a = le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, o);
                if (r <= 0 || null == r) {
                    if (r = dt(e, t, o), (r < 0 || null == r) && (r = e.style[t]), yt.test(r)) return r;
                    i = a && (le.support.boxSizingReliable || r === e.style[t]),
                        r = parseFloat(r) || 0
                }
                return r + S(e, t, n || (a ? "border": "content"), i, o) + "px"
            }
            function j(e) {
                var t = Q,
                    n = bt[e];
                return n || (n = E(e, t), "none" !== n && n || (ct = (ct || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = E(e, t), ct.detach()), bt[e] = n),
                    n
            }
            function E(e, t) {
                var n = le(t.createElement(e)).appendTo(t.body),
                    i = le.css(n[0], "display");
                return n.remove(),
                    i
            }
            function D(e, t, n, i) {
                var r;
                if (le.isArray(t)) le.each(t,
                    function(t, r) {
                        n || Tt.test(e) ? i(e, r) : D(e + "[" + ("object" == typeof r ? t: "") + "]", r, n, i)
                    });
                else if (n || "object" !== le.type(t)) i(e, t);
                else for (r in t) D(e + "[" + r + "]", t[r], n, i)
            }
            function A(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, r = 0,
                        o = t.toLowerCase().match(ue) || [];
                    if (le.isFunction(n)) for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
            function P(e, t, n, i) {
                function r(s) {
                    var l;
                    return o[s] = !0,
                        le.each(e[s] || [],
                            function(e, s) {
                                var c = s(t, n, i);
                                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                            }),
                        l
                }
                var o = {},
                    a = e === $t;
                return r(t.dataTypes[0]) || !o["*"] && r("*")
            }
            function N(e, n) {
                var i, r, o = le.ajaxSettings.flatOptions || {};
                for (r in n) n[r] !== t && ((o[r] ? e: i || (i = {}))[r] = n[r]);
                return i && le.extend(!0, e, i),
                    e
            }
            function M(e, n, i) {
                var r, o, a, s, l = e.contents,
                    c = e.dataTypes,
                    u = e.responseFields;
                for (s in u) s in i && (n[u[s]] = i[s]);
                for (;
                    "*" === c[0];) c.shift(),
                o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
                if (o) for (s in l) if (l[s] && l[s].test(o)) {
                    c.unshift(s);
                    break
                }
                if (c[0] in i) a = c[0];
                else {
                    for (s in i) {
                        if (!c[0] || e.converters[s + " " + c[0]]) {
                            a = s;
                            break
                        }
                        r || (r = s)
                    }
                    a = a || r
                }
                if (a) return a !== c[0] && c.unshift(a),
                    i[a]
            }
            function B(e, t) {
                var n, i, r, o, a = {},
                    s = 0,
                    l = e.dataTypes.slice(),
                    c = l[0];
                if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1]) for (r in e.converters) a[r.toLowerCase()] = e.converters[r];
                for (; i = l[++s];) if ("*" !== i) {
                    if ("*" !== c && c !== i) {
                        if (r = a[c + " " + i] || a["* " + i], !r) for (n in a) if (o = n.split(" "), o[1] === i && (r = a[c + " " + o[0]] || a["* " + o[0]])) {
                            r === !0 ? r = a[n] : a[n] !== !0 && (i = o[0], l.splice(s--, 0, i));
                            break
                        }
                        if (r !== !0) if (r && e["throws"]) t = r(t);
                        else try {
                                t = r(t)
                            } catch(u) {
                                return {
                                    state: "parsererror",
                                    error: r ? u: "No conversion from " + c + " to " + i
                                }
                            }
                    }
                    c = i
                }
                return {
                    state: "success",
                    data: t
                }
            }
            function I() {
                try {
                    return new e.XMLHttpRequest
                } catch(t) {}
            }
            function O() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch(t) {}
            }
            function F() {
                return setTimeout(function() {
                    Jt = t
                }),
                    Jt = le.now()
            }
            function R(e, t) {
                le.each(t,
                    function(t, n) {
                        for (var i = (on[t] || []).concat(on["*"]), r = 0, o = i.length; r < o; r++) if (i[r].call(e, t, n)) return
                    })
            }
            function H(e, t, n) {
                var i, r, o = 0,
                    a = rn.length,
                    s = le.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (r) return ! 1;
                        for (var t = Jt || F(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(o);
                        return s.notifyWith(e, [c, o, n]),
                            o < 1 && l ? n: (s.resolveWith(e, [c]), !1)
                    },
                    c = s.promise({
                        elem: e,
                        props: le.extend({},
                            t),
                        opts: le.extend(!0, {
                                specialEasing: {}
                            },
                            n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Jt || F(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var i = le.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(i),
                                i
                        },
                        stop: function(t) {
                            var n = 0,
                                i = t ? c.tweens.length: 0;
                            if (r) return this;
                            for (r = !0; n < i; n++) c.tweens[n].run(1);
                            return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                                this
                        }
                    }),
                    u = c.props;
                for (L(u, c.opts.specialEasing); o < a; o++) if (i = rn[o].call(c, e, u, c.opts)) return i;
                return R(c, u),
                le.isFunction(c.opts.start) && c.opts.start.call(e, c),
                    le.fx.timer(le.extend(l, {
                        elem: e,
                        anim: c,
                        queue: c.opts.queue
                    })),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }
            function L(e, t) {
                var n, i, r, o, a;
                for (r in e) if (i = le.camelCase(r), o = t[i], n = e[r], le.isArray(n) && (o = n[1], n = e[r] = n[0]), r !== i && (e[i] = n, delete e[r]), a = le.cssHooks[i], a && "expand" in a) {
                    n = a.expand(n),
                        delete e[i];
                    for (r in n) r in e || (e[r] = n[r], t[r] = o)
                } else t[i] = o
            }
            function q(e, t, n) {
                var i, r, o, a, s, l, c, u, d, f = this,
                    p = e.style,
                    h = {},
                    m = [],
                    g = e.nodeType && w(e);
                n.queue || (u = le._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function() {
                    u.unqueued || d()
                }), u.unqueued++, f.always(function() {
                    f.always(function() {
                        u.unqueued--,
                        le.queue(e, "fx").length || u.empty.fire()
                    })
                })),
                1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === le.css(e, "display") && "none" === le.css(e, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden", le.support.shrinkWrapBlocks || f.always(function() {
                    p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                }));
                for (r in t) if (a = t[r], en.exec(a)) {
                    if (delete t[r], l = l || "toggle" === a, a === (g ? "hide": "show")) continue;
                    m.push(r)
                }
                if (o = m.length) {
                    s = le._data(e, "fxshow") || le._data(e, "fxshow", {}),
                    "hidden" in s && (g = s.hidden),
                    l && (s.hidden = !g),
                        g ? le(e).show() : f.done(function() {
                            le(e).hide()
                        }),
                        f.done(function() {
                            var t;
                            le._removeData(e, "fxshow");
                            for (t in h) le.style(e, t, h[t])
                        });
                    for (r = 0; r < o; r++) i = m[r],
                        c = f.createTween(i, g ? s[i] : 0),
                        h[i] = s[i] || le.style(e, i),
                    i in s || (s[i] = c.start, g && (c.end = c.start, c.start = "width" === i || "height" === i ? 1 : 0))
                }
            }
            function W(e, t, n, i, r) {
                return new W.prototype.init(e, t, n, i, r)
            }
            function $(e, t) {
                var n, i = {
                        height: e
                    },
                    r = 0;
                for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Ct[r],
                    i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e),
                    i
            }
            function z(e) {
                return le.isWindow(e) ? e: 9 === e.nodeType && (e.defaultView || e.parentWindow)
            }
            var G, U, X = typeof t,
                Q = e.document,
                V = e.location,
                Y = e.jQuery,
                K = e.$,
                J = {},
                Z = [],
                ee = "1.9.1",
                te = Z.concat,
                ne = Z.push,
                ie = Z.slice,
                re = Z.indexOf,
                oe = J.toString,
                ae = J.hasOwnProperty,
                se = ee.trim,
                le = function(e, t) {
                    return new le.fn.init(e, t, U)
                },
                ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ue = /\S+/g,
                de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                fe = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                pe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                he = /^[\],:{}\s]*$/,
                me = /(?:^|:|,)(?:\s*\[)+/g,
                ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                ve = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
                ye = /^-ms-/,
                xe = /-([\da-z])/gi,
                be = function(e, t) {
                    return t.toUpperCase()
                },
                ke = function(e) { (Q.addEventListener || "load" === e.type || "complete" === Q.readyState) && (we(), le.ready())
                },
                we = function() {
                    Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", ke, !1), e.removeEventListener("load", ke, !1)) : (Q.detachEvent("onreadystatechange", ke), e.detachEvent("onload", ke))
                };
            le.fn = le.prototype = {
                jquery: ee,
                constructor: le,
                init: function(e, n, i) {
                    var r, o;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : fe.exec(e), !r || !r[1] && n) return ! n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        if (r[1]) {
                            if (n = n instanceof le ? n[0] : n, le.merge(this, le.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n: Q, !0)), pe.test(r[1]) && le.isPlainObject(n)) for (r in n) le.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                            return this
                        }
                        if (o = Q.getElementById(r[2]), o && o.parentNode) {
                            if (o.id !== r[2]) return i.find(e);
                            this.length = 1,
                                this[0] = o
                        }
                        return this.context = Q,
                            this.selector = e,
                            this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
                },
                selector: "",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return ie.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function(e) {
                    var t = le.merge(this.constructor(), e);
                    return t.prevObject = this,
                        t.context = this.context,
                        t
                },
                each: function(e, t) {
                    return le.each(this, e, t)
                },
                ready: function(e) {
                    return le.ready.promise().done(e),
                        this
                },
                slice: function() {
                    return this.pushStack(ie.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq( - 1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t: 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                map: function(e) {
                    return this.pushStack(le.map(this,
                        function(t, n) {
                            return e.call(t, n, t)
                        }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: ne,
                sort: [].sort,
                splice: [].splice
            },
                le.fn.init.prototype = le.fn,
                le.extend = le.fn.extend = function() {
                    var e, n, i, r, o, a, s = arguments[0] || {},
                        l = 1,
                        c = arguments.length,
                        u = !1;
                    for ("boolean" == typeof s && (u = s, s = arguments[1] || {},
                        l = 2), "object" == typeof s || le.isFunction(s) || (s = {}), c === l && (s = this, --l); l < c; l++) if (null != (o = arguments[l])) for (r in o) e = s[r],
                        i = o[r],
                    s !== i && (u && i && (le.isPlainObject(i) || (n = le.isArray(i))) ? (n ? (n = !1, a = e && le.isArray(e) ? e: []) : a = e && le.isPlainObject(e) ? e: {},
                        s[r] = le.extend(u, a, i)) : i !== t && (s[r] = i));
                    return s
                },
                le.extend({
                    noConflict: function(t) {
                        return e.$ === le && (e.$ = K),
                        t && e.jQuery === le && (e.jQuery = Y),
                            le
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(e) {
                        e ? le.readyWait++:le.ready(!0)
                    },
                    ready: function(e) {
                        if (e === !0 ? !--le.readyWait: !le.isReady) {
                            if (!Q.body) return setTimeout(le.ready);
                            le.isReady = !0,
                            e !== !0 && --le.readyWait > 0 || (G.resolveWith(Q, [le]), le.fn.trigger && le(Q).trigger("ready").off("ready"))
                        }
                    },
                    isFunction: function(e) {
                        return "function" === le.type(e)
                    },
                    isArray: Array.isArray ||
                    function(e) {
                        return "array" === le.type(e)
                    },
                    isWindow: function(e) {
                        return null != e && e == e.window
                    },
                    isNumeric: function(e) {
                        return ! isNaN(parseFloat(e)) && isFinite(e)
                    },
                    type: function(e) {
                        return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? J[oe.call(e)] || "object": typeof e
                    },
                    isPlainObject: function(e) {
                        if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return ! 1;
                        try {
                            if (e.constructor && !ae.call(e, "constructor") && !ae.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                        } catch(n) {
                            return ! 1
                        }
                        var i;
                        for (i in e);
                        return i === t || ae.call(e, i)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return ! 1;
                        return ! 0
                    },
                    error: function(e) {
                        throw new Error(e)
                    },
                    parseHTML: function(e, t, n) {
                        if (!e || "string" != typeof e) return null;
                        "boolean" == typeof t && (n = t, t = !1),
                            t = t || Q;
                        var i = pe.exec(e),
                            r = !n && [];
                        return i ? [t.createElement(i[1])] : (i = le.buildFragment([e], t, r), r && le(r).remove(), le.merge([], i.childNodes))
                    },
                    parseJSON: function(t) {
                        return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t: "string" == typeof t && (t = le.trim(t), t && he.test(t.replace(ge, "@").replace(ve, "]").replace(me, ""))) ? new Function("return " + t)() : void le.error("Invalid JSON: " + t)
                    },
                    parseXML: function(n) {
                        var i, r;
                        if (!n || "string" != typeof n) return null;
                        try {
                            e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                        } catch(o) {
                            i = t
                        }
                        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + n),
                            i
                    },
                    noop: function() {},
                    globalEval: function(t) {
                        t && le.trim(t) && (e.execScript ||
                        function(t) {
                            e.eval.call(e, t)
                        })(t)
                    },
                    camelCase: function(e) {
                        return e.replace(ye, "ms-").replace(xe, be)
                    },
                    nodeName: function(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    },
                    each: function(e, t, i) {
                        var r, o = 0,
                            a = e.length,
                            s = n(e);
                        if (i) {
                            if (s) for (; o < a && (r = t.apply(e[o], i), r !== !1); o++);
                            else for (o in e) if (r = t.apply(e[o], i), r === !1) break
                        } else if (s) for (; o < a && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                        else for (o in e) if (r = t.call(e[o], o, e[o]), r === !1) break;
                        return e
                    },
                    trim: se && !se.call("\ufeff ") ?
                        function(e) {
                            return null == e ? "": se.call(e)
                        }: function(e) {
                            return null == e ? "": (e + "").replace(de, "")
                        },
                    makeArray: function(e, t) {
                        var i = t || [];
                        return null != e && (n(Object(e)) ? le.merge(i, "string" == typeof e ? [e] : e) : ne.call(i, e)),
                            i
                    },
                    inArray: function(e, t, n) {
                        var i;
                        if (t) {
                            if (re) return re.call(t, e, n);
                            for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n: 0; n < i; n++) if (n in t && t[n] === e) return n
                        }
                        return - 1
                    },
                    merge: function(e, n) {
                        var i = n.length,
                            r = e.length,
                            o = 0;
                        if ("number" == typeof i) for (; o < i; o++) e[r++] = n[o];
                        else for (; n[o] !== t;) e[r++] = n[o++];
                        return e.length = r,
                            e
                    },
                    grep: function(e, t, n) {
                        var i, r = [],
                            o = 0,
                            a = e.length;
                        for (n = !!n; o < a; o++) i = !!t(e[o], o),
                        n !== i && r.push(e[o]);
                        return r
                    },
                    map: function(e, t, i) {
                        var r, o = 0,
                            a = e.length,
                            s = n(e),
                            l = [];
                        if (s) for (; o < a; o++) r = t(e[o], o, i),
                        null != r && (l[l.length] = r);
                        else for (o in e) r = t(e[o], o, i),
                        null != r && (l[l.length] = r);
                        return te.apply([], l)
                    },
                    guid: 1,
                    proxy: function(e, n) {
                        var i, r, o;
                        return "string" == typeof n && (o = e[n], n = e, e = o),
                            le.isFunction(e) ? (i = ie.call(arguments, 2), r = function() {
                                return e.apply(n || this, i.concat(ie.call(arguments)))
                            },
                                r.guid = e.guid = e.guid || le.guid++, r) : t
                    },
                    access: function(e, n, i, r, o, a, s) {
                        var l = 0,
                            c = e.length,
                            u = null == i;
                        if ("object" === le.type(i)) {
                            o = !0;
                            for (l in i) le.access(e, n, l, i[l], !0, a, s)
                        } else if (r !== t && (o = !0, le.isFunction(r) || (s = !0), u && (s ? (n.call(e, r), n = null) : (u = n, n = function(e, t, n) {
                                return u.call(le(e), n)
                            })), n)) for (; l < c; l++) n(e[l], i, s ? r: r.call(e[l], l, n(e[l], i)));
                        return o ? e: u ? n.call(e) : c ? n(e[0], i) : a
                    },
                    now: function() {
                        return (new Date).getTime()
                    }
                }),
                le.ready.promise = function(t) {
                    if (!G) if (G = le.Deferred(), "complete" === Q.readyState) setTimeout(le.ready);
                    else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", ke, !1),
                        e.addEventListener("load", ke, !1);
                    else {
                        Q.attachEvent("onreadystatechange", ke),
                            e.attachEvent("onload", ke);
                        var n = !1;
                        try {
                            n = null == e.frameElement && Q.documentElement
                        } catch(i) {}
                        n && n.doScroll && !
                            function r() {
                                if (!le.isReady) {
                                    try {
                                        n.doScroll("left")
                                    } catch(e) {
                                        return setTimeout(r, 50)
                                    }
                                    we(),
                                        le.ready()
                                }
                            } ()
                    }
                    return G.promise(t)
                },
                le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
                    function(e, t) {
                        J["[object " + t + "]"] = t.toLowerCase()
                    }),
                U = le(Q);
            var Ce = {};
            le.Callbacks = function(e) {
                e = "string" == typeof e ? Ce[e] || i(e) : le.extend({},
                    e);
                var n, r, o, a, s, l, c = [],
                    u = !e.once && [],
                    d = function(t) {
                        for (r = e.memory && t, o = !0, s = l || 0, l = 0, a = c.length, n = !0; c && s < a; s++) if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            r = !1;
                            break
                        }
                        n = !1,
                        c && (u ? u.length && d(u.shift()) : r ? c = [] : f.disable())
                    },
                    f = {
                        add: function() {
                            if (c) {
                                var t = c.length; !
                                    function i(t) {
                                        le.each(t,
                                            function(t, n) {
                                                var r = le.type(n);
                                                "function" === r ? e.unique && f.has(n) || c.push(n) : n && n.length && "string" !== r && i(n)
                                            })
                                    } (arguments),
                                    n ? a = c.length: r && (l = t, d(r))
                            }
                            return this
                        },
                        remove: function() {
                            return c && le.each(arguments,
                                function(e, t) {
                                    for (var i; (i = le.inArray(t, c, i)) > -1;) c.splice(i, 1),
                                    n && (i <= a && a--, i <= s && s--)
                                }),
                                this
                        },
                        has: function(e) {
                            return e ? le.inArray(e, c) > -1 : !(!c || !c.length)
                        },
                        empty: function() {
                            return c = [],
                                this
                        },
                        disable: function() {
                            return c = u = r = t,
                                this
                        },
                        disabled: function() {
                            return ! c
                        },
                        lock: function() {
                            return u = t,
                            r || f.disable(),
                                this
                        },
                        locked: function() {
                            return ! u
                        },
                        fireWith: function(e, t) {
                            return t = t || [],
                                t = [e, t.slice ? t.slice() : t],
                            !c || o && !u || (n ? u.push(t) : d(t)),
                                this
                        },
                        fire: function() {
                            return f.fireWith(this, arguments),
                                this
                        },
                        fired: function() {
                            return !! o
                        }
                    };
                return f
            },
                le.extend({
                    Deferred: function(e) {
                        var t = [["resolve", "done", le.Callbacks("once memory"), "resolved"], ["reject", "fail", le.Callbacks("once memory"), "rejected"], ["notify", "progress", le.Callbacks("memory")]],
                            n = "pending",
                            i = {
                                state: function() {
                                    return n
                                },
                                always: function() {
                                    return r.done(arguments).fail(arguments),
                                        this
                                },
                                then: function() {
                                    var e = arguments;
                                    return le.Deferred(function(n) {
                                        le.each(t,
                                            function(t, o) {
                                                var a = o[0],
                                                    s = le.isFunction(e[t]) && e[t];
                                                r[o[1]](function() {
                                                    var e = s && s.apply(this, arguments);
                                                    e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                                })
                                            }),
                                            e = null
                                    }).promise()
                                },
                                promise: function(e) {
                                    return null != e ? le.extend(e, i) : i
                                }
                            },
                            r = {};
                        return i.pipe = i.then,
                            le.each(t,
                                function(e, o) {
                                    var a = o[2],
                                        s = o[3];
                                    i[o[1]] = a.add,
                                    s && a.add(function() {
                                            n = s
                                        },
                                        t[1 ^ e][2].disable, t[2][2].lock),
                                        r[o[0]] = function() {
                                            return r[o[0] + "With"](this === r ? i: this, arguments),
                                                this
                                        },
                                        r[o[0] + "With"] = a.fireWith
                                }),
                            i.promise(r),
                        e && e.call(r, r),
                            r
                    },
                    when: function(e) {
                        var t, n, i, r = 0,
                            o = ie.call(arguments),
                            a = o.length,
                            s = 1 !== a || e && le.isFunction(e.promise) ? a: 0,
                            l = 1 === s ? e: le.Deferred(),
                            c = function(e, n, i) {
                                return function(r) {
                                    n[e] = this,
                                        i[e] = arguments.length > 1 ? ie.call(arguments) : r,
                                        i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                                }
                            };
                        if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && le.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
                        return s || l.resolveWith(i, o),
                            l.promise()
                    }
                }),
                le.support = function() {
                    var t, n, i, r, o, a, s, l, c, u, d = Q.createElement("div");
                    if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), i = d.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
                    o = Q.createElement("select"),
                        s = o.appendChild(Q.createElement("option")),
                        r = d.getElementsByTagName("input")[0],
                        i.style.cssText = "top:1px;float:left;opacity:.5",
                        t = {
                            getSetAttribute: "t" !== d.className,
                            leadingWhitespace: 3 === d.firstChild.nodeType,
                            tbody: !d.getElementsByTagName("tbody").length,
                            htmlSerialize: !!d.getElementsByTagName("link").length,
                            style: /top/.test(i.getAttribute("style")),
                            hrefNormalized: "/a" === i.getAttribute("href"),
                            opacity: /^0.5/.test(i.style.opacity),
                            cssFloat: !!i.style.cssFloat,
                            checkOn: !!r.value,
                            optSelected: s.selected,
                            enctype: !!Q.createElement("form").enctype,
                            html5Clone: "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML,
                            boxModel: "CSS1Compat" === Q.compatMode,
                            deleteExpando: !0,
                            noCloneEvent: !0,
                            inlineBlockNeedsLayout: !1,
                            shrinkWrapBlocks: !1,
                            reliableMarginRight: !0,
                            boxSizingReliable: !0,
                            pixelPosition: !1
                        },
                        r.checked = !0,
                        t.noCloneChecked = r.cloneNode(!0).checked,
                        o.disabled = !0,
                        t.optDisabled = !s.disabled;
                    try {
                        delete d.test
                    } catch(f) {
                        t.deleteExpando = !1
                    }
                    r = Q.createElement("input"),
                        r.setAttribute("value", ""),
                        t.input = "" === r.getAttribute("value"),
                        r.value = "t",
                        r.setAttribute("type", "radio"),
                        t.radioValue = "t" === r.value,
                        r.setAttribute("checked", "t"),
                        r.setAttribute("name", "t"),
                        a = Q.createDocumentFragment(),
                        a.appendChild(r),
                        t.appendChecked = r.checked,
                        t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
                    d.attachEvent && (d.attachEvent("onclick",
                        function() {
                            t.noCloneEvent = !1
                        }), d.cloneNode(!0).click());
                    for (u in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) d.setAttribute(l = "on" + u, "t"),
                        t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
                    return d.style.backgroundClip = "content-box",
                        d.cloneNode(!0).style.backgroundClip = "",
                        t.clearCloneStyle = "content-box" === d.style.backgroundClip,
                        le(function() {
                            var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                                a = Q.getElementsByTagName("body")[0];
                            a && (n = Q.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                                    width: "4px"
                                }).width, i = d.appendChild(Q.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== X && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = d = r = i = null)
                        }),
                        n = o = a = s = i = r = null,
                        t
                } ();
            var _e = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                Se = /([A-Z])/g;
            le.extend({
                cache: {},
                expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
                noData: {
                    embed: !0,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                    applet: !0
                },
                hasData: function(e) {
                    return e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando],
                    !!e && !s(e)
                },
                data: function(e, t, n) {
                    return r(e, t, n)
                },
                removeData: function(e, t) {
                    return o(e, t)
                },
                _data: function(e, t, n) {
                    return r(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return o(e, t, !0)
                },
                acceptData: function(e) {
                    if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
                    var t = e.nodeName && le.noData[e.nodeName.toLowerCase()];
                    return ! t || t !== !0 && e.getAttribute("classid") === t
                }
            }),
                le.fn.extend({
                    data: function(e, n) {
                        var i, r, o = this[0],
                            s = 0,
                            l = null;
                        if (e === t) {
                            if (this.length && (l = le.data(o), 1 === o.nodeType && !le._data(o, "parsedAttrs"))) {
                                for (i = o.attributes; s < i.length; s++) r = i[s].name,
                                r.indexOf("data-") || (r = le.camelCase(r.slice(5)), a(o, r, l[r]));
                                le._data(o, "parsedAttrs", !0)
                            }
                            return l
                        }
                        return "object" == typeof e ? this.each(function() {
                            le.data(this, e)
                        }) : le.access(this,
                            function(n) {
                                return n === t ? o ? a(o, e, le.data(o, e)) : null: void this.each(function() {
                                    le.data(this, e, n)
                                })
                            },
                            null, n, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each(function() {
                            le.removeData(this, e)
                        })
                    }
                }),
                le.extend({
                    queue: function(e, t, n) {
                        var i;
                        if (e) return t = (t || "fx") + "queue",
                            i = le._data(e, t),
                        n && (!i || le.isArray(n) ? i = le._data(e, t, le.makeArray(n)) : i.push(n)),
                        i || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = le.queue(e, t),
                            i = n.length,
                            r = n.shift(),
                            o = le._queueHooks(e, t),
                            a = function() {
                                le.dequeue(e, t)
                            };
                        "inprogress" === r && (r = n.shift(), i--),
                            o.cur = r,
                        r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)),
                        !i && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return le._data(e, n) || le._data(e, n, {
                                empty: le.Callbacks("once memory").add(function() {
                                    le._removeData(e, t + "queue"),
                                        le._removeData(e, n)
                                })
                            })
                    }
                }),
                le.fn.extend({
                    queue: function(e, n) {
                        var i = 2;
                        return "string" != typeof e && (n = e, e = "fx", i--),
                            arguments.length < i ? le.queue(this[0], e) : n === t ? this: this.each(function() {
                                var t = le.queue(this, e, n);
                                le._queueHooks(this, e),
                                "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e)
                            })
                    },
                    dequeue: function(e) {
                        return this.each(function() {
                            le.dequeue(this, e)
                        })
                    },
                    delay: function(e, t) {
                        return e = le.fx ? le.fx.speeds[e] || e: e,
                            t = t || "fx",
                            this.queue(t,
                                function(t, n) {
                                    var i = setTimeout(t, e);
                                    n.stop = function() {
                                        clearTimeout(i)
                                    }
                                })
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, n) {
                        var i, r = 1,
                            o = le.Deferred(),
                            a = this,
                            s = this.length,
                            l = function() {--r || o.resolveWith(a, [a])
                            };
                        for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) i = le._data(a[s], e + "queueHooks"),
                        i && i.empty && (r++, i.empty.add(l));
                        return l(),
                            o.promise(n)
                    }
                });
            var Te, je, Ee = /[\t\r\n]/g,
                De = /\r/g,
                Ae = /^(?:input|select|textarea|button|object)$/i,
                Pe = /^(?:a|area)$/i,
                Ne = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
                Me = /^(?:checked|selected)$/i,
                Be = le.support.getSetAttribute,
                Ie = le.support.input;
            le.fn.extend({
                attr: function(e, t) {
                    return le.access(this, le.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        le.removeAttr(this, e)
                    })
                },
                prop: function(e, t) {
                    return le.access(this, le.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = le.propFix[e] || e,
                        this.each(function() {
                            try {
                                this[e] = t,
                                    delete this[e]
                            } catch(n) {}
                        })
                },
                addClass: function(e) {
                    var t, n, i, r, o, a = 0,
                        s = this.length,
                        l = "string" == typeof e && e;
                    if (le.isFunction(e)) return this.each(function(t) {
                        le(this).addClass(e.call(this, t, this.className))
                    });
                    if (l) for (t = (e || "").match(ue) || []; a < s; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : " ")) {
                        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        n.className = le.trim(i)
                    }
                    return this
                },
                removeClass: function(e) {
                    var t, n, i, r, o, a = 0,
                        s = this.length,
                        l = 0 === arguments.length || "string" == typeof e && e;
                    if (le.isFunction(e)) return this.each(function(t) {
                        le(this).removeClass(e.call(this, t, this.className))
                    });
                    if (l) for (t = (e || "").match(ue) || []; a < s; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : "")) {
                        for (o = 0; r = t[o++];) for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        n.className = e ? le.trim(i) : ""
                    }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        i = "boolean" == typeof t;
                    return le.isFunction(e) ? this.each(function(n) {
                        le(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function() {
                        if ("string" === n) for (var r, o = 0,
                                                     a = le(this), s = t, l = e.match(ue) || []; r = l[o++];) s = i ? s: !a.hasClass(r),
                            a[s ? "addClass": "removeClass"](r);
                        else n !== X && "boolean" !== n || (this.className && le._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": le._data(this, "__className__") || "")
                    })
                },
                hasClass: function(e) {
                    for (var t = " " + e + " ",
                             n = 0,
                             i = this.length; n < i; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ee, " ").indexOf(t) >= 0) return ! 0;
                    return ! 1
                },
                val: function(e) {
                    var n, i, r, o = this[0];
                    return arguments.length ? (r = le.isFunction(e), this.each(function(n) {
                        var o, a = le(this);
                        1 === this.nodeType && (o = r ? e.call(this, n, a.val()) : e, null == o ? o = "": "number" == typeof o ? o += "": le.isArray(o) && (o = le.map(o,
                                function(e) {
                                    return null == e ? "": e + ""
                                })), i = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
                    })) : o ? (i = le.valHooks[o.type] || le.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== t ? n: (n = o.value, "string" == typeof n ? n.replace(De, "") : null == n ? "": n)) : void 0
                }
            }),
                le.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = e.attributes.value;
                                return ! t || t.specified ? e.value: e.text
                            }
                        },
                        select: {
                            get: function(e) {
                                for (var t, n, i = e.options,
                                         r = e.selectedIndex,
                                         o = "select-one" === e.type || r < 0,
                                         a = o ? null: [], s = o ? r + 1 : i.length, l = r < 0 ? s: o ? r: 0; l < s; l++) if (n = i[l], (n.selected || l === r) && (le.support.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = le(n).val(), o) return t;
                                    a.push(t)
                                }
                                return a
                            },
                            set: function(e, t) {
                                var n = le.makeArray(t);
                                return le(e).find("option").each(function() {
                                    this.selected = le.inArray(le(this).val(), n) >= 0
                                }),
                                n.length || (e.selectedIndex = -1),
                                    n
                            }
                        }
                    },
                    attr: function(e, n, i) {
                        var r, o, a, s = e.nodeType;
                        if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === X ? le.prop(e, n, i) : (o = 1 !== s || !le.isXMLDoc(e), o && (n = n.toLowerCase(), r = le.attrHooks[n] || (Ne.test(n) ? je: Te)), i === t ? r && o && "get" in r && null !== (a = r.get(e, n)) ? a: (typeof e.getAttribute !== X && (a = e.getAttribute(n)), null == a ? t: a) : null !== i ? r && o && "set" in r && (a = r.set(e, i, n)) !== t ? a: (e.setAttribute(n, i + ""), i) : void le.removeAttr(e, n))
                    },
                    removeAttr: function(e, t) {
                        var n, i, r = 0,
                            o = t && t.match(ue);
                        if (o && 1 === e.nodeType) for (; n = o[r++];) i = le.propFix[n] || n,
                            Ne.test(n) ? !Be && Me.test(n) ? e[le.camelCase("default-" + n)] = e[i] = !1 : e[i] = !1 : le.attr(e, n, ""),
                            e.removeAttribute(Be ? n: i)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!le.support.radioValue && "radio" === t && le.nodeName(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                    n && (e.value = n),
                                        t
                                }
                            }
                        }
                    },
                    propFix: {
                        tabindex: "tabIndex",
                        readonly: "readOnly",
                        "for": "htmlFor",
                        "class": "className",
                        maxlength: "maxLength",
                        cellspacing: "cellSpacing",
                        cellpadding: "cellPadding",
                        rowspan: "rowSpan",
                        colspan: "colSpan",
                        usemap: "useMap",
                        frameborder: "frameBorder",
                        contenteditable: "contentEditable"
                    },
                    prop: function(e, n, i) {
                        var r, o, a, s = e.nodeType;
                        if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !le.isXMLDoc(e),
                        a && (n = le.propFix[n] || n, o = le.propHooks[n]),
                            i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r: e[n] = i: o && "get" in o && null !== (r = o.get(e, n)) ? r: e[n]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var n = e.getAttributeNode("tabindex");
                                return n && n.specified ? parseInt(n.value, 10) : Ae.test(e.nodeName) || Pe.test(e.nodeName) && e.href ? 0 : t
                            }
                        }
                    }
                }),
                je = {
                    get: function(e, n) {
                        var i = le.prop(e, n),
                            r = "boolean" == typeof i && e.getAttribute(n),
                            o = "boolean" == typeof i ? Ie && Be ? null != r: Me.test(n) ? e[le.camelCase("default-" + n)] : !!r: e.getAttributeNode(n);
                        return o && o.value !== !1 ? n.toLowerCase() : t
                    },
                    set: function(e, t, n) {
                        return t === !1 ? le.removeAttr(e, n) : Ie && Be || !Me.test(n) ? e.setAttribute(!Be && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0,
                            n
                    }
                },
            Ie && Be || (le.attrHooks.value = {
                get: function(e, n) {
                    var i = e.getAttributeNode(n);
                    return le.nodeName(e, "input") ? e.defaultValue: i && i.specified ? i.value: t
                },
                set: function(e, t, n) {
                    return le.nodeName(e, "input") ? void(e.defaultValue = t) : Te && Te.set(e, t, n)
                }
            }),
            Be || (Te = le.valHooks.button = {
                get: function(e, n) {
                    var i = e.getAttributeNode(n);
                    return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value: i.specified) ? i.value: t
                },
                set: function(e, n, i) {
                    var r = e.getAttributeNode(i);
                    return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)),
                        r.value = n += "",
                        "value" === i || n === e.getAttribute(i) ? n: t
                }
            },
                le.attrHooks.contenteditable = {
                    get: Te.get,
                    set: function(e, t, n) {
                        Te.set(e, "" !== t && t, n)
                    }
                },
                le.each(["width", "height"],
                    function(e, t) {
                        le.attrHooks[t] = le.extend(le.attrHooks[t], {
                            set: function(e, n) {
                                if ("" === n) return e.setAttribute(t, "auto"),
                                    n
                            }
                        })
                    })),
            le.support.hrefNormalized || (le.each(["href", "src", "width", "height"],
                function(e, n) {
                    le.attrHooks[n] = le.extend(le.attrHooks[n], {
                        get: function(e) {
                            var i = e.getAttribute(n, 2);
                            return null == i ? t: i
                        }
                    })
                }), le.each(["href", "src"],
                function(e, t) {
                    le.propHooks[t] = {
                        get: function(e) {
                            return e.getAttribute(t, 4)
                        }
                    }
                })),
            le.support.style || (le.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || t
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            }),
            le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                        null
                }
            })),
            le.support.enctype || (le.propFix.enctype = "encoding"),
            le.support.checkOn || le.each(["radio", "checkbox"],
                function() {
                    le.valHooks[this] = {
                        get: function(e) {
                            return null === e.getAttribute("value") ? "on": e.value
                        }
                    }
                }),
                le.each(["radio", "checkbox"],
                    function() {
                        le.valHooks[this] = le.extend(le.valHooks[this], {
                            set: function(e, t) {
                                if (le.isArray(t)) return e.checked = le.inArray(le(e).val(), t) >= 0
                            }
                        })
                    });
            var Oe = /^(?:input|select|textarea)$/i,
                Fe = /^key/,
                Re = /^(?:mouse|contextmenu)|click/,
                He = /^(?:focusinfocus|focusoutblur)$/,
                Le = /^([^.]*)(?:\.(.+)|)$/;
            le.event = {
                global: {},
                add: function(e, n, i, r, o) {
                    var a, s, l, c, u, d, f, p, h, m, g, v = le._data(e);
                    if (v) {
                        for (i.handler && (c = i, i = c.handler, o = c.selector), i.guid || (i.guid = le.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                            return typeof le === X || e && le.event.triggered === e.type ? t: le.event.dispatch.apply(d.elem, arguments)
                        },
                            d.elem = e), n = (n || "").match(ue) || [""], l = n.length; l--;) a = Le.exec(n[l]) || [],
                            h = g = a[1],
                            m = (a[2] || "").split(".").sort(),
                            u = le.event.special[h] || {},
                            h = (o ? u.delegateType: u.bindType) || h,
                            u = le.event.special[h] || {},
                            f = le.extend({
                                    type: h,
                                    origType: g,
                                    data: r,
                                    handler: i,
                                    guid: i.guid,
                                    selector: o,
                                    needsContext: o && le.expr.match.needsContext.test(o),
                                    namespace: m.join(".")
                                },
                                c),
                        (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, u.setup && u.setup.call(e, r, m, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))),
                        u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)),
                            o ? p.splice(p.delegateCount++, 0, f) : p.push(f),
                            le.event.global[h] = !0;
                        e = null
                    }
                },
                remove: function(e, t, n, i, r) {
                    var o, a, s, l, c, u, d, f, p, h, m, g = le.hasData(e) && le._data(e);
                    if (g && (u = g.events)) {
                        for (t = (t || "").match(ue) || [""], c = t.length; c--;) if (s = Le.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = le.event.special[p] || {},
                                     p = (i ? d.delegateType: d.bindType) || p, f = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o],
                            !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || le.removeEvent(e, p, g.handle), delete u[p])
                        } else for (p in u) le.event.remove(e, p + t[c], n, i, !0);
                        le.isEmptyObject(u) && (delete g.handle, le._removeData(e, "events"))
                    }
                },
                trigger: function(n, i, r, o) {
                    var a, s, l, c, u, d, f, p = [r || Q],
                        h = ae.call(n, "type") ? n.type: n,
                        m = ae.call(n, "namespace") ? n.namespace.split(".") : [];
                    if (l = d = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !He.test(h + le.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[le.expando] ? n: new le.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : le.makeArray(i, [n]), u = le.event.special[h] || {},
                        o || !u.trigger || u.trigger.apply(r, i) !== !1)) {
                        if (!o && !u.noBubble && !le.isWindow(r)) {
                            for (c = u.delegateType || h, He.test(c + h) || (l = l.parentNode); l; l = l.parentNode) p.push(l),
                                d = l;
                            d === (r.ownerDocument || Q) && p.push(d.defaultView || d.parentWindow || e)
                        }
                        for (f = 0; (l = p[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? c: u.bindType || h,
                            a = (le._data(l, "events") || {})[n.type] && le._data(l, "handle"),
                        a && a.apply(l, i),
                            a = s && l[s],
                        a && le.acceptData(l) && a.apply && a.apply(l, i) === !1 && n.preventDefault();
                        if (n.type = h, !o && !n.isDefaultPrevented() && (!u._default || u._default.apply(r.ownerDocument, i) === !1) && ("click" !== h || !le.nodeName(r, "a")) && le.acceptData(r) && s && r[h] && !le.isWindow(r)) {
                            d = r[s],
                            d && (r[s] = null),
                                le.event.triggered = h;
                            try {
                                r[h]()
                            } catch(g) {}
                            le.event.triggered = t,
                            d && (r[s] = d)
                        }
                        return n.result
                    }
                },
                dispatch: function(e) {
                    e = le.event.fix(e);
                    var n, i, r, o, a, s = [],
                        l = ie.call(arguments),
                        c = (le._data(this, "events") || {})[e.type] || [],
                        u = le.event.special[e.type] || {};
                    if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for (s = le.event.handlers.call(this, e, c), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, a = 0; (r = o.handlers[a++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, i = ((le.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e),
                            e.result
                    }
                },
                handlers: function(e, n) {
                    var i, r, o, a, s = [],
                        l = n.delegateCount,
                        c = e.target;
                    if (l && c.nodeType && (!e.button || "click" !== e.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; a < l; a++) r = n[a],
                            i = r.selector + " ",
                        o[i] === t && (o[i] = r.needsContext ? le(i, this).index(c) >= 0 : le.find(i, this, null, [c]).length),
                        o[i] && o.push(r);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    }
                    return l < n.length && s.push({
                        elem: this,
                        handlers: n.slice(l)
                    }),
                        s
                },
                fix: function(e) {
                    if (e[le.expando]) return e;
                    var t, n, i, r = e.type,
                        o = e,
                        a = this.fixHooks[r];
                    for (a || (this.fixHooks[r] = a = Re.test(r) ? this.mouseHooks: Fe.test(r) ? this.keyHooks: {}), i = a.props ? this.props.concat(a.props) : this.props, e = new le.Event(o), t = i.length; t--;) n = i[t],
                        e[n] = o[n];
                    return e.target || (e.target = o.srcElement || Q),
                    3 === e.target.nodeType && (e.target = e.target.parentNode),
                        e.metaKey = !!e.metaKey,
                        a.filter ? a.filter(e, o) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                            e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, n) {
                        var i, r, o, a = n.button,
                            s = n.fromElement;
                        return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || Q, o = r.documentElement, i = r.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)),
                        !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement: s),
                        e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                            e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        trigger: function() {
                            if (le.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(),
                                !1
                        }
                    },
                    focus: {
                        trigger: function() {
                            if (this !== Q.activeElement && this.focus) try {
                                return this.focus(),
                                    !1
                            } catch(e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === Q.activeElement && this.blur) return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            e.result !== t && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, i) {
                    var r = le.extend(new le.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    i ? le.event.trigger(r, null, t) : le.event.dispatch.call(t, r),
                    r.isDefaultPrevented() && n.preventDefault()
                }
            },
                le.removeEvent = Q.removeEventListener ?
                    function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n, !1)
                    }: function(e, t, n) {
                        var i = "on" + t;
                        e.detachEvent && (typeof e[i] === X && (e[i] = null), e.detachEvent(i, n))
                    },
                le.Event = function(e, t) {
                    return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l: c) : this.type = e, t && le.extend(this, t), this.timeStamp = e && e.timeStamp || le.now(), void(this[le.expando] = !0)) : new le.Event(e, t)
                },
                le.Event.prototype = {
                    isDefaultPrevented: c,
                    isPropagationStopped: c,
                    isImmediatePropagationStopped: c,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = l,
                        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = l,
                        e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                    },
                    stopImmediatePropagation: function() {
                        this.isImmediatePropagationStopped = l,
                            this.stopPropagation()
                    }
                },
                le.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    },
                    function(e, t) {
                        le.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function(e) {
                                var n, i = this,
                                    r = e.relatedTarget,
                                    o = e.handleObj;
                                return r && (r === i || le.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                                    n
                            }
                        }
                    }),
            le.support.submitBubbles || (le.event.special.submit = {
                setup: function() {
                    return ! le.nodeName(this, "form") && void le.event.add(this, "click._submit keypress._submit",
                            function(e) {
                                var n = e.target,
                                    i = le.nodeName(n, "input") || le.nodeName(n, "button") ? n.form: t;
                                i && !le._data(i, "submitBubbles") && (le.event.add(i, "submit._submit",
                                    function(e) {
                                        e._submit_bubble = !0
                                    }), le._data(i, "submitBubbles", !0))
                            })
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function() {
                    return ! le.nodeName(this, "form") && void le.event.remove(this, "._submit")
                }
            }),
            le.support.changeBubbles || (le.event.special.change = {
                setup: function() {
                    return Oe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (le.event.add(this, "propertychange._change",
                        function(e) {
                            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                        }), le.event.add(this, "click._change",
                        function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1),
                                le.event.simulate("change", this, e, !0)
                        })), !1) : void le.event.add(this, "beforeactivate._change",
                        function(e) {
                            var t = e.target;
                            Oe.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change",
                                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0)
                                }), le._data(t, "changeBubbles", !0))
                        })
                },
                handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return le.event.remove(this, "._change"),
                        !Oe.test(this.nodeName)
                }
            }),
            le.support.focusinBubbles || le.each({
                    focus: "focusin",
                    blur: "focusout"
                },
                function(e, t) {
                    var n = 0,
                        i = function(e) {
                            le.event.simulate(t, e.target, le.event.fix(e), !0)
                        };
                    le.event.special[t] = {
                        setup: function() {
                            0 === n++&&Q.addEventListener(e, i, !0)
                        },
                        teardown: function() {
                            0 === --n && Q.removeEventListener(e, i, !0)
                        }
                    }
                }),
                le.fn.extend({
                    on: function(e, n, i, r, o) {
                        var a, s;
                        if ("object" == typeof e) {
                            "string" != typeof n && (i = i || n, n = t);
                            for (a in e) this.on(a, n, i, e[a], o);
                            return this
                        }
                        if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = c;
                        else if (!r) return this;
                        return 1 === o && (s = r, r = function(e) {
                            return le().off(e),
                                s.apply(this, arguments)
                        },
                            r.guid = s.guid || (s.guid = le.guid++)),
                            this.each(function() {
                                le.event.add(this, e, r, i, n)
                            })
                    },
                    one: function(e, t, n, i) {
                        return this.on(e, t, n, i, 1)
                    },
                    off: function(e, n, i) {
                        var r, o;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
                            le(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
                            this;
                        if ("object" == typeof e) {
                            for (o in e) this.off(o, n, e[o]);
                            return this
                        }
                        return n !== !1 && "function" != typeof n || (i = n, n = t),
                        i === !1 && (i = c),
                            this.each(function() {
                                le.event.remove(this, e, i, n)
                            })
                    },
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, i) {
                        return this.on(t, e, n, i)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    trigger: function(e, t) {
                        return this.each(function() {
                            le.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return le.event.trigger(e, t, n, !0)
                    }
                }),
                function(e, t) {
                    function n(e) {
                        return he.test(e + "")
                    }
                    function i() {
                        var e, t = [];
                        return e = function(n, i) {
                            return t.push(n += " ") > _.cacheLength && delete e[t.shift()],
                                e[n] = i
                        }
                    }
                    function r(e) {
                        return e[H] = !0,
                            e
                    }
                    function o(e) {
                        var t = P.createElement("div");
                        try {
                            return e(t)
                        } catch(n) {
                            return ! 1
                        } finally {
                            t = null
                        }
                    }
                    function a(e, t, n, i) {
                        var r, o, a, s, l, c, u, p, h, m;
                        if ((t ? t.ownerDocument || t: L) !== P && A(t), t = t || P, n = n || [], !e || "string" != typeof e) return n;
                        if (1 !== (s = t.nodeType) && 9 !== s) return [];
                        if (!M && !i) {
                            if (r = me.exec(e)) if (a = r[1]) {
                                if (9 === s) {
                                    if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o),
                                        n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && F(t, o) && o.id === a) return n.push(o),
                                    n
                            } else {
                                if (r[2]) return K.apply(n, J.call(t.getElementsByTagName(e), 0)),
                                    n;
                                if ((a = r[3]) && q.getByClassName && t.getElementsByClassName) return K.apply(n, J.call(t.getElementsByClassName(a), 0)),
                                    n
                            }
                            if (q.qsa && !B.test(e)) {
                                if (u = !0, p = H, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                    for (c = d(e), (u = t.getAttribute("id")) ? p = u.replace(ye, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
                                    h = pe.test(e) && t.parentNode || t,
                                        m = c.join(",")
                                }
                                if (m) try {
                                    return K.apply(n, J.call(h.querySelectorAll(m), 0)),
                                        n
                                } catch(g) {} finally {
                                    u || t.removeAttribute("id")
                                }
                            }
                        }
                        return b(e.replace(ae, "$1"), t, n, i)
                    }
                    function s(e, t) {
                        var n = t && e,
                            i = n && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                        if (i) return i;
                        if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
                        return e ? 1 : -1
                    }
                    function l(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return "input" === n && t.type === e
                        }
                    }
                    function c(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }
                    function u(e) {
                        return r(function(t) {
                            return t = +t,
                                r(function(n, i) {
                                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                                })
                        })
                    }
                    function d(e, t) {
                        var n, i, r, o, s, l, c, u = G[e + " "];
                        if (u) return t ? 0 : u.slice(0);
                        for (s = e, l = [], c = _.preFilter; s;) {
                            n && !(i = se.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(r = [])),
                                n = !1,
                            (i = ce.exec(s)) && (n = i.shift(), r.push({
                                value: n,
                                type: i[0].replace(ae, " ")
                            }), s = s.slice(n.length));
                            for (o in _.filter) ! (i = fe[o].exec(s)) || c[o] && !(i = c[o](i)) || (n = i.shift(), r.push({
                                value: n,
                                type: o,
                                matches: i
                            }), s = s.slice(n.length));
                            if (!n) break
                        }
                        return t ? s.length: s ? a.error(e) : G(e, l).slice(0)
                    }
                    function f(e) {
                        for (var t = 0,
                                 n = e.length,
                                 i = ""; t < n; t++) i += e[t].value;
                        return i
                    }
                    function p(e, t, n) {
                        var i = t.dir,
                            r = n && "parentNode" === i,
                            o = $++;
                        return t.first ?
                            function(t, n, o) {
                                for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, o)
                            }: function(t, n, a) {
                                var s, l, c, u = W + " " + o;
                                if (a) {
                                    for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, a)) return ! 0
                                } else for (; t = t[i];) if (1 === t.nodeType || r) if (c = t[H] || (t[H] = {}), (l = c[i]) && l[0] === u) {
                                    if ((s = l[1]) === !0 || s === C) return s === !0
                                } else if (l = c[i] = [u], l[1] = e(t, n, a) || C, l[1] === !0) return ! 0
                            }
                    }
                    function h(e) {
                        return e.length > 1 ?
                            function(t, n, i) {
                                for (var r = e.length; r--;) if (!e[r](t, n, i)) return ! 1;
                                return ! 0
                            }: e[0]
                    }
                    function m(e, t, n, i, r) {
                        for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
                        return a
                    }
                    function g(e, t, n, i, o, a) {
                        return i && !i[H] && (i = g(i)),
                        o && !o[H] && (o = g(o, a)),
                            r(function(r, a, s, l) {
                                var c, u, d, f = [],
                                    p = [],
                                    h = a.length,
                                    g = r || x(t || "*", s.nodeType ? [s] : s, []),
                                    v = !e || !r && t ? g: m(g, f, e, s, l),
                                    y = n ? o || (r ? e: h || i) ? [] : a: v;
                                if (n && n(v, y, s, l), i) for (c = m(y, p), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (y[p[u]] = !(v[p[u]] = d));
                                if (r) {
                                    if (o || e) {
                                        if (o) {
                                            for (c = [], u = y.length; u--;)(d = y[u]) && c.push(v[u] = d);
                                            o(null, y = [], c, l)
                                        }
                                        for (u = y.length; u--;)(d = y[u]) && (c = o ? Z.call(r, d) : f[u]) > -1 && (r[c] = !(a[c] = d))
                                    }
                                } else y = m(y === a ? y.splice(h, y.length) : y),
                                    o ? o(null, a, y, l) : K.apply(a, y)
                            })
                    }
                    function v(e) {
                        for (var t, n, i, r = e.length,
                                 o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                                    return e === t
                                },
                                a, !0), c = p(function(e) {
                                    return Z.call(t, e) > -1
                                },
                                a, !0), u = [function(e, n, i) {
                                return ! o && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                            }]; s < r; s++) if (n = _.relative[e[s].type]) u = [p(h(u), n)];
                        else {
                            if (n = _.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                                for (i = ++s; i < r && !_.relative[e[i].type]; i++);
                                return g(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1)).replace(ae, "$1"), n, s < i && v(e.slice(s, i)), i < r && v(e = e.slice(i)), i < r && f(e))
                            }
                            u.push(n)
                        }
                        return h(u)
                    }
                    function y(e, t) {
                        var n = 0,
                            i = t.length > 0,
                            o = e.length > 0,
                            s = function(r, s, l, c, u) {
                                var d, f, p, h = [],
                                    g = 0,
                                    v = "0",
                                    y = r && [],
                                    x = null != u,
                                    b = D,
                                    k = r || o && _.find.TAG("*", u && s.parentNode || s),
                                    w = W += null == b ? 1 : Math.random() || .1;
                                for (x && (D = s !== P && s, C = n); null != (d = k[v]); v++) {
                                    if (o && d) {
                                        for (f = 0; p = e[f++];) if (p(d, s, l)) {
                                            c.push(d);
                                            break
                                        }
                                        x && (W = w, C = ++n)
                                    }
                                    i && ((d = !p && d) && g--, r && y.push(d))
                                }
                                if (g += v, i && v !== g) {
                                    for (f = 0; p = t[f++];) p(y, h, s, l);
                                    if (r) {
                                        if (g > 0) for (; v--;) y[v] || h[v] || (h[v] = Y.call(c));
                                        h = m(h)
                                    }
                                    K.apply(c, h),
                                    x && !r && h.length > 0 && g + t.length > 1 && a.uniqueSort(c)
                                }
                                return x && (W = w, D = b),
                                    y
                            };
                        return i ? r(s) : s
                    }
                    function x(e, t, n) {
                        for (var i = 0,
                                 r = t.length; i < r; i++) a(e, t[i], n);
                        return n
                    }
                    function b(e, t, n, i) {
                        var r, o, a, s, l, c = d(e);
                        if (!i && 1 === c.length) {
                            if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !M && _.relative[o[1].type]) {
                                if (t = _.find.ID(a.matches[0].replace(be, ke), t)[0], !t) return n;
                                e = e.slice(o.shift().value.length)
                            }
                            for (r = fe.needsContext.test(e) ? 0 : o.length; r--&&(a = o[r], !_.relative[s = a.type]);) if ((l = _.find[s]) && (i = l(a.matches[0].replace(be, ke), pe.test(o[0].type) && t.parentNode || t))) {
                                if (o.splice(r, 1), e = i.length && f(o), !e) return K.apply(n, J.call(i, 0)),
                                    n;
                                break
                            }
                        }
                        return j(e, c)(i, t, M, n, pe.test(e)),
                            n
                    }
                    function k() {}
                    var w, C, _, S, T, j, E, D, A, P, N, M, B, I, O, F, R, H = "sizzle" + -new Date,
                        L = e.document,
                        q = {},
                        W = 0,
                        $ = 0,
                        z = i(),
                        G = i(),
                        U = i(),
                        X = typeof t,
                        Q = 1 << 31,
                        V = [],
                        Y = V.pop,
                        K = V.push,
                        J = V.slice,
                        Z = V.indexOf ||
                            function(e) {
                                for (var t = 0,
                                         n = this.length; t < n; t++) if (this[t] === e) return t;
                                return - 1
                            },
                        ee = "[\\x20\\t\\r\\n\\f]",
                        te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        ne = te.replace("w", "w#"),
                        ie = "([*^$|!~]?=)",
                        re = "\\[" + ee + "*(" + te + ")" + ee + "*(?:" + ie + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + ee + "*\\]",
                        oe = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + re.replace(3, 8) + ")*)|.*)\\)|)",
                        ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                        se = new RegExp("^" + ee + "*," + ee + "*"),
                        ce = new RegExp("^" + ee + "*([\\x20\\t\\r\\n\\f>+~])" + ee + "*"),
                        ue = new RegExp(oe),
                        de = new RegExp("^" + ne + "$"),
                        fe = {
                            ID: new RegExp("^#(" + te + ")"),
                            CLASS: new RegExp("^\\.(" + te + ")"),
                            NAME: new RegExp("^\\[name=['\"]?(" + te + ")['\"]?\\]"),
                            TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
                            ATTR: new RegExp("^" + re),
                            PSEUDO: new RegExp("^" + oe),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                        },
                        pe = /[\x20\t\r\n\f]*[+~]/,
                        he = /^[^{]+\{\s*\[native code/,
                        me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        ge = /^(?:input|select|textarea|button)$/i,
                        ve = /^h\d$/i,
                        ye = /'|\\/g,
                        xe = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                        be = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                        ke = function(e, t) {
                            var n = "0x" + t - 65536;
                            return n !== n ? t: n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                        };
                    try {
                        J.call(L.documentElement.childNodes, 0)[0].nodeType
                    } catch(we) {
                        J = function(e) {
                            for (var t, n = []; t = this[e++];) n.push(t);
                            return n
                        }
                    }
                    T = a.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !! t && "HTML" !== t.nodeName
                    },
                        A = a.setDocument = function(e) {
                            var i = e ? e.ownerDocument || e: L;
                            return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, N = i.documentElement, M = T(i), q.tagNameNoComments = o(function(e) {
                                return e.appendChild(i.createComment("")),
                                    !e.getElementsByTagName("*").length
                            }), q.attributes = o(function(e) {
                                e.innerHTML = "<select></select>";
                                var t = typeof e.lastChild.getAttribute("multiple");
                                return "boolean" !== t && "string" !== t
                            }), q.getByClassName = o(function(e) {
                                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                                !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
                            }), q.getByName = o(function(e) {
                                e.id = H + 0,
                                    e.innerHTML = "<a name='" + H + "'></a><div name='" + H + "'></div>",
                                    N.insertBefore(e, N.firstChild);
                                var t = i.getElementsByName && i.getElementsByName(H).length === 2 + i.getElementsByName(H + 0).length;
                                return q.getIdNotName = !i.getElementById(H),
                                    N.removeChild(e),
                                    t
                            }), _.attrHandle = o(function(e) {
                                return e.innerHTML = "<a href='#'></a>",
                                e.firstChild && typeof e.firstChild.getAttribute !== X && "#" === e.firstChild.getAttribute("href")
                            }) ? {}: {
                                href: function(e) {
                                    return e.getAttribute("href", 2)
                                },
                                type: function(e) {
                                    return e.getAttribute("type")
                                }
                            },
                                q.getIdNotName ? (_.find.ID = function(e, t) {
                                    if (typeof t.getElementById !== X && !M) {
                                        var n = t.getElementById(e);
                                        return n && n.parentNode ? [n] : []
                                    }
                                },
                                    _.filter.ID = function(e) {
                                        var t = e.replace(be, ke);
                                        return function(e) {
                                            return e.getAttribute("id") === t
                                        }
                                    }) : (_.find.ID = function(e, n) {
                                    if (typeof n.getElementById !== X && !M) {
                                        var i = n.getElementById(e);
                                        return i ? i.id === e || typeof i.getAttributeNode !== X && i.getAttributeNode("id").value === e ? [i] : t: []
                                    }
                                },
                                    _.filter.ID = function(e) {
                                        var t = e.replace(be, ke);
                                        return function(e) {
                                            var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                                            return n && n.value === t
                                        }
                                    }), _.find.TAG = q.tagNameNoComments ?
                                function(e, t) {
                                    if (typeof t.getElementsByTagName !== X) return t.getElementsByTagName(e)
                                }: function(e, t) {
                                    var n, i = [],
                                        r = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                        return i
                                    }
                                    return o
                                },
                                _.find.NAME = q.getByName &&
                                    function(e, t) {
                                        if (typeof t.getElementsByName !== X) return t.getElementsByName(name)
                                    },
                                _.find.CLASS = q.getByClassName &&
                                    function(e, t) {
                                        if (typeof t.getElementsByClassName !== X && !M) return t.getElementsByClassName(e)
                                    },
                                I = [], B = [":focus"], (q.qsa = n(i.querySelectorAll)) && (o(function(e) {
                                e.innerHTML = "<select><option selected=''></option></select>",
                                e.querySelectorAll("[selected]").length || B.push("\\[" + ee + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                                e.querySelectorAll(":checked").length || B.push(":checked")
                            }), o(function(e) {
                                e.innerHTML = "<input type='hidden' i=''/>",
                                e.querySelectorAll("[i^='']").length && B.push("[*^$]=" + ee + "*(?:\"\"|'')"),
                                e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    B.push(",.*:")
                            })), (q.matchesSelector = n(O = N.matchesSelector || N.mozMatchesSelector || N.webkitMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function(e) {
                                q.disconnectedMatch = O.call(e, "div"),
                                    O.call(e, "[s!='']:x"),
                                    I.push("!=", oe)
                            }), B = new RegExp(B.join("|")), I = new RegExp(I.join("|")), F = n(N.contains) || N.compareDocumentPosition ?
                                function(e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement: e,
                                        i = t && t.parentNode;
                                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                                }: function(e, t) {
                                    if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                                    return ! 1
                                },
                                R = N.compareDocumentPosition ?
                                    function(e, t) {
                                        var n;
                                        return e === t ? (E = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === i || F(L, e) ? -1 : t === i || F(L, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                                    }: function(e, t) {
                                        var n, r = 0,
                                            o = e.parentNode,
                                            a = t.parentNode,
                                            l = [e],
                                            c = [t];
                                        if (e === t) return E = !0,
                                            0;
                                        if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : 0;
                                        if (o === a) return s(e, t);
                                        for (n = e; n = n.parentNode;) l.unshift(n);
                                        for (n = t; n = n.parentNode;) c.unshift(n);
                                        for (; l[r] === c[r];) r++;
                                        return r ? s(l[r], c[r]) : l[r] === L ? -1 : c[r] === L ? 1 : 0
                                    },
                                E = !1, [0, 0].sort(R), q.detectDuplicates = E, P) : P
                        },
                        a.matches = function(e, t) {
                            return a(e, null, null, t)
                        },
                        a.matchesSelector = function(e, t) {
                            if ((e.ownerDocument || e) !== P && A(e), t = t.replace(xe, "='$1']"), q.matchesSelector && !M && (!I || !I.test(t)) && !B.test(t)) try {
                                var n = O.call(e, t);
                                if (n || q.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                            } catch(i) {}
                            return a(t, P, null, [e]).length > 0
                        },
                        a.contains = function(e, t) {
                            return (e.ownerDocument || e) !== P && A(e),
                                F(e, t)
                        },
                        a.attr = function(e, t) {
                            var n;
                            return (e.ownerDocument || e) !== P && A(e),
                            M || (t = t.toLowerCase()),
                                (n = _.attrHandle[t]) ? n(e) : M || q.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null
                        },
                        a.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        },
                        a.uniqueSort = function(e) {
                            var t, n = [],
                                i = 1,
                                r = 0;
                            if (E = !q.detectDuplicates, e.sort(R), E) {
                                for (; t = e[i]; i++) t === e[i - 1] && (r = n.push(i));
                                for (; r--;) e.splice(n[r], 1)
                            }
                            return e
                        },
                        S = a.getText = function(e) {
                            var t, n = "",
                                i = 0,
                                r = e.nodeType;
                            if (r) {
                                if (1 === r || 9 === r || 11 === r) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                                } else if (3 === r || 4 === r) return e.nodeValue
                            } else for (; t = e[i]; i++) n += S(t);
                            return n
                        },
                        _ = a.selectors = {
                            cacheLength: 50,
                            createPseudo: r,
                            match: fe,
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(be, ke),
                                        e[3] = (e[4] || e[5] || "").replace(be, ke),
                                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                        e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(),
                                        "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]),
                                        e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[5] && e[2];
                                    return fe.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : n && ue.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    return "*" === e ?
                                        function() {
                                            return ! 0
                                        }: (e = e.replace(be, ke).toLowerCase(),
                                            function(t) {
                                                return t.nodeName && t.nodeName.toLowerCase() === e
                                            })
                                },
                                CLASS: function(e) {
                                    var t = z[e + " "];
                                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && z(e,
                                            function(e) {
                                                return t.test(e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                                            })
                                },
                                ATTR: function(e, t, n) {
                                    return function(i) {
                                        var r = a.attr(i, e);
                                        return null == r ? "!=" === t: !t || (r += "", "=" === t ? r === n: "!=" === t ? r !== n: "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice( - n.length) === n: "~=" === t ? (" " + r + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(e, t, n, i, r) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice( - 4),
                                        s = "of-type" === t;
                                    return 1 === i && 0 === r ?
                                        function(e) {
                                            return !! e.parentNode
                                        }: function(t, n, l) {
                                            var c, u, d, f, p, h, m = o !== a ? "nextSibling": "previousSibling",
                                                g = t.parentNode,
                                                v = s && t.nodeName.toLowerCase(),
                                                y = !l && !s;
                                            if (g) {
                                                if (o) {
                                                    for (; m;) {
                                                        for (d = t; d = d[m];) if (s ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                                                        h = m = "only" === e && !h && "nextSibling"
                                                    }
                                                    return ! 0
                                                }
                                                if (h = [a ? g.firstChild: g.lastChild], a && y) {
                                                    for (u = g[H] || (g[H] = {}), c = u[e] || [], p = c[0] === W && c[1], f = c[0] === W && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();) if (1 === d.nodeType && ++f && d === t) {
                                                        u[e] = [W, p, f];
                                                        break
                                                    }
                                                } else if (y && (c = (t[H] || (t[H] = {}))[e]) && c[0] === W) f = c[1];
                                                else for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v: 1 !== d.nodeType) || !++f || (y && ((d[H] || (d[H] = {}))[e] = [W, f]), d !== t)););
                                                return f -= r,
                                                f === i || f % i === 0 && f / i >= 0
                                            }
                                        }
                                },
                                PSEUDO: function(e, t) {
                                    var n, i = _.pseudos[e] || _.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                                    return i[H] ? i(t) : i.length > 1 ? (n = [e, e, "", t], _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, n) {
                                        for (var r, o = i(e, t), a = o.length; a--;) r = Z.call(e, o[a]),
                                            e[r] = !(n[r] = o[a])
                                    }) : function(e) {
                                        return i(e, 0, n)
                                    }) : i
                                }
                            },
                            pseudos: {
                                not: r(function(e) {
                                    var t = [],
                                        n = [],
                                        i = j(e.replace(ae, "$1"));
                                    return i[H] ? r(function(e, t, n, r) {
                                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                    }) : function(e, r, o) {
                                        return t[0] = e,
                                            i(t, null, o, n),
                                            !n.pop()
                                    }
                                }),
                                has: r(function(e) {
                                    return function(t) {
                                        return a(e, t).length > 0
                                    }
                                }),
                                contains: r(function(e) {
                                    return function(t) {
                                        return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                                    }
                                }),
                                lang: r(function(e) {
                                    return de.test(e || "") || a.error("unsupported lang: " + e),
                                        e = e.replace(be, ke).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do
                                                if (n = M ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(),
                                                n === e || 0 === n.indexOf(e + "-");
                                            while ((t = t.parentNode) && 1 === t.nodeType);
                                            return ! 1
                                        }
                                }),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === N
                                },
                                focus: function(e) {
                                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: function(e) {
                                    return e.disabled === !1
                                },
                                disabled: function(e) {
                                    return e.disabled === !0
                                },
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex,
                                    e.selected === !0
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                                    return ! 0
                                },
                                parent: function(e) {
                                    return ! _.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return ve.test(e.nodeName)
                                },
                                input: function(e) {
                                    return ge.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                                },
                                first: u(function() {
                                    return [0]
                                }),
                                last: u(function(e, t) {
                                    return [t - 1]
                                }),
                                eq: u(function(e, t, n) {
                                    return [n < 0 ? n + t: n]
                                }),
                                even: u(function(e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e
                                }),
                                odd: u(function(e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e
                                }),
                                lt: u(function(e, t, n) {
                                    for (var i = n < 0 ? n + t: n; --i >= 0;) e.push(i);
                                    return e
                                }),
                                gt: u(function(e, t, n) {
                                    for (var i = n < 0 ? n + t: n; ++i < t;) e.push(i);
                                    return e
                                })
                            }
                        };
                    for (w in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) _.pseudos[w] = l(w);
                    for (w in {
                        submit: !0,
                        reset: !0
                    }) _.pseudos[w] = c(w);
                    j = a.compile = function(e, t) {
                        var n, i = [],
                            r = [],
                            o = U[e + " "];
                        if (!o) {
                            for (t || (t = d(e)), n = t.length; n--;) o = v(t[n]),
                                o[H] ? i.push(o) : r.push(o);
                            o = U(e, y(r, i))
                        }
                        return o
                    },
                        _.pseudos.nth = _.pseudos.eq,
                        _.filters = k.prototype = _.pseudos,
                        _.setFilters = new k,
                        A(),
                        a.attr = le.attr,
                        le.find = a,
                        le.expr = a.selectors,
                        le.expr[":"] = le.expr.pseudos,
                        le.unique = a.uniqueSort,
                        le.text = a.getText,
                        le.isXMLDoc = a.isXML,
                        le.contains = a.contains
                } (e);
            var qe = /Until$/,
                We = /^(?:parents|prev(?:Until|All))/,
                $e = /^.[^:#\[\.,]*$/,
                ze = le.expr.match.needsContext,
                Ge = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            le.fn.extend({
                find: function(e) {
                    var t, n, i, r = this.length;
                    if ("string" != typeof e) return i = this,
                        this.pushStack(le(e).filter(function() {
                            for (t = 0; t < r; t++) if (le.contains(i[t], this)) return ! 0
                        }));
                    for (n = [], t = 0; t < r; t++) le.find(e, this[t], n);
                    return n = this.pushStack(r > 1 ? le.unique(n) : n),
                        n.selector = (this.selector ? this.selector + " ": "") + e,
                        n
                },
                has: function(e) {
                    var t, n = le(e, this),
                        i = n.length;
                    return this.filter(function() {
                        for (t = 0; t < i; t++) if (le.contains(this, n[t])) return ! 0
                    })
                },
                not: function(e) {
                    return this.pushStack(d(this, e, !1))
                },
                filter: function(e) {
                    return this.pushStack(d(this, e, !0))
                },
                is: function(e) {
                    return !! e && ("string" == typeof e ? ze.test(e) ? le(e, this.context).index(this[0]) >= 0 : le.filter(e, this).length > 0 : this.filter(e).length > 0)
                },
                closest: function(e, t) {
                    for (var n, i = 0,
                             r = this.length,
                             o = [], a = ze.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; i < r; i++) for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                        if (a ? a.index(n) > -1 : le.find.matchesSelector(n, e)) {
                            o.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                    return this.pushStack(o.length > 1 ? le.unique(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
                },
                add: function(e, t) {
                    var n = "string" == typeof e ? le(e, t) : le.makeArray(e && e.nodeType ? [e] : e),
                        i = le.merge(this.get(), n);
                    return this.pushStack(le.unique(i))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
                }
            }),
                le.fn.andSelf = le.fn.addBack,
                le.each({
                        parent: function(e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t: null
                        },
                        parents: function(e) {
                            return le.dir(e, "parentNode")
                        },
                        parentsUntil: function(e, t, n) {
                            return le.dir(e, "parentNode", n)
                        },
                        next: function(e) {
                            return u(e, "nextSibling")
                        },
                        prev: function(e) {
                            return u(e, "previousSibling")
                        },
                        nextAll: function(e) {
                            return le.dir(e, "nextSibling")
                        },
                        prevAll: function(e) {
                            return le.dir(e, "previousSibling")
                        },
                        nextUntil: function(e, t, n) {
                            return le.dir(e, "nextSibling", n)
                        },
                        prevUntil: function(e, t, n) {
                            return le.dir(e, "previousSibling", n)
                        },
                        siblings: function(e) {
                            return le.sibling((e.parentNode || {}).firstChild, e)
                        },
                        children: function(e) {
                            return le.sibling(e.firstChild)
                        },
                        contents: function(e) {
                            return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: le.merge([], e.childNodes)
                        }
                    },
                    function(e, t) {
                        le.fn[e] = function(n, i) {
                            var r = le.map(this, t, n);
                            return qe.test(e) || (i = n),
                            i && "string" == typeof i && (r = le.filter(i, r)),
                                r = this.length > 1 && !Ge[e] ? le.unique(r) : r,
                            this.length > 1 && We.test(e) && (r = r.reverse()),
                                this.pushStack(r)
                        }
                    }),
                le.extend({
                    filter: function(e, t, n) {
                        return n && (e = ":not(" + e + ")"),
                            1 === t.length ? le.find.matchesSelector(t[0], e) ? [t[0]] : [] : le.find.matches(e, t)
                    },
                    dir: function(e, n, i) {
                        for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !le(o).is(i));) 1 === o.nodeType && r.push(o),
                            o = o[n];
                        return r
                    },
                    sibling: function(e, t) {
                        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                        return n
                    }
                });
            var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                Xe = / jQuery\d+="(?:null|\d+)"/g,
                Qe = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
                Ve = /^\s+/,
                Ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                Ke = /<([\w:]+)/,
                Je = /<tbody/i,
                Ze = /<|&#?\w+;/,
                et = /<(?:script|style|link)/i,
                tt = /^(?:checkbox|radio)$/i,
                nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                it = /^$|\/(?:java|ecma)script/i,
                rt = /^true\/(.*)/,
                ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                at = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                },
                st = f(Q),
                lt = st.appendChild(Q.createElement("div"));
            at.optgroup = at.option,
                at.tbody = at.tfoot = at.colgroup = at.caption = at.thead,
                at.th = at.td,
                le.fn.extend({
                    text: function(e) {
                        return le.access(this,
                            function(e) {
                                return e === t ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(e))
                            },
                            null, e, arguments.length)
                    },
                    wrapAll: function(e) {
                        if (le.isFunction(e)) return this.each(function(t) {
                            le(this).wrapAll(e.call(this, t))
                        });
                        if (this[0]) {
                            var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                            this[0].parentNode && t.insertBefore(this[0]),
                                t.map(function() {
                                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                                    return e
                                }).append(this)
                        }
                        return this
                    },
                    wrapInner: function(e) {
                        return le.isFunction(e) ? this.each(function(t) {
                            le(this).wrapInner(e.call(this, t))
                        }) : this.each(function() {
                            var t = le(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function(e) {
                        var t = le.isFunction(e);
                        return this.each(function(n) {
                            le(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function() {
                        return this.parent().each(function() {
                            le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
                        }).end()
                    },
                    append: function() {
                        return this.domManip(arguments, !0,
                            function(e) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(e)
                            })
                    },
                    prepend: function() {
                        return this.domManip(arguments, !0,
                            function(e) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(e, this.firstChild)
                            })
                    },
                    before: function() {
                        return this.domManip(arguments, !1,
                            function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            })
                    },
                    after: function() {
                        return this.domManip(arguments, !1,
                            function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            })
                    },
                    remove: function(e, t) {
                        for (var n, i = 0; null != (n = this[i]); i++)(!e || le.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || le.cleanData(x(n)), n.parentNode && (t && le.contains(n.ownerDocument, n) && g(x(n, "script")), n.parentNode.removeChild(n)));
                        return this
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) {
                            for (1 === e.nodeType && le.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                            e.options && le.nodeName(e, "select") && (e.options.length = 0)
                        }
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e,
                            t = null == t ? e: t,
                            this.map(function() {
                                return le.clone(this, e, t)
                            })
                    },
                    html: function(e) {
                        return le.access(this,
                            function(e) {
                                var n = this[0] || {},
                                    i = 0,
                                    r = this.length;
                                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Xe, "") : t;
                                if ("string" == typeof e && !et.test(e) && (le.support.htmlSerialize || !Qe.test(e)) && (le.support.leadingWhitespace || !Ve.test(e)) && !at[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = e.replace(Ye, "<$1></$2>");
                                    try {
                                        for (; i < r; i++) n = this[i] || {},
                                        1 === n.nodeType && (le.cleanData(x(n, !1)), n.innerHTML = e);
                                        n = 0
                                    } catch(o) {}
                                }
                                n && this.empty().append(e)
                            },
                            null, e, arguments.length)
                    },
                    replaceWith: function(e) {
                        var t = le.isFunction(e);
                        return t || "string" == typeof e || (e = le(e).not(this).detach()),
                            this.domManip([e], !0,
                                function(e) {
                                    var t = this.nextSibling,
                                        n = this.parentNode;
                                    n && (le(this).remove(), n.insertBefore(e, t))
                                })
                    },
                    detach: function(e) {
                        return this.remove(e, !0)
                    },
                    domManip: function(e, n, i) {
                        e = te.apply([], e);
                        var r, o, a, s, l, c, u = 0,
                            d = this.length,
                            f = this,
                            g = d - 1,
                            v = e[0],
                            y = le.isFunction(v);
                        if (y || !(d <= 1 || "string" != typeof v || le.support.checkClone) && nt.test(v)) return this.each(function(r) {
                            var o = f.eq(r);
                            y && (e[0] = v.call(this, r, n ? o.html() : t)),
                                o.domManip(e, n, i)
                        });
                        if (d && (c = le.buildFragment(e, this[0].ownerDocument, !1, this), r = c.firstChild, 1 === c.childNodes.length && (c = r), r)) {
                            for (n = n && le.nodeName(r, "tr"), s = le.map(x(c, "script"), h), a = s.length; u < d; u++) o = c,
                            u !== g && (o = le.clone(o, !0, !0), a && le.merge(s, x(o, "script"))),
                                i.call(n && le.nodeName(this[u], "table") ? p(this[u], "tbody") : this[u], o, u);
                            if (a) for (l = s[s.length - 1].ownerDocument, le.map(s, m), u = 0; u < a; u++) o = s[u],
                            it.test(o.type || "") && !le._data(o, "globalEval") && le.contains(l, o) && (o.src ? le.ajax({
                                url: o.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : le.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
                            c = r = null
                        }
                        return this
                    }
                }),
                le.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    },
                    function(e, t) {
                        le.fn[e] = function(e) {
                            for (var n, i = 0,
                                     r = [], o = le(e), a = o.length - 1; i <= a; i++) n = i === a ? this: this.clone(!0),
                                le(o[i])[t](n),
                                ne.apply(r, n.get());
                            return this.pushStack(r)
                        }
                    }),
                le.extend({
                    clone: function(e, t, n) {
                        var i, r, o, a, s, l = le.contains(e.ownerDocument, e);
                        if (le.support.html5Clone || le.isXMLDoc(e) || !Qe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(o = lt.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e))) for (i = x(o), s = x(e), a = 0; null != (r = s[a]); ++a) i[a] && y(r, i[a]);
                        if (t) if (n) for (s = s || x(e), i = i || x(o), a = 0; null != (r = s[a]); a++) v(r, i[a]);
                        else v(e, o);
                        return i = x(o, "script"),
                        i.length > 0 && g(i, !l && x(e, "script")),
                            i = s = r = null,
                            o
                    },
                    buildFragment: function(e, t, n, i) {
                        for (var r, o, a, s, l, c, u, d = e.length,
                                 p = f(t), h = [], m = 0; m < d; m++) if (o = e[m], o || 0 === o) if ("object" === le.type(o)) le.merge(h, o.nodeType ? [o] : o);
                        else if (Ze.test(o)) {
                            for (s = s || p.appendChild(t.createElement("div")), l = (Ke.exec(o) || ["", ""])[1].toLowerCase(), u = at[l] || at._default, s.innerHTML = u[1] + o.replace(Ye, "<$1></$2>") + u[2], r = u[0]; r--;) s = s.lastChild;
                            if (!le.support.leadingWhitespace && Ve.test(o) && h.push(t.createTextNode(Ve.exec(o)[0])), !le.support.tbody) for (o = "table" !== l || Je.test(o) ? "<table>" !== u[1] || Je.test(o) ? 0 : s: s.firstChild, r = o && o.childNodes.length; r--;) le.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                            for (le.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                            s = p.lastChild
                        } else h.push(t.createTextNode(o));
                        for (s && p.removeChild(s), le.support.appendChecked || le.grep(x(h, "input"), b), m = 0; o = h[m++];) if ((!i || le.inArray(o, i) === -1) && (a = le.contains(o.ownerDocument, o), s = x(p.appendChild(o), "script"), a && g(s), n)) for (r = 0; o = s[r++];) it.test(o.type || "") && n.push(o);
                        return s = null,
                            p
                    },
                    cleanData: function(e, t) {
                        for (var n, i, r, o, a = 0,
                                 s = le.expando,
                                 l = le.cache,
                                 c = le.support.deleteExpando,
                                 u = le.event.special; null != (n = e[a]); a++) if ((t || le.acceptData(n)) && (r = n[s], o = r && l[r])) {
                            if (o.events) for (i in o.events) u[i] ? le.event.remove(n, i) : le.removeEvent(n, i, o.handle);
                            l[r] && (delete l[r], c ? delete n[s] : typeof n.removeAttribute !== X ? n.removeAttribute(s) : n[s] = null, Z.push(r))
                        }
                    }
                });
            var ct, ut, dt, ft = /alpha\([^)]*\)/i,
                pt = /opacity\s*=\s*([^)]*)/,
                ht = /^(top|right|bottom|left)$/,
                mt = /^(none|table(?!-c[ea]).+)/,
                gt = /^margin/,
                vt = new RegExp("^(" + ce + ")(.*)$", "i"),
                yt = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
                xt = new RegExp("^([+-])=(" + ce + ")", "i"),
                bt = {
                    BODY: "block"
                },
                kt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                wt = {
                    letterSpacing: 0,
                    fontWeight: 400
                },
                Ct = ["Top", "Right", "Bottom", "Left"],
                _t = ["Webkit", "O", "Moz", "ms"];
            le.fn.extend({
                css: function(e, n) {
                    return le.access(this,
                        function(e, n, i) {
                            var r, o, a = {},
                                s = 0;
                            if (le.isArray(n)) {
                                for (o = ut(e), r = n.length; s < r; s++) a[n[s]] = le.css(e, n[s], !1, o);
                                return a
                            }
                            return i !== t ? le.style(e, n, i) : le.css(e, n)
                        },
                        e, n, arguments.length > 1)
                },
                show: function() {
                    return C(this, !0)
                },
                hide: function() {
                    return C(this)
                },
                toggle: function(e) {
                    var t = "boolean" == typeof e;
                    return this.each(function() { (t ? e: w(this)) ? le(this).show() : le(this).hide()
                    })
                }
            }),
                le.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = dt(e, "opacity");
                                    return "" === n ? "1": n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        columnCount: !0,
                        fillOpacity: !0,
                        fontWeight: !0,
                        lineHeight: !0,
                        opacity: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {
                        "float": le.support.cssFloat ? "cssFloat": "styleFloat"
                    },
                    style: function(e, n, i, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var o, a, s, l = le.camelCase(n),
                                c = e.style;
                            if (n = le.cssProps[l] || (le.cssProps[l] = k(c, l)), s = le.cssHooks[n] || le.cssHooks[l], i === t) return s && "get" in s && (o = s.get(e, !1, r)) !== t ? o: c[n];
                            if (a = typeof i, "string" === a && (o = xt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(le.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || le.cssNumber[l] || (i += "px"), le.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (i = s.set(e, i, r)) === t))) try {
                                c[n] = i
                            } catch(u) {}
                        }
                    },
                    css: function(e, n, i, r) {
                        var o, a, s, l = le.camelCase(n);
                        return n = le.cssProps[l] || (le.cssProps[l] = k(e.style, l)),
                            s = le.cssHooks[n] || le.cssHooks[l],
                        s && "get" in s && (a = s.get(e, !0, i)),
                        a === t && (a = dt(e, n, r)),
                        "normal" === a && n in wt && (a = wt[n]),
                            "" === i || i ? (o = parseFloat(a), i === !0 || le.isNumeric(o) ? o || 0 : a) : a
                    },
                    swap: function(e, t, n, i) {
                        var r, o, a = {};
                        for (o in t) a[o] = e.style[o],
                            e.style[o] = t[o];
                        r = n.apply(e, i || []);
                        for (o in t) e.style[o] = a[o];
                        return r
                    }
                }),
                e.getComputedStyle ? (ut = function(t) {
                    return e.getComputedStyle(t, null)
                },
                    dt = function(e, n, i) {
                        var r, o, a, s = i || ut(e),
                            l = s ? s.getPropertyValue(n) || s[n] : t,
                            c = e.style;
                        return s && ("" !== l || le.contains(e.ownerDocument, e) || (l = le.style(e, n)), yt.test(l) && gt.test(n) && (r = c.width, o = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = r, c.minWidth = o, c.maxWidth = a)),
                            l
                    }) : Q.documentElement.currentStyle && (ut = function(e) {
                        return e.currentStyle
                    },
                        dt = function(e, n, i) {
                            var r, o, a, s = i || ut(e),
                                l = s ? s[n] : t,
                                c = e.style;
                            return null == l && c && c[n] && (l = c[n]),
                            yt.test(l) && !ht.test(n) && (r = c.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em": l, l = c.pixelLeft + "px", c.left = r, a && (o.left = a)),
                                "" === l ? "auto": l
                        }),
                le.each(["height", "width"],
                    function(e, t) {
                        le.cssHooks[t] = {
                            get: function(e, n, i) {
                                if (n) return 0 === e.offsetWidth && mt.test(le.css(e, "display")) ? le.swap(e, kt,
                                    function() {
                                        return T(e, t, i)
                                    }) : T(e, t, i)
                            },
                            set: function(e, n, i) {
                                var r = i && ut(e);
                                return _(e, n, i ? S(e, t, i, le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, r), r) : 0)
                            }
                        }
                    }),
            le.support.opacity || (le.cssHooks.opacity = {
                get: function(e, t) {
                    return pt.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
                },
                set: function(e, t) {
                    var n = e.style,
                        i = e.currentStyle,
                        r = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
                        o = i && i.filter || n.filter || "";
                    n.zoom = 1,
                    (t >= 1 || "" === t) && "" === le.trim(o.replace(ft, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ft.test(o) ? o.replace(ft, r) : o + " " + r)
                }
            }),
                le(function() {
                    le.support.reliableMarginRight || (le.cssHooks.marginRight = {
                        get: function(e, t) {
                            if (t) return le.swap(e, {
                                    display: "inline-block"
                                },
                                dt, [e, "marginRight"])
                        }
                    }),
                    !le.support.pixelPosition && le.fn.position && le.each(["top", "left"],
                        function(e, t) {
                            le.cssHooks[t] = {
                                get: function(e, n) {
                                    if (n) return n = dt(e, t),
                                        yt.test(n) ? le(e).position()[t] + "px": n
                                }
                            }
                        })
                }),
            le.expr && le.expr.filters && (le.expr.filters.hidden = function(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !le.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || le.css(e, "display"))
            },
                le.expr.filters.visible = function(e) {
                    return ! le.expr.filters.hidden(e)
                }),
                le.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    },
                    function(e, t) {
                        le.cssHooks[e + t] = {
                            expand: function(n) {
                                for (var i = 0,
                                         r = {},
                                         o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ct[i] + t] = o[i] || o[i - 2] || o[0];
                                return r
                            }
                        },
                        gt.test(e) || (le.cssHooks[e + t].set = _)
                    });
            var St = /%20/g,
                Tt = /\[\]$/,
                jt = /\r?\n/g,
                Et = /^(?:submit|button|image|reset|file)$/i,
                Dt = /^(?:input|select|textarea|keygen)/i;
            le.fn.extend({
                serialize: function() {
                    return le.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = le.prop(this, "elements");
                        return e ? le.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !le(this).is(":disabled") && Dt.test(this.nodeName) && !Et.test(e) && (this.checked || !tt.test(e))
                    }).map(function(e, t) {
                        var n = le(this).val();
                        return null == n ? null: le.isArray(n) ? le.map(n,
                            function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(jt, "\r\n")
                                }
                            }) : {
                            name: t.name,
                            value: n.replace(jt, "\r\n")
                        }
                    }).get()
                }
            }),
                le.param = function(e, n) {
                    var i, r = [],
                        o = function(e, t) {
                            t = le.isFunction(t) ? t() : null == t ? "": t,
                                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                        };
                    if (n === t && (n = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e,
                        function() {
                            o(this.name, this.value)
                        });
                    else for (i in e) D(i, e[i], n, o);
                    return r.join("&").replace(St, "+")
                },
                le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                    function(e, t) {
                        le.fn[t] = function(e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                        }
                    }),
                le.fn.hover = function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                };
            var At, Pt, Nt = le.now(),
                Mt = /\?/,
                Bt = /#.*$/,
                It = /([?&])_=[^&]*/,
                Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Rt = /^(?:GET|HEAD)$/,
                Ht = /^\/\//,
                Lt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                qt = le.fn.load,
                Wt = {},
                $t = {},
                zt = "*/".concat("*");
            try {
                Pt = V.href
            } catch(Gt) {
                Pt = Q.createElement("a"),
                    Pt.href = "",
                    Pt = Pt.href
            }
            At = Lt.exec(Pt.toLowerCase()) || [],
                le.fn.load = function(e, n, i) {
                    if ("string" != typeof e && qt) return qt.apply(this, arguments);
                    var r, o, a, s = this,
                        l = e.indexOf(" ");
                    return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)),
                        le.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (a = "POST"),
                    s.length > 0 && le.ajax({
                        url: e,
                        type: a,
                        dataType: "html",
                        data: n
                    }).done(function(e) {
                        o = arguments,
                            s.html(r ? le("<div>").append(le.parseHTML(e)).find(r) : e)
                    }).complete(i &&
                        function(e, t) {
                            s.each(i, o || [e.responseText, t, e])
                        }),
                        this
                },
                le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
                    function(e, t) {
                        le.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    }),
                le.each(["get", "post"],
                    function(e, n) {
                        le[n] = function(e, i, r, o) {
                            return le.isFunction(i) && (o = o || r, r = i, i = t),
                                le.ajax({
                                    url: e,
                                    type: n,
                                    dataType: o,
                                    data: i,
                                    success: r
                                })
                        }
                    }),
                le.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Pt,
                        type: "GET",
                        isLocal: Ft.test(At[1]),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": zt,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /xml/,
                            html: /html/,
                            json: /json/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText"
                        },
                        converters: {
                            "* text": e.String,
                            "text html": !0,
                            "text json": le.parseJSON,
                            "text xml": le.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? N(N(e, le.ajaxSettings), t) : N(le.ajaxSettings, e)
                    },
                    ajaxPrefilter: A(Wt),
                    ajaxTransport: A($t),
                    ajax: function(e, n) {
                        function i(e, n, i, r) {
                            var o, d, y, x, k, C = n;
                            2 !== b && (b = 2, l && clearTimeout(l), u = t, s = r || "", w.readyState = e > 0 ? 4 : 0, i && (x = M(f, w, i)), e >= 200 && e < 300 || 304 === e ? (f.ifModified && (k = w.getResponseHeader("Last-Modified"), k && (le.lastModified[a] = k), k = w.getResponseHeader("etag"), k && (le.etag[a] = k)), 204 === e ? (o = !0, C = "nocontent") : 304 === e ? (o = !0, C = "notmodified") : (o = B(f, x), C = o.state, d = o.data, y = o.error, o = !y)) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (n || C) + "", o ? m.resolveWith(p, [d, C, w]) : m.rejectWith(p, [w, C, y]), w.statusCode(v), v = t, c && h.trigger(o ? "ajaxSuccess": "ajaxError", [w, f, o ? d: y]), g.fireWith(p, [w, C]), c && (h.trigger("ajaxComplete", [w, f]), --le.active || le.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (n = e, e = t),
                            n = n || {};
                        var r, o, a, s, l, c, u, d, f = le.ajaxSetup({},
                            n),
                            p = f.context || f,
                            h = f.context && (p.nodeType || p.jquery) ? le(p) : le.event,
                            m = le.Deferred(),
                            g = le.Callbacks("once memory"),
                            v = f.statusCode || {},
                            y = {},
                            x = {},
                            b = 0,
                            k = "canceled",
                            w = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (2 === b) {
                                        if (!d) for (d = {}; t = Ot.exec(s);) d[t[1].toLowerCase()] = t[2];
                                        t = d[e.toLowerCase()]
                                    }
                                    return null == t ? null: t
                                },
                                getAllResponseHeaders: function() {
                                    return 2 === b ? s: null
                                },
                                setRequestHeader: function(e, t) {
                                    var n = e.toLowerCase();
                                    return b || (e = x[n] = x[n] || e, y[e] = t),
                                        this
                                },
                                overrideMimeType: function(e) {
                                    return b || (f.mimeType = e),
                                        this
                                },
                                statusCode: function(e) {
                                    var t;
                                    if (e) if (b < 2) for (t in e) v[t] = [v[t], e[t]];
                                    else w.always(e[w.status]);
                                    return this
                                },
                                abort: function(e) {
                                    var t = e || k;
                                    return u && u.abort(t),
                                        i(0, t),
                                        this
                                }
                            };
                        if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || Pt) + "").replace(Bt, "").replace(Ht, At[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = le.trim(f.dataType || "*").toLowerCase().match(ue) || [""], null == f.crossDomain && (r = Lt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === At[1] && r[2] === At[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (At[3] || ("http:" === At[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = le.param(f.data, f.traditional)), P(Wt, f, n, w), 2 === b) return w;
                        c = f.global,
                        c && 0 === le.active++&&le.event.trigger("ajaxStart"),
                            f.type = f.type.toUpperCase(),
                            f.hasContent = !Rt.test(f.type),
                            a = f.url,
                        f.hasContent || (f.data && (a = f.url += (Mt.test(a) ? "&": "?") + f.data, delete f.data), f.cache === !1 && (f.url = It.test(a) ? a.replace(It, "$1_=" + Nt++) : a + (Mt.test(a) ? "&": "?") + "_=" + Nt++)),
                        f.ifModified && (le.lastModified[a] && w.setRequestHeader("If-Modified-Since", le.lastModified[a]), le.etag[a] && w.setRequestHeader("If-None-Match", le.etag[a])),
                        (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", f.contentType),
                            w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + zt + "; q=0.01": "") : f.accepts["*"]);
                        for (o in f.headers) w.setRequestHeader(o, f.headers[o]);
                        if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === b)) return w.abort();
                        k = "abort";
                        for (o in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) w[o](f[o]);
                        if (u = P($t, f, n, w)) {
                            w.readyState = 1,
                            c && h.trigger("ajaxSend", [w, f]),
                            f.async && f.timeout > 0 && (l = setTimeout(function() {
                                    w.abort("timeout")
                                },
                                f.timeout));
                            try {
                                b = 1,
                                    u.send(y, i)
                            } catch(C) {
                                if (! (b < 2)) throw C;
                                i( - 1, C)
                            }
                        } else i( - 1, "No Transport");
                        return w
                    },
                    getScript: function(e, n) {
                        return le.get(e, t, n, "script")
                    },
                    getJSON: function(e, t, n) {
                        return le.get(e, t, n, "json")
                    }
                }),
                le.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /(?:java|ecma)script/
                    },
                    converters: {
                        "text script": function(e) {
                            return le.globalEval(e),
                                e
                        }
                    }
                }),
                le.ajaxPrefilter("script",
                    function(e) {
                        e.cache === t && (e.cache = !1),
                        e.crossDomain && (e.type = "GET", e.global = !1)
                    }),
                le.ajaxTransport("script",
                    function(e) {
                        if (e.crossDomain) {
                            var n, i = Q.head || le("head")[0] || Q.documentElement;
                            return {
                                send: function(t, r) {
                                    n = Q.createElement("script"),
                                        n.async = !0,
                                    e.scriptCharset && (n.charset = e.scriptCharset),
                                        n.src = e.url,
                                        n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
                                        },
                                        i.insertBefore(n, i.firstChild)
                                },
                                abort: function() {
                                    n && n.onload(t, !0)
                                }
                            }
                        }
                    });
            var Ut = [],
                Xt = /(=)\?(?=&|$)|\?\?/;
            le.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Ut.pop() || le.expando + "_" + Nt++;
                    return this[e] = !0,
                        e
                }
            }),
                le.ajaxPrefilter("json jsonp",
                    function(n, i, r) {
                        var o, a, s, l = n.jsonp !== !1 && (Xt.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(n.data) && "data");
                        if (l || "jsonp" === n.dataTypes[0]) return o = n.jsonpCallback = le.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
                            l ? n[l] = n[l].replace(Xt, "$1" + o) : n.jsonp !== !1 && (n.url += (Mt.test(n.url) ? "&": "?") + n.jsonp + "=" + o),
                            n.converters["script json"] = function() {
                                return s || le.error(o + " was not called"),
                                    s[0]
                            },
                            n.dataTypes[0] = "json",
                            a = e[o],
                            e[o] = function() {
                                s = arguments
                            },
                            r.always(function() {
                                e[o] = a,
                                n[o] && (n.jsonpCallback = i.jsonpCallback, Ut.push(o)),
                                s && le.isFunction(a) && a(s[0]),
                                    s = a = t
                            }),
                            "script"
                    });
            var Qt, Vt, Yt = 0,
                Kt = e.ActiveXObject &&
                    function() {
                        var e;
                        for (e in Qt) Qt[e](t, !0)
                    };
            le.ajaxSettings.xhr = e.ActiveXObject ?
                function() {
                    return ! this.isLocal && I() || O()
                }: I,
                Vt = le.ajaxSettings.xhr(),
                le.support.cors = !!Vt && "withCredentials" in Vt,
                Vt = le.support.ajax = !!Vt,
            Vt && le.ajaxTransport(function(n) {
                if (!n.crossDomain || le.support.cors) {
                    var i;
                    return {
                        send: function(r, o) {
                            var a, s, l = n.xhr();
                            if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                            n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                            n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (s in r) l.setRequestHeader(s, r[s])
                            } catch(c) {}
                            l.send(n.hasContent && n.data || null),
                                i = function(e, r) {
                                    var s, c, u, d;
                                    try {
                                        if (i && (r || 4 === l.readyState)) if (i = t, a && (l.onreadystatechange = le.noop, Kt && delete Qt[a]), r) 4 !== l.readyState && l.abort();
                                        else {
                                            d = {},
                                                s = l.status,
                                                c = l.getAllResponseHeaders(),
                                            "string" == typeof l.responseText && (d.text = l.responseText);
                                            try {
                                                u = l.statusText
                                            } catch(f) {
                                                u = ""
                                            }
                                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                        }
                                    } catch(p) {
                                        r || o( - 1, p)
                                    }
                                    d && o(s, u, d, c)
                                },
                                n.async ? 4 === l.readyState ? setTimeout(i) : (a = ++Yt, Kt && (Qt || (Qt = {},
                                    le(e).unload(Kt)), Qt[a] = i), l.onreadystatechange = i) : i()
                        },
                        abort: function() {
                            i && i(t, !0)
                        }
                    }
                }
            });
            var Jt, Zt, en = /^(?:toggle|show|hide)$/,
                tn = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
                nn = /queueHooks$/,
                rn = [q],
                on = {
                    "*": [function(e, t) {
                        var n, i, r = this.createTween(e, t),
                            o = tn.exec(t),
                            a = r.cur(),
                            s = +a || 0,
                            l = 1,
                            c = 20;
                        if (o) {
                            if (n = +o[2], i = o[3] || (le.cssNumber[e] ? "": "px"), "px" !== i && s) {
                                s = le.css(r.elem, e, !0) || n || 1;
                                do l = l || ".5",
                                    s /= l,
                                    le.style(r.elem, e, s + i);
                                while (l !== (l = r.cur() / a) && 1 !== l && --c)
                            }
                            r.unit = i,
                                r.start = s,
                                r.end = o[1] ? s + (o[1] + 1) * n: n
                        }
                        return r
                    }]
                };
            le.Animation = le.extend(H, {
                tweener: function(e, t) {
                    le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0,
                             r = e.length; i < r; i++) n = e[i],
                        on[n] = on[n] || [],
                        on[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? rn.unshift(e) : rn.push(e)
                }
            }),
                le.Tween = W,
                W.prototype = {
                    constructor: W,
                    init: function(e, t, n, i, r, o) {
                        this.elem = e,
                            this.prop = n,
                            this.easing = r || "swing",
                            this.options = t,
                            this.start = this.now = this.cur(),
                            this.end = i,
                            this.unit = o || (le.cssNumber[n] ? "": "px")
                    },
                    cur: function() {
                        var e = W.propHooks[this.prop];
                        return e && e.get ? e.get(this) : W.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = W.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                            this.now = (this.end - this.start) * t + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : W.propHooks._default.set(this),
                            this
                    }
                },
                W.prototype.init.prototype = W.prototype,
                W.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
                        },
                        set: function(e) {
                            le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                        }
                    }
                },
                W.propHooks.scrollTop = W.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                le.each(["toggle", "show", "hide"],
                    function(e, t) {
                        var n = le.fn[t];
                        le.fn[t] = function(e, i, r) {
                            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, r)
                        }
                    }),
                le.fn.extend({
                    fadeTo: function(e, t, n, i) {
                        return this.filter(w).css("opacity", 0).show().end().animate({
                                opacity: t
                            },
                            e, n, i)
                    },
                    animate: function(e, t, n, i) {
                        var r = le.isEmptyObject(e),
                            o = le.speed(t, n, i),
                            a = function() {
                                var t = H(this, le.extend({},
                                    e), o);
                                a.finish = function() {
                                    t.stop(!0)
                                },
                                (r || le._data(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a,
                            r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, n, i) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop,
                                t(i)
                        };
                        return "string" != typeof e && (i = n, n = e, e = t),
                        n && e !== !1 && this.queue(e || "fx", []),
                            this.each(function() {
                                var t = !0,
                                    n = null != e && e + "queueHooks",
                                    o = le.timers,
                                    a = le._data(this);
                                if (n) a[n] && a[n].stop && r(a[n]);
                                else for (n in a) a[n] && a[n].stop && nn.test(n) && r(a[n]);
                                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1)); ! t && i || le.dequeue(this, e)
                            })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"),
                            this.each(function() {
                                var t, n = le._data(this),
                                    i = n[e + "queue"],
                                    r = n[e + "queueHooks"],
                                    o = le.timers,
                                    a = i ? i.length: 0;
                                for (n.finish = !0, le.queue(this, e, []), r && r.cur && r.cur.finish && r.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                delete n.finish
                            })
                    }
                }),
                le.each({
                        slideDown: $("show"),
                        slideUp: $("hide"),
                        slideToggle: $("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    },
                    function(e, t) {
                        le.fn[e] = function(e, n, i) {
                            return this.animate(t, e, n, i)
                        }
                    }),
                le.speed = function(e, t, n) {
                    var i = e && "object" == typeof e ? le.extend({},
                        e) : {
                        complete: n || !n && t || le.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !le.isFunction(t) && t
                    };
                    return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default,
                    null != i.queue && i.queue !== !0 || (i.queue = "fx"),
                        i.old = i.complete,
                        i.complete = function() {
                            le.isFunction(i.old) && i.old.call(this),
                            i.queue && le.dequeue(this, i.queue)
                        },
                        i
                },
                le.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return.5 - Math.cos(e * Math.PI) / 2
                    }
                },
                le.timers = [],
                le.fx = W.prototype.init,
                le.fx.tick = function() {
                    var e, n = le.timers,
                        i = 0;
                    for (Jt = le.now(); i < n.length; i++) e = n[i],
                    e() || n[i] !== e || n.splice(i--, 1);
                    n.length || le.fx.stop(),
                        Jt = t
                },
                le.fx.timer = function(e) {
                    e() && le.timers.push(e) && le.fx.start()
                },
                le.fx.interval = 13,
                le.fx.start = function() {
                    Zt || (Zt = setInterval(le.fx.tick, le.fx.interval))
                },
                le.fx.stop = function() {
                    clearInterval(Zt),
                        Zt = null
                },
                le.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                le.fx.step = {},
            le.expr && le.expr.filters && (le.expr.filters.animated = function(e) {
                return le.grep(le.timers,
                    function(t) {
                        return e === t.elem
                    }).length
            }),
                le.fn.offset = function(e) {
                    if (arguments.length) return e === t ? this: this.each(function(t) {
                        le.offset.setOffset(this, e, t)
                    });
                    var n, i, r = {
                            top: 0,
                            left: 0
                        },
                        o = this[0],
                        a = o && o.ownerDocument;
                    return a ? (n = a.documentElement, le.contains(n, o) ? (typeof o.getBoundingClientRect !== X && (r = o.getBoundingClientRect()), i = z(a), {
                        top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                        left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
                    }) : r) : void 0
                },
                le.offset = {
                    setOffset: function(e, t, n) {
                        var i = le.css(e, "position");
                        "static" === i && (e.style.position = "relative");
                        var r, o, a = le(e),
                            s = a.offset(),
                            l = le.css(e, "top"),
                            c = le.css(e, "left"),
                            u = ("absolute" === i || "fixed" === i) && le.inArray("auto", [l, c]) > -1,
                            d = {},
                            f = {};
                        u ? (f = a.position(), r = f.top, o = f.left) : (r = parseFloat(l) || 0, o = parseFloat(c) || 0),
                        le.isFunction(t) && (t = t.call(e, n, s)),
                        null != t.top && (d.top = t.top - s.top + r),
                        null != t.left && (d.left = t.left - s.left + o),
                            "using" in t ? t.using.call(e, d) : a.css(d)
                    }
                },
                le.fn.extend({
                    position: function() {
                        if (this[0]) {
                            var e, t, n = {
                                    top: 0,
                                    left: 0
                                },
                                i = this[0];
                            return "fixed" === le.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), n.left += le.css(e[0], "borderLeftWidth", !0)),
                                {
                                    top: t.top - n.top - le.css(i, "marginTop", !0),
                                    left: t.left - n.left - le.css(i, "marginLeft", !0)
                                }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var e = this.offsetParent || Q.documentElement; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");) e = e.offsetParent;
                            return e || Q.documentElement
                        })
                    }
                }),
                le.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    },
                    function(e, n) {
                        var i = /Y/.test(n);
                        le.fn[e] = function(r) {
                            return le.access(this,
                                function(e, r, o) {
                                    var a = z(e);
                                    return o === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : void(a ? a.scrollTo(i ? le(a).scrollLeft() : o, i ? o: le(a).scrollTop()) : e[r] = o)
                                },
                                e, r, arguments.length, null)
                        }
                    }),
                le.each({
                        Height: "height",
                        Width: "width"
                    },
                    function(e, n) {
                        le.each({
                                padding: "inner" + e,
                                content: n,
                                "": "outer" + e
                            },
                            function(i, r) {
                                le.fn[r] = function(r, o) {
                                    var a = arguments.length && (i || "boolean" != typeof r),
                                        s = i || (r === !0 || o === !0 ? "margin": "border");
                                    return le.access(this,
                                        function(n, i, r) {
                                            var o;
                                            return le.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? le.css(n, i, s) : le.style(n, i, r, s)
                                        },
                                        n, a ? r: t, a, null)
                                }
                            })
                    }),
                e.jQuery = e.$ = le,
            "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
                function() {
                    return le
                })
        } (window),
    !
        function(e) {
            function t(n, i) {
                return this instanceof t ? (e.isPlainObject(n) ? i = n: (i = i || {},
                    i.alias = n), this.el = void 0, this.opts = e.extend(!0, {},
                    this.defaults, i), this.noMasksCache = i && void 0 !== i.definitions, this.userOptions = i || {},
                    this.events = {},
                    void r(this.opts.alias, i, this.opts)) : new t(n, i)
            }
            function n(e) {
                var t = document.createElement("input"),
                    n = "on" + e,
                    i = n in t;
                return i || (t.setAttribute(n, "return;"), i = "function" == typeof t[n]),
                    t = null,
                    i
            }
            function i(t, n) {
                var i = t.getAttribute("type"),
                    r = "INPUT" === t.tagName && -1 !== e.inArray(i, n.supportsInputType) || t.isContentEditable || "TEXTAREA" === t.tagName;
                if (!r) {
                    var o = document.createElement("input");
                    o.setAttribute("type", i),
                        r = "text" === o.type,
                        o = null
                }
                return r
            }
            function r(t, n, i) {
                var o = i.aliases[t];
                return o ? (o.alias && r(o.alias, void 0, i), e.extend(!0, i, o), e.extend(!0, i, n), !0) : (null === i.mask && (i.mask = t), !1)
            }
            function o(t, n, i) {
                function o(e, n) {
                    n = void 0 !== n ? n: t.getAttribute("data-inputmask-" + e),
                    null !== n && ("string" == typeof n && (0 === e.indexOf("on") ? n = window[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), i[e] = n)
                }
                var a, s, l, c, u = t.getAttribute("data-inputmask");
                if (u && "" !== u && (u = u.replace(new RegExp("'", "g"), '"'), s = JSON.parse("{" + u + "}")), s) {
                    l = void 0;
                    for (c in s) if ("alias" === c.toLowerCase()) {
                        l = s[c];
                        break
                    }
                }
                o("alias", l),
                i.alias && r(i.alias, i, n);
                for (a in n) {
                    if (s) {
                        l = void 0;
                        for (c in s) if (c.toLowerCase() === a.toLowerCase()) {
                            l = s[c];
                            break
                        }
                    }
                    o(a, l)
                }
                return e.extend(!0, n, i),
                    n
            }
            function a(n, i) {
                function r(t) {
                    function i(e, t, n, i) {
                        this.matches = [],
                            this.isGroup = e || !1,
                            this.isOptional = t || !1,
                            this.isQuantifier = n || !1,
                            this.isAlternator = i || !1,
                            this.quantifier = {
                                min: 1,
                                max: 1
                            }
                    }
                    function r(t, i, r) {
                        var o = n.definitions[i];
                        r = void 0 !== r ? r: t.matches.length;
                        var a = t.matches[r - 1];
                        if (o && !v) {
                            o.placeholder = e.isFunction(o.placeholder) ? o.placeholder(n) : o.placeholder;
                            for (var s = o.prevalidator,
                                     l = s ? s.length: 0, c = 1; c < o.cardinality; c++) {
                                var u = l >= c ? s[c - 1] : [],
                                    d = u.validator,
                                    f = u.cardinality;
                                t.matches.splice(r++, 0, {
                                    fn: d ? "string" == typeof d ? new RegExp(d) : new
                                    function() {
                                        this.test = d
                                    }: new RegExp("."),
                                    cardinality: f ? f: 1,
                                    optionality: t.isOptional,
                                    newBlockMarker: void 0 === a || a.def !== (o.definitionSymbol || i),
                                    casing: o.casing,
                                    def: o.definitionSymbol || i,
                                    placeholder: o.placeholder,
                                    mask: i
                                }),
                                    a = t.matches[r - 1]
                            }
                            t.matches.splice(r++, 0, {
                                fn: o.validator ? "string" == typeof o.validator ? new RegExp(o.validator) : new
                                function() {
                                    this.test = o.validator
                                }: new RegExp("."),
                                cardinality: o.cardinality,
                                optionality: t.isOptional,
                                newBlockMarker: void 0 === a || a.def !== (o.definitionSymbol || i),
                                casing: o.casing,
                                def: o.definitionSymbol || i,
                                placeholder: o.placeholder,
                                mask: i
                            })
                        } else t.matches.splice(r++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: t.isOptional,
                            newBlockMarker: void 0 === a || a.def !== i,
                            casing: null,
                            def: n.staticDefinitionSymbol || i,
                            placeholder: void 0 !== n.staticDefinitionSymbol ? i: void 0,
                            mask: i
                        }),
                            v = !1
                    }
                    function o(e, t) {
                        e.isGroup && (e.isGroup = !1, r(e, n.groupmarker.start, 0), t !== !0 && r(e, n.groupmarker.end))
                    }
                    function a(e, t, n, i) {
                        t.matches.length > 0 && (void 0 === i || i) && (n = t.matches[t.matches.length - 1], o(n)),
                            r(t, e)
                    }
                    function s() {
                        if (x.length > 0) {
                            if (f = x[x.length - 1], a(u, f, h, !f.isAlternator), f.isAlternator) {
                                p = x.pop();
                                for (var e = 0; e < p.matches.length; e++) p.matches[e].isGroup = !1;
                                x.length > 0 ? (f = x[x.length - 1], f.matches.push(p)) : y.matches.push(p)
                            }
                        } else a(u, y, h)
                    }
                    function l(e) {
                        function t(e) {
                            return e === n.optionalmarker.start ? e = n.optionalmarker.end: e === n.optionalmarker.end ? e = n.optionalmarker.start: e === n.groupmarker.start ? e = n.groupmarker.end: e === n.groupmarker.end && (e = n.groupmarker.start),
                                e
                        }
                        e.matches = e.matches.reverse();
                        for (var i in e.matches) {
                            var r = parseInt(i);
                            if (e.matches[i].isQuantifier && e.matches[r + 1] && e.matches[r + 1].isGroup) {
                                var o = e.matches[i];
                                e.matches.splice(i, 1),
                                    e.matches.splice(r + 1, 0, o)
                            }
                            void 0 !== e.matches[i].matches ? e.matches[i] = l(e.matches[i]) : e.matches[i] = t(e.matches[i])
                        }
                        return e
                    }
                    for (var c, u, d, f, p, h, m, g = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                             v = !1,
                             y = new i,
                             x = [], b = []; c = g.exec(t);) if (u = c[0], v) s();
                    else switch (u.charAt(0)) {
                            case n.escapeChar:
                                v = !0;
                                break;
                            case n.optionalmarker.end:
                            case n.groupmarker.end:
                                if (d = x.pop(), void 0 !== d) if (x.length > 0) {
                                    if (f = x[x.length - 1], f.matches.push(d), f.isAlternator) {
                                        p = x.pop();
                                        for (var k = 0; k < p.matches.length; k++) p.matches[k].isGroup = !1;
                                        x.length > 0 ? (f = x[x.length - 1], f.matches.push(p)) : y.matches.push(p)
                                    }
                                } else y.matches.push(d);
                                else s();
                                break;
                            case n.optionalmarker.start:
                                x.push(new i((!1), (!0)));
                                break;
                            case n.groupmarker.start:
                                x.push(new i((!0)));
                                break;
                            case n.quantifiermarker.start:
                                var w = new i((!1), (!1), (!0));
                                u = u.replace(/[{}]/g, "");
                                var C = u.split(","),
                                    _ = isNaN(C[0]) ? C[0] : parseInt(C[0]),
                                    S = 1 === C.length ? _: isNaN(C[1]) ? C[1] : parseInt(C[1]);
                                if (("*" === S || "+" === S) && (_ = "*" === S ? 0 : 1), w.quantifier = {
                                        min: _,
                                        max: S
                                    },
                                    x.length > 0) {
                                    var T = x[x.length - 1].matches;
                                    c = T.pop(),
                                    c.isGroup || (m = new i((!0)), m.matches.push(c), c = m),
                                        T.push(c),
                                        T.push(w)
                                } else c = y.matches.pop(),
                                c.isGroup || (m = new i((!0)), m.matches.push(c), c = m),
                                    y.matches.push(c),
                                    y.matches.push(w);
                                break;
                            case n.alternatormarker:
                                x.length > 0 ? (f = x[x.length - 1], h = f.matches.pop()) : h = y.matches.pop(),
                                    h.isAlternator ? x.push(h) : (p = new i((!1), (!1), (!1), (!0)), p.matches.push(h), x.push(p));
                                break;
                            default:
                                s()
                        }
                    for (; x.length > 0;) d = x.pop(),
                        o(d, !0),
                        y.matches.push(d);
                    return y.matches.length > 0 && (h = y.matches[y.matches.length - 1], o(h), b.push(y)),
                    n.numericInput && l(b[0]),
                        b
                }
                function o(o, a) {
                    if (null !== o && "" !== o) {
                        if (1 === o.length && n.greedy === !1 && 0 !== n.repeat && (n.placeholder = ""), n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                            var s = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                            o = n.groupmarker.start + o + n.groupmarker.end + n.quantifiermarker.start + s + "," + n.repeat + n.quantifiermarker.end
                        }
                        var l;
                        return void 0 === t.prototype.masksCache[o] || i === !0 ? (l = {
                            mask: o,
                            maskToken: r(o),
                            validPositions: {},
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            metadata: a
                        },
                        i !== !0 && (t.prototype.masksCache[n.numericInput ? o.split("").reverse().join("") : o] = l, l = e.extend(!0, {},
                            t.prototype.masksCache[n.numericInput ? o.split("").reverse().join("") : o]))) : l = e.extend(!0, {},
                            t.prototype.masksCache[n.numericInput ? o.split("").reverse().join("") : o]),
                            l
                    }
                }
                function a(e) {
                    return e = e.toString()
                }
                var s;
                if (e.isFunction(n.mask) && (n.mask = n.mask(n)), e.isArray(n.mask)) {
                    if (n.mask.length > 1) {
                        n.keepStatic = null === n.keepStatic || n.keepStatic;
                        var l = "(";
                        return e.each(n.numericInput ? n.mask.reverse() : n.mask,
                            function(t, n) {
                                l.length > 1 && (l += ")|("),
                                    l += a(void 0 === n.mask || e.isFunction(n.mask) ? n: n.mask)
                            }),
                            l += ")",
                            o(l, n.mask)
                    }
                    n.mask = n.mask.pop()
                }
                return n.mask && (s = void 0 === n.mask.mask || e.isFunction(n.mask.mask) ? o(a(n.mask), n.mask) : o(a(n.mask.mask), n.mask)),
                    s
            }
            function s(r, o, a) {
                function l(e, t, n) {
                    t = t || 0;
                    var i, r, o, s = [],
                        l = 0,
                        c = h();
                    do {
                        if (e === !0 && f().validPositions[l]) {
                            var u = f().validPositions[l];
                            r = u.match,
                                i = u.locator.slice(),
                                s.push(n === !0 ? u.input: B(l, r))
                        } else o = v(l, i, l - 1), r = o.match, i = o.locator.slice(), (a.jitMasking === !1 || c > l || isFinite(a.jitMasking) && a.jitMasking > l) && s.push(B(l, r));
                        l++
                    } while (( void 0 === fe || fe > l - 1 ) && null !== r.fn || null === r.fn && "" !== r.def || t >= l);
                    return "" === s[s.length - 1] && s.pop(),
                        s
                }
                function f() {
                    return o
                }
                function p(e) {
                    var t = f();
                    t.buffer = void 0,
                    e !== !0 && (t.tests = {},
                        t._buffer = void 0, t.validPositions = {},
                        t.p = 0)
                }
                function h(e, t) {
                    var n = -1,
                        i = -1,
                        r = f().validPositions;
                    void 0 === e && (e = -1);
                    for (var o in r) {
                        var a = parseInt(o);
                        r[a] && (t || null !== r[a].match.fn) && (e >= a && (n = a), a >= e && (i = a))
                    }
                    return - 1 !== n && e - n > 1 || e > i ? n: i
                }
                function m(t, n, i) {
                    if (a.insertMode && void 0 !== f().validPositions[t] && void 0 === i) {
                        var r, o = e.extend(!0, {},
                            f().validPositions),
                            s = h();
                        for (r = t; s >= r; r++) delete f().validPositions[r];
                        f().validPositions[t] = n;
                        var l, c = !0,
                            u = f().validPositions;
                        for (r = l = t; s >= r; r++) {
                            var d = o[r];
                            if (void 0 !== d) for (var m = l,
                                                       g = -1; m < D() && (null == d.match.fn && u[r] && (u[r].match.optionalQuantifier === !0 || u[r].match.optionality === !0) || null != d.match.fn);) {
                                if (null === d.match.fn || !a.keepStatic && u[r] && (void 0 !== u[r + 1] && k(r + 1, u[r].locator.slice(), r).length > 1 || void 0 !== u[r].alternation) ? m++:m = A(l), x(m, d.match.def)) {
                                    var v = j(m, d.input, !0, !0);
                                    c = v !== !1,
                                        l = v.caret || v.insert ? h() : m;
                                    break
                                }
                                if (c = null == d.match.fn, g === m) break;
                                g = m
                            }
                            if (!c) break
                        }
                        if (!c) return f().validPositions = e.extend(!0, {},
                            o),
                            p(!0),
                            !1
                    } else f().validPositions[t] = n;
                    return p(!0),
                        !0
                }
                function g(e, t, n, i) {
                    var r, o = e;
                    for (f().p = e, r = o; t > r; r++) void 0 !== f().validPositions[r] && (n === !0 || a.canClearPosition(f(), r, h(), i, a) !== !1) && delete f().validPositions[r];
                    for (r = o + 1; r <= h();) {
                        for (; void 0 !== f().validPositions[o];) o++;
                        var s = f().validPositions[o];
                        if (o > r && (r = o + 1), void 0 === f().validPositions[r] && E(r) || void 0 !== s) r++;
                        else {
                            var l = v(r);
                            x(o, l.match.def) ? j(o, l.input || B(r), !0) !== !1 && (delete f().validPositions[r], r++) : E(r) || (r++, o--),
                                o++
                        }
                    }
                    var c = h(),
                        u = D();
                    for (i !== !0 && n !== !0 && void 0 !== f().validPositions[c] && f().validPositions[c].input === a.radixPoint && delete f().validPositions[c], r = c + 1; u >= r; r++) f().validPositions[r] && delete f().validPositions[r];
                    p(!0)
                }
                function v(e, t, n) {
                    var i = f().validPositions[e];
                    if (void 0 === i) for (var r = k(e, t, n), o = h(), s = f().validPositions[o] || k(0)[0], l = void 0 !== s.alternation ? s.locator[s.alternation].toString().split(",") : [], c = 0; c < r.length && (i = r[c], !(i.match && (a.greedy && i.match.optionalQuantifier !== !0 || (i.match.optionality === !1 || i.match.newBlockMarker === !1) && i.match.optionalQuantifier !== !0) && (void 0 === s.alternation || s.alternation !== i.alternation || void 0 !== i.locator[s.alternation] && T(i.locator[s.alternation].toString().split(","), l)))); c++);
                    return i
                }
                function y(e) {
                    return f().validPositions[e] ? f().validPositions[e].match: k(e)[0].match
                }
                function x(e, t) {
                    for (var n = !1,
                             i = k(e), r = 0; r < i.length; r++) if (i[r].match && i[r].match.def === t) {
                        n = !0;
                        break
                    }
                    return n
                }
                function b(t, n) {
                    var i, r;
                    return (f().tests[t] || f().validPositions[t]) && e.each(f().tests[t] || [f().validPositions[t]],
                        function(e, t) {
                            var o = t.alternation ? t.locator[t.alternation].toString().indexOf(n) : -1; (void 0 === r || r > o) && -1 !== o && (i = t, r = o)
                        }),
                        i
                }
                function k(t, n, i) {
                    function r(n, i, o, s) {
                        function c(o, s, h) {
                            function m(t, n) {
                                var i = 0 === e.inArray(t, n.matches);
                                return i || e.each(n.matches,
                                    function(e, r) {
                                        return (r.isQuantifier !== !0 || !(i = m(t, n.matches[e - 1]))) && void 0
                                    }),
                                    i
                            }
                            function g(e, t) {
                                var n = b(e, t);
                                return n ? n.locator.slice(n.alternation + 1) : []
                            }
                            if (l > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + f().mask;
                            if (l === t && void 0 === o.matches) return u.push({
                                match: o,
                                locator: s.reverse(),
                                cd: p
                            }),
                                !0;
                            if (void 0 !== o.matches) {
                                if (o.isGroup && h !== o) {
                                    if (o = c(n.matches[e.inArray(o, n.matches) + 1], s)) return ! 0
                                } else if (o.isOptional) {
                                    var v = o;
                                    if (o = r(o, i, s, h)) {
                                        if (a = u[u.length - 1].match, !m(a, v)) return ! 0;
                                        d = !0,
                                            l = t
                                    }
                                } else if (o.isAlternator) {
                                    var y, x = o,
                                        k = [],
                                        w = u.slice(),
                                        C = s.length,
                                        _ = i.length > 0 ? i.shift() : -1;
                                    if ( - 1 === _ || "string" == typeof _) {
                                        var S, T = l,
                                            j = i.slice(),
                                            E = [];
                                        if ("string" == typeof _) E = _.split(",");
                                        else for (S = 0; S < x.matches.length; S++) E.push(S);
                                        for (var D = 0; D < E.length; D++) {
                                            if (S = parseInt(E[D]), u = [], i = g(l, S), o = c(x.matches[S] || n.matches[S], [S].concat(s), h) || o, o !== !0 && void 0 !== o && E[E.length - 1] < x.matches.length) {
                                                var A = e.inArray(o, n.matches) + 1;
                                                n.matches.length > A && (o = c(n.matches[A], [A].concat(s.slice(1, s.length)), h), o && (E.push(A.toString()), e.each(u,
                                                    function(e, t) {
                                                        t.alternation = s.length - 1
                                                    })))
                                            }
                                            y = u.slice(),
                                                l = T,
                                                u = [];
                                            for (var P = 0; P < j.length; P++) i[P] = j[P];
                                            for (var N = 0; N < y.length; N++) {
                                                var M = y[N];
                                                M.alternation = M.alternation || C;
                                                for (var B = 0; B < k.length; B++) {
                                                    var I = k[B];
                                                    if (M.match.def === I.match.def && ("string" != typeof _ || -1 !== e.inArray(M.locator[M.alternation].toString(), E))) {
                                                        M.match.mask === I.match.mask && (y.splice(N, 1), N--),
                                                        -1 === I.locator[M.alternation].toString().indexOf(M.locator[M.alternation]) && (I.locator[M.alternation] = I.locator[M.alternation] + "," + M.locator[M.alternation], I.alternation = M.alternation);
                                                        break
                                                    }
                                                }
                                            }
                                            k = k.concat(y)
                                        }
                                        "string" == typeof _ && (k = e.map(k,
                                            function(t, n) {
                                                if (isFinite(n)) {
                                                    var i, r = t.alternation,
                                                        o = t.locator[r].toString().split(",");
                                                    t.locator[r] = void 0,
                                                        t.alternation = void 0;
                                                    for (var a = 0; a < o.length; a++) i = -1 !== e.inArray(o[a], E),
                                                    i && (void 0 !== t.locator[r] ? (t.locator[r] += ",", t.locator[r] += o[a]) : t.locator[r] = parseInt(o[a]), t.alternation = r);
                                                    if (void 0 !== t.locator[r]) return t
                                                }
                                            })),
                                            u = w.concat(k),
                                            l = t,
                                            d = u.length > 0
                                    } else o = c(x.matches[_] || n.matches[_], [_].concat(s), h);
                                    if (o) return ! 0
                                } else if (o.isQuantifier && h !== n.matches[e.inArray(o, n.matches) - 1]) for (var O = o,
                                                                                                                    F = i.length > 0 ? i.shift() : 0; F < (isNaN(O.quantifier.max) ? F + 1 : O.quantifier.max) && t >= l; F++) {
                                    var R = n.matches[e.inArray(O, n.matches) - 1];
                                    if (o = c(R, [F].concat(s), R)) {
                                        if (a = u[u.length - 1].match, a.optionalQuantifier = F > O.quantifier.min - 1, m(a, R)) {
                                            if (F > O.quantifier.min - 1) {
                                                d = !0,
                                                    l = t;
                                                break
                                            }
                                            return ! 0
                                        }
                                        return ! 0
                                    }
                                } else if (o = r(o, i, s, h)) return ! 0
                            } else l++
                        }
                        for (var h = i.length > 0 ? i.shift() : 0; h < n.matches.length; h++) if (n.matches[h].isQuantifier !== !0) {
                            var m = c(n.matches[h], [h].concat(o), s);
                            if (m && l === t) return m;
                            if (l > t) break
                        }
                    }
                    function o(e) {
                        var t = e[0] || e;
                        return t.locator.slice()
                    }
                    var a, s = f().maskToken,
                        l = n ? i: 0,
                        c = n || [0],
                        u = [],
                        d = !1,
                        p = n ? n.join("") : "";
                    if (t > -1) {
                        if (void 0 === n) {
                            for (var h, m = t - 1; void 0 === (h = f().validPositions[m] || f().tests[m]) && m > -1;) m--;
                            void 0 !== h && m > -1 && (c = o(h), p = c.join(""), h = h[0] || h, l = m)
                        }
                        if (f().tests[t] && f().tests[t][0].cd === p) return f().tests[t];
                        for (var g = c.shift(); g < s.length; g++) {
                            var v = r(s[g], c, [g]);
                            if (v && l === t || l > t) break
                        }
                    }
                    return (0 === u.length || d) && u.push({
                        match: {
                            fn: null,
                            cardinality: 0,
                            optionality: !0,
                            casing: null,
                            def: ""
                        },
                        locator: []
                    }),
                        f().tests[t] = e.extend(!0, [], u),
                        f().tests[t]
                }
                function w() {
                    return void 0 === f()._buffer && (f()._buffer = l(!1, 1)),
                        f()._buffer
                }
                function C(e) {
                    if (void 0 === f().buffer || e === !0) {
                        if (e === !0) for (var t in f().tests) void 0 === f().validPositions[t] && delete f().tests[t];
                        f().buffer = l(!0, h(), !0)
                    }
                    return f().buffer
                }
                function _(e, t, n) {
                    var i;
                    if (n = n, e === !0) p(),
                        e = 0,
                        t = n.length;
                    else for (i = e; t > i; i++) delete f().validPositions[i],
                        delete f().tests[i];
                    for (i = e; t > i; i++) p(!0),
                    n[i] !== a.skipOptionalPartCharacter && j(i, n[i], !0, !0)
                }
                function S(e, t) {
                    switch (t.casing) {
                        case "upper":
                            e = e.toUpperCase();
                            break;
                        case "lower":
                            e = e.toLowerCase()
                    }
                    return e
                }
                function T(t, n) {
                    for (var i = a.greedy ? n: n.slice(0, 1), r = !1, o = 0; o < t.length; o++) if ( - 1 !== e.inArray(t[o], i)) {
                        r = !0;
                        break
                    }
                    return r
                }
                function j(t, n, i, r) {
                    function o(t, n, i, r) {
                        var o = !1;
                        return e.each(k(t),
                            function(s, l) {
                                for (var c = l.match,
                                         u = n ? 1 : 0, d = "", v = c.cardinality; v > u; v--) d += N(t - (v - 1));
                                if (n && (d += n), C(!0), o = null != c.fn ? c.fn.test(d, f(), t, i, a) : (n === c.def || n === a.skipOptionalPartCharacter) && "" !== c.def && {
                                            c: c.placeholder || c.def,
                                            pos: t
                                        },
                                    o !== !1) {
                                    var y = void 0 !== o.c ? o.c: n;
                                    y = y === a.skipOptionalPartCharacter && null === c.fn ? c.placeholder || c.def: y;
                                    var x = t,
                                        b = C();
                                    if (void 0 !== o.remove && (e.isArray(o.remove) || (o.remove = [o.remove]), e.each(o.remove.sort(function(e, t) {
                                                return t - e
                                            }),
                                            function(e, t) {
                                                g(t, t + 1, !0)
                                            })), void 0 !== o.insert && (e.isArray(o.insert) || (o.insert = [o.insert]), e.each(o.insert.sort(function(e, t) {
                                                return e - t
                                            }),
                                            function(e, t) {
                                                j(t.pos, t.c, !1, r)
                                            })), o.refreshFromBuffer) {
                                        var k = o.refreshFromBuffer;
                                        if (i = !0, _(k === !0 ? k: k.start, k.end, b), void 0 === o.pos && void 0 === o.c) return o.pos = h(),
                                            !1;
                                        if (x = void 0 !== o.pos ? o.pos: t, x !== t) return o = e.extend(o, j(x, y, !0, r)),
                                            !1
                                    } else if (o !== !0 && void 0 !== o.pos && o.pos !== t && (x = o.pos, _(t, x, C().slice()), x !== t)) return o = e.extend(o, j(x, y, !0)),
                                        !1;
                                    return (o === !0 || void 0 !== o.pos || void 0 !== o.c) && (s > 0 && p(!0), m(x, e.extend({},
                                            l, {
                                                input: S(y, c)
                                            }), r) || (o = !1), !1)
                                }
                            }),
                            o
                    }
                    function s(t, n, i, r) {
                        for (var o, s, l, c, u, d, m = e.extend(!0, {},
                            f().validPositions), g = e.extend(!0, {},
                            f().tests), y = h(); y >= 0 && (c = f().validPositions[y], !c || void 0 === c.alternation || (o = y, s = f().validPositions[o].alternation, v(o).locator[c.alternation] === c.locator[c.alternation])); y--);
                        if (void 0 !== s) {
                            o = parseInt(o);
                            for (var x in f().validPositions) if (x = parseInt(x), c = f().validPositions[x], x >= o && void 0 !== c.alternation) {
                                var k;
                                0 === o ? (k = [], e.each(f().tests[o],
                                    function(e, t) {
                                        void 0 !== t.locator[s] && (k = k.concat(t.locator[s].toString().split(",")))
                                    })) : k = f().validPositions[o].locator[s].toString().split(",");
                                var w = void 0 !== c.locator[s] ? c.locator[s] : k[0];
                                w.length > 0 && (w = w.split(",")[0]);
                                for (var C = 0; C < k.length; C++) {
                                    var _ = [],
                                        S = 0,
                                        T = 0;
                                    if (w < k[C]) {
                                        for (var E, D, A = x; A >= 0; A--) if (E = f().validPositions[A], void 0 !== E) {
                                            var P = b(A, k[C]);
                                            f().validPositions[A].match.def !== P.match.def && (_.push(f().validPositions[A].input), f().validPositions[A] = P, f().validPositions[A].input = B(A), null === f().validPositions[A].match.fn && T++, E = P),
                                                D = E.locator[s],
                                                E.locator[s] = parseInt(k[C]);
                                            break
                                        }
                                        if (w !== E.locator[s]) {
                                            for (u = x + 1; u < h(void 0, !0) + 1; u++) d = f().validPositions[u],
                                                d && null != d.match.fn ? _.push(d.input) : t > u && S++,
                                                delete f().validPositions[u],
                                                delete f().tests[u];
                                            for (p(!0), a.keepStatic = !a.keepStatic, l = !0; _.length > 0;) {
                                                var N = _.shift();
                                                if (N !== a.skipOptionalPartCharacter && !(l = j(h(void 0, !0) + 1, N, !1, r))) break
                                            }
                                            if (E.alternation = s, E.locator[s] = D, l) {
                                                var M = h(t) + 1;
                                                for (u = x + 1; u < h() + 1; u++) d = f().validPositions[u],
                                                (void 0 === d || null == d.match.fn) && t > u && T++;
                                                t += T - S,
                                                    l = j(t > M ? M: t, n, i, r)
                                            }
                                            if (a.keepStatic = !a.keepStatic, l) return l;
                                            p(),
                                                f().validPositions = e.extend(!0, {},
                                                    m),
                                                f().tests = e.extend(!0, {},
                                                    g)
                                        }
                                    }
                                }
                                break
                            }
                        }
                        return ! 1
                    }
                    function l(t, n) {
                        for (var i = f().validPositions[n], r = i.locator, o = r.length, a = t; n > a; a++) if (void 0 === f().validPositions[a] && !E(a, !0)) {
                            var s = k(a),
                                l = s[0],
                                c = -1;
                            e.each(s,
                                function(e, t) {
                                    for (var n = 0; o > n && void 0 !== t.locator[n] && T(t.locator[n].toString().split(","), r[n].toString().split(",")); n++) n > c && (c = n, l = t)
                                }),
                                m(a, e.extend({},
                                    l, {
                                        input: l.match.placeholder || l.match.def
                                    }), !0)
                        }
                    }
                    i = i === !0;
                    for (var c = C(), u = t - 1; u > -1 && !f().validPositions[u]; u--);
                    for (u++; t > u; u++) void 0 === f().validPositions[u] && ((!E(u) || c[u] !== B(u)) && k(u).length > 1 || c[u] === a.radixPoint || "0" === c[u] && e.inArray(a.radixPoint, c) < u) && o(u, c[u], !0, r);
                    var d = t,
                        y = !1,
                        x = e.extend(!0, {},
                            f().validPositions);
                    if (d < D() && (y = o(d, n, i, r), (!i || r === !0) && y === !1)) {
                        var w = f().validPositions[d];
                        if (!w || null !== w.match.fn || w.match.def !== n && n !== a.skipOptionalPartCharacter) {
                            if ((a.insertMode || void 0 === f().validPositions[A(d)]) && !E(d, !0)) {
                                var P = v(d).match,
                                    P = P.placeholder || P.def;
                                o(d, P, i, r);
                                for (var M = d + 1,
                                         I = A(d); I >= M; M++) if (y = o(M, n, i, r), y !== !1) {
                                    l(d, M),
                                        d = M;
                                    break
                                }
                            }
                        } else y = {
                            caret: A(d)
                        }
                    }
                    if (y === !1 && a.keepStatic && (y = s(t, n, i, r)), y === !0 && (y = {
                            pos: d
                        }), e.isFunction(a.postValidation) && y !== !1 && !i && r !== !0) {
                        var O = a.postValidation(C(!0), y, a);
                        if (O) {
                            if (O.refreshFromBuffer) {
                                var F = O.refreshFromBuffer;
                                _(F === !0 ? F: F.start, F.end, O.buffer),
                                    p(!0),
                                    y = O
                            }
                        } else p(!0),
                            f().validPositions = e.extend(!0, {},
                                x),
                            y = !1
                    }
                    return y
                }
                function E(e, t) {
                    var n;
                    if (t ? (n = v(e).match, "" == n.def && (n = y(e))) : n = y(e), null != n.fn) return n.fn;
                    if (t !== !0 && e > -1 && !a.keepStatic && void 0 === f().validPositions[e]) {
                        var i = k(e);
                        return i.length > 2
                    }
                    return ! 1
                }
                function D() {
                    var e;
                    fe = void 0 !== ue ? ue.maxLength: void 0,
                    -1 === fe && (fe = void 0);
                    var t, n = h(),
                        i = f().validPositions[n],
                        r = void 0 !== i ? i.locator.slice() : void 0;
                    for (t = n + 1; void 0 === i || null !== i.match.fn || null === i.match.fn && "" !== i.match.def; t++) i = v(t, r, t - 1),
                        r = i.locator.slice();
                    var o = y(t - 1);
                    return e = "" !== o.def ? t: t - 1,
                        void 0 === fe || fe > e ? e: fe
                }
                function A(e, t) {
                    var n = D();
                    if (e >= n) return n;
                    for (var i = e; ++i < n && (t === !0 && (y(i).newBlockMarker !== !0 || !E(i)) || t !== !0 && !E(i) && (a.nojumps !== !0 || a.nojumpsThreshold > i)););
                    return i
                }
                function P(e, t) {
                    var n = e;
                    if (0 >= n) return 0;
                    for (; --n > 0 && (t === !0 && y(n).newBlockMarker !== !0 || t !== !0 && !E(n)););
                    return n
                }
                function N(e) {
                    return void 0 === f().validPositions[e] ? B(e) : f().validPositions[e].input
                }
                function M(t, n, i, r, o) {
                    if (r && e.isFunction(a.onBeforeWrite)) {
                        var s = a.onBeforeWrite(r, n, i, a);
                        if (s) {
                            if (s.refreshFromBuffer) {
                                var l = s.refreshFromBuffer;
                                _(l === !0 ? l: l.start, l.end, s.buffer || n),
                                    n = C(!0)
                            }
                            void 0 !== i && (i = void 0 !== s.caret ? s.caret: i)
                        }
                    }
                    t.inputmask._valueSet(n.join("")),
                    void 0 === i || void 0 !== r && "blur" === r.type || F(t, i),
                    o === !0 && (ge = !0, e(t).trigger("input"))
                }
                function B(e, t) {
                    if (t = t || y(e), void 0 !== t.placeholder) return t.placeholder;
                    if (null === t.fn) {
                        if (e > -1 && !a.keepStatic && void 0 === f().validPositions[e]) {
                            var n, i = k(e),
                                r = 0;
                            if (i.length > 2) for (var o = 0; o < i.length; o++) if (i[o].match.optionality !== !0 && i[o].match.optionalQuantifier !== !0 && (null === i[o].match.fn || void 0 === n || i[o].match.fn.test(n.match.def, f(), e, !0, a) !== !1) && (r++, null === i[o].match.fn && (n = i[o]), r > 1)) return a.placeholder.charAt(e % a.placeholder.length)
                        }
                        return t.def
                    }
                    return a.placeholder.charAt(e % a.placeholder.length)
                }
                function I(n, i, r, o) {
                    function s() {
                        var e = !1,
                            t = w().slice(u, A(u)).join("").indexOf(c);
                        if ( - 1 !== t && !E(u)) {
                            e = !0;
                            for (var n = w().slice(u, u + t), i = 0; i < n.length; i++) if (" " !== n[i]) {
                                e = !1;
                                break
                            }
                        }
                        return e
                    }
                    var l = o.slice(),
                        c = "",
                        u = 0;
                    if (p(), f().p = A( - 1), !r) if (a.autoUnmask !== !0) {
                        var d = w().slice(0, A( - 1)).join(""),
                            m = l.join("").match(new RegExp("^" + t.escapeRegex(d), "g"));
                        m && m.length > 0 && (l.splice(0, m.length * d.length), u = A(u))
                    } else u = A(u);
                    e.each(l,
                        function(t, i) {
                            if (void 0 !== i) {
                                var o = new e.Event("keypress");
                                o.which = i.charCodeAt(0),
                                    c += i;
                                var l = h(void 0, !0),
                                    d = f().validPositions[l],
                                    p = v(l + 1, d ? d.locator.slice() : void 0, l);
                                if (!s() || r || a.autoUnmask) {
                                    var m = r ? t: null == p.match.fn && p.match.optionality && l + 1 < f().p ? l + 1 : f().p;
                                    G.call(n, o, !0, !1, r, m),
                                        u = m + 1,
                                        c = ""
                                } else G.call(n, o, !0, !1, !0, l + 1)
                            }
                        }),
                    i && M(n, C(), document.activeElement === n ? A(h(0)) : void 0, new e.Event("checkval"))
                }
                function O(t) {
                    if (t && void 0 === t.inputmask) return t.value;
                    var n = [],
                        i = f().validPositions;
                    for (var r in i) i[r].match && null != i[r].match.fn && n.push(i[r].input);
                    var o = 0 === n.length ? null: (he ? n.reverse() : n).join("");
                    if (null !== o) {
                        var s = (he ? C().slice().reverse() : C()).join("");
                        e.isFunction(a.onUnMask) && (o = a.onUnMask(s, o, a) || o)
                    }
                    return o
                }
                function F(e, t, n, i) {
                    function r(e) {
                        if (i !== !0 && he && "number" == typeof e && (!a.greedy || "" !== a.placeholder)) {
                            var t = C().join("").length;
                            e = t - e
                        }
                        return e
                    }
                    var o;
                    if ("number" != typeof t) return e.setSelectionRange ? (t = e.selectionStart, n = e.selectionEnd) : window.getSelection ? (o = window.getSelection().getRangeAt(0), (o.commonAncestorContainer.parentNode === e || o.commonAncestorContainer === e) && (t = o.startOffset, n = o.endOffset)) : document.selection && document.selection.createRange && (o = document.selection.createRange(), t = 0 - o.duplicate().moveStart("character", -1e5), n = t + o.text.length),
                        {
                            begin: r(t),
                            end: r(n)
                        };
                    t = r(t),
                        n = r(n),
                        n = "number" == typeof n ? n: t;
                    var s = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * n;
                    if (e.scrollLeft = s > e.scrollWidth ? s: 0, c || a.insertMode !== !1 || t !== n || n++, e.setSelectionRange) e.selectionStart = t,
                        e.selectionEnd = n;
                    else if (window.getSelection) {
                        if (o = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                            var l = document.createTextNode("");
                            e.appendChild(l)
                        }
                        o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t: e.inputmask._valueGet().length),
                            o.setEnd(e.firstChild, n < e.inputmask._valueGet().length ? n: e.inputmask._valueGet().length),
                            o.collapse(!0);
                        var u = window.getSelection();
                        u.removeAllRanges(),
                            u.addRange(o)
                    } else e.createTextRange && (o = e.createTextRange(), o.collapse(!0), o.moveEnd("character", n), o.moveStart("character", t), o.select())
                }
                function R(t) {
                    var n, i, r = C(),
                        o = r.length,
                        a = h(),
                        s = {},
                        l = f().validPositions[a],
                        c = void 0 !== l ? l.locator.slice() : void 0;
                    for (n = a + 1; n < r.length; n++) i = v(n, c, n - 1),
                        c = i.locator.slice(),
                        s[n] = e.extend(!0, {},
                            i);
                    var u = l && void 0 !== l.alternation ? l.locator[l.alternation] : void 0;
                    for (n = o - 1; n > a && (i = s[n], (i.match.optionality || i.match.optionalQuantifier || u && (u !== s[n].locator[l.alternation] && null != i.match.fn || null === i.match.fn && i.locator[l.alternation] && T(i.locator[l.alternation].toString().split(","), u.toString().split(",")) && "" !== k(n)[0].def)) && r[n] === B(n, i.match)); n--) o--;
                    return t ? {
                        l: o,
                        def: s[o] ? s[o].match: void 0
                    }: o
                }
                function H(e) {
                    for (var t = R(), n = e.length - 1; n > t && !E(n); n--);
                    return e.splice(t, n + 1 - t),
                        e
                }
                function L(t) {
                    if (e.isFunction(a.isComplete)) return a.isComplete(t, a);
                    if ("*" !== a.repeat) {
                        var n = !1,
                            i = R(!0),
                            r = P(i.l);
                        if (void 0 === i.def || i.def.newBlockMarker || i.def.optionality || i.def.optionalQuantifier) {
                            n = !0;
                            for (var o = 0; r >= o; o++) {
                                var s = v(o).match;
                                if (null !== s.fn && void 0 === f().validPositions[o] && s.optionality !== !0 && s.optionalQuantifier !== !0 || null === s.fn && t[o] !== B(o, s)) {
                                    n = !1;
                                    break
                                }
                            }
                        }
                        return n
                    }
                }
                function q(e, t) {
                    return he ? e - t > 1 || e - t === 1 && a.insertMode: t - e > 1 || t - e === 1 && a.insertMode
                }
                function W(t) {
                    function n(t) {
                        if (e.valHooks && (void 0 === e.valHooks[t] || e.valHooks[t].inputmaskpatch !== !0)) {
                            var n = e.valHooks[t] && e.valHooks[t].get ? e.valHooks[t].get: function(e) {
                                    return e.value
                                },
                                i = e.valHooks[t] && e.valHooks[t].set ? e.valHooks[t].set: function(e, t) {
                                    return e.value = t,
                                        e
                                };
                            e.valHooks[t] = {
                                get: function(e) {
                                    if (e.inputmask) {
                                        if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                        var t = n(e),
                                            i = e.inputmask.maskset,
                                            r = i._buffer;
                                        return r = r ? r.join("") : "",
                                            t !== r ? t: ""
                                    }
                                    return n(e)
                                },
                                set: function(t, n) {
                                    var r, o = e(t);
                                    return r = i(t, n),
                                    t.inputmask && o.trigger("setvalue"),
                                        r
                                },
                                inputmaskpatch: !0
                            }
                        }
                    }
                    function i() {
                        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : s.call(this) !== w().join("") ? document.activeElement === this && a.clearMaskOnLostFocus ? (he ? H(C().slice()).reverse() : H(C().slice())).join("") : s.call(this) : "": s.call(this)
                    }
                    function r(t) {
                        l.call(this, t),
                        this.inputmask && e(this).trigger("setvalue")
                    }
                    function o(t) {
                        be.on(t, "mouseenter",
                            function(t) {
                                var n = e(this),
                                    i = this,
                                    r = i.inputmask._valueGet();
                                r !== C().join("") && h() > 0 && n.trigger("setvalue")
                            })
                    }
                    var s, l;
                    t.inputmask.__valueGet || (Object.getOwnPropertyDescriptor && void 0 === t.value ? (s = function() {
                        return this.textContent
                    },
                        l = function(e) {
                            this.textContent = e
                        },
                        Object.defineProperty(t, "value", {
                            get: i,
                            set: r
                        })) : document.__lookupGetter__ && t.__lookupGetter__("value") ? (s = t.__lookupGetter__("value"), l = t.__lookupSetter__("value"), t.__defineGetter__("value", i), t.__defineSetter__("value", r)) : (s = function() {
                        return t.value
                    },
                        l = function(e) {
                            t.value = e
                        },
                        n(t.type), o(t)), t.inputmask.__valueGet = s, t.inputmask._valueGet = function(e) {
                        return he && e !== !0 ? s.call(this.el).split("").reverse().join("") : s.call(this.el)
                    },
                        t.inputmask.__valueSet = l, t.inputmask._valueSet = function(e, t) {
                        l.call(this.el, null === e || void 0 === e ? "": t !== !0 && he ? e.split("").reverse().join("") : e)
                    })
                }
                function $(n, i, r, o) {
                    function s() {
                        if (a.keepStatic) {
                            p(!0);
                            var t, i = [],
                                r = e.extend(!0, {},
                                    f().validPositions);
                            for (t = h(); t >= 0; t--) {
                                var o = f().validPositions[t];
                                if (o && (null != o.match.fn && i.push(o.input), delete f().validPositions[t], void 0 !== o.alternation && o.locator[o.alternation] === v(t).locator[o.alternation])) break
                            }
                            if (t > -1) for (; i.length > 0;) {
                                f().p = A(h());
                                var s = new e.Event("keypress");
                                s.which = i.pop().charCodeAt(0),
                                    G.call(n, s, !0, !1, !1, f().p)
                            } else f().validPositions = e.extend(!0, {},
                                r)
                        }
                    }
                    if ((a.numericInput || he) && (i === t.keyCode.BACKSPACE ? i = t.keyCode.DELETE: i === t.keyCode.DELETE && (i = t.keyCode.BACKSPACE), he)) {
                        var l = r.end;
                        r.end = r.begin,
                            r.begin = l
                    }
                    i === t.keyCode.BACKSPACE && (r.end - r.begin < 1 || a.insertMode === !1) ? (r.begin = P(r.begin), void 0 === f().validPositions[r.begin] || f().validPositions[r.begin].input !== a.groupSeparator && f().validPositions[r.begin].input !== a.radixPoint || r.begin--) : i === t.keyCode.DELETE && r.begin === r.end && (r.end = E(r.end) ? r.end + 1 : A(r.end) + 1, void 0 === f().validPositions[r.begin] || f().validPositions[r.begin].input !== a.groupSeparator && f().validPositions[r.begin].input !== a.radixPoint || r.end++),
                        g(r.begin, r.end, !1, o),
                    o !== !0 && s();
                    var c = h(r.begin);
                    c < r.begin ? ( - 1 === c && p(), f().p = A(c)) : o !== !0 && (f().p = r.begin)
                }
                function z(i) {
                    var r = this,
                        o = e(r),
                        s = i.keyCode,
                        l = F(r);
                    if (s === t.keyCode.BACKSPACE || s === t.keyCode.DELETE || d && 127 === s || i.ctrlKey && 88 === s && !n("cut")) i.preventDefault(),
                    88 === s && (le = C().join("")),
                        $(r, s, l),
                        M(r, C(), f().p, i, le !== C().join("")),
                        r.inputmask._valueGet() === w().join("") ? o.trigger("cleared") : L(C()) === !0 && o.trigger("complete"),
                    a.showTooltip && (r.title = a.tooltip || f().mask);
                    else if (s === t.keyCode.END || s === t.keyCode.PAGE_DOWN) {
                        i.preventDefault();
                        var c = A(h());
                        a.insertMode || c !== D() || i.shiftKey || c--,
                            F(r, i.shiftKey ? l.begin: c, c, !0)
                    } else s === t.keyCode.HOME && !i.shiftKey || s === t.keyCode.PAGE_UP ? (i.preventDefault(), F(r, 0, i.shiftKey ? l.begin: 0, !0)) : (a.undoOnEscape && s === t.keyCode.ESCAPE || 90 === s && i.ctrlKey) && i.altKey !== !0 ? (I(r, !0, !1, le.split("")), o.trigger("click")) : s !== t.keyCode.INSERT || i.shiftKey || i.ctrlKey ? a.tabThrough === !0 && s === t.keyCode.TAB ? (i.shiftKey === !0 ? (null === y(l.begin).fn && (l.begin = A(l.begin)), l.end = P(l.begin, !0), l.begin = P(l.end, !0)) : (l.begin = A(l.begin, !0), l.end = A(l.begin, !0), l.end < D() && l.end--), l.begin < D() && (i.preventDefault(), F(r, l.begin, l.end))) : a.insertMode !== !1 || i.shiftKey || (s === t.keyCode.RIGHT ? setTimeout(function() {
                                var e = F(r);
                                F(r, e.begin)
                            },
                            0) : s === t.keyCode.LEFT && setTimeout(function() {
                                    var e = F(r);
                                    F(r, he ? e.begin + 1 : e.begin - 1)
                                },
                                0)) : (a.insertMode = !a.insertMode, F(r, a.insertMode || l.begin !== D() ? l.begin: l.begin - 1));
                    a.onKeyDown.call(this, i, C(), F(r).begin, a),
                        ve = -1 !== e.inArray(s, a.ignorables)
                }
                function G(n, i, r, o, s) {
                    var l = this,
                        c = e(l),
                        u = n.which || n.charCode || n.keyCode;
                    if (! (i === !0 || n.ctrlKey && n.altKey) && (n.ctrlKey || n.metaKey || ve)) return u === t.keyCode.ENTER && le !== C().join("") && (le = C().join(""), setTimeout(function() {
                            c.trigger("change")
                        },
                        0)),
                        !0;
                    if (u) {
                        46 === u && n.shiftKey === !1 && "," === a.radixPoint && (u = 44);
                        var d, h = i ? {
                                begin: s,
                                end: s
                            }: F(l),
                            g = String.fromCharCode(u),
                            v = q(h.begin, h.end);
                        v && (f().undoPositions = e.extend(!0, {},
                            f().validPositions), $(l, t.keyCode.DELETE, h, !0), h.begin = f().p, a.insertMode || (a.insertMode = !a.insertMode, m(h.begin, o), a.insertMode = !a.insertMode), v = !a.multi),
                            f().writeOutBuffer = !0;
                        var y = he && !v ? h.end: h.begin,
                            x = j(y, g, o);
                        if (x !== !1) {
                            if (x !== !0 && (y = void 0 !== x.pos ? x.pos: y, g = void 0 !== x.c ? x.c: g), p(!0), void 0 !== x.caret) d = x.caret;
                            else {
                                var b = f().validPositions;
                                d = !a.keepStatic && (void 0 !== b[y + 1] && k(y + 1, b[y].locator.slice(), y).length > 1 || void 0 !== b[y].alternation) ? y + 1 : A(y)
                            }
                            f().p = d
                        }
                        if (r !== !1) {
                            var w = this;
                            if (setTimeout(function() {
                                        a.onKeyValidation.call(w, u, x, a)
                                    },
                                    0), f().writeOutBuffer && x !== !1) {
                                var S = C();
                                M(l, S, a.numericInput && void 0 === x.caret ? P(d) : d, n, i !== !0),
                                i !== !0 && setTimeout(function() {
                                        L(S) === !0 && c.trigger("complete")
                                    },
                                    0)
                            } else v && (f().buffer = void 0, f().validPositions = f().undoPositions)
                        } else v && (f().buffer = void 0, f().validPositions = f().undoPositions);
                        if (a.showTooltip && (l.title = a.tooltip || f().mask), i && e.isFunction(a.onBeforeWrite)) {
                            var T = a.onBeforeWrite(n, C(), d, a);
                            if (T && T.refreshFromBuffer) {
                                var E = T.refreshFromBuffer;
                                _(E === !0 ? E: E.start, E.end, T.buffer),
                                    p(!0),
                                T.caret && (f().p = T.caret)
                            }
                        }
                        if (n.preventDefault(), i) return x
                    }
                }
                function U(t) {
                    var n = this,
                        i = t.originalEvent || t,
                        r = e(n),
                        o = n.inputmask._valueGet(!0),
                        s = F(n),
                        l = o.substr(0, s.begin),
                        c = o.substr(s.end, o.length);
                    l === w().slice(0, s.begin).join("") && (l = ""),
                    c === w().slice(s.end).join("") && (c = ""),
                        window.clipboardData && window.clipboardData.getData ? o = l + window.clipboardData.getData("Text") + c: i.clipboardData && i.clipboardData.getData && (o = l + i.clipboardData.getData("text/plain") + c);
                    var u = o;
                    if (e.isFunction(a.onBeforePaste)) {
                        if (u = a.onBeforePaste(o, a), u === !1) return t.preventDefault(),
                            !1;
                        u || (u = o)
                    }
                    return I(n, !1, !1, he ? u.split("").reverse() : u.toString().split("")),
                        M(n, C(), void 0, t, !0),
                        r.trigger("click"),
                    L(C()) === !0 && r.trigger("complete"),
                        !1
                }
                function X(n) {
                    var i = this,
                        r = i.inputmask._valueGet();
                    if (C().join("") !== r) {
                        var o = F(i);
                        if (r = r.replace(new RegExp("(" + t.escapeRegex(w().join("")) + ")*"), ""), u) {
                            var a = r.replace(C().join(""), "");
                            if (1 === a.length) {
                                var s = new e.Event("keypress");
                                return s.which = a.charCodeAt(0),
                                    G.call(i, s, !0, !0, !1, f().validPositions[o.begin - 1] ? o.begin: o.begin - 1),
                                    !1
                            }
                        }
                        if (o.begin > r.length && (F(i, r.length), o = F(i)), C().length - r.length !== 1 || r.charAt(o.begin) === C()[o.begin] || r.charAt(o.begin + 1) === C()[o.begin] || E(o.begin)) {
                            for (var l = h() + 1, c = C().slice(l).join(""); null === r.match(t.escapeRegex(c) + "$");) c = c.slice(1);
                            r = r.replace(c, ""),
                                r = r.split(""),
                                I(i, !0, !1, r),
                            L(C()) === !0 && e(i).trigger("complete")
                        } else n.keyCode = t.keyCode.BACKSPACE,
                            z.call(i, n);
                        n.preventDefault()
                    }
                }
                function Q(e) {
                    var t = e.originalEvent || e;
                    le = C().join(""),
                    "" === ce || 0 !== t.data.indexOf(ce)
                }
                function V(t) {
                    var n = this,
                        i = t.originalEvent || t,
                        r = C().join("");
                    0 === i.data.indexOf(ce) && (p(), f().p = A( - 1));
                    for (var o = i.data,
                             s = 0; s < o.length; s++) {
                        var l = new e.Event("keypress");
                        l.which = o.charCodeAt(s),
                            me = !1,
                            ve = !1,
                            G.call(n, l, !0, !1, !1, f().p)
                    }
                    r !== C().join("") && setTimeout(function() {
                            var e = f().p;
                            M(n, C(), a.numericInput ? P(e) : e)
                        },
                        0),
                        ce = i.data
                }
                function Y(e) {}
                function K(t) {
                    var n = this,
                        i = n.inputmask._valueGet();
                    I(n, !0, !1, (e.isFunction(a.onBeforeMask) ? a.onBeforeMask(i, a) || i: i).split("")),
                        le = C().join(""),
                    (a.clearMaskOnLostFocus || a.clearIncomplete) && n.inputmask._valueGet() === w().join("") && n.inputmask._valueSet("");
                }
                function J(e) {
                    var t = this,
                        n = t.inputmask._valueGet();
                    a.showMaskOnFocus && (!a.showMaskOnHover || a.showMaskOnHover && "" === n) ? t.inputmask._valueGet() !== C().join("") && M(t, C(), A(h())) : ye === !1 && F(t, A(h())),
                    a.positionCaretOnTab === !0 && setTimeout(function() {
                            F(t, A(h()))
                        },
                        0),
                        le = C().join("")
                }
                function Z(e) {
                    var t = this;
                    if (ye = !1, a.clearMaskOnLostFocus && document.activeElement !== t) {
                        var n = C().slice(),
                            i = t.inputmask._valueGet();
                        i !== t.getAttribute("placeholder") && "" !== i && ( - 1 === h() && i === w().join("") ? n = [] : H(n), M(t, n))
                    }
                }
                function ee(t) {
                    function n(t) {
                        if (a.radixFocus && "" !== a.radixPoint) {
                            var n = f().validPositions;
                            if (void 0 === n[t] || n[t].input === B(t)) {
                                if (t < A( - 1)) return ! 0;
                                var i = e.inArray(a.radixPoint, C());
                                if ( - 1 !== i) {
                                    for (var r in n) if (r > i && n[r].input !== B(r)) return ! 1;
                                    return ! 0
                                }
                            }
                        }
                        return ! 1
                    }
                    var i = this;
                    if (document.activeElement === i) {
                        var r = F(i);
                        if (r.begin === r.end) if (n(r.begin)) F(i, a.numericInput ? A(e.inArray(a.radixPoint, C())) : e.inArray(a.radixPoint, C()));
                        else {
                            var o = r.begin,
                                s = h(o),
                                l = A(s);
                            l > o ? F(i, E(o) || E(o - 1) ? o: A(o)) : ((C()[l] !== B(l) || !E(l, !0) && y(l).def === B(l)) && (l = A(l)), F(i, l))
                        }
                    }
                }
                function te(e) {
                    var t = this;
                    setTimeout(function() {
                            F(t, 0, A(h()))
                        },
                        0)
                }
                function ne(n) {
                    var i = this,
                        r = e(i),
                        o = F(i),
                        s = n.originalEvent || n,
                        l = window.clipboardData || s.clipboardData,
                        c = he ? C().slice(o.end, o.begin) : C().slice(o.begin, o.end);
                    l.setData("text", he ? c.reverse().join("") : c.join("")),
                    document.execCommand && document.execCommand("copy"),
                        $(i, t.keyCode.DELETE, o),
                        M(i, C(), f().p, n, le !== C().join("")),
                    i.inputmask._valueGet() === w().join("") && r.trigger("cleared"),
                    a.showTooltip && (i.title = a.tooltip || f().mask)
                }
                function ie(t) {
                    var n = e(this),
                        i = this;
                    if (i.inputmask) {
                        var r = i.inputmask._valueGet(),
                            o = C().slice();
                        le !== o.join("") && setTimeout(function() {
                                n.trigger("change"),
                                    le = o.join("")
                            },
                            0),
                        "" !== r && (a.clearMaskOnLostFocus && ( - 1 === h() && r === w().join("") ? o = [] : H(o)), L(o) === !1 && (setTimeout(function() {
                                n.trigger("incomplete")
                            },
                            0), a.clearIncomplete && (p(), o = a.clearMaskOnLostFocus ? [] : w().slice())), M(i, o, void 0, t))
                    }
                }
                function re(e) {
                    var t = this;
                    ye = !0,
                    document.activeElement !== t && a.showMaskOnHover && t.inputmask._valueGet() !== C().join("") && M(t, C())
                }
                function oe(e) {
                    le !== C().join("") && de.trigger("change"),
                    a.clearMaskOnLostFocus && -1 === h() && ue.inputmask._valueGet && ue.inputmask._valueGet() === w().join("") && ue.inputmask._valueSet(""),
                    a.removeMaskOnSubmit && (ue.inputmask._valueSet(ue.inputmask.unmaskedvalue(), !0), setTimeout(function() {
                            M(ue, C())
                        },
                        0))
                }
                function ae(e) {
                    setTimeout(function() {
                            de.trigger("setvalue")
                        },
                        0)
                }
                function se(t) {
                    if (ue = t, de = e(ue), a.showTooltip && (ue.title = a.tooltip || f().mask), ("rtl" === ue.dir || a.rightAlign) && (ue.style.textAlign = "right"), ("rtl" === ue.dir || a.numericInput) && (ue.dir = "ltr", ue.removeAttribute("dir"), ue.inputmask.isRTL = !0, he = !0), be.off(ue), W(ue), i(ue, a) && (be.on(ue, "submit", oe), be.on(ue, "reset", ae), be.on(ue, "mouseenter", re), be.on(ue, "blur", ie), be.on(ue, "focus", J), be.on(ue, "mouseleave", Z), be.on(ue, "click", ee), be.on(ue, "dblclick", te), be.on(ue, "paste", U), be.on(ue, "dragdrop", U), be.on(ue, "drop", U), be.on(ue, "cut", ne), be.on(ue, "complete", a.oncomplete), be.on(ue, "incomplete", a.onincomplete), be.on(ue, "cleared", a.oncleared), be.on(ue, "keydown", z), be.on(ue, "keypress", G), be.on(ue, "input", X), c || (be.on(ue, "compositionstart", Q), be.on(ue, "compositionupdate", V), be.on(ue, "compositionend", Y))), be.on(ue, "setvalue", K), "" !== ue.inputmask._valueGet() || a.clearMaskOnLostFocus === !1) {
                        var n = e.isFunction(a.onBeforeMask) ? a.onBeforeMask(ue.inputmask._valueGet(), a) || ue.inputmask._valueGet() : ue.inputmask._valueGet();
                        I(ue, !0, !1, n.split(""));
                        var r = C().slice();
                        le = r.join(""),
                        L(r) === !1 && a.clearIncomplete && p(),
                        a.clearMaskOnLostFocus && (r.join("") === w().join("") ? r = [] : H(r)),
                            M(ue, r),
                        document.activeElement === ue && F(ue, A(h()))
                    }
                }
                var le, ce, ue, de, fe, pe, he = !1,
                    me = !1,
                    ge = !1,
                    ve = !1,
                    ye = !0,
                    xe = !1,
                    be = {
                        on: function(n, i, r) {
                            var o = function(n) {
                                if (void 0 === this.inputmask && "FORM" !== this.nodeName) {
                                    var i = e.data(this, "_inputmask_opts");
                                    i ? new t(i).mask(this) : be.off(this)
                                } else {
                                    if ("setvalue" === n.type || !(this.disabled || this.readOnly && !("keydown" === n.type && n.ctrlKey && 67 === n.keyCode || a.tabThrough === !1 && n.keyCode === t.keyCode.TAB))) {
                                        switch (n.type) {
                                            case "input":
                                                if (ge === !0 || xe === !0) return ge = xe,
                                                    n.preventDefault();
                                                break;
                                            case "keydown":
                                                me = !1,
                                                    ge = !1,
                                                    xe = !1;
                                                break;
                                            case "keypress":
                                                if (me === !0) return n.preventDefault();
                                                me = !0;
                                                break;
                                            case "compositionstart":
                                                xe = !0;
                                                break;
                                            case "compositionupdate":
                                                ge = !0;
                                                break;
                                            case "compositionend":
                                                xe = !1;
                                                break;
                                            case "cut":
                                                ge = !0;
                                                break;
                                            case "click":
                                                if (u) {
                                                    var o = this;
                                                    return setTimeout(function() {
                                                            r.apply(o, arguments)
                                                        },
                                                        0),
                                                        !1
                                                }
                                        }
                                        return r.apply(this, arguments)
                                    }
                                    n.preventDefault()
                                }
                            };
                            n.inputmask.events[i] = n.inputmask.events[i] || [],
                                n.inputmask.events[i].push(o),
                                -1 !== e.inArray(i, ["submit", "reset"]) ? null != n.form && e(n.form).on(i, o) : e(n).on(i, o)
                        },
                        off: function(t, n) {
                            if (t.inputmask && t.inputmask.events) {
                                var i;
                                n ? (i = [], i[n] = t.inputmask.events[n]) : i = t.inputmask.events,
                                    e.each(i,
                                        function(n, i) {
                                            for (; i.length > 0;) {
                                                var r = i.pop(); - 1 !== e.inArray(n, ["submit", "reset"]) ? null != t.form && e(t.form).off(n, r) : e(t).off(n, r)
                                            }
                                            delete t.inputmask.events[n]
                                        })
                            }
                        }
                    };
                if (void 0 !== r) switch (r.action) {
                    case "isComplete":
                        return ue = r.el,
                            L(C());
                    case "unmaskedvalue":
                        return ue = r.el,
                            void 0 !== ue && void 0 !== ue.inputmask ? (o = ue.inputmask.maskset, a = ue.inputmask.opts, he = ue.inputmask.isRTL) : (pe = r.value, a.numericInput && (he = !0), pe = (e.isFunction(a.onBeforeMask) ? a.onBeforeMask(pe, a) || pe: pe).split(""), I(void 0, !1, !1, he ? pe.reverse() : pe), e.isFunction(a.onBeforeWrite) && a.onBeforeWrite(void 0, C(), 0, a)),
                            O(ue);
                    case "mask":
                        ue = r.el,
                            o = ue.inputmask.maskset,
                            a = ue.inputmask.opts,
                            he = ue.inputmask.isRTL,
                            le = C().join(""),
                            se(ue);
                        break;
                    case "format":
                        return a.numericInput && (he = !0),
                            pe = (e.isFunction(a.onBeforeMask) ? a.onBeforeMask(r.value, a) || r.value: r.value).split(""),
                            I(void 0, !1, !1, he ? pe.reverse() : pe),
                        e.isFunction(a.onBeforeWrite) && a.onBeforeWrite(void 0, C(), 0, a),
                            r.metadata ? {
                                value: he ? C().slice().reverse().join("") : C().join(""),
                                metadata: s({
                                        action: "getmetadata"
                                    },
                                    o, a)
                            }: he ? C().slice().reverse().join("") : C().join("");
                    case "isValid":
                        a.numericInput && (he = !0),
                            r.value ? (pe = r.value.split(""), I(void 0, !1, !0, he ? pe.reverse() : pe)) : r.value = C().join("");
                        for (var ke = C(), we = R(), Ce = ke.length - 1; Ce > we && !E(Ce); Ce--);
                        return ke.splice(we, Ce + 1 - we),
                        L(ke) && r.value === C().join("");
                    case "getemptymask":
                        return w();
                    case "remove":
                        ue = r.el,
                            de = e(ue),
                            o = ue.inputmask.maskset,
                            a = ue.inputmask.opts,
                            ue.inputmask._valueSet(O(ue)),
                            be.off(ue);
                        var _e;
                        Object.getOwnPropertyDescriptor && (_e = Object.getOwnPropertyDescriptor(ue, "value")),
                            _e && _e.get ? ue.inputmask.__valueGet && Object.defineProperty(ue, "value", {
                                    get: ue.inputmask.__valueGet,
                                    set: ue.inputmask.__valueSet
                                }) : document.__lookupGetter__ && ue.__lookupGetter__("value") && ue.inputmask.__valueGet && (ue.__defineGetter__("value", ue.inputmask.__valueGet), ue.__defineSetter__("value", ue.inputmask.__valueSet)),
                            ue.inputmask = void 0;
                        break;
                    case "getmetadata":
                        if (e.isArray(o.metadata)) {
                            for (var Se, Te = h(), je = Te; je >= 0; je--) if (f().validPositions[je] && void 0 !== f().validPositions[je].alternation) {
                                Se = f().validPositions[je].alternation;
                                break
                            }
                            return void 0 !== Se ? o.metadata[f().validPositions[Te].locator[Se]] : o.metadata[0]
                        }
                        return o.metadata
                }
            }
            t.prototype = {
                defaults: {
                    placeholder: "_",
                    optionalmarker: {
                        start: "[",
                        end: "]"
                    },
                    quantifiermarker: {
                        start: "{",
                        end: "}"
                    },
                    groupmarker: {
                        start: "(",
                        end: ")"
                    },
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    oncomplete: e.noop,
                    onincomplete: e.noop,
                    oncleared: e.noop,
                    repeat: 0,
                    greedy: !0,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    clearIncomplete: !1,
                    aliases: {},
                    alias: null,
                    onKeyDown: e.noop,
                    onBeforeMask: null,
                    onBeforePaste: function(t, n) {
                        return e.isFunction(n.onBeforeMask) ? n.onBeforeMask(t, n) : t
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: e.noop,
                    skipOptionalPartCharacter: " ",
                    showTooltip: !1,
                    tooltip: void 0,
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    groupSeparator: "",
                    radixFocus: !1,
                    nojumps: !1,
                    nojumpsThreshold: 0,
                    keepStatic: null,
                    positionCaretOnTab: !1,
                    tabThrough: !1,
                    supportsInputType: ["text", "tel", "password"],
                    definitions: {
                        9 : {
                            validator: "[0-9]",
                            cardinality: 1,
                            definitionSymbol: "*"
                        },
                        a: {
                            validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                            cardinality: 1,
                            definitionSymbol: "*"
                        },
                        "*": {
                            validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                            cardinality: 1
                        }
                    },
                    ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
                    isComplete: null,
                    canClearPosition: e.noop,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1
                },
                masksCache: {},
                mask: function(n) {
                    var i = this;
                    return "string" == typeof n && (n = document.getElementById(n) || document.querySelectorAll(n)),
                        n = n.nodeName ? [n] : n,
                        e.each(n,
                            function(n, r) {
                                var l = e.extend(!0, {},
                                    i.opts);
                                o(r, l, e.extend(!0, {},
                                    i.userOptions));
                                var c = a(l, i.noMasksCache);
                                void 0 !== c && (void 0 !== r.inputmask && r.inputmask.remove(), r.inputmask = new t, r.inputmask.opts = l, r.inputmask.noMasksCache = i.noMasksCache, r.inputmask.userOptions = e.extend(!0, {},
                                    i.userOptions), r.inputmask.el = r, r.inputmask.maskset = c, r.inputmask.isRTL = !1, e.data(r, "_inputmask_opts", l), s({
                                    action: "mask",
                                    el: r
                                }))
                            }),
                        n && n[0] ? n[0].inputmask || this: this
                },
                option: function(t) {
                    return "string" == typeof t ? this.opts[t] : "object" == typeof t ? (e.extend(this.opts, t), e.extend(this.userOptions, t), this.el && (void 0 !== t.mask || void 0 !== t.alias ? this.mask(this.el) : (e.data(this.el, "_inputmask_opts", this.opts), s({
                        action: "mask",
                        el: this.el
                    }))), this) : void 0
                },
                unmaskedvalue: function(e) {
                    return s({
                            action: "unmaskedvalue",
                            el: this.el,
                            value: e
                        },
                        this.el && this.el.inputmask ? this.el.inputmask.maskset: a(this.opts, this.noMasksCache), this.opts)
                },
                remove: function() {
                    return this.el ? (s({
                        action: "remove",
                        el: this.el
                    }), this.el.inputmask = void 0, this.el) : void 0
                },
                getemptymask: function() {
                    return s({
                        action: "getemptymask"
                    },
                        this.maskset || a(this.opts, this.noMasksCache), this.opts)
                },
                hasMaskedValue: function() {
                    return ! this.opts.autoUnmask
                },
                isComplete: function() {
                    return s({
                        action: "isComplete",
                        el: this.el
                    },
                        this.maskset || a(this.opts, this.noMasksCache), this.opts)
                },
                getmetadata: function() {
                    return s({
                        action: "getmetadata"
                    },
                        this.maskset || a(this.opts, this.noMasksCache), this.opts)
                },
                isValid: function(e) {
                    return s({
                        action: "isValid",
                        value: e
                    },
                        this.maskset || a(this.opts, this.noMasksCache), this.opts)
                },
                format: function(e, t) {
                    return s({
                        action: "format",
                        value: e,
                        metadata: t
                    },
                        this.maskset || a(this.opts, this.noMasksCache), this.opts)
                }
            },
                t.extendDefaults = function(n) {
                    e.extend(!0, t.prototype.defaults, n)
                },
                t.extendDefinitions = function(n) {
                    e.extend(!0, t.prototype.defaults.definitions, n)
                },
                t.extendAliases = function(n) {
                    e.extend(!0, t.prototype.defaults.aliases, n)
                },
                t.format = function(e, n, i) {
                    return t(n).format(e, i)
                },
                t.unmask = function(e, n) {
                    return t(n).unmaskedvalue(e)
                },
                t.isValid = function(e, n) {
                    return t(n).isValid(e)
                },
                t.remove = function(t) {
                    e.each(t,
                        function(e, t) {
                            t.inputmask && t.inputmask.remove()
                        })
                },
                t.escapeRegex = function(e) {
                    var t = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
                    return e.replace(new RegExp("(\\" + t.join("|\\") + ")", "gim"), "\\$1")
                },
                t.keyCode = {
                    ALT: 18,
                    BACKSPACE: 8,
                    CAPS_LOCK: 20,
                    COMMA: 188,
                    COMMAND: 91,
                    COMMAND_LEFT: 91,
                    COMMAND_RIGHT: 93,
                    CONTROL: 17,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    INSERT: 45,
                    LEFT: 37,
                    MENU: 93,
                    NUMPAD_ADD: 107,
                    NUMPAD_DECIMAL: 110,
                    NUMPAD_DIVIDE: 111,
                    NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106,
                    NUMPAD_SUBTRACT: 109,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SHIFT: 16,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38,
                    WINDOWS: 91
                };
            var l = navigator.userAgent,
                c = /mobile/i.test(l),
                u = /iemobile/i.test(l),
                d = /iphone/i.test(l) && !u;
            return /android.*safari.*/i.test(l) && !u,
                window.Inputmask = t,
                t
        } (jQuery),
    function(e, t) {
        return void 0 === e.fn.inputmask && (e.fn.inputmask = function(n, i) {
            var r, o = this[0];
            if (i = i || {},
                "string" == typeof n) switch (n) {
                case "unmaskedvalue":
                    return o && o.inputmask ? o.inputmask.unmaskedvalue() : e(o).val();
                case "remove":
                    return this.each(function() {
                        this.inputmask && this.inputmask.remove()
                    });
                case "getemptymask":
                    return o && o.inputmask ? o.inputmask.getemptymask() : "";
                case "hasMaskedValue":
                    return ! (!o || !o.inputmask) && o.inputmask.hasMaskedValue();
                case "isComplete":
                    return ! o || !o.inputmask || o.inputmask.isComplete();
                case "getmetadata":
                    return o && o.inputmask ? o.inputmask.getmetadata() : void 0;
                case "setvalue":
                    e(o).val(i),
                    o && void 0 !== o.inputmask && e(o).triggerHandler("setvalue");
                    break;
                case "option":
                    if ("string" != typeof i) return this.each(function() {
                        return void 0 !== this.inputmask ? this.inputmask.option(i) : void 0
                    });
                    if (o && void 0 !== o.inputmask) return o.inputmask.option(i);
                    break;
                default:
                    return i.alias = n,
                        r = new t(i),
                        this.each(function() {
                            r.mask(this)
                        })
            } else {
                if ("object" == typeof n) return r = new t(n),
                    void 0 === n.mask && void 0 === n.alias ? this.each(function() {
                        return void 0 !== this.inputmask ? this.inputmask.option(n) : void r.mask(this)
                    }) : this.each(function() {
                        r.mask(this)
                    });
                if (void 0 === n) return this.each(function() {
                    r = new t(i),
                        r.mask(this)
                })
            }
        }),
            e.fn.inputmask
    } (jQuery, Inputmask),
    function(e, t) {
        return t.extendDefinitions({
            h: {
                validator: "[01][0-9]|2[0-3]",
                cardinality: 2,
                prevalidator: [{
                    validator: "[0-2]",
                    cardinality: 1
                }]
            },
            s: {
                validator: "[0-5][0-9]",
                cardinality: 2,
                prevalidator: [{
                    validator: "[0-5]",
                    cardinality: 1
                }]
            },
            d: {
                validator: "0[1-9]|[12][0-9]|3[01]",
                cardinality: 2,
                prevalidator: [{
                    validator: "[0-3]",
                    cardinality: 1
                }]
            },
            m: {
                validator: "0[1-9]|1[012]",
                cardinality: 2,
                prevalidator: [{
                    validator: "[01]",
                    cardinality: 1
                }]
            },
            y: {
                validator: "(19|20)\\d{2}",
                cardinality: 4,
                prevalidator: [{
                    validator: "[12]",
                    cardinality: 1
                },
                    {
                        validator: "(19|20)",
                        cardinality: 2
                    },
                    {
                        validator: "(19|20)\\d",
                        cardinality: 3
                    }]
            }
        }),
            t.extendAliases({
                "dd/mm/yyyy": {
                    mask: "1/2/y",
                    placeholder: "dd/mm/yyyy",
                    regex: {
                        val1pre: new RegExp("[0-3]"),
                        val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                        val2pre: function(e) {
                            var n = t.escapeRegex.call(this, e);
                            return new RegExp("((0[1-9]|[12][0-9]|3[01])" + n + "[01])")
                        },
                        val2: function(e) {
                            var n = t.escapeRegex.call(this, e);
                            return new RegExp("((0[1-9]|[12][0-9])" + n + "(0[1-9]|1[012]))|(30" + n + "(0[13-9]|1[012]))|(31" + n + "(0[13578]|1[02]))")
                        }
                    },
                    leapday: "29/02/",
                    separator: "/",
                    yearrange: {
                        minyear: 1900,
                        maxyear: 2099
                    },
                    isInYearRange: function(e, t, n) {
                        if (isNaN(e)) return ! 1;
                        var i = parseInt(e.concat(t.toString().slice(e.length))),
                            r = parseInt(e.concat(n.toString().slice(e.length)));
                        return ! isNaN(i) && (i >= t && n >= i) || !isNaN(r) && (r >= t && n >= r)
                    },
                    determinebaseyear: function(e, t, n) {
                        var i = (new Date).getFullYear();
                        if (e > i) return e;
                        if (i > t) {
                            for (var r = t.toString().slice(0, 2), o = t.toString().slice(2, 4); r + n > t;) r--;
                            var a = r + o;
                            return e > a ? e: a
                        }
                        return i
                    },
                    onKeyDown: function(n, i, r, o) {
                        var a = e(this);
                        if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                            var s = new Date;
                            a.val(s.getDate().toString() + (s.getMonth() + 1).toString() + s.getFullYear().toString()),
                                a.trigger("setvalue")
                        }
                    },
                    getFrontValue: function(e, t, n) {
                        for (var i = 0,
                                 r = 0,
                                 o = 0; o < e.length && "2" !== e.charAt(o); o++) {
                            var a = n.definitions[e.charAt(o)];
                            a ? (i += r, r = a.cardinality) : r++
                        }
                        return t.join("").substr(i, r)
                    },
                    definitions: {
                        1 : {
                            validator: function(e, t, n, i, r) {
                                var o = r.regex.val1.test(e);
                                return i || o || e.charAt(1) !== r.separator && -1 === "-./".indexOf(e.charAt(1)) || !(o = r.regex.val1.test("0" + e.charAt(0))) ? o: (t.buffer[n - 1] = "0", {
                                    refreshFromBuffer: {
                                        start: n - 1,
                                        end: n
                                    },
                                    pos: n,
                                    c: e.charAt(0)
                                })
                            },
                            cardinality: 2,
                            prevalidator: [{
                                validator: function(e, t, n, i, r) {
                                    var o = e;
                                    isNaN(t.buffer[n + 1]) || (o += t.buffer[n + 1]);
                                    var a = 1 === o.length ? r.regex.val1pre.test(o) : r.regex.val1.test(o);
                                    if (!i && !a) {
                                        if (a = r.regex.val1.test(e + "0")) return t.buffer[n] = e,
                                            t.buffer[++n] = "0",
                                            {
                                                pos: n,
                                                c: "0"
                                            };
                                        if (a = r.regex.val1.test("0" + e)) return t.buffer[n] = "0",
                                            n++,
                                            {
                                                pos: n
                                            }
                                    }
                                    return a
                                },
                                cardinality: 1
                            }]
                        },
                        2 : {
                            validator: function(e, t, n, i, r) {
                                var o = r.getFrontValue(t.mask, t.buffer, r); - 1 !== o.indexOf(r.placeholder[0]) && (o = "01" + r.separator);
                                var a = r.regex.val2(r.separator).test(o + e);
                                if (!i && !a && (e.charAt(1) === r.separator || -1 !== "-./".indexOf(e.charAt(1))) && (a = r.regex.val2(r.separator).test(o + "0" + e.charAt(0)))) return t.buffer[n - 1] = "0",
                                    {
                                        refreshFromBuffer: {
                                            start: n - 1,
                                            end: n
                                        },
                                        pos: n,
                                        c: e.charAt(0)
                                    };
                                if (r.mask.indexOf("2") === r.mask.length - 1 && a) {
                                    var s = t.buffer.join("").substr(4, 4) + e;
                                    if (s !== r.leapday) return ! 0;
                                    var l = parseInt(t.buffer.join("").substr(0, 4), 10);
                                    return l % 4 === 0 && (l % 100 !== 0 || l % 400 === 0)
                                }
                                return a
                            },
                            cardinality: 2,
                            prevalidator: [{
                                validator: function(e, t, n, i, r) {
                                    isNaN(t.buffer[n + 1]) || (e += t.buffer[n + 1]);
                                    var o = r.getFrontValue(t.mask, t.buffer, r); - 1 !== o.indexOf(r.placeholder[0]) && (o = "01" + r.separator);
                                    var a = 1 === e.length ? r.regex.val2pre(r.separator).test(o + e) : r.regex.val2(r.separator).test(o + e);
                                    return i || a || !(a = r.regex.val2(r.separator).test(o + "0" + e)) ? a: (t.buffer[n] = "0", n++, {
                                        pos: n
                                    })
                                },
                                cardinality: 1
                            }]
                        },
                        y: {
                            validator: function(e, t, n, i, r) {
                                if (r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear)) {
                                    var o = t.buffer.join("").substr(0, 6);
                                    if (o !== r.leapday) return ! 0;
                                    var a = parseInt(e, 10);
                                    return a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)
                                }
                                return ! 1
                            },
                            cardinality: 4,
                            prevalidator: [{
                                validator: function(e, t, n, i, r) {
                                    var o = r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear);
                                    if (!i && !o) {
                                        var a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e + "0").toString().slice(0, 1);
                                        if (o = r.isInYearRange(a + e, r.yearrange.minyear, r.yearrange.maxyear)) return t.buffer[n++] = a.charAt(0),
                                            {
                                                pos: n
                                            };
                                        if (a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e + "0").toString().slice(0, 2), o = r.isInYearRange(a + e, r.yearrange.minyear, r.yearrange.maxyear)) return t.buffer[n++] = a.charAt(0),
                                            t.buffer[n++] = a.charAt(1),
                                            {
                                                pos: n
                                            }
                                    }
                                    return o
                                },
                                cardinality: 1
                            },
                                {
                                    validator: function(e, t, n, i, r) {
                                        var o = r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear);
                                        if (!i && !o) {
                                            var a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e).toString().slice(0, 2);
                                            if (o = r.isInYearRange(e[0] + a[1] + e[1], r.yearrange.minyear, r.yearrange.maxyear)) return t.buffer[n++] = a.charAt(1),
                                                {
                                                    pos: n
                                                };
                                            if (a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e).toString().slice(0, 2), r.isInYearRange(a + e, r.yearrange.minyear, r.yearrange.maxyear)) {
                                                var s = t.buffer.join("").substr(0, 6);
                                                if (s !== r.leapday) o = !0;
                                                else {
                                                    var l = parseInt(e, 10);
                                                    o = l % 4 === 0 && (l % 100 !== 0 || l % 400 === 0)
                                                }
                                            } else o = !1;
                                            if (o) return t.buffer[n - 1] = a.charAt(0),
                                                t.buffer[n++] = a.charAt(1),
                                                t.buffer[n++] = e.charAt(0),
                                                {
                                                    refreshFromBuffer: {
                                                        start: n - 3,
                                                        end: n
                                                    },
                                                    pos: n
                                                }
                                        }
                                        return o
                                    },
                                    cardinality: 2
                                },
                                {
                                    validator: function(e, t, n, i, r) {
                                        return r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear)
                                    },
                                    cardinality: 3
                                }]
                        }
                    },
                    insertMode: !1,
                    autoUnmask: !1
                },
                "mm/dd/yyyy": {
                    placeholder: "mm/dd/yyyy",
                    alias: "dd/mm/yyyy",
                    regex: {
                        val2pre: function(e) {
                            var n = t.escapeRegex.call(this, e);
                            return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])")
                        },
                        val2: function(e) {
                            var n = t.escapeRegex.call(this, e);
                            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)")
                        },
                        val1pre: new RegExp("[01]"),
                        val1: new RegExp("0[1-9]|1[012]")
                    },
                    leapday: "02/29/",
                    onKeyDown: function(n, i, r, o) {
                        var a = e(this);
                        if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                            var s = new Date;
                            a.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()),
                                a.trigger("setvalue")
                        }
                    }
                },
                "yyyy/mm/dd": {
                    mask: "y/1/2",
                    placeholder: "yyyy/mm/dd",
                    alias: "mm/dd/yyyy",
                    leapday: "/02/29",
                    onKeyDown: function(n, i, r, o) {
                        var a = e(this);
                        if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                            var s = new Date;
                            a.val(s.getFullYear().toString() + (s.getMonth() + 1).toString() + s.getDate().toString()),
                                a.trigger("setvalue")
                        }
                    }
                },
                "dd.mm.yyyy": {
                    mask: "1.2.y",
                    placeholder: "dd.mm.yyyy",
                    leapday: "29.02.",
                    separator: ".",
                    alias: "dd/mm/yyyy"
                },
                "dd-mm-yyyy": {
                    mask: "1-2-y",
                    placeholder: "dd-mm-yyyy",
                    leapday: "29-02-",
                    separator: "-",
                    alias: "dd/mm/yyyy"
                },
                "mm.dd.yyyy": {
                    mask: "1.2.y",
                    placeholder: "mm.dd.yyyy",
                    leapday: "02.29.",
                    separator: ".",
                    alias: "mm/dd/yyyy"
                },
                "mm-dd-yyyy": {
                    mask: "1-2-y",
                    placeholder: "mm-dd-yyyy",
                    leapday: "02-29-",
                    separator: "-",
                    alias: "mm/dd/yyyy"
                },
                "yyyy.mm.dd": {
                    mask: "y.1.2",
                    placeholder: "yyyy.mm.dd",
                    leapday: ".02.29",
                    separator: ".",
                    alias: "yyyy/mm/dd"
                },
                "yyyy-mm-dd": {
                    mask: "y-1-2",
                    placeholder: "yyyy-mm-dd",
                    leapday: "-02-29",
                    separator: "-",
                    alias: "yyyy/mm/dd"
                },
                datetime: {
                    mask: "1/2/y h:s",
                    placeholder: "dd/mm/yyyy hh:mm",
                    alias: "dd/mm/yyyy",
                    regex: {
                        hrspre: new RegExp("[012]"),
                        hrs24: new RegExp("2[0-4]|1[3-9]"),
                        hrs: new RegExp("[01][0-9]|2[0-4]"),
                        ampm: new RegExp("^[a|p|A|P][m|M]"),
                        mspre: new RegExp("[0-5]"),
                        ms: new RegExp("[0-5][0-9]")
                    },
                    timeseparator: ":",
                    hourFormat: "24",
                    definitions: {
                        h: {
                            validator: function(e, t, n, i, r) {
                                if ("24" === r.hourFormat && 24 === parseInt(e, 10)) return t.buffer[n - 1] = "0",
                                    t.buffer[n] = "0",
                                    {
                                        refreshFromBuffer: {
                                            start: n - 1,
                                            end: n
                                        },
                                        c: "0"
                                    };
                                var o = r.regex.hrs.test(e);
                                if (!i && !o && (e.charAt(1) === r.timeseparator || -1 !== "-.:".indexOf(e.charAt(1))) && (o = r.regex.hrs.test("0" + e.charAt(0)))) return t.buffer[n - 1] = "0",
                                    t.buffer[n] = e.charAt(0),
                                    n++,
                                    {
                                        refreshFromBuffer: {
                                            start: n - 2,
                                            end: n
                                        },
                                        pos: n,
                                        c: r.timeseparator
                                    };
                                if (o && "24" !== r.hourFormat && r.regex.hrs24.test(e)) {
                                    var a = parseInt(e, 10);
                                    return 24 === a ? (t.buffer[n + 5] = "a", t.buffer[n + 6] = "m") : (t.buffer[n + 5] = "p", t.buffer[n + 6] = "m"),
                                        a -= 12,
                                        10 > a ? (t.buffer[n] = a.toString(), t.buffer[n - 1] = "0") : (t.buffer[n] = a.toString().charAt(1), t.buffer[n - 1] = a.toString().charAt(0)),
                                        {
                                            refreshFromBuffer: {
                                                start: n - 1,
                                                end: n + 6
                                            },
                                            c: t.buffer[n]
                                        }
                                }
                                return o
                            },
                            cardinality: 2,
                            prevalidator: [{
                                validator: function(e, t, n, i, r) {
                                    var o = r.regex.hrspre.test(e);
                                    return i || o || !(o = r.regex.hrs.test("0" + e)) ? o: (t.buffer[n] = "0", n++, {
                                        pos: n
                                    })
                                },
                                cardinality: 1
                            }]
                        },
                        s: {
                            validator: "[0-5][0-9]",
                            cardinality: 2,
                            prevalidator: [{
                                validator: function(e, t, n, i, r) {
                                    var o = r.regex.mspre.test(e);
                                    return i || o || !(o = r.regex.ms.test("0" + e)) ? o: (t.buffer[n] = "0", n++, {
                                        pos: n
                                    })
                                },
                                cardinality: 1
                            }]
                        },
                        t: {
                            validator: function(e, t, n, i, r) {
                                return r.regex.ampm.test(e + "m")
                            },
                            casing: "lower",
                            cardinality: 1
                        }
                    },
                    insertMode: !1,
                    autoUnmask: !1
                },
                datetime12: {
                    mask: "1/2/y h:s t\\m",
                    placeholder: "dd/mm/yyyy hh:mm xm",
                    alias: "datetime",
                    hourFormat: "12"
                },
                "mm/dd/yyyy hh:mm xm": {
                    mask: "1/2/y h:s t\\m",
                    placeholder: "mm/dd/yyyy hh:mm xm",
                    alias: "datetime12",
                    regex: {
                        val2pre: function(e) {
                            var n = t.escapeRegex.call(this, e);
                            return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])")
                        },
                        val2: function(e) {
                            var n = t.escapeRegex.call(this, e);
                            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)")
                        },
                        val1pre: new RegExp("[01]"),
                        val1: new RegExp("0[1-9]|1[012]")
                    },
                    leapday: "02/29/",
                    onKeyDown: function(n, i, r, o) {
                        var a = e(this);
                        if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                            var s = new Date;
                            a.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()),
                                a.trigger("setvalue")
                        }
                    }
                },
                "hh:mm t": {
                    mask: "h:s t\\m",
                    placeholder: "hh:mm xm",
                    alias: "datetime",
                    hourFormat: "12"
                },
                "h:s t": {
                    mask: "h:s t\\m",
                    placeholder: "hh:mm xm",
                    alias: "datetime",
                    hourFormat: "12"
                },
                "hh:mm:ss": {
                    mask: "h:s:s",
                    placeholder: "hh:mm:ss",
                    alias: "datetime",
                    autoUnmask: !1
                },
                "hh:mm": {
                    mask: "h:s",
                    placeholder: "hh:mm",
                    alias: "datetime",
                    autoUnmask: !1
                },
                date: {
                    alias: "dd/mm/yyyy"
                },
                "mm/yyyy": {
                    mask: "1/y",
                    placeholder: "mm/yyyy",
                    leapday: "donotuse",
                    separator: "/",
                    alias: "mm/dd/yyyy"
                },
                shamsi: {
                    regex: {
                        val2pre: function(e) {
                            var n = t.escapeRegex.call(this, e);
                            return new RegExp("((0[1-9]|1[012])" + n + "[0-3])")
                        },
                        val2: function(e) {
                            var n = t.escapeRegex.call(this, e);
                            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + n + "30)|((0[1-6])" + n + "31)")
                        },
                        val1pre: new RegExp("[01]"),
                        val1: new RegExp("0[1-9]|1[012]")
                    },
                    yearrange: {
                        minyear: 1300,
                        maxyear: 1499
                    },
                    mask: "y/1/2",
                    leapday: "/12/30",
                    placeholder: "yyyy/mm/dd",
                    alias: "mm/dd/yyyy",
                    clearIncomplete: !0
                }
            }),
            t
    } (jQuery, Inputmask),
    function(e, t) {
        return t.extendDefinitions({
            A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                cardinality: 1,
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                cardinality: 1,
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                cardinality: 1,
                casing: "upper"
            }
        }),
            t.extendAliases({
                url: {
                    definitions: {
                        i: {
                            validator: ".",
                            cardinality: 1
                        }
                    },
                    mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
                    insertMode: !1,
                    autoUnmask: !1
                },
                ip: {
                    mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                    definitions: {
                        i: {
                            validator: function(e, t, n, i, r) {
                                return n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e: "0" + e) : e = "00" + e,
                                    new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)
                            },
                            cardinality: 1
                        }
                    },
                    onUnMask: function(e, t, n) {
                        return e
                    }
                },
                email: {
                    mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,64}]@*{1,64}[.*{2,64}][.*{2,6}][.*{1,2}]",
                    greedy: !1,
                    onBeforePaste: function(e, t) {
                        return e = e.toLowerCase(),
                            e.replace("mailto:", "")
                    },
                    definitions: {
                        "*": {
                            validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                            cardinality: 1,
                            casing: "lower"
                        }
                    },
                    onUnMask: function(e, t, n) {
                        return e
                    }
                },
                mac: {
                    mask: "##:##:##:##:##:##"
                }
            }),
            t
    } (jQuery, Inputmask),
    function(e, t) {
        return t.extendAliases({
            numeric: {
                mask: function(e) {
                    function t(t) {
                        for (var n = "",
                                 i = 0; i < t.length; i++) n += e.definitions[t.charAt(i)] ? "\\" + t.charAt(i) : t.charAt(i);
                        return n
                    }
                    if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, e.groupSeparator === e.radixPoint && ("." === e.radixPoint ? e.groupSeparator = ",": "," === e.radixPoint ? e.groupSeparator = ".": e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), isFinite(e.integerDigits))) {
                        var n = Math.floor(e.integerDigits / e.groupSize),
                            i = e.integerDigits % e.groupSize;
                        e.integerDigits = parseInt(e.integerDigits) + (0 === i ? n - 1 : n),
                        e.integerDigits < 1 && (e.integerDigits = "*")
                    }
                    e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)),
                        e.radixFocus = e.radixFocus && "" !== e.placeholder && e.integerOptional === !0,
                        e.definitions[";"] = e.definitions["~"],
                        e.definitions[";"].definitionSymbol = "~",
                    1 == e.numericInput && (e.radixFocus = !1, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
                    var r = t(e.prefix);
                    return r += "[+]",
                        r += e.integerOptional === !0 ? "~{1," + e.integerDigits + "}": "~{" + e.integerDigits + "}",
                    void 0 !== e.digits && (isNaN(e.digits) || parseInt(e.digits) > 0) && (r += e.digitsOptional ? "[" + (e.decimalProtect ? ":": e.radixPoint) + ";{1," + e.digits + "}]": (e.decimalProtect ? ":": e.radixPoint) + ";{" + e.digits + "}"),
                    "" !== e.negationSymbol.back && (r += "[-]"),
                        r += t(e.suffix),
                        e.greedy = !1,
                        r
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                radixPoint: ".",
                radixFocus: !0,
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowPlus: !0,
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                postFormat: function(n, i, r, o) {
                    o.numericInput === !0 && (n = n.reverse(), isFinite(i) && (i = n.join("").length - i - 1));
                    var a, s, l = !1;
                    n.length >= o.suffix.length && n.join("").indexOf(o.suffix) === n.length - o.suffix.length && (n.length = n.length - o.suffix.length, l = !0),
                        i = i >= n.length ? n.length - 1 : i < o.prefix.length ? o.prefix.length: i;
                    var c = !1,
                        u = n[i];
                    if ("" === o.groupSeparator || o.numericInput !== !0 && -1 !== e.inArray(o.radixPoint, n) && i > e.inArray(o.radixPoint, n) || new RegExp("[" + t.escapeRegex(o.negationSymbol.front) + "+]").test(u)) {
                        if (l) for (a = 0, s = o.suffix.length; s > a; a++) n.push(o.suffix.charAt(a));
                        return {
                            pos: i
                        }
                    }
                    var d = n.slice();
                    u === o.groupSeparator && (d.splice(i--, 1), u = d[i]),
                        r ? u !== o.radixPoint && (d[i] = "?") : d.splice(i, 0, "?");
                    var f = d.join(""),
                        p = f;
                    if (f.length > 0 && o.autoGroup || r && -1 !== f.indexOf(o.groupSeparator)) {
                        var h = t.escapeRegex(o.groupSeparator);
                        c = 0 === f.indexOf(o.groupSeparator),
                            f = f.replace(new RegExp(h, "g"), "");
                        var m = f.split(o.radixPoint);
                        if (f = "" === o.radixPoint ? f: m[0], f !== o.prefix + "?0" && f.length >= o.groupSize + o.prefix.length) for (var g = new RegExp("([-+]?[\\d?]+)([\\d?]{" + o.groupSize + "})"); g.test(f);) f = f.replace(g, "$1" + o.groupSeparator + "$2"),
                            f = f.replace(o.groupSeparator + o.groupSeparator, o.groupSeparator);
                        "" !== o.radixPoint && m.length > 1 && (f += o.radixPoint + m[1])
                    }
                    for (c = p !== f, n.length = f.length, a = 0, s = f.length; s > a; a++) n[a] = f.charAt(a);
                    var v = e.inArray("?", n);
                    if ( - 1 === v && u === o.radixPoint && (v = e.inArray(o.radixPoint, n)), r ? n[v] = u: n.splice(v, 1), !c && l) for (a = 0, s = o.suffix.length; s > a; a++) n.push(o.suffix.charAt(a));
                    return v = o.numericInput && isFinite(i) ? n.join("").length - v - 1 : v,
                    o.numericInput && (n = n.reverse(), e.inArray(o.radixPoint, n) < v && n.join("").length - o.suffix.length !== v && (v -= 1)),
                        {
                            pos: v,
                            refreshFromBuffer: c,
                            buffer: n
                        }
                },
                onBeforeWrite: function(n, i, r, o) {
                    if (n && ("blur" === n.type || "checkval" === n.type)) {
                        var a = i.join(""),
                            s = a.replace(o.prefix, "");
                        if (s = s.replace(o.suffix, ""), s = s.replace(new RegExp(t.escapeRegex(o.groupSeparator), "g"), ""), "," === o.radixPoint && (s = s.replace(t.escapeRegex(o.radixPoint), ".")), isFinite(s) && isFinite(o.min) && parseFloat(s) < parseFloat(o.min)) return e.extend(!0, {
                                refreshFromBuffer: !0,
                                buffer: (o.prefix + o.min).split("")
                            },
                            o.postFormat((o.prefix + o.min).split(""), 0, !0, o));
                        if (o.numericInput !== !0) {
                            var l = "" !== o.radixPoint ? i.join("").split(o.radixPoint) : [i.join("")],
                                c = l[0].match(o.regex.integerPart(o)),
                                u = 2 === l.length ? l[1].match(o.regex.integerNPart(o)) : void 0;
                            if (c) {
                                c[0] !== o.negationSymbol.front + "0" && c[0] !== o.negationSymbol.front && "+" !== c[0] || void 0 !== u && !u[0].match(/^0+$/) || i.splice(c.index, 1);
                                var d = e.inArray(o.radixPoint, i);
                                if ( - 1 !== d) {
                                    if (isFinite(o.digits) && !o.digitsOptional) {
                                        for (var f = 1; f <= o.digits; f++)(void 0 === i[d + f] || i[d + f] === o.placeholder.charAt(0)) && (i[d + f] = "0");
                                        return {
                                            refreshFromBuffer: a !== i.join(""),
                                            buffer: i
                                        }
                                    }
                                    if (d === i.length - o.suffix.length - 1) return i.splice(d, 1),
                                        {
                                            refreshFromBuffer: !0,
                                            buffer: i
                                        }
                                }
                            }
                        }
                    }
                    if (o.autoGroup) {
                        var p = o.postFormat(i, o.numericInput ? r: r - 1, !0, o);
                        return p.caret = r <= o.prefix.length ? p.pos: p.pos + 1,
                            p
                    }
                },
                regex: {
                    integerPart: function(e) {
                        return new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?\\d+")
                    },
                    integerNPart: function(e) {
                        return new RegExp("[\\d" + t.escapeRegex(e.groupSeparator) + "]+")
                    }
                },
                signHandler: function(e, t, n, i, r) {
                    if (!i && r.allowMinus && "-" === e || r.allowPlus && "+" === e) {
                        var o = t.buffer.join("").match(r.regex.integerPart(r));
                        if (o && o[0].length > 0) return t.buffer[o.index] === ("-" === e ? "+": r.negationSymbol.front) ? "-" === e ? "" !== r.negationSymbol.back ? {
                            pos: o.index,
                            c: r.negationSymbol.front,
                            remove: o.index,
                            caret: n,
                            insert: {
                                pos: t.buffer.length - r.suffix.length - 1,
                                c: r.negationSymbol.back
                            }
                        }: {
                            pos: o.index,
                            c: r.negationSymbol.front,
                            remove: o.index,
                            caret: n
                        }: "" !== r.negationSymbol.back ? {
                            pos: o.index,
                            c: "+",
                            remove: [o.index, t.buffer.length - r.suffix.length - 1],
                            caret: n
                        }: {
                            pos: o.index,
                            c: "+",
                            remove: o.index,
                            caret: n
                        }: t.buffer[o.index] === ("-" === e ? r.negationSymbol.front: "+") ? "-" === e && "" !== r.negationSymbol.back ? {
                            remove: [o.index, t.buffer.length - r.suffix.length - 1],
                            caret: n - 1
                        }: {
                            remove: o.index,
                            caret: n - 1
                        }: "-" === e ? "" !== r.negationSymbol.back ? {
                            pos: o.index,
                            c: r.negationSymbol.front,
                            caret: n + 1,
                            insert: {
                                pos: t.buffer.length - r.suffix.length,
                                c: r.negationSymbol.back
                            }
                        }: {
                            pos: o.index,
                            c: r.negationSymbol.front,
                            caret: n + 1
                        }: {
                            pos: o.index,
                            c: e,
                            caret: n + 1
                        }
                    }
                    return ! 1
                },
                radixHandler: function(t, n, i, r, o) {
                    if (!r && ( - 1 !== e.inArray(t, [",", "."]) && (t = o.radixPoint), t === o.radixPoint && void 0 !== o.digits && (isNaN(o.digits) || parseInt(o.digits) > 0))) {
                        var a = e.inArray(o.radixPoint, n.buffer),
                            s = n.buffer.join("").match(o.regex.integerPart(o));
                        if ( - 1 !== a && n.validPositions[a]) return n.validPositions[a - 1] ? {
                            caret: a + 1
                        }: {
                            pos: s.index,
                            c: s[0],
                            caret: a + 1
                        };
                        if (!s || "0" === s[0] && s.index + 1 !== i) return n.buffer[s ? s.index: i] = "0",
                            {
                                pos: (s ? s.index: i) + 1,
                                c: o.radixPoint
                            }
                    }
                    return ! 1
                },
                leadingZeroHandler: function(t, n, i, r, o) {
                    if (o.numericInput === !0) {
                        if ("0" === n.buffer[n.buffer.length - o.prefix.length - 1]) return {
                            pos: i,
                            remove: n.buffer.length - o.prefix.length - 1
                        }
                    } else {
                        var a = n.buffer.join("").match(o.regex.integerNPart(o)),
                            s = e.inArray(o.radixPoint, n.buffer);
                        if (a && !r && ( - 1 === s || s >= i)) if (0 === a[0].indexOf("0")) {
                            i < o.prefix.length && (i = a.index);
                            var l = e.inArray(o.radixPoint, n._buffer),
                                c = n._buffer && n.buffer.slice(s).join("") === n._buffer.slice(l).join("") || 0 === parseInt(n.buffer.slice(s + 1).join("")),
                                u = n._buffer && n.buffer.slice(a.index, s).join("") === n._buffer.slice(o.prefix.length, l).join("") || "0" === n.buffer.slice(a.index, s).join("");
                            if ( - 1 === s || c && u) return n.buffer.splice(a.index, 1),
                                i = i > a.index ? i - 1 : a.index,
                                {
                                    pos: i,
                                    remove: a.index
                                };
                            if (a.index + 1 === i || "0" === t) return n.buffer.splice(a.index, 1),
                                i = a.index,
                                {
                                    pos: i,
                                    remove: a.index
                                }
                        } else if ("0" === t && i <= a.index && a[0] !== o.groupSeparator) return ! 1
                    }
                    return ! 0
                },
                postValidation: function(e, n, i) {
                    var r = !0,
                        o = i.numericInput ? e.slice().reverse().join("") : e.join(""),
                        a = o.replace(i.prefix, "");
                    return a = a.replace(i.suffix, ""),
                        a = a.replace(new RegExp(t.escapeRegex(i.groupSeparator), "g"), ""),
                    "," === i.radixPoint && (a = a.replace(t.escapeRegex(i.radixPoint), ".")),
                        a = a.replace(new RegExp("^" + t.escapeRegex(i.negationSymbol.front)), "-"),
                        a = a.replace(new RegExp(t.escapeRegex(i.negationSymbol.back) + "$"), ""),
                        a = a === i.negationSymbol.front ? a + "0": a,
                    isFinite(a) && (null !== i.max && isFinite(i.max) && (a = parseFloat(a) > parseFloat(i.max) ? i.max: a, r = i.postFormat((i.prefix + a).split(""), 0, !0, i)), null !== i.min && isFinite(i.min) && (a = parseFloat(a) < parseFloat(i.min) ? i.min: a, r = i.postFormat((i.prefix + a).split(""), 0, !0, i))),
                        r
                },
                definitions: {
                    "~": {
                        validator: function(n, i, r, o, a) {
                            var s = a.signHandler(n, i, r, o, a);
                            if (!s && (s = a.radixHandler(n, i, r, o, a), !s && (s = o ? new RegExp("[0-9" + t.escapeRegex(a.groupSeparator) + "]").test(n) : new RegExp("[0-9]").test(n), s === !0 && (s = a.leadingZeroHandler(n, i, r, o, a), s === !0)))) {
                                var l = e.inArray(a.radixPoint, i.buffer);
                                s = -1 !== l && a.digitsOptional === !1 && a.numericInput !== !0 && r > l && !o ? {
                                    pos: r,
                                    remove: r
                                }: {
                                    pos: r
                                }
                            }
                            return s
                        },
                        cardinality: 1,
                        prevalidator: null
                    },
                    "+": {
                        validator: function(e, t, n, i, r) {
                            var o = r.signHandler(e, t, n, i, r);
                            return ! o && (i && r.allowMinus && e === r.negationSymbol.front || r.allowMinus && "-" === e || r.allowPlus && "+" === e) && (o = "-" !== e || ("" !== r.negationSymbol.back ? {
                                    pos: n,
                                    c: "-" === e ? r.negationSymbol.front: "+",
                                    caret: n + 1,
                                    insert: {
                                        pos: t.buffer.length,
                                        c: r.negationSymbol.back
                                    }
                                }: {
                                    pos: n,
                                    c: "-" === e ? r.negationSymbol.front: "+",
                                    caret: n + 1
                                })),
                                o
                        },
                        cardinality: 1,
                        prevalidator: null,
                        placeholder: ""
                    },
                    "-": {
                        validator: function(e, t, n, i, r) {
                            var o = r.signHandler(e, t, n, i, r);
                            return ! o && i && r.allowMinus && e === r.negationSymbol.back && (o = !0),
                                o
                        },
                        cardinality: 1,
                        prevalidator: null,
                        placeholder: ""
                    },
                    ":": {
                        validator: function(e, n, i, r, o) {
                            var a = o.signHandler(e, n, i, r, o);
                            if (!a) {
                                var s = "[" + t.escapeRegex(o.radixPoint) + ",\\.]";
                                a = new RegExp(s).test(e),
                                a && n.validPositions[i] && n.validPositions[i].match.placeholder === o.radixPoint && (a = {
                                    caret: i + 1
                                })
                            }
                            return a ? {
                                c: o.radixPoint
                            }: a
                        },
                        cardinality: 1,
                        prevalidator: null,
                        placeholder: function(e) {
                            return e.radixPoint
                        }
                    }
                },
                onUnMask: function(e, n, i) {
                    var r = e.replace(i.prefix, "");
                    return r = r.replace(i.suffix, ""),
                        r = r.replace(new RegExp(t.escapeRegex(i.groupSeparator), "g"), ""),
                        i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== r.indexOf(i.radixPoint) && (r = r.replace(t.escapeRegex.call(this, i.radixPoint), ".")), Number(r)) : r
                },
                isComplete: function(e, n) {
                    var i = e.join(""),
                        r = e.slice();
                    if (n.postFormat(r, 0, !0, n), r.join("") !== i) return ! 1;
                    var o = i.replace(n.prefix, "");
                    return o = o.replace(n.suffix, ""),
                        o = o.replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), ""),
                    "," === n.radixPoint && (o = o.replace(t.escapeRegex(n.radixPoint), ".")),
                        isFinite(o)
                },
                onBeforeMask: function(e, n) {
                    if ("" !== n.radixPoint && isFinite(e)) e = e.toString().replace(".", n.radixPoint);
                    else {
                        var i = e.match(/,/g),
                            r = e.match(/\./g);
                        r && i ? r.length > i.length ? (e = e.replace(/\./g, ""), e = e.replace(",", n.radixPoint)) : i.length > r.length ? (e = e.replace(/,/g, ""), e = e.replace(".", n.radixPoint)) : e = e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e = e.replace(/,/g, "") : e = e.replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), "")
                    }
                    if (0 === n.digits && ( - 1 !== e.indexOf(".") ? e = e.substring(0, e.indexOf(".")) : -1 !== e.indexOf(",") && (e = e.substring(0, e.indexOf(",")))), "" !== n.radixPoint && isFinite(n.digits) && -1 !== e.indexOf(n.radixPoint)) {
                        var o = e.split(n.radixPoint),
                            a = o[1].match(new RegExp("\\d*"))[0];
                        if (parseInt(n.digits) < a.toString().length) {
                            var s = Math.pow(10, parseInt(n.digits));
                            e = e.replace(t.escapeRegex(n.radixPoint), "."),
                                e = Math.round(parseFloat(e) * s) / s,
                                e = e.toString().replace(".", n.radixPoint)
                        }
                    }
                    return e.toString()
                },
                canClearPosition: function(n, i, r, o, a) {
                    var s = n.validPositions[i].input,
                        l = s !== a.radixPoint || null !== n.validPositions[i].match.fn && a.decimalProtect === !1 || isFinite(s) || i === r || s === a.groupSeparator || s === a.negationSymbol.front || s === a.negationSymbol.back;
                    if (l && isFinite(s)) {
                        var c, u = e.inArray(a.radixPoint, n.buffer),
                            d = !1;
                        if (void 0 === n.validPositions[u] && (n.validPositions[u] = {
                                input: a.radixPoint
                            },
                                d = !0), !o && n.buffer) {
                            c = n.buffer.join("").substr(0, i).match(a.regex.integerNPart(a));
                            var f = i + 1,
                                p = null == c || 0 === parseInt(c[0].replace(new RegExp(t.escapeRegex(a.groupSeparator), "g"), ""));
                            if (p) for (; n.validPositions[f] && (n.validPositions[f].input === a.groupSeparator || "0" === n.validPositions[f].input);) delete n.validPositions[f],
                                f++
                        }
                        var h = [];
                        for (var m in n.validPositions) void 0 !== n.validPositions[m].input && h.push(n.validPositions[m].input);
                        if (d && delete n.validPositions[u], u > 0) {
                            var g = h.join("");
                            if (c = g.match(a.regex.integerNPart(a))) if (u >= i) if (0 === c[0].indexOf("0")) l = c.index !== i || "0" === a.placeholder;
                            else {
                                var v = parseInt(c[0].replace(new RegExp(t.escapeRegex(a.groupSeparator), "g"), "")),
                                    y = parseInt(g.split(a.radixPoint)[1]);
                                10 > v && n.validPositions[i] && ("0" !== a.placeholder || y > 0) && (n.validPositions[i].input = "0", n.p = a.prefix.length + 1, l = !1)
                            } else 0 === c[0].indexOf("0") && 3 === g.length && (n.validPositions = {},
                                l = !1)
                        }
                    }
                    return l
                },
                onKeyDown: function(n, i, r, o) {
                    var a = e(this);
                    if (n.ctrlKey) switch (n.keyCode) {
                        case t.keyCode.UP:
                            a.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(o.step)),
                                a.trigger("setvalue");
                            break;
                        case t.keyCode.DOWN:
                            a.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(o.step)),
                                a.trigger("setvalue")
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: !0,
                digits: 2,
                digitsOptional: !1,
                clearMaskOnLostFocus: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0,
                radixPoint: ""
            },
            percentage: {
                alias: "numeric",
                digits: 2,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: !1,
                min: 0,
                max: 100,
                suffix: " %",
                allowPlus: !1,
                allowMinus: !1
            }
        }),
            t
    } (jQuery, Inputmask),
    function(e, t) {
        return t.extendAliases({
            phone: {
                url: "phone-codes/phone-codes.js",
                countrycode: "",
                phoneCodeCache: {},
                mask: function(t) {
                    if (void 0 === t.phoneCodeCache[t.url]) {
                        var n = [];
                        t.definitions["#"] = t.definitions[9],
                            e.ajax({
                                url: t.url,
                                async: !1,
                                type: "get",
                                dataType: "json",
                                success: function(e) {
                                    n = e
                                },
                                error: function(e, n, i) {
                                    alert(i + " - " + t.url)
                                }
                            }),
                            t.phoneCodeCache[t.url] = n.sort(function(e, t) {
                                return (e.mask || e) < (t.mask || t) ? -1 : 1
                            })
                    }
                    return t.phoneCodeCache[t.url]
                },
                keepStatic: !1,
                nojumps: !0,
                nojumpsThreshold: 1,
                onBeforeMask: function(e, t) {
                    var n = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                    return (n.indexOf(t.countrycode) > 1 || -1 === n.indexOf(t.countrycode)) && (n = "+" + t.countrycode + n),
                        n
                }
            },
            phonebe: {
                alias: "phone",
                url: "phone-codes/phone-be.js",
                countrycode: "32",
                nojumpsThreshold: 4
            }
        }),
            t
    } (jQuery, Inputmask),
    function(e, t) {
        return t.extendAliases({
            Regex: {
                mask: "r",
                greedy: !1,
                repeat: "*",
                regex: null,
                regexTokens: null,
                tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                quantifierFilter: /[0-9]+[^,]/,
                isComplete: function(e, t) {
                    return new RegExp(t.regex).test(e.join(""))
                },
                definitions: {
                    r: {
                        validator: function(t, n, i, r, o) {
                            function a(e, t) {
                                this.matches = [],
                                    this.isGroup = e || !1,
                                    this.isQuantifier = t || !1,
                                    this.quantifier = {
                                        min: 1,
                                        max: 1
                                    },
                                    this.repeaterPart = void 0
                            }
                            function s() {
                                var e, t, n = new a,
                                    i = [];
                                for (o.regexTokens = []; e = o.tokenizer.exec(o.regex);) switch (t = e[0], t.charAt(0)) {
                                    case "(":
                                        i.push(new a((!0)));
                                        break;
                                    case ")":
                                        u = i.pop(),
                                            i.length > 0 ? i[i.length - 1].matches.push(u) : n.matches.push(u);
                                        break;
                                    case "{":
                                    case "+":
                                    case "*":
                                        var r = new a((!1), (!0));
                                        t = t.replace(/[{}]/g, "");
                                        var s = t.split(","),
                                            l = isNaN(s[0]) ? s[0] : parseInt(s[0]),
                                            c = 1 === s.length ? l: isNaN(s[1]) ? s[1] : parseInt(s[1]);
                                        if (r.quantifier = {
                                                min: l,
                                                max: c
                                            },
                                            i.length > 0) {
                                            var d = i[i.length - 1].matches;
                                            e = d.pop(),
                                            e.isGroup || (u = new a((!0)), u.matches.push(e), e = u),
                                                d.push(e),
                                                d.push(r)
                                        } else e = n.matches.pop(),
                                        e.isGroup || (u = new a((!0)), u.matches.push(e), e = u),
                                            n.matches.push(e),
                                            n.matches.push(r);
                                        break;
                                    default:
                                        i.length > 0 ? i[i.length - 1].matches.push(t) : n.matches.push(t)
                                }
                                n.matches.length > 0 && o.regexTokens.push(n)
                            }
                            function l(t, n) {
                                var i = !1;
                                n && (f += "(", h++);
                                for (var r = 0; r < t.matches.length; r++) {
                                    var o = t.matches[r];
                                    if (o.isGroup === !0) i = l(o, !0);
                                    else if (o.isQuantifier === !0) {
                                        var a = e.inArray(o, t.matches),
                                            s = t.matches[a - 1],
                                            u = f;
                                        if (isNaN(o.quantifier.max)) {
                                            for (; o.repeaterPart && o.repeaterPart !== f && o.repeaterPart.length > f.length && !(i = l(s, !0)););
                                            i = i || l(s, !0),
                                            i && (o.repeaterPart = f),
                                                f = u + o.quantifier.max
                                        } else {
                                            for (var d = 0,
                                                     p = o.quantifier.max - 1; p > d && !(i = l(s, !0)); d++);
                                            f = u + "{" + o.quantifier.min + "," + o.quantifier.max + "}"
                                        }
                                    } else if (void 0 !== o.matches) for (var m = 0; m < o.length && !(i = l(o[m], n)); m++);
                                    else {
                                        var g;
                                        if ("[" == o.charAt(0)) {
                                            g = f,
                                                g += o;
                                            for (var v = 0; h > v; v++) g += ")";
                                            var y = new RegExp("^(" + g + ")$");
                                            i = y.test(c)
                                        } else for (var x = 0,
                                                        b = o.length; b > x; x++) if ("\\" !== o.charAt(x)) {
                                            g = f,
                                                g += o.substr(0, x + 1),
                                                g = g.replace(/\|$/, "");
                                            for (var v = 0; h > v; v++) g += ")";
                                            var y = new RegExp("^(" + g + ")$");
                                            if (i = y.test(c)) break
                                        }
                                        f += o
                                    }
                                    if (i) break
                                }
                                return n && (f += ")", h--),
                                    i
                            }
                            var c, u, d = n.buffer.slice(),
                                f = "",
                                p = !1,
                                h = 0;
                            null === o.regexTokens && s(),
                                d.splice(i, 0, t),
                                c = d.join("");
                            for (var m = 0; m < o.regexTokens.length; m++) {
                                var g = o.regexTokens[m];
                                if (p = l(g, g.isGroup)) break
                            }
                            return p
                        },
                        cardinality: 1
                    }
                }
            }
        }),
            t
    } (jQuery, Inputmask),
    function(e, t) {
        function n(t, n, i, r) {
            var o = {
                data: r || 0 === r || r === !1 ? r: n ? n.data: {},
                _wrap: n ? n._wrap: null,
                tmpl: null,
                parent: n || null,
                nodes: [],
                calls: u,
                nest: d,
                wrap: f,
                html: p,
                update: h
            };
            return t && e.extend(o, t, {
                nodes: [],
                parent: n
            }),
            i && (o.tmpl = i, o._ctnt = o._ctnt || o.tmpl(e, o), o.key = ++w, (_.length ? b: x)[w] = o),
                o
        }
        function i(t, n, o) {
            var a, s = o ? e.map(o,
                function(e) {
                    return "string" == typeof e ? t.key ? e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + v + '="' + t.key + '" $2') : e: i(e, t, e._ctnt)
                }) : t;
            return n ? s: (s = s.join(""), s.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
                function(t, n, i, o) {
                    a = e(i).get(),
                        c(a),
                    n && (a = r(n).concat(a)),
                    o && (a = a.concat(r(o)))
                }), a ? a: r(s))
        }
        function r(t) {
            var n = document.createElement("div");
            return n.innerHTML = t,
                e.makeArray(n.childNodes)
        }
        function o(t) {
            return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + e.trim(t).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
                    function(t, n, i, r, o, a, l) {
                        var c, u, d, f = e.tmpl.tag[i];
                        if (!f) throw "Unknown template tag: " + i;
                        return c = f._default || [],
                        a && !/\w$/.test(o) && (o += a, a = ""),
                            o ? (o = s(o), l = l ? "," + s(l) + ")": a ? ")": "", u = a ? o.indexOf(".") > -1 ? o + s(a) : "(" + o + ").call($item" + l: o, d = a ? u: "(typeof(" + o + ")==='function'?(" + o + ").call($item):(" + o + "))") : d = u = c.$1 || "null",
                            r = s(r),
                        "');" + f[n ? "close": "open"].split("$notnull_1").join(o ? "typeof(" + o + ")!=='undefined' && (" + o + ")!=null": "true").split("$1a").join(d).split("$1").join(u).split("$2").join(r || c.$2 || "") + "__.push('"
                    }) + "');}return __;")
        }
        function a(t, n) {
            t._wrap = i(t, !0, e.isArray(n) ? n: [y.test(n) ? n: e(n).html()]).join("")
        }
        function s(e) {
            return e ? e.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
        }
        function l(e) {
            var t = document.createElement("div");
            return t.appendChild(e.cloneNode(!0)),
                t.innerHTML
        }
        function c(t) {
            function i(t) {
                function i(e) {
                    e += c,
                        a = u[e] = u[e] || n(a, x[a.parent.key + c] || a.parent)
                }
                var r, o, a, s, l = t;
                if (s = t.getAttribute(v)) {
                    for (; l.parentNode && 1 === (l = l.parentNode).nodeType && !(r = l.getAttribute(v)););
                    r !== s && (l = l.parentNode ? 11 === l.nodeType ? 0 : l.getAttribute(v) || 0 : 0, (a = x[s]) || (a = b[s], a = n(a, x[l] || b[l]), a.key = ++w, x[w] = a), C && i(s)),
                        t.removeAttribute(v)
                } else C && (a = e.data(t, "tmplItem")) && (i(a.key), x[a.key] = a, l = e.data(t.parentNode, "tmplItem"), l = l ? l.key: 0);
                if (a) {
                    for (o = a; o && o.key != l;) o.nodes.push(t),
                        o = o.parent;
                    delete a._ctnt,
                        delete a._wrap,
                        e.data(t, "tmplItem", a)
                }
            }
            var r, o, a, s, l, c = "_" + C,
                u = {};
            for (a = 0, s = t.length; a < s; a++) if (1 === (r = t[a]).nodeType) {
                for (o = r.getElementsByTagName("*"), l = o.length - 1; l >= 0; l--) i(o[l]);
                i(r)
            }
        }
        function u(e, t, n, i) {
            return e ? void _.push({
                _: e,
                tmpl: t,
                item: this,
                data: n,
                options: i
            }) : _.pop()
        }
        function d(t, n, i) {
            return e.tmpl(e.template(t), n, i, this)
        }
        function f(t, n) {
            var i = t.options || {};
            return i.wrapped = n,
                e.tmpl(e.template(t.tmpl), t.data, i, t.item)
        }
        function p(t, n) {
            var i = this._wrap;
            return e.map(e(e.isArray(i) ? i.join("") : i).filter(t || "*"),
                function(e) {
                    return n ? e.innerText || e.textContent: e.outerHTML || l(e)
                })
        }
        function h() {
            var t = this.nodes;
            e.tmpl(null, null, null, this).insertBefore(t[0]),
                e(t).remove()
        }
        var m, g = e.fn.domManip,
            v = "_tmplitem",
            y = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
            x = {},
            b = {},
            k = {
                key: 0,
                data: {}
            },
            w = 0,
            C = 0,
            _ = [];
        e.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            },
            function(t, n) {
                e.fn[t] = function(i) {
                    var r, o, a, s, l = [],
                        c = e(i),
                        u = 1 === this.length && this[0].parentNode;
                    if (m = x || {},
                        u && 11 === u.nodeType && 1 === u.childNodes.length && 1 === c.length) c[n](this[0]),
                        l = this;
                    else {
                        for (o = 0, a = c.length; o < a; o++) C = o,
                            r = (o > 0 ? this.clone(!0) : this).get(),
                            e(c[o])[n](r),
                            l = l.concat(r);
                        C = 0,
                            l = this.pushStack(l, t, c.selector)
                    }
                    return s = m,
                        m = null,
                        e.tmpl.complete(s),
                        l
                }
            }),
            e.fn.extend({
                tmpl: function(t, n, i) {
                    return e.tmpl(this[0], t, n, i)
                },
                tmplItem: function() {
                    return e.tmplItem(this[0])
                },
                template: function(t) {
                    return e.template(t, this[0])
                },
                domManip: function(t, n, i, r) {
                    if (t[0] && e.isArray(t[0])) {
                        for (var o, a = e.makeArray(arguments), s = t[0], l = s.length, c = 0; c < l && !(o = e.data(s[c++], "tmplItem")););
                        o && C && (a[2] = function(t) {
                            e.tmpl.afterManip(this, t, i)
                        }),
                            g.apply(this, a)
                    } else g.apply(this, arguments);
                    return C = 0,
                    m || e.tmpl.complete(x),
                        this
                }
            }),
            e.extend({
                tmpl: function(t, r, o, s) {
                    var l, c = !s;
                    if (c) s = k,
                        t = e.template[t] || e.template(null, t),
                        b = {};
                    else if (!t) return t = s.tmpl,
                        x[s.key] = s,
                        s.nodes = [],
                    s.wrapped && a(s, s.wrapped),
                        e(i(s, null, s.tmpl(e, s)));
                    return t ? ("function" == typeof r && (r = r.call(s || {})), o && o.wrapped && a(o, o.wrapped), l = e.isArray(r) ? e.map(r,
                        function(e) {
                            return e ? n(o, s, t, e) : null
                        }) : [n(o, s, t, r)], c ? e(i(s, null, l)) : l) : []
                },
                tmplItem: function(t) {
                    var n;
                    for (t instanceof e && (t = t[0]); t && 1 === t.nodeType && !(n = e.data(t, "tmplItem")) && (t = t.parentNode););
                    return n || k
                },
                template: function(t, n) {
                    return n ? ("string" == typeof n ? n = o(n) : n instanceof e && (n = n[0] || {}), n.nodeType && (n = e.data(n, "tmpl") || e.data(n, "tmpl", o(n.innerHTML))), "string" == typeof t ? e.template[t] = n: n) : t ? "string" != typeof t ? e.template(null, t) : e.template[t] || e.template(null, y.test(t) ? t: e(t)) : null
                },
                encode: function(e) {
                    return ("" + e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
                }
            }),
            e.extend(e.tmpl, {
                tag: {
                    tmpl: {
                        _default: {
                            $2: "null"
                        },
                        open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
                    },
                    wrap: {
                        _default: {
                            $2: "null"
                        },
                        open: "$item.calls(__,$1,$2);__=[];",
                        close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
                    },
                    each: {
                        _default: {
                            $2: "$index, $value"
                        },
                        open: "if($notnull_1){$.each($1a,function($2){with(this){",
                        close: "}});}"
                    },
                    "if": {
                        open: "if(($notnull_1) && $1a){",
                        close: "}"
                    },
                    "else": {
                        _default: {
                            $1: "true"
                        },
                        open: "}else if(($notnull_1) && $1a){"
                    },
                    html: {
                        open: "if($notnull_1){__.push($1a);}"
                    },
                    "=": {
                        _default: {
                            $1: "$data"
                        },
                        open: "if($notnull_1){__.push($.encode($1a));}"
                    },
                    "!": {
                        open: ""
                    }
                },
                complete: function(e) {
                    x = {}
                },
                afterManip: function(t, n, i) {
                    var r = 11 === n.nodeType ? e.makeArray(n.childNodes) : 1 === n.nodeType ? [n] : [];
                    i.call(t, n),
                        c(r),
                        C++
                }
            })
    } (jQuery),
    function($) {
        for (var supportedCSS, supportedCSSOrigin, styles = document.getElementsByTagName("head")[0].style, toCheck = "transformProperty WebkitTransform OTransform msTransform MozTransform".split(" "), a = 0; a < toCheck.length; a++) void 0 !== styles[toCheck[a]] && (supportedCSS = toCheck[a]);
        supportedCSS && (supportedCSSOrigin = supportedCSS.replace(/[tT]ransform/, "TransformOrigin"), "T" == supportedCSSOrigin[0] && (supportedCSSOrigin[0] = "t")),
            eval('IE = "v"=="\x0B"'),
            jQuery.fn.extend({
                rotate: function(e) {
                    if (0 !== this.length && "undefined" != typeof e) {
                        "number" == typeof e && (e = {
                            angle: e
                        });
                        for (var t = [], n = 0, i = this.length; n < i; n++) {
                            var r = this.get(n);
                            if (r.Wilq32 && r.Wilq32.PhotoEffect) r.Wilq32.PhotoEffect._handleRotation(e);
                            else {
                                var o = $.extend(!0, {},
                                    e),
                                    a = new Wilq32.PhotoEffect(r, o)._rootObj;
                                t.push($(a))
                            }
                        }
                        return t
                    }
                },
                getRotateAngle: function() {
                    for (var e = [], t = 0, n = this.length; t < n; t++) {
                        var i = this.get(t);
                        i.Wilq32 && i.Wilq32.PhotoEffect && (e[t] = i.Wilq32.PhotoEffect._angle)
                    }
                    return e
                },
                stopRotate: function() {
                    for (var e = 0,
                             t = this.length; e < t; e++) {
                        var n = this.get(e);
                        n.Wilq32 && n.Wilq32.PhotoEffect && clearTimeout(n.Wilq32.PhotoEffect._timer)
                    }
                }
            }),
            Wilq32 = window.Wilq32 || {},
            Wilq32.PhotoEffect = function() {
                return supportedCSS ?
                    function(e, t) {
                        e.Wilq32 = {
                            PhotoEffect: this
                        },
                            this._img = this._rootObj = this._eventObj = e,
                            this._handleRotation(t)
                    }: function(e, t) {
                        if (this._img = e, this._onLoadDelegate = [t], this._rootObj = document.createElement("span"), this._rootObj.style.display = "inline-block", this._rootObj.Wilq32 = {
                                PhotoEffect: this
                            },
                                e.parentNode.insertBefore(this._rootObj, e), e.complete) this._Loader();
                        else {
                            var n = this;
                            jQuery(this._img).bind("load",
                                function() {
                                    n._Loader()
                                })
                        }
                    }
            } (),
            Wilq32.PhotoEffect.prototype = {
                _setupParameters: function(e) {
                    this._parameters = this._parameters || {},
                    "number" != typeof this._angle && (this._angle = 0),
                    "number" == typeof e.angle && (this._angle = e.angle),
                        this._parameters.animateTo = "number" == typeof e.animateTo ? e.animateTo: this._angle,
                        this._parameters.step = e.step || this._parameters.step || null,
                        this._parameters.easing = e.easing || this._parameters.easing || this._defaultEasing,
                        this._parameters.duration = e.duration || this._parameters.duration || 1e3,
                        this._parameters.callback = e.callback || this._parameters.callback || this._emptyFunction,
                        this._parameters.center = e.center || this._parameters.center || ["50%", "50%"],
                        "string" == typeof this._parameters.center[0] ? this._rotationCenterX = parseInt(this._parameters.center[0], 10) / 100 * this._imgWidth * this._aspectW: this._rotationCenterX = this._parameters.center[0],
                        "string" == typeof this._parameters.center[1] ? this._rotationCenterY = parseInt(this._parameters.center[1], 10) / 100 * this._imgHeight * this._aspectH: this._rotationCenterY = this._parameters.center[1],
                    e.bind && e.bind != this._parameters.bind && this._BindEvents(e.bind)
                },
                _emptyFunction: function() {},
                _defaultEasing: function(e, t, n, i, r) {
                    return - i * ((t = t / r - 1) * t * t * t - 1) + n
                },
                _handleRotation: function(e, t) {
                    return supportedCSS || this._img.complete || t ? (this._setupParameters(e), void(this._angle == this._parameters.animateTo ? this._rotate(this._angle) : this._animateStart())) : void this._onLoadDelegate.push(e)
                },
                _BindEvents: function(e) {
                    if (e && this._eventObj) {
                        if (this._parameters.bind) {
                            var t = this._parameters.bind;
                            for (var n in t) t.hasOwnProperty(n) && jQuery(this._eventObj).unbind(n, t[n])
                        }
                        this._parameters.bind = e;
                        for (var n in e) e.hasOwnProperty(n) && jQuery(this._eventObj).bind(n, e[n])
                    }
                },
                _Loader: function() {
                    return IE ?
                        function() {
                            var e = this._img.width,
                                t = this._img.height;
                            this._imgWidth = e,
                                this._imgHeight = t,
                                this._img.parentNode.removeChild(this._img),
                                this._vimage = this.createVMLNode("image"),
                                this._vimage.src = this._img.src,
                                this._vimage.style.height = t + "px",
                                this._vimage.style.width = e + "px",
                                this._vimage.style.position = "absolute",
                                this._vimage.style.top = "0px",
                                this._vimage.style.left = "0px",
                                this._aspectW = this._aspectH = 1,
                                this._container = this.createVMLNode("group"),
                                this._container.style.width = e,
                                this._container.style.height = t,
                                this._container.style.position = "absolute",
                                this._container.style.top = "0px",
                                this._container.style.left = "0px",
                                this._container.setAttribute("coordsize", e - 1 + "," + (t - 1)),
                                this._container.appendChild(this._vimage),
                                this._rootObj.appendChild(this._container),
                                this._rootObj.style.position = "relative",
                                this._rootObj.style.width = e + "px",
                                this._rootObj.style.height = t + "px",
                                this._rootObj.setAttribute("id", this._img.getAttribute("id")),
                                this._rootObj.className = this._img.className,
                                this._eventObj = this._rootObj;
                            for (var n; n = this._onLoadDelegate.shift();) this._handleRotation(n, !0)
                        }: function() {
                            this._rootObj.setAttribute("id", this._img.getAttribute("id")),
                                this._rootObj.className = this._img.className,
                                this._imgWidth = this._img.naturalWidth,
                                this._imgHeight = this._img.naturalHeight;
                            var e = Math.sqrt(this._imgHeight * this._imgHeight + this._imgWidth * this._imgWidth);
                            this._width = 3 * e,
                                this._height = 3 * e,
                                this._aspectW = this._img.offsetWidth / this._img.naturalWidth,
                                this._aspectH = this._img.offsetHeight / this._img.naturalHeight,
                                this._img.parentNode.removeChild(this._img),
                                this._canvas = document.createElement("canvas"),
                                this._canvas.setAttribute("width", this._width),
                                this._canvas.style.position = "relative",
                                this._canvas.style.left = -this._img.height * this._aspectW + "px",
                                this._canvas.style.top = -this._img.width * this._aspectH + "px",
                                this._canvas.Wilq32 = this._rootObj.Wilq32,
                                this._rootObj.appendChild(this._canvas),
                                this._rootObj.style.width = this._img.width * this._aspectW + "px",
                                this._rootObj.style.height = this._img.height * this._aspectH + "px",
                                this._eventObj = this._canvas,
                                this._cnv = this._canvas.getContext("2d");
                            for (var t; t = this._onLoadDelegate.shift();) this._handleRotation(t, !0)
                        }
                } (),
                _animateStart: function() {
                    this._timer && clearTimeout(this._timer),
                        this._animateStartTime = +new Date,
                        this._animateStartAngle = this._angle,
                        this._animate()
                },
                _animate: function() {
                    var e = +new Date,
                        t = e - this._animateStartTime > this._parameters.duration;
                    if (t && !this._parameters.animatedGif) clearTimeout(this._timer);
                    else {
                        if (this._canvas || this._vimage || this._img) {
                            var n = this._parameters.easing(0, e - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration);
                            this._rotate(~~ (10 * n) / 10)
                        }
                        this._parameters.step && this._parameters.step(this._angle);
                        var i = this;
                        this._timer = setTimeout(function() {
                                i._animate.call(i)
                            },
                            10)
                    }
                    this._parameters.callback && t && (this._angle = this._parameters.animateTo, this._rotate(this._angle), this._parameters.callback.call(this._rootObj))
                },
                _rotate: function() {
                    var e = Math.PI / 180;
                    return IE ?
                        function(e) {
                            this._angle = e,
                                this._container.style.rotation = e % 360 + "deg",
                                this._vimage.style.top = -(this._rotationCenterY - this._imgHeight / 2) + "px",
                                this._vimage.style.left = -(this._rotationCenterX - this._imgWidth / 2) + "px",
                                this._container.style.top = this._rotationCenterY - this._imgHeight / 2 + "px",
                                this._container.style.left = this._rotationCenterX - this._imgWidth / 2 + "px"
                        }: supportedCSS ?
                            function(e) {
                                this._angle = e,
                                    this._img.style[supportedCSS] = "rotate(" + e % 360 + "deg)",
                                    this._img.style[supportedCSSOrigin] = this._parameters.center.join(" ")
                            }: function(t) {
                                this._angle = t,
                                    t = t % 360 * e,
                                    this._canvas.width = this._width,
                                    this._canvas.height = this._height,
                                    this._cnv.translate(this._imgWidth * this._aspectW, this._imgHeight * this._aspectH),
                                    this._cnv.translate(this._rotationCenterX, this._rotationCenterY),
                                    this._cnv.rotate(t),
                                    this._cnv.translate( - this._rotationCenterX, -this._rotationCenterY),
                                    this._cnv.scale(this._aspectW, this._aspectH),
                                    this._cnv.drawImage(this._img, 0, 0)
                            }
                } ()
            },
        IE && (Wilq32.PhotoEffect.prototype.createVMLNode = function() {
            document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
            try {
                return ! document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                    function(e) {
                        return document.createElement("<rvml:" + e + ' class="rvml">')
                    }
            } catch(e) {
                return function(e) {
                    return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                }
            }
        } ())
    } (jQuery),
    $.fn.textWidth = function() {
        return $.fn.textWidth.fakeEl || ($.fn.textWidth.fakeEl = $("<span>").hide().appendTo(document.body)),
            $.fn.textWidth.fakeEl.text(this.val() || this.text()).css("font", this.css("font")),
            $.fn.textWidth.fakeEl.width()
    },
    function(e, t, n) {
        var i = function() {};
        e[t] = i
    } (this, "phoenix"),
    function(e, t, n, i) {
        var r = "beforeInit",
            o = "afterInit",
            a = function(e, t, i) {
                var i = i || {};
                if (e.superClass && e.superClass.defConfig && (e.defConfig = n.extend({},
                        e.superClass.defConfig, e.defConfig)), i = t.defConfig = n.extend({},
                        e.defConfig, i), i.expands && n.extend(t, i.expands), e.superClass && e.superClass.call(t, i), n.isFunction(e.prototype.init)) {
                    var a = t.constructor === e;
                    if (a && n.isFunction(i[r]) && i[r].call(t, i), e.prototype.init.call(t, i), a && n.isFunction(i[o]) && i[o].call(t, i), a) for (var s = 0,
                                                                                                                                                         l = t._inits.length; s < l; s++) t._inits[s].call(t, t.defConfig)
                }
            },
            s = function(e, t) {
                var i = function(e) {
                    var t = this;
                    t._inits = [],
                        a(i, t, e)
                };
                if (arguments.length < 2) i.prototype = e;
                else {
                    var r = function() {};
                    r.prototype = t.prototype,
                        i.prototype = new r,
                        n.extend(i.prototype, e),
                        i.superClass = t
                }
                return i.prototype.constructor = i,
                    i
            };
        e[t] = s
    } (phoenix, "Class", jQuery),
    function(e, t, n) {
        var i = function() {
                this._isStop = !0
            },
            r = {
                init: function(e) {
                    this._events = {}
                },
                addEvent: function(e, t) {
                    if (!t || "[object Function]" !== Object.prototype.toString.call(t)) throw "Event.addEvent第二个参数必须是函数";
                    var n = this,
                        i = n._events;
                    i[e] = i[e] || [],
                        i[e].push(t)
                },
                removeEvent: function(e, t) {
                    var n = this,
                        i = n._events;
                    if (i[e]) {
                        if (!t) return void delete i[e];
                        for (var r = i[e], o = r.length; o;) o--,
                        r[o] === t && r.splice(o, 1);
                        r.length || delete i[e]
                    }
                },
                fireEvent: function(e) {
                    var t = this,
                        n = t._events;
                    if (n[e]) {
                        var r = n[e];
                        if (r._isStop) return void delete r._isStop;
                        for (var o = 0,
                                 a = r.length,
                                 s = {
                                     type: e,
                                     data: t,
                                     stopEvent: i
                                 },
                                 l = [s].concat(Array.prototype.slice.call(arguments, 1)), o = 0; o < a; o++) if (s._isStop || r[o].apply(t, l) === !1) return void(s._isStop = !1)
                    }
                },
                stopEvent: function(e) {
                    var t = this,
                        n = t._events;
                    n[e] && (n[e]._isStop = !0)
                }
            },
            o = e.Class(r);
        e[t] = o
    } (phoenix, "Event"),
    function(e, t, n, i) {
        var r = function() {};
        r.win = n(window),
            r.doc = n(document),
            r.isIE = !!document.all,
            r.isIE6 = !(!window.ActiveXObject || 6 != navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)[1]),
            r.toViewCenter = function(e) {
                r.toViewCenter.fn(e),
                    r.win.bind("resize",
                        function() {
                            r.toViewCenter.fn(e)
                        })
            },
            r.toViewCenter.fn = function(e) {
                var e = n(e),
                    t = e.width(),
                    i = e.height(),
                    o = r.win.width(),
                    a = r.win.height(),
                    s = r.isIE6 ? r.win.scrollLeft() : 0,
                    l = r.isIE6 ? r.win.scrollTop() : 0;
                e.css({
                    left: o / 2 - t / 2 + s,
                    top: a / 2 - i / 2 + l
                })
            },
            r.clearSelection = function() {
                if (document.selection && document.selection.empty) document.selection.empty();
                else if (window.getSelection) {
                    var e = window.getSelection();
                    e.removeAllRanges()
                }
            },
            r.clearSelection = function() {
                if (document.selection && document.selection.empty) document.selection.empty();
                else if (window.getSelection) {
                    var e = window.getSelection();
                    e.removeAllRanges()
                }
            },
            r.startFixed = function(t, i) {
                var o, t = n(t),
                    i = i || 500,
                    a = (parseInt(t.css("top")), r.win.scrollTop()),
                    s = a,
                    l = (parseInt(t.css("left")), r.win.scrollLeft()),
                    c = l;
                return o = function() {
                    var e = t.height(),
                        n = t.width(),
                        i = r.win.width(),
                        o = r.win.height();
                    s = r.win.scrollTop(),
                        c = r.win.scrollLeft(),
                        t.stop(),
                        t.animate({
                                top: o / 2 - e / 2 + s
                            },
                            50),
                        a = s,
                        t.animate({
                                left: i / 2 - n / 2 + c
                            },
                            50),
                        l = c
                },
                    new e.Timer({
                        time: i,
                        fn: o
                    })
            },
            r.getByteLen = function(e) {
                return e.replace(/[^\x00-\xff]/g, "xx").length
            },
            r.execu = function(e) {
                var t = document.createElement("script");
                t.type = "text/javascript",
                    t.text = e,
                    document.getElementsByTagName("head")[0].appendChild(t),
                    document.head.removeChild(document.head.lastChild)
            },
            r.getParam = function(e) {
                var t = new RegExp("(^|\\?|&)" + e + "=([^&]*)(\\s|&|$)", "i");
                return t.test(location.href) ? unescape(RegExp.$2.replace(/\+/g, " ")) : null
            },
            r.template = function(e, t) {
                var n, i, r = t;
                for (n in r) r.hasOwnProperty(n) && (i = RegExp("<#=" + n + "#>", "g"), e = e.replace(i, r[n]));
                return e
            },
            r.add = function(e, t) {
                var n, i, r, o = this;
                try {
                    n = e.toString().split(".")[1].length
                } catch(a) {
                    n = 0
                }
                try {
                    i = t.toString().split(".")[1].length
                } catch(a) {
                    i = 0
                }
                return r = Math.pow(10, Math.max(n, i)),
                (o.mul(e, r) + o.mul(t, r)) / r
            },
            r.findTokenMark = function() {
                return "Im_token"
            },
            r.execus = function(e) {
                var t = document.createElement("script");
                t.type = "text/javascript",
                    t.src = e,
                    document.getElementsByTagName("head")[0].appendChild(t)
            },
            r.sub = function(e, t) {
                var n, i, r, o = this;
                try {
                    n = e.toString().split(".")[1].length
                } catch(a) {
                    n = 0
                }
                try {
                    i = t.toString().split(".")[1].length
                } catch(a) {
                    i = 0
                }
                return r = Math.pow(10, Math.max(n, i)),
                (o.mul(e, r) - o.mul(t, r)) / r
            },
            r.mul = function(e, t) {
                var n = 0,
                    i = e.toString(),
                    r = t.toString();
                try {
                    n += i.split(".")[1].length
                } catch(o) {}
                try {
                    n += r.split(".")[1].length
                } catch(o) {}
                return Number(i.replace(".", "")) * Number(r.replace(".", "")) / Math.pow(10, n)
            },
            r.div = function(e, t) {
                var n, i, r = 0,
                    o = this,
                    a = 0;
                try {
                    r = e.toString().split(".")[1].length
                } catch(s) {}
                try {
                    a = t.toString().split(".")[1].length
                } catch(s) {}
                return n = Number(e.toString().replace(".", "")),
                    i = Number(t.toString().replace(".", "")),
                    o.mul(n / i, Math.pow(10, a - r))
            },
            r.formatMoney = function(e) {
                var e = Number(e),
                    t = /(-?\d+)(\d{3})/;
                for (e = Number.prototype.toFixed ? e.toFixed(2) : Math.round(100 * e) / 100, e = "" + e; t.test(e);) e = e.replace(t, "$1,$2");
                return e
            },
            e[t] = r
    } (phoenix, "util", jQuery),
    function(e, t, n, i, r) {
        var o = {
                currClass: "current",
                currPanelClass: "panel-current",
                par: document,
                triggers: ".triggers li",
                panels: ".panel",
                eventType: "mouseenter",
                isDefShow: !0,
                index: 0,
                isDefRandom: !1,
                delay: 150,
                autoPlay: 0,
                autoPlayIsHoverStop: !0,
                autoPlayStep: 1,
                controlStep: 1,
                controlCancelAutoPlayTime: 3e3
            },
            a = {
                mouseenter: "mouseleave",
                mouseover: "mouseout"
            },
            s = function(e) {
                var t = this;
                t.triggers.bind(e.eventType, t,
                    function(n) {
                        var i = this;
                        l(n),
                            t._delayTimer = setTimeout(function() {
                                    m.call(i, n)
                                },
                                e.delay)
                    }),
                a[e.eventType] && t.triggers.bind(a[e.eventType], t, l)
            },
            l = function(e) {
                clearTimeout(e.data._delayTimer)
            },
            c = function(e) {
                var t = this;
                t.autoPlayStart = u,
                    t.autoPlayStop = f,
                    t._autoPlayGetIndex = p,
                e.autoPlayIsHoverStop && (t.triggers.bind("mouseenter", t, f).bind("mouseleave", t, u), t.panels.bind("mouseenter", t, f).bind("mouseleave", t, u), "mouseenter" != e.eventType && t.triggers.bind(e.eventType, t, f))
            },
            u = function(e) {
                var t = e && e.data ? e.data: this,
                    n = !(!e || !e.relatedTarget) && e.relatedTarget; (!n || t.triggers.index(n) == -1 && t.panels.index(n) == -1) && d.call(t)
            },
            d = function() {
                var e = this,
                    t = e.defConfig;
                e._autoPlayTimer = setTimeout(function() {
                        h.call(e, e._autoPlayGetIndex()),
                            d.call(e)
                    },
                    t.autoPlay)
            },
            f = function(e) {
                var t = e && e.data ? e.data: this;
                clearTimeout(t._autoPlayTimer)
            },
            p = function() {
                var e = this,
                    t = e.length,
                    n = t - 1,
                    i = e.index + e.defConfig.autoPlayStep;
                return i = i > n ? 0 : i,
                    i = i < 0 ? n: i,
                    e._index = i
            },
            h = function(e) {
                var t = this,
                    n = t.index;
                e === n && n != r || (t.index = n === r ? e: n, t._index = e, t.fireEvent("beforeSwitch", t._index), t.fireEvent("onSwitch", t._index), t.fireEvent("afterSwitch", t._index))
            },
            m = function(e) {
                var t = e.data,
                    n = t.triggers.index(this);
                h.call(t, t._index = n < 0 ? 0 : n)
            },
            g = function(e, t) {
                var n = this;
                return n.index = n.getTriggerIndex()
            },
            v = function(e, t) {
                this.show(t, this.index)
            },
            y = {
                init: function(e) {
                    var t = this;
                    t.par = i(e.par),
                        t.triggers = i(e.triggers, t.par),
                        t.panels = i(e.panels, t.par),
                        t.length = Math.max(t.triggers.length, t.panels.length),
                        t._cache = {
                            triggers: {},
                            panels: {}
                        },
                    e.isDefShow && t._inits.push(function(e) {
                        var t = this,
                            n = e.isDefRandom ? parseInt(Math.random() * t.length) : e.index,
                            i = e.currClass,
                            r = e.currPanelClass;
                        t.getTrigger(n).addClass(i),
                            t.getPanel(n).addClass(r),
                            h.call(t, n)
                    }),
                    e.autoPlay && t.length > 1 && (c.call(t, e), t._inits.push(function() {
                        t.autoPlayStart()
                    })),
                        e.delay || a[e.eventType] ? s.call(t, e) : t.triggers.bind(e.eventType, t, _triggersHander),
                        t.addEvent("onSwitch", v),
                        t.addEvent("afterSwitch", g)
                },
                controlGetAdjustIndex: function(e) {
                    var t = this,
                        n = t.length,
                        i = n - 1;
                    return e = e > i ? 0 : e,
                        e = e < 0 ? i: e
                },
                controlTo: function(e) {
                    var t = this,
                        n = (t.length, t.defConfig);
                    n.autoPlay && n.controlCancelAutoPlayTime && (t.autoPlayStop(), clearTimeout(t._controlCancelAutoPlayTimer), t._controlCancelAutoPlayTimer = setTimeout(function() {
                            t.autoPlayStart()
                        },
                        n.controlCancelAutoPlayTime)),
                        h.call(t, t.controlGetAdjustIndex(e))
                },
                controlPre: function() {
                    var e = this;
                    e.controlTo(e.index + Math.abs(e.defConfig.controlStep) * -1)
                },
                controlNext: function() {
                    var e = this;
                    e.controlTo(e.index + Math.abs(e.defConfig.controlStep))
                },
                show: function(e) {
                    var t = this,
                        n = t.defConfig.currClass,
                        i = t.defConfig.currPanelClass,
                        r = t.getTriggerIndex(),
                        o = t.getPanelIndex();
                    t.getTrigger(t.index).removeClass(n),
                        t.getTrigger(r).addClass(n),
                        t.getPanel(t.index).removeClass(i),
                        t.getPanel(o).addClass(i)
                },
                getTrigger: function(e) {
                    var t = this,
                        n = t._cache;
                    return n.triggers[e] || (n.triggers[e] = t.triggers.eq(e))
                },
                getPanel: function(e) {
                    var t = this,
                        n = t._cache;
                    return n.panels[e] || (n.panels[e] = t.panels.eq(e))
                },
                getTriggerIndex: function(e) {
                    return this._index
                },
                getPanelIndex: function(e) {
                    return this._index
                }
            },
            x = e.Class(y, n);
        x.defConfig = o,
            e[t] = x
    } (phoenix, "Tab", phoenix.Event, jQuery),
    function(e, t, n, i, r) {
        var o = {
                isDefShow: !1,
                hoverDelayOut: 0,
                hoverIsBindPanels: !1
            },
            a = function(e) {
                var t = e.data,
                    n = t.defConfig;
                clearTimeout(t._hoverDelayTimer),
                    t._hoverDelayTimer = setTimeout(function() {
                            t.hideHander(e)
                        },
                        n.hoverDelayOut)
            },
            s = function(e) {
                var t = e.data;
                clearTimeout(t._hoverDelayTimer)
            },
            l = {
                init: function(e) {
                    var t = this,
                        n = e.hoverDelayOut ? a: t.hideHander;
                    t.triggers.bind("mouseleave", t, n),
                    e.hoverIsBindPanels && t.panels.bind("mouseleave", t, n),
                    e.hoverDelayOut && (t.triggers.bind("mouseenter", t, s), e.hoverIsBindPanels && t.panels.bind("mouseenter", t, s))
                },
                hideHander: function(e) {
                    var t = e.data,
                        n = e.relatedTarget,
                        r = t.defConfig;
                    if (t.triggers.index(n) == -1 && t.panels.index(n) == -1) {
                        try {
                            if (r.hoverIsBindPanels && (i.contains(t.getTrigger(t.index).get(0), n) || i.contains(t.getPanel(t.index).get(0), n))) return
                        } catch(e) {}
                        t.hide()
                    }
                },
                hide: function() {
                    var e = this,
                        t = e.defConfig.currClass,
                        n = e.defConfig.currPanelClass;
                    e.getTrigger(e.index).removeClass(t),
                        e.getPanel(e.index).removeClass(n),
                        e.index = -1
                }
            },
            c = e.Class(l, n);
        c.defConfig = o,
            e[t] = c
    } (phoenix, "Hover", phoenix.Tab, jQuery),
    function(e, t, n, i, r) {
        var o = {
                cls: "ui-simulation-select",
                isInput: !1,
                isNum: !1,
                isSelectList: !1,
                realDom: "",
                tpl: '<div class="choose-model"><div class="choose-list" style="display:none;"><#=loopItems#></div><span class="info"><input data-realvalue="<#=value#>" class="choose-input" disabled="disabled" type="text" value="<#=text#>" /></span><i class="icon-chevron-down"></i></div>',
                numTpl: '<div class="choose-model"><i class="icon-minus no_selection num-mins"></i><div class="choose-list" style="display:none;"><#=loopItems#></div><span class="info"><input data-realvalue="<#=value#>" class="choose-input" disabled="disabled" type="text" value="<#=text#>" /></span><i class="icon-plus no_selection num-plus"></i></div>',
                selectTpl: '<div class="choose-model select-list"><div class="choose-list"><#=loopItems#></div><span class="info" style="display:none"><input data-realvalue="<#=value#>" class="choose-input" disabled="disabled" type="text" value="<#=text#>"  /></span></div>',
                itemTpl: '<a data-value="<#=value#>" href="javascript:void(0);"><#=text#></a>'
            },
            a = {
                init: function(e) {
                    var t = this;
                    t.realDom = i(e.realDom),
                        t.realDom.hide(),
                        t.dom = null,
                        t.listDom = null,
                        t.buildSelect()
                },
                bindEvent: function() {
                    var e = this;
                    i(document).mousedown(function(t) {
                        var n = t.target;
                        i.contains(e.dom.get(0), n) || e.getListDom().hide()
                    })
                },
                defaultBind: function(e) {
                    var t = this;
                    e.click(function(e) {
                        var n = e.target;
                        n.getAttribute("data-value") && t.setValue(n.getAttribute("data-value")),
                            t.getListDom().toggle()
                    })
                },
                selectBind: function(e) {
                    var t = this;
                    e.click(function(e) {
                        var n = e.target;
                        n.getAttribute("data-value") && (i(n).addClass("current").siblings().removeClass("current"), t.setValue(n.getAttribute("data-value")))
                    })
                },
                numBindEvent: function(t) {
                    var n = this;
                    t.on("click", ".num-mins",
                        function(t) {
                            n.setValue(Number(n.getValue()) - 1),
                                t.preventDefault(),
                                e.util.clearSelection()
                        }),
                        t.on("click", ".num-plus",
                            function(t) {
                                n.setValue(Number(n.getValue()) + 1),
                                    t.preventDefault(),
                                    e.util.clearSelection()
                            }),
                        t.click(function(e) {
                            var t = e.target;
                            t.getAttribute("data-value") && n.setValue(t.getAttribute("data-value")),
                            (i(t).hasClass("choose-input") || t.getAttribute("data-value")) && n.getListDom().toggle()
                        })
                },
                buildSelect: function() {
                    for (var e = this,
                             t = "",
                             n = e.defConfig,
                             r = n.tpl,
                             o = n.numTpl,
                             a = n.selectTpl,
                             s = n.itemTpl,
                             l = e.getRealDom().options, c = l.length, u = 0, d = [], f = "", p = ""; u < c; u++) d[u] = s.replace(/<#=value#>/g, l[u].value).replace(/<#=text#>/g, l[u].text),
                    u == e.getRealDom().selectedIndex && (f = l[u].value, p = l[u].text);
                    t = n.isNum ? o: n.isSelectList ? a: r,
                        r = t.replace(/<#=text#>/g, p).replace(/<#=loopItems#>/g, d.join("")),
                        e.dom = i(r),
                        e.dom.addClass(n.cls),
                        e.dom.insertBefore(e.getRealDom()),
                        n.isNum ? (e.numBindEvent(e.dom), e.getInput().removeAttr("disabled"), e.inputEvent(), e.bindEvent()) : n.isInput ? (e.defaultBind(e.dom), e.getInput().removeAttr("disabled"), e.inputEvent(), e.bindEvent()) : n.isSelectList ? (e.selectBind(e.dom), e.dom.find('.choose-list a[data-value="' + f + '"]').addClass("current")) : (e.getInput().removeAttr("disabled").attr("readonly", "readonly"), e.bindEvent(), e.defaultBind(e.dom)),
                        e.setValue(f)
                },
                replaceRealDomEl: function(e) {
                    var t = this,
                        n = i(t.getRealDom());
                    n.html(e)
                },
                update: function() {
                    var e = this;
                    e.reset(),
                        e.buildSelect()
                },
                getInput: function() {
                    var e = this;
                    return e.input || (e.input = e.dom.find(".choose-input"))
                },
                inputEvent: function() {},
                getListDom: function() {
                    var e = this;
                    return e.listDom || (e.listDom = e.dom.find(".choose-list"))
                },
                getRealDom: function() {
                    return this.realDom[0]
                },
                setValue: function(e) {
                    for (var t = this,
                             n = t.getRealDom(), i = (n.selectedIndex, n.options), r = i.length, o = 0, a = ""; o < r; o++) e == i[o].value ? (i[o].selected = !0, a = i[o].text) : i[o].selected = !1;
                    t.getInput().attr("data-realvalue", e),
                        a = "" == a ? e: a,
                        t.getInput().val(a),
                        t.fireEvent("change", e, a)
                },
                getValue: function() {
                    var e = this,
                        t = e.getRealDom(),
                        n = t.selectedIndex;
                    return e.defConfig.isInput || e.defConfig.isNum ? e.getInput().attr("data-realvalue") : t.options[n] ? t.options[n].value: r
                },
                getText: function() {
                    var e = this.getRealDom(),
                        t = e.selectedIndex;
                    return e.options[t].text
                },
                reset: function() {
                    var e = this;
                    e.dom.remove(),
                        e.dom = null,
                        e.listDom = null
                        // e.input = null,
                },
                show: function() {
                    this.dom.show()
                },
                hide: function() {
                    this.dom.hide()
                }
            },
            s = e.Class(a, n);
        s.defConfig = o,
            e[t] = s
    } (phoenix, "Select", phoenix.Event, jQuery),
    function(e, t, n, i) {
        var r = {
                startTime: "2013-1-1,00:00:00",
                endTime: "2014-1-1,00:00:00",
                frequency: 1e3,
                finishFun: null,
                isRedress: !0,
                redressTime: 20,
                redressUrl: "/newgame_play.html?flag=getNowTime",
                isLoop: !1,
                showDom: "#time"
            },
            o = phoenix.util.isIE;
        countNum = 0,
            fixedEvents = [];
        var a = {
                init: function() {
                    var e = this;
                    e.startTime = new Date(e.defConfig.startTime),
                        e.endTime = new Date(e.defConfig.endTime),
                        e.frequency = e.defConfig.frequency,
                        e.timeload = null
                },
                getStartTime: function() {
                    return this.startTime
                },
                setStartTime: function(e) {
                    this.startTime = e
                },
                getEndTime: function() {
                    return this.endTime
                },
                setEndTime: function(e) {
                    this.endTime = e
                },
                getFrequency: function() {
                    return this.frequency
                },
                setFrequency: function(e) {
                    this.frequency = e
                },
                getRedressUrl: function() {
                    return this.defConfig.redressUrl
                },
                setRedressUrl: function(e) {
                    this.defConfig.redressUrl = e
                },
                getRedressTime: function() {
                    return this.defConfig.redressTime
                },
                setRedressTime: function(e) {
                    this.defConfig.redressTime = e
                },
                joinEvents: function(e, t) {
                    fixedEvents.push([e, t])
                },
                _countFun: function(e) {
                    var t, n = this,
                        i = {},
                        r = null,
                        a = n.getStartTime(),
                        s = n.getEndTime();
                    this.defConfig.ruleTime;
                    this.timeFun = setInterval(function() {
                            if (t = r || parseInt((s - a) / 1e3), null == r && (r = t), countNum++, i.allSecond = t, i.w = parseInt(t / 3600 / 24 / 7), i.d = parseInt(t / 3600 / 24), i.h = parseInt(t / 3600 % 24), i.m = parseInt(t / 60 % 60), i.s = 0 == r ? r: parseInt(t % 60), n.doFixedEvents(countNum), n._showTime(i), n.defConfig.isRedress && countNum % n.getRedressTime() == 0 && r > n.getRedressTime() && n.redRessTime(), 0 == r) return n.timeload && n.timeload.abort(),
                                n._endCount(),
                                void n.fireEvent("afterTimeFinish");
                            /*var e = o ? document.getElementById("countdownSoundForIE8") : document.getElementById("countdownSound");
                            "on" == $.cookie("knell") && $("#toogle_bell").hasClass("bell_on") ? 0 == i.h && 0 == i.m && i.s < 6 && e.play() : (e.pause(), e.currentTime = 0),*/
                            0 == i.h && 0 == i.m && 0 == i.s /*&& (e.pause(), e.currentTime = 0)*/,
                                r = null != r ? r - 1 : t - 1
                        },
                        n.getFrequency())
                },
                redRessTime: function() {
                    var t = this,
                        n = (new Date).getTime();
                    t.timeload && t.timeload.abort(),
                        t.timeload = $.ajax({
                            url: t.getRedressUrl(),
                            data: {
                                curmid: e.Games.getCurrentGame().getCurrentMid()
                            },
                            cache: !1,
                            type: "GET",
                            dataType: "json"
                        }).done(function(e) {
                            1 == Number(e.isSuccess) && (t.stopCount(), t.setStartTime(new Date(e.nowTime).getTime() + ((new Date).getTime() - n)), t.continueCount(), t.fireEvent("afterSuccessRedRessTime", e))
                        }).fail(function() {}).always(function() {
                            t.timeload = null
                        })
                },
                doFixedEvents: function(e) {
                    var t = this,
                        n = 0;
                    if (0 != fixedEvents.length) for (; n < fixedEvents.length; n++) e == fixedEvents[n][0] && (fixedEvents[n][1].call(t), fixedEvents.splice(n, 1))
                },
                _showTime: function(e) {
                    var t = $(this.defConfig.showDom),
                        n = t.find(".week"),
                        i = t.find(".day"),
                        r = t.find(".hour"),
                        o = t.find(".min"),
                        a = t.find(".sec");
                    n.text(e.w),
                        i.text(e.d),
                        r.text(e.h),
                        o.text(e.m),
                        a.text(e.s)
                },
                checkNum: function(e) {
                    return e < 10 ? "0" + e: e
                },
                _endCount: function() {
                    this.stopCount(),
                        countNum = 0,
                    this.defConfig.finishFun && this.defConfig.finishFun.call(this)
                },
                stopCount: function() {
                    clearInterval(this.timeFun),
                        this.timeFun = null
                },
                continueCount: function() {
                    this.defConfig.serverTimeURl ? this._serverTime() : this._countFun()
                }
            },
            s = e.Class(a, n);
        s.defConfig = r,
            e[t] = s
    } (phoenix, "CountDown", phoenix.Event),
    function(e, t, n, i, r) {
        var o = {
                time: 500,
                isNew: !1,
                fn: function() {}
            },
            a = [],
            s = {
                init: function(e) {
                    var t = this;
                    a.push(t),
                        t.time = e.time,
                        t.addEvent("exelist", e.fn),
                        t.execute()
                },
                add: function(e) {
                    this.addEvent("exelist", e)
                },
                remove: function(e) {
                    this.removeEvent("exelist", e)
                },
                execute: function() {
                    var e = this;
                    e.fireEvent("exelist"),
                        e._timer = setTimeout(function() {
                                e.execute()
                            },
                            e.time)
                },
                stop: function() {
                    var e = this;
                    e.remove(),
                        clearTimeout(e._timer)
                }
            },
            l = e.Class(s, n);
        l.defConfig = o,
            e[t] = function(e) {
                var t = a.length,
                    n = 0;
                if (e.isNew) return new l(e);
                if (e && e.time && e.fn) {
                    for (; n < t; n++) if (a[n].time == e.time) return a[n].add(e.fn),
                        a[n];
                    return new l(e)
                }
            }
    } (phoenix, "Timer", phoenix.Event, jQuery),
    function(e, t, n, i, r) {
        var o, a = {
                target: "body",
                opacity: .5,
                "background-color": "#333",
                "z-index": 600,
                effectShow: function() {
                    this.dom.show()
                },
                effectHide: function() {
                    this.dom.hide()
                }
            },
            s = (i("html"), i(document)),
            l = {
                init: function(e) {
                    var t = this;
                    t.dom = i('<div class="j-ui-mask" style="display:none;position:absolute;left:0;top:0;"></div>').appendTo("body").css({
                        opacity: e.opacity,
                        "background-color": e["background-color"],
                        "z-index": e["z-index"]
                    }),
                        t.effectShow = e.effectShow,
                        t.effectHide = e.effectHide
                },
                show: function() {
                    var e = this,
                        t = s.width(),
                        n = s.height();
                    e.dom.css({
                        width: t,
                        height: n
                    }),
                        this.effectShow()
                },
                hide: function() {
                    this.effectHide(),
                        this.fireEvent("afterHide")
                },
                css: function(e) {
                    this.dom.css(e)
                }
            },
            c = e.Class(l, n);
        c.defConfig = a,
            e.util[t] = function() {
                return e[t].getInstance()
            },
            e.util[t].getInstance = function() {
                return o || new c(a)
            }
    } (phoenix, "Mask", phoenix.Event, jQuery),
    function(e, t, n, i, r) {
        var o, a = e.util,
            s = {
                confirmButtonText: "confirm",
                cancelButtonText: "cancel",
                closeButtonText: "closeTip",
                cls: "",
                contentHtml: "",
                afterSetContentDelay: 0,
                effectShow: function() {
                    var e = this;
                    a.toViewCenter(e.dom),
                        this.dom.show()
                },
                effectHide: function() {
                    this.dom.hide()
                },
                zIndex: 700,
                isFixed: !0
            },
            l = (i(document), {
                init: function(e) {
                    var t = this,
                        n = e.isFixed ? "fixed": "absolute";
                    n = a.isIE6 ? "absolute": n,
                        t.dom = i('<div class="j-ui-miniwindow ' + e.cls + '" style="z-index:' + e.zIndex + ";position:" + n + ';display:none;"><div class="hd"><i class="close closeBtn"></i><span class="title">提示</span></div><div class="bd_box"><i class="ico-waring" style="display:none"></i><div class="bd"></div></div><a style="display:none" href="javascript:void(0);" class="btn confirm"><span>确 认</span><b class="btn-inner"></b></a><a style="display:none" href="javascript:void(0);" class="btn cancel"><span>取 消</span><b class="btn-inner"></b></a><a href="javascript:void(0);" style="display:none" class="btn closeTip"><span>关 闭</span><b class="btn-inner"></b></a></div>').appendTo("body"),
                        t.effectShow = e.effectShow,
                        t.effectHide = e.effectHide,
                        t.dom.on("click", ".closeBtn",
                            function() {
                                t.doNormalClose(),
                                    t.hide()
                            }),
                        t.dom.find("." + t.defConfig.confirmButtonText).bind("click",
                            function() {
                                t.doConfirm()
                            }),
                        t.dom.find("." + t.defConfig.cancelButtonText).bind("click",
                            function() {
                                t.doCancel()
                            }),
                        t.dom.find("." + t.defConfig.closeButtonText).bind("click",
                            function() {
                                t.doClose()
                            })
                },
                reSetPosition: function() {
                    var e = this,
                        t = e.defConfig.isFixed ? "fixed": "absolute";
                    t = a.isIE6 ? "absolute": t,
                        e.dom.removeAttr("style"),
                        e.dom.css({
                            "z-index": e.defConfig.zIndex,
                            position: t,
                            display: "none"
                        })
                },
                doNormalClose: function() {},
                doConfirm: function() {},
                doCancel: function() {},
                doClose: function() {},
                getConfirmButtonDom: function() {
                    var e = this;
                    return e.getContainerDom().find("." + e.defConfig.confirmButtonText)
                },
                getCancelButtonDom: function() {
                    var e = this;
                    return e.getContainerDom().find("." + e.defConfig.cancelButtonText)
                },
                getCloseButtonDom: function() {
                    var e = this;
                    return e.getContainerDom().find("." + e.defConfig.closeButtonText)
                },
                setConfirmName: function(e) {
                    var t = this;
                    t.getConfirmButtonDom().html(e + '<b class="btn-inner"></b>')
                },
                setCancelName: function(e) {
                    var t = this;
                    t.getCancelButtonDom().html(e + '<b class="btn-inner"></b>')
                },
                setCloseName: function(e) {
                    var t = this;
                    t.getCloseButtonDom().html(e + '<b class="btn-inner"></b>')
                },
                showConfirmButton: function() {
                    var e = this;
                    e.getConfirmButtonDom().show()
                },
                showCancelButton: function() {
                    var e = this;
                    e.getCancelButtonDom().show()
                },
                showCloseButton: function() {
                    var e = this;
                    e.getCloseButtonDom().show()
                },
                hideConfirmButton: function() {
                    var e = this;
                    e.getConfirmButtonDom().hide()
                },
                hideCancelButton: function() {
                    var e = this;
                    e.getCancelButtonDom().hide()
                },
                hideCloseButton: function() {
                    var e = this;
                    e.getCloseButtonDom().hide()
                },
                showWaringIcon: function() {
                    var e = this;
                    e.getContainerDom().find(".ico-waring").show()
                },
                setTitle: function(e) {
                    this.getTitleDom().html(e)
                },
                setContent: function(e, t) {
                    var n = this,
                        i = n.defConfig,
                        r = 0;
                    n.getContentDom().html(e),
                        r = i.afterSetContentDelay ? i.afterSetContentDelay: r,
                        r = t ? t: r,
                        r > 0 ? setTimeout(function() {
                                n.fireEvent("afterSetContent")
                            },
                            r) : n.fireEvent("afterSetContent")
                },
                show: function() {
                    var e = this;
                    e.fireEvent("beforeShow"),
                        this.effectShow(),
                        e.fireEvent("afterShow"),
                    a.isIE6 && e.defConfig.isFixed && (e._IE6Fixed = a.startFixed(e.dom))
                },
                hide: function() {
                    var e = this;
                    e.effectHide(),
                        e.fireEvent("afterHide"),
                    a.isIE6 && e.defConfig.isFixed && e._IE6Fixed.stop()
                },
                getContainerDom: function() {
                    var e = this;
                    return e._containerDom || (e._containerDom = e.dom)
                },
                getCloseDom: function() {
                    var e = this;
                    return e._closeDom || (e._closeDom = e.dom.find(".close"))
                },
                getTitleDom: function() {
                    var e = this;
                    return e._titleDom || (e._titleDom = e.dom.find(".title"))
                },
                getContentDom: function() {
                    var e = this;
                    return e._ContentDom || (e._ContentDom = e.dom.find(".bd"))
                }
            }),
            c = e.Class(l, n);
        c.defConfig = s,
            e.util[t] = c,
            e.util[t].getInstance = function() {
                return o || new c(s)
            }
    } (phoenix, "MiniWindow", phoenix.Event, jQuery),
    function(e, t, n, i, r) {
        var o, a = {
                cls: "j-ui-tip-l",
                target: "body",
                text: "",
                effectShow: function() {
                    this.dom.show()
                },
                effectHide: function() {
                    this.dom.hide()
                }
            },
            s = "j-ui-tip",
            l = 500,
            c = {
                init: function(e) {
                    var t = this;
                    t.dom = i('<div class="' + s + " " + e.cls + '" style="display:none;position:absolute;left:0;top:0;z-index:' + l+++';"><i class="sj sj-t"></i><i class="sj sj-r"></i><i class="sj sj-b"></i><i class="sj sj-l"></i><span class="ui-tip-text">' + e.text + "</span></div>").appendTo(i("body")),
                        t.effectShow = e.effectShow,
                        t.effectHide = e.effectHide
                },
                getTextContainer: function() {
                    var e = this;
                    return e._textContainer || (e._textContainer = e.dom.find(".ui-tip-text"))
                },
                getDom: function() {
                    return this.dom
                },
                setText: function(e) {
                    var t = this;
                    t.getTextContainer().html(e)
                },
                show: function(e, t, n) {
                    var o = this,
                        a = i(n == r ? o.defConfig.target: n).offset();
                    o.dom.css({
                        left: a.left + e,
                        top: a.top + t
                    }),
                        o.effectShow()
                },
                hide: function() {
                    this.effectHide()
                },
                remove: function() {
                    this.getDom().remove()
                }
            },
            u = e.Class(c, n);
        u.defConfig = a,
            e[t] = u,
            e[t].getInstance = function() {
                return o || (o = new e[t]({
                        cls: "j-ui-tip-l j-ui-tip-info"
                    }))
            }
    } (phoenix, "Tip", phoenix.Event, jQuery);
var CryptoJS = CryptoJS ||
    function(e, t) {
        var n = {},
            i = n.lib = {},
            r = function() {},
            o = i.Base = {
                extend: function(e) {
                    r.prototype = this;
                    var t = new r;
                    return e && t.mixIn(e),
                    t.hasOwnProperty("init") || (t.init = function() {
                        t.$super.init.apply(this, arguments)
                    }),
                        t.init.prototype = t,
                        t.$super = this,
                        t
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments),
                        e
                },
                init: function() {},
                mixIn: function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            a = i.WordArray = o.extend({
                init: function(e, n) {
                    e = this.words = e || [],
                        this.sigBytes = n != t ? n: 4 * e.length
                },
                toString: function(e) {
                    return (e || l).stringify(this)
                },
                concat: function(e) {
                    var t = this.words,
                        n = e.words,
                        i = this.sigBytes;
                    if (e = e.sigBytes, this.clamp(), i % 4) for (var r = 0; r < e; r++) t[i + r >>> 2] |= (n[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 24 - 8 * ((i + r) % 4);
                    else if (65535 < n.length) for (r = 0; r < e; r += 4) t[i + r >>> 2] = n[r >>> 2];
                    else t.push.apply(t, n);
                    return this.sigBytes += e,
                        this
                },
                clamp: function() {
                    var t = this.words,
                        n = this.sigBytes;
                    t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4),
                        t.length = e.ceil(n / 4)
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e.words = this.words.slice(0),
                        e
                },
                random: function(t) {
                    for (var n = [], i = 0; i < t; i += 4) n.push(4294967296 * e.random() | 0);
                    return new a.init(n, t)
                }
            }),
            s = n.enc = {},
            l = s.Hex = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var n = [], i = 0; i < e; i++) {
                        var r = t[i >>> 2] >>> 24 - 8 * (i % 4) & 255;
                        n.push((r >>> 4).toString(16)),
                            n.push((15 & r).toString(16))
                    }
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length,
                             n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - 4 * (i % 8);
                    return new a.init(n, t / 2)
                }
            },
            c = s.Latin1 = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var n = [], i = 0; i < e; i++) n.push(String.fromCharCode(t[i >>> 2] >>> 24 - 8 * (i % 4) & 255));
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length,
                             n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - 8 * (i % 4);
                    return new a.init(n, t)
                }
            },
            u = s.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(c.stringify(e)))
                    } catch(t) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return c.parse(unescape(encodeURIComponent(e)))
                }
            },
            d = i.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new a.init,
                        this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = u.parse(e)),
                        this._data.concat(e),
                        this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var n = this._data,
                        i = n.words,
                        r = n.sigBytes,
                        o = this.blockSize,
                        s = r / (4 * o),
                        s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0);
                    if (t = s * o, r = e.min(4 * t, r), t) {
                        for (var l = 0; l < t; l += o) this._doProcessBlock(i, l);
                        l = i.splice(0, t),
                            n.sigBytes -= r
                    }
                    return new a.init(l, r)
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e._data = this._data.clone(),
                        e
                },
                _minBufferSize: 0
            });
        i.Hasher = d.extend({
            cfg: o.extend(),
            init: function(e) {
                this.cfg = this.cfg.extend(e),
                    this.reset()
            },
            reset: function() {
                d.reset.call(this),
                    this._doReset()
            },
            update: function(e) {
                return this._append(e),
                    this._process(),
                    this
            },
            finalize: function(e) {
                return e && this._append(e),
                    this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(e) {
                return function(t, n) {
                    return new e.init(n).finalize(t)
                }
            },
            _createHmacHelper: function(e) {
                return function(t, n) {
                    return new f.HMAC.init(e, n).finalize(t)
                }
            }
        });
        var f = n.algo = {};
        return n
    } (Math); !
    function() {
        var e = CryptoJS,
            t = e.lib.WordArray;
        e.enc.Base64 = {
            stringify: function(e) {
                var t = e.words,
                    n = e.sigBytes,
                    i = this._map;
                e.clamp(),
                    e = [];
                for (var r = 0; r < n; r += 3) for (var o = (t[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | t[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, a = 0; 4 > a && r + .75 * a < n; a++) e.push(i.charAt(o >>> 6 * (3 - a) & 63));
                if (t = i.charAt(64)) for (; e.length % 4;) e.push(t);
                return e.join("")
            },
            parse: function(e) {
                var n = e.length,
                    i = this._map,
                    r = i.charAt(64);
                r && (r = e.indexOf(r), -1 != r && (n = r));
                for (var r = [], o = 0, a = 0; a < n; a++) if (a % 4) {
                    var s = i.indexOf(e.charAt(a - 1)) << 2 * (a % 4),
                        l = i.indexOf(e.charAt(a)) >>> 6 - 2 * (a % 4);
                    r[o >>> 2] |= (s | l) << 24 - 8 * (o % 4),
                        o++
                }
                return t.create(r, o)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    } (),
    function(e) {
        function t(e, t, n, i, r, o, a) {
            return e = e + (t & n | ~t & i) + r + a,
            (e << o | e >>> 32 - o) + t
        }
        function n(e, t, n, i, r, o, a) {
            return e = e + (t & i | n & ~i) + r + a,
            (e << o | e >>> 32 - o) + t
        }
        function i(e, t, n, i, r, o, a) {
            return e = e + (t ^ n ^ i) + r + a,
            (e << o | e >>> 32 - o) + t
        }
        function r(e, t, n, i, r, o, a) {
            return e = e + (n ^ (t | ~i)) + r + a,
            (e << o | e >>> 32 - o) + t
        }
        for (var o = CryptoJS,
                 a = o.lib,
                 s = a.WordArray,
                 l = a.Hasher,
                 a = o.algo,
                 c = [], u = 0; 64 > u; u++) c[u] = 4294967296 * e.abs(e.sin(u + 1)) | 0;
        a = a.MD5 = l.extend({
            _doReset: function() {
                this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function(e, o) {
                for (var a = 0; 16 > a; a++) {
                    var s = o + a,
                        l = e[s];
                    e[s] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                }
                var a = this._hash.words,
                    s = e[o + 0],
                    l = e[o + 1],
                    u = e[o + 2],
                    d = e[o + 3],
                    f = e[o + 4],
                    p = e[o + 5],
                    h = e[o + 6],
                    m = e[o + 7],
                    g = e[o + 8],
                    v = e[o + 9],
                    y = e[o + 10],
                    x = e[o + 11],
                    b = e[o + 12],
                    k = e[o + 13],
                    w = e[o + 14],
                    C = e[o + 15],
                    _ = a[0],
                    S = a[1],
                    T = a[2],
                    j = a[3],
                    _ = t(_, S, T, j, s, 7, c[0]),
                    j = t(j, _, S, T, l, 12, c[1]),
                    T = t(T, j, _, S, u, 17, c[2]),
                    S = t(S, T, j, _, d, 22, c[3]),
                    _ = t(_, S, T, j, f, 7, c[4]),
                    j = t(j, _, S, T, p, 12, c[5]),
                    T = t(T, j, _, S, h, 17, c[6]),
                    S = t(S, T, j, _, m, 22, c[7]),
                    _ = t(_, S, T, j, g, 7, c[8]),
                    j = t(j, _, S, T, v, 12, c[9]),
                    T = t(T, j, _, S, y, 17, c[10]),
                    S = t(S, T, j, _, x, 22, c[11]),
                    _ = t(_, S, T, j, b, 7, c[12]),
                    j = t(j, _, S, T, k, 12, c[13]),
                    T = t(T, j, _, S, w, 17, c[14]),
                    S = t(S, T, j, _, C, 22, c[15]),
                    _ = n(_, S, T, j, l, 5, c[16]),
                    j = n(j, _, S, T, h, 9, c[17]),
                    T = n(T, j, _, S, x, 14, c[18]),
                    S = n(S, T, j, _, s, 20, c[19]),
                    _ = n(_, S, T, j, p, 5, c[20]),
                    j = n(j, _, S, T, y, 9, c[21]),
                    T = n(T, j, _, S, C, 14, c[22]),
                    S = n(S, T, j, _, f, 20, c[23]),
                    _ = n(_, S, T, j, v, 5, c[24]),
                    j = n(j, _, S, T, w, 9, c[25]),
                    T = n(T, j, _, S, d, 14, c[26]),
                    S = n(S, T, j, _, g, 20, c[27]),
                    _ = n(_, S, T, j, k, 5, c[28]),
                    j = n(j, _, S, T, u, 9, c[29]),
                    T = n(T, j, _, S, m, 14, c[30]),
                    S = n(S, T, j, _, b, 20, c[31]),
                    _ = i(_, S, T, j, p, 4, c[32]),
                    j = i(j, _, S, T, g, 11, c[33]),
                    T = i(T, j, _, S, x, 16, c[34]),
                    S = i(S, T, j, _, w, 23, c[35]),
                    _ = i(_, S, T, j, l, 4, c[36]),
                    j = i(j, _, S, T, f, 11, c[37]),
                    T = i(T, j, _, S, m, 16, c[38]),
                    S = i(S, T, j, _, y, 23, c[39]),
                    _ = i(_, S, T, j, k, 4, c[40]),
                    j = i(j, _, S, T, s, 11, c[41]),
                    T = i(T, j, _, S, d, 16, c[42]),
                    S = i(S, T, j, _, h, 23, c[43]),
                    _ = i(_, S, T, j, v, 4, c[44]),
                    j = i(j, _, S, T, b, 11, c[45]),
                    T = i(T, j, _, S, C, 16, c[46]),
                    S = i(S, T, j, _, u, 23, c[47]),
                    _ = r(_, S, T, j, s, 6, c[48]),
                    j = r(j, _, S, T, m, 10, c[49]),
                    T = r(T, j, _, S, w, 15, c[50]),
                    S = r(S, T, j, _, p, 21, c[51]),
                    _ = r(_, S, T, j, b, 6, c[52]),
                    j = r(j, _, S, T, d, 10, c[53]),
                    T = r(T, j, _, S, y, 15, c[54]),
                    S = r(S, T, j, _, l, 21, c[55]),
                    _ = r(_, S, T, j, g, 6, c[56]),
                    j = r(j, _, S, T, C, 10, c[57]),
                    T = r(T, j, _, S, h, 15, c[58]),
                    S = r(S, T, j, _, k, 21, c[59]),
                    _ = r(_, S, T, j, f, 6, c[60]),
                    j = r(j, _, S, T, x, 10, c[61]),
                    T = r(T, j, _, S, u, 15, c[62]),
                    S = r(S, T, j, _, v, 21, c[63]);
                a[0] = a[0] + _ | 0,
                    a[1] = a[1] + S | 0,
                    a[2] = a[2] + T | 0,
                    a[3] = a[3] + j | 0
            },
            _doFinalize: function() {
                var t = this._data,
                    n = t.words,
                    i = 8 * this._nDataBytes,
                    r = 8 * t.sigBytes;
                n[r >>> 5] |= 128 << 24 - r % 32;
                var o = e.floor(i / 4294967296);
                for (n[(r + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[(r + 64 >>> 9 << 4) + 14] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process(), t = this._hash, n = t.words, i = 0; 4 > i; i++) r = n[i],
                    n[i] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                return t
            },
            clone: function() {
                var e = l.clone.call(this);
                return e._hash = this._hash.clone(),
                    e
            }
        }),
            o.MD5 = l._createHelper(a),
            o.HmacMD5 = l._createHmacHelper(a)
    } (Math),
    function() {
        var e = CryptoJS,
            t = e.lib,
            n = t.Base,
            i = t.WordArray,
            t = e.algo,
            r = t.EvpKDF = n.extend({
                cfg: n.extend({
                    keySize: 4,
                    hasher: t.MD5,
                    iterations: 1
                }),
                init: function(e) {
                    this.cfg = this.cfg.extend(e)
                },
                compute: function(e, t) {
                    for (var n = this.cfg,
                             r = n.hasher.create(), o = i.create(), a = o.words, s = n.keySize, n = n.iterations; a.length < s;) {
                        l && r.update(l);
                        var l = r.update(e).finalize(t);
                        r.reset();
                        for (var c = 1; c < n; c++) l = r.finalize(l),
                            r.reset();
                        o.concat(l)
                    }
                    return o.sigBytes = 4 * s,
                        o
                }
            });
        e.EvpKDF = function(e, t, n) {
            return r.create(n).compute(e, t)
        }
    } (),
CryptoJS.lib.Cipher ||
function(e) {
    var t = CryptoJS,
        n = t.lib,
        i = n.Base,
        r = n.WordArray,
        o = n.BufferedBlockAlgorithm,
        a = t.enc.Base64,
        s = t.algo.EvpKDF,
        l = n.Cipher = o.extend({
            cfg: i.extend(),
            createEncryptor: function(e, t) {
                return this.create(this._ENC_XFORM_MODE, e, t)
            },
            createDecryptor: function(e, t) {
                return this.create(this._DEC_XFORM_MODE, e, t)
            },
            init: function(e, t, n) {
                this.cfg = this.cfg.extend(n),
                    this._xformMode = e,
                    this._key = t,
                    this.reset()
            },
            reset: function() {
                o.reset.call(this),
                    this._doReset()
            },
            process: function(e) {
                return this._append(e),
                    this._process()
            },
            finalize: function(e) {
                return e && this._append(e),
                    this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function(e) {
                return {
                    encrypt: function(t, n, i) {
                        return ("string" == typeof n ? h: p).encrypt(e, t, n, i)
                    },
                    decrypt: function(t, n, i) {
                        return ("string" == typeof n ? h: p).decrypt(e, t, n, i)
                    }
                }
            }
        });
    n.StreamCipher = l.extend({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    var c = t.mode = {},
        u = function(t, n, i) {
            var r = this._iv;
            r ? this._iv = e: r = this._prevBlock;
            for (var o = 0; o < i; o++) t[n + o] ^= r[o]
        },
        d = (n.BlockCipherMode = i.extend({
            createEncryptor: function(e, t) {
                return this.Encryptor.create(e, t)
            },
            createDecryptor: function(e, t) {
                return this.Decryptor.create(e, t)
            },
            init: function(e, t) {
                this._cipher = e,
                    this._iv = t
            }
        })).extend();
    d.Encryptor = d.extend({
        processBlock: function(e, t) {
            var n = this._cipher,
                i = n.blockSize;
            u.call(this, e, t, i),
                n.encryptBlock(e, t),
                this._prevBlock = e.slice(t, t + i)
        }
    }),
        d.Decryptor = d.extend({
            processBlock: function(e, t) {
                var n = this._cipher,
                    i = n.blockSize,
                    r = e.slice(t, t + i);
                n.decryptBlock(e, t),
                    u.call(this, e, t, i),
                    this._prevBlock = r
            }
        }),
        c = c.CBC = d,
        d = (t.pad = {}).Pkcs7 = {
            pad: function(e, t) {
                for (var n = 4 * t,
                         n = n - e.sigBytes % n,
                         i = n << 24 | n << 16 | n << 8 | n,
                         o = [], a = 0; a < n; a += 4) o.push(i);
                n = r.create(o, n),
                    e.concat(n)
            },
            unpad: function(e) {
                e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
            }
        },
        n.BlockCipher = l.extend({
            cfg: l.cfg.extend({
                mode: c,
                padding: d
            }),
            reset: function() {
                l.reset.call(this);
                var e = this.cfg,
                    t = e.iv,
                    e = e.mode;
                if (this._xformMode == this._ENC_XFORM_MODE) var n = e.createEncryptor;
                else n = e.createDecryptor,
                    this._minBufferSize = 1;
                this._mode = n.call(e, this, t && t.words)
            },
            _doProcessBlock: function(e, t) {
                this._mode.processBlock(e, t)
            },
            _doFinalize: function() {
                var e = this.cfg.padding;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                    e.pad(this._data, this.blockSize);
                    var t = this._process(!0)
                } else t = this._process(!0),
                    e.unpad(t);
                return t
            },
            blockSize: 4
        });
    var f = n.CipherParams = i.extend({
            init: function(e) {
                this.mixIn(e)
            },
            toString: function(e) {
                return (e || this.formatter).stringify(this)
            }
        }),
        c = (t.format = {}).OpenSSL = {
            stringify: function(e) {
                var t = e.ciphertext;
                return e = e.salt,
                    (e ? r.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(a)
            },
            parse: function(e) {
                e = a.parse(e);
                var t = e.words;
                if (1398893684 == t[0] && 1701076831 == t[1]) {
                    var n = r.create(t.slice(2, 4));
                    t.splice(0, 4),
                        e.sigBytes -= 16
                }
                return f.create({
                    ciphertext: e,
                    salt: n
                })
            }
        },
        p = n.SerializableCipher = i.extend({
            cfg: i.extend({
                format: c
            }),
            encrypt: function(e, t, n, i) {
                i = this.cfg.extend(i);
                var r = e.createEncryptor(n, i);
                return t = r.finalize(t),
                    r = r.cfg,
                    f.create({
                        ciphertext: t,
                        key: n,
                        iv: r.iv,
                        algorithm: e,
                        mode: r.mode,
                        padding: r.padding,
                        blockSize: e.blockSize,
                        formatter: i.format
                    })
            },
            decrypt: function(e, t, n, i) {
                return i = this.cfg.extend(i),
                    t = this._parse(t, i.format),
                    e.createDecryptor(n, i).finalize(t.ciphertext)
            },
            _parse: function(e, t) {
                return "string" == typeof e ? t.parse(e, this) : e
            }
        }),
        t = (t.kdf = {}).OpenSSL = {
            execute: function(e, t, n, i) {
                return i || (i = r.random(8)),
                    e = s.create({
                        keySize: t + n
                    }).compute(e, i),
                    n = r.create(e.words.slice(t), 4 * n),
                    e.sigBytes = 4 * t,
                    f.create({
                        key: e,
                        iv: n,
                        salt: i
                    })
            }
        },
        h = n.PasswordBasedCipher = p.extend({
            cfg: p.cfg.extend({
                kdf: t
            }),
            encrypt: function(e, t, n, i) {
                return i = this.cfg.extend(i),
                    n = i.kdf.execute(n, e.keySize, e.ivSize),
                    i.iv = n.iv,
                    e = p.encrypt.call(this, e, t, n.key, i),
                    e.mixIn(n),
                    e
            },
            decrypt: function(e, t, n, i) {
                return i = this.cfg.extend(i),
                    t = this._parse(t, i.format),
                    n = i.kdf.execute(n, e.keySize, e.ivSize, t.salt),
                    i.iv = n.iv,
                    p.decrypt.call(this, e, t, n.key, i)
            }
        })
} (),
    function() {
        for (var e = CryptoJS,
                 t = e.lib.BlockCipher,
                 n = e.algo,
                 i = [], r = [], o = [], a = [], s = [], l = [], c = [], u = [], d = [], f = [], p = [], h = 0; 256 > h; h++) p[h] = 128 > h ? h << 1 : h << 1 ^ 283;
        for (var m = 0,
                 g = 0,
                 h = 0; 256 > h; h++) {
            var v = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4,
                v = v >>> 8 ^ 255 & v ^ 99;
            i[m] = v,
                r[v] = m;
            var y = p[m],
                x = p[y],
                b = p[x],
                k = 257 * p[v] ^ 16843008 * v;
            o[m] = k << 24 | k >>> 8,
                a[m] = k << 16 | k >>> 16,
                s[m] = k << 8 | k >>> 24,
                l[m] = k,
                k = 16843009 * b ^ 65537 * x ^ 257 * y ^ 16843008 * m,
                c[v] = k << 24 | k >>> 8,
                u[v] = k << 16 | k >>> 16,
                d[v] = k << 8 | k >>> 24,
                f[v] = k,
                m ? (m = y ^ p[p[p[b ^ y]]], g ^= p[p[g]]) : m = g = 1
        }
        var w = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            n = n.AES = t.extend({
                _doReset: function() {
                    for (var e = this._key,
                             t = e.words,
                             n = e.sigBytes / 4,
                             e = 4 * ((this._nRounds = n + 6) + 1), r = this._keySchedule = [], o = 0; o < e; o++) if (o < n) r[o] = t[o];
                    else {
                        var a = r[o - 1];
                        o % n ? 6 < n && 4 == o % n && (a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a]) : (a = a << 8 | a >>> 24, a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a], a ^= w[o / n | 0] << 24),
                            r[o] = r[o - n] ^ a
                    }
                    for (t = this._invKeySchedule = [], n = 0; n < e; n++) o = e - n,
                        a = n % 4 ? r[o] : r[o - 4],
                        t[n] = 4 > n || 4 >= o ? a: c[i[a >>> 24]] ^ u[i[a >>> 16 & 255]] ^ d[i[a >>> 8 & 255]] ^ f[i[255 & a]]
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, o, a, s, l, i)
                },
                decryptBlock: function(e, t) {
                    var n = e[t + 1];
                    e[t + 1] = e[t + 3],
                        e[t + 3] = n,
                        this._doCryptBlock(e, t, this._invKeySchedule, c, u, d, f, r),
                        n = e[t + 1],
                        e[t + 1] = e[t + 3],
                        e[t + 3] = n
                },
                _doCryptBlock: function(e, t, n, i, r, o, a, s) {
                    for (var l = this._nRounds,
                             c = e[t] ^ n[0], u = e[t + 1] ^ n[1], d = e[t + 2] ^ n[2], f = e[t + 3] ^ n[3], p = 4, h = 1; h < l; h++) var m = i[c >>> 24] ^ r[u >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & f] ^ n[p++],
                             g = i[u >>> 24] ^ r[d >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & c] ^ n[p++],
                             v = i[d >>> 24] ^ r[f >>> 16 & 255] ^ o[c >>> 8 & 255] ^ a[255 & u] ^ n[p++],
                             f = i[f >>> 24] ^ r[c >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & d] ^ n[p++],
                             c = m,
                             u = g,
                             d = v;
                    m = (s[c >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & f]) ^ n[p++],
                        g = (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & c]) ^ n[p++],
                        v = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & u]) ^ n[p++],
                        f = (s[f >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & d]) ^ n[p++],
                        e[t] = m,
                        e[t + 1] = g,
                        e[t + 2] = v,
                        e[t + 3] = f
                },
                keySize: 8
            });
        e.AES = t._createHelper(n)
    } (),
    !
        function() {
            var e, t;
            jQuery.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            },
                e = jQuery.uaMatch(navigator.userAgent),
                t = {},
            e.browser && (t[e.browser] = !0, t.version = e.version),
                t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0),
                jQuery.browser = t
        } (),
    function() {
        var e = function() {
            jQuery.browser.msie && this.IEInit()
        };
        e.prototype.supportsLocalStorage = function() {
            return null !== window.localStorage && "localStorage" in window
        },
            e.prototype.setItem = function(e, t) {
                if (this.supportsLocalStorage()) localStorage.setItem(e, t);
                else if (jQuery.browser.msie) try {
                    this.oUserData.load("renrenUserData"),
                        this.oUserData.setAttribute(e, t),
                        this.oUserData.save("renrenUserData")
                } catch(n) {}
            },
            e.prototype.getItem = function(e) {
                if (this.supportsLocalStorage()) return localStorage.getItem(e);
                if (jQuery.browser.msie) try {
                    return this.oUserData.load("renrenUserData"),
                        this.oUserData.getAttribute(e)
                } catch(t) {}
            },
            e.prototype.removeItem = function(e) {
                if (this.supportsLocalStorage()) localStorage.removeItem(e);
                else if (jQuery.browser.msie) try {
                    this.oUserData.load("renrenUserData"),
                        this.oUserData.removeAttribute(e),
                        this.oUserData.save("renrenUserData")
                } catch(t) {}
            },
            e.prototype.clear = function() {
                if (this.supportsLocalStorage()) localStorage.clear();
                else if (jQuery.browser.msie) {
                    var e = new Date;
                    e.setDate(e.getDate() - 100),
                        userData.load("renrenUserData"),
                        userData.expires = e.toUTString(),
                        userData.save("renrenUserData")
                }
            },
            e.prototype.IEInit = function() {
                this.oUserData = document.createElement("div"),
                    this.oUserData.setAttribute("id", "renrenUserData"),
                    this.oUserData.style.behavior = "url('#default#userData')",
                    $("body").append(this.oUserData)
            },
            window.LS = new e;
        var t = $("#J-reg-num li"),
            n = Number(LS.getItem("countNum")) || 12153;
        n || LS.setItem("countNum", 12153),
            n = n.toString();
        for (var i = 0; i < t.size(); i++) {
            var r = t.size() - n.length;
            t.eq(i + r).text(n.substr(i, 1) ? n.substr(i, 1) : 0)
        }
        setInterval(function() {
                var e = Math.floor(3 * Math.random() + 1);
                n = Number(n),
                    n += e,
                    n = n.toString(),
                    LS.setItem("countNum", n);
                for (var i = 0; i < t.size(); i++) {
                    var r = t.size() - n.length;
                    t.eq(i + r).text(n.substr(i, 1) ? n.substr(i, 1) : 0)
                }
            },
            3800)
    } (jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e: e(jQuery)
    } (function(e) {
        function t(t) {
            var a = t || window.event,
                s = l.call(arguments, 1),
                c = 0,
                u = 0,
                d = 0,
                f = 0;
            if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (d = a.detail * -1), "wheelDelta" in a && (d = a.wheelDelta), "wheelDeltaY" in a && (d = a.wheelDeltaY), "wheelDeltaX" in a && (u = a.wheelDeltaX * -1), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = d * -1, d = 0), c = 0 === d ? u: d, "deltaY" in a && (d = a.deltaY * -1, c = d), "deltaX" in a && (u = a.deltaX, 0 === d && (c = u * -1)), 0 !== d || 0 !== u) {
                if (1 === a.deltaMode) {
                    var p = e.data(this, "mousewheel-line-height");
                    c *= p,
                        d *= p,
                        u *= p
                } else if (2 === a.deltaMode) {
                    var h = e.data(this, "mousewheel-page-height");
                    c *= h,
                        d *= h,
                        u *= h
                }
                return f = Math.max(Math.abs(d), Math.abs(u)),
                (!o || f < o) && (o = f, i(a, f) && (o /= 40)),
                i(a, f) && (c /= 40, u /= 40, d /= 40),
                    c = Math[c >= 1 ? "floor": "ceil"](c / o),
                    u = Math[u >= 1 ? "floor": "ceil"](u / o),
                    d = Math[d >= 1 ? "floor": "ceil"](d / o),
                    t.deltaX = u,
                    t.deltaY = d,
                    t.deltaFactor = o,
                    t.deltaMode = 0,
                    s.unshift(t, c, u, d),
                r && clearTimeout(r),
                    r = setTimeout(n, 200),
                    (e.event.dispatch || e.event.handle).apply(this, s)
            }
        }
        function n() {
            o = null
        }
        function i(e, t) {
            return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
        }
        var r, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (e.event.fixHooks) for (var c = a.length; c;) e.event.fixHooks[a[--c]] = e.event.mouseHooks;
        var u = e.event.special.mousewheel = {
            version: "3.1.9",
            setup: function() {
                if (this.addEventListener) for (var n = s.length; n;) this.addEventListener(s[--n], t, !1);
                else this.onmousewheel = t;
                e.data(this, "mousewheel-line-height", u.getLineHeight(this)),
                    e.data(this, "mousewheel-page-height", u.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener) for (var e = s.length; e;) this.removeEventListener(s[--e], t, !1);
                else this.onmousewheel = null
            },
            getLineHeight: function(t) {
                return parseInt(e(t)["offsetParent" in e.fn ? "offsetParent": "parent"]().css("fontSize"), 10)
            },
            getPageHeight: function(t) {
                return e(t).height()
            },
            settings: {
                adjustOldDeltas: !0
            }
        };
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }),
    !
        function(e, t) {
            var n = function(n) {
                return e(n, t)
            };
            "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof exports ? module.exports = n: n(jQuery)
        } (function(e, t, n) {
                e.fn.jScrollPane = function(i) {
                    function r(i, r) {
                        function o(t) {
                            var r, s, c, d, f, p, g = !1,
                                v = !1;
                            if (q = t, W === n) f = i.scrollTop(),
                                p = i.scrollLeft(),
                                i.css({
                                    overflow: "hidden",
                                    padding: 0
                                }),
                                $ = i.innerWidth() + xe,
                                z = i.innerHeight(),
                                i.width($),
                                W = e('<div class="jspPane" />').css("padding", ye).append(i.children()),
                                G = e('<div class="jspContainer" />').css({
                                    width: $ + "px",
                                    height: z + "px"
                                }).append(W).appendTo(i);
                            else {
                                if (i.css("width", ""), g = q.stickToBottom && E(), v = q.stickToRight && D(), d = i.innerWidth() + xe != $ || i.outerHeight() != z, d && ($ = i.innerWidth() + xe, z = i.innerHeight(), G.css({
                                        width: $ + "px",
                                        height: z + "px"
                                    })), !d && be == U && W.outerHeight() == X) return void i.width($);
                                be = U,
                                    W.css("width", ""),
                                    i.width($),
                                    G.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                            }
                            W.css("overflow", "auto"),
                                U = t.contentWidth ? t.contentWidth: W[0].scrollWidth,
                                X = W[0].scrollHeight,
                                W.css("overflow", ""),
                                Q = U / $,
                                V = X / z,
                                Y = V > 1,
                                K = Q > 1,
                                K || Y ? (i.addClass("jspScrollable"), r = q.maintainPosition && (ee || ie), r && (s = T(), c = j()), a(), l(), u(), r && (_(v ? U - $: s, !1), C(g ? X - z: c, !1)), M(), A(), H(), q.enableKeyboardNavigation && I(), q.clickOnTrack && h(), F(), q.hijackInternalLinks && R()) : (i.removeClass("jspScrollable"), W.css({
                                    top: 0,
                                    left: 0,
                                    width: G.width() - xe
                                }), P(), B(), O(), m()),
                                q.autoReinitialise && !ve ? ve = setInterval(function() {
                                        o(q)
                                    },
                                    q.autoReinitialiseDelay) : !q.autoReinitialise && ve && clearInterval(ve),
                            f && i.scrollTop(0) && C(f, !1),
                            p && i.scrollLeft(0) && _(p, !1),
                                i.trigger("jsp-initialised", [K || Y])
                        }
                        function a() {
                            Y && (G.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), re = G.find(">.jspVerticalBar"), oe = re.find(">.jspTrack"), J = oe.find(">.jspDrag"), q.showArrows && (ce = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", f(0, -1)).bind("click.jsp", N), ue = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", f(0, 1)).bind("click.jsp", N), q.arrowScrollOnHover && (ce.bind("mouseover.jsp", f(0, -1, ce)), ue.bind("mouseover.jsp", f(0, 1, ue))), d(oe, q.verticalArrowPositions, ce, ue)), se = z, G.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                                se -= e(this).outerHeight()
                            }), J.hover(function() {
                                    J.addClass("jspHover")
                                },
                                function() {
                                    J.removeClass("jspHover")
                                }).bind("mousedown.jsp",
                                function(t) {
                                    e("html").bind("dragstart.jsp selectstart.jsp", N),
                                        J.addClass("jspActive");
                                    var n = t.pageY - J.position().top;
                                    return e("html").bind("mousemove.jsp",
                                        function(e) {
                                            v(e.pageY - n, !1)
                                        }).bind("mouseup.jsp mouseleave.jsp", g),
                                        !1
                                }), s())
                        }
                        function s() {
                            oe.height(se + "px"),
                                ee = 0,
                                ae = q.verticalGutter + oe.outerWidth(),
                                W.width($ - ae - xe);
                            try {
                                0 === re.position().left && W.css("margin-left", ae + "px")
                            } catch(e) {}
                        }
                        function l() {
                            K && (G.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), de = G.find(">.jspHorizontalBar"), fe = de.find(">.jspTrack"), te = fe.find(">.jspDrag"), q.showArrows && (me = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", f( - 1, 0)).bind("click.jsp", N), ge = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", f(1, 0)).bind("click.jsp", N), q.arrowScrollOnHover && (me.bind("mouseover.jsp", f( - 1, 0, me)), ge.bind("mouseover.jsp", f(1, 0, ge))), d(fe, q.horizontalArrowPositions, me, ge)), te.hover(function() {
                                    te.addClass("jspHover")
                                },
                                function() {
                                    te.removeClass("jspHover")
                                }).bind("mousedown.jsp",
                                function(t) {
                                    e("html").bind("dragstart.jsp selectstart.jsp", N),
                                        te.addClass("jspActive");
                                    var n = t.pageX - te.position().left;
                                    return e("html").bind("mousemove.jsp",
                                        function(e) {
                                            x(e.pageX - n, !1)
                                        }).bind("mouseup.jsp mouseleave.jsp", g),
                                        !1
                                }), pe = G.innerWidth(), c())
                        }
                        function c() {
                            G.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                                pe -= e(this).outerWidth()
                            }),
                                fe.width(pe + "px"),
                                ie = 0
                        }
                        function u() {
                            if (K && Y) {
                                var t = fe.outerHeight(),
                                    n = oe.outerWidth();
                                se -= t,
                                    e(de).find(">.jspCap:visible,>.jspArrow").each(function() {
                                        pe += e(this).outerWidth()
                                    }),
                                    pe -= n,
                                    z -= n,
                                    $ -= t,
                                    fe.parent().append(e('<div class="jspCorner" />').css("width", t + "px")),
                                    s(),
                                    c()
                            }
                            K && W.width(G.outerWidth() - xe + "px"),
                                X = W.outerHeight(),
                                V = X / z,
                            K && (he = Math.ceil(1 / Q * pe), he > q.horizontalDragMaxWidth ? he = q.horizontalDragMaxWidth: he < q.horizontalDragMinWidth && (he = q.horizontalDragMinWidth), te.width(he + "px"), ne = pe - he, b(ie)),
                            Y && (le = Math.ceil(1 / V * se), le > q.verticalDragMaxHeight ? le = q.verticalDragMaxHeight: le < q.verticalDragMinHeight && (le = q.verticalDragMinHeight), J.height(le + "px"), Z = se - le, y(ee))
                        }
                        function d(e, t, n, i) {
                            var r, o = "before",
                                a = "after";
                            "os" == t && (t = /Mac/.test(navigator.platform) ? "after": "split"),
                                t == o ? a = t: t == a && (o = t, r = n, n = i, i = r),
                                e[o](n)[a](i)
                        }
                        function f(e, t, n) {
                            return function() {
                                return p(e, t, this, n),
                                    this.blur(),
                                    !1
                            }
                        }
                        function p(t, n, i, r) {
                            i = e(i).addClass("jspActive");
                            var o, a, s = !0,
                                l = function() {
                                    0 !== t && ke.scrollByX(t * q.arrowButtonSpeed),
                                    0 !== n && ke.scrollByY(n * q.arrowButtonSpeed),
                                        a = setTimeout(l, s ? q.initialDelay: q.arrowRepeatFreq),
                                        s = !1
                                };
                            l(),
                                o = r ? "mouseout.jsp": "mouseup.jsp",
                                r = r || e("html"),
                                r.bind(o,
                                    function() {
                                        i.removeClass("jspActive"),
                                        a && clearTimeout(a),
                                            a = null,
                                            r.unbind(o)
                                    })
                        }
                        function h() {
                            m(),
                            Y && oe.bind("mousedown.jsp",
                                function(t) {
                                    if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
                                        var i, r = e(this),
                                            o = r.offset(),
                                            a = t.pageY - o.top - ee,
                                            s = !0,
                                            l = function() {
                                                var e = r.offset(),
                                                    n = t.pageY - e.top - le / 2,
                                                    o = z * q.scrollPagePercent,
                                                    u = Z * o / (X - z);
                                                if (0 > a) ee - u > n ? ke.scrollByY( - o) : v(n);
                                                else {
                                                    if (! (a > 0)) return void c();
                                                    n > ee + u ? ke.scrollByY(o) : v(n)
                                                }
                                                i = setTimeout(l, s ? q.initialDelay: q.trackClickRepeatFreq),
                                                    s = !1
                                            },
                                            c = function() {
                                                i && clearTimeout(i),
                                                    i = null,
                                                    e(document).unbind("mouseup.jsp", c)
                                            };
                                        return l(),
                                            e(document).bind("mouseup.jsp", c),
                                            !1
                                    }
                                }),
                            K && fe.bind("mousedown.jsp",
                                function(t) {
                                    if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
                                        var i, r = e(this),
                                            o = r.offset(),
                                            a = t.pageX - o.left - ie,
                                            s = !0,
                                            l = function() {
                                                var e = r.offset(),
                                                    n = t.pageX - e.left - he / 2,
                                                    o = $ * q.scrollPagePercent,
                                                    u = ne * o / (U - $);
                                                if (0 > a) ie - u > n ? ke.scrollByX( - o) : x(n);
                                                else {
                                                    if (! (a > 0)) return void c();
                                                    n > ie + u ? ke.scrollByX(o) : x(n)
                                                }
                                                i = setTimeout(l, s ? q.initialDelay: q.trackClickRepeatFreq),
                                                    s = !1
                                            },
                                            c = function() {
                                                i && clearTimeout(i),
                                                    i = null,
                                                    e(document).unbind("mouseup.jsp", c)
                                            };
                                        return l(),
                                            e(document).bind("mouseup.jsp", c),
                                            !1
                                    }
                                })
                        }
                        function m() {
                            fe && fe.unbind("mousedown.jsp"),
                            oe && oe.unbind("mousedown.jsp")
                        }
                        function g() {
                            e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),
                            J && J.removeClass("jspActive"),
                            te && te.removeClass("jspActive")
                        }
                        function v(e, t) {
                            Y && (0 > e ? e = 0 : e > Z && (e = Z), t === n && (t = q.animateScroll), t ? ke.animate(J, "top", e, y) : (J.css("top", e), y(e)))
                        }
                        function y(e) {
                            e === n && (e = J.position().top),
                                G.scrollTop(0),
                                ee = e;
                            var t = 0 === ee,
                                r = ee == Z,
                                o = e / Z,
                                a = -o * (X - z); (we != t || _e != r) && (we = t, _e = r, i.trigger("jsp-arrow-change", [we, _e, Ce, Se])),
                                k(t, r),
                                W.css("top", a),
                                i.trigger("jsp-scroll-y", [ - a, t, r]).trigger("scroll")
                        }
                        function x(e, t) {
                            K && (0 > e ? e = 0 : e > ne && (e = ne), t === n && (t = q.animateScroll), t ? ke.animate(te, "left", e, b) : (te.css("left", e), b(e)))
                        }
                        function b(e) {
                            e === n && (e = te.position().left),
                                G.scrollTop(0),
                                ie = e;
                            var t = 0 === ie,
                                r = ie == ne,
                                o = e / ne,
                                a = -o * (U - $); (Ce != t || Se != r) && (Ce = t, Se = r, i.trigger("jsp-arrow-change", [we, _e, Ce, Se])),
                                w(t, r),
                                W.css("left", a),
                                i.trigger("jsp-scroll-x", [ - a, t, r]).trigger("scroll")
                        }
                        function k(e, t) {
                            q.showArrows && (ce[e ? "addClass": "removeClass"]("jspDisabled"), ue[t ? "addClass": "removeClass"]("jspDisabled"))
                        }
                        function w(e, t) {
                            q.showArrows && (me[e ? "addClass": "removeClass"]("jspDisabled"), ge[t ? "addClass": "removeClass"]("jspDisabled"))
                        }
                        function C(e, t) {
                            var n = e / (X - z);
                            v(n * Z, t)
                        }
                        function _(e, t) {
                            var n = e / (U - $);
                            x(n * ne, t)
                        }
                        function S(t, n, i) {
                            var r, o, a, s, l, c, u, d, f, p = 0,
                                h = 0;
                            try {
                                r = e(t)
                            } catch(m) {
                                return
                            }
                            for (o = r.outerHeight(), a = r.outerWidth(), G.scrollTop(0), G.scrollLeft(0); ! r.is(".jspPane");) if (p += r.position().top, h += r.position().left, r = r.offsetParent(), /^body|html$/i.test(r[0].nodeName)) return;
                            s = j(),
                                c = s + z,
                                s > p || n ? d = p - q.horizontalGutter: p + o > c && (d = p - z + o + q.horizontalGutter),
                            isNaN(d) || C(d, i),
                                l = T(),
                                u = l + $,
                                l > h || n ? f = h - q.horizontalGutter: h + a > u && (f = h - $ + a + q.horizontalGutter),
                            isNaN(f) || _(f, i)
                        }
                        function T() {
                            return - W.position().left
                        }
                        function j() {
                            return - W.position().top
                        }
                        function E() {
                            var e = X - z;
                            return e > 20 && e - j() < 10
                        }
                        function D() {
                            var e = U - $;
                            return e > 20 && e - T() < 10
                        }
                        function A() {
                            G.unbind(je).bind(je,
                                function(e, t, n, i) {
                                    var r = ie,
                                        o = ee,
                                        a = e.deltaFactor || q.mouseWheelSpeed;
                                    return ke.scrollBy(n * a, -i * a, !1),
                                    r == ie && o == ee
                                })
                        }
                        function P() {
                            G.unbind(je)
                        }
                        function N() {
                            return ! 1
                        }
                        function M() {
                            W.find(":input,a").unbind("focus.jsp").bind("focus.jsp",
                                function(e) {
                                    S(e.target, !1)
                                })
                        }
                        function B() {
                            W.find(":input,a").unbind("focus.jsp")
                        }
                        function I() {
                            function t() {
                                var e = ie,
                                    t = ee;
                                switch (n) {
                                    case 40:
                                        ke.scrollByY(q.keyboardSpeed, !1);
                                        break;
                                    case 38:
                                        ke.scrollByY( - q.keyboardSpeed, !1);
                                        break;
                                    case 34:
                                    case 32:
                                        ke.scrollByY(z * q.scrollPagePercent, !1);
                                        break;
                                    case 33:
                                        ke.scrollByY( - z * q.scrollPagePercent, !1);
                                        break;
                                    case 39:
                                        ke.scrollByX(q.keyboardSpeed, !1);
                                        break;
                                    case 37:
                                        ke.scrollByX( - q.keyboardSpeed, !1)
                                }
                                return r = e != ie || t != ee
                            }
                            var n, r, o = [];
                            K && o.push(de[0]),
                            Y && o.push(re[0]),
                                W.focus(function() {
                                    i.focus()
                                }),
                                i.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",
                                    function(i) {
                                        if (i.target === this || o.length && e(i.target).closest(o).length) {
                                            var a = ie,
                                                s = ee;
                                            switch (i.keyCode) {
                                                case 40:
                                                case 38:
                                                case 34:
                                                case 32:
                                                case 33:
                                                case 39:
                                                case 37:
                                                    n = i.keyCode,
                                                        t();
                                                    break;
                                                case 35:
                                                    C(X - z),
                                                        n = null;
                                                    break;
                                                case 36:
                                                    C(0),
                                                        n = null
                                            }
                                            return r = i.keyCode == n && a != ie || s != ee,
                                                !r
                                        }
                                    }).bind("keypress.jsp",
                                    function(e) {
                                        return e.keyCode == n && t(),
                                            !r
                                    }),
                                q.hideFocus ? (i.css("outline", "none"), "hideFocus" in G[0] && i.attr("hideFocus", !0)) : (i.css("outline", ""), "hideFocus" in G[0] && i.attr("hideFocus", !1))
                        }
                        function O() {
                            i.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
                        }
                        function F() {
                            if (location.hash && location.hash.length > 1) {
                                var t, n, i = escape(location.hash.substr(1));
                                try {
                                    t = e("#" + i + ', a[name="' + i + '"]')
                                } catch(r) {
                                    return
                                }
                                t.length && W.find(i) && (0 === G.scrollTop() ? n = setInterval(function() {
                                        G.scrollTop() > 0 && (S(t, !0), e(document).scrollTop(G.position().top), clearInterval(n))
                                    },
                                    50) : (S(t, !0), e(document).scrollTop(G.position().top)))
                            }
                        }
                        function R() {
                            e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click",
                                function(n) {
                                    var i, r, o, a, s, l, c = this.href.substr(0, this.href.indexOf("#")),
                                        u = location.href;
                                    if ( - 1 !== location.href.indexOf("#") && (u = location.href.substr(0, location.href.indexOf("#"))), c === u) {
                                        i = escape(this.href.substr(this.href.indexOf("#") + 1));
                                        try {
                                            r = e("#" + i + ', a[name="' + i + '"]')
                                        } catch(d) {
                                            return
                                        }
                                        r.length && (o = r.closest(".jspScrollable"), a = o.data("jsp"), a.scrollToElement(r, !0), o[0].scrollIntoView && (s = e(t).scrollTop(), l = r.offset().top, (s > l || l > s + e(t).height()) && o[0].scrollIntoView()), n.preventDefault())
                                    }
                                }))
                        }
                        function H() {
                            var e, t, n, i, r, o = !1;
                            G.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",
                                function(a) {
                                    var s = a.originalEvent.touches[0];
                                    e = T(),
                                        t = j(),
                                        n = s.pageX,
                                        i = s.pageY,
                                        r = !1,
                                        o = !0
                                }).bind("touchmove.jsp",
                                function(a) {
                                    if (o) {
                                        var s = a.originalEvent.touches[0],
                                            l = ie,
                                            c = ee;
                                        return ke.scrollTo(e + n - s.pageX, t + i - s.pageY),
                                            r = r || Math.abs(n - s.pageX) > 5 || Math.abs(i - s.pageY) > 5,
                                        l == ie && c == ee
                                    }
                                }).bind("touchend.jsp",
                                function() {
                                    o = !1
                                }).bind("click.jsp-touchclick",
                                function() {
                                    return r ? (r = !1, !1) : void 0
                                })
                        }
                        function L() {
                            var e = j(),
                                t = T();
                            i.removeClass("jspScrollable").unbind(".jsp"),
                                i.replaceWith(Te.append(W.children())),
                                Te.scrollTop(e),
                                Te.scrollLeft(t),
                            ve && clearInterval(ve)
                        }
                        var q, W, $, z, G, U, X, Q, V, Y, K, J, Z, ee, te, ne, ie, re, oe, ae, se, le, ce, ue, de, fe, pe, he, me, ge, ve, ye, xe, be, ke = this,
                            we = !0,
                            Ce = !0,
                            _e = !1,
                            Se = !1,
                            Te = i.clone(!1, !1).empty(),
                            je = e.fn.mwheelIntent ? "mwheelIntent.jsp": "mousewheel.jsp";
                        "border-box" === i.css("box-sizing") ? (ye = 0, xe = 0) : (ye = i.css("paddingTop") + " " + i.css("paddingRight") + " " + i.css("paddingBottom") + " " + i.css("paddingLeft"), xe = (parseInt(i.css("paddingLeft"), 10) || 0) + (parseInt(i.css("paddingRight"), 10) || 0)),
                            e.extend(ke, {
                                reinitialise: function(t) {
                                    t = e.extend({},
                                        q, t),
                                        o(t)
                                },
                                scrollToElement: function(e, t, n) {
                                    S(e, t, n)
                                },
                                scrollTo: function(e, t, n) {
                                    _(e, n),
                                        C(t, n)
                                },
                                scrollToX: function(e, t) {
                                    _(e, t)
                                },
                                scrollToY: function(e, t) {
                                    C(e, t)
                                },
                                scrollToPercentX: function(e, t) {
                                    _(e * (U - $), t)
                                },
                                scrollToPercentY: function(e, t) {
                                    C(e * (X - z), t)
                                },
                                scrollBy: function(e, t, n) {
                                    ke.scrollByX(e, n),
                                        ke.scrollByY(t, n)
                                },
                                scrollByX: function(e, t) {
                                    var n = T() + Math[0 > e ? "floor": "ceil"](e),
                                        i = n / (U - $);
                                    x(i * ne, t)
                                },
                                scrollByY: function(e, t) {
                                    var n = j() + Math[0 > e ? "floor": "ceil"](e),
                                        i = n / (X - z);
                                    v(i * Z, t)
                                },
                                positionDragX: function(e, t) {
                                    x(e, t)
                                },
                                positionDragY: function(e, t) {
                                    v(e, t)
                                },
                                animate: function(e, t, n, i) {
                                    var r = {};
                                    r[t] = n,
                                        e.animate(r, {
                                            duration: q.animateDuration,
                                            easing: q.animateEase,
                                            queue: !1,
                                            step: i
                                        })
                                },
                                getContentPositionX: function() {
                                    return T()
                                },
                                getContentPositionY: function() {
                                    return j()
                                },
                                getContentWidth: function() {
                                    return U
                                },
                                getContentHeight: function() {
                                    return X
                                },
                                getPercentScrolledX: function() {
                                    return T() / (U - $)
                                },
                                getPercentScrolledY: function() {
                                    return j() / (X - z)
                                },
                                getIsScrollableH: function() {
                                    return K
                                },
                                getIsScrollableV: function() {
                                    return Y
                                },
                                getContentPane: function() {
                                    return W
                                },
                                scrollToBottom: function(e) {
                                    v(Z, e)
                                },
                                hijackInternalLinks: e.noop,
                                destroy: function() {
                                    L()
                                }
                            }),
                            o(r)
                    }
                    return i = e.extend({},
                        e.fn.jScrollPane.defaults, i),
                        e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"],
                            function() {
                                i[this] = i[this] || i.speed
                            }),
                        this.each(function() {
                            var t = e(this),
                                n = t.data("jsp");
                            n ? n.reinitialise(i) : (e("script", t).filter('[type="text/javascript"],:not([type])').remove(), n = new r(t, i), t.data("jsp", n))
                        })
                },
                    e.fn.jScrollPane.defaults = {
                        showArrows: !1,
                        maintainPosition: !0,
                        stickToBottom: !1,
                        stickToRight: !1,
                        clickOnTrack: !0,
                        autoReinitialise: !1,
                        autoReinitialiseDelay: 500,
                        verticalDragMinHeight: 0,
                        verticalDragMaxHeight: 99999,
                        horizontalDragMinWidth: 0,
                        horizontalDragMaxWidth: 99999,
                        contentWidth: n,
                        animateScroll: !1,
                        animateDuration: 300,
                        animateEase: "linear",
                        hijackInternalLinks: !1,
                        verticalGutter: 4,
                        horizontalGutter: 4,
                        mouseWheelSpeed: 3,
                        arrowButtonSpeed: 0,
                        arrowRepeatFreq: 50,
                        arrowScrollOnHover: !1,
                        trackClickSpeed: 0,
                        trackClickRepeatFreq: 70,
                        verticalArrowPositions: "split",
                        horizontalArrowPositions: "split",
                        enableKeyboardNavigation: !0,
                        hideFocus: !1,
                        keyboardSpeed: 0,
                        initialDelay: 300,
                        speed: 30,
                        scrollPagePercent: .8
                    }
            },
            this),
    function(e) {
        var t = function(n, i) {
            this.element = n,
            this.element.hasClass("flipTimer") || this.element.addClass("flipTimer"),
                this.userOptions = i,
                this.defaultOptions = t.defaults,
                this.options = e.extend({},
                    this.defaultOptions, this.userOptions),
            this.element.find(".seconds").length > 0 && (this.options.seconds = this.element.find(".seconds")[0]),
            this.element.find(".minutes").length > 0 && (this.options.minutes = this.element.find(".minutes")[0]),
            this.element.find(".hours").length > 0 && (this.options.hours = this.element.find(".hours")[0]),
                this.initDate = new Date,
                this.options.date = new Date(this.options.date),
                this.calculateDateByTime(this.options.h, this.options.m, this.options.s)
        };
        t.defaults = {
            seconds: !1,
            minutes: !1,
            hours: !1,
            days: !1,
            date: (new Date).toDateString(),
            direction: "up",
            callback: null,
            digitTemplate: '<div class="digit">  <div class="digit-top">    <span class="digit-wrap"></span>  </div>  <div class="shadow-top"></div>  <div class="digit-bottom">    <span class="digit-wrap"></span>  </div>  <div class="shadow-bottom"></div></div>'
        },
            t.prototype = {
                reNew: function(e, t, n) {
                    var i = this;
                    i.increaseDigitDom(i.options.seconds, n),
                        i.increaseDigitDom(i.options.minutes, t),
                        i.increaseDigitDom(i.options.hours, e)
                },
                renewDate: function(e) {
                    var e = e || new Date;
                    this.initDate = e
                },
                calculateDateByTime: function(e, t, n) {
                    "down" == this.options.direction || "up" == this.options.direction,
                        this.seconds = n,
                        this.minutes = t,
                        this.hours = e,
                        this.render()
                },
                calculateDate: function() {
                    var e;
                    "down" == this.options.direction ? e = this.options.date - this.initDate: "up" == this.options.direction && (e = this.initDate - this.options.date),
                        this.seconds = Math.floor(e / 1e3) % 60,
                        this.minutes = Math.floor(e / 1e3 / 60) % 60,
                        this.hours = Math.floor(e / 1e3 / 3600) % 24,
                        this.days = Math.floor(e / 1e3 / 60 / 60 / 24),
                        this.render()
                },
                render: function() {
                    this.options.seconds && this.renderDigits(this.options.seconds, this.seconds),
                    this.options.minutes && this.renderDigits(this.options.minutes, this.minutes),
                    this.options.hours && this.renderDigits(this.options.hours, this.hours)
                },
                renderDigits: function(t, n) {
                    var i, r, o, a, s, l, c = this;
                    0 == e(t).find(".digit").length && (l = c.days < 0 && c.hours < 0 && c.minutes < 0 && c.seconds < 0 ? [0, 0] : c.days > 99 ? [0, 0] : String((n / 10).toFixed(1)).split("."), a = t == c.options.seconds || t == c.options.minutes ? 5 : t == c.options.hours ? 2 : 9, e(t).append('<div class="digit-set"></div><div class="digit-set"></div>'), e(t).find(".digit-set").each(function(t) {
                        for (o = 0 == t ? a: 9, i = 0; i <= o; i++) e(this).append(c.options.digitTemplate),
                            r = "down" == c.options.direction ? o - i: i,
                            s = e(this).find(".digit")[i],
                            e(s).find(".digit-wrap").append(r),
                            r == l[t] ? e(s).addClass("active") : 0 != l[t] && r + 1 == l[t] ? e(s).addClass("previous") : 0 == l[t] && r == o && e(s).addClass("previous")
                    }))
                },
                startTimer: function() {
                    var e = this;
                    clearInterval(this.timer),
                        this.timer = setInterval(function() {
                                return e.days <= 0 && e.hours <= 0 && e.minutes <= 0 && e.seconds <= 0 ? (e.options.callback && e.options.callback(), void clearInterval(e.timer)) : e.days > 99 || 99 == e.days && 23 == e.hours && 59 == e.minutes && 59 == e.seconds ? void clearInterval(e.timer) : ("down" == e.options.direction ? e.seconds--:e.seconds++, e.options.seconds && e.increaseDigit(e.options.seconds), 60 != e.seconds && e.seconds != -1 || ("down" == e.options.direction ? (e.seconds = 59, e.minutes--) : (e.seconds = 0, e.minutes++), e.options.minutes && e.increaseDigit(e.options.minutes)), 60 != e.minutes && e.minutes != -1 || ("down" == e.options.direction ? (e.minutes = 59, e.hours--) : (e.minutes = 0, e.hours++), e.options.hours && e.increaseDigit(e.options.hours)), void(24 != e.hours && e.hours != -1 || ("down" == e.options.direction ? (e.hours = 23, e.days--) : (e.hours = 0, e.days++), e.options.days && e.increaseDigit(e.options.days))))
                            },
                            1e3)
                },
                increaseDigitDom: function(t, n) {
                    var i = n.substr(0, 1),
                        r = n.substr(1, 1),
                        o = (new Array, e(t).find(".digit-set")),
                        a = (o.find(".digit"), o.find(".active")),
                        s = o.find(".previous");
                    if (o.eq(0).find(".active").index() != i) {
                        var a = o.eq(0).find(".active"),
                            s = o.eq(0).find(".previous");
                        a.removeClass("active").addClass("previous"),
                            s.removeClass("previous")
                    }
                    if (o.eq(1).find(".active").index() != r) {
                        var a = o.eq(1).find(".active"),
                            s = o.eq(1).find(".previous");
                        a.removeClass("active").addClass("previous"),
                            s.removeClass("previous")
                    }
                    o.eq(0).find(".digit").eq(i).addClass("active"),
                        o.eq(1).find(".digit").eq(r).addClass("active")
                },
                pad: function(e) {
                    return e < 10 ? "0" + e: e
                },
                increaseDigit: function(t) {
                    function n(o) {
                        var a = e(o).find(".active"),
                            s = e(o).find(".previous"),
                            l = e.inArray(o, i);
                        s.removeClass("previous"),
                            a.removeClass("active").addClass("previous"),
                            0 == a.next().length ? ("down" != r.options.direction || t != r.options.hours || r.hours != -1 && 23 != r.hours || 10 != e(o).find(".digit").length ? e(o).find(".digit:first-child").addClass("active") : e(e(o).find(".digit")[6]).addClass("active"), 0 != l && n(i[l - 1])) : "up" == r.options.direction && t == r.options.hours && 24 == r.hours ? (e(o).find(".digit:first-child").addClass("active"), n(i[l - 1])) : a.next().addClass("active")
                    }
                    var i = new Array,
                        r = this;
                    e(t).find(".digit-set").each(function() {
                        i.push(this)
                    }),
                        n(i[i.length - 1])
                }
            },
            phoenix.flipTimer = t,
            e.fn.flipTimer = function(n) {
                return this.each(function() {
                    e(this).data("flipTimer") || e(this).data("flipTimer", new t(e(this), n))
                })
            }
    } (jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    } (function(e) {
        function t(e) {
            return s.raw ? e: encodeURIComponent(e)
        }
        function n(e) {
            return s.raw ? e: decodeURIComponent(e)
        }
        function i(e) {
            return t(s.json ? JSON.stringify(e) : String(e))
        }
        function r(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(a, " ")),
                    s.json ? JSON.parse(e) : e
            } catch(t) {}
        }
        function o(t, n) {
            var i = s.raw ? t: r(t);
            return e.isFunction(n) ? n(i) : i
        }
        var a = /\+/g,
            s = e.cookie = function(r, a, l) {
                if (arguments.length > 1 && !e.isFunction(a)) {
                    if (l = e.extend({},
                            s.defaults, l), "number" == typeof l.expires) {
                        var c = l.expires,
                            u = l.expires = new Date;
                        u.setMilliseconds(u.getMilliseconds() + 864e5 * c)
                    }
                    return document.cookie = [t(r), "=", i(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path: "", l.domain ? "; domain=" + l.domain: "", l.secure ? "; secure": ""].join("")
                }
                for (var d = r ? void 0 : {},
                         f = document.cookie ? document.cookie.split("; ") : [], p = 0, h = f.length; p < h; p++) {
                    var m = f[p].split("="),
                        g = n(m.shift()),
                        v = m.join("=");
                    if (r === g) {
                        d = o(v, a);
                        break
                    }
                    r || void 0 === (v = o(v)) || (d[g] = v)
                }
                return d
            };
        s.defaults = {},
            e.removeCookie = function(t, n) {
                return e.cookie(t, "", e.extend({},
                    n, {
                        expires: -1
                    })),
                    !e.cookie(t)
            }
    });