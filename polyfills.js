(self.webpackChunkangular_staking =
  self.webpackChunkangular_staking || []).push([
  [429],
  {
    7435: (It, _t, X) => {
      "use strict";
      X(8583);
      var rt = X(3172);
      (window.global = window), (window.Buffer = rt.lW);
    },
    5343: (It, _t) => {
      "use strict";
      (_t.byteLength = function q(A) {
        var O = W(A),
          at = O[1];
        return (3 * (O[0] + at)) / 4 - at;
      }),
        (_t.toByteArray = function dt(A) {
          var O,
            pt,
            F = W(A),
            at = F[0],
            yt = F[1],
            ot = new Tt(
              (function l(A, O, F) {
                return (3 * (O + F)) / 4 - F;
              })(0, at, yt)
            ),
            gt = 0,
            bt = yt > 0 ? at - 4 : at;
          for (pt = 0; pt < bt; pt += 4)
            (O =
              (L[A.charCodeAt(pt)] << 18) |
              (L[A.charCodeAt(pt + 1)] << 12) |
              (L[A.charCodeAt(pt + 2)] << 6) |
              L[A.charCodeAt(pt + 3)]),
              (ot[gt++] = (O >> 16) & 255),
              (ot[gt++] = (O >> 8) & 255),
              (ot[gt++] = 255 & O);
          return (
            2 === yt &&
              ((O =
                (L[A.charCodeAt(pt)] << 2) | (L[A.charCodeAt(pt + 1)] >> 4)),
              (ot[gt++] = 255 & O)),
            1 === yt &&
              ((O =
                (L[A.charCodeAt(pt)] << 10) |
                (L[A.charCodeAt(pt + 1)] << 4) |
                (L[A.charCodeAt(pt + 2)] >> 2)),
              (ot[gt++] = (O >> 8) & 255),
              (ot[gt++] = 255 & O)),
            ot
          );
        }),
        (_t.fromByteArray = function U(A) {
          for (
            var O, F = A.length, at = F % 3, yt = [], gt = 0, bt = F - at;
            gt < bt;
            gt += 16383
          )
            yt.push(ut(A, gt, gt + 16383 > bt ? bt : gt + 16383));
          return (
            1 === at
              ? yt.push(X[(O = A[F - 1]) >> 2] + X[(O << 4) & 63] + "==")
              : 2 === at &&
                yt.push(
                  X[(O = (A[F - 2] << 8) + A[F - 1]) >> 10] +
                    X[(O >> 4) & 63] +
                    X[(O << 2) & 63] +
                    "="
                ),
            yt.join("")
          );
        });
      for (
        var X = [],
          L = [],
          Tt = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          rt =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          et = 0,
          nt = rt.length;
        et < nt;
        ++et
      )
        (X[et] = rt[et]), (L[rt.charCodeAt(et)] = et);
      function W(A) {
        var O = A.length;
        if (O % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var F = A.indexOf("=");
        return -1 === F && (F = O), [F, F === O ? 0 : 4 - (F % 4)];
      }
      function it(A) {
        return (
          X[(A >> 18) & 63] + X[(A >> 12) & 63] + X[(A >> 6) & 63] + X[63 & A]
        );
      }
      function ut(A, O, F) {
        for (var yt = [], ot = O; ot < F; ot += 3)
          yt.push(
            it(
              ((A[ot] << 16) & 16711680) +
                ((A[ot + 1] << 8) & 65280) +
                (255 & A[ot + 2])
            )
          );
        return yt.join("");
      }
      (L["-".charCodeAt(0)] = 62), (L["_".charCodeAt(0)] = 63);
    },
    3172: (It, _t, X) => {
      "use strict";
      const Tt = X(5343),
        rt = X(8461),
        et =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (_t.lW = l), (_t.h2 = 50);
      const nt = 2147483647;
      function q(n) {
        if (n > nt)
          throw new RangeError(
            'The value "' + n + '" is invalid for option "size"'
          );
        const t = new Uint8Array(n);
        return Object.setPrototypeOf(t, l.prototype), t;
      }
      function l(n, t, e) {
        if ("number" == typeof n) {
          if ("string" == typeof t)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return U(n);
        }
        return dt(n, t, e);
      }
      function dt(n, t, e) {
        if ("string" == typeof n)
          return (function A(n, t) {
            if (
              (("string" != typeof t || "" === t) && (t = "utf8"),
              !l.isEncoding(t))
            )
              throw new TypeError("Unknown encoding: " + t);
            const e = 0 | bt(n, t);
            let r = q(e);
            const i = r.write(n, t);
            return i !== e && (r = r.slice(0, i)), r;
          })(n, t);
        if (ArrayBuffer.isView(n))
          return (function F(n) {
            if (p(n, Uint8Array)) {
              const t = new Uint8Array(n);
              return at(t.buffer, t.byteOffset, t.byteLength);
            }
            return O(n);
          })(n);
        if (null == n)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof n
          );
        if (
          p(n, ArrayBuffer) ||
          (n && p(n.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (p(n, SharedArrayBuffer) || (n && p(n.buffer, SharedArrayBuffer))))
        )
          return at(n, t, e);
        if ("number" == typeof n)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        const r = n.valueOf && n.valueOf();
        if (null != r && r !== n) return l.from(r, t, e);
        const i = (function yt(n) {
          if (l.isBuffer(n)) {
            const t = 0 | ot(n.length),
              e = q(t);
            return 0 === e.length || n.copy(e, 0, 0, t), e;
          }
          return void 0 !== n.length
            ? "number" != typeof n.length || h(n.length)
              ? q(0)
              : O(n)
            : "Buffer" === n.type && Array.isArray(n.data)
            ? O(n.data)
            : void 0;
        })(n);
        if (i) return i;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof n[Symbol.toPrimitive]
        )
          return l.from(n[Symbol.toPrimitive]("string"), t, e);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof n
        );
      }
      function it(n) {
        if ("number" != typeof n)
          throw new TypeError('"size" argument must be of type number');
        if (n < 0)
          throw new RangeError(
            'The value "' + n + '" is invalid for option "size"'
          );
      }
      function U(n) {
        return it(n), q(n < 0 ? 0 : 0 | ot(n));
      }
      function O(n) {
        const t = n.length < 0 ? 0 : 0 | ot(n.length),
          e = q(t);
        for (let r = 0; r < t; r += 1) e[r] = 255 & n[r];
        return e;
      }
      function at(n, t, e) {
        if (t < 0 || n.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (n.byteLength < t + (e || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let r;
        return (
          (r =
            void 0 === t && void 0 === e
              ? new Uint8Array(n)
              : void 0 === e
              ? new Uint8Array(n, t)
              : new Uint8Array(n, t, e)),
          Object.setPrototypeOf(r, l.prototype),
          r
        );
      }
      function ot(n) {
        if (n >= nt)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              nt.toString(16) +
              " bytes"
          );
        return 0 | n;
      }
      function bt(n, t) {
        if (l.isBuffer(n)) return n.length;
        if (ArrayBuffer.isView(n) || p(n, ArrayBuffer)) return n.byteLength;
        if ("string" != typeof n)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof n
          );
        const e = n.length,
          r = arguments.length > 2 && !0 === arguments[2];
        if (!r && 0 === e) return 0;
        let i = !1;
        for (;;)
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return e;
            case "utf8":
            case "utf-8":
              return Jt(n).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * e;
            case "hex":
              return e >>> 1;
            case "base64":
              return o(n).length;
            default:
              if (i) return r ? -1 : Jt(n).length;
              (t = ("" + t).toLowerCase()), (i = !0);
          }
      }
      function pt(n, t, e) {
        let r = !1;
        if (
          ((void 0 === t || t < 0) && (t = 0),
          t > this.length ||
            ((void 0 === e || e > this.length) && (e = this.length), e <= 0) ||
            (e >>>= 0) <= (t >>>= 0))
        )
          return "";
        for (n || (n = "utf8"); ; )
          switch (n) {
            case "hex":
              return le(this, t, e);
            case "utf8":
            case "utf-8":
              return re(this, t, e);
            case "ascii":
              return $t(this, t, e);
            case "latin1":
            case "binary":
              return ae(this, t, e);
            case "base64":
              return Ct(this, t, e);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Nt(this, t, e);
            default:
              if (r) throw new TypeError("Unknown encoding: " + n);
              (n = (n + "").toLowerCase()), (r = !0);
          }
      }
      function Rt(n, t, e) {
        const r = n[t];
        (n[t] = n[e]), (n[e] = r);
      }
      function Vt(n, t, e, r, i) {
        if (0 === n.length) return -1;
        if (
          ("string" == typeof e
            ? ((r = e), (e = 0))
            : e > 2147483647
            ? (e = 2147483647)
            : e < -2147483648 && (e = -2147483648),
          h((e = +e)) && (e = i ? 0 : n.length - 1),
          e < 0 && (e = n.length + e),
          e >= n.length)
        ) {
          if (i) return -1;
          e = n.length - 1;
        } else if (e < 0) {
          if (!i) return -1;
          e = 0;
        }
        if (("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)))
          return 0 === t.length ? -1 : Lt(n, t, e, r, i);
        if ("number" == typeof t)
          return (
            (t &= 255),
            "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(n, t, e)
                : Uint8Array.prototype.lastIndexOf.call(n, t, e)
              : Lt(n, [t], e, r, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function Lt(n, t, e, r, i) {
        let M,
          c = 1,
          a = n.length,
          w = t.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) ||
            "ucs-2" === r ||
            "utf16le" === r ||
            "utf-16le" === r)
        ) {
          if (n.length < 2 || t.length < 2) return -1;
          (c = 2), (a /= 2), (w /= 2), (e /= 2);
        }
        function C(D, T) {
          return 1 === c ? D[T] : D.readUInt16BE(T * c);
        }
        if (i) {
          let D = -1;
          for (M = e; M < a; M++)
            if (C(n, M) === C(t, -1 === D ? 0 : M - D)) {
              if ((-1 === D && (D = M), M - D + 1 === w)) return D * c;
            } else -1 !== D && (M -= M - D), (D = -1);
        } else
          for (e + w > a && (e = a - w), M = e; M >= 0; M--) {
            let D = !0;
            for (let T = 0; T < w; T++)
              if (C(n, M + T) !== C(t, T)) {
                D = !1;
                break;
              }
            if (D) return M;
          }
        return -1;
      }
      function te(n, t, e, r) {
        e = Number(e) || 0;
        const i = n.length - e;
        r ? (r = Number(r)) > i && (r = i) : (r = i);
        const c = t.length;
        let a;
        for (r > c / 2 && (r = c / 2), a = 0; a < r; ++a) {
          const w = parseInt(t.substr(2 * a, 2), 16);
          if (h(w)) return a;
          n[e + a] = w;
        }
        return a;
      }
      function ee(n, t, e, r) {
        return u(Jt(t, n.length - e), n, e, r);
      }
      function ne(n, t, e, r) {
        return u(
          (function fe(n) {
            const t = [];
            for (let e = 0; e < n.length; ++e) t.push(255 & n.charCodeAt(e));
            return t;
          })(t),
          n,
          e,
          r
        );
      }
      function xt(n, t, e, r) {
        return u(o(t), n, e, r);
      }
      function Mt(n, t, e, r) {
        return u(
          (function he(n, t) {
            let e, r, i;
            const c = [];
            for (let a = 0; a < n.length && !((t -= 2) < 0); ++a)
              (e = n.charCodeAt(a)),
                (r = e >> 8),
                (i = e % 256),
                c.push(i),
                c.push(r);
            return c;
          })(t, n.length - e),
          n,
          e,
          r
        );
      }
      function Ct(n, t, e) {
        return Tt.fromByteArray(0 === t && e === n.length ? n : n.slice(t, e));
      }
      function re(n, t, e) {
        e = Math.min(n.length, e);
        const r = [];
        let i = t;
        for (; i < e; ) {
          const c = n[i];
          let a = null,
            w = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (i + w <= e) {
            let C, M, D, T;
            switch (w) {
              case 1:
                c < 128 && (a = c);
                break;
              case 2:
                (C = n[i + 1]),
                  128 == (192 & C) &&
                    ((T = ((31 & c) << 6) | (63 & C)), T > 127 && (a = T));
                break;
              case 3:
                (C = n[i + 1]),
                  (M = n[i + 2]),
                  128 == (192 & C) &&
                    128 == (192 & M) &&
                    ((T = ((15 & c) << 12) | ((63 & C) << 6) | (63 & M)),
                    T > 2047 && (T < 55296 || T > 57343) && (a = T));
                break;
              case 4:
                (C = n[i + 1]),
                  (M = n[i + 2]),
                  (D = n[i + 3]),
                  128 == (192 & C) &&
                    128 == (192 & M) &&
                    128 == (192 & D) &&
                    ((T =
                      ((15 & c) << 18) |
                      ((63 & C) << 12) |
                      ((63 & M) << 6) |
                      (63 & D)),
                    T > 65535 && T < 1114112 && (a = T));
            }
          }
          null === a
            ? ((a = 65533), (w = 1))
            : a > 65535 &&
              ((a -= 65536),
              r.push(((a >>> 10) & 1023) | 55296),
              (a = 56320 | (1023 & a))),
            r.push(a),
            (i += w);
        }
        return (function ie(n) {
          const t = n.length;
          if (t <= 4096) return String.fromCharCode.apply(String, n);
          let e = "",
            r = 0;
          for (; r < t; )
            e += String.fromCharCode.apply(String, n.slice(r, (r += 4096)));
          return e;
        })(r);
      }
      function $t(n, t, e) {
        let r = "";
        e = Math.min(n.length, e);
        for (let i = t; i < e; ++i) r += String.fromCharCode(127 & n[i]);
        return r;
      }
      function ae(n, t, e) {
        let r = "";
        e = Math.min(n.length, e);
        for (let i = t; i < e; ++i) r += String.fromCharCode(n[i]);
        return r;
      }
      function le(n, t, e) {
        const r = n.length;
        (!t || t < 0) && (t = 0), (!e || e < 0 || e > r) && (e = r);
        let i = "";
        for (let c = t; c < e; ++c) i += y[n[c]];
        return i;
      }
      function Nt(n, t, e) {
        const r = n.slice(t, e);
        let i = "";
        for (let c = 0; c < r.length - 1; c += 2)
          i += String.fromCharCode(r[c] + 256 * r[c + 1]);
        return i;
      }
      function lt(n, t, e) {
        if (n % 1 != 0 || n < 0) throw new RangeError("offset is not uint");
        if (n + t > e)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function K(n, t, e, r, i, c) {
        if (!l.isBuffer(n))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < c)
          throw new RangeError('"value" argument is out of bounds');
        if (e + r > n.length) throw new RangeError("Index out of range");
      }
      function Wt(n, t, e, r, i) {
        Kt(t, r, i, n, e, 7);
        let c = Number(t & BigInt(4294967295));
        (n[e++] = c),
          (c >>= 8),
          (n[e++] = c),
          (c >>= 8),
          (n[e++] = c),
          (c >>= 8),
          (n[e++] = c);
        let a = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (n[e++] = a),
          (a >>= 8),
          (n[e++] = a),
          (a >>= 8),
          (n[e++] = a),
          (a >>= 8),
          (n[e++] = a),
          e
        );
      }
      function qt(n, t, e, r, i) {
        Kt(t, r, i, n, e, 7);
        let c = Number(t & BigInt(4294967295));
        (n[e + 7] = c),
          (c >>= 8),
          (n[e + 6] = c),
          (c >>= 8),
          (n[e + 5] = c),
          (c >>= 8),
          (n[e + 4] = c);
        let a = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (n[e + 3] = a),
          (a >>= 8),
          (n[e + 2] = a),
          (a >>= 8),
          (n[e + 1] = a),
          (a >>= 8),
          (n[e] = a),
          e + 8
        );
      }
      function Xt(n, t, e, r, i, c) {
        if (e + r > n.length) throw new RangeError("Index out of range");
        if (e < 0) throw new RangeError("Index out of range");
      }
      function zt(n, t, e, r, i) {
        return (
          (t = +t),
          (e >>>= 0),
          i || Xt(n, 0, e, 4),
          rt.write(n, t, e, r, 23, 4),
          e + 4
        );
      }
      function oe(n, t, e, r, i) {
        return (
          (t = +t),
          (e >>>= 0),
          i || Xt(n, 0, e, 8),
          rt.write(n, t, e, r, 52, 8),
          e + 8
        );
      }
      !(l.TYPED_ARRAY_SUPPORT = (function W() {
        try {
          const n = new Uint8Array(1),
            t = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(n, t),
            42 === n.foo()
          );
        } catch (n) {
          return !1;
        }
      })()) &&
        "undefined" != typeof console &&
        "function" == typeof console.error &&
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        ),
        Object.defineProperty(l.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(l.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.byteOffset;
          },
        }),
        (l.poolSize = 8192),
        (l.from = function (n, t, e) {
          return dt(n, t, e);
        }),
        Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(l, Uint8Array),
        (l.alloc = function (n, t, e) {
          return (function ut(n, t, e) {
            return (
              it(n),
              n <= 0
                ? q(n)
                : void 0 !== t
                ? "string" == typeof e
                  ? q(n).fill(t, e)
                  : q(n).fill(t)
                : q(n)
            );
          })(n, t, e);
        }),
        (l.allocUnsafe = function (n) {
          return U(n);
        }),
        (l.allocUnsafeSlow = function (n) {
          return U(n);
        }),
        (l.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== l.prototype;
        }),
        (l.compare = function (t, e) {
          if (
            (p(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
            p(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            !l.isBuffer(t) || !l.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          let r = t.length,
            i = e.length;
          for (let c = 0, a = Math.min(r, i); c < a; ++c)
            if (t[c] !== e[c]) {
              (r = t[c]), (i = e[c]);
              break;
            }
          return r < i ? -1 : i < r ? 1 : 0;
        }),
        (l.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (t, e) {
          if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return l.alloc(0);
          let r;
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
          const i = l.allocUnsafe(e);
          let c = 0;
          for (r = 0; r < t.length; ++r) {
            let a = t[r];
            if (p(a, Uint8Array))
              c + a.length > i.length
                ? (l.isBuffer(a) || (a = l.from(a)), a.copy(i, c))
                : Uint8Array.prototype.set.call(i, a, c);
            else {
              if (!l.isBuffer(a))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              a.copy(i, c);
            }
            c += a.length;
          }
          return i;
        }),
        (l.byteLength = bt),
        (l.prototype._isBuffer = !0),
        (l.prototype.swap16 = function () {
          const t = this.length;
          if (t % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let e = 0; e < t; e += 2) Rt(this, e, e + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          const t = this.length;
          if (t % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let e = 0; e < t; e += 4)
            Rt(this, e, e + 3), Rt(this, e + 1, e + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          const t = this.length;
          if (t % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let e = 0; e < t; e += 8)
            Rt(this, e, e + 7),
              Rt(this, e + 1, e + 6),
              Rt(this, e + 2, e + 5),
              Rt(this, e + 3, e + 4);
          return this;
        }),
        (l.prototype.toLocaleString = l.prototype.toString =
          function () {
            const t = this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? re(this, 0, t)
              : pt.apply(this, arguments);
          }),
        (l.prototype.equals = function (t) {
          if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === l.compare(this, t);
        }),
        (l.prototype.inspect = function () {
          let t = "";
          const e = _t.h2;
          return (
            (t = this.toString("hex", 0, e)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > e && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        et && (l.prototype[et] = l.prototype.inspect),
        (l.prototype.compare = function (t, e, r, i, c) {
          if (
            (p(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
            !l.isBuffer(t))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === i && (i = 0),
            void 0 === c && (c = this.length),
            e < 0 || r > t.length || i < 0 || c > this.length)
          )
            throw new RangeError("out of range index");
          if (i >= c && e >= r) return 0;
          if (i >= c) return -1;
          if (e >= r) return 1;
          if (this === t) return 0;
          let a = (c >>>= 0) - (i >>>= 0),
            w = (r >>>= 0) - (e >>>= 0);
          const C = Math.min(a, w),
            M = this.slice(i, c),
            D = t.slice(e, r);
          for (let T = 0; T < C; ++T)
            if (M[T] !== D[T]) {
              (a = M[T]), (w = D[T]);
              break;
            }
          return a < w ? -1 : w < a ? 1 : 0;
        }),
        (l.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (l.prototype.indexOf = function (t, e, r) {
          return Vt(this, t, e, r, !0);
        }),
        (l.prototype.lastIndexOf = function (t, e, r) {
          return Vt(this, t, e, r, !1);
        }),
        (l.prototype.write = function (t, e, r, i) {
          if (void 0 === e) (i = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e)
            (i = e), (r = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === i && (i = "utf8"))
                : ((i = r), (r = void 0));
          }
          const c = this.length - e;
          if (
            ((void 0 === r || r > c) && (r = c),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          i || (i = "utf8");
          let a = !1;
          for (;;)
            switch (i) {
              case "hex":
                return te(this, t, e, r);
              case "utf8":
              case "utf-8":
                return ee(this, t, e, r);
              case "ascii":
              case "latin1":
              case "binary":
                return ne(this, t, e, r);
              case "base64":
                return xt(this, t, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return Mt(this, t, e, r);
              default:
                if (a) throw new TypeError("Unknown encoding: " + i);
                (i = ("" + i).toLowerCase()), (a = !0);
            }
        }),
        (l.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (l.prototype.slice = function (t, e) {
          const r = this.length;
          (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0
              ? (e += r) < 0 && (e = 0)
              : e > r && (e = r),
            e < t && (e = t);
          const i = this.subarray(t, e);
          return Object.setPrototypeOf(i, l.prototype), i;
        }),
        (l.prototype.readUintLE = l.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || lt(t, e, this.length);
            let i = this[t],
              c = 1,
              a = 0;
            for (; ++a < e && (c *= 256); ) i += this[t + a] * c;
            return i;
          }),
        (l.prototype.readUintBE = l.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || lt(t, e, this.length);
            let i = this[t + --e],
              c = 1;
            for (; e > 0 && (c *= 256); ) i += this[t + --e] * c;
            return i;
          }),
        (l.prototype.readUint8 = l.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || lt(t, 1, this.length), this[t];
          }),
        (l.prototype.readUint16LE = l.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || lt(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (l.prototype.readUint16BE = l.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || lt(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (l.prototype.readUint32LE = l.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || lt(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
        (l.prototype.readUint32BE = l.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || lt(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (l.prototype.readBigUInt64LE = E(function (t) {
          At((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && Zt(t, this.length - 8);
          const i =
              e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
            c = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
          return BigInt(i) + (BigInt(c) << BigInt(32));
        })),
        (l.prototype.readBigUInt64BE = E(function (t) {
          At((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && Zt(t, this.length - 8);
          const i =
              e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
            c = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
          return (BigInt(i) << BigInt(32)) + BigInt(c);
        })),
        (l.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || lt(t, e, this.length);
          let i = this[t],
            c = 1,
            a = 0;
          for (; ++a < e && (c *= 256); ) i += this[t + a] * c;
          return (c *= 128), i >= c && (i -= Math.pow(2, 8 * e)), i;
        }),
        (l.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || lt(t, e, this.length);
          let i = e,
            c = 1,
            a = this[t + --i];
          for (; i > 0 && (c *= 256); ) a += this[t + --i] * c;
          return (c *= 128), a >= c && (a -= Math.pow(2, 8 * e)), a;
        }),
        (l.prototype.readInt8 = function (t, e) {
          return (
            (t >>>= 0),
            e || lt(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (l.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || lt(t, 2, this.length);
          const r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (l.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || lt(t, 2, this.length);
          const r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (l.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || lt(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || lt(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (l.prototype.readBigInt64LE = E(function (t) {
          At((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && Zt(t, this.length - 8),
            (BigInt(
              this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)
            ) <<
              BigInt(32)) +
              BigInt(
                e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24
              )
          );
        })),
        (l.prototype.readBigInt64BE = E(function (t) {
          At((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && Zt(t, this.length - 8);
          const i = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
          return (
            (BigInt(i) << BigInt(32)) +
            BigInt(
              this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r
            )
          );
        })),
        (l.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || lt(t, 4, this.length), rt.read(this, t, !0, 23, 4)
          );
        }),
        (l.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || lt(t, 4, this.length), rt.read(this, t, !1, 23, 4)
          );
        }),
        (l.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || lt(t, 8, this.length), rt.read(this, t, !0, 52, 8)
          );
        }),
        (l.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || lt(t, 8, this.length), rt.read(this, t, !1, 52, 8)
          );
        }),
        (l.prototype.writeUintLE = l.prototype.writeUIntLE =
          function (t, e, r, i) {
            (t = +t),
              (e >>>= 0),
              (r >>>= 0),
              i || K(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            let c = 1,
              a = 0;
            for (this[e] = 255 & t; ++a < r && (c *= 256); )
              this[e + a] = (t / c) & 255;
            return e + r;
          }),
        (l.prototype.writeUintBE = l.prototype.writeUIntBE =
          function (t, e, r, i) {
            (t = +t),
              (e >>>= 0),
              (r >>>= 0),
              i || K(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            let c = r - 1,
              a = 1;
            for (this[e + c] = 255 & t; --c >= 0 && (a *= 256); )
              this[e + c] = (t / a) & 255;
            return e + r;
          }),
        (l.prototype.writeUint8 = l.prototype.writeUInt8 =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || K(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (l.prototype.writeUint16LE = l.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || K(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (l.prototype.writeUint16BE = l.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || K(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (l.prototype.writeUint32LE = l.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || K(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (l.prototype.writeUint32BE = l.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || K(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (l.prototype.writeBigUInt64LE = E(function (t, e = 0) {
          return Wt(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (l.prototype.writeBigUInt64BE = E(function (t, e = 0) {
          return qt(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (l.prototype.writeIntLE = function (t, e, r, i) {
          if (((t = +t), (e >>>= 0), !i)) {
            const C = Math.pow(2, 8 * r - 1);
            K(this, t, e, r, C - 1, -C);
          }
          let c = 0,
            a = 1,
            w = 0;
          for (this[e] = 255 & t; ++c < r && (a *= 256); )
            t < 0 && 0 === w && 0 !== this[e + c - 1] && (w = 1),
              (this[e + c] = (((t / a) >> 0) - w) & 255);
          return e + r;
        }),
        (l.prototype.writeIntBE = function (t, e, r, i) {
          if (((t = +t), (e >>>= 0), !i)) {
            const C = Math.pow(2, 8 * r - 1);
            K(this, t, e, r, C - 1, -C);
          }
          let c = r - 1,
            a = 1,
            w = 0;
          for (this[e + c] = 255 & t; --c >= 0 && (a *= 256); )
            t < 0 && 0 === w && 0 !== this[e + c + 1] && (w = 1),
              (this[e + c] = (((t / a) >> 0) - w) & 255);
          return e + r;
        }),
        (l.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || K(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (l.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || K(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (l.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || K(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (l.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || K(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (l.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || K(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (l.prototype.writeBigInt64LE = E(function (t, e = 0) {
          return Wt(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (l.prototype.writeBigInt64BE = E(function (t, e = 0) {
          return qt(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (l.prototype.writeFloatLE = function (t, e, r) {
          return zt(this, t, e, !0, r);
        }),
        (l.prototype.writeFloatBE = function (t, e, r) {
          return zt(this, t, e, !1, r);
        }),
        (l.prototype.writeDoubleLE = function (t, e, r) {
          return oe(this, t, e, !0, r);
        }),
        (l.prototype.writeDoubleBE = function (t, e, r) {
          return oe(this, t, e, !1, r);
        }),
        (l.prototype.copy = function (t, e, r, i) {
          if (!l.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            !i && 0 !== i && (i = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            i > 0 && i < r && (i = r),
            i === r || 0 === t.length || 0 === this.length)
          )
            return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("Index out of range");
          if (i < 0) throw new RangeError("sourceEnd out of bounds");
          i > this.length && (i = this.length),
            t.length - e < i - r && (i = t.length - e + r);
          const c = i - r;
          return (
            this === t && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, i)
              : Uint8Array.prototype.set.call(t, this.subarray(r, i), e),
            c
          );
        }),
        (l.prototype.fill = function (t, e, r, i) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((i = e), (e = 0), (r = this.length))
                : "string" == typeof r && ((i = r), (r = this.length)),
              void 0 !== i && "string" != typeof i)
            )
              throw new TypeError("encoding must be a string");
            if ("string" == typeof i && !l.isEncoding(i))
              throw new TypeError("Unknown encoding: " + i);
            if (1 === t.length) {
              const a = t.charCodeAt(0);
              (("utf8" === i && a < 128) || "latin1" === i) && (t = a);
            }
          } else
            "number" == typeof t
              ? (t &= 255)
              : "boolean" == typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= e) return this;
          let c;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (c = e; c < r; ++c) this[c] = t;
          else {
            const a = l.isBuffer(t) ? t : l.from(t, i),
              w = a.length;
            if (0 === w)
              throw new TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (c = 0; c < r - e; ++c) this[c + e] = a[c % w];
          }
          return this;
        });
      const Dt = {};
      function Yt(n, t, e) {
        Dt[n] = class extends e {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${n}]`),
              delete this.name;
          }
          get code() {
            return n;
          }
          set code(i) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: i,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${n}]: ${this.message}`;
          }
        };
      }
      function se(n) {
        let t = "",
          e = n.length;
        const r = "-" === n[0] ? 1 : 0;
        for (; e >= r + 4; e -= 3) t = `_${n.slice(e - 3, e)}${t}`;
        return `${n.slice(0, e)}${t}`;
      }
      function Kt(n, t, e, r, i, c) {
        if (n > e || n < t) {
          const a = "bigint" == typeof t ? "n" : "";
          let w;
          throw (
            ((w =
              c > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${a} and < 2${a} ** ${8 * (c + 1)}${a}`
                  : `>= -(2${a} ** ${8 * (c + 1) - 1}${a}) and < 2 ** ${
                      8 * (c + 1) - 1
                    }${a}`
                : `>= ${t}${a} and <= ${e}${a}`),
            new Dt.ERR_OUT_OF_RANGE("value", w, n))
          );
        }
        !(function ce(n, t, e) {
          At(t, "offset"),
            (void 0 === n[t] || void 0 === n[t + e]) &&
              Zt(t, n.length - (e + 1));
        })(r, i, c);
      }
      function At(n, t) {
        if ("number" != typeof n)
          throw new Dt.ERR_INVALID_ARG_TYPE(t, "number", n);
      }
      function Zt(n, t, e) {
        throw Math.floor(n) !== n
          ? (At(n, e), new Dt.ERR_OUT_OF_RANGE(e || "offset", "an integer", n))
          : t < 0
          ? new Dt.ERR_BUFFER_OUT_OF_BOUNDS()
          : new Dt.ERR_OUT_OF_RANGE(
              e || "offset",
              `>= ${e ? 1 : 0} and <= ${t}`,
              n
            );
      }
      Yt(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (n) {
          return n
            ? `${n} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        Yt(
          "ERR_INVALID_ARG_TYPE",
          function (n, t) {
            return `The "${n}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError
        ),
        Yt(
          "ERR_OUT_OF_RANGE",
          function (n, t, e) {
            let r = `The value of "${n}" is out of range.`,
              i = e;
            return (
              Number.isInteger(e) && Math.abs(e) > 2 ** 32
                ? (i = se(String(e)))
                : "bigint" == typeof e &&
                  ((i = String(e)),
                  (e > BigInt(2) ** BigInt(32) ||
                    e < -(BigInt(2) ** BigInt(32))) &&
                    (i = se(i)),
                  (i += "n")),
              (r += ` It must be ${t}. Received ${i}`),
              r
            );
          },
          RangeError
        );
      const Ht = /[^+/0-9A-Za-z-_]/g;
      function Jt(n, t) {
        let e;
        t = t || 1 / 0;
        const r = n.length;
        let i = null;
        const c = [];
        for (let a = 0; a < r; ++a) {
          if (((e = n.charCodeAt(a)), e > 55295 && e < 57344)) {
            if (!i) {
              if (e > 56319) {
                (t -= 3) > -1 && c.push(239, 191, 189);
                continue;
              }
              if (a + 1 === r) {
                (t -= 3) > -1 && c.push(239, 191, 189);
                continue;
              }
              i = e;
              continue;
            }
            if (e < 56320) {
              (t -= 3) > -1 && c.push(239, 191, 189), (i = e);
              continue;
            }
            e = 65536 + (((i - 55296) << 10) | (e - 56320));
          } else i && (t -= 3) > -1 && c.push(239, 191, 189);
          if (((i = null), e < 128)) {
            if ((t -= 1) < 0) break;
            c.push(e);
          } else if (e < 2048) {
            if ((t -= 2) < 0) break;
            c.push((e >> 6) | 192, (63 & e) | 128);
          } else if (e < 65536) {
            if ((t -= 3) < 0) break;
            c.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (63 & e) | 128);
          } else {
            if (!(e < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            c.push(
              (e >> 18) | 240,
              ((e >> 12) & 63) | 128,
              ((e >> 6) & 63) | 128,
              (63 & e) | 128
            );
          }
        }
        return c;
      }
      function o(n) {
        return Tt.toByteArray(
          (function vt(n) {
            if ((n = (n = n.split("=")[0]).trim().replace(Ht, "")).length < 2)
              return "";
            for (; n.length % 4 != 0; ) n += "=";
            return n;
          })(n)
        );
      }
      function u(n, t, e, r) {
        let i;
        for (i = 0; i < r && !(i + e >= t.length || i >= n.length); ++i)
          t[i + e] = n[i];
        return i;
      }
      function p(n, t) {
        return (
          n instanceof t ||
          (null != n &&
            null != n.constructor &&
            null != n.constructor.name &&
            n.constructor.name === t.name)
        );
      }
      function h(n) {
        return n != n;
      }
      const y = (function () {
        const n = "0123456789abcdef",
          t = new Array(256);
        for (let e = 0; e < 16; ++e) {
          const r = 16 * e;
          for (let i = 0; i < 16; ++i) t[r + i] = n[e] + n[i];
        }
        return t;
      })();
      function E(n) {
        return "undefined" == typeof BigInt ? x : n;
      }
      function x() {
        throw new Error("BigInt not supported");
      }
    },
    8461: (It, _t) => {
      (_t.read = function (X, L, Tt, rt, et) {
        var nt,
          W,
          q = 8 * et - rt - 1,
          l = (1 << q) - 1,
          dt = l >> 1,
          it = -7,
          ut = Tt ? et - 1 : 0,
          U = Tt ? -1 : 1,
          A = X[L + ut];
        for (
          ut += U, nt = A & ((1 << -it) - 1), A >>= -it, it += q;
          it > 0;
          nt = 256 * nt + X[L + ut], ut += U, it -= 8
        );
        for (
          W = nt & ((1 << -it) - 1), nt >>= -it, it += rt;
          it > 0;
          W = 256 * W + X[L + ut], ut += U, it -= 8
        );
        if (0 === nt) nt = 1 - dt;
        else {
          if (nt === l) return W ? NaN : (1 / 0) * (A ? -1 : 1);
          (W += Math.pow(2, rt)), (nt -= dt);
        }
        return (A ? -1 : 1) * W * Math.pow(2, nt - rt);
      }),
        (_t.write = function (X, L, Tt, rt, et, nt) {
          var W,
            q,
            l,
            dt = 8 * nt - et - 1,
            it = (1 << dt) - 1,
            ut = it >> 1,
            U = 23 === et ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            A = rt ? 0 : nt - 1,
            O = rt ? 1 : -1,
            F = L < 0 || (0 === L && 1 / L < 0) ? 1 : 0;
          for (
            L = Math.abs(L),
              isNaN(L) || L === 1 / 0
                ? ((q = isNaN(L) ? 1 : 0), (W = it))
                : ((W = Math.floor(Math.log(L) / Math.LN2)),
                  L * (l = Math.pow(2, -W)) < 1 && (W--, (l *= 2)),
                  (L += W + ut >= 1 ? U / l : U * Math.pow(2, 1 - ut)) * l >=
                    2 && (W++, (l /= 2)),
                  W + ut >= it
                    ? ((q = 0), (W = it))
                    : W + ut >= 1
                    ? ((q = (L * l - 1) * Math.pow(2, et)), (W += ut))
                    : ((q = L * Math.pow(2, ut - 1) * Math.pow(2, et)),
                      (W = 0)));
            et >= 8;
            X[Tt + A] = 255 & q, A += O, q /= 256, et -= 8
          );
          for (
            W = (W << et) | q, dt += et;
            dt > 0;
            X[Tt + A] = 255 & W, A += O, W /= 256, dt -= 8
          );
          X[Tt + A - O] |= 128 * F;
        });
    },
    8583: () => {
      "use strict";
      !(function (o) {
        const u = o.performance;
        function p($) {
          u && u.mark && u.mark($);
        }
        function h($, B) {
          u && u.measure && u.measure($, B);
        }
        p("Zone");
        const y = o.__Zone_symbol_prefix || "__zone_symbol__";
        function E($) {
          return y + $;
        }
        const x = !0 === o[E("forceDuplicateZoneCheck")];
        if (o.Zone) {
          if (x || "function" != typeof o.Zone.__symbol__)
            throw new Error("Zone already loaded.");
          return o.Zone;
        }
        let n = (() => {
          class $ {
            constructor(s, f) {
              (this._parent = s),
                (this._name = f ? f.name || "unnamed" : "<root>"),
                (this._properties = (f && f.properties) || {}),
                (this._zoneDelegate = new e(
                  this,
                  this._parent && this._parent._zoneDelegate,
                  f
                ));
            }
            static assertZonePatched() {
              if (o.Promise !== St.ZoneAwarePromise)
                throw new Error(
                  "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                );
            }
            static get root() {
              let s = $.current;
              for (; s.parent; ) s = s.parent;
              return s;
            }
            static get current() {
              return st.zone;
            }
            static get currentTask() {
              return Pt;
            }
            static __load_patch(s, f, S = !1) {
              if (St.hasOwnProperty(s)) {
                if (!S && x) throw Error("Already loaded patch: " + s);
              } else if (!o["__Zone_disable_" + s]) {
                const Z = "Zone:" + s;
                p(Z), (St[s] = f(o, $, ht)), h(Z, Z);
              }
            }
            get parent() {
              return this._parent;
            }
            get name() {
              return this._name;
            }
            get(s) {
              const f = this.getZoneWith(s);
              if (f) return f._properties[s];
            }
            getZoneWith(s) {
              let f = this;
              for (; f; ) {
                if (f._properties.hasOwnProperty(s)) return f;
                f = f._parent;
              }
              return null;
            }
            fork(s) {
              if (!s) throw new Error("ZoneSpec required!");
              return this._zoneDelegate.fork(this, s);
            }
            wrap(s, f) {
              if ("function" != typeof s)
                throw new Error("Expecting function got: " + s);
              const S = this._zoneDelegate.intercept(this, s, f),
                Z = this;
              return function () {
                return Z.runGuarded(S, this, arguments, f);
              };
            }
            run(s, f, S, Z) {
              st = { parent: st, zone: this };
              try {
                return this._zoneDelegate.invoke(this, s, f, S, Z);
              } finally {
                st = st.parent;
              }
            }
            runGuarded(s, f = null, S, Z) {
              st = { parent: st, zone: this };
              try {
                try {
                  return this._zoneDelegate.invoke(this, s, f, S, Z);
                } catch (Et) {
                  if (this._zoneDelegate.handleError(this, Et)) throw Et;
                }
              } finally {
                st = st.parent;
              }
            }
            runTask(s, f, S) {
              if (s.zone != this)
                throw new Error(
                  "A task can only be run in the zone of creation! (Creation: " +
                    (s.zone || mt).name +
                    "; Execution: " +
                    this.name +
                    ")"
                );
              if (s.state === Y && (s.type === wt || s.type === N)) return;
              const Z = s.state != b;
              Z && s._transitionTo(b, z), s.runCount++;
              const Et = Pt;
              (Pt = s), (st = { parent: st, zone: this });
              try {
                s.type == N &&
                  s.data &&
                  !s.data.isPeriodic &&
                  (s.cancelFn = void 0);
                try {
                  return this._zoneDelegate.invokeTask(this, s, f, S);
                } catch (_) {
                  if (this._zoneDelegate.handleError(this, _)) throw _;
                }
              } finally {
                s.state !== Y &&
                  s.state !== k &&
                  (s.type == wt || (s.data && s.data.isPeriodic)
                    ? Z && s._transitionTo(z, b)
                    : ((s.runCount = 0),
                      this._updateTaskCount(s, -1),
                      Z && s._transitionTo(Y, b, Y))),
                  (st = st.parent),
                  (Pt = Et);
              }
            }
            scheduleTask(s) {
              if (s.zone && s.zone !== this) {
                let S = this;
                for (; S; ) {
                  if (S === s.zone)
                    throw Error(
                      `can not reschedule task to ${this.name} which is descendants of the original zone ${s.zone.name}`
                    );
                  S = S.parent;
                }
              }
              s._transitionTo(ft, Y);
              const f = [];
              (s._zoneDelegates = f), (s._zone = this);
              try {
                s = this._zoneDelegate.scheduleTask(this, s);
              } catch (S) {
                throw (
                  (s._transitionTo(k, ft, Y),
                  this._zoneDelegate.handleError(this, S),
                  S)
                );
              }
              return (
                s._zoneDelegates === f && this._updateTaskCount(s, 1),
                s.state == ft && s._transitionTo(z, ft),
                s
              );
            }
            scheduleMicroTask(s, f, S, Z) {
              return this.scheduleTask(new r(V, s, f, S, Z, void 0));
            }
            scheduleMacroTask(s, f, S, Z, Et) {
              return this.scheduleTask(new r(N, s, f, S, Z, Et));
            }
            scheduleEventTask(s, f, S, Z, Et) {
              return this.scheduleTask(new r(wt, s, f, S, Z, Et));
            }
            cancelTask(s) {
              if (s.zone != this)
                throw new Error(
                  "A task can only be cancelled in the zone of creation! (Creation: " +
                    (s.zone || mt).name +
                    "; Execution: " +
                    this.name +
                    ")"
                );
              s._transitionTo(J, z, b);
              try {
                this._zoneDelegate.cancelTask(this, s);
              } catch (f) {
                throw (
                  (s._transitionTo(k, J),
                  this._zoneDelegate.handleError(this, f),
                  f)
                );
              }
              return (
                this._updateTaskCount(s, -1),
                s._transitionTo(Y, J),
                (s.runCount = 0),
                s
              );
            }
            _updateTaskCount(s, f) {
              const S = s._zoneDelegates;
              -1 == f && (s._zoneDelegates = null);
              for (let Z = 0; Z < S.length; Z++)
                S[Z]._updateTaskCount(s.type, f);
            }
          }
          return ($.__symbol__ = E), $;
        })();
        const t = {
          name: "",
          onHasTask: ($, B, s, f) => $.hasTask(s, f),
          onScheduleTask: ($, B, s, f) => $.scheduleTask(s, f),
          onInvokeTask: ($, B, s, f, S, Z) => $.invokeTask(s, f, S, Z),
          onCancelTask: ($, B, s, f) => $.cancelTask(s, f),
        };
        class e {
          constructor(B, s, f) {
            (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
              (this.zone = B),
              (this._parentDelegate = s),
              (this._forkZS = f && (f && f.onFork ? f : s._forkZS)),
              (this._forkDlgt = f && (f.onFork ? s : s._forkDlgt)),
              (this._forkCurrZone =
                f && (f.onFork ? this.zone : s._forkCurrZone)),
              (this._interceptZS = f && (f.onIntercept ? f : s._interceptZS)),
              (this._interceptDlgt =
                f && (f.onIntercept ? s : s._interceptDlgt)),
              (this._interceptCurrZone =
                f && (f.onIntercept ? this.zone : s._interceptCurrZone)),
              (this._invokeZS = f && (f.onInvoke ? f : s._invokeZS)),
              (this._invokeDlgt = f && (f.onInvoke ? s : s._invokeDlgt)),
              (this._invokeCurrZone =
                f && (f.onInvoke ? this.zone : s._invokeCurrZone)),
              (this._handleErrorZS =
                f && (f.onHandleError ? f : s._handleErrorZS)),
              (this._handleErrorDlgt =
                f && (f.onHandleError ? s : s._handleErrorDlgt)),
              (this._handleErrorCurrZone =
                f && (f.onHandleError ? this.zone : s._handleErrorCurrZone)),
              (this._scheduleTaskZS =
                f && (f.onScheduleTask ? f : s._scheduleTaskZS)),
              (this._scheduleTaskDlgt =
                f && (f.onScheduleTask ? s : s._scheduleTaskDlgt)),
              (this._scheduleTaskCurrZone =
                f && (f.onScheduleTask ? this.zone : s._scheduleTaskCurrZone)),
              (this._invokeTaskZS =
                f && (f.onInvokeTask ? f : s._invokeTaskZS)),
              (this._invokeTaskDlgt =
                f && (f.onInvokeTask ? s : s._invokeTaskDlgt)),
              (this._invokeTaskCurrZone =
                f && (f.onInvokeTask ? this.zone : s._invokeTaskCurrZone)),
              (this._cancelTaskZS =
                f && (f.onCancelTask ? f : s._cancelTaskZS)),
              (this._cancelTaskDlgt =
                f && (f.onCancelTask ? s : s._cancelTaskDlgt)),
              (this._cancelTaskCurrZone =
                f && (f.onCancelTask ? this.zone : s._cancelTaskCurrZone)),
              (this._hasTaskZS = null),
              (this._hasTaskDlgt = null),
              (this._hasTaskDlgtOwner = null),
              (this._hasTaskCurrZone = null);
            const S = f && f.onHasTask;
            (S || (s && s._hasTaskZS)) &&
              ((this._hasTaskZS = S ? f : t),
              (this._hasTaskDlgt = s),
              (this._hasTaskDlgtOwner = this),
              (this._hasTaskCurrZone = B),
              f.onScheduleTask ||
                ((this._scheduleTaskZS = t),
                (this._scheduleTaskDlgt = s),
                (this._scheduleTaskCurrZone = this.zone)),
              f.onInvokeTask ||
                ((this._invokeTaskZS = t),
                (this._invokeTaskDlgt = s),
                (this._invokeTaskCurrZone = this.zone)),
              f.onCancelTask ||
                ((this._cancelTaskZS = t),
                (this._cancelTaskDlgt = s),
                (this._cancelTaskCurrZone = this.zone)));
          }
          fork(B, s) {
            return this._forkZS
              ? this._forkZS.onFork(this._forkDlgt, this.zone, B, s)
              : new n(B, s);
          }
          intercept(B, s, f) {
            return this._interceptZS
              ? this._interceptZS.onIntercept(
                  this._interceptDlgt,
                  this._interceptCurrZone,
                  B,
                  s,
                  f
                )
              : s;
          }
          invoke(B, s, f, S, Z) {
            return this._invokeZS
              ? this._invokeZS.onInvoke(
                  this._invokeDlgt,
                  this._invokeCurrZone,
                  B,
                  s,
                  f,
                  S,
                  Z
                )
              : s.apply(f, S);
          }
          handleError(B, s) {
            return (
              !this._handleErrorZS ||
              this._handleErrorZS.onHandleError(
                this._handleErrorDlgt,
                this._handleErrorCurrZone,
                B,
                s
              )
            );
          }
          scheduleTask(B, s) {
            let f = s;
            if (this._scheduleTaskZS)
              this._hasTaskZS && f._zoneDelegates.push(this._hasTaskDlgtOwner),
                (f = this._scheduleTaskZS.onScheduleTask(
                  this._scheduleTaskDlgt,
                  this._scheduleTaskCurrZone,
                  B,
                  s
                )),
                f || (f = s);
            else if (s.scheduleFn) s.scheduleFn(s);
            else {
              if (s.type != V) throw new Error("Task is missing scheduleFn.");
              T(s);
            }
            return f;
          }
          invokeTask(B, s, f, S) {
            return this._invokeTaskZS
              ? this._invokeTaskZS.onInvokeTask(
                  this._invokeTaskDlgt,
                  this._invokeTaskCurrZone,
                  B,
                  s,
                  f,
                  S
                )
              : s.callback.apply(f, S);
          }
          cancelTask(B, s) {
            let f;
            if (this._cancelTaskZS)
              f = this._cancelTaskZS.onCancelTask(
                this._cancelTaskDlgt,
                this._cancelTaskCurrZone,
                B,
                s
              );
            else {
              if (!s.cancelFn) throw Error("Task is not cancelable");
              f = s.cancelFn(s);
            }
            return f;
          }
          hasTask(B, s) {
            try {
              this._hasTaskZS &&
                this._hasTaskZS.onHasTask(
                  this._hasTaskDlgt,
                  this._hasTaskCurrZone,
                  B,
                  s
                );
            } catch (f) {
              this.handleError(B, f);
            }
          }
          _updateTaskCount(B, s) {
            const f = this._taskCounts,
              S = f[B],
              Z = (f[B] = S + s);
            if (Z < 0)
              throw new Error("More tasks executed then were scheduled.");
            (0 != S && 0 != Z) ||
              this.hasTask(this.zone, {
                microTask: f.microTask > 0,
                macroTask: f.macroTask > 0,
                eventTask: f.eventTask > 0,
                change: B,
              });
          }
        }
        class r {
          constructor(B, s, f, S, Z, Et) {
            if (
              ((this._zone = null),
              (this.runCount = 0),
              (this._zoneDelegates = null),
              (this._state = "notScheduled"),
              (this.type = B),
              (this.source = s),
              (this.data = S),
              (this.scheduleFn = Z),
              (this.cancelFn = Et),
              !f)
            )
              throw new Error("callback is not defined");
            this.callback = f;
            const _ = this;
            this.invoke =
              B === wt && S && S.useG
                ? r.invokeTask
                : function () {
                    return r.invokeTask.call(o, _, this, arguments);
                  };
          }
          static invokeTask(B, s, f) {
            B || (B = this), kt++;
            try {
              return B.runCount++, B.zone.runTask(B, s, f);
            } finally {
              1 == kt && I(), kt--;
            }
          }
          get zone() {
            return this._zone;
          }
          get state() {
            return this._state;
          }
          cancelScheduleRequest() {
            this._transitionTo(Y, ft);
          }
          _transitionTo(B, s, f) {
            if (this._state !== s && this._state !== f)
              throw new Error(
                `${this.type} '${
                  this.source
                }': can not transition to '${B}', expecting state '${s}'${
                  f ? " or '" + f + "'" : ""
                }, was '${this._state}'.`
              );
            (this._state = B), B == Y && (this._zoneDelegates = null);
          }
          toString() {
            return this.data && void 0 !== this.data.handleId
              ? this.data.handleId.toString()
              : Object.prototype.toString.call(this);
          }
          toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount,
            };
          }
        }
        const i = E("setTimeout"),
          c = E("Promise"),
          a = E("then");
        let M,
          w = [],
          C = !1;
        function D($) {
          if ((M || (o[c] && (M = o[c].resolve(0))), M)) {
            let B = M[a];
            B || (B = M.then), B.call(M, $);
          } else o[i]($, 0);
        }
        function T($) {
          0 === kt && 0 === w.length && D(I), $ && w.push($);
        }
        function I() {
          if (!C) {
            for (C = !0; w.length; ) {
              const $ = w;
              w = [];
              for (let B = 0; B < $.length; B++) {
                const s = $[B];
                try {
                  s.zone.runTask(s, null, null);
                } catch (f) {
                  ht.onUnhandledError(f);
                }
              }
            }
            ht.microtaskDrainDone(), (C = !1);
          }
        }
        const mt = { name: "NO ZONE" },
          Y = "notScheduled",
          ft = "scheduling",
          z = "scheduled",
          b = "running",
          J = "canceling",
          k = "unknown",
          V = "microTask",
          N = "macroTask",
          wt = "eventTask",
          St = {},
          ht = {
            symbol: E,
            currentZoneFrame: () => st,
            onUnhandledError: ct,
            microtaskDrainDone: ct,
            scheduleMicroTask: T,
            showUncaughtError: () => !n[E("ignoreConsoleErrorUncaughtError")],
            patchEventTarget: () => [],
            patchOnProperties: ct,
            patchMethod: () => ct,
            bindArguments: () => [],
            patchThen: () => ct,
            patchMacroTask: () => ct,
            patchEventPrototype: () => ct,
            isIEOrEdge: () => !1,
            getGlobalObjects: () => {},
            ObjectDefineProperty: () => ct,
            ObjectGetOwnPropertyDescriptor: () => {},
            ObjectCreate: () => {},
            ArraySlice: () => [],
            patchClass: () => ct,
            wrapWithCurrentZone: () => ct,
            filterProperties: () => [],
            attachOriginToPatched: () => ct,
            _redefineProperty: () => ct,
            patchCallbacks: () => ct,
            nativeScheduleMicroTask: D,
          };
        let st = { parent: null, zone: new n(null, null) },
          Pt = null,
          kt = 0;
        function ct() {}
        h("Zone", "Zone"), (o.Zone = n);
      })(
        ("undefined" != typeof window && window) ||
          ("undefined" != typeof self && self) ||
          global
      );
      const It = Object.getOwnPropertyDescriptor,
        _t = Object.defineProperty,
        X = Object.getPrototypeOf,
        L = Object.create,
        Tt = Array.prototype.slice,
        rt = "addEventListener",
        et = "removeEventListener",
        nt = Zone.__symbol__(rt),
        W = Zone.__symbol__(et),
        q = "true",
        l = "false",
        dt = Zone.__symbol__("");
      function it(o, u) {
        return Zone.current.wrap(o, u);
      }
      function ut(o, u, p, h, y) {
        return Zone.current.scheduleMacroTask(o, u, p, h, y);
      }
      const U = Zone.__symbol__,
        A = "undefined" != typeof window,
        O = A ? window : void 0,
        F = (A && O) || ("object" == typeof self && self) || global;
      function yt(o, u) {
        for (let p = o.length - 1; p >= 0; p--)
          "function" == typeof o[p] && (o[p] = it(o[p], u + "_" + p));
        return o;
      }
      function gt(o) {
        return (
          !o ||
          (!1 !== o.writable &&
            !("function" == typeof o.get && void 0 === o.set))
        );
      }
      const bt =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope,
        pt =
          !("nw" in F) &&
          void 0 !== F.process &&
          "[object process]" === {}.toString.call(F.process),
        Rt = !pt && !bt && !(!A || !O.HTMLElement),
        Vt =
          void 0 !== F.process &&
          "[object process]" === {}.toString.call(F.process) &&
          !bt &&
          !(!A || !O.HTMLElement),
        Lt = {},
        te = function (o) {
          if (!(o = o || F.event)) return;
          let u = Lt[o.type];
          u || (u = Lt[o.type] = U("ON_PROPERTY" + o.type));
          const p = this || o.target || F,
            h = p[u];
          let y;
          if (Rt && p === O && "error" === o.type) {
            const E = o;
            (y =
              h &&
              h.call(this, E.message, E.filename, E.lineno, E.colno, E.error)),
              !0 === y && o.preventDefault();
          } else
            (y = h && h.apply(this, arguments)),
              null != y && !y && o.preventDefault();
          return y;
        };
      function ee(o, u, p) {
        let h = It(o, u);
        if (
          (!h && p && It(p, u) && (h = { enumerable: !0, configurable: !0 }),
          !h || !h.configurable)
        )
          return;
        const y = U("on" + u + "patched");
        if (o.hasOwnProperty(y) && o[y]) return;
        delete h.writable, delete h.value;
        const E = h.get,
          x = h.set,
          n = u.substr(2);
        let t = Lt[n];
        t || (t = Lt[n] = U("ON_PROPERTY" + n)),
          (h.set = function (e) {
            let r = this;
            !r && o === F && (r = F),
              r &&
                ("function" == typeof r[t] && r.removeEventListener(n, te),
                x && x.call(r, null),
                (r[t] = e),
                "function" == typeof e && r.addEventListener(n, te, !1));
          }),
          (h.get = function () {
            let e = this;
            if ((!e && o === F && (e = F), !e)) return null;
            const r = e[t];
            if (r) return r;
            if (E) {
              let i = E.call(this);
              if (i)
                return (
                  h.set.call(this, i),
                  "function" == typeof e.removeAttribute &&
                    e.removeAttribute(u),
                  i
                );
            }
            return null;
          }),
          _t(o, u, h),
          (o[y] = !0);
      }
      function ne(o, u, p) {
        if (u) for (let h = 0; h < u.length; h++) ee(o, "on" + u[h], p);
        else {
          const h = [];
          for (const y in o) "on" == y.substr(0, 2) && h.push(y);
          for (let y = 0; y < h.length; y++) ee(o, h[y], p);
        }
      }
      const xt = U("originalInstance");
      function Mt(o) {
        const u = F[o];
        if (!u) return;
        (F[U(o)] = u),
          (F[o] = function () {
            const y = yt(arguments, o);
            switch (y.length) {
              case 0:
                this[xt] = new u();
                break;
              case 1:
                this[xt] = new u(y[0]);
                break;
              case 2:
                this[xt] = new u(y[0], y[1]);
                break;
              case 3:
                this[xt] = new u(y[0], y[1], y[2]);
                break;
              case 4:
                this[xt] = new u(y[0], y[1], y[2], y[3]);
                break;
              default:
                throw new Error("Arg list too long.");
            }
          }),
          Bt(F[o], u);
        const p = new u(function () {});
        let h;
        for (h in p)
          ("XMLHttpRequest" === o && "responseBlob" === h) ||
            (function (y) {
              "function" == typeof p[y]
                ? (F[o].prototype[y] = function () {
                    return this[xt][y].apply(this[xt], arguments);
                  })
                : _t(F[o].prototype, y, {
                    set: function (E) {
                      "function" == typeof E
                        ? ((this[xt][y] = it(E, o + "." + y)),
                          Bt(this[xt][y], E))
                        : (this[xt][y] = E);
                    },
                    get: function () {
                      return this[xt][y];
                    },
                  });
            })(h);
        for (h in u)
          "prototype" !== h && u.hasOwnProperty(h) && (F[o][h] = u[h]);
      }
      function Ct(o, u, p) {
        let h = o;
        for (; h && !h.hasOwnProperty(u); ) h = X(h);
        !h && o[u] && (h = o);
        const y = U(u);
        let E = null;
        if (
          h &&
          (!(E = h[y]) || !h.hasOwnProperty(y)) &&
          ((E = h[y] = h[u]), gt(h && It(h, u)))
        ) {
          const n = p(E, y, u);
          (h[u] = function () {
            return n(this, arguments);
          }),
            Bt(h[u], E);
        }
        return E;
      }
      function re(o, u, p) {
        let h = null;
        function y(E) {
          const x = E.data;
          return (
            (x.args[x.cbIdx] = function () {
              E.invoke.apply(this, arguments);
            }),
            h.apply(x.target, x.args),
            E
          );
        }
        h = Ct(
          o,
          u,
          (E) =>
            function (x, n) {
              const t = p(x, n);
              return t.cbIdx >= 0 && "function" == typeof n[t.cbIdx]
                ? ut(t.name, n[t.cbIdx], t, y)
                : E.apply(x, n);
            }
        );
      }
      function Bt(o, u) {
        o[U("OriginalDelegate")] = u;
      }
      let ie = !1,
        $t = !1;
      function le() {
        if (ie) return $t;
        ie = !0;
        try {
          const o = O.navigator.userAgent;
          (-1 !== o.indexOf("MSIE ") ||
            -1 !== o.indexOf("Trident/") ||
            -1 !== o.indexOf("Edge/")) &&
            ($t = !0);
        } catch (o) {}
        return $t;
      }
      Zone.__load_patch("ZoneAwarePromise", (o, u, p) => {
        const h = Object.getOwnPropertyDescriptor,
          y = Object.defineProperty,
          x = p.symbol,
          n = [],
          t = !0 === o[x("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
          e = x("Promise"),
          r = x("then");
        (p.onUnhandledError = (_) => {
          if (p.showUncaughtError()) {
            const g = _ && _.rejection;
            g
              ? console.error(
                  "Unhandled Promise rejection:",
                  g instanceof Error ? g.message : g,
                  "; Zone:",
                  _.zone.name,
                  "; Task:",
                  _.task && _.task.source,
                  "; Value:",
                  g,
                  g instanceof Error ? g.stack : void 0
                )
              : console.error(_);
          }
        }),
          (p.microtaskDrainDone = () => {
            for (; n.length; ) {
              const _ = n.shift();
              try {
                _.zone.runGuarded(() => {
                  throw _.throwOriginal ? _.rejection : _;
                });
              } catch (g) {
                a(g);
              }
            }
          });
        const c = x("unhandledPromiseRejectionHandler");
        function a(_) {
          p.onUnhandledError(_);
          try {
            const g = u[c];
            "function" == typeof g && g.call(this, _);
          } catch (g) {}
        }
        function w(_) {
          return _ && _.then;
        }
        function C(_) {
          return _;
        }
        function M(_) {
          return s.reject(_);
        }
        const D = x("state"),
          T = x("value"),
          I = x("finally"),
          mt = x("parentPromiseValue"),
          Y = x("parentPromiseState"),
          z = null,
          b = !0,
          J = !1;
        function V(_, g) {
          return (d) => {
            try {
              ht(_, g, d);
            } catch (m) {
              ht(_, !1, m);
            }
          };
        }
        const St = x("currentTaskTrace");
        function ht(_, g, d) {
          const m = (function () {
            let _ = !1;
            return function (d) {
              return function () {
                _ || ((_ = !0), d.apply(null, arguments));
              };
            };
          })();
          if (_ === d) throw new TypeError("Promise resolved with itself");
          if (_[D] === z) {
            let P = null;
            try {
              ("object" == typeof d || "function" == typeof d) &&
                (P = d && d.then);
            } catch (v) {
              return (
                m(() => {
                  ht(_, !1, v);
                })(),
                _
              );
            }
            if (
              g !== J &&
              d instanceof s &&
              d.hasOwnProperty(D) &&
              d.hasOwnProperty(T) &&
              d[D] !== z
            )
              Pt(d), ht(_, d[D], d[T]);
            else if (g !== J && "function" == typeof P)
              try {
                P.call(d, m(V(_, g)), m(V(_, !1)));
              } catch (v) {
                m(() => {
                  ht(_, !1, v);
                })();
              }
            else {
              _[D] = g;
              const v = _[T];
              if (
                ((_[T] = d),
                _[I] === I && g === b && ((_[D] = _[Y]), (_[T] = _[mt])),
                g === J && d instanceof Error)
              ) {
                const R =
                  u.currentTask &&
                  u.currentTask.data &&
                  u.currentTask.data.__creationTrace__;
                R &&
                  y(d, St, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: R,
                  });
              }
              for (let R = 0; R < v.length; )
                kt(_, v[R++], v[R++], v[R++], v[R++]);
              if (0 == v.length && g == J) {
                _[D] = 0;
                let R = d;
                try {
                  throw new Error(
                    "Uncaught (in promise): " +
                      (function E(_) {
                        return _ && _.toString === Object.prototype.toString
                          ? ((_.constructor && _.constructor.name) || "") +
                              ": " +
                              JSON.stringify(_)
                          : _
                          ? _.toString()
                          : Object.prototype.toString.call(_);
                      })(d) +
                      (d && d.stack ? "\n" + d.stack : "")
                  );
                } catch (j) {
                  R = j;
                }
                t && (R.throwOriginal = !0),
                  (R.rejection = d),
                  (R.promise = _),
                  (R.zone = u.current),
                  (R.task = u.currentTask),
                  n.push(R),
                  p.scheduleMicroTask();
              }
            }
          }
          return _;
        }
        const st = x("rejectionHandledHandler");
        function Pt(_) {
          if (0 === _[D]) {
            try {
              const g = u[st];
              g &&
                "function" == typeof g &&
                g.call(this, { rejection: _[T], promise: _ });
            } catch (g) {}
            _[D] = J;
            for (let g = 0; g < n.length; g++)
              _ === n[g].promise && n.splice(g, 1);
          }
        }
        function kt(_, g, d, m, P) {
          Pt(_);
          const v = _[D],
            R = v
              ? "function" == typeof m
                ? m
                : C
              : "function" == typeof P
              ? P
              : M;
          g.scheduleMicroTask(
            "Promise.then",
            () => {
              try {
                const j = _[T],
                  H = !!d && I === d[I];
                H && ((d[mt] = j), (d[Y] = v));
                const G = g.run(R, void 0, H && R !== M && R !== C ? [] : [j]);
                ht(d, !0, G);
              } catch (j) {
                ht(d, !1, j);
              }
            },
            d
          );
        }
        const $ = function () {},
          B = o.AggregateError;
        class s {
          static toString() {
            return "function ZoneAwarePromise() { [native code] }";
          }
          static resolve(g) {
            return ht(new this(null), b, g);
          }
          static reject(g) {
            return ht(new this(null), J, g);
          }
          static any(g) {
            if (!g || "function" != typeof g[Symbol.iterator])
              return Promise.reject(new B([], "All promises were rejected"));
            const d = [];
            let m = 0;
            try {
              for (let R of g) m++, d.push(s.resolve(R));
            } catch (R) {
              return Promise.reject(new B([], "All promises were rejected"));
            }
            if (0 === m)
              return Promise.reject(new B([], "All promises were rejected"));
            let P = !1;
            const v = [];
            return new s((R, j) => {
              for (let H = 0; H < d.length; H++)
                d[H].then(
                  (G) => {
                    P || ((P = !0), R(G));
                  },
                  (G) => {
                    v.push(G),
                      m--,
                      0 === m &&
                        ((P = !0), j(new B(v, "All promises were rejected")));
                  }
                );
            });
          }
          static race(g) {
            let d,
              m,
              P = new this((j, H) => {
                (d = j), (m = H);
              });
            function v(j) {
              d(j);
            }
            function R(j) {
              m(j);
            }
            for (let j of g) w(j) || (j = this.resolve(j)), j.then(v, R);
            return P;
          }
          static all(g) {
            return s.allWithCallback(g);
          }
          static allSettled(g) {
            return (
              this && this.prototype instanceof s ? this : s
            ).allWithCallback(g, {
              thenCallback: (m) => ({ status: "fulfilled", value: m }),
              errorCallback: (m) => ({ status: "rejected", reason: m }),
            });
          }
          static allWithCallback(g, d) {
            let m,
              P,
              v = new this((G, Q) => {
                (m = G), (P = Q);
              }),
              R = 2,
              j = 0;
            const H = [];
            for (let G of g) {
              w(G) || (G = this.resolve(G));
              const Q = j;
              try {
                G.then(
                  (tt) => {
                    (H[Q] = d ? d.thenCallback(tt) : tt), R--, 0 === R && m(H);
                  },
                  (tt) => {
                    d
                      ? ((H[Q] = d.errorCallback(tt)), R--, 0 === R && m(H))
                      : P(tt);
                  }
                );
              } catch (tt) {
                P(tt);
              }
              R++, j++;
            }
            return (R -= 2), 0 === R && m(H), v;
          }
          constructor(g) {
            const d = this;
            if (!(d instanceof s))
              throw new Error("Must be an instanceof Promise.");
            (d[D] = z), (d[T] = []);
            try {
              g && g(V(d, b), V(d, J));
            } catch (m) {
              ht(d, !1, m);
            }
          }
          get [Symbol.toStringTag]() {
            return "Promise";
          }
          get [Symbol.species]() {
            return s;
          }
          then(g, d) {
            let m = this.constructor[Symbol.species];
            (!m || "function" != typeof m) && (m = this.constructor || s);
            const P = new m($),
              v = u.current;
            return (
              this[D] == z ? this[T].push(v, P, g, d) : kt(this, v, P, g, d), P
            );
          }
          catch(g) {
            return this.then(null, g);
          }
          finally(g) {
            let d = this.constructor[Symbol.species];
            (!d || "function" != typeof d) && (d = s);
            const m = new d($);
            m[I] = I;
            const P = u.current;
            return (
              this[D] == z ? this[T].push(P, m, g, g) : kt(this, P, m, g, g), m
            );
          }
        }
        (s.resolve = s.resolve),
          (s.reject = s.reject),
          (s.race = s.race),
          (s.all = s.all);
        const f = (o[e] = o.Promise);
        o.Promise = s;
        const S = x("thenPatched");
        function Z(_) {
          const g = _.prototype,
            d = h(g, "then");
          if (d && (!1 === d.writable || !d.configurable)) return;
          const m = g.then;
          (g[r] = m),
            (_.prototype.then = function (P, v) {
              return new s((j, H) => {
                m.call(this, j, H);
              }).then(P, v);
            }),
            (_[S] = !0);
        }
        return (
          (p.patchThen = Z),
          f &&
            (Z(f),
            Ct(o, "fetch", (_) =>
              (function Et(_) {
                return function (g, d) {
                  let m = _.apply(g, d);
                  if (m instanceof s) return m;
                  let P = m.constructor;
                  return P[S] || Z(P), m;
                };
              })(_)
            )),
          (Promise[u.__symbol__("uncaughtPromiseErrors")] = n),
          s
        );
      }),
        Zone.__load_patch("toString", (o) => {
          const u = Function.prototype.toString,
            p = U("OriginalDelegate"),
            h = U("Promise"),
            y = U("Error"),
            E = function () {
              if ("function" == typeof this) {
                const e = this[p];
                if (e)
                  return "function" == typeof e
                    ? u.call(e)
                    : Object.prototype.toString.call(e);
                if (this === Promise) {
                  const r = o[h];
                  if (r) return u.call(r);
                }
                if (this === Error) {
                  const r = o[y];
                  if (r) return u.call(r);
                }
              }
              return u.call(this);
            };
          (E[p] = u), (Function.prototype.toString = E);
          const x = Object.prototype.toString;
          Object.prototype.toString = function () {
            return "function" == typeof Promise && this instanceof Promise
              ? "[object Promise]"
              : x.call(this);
          };
        });
      let Nt = !1;
      if ("undefined" != typeof window)
        try {
          const o = Object.defineProperty({}, "passive", {
            get: function () {
              Nt = !0;
            },
          });
          window.addEventListener("test", o, o),
            window.removeEventListener("test", o, o);
        } catch (o) {
          Nt = !1;
        }
      const lt = { useG: !0 },
        K = {},
        Wt = {},
        qt = new RegExp("^" + dt + "(\\w+)(true|false)$"),
        Xt = U("propagationStopped");
      function zt(o, u) {
        const p = (u ? u(o) : o) + l,
          h = (u ? u(o) : o) + q,
          y = dt + p,
          E = dt + h;
        (K[o] = {}), (K[o][l] = y), (K[o][q] = E);
      }
      function oe(o, u, p, h) {
        const y = (h && h.add) || rt,
          E = (h && h.rm) || et,
          x = (h && h.listeners) || "eventListeners",
          n = (h && h.rmAll) || "removeAllListeners",
          t = U(y),
          e = "." + y + ":",
          c = function (T, I, mt) {
            if (T.isRemoved) return;
            const Y = T.callback;
            let ft;
            "object" == typeof Y &&
              Y.handleEvent &&
              ((T.callback = (b) => Y.handleEvent(b)),
              (T.originalDelegate = Y));
            try {
              T.invoke(T, I, [mt]);
            } catch (b) {
              ft = b;
            }
            const z = T.options;
            return (
              z &&
                "object" == typeof z &&
                z.once &&
                I[E].call(
                  I,
                  mt.type,
                  T.originalDelegate ? T.originalDelegate : T.callback,
                  z
                ),
              ft
            );
          };
        function a(T, I, mt) {
          if (!(I = I || o.event)) return;
          const Y = T || I.target || o,
            ft = Y[K[I.type][mt ? q : l]];
          if (ft) {
            const z = [];
            if (1 === ft.length) {
              const b = c(ft[0], Y, I);
              b && z.push(b);
            } else {
              const b = ft.slice();
              for (let J = 0; J < b.length && (!I || !0 !== I[Xt]); J++) {
                const k = c(b[J], Y, I);
                k && z.push(k);
              }
            }
            if (1 === z.length) throw z[0];
            for (let b = 0; b < z.length; b++) {
              const J = z[b];
              u.nativeScheduleMicroTask(() => {
                throw J;
              });
            }
          }
        }
        const w = function (T) {
            return a(this, T, !1);
          },
          C = function (T) {
            return a(this, T, !0);
          };
        function M(T, I) {
          if (!T) return !1;
          let mt = !0;
          I && void 0 !== I.useG && (mt = I.useG);
          const Y = I && I.vh;
          let ft = !0;
          I && void 0 !== I.chkDup && (ft = I.chkDup);
          let z = !1;
          I && void 0 !== I.rt && (z = I.rt);
          let b = T;
          for (; b && !b.hasOwnProperty(y); ) b = X(b);
          if ((!b && T[y] && (b = T), !b || b[t])) return !1;
          const J = I && I.eventNameToString,
            k = {},
            V = (b[t] = b[y]),
            N = (b[U(E)] = b[E]),
            wt = (b[U(x)] = b[x]),
            St = (b[U(n)] = b[n]);
          let ht;
          function st(d, m) {
            return !Nt && "object" == typeof d && d
              ? !!d.capture
              : Nt && m
              ? "boolean" == typeof d
                ? { capture: d, passive: !0 }
                : d
                ? "object" == typeof d && !1 !== d.passive
                  ? Object.assign(Object.assign({}, d), { passive: !0 })
                  : d
                : { passive: !0 }
              : d;
          }
          I && I.prepend && (ht = b[U(I.prepend)] = b[I.prepend]);
          const s = mt
              ? function (d) {
                  if (!k.isExisting)
                    return V.call(
                      k.target,
                      k.eventName,
                      k.capture ? C : w,
                      k.options
                    );
                }
              : function (d) {
                  return V.call(k.target, k.eventName, d.invoke, k.options);
                },
            f = mt
              ? function (d) {
                  if (!d.isRemoved) {
                    const m = K[d.eventName];
                    let P;
                    m && (P = m[d.capture ? q : l]);
                    const v = P && d.target[P];
                    if (v)
                      for (let R = 0; R < v.length; R++)
                        if (v[R] === d) {
                          v.splice(R, 1),
                            (d.isRemoved = !0),
                            0 === v.length &&
                              ((d.allRemoved = !0), (d.target[P] = null));
                          break;
                        }
                  }
                  if (d.allRemoved)
                    return N.call(
                      d.target,
                      d.eventName,
                      d.capture ? C : w,
                      d.options
                    );
                }
              : function (d) {
                  return N.call(d.target, d.eventName, d.invoke, d.options);
                },
            Z =
              I && I.diff
                ? I.diff
                : function (d, m) {
                    const P = typeof m;
                    return (
                      ("function" === P && d.callback === m) ||
                      ("object" === P && d.originalDelegate === m)
                    );
                  },
            Et = Zone[U("UNPATCHED_EVENTS")],
            _ = o[U("PASSIVE_EVENTS")],
            g = function (d, m, P, v, R = !1, j = !1) {
              return function () {
                const H = this || o;
                let G = arguments[0];
                I && I.transferEventName && (G = I.transferEventName(G));
                let Q = arguments[1];
                if (!Q) return d.apply(this, arguments);
                if (pt && "uncaughtException" === G)
                  return d.apply(this, arguments);
                let tt = !1;
                if ("function" != typeof Q) {
                  if (!Q.handleEvent) return d.apply(this, arguments);
                  tt = !0;
                }
                if (Y && !Y(d, Q, H, arguments)) return;
                const Ot = Nt && !!_ && -1 !== _.indexOf(G),
                  Ft = st(arguments[2], Ot);
                if (Et)
                  for (let jt = 0; jt < Et.length; jt++)
                    if (G === Et[jt])
                      return Ot
                        ? d.call(H, G, Q, Ft)
                        : d.apply(this, arguments);
                const pe = !!Ft && ("boolean" == typeof Ft || Ft.capture),
                  ye = !(!Ft || "object" != typeof Ft) && Ft.once,
                  Te = Zone.current;
                let de = K[G];
                de || (zt(G, J), (de = K[G]));
                const Ee = de[pe ? q : l];
                let ue,
                  Gt = H[Ee],
                  _e = !1;
                if (Gt) {
                  if (((_e = !0), ft))
                    for (let jt = 0; jt < Gt.length; jt++)
                      if (Z(Gt[jt], Q)) return;
                } else Gt = H[Ee] = [];
                const ge = H.constructor.name,
                  me = Wt[ge];
                me && (ue = me[G]),
                  ue || (ue = ge + m + (J ? J(G) : G)),
                  (k.options = Ft),
                  ye && (k.options.once = !1),
                  (k.target = H),
                  (k.capture = pe),
                  (k.eventName = G),
                  (k.isExisting = _e);
                const Qt = mt ? lt : void 0;
                Qt && (Qt.taskData = k);
                const Ut = Te.scheduleEventTask(ue, Q, Qt, P, v);
                return (
                  (k.target = null),
                  Qt && (Qt.taskData = null),
                  ye && (Ft.once = !0),
                  (!Nt && "boolean" == typeof Ut.options) || (Ut.options = Ft),
                  (Ut.target = H),
                  (Ut.capture = pe),
                  (Ut.eventName = G),
                  tt && (Ut.originalDelegate = Q),
                  j ? Gt.unshift(Ut) : Gt.push(Ut),
                  R ? H : void 0
                );
              };
            };
          return (
            (b[y] = g(V, e, s, f, z)),
            ht &&
              (b.prependListener = g(
                ht,
                ".prependListener:",
                function (d) {
                  return ht.call(k.target, k.eventName, d.invoke, k.options);
                },
                f,
                z,
                !0
              )),
            (b[E] = function () {
              const d = this || o;
              let m = arguments[0];
              I && I.transferEventName && (m = I.transferEventName(m));
              const P = arguments[2],
                v = !!P && ("boolean" == typeof P || P.capture),
                R = arguments[1];
              if (!R) return N.apply(this, arguments);
              if (Y && !Y(N, R, d, arguments)) return;
              const j = K[m];
              let H;
              j && (H = j[v ? q : l]);
              const G = H && d[H];
              if (G)
                for (let Q = 0; Q < G.length; Q++) {
                  const tt = G[Q];
                  if (Z(tt, R))
                    return (
                      G.splice(Q, 1),
                      (tt.isRemoved = !0),
                      0 === G.length &&
                        ((tt.allRemoved = !0),
                        (d[H] = null),
                        "string" == typeof m) &&
                        (d[dt + "ON_PROPERTY" + m] = null),
                      tt.zone.cancelTask(tt),
                      z ? d : void 0
                    );
                }
              return N.apply(this, arguments);
            }),
            (b[x] = function () {
              const d = this || o;
              let m = arguments[0];
              I && I.transferEventName && (m = I.transferEventName(m));
              const P = [],
                v = Dt(d, J ? J(m) : m);
              for (let R = 0; R < v.length; R++) {
                const j = v[R];
                P.push(j.originalDelegate ? j.originalDelegate : j.callback);
              }
              return P;
            }),
            (b[n] = function () {
              const d = this || o;
              let m = arguments[0];
              if (m) {
                I && I.transferEventName && (m = I.transferEventName(m));
                const P = K[m];
                if (P) {
                  const j = d[P[l]],
                    H = d[P[q]];
                  if (j) {
                    const G = j.slice();
                    for (let Q = 0; Q < G.length; Q++) {
                      const tt = G[Q];
                      this[E].call(
                        this,
                        m,
                        tt.originalDelegate ? tt.originalDelegate : tt.callback,
                        tt.options
                      );
                    }
                  }
                  if (H) {
                    const G = H.slice();
                    for (let Q = 0; Q < G.length; Q++) {
                      const tt = G[Q];
                      this[E].call(
                        this,
                        m,
                        tt.originalDelegate ? tt.originalDelegate : tt.callback,
                        tt.options
                      );
                    }
                  }
                }
              } else {
                const P = Object.keys(d);
                for (let v = 0; v < P.length; v++) {
                  const j = qt.exec(P[v]);
                  let H = j && j[1];
                  H && "removeListener" !== H && this[n].call(this, H);
                }
                this[n].call(this, "removeListener");
              }
              if (z) return this;
            }),
            Bt(b[y], V),
            Bt(b[E], N),
            St && Bt(b[n], St),
            wt && Bt(b[x], wt),
            !0
          );
        }
        let D = [];
        for (let T = 0; T < p.length; T++) D[T] = M(p[T], h);
        return D;
      }
      function Dt(o, u) {
        if (!u) {
          const E = [];
          for (let x in o) {
            const n = qt.exec(x);
            let t = n && n[1];
            if (t && (!u || t === u)) {
              const e = o[x];
              if (e) for (let r = 0; r < e.length; r++) E.push(e[r]);
            }
          }
          return E;
        }
        let p = K[u];
        p || (zt(u), (p = K[u]));
        const h = o[p[l]],
          y = o[p[q]];
        return h ? (y ? h.concat(y) : h.slice()) : y ? y.slice() : [];
      }
      function Yt(o, u) {
        const p = o.Event;
        p &&
          p.prototype &&
          u.patchMethod(
            p.prototype,
            "stopImmediatePropagation",
            (h) =>
              function (y, E) {
                (y[Xt] = !0), h && h.apply(y, E);
              }
          );
      }
      function se(o, u, p, h, y) {
        const E = Zone.__symbol__(h);
        if (u[E]) return;
        const x = (u[E] = u[h]);
        (u[h] = function (n, t, e) {
          return (
            t &&
              t.prototype &&
              y.forEach(function (r) {
                const i = `${p}.${h}::` + r,
                  c = t.prototype;
                if (c.hasOwnProperty(r)) {
                  const a = o.ObjectGetOwnPropertyDescriptor(c, r);
                  a && a.value
                    ? ((a.value = o.wrapWithCurrentZone(a.value, i)),
                      o._redefineProperty(t.prototype, r, a))
                    : c[r] && (c[r] = o.wrapWithCurrentZone(c[r], i));
                } else c[r] && (c[r] = o.wrapWithCurrentZone(c[r], i));
              }),
            x.call(u, n, t, e)
          );
        }),
          o.attachOriginToPatched(u[h], x);
      }
      function ce(o, u, p) {
        if (!p || 0 === p.length) return u;
        const h = p.filter((E) => E.target === o);
        if (!h || 0 === h.length) return u;
        const y = h[0].ignoreProperties;
        return u.filter((E) => -1 === y.indexOf(E));
      }
      function Kt(o, u, p, h) {
        o && ne(o, ce(o, u, p), h);
      }
      function At(o) {
        return Object.getOwnPropertyNames(o)
          .filter((u) => u.startsWith("on") && u.length > 2)
          .map((u) => u.substring(2));
      }
      Zone.__load_patch("util", (o, u, p) => {
        const h = At(o);
        (p.patchOnProperties = ne),
          (p.patchMethod = Ct),
          (p.bindArguments = yt),
          (p.patchMacroTask = re);
        const y = u.__symbol__("BLACK_LISTED_EVENTS"),
          E = u.__symbol__("UNPATCHED_EVENTS");
        o[E] && (o[y] = o[E]),
          o[y] && (u[y] = u[E] = o[y]),
          (p.patchEventPrototype = Yt),
          (p.patchEventTarget = oe),
          (p.isIEOrEdge = le),
          (p.ObjectDefineProperty = _t),
          (p.ObjectGetOwnPropertyDescriptor = It),
          (p.ObjectCreate = L),
          (p.ArraySlice = Tt),
          (p.patchClass = Mt),
          (p.wrapWithCurrentZone = it),
          (p.filterProperties = ce),
          (p.attachOriginToPatched = Bt),
          (p._redefineProperty = Object.defineProperty),
          (p.patchCallbacks = se),
          (p.getGlobalObjects = () => ({
            globalSources: Wt,
            zoneSymbolEventNames: K,
            eventNames: h,
            isBrowser: Rt,
            isMix: Vt,
            isNode: pt,
            TRUE_STR: q,
            FALSE_STR: l,
            ZONE_SYMBOL_PREFIX: dt,
            ADD_EVENT_LISTENER_STR: rt,
            REMOVE_EVENT_LISTENER_STR: et,
          }));
      });
      const Ht = U("zoneTask");
      function vt(o, u, p, h) {
        let y = null,
          E = null;
        p += h;
        const x = {};
        function n(e) {
          const r = e.data;
          return (
            (r.args[0] = function () {
              return e.invoke.apply(this, arguments);
            }),
            (r.handleId = y.apply(o, r.args)),
            e
          );
        }
        function t(e) {
          return E.call(o, e.data.handleId);
        }
        (y = Ct(
          o,
          (u += h),
          (e) =>
            function (r, i) {
              if ("function" == typeof i[0]) {
                const c = {
                    isPeriodic: "Interval" === h,
                    delay:
                      "Timeout" === h || "Interval" === h ? i[1] || 0 : void 0,
                    args: i,
                  },
                  a = i[0];
                i[0] = function () {
                  try {
                    return a.apply(this, arguments);
                  } finally {
                    c.isPeriodic ||
                      ("number" == typeof c.handleId
                        ? delete x[c.handleId]
                        : c.handleId && (c.handleId[Ht] = null));
                  }
                };
                const w = ut(u, i[0], c, n, t);
                if (!w) return w;
                const C = w.data.handleId;
                return (
                  "number" == typeof C ? (x[C] = w) : C && (C[Ht] = w),
                  C &&
                    C.ref &&
                    C.unref &&
                    "function" == typeof C.ref &&
                    "function" == typeof C.unref &&
                    ((w.ref = C.ref.bind(C)), (w.unref = C.unref.bind(C))),
                  "number" == typeof C || C ? C : w
                );
              }
              return e.apply(o, i);
            }
        )),
          (E = Ct(
            o,
            p,
            (e) =>
              function (r, i) {
                const c = i[0];
                let a;
                "number" == typeof c
                  ? (a = x[c])
                  : ((a = c && c[Ht]), a || (a = c)),
                  a && "string" == typeof a.type
                    ? "notScheduled" !== a.state &&
                      ((a.cancelFn && a.data.isPeriodic) || 0 === a.runCount) &&
                      ("number" == typeof c ? delete x[c] : c && (c[Ht] = null),
                      a.zone.cancelTask(a))
                    : e.apply(o, i);
              }
          ));
      }
      Zone.__load_patch("legacy", (o) => {
        const u = o[Zone.__symbol__("legacyPatch")];
        u && u();
      }),
        Zone.__load_patch("queueMicrotask", (o, u, p) => {
          p.patchMethod(
            o,
            "queueMicrotask",
            (h) =>
              function (y, E) {
                u.current.scheduleMicroTask("queueMicrotask", E[0]);
              }
          );
        }),
        Zone.__load_patch("timers", (o) => {
          const u = "set",
            p = "clear";
          vt(o, u, p, "Timeout"),
            vt(o, u, p, "Interval"),
            vt(o, u, p, "Immediate");
        }),
        Zone.__load_patch("requestAnimationFrame", (o) => {
          vt(o, "request", "cancel", "AnimationFrame"),
            vt(o, "mozRequest", "mozCancel", "AnimationFrame"),
            vt(o, "webkitRequest", "webkitCancel", "AnimationFrame");
        }),
        Zone.__load_patch("blocking", (o, u) => {
          const p = ["alert", "prompt", "confirm"];
          for (let h = 0; h < p.length; h++)
            Ct(
              o,
              p[h],
              (E, x, n) =>
                function (t, e) {
                  return u.current.run(E, o, e, n);
                }
            );
        }),
        Zone.__load_patch("EventTarget", (o, u, p) => {
          (function he(o, u) {
            u.patchEventPrototype(o, u);
          })(o, p),
            (function fe(o, u) {
              if (Zone[u.symbol("patchEventTarget")]) return;
              const {
                eventNames: p,
                zoneSymbolEventNames: h,
                TRUE_STR: y,
                FALSE_STR: E,
                ZONE_SYMBOL_PREFIX: x,
              } = u.getGlobalObjects();
              for (let t = 0; t < p.length; t++) {
                const e = p[t],
                  c = x + (e + E),
                  a = x + (e + y);
                (h[e] = {}), (h[e][E] = c), (h[e][y] = a);
              }
              const n = o.EventTarget;
              n && n.prototype && u.patchEventTarget(o, u, [n && n.prototype]);
            })(o, p);
          const h = o.XMLHttpRequestEventTarget;
          h && h.prototype && p.patchEventTarget(o, p, [h.prototype]);
        }),
        Zone.__load_patch("MutationObserver", (o, u, p) => {
          Mt("MutationObserver"), Mt("WebKitMutationObserver");
        }),
        Zone.__load_patch("IntersectionObserver", (o, u, p) => {
          Mt("IntersectionObserver");
        }),
        Zone.__load_patch("FileReader", (o, u, p) => {
          Mt("FileReader");
        }),
        Zone.__load_patch("on_property", (o, u, p) => {
          !(function Zt(o, u) {
            if ((pt && !Vt) || Zone[o.symbol("patchEvents")]) return;
            const p = u.__Zone_ignore_on_properties;
            let h = [];
            if (Rt) {
              const y = window;
              h = h.concat([
                "Document",
                "SVGElement",
                "Element",
                "HTMLElement",
                "HTMLBodyElement",
                "HTMLMediaElement",
                "HTMLFrameSetElement",
                "HTMLFrameElement",
                "HTMLIFrameElement",
                "HTMLMarqueeElement",
                "Worker",
              ]);
              const E = (function ae() {
                try {
                  const o = O.navigator.userAgent;
                  if (-1 !== o.indexOf("MSIE ") || -1 !== o.indexOf("Trident/"))
                    return !0;
                } catch (o) {}
                return !1;
              })()
                ? [{ target: y, ignoreProperties: ["error"] }]
                : [];
              Kt(y, At(y), p && p.concat(E), X(y));
            }
            h = h.concat([
              "XMLHttpRequest",
              "XMLHttpRequestEventTarget",
              "IDBIndex",
              "IDBRequest",
              "IDBOpenDBRequest",
              "IDBDatabase",
              "IDBTransaction",
              "IDBCursor",
              "WebSocket",
            ]);
            for (let y = 0; y < h.length; y++) {
              const E = u[h[y]];
              E && E.prototype && Kt(E.prototype, At(E.prototype), p);
            }
          })(p, o);
        }),
        Zone.__load_patch("customElements", (o, u, p) => {
          !(function Jt(o, u) {
            const { isBrowser: p, isMix: h } = u.getGlobalObjects();
            (p || h) &&
              o.customElements &&
              "customElements" in o &&
              u.patchCallbacks(
                u,
                o.customElements,
                "customElements",
                "define",
                [
                  "connectedCallback",
                  "disconnectedCallback",
                  "adoptedCallback",
                  "attributeChangedCallback",
                ]
              );
          })(o, p);
        }),
        Zone.__load_patch("XHR", (o, u) => {
          !(function t(e) {
            const r = e.XMLHttpRequest;
            if (!r) return;
            const i = r.prototype;
            let a = i[nt],
              w = i[W];
            if (!a) {
              const k = e.XMLHttpRequestEventTarget;
              if (k) {
                const V = k.prototype;
                (a = V[nt]), (w = V[W]);
              }
            }
            const C = "readystatechange",
              M = "scheduled";
            function D(k) {
              const V = k.data,
                N = V.target;
              (N[E] = !1), (N[n] = !1);
              const wt = N[y];
              a || ((a = N[nt]), (w = N[W])), wt && w.call(N, C, wt);
              const St = (N[y] = () => {
                if (N.readyState === N.DONE)
                  if (!V.aborted && N[E] && k.state === M) {
                    const st = N[u.__symbol__("loadfalse")];
                    if (0 !== N.status && st && st.length > 0) {
                      const Pt = k.invoke;
                      (k.invoke = function () {
                        const kt = N[u.__symbol__("loadfalse")];
                        for (let ct = 0; ct < kt.length; ct++)
                          kt[ct] === k && kt.splice(ct, 1);
                        !V.aborted && k.state === M && Pt.call(k);
                      }),
                        st.push(k);
                    } else k.invoke();
                  } else !V.aborted && !1 === N[E] && (N[n] = !0);
              });
              return (
                a.call(N, C, St),
                N[p] || (N[p] = k),
                b.apply(N, V.args),
                (N[E] = !0),
                k
              );
            }
            function T() {}
            function I(k) {
              const V = k.data;
              return (V.aborted = !0), J.apply(V.target, V.args);
            }
            const mt = Ct(
                i,
                "open",
                () =>
                  function (k, V) {
                    return (k[h] = 0 == V[2]), (k[x] = V[1]), mt.apply(k, V);
                  }
              ),
              ft = U("fetchTaskAborting"),
              z = U("fetchTaskScheduling"),
              b = Ct(
                i,
                "send",
                () =>
                  function (k, V) {
                    if (!0 === u.current[z] || k[h]) return b.apply(k, V);
                    {
                      const N = {
                          target: k,
                          url: k[x],
                          isPeriodic: !1,
                          args: V,
                          aborted: !1,
                        },
                        wt = ut("XMLHttpRequest.send", T, N, D, I);
                      k &&
                        !0 === k[n] &&
                        !N.aborted &&
                        wt.state === M &&
                        wt.invoke();
                    }
                  }
              ),
              J = Ct(
                i,
                "abort",
                () =>
                  function (k, V) {
                    const N = (function c(k) {
                      return k[p];
                    })(k);
                    if (N && "string" == typeof N.type) {
                      if (null == N.cancelFn || (N.data && N.data.aborted))
                        return;
                      N.zone.cancelTask(N);
                    } else if (!0 === u.current[ft]) return J.apply(k, V);
                  }
              );
          })(o);
          const p = U("xhrTask"),
            h = U("xhrSync"),
            y = U("xhrListener"),
            E = U("xhrScheduled"),
            x = U("xhrURL"),
            n = U("xhrErrorBeforeScheduled");
        }),
        Zone.__load_patch("geolocation", (o) => {
          o.navigator &&
            o.navigator.geolocation &&
            (function ot(o, u) {
              const p = o.constructor.name;
              for (let h = 0; h < u.length; h++) {
                const y = u[h],
                  E = o[y];
                if (E) {
                  if (!gt(It(o, y))) continue;
                  o[y] = ((n) => {
                    const t = function () {
                      return n.apply(this, yt(arguments, p + "." + y));
                    };
                    return Bt(t, n), t;
                  })(E);
                }
              }
            })(o.navigator.geolocation, [
              "getCurrentPosition",
              "watchPosition",
            ]);
        }),
        Zone.__load_patch("PromiseRejectionEvent", (o, u) => {
          function p(h) {
            return function (y) {
              Dt(o, h).forEach((x) => {
                const n = o.PromiseRejectionEvent;
                if (n) {
                  const t = new n(h, {
                    promise: y.promise,
                    reason: y.rejection,
                  });
                  x.invoke(t);
                }
              });
            };
          }
          o.PromiseRejectionEvent &&
            ((u[U("unhandledPromiseRejectionHandler")] =
              p("unhandledrejection")),
            (u[U("rejectionHandledHandler")] = p("rejectionhandled")));
        });
    },
  },
  (It) => {
    It((It.s = 7435));
  },
]);
