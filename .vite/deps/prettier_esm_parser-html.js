import "./chunk-YGAUDZUZ.js";

// node_modules/prettier/esm/parser-html.mjs
var y = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var ue = y((Gl, Wr) => {
  var qe = function(e) {
    return e && e.Math == Math && e;
  };
  Wr.exports = qe(typeof globalThis == "object" && globalThis) || qe(typeof window == "object" && window) || qe(typeof self == "object" && self) || qe(typeof global == "object" && global) || function() {
    return this;
  }() || Function("return this")();
});
var ae = y((Vl, Yr) => {
  Yr.exports = function(e) {
    try {
      return !!e();
    } catch {
      return true;
    }
  };
});
var De = y((Xl, Qr) => {
  var vs = ae();
  Qr.exports = !vs(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] != 7;
  });
});
var Ie = y((Hl, Kr) => {
  var _s = ae();
  Kr.exports = !_s(function() {
    var e = (function() {
    }).bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  });
});
var ce = y((zl, Jr) => {
  var Ss = Ie(), Re = Function.prototype.call;
  Jr.exports = Ss ? Re.bind(Re) : function() {
    return Re.apply(Re, arguments);
  };
});
var uu = y((ru) => {
  "use strict";
  var Zr = {}.propertyIsEnumerable, eu = Object.getOwnPropertyDescriptor, ys = eu && !Zr.call({ 1: 2 }, 1);
  ru.f = ys ? function(r) {
    var u = eu(this, r);
    return !!u && u.enumerable;
  } : Zr;
});
var xe = y((Yl, tu) => {
  tu.exports = function(e, r) {
    return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: r };
  };
});
var te = y((Ql, iu) => {
  var nu = Ie(), su = Function.prototype, rr = su.call, Ts = nu && su.bind.bind(rr, rr);
  iu.exports = nu ? Ts : function(e) {
    return function() {
      return rr.apply(e, arguments);
    };
  };
});
var Ae = y((Kl, ou) => {
  var au = te(), Bs = au({}.toString), bs = au("".slice);
  ou.exports = function(e) {
    return bs(Bs(e), 8, -1);
  };
});
var lu = y((Jl, Du) => {
  var ws = te(), Ns = ae(), Os = Ae(), ur = Object, qs = ws("".split);
  Du.exports = Ns(function() {
    return !ur("z").propertyIsEnumerable(0);
  }) ? function(e) {
    return Os(e) == "String" ? qs(e, "") : ur(e);
  } : ur;
});
var Pe = y((Zl, cu) => {
  cu.exports = function(e) {
    return e == null;
  };
});
var tr = y((ec, hu) => {
  var Is = Pe(), Rs = TypeError;
  hu.exports = function(e) {
    if (Is(e))
      throw Rs("Can't call method on " + e);
    return e;
  };
});
var ke = y((rc, pu) => {
  var xs = lu(), Ps = tr();
  pu.exports = function(e) {
    return xs(Ps(e));
  };
});
var sr = y((uc, fu) => {
  var nr = typeof document == "object" && document.all, ks = typeof nr > "u" && nr !== void 0;
  fu.exports = { all: nr, IS_HTMLDDA: ks };
});
var ee = y((tc, Eu) => {
  var du = sr(), Ls = du.all;
  Eu.exports = du.IS_HTMLDDA ? function(e) {
    return typeof e == "function" || e === Ls;
  } : function(e) {
    return typeof e == "function";
  };
});
var he = y((nc, gu) => {
  var Cu = ee(), mu = sr(), $s = mu.all;
  gu.exports = mu.IS_HTMLDDA ? function(e) {
    return typeof e == "object" ? e !== null : Cu(e) || e === $s;
  } : function(e) {
    return typeof e == "object" ? e !== null : Cu(e);
  };
});
var ve = y((sc, Fu) => {
  var ir = ue(), Ms = ee(), js = function(e) {
    return Ms(e) ? e : void 0;
  };
  Fu.exports = function(e, r) {
    return arguments.length < 2 ? js(ir[e]) : ir[e] && ir[e][r];
  };
});
var ar = y((ic, Au) => {
  var Us = te();
  Au.exports = Us({}.isPrototypeOf);
});
var _u = y((ac, vu) => {
  var Gs = ve();
  vu.exports = Gs("navigator", "userAgent") || "";
});
var Nu = y((oc, wu) => {
  var bu = ue(), or = _u(), Su = bu.process, yu = bu.Deno, Tu = Su && Su.versions || yu && yu.version, Bu = Tu && Tu.v8, ne, Le;
  Bu && (ne = Bu.split("."), Le = ne[0] > 0 && ne[0] < 4 ? 1 : +(ne[0] + ne[1]));
  !Le && or && (ne = or.match(/Edge\/(\d+)/), (!ne || ne[1] >= 74) && (ne = or.match(/Chrome\/(\d+)/), ne && (Le = +ne[1])));
  wu.exports = Le;
});
var Dr = y((Dc, qu) => {
  var Ou = Nu(), Vs = ae();
  qu.exports = !!Object.getOwnPropertySymbols && !Vs(function() {
    var e = Symbol();
    return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Ou && Ou < 41;
  });
});
var lr = y((lc, Iu) => {
  var Xs = Dr();
  Iu.exports = Xs && !Symbol.sham && typeof Symbol.iterator == "symbol";
});
var cr = y((cc, Ru) => {
  var Hs = ve(), zs = ee(), Ws = ar(), Ys = lr(), Qs = Object;
  Ru.exports = Ys ? function(e) {
    return typeof e == "symbol";
  } : function(e) {
    var r = Hs("Symbol");
    return zs(r) && Ws(r.prototype, Qs(e));
  };
});
var $e = y((hc, xu) => {
  var Ks = String;
  xu.exports = function(e) {
    try {
      return Ks(e);
    } catch {
      return "Object";
    }
  };
});
var _e = y((pc, Pu) => {
  var Js = ee(), Zs = $e(), ei = TypeError;
  Pu.exports = function(e) {
    if (Js(e))
      return e;
    throw ei(Zs(e) + " is not a function");
  };
});
var Me = y((fc, ku) => {
  var ri = _e(), ui = Pe();
  ku.exports = function(e, r) {
    var u = e[r];
    return ui(u) ? void 0 : ri(u);
  };
});
var $u = y((dc, Lu) => {
  var hr = ce(), pr = ee(), fr = he(), ti = TypeError;
  Lu.exports = function(e, r) {
    var u, n;
    if (r === "string" && pr(u = e.toString) && !fr(n = hr(u, e)) || pr(u = e.valueOf) && !fr(n = hr(u, e)) || r !== "string" && pr(u = e.toString) && !fr(n = hr(u, e)))
      return n;
    throw ti("Can't convert object to primitive value");
  };
});
var ju = y((Ec, Mu) => {
  Mu.exports = false;
});
var je = y((Cc, Gu) => {
  var Uu = ue(), ni = Object.defineProperty;
  Gu.exports = function(e, r) {
    try {
      ni(Uu, e, { value: r, configurable: true, writable: true });
    } catch {
      Uu[e] = r;
    }
    return r;
  };
});
var Ue = y((mc, Xu) => {
  var si = ue(), ii = je(), Vu = "__core-js_shared__", ai = si[Vu] || ii(Vu, {});
  Xu.exports = ai;
});
var dr = y((gc, zu) => {
  var oi = ju(), Hu = Ue();
  (zu.exports = function(e, r) {
    return Hu[e] || (Hu[e] = r !== void 0 ? r : {});
  })("versions", []).push({ version: "3.26.1", mode: oi ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
});
var Er = y((Fc, Wu) => {
  var Di = tr(), li = Object;
  Wu.exports = function(e) {
    return li(Di(e));
  };
});
var le = y((Ac, Yu) => {
  var ci = te(), hi = Er(), pi = ci({}.hasOwnProperty);
  Yu.exports = Object.hasOwn || function(r, u) {
    return pi(hi(r), u);
  };
});
var Cr = y((vc, Qu) => {
  var fi = te(), di = 0, Ei = Math.random(), Ci = fi(1 .toString);
  Qu.exports = function(e) {
    return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Ci(++di + Ei, 36);
  };
});
var fe = y((_c, rt) => {
  var mi = ue(), gi = dr(), Ku = le(), Fi = Cr(), Ju = Dr(), et = lr(), Ce = gi("wks"), pe = mi.Symbol, Zu = pe && pe.for, Ai = et ? pe : pe && pe.withoutSetter || Fi;
  rt.exports = function(e) {
    if (!Ku(Ce, e) || !(Ju || typeof Ce[e] == "string")) {
      var r = "Symbol." + e;
      Ju && Ku(pe, e) ? Ce[e] = pe[e] : et && Zu ? Ce[e] = Zu(r) : Ce[e] = Ai(r);
    }
    return Ce[e];
  };
});
var st = y((Sc, nt) => {
  var vi = ce(), ut = he(), tt = cr(), _i = Me(), Si = $u(), yi = fe(), Ti = TypeError, Bi = yi("toPrimitive");
  nt.exports = function(e, r) {
    if (!ut(e) || tt(e))
      return e;
    var u = _i(e, Bi), n;
    if (u) {
      if (r === void 0 && (r = "default"), n = vi(u, e, r), !ut(n) || tt(n))
        return n;
      throw Ti("Can't convert object to primitive value");
    }
    return r === void 0 && (r = "number"), Si(e, r);
  };
});
var Ge = y((yc, it) => {
  var bi = st(), wi = cr();
  it.exports = function(e) {
    var r = bi(e, "string");
    return wi(r) ? r : r + "";
  };
});
var Dt = y((Tc, ot) => {
  var Ni = ue(), at = he(), mr = Ni.document, Oi = at(mr) && at(mr.createElement);
  ot.exports = function(e) {
    return Oi ? mr.createElement(e) : {};
  };
});
var gr = y((Bc, lt) => {
  var qi = De(), Ii = ae(), Ri = Dt();
  lt.exports = !qi && !Ii(function() {
    return Object.defineProperty(Ri("div"), "a", { get: function() {
      return 7;
    } }).a != 7;
  });
});
var Fr = y((ht) => {
  var xi = De(), Pi = ce(), ki = uu(), Li = xe(), $i = ke(), Mi = Ge(), ji = le(), Ui = gr(), ct = Object.getOwnPropertyDescriptor;
  ht.f = xi ? ct : function(r, u) {
    if (r = $i(r), u = Mi(u), Ui)
      try {
        return ct(r, u);
      } catch {
      }
    if (ji(r, u))
      return Li(!Pi(ki.f, r, u), r[u]);
  };
});
var ft = y((wc, pt) => {
  var Gi = De(), Vi = ae();
  pt.exports = Gi && Vi(function() {
    return Object.defineProperty(function() {
    }, "prototype", { value: 42, writable: false }).prototype != 42;
  });
});
var me = y((Nc, dt) => {
  var Xi = he(), Hi = String, zi = TypeError;
  dt.exports = function(e) {
    if (Xi(e))
      return e;
    throw zi(Hi(e) + " is not an object");
  };
});
var Se = y((Ct) => {
  var Wi = De(), Yi = gr(), Qi = ft(), Ve = me(), Et = Ge(), Ki = TypeError, Ar = Object.defineProperty, Ji = Object.getOwnPropertyDescriptor, vr = "enumerable", _r = "configurable", Sr = "writable";
  Ct.f = Wi ? Qi ? function(r, u, n) {
    if (Ve(r), u = Et(u), Ve(n), typeof r == "function" && u === "prototype" && "value" in n && Sr in n && !n[Sr]) {
      var D = Ji(r, u);
      D && D[Sr] && (r[u] = n.value, n = { configurable: _r in n ? n[_r] : D[_r], enumerable: vr in n ? n[vr] : D[vr], writable: false });
    }
    return Ar(r, u, n);
  } : Ar : function(r, u, n) {
    if (Ve(r), u = Et(u), Ve(n), Yi)
      try {
        return Ar(r, u, n);
      } catch {
      }
    if ("get" in n || "set" in n)
      throw Ki("Accessors not supported");
    return "value" in n && (r[u] = n.value), r;
  };
});
var yr = y((qc, mt) => {
  var Zi = De(), ea = Se(), ra = xe();
  mt.exports = Zi ? function(e, r, u) {
    return ea.f(e, r, ra(1, u));
  } : function(e, r, u) {
    return e[r] = u, e;
  };
});
var At = y((Ic, Ft) => {
  var Tr = De(), ua = le(), gt = Function.prototype, ta = Tr && Object.getOwnPropertyDescriptor, Br = ua(gt, "name"), na = Br && (function() {
  }).name === "something", sa = Br && (!Tr || Tr && ta(gt, "name").configurable);
  Ft.exports = { EXISTS: Br, PROPER: na, CONFIGURABLE: sa };
});
var wr = y((Rc, vt) => {
  var ia = te(), aa = ee(), br = Ue(), oa = ia(Function.toString);
  aa(br.inspectSource) || (br.inspectSource = function(e) {
    return oa(e);
  });
  vt.exports = br.inspectSource;
});
var yt = y((xc, St) => {
  var Da = ue(), la = ee(), _t = Da.WeakMap;
  St.exports = la(_t) && /native code/.test(String(_t));
});
var bt = y((Pc, Bt) => {
  var ca = dr(), ha = Cr(), Tt = ca("keys");
  Bt.exports = function(e) {
    return Tt[e] || (Tt[e] = ha(e));
  };
});
var Nr = y((kc, wt) => {
  wt.exports = {};
});
var It = y((Lc, qt) => {
  var pa = yt(), Ot = ue(), fa = he(), da = yr(), Or = le(), qr = Ue(), Ea = bt(), Ca = Nr(), Nt = "Object already initialized", Ir = Ot.TypeError, ma = Ot.WeakMap, Xe, ye, He, ga = function(e) {
    return He(e) ? ye(e) : Xe(e, {});
  }, Fa = function(e) {
    return function(r) {
      var u;
      if (!fa(r) || (u = ye(r)).type !== e)
        throw Ir("Incompatible receiver, " + e + " required");
      return u;
    };
  };
  pa || qr.state ? (se = qr.state || (qr.state = new ma()), se.get = se.get, se.has = se.has, se.set = se.set, Xe = function(e, r) {
    if (se.has(e))
      throw Ir(Nt);
    return r.facade = e, se.set(e, r), r;
  }, ye = function(e) {
    return se.get(e) || {};
  }, He = function(e) {
    return se.has(e);
  }) : (de = Ea("state"), Ca[de] = true, Xe = function(e, r) {
    if (Or(e, de))
      throw Ir(Nt);
    return r.facade = e, da(e, de, r), r;
  }, ye = function(e) {
    return Or(e, de) ? e[de] : {};
  }, He = function(e) {
    return Or(e, de);
  });
  var se, de;
  qt.exports = { set: Xe, get: ye, has: He, enforce: ga, getterFor: Fa };
});
var Pt = y(($c, xt) => {
  var Aa = ae(), va = ee(), ze = le(), Rr = De(), _a = At().CONFIGURABLE, Sa = wr(), Rt = It(), ya = Rt.enforce, Ta = Rt.get, We = Object.defineProperty, Ba = Rr && !Aa(function() {
    return We(function() {
    }, "length", { value: 8 }).length !== 8;
  }), ba = String(String).split("String"), wa = xt.exports = function(e, r, u) {
    String(r).slice(0, 7) === "Symbol(" && (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), u && u.getter && (r = "get " + r), u && u.setter && (r = "set " + r), (!ze(e, "name") || _a && e.name !== r) && (Rr ? We(e, "name", { value: r, configurable: true }) : e.name = r), Ba && u && ze(u, "arity") && e.length !== u.arity && We(e, "length", { value: u.arity });
    try {
      u && ze(u, "constructor") && u.constructor ? Rr && We(e, "prototype", { writable: false }) : e.prototype && (e.prototype = void 0);
    } catch {
    }
    var n = ya(e);
    return ze(n, "source") || (n.source = ba.join(typeof r == "string" ? r : "")), e;
  };
  Function.prototype.toString = wa(function() {
    return va(this) && Ta(this).source || Sa(this);
  }, "toString");
});
var Lt = y((Mc, kt) => {
  var Na = ee(), Oa = Se(), qa = Pt(), Ia = je();
  kt.exports = function(e, r, u, n) {
    n || (n = {});
    var D = n.enumerable, s = n.name !== void 0 ? n.name : r;
    if (Na(u) && qa(u, s, n), n.global)
      D ? e[r] = u : Ia(r, u);
    else {
      try {
        n.unsafe ? e[r] && (D = true) : delete e[r];
      } catch {
      }
      D ? e[r] = u : Oa.f(e, r, { value: u, enumerable: false, configurable: !n.nonConfigurable, writable: !n.nonWritable });
    }
    return e;
  };
});
var Mt = y((jc, $t) => {
  var Ra = Math.ceil, xa = Math.floor;
  $t.exports = Math.trunc || function(r) {
    var u = +r;
    return (u > 0 ? xa : Ra)(u);
  };
});
var xr = y((Uc, jt) => {
  var Pa = Mt();
  jt.exports = function(e) {
    var r = +e;
    return r !== r || r === 0 ? 0 : Pa(r);
  };
});
var Gt = y((Gc, Ut) => {
  var ka = xr(), La = Math.max, $a = Math.min;
  Ut.exports = function(e, r) {
    var u = ka(e);
    return u < 0 ? La(u + r, 0) : $a(u, r);
  };
});
var Xt = y((Vc, Vt) => {
  var Ma = xr(), ja = Math.min;
  Vt.exports = function(e) {
    return e > 0 ? ja(Ma(e), 9007199254740991) : 0;
  };
});
var Te = y((Xc, Ht) => {
  var Ua = Xt();
  Ht.exports = function(e) {
    return Ua(e.length);
  };
});
var Yt = y((Hc, Wt) => {
  var Ga = ke(), Va = Gt(), Xa = Te(), zt = function(e) {
    return function(r, u, n) {
      var D = Ga(r), s = Xa(D), a = Va(n, s), f;
      if (e && u != u) {
        for (; s > a; )
          if (f = D[a++], f != f)
            return true;
      } else
        for (; s > a; a++)
          if ((e || a in D) && D[a] === u)
            return e || a || 0;
      return !e && -1;
    };
  };
  Wt.exports = { includes: zt(true), indexOf: zt(false) };
});
var Jt = y((zc, Kt) => {
  var Ha = te(), Pr = le(), za = ke(), Wa = Yt().indexOf, Ya = Nr(), Qt = Ha([].push);
  Kt.exports = function(e, r) {
    var u = za(e), n = 0, D = [], s;
    for (s in u)
      !Pr(Ya, s) && Pr(u, s) && Qt(D, s);
    for (; r.length > n; )
      Pr(u, s = r[n++]) && (~Wa(D, s) || Qt(D, s));
    return D;
  };
});
var en = y((Wc, Zt) => {
  Zt.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
});
var un = y((rn) => {
  var Qa = Jt(), Ka = en(), Ja = Ka.concat("length", "prototype");
  rn.f = Object.getOwnPropertyNames || function(r) {
    return Qa(r, Ja);
  };
});
var nn = y((tn) => {
  tn.f = Object.getOwnPropertySymbols;
});
var an = y((Kc, sn) => {
  var Za = ve(), eo = te(), ro = un(), uo = nn(), to = me(), no = eo([].concat);
  sn.exports = Za("Reflect", "ownKeys") || function(r) {
    var u = ro.f(to(r)), n = uo.f;
    return n ? no(u, n(r)) : u;
  };
});
var ln = y((Jc, Dn) => {
  var on = le(), so = an(), io = Fr(), ao = Se();
  Dn.exports = function(e, r, u) {
    for (var n = so(r), D = ao.f, s = io.f, a = 0; a < n.length; a++) {
      var f = n[a];
      !on(e, f) && !(u && on(u, f)) && D(e, f, s(r, f));
    }
  };
});
var hn = y((Zc, cn) => {
  var oo = ae(), Do = ee(), lo = /#|\.prototype\./, Be = function(e, r) {
    var u = ho[co(e)];
    return u == fo ? true : u == po ? false : Do(r) ? oo(r) : !!r;
  }, co = Be.normalize = function(e) {
    return String(e).replace(lo, ".").toLowerCase();
  }, ho = Be.data = {}, po = Be.NATIVE = "N", fo = Be.POLYFILL = "P";
  cn.exports = Be;
});
var Ye = y((e2, pn) => {
  var kr = ue(), Eo = Fr().f, Co = yr(), mo = Lt(), go = je(), Fo = ln(), Ao = hn();
  pn.exports = function(e, r) {
    var u = e.target, n = e.global, D = e.stat, s, a, f, c, v, i;
    if (n ? a = kr : D ? a = kr[u] || go(u, {}) : a = (kr[u] || {}).prototype, a)
      for (f in r) {
        if (v = r[f], e.dontCallGetSet ? (i = Eo(a, f), c = i && i.value) : c = a[f], s = Ao(n ? f : u + (D ? "." : "#") + f, e.forced), !s && c !== void 0) {
          if (typeof v == typeof c)
            continue;
          Fo(v, c);
        }
        (e.sham || c && c.sham) && Co(v, "sham", true), mo(a, f, v, e);
      }
  };
});
var fn = y(() => {
  var vo = Ye(), Lr = ue();
  vo({ global: true, forced: Lr.globalThis !== Lr }, { globalThis: Lr });
});
var $r = y((t2, dn) => {
  var _o = Ae();
  dn.exports = Array.isArray || function(r) {
    return _o(r) == "Array";
  };
});
var Cn = y((n2, En) => {
  var So = TypeError, yo = 9007199254740991;
  En.exports = function(e) {
    if (e > yo)
      throw So("Maximum allowed index exceeded");
    return e;
  };
});
var gn = y((s2, mn) => {
  var To = Ae(), Bo = te();
  mn.exports = function(e) {
    if (To(e) === "Function")
      return Bo(e);
  };
});
var Mr = y((i2, An) => {
  var Fn = gn(), bo = _e(), wo = Ie(), No = Fn(Fn.bind);
  An.exports = function(e, r) {
    return bo(e), r === void 0 ? e : wo ? No(e, r) : function() {
      return e.apply(r, arguments);
    };
  };
});
var Sn = y((a2, _n) => {
  "use strict";
  var Oo = $r(), qo = Te(), Io = Cn(), Ro = Mr(), vn = function(e, r, u, n, D, s, a, f) {
    for (var c = D, v = 0, i = a ? Ro(a, f) : false, l, p; v < n; )
      v in u && (l = i ? i(u[v], v, r) : u[v], s > 0 && Oo(l) ? (p = qo(l), c = vn(e, r, l, p, c, s - 1) - 1) : (Io(c + 1), e[c] = l), c++), v++;
    return c;
  };
  _n.exports = vn;
});
var Bn = y((o2, Tn) => {
  var xo = fe(), Po = xo("toStringTag"), yn = {};
  yn[Po] = "z";
  Tn.exports = String(yn) === "[object z]";
});
var jr = y((D2, bn) => {
  var ko = Bn(), Lo = ee(), Qe = Ae(), $o = fe(), Mo = $o("toStringTag"), jo = Object, Uo = Qe(function() {
    return arguments;
  }()) == "Arguments", Go = function(e, r) {
    try {
      return e[r];
    } catch {
    }
  };
  bn.exports = ko ? Qe : function(e) {
    var r, u, n;
    return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (u = Go(r = jo(e), Mo)) == "string" ? u : Uo ? Qe(r) : (n = Qe(r)) == "Object" && Lo(r.callee) ? "Arguments" : n;
  };
});
var Rn = y((l2, In) => {
  var Vo = te(), Xo = ae(), wn = ee(), Ho = jr(), zo = ve(), Wo = wr(), Nn = function() {
  }, Yo = [], On = zo("Reflect", "construct"), Ur = /^\s*(?:class|function)\b/, Qo = Vo(Ur.exec), Ko = !Ur.exec(Nn), be = function(r) {
    if (!wn(r))
      return false;
    try {
      return On(Nn, Yo, r), true;
    } catch {
      return false;
    }
  }, qn = function(r) {
    if (!wn(r))
      return false;
    switch (Ho(r)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return Ko || !!Qo(Ur, Wo(r));
    } catch {
      return true;
    }
  };
  qn.sham = true;
  In.exports = !On || Xo(function() {
    var e;
    return be(be.call) || !be(Object) || !be(function() {
      e = true;
    }) || e;
  }) ? qn : be;
});
var Ln = y((c2, kn) => {
  var xn = $r(), Jo = Rn(), Zo = he(), eD = fe(), rD = eD("species"), Pn = Array;
  kn.exports = function(e) {
    var r;
    return xn(e) && (r = e.constructor, Jo(r) && (r === Pn || xn(r.prototype)) ? r = void 0 : Zo(r) && (r = r[rD], r === null && (r = void 0))), r === void 0 ? Pn : r;
  };
});
var Mn = y((h2, $n) => {
  var uD = Ln();
  $n.exports = function(e, r) {
    return new (uD(e))(r === 0 ? 0 : r);
  };
});
var Gr = y((p2, jn) => {
  jn.exports = {};
});
var Gn = y((f2, Un) => {
  var DD = fe(), lD = Gr(), cD = DD("iterator"), hD = Array.prototype;
  Un.exports = function(e) {
    return e !== void 0 && (lD.Array === e || hD[cD] === e);
  };
});
var Vr = y((d2, Xn) => {
  var pD = jr(), Vn = Me(), fD = Pe(), dD = Gr(), ED = fe(), CD = ED("iterator");
  Xn.exports = function(e) {
    if (!fD(e))
      return Vn(e, CD) || Vn(e, "@@iterator") || dD[pD(e)];
  };
});
var zn = y((E2, Hn) => {
  var mD = ce(), gD = _e(), FD = me(), AD = $e(), vD = Vr(), _D = TypeError;
  Hn.exports = function(e, r) {
    var u = arguments.length < 2 ? vD(e) : r;
    if (gD(u))
      return FD(mD(u, e));
    throw _D(AD(e) + " is not iterable");
  };
});
var Qn = y((C2, Yn) => {
  var SD = ce(), Wn = me(), yD = Me();
  Yn.exports = function(e, r, u) {
    var n, D;
    Wn(e);
    try {
      if (n = yD(e, "return"), !n) {
        if (r === "throw")
          throw u;
        return u;
      }
      n = SD(n, e);
    } catch (s) {
      D = true, n = s;
    }
    if (r === "throw")
      throw u;
    if (D)
      throw n;
    return Wn(n), u;
  };
});
var rs = y((m2, es) => {
  var TD = Mr(), BD = ce(), bD = me(), wD = $e(), ND = Gn(), OD = Te(), Kn = ar(), qD = zn(), ID = Vr(), Jn = Qn(), RD = TypeError, Ke = function(e, r) {
    this.stopped = e, this.result = r;
  }, Zn = Ke.prototype;
  es.exports = function(e, r, u) {
    var n = u && u.that, D = !!(u && u.AS_ENTRIES), s = !!(u && u.IS_RECORD), a = !!(u && u.IS_ITERATOR), f = !!(u && u.INTERRUPTED), c = TD(r, n), v, i, l, p, m, C, g, B = function(F) {
      return v && Jn(v, "normal", F), new Ke(true, F);
    }, O = function(F) {
      return D ? (bD(F), f ? c(F[0], F[1], B) : c(F[0], F[1])) : f ? c(F, B) : c(F);
    };
    if (s)
      v = e.iterator;
    else if (a)
      v = e;
    else {
      if (i = ID(e), !i)
        throw RD(wD(e) + " is not iterable");
      if (ND(i)) {
        for (l = 0, p = OD(e); p > l; l++)
          if (m = O(e[l]), m && Kn(Zn, m))
            return m;
        return new Ke(false);
      }
      v = qD(e, i);
    }
    for (C = s ? e.next : v.next; !(g = BD(C, v)).done; ) {
      try {
        m = O(g.value);
      } catch (F) {
        Jn(v, "throw", F);
      }
      if (typeof m == "object" && m && Kn(Zn, m))
        return m;
    }
    return new Ke(false);
  };
});
var ts = y((g2, us) => {
  "use strict";
  var xD = Ge(), PD = Se(), kD = xe();
  us.exports = function(e, r, u) {
    var n = xD(r);
    n in e ? PD.f(e, n, kD(0, u)) : e[n] = u;
  };
});
fn();
var tD = Ye();
var nD = Sn();
var sD = _e();
var iD = Er();
var aD = Te();
var oD = Mn();
tD({ target: "Array", proto: true }, { flatMap: function(r) {
  var u = iD(this), n = aD(u), D;
  return sD(r), D = oD(u, 0), D.length = nD(D, u, u, n, 0, 1, r, arguments.length > 1 ? arguments[1] : void 0), D;
} });
var LD = Ye();
var $D = rs();
var MD = ts();
LD({ target: "Object", stat: true }, { fromEntries: function(r) {
  var u = {};
  return $D(r, function(n, D) {
    MD(u, n, D);
  }, { AS_ENTRIES: true }), u;
} });
var jD = ["cliName", "cliCategory", "cliDescription"];
function UD(e, r) {
  if (e == null)
    return {};
  var u = GD(e, r), n, D;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (D = 0; D < s.length; D++)
      n = s[D], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (u[n] = e[n]);
  }
  return u;
}
function GD(e, r) {
  if (e == null)
    return {};
  var u = {}, n = Object.keys(e), D, s;
  for (s = 0; s < n.length; s++)
    D = n[s], !(r.indexOf(D) >= 0) && (u[D] = e[D]);
  return u;
}
var VD = Object.create;
var Je = Object.defineProperty;
var XD = Object.getOwnPropertyDescriptor;
var Xr = Object.getOwnPropertyNames;
var HD = Object.getPrototypeOf;
var zD = Object.prototype.hasOwnProperty;
var ge = (e, r) => function() {
  return e && (r = (0, e[Xr(e)[0]])(e = 0)), r;
};
var I = (e, r) => function() {
  return r || (0, e[Xr(e)[0]])((r = { exports: {} }).exports, r), r.exports;
};
var is = (e, r) => {
  for (var u in r)
    Je(e, u, { get: r[u], enumerable: true });
};
var as = (e, r, u, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let D of Xr(r))
      !zD.call(e, D) && D !== u && Je(e, D, { get: () => r[D], enumerable: !(n = XD(r, D)) || n.enumerable });
  return e;
};
var WD = (e, r, u) => (u = e != null ? VD(HD(e)) : {}, as(r || !e || !e.__esModule ? Je(u, "default", { value: e, enumerable: true }) : u, e));
var os = (e) => as(Je({}, "__esModule", { value: true }), e);
var we;
var N = ge({ "<define:process>"() {
  we = { env: {}, argv: [] };
} });
var Ds = I({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
  function r(f) {
    return f >= e.$TAB && f <= e.$SPACE || f == e.$NBSP;
  }
  e.isWhitespace = r;
  function u(f) {
    return e.$0 <= f && f <= e.$9;
  }
  e.isDigit = u;
  function n(f) {
    return f >= e.$a && f <= e.$z || f >= e.$A && f <= e.$Z;
  }
  e.isAsciiLetter = n;
  function D(f) {
    return f >= e.$a && f <= e.$f || f >= e.$A && f <= e.$F || u(f);
  }
  e.isAsciiHexDigit = D;
  function s(f) {
    return f === e.$LF || f === e.$CR;
  }
  e.isNewLine = s;
  function a(f) {
    return e.$0 <= f && f <= e.$7;
  }
  e.isOctalDigit = a;
} });
var YD = I({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = class {
    constructor(n, D, s) {
      this.filePath = n, this.name = D, this.members = s;
    }
    assertNoMembers() {
      if (this.members.length)
        throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
    }
  };
  e.StaticSymbol = r;
  var u = class {
    constructor() {
      this.cache = /* @__PURE__ */ new Map();
    }
    get(n, D, s) {
      s = s || [];
      let a = s.length ? `.${s.join(".")}` : "", f = `"${n}".${D}${a}`, c = this.cache.get(f);
      return c || (c = new r(n, D, s), this.cache.set(f, c)), c;
    }
  };
  e.StaticSymbolCache = u;
} });
var QD = I({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = /-+([a-z0-9])/g;
  function u(o) {
    return o.replace(r, function() {
      for (var d = arguments.length, h = new Array(d), A = 0; A < d; A++)
        h[A] = arguments[A];
      return h[1].toUpperCase();
    });
  }
  e.dashCaseToCamelCase = u;
  function n(o, d) {
    return s(o, ":", d);
  }
  e.splitAtColon = n;
  function D(o, d) {
    return s(o, ".", d);
  }
  e.splitAtPeriod = D;
  function s(o, d, h) {
    let A = o.indexOf(d);
    return A == -1 ? h : [o.slice(0, A).trim(), o.slice(A + 1).trim()];
  }
  function a(o, d, h) {
    return Array.isArray(o) ? d.visitArray(o, h) : F(o) ? d.visitStringMap(o, h) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? d.visitPrimitive(o, h) : d.visitOther(o, h);
  }
  e.visitValue = a;
  function f(o) {
    return o != null;
  }
  e.isDefined = f;
  function c(o) {
    return o === void 0 ? null : o;
  }
  e.noUndefined = c;
  var v = class {
    visitArray(o, d) {
      return o.map((h) => a(h, this, d));
    }
    visitStringMap(o, d) {
      let h = {};
      return Object.keys(o).forEach((A) => {
        h[A] = a(o[A], this, d);
      }), h;
    }
    visitPrimitive(o, d) {
      return o;
    }
    visitOther(o, d) {
      return o;
    }
  };
  e.ValueTransformer = v, e.SyncAsync = { assertSync: (o) => {
    if (R(o))
      throw new Error("Illegal state: value cannot be a promise");
    return o;
  }, then: (o, d) => R(o) ? o.then(d) : d(o), all: (o) => o.some(R) ? Promise.all(o) : o };
  function i(o) {
    throw new Error(`Internal Error: ${o}`);
  }
  e.error = i;
  function l(o, d) {
    let h = Error(o);
    return h[p] = true, d && (h[m] = d), h;
  }
  e.syntaxError = l;
  var p = "ngSyntaxError", m = "ngParseErrors";
  function C(o) {
    return o[p];
  }
  e.isSyntaxError = C;
  function g(o) {
    return o[m] || [];
  }
  e.getParseErrors = g;
  function B(o) {
    return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
  }
  e.escapeRegExp = B;
  var O = Object.getPrototypeOf({});
  function F(o) {
    return typeof o == "object" && o !== null && Object.getPrototypeOf(o) === O;
  }
  function w(o) {
    let d = "";
    for (let h = 0; h < o.length; h++) {
      let A = o.charCodeAt(h);
      if (A >= 55296 && A <= 56319 && o.length > h + 1) {
        let q = o.charCodeAt(h + 1);
        q >= 56320 && q <= 57343 && (h++, A = (A - 55296 << 10) + q - 56320 + 65536);
      }
      A <= 127 ? d += String.fromCharCode(A) : A <= 2047 ? d += String.fromCharCode(A >> 6 & 31 | 192, A & 63 | 128) : A <= 65535 ? d += String.fromCharCode(A >> 12 | 224, A >> 6 & 63 | 128, A & 63 | 128) : A <= 2097151 && (d += String.fromCharCode(A >> 18 & 7 | 240, A >> 12 & 63 | 128, A >> 6 & 63 | 128, A & 63 | 128));
    }
    return d;
  }
  e.utf8Encode = w;
  function b(o) {
    if (typeof o == "string")
      return o;
    if (o instanceof Array)
      return "[" + o.map(b).join(", ") + "]";
    if (o == null)
      return "" + o;
    if (o.overriddenName)
      return `${o.overriddenName}`;
    if (o.name)
      return `${o.name}`;
    if (!o.toString)
      return "object";
    let d = o.toString();
    if (d == null)
      return "" + d;
    let h = d.indexOf(`
`);
    return h === -1 ? d : d.substring(0, h);
  }
  e.stringify = b;
  function M(o) {
    return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o;
  }
  e.resolveForwardRef = M;
  function R(o) {
    return !!o && typeof o.then == "function";
  }
  e.isPromise = R;
  var U = class {
    constructor(o) {
      this.full = o;
      let d = o.split(".");
      this.major = d[0], this.minor = d[1], this.patch = d.slice(2).join(".");
    }
  };
  e.Version = U;
  var k = typeof window < "u" && window, j = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, L = typeof globalThis < "u" && globalThis, t = L || k || j;
  e.global = t;
} });
var KD = I({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = YD(), u = QD(), n = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
  function D(h) {
    return h.replace(/\W/g, "_");
  }
  e.sanitizeIdentifier = D;
  var s = 0;
  function a(h) {
    if (!h || !h.reference)
      return null;
    let A = h.reference;
    if (A instanceof r.StaticSymbol)
      return A.name;
    if (A.__anonymousType)
      return A.__anonymousType;
    let q = u.stringify(A);
    return q.indexOf("(") >= 0 ? (q = `anonymous_${s++}`, A.__anonymousType = q) : q = D(q), q;
  }
  e.identifierName = a;
  function f(h) {
    let A = h.reference;
    return A instanceof r.StaticSymbol ? A.filePath : `./${u.stringify(A)}`;
  }
  e.identifierModuleUrl = f;
  function c(h, A) {
    return `View_${a({ reference: h })}_${A}`;
  }
  e.viewClassName = c;
  function v(h) {
    return `RenderType_${a({ reference: h })}`;
  }
  e.rendererTypeName = v;
  function i(h) {
    return `HostView_${a({ reference: h })}`;
  }
  e.hostViewClassName = i;
  function l(h) {
    return `${a({ reference: h })}NgFactory`;
  }
  e.componentFactoryName = l;
  var p;
  (function(h) {
    h[h.Pipe = 0] = "Pipe", h[h.Directive = 1] = "Directive", h[h.NgModule = 2] = "NgModule", h[h.Injectable = 3] = "Injectable";
  })(p = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
  function m(h) {
    return h.value != null ? D(h.value) : a(h.identifier);
  }
  e.tokenName = m;
  function C(h) {
    return h.identifier != null ? h.identifier.reference : h.value;
  }
  e.tokenReference = C;
  var g = class {
    constructor() {
      let { moduleUrl: h, styles: A, styleUrls: q } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.moduleUrl = h || null, this.styles = R(A), this.styleUrls = R(q);
    }
  };
  e.CompileStylesheetMetadata = g;
  var B = class {
    constructor(h) {
      let { encapsulation: A, template: q, templateUrl: P, htmlAst: G, styles: X, styleUrls: Q, externalStylesheets: H, animations: W, ngContentSelectors: K, interpolation: J, isInline: S, preserveWhitespaces: E } = h;
      if (this.encapsulation = A, this.template = q, this.templateUrl = P, this.htmlAst = G, this.styles = R(X), this.styleUrls = R(Q), this.externalStylesheets = R(H), this.animations = W ? k(W) : [], this.ngContentSelectors = K || [], J && J.length != 2)
        throw new Error("'interpolation' should have a start and an end symbol.");
      this.interpolation = J, this.isInline = S, this.preserveWhitespaces = E;
    }
    toSummary() {
      return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
    }
  };
  e.CompileTemplateMetadata = B;
  var O = class {
    static create(h) {
      let { isHost: A, type: q, isComponent: P, selector: G, exportAs: X, changeDetection: Q, inputs: H, outputs: W, host: K, providers: J, viewProviders: S, queries: E, guards: _, viewQueries: T, entryComponents: x, template: $, componentViewType: V, rendererType: z, componentFactory: Y } = h, ie = {}, Ee = {}, er = {};
      K != null && Object.keys(K).forEach((Z) => {
        let re = K[Z], oe = Z.match(n);
        oe === null ? er[Z] = re : oe[1] != null ? Ee[oe[1]] = re : oe[2] != null && (ie[oe[2]] = re);
      });
      let Fe = {};
      H != null && H.forEach((Z) => {
        let re = u.splitAtColon(Z, [Z, Z]);
        Fe[re[0]] = re[1];
      });
      let Oe = {};
      return W != null && W.forEach((Z) => {
        let re = u.splitAtColon(Z, [Z, Z]);
        Oe[re[0]] = re[1];
      }), new O({ isHost: A, type: q, isComponent: !!P, selector: G, exportAs: X, changeDetection: Q, inputs: Fe, outputs: Oe, hostListeners: ie, hostProperties: Ee, hostAttributes: er, providers: J, viewProviders: S, queries: E, guards: _, viewQueries: T, entryComponents: x, template: $, componentViewType: V, rendererType: z, componentFactory: Y });
    }
    constructor(h) {
      let { isHost: A, type: q, isComponent: P, selector: G, exportAs: X, changeDetection: Q, inputs: H, outputs: W, hostListeners: K, hostProperties: J, hostAttributes: S, providers: E, viewProviders: _, queries: T, guards: x, viewQueries: $, entryComponents: V, template: z, componentViewType: Y, rendererType: ie, componentFactory: Ee } = h;
      this.isHost = !!A, this.type = q, this.isComponent = P, this.selector = G, this.exportAs = X, this.changeDetection = Q, this.inputs = H, this.outputs = W, this.hostListeners = K, this.hostProperties = J, this.hostAttributes = S, this.providers = R(E), this.viewProviders = R(_), this.queries = R(T), this.guards = x, this.viewQueries = R($), this.entryComponents = R(V), this.template = z, this.componentViewType = Y, this.rendererType = ie, this.componentFactory = Ee;
    }
    toSummary() {
      return { summaryKind: p.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
    }
  };
  e.CompileDirectiveMetadata = O;
  var F = class {
    constructor(h) {
      let { type: A, name: q, pure: P } = h;
      this.type = A, this.name = q, this.pure = !!P;
    }
    toSummary() {
      return { summaryKind: p.Pipe, type: this.type, name: this.name, pure: this.pure };
    }
  };
  e.CompilePipeMetadata = F;
  var w = class {
  };
  e.CompileShallowModuleMetadata = w;
  var b = class {
    constructor(h) {
      let { type: A, providers: q, declaredDirectives: P, exportedDirectives: G, declaredPipes: X, exportedPipes: Q, entryComponents: H, bootstrapComponents: W, importedModules: K, exportedModules: J, schemas: S, transitiveModule: E, id: _ } = h;
      this.type = A || null, this.declaredDirectives = R(P), this.exportedDirectives = R(G), this.declaredPipes = R(X), this.exportedPipes = R(Q), this.providers = R(q), this.entryComponents = R(H), this.bootstrapComponents = R(W), this.importedModules = R(K), this.exportedModules = R(J), this.schemas = R(S), this.id = _ || null, this.transitiveModule = E || null;
    }
    toSummary() {
      let h = this.transitiveModule;
      return { summaryKind: p.NgModule, type: this.type, entryComponents: h.entryComponents, providers: h.providers, modules: h.modules, exportedDirectives: h.exportedDirectives, exportedPipes: h.exportedPipes };
    }
  };
  e.CompileNgModuleMetadata = b;
  var M = class {
    constructor() {
      this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
    }
    addProvider(h, A) {
      this.providers.push({ provider: h, module: A });
    }
    addDirective(h) {
      this.directivesSet.has(h.reference) || (this.directivesSet.add(h.reference), this.directives.push(h));
    }
    addExportedDirective(h) {
      this.exportedDirectivesSet.has(h.reference) || (this.exportedDirectivesSet.add(h.reference), this.exportedDirectives.push(h));
    }
    addPipe(h) {
      this.pipesSet.has(h.reference) || (this.pipesSet.add(h.reference), this.pipes.push(h));
    }
    addExportedPipe(h) {
      this.exportedPipesSet.has(h.reference) || (this.exportedPipesSet.add(h.reference), this.exportedPipes.push(h));
    }
    addModule(h) {
      this.modulesSet.has(h.reference) || (this.modulesSet.add(h.reference), this.modules.push(h));
    }
    addEntryComponent(h) {
      this.entryComponentsSet.has(h.componentType) || (this.entryComponentsSet.add(h.componentType), this.entryComponents.push(h));
    }
  };
  e.TransitiveCompileNgModuleMetadata = M;
  function R(h) {
    return h || [];
  }
  var U = class {
    constructor(h, A) {
      let { useClass: q, useValue: P, useExisting: G, useFactory: X, deps: Q, multi: H } = A;
      this.token = h, this.useClass = q || null, this.useValue = P, this.useExisting = G, this.useFactory = X || null, this.dependencies = Q || null, this.multi = !!H;
    }
  };
  e.ProviderMeta = U;
  function k(h) {
    return h.reduce((A, q) => {
      let P = Array.isArray(q) ? k(q) : q;
      return A.concat(P);
    }, []);
  }
  e.flatten = k;
  function j(h) {
    return h.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
  }
  function L(h, A, q) {
    let P;
    return q.isInline ? A.type.reference instanceof r.StaticSymbol ? P = `${A.type.reference.filePath}.${A.type.reference.name}.html` : P = `${a(h)}/${a(A.type)}.html` : P = q.templateUrl, A.type.reference instanceof r.StaticSymbol ? P : j(P);
  }
  e.templateSourceUrl = L;
  function t(h, A) {
    let q = h.moduleUrl.split(/\/\\/g), P = q[q.length - 1];
    return j(`css/${A}${P}.ngstyle.js`);
  }
  e.sharedStylesheetJitUrl = t;
  function o(h) {
    return j(`${a(h.type)}/module.ngfactory.js`);
  }
  e.ngModuleJitUrl = o;
  function d(h, A) {
    return j(`${a(h)}/${a(A.type)}.ngfactory.js`);
  }
  e.templateJitUrl = d;
} });
var Ne = I({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = Ds(), u = KD(), n = class {
    constructor(i, l, p, m) {
      this.file = i, this.offset = l, this.line = p, this.col = m;
    }
    toString() {
      return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
    }
    moveBy(i) {
      let l = this.file.content, p = l.length, m = this.offset, C = this.line, g = this.col;
      for (; m > 0 && i < 0; )
        if (m--, i++, l.charCodeAt(m) == r.$LF) {
          C--;
          let O = l.substr(0, m - 1).lastIndexOf(String.fromCharCode(r.$LF));
          g = O > 0 ? m - O : m;
        } else
          g--;
      for (; m < p && i > 0; ) {
        let B = l.charCodeAt(m);
        m++, i--, B == r.$LF ? (C++, g = 0) : g++;
      }
      return new n(this.file, m, C, g);
    }
    getContext(i, l) {
      let p = this.file.content, m = this.offset;
      if (m != null) {
        m > p.length - 1 && (m = p.length - 1);
        let C = m, g = 0, B = 0;
        for (; g < i && m > 0 && (m--, g++, !(p[m] == `
` && ++B == l)); )
          ;
        for (g = 0, B = 0; g < i && C < p.length - 1 && (C++, g++, !(p[C] == `
` && ++B == l)); )
          ;
        return { before: p.substring(m, this.offset), after: p.substring(this.offset, C + 1) };
      }
      return null;
    }
  };
  e.ParseLocation = n;
  var D = class {
    constructor(i, l) {
      this.content = i, this.url = l;
    }
  };
  e.ParseSourceFile = D;
  var s = class {
    constructor(i, l) {
      let p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      this.start = i, this.end = l, this.details = p;
    }
    toString() {
      return this.start.file.content.substring(this.start.offset, this.end.offset);
    }
  };
  e.ParseSourceSpan = s, e.EMPTY_PARSE_LOCATION = new n(new D("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new s(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
  var a;
  (function(i) {
    i[i.WARNING = 0] = "WARNING", i[i.ERROR = 1] = "ERROR";
  })(a = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
  var f = class {
    constructor(i, l) {
      let p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a.ERROR;
      this.span = i, this.msg = l, this.level = p;
    }
    contextualMessage() {
      let i = this.span.start.getContext(100, 3);
      return i ? `${this.msg} ("${i.before}[${a[this.level]} ->]${i.after}")` : this.msg;
    }
    toString() {
      let i = this.span.details ? `, ${this.span.details}` : "";
      return `${this.contextualMessage()}: ${this.span.start}${i}`;
    }
  };
  e.ParseError = f;
  function c(i, l) {
    let p = u.identifierModuleUrl(l), m = p != null ? `in ${i} ${u.identifierName(l)} in ${p}` : `in ${i} ${u.identifierName(l)}`, C = new D("", m);
    return new s(new n(C, -1, -1, -1), new n(C, -1, -1, -1));
  }
  e.typeSourceSpan = c;
  function v(i, l, p) {
    let m = `in ${i} ${l} in ${p}`, C = new D("", m);
    return new s(new n(C, -1, -1, -1), new n(C, -1, -1, -1));
  }
  e.r3JitTypeSourceSpan = v;
} });
var JD = I({ "src/utils/front-matter/parse.js"(e, r) {
  "use strict";
  N();
  var u = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
  function n(D) {
    let s = D.match(u);
    if (!s)
      return { content: D };
    let { startDelimiter: a, language: f, value: c = "", endDelimiter: v } = s.groups, i = f.trim() || "yaml";
    if (a === "+++" && (i = "toml"), i !== "yaml" && a !== v)
      return { content: D };
    let [l] = s;
    return { frontMatter: { type: "front-matter", lang: i, value: c, startDelimiter: a, endDelimiter: v, raw: l.replace(/\n$/, "") }, content: l.replace(/[^\n]/g, " ") + D.slice(l.length) };
  }
  r.exports = n;
} });
var ls = I({ "src/utils/get-last.js"(e, r) {
  "use strict";
  N();
  var u = (n) => n[n.length - 1];
  r.exports = u;
} });
var ZD = I({ "src/common/parser-create-error.js"(e, r) {
  "use strict";
  N();
  function u(n, D) {
    let s = new SyntaxError(n + " (" + D.start.line + ":" + D.start.column + ")");
    return s.loc = D, s;
  }
  r.exports = u;
} });
var cs = {};
is(cs, { default: () => el });
function el(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var rl = ge({ "node_modules/escape-string-regexp/index.js"() {
  N();
} });
var hs = I({ "node_modules/semver/internal/debug.js"(e, r) {
  N();
  var u = typeof we == "object" && we.env && we.env.NODE_DEBUG && /\bsemver\b/i.test(we.env.NODE_DEBUG) ? function() {
    for (var n = arguments.length, D = new Array(n), s = 0; s < n; s++)
      D[s] = arguments[s];
    return console.error("SEMVER", ...D);
  } : () => {
  };
  r.exports = u;
} });
var ps = I({ "node_modules/semver/internal/constants.js"(e, r) {
  N();
  var u = "2.0.0", n = 256, D = Number.MAX_SAFE_INTEGER || 9007199254740991, s = 16;
  r.exports = { SEMVER_SPEC_VERSION: u, MAX_LENGTH: n, MAX_SAFE_INTEGER: D, MAX_SAFE_COMPONENT_LENGTH: s };
} });
var ul = I({ "node_modules/semver/internal/re.js"(e, r) {
  N();
  var { MAX_SAFE_COMPONENT_LENGTH: u } = ps(), n = hs();
  e = r.exports = {};
  var D = e.re = [], s = e.src = [], a = e.t = {}, f = 0, c = (v, i, l) => {
    let p = f++;
    n(v, p, i), a[v] = p, s[p] = i, D[p] = new RegExp(i, l ? "g" : void 0);
  };
  c("NUMERICIDENTIFIER", "0|[1-9]\\d*"), c("NUMERICIDENTIFIERLOOSE", "[0-9]+"), c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), c("MAINVERSION", `(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})`), c("MAINVERSIONLOOSE", `(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})`), c("PRERELEASEIDENTIFIER", `(?:${s[a.NUMERICIDENTIFIER]}|${s[a.NONNUMERICIDENTIFIER]})`), c("PRERELEASEIDENTIFIERLOOSE", `(?:${s[a.NUMERICIDENTIFIERLOOSE]}|${s[a.NONNUMERICIDENTIFIER]})`), c("PRERELEASE", `(?:-(${s[a.PRERELEASEIDENTIFIER]}(?:\\.${s[a.PRERELEASEIDENTIFIER]})*))`), c("PRERELEASELOOSE", `(?:-?(${s[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[a.PRERELEASEIDENTIFIERLOOSE]})*))`), c("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), c("BUILD", `(?:\\+(${s[a.BUILDIDENTIFIER]}(?:\\.${s[a.BUILDIDENTIFIER]})*))`), c("FULLPLAIN", `v?${s[a.MAINVERSION]}${s[a.PRERELEASE]}?${s[a.BUILD]}?`), c("FULL", `^${s[a.FULLPLAIN]}$`), c("LOOSEPLAIN", `[v=\\s]*${s[a.MAINVERSIONLOOSE]}${s[a.PRERELEASELOOSE]}?${s[a.BUILD]}?`), c("LOOSE", `^${s[a.LOOSEPLAIN]}$`), c("GTLT", "((?:<|>)?=?)"), c("XRANGEIDENTIFIERLOOSE", `${s[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), c("XRANGEIDENTIFIER", `${s[a.NUMERICIDENTIFIER]}|x|X|\\*`), c("XRANGEPLAIN", `[v=\\s]*(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:${s[a.PRERELEASE]})?${s[a.BUILD]}?)?)?`), c("XRANGEPLAINLOOSE", `[v=\\s]*(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:${s[a.PRERELEASELOOSE]})?${s[a.BUILD]}?)?)?`), c("XRANGE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAIN]}$`), c("XRANGELOOSE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAINLOOSE]}$`), c("COERCE", `(^|[^\\d])(\\d{1,${u}})(?:\\.(\\d{1,${u}}))?(?:\\.(\\d{1,${u}}))?(?:$|[^\\d])`), c("COERCERTL", s[a.COERCE], true), c("LONETILDE", "(?:~>?)"), c("TILDETRIM", `(\\s*)${s[a.LONETILDE]}\\s+`, true), e.tildeTrimReplace = "$1~", c("TILDE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAIN]}$`), c("TILDELOOSE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAINLOOSE]}$`), c("LONECARET", "(?:\\^)"), c("CARETTRIM", `(\\s*)${s[a.LONECARET]}\\s+`, true), e.caretTrimReplace = "$1^", c("CARET", `^${s[a.LONECARET]}${s[a.XRANGEPLAIN]}$`), c("CARETLOOSE", `^${s[a.LONECARET]}${s[a.XRANGEPLAINLOOSE]}$`), c("COMPARATORLOOSE", `^${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]})$|^$`), c("COMPARATOR", `^${s[a.GTLT]}\\s*(${s[a.FULLPLAIN]})$|^$`), c("COMPARATORTRIM", `(\\s*)${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]}|${s[a.XRANGEPLAIN]})`, true), e.comparatorTrimReplace = "$1$2$3", c("HYPHENRANGE", `^\\s*(${s[a.XRANGEPLAIN]})\\s+-\\s+(${s[a.XRANGEPLAIN]})\\s*$`), c("HYPHENRANGELOOSE", `^\\s*(${s[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[a.XRANGEPLAINLOOSE]})\\s*$`), c("STAR", "(<|>)?=?\\s*\\*"), c("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), c("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
} });
var tl = I({ "node_modules/semver/internal/parse-options.js"(e, r) {
  N();
  var u = ["includePrerelease", "loose", "rtl"], n = (D) => D ? typeof D != "object" ? { loose: true } : u.filter((s) => D[s]).reduce((s, a) => (s[a] = true, s), {}) : {};
  r.exports = n;
} });
var nl = I({ "node_modules/semver/internal/identifiers.js"(e, r) {
  N();
  var u = /^[0-9]+$/, n = (s, a) => {
    let f = u.test(s), c = u.test(a);
    return f && c && (s = +s, a = +a), s === a ? 0 : f && !c ? -1 : c && !f ? 1 : s < a ? -1 : 1;
  }, D = (s, a) => n(a, s);
  r.exports = { compareIdentifiers: n, rcompareIdentifiers: D };
} });
var sl = I({ "node_modules/semver/classes/semver.js"(e, r) {
  N();
  var u = hs(), { MAX_LENGTH: n, MAX_SAFE_INTEGER: D } = ps(), { re: s, t: a } = ul(), f = tl(), { compareIdentifiers: c } = nl(), v = class {
    constructor(i, l) {
      if (l = f(l), i instanceof v) {
        if (i.loose === !!l.loose && i.includePrerelease === !!l.includePrerelease)
          return i;
        i = i.version;
      } else if (typeof i != "string")
        throw new TypeError(`Invalid Version: ${i}`);
      if (i.length > n)
        throw new TypeError(`version is longer than ${n} characters`);
      u("SemVer", i, l), this.options = l, this.loose = !!l.loose, this.includePrerelease = !!l.includePrerelease;
      let p = i.trim().match(l.loose ? s[a.LOOSE] : s[a.FULL]);
      if (!p)
        throw new TypeError(`Invalid Version: ${i}`);
      if (this.raw = i, this.major = +p[1], this.minor = +p[2], this.patch = +p[3], this.major > D || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > D || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > D || this.patch < 0)
        throw new TypeError("Invalid patch version");
      p[4] ? this.prerelease = p[4].split(".").map((m) => {
        if (/^[0-9]+$/.test(m)) {
          let C = +m;
          if (C >= 0 && C < D)
            return C;
        }
        return m;
      }) : this.prerelease = [], this.build = p[5] ? p[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(i) {
      if (u("SemVer.compare", this.version, this.options, i), !(i instanceof v)) {
        if (typeof i == "string" && i === this.version)
          return 0;
        i = new v(i, this.options);
      }
      return i.version === this.version ? 0 : this.compareMain(i) || this.comparePre(i);
    }
    compareMain(i) {
      return i instanceof v || (i = new v(i, this.options)), c(this.major, i.major) || c(this.minor, i.minor) || c(this.patch, i.patch);
    }
    comparePre(i) {
      if (i instanceof v || (i = new v(i, this.options)), this.prerelease.length && !i.prerelease.length)
        return -1;
      if (!this.prerelease.length && i.prerelease.length)
        return 1;
      if (!this.prerelease.length && !i.prerelease.length)
        return 0;
      let l = 0;
      do {
        let p = this.prerelease[l], m = i.prerelease[l];
        if (u("prerelease compare", l, p, m), p === void 0 && m === void 0)
          return 0;
        if (m === void 0)
          return 1;
        if (p === void 0)
          return -1;
        if (p === m)
          continue;
        return c(p, m);
      } while (++l);
    }
    compareBuild(i) {
      i instanceof v || (i = new v(i, this.options));
      let l = 0;
      do {
        let p = this.build[l], m = i.build[l];
        if (u("prerelease compare", l, p, m), p === void 0 && m === void 0)
          return 0;
        if (m === void 0)
          return 1;
        if (p === void 0)
          return -1;
        if (p === m)
          continue;
        return c(p, m);
      } while (++l);
    }
    inc(i, l) {
      switch (i) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", l);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", l);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", l), this.inc("pre", l);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", l), this.inc("pre", l);
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre":
          if (this.prerelease.length === 0)
            this.prerelease = [0];
          else {
            let p = this.prerelease.length;
            for (; --p >= 0; )
              typeof this.prerelease[p] == "number" && (this.prerelease[p]++, p = -2);
            p === -1 && this.prerelease.push(0);
          }
          l && (c(this.prerelease[0], l) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [l, 0]) : this.prerelease = [l, 0]);
          break;
        default:
          throw new Error(`invalid increment argument: ${i}`);
      }
      return this.format(), this.raw = this.version, this;
    }
  };
  r.exports = v;
} });
var Hr = I({ "node_modules/semver/functions/compare.js"(e, r) {
  N();
  var u = sl(), n = (D, s, a) => new u(D, a).compare(new u(s, a));
  r.exports = n;
} });
var il = I({ "node_modules/semver/functions/lt.js"(e, r) {
  N();
  var u = Hr(), n = (D, s, a) => u(D, s, a) < 0;
  r.exports = n;
} });
var al = I({ "node_modules/semver/functions/gte.js"(e, r) {
  N();
  var u = Hr(), n = (D, s, a) => u(D, s, a) >= 0;
  r.exports = n;
} });
var ol = I({ "src/utils/arrayify.js"(e, r) {
  "use strict";
  N(), r.exports = (u, n) => Object.entries(u).map((D) => {
    let [s, a] = D;
    return Object.assign({ [n]: s }, a);
  });
} });
var Dl = I({ "package.json"(e, r) {
  r.exports = { version: "2.8.8" };
} });
var ll = I({ "node_modules/outdent/lib/index.js"(e, r) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true }), e.outdent = void 0;
  function u() {
    for (var F = [], w = 0; w < arguments.length; w++)
      F[w] = arguments[w];
  }
  function n() {
    return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : D();
  }
  function D() {
    return { add: u, delete: u, get: u, set: u, has: function(F) {
      return false;
    } };
  }
  var s = Object.prototype.hasOwnProperty, a = function(F, w) {
    return s.call(F, w);
  };
  function f(F, w) {
    for (var b in w)
      a(w, b) && (F[b] = w[b]);
    return F;
  }
  var c = /^[ \t]*(?:\r\n|\r|\n)/, v = /(?:\r\n|\r|\n)[ \t]*$/, i = /^(?:[\r\n]|$)/, l = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, p = /^[ \t]*[\r\n][ \t\r\n]*$/;
  function m(F, w, b) {
    var M = 0, R = F[0].match(l);
    R && (M = R[1].length);
    var U = "(\\r\\n|\\r|\\n).{0," + M + "}", k = new RegExp(U, "g");
    w && (F = F.slice(1));
    var j = b.newline, L = b.trimLeadingNewline, t = b.trimTrailingNewline, o = typeof j == "string", d = F.length, h = F.map(function(A, q) {
      return A = A.replace(k, "$1"), q === 0 && L && (A = A.replace(c, "")), q === d - 1 && t && (A = A.replace(v, "")), o && (A = A.replace(/\r\n|\n|\r/g, function(P) {
        return j;
      })), A;
    });
    return h;
  }
  function C(F, w) {
    for (var b = "", M = 0, R = F.length; M < R; M++)
      b += F[M], M < R - 1 && (b += w[M]);
    return b;
  }
  function g(F) {
    return a(F, "raw") && a(F, "length");
  }
  function B(F) {
    var w = n(), b = n();
    function M(U) {
      for (var k = [], j = 1; j < arguments.length; j++)
        k[j - 1] = arguments[j];
      if (g(U)) {
        var L = U, t = (k[0] === M || k[0] === O) && p.test(L[0]) && i.test(L[1]), o = t ? b : w, d = o.get(L);
        if (d || (d = m(L, t, F), o.set(L, d)), k.length === 0)
          return d[0];
        var h = C(d, t ? k.slice(1) : k);
        return h;
      } else
        return B(f(f({}, F), U || {}));
    }
    var R = f(M, { string: function(U) {
      return m([U], false, F)[0];
    } });
    return R;
  }
  var O = B({ trimLeadingNewline: true, trimTrailingNewline: true });
  if (e.outdent = O, e.default = O, typeof r < "u")
    try {
      r.exports = O, Object.defineProperty(O, "__esModule", { value: true }), O.default = O, O.outdent = O;
    } catch {
    }
} });
var cl = I({ "src/main/core-options.js"(e, r) {
  "use strict";
  N();
  var { outdent: u } = ll(), n = "Config", D = "Editor", s = "Format", a = "Other", f = "Output", c = "Global", v = "Special", i = { cursorOffset: { since: "1.4.0", category: v, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: D }, endOfLine: { since: "1.15.0", category: c, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: u`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: v, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: a, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: v, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: a }, parser: { since: "0.0.10", category: c, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (l) => typeof l == "string" || typeof l == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: c, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (l) => typeof l == "string" || typeof l == "object", cliName: "plugin", cliCategory: n }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: c, description: u`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (l) => typeof l == "string" || typeof l == "object", cliName: "plugin-search-dir", cliCategory: n }, printWidth: { since: "0.0.0", category: c, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: v, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: D }, rangeStart: { since: "1.4.0", category: v, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: D }, requirePragma: { since: "1.7.0", category: v, type: "boolean", default: false, description: u`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: a }, tabWidth: { type: "int", category: c, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: c, type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: c, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
  r.exports = { CATEGORY_CONFIG: n, CATEGORY_EDITOR: D, CATEGORY_FORMAT: s, CATEGORY_OTHER: a, CATEGORY_OUTPUT: f, CATEGORY_GLOBAL: c, CATEGORY_SPECIAL: v, options: i };
} });
var hl = I({ "src/main/support.js"(e, r) {
  "use strict";
  N();
  var u = { compare: Hr(), lt: il(), gte: al() }, n = ol(), D = Dl().version, s = cl().options;
  function a() {
    let { plugins: c = [], showUnreleased: v = false, showDeprecated: i = false, showInternal: l = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, p = D.split("-", 1)[0], m = c.flatMap((F) => F.languages || []).filter(g), C = n(Object.assign({}, ...c.map((F) => {
      let { options: w } = F;
      return w;
    }), s), "name").filter((F) => g(F) && B(F)).sort((F, w) => F.name === w.name ? 0 : F.name < w.name ? -1 : 1).map(O).map((F) => {
      F = Object.assign({}, F), Array.isArray(F.default) && (F.default = F.default.length === 1 ? F.default[0].value : F.default.filter(g).sort((b, M) => u.compare(M.since, b.since))[0].value), Array.isArray(F.choices) && (F.choices = F.choices.filter((b) => g(b) && B(b)), F.name === "parser" && f(F, m, c));
      let w = Object.fromEntries(c.filter((b) => b.defaultOptions && b.defaultOptions[F.name] !== void 0).map((b) => [b.name, b.defaultOptions[F.name]]));
      return Object.assign(Object.assign({}, F), {}, { pluginDefaults: w });
    });
    return { languages: m, options: C };
    function g(F) {
      return v || !("since" in F) || F.since && u.gte(p, F.since);
    }
    function B(F) {
      return i || !("deprecated" in F) || F.deprecated && u.lt(p, F.deprecated);
    }
    function O(F) {
      if (l)
        return F;
      let { cliName: w, cliCategory: b, cliDescription: M } = F;
      return UD(F, jD);
    }
  }
  function f(c, v, i) {
    let l = new Set(c.choices.map((p) => p.value));
    for (let p of v)
      if (p.parsers) {
        for (let m of p.parsers)
          if (!l.has(m)) {
            l.add(m);
            let C = i.find((B) => B.parsers && B.parsers[m]), g = p.name;
            C && C.name && (g += ` (plugin: ${C.name})`), c.choices.push({ value: m, description: g });
          }
      }
  }
  r.exports = { getSupportInfo: a };
} });
var pl = I({ "src/utils/is-non-empty-array.js"(e, r) {
  "use strict";
  N();
  function u(n) {
    return Array.isArray(n) && n.length > 0;
  }
  r.exports = u;
} });
function fl() {
  let { onlyFirst: e = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
  return new RegExp(r, e ? void 0 : "g");
}
var dl = ge({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
  N();
} });
function El(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
  return e.replace(fl(), "");
}
var Cl = ge({ "node_modules/strip-ansi/index.js"() {
  N(), dl();
} });
function ml(e) {
  return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : false;
}
var gl = ge({ "node_modules/is-fullwidth-code-point/index.js"() {
  N();
} });
var Fl = I({ "node_modules/emoji-regex/index.js"(e, r) {
  "use strict";
  N(), r.exports = function() {
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
  };
} });
var fs = {};
is(fs, { default: () => Al });
function Al(e) {
  if (typeof e != "string" || e.length === 0 || (e = El(e), e.length === 0))
    return 0;
  e = e.replace((0, ds.default)(), "  ");
  let r = 0;
  for (let u = 0; u < e.length; u++) {
    let n = e.codePointAt(u);
    n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (n > 65535 && u++, r += ml(n) ? 2 : 1);
  }
  return r;
}
var ds;
var vl = ge({ "node_modules/string-width/index.js"() {
  N(), Cl(), gl(), ds = WD(Fl());
} });
var _l = I({ "src/utils/get-string-width.js"(e, r) {
  "use strict";
  N();
  var u = (vl(), os(fs)).default, n = /[^\x20-\x7F]/;
  function D(s) {
    return s ? n.test(s) ? u(s) : s.length : 0;
  }
  r.exports = D;
} });
var zr = I({ "src/utils/text/skip.js"(e, r) {
  "use strict";
  N();
  function u(f) {
    return (c, v, i) => {
      let l = i && i.backwards;
      if (v === false)
        return false;
      let { length: p } = c, m = v;
      for (; m >= 0 && m < p; ) {
        let C = c.charAt(m);
        if (f instanceof RegExp) {
          if (!f.test(C))
            return m;
        } else if (!f.includes(C))
          return m;
        l ? m-- : m++;
      }
      return m === -1 || m === p ? m : false;
    };
  }
  var n = u(/\s/), D = u(" 	"), s = u(",; 	"), a = u(/[^\n\r]/);
  r.exports = { skipWhitespace: n, skipSpaces: D, skipToLineEnd: s, skipEverythingButNewLine: a };
} });
var Es = I({ "src/utils/text/skip-inline-comment.js"(e, r) {
  "use strict";
  N();
  function u(n, D) {
    if (D === false)
      return false;
    if (n.charAt(D) === "/" && n.charAt(D + 1) === "*") {
      for (let s = D + 2; s < n.length; ++s)
        if (n.charAt(s) === "*" && n.charAt(s + 1) === "/")
          return s + 2;
    }
    return D;
  }
  r.exports = u;
} });
var Cs = I({ "src/utils/text/skip-trailing-comment.js"(e, r) {
  "use strict";
  N();
  var { skipEverythingButNewLine: u } = zr();
  function n(D, s) {
    return s === false ? false : D.charAt(s) === "/" && D.charAt(s + 1) === "/" ? u(D, s) : s;
  }
  r.exports = n;
} });
var ms = I({ "src/utils/text/skip-newline.js"(e, r) {
  "use strict";
  N();
  function u(n, D, s) {
    let a = s && s.backwards;
    if (D === false)
      return false;
    let f = n.charAt(D);
    if (a) {
      if (n.charAt(D - 1) === "\r" && f === `
`)
        return D - 2;
      if (f === `
` || f === "\r" || f === "\u2028" || f === "\u2029")
        return D - 1;
    } else {
      if (f === "\r" && n.charAt(D + 1) === `
`)
        return D + 2;
      if (f === `
` || f === "\r" || f === "\u2028" || f === "\u2029")
        return D + 1;
    }
    return D;
  }
  r.exports = u;
} });
var Sl = I({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, r) {
  "use strict";
  N();
  var u = Es(), n = ms(), D = Cs(), { skipSpaces: s } = zr();
  function a(f, c) {
    let v = null, i = c;
    for (; i !== v; )
      v = i, i = s(f, i), i = u(f, i), i = D(f, i), i = n(f, i);
    return i;
  }
  r.exports = a;
} });
var yl = I({ "src/common/util.js"(e, r) {
  "use strict";
  N();
  var { default: u } = (rl(), os(cs)), n = ls(), { getSupportInfo: D } = hl(), s = pl(), a = _l(), { skipWhitespace: f, skipSpaces: c, skipToLineEnd: v, skipEverythingButNewLine: i } = zr(), l = Es(), p = Cs(), m = ms(), C = Sl(), g = (S) => S[S.length - 2];
  function B(S) {
    return (E, _, T) => {
      let x = T && T.backwards;
      if (_ === false)
        return false;
      let { length: $ } = E, V = _;
      for (; V >= 0 && V < $; ) {
        let z = E.charAt(V);
        if (S instanceof RegExp) {
          if (!S.test(z))
            return V;
        } else if (!S.includes(z))
          return V;
        x ? V-- : V++;
      }
      return V === -1 || V === $ ? V : false;
    };
  }
  function O(S, E) {
    let _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, T = c(S, _.backwards ? E - 1 : E, _), x = m(S, T, _);
    return T !== x;
  }
  function F(S, E, _) {
    for (let T = E; T < _; ++T)
      if (S.charAt(T) === `
`)
        return true;
    return false;
  }
  function w(S, E, _) {
    let T = _(E) - 1;
    T = c(S, T, { backwards: true }), T = m(S, T, { backwards: true }), T = c(S, T, { backwards: true });
    let x = m(S, T, { backwards: true });
    return T !== x;
  }
  function b(S, E) {
    let _ = null, T = E;
    for (; T !== _; )
      _ = T, T = v(S, T), T = l(S, T), T = c(S, T);
    return T = p(S, T), T = m(S, T), T !== false && O(S, T);
  }
  function M(S, E, _) {
    return b(S, _(E));
  }
  function R(S, E, _) {
    return C(S, _(E));
  }
  function U(S, E, _) {
    return S.charAt(R(S, E, _));
  }
  function k(S, E) {
    let _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return c(S, _.backwards ? E - 1 : E, _) !== E;
  }
  function j(S, E) {
    let _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, T = 0;
    for (let x = _; x < S.length; ++x)
      S[x] === "	" ? T = T + E - T % E : T++;
    return T;
  }
  function L(S, E) {
    let _ = S.lastIndexOf(`
`);
    return _ === -1 ? 0 : j(S.slice(_ + 1).match(/^[\t ]*/)[0], E);
  }
  function t(S, E) {
    let _ = { quote: '"', regex: /"/g, escaped: "&quot;" }, T = { quote: "'", regex: /'/g, escaped: "&apos;" }, x = E === "'" ? T : _, $ = x === T ? _ : T, V = x;
    if (S.includes(x.quote) || S.includes($.quote)) {
      let z = (S.match(x.regex) || []).length, Y = (S.match($.regex) || []).length;
      V = z > Y ? $ : x;
    }
    return V;
  }
  function o(S, E) {
    let _ = S.slice(1, -1), T = E.parser === "json" || E.parser === "json5" && E.quoteProps === "preserve" && !E.singleQuote ? '"' : E.__isInHtmlAttribute ? "'" : t(_, E.singleQuote ? "'" : '"').quote;
    return d(_, T, !(E.parser === "css" || E.parser === "less" || E.parser === "scss" || E.__embeddedInHtml));
  }
  function d(S, E, _) {
    let T = E === '"' ? "'" : '"', x = /\\(.)|(["'])/gs, $ = S.replace(x, (V, z, Y) => z === T ? z : Y === E ? "\\" + Y : Y || (_ && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(z) ? z : "\\" + z));
    return E + $ + E;
  }
  function h(S) {
    return S.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
  }
  function A(S, E) {
    let _ = S.match(new RegExp(`(${u(E)})+`, "g"));
    return _ === null ? 0 : _.reduce((T, x) => Math.max(T, x.length / E.length), 0);
  }
  function q(S, E) {
    let _ = S.match(new RegExp(`(${u(E)})+`, "g"));
    if (_ === null)
      return 0;
    let T = /* @__PURE__ */ new Map(), x = 0;
    for (let $ of _) {
      let V = $.length / E.length;
      T.set(V, true), V > x && (x = V);
    }
    for (let $ = 1; $ < x; $++)
      if (!T.get($))
        return $;
    return x + 1;
  }
  function P(S, E) {
    (S.comments || (S.comments = [])).push(E), E.printed = false, E.nodeDescription = J(S);
  }
  function G(S, E) {
    E.leading = true, E.trailing = false, P(S, E);
  }
  function X(S, E, _) {
    E.leading = false, E.trailing = false, _ && (E.marker = _), P(S, E);
  }
  function Q(S, E) {
    E.leading = false, E.trailing = true, P(S, E);
  }
  function H(S, E) {
    let { languages: _ } = D({ plugins: E.plugins }), T = _.find((x) => {
      let { name: $ } = x;
      return $.toLowerCase() === S;
    }) || _.find((x) => {
      let { aliases: $ } = x;
      return Array.isArray($) && $.includes(S);
    }) || _.find((x) => {
      let { extensions: $ } = x;
      return Array.isArray($) && $.includes(`.${S}`);
    });
    return T && T.parsers[0];
  }
  function W(S) {
    return S && S.type === "front-matter";
  }
  function K(S) {
    let E = /* @__PURE__ */ new WeakMap();
    return function(_) {
      return E.has(_) || E.set(_, Symbol(S)), E.get(_);
    };
  }
  function J(S) {
    let E = S.type || S.kind || "(unknown type)", _ = String(S.name || S.id && (typeof S.id == "object" ? S.id.name : S.id) || S.key && (typeof S.key == "object" ? S.key.name : S.key) || S.value && (typeof S.value == "object" ? "" : String(S.value)) || S.operator || "");
    return _.length > 20 && (_ = _.slice(0, 19) + "…"), E + (_ ? " " + _ : "");
  }
  r.exports = { inferParserByLanguage: H, getStringWidth: a, getMaxContinuousCount: A, getMinNotPresentContinuousCount: q, getPenultimate: g, getLast: n, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: C, getNextNonSpaceNonCommentCharacterIndex: R, getNextNonSpaceNonCommentCharacter: U, skip: B, skipWhitespace: f, skipSpaces: c, skipToLineEnd: v, skipEverythingButNewLine: i, skipInlineComment: l, skipTrailingComment: p, skipNewline: m, isNextLineEmptyAfterIndex: b, isNextLineEmpty: M, isPreviousLineEmpty: w, hasNewline: O, hasNewlineInRange: F, hasSpaces: k, getAlignmentSize: j, getIndentSize: L, getPreferredQuote: t, printString: o, printNumber: h, makeString: d, addLeadingComment: G, addDanglingComment: X, addTrailingComment: Q, isFrontMatterNode: W, isNonEmptyArray: s, createGroupIdMapper: K };
} });
var Tl = I({ "vendors/html-tag-names.json"(e, r) {
  r.exports = { htmlTagNames: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"] };
} });
var gs = I({ "src/language-html/utils/array-to-map.js"(e, r) {
  "use strict";
  N();
  function u(n) {
    let D = /* @__PURE__ */ Object.create(null);
    for (let s of n)
      D[s] = true;
    return D;
  }
  r.exports = u;
} });
var Bl = I({ "src/language-html/utils/html-tag-names.js"(e, r) {
  "use strict";
  N();
  var { htmlTagNames: u } = Tl(), n = gs(), D = n(u);
  r.exports = D;
} });
var bl = I({ "vendors/html-element-attributes.json"(e, r) {
  r.exports = { htmlElementAttributes: { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["for", "form"], legend: ["align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "media", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"], select: ["autocomplete", "disabled", "form", "multiple", "name", "required", "size"], slot: ["name"], source: ["height", "media", "sizes", "src", "srcset", "type", "width"], style: ["media", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] } };
} });
var wl = I({ "src/language-html/utils/map-object.js"(e, r) {
  "use strict";
  N();
  function u(n, D) {
    let s = /* @__PURE__ */ Object.create(null);
    for (let [a, f] of Object.entries(n))
      s[a] = D(f, a);
    return s;
  }
  r.exports = u;
} });
var Nl = I({ "src/language-html/utils/html-elements-attributes.js"(e, r) {
  "use strict";
  N();
  var { htmlElementAttributes: u } = bl(), n = wl(), D = gs(), s = n(u, D);
  r.exports = s;
} });
var Ol = I({ "src/language-html/utils/is-unknown-namespace.js"(e, r) {
  "use strict";
  N();
  function u(n) {
    return n.type === "element" && !n.hasExplicitNamespace && !["html", "svg"].includes(n.namespace);
  }
  r.exports = u;
} });
var ql = I({ "src/language-html/pragma.js"(e, r) {
  "use strict";
  N();
  function u(D) {
    return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(D);
  }
  function n(D) {
    return `<!-- @format -->

` + D.replace(/^\s*\n/, "");
  }
  r.exports = { hasPragma: u, insertPragma: n };
} });
var Il = I({ "src/language-html/ast.js"(e, r) {
  "use strict";
  N();
  var u = { attrs: true, children: true }, n = /* @__PURE__ */ new Set(["parent"]), D = class {
    constructor() {
      let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      for (let f of /* @__PURE__ */ new Set([...n, ...Object.keys(a)]))
        this.setProperty(f, a[f]);
    }
    setProperty(a, f) {
      if (this[a] !== f) {
        if (a in u && (f = f.map((c) => this.createChild(c))), !n.has(a)) {
          this[a] = f;
          return;
        }
        Object.defineProperty(this, a, { value: f, enumerable: false, configurable: true });
      }
    }
    map(a) {
      let f;
      for (let c in u) {
        let v = this[c];
        if (v) {
          let i = s(v, (l) => l.map(a));
          f !== v && (f || (f = new D({ parent: this.parent })), f.setProperty(c, i));
        }
      }
      if (f)
        for (let c in this)
          c in u || (f[c] = this[c]);
      return a(f || this);
    }
    walk(a) {
      for (let f in u) {
        let c = this[f];
        if (c)
          for (let v = 0; v < c.length; v++)
            c[v].walk(a);
      }
      a(this);
    }
    createChild(a) {
      let f = a instanceof D ? a.clone() : new D(a);
      return f.setProperty("parent", this), f;
    }
    insertChildBefore(a, f) {
      this.children.splice(this.children.indexOf(a), 0, this.createChild(f));
    }
    removeChild(a) {
      this.children.splice(this.children.indexOf(a), 1);
    }
    replaceChild(a, f) {
      this.children[this.children.indexOf(a)] = this.createChild(f);
    }
    clone() {
      return new D(this);
    }
    get firstChild() {
      var a;
      return (a = this.children) === null || a === void 0 ? void 0 : a[0];
    }
    get lastChild() {
      var a;
      return (a = this.children) === null || a === void 0 ? void 0 : a[this.children.length - 1];
    }
    get prev() {
      var a;
      return (a = this.parent) === null || a === void 0 ? void 0 : a.children[this.parent.children.indexOf(this) - 1];
    }
    get next() {
      var a;
      return (a = this.parent) === null || a === void 0 ? void 0 : a.children[this.parent.children.indexOf(this) + 1];
    }
    get rawName() {
      return this.hasExplicitNamespace ? this.fullName : this.name;
    }
    get fullName() {
      return this.namespace ? this.namespace + ":" + this.name : this.name;
    }
    get attrMap() {
      return Object.fromEntries(this.attrs.map((a) => [a.fullName, a.value]));
    }
  };
  function s(a, f) {
    let c = a.map(f);
    return c.some((v, i) => v !== a[i]) ? c : a;
  }
  r.exports = { Node: D };
} });
var Rl = I({ "src/language-html/conditional-comment.js"(e, r) {
  "use strict";
  N();
  var { ParseSourceSpan: u } = Ne(), n = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: s }, { regex: /^\[if([^\]]*)]><!$/, parse: a }, { regex: /^<!\s*\[endif]$/, parse: f }];
  function D(c, v) {
    if (c.value)
      for (let { regex: i, parse: l } of n) {
        let p = c.value.match(i);
        if (p)
          return l(c, v, p);
      }
    return null;
  }
  function s(c, v, i) {
    let [, l, p, m] = i, C = 4 + l.length, g = c.sourceSpan.start.moveBy(C), B = g.moveBy(m.length), [O, F] = (() => {
      try {
        return [true, v(m, g).children];
      } catch {
        return [false, [{ type: "text", value: m, sourceSpan: new u(g, B) }]];
      }
    })();
    return { type: "ieConditionalComment", complete: O, children: F, condition: p.trim().replace(/\s+/g, " "), sourceSpan: c.sourceSpan, startSourceSpan: new u(c.sourceSpan.start, g), endSourceSpan: new u(B, c.sourceSpan.end) };
  }
  function a(c, v, i) {
    let [, l] = i;
    return { type: "ieConditionalStartComment", condition: l.trim().replace(/\s+/g, " "), sourceSpan: c.sourceSpan };
  }
  function f(c) {
    return { type: "ieConditionalEndComment", sourceSpan: c.sourceSpan };
  }
  r.exports = { parseIeConditionalComment: D };
} });
var xl = I({ "src/language-html/loc.js"(e, r) {
  "use strict";
  N();
  function u(D) {
    return D.sourceSpan.start.offset;
  }
  function n(D) {
    return D.sourceSpan.end.offset;
  }
  r.exports = { locStart: u, locEnd: n };
} });
var Ze = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/tags.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r;
  (function(c) {
    c[c.RAW_TEXT = 0] = "RAW_TEXT", c[c.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", c[c.PARSABLE_DATA = 2] = "PARSABLE_DATA";
  })(r = e.TagContentType || (e.TagContentType = {}));
  function u(c) {
    if (c[0] != ":")
      return [null, c];
    let v = c.indexOf(":", 1);
    if (v == -1)
      throw new Error(`Unsupported format "${c}" expecting ":namespace:name"`);
    return [c.slice(1, v), c.slice(v + 1)];
  }
  e.splitNsName = u;
  function n(c) {
    return u(c)[1] === "ng-container";
  }
  e.isNgContainer = n;
  function D(c) {
    return u(c)[1] === "ng-content";
  }
  e.isNgContent = D;
  function s(c) {
    return u(c)[1] === "ng-template";
  }
  e.isNgTemplate = s;
  function a(c) {
    return c === null ? null : u(c)[0];
  }
  e.getNsPrefix = a;
  function f(c, v) {
    return c ? `:${c}:${v}` : v;
  }
  e.mergeNsAndName = f, e.NAMED_ENTITIES = { Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", AMP: "&", amp: "&", And: "⩓", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", ap: "≈", apacir: "⩯", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", Barwed: "⌆", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", Because: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxDL: "╗", boxDl: "╖", boxdL: "╕", boxdl: "┐", boxDR: "╔", boxDr: "╓", boxdR: "╒", boxdr: "┌", boxH: "═", boxh: "─", boxHD: "╦", boxHd: "╤", boxhD: "╥", boxhd: "┬", boxHU: "╩", boxHu: "╧", boxhU: "╨", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxUL: "╝", boxUl: "╜", boxuL: "╛", boxul: "┘", boxUR: "╚", boxUr: "╙", boxuR: "╘", boxur: "└", boxV: "║", boxv: "│", boxVH: "╬", boxVh: "╫", boxvH: "╪", boxvh: "┼", boxVL: "╣", boxVl: "╢", boxvL: "╡", boxvl: "┤", boxVR: "╠", boxVr: "╟", boxvR: "╞", boxvr: "├", bprime: "‵", Breve: "˘", breve: "˘", brvbar: "¦", Bscr: "ℬ", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", Cap: "⋒", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", CenterDot: "·", centerdot: "·", Cfr: "ℭ", cfr: "𝔠", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", Colon: "∷", colon: ":", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", Conint: "∯", conint: "∮", ContourIntegral: "∮", Copf: "ℂ", copf: "𝕔", coprod: "∐", Coproduct: "∐", COPY: "©", copy: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", Cross: "⨯", cross: "✗", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", Cup: "⋓", cup: "∪", cupbrcap: "⩈", CupCap: "≍", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", Dagger: "‡", dagger: "†", daleth: "ℸ", Darr: "↡", dArr: "⇓", darr: "↓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", DD: "ⅅ", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", Diamond: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", Downarrow: "⇓", downarrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", ecir: "≖", Ecirc: "Ê", ecirc: "ê", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", eDot: "≑", edot: "ė", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", Escr: "ℰ", escr: "ℯ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", ExponentialE: "ⅇ", exponentiale: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", ForAll: "∀", forall: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", Fscr: "ℱ", fscr: "𝒻", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", gE: "≧", ge: "≥", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", Gg: "⋙", gg: "≫", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gnE: "≩", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", GT: ">", Gt: "≫", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", hArr: "⇔", harr: "↔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", Hfr: "ℌ", hfr: "𝔥", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", Hopf: "ℍ", hopf: "𝕙", horbar: "―", HorizontalLine: "─", Hscr: "ℋ", hscr: "𝒽", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", Ifr: "ℑ", ifr: "𝔦", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Im: "ℑ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", Int: "∬", int: "∫", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", Iscr: "ℐ", iscr: "𝒾", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", Lang: "⟪", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", Larr: "↞", lArr: "⇐", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", lAtail: "⤛", latail: "⤙", late: "⪭", lates: "⪭︀", lBarr: "⤎", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", lE: "≦", le: "≤", LeftAngleBracket: "⟨", LeftArrow: "←", Leftarrow: "⇐", leftarrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", Ll: "⋘", ll: "≪", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lnE: "≨", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftarrow: "⟵", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longleftrightarrow: "⟷", longmapsto: "⟼", LongRightArrow: "⟶", Longrightarrow: "⟹", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", Lscr: "ℒ", lscr: "𝓁", Lsh: "↰", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", LT: "<", Lt: "≪", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", Mscr: "ℳ", mscr: "𝓂", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", ne: "≠", nearhk: "⤤", neArr: "⇗", nearr: "↗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlArr: "⇍", nlarr: "↚", nldr: "‥", nlE: "≦̸", nle: "≰", nLeftarrow: "⇍", nleftarrow: "↚", nLeftrightarrow: "⇎", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", nopf: "𝕟", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nRightarrow: "⇏", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nVDash: "⊯", nVdash: "⊮", nvDash: "⊭", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwArr: "⇖", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", ocir: "⊚", Ocirc: "Ô", ocirc: "ô", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", Or: "⩔", or: "∨", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", Otimes: "⨷", otimes: "⊗", otimesas: "⨶", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", Popf: "ℙ", popf: "𝕡", pound: "£", Pr: "⪻", pr: "≺", prap: "⪷", prcue: "≼", prE: "⪳", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", Prime: "″", prime: "′", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", Qopf: "ℚ", qopf: "𝕢", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", QUOT: '"', quot: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", Rang: "⟫", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", Rarr: "↠", rArr: "⇒", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", rAtail: "⤜", ratail: "⤚", ratio: "∶", rationals: "ℚ", RBarr: "⤐", rBarr: "⤏", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", REG: "®", reg: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", Rfr: "ℜ", rfr: "𝔯", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrow: "→", Rightarrow: "⇒", rightarrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", Ropf: "ℝ", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", Rscr: "ℛ", rscr: "𝓇", Rsh: "↱", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", Sc: "⪼", sc: "≻", scap: "⪸", Scaron: "Š", scaron: "š", sccue: "≽", scE: "⪴", sce: "⪰", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", seArr: "⇘", searr: "↘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", Square: "□", square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", Sub: "⋐", sub: "⊂", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", Subset: "⋐", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", Sum: "∑", sum: "∑", sung: "♪", Sup: "⋑", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", Supset: "⋑", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swArr: "⇙", swarr: "↙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", Therefore: "∴", therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", Tilde: "∼", tilde: "˜", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", TRADE: "™", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", Uarr: "↟", uArr: "⇑", uarr: "↑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrow: "↑", Uparrow: "⇑", uparrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", Updownarrow: "⇕", updownarrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", upsi: "υ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", vArr: "⇕", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", Vbar: "⫫", vBar: "⫨", vBarv: "⫩", Vcy: "В", vcy: "в", VDash: "⊫", Vdash: "⊩", vDash: "⊨", vdash: "⊢", Vdashl: "⫦", Vee: "⋁", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", Verbar: "‖", verbar: "|", Vert: "‖", vert: "|", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", Wedge: "⋀", wedge: "∧", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", Xi: "Ξ", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", Yuml: "Ÿ", yuml: "ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", Zfr: "ℨ", zfr: "𝔷", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", Zopf: "ℤ", zopf: "𝕫", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" }, e.NGSP_UNICODE = "", e.NAMED_ENTITIES.ngsp = e.NGSP_UNICODE;
} });
var Fs = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_tags.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = Ze(), u = class {
    constructor() {
      let { closedByChildren: a, implicitNamespacePrefix: f, contentType: c = r.TagContentType.PARSABLE_DATA, closedByParent: v = false, isVoid: i = false, ignoreFirstLf: l = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.closedByChildren = {}, this.closedByParent = false, this.canSelfClose = false, a && a.length > 0 && a.forEach((p) => this.closedByChildren[p] = true), this.isVoid = i, this.closedByParent = v || i, this.implicitNamespacePrefix = f || null, this.contentType = c, this.ignoreFirstLf = l;
    }
    isClosedByChild(a) {
      return this.isVoid || a.toLowerCase() in this.closedByChildren;
    }
  };
  e.HtmlTagDefinition = u;
  var n, D;
  function s(a) {
    return D || (n = new u(), D = { base: new u({ isVoid: true }), meta: new u({ isVoid: true }), area: new u({ isVoid: true }), embed: new u({ isVoid: true }), link: new u({ isVoid: true }), img: new u({ isVoid: true }), input: new u({ isVoid: true }), param: new u({ isVoid: true }), hr: new u({ isVoid: true }), br: new u({ isVoid: true }), source: new u({ isVoid: true }), track: new u({ isVoid: true }), wbr: new u({ isVoid: true }), p: new u({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new u({ closedByChildren: ["tbody", "tfoot"] }), tbody: new u({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new u({ closedByChildren: ["tbody"], closedByParent: true }), tr: new u({ closedByChildren: ["tr"], closedByParent: true }), td: new u({ closedByChildren: ["td", "th"], closedByParent: true }), th: new u({ closedByChildren: ["td", "th"], closedByParent: true }), col: new u({ isVoid: true }), svg: new u({ implicitNamespacePrefix: "svg" }), math: new u({ implicitNamespacePrefix: "math" }), li: new u({ closedByChildren: ["li"], closedByParent: true }), dt: new u({ closedByChildren: ["dt", "dd"] }), dd: new u({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new u({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new u({ closedByChildren: ["optgroup"], closedByParent: true }), option: new u({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new u({ ignoreFirstLf: true }), listing: new u({ ignoreFirstLf: true }), style: new u({ contentType: r.TagContentType.RAW_TEXT }), script: new u({ contentType: r.TagContentType.RAW_TEXT }), title: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT }), textarea: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), D[a] || n;
  }
  e.getHtmlTagDefinition = s;
} });
var Pl = I({ "node_modules/angular-html-parser/lib/compiler/src/ast_path.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = class {
    constructor(u) {
      let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
      this.path = u, this.position = n;
    }
    get empty() {
      return !this.path || !this.path.length;
    }
    get head() {
      return this.path[0];
    }
    get tail() {
      return this.path[this.path.length - 1];
    }
    parentOf(u) {
      return u && this.path[this.path.indexOf(u) - 1];
    }
    childOf(u) {
      return this.path[this.path.indexOf(u) + 1];
    }
    first(u) {
      for (let n = this.path.length - 1; n >= 0; n--) {
        let D = this.path[n];
        if (D instanceof u)
          return D;
      }
    }
    push(u) {
      this.path.push(u);
    }
    pop() {
      return this.path.pop();
    }
  };
  e.AstPath = r;
} });
var As = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/ast.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = Pl(), u = class {
    constructor(C, g, B) {
      this.value = C, this.sourceSpan = g, this.i18n = B, this.type = "text";
    }
    visit(C, g) {
      return C.visitText(this, g);
    }
  };
  e.Text = u;
  var n = class {
    constructor(C, g) {
      this.value = C, this.sourceSpan = g, this.type = "cdata";
    }
    visit(C, g) {
      return C.visitCdata(this, g);
    }
  };
  e.CDATA = n;
  var D = class {
    constructor(C, g, B, O, F, w) {
      this.switchValue = C, this.type = g, this.cases = B, this.sourceSpan = O, this.switchValueSourceSpan = F, this.i18n = w;
    }
    visit(C, g) {
      return C.visitExpansion(this, g);
    }
  };
  e.Expansion = D;
  var s = class {
    constructor(C, g, B, O, F) {
      this.value = C, this.expression = g, this.sourceSpan = B, this.valueSourceSpan = O, this.expSourceSpan = F;
    }
    visit(C, g) {
      return C.visitExpansionCase(this, g);
    }
  };
  e.ExpansionCase = s;
  var a = class {
    constructor(C, g, B) {
      let O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, F = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, w = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
      this.name = C, this.value = g, this.sourceSpan = B, this.valueSpan = O, this.nameSpan = F, this.i18n = w, this.type = "attribute";
    }
    visit(C, g) {
      return C.visitAttribute(this, g);
    }
  };
  e.Attribute = a;
  var f = class {
    constructor(C, g, B, O) {
      let F = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, w = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, b = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, M = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
      this.name = C, this.attrs = g, this.children = B, this.sourceSpan = O, this.startSourceSpan = F, this.endSourceSpan = w, this.nameSpan = b, this.i18n = M, this.type = "element";
    }
    visit(C, g) {
      return C.visitElement(this, g);
    }
  };
  e.Element = f;
  var c = class {
    constructor(C, g) {
      this.value = C, this.sourceSpan = g, this.type = "comment";
    }
    visit(C, g) {
      return C.visitComment(this, g);
    }
  };
  e.Comment = c;
  var v = class {
    constructor(C, g) {
      this.value = C, this.sourceSpan = g, this.type = "docType";
    }
    visit(C, g) {
      return C.visitDocType(this, g);
    }
  };
  e.DocType = v;
  function i(C, g) {
    let B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, O = [], F = C.visit ? (w) => C.visit(w, B) || w.visit(C, B) : (w) => w.visit(C, B);
    return g.forEach((w) => {
      let b = F(w);
      b && O.push(b);
    }), O;
  }
  e.visitAll = i;
  var l = class {
    constructor() {
    }
    visitElement(C, g) {
      this.visitChildren(g, (B) => {
        B(C.attrs), B(C.children);
      });
    }
    visitAttribute(C, g) {
    }
    visitText(C, g) {
    }
    visitCdata(C, g) {
    }
    visitComment(C, g) {
    }
    visitDocType(C, g) {
    }
    visitExpansion(C, g) {
      return this.visitChildren(g, (B) => {
        B(C.cases);
      });
    }
    visitExpansionCase(C, g) {
    }
    visitChildren(C, g) {
      let B = [], O = this;
      function F(w) {
        w && B.push(i(O, w, C));
      }
      return g(F), Array.prototype.concat.apply([], B);
    }
  };
  e.RecursiveVisitor = l;
  function p(C) {
    let g = C.sourceSpan.start.offset, B = C.sourceSpan.end.offset;
    return C instanceof f && (C.endSourceSpan ? B = C.endSourceSpan.end.offset : C.children && C.children.length && (B = p(C.children[C.children.length - 1]).end)), { start: g, end: B };
  }
  function m(C, g) {
    let B = [], O = new class extends l {
      visit(F, w) {
        let b = p(F);
        if (b.start <= g && g < b.end)
          B.push(F);
        else
          return true;
      }
    }();
    return i(O, C), new r.AstPath(B, g);
  }
  e.findNode = m;
} });
var kl = I({ "node_modules/angular-html-parser/lib/compiler/src/assertions.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  function r(D, s) {
    if (s != null) {
      if (!Array.isArray(s))
        throw new Error(`Expected '${D}' to be an array of strings.`);
      for (let a = 0; a < s.length; a += 1)
        if (typeof s[a] != "string")
          throw new Error(`Expected '${D}' to be an array of strings.`);
    }
  }
  e.assertArrayOfStrings = r;
  var u = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
  function n(D, s) {
    if (s != null && !(Array.isArray(s) && s.length == 2))
      throw new Error(`Expected '${D}' to be an array, [start, end].`);
    if (s != null) {
      let a = s[0], f = s[1];
      u.forEach((c) => {
        if (c.test(a) || c.test(f))
          throw new Error(`['${a}', '${f}'] contains unusable interpolation symbol.`);
      });
    }
  }
  e.assertInterpolationSymbols = n;
} });
var Ll = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/interpolation_config.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = kl(), u = class {
    constructor(n, D) {
      this.start = n, this.end = D;
    }
    static fromArray(n) {
      return n ? (r.assertInterpolationSymbols("interpolation", n), new u(n[0], n[1])) : e.DEFAULT_INTERPOLATION_CONFIG;
    }
  };
  e.InterpolationConfig = u, e.DEFAULT_INTERPOLATION_CONFIG = new u("{{", "}}");
} });
var $l = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/lexer.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = Ds(), u = Ne(), n = Ll(), D = Ze(), s;
  (function(t) {
    t[t.TAG_OPEN_START = 0] = "TAG_OPEN_START", t[t.TAG_OPEN_END = 1] = "TAG_OPEN_END", t[t.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", t[t.TAG_CLOSE = 3] = "TAG_CLOSE", t[t.TEXT = 4] = "TEXT", t[t.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", t[t.RAW_TEXT = 6] = "RAW_TEXT", t[t.COMMENT_START = 7] = "COMMENT_START", t[t.COMMENT_END = 8] = "COMMENT_END", t[t.CDATA_START = 9] = "CDATA_START", t[t.CDATA_END = 10] = "CDATA_END", t[t.ATTR_NAME = 11] = "ATTR_NAME", t[t.ATTR_QUOTE = 12] = "ATTR_QUOTE", t[t.ATTR_VALUE = 13] = "ATTR_VALUE", t[t.DOC_TYPE_START = 14] = "DOC_TYPE_START", t[t.DOC_TYPE_END = 15] = "DOC_TYPE_END", t[t.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START", t[t.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE", t[t.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START", t[t.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END", t[t.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END", t[t.EOF = 21] = "EOF";
  })(s = e.TokenType || (e.TokenType = {}));
  var a = class {
    constructor(t, o, d) {
      this.type = t, this.parts = o, this.sourceSpan = d;
    }
  };
  e.Token = a;
  var f = class extends u.ParseError {
    constructor(t, o, d) {
      super(d, t), this.tokenType = o;
    }
  };
  e.TokenError = f;
  var c = class {
    constructor(t, o) {
      this.tokens = t, this.errors = o;
    }
  };
  e.TokenizeResult = c;
  function v(t, o, d) {
    let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return new C(new u.ParseSourceFile(t, o), d, h).tokenize();
  }
  e.tokenize = v;
  var i = /\r\n?/g;
  function l(t) {
    return `Unexpected character "${t === r.$EOF ? "EOF" : String.fromCharCode(t)}"`;
  }
  function p(t) {
    return `Unknown entity "${t}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
  }
  var m = class {
    constructor(t) {
      this.error = t;
    }
  }, C = class {
    constructor(t, o, d) {
      this._getTagContentType = o, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this._tokenizeIcu = d.tokenizeExpansionForms || false, this._interpolationConfig = d.interpolationConfig || n.DEFAULT_INTERPOLATION_CONFIG, this._leadingTriviaCodePoints = d.leadingTriviaChars && d.leadingTriviaChars.map((A) => A.codePointAt(0) || 0), this._canSelfClose = d.canSelfClose || false, this._allowHtmComponentClosingTags = d.allowHtmComponentClosingTags || false;
      let h = d.range || { endPos: t.content.length, startPos: 0, startLine: 0, startCol: 0 };
      this._cursor = d.escapedString ? new j(t, h) : new k(t, h);
      try {
        this._cursor.init();
      } catch (A) {
        this.handleError(A);
      }
    }
    _processCarriageReturns(t) {
      return t.replace(i, `
`);
    }
    tokenize() {
      for (; this._cursor.peek() !== r.$EOF; ) {
        let t = this._cursor.clone();
        try {
          if (this._attemptCharCode(r.$LT))
            if (this._attemptCharCode(r.$BANG))
              this._attemptStr("[CDATA[") ? this._consumeCdata(t) : this._attemptStr("--") ? this._consumeComment(t) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(t) : this._consumeBogusComment(t);
            else if (this._attemptCharCode(r.$SLASH))
              this._consumeTagClose(t);
            else {
              let o = this._cursor.clone();
              this._attemptCharCode(r.$QUESTION) ? (this._cursor = o, this._consumeBogusComment(t)) : this._consumeTagOpen(t);
            }
          else
            this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText();
        } catch (o) {
          this.handleError(o);
        }
      }
      return this._beginToken(s.EOF), this._endToken([]), new c(U(this.tokens), this.errors);
    }
    _tokenizeExpansionForm() {
      if (this.isExpansionFormStart())
        return this._consumeExpansionFormStart(), true;
      if (b(this._cursor.peek()) && this._isInExpansionForm())
        return this._consumeExpansionCaseStart(), true;
      if (this._cursor.peek() === r.$RBRACE) {
        if (this._isInExpansionCase())
          return this._consumeExpansionCaseEnd(), true;
        if (this._isInExpansionForm())
          return this._consumeExpansionFormEnd(), true;
      }
      return false;
    }
    _beginToken(t) {
      let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
      this._currentTokenStart = o, this._currentTokenType = t;
    }
    _endToken(t) {
      let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
      if (this._currentTokenStart === null)
        throw new f("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(o));
      if (this._currentTokenType === null)
        throw new f("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
      let d = new a(this._currentTokenType, t, this._cursor.getSpan(this._currentTokenStart, this._leadingTriviaCodePoints));
      return this.tokens.push(d), this._currentTokenStart = null, this._currentTokenType = null, d;
    }
    _createError(t, o) {
      this._isInExpansionForm() && (t += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
      let d = new f(t, this._currentTokenType, o);
      return this._currentTokenStart = null, this._currentTokenType = null, new m(d);
    }
    handleError(t) {
      if (t instanceof L && (t = this._createError(t.msg, this._cursor.getSpan(t.cursor))), t instanceof m)
        this.errors.push(t.error);
      else
        throw t;
    }
    _attemptCharCode(t) {
      return this._cursor.peek() === t ? (this._cursor.advance(), true) : false;
    }
    _attemptCharCodeCaseInsensitive(t) {
      return M(this._cursor.peek(), t) ? (this._cursor.advance(), true) : false;
    }
    _requireCharCode(t) {
      let o = this._cursor.clone();
      if (!this._attemptCharCode(t))
        throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o));
    }
    _attemptStr(t) {
      let o = t.length;
      if (this._cursor.charsLeft() < o)
        return false;
      let d = this._cursor.clone();
      for (let h = 0; h < o; h++)
        if (!this._attemptCharCode(t.charCodeAt(h)))
          return this._cursor = d, false;
      return true;
    }
    _attemptStrCaseInsensitive(t) {
      for (let o = 0; o < t.length; o++)
        if (!this._attemptCharCodeCaseInsensitive(t.charCodeAt(o)))
          return false;
      return true;
    }
    _requireStr(t) {
      let o = this._cursor.clone();
      if (!this._attemptStr(t))
        throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o));
    }
    _requireStrCaseInsensitive(t) {
      let o = this._cursor.clone();
      if (!this._attemptStrCaseInsensitive(t))
        throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o));
    }
    _attemptCharCodeUntilFn(t) {
      for (; !t(this._cursor.peek()); )
        this._cursor.advance();
    }
    _requireCharCodeUntilFn(t, o) {
      let d = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(t), this._cursor.clone().diff(d) < o)
        throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(d));
    }
    _attemptUntilChar(t) {
      for (; this._cursor.peek() !== t; )
        this._cursor.advance();
    }
    _readChar(t) {
      if (t && this._cursor.peek() === r.$AMPERSAND)
        return this._decodeEntity();
      {
        let o = String.fromCodePoint(this._cursor.peek());
        return this._cursor.advance(), o;
      }
    }
    _decodeEntity() {
      let t = this._cursor.clone();
      if (this._cursor.advance(), this._attemptCharCode(r.$HASH)) {
        let o = this._attemptCharCode(r.$x) || this._attemptCharCode(r.$X), d = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(F), this._cursor.peek() != r.$SEMICOLON)
          throw this._createError(l(this._cursor.peek()), this._cursor.getSpan());
        let h = this._cursor.getChars(d);
        this._cursor.advance();
        try {
          let A = parseInt(h, o ? 16 : 10);
          return String.fromCharCode(A);
        } catch {
          throw this._createError(p(this._cursor.getChars(t)), this._cursor.getSpan());
        }
      } else {
        let o = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(w), this._cursor.peek() != r.$SEMICOLON)
          return this._cursor = o, "&";
        let d = this._cursor.getChars(o);
        this._cursor.advance();
        let h = D.NAMED_ENTITIES[d];
        if (!h)
          throw this._createError(p(d), this._cursor.getSpan(t));
        return h;
      }
    }
    _consumeRawText(t, o) {
      this._beginToken(t ? s.ESCAPABLE_RAW_TEXT : s.RAW_TEXT);
      let d = [];
      for (; ; ) {
        let h = this._cursor.clone(), A = o();
        if (this._cursor = h, A)
          break;
        d.push(this._readChar(t));
      }
      return this._endToken([this._processCarriageReturns(d.join(""))]);
    }
    _consumeComment(t) {
      this._beginToken(s.COMMENT_START, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(s.COMMENT_END), this._requireStr("-->"), this._endToken([]);
    }
    _consumeBogusComment(t) {
      this._beginToken(s.COMMENT_START, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(s.COMMENT_END), this._cursor.advance(), this._endToken([]);
    }
    _consumeCdata(t) {
      this._beginToken(s.CDATA_START, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(s.CDATA_END), this._requireStr("]]>"), this._endToken([]);
    }
    _consumeDocType(t) {
      this._beginToken(s.DOC_TYPE_START, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(s.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
    }
    _consumePrefixAndName() {
      let t = this._cursor.clone(), o = "";
      for (; this._cursor.peek() !== r.$COLON && !O(this._cursor.peek()); )
        this._cursor.advance();
      let d;
      this._cursor.peek() === r.$COLON ? (o = this._cursor.getChars(t), this._cursor.advance(), d = this._cursor.clone()) : d = t, this._requireCharCodeUntilFn(B, o === "" ? 0 : 1);
      let h = this._cursor.getChars(d);
      return [o, h];
    }
    _consumeTagOpen(t) {
      let o, d, h, A = this.tokens.length, q = this._cursor.clone(), P = [];
      try {
        if (!r.isAsciiLetter(this._cursor.peek()))
          throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(t));
        for (h = this._consumeTagOpenStart(t), d = h.parts[0], o = h.parts[1], this._attemptCharCodeUntilFn(g); this._cursor.peek() !== r.$SLASH && this._cursor.peek() !== r.$GT; ) {
          let [X, Q] = this._consumeAttributeName();
          if (this._attemptCharCodeUntilFn(g), this._attemptCharCode(r.$EQ)) {
            this._attemptCharCodeUntilFn(g);
            let H = this._consumeAttributeValue();
            P.push({ prefix: X, name: Q, value: H });
          } else
            P.push({ prefix: X, name: Q });
          this._attemptCharCodeUntilFn(g);
        }
        this._consumeTagOpenEnd();
      } catch (X) {
        if (X instanceof m) {
          this._cursor = q, h && (this.tokens.length = A), this._beginToken(s.TEXT, t), this._endToken(["<"]);
          return;
        }
        throw X;
      }
      if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === s.TAG_OPEN_END_VOID)
        return;
      let G = this._getTagContentType(o, d, this._fullNameStack.length > 0, P);
      this._handleFullNameStackForTagOpen(d, o), G === D.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(d, o, false) : G === D.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(d, o, true);
    }
    _consumeRawTextWithTagClose(t, o, d) {
      let h = this._consumeRawText(d, () => !this._attemptCharCode(r.$LT) || !this._attemptCharCode(r.$SLASH) || (this._attemptCharCodeUntilFn(g), !this._attemptStrCaseInsensitive(t ? `${t}:${o}` : o)) ? false : (this._attemptCharCodeUntilFn(g), this._attemptCharCode(r.$GT)));
      this._beginToken(s.TAG_CLOSE), this._requireCharCodeUntilFn((A) => A === r.$GT, 3), this._cursor.advance(), this._endToken([t, o]), this._handleFullNameStackForTagClose(t, o);
    }
    _consumeTagOpenStart(t) {
      this._beginToken(s.TAG_OPEN_START, t);
      let o = this._consumePrefixAndName();
      return this._endToken(o);
    }
    _consumeAttributeName() {
      let t = this._cursor.peek();
      if (t === r.$SQ || t === r.$DQ)
        throw this._createError(l(t), this._cursor.getSpan());
      this._beginToken(s.ATTR_NAME);
      let o = this._consumePrefixAndName();
      return this._endToken(o), o;
    }
    _consumeAttributeValue() {
      let t;
      if (this._cursor.peek() === r.$SQ || this._cursor.peek() === r.$DQ) {
        this._beginToken(s.ATTR_QUOTE);
        let o = this._cursor.peek();
        this._cursor.advance(), this._endToken([String.fromCodePoint(o)]), this._beginToken(s.ATTR_VALUE);
        let d = [];
        for (; this._cursor.peek() !== o; )
          d.push(this._readChar(true));
        t = this._processCarriageReturns(d.join("")), this._endToken([t]), this._beginToken(s.ATTR_QUOTE), this._cursor.advance(), this._endToken([String.fromCodePoint(o)]);
      } else {
        this._beginToken(s.ATTR_VALUE);
        let o = this._cursor.clone();
        this._requireCharCodeUntilFn(B, 1), t = this._processCarriageReturns(this._cursor.getChars(o)), this._endToken([t]);
      }
      return t;
    }
    _consumeTagOpenEnd() {
      let t = this._attemptCharCode(r.$SLASH) ? s.TAG_OPEN_END_VOID : s.TAG_OPEN_END;
      this._beginToken(t), this._requireCharCode(r.$GT), this._endToken([]);
    }
    _consumeTagClose(t) {
      if (this._beginToken(s.TAG_CLOSE, t), this._attemptCharCodeUntilFn(g), this._allowHtmComponentClosingTags && this._attemptCharCode(r.$SLASH))
        this._attemptCharCodeUntilFn(g), this._requireCharCode(r.$GT), this._endToken([]);
      else {
        let [o, d] = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(g), this._requireCharCode(r.$GT), this._endToken([o, d]), this._handleFullNameStackForTagClose(o, d);
      }
    }
    _consumeExpansionFormStart() {
      this._beginToken(s.EXPANSION_FORM_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._expansionCaseStack.push(s.EXPANSION_FORM_START), this._beginToken(s.RAW_TEXT);
      let t = this._readUntil(r.$COMMA);
      this._endToken([t]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(g), this._beginToken(s.RAW_TEXT);
      let o = this._readUntil(r.$COMMA);
      this._endToken([o]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(g);
    }
    _consumeExpansionCaseStart() {
      this._beginToken(s.EXPANSION_CASE_VALUE);
      let t = this._readUntil(r.$LBRACE).trim();
      this._endToken([t]), this._attemptCharCodeUntilFn(g), this._beginToken(s.EXPANSION_CASE_EXP_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._attemptCharCodeUntilFn(g), this._expansionCaseStack.push(s.EXPANSION_CASE_EXP_START);
    }
    _consumeExpansionCaseEnd() {
      this._beginToken(s.EXPANSION_CASE_EXP_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._attemptCharCodeUntilFn(g), this._expansionCaseStack.pop();
    }
    _consumeExpansionFormEnd() {
      this._beginToken(s.EXPANSION_FORM_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._expansionCaseStack.pop();
    }
    _consumeText() {
      let t = this._cursor.clone();
      this._beginToken(s.TEXT, t);
      let o = [];
      do
        this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (o.push(this._interpolationConfig.start), this._inInterpolation = true) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (o.push(this._interpolationConfig.end), this._inInterpolation = false) : o.push(this._readChar(true));
      while (!this._isTextEnd());
      this._endToken([this._processCarriageReturns(o.join(""))]);
    }
    _isTextEnd() {
      return !!(this._cursor.peek() === r.$LT || this._cursor.peek() === r.$EOF || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === r.$RBRACE && this._isInExpansionCase()));
    }
    _readUntil(t) {
      let o = this._cursor.clone();
      return this._attemptUntilChar(t), this._cursor.getChars(o);
    }
    _isInExpansionCase() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === s.EXPANSION_CASE_EXP_START;
    }
    _isInExpansionForm() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === s.EXPANSION_FORM_START;
    }
    isExpansionFormStart() {
      if (this._cursor.peek() !== r.$LBRACE)
        return false;
      if (this._interpolationConfig) {
        let t = this._cursor.clone(), o = this._attemptStr(this._interpolationConfig.start);
        return this._cursor = t, !o;
      }
      return true;
    }
    _handleFullNameStackForTagOpen(t, o) {
      let d = D.mergeNsAndName(t, o);
      (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === d) && this._fullNameStack.push(d);
    }
    _handleFullNameStackForTagClose(t, o) {
      let d = D.mergeNsAndName(t, o);
      this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === d && this._fullNameStack.pop();
    }
  };
  function g(t) {
    return !r.isWhitespace(t) || t === r.$EOF;
  }
  function B(t) {
    return r.isWhitespace(t) || t === r.$GT || t === r.$SLASH || t === r.$SQ || t === r.$DQ || t === r.$EQ;
  }
  function O(t) {
    return (t < r.$a || r.$z < t) && (t < r.$A || r.$Z < t) && (t < r.$0 || t > r.$9);
  }
  function F(t) {
    return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiHexDigit(t);
  }
  function w(t) {
    return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiLetter(t);
  }
  function b(t) {
    return t === r.$EQ || r.isAsciiLetter(t) || r.isDigit(t);
  }
  function M(t, o) {
    return R(t) == R(o);
  }
  function R(t) {
    return t >= r.$a && t <= r.$z ? t - r.$a + r.$A : t;
  }
  function U(t) {
    let o = [], d;
    for (let h = 0; h < t.length; h++) {
      let A = t[h];
      d && d.type == s.TEXT && A.type == s.TEXT ? (d.parts[0] += A.parts[0], d.sourceSpan.end = A.sourceSpan.end) : (d = A, o.push(d));
    }
    return o;
  }
  var k = class {
    constructor(t, o) {
      if (t instanceof k)
        this.file = t.file, this.input = t.input, this.end = t.end, this.state = Object.assign({}, t.state);
      else {
        if (!o)
          throw new Error("Programming error: the range argument must be provided with a file argument.");
        this.file = t, this.input = t.content, this.end = o.endPos, this.state = { peek: -1, offset: o.startPos, line: o.startLine, column: o.startCol };
      }
    }
    clone() {
      return new k(this);
    }
    peek() {
      return this.state.peek;
    }
    charsLeft() {
      return this.end - this.state.offset;
    }
    diff(t) {
      return this.state.offset - t.state.offset;
    }
    advance() {
      this.advanceState(this.state);
    }
    init() {
      this.updatePeek(this.state);
    }
    getSpan(t, o) {
      if (t = t || this, o)
        for (t = t.clone(); this.diff(t) > 0 && o.indexOf(t.peek()) !== -1; )
          t.advance();
      return new u.ParseSourceSpan(new u.ParseLocation(t.file, t.state.offset, t.state.line, t.state.column), new u.ParseLocation(this.file, this.state.offset, this.state.line, this.state.column));
    }
    getChars(t) {
      return this.input.substring(t.state.offset, this.state.offset);
    }
    charAt(t) {
      return this.input.charCodeAt(t);
    }
    advanceState(t) {
      if (t.offset >= this.end)
        throw this.state = t, new L('Unexpected character "EOF"', this);
      let o = this.charAt(t.offset);
      o === r.$LF ? (t.line++, t.column = 0) : r.isNewLine(o) || t.column++, t.offset++, this.updatePeek(t);
    }
    updatePeek(t) {
      t.peek = t.offset >= this.end ? r.$EOF : this.charAt(t.offset);
    }
  }, j = class extends k {
    constructor(t, o) {
      t instanceof j ? (super(t), this.internalState = Object.assign({}, t.internalState)) : (super(t, o), this.internalState = this.state);
    }
    advance() {
      this.state = this.internalState, super.advance(), this.processEscapeSequence();
    }
    init() {
      super.init(), this.processEscapeSequence();
    }
    clone() {
      return new j(this);
    }
    getChars(t) {
      let o = t.clone(), d = "";
      for (; o.internalState.offset < this.internalState.offset; )
        d += String.fromCodePoint(o.peek()), o.advance();
      return d;
    }
    processEscapeSequence() {
      let t = () => this.internalState.peek;
      if (t() === r.$BACKSLASH)
        if (this.internalState = Object.assign({}, this.state), this.advanceState(this.internalState), t() === r.$n)
          this.state.peek = r.$LF;
        else if (t() === r.$r)
          this.state.peek = r.$CR;
        else if (t() === r.$v)
          this.state.peek = r.$VTAB;
        else if (t() === r.$t)
          this.state.peek = r.$TAB;
        else if (t() === r.$b)
          this.state.peek = r.$BSPACE;
        else if (t() === r.$f)
          this.state.peek = r.$FF;
        else if (t() === r.$u)
          if (this.advanceState(this.internalState), t() === r.$LBRACE) {
            this.advanceState(this.internalState);
            let o = this.clone(), d = 0;
            for (; t() !== r.$RBRACE; )
              this.advanceState(this.internalState), d++;
            this.state.peek = this.decodeHexDigits(o, d);
          } else {
            let o = this.clone();
            this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 4);
          }
        else if (t() === r.$x) {
          this.advanceState(this.internalState);
          let o = this.clone();
          this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 2);
        } else if (r.isOctalDigit(t())) {
          let o = "", d = 0, h = this.clone();
          for (; r.isOctalDigit(t()) && d < 3; )
            h = this.clone(), o += String.fromCodePoint(t()), this.advanceState(this.internalState), d++;
          this.state.peek = parseInt(o, 8), this.internalState = h.internalState;
        } else
          r.isNewLine(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
    }
    decodeHexDigits(t, o) {
      let d = this.input.substr(t.internalState.offset, o), h = parseInt(d, 16);
      if (isNaN(h))
        throw t.state = t.internalState, new L("Invalid hexadecimal escape sequence", t);
      return h;
    }
  }, L = class {
    constructor(t, o) {
      this.msg = t, this.cursor = o;
    }
  };
  e.CursorError = L;
} });
var ns = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/parser.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = Ne(), u = As(), n = $l(), D = Ze(), s = class extends r.ParseError {
    constructor(i, l, p) {
      super(l, p), this.elementName = i;
    }
    static create(i, l, p) {
      return new s(i, l, p);
    }
  };
  e.TreeError = s;
  var a = class {
    constructor(i, l) {
      this.rootNodes = i, this.errors = l;
    }
  };
  e.ParseTreeResult = a;
  var f = class {
    constructor(i) {
      this.getTagDefinition = i;
    }
    parse(i, l, p) {
      let m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, C = arguments.length > 4 ? arguments[4] : void 0, g = (k) => function(j) {
        for (var L = arguments.length, t = new Array(L > 1 ? L - 1 : 0), o = 1; o < L; o++)
          t[o - 1] = arguments[o];
        return k(j.toLowerCase(), ...t);
      }, B = m ? this.getTagDefinition : g(this.getTagDefinition), O = (k) => B(k).contentType, F = m ? C : g(C), w = C ? (k, j, L, t) => {
        let o = F(k, j, L, t);
        return o !== void 0 ? o : O(k);
      } : O, b = n.tokenize(i, l, w, p), M = p && p.canSelfClose || false, R = p && p.allowHtmComponentClosingTags || false, U = new c(b.tokens, B, M, R, m).build();
      return new a(U.rootNodes, b.errors.concat(U.errors));
    }
  };
  e.Parser = f;
  var c = class {
    constructor(i, l, p, m, C) {
      this.tokens = i, this.getTagDefinition = l, this.canSelfClose = p, this.allowHtmComponentClosingTags = m, this.isTagNameCaseSensitive = C, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance();
    }
    build() {
      for (; this._peek.type !== n.TokenType.EOF; )
        this._peek.type === n.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === n.TokenType.TAG_CLOSE ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === n.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === n.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === n.TokenType.TEXT || this._peek.type === n.TokenType.RAW_TEXT || this._peek.type === n.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === n.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === n.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance();
      return new a(this._rootNodes, this._errors);
    }
    _advance() {
      let i = this._peek;
      return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], i;
    }
    _advanceIf(i) {
      return this._peek.type === i ? this._advance() : null;
    }
    _consumeCdata(i) {
      let l = this._advance(), p = this._getText(l), m = this._advanceIf(n.TokenType.CDATA_END);
      this._addToParent(new u.CDATA(p, new r.ParseSourceSpan(i.sourceSpan.start, (m || l).sourceSpan.end)));
    }
    _consumeComment(i) {
      let l = this._advanceIf(n.TokenType.RAW_TEXT), p = this._advanceIf(n.TokenType.COMMENT_END), m = l != null ? l.parts[0].trim() : null, C = new r.ParseSourceSpan(i.sourceSpan.start, (p || l || i).sourceSpan.end);
      this._addToParent(new u.Comment(m, C));
    }
    _consumeDocType(i) {
      let l = this._advanceIf(n.TokenType.RAW_TEXT), p = this._advanceIf(n.TokenType.DOC_TYPE_END), m = l != null ? l.parts[0].trim() : null, C = new r.ParseSourceSpan(i.sourceSpan.start, (p || l || i).sourceSpan.end);
      this._addToParent(new u.DocType(m, C));
    }
    _consumeExpansion(i) {
      let l = this._advance(), p = this._advance(), m = [];
      for (; this._peek.type === n.TokenType.EXPANSION_CASE_VALUE; ) {
        let g = this._parseExpansionCase();
        if (!g)
          return;
        m.push(g);
      }
      if (this._peek.type !== n.TokenType.EXPANSION_FORM_END) {
        this._errors.push(s.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
        return;
      }
      let C = new r.ParseSourceSpan(i.sourceSpan.start, this._peek.sourceSpan.end);
      this._addToParent(new u.Expansion(l.parts[0], p.parts[0], m, C, l.sourceSpan)), this._advance();
    }
    _parseExpansionCase() {
      let i = this._advance();
      if (this._peek.type !== n.TokenType.EXPANSION_CASE_EXP_START)
        return this._errors.push(s.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
      let l = this._advance(), p = this._collectExpansionExpTokens(l);
      if (!p)
        return null;
      let m = this._advance();
      p.push(new n.Token(n.TokenType.EOF, [], m.sourceSpan));
      let C = new c(p, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build();
      if (C.errors.length > 0)
        return this._errors = this._errors.concat(C.errors), null;
      let g = new r.ParseSourceSpan(i.sourceSpan.start, m.sourceSpan.end), B = new r.ParseSourceSpan(l.sourceSpan.start, m.sourceSpan.end);
      return new u.ExpansionCase(i.parts[0], C.rootNodes, g, i.sourceSpan, B);
    }
    _collectExpansionExpTokens(i) {
      let l = [], p = [n.TokenType.EXPANSION_CASE_EXP_START];
      for (; ; ) {
        if ((this._peek.type === n.TokenType.EXPANSION_FORM_START || this._peek.type === n.TokenType.EXPANSION_CASE_EXP_START) && p.push(this._peek.type), this._peek.type === n.TokenType.EXPANSION_CASE_EXP_END)
          if (v(p, n.TokenType.EXPANSION_CASE_EXP_START)) {
            if (p.pop(), p.length == 0)
              return l;
          } else
            return this._errors.push(s.create(null, i.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === n.TokenType.EXPANSION_FORM_END)
          if (v(p, n.TokenType.EXPANSION_FORM_START))
            p.pop();
          else
            return this._errors.push(s.create(null, i.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === n.TokenType.EOF)
          return this._errors.push(s.create(null, i.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        l.push(this._advance());
      }
    }
    _getText(i) {
      let l = i.parts[0];
      if (l.length > 0 && l[0] == `
`) {
        let p = this._getParentElement();
        p != null && p.children.length == 0 && this.getTagDefinition(p.name).ignoreFirstLf && (l = l.substring(1));
      }
      return l;
    }
    _consumeText(i) {
      let l = this._getText(i);
      l.length > 0 && this._addToParent(new u.Text(l, i.sourceSpan));
    }
    _closeVoidElement() {
      let i = this._getParentElement();
      i && this.getTagDefinition(i.name).isVoid && this._elementStack.pop();
    }
    _consumeStartTag(i) {
      let l = i.parts[0], p = i.parts[1], m = [];
      for (; this._peek.type === n.TokenType.ATTR_NAME; )
        m.push(this._consumeAttr(this._advance()));
      let C = this._getElementFullName(l, p, this._getParentElement()), g = false;
      if (this._peek.type === n.TokenType.TAG_OPEN_END_VOID) {
        this._advance(), g = true;
        let b = this.getTagDefinition(C);
        this.canSelfClose || b.canSelfClose || D.getNsPrefix(C) !== null || b.isVoid || this._errors.push(s.create(C, i.sourceSpan, `Only void and foreign elements can be self closed "${i.parts[1]}"`));
      } else
        this._peek.type === n.TokenType.TAG_OPEN_END && (this._advance(), g = false);
      let B = this._peek.sourceSpan.start, O = new r.ParseSourceSpan(i.sourceSpan.start, B), F = new r.ParseSourceSpan(i.sourceSpan.start.moveBy(1), i.sourceSpan.end), w = new u.Element(C, m, [], O, O, void 0, F);
      this._pushElement(w), g && (this._popElement(C), w.endSourceSpan = O);
    }
    _pushElement(i) {
      let l = this._getParentElement();
      l && this.getTagDefinition(l.name).isClosedByChild(i.name) && this._elementStack.pop(), this._addToParent(i), this._elementStack.push(i);
    }
    _consumeEndTag(i) {
      let l = this.allowHtmComponentClosingTags && i.parts.length === 0 ? null : this._getElementFullName(i.parts[0], i.parts[1], this._getParentElement());
      if (this._getParentElement() && (this._getParentElement().endSourceSpan = i.sourceSpan), l && this.getTagDefinition(l).isVoid)
        this._errors.push(s.create(l, i.sourceSpan, `Void elements do not have end tags "${i.parts[1]}"`));
      else if (!this._popElement(l)) {
        let p = `Unexpected closing tag "${l}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
        this._errors.push(s.create(l, i.sourceSpan, p));
      }
    }
    _popElement(i) {
      for (let l = this._elementStack.length - 1; l >= 0; l--) {
        let p = this._elementStack[l];
        if (!i || (D.getNsPrefix(p.name) ? p.name == i : p.name.toLowerCase() == i.toLowerCase()))
          return this._elementStack.splice(l, this._elementStack.length - l), true;
        if (!this.getTagDefinition(p.name).closedByParent)
          return false;
      }
      return false;
    }
    _consumeAttr(i) {
      let l = D.mergeNsAndName(i.parts[0], i.parts[1]), p = i.sourceSpan.end, m = "", C, g;
      if (this._peek.type === n.TokenType.ATTR_QUOTE && (g = this._advance().sourceSpan.start), this._peek.type === n.TokenType.ATTR_VALUE) {
        let B = this._advance();
        m = B.parts[0], p = B.sourceSpan.end, C = B.sourceSpan;
      }
      return this._peek.type === n.TokenType.ATTR_QUOTE && (p = this._advance().sourceSpan.end, C = new r.ParseSourceSpan(g, p)), new u.Attribute(l, m, new r.ParseSourceSpan(i.sourceSpan.start, p), C, i.sourceSpan);
    }
    _getParentElement() {
      return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
    }
    _getParentElementSkippingContainers() {
      let i = null;
      for (let l = this._elementStack.length - 1; l >= 0; l--) {
        if (!D.isNgContainer(this._elementStack[l].name))
          return { parent: this._elementStack[l], container: i };
        i = this._elementStack[l];
      }
      return { parent: null, container: i };
    }
    _addToParent(i) {
      let l = this._getParentElement();
      l != null ? l.children.push(i) : this._rootNodes.push(i);
    }
    _insertBeforeContainer(i, l, p) {
      if (!l)
        this._addToParent(p), this._elementStack.push(p);
      else {
        if (i) {
          let m = i.children.indexOf(l);
          i.children[m] = p;
        } else
          this._rootNodes.push(p);
        p.children.push(l), this._elementStack.splice(this._elementStack.indexOf(l), 0, p);
      }
    }
    _getElementFullName(i, l, p) {
      return i === "" && (i = this.getTagDefinition(l).implicitNamespacePrefix || "", i === "" && p != null && (i = D.getNsPrefix(p.name))), D.mergeNsAndName(i, l);
    }
  };
  function v(i, l) {
    return i.length > 0 && i[i.length - 1] === l;
  }
} });
var Ml = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_parser.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = Fs(), u = ns(), n = ns();
  e.ParseTreeResult = n.ParseTreeResult, e.TreeError = n.TreeError;
  var D = class extends u.Parser {
    constructor() {
      super(r.getHtmlTagDefinition);
    }
    parse(s, a, f) {
      let c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, v = arguments.length > 4 ? arguments[4] : void 0;
      return super.parse(s, a, f, c, v);
    }
  };
  e.HtmlParser = D;
} });
var ss = I({ "node_modules/angular-html-parser/lib/angular-html-parser/src/index.js"(e) {
  "use strict";
  N(), Object.defineProperty(e, "__esModule", { value: true });
  var r = Ml(), u = Ze();
  e.TagContentType = u.TagContentType;
  var n = null, D = () => (n || (n = new r.HtmlParser()), n);
  function s(a) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { canSelfClose: c = false, allowHtmComponentClosingTags: v = false, isTagNameCaseSensitive: i = false, getTagContentType: l } = f;
    return D().parse(a, "angular-html-parser", { tokenizeExpansionForms: false, interpolationConfig: void 0, canSelfClose: c, allowHtmComponentClosingTags: v }, i, l);
  }
  e.parse = s;
} });
var jl = I({ "src/language-html/parser-html.js"(e, r) {
  N();
  var { ParseSourceSpan: u, ParseLocation: n, ParseSourceFile: D } = Ne(), s = JD(), a = ls(), f = ZD(), { inferParserByLanguage: c } = yl(), v = Bl(), i = Nl(), l = Ol(), { hasPragma: p } = ql(), { Node: m } = Il(), { parseIeConditionalComment: C } = Rl(), { locStart: g, locEnd: B } = xl();
  function O(b, M, R) {
    let { canSelfClose: U, normalizeTagName: k, normalizeAttributeName: j, allowHtmComponentClosingTags: L, isTagNameCaseSensitive: t, getTagContentType: o } = M, d = ss(), { RecursiveVisitor: h, visitAll: A } = As(), { ParseSourceSpan: q } = Ne(), { getHtmlTagDefinition: P } = Fs(), { rootNodes: G, errors: X } = d.parse(b, { canSelfClose: U, allowHtmComponentClosingTags: L, isTagNameCaseSensitive: t, getTagContentType: o });
    if (R.parser === "vue")
      if (G.some((_) => _.type === "docType" && _.value === "html" || _.type === "element" && _.name.toLowerCase() === "html")) {
        U = true, k = true, j = true, L = true, t = false;
        let _ = d.parse(b, { canSelfClose: U, allowHtmComponentClosingTags: L, isTagNameCaseSensitive: t });
        G = _.rootNodes, X = _.errors;
      } else {
        let _ = (T) => {
          if (!T || T.type !== "element" || T.name !== "template")
            return false;
          let x = T.attrs.find((V) => V.name === "lang"), $ = x && x.value;
          return !$ || c($, R) === "html";
        };
        if (G.some(_)) {
          let T, x = () => d.parse(b, { canSelfClose: U, allowHtmComponentClosingTags: L, isTagNameCaseSensitive: t }), $ = () => T || (T = x()), V = (z) => $().rootNodes.find((Y) => {
            let { startSourceSpan: ie } = Y;
            return ie && ie.start.offset === z.startSourceSpan.start.offset;
          });
          for (let z = 0; z < G.length; z++) {
            let Y = G[z], { endSourceSpan: ie, startSourceSpan: Ee } = Y;
            if (ie === null)
              X = $().errors, G[z] = V(Y) || Y;
            else if (_(Y)) {
              let Fe = $(), Oe = Ee.end.offset, Z = ie.start.offset;
              for (let re of Fe.errors) {
                let { offset: oe } = re.span.start;
                if (Oe < oe && oe < Z) {
                  X = [re];
                  break;
                }
              }
              G[z] = V(Y) || Y;
            }
          }
        }
      }
    if (X.length > 0) {
      let { msg: E, span: { start: _, end: T } } = X[0];
      throw f(E, { start: { line: _.line + 1, column: _.col + 1 }, end: { line: T.line + 1, column: T.col + 1 } });
    }
    let Q = (E) => {
      let _ = E.name.startsWith(":") ? E.name.slice(1).split(":")[0] : null, T = E.nameSpan.toString(), x = _ !== null && T.startsWith(`${_}:`), $ = x ? T.slice(_.length + 1) : T;
      E.name = $, E.namespace = _, E.hasExplicitNamespace = x;
    }, H = (E) => {
      switch (E.type) {
        case "element":
          Q(E);
          for (let _ of E.attrs)
            Q(_), _.valueSpan ? (_.value = _.valueSpan.toString(), /["']/.test(_.value[0]) && (_.value = _.value.slice(1, -1))) : _.value = null;
          break;
        case "comment":
          E.value = E.sourceSpan.toString().slice(4, -3);
          break;
        case "text":
          E.value = E.sourceSpan.toString();
          break;
      }
    }, W = (E, _) => {
      let T = E.toLowerCase();
      return _(T) ? T : E;
    }, K = (E) => {
      if (E.type === "element" && (k && (!E.namespace || E.namespace === E.tagDefinition.implicitNamespacePrefix || l(E)) && (E.name = W(E.name, (_) => _ in v)), j)) {
        let _ = i[E.name] || /* @__PURE__ */ Object.create(null);
        for (let T of E.attrs)
          T.namespace || (T.name = W(T.name, (x) => E.name in i && (x in i["*"] || x in _)));
      }
    }, J = (E) => {
      E.sourceSpan && E.endSourceSpan && (E.sourceSpan = new q(E.sourceSpan.start, E.endSourceSpan.end));
    }, S = (E) => {
      if (E.type === "element") {
        let _ = P(t ? E.name : E.name.toLowerCase());
        !E.namespace || E.namespace === _.implicitNamespacePrefix || l(E) ? E.tagDefinition = _ : E.tagDefinition = P("");
      }
    };
    return A(new class extends h {
      visit(E) {
        H(E), S(E), K(E), J(E);
      }
    }(), G), G;
  }
  function F(b, M, R) {
    let U = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, { frontMatter: k, content: j } = U ? s(b) : { frontMatter: null, content: b }, L = new D(b, M.filepath), t = new n(L, 0, 0, 0), o = t.moveBy(b.length), d = { type: "root", sourceSpan: new u(t, o), children: O(j, R, M) };
    if (k) {
      let q = new n(L, 0, 0, 0), P = q.moveBy(k.raw.length);
      k.sourceSpan = new u(q, P), d.children.unshift(k);
    }
    let h = new m(d), A = (q, P) => {
      let { offset: G } = P, X = b.slice(0, G).replace(/[^\n\r]/g, " "), H = F(X + q, M, R, false);
      H.sourceSpan = new u(P, a(H.children).sourceSpan.end);
      let W = H.children[0];
      return W.length === G ? H.children.shift() : (W.sourceSpan = new u(W.sourceSpan.start.moveBy(G), W.sourceSpan.end), W.value = W.value.slice(G)), H;
    };
    return h.walk((q) => {
      if (q.type === "comment") {
        let P = C(q, A);
        P && q.parent.replaceChild(q, P);
      }
    }), h;
  }
  function w() {
    let { name: b, canSelfClose: M = false, normalizeTagName: R = false, normalizeAttributeName: U = false, allowHtmComponentClosingTags: k = false, isTagNameCaseSensitive: j = false, getTagContentType: L } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return { parse: (t, o, d) => F(t, Object.assign({ parser: b }, d), { canSelfClose: M, normalizeTagName: R, normalizeAttributeName: U, allowHtmComponentClosingTags: k, isTagNameCaseSensitive: j, getTagContentType: L }), hasPragma: p, astFormat: "html", locStart: g, locEnd: B };
  }
  r.exports = { parsers: { html: w({ name: "html", canSelfClose: true, normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true }), angular: w({ name: "angular", canSelfClose: true }), vue: w({ name: "vue", canSelfClose: true, isTagNameCaseSensitive: true, getTagContentType: (b, M, R, U) => {
    if (b.toLowerCase() !== "html" && !R && (b !== "template" || U.some((k) => {
      let { name: j, value: L } = k;
      return j === "lang" && L !== "html" && L !== "" && L !== void 0;
    })))
      return ss().TagContentType.RAW_TEXT;
  } }), lwc: w({ name: "lwc" }) } };
} });
var _2 = jl();
export {
  _2 as default
};
//# sourceMappingURL=prettier_esm_parser-html.js.map
