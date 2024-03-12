import "./chunk-YGAUDZUZ.js";

// node_modules/prettier/esm/parser-babel.mjs
var v = (l, h) => () => (h || l((h = { exports: {} }).exports, h), h.exports);
var he = v((qf, ii) => {
  var Nt = function(l) {
    return l && l.Math == Math && l;
  };
  ii.exports = Nt(typeof globalThis == "object" && globalThis) || Nt(typeof window == "object" && window) || Nt(typeof self == "object" && self) || Nt(typeof global == "object" && global) || function() {
    return this;
  }() || Function("return this")();
});
var ce = v((Uf, ai) => {
  ai.exports = function(l) {
    try {
      return !!l();
    } catch {
      return true;
    }
  };
});
var ve = v(($f, ni) => {
  var xh = ce();
  ni.exports = !xh(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] != 7;
  });
});
var kt = v((Hf, oi) => {
  var gh = ce();
  oi.exports = !gh(function() {
    var l = (function() {
    }).bind();
    return typeof l != "function" || l.hasOwnProperty("prototype");
  });
});
var Ft = v((zf, li) => {
  var Ph = kt(), Dt = Function.prototype.call;
  li.exports = Ph ? Dt.bind(Dt) : function() {
    return Dt.apply(Dt, arguments);
  };
});
var pi = v((ci) => {
  "use strict";
  var hi = {}.propertyIsEnumerable, ui = Object.getOwnPropertyDescriptor, Ah = ui && !hi.call({ 1: 2 }, 1);
  ci.f = Ah ? function(h) {
    var f = ui(this, h);
    return !!f && f.enumerable;
  } : hi;
});
var Ps = v((Kf, fi) => {
  fi.exports = function(l, h) {
    return { enumerable: !(l & 1), configurable: !(l & 2), writable: !(l & 4), value: h };
  };
});
var pe = v((Wf, yi) => {
  var di = kt(), mi = Function.prototype, As = mi.call, Th = di && mi.bind.bind(As, As);
  yi.exports = di ? Th : function(l) {
    return function() {
      return As.apply(l, arguments);
    };
  };
});
var st = v((Gf, gi) => {
  var xi = pe(), vh = xi({}.toString), Eh = xi("".slice);
  gi.exports = function(l) {
    return Eh(vh(l), 8, -1);
  };
});
var Ai = v((Jf, Pi) => {
  var Ch = pe(), bh = ce(), Sh = st(), Ts = Object, wh = Ch("".split);
  Pi.exports = bh(function() {
    return !Ts("z").propertyIsEnumerable(0);
  }) ? function(l) {
    return Sh(l) == "String" ? wh(l, "") : Ts(l);
  } : Ts;
});
var vs = v((Xf, Ti) => {
  Ti.exports = function(l) {
    return l == null;
  };
});
var Es = v((Yf, vi) => {
  var Ih = vs(), Nh = TypeError;
  vi.exports = function(l) {
    if (Ih(l))
      throw Nh("Can't call method on " + l);
    return l;
  };
});
var Lt = v((Qf, Ei) => {
  var kh = Ai(), Dh = Es();
  Ei.exports = function(l) {
    return kh(Dh(l));
  };
});
var bs = v((Zf, Ci) => {
  var Cs = typeof document == "object" && document.all, Fh = typeof Cs > "u" && Cs !== void 0;
  Ci.exports = { all: Cs, IS_HTMLDDA: Fh };
});
var ie = v((ed, Si) => {
  var bi = bs(), Lh = bi.all;
  Si.exports = bi.IS_HTMLDDA ? function(l) {
    return typeof l == "function" || l === Lh;
  } : function(l) {
    return typeof l == "function";
  };
});
var Oe = v((td, Ni) => {
  var wi = ie(), Ii = bs(), Oh = Ii.all;
  Ni.exports = Ii.IS_HTMLDDA ? function(l) {
    return typeof l == "object" ? l !== null : wi(l) || l === Oh;
  } : function(l) {
    return typeof l == "object" ? l !== null : wi(l);
  };
});
var rt = v((sd, ki) => {
  var Ss = he(), Bh = ie(), Mh = function(l) {
    return Bh(l) ? l : void 0;
  };
  ki.exports = function(l, h) {
    return arguments.length < 2 ? Mh(Ss[l]) : Ss[l] && Ss[l][h];
  };
});
var Fi = v((rd, Di) => {
  var _h = pe();
  Di.exports = _h({}.isPrototypeOf);
});
var Oi = v((id, Li) => {
  var Rh = rt();
  Li.exports = Rh("navigator", "userAgent") || "";
});
var Ui = v((ad, qi) => {
  var ji = he(), ws = Oi(), Bi = ji.process, Mi = ji.Deno, _i = Bi && Bi.versions || Mi && Mi.version, Ri = _i && _i.v8, fe, Ot;
  Ri && (fe = Ri.split("."), Ot = fe[0] > 0 && fe[0] < 4 ? 1 : +(fe[0] + fe[1]));
  !Ot && ws && (fe = ws.match(/Edge\/(\d+)/), (!fe || fe[1] >= 74) && (fe = ws.match(/Chrome\/(\d+)/), fe && (Ot = +fe[1])));
  qi.exports = Ot;
});
var Is = v((nd, Hi) => {
  var $i = Ui(), jh = ce();
  Hi.exports = !!Object.getOwnPropertySymbols && !jh(function() {
    var l = Symbol();
    return !String(l) || !(Object(l) instanceof Symbol) || !Symbol.sham && $i && $i < 41;
  });
});
var Ns = v((od, zi) => {
  var qh = Is();
  zi.exports = qh && !Symbol.sham && typeof Symbol.iterator == "symbol";
});
var ks = v((ld, Vi) => {
  var Uh = rt(), $h = ie(), Hh = Fi(), zh = Ns(), Vh = Object;
  Vi.exports = zh ? function(l) {
    return typeof l == "symbol";
  } : function(l) {
    var h = Uh("Symbol");
    return $h(h) && Hh(h.prototype, Vh(l));
  };
});
var Wi = v((hd, Ki) => {
  var Kh = String;
  Ki.exports = function(l) {
    try {
      return Kh(l);
    } catch {
      return "Object";
    }
  };
});
var Bt = v((ud, Gi) => {
  var Wh = ie(), Gh = Wi(), Jh = TypeError;
  Gi.exports = function(l) {
    if (Wh(l))
      return l;
    throw Jh(Gh(l) + " is not a function");
  };
});
var Xi = v((cd, Ji) => {
  var Xh = Bt(), Yh = vs();
  Ji.exports = function(l, h) {
    var f = l[h];
    return Yh(f) ? void 0 : Xh(f);
  };
});
var Qi = v((pd, Yi) => {
  var Ds = Ft(), Fs = ie(), Ls = Oe(), Qh = TypeError;
  Yi.exports = function(l, h) {
    var f, d;
    if (h === "string" && Fs(f = l.toString) && !Ls(d = Ds(f, l)) || Fs(f = l.valueOf) && !Ls(d = Ds(f, l)) || h !== "string" && Fs(f = l.toString) && !Ls(d = Ds(f, l)))
      return d;
    throw Qh("Can't convert object to primitive value");
  };
});
var ea = v((fd, Zi) => {
  Zi.exports = false;
});
var Mt = v((dd, sa) => {
  var ta = he(), Zh = Object.defineProperty;
  sa.exports = function(l, h) {
    try {
      Zh(ta, l, { value: h, configurable: true, writable: true });
    } catch {
      ta[l] = h;
    }
    return h;
  };
});
var _t = v((md, ia) => {
  var eu = he(), tu = Mt(), ra = "__core-js_shared__", su = eu[ra] || tu(ra, {});
  ia.exports = su;
});
var Os = v((yd, na) => {
  var ru = ea(), aa = _t();
  (na.exports = function(l, h) {
    return aa[l] || (aa[l] = h !== void 0 ? h : {});
  })("versions", []).push({ version: "3.26.1", mode: ru ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
});
var Bs = v((xd, oa) => {
  var iu = Es(), au = Object;
  oa.exports = function(l) {
    return au(iu(l));
  };
});
var Ie = v((gd, la) => {
  var nu = pe(), ou = Bs(), lu = nu({}.hasOwnProperty);
  la.exports = Object.hasOwn || function(h, f) {
    return lu(ou(h), f);
  };
});
var Ms = v((Pd, ha) => {
  var hu = pe(), uu = 0, cu = Math.random(), pu = hu(1 .toString);
  ha.exports = function(l) {
    return "Symbol(" + (l === void 0 ? "" : l) + ")_" + pu(++uu + cu, 36);
  };
});
var it = v((Ad, da) => {
  var fu = he(), du = Os(), ua = Ie(), mu = Ms(), ca = Is(), fa = Ns(), Ge = du("wks"), Be = fu.Symbol, pa = Be && Be.for, yu = fa ? Be : Be && Be.withoutSetter || mu;
  da.exports = function(l) {
    if (!ua(Ge, l) || !(ca || typeof Ge[l] == "string")) {
      var h = "Symbol." + l;
      ca && ua(Be, l) ? Ge[l] = Be[l] : fa && pa ? Ge[l] = pa(h) : Ge[l] = yu(h);
    }
    return Ge[l];
  };
});
var ga = v((Td, xa) => {
  var xu = Ft(), ma = Oe(), ya = ks(), gu = Xi(), Pu = Qi(), Au = it(), Tu = TypeError, vu = Au("toPrimitive");
  xa.exports = function(l, h) {
    if (!ma(l) || ya(l))
      return l;
    var f = gu(l, vu), d;
    if (f) {
      if (h === void 0 && (h = "default"), d = xu(f, l, h), !ma(d) || ya(d))
        return d;
      throw Tu("Can't convert object to primitive value");
    }
    return h === void 0 && (h = "number"), Pu(l, h);
  };
});
var _s = v((vd, Pa) => {
  var Eu = ga(), Cu = ks();
  Pa.exports = function(l) {
    var h = Eu(l, "string");
    return Cu(h) ? h : h + "";
  };
});
var va = v((Ed, Ta) => {
  var bu = he(), Aa = Oe(), Rs = bu.document, Su = Aa(Rs) && Aa(Rs.createElement);
  Ta.exports = function(l) {
    return Su ? Rs.createElement(l) : {};
  };
});
var js = v((Cd, Ea) => {
  var wu = ve(), Iu = ce(), Nu = va();
  Ea.exports = !wu && !Iu(function() {
    return Object.defineProperty(Nu("div"), "a", { get: function() {
      return 7;
    } }).a != 7;
  });
});
var qs = v((ba) => {
  var ku = ve(), Du = Ft(), Fu = pi(), Lu = Ps(), Ou = Lt(), Bu = _s(), Mu = Ie(), _u = js(), Ca = Object.getOwnPropertyDescriptor;
  ba.f = ku ? Ca : function(h, f) {
    if (h = Ou(h), f = Bu(f), _u)
      try {
        return Ca(h, f);
      } catch {
      }
    if (Mu(h, f))
      return Lu(!Du(Fu.f, h, f), h[f]);
  };
});
var wa = v((Sd, Sa) => {
  var Ru = ve(), ju = ce();
  Sa.exports = Ru && ju(function() {
    return Object.defineProperty(function() {
    }, "prototype", { value: 42, writable: false }).prototype != 42;
  });
});
var Rt = v((wd, Ia) => {
  var qu = Oe(), Uu = String, $u = TypeError;
  Ia.exports = function(l) {
    if (qu(l))
      return l;
    throw $u(Uu(l) + " is not an object");
  };
});
var at = v((ka) => {
  var Hu = ve(), zu = js(), Vu = wa(), jt = Rt(), Na = _s(), Ku = TypeError, Us = Object.defineProperty, Wu = Object.getOwnPropertyDescriptor, $s = "enumerable", Hs = "configurable", zs = "writable";
  ka.f = Hu ? Vu ? function(h, f, d) {
    if (jt(h), f = Na(f), jt(d), typeof h == "function" && f === "prototype" && "value" in d && zs in d && !d[zs]) {
      var x = Wu(h, f);
      x && x[zs] && (h[f] = d.value, d = { configurable: Hs in d ? d[Hs] : x[Hs], enumerable: $s in d ? d[$s] : x[$s], writable: false });
    }
    return Us(h, f, d);
  } : Us : function(h, f, d) {
    if (jt(h), f = Na(f), jt(d), zu)
      try {
        return Us(h, f, d);
      } catch {
      }
    if ("get" in d || "set" in d)
      throw Ku("Accessors not supported");
    return "value" in d && (h[f] = d.value), h;
  };
});
var Vs = v((Nd, Da) => {
  var Gu = ve(), Ju = at(), Xu = Ps();
  Da.exports = Gu ? function(l, h, f) {
    return Ju.f(l, h, Xu(1, f));
  } : function(l, h, f) {
    return l[h] = f, l;
  };
});
var Oa = v((kd, La) => {
  var Ks = ve(), Yu = Ie(), Fa = Function.prototype, Qu = Ks && Object.getOwnPropertyDescriptor, Ws = Yu(Fa, "name"), Zu = Ws && (function() {
  }).name === "something", ec = Ws && (!Ks || Ks && Qu(Fa, "name").configurable);
  La.exports = { EXISTS: Ws, PROPER: Zu, CONFIGURABLE: ec };
});
var Js = v((Dd, Ba) => {
  var tc = pe(), sc = ie(), Gs = _t(), rc = tc(Function.toString);
  sc(Gs.inspectSource) || (Gs.inspectSource = function(l) {
    return rc(l);
  });
  Ba.exports = Gs.inspectSource;
});
var Ra = v((Fd, _a) => {
  var ic = he(), ac = ie(), Ma = ic.WeakMap;
  _a.exports = ac(Ma) && /native code/.test(String(Ma));
});
var Ua = v((Ld, qa) => {
  var nc = Os(), oc = Ms(), ja = nc("keys");
  qa.exports = function(l) {
    return ja[l] || (ja[l] = oc(l));
  };
});
var Xs = v((Od, $a) => {
  $a.exports = {};
});
var Ka = v((Bd, Va) => {
  var lc = Ra(), za = he(), hc = Oe(), uc = Vs(), Ys = Ie(), Qs = _t(), cc = Ua(), pc = Xs(), Ha = "Object already initialized", Zs = za.TypeError, fc = za.WeakMap, qt, nt, Ut, dc = function(l) {
    return Ut(l) ? nt(l) : qt(l, {});
  }, mc = function(l) {
    return function(h) {
      var f;
      if (!hc(h) || (f = nt(h)).type !== l)
        throw Zs("Incompatible receiver, " + l + " required");
      return f;
    };
  };
  lc || Qs.state ? (de = Qs.state || (Qs.state = new fc()), de.get = de.get, de.has = de.has, de.set = de.set, qt = function(l, h) {
    if (de.has(l))
      throw Zs(Ha);
    return h.facade = l, de.set(l, h), h;
  }, nt = function(l) {
    return de.get(l) || {};
  }, Ut = function(l) {
    return de.has(l);
  }) : (Me = cc("state"), pc[Me] = true, qt = function(l, h) {
    if (Ys(l, Me))
      throw Zs(Ha);
    return h.facade = l, uc(l, Me, h), h;
  }, nt = function(l) {
    return Ys(l, Me) ? l[Me] : {};
  }, Ut = function(l) {
    return Ys(l, Me);
  });
  var de, Me;
  Va.exports = { set: qt, get: nt, has: Ut, enforce: dc, getterFor: mc };
});
var tr = v((Md, Ga) => {
  var yc = ce(), xc = ie(), $t = Ie(), er = ve(), gc = Oa().CONFIGURABLE, Pc = Js(), Wa = Ka(), Ac = Wa.enforce, Tc = Wa.get, Ht = Object.defineProperty, vc = er && !yc(function() {
    return Ht(function() {
    }, "length", { value: 8 }).length !== 8;
  }), Ec = String(String).split("String"), Cc = Ga.exports = function(l, h, f) {
    String(h).slice(0, 7) === "Symbol(" && (h = "[" + String(h).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), f && f.getter && (h = "get " + h), f && f.setter && (h = "set " + h), (!$t(l, "name") || gc && l.name !== h) && (er ? Ht(l, "name", { value: h, configurable: true }) : l.name = h), vc && f && $t(f, "arity") && l.length !== f.arity && Ht(l, "length", { value: f.arity });
    try {
      f && $t(f, "constructor") && f.constructor ? er && Ht(l, "prototype", { writable: false }) : l.prototype && (l.prototype = void 0);
    } catch {
    }
    var d = Ac(l);
    return $t(d, "source") || (d.source = Ec.join(typeof h == "string" ? h : "")), l;
  };
  Function.prototype.toString = Cc(function() {
    return xc(this) && Tc(this).source || Pc(this);
  }, "toString");
});
var Xa = v((_d, Ja) => {
  var bc = ie(), Sc = at(), wc = tr(), Ic = Mt();
  Ja.exports = function(l, h, f, d) {
    d || (d = {});
    var x = d.enumerable, P = d.name !== void 0 ? d.name : h;
    if (bc(f) && wc(f, P, d), d.global)
      x ? l[h] = f : Ic(h, f);
    else {
      try {
        d.unsafe ? l[h] && (x = true) : delete l[h];
      } catch {
      }
      x ? l[h] = f : Sc.f(l, h, { value: f, enumerable: false, configurable: !d.nonConfigurable, writable: !d.nonWritable });
    }
    return l;
  };
});
var Qa = v((Rd, Ya) => {
  var Nc = Math.ceil, kc = Math.floor;
  Ya.exports = Math.trunc || function(h) {
    var f = +h;
    return (f > 0 ? kc : Nc)(f);
  };
});
var sr = v((jd, Za) => {
  var Dc = Qa();
  Za.exports = function(l) {
    var h = +l;
    return h !== h || h === 0 ? 0 : Dc(h);
  };
});
var tn = v((qd, en) => {
  var Fc = sr(), Lc = Math.max, Oc = Math.min;
  en.exports = function(l, h) {
    var f = Fc(l);
    return f < 0 ? Lc(f + h, 0) : Oc(f, h);
  };
});
var rn = v((Ud, sn) => {
  var Bc = sr(), Mc = Math.min;
  sn.exports = function(l) {
    return l > 0 ? Mc(Bc(l), 9007199254740991) : 0;
  };
});
var zt = v(($d, an) => {
  var _c = rn();
  an.exports = function(l) {
    return _c(l.length);
  };
});
var ln = v((Hd, on) => {
  var Rc = Lt(), jc = tn(), qc = zt(), nn = function(l) {
    return function(h, f, d) {
      var x = Rc(h), P = qc(x), m = jc(d, P), E;
      if (l && f != f) {
        for (; P > m; )
          if (E = x[m++], E != E)
            return true;
      } else
        for (; P > m; m++)
          if ((l || m in x) && x[m] === f)
            return l || m || 0;
      return !l && -1;
    };
  };
  on.exports = { includes: nn(true), indexOf: nn(false) };
});
var cn = v((zd, un) => {
  var Uc = pe(), rr = Ie(), $c = Lt(), Hc = ln().indexOf, zc = Xs(), hn = Uc([].push);
  un.exports = function(l, h) {
    var f = $c(l), d = 0, x = [], P;
    for (P in f)
      !rr(zc, P) && rr(f, P) && hn(x, P);
    for (; h.length > d; )
      rr(f, P = h[d++]) && (~Hc(x, P) || hn(x, P));
    return x;
  };
});
var fn = v((Vd, pn) => {
  pn.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
});
var mn = v((dn) => {
  var Vc = cn(), Kc = fn(), Wc = Kc.concat("length", "prototype");
  dn.f = Object.getOwnPropertyNames || function(h) {
    return Vc(h, Wc);
  };
});
var xn = v((yn) => {
  yn.f = Object.getOwnPropertySymbols;
});
var Pn = v((Gd, gn) => {
  var Gc = rt(), Jc = pe(), Xc = mn(), Yc = xn(), Qc = Rt(), Zc = Jc([].concat);
  gn.exports = Gc("Reflect", "ownKeys") || function(h) {
    var f = Xc.f(Qc(h)), d = Yc.f;
    return d ? Zc(f, d(h)) : f;
  };
});
var vn = v((Jd, Tn) => {
  var An = Ie(), ep = Pn(), tp = qs(), sp = at();
  Tn.exports = function(l, h, f) {
    for (var d = ep(h), x = sp.f, P = tp.f, m = 0; m < d.length; m++) {
      var E = d[m];
      !An(l, E) && !(f && An(f, E)) && x(l, E, P(h, E));
    }
  };
});
var Cn = v((Xd, En) => {
  var rp = ce(), ip = ie(), ap = /#|\.prototype\./, ot = function(l, h) {
    var f = op[np(l)];
    return f == hp ? true : f == lp ? false : ip(h) ? rp(h) : !!h;
  }, np = ot.normalize = function(l) {
    return String(l).replace(ap, ".").toLowerCase();
  }, op = ot.data = {}, lp = ot.NATIVE = "N", hp = ot.POLYFILL = "P";
  En.exports = ot;
});
var ar = v((Yd, bn) => {
  var ir = he(), up = qs().f, cp = Vs(), pp = Xa(), fp = Mt(), dp = vn(), mp = Cn();
  bn.exports = function(l, h) {
    var f = l.target, d = l.global, x = l.stat, P, m, E, S, k, L;
    if (d ? m = ir : x ? m = ir[f] || fp(f, {}) : m = (ir[f] || {}).prototype, m)
      for (E in h) {
        if (k = h[E], l.dontCallGetSet ? (L = up(m, E), S = L && L.value) : S = m[E], P = mp(d ? E : f + (x ? "." : "#") + E, l.forced), !P && S !== void 0) {
          if (typeof k == typeof S)
            continue;
          dp(k, S);
        }
        (l.sham || S && S.sham) && cp(k, "sham", true), pp(m, E, k, l);
      }
  };
});
var Sn = v(() => {
  var yp = ar(), nr = he();
  yp({ global: true, forced: nr.globalThis !== nr }, { globalThis: nr });
});
var Nn = v((em, In) => {
  var wn = tr(), xp = at();
  In.exports = function(l, h, f) {
    return f.get && wn(f.get, h, { getter: true }), f.set && wn(f.set, h, { setter: true }), xp.f(l, h, f);
  };
});
var Dn = v((tm, kn) => {
  "use strict";
  var gp = Rt();
  kn.exports = function() {
    var l = gp(this), h = "";
    return l.hasIndices && (h += "d"), l.global && (h += "g"), l.ignoreCase && (h += "i"), l.multiline && (h += "m"), l.dotAll && (h += "s"), l.unicode && (h += "u"), l.unicodeSets && (h += "v"), l.sticky && (h += "y"), h;
  };
});
var or = v((sm, On) => {
  var bp = st();
  On.exports = Array.isArray || function(h) {
    return bp(h) == "Array";
  };
});
var Mn = v((rm, Bn) => {
  var Sp = TypeError, wp = 9007199254740991;
  Bn.exports = function(l) {
    if (l > wp)
      throw Sp("Maximum allowed index exceeded");
    return l;
  };
});
var Rn = v((im, _n) => {
  var Ip = st(), Np = pe();
  _n.exports = function(l) {
    if (Ip(l) === "Function")
      return Np(l);
  };
});
var Un = v((am, qn) => {
  var jn = Rn(), kp = Bt(), Dp = kt(), Fp = jn(jn.bind);
  qn.exports = function(l, h) {
    return kp(l), h === void 0 ? l : Dp ? Fp(l, h) : function() {
      return l.apply(h, arguments);
    };
  };
});
var zn = v((nm, Hn) => {
  "use strict";
  var Lp = or(), Op = zt(), Bp = Mn(), Mp = Un(), $n = function(l, h, f, d, x, P, m, E) {
    for (var S = x, k = 0, L = m ? Mp(m, E) : false, N, O; k < d; )
      k in f && (N = L ? L(f[k], k, h) : f[k], P > 0 && Lp(N) ? (O = Op(N), S = $n(l, h, N, O, S, P - 1) - 1) : (Bp(S + 1), l[S] = N), S++), k++;
    return S;
  };
  Hn.exports = $n;
});
var Wn = v((om, Kn) => {
  var _p = it(), Rp = _p("toStringTag"), Vn = {};
  Vn[Rp] = "z";
  Kn.exports = String(Vn) === "[object z]";
});
var Jn = v((lm, Gn) => {
  var jp = Wn(), qp = ie(), Vt = st(), Up = it(), $p = Up("toStringTag"), Hp = Object, zp = Vt(function() {
    return arguments;
  }()) == "Arguments", Vp = function(l, h) {
    try {
      return l[h];
    } catch {
    }
  };
  Gn.exports = jp ? Vt : function(l) {
    var h, f, d;
    return l === void 0 ? "Undefined" : l === null ? "Null" : typeof (f = Vp(h = Hp(l), $p)) == "string" ? f : zp ? Vt(h) : (d = Vt(h)) == "Object" && qp(h.callee) ? "Arguments" : d;
  };
});
var to = v((hm, eo) => {
  var Kp = pe(), Wp = ce(), Xn = ie(), Gp = Jn(), Jp = rt(), Xp = Js(), Yn = function() {
  }, Yp = [], Qn = Jp("Reflect", "construct"), lr = /^\s*(?:class|function)\b/, Qp = Kp(lr.exec), Zp = !lr.exec(Yn), lt = function(h) {
    if (!Xn(h))
      return false;
    try {
      return Qn(Yn, Yp, h), true;
    } catch {
      return false;
    }
  }, Zn = function(h) {
    if (!Xn(h))
      return false;
    switch (Gp(h)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return Zp || !!Qp(lr, Xp(h));
    } catch {
      return true;
    }
  };
  Zn.sham = true;
  eo.exports = !Qn || Wp(function() {
    var l;
    return lt(lt.call) || !lt(Object) || !lt(function() {
      l = true;
    }) || l;
  }) ? Zn : lt;
});
var ao = v((um, io) => {
  var so = or(), ef = to(), tf = Oe(), sf = it(), rf = sf("species"), ro = Array;
  io.exports = function(l) {
    var h;
    return so(l) && (h = l.constructor, ef(h) && (h === ro || so(h.prototype)) ? h = void 0 : tf(h) && (h = h[rf], h === null && (h = void 0))), h === void 0 ? ro : h;
  };
});
var oo = v((cm, no) => {
  var af = ao();
  no.exports = function(l, h) {
    return new (af(l))(h === 0 ? 0 : h);
  };
});
Sn();
var Pp = he();
var Ap = ve();
var Tp = Nn();
var vp = Dn();
var Ep = ce();
var Fn = Pp.RegExp;
var Ln = Fn.prototype;
var Cp = Ap && Ep(function() {
  var l = true;
  try {
    Fn(".", "d");
  } catch {
    l = false;
  }
  var h = {}, f = "", d = l ? "dgimsy" : "gimsy", x = function(S, k) {
    Object.defineProperty(h, S, { get: function() {
      return f += k, true;
    } });
  }, P = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
  l && (P.hasIndices = "d");
  for (var m in P)
    x(m, P[m]);
  var E = Object.getOwnPropertyDescriptor(Ln, "flags").get.call(h);
  return E !== d || f !== d;
});
Cp && Tp(Ln, "flags", { configurable: true, get: vp });
var nf = ar();
var of = zn();
var lf = Bt();
var hf = Bs();
var uf = zt();
var cf = oo();
nf({ target: "Array", proto: true }, { flatMap: function(h) {
  var f = hf(this), d = uf(f), x;
  return lf(h), x = cf(f, 0), x.length = of(x, f, f, d, 0, 1, h, arguments.length > 1 ? arguments[1] : void 0), x;
} });
var pr = Object.defineProperty;
var pf = Object.getOwnPropertyDescriptor;
var fr = Object.getOwnPropertyNames;
var ff = Object.prototype.hasOwnProperty;
var lo = (l, h) => function() {
  return l && (h = (0, l[fr(l)[0]])(l = 0)), h;
};
var $ = (l, h) => function() {
  return h || (0, l[fr(l)[0]])((h = { exports: {} }).exports, h), h.exports;
};
var df = (l, h) => {
  for (var f in h)
    pr(l, f, { get: h[f], enumerable: true });
};
var mf = (l, h, f, d) => {
  if (h && typeof h == "object" || typeof h == "function")
    for (let x of fr(h))
      !ff.call(l, x) && x !== f && pr(l, x, { get: () => h[x], enumerable: !(d = pf(h, x)) || d.enumerable });
  return l;
};
var yf = (l) => mf(pr({}, "__esModule", { value: true }), l);
var U = lo({ "<define:process>"() {
} });
var xf = $({ "src/utils/try-combinations.js"(l, h) {
  "use strict";
  U();
  function f() {
    let d;
    for (var x = arguments.length, P = new Array(x), m = 0; m < x; m++)
      P[m] = arguments[m];
    for (let [E, S] of P.entries())
      try {
        return { result: S() };
      } catch (k) {
        E === 0 && (d = k);
      }
    return { error: d };
  }
  h.exports = f;
} });
var ho = $({ "src/language-js/utils/get-shebang.js"(l, h) {
  "use strict";
  U();
  function f(d) {
    if (!d.startsWith("#!"))
      return "";
    let x = d.indexOf(`
`);
    return x === -1 ? d : d.slice(0, x);
  }
  h.exports = f;
} });
var gf = $({ "src/utils/text/skip-inline-comment.js"(l, h) {
  "use strict";
  U();
  function f(d, x) {
    if (x === false)
      return false;
    if (d.charAt(x) === "/" && d.charAt(x + 1) === "*") {
      for (let P = x + 2; P < d.length; ++P)
        if (d.charAt(P) === "*" && d.charAt(P + 1) === "/")
          return P + 2;
    }
    return x;
  }
  h.exports = f;
} });
var Pf = $({ "src/utils/text/skip-newline.js"(l, h) {
  "use strict";
  U();
  function f(d, x, P) {
    let m = P && P.backwards;
    if (x === false)
      return false;
    let E = d.charAt(x);
    if (m) {
      if (d.charAt(x - 1) === "\r" && E === `
`)
        return x - 2;
      if (E === `
` || E === "\r" || E === "\u2028" || E === "\u2029")
        return x - 1;
    } else {
      if (E === "\r" && d.charAt(x + 1) === `
`)
        return x + 2;
      if (E === `
` || E === "\r" || E === "\u2028" || E === "\u2029")
        return x + 1;
    }
    return x;
  }
  h.exports = f;
} });
var uo = $({ "src/utils/text/skip.js"(l, h) {
  "use strict";
  U();
  function f(E) {
    return (S, k, L) => {
      let N = L && L.backwards;
      if (k === false)
        return false;
      let { length: O } = S, A = k;
      for (; A >= 0 && A < O; ) {
        let _ = S.charAt(A);
        if (E instanceof RegExp) {
          if (!E.test(_))
            return A;
        } else if (!E.includes(_))
          return A;
        N ? A-- : A++;
      }
      return A === -1 || A === O ? A : false;
    };
  }
  var d = f(/\s/), x = f(" 	"), P = f(",; 	"), m = f(/[^\n\r]/);
  h.exports = { skipWhitespace: d, skipSpaces: x, skipToLineEnd: P, skipEverythingButNewLine: m };
} });
var Af = $({ "src/utils/text/skip-trailing-comment.js"(l, h) {
  "use strict";
  U();
  var { skipEverythingButNewLine: f } = uo();
  function d(x, P) {
    return P === false ? false : x.charAt(P) === "/" && x.charAt(P + 1) === "/" ? f(x, P) : P;
  }
  h.exports = d;
} });
var Tf = $({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(l, h) {
  "use strict";
  U();
  var f = gf(), d = Pf(), x = Af(), { skipSpaces: P } = uo();
  function m(E, S) {
    let k = null, L = S;
    for (; L !== k; )
      k = L, L = P(E, L), L = f(E, L), L = x(E, L), L = d(E, L);
    return L;
  }
  h.exports = m;
} });
var co = {};
df(co, { EOL: () => cr, arch: () => vf, cpus: () => Po, default: () => Co, endianness: () => po, freemem: () => xo, getNetworkInterfaces: () => Eo, hostname: () => fo, loadavg: () => mo, networkInterfaces: () => vo, platform: () => Ef, release: () => To, tmpDir: () => hr, tmpdir: () => ur, totalmem: () => go, type: () => Ao, uptime: () => yo });
function po() {
  if (typeof Kt > "u") {
    var l = new ArrayBuffer(2), h = new Uint8Array(l), f = new Uint16Array(l);
    if (h[0] = 1, h[1] = 2, f[0] === 258)
      Kt = "BE";
    else if (f[0] === 513)
      Kt = "LE";
    else
      throw new Error("unable to figure out endianess");
  }
  return Kt;
}
function fo() {
  return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
}
function mo() {
  return [];
}
function yo() {
  return 0;
}
function xo() {
  return Number.MAX_VALUE;
}
function go() {
  return Number.MAX_VALUE;
}
function Po() {
  return [];
}
function Ao() {
  return "Browser";
}
function To() {
  return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : "";
}
function vo() {
}
function Eo() {
}
function vf() {
  return "javascript";
}
function Ef() {
  return "browser";
}
function hr() {
  return "/tmp";
}
var Kt;
var ur;
var cr;
var Co;
var Cf = lo({ "node-modules-polyfills:os"() {
  U(), ur = hr, cr = `
`, Co = { EOL: cr, tmpdir: ur, tmpDir: hr, networkInterfaces: vo, getNetworkInterfaces: Eo, release: To, type: Ao, cpus: Po, totalmem: go, freemem: xo, uptime: yo, loadavg: mo, hostname: fo, endianness: po };
} });
var bf = $({ "node-modules-polyfills-commonjs:os"(l, h) {
  U();
  var f = (Cf(), yf(co));
  if (f && f.default) {
    h.exports = f.default;
    for (let d in f)
      h.exports[d] = f[d];
  } else
    f && (h.exports = f);
} });
var Sf = $({ "node_modules/detect-newline/index.js"(l, h) {
  "use strict";
  U();
  var f = (d) => {
    if (typeof d != "string")
      throw new TypeError("Expected a string");
    let x = d.match(/(?:\r?\n)/g) || [];
    if (x.length === 0)
      return;
    let P = x.filter((E) => E === `\r
`).length, m = x.length - P;
    return P > m ? `\r
` : `
`;
  };
  h.exports = f, h.exports.graceful = (d) => typeof d == "string" && f(d) || `
`;
} });
var wf = $({ "node_modules/jest-docblock/build/index.js"(l) {
  "use strict";
  U(), Object.defineProperty(l, "__esModule", { value: true }), l.extract = A, l.parse = W, l.parseWithComments = I, l.print = F, l.strip = _;
  function h() {
    let M = bf();
    return h = function() {
      return M;
    }, M;
  }
  function f() {
    let M = d(Sf());
    return f = function() {
      return M;
    }, M;
  }
  function d(M) {
    return M && M.__esModule ? M : { default: M };
  }
  var x = /\*\/$/, P = /^\/\*\*?/, m = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, E = /(^|\s+)\/\/([^\r\n]*)/g, S = /^(\r?\n)+/, k = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, L = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, N = /(\r?\n|^) *\* ?/g, O = [];
  function A(M) {
    let V = M.match(m);
    return V ? V[0].trimLeft() : "";
  }
  function _(M) {
    let V = M.match(m);
    return V && V[0] ? M.substring(V[0].length) : M;
  }
  function W(M) {
    return I(M).pragmas;
  }
  function I(M) {
    let V = (0, f().default)(M) || h().EOL;
    M = M.replace(P, "").replace(x, "").replace(N, "$1");
    let ee = "";
    for (; ee !== M; )
      ee = M, M = M.replace(k, `${V}$1 $2${V}`);
    M = M.replace(S, "").trimRight();
    let b = /* @__PURE__ */ Object.create(null), B = M.replace(L, "").replace(S, "").trimRight(), te;
    for (; te = L.exec(M); ) {
      let R = te[2].replace(E, "");
      typeof b[te[1]] == "string" || Array.isArray(b[te[1]]) ? b[te[1]] = O.concat(b[te[1]], R) : b[te[1]] = R;
    }
    return { comments: B, pragmas: b };
  }
  function F(M) {
    let { comments: V = "", pragmas: ee = {} } = M, b = (0, f().default)(V) || h().EOL, B = "/**", te = " *", R = " */", ae = Object.keys(ee), se = ae.map((H) => z(H, ee[H])).reduce((H, X) => H.concat(X), []).map((H) => `${te} ${H}${b}`).join("");
    if (!V) {
      if (ae.length === 0)
        return "";
      if (ae.length === 1 && !Array.isArray(ee[ae[0]])) {
        let H = ee[ae[0]];
        return `${B} ${z(ae[0], H)[0]}${R}`;
      }
    }
    let _e = V.split(b).map((H) => `${te} ${H}`).join(b) + b;
    return B + b + (V ? _e : "") + (V && ae.length ? te + b : "") + se + R;
  }
  function z(M, V) {
    return O.concat(V).map((ee) => `@${M} ${ee}`.trim());
  }
} });
var If = $({ "src/common/end-of-line.js"(l, h) {
  "use strict";
  U();
  function f(m) {
    let E = m.indexOf("\r");
    return E >= 0 ? m.charAt(E + 1) === `
` ? "crlf" : "cr" : "lf";
  }
  function d(m) {
    switch (m) {
      case "cr":
        return "\r";
      case "crlf":
        return `\r
`;
      default:
        return `
`;
    }
  }
  function x(m, E) {
    let S;
    switch (E) {
      case `
`:
        S = /\n/g;
        break;
      case "\r":
        S = /\r/g;
        break;
      case `\r
`:
        S = /\r\n/g;
        break;
      default:
        throw new Error(`Unexpected "eol" ${JSON.stringify(E)}.`);
    }
    let k = m.match(S);
    return k ? k.length : 0;
  }
  function P(m) {
    return m.replace(/\r\n?/g, `
`);
  }
  h.exports = { guessEndOfLine: f, convertEndOfLineToChars: d, countEndOfLineChars: x, normalizeEndOfLine: P };
} });
var Nf = $({ "src/language-js/pragma.js"(l, h) {
  "use strict";
  U();
  var { parseWithComments: f, strip: d, extract: x, print: P } = wf(), { normalizeEndOfLine: m } = If(), E = ho();
  function S(N) {
    let O = E(N);
    O && (N = N.slice(O.length + 1));
    let A = x(N), { pragmas: _, comments: W } = f(A);
    return { shebang: O, text: N, pragmas: _, comments: W };
  }
  function k(N) {
    let O = Object.keys(S(N).pragmas);
    return O.includes("prettier") || O.includes("format");
  }
  function L(N) {
    let { shebang: O, text: A, pragmas: _, comments: W } = S(N), I = d(A), F = P({ pragmas: Object.assign({ format: "" }, _), comments: W.trimStart() });
    return (O ? `${O}
` : "") + m(F) + (I.startsWith(`
`) ? `
` : `

`) + I;
  }
  h.exports = { hasPragma: k, insertPragma: L };
} });
var bo = $({ "src/utils/is-non-empty-array.js"(l, h) {
  "use strict";
  U();
  function f(d) {
    return Array.isArray(d) && d.length > 0;
  }
  h.exports = f;
} });
var So = $({ "src/language-js/loc.js"(l, h) {
  "use strict";
  U();
  var f = bo();
  function d(S) {
    var k, L;
    let N = S.range ? S.range[0] : S.start, O = (k = (L = S.declaration) === null || L === void 0 ? void 0 : L.decorators) !== null && k !== void 0 ? k : S.decorators;
    return f(O) ? Math.min(d(O[0]), N) : N;
  }
  function x(S) {
    return S.range ? S.range[1] : S.end;
  }
  function P(S, k) {
    let L = d(S);
    return Number.isInteger(L) && L === d(k);
  }
  function m(S, k) {
    let L = x(S);
    return Number.isInteger(L) && L === x(k);
  }
  function E(S, k) {
    return P(S, k) && m(S, k);
  }
  h.exports = { locStart: d, locEnd: x, hasSameLocStart: P, hasSameLoc: E };
} });
var wo = $({ "src/language-js/parse/utils/create-parser.js"(l, h) {
  "use strict";
  U();
  var { hasPragma: f } = Nf(), { locStart: d, locEnd: x } = So();
  function P(m) {
    return m = typeof m == "function" ? { parse: m } : m, Object.assign({ astFormat: "estree", hasPragma: f, locStart: d, locEnd: x }, m);
  }
  h.exports = P;
} });
var dr = $({ "src/common/parser-create-error.js"(l, h) {
  "use strict";
  U();
  function f(d, x) {
    let P = new SyntaxError(d + " (" + x.start.line + ":" + x.start.column + ")");
    return P.loc = x, P;
  }
  h.exports = f;
} });
var Io = $({ "src/language-js/parse/utils/create-babel-parse-error.js"(l, h) {
  "use strict";
  U();
  var f = dr();
  function d(x) {
    let { message: P, loc: m } = x;
    return f(P.replace(/ \(.*\)/, ""), { start: { line: m ? m.line : 0, column: m ? m.column + 1 : 0 } });
  }
  h.exports = d;
} });
var kf = $({ "src/language-js/utils/is-ts-keyword-type.js"(l, h) {
  "use strict";
  U();
  function f(d) {
    let { type: x } = d;
    return x.startsWith("TS") && x.endsWith("Keyword");
  }
  h.exports = f;
} });
var Df = $({ "src/language-js/utils/is-block-comment.js"(l, h) {
  "use strict";
  U();
  var f = /* @__PURE__ */ new Set(["Block", "CommentBlock", "MultiLine"]), d = (x) => f.has(x == null ? void 0 : x.type);
  h.exports = d;
} });
var Ff = $({ "src/language-js/utils/is-type-cast-comment.js"(l, h) {
  "use strict";
  U();
  var f = Df();
  function d(x) {
    return f(x) && x.value[0] === "*" && /@(?:type|satisfies)\b/.test(x.value);
  }
  h.exports = d;
} });
var Lf = $({ "src/utils/get-last.js"(l, h) {
  "use strict";
  U();
  var f = (d) => d[d.length - 1];
  h.exports = f;
} });
var Of = $({ "src/language-js/parse/postprocess/visit-node.js"(l, h) {
  "use strict";
  U();
  function f(d, x) {
    if (Array.isArray(d)) {
      for (let P = 0; P < d.length; P++)
        d[P] = f(d[P], x);
      return d;
    }
    if (d && typeof d == "object" && typeof d.type == "string") {
      let P = Object.keys(d);
      for (let m = 0; m < P.length; m++)
        d[P[m]] = f(d[P[m]], x);
      return x(d) || d;
    }
    return d;
  }
  h.exports = f;
} });
var Bf = $({ "src/language-js/parse/postprocess/throw-syntax-error.js"(l, h) {
  "use strict";
  U();
  var f = dr();
  function d(x, P) {
    let { start: m, end: E } = x.loc;
    throw f(P, { start: { line: m.line, column: m.column + 1 }, end: { line: E.line, column: E.column + 1 } });
  }
  h.exports = d;
} });
var Mf = $({ "src/language-js/parse/postprocess/index.js"(l, h) {
  "use strict";
  U();
  var { locStart: f, locEnd: d } = So(), x = kf(), P = Ff(), m = Lf(), E = Of(), S = Bf();
  function k(A, _) {
    if (_.parser !== "typescript" && _.parser !== "flow" && _.parser !== "acorn" && _.parser !== "espree" && _.parser !== "meriyah") {
      let I = /* @__PURE__ */ new Set();
      A = E(A, (F) => {
        F.leadingComments && F.leadingComments.some(P) && I.add(f(F));
      }), A = E(A, (F) => {
        if (F.type === "ParenthesizedExpression") {
          let { expression: z } = F;
          if (z.type === "TypeCastExpression")
            return z.range = F.range, z;
          let M = f(F);
          if (!I.has(M))
            return z.extra = Object.assign(Object.assign({}, z.extra), {}, { parenthesized: true }), z;
        }
      });
    }
    return A = E(A, (I) => {
      switch (I.type) {
        case "ChainExpression":
          return L(I.expression);
        case "LogicalExpression": {
          if (N(I))
            return O(I);
          break;
        }
        case "VariableDeclaration": {
          let F = m(I.declarations);
          F && F.init && W(I, F);
          break;
        }
        case "TSParenthesizedType":
          return x(I.typeAnnotation) || I.typeAnnotation.type === "TSThisType" || (I.typeAnnotation.range = [f(I), d(I)]), I.typeAnnotation;
        case "TSTypeParameter":
          if (typeof I.name == "string") {
            let F = f(I);
            I.name = { type: "Identifier", name: I.name, range: [F, F + I.name.length] };
          }
          break;
        case "ObjectExpression":
          if (_.parser === "typescript") {
            let F = I.properties.find((z) => z.type === "Property" && z.value.type === "TSEmptyBodyFunctionExpression");
            F && S(F.value, "Unexpected token.");
          }
          break;
        case "SequenceExpression": {
          let F = m(I.expressions);
          I.range = [f(I), Math.min(d(F), d(I))];
          break;
        }
        case "TopicReference":
          _.__isUsingHackPipeline = true;
          break;
        case "ExportAllDeclaration": {
          let { exported: F } = I;
          if (_.parser === "meriyah" && F && F.type === "Identifier") {
            let z = _.originalText.slice(f(F), d(F));
            (z.startsWith('"') || z.startsWith("'")) && (I.exported = Object.assign(Object.assign({}, I.exported), {}, { type: "Literal", value: I.exported.name, raw: z }));
          }
          break;
        }
        case "PropertyDefinition":
          if (_.parser === "meriyah" && I.static && !I.computed && !I.key) {
            let F = "static", z = f(I);
            Object.assign(I, { static: false, key: { type: "Identifier", name: F, range: [z, z + F.length] } });
          }
          break;
      }
    }), A;
    function W(I, F) {
      _.originalText[d(F)] !== ";" && (I.range = [f(I), d(F)]);
    }
  }
  function L(A) {
    switch (A.type) {
      case "CallExpression":
        A.type = "OptionalCallExpression", A.callee = L(A.callee);
        break;
      case "MemberExpression":
        A.type = "OptionalMemberExpression", A.object = L(A.object);
        break;
      case "TSNonNullExpression":
        A.expression = L(A.expression);
        break;
    }
    return A;
  }
  function N(A) {
    return A.type === "LogicalExpression" && A.right.type === "LogicalExpression" && A.operator === A.right.operator;
  }
  function O(A) {
    return N(A) ? O({ type: "LogicalExpression", operator: A.operator, left: O({ type: "LogicalExpression", operator: A.operator, left: A.left, right: A.right.left, range: [f(A.left), d(A.right.left)] }), right: A.right.right, range: [f(A), d(A)] }) : A;
  }
  h.exports = k;
} });
var No = $({ "node_modules/@babel/parser/lib/index.js"(l) {
  "use strict";
  U(), Object.defineProperty(l, "__esModule", { value: true });
  var h = { sourceType: "script", sourceFilename: void 0, startColumn: 0, startLine: 1, allowAwaitOutsideFunction: false, allowReturnOutsideFunction: false, allowNewTargetOutsideFunction: false, allowImportExportEverywhere: false, allowSuperOutsideMethod: false, allowUndeclaredExports: false, plugins: [], strictMode: null, ranges: false, tokens: false, createParenthesizedExpressions: false, errorRecovery: false, attachComment: true, annexB: true };
  function f(t) {
    if (t && t.annexB != null && t.annexB !== false)
      throw new Error("The `annexB` option can only be set to `false`.");
    let r = {};
    for (let e of Object.keys(h))
      r[e] = t && t[e] != null ? t[e] : h[e];
    return r;
  }
  var d = class {
    constructor(t, r) {
      this.token = void 0, this.preserveSpace = void 0, this.token = t, this.preserveSpace = !!r;
    }
  }, x = { brace: new d("{"), j_oTag: new d("<tag"), j_cTag: new d("</tag"), j_expr: new d("<tag>...</tag>", true) };
  x.template = new d("`", true);
  var P = true, m = true, E = true, S = true, k = true, L = true, N = class {
    constructor(t) {
      let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t, this.keyword = r.keyword, this.beforeExpr = !!r.beforeExpr, this.startsExpr = !!r.startsExpr, this.rightAssociative = !!r.rightAssociative, this.isLoop = !!r.isLoop, this.isAssign = !!r.isAssign, this.prefix = !!r.prefix, this.postfix = !!r.postfix, this.binop = r.binop != null ? r.binop : null, this.updateContext = null;
    }
  }, O = /* @__PURE__ */ new Map();
  function A(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    r.keyword = t;
    let e = b(t, r);
    return O.set(t, e), e;
  }
  function _(t, r) {
    return b(t, { beforeExpr: P, binop: r });
  }
  var W = -1, I = [], F = [], z = [], M = [], V = [], ee = [];
  function b(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var e, s, i, a;
    return ++W, F.push(t), z.push((e = r.binop) != null ? e : -1), M.push((s = r.beforeExpr) != null ? s : false), V.push((i = r.startsExpr) != null ? i : false), ee.push((a = r.prefix) != null ? a : false), I.push(new N(t, r)), W;
  }
  function B(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var e, s, i, a;
    return ++W, O.set(t, W), F.push(t), z.push((e = r.binop) != null ? e : -1), M.push((s = r.beforeExpr) != null ? s : false), V.push((i = r.startsExpr) != null ? i : false), ee.push((a = r.prefix) != null ? a : false), I.push(new N("name", r)), W;
  }
  var te = { bracketL: b("[", { beforeExpr: P, startsExpr: m }), bracketHashL: b("#[", { beforeExpr: P, startsExpr: m }), bracketBarL: b("[|", { beforeExpr: P, startsExpr: m }), bracketR: b("]"), bracketBarR: b("|]"), braceL: b("{", { beforeExpr: P, startsExpr: m }), braceBarL: b("{|", { beforeExpr: P, startsExpr: m }), braceHashL: b("#{", { beforeExpr: P, startsExpr: m }), braceR: b("}"), braceBarR: b("|}"), parenL: b("(", { beforeExpr: P, startsExpr: m }), parenR: b(")"), comma: b(",", { beforeExpr: P }), semi: b(";", { beforeExpr: P }), colon: b(":", { beforeExpr: P }), doubleColon: b("::", { beforeExpr: P }), dot: b("."), question: b("?", { beforeExpr: P }), questionDot: b("?."), arrow: b("=>", { beforeExpr: P }), template: b("template"), ellipsis: b("...", { beforeExpr: P }), backQuote: b("`", { startsExpr: m }), dollarBraceL: b("${", { beforeExpr: P, startsExpr: m }), templateTail: b("...`", { startsExpr: m }), templateNonTail: b("...${", { beforeExpr: P, startsExpr: m }), at: b("@"), hash: b("#", { startsExpr: m }), interpreterDirective: b("#!..."), eq: b("=", { beforeExpr: P, isAssign: S }), assign: b("_=", { beforeExpr: P, isAssign: S }), slashAssign: b("_=", { beforeExpr: P, isAssign: S }), xorAssign: b("_=", { beforeExpr: P, isAssign: S }), moduloAssign: b("_=", { beforeExpr: P, isAssign: S }), incDec: b("++/--", { prefix: k, postfix: L, startsExpr: m }), bang: b("!", { beforeExpr: P, prefix: k, startsExpr: m }), tilde: b("~", { beforeExpr: P, prefix: k, startsExpr: m }), doubleCaret: b("^^", { startsExpr: m }), doubleAt: b("@@", { startsExpr: m }), pipeline: _("|>", 0), nullishCoalescing: _("??", 1), logicalOR: _("||", 1), logicalAND: _("&&", 2), bitwiseOR: _("|", 3), bitwiseXOR: _("^", 4), bitwiseAND: _("&", 5), equality: _("==/!=/===/!==", 6), lt: _("</>/<=/>=", 7), gt: _("</>/<=/>=", 7), relational: _("</>/<=/>=", 7), bitShift: _("<</>>/>>>", 8), bitShiftL: _("<</>>/>>>", 8), bitShiftR: _("<</>>/>>>", 8), plusMin: b("+/-", { beforeExpr: P, binop: 9, prefix: k, startsExpr: m }), modulo: b("%", { binop: 10, startsExpr: m }), star: b("*", { binop: 10 }), slash: _("/", 10), exponent: b("**", { beforeExpr: P, binop: 11, rightAssociative: true }), _in: A("in", { beforeExpr: P, binop: 7 }), _instanceof: A("instanceof", { beforeExpr: P, binop: 7 }), _break: A("break"), _case: A("case", { beforeExpr: P }), _catch: A("catch"), _continue: A("continue"), _debugger: A("debugger"), _default: A("default", { beforeExpr: P }), _else: A("else", { beforeExpr: P }), _finally: A("finally"), _function: A("function", { startsExpr: m }), _if: A("if"), _return: A("return", { beforeExpr: P }), _switch: A("switch"), _throw: A("throw", { beforeExpr: P, prefix: k, startsExpr: m }), _try: A("try"), _var: A("var"), _const: A("const"), _with: A("with"), _new: A("new", { beforeExpr: P, startsExpr: m }), _this: A("this", { startsExpr: m }), _super: A("super", { startsExpr: m }), _class: A("class", { startsExpr: m }), _extends: A("extends", { beforeExpr: P }), _export: A("export"), _import: A("import", { startsExpr: m }), _null: A("null", { startsExpr: m }), _true: A("true", { startsExpr: m }), _false: A("false", { startsExpr: m }), _typeof: A("typeof", { beforeExpr: P, prefix: k, startsExpr: m }), _void: A("void", { beforeExpr: P, prefix: k, startsExpr: m }), _delete: A("delete", { beforeExpr: P, prefix: k, startsExpr: m }), _do: A("do", { isLoop: E, beforeExpr: P }), _for: A("for", { isLoop: E }), _while: A("while", { isLoop: E }), _as: B("as", { startsExpr: m }), _assert: B("assert", { startsExpr: m }), _async: B("async", { startsExpr: m }), _await: B("await", { startsExpr: m }), _from: B("from", { startsExpr: m }), _get: B("get", { startsExpr: m }), _let: B("let", { startsExpr: m }), _meta: B("meta", { startsExpr: m }), _of: B("of", { startsExpr: m }), _sent: B("sent", { startsExpr: m }), _set: B("set", { startsExpr: m }), _static: B("static", { startsExpr: m }), _using: B("using", { startsExpr: m }), _yield: B("yield", { startsExpr: m }), _asserts: B("asserts", { startsExpr: m }), _checks: B("checks", { startsExpr: m }), _exports: B("exports", { startsExpr: m }), _global: B("global", { startsExpr: m }), _implements: B("implements", { startsExpr: m }), _intrinsic: B("intrinsic", { startsExpr: m }), _infer: B("infer", { startsExpr: m }), _is: B("is", { startsExpr: m }), _mixins: B("mixins", { startsExpr: m }), _proto: B("proto", { startsExpr: m }), _require: B("require", { startsExpr: m }), _satisfies: B("satisfies", { startsExpr: m }), _keyof: B("keyof", { startsExpr: m }), _readonly: B("readonly", { startsExpr: m }), _unique: B("unique", { startsExpr: m }), _abstract: B("abstract", { startsExpr: m }), _declare: B("declare", { startsExpr: m }), _enum: B("enum", { startsExpr: m }), _module: B("module", { startsExpr: m }), _namespace: B("namespace", { startsExpr: m }), _interface: B("interface", { startsExpr: m }), _type: B("type", { startsExpr: m }), _opaque: B("opaque", { startsExpr: m }), name: b("name", { startsExpr: m }), string: b("string", { startsExpr: m }), num: b("num", { startsExpr: m }), bigint: b("bigint", { startsExpr: m }), decimal: b("decimal", { startsExpr: m }), regexp: b("regexp", { startsExpr: m }), privateName: b("#name", { startsExpr: m }), eof: b("eof"), jsxName: b("jsxName"), jsxText: b("jsxText", { beforeExpr: true }), jsxTagStart: b("jsxTagStart", { startsExpr: true }), jsxTagEnd: b("jsxTagEnd"), placeholder: b("%%", { startsExpr: true }) };
  function R(t) {
    return t >= 93 && t <= 130;
  }
  function ae(t) {
    return t <= 92;
  }
  function se(t) {
    return t >= 58 && t <= 130;
  }
  function _e(t) {
    return t >= 58 && t <= 134;
  }
  function H(t) {
    return M[t];
  }
  function X(t) {
    return V[t];
  }
  function ye(t) {
    return t >= 29 && t <= 33;
  }
  function ne(t) {
    return t >= 127 && t <= 129;
  }
  function oe(t) {
    return t >= 90 && t <= 92;
  }
  function Ee(t) {
    return t >= 58 && t <= 92;
  }
  function le(t) {
    return t >= 39 && t <= 59;
  }
  function ue(t) {
    return t === 34;
  }
  function ht(t) {
    return ee[t];
  }
  function ut(t) {
    return t >= 119 && t <= 121;
  }
  function Wt(t) {
    return t >= 122 && t <= 128;
  }
  function Y(t) {
    return F[t];
  }
  function Re(t) {
    return z[t];
  }
  function Gt(t) {
    return t === 57;
  }
  function ct(t) {
    return t >= 24 && t <= 25;
  }
  function xe(t) {
    return I[t];
  }
  I[8].updateContext = (t) => {
    t.pop();
  }, I[5].updateContext = I[7].updateContext = I[23].updateContext = (t) => {
    t.push(x.brace);
  }, I[22].updateContext = (t) => {
    t[t.length - 1] === x.template ? t.pop() : t.push(x.template);
  }, I[140].updateContext = (t) => {
    t.push(x.j_expr, x.j_oTag);
  };
  function pt(t, r) {
    if (t == null)
      return {};
    var e = {}, s = Object.keys(t), i, a;
    for (a = 0; a < s.length; a++)
      i = s[a], !(r.indexOf(i) >= 0) && (e[i] = t[i]);
    return e;
  }
  var Ce = class {
    constructor(t, r, e) {
      this.line = void 0, this.column = void 0, this.index = void 0, this.line = t, this.column = r, this.index = e;
    }
  }, ft = class {
    constructor(t, r) {
      this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = r;
    }
  };
  function re(t, r) {
    let { line: e, column: s, index: i } = t;
    return new Ce(e, s + r, i + r);
  }
  var Jt = { SyntaxError: "BABEL_PARSER_SYNTAX_ERROR", SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED" }, ko = function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t.length - 1;
    return { get() {
      return t.reduce((e, s) => e[s], this);
    }, set(e) {
      t.reduce((s, i, a) => a === r ? s[i] = e : s[i], this);
    } };
  }, Do = (t, r, e) => Object.keys(e).map((s) => [s, e[s]]).filter((s) => {
    let [, i] = s;
    return !!i;
  }).map((s) => {
    let [i, a] = s;
    return [i, typeof a == "function" ? { value: a, enumerable: false } : typeof a.reflect == "string" ? Object.assign({}, a, ko(a.reflect.split("."))) : a];
  }).reduce((s, i) => {
    let [a, n] = i;
    return Object.defineProperty(s, a, Object.assign({ configurable: true }, n));
  }, Object.assign(new t(), r)), Fo = { ImportMetaOutsideModule: { message: `import.meta may appear only with 'sourceType: "module"'`, code: Jt.SourceTypeModuleError }, ImportOutsideModule: { message: `'import' and 'export' may appear only with 'sourceType: "module"'`, code: Jt.SourceTypeModuleError } }, mr = { ArrayPattern: "array destructuring pattern", AssignmentExpression: "assignment expression", AssignmentPattern: "assignment expression", ArrowFunctionExpression: "arrow function expression", ConditionalExpression: "conditional expression", CatchClause: "catch clause", ForOfStatement: "for-of statement", ForInStatement: "for-in statement", ForStatement: "for-loop", FormalParameters: "function parameter list", Identifier: "identifier", ImportSpecifier: "import specifier", ImportDefaultSpecifier: "import default specifier", ImportNamespaceSpecifier: "import namespace specifier", ObjectPattern: "object destructuring pattern", ParenthesizedExpression: "parenthesized expression", RestElement: "rest element", UpdateExpression: { true: "prefix operation", false: "postfix operation" }, VariableDeclarator: "variable declaration", YieldExpression: "yield expression" }, Xt = (t) => {
    let { type: r, prefix: e } = t;
    return r === "UpdateExpression" ? mr.UpdateExpression[String(e)] : mr[r];
  }, Lo = { AccessorIsGenerator: (t) => {
    let { kind: r } = t;
    return `A ${r}ter cannot be a generator.`;
  }, ArgumentsInClass: "'arguments' is only allowed in functions and class methods.", AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.", AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.", AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.", AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.", AwaitInUsingBinding: "'await' is not allowed to be used as a name in 'using' declarations.", AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.", AwaitNotInAsyncFunction: "'await' is only allowed within async functions.", BadGetterArity: "A 'get' accessor must not have any formal parameters.", BadSetterArity: "A 'set' accessor must have exactly one formal parameter.", BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.", ConstructorClassField: "Classes may not have a field named 'constructor'.", ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.", ConstructorIsAccessor: "Class constructor may not be an accessor.", ConstructorIsAsync: "Constructor can't be an async function.", ConstructorIsGenerator: "Constructor can't be a generator.", DeclarationMissingInitializer: (t) => {
    let { kind: r } = t;
    return `Missing initializer in ${r} declaration.`;
  }, DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.", DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.", DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.", DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?", DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.", DecoratorSemicolon: "Decorators must not be followed by a semicolon.", DecoratorStaticBlock: "Decorators can't be used with a static block.", DeletePrivateField: "Deleting a private field is not allowed.", DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.", DuplicateConstructor: "Duplicate constructor in the same class.", DuplicateDefaultExport: "Only one default export allowed per module.", DuplicateExport: (t) => {
    let { exportName: r } = t;
    return `\`${r}\` has already been exported. Exported identifiers must be unique.`;
  }, DuplicateProto: "Redefinition of __proto__ property.", DuplicateRegExpFlags: "Duplicate regular expression flag.", ElementAfterRest: "Rest element must be last element.", EscapedCharNotAnIdentifier: "Invalid Unicode escape.", ExportBindingIsString: (t) => {
    let { localName: r, exportName: e } = t;
    return `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${r}' as '${e}' } from 'some-module'\`?`;
  }, ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.", ForInOfLoopInitializer: (t) => {
    let { type: r } = t;
    return `'${r === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`;
  }, ForInUsing: "For-in loop may not start with 'using' declaration.", ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.", ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.", GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.", IllegalBreakContinue: (t) => {
    let { type: r } = t;
    return `Unsyntactic ${r === "BreakStatement" ? "break" : "continue"}.`;
  }, IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.", IllegalReturn: "'return' outside of function.", ImportBindingIsString: (t) => {
    let { importName: r } = t;
    return `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${r}" as foo }\`?`;
  }, ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.", ImportCallArity: (t) => {
    let { maxArgumentCount: r } = t;
    return `\`import()\` requires exactly ${r === 1 ? "one argument" : "one or two arguments"}.`;
  }, ImportCallNotNewExpression: "Cannot use new with import(...).", ImportCallSpreadArgument: "`...` is not allowed in `import()`.", ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.", ImportReflectionHasAssertion: "`import module x` cannot have assertions.", ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.', IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.", InvalidBigIntLiteral: "Invalid BigIntLiteral.", InvalidCodePoint: "Code point out of bounds.", InvalidCoverInitializedName: "Invalid shorthand property initializer.", InvalidDecimal: "Invalid decimal.", InvalidDigit: (t) => {
    let { radix: r } = t;
    return `Expected number in radix ${r}.`;
  }, InvalidEscapeSequence: "Bad character escape sequence.", InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.", InvalidEscapedReservedWord: (t) => {
    let { reservedWord: r } = t;
    return `Escape sequence in keyword ${r}.`;
  }, InvalidIdentifier: (t) => {
    let { identifierName: r } = t;
    return `Invalid identifier ${r}.`;
  }, InvalidLhs: (t) => {
    let { ancestor: r } = t;
    return `Invalid left-hand side in ${Xt(r)}.`;
  }, InvalidLhsBinding: (t) => {
    let { ancestor: r } = t;
    return `Binding invalid left-hand side in ${Xt(r)}.`;
  }, InvalidNumber: "Invalid number.", InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.", InvalidOrUnexpectedToken: (t) => {
    let { unexpected: r } = t;
    return `Unexpected character '${r}'.`;
  }, InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.", InvalidPrivateFieldResolution: (t) => {
    let { identifierName: r } = t;
    return `Private name #${r} is not defined.`;
  }, InvalidPropertyBindingPattern: "Binding member expression.", InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.", InvalidRestAssignmentPattern: "Invalid rest operator's argument.", LabelRedeclaration: (t) => {
    let { labelName: r } = t;
    return `Label '${r}' is already declared.`;
  }, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.", LineTerminatorBeforeArrow: "No line break is allowed before '=>'.", MalformedRegExpFlags: "Invalid regular expression flag.", MissingClassName: "A class name is required.", MissingEqInAssignment: "Only '=' operator can be used for specifying default value.", MissingSemicolon: "Missing semicolon.", MissingPlugin: (t) => {
    let { missingPlugin: r } = t;
    return `This experimental syntax requires enabling the parser plugin: ${r.map((e) => JSON.stringify(e)).join(", ")}.`;
  }, MissingOneOfPlugins: (t) => {
    let { missingPlugin: r } = t;
    return `This experimental syntax requires enabling one of the following parser plugin(s): ${r.map((e) => JSON.stringify(e)).join(", ")}.`;
  }, MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.", MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.", ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.", ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.", ModuleAttributesWithDuplicateKeys: (t) => {
    let { key: r } = t;
    return `Duplicate key "${r}" is not allowed in module attributes.`;
  }, ModuleExportNameHasLoneSurrogate: (t) => {
    let { surrogateCharCode: r } = t;
    return `An export name cannot include a lone surrogate, found '\\u${r.toString(16)}'.`;
  }, ModuleExportUndefined: (t) => {
    let { localName: r } = t;
    return `Export '${r}' is not defined.`;
  }, MultipleDefaultsInSwitch: "Multiple default clauses.", NewlineAfterThrow: "Illegal newline after throw.", NoCatchOrFinally: "Missing catch or finally clause.", NumberIdentifier: "Identifier directly after number.", NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.", ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.", OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.", OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.", OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.", ParamDupe: "Argument name clash.", PatternHasAccessor: "Object pattern can't contain getter or setter.", PatternHasMethod: "Object pattern can't contain methods.", PrivateInExpectedIn: (t) => {
    let { identifierName: r } = t;
    return `Private names are only allowed in property accesses (\`obj.#${r}\`) or in \`in\` expressions (\`#${r} in obj\`).`;
  }, PrivateNameRedeclaration: (t) => {
    let { identifierName: r } = t;
    return `Duplicate private name #${r}.`;
  }, RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.", RecordNoProto: "'__proto__' is not allowed in Record expressions.", RestTrailingComma: "Unexpected trailing comma after rest element.", SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.", SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.", StaticPrototype: "Classes may not have static property named prototype.", SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?", SuperPrivateField: "Private fields can't be accessed on super.", TrailingDecorator: "Decorators must be attached to a class element.", TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.", UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.", UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.', UnexpectedDigitAfterHash: "Unexpected digit after hash token.", UnexpectedImportExport: "'import' and 'export' may only appear at the top level.", UnexpectedKeyword: (t) => {
    let { keyword: r } = t;
    return `Unexpected keyword '${r}'.`;
  }, UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.", UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.", UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.", UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.", UnexpectedPrivateField: "Unexpected private name.", UnexpectedReservedWord: (t) => {
    let { reservedWord: r } = t;
    return `Unexpected reserved word '${r}'.`;
  }, UnexpectedSuper: "'super' is only allowed in object methods and classes.", UnexpectedToken: (t) => {
    let { expected: r, unexpected: e } = t;
    return `Unexpected token${e ? ` '${e}'.` : ""}${r ? `, expected "${r}"` : ""}`;
  }, UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.", UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script`.", UnsupportedBind: "Binding should be performed on object property.", UnsupportedDecoratorExport: "A decorated export must export a class declaration.", UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.", UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.", UnsupportedMetaProperty: (t) => {
    let { target: r, onlyValidPropertyName: e } = t;
    return `The only valid meta property for ${r} is ${r}.${e}.`;
  }, UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.", UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.", UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).", UnterminatedComment: "Unterminated comment.", UnterminatedRegExp: "Unterminated regular expression.", UnterminatedString: "Unterminated string constant.", UnterminatedTemplate: "Unterminated template.", UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.", VarRedeclaration: (t) => {
    let { identifierName: r } = t;
    return `Identifier '${r}' has already been declared.`;
  }, YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.", YieldInParameter: "Yield expression is not allowed in formal parameters.", ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0." }, Oo = { StrictDelete: "Deleting local variable in strict mode.", StrictEvalArguments: (t) => {
    let { referenceName: r } = t;
    return `Assigning to '${r}' in strict mode.`;
  }, StrictEvalArgumentsBinding: (t) => {
    let { bindingName: r } = t;
    return `Binding '${r}' in strict mode.`;
  }, StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.", StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.", StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.", StrictWith: "'with' in strict mode." }, Bo = /* @__PURE__ */ new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]), Mo = { PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.", PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.', PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.", PipeTopicUnconfiguredToken: (t) => {
    let { token: r } = t;
    return `Invalid topic token ${r}. In order to use ${r} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${r}" }.`;
  }, PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.", PipeUnparenthesizedBody: (t) => {
    let { type: r } = t;
    return `Hack-style pipe body cannot be an unparenthesized ${Xt({ type: r })}; please wrap it in parentheses.`;
  }, PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.', PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.", PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.", PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.", PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.", PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.' }, _o = ["toMessage"], Ro = ["message"];
  function jo(t) {
    let { toMessage: r } = t, e = pt(t, _o);
    return function s(i) {
      let { loc: a, details: n } = i;
      return Do(SyntaxError, Object.assign({}, e, { loc: a }), { clone() {
        let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = o.loc || {};
        return s({ loc: new Ce("line" in u ? u.line : this.loc.line, "column" in u ? u.column : this.loc.column, "index" in u ? u.index : this.loc.index), details: Object.assign({}, this.details, o.details) });
      }, details: { value: n, enumerable: false }, message: { get() {
        return `${r(this.details)} (${this.loc.line}:${this.loc.column})`;
      }, set(o) {
        Object.defineProperty(this, "message", { value: o });
      } }, pos: { reflect: "loc.index", enumerable: true }, missingPlugin: "missingPlugin" in n && { reflect: "details.missingPlugin", enumerable: true } });
    };
  }
  function ge(t, r) {
    if (Array.isArray(t))
      return (s) => ge(s, t[0]);
    let e = {};
    for (let s of Object.keys(t)) {
      let i = t[s], a = typeof i == "string" ? { message: () => i } : typeof i == "function" ? { message: i } : i, { message: n } = a, o = pt(a, Ro), u = typeof n == "string" ? () => n : n;
      e[s] = jo(Object.assign({ code: Jt.SyntaxError, reasonCode: s, toMessage: u }, r ? { syntaxPlugin: r } : {}, o));
    }
    return e;
  }
  var p = Object.assign({}, ge(Fo), ge(Lo), ge(Oo), ge`pipelineOperator`(Mo)), { defineProperty: qo } = Object, yr = (t, r) => qo(t, r, { enumerable: false, value: t[r] });
  function Je(t) {
    return t.loc.start && yr(t.loc.start, "index"), t.loc.end && yr(t.loc.end, "index"), t;
  }
  var Uo = (t) => class extends t {
    parse() {
      let e = Je(super.parse());
      return this.options.tokens && (e.tokens = e.tokens.map(Je)), e;
    }
    parseRegExpLiteral(e) {
      let { pattern: s, flags: i } = e, a = null;
      try {
        a = new RegExp(s, i);
      } catch {
      }
      let n = this.estreeParseLiteral(a);
      return n.regex = { pattern: s, flags: i }, n;
    }
    parseBigIntLiteral(e) {
      let s;
      try {
        s = BigInt(e);
      } catch {
        s = null;
      }
      let i = this.estreeParseLiteral(s);
      return i.bigint = String(i.value || e), i;
    }
    parseDecimalLiteral(e) {
      let i = this.estreeParseLiteral(null);
      return i.decimal = String(i.value || e), i;
    }
    estreeParseLiteral(e) {
      return this.parseLiteral(e, "Literal");
    }
    parseStringLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    parseNumericLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    parseNullLiteral() {
      return this.estreeParseLiteral(null);
    }
    parseBooleanLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    directiveToStmt(e) {
      let s = e.value;
      delete e.value, s.type = "Literal", s.raw = s.extra.raw, s.value = s.extra.expressionValue;
      let i = e;
      return i.type = "ExpressionStatement", i.expression = s, i.directive = s.extra.rawValue, delete s.extra, i;
    }
    initFunction(e, s) {
      super.initFunction(e, s), e.expression = false;
    }
    checkDeclaration(e) {
      e != null && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e);
    }
    getObjectOrClassMethodParams(e) {
      return e.value.params;
    }
    isValidDirective(e) {
      var s;
      return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && !((s = e.expression.extra) != null && s.parenthesized);
    }
    parseBlockBody(e, s, i, a, n) {
      super.parseBlockBody(e, s, i, a, n);
      let o = e.directives.map((u) => this.directiveToStmt(u));
      e.body = o.concat(e.body), delete e.directives;
    }
    pushClassMethod(e, s, i, a, n, o) {
      this.parseMethod(s, i, a, n, o, "ClassMethod", true), s.typeParameters && (s.value.typeParameters = s.typeParameters, delete s.typeParameters), e.body.push(s);
    }
    parsePrivateName() {
      let e = super.parsePrivateName();
      return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e;
    }
    convertPrivateNameToPrivateIdentifier(e) {
      let s = super.getPrivateNameSV(e);
      return e = e, delete e.id, e.name = s, e.type = "PrivateIdentifier", e;
    }
    isPrivateName(e) {
      return this.getPluginOption("estree", "classFeatures") ? e.type === "PrivateIdentifier" : super.isPrivateName(e);
    }
    getPrivateNameSV(e) {
      return this.getPluginOption("estree", "classFeatures") ? e.name : super.getPrivateNameSV(e);
    }
    parseLiteral(e, s) {
      let i = super.parseLiteral(e, s);
      return i.raw = i.extra.raw, delete i.extra, i;
    }
    parseFunctionBody(e, s) {
      let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      super.parseFunctionBody(e, s, i), e.expression = e.body.type !== "BlockStatement";
    }
    parseMethod(e, s, i, a, n, o) {
      let u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, c = this.startNode();
      return c.kind = e.kind, c = super.parseMethod(c, s, i, a, n, o, u), c.type = "FunctionExpression", delete c.kind, e.value = c, o === "ClassPrivateMethod" && (e.computed = false), this.finishNode(e, "MethodDefinition");
    }
    parseClassProperty() {
      let e = super.parseClassProperty(...arguments);
      return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition"), e;
    }
    parseClassPrivateProperty() {
      let e = super.parseClassPrivateProperty(...arguments);
      return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition", e.computed = false), e;
    }
    parseObjectMethod(e, s, i, a, n) {
      let o = super.parseObjectMethod(e, s, i, a, n);
      return o && (o.type = "Property", o.kind === "method" && (o.kind = "init"), o.shorthand = false), o;
    }
    parseObjectProperty(e, s, i, a) {
      let n = super.parseObjectProperty(e, s, i, a);
      return n && (n.kind = "init", n.type = "Property"), n;
    }
    isValidLVal(e, s, i) {
      return e === "Property" ? "value" : super.isValidLVal(e, s, i);
    }
    isAssignable(e, s) {
      return e != null && this.isObjectProperty(e) ? this.isAssignable(e.value, s) : super.isAssignable(e, s);
    }
    toAssignable(e) {
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (e != null && this.isObjectProperty(e)) {
        let { key: i, value: a } = e;
        this.isPrivateName(i) && this.classScope.usePrivateName(this.getPrivateNameSV(i), i.loc.start), this.toAssignable(a, s);
      } else
        super.toAssignable(e, s);
    }
    toAssignableObjectExpressionProp(e, s, i) {
      e.kind === "get" || e.kind === "set" ? this.raise(p.PatternHasAccessor, { at: e.key }) : e.method ? this.raise(p.PatternHasMethod, { at: e.key }) : super.toAssignableObjectExpressionProp(e, s, i);
    }
    finishCallExpression(e, s) {
      let i = super.finishCallExpression(e, s);
      if (i.callee.type === "Import") {
        if (i.type = "ImportExpression", i.source = i.arguments[0], this.hasPlugin("importAssertions")) {
          var a;
          i.attributes = (a = i.arguments[1]) != null ? a : null;
        }
        delete i.arguments, delete i.callee;
      }
      return i;
    }
    toReferencedArguments(e) {
      e.type !== "ImportExpression" && super.toReferencedArguments(e);
    }
    parseExport(e, s) {
      let i = this.state.lastTokStartLoc, a = super.parseExport(e, s);
      switch (a.type) {
        case "ExportAllDeclaration":
          a.exported = null;
          break;
        case "ExportNamedDeclaration":
          a.specifiers.length === 1 && a.specifiers[0].type === "ExportNamespaceSpecifier" && (a.type = "ExportAllDeclaration", a.exported = a.specifiers[0].exported, delete a.specifiers);
        case "ExportDefaultDeclaration":
          {
            var n;
            let { declaration: o } = a;
            (o == null ? void 0 : o.type) === "ClassDeclaration" && ((n = o.decorators) == null ? void 0 : n.length) > 0 && o.start === a.start && this.resetStartLocation(a, i);
          }
          break;
      }
      return a;
    }
    parseSubscript(e, s, i, a) {
      let n = super.parseSubscript(e, s, i, a);
      if (a.optionalChainMember) {
        if ((n.type === "OptionalMemberExpression" || n.type === "OptionalCallExpression") && (n.type = n.type.substring(8)), a.stop) {
          let o = this.startNodeAtNode(n);
          return o.expression = n, this.finishNode(o, "ChainExpression");
        }
      } else
        (n.type === "MemberExpression" || n.type === "CallExpression") && (n.optional = false);
      return n;
    }
    hasPropertyAsPrivateName(e) {
      return e.type === "ChainExpression" && (e = e.expression), super.hasPropertyAsPrivateName(e);
    }
    isObjectProperty(e) {
      return e.type === "Property" && e.kind === "init" && !e.method;
    }
    isObjectMethod(e) {
      return e.method || e.kind === "get" || e.kind === "set";
    }
    finishNodeAt(e, s, i) {
      return Je(super.finishNodeAt(e, s, i));
    }
    resetStartLocation(e, s) {
      super.resetStartLocation(e, s), Je(e);
    }
    resetEndLocation(e) {
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.lastTokEndLoc;
      super.resetEndLocation(e, s), Je(e);
    }
  }, Yt = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", xr = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿", $o = new RegExp("[" + Yt + "]"), Ho = new RegExp("[" + Yt + xr + "]");
  Yt = xr = null;
  var gr = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191], zo = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function Qt(t, r) {
    let e = 65536;
    for (let s = 0, i = r.length; s < i; s += 2) {
      if (e += r[s], e > t)
        return false;
      if (e += r[s + 1], e >= t)
        return true;
    }
    return false;
  }
  function Pe(t) {
    return t < 65 ? t === 36 : t <= 90 ? true : t < 97 ? t === 95 : t <= 122 ? true : t <= 65535 ? t >= 170 && $o.test(String.fromCharCode(t)) : Qt(t, gr);
  }
  function je(t) {
    return t < 48 ? t === 36 : t < 58 ? true : t < 65 ? false : t <= 90 ? true : t < 97 ? t === 95 : t <= 122 ? true : t <= 65535 ? t >= 170 && Ho.test(String.fromCharCode(t)) : Qt(t, gr) || Qt(t, zo);
  }
  var Zt = { keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"], strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], strictBind: ["eval", "arguments"] }, Vo = new Set(Zt.keyword), Ko = new Set(Zt.strict), Wo = new Set(Zt.strictBind);
  function Pr(t, r) {
    return r && t === "await" || t === "enum";
  }
  function Ar(t, r) {
    return Pr(t, r) || Ko.has(t);
  }
  function Tr(t) {
    return Wo.has(t);
  }
  function vr(t, r) {
    return Ar(t, r) || Tr(t);
  }
  function Go(t) {
    return Vo.has(t);
  }
  function Jo(t, r, e) {
    return t === 64 && r === 64 && Pe(e);
  }
  var Xo = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
  function Yo(t) {
    return Xo.has(t);
  }
  var qe = 0, Ue = 1, Ae = 2, es = 4, Er = 8, dt = 16, Cr = 32, Ne = 64, mt = 128, $e = 256, yt = Ue | Ae | mt | $e, me = 1, ke = 2, br = 4, De = 8, xt = 16, Sr = 64, gt = 128, ts = 256, ss = 512, rs = 1024, is = 2048, Xe = 4096, Pt = 8192, wr = me | ke | De | gt | Pt, He = me | 0 | De | Pt, Qo = me | 0 | De | 0, At = me | 0 | br | 0, Ir = me | 0 | xt | 0, Zo = 0 | ke | 0 | gt, el = 0 | ke | 0 | 0, Nr = me | ke | De | ts | Pt, kr = 0 | rs, be = 0 | Sr, tl = me | 0 | 0 | Sr, sl = Nr | ss, rl = 0 | rs, Dr = 0 | ke | 0 | Xe, il = is, Tt = 4, as = 2, ns = 1, os = as | ns, al = as | Tt, nl = ns | Tt, ol = as, ll = ns, ls = 0, hs = class {
    constructor(t) {
      this.var = /* @__PURE__ */ new Set(), this.lexical = /* @__PURE__ */ new Set(), this.functions = /* @__PURE__ */ new Set(), this.flags = t;
    }
  }, us = class {
    constructor(t, r) {
      this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = /* @__PURE__ */ new Map(), this.parser = t, this.inModule = r;
    }
    get inTopLevel() {
      return (this.currentScope().flags & Ue) > 0;
    }
    get inFunction() {
      return (this.currentVarScopeFlags() & Ae) > 0;
    }
    get allowSuper() {
      return (this.currentThisScopeFlags() & dt) > 0;
    }
    get allowDirectSuper() {
      return (this.currentThisScopeFlags() & Cr) > 0;
    }
    get inClass() {
      return (this.currentThisScopeFlags() & Ne) > 0;
    }
    get inClassAndNotInNonArrowFunction() {
      let t = this.currentThisScopeFlags();
      return (t & Ne) > 0 && (t & Ae) === 0;
    }
    get inStaticBlock() {
      for (let t = this.scopeStack.length - 1; ; t--) {
        let { flags: r } = this.scopeStack[t];
        if (r & mt)
          return true;
        if (r & (yt | Ne))
          return false;
      }
    }
    get inNonArrowFunction() {
      return (this.currentThisScopeFlags() & Ae) > 0;
    }
    get treatFunctionsAsVar() {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }
    createScope(t) {
      return new hs(t);
    }
    enter(t) {
      this.scopeStack.push(this.createScope(t));
    }
    exit() {
      return this.scopeStack.pop().flags;
    }
    treatFunctionsAsVarInScope(t) {
      return !!(t.flags & (Ae | mt) || !this.parser.inModule && t.flags & Ue);
    }
    declareName(t, r, e) {
      let s = this.currentScope();
      if (r & De || r & xt)
        this.checkRedeclarationInScope(s, t, r, e), r & xt ? s.functions.add(t) : s.lexical.add(t), r & De && this.maybeExportDefined(s, t);
      else if (r & br)
        for (let i = this.scopeStack.length - 1; i >= 0 && (s = this.scopeStack[i], this.checkRedeclarationInScope(s, t, r, e), s.var.add(t), this.maybeExportDefined(s, t), !(s.flags & yt)); --i)
          ;
      this.parser.inModule && s.flags & Ue && this.undefinedExports.delete(t);
    }
    maybeExportDefined(t, r) {
      this.parser.inModule && t.flags & Ue && this.undefinedExports.delete(r);
    }
    checkRedeclarationInScope(t, r, e, s) {
      this.isRedeclaredInScope(t, r, e) && this.parser.raise(p.VarRedeclaration, { at: s, identifierName: r });
    }
    isRedeclaredInScope(t, r, e) {
      return e & me ? e & De ? t.lexical.has(r) || t.functions.has(r) || t.var.has(r) : e & xt ? t.lexical.has(r) || !this.treatFunctionsAsVarInScope(t) && t.var.has(r) : t.lexical.has(r) && !(t.flags & Er && t.lexical.values().next().value === r) || !this.treatFunctionsAsVarInScope(t) && t.functions.has(r) : false;
    }
    checkLocalExport(t) {
      let { name: r } = t, e = this.scopeStack[0];
      !e.lexical.has(r) && !e.var.has(r) && !e.functions.has(r) && this.undefinedExports.set(r, t.loc.start);
    }
    currentScope() {
      return this.scopeStack[this.scopeStack.length - 1];
    }
    currentVarScopeFlags() {
      for (let t = this.scopeStack.length - 1; ; t--) {
        let { flags: r } = this.scopeStack[t];
        if (r & yt)
          return r;
      }
    }
    currentThisScopeFlags() {
      for (let t = this.scopeStack.length - 1; ; t--) {
        let { flags: r } = this.scopeStack[t];
        if (r & (yt | Ne) && !(r & es))
          return r;
      }
    }
  }, hl = class extends hs {
    constructor() {
      super(...arguments), this.declareFunctions = /* @__PURE__ */ new Set();
    }
  }, ul = class extends us {
    createScope(t) {
      return new hl(t);
    }
    declareName(t, r, e) {
      let s = this.currentScope();
      if (r & is) {
        this.checkRedeclarationInScope(s, t, r, e), this.maybeExportDefined(s, t), s.declareFunctions.add(t);
        return;
      }
      super.declareName(t, r, e);
    }
    isRedeclaredInScope(t, r, e) {
      return super.isRedeclaredInScope(t, r, e) ? true : e & is ? !t.declareFunctions.has(r) && (t.lexical.has(r) || t.functions.has(r)) : false;
    }
    checkLocalExport(t) {
      this.scopeStack[0].declareFunctions.has(t.name) || super.checkLocalExport(t);
    }
  }, cl = class {
    constructor() {
      this.sawUnambiguousESM = false, this.ambiguousScriptDifferentAst = false;
    }
    hasPlugin(t) {
      if (typeof t == "string")
        return this.plugins.has(t);
      {
        let [r, e] = t;
        if (!this.hasPlugin(r))
          return false;
        let s = this.plugins.get(r);
        for (let i of Object.keys(e))
          if ((s == null ? void 0 : s[i]) !== e[i])
            return false;
        return true;
      }
    }
    getPluginOption(t, r) {
      var e;
      return (e = this.plugins.get(t)) == null ? void 0 : e[r];
    }
  };
  function Fr(t, r) {
    t.trailingComments === void 0 ? t.trailingComments = r : t.trailingComments.unshift(...r);
  }
  function pl(t, r) {
    t.leadingComments === void 0 ? t.leadingComments = r : t.leadingComments.unshift(...r);
  }
  function Ye(t, r) {
    t.innerComments === void 0 ? t.innerComments = r : t.innerComments.unshift(...r);
  }
  function Qe(t, r, e) {
    let s = null, i = r.length;
    for (; s === null && i > 0; )
      s = r[--i];
    s === null || s.start > e.start ? Ye(t, e.comments) : Fr(s, e.comments);
  }
  var fl = class extends cl {
    addComment(t) {
      this.filename && (t.loc.filename = this.filename), this.state.comments.push(t);
    }
    processComment(t) {
      let { commentStack: r } = this.state, e = r.length;
      if (e === 0)
        return;
      let s = e - 1, i = r[s];
      i.start === t.end && (i.leadingNode = t, s--);
      let { start: a } = t;
      for (; s >= 0; s--) {
        let n = r[s], o = n.end;
        if (o > a)
          n.containingNode = t, this.finalizeComment(n), r.splice(s, 1);
        else {
          o === a && (n.trailingNode = t);
          break;
        }
      }
    }
    finalizeComment(t) {
      let { comments: r } = t;
      if (t.leadingNode !== null || t.trailingNode !== null)
        t.leadingNode !== null && Fr(t.leadingNode, r), t.trailingNode !== null && pl(t.trailingNode, r);
      else {
        let { containingNode: e, start: s } = t;
        if (this.input.charCodeAt(s - 1) === 44)
          switch (e.type) {
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              Qe(e, e.properties, t);
              break;
            case "CallExpression":
            case "OptionalCallExpression":
              Qe(e, e.arguments, t);
              break;
            case "FunctionDeclaration":
            case "FunctionExpression":
            case "ArrowFunctionExpression":
            case "ObjectMethod":
            case "ClassMethod":
            case "ClassPrivateMethod":
              Qe(e, e.params, t);
              break;
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              Qe(e, e.elements, t);
              break;
            case "ExportNamedDeclaration":
            case "ImportDeclaration":
              Qe(e, e.specifiers, t);
              break;
            default:
              Ye(e, r);
          }
        else
          Ye(e, r);
      }
    }
    finalizeRemainingComments() {
      let { commentStack: t } = this.state;
      for (let r = t.length - 1; r >= 0; r--)
        this.finalizeComment(t[r]);
      this.state.commentStack = [];
    }
    resetPreviousNodeTrailingComments(t) {
      let { commentStack: r } = this.state, { length: e } = r;
      if (e === 0)
        return;
      let s = r[e - 1];
      s.leadingNode === t && (s.leadingNode = null);
    }
    takeSurroundingComments(t, r, e) {
      let { commentStack: s } = this.state, i = s.length;
      if (i === 0)
        return;
      let a = i - 1;
      for (; a >= 0; a--) {
        let n = s[a], o = n.end;
        if (n.start === e)
          n.leadingNode = t;
        else if (o === r)
          n.trailingNode = t;
        else if (o < r)
          break;
      }
    }
  }, cs = /\r\n?|[\n\u2028\u2029]/, vt = new RegExp(cs.source, "g");
  function Ze(t) {
    switch (t) {
      case 10:
      case 13:
      case 8232:
      case 8233:
        return true;
      default:
        return false;
    }
  }
  var ps = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, dl = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y, Lr = new RegExp("(?=(" + dl.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");
  function ml(t) {
    switch (t) {
      case 9:
      case 11:
      case 12:
      case 32:
      case 160:
      case 5760:
      case 8192:
      case 8193:
      case 8194:
      case 8195:
      case 8196:
      case 8197:
      case 8198:
      case 8199:
      case 8200:
      case 8201:
      case 8202:
      case 8239:
      case 8287:
      case 12288:
      case 65279:
        return true;
      default:
        return false;
    }
  }
  var Or = class {
    constructor() {
      this.strict = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.maybeInArrowParameters = false, this.inType = false, this.noAnonFunctionType = false, this.hasFlowComment = false, this.isAmbientContext = false, this.inAbstractClass = false, this.inDisallowConditionalTypesContext = false, this.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null }, this.soloAwait = false, this.inFSharpPipelineDirectBody = false, this.labels = [], this.comments = [], this.commentStack = [], this.pos = 0, this.type = 137, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.context = [x.brace], this.canStartJSXElement = true, this.containsEsc = false, this.firstInvalidTemplateEscapePos = null, this.strictErrors = /* @__PURE__ */ new Map(), this.tokensLength = 0;
    }
    init(t) {
      let { strictMode: r, sourceType: e, startLine: s, startColumn: i } = t;
      this.strict = r === false ? false : r === true ? true : e === "module", this.curLine = s, this.lineStart = -i, this.startLoc = this.endLoc = new Ce(s, i, 0);
    }
    curPosition() {
      return new Ce(this.curLine, this.pos - this.lineStart, this.pos);
    }
    clone(t) {
      let r = new Or(), e = Object.keys(this);
      for (let s = 0, i = e.length; s < i; s++) {
        let a = e[s], n = this[a];
        !t && Array.isArray(n) && (n = n.slice()), r[a] = n;
      }
      return r;
    }
  }, yl = function(r) {
    return r >= 48 && r <= 57;
  }, Br = { decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]), hex: /* @__PURE__ */ new Set([46, 88, 95, 120]) }, Et = { bin: (t) => t === 48 || t === 49, oct: (t) => t >= 48 && t <= 55, dec: (t) => t >= 48 && t <= 57, hex: (t) => t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102 };
  function Mr(t, r, e, s, i, a) {
    let n = e, o = s, u = i, c = "", y = null, g = e, { length: T } = r;
    for (; ; ) {
      if (e >= T) {
        a.unterminated(n, o, u), c += r.slice(g, e);
        break;
      }
      let C = r.charCodeAt(e);
      if (xl(t, C, r, e)) {
        c += r.slice(g, e);
        break;
      }
      if (C === 92) {
        c += r.slice(g, e);
        let j = gl(r, e, s, i, t === "template", a);
        j.ch === null && !y ? y = { pos: e, lineStart: s, curLine: i } : c += j.ch, { pos: e, lineStart: s, curLine: i } = j, g = e;
      } else
        C === 8232 || C === 8233 ? (++e, ++i, s = e) : C === 10 || C === 13 ? t === "template" ? (c += r.slice(g, e) + `
`, ++e, C === 13 && r.charCodeAt(e) === 10 && ++e, ++i, g = s = e) : a.unterminated(n, o, u) : ++e;
    }
    return { pos: e, str: c, firstInvalidLoc: y, lineStart: s, curLine: i, containsInvalid: !!y };
  }
  function xl(t, r, e, s) {
    return t === "template" ? r === 96 || r === 36 && e.charCodeAt(s + 1) === 123 : r === (t === "double" ? 34 : 39);
  }
  function gl(t, r, e, s, i, a) {
    let n = !i;
    r++;
    let o = (c) => ({ pos: r, ch: c, lineStart: e, curLine: s }), u = t.charCodeAt(r++);
    switch (u) {
      case 110:
        return o(`
`);
      case 114:
        return o("\r");
      case 120: {
        let c;
        return { code: c, pos: r } = fs(t, r, e, s, 2, false, n, a), o(c === null ? null : String.fromCharCode(c));
      }
      case 117: {
        let c;
        return { code: c, pos: r } = Rr(t, r, e, s, n, a), o(c === null ? null : String.fromCodePoint(c));
      }
      case 116:
        return o("	");
      case 98:
        return o("\b");
      case 118:
        return o("\v");
      case 102:
        return o("\f");
      case 13:
        t.charCodeAt(r) === 10 && ++r;
      case 10:
        e = r, ++s;
      case 8232:
      case 8233:
        return o("");
      case 56:
      case 57:
        if (i)
          return o(null);
        a.strictNumericEscape(r - 1, e, s);
      default:
        if (u >= 48 && u <= 55) {
          let c = r - 1, g = t.slice(c, r + 2).match(/^[0-7]+/)[0], T = parseInt(g, 8);
          T > 255 && (g = g.slice(0, -1), T = parseInt(g, 8)), r += g.length - 1;
          let C = t.charCodeAt(r);
          if (g !== "0" || C === 56 || C === 57) {
            if (i)
              return o(null);
            a.strictNumericEscape(c, e, s);
          }
          return o(String.fromCharCode(T));
        }
        return o(String.fromCharCode(u));
    }
  }
  function fs(t, r, e, s, i, a, n, o) {
    let u = r, c;
    return { n: c, pos: r } = _r(t, r, e, s, 16, i, a, false, o, !n), c === null && (n ? o.invalidEscapeSequence(u, e, s) : r = u - 1), { code: c, pos: r };
  }
  function _r(t, r, e, s, i, a, n, o, u, c) {
    let y = r, g = i === 16 ? Br.hex : Br.decBinOct, T = i === 16 ? Et.hex : i === 10 ? Et.dec : i === 8 ? Et.oct : Et.bin, C = false, j = 0;
    for (let q = 0, G = a == null ? 1 / 0 : a; q < G; ++q) {
      let J = t.charCodeAt(r), K;
      if (J === 95 && o !== "bail") {
        let Z = t.charCodeAt(r - 1), We = t.charCodeAt(r + 1);
        if (o) {
          if (Number.isNaN(We) || !T(We) || g.has(Z) || g.has(We)) {
            if (c)
              return { n: null, pos: r };
            u.unexpectedNumericSeparator(r, e, s);
          }
        } else {
          if (c)
            return { n: null, pos: r };
          u.numericSeparatorInEscapeSequence(r, e, s);
        }
        ++r;
        continue;
      }
      if (J >= 97 ? K = J - 97 + 10 : J >= 65 ? K = J - 65 + 10 : yl(J) ? K = J - 48 : K = 1 / 0, K >= i) {
        if (K <= 9 && c)
          return { n: null, pos: r };
        if (K <= 9 && u.invalidDigit(r, e, s, i))
          K = 0;
        else if (n)
          K = 0, C = true;
        else
          break;
      }
      ++r, j = j * i + K;
    }
    return r === y || a != null && r - y !== a || C ? { n: null, pos: r } : { n: j, pos: r };
  }
  function Rr(t, r, e, s, i, a) {
    let n = t.charCodeAt(r), o;
    if (n === 123) {
      if (++r, { code: o, pos: r } = fs(t, r, e, s, t.indexOf("}", r) - r, true, i, a), ++r, o !== null && o > 1114111)
        if (i)
          a.invalidCodePoint(r, e, s);
        else
          return { code: null, pos: r };
    } else
      ({ code: o, pos: r } = fs(t, r, e, s, 4, false, i, a));
    return { code: o, pos: r };
  }
  var Pl = ["at"], Al = ["at"];
  function et(t, r, e) {
    return new Ce(e, t - r, t);
  }
  var Tl = /* @__PURE__ */ new Set([103, 109, 115, 105, 121, 117, 100, 118]), Se = class {
    constructor(t) {
      this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, this.loc = new ft(t.startLoc, t.endLoc);
    }
  }, vl = class extends fl {
    constructor(t, r) {
      super(), this.isLookahead = void 0, this.tokens = [], this.errorHandlers_readInt = { invalidDigit: (e, s, i, a) => this.options.errorRecovery ? (this.raise(p.InvalidDigit, { at: et(e, s, i), radix: a }), true) : false, numericSeparatorInEscapeSequence: this.errorBuilder(p.NumericSeparatorInEscapeSequence), unexpectedNumericSeparator: this.errorBuilder(p.UnexpectedNumericSeparator) }, this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, { invalidEscapeSequence: this.errorBuilder(p.InvalidEscapeSequence), invalidCodePoint: this.errorBuilder(p.InvalidCodePoint) }), this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, { strictNumericEscape: (e, s, i) => {
        this.recordStrictModeErrors(p.StrictNumericEscape, { at: et(e, s, i) });
      }, unterminated: (e, s, i) => {
        throw this.raise(p.UnterminatedString, { at: et(e - 1, s, i) });
      } }), this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, { strictNumericEscape: this.errorBuilder(p.StrictNumericEscape), unterminated: (e, s, i) => {
        throw this.raise(p.UnterminatedTemplate, { at: et(e, s, i) });
      } }), this.state = new Or(), this.state.init(t), this.input = r, this.length = r.length, this.isLookahead = false;
    }
    pushToken(t) {
      this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength;
    }
    next() {
      this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new Se(this.state)), this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
    }
    eat(t) {
      return this.match(t) ? (this.next(), true) : false;
    }
    match(t) {
      return this.state.type === t;
    }
    createLookaheadState(t) {
      return { pos: t.pos, value: null, type: t.type, start: t.start, end: t.end, context: [this.curContext()], inType: t.inType, startLoc: t.startLoc, lastTokEndLoc: t.lastTokEndLoc, curLine: t.curLine, lineStart: t.lineStart, curPosition: t.curPosition };
    }
    lookahead() {
      let t = this.state;
      this.state = this.createLookaheadState(t), this.isLookahead = true, this.nextToken(), this.isLookahead = false;
      let r = this.state;
      return this.state = t, r;
    }
    nextTokenStart() {
      return this.nextTokenStartSince(this.state.pos);
    }
    nextTokenStartSince(t) {
      return ps.lastIndex = t, ps.test(this.input) ? ps.lastIndex : t;
    }
    lookaheadCharCode() {
      return this.input.charCodeAt(this.nextTokenStart());
    }
    codePointAtPos(t) {
      let r = this.input.charCodeAt(t);
      if ((r & 64512) === 55296 && ++t < this.input.length) {
        let e = this.input.charCodeAt(t);
        (e & 64512) === 56320 && (r = 65536 + ((r & 1023) << 10) + (e & 1023));
      }
      return r;
    }
    setStrict(t) {
      this.state.strict = t, t && (this.state.strictErrors.forEach((r) => {
        let [e, s] = r;
        return this.raise(e, { at: s });
      }), this.state.strictErrors.clear());
    }
    curContext() {
      return this.state.context[this.state.context.length - 1];
    }
    nextToken() {
      if (this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length) {
        this.finishToken(137);
        return;
      }
      this.getTokenFromCode(this.codePointAtPos(this.state.pos));
    }
    skipBlockComment(t) {
      let r;
      this.isLookahead || (r = this.state.curPosition());
      let e = this.state.pos, s = this.input.indexOf(t, e + 2);
      if (s === -1)
        throw this.raise(p.UnterminatedComment, { at: this.state.curPosition() });
      for (this.state.pos = s + t.length, vt.lastIndex = e + 2; vt.test(this.input) && vt.lastIndex <= s; )
        ++this.state.curLine, this.state.lineStart = vt.lastIndex;
      if (this.isLookahead)
        return;
      let i = { type: "CommentBlock", value: this.input.slice(e + 2, s), start: e, end: s + t.length, loc: new ft(r, this.state.curPosition()) };
      return this.options.tokens && this.pushToken(i), i;
    }
    skipLineComment(t) {
      let r = this.state.pos, e;
      this.isLookahead || (e = this.state.curPosition());
      let s = this.input.charCodeAt(this.state.pos += t);
      if (this.state.pos < this.length)
        for (; !Ze(s) && ++this.state.pos < this.length; )
          s = this.input.charCodeAt(this.state.pos);
      if (this.isLookahead)
        return;
      let i = this.state.pos, n = { type: "CommentLine", value: this.input.slice(r + t, i), start: r, end: i, loc: new ft(e, this.state.curPosition()) };
      return this.options.tokens && this.pushToken(n), n;
    }
    skipSpace() {
      let t = this.state.pos, r = [];
      e:
        for (; this.state.pos < this.length; ) {
          let e = this.input.charCodeAt(this.state.pos);
          switch (e) {
            case 32:
            case 160:
            case 9:
              ++this.state.pos;
              break;
            case 13:
              this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;
            case 10:
            case 8232:
            case 8233:
              ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
              break;
            case 47:
              switch (this.input.charCodeAt(this.state.pos + 1)) {
                case 42: {
                  let s = this.skipBlockComment("*/");
                  s !== void 0 && (this.addComment(s), this.options.attachComment && r.push(s));
                  break;
                }
                case 47: {
                  let s = this.skipLineComment(2);
                  s !== void 0 && (this.addComment(s), this.options.attachComment && r.push(s));
                  break;
                }
                default:
                  break e;
              }
              break;
            default:
              if (ml(e))
                ++this.state.pos;
              else if (e === 45 && !this.inModule && this.options.annexB) {
                let s = this.state.pos;
                if (this.input.charCodeAt(s + 1) === 45 && this.input.charCodeAt(s + 2) === 62 && (t === 0 || this.state.lineStart > t)) {
                  let i = this.skipLineComment(3);
                  i !== void 0 && (this.addComment(i), this.options.attachComment && r.push(i));
                } else
                  break e;
              } else if (e === 60 && !this.inModule && this.options.annexB) {
                let s = this.state.pos;
                if (this.input.charCodeAt(s + 1) === 33 && this.input.charCodeAt(s + 2) === 45 && this.input.charCodeAt(s + 3) === 45) {
                  let i = this.skipLineComment(4);
                  i !== void 0 && (this.addComment(i), this.options.attachComment && r.push(i));
                } else
                  break e;
              } else
                break e;
          }
        }
      if (r.length > 0) {
        let e = this.state.pos, s = { start: t, end: e, comments: r, leadingNode: null, trailingNode: null, containingNode: null };
        this.state.commentStack.push(s);
      }
    }
    finishToken(t, r) {
      this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
      let e = this.state.type;
      this.state.type = t, this.state.value = r, this.isLookahead || this.updateContext(e);
    }
    replaceToken(t) {
      this.state.type = t, this.updateContext();
    }
    readToken_numberSign() {
      if (this.state.pos === 0 && this.readToken_interpreter())
        return;
      let t = this.state.pos + 1, r = this.codePointAtPos(t);
      if (r >= 48 && r <= 57)
        throw this.raise(p.UnexpectedDigitAfterHash, { at: this.state.curPosition() });
      if (r === 123 || r === 91 && this.hasPlugin("recordAndTuple")) {
        if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") === "bar")
          throw this.raise(r === 123 ? p.RecordExpressionHashIncorrectStartSyntaxType : p.TupleExpressionHashIncorrectStartSyntaxType, { at: this.state.curPosition() });
        this.state.pos += 2, r === 123 ? this.finishToken(7) : this.finishToken(1);
      } else
        Pe(r) ? (++this.state.pos, this.finishToken(136, this.readWord1(r))) : r === 92 ? (++this.state.pos, this.finishToken(136, this.readWord1())) : this.finishOp(27, 1);
    }
    readToken_dot() {
      let t = this.input.charCodeAt(this.state.pos + 1);
      if (t >= 48 && t <= 57) {
        this.readNumber(true);
        return;
      }
      t === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
    }
    readToken_slash() {
      this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(31, 2) : this.finishOp(56, 1);
    }
    readToken_interpreter() {
      if (this.state.pos !== 0 || this.length < 2)
        return false;
      let t = this.input.charCodeAt(this.state.pos + 1);
      if (t !== 33)
        return false;
      let r = this.state.pos;
      for (this.state.pos += 1; !Ze(t) && ++this.state.pos < this.length; )
        t = this.input.charCodeAt(this.state.pos);
      let e = this.input.slice(r + 2, this.state.pos);
      return this.finishToken(28, e), true;
    }
    readToken_mult_modulo(t) {
      let r = t === 42 ? 55 : 54, e = 1, s = this.input.charCodeAt(this.state.pos + 1);
      t === 42 && s === 42 && (e++, s = this.input.charCodeAt(this.state.pos + 2), r = 57), s === 61 && !this.state.inType && (e++, r = t === 37 ? 33 : 30), this.finishOp(r, e);
    }
    readToken_pipe_amp(t) {
      let r = this.input.charCodeAt(this.state.pos + 1);
      if (r === t) {
        this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(30, 3) : this.finishOp(t === 124 ? 41 : 42, 2);
        return;
      }
      if (t === 124) {
        if (r === 62) {
          this.finishOp(39, 2);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && r === 125) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(p.RecordExpressionBarIncorrectEndSyntaxType, { at: this.state.curPosition() });
          this.state.pos += 2, this.finishToken(9);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && r === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(p.TupleExpressionBarIncorrectEndSyntaxType, { at: this.state.curPosition() });
          this.state.pos += 2, this.finishToken(4);
          return;
        }
      }
      if (r === 61) {
        this.finishOp(30, 2);
        return;
      }
      this.finishOp(t === 124 ? 43 : 45, 1);
    }
    readToken_caret() {
      let t = this.input.charCodeAt(this.state.pos + 1);
      t === 61 && !this.state.inType ? this.finishOp(32, 2) : t === 94 && this.hasPlugin(["pipelineOperator", { proposal: "hack", topicToken: "^^" }]) ? (this.finishOp(37, 2), this.input.codePointAt(this.state.pos) === 94 && this.unexpected()) : this.finishOp(44, 1);
    }
    readToken_atSign() {
      this.input.charCodeAt(this.state.pos + 1) === 64 && this.hasPlugin(["pipelineOperator", { proposal: "hack", topicToken: "@@" }]) ? this.finishOp(38, 2) : this.finishOp(26, 1);
    }
    readToken_plus_min(t) {
      let r = this.input.charCodeAt(this.state.pos + 1);
      if (r === t) {
        this.finishOp(34, 2);
        return;
      }
      r === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
    }
    readToken_lt() {
      let { pos: t } = this.state, r = this.input.charCodeAt(t + 1);
      if (r === 60) {
        if (this.input.charCodeAt(t + 2) === 61) {
          this.finishOp(30, 3);
          return;
        }
        this.finishOp(51, 2);
        return;
      }
      if (r === 61) {
        this.finishOp(49, 2);
        return;
      }
      this.finishOp(47, 1);
    }
    readToken_gt() {
      let { pos: t } = this.state, r = this.input.charCodeAt(t + 1);
      if (r === 62) {
        let e = this.input.charCodeAt(t + 2) === 62 ? 3 : 2;
        if (this.input.charCodeAt(t + e) === 61) {
          this.finishOp(30, e + 1);
          return;
        }
        this.finishOp(52, e);
        return;
      }
      if (r === 61) {
        this.finishOp(49, 2);
        return;
      }
      this.finishOp(48, 1);
    }
    readToken_eq_excl(t) {
      let r = this.input.charCodeAt(this.state.pos + 1);
      if (r === 61) {
        this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
        return;
      }
      if (t === 61 && r === 62) {
        this.state.pos += 2, this.finishToken(19);
        return;
      }
      this.finishOp(t === 61 ? 29 : 35, 1);
    }
    readToken_question() {
      let t = this.input.charCodeAt(this.state.pos + 1), r = this.input.charCodeAt(this.state.pos + 2);
      t === 63 ? r === 61 ? this.finishOp(30, 3) : this.finishOp(40, 2) : t === 46 && !(r >= 48 && r <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17));
    }
    getTokenFromCode(t) {
      switch (t) {
        case 46:
          this.readToken_dot();
          return;
        case 40:
          ++this.state.pos, this.finishToken(10);
          return;
        case 41:
          ++this.state.pos, this.finishToken(11);
          return;
        case 59:
          ++this.state.pos, this.finishToken(13);
          return;
        case 44:
          ++this.state.pos, this.finishToken(12);
          return;
        case 91:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
              throw this.raise(p.TupleExpressionBarIncorrectStartSyntaxType, { at: this.state.curPosition() });
            this.state.pos += 2, this.finishToken(2);
          } else
            ++this.state.pos, this.finishToken(0);
          return;
        case 93:
          ++this.state.pos, this.finishToken(3);
          return;
        case 123:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
              throw this.raise(p.RecordExpressionBarIncorrectStartSyntaxType, { at: this.state.curPosition() });
            this.state.pos += 2, this.finishToken(6);
          } else
            ++this.state.pos, this.finishToken(5);
          return;
        case 125:
          ++this.state.pos, this.finishToken(8);
          return;
        case 58:
          this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14));
          return;
        case 63:
          this.readToken_question();
          return;
        case 96:
          this.readTemplateToken();
          return;
        case 48: {
          let r = this.input.charCodeAt(this.state.pos + 1);
          if (r === 120 || r === 88) {
            this.readRadixNumber(16);
            return;
          }
          if (r === 111 || r === 79) {
            this.readRadixNumber(8);
            return;
          }
          if (r === 98 || r === 66) {
            this.readRadixNumber(2);
            return;
          }
        }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          this.readNumber(false);
          return;
        case 34:
        case 39:
          this.readString(t);
          return;
        case 47:
          this.readToken_slash();
          return;
        case 37:
        case 42:
          this.readToken_mult_modulo(t);
          return;
        case 124:
        case 38:
          this.readToken_pipe_amp(t);
          return;
        case 94:
          this.readToken_caret();
          return;
        case 43:
        case 45:
          this.readToken_plus_min(t);
          return;
        case 60:
          this.readToken_lt();
          return;
        case 62:
          this.readToken_gt();
          return;
        case 61:
        case 33:
          this.readToken_eq_excl(t);
          return;
        case 126:
          this.finishOp(36, 1);
          return;
        case 64:
          this.readToken_atSign();
          return;
        case 35:
          this.readToken_numberSign();
          return;
        case 92:
          this.readWord();
          return;
        default:
          if (Pe(t)) {
            this.readWord(t);
            return;
          }
      }
      throw this.raise(p.InvalidOrUnexpectedToken, { at: this.state.curPosition(), unexpected: String.fromCodePoint(t) });
    }
    finishOp(t, r) {
      let e = this.input.slice(this.state.pos, this.state.pos + r);
      this.state.pos += r, this.finishToken(t, e);
    }
    readRegexp() {
      let t = this.state.startLoc, r = this.state.start + 1, e, s, { pos: i } = this.state;
      for (; ; ++i) {
        if (i >= this.length)
          throw this.raise(p.UnterminatedRegExp, { at: re(t, 1) });
        let u = this.input.charCodeAt(i);
        if (Ze(u))
          throw this.raise(p.UnterminatedRegExp, { at: re(t, 1) });
        if (e)
          e = false;
        else {
          if (u === 91)
            s = true;
          else if (u === 93 && s)
            s = false;
          else if (u === 47 && !s)
            break;
          e = u === 92;
        }
      }
      let a = this.input.slice(r, i);
      ++i;
      let n = "", o = () => re(t, i + 2 - r);
      for (; i < this.length; ) {
        let u = this.codePointAtPos(i), c = String.fromCharCode(u);
        if (Tl.has(u))
          u === 118 ? (this.expectPlugin("regexpUnicodeSets", o()), n.includes("u") && this.raise(p.IncompatibleRegExpUVFlags, { at: o() })) : u === 117 && n.includes("v") && this.raise(p.IncompatibleRegExpUVFlags, { at: o() }), n.includes(c) && this.raise(p.DuplicateRegExpFlags, { at: o() });
        else if (je(u) || u === 92)
          this.raise(p.MalformedRegExpFlags, { at: o() });
        else
          break;
        ++i, n += c;
      }
      this.state.pos = i, this.finishToken(135, { pattern: a, flags: n });
    }
    readInt(t, r) {
      let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, { n: i, pos: a } = _r(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, r, e, s, this.errorHandlers_readInt, false);
      return this.state.pos = a, i;
    }
    readRadixNumber(t) {
      let r = this.state.curPosition(), e = false;
      this.state.pos += 2;
      let s = this.readInt(t);
      s == null && this.raise(p.InvalidDigit, { at: re(r, 2), radix: t });
      let i = this.input.charCodeAt(this.state.pos);
      if (i === 110)
        ++this.state.pos, e = true;
      else if (i === 109)
        throw this.raise(p.InvalidDecimal, { at: r });
      if (Pe(this.codePointAtPos(this.state.pos)))
        throw this.raise(p.NumberIdentifier, { at: this.state.curPosition() });
      if (e) {
        let a = this.input.slice(r.index, this.state.pos).replace(/[_n]/g, "");
        this.finishToken(133, a);
        return;
      }
      this.finishToken(132, s);
    }
    readNumber(t) {
      let r = this.state.pos, e = this.state.curPosition(), s = false, i = false, a = false, n = false, o = false;
      !t && this.readInt(10) === null && this.raise(p.InvalidNumber, { at: this.state.curPosition() });
      let u = this.state.pos - r >= 2 && this.input.charCodeAt(r) === 48;
      if (u) {
        let T = this.input.slice(r, this.state.pos);
        if (this.recordStrictModeErrors(p.StrictOctalLiteral, { at: e }), !this.state.strict) {
          let C = T.indexOf("_");
          C > 0 && this.raise(p.ZeroDigitNumericSeparator, { at: re(e, C) });
        }
        o = u && !/[89]/.test(T);
      }
      let c = this.input.charCodeAt(this.state.pos);
      if (c === 46 && !o && (++this.state.pos, this.readInt(10), s = true, c = this.input.charCodeAt(this.state.pos)), (c === 69 || c === 101) && !o && (c = this.input.charCodeAt(++this.state.pos), (c === 43 || c === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(p.InvalidOrMissingExponent, { at: e }), s = true, n = true, c = this.input.charCodeAt(this.state.pos)), c === 110 && ((s || u) && this.raise(p.InvalidBigIntLiteral, { at: e }), ++this.state.pos, i = true), c === 109 && (this.expectPlugin("decimal", this.state.curPosition()), (n || u) && this.raise(p.InvalidDecimal, { at: e }), ++this.state.pos, a = true), Pe(this.codePointAtPos(this.state.pos)))
        throw this.raise(p.NumberIdentifier, { at: this.state.curPosition() });
      let y = this.input.slice(r, this.state.pos).replace(/[_mn]/g, "");
      if (i) {
        this.finishToken(133, y);
        return;
      }
      if (a) {
        this.finishToken(134, y);
        return;
      }
      let g = o ? parseInt(y, 8) : parseFloat(y);
      this.finishToken(132, g);
    }
    readCodePoint(t) {
      let { code: r, pos: e } = Rr(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, this.errorHandlers_readCodePoint);
      return this.state.pos = e, r;
    }
    readString(t) {
      let { str: r, pos: e, curLine: s, lineStart: i } = Mr(t === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
      this.state.pos = e + 1, this.state.lineStart = i, this.state.curLine = s, this.finishToken(131, r);
    }
    readTemplateContinuation() {
      this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken();
    }
    readTemplateToken() {
      let t = this.input[this.state.pos], { str: r, firstInvalidLoc: e, pos: s, curLine: i, lineStart: a } = Mr("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
      this.state.pos = s + 1, this.state.lineStart = a, this.state.curLine = i, e && (this.state.firstInvalidTemplateEscapePos = new Ce(e.curLine, e.pos - e.lineStart, e.pos)), this.input.codePointAt(s) === 96 ? this.finishToken(24, e ? null : t + r + "`") : (this.state.pos++, this.finishToken(25, e ? null : t + r + "${"));
    }
    recordStrictModeErrors(t, r) {
      let { at: e } = r, s = e.index;
      this.state.strict && !this.state.strictErrors.has(s) ? this.raise(t, { at: e }) : this.state.strictErrors.set(s, [t, e]);
    }
    readWord1(t) {
      this.state.containsEsc = false;
      let r = "", e = this.state.pos, s = this.state.pos;
      for (t !== void 0 && (this.state.pos += t <= 65535 ? 1 : 2); this.state.pos < this.length; ) {
        let i = this.codePointAtPos(this.state.pos);
        if (je(i))
          this.state.pos += i <= 65535 ? 1 : 2;
        else if (i === 92) {
          this.state.containsEsc = true, r += this.input.slice(s, this.state.pos);
          let a = this.state.curPosition(), n = this.state.pos === e ? Pe : je;
          if (this.input.charCodeAt(++this.state.pos) !== 117) {
            this.raise(p.MissingUnicodeEscape, { at: this.state.curPosition() }), s = this.state.pos - 1;
            continue;
          }
          ++this.state.pos;
          let o = this.readCodePoint(true);
          o !== null && (n(o) || this.raise(p.EscapedCharNotAnIdentifier, { at: a }), r += String.fromCodePoint(o)), s = this.state.pos;
        } else
          break;
      }
      return r + this.input.slice(s, this.state.pos);
    }
    readWord(t) {
      let r = this.readWord1(t), e = O.get(r);
      e !== void 0 ? this.finishToken(e, Y(e)) : this.finishToken(130, r);
    }
    checkKeywordEscapes() {
      let { type: t } = this.state;
      Ee(t) && this.state.containsEsc && this.raise(p.InvalidEscapedReservedWord, { at: this.state.startLoc, reservedWord: Y(t) });
    }
    raise(t, r) {
      let { at: e } = r, s = pt(r, Pl), i = e instanceof Ce ? e : e.loc.start, a = t({ loc: i, details: s });
      if (!this.options.errorRecovery)
        throw a;
      return this.isLookahead || this.state.errors.push(a), a;
    }
    raiseOverwrite(t, r) {
      let { at: e } = r, s = pt(r, Al), i = e instanceof Ce ? e : e.loc.start, a = i.index, n = this.state.errors;
      for (let o = n.length - 1; o >= 0; o--) {
        let u = n[o];
        if (u.loc.index === a)
          return n[o] = t({ loc: i, details: s });
        if (u.loc.index < a)
          break;
      }
      return this.raise(t, r);
    }
    updateContext(t) {
    }
    unexpected(t, r) {
      throw this.raise(p.UnexpectedToken, { expected: r ? Y(r) : null, at: t != null ? t : this.state.startLoc });
    }
    expectPlugin(t, r) {
      if (this.hasPlugin(t))
        return true;
      throw this.raise(p.MissingPlugin, { at: r != null ? r : this.state.startLoc, missingPlugin: [t] });
    }
    expectOnePlugin(t) {
      if (!t.some((r) => this.hasPlugin(r)))
        throw this.raise(p.MissingOneOfPlugins, { at: this.state.startLoc, missingPlugin: t });
    }
    errorBuilder(t) {
      return (r, e, s) => {
        this.raise(t, { at: et(r, e, s) });
      };
    }
  }, El = class {
    constructor() {
      this.privateNames = /* @__PURE__ */ new Set(), this.loneAccessors = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map();
    }
  }, Cl = class {
    constructor(t) {
      this.parser = void 0, this.stack = [], this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.parser = t;
    }
    current() {
      return this.stack[this.stack.length - 1];
    }
    enter() {
      this.stack.push(new El());
    }
    exit() {
      let t = this.stack.pop(), r = this.current();
      for (let [e, s] of Array.from(t.undefinedPrivateNames))
        r ? r.undefinedPrivateNames.has(e) || r.undefinedPrivateNames.set(e, s) : this.parser.raise(p.InvalidPrivateFieldResolution, { at: s, identifierName: e });
    }
    declarePrivateName(t, r, e) {
      let { privateNames: s, loneAccessors: i, undefinedPrivateNames: a } = this.current(), n = s.has(t);
      if (r & os) {
        let o = n && i.get(t);
        if (o) {
          let u = o & Tt, c = r & Tt, y = o & os, g = r & os;
          n = y === g || u !== c, n || i.delete(t);
        } else
          n || i.set(t, r);
      }
      n && this.parser.raise(p.PrivateNameRedeclaration, { at: e, identifierName: t }), s.add(t), a.delete(t);
    }
    usePrivateName(t, r) {
      let e;
      for (e of this.stack)
        if (e.privateNames.has(t))
          return;
      e ? e.undefinedPrivateNames.set(t, r) : this.parser.raise(p.InvalidPrivateFieldResolution, { at: r, identifierName: t });
    }
  }, bl = 0, jr = 1, ds = 2, qr = 3, Ct = class {
    constructor() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bl;
      this.type = void 0, this.type = t;
    }
    canBeArrowParameterDeclaration() {
      return this.type === ds || this.type === jr;
    }
    isCertainlyParameterDeclaration() {
      return this.type === qr;
    }
  }, Ur = class extends Ct {
    constructor(t) {
      super(t), this.declarationErrors = /* @__PURE__ */ new Map();
    }
    recordDeclarationError(t, r) {
      let { at: e } = r, s = e.index;
      this.declarationErrors.set(s, [t, e]);
    }
    clearDeclarationError(t) {
      this.declarationErrors.delete(t);
    }
    iterateErrors(t) {
      this.declarationErrors.forEach(t);
    }
  }, Sl = class {
    constructor(t) {
      this.parser = void 0, this.stack = [new Ct()], this.parser = t;
    }
    enter(t) {
      this.stack.push(t);
    }
    exit() {
      this.stack.pop();
    }
    recordParameterInitializerError(t, r) {
      let { at: e } = r, s = { at: e.loc.start }, { stack: i } = this, a = i.length - 1, n = i[a];
      for (; !n.isCertainlyParameterDeclaration(); ) {
        if (n.canBeArrowParameterDeclaration())
          n.recordDeclarationError(t, s);
        else
          return;
        n = i[--a];
      }
      this.parser.raise(t, s);
    }
    recordArrowParameterBindingError(t, r) {
      let { at: e } = r, { stack: s } = this, i = s[s.length - 1], a = { at: e.loc.start };
      if (i.isCertainlyParameterDeclaration())
        this.parser.raise(t, a);
      else if (i.canBeArrowParameterDeclaration())
        i.recordDeclarationError(t, a);
      else
        return;
    }
    recordAsyncArrowParametersError(t) {
      let { at: r } = t, { stack: e } = this, s = e.length - 1, i = e[s];
      for (; i.canBeArrowParameterDeclaration(); )
        i.type === ds && i.recordDeclarationError(p.AwaitBindingIdentifier, { at: r }), i = e[--s];
    }
    validateAsPattern() {
      let { stack: t } = this, r = t[t.length - 1];
      r.canBeArrowParameterDeclaration() && r.iterateErrors((e) => {
        let [s, i] = e;
        this.parser.raise(s, { at: i });
        let a = t.length - 2, n = t[a];
        for (; n.canBeArrowParameterDeclaration(); )
          n.clearDeclarationError(i.index), n = t[--a];
      });
    }
  };
  function wl() {
    return new Ct(qr);
  }
  function Il() {
    return new Ur(jr);
  }
  function Nl() {
    return new Ur(ds);
  }
  function $r() {
    return new Ct();
  }
  var ze = 0, Hr = 1, bt = 2, zr = 4, Ve = 8, kl = class {
    constructor() {
      this.stacks = [];
    }
    enter(t) {
      this.stacks.push(t);
    }
    exit() {
      this.stacks.pop();
    }
    currentFlags() {
      return this.stacks[this.stacks.length - 1];
    }
    get hasAwait() {
      return (this.currentFlags() & bt) > 0;
    }
    get hasYield() {
      return (this.currentFlags() & Hr) > 0;
    }
    get hasReturn() {
      return (this.currentFlags() & zr) > 0;
    }
    get hasIn() {
      return (this.currentFlags() & Ve) > 0;
    }
  };
  function St(t, r) {
    return (t ? bt : 0) | (r ? Hr : 0);
  }
  var Dl = class extends vl {
    addExtra(t, r, e) {
      let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      if (!t)
        return;
      let i = t.extra = t.extra || {};
      s ? i[r] = e : Object.defineProperty(i, r, { enumerable: s, value: e });
    }
    isContextual(t) {
      return this.state.type === t && !this.state.containsEsc;
    }
    isUnparsedContextual(t, r) {
      let e = t + r.length;
      if (this.input.slice(t, e) === r) {
        let s = this.input.charCodeAt(e);
        return !(je(s) || (s & 64512) === 55296);
      }
      return false;
    }
    isLookaheadContextual(t) {
      let r = this.nextTokenStart();
      return this.isUnparsedContextual(r, t);
    }
    eatContextual(t) {
      return this.isContextual(t) ? (this.next(), true) : false;
    }
    expectContextual(t, r) {
      if (!this.eatContextual(t)) {
        if (r != null)
          throw this.raise(r, { at: this.state.startLoc });
        this.unexpected(null, t);
      }
    }
    canInsertSemicolon() {
      return this.match(137) || this.match(8) || this.hasPrecedingLineBreak();
    }
    hasPrecedingLineBreak() {
      return cs.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start));
    }
    hasFollowingLineBreak() {
      return Lr.lastIndex = this.state.end, Lr.test(this.input);
    }
    isLineTerminator() {
      return this.eat(13) || this.canInsertSemicolon();
    }
    semicolon() {
      ((arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true) ? this.isLineTerminator() : this.eat(13)) || this.raise(p.MissingSemicolon, { at: this.state.lastTokEndLoc });
    }
    expect(t, r) {
      this.eat(t) || this.unexpected(r, t);
    }
    tryParse(t) {
      let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.clone(), e = { node: null };
      try {
        let s = t(function() {
          let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
          throw e.node = i, e;
        });
        if (this.state.errors.length > r.errors.length) {
          let i = this.state;
          return this.state = r, this.state.tokensLength = i.tokensLength, { node: s, error: i.errors[r.errors.length], thrown: false, aborted: false, failState: i };
        }
        return { node: s, error: null, thrown: false, aborted: false, failState: null };
      } catch (s) {
        let i = this.state;
        if (this.state = r, s instanceof SyntaxError)
          return { node: null, error: s, thrown: true, aborted: false, failState: i };
        if (s === e)
          return { node: e.node, error: null, thrown: false, aborted: true, failState: i };
        throw s;
      }
    }
    checkExpressionErrors(t, r) {
      if (!t)
        return false;
      let { shorthandAssignLoc: e, doubleProtoLoc: s, privateKeyLoc: i, optionalParametersLoc: a } = t, n = !!e || !!s || !!a || !!i;
      if (!r)
        return n;
      e != null && this.raise(p.InvalidCoverInitializedName, { at: e }), s != null && this.raise(p.DuplicateProto, { at: s }), i != null && this.raise(p.UnexpectedPrivateField, { at: i }), a != null && this.unexpected(a);
    }
    isLiteralPropertyName() {
      return _e(this.state.type);
    }
    isPrivateName(t) {
      return t.type === "PrivateName";
    }
    getPrivateNameSV(t) {
      return t.id.name;
    }
    hasPropertyAsPrivateName(t) {
      return (t.type === "MemberExpression" || t.type === "OptionalMemberExpression") && this.isPrivateName(t.property);
    }
    isObjectProperty(t) {
      return t.type === "ObjectProperty";
    }
    isObjectMethod(t) {
      return t.type === "ObjectMethod";
    }
    initializeScopes() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.sourceType === "module", r = this.state.labels;
      this.state.labels = [];
      let e = this.exportedIdentifiers;
      this.exportedIdentifiers = /* @__PURE__ */ new Set();
      let s = this.inModule;
      this.inModule = t;
      let i = this.scope, a = this.getScopeHandler();
      this.scope = new a(this, t);
      let n = this.prodParam;
      this.prodParam = new kl();
      let o = this.classScope;
      this.classScope = new Cl(this);
      let u = this.expressionScope;
      return this.expressionScope = new Sl(this), () => {
        this.state.labels = r, this.exportedIdentifiers = e, this.inModule = s, this.scope = i, this.prodParam = n, this.classScope = o, this.expressionScope = u;
      };
    }
    enterInitialScopes() {
      let t = ze;
      this.inModule && (t |= bt), this.scope.enter(Ue), this.prodParam.enter(t);
    }
    checkDestructuringPrivate(t) {
      let { privateKeyLoc: r } = t;
      r !== null && this.expectPlugin("destructuringPrivate", r);
    }
  }, wt = class {
    constructor() {
      this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null;
    }
  }, It = class {
    constructor(t, r, e) {
      this.type = "", this.start = r, this.end = 0, this.loc = new ft(e), t != null && t.options.ranges && (this.range = [r, 0]), t != null && t.filename && (this.loc.filename = t.filename);
    }
  }, ms = It.prototype;
  ms.__clone = function() {
    let t = new It(void 0, this.start, this.loc.start), r = Object.keys(this);
    for (let e = 0, s = r.length; e < s; e++) {
      let i = r[e];
      i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (t[i] = this[i]);
    }
    return t;
  };
  function Fl(t) {
    return Te(t);
  }
  function Te(t) {
    let { type: r, start: e, end: s, loc: i, range: a, extra: n, name: o } = t, u = Object.create(ms);
    return u.type = r, u.start = e, u.end = s, u.loc = i, u.range = a, u.extra = n, u.name = o, r === "Placeholder" && (u.expectedNode = t.expectedNode), u;
  }
  function Ll(t) {
    let { type: r, start: e, end: s, loc: i, range: a, extra: n } = t;
    if (r === "Placeholder")
      return Fl(t);
    let o = Object.create(ms);
    return o.type = r, o.start = e, o.end = s, o.loc = i, o.range = a, t.raw !== void 0 ? o.raw = t.raw : o.extra = n, o.value = t.value, o;
  }
  var Ol = class extends Dl {
    startNode() {
      return new It(this, this.state.start, this.state.startLoc);
    }
    startNodeAt(t) {
      return new It(this, t.index, t);
    }
    startNodeAtNode(t) {
      return this.startNodeAt(t.loc.start);
    }
    finishNode(t, r) {
      return this.finishNodeAt(t, r, this.state.lastTokEndLoc);
    }
    finishNodeAt(t, r, e) {
      return t.type = r, t.end = e.index, t.loc.end = e, this.options.ranges && (t.range[1] = e.index), this.options.attachComment && this.processComment(t), t;
    }
    resetStartLocation(t, r) {
      t.start = r.index, t.loc.start = r, this.options.ranges && (t.range[0] = r.index);
    }
    resetEndLocation(t) {
      let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.lastTokEndLoc;
      t.end = r.index, t.loc.end = r, this.options.ranges && (t.range[1] = r.index);
    }
    resetStartLocationFromNode(t, r) {
      this.resetStartLocation(t, r.loc.start);
    }
  }, Bl = /* @__PURE__ */ new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]), D = ge`flow`({ AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.", AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.", AssignReservedType: (t) => {
    let { reservedType: r } = t;
    return `Cannot overwrite reserved type ${r}.`;
  }, DeclareClassElement: "The `declare` modifier can only appear on class fields.", DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.", DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.", EnumBooleanMemberNotInitialized: (t) => {
    let { memberName: r, enumName: e } = t;
    return `Boolean enum members need to be initialized. Use either \`${r} = true,\` or \`${r} = false,\` in enum \`${e}\`.`;
  }, EnumDuplicateMemberName: (t) => {
    let { memberName: r, enumName: e } = t;
    return `Enum member names need to be unique, but the name \`${r}\` has already been used before in enum \`${e}\`.`;
  }, EnumInconsistentMemberValues: (t) => {
    let { enumName: r } = t;
    return `Enum \`${r}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`;
  }, EnumInvalidExplicitType: (t) => {
    let { invalidEnumType: r, enumName: e } = t;
    return `Enum type \`${r}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${e}\`.`;
  }, EnumInvalidExplicitTypeUnknownSupplied: (t) => {
    let { enumName: r } = t;
    return `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${r}\`.`;
  }, EnumInvalidMemberInitializerPrimaryType: (t) => {
    let { enumName: r, memberName: e, explicitType: s } = t;
    return `Enum \`${r}\` has type \`${s}\`, so the initializer of \`${e}\` needs to be a ${s} literal.`;
  }, EnumInvalidMemberInitializerSymbolType: (t) => {
    let { enumName: r, memberName: e } = t;
    return `Symbol enum members cannot be initialized. Use \`${e},\` in enum \`${r}\`.`;
  }, EnumInvalidMemberInitializerUnknownType: (t) => {
    let { enumName: r, memberName: e } = t;
    return `The enum member initializer for \`${e}\` needs to be a literal (either a boolean, number, or string) in enum \`${r}\`.`;
  }, EnumInvalidMemberName: (t) => {
    let { enumName: r, memberName: e, suggestion: s } = t;
    return `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${e}\`, consider using \`${s}\`, in enum \`${r}\`.`;
  }, EnumNumberMemberNotInitialized: (t) => {
    let { enumName: r, memberName: e } = t;
    return `Number enum members need to be initialized, e.g. \`${e} = 1\` in enum \`${r}\`.`;
  }, EnumStringMemberInconsistentlyInitailized: (t) => {
    let { enumName: r } = t;
    return `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${r}\`.`;
  }, GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.", ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.", ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.", InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.", InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.", InexactVariance: "Explicit inexact syntax cannot have variance.", InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.", MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.", NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.", NestedFlowComment: "Cannot have a flow comment inside another flow comment.", PatternIsOptional: Object.assign({ message: "A binding pattern parameter cannot be optional in an implementation signature." }, { reasonCode: "OptionalBindingPattern" }), SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.", SpreadVariance: "Spread properties cannot have variance.", ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.", ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.", ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.", ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.", ThisParamNoDefault: "The `this` parameter may not have a default value.", TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.", UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.", UnexpectedReservedType: (t) => {
    let { reservedType: r } = t;
    return `Unexpected reserved type ${r}.`;
  }, UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.", UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.", UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.", UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".', UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.", UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.", UnsupportedDeclareExportKind: (t) => {
    let { unsupportedExportKind: r, suggestion: e } = t;
    return `\`declare export ${r}\` is not supported. Use \`${e}\` instead.`;
  }, UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.", UnterminatedFlowComment: "Unterminated flow-comment." });
  function Ml(t) {
    return t.type === "DeclareExportAllDeclaration" || t.type === "DeclareExportDeclaration" && (!t.declaration || t.declaration.type !== "TypeAlias" && t.declaration.type !== "InterfaceDeclaration");
  }
  function ys(t) {
    return t.importKind === "type" || t.importKind === "typeof";
  }
  function Vr(t) {
    return se(t) && t !== 97;
  }
  var _l = { const: "declare export var", let: "declare export var", type: "export type", interface: "export interface" };
  function Rl(t, r) {
    let e = [], s = [];
    for (let i = 0; i < t.length; i++)
      (r(t[i], i, t) ? e : s).push(t[i]);
    return [e, s];
  }
  var jl = /\*?\s*@((?:no)?flow)\b/, ql = (t) => class extends t {
    constructor() {
      super(...arguments), this.flowPragma = void 0;
    }
    getScopeHandler() {
      return ul;
    }
    shouldParseTypes() {
      return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
    }
    shouldParseEnums() {
      return !!this.getPluginOption("flow", "enums");
    }
    finishToken(e, s) {
      e !== 131 && e !== 13 && e !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(e, s);
    }
    addComment(e) {
      if (this.flowPragma === void 0) {
        let s = jl.exec(e.value);
        if (s)
          if (s[1] === "flow")
            this.flowPragma = "flow";
          else if (s[1] === "noflow")
            this.flowPragma = "noflow";
          else
            throw new Error("Unexpected flow pragma");
      }
      super.addComment(e);
    }
    flowParseTypeInitialiser(e) {
      let s = this.state.inType;
      this.state.inType = true, this.expect(e || 14);
      let i = this.flowParseType();
      return this.state.inType = s, i;
    }
    flowParsePredicate() {
      let e = this.startNode(), s = this.state.startLoc;
      return this.next(), this.expectContextual(108), this.state.lastTokStart > s.index + 1 && this.raise(D.UnexpectedSpaceBetweenModuloChecks, { at: s }), this.eat(10) ? (e.value = super.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
    }
    flowParseTypeAndPredicateInitialiser() {
      let e = this.state.inType;
      this.state.inType = true, this.expect(14);
      let s = null, i = null;
      return this.match(54) ? (this.state.inType = e, i = this.flowParsePredicate()) : (s = this.flowParseType(), this.state.inType = e, this.match(54) && (i = this.flowParsePredicate())), [s, i];
    }
    flowParseDeclareClass(e) {
      return this.next(), this.flowParseInterfaceish(e, true), this.finishNode(e, "DeclareClass");
    }
    flowParseDeclareFunction(e) {
      this.next();
      let s = e.id = this.parseIdentifier(), i = this.startNode(), a = this.startNode();
      this.match(47) ? i.typeParameters = this.flowParseTypeParameterDeclaration() : i.typeParameters = null, this.expect(10);
      let n = this.flowParseFunctionTypeParams();
      return i.params = n.params, i.rest = n.rest, i.this = n._this, this.expect(11), [i.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), a.typeAnnotation = this.finishNode(i, "FunctionTypeAnnotation"), s.typeAnnotation = this.finishNode(a, "TypeAnnotation"), this.resetEndLocation(s), this.semicolon(), this.scope.declareName(e.id.name, il, e.id.loc.start), this.finishNode(e, "DeclareFunction");
    }
    flowParseDeclare(e, s) {
      if (this.match(80))
        return this.flowParseDeclareClass(e);
      if (this.match(68))
        return this.flowParseDeclareFunction(e);
      if (this.match(74))
        return this.flowParseDeclareVariable(e);
      if (this.eatContextual(125))
        return this.match(16) ? this.flowParseDeclareModuleExports(e) : (s && this.raise(D.NestedDeclareModule, { at: this.state.lastTokStartLoc }), this.flowParseDeclareModule(e));
      if (this.isContextual(128))
        return this.flowParseDeclareTypeAlias(e);
      if (this.isContextual(129))
        return this.flowParseDeclareOpaqueType(e);
      if (this.isContextual(127))
        return this.flowParseDeclareInterface(e);
      if (this.match(82))
        return this.flowParseDeclareExportDeclaration(e, s);
      this.unexpected();
    }
    flowParseDeclareVariable(e) {
      return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(true), this.scope.declareName(e.id.name, At, e.id.loc.start), this.semicolon(), this.finishNode(e, "DeclareVariable");
    }
    flowParseDeclareModule(e) {
      this.scope.enter(qe), this.match(131) ? e.id = super.parseExprAtom() : e.id = this.parseIdentifier();
      let s = e.body = this.startNode(), i = s.body = [];
      for (this.expect(5); !this.match(8); ) {
        let o = this.startNode();
        this.match(83) ? (this.next(), !this.isContextual(128) && !this.match(87) && this.raise(D.InvalidNonTypeImportInDeclareModule, { at: this.state.lastTokStartLoc }), super.parseImport(o)) : (this.expectContextual(123, D.UnsupportedStatementInDeclareModule), o = this.flowParseDeclare(o, true)), i.push(o);
      }
      this.scope.exit(), this.expect(8), this.finishNode(s, "BlockStatement");
      let a = null, n = false;
      return i.forEach((o) => {
        Ml(o) ? (a === "CommonJS" && this.raise(D.AmbiguousDeclareModuleKind, { at: o }), a = "ES") : o.type === "DeclareModuleExports" && (n && this.raise(D.DuplicateDeclareModuleExports, { at: o }), a === "ES" && this.raise(D.AmbiguousDeclareModuleKind, { at: o }), a = "CommonJS", n = true);
      }), e.kind = a || "CommonJS", this.finishNode(e, "DeclareModule");
    }
    flowParseDeclareExportDeclaration(e, s) {
      if (this.expect(82), this.eat(65))
        return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = true, this.finishNode(e, "DeclareExportDeclaration");
      if (this.match(75) || this.isLet() || (this.isContextual(128) || this.isContextual(127)) && !s) {
        let i = this.state.value;
        throw this.raise(D.UnsupportedDeclareExportKind, { at: this.state.startLoc, unsupportedExportKind: i, suggestion: _l[i] });
      }
      if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(129))
        return e.declaration = this.flowParseDeclare(this.startNode()), e.default = false, this.finishNode(e, "DeclareExportDeclaration");
      if (this.match(55) || this.match(5) || this.isContextual(127) || this.isContextual(128) || this.isContextual(129))
        return e = this.parseExport(e, null), e.type === "ExportNamedDeclaration" && (e.type = "ExportDeclaration", e.default = false, delete e.exportKind), e.type = "Declare" + e.type, e;
      this.unexpected();
    }
    flowParseDeclareModuleExports(e) {
      return this.next(), this.expectContextual(109), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports");
    }
    flowParseDeclareTypeAlias(e) {
      this.next();
      let s = this.flowParseTypeAlias(e);
      return s.type = "DeclareTypeAlias", s;
    }
    flowParseDeclareOpaqueType(e) {
      this.next();
      let s = this.flowParseOpaqueType(e, true);
      return s.type = "DeclareOpaqueType", s;
    }
    flowParseDeclareInterface(e) {
      return this.next(), this.flowParseInterfaceish(e, false), this.finishNode(e, "DeclareInterface");
    }
    flowParseInterfaceish(e, s) {
      if (e.id = this.flowParseRestrictedIdentifier(!s, true), this.scope.declareName(e.id.name, s ? Ir : He, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], e.implements = [], e.mixins = [], this.eat(81))
        do
          e.extends.push(this.flowParseInterfaceExtends());
        while (!s && this.eat(12));
      if (s) {
        if (this.eatContextual(115))
          do
            e.mixins.push(this.flowParseInterfaceExtends());
          while (this.eat(12));
        if (this.eatContextual(111))
          do
            e.implements.push(this.flowParseInterfaceExtends());
          while (this.eat(12));
      }
      e.body = this.flowParseObjectType({ allowStatic: s, allowExact: false, allowSpread: false, allowProto: s, allowInexact: false });
    }
    flowParseInterfaceExtends() {
      let e = this.startNode();
      return e.id = this.flowParseQualifiedTypeIdentifier(), this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends");
    }
    flowParseInterface(e) {
      return this.flowParseInterfaceish(e, false), this.finishNode(e, "InterfaceDeclaration");
    }
    checkNotUnderscore(e) {
      e === "_" && this.raise(D.UnexpectedReservedUnderscore, { at: this.state.startLoc });
    }
    checkReservedType(e, s, i) {
      Bl.has(e) && this.raise(i ? D.AssignReservedType : D.UnexpectedReservedType, { at: s, reservedType: e });
    }
    flowParseRestrictedIdentifier(e, s) {
      return this.checkReservedType(this.state.value, this.state.startLoc, s), this.parseIdentifier(e);
    }
    flowParseTypeAlias(e) {
      return e.id = this.flowParseRestrictedIdentifier(false, true), this.scope.declareName(e.id.name, He, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(e, "TypeAlias");
    }
    flowParseOpaqueType(e, s) {
      return this.expectContextual(128), e.id = this.flowParseRestrictedIdentifier(true, true), this.scope.declareName(e.id.name, He, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)), e.impltype = null, s || (e.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(e, "OpaqueType");
    }
    flowParseTypeParameter() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, s = this.state.startLoc, i = this.startNode(), a = this.flowParseVariance(), n = this.flowParseTypeAnnotatableIdentifier();
      return i.name = n.name, i.variance = a, i.bound = n.typeAnnotation, this.match(29) ? (this.eat(29), i.default = this.flowParseType()) : e && this.raise(D.MissingTypeParamDefault, { at: s }), this.finishNode(i, "TypeParameter");
    }
    flowParseTypeParameterDeclaration() {
      let e = this.state.inType, s = this.startNode();
      s.params = [], this.state.inType = true, this.match(47) || this.match(140) ? this.next() : this.unexpected();
      let i = false;
      do {
        let a = this.flowParseTypeParameter(i);
        s.params.push(a), a.default && (i = true), this.match(48) || this.expect(12);
      } while (!this.match(48));
      return this.expect(48), this.state.inType = e, this.finishNode(s, "TypeParameterDeclaration");
    }
    flowParseTypeParameterInstantiation() {
      let e = this.startNode(), s = this.state.inType;
      e.params = [], this.state.inType = true, this.expect(47);
      let i = this.state.noAnonFunctionType;
      for (this.state.noAnonFunctionType = false; !this.match(48); )
        e.params.push(this.flowParseType()), this.match(48) || this.expect(12);
      return this.state.noAnonFunctionType = i, this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation");
    }
    flowParseTypeParameterInstantiationCallOrNew() {
      let e = this.startNode(), s = this.state.inType;
      for (e.params = [], this.state.inType = true, this.expect(47); !this.match(48); )
        e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12);
      return this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation");
    }
    flowParseInterfaceType() {
      let e = this.startNode();
      if (this.expectContextual(127), e.extends = [], this.eat(81))
        do
          e.extends.push(this.flowParseInterfaceExtends());
        while (this.eat(12));
      return e.body = this.flowParseObjectType({ allowStatic: false, allowExact: false, allowSpread: false, allowProto: false, allowInexact: false }), this.finishNode(e, "InterfaceTypeAnnotation");
    }
    flowParseObjectPropertyKey() {
      return this.match(132) || this.match(131) ? super.parseExprAtom() : this.parseIdentifier(true);
    }
    flowParseObjectTypeIndexer(e, s, i) {
      return e.static = s, this.lookahead().type === 14 ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(3), e.value = this.flowParseTypeInitialiser(), e.variance = i, this.finishNode(e, "ObjectTypeIndexer");
    }
    flowParseObjectTypeInternalSlot(e, s) {
      return e.static = s, e.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (e.method = true, e.optional = false, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))) : (e.method = false, this.eat(17) && (e.optional = true), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot");
    }
    flowParseObjectTypeMethodish(e) {
      for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (e.this = this.flowParseFunctionTypeParam(true), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
        e.params.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
      return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(false)), this.expect(11), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation");
    }
    flowParseObjectTypeCallProperty(e, s) {
      let i = this.startNode();
      return e.static = s, e.value = this.flowParseObjectTypeMethodish(i), this.finishNode(e, "ObjectTypeCallProperty");
    }
    flowParseObjectType(e) {
      let { allowStatic: s, allowExact: i, allowSpread: a, allowProto: n, allowInexact: o } = e, u = this.state.inType;
      this.state.inType = true;
      let c = this.startNode();
      c.callProperties = [], c.properties = [], c.indexers = [], c.internalSlots = [];
      let y, g, T = false;
      for (i && this.match(6) ? (this.expect(6), y = 9, g = true) : (this.expect(5), y = 8, g = false), c.exact = g; !this.match(y); ) {
        let j = false, q = null, G = null, J = this.startNode();
        if (n && this.isContextual(116)) {
          let Z = this.lookahead();
          Z.type !== 14 && Z.type !== 17 && (this.next(), q = this.state.startLoc, s = false);
        }
        if (s && this.isContextual(104)) {
          let Z = this.lookahead();
          Z.type !== 14 && Z.type !== 17 && (this.next(), j = true);
        }
        let K = this.flowParseVariance();
        if (this.eat(0))
          q != null && this.unexpected(q), this.eat(0) ? (K && this.unexpected(K.loc.start), c.internalSlots.push(this.flowParseObjectTypeInternalSlot(J, j))) : c.indexers.push(this.flowParseObjectTypeIndexer(J, j, K));
        else if (this.match(10) || this.match(47))
          q != null && this.unexpected(q), K && this.unexpected(K.loc.start), c.callProperties.push(this.flowParseObjectTypeCallProperty(J, j));
        else {
          let Z = "init";
          if (this.isContextual(98) || this.isContextual(103)) {
            let yh = this.lookahead();
            _e(yh.type) && (Z = this.state.value, this.next());
          }
          let We = this.flowParseObjectTypeProperty(J, j, q, K, Z, a, o != null ? o : !g);
          We === null ? (T = true, G = this.state.lastTokStartLoc) : c.properties.push(We);
        }
        this.flowObjectTypeSemicolon(), G && !this.match(8) && !this.match(9) && this.raise(D.UnexpectedExplicitInexactInObject, { at: G });
      }
      this.expect(y), a && (c.inexact = T);
      let C = this.finishNode(c, "ObjectTypeAnnotation");
      return this.state.inType = u, C;
    }
    flowParseObjectTypeProperty(e, s, i, a, n, o, u) {
      if (this.eat(21))
        return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (o ? u || this.raise(D.InexactInsideExact, { at: this.state.lastTokStartLoc }) : this.raise(D.InexactInsideNonObject, { at: this.state.lastTokStartLoc }), a && this.raise(D.InexactVariance, { at: a }), null) : (o || this.raise(D.UnexpectedSpreadType, { at: this.state.lastTokStartLoc }), i != null && this.unexpected(i), a && this.raise(D.SpreadVariance, { at: a }), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
      {
        e.key = this.flowParseObjectPropertyKey(), e.static = s, e.proto = i != null, e.kind = n;
        let c = false;
        return this.match(47) || this.match(10) ? (e.method = true, i != null && this.unexpected(i), a && this.unexpected(a.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)), (n === "get" || n === "set") && this.flowCheckGetterSetterParams(e), !o && e.key.name === "constructor" && e.value.this && this.raise(D.ThisParamBannedInConstructor, { at: e.value.this })) : (n !== "init" && this.unexpected(), e.method = false, this.eat(17) && (c = true), e.value = this.flowParseTypeInitialiser(), e.variance = a), e.optional = c, this.finishNode(e, "ObjectTypeProperty");
      }
    }
    flowCheckGetterSetterParams(e) {
      let s = e.kind === "get" ? 0 : 1, i = e.value.params.length + (e.value.rest ? 1 : 0);
      e.value.this && this.raise(e.kind === "get" ? D.GetterMayNotHaveThisParam : D.SetterMayNotHaveThisParam, { at: e.value.this }), i !== s && this.raise(e.kind === "get" ? p.BadGetterArity : p.BadSetterArity, { at: e }), e.kind === "set" && e.value.rest && this.raise(p.BadSetterRestParameter, { at: e });
    }
    flowObjectTypeSemicolon() {
      !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected();
    }
    flowParseQualifiedTypeIdentifier(e, s) {
      var i;
      (i = e) != null || (e = this.state.startLoc);
      let a = s || this.flowParseRestrictedIdentifier(true);
      for (; this.eat(16); ) {
        let n = this.startNodeAt(e);
        n.qualification = a, n.id = this.flowParseRestrictedIdentifier(true), a = this.finishNode(n, "QualifiedTypeIdentifier");
      }
      return a;
    }
    flowParseGenericType(e, s) {
      let i = this.startNodeAt(e);
      return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(e, s), this.match(47) && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation");
    }
    flowParseTypeofType() {
      let e = this.startNode();
      return this.expect(87), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation");
    }
    flowParseTupleType() {
      let e = this.startNode();
      for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3)); )
        this.expect(12);
      return this.expect(3), this.finishNode(e, "TupleTypeAnnotation");
    }
    flowParseFunctionTypeParam(e) {
      let s = null, i = false, a = null, n = this.startNode(), o = this.lookahead(), u = this.state.type === 78;
      return o.type === 14 || o.type === 17 ? (u && !e && this.raise(D.ThisParamMustBeFirst, { at: n }), s = this.parseIdentifier(u), this.eat(17) && (i = true, u && this.raise(D.ThisParamMayNotBeOptional, { at: n })), a = this.flowParseTypeInitialiser()) : a = this.flowParseType(), n.name = s, n.optional = i, n.typeAnnotation = a, this.finishNode(n, "FunctionTypeParam");
    }
    reinterpretTypeAsFunctionTypeParam(e) {
      let s = this.startNodeAt(e.loc.start);
      return s.name = null, s.optional = false, s.typeAnnotation = e, this.finishNode(s, "FunctionTypeParam");
    }
    flowParseFunctionTypeParams() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = null, i = null;
      for (this.match(78) && (i = this.flowParseFunctionTypeParam(true), i.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
        e.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
      return this.eat(21) && (s = this.flowParseFunctionTypeParam(false)), { params: e, rest: s, _this: i };
    }
    flowIdentToTypeAnnotation(e, s, i) {
      switch (i.name) {
        case "any":
          return this.finishNode(s, "AnyTypeAnnotation");
        case "bool":
        case "boolean":
          return this.finishNode(s, "BooleanTypeAnnotation");
        case "mixed":
          return this.finishNode(s, "MixedTypeAnnotation");
        case "empty":
          return this.finishNode(s, "EmptyTypeAnnotation");
        case "number":
          return this.finishNode(s, "NumberTypeAnnotation");
        case "string":
          return this.finishNode(s, "StringTypeAnnotation");
        case "symbol":
          return this.finishNode(s, "SymbolTypeAnnotation");
        default:
          return this.checkNotUnderscore(i.name), this.flowParseGenericType(e, i);
      }
    }
    flowParsePrimaryType() {
      let e = this.state.startLoc, s = this.startNode(), i, a, n = false, o = this.state.noAnonFunctionType;
      switch (this.state.type) {
        case 5:
          return this.flowParseObjectType({ allowStatic: false, allowExact: false, allowSpread: true, allowProto: false, allowInexact: true });
        case 6:
          return this.flowParseObjectType({ allowStatic: false, allowExact: true, allowSpread: true, allowProto: false, allowInexact: false });
        case 0:
          return this.state.noAnonFunctionType = false, a = this.flowParseTupleType(), this.state.noAnonFunctionType = o, a;
        case 47:
          return s.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, s.this = i._this, this.expect(11), this.expect(19), s.returnType = this.flowParseType(), this.finishNode(s, "FunctionTypeAnnotation");
        case 10:
          if (this.next(), !this.match(11) && !this.match(21))
            if (R(this.state.type) || this.match(78)) {
              let u = this.lookahead().type;
              n = u !== 17 && u !== 14;
            } else
              n = true;
          if (n) {
            if (this.state.noAnonFunctionType = false, a = this.flowParseType(), this.state.noAnonFunctionType = o, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
              return this.expect(11), a;
            this.eat(12);
          }
          return a ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(a)]) : i = this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, s.this = i._this, this.expect(11), this.expect(19), s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
        case 131:
          return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
        case 85:
        case 86:
          return s.value = this.match(85), this.next(), this.finishNode(s, "BooleanLiteralTypeAnnotation");
        case 53:
          if (this.state.value === "-") {
            if (this.next(), this.match(132))
              return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", s);
            if (this.match(133))
              return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", s);
            throw this.raise(D.UnexpectedSubtractionOperand, { at: this.state.startLoc });
          }
          this.unexpected();
          return;
        case 132:
          return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
        case 133:
          return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
        case 88:
          return this.next(), this.finishNode(s, "VoidTypeAnnotation");
        case 84:
          return this.next(), this.finishNode(s, "NullLiteralTypeAnnotation");
        case 78:
          return this.next(), this.finishNode(s, "ThisTypeAnnotation");
        case 55:
          return this.next(), this.finishNode(s, "ExistsTypeAnnotation");
        case 87:
          return this.flowParseTypeofType();
        default:
          if (Ee(this.state.type)) {
            let u = Y(this.state.type);
            return this.next(), super.createIdentifier(s, u);
          } else if (R(this.state.type))
            return this.isContextual(127) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, s, this.parseIdentifier());
      }
      this.unexpected();
    }
    flowParsePostfixType() {
      let e = this.state.startLoc, s = this.flowParsePrimaryType(), i = false;
      for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon(); ) {
        let a = this.startNodeAt(e), n = this.eat(18);
        i = i || n, this.expect(0), !n && this.match(3) ? (a.elementType = s, this.next(), s = this.finishNode(a, "ArrayTypeAnnotation")) : (a.objectType = s, a.indexType = this.flowParseType(), this.expect(3), i ? (a.optional = n, s = this.finishNode(a, "OptionalIndexedAccessType")) : s = this.finishNode(a, "IndexedAccessType"));
      }
      return s;
    }
    flowParsePrefixType() {
      let e = this.startNode();
      return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType();
    }
    flowParseAnonFunctionWithoutParens() {
      let e = this.flowParsePrefixType();
      if (!this.state.noAnonFunctionType && this.eat(19)) {
        let s = this.startNodeAt(e.loc.start);
        return s.params = [this.reinterpretTypeAsFunctionTypeParam(e)], s.rest = null, s.this = null, s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
      }
      return e;
    }
    flowParseIntersectionType() {
      let e = this.startNode();
      this.eat(45);
      let s = this.flowParseAnonFunctionWithoutParens();
      for (e.types = [s]; this.eat(45); )
        e.types.push(this.flowParseAnonFunctionWithoutParens());
      return e.types.length === 1 ? s : this.finishNode(e, "IntersectionTypeAnnotation");
    }
    flowParseUnionType() {
      let e = this.startNode();
      this.eat(43);
      let s = this.flowParseIntersectionType();
      for (e.types = [s]; this.eat(43); )
        e.types.push(this.flowParseIntersectionType());
      return e.types.length === 1 ? s : this.finishNode(e, "UnionTypeAnnotation");
    }
    flowParseType() {
      let e = this.state.inType;
      this.state.inType = true;
      let s = this.flowParseUnionType();
      return this.state.inType = e, s;
    }
    flowParseTypeOrImplicitInstantiation() {
      if (this.state.type === 130 && this.state.value === "_") {
        let e = this.state.startLoc, s = this.parseIdentifier();
        return this.flowParseGenericType(e, s);
      } else
        return this.flowParseType();
    }
    flowParseTypeAnnotation() {
      let e = this.startNode();
      return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation");
    }
    flowParseTypeAnnotatableIdentifier(e) {
      let s = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
      return this.match(14) && (s.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(s)), s;
    }
    typeCastToParameter(e) {
      return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
    }
    flowParseVariance() {
      let e = null;
      return this.match(53) ? (e = this.startNode(), this.state.value === "+" ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")) : e;
    }
    parseFunctionBody(e, s) {
      let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (s) {
        this.forwardNoArrowParamsConversionAt(e, () => super.parseFunctionBody(e, true, i));
        return;
      }
      super.parseFunctionBody(e, false, i);
    }
    parseFunctionBodyAndFinish(e, s) {
      let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (this.match(14)) {
        let a = this.startNode();
        [a.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), e.returnType = a.typeAnnotation ? this.finishNode(a, "TypeAnnotation") : null;
      }
      return super.parseFunctionBodyAndFinish(e, s, i);
    }
    parseStatementLike(e) {
      if (this.state.strict && this.isContextual(127)) {
        let i = this.lookahead();
        if (se(i.type)) {
          let a = this.startNode();
          return this.next(), this.flowParseInterface(a);
        }
      } else if (this.shouldParseEnums() && this.isContextual(124)) {
        let i = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(i);
      }
      let s = super.parseStatementLike(e);
      return this.flowPragma === void 0 && !this.isValidDirective(s) && (this.flowPragma = null), s;
    }
    parseExpressionStatement(e, s, i) {
      if (s.type === "Identifier") {
        if (s.name === "declare") {
          if (this.match(80) || R(this.state.type) || this.match(68) || this.match(74) || this.match(82))
            return this.flowParseDeclare(e);
        } else if (R(this.state.type)) {
          if (s.name === "interface")
            return this.flowParseInterface(e);
          if (s.name === "type")
            return this.flowParseTypeAlias(e);
          if (s.name === "opaque")
            return this.flowParseOpaqueType(e, false);
        }
      }
      return super.parseExpressionStatement(e, s, i);
    }
    shouldParseExportDeclaration() {
      let { type: e } = this.state;
      return ne(e) || this.shouldParseEnums() && e === 124 ? !this.state.containsEsc : super.shouldParseExportDeclaration();
    }
    isExportDefaultSpecifier() {
      let { type: e } = this.state;
      return ne(e) || this.shouldParseEnums() && e === 124 ? this.state.containsEsc : super.isExportDefaultSpecifier();
    }
    parseExportDefaultExpression() {
      if (this.shouldParseEnums() && this.isContextual(124)) {
        let e = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(e);
      }
      return super.parseExportDefaultExpression();
    }
    parseConditional(e, s, i) {
      if (!this.match(17))
        return e;
      if (this.state.maybeInArrowParameters) {
        let T = this.lookaheadCharCode();
        if (T === 44 || T === 61 || T === 58 || T === 41)
          return this.setOptionalParametersError(i), e;
      }
      this.expect(17);
      let a = this.state.clone(), n = this.state.noArrowAt, o = this.startNodeAt(s), { consequent: u, failed: c } = this.tryParseConditionalConsequent(), [y, g] = this.getArrowLikeExpressions(u);
      if (c || g.length > 0) {
        let T = [...n];
        if (g.length > 0) {
          this.state = a, this.state.noArrowAt = T;
          for (let C = 0; C < g.length; C++)
            T.push(g[C].start);
          ({ consequent: u, failed: c } = this.tryParseConditionalConsequent()), [y, g] = this.getArrowLikeExpressions(u);
        }
        c && y.length > 1 && this.raise(D.AmbiguousConditionalArrow, { at: a.startLoc }), c && y.length === 1 && (this.state = a, T.push(y[0].start), this.state.noArrowAt = T, { consequent: u, failed: c } = this.tryParseConditionalConsequent());
      }
      return this.getArrowLikeExpressions(u, true), this.state.noArrowAt = n, this.expect(14), o.test = e, o.consequent = u, o.alternate = this.forwardNoArrowParamsConversionAt(o, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(o, "ConditionalExpression");
    }
    tryParseConditionalConsequent() {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      let e = this.parseMaybeAssignAllowIn(), s = !this.match(14);
      return this.state.noArrowParamsConversionAt.pop(), { consequent: e, failed: s };
    }
    getArrowLikeExpressions(e, s) {
      let i = [e], a = [];
      for (; i.length !== 0; ) {
        let n = i.pop();
        n.type === "ArrowFunctionExpression" ? (n.typeParameters || !n.returnType ? this.finishArrowValidation(n) : a.push(n), i.push(n.body)) : n.type === "ConditionalExpression" && (i.push(n.consequent), i.push(n.alternate));
      }
      return s ? (a.forEach((n) => this.finishArrowValidation(n)), [a, []]) : Rl(a, (n) => n.params.every((o) => this.isAssignable(o, true)));
    }
    finishArrowValidation(e) {
      var s;
      this.toAssignableList(e.params, (s = e.extra) == null ? void 0 : s.trailingCommaLoc, false), this.scope.enter(Ae | es), super.checkParams(e, false, true), this.scope.exit();
    }
    forwardNoArrowParamsConversionAt(e, s) {
      let i;
      return this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? (this.state.noArrowParamsConversionAt.push(this.state.start), i = s(), this.state.noArrowParamsConversionAt.pop()) : i = s(), i;
    }
    parseParenItem(e, s) {
      if (e = super.parseParenItem(e, s), this.eat(17) && (e.optional = true, this.resetEndLocation(e)), this.match(14)) {
        let i = this.startNodeAt(s);
        return i.expression = e, i.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(i, "TypeCastExpression");
      }
      return e;
    }
    assertModuleNodeAllowed(e) {
      e.type === "ImportDeclaration" && (e.importKind === "type" || e.importKind === "typeof") || e.type === "ExportNamedDeclaration" && e.exportKind === "type" || e.type === "ExportAllDeclaration" && e.exportKind === "type" || super.assertModuleNodeAllowed(e);
    }
    parseExport(e, s) {
      let i = super.parseExport(e, s);
      return (i.type === "ExportNamedDeclaration" || i.type === "ExportAllDeclaration") && (i.exportKind = i.exportKind || "value"), i;
    }
    parseExportDeclaration(e) {
      if (this.isContextual(128)) {
        e.exportKind = "type";
        let s = this.startNode();
        return this.next(), this.match(5) ? (e.specifiers = this.parseExportSpecifiers(true), super.parseExportFrom(e), null) : this.flowParseTypeAlias(s);
      } else if (this.isContextual(129)) {
        e.exportKind = "type";
        let s = this.startNode();
        return this.next(), this.flowParseOpaqueType(s, false);
      } else if (this.isContextual(127)) {
        e.exportKind = "type";
        let s = this.startNode();
        return this.next(), this.flowParseInterface(s);
      } else if (this.shouldParseEnums() && this.isContextual(124)) {
        e.exportKind = "value";
        let s = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(s);
      } else
        return super.parseExportDeclaration(e);
    }
    eatExportStar(e) {
      return super.eatExportStar(e) ? true : this.isContextual(128) && this.lookahead().type === 55 ? (e.exportKind = "type", this.next(), this.next(), true) : false;
    }
    maybeParseExportNamespaceSpecifier(e) {
      let { startLoc: s } = this.state, i = super.maybeParseExportNamespaceSpecifier(e);
      return i && e.exportKind === "type" && this.unexpected(s), i;
    }
    parseClassId(e, s, i) {
      super.parseClassId(e, s, i), this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration());
    }
    parseClassMember(e, s, i) {
      let { startLoc: a } = this.state;
      if (this.isContextual(123)) {
        if (super.parseClassMemberFromModifier(e, s))
          return;
        s.declare = true;
      }
      super.parseClassMember(e, s, i), s.declare && (s.type !== "ClassProperty" && s.type !== "ClassPrivateProperty" && s.type !== "PropertyDefinition" ? this.raise(D.DeclareClassElement, { at: a }) : s.value && this.raise(D.DeclareClassFieldInitializer, { at: s.value }));
    }
    isIterator(e) {
      return e === "iterator" || e === "asyncIterator";
    }
    readIterator() {
      let e = super.readWord1(), s = "@@" + e;
      (!this.isIterator(e) || !this.state.inType) && this.raise(p.InvalidIdentifier, { at: this.state.curPosition(), identifierName: s }), this.finishToken(130, s);
    }
    getTokenFromCode(e) {
      let s = this.input.charCodeAt(this.state.pos + 1);
      e === 123 && s === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 48 : 47, 1) : this.state.inType && e === 63 ? s === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : Jo(e, s, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e);
    }
    isAssignable(e, s) {
      return e.type === "TypeCastExpression" ? this.isAssignable(e.expression, s) : super.isAssignable(e, s);
    }
    toAssignable(e) {
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      !s && e.type === "AssignmentExpression" && e.left.type === "TypeCastExpression" && (e.left = this.typeCastToParameter(e.left)), super.toAssignable(e, s);
    }
    toAssignableList(e, s, i) {
      for (let a = 0; a < e.length; a++) {
        let n = e[a];
        (n == null ? void 0 : n.type) === "TypeCastExpression" && (e[a] = this.typeCastToParameter(n));
      }
      super.toAssignableList(e, s, i);
    }
    toReferencedList(e, s) {
      for (let a = 0; a < e.length; a++) {
        var i;
        let n = e[a];
        n && n.type === "TypeCastExpression" && !((i = n.extra) != null && i.parenthesized) && (e.length > 1 || !s) && this.raise(D.TypeCastInPattern, { at: n.typeAnnotation });
      }
      return e;
    }
    parseArrayLike(e, s, i, a) {
      let n = super.parseArrayLike(e, s, i, a);
      return s && !this.state.maybeInArrowParameters && this.toReferencedList(n.elements), n;
    }
    isValidLVal(e, s, i) {
      return e === "TypeCastExpression" || super.isValidLVal(e, s, i);
    }
    parseClassProperty(e) {
      return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(e);
    }
    parseClassPrivateProperty(e) {
      return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(e);
    }
    isClassMethod() {
      return this.match(47) || super.isClassMethod();
    }
    isClassProperty() {
      return this.match(14) || super.isClassProperty();
    }
    isNonstaticConstructor(e) {
      return !this.match(14) && super.isNonstaticConstructor(e);
    }
    pushClassMethod(e, s, i, a, n, o) {
      if (s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, s, i, a, n, o), s.params && n) {
        let u = s.params;
        u.length > 0 && this.isThisParam(u[0]) && this.raise(D.ThisParamBannedInConstructor, { at: s });
      } else if (s.type === "MethodDefinition" && n && s.value.params) {
        let u = s.value.params;
        u.length > 0 && this.isThisParam(u[0]) && this.raise(D.ThisParamBannedInConstructor, { at: s });
      }
    }
    pushClassPrivateMethod(e, s, i, a) {
      s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(e, s, i, a);
    }
    parseClassSuper(e) {
      if (super.parseClassSuper(e), e.superClass && this.match(47) && (e.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual(111)) {
        this.next();
        let s = e.implements = [];
        do {
          let i = this.startNode();
          i.id = this.flowParseRestrictedIdentifier(true), this.match(47) ? i.typeParameters = this.flowParseTypeParameterInstantiation() : i.typeParameters = null, s.push(this.finishNode(i, "ClassImplements"));
        } while (this.eat(12));
      }
    }
    checkGetterSetterParams(e) {
      super.checkGetterSetterParams(e);
      let s = this.getObjectOrClassMethodParams(e);
      if (s.length > 0) {
        let i = s[0];
        this.isThisParam(i) && e.kind === "get" ? this.raise(D.GetterMayNotHaveThisParam, { at: i }) : this.isThisParam(i) && this.raise(D.SetterMayNotHaveThisParam, { at: i });
      }
    }
    parsePropertyNamePrefixOperator(e) {
      e.variance = this.flowParseVariance();
    }
    parseObjPropValue(e, s, i, a, n, o, u) {
      e.variance && this.unexpected(e.variance.loc.start), delete e.variance;
      let c;
      this.match(47) && !o && (c = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected());
      let y = super.parseObjPropValue(e, s, i, a, n, o, u);
      return c && ((y.value || y).typeParameters = c), y;
    }
    parseAssignableListItemTypes(e) {
      return this.eat(17) && (e.type !== "Identifier" && this.raise(D.PatternIsOptional, { at: e }), this.isThisParam(e) && this.raise(D.ThisParamMayNotBeOptional, { at: e }), e.optional = true), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(D.ThisParamAnnotationRequired, { at: e }), this.match(29) && this.isThisParam(e) && this.raise(D.ThisParamNoDefault, { at: e }), this.resetEndLocation(e), e;
    }
    parseMaybeDefault(e, s) {
      let i = super.parseMaybeDefault(e, s);
      return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(D.TypeBeforeInitializer, { at: i.typeAnnotation }), i;
    }
    shouldParseDefaultImport(e) {
      return ys(e) ? Vr(this.state.type) : super.shouldParseDefaultImport(e);
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(D.ImportReflectionHasImportType, { at: e.specifiers[0].loc.start });
    }
    parseImportSpecifierLocal(e, s, i) {
      s.local = ys(e) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(s, i));
    }
    maybeParseDefaultImportSpecifier(e) {
      e.importKind = "value";
      let s = null;
      if (this.match(87) ? s = "typeof" : this.isContextual(128) && (s = "type"), s) {
        let i = this.lookahead(), { type: a } = i;
        s === "type" && a === 55 && this.unexpected(null, i.type), (Vr(a) || a === 5 || a === 55) && (this.next(), e.importKind = s);
      }
      return super.maybeParseDefaultImportSpecifier(e);
    }
    parseImportSpecifier(e, s, i, a, n) {
      let o = e.imported, u = null;
      o.type === "Identifier" && (o.name === "type" ? u = "type" : o.name === "typeof" && (u = "typeof"));
      let c = false;
      if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
        let g = this.parseIdentifier(true);
        u !== null && !se(this.state.type) ? (e.imported = g, e.importKind = u, e.local = Te(g)) : (e.imported = o, e.importKind = null, e.local = this.parseIdentifier());
      } else {
        if (u !== null && se(this.state.type))
          e.imported = this.parseIdentifier(true), e.importKind = u;
        else {
          if (s)
            throw this.raise(p.ImportBindingIsString, { at: e, importName: o.value });
          e.imported = o, e.importKind = null;
        }
        this.eatContextual(93) ? e.local = this.parseIdentifier() : (c = true, e.local = Te(e.imported));
      }
      let y = ys(e);
      return i && y && this.raise(D.ImportTypeShorthandOnlyInPureImport, { at: e }), (i || y) && this.checkReservedType(e.local.name, e.local.loc.start, true), c && !i && !y && this.checkReservedWord(e.local.name, e.loc.start, true, true), this.finishImportSpecifier(e, "ImportSpecifier");
    }
    parseBindingAtom() {
      switch (this.state.type) {
        case 78:
          return this.parseIdentifier(true);
        default:
          return super.parseBindingAtom();
      }
    }
    parseFunctionParams(e, s) {
      let i = e.kind;
      i !== "get" && i !== "set" && this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(e, s);
    }
    parseVarId(e, s) {
      super.parseVarId(e, s), this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id));
    }
    parseAsyncArrowFromCallExpression(e, s) {
      if (this.match(14)) {
        let i = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = true, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = i;
      }
      return super.parseAsyncArrowFromCallExpression(e, s);
    }
    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }
    parseMaybeAssign(e, s) {
      var i;
      let a = null, n;
      if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
        if (a = this.state.clone(), n = this.tryParse(() => super.parseMaybeAssign(e, s), a), !n.error)
          return n.node;
        let { context: c } = this.state, y = c[c.length - 1];
        (y === x.j_oTag || y === x.j_expr) && c.pop();
      }
      if ((i = n) != null && i.error || this.match(47)) {
        var o, u;
        a = a || this.state.clone();
        let c, y = this.tryParse((T) => {
          var C;
          c = this.flowParseTypeParameterDeclaration();
          let j = this.forwardNoArrowParamsConversionAt(c, () => {
            let G = super.parseMaybeAssign(e, s);
            return this.resetStartLocationFromNode(G, c), G;
          });
          (C = j.extra) != null && C.parenthesized && T();
          let q = this.maybeUnwrapTypeCastExpression(j);
          return q.type !== "ArrowFunctionExpression" && T(), q.typeParameters = c, this.resetStartLocationFromNode(q, c), j;
        }, a), g = null;
        if (y.node && this.maybeUnwrapTypeCastExpression(y.node).type === "ArrowFunctionExpression") {
          if (!y.error && !y.aborted)
            return y.node.async && this.raise(D.UnexpectedTypeParameterBeforeAsyncArrowFunction, { at: c }), y.node;
          g = y.node;
        }
        if ((o = n) != null && o.node)
          return this.state = n.failState, n.node;
        if (g)
          return this.state = y.failState, g;
        throw (u = n) != null && u.thrown ? n.error : y.thrown ? y.error : this.raise(D.UnexpectedTokenAfterTypeParameter, { at: c });
      }
      return super.parseMaybeAssign(e, s);
    }
    parseArrow(e) {
      if (this.match(14)) {
        let s = this.tryParse(() => {
          let i = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = true;
          let a = this.startNode();
          return [a.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = i, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), a;
        });
        if (s.thrown)
          return null;
        s.error && (this.state = s.failState), e.returnType = s.node.typeAnnotation ? this.finishNode(s.node, "TypeAnnotation") : null;
      }
      return super.parseArrow(e);
    }
    shouldParseArrow(e) {
      return this.match(14) || super.shouldParseArrow(e);
    }
    setArrowFunctionParameters(e, s) {
      this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? e.params = s : super.setArrowFunctionParameters(e, s);
    }
    checkParams(e, s, i) {
      let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      if (!(i && this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1)) {
        for (let n = 0; n < e.params.length; n++)
          this.isThisParam(e.params[n]) && n > 0 && this.raise(D.ThisParamMustBeFirst, { at: e.params[n] });
        super.checkParams(e, s, i, a);
      }
    }
    parseParenAndDistinguishExpression(e) {
      return super.parseParenAndDistinguishExpression(e && this.state.noArrowAt.indexOf(this.state.start) === -1);
    }
    parseSubscripts(e, s, i) {
      if (e.type === "Identifier" && e.name === "async" && this.state.noArrowAt.indexOf(s.index) !== -1) {
        this.next();
        let a = this.startNodeAt(s);
        a.callee = e, a.arguments = super.parseCallExpressionArguments(11, false), e = this.finishNode(a, "CallExpression");
      } else if (e.type === "Identifier" && e.name === "async" && this.match(47)) {
        let a = this.state.clone(), n = this.tryParse((u) => this.parseAsyncArrowWithTypeParameters(s) || u(), a);
        if (!n.error && !n.aborted)
          return n.node;
        let o = this.tryParse(() => super.parseSubscripts(e, s, i), a);
        if (o.node && !o.error)
          return o.node;
        if (n.node)
          return this.state = n.failState, n.node;
        if (o.node)
          return this.state = o.failState, o.node;
        throw n.error || o.error;
      }
      return super.parseSubscripts(e, s, i);
    }
    parseSubscript(e, s, i, a) {
      if (this.match(18) && this.isLookaheadToken_lt()) {
        if (a.optionalChainMember = true, i)
          return a.stop = true, e;
        this.next();
        let n = this.startNodeAt(s);
        return n.callee = e, n.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(10), n.arguments = this.parseCallExpressionArguments(11, false), n.optional = true, this.finishCallExpression(n, true);
      } else if (!i && this.shouldParseTypes() && this.match(47)) {
        let n = this.startNodeAt(s);
        n.callee = e;
        let o = this.tryParse(() => (n.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), n.arguments = super.parseCallExpressionArguments(11, false), a.optionalChainMember && (n.optional = false), this.finishCallExpression(n, a.optionalChainMember)));
        if (o.node)
          return o.error && (this.state = o.failState), o.node;
      }
      return super.parseSubscript(e, s, i, a);
    }
    parseNewCallee(e) {
      super.parseNewCallee(e);
      let s = null;
      this.shouldParseTypes() && this.match(47) && (s = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), e.typeArguments = s;
    }
    parseAsyncArrowWithTypeParameters(e) {
      let s = this.startNodeAt(e);
      if (this.parseFunctionParams(s, false), !!this.parseArrow(s))
        return super.parseArrowExpression(s, void 0, true);
    }
    readToken_mult_modulo(e) {
      let s = this.input.charCodeAt(this.state.pos + 1);
      if (e === 42 && s === 47 && this.state.hasFlowComment) {
        this.state.hasFlowComment = false, this.state.pos += 2, this.nextToken();
        return;
      }
      super.readToken_mult_modulo(e);
    }
    readToken_pipe_amp(e) {
      let s = this.input.charCodeAt(this.state.pos + 1);
      if (e === 124 && s === 125) {
        this.finishOp(9, 2);
        return;
      }
      super.readToken_pipe_amp(e);
    }
    parseTopLevel(e, s) {
      let i = super.parseTopLevel(e, s);
      return this.state.hasFlowComment && this.raise(D.UnterminatedFlowComment, { at: this.state.curPosition() }), i;
    }
    skipBlockComment() {
      if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
        if (this.state.hasFlowComment)
          throw this.raise(D.NestedFlowComment, { at: this.state.startLoc });
        this.hasFlowCommentCompletion();
        let e = this.skipFlowComment();
        e && (this.state.pos += e, this.state.hasFlowComment = true);
        return;
      }
      return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/");
    }
    skipFlowComment() {
      let { pos: e } = this.state, s = 2;
      for (; [32, 9].includes(this.input.charCodeAt(e + s)); )
        s++;
      let i = this.input.charCodeAt(s + e), a = this.input.charCodeAt(s + e + 1);
      return i === 58 && a === 58 ? s + 2 : this.input.slice(s + e, s + e + 12) === "flow-include" ? s + 12 : i === 58 && a !== 58 ? s : false;
    }
    hasFlowCommentCompletion() {
      if (this.input.indexOf("*/", this.state.pos) === -1)
        throw this.raise(p.UnterminatedComment, { at: this.state.curPosition() });
    }
    flowEnumErrorBooleanMemberNotInitialized(e, s) {
      let { enumName: i, memberName: a } = s;
      this.raise(D.EnumBooleanMemberNotInitialized, { at: e, memberName: a, enumName: i });
    }
    flowEnumErrorInvalidMemberInitializer(e, s) {
      return this.raise(s.explicitType ? s.explicitType === "symbol" ? D.EnumInvalidMemberInitializerSymbolType : D.EnumInvalidMemberInitializerPrimaryType : D.EnumInvalidMemberInitializerUnknownType, Object.assign({ at: e }, s));
    }
    flowEnumErrorNumberMemberNotInitialized(e, s) {
      let { enumName: i, memberName: a } = s;
      this.raise(D.EnumNumberMemberNotInitialized, { at: e, enumName: i, memberName: a });
    }
    flowEnumErrorStringMemberInconsistentlyInitailized(e, s) {
      let { enumName: i } = s;
      this.raise(D.EnumStringMemberInconsistentlyInitailized, { at: e, enumName: i });
    }
    flowEnumMemberInit() {
      let e = this.state.startLoc, s = () => this.match(12) || this.match(8);
      switch (this.state.type) {
        case 132: {
          let i = this.parseNumericLiteral(this.state.value);
          return s() ? { type: "number", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
        }
        case 131: {
          let i = this.parseStringLiteral(this.state.value);
          return s() ? { type: "string", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
        }
        case 85:
        case 86: {
          let i = this.parseBooleanLiteral(this.match(85));
          return s() ? { type: "boolean", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
        }
        default:
          return { type: "invalid", loc: e };
      }
    }
    flowEnumMemberRaw() {
      let e = this.state.startLoc, s = this.parseIdentifier(true), i = this.eat(29) ? this.flowEnumMemberInit() : { type: "none", loc: e };
      return { id: s, init: i };
    }
    flowEnumCheckExplicitTypeMismatch(e, s, i) {
      let { explicitType: a } = s;
      a !== null && a !== i && this.flowEnumErrorInvalidMemberInitializer(e, s);
    }
    flowEnumMembers(e) {
      let { enumName: s, explicitType: i } = e, a = /* @__PURE__ */ new Set(), n = { booleanMembers: [], numberMembers: [], stringMembers: [], defaultedMembers: [] }, o = false;
      for (; !this.match(8); ) {
        if (this.eat(21)) {
          o = true;
          break;
        }
        let u = this.startNode(), { id: c, init: y } = this.flowEnumMemberRaw(), g = c.name;
        if (g === "")
          continue;
        /^[a-z]/.test(g) && this.raise(D.EnumInvalidMemberName, { at: c, memberName: g, suggestion: g[0].toUpperCase() + g.slice(1), enumName: s }), a.has(g) && this.raise(D.EnumDuplicateMemberName, { at: c, memberName: g, enumName: s }), a.add(g);
        let T = { enumName: s, explicitType: i, memberName: g };
        switch (u.id = c, y.type) {
          case "boolean": {
            this.flowEnumCheckExplicitTypeMismatch(y.loc, T, "boolean"), u.init = y.value, n.booleanMembers.push(this.finishNode(u, "EnumBooleanMember"));
            break;
          }
          case "number": {
            this.flowEnumCheckExplicitTypeMismatch(y.loc, T, "number"), u.init = y.value, n.numberMembers.push(this.finishNode(u, "EnumNumberMember"));
            break;
          }
          case "string": {
            this.flowEnumCheckExplicitTypeMismatch(y.loc, T, "string"), u.init = y.value, n.stringMembers.push(this.finishNode(u, "EnumStringMember"));
            break;
          }
          case "invalid":
            throw this.flowEnumErrorInvalidMemberInitializer(y.loc, T);
          case "none":
            switch (i) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(y.loc, T);
                break;
              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(y.loc, T);
                break;
              default:
                n.defaultedMembers.push(this.finishNode(u, "EnumDefaultedMember"));
            }
        }
        this.match(8) || this.expect(12);
      }
      return { members: n, hasUnknownMembers: o };
    }
    flowEnumStringMembers(e, s, i) {
      let { enumName: a } = i;
      if (e.length === 0)
        return s;
      if (s.length === 0)
        return e;
      if (s.length > e.length) {
        for (let n of e)
          this.flowEnumErrorStringMemberInconsistentlyInitailized(n, { enumName: a });
        return s;
      } else {
        for (let n of s)
          this.flowEnumErrorStringMemberInconsistentlyInitailized(n, { enumName: a });
        return e;
      }
    }
    flowEnumParseExplicitType(e) {
      let { enumName: s } = e;
      if (!this.eatContextual(101))
        return null;
      if (!R(this.state.type))
        throw this.raise(D.EnumInvalidExplicitTypeUnknownSupplied, { at: this.state.startLoc, enumName: s });
      let { value: i } = this.state;
      return this.next(), i !== "boolean" && i !== "number" && i !== "string" && i !== "symbol" && this.raise(D.EnumInvalidExplicitType, { at: this.state.startLoc, enumName: s, invalidEnumType: i }), i;
    }
    flowEnumBody(e, s) {
      let i = s.name, a = s.loc.start, n = this.flowEnumParseExplicitType({ enumName: i });
      this.expect(5);
      let { members: o, hasUnknownMembers: u } = this.flowEnumMembers({ enumName: i, explicitType: n });
      switch (e.hasUnknownMembers = u, n) {
        case "boolean":
          return e.explicitType = true, e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
        case "number":
          return e.explicitType = true, e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
        case "string":
          return e.explicitType = true, e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, { enumName: i }), this.expect(8), this.finishNode(e, "EnumStringBody");
        case "symbol":
          return e.members = o.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
        default: {
          let c = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));
          e.explicitType = false;
          let y = o.booleanMembers.length, g = o.numberMembers.length, T = o.stringMembers.length, C = o.defaultedMembers.length;
          if (!y && !g && !T && !C)
            return c();
          if (!y && !g)
            return e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, { enumName: i }), this.expect(8), this.finishNode(e, "EnumStringBody");
          if (!g && !T && y >= C) {
            for (let j of o.defaultedMembers)
              this.flowEnumErrorBooleanMemberNotInitialized(j.loc.start, { enumName: i, memberName: j.id.name });
            return e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
          } else if (!y && !T && g >= C) {
            for (let j of o.defaultedMembers)
              this.flowEnumErrorNumberMemberNotInitialized(j.loc.start, { enumName: i, memberName: j.id.name });
            return e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
          } else
            return this.raise(D.EnumInconsistentMemberValues, { at: a, enumName: i }), c();
        }
      }
    }
    flowParseEnumDeclaration(e) {
      let s = this.parseIdentifier();
      return e.id = s, e.body = this.flowEnumBody(this.startNode(), s), this.finishNode(e, "EnumDeclaration");
    }
    isLookaheadToken_lt() {
      let e = this.nextTokenStart();
      if (this.input.charCodeAt(e) === 60) {
        let s = this.input.charCodeAt(e + 1);
        return s !== 60 && s !== 61;
      }
      return false;
    }
    maybeUnwrapTypeCastExpression(e) {
      return e.type === "TypeCastExpression" ? e.expression : e;
    }
  }, Ul = { __proto__: null, quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, Fe = ge`jsx`({ AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.", MissingClosingTagElement: (t) => {
    let { openingTagName: r } = t;
    return `Expected corresponding JSX closing tag for <${r}>.`;
  }, MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.", UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?", UnexpectedToken: (t) => {
    let { unexpected: r, HTMLEntity: e } = t;
    return `Unexpected token \`${r}\`. Did you mean \`${e}\` or \`{'${r}'}\`?`;
  }, UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.", UnterminatedJsxContent: "Unterminated JSX contents.", UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?" });
  function we(t) {
    return t ? t.type === "JSXOpeningFragment" || t.type === "JSXClosingFragment" : false;
  }
  function Ke(t) {
    if (t.type === "JSXIdentifier")
      return t.name;
    if (t.type === "JSXNamespacedName")
      return t.namespace.name + ":" + t.name.name;
    if (t.type === "JSXMemberExpression")
      return Ke(t.object) + "." + Ke(t.property);
    throw new Error("Node had unexpected type: " + t.type);
  }
  var $l = (t) => class extends t {
    jsxReadToken() {
      let e = "", s = this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length)
          throw this.raise(Fe.UnterminatedJsxContent, { at: this.state.startLoc });
        let i = this.input.charCodeAt(this.state.pos);
        switch (i) {
          case 60:
          case 123:
            if (this.state.pos === this.state.start) {
              i === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(140)) : super.getTokenFromCode(i);
              return;
            }
            e += this.input.slice(s, this.state.pos), this.finishToken(139, e);
            return;
          case 38:
            e += this.input.slice(s, this.state.pos), e += this.jsxReadEntity(), s = this.state.pos;
            break;
          case 62:
          case 125:
          default:
            Ze(i) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(true), s = this.state.pos) : ++this.state.pos;
        }
      }
    }
    jsxReadNewLine(e) {
      let s = this.input.charCodeAt(this.state.pos), i;
      return ++this.state.pos, s === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, i = e ? `
` : `\r
`) : i = String.fromCharCode(s), ++this.state.curLine, this.state.lineStart = this.state.pos, i;
    }
    jsxReadString(e) {
      let s = "", i = ++this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length)
          throw this.raise(p.UnterminatedString, { at: this.state.startLoc });
        let a = this.input.charCodeAt(this.state.pos);
        if (a === e)
          break;
        a === 38 ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadEntity(), i = this.state.pos) : Ze(a) ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadNewLine(false), i = this.state.pos) : ++this.state.pos;
      }
      s += this.input.slice(i, this.state.pos++), this.finishToken(131, s);
    }
    jsxReadEntity() {
      let e = ++this.state.pos;
      if (this.codePointAtPos(this.state.pos) === 35) {
        ++this.state.pos;
        let s = 10;
        this.codePointAtPos(this.state.pos) === 120 && (s = 16, ++this.state.pos);
        let i = this.readInt(s, void 0, false, "bail");
        if (i !== null && this.codePointAtPos(this.state.pos) === 59)
          return ++this.state.pos, String.fromCodePoint(i);
      } else {
        let s = 0, i = false;
        for (; s++ < 10 && this.state.pos < this.length && !(i = this.codePointAtPos(this.state.pos) == 59); )
          ++this.state.pos;
        if (i) {
          let a = this.input.slice(e, this.state.pos), n = Ul[a];
          if (++this.state.pos, n)
            return n;
        }
      }
      return this.state.pos = e, "&";
    }
    jsxReadWord() {
      let e, s = this.state.pos;
      do
        e = this.input.charCodeAt(++this.state.pos);
      while (je(e) || e === 45);
      this.finishToken(138, this.input.slice(s, this.state.pos));
    }
    jsxParseIdentifier() {
      let e = this.startNode();
      return this.match(138) ? e.name = this.state.value : Ee(this.state.type) ? e.name = Y(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
    }
    jsxParseNamespacedName() {
      let e = this.state.startLoc, s = this.jsxParseIdentifier();
      if (!this.eat(14))
        return s;
      let i = this.startNodeAt(e);
      return i.namespace = s, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName");
    }
    jsxParseElementName() {
      let e = this.state.startLoc, s = this.jsxParseNamespacedName();
      if (s.type === "JSXNamespacedName")
        return s;
      for (; this.eat(16); ) {
        let i = this.startNodeAt(e);
        i.object = s, i.property = this.jsxParseIdentifier(), s = this.finishNode(i, "JSXMemberExpression");
      }
      return s;
    }
    jsxParseAttributeValue() {
      let e;
      switch (this.state.type) {
        case 5:
          return e = this.startNode(), this.setContext(x.brace), this.next(), e = this.jsxParseExpressionContainer(e, x.j_oTag), e.expression.type === "JSXEmptyExpression" && this.raise(Fe.AttributeIsEmpty, { at: e }), e;
        case 140:
        case 131:
          return this.parseExprAtom();
        default:
          throw this.raise(Fe.UnsupportedJsxValue, { at: this.state.startLoc });
      }
    }
    jsxParseEmptyExpression() {
      let e = this.startNodeAt(this.state.lastTokEndLoc);
      return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc);
    }
    jsxParseSpreadChild(e) {
      return this.next(), e.expression = this.parseExpression(), this.setContext(x.j_expr), this.state.canStartJSXElement = true, this.expect(8), this.finishNode(e, "JSXSpreadChild");
    }
    jsxParseExpressionContainer(e, s) {
      if (this.match(8))
        e.expression = this.jsxParseEmptyExpression();
      else {
        let i = this.parseExpression();
        e.expression = i;
      }
      return this.setContext(s), this.state.canStartJSXElement = true, this.expect(8), this.finishNode(e, "JSXExpressionContainer");
    }
    jsxParseAttribute() {
      let e = this.startNode();
      return this.match(5) ? (this.setContext(x.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext(x.j_oTag), this.state.canStartJSXElement = true, this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
    }
    jsxParseOpeningElementAt(e) {
      let s = this.startNodeAt(e);
      return this.eat(141) ? this.finishNode(s, "JSXOpeningFragment") : (s.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(s));
    }
    jsxParseOpeningElementAfterName(e) {
      let s = [];
      for (; !this.match(56) && !this.match(141); )
        s.push(this.jsxParseAttribute());
      return e.attributes = s, e.selfClosing = this.eat(56), this.expect(141), this.finishNode(e, "JSXOpeningElement");
    }
    jsxParseClosingElementAt(e) {
      let s = this.startNodeAt(e);
      return this.eat(141) ? this.finishNode(s, "JSXClosingFragment") : (s.name = this.jsxParseElementName(), this.expect(141), this.finishNode(s, "JSXClosingElement"));
    }
    jsxParseElementAt(e) {
      let s = this.startNodeAt(e), i = [], a = this.jsxParseOpeningElementAt(e), n = null;
      if (!a.selfClosing) {
        e:
          for (; ; )
            switch (this.state.type) {
              case 140:
                if (e = this.state.startLoc, this.next(), this.eat(56)) {
                  n = this.jsxParseClosingElementAt(e);
                  break e;
                }
                i.push(this.jsxParseElementAt(e));
                break;
              case 139:
                i.push(this.parseExprAtom());
                break;
              case 5: {
                let o = this.startNode();
                this.setContext(x.brace), this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(o)) : i.push(this.jsxParseExpressionContainer(o, x.j_expr));
                break;
              }
              default:
                this.unexpected();
            }
        we(a) && !we(n) && n !== null ? this.raise(Fe.MissingClosingTagFragment, { at: n }) : !we(a) && we(n) ? this.raise(Fe.MissingClosingTagElement, { at: n, openingTagName: Ke(a.name) }) : !we(a) && !we(n) && Ke(n.name) !== Ke(a.name) && this.raise(Fe.MissingClosingTagElement, { at: n, openingTagName: Ke(a.name) });
      }
      if (we(a) ? (s.openingFragment = a, s.closingFragment = n) : (s.openingElement = a, s.closingElement = n), s.children = i, this.match(47))
        throw this.raise(Fe.UnwrappedAdjacentJSXElements, { at: this.state.startLoc });
      return we(a) ? this.finishNode(s, "JSXFragment") : this.finishNode(s, "JSXElement");
    }
    jsxParseElement() {
      let e = this.state.startLoc;
      return this.next(), this.jsxParseElementAt(e);
    }
    setContext(e) {
      let { context: s } = this.state;
      s[s.length - 1] = e;
    }
    parseExprAtom(e) {
      return this.match(139) ? this.parseLiteral(this.state.value, "JSXText") : this.match(140) ? this.jsxParseElement() : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(140), this.jsxParseElement()) : super.parseExprAtom(e);
    }
    skipSpace() {
      this.curContext().preserveSpace || super.skipSpace();
    }
    getTokenFromCode(e) {
      let s = this.curContext();
      if (s === x.j_expr) {
        this.jsxReadToken();
        return;
      }
      if (s === x.j_oTag || s === x.j_cTag) {
        if (Pe(e)) {
          this.jsxReadWord();
          return;
        }
        if (e === 62) {
          ++this.state.pos, this.finishToken(141);
          return;
        }
        if ((e === 34 || e === 39) && s === x.j_oTag) {
          this.jsxReadString(e);
          return;
        }
      }
      if (e === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
        ++this.state.pos, this.finishToken(140);
        return;
      }
      super.getTokenFromCode(e);
    }
    updateContext(e) {
      let { context: s, type: i } = this.state;
      if (i === 56 && e === 140)
        s.splice(-2, 2, x.j_cTag), this.state.canStartJSXElement = false;
      else if (i === 140)
        s.push(x.j_oTag);
      else if (i === 141) {
        let a = s[s.length - 1];
        a === x.j_oTag && e === 56 || a === x.j_cTag ? (s.pop(), this.state.canStartJSXElement = s[s.length - 1] === x.j_expr) : (this.setContext(x.j_expr), this.state.canStartJSXElement = true);
      } else
        this.state.canStartJSXElement = H(i);
    }
  }, Hl = class extends hs {
    constructor() {
      super(...arguments), this.types = /* @__PURE__ */ new Set(), this.enums = /* @__PURE__ */ new Set(), this.constEnums = /* @__PURE__ */ new Set(), this.classes = /* @__PURE__ */ new Set(), this.exportOnlyBindings = /* @__PURE__ */ new Set();
    }
  }, zl = class extends us {
    constructor() {
      super(...arguments), this.importsStack = [];
    }
    createScope(t) {
      return this.importsStack.push(/* @__PURE__ */ new Set()), new Hl(t);
    }
    enter(t) {
      t == $e && this.importsStack.push(/* @__PURE__ */ new Set()), super.enter(t);
    }
    exit() {
      let t = super.exit();
      return t == $e && this.importsStack.pop(), t;
    }
    hasImport(t, r) {
      let e = this.importsStack.length;
      if (this.importsStack[e - 1].has(t))
        return true;
      if (!r && e > 1) {
        for (let s = 0; s < e - 1; s++)
          if (this.importsStack[s].has(t))
            return true;
      }
      return false;
    }
    declareName(t, r, e) {
      if (r & Xe) {
        this.hasImport(t, true) && this.parser.raise(p.VarRedeclaration, { at: e, identifierName: t }), this.importsStack[this.importsStack.length - 1].add(t);
        return;
      }
      let s = this.currentScope();
      if (r & rs) {
        this.maybeExportDefined(s, t), s.exportOnlyBindings.add(t);
        return;
      }
      super.declareName(t, r, e), r & ke && (r & me || (this.checkRedeclarationInScope(s, t, r, e), this.maybeExportDefined(s, t)), s.types.add(t)), r & ts && s.enums.add(t), r & ss && s.constEnums.add(t), r & gt && s.classes.add(t);
    }
    isRedeclaredInScope(t, r, e) {
      if (t.enums.has(r)) {
        if (e & ts) {
          let s = !!(e & ss), i = t.constEnums.has(r);
          return s !== i;
        }
        return true;
      }
      return e & gt && t.classes.has(r) ? t.lexical.has(r) ? !!(e & me) : false : e & ke && t.types.has(r) ? true : super.isRedeclaredInScope(t, r, e);
    }
    checkLocalExport(t) {
      let { name: r } = t;
      if (this.hasImport(r))
        return;
      let e = this.scopeStack.length;
      for (let s = e - 1; s >= 0; s--) {
        let i = this.scopeStack[s];
        if (i.types.has(r) || i.exportOnlyBindings.has(r))
          return;
      }
      super.checkLocalExport(t);
    }
  }, Vl = (t, r) => Object.hasOwnProperty.call(t, r) && t[r], Kr = (t) => t.type === "ParenthesizedExpression" ? Kr(t.expression) : t, Kl = class extends Ol {
    toAssignable(t) {
      let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var e, s;
      let i;
      switch ((t.type === "ParenthesizedExpression" || (e = t.extra) != null && e.parenthesized) && (i = Kr(t), r ? i.type === "Identifier" ? this.expressionScope.recordArrowParameterBindingError(p.InvalidParenthesizedAssignment, { at: t }) : i.type !== "MemberExpression" && this.raise(p.InvalidParenthesizedAssignment, { at: t }) : this.raise(p.InvalidParenthesizedAssignment, { at: t })), t.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;
        case "ObjectExpression":
          t.type = "ObjectPattern";
          for (let n = 0, o = t.properties.length, u = o - 1; n < o; n++) {
            var a;
            let c = t.properties[n], y = n === u;
            this.toAssignableObjectExpressionProp(c, y, r), y && c.type === "RestElement" && (a = t.extra) != null && a.trailingCommaLoc && this.raise(p.RestTrailingComma, { at: t.extra.trailingCommaLoc });
          }
          break;
        case "ObjectProperty": {
          let { key: n, value: o } = t;
          this.isPrivateName(n) && this.classScope.usePrivateName(this.getPrivateNameSV(n), n.loc.start), this.toAssignable(o, r);
          break;
        }
        case "SpreadElement":
          throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
        case "ArrayExpression":
          t.type = "ArrayPattern", this.toAssignableList(t.elements, (s = t.extra) == null ? void 0 : s.trailingCommaLoc, r);
          break;
        case "AssignmentExpression":
          t.operator !== "=" && this.raise(p.MissingEqInAssignment, { at: t.left.loc.end }), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, r);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(i, r);
          break;
      }
    }
    toAssignableObjectExpressionProp(t, r, e) {
      if (t.type === "ObjectMethod")
        this.raise(t.kind === "get" || t.kind === "set" ? p.PatternHasAccessor : p.PatternHasMethod, { at: t.key });
      else if (t.type === "SpreadElement") {
        t.type = "RestElement";
        let s = t.argument;
        this.checkToRestConversion(s, false), this.toAssignable(s, e), r || this.raise(p.RestTrailingComma, { at: t });
      } else
        this.toAssignable(t, e);
    }
    toAssignableList(t, r, e) {
      let s = t.length - 1;
      for (let i = 0; i <= s; i++) {
        let a = t[i];
        if (a) {
          if (a.type === "SpreadElement") {
            a.type = "RestElement";
            let n = a.argument;
            this.checkToRestConversion(n, true), this.toAssignable(n, e);
          } else
            this.toAssignable(a, e);
          a.type === "RestElement" && (i < s ? this.raise(p.RestTrailingComma, { at: a }) : r && this.raise(p.RestTrailingComma, { at: r }));
        }
      }
    }
    isAssignable(t, r) {
      switch (t.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          return true;
        case "ObjectExpression": {
          let e = t.properties.length - 1;
          return t.properties.every((s, i) => s.type !== "ObjectMethod" && (i === e || s.type !== "SpreadElement") && this.isAssignable(s));
        }
        case "ObjectProperty":
          return this.isAssignable(t.value);
        case "SpreadElement":
          return this.isAssignable(t.argument);
        case "ArrayExpression":
          return t.elements.every((e) => e === null || this.isAssignable(e));
        case "AssignmentExpression":
          return t.operator === "=";
        case "ParenthesizedExpression":
          return this.isAssignable(t.expression);
        case "MemberExpression":
        case "OptionalMemberExpression":
          return !r;
        default:
          return false;
      }
    }
    toReferencedList(t, r) {
      return t;
    }
    toReferencedListDeep(t, r) {
      this.toReferencedList(t, r);
      for (let e of t)
        (e == null ? void 0 : e.type) === "ArrayExpression" && this.toReferencedListDeep(e.elements);
    }
    parseSpread(t) {
      let r = this.startNode();
      return this.next(), r.argument = this.parseMaybeAssignAllowIn(t, void 0), this.finishNode(r, "SpreadElement");
    }
    parseRestBinding() {
      let t = this.startNode();
      return this.next(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
    }
    parseBindingAtom() {
      switch (this.state.type) {
        case 0: {
          let t = this.startNode();
          return this.next(), t.elements = this.parseBindingList(3, 93, 1), this.finishNode(t, "ArrayPattern");
        }
        case 5:
          return this.parseObjectLike(8, true);
      }
      return this.parseIdentifier();
    }
    parseBindingList(t, r, e) {
      let s = e & 1, i = [], a = true;
      for (; !this.eat(t); )
        if (a ? a = false : this.expect(12), s && this.match(12))
          i.push(null);
        else {
          if (this.eat(t))
            break;
          if (this.match(21)) {
            if (i.push(this.parseAssignableListItemTypes(this.parseRestBinding(), e)), !this.checkCommaAfterRest(r)) {
              this.expect(t);
              break;
            }
          } else {
            let n = [];
            for (this.match(26) && this.hasPlugin("decorators") && this.raise(p.UnsupportedParameterDecorator, { at: this.state.startLoc }); this.match(26); )
              n.push(this.parseDecorator());
            i.push(this.parseAssignableListItem(e, n));
          }
        }
      return i;
    }
    parseBindingRestProperty(t) {
      return this.next(), t.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t, "RestElement");
    }
    parseBindingProperty() {
      let t = this.startNode(), { type: r, startLoc: e } = this.state;
      return r === 21 ? this.parseBindingRestProperty(t) : (r === 136 ? (this.expectPlugin("destructuringPrivate", e), this.classScope.usePrivateName(this.state.value, e), t.key = this.parsePrivateName()) : this.parsePropertyName(t), t.method = false, this.parseObjPropValue(t, e, false, false, true, false));
    }
    parseAssignableListItem(t, r) {
      let e = this.parseMaybeDefault();
      this.parseAssignableListItemTypes(e, t);
      let s = this.parseMaybeDefault(e.loc.start, e);
      return r.length && (e.decorators = r), s;
    }
    parseAssignableListItemTypes(t, r) {
      return t;
    }
    parseMaybeDefault(t, r) {
      var e, s;
      if ((e = t) != null || (t = this.state.startLoc), r = (s = r) != null ? s : this.parseBindingAtom(), !this.eat(29))
        return r;
      let i = this.startNodeAt(t);
      return i.left = r, i.right = this.parseMaybeAssignAllowIn(), this.finishNode(i, "AssignmentPattern");
    }
    isValidLVal(t, r, e) {
      return Vl({ AssignmentPattern: "left", RestElement: "argument", ObjectProperty: "value", ParenthesizedExpression: "expression", ArrayPattern: "elements", ObjectPattern: "properties" }, t);
    }
    checkLVal(t, r) {
      let { in: e, binding: s = be, checkClashes: i = false, strictModeChanged: a = false, hasParenthesizedAncestor: n = false } = r;
      var o;
      let u = t.type;
      if (this.isObjectMethod(t))
        return;
      if (u === "MemberExpression") {
        s !== be && this.raise(p.InvalidPropertyBindingPattern, { at: t });
        return;
      }
      if (u === "Identifier") {
        this.checkIdentifier(t, s, a);
        let { name: C } = t;
        i && (i.has(C) ? this.raise(p.ParamDupe, { at: t }) : i.add(C));
        return;
      }
      let c = this.isValidLVal(u, !(n || (o = t.extra) != null && o.parenthesized) && e.type === "AssignmentExpression", s);
      if (c === true)
        return;
      if (c === false) {
        let C = s === be ? p.InvalidLhs : p.InvalidLhsBinding;
        this.raise(C, { at: t, ancestor: e });
        return;
      }
      let [y, g] = Array.isArray(c) ? c : [c, u === "ParenthesizedExpression"], T = u === "ArrayPattern" || u === "ObjectPattern" || u === "ParenthesizedExpression" ? { type: u } : e;
      for (let C of [].concat(t[y]))
        C && this.checkLVal(C, { in: T, binding: s, checkClashes: i, strictModeChanged: a, hasParenthesizedAncestor: g });
    }
    checkIdentifier(t, r) {
      let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      this.state.strict && (e ? vr(t.name, this.inModule) : Tr(t.name)) && (r === be ? this.raise(p.StrictEvalArguments, { at: t, referenceName: t.name }) : this.raise(p.StrictEvalArgumentsBinding, { at: t, bindingName: t.name })), r & Pt && t.name === "let" && this.raise(p.LetInLexicalBinding, { at: t }), r & be || this.declareNameFromIdentifier(t, r);
    }
    declareNameFromIdentifier(t, r) {
      this.scope.declareName(t.name, r, t.loc.start);
    }
    checkToRestConversion(t, r) {
      switch (t.type) {
        case "ParenthesizedExpression":
          this.checkToRestConversion(t.expression, r);
          break;
        case "Identifier":
        case "MemberExpression":
          break;
        case "ArrayExpression":
        case "ObjectExpression":
          if (r)
            break;
        default:
          this.raise(p.InvalidRestAssignmentPattern, { at: t });
      }
    }
    checkCommaAfterRest(t) {
      return this.match(12) ? (this.raise(this.lookaheadCharCode() === t ? p.RestTrailingComma : p.ElementAfterRest, { at: this.state.startLoc }), true) : false;
    }
  }, Wl = (t, r) => Object.hasOwnProperty.call(t, r) && t[r];
  function Gl(t) {
    if (t == null)
      throw new Error(`Unexpected ${t} value.`);
    return t;
  }
  function Wr(t) {
    if (!t)
      throw new Error("Assert fail");
  }
  var w = ge`typescript`({ AbstractMethodHasImplementation: (t) => {
    let { methodName: r } = t;
    return `Method '${r}' cannot have an implementation because it is marked abstract.`;
  }, AbstractPropertyHasInitializer: (t) => {
    let { propertyName: r } = t;
    return `Property '${r}' cannot have an initializer because it is marked abstract.`;
  }, AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.", AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.", AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.", ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.", ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.", ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.", ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.", DeclareAccessor: (t) => {
    let { kind: r } = t;
    return `'declare' is not allowed in ${r}ters.`;
  }, DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.", DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.", DuplicateAccessibilityModifier: (t) => {
    let { modifier: r } = t;
    return "Accessibility modifier already seen.";
  }, DuplicateModifier: (t) => {
    let { modifier: r } = t;
    return `Duplicate modifier: '${r}'.`;
  }, EmptyHeritageClauseType: (t) => {
    let { token: r } = t;
    return `'${r}' list cannot be empty.`;
  }, EmptyTypeArguments: "Type argument list cannot be empty.", EmptyTypeParameters: "Type parameter list cannot be empty.", ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.", ImportAliasHasImportType: "An import alias can not use 'import type'.", ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier", IncompatibleModifiers: (t) => {
    let { modifiers: r } = t;
    return `'${r[0]}' modifier cannot be used with '${r[1]}' modifier.`;
  }, IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.", IndexSignatureHasAccessibility: (t) => {
    let { modifier: r } = t;
    return `Index signatures cannot have an accessibility modifier ('${r}').`;
  }, IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.", IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.", IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.", InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.", InvalidModifierOnTypeMember: (t) => {
    let { modifier: r } = t;
    return `'${r}' modifier cannot appear on a type member.`;
  }, InvalidModifierOnTypeParameter: (t) => {
    let { modifier: r } = t;
    return `'${r}' modifier cannot appear on a type parameter.`;
  }, InvalidModifierOnTypeParameterPositions: (t) => {
    let { modifier: r } = t;
    return `'${r}' modifier can only appear on a type parameter of a class, interface or type alias.`;
  }, InvalidModifiersOrder: (t) => {
    let { orderedModifiers: r } = t;
    return `'${r[0]}' modifier must precede '${r[1]}' modifier.`;
  }, InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.", InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.", MissingInterfaceName: "'interface' declarations must be followed by an identifier.", MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.", NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.", NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.", OptionalTypeBeforeRequired: "A required element cannot follow an optional element.", OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.", PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.", PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.", PrivateElementHasAccessibility: (t) => {
    let { modifier: r } = t;
    return `Private elements cannot have an accessibility modifier ('${r}').`;
  }, ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.", ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.", ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.", SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.", SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.", SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.", SingleTypeParameterWithoutTrailingComma: (t) => {
    let { typeParameterName: r } = t;
    return `Single type parameter ${r} should have a trailing comma. Example usage: <${r},>.`;
  }, StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.", TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).", TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.", TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.", TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.", UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.", UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.", UnexpectedTypeAnnotation: "Did not expect a type annotation here.", UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.", UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.", UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.", UnsupportedSignatureParameterKind: (t) => {
    let { type: r } = t;
    return `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${r}.`;
  } });
  function Jl(t) {
    switch (t) {
      case "any":
        return "TSAnyKeyword";
      case "boolean":
        return "TSBooleanKeyword";
      case "bigint":
        return "TSBigIntKeyword";
      case "never":
        return "TSNeverKeyword";
      case "number":
        return "TSNumberKeyword";
      case "object":
        return "TSObjectKeyword";
      case "string":
        return "TSStringKeyword";
      case "symbol":
        return "TSSymbolKeyword";
      case "undefined":
        return "TSUndefinedKeyword";
      case "unknown":
        return "TSUnknownKeyword";
      default:
        return;
    }
  }
  function Gr(t) {
    return t === "private" || t === "public" || t === "protected";
  }
  function Xl(t) {
    return t === "in" || t === "out";
  }
  var Yl = (t) => class extends t {
    constructor() {
      super(...arguments), this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, { allowedModifiers: ["in", "out"], disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: w.InvalidModifierOnTypeParameter }), this.tsParseConstModifier = this.tsParseModifiers.bind(this, { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: w.InvalidModifierOnTypeParameterPositions }), this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, { allowedModifiers: ["in", "out", "const"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: w.InvalidModifierOnTypeParameter });
    }
    getScopeHandler() {
      return zl;
    }
    tsIsIdentifier() {
      return R(this.state.type);
    }
    tsTokenCanFollowModifier() {
      return (this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(136) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
    }
    tsNextTokenCanFollowModifier() {
      return this.next(), this.tsTokenCanFollowModifier();
    }
    tsParseModifier(e, s) {
      if (!R(this.state.type) && this.state.type !== 58 && this.state.type !== 75)
        return;
      let i = this.state.value;
      if (e.indexOf(i) !== -1) {
        if (s && this.tsIsStartOfStaticBlocks())
          return;
        if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
          return i;
      }
    }
    tsParseModifiers(e, s) {
      let { allowedModifiers: i, disallowedModifiers: a, stopOnStartOfClassStaticBlock: n, errorTemplate: o = w.InvalidModifierOnTypeMember } = e, u = (y, g, T, C) => {
        g === T && s[C] && this.raise(w.InvalidModifiersOrder, { at: y, orderedModifiers: [T, C] });
      }, c = (y, g, T, C) => {
        (s[T] && g === C || s[C] && g === T) && this.raise(w.IncompatibleModifiers, { at: y, modifiers: [T, C] });
      };
      for (; ; ) {
        let { startLoc: y } = this.state, g = this.tsParseModifier(i.concat(a != null ? a : []), n);
        if (!g)
          break;
        Gr(g) ? s.accessibility ? this.raise(w.DuplicateAccessibilityModifier, { at: y, modifier: g }) : (u(y, g, g, "override"), u(y, g, g, "static"), u(y, g, g, "readonly"), s.accessibility = g) : Xl(g) ? (s[g] && this.raise(w.DuplicateModifier, { at: y, modifier: g }), s[g] = true, u(y, g, "in", "out")) : (Object.hasOwnProperty.call(s, g) ? this.raise(w.DuplicateModifier, { at: y, modifier: g }) : (u(y, g, "static", "readonly"), u(y, g, "static", "override"), u(y, g, "override", "readonly"), u(y, g, "abstract", "override"), c(y, g, "declare", "override"), c(y, g, "static", "abstract")), s[g] = true), a != null && a.includes(g) && this.raise(o, { at: y, modifier: g });
      }
    }
    tsIsListTerminator(e) {
      switch (e) {
        case "EnumMembers":
        case "TypeMembers":
          return this.match(8);
        case "HeritageClauseElement":
          return this.match(5);
        case "TupleElementTypes":
          return this.match(3);
        case "TypeParametersOrArguments":
          return this.match(48);
      }
    }
    tsParseList(e, s) {
      let i = [];
      for (; !this.tsIsListTerminator(e); )
        i.push(s());
      return i;
    }
    tsParseDelimitedList(e, s, i) {
      return Gl(this.tsParseDelimitedListWorker(e, s, true, i));
    }
    tsParseDelimitedListWorker(e, s, i, a) {
      let n = [], o = -1;
      for (; !this.tsIsListTerminator(e); ) {
        o = -1;
        let u = s();
        if (u == null)
          return;
        if (n.push(u), this.eat(12)) {
          o = this.state.lastTokStart;
          continue;
        }
        if (this.tsIsListTerminator(e))
          break;
        i && this.expect(12);
        return;
      }
      return a && (a.value = o), n;
    }
    tsParseBracketedList(e, s, i, a, n) {
      a || (i ? this.expect(0) : this.expect(47));
      let o = this.tsParseDelimitedList(e, s, n);
      return i ? this.expect(3) : this.expect(48), o;
    }
    tsParseImportType() {
      let e = this.startNode();
      return this.expect(83), this.expect(10), this.match(131) || this.raise(w.UnsupportedImportTypeArgument, { at: this.state.startLoc }), e.argument = super.parseExprAtom(), this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName()), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType");
    }
    tsParseEntityName() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, s = this.parseIdentifier(e);
      for (; this.eat(16); ) {
        let i = this.startNodeAtNode(s);
        i.left = s, i.right = this.parseIdentifier(e), s = this.finishNode(i, "TSQualifiedName");
      }
      return s;
    }
    tsParseTypeReference() {
      let e = this.startNode();
      return e.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference");
    }
    tsParseThisTypePredicate(e) {
      this.next();
      let s = this.startNodeAtNode(e);
      return s.parameterName = e, s.typeAnnotation = this.tsParseTypeAnnotation(false), s.asserts = false, this.finishNode(s, "TSTypePredicate");
    }
    tsParseThisTypeNode() {
      let e = this.startNode();
      return this.next(), this.finishNode(e, "TSThisType");
    }
    tsParseTypeQuery() {
      let e = this.startNode();
      return this.expect(87), this.match(83) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeQuery");
    }
    tsParseTypeParameter(e) {
      let s = this.startNode();
      return e(s), s.name = this.tsParseTypeParameterName(), s.constraint = this.tsEatThenParseType(81), s.default = this.tsEatThenParseType(29), this.finishNode(s, "TSTypeParameter");
    }
    tsTryParseTypeParameters(e) {
      if (this.match(47))
        return this.tsParseTypeParameters(e);
    }
    tsParseTypeParameters(e) {
      let s = this.startNode();
      this.match(47) || this.match(140) ? this.next() : this.unexpected();
      let i = { value: -1 };
      return s.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), false, true, i), s.params.length === 0 && this.raise(w.EmptyTypeParameters, { at: s }), i.value !== -1 && this.addExtra(s, "trailingComma", i.value), this.finishNode(s, "TSTypeParameterDeclaration");
    }
    tsFillSignature(e, s) {
      let i = e === 19, a = "parameters", n = "typeAnnotation";
      s.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier), this.expect(10), s[a] = this.tsParseBindingListForSignature(), i ? s[n] = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (s[n] = this.tsParseTypeOrTypePredicateAnnotation(e));
    }
    tsParseBindingListForSignature() {
      return super.parseBindingList(11, 41, 2).map((e) => (e.type !== "Identifier" && e.type !== "RestElement" && e.type !== "ObjectPattern" && e.type !== "ArrayPattern" && this.raise(w.UnsupportedSignatureParameterKind, { at: e, type: e.type }), e));
    }
    tsParseTypeMemberSemicolon() {
      !this.eat(12) && !this.isLineTerminator() && this.expect(13);
    }
    tsParseSignatureMember(e, s) {
      return this.tsFillSignature(14, s), this.tsParseTypeMemberSemicolon(), this.finishNode(s, e);
    }
    tsIsUnambiguouslyIndexSignature() {
      return this.next(), R(this.state.type) ? (this.next(), this.match(14)) : false;
    }
    tsTryParseIndexSignature(e) {
      if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))
        return;
      this.expect(0);
      let s = this.parseIdentifier();
      s.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(s), this.expect(3), e.parameters = [s];
      let i = this.tsTryParseTypeAnnotation();
      return i && (e.typeAnnotation = i), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature");
    }
    tsParsePropertyOrMethodSignature(e, s) {
      this.eat(17) && (e.optional = true);
      let i = e;
      if (this.match(10) || this.match(47)) {
        s && this.raise(w.ReadonlyForMethodSignature, { at: e });
        let a = i;
        a.kind && this.match(47) && this.raise(w.AccesorCannotHaveTypeParameters, { at: this.state.curPosition() }), this.tsFillSignature(14, a), this.tsParseTypeMemberSemicolon();
        let n = "parameters", o = "typeAnnotation";
        if (a.kind === "get")
          a[n].length > 0 && (this.raise(p.BadGetterArity, { at: this.state.curPosition() }), this.isThisParam(a[n][0]) && this.raise(w.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }));
        else if (a.kind === "set") {
          if (a[n].length !== 1)
            this.raise(p.BadSetterArity, { at: this.state.curPosition() });
          else {
            let u = a[n][0];
            this.isThisParam(u) && this.raise(w.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }), u.type === "Identifier" && u.optional && this.raise(w.SetAccesorCannotHaveOptionalParameter, { at: this.state.curPosition() }), u.type === "RestElement" && this.raise(w.SetAccesorCannotHaveRestParameter, { at: this.state.curPosition() });
          }
          a[o] && this.raise(w.SetAccesorCannotHaveReturnType, { at: a[o] });
        } else
          a.kind = "method";
        return this.finishNode(a, "TSMethodSignature");
      } else {
        let a = i;
        s && (a.readonly = true);
        let n = this.tsTryParseTypeAnnotation();
        return n && (a.typeAnnotation = n), this.tsParseTypeMemberSemicolon(), this.finishNode(a, "TSPropertySignature");
      }
    }
    tsParseTypeMember() {
      let e = this.startNode();
      if (this.match(10) || this.match(47))
        return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
      if (this.match(77)) {
        let i = this.startNode();
        return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(i, "new"), this.tsParsePropertyOrMethodSignature(e, false));
      }
      this.tsParseModifiers({ allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }, e);
      let s = this.tsTryParseIndexSignature(e);
      return s || (super.parsePropertyName(e), !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.tsTokenCanFollowModifier() && (e.kind = e.key.name, super.parsePropertyName(e)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly));
    }
    tsParseTypeLiteral() {
      let e = this.startNode();
      return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral");
    }
    tsParseObjectTypeMembers() {
      this.expect(5);
      let e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
      return this.expect(8), e;
    }
    tsIsStartOfMappedType() {
      return this.next(), this.eat(53) ? this.isContextual(120) : (this.isContextual(120) && this.next(), !this.match(0) || (this.next(), !this.tsIsIdentifier()) ? false : (this.next(), this.match(58)));
    }
    tsParseMappedTypeParameter() {
      let e = this.startNode();
      return e.name = this.tsParseTypeParameterName(), e.constraint = this.tsExpectThenParseType(58), this.finishNode(e, "TSTypeParameter");
    }
    tsParseMappedType() {
      let e = this.startNode();
      return this.expect(5), this.match(53) ? (e.readonly = this.state.value, this.next(), this.expectContextual(120)) : this.eatContextual(120) && (e.readonly = true), this.expect(0), e.typeParameter = this.tsParseMappedTypeParameter(), e.nameType = this.eatContextual(93) ? this.tsParseType() : null, this.expect(3), this.match(53) ? (e.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (e.optional = true), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(e, "TSMappedType");
    }
    tsParseTupleType() {
      let e = this.startNode();
      e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
      let s = false, i = null;
      return e.elementTypes.forEach((a) => {
        var n;
        let { type: o } = a;
        s && o !== "TSRestType" && o !== "TSOptionalType" && !(o === "TSNamedTupleMember" && a.optional) && this.raise(w.OptionalTypeBeforeRequired, { at: a }), s || (s = o === "TSNamedTupleMember" && a.optional || o === "TSOptionalType");
        let u = o;
        o === "TSRestType" && (a = a.typeAnnotation, u = a.type);
        let c = u === "TSNamedTupleMember";
        (n = i) != null || (i = c), i !== c && this.raise(w.MixedLabeledAndUnlabeledElements, { at: a });
      }), this.finishNode(e, "TSTupleType");
    }
    tsParseTupleElementType() {
      let { startLoc: e } = this.state, s = this.eat(21), i, a, n, o, c = se(this.state.type) ? this.lookaheadCharCode() : null;
      if (c === 58)
        i = true, n = false, a = this.parseIdentifier(true), this.expect(14), o = this.tsParseType();
      else if (c === 63) {
        n = true;
        let y = this.state.startLoc, g = this.state.value, T = this.tsParseNonArrayType();
        this.lookaheadCharCode() === 58 ? (i = true, a = this.createIdentifier(this.startNodeAt(y), g), this.expect(17), this.expect(14), o = this.tsParseType()) : (i = false, o = T, this.expect(17));
      } else
        o = this.tsParseType(), n = this.eat(17), i = this.eat(14);
      if (i) {
        let y;
        a ? (y = this.startNodeAtNode(a), y.optional = n, y.label = a, y.elementType = o, this.eat(17) && (y.optional = true, this.raise(w.TupleOptionalAfterType, { at: this.state.lastTokStartLoc }))) : (y = this.startNodeAtNode(o), y.optional = n, this.raise(w.InvalidTupleMemberLabel, { at: o }), y.label = o, y.elementType = this.tsParseType()), o = this.finishNode(y, "TSNamedTupleMember");
      } else if (n) {
        let y = this.startNodeAtNode(o);
        y.typeAnnotation = o, o = this.finishNode(y, "TSOptionalType");
      }
      if (s) {
        let y = this.startNodeAt(e);
        y.typeAnnotation = o, o = this.finishNode(y, "TSRestType");
      }
      return o;
    }
    tsParseParenthesizedType() {
      let e = this.startNode();
      return this.expect(10), e.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(e, "TSParenthesizedType");
    }
    tsParseFunctionOrConstructorType(e, s) {
      let i = this.startNode();
      return e === "TSConstructorType" && (i.abstract = !!s, s && this.next(), this.next()), this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, i)), this.finishNode(i, e);
    }
    tsParseLiteralTypeNode() {
      let e = this.startNode();
      return e.literal = (() => {
        switch (this.state.type) {
          case 132:
          case 133:
          case 131:
          case 85:
          case 86:
            return super.parseExprAtom();
          default:
            this.unexpected();
        }
      })(), this.finishNode(e, "TSLiteralType");
    }
    tsParseTemplateLiteralType() {
      let e = this.startNode();
      return e.literal = super.parseTemplate(false), this.finishNode(e, "TSLiteralType");
    }
    parseTemplateSubstitution() {
      return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
    }
    tsParseThisTypeOrThisTypePredicate() {
      let e = this.tsParseThisTypeNode();
      return this.isContextual(114) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e;
    }
    tsParseNonArrayType() {
      switch (this.state.type) {
        case 131:
        case 132:
        case 133:
        case 85:
        case 86:
          return this.tsParseLiteralTypeNode();
        case 53:
          if (this.state.value === "-") {
            let e = this.startNode(), s = this.lookahead();
            return s.type !== 132 && s.type !== 133 && this.unexpected(), e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType");
          }
          break;
        case 78:
          return this.tsParseThisTypeOrThisTypePredicate();
        case 87:
          return this.tsParseTypeQuery();
        case 83:
          return this.tsParseImportType();
        case 5:
          return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
        case 0:
          return this.tsParseTupleType();
        case 10:
          return this.tsParseParenthesizedType();
        case 25:
        case 24:
          return this.tsParseTemplateLiteralType();
        default: {
          let { type: e } = this.state;
          if (R(e) || e === 88 || e === 84) {
            let s = e === 88 ? "TSVoidKeyword" : e === 84 ? "TSNullKeyword" : Jl(this.state.value);
            if (s !== void 0 && this.lookaheadCharCode() !== 46) {
              let i = this.startNode();
              return this.next(), this.finishNode(i, s);
            }
            return this.tsParseTypeReference();
          }
        }
      }
      this.unexpected();
    }
    tsParseArrayTypeOrHigher() {
      let e = this.tsParseNonArrayType();
      for (; !this.hasPrecedingLineBreak() && this.eat(0); )
        if (this.match(3)) {
          let s = this.startNodeAtNode(e);
          s.elementType = e, this.expect(3), e = this.finishNode(s, "TSArrayType");
        } else {
          let s = this.startNodeAtNode(e);
          s.objectType = e, s.indexType = this.tsParseType(), this.expect(3), e = this.finishNode(s, "TSIndexedAccessType");
        }
      return e;
    }
    tsParseTypeOperator() {
      let e = this.startNode(), s = this.state.value;
      return this.next(), e.operator = s, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), s === "readonly" && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator");
    }
    tsCheckTypeAnnotationForReadOnly(e) {
      switch (e.typeAnnotation.type) {
        case "TSTupleType":
        case "TSArrayType":
          return;
        default:
          this.raise(w.UnexpectedReadonly, { at: e });
      }
    }
    tsParseInferType() {
      let e = this.startNode();
      this.expectContextual(113);
      let s = this.startNode();
      return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType()), e.typeParameter = this.finishNode(s, "TSTypeParameter"), this.finishNode(e, "TSInferType");
    }
    tsParseConstraintForInferType() {
      if (this.eat(81)) {
        let e = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
        if (this.state.inDisallowConditionalTypesContext || !this.match(17))
          return e;
      }
    }
    tsParseTypeOperatorOrHigher() {
      return ut(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(113) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
    }
    tsParseUnionOrIntersectionType(e, s, i) {
      let a = this.startNode(), n = this.eat(i), o = [];
      do
        o.push(s());
      while (this.eat(i));
      return o.length === 1 && !n ? o[0] : (a.types = o, this.finishNode(a, e));
    }
    tsParseIntersectionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
    }
    tsParseUnionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
    }
    tsIsStartOfFunctionType() {
      return this.match(47) ? true : this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
    }
    tsSkipParameterStart() {
      if (R(this.state.type) || this.match(78))
        return this.next(), true;
      if (this.match(5)) {
        let { errors: e } = this.state, s = e.length;
        try {
          return this.parseObjectLike(8, true), e.length === s;
        } catch {
          return false;
        }
      }
      if (this.match(0)) {
        this.next();
        let { errors: e } = this.state, s = e.length;
        try {
          return super.parseBindingList(3, 93, 1), e.length === s;
        } catch {
          return false;
        }
      }
      return false;
    }
    tsIsUnambiguouslyStartOfFunctionType() {
      return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(), this.match(19))));
    }
    tsParseTypeOrTypePredicateAnnotation(e) {
      return this.tsInType(() => {
        let s = this.startNode();
        this.expect(e);
        let i = this.startNode(), a = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
        if (a && this.match(78)) {
          let u = this.tsParseThisTypeOrThisTypePredicate();
          return u.type === "TSThisType" ? (i.parameterName = u, i.asserts = true, i.typeAnnotation = null, u = this.finishNode(i, "TSTypePredicate")) : (this.resetStartLocationFromNode(u, i), u.asserts = true), s.typeAnnotation = u, this.finishNode(s, "TSTypeAnnotation");
        }
        let n = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
        if (!n)
          return a ? (i.parameterName = this.parseIdentifier(), i.asserts = a, i.typeAnnotation = null, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(false, s);
        let o = this.tsParseTypeAnnotation(false);
        return i.parameterName = n, i.typeAnnotation = o, i.asserts = a, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation");
      });
    }
    tsTryParseTypeOrTypePredicateAnnotation() {
      return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : void 0;
    }
    tsTryParseTypeAnnotation() {
      return this.match(14) ? this.tsParseTypeAnnotation() : void 0;
    }
    tsTryParseType() {
      return this.tsEatThenParseType(14);
    }
    tsParseTypePredicatePrefix() {
      let e = this.parseIdentifier();
      if (this.isContextual(114) && !this.hasPrecedingLineBreak())
        return this.next(), e;
    }
    tsParseTypePredicateAsserts() {
      if (this.state.type !== 107)
        return false;
      let e = this.state.containsEsc;
      return this.next(), !R(this.state.type) && !this.match(78) ? false : (e && this.raise(p.InvalidEscapedReservedWord, { at: this.state.lastTokStartLoc, reservedWord: "asserts" }), true);
    }
    tsParseTypeAnnotation() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startNode();
      return this.tsInType(() => {
        e && this.expect(14), s.typeAnnotation = this.tsParseType();
      }), this.finishNode(s, "TSTypeAnnotation");
    }
    tsParseType() {
      Wr(this.state.inType);
      let e = this.tsParseNonConditionalType();
      if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81))
        return e;
      let s = this.startNodeAtNode(e);
      return s.checkType = e, s.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType()), this.expect(17), s.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.expect(14), s.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.finishNode(s, "TSConditionalType");
    }
    isAbstractConstructorSignature() {
      return this.isContextual(122) && this.lookahead().type === 77;
    }
    tsParseNonConditionalType() {
      return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", true) : this.tsParseUnionTypeOrHigher();
    }
    tsParseTypeAssertion() {
      this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(w.ReservedTypeAssertion, { at: this.state.startLoc });
      let e = this.startNode();
      return e.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? this.tsParseTypeReference() : this.tsParseType())), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
    }
    tsParseHeritageClause(e) {
      let s = this.state.startLoc, i = this.tsParseDelimitedList("HeritageClauseElement", () => {
        let a = this.startNode();
        return a.expression = this.tsParseEntityName(), this.match(47) && (a.typeParameters = this.tsParseTypeArguments()), this.finishNode(a, "TSExpressionWithTypeArguments");
      });
      return i.length || this.raise(w.EmptyHeritageClauseType, { at: s, token: e }), i;
    }
    tsParseInterfaceDeclaration(e) {
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.hasFollowingLineBreak())
        return null;
      this.expectContextual(127), s.declare && (e.declare = true), R(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, Zo)) : (e.id = null, this.raise(w.MissingInterfaceName, { at: this.state.startLoc })), e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
      let i = this.startNode();
      return i.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(i, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration");
    }
    tsParseTypeAliasDeclaration(e) {
      return e.id = this.parseIdentifier(), this.checkIdentifier(e.id, el), e.typeAnnotation = this.tsInType(() => {
        if (e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers), this.expect(29), this.isContextual(112) && this.lookahead().type !== 16) {
          let s = this.startNode();
          return this.next(), this.finishNode(s, "TSIntrinsicKeyword");
        }
        return this.tsParseType();
      }), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration");
    }
    tsInNoContext(e) {
      let s = this.state.context;
      this.state.context = [s[0]];
      try {
        return e();
      } finally {
        this.state.context = s;
      }
    }
    tsInType(e) {
      let s = this.state.inType;
      this.state.inType = true;
      try {
        return e();
      } finally {
        this.state.inType = s;
      }
    }
    tsInDisallowConditionalTypesContext(e) {
      let s = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = true;
      try {
        return e();
      } finally {
        this.state.inDisallowConditionalTypesContext = s;
      }
    }
    tsInAllowConditionalTypesContext(e) {
      let s = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = false;
      try {
        return e();
      } finally {
        this.state.inDisallowConditionalTypesContext = s;
      }
    }
    tsEatThenParseType(e) {
      return this.match(e) ? this.tsNextThenParseType() : void 0;
    }
    tsExpectThenParseType(e) {
      return this.tsDoThenParseType(() => this.expect(e));
    }
    tsNextThenParseType() {
      return this.tsDoThenParseType(() => this.next());
    }
    tsDoThenParseType(e) {
      return this.tsInType(() => (e(), this.tsParseType()));
    }
    tsParseEnumMember() {
      let e = this.startNode();
      return e.id = this.match(131) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(true), this.eat(29) && (e.initializer = super.parseMaybeAssignAllowIn()), this.finishNode(e, "TSEnumMember");
    }
    tsParseEnumDeclaration(e) {
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return s.const && (e.const = true), s.declare && (e.declare = true), this.expectContextual(124), e.id = this.parseIdentifier(), this.checkIdentifier(e.id, e.const ? sl : Nr), this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumDeclaration");
    }
    tsParseModuleBlock() {
      let e = this.startNode();
      return this.scope.enter(qe), this.expect(5), super.parseBlockOrModuleBlockBody(e.body = [], void 0, true, 8), this.scope.exit(), this.finishNode(e, "TSModuleBlock");
    }
    tsParseModuleOrNamespaceDeclaration(e) {
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (e.id = this.parseIdentifier(), s || this.checkIdentifier(e.id, rl), this.eat(16)) {
        let i = this.startNode();
        this.tsParseModuleOrNamespaceDeclaration(i, true), e.body = i;
      } else
        this.scope.enter($e), this.prodParam.enter(ze), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
      return this.finishNode(e, "TSModuleDeclaration");
    }
    tsParseAmbientExternalModuleDeclaration(e) {
      return this.isContextual(110) ? (e.global = true, e.id = this.parseIdentifier()) : this.match(131) ? e.id = super.parseStringLiteral(this.state.value) : this.unexpected(), this.match(5) ? (this.scope.enter($e), this.prodParam.enter(ze), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(e, "TSModuleDeclaration");
    }
    tsParseImportEqualsDeclaration(e, s) {
      e.isExport = s || false, e.id = this.parseIdentifier(), this.checkIdentifier(e.id, Xe), this.expect(29);
      let i = this.tsParseModuleReference();
      return e.importKind === "type" && i.type !== "TSExternalModuleReference" && this.raise(w.ImportAliasHasImportType, { at: i }), e.moduleReference = i, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration");
    }
    tsIsExternalModuleReference() {
      return this.isContextual(117) && this.lookaheadCharCode() === 40;
    }
    tsParseModuleReference() {
      return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(false);
    }
    tsParseExternalModuleReference() {
      let e = this.startNode();
      return this.expectContextual(117), this.expect(10), this.match(131) || this.unexpected(), e.expression = super.parseExprAtom(), this.expect(11), this.finishNode(e, "TSExternalModuleReference");
    }
    tsLookAhead(e) {
      let s = this.state.clone(), i = e();
      return this.state = s, i;
    }
    tsTryParseAndCatch(e) {
      let s = this.tryParse((i) => e() || i());
      if (!(s.aborted || !s.node))
        return s.error && (this.state = s.failState), s.node;
    }
    tsTryParse(e) {
      let s = this.state.clone(), i = e();
      if (i !== void 0 && i !== false)
        return i;
      this.state = s;
    }
    tsTryParseDeclare(e) {
      if (this.isLineTerminator())
        return;
      let s = this.state.type, i;
      return this.isContextual(99) && (s = 74, i = "let"), this.tsInAmbientContext(() => {
        if (s === 68)
          return e.declare = true, super.parseFunctionStatement(e, false, false);
        if (s === 80)
          return e.declare = true, this.parseClass(e, true, false);
        if (s === 124)
          return this.tsParseEnumDeclaration(e, { declare: true });
        if (s === 110)
          return this.tsParseAmbientExternalModuleDeclaration(e);
        if (s === 75 || s === 74)
          return !this.match(75) || !this.isLookaheadContextual("enum") ? (e.declare = true, this.parseVarStatement(e, i || this.state.value, true)) : (this.expect(75), this.tsParseEnumDeclaration(e, { const: true, declare: true }));
        if (s === 127) {
          let a = this.tsParseInterfaceDeclaration(e, { declare: true });
          if (a)
            return a;
        }
        if (R(s))
          return this.tsParseDeclaration(e, this.state.value, true, null);
      });
    }
    tsTryParseExportDeclaration() {
      return this.tsParseDeclaration(this.startNode(), this.state.value, true, null);
    }
    tsParseExpressionStatement(e, s, i) {
      switch (s.name) {
        case "declare": {
          let a = this.tsTryParseDeclare(e);
          if (a)
            return a.declare = true, a;
          break;
        }
        case "global":
          if (this.match(5)) {
            this.scope.enter($e), this.prodParam.enter(ze);
            let a = e;
            return a.global = true, a.id = s, a.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(a, "TSModuleDeclaration");
          }
          break;
        default:
          return this.tsParseDeclaration(e, s.name, false, i);
      }
    }
    tsParseDeclaration(e, s, i, a) {
      switch (s) {
        case "abstract":
          if (this.tsCheckLineTerminator(i) && (this.match(80) || R(this.state.type)))
            return this.tsParseAbstractDeclaration(e, a);
          break;
        case "module":
          if (this.tsCheckLineTerminator(i)) {
            if (this.match(131))
              return this.tsParseAmbientExternalModuleDeclaration(e);
            if (R(this.state.type))
              return this.tsParseModuleOrNamespaceDeclaration(e);
          }
          break;
        case "namespace":
          if (this.tsCheckLineTerminator(i) && R(this.state.type))
            return this.tsParseModuleOrNamespaceDeclaration(e);
          break;
        case "type":
          if (this.tsCheckLineTerminator(i) && R(this.state.type))
            return this.tsParseTypeAliasDeclaration(e);
          break;
      }
    }
    tsCheckLineTerminator(e) {
      return e ? this.hasFollowingLineBreak() ? false : (this.next(), true) : !this.isLineTerminator();
    }
    tsTryParseGenericAsyncArrowFunction(e) {
      if (!this.match(47))
        return;
      let s = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = true;
      let i = this.tsTryParseAndCatch(() => {
        let a = this.startNodeAt(e);
        return a.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier), super.parseFunctionParams(a), a.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), a;
      });
      if (this.state.maybeInArrowParameters = s, !!i)
        return super.parseArrowExpression(i, null, true);
    }
    tsParseTypeArgumentsInExpression() {
      if (this.reScan_lt() === 47)
        return this.tsParseTypeArguments();
    }
    tsParseTypeArguments() {
      let e = this.startNode();
      return e.params = this.tsInType(() => this.tsInNoContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), e.params.length === 0 && this.raise(w.EmptyTypeArguments, { at: e }), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation");
    }
    tsIsDeclarationStart() {
      return Wt(this.state.type);
    }
    isExportDefaultSpecifier() {
      return this.tsIsDeclarationStart() ? false : super.isExportDefaultSpecifier();
    }
    parseAssignableListItem(e, s) {
      let i = this.state.startLoc, a = {};
      this.tsParseModifiers({ allowedModifiers: ["public", "private", "protected", "override", "readonly"] }, a);
      let n = a.accessibility, o = a.override, u = a.readonly;
      !(e & 4) && (n || u || o) && this.raise(w.UnexpectedParameterModifier, { at: i });
      let c = this.parseMaybeDefault();
      this.parseAssignableListItemTypes(c, e);
      let y = this.parseMaybeDefault(c.loc.start, c);
      if (n || u || o) {
        let g = this.startNodeAt(i);
        return s.length && (g.decorators = s), n && (g.accessibility = n), u && (g.readonly = u), o && (g.override = o), y.type !== "Identifier" && y.type !== "AssignmentPattern" && this.raise(w.UnsupportedParameterPropertyKind, { at: g }), g.parameter = y, this.finishNode(g, "TSParameterProperty");
      }
      return s.length && (c.decorators = s), y;
    }
    isSimpleParameter(e) {
      return e.type === "TSParameterProperty" && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e);
    }
    tsDisallowOptionalPattern(e) {
      for (let s of e.params)
        s.type !== "Identifier" && s.optional && !this.state.isAmbientContext && this.raise(w.PatternIsOptional, { at: s });
    }
    setArrowFunctionParameters(e, s, i) {
      super.setArrowFunctionParameters(e, s, i), this.tsDisallowOptionalPattern(e);
    }
    parseFunctionBodyAndFinish(e, s) {
      let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
      let a = s === "FunctionDeclaration" ? "TSDeclareFunction" : s === "ClassMethod" || s === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
      return a && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, a) : a === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(w.DeclareFunctionHasImplementation, { at: e }), e.declare) ? super.parseFunctionBodyAndFinish(e, a, i) : (this.tsDisallowOptionalPattern(e), super.parseFunctionBodyAndFinish(e, s, i));
    }
    registerFunctionStatementId(e) {
      !e.body && e.id ? this.checkIdentifier(e.id, kr) : super.registerFunctionStatementId(e);
    }
    tsCheckForInvalidTypeCasts(e) {
      e.forEach((s) => {
        (s == null ? void 0 : s.type) === "TSTypeCastExpression" && this.raise(w.UnexpectedTypeAnnotation, { at: s.typeAnnotation });
      });
    }
    toReferencedList(e, s) {
      return this.tsCheckForInvalidTypeCasts(e), e;
    }
    parseArrayLike(e, s, i, a) {
      let n = super.parseArrayLike(e, s, i, a);
      return n.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(n.elements), n;
    }
    parseSubscript(e, s, i, a) {
      if (!this.hasPrecedingLineBreak() && this.match(35)) {
        this.state.canStartJSXElement = false, this.next();
        let o = this.startNodeAt(s);
        return o.expression = e, this.finishNode(o, "TSNonNullExpression");
      }
      let n = false;
      if (this.match(18) && this.lookaheadCharCode() === 60) {
        if (i)
          return a.stop = true, e;
        a.optionalChainMember = n = true, this.next();
      }
      if (this.match(47) || this.match(51)) {
        let o, u = this.tsTryParseAndCatch(() => {
          if (!i && this.atPossibleAsyncArrow(e)) {
            let T = this.tsTryParseGenericAsyncArrowFunction(s);
            if (T)
              return T;
          }
          let c = this.tsParseTypeArgumentsInExpression();
          if (!c)
            return;
          if (n && !this.match(10)) {
            o = this.state.curPosition();
            return;
          }
          if (ct(this.state.type)) {
            let T = super.parseTaggedTemplateExpression(e, s, a);
            return T.typeParameters = c, T;
          }
          if (!i && this.eat(10)) {
            let T = this.startNodeAt(s);
            return T.callee = e, T.arguments = this.parseCallExpressionArguments(11, false), this.tsCheckForInvalidTypeCasts(T.arguments), T.typeParameters = c, a.optionalChainMember && (T.optional = n), this.finishCallExpression(T, a.optionalChainMember);
          }
          let y = this.state.type;
          if (y === 48 || y === 52 || y !== 10 && X(y) && !this.hasPrecedingLineBreak())
            return;
          let g = this.startNodeAt(s);
          return g.expression = e, g.typeParameters = c, this.finishNode(g, "TSInstantiationExpression");
        });
        if (o && this.unexpected(o, 10), u)
          return u.type === "TSInstantiationExpression" && (this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) && this.raise(w.InvalidPropertyAccessAfterInstantiationExpression, { at: this.state.startLoc }), u;
      }
      return super.parseSubscript(e, s, i, a);
    }
    parseNewCallee(e) {
      var s;
      super.parseNewCallee(e);
      let { callee: i } = e;
      i.type === "TSInstantiationExpression" && !((s = i.extra) != null && s.parenthesized) && (e.typeParameters = i.typeParameters, e.callee = i.expression);
    }
    parseExprOp(e, s, i) {
      let a;
      if (Re(58) > i && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (a = this.isContextual(118)))) {
        let n = this.startNodeAt(s);
        return n.expression = e, n.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? (a && this.raise(p.UnexpectedKeyword, { at: this.state.startLoc, keyword: "const" }), this.tsParseTypeReference()) : this.tsParseType())), this.finishNode(n, a ? "TSSatisfiesExpression" : "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(n, s, i);
      }
      return super.parseExprOp(e, s, i);
    }
    checkReservedWord(e, s, i, a) {
      this.state.isAmbientContext || super.checkReservedWord(e, s, i, a);
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(w.ImportReflectionHasImportType, { at: e.specifiers[0].loc.start });
    }
    checkDuplicateExports() {
    }
    parseImport(e) {
      if (e.importKind = "value", R(this.state.type) || this.match(55) || this.match(5)) {
        let i = this.lookahead();
        if (this.isContextual(128) && i.type !== 12 && i.type !== 97 && i.type !== 29 && (e.importKind = "type", this.next(), i = this.lookahead()), R(this.state.type) && i.type === 29)
          return this.tsParseImportEqualsDeclaration(e);
      }
      let s = super.parseImport(e);
      return s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(w.TypeImportCannotSpecifyDefaultAndNamed, { at: s }), s;
    }
    parseExport(e, s) {
      if (this.match(83))
        return this.next(), this.isContextual(128) && this.lookaheadCharCode() !== 61 ? (e.importKind = "type", this.next()) : e.importKind = "value", this.tsParseImportEqualsDeclaration(e, true);
      if (this.eat(29)) {
        let i = e;
        return i.expression = super.parseExpression(), this.semicolon(), this.finishNode(i, "TSExportAssignment");
      } else if (this.eatContextual(93)) {
        let i = e;
        return this.expectContextual(126), i.id = this.parseIdentifier(), this.semicolon(), this.finishNode(i, "TSNamespaceExportDeclaration");
      } else {
        if (e.exportKind = "value", this.isContextual(128)) {
          let i = this.lookaheadCharCode();
          (i === 123 || i === 42) && (this.next(), e.exportKind = "type");
        }
        return super.parseExport(e, s);
      }
    }
    isAbstractClass() {
      return this.isContextual(122) && this.lookahead().type === 80;
    }
    parseExportDefaultExpression() {
      if (this.isAbstractClass()) {
        let e = this.startNode();
        return this.next(), e.abstract = true, this.parseClass(e, true, true);
      }
      if (this.match(127)) {
        let e = this.tsParseInterfaceDeclaration(this.startNode());
        if (e)
          return e;
      }
      return super.parseExportDefaultExpression();
    }
    parseVarStatement(e, s) {
      let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, { isAmbientContext: a } = this.state, n = super.parseVarStatement(e, s, i || a);
      if (!a)
        return n;
      for (let { id: o, init: u } of n.declarations)
        u && (s !== "const" || o.typeAnnotation ? this.raise(w.InitializerNotAllowedInAmbientContext, { at: u }) : Zl(u, this.hasPlugin("estree")) || this.raise(w.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference, { at: u }));
      return n;
    }
    parseStatementContent(e, s) {
      if (this.match(75) && this.isLookaheadContextual("enum")) {
        let i = this.startNode();
        return this.expect(75), this.tsParseEnumDeclaration(i, { const: true });
      }
      if (this.isContextual(124))
        return this.tsParseEnumDeclaration(this.startNode());
      if (this.isContextual(127)) {
        let i = this.tsParseInterfaceDeclaration(this.startNode());
        if (i)
          return i;
      }
      return super.parseStatementContent(e, s);
    }
    parseAccessModifier() {
      return this.tsParseModifier(["public", "protected", "private"]);
    }
    tsHasSomeModifiers(e, s) {
      return s.some((i) => Gr(i) ? e.accessibility === i : !!e[i]);
    }
    tsIsStartOfStaticBlocks() {
      return this.isContextual(104) && this.lookaheadCharCode() === 123;
    }
    parseClassMember(e, s, i) {
      let a = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
      this.tsParseModifiers({ allowedModifiers: a, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: true, errorTemplate: w.InvalidModifierOnTypeParameterPositions }, s);
      let n = () => {
        this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(s, a) && this.raise(w.StaticBlockCannotHaveModifier, { at: this.state.curPosition() }), super.parseClassStaticBlock(e, s)) : this.parseClassMemberWithIsStatic(e, s, i, !!s.static);
      };
      s.declare ? this.tsInAmbientContext(n) : n();
    }
    parseClassMemberWithIsStatic(e, s, i, a) {
      let n = this.tsTryParseIndexSignature(s);
      if (n) {
        e.body.push(n), s.abstract && this.raise(w.IndexSignatureHasAbstract, { at: s }), s.accessibility && this.raise(w.IndexSignatureHasAccessibility, { at: s, modifier: s.accessibility }), s.declare && this.raise(w.IndexSignatureHasDeclare, { at: s }), s.override && this.raise(w.IndexSignatureHasOverride, { at: s });
        return;
      }
      !this.state.inAbstractClass && s.abstract && this.raise(w.NonAbstractClassHasAbstractMethod, { at: s }), s.override && (i.hadSuperClass || this.raise(w.OverrideNotInSubClass, { at: s })), super.parseClassMemberWithIsStatic(e, s, i, a);
    }
    parsePostMemberNameModifiers(e) {
      this.eat(17) && (e.optional = true), e.readonly && this.match(10) && this.raise(w.ClassMethodHasReadonly, { at: e }), e.declare && this.match(10) && this.raise(w.ClassMethodHasDeclare, { at: e });
    }
    parseExpressionStatement(e, s, i) {
      return (s.type === "Identifier" ? this.tsParseExpressionStatement(e, s, i) : void 0) || super.parseExpressionStatement(e, s, i);
    }
    shouldParseExportDeclaration() {
      return this.tsIsDeclarationStart() ? true : super.shouldParseExportDeclaration();
    }
    parseConditional(e, s, i) {
      if (!this.state.maybeInArrowParameters || !this.match(17))
        return super.parseConditional(e, s, i);
      let a = this.tryParse(() => super.parseConditional(e, s));
      return a.node ? (a.error && (this.state = a.failState), a.node) : (a.error && super.setOptionalParametersError(i, a.error), e);
    }
    parseParenItem(e, s) {
      if (e = super.parseParenItem(e, s), this.eat(17) && (e.optional = true, this.resetEndLocation(e)), this.match(14)) {
        let i = this.startNodeAt(s);
        return i.expression = e, i.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(i, "TSTypeCastExpression");
      }
      return e;
    }
    parseExportDeclaration(e) {
      if (!this.state.isAmbientContext && this.isContextual(123))
        return this.tsInAmbientContext(() => this.parseExportDeclaration(e));
      let s = this.state.startLoc, i = this.eatContextual(123);
      if (i && (this.isContextual(123) || !this.shouldParseExportDeclaration()))
        throw this.raise(w.ExpectedAmbientAfterExportDeclare, { at: this.state.startLoc });
      let n = R(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
      return n ? ((n.type === "TSInterfaceDeclaration" || n.type === "TSTypeAliasDeclaration" || i) && (e.exportKind = "type"), i && (this.resetStartLocation(n, s), n.declare = true), n) : null;
    }
    parseClassId(e, s, i, a) {
      if ((!s || i) && this.isContextual(111))
        return;
      super.parseClassId(e, s, i, e.declare ? kr : wr);
      let n = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
      n && (e.typeParameters = n);
    }
    parseClassPropertyAnnotation(e) {
      e.optional || (this.eat(35) ? e.definite = true : this.eat(17) && (e.optional = true));
      let s = this.tsTryParseTypeAnnotation();
      s && (e.typeAnnotation = s);
    }
    parseClassProperty(e) {
      if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(w.DeclareClassFieldHasInitializer, { at: this.state.startLoc }), e.abstract && this.match(29)) {
        let { key: s } = e;
        this.raise(w.AbstractPropertyHasInitializer, { at: this.state.startLoc, propertyName: s.type === "Identifier" && !e.computed ? s.name : `[${this.input.slice(s.start, s.end)}]` });
      }
      return super.parseClassProperty(e);
    }
    parseClassPrivateProperty(e) {
      return e.abstract && this.raise(w.PrivateElementHasAbstract, { at: e }), e.accessibility && this.raise(w.PrivateElementHasAccessibility, { at: e, modifier: e.accessibility }), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e);
    }
    parseClassAccessorProperty(e) {
      return this.parseClassPropertyAnnotation(e), e.optional && this.raise(w.AccessorCannotBeOptional, { at: e }), super.parseClassAccessorProperty(e);
    }
    pushClassMethod(e, s, i, a, n, o) {
      let u = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      u && n && this.raise(w.ConstructorHasTypeParameters, { at: u });
      let { declare: c = false, kind: y } = s;
      c && (y === "get" || y === "set") && this.raise(w.DeclareAccessor, { at: s, kind: y }), u && (s.typeParameters = u), super.pushClassMethod(e, s, i, a, n, o);
    }
    pushClassPrivateMethod(e, s, i, a) {
      let n = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      n && (s.typeParameters = n), super.pushClassPrivateMethod(e, s, i, a);
    }
    declareClassPrivateMethodInScope(e, s) {
      e.type !== "TSDeclareMethod" && (e.type === "MethodDefinition" && !e.value.body || super.declareClassPrivateMethodInScope(e, s));
    }
    parseClassSuper(e) {
      super.parseClassSuper(e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual(111) && (e.implements = this.tsParseHeritageClause("implements"));
    }
    parseObjPropValue(e, s, i, a, n, o, u) {
      let c = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      return c && (e.typeParameters = c), super.parseObjPropValue(e, s, i, a, n, o, u);
    }
    parseFunctionParams(e, s) {
      let i = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      i && (e.typeParameters = i), super.parseFunctionParams(e, s);
    }
    parseVarId(e, s) {
      super.parseVarId(e, s), e.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35) && (e.definite = true);
      let i = this.tsTryParseTypeAnnotation();
      i && (e.id.typeAnnotation = i, this.resetEndLocation(e.id));
    }
    parseAsyncArrowFromCallExpression(e, s) {
      return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(e, s);
    }
    parseMaybeAssign(e, s) {
      var i, a, n, o, u, c, y;
      let g, T, C;
      if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
        if (g = this.state.clone(), T = this.tryParse(() => super.parseMaybeAssign(e, s), g), !T.error)
          return T.node;
        let { context: G } = this.state, J = G[G.length - 1];
        (J === x.j_oTag || J === x.j_expr) && G.pop();
      }
      if (!((i = T) != null && i.error) && !this.match(47))
        return super.parseMaybeAssign(e, s);
      (!g || g === this.state) && (g = this.state.clone());
      let j, q = this.tryParse((G) => {
        var J, K;
        j = this.tsParseTypeParameters(this.tsParseConstModifier);
        let Z = super.parseMaybeAssign(e, s);
        return (Z.type !== "ArrowFunctionExpression" || (J = Z.extra) != null && J.parenthesized) && G(), ((K = j) == null ? void 0 : K.params.length) !== 0 && this.resetStartLocationFromNode(Z, j), Z.typeParameters = j, Z;
      }, g);
      if (!q.error && !q.aborted)
        return j && this.reportReservedArrowTypeParam(j), q.node;
      if (!T && (Wr(!this.hasPlugin("jsx")), C = this.tryParse(() => super.parseMaybeAssign(e, s), g), !C.error))
        return C.node;
      if ((a = T) != null && a.node)
        return this.state = T.failState, T.node;
      if (q.node)
        return this.state = q.failState, j && this.reportReservedArrowTypeParam(j), q.node;
      if ((n = C) != null && n.node)
        return this.state = C.failState, C.node;
      throw (o = T) != null && o.thrown ? T.error : q.thrown ? q.error : (u = C) != null && u.thrown ? C.error : ((c = T) == null ? void 0 : c.error) || q.error || ((y = C) == null ? void 0 : y.error);
    }
    reportReservedArrowTypeParam(e) {
      var s;
      e.params.length === 1 && !e.params[0].constraint && !((s = e.extra) != null && s.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(w.ReservedArrowTypeParam, { at: e });
    }
    parseMaybeUnary(e, s) {
      return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e, s);
    }
    parseArrow(e) {
      if (this.match(14)) {
        let s = this.tryParse((i) => {
          let a = this.tsParseTypeOrTypePredicateAnnotation(14);
          return (this.canInsertSemicolon() || !this.match(19)) && i(), a;
        });
        if (s.aborted)
          return;
        s.thrown || (s.error && (this.state = s.failState), e.returnType = s.node);
      }
      return super.parseArrow(e);
    }
    parseAssignableListItemTypes(e, s) {
      if (!(s & 2))
        return e;
      this.eat(17) && (e.optional = true);
      let i = this.tsTryParseTypeAnnotation();
      return i && (e.typeAnnotation = i), this.resetEndLocation(e), e;
    }
    isAssignable(e, s) {
      switch (e.type) {
        case "TSTypeCastExpression":
          return this.isAssignable(e.expression, s);
        case "TSParameterProperty":
          return true;
        default:
          return super.isAssignable(e, s);
      }
    }
    toAssignable(e) {
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      switch (e.type) {
        case "ParenthesizedExpression":
          this.toAssignableParenthesizedExpression(e, s);
          break;
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
          s ? this.expressionScope.recordArrowParameterBindingError(w.UnexpectedTypeCastInParameter, { at: e }) : this.raise(w.UnexpectedTypeCastInParameter, { at: e }), this.toAssignable(e.expression, s);
          break;
        case "AssignmentExpression":
          !s && e.left.type === "TSTypeCastExpression" && (e.left = this.typeCastToParameter(e.left));
        default:
          super.toAssignable(e, s);
      }
    }
    toAssignableParenthesizedExpression(e, s) {
      switch (e.expression.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
        case "ParenthesizedExpression":
          this.toAssignable(e.expression, s);
          break;
        default:
          super.toAssignable(e, s);
      }
    }
    checkToRestConversion(e, s) {
      switch (e.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSTypeAssertion":
        case "TSNonNullExpression":
          this.checkToRestConversion(e.expression, false);
          break;
        default:
          super.checkToRestConversion(e, s);
      }
    }
    isValidLVal(e, s, i) {
      return Wl({ TSTypeCastExpression: true, TSParameterProperty: "parameter", TSNonNullExpression: "expression", TSAsExpression: (i !== be || !s) && ["expression", true], TSSatisfiesExpression: (i !== be || !s) && ["expression", true], TSTypeAssertion: (i !== be || !s) && ["expression", true] }, e) || super.isValidLVal(e, s, i);
    }
    parseBindingAtom() {
      switch (this.state.type) {
        case 78:
          return this.parseIdentifier(true);
        default:
          return super.parseBindingAtom();
      }
    }
    parseMaybeDecoratorArguments(e) {
      if (this.match(47) || this.match(51)) {
        let s = this.tsParseTypeArgumentsInExpression();
        if (this.match(10)) {
          let i = super.parseMaybeDecoratorArguments(e);
          return i.typeParameters = s, i;
        }
        this.unexpected(null, 10);
      }
      return super.parseMaybeDecoratorArguments(e);
    }
    checkCommaAfterRest(e) {
      return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? (this.next(), false) : super.checkCommaAfterRest(e);
    }
    isClassMethod() {
      return this.match(47) || super.isClassMethod();
    }
    isClassProperty() {
      return this.match(35) || this.match(14) || super.isClassProperty();
    }
    parseMaybeDefault(e, s) {
      let i = super.parseMaybeDefault(e, s);
      return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(w.TypeAnnotationAfterAssign, { at: i.typeAnnotation }), i;
    }
    getTokenFromCode(e) {
      if (this.state.inType) {
        if (e === 62) {
          this.finishOp(48, 1);
          return;
        }
        if (e === 60) {
          this.finishOp(47, 1);
          return;
        }
      }
      super.getTokenFromCode(e);
    }
    reScan_lt_gt() {
      let { type: e } = this.state;
      e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt());
    }
    reScan_lt() {
      let { type: e } = this.state;
      return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e;
    }
    toAssignableList(e, s, i) {
      for (let a = 0; a < e.length; a++) {
        let n = e[a];
        (n == null ? void 0 : n.type) === "TSTypeCastExpression" && (e[a] = this.typeCastToParameter(n));
      }
      super.toAssignableList(e, s, i);
    }
    typeCastToParameter(e) {
      return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
    }
    shouldParseArrow(e) {
      return this.match(14) ? e.every((s) => this.isAssignable(s, true)) : super.shouldParseArrow(e);
    }
    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }
    canHaveLeadingDecorator() {
      return super.canHaveLeadingDecorator() || this.isAbstractClass();
    }
    jsxParseOpeningElementAfterName(e) {
      if (this.match(47) || this.match(51)) {
        let s = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
        s && (e.typeParameters = s);
      }
      return super.jsxParseOpeningElementAfterName(e);
    }
    getGetterSetterExpectedParamCount(e) {
      let s = super.getGetterSetterExpectedParamCount(e), a = this.getObjectOrClassMethodParams(e)[0];
      return a && this.isThisParam(a) ? s + 1 : s;
    }
    parseCatchClauseParam() {
      let e = super.parseCatchClauseParam(), s = this.tsTryParseTypeAnnotation();
      return s && (e.typeAnnotation = s, this.resetEndLocation(e)), e;
    }
    tsInAmbientContext(e) {
      let s = this.state.isAmbientContext;
      this.state.isAmbientContext = true;
      try {
        return e();
      } finally {
        this.state.isAmbientContext = s;
      }
    }
    parseClass(e, s, i) {
      let a = this.state.inAbstractClass;
      this.state.inAbstractClass = !!e.abstract;
      try {
        return super.parseClass(e, s, i);
      } finally {
        this.state.inAbstractClass = a;
      }
    }
    tsParseAbstractDeclaration(e, s) {
      if (this.match(80))
        return e.abstract = true, this.maybeTakeDecorators(s, this.parseClass(e, true, false));
      if (this.isContextual(127)) {
        if (!this.hasFollowingLineBreak())
          return e.abstract = true, this.raise(w.NonClassMethodPropertyHasAbstractModifer, { at: e }), this.tsParseInterfaceDeclaration(e);
      } else
        this.unexpected(null, 80);
    }
    parseMethod(e, s, i, a, n, o, u) {
      let c = super.parseMethod(e, s, i, a, n, o, u);
      if (c.abstract && (this.hasPlugin("estree") ? !!c.value.body : !!c.body)) {
        let { key: g } = c;
        this.raise(w.AbstractMethodHasImplementation, { at: c, methodName: g.type === "Identifier" && !c.computed ? g.name : `[${this.input.slice(g.start, g.end)}]` });
      }
      return c;
    }
    tsParseTypeParameterName() {
      return this.parseIdentifier().name;
    }
    shouldParseAsAmbientContext() {
      return !!this.getPluginOption("typescript", "dts");
    }
    parse() {
      return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.parse();
    }
    getExpression() {
      return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.getExpression();
    }
    parseExportSpecifier(e, s, i, a) {
      return !s && a ? (this.parseTypeOnlyImportExportSpecifier(e, false, i), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", super.parseExportSpecifier(e, s, i, a));
    }
    parseImportSpecifier(e, s, i, a, n) {
      return !s && a ? (this.parseTypeOnlyImportExportSpecifier(e, true, i), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", super.parseImportSpecifier(e, s, i, a, i ? Dr : Xe));
    }
    parseTypeOnlyImportExportSpecifier(e, s, i) {
      let a = s ? "imported" : "local", n = s ? "local" : "exported", o = e[a], u, c = false, y = true, g = o.loc.start;
      if (this.isContextual(93)) {
        let C = this.parseIdentifier();
        if (this.isContextual(93)) {
          let j = this.parseIdentifier();
          se(this.state.type) ? (c = true, o = C, u = s ? this.parseIdentifier() : this.parseModuleExportName(), y = false) : (u = j, y = false);
        } else
          se(this.state.type) ? (y = false, u = s ? this.parseIdentifier() : this.parseModuleExportName()) : (c = true, o = C);
      } else
        se(this.state.type) && (c = true, s ? (o = this.parseIdentifier(true), this.isContextual(93) || this.checkReservedWord(o.name, o.loc.start, true, true)) : o = this.parseModuleExportName());
      c && i && this.raise(s ? w.TypeModifierIsUsedInTypeImports : w.TypeModifierIsUsedInTypeExports, { at: g }), e[a] = o, e[n] = u;
      let T = s ? "importKind" : "exportKind";
      e[T] = c ? "type" : "value", y && this.eatContextual(93) && (e[n] = s ? this.parseIdentifier() : this.parseModuleExportName()), e[n] || (e[n] = Te(e[a])), s && this.checkIdentifier(e[n], c ? Dr : Xe);
    }
  };
  function Ql(t) {
    if (t.type !== "MemberExpression")
      return false;
    let { computed: r, property: e } = t;
    return r && e.type !== "StringLiteral" && (e.type !== "TemplateLiteral" || e.expressions.length > 0) ? false : Xr(t.object);
  }
  function Zl(t, r) {
    var e;
    let { type: s } = t;
    if ((e = t.extra) != null && e.parenthesized)
      return false;
    if (r) {
      if (s === "Literal") {
        let { value: i } = t;
        if (typeof i == "string" || typeof i == "boolean")
          return true;
      }
    } else if (s === "StringLiteral" || s === "BooleanLiteral")
      return true;
    return !!(Jr(t, r) || eh(t, r) || s === "TemplateLiteral" && t.expressions.length === 0 || Ql(t));
  }
  function Jr(t, r) {
    return r ? t.type === "Literal" && (typeof t.value == "number" || "bigint" in t) : t.type === "NumericLiteral" || t.type === "BigIntLiteral";
  }
  function eh(t, r) {
    if (t.type === "UnaryExpression") {
      let { operator: e, argument: s } = t;
      if (e === "-" && Jr(s, r))
        return true;
    }
    return false;
  }
  function Xr(t) {
    return t.type === "Identifier" ? true : t.type !== "MemberExpression" || t.computed ? false : Xr(t.object);
  }
  var Yr = ge`placeholders`({ ClassNameIsRequired: "A class name is required.", UnexpectedSpace: "Unexpected space in placeholder." }), th = (t) => class extends t {
    parsePlaceholder(e) {
      if (this.match(142)) {
        let s = this.startNode();
        return this.next(), this.assertNoSpace(), s.name = super.parseIdentifier(true), this.assertNoSpace(), this.expect(142), this.finishPlaceholder(s, e);
      }
    }
    finishPlaceholder(e, s) {
      let i = !!(e.expectedNode && e.type === "Placeholder");
      return e.expectedNode = s, i ? e : this.finishNode(e, "Placeholder");
    }
    getTokenFromCode(e) {
      e === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(142, 2) : super.getTokenFromCode(e);
    }
    parseExprAtom(e) {
      return this.parsePlaceholder("Expression") || super.parseExprAtom(e);
    }
    parseIdentifier(e) {
      return this.parsePlaceholder("Identifier") || super.parseIdentifier(e);
    }
    checkReservedWord(e, s, i, a) {
      e !== void 0 && super.checkReservedWord(e, s, i, a);
    }
    parseBindingAtom() {
      return this.parsePlaceholder("Pattern") || super.parseBindingAtom();
    }
    isValidLVal(e, s, i) {
      return e === "Placeholder" || super.isValidLVal(e, s, i);
    }
    toAssignable(e, s) {
      e && e.type === "Placeholder" && e.expectedNode === "Expression" ? e.expectedNode = "Pattern" : super.toAssignable(e, s);
    }
    chStartsBindingIdentifier(e, s) {
      return !!(super.chStartsBindingIdentifier(e, s) || this.lookahead().type === 142);
    }
    verifyBreakContinue(e, s) {
      e.label && e.label.type === "Placeholder" || super.verifyBreakContinue(e, s);
    }
    parseExpressionStatement(e, s) {
      if (s.type !== "Placeholder" || s.extra && s.extra.parenthesized)
        return super.parseExpressionStatement(e, s);
      if (this.match(14)) {
        let i = e;
        return i.label = this.finishPlaceholder(s, "Identifier"), this.next(), i.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration(), this.finishNode(i, "LabeledStatement");
      }
      return this.semicolon(), e.name = s.name, this.finishPlaceholder(e, "Statement");
    }
    parseBlock(e, s, i) {
      return this.parsePlaceholder("BlockStatement") || super.parseBlock(e, s, i);
    }
    parseFunctionId(e) {
      return this.parsePlaceholder("Identifier") || super.parseFunctionId(e);
    }
    parseClass(e, s, i) {
      let a = s ? "ClassDeclaration" : "ClassExpression";
      this.next();
      let n = this.state.strict, o = this.parsePlaceholder("Identifier");
      if (o)
        if (this.match(81) || this.match(142) || this.match(5))
          e.id = o;
        else {
          if (i || !s)
            return e.id = null, e.body = this.finishPlaceholder(o, "ClassBody"), this.finishNode(e, a);
          throw this.raise(Yr.ClassNameIsRequired, { at: this.state.startLoc });
        }
      else
        this.parseClassId(e, s, i);
      return super.parseClassSuper(e), e.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!e.superClass, n), this.finishNode(e, a);
    }
    parseExport(e, s) {
      let i = this.parsePlaceholder("Identifier");
      if (!i)
        return super.parseExport(e, s);
      if (!this.isContextual(97) && !this.match(12))
        return e.specifiers = [], e.source = null, e.declaration = this.finishPlaceholder(i, "Declaration"), this.finishNode(e, "ExportNamedDeclaration");
      this.expectPlugin("exportDefaultFrom");
      let a = this.startNode();
      return a.exported = i, e.specifiers = [this.finishNode(a, "ExportDefaultSpecifier")], super.parseExport(e, s);
    }
    isExportDefaultSpecifier() {
      if (this.match(65)) {
        let e = this.nextTokenStart();
        if (this.isUnparsedContextual(e, "from") && this.input.startsWith(Y(142), this.nextTokenStartSince(e + 4)))
          return true;
      }
      return super.isExportDefaultSpecifier();
    }
    maybeParseExportDefaultSpecifier(e) {
      return e.specifiers && e.specifiers.length > 0 ? true : super.maybeParseExportDefaultSpecifier(e);
    }
    checkExport(e) {
      let { specifiers: s } = e;
      s != null && s.length && (e.specifiers = s.filter((i) => i.exported.type === "Placeholder")), super.checkExport(e), e.specifiers = s;
    }
    parseImport(e) {
      let s = this.parsePlaceholder("Identifier");
      if (!s)
        return super.parseImport(e);
      if (e.specifiers = [], !this.isContextual(97) && !this.match(12))
        return e.source = this.finishPlaceholder(s, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration");
      let i = this.startNodeAtNode(s);
      return i.local = s, e.specifiers.push(this.finishNode(i, "ImportDefaultSpecifier")), this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual(97), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration");
    }
    parseImportSource() {
      return this.parsePlaceholder("StringLiteral") || super.parseImportSource();
    }
    assertNoSpace() {
      this.state.start > this.state.lastTokEndLoc.index && this.raise(Yr.UnexpectedSpace, { at: this.state.lastTokEndLoc });
    }
  }, sh = (t) => class extends t {
    parseV8Intrinsic() {
      if (this.match(54)) {
        let e = this.state.startLoc, s = this.startNode();
        if (this.next(), R(this.state.type)) {
          let i = this.parseIdentifierName(), a = this.createIdentifier(s, i);
          if (a.type = "V8IntrinsicIdentifier", this.match(10))
            return a;
        }
        this.unexpected(e);
      }
    }
    parseExprAtom(e) {
      return this.parseV8Intrinsic() || super.parseExprAtom(e);
    }
  };
  function Q(t, r) {
    let [e, s] = typeof r == "string" ? [r, {}] : r, i = Object.keys(s), a = i.length === 0;
    return t.some((n) => {
      if (typeof n == "string")
        return a && n === e;
      {
        let [o, u] = n;
        if (o !== e)
          return false;
        for (let c of i)
          if (u[c] !== s[c])
            return false;
        return true;
      }
    });
  }
  function Le(t, r, e) {
    let s = t.find((i) => Array.isArray(i) ? i[0] === r : i === r);
    return s && Array.isArray(s) && s.length > 1 ? s[1][e] : null;
  }
  var Qr = ["minimal", "fsharp", "hack", "smart"], Zr = ["^^", "@@", "^", "%", "#"], ei = ["hash", "bar"];
  function rh(t) {
    if (Q(t, "decorators")) {
      if (Q(t, "decorators-legacy"))
        throw new Error("Cannot use the decorators and decorators-legacy plugin together");
      let r = Le(t, "decorators", "decoratorsBeforeExport");
      if (r != null && typeof r != "boolean")
        throw new Error("'decoratorsBeforeExport' must be a boolean, if specified.");
      let e = Le(t, "decorators", "allowCallParenthesized");
      if (e != null && typeof e != "boolean")
        throw new Error("'allowCallParenthesized' must be a boolean.");
    }
    if (Q(t, "flow") && Q(t, "typescript"))
      throw new Error("Cannot combine flow and typescript plugins.");
    if (Q(t, "placeholders") && Q(t, "v8intrinsic"))
      throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
    if (Q(t, "pipelineOperator")) {
      let r = Le(t, "pipelineOperator", "proposal");
      if (!Qr.includes(r)) {
        let s = Qr.map((i) => `"${i}"`).join(", ");
        throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${s}.`);
      }
      let e = Q(t, ["recordAndTuple", { syntaxType: "hash" }]);
      if (r === "hack") {
        if (Q(t, "placeholders"))
          throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
        if (Q(t, "v8intrinsic"))
          throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
        let s = Le(t, "pipelineOperator", "topicToken");
        if (!Zr.includes(s)) {
          let i = Zr.map((a) => `"${a}"`).join(", ");
          throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${i}.`);
        }
        if (s === "#" && e)
          throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
      } else if (r === "smart" && e)
        throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
    }
    if (Q(t, "moduleAttributes")) {
      if (Q(t, "importAssertions"))
        throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
      if (Le(t, "moduleAttributes", "version") !== "may-2020")
        throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
    }
    if (Q(t, "recordAndTuple") && Le(t, "recordAndTuple", "syntaxType") != null && !ei.includes(Le(t, "recordAndTuple", "syntaxType")))
      throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + ei.map((r) => `'${r}'`).join(", "));
    if (Q(t, "asyncDoExpressions") && !Q(t, "doExpressions")) {
      let r = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
      throw r.missingPlugins = "doExpressions", r;
    }
  }
  var ti = { estree: Uo, jsx: $l, flow: ql, typescript: Yl, v8intrinsic: sh, placeholders: th }, ih = Object.keys(ti), ah = class extends Kl {
    checkProto(t, r, e, s) {
      if (t.type === "SpreadElement" || this.isObjectMethod(t) || t.computed || t.shorthand)
        return;
      let i = t.key;
      if ((i.type === "Identifier" ? i.name : i.value) === "__proto__") {
        if (r) {
          this.raise(p.RecordNoProto, { at: i });
          return;
        }
        e.used && (s ? s.doubleProtoLoc === null && (s.doubleProtoLoc = i.loc.start) : this.raise(p.DuplicateProto, { at: i })), e.used = true;
      }
    }
    shouldExitDescending(t, r) {
      return t.type === "ArrowFunctionExpression" && t.start === r;
    }
    getExpression() {
      this.enterInitialScopes(), this.nextToken();
      let t = this.parseExpression();
      return this.match(137) || this.unexpected(), this.finalizeRemainingComments(), t.comments = this.state.comments, t.errors = this.state.errors, this.options.tokens && (t.tokens = this.tokens), t;
    }
    parseExpression(t, r) {
      return t ? this.disallowInAnd(() => this.parseExpressionBase(r)) : this.allowInAnd(() => this.parseExpressionBase(r));
    }
    parseExpressionBase(t) {
      let r = this.state.startLoc, e = this.parseMaybeAssign(t);
      if (this.match(12)) {
        let s = this.startNodeAt(r);
        for (s.expressions = [e]; this.eat(12); )
          s.expressions.push(this.parseMaybeAssign(t));
        return this.toReferencedList(s.expressions), this.finishNode(s, "SequenceExpression");
      }
      return e;
    }
    parseMaybeAssignDisallowIn(t, r) {
      return this.disallowInAnd(() => this.parseMaybeAssign(t, r));
    }
    parseMaybeAssignAllowIn(t, r) {
      return this.allowInAnd(() => this.parseMaybeAssign(t, r));
    }
    setOptionalParametersError(t, r) {
      var e;
      t.optionalParametersLoc = (e = r == null ? void 0 : r.loc) != null ? e : this.state.startLoc;
    }
    parseMaybeAssign(t, r) {
      let e = this.state.startLoc;
      if (this.isContextual(106) && this.prodParam.hasYield) {
        let n = this.parseYield();
        return r && (n = r.call(this, n, e)), n;
      }
      let s;
      t ? s = false : (t = new wt(), s = true);
      let { type: i } = this.state;
      (i === 10 || R(i)) && (this.state.potentialArrowAt = this.state.start);
      let a = this.parseMaybeConditional(t);
      if (r && (a = r.call(this, a, e)), ye(this.state.type)) {
        let n = this.startNodeAt(e), o = this.state.value;
        if (n.operator = o, this.match(29)) {
          this.toAssignable(a, true), n.left = a;
          let u = e.index;
          t.doubleProtoLoc != null && t.doubleProtoLoc.index >= u && (t.doubleProtoLoc = null), t.shorthandAssignLoc != null && t.shorthandAssignLoc.index >= u && (t.shorthandAssignLoc = null), t.privateKeyLoc != null && t.privateKeyLoc.index >= u && (this.checkDestructuringPrivate(t), t.privateKeyLoc = null);
        } else
          n.left = a;
        return this.next(), n.right = this.parseMaybeAssign(), this.checkLVal(a, { in: this.finishNode(n, "AssignmentExpression") }), n;
      } else
        s && this.checkExpressionErrors(t, true);
      return a;
    }
    parseMaybeConditional(t) {
      let r = this.state.startLoc, e = this.state.potentialArrowAt, s = this.parseExprOps(t);
      return this.shouldExitDescending(s, e) ? s : this.parseConditional(s, r, t);
    }
    parseConditional(t, r, e) {
      if (this.eat(17)) {
        let s = this.startNodeAt(r);
        return s.test = t, s.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), s.alternate = this.parseMaybeAssign(), this.finishNode(s, "ConditionalExpression");
      }
      return t;
    }
    parseMaybeUnaryOrPrivate(t) {
      return this.match(136) ? this.parsePrivateName() : this.parseMaybeUnary(t);
    }
    parseExprOps(t) {
      let r = this.state.startLoc, e = this.state.potentialArrowAt, s = this.parseMaybeUnaryOrPrivate(t);
      return this.shouldExitDescending(s, e) ? s : this.parseExprOp(s, r, -1);
    }
    parseExprOp(t, r, e) {
      if (this.isPrivateName(t)) {
        let i = this.getPrivateNameSV(t);
        (e >= Re(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(p.PrivateInExpectedIn, { at: t, identifierName: i }), this.classScope.usePrivateName(i, t.loc.start);
      }
      let s = this.state.type;
      if (le(s) && (this.prodParam.hasIn || !this.match(58))) {
        let i = Re(s);
        if (i > e) {
          if (s === 39) {
            if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
              return t;
            this.checkPipelineAtInfixOperator(t, r);
          }
          let a = this.startNodeAt(r);
          a.left = t, a.operator = this.state.value;
          let n = s === 41 || s === 42, o = s === 40;
          if (o && (i = Re(42)), this.next(), s === 39 && this.hasPlugin(["pipelineOperator", { proposal: "minimal" }]) && this.state.type === 96 && this.prodParam.hasAwait)
            throw this.raise(p.UnexpectedAwaitAfterPipelineBody, { at: this.state.startLoc });
          a.right = this.parseExprOpRightExpr(s, i);
          let u = this.finishNode(a, n || o ? "LogicalExpression" : "BinaryExpression"), c = this.state.type;
          if (o && (c === 41 || c === 42) || n && c === 40)
            throw this.raise(p.MixingCoalesceWithLogical, { at: this.state.startLoc });
          return this.parseExprOp(u, r, e);
        }
      }
      return t;
    }
    parseExprOpRightExpr(t, r) {
      let e = this.state.startLoc;
      switch (t) {
        case 39:
          switch (this.getPluginOption("pipelineOperator", "proposal")) {
            case "hack":
              return this.withTopicBindingContext(() => this.parseHackPipeBody());
            case "smart":
              return this.withTopicBindingContext(() => {
                if (this.prodParam.hasYield && this.isContextual(106))
                  throw this.raise(p.PipeBodyIsTighter, { at: this.state.startLoc });
                return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(t, r), e);
              });
            case "fsharp":
              return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(r));
          }
        default:
          return this.parseExprOpBaseRightExpr(t, r);
      }
    }
    parseExprOpBaseRightExpr(t, r) {
      let e = this.state.startLoc;
      return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, Gt(t) ? r - 1 : r);
    }
    parseHackPipeBody() {
      var t;
      let { startLoc: r } = this.state, e = this.parseMaybeAssign();
      return Bo.has(e.type) && !((t = e.extra) != null && t.parenthesized) && this.raise(p.PipeUnparenthesizedBody, { at: r, type: e.type }), this.topicReferenceWasUsedInCurrentContext() || this.raise(p.PipeTopicUnused, { at: r }), e;
    }
    checkExponentialAfterUnary(t) {
      this.match(57) && this.raise(p.UnexpectedTokenUnaryExponentiation, { at: t.argument });
    }
    parseMaybeUnary(t, r) {
      let e = this.state.startLoc, s = this.isContextual(96);
      if (s && this.isAwaitAllowed()) {
        this.next();
        let o = this.parseAwait(e);
        return r || this.checkExponentialAfterUnary(o), o;
      }
      let i = this.match(34), a = this.startNode();
      if (ht(this.state.type)) {
        a.operator = this.state.value, a.prefix = true, this.match(72) && this.expectPlugin("throwExpressions");
        let o = this.match(89);
        if (this.next(), a.argument = this.parseMaybeUnary(null, true), this.checkExpressionErrors(t, true), this.state.strict && o) {
          let u = a.argument;
          u.type === "Identifier" ? this.raise(p.StrictDelete, { at: a }) : this.hasPropertyAsPrivateName(u) && this.raise(p.DeletePrivateField, { at: a });
        }
        if (!i)
          return r || this.checkExponentialAfterUnary(a), this.finishNode(a, "UnaryExpression");
      }
      let n = this.parseUpdate(a, i, t);
      if (s) {
        let { type: o } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? X(o) : X(o) && !this.match(54)) && !this.isAmbiguousAwait())
          return this.raiseOverwrite(p.AwaitNotInAsyncContext, { at: e }), this.parseAwait(e);
      }
      return n;
    }
    parseUpdate(t, r, e) {
      if (r) {
        let a = t;
        return this.checkLVal(a.argument, { in: this.finishNode(a, "UpdateExpression") }), t;
      }
      let s = this.state.startLoc, i = this.parseExprSubscripts(e);
      if (this.checkExpressionErrors(e, false))
        return i;
      for (; ue(this.state.type) && !this.canInsertSemicolon(); ) {
        let a = this.startNodeAt(s);
        a.operator = this.state.value, a.prefix = false, a.argument = i, this.next(), this.checkLVal(i, { in: i = this.finishNode(a, "UpdateExpression") });
      }
      return i;
    }
    parseExprSubscripts(t) {
      let r = this.state.startLoc, e = this.state.potentialArrowAt, s = this.parseExprAtom(t);
      return this.shouldExitDescending(s, e) ? s : this.parseSubscripts(s, r);
    }
    parseSubscripts(t, r, e) {
      let s = { optionalChainMember: false, maybeAsyncArrow: this.atPossibleAsyncArrow(t), stop: false };
      do
        t = this.parseSubscript(t, r, e, s), s.maybeAsyncArrow = false;
      while (!s.stop);
      return t;
    }
    parseSubscript(t, r, e, s) {
      let { type: i } = this.state;
      if (!e && i === 15)
        return this.parseBind(t, r, e, s);
      if (ct(i))
        return this.parseTaggedTemplateExpression(t, r, s);
      let a = false;
      if (i === 18) {
        if (e && (this.raise(p.OptionalChainingNoNew, { at: this.state.startLoc }), this.lookaheadCharCode() === 40))
          return s.stop = true, t;
        s.optionalChainMember = a = true, this.next();
      }
      if (!e && this.match(10))
        return this.parseCoverCallAndAsyncArrowHead(t, r, s, a);
      {
        let n = this.eat(0);
        return n || a || this.eat(16) ? this.parseMember(t, r, s, n, a) : (s.stop = true, t);
      }
    }
    parseMember(t, r, e, s, i) {
      let a = this.startNodeAt(r);
      return a.object = t, a.computed = s, s ? (a.property = this.parseExpression(), this.expect(3)) : this.match(136) ? (t.type === "Super" && this.raise(p.SuperPrivateField, { at: r }), this.classScope.usePrivateName(this.state.value, this.state.startLoc), a.property = this.parsePrivateName()) : a.property = this.parseIdentifier(true), e.optionalChainMember ? (a.optional = i, this.finishNode(a, "OptionalMemberExpression")) : this.finishNode(a, "MemberExpression");
    }
    parseBind(t, r, e, s) {
      let i = this.startNodeAt(r);
      return i.object = t, this.next(), i.callee = this.parseNoCallExpr(), s.stop = true, this.parseSubscripts(this.finishNode(i, "BindExpression"), r, e);
    }
    parseCoverCallAndAsyncArrowHead(t, r, e, s) {
      let i = this.state.maybeInArrowParameters, a = null;
      this.state.maybeInArrowParameters = true, this.next();
      let n = this.startNodeAt(r);
      n.callee = t;
      let { maybeAsyncArrow: o, optionalChainMember: u } = e;
      o && (this.expressionScope.enter(Nl()), a = new wt()), u && (n.optional = s), s ? n.arguments = this.parseCallExpressionArguments(11) : n.arguments = this.parseCallExpressionArguments(11, t.type === "Import", t.type !== "Super", n, a);
      let c = this.finishCallExpression(n, u);
      return o && this.shouldParseAsyncArrow() && !s ? (e.stop = true, this.checkDestructuringPrivate(a), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), c = this.parseAsyncArrowFromCallExpression(this.startNodeAt(r), c)) : (o && (this.checkExpressionErrors(a, true), this.expressionScope.exit()), this.toReferencedArguments(c)), this.state.maybeInArrowParameters = i, c;
    }
    toReferencedArguments(t, r) {
      this.toReferencedListDeep(t.arguments, r);
    }
    parseTaggedTemplateExpression(t, r, e) {
      let s = this.startNodeAt(r);
      return s.tag = t, s.quasi = this.parseTemplate(true), e.optionalChainMember && this.raise(p.OptionalChainingNoTemplate, { at: r }), this.finishNode(s, "TaggedTemplateExpression");
    }
    atPossibleAsyncArrow(t) {
      return t.type === "Identifier" && t.name === "async" && this.state.lastTokEndLoc.index === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && t.start === this.state.potentialArrowAt;
    }
    finishCallExpression(t, r) {
      if (t.callee.type === "Import")
        if (t.arguments.length === 2 && (this.hasPlugin("moduleAttributes") || this.expectPlugin("importAssertions")), t.arguments.length === 0 || t.arguments.length > 2)
          this.raise(p.ImportCallArity, { at: t, maxArgumentCount: this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? 2 : 1 });
        else
          for (let e of t.arguments)
            e.type === "SpreadElement" && this.raise(p.ImportCallSpreadArgument, { at: e });
      return this.finishNode(t, r ? "OptionalCallExpression" : "CallExpression");
    }
    parseCallExpressionArguments(t, r, e, s, i) {
      let a = [], n = true, o = this.state.inFSharpPipelineDirectBody;
      for (this.state.inFSharpPipelineDirectBody = false; !this.eat(t); ) {
        if (n)
          n = false;
        else if (this.expect(12), this.match(t)) {
          r && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes") && this.raise(p.ImportCallArgumentTrailingComma, { at: this.state.lastTokStartLoc }), s && this.addTrailingCommaExtraToNode(s), this.next();
          break;
        }
        a.push(this.parseExprListItem(false, i, e));
      }
      return this.state.inFSharpPipelineDirectBody = o, a;
    }
    shouldParseAsyncArrow() {
      return this.match(19) && !this.canInsertSemicolon();
    }
    parseAsyncArrowFromCallExpression(t, r) {
      var e;
      return this.resetPreviousNodeTrailingComments(r), this.expect(19), this.parseArrowExpression(t, r.arguments, true, (e = r.extra) == null ? void 0 : e.trailingCommaLoc), r.innerComments && Ye(t, r.innerComments), r.callee.trailingComments && Ye(t, r.callee.trailingComments), t;
    }
    parseNoCallExpr() {
      let t = this.state.startLoc;
      return this.parseSubscripts(this.parseExprAtom(), t, true);
    }
    parseExprAtom(t) {
      let r, e = null, { type: s } = this.state;
      switch (s) {
        case 79:
          return this.parseSuper();
        case 83:
          return r = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(r) : (this.match(10) || this.raise(p.UnsupportedImport, { at: this.state.lastTokStartLoc }), this.finishNode(r, "Import"));
        case 78:
          return r = this.startNode(), this.next(), this.finishNode(r, "ThisExpression");
        case 90:
          return this.parseDo(this.startNode(), false);
        case 56:
        case 31:
          return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
        case 132:
          return this.parseNumericLiteral(this.state.value);
        case 133:
          return this.parseBigIntLiteral(this.state.value);
        case 134:
          return this.parseDecimalLiteral(this.state.value);
        case 131:
          return this.parseStringLiteral(this.state.value);
        case 84:
          return this.parseNullLiteral();
        case 85:
          return this.parseBooleanLiteral(true);
        case 86:
          return this.parseBooleanLiteral(false);
        case 10: {
          let i = this.state.potentialArrowAt === this.state.start;
          return this.parseParenAndDistinguishExpression(i);
        }
        case 2:
        case 1:
          return this.parseArrayLike(this.state.type === 2 ? 4 : 3, false, true);
        case 0:
          return this.parseArrayLike(3, true, false, t);
        case 6:
        case 7:
          return this.parseObjectLike(this.state.type === 6 ? 9 : 8, false, true);
        case 5:
          return this.parseObjectLike(8, false, false, t);
        case 68:
          return this.parseFunctionOrFunctionSent();
        case 26:
          e = this.parseDecorators();
        case 80:
          return this.parseClass(this.maybeTakeDecorators(e, this.startNode()), false);
        case 77:
          return this.parseNewOrNewTarget();
        case 25:
        case 24:
          return this.parseTemplate(false);
        case 15: {
          r = this.startNode(), this.next(), r.object = null;
          let i = r.callee = this.parseNoCallExpr();
          if (i.type === "MemberExpression")
            return this.finishNode(r, "BindExpression");
          throw this.raise(p.UnsupportedBind, { at: i });
        }
        case 136:
          return this.raise(p.PrivateInExpectedIn, { at: this.state.startLoc, identifierName: this.state.value }), this.parsePrivateName();
        case 33:
          return this.parseTopicReferenceThenEqualsSign(54, "%");
        case 32:
          return this.parseTopicReferenceThenEqualsSign(44, "^");
        case 37:
        case 38:
          return this.parseTopicReference("hack");
        case 44:
        case 54:
        case 27: {
          let i = this.getPluginOption("pipelineOperator", "proposal");
          if (i)
            return this.parseTopicReference(i);
          this.unexpected();
          break;
        }
        case 47: {
          let i = this.input.codePointAt(this.nextTokenStart());
          Pe(i) || i === 62 ? this.expectOnePlugin(["jsx", "flow", "typescript"]) : this.unexpected();
          break;
        }
        default:
          if (R(s)) {
            if (this.isContextual(125) && this.lookaheadCharCode() === 123 && !this.hasFollowingLineBreak())
              return this.parseModuleExpression();
            let i = this.state.potentialArrowAt === this.state.start, a = this.state.containsEsc, n = this.parseIdentifier();
            if (!a && n.name === "async" && !this.canInsertSemicolon()) {
              let { type: o } = this.state;
              if (o === 68)
                return this.resetPreviousNodeTrailingComments(n), this.next(), this.parseAsyncFunctionExpression(this.startNodeAtNode(n));
              if (R(o))
                return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(n)) : n;
              if (o === 90)
                return this.resetPreviousNodeTrailingComments(n), this.parseDo(this.startNodeAtNode(n), true);
            }
            return i && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(n), [n], false)) : n;
          } else
            this.unexpected();
      }
    }
    parseTopicReferenceThenEqualsSign(t, r) {
      let e = this.getPluginOption("pipelineOperator", "proposal");
      if (e)
        return this.state.type = t, this.state.value = r, this.state.pos--, this.state.end--, this.state.endLoc = re(this.state.endLoc, -1), this.parseTopicReference(e);
      this.unexpected();
    }
    parseTopicReference(t) {
      let r = this.startNode(), e = this.state.startLoc, s = this.state.type;
      return this.next(), this.finishTopicReference(r, e, t, s);
    }
    finishTopicReference(t, r, e, s) {
      if (this.testTopicReferenceConfiguration(e, r, s)) {
        let i = e === "smart" ? "PipelinePrimaryTopicReference" : "TopicReference";
        return this.topicReferenceIsAllowedInCurrentContext() || this.raise(e === "smart" ? p.PrimaryTopicNotAllowed : p.PipeTopicUnbound, { at: r }), this.registerTopicReference(), this.finishNode(t, i);
      } else
        throw this.raise(p.PipeTopicUnconfiguredToken, { at: r, token: Y(s) });
    }
    testTopicReferenceConfiguration(t, r, e) {
      switch (t) {
        case "hack":
          return this.hasPlugin(["pipelineOperator", { topicToken: Y(e) }]);
        case "smart":
          return e === 27;
        default:
          throw this.raise(p.PipeTopicRequiresHackPipes, { at: r });
      }
    }
    parseAsyncArrowUnaryFunction(t) {
      this.prodParam.enter(St(true, this.prodParam.hasYield));
      let r = [this.parseIdentifier()];
      return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(p.LineTerminatorBeforeArrow, { at: this.state.curPosition() }), this.expect(19), this.parseArrowExpression(t, r, true);
    }
    parseDo(t, r) {
      this.expectPlugin("doExpressions"), r && this.expectPlugin("asyncDoExpressions"), t.async = r, this.next();
      let e = this.state.labels;
      return this.state.labels = [], r ? (this.prodParam.enter(bt), t.body = this.parseBlock(), this.prodParam.exit()) : t.body = this.parseBlock(), this.state.labels = e, this.finishNode(t, "DoExpression");
    }
    parseSuper() {
      let t = this.startNode();
      return this.next(), this.match(10) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod ? this.raise(p.SuperNotAllowed, { at: t }) : !this.scope.allowSuper && !this.options.allowSuperOutsideMethod && this.raise(p.UnexpectedSuper, { at: t }), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(p.UnsupportedSuper, { at: t }), this.finishNode(t, "Super");
    }
    parsePrivateName() {
      let t = this.startNode(), r = this.startNodeAt(re(this.state.startLoc, 1)), e = this.state.value;
      return this.next(), t.id = this.createIdentifier(r, e), this.finishNode(t, "PrivateName");
    }
    parseFunctionOrFunctionSent() {
      let t = this.startNode();
      if (this.next(), this.prodParam.hasYield && this.match(16)) {
        let r = this.createIdentifier(this.startNodeAtNode(t), "function");
        return this.next(), this.match(102) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(t, r, "sent");
      }
      return this.parseFunction(t);
    }
    parseMetaProperty(t, r, e) {
      t.meta = r;
      let s = this.state.containsEsc;
      return t.property = this.parseIdentifier(true), (t.property.name !== e || s) && this.raise(p.UnsupportedMetaProperty, { at: t.property, target: r.name, onlyValidPropertyName: e }), this.finishNode(t, "MetaProperty");
    }
    parseImportMetaProperty(t) {
      let r = this.createIdentifier(this.startNodeAtNode(t), "import");
      return this.next(), this.isContextual(100) && (this.inModule || this.raise(p.ImportMetaOutsideModule, { at: r }), this.sawUnambiguousESM = true), this.parseMetaProperty(t, r, "meta");
    }
    parseLiteralAtNode(t, r, e) {
      return this.addExtra(e, "rawValue", t), this.addExtra(e, "raw", this.input.slice(e.start, this.state.end)), e.value = t, this.next(), this.finishNode(e, r);
    }
    parseLiteral(t, r) {
      let e = this.startNode();
      return this.parseLiteralAtNode(t, r, e);
    }
    parseStringLiteral(t) {
      return this.parseLiteral(t, "StringLiteral");
    }
    parseNumericLiteral(t) {
      return this.parseLiteral(t, "NumericLiteral");
    }
    parseBigIntLiteral(t) {
      return this.parseLiteral(t, "BigIntLiteral");
    }
    parseDecimalLiteral(t) {
      return this.parseLiteral(t, "DecimalLiteral");
    }
    parseRegExpLiteral(t) {
      let r = this.parseLiteral(t.value, "RegExpLiteral");
      return r.pattern = t.pattern, r.flags = t.flags, r;
    }
    parseBooleanLiteral(t) {
      let r = this.startNode();
      return r.value = t, this.next(), this.finishNode(r, "BooleanLiteral");
    }
    parseNullLiteral() {
      let t = this.startNode();
      return this.next(), this.finishNode(t, "NullLiteral");
    }
    parseParenAndDistinguishExpression(t) {
      let r = this.state.startLoc, e;
      this.next(), this.expressionScope.enter(Il());
      let s = this.state.maybeInArrowParameters, i = this.state.inFSharpPipelineDirectBody;
      this.state.maybeInArrowParameters = true, this.state.inFSharpPipelineDirectBody = false;
      let a = this.state.startLoc, n = [], o = new wt(), u = true, c, y;
      for (; !this.match(11); ) {
        if (u)
          u = false;
        else if (this.expect(12, o.optionalParametersLoc === null ? null : o.optionalParametersLoc), this.match(11)) {
          y = this.state.startLoc;
          break;
        }
        if (this.match(21)) {
          let C = this.state.startLoc;
          if (c = this.state.startLoc, n.push(this.parseParenItem(this.parseRestBinding(), C)), !this.checkCommaAfterRest(41))
            break;
        } else
          n.push(this.parseMaybeAssignAllowIn(o, this.parseParenItem));
      }
      let g = this.state.lastTokEndLoc;
      this.expect(11), this.state.maybeInArrowParameters = s, this.state.inFSharpPipelineDirectBody = i;
      let T = this.startNodeAt(r);
      return t && this.shouldParseArrow(n) && (T = this.parseArrow(T)) ? (this.checkDestructuringPrivate(o), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(T, n, false), T) : (this.expressionScope.exit(), n.length || this.unexpected(this.state.lastTokStartLoc), y && this.unexpected(y), c && this.unexpected(c), this.checkExpressionErrors(o, true), this.toReferencedListDeep(n, true), n.length > 1 ? (e = this.startNodeAt(a), e.expressions = n, this.finishNode(e, "SequenceExpression"), this.resetEndLocation(e, g)) : e = n[0], this.wrapParenthesis(r, e));
    }
    wrapParenthesis(t, r) {
      if (!this.options.createParenthesizedExpressions)
        return this.addExtra(r, "parenthesized", true), this.addExtra(r, "parenStart", t.index), this.takeSurroundingComments(r, t.index, this.state.lastTokEndLoc.index), r;
      let e = this.startNodeAt(t);
      return e.expression = r, this.finishNode(e, "ParenthesizedExpression");
    }
    shouldParseArrow(t) {
      return !this.canInsertSemicolon();
    }
    parseArrow(t) {
      if (this.eat(19))
        return t;
    }
    parseParenItem(t, r) {
      return t;
    }
    parseNewOrNewTarget() {
      let t = this.startNode();
      if (this.next(), this.match(16)) {
        let r = this.createIdentifier(this.startNodeAtNode(t), "new");
        this.next();
        let e = this.parseMetaProperty(t, r, "target");
        return !this.scope.inNonArrowFunction && !this.scope.inClass && !this.options.allowNewTargetOutsideFunction && this.raise(p.UnexpectedNewTarget, { at: e }), e;
      }
      return this.parseNew(t);
    }
    parseNew(t) {
      if (this.parseNewCallee(t), this.eat(10)) {
        let r = this.parseExprList(11);
        this.toReferencedList(r), t.arguments = r;
      } else
        t.arguments = [];
      return this.finishNode(t, "NewExpression");
    }
    parseNewCallee(t) {
      t.callee = this.parseNoCallExpr(), t.callee.type === "Import" && this.raise(p.ImportCallNotNewExpression, { at: t.callee });
    }
    parseTemplateElement(t) {
      let { start: r, startLoc: e, end: s, value: i } = this.state, a = r + 1, n = this.startNodeAt(re(e, 1));
      i === null && (t || this.raise(p.InvalidEscapeSequenceTemplate, { at: re(this.state.firstInvalidTemplateEscapePos, 1) }));
      let o = this.match(24), u = o ? -1 : -2, c = s + u;
      n.value = { raw: this.input.slice(a, c).replace(/\r\n?/g, `
`), cooked: i === null ? null : i.slice(1, u) }, n.tail = o, this.next();
      let y = this.finishNode(n, "TemplateElement");
      return this.resetEndLocation(y, re(this.state.lastTokEndLoc, u)), y;
    }
    parseTemplate(t) {
      let r = this.startNode();
      r.expressions = [];
      let e = this.parseTemplateElement(t);
      for (r.quasis = [e]; !e.tail; )
        r.expressions.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), r.quasis.push(e = this.parseTemplateElement(t));
      return this.finishNode(r, "TemplateLiteral");
    }
    parseTemplateSubstitution() {
      return this.parseExpression();
    }
    parseObjectLike(t, r, e, s) {
      e && this.expectPlugin("recordAndTuple");
      let i = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = false;
      let a = /* @__PURE__ */ Object.create(null), n = true, o = this.startNode();
      for (o.properties = [], this.next(); !this.match(t); ) {
        if (n)
          n = false;
        else if (this.expect(12), this.match(t)) {
          this.addTrailingCommaExtraToNode(o);
          break;
        }
        let c;
        r ? c = this.parseBindingProperty() : (c = this.parsePropertyDefinition(s), this.checkProto(c, e, a, s)), e && !this.isObjectProperty(c) && c.type !== "SpreadElement" && this.raise(p.InvalidRecordProperty, { at: c }), c.shorthand && this.addExtra(c, "shorthand", true), o.properties.push(c);
      }
      this.next(), this.state.inFSharpPipelineDirectBody = i;
      let u = "ObjectExpression";
      return r ? u = "ObjectPattern" : e && (u = "RecordExpression"), this.finishNode(o, u);
    }
    addTrailingCommaExtraToNode(t) {
      this.addExtra(t, "trailingComma", this.state.lastTokStart), this.addExtra(t, "trailingCommaLoc", this.state.lastTokStartLoc, false);
    }
    maybeAsyncOrAccessorProp(t) {
      return !t.computed && t.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
    }
    parsePropertyDefinition(t) {
      let r = [];
      if (this.match(26))
        for (this.hasPlugin("decorators") && this.raise(p.UnsupportedPropertyDecorator, { at: this.state.startLoc }); this.match(26); )
          r.push(this.parseDecorator());
      let e = this.startNode(), s = false, i = false, a;
      if (this.match(21))
        return r.length && this.unexpected(), this.parseSpread();
      r.length && (e.decorators = r, r = []), e.method = false, t && (a = this.state.startLoc);
      let n = this.eat(55);
      this.parsePropertyNamePrefixOperator(e);
      let o = this.state.containsEsc, u = this.parsePropertyName(e, t);
      if (!n && !o && this.maybeAsyncOrAccessorProp(e)) {
        let c = u.name;
        c === "async" && !this.hasPrecedingLineBreak() && (s = true, this.resetPreviousNodeTrailingComments(u), n = this.eat(55), this.parsePropertyName(e)), (c === "get" || c === "set") && (i = true, this.resetPreviousNodeTrailingComments(u), e.kind = c, this.match(55) && (n = true, this.raise(p.AccessorIsGenerator, { at: this.state.curPosition(), kind: c }), this.next()), this.parsePropertyName(e));
      }
      return this.parseObjPropValue(e, a, n, s, false, i, t);
    }
    getGetterSetterExpectedParamCount(t) {
      return t.kind === "get" ? 0 : 1;
    }
    getObjectOrClassMethodParams(t) {
      return t.params;
    }
    checkGetterSetterParams(t) {
      var r;
      let e = this.getGetterSetterExpectedParamCount(t), s = this.getObjectOrClassMethodParams(t);
      s.length !== e && this.raise(t.kind === "get" ? p.BadGetterArity : p.BadSetterArity, { at: t }), t.kind === "set" && ((r = s[s.length - 1]) == null ? void 0 : r.type) === "RestElement" && this.raise(p.BadSetterRestParameter, { at: t });
    }
    parseObjectMethod(t, r, e, s, i) {
      if (i) {
        let a = this.parseMethod(t, r, false, false, false, "ObjectMethod");
        return this.checkGetterSetterParams(a), a;
      }
      if (e || r || this.match(10))
        return s && this.unexpected(), t.kind = "method", t.method = true, this.parseMethod(t, r, e, false, false, "ObjectMethod");
    }
    parseObjectProperty(t, r, e, s) {
      if (t.shorthand = false, this.eat(14))
        return t.value = e ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowIn(s), this.finishNode(t, "ObjectProperty");
      if (!t.computed && t.key.type === "Identifier") {
        if (this.checkReservedWord(t.key.name, t.key.loc.start, true, false), e)
          t.value = this.parseMaybeDefault(r, Te(t.key));
        else if (this.match(29)) {
          let i = this.state.startLoc;
          s != null ? s.shorthandAssignLoc === null && (s.shorthandAssignLoc = i) : this.raise(p.InvalidCoverInitializedName, { at: i }), t.value = this.parseMaybeDefault(r, Te(t.key));
        } else
          t.value = Te(t.key);
        return t.shorthand = true, this.finishNode(t, "ObjectProperty");
      }
    }
    parseObjPropValue(t, r, e, s, i, a, n) {
      let o = this.parseObjectMethod(t, e, s, i, a) || this.parseObjectProperty(t, r, i, n);
      return o || this.unexpected(), o;
    }
    parsePropertyName(t, r) {
      if (this.eat(0))
        t.computed = true, t.key = this.parseMaybeAssignAllowIn(), this.expect(3);
      else {
        let { type: e, value: s } = this.state, i;
        if (se(e))
          i = this.parseIdentifier(true);
        else
          switch (e) {
            case 132:
              i = this.parseNumericLiteral(s);
              break;
            case 131:
              i = this.parseStringLiteral(s);
              break;
            case 133:
              i = this.parseBigIntLiteral(s);
              break;
            case 134:
              i = this.parseDecimalLiteral(s);
              break;
            case 136: {
              let a = this.state.startLoc;
              r != null ? r.privateKeyLoc === null && (r.privateKeyLoc = a) : this.raise(p.UnexpectedPrivateField, { at: a }), i = this.parsePrivateName();
              break;
            }
            default:
              this.unexpected();
          }
        t.key = i, e !== 136 && (t.computed = false);
      }
      return t.key;
    }
    initFunction(t, r) {
      t.id = null, t.generator = false, t.async = r;
    }
    parseMethod(t, r, e, s, i, a) {
      let n = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false;
      this.initFunction(t, e), t.generator = r, this.scope.enter(Ae | dt | (n ? Ne : 0) | (i ? Cr : 0)), this.prodParam.enter(St(e, t.generator)), this.parseFunctionParams(t, s);
      let o = this.parseFunctionBodyAndFinish(t, a, true);
      return this.prodParam.exit(), this.scope.exit(), o;
    }
    parseArrayLike(t, r, e, s) {
      e && this.expectPlugin("recordAndTuple");
      let i = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = false;
      let a = this.startNode();
      return this.next(), a.elements = this.parseExprList(t, !e, s, a), this.state.inFSharpPipelineDirectBody = i, this.finishNode(a, e ? "TupleExpression" : "ArrayExpression");
    }
    parseArrowExpression(t, r, e, s) {
      this.scope.enter(Ae | es);
      let i = St(e, false);
      !this.match(5) && this.prodParam.hasIn && (i |= Ve), this.prodParam.enter(i), this.initFunction(t, e);
      let a = this.state.maybeInArrowParameters;
      return r && (this.state.maybeInArrowParameters = true, this.setArrowFunctionParameters(t, r, s)), this.state.maybeInArrowParameters = false, this.parseFunctionBody(t, true), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = a, this.finishNode(t, "ArrowFunctionExpression");
    }
    setArrowFunctionParameters(t, r, e) {
      this.toAssignableList(r, e, false), t.params = r;
    }
    parseFunctionBodyAndFinish(t, r) {
      let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      return this.parseFunctionBody(t, false, e), this.finishNode(t, r);
    }
    parseFunctionBody(t, r) {
      let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, s = r && !this.match(5);
      if (this.expressionScope.enter($r()), s)
        t.body = this.parseMaybeAssign(), this.checkParams(t, false, r, false);
      else {
        let i = this.state.strict, a = this.state.labels;
        this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | zr), t.body = this.parseBlock(true, false, (n) => {
          let o = !this.isSimpleParamList(t.params);
          n && o && this.raise(p.IllegalLanguageModeDirective, { at: (t.kind === "method" || t.kind === "constructor") && t.key ? t.key.loc.end : t });
          let u = !i && this.state.strict;
          this.checkParams(t, !this.state.strict && !r && !e && !o, r, u), this.state.strict && t.id && this.checkIdentifier(t.id, tl, u);
        }), this.prodParam.exit(), this.state.labels = a;
      }
      this.expressionScope.exit();
    }
    isSimpleParameter(t) {
      return t.type === "Identifier";
    }
    isSimpleParamList(t) {
      for (let r = 0, e = t.length; r < e; r++)
        if (!this.isSimpleParameter(t[r]))
          return false;
      return true;
    }
    checkParams(t, r, e) {
      let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i = !r && /* @__PURE__ */ new Set(), a = { type: "FormalParameters" };
      for (let n of t.params)
        this.checkLVal(n, { in: a, binding: At, checkClashes: i, strictModeChanged: s });
    }
    parseExprList(t, r, e, s) {
      let i = [], a = true;
      for (; !this.eat(t); ) {
        if (a)
          a = false;
        else if (this.expect(12), this.match(t)) {
          s && this.addTrailingCommaExtraToNode(s), this.next();
          break;
        }
        i.push(this.parseExprListItem(r, e));
      }
      return i;
    }
    parseExprListItem(t, r, e) {
      let s;
      if (this.match(12))
        t || this.raise(p.UnexpectedToken, { at: this.state.curPosition(), unexpected: "," }), s = null;
      else if (this.match(21)) {
        let i = this.state.startLoc;
        s = this.parseParenItem(this.parseSpread(r), i);
      } else if (this.match(17)) {
        this.expectPlugin("partialApplication"), e || this.raise(p.UnexpectedArgumentPlaceholder, { at: this.state.startLoc });
        let i = this.startNode();
        this.next(), s = this.finishNode(i, "ArgumentPlaceholder");
      } else
        s = this.parseMaybeAssignAllowIn(r, this.parseParenItem);
      return s;
    }
    parseIdentifier(t) {
      let r = this.startNode(), e = this.parseIdentifierName(t);
      return this.createIdentifier(r, e);
    }
    createIdentifier(t, r) {
      return t.name = r, t.loc.identifierName = r, this.finishNode(t, "Identifier");
    }
    parseIdentifierName(t) {
      let r, { startLoc: e, type: s } = this.state;
      se(s) ? r = this.state.value : this.unexpected();
      let i = ae(s);
      return t ? i && this.replaceToken(130) : this.checkReservedWord(r, e, i, false), this.next(), r;
    }
    checkReservedWord(t, r, e, s) {
      if (t.length > 10 || !Yo(t))
        return;
      if (e && Go(t)) {
        this.raise(p.UnexpectedKeyword, { at: r, keyword: t });
        return;
      }
      if ((this.state.strict ? s ? vr : Ar : Pr)(t, this.inModule)) {
        this.raise(p.UnexpectedReservedWord, { at: r, reservedWord: t });
        return;
      } else if (t === "yield") {
        if (this.prodParam.hasYield) {
          this.raise(p.YieldBindingIdentifier, { at: r });
          return;
        }
      } else if (t === "await") {
        if (this.prodParam.hasAwait) {
          this.raise(p.AwaitBindingIdentifier, { at: r });
          return;
        }
        if (this.scope.inStaticBlock) {
          this.raise(p.AwaitBindingIdentifierInStaticBlock, { at: r });
          return;
        }
        this.expressionScope.recordAsyncArrowParametersError({ at: r });
      } else if (t === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
        this.raise(p.ArgumentsInClass, { at: r });
        return;
      }
    }
    isAwaitAllowed() {
      return !!(this.prodParam.hasAwait || this.options.allowAwaitOutsideFunction && !this.scope.inFunction);
    }
    parseAwait(t) {
      let r = this.startNodeAt(t);
      return this.expressionScope.recordParameterInitializerError(p.AwaitExpressionFormalParameter, { at: r }), this.eat(55) && this.raise(p.ObsoleteAwaitStar, { at: r }), !this.scope.inFunction && !this.options.allowAwaitOutsideFunction && (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = true : this.sawUnambiguousESM = true), this.state.soloAwait || (r.argument = this.parseMaybeUnary(null, true)), this.finishNode(r, "AwaitExpression");
    }
    isAmbiguousAwait() {
      if (this.hasPrecedingLineBreak())
        return true;
      let { type: t } = this.state;
      return t === 53 || t === 10 || t === 0 || ct(t) || t === 101 && !this.state.containsEsc || t === 135 || t === 56 || this.hasPlugin("v8intrinsic") && t === 54;
    }
    parseYield() {
      let t = this.startNode();
      this.expressionScope.recordParameterInitializerError(p.YieldInParameter, { at: t }), this.next();
      let r = false, e = null;
      if (!this.hasPrecedingLineBreak())
        switch (r = this.eat(55), this.state.type) {
          case 13:
          case 137:
          case 8:
          case 11:
          case 3:
          case 9:
          case 14:
          case 12:
            if (!r)
              break;
          default:
            e = this.parseMaybeAssign();
        }
      return t.delegate = r, t.argument = e, this.finishNode(t, "YieldExpression");
    }
    checkPipelineAtInfixOperator(t, r) {
      this.hasPlugin(["pipelineOperator", { proposal: "smart" }]) && t.type === "SequenceExpression" && this.raise(p.PipelineHeadSequenceExpression, { at: r });
    }
    parseSmartPipelineBodyInStyle(t, r) {
      if (this.isSimpleReference(t)) {
        let e = this.startNodeAt(r);
        return e.callee = t, this.finishNode(e, "PipelineBareFunction");
      } else {
        let e = this.startNodeAt(r);
        return this.checkSmartPipeTopicBodyEarlyErrors(r), e.expression = t, this.finishNode(e, "PipelineTopicExpression");
      }
    }
    isSimpleReference(t) {
      switch (t.type) {
        case "MemberExpression":
          return !t.computed && this.isSimpleReference(t.object);
        case "Identifier":
          return true;
        default:
          return false;
      }
    }
    checkSmartPipeTopicBodyEarlyErrors(t) {
      if (this.match(19))
        throw this.raise(p.PipelineBodyNoArrow, { at: this.state.startLoc });
      this.topicReferenceWasUsedInCurrentContext() || this.raise(p.PipelineTopicUnused, { at: t });
    }
    withTopicBindingContext(t) {
      let r = this.state.topicContext;
      this.state.topicContext = { maxNumOfResolvableTopics: 1, maxTopicIndex: null };
      try {
        return t();
      } finally {
        this.state.topicContext = r;
      }
    }
    withSmartMixTopicForbiddingContext(t) {
      if (this.hasPlugin(["pipelineOperator", { proposal: "smart" }])) {
        let r = this.state.topicContext;
        this.state.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null };
        try {
          return t();
        } finally {
          this.state.topicContext = r;
        }
      } else
        return t();
    }
    withSoloAwaitPermittingContext(t) {
      let r = this.state.soloAwait;
      this.state.soloAwait = true;
      try {
        return t();
      } finally {
        this.state.soloAwait = r;
      }
    }
    allowInAnd(t) {
      let r = this.prodParam.currentFlags();
      if (Ve & ~r) {
        this.prodParam.enter(r | Ve);
        try {
          return t();
        } finally {
          this.prodParam.exit();
        }
      }
      return t();
    }
    disallowInAnd(t) {
      let r = this.prodParam.currentFlags();
      if (Ve & r) {
        this.prodParam.enter(r & ~Ve);
        try {
          return t();
        } finally {
          this.prodParam.exit();
        }
      }
      return t();
    }
    registerTopicReference() {
      this.state.topicContext.maxTopicIndex = 0;
    }
    topicReferenceIsAllowedInCurrentContext() {
      return this.state.topicContext.maxNumOfResolvableTopics >= 1;
    }
    topicReferenceWasUsedInCurrentContext() {
      return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
    }
    parseFSharpPipelineBody(t) {
      let r = this.state.startLoc;
      this.state.potentialArrowAt = this.state.start;
      let e = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = true;
      let s = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), r, t);
      return this.state.inFSharpPipelineDirectBody = e, s;
    }
    parseModuleExpression() {
      this.expectPlugin("moduleBlocks");
      let t = this.startNode();
      this.next(), this.match(5) || this.unexpected(null, 5);
      let r = this.startNodeAt(this.state.endLoc);
      this.next();
      let e = this.initializeScopes(true);
      this.enterInitialScopes();
      try {
        t.body = this.parseProgram(r, 8, "module");
      } finally {
        e();
      }
      return this.finishNode(t, "ModuleExpression");
    }
    parsePropertyNamePrefixOperator(t) {
    }
  }, xs = { kind: "loop" }, nh = { kind: "switch" }, oh = /[\uD800-\uDFFF]/u, gs = /in(?:stanceof)?/y;
  function lh(t, r) {
    for (let e = 0; e < t.length; e++) {
      let s = t[e], { type: i } = s;
      if (typeof i == "number") {
        {
          if (i === 136) {
            let { loc: a, start: n, value: o, end: u } = s, c = n + 1, y = re(a.start, 1);
            t.splice(e, 1, new Se({ type: xe(27), value: "#", start: n, end: c, startLoc: a.start, endLoc: y }), new Se({ type: xe(130), value: o, start: c, end: u, startLoc: y, endLoc: a.end })), e++;
            continue;
          }
          if (ct(i)) {
            let { loc: a, start: n, value: o, end: u } = s, c = n + 1, y = re(a.start, 1), g;
            r.charCodeAt(n) === 96 ? g = new Se({ type: xe(22), value: "`", start: n, end: c, startLoc: a.start, endLoc: y }) : g = new Se({ type: xe(8), value: "}", start: n, end: c, startLoc: a.start, endLoc: y });
            let T, C, j, q;
            i === 24 ? (C = u - 1, j = re(a.end, -1), T = o === null ? null : o.slice(1, -1), q = new Se({ type: xe(22), value: "`", start: C, end: u, startLoc: j, endLoc: a.end })) : (C = u - 2, j = re(a.end, -2), T = o === null ? null : o.slice(1, -2), q = new Se({ type: xe(23), value: "${", start: C, end: u, startLoc: j, endLoc: a.end })), t.splice(e, 1, g, new Se({ type: xe(20), value: T, start: c, end: C, startLoc: y, endLoc: j }), q), e += 2;
            continue;
          }
        }
        s.type = xe(i);
      }
    }
    return t;
  }
  var hh = class extends ah {
    parseTopLevel(t, r) {
      return t.program = this.parseProgram(r), t.comments = this.state.comments, this.options.tokens && (t.tokens = lh(this.tokens, this.input)), this.finishNode(t, "File");
    }
    parseProgram(t) {
      let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 137, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.options.sourceType;
      if (t.sourceType = e, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, true, true, r), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
        for (let [i, a] of Array.from(this.scope.undefinedExports))
          this.raise(p.ModuleExportUndefined, { at: a, localName: i });
      let s;
      return r === 137 ? s = this.finishNode(t, "Program") : s = this.finishNodeAt(t, "Program", re(this.state.startLoc, -1)), s;
    }
    stmtToDirective(t) {
      let r = t;
      r.type = "Directive", r.value = r.expression, delete r.expression;
      let e = r.value, s = e.value, i = this.input.slice(e.start, e.end), a = e.value = i.slice(1, -1);
      return this.addExtra(e, "raw", i), this.addExtra(e, "rawValue", a), this.addExtra(e, "expressionValue", s), e.type = "DirectiveLiteral", r;
    }
    parseInterpreterDirective() {
      if (!this.match(28))
        return null;
      let t = this.startNode();
      return t.value = this.state.value, this.next(), this.finishNode(t, "InterpreterDirective");
    }
    isLet() {
      return this.isContextual(99) ? this.hasFollowingBindingAtom() : false;
    }
    chStartsBindingIdentifier(t, r) {
      if (Pe(t)) {
        if (gs.lastIndex = r, gs.test(this.input)) {
          let e = this.codePointAtPos(gs.lastIndex);
          if (!je(e) && e !== 92)
            return false;
        }
        return true;
      } else
        return t === 92;
    }
    chStartsBindingPattern(t) {
      return t === 91 || t === 123;
    }
    hasFollowingBindingAtom() {
      let t = this.nextTokenStart(), r = this.codePointAtPos(t);
      return this.chStartsBindingPattern(r) || this.chStartsBindingIdentifier(r, t);
    }
    hasFollowingBindingIdentifier() {
      let t = this.nextTokenStart(), r = this.codePointAtPos(t);
      return this.chStartsBindingIdentifier(r, t);
    }
    startsUsingForOf() {
      let t = this.lookahead();
      return t.type === 101 && !t.containsEsc ? false : (this.expectPlugin("explicitResourceManagement"), true);
    }
    parseModuleItem() {
      return this.parseStatementLike(15);
    }
    parseStatementListItem() {
      return this.parseStatementLike(6 | (!this.options.annexB || this.state.strict ? 0 : 8));
    }
    parseStatementOrSloppyAnnexBFunctionDeclaration() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, r = 0;
      return this.options.annexB && !this.state.strict && (r |= 4, t && (r |= 8)), this.parseStatementLike(r);
    }
    parseStatement() {
      return this.parseStatementLike(0);
    }
    parseStatementLike(t) {
      let r = null;
      return this.match(26) && (r = this.parseDecorators(true)), this.parseStatementContent(t, r);
    }
    parseStatementContent(t, r) {
      let e = this.state.type, s = this.startNode(), i = !!(t & 2), a = !!(t & 4), n = t & 1;
      switch (e) {
        case 60:
          return this.parseBreakContinueStatement(s, true);
        case 63:
          return this.parseBreakContinueStatement(s, false);
        case 64:
          return this.parseDebuggerStatement(s);
        case 90:
          return this.parseDoWhileStatement(s);
        case 91:
          return this.parseForStatement(s);
        case 68:
          if (this.lookaheadCharCode() === 46)
            break;
          return a || this.raise(this.state.strict ? p.StrictFunction : this.options.annexB ? p.SloppyFunctionAnnexB : p.SloppyFunction, { at: this.state.startLoc }), this.parseFunctionStatement(s, false, !i && a);
        case 80:
          return i || this.unexpected(), this.parseClass(this.maybeTakeDecorators(r, s), true);
        case 69:
          return this.parseIfStatement(s);
        case 70:
          return this.parseReturnStatement(s);
        case 71:
          return this.parseSwitchStatement(s);
        case 72:
          return this.parseThrowStatement(s);
        case 73:
          return this.parseTryStatement(s);
        case 105:
          if (this.hasFollowingLineBreak() || this.state.containsEsc || !this.hasFollowingBindingIdentifier())
            break;
          return this.expectPlugin("explicitResourceManagement"), !this.scope.inModule && this.scope.inTopLevel ? this.raise(p.UnexpectedUsingDeclaration, { at: this.state.startLoc }) : i || this.raise(p.UnexpectedLexicalDeclaration, { at: this.state.startLoc }), this.parseVarStatement(s, "using");
        case 99: {
          if (this.state.containsEsc)
            break;
          let c = this.nextTokenStart(), y = this.codePointAtPos(c);
          if (y !== 91 && (!i && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(y, c) && y !== 123))
            break;
        }
        case 75:
          i || this.raise(p.UnexpectedLexicalDeclaration, { at: this.state.startLoc });
        case 74: {
          let c = this.state.value;
          return this.parseVarStatement(s, c);
        }
        case 92:
          return this.parseWhileStatement(s);
        case 76:
          return this.parseWithStatement(s);
        case 5:
          return this.parseBlock();
        case 13:
          return this.parseEmptyStatement(s);
        case 83: {
          let c = this.lookaheadCharCode();
          if (c === 40 || c === 46)
            break;
        }
        case 82: {
          !this.options.allowImportExportEverywhere && !n && this.raise(p.UnexpectedImportExport, { at: this.state.startLoc }), this.next();
          let c;
          return e === 83 ? (c = this.parseImport(s), c.type === "ImportDeclaration" && (!c.importKind || c.importKind === "value") && (this.sawUnambiguousESM = true)) : (c = this.parseExport(s, r), (c.type === "ExportNamedDeclaration" && (!c.exportKind || c.exportKind === "value") || c.type === "ExportAllDeclaration" && (!c.exportKind || c.exportKind === "value") || c.type === "ExportDefaultDeclaration") && (this.sawUnambiguousESM = true)), this.assertModuleNodeAllowed(c), c;
        }
        default:
          if (this.isAsyncFunction())
            return i || this.raise(p.AsyncFunctionInSingleStatementContext, { at: this.state.startLoc }), this.next(), this.parseFunctionStatement(s, true, !i && a);
      }
      let o = this.state.value, u = this.parseExpression();
      return R(e) && u.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(s, o, u, t) : this.parseExpressionStatement(s, u, r);
    }
    assertModuleNodeAllowed(t) {
      !this.options.allowImportExportEverywhere && !this.inModule && this.raise(p.ImportOutsideModule, { at: t });
    }
    decoratorsEnabledBeforeExport() {
      return this.hasPlugin("decorators-legacy") ? true : this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") !== false;
    }
    maybeTakeDecorators(t, r, e) {
      return t && (r.decorators && r.decorators.length > 0 ? (typeof this.getPluginOption("decorators", "decoratorsBeforeExport") != "boolean" && this.raise(p.DecoratorsBeforeAfterExport, { at: r.decorators[0] }), r.decorators.unshift(...t)) : r.decorators = t, this.resetStartLocationFromNode(r, t[0]), e && this.resetStartLocationFromNode(e, r)), r;
    }
    canHaveLeadingDecorator() {
      return this.match(80);
    }
    parseDecorators(t) {
      let r = [];
      do
        r.push(this.parseDecorator());
      while (this.match(26));
      if (this.match(82))
        t || this.unexpected(), this.decoratorsEnabledBeforeExport() || this.raise(p.DecoratorExportClass, { at: this.state.startLoc });
      else if (!this.canHaveLeadingDecorator())
        throw this.raise(p.UnexpectedLeadingDecorator, { at: this.state.startLoc });
      return r;
    }
    parseDecorator() {
      this.expectOnePlugin(["decorators", "decorators-legacy"]);
      let t = this.startNode();
      if (this.next(), this.hasPlugin("decorators")) {
        let r = this.state.startLoc, e;
        if (this.match(10)) {
          let s = this.state.startLoc;
          this.next(), e = this.parseExpression(), this.expect(11), e = this.wrapParenthesis(s, e);
          let i = this.state.startLoc;
          t.expression = this.parseMaybeDecoratorArguments(e), this.getPluginOption("decorators", "allowCallParenthesized") === false && t.expression !== e && this.raise(p.DecoratorArgumentsOutsideParentheses, { at: i });
        } else {
          for (e = this.parseIdentifier(false); this.eat(16); ) {
            let s = this.startNodeAt(r);
            s.object = e, this.match(136) ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc), s.property = this.parsePrivateName()) : s.property = this.parseIdentifier(true), s.computed = false, e = this.finishNode(s, "MemberExpression");
          }
          t.expression = this.parseMaybeDecoratorArguments(e);
        }
      } else
        t.expression = this.parseExprSubscripts();
      return this.finishNode(t, "Decorator");
    }
    parseMaybeDecoratorArguments(t) {
      if (this.eat(10)) {
        let r = this.startNodeAtNode(t);
        return r.callee = t, r.arguments = this.parseCallExpressionArguments(11, false), this.toReferencedList(r.arguments), this.finishNode(r, "CallExpression");
      }
      return t;
    }
    parseBreakContinueStatement(t, r) {
      return this.next(), this.isLineTerminator() ? t.label = null : (t.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(t, r), this.finishNode(t, r ? "BreakStatement" : "ContinueStatement");
    }
    verifyBreakContinue(t, r) {
      let e;
      for (e = 0; e < this.state.labels.length; ++e) {
        let s = this.state.labels[e];
        if ((t.label == null || s.name === t.label.name) && (s.kind != null && (r || s.kind === "loop") || t.label && r))
          break;
      }
      if (e === this.state.labels.length) {
        let s = r ? "BreakStatement" : "ContinueStatement";
        this.raise(p.IllegalBreakContinue, { at: t, type: s });
      }
    }
    parseDebuggerStatement(t) {
      return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
    }
    parseHeaderExpression() {
      this.expect(10);
      let t = this.parseExpression();
      return this.expect(11), t;
    }
    parseDoWhileStatement(t) {
      return this.next(), this.state.labels.push(xs), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.expect(92), t.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t, "DoWhileStatement");
    }
    parseForStatement(t) {
      this.next(), this.state.labels.push(xs);
      let r = null;
      if (this.isAwaitAllowed() && this.eatContextual(96) && (r = this.state.lastTokStartLoc), this.scope.enter(qe), this.expect(10), this.match(13))
        return r !== null && this.unexpected(r), this.parseFor(t, null);
      let e = this.isContextual(99), s = this.isContextual(105) && !this.hasFollowingLineBreak(), i = e && this.hasFollowingBindingAtom() || s && this.hasFollowingBindingIdentifier() && this.startsUsingForOf();
      if (this.match(74) || this.match(75) || i) {
        let c = this.startNode(), y = this.state.value;
        this.next(), this.parseVar(c, true, y);
        let g = this.finishNode(c, "VariableDeclaration"), T = this.match(58);
        return T && s && this.raise(p.ForInUsing, { at: g }), (T || this.isContextual(101)) && g.declarations.length === 1 ? this.parseForIn(t, g, r) : (r !== null && this.unexpected(r), this.parseFor(t, g));
      }
      let a = this.isContextual(95), n = new wt(), o = this.parseExpression(true, n), u = this.isContextual(101);
      if (u && (e && this.raise(p.ForOfLet, { at: o }), r === null && a && o.type === "Identifier" && this.raise(p.ForOfAsync, { at: o })), u || this.match(58)) {
        this.checkDestructuringPrivate(n), this.toAssignable(o, true);
        let c = u ? "ForOfStatement" : "ForInStatement";
        return this.checkLVal(o, { in: { type: c } }), this.parseForIn(t, o, r);
      } else
        this.checkExpressionErrors(n, true);
      return r !== null && this.unexpected(r), this.parseFor(t, o);
    }
    parseFunctionStatement(t, r, e) {
      return this.next(), this.parseFunction(t, 1 | (e ? 2 : 0) | (r ? 8 : 0));
    }
    parseIfStatement(t) {
      return this.next(), t.test = this.parseHeaderExpression(), t.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration(), t.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null, this.finishNode(t, "IfStatement");
    }
    parseReturnStatement(t) {
      return !this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction && this.raise(p.IllegalReturn, { at: this.state.startLoc }), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
    }
    parseSwitchStatement(t) {
      this.next(), t.discriminant = this.parseHeaderExpression();
      let r = t.cases = [];
      this.expect(5), this.state.labels.push(nh), this.scope.enter(qe);
      let e;
      for (let s; !this.match(8); )
        if (this.match(61) || this.match(65)) {
          let i = this.match(61);
          e && this.finishNode(e, "SwitchCase"), r.push(e = this.startNode()), e.consequent = [], this.next(), i ? e.test = this.parseExpression() : (s && this.raise(p.MultipleDefaultsInSwitch, { at: this.state.lastTokStartLoc }), s = true, e.test = null), this.expect(14);
        } else
          e ? e.consequent.push(this.parseStatementListItem()) : this.unexpected();
      return this.scope.exit(), e && this.finishNode(e, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement");
    }
    parseThrowStatement(t) {
      return this.next(), this.hasPrecedingLineBreak() && this.raise(p.NewlineAfterThrow, { at: this.state.lastTokEndLoc }), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
    }
    parseCatchClauseParam() {
      let t = this.parseBindingAtom();
      return this.scope.enter(this.options.annexB && t.type === "Identifier" ? Er : 0), this.checkLVal(t, { in: { type: "CatchClause" }, binding: Qo }), t;
    }
    parseTryStatement(t) {
      if (this.next(), t.block = this.parseBlock(), t.handler = null, this.match(62)) {
        let r = this.startNode();
        this.next(), this.match(10) ? (this.expect(10), r.param = this.parseCatchClauseParam(), this.expect(11)) : (r.param = null, this.scope.enter(qe)), r.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(false, false)), this.scope.exit(), t.handler = this.finishNode(r, "CatchClause");
      }
      return t.finalizer = this.eat(67) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(p.NoCatchOrFinally, { at: t }), this.finishNode(t, "TryStatement");
    }
    parseVarStatement(t, r) {
      let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      return this.next(), this.parseVar(t, false, r, e), this.semicolon(), this.finishNode(t, "VariableDeclaration");
    }
    parseWhileStatement(t) {
      return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(xs), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
    }
    parseWithStatement(t) {
      return this.state.strict && this.raise(p.StrictWith, { at: this.state.startLoc }), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.finishNode(t, "WithStatement");
    }
    parseEmptyStatement(t) {
      return this.next(), this.finishNode(t, "EmptyStatement");
    }
    parseLabeledStatement(t, r, e, s) {
      for (let a of this.state.labels)
        a.name === r && this.raise(p.LabelRedeclaration, { at: e, labelName: r });
      let i = oe(this.state.type) ? "loop" : this.match(71) ? "switch" : null;
      for (let a = this.state.labels.length - 1; a >= 0; a--) {
        let n = this.state.labels[a];
        if (n.statementStart === t.start)
          n.statementStart = this.state.start, n.kind = i;
        else
          break;
      }
      return this.state.labels.push({ name: r, kind: i, statementStart: this.state.start }), t.body = s & 8 ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(true) : this.parseStatement(), this.state.labels.pop(), t.label = e, this.finishNode(t, "LabeledStatement");
    }
    parseExpressionStatement(t, r, e) {
      return t.expression = r, this.semicolon(), this.finishNode(t, "ExpressionStatement");
    }
    parseBlock() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, e = arguments.length > 2 ? arguments[2] : void 0, s = this.startNode();
      return t && this.state.strictErrors.clear(), this.expect(5), r && this.scope.enter(qe), this.parseBlockBody(s, t, false, 8, e), r && this.scope.exit(), this.finishNode(s, "BlockStatement");
    }
    isValidDirective(t) {
      return t.type === "ExpressionStatement" && t.expression.type === "StringLiteral" && !t.expression.extra.parenthesized;
    }
    parseBlockBody(t, r, e, s, i) {
      let a = t.body = [], n = t.directives = [];
      this.parseBlockOrModuleBlockBody(a, r ? n : void 0, e, s, i);
    }
    parseBlockOrModuleBlockBody(t, r, e, s, i) {
      let a = this.state.strict, n = false, o = false;
      for (; !this.match(s); ) {
        let u = e ? this.parseModuleItem() : this.parseStatementListItem();
        if (r && !o) {
          if (this.isValidDirective(u)) {
            let c = this.stmtToDirective(u);
            r.push(c), !n && c.value.value === "use strict" && (n = true, this.setStrict(true));
            continue;
          }
          o = true, this.state.strictErrors.clear();
        }
        t.push(u);
      }
      i && i.call(this, n), a || this.setStrict(false), this.next();
    }
    parseFor(t, r) {
      return t.init = r, this.semicolon(false), t.test = this.match(13) ? null : this.parseExpression(), this.semicolon(false), t.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement");
    }
    parseForIn(t, r, e) {
      let s = this.match(58);
      return this.next(), s ? e !== null && this.unexpected(e) : t.await = e !== null, r.type === "VariableDeclaration" && r.declarations[0].init != null && (!s || !this.options.annexB || this.state.strict || r.kind !== "var" || r.declarations[0].id.type !== "Identifier") && this.raise(p.ForInOfLoopInitializer, { at: r, type: s ? "ForInStatement" : "ForOfStatement" }), r.type === "AssignmentPattern" && this.raise(p.InvalidLhs, { at: r, ancestor: { type: "ForStatement" } }), t.left = r, t.right = s ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, s ? "ForInStatement" : "ForOfStatement");
    }
    parseVar(t, r, e) {
      let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, i = t.declarations = [];
      for (t.kind = e; ; ) {
        let a = this.startNode();
        if (this.parseVarId(a, e), a.init = this.eat(29) ? r ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, a.init === null && !s && (a.id.type !== "Identifier" && !(r && (this.match(58) || this.isContextual(101))) ? this.raise(p.DeclarationMissingInitializer, { at: this.state.lastTokEndLoc, kind: "destructuring" }) : e === "const" && !(this.match(58) || this.isContextual(101)) && this.raise(p.DeclarationMissingInitializer, { at: this.state.lastTokEndLoc, kind: "const" })), i.push(this.finishNode(a, "VariableDeclarator")), !this.eat(12))
          break;
      }
      return t;
    }
    parseVarId(t, r) {
      r === "using" && !this.inModule && this.match(96) && this.raise(p.AwaitInUsingBinding, { at: this.state.startLoc });
      let e = this.parseBindingAtom();
      this.checkLVal(e, { in: { type: "VariableDeclarator" }, binding: r === "var" ? At : He }), t.id = e;
    }
    parseAsyncFunctionExpression(t) {
      return this.parseFunction(t, 8);
    }
    parseFunction(t) {
      let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = r & 2, s = !!(r & 1), i = s && !(r & 4), a = !!(r & 8);
      this.initFunction(t, a), this.match(55) && (e && this.raise(p.GeneratorInSingleStatementContext, { at: this.state.startLoc }), this.next(), t.generator = true), s && (t.id = this.parseFunctionId(i));
      let n = this.state.maybeInArrowParameters;
      return this.state.maybeInArrowParameters = false, this.scope.enter(Ae), this.prodParam.enter(St(a, t.generator)), s || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, false), this.withSmartMixTopicForbiddingContext(() => {
        this.parseFunctionBodyAndFinish(t, s ? "FunctionDeclaration" : "FunctionExpression");
      }), this.prodParam.exit(), this.scope.exit(), s && !e && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = n, t;
    }
    parseFunctionId(t) {
      return t || R(this.state.type) ? this.parseIdentifier() : null;
    }
    parseFunctionParams(t, r) {
      this.expect(10), this.expressionScope.enter(wl()), t.params = this.parseBindingList(11, 41, 2 | (r ? 4 : 0)), this.expressionScope.exit();
    }
    registerFunctionStatementId(t) {
      t.id && this.scope.declareName(t.id.name, !this.options.annexB || this.state.strict || t.generator || t.async ? this.scope.treatFunctionsAsVar ? At : He : Ir, t.id.loc.start);
    }
    parseClass(t, r, e) {
      this.next();
      let s = this.state.strict;
      return this.state.strict = true, this.parseClassId(t, r, e), this.parseClassSuper(t), t.body = this.parseClassBody(!!t.superClass, s), this.finishNode(t, r ? "ClassDeclaration" : "ClassExpression");
    }
    isClassProperty() {
      return this.match(29) || this.match(13) || this.match(8);
    }
    isClassMethod() {
      return this.match(10);
    }
    isNonstaticConstructor(t) {
      return !t.computed && !t.static && (t.key.name === "constructor" || t.key.value === "constructor");
    }
    parseClassBody(t, r) {
      this.classScope.enter();
      let e = { hadConstructor: false, hadSuperClass: t }, s = [], i = this.startNode();
      if (i.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
        for (; !this.match(8); ) {
          if (this.eat(13)) {
            if (s.length > 0)
              throw this.raise(p.DecoratorSemicolon, { at: this.state.lastTokEndLoc });
            continue;
          }
          if (this.match(26)) {
            s.push(this.parseDecorator());
            continue;
          }
          let a = this.startNode();
          s.length && (a.decorators = s, this.resetStartLocationFromNode(a, s[0]), s = []), this.parseClassMember(i, a, e), a.kind === "constructor" && a.decorators && a.decorators.length > 0 && this.raise(p.DecoratorConstructor, { at: a });
        }
      }), this.state.strict = r, this.next(), s.length)
        throw this.raise(p.TrailingDecorator, { at: this.state.startLoc });
      return this.classScope.exit(), this.finishNode(i, "ClassBody");
    }
    parseClassMemberFromModifier(t, r) {
      let e = this.parseIdentifier(true);
      if (this.isClassMethod()) {
        let s = r;
        return s.kind = "method", s.computed = false, s.key = e, s.static = false, this.pushClassMethod(t, s, false, false, false, false), true;
      } else if (this.isClassProperty()) {
        let s = r;
        return s.computed = false, s.key = e, s.static = false, t.body.push(this.parseClassProperty(s)), true;
      }
      return this.resetPreviousNodeTrailingComments(e), false;
    }
    parseClassMember(t, r, e) {
      let s = this.isContextual(104);
      if (s) {
        if (this.parseClassMemberFromModifier(t, r))
          return;
        if (this.eat(5)) {
          this.parseClassStaticBlock(t, r);
          return;
        }
      }
      this.parseClassMemberWithIsStatic(t, r, e, s);
    }
    parseClassMemberWithIsStatic(t, r, e, s) {
      let i = r, a = r, n = r, o = r, u = r, c = i, y = i;
      if (r.static = s, this.parsePropertyNamePrefixOperator(r), this.eat(55)) {
        c.kind = "method";
        let q = this.match(136);
        if (this.parseClassElementName(c), q) {
          this.pushClassPrivateMethod(t, a, true, false);
          return;
        }
        this.isNonstaticConstructor(i) && this.raise(p.ConstructorIsGenerator, { at: i.key }), this.pushClassMethod(t, i, true, false, false, false);
        return;
      }
      let g = R(this.state.type) && !this.state.containsEsc, T = this.match(136), C = this.parseClassElementName(r), j = this.state.startLoc;
      if (this.parsePostMemberNameModifiers(y), this.isClassMethod()) {
        if (c.kind = "method", T) {
          this.pushClassPrivateMethod(t, a, false, false);
          return;
        }
        let q = this.isNonstaticConstructor(i), G = false;
        q && (i.kind = "constructor", e.hadConstructor && !this.hasPlugin("typescript") && this.raise(p.DuplicateConstructor, { at: C }), q && this.hasPlugin("typescript") && r.override && this.raise(p.OverrideOnConstructor, { at: C }), e.hadConstructor = true, G = e.hadSuperClass), this.pushClassMethod(t, i, false, false, q, G);
      } else if (this.isClassProperty())
        T ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n);
      else if (g && C.name === "async" && !this.isLineTerminator()) {
        this.resetPreviousNodeTrailingComments(C);
        let q = this.eat(55);
        y.optional && this.unexpected(j), c.kind = "method";
        let G = this.match(136);
        this.parseClassElementName(c), this.parsePostMemberNameModifiers(y), G ? this.pushClassPrivateMethod(t, a, q, true) : (this.isNonstaticConstructor(i) && this.raise(p.ConstructorIsAsync, { at: i.key }), this.pushClassMethod(t, i, q, true, false, false));
      } else if (g && (C.name === "get" || C.name === "set") && !(this.match(55) && this.isLineTerminator())) {
        this.resetPreviousNodeTrailingComments(C), c.kind = C.name;
        let q = this.match(136);
        this.parseClassElementName(i), q ? this.pushClassPrivateMethod(t, a, false, false) : (this.isNonstaticConstructor(i) && this.raise(p.ConstructorIsAccessor, { at: i.key }), this.pushClassMethod(t, i, false, false, false, false)), this.checkGetterSetterParams(i);
      } else if (g && C.name === "accessor" && !this.isLineTerminator()) {
        this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(C);
        let q = this.match(136);
        this.parseClassElementName(n), this.pushClassAccessorProperty(t, u, q);
      } else
        this.isLineTerminator() ? T ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n) : this.unexpected();
    }
    parseClassElementName(t) {
      let { type: r, value: e } = this.state;
      if ((r === 130 || r === 131) && t.static && e === "prototype" && this.raise(p.StaticPrototype, { at: this.state.startLoc }), r === 136) {
        e === "constructor" && this.raise(p.ConstructorClassPrivateField, { at: this.state.startLoc });
        let s = this.parsePrivateName();
        return t.key = s, s;
      }
      return this.parsePropertyName(t);
    }
    parseClassStaticBlock(t, r) {
      var e;
      this.scope.enter(Ne | mt | dt);
      let s = this.state.labels;
      this.state.labels = [], this.prodParam.enter(ze);
      let i = r.body = [];
      this.parseBlockOrModuleBlockBody(i, void 0, false, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = s, t.body.push(this.finishNode(r, "StaticBlock")), (e = r.decorators) != null && e.length && this.raise(p.DecoratorStaticBlock, { at: r });
    }
    pushClassProperty(t, r) {
      !r.computed && (r.key.name === "constructor" || r.key.value === "constructor") && this.raise(p.ConstructorClassField, { at: r.key }), t.body.push(this.parseClassProperty(r));
    }
    pushClassPrivateProperty(t, r) {
      let e = this.parseClassPrivateProperty(r);
      t.body.push(e), this.classScope.declarePrivateName(this.getPrivateNameSV(e.key), ls, e.key.loc.start);
    }
    pushClassAccessorProperty(t, r, e) {
      if (!e && !r.computed) {
        let i = r.key;
        (i.name === "constructor" || i.value === "constructor") && this.raise(p.ConstructorClassField, { at: i });
      }
      let s = this.parseClassAccessorProperty(r);
      t.body.push(s), e && this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), ls, s.key.loc.start);
    }
    pushClassMethod(t, r, e, s, i, a) {
      t.body.push(this.parseMethod(r, e, s, i, a, "ClassMethod", true));
    }
    pushClassPrivateMethod(t, r, e, s) {
      let i = this.parseMethod(r, e, s, false, false, "ClassPrivateMethod", true);
      t.body.push(i);
      let a = i.kind === "get" ? i.static ? al : ol : i.kind === "set" ? i.static ? nl : ll : ls;
      this.declareClassPrivateMethodInScope(i, a);
    }
    declareClassPrivateMethodInScope(t, r) {
      this.classScope.declarePrivateName(this.getPrivateNameSV(t.key), r, t.key.loc.start);
    }
    parsePostMemberNameModifiers(t) {
    }
    parseClassPrivateProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassPrivateProperty");
    }
    parseClassProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassProperty");
    }
    parseClassAccessorProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassAccessorProperty");
    }
    parseInitializer(t) {
      this.scope.enter(Ne | dt), this.expressionScope.enter($r()), this.prodParam.enter(ze), t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
    }
    parseClassId(t, r, e) {
      let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : wr;
      if (R(this.state.type))
        t.id = this.parseIdentifier(), r && this.declareNameFromIdentifier(t.id, s);
      else if (e || !r)
        t.id = null;
      else
        throw this.raise(p.MissingClassName, { at: this.state.startLoc });
    }
    parseClassSuper(t) {
      t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
    }
    parseExport(t, r) {
      let e = this.maybeParseExportDefaultSpecifier(t), s = !e || this.eat(12), i = s && this.eatExportStar(t), a = i && this.maybeParseExportNamespaceSpecifier(t), n = s && (!a || this.eat(12)), o = e || i;
      if (i && !a) {
        if (e && this.unexpected(), r)
          throw this.raise(p.UnsupportedDecoratorExport, { at: t });
        return this.parseExportFrom(t, true), this.finishNode(t, "ExportAllDeclaration");
      }
      let u = this.maybeParseExportNamedSpecifiers(t);
      e && s && !i && !u && this.unexpected(null, 5), a && n && this.unexpected(null, 97);
      let c;
      if (o || u) {
        if (c = false, r)
          throw this.raise(p.UnsupportedDecoratorExport, { at: t });
        this.parseExportFrom(t, o);
      } else
        c = this.maybeParseExportDeclaration(t);
      if (o || u || c) {
        var y;
        let g = t;
        if (this.checkExport(g, true, false, !!g.source), ((y = g.declaration) == null ? void 0 : y.type) === "ClassDeclaration")
          this.maybeTakeDecorators(r, g.declaration, g);
        else if (r)
          throw this.raise(p.UnsupportedDecoratorExport, { at: t });
        return this.finishNode(g, "ExportNamedDeclaration");
      }
      if (this.eat(65)) {
        let g = t, T = this.parseExportDefaultExpression();
        if (g.declaration = T, T.type === "ClassDeclaration")
          this.maybeTakeDecorators(r, T, g);
        else if (r)
          throw this.raise(p.UnsupportedDecoratorExport, { at: t });
        return this.checkExport(g, true, true), this.finishNode(g, "ExportDefaultDeclaration");
      }
      this.unexpected(null, 5);
    }
    eatExportStar(t) {
      return this.eat(55);
    }
    maybeParseExportDefaultSpecifier(t) {
      if (this.isExportDefaultSpecifier()) {
        this.expectPlugin("exportDefaultFrom");
        let r = this.startNode();
        return r.exported = this.parseIdentifier(true), t.specifiers = [this.finishNode(r, "ExportDefaultSpecifier")], true;
      }
      return false;
    }
    maybeParseExportNamespaceSpecifier(t) {
      if (this.isContextual(93)) {
        t.specifiers || (t.specifiers = []);
        let r = this.startNodeAt(this.state.lastTokStartLoc);
        return this.next(), r.exported = this.parseModuleExportName(), t.specifiers.push(this.finishNode(r, "ExportNamespaceSpecifier")), true;
      }
      return false;
    }
    maybeParseExportNamedSpecifiers(t) {
      if (this.match(5)) {
        t.specifiers || (t.specifiers = []);
        let r = t.exportKind === "type";
        return t.specifiers.push(...this.parseExportSpecifiers(r)), t.source = null, t.declaration = null, this.hasPlugin("importAssertions") && (t.assertions = []), true;
      }
      return false;
    }
    maybeParseExportDeclaration(t) {
      return this.shouldParseExportDeclaration() ? (t.specifiers = [], t.source = null, this.hasPlugin("importAssertions") && (t.assertions = []), t.declaration = this.parseExportDeclaration(t), true) : false;
    }
    isAsyncFunction() {
      if (!this.isContextual(95))
        return false;
      let t = this.nextTokenStart();
      return !cs.test(this.input.slice(this.state.pos, t)) && this.isUnparsedContextual(t, "function");
    }
    parseExportDefaultExpression() {
      let t = this.startNode();
      if (this.match(68))
        return this.next(), this.parseFunction(t, 5);
      if (this.isAsyncFunction())
        return this.next(), this.next(), this.parseFunction(t, 13);
      if (this.match(80))
        return this.parseClass(t, true, true);
      if (this.match(26))
        return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") === true && this.raise(p.DecoratorBeforeExport, { at: this.state.startLoc }), this.parseClass(this.maybeTakeDecorators(this.parseDecorators(false), this.startNode()), true, true);
      if (this.match(75) || this.match(74) || this.isLet())
        throw this.raise(p.UnsupportedDefaultExport, { at: this.state.startLoc });
      let r = this.parseMaybeAssignAllowIn();
      return this.semicolon(), r;
    }
    parseExportDeclaration(t) {
      return this.match(80) ? this.parseClass(this.startNode(), true, false) : this.parseStatementListItem();
    }
    isExportDefaultSpecifier() {
      let { type: t } = this.state;
      if (R(t)) {
        if (t === 95 && !this.state.containsEsc || t === 99)
          return false;
        if ((t === 128 || t === 127) && !this.state.containsEsc) {
          let { type: s } = this.lookahead();
          if (R(s) && s !== 97 || s === 5)
            return this.expectOnePlugin(["flow", "typescript"]), false;
        }
      } else if (!this.match(65))
        return false;
      let r = this.nextTokenStart(), e = this.isUnparsedContextual(r, "from");
      if (this.input.charCodeAt(r) === 44 || R(this.state.type) && e)
        return true;
      if (this.match(65) && e) {
        let s = this.input.charCodeAt(this.nextTokenStartSince(r + 4));
        return s === 34 || s === 39;
      }
      return false;
    }
    parseExportFrom(t, r) {
      if (this.eatContextual(97)) {
        t.source = this.parseImportSource(), this.checkExport(t);
        let e = this.maybeParseImportAssertions();
        e && (t.assertions = e, this.checkJSONModuleImport(t));
      } else
        r && this.unexpected();
      this.semicolon();
    }
    shouldParseExportDeclaration() {
      let { type: t } = this.state;
      return t === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators")) ? (this.getPluginOption("decorators", "decoratorsBeforeExport") === true && this.raise(p.DecoratorBeforeExport, { at: this.state.startLoc }), true) : t === 74 || t === 75 || t === 68 || t === 80 || this.isLet() || this.isAsyncFunction();
    }
    checkExport(t, r, e, s) {
      if (r) {
        if (e) {
          if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
            var i;
            let a = t.declaration;
            a.type === "Identifier" && a.name === "from" && a.end - a.start === 4 && !((i = a.extra) != null && i.parenthesized) && this.raise(p.ExportDefaultFromAsIdentifier, { at: a });
          }
        } else if (t.specifiers && t.specifiers.length)
          for (let a of t.specifiers) {
            let { exported: n } = a, o = n.type === "Identifier" ? n.name : n.value;
            if (this.checkDuplicateExports(a, o), !s && a.local) {
              let { local: u } = a;
              u.type !== "Identifier" ? this.raise(p.ExportBindingIsString, { at: a, localName: u.value, exportName: o }) : (this.checkReservedWord(u.name, u.loc.start, true, false), this.scope.checkLocalExport(u));
            }
          }
        else if (t.declaration) {
          if (t.declaration.type === "FunctionDeclaration" || t.declaration.type === "ClassDeclaration") {
            let a = t.declaration.id;
            if (!a)
              throw new Error("Assertion failure");
            this.checkDuplicateExports(t, a.name);
          } else if (t.declaration.type === "VariableDeclaration")
            for (let a of t.declaration.declarations)
              this.checkDeclaration(a.id);
        }
      }
    }
    checkDeclaration(t) {
      if (t.type === "Identifier")
        this.checkDuplicateExports(t, t.name);
      else if (t.type === "ObjectPattern")
        for (let r of t.properties)
          this.checkDeclaration(r);
      else if (t.type === "ArrayPattern")
        for (let r of t.elements)
          r && this.checkDeclaration(r);
      else
        t.type === "ObjectProperty" ? this.checkDeclaration(t.value) : t.type === "RestElement" ? this.checkDeclaration(t.argument) : t.type === "AssignmentPattern" && this.checkDeclaration(t.left);
    }
    checkDuplicateExports(t, r) {
      this.exportedIdentifiers.has(r) && (r === "default" ? this.raise(p.DuplicateDefaultExport, { at: t }) : this.raise(p.DuplicateExport, { at: t, exportName: r })), this.exportedIdentifiers.add(r);
    }
    parseExportSpecifiers(t) {
      let r = [], e = true;
      for (this.expect(5); !this.eat(8); ) {
        if (e)
          e = false;
        else if (this.expect(12), this.eat(8))
          break;
        let s = this.isContextual(128), i = this.match(131), a = this.startNode();
        a.local = this.parseModuleExportName(), r.push(this.parseExportSpecifier(a, i, t, s));
      }
      return r;
    }
    parseExportSpecifier(t, r, e, s) {
      return this.eatContextual(93) ? t.exported = this.parseModuleExportName() : r ? t.exported = Ll(t.local) : t.exported || (t.exported = Te(t.local)), this.finishNode(t, "ExportSpecifier");
    }
    parseModuleExportName() {
      if (this.match(131)) {
        let t = this.parseStringLiteral(this.state.value), r = t.value.match(oh);
        return r && this.raise(p.ModuleExportNameHasLoneSurrogate, { at: t, surrogateCharCode: r[0].charCodeAt(0) }), t;
      }
      return this.parseIdentifier(true);
    }
    isJSONModuleImport(t) {
      return t.assertions != null ? t.assertions.some((r) => {
        let { key: e, value: s } = r;
        return s.value === "json" && (e.type === "Identifier" ? e.name === "type" : e.value === "type");
      }) : false;
    }
    checkImportReflection(t) {
      if (t.module) {
        var r;
        (t.specifiers.length !== 1 || t.specifiers[0].type !== "ImportDefaultSpecifier") && this.raise(p.ImportReflectionNotBinding, { at: t.specifiers[0].loc.start }), ((r = t.assertions) == null ? void 0 : r.length) > 0 && this.raise(p.ImportReflectionHasAssertion, { at: t.specifiers[0].loc.start });
      }
    }
    checkJSONModuleImport(t) {
      if (this.isJSONModuleImport(t) && t.type !== "ExportAllDeclaration") {
        let { specifiers: r } = t;
        if (r != null) {
          let e = r.find((s) => {
            let i;
            if (s.type === "ExportSpecifier" ? i = s.local : s.type === "ImportSpecifier" && (i = s.imported), i !== void 0)
              return i.type === "Identifier" ? i.name !== "default" : i.value !== "default";
          });
          e !== void 0 && this.raise(p.ImportJSONBindingNotDefault, { at: e.loc.start });
        }
      }
    }
    parseMaybeImportReflection(t) {
      let r = false;
      if (this.isContextual(125)) {
        let e = this.lookahead(), s = e.type;
        R(s) ? (s !== 97 || this.input.charCodeAt(this.nextTokenStartSince(e.end)) === 102) && (r = true) : s !== 12 && (r = true);
      }
      r ? (this.expectPlugin("importReflection"), this.next(), t.module = true) : this.hasPlugin("importReflection") && (t.module = false);
    }
    parseImport(t) {
      if (t.specifiers = [], !this.match(131)) {
        this.parseMaybeImportReflection(t);
        let s = !this.maybeParseDefaultImportSpecifier(t) || this.eat(12), i = s && this.maybeParseStarImportSpecifier(t);
        s && !i && this.parseNamedImportSpecifiers(t), this.expectContextual(97);
      }
      t.source = this.parseImportSource();
      let r = this.maybeParseImportAssertions();
      if (r)
        t.assertions = r;
      else {
        let e = this.maybeParseModuleAttributes();
        e && (t.attributes = e);
      }
      return this.checkImportReflection(t), this.checkJSONModuleImport(t), this.semicolon(), this.finishNode(t, "ImportDeclaration");
    }
    parseImportSource() {
      return this.match(131) || this.unexpected(), this.parseExprAtom();
    }
    shouldParseDefaultImport(t) {
      return R(this.state.type);
    }
    parseImportSpecifierLocal(t, r, e) {
      r.local = this.parseIdentifier(), t.specifiers.push(this.finishImportSpecifier(r, e));
    }
    finishImportSpecifier(t, r) {
      let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : He;
      return this.checkLVal(t.local, { in: { type: r }, binding: e }), this.finishNode(t, r);
    }
    parseAssertEntries() {
      let t = [], r = /* @__PURE__ */ new Set();
      do {
        if (this.match(8))
          break;
        let e = this.startNode(), s = this.state.value;
        if (r.has(s) && this.raise(p.ModuleAttributesWithDuplicateKeys, { at: this.state.startLoc, key: s }), r.add(s), this.match(131) ? e.key = this.parseStringLiteral(s) : e.key = this.parseIdentifier(true), this.expect(14), !this.match(131))
          throw this.raise(p.ModuleAttributeInvalidValue, { at: this.state.startLoc });
        e.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(e, "ImportAttribute"));
      } while (this.eat(12));
      return t;
    }
    maybeParseModuleAttributes() {
      if (this.match(76) && !this.hasPrecedingLineBreak())
        this.expectPlugin("moduleAttributes"), this.next();
      else
        return this.hasPlugin("moduleAttributes") ? [] : null;
      let t = [], r = /* @__PURE__ */ new Set();
      do {
        let e = this.startNode();
        if (e.key = this.parseIdentifier(true), e.key.name !== "type" && this.raise(p.ModuleAttributeDifferentFromType, { at: e.key }), r.has(e.key.name) && this.raise(p.ModuleAttributesWithDuplicateKeys, { at: e.key, key: e.key.name }), r.add(e.key.name), this.expect(14), !this.match(131))
          throw this.raise(p.ModuleAttributeInvalidValue, { at: this.state.startLoc });
        e.value = this.parseStringLiteral(this.state.value), this.finishNode(e, "ImportAttribute"), t.push(e);
      } while (this.eat(12));
      return t;
    }
    maybeParseImportAssertions() {
      if (this.isContextual(94) && !this.hasPrecedingLineBreak())
        this.expectPlugin("importAssertions"), this.next();
      else
        return this.hasPlugin("importAssertions") ? [] : null;
      this.eat(5);
      let t = this.parseAssertEntries();
      return this.eat(8), t;
    }
    maybeParseDefaultImportSpecifier(t) {
      return this.shouldParseDefaultImport(t) ? (this.parseImportSpecifierLocal(t, this.startNode(), "ImportDefaultSpecifier"), true) : false;
    }
    maybeParseStarImportSpecifier(t) {
      if (this.match(55)) {
        let r = this.startNode();
        return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(t, r, "ImportNamespaceSpecifier"), true;
      }
      return false;
    }
    parseNamedImportSpecifiers(t) {
      let r = true;
      for (this.expect(5); !this.eat(8); ) {
        if (r)
          r = false;
        else {
          if (this.eat(14))
            throw this.raise(p.DestructureNamedImport, { at: this.state.startLoc });
          if (this.expect(12), this.eat(8))
            break;
        }
        let e = this.startNode(), s = this.match(131), i = this.isContextual(128);
        e.imported = this.parseModuleExportName();
        let a = this.parseImportSpecifier(e, s, t.importKind === "type" || t.importKind === "typeof", i, void 0);
        t.specifiers.push(a);
      }
    }
    parseImportSpecifier(t, r, e, s, i) {
      if (this.eatContextual(93))
        t.local = this.parseIdentifier();
      else {
        let { imported: a } = t;
        if (r)
          throw this.raise(p.ImportBindingIsString, { at: t, importName: a.value });
        this.checkReservedWord(a.name, t.loc.start, true, true), t.local || (t.local = Te(a));
      }
      return this.finishImportSpecifier(t, "ImportSpecifier", i);
    }
    isThisParam(t) {
      return t.type === "Identifier" && t.name === "this";
    }
  }, si = class extends hh {
    constructor(t, r) {
      t = f(t), super(t, r), this.options = t, this.initializeScopes(), this.plugins = uh(this.options.plugins), this.filename = t.sourceFilename;
    }
    getScopeHandler() {
      return us;
    }
    parse() {
      this.enterInitialScopes();
      let t = this.startNode(), r = this.startNode();
      return this.nextToken(), t.errors = null, this.parseTopLevel(t, r), t.errors = this.state.errors, t;
    }
  };
  function uh(t) {
    let r = /* @__PURE__ */ new Map();
    for (let e of t) {
      let [s, i] = Array.isArray(e) ? e : [e, {}];
      r.has(s) || r.set(s, i || {});
    }
    return r;
  }
  function ch(t, r) {
    var e;
    if (((e = r) == null ? void 0 : e.sourceType) === "unambiguous") {
      r = Object.assign({}, r);
      try {
        r.sourceType = "module";
        let s = tt(r, t), i = s.parse();
        if (s.sawUnambiguousESM)
          return i;
        if (s.ambiguousScriptDifferentAst)
          try {
            return r.sourceType = "script", tt(r, t).parse();
          } catch {
          }
        else
          i.program.sourceType = "script";
        return i;
      } catch (s) {
        try {
          return r.sourceType = "script", tt(r, t).parse();
        } catch {
        }
        throw s;
      }
    } else
      return tt(r, t).parse();
  }
  function ph(t, r) {
    let e = tt(r, t);
    return e.options.strictMode && (e.state.strict = true), e.getExpression();
  }
  function fh(t) {
    let r = {};
    for (let e of Object.keys(t))
      r[e] = xe(t[e]);
    return r;
  }
  var dh = fh(te);
  function tt(t, r) {
    let e = si;
    return t != null && t.plugins && (rh(t.plugins), e = mh(t.plugins)), new e(t, r);
  }
  var ri = {};
  function mh(t) {
    let r = ih.filter((i) => Q(t, i)), e = r.join("/"), s = ri[e];
    if (!s) {
      s = si;
      for (let i of r)
        s = ti[i](s);
      ri[e] = s;
    }
    return s;
  }
  l.parse = ch, l.parseExpression = ph, l.tokTypes = dh;
} });
var _f = $({ "src/language-js/parse/json.js"(l, h) {
  "use strict";
  U();
  var f = bo(), d = dr(), x = wo(), P = Io();
  function m() {
    let N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { allowComments: O = true } = N;
    return function(_) {
      let { parseExpression: W } = No(), I;
      try {
        I = W(_, { tokens: true, ranges: true });
      } catch (F) {
        throw P(F);
      }
      if (!O && f(I.comments))
        throw E(I.comments[0], "Comment");
      return S(I), I;
    };
  }
  function E(N, O) {
    let [A, _] = [N.loc.start, N.loc.end].map((W) => {
      let { line: I, column: F } = W;
      return { line: I, column: F + 1 };
    });
    return d(`${O} is not allowed in JSON.`, { start: A, end: _ });
  }
  function S(N) {
    switch (N.type) {
      case "ArrayExpression":
        for (let O of N.elements)
          O !== null && S(O);
        return;
      case "ObjectExpression":
        for (let O of N.properties)
          S(O);
        return;
      case "ObjectProperty":
        if (N.computed)
          throw E(N.key, "Computed key");
        if (N.shorthand)
          throw E(N.key, "Shorthand property");
        N.key.type !== "Identifier" && S(N.key), S(N.value);
        return;
      case "UnaryExpression": {
        let { operator: O, argument: A } = N;
        if (O !== "+" && O !== "-")
          throw E(N, `Operator '${N.operator}'`);
        if (A.type === "NumericLiteral" || A.type === "Identifier" && (A.name === "Infinity" || A.name === "NaN"))
          return;
        throw E(A, `Operator '${O}' before '${A.type}'`);
      }
      case "Identifier":
        if (N.name !== "Infinity" && N.name !== "NaN" && N.name !== "undefined")
          throw E(N, `Identifier '${N.name}'`);
        return;
      case "TemplateLiteral":
        if (f(N.expressions))
          throw E(N.expressions[0], "'TemplateLiteral' with expression");
        for (let O of N.quasis)
          S(O);
        return;
      case "NullLiteral":
      case "BooleanLiteral":
      case "NumericLiteral":
      case "StringLiteral":
      case "TemplateElement":
        return;
      default:
        throw E(N, `'${N.type}'`);
    }
  }
  var k = m(), L = { json: x({ parse: k, hasPragma() {
    return true;
  } }), json5: x(k), "json-stringify": x({ parse: m({ allowComments: false }), astFormat: "estree-json" }) };
  h.exports = L;
} });
var Rf = $({ "src/language-js/parse/babel.js"(l, h) {
  U();
  var f = xf(), d = ho(), x = Tf(), P = wo(), m = Io(), E = Mf(), S = _f(), k = { sourceType: "module", allowImportExportEverywhere: true, allowReturnOutsideFunction: true, allowSuperOutsideMethod: true, allowUndeclaredExports: true, errorRecovery: true, createParenthesizedExpressions: true, plugins: ["doExpressions", "exportDefaultFrom", "functionBind", "functionSent", "throwExpressions", "partialApplication", ["decorators", { decoratorsBeforeExport: false }], "importAssertions", "decimal", "moduleBlocks", "asyncDoExpressions", "regexpUnicodeSets", "destructuringPrivate", "decoratorAutoAccessors"], tokens: true, ranges: true }, L = ["recordAndTuple", { syntaxType: "hash" }], N = "v8intrinsic", O = [["pipelineOperator", { proposal: "hack", topicToken: "%" }], ["pipelineOperator", { proposal: "minimal" }], ["pipelineOperator", { proposal: "fsharp" }]], A = function(H) {
    let X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k;
    return Object.assign(Object.assign({}, X), {}, { plugins: [...X.plugins, ...H] });
  }, _ = /@(?:no)?flow\b/;
  function W(H, X) {
    if (X.filepath && X.filepath.endsWith(".js.flow"))
      return true;
    let ye = d(H);
    ye && (H = H.slice(ye.length));
    let ne = x(H, 0);
    return ne !== false && (H = H.slice(0, ne)), _.test(H);
  }
  function I(H, X, ye) {
    let ne = No()[H], oe = ne(X, ye), Ee = oe.errors.find((le) => !te.has(le.reasonCode));
    if (Ee)
      throw Ee;
    return oe;
  }
  function F(H) {
    for (var X = arguments.length, ye = new Array(X > 1 ? X - 1 : 0), ne = 1; ne < X; ne++)
      ye[ne - 1] = arguments[ne];
    return function(oe, Ee) {
      let le = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if ((le.parser === "babel" || le.parser === "__babel_estree") && W(oe, le))
        return le.parser = "babel-flow", M(oe, Ee, le);
      let ue = ye;
      le.__babelSourceType === "script" && (ue = ue.map((Y) => Object.assign(Object.assign({}, Y), {}, { sourceType: "script" }))), /#[[{]/.test(oe) && (ue = ue.map((Y) => A([L], Y)));
      let ht = /%[A-Z]/.test(oe);
      oe.includes("|>") ? ue = (ht ? [...O, N] : O).flatMap((Re) => ue.map((Gt) => A([Re], Gt))) : ht && (ue = ue.map((Y) => A([N], Y)));
      let { result: ut, error: Wt } = f(...ue.map((Y) => () => I(H, oe, Y)));
      if (!ut)
        throw m(Wt);
      return le.originalText = oe, E(ut, le);
    };
  }
  var z = F("parse", A(["jsx", "flow"])), M = F("parse", A(["jsx", ["flow", { all: true, enums: true }]])), V = F("parse", A(["jsx", "typescript"]), A(["typescript"])), ee = F("parse", A(["jsx", "flow", "estree"])), b = F("parseExpression", A(["jsx"])), B = F("parseExpression", A(["typescript"])), te = /* @__PURE__ */ new Set(["StrictNumericEscape", "StrictWith", "StrictOctalLiteral", "StrictDelete", "StrictEvalArguments", "StrictEvalArgumentsBinding", "StrictFunction", "EmptyTypeArguments", "EmptyTypeParameters", "ConstructorHasTypeParameters", "UnsupportedParameterPropertyKind", "UnexpectedParameterModifier", "MixedLabeledAndUnlabeledElements", "InvalidTupleMemberLabel", "NonClassMethodPropertyHasAbstractModifer", "ReadonlyForMethodSignature", "ClassMethodHasDeclare", "ClassMethodHasReadonly", "InvalidModifierOnTypeMember", "DuplicateAccessibilityModifier", "IndexSignatureHasDeclare", "DecoratorExportClass", "ParamDupe", "InvalidDecimal", "RestTrailingComma", "UnsupportedParameterDecorator", "UnterminatedJsxContent", "UnexpectedReservedWord", "ModuleAttributesWithDuplicateKeys", "LineTerminatorBeforeArrow", "InvalidEscapeSequenceTemplate", "NonAbstractClassHasAbstractMethod", "UnsupportedPropertyDecorator", "OptionalTypeBeforeRequired", "PatternIsOptional", "OptionalBindingPattern", "DeclareClassFieldHasInitializer", "TypeImportCannotSpecifyDefaultAndNamed", "DeclareFunctionHasImplementation", "ConstructorClassField", "VarRedeclaration", "InvalidPrivateFieldResolution", "DuplicateExport"]), R = P(z), ae = P(V), se = P(b), _e = P(B);
  h.exports = { parsers: Object.assign(Object.assign({ babel: R, "babel-flow": P(M), "babel-ts": ae }, S), {}, { __js_expression: se, __vue_expression: se, __vue_ts_expression: _e, __vue_event_binding: R, __vue_ts_event_binding: ae, __babel_estree: P(ee) }) };
} });
var Tm = Rf();
export {
  Tm as default
};
//# sourceMappingURL=prettier_esm_parser-babel.js.map
