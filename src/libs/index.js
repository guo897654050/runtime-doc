var QuarkElement = (function (exports) {
  'use strict';

  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var wrapNativeSuper = { exports: {} };

  var getPrototypeOf = { exports: {} };

  (function (module) {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _getPrototypeOf(o);
    }
    module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(getPrototypeOf);
  var _getPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf.exports);

  var setPrototypeOf = { exports: {} };

  (function (module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _setPrototypeOf(o, p);
    }
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(setPrototypeOf);

  var isNativeFunction = { exports: {} };

  (function (module) {
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(isNativeFunction);

  var construct = { exports: {} };

  var isNativeReflectConstruct = { exports: {} };

  (function (module) {
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }));
        return true;
      } catch (e) {
        return false;
      }
    }
    module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(isNativeReflectConstruct);

  (function (module) {
    var setPrototypeOf$1 = setPrototypeOf.exports;
    var isNativeReflectConstruct$1 = isNativeReflectConstruct.exports;
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct$1()) {
        module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
      } else {
        module.exports = _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) setPrototypeOf$1(instance, Class.prototype);
          return instance;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      }
      return _construct.apply(null, arguments);
    }
    module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(construct);

  (function (module) {
    var getPrototypeOf$1 = getPrototypeOf.exports;
    var setPrototypeOf$1 = setPrototypeOf.exports;
    var isNativeFunction$1 = isNativeFunction.exports;
    var construct$1 = construct.exports;
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;
      module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !isNativeFunction$1(Class)) return Class;
        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
          return construct$1(Class, arguments, getPrototypeOf$1(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return setPrototypeOf$1(Wrapper, Class);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _wrapNativeSuper(Class);
    }
    module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(wrapNativeSuper);
  var _wrapNativeSuper = /*@__PURE__*/getDefaultExportFromCjs(wrapNativeSuper.exports);

  var defineProperty = { exports: {} };

  (function (module) {
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(defineProperty);
  var _defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty.exports);

  var classCallCheck = { exports: {} };

  (function (module) {
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(classCallCheck);
  var _classCallCheck = /*@__PURE__*/getDefaultExportFromCjs(classCallCheck.exports);

  var createClass = { exports: {} };

  (function (module) {
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(createClass);
  var _createClass = /*@__PURE__*/getDefaultExportFromCjs(createClass.exports);

  var assertThisInitialized = { exports: {} };

  (function (module) {
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(assertThisInitialized);
  var _assertThisInitialized = /*@__PURE__*/getDefaultExportFromCjs(assertThisInitialized.exports);

  var inherits = { exports: {} };

  (function (module) {
    var setPrototypeOf$1 = setPrototypeOf.exports;
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass) setPrototypeOf$1(subClass, superClass);
    }
    module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(inherits);
  var _inherits = /*@__PURE__*/getDefaultExportFromCjs(inherits.exports);

  var possibleConstructorReturn = { exports: {} };

  var _typeof = { exports: {} };

  (function (module) {
    function _typeof(obj) {
      "@babel/helpers - typeof";

      return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(_typeof);

  (function (module) {
    var _typeof$1 = _typeof.exports["default"];
    var assertThisInitialized$1 = assertThisInitialized.exports;
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return assertThisInitialized$1(self);
    }
    module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(possibleConstructorReturn);
  var _possibleConstructorReturn = /*@__PURE__*/getDefaultExportFromCjs(possibleConstructorReturn.exports);

  var n, l, u, t, o, r, e = {}, c = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i; function a(n, l) { for (var u in l) n[u] = l[u]; return n } function h(n) { var l = n.parentNode; l && l.removeChild(n); } function v(l, u, i) { var t, o, r, f = {}; for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r]; if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]); return y(l, f, t, o, null) } function y(n, i, t, o, r) { var f = { type: n, props: i, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u : r }; return null == r && null != l.vnode && l.vnode(f), f } function p() { return { current: null } } function d(n) { return n.children } function _(n, l) { this.props = n, this.context = l; } function k(n, l) { if (null == l) return n.__ ? k(n.__, n.__.__k.indexOf(n) + 1) : null; for (var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e; return "function" == typeof n.type ? k(n) : null } function b(n) { var l, u; if (null != (n = n.__) && null != n.__c) { for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) { n.__e = n.__c.base = u.__e; break } return b(n) } } function m(n) { (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g); } function g() { for (var n; g.__r = t.length;)n = t.sort(function (n, l) { return n.__v.__b - l.__v.__b }), t = [], n.some(function (n) { var l, u, i, t, o, r; n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = a({}, t)).__v = t.__v + 1, j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? k(t) : o, t.__h), z(u, t), t.__e != o && b(t))); }); } function w(n, l, u, i, t, o, r, f, s, a) { var h, v, p, _, b, m, g, w = i && i.__k || c, A = w.length; for (u.__k = [], h = 0; h < l.length; h++)if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y(null, _, null, null, _) : Array.isArray(_) ? y(d, { children: _ }, null, null, null) : _.__b > 0 ? y(_.type, _.props, _.key, null, _.__v) : _)) { if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0; else for (v = 0; v < A; v++) { if ((p = w[v]) && _.key == p.key && _.type === p.type) { w[v] = void 0; break } p = null; } j(n, _, p = p || e, t, o, r, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x(_, s, n) : s = P(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k(p)); } for (u.__e = m, h = A; h--;)null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k(i, h + 1)), N(w[h], w[h])); if (g) for (h = 0; h < g.length; h++)M(g[h], g[++h], g[++h]); } function x(n, l, u) { for (var i, t = n.__k, o = 0; t && o < t.length; o++)(i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? x(i, l, u) : P(u, i, i, t, i.__e, l)); return l } function P(n, l, u, i, t, o) { var r, f, e; if (void 0 !== l.__d) r = l.__d, l.__d = void 0; else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null; else { for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2)if (f == t) break n; n.insertBefore(t, o), r = o; } return void 0 !== r ? r : t.nextSibling } function C(n, l, u, i, t) { var o; for (o in u) "children" === o || "key" === o || o in l || H(n, o, null, u[o], i); for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H(n, o, l[o], u[o], i); } function $(n, l, u) { "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s.test(l) ? u : u + "px"; } function H(n, l, u, i, t) { var o; n: if ("style" === l) if ("string" == typeof u) n.style.cssText = u; else { if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, ""); if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]); } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o); else if ("dangerouslySetInnerHTML" !== l) { if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s"); else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try { n[l] = null == u ? "" : u; break n } catch (n) { } "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l)); } } function I(n) { this.l[n.type + !1](l.event ? l.event(n) : n); } function T(n) { this.l[n.type + !0](l.event ? l.event(n) : n); } function j(n, u, i, t, o, r, f, e, c) { var s, h, v, y, p, k, b, m, g, x, A, P = u.type; if (void 0 !== u.constructor) return null; null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (s = l.__b) && s(u); try { n: if ("function" == typeof P) { if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new _(m, x), h.constructor = P, h.render = O), g && g.sub(h), h.props = m, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a({}, h.__s)), a(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, p = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount); else { if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === i.__v) { h.props = m, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) { n && (n.__ = u); }), h.__h.length && f.push(h); break n } null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () { h.componentDidUpdate(y, p, k); }); } h.context = x, h.props = m, h.state = h.__s, (s = l.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a(a({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d && null == s.key ? s.props.children : s, w(n, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1; } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c); (s = l.diffed) && s(u); } catch (n) { u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, i); } } function z(n, u) { l.__c && l.__c(u, n), n.some(function (u) { try { n = u.__h, u.__h = [], n.some(function (n) { n.call(u); }); } catch (n) { l.__e(n, u.__v); } }); } function L(l, u, i, t, o, r, f, c) { var s, a, v, y = i.props, p = u.props, d = u.type, _ = 0; if ("svg" === d && (o = !0), null != r) for (; _ < r.length; _++)if ((s = r[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) { l = s, r[_] = null; break } if (null == l) { if (null === d) return document.createTextNode(p); l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1; } if (null === d) y === p || c && l.data === p || (l.data = p); else { if (r = r && n.call(l.childNodes), a = (y = i.props || e).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) { if (null != r) for (y = {}, _ = 0; _ < l.attributes.length; _++)y[l.attributes[_].name] = l.attributes[_].value; (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || "")); } if (C(l, p, y, o, c), v) u.__k = []; else if (_ = u.props.children, w(l, Array.isArray(_) ? _ : [_], u, i, t, o && "foreignObject" !== d, r, f, r ? r[0] : i.__k && k(i, 0), c), null != r) for (_ = r.length; _--;)null != r[_] && h(r[_]); c || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_ || "option" === d && _ !== y.value) && H(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H(l, "checked", _, y.checked, !1)); } return l } function M(n, u, i) { try { "function" == typeof n ? n(u) : n.current = u; } catch (n) { l.__e(n, i); } } function N(n, u, i) { var t, o; if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) { if (t.componentWillUnmount) try { t.componentWillUnmount(); } catch (n) { l.__e(n, u); } t.base = t.__P = null; } if (t = n.__k) for (o = 0; o < t.length; o++)t[o] && N(t[o], u, "function" != typeof n.type); i || null == n.__e || h(n.__e), n.__e = n.__d = void 0; } function O(n, l, u) { return this.constructor(n, u) } function S(u, i, t) { var o, r, f; l.__ && l.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j(i, u = (!o && t || i).__k = v(d, null, [u]), r || e, e, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, f, !o && t ? t : r ? r.__e : i.firstChild, o), z(f, u); } n = c.slice, l = { __e: function (n, l) { for (var u, i, t; l = l.__;)if ((u = l.__c) && !u.__) try { if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u } catch (l) { n = l; } throw n } }, u = 0, _.prototype.setState = function (n, l) { var u; u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(a({}, u), this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), m(this)); }, _.prototype.forceUpdate = function (n) { this.__v && (this.__e = !0, n && this.__h.push(n), m(this)); }, _.prototype.render = d, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0;

  var DblKeyMap = /*#__PURE__*/function () {
    function DblKeyMap() {
      _classCallCheck(this, DblKeyMap);
      _defineProperty(this, "map", new Map());
    }
    _createClass(DblKeyMap, [{
      key: "get",
      value: function get(key1, key2) {
        var subMap = this.map.get(key1);
        if (subMap) {
          return subMap.get(key2);
        }
      }
    }, {
      key: "set",
      value: function set(key1, key2, value) {
        var _subMap;
        var subMap = this.map.get(key1);
        if (!subMap) {
          subMap = new Map();
          this.map.set(key1, subMap);
        }
        (_subMap = subMap) === null || _subMap === void 0 ? void 0 : _subMap.set(key2, value);
      }
    }, {
      key: "forEach",
      value: function forEach(cb) {
        this.map.forEach(function (subMap, key1) {
          subMap.forEach(function (value, key2) {
            cb(value, key1, key2);
          });
        });
      }
    }, {
      key: "delete",
      value: function _delete(key1) {
        this.map["delete"](key1);
      }
    }, {
      key: "deleteAll",
      value: function deleteAll() {
        var _this = this;
        this.map.forEach(function (_, key1) {
          _this.map["delete"](key1);
        });
      }
    }]);
    return DblKeyMap;
  }();

  var EventController = /*#__PURE__*/_createClass(function EventController() {
    var _this = this;
    _classCallCheck(this, EventController);
    _defineProperty(this, "eventMap", new DblKeyMap());
    _defineProperty(this, "bindListener", function (el, eventName, eventHandler) {
      if (!el || !eventName || !eventHandler) {
        return;
      }
      var list = _this.eventMap.get(el, eventName);
      if (!list) {
        list = new Set();
        _this.eventMap.set(el, eventName, list);
      }
      if (!list.has(eventHandler)) {
        list.add(eventHandler);
        el.addEventListener(eventName, eventHandler, true);
      }
    });
    _defineProperty(this, "removeAllListener", function () {
      _this.eventMap.forEach(function (list, el, eventName) {
        list.forEach(function (handler) {
          el.removeEventListener(eventName, handler);
        });
      });
      _this.eventMap.deleteAll();
    });
  });

  var delay = (function (func) {
    var t;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (t) {
        clearTimeout(t);
      }
      t = setTimeout(function () {
        func.apply(void 0, args);
      });
    };
  });

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })); return true; } catch (e) { return false; } }
  var Fragment = d;
  var isEmpty = function isEmpty(val) {
    return !(val || val === false || val === 0);
  };
  var defaultConverter = function defaultConverter(value, type) {
    var newValue = value;
    switch (type) {
      case Number:
        newValue = isEmpty(value) ? value : Number(value);
        break;
      case Boolean:
        newValue = !([null, 'false', false, undefined].indexOf(value) > -1);
        break;
    }
    return newValue;
  };
  var defaultPropertyDeclaration = {
    observed: true,
    type: String,
    converter: defaultConverter
  };
  var property = function property() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (target, name) {
      return target.constructor.createProperty(name, options);
    };
  };
  var state = function state() {
    return function (target, name) {
      return target.constructor.createState(name);
    };
  };
  var ElementProperties = new DblKeyMap();
  var Descriptors = new DblKeyMap();
  function customElement(params) {
    var _ref = typeof params === 'string' ? {
      tag: params
    } : params,
      tag = _ref.tag,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? '' : _ref$style;
    return function (target) {
      var NewQuarkElement = /*#__PURE__*/function (_target) {
        _inherits(NewQuarkElement, _target);
        var _super = _createSuper(NewQuarkElement);
        function NewQuarkElement() {
          var _this;
          _classCallCheck(this, NewQuarkElement);
          _this = _super.call(this);
          if (style) {
            _this.getStyles = function () {
              return style;
            };
          }
          var shadowRoot = _this.attachShadow({
            mode: 'open'
          });
          if (shadowRoot) {
            if (typeof _this.getStyles === 'function') {
              var styleEl = document.createElement('style');
              styleEl.innerHTML = _this.getStyles();
              shadowRoot.append(styleEl);
            }
          }
          Descriptors.forEach(function (descriptorCreator, constructor, propertyName) {
            if (constructor === target) {
              Object.defineProperty(_assertThisInitialized(_this), propertyName, descriptorCreator(_this[propertyName]));
            }
          });
          return _this;
        }
        _createClass(NewQuarkElement, null, [{
          key: "observedAttributes",
          get: function get() {
            var attributes = [];
            ElementProperties.forEach(function (elOption, constructor, elName) {
              if (constructor === target && elOption.observed) {
                attributes.push(elName);
              }
            });
            return attributes;
          }
        }, {
          key: "isBooleanProperty",
          value: function isBooleanProperty(propertyName) {
            var isBoolean = false;
            ElementProperties.forEach(function (elOption, constructor, elName) {
              if (constructor === target && elOption.type === Boolean && propertyName === elName) {
                isBoolean = true;
                return isBoolean;
              }
            });
            return isBoolean;
          }
        }]);
        return NewQuarkElement;
      }(target);
      if (!customElements.get(tag)) {
        customElements.define(tag, NewQuarkElement);
      }
    };
  }
  var QuarkElement = /*#__PURE__*/function (_HTMLElement) {
    _inherits(QuarkElement, _HTMLElement);
    var _super2 = _createSuper(QuarkElement);
    function QuarkElement() {
      var _this2;
      _classCallCheck(this, QuarkElement);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this2 = _super2.call.apply(_super2, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this2), "eventController", new EventController());
      _defineProperty(_assertThisInitialized(_this2), "rootPatch", function (newRootVNode) {
        if (_this2.shadowRoot) {
          S(newRootVNode, _this2.shadowRoot);
        }
      });
      _defineProperty(_assertThisInitialized(_this2), "delayPatch", delay(_this2.rootPatch));
      _defineProperty(_assertThisInitialized(_this2), "$on", function (eventName, eventHandler, el) {
        return _this2.eventController.bindListener(el || _assertThisInitialized(_this2), eventName, eventHandler);
      });
      return _this2;
    }
    _createClass(QuarkElement, [{
      key: "getStyles",
      value: function getStyles() {
        return '';
      }
    }, {
      key: "getRootEl",
      value: function getRootEl() {
        var _this$shadowRoot;
        return [].slice.call(((_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.children) || []).slice(1);
      }
    }, {
      key: "_render",
      value: function _render() {
        var newRootVNode = this.render();
        if (newRootVNode) {
          this.rootPatch(newRootVNode);
        }
      }
    }, {
      key: "_updateProperty",
      value: function _updateProperty() {
        var _this3 = this;
        this.constructor.observedAttributes.forEach(function (propertyName) {
          _this3[propertyName] = _this3[propertyName];
        });
      }
    }, {
      key: "_updateBooleanProperty",
      value: function _updateBooleanProperty(propertyName) {
        if (this.constructor.isBooleanProperty(propertyName)) {
          if (!this[propertyName]) {
            this[propertyName] = this[propertyName];
          }
        }
      }
    }, {
      key: "$emit",
      value: function $emit(eventName, customEventInit) {
        return this.dispatchEvent(new CustomEvent(eventName, Object.assign({
          bubbles: true
        }, customEventInit)));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() { }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() { }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(propName, oldValue, newValue) {
        return oldValue !== newValue;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(propName, oldValue, newValue) { }
    }, {
      key: "render",
      value: function render() {
        return '';
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this._updateProperty();
        this._render();
        if (typeof this.componentDidMount === 'function') {
          this.componentDidMount();
        }
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldValue, value) {
        var newValue = this[name] || value;
        if (typeof this.shouldComponentUpdate === 'function') {
          if (!this.shouldComponentUpdate(name, oldValue, newValue)) {
            return;
          }
        }
        this._render();
        if (typeof this.componentDidUpdate === 'function') {
          this.componentDidUpdate(name, oldValue, newValue);
        }
        if (value !== oldValue) {
          this._updateBooleanProperty(name);
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (typeof this.componentWillUnmount === 'function') {
          this.componentWillUnmount();
        }
        this.eventController.removeAllListener();
        this.rootPatch(null);
      }
    }], [{
      key: "getPropertyDescriptor",
      value: function getPropertyDescriptor(name, options) {
        return function (defaultValue) {
          return {
            get: function get() {
              var val = this.getAttribute(name);
              if (!isEmpty(defaultValue)) {
                if (isEmpty(val) && (options.type !== Boolean || val !== '')) {
                  return defaultValue;
                }
              }
              if (typeof options.converter === 'function') {
                val = options.converter(val, options.type);
              }
              return val;
            },
            set: function set(value) {
              var val = value;
              if (typeof options.converter === 'function') {
                val = options.converter(value, options.type);
              }
              if (val) {
                if (typeof val === "boolean") {
                  this.setAttribute(name, '');
                } else {
                  this.setAttribute(name, val);
                }
              } else {
                this.removeAttribute(name);
              }
            },
            configurable: true,
            enumerable: true
          };
        };
      }
    }, {
      key: "getStateDescriptor",
      value: function getStateDescriptor() {
        return function (defaultValue) {
          var _value = defaultValue;
          return {
            get: function get() {
              return _value;
            },
            set: function set(value) {
              _value = value;
              this._render();
            },
            configurable: true,
            enumerable: true
          };
        };
      }
    }, {
      key: "createProperty",
      value: function createProperty(name, options) {
        var newOpt = Object.assign({}, defaultPropertyDeclaration, options);
        ElementProperties.set(this, name, newOpt);
        Descriptors.set(this, name, this.getPropertyDescriptor(name, newOpt));
      }
    }, {
      key: "createState",
      value: function createState(name) {
        Descriptors.set(this, name, this.getStateDescriptor());
      }
    }]);
    return QuarkElement;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  _defineProperty(QuarkElement, "h", v);

  exports.Fragment = Fragment;
  exports.createRef = p;
  exports.customElement = customElement;
  exports["default"] = QuarkElement;
  exports.property = property;
  exports.state = state;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
